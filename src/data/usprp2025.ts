import { Question } from '../types';

// USP-RP 2025 — residência médica da Faculdade de Medicina de Ribeirão Preto (USP), R1 acesso direto. 100 questões.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const USPRP_2025_QUESTIONS: Question[] = [
  {
    "id": "usprp2025-1",
    "module": "Pediatria",
    "text": "Criança A tem o diagnóstico de Tetralogia de Fallot e após receber vacina de 2 meses, apresentou episódio de cianose severa que melhorou somente após o uso de morfina endovenosa. A criança manteve desvio de rima labial para esquerda após este evento. Criança B tem diagnóstico de coarctação de aorta e deu entrada em serviço de urgência com 2 meses de vida, apresentando vômitos e distensão abdominal severa e dolorosa. Precisou de cirurgia de ressecção de alça intestinal e ileostomia. Ambas as crianças evoluíram com complicações graves secundárias às suas cardiopatias congênitas, sendo que a criança A sofreu uma lesão cerebral e a criança B, uma lesão intestinal.\n\nQual das alternativas apresenta as causas corretas para as complicações apresentadas?",
    "options": [
      "(A) A - Isquemia; B - Isquemia.",
      "(B) A-Isquemia; B - Hipoxemia.",
      "(C) A - Hipoxemia; B - Isquemia.",
      "(D) A - Hipoxemia; B - Hipoxemia."
    ],
    "correctAnswer": 2,
    "explanation": "As duas cardiopatias causam lesões por mecanismos diferentes:\n\n• Criança A, Tetralogia de Fallot: a crise hipoxêmica ('crise de cianose') após o estresse da vacina reduz o fluxo pulmonar e aumenta o shunt direita-esquerda, com hipoxemia grave. A lesão cerebral (desvio de rima) é por hipoxemia; a policitemia ainda aumenta o risco de AVC.\n• Criança B, coarctação da aorta crítica: com o fechamento do canal arterial, o fluxo para a aorta descendente cai e há hipoperfusão de órgãos abaixo da coarctação. A lesão intestinal (enterocolite necrosante ou isquemia mesentérica) decorre de isquemia por baixo débito, não de dessaturação.",
    "commentary": "Isquemia nas duas (A): na Tetralogia de Fallot o mecanismo da crise é hipoxêmico (shunt direita-esquerda), não de baixo fluxo.\n\nA isquemia e B hipoxemia (B): os mecanismos estão invertidos.\n\nHipoxemia nas duas (D): a coarctação não causa cianose central; a lesão intestinal é por hipoperfusão.",
    "reference": "Tratado de Pediatria SBP — Cardiopatias congênitas / Moss & Adams' Heart Disease in Infants, Children and Adolescents",
    "tags": [
      "pediatria",
      "cardiopatias congênitas",
      "tetralogia de Fallot",
      "coarctação da aorta"
    ]
  },
  {
    "id": "usprp2025-2",
    "module": "Pediatria",
    "text": "Menino de 8 anos, 25kg, está internado em serviço de urgência, pois sofreu fratura de úmero após queda de bicicleta. A chefe do plantão recomendou prescrever jejum com soro de manutenção 100% do Holliday, o proporcional para correr por 12 horas. A criança precisará de cirurgia amanhã pela manhã.\n\nQual volume você deve prescrever para este período?",
    "options": [
      "(A) 250 ml.",
      "(B) 500 ml.",
      "(C) 1600 ml.",
      "(D) 800 ml."
    ],
    "correctAnswer": 3,
    "explanation": "Regra de Holliday-Segar para necessidade hídrica diária:\n\n• Primeiros 10 kg: 100 mL/kg = 1.000 mL\n• De 11 a 20 kg: 50 mL/kg = 500 mL\n• Acima de 20 kg: 20 mL/kg × 5 kg = 100 mL\n\nTotal para 25 kg = 1.600 mL/dia. Para 12 horas, metade: 800 mL.",
    "commentary": "250 mL (A): subestima muito o volume.\n\n500 mL (B): corresponde a menos de um terço da necessidade diária.\n\n1.600 mL (C): é o volume de 24 horas, não de 12.",
    "reference": "Holliday MA, Segar WE — Pediatrics 1957 / Tratado de Pediatria SBP — Hidratação venosa",
    "tags": [
      "pediatria",
      "hidratação venosa",
      "Holliday-Segar",
      "soro de manutenção"
    ]
  },
  {
    "id": "usprp2025-3",
    "module": "Pediatria",
    "text": "Paciente de 4 anos vem ao pronto atendimento 20 minutos após picada de escorpião. Enfermeira do plantão chama referindo que a criança está vomitando, tem pele fria e pegajosa, pulsos radiais finos e os seguintes sinais vitais: Frequência cardíaca variando entre 80 bpm e 170 bpm, pressão em membro superior direito 120/105 mmHg, frequência respiratória de 40 irpm, saturação de oxigênio 95%.\n\nApós o atendimento da paciente, a enfermeira pede para tirar uma dúvida do caso com você: Se a pressão estava alta, por que o pulso estava fino? Qual o mecanismo mais adequado para explicar a dúvida apresentada?",
    "options": [
      "(A) Pressões sistólica e diastólica muito convergentes.",
      "(B) Pressão é medida em vaso central e pulso na periferia.",
      "(C) Importante redução da fração de ejeção do miocárdio.",
      "(D) Efeito arterial da liberação colinérgica do veneno."
    ],
    "correctAnswer": 0,
    "explanation": "O escorpionismo grave (vômitos, sudorese, pele fria, taquicardia alternando com bradicardia) decorre de descarga adrenérgica e colinérgica. As catecolaminas causam vasoconstrição periférica intensa e elevam a diastólica.\n\nCom PA de 120/105 mmHg, a pressão de pulso é de apenas 15 mmHg (pressões convergentes). O pulso palpável depende da diferença entre sistólica e diastólica; com pressão de pulso estreita, o pulso fica fino mesmo com PA 'alta'. É sinal de baixo débito e de risco de choque cardiogênico e edema pulmonar.",
    "commentary": "Pressão central e pulso periférico (B): a PA foi medida no braço, no mesmo território do pulso radial.\n\nRedução da fração de ejeção (C): a disfunção miocárdica pode ocorrer, mas a explicação imediata para o pulso fino com PA 'alta' é a pressão de pulso estreita.\n\nEfeito colinérgico arterial (D): o efeito vascular predominante é adrenérgico (vasoconstrição); o colinérgico explica vômitos, sudorese e bradicardia.",
    "reference": "Manual de Controle de Escorpiões e Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos — Ministério da Saúde",
    "tags": [
      "pediatria",
      "escorpionismo",
      "acidentes por animais peçonhentos",
      "choque"
    ]
  },
  {
    "id": "usprp2025-4",
    "module": "Pediatria",
    "text": "Menino de 2 anos com histórico de epilepsia é trazido para a sala de emergência. Mãe refere que criança fez uso de um medicamento por via retal por orientação médica (não lembra o nome), pois apresentou movimentos tônicos clônicos com duração aproximada de 6 minutos. Ao exame físico: sonolenta, frequência respiratória = 10 incursões/minuto, respiração superficial, saturação de oxigênio = 85%. À ausculta pulmonar: murmúrio vesicular diminuído bilateralmente.\n\nQual é a conduta imediata mais apropriada para este paciente?",
    "options": [
      "(A) Fornecer oxigênio por máscara não reinalante.",
      "(B) Administrar Naloxone.",
      "(C) Ventilar com bolsa-válvula-máscara.",
      "(D) Administrar flumazenil."
    ],
    "correctAnswer": 2,
    "explanation": "Após diazepam retal para crise convulsiva, a criança tem depressão respiratória: FR de 10, respiração superficial e SatO₂ de 85%. É hipoventilação, não só hipoxemia.\n\nA prioridade (ABC) é ventilar com bolsa-válvula-máscara e O₂, restabelecendo a ventilação alveolar. Só oferecer O₂ por máscara não corrige a hipoventilação.",
    "commentary": "Máscara não reinalante (A): fornece O₂ mas não ventila; com drive respiratório deprimido, é insuficiente.\n\nNaloxona (B): reverte opioides; o medicamento retal para crise é um benzodiazepínico.\n\nFlumazenil (D): contraindicado em paciente epiléptico (risco de crise refratária); a medida imediata é ventilar.",
    "reference": "PALS — Pediatric Advanced Life Support (AHA) / SBP — Estado de mal epiléptico",
    "tags": [
      "pediatria",
      "emergência pediátrica",
      "depressão respiratória",
      "benzodiazepínicos"
    ]
  },
  {
    "id": "usprp2025-5",
    "module": "Pediatria",
    "text": "Menino de 4 anos está internado em enfermaria no 7º dia de pós-operatório de uma cirurgia cardíaca para correção de uma comunicação interventricular. Inicia sinais de desconforto respiratório súbito, com queda de saturação para 90%, mesmo em uso de cateter nasal de oxigênio 4 litros/minuto. Refere também dor torácica no lado esquerdo.\n\nA radiografia de tórax é apresentada a seguir:",
    "options": [
      "(A) Iniciar antibiótico de amplo espectro.",
      "(B) Ventilar com bolsa-válvula-máscara.",
      "(C) Aumentar o fluxo de oxigênio suplementar.",
      "(D) Drenagem torácica à direita."
    ],
    "correctAnswer": 3,
    "explanation": "No 7º dia de pós-operatório de cirurgia cardíaca (fios de esternotomia na imagem), a criança tem desconforto respiratório súbito, dessaturação apesar do O₂ e dor torácica.\n\nA radiografia mostra hipertransparência sem trama vascular no hemitórax direito (marcado com D), com o pulmão colapsado em direção ao hilo e o mediastino desviado para a esquerda: pneumotórax hipertensivo à direita. A conduta é a descompressão e a drenagem torácica à direita.",
    "commentary": "Antibiótico (A): o quadro é súbito e mecânico, não infeccioso.\n\nVentilar com bolsa-válvula-máscara (B): a criança respira espontaneamente; a pressão positiva antes de drenar agrava o pneumotórax hipertensivo.\n\nAumentar o O₂ (C): não resolve a causa mecânica da hipoxemia.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. (pneumotórax hipertensivo) / Tratado de Pediatria SBP",
    "tags": [
      "pediatria",
      "pós-operatório cardíaco",
      "pneumotórax hipertensivo",
      "drenagem torácica"
    ],
    "image": "/images/usprp2025-5.webp"
  },
  {
    "id": "usprp2025-6",
    "module": "Pediatria",
    "text": "Menina de 18 meses é levada ao atendimento de urgência. Mãe relata que, há 30 minutos, criança estava brincando em casa, sem supervisão, quando a escutou tossir e chorar subitamente. Iniciou sialorreia logo a seguir. Nega febre, sintomas gripais ou vômitos. Na entrada, a criança se encontrava pouco chorosa, mantendo sialorreia, eupneica, com murmúrios vesiculares presentes e simétricos, sem ruídos adventícios. Frequência cardíaca de 120 bpm, saturação de Oxigênio de 97% em ar ambiente, frequência respiratória de 28 ipm.\n\nCom relação à investigação, qual a recomendação que aumenta o poder diagnóstico do exame de imagem?",
    "options": [
      "(A) Realizar radiografias de abdome seriadas.",
      "(B) Solicitar radiografia com contraste iodado.",
      "(C) Fazer duas incidências do tórax, incluindo perfil.",
      "(D) Aguardar 6 a 8 horas para realizar a radiografia."
    ],
    "correctAnswer": 2,
    "explanation": "Engasgo súbito com tosse e choro seguido de sialorreia em criança pequena sem supervisão: suspeita de corpo estranho, provavelmente no esôfago (a sialorreia indica dificuldade de deglutir), com ausculta pulmonar normal.\n\nPara corpo estranho radiopaco (por exemplo, moeda ou bateria), a radiografia em duas incidências (frente e perfil), incluindo pescoço, tórax e abdome, localiza o objeto (esôfago versus traqueia) e identifica baterias (sinal do duplo halo).",
    "commentary": "Radiografias de abdome seriadas (A): não localizam o corpo estranho esofágico, que é a hipótese.\n\nContraste iodado (B): pode causar aspiração e atrasar a endoscopia; não é indicado.\n\nAguardar 6–8 horas (D): o atraso é perigoso, sobretudo se for bateria.",
    "reference": "SBP — Corpo estranho em vias aéreas e digestivas / NASPGHAN — Foreign Body Ingestion (2015)",
    "tags": [
      "pediatria",
      "corpo estranho",
      "emergência pediátrica",
      "radiografia"
    ]
  },
  {
    "id": "usprp2025-7",
    "module": "Pediatria",
    "text": "Uma criança de 8 anos é atendida no ambulatório geral de pediatria devido a baixo rendimento escolar. Há 3 meses, vem sendo observadas dificuldades como falta de atenção nos afazeres escolares e domésticos, dificuldade em manter a concentração durante as atividades de lazer e nas aulas de educação física, além de dificuldade em seguir instruções e concluir os deveres. A mãe relata que o comportamento desatento é frequente e que a criança rotineiramente perde objetos e se distrai facilmente com estímulos externos. O pré natal e parto foram sem intercorrências e não tem antecedentes familiares de doenças neurológicas. O exame neurológico não tem sinais de focalização.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Iniciar metilfenidato 30 minutos antes de ir para escola.",
      "(B) Manter seguimento e solicitar relatórios acadêmicos.",
      "(C) Solicitar eletroencefalograma com fotoestimulação.",
      "(D) Iniciar carbamazepina e checar níveis séricos no retorno."
    ],
    "correctAnswer": 1,
    "explanation": "Desatenção com prejuízo escolar há apenas 3 meses e relato apenas da mãe. Para diagnosticar TDAH (DSM-5-TR), os sintomas precisam persistir por pelo menos 6 meses, estar presentes em dois ou mais ambientes (casa e escola) e começar antes dos 12 anos.\n\nA conduta é manter o seguimento e obter relatórios escolares e escalas aplicadas por professores (SNAP-IV), além de avaliar outras causas (visão, audição, aprendizagem, fatores emocionais).",
    "commentary": "Metilfenidato (A): o diagnóstico ainda não está estabelecido (duração insuficiente, um só informante).\n\nEEG com fotoestimulação (C): sem sinais de crises de ausência ou outras crises, não é indicado.\n\nCarbamazepina (D): sem diagnóstico de epilepsia, não há indicação.",
    "reference": "DSM-5-TR / SBP — Manual de Orientação: TDAH",
    "tags": [
      "pediatria",
      "TDAH",
      "desenvolvimento infantil",
      "saúde mental infantil"
    ]
  },
  {
    "id": "usprp2025-8",
    "module": "Pediatria",
    "text": "Lactente de 8 meses é encaminhado ao consultório pediátrico com quadro de lesões cutâneas pruriginosas e recidivantes desde os 6 meses de vida. Não notou fatores desencadeantes. Criança em aleitamento materno, iniciou complementação com fórmula infantil de seguimento aos 6 meses de vida, juntamente com introdução alimentar. Atualmente aceita todos os tipos de alimentos, inclusive trigo e ovo.\n\nLesões são predominantemente em face, abdome e superfícies extensoras com características conforme foto a seguir: Qual a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Dermatite atópica.",
      "(B) Eritema multiforme.",
      "(C) Urticária crônica.",
      "(D) Dermatite de contato."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente com lesões eczematosas pruriginosas e recidivantes desde os 6 meses, em face, tronco e superfícies extensoras (distribuição típica do lactente): dermatite atópica.\n\nO quadro não tem relação com alimentos introduzidos (aceita trigo e ovo). O tratamento se baseia em hidratação da pele, banhos curtos e mornos, corticoide tópico nas crises e controle de fatores agravantes.",
    "commentary": "Eritema multiforme (B): lesões em alvo agudas, geralmente pós-infecciosas (herpes), não recidivantes desde os 6 meses.\n\nUrticária crônica (C): placas edematosas e fugazes (menos de 24 h), não eczema.\n\nDermatite de contato (D): limitada à área de contato com o agente.",
    "reference": "Consenso Brasileiro de Dermatite Atópica (ASBAI/SBP/SBD)",
    "tags": [
      "pediatria",
      "dermatologia",
      "dermatite atópica"
    ],
    "image": "/images/usprp2025-8.webp"
  },
  {
    "id": "usprp2025-9",
    "module": "Pediatria",
    "text": "Menina de 8 anos, com relato de febre, coriza e odinofagia há 10 dias, que melhoraram espontaneamente. Há 2 dias iniciou dor e edema de tornozelos, há 1 dia com dor abdominal acompanhada de diarreia sanguinolenta e presença de lesões purpúricas em membros inferiores. A avaliação laboratorial mostrou hemograma normal, urina rotina normal e VHS de 27 mm/1 hora (VN< 20mm/1 hora).\n\nQual o diagnóstico mais provável?",
    "options": [
      "(A) Hemofilia A.",
      "(B) Vasculite por IgA.",
      "(C) Lupus eritematoso sistêmico.",
      "(D) Síndrome inflamatória multissistêmica pós COVID."
    ],
    "correctAnswer": 1,
    "explanation": "Escolar com infecção de vias aéreas prévia, seguida de artralgia ou artrite de tornozelos, dor abdominal com sangramento intestinal e púrpura palpável em membros inferiores, com plaquetas normais: vasculite por IgA (púrpura de Henoch-Schönlein).\n\nÉ a vasculite mais comum da infância. A urina normal no momento não exclui nefrite futura: acompanhar com urina e PA por 6 a 12 meses.",
    "commentary": "Hemofilia A (A): causa hemartroses e hematomas, não púrpura palpável nem vasculite.\n\nLúpus (C): raro nessa idade, com citopenias e alterações urinárias frequentes, sem esse padrão.\n\nSIM-P pós-covid (D): febre persistente com choque e marcadores inflamatórios muito elevados; não cursa com púrpura palpável nos membros inferiores.",
    "reference": "Critérios EULAR/PRINTO/PRES para vasculite por IgA / SHARE recommendations (2019)",
    "tags": [
      "pediatria",
      "reumatologia pediátrica",
      "vasculite por IgA",
      "púrpura de Henoch-Schönlein"
    ]
  },
  {
    "id": "usprp2025-10",
    "module": "Pediatria",
    "text": "Menino, 4 anos, apresenta-se com queixas de diarreia crônica há 1 ano. A mãe relata que está mais apático e com o apetite reduzido. Ao exame físico apresenta-se com abdômen distendido, face edemaciada e edema assimétrico em membros inferiores principalmente à direita. Exames Laboratoriais: Hemograma: Hb= 10g/dL; GB = 10.000/microL; linfócitos = 700/microL (VN: 1500–6000/microL). Albumina: 2,5 g/dL (VR: 3,5–5,0). Gamaglobulina: 0,2 g/dL (0,50 a 1,68). Esteatócrito: 10% (VN < 2%). Alfa 1 antitripsina fecal: 5,0 mg/g fezes (VN < 3,0).\n\nQual o diagnóstico mais provável?",
    "options": [
      "(A) Deficiência de alfa 1 antitripsina.",
      "(B) Doença de Kwashiorkor.",
      "(C) Hipogamaglobulinemia congênita.",
      "(D) Enteropatia perdedora de proteínas."
    ],
    "correctAnswer": 3,
    "explanation": "Diarreia crônica com edema assimétrico (sugere linfedema), hipoalbuminemia, linfopenia, hipogamaglobulinemia, esteatorreia e alfa-1-antitripsina fecal elevada: enteropatia perdedora de proteínas.\n\nA alfa-1-antitripsina fecal elevada é o marcador da perda proteica intestinal (resiste à digestão). O padrão sugere linfangiectasia intestinal, com perda de linfa rica em proteínas, linfócitos e gordura.",
    "commentary": "Deficiência de alfa-1-antitripsina (A): doença hepática e pulmonar; o marcador aqui está elevado nas fezes, não baixo no sangue.\n\nKwashiorkor (B): desnutrição proteica por dieta, sem perda fecal de alfa-1-antitripsina nem linfopenia.\n\nHipogamaglobulinemia congênita (C): não explica hipoalbuminemia, linfopenia e perda proteica fecal; a hipogamaglobulinemia aqui é secundária.",
    "reference": "Tratado de Pediatria SBP — Gastroenterologia / Nelson Textbook of Pediatrics",
    "tags": [
      "pediatria",
      "gastroenterologia pediátrica",
      "enteropatia perdedora de proteínas",
      "linfangiectasia"
    ]
  },
  {
    "id": "usprp2025-11",
    "module": "Pediatria",
    "text": "Paciente de 10 anos, caiu do balanço há 5 dias, evoluindo com dor em joelho esquerdo e dificuldade para deambular. Há 1 dia, apresentou piora do estado geral, tosse e desconforto respiratório importante, além de rebaixamento do nível de consciência. Ao exame físico: Mau estado geral, FR: 50 ipm, retrações intercostais e subcostais, murmúrio vesicular reduzido bilateralmente, FC: 160 bpm, pressão arterial 70/20 mmHg, pulsos amplos, tempo de enchimento capilar menor que 1 segundo, extremidades quentes e avermelhadas. Presença de edema, calor local e hiperemia em joelho esquerdo. Não houve melhora do quadro após colocação de coxim abaixo de occipício, aspiração de vias aéreas inferiores, intubação com sequência rápida, administração de duas alíquotas de soro fisiológico e início da antibioticoterapia. Como próximo passo do tratamento, é recomendado iniciar droga endovenosa de infusão contínua.\n\nQual droga deve ser iniciada neste momento?",
    "options": [
      "(A) Epinefrina.",
      "(B) Dobutamina.",
      "(C) Norepinefrina.",
      "(D) Milrinona."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com foco infeccioso osteoarticular em joelho, insuficiência respiratória e choque com pulsos amplos, enchimento capilar rápido, extremidades quentes e hipotensão com diastólica muito baixa (70/20): choque séptico 'quente', de vasodilatação. Persiste após volume.\n\nNo choque quente refratário a fluidos, o vasoativo de escolha é a noradrenalina (efeito vasoconstritor alfa), pelas diretrizes do Surviving Sepsis Campaign pediátrico e do PALS.",
    "commentary": "Epinefrina (A): preferida no choque 'frio' (baixo débito, extremidades frias).\n\nDobutamina (B): inotrópico vasodilatador, que pioraria a hipotensão no choque vasodilatado.\n\nMilrinona (D): inodilatador, contraindicado na hipotensão com vasodilatação.",
    "reference": "Surviving Sepsis Campaign — Pediatric Guidelines (2020) / PALS",
    "tags": [
      "pediatria",
      "choque séptico",
      "noradrenalina",
      "terapia intensiva pediátrica"
    ]
  },
  {
    "id": "usprp2025-12",
    "module": "Pediatria",
    "text": "Uma menina com 9 anos foi avaliada há 4 meses em função do pai de 32 anos apresentar dislipidemia e estar em tratamento com estatina há 2 anos. Esta paciente apresenta peso e estatura no percentil 75, tem aprendizagem normal e não utiliza nenhum tipo de medicamento ou suplementação nutricional ou vitamínica. Seu exame físico não apresenta anormalidades. Os pais informam que seguiram a maior parte das recomendações nutricionais e de atividade física recomendada na avaliação anterior. Abaixo estão os resultados dos exames realizados na primeira avaliação e atualmente.\n\nQual é a conduta mais adequada para esta paciente?",
    "options": [
      "(A) Iniciar tratamento com fibrato.",
      "(B) Iniciar tratamento com estatina.",
      "(C) Iniciar tratamento com levotiroxina.",
      "(D) Intensificar as mudanças no estilo de vida."
    ],
    "correctAnswer": 1,
    "explanation": "Menina de 9 anos com pai com dislipidemia precoce e LDL persistentemente elevado (230 e depois 217 mg/dL), apesar de mudanças de estilo de vida por 4 meses, com TSH discretamente alterado e T4 livre normal. É provável hipercolesterolemia familiar heterozigótica.\n\nAs diretrizes (SBP, SBC, AAP) recomendam estatina a partir de 8 a 10 anos quando o LDL permanece ≥ 190 mg/dL após mudanças de estilo de vida, ou ≥ 160 com história familiar de DCV precoce ou fatores de risco.",
    "commentary": "Fibrato (A): indicado para hipertrigliceridemia grave; os triglicerídeos são normais.\n\nLevotiroxina (C): TSH de 5,1 com T4 livre normal e anti-TPO negativo é hipotireoidismo subclínico leve, que não explica LDL tão alto nem indica tratamento.\n\nIntensificar MEV (D): já foram tentadas, e o LDL ≥ 190 persistente indica fármaco.",
    "reference": "Atualização da Diretriz Brasileira de Dislipidemias (SBC, 2017) / SBP — Dislipidemia na infância / NHLBI Expert Panel (2011)",
    "tags": [
      "pediatria",
      "dislipidemia",
      "hipercolesterolemia familiar",
      "estatina"
    ],
    "image": "/images/usprp2025-12.webp"
  },
  {
    "id": "usprp2025-13",
    "module": "Pediatria",
    "text": "Você recebe para atendimento uma criança de 3 anos, do sexo masculino, com queixa de sangramento de difícil controle por uma lesão perfuro cortante em pé direito há 1 hora. Os pais mudaram-se recentemente para a região, e contam que no seguimento anterior na origem, criança foi diagnosticada com \"problema de sangramento\", mas não trouxeram relatório médico. Ao exame clínico de admissão, paciente encontra-se em bom estado geral, descorado +/4+ e hidratado. Apresentava ferimento de cerca de 6 cm em dorso do pé direito, com sangramento abundante no local, com pouca melhora do sangramento com medidas locais de compressão do ferimento. À ectoscopia, foram observadas algumas raras petéquias em membros inferiores. Sem outros achados anormais ao exame clínico.\n\nQual o diagnóstico de base mais provável?",
    "options": [
      "(A) Hipertensão porta com hiperesplenismo.",
      "(B) Hemofilia A ou B moderada.",
      "(C) Doença de Von Willebrand.",
      "(D) Púrpura trombocitopênica imune."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com 'problema de sangramento' conhecido, sangramento mucocutâneo e de ferida de difícil controle e algumas petéquias, sem hemartrose ou hematomas profundos descritos. O padrão de sangramento é de hemostasia primária, e a doença de von Willebrand é a coagulopatia hereditária mais comum.\n\nEla compromete a adesão plaquetária, causando sangramento de pele e mucosas e sangramento prolongado em cortes. O tratamento inclui desmopressina (tipo 1) ou concentrado com fator de von Willebrand.",
    "commentary": "Hipertensão porta com hiperesplenismo (A): exigiria esplenomegalia e outros sinais, ausentes.\n\nHemofilia moderada (B): sangramentos profundos (hemartroses, hematomas musculares); petéquias não são típicas.\n\nPTI (D): costuma ser aguda, com petéquias e equimoses disseminadas; não é um 'problema de sangramento' conhecido de longa data.",
    "reference": "ASH/ISTH/NHF/WFH Guidelines on von Willebrand Disease (2021) / Tratado de Pediatria SBP",
    "tags": [
      "pediatria",
      "hematologia pediátrica",
      "doença de von Willebrand",
      "coagulopatias"
    ]
  },
  {
    "id": "usprp2025-14",
    "module": "Pediatria",
    "text": "Lactente de 1 ano, em consulta com pediatra apresenta história prévia de 3 episódios de sibilância, com necessidade de procurar pronto atendimento e realizar beta 2 agonista de curta duração. Apresenta também tosse seca pela manhã quase diariamente e tosse desencadeada pelo choro. Investigação dos diversos aparelhos revelou regurgitações frequentes até o 7° mês de vida, com melhora espontânea, e pele ressecada, com lesões pruriginosas em superfícies extensoras e abdômen.\n\nQual é o tratamento de primeira escolha para esse paciente?",
    "options": [
      "(A) Corticosteroide inalatório.",
      "(B) Inibidor de bomba de prótons.",
      "(C) Salbutamol nas crises.",
      "(D) Antileucotrieno."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente com três ou mais episódios de sibilância com necessidade de broncodilatador, tosse noturna e matinal e com o choro, e atopia (dermatite atópica): alta probabilidade de asma, com índice preditivo de asma positivo (critério maior: dermatite atópica).\n\nCom sintomas frequentes e crises, o tratamento de controle de primeira escolha em menores de 5 anos é o corticosteroide inalatório em dose baixa, diário.",
    "commentary": "IBP (B): o refluxo melhorou sozinho aos 7 meses; o IBP não trata sibilância.\n\nSalbutamol nas crises (C): é resgate e não controla a doença persistente.\n\nAntileucotrieno (D): é alternativa ao CI, menos eficaz.",
    "reference": "GINA 2024 — Asma em crianças de 5 anos ou menos / Diretrizes da SBP para asma",
    "tags": [
      "pediatria",
      "asma",
      "sibilância recorrente",
      "corticosteroide inalatório"
    ]
  },
  {
    "id": "usprp2025-15",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, com 3 anos e 6 meses de idade, é trazido ao pronto socorro devido a crises convulsivas tônicas recorrentes que persistem há 20 minutos. Foi transportado pelo SAMU, acompanhado pela mãe. Durante o transporte, foram iniciadas a monitorização dos sinais vitais, a administração de oxigênio por máscara e a verificação da glicemia capilar, que resultou em 80 mg/dL. Nenhuma medicação foi administrada. Na admissão, o paciente apresentava-se em regular estado geral, com os seguintes sinais vitais: FC de 140 bpm, FR de 28 ipm, Saturação de oxigênio de 100%, e temperatura de 38,3°C. O paciente estava pálido, com olhar fixo, sialorreico e com postura de hipertonia generalizada. A mãe relata que ele já teve crises febris curtas desde os 12 meses de idade.\n\nQual é a conduta farmacológica imediata mais adequada?",
    "options": [
      "(A) Fenobarbital.",
      "(B) Midazolam.",
      "(C) Fenitoina.",
      "(D) Ácido valpróico."
    ],
    "correctAnswer": 1,
    "explanation": "Crise convulsiva contínua há 20 minutos: estado de mal epiléptico (crise com mais de 5 minutos), febril, em criança com crises febris prévias, sem medicação até agora e sem acesso venoso mencionado.\n\nA primeira linha é um benzodiazepínico: midazolam (intramuscular, intranasal ou bucal) ou diazepam ou lorazepam venoso. Se a crise persistir, segue-se para fenitoína, fenobarbital ou valproato (segunda linha).",
    "commentary": "Fenobarbital (A): segunda ou terceira linha, depois do benzodiazepínico.\n\nFenitoína (C): segunda linha; não é a medicação imediata.\n\nÁcido valproico (D): segunda linha.",
    "reference": "AES Guideline — Convulsive Status Epilepticus (2016) / SBP — Estado de mal epiléptico",
    "tags": [
      "pediatria",
      "neurologia infantil",
      "estado de mal epiléptico",
      "midazolam"
    ]
  },
  {
    "id": "usprp2025-16",
    "module": "Pediatria",
    "text": "Criança de 4 anos é levada ao consultório com história de febre diária há 6 dias, com picos a cada 8 horas. Passou em atendimento médico há 2 dias, recebendo diagnóstico de amigdalite e prescrita amoxicilina, que já iniciou uso. Há 4 horas, notou aparecimento de rash cutâneo. Mãe está preocupada, pois acha que o antibiótico não está fazendo efeito, além de ter provocado alergia na criança. Na sua avaliação, você identifica que a criança possui placas em ambas as amígdalas e que estas se encontram aumentadas, apresenta ainda adenomegalias cervicais e discreto aumento de baço. O rash cutâneo é maculopapular e morbiliforme difuso, com predomínio no tronco. Os sinais vitais se encontram dentro da normalidade e o aspecto geral da criança é bom.\n\nQual a melhor conduta?",
    "options": [
      "(A) Trocar o antibiótico para amoxicilina com clavulanato.",
      "(B) Prescrever anti-histamínico e trocar o antibiótico para azitromicina.",
      "(C) Suspender o antibiótico e orientar somente sintomáticos.",
      "(D) Prescrever anti-histamínico e orientar manter o tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "Febre prolongada, faringoamigdalite com exsudato, linfonodomegalia cervical e esplenomegalia, com exantema morbiliforme após amoxicilina: mononucleose infecciosa por EBV.\n\nO exantema associado à aminopenicilina é típico (não é alergia verdadeira na maioria dos casos). A conduta é suspender o antibiótico e fazer tratamento sintomático, orientando evitar esportes de contato pelo risco de ruptura esplênica.",
    "commentary": "Amoxicilina-clavulanato (A): a doença é viral, e a aminopenicilina mantém o exantema.\n\nAzitromicina e anti-histamínico (B): não há indicação de antibiótico.\n\nManter a amoxicilina (D): não há infecção bacteriana a tratar.",
    "reference": "Tratado de Pediatria SBP — Mononucleose infecciosa / Red Book (AAP)",
    "tags": [
      "pediatria",
      "mononucleose infecciosa",
      "vírus Epstein-Barr",
      "exantema"
    ]
  },
  {
    "id": "usprp2025-17",
    "module": "Pediatria",
    "text": "Menina de 8 anos é trazida à sala de emergência após ser atropelada por um carro. A criança foi encontrada inconsciente no local, mas recuperou a consciência durante o transporte para o hospital. Apresenta dor abdominal. Ao exame físico: frequência cardíaca de 150 bpm, pressão arterial de 70/40 mmHg, frequência respiratória de 30 rpm, saturação de oxigênio de 95% em máscara não reinalante, enchimento capilar 6 segundos e pulsos finos. Administrados 20ml/kg de cristaloides com manutenção dos parâmetros clínicos.\n\nQual é o próximo passo no manejo desta criança?",
    "options": [
      "(A) Repetir dose de cristaloides.",
      "(B) Administrar plasma fresco.",
      "(C) Iniciar agentes vasopressores.",
      "(D) Infundir concentrado de hemácias."
    ],
    "correctAnswer": 3,
    "explanation": "Criança politraumatizada com choque hemorrágico (taquicardia, hipotensão, enchimento capilar de 6 s, pulsos finos) e dor abdominal, sem resposta a 20 mL/kg de cristaloide.\n\nPelo ATLS, na criança sem resposta ao primeiro bolus de cristaloide, deve-se iniciar concentrado de hemácias (10–20 mL/kg) e acionar a cirurgia para controle do sangramento. Excesso de cristaloide agrava a coagulopatia.",
    "commentary": "Repetir cristaloide (A): conduta antiga; o ATLS atual recomenda sangue após o primeiro bolus sem resposta.\n\nPlasma fresco (B): faz parte da ressuscitação balanceada, mas o primeiro hemocomponente é o concentrado de hemácias.\n\nVasopressores (C): contraindicados no choque hipovolêmico não corrigido.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. — Trauma pediátrico",
    "tags": [
      "pediatria",
      "trauma pediátrico",
      "choque hemorrágico",
      "transfusão"
    ]
  },
  {
    "id": "usprp2025-18",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) do sexo masculino, nascido com 2950g, Apgar 9/10. A mãe teve pré eclampsia na gestação e trabalho de parto inibido com 29 semanas. Com 36 semanas, ela apresentou um quadro febril, com trabalho de parto espontâneo e rotura da bolsa amniótica, sendo iniciado tratamento de corioamnionite. Evoluiu para um parto vaginal, 20 horas após a rotura da bolsa. Ao nascer, o RN foi colocado em contato pele a pele com a mãe, permanecendo em boas condições, com exame físico normal.\n\nConsiderando a presença de fatores de risco para sepse neonatal precoce, qual é a conduta mais adequada para o RN neste momento?",
    "options": [
      "(A) Iniciar avaliações clínicas seriadas.",
      "(B) Colher duas amostras de hemocultura.",
      "(C) Colher hemograma e proteína C reativa.",
      "(D) Iniciar antibioticoterapia empírica."
    ],
    "correctAnswer": 0,
    "explanation": "RN com idade gestacional ≥ 35 semanas, nascido com fatores de risco para sepse precoce (corioamnionite materna tratada, bolsa rota de 20 h), mas assintomático e com exame normal.\n\nAs recomendações atuais (AAP 2018, SBP) admitem, nesse RN, a estratégia de avaliação clínica seriada (sinais vitais e exame frequentes nas primeiras 36–48 h) ou o uso de calculadora de risco, evitando exames e antibiótico desnecessários. Qualquer sinal clínico muda a conduta.",
    "commentary": "Duas hemoculturas (B): uma hemocultura é colhida quando se decide tratar; sem sinais, a observação é adequada.\n\nHemograma e PCR (C): têm baixo valor preditivo positivo para sepse precoce e não devem guiar a conduta isoladamente.\n\nAntibiótico empírico (D): a antibioticoterapia de todos os expostos à corioamnionite foi substituída por estratégias baseadas em risco e na clínica.",
    "reference": "AAP — Management of Neonates Born at ≥35 0/7 Weeks with Suspected or Proven Early-Onset Bacterial Sepsis (2018) / SBP",
    "tags": [
      "neonatologia",
      "sepse neonatal precoce",
      "corioamnionite"
    ]
  },
  {
    "id": "usprp2025-19",
    "module": "Pediatria",
    "text": "Lactente de 6 meses é avaliado em consulta de puericultura. Nasceu com 30 semanas de idade gestacional, pesando 1250g, com boa evolução. A mãe relata aleitamento materno exclusivo desde a alta hospitalar e nega queixas. Peso atual: 6100g. Na avaliação clínica, o lactente apresenta sustentação da cabeça, emite sons, não rola, pega objetos e não leva à boca. Tem exame físico normal. Curva de crescimento trazida pela mãe. Os círculos pretos correspondem às medidas de peso do lactente nos primeiros 6 meses de vida.\n\nObservando os dados da curva de crescimento trazida pela mãe (figura), qual é a orientação alimentar mais adequada neste momento?",
    "options": [
      "(A) Iniciar a introdução alimentar.",
      "(B) Iniciar fórmula infantil de partida.",
      "(C) Manter amamentação exclusiva.",
      "(D) Iniciar fórmula infantil de seguimento."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente nascido com 30 semanas, hoje com 6 meses de idade cronológica: a idade corrigida é de cerca de 3,5 meses (6 meses menos 10 semanas). O desenvolvimento (sustenta a cabeça, ainda não rola) e o ganho de peso (curva ascendente, plotada pela idade corrigida) estão adequados.\n\nA introdução alimentar no prematuro é baseada na idade corrigida (por volta de 6 meses corrigidos) e na prontidão neuromotora. A conduta é manter o aleitamento materno exclusivo.",
    "commentary": "Iniciar a introdução alimentar (A): pela idade corrigida (3,5 meses) e pelo desenvolvimento, ainda não é o momento.\n\nFórmula de partida (B): o ganho de peso é adequado com o leite materno.\n\nFórmula de seguimento (D): não está indicada, e o aleitamento materno exclusivo é suficiente.",
    "reference": "SBP — Seguimento ambulatorial do prematuro de risco (2017) / Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (MS, 2019)",
    "tags": [
      "pediatria",
      "puericultura",
      "prematuridade",
      "idade corrigida",
      "aleitamento materno"
    ],
    "image": "/images/usprp2025-19.webp"
  },
  {
    "id": "usprp2025-20",
    "module": "Pediatria",
    "text": "Menina de 4 meses, 6kg, vem à consulta de puericultura. Os pais não trazem nenhuma queixa clínica e, ao exame físico, você também não identifica nenhuma alteração. A mãe sofreu um acidente há cerca de 2 semanas e precisou ficar internada por alguns dias, já está bem, porém não tem conseguido mais amamentar sua filha. Os pais estão decididos que iniciarão fórmula infantil de primeiro semestre e pedem orientação quanto ao volume e preparo.\n\nQual referência de gasto energético basal deve ser usada para este cálculo?",
    "options": [
      "(A) 150 kcal/kg.",
      "(B) 25 kcal/kg.",
      "(C) 50 kcal/kg.",
      "(D) 100 kcal/kg."
    ],
    "correctAnswer": 3,
    "explanation": "Para lactentes de até 10 kg, a regra de Holliday-Segar relaciona gasto energético e necessidade hídrica: 100 kcal/kg/dia (e 100 mL/kg/dia). Esse é o valor usado como referência para calcular o volume de fórmula.\n\nPara uma lactente de 6 kg, cerca de 600 kcal/dia correspondem a cerca de 900 mL de fórmula padrão (aproximadamente 67 kcal/100 mL), distribuídos em várias mamadas.",
    "commentary": "150 kcal/kg (A): valor usado em prematuros ou recuperação nutricional, não no lactente a termo saudável.\n\n25 kcal/kg (B): referência para adultos.\n\n50 kcal/kg (C): insuficiente para o crescimento.",
    "reference": "Holliday MA, Segar WE — Pediatrics 1957 / SBP — Manual de Alimentação (2018)",
    "tags": [
      "pediatria",
      "nutrição infantil",
      "fórmula infantil",
      "gasto energético"
    ]
  },
  {
    "id": "usprp2025-21",
    "module": "Saúde Coletiva",
    "text": "O médico de família e comunidade (MFC) observou que um paciente, de 50 anos, que ele havia referenciado para o cardiologista, por conta de uma hipertensão arterial de difícil controle, não retornou mais à Unidade de Saúde da Família (USF) para seguimento. Como não recebeu nenhuma contrarreferência do cardiologista, entrou em contato para saber sobre a condição de saúde do paciente. O cardiologista informou que o paciente estava bem e que, após a realização de exames, trocou algumas medicações anti-hipertensivas, com estabilização da pressão arterial. Comentou, ainda, que não havia contrarrefenciado o paciente à atenção primária à saúde (APS), pois entendia que o melhor manejo deste agravo é realizado pelo cardiologista. O MFC argumentou que o paciente poderia ser contrarreferenciado à APS e que eles poderiam compartilhar o cuidado dessa pessoa.\n\nConsiderando a Política Nacional de Atenção Especializada do Sistema Único de Saúde, como pode ser classificada esta prática do cardiologista?",
    "options": [
      "(A) Apoio matricial.",
      "(B) Classificação de risco.",
      "(C) Efeito velcro.",
      "(D) Gestão de caso."
    ],
    "correctAnswer": 2,
    "explanation": "O 'efeito velcro' é o termo usado na Política Nacional de Atenção Especializada (e na literatura de redes de atenção) para o especialista que, em vez de contrarreferenciar o paciente estabilizado à APS, o mantém indefinidamente em seguimento especializado.\n\nIsso sobrecarrega a atenção especializada, aumenta filas e fragmenta o cuidado. O correto é o cuidado compartilhado com contrarreferência à APS, coordenadora do cuidado.",
    "commentary": "Apoio matricial (A): é o especialista apoiando a equipe da APS (consultoria e corresponsabilização), o oposto do que ocorreu.\n\nClassificação de risco (B): ferramenta de priorização do acesso, não descreve a retenção do paciente.\n\nGestão de caso (D): acompanhamento intensivo e coordenado de casos complexos, geralmente pela APS ou por um gestor de caso.",
    "reference": "Política Nacional de Atenção Especializada em Saúde — Ministério da Saúde (2023) / Mendes EV — As redes de atenção à saúde",
    "tags": [
      "saúde coletiva",
      "redes de atenção à saúde",
      "atenção especializada",
      "efeito velcro"
    ]
  },
  {
    "id": "usprp2025-22",
    "module": "Saúde Coletiva",
    "text": "Um novo morador do território de uma Unidade de Saúde da Família (USF) é visitado pelo agente comunitário de saúde (ACS) que oferece os serviços da unidade de saúde e a possibilidade de cadastramento, no sistema de saúde do município. Durante a visita, o morador pergunta para o ACS qual o horário de funcionamento da USF e é informado que ela funciona das 7:30 h até às 17:00 h. O morador, então, comenta que possivelmente não conseguirá usar este serviço de saúde, pois sai de casa às 7:00 h da manhã e só retorna do trabalho às 20:00 h.\n\nConsiderando a atenção primária à saúde como porta preferencial do sistema de saúde, qual a dimensão da acessibilidade está prejudicada na situação descrita acima?",
    "options": [
      "(A) Econômica.",
      "(B) Comodidade.",
      "(C) Disponibilidade.",
      "(D) Aceitabilidade."
    ],
    "correctAnswer": 1,
    "explanation": "No modelo de acessibilidade de Penchansky e Thomas, as dimensões são disponibilidade, acessibilidade geográfica, acomodação ou comodidade (organização do serviço: horários, agendamento, conveniência), capacidade financeira e aceitabilidade.\n\nO serviço existe e está próximo, mas o horário de funcionamento é incompatível com a rotina do trabalhador. A dimensão prejudicada é a comodidade (acomodação). Por isso existem iniciativas de horário estendido (Programa Saúde na Hora).",
    "commentary": "Econômica (A): refere-se a custos para o usuário, que não é a barreira descrita.\n\nDisponibilidade (C): relação entre a oferta de serviços e a necessidade; a USF está disponível no território.\n\nAceitabilidade (D): atitudes e valores entre usuário e profissionais; não é o problema relatado.",
    "reference": "Penchansky R, Thomas JW — The concept of access (Med Care, 1981) / Starfield B — Atenção Primária",
    "tags": [
      "saúde coletiva",
      "atenção primária",
      "acessibilidade",
      "programa saúde na hora"
    ]
  },
  {
    "id": "usprp2025-23",
    "module": "Saúde Coletiva",
    "text": "Na última reunião de equipe, na Unidade de Saúde da Família, a enfermeira informou que havia recebido um e-mail do Conselho Tutelar sobre a situação de uma adolescente de 13 anos que não tem comparecido às aulas. O agente comunitário de saúde (ACS) disse que esta família era bem complexa, residia na região da comunidade e que, no passado, já tinham abordado essa família, juntamente, com o Centro de Referência de Assistência Social (CRAS). A enfermeira se dispôs a realizar uma visita domiciliar (VD) com o ACS, no dia seguinte. O médico de família e comunidade se propôs a consultar sua agenda e verificar a data mais próxima para atender a adolescente. No início da reunião seguinte, o ACS apresentou o genograma atualizado da família para subsidiar as discussões. (Fonte: arquivo próprio do autor)\n\nNa abordagem desta família, considerando o genograma apresentado, como pode ser classificada a relação da mãe do caso índice com a sua avó materna?",
    "options": [
      "(A) Conflituosa e de proximidade.",
      "(B) Abuso físico e conflituosa.",
      "(C) De proximidade e harmoniosa.",
      "(D) Conflituosa e separada."
    ],
    "correctAnswer": 0,
    "explanation": "No genograma, a caso-índice é Marina (13 anos). A mãe é Val (33 anos) e a avó materna é Cecília (68 anos).\n\nA linha entre Val e Cecília combina dois símbolos: linhas paralelas (relação próxima ou fusionada) e linha em ziguezague (relação conflituosa). A relação é, ao mesmo tempo, de proximidade e conflituosa.",
    "commentary": "Abuso físico e conflituosa (B): não há o símbolo de abuso na ligação entre as duas.\n\nProximidade e harmoniosa (C): o ziguezague indica conflito, não harmonia.\n\nConflituosa e separada (D): o símbolo de separação ou rompimento (linha interrompida) não está nessa ligação.",
    "reference": "McGoldrick M, Gerson R — Genogramas: avaliação e intervenção familiar / Tratado de Medicina de Família e Comunidade (SBMFC)",
    "tags": [
      "saúde coletiva",
      "medicina de família e comunidade",
      "genograma",
      "abordagem familiar"
    ],
    "image": "/images/usprp2025-23.webp"
  },
  {
    "id": "usprp2025-24",
    "module": "Saúde Coletiva",
    "text": "Um pesquisador aplicou um teste diagnóstico numa população de 1.000 indivíduos. A sensibilidade e a especificidade do teste utilizado eram de 90%. A população da qual foram retirados os indivíduos tinha uma prevalência da doença X igual a 20%. Outro pesquisador utilizou o mesmo teste, mas agora numa população de 1.000 indivíduos, cuja prevalência da doença X era de 2%.\n\nOs valores preditivos positivos, respectivamente, nas duas populações são:",
    "options": [
      "(A) 6,92% e 9,72%.",
      "(B) 6,92% e 1,55%.",
      "(C) 69,2% e 15,5%.",
      "(D) 69,2% e 97,2%."
    ],
    "correctAnswer": 2,
    "explanation": "Cálculo do VPP para sensibilidade e especificidade de 90%:\n\n• Prevalência de 20% (200 doentes): VP = 180; FP = 10% de 800 = 80; VPP = 180/260 = 69,2%\n• Prevalência de 2% (20 doentes): VP = 18; FP = 10% de 980 = 98; VPP = 18/116 = 15,5%\n\nO mesmo teste tem VPP muito menor quando a prevalência cai, porque os falso-positivos passam a predominar.",
    "commentary": "6,92% e 9,72% (A): erro de cálculo; os valores não correspondem a nenhuma das populações.\n\n6,92% e 1,55% (B): erro de uma casa decimal.\n\n69,2% e 97,2% (D): o VPP diminui com a prevalência, não aumenta.",
    "reference": "Fletcher — Epidemiologia Clínica (Diagnóstico) / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "valor preditivo positivo",
      "prevalência",
      "testes diagnósticos"
    ]
  },
  {
    "id": "usprp2025-25",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, de 72 anos de idade, com história de hipertensão arterial, diabetes mellitus tipo 2, obesidade grau 2, fibrilação atrial crônica, lombalgia crônica por espondiloartrose e transtorno depressivo crônico. Faz uso regular de dipirona, losartana, insulinas NPH e regular, metformina, sertralina e varfarina, não fuma e ingere cerveja diariamente, mas não sabe precisar a quantidade, ao médico de família e comunidade (MFC). Paciente vem à Unidade de Saúde da Família, onde é seguida há 17 anos, para atendimento eventual. Durante consulta com o MFC informa que, há cerca de 3 meses, após a morte do esposo, vem apresentando, diariamente, tristeza, anedonia, insônia, perda de apetite, sentimento de menos valia, sem esperança de melhora no futuro. Nega sintomas psicóticos. Paciente está morando sozinha, tem apenas uma filha e a relação das duas sempre foi muito conflituosa, com piora nos últimos meses, devido a desentendimentos pela divisão da herança do esposo. Paciente reduziu suas atividades sociais de costume, perdendo contato com amigos e outros familiares. Ao ser questionada pelo MFC, responde que tem vontade de morrer, pois já não vê solução para sua vida. Revela que, há cerca de 20 anos, ingeriu vários medicamentos para tentar tirar a própria vida. Ela relata que pensa em tirar a própria vida tomando grande dosagens de seus medicamentos, de uma só vez. Paciente sente que suas forças para suportar a dor emocional estão se acabando.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Encaminhar a paciente a um serviço de urgência, se ela estiver acompanhada por alguém de sua confiança e se houver o seu consentimento ou de seu acompanhante.",
      "(B) Encaminhar a paciente a um serviço de urgência, acompanhada por profissionais de saúde ou alguém de sua confiança, independente do consentimento da paciente.",
      "(C) Utilizando-se do vínculo que possui com a paciente, otimizar o tratamento farmacológico da depressão, agendar retorno dentro de um a dois dias e solicitar avaliação da psicóloga da USF.",
      "(D) Preencher o formulário de encaminhamento e orientar a paciente a procurar o Centro de Atenção Psicossocial (CAPS) de referência para atendimento com psiquiatra e equipe multiprofissional, agendando retornos curtos na USF."
    ],
    "correctAnswer": 1,
    "explanation": "Idosa com episódio depressivo maior após luto, ideação suicida com plano (overdose dos próprios medicamentos, incluindo insulina e varfarina, de alta letalidade), tentativa prévia, isolamento social, conflito familiar, uso de álcool e doenças crônicas: risco de suicídio alto e iminente.\n\nNessa situação, a paciente deve ser encaminhada imediatamente a um serviço de urgência (pronto-socorro psiquiátrico), acompanhada por profissionais ou pessoa de confiança, mesmo sem seu consentimento. O risco à vida justifica a medida, e não deve ser deixada sozinha.",
    "commentary": "Encaminhar só com acompanhante e consentimento (A): no risco iminente, a ausência de consentimento não impede o encaminhamento protegido.\n\nOtimizar o antidepressivo e retorno em 1–2 dias (C): adequado para risco baixo a moderado, não com plano estruturado e meios disponíveis.\n\nEncaminhar ao CAPS por conta própria (D): ela não pode ir sozinha nem esperar; o risco exige urgência.",
    "reference": "Ministério da Saúde/ABP — Prevenção do suicídio: manual dirigido a profissionais / Caderno de Atenção Básica nº 34 — Saúde Mental",
    "tags": [
      "psiquiatria",
      "risco de suicídio",
      "depressão",
      "atenção primária"
    ]
  },
  {
    "id": "usprp2025-26",
    "module": "Pediatria",
    "text": "Criança do sexo masculino, de 8 anos e 3 meses de idade, foi trazida à Unidade de Saúde da Família pela mãe, para consulta de puericultura. Mãe não relatou queixas ativas. Ao ser questionada, durante a anamnese, mãe respondeu que percebeu odor forte nas axilas do filho que se iniciou há cerca de 2 meses, sendo necessário iniciar o uso de desodorante. Não surgiram queixas cardiorrespiratórias, genitourinárias ou gastrintestinais, durante o interrogatório dos diversos sistemas. Criança apresentava desenvolvimento neuropsicomotor adequado para a idade, alimentação, razoavelmente, dentro das orientações do Guia Alimentar para a População Brasileira do Ministério da Saúde, fazia atividade física regularmente e não passava mais que duas horas ao dia em uso de telas. Estava com a carteira de vacinação atualizada. Não tinha história de doenças prévias graves e histórico de saúde familiar sem informações relevantes. Ao exame físico, o peso e a altura da criança encontravam-se sobre o percentil 50, sem mudanças de percentil recentemente. Ao exame da genitália havia pelos mais grossos, enegrecidos e encaracolados ao redor da base do pênis e em pequena quantidade (ainda contáveis), testículo de cerca de 2 cm³ (medido com orquidômetro), pênis de tamanho e forma semelhantes à última consulta de rotina, realizada 6 meses antes. Não havia pelos em outras partes do corpo que chamassem a atenção e não havia acne na face. Sem achados alterados no restante do exame físico completo.\n\nO diagnóstico mais provável para este caso é:",
    "options": [
      "(A) Adrenarca precoce.",
      "(B) Puberdade fisiológica típica.",
      "(C) Puberdade precoce.",
      "(D) Hipertricose."
    ],
    "correctAnswer": 0,
    "explanation": "Menino de 8 anos e 3 meses com pelos pubianos escassos (Tanner P2) e odor axilar, mas volume testicular de 2 cm³ (pré-puberal; a puberdade masculina começa com testículos ≥ 4 mL), pênis sem crescimento e velocidade de crescimento normal (sem mudança de percentil).\n\nSão sinais isolados de ação androgênica adrenal (pubarca e odor) sem ativação do eixo gonadal: adrenarca precoce (pubarca precoce, antes dos 9 anos em meninos). Investigar e acompanhar a idade óssea e a velocidade de crescimento.",
    "commentary": "Puberdade fisiológica típica (B): começa pelo aumento testicular, a partir dos 9 anos.\n\nPuberdade precoce (C): exigiria testículos ≥ 4 mL (central) ou virilização com aceleração do crescimento.\n\nHipertricose (D): excesso de pelos não androgênicos difusos, não pubarca.",
    "reference": "Tratado de Pediatria SBP — Puberdade precoce e variantes / Endocrine Society",
    "tags": [
      "pediatria",
      "endocrinologia pediátrica",
      "adrenarca precoce",
      "puberdade"
    ]
  },
  {
    "id": "usprp2025-27",
    "module": "Clínica Médica",
    "text": "Paciente 47 anos, sexo feminino, comparece em consulta com queixa de há 3 meses apresentar fadiga, astenia e episódios de tontura, Paciente G1P1A0CO, com método contraceptivo e laqueadura tubária há 12 anos, sem atraso menstrual. Nega uso de medicações, doenças prévias e história familiar de doenças. Exame físico normal.\n\nExames laboratoriais:\n• Hemoglobina: 9,7 g/dL (Referência: 11,5-14,9)\n• VCM: 76 fL (Referência: 81-100,2)\n• RDW: 16% (Referência: 11,9-15,5)\n• Glóbulos brancos: 5200 leucócitos/mm³ (Referência: 2.883-9.969)\n• Plaquetas: 155.000/mm³ (Referência: 135.606-343.044)\n• Ferritina: 18 ng/mL (Referência: 40-200)\n\nQual o questionamento mais adequado que o médico deve fazer para complementar a anamnese?",
    "options": [
      "(A) Perda ponderal não intencional.",
      "(B) Padrão de fluxo menstrual.",
      "(C) Ingesta de alimentos ricos em vit. B12.",
      "(D) Uso excessivo de álcool."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 47 anos com anemia microcítica, RDW elevado e ferritina baixa: anemia ferropriva. Em mulher na pré-menopausa, a causa mais frequente é a perda menstrual aumentada.\n\nA primeira pergunta a complementar a anamnese é o padrão do fluxo menstrual (duração, volume, coágulos, troca de absorventes). Ela é perimenopáusica, com possível sangramento uterino anormal por mioma ou pólipo.",
    "commentary": "Perda ponderal (A): é relevante para investigar neoplasia, mas a causa mais provável na idade é ginecológica.\n\nIngesta de B12 (C): a anemia é microcítica e ferropriva, não megaloblástica.\n\nUso de álcool (D): causa macrocitose, não anemia microcítica ferropriva.",
    "reference": "Harrison — Anemia ferropriva / Ministério da Saúde — Linha de cuidado de anemia",
    "tags": [
      "hematologia",
      "anemia ferropriva",
      "sangramento uterino anormal",
      "atenção primária"
    ]
  },
  {
    "id": "usprp2025-28",
    "module": "Saúde Coletiva",
    "text": "A médica de família e comunidade (MFC) trabalha há 5 anos em uma Unidade de Saúde da Família (USF) e conhece bem a população que assiste e os principais problemas do território. Recentemente, uma nova família chegou em uma das 5 microáreas que conformam seu território. Trata-se de uma família com filhos adolescentes e tiveram consultas de casos novos agendadas na USF. Na consulta de caso novo da mãe dos adolescentes ela comentou que andava muito preocupada com o filho mais velho, de 17 anos. Achava que ele estava usando algum tipo de droga, pois mudou muito seu comportamento, ultimamente. No dia da consulta de Caso Novo desse adolescente, enquanto se prepara para chamá-lo, a MFC lembrou-se da preocupação da mãe e, na consulta, além de explorar as queixas do adolescente se preparou para realizar a triagem sobre o uso, abuso e dependência de substâncias.\n\nQual instrumento de triagem seria melhor aplicado pela MFC, no caso acima?",
    "options": [
      "(A) ASSIST (Alcohol, Smoking and Substance Involvement Screening Test).",
      "(B) CAGE (Cut down, Annoyed by criticism, Guilty and Eye opener).",
      "(C) SADD (Short Alcohol Dependence Data)",
      "(D) AUDIT (Alcohol Use Disorders Identification Test)."
    ],
    "correctAnswer": 0,
    "explanation": "Para triar o uso de várias substâncias (álcool, tabaco, maconha, cocaína e outras), o ASSIST (Alcohol, Smoking and Substance Involvement Screening Test), desenvolvido pela OMS, é o instrumento adequado. Ele classifica o risco por substância e orienta a intervenção breve na atenção primária.\n\nA suspeita da mãe é de 'algum tipo de droga', não só álcool.",
    "commentary": "CAGE (B): rastreia apenas dependência de álcool e é pouco sensível em adolescentes.\n\nSADD (C): mede gravidade da dependência alcoólica, não serve para triagem de substâncias.\n\nAUDIT (D): rastreia uso problemático de álcool, não de outras drogas.",
    "reference": "OMS — ASSIST v3.1 / Ministério da Saúde — SUPERA",
    "tags": [
      "saúde coletiva",
      "uso de substâncias",
      "ASSIST",
      "adolescência",
      "atenção primária"
    ]
  },
  {
    "id": "usprp2025-29",
    "module": "Saúde Coletiva",
    "text": "Ao realizar o cadastro de uma pessoa na área de abrangência da Unidade de Saúde da Família, a agente comunitária de saúde (ACS) pergunta sobre a sua a sexualidade. Ela responde ter nascido mulher, mas se reconhece como homem e deseja sexualmente mulheres.\n\nComo a ACS deve registrar, no cadastro, a identidade de gênero e a orientação sexual desta pessoa?",
    "options": [
      "(A) Homem, transgênero, homossexual.",
      "(B) Homem, cisgênero, homossexual.",
      "(C) Homem, transgênero, heterossexual.",
      "(D) Homem, cisgênero, heterossexual."
    ],
    "correctAnswer": 2,
    "explanation": "A identidade de gênero é como a pessoa se reconhece: nasceu com sexo designado feminino e se reconhece como homem, portanto é um homem transgênero. A orientação sexual refere-se a quem se sente atraído: homem que deseja mulheres é heterossexual.\n\nO registro correto respeita a autodeclaração: homem, transgênero, heterossexual.",
    "commentary": "Homem transgênero homossexual (A): a orientação é pelo gênero dele (homem); atração por mulheres é heterossexual.\n\nHomem cisgênero homossexual (B): cisgênero é quem se identifica com o sexo designado ao nascer, e a orientação também está errada.\n\nHomem cisgênero heterossexual (D): ele não é cisgênero.",
    "reference": "Política Nacional de Saúde Integral LGBT (Ministério da Saúde) / e-SUS APS — Cadastro individual",
    "tags": [
      "saúde coletiva",
      "identidade de gênero",
      "orientação sexual",
      "saúde LGBT",
      "atenção primária"
    ]
  },
  {
    "id": "usprp2025-30",
    "module": "Saúde Coletiva",
    "text": "Em uma investigação sobre a associação entre Mortalidade Infantil e indicadores socioeconômicos, Fonseca et al. (2019) utilizaram fontes de dados secundários de 74 municípios de uma região do Brasil e vários indicadores socioeconômicos, Verificaram que o IDH (Índice de Desenvolvimento Humano) estava associado à Taxa de Mortalidade Infantil (TMI), com Coeficiente de Correlação de 0,643, e a Renda per capita Média (RPCM), com Coeficiente de Correlação de 0,549, ambos com nível de significância inferior a 1%.\n\nConsiderando as informações acima qual o tipo de estudo realizado pelos autores?",
    "options": [
      "(A) Transversal.",
      "(B) Ecológico.",
      "(C) Coorte.",
      "(D) Caso controle."
    ],
    "correctAnswer": 1,
    "explanation": "O estudo usa dados secundários agregados de 74 municípios (unidade de análise é o município, não o indivíduo) e correlaciona indicadores de grupo (IDH, renda per capita) com a taxa de mortalidade infantil: estudo ecológico.\n\nA medida típica é o coeficiente de correlação. A limitação principal é a falácia ecológica (associações no nível do grupo podem não valer para o indivíduo).",
    "commentary": "Transversal (A): mede exposição e desfecho em indivíduos num mesmo momento.\n\nCoorte (C): acompanha indivíduos ao longo do tempo a partir da exposição.\n\nCaso-controle (D): parte de indivíduos com e sem o desfecho.",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "epidemiologia",
      "estudo ecológico",
      "mortalidade infantil",
      "desenhos de estudo"
    ]
  },
  {
    "id": "usprp2025-31",
    "module": "Saúde Coletiva",
    "text": "Paciente de 14 anos, sexo feminino, acompanhada da mãe e refere história de há 15 dias ter iniciado tosse seca e esporádica, associada à rinorreia e febre baixa (não aferida). Refere que houve melhora dos sintomas, exceto da tosse, que há 2 dias passou a ser paroxística, súbita, incontrolável, com tossidas rápidas e curtas (cinco a dez), em uma única expiração associada a episódios de vômitos, após a tosse. Mãe nega que a adolescente tenha problemas de saúde prévios, nega alergias e refere vacinação atualizada. A adolescente reside com a mãe, pai e um irmão de 10 meses de idade. Nega sintomas em familiares e refere que todos estão com as vacinas atualizadas.\n\nConsiderando que foi colhido exame apropriado e iniciado tratamento indicado para suspeita do caso sintomático, qual conduta é a mais indicada para os comunicantes deste caso?",
    "options": [
      "(A) Indicação de quimioprofilaxia para os três familiares.",
      "(B) Não há indicação de quimioprofilaxia para os familiares.",
      "(C) Indicação de reforço de vacina para todos os familiares.",
      "(D) Indicação de quimioprofilaxia apenas para a criança menor de 1 ano."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com tosse paroxística com guincho e vômitos pós-tosse após fase catarral: caso suspeito de coqueluche. Em casa há um lactente de 10 meses, de alto risco para doença grave.\n\nPelo Guia de Vigilância em Saúde, a quimioprofilaxia (azitromicina) é indicada para comunicantes íntimos, independentemente da idade e da situação vacinal, quando há contato com menores de 1 ano ou com pessoas que convivem com eles, entre outras situações de risco. Assim, os três familiares recebem quimioprofilaxia.",
    "commentary": "Nenhum familiar (B): há lactente menor de 1 ano no domicílio; a profilaxia é indicada.\n\nReforço vacinal para todos (C): a vacina não substitui a quimioprofilaxia nem protege de imediato.\n\nSó o menor de 1 ano (D): todos os comunicantes domiciliares, que convivem com o lactente, devem receber profilaxia.",
    "reference": "Guia de Vigilância em Saúde — Ministério da Saúde, 2024 (Coqueluche)",
    "tags": [
      "saúde coletiva",
      "coqueluche",
      "quimioprofilaxia",
      "vigilância epidemiológica"
    ]
  },
  {
    "id": "usprp2025-32",
    "module": "Clínica Médica",
    "text": "Paciente 45 anos, sexo feminino, portadora de asma em uso diário de glicocorticoide inalatório em baixa dose e para crises, uso de Beta 2 (B2) agonista de curta duração. Comparece em consulta de rotina na Unidade de Atenção Básica (UBS). Refere que nos últimos 3 meses não apresentou sintomas de falta de ar, durante o dia ou à noite. Nega ter usado B2 de curta duração e nega limitações de atividades devido à asma. No último ano não teve história de exacerbações. Nega tabagismo e outras doenças. Exame físico sem alterações. IMC 22 kg/m².\n\nQual a conduta mais adequada para o manejo deste quadro?",
    "options": [
      "(A) Glicocorticoide inalatório em baixa dose + B2 de longa duração como manutenção e alívio dos sintomas.",
      "(B) B2 de curta duração para alívio dos sintomas como único tratamento.",
      "(C) Glicocorticoide inalatório em baixa dose + B2 de longa duração como manutenção.",
      "(D) Glicocorticoide inalatório em baixa dose + B2 de longa duração para alívio dos sintomas."
    ],
    "correctAnswer": 3,
    "explanation": "Asma bem controlada há 3 meses (sem sintomas, sem uso de resgate, sem limitação nem exacerbações) com CI em dose baixa e SABA de resgate.\n\nO GINA prefere, em todas as etapas, a via com ICS-formoterol como resgate (track 1), pois reduz exacerbações graves em relação ao SABA isolado. Na etapa 1–2, para paciente bem controlado, usa-se ICS-formoterol em dose baixa apenas conforme necessário, para alívio dos sintomas.",
    "commentary": "CI + LABA de manutenção e alívio (A): é a terapia MART das etapas 3–5, um escalonamento desnecessário para quem está controlado.\n\nSABA isolado (B): não é mais recomendado como tratamento único pelo risco de exacerbações graves e morte.\n\nCI + LABA como manutenção (C): é escalonamento para a etapa 3, sem indicação.",
    "reference": "GINA 2024 / Diretrizes da SBPT para o manejo da asma (2020)",
    "tags": [
      "pneumologia",
      "asma",
      "ICS-formoterol",
      "GINA"
    ]
  },
  {
    "id": "usprp2025-33",
    "module": "Clínica Médica",
    "text": "Mulher de 43 anos vem à Unidade de Saúde da Família (USF) para coleta de citologia oncótica de colo de útero e a enfermeira percebe que ela apresenta uma lesão na unha do hálux do pé direito. Solicita, então, uma avaliação da médica de família e comunidade que conversa com a paciente e a mesma conta que solicitou a sua manicure que cortasse a sua unha que estava oca, há 3 meses. Não procurou atendimento na USF para esta condição, pois achou que ao cortar esta unha, iria crescer uma nova. No entanto, percebeu há 15 dias, que cada vez mais a unha tem ficado oca.\n\nQual o diagnóstico mais provável desta condição?",
    "options": [
      "(A) Onicólise.",
      "(B) Onicodistrofia.",
      "(C) Onicosquizia.",
      "(D) Onicocriptose."
    ],
    "correctAnswer": 0,
    "explanation": "Unha do hálux que se descola do leito ungueal, ficando 'oca' a partir da borda livre e progredindo em direção proximal: onicólise (separação da lâmina do leito).\n\nAs causas incluem trauma (corte agressivo pela manicure, calçados), onicomicose, psoríase, dermatite de contato e doenças da tireoide. Deve-se investigar onicomicose (exame micológico) e evitar traumas.",
    "commentary": "Onicodistrofia (B): termo genérico para alteração da forma ou estrutura da unha; o achado específico aqui é o descolamento.\n\nOnicosquizia (C): descamação lamelar da borda livre da lâmina, como unha 'em camadas'.\n\nOnicocriptose (D): unha encravada, com inflamação da prega lateral.",
    "reference": "Azulay — Dermatologia / Tratado de Medicina de Família e Comunidade (SBMFC)",
    "tags": [
      "dermatologia",
      "onicólise",
      "doenças das unhas",
      "atenção primária"
    ],
    "image": "/images/usprp2025-33.webp"
  },
  {
    "id": "usprp2025-34",
    "module": "Clínica Médica",
    "text": "Mulher de 68 anos, procura a Unidade de Saúde da Família (USF) em demanda espontânea e no acolhimento refere febre não aferida há 4 dias, associada à cefaleia, mialgia, artralgia, náuseas e diarreia. Nega vômito, dor abdominal. Não buscou atendimento antes, pois o esposo e o filho estão diagnosticados com dengue e acreditou que pudesse ser o mesmo. A técnica de enfermagem solicita supervisão da enfermeira que orienta a mesma a notificar dengue, realizar prova do laço e hematócrito em centrifuga e após os resultados solicita avaliação médica. A médica de família e comunidade examina a paciente e identifica que a mesma está em BEG, corada, hidratada, PA 136X79 mmHg, FC 96 bom, FR 16 ipm, auscultas cardíaca e respiratória sem alterações; Abdome: RHA +, normoativo, indolor, sem visceromegalias, Descompressão brusca (DB) ausente, membros sem edema, panturrilhas livres. Prova do laço positiva. Hematócrito: 49%.\n\nQual a melhor conduta inicial para esta situação?",
    "options": [
      "(A) Hidratação endovenosa na USF, 20ml/kg em 20 minutos com soro fisiológico 0,9%.",
      "(B) Hidratação oral na USF, 60 ml/Kg/dia, com 1/3 de sais de reidratação e 2/3 com outros líquidos.",
      "(C) Hidratação oral domiciliar, 60ml/Kg/dia, com 1/3 de sais de reidratação e 2/3 com outros líquidos.",
      "(D) Hidratação endovenosa na USF, 10ml/kg em 1 hora com soro fisiológico 0,9%."
    ],
    "correctAnswer": 3,
    "explanation": "Dengue em mulher de 68 anos (idade ≥ 65 anos é condição especial, grupo B), prova do laço positiva, sem sinais de alarme clínicos, mas com hematócrito de 49%. Para uma mulher idosa, esse valor indica hemoconcentração.\n\nPelo manejo do Ministério da Saúde, a hemoconcentração é sinal de alarme e reclassifica para o grupo C. A conduta é hidratação venosa imediata na unidade, 10 mL/kg de SF 0,9% na primeira hora, com reavaliação e transferência para leito de observação ou internação.",
    "commentary": "20 mL/kg em 20 minutos (A): esquema do grupo D (choque).\n\nHidratação oral na USF (B): conduta do grupo B; a hemoconcentração exige via venosa.\n\nHidratação oral domiciliar (C): conduta do grupo A.",
    "reference": "Dengue: diagnóstico e manejo clínico, adulto e criança — Ministério da Saúde, 6ª ed., 2024",
    "tags": [
      "infectologia",
      "dengue",
      "hemoconcentração",
      "atenção primária"
    ]
  },
  {
    "id": "usprp2025-35",
    "module": "Saúde Coletiva",
    "text": "Um estudo clínico (N Engl J Med 390;10: 900–910, 2024) investigou a presença de micro e nanoplásticos (MNPs) em placas de ateroma da artéria carótida de pacientes submetidos à endarterectomia. Posteriormente, acompanhou por 34 meses a incidência de eventos cardiovasculares comparativamente entre os que tinham MNPs nas placas da carótida e os que não tinham. Os resultados do desfecho primário do estudo estão sintetizados na Figura 1.\n\nConsiderando os resultados desse estudo, assinale a alternativa abaixo que melhor os interpretam.",
    "options": [
      "(A) Nesse estudo de caso controle, a incidência de AVC, infarto cardíaco ou morte por qualquer causa esteve inversamente associada a presença de micro e nanoplásticos na carótida.",
      "(B) Nesse estudo de coorte retrospectivo, a incidência de AVC, infarto cardíaco ou morte por qualquer causa esteve diretamente associada a presença de micro e nanoplásticos na carótida.",
      "(C) Nesse estudo experimental, a incidência de AVC, infarto cardíaco ou morte por qualquer causa esteve inversamente associada a presença de micro e nanoplásticos na carótida.",
      "(D) Nesse estudo de coorte prospectivo, a incidência de AVC, infarto cardíaco ou morte por qualquer causa esteve diretamente associada a presença de micro e nanoplásticos na carótida."
    ],
    "correctAnswer": 3,
    "explanation": "O estudo identificou micro e nanoplásticos nas placas de quem foi operado (exposição medida no início) e acompanhou prospectivamente esses pacientes por 34 meses, comparando a incidência do desfecho composto (AVC, infarto e morte) entre expostos e não expostos: é uma coorte prospectiva.\n\nA curva de incidência acumulada é maior nos pacientes com MNPs, com hazard ratio de 4,53 (IC 95% 2,00–10,27): associação direta e significativa.",
    "commentary": "Caso-controle com associação inversa (A): o desenho não parte do desfecho, e a associação é direta.\n\nCoorte retrospectiva (B): o seguimento foi feito para frente, após a endarterectomia.\n\nExperimental com associação inversa (C): não houve intervenção alocada pelo pesquisador, e a associação é direta.",
    "reference": "Marfella R et al. — Microplastics and Nanoplastics in Atheromas and Cardiovascular Events (NEJM 2024; 390:900-910)",
    "tags": [
      "epidemiologia",
      "estudo de coorte",
      "hazard ratio",
      "microplásticos"
    ],
    "image": "/images/usprp2025-35.webp"
  },
  {
    "id": "usprp2025-36",
    "module": "Saúde Coletiva",
    "text": "Um estudo ecológico foi realizado no Reino Unido (Lancet Planet Health 2024; 8: e156-162) para investigar a possível associação entre a temperatura ambiente diária e o risco populacional de Insuficiência Renal Aguda (IRA) no mesmo dia e nos dias subsequentes. A figura abaixo ilustra os resultados principais desse estudo.\n\nConsiderando os resultados apresentados, assinale a alternativa abaixo que melhor os interpretam.",
    "options": [
      "(A) O risco de insuficiência renal aguda eleva-se significativamente a partir do momento em que a temperatura média ultrapassa 25° C, o que provavelmente se deve à desidratação e consequente redução do fluxo plasmático renal.",
      "(B) O risco de insuficiência renal aguda decresce significativamente a partir do momento em que a temperatura média decresce a menos de 10° C, o que provavelmente se deve às pessoas saírem menos de casa no frio.",
      "(C) O risco de insuficiência renal aguda decresce significativamente a partir do momento em que a temperatura média decresce a menos de 15° C, o que provavelmente se deve à menor perda de água por transpiração.",
      "(D) O risco de insuficiência renal aguda eleva-se significativamente a partir do momento em que a temperatura média ultrapassa 25° C, o que provavelmente se deve à hipertermia e consequente nefrite intersticial."
    ],
    "correctAnswer": 0,
    "explanation": "A curva mostra a odds ratio de insuficiência renal aguda em função da temperatura máxima diária: permanece próxima de 1 até cerca de 20–25 °C e sobe de forma significativa (IC acima de 1) a partir de cerca de 25 °C.\n\nA explicação biológica mais plausível é a desidratação pelo calor (perda de água e sódio), com redução da volemia e do fluxo plasmático renal e lesão pré-renal. Idosos e usuários de diuréticos e IECA são os mais vulneráveis.",
    "commentary": "Risco cai abaixo de 10 °C (B): a curva não mostra queda significativa no frio, e a explicação é especulativa.\n\nRisco cai abaixo de 15 °C (C): o intervalo de confiança inclui 1 nas temperaturas baixas.\n\nNefrite intersticial por hipertermia (D): o mecanismo mais provável é pré-renal por desidratação, não nefrite intersticial.",
    "reference": "Estudo ecológico de série temporal (Lancet Planet Health 2024; 8: e156–162) / OMS — Heat and Health",
    "tags": [
      "epidemiologia",
      "clima e saúde",
      "insuficiência renal aguda",
      "calor extremo"
    ],
    "image": "/images/usprp2025-36.webp"
  },
  {
    "id": "usprp2025-37",
    "module": "Saúde Coletiva",
    "text": "A imagem abaixo foi publicada pelo Sistema de Estimativas de Emissões e Remoções de Gases de Efeito Estufa (SEEG), ligado ao Observatório do Clima, e retrata as emissões desses gases por município e macrorregião brasileira, nos últimos 10 anos. A figura também discrimina os principais setores emissores desses mesmos gases, em cada município.\n\nCom base nas informações apresentadas, e nos seus conhecimentos sobre esse problema, assinale a alternativa que melhor as interpreta.",
    "options": [
      "(A) A região campeã na emissão de gases de efeito estufa é a região norte, devido às emissões ligadas à mineração, o processamento industrial e o transporte dos minérios.",
      "(B) Os estados campeões na emissão de gases de efeito estufa são Minas Gerais e São Paulo porque são os estados com maior malha de transporte rodoviário e mais industrializados.",
      "(C) No Brasil, grande parte das emissões de gases de efeito estufa advém das queimadas da região amazônica, voltadas para a criação de gado de corte e plantio de soja.",
      "(D) Globalmente, o Brasil equilibra a emissão anual de gases de efeito estufa com a remoção desses mesmos gases, por meio de suas florestas e plantações."
    ],
    "correctAnswer": 2,
    "explanation": "Pelos dados do SEEG, a maior parte das emissões brasileiras de gases de efeito estufa vem da mudança de uso da terra e florestas (desmatamento e queimadas, sobretudo na Amazônia e no Cerrado), seguida da agropecuária. A conversão de floresta em pastagem e soja é o principal motor.\n\nPor isso a região Norte lidera em emissão bruta no mapa.",
    "commentary": "Norte por mineração (A): a região lidera, mas pela mudança de uso da terra (desmatamento), não pela mineração.\n\nMinas Gerais e São Paulo (B): Pará e Mato Grosso, com desmatamento, são os maiores emissores.\n\nBrasil equilibra emissões e remoções (D): o país é emissor líquido relevante; as remoções não compensam as emissões.",
    "reference": "SEEG — Sistema de Estimativas de Emissões e Remoções de Gases de Efeito Estufa (Observatório do Clima)",
    "tags": [
      "saúde coletiva",
      "clima e saúde",
      "mudanças climáticas",
      "desmatamento"
    ],
    "image": "/images/usprp2025-37.webp"
  },
  {
    "id": "usprp2025-38",
    "module": "Saúde Coletiva",
    "text": "A Organização Mundial da Saúde (OMS) lançou em 1974 o Programa Expandido de Imunizações que acaba de completar 50 anos de existência. A figura abaixo, extraída de um artigo científico (Lancet 2024; 403: 2307-16) ilustra o impacto global acumulativo produzido por esse programa sobre desfechos de interesse em saúde pública.\n\nConsiderando as informações apresentadas e seu conhecimento sobre imunização, assinale a alternativa que melhor as interpreta.",
    "options": [
      "(A) Comparativamente às demais vacinas, a vacinação contra poliomielite não impactou muito a sobrevida, mas promoveu ganho em anos de vida plenamente saudável ao prevenir sequelas.",
      "(B) A prevenção de mortes pela vacinação contra o tétano deve-se, principalmente, à redução na incidência e letalidade do tétano neonatal devido à vacinação das gestantes, mas não do tétano acidental.",
      "(C) A vacina tríplice viral não teve uma efetividade uniforme já que a proteção contra o sarampo foi muito superior à proteção observada contra caxumba e rubéola, sequer mencionadas na figura.",
      "(D) A vacinação contra a tuberculose (BCG) evitou muitas mortes, especialmente, de crianças na primeira infância, devido à elevada proteção conferida contra as formas meningoencefálica e pleural da doença."
    ],
    "correctAnswer": 0,
    "explanation": "Os gráficos do estudo (Lancet 2024) separam mortes evitadas, anos de vida salvos e anos de vida plenamente saudável ganhos. A poliomielite tem participação pequena nas mortes evitadas (a pólio raramente mata), mas aparece com destaque nos anos de vida saudável ganhos.\n\nIsso ocorre porque a vacinação previne a paralisia, uma sequela permanente e incapacitante.",
    "commentary": "Tétano só neonatal (B): a vacinação previne o tétano neonatal e o acidental; a afirmação restritiva não é sustentada pela figura.\n\nTríplice viral pouco efetiva contra caxumba e rubéola (C): a figura só mostra o sarampo pelo impacto na mortalidade; não avalia efetividade.\n\nBCG contra forma pleural (D): a BCG protege principalmente contra formas graves em crianças (meníngea e miliar), não especialmente a pleural.",
    "reference": "Shattock AJ et al. — Contribution of vaccination to improved survival and health: modelling 50 years of the EPI (Lancet 2024; 403:2307-16)",
    "tags": [
      "saúde coletiva",
      "imunização",
      "programa expandido de imunizações",
      "poliomielite"
    ],
    "image": "/images/usprp2025-38.webp"
  },
  {
    "id": "usprp2025-39",
    "module": "Saúde Coletiva",
    "text": "Na reunião do Conselho Local de Saúde (CLS) alguns moradores do território da Unidade de Saúde da Família (USF) apresentaram a preocupação com o aumento do número de acidentes de trânsito, na principal avenida do bairro. Relataram, ainda, que os idosos estão com dificuldade para atravessar esta avenida, pois os carros e as motos transitam em alta velocidade. Os conselheiros decidiram convidar um representante do Departamento dos Serviços de Trânsito do município para participar da próxima reunião do CLS, discutirem este problema e possíveis estratégias de enfrentamento.\n\nEsta deliberação dos conselheiros locais de saúde se relaciona, principalmente, com qual atributo da atenção primária à saúde?",
    "options": [
      "(A) Competência cultural.",
      "(B) Longitudinalidade do cuidado.",
      "(C) Integralidade da atenção.",
      "(D) Orientação comunitária."
    ],
    "correctAnswer": 3,
    "explanation": "A Orientação Comunitária, um dos atributos derivados da APS (Starfield), significa reconhecer as necessidades de saúde da comunidade no seu contexto social e agir sobre elas com participação da comunidade e articulação intersetorial.\n\nO Conselho Local identificou um problema do território (acidentes de trânsito, risco para idosos) e chamou outro setor (trânsito) para buscar soluções.",
    "commentary": "Competência cultural (A): adaptar o cuidado às características culturais da população.\n\nLongitudinalidade (B): vínculo e acompanhamento da pessoa ao longo do tempo.\n\nIntegralidade (C): oferta de todos os serviços necessários à pessoa, inclusive por referência.",
    "reference": "Starfield B — Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (UNESCO/MS, 2002)",
    "tags": [
      "saúde coletiva",
      "atenção primária",
      "atributos da APS",
      "orientação comunitária"
    ]
  },
  {
    "id": "usprp2025-40",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 20 anos, procura a Unidade de Saúde da Família para iniciar Planejamento Familiar. Tem um filho de 6 anos e relata a ocorrência de um aborto. Após a gestação ficou hipertensa e, atualmente, apresenta um IMC: 30kg/m². Apresenta anticorpo antifosfolipídeo positivo, mas a doença está controlada. Ela deseja fazer laqueadura, pois a situação financeira não está nada fácil, só o esposo trabalha e diz que não pode engravidar, novamente, de jeito nenhum.\n\nComo Médico de Família e Comunidade desta Unidade qual conduta você indicaria?",
    "options": [
      "(A) Prescrição de pílula anticoncepcional apenas de progestágeno.",
      "(B) Indicação do dispositivo intrauterino (DIU) de cobre",
      "(C) Prescrição de anticoncepcional combinado oral.",
      "(D) Encaminhar a paciente para laqueadura, pois esse é o seu desejo."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 20 anos com hipertensão, obesidade e anticorpo antifosfolípide positivo. Pelos Critérios de Elegibilidade da OMS, anticorpo antifosfolípide positivo é categoria 4 para métodos com estrogênio e, na maioria das publicações, categoria 3 para métodos só de progestagênio (risco teórico de trombose).\n\nAinda assim, entre as opções, o gabarito considerou a pílula só de progestagênio a mais adequada no momento. A laqueadura não deve ser indicada aos 20 anos por pressão financeira: a lei exige idade ≥ 21 anos (ou 2 filhos vivos) e há alto risco de arrependimento. O DIU de cobre também é uma alternativa de longa duração.",
    "commentary": "DIU de cobre (B): seria opção de alta eficácia (categoria 1 para SAF sem trombocitopenia grave), mas o gabarito considerou a pílula de progestagênio.\n\nAnticoncepcional combinado (C): contraindicado (categoria 4) por SAF e hipertensão.\n\nLaqueadura (D): a Lei nº 14.443/2022 exige 21 anos ou 2 filhos vivos; ela tem 20 anos e 1 filho.",
    "reference": "Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais — OMS, 5ª ed. / Lei nº 14.443/2022",
    "tags": [
      "ginecologia",
      "contracepção",
      "critérios de elegibilidade",
      "síndrome antifosfolípide",
      "planejamento familiar"
    ],
    "alert": "Gabarito discutível: pela OMS, o DIU de cobre é categoria 1 com anticorpo antifosfolípide positivo, enquanto os métodos só de progestagênio são categoria 3. O gabarito oficial considera a pílula de progestagênio."
  },
  {
    "id": "usprp2025-41",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 24 anos, G3P2A0, com 12 semanas, com sorologia anti-HIV não reagente na última semana, procurou o serviço de urgência referindo que durante relação sexual há 26 horas, houve ruptura total do preservativo com ejaculado no canal anal. A paciente está muito ansiosa, pois seu parceiro vive com HIV, sem tratamento e sem controle clínico e laboratorial no último ano. O teste rápido para detecção do HIV da gestante foi negativo.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Fazer profilaxia com lamivudina, tenofovir e dolutegravir.",
      "(B) Profilaxia pós exposição não está indicada nessa idade gestacional.",
      "(C) Fazer profilaxia somente com zidovudina endovenosa.",
      "(D) Após este tempo da exposição não está mais indicada a profilaxia."
    ],
    "correctAnswer": 0,
    "explanation": "Exposição sexual de alto risco (anal receptiva com ejaculação, parceiro com HIV sem tratamento) há 26 horas, com teste rápido negativo. A PEP está indicada até 72 horas após a exposição e deve começar o quanto antes.\n\nNa gestação, o esquema preferencial é o mesmo da população geral: tenofovir + lamivudina + dolutegravir por 28 dias. O dolutegravir é seguro em qualquer idade gestacional, segundo o PCDT atual. Seguem-se testagem de HIV, sífilis e hepatites e acompanhamento.",
    "commentary": "PEP contraindicada na idade gestacional (B): a gestação não contraindica PEP; o risco de transmissão vertical reforça a indicação.\n\nSó zidovudina intravenosa (C): AZT IV é usado no parto de gestante com HIV, não como PEP.\n\nFora do prazo (D): o prazo da PEP é de até 72 horas; 26 horas está dentro.",
    "reference": "PCDT para Profilaxia Pós-Exposição (PEP) de Risco à Infecção pelo HIV, IST e Hepatites Virais — Ministério da Saúde, 2024",
    "tags": [
      "obstetrícia",
      "HIV",
      "profilaxia pós-exposição",
      "gestação"
    ]
  },
  {
    "id": "usprp2025-42",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 27 anos, 28 semanas de idade gestacional, parceria sexual inconstante e início tardio de pré-natal. Na anamnese negou alterações clínicas compatíveis com sífilis. Sem alterações no exame físico e ginecológico/obstétrico. Exames laboratoriais: Quimioluminescência para sífilis reagente e Rapid Plasma Reagin (RPR) não reagente.\n\nConsiderando as atuais diretrizes do Ministério da Saúde para o diagnóstico sorológico da sífilis, qual seria a melhor estratégia para este caso?",
    "options": [
      "(A) Repetir a quimioluminescência.",
      "(B) Repetir o RPR.",
      "(C) Solicitar outro teste treponêmico.",
      "(D) Solicitar o VDRL."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante com teste treponêmico reagente (quimioluminescência) e teste não treponêmico (RPR) não reagente: resultados discordantes. Pode ser sífilis muito recente, sífilis tratada no passado (cicatriz sorológica) ou falso-positivo do treponêmico.\n\nO fluxograma do Ministério da Saúde manda realizar um segundo teste treponêmico, de metodologia diferente (por exemplo, FTA-Abs, TPHA ou teste rápido). Se reagente, considerar sífilis e avaliar o tratamento prévio; se não reagente, considerar falso-positivo. Na gestante, diante de dúvida e sem tratamento documentado, trata-se.",
    "commentary": "Repetir a quimioluminescência (A): repetir o mesmo teste não resolve a discordância.\n\nRepetir o RPR (B): não esclarece se o treponêmico é verdadeiro-positivo.\n\nVDRL (D): é outro teste não treponêmico, de mesmo princípio do RPR.",
    "reference": "Manual Técnico para o Diagnóstico da Sífilis — Ministério da Saúde, 2021 / PCDT para Prevenção da Transmissão Vertical",
    "tags": [
      "obstetrícia",
      "sífilis",
      "pré-natal",
      "testes treponêmicos"
    ]
  },
  {
    "id": "usprp2025-43",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera, 27 anos, G1P1, está no quarto dia após parto cesárea a termo por parada secundária de descida, internada em alojamento conjunto, evoluindo com quadro de febre. Tem obesidade grau 3 e sua avaliação de escore de alerta precoce (do inglês = MEOWS modified early obstetric warning score) está destacada em negrito no quadro apresentado a seguir. Abdômen normotenso, ruídos hidroaéreos presentes, ferida operatória sem sinais flogísticos, fundo uterino palpável a 2 cm abaixo da cicatriz umbilical e doloroso em hipogástrio. Especular = loquiação presente, avermelhada e com odor fétido. Toque vaginal = colo pérvio 3 cm, amolecido, doloroso a imobilização.\n\nQual é o melhor esquema terapêutico?",
    "options": [
      "(A) Ceftriaxona e claritromicina.",
      "(B) Gentamicina e clindamicina.",
      "(C) Oxacilina e clindamicina.",
      "(D) Ceftriaxona e azitromicina."
    ],
    "correctAnswer": 1,
    "explanation": "Puérpera no 4º dia pós-cesárea (após trabalho de parto prolongado), obesa, com febre, útero doloroso e subinvoluído, loquiação fétida e colo doloroso: endometrite puerperal. O escore MEOWS destacado soma cerca de 7 pontos (febre, PA sistólica de 70–89 e diastólica < 45 mmHg, FC de 100–109 bpm), indicando gravidade e provável sepse de foco ginecológico.\n\nÉ infecção polimicrobiana (aeróbios e anaeróbios). O esquema de escolha é clindamicina + gentamicina intravenosas, até 48 horas afebril, com ou sem ampicilina.",
    "commentary": "Ceftriaxona e claritromicina (A): não cobre anaeróbios adequadamente.\n\nOxacilina e clindamicina (C): sem cobertura para Gram-negativos.\n\nCeftriaxona e azitromicina (D): esquema para IST e DIP ambulatorial, sem cobertura anaeróbia adequada para endometrite pós-cesárea.",
    "reference": "Febrasgo — Infecção puerperal / Manual de Gestação de Alto Risco — MS, 2022",
    "tags": [
      "obstetrícia",
      "infecção puerperal",
      "endometrite",
      "MEOWS"
    ],
    "image": "/images/usprp2025-43.webp"
  },
  {
    "id": "usprp2025-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 24 anos, com 36 semanas, portadora de Diabetes Mellitus tipo 1 desde os 10 anos de idade e nefropatia diabética há 5 anos. Paciente retorna à consulta de pré-natal referindo controle glicêmico satisfatório, porém com episódios de mal-estar geral, tonturas e sudorese, que melhoram com alimentação, há uma semana. Nega episódios de perda de consciência. Refere adequada adesão ao plano nutricional e à insulinoterapia prescritos. Em uso de análogos de insulinas NPH e Asparte desde o inicio da gestação. Exame físico geral e obstétrico normais. Ganho de peso semanal de 100 g. Hoje, a ultrassonografia evidenciou peso fetal estimado no percentil 9, índice de pulsatilidade da artéria umbilical no percentil 100 e da artéria cerebral média no percentil 2, maior bolsão de liquido amniótico de 4 cm, perfil biofísico fetal de 8 em 8.\n\nA análise do perfil glicêmico da última semana está demonstrada no quadro a seguir: Além do ajuste de insulinas e vigilância de bem-estar fetal, com que idade gestacional deve ser programada a resolução de sua gestação?",
    "options": [
      "(A) 39 semanas.",
      "(B) 37 semanas.",
      "(C) Imediatamente.",
      "(D) 38 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante com DM1 e nefropatia, com hipoglicemias (madrugada, circuladas no perfil) e queda da necessidade de insulina, ganho de peso baixo e feto no percentil 9 com Doppler alterado: IP da umbilical no percentil 100 e IP da cerebral média no percentil 2 (centralização, relação cérebro-placentária alterada).\n\nA queda das necessidades insulínicas sugere insuficiência placentária. Com restrição de crescimento e centralização fetal com 36 semanas, os riscos de manter a gestação superam os do nascimento: a resolução deve ser imediata.",
    "commentary": "39 semanas (A): data para DM bem controlado sem complicações.\n\n37 semanas (B): seria para RCF sem centralização; aqui há Doppler alterado e sinais de insuficiência placentária.\n\n38 semanas (D): atrasaria a resolução em situação de risco fetal.",
    "reference": "Febrasgo — Diabetes pré-gestacional / ISUOG — Fetal growth restriction (2020) / Manual de Gestação de Alto Risco — MS",
    "tags": [
      "obstetrícia",
      "diabetes mellitus tipo 1",
      "restrição de crescimento fetal",
      "dopplervelocimetria"
    ],
    "image": "/images/usprp2025-44.webp"
  },
  {
    "id": "usprp2025-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 30 anos, com 39 semanas, foi admitida para indução do trabalho de parto, por hipertensão controlada, assintomática. Exame físico geral normal. Altura uterina de 36cm, atividade uterina ausente, feto com boa vitalidade. A indução foi iniciada com misoprostol e, no segundo dia, com progressão do índice de Bishop de 2 para 6, foi continuada com infusão de ocitocina. Após 4 horas, se obteve a cardiotocografia exibida abaixo (Figura 1). Foram prescritos para a mãe decúbito lateral esquerdo, oxigenação em máscara, infusão rápida de soro fisiológico e interrupção da ocitocina. A cardiotocografia obtida após 30 minutos está demonstrada na Figura 2. O exame cervical nesse momento mostrava colo centrado, curto, 7 cm, feto ODT, 1, bolsa rota.",
    "options": [
      "(A) Tocólise aguda com terbutalina subcutânea.",
      "(B) Conduta expectante com monitorização fetal contínua.",
      "(C) Retorno da infusão endovenosa de ocitocina.",
      "(D) Resolução da gestação por parto cesárea."
    ],
    "correctAnswer": 3,
    "explanation": "Indução com ocitocina e cardiotocografia com desacelerações tardias recorrentes e variabilidade reduzida (categoria III). Mesmo após 30 minutos de reanimação intrauterina (decúbito lateral, O₂, volume e suspensão da ocitocina), o traçado continua anormal (variabilidade mínima e desacelerações tardias), e o colo está com 7 cm.\n\nSem dilatação total, não há condição para parto vaginal instrumental: a conduta é a resolução imediata por cesárea.",
    "commentary": "Tocólise com terbutalina (A): poderia ser tentada na taquissistolia, mas a ocitocina já foi suspensa e o traçado persiste anormal.\n\nExpectante com monitorização (B): inaceitável com CTG categoria III persistente.\n\nRetomar a ocitocina (C): agravaria a hipóxia fetal.",
    "reference": "ACOG Practice Bulletin 106 (Intrapartum FHR Monitoring) / Febrasgo — Cardiotocografia",
    "tags": [
      "obstetrícia",
      "cardiotocografia",
      "sofrimento fetal",
      "reanimação intrauterina"
    ],
    "image": "/images/usprp2025-45.webp"
  },
  {
    "id": "usprp2025-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 24 anos, com 37 semanas gestacionais. Realizou pré-natal no posto de saúde sem intercorrências. Procura a maternidade por perda líquida vaginal há 2 horas, em episódio único. Nega febre, sangramento ou dores abdominais. Sinais vitais normais. Altura uterina: 34 cm. Atividade uterina ausente. Exame especular: conteúdo claro no fundo de saco em pequena quantidade. Testes auxiliares: pH de 7,5. Padrão microscópico de cristalização com ramificações secundárias. Índice de líquido amniótico: 2 cm. Toque vaginal: colo dilatado 2 cm, variedade de posição sacro transversa esquerda, apresentação alta e móvel. Cardiotocografia: feto ativo e reativo.\n\nQual a melhor orientação para esta paciente?",
    "options": [
      "(A) Internação para indução do trabalho de parto.",
      "(B) Internação para interrupção da gestação por via cesariana.",
      "(C) Alta hospitalar e aguardar início espontâneo do trabalho de parto.",
      "(D) Internação para versão cefálica externa e conduta expectante."
    ],
    "correctAnswer": 1,
    "explanation": "Gestante a termo com rotura prematura de membranas confirmada (pH alcalino, cristalização em samambaia, ILA de 2 cm), sem trabalho de parto e com apresentação pélvica (variedade sacro transversa), alta e móvel.\n\nNa RPM a termo está indicada a resolução. Como a apresentação é pélvica em primigesta, a via de escolha é a cesárea. A versão cefálica externa é contraindicada com bolsa rota.",
    "commentary": "Indução (A): a apresentação pélvica em primigesta contraindica a indução para parto vaginal.\n\nAlta e aguardar (C): a RPM a termo exige internação, pelo risco de infecção e de prolapso de cordão (apresentação alta).\n\nVersão cefálica externa (D): contraindicada com bolsa rota e oligoâmnio.",
    "reference": "Febrasgo — Rotura prematura de membranas / ACOG Committee Opinion 745 (Breech)",
    "tags": [
      "obstetrícia",
      "rotura prematura de membranas",
      "apresentação pélvica",
      "cesárea"
    ]
  },
  {
    "id": "usprp2025-47",
    "module": "Ginecologia e Obstetrícia",
    "text": "Tercigesta (2 partos vaginais, com 34 e 35 semanas), 31 anos, com 38 semanas de gestação, internou em fase ativa do trabalho de parto, sem intercorrências no pré-natal. A parturiente está bem ativa, deambulando e fazendo exercícios na bola Bobath. Quer muito o parto vaginal. A evolução de seu trabalho de parto está demonstrada no partograma abaixo. Os sinais vitais maternos e vitalidade fetal são normais. Escolha a alternativa com a melhor conduta para essa parturiente, segundo as Diretrizes Nacionais e da Organização Mundial da Saúde (2020).",
    "options": [
      "(A) Realizar parto cesárea.",
      "(B) Conduta expectante.",
      "(C) Analgesia farmacológica de parto.",
      "(D) Ocitocina endovenosa contínua."
    ],
    "correctAnswer": 3,
    "explanation": "No partograma, a dilatação progride até 8 cm e permanece em 8 cm em exames sucessivos com intervalo de 2 horas, ultrapassando a linha de ação: parada secundária da dilatação. As contrações são insuficientes (cerca de 2 em 10 minutos, hipossistolia), com bolsa rota, líquido claro e vitalidade fetal normal, sem sinais de desproporção.\n\nÉ distocia funcional, e a conduta é corrigir a dinâmica uterina com ocitocina em infusão contínua.",
    "commentary": "Cesárea (A): não é a primeira conduta na distocia funcional sem sofrimento fetal ou desproporção.\n\nExpectante (B): a parada após a linha de ação exige intervenção.\n\nAnalgesia (C): pode ser oferecida para conforto, mas não corrige a hipossistolia.",
    "reference": "Diretrizes Nacionais de Assistência ao Parto Normal — MS, 2017 / OMS — Intrapartum care (2018/2020)",
    "tags": [
      "obstetrícia",
      "partograma",
      "parada secundária da dilatação",
      "ocitocina"
    ],
    "image": "/images/usprp2025-47.webp"
  },
  {
    "id": "usprp2025-48",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 30 anos, com idade gestacional de 33 semanas e 3 dias. Pré-natal de risco habitual e sem intercorrências. Procura a maternidade com queixa de cólicas abdominais intermitentes, a cada 10 minutos acompanhada de eliminação de muco pela vagina. Nega sangramentos ou perdas líquidas. Sem outras queixas. Ao exame: sinais vitais normais. Obstétrico: 2 contrações moderadas de 30 segundos em 10 minutos; frequência cardíaca fetal de 140 bpm, sem desacelerações. Toque vaginal: colo dilatado 4 cm, esvaecido 50%, centrando, com bolsa palpável e apresentação cefálica, alta e móvel.\n\nQual a melhor conduta para a gestante?",
    "options": [
      "(A) Tocólise, corticosteroide e profilaxia antibiótica.",
      "(B) Sulfato de magnésio e assistência ao parto.",
      "(C) Reavaliar em 2 horas após hiperidratação materna.",
      "(D) Ultrassonografia imediata para medida do colo uterino."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante de 33 semanas e 3 dias em trabalho de parto prematuro (contrações regulares, colo com 4 cm e 50% apagado), sem contraindicações. Abaixo de 34 semanas indicam-se:\n\n• Tocólise (nifedipino ou atosiban) por até 48 horas, para viabilizar o corticoide\n• Corticoide antenatal (betametasona) para maturação pulmonar\n• Profilaxia para estreptococo do grupo B (status desconhecido, trabalho de parto prematuro)\n\nO sulfato de magnésio para neuroproteção é indicado abaixo de 32 semanas.",
    "commentary": "Sulfato de magnésio e assistência ao parto (B): a neuroproteção vale abaixo de 32 semanas, e com 33 semanas ainda se tenta tocólise e corticoide.\n\nHiperidratação e reavaliar (C): a hidratação não previne parto prematuro, e o diagnóstico já está feito (4 cm).\n\nUSG de colo (D): o colo já está dilatado ao toque; a medida não muda a conduta.",
    "reference": "Febrasgo — Trabalho de parto prematuro / ACOG Practice Bulletin 171 / Manual de Gestação de Alto Risco — MS",
    "tags": [
      "obstetrícia",
      "trabalho de parto prematuro",
      "tocólise",
      "corticoide antenatal"
    ]
  },
  {
    "id": "usprp2025-49",
    "module": "Ginecologia e Obstetrícia",
    "text": "Multípara, G4P4, parto vaginal sem intercorrências há 30 minutos. Recém-nascido com peso de 4.100 gramas. Foram administradas 10 unidades de ocitocina intramuscular para profilaxia de hemorragia pós-parto. Logo após a dequitação observou-se sangramento vaginal volumoso e útero hipotônico. Até o momento já foram realizados massagem uterina bimanual, ocitocina, ácido tranexâmico e 2.500 ml de soro fisiológico (SF 0,9%). No momento, útero hipotônico, pressão arterial 90 x 50 mmHg e frequência cardíaca: 128 batimentos por minuto. Índice de choque de 1,4.\n\nQual manejo mais adequado?",
    "options": [
      "(A) Misoprostol retal e 1000 ml de soro fisiológico 0,9%.",
      "(B) Pontos de B Lynch e 1000 ml de ringer lactato.",
      "(C) Metilergometrina e dois concentrados de hemácias.",
      "(D) Balão de tamponamento intrauterino e SF 0,9%."
    ],
    "correctAnswer": 2,
    "explanation": "Hemorragia pós-parto por atonia (multípara, macrossomia) sem resposta a massagem, ocitocina e ácido tranexâmico, já com 2.500 mL de cristaloide e índice de choque de 1,4 (choque grave).\n\nAs medidas são: segundo uterotônico (metilergometrina, se não houver hipertensão) e transfusão de concentrado de hemácias, interrompendo o excesso de cristaloide. Índice de choque ≥ 1,4 indica hemorragia grave com necessidade de hemocomponentes. Se o útero não responder, seguem-se balão de tamponamento e medidas cirúrgicas.",
    "commentary": "Misoprostol e mais 1 L de SF (A): mais cristaloide piora a coagulopatia dilucional; o choque grave exige sangue.\n\nB-Lynch e Ringer (B): cirurgia antes de esgotar os uterotônicos, e sem transfusão.\n\nBalão e SF (D): o balão é medida seguinte se os uterotônicos falharem, mas a reposição deve ser com sangue, não mais cristaloide.",
    "reference": "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018) / Febrasgo",
    "tags": [
      "obstetrícia",
      "hemorragia pós-parto",
      "atonia uterina",
      "índice de choque"
    ]
  },
  {
    "id": "usprp2025-50",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta (G2P0A1), 26 anos, com atraso menstrual de 18 semanas, inicia pré-natal hoje após teste de gravidez positivo. Nega doenças ou intercorrências até o momento. Exame físico geral sem alterações. A altura uterina é de 26cm. Fez ultrassonografia hoje, com achado de gestação gemelar dicoriônica, com idade gestacional de 24 semanas, achados fetais e anexiais normais.\n\nCom relação à profilaxia de pré-eclâmpsia, nesse caso, a alternativa correta é:",
    "options": [
      "(A) Iniciar ácido acetilsalicílico e cálcio.",
      "(B) Prescrever ácido acetilsalicílico.",
      "(C) Prescrever ácido acetilsalicílico e enoxaparina.",
      "(D) Não deve ser prescrita."
    ],
    "correctAnswer": 3,
    "explanation": "A gestação gemelar é fator de alto risco para pré-eclâmpsia e indicaria AAS em dose baixa (com cálcio se a ingesta for baixa). Mas o benefício do AAS depende do início precoce, idealmente entre 12 e 16 semanas, pois ele atua na placentação.\n\nA ultrassonografia, mais confiável que a DUM incerta, data a gestação em 24 semanas. Fora da janela recomendada pelas diretrizes brasileiras (até 16–20 semanas), o gabarito entende que não deve ser prescrito.",
    "commentary": "AAS e cálcio (A): seria a conduta se a gestação estivesse dentro da janela de início.\n\nAAS isolado (B): mesmo problema de época de início.\n\nAAS e enoxaparina (C): a enoxaparina não previne pré-eclâmpsia.",
    "reference": "Febrasgo/RBEHG — Prevenção da pré-eclâmpsia / ACOG Committee Opinion 743",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "gestação gemelar"
    ],
    "alert": "Gabarito discutível: a ACOG admite iniciar o AAS até 28 semanas (idealmente antes de 16). O gabarito segue a janela das diretrizes brasileiras e considera que, com 24 semanas, não se deve prescrever."
  },
  {
    "id": "usprp2025-51",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 55 anos, nuligesta, menopausada há 7 anos, sem comorbidades, sem antecedentes familiares de câncer, comparece em retorno de consulta ginecológica para checar exames solicitados. Exame físico realizado há 15 dias sem alterações dignas de nota. Exames laboratoriais de rotina normais. Laudo da mamografia descreve área de assimetria focal em região central no terço profundo de mama direita, BI RADS 0. Paciente refere que última mamografia realizada foi há 5 anos e não tem as grafias guardadas.\n\nQual a conduta mais apropriada nesse caso?",
    "options": [
      "(A) Realizar biópsia de mama por agulha grossa dirigida por imagem.",
      "(B) Tranquilizar a paciente e agendar seguimento anual com mamografia.",
      "(C) Solicitar compressão localizada e ultrassonografia de mama.",
      "(D) Agendar retorno em 6 meses com mamografia somente da mama direita."
    ],
    "correctAnswer": 2,
    "explanation": "Assimetria focal BI-RADS 0 em mamografia sem exames anteriores para comparação. BI-RADS 0 significa avaliação incompleta: é preciso complementar antes de classificar.\n\nPara assimetria focal, a complementação inclui incidências adicionais (compressão localizada ou spot) e ultrassonografia mamária, que diferenciam sobreposição de tecidos de lesão verdadeira.",
    "commentary": "Core biopsy (A): não se biopsia antes de classificar a lesão.\n\nSeguimento anual (B): BI-RADS 0 não permite alta sem complementação.\n\nControle em 6 meses (D): é conduta para BI-RADS 3, ainda não definido.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / CBR/SBM/Febrasgo — Recomendações para rastreamento do câncer de mama",
    "tags": [
      "mastologia",
      "mamografia",
      "BI-RADS",
      "assimetria focal"
    ]
  },
  {
    "id": "usprp2025-52",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 27 anos, comparece à Unidade Básica de Saúde para checar resultado de exame citopatológico, sem queixas. Refere ciclos menstruais regulares, nega sangramento intermenstrual, dispareunia, sinusorragia e dor pélvica. Resultado de colpocitologia: Células escamosas atípicas de significado indeterminado, possivelmente não neoplásicas.\n\nDe acordo com as diretrizes do INCA, qual a melhor conduta?",
    "options": [
      "(A) Repetir citopatológico em 12 meses.",
      "(B) Encaminhar para colposcopia.",
      "(C) Repetir citopatológico em 6 meses.",
      "(D) Colher novo exame citopatológico imediatamente."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas Diretrizes Brasileiras do INCA (2016), na ASC-US (atipias escamosas de significado indeterminado, possivelmente não neoplásicas):\n\n• 25 a 29 anos: repetir a citologia em 12 meses\n• 30 anos ou mais: repetir em 6 meses\n\nSe o resultado se repetir (ou for mais grave), encaminha-se à colposcopia. A paciente tem 27 anos: repetir em 12 meses.",
    "commentary": "Colposcopia (B): indicada na ASC-US persistente ou em lesões de maior grau.\n\nRepetir em 6 meses (C): conduta para 30 anos ou mais.\n\nRepetir imediatamente (D): não há indicação de repetição imediata.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — INCA, 2016",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer do colo do útero",
      "ASC-US"
    ]
  },
  {
    "id": "usprp2025-53",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 47 anos de idade, G4P4A0, tabagista e sem outras comorbidades refere aparecimento de nódulo doloroso em região periareolar da mama direita há 4 dias. Refere que há algumas horas houve drenagem de secreção purulenta. Tem antecedente familiar positivo para câncer: tia paterna com câncer de ovário aos 67 anos de idade e mãe com câncer de mama aos 72 anos de idade. Inspeção estática representada na figura.\n\nQual o diagnóstico mais provável?",
    "options": [
      "(A) Doença de Paget do mamilo.",
      "(B) Mastite perductal.",
      "(C) Carcinoma inflamatório.",
      "(D) Mastite granulomatosa"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 47 anos, tabagista, com nódulo periareolar doloroso que drenou pus: mastite periductal (abscesso subareolar recidivante, doença de Zuska), fortemente associada ao tabagismo, que causa metaplasia escamosa e obstrução ductal.\n\nA foto mostra área inflamatória periareolar com orifício de drenagem. O tratamento é drenagem e antibiótico com cobertura anaeróbia, cessação do tabagismo e, nos casos recidivantes ou com fístula, ressecção dos ductos.",
    "commentary": "Doença de Paget (A): lesão eczematosa crônica do mamilo, sem abscesso.\n\nCarcinoma inflamatório (C): eritema difuso com pele em casca de laranja em mais de um terço da mama, sem coleção purulenta localizada.\n\nMastite granulomatosa (D): ligada a gestação recente e amamentação, com nódulos periféricos; diagnóstico histológico.",
    "reference": "Febrasgo — Doenças benignas da mama / Tratado de Mastologia (SBM)",
    "tags": [
      "mastologia",
      "mastite periductal",
      "abscesso subareolar",
      "tabagismo"
    ],
    "image": "/images/usprp2025-53.webp"
  },
  {
    "id": "usprp2025-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 52 anos, G2P2A0 (2PN), DUM há 3 anos, procura atendimento ginecológico com queixa de perda urinaria há 8 meses que vem atrapalhando suas atividades habituais. Após orientações comportamentais e de fortalecimento do assoalho pélvico, que não melhoraram as queixas da paciente, foi realizado estudo urodinâmico. O exame físico e o estudo urodinâmico estão representados na figura.\n\nConsiderando-se a hipótese diagnóstica mais provável, qual a conduta mais apropriada neste momento?",
    "options": [
      "(A) Colporrafia anterior e posterior.",
      "(B) Mirabegrona oral.",
      "(C) Imipramina oral.",
      "(D) Sling sintético de uretra média."
    ],
    "correctAnswer": 3,
    "explanation": "Incontinência urinária com impacto na vida, sem melhora após medidas comportamentais e treino da musculatura do assoalho pélvico.\n\nO POP-Q mostra pontos negativos (sem prolapso significativo). O estudo urodinâmico mostra perda urinária às manobras de esforço (Valsalva e tosse), sem contração involuntária do detrusor: incontinência urinária de esforço. Após falha do tratamento conservador, o padrão-ouro é o sling sintético de uretra média.",
    "commentary": "Colporrafias (A): não há prolapso significativo, e elas não tratam a IUE.\n\nMirabegrona (B): agonista beta-3 para bexiga hiperativa, ausente no estudo.\n\nImipramina (C): sem papel no tratamento atual da IUE.",
    "reference": "Febrasgo — Incontinência urinária de esforço / AUA/SUFU Guideline on Stress Urinary Incontinence (2023)",
    "tags": [
      "ginecologia",
      "uroginecologia",
      "incontinência urinária de esforço",
      "sling"
    ],
    "image": "/images/usprp2025-54.webp"
  },
  {
    "id": "usprp2025-55",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 33 anos, foi submetida a cirurgia para ooforoplastia devido a massa anexial benigna. Evoluiu bem no pós-operatório imediato, mas apresentou dor na região inguinal direita que progrediu continuamente. Há 8 meses vem apresentando dor intensa no local, acompanhada de alodínia, formigamento, dor à exposição ao frio e episódios súbitos e repentinos de dor, ambos muito intensos. Tem antecedente de apendicectomia e colecistectomia. A ultrassonografia transvaginal e transabdominal não identificou alterações anatômicas significativas.\n\nCom base nestas informações, qual a opção terapêutica mais adequada?",
    "options": [
      "(A) Adesiólise laparoscópica.",
      "(B) Neuromodulação lombossacral.",
      "(C) Gabapentina 1800 mg ao dia.",
      "(D) Canabidiol 100 mg ao dia."
    ],
    "correctAnswer": 2,
    "explanation": "Dor inguinal após cirurgia pélvica, contínua há 8 meses, com alodínia, parestesia, dor ao frio e paroxismos, sem alteração anatômica: dor neuropática pós-cirúrgica (provável lesão de nervo ilioinguinal ou genitofemoral).\n\nO tratamento de primeira linha da dor neuropática são os gabapentinoides (gabapentina, titulada até 1.800–3.600 mg/dia), os antidepressivos tricíclicos ou os IRSN (duloxetina). Bloqueios e neuromodulação ficam para refratários.",
    "commentary": "Adesiólise (A): aderências não explicam dor com características neuropáticas, e a cirurgia pode piorá-la.\n\nNeuromodulação (B): reservada a casos refratários ao tratamento farmacológico.\n\nCanabidiol (D): evidência insuficiente; não é primeira linha.",
    "reference": "NeuPSIG/IASP — Pharmacotherapy for neuropathic pain (Finnerup et al., Lancet Neurol 2015) / SBED",
    "tags": [
      "ginecologia",
      "dor pélvica crônica",
      "dor neuropática",
      "gabapentina"
    ]
  },
  {
    "id": "usprp2025-56",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 42 anos, G3P2A1, método anticoncepcional: laqueadura tubária, DUM há 12 dias, procura atendimento ginecológico com queixa de sangramento uterino aumentado há 6 meses, com aumento do fluxo, permanecendo cerca de 6 a 7 dias com sangramento associado a dismenorreia moderada. Ao exame físico: PA: 120x70mmHg, FC: 78bpm, abdome plano, normotenso e indolor a palpação. Espécular: colo róseo, sem lesões ou conteúdo anormal; Toque: colo cartilaginoso, centrado, indolor a mobilização, útero centrado em anteversoflexão (AVF), globoso e aumentado de tamanho. Exames complementares: Hb: 11,2g/dl; Ht: 30%; USTV: útero AVF, centrado, volume de 195cm³. Ovário esquerdo: 4,2cm³, ovário direito: 5,7cm³, representado na figura.\n\nQual a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Adenomiose.",
      "(B) Endometriose.",
      "(C) Hiperplasia endometrial.",
      "(D) Leiomiomatose."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 42 anos multípara com sangramento uterino aumentado e dismenorreia, útero globoso, aumentado e de consistência amolecida, com ultrassonografia (volume de 195 cm³) mostrando miométrio heterogêneo, com pequenos cistos e estrias, sem nódulos bem delimitados: adenomiose.\n\nÉ a presença de endométrio no miométrio, que causa aumento uterino difuso. O diagnóstico é por imagem (USTV ou RM) e o tratamento inclui DIU de levonorgestrel, progestagênios ou histerectomia em quem tem prole completa.",
    "commentary": "Endometriose (B): implantes fora do útero; causa dismenorreia, mas não aumento uterino difuso com miométrio heterogêneo.\n\nHiperplasia endometrial (C): espessamento do endométrio, não do miométrio.\n\nLeiomiomatose (D): nódulos bem delimitados, que não aparecem na imagem.",
    "reference": "Febrasgo — Adenomiose / MUSA consensus — Morphological Uterus Sonographic Assessment",
    "tags": [
      "ginecologia",
      "adenomiose",
      "sangramento uterino anormal",
      "ultrassonografia"
    ],
    "image": "/images/usprp2025-56.webp"
  },
  {
    "id": "usprp2025-57",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 26 anos, nuligesta, refere parada das menstruações. Refere menarca aos 13 anos, seguida de ciclos regulares por 7 anos, após os quais passou a apresentar intervalos menstruais longos de 3 a 4 meses, sendo a última menstruação há dois anos. É triatleta e treina cerca de 6 horas diárias. Associa a alteração menstrual ao aumento na intensidade dos treinos. Nega uso de medicações. No momento sem atividade sexual. Ao exame físico: PA: 90x60 mmHg; IMC: 17,2kg/m²; Índice de Ferriman Gallwey: 2. Mamas sem alterações. Exames complementares: FSH=1,19mIU/ml (VN=3,5 a 10,5mIU/ml); Prolactina=12ng/dl (VN menor 25mg/dl) e TSH 2.1mIU/ml (VN=0,4 a 4,0MIU/ml).\n\nQual o exame mais relevante a ser solicitado para esta paciente?",
    "options": [
      "(A) Estradiol.",
      "(B) Densitometria óssea.",
      "(C) Cortisol.",
      "(D) Perfil lipídico."
    ],
    "correctAnswer": 1,
    "explanation": "Triatleta com treinamento intenso, IMC baixo (17,2), amenorreia secundária há 2 anos, FSH baixo e prolactina e TSH normais: amenorreia hipotalâmica funcional, componente da tríade (ou RED-S) da mulher atleta (baixa disponibilidade energética, disfunção menstrual e baixa densidade mineral óssea).\n\nO hipoestrogenismo prolongado causa perda óssea. A densitometria óssea é o exame mais relevante para avaliar o terceiro componente e o risco de fratura por estresse.",
    "commentary": "Estradiol (A): já se sabe que é baixo (hipogonadismo hipogonadotrófico); não muda a conduta.\n\nCortisol (C): não há sinais de Cushing ou insuficiência adrenal.\n\nPerfil lipídico (D): pode ser alterado, mas não é o exame mais relevante.",
    "reference": "Endocrine Society — Functional Hypothalamic Amenorrhea (2017) / Female Athlete Triad Coalition Consensus (2014)",
    "tags": [
      "ginecologia",
      "amenorreia hipotalâmica",
      "tríade da mulher atleta",
      "densitometria óssea"
    ]
  },
  {
    "id": "usprp2025-58",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 36 anos, nuligesta, deseja engravidar. Refere 2 a 3 relações pênis-vagina por semana, sem uso de métodos contraceptivos há 2 anos. Ciclos menstruais regulares, sem queixas. Nega vícios ou uso de medicações. Exame físico geral e ginecológico sem alterações. Parceiro com 39 anos, sem doenças crônicas. Nega vícios e uso de medicações. Exames complementares: Parceiro: Espermograma 1 (critérios de normalidade da OMS, 2021): volume de 4,7 mL, 1,6 milhões de espermatozoides/mL, 5% de motilidade progressiva, 1% de formas normais e 58% de vitalidade. Espermograma 2, realizado cerca de 3 meses após com parâmetros similares. Paciente: histerossalpingografia e ultrassonografia transvaginal sem anormalidades.\n\nQual a abordagem terapêutica mais efetiva para este casal?",
    "options": [
      "(A) Indução da ovulação com clomifeno para coito programado.",
      "(B) Indução da ovulação e inseminação intrauterina.",
      "(C) Estimulação ovariana e injeção intracitoplasmática de espermatozoide.",
      "(D) Antioxidantes orais associados a ácidos graxos ômega 3 para o parceiro."
    ],
    "correctAnswer": 2,
    "explanation": "Casal com 2 anos de infertilidade, mulher de 36 anos com avaliação normal e parceiro com dois espermogramas com oligoastenoteratozoospermia grave: 1,6 milhão/mL, 5% de motilidade progressiva e 1% de formas normais.\n\nCom fator masculino grave, a única técnica eficaz é a fertilização in vitro com injeção intracitoplasmática de espermatozoide (ICSI). A idade materna também favorece não adiar.",
    "commentary": "Clomifeno com coito programado (A): não supera um fator masculino grave.\n\nInseminação intrauterina (B): exige parâmetros seminais mínimos (motilidade progressiva após preparo acima de 5 milhões), muito acima dos deste parceiro.\n\nAntioxidantes e ômega-3 (D): sem eficácia comprovada para gestação no fator masculino grave.",
    "reference": "OMS — Laboratory Manual for the Examination of Human Semen, 6ª ed. (2021) / ASRM/AUA — Male Infertility Guideline (2020)",
    "tags": [
      "ginecologia",
      "infertilidade",
      "fator masculino",
      "ICSI"
    ]
  },
  {
    "id": "usprp2025-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menina de 5 anos, comparece ao consultório com queixa de sangramento genital há 3 dias. O sangramento foi de pequena quantidade, vermelho vivo, sem presença de coágulos, e foi notado na roupa íntima, na roupa de cama e na higiene da criança após a primeira urina da manhã. A mãe relata que a criança queixava-se de dor e coceira na região genital na última semana, e observou presença de secreção amarelada, sem odor na genitália externa. Nega queixas urinárias ou infecções recentes. Exame físico geral: Mamas M1, Pelos P1, sem anormalidades. Exame da genitália externa: padrão pré-púbere, presença de hiperemia e secreção branca de aspecto homogêneo.\n\nQual a conduta neste caso?",
    "options": [
      "(A) Sorologias para infecções de transmissão sexual.",
      "(B) Orientações de higiene da genitália externa.",
      "(C) Ultrassonografia pélvica transabdominal.",
      "(D) Cultura de secreção vaginal."
    ],
    "correctAnswer": 1,
    "explanation": "Menina pré-púbere com prurido, dor, corrimento e pequeno sangramento genital, com vulva hiperemiada e secreção: vulvovaginite inespecífica, a causa mais comum de sangramento genital na infância. Decorre de higiene inadequada, mucosa atrófica (sem estrogênio) e proximidade com o ânus.\n\nA conduta inicial são orientações de higiene (limpeza de frente para trás, roupas de algodão, banhos de assento, evitar irritantes). Investigação adicional fica para persistência, sangramento recorrente ou suspeita de corpo estranho ou abuso.",
    "commentary": "Sorologias para IST (A): sem suspeita de abuso sexual na história, não é a conduta inicial.\n\nUSG pélvica (C): sem indicação no quadro de vulvovaginite inespecífica.\n\nCultura de secreção vaginal (D): reservada a casos refratários às medidas de higiene ou com secreção purulenta persistente.",
    "reference": "Febrasgo — Ginecologia infanto-puberal: vulvovaginites na infância / SBP",
    "tags": [
      "ginecologia",
      "ginecologia infanto-puberal",
      "vulvovaginite",
      "sangramento genital na infância"
    ]
  },
  {
    "id": "usprp2025-60",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na unidade básica de saúde, você atende uma mulher de 23 anos, G0, com diagnóstico de Diabetes Mellitus tipo 1 desde os 12 anos de idade. Deseja contracepção. IMC: 31 kg/m². PA: 110x65 mmHg. Exame ginecológico sem alterações. Exames de rastreamento recomendados para a idade: normais, com exceção de HDL: 30 mg/dL (VN > 40 mg/dL). Exames de monitoramento da diabetes mellitus: sem alterações.\n\nVeja abaixo as figuras de 1 a 4, que apresentam opções de orientação contraceptiva: Considerando os critérios médicos de elegibilidade da Organização Mundial da Saúde (OMS), 2015, qual das figuras apresenta a orientação contraceptiva mais adequada?",
    "options": [
      "(A) Figura 1.",
      "(B) Figura 2.",
      "(C) Figura 3.",
      "(D) Figura 4."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com DM1 há 11 anos, obesa (IMC 31) e com HDL baixo, sem complicações vasculares descritas.\n\nPelos Critérios de Elegibilidade da OMS, DM sem doença vascular é categoria 2 para todos os métodos hormonais. Mas a associação de múltiplos fatores de risco cardiovascular (diabetes, obesidade, dislipidemia) leva os métodos combinados (pílula, anel, adesivo, injetável mensal) à categoria 3/4 e o injetável trimestral à categoria 3, pelo efeito sobre o HDL e o metabolismo.\n\nPílula de progestagênio, implante, DIU-LNG e DIU de cobre continuam utilizáveis. A Figura 3 traz essa divisão.",
    "commentary": "Figura 1 (A): mantém o injetável trimestral entre os permitidos, mas com múltiplos fatores de risco ele é categoria 3.\n\nFigura 2 (B): libera anel, adesivo e injetável mensal (combinados), que devem ser evitados nesse contexto.\n\nFigura 4 (D): libera todos os métodos, inclusive os combinados, ignorando o risco cardiovascular somado.",
    "reference": "Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais — OMS, 5ª ed. (2015)",
    "tags": [
      "ginecologia",
      "contracepção",
      "critérios de elegibilidade",
      "diabetes mellitus tipo 1"
    ],
    "image": "/images/usprp2025-60.webp"
  },
  {
    "id": "usprp2025-61",
    "module": "Clínica Médica",
    "text": "Homem, 45 anos, apresenta episódios de febre de até 38,3°C há 2 semanas. Sem outras queixas. Exame físico: PA: 138 x 80 mmHg; frequência cardíaca: 112 bpm, regular, com sopro diastólico em borda esternal esquerda 2+/4+, sem outros achados. Eletrocardiograma: normal. Ecocardiograma: valva aórtica bicúspide com filamento móvel em sua face ventricular e regurgitação leve. Hemoculturas: um par negativo no sétimo dia de leitura.\n\nQual das imagens acima seria mais sugestiva para confirmar o diagnóstico deste paciente?",
    "options": [
      "(A) Imagem C.",
      "(B) Imagem B.",
      "(C) Imagem A.",
      "(D) Imagem D."
    ],
    "correctAnswer": 1,
    "explanation": "Homem com valva aórtica bicúspide, febre há 2 semanas, sopro de regurgitação aórtica e vegetação no ecocardiograma. Pelos critérios de Duke modificados, há 1 critério maior (vegetação) e 2 menores (febre e condição predisponente); a hemocultura isolada negativa não ajuda.\n\nPara endocardite definida (1 maior + 3 menores), falta um terceiro critério menor. As lesões de Janeway (imagem B: máculas eritemato-hemorrágicas indolores nas palmas) são fenômeno vascular embólico e completam o diagnóstico.",
    "commentary": "Imagem C (A): eritema marginado, critério de Jones para febre reumática, não de Duke.\n\nImagem A (C): baqueteamento digital, inespecífico e fora dos critérios de Duke.\n\nImagem D (D): exantema papular inespecífico, sem relação com endocardite.",
    "reference": "Critérios de Duke modificados / ESC 2023 Guidelines for the Management of Endocarditis",
    "tags": [
      "cardiologia",
      "endocardite infecciosa",
      "critérios de Duke",
      "lesões de Janeway"
    ],
    "image": "/images/usprp2025-61.webp"
  },
  {
    "id": "usprp2025-62",
    "module": "Clínica Médica",
    "text": "Mulher, 75 anos, apresenta palpitações taquicárdicas e dispneia há 3 horas. Sem outras queixas. Exame físico: consciente, orientada, ritmo cardíaco irregular em 3 tempos, bulhas hipofonéticas, sem sopros. Tempo de enchimento capilar menor que 3 segundos. Murmúrio vesicular presente e simétrico, com estertores finos em terços inferiores dos campos pulmonares. FC = 142 bpm, PA = 110 x 70 mmHg.\n\nEletrocardiograma na figura abaixo: Qual das condutas abaixo é a mais apropriada para o atendimento inicial dessa paciente?",
    "options": [
      "(A) Cardioversão elétrica.",
      "(B) Amiodarona.",
      "(C) Manobra vagal.",
      "(D) Betabloqueador."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com taquicardia irregular de complexos estreitos (FC cerca de 140 bpm, sem ondas P no ECG): fibrilação atrial com resposta ventricular rápida, de início há cerca de 3 horas. Há sinais de instabilidade: insuficiência cardíaca aguda com estertores pulmonares e dispneia.\n\nFA com instabilidade hemodinâmica (congestão pulmonar, hipotensão, dor anginosa ou rebaixamento) indica cardioversão elétrica sincronizada imediata. Além disso, com menos de 48 horas de evolução, o risco tromboembólico da cardioversão é menor.",
    "commentary": "Amiodarona (B): opção para controle de ritmo no paciente estável ou como adjuvante; na instabilidade, a cardioversão elétrica é prioritária.\n\nManobra vagal (C): útil em taquicardias supraventriculares por reentrada, não em FA.\n\nBetabloqueador (D): controla a frequência na FA estável, mas pode agravar a insuficiência cardíaca aguda.",
    "reference": "Diretriz Brasileira de Fibrilação Atrial (SBC) / ACLS — AHA",
    "tags": [
      "cardiologia",
      "fibrilação atrial",
      "cardioversão elétrica",
      "emergência"
    ],
    "image": "/images/usprp2025-62.webp"
  },
  {
    "id": "usprp2025-63",
    "module": "Clínica Médica",
    "text": "Homem, 24 anos, sem comorbidades prévias, apresenta bolhas flácidas e lesões exulceradas com retalhos de bolhas rotas nas áreas seborreicas do tronco anterior e posterior, além de lesões crostosas no couro cabeludo e na face há 18 meses. Relata ter feito uso de anti-histamínicos, hidratantes e corticoides tópicos sem melhora das lesões. Ao exame, além das lesões descritas, não apresentava lesões nas mucosas e o Nikolsky estava positivo ao lado de uma lesão ativa.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Porfiria cutânea tarda.",
      "(B) Penfigoide bolhoso.",
      "(C) Pênfigo vulgar.",
      "(D) Pênfigo foliáceo."
    ],
    "correctAnswer": 3,
    "explanation": "Jovem com bolhas flácidas superficiais e erosões crostosas em áreas seborreicas (couro cabeludo, face, tronco), sem acometimento mucoso, Nikolsky positivo e evolução crônica: pênfigo foliáceo.\n\nOs autoanticorpos são contra a desmogleína 1, expressa nas camadas superficiais da epiderme (clivagem subcorneana). Por isso as bolhas se rompem facilmente e não há lesão de mucosa. No Brasil há a forma endêmica, o fogo selvagem.",
    "commentary": "Porfiria cutânea tarda (A): bolhas em áreas fotoexpostas (dorso das mãos), com fragilidade cutânea e hipertricose; Nikolsky negativo.\n\nPenfigoide bolhoso (B): bolhas tensas em idosos, Nikolsky negativo.\n\nPênfigo vulgar (C): acomete as mucosas (oral quase sempre), por anticorpos antidesmogleína 3.",
    "reference": "Consenso da SBD sobre pênfigos / Azulay — Dermatologia",
    "tags": [
      "dermatologia",
      "pênfigo foliáceo",
      "doenças bolhosas",
      "sinal de Nikolsky"
    ]
  },
  {
    "id": "usprp2025-64",
    "module": "Clínica Médica",
    "text": "Menina 6 anos, histórico de dermatite de repetição, atualmente mais intenso nas dobras, além de rinite alérgica. Há 3 semanas notou exacerbação das lesões de dermatite, piora do prurido e aparecimento de lesões novas no abdome, onde refere também muito prurido. Ao exame apresenta placas de dermatite subaguda nas dobras, sinais de escoriações e no abdome as lesões da figura.\n\nConsiderando o diagnóstico mais provável, qual microorganismo seria identificado nas lesões ativas do abdome?",
    "options": [
      "(A) Malassezia furfur.",
      "(B) Staphylococcus aureus.",
      "(C) Trichophyton rubrum.",
      "(D) Herpes simplex."
    ],
    "correctAnswer": 1,
    "explanation": "Criança com dermatite atópica (lesões em dobras, rinite alérgica) em exacerbação, com novas lesões no abdome. Pelo gabarito, a imagem mostra crostas melicéricas, erosões e pústulas: impetiginização secundária.\n\nO Staphylococcus aureus coloniza a pele de mais de 90% dos atópicos e é o principal agente das infecções secundárias e das exacerbações da dermatite atópica.",
    "commentary": "Malassezia (A): relacionada à dermatite atópica de cabeça e pescoço em adultos, não a lesões crostosas agudas no abdome.\n\nTrichophyton rubrum (C): dermatofitose, com placas anulares descamativas de borda ativa.\n\nHerpes simplex (D): o eczema herpético (erupção variceliforme de Kaposi) seria a principal alternativa, com vesículas e erosões 'em saca-bocado' monomórficas; o gabarito interpreta a imagem como impetiginização.",
    "reference": "Consenso Brasileiro de Dermatite Atópica (ASBAI/SBP/SBD)",
    "tags": [
      "dermatologia",
      "dermatite atópica",
      "impetiginização",
      "S. aureus"
    ],
    "image": "/images/usprp2025-64.webp",
    "alert": "Gabarito discutível: lesões erosadas 'em saca-bocado' em criança atópica com piora rápida também sugerem eczema herpético (herpes simples, alternativa D), que é emergência. O gabarito oficial é S. aureus (impetiginização)."
  },
  {
    "id": "usprp2025-65",
    "module": "Clínica Médica",
    "text": "Homem, 45 anos, trabalhador rural, é levado ao pronto socorro após exposição acidental a um produto químico. Apresenta-se com sudorese excessiva, lacrimejamento, sialorréia e dificuldade para respirar. Apresentou 3 episódios de vômitos em 3 horas. Exame físico: FC= 60 bpm, PA= 90/60 mmHg, FR= 25 irpm, SpO₂= 94% em ar ambiente, consciente, mas confuso; pupilas mióticas e fotorreagentes; ausculta pulmonar: murmúrio vesicular presente bilateralmente, com sibilos e roncos úmidos difusos, expectoração de escarro incolor. Demais sistemas sem alterações.\n\nQual é a conduta inicial mais adequada para o manejo desse paciente?",
    "options": [
      "(A) Atropina via endovenosa.",
      "(B) Lavagem gástrica com solução isotônica.",
      "(C) Carvão ativado via enteral.",
      "(D) Adrenalina via intramuscular."
    ],
    "correctAnswer": 0,
    "explanation": "Trabalhador rural exposto a produto químico com síndrome colinérgica: sudorese, lacrimejamento, sialorreia, broncorreia e broncoespasmo, vômitos, miose e bradicardia (efeitos muscarínicos). É intoxicação por inseticida organofosforado ou carbamato, que inibe a acetilcolinesterase.\n\nA prioridade é via aérea e oxigênio, além de descontaminação externa (retirar roupas, lavar a pele). O antídoto imediato é a atropina IV em doses repetidas (dobrando a dose a cada 5 minutos) até secar as secreções brônquicas. A pralidoxima pode ser associada nos organofosforados.",
    "commentary": "Lavagem gástrica (B): a exposição provável é cutânea ou inalatória; a lavagem tem papel limitado e não é a prioridade.\n\nCarvão ativado (C): não trata a crise colinérgica e há risco de aspiração.\n\nAdrenalina IM (D): tratamento da anafilaxia, quadro diferente.",
    "reference": "Ministério da Saúde — Diretrizes para atenção às intoxicações por agrotóxicos / Goldfrank's Toxicologic Emergencies",
    "tags": [
      "toxicologia",
      "intoxicação por organofosforados",
      "síndrome colinérgica",
      "atropina"
    ]
  },
  {
    "id": "usprp2025-66",
    "module": "Clínica Médica",
    "text": "Mulher, 28 anos, com diabetes mellitus tipo 1, apresenta poliúria, polidipsia, náuseas e vômitos há 48 horas. Interrompeu a administração de insulina regular há dois dias devido a um episódio de gastroenterite. Exame físico: desidratada, respiração de Kussmaul e hálito cetônico. Sinais vitais: PA= 90x50 mmHg, FC= 120 bpm, FR= 28 irpm, SpO₂= 96% em ar ambiente. Laboratório: glicose sérica= 480 mg/dL (VR: 70-99), pH arterial= 7,15 (VR: 7,35-7,45), bicarbonato= 10 mEq/L (VR: 22-28), cetonas séricas positivas, sódio= 142 mEq/L (VR: 135-145), cloro= 100 mEq/L (VR: 98-106), potássio= 4,0 mEq/L (VR: 3,5-5,0).\n\nQual é a conduta inicial mais adequada para o manejo deste caso?",
    "options": [
      "(A) Administração de bicarbonato de sódio intravenoso.",
      "(B) Administração de insulina subcutânea.",
      "(C) Administração de solução fisiológica 0,9% intravenosa.",
      "(D) Administração de insulina intravenosa contínua."
    ],
    "correctAnswer": 2,
    "explanation": "Cetoacidose diabética grave (glicose de 480, pH 7,15, bicarbonato de 10, AG de 32, cetonemia) com desidratação e hipotensão.\n\nA primeira medida é a reposição volêmica com solução fisiológica 0,9% (15–20 mL/kg na primeira hora). Antes da insulina, verifica-se o potássio: com K ≥ 3,3 mEq/L (aqui 4,0) inicia-se insulina regular IV contínua, repondo K para mantê-lo entre 4 e 5.",
    "commentary": "Bicarbonato (A): indicado apenas com pH < 6,9.\n\nInsulina subcutânea (B): na CAD grave com hipotensão, a absorção SC é errática; usa-se insulina IV.\n\nInsulina IV como primeira medida (D): é necessária, mas vem depois do início da hidratação.",
    "reference": "ADA — Hyperglycemic Crises in Adults with Diabetes (Consensus Report 2024) / Diretrizes da SBD",
    "tags": [
      "endocrinologia",
      "cetoacidose diabética",
      "hidratação venosa",
      "emergência"
    ]
  },
  {
    "id": "usprp2025-67",
    "module": "Clínica Médica",
    "text": "Mulher, 64 anos, portadora de diabetes mellitus tipo 2 desde os 56 anos, em uso de empagliflozina 25 mg/dia, linagliptina 5 mg/dia e metformina XR 1g/dia. Será submetida à colecistectomia videolaparoscópica eletiva. Última hemoglobina glicada (HbA1c): 7,3% (VR: 4.3-6.1).\n\nQuais orientações devem ser feitas em relação ao uso dos antidiabéticos?",
    "options": [
      "(A) Manter a metformina e a empagliflozina até o dia anterior à cirurgia; suspender a linagliptina 1 dia antes da cirurgia.",
      "(B) Manter a metformina até o dia anterior à cirurgia; suspender a empagliflozina 4 dias antes do procedimento; manter a linagliptina.",
      "(C) Suspender a metformina 2 dias antes da cirurgia e a empagliflozina 1 dia antes do procedimento; manter a linagliptina.",
      "(D) Suspender a metformina 3 dias antes da cirurgia; manter a empagliflozina até o dia anterior à cirurgia; suspender a linagliptina 1 dia antes da cirurgia."
    ],
    "correctAnswer": 1,
    "explanation": "Manejo perioperatório dos antidiabéticos orais em cirurgia eletiva:\n\n• iSGLT2 (empagliflozina): suspender 3 dias antes (ertugliflozina 4 dias), pelo risco de cetoacidose euglicêmica\n• Metformina: pode ser mantida até o dia anterior e suspensa no dia da cirurgia\n• iDPP-4 (linagliptina): pode ser mantido (baixo risco de hipoglicemia)\n\nA alternativa B está de acordo (suspender a empagliflozina com antecedência de 3–4 dias).",
    "commentary": "Manter a empagliflozina até a véspera (A): aumenta o risco de cetoacidose euglicêmica no pós-operatório.\n\nEmpagliflozina 1 dia antes (C): antecedência insuficiente.\n\nMetformina 3 dias antes e iSGLT2 até a véspera (D): inverte as recomendações.",
    "reference": "Diretrizes da SBD 2024 — Manejo perioperatório / FDA (2022) e ADA Standards of Care",
    "tags": [
      "endocrinologia",
      "diabetes mellitus tipo 2",
      "perioperatório",
      "iSGLT2"
    ]
  },
  {
    "id": "usprp2025-68",
    "module": "Clínica Médica",
    "text": "Homem, 53 anos, assintomático, comparece à Unidade Básica de Saúde buscando orientações sobre os resultados de exames realizados para doação de sangue. Antecedente de cirurgia para correção de fratura de fêmur aos 18 anos de idade devido acidente automobilístico. Exame físico: obesidade grau II. Exames laboratoriais: HBsAg = não reagente; anti HBc IgG = não reagente; anti HBsAg = reagente; anti HCV = reagente; AST = 18 U/L (VR: 15-37); ALT = 57 U/L (VR: 10-49)\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Solicitar elastografia hepática.",
      "(B) Repetir os exames em 6 meses.",
      "(C) Indicar biópsia hepática.",
      "(D) Solicitar RNA HCV."
    ],
    "correctAnswer": 3,
    "explanation": "Doador com anti-HCV reagente e ALT discretamente elevada, com fator de risco (cirurgia e provável transfusão em 1990, antes da triagem do HCV). O anti-HCV indica contato com o vírus, mas não diferencia infecção ativa de curada (cerca de 25% eliminam espontaneamente).\n\nO próximo passo é a carga viral (HCV-RNA). Se detectável, há infecção crônica e indicação de tratamento com antivirais de ação direta. O perfil de hepatite B indica vacinação (anti-HBs isolado).",
    "commentary": "Elastografia (A): estadia a fibrose depois de confirmada a infecção ativa.\n\nRepetir em 6 meses (B): atrasa o diagnóstico sem motivo.\n\nBiópsia hepática (C): substituída por métodos não invasivos e não confirma viremia.",
    "reference": "PCDT para Hepatite C e Coinfecções — Ministério da Saúde, 2019 (e atualizações)",
    "tags": [
      "hepatologia",
      "hepatite C",
      "HCV-RNA",
      "doação de sangue"
    ]
  },
  {
    "id": "usprp2025-69",
    "module": "Clínica Médica",
    "text": "Homem, 53 anos, com histórico de pancreatite crônica associada ao consumo abusivo de bebida alcoólica, refere aumento da frequência de evacuações nos últimos 9 meses, fezes de aspecto gorduroso e com mau cheiro. Exame físico: emagrecido, sinais vitais normais, sem outras alterações.\n\nQual deficiência de vitamina mais provavelmente pode ser encontrada nesse paciente?",
    "options": [
      "(A) Vitamina C.",
      "(B) Vitamina B12.",
      "(C) Vitamina A.",
      "(D) Ácido fólico."
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatite crônica alcoólica com esteatorreia: insuficiência pancreática exócrina, com má absorção de gorduras e, consequentemente, das vitaminas lipossolúveis (A, D, E e K).\n\nEntre as alternativas, a vitamina A é a única lipossolúvel. A deficiência de B12 pode ocorrer (falta de proteases para liberá-la da proteína R), mas costuma ser subclínica.",
    "commentary": "Vitamina C (A): hidrossolúvel, não depende da digestão de gorduras.\n\nVitamina B12 (B): pode ser reduzida na insuficiência pancreática, mas é menos frequente e raramente clínica.\n\nÁcido fólico (D): absorvido no jejuno, sem dependência das enzimas pancreáticas.",
    "reference": "Consenso Brasileiro de Pancreatite Crônica / ACG Clinical Guideline: Chronic Pancreatitis (2020)",
    "tags": [
      "gastroenterologia",
      "pancreatite crônica",
      "esteatorreia",
      "vitaminas lipossolúveis"
    ]
  },
  {
    "id": "usprp2025-70",
    "module": "Clínica Médica",
    "text": "Mulher, 84 anos, portadora de síndrome demencial fase moderada, apresentou queda no domicílio com fratura de fêmur e foi internada para correção cirúrgica. Após 12 horas do procedimento, evoluiu com confusão mental e agitação psicomotora de difícil controle, medidas não farmacológicas.\n\nQual é a melhor conduta medicamentosa?",
    "options": [
      "(A) Clonazepam.",
      "(B) Quetiapina.",
      "(C) Donepezila.",
      "(D) Sertralina."
    ],
    "correctAnswer": 1,
    "explanation": "Idosa com demência e fratura de fêmur que desenvolve delirium hiperativo pós-operatório, com agitação importante refratária às medidas não farmacológicas.\n\nQuando há risco para a paciente ou para terceiros, usam-se antipsicóticos em dose baixa e pelo menor tempo possível (haloperidol, quetiapina, risperidona). A quetiapina tem menos efeitos extrapiramidais.",
    "commentary": "Clonazepam (A): benzodiazepínicos pioram o delirium em idosos (exceto em abstinência alcoólica).\n\nDonepezila (C): não trata delirium agudo.\n\nSertralina (D): antidepressivo, sem papel no delirium.",
    "reference": "NICE Guideline CG103 — Delirium / American Geriatrics Society — Postoperative Delirium (2015)",
    "tags": [
      "geriatria",
      "delirium",
      "antipsicóticos",
      "pós-operatório"
    ]
  },
  {
    "id": "usprp2025-71",
    "module": "Clínica Médica",
    "text": "Mulher, 70 anos, há 8 meses com adinamia e dispneia progressiva. Exame físico: BEG, hipocorada 2+/4+, sem outras alterações. Hemograma completo: hemoglobina: 9,6 g/dl; VCM: 73 fl; glóbulos brancos: 5.300/μL; plaquetas: 425.000/μL; reticulócitos=0,3%. Ácido fólico: 3,6 ng/mL (VR: 3.0 a 17.0); Vitamina B12: 654 pg/mL (VR: 174,0 a 878,0); Ferritina: 1,5 ng/mL (VR: 10 a 291), ferro sérico: 25 ug/dL (VR: 50 a 170), capacidade latente de fixação de ferro: 460 ug/dL (VR: 250 a 425).\n\nQual exame deve ser solicitado para complementar a avaliação da paciente?",
    "options": [
      "(A) Sangue oculto nas fezes.",
      "(B) Anticorpo anti célula parietal.",
      "(C) Eletroforese de hemoglobina.",
      "(D) Endoscopia digestiva alta."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com anemia microcítica, ferritina muito baixa, ferro baixo e capacidade de ligação aumentada: anemia ferropriva. Em idosos, a causa principal é perda sanguínea oculta pelo trato gastrointestinal (neoplasia de cólon ou estômago, úlceras, angiodisplasias).\n\nA investigação é endoscópica bidirecional: endoscopia digestiva alta e colonoscopia. A pesquisa de sangue oculto não é suficiente, pois um resultado negativo não exclui a fonte.",
    "commentary": "Sangue oculto nas fezes (A): exame de rastreamento; na anemia ferropriva confirmada em idoso, a investigação endoscópica é obrigatória.\n\nAnticorpo anticélulas parietais (B): investiga anemia perniciosa (macrocítica); a B12 está normal.\n\nEletroforese de hemoglobina (C): investiga talassemia, que tem ferritina normal ou alta.",
    "reference": "BSG Guidelines for the Management of Iron Deficiency Anaemia in Adults (2021) / AGA (2020)",
    "tags": [
      "hematologia",
      "anemia ferropriva",
      "endoscopia digestiva",
      "idoso"
    ]
  },
  {
    "id": "usprp2025-72",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos, auxiliar administrativo, morador de Ribeirão Preto. Há 6 dias com fadiga, mal-estar e odinofagia. Nega febre. Um dia após o início do quadro, notou lesões de pele (figuras abaixo). Refere início dos sintomas uma semana após relações sexuais com diferentes parceiros, com uso de preservativos nas relações sexuais genitais, porém não nas relações sexuais orais. Nega contato com áreas de mata ou com animais silvestres ou domésticos. Exame físico: lesões de pele pouco numerosas e com distribuição aleatória conforme fotos abaixo. Orofaringe: hiperemiada com pequena úlcera em palato mole. Linfonodos palpáveis em região cervical e axilar. Hemograma, dosagem de transaminases e avaliação da função renal sem alterações. Teste rápido para HIV, sífilis, hepatite C e B negativos.\n\nQual agente infeccioso é a provável causa do quadro?",
    "options": [
      "(A) Treponema pallidum.",
      "(B) Monkeypox vírus.",
      "(C) Neisseria Gonorrhoeae.",
      "(D) Vírus Varicela Zoster."
    ],
    "correctAnswer": 1,
    "explanation": "Homem jovem com múltiplos parceiros, sexo oral desprotegido, pródromo (fadiga, odinofagia), linfonodomegalia e lesões cutâneas pouco numerosas, em estágios semelhantes, umbilicadas (como na foto do tórax), além de úlcera no palato: mpox (monkeypox).\n\nA linfadenopatia é característica e ajuda a diferenciar de varicela. O diagnóstico é por PCR da lesão. Isolamento e notificação são obrigatórios.",
    "commentary": "Treponema pallidum (A): a sífilis secundária tem lesões maculopapulares, frequentemente palmoplantares e não umbilicadas, e o teste foi negativo.\n\nGonococo (C): pode causar faringite e lesões pustulosas acrais na forma disseminada, com artrite e tenossinovite; não esse padrão.\n\nVaricela-zóster (D): lesões em vários estágios (polimorfismo), muito pruriginosas e sem linfadenopatia proeminente.",
    "reference": "Ministério da Saúde — Nota técnica e Plano de Contingência para Mpox / OMS",
    "tags": [
      "infectologia",
      "mpox",
      "infecções sexualmente transmissíveis"
    ],
    "image": "/images/usprp2025-72.webp"
  },
  {
    "id": "usprp2025-73",
    "module": "Clínica Médica",
    "text": "Homem, 25 anos, há 6 dias com febre de início súbito (até 39° C), cefaleia, mialgia intensa e mal-estar. Após 3 dias notou lesões de pele, não pruriginosas, nas mãos e pés, com posterior desenvolvimento de petéquias, sem prurido; edema de mãos e pés, sem outras alterações. Nega contato com animais silvestres ou domésticos. Frequentemente trabalha em áreas rurais aos finais de semana e noites. Nega uso de medicamentos. Exame físico: consciente, orientado, temperatura axilar 38,5°C, PA: 100 x 60 mmHg, frequência cardíaca: 120 bpm, frequência respiratória: 24 RPM, saturação de oxigênio: 93% em ar ambiente; exantema maculopapular difuso, com presença de petéquias, sem prurido; edema de mãos e pés, sem outras alterações. Exames laboratoriais: leucócitos: 3.000 células/ul, 85% neutrófilos, plaquetas: 150.000/ul. TGO: 240 U/L (VN: 10 a 49), TGP: 160 U/L (VN: 10 a 49). Teste rápido para HIV: negativo; Teste rápido para sífilis: negativo; Teste treponêmico: negativo; IgM para toxoplasmose: negativo; IgG para toxoplasmose: positivo; IM: negativo; Radiografia de tórax: sem alterações.\n\nConsiderando a principal hipótese diagnóstica, qual o tratamento indicado?",
    "options": [
      "(A) Sulfametoxazol trimetoprim.",
      "(B) Penicilina benzatina.",
      "(C) Itraconazol.",
      "(D) Doxiciclina."
    ],
    "correctAnswer": 3,
    "explanation": "Febre súbita, cefaleia, mialgia intensa, exantema maculopapular que começa nas mãos e pés e evolui com petéquias, edema de extremidades, leucopenia, transaminases elevadas e exposição rural: febre maculosa (Rickettsia rickettsii, transmitida pelo carrapato-estrela), endêmica no interior de São Paulo.\n\nA letalidade é alta sem tratamento precoce. Diante da suspeita, inicia-se doxiciclina imediatamente, em qualquer idade, sem esperar a confirmação.",
    "commentary": "Sulfametoxazol-trimetoprim (A): ineficaz e pode agravar a riquetsiose.\n\nPenicilina benzatina (B): trata sífilis, que foi afastada pelos testes.\n\nItraconazol (C): antifúngico, sem indicação.",
    "reference": "Guia de Vigilância em Saúde — MS, 2024 (Febre maculosa) / CVE-SP",
    "tags": [
      "infectologia",
      "febre maculosa",
      "riquetsiose",
      "doxiciclina"
    ]
  },
  {
    "id": "usprp2025-74",
    "module": "Clínica Médica",
    "text": "Homem, 38 anos, assintomático, procura atendimento por necessidade de relatório médico para a prática de atividade física. Nega uso de medicamentos. Nega tabagismo e etilismo. Exame físico: PA 140x90 mmHg. Eletrocardiograma normal. Solicitado monitorização ambulatorial da pressão arterial (MAPA), com resultado abaixo.\n\nQual é o diagnóstico e a conduta apropriada?",
    "options": [
      "(A) Hipertensão arterial sistêmica; orientar dieta hipossódica e reavaliação dos níveis pressóricos em 3 meses.",
      "(B) Hipertensão mascarada; iniciar bloqueador de canal de cálcio e incentivar quanto à realização de atividade física.",
      "(C) Hipertensão do avental branco; apto a praticar atividade física.",
      "(D) Hipertensão do avental branco, apto a praticar atividade física e iniciar uso de medicamento anti-hipertensivo."
    ],
    "correctAnswer": 2,
    "explanation": "PA de consultório de 140 x 90 mmHg (limiar de hipertensão), ECG normal e MAPA com médias normais (vigília abaixo de 135/85 e sono abaixo de 120/70, como mostra o gráfico, com descenso noturno). É hipertensão do avental branco: PA elevada só no consultório.\n\nNão há indicação de anti-hipertensivo. O paciente está apto para atividade física, que também ajuda na prevenção, e deve ser reavaliado periodicamente pelo risco de evoluir para hipertensão.",
    "commentary": "Hipertensão sistêmica (A): a MAPA normal afasta hipertensão sustentada.\n\nHipertensão mascarada (B): é o oposto (consultório normal e MAPA alterada).\n\nAvental branco com fármaco (D): a hipertensão do avental branco não exige medicação na ausência de lesão de órgão-alvo ou risco alto.",
    "reference": "Diretriz Brasileira de Hipertensão Arterial — SBC/SBH/SBN / Diretrizes de MAPA e MRPA (SBC)",
    "tags": [
      "cardiologia",
      "hipertensão do avental branco",
      "MAPA"
    ],
    "image": "/images/usprp2025-74.webp"
  },
  {
    "id": "usprp2025-75",
    "module": "Clínica Médica",
    "text": "Homem, 70 anos, apresenta-se com perda de peso significativa, fadiga e dispneia aos pequenos esforços. Relata dificuldade para se alimentar devido à falta de apetite e sensação de saciedade precoce. Antecedentes: doença pulmonar obstrutiva crônica grave e insuficiência cardíaca congestiva. Exame físico: perda de massa muscular e edema de membros inferiores. Exames laboratoriais: albumina sérica: 2,9 g/dL (VR: 3.4-5.0); hemoglobina: 12,0 g/dL; creatinina: 1,1 mg/dL; proteína C reativa (PCR): 0,8 mg/dL (VR: < 1,0); glicemia de jejum: 105 mg/dL.\n\nQual intervenção nutricional é a mais apropriada para este paciente?",
    "options": [
      "(A) Aumentar a ingestão de proteínas e calorias por refeições fracionadas.",
      "(B) Reduzir a ingestão de carboidratos para melhorar a glicemia de jejum.",
      "(C) Implementar dieta hipossódica rigorosa para controlar o edema.",
      "(D) Introduzir nutrição enteral suplementar."
    ],
    "correctAnswer": 0,
    "explanation": "Idoso com DPOC grave e insuficiência cardíaca, com perda de peso, anorexia, saciedade precoce, sarcopenia e hipoalbuminemia, sem inflamação ativa (PCR normal): desnutrição associada a doença crônica (caquexia cardiopulmonar), com via oral funcionante.\n\nA primeira intervenção é otimizar a ingestão oral: refeições pequenas e frequentes, hiperproteicas e hipercalóricas, com suplementação oral se necessário. A nutrição enteral fica para quando a via oral for insuficiente.",
    "commentary": "Reduzir carboidratos pela glicemia (B): a glicemia de 105 não justifica restrição em paciente desnutrido.\n\nDieta hipossódica rigorosa (C): reduz a palatabilidade e a ingestão, piorando a desnutrição; recomenda-se restrição moderada.\n\nNutrição enteral (D): indicada se a via oral não atingir as necessidades, não como primeira medida.",
    "reference": "ESPEN Guideline on Clinical Nutrition and Hydration in Geriatrics (2022) / BRASPEN",
    "tags": [
      "nutrologia",
      "desnutrição",
      "DPOC",
      "insuficiência cardíaca",
      "geriatria"
    ]
  },
  {
    "id": "usprp2025-76",
    "module": "Clínica Médica",
    "text": "Homem, 68 anos, refere tosse persistente há 3 meses, com piora progressiva. Refere perda de peso não intencional de 5kg neste período. Há 2 meses apresenta dor contínua, de intensidade 6/10, localizada no ombro direito, irradiando para o braço ipsilateral. Na última semana, iniciou com sudorese vespertina, principalmente na face à esquerda. É tabagista (carga tabágica de 60 anos/maço). Exame físico: redução da expansibilidade pulmonar e de murmúrio vesicular no terço superior do pulmão direito.\n\nQual é a hipótese diagnóstica mais provável para este quadro clínico?",
    "options": [
      "(A) Tuberculose.",
      "(B) Empiema.",
      "(C) Linfoma.",
      "(D) Tumor de Pancoast."
    ],
    "correctAnswer": 3,
    "explanation": "Tabagista pesado com tosse, emagrecimento, dor no ombro irradiada para o braço (invasão do plexo braquial), sinais no ápice pulmonar e alteração da sudorese facial (acometimento da cadeia simpática cervical, síndrome de Horner com anidrose). É tumor do sulco superior (tumor de Pancoast).\n\nCostuma ser carcinoma não pequenas células. O tratamento padrão é quimiorradioterapia de indução seguida de ressecção em bloco.",
    "commentary": "Tuberculose (A): pode acometer o ápice e causar emagrecimento, mas não plexopatia braquial nem síndrome de Horner.\n\nEmpiema (B): quadro infeccioso agudo com derrame, sem esses achados neurológicos.\n\nLinfoma (C): mediastinal com sintomas B, sem invasão apical do plexo braquial.",
    "reference": "NCCN Guidelines — Non-Small Cell Lung Cancer (Superior Sulcus Tumors)",
    "tags": [
      "pneumologia",
      "câncer de pulmão",
      "tumor de Pancoast",
      "síndrome de Horner"
    ]
  },
  {
    "id": "usprp2025-77",
    "module": "Clínica Médica",
    "text": "Mulher, 45 anos, conta que desde a infância tem episódios de dispneia, tosse seca e chiado no peito quando exposta a poeira ou fumaça. Nunca fumou e nega comorbidades. Exame físico com sibilos esparsos, sem outras alterações.\n\nQual acometimento de vias aéreas é o mais provavelmente envolvido nesse caso?",
    "options": [
      "(A) Remodelamento.",
      "(B) Hiper responsividade.",
      "(C) Neutrofilia em mucosa.",
      "(D) Fibrose subepitelial."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher não tabagista com sibilância, dispneia e tosse desde a infância, desencadeadas por poeira e fumaça: asma.\n\nA característica funcional central da asma é a hiper-responsividade brônquica, uma broncoconstrição exagerada a estímulos (alérgenos, irritantes, exercício, ar frio). É ela que explica os sintomas episódicos e reversíveis, junto com a inflamação crônica, tipicamente eosinofílica.",
    "commentary": "Remodelamento (A): ocorre na asma de longa duração, mas não explica os episódios desencadeados por estímulos.\n\nNeutrofilia de mucosa (C): característica da DPOC e de fenótipos específicos de asma, não da asma típica.\n\nFibrose subepitelial (D): faz parte do remodelamento; não é o mecanismo dos sintomas desencadeados.",
    "reference": "GINA 2024 / Diretrizes da SBPT para o manejo da asma",
    "tags": [
      "pneumologia",
      "asma",
      "hiper-responsividade brônquica",
      "fisiopatologia"
    ]
  },
  {
    "id": "usprp2025-78",
    "module": "Clínica Médica",
    "text": "Homem, 76 anos, em acompanhamento por DPOC há 8 anos; nega comorbidades. Refere piora progressiva da dispneia (de pequenos esforços para dispneia em repouso) há 2 semanas, sem piora da tosse ou do aspecto da expectoração. Nega dor torácica, hemoptise, piora súbita dos sintomas. Exame físico: BEG, corado, cianótico (++/4+). Murmúrio vesicular fisiológico sem ruídos adventícios. Frequência respiratória: 28 i.pm. Ritmo cardíaco regular, com hiperfonese de B2, sem sopros. FC: 98 bpm. PA: 110 x 80 mmHg. Edema de membros inferiores (3+/4+) bilateral, depressível e simétrico. Presença de estase jugular a 45°.\n\nQual é a medida indicada para o diagnóstico mais provável?",
    "options": [
      "(A) Anticoagulação.",
      "(B) Agente inotrópico.",
      "(C) Vasodilatador pulmonar.",
      "(D) Oxigenioterapia."
    ],
    "correctAnswer": 3,
    "explanation": "DPOC de longa data com dispneia progressiva, cianose, B2 hiperfonética (hipertensão pulmonar), turgência jugular e edema de membros inferiores, sem sinais de exacerbação infecciosa: cor pulmonale (insuficiência cardíaca direita secundária à doença pulmonar e à hipoxemia crônica).\n\nA medida que muda o prognóstico é a oxigenoterapia, que reduz a vasoconstrição hipóxica e a pressão pulmonar. O O₂ domiciliar prolongado (mais de 15 h/dia) está indicado com PaO₂ ≤ 55 mmHg ou ≤ 59 com cor pulmonale ou policitemia. Diurético ajuda na congestão.",
    "commentary": "Anticoagulação (A): não há indicação (sem TEP ou FA).\n\nInotrópico (B): não há baixo débito com hipotensão.\n\nVasodilatador pulmonar (C): não é indicado na hipertensão pulmonar do grupo 3 (DPOC); pode piorar a troca gasosa.",
    "reference": "GOLD 2026 / Diretrizes da SBPT para DPOC / ESC/ERS Pulmonary Hypertension Guidelines (2022)",
    "tags": [
      "pneumologia",
      "DPOC",
      "cor pulmonale",
      "oxigenoterapia"
    ]
  },
  {
    "id": "usprp2025-79",
    "module": "Clínica Médica",
    "text": "Mulher, 68 anos, refere dor em joelhos há 1 ano, com piora progressiva, localizada principalmente 7/10). A dor é acentuada durante ortostase e atividades físicas, melhorando parcialmente após uso de dipirona, com alívio parcial. É hipertensa, em tratamento com enalapril, mas refere que não controla bem a pressão arterial. Exame físico: BEG; IMC: 31,5 kg/m²; presença de calor e crepitação à movimentação em joelhos (figura abaixo).\n\nQual é a alteração mais provável de ser encontrada em radiografia dos joelhos?",
    "options": [
      "(A) Esclerose óssea subcondral.",
      "(B) Calcificações ligamentares.",
      "(C) Erosões em saca bocado.",
      "(D) Osteopenia justa articular."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 68 anos, obesa, com dor mecânica nos joelhos (piora com carga e atividade) há 1 ano, crepitação e alteração do alinhamento na foto (geno varo): osteoartrite de joelhos.\n\nOs achados radiográficos típicos são redução assimétrica do espaço articular, osteófitos, esclerose óssea subcondral e cistos subcondrais. Entre as alternativas, a esclerose subcondral é a característica.",
    "commentary": "Calcificações ligamentares (B): típicas da DISH (hiperostose esquelética difusa) na coluna.\n\nErosões em saca-bocado (C): gota tofácea crônica.\n\nOsteopenia justa-articular (D): artrite reumatoide e outras artrites inflamatórias.",
    "reference": "ACR/Arthritis Foundation Guideline for Osteoarthritis (2019) / SBR",
    "tags": [
      "reumatologia",
      "osteoartrite",
      "joelho",
      "radiografia"
    ],
    "image": "/images/usprp2025-79.webp"
  },
  {
    "id": "usprp2025-80",
    "module": "Clínica Médica",
    "text": "Homem, 55 anos, refere dor em interfalangianas distais de ambas as mãos há três anos, pior após períodos de repouso. Obtém melhora com o uso de anti-inflamatórios não esteroidais. Nega outros tratamentos. Exame físico: BEG, corado; edema e dor à palpação de 2º a 5º interfalangianas distais de ambas as mãos; pele (ver figura).\n\nLevando em conta as alterações cutâneas e articulares, qual tratamento está indicado?",
    "options": [
      "(A) Hidroxicloroquina.",
      "(B) Metotrexato.",
      "(C) Azatioprina.",
      "(D) Sulfassalazina."
    ],
    "correctAnswer": 1,
    "explanation": "Artrite de interfalangianas distais com placas eritematodescamativas espessas e prateadas no antebraço (psoríase na foto): artrite psoriásica, forma de predomínio interfalangiano distal.\n\nCom artrite periférica persistente apesar de AINE e pele acometida, o DMARD sintético de escolha é o metotrexato, que trata tanto a pele quanto as articulações. Se falhar, usam-se imunobiológicos (anti-TNF, anti-IL-17 ou anti-IL-23).",
    "commentary": "Hidroxicloroquina (A): pouco eficaz na artrite psoriásica e pode exacerbar a psoríase.\n\nAzatioprina (C): não é droga de escolha.\n\nSulfassalazina (D): opção para artrite periférica, mas sem ação sobre a pele; o metotrexato é preferível com psoríase cutânea relevante.",
    "reference": "GRAPPA (2021) e EULAR (2023) Recommendations for Psoriatic Arthritis / SBR",
    "tags": [
      "reumatologia",
      "artrite psoriásica",
      "psoríase",
      "metotrexato"
    ],
    "image": "/images/usprp2025-80.webp"
  },
  {
    "id": "usprp2025-81",
    "module": "Cirurgia",
    "text": "Mulher, 56 anos, obesa. No segundo dia de pós-operatório de colecistectomia videolaparoscópica por litíase biliar. Cirurgia eletiva. Refere dor em hipocôndrio direito e febre. Exame físico: paciente com dor, temperatura axilar de 37,6°C. Ausência de taquicardia. Eupneica e anictérica. Ferida operatória em bom aspecto. Abdome discretamente distendido, com ruídos hidroaéreos sem alterações. Sem resistência e sem dor à palpação superficial. Ao revisar os controles, observou-se temperatura axilar oscilando entre 36,7°C e 37,8°C com três temperaturas aferidas acima de 37°C no período. Antibiótico prescrito em carater profilático na indução anestésica e suspenso nesta data, no segundo dia de pós-operatório.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Sintomáticos (antipirético e analgésico).",
      "(B) Exames laboratoriais para investigar infecção.",
      "(C) Iniciar antibioticoterapia.",
      "(D) Exame de Imagem para investigar complicação."
    ],
    "correctAnswer": 0,
    "explanation": "No 2º dia pós-operatório de colecistectomia videolaparoscópica, a paciente tem temperatura até 37,8 °C, sem taquicardia, com ferida limpa e abdome sem sinais peritoneais. Febre baixa nas primeiras 48 horas é geralmente resposta inflamatória ao trauma cirúrgico (liberação de citocinas), não infecção.\n\nA conduta é sintomática, com reavaliação clínica, analgesia e estímulo à deambulação e à fisioterapia respiratória. Só se investiga se houver persistência, piora ou sinais de complicação.",
    "commentary": "Exames para infecção (B): nas primeiras 48 h, sem outros sinais, a investigação de rotina tem baixo rendimento.\n\nAntibioticoterapia (C): não há infecção identificada.\n\nImagem (D): não há sinais de complicação (coleção, fístula biliar) que a justifiquem agora.",
    "reference": "Sabiston Tratado de Cirurgia, 21ª ed. — Complicações pós-operatórias",
    "tags": [
      "cirurgia geral",
      "febre pós-operatória",
      "pós-operatório"
    ]
  },
  {
    "id": "usprp2025-82",
    "module": "Cirurgia",
    "text": "Homem, 27 anos, sexo masculino, pós-operatório de apendicectomia. Refere febre de 37,8°C há 2 dias. Nega alteração do hábito intestinal e uso de medicamentos. Exame físico: bom estado geral, temperatura axilar de 37,8°C. Abdome normotenso, sem sinais de irritação peritoneal. Ferida operatória sem sinais flogísticos, com hiperemia do abaulamento em sua topografia. Ruídos hidroaéreos presentes, sem sinais de irritação dos hidroaéreos. Ao exame: dor à palpação abdominal profunda, sem sinais de irritação peritoneal.\n\nConsiderando o diagnóstico mais provável, qual a conduta mais adequada?",
    "options": [
      "(A) Ampliar espectro de antibiótico.",
      "(B) Tomografia computadorizada de abdome.",
      "(C) Laparotomia exploradora.",
      "(D) Retirada de pontos de incisão."
    ],
    "correctAnswer": 3,
    "explanation": "Pós-operatório de apendicectomia com febre baixa, abdome sem irritação peritoneal e abaulamento com hiperemia sobre a incisão: infecção de sítio cirúrgico superficial (coleção na ferida).\n\nO tratamento é a abertura da ferida: retirar os pontos, drenar, lavar e deixar cicatrizar por segunda intenção. Antibiótico só é necessário com celulite extensa ou sinais sistêmicos.",
    "commentary": "Ampliar o antibiótico (A): sem drenar a coleção, o antibiótico não resolve.\n\nTC de abdome (B): seria indicada para suspeita de abscesso intra-abdominal, mas o achado está na ferida e o abdome é benigno.\n\nLaparotomia (C): não há sinais de complicação intracavitária.",
    "reference": "CDC/HICPAC — Surgical Site Infection Guideline / Sabiston",
    "tags": [
      "cirurgia geral",
      "infecção de sítio cirúrgico",
      "apendicectomia"
    ]
  },
  {
    "id": "usprp2025-83",
    "module": "Cirurgia",
    "text": "Homem, 52 anos, será submetido a colectomia subtotal devido a doença diverticular. O paciente tem hipertensão arterial e diabetes mellitus controlados com uso correto e regular de medicamentos.\n\nQual a classificação pré-operatória desse paciente conforme os critérios de risco cirúrgico anestésico da Sociedade Americana de Anestesiologistas (ASA)?",
    "options": [
      "(A) Asa I.",
      "(B) Asa III.",
      "(C) Asa II.",
      "(D) Asa IV."
    ],
    "correctAnswer": 2,
    "explanation": "Classificação ASA:\n\n• ASA I: hígido\n• ASA II: doença sistêmica leve, bem controlada, sem limitação funcional (ex.: HAS e DM controlados, obesidade leve, tabagismo)\n• ASA III: doença sistêmica grave com limitação funcional\n• ASA IV: doença grave com ameaça constante à vida\n\nHAS e DM controlados correspondem a ASA II.",
    "commentary": "ASA I (A): o paciente tem doenças sistêmicas.\n\nASA III (B): exigiria doença sistêmica grave ou mal controlada, com limitação.\n\nASA IV (D): ameaça constante à vida, ausente.",
    "reference": "ASA Physical Status Classification System (atualização 2020)",
    "tags": [
      "cirurgia geral",
      "avaliação pré-operatória",
      "classificação ASA",
      "anestesiologia"
    ]
  },
  {
    "id": "usprp2025-84",
    "module": "Cirurgia",
    "text": "Homem de 57 anos desenvolveu lesão por pressão sacral grau 4 após internação prolongada em unidade de terapia intensiva para tratamento de choque séptico. A lesão é bem delimitada, com presença de tecido desvitalizado no leito e dimensões de 18 x 12 cm.\n\nQuais as próximas condutas indicadas no tratamento deste paciente?",
    "options": [
      "(A) Treinamento de decúbito ventral, desbridamento cirúrgico, terapia por pressão negativa e rotação de retalhos locais.",
      "(B) Treinamento de decúbito lateral, desbridamento cirúrgico, matriz dérmica acelular e enxerto de pele.",
      "(C) Treinamento de decúbito ventral, sulfadiazina de prata 1%, matriz dérmica acelular e enxerto de pele.",
      "(D) Treinamento de decúbito lateral, sulfadiazina de prata 1%, terapia por pressão negativa e rotação de retalhos locais."
    ],
    "correctAnswer": 0,
    "explanation": "Lesão por pressão sacral estágio 4 (exposição de músculo, osso ou tendão), extensa (18 x 12 cm) e com tecido desvitalizado. Os princípios do tratamento são:\n\n• Alívio de pressão: evitar o decúbito dorsal e treinar decúbito ventral (lateral também comprime trocanteres)\n• Desbridamento cirúrgico do tecido necrótico\n• Terapia por pressão negativa para preparar o leito\n• Cobertura definitiva com retalho local (fasciocutâneo ou musculocutâneo de glúteo), já que o enxerto de pele não resiste à pressão sobre o sacro",
    "commentary": "Decúbito lateral e enxerto (B): o enxerto de pele é inadequado para lesões profundas em áreas de pressão.\n\nSulfadiazina, matriz dérmica e enxerto (C): sem desbridamento cirúrgico e com cobertura inadequada.\n\nSulfadiazina em vez de desbridamento (D): a sulfadiazina não remove tecido desvitalizado.",
    "reference": "NPIAP/EPUAP — Prevention and Treatment of Pressure Ulcers/Injuries (2019) / Tratado de Cirurgia Plástica (SBCP)",
    "tags": [
      "cirurgia plástica",
      "lesão por pressão",
      "retalho",
      "terapia por pressão negativa"
    ]
  },
  {
    "id": "usprp2025-85",
    "module": "Cirurgia",
    "text": "Menino, 8 meses de idade, vem encaminhado pelo pediatra para avaliação especializada, devido ao fato de não ter encontrado o testículo direito em bolsa escrotal. Criança nascida a termo, sem problemas de saúde. Exame físico geral sem anormalidades. Testículo esquerdo está tópico e aparentemente normotrófico. A bolsa escrotal direita está vazia.\n\nQual a medida mais adequada para condução deste paciente?",
    "options": [
      "(A) Solicitar ressonância magnética de abdome e pelve para pesquisa de gônadas.",
      "(B) Palpação do testículo no canal inguinal e tentar posicioná-lo na bolsa escrotal.",
      "(C) Indicar a cirurgia o mais rápido possível para preservar a fertilidade.",
      "(D) Solicitar ultrassom abdominal para pesquisa de gônadas."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 8 meses com testículo direito fora da bolsa (criptorquidia unilateral). A descida espontânea ocorre quase sempre até os 3–6 meses de vida; depois dos 6 meses é muito rara.\n\nAs diretrizes de urologia pediátrica (AUA, EAU, SBU) recomendam a orquidopexia entre 6 e 12 meses (no máximo até 18 meses). A cirurgia precoce reduz o dano às células germinativas e facilita a vigilância do risco de neoplasia. Por isso, aos 8 meses, deve-se indicar a cirurgia o quanto antes.",
    "commentary": "RM (A): tem baixa acurácia para testículo intra-abdominal e não muda a conduta; testículo impalpável vai para laparoscopia.\n\nPalpar e posicionar na bolsa (B): faz parte do exame físico (diferencia o testículo retrátil), mas não é tratamento da criptorquidia já estabelecida aos 8 meses.\n\nUSG abdominal (D): não é recomendada de rotina (AUA, EAU), por não alterar a conduta.",
    "reference": "AUA Guideline — Evaluation and Treatment of Cryptorchidism (2014/2018) / EAU Paediatric Urology",
    "tags": [
      "cirurgia pediátrica",
      "urologia pediátrica",
      "criptorquidia",
      "orquidopexia"
    ],
    "alert": "O exame físico cuidadoso (alternativa B) é sempre o primeiro passo para diferenciar o testículo retrátil, que não precisa de cirurgia. O gabarito oficial (C) assume a criptorquidia já confirmada e enfatiza o momento da orquidopexia."
  },
  {
    "id": "usprp2025-86",
    "module": "Cirurgia",
    "text": "Mulher de 64 anos, submetida à biópsia excisional de melanoma em membro superior direito, com índice de Breslow de 3,7 milímetros sem a presença de ulceração e com índice mitótico de zero. Foi submetida à ampliação de margens de 2 centímetros e à pesquisa de linfonodo sentinela axilar direito, que revelou a presença de micrometástases.\n\nQuais as próximas condutas indicadas no tratamento desta paciente?",
    "options": [
      "(A) Realizar uma segunda ampliação de margens de 1 cm e seguimento clínico da cadeia linfonodal.",
      "(B) Realizar uma segunda ampliação de margens de 1 cm e linfadenectomia axilar direita.",
      "(C) Realizar o seguimento clínico da cadeia linfonodal, sem a necessidade de nova ampliação de margens.",
      "(D) Realizar a linfadenectomia axilar direita, sem a necessidade de nova ampliação de margens."
    ],
    "correctAnswer": 2,
    "explanation": "Melanoma com Breslow de 3,7 mm (T3a), já com ampliação de margem de 2 cm (adequada para espessura acima de 2 mm) e micrometástase em linfonodo sentinela.\n\nApós os estudos MSLT-II e DeCOG-SLT, a linfadenectomia completa não aumentou a sobrevida. Com sentinela positivo, a conduta é vigilância ultrassonográfica da cadeia linfonodal, além de considerar terapia adjuvante sistêmica (imunoterapia anti-PD-1). Não é necessária nova ampliação.",
    "commentary": "Nova ampliação de 1 cm e seguimento (A): a margem de 2 cm já é a máxima recomendada.\n\nNova ampliação e linfadenectomia (B): os dois procedimentos não estão indicados.\n\nLinfadenectomia axilar (D): não traz benefício de sobrevida após sentinela positivo com micrometástase.",
    "reference": "NCCN Guidelines — Melanoma: Cutaneous / Faries MB et al. — MSLT-II (NEJM 2017)",
    "tags": [
      "cirurgia oncológica",
      "melanoma",
      "linfonodo sentinela",
      "dermatologia"
    ]
  },
  {
    "id": "usprp2025-87",
    "module": "Cirurgia",
    "text": "Homem, 35 anos, vítima de 2 ferimentos por arma de fogo em região abdominal, admitido em choque hipovolêmico no pronto atendimento de hospital secundário. Exame físico: Pressão Arterial de 60 x 20 mmHg, intensa palidez, gemente, desorientado e com extremidades frias. Na inspeção do abdome observa-se 2 ferimentos perfurantes em parede abdominal, sendo um em hipocondrio esquerdo e outro em flanco esquerdo. Na ausência de recursos de imagem o paciente será submetido a laparotomia exploradora de urgência.\n\nQual a melhor incisão para acessar a cavidade abdominal?",
    "options": [
      "(A) Transversa supraumbilical.",
      "(B) Paramediana esquerda.",
      "(C) Mediana supraumbilical.",
      "(D) Subcostal esquerda (Kocher)."
    ],
    "correctAnswer": 2,
    "explanation": "Trauma abdominal penetrante com choque hemorrágico grave e indicação de laparotomia exploradora de urgência.\n\nA incisão de escolha é a mediana (xifopúbica, iniciando supraumbilical e prolongável): é rápida, pouco sangrante e dá acesso a toda a cavidade, ao retroperitônio e, se necessário, ao tórax (esternotomia). A alternativa C é a que mais se aproxima, pois a mediana supraumbilical pode ser estendida.",
    "commentary": "Transversa supraumbilical (A): demorada e de acesso limitado ao andar inferior.\n\nParamediana esquerda (B): mais demorada, sem acesso adequado ao lado direito.\n\nSubcostal esquerda (D): exposição restrita ao quadrante superior esquerdo; inadequada para exploração completa.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. / Sabiston — Trauma abdominal",
    "tags": [
      "trauma",
      "trauma abdominal penetrante",
      "laparotomia",
      "incisão mediana"
    ]
  },
  {
    "id": "usprp2025-88",
    "module": "Cirurgia",
    "text": "Mulher de 85 anos apresenta tumoração eritematosa de cerca de 1 cm de diâmetro, bordos perolados e presença de teleangiectasias há 1 ano na ponta nasal.\n\nQual o diagnóstico mais provável e a conduta mais adequada?",
    "options": [
      "(A) Melanoma amelanótico; biópsia excisional com margem de 2 mm.",
      "(B) Carcinoma espinocelular; crioterapia.",
      "(C) Ceratoacantoma; biópsia incisional.",
      "(D) Carcinoma basocelular; biópsia excisional com margem de 4 mm."
    ],
    "correctAnswer": 3,
    "explanation": "Lesão nodular de 1 cm em área fotoexposta de idosa, com bordos perolados, telangiectasias e crescimento lento: carcinoma basocelular nodular, o câncer de pele mais comum.\n\nPara lesões pequenas e bem delimitadas, a excisão com margem de 4 mm é adequada e já serve como diagnóstico e tratamento. Em áreas de alto risco (nariz) pode-se considerar a cirurgia micrográfica de Mohs.",
    "commentary": "Melanoma amelanótico com margem de 2 mm (A): o quadro clássico é de CBC, e a biópsia excisional de melanoma usa margem de 1–3 mm apenas para diagnóstico.\n\nCEC com crioterapia (B): o CEC tem lesão queratósica ou ulcerada, sem bordos perolados, e a crioterapia não permite avaliar margens.\n\nCeratoacantoma (C): lesão de crescimento rápido em semanas, com cratera central queratótica.",
    "reference": "NCCN Guidelines — Basal Cell Skin Cancer / Consenso da SBD",
    "tags": [
      "dermatologia",
      "carcinoma basocelular",
      "câncer de pele"
    ]
  },
  {
    "id": "usprp2025-89",
    "module": "Cirurgia",
    "text": "Menino, 4 anos, apresenta parada da eliminação de flatus e fezes há 4 dias. Evoluiu com distensão abdominal progressiva, inapetência e febre. Antecedentes: constipação intestinal desde o período neonatal. Eliminou mecônio com 16 horas de vida. Informante refere necessidade frequente de estímulo com supositório para evacuação. Nega eliminação de fezes explosivas ao toque. Três internações por enterocolite com 8 meses, 1 ano e 2 anos de idade. Exame físico: regular estado geral, febril (38°C), desidratado (+1/+4), corado, eupneico. Abdome: distendido, ruídos hidroaéreos diminuídos, sem sinais de irritação peritoneal. Timpânico à percussão. Após radiografia simples de abdome, o paciente foi internado. Prescrita lavagem intestinal, hidratação endovenosa e antibioticoterapia. Diagnóstico do plantonista foi de doença de Hirschsprung.\n\nQual dado é mais compatível com o diagnóstico de plantonista?",
    "options": [
      "(A) Eliminação de mecônio após 12 horas.",
      "(B) Enterocolites de repetição.",
      "(C) Ausência de fezes explosivas ao toque.",
      "(D) Sexo masculino."
    ],
    "correctAnswer": 1,
    "explanation": "Constipação desde o período neonatal, dependência de supositórios, distensão e episódios recorrentes de enterocolite: o dado mais característico de doença de Hirschsprung é a enterocolite de repetição, sua complicação mais grave (principal causa de morte).\n\nA eliminação de mecônio com 16 horas foi normal (o atraso seria acima de 48 horas). O diagnóstico definitivo é a biópsia retal (ausência de células ganglionares).",
    "commentary": "Mecônio após 12 horas (A): o atraso característico é acima de 24–48 horas; 16 horas é normal.\n\nAusência de fezes explosivas ao toque (C): a eliminação explosiva ao toque (sinal da 'explosão') favoreceria Hirschsprung; sua ausência não apoia.\n\nSexo masculino (D): é mais frequente em meninos (4:1), mas é dado epidemiológico pouco específico.",
    "reference": "Ashcraft's Pediatric Surgery / APSA — Hirschsprung-associated enterocolitis guideline (2017)",
    "tags": [
      "cirurgia pediátrica",
      "doença de Hirschsprung",
      "enterocolite",
      "constipação"
    ]
  },
  {
    "id": "usprp2025-90",
    "module": "Cirurgia",
    "text": "Homem de 75 anos, hipertenso e tabagista com queixa de dor em membro inferior esquerdo ao caminhar 50 metros, com melhora completa ao repouso. Interna em leito de enfermaria comum para tratamento de COVID 19 de gravidade moderada. O índice tornozelo braço a esquerda é 0,4 e à direita é 0,8. Ausência de edema em membros inferiores. Nega antecedentes de infarto agudo do miocárdio ou acidente vascular cerebral. Está em uso de ácido acetil salicílico (AAS) 100 mg ao dia e Anlodipino 5mg uma vez ao dia. Realizou radiografia de tórax e tomografia de tórax com contraste, sem alterações. Exames laboratoriais de entrada: Hematócrito: 45 %; Glóbulos Brancos: 6500 (sem desvio) /mm³; Plaquetas: 250000/mm³; Sódio: 145 mM/L; Potássio: 4,4 mM/L; Creatinina: 2,5 mg/dl; Dímeros D: 755 ng/dl (VN<500 ng/dl).\n\nQual a melhor conduta inicial em relação ao manejo das medicações antitrombóticas?",
    "options": [
      "(A) Suspender AAS e iniciar heparina não fracionada (HNF), subcutânea 5000 UI de 8/8 h.",
      "(B) Suspender AAS e iniciar heparina de baixo peso molecular (HBPM) 1 mg/kg de 12/12 h.",
      "(C) Manter o AAS e iniciar heparina de baixo peso molecular (HBPM) 1 mg/kg de 12/12 h.",
      "(D) Manter o AAS e iniciar heparina não fracionada (HNF) 5000 UI subcutânea de 8/8 h."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso com doença arterial periférica sintomática (claudicação, ITB de 0,4) internado por covid-19 moderada (risco de tromboembolismo venoso) e com insuficiência renal (creatinina 2,5).\n\nO AAS deve ser mantido (prevenção secundária da DAP). A profilaxia de TEV está indicada, e com disfunção renal moderada a grave prefere-se heparina não fracionada em dose profilática (5.000 UI SC de 8/8 h ou 12/12 h). Anticoagulação plena não está indicada sem TEV confirmado.",
    "commentary": "Suspender AAS e HNF profilática (A): o AAS não deve ser suspenso na DAP sintomática.\n\nSuspender AAS e HBPM plena (B): dose plena sem indicação e com acúmulo na insuficiência renal.\n\nManter AAS e HBPM plena (C): dose terapêutica sem TEV confirmado, e HBPM se acumula com creatinina de 2,5.",
    "reference": "ASH Guidelines on Anticoagulation in COVID-19 (2022) / ACCP — Prevention of VTE",
    "tags": [
      "cirurgia vascular",
      "doença arterial periférica",
      "profilaxia de tromboembolismo",
      "covid-19"
    ]
  },
  {
    "id": "usprp2025-91",
    "module": "Cirurgia",
    "text": "Mulher, 52 anos, obesa, hipertensa, diabética, fazendo uso irregular de medicamentos para controle das comorbidades, procura uma Unidade de Pronto Atendimento, com queixas de um abscesso em região pré auricular esquerda. Ao exame nota-se tumoração inflamatória na área citada, de cerca de 2 cm de diâmetro, com flutuação central. Feita a medida da glicemia que resultou 450 mg/dl e PA 150 X 90 mmHg.\n\nQual a conduta mais adequada nesse momento?",
    "options": [
      "(A) Regular o paciente para serviço hospitalar de maior complexidade para controle glicêmico e drenagem do abscesso.",
      "(B) Encaminhar o paciente para controle glicêmico de urgência e drenar somente após a normalização da glicemia.",
      "(C) Drenar o abscesso, instituir antibioticoterapia e controle glicêmico concomitante.",
      "(D) Prescrever anti-inflamatório, antibiótico, compressa quente e esperar a drenagem espontânea."
    ],
    "correctAnswer": 2,
    "explanation": "Abscesso cutâneo com flutuação em diabética descompensada (glicemia de 450). A infecção é fator de descompensação glicêmica, e o controle da glicemia depende do controle do foco.\n\nA conduta é drenar o abscesso (tratamento principal), associar antibiótico (diabética, face, sinais inflamatórios) e controlar a glicemia ao mesmo tempo. Não se espera a glicemia normalizar para drenar.",
    "commentary": "Transferir para maior complexidade (A): a drenagem de abscesso pequeno é procedimento de UPA; transferir atrasa o tratamento.\n\nDrenar só após normalizar a glicemia (B): sem controlar a infecção, a glicemia não normaliza.\n\nAINE e esperar drenagem espontânea (D): abscesso flutuante deve ser drenado.",
    "reference": "IDSA — Skin and Soft Tissue Infections (2014) / Sabiston",
    "tags": [
      "cirurgia geral",
      "abscesso cutâneo",
      "diabetes mellitus",
      "drenagem"
    ]
  },
  {
    "id": "usprp2025-92",
    "module": "Cirurgia",
    "text": "Mulher, 60 anos com história de câncer de mama, submetida a mastectomia há 3 semanas e em inicio tratamento quimioterápico complementar. Na consulta ambulatorial observou-se edema súbito em perna direita, associada a dor local.\n\nQual a conduta mais adequada, considerando o diagnóstico mais provável?",
    "options": [
      "(A) Prescrever heparina de baixo peso molecular em dose terapêutica.",
      "(B) Implante de filtro de veia cava inferior.",
      "(C) Indicar uso de meia elástica e dose profilática de anticoagulante.",
      "(D) Internação para uso de heparina não fracionada subcutânea."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente oncológica (câncer de mama), em pós-operatório recente e em quimioterapia, com edema súbito e dor na perna: trombose venosa profunda é o diagnóstico mais provável (alta probabilidade pré-teste), a ser confirmada por ultrassonografia Doppler.\n\nO tratamento do TEV associado ao câncer é a anticoagulação plena. A HBPM em dose terapêutica é tradicionalmente o padrão; os DOAC (apixabana, rivaroxabana, edoxabana) são alternativas, conforme o risco de sangramento.",
    "commentary": "Filtro de veia cava (B): só com contraindicação absoluta à anticoagulação.\n\nMeia e dose profilática (C): dose profilática não trata TVP estabelecida.\n\nInternação com HNF subcutânea (D): pode ser tratada ambulatorialmente; HBPM é preferível no câncer.",
    "reference": "ASCO Guideline — VTE Prophylaxis and Treatment in Patients with Cancer (2023) / ITAC",
    "tags": [
      "cirurgia vascular",
      "trombose venosa profunda",
      "câncer",
      "anticoagulação"
    ]
  },
  {
    "id": "usprp2025-93",
    "module": "Cirurgia",
    "text": "Menino, 20 dias de vida, é levado pela sua mãe ao pediatra em uma unidade hospitalar, com queixas de vômitos em jatos, com conteúdo de leite, inicialmente discretos e no momento mais intensos, que iniciaram há 3 dias. A mãe relata que criança chora muito, perdeu peso e que evacua muito pouco. Na avaliação o pediatra suspeita de um quadro de suboclusão intestinal sugestiva de estenose hipertrófica do piloro.\n\nQual o achado de gasometria mais compatível com esse caso?",
    "options": [
      "(A) Acidose respiratória.",
      "(B) Alcalose respiratória.",
      "(C) Acidose metabólica.",
      "(D) Alcalose metabólica."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 3 semanas com vômitos em jato não biliosos e progressivos, choro (fome) e perda de peso: estenose hipertrófica do piloro.\n\nOs vômitos repetidos levam à perda de suco gástrico (HCl): alcalose metabólica hipoclorêmica e hipocalêmica. O rim retém sódio à custa de H⁺ e K⁺ (acidúria paradoxal). A correção hidroeletrolítica precede a piloromiotomia.",
    "commentary": "Acidose respiratória (A): não é o distúrbio primário.\n\nAlcalose respiratória (B): não há hiperventilação; pode haver hipoventilação compensatória.\n\nAcidose metabólica (C): só aparece em desidratação muito grave com hipoperfusão (tardia).",
    "reference": "Ashcraft's Pediatric Surgery / Tratado de Cirurgia Pediátrica",
    "tags": [
      "cirurgia pediátrica",
      "estenose hipertrófica do piloro",
      "alcalose metabólica"
    ]
  },
  {
    "id": "usprp2025-94",
    "module": "Cirurgia",
    "text": "Homem, 21 anos, admitido com dor aguda em bolsa testicular direita de inicio ha duas horas. Nega disúria, polaciuria ou nicturia. Nega alteração na cor, odor e aspecto da urina. Previamente hígido, vida sexual ativa, várias parceiras, sem uso de preservativo. Refere dor, afebril. Testículos tópicos, direito mais alto que esquerdo, e com hiperemia e dor em escroto a direita.\n\nQual medida de propedêutica ou semiotécnica poderia contribuir para o diagnóstico nesse caso?",
    "options": [
      "(A) Sinal de Chutro.",
      "(B) Sinal de Giordano.",
      "(C) Sinal de Prehn.",
      "(D) Sinal de Murphy."
    ],
    "correctAnswer": 2,
    "explanation": "Escroto agudo em jovem: dor súbita há 2 horas, testículo elevado (horizontalizado) e hiperemia. O diferencial principal é entre torção do cordão espermático (emergência) e orquiepididimite.\n\nO sinal de Prehn avalia a dor à elevação do testículo: na epididimite a dor alivia (Prehn positivo); na torção não alivia ou piora (Prehn negativo). É útil, mas não é definitivo. Na suspeita de torção, a exploração cirúrgica não deve ser atrasada.",
    "commentary": "Sinal de Chutro (A): desvio da cicatriz umbilical para o lado da dor na apendicite.\n\nSinal de Giordano (B): dor à punho-percussão lombar, típica da pielonefrite e da litíase renal.\n\nSinal de Murphy (D): parada da inspiração à palpação do hipocôndrio direito na colecistite.",
    "reference": "Campbell-Walsh Urology — Escroto agudo / Diretrizes da SBU",
    "tags": [
      "urologia",
      "escroto agudo",
      "torção testicular",
      "sinal de Prehn"
    ]
  },
  {
    "id": "usprp2025-95",
    "module": "Cirurgia",
    "text": "Menino, 5 dias de vida. Internado em pós-operatório de colostomia em duas bocas por anomalia anorretal caracterizado por genitália de fenótipo masculino e imperfuração anal. Submetido a colostomia no primeiro dia de vida, sem intercorrências. Evoluiu com febre, distensão abdominal e queda do estado geral. Exame físico: febril, em regular estado geral. Hidratado, corado, eupneico. Colostomia funcionante, bom aspecto de ferida operatória. Aceitando leite materno. Abdome discretamente distendido. Massa palpável em flanco direito.\n\nQual o provável foco de infecção?",
    "options": [
      "(A) Abdominal.",
      "(B) Urinário.",
      "(C) Ferida operatória.",
      "(D) Respiratório."
    ],
    "correctAnswer": 1,
    "explanation": "RN com anomalia anorretal alta em menino (com colostomia), que evolui com febre, distensão e massa palpável em flanco. As malformações anorretais em meninos frequentemente têm fístula retourinária (retouretral ou retovesical) e associação com anomalias do trato urinário (associação VACTERL), como refluxo e hidronefrose.\n\nA massa no flanco sugere hidronefrose ou rim aumentado. O provável foco é urinário: infecção pela fístula com contaminação fecal e/ou uropatia obstrutiva. Por isso a colostomia em duas bocas separadas.",
    "commentary": "Abdominal (A): a colostomia funciona e o abdome está só discretamente distendido, sem sinais peritoneais.\n\nFerida operatória (C): de bom aspecto.\n\nRespiratório (D): o RN está eupneico.",
    "reference": "Ashcraft's Pediatric Surgery — Malformações anorretais / Peña A — Anorectal Malformations",
    "tags": [
      "cirurgia pediátrica",
      "anomalia anorretal",
      "infecção urinária",
      "VACTERL"
    ]
  },
  {
    "id": "usprp2025-96",
    "module": "Cirurgia",
    "text": "Mulher, 22 anos, admitida em abdome agudo inflamatório. Submetida à laparotomia exploradora e salpingectomia por gravidez ectópica. Após alta da recuperação anestésica, é encaminhada à enfermaria para suporte clínico geral e cuidados de pós-operatório. Exame físico: bom estado geral, hidratada, corada, eupneica, afebril. Com náusea. Abdome: plano, ruído hidroaéreo diminuído, curativo limpo, dor à palpação em topografia de incisão. Aguarda pela prescrição.\n\nConsiderando esta etapa do pós-operatório, qual item poderia ser subtraído do soro de manutenção?",
    "options": [
      "(A) Potássio.",
      "(B) Cálcio.",
      "(C) Magnésio.",
      "(D) Sódio."
    ],
    "correctAnswer": 0,
    "explanation": "No pós-operatório imediato (primeiras 24 horas), o potássio costuma ser omitido do soro de manutenção. O trauma cirúrgico e a lesão tecidual liberam K⁺, há resposta hormonal ao estresse e às vezes oligúria transitória, com risco de hipercalemia.\n\nAlém disso, ainda não se conhece a diurese. O potássio é reintroduzido quando a função renal e a diurese estão confirmadas.",
    "commentary": "Cálcio (B): normalmente não faz parte do soro de manutenção de rotina.\n\nMagnésio (C): também não é componente rotineiro na fase imediata.\n\nSódio (D): é essencial; soluções hipotônicas aumentam o risco de hiponatremia pós-operatória (secreção de ADH).",
    "reference": "Sabiston Tratado de Cirurgia — Fluidos e eletrólitos / NICE CG174 (IV fluid therapy)",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "hidratação venosa",
      "potássio"
    ]
  },
  {
    "id": "usprp2025-97",
    "module": "Cirurgia",
    "text": "Um paciente de 60 anos, tabagista há mais de 30 anos e etilista crônico, apresenta uma lesão ulcerada indolor na cavidade oral, notada há aproximadamente 5 meses. Durante a avaliação clínica, observa-se que o paciente também apresenta um nódulo endurecido e fixo no pescoço localizado em nível II à direita (figura).\n\nCom base no quadro clínico e considerando que a lesão primária está na cavidade oral, qual é o sítio mais provável de origem do tumor?",
    "options": [
      "(A) Mucosa jugal.",
      "(B) Borda da língua.",
      "(C) Gengiva inferior.",
      "(D) Palato duro."
    ],
    "correctAnswer": 1,
    "explanation": "Tabagista e etilista com úlcera oral indolor há 5 meses e linfonodo cervical endurecido e fixo no nível II: carcinoma espinocelular de boca com metástase linfonodal.\n\nNa cavidade oral, o sítio mais frequente do CEC é a borda lateral da língua (seguida do assoalho da boca), que drena preferencialmente para os níveis I e II.",
    "commentary": "Mucosa jugal (A): sítio menos frequente no Brasil.\n\nGengiva inferior (C): menos comum que a língua.\n\nPalato duro (D): sítio raro de CEC oral.",
    "reference": "NCCN Guidelines — Head and Neck Cancers / INCA — Câncer de boca",
    "tags": [
      "cirurgia de cabeça e pescoço",
      "câncer de boca",
      "carcinoma espinocelular",
      "metástase cervical"
    ],
    "image": "/images/usprp2025-97.webp"
  },
  {
    "id": "usprp2025-98",
    "module": "Cirurgia",
    "text": "Homem, 45 anos de idade, obeso grau 3, IMC atual de 65kg/m² (mas já perdeu 38Kg de seu peso máximo). Diabético e hipertenso. Foi submetido a cirurgia bariátrica pela técnica de bypass gástrico em Y de Roux por via laparoscópica. A informação é que sua cirurgia durou mais de três horas por dificuldade técnica em vista de aderências na cavidade abdominal devido a colecistectomia realizada por via aberta há 10 anos. Você, como médico hospitalista, foi avaliar o paciente no segundo dia de pós-operatório. O mesmo queixava-se de dor em região dorsal bilateral e fraqueza. Negava febre, dispneia, dor abdominal, disuria, coluria ou icterícia, mas apresentava urina mais escura.\n\nPensando no diagnóstico mais provável, qual deve ser a conduta para confirmar este diagnóstico e terapia inicial adequada?",
    "options": [
      "(A) Solicitar bilirrubinas e enzimas canaliculares hepáticas, aumentar a hidratação do paciente e programar colangiorresonância.",
      "(B) Solicitar urocultura e hemograma e iniciar antibioticoterapia com cobertura para gram negativos.",
      "(C) Solicitar creatinofosfoquinase sérica, aumentar a hidratação do paciente e iniciar bicarbonato de sódio endovenoso.",
      "(D) Solicitar tomografia de abdome total, iniciar antibioticoterapia com cobertura para gram negativos e acionar a equipe cirúrgica."
    ],
    "correctAnswer": 2,
    "explanation": "Superobeso (IMC 65) submetido a cirurgia bariátrica prolongada (mais de 3 horas) que, no 2º dia, refere dor lombar e glútea bilateral, fraqueza e urina escura (mioglobinúria): rabdomiólise por compressão muscular prolongada na mesa cirúrgica (glúteos e região lombar). Obesidade extrema e tempo cirúrgico longo são os principais fatores de risco.\n\nConfirma-se com CPK muito elevada. O tratamento é hidratação vigorosa para manter diurese elevada e prevenir lesão renal. A alcalinização com bicarbonato é discutida, mas aparece na alternativa considerada correta.",
    "commentary": "Bilirrubinas e colangiorressonância (A): não há icterícia nem colúria por bilirrubina; a urina escura é pigmentúria.\n\nUrocultura e antibiótico (B): não há febre nem disúria que sugiram infecção urinária.\n\nTC e cirurgia (D): não há sinais de fístula ou complicação abdominal.",
    "reference": "Sabiston — Cirurgia bariátrica: complicações / Bosch X et al. — Rhabdomyolysis and Acute Kidney Injury (NEJM 2009)",
    "tags": [
      "cirurgia bariátrica",
      "rabdomiólise",
      "pós-operatório",
      "obesidade"
    ]
  },
  {
    "id": "usprp2025-99",
    "module": "Cirurgia",
    "text": "Homem de 38 anos, previamente hígido. Encontra-se em tratamento intensivo no CTI há duas semanas por queimadura de 3º grau (55% da superfície corporal). Há 02 dias com parada de eliminação de flatos e fezes. Ao exame físico encontrava-se com estado geral regular, desidratado, porém hemodinamicamente estável. O exame do abdome chamava atenção pela distensão difusa e dor à palpação profunda, sem sinais de irritação peritoneal. Os exames laboratoriais revelaram hipocalemia, insuficiência renal aguda e acidose metabólica com níveis elevados (limítrofes) de lactato. Os exames radiológicos demonstraram distensão difusa das alças intestinais sem um ponto evidente de obstrução.\n\nQual a melhor conduta inicial frente ao quadro apresentado?",
    "options": [
      "(A) Passagem de sonda nasogástrica e correção dos distúrbios eletrolíticos.",
      "(B) Preparo rápido do cólon com manitol a 20% pela sonda nasogástrica para realização de colonoscopia diagnóstica.",
      "(C) Laparotomia exploradora imediata para confecção de cecostomia descompressiva.",
      "(D) Administração de corticoide venoso e opioides para controle da dor."
    ],
    "correctAnswer": 0,
    "explanation": "Grande queimado em UTI com distensão abdominal difusa, parada de eliminação de flatos e fezes, distúrbios eletrolíticos (hipocalemia), sem ponto de obstrução: pseudo-obstrução colônica aguda (síndrome de Ogilvie) e/ou íleo paralítico, favorecidos por doença grave, opioides e distúrbios hidroeletrolíticos.\n\nA conduta inicial é conservadora: jejum, sonda nasogástrica (e retal) para descompressão, correção dos eletrólitos, suspensão de fármacos que reduzem a motilidade e mobilização. Se o ceco ultrapassar 10–12 cm ou não houver melhora, usam-se neostigmina ou descompressão colonoscópica.",
    "commentary": "Preparo com manitol para colonoscopia (B): o manitol fermenta (gás inflamável) e o preparo oral é contraindicado na pseudo-obstrução.\n\nLaparotomia com cecostomia (C): reservada a perfuração, isquemia ou falha das medidas clínicas e endoscópicas.\n\nCorticoide e opioide (D): opioides pioram a motilidade; corticoide não tem indicação.",
    "reference": "ASCRS Clinical Practice Guidelines — Colonic Volvulus and Acute Colonic Pseudo-Obstruction (2021)",
    "tags": [
      "cirurgia geral",
      "síndrome de Ogilvie",
      "íleo paralítico",
      "grande queimado"
    ]
  },
  {
    "id": "usprp2025-100",
    "module": "Cirurgia",
    "text": "Mulher de 38 anos de idade foi trazida para a Unidade de Pronto Atendimento (UPA) onde você é o médico de plantão? O acompanhante refere que a mesma foi submetida a cirurgia bariátrica (não sabe qual a técnica operatória realizada) há 36 dias. Vem evoluindo com vômitos de repetição e precisou ser levada diversas vezes na mesma UPA para receber hidratação endovenosa. Na última semana apresentou fraqueza, parestesias nos pés e dores musculares. Há dois dias começou a reclamar que a visão estava ficando turva (SIC) e como acordou confusa no dia de hoje, o acompanhante a trouxe. Ao exame físico, apresentava-se estável hemodinamicamente e com índice de 14 na Escala de Coma de Glasgow.\n\nQual das alternativas abaixo está CORRETA, com relação ao quadro da paciente?",
    "options": [
      "(A) A mesma deve receber hidratação endovenosa e ser encaminhada prontamente para um serviço terciário de urgência para realização de uma tomografia de crânio.",
      "(B) A fisiopatologia deste quadro está mais relacionada aos vômitos de repetição e não tanto ao tipo de cirurgia bariátrica realizada.",
      "(C) É prioritário tentar descobrir qual foi a técnica cirúrgica a qual a paciente foi submetida, pois depende disto para se chegar ao diagnóstico e assim tratar o quadro.",
      "(D) Pensando no diagnóstico de hipoglicemia secundária a provável síndrome de dumping, recomenda-se infundir imediatamente solução glicosada endovenosa."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher em pós-operatório recente de cirurgia bariátrica (36 dias) com vômitos repetidos, seguidos de neuropatia periférica (parestesias, fraqueza), alterações visuais e confusão: encefalopatia de Wernicke por deficiência de tiamina (vitamina B1).\n\nA tiamina tem reserva corporal pequena (cerca de 2–3 semanas) e se esgota rapidamente com vômitos persistentes, independentemente da técnica cirúrgica. O tratamento é tiamina parenteral em altas doses antes de qualquer soro glicosado, que pode precipitar ou agravar o quadro.",
    "commentary": "Hidratar e transferir para TC (A): atrasa o tratamento; a tiamina deve ser dada imediatamente, e a TC não é necessária para o diagnóstico.\n\nDescobrir a técnica antes de tratar (C): o diagnóstico é clínico e o tratamento não deve esperar.\n\nGlicose IV por dumping (D): glicose sem tiamina pode precipitar ou agravar a encefalopatia de Wernicke.",
    "reference": "ASMBS — Integrated Health Nutritional Guidelines for the Surgical Weight Loss Patient (2016/2019) / Sabiston",
    "tags": [
      "cirurgia bariátrica",
      "encefalopatia de Wernicke",
      "tiamina",
      "deficiências nutricionais"
    ]
  }
];
