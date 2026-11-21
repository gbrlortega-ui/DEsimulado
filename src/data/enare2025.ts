import { Question } from '../types';

// ENARE 2025 — Exame Nacional de Residência (acesso direto). 100 questões, 5 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const ENARE_2025_QUESTIONS: Question[] = [
  {
    "id": "enare2025-1",
    "module": "Clínica Médica",
    "text": "Uma paciente de 60 anos foi internada para investigação de anemia associada a déficit cognitivo. O médico percebeu lentidão de raciocínio e redução da capacidade executiva. A paciente estava atenta e cooperando com o examinador quando se queixou de parestesias (dormência e queimação) simétricas em ambos os membros inferiores. Em relação à anemia, havia macrocitose e reticulocitopenia. O nível de vitamina B12 sérica foi 125 pg/mL (normal: acima de 200 pg/mL).\n\nDiante desse quadro clínico, além da investigação da causa da anemia, deve-se proceder à reposição:",
    "options": [
      "oral de cianocobalamina (1000 microgramas por dia) e manutenção da mesma dose uma vez por mês",
      "de cianocobalamina parenteral (1000 microgramas por dia) e manutenção da mesma dose por via oral a cada mês",
      "de cianocobalamina intramuscular (1000 microgramas por dia) e posterior injeção intramuscular uma vez por semana até reavaliação dos sintomas e investigação da causa",
      "de hidroxicobalamina parenteral ou oral três vezes por semana seguida da dose de 1000 microgramas, uma vez por semana, para o resto da vida",
      "de hidroxicobalamina parenteral (1000 microgramas por dia) até a mitigação dos sintomas"
    ],
    "correctAnswer": 2,
    "explanation": "Anemia macrocítica hiporregenerativa com B12 baixa e manifestações neurológicas (parestesias simétricas e déficit cognitivo) caracteriza deficiência de cobalamina com comprometimento neurológico. Nessa situação a reposição deve ser parenteral e intensiva no início: cianocobalamina 1.000 µg IM ao dia (ataque), depois injeções semanais até a recuperação clínica e laboratorial, seguidas de manutenção mensal enquanto a causa é investigada (anemia perniciosa, gastrite atrófica, metformina, má absorção).\n\nA via IM garante a absorção independentemente do fator intrínseco e acelera a recuperação neurológica, que pode ficar irreversível se o tratamento atrasar.",
    "commentary": "Cianocobalamina oral (A): a via oral em altas doses é alternativa para casos leves e sem lesão neurológica; com déficit neurológico, a reposição inicial deve ser parenteral.\n\nParenteral diária e manutenção oral mensal (B): uma dose oral mensal de 1.000 µg é insuficiente para manutenção.\n\nHidroxicobalamina três vezes por semana e depois semanal para sempre (D): o esquema descrito não corresponde ao recomendado; a manutenção é mensal (ou a cada 2–3 meses com hidroxicobalamina), não semanal por toda a vida.\n\nHidroxicobalamina diária até mitigar os sintomas (E): a reposição não termina com a melhora dos sintomas; se a causa persiste (ex.: anemia perniciosa), a manutenção é por toda a vida.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Harrison – Medicina Interna, 21ª ed. (anemias megaloblásticas); British Society for Haematology – Guideline for cobalamin and folate disorders",
    "tags": [
      "anemia megaloblástica",
      "vitamina B12",
      "deficiência de cobalamina",
      "neuropatia periférica"
    ],
    "tip": "B12 baixa + sintoma neurológico = IM diária na 1ª semana, depois semanal e, então, mensal."
  },
  {
    "id": "enare2025-2",
    "module": "Clínica Médica",
    "text": "Após o início de tratamento antirretroviral (TARV) há 1 mês, um paciente com síndrome consumptiva, candidíase e diarreia crônica foi internado por outras manifestações. O grupo de residentes da clínica médica percebeu, durante os primeiros três dias de internação, febre vespertina, linfadenomegalias cervicais e axilares com fistulização e constipação intestinal com cólicas abdominais. Os exames demonstraram anemia e VHS e PCR elevados, bem como imagens reticulonodulares difusas e bilaterais em ambos os hemitóraces. As tomografias reforçaram os infiltrados reticulonodulares com linfadenomegalias mediastinais com centro necrótico, além de linfadenomegalias mesentéricas com espessamento de íleo distal. O paciente piorou clinicamente, apresentando-se prostrado e com hipoxemia no 4º dia de internação. A contagem de linfócitos CD4 no início do tratamento era de 45 células/mm³ e a PPD (prova tuberculínica anérgica) era 0 mm.\n\nDiante do exposto, a conduta mais adequada é:",
    "options": [
      "suspender a TARV até finalizar a investigação para infecções intestinais relacionadas ao HIV",
      "proceder à biópsia de linfonodo por provável diagnóstico de linfoma",
      "iniciar tratamento empírico para tuberculose e micobactérias atípicas e prescrever procinéticos e laxativos",
      "realizar biópsia de linfonodo e coleta de escarro para análise de baciloscopia, teste rápido molecular para tuberculose e cultura para micobactéria; suspender a TARV e avaliar início de corticoide",
      "manter a TARV e acrescentar corticoide até o final da investigação, devido a reação imune"
    ],
    "correctAnswer": 4,
    "explanation": "Paciente com AIDS avançada (CD4 de 45 células/mm³, PPD anérgico) que, cerca de 1 mês após iniciar TARV, apresenta piora inflamatória exuberante: febre, linfonodos fistulizados, linfonodos mediastinais com necrose central, infiltrado reticulonodular e acometimento ileal. É o quadro de síndrome inflamatória da reconstituição imune (SIRI) associada a micobactéria (sobretudo tuberculose desmascarada pela TARV).\n\nNa SIRI, a TARV deve ser mantida — suspendê-la expõe o paciente a novas infecções oportunistas. Nas formas moderadas a graves (aqui há hipoxemia e prostração), associa-se corticoide (prednisona) enquanto se trata/confirma a infecção de base. Pelo gabarito oficial, a conduta é manter a TARV e acrescentar corticoide até o fim da investigação.",
    "commentary": "Suspender a TARV (A): só se interrompe a TARV em SIRI com risco imediato de vida (ex.: neurológica grave); suspender aqui não se justifica.\n\nBiópsia por provável linfoma (B): linfonodos fistulizados com necrose central, acometimento ileal e piora logo após TARV apontam para micobacteriose/SIRI, não linfoma.\n\nTratamento empírico para TB e micobactérias atípicas com procinéticos e laxativos (C): a constipação é secundária ao acometimento ileal; procinéticos não tratam o quadro, e a alternativa ignora o componente inflamatório grave.\n\nBiópsia + escarro, suspender TARV e avaliar corticoide (D): a coleta de material é útil, mas suspender a TARV é o erro da alternativa.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Manejo da Infecção pelo HIV em Adultos (2024); Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed.",
    "tags": [
      "HIV",
      "síndrome inflamatória da reconstituição imune",
      "tuberculose",
      "TARV",
      "infectologia"
    ],
    "tip": "SIRI: mantém a TARV; corticoide nas formas moderadas a graves."
  },
  {
    "id": "enare2025-3",
    "module": "Clínica Médica",
    "text": "Durante o atendimento ambulatorial, José, de 68 anos, queixou-se de dor toracolombar de intensidade moderada, constante, iniciada há 3 semanas. Foi associada a dormência nas duas pernas, havendo piora da dor quando ele ficava muito tempo em pé e melhora quando se sentava ou se deitava. O paciente já estava em tratamento para diabetes mellitus há 10 anos, com elevação recente da dose de metformina para 2 g/dia. Segundo ele, a glicemia estava bem controlada, mas o tabagismo e o alcoolismo persistiam (75 maços x ano e 40 g de álcool por dia). Na anamnese dirigida, revelou-se constipação de início recente, sem mudança do volume ou consistência das fezes. Não houve qualquer outra queixa ou sintoma relatado. No exame físico, notam-se dor à palpação da musculatura paravertebral bilateralmente, bem como dor em queimação agravada em flexão de quadril e coxa. Sinais de Lasègue e Kernig positivos bilateralmente. O restante do exame físico não mostrou alterações.\n\nConsiderando o quadro exposto, é correto afirmar que:",
    "options": [
      "uma conduta mais agressiva deve ser adotada, com investigação de tumores devido à idade e ao tabagismo, apesar de se tratar de uma dor lombar aguda",
      "a ressonância de coluna torácica e lombar é obrigatória devido à localização da dor, ao tempo de acometimento e aos sinais neurológicos",
      "radiografia de tórax, VHS, proteína C-reativa e hemograma devem ser solicitados, mas pode ser necessário solicitar também uma ressonância nuclear magnética (RNM) de coluna torácica e lombar se as medidas comportamentais e analgesia não melhorarem",
      "a dor lombar em pessoa acima de 50 anos deve ser sempre investigada, independentemente dos sintomas e sinais associados. O principal exame é a ressonância nuclear magnética (RNM) de coluna lombar com contraste venoso",
      "os sinais de alarme associados a dor lombar subaguda ou crônica (respectivamente, 4 a 12 semanas e mais de 12 semanas) em indivíduos com mais de 50 anos são desnecessários para indicação de exame específico, pois todos esses pacientes devem ter exame de imagem"
    ],
    "correctAnswer": 2,
    "explanation": "Homem de 68 anos, tabagista pesado e etilista, com dor toracolombar subaguda (3 semanas), dormência nas pernas, piora em pé e melhora sentado (claudicação neurogênica, sugestiva de estenose de canal) e constipação recente. Há sinais de alerta (idade > 50 anos, tabagismo, sintomas neurológicos), mas não há déficit motor, febre, perda de peso ou alteração esfincteriana franca que exija imagem imediata.\n\nPelo gabarito, a melhor conduta é uma investigação inicial dirigida (radiografia de tórax pelo tabagismo, VHS, PCR e hemograma em busca de infecção/neoplasia), com analgesia e medidas comportamentais, reservando a RNM de coluna torácica e lombar se não houver melhora ou se os exames iniciais indicarem doença grave.",
    "commentary": "Conduta agressiva com investigação de tumores (A): a dor não é aguda (3 semanas = subaguda), e a investigação de neoplasia é feita de forma escalonada, não automaticamente agressiva.\n\nRNM obrigatória (B): RNM imediata é reservada para déficit neurológico progressivo, síndrome da cauda equina ou forte suspeita de infecção/neoplasia.\n\nInvestigar sempre acima de 50 anos com RNM com contraste (D): idade isolada não obriga RNM, e o contraste não é rotina.\n\nSinais de alarme desnecessários (E): os sinais de alarme são justamente o que orienta a indicação de imagem; nem todo paciente acima de 50 anos precisa de exame.\n\nGabarito oficial do ENARE 2025.",
    "reference": "American College of Physicians – Diagnosis and Treatment of Low Back Pain; Ministério da Saúde – Cadernos de Atenção Básica (dor lombar)",
    "tags": [
      "lombalgia",
      "sinais de alarme",
      "estenose de canal lombar",
      "reumatologia"
    ],
    "alert": "Questão discutível: há sinais de alerta (idade, tabagismo pesado, sintomas neurológicos, constipação recente) que, para muitos autores, já justificariam RNM. O gabarito oficial considera a investigação escalonada (C)."
  },
  {
    "id": "enare2025-4",
    "module": "Clínica Médica",
    "text": "Um rapaz de 18 anos foi atendido no ambulatório de clínica médica para acompanhamento de lúpus eritematoso sistêmico com nefrite e cardite. Estava em bom estado geral após 3 pulsoterapias com corticoide e ciclofosfamida, mas deveria fazer nova dose de corticoide sistêmico naquele mês. No entanto, apresentava lesões hiperemiadas com vesículas e algumas pústulas em dermátomos oftálmico e maxilar da hemiface direita. A impressão do médico foi de herpes-zóster.\n\nA conduta adequada para esse caso é:",
    "options": [
      "prescrição de aciclovir oral 800 mg, 5 vezes ao dia, por 14 dias, e encaminhar o paciente para casa",
      "profilaxia dos contactantes domiciliares e hospitalares com a vacina contra varicela-zóster, independentemente do estado de imunização, do estado imunológico e do tempo de exposição",
      "internação hospitalar para isolamento respiratório e de contato, prescrição de aciclovir parenteral e acompanhamento de complicações pelo herpes-zóster disseminado",
      "prescrição de aciclovir parenteral apenas se o rash e as vesículas tiverem iniciado há menos de 72 horas. Caso contrário, fazer apenas a profilaxia dos contactantes com vacina e do paciente com antibiótico devido à alta prevalência de infecção bacteriana secundária",
      "internação hospitalar em quarto com pressão negativa e precauções de contato como máscara cirúrgica, capote, luva, gorro e óculos para toda a equipe assistencial. O aciclovir de 800 mg pode ser feito de forma oral, 5 vezes ao dia, por 7 a 10 dias ou até a alta hospitalar"
    ],
    "correctAnswer": 2,
    "explanation": "Herpes-zóster no território oftálmico e maxilar em paciente gravemente imunossuprimido (lúpus com nefrite e cardite, pulsos recentes de corticoide e ciclofosfamida). Imunossupressão importante e acometimento do ramo oftálmico do trigêmeo são indicações de aciclovir intravenoso (10 mg/kg de 8/8 h) em regime de internação, com precauções de contato e respiratórias (aerossol) pelo risco de disseminação cutânea e visceral, e monitorização de complicações (ceratite, uveíte, pneumonite, hepatite, encefalite).",
    "commentary": "Aciclovir oral e alta (A): em imunossuprimido grave com zóster oftálmico, o tratamento oral ambulatorial é inadequado.\n\nVacina para todos os contactantes (B): a profilaxia pós-exposição depende do estado imunológico e da suscetibilidade do contactante; a vacina de vírus vivo é contraindicada em imunossuprimidos e gestantes.\n\nAciclovir IV só se início < 72 h e antibiótico profilático (D): em imunossuprimidos o antiviral é indicado mesmo após 72 h enquanto houver lesões novas, e não há indicação de antibiótico profilático.\n\nAciclovir oral 800 mg com pressão negativa (E): o paciente precisa de aciclovir intravenoso; manter a via oral subtrata o caso.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (varicela/herpes-zóster); Harrison – Medicina Interna, 21ª ed.",
    "tags": [
      "herpes-zóster",
      "imunossupressão",
      "lúpus eritematoso sistêmico",
      "aciclovir",
      "infectologia"
    ],
    "tip": "Zóster em imunossuprimido grave ou oftálmico complicado: internar e aciclovir IV."
  },
  {
    "id": "enare2025-5",
    "module": "Clínica Médica",
    "text": "Uma paciente de 49 anos foi internada na enfermaria de clínica médica por quadro de síndrome consumptiva, ascite e fraqueza em membros inferiores. A paciente conta que tudo começou 1 ano antes com dormência nas pernas ascendendo até o meio da perna e posterior redução de força em membros inferiores. Naquela época, houve turvação visual e cefaleia. Com aproximadamente 4 meses de sintomas, sem limitação para trabalhar e realizar as tarefas da vida diária, a cefaleia e a turvação visual ficaram mais proeminentes. Segundo a paciente, foram realizados diversos exames (ressonância de crânio, coluna cervical e lombar), sem evidência de alterações. A pressão do liquor estava alta, motivando o uso de acetazolamida por 8 meses (até a internação). No dia da internação, pôde-se observar hepatoesplenomegalia, ascite de grande volume, déficit sensitivo-motor distal em membros inferiores com hiporreflexia, fenômeno de Raynaud, cistos em tireoide (ultrassom confirmando e uso prévio de levotiroxina) e lesões cutâneas hipercrômicas. Outros exames demonstraram lesões osteoescleróticas em esterno, derrame pleural e pericárdico e padrão de polirradiculoneuropatia desmielinizante crônica.\n\nA conduta adequada para o quadro é:",
    "options": [
      "dosagem de fator reumatoide, fator antinuclear, anti-Scl-70, anticentrômero e pulsoterapia por provável doença do tecido conjuntivo indiferenciada ou sobreposição de lúpus com esclerodermia em evolução grave",
      "dosagem de eletroforese de proteínas séricas e urinárias com imunofixação em busca de pico monoclonal",
      "biópsia de gordura abdominal em busca de proteína amiloide",
      "biópsia de peritônio se o gradiente soro-ascite for menor que 1,1",
      "punção aspirativa de cisto tireoidiano"
    ],
    "correctAnswer": 1,
    "explanation": "O conjunto descreve a síndrome POEMS: Polineuropatia desmielinizante crônica, Organomegalia (hepatoesplenomegalia), Endocrinopatia (tireoide), proteína Monoclonal e alterações de pele (Skin: hiperpigmentação), além de lesões ósseas osteoescleróticas, sobrecarga extravascular (ascite, derrames pleural e pericárdico), papiledema/hipertensão intracraniana e fenômeno de Raynaud.\n\nOs critérios obrigatórios são a polineuropatia e o distúrbio monoclonal de plasmócitos (quase sempre cadeia leve lambda). Por isso, o passo seguinte é a eletroforese de proteínas séricas e urinárias com imunofixação em busca do componente monoclonal.",
    "commentary": "Painel de autoanticorpos e pulsoterapia (A): Raynaud e alterações cutâneas não explicam a polineuropatia desmielinizante, as lesões osteoescleróticas e a organomegalia; pulsoterapia empírica não se justifica.\n\nBiópsia de gordura abdominal (C): amiloidose AL entra no diagnóstico diferencial, mas lesões osteoescleróticas, papiledema e hiperpigmentação apontam para POEMS; o primeiro passo é demonstrar a proteína monoclonal.\n\nBiópsia de peritônio (D): o quadro sistêmico não é explicado por doença peritoneal; a ascite faz parte da sobrecarga extravascular da POEMS.\n\nPunção do cisto tireoidiano (E): a alteração tireoidiana é parte da endocrinopatia; puncionar o cisto não esclarece o quadro.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Dispenzieri A. POEMS syndrome: update on diagnosis, risk-stratification, and management. Am J Hematol; Harrison – Medicina Interna, 21ª ed.",
    "tags": [
      "síndrome POEMS",
      "gamopatia monoclonal",
      "polineuropatia",
      "hematologia"
    ],
    "tip": "Polineuropatia + lesão óssea esclerótica + organomegalia + pele escura: pense em POEMS e peça imunofixação."
  },
  {
    "id": "enare2025-6",
    "module": "Clínica Médica",
    "text": "Uma mulher de 20 anos se queixa de edema generalizado iniciado há 3 semanas, que evoluiu com piora progressiva. Relata hiporexia e astenia nesse período. Desconhece ser portadora de doenças atuais ou prévias e não faz uso de quaisquer medicamentos ou drogas. Ao exame físico, PA: 160 x 90 mmHg, FC: 97 bpm, FR: 22 ipm, SpO₂ 98% (em ar ambiente). As mucosas estão hipocoradas, ictéricas e hidratadas. Há edema na face, pálpebras, parede abdominal e membros inferiores. Há também ascite e síndrome de derrame pleural.\n\nExames de laboratório:\n• Hb: 7,0 g/dL; Hct: 24%; VCM: 98 fL; HCM: 31 pg; CHCM: 32 g/dL; RDW: 18,3%\n• Leucócitos: 3.400/mm³ (segmentados: 1.500/mm³; linfócitos: 700/mm³)\n• Plaquetas: 201.000/mm³\n• PCR: 28 mg/dL\n• FAN: reagente 1:320, padrão nuclear homogêneo\n• Anti-DNA, anti-SSA, anti-SSB e anti-Sm: reagentes\n• ANCA: não reagente\n• C3: 43 mg/dL (VR: 90-170 mg/dL)\n• C4: 10 mg/dL (VR: 12-36 mg/dL)\n• Urina: densidade 1.020; pH 6,0; nitrito negativo; proteínas ++++; hemoglobina ++; 4 piócitos/campo; 145 hemácias/campo; cilindros hemáticos\n\nPara investigação da anemia, são solicitados:\n• LDH: 1.150 UI/L (VR: 120-246 UI/L)\n• Bilirrubina total: 4,2 mg/dL; direta: 0,4 mg/dL\n• Reticulócitos: 18%\n• Coombs direto: positivo\n• Ferro sérico: 52 mcg/dL (VR: 65-175 mcg/dL)\n• Ferritina: 650 ng/mL (VR: 10-291 ng/mL)\n• Capacidade total de ligação do ferro: 200 mcg/dL (VR: 250-425 mcg/dL)\n\nA conduta imediata mais adequada para o tratamento da anemia é:",
    "options": [
      "administração de eritropoetina",
      "administração de corticoide",
      "reposição de ferro parenteral",
      "hemotransfusão",
      "prescrição de hidroxicloroquina oral"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher jovem com lúpus eritematoso sistêmico em atividade (FAN, anti-DNA e anti-Sm positivos, complemento baixo, nefrite com cilindros hemáticos, serosites, leucopenia/linfopenia). A anemia é hemolítica autoimune: reticulocitose (18%), LDH muito elevada (o enunciado escreve “LDL”, mas o valor em UI/L é de LDH), hiperbilirrubinemia indireta e Coombs direto positivo.\n\nA conduta imediata para anemia hemolítica autoimune por anticorpos quentes é corticoide em dose imunossupressora (prednisona 1 mg/kg/dia ou pulsoterapia com metilprednisolona), que também trata a atividade lúpica grave.",
    "commentary": "Eritropoetina (A): a medula responde bem (reticulócitos de 18%); o problema é destruição periférica.\n\nFerro parenteral (C): ferritina alta e ferro baixo indicam padrão inflamatório, não ferropenia.\n\nHemotransfusão (D): a paciente está estável, sem instabilidade ou sinais de hipóxia tecidual; na hemólise autoimune a transfusão é reservada para anemia grave sintomática.\n\nHidroxicloroquina (E): deve fazer parte do tratamento de base do lúpus, mas não controla a hemólise aguda.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Reumatologia – Recomendações para o tratamento do LES; EULAR 2023 recommendations for SLE",
    "tags": [
      "lúpus eritematoso sistêmico",
      "anemia hemolítica autoimune",
      "nefrite lúpica",
      "corticoide",
      "reumatologia"
    ],
    "tip": "Coombs direto positivo + reticulocitose + LDH alta: anemia hemolítica autoimune → corticoide."
  },
  {
    "id": "enare2025-7",
    "module": "Clínica Médica",
    "text": "A pneumonia em organização criptogênica (POC) tem sua forma idiopática de pneumonia em organização, anteriormente chamada de bronquiolite obliterante com pneumonia em organização (BOOP). É uma doença pulmonar intersticial difusa decorrente de lesão na parede alveolar tipicamente caracterizada por infiltrados pulmonares periféricos e difusos com áreas de preenchimento alveolar e responsividade a terapia sistêmica com glicocorticoides. A manifestação clínica é de uma pneumonia subaguda ou de difícil resolução, com tosse pouco produtiva, dispneia, febre baixa e fraqueza ou cansaço. No entanto, há diversas condições autoimunes, pneumonias de hipersensibilidade e efeitos colaterais que devem ser excluídos para que a POC seja dada como idiopática.\n\nEm uma análise mais profunda sobre a POC, o quadro descrito acima pode indicar pneumonia em organização caso se verifique(m):",
    "options": [
      "paciente com tosse, febre e dispneia há 3 semanas e imagem apical fibrótica e cavitação adjacente",
      "aspecto tomográfico reticulonodular difuso em paciente com dispneia importante iniciada há 1 semana",
      "aspecto radiográfico de consolidação lobar em paciente com febre alta de início recente",
      "aspecto tomográfico de consolidação irregular do espaço aéreo, opacidades em vidro fosco e pequenas opacidades nodulares em paciente usuário de cocaína",
      "aspecto tomográfico com opacidades evanescentes, bronquiectasias e achados relacionados a impactação mucoide e obstrução brônquica em paciente com eosinofilia e broncoespasmo"
    ],
    "correctAnswer": 3,
    "explanation": "A pneumonia em organização (PO) tem padrão tomográfico típico: consolidações irregulares do espaço aéreo, periféricas/peribrônquicas e às vezes migratórias, opacidades em vidro fosco e pequenos nódulos (pode haver o sinal do halo invertido). Para ser chamada de criptogênica, é preciso afastar causas secundárias: infecções, doenças do tecido conjuntivo, fármacos, radiação e drogas inaladas.\n\nO uso de cocaína é causa reconhecida de pneumonia em organização secundária. Assim, a alternativa D descreve exatamente o padrão de imagem de PO em um contexto que a explica.",
    "commentary": "Imagem apical fibrótica com cavitação (A): sugere tuberculose ou outra infecção cavitária.\n\nPadrão reticulonodular difuso com dispneia de 1 semana (B): não é o padrão da PO e o tempo de evolução é curto; lembra infecção, edema ou pneumonite aguda.\n\nConsolidação lobar com febre alta recente (C): quadro de pneumonia bacteriana típica.\n\nOpacidades migratórias, bronquiectasias e impactação mucoide com eosinofilia e broncoespasmo (E): é o quadro da aspergilose broncopulmonar alérgica.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ATS/ERS – International Multidisciplinary Classification of the Idiopathic Interstitial Pneumonias (2013); Sociedade Brasileira de Pneumologia – Diretrizes de doenças pulmonares intersticiais",
    "tags": [
      "pneumonia em organização",
      "doença pulmonar intersticial",
      "cocaína",
      "pneumologia"
    ]
  },
  {
    "id": "enare2025-8",
    "module": "Clínica Médica",
    "text": "Um homem de 31 anos, previamente saudável, apresenta-se com uma história de 2 anos de disfagia intermitente, principalmente para alimentos sólidos. Relatou 2 episódios de impactação alimentar, com necessidade de endoscopia digestiva alta de urgência. Estava em uso de esomeprazol (40 mg ao dia) há 6 meses, sem melhora significativa dos sintomas de disfagia. Realizou recentemente nova endoscopia, em que a biópsia foi compatível com esofagite eosinofílica, sem estenose esofágica. Foi orientado a restringir alimentos que pudessem estar associados com essa forma de esofagite. Contudo, não houve resposta satisfatória.\n\nNesse caso, a estratégia de intervenção mais adequada é:",
    "options": [
      "associar sucralfato antes das refeições e à noite, antes de deitar",
      "trocar esomeprazol por outro bloqueador da bomba de prótons",
      "encaminhar para tratamento com terapia biológica específica",
      "associar um procinético (como domperidona) antes das refeições",
      "associar um esteroide tópico (como fluticasona ou budesonida) por via oral"
    ],
    "correctAnswer": 4,
    "explanation": "Esofagite eosinofílica confirmada por biópsia, sem estenose, que não respondeu a 6 meses de IBP em dose plena nem à dieta de restrição. As três terapias de primeira linha são IBP, dieta de eliminação e corticoide tópico deglutido. Com falha das duas primeiras, o próximo passo é o corticoide tópico (budesonida viscosa/orodispersível ou fluticasona deglutida), eficaz na remissão clínica e histológica.\n\nA terapia biológica (dupilumabe) é reservada para doença refratária também ao corticoide tópico ou com outras doenças atópicas graves.",
    "commentary": "Sucralfato (A): não tem papel no tratamento da esofagite eosinofílica.\n\nTrocar o IBP (B): a falha de um IBP em dose adequada não é resolvida com outro da mesma classe.\n\nTerapia biológica (C): é reservada para falha do corticoide tópico; pular etapas não é a conduta recomendada.\n\nProcinético (D): a disfagia decorre da inflamação eosinofílica, não de dismotilidade tratável com procinético.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Federação Brasileira de Gastroenterologia; AGA/JTF Clinical Guidelines for the Management of Eosinophilic Esophagitis (2020)",
    "tags": [
      "esofagite eosinofílica",
      "disfagia",
      "corticoide tópico",
      "gastroenterologia"
    ],
    "tip": "Esofagite eosinofílica: IBP, dieta ou corticoide tópico deglutido; biológico só na refratariedade."
  },
  {
    "id": "enare2025-9",
    "module": "Clínica Médica",
    "text": "Uma mulher de 42 anos, com história de “reumatismo” na infância, procura ambulatório com um quadro de cansaço aos esforços. Tem história de “isquemia cerebral” há 2 anos, sem sequelas motoras. Ao exame físico, a pressão arterial é de 110 x 68 mmHg e a frequência cardíaca é de 60 batimentos por minuto. Apresenta ritmo cardíaco regular, bulhas normofonéticas e B1 acentuada. Na ausculta cardíaca, há um sopro diastólico em foco mitral. Nos exames laboratoriais, há um clearance de creatinina estimado em 46 mL/min/1,73 m². No ecocardiograma, foram observados estenose mitral moderada e episódios de fibrilação atrial no Holter de 24 horas. Em relação à prevenção de embolização sistêmica, está mais indicado o uso de:",
    "options": [
      "rivaroxabana de 15 mg, uma vez ao dia",
      "aspirina na dosagem de 200 mg ao dia",
      "apixabana de 2,5 mg, duas vezes ao dia",
      "varfarina, com a dose de acordo com o INR",
      "metoprolol para manutenção do ritmo sinusal"
    ],
    "correctAnswer": 3,
    "explanation": "Estenose mitral moderada reumática com fibrilação atrial paroxística e AVC isquêmico prévio. Nessa combinação a anticoagulação é obrigatória, e o fármaco indicado é a varfarina com INR-alvo 2–3. Os anticoagulantes orais diretos não são recomendados na estenose mitral moderada a grave (fibrilação atrial “valvar”), pois os estudos excluíram esses pacientes e o INVICTUS mostrou mais eventos com rivaroxabana do que com antagonista da vitamina K na doença reumática.",
    "commentary": "Rivaroxabana (A): DOAC não é indicado na estenose mitral moderada/grave; o INVICTUS mostrou superioridade da varfarina.\n\nAspirina (B): antiagregante não previne embolia cardiogênica na fibrilação atrial.\n\nApixabana 2,5 mg (C): além de ser DOAC (não indicado aqui), a dose reduzida exige critérios que a paciente não preenche.\n\nMetoprolol (E): betabloqueador controla frequência, mas não previne embolia sistêmica.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Valvopatias (2020); Diretriz Brasileira de Fibrilação Atrial; Connolly SJ et al. INVICTUS, NEJM 2022",
    "tags": [
      "estenose mitral",
      "fibrilação atrial",
      "anticoagulação",
      "varfarina",
      "febre reumática",
      "cardiologia"
    ],
    "tip": "FA + estenose mitral moderada/grave ou prótese mecânica = varfarina, nunca DOAC."
  },
  {
    "id": "enare2025-10",
    "module": "Clínica Médica",
    "text": "Uma paciente de 47 anos, que vinha em uso de medicações para controle de transtorno bipolar, é levada para atendimento com alteração do nível de consciência, confusão mental, sudorese e desorientação. Ao exame, foi observada rigidez muscular generalizada, especialmente em membros superiores e inferiores. Apresentou pressão arterial de 172 por 104 mmHg, frequência cardíaca de 109 batimentos por minuto, frequência respiratória de 24 incursões respiratórias por minuto e temperatura axilar de 39,2 °C. O exame laboratorial revelou aumento significativo de creatinofosfoquinase sérica, sem alterações nas transaminases. Como a equipe médica suspeitou de síndrome neuroléptica maligna, suspendeu as medicações em uso e iniciou terapia de suporte clínico.\n\nFazem parte do arsenal terapêutico da síndrome neuroléptica maligna as seguintes medicações:",
    "options": [
      "haloperidol e fenitoína",
      "quetiapine e olanzapine",
      "dantrolene e bromocriptina",
      "risperidona e carbamazepina",
      "oxcarbazepina e prometazina"
    ],
    "correctAnswer": 2,
    "explanation": "Síndrome neuroléptica maligna: uso de antipsicótico, rigidez muscular “em cano de chumbo”, hipertermia, instabilidade autonômica (hipertensão, taquicardia, sudorese), alteração da consciência e CK elevada. O tratamento é suspender o agente causador, suporte intensivo (resfriamento, hidratação, controle autonômico) e, nos casos moderados a graves, dantroleno (relaxante muscular que reduz a liberação de cálcio no retículo sarcoplasmático) e bromocriptina (agonista dopaminérgico que reverte o bloqueio D2). Benzodiazepínicos também podem ser usados.",
    "commentary": "Haloperidol e fenitoína (A): haloperidol é antipsicótico, causa clássica da síndrome; fenitoína não tem papel.\n\nQuetiapina e olanzapina (B): antipsicóticos atípicos também podem causar a síndrome; reintroduzi-los na fase aguda agrava o quadro.\n\nRisperidona e carbamazepina (D): risperidona é antipsicótico; carbamazepina não trata a síndrome.\n\nOxcarbazepina e prometazina (E): prometazina é fenotiazínico com ação antidopaminérgica e pode piorar o quadro.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Harrison – Medicina Interna, 21ª ed.; Tratado de Psiquiatria da Associação Brasileira de Psiquiatria",
    "tags": [
      "síndrome neuroléptica maligna",
      "antipsicóticos",
      "dantroleno",
      "bromocriptina",
      "psiquiatria"
    ],
    "tip": "SNM: suspender o antipsicótico + suporte; dantroleno e bromocriptina nos casos graves."
  },
  {
    "id": "enare2025-11",
    "module": "Clínica Médica",
    "text": "Um homem de 48 anos foi admitido no hospital com erupção cutânea generalizada, mal-estar geral e febre. Ele relatou ter iniciado recentemente alopurinol para controle de hiperuricemia. Nos últimos dias, ele notou o surgimento de uma erupção cutânea que começou no tronco e se espalhou para membros, região cervical e face. Além disso, queixava-se de náuseas e dor abdominal. No exame físico, foram observados erupção cutânea maculopapular generalizada, adenomegalia generalizada e edema em face, mãos e pés bilateralmente. Nos exames laboratoriais, foram encontradas leucocitose, eosinofilia e elevação das transaminases.\n\nA principal hipótese diagnóstica nesse caso é:",
    "options": [
      "eritema multiforme",
      "urticária medicamentosa",
      "síndrome de Stevens-Johnson (SSJ)",
      "púrpura trombocitopênica idiopática (PTI)",
      "síndrome de hipersensibilidade induzida por drogas (DRESS)"
    ],
    "correctAnswer": 4,
    "explanation": "Após início de alopurinol (um dos principais desencadeantes, junto com anticonvulsivantes aromáticos e sulfonamidas), surgem febre, exantema morbiliforme extenso, edema facial e de extremidades, linfadenomegalia generalizada, eosinofilia e hepatite. Esse conjunto define a reação a fármaco com eosinofilia e sintomas sistêmicos (DRESS), que costuma aparecer 2 a 8 semanas após o início do medicamento.\n\nA conduta é suspender o alopurinol e, nas formas com acometimento orgânico, usar corticoide sistêmico.",
    "commentary": "Eritema multiforme (A): lesões em alvo, geralmente acrais, associadas sobretudo ao herpes simples; não causa eosinofilia, linfadenomegalia e hepatite.\n\nUrticária medicamentosa (B): placas pruriginosas e fugazes, sem febre, eosinofilia sistêmica e hepatite.\n\nSíndrome de Stevens-Johnson (C): o marcante é o descolamento epidérmico e o acometimento de mucosas, ausentes no caso.\n\nPTI (D): causa plaquetopenia com petéquias, não exantema maculopapular com eosinofilia e hepatite.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Kardaun SH et al. RegiSCAR criteria for DRESS; Azulay – Dermatologia, 8ª ed.",
    "tags": [
      "DRESS",
      "farmacodermia",
      "alopurinol",
      "eosinofilia",
      "dermatologia"
    ],
    "tip": "Exantema + febre + eosinofilia + linfonodos + hepatite semanas após droga nova = DRESS."
  },
  {
    "id": "enare2025-12",
    "module": "Clínica Médica",
    "text": "Um jovem de 20 anos foi admitido com um quadro de hepatite, esplenomegalia com hiperesplenismo, anemia hemolítica com Coombs negativo, hipertensão portal e confusão mental.\n\nO exame neurológico mostrou síndrome rígida-acinética semelhante ao parkinsonismo, tremores e ataxia. Foram também observadas disartria, disfagia e incoordenação motora. Tais achados neurológicos se associam a disfunção dos gânglios da base.\n\nO tratamento instituído foi D-penicilamina oral (0,75 - 2 g/dia em doses divididas, tomadas 1 hora antes ou 2 horas após a refeição) associada a piridoxina oral, 50 mg por semana. Foi também prescrito zinco elementar na dose de 50 mg três vezes ao dia. Houve melhora clínica e indicação para que o tratamento fosse continuado indefinidamente, além de uma dieta específica.\n\nA doença em questão é:",
    "options": [
      "hemocromatose",
      "hepatite autoimune",
      "colangite esclerosante primária",
      "doença de Wilson",
      "síndrome de Budd-Chiari"
    ],
    "correctAnswer": 3,
    "explanation": "Jovem com doença hepática (hepatite, hipertensão portal), anemia hemolítica Coombs-negativo e sintomas extrapiramidais/cerebelares (parkinsonismo, tremor, ataxia, disartria, disfagia) por acúmulo nos núcleos da base: é a doença de Wilson, distúrbio autossômico recessivo do transporte de cobre (gene ATP7B).\n\nO tratamento descrito confirma: quelante (D-penicilamina, com piridoxina para evitar deficiência de B6), zinco (reduz a absorção intestinal de cobre) e dieta pobre em cobre, mantidos por toda a vida.",
    "commentary": "Hemocromatose (A): sobrecarga de ferro com cirrose, diabetes, hiperpigmentação e cardiomiopatia; não causa síndrome extrapiramidal nem hemólise, e é tratada com flebotomia.\n\nHepatite autoimune (B): não explica os sinais neurológicos nem a hemólise; tratada com corticoide e azatioprina.\n\nColangite esclerosante primária (C): doença colestática associada a retocolite; sem acometimento dos núcleos da base.\n\nBudd-Chiari (E): obstrução do efluxo venoso hepático com ascite e hepatomegalia dolorosa; não causa hemólise e síndrome extrapiramidal.\n\nGabarito oficial do ENARE 2025.",
    "reference": "EASL–ERN Clinical Practice Guidelines on Wilson's disease (2025); Sociedade Brasileira de Hepatologia",
    "tags": [
      "doença de Wilson",
      "cobre",
      "D-penicilamina",
      "hepatologia",
      "distúrbios do movimento"
    ],
    "tip": "Jovem com hepatopatia + sintomas extrapiramidais + hemólise Coombs negativo = Wilson."
  },
  {
    "id": "enare2025-13",
    "module": "Clínica Médica",
    "text": "Um jovem de 24 anos refere lombalgia e dor sacroilíaca crônicas há aproximadamente 6 meses. Apresenta também dor progressiva em membro inferior esquerdo. No último mês, vem apresentando rigidez matinal que melhora com exercícios físicos. A dor lombossacra chega a acordá-lo no meio da noite. Afirma também ter certa dificuldade em expandir a parede torácica.\n\nO diagnóstico mais provável é:",
    "options": [
      "artrite reumatoide",
      "esclerose sistêmica",
      "doença de Crohn atípica",
      "artrite reativa do HIV",
      "espondilite anquilosante"
    ],
    "correctAnswer": 4,
    "explanation": "Homem jovem com dor lombar e sacroilíaca de caráter inflamatório: início antes dos 40 anos, mais de 3 meses de duração, rigidez matinal que melhora com exercício e dor noturna que acorda o paciente. A redução da expansibilidade torácica indica acometimento das articulações costovertebrais. Esse quadro é típico da espondilite anquilosante (espondiloartrite axial), mais comum em homens jovens e associada ao HLA-B27.",
    "commentary": "Artrite reumatoide (A): poliartrite simétrica de pequenas articulações; acomete a coluna cervical, não a sacroilíaca.\n\nEsclerose sistêmica (B): espessamento cutâneo, Raynaud e acometimento visceral; não causa sacroileíte.\n\nDoença de Crohn atípica (C): pode cursar com espondiloartrite, mas não há sintomas intestinais que sustentem a hipótese.\n\nArtrite reativa do HIV (D): costuma ser oligoartrite assimétrica de membros inferiores após infecção; não há dado de HIV ou infecção prévia.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ASAS – Critérios de classificação das espondiloartrites axiais; Sociedade Brasileira de Reumatologia",
    "tags": [
      "espondilite anquilosante",
      "espondiloartrite",
      "lombalgia inflamatória",
      "reumatologia"
    ],
    "tip": "Lombalgia que melhora com exercício e piora no repouso em jovem = inflamatória → espondiloartrite."
  },
  {
    "id": "enare2025-14",
    "module": "Clínica Médica",
    "text": "Um paciente de 45 anos, tabagista, apresentava diabetes mellitus e dislipidemia, porém não era hipertenso. Foi atendido no pronto-socorro com quadro de edema agudo do pulmão hipertensivo. Apresentou melhora clínica e foi liberado com prescrição de losartana e hidroclorotiazida.\n\nA hipertensão ficou refratária ao tratamento e o paciente desenvolveu insuficiência renal aguda, que foi associada ao uso da losartana. No exame físico, foi detectado um sopro em linha mamilar esquerda na altura da cicatriz umbilical. O doppler de carótidas mostrou obstrução de 50% à direita e 40% à esquerda.\n\nA doença em questão é:",
    "options": [
      "doença de Kawasaki",
      "arterite de Takayasu",
      "hiperaldosteronismo primário",
      "estenose de artéria renal",
      "feocromocitoma"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com múltiplos fatores de risco aterosclerótico (tabagismo, diabetes, dislipidemia) que desenvolve hipertensão de início abrupto com edema agudo de pulmão “relâmpago” (flash), hipertensão refratária, piora da função renal após bloqueador do receptor de angiotensina e sopro abdominal periumbilical — sinais clássicos de hipertensão renovascular. A doença carotídea confirma aterosclerose difusa. Diagnóstico: estenose aterosclerótica de artéria renal (provavelmente bilateral ou em rim único funcional, o que explica a lesão renal com BRA).",
    "commentary": "Doença de Kawasaki (A): vasculite de crianças pequenas com febre, conjuntivite e alterações de mucosas; acomete coronárias.\n\nArterite de Takayasu (B): pode causar estenose renal, mas acomete principalmente mulheres jovens (< 40 anos), com diminuição de pulsos e sintomas sistêmicos.\n\nHiperaldosteronismo primário (C): hipertensão resistente com hipocalemia; não explica sopro abdominal nem piora renal com BRA.\n\nFeocromocitoma (E): hipertensão paroxística com cefaleia, sudorese e palpitações.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020); ACC/AHA Hypertension Guideline",
    "tags": [
      "hipertensão renovascular",
      "estenose de artéria renal",
      "hipertensão secundária",
      "cardiologia",
      "nefrologia"
    ],
    "tip": "Piora da creatinina com IECA/BRA + sopro abdominal + edema agudo flash = estenose de artéria renal."
  },
  {
    "id": "enare2025-15",
    "module": "Clínica Médica",
    "text": "Uma paciente de 44 anos e com diagnóstico de hepatite C, não tratada, desenvolveu quadro de porfiria. O tratamento instituído consistiu em antivirais de ação direta contra o HCV, hidroxicloroquina e flebotomias regulares.\n\nO tipo de porfiria em questão é:",
    "options": [
      "porfiria aguda intermitente",
      "protoporfiria eritropoiética",
      "porfiria cutânea tardia",
      "porfiria variegata",
      "protoporfiria ligada ao X"
    ],
    "correctAnswer": 2,
    "explanation": "A porfiria cutânea tardia é a porfiria mais comum e está fortemente associada à hepatite C, ao álcool, ao excesso de ferro (hemocromatose), a estrogênios e ao HIV. Cursa com fotossensibilidade, bolhas e fragilidade cutânea em áreas expostas, hipertricose e hiperpigmentação. O tratamento combina retirada dos fatores desencadeantes (tratar o HCV com antivirais de ação direta), flebotomias para reduzir o ferro hepático e hidroxicloroquina em baixa dose — exatamente o esquema descrito.",
    "commentary": "Porfiria aguda intermitente (A): porfiria aguda, com crises de dor abdominal, neuropatia e sintomas psiquiátricos, tratada com hemina e glicose; sem relação com HCV ou flebotomia.\n\nProtoporfiria eritropoiética (B): fotossensibilidade dolorosa imediata desde a infância, sem bolhas; não se trata com flebotomia.\n\nPorfiria variegata (D): mista (cutânea e crises agudas); o tratamento das crises é com hemina.\n\nProtoporfiria ligada ao X (E): rara, semelhante à eritropoiética, de início na infância.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Harrison – Medicina Interna, 21ª ed. (porfirias); American Porphyria Foundation",
    "tags": [
      "porfiria cutânea tardia",
      "hepatite C",
      "flebotomia",
      "hidroxicloroquina",
      "hematologia"
    ],
    "tip": "Porfiria + hepatite C + flebotomia = porfiria cutânea tardia."
  },
  {
    "id": "enare2025-16",
    "module": "Clínica Médica",
    "text": "Durante a tragédia das enchentes no estado do Rio Grande do Sul em 2024, ocorreram vários casos de leptospirose que acometeram principalmente voluntários que atuaram no resgate da população atingida.\n\nA insuficiência renal causada pela doença tem como lesão histopatológica:",
    "options": [
      "nefrite tubulointersticial",
      "necrose tubular aguda",
      "glomerulonefrite membranosa",
      "glomerulonefrite rapidamente progressiva",
      "glomeruloesclerose focal e segmentar"
    ],
    "correctAnswer": 0,
    "explanation": "A lesão renal da leptospirose é, histologicamente, uma nefrite tubulointersticial aguda: a leptospira invade e lesa diretamente os túbulos proximais, com infiltrado inflamatório intersticial. Clinicamente se manifesta como insuficiência renal não oligúrica com hipocalemia (por perda tubular de potássio), característica que diferencia a leptospirose de outras causas de lesão renal aguda.",
    "commentary": "Necrose tubular aguda (B): pode coexistir nos casos com choque e hipoperfusão, mas a lesão característica é a nefrite intersticial.\n\nGlomerulonefrite membranosa (C): causa síndrome nefrótica e se associa a hepatite B, neoplasias e lúpus.\n\nGlomerulonefrite rapidamente progressiva (D): lesão com crescentes, associada a vasculites, anti-MBG e imunocomplexos.\n\nGlomeruloesclerose focal e segmentar (E): causa síndrome nefrótica (primária, HIV, obesidade).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Leptospirose: diagnóstico e manejo clínico; Guia de Vigilância em Saúde",
    "tags": [
      "leptospirose",
      "nefrite tubulointersticial",
      "lesão renal aguda",
      "infectologia",
      "nefrologia"
    ],
    "tip": "Leptospirose: nefrite intersticial com IRA não oligúrica e hipocalemia."
  },
  {
    "id": "enare2025-17",
    "module": "Clínica Médica",
    "text": "Um paciente de 45 anos, sem doenças prévias, desenvolveu enfermidade de instalação súbita e progressiva com quadro de náuseas, vômitos, diarreia e dor abdominal. Logo após, queixou-se de cefaleia, vertigem e tontura. Foi internado na emergência, onde foi iniciada hidratação venosa e administração de sintomáticos. Entretanto, 3 horas depois começou a apresentar visão turva, ptose palpebral, diplopia, disfagia, disartria, boca seca e fraqueza muscular simétrica, acometendo com maior intensidade os membros superiores, sem perda da sensibilidade. Notaram-se hipotensão sem taquicardia e retenção urinária. Cerca de 6 horas após a internação, evoluiu para paralisia flácida motora descendente, associada a comprometimento autonômico disseminado. Durante todo esse período, o paciente se manteve consciente. A fraqueza muscular descendente afetou os músculos do tronco e dos membros, levando a dispneia, insuficiência respiratória e tetraplegia flácida. Foi necessária a transferência do paciente para o CTI, com instalação de tubo orotraqueal e ventilação mecânica, além de rotinas terapêuticas para pacientes graves.\n\nO diagnóstico mais provável é:",
    "options": [
      "meningite por Haemophilus influenzae",
      "síndrome de Guillain-Barré",
      "doença de Lyme",
      "infecção pelo Clostridium botulinum",
      "raiva"
    ],
    "correctAnswer": 3,
    "explanation": "Sintomas gastrointestinais seguidos, em poucas horas, de paralisia de pares cranianos (visão turva, ptose, diplopia, disfagia, disartria), boca seca, retenção urinária e hipotensão (disautonomia), evoluindo com paralisia flácida simétrica e descendente, sem alteração sensitiva e com consciência preservada. É o quadro clássico do botulismo alimentar: a toxina do Clostridium botulinum bloqueia a liberação de acetilcolina na junção neuromuscular e nas sinapses autonômicas.\n\nO tratamento é suporte ventilatório e soro antibotulínico o mais cedo possível; é doença de notificação compulsória imediata.",
    "commentary": "Meningite por Haemophilus (A): causaria febre, rigidez de nuca e alteração da consciência, não paralisia descendente com consciência preservada.\n\nGuillain-Barré (B): a fraqueza é ascendente, com arreflexia e frequentemente parestesias; a paralisia descendente iniciada nos pares cranianos aponta para botulismo.\n\nDoença de Lyme (C): eritema migratório e, no acometimento neurológico, paralisia facial e radiculite; não causa paralisia descendente aguda.\n\nRaiva (E): encefalite com agitação, hidrofobia e alteração da consciência.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manual Integrado de Vigilância Epidemiológica do Botulismo; Guia de Vigilância em Saúde",
    "tags": [
      "botulismo",
      "toxinas bacterianas",
      "paralisia flácida descendente",
      "infectologia",
      "neurologia"
    ],
    "tip": "Paralisia descendente, começando por pares cranianos, com consciência e sensibilidade preservadas = botulismo."
  },
  {
    "id": "enare2025-18",
    "module": "Clínica Médica",
    "text": "Um paciente de 22 anos apresentou quadro clínico com início abrupto de febre, cefaleia, mialgia, anorexia, náuseas e vômitos. Foi avaliado na UPA e liberado com prescrição de sintomáticos. Vinte e quatro horas depois, apresentou diarreia, artralgia, dor ocular, fotofobia e hemorragia conjuntival, além de tosse. Foi internado, recebendo hidratação venosa e sintomáticos venosos. Foram solicitados exames complementares, com os seguintes resultados: leucocitose, neutrofilia e desvio à esquerda, plaquetopenia, aumento de ureia e creatinina, CPK elevada, baixa densidade urinária, proteinúria, hematúria microscópica e leucocitúria.\n\nFoi então iniciada antibioticoterapia com sulfametoxazol + trimetoprima. Logo a seguir, o paciente apresentou exantema, eritema macular, papular purpúrico, distribuídos no tronco ou na região pré-tibial. USG exibiu hepatomegalia, esplenomegalia e linfadenopatia. Na ocasião, reclamou de intensa mialgia, principalmente em região lombar e nas panturrilhas.\n\nApesar do uso de antibiótico, não apresentou melhora, com evolução para tríade insuficiência renal, icterícia rubínica e hemorragia pulmonar discreta (síndrome de Weil). Foi intubado e no CTI iniciou penicilina G cristalina em dose plena e cuidados intensivos. Após 10 dias, apresentou melhora clínica, sendo transferido para enfermaria até concluir seu tratamento. A doença descrita acima é:",
    "options": [
      "febre maculosa",
      "endocardite bacteriana",
      "leptospirose",
      "dengue hemorrágica",
      "infecção urinária por pseudomonas aeruginosa"
    ],
    "correctAnswer": 2,
    "explanation": "Febre de início abrupto, mialgia intensa (sobretudo panturrilhas e região lombar), sufusão/hemorragia conjuntival, CK elevada, lesão renal, plaquetopenia, leucocitose com desvio e, na evolução, a tríade de Weil — insuficiência renal, icterícia rubínica e hemorragia pulmonar. É a leptospirose na forma grave (ictero-hemorrágica). O tratamento da forma grave é penicilina cristalina (ou ceftriaxona/ampicilina) e suporte intensivo, com hemodiálise precoce quando indicada.",
    "commentary": "Febre maculosa (A): exantema maculopapular que começa em punhos e tornozelos após picada de carrapato; o tratamento é doxiciclina. A icterícia rubínica e a hemorragia pulmonar com sufusão conjuntival e mialgia de panturrilhas apontam para leptospirose.\n\nEndocardite bacteriana (B): febre prolongada com sopro e fenômenos embólicos; não causa síndrome de Weil.\n\nDengue grave (D): plaquetopenia e hemorragia, mas sem icterícia rubínica, leucocitose com desvio e IRA não oligúrica típicas.\n\nInfecção urinária por Pseudomonas (E): não explica o quadro sistêmico com icterícia e hemorragia pulmonar.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Leptospirose: diagnóstico e manejo clínico",
    "tags": [
      "leptospirose",
      "síndrome de Weil",
      "doença febril aguda",
      "infectologia"
    ],
    "tip": "Mialgia de panturrilha + sufusão conjuntival + icterícia rubínica = leptospirose."
  },
  {
    "id": "enare2025-19",
    "module": "Clínica Médica",
    "text": "Um homem de 50 anos em tratamento para hepatite C, com cirrose hepática compensada CHILD PUGH A, tem histórico de falha terapêutica com uso prévio de antivirais de ação direta. O médico assistente do serviço de atenção especializada prescreveu um novo esquema terapêutico, recomendado pelo Ministério da Saúde.\n\nO esquema prescrito foi:",
    "options": [
      "sofosbuvir/velpastavir/ribavirina por 24 semanas",
      "sofosbuvir/daclatasvir por 12 semanas",
      "sofosbuvir/pibrentasvir + glecaprevir por 12 semanas",
      "sofosbuvir/velpastavir por 12 semanas",
      "sofosbuvir/ribavirina por 24 semanas"
    ],
    "correctAnswer": 2,
    "explanation": "Para pacientes com hepatite C e falha prévia a esquema com antiviral de ação direta (incluindo inibidores de NS5A), o PCDT do Ministério da Saúde recomenda retratamento com esquema de resgate. Em cirrose compensada (Child-Pugh A), o esquema disponível no SUS é glecaprevir/pibrentasvir associado a sofosbuvir por 12 semanas (a associação de três classes — inibidor de protease, inibidor de NS5A e inibidor de polimerase — aumenta a barreira genética). Inibidores de protease, como o glecaprevir, são contraindicados apenas na cirrose descompensada (Child B/C).",
    "commentary": "Sofosbuvir/velpatasvir/ribavirina por 24 semanas (A): é opção de retratamento em cirrose descompensada, situação em que inibidores de protease são contraindicados — não é o caso de Child A.\n\nSofosbuvir/daclatasvir por 12 semanas (B): esquema de primeira linha antigo; repeti-lo após falha não supera a resistência.\n\nSofosbuvir/velpatasvir por 12 semanas (D): é esquema de tratamento inicial; não é suficiente como resgate após falha a NS5A.\n\nSofosbuvir/ribavirina por 24 semanas (E): esquema antigo, de baixa eficácia, não recomendado para retratamento.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Hepatite C e Coinfecções (2019, atualizações)",
    "tags": [
      "hepatite C",
      "antivirais de ação direta",
      "retratamento",
      "cirrose",
      "hepatologia"
    ],
    "tip": "Falha a DAA em Child A: sofosbuvir + glecaprevir/pibrentasvir por 12 semanas."
  },
  {
    "id": "enare2025-20",
    "module": "Clínica Médica",
    "text": "Mulher de 65 anos procura o gastroenterologista com queixas de astenia, prurido palmar e plantar e elevação de fosfatase alcalina (1005 UI/ml) e Gama GT (1200 UI/ml). As enzimas hepáticas TGO e TGP estão elevadas (300 e 250 UI/ml, respectivamente) e a bilirrubina total é de 6,0 mg/dl, às custas da bilirrubina direta. Apresenta plaquetopenia de 85.000/mm³, e a ultrassonografia de abdômen aponta alterações compatíveis com doença parenquimatosa crônica do fígado, sem dilatação das vias biliares intra e extra-hepáticas e vesícula biliar anecoica.\n\nA principal hipótese diagnóstica para o caso e o exame complementar a ser solicitado são, respectivamente:",
    "options": [
      "hepatite colestática autoimune; FAN e antimúsculo liso",
      "colangite esclerosante primária; CPER e P-Anca",
      "colangite biliar primária; anti-LKM1",
      "colangite biliar primária; antimitocôndria",
      "hepatite medicamentosa; FAN e antimúsculo liso"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de meia-idade com prurido, fadiga e padrão colestático (fosfatase alcalina e GGT muito elevadas, hiperbilirrubinemia direta), sem dilatação de vias biliares ao ultrassom e com sinais de hepatopatia crônica (plaquetopenia). O quadro é típico de colangite biliar primária, doença autoimune das pequenas vias biliares intra-hepáticas que afeta sobretudo mulheres de 40–60 anos. O marcador diagnóstico é o anticorpo antimitocôndria (AMA), positivo em cerca de 95% dos casos.",
    "commentary": "Hepatite colestática autoimune com FAN e antimúsculo liso (A): a hepatite autoimune tem padrão predominantemente hepatocelular; aqui predomina a colestase.\n\nColangite esclerosante primária com CPER e p-ANCA (B): é mais comum em homens jovens com retocolite ulcerativa, e o diagnóstico se faz por colangiorressonância (não CPER) mostrando estenoses e dilatações dos ductos.\n\nColangite biliar primária com anti-LKM1 (C): o diagnóstico está certo, mas o anti-LKM1 é marcador da hepatite autoimune tipo 2.\n\nHepatite medicamentosa (E): não há história de exposição a fármacos, e o marcador citado é de hepatite autoimune.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Hepatologia – Recomendações para diagnóstico e tratamento da colangite biliar primária; EASL Clinical Practice Guidelines (2017)",
    "tags": [
      "colangite biliar primária",
      "colestase",
      "antimitocôndria",
      "hepatologia"
    ],
    "tip": "Mulher com prurido + FA/GGT altas + vias biliares normais = CBP → antimitocôndria."
  },
  {
    "id": "enare2025-21",
    "module": "Cirurgia",
    "text": "Um homem de 64 anos de idade, saudável, agricultor, apresenta-se no consultório com uma lesão cutânea que ele notou há cerca de 6 meses. A lesão está localizada no dorso da mão direita e tem crescido lentamente. O paciente relata que a área está um pouco dolorosa e pruriginosa. Ao exame físico, observa-se uma lesão de 1,2 cm de diâmetro, de cor acastanhada, bordas irregulares, e com algumas áreas de ulceração, e há linfadenomegalia palpável na axila.\n\nCom base na descrição clínica e no exame físico, as melhores propostas diagnóstica e terapêutica para esse paciente são, respectivamente:",
    "options": [
      "carcinoma basocelular; tratamento com crioterapia",
      "queratoacantoma; tratamento com antibioticoterapia",
      "dermatofibroma; tratamento com observação e seguimento",
      "carcinoma espinocelular; tratamento com eletrocoagulação e curetagem",
      "melanoma maligno; tratamento com excisão cirúrgica ampla e avaliação do linfonodo"
    ],
    "correctAnswer": 4,
    "explanation": "Lesão pigmentada em área fotoexposta com crescimento ao longo de meses, bordas irregulares, cor acastanhada, ulceração e linfonodo axilar palpável: pelos critérios ABCDE e pela adenomegalia regional, a principal hipótese é melanoma maligno com possível metástase linfonodal.\n\nA conduta é a biópsia excisional com margens estreitas para confirmação e medida da espessura de Breslow, seguida de ampliação de margens (excisão ampla) e abordagem do linfonodo — com linfonodo clinicamente comprometido, confirmação por punção e linfadenectomia/estadiamento. A alternativa E é a única que traz diagnóstico e tratamento corretos.",
    "commentary": "Carcinoma basocelular com crioterapia (A): o CBC raramente dá metástase linfonodal, e a pigmentação irregular com adenomegalia aponta para melanoma.\n\nQueratoacantoma com antibiótico (B): lesão de crescimento rápido (semanas), com cratera central queratótica; antibiótico não é tratamento.\n\nDermatofibroma com observação (C): nódulo firme, estável, com sinal da covinha; não ulcera nem causa linfadenomegalia.\n\nCarcinoma espinocelular com eletrocoagulação e curetagem (D): o CEC costuma ser queratótico, não pigmentado; com linfonodo comprometido, curetagem seria insuficiente.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Dermatologia / Sociedade Brasileira de Cirurgia Oncológica – Consenso de melanoma cutâneo; NCCN Guidelines – Cutaneous Melanoma",
    "tags": [
      "melanoma",
      "câncer de pele",
      "linfonodo sentinela",
      "cirurgia oncológica",
      "dermatologia"
    ],
    "tip": "Lesão pigmentada com ABCDE alterado + linfonodo regional = melanoma até prova em contrário."
  },
  {
    "id": "enare2025-22",
    "module": "Cirurgia",
    "text": "Um homem de 47 anos de idade, fumante há 30 anos e com histórico de consumo de bebidas alcoólicas destiladas, apresenta uma úlcera dolorosa na língua há 3 meses. Relata que a lesão não cicatriza e está aumentando de tamanho. Além disso, nota dificuldade para engolir e dor referida no ouvido. Ao exame físico, observa-se uma úlcera irregular na borda lateral da língua, com margens endurecidas e base infiltrada. Não há linfonodos cervicais palpáveis. O diagnóstico provável e o tratamento inicial mais adequado para esse paciente são, respectivamente:",
    "options": [
      "adenoma; ressecção com anestesia local",
      "candidíase oral; iniciar tratamento antifúngico tópico",
      "ulceração traumática; recomendações de higiene oral rigorosa e acompanhamento",
      "líquen plano oral; encaminhar para biópsia e tratamento com corticosteroides tópicos",
      "carcinoma espinocelular; biópsia da lesão, estadiamento e tratamento cirúrgico"
    ],
    "correctAnswer": 4,
    "explanation": "Homem tabagista e etilista com úlcera de língua há 3 meses, endurecida, de base infiltrada, na borda lateral, com disfagia e otalgia referida (envolvimento do nervo lingual/glossofaríngeo). É apresentação típica do carcinoma espinocelular de cavidade oral, que corresponde a cerca de 90% dos cânceres de boca. Toda úlcera oral que não cicatriza em 2–3 semanas deve ser biopsiada. Após a confirmação, faz-se o estadiamento (TC/RM de cabeça e pescoço, avaliação cervical e torácica) e o tratamento principal é cirúrgico (glossectomia com margens e, conforme a profundidade de invasão, esvaziamento cervical).",
    "commentary": "Adenoma com ressecção local (A): adenomas são tumores de glândulas salivares, não úlceras infiltrativas de língua.\n\nCandidíase oral (B): forma placas esbranquiçadas removíveis, não úlcera endurecida persistente.\n\nUlceração traumática (C): cicatriza em até 2 semanas após remover a causa; lesão de 3 meses, endurecida, em paciente de risco exige biópsia.\n\nLíquen plano com corticoide (D): lesões reticulares bilaterais; corticoide não é o tratamento de uma provável neoplasia.\n\nGabarito oficial do ENARE 2025.",
    "reference": "INCA – Câncer de boca; NCCN Guidelines – Head and Neck Cancers",
    "tags": [
      "câncer de boca",
      "carcinoma espinocelular",
      "tabagismo",
      "cabeça e pescoço",
      "cirurgia oncológica"
    ],
    "tip": "Úlcera oral endurecida > 2–3 semanas em tabagista/etilista: biopsiar."
  },
  {
    "id": "enare2025-23",
    "module": "Cirurgia",
    "text": "Um adolescente de 16 anos foi admitido no pronto-socorro após queda de motocicleta. Ele estava lúcido e com sinais vitais estáveis. Realizou-se uma tomografia computadorizada do abdômen, que mostrou uma laceração esplênica grau II. Optou-se por um tratamento conservador inicial com monitoramento em unidade de terapia intensiva. Após 24 horas de internação, o paciente apresentou uma queda súbita na pressão arterial, aumento da frequência cardíaca e sinais de irritação peritoneal. Uma nova TC de abdômen mostrou aumento significativo do hemoperitônio e sinais de ruptura esplênica adicional.\n\nDiante desse quadro, a conduta mais apropriada para esse paciente é:",
    "options": [
      "indicar a cirurgia de Warren",
      "realizar uma embolização seletiva da artéria esplênica",
      "transferi-lo para a sala de cirurgia para uma esplenectomia de emergência",
      "continuar com o manejo conservador e aumentar a frequência de monitoramento hemodinâmico",
      "administrar fluidos intravenosos e realizar a transfusão sanguínea, mantendo o paciente sob observação"
    ],
    "correctAnswer": 2,
    "explanation": "O tratamento não operatório do trauma esplênico exige estabilidade hemodinâmica. Após 24 horas, o paciente evoluiu com hipotensão, taquicardia, peritonite e aumento do hemoperitônio por nova ruptura: houve falha do tratamento conservador com instabilidade hemodinâmica. A conduta é laparotomia com esplenectomia de emergência (ou esplenorrafia, se possível), após iniciar a reposição volêmica com hemoderivados.",
    "commentary": "Cirurgia de Warren (A): é uma anastomose esplenorrenal distal para hipertensão portal, sem relação com trauma.\n\nEmbolização da artéria esplênica (B): é adjuvante do tratamento não operatório em paciente estável (ex.: blush arterial); paciente instável vai para o centro cirúrgico.\n\nManter conduta conservadora com mais monitorização (D): o tratamento conservador falhou; insistir aumenta a mortalidade.\n\nFluidos e transfusão em observação (E): a reposição é necessária, mas não substitui o controle cirúrgico do sangramento.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.; WSES Guidelines – Splenic trauma (2017)",
    "tags": [
      "trauma esplênico",
      "esplenectomia",
      "trauma abdominal",
      "tratamento não operatório"
    ],
    "tip": "Trauma esplênico + instabilidade hemodinâmica = cirurgia, sempre."
  },
  {
    "id": "enare2025-24",
    "module": "Cirurgia",
    "text": "Pedro Paulo, um homem de 41 anos, foi admitido no pronto-socorro após sofrer queimaduras extensas em um incêndio no seu local de trabalho. Ele apresentava queimaduras de segundo grau que cobriam aproximadamente 45% de sua superfície corporal total (SCT). O paciente pesava 70 kg e estava consciente e lúcido, mas sentia dor intensa e desconforto. Os sinais vitais eram: frequência cardíaca: 120 bpm; pressão arterial de 100/60 mmHg; frequência respiratória de 24 ipm e saturação de oxigênio de 94% em ar ambiente. Seu médico decidiu iniciar a reanimação hídrica imediatamente.\n\nA melhor abordagem inicial para a reanimação hídrica de Pedro Paulo é:",
    "options": [
      "administrar 2 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, dividindo o volume total igualmente ao longo do período",
      "administrar 8 ml/kg/%SCT de solução cristaloide de NaCl a 0,9% nas primeiras 24 horas, com um ajuste para cada %SCT adicional acima de 50%",
      "administrar 6 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, com um ajuste de 10% para cada grau adicional de queimadura acima do segundo grau",
      "administrar 4 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, dividindo o volume total em duas metades: uma nas primeiras 8 horas e a outra nas 16 horas seguintes",
      "administrar 4 ml/kg/%SCT de solução coloidal de albumina nas primeiras 24 horas, dividindo o volume total em duas metades: uma nas primeiras 8 horas e a outra nas 16 horas seguintes"
    ],
    "correctAnswer": 3,
    "explanation": "Grande queimado (45% de superfície corporal com queimaduras de 2º grau) precisa de reposição volêmica imediata. Pela fórmula de Parkland, infundem-se 4 mL × peso (kg) × %SCQ de Ringer lactato nas primeiras 24 horas, metade nas primeiras 8 horas (contadas a partir da hora da queimadura) e a outra metade nas 16 horas seguintes. Para 70 kg e 45%: 4 × 70 × 45 = 12.600 mL, sendo 6.300 mL nas primeiras 8 horas. A infusão é ajustada pela diurese (0,5 mL/kg/h no adulto).",
    "commentary": "2 mL/kg/%SCQ dividido igualmente nas 24 horas (A): o ATLS 10ª ed. propõe 2 mL/kg/%SCQ para adultos, mas sempre com metade nas primeiras 8 horas; dividir igualmente está errado.\n\n8 mL/kg/%SCQ de soro fisiológico (B): volume excessivo, com risco de síndrome compartimental e edema; o cristaloide de escolha é o Ringer lactato.\n\n6 mL/kg/%SCQ com ajuste por grau de queimadura (C): fórmula inexistente; o cálculo considera apenas queimaduras de 2º e 3º graus, sem ajuste por grau.\n\nAlbumina (E): coloides não são a reposição inicial nas primeiras horas, pelo extravasamento capilar.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.; Ministério da Saúde – Cartilha para tratamento de emergência das queimaduras",
    "tags": [
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica",
      "trauma"
    ],
    "tip": "Parkland: 4 mL × kg × %SCQ; metade em 8 h, metade em 16 h. Alvo de diurese 0,5 mL/kg/h."
  },
  {
    "id": "enare2025-25",
    "module": "Cirurgia",
    "text": "Um paciente de 48 anos apresenta-se no pronto-socorro com dor abdominal intensa e intermitente há 18 horas, com náuseas e vômitos. Ele relata não ter evacuado ou eliminado gases nas últimas 48 horas. Sua história patológica pregressa inclui uma apendicectomia realizada há 20 anos e uma cirurgia para correção de hérnia inguinoescrotal há 5 anos. O exame físico mostrou o paciente lúcido e apirético; sinais vitais: PA 125/80 mmHg, FC 90 bpm, FR 20 ipm, T 36,8 °C. O abdômen está distendido. Peristalse de luta apresenta ruídos metálicos e hipercinéticos. Sente dor à palpação difusa, porém sem sinais de defesa e com ausência de hérnias palpáveis. Os exames laboratoriais registram hemograma com leucócitos de 8.000/mm³ e eletrólitos dentro dos limites normais. Os exames de imagem revelam rotina de abdômen agudo, mostrando distensão de alças intestinais com níveis hidroaéreos, e sem evidências de tumorações.\n\nDiante desse quadro clínico, a etapa inicial mais apropriada para o manejo do caso é:",
    "options": [
      "colonoscopia urgente",
      "administração de laxantes e observação",
      "cirurgia imediata para exploração abdominal",
      "alta com orientação para retorno no caso de persistirem os sintomas",
      "administração intravenosa de líquidos, descompressão nasogástrica e observação"
    ],
    "correctAnswer": 4,
    "explanation": "Dor abdominal em cólica, vômitos, parada de eliminação de gases e fezes, distensão, peristaltismo de luta e níveis hidroaéreos em paciente com cirurgias abdominais prévias: obstrução intestinal (provavelmente do delgado) por bridas. Não há sinais de sofrimento de alça ou estrangulamento (sem febre, sem peritonite, leucócitos normais, sem hérnia encarcerada).\n\nA conduta inicial é tratamento conservador: jejum, hidratação venosa com correção hidroeletrolítica, descompressão por sonda nasogástrica e observação com reavaliações seriadas (pode-se usar contraste hidrossolúvel como teste diagnóstico-terapêutico). Cirurgia se houver sinais de isquemia ou falha após 48–72 horas.",
    "commentary": "Colonoscopia urgente (A): não há indicação na obstrução de delgado por bridas, e a insuflação pode agravar a distensão.\n\nLaxantes (B): contraindicados na obstrução mecânica.\n\nCirurgia imediata (C): reservada para sinais de estrangulamento, peritonite ou falha do tratamento conservador.\n\nAlta com orientação (D): obstrução intestinal exige internação e observação.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Bologna Guidelines – Adhesive small bowel obstruction (WSES 2017); Sabiston – Tratado de Cirurgia, 21ª ed.",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "abdome agudo obstrutivo",
      "sonda nasogástrica"
    ],
    "tip": "Obstrução por bridas sem sinais de sofrimento: SNG, hidratação e observação."
  },
  {
    "id": "enare2025-26",
    "module": "Cirurgia",
    "text": "Um homem de 55 anos sofreu queda de uma altura de aproximadamente dois metros enquanto trabalhava em uma obra. Ele caiu diretamente sobre o braço direito estendido. No pronto-socorro, apresentava dor intensa, incapacidade de mover o braço direito e deformidade visível no meio do braço. As radiografias mostraram uma fratura diafisária do úmero com desvio. O exame neurovascular estava normal.\n\nO tratamento mais apropriado para esse paciente é:",
    "options": [
      "fixação externa",
      "redução aberta e fixação interna",
      "imobilização com uma tipoia e observação",
      "redução fechada e imobilização com gesso",
      "administração de analgésicos e alta para casa"
    ],
    "correctAnswer": 1,
    "explanation": "Fratura diafisária do úmero desviada, com exame neurovascular normal. Pelo gabarito oficial, a conduta é redução aberta e fixação interna (placa e parafusos ou haste intramedular), que permite reabilitação precoce e evita consolidação viciosa ou pseudoartrose em fratura com desvio importante em adulto ativo.\n\nVale lembrar que boa parte das fraturas diafisárias do úmero ainda é tratada de forma conservadora (tala pendente/órtese funcional de Sarmiento), com altas taxas de consolidação; a cirurgia é preferida em fraturas expostas, lesão vascular, politrauma, cotovelo flutuante, falha da redução ou desvio inaceitável.",
    "commentary": "Fixação externa (A): reservada para fraturas expostas com grande lesão de partes moles ou controle de danos.\n\nTipoia e observação (C): uma tipoia isolada não controla o alinhamento de fratura diafisária desviada.\n\nRedução fechada e gesso (D): o gesso circular fechado não é o método habitual no úmero; quando se opta pelo conservador, usa-se tala pendente seguida de órtese funcional.\n\nAnalgesia e alta (E): fratura desviada exige imobilização ou fixação.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Rockwood and Green's Fractures in Adults, 9ª ed.; Sociedade Brasileira de Ortopedia e Traumatologia",
    "tags": [
      "fratura de úmero",
      "ortopedia",
      "trauma"
    ],
    "alert": "Questão discutível: muitas fraturas diafisárias do úmero, mesmo desviadas, são tratadas de forma conservadora com órtese funcional. O gabarito oficial considera a fixação interna (B)."
  },
  {
    "id": "enare2025-27",
    "module": "Cirurgia",
    "text": "Após um traumatismo torácico contuso, um paciente apresenta sinais de tamponamento cardíaco, incluindo hipotensão, taquicardia, aumento da turgência jugular e pulso fino.\n\nA conduta clínico-cirúrgica mais apropriada para esse paciente é:",
    "options": [
      "realização de pericardiocentese emergencial",
      "ultrassonografia e punção aspirativa por agulha fina",
      "administração de fluidos intravenosos e monitoramento contínuo",
      "realização de toracotomia de emergência para drenagem do pericárdio",
      "inserção de um tubo torácico para drenagem do espaço pleural esquerdo"
    ],
    "correctAnswer": 3,
    "explanation": "Trauma torácico contuso com tríade de Beck (hipotensão, turgência jugular, abafamento de bulhas) e pulso fino: tamponamento cardíaco. O tamponamento traumático decorre de lesão cardíaca com sangramento contínuo no pericárdio, e o tratamento definitivo é cirúrgico — abertura do pericárdio (janela pericárdica, esternotomia ou toracotomia) com drenagem e reparo da lesão. Segundo o ATLS, a pericardiocentese é apenas medida temporária, quando não há cirurgião disponível, pois sangue coagulado no pericárdio frequentemente não é aspirado.",
    "commentary": "Pericardiocentese de emergência (A): é medida de contemporização na ausência de cirurgião capacitado; não é o tratamento definitivo do tamponamento traumático.\n\nUltrassom e punção por agulha fina (B): PAAF não tem papel; o FAST confirma o derrame, mas não trata.\n\nFluidos e monitorização (C): a reposição volêmica pode ganhar tempo, mas não resolve o tamponamento.\n\nDreno de tórax à esquerda (E): drena o espaço pleural, não o pericárdio.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "tamponamento cardíaco",
      "trauma torácico",
      "tríade de Beck",
      "toracotomia"
    ],
    "tip": "Tamponamento traumático: tratamento definitivo é cirúrgico; pericardiocentese só para ganhar tempo."
  },
  {
    "id": "enare2025-28",
    "module": "Cirurgia",
    "text": "Um paciente de 58 anos foi submetido a uma gastrectomia subtotal devido a um adenocarcinoma gástrico. Após a cirurgia, ele desenvolveu episódios frequentes de sudorese, palpitações, tonturas e diarreia após as refeições.\n\nEssa complicação pós-operatória está relacionada:",
    "options": [
      "ao desenvolvimento de diabetes mellitus tipo 2",
      "a uma trombose venosa profunda",
      "à síndrome de dumping",
      "ao aumento da densidade óssea",
      "à presença de úlcera alcalina"
    ],
    "correctAnswer": 2,
    "explanation": "Após gastrectomia (perda do piloro e do reservatório gástrico), o alimento hiperosmolar chega rapidamente ao delgado. Na síndrome de dumping precoce (15–30 minutos após a refeição), o deslocamento de líquido para a luz intestinal e a liberação de peptídeos vasoativos causam sudorese, palpitações, tontura, rubor, cólica e diarreia. No dumping tardio (1–3 horas), ocorre hipoglicemia reativa por pico de insulina. O tratamento é dietético: refeições pequenas e frequentes, pobres em carboidratos simples, sem líquidos junto às refeições; octreotida nos refratários.",
    "commentary": "Diabetes tipo 2 (A): não é complicação da gastrectomia; no dumping tardio ocorre hipoglicemia, não hiperglicemia persistente.\n\nTrombose venosa profunda (B): complicação pós-operatória geral, sem relação com sintomas pós-prandiais.\n\nAumento da densidade óssea (D): a gastrectomia leva a osteopenia por má absorção de cálcio e vitamina D, não ao aumento da densidade.\n\nÚlcera alcalina (E): a gastrite por refluxo alcalino (biliar) causa dor epigástrica e vômitos biliosos, não sintomas vasomotores pós-prandiais.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sabiston – Tratado de Cirurgia, 21ª ed.; Colégio Brasileiro de Cirurgia Digestiva",
    "tags": [
      "síndrome de dumping",
      "gastrectomia",
      "complicações pós-operatórias",
      "câncer gástrico"
    ],
    "tip": "Dumping precoce: sintomas vasomotores e diarreia 15–30 min após comer; tardio: hipoglicemia em 1–3 h."
  },
  {
    "id": "enare2025-29",
    "module": "Cirurgia",
    "text": "Uma paciente jovem, sem histórico familiar de câncer colorretal, apresenta sintomas como alterações no hábito intestinal, pequeno sangramento retal, dor abdominal, perda de peso inexplicada e palpação abdominal dolorosa no quadrante inferior direito.\n\nA hipótese diagnóstica mais provável é:",
    "options": [
      "síndrome do intestino irritável",
      "doença de Crohn",
      "retocolite ulcerativa",
      "polipose adenomatosa familiar",
      "síndrome de Gardner"
    ],
    "correctAnswer": 1,
    "explanation": "Paciente jovem com alteração do hábito intestinal, sangramento discreto, dor abdominal, emagrecimento e dor em quadrante inferior direito (região ileocecal) sugere doença de Crohn, que acomete preferencialmente o íleo terminal e o ceco, de forma transmural e salteada, com sintomas sistêmicos como perda de peso. A ausência de história familiar e a idade afastam as síndromes polipoides hereditárias.",
    "commentary": "Síndrome do intestino irritável (A): é diagnóstico de exclusão e não cursa com sinais de alarme (sangramento, perda de peso).\n\nRetocolite ulcerativa (C): acomete o reto e se estende de forma contínua; o sangramento costuma ser mais intenso, com diarreia mucossanguinolenta e tenesmo. A dor em fossa ilíaca direita aponta para o íleo terminal.\n\nPolipose adenomatosa familiar (D): doença hereditária com centenas de pólipos; a questão informa ausência de história familiar.\n\nSíndrome de Gardner (E): variante da PAF com osteomas e tumores desmoides.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Grupo de Estudos da Doença Inflamatória Intestinal do Brasil (GEDIIB) – Consenso de doença de Crohn",
    "tags": [
      "doença de Crohn",
      "doença inflamatória intestinal",
      "gastroenterologia"
    ],
    "tip": "Dor em fossa ilíaca direita + perda de peso + diarreia em jovem: pense em Crohn ileocecal."
  },
  {
    "id": "enare2025-30",
    "module": "Cirurgia",
    "text": "Um homem de 26 anos, atlético, em boas condições físicas, se apresenta ao pronto-socorro com dor abdominal intensa no quadrante inferior direito, que começou há 3 dias e piorou progressivamente. Ele relata náuseas, vômitos e febre. Ao exame físico, está taquicárdico, febril (38,5 °C), com defesa muscular e dor à descompressão brusca no quadrante inferior direito. A palpação abdominal revela sinais de irritação peritoneal. Os exames laboratoriais mostram leucocitose com desvio à esquerda. Uma tomografia computadorizada de abdômen revela apêndice distendido com parede espessada, líquido livre na cavidade abdominal e sinais de abscesso periapendicular.\n\nO diagnóstico mais provável e a abordagem mais adequada para esse paciente são, respectivamente:",
    "options": [
      "apendicite não complicada; apendicectomia laparoscópica com recomposição hidroeletrolítica e antibioticoterapia",
      "apendicite perfurada com peritonite; apendicectomia aberta, drenagem do abscesso e antibioticoterapia",
      "apendicite retrocecal; observação e antibioticoterapia",
      "gastroenterite viral; hidratação oral e observação",
      "doença inflamatória intestinal; corticosteroides e observação"
    ],
    "correctAnswer": 1,
    "explanation": "Dor em fossa ilíaca direita há 3 dias, febre, taquicardia, peritonite, leucocitose com desvio e TC com líquido livre e abscesso periapendicular: apendicite complicada (perfurada) com peritonite. Com peritonite difusa e instabilidade sistêmica, a conduta é cirúrgica (apendicectomia, drenagem do abscesso e lavagem), associada a antibioticoterapia de amplo espectro e reposição volêmica.\n\nA via pode ser aberta ou laparoscópica conforme a experiência; o gabarito considera a apendicectomia aberta com drenagem.",
    "commentary": "Apendicite não complicada (A): a TC mostra perfuração com abscesso; o diagnóstico está errado.\n\nApendicite retrocecal com observação (C): a posição do apêndice não define a conduta, e há peritonite que exige cirurgia.\n\nGastroenterite viral (D): não explica a peritonite nem o abscesso à TC.\n\nDoença inflamatória intestinal com corticoide (E): o quadro é agudo com abscesso periapendicular; corticoide agravaria a infecção.\n\nGabarito oficial do ENARE 2025.",
    "reference": "WSES Jerusalem Guidelines – Diagnosis and treatment of acute appendicitis (2020); Sabiston – Tratado de Cirurgia",
    "tags": [
      "apendicite aguda",
      "apendicite complicada",
      "peritonite",
      "abdome agudo inflamatório"
    ],
    "alert": "Hoje a laparoscopia também é aceita (e frequentemente preferida) na apendicite perfurada. A alternativa B é a melhor por trazer o diagnóstico correto e a abordagem completa (cirurgia, drenagem e antibiótico)."
  },
  {
    "id": "enare2025-31",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 22 anos apresentou quadro de dor pélvica súbita há cerca de 2 horas. Ao exame, constata-se que está hipocorada ++/4, com PA = 90 x 40 mmHg e FC = 118 bpm.\n\nSeu abdômen está atípico com dor à palpação difusa, mais acentuada em fossa ilíaca direita, com descompressão dolorosa.\n\nO diagnóstico mais provável é:",
    "options": [
      "apendicite aguda",
      "cisto ovariano direito roto",
      "gravidez tubária rota",
      "mittelschmerz",
      "torção de ovário direito"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem em idade fértil com dor pélvica súbita, choque hemorrágico (hipotensão, taquicardia, palidez) e irritação peritoneal mais intensa em fossa ilíaca direita: o diagnóstico mais provável é gravidez ectópica tubária rota, principal causa de hemoperitônio com instabilidade hemodinâmica nessa faixa etária. A conduta é β-hCG, estabilização e laparotomia/laparoscopia de urgência (salpingectomia).",
    "commentary": "Apendicite aguda (A): evolução mais insidiosa (horas a dias), com febre e dor migratória; não causa choque hipovolêmico em 2 horas.\n\nCisto ovariano roto (B): pode causar hemoperitônio, mas raramente com repercussão hemodinâmica tão grave; em idade fértil com choque, a primeira hipótese é ectópica rota.\n\nMittelschmerz (D): dor ovulatória leve e autolimitada, sem instabilidade.\n\nTorção ovariana (E): dor súbita com náuseas e vômitos, mas sem choque hemorrágico.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Protocolo de gravidez ectópica; Zugaib Obstetrícia, 5ª ed.",
    "tags": [
      "gravidez ectópica",
      "abdome agudo hemorrágico",
      "choque hemorrágico",
      "ginecologia"
    ],
    "tip": "Mulher em idade fértil + dor pélvica súbita + choque = ectópica rota até prova em contrário."
  },
  {
    "id": "enare2025-32",
    "module": "Cirurgia",
    "text": "Uma paciente de 23 anos realizou ultrassonografia abdominal de rotina, na qual foi observado nódulo sólido de 4 cm de diâmetro no fígado. Foi realizada tomografia abdominal com contraste venoso trifásico, que mostrou lesão hipercaptante, bem circuncrita, com cicatriz central localizada em segmento VII do fígado.\n\nDentre os diagnósticos abaixo, o mais provável é:",
    "options": [
      "adenoma hepático",
      "hepatocarcinoma",
      "hemangioma hepático",
      "hiperplasia nodular focal",
      "colangiocarcinoma periférico"
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo hepático sólido em mulher jovem, bem delimitado, hipercaptante na fase arterial e com cicatriz central: aspecto típico da hiperplasia nodular focal, segunda lesão hepática benigna mais comum. A cicatriz central (que realça tardiamente) corresponde a uma artéria anômala com septos fibrosos. É lesão benigna, sem potencial maligno e sem risco relevante de sangramento, que dispensa tratamento.",
    "commentary": "Adenoma hepático (A): também ocorre em mulheres jovens (associado a anticoncepcional), mas não tem cicatriz central e pode sangrar ou malignizar.\n\nHepatocarcinoma (B): ocorre em hepatopata crônico; tem realce arterial com lavagem (washout) na fase portal/tardia.\n\nHemangioma (C): realce periférico nodular e descontínuo com preenchimento centrípeto progressivo.\n\nColangiocarcinoma periférico (E): lesão infiltrativa com realce tardio e retração capsular, em pacientes mais velhos.\n\nGabarito oficial do ENARE 2025.",
    "reference": "EASL Clinical Practice Guidelines on the management of benign liver tumours (2016)",
    "tags": [
      "hiperplasia nodular focal",
      "nódulo hepático",
      "tumores hepáticos benignos",
      "radiologia"
    ],
    "tip": "Nódulo hepático hipervascular com cicatriz central em mulher jovem = HNF."
  },
  {
    "id": "enare2025-33",
    "module": "Cirurgia",
    "text": "Uma paciente de 24 anos chega ao consultório relatando dor anal intensa há 4 dias. Ao exame, constata-se nódulo violáceo perianal de 1 cm, localizado posterior à direita, distal à linha denteada e muito doloroso ao toque.\n\nDentre as condutas abaixo, a mais apropriada é:",
    "options": [
      "analgésicos tópico e oral, e banho de assento",
      "excisão do trombo com anestesia local",
      "ligadura elástica",
      "escleroterapia com fenol",
      "hemorroidectomia de urgência"
    ],
    "correctAnswer": 0,
    "explanation": "Nódulo perianal violáceo, doloroso, abaixo da linha denteada: trombose hemorroidária externa. A excisão do trombo traz alívio rápido quando feita nas primeiras 48–72 horas; depois disso (a paciente tem 4 dias de dor), o trombo já começa a ser reabsorvido e a dor tende a diminuir espontaneamente, e o tratamento conservador é o indicado: analgésicos orais e tópicos, banhos de assento mornos, dieta rica em fibras e emolientes fecais.",
    "commentary": "Excisão do trombo (B): é indicada nas primeiras 72 horas; com 4 dias de evolução, a conduta conservadora é preferível.\n\nLigadura elástica (C): é tratamento de hemorroidas internas (acima da linha denteada); na região externa, inervada, causaria dor intensa.\n\nEscleroterapia (D): também é para hemorroidas internas de pequeno grau.\n\nHemorroidectomia de urgência (E): reservada para doença hemorroidária interna grau IV complicada ou trombose extensa com necrose.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Coloproctologia; ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids (2018)",
    "tags": [
      "trombose hemorroidária",
      "doença hemorroidária",
      "coloproctologia"
    ],
    "tip": "Trombose hemorroidária externa: até 72 h → excisão; depois → conservador."
  },
  {
    "id": "enare2025-34",
    "module": "Cirurgia",
    "text": "O escore BISAP tem sido amplamente utilizado na avaliação prognóstica da pancreatite aguda.\n\nDentre os critérios abaixo, o único que NÃO faz parte desse escore é:",
    "options": [
      "presença de derrame pleural",
      "glicemia maior que 200 mg/dL",
      "ureia nitrogenada sérica maior que 25 mg/dL",
      "idade maior que 60 anos",
      "alteração do estado mental"
    ],
    "correctAnswer": 1,
    "explanation": "O BISAP (Bedside Index for Severity in Acute Pancreatitis) é um escore simples, aplicado nas primeiras 24 horas, com 5 critérios (1 ponto cada): BUN > 25 mg/dL, Impaired mental status (alteração do estado mental), SIRS (≥ 2 critérios), Age > 60 anos e Pleural effusion (derrame pleural). Pontuação ≥ 3 indica maior risco de mortalidade. A glicemia > 200 mg/dL faz parte dos critérios de Ranson (admissão), não do BISAP.",
    "commentary": "Derrame pleural (A), ureia nitrogenada > 25 mg/dL (C), idade > 60 anos (D) e alteração do estado mental (E): todos fazem parte do BISAP. O único critério que não pertence ao escore é a glicemia > 200 mg/dL (B).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Wu BU et al. The early prediction of mortality in acute pancreatitis (BISAP), Gut 2008",
    "tags": [
      "pancreatite aguda",
      "BISAP",
      "escores prognósticos",
      "gastroenterologia"
    ],
    "tip": "BISAP = BUN, Impaired mental status, SIRS, Age > 60, Pleural effusion."
  },
  {
    "id": "enare2025-35",
    "module": "Cirurgia",
    "text": "Um paciente de 58 anos buscou atendimento médico queixando-se de febre e dor em fossa ilíaca esquerda. Realizou tomografia, que mostrou sigmoide espessado com vários divertículos e presença de abscesso pericólico de 6 cm, restrito ao mesentério.\n\nA melhor conduta inicial para esse paciente é:",
    "options": [
      "antibioticoterapia oral ambulatorial",
      "antibioticoterapia venosa exclusiva",
      "antibioticoterapia venosa e drenagem percutânea",
      "laparotomia com irrigação da cavidade abdominal",
      "laparotomia com procedimento de Hartmann"
    ],
    "correctAnswer": 2,
    "explanation": "Diverticulite aguda complicada com abscesso pericólico de 6 cm (Hinchey Ib/II, restrito ao mesentério). Abscessos maiores que 3–4 cm devem ser drenados por via percutânea guiada por imagem, associada a antibioticoterapia venosa; abscessos pequenos (< 3–4 cm) costumam responder apenas ao antibiótico. A drenagem percutânea evita a cirurgia de urgência e permite, se necessário, uma colectomia eletiva em um tempo.",
    "commentary": "Antibiótico oral ambulatorial (A): reservado à diverticulite não complicada em paciente sem comorbidades.\n\nAntibiótico venoso exclusivo (B): adequado para abscessos pequenos (< 3–4 cm); com 6 cm a chance de falha é alta.\n\nLaparotomia com irrigação (D) e procedimento de Hartmann (E): indicados em peritonite purulenta ou fecal (Hinchey III/IV) ou falha do tratamento percutâneo.\n\nGabarito oficial do ENARE 2025.",
    "reference": "WSES Guidelines for the management of acute left sided colonic diverticulitis (2020); ASCRS Clinical Practice Guidelines (2020)",
    "tags": [
      "diverticulite aguda",
      "abscesso",
      "drenagem percutânea",
      "classificação de Hinchey"
    ],
    "tip": "Diverticulite com abscesso > 3–4 cm: antibiótico + drenagem percutânea."
  },
  {
    "id": "enare2025-36",
    "module": "Cirurgia",
    "text": "Uma paciente de 45 anos, com diagnóstico de colelitíase há 1 ano, apresenta dor em hipocôndrio direito, icterícia ++/4, temperatura axilar de 38 °C, PA: 110 x 70 mmHg e bilirrubina total de 4,6 mg/dL, com bilirrubina direta de 3,2 mg/dL. Realizou ultrassonografia de abdômen, que mostrou vesícula de paredes finas, contendo múltiplos cálculos e discreta dilatação das vias biliares extra-hepáticas.\n\nAlém da antibioticoterapia venosa, a conduta mais apropriada neste momento é:",
    "options": [
      "hidratação e medidas de suporte, somente",
      "papilotomia endoscópica de urgência",
      "drenagem cirúrgica das vias biliares com dreno de Kehr",
      "colecistectomia de urgência com colangiografia",
      "drenagem biliar externa trans-hepática"
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com colelitíase, febre, dor em hipocôndrio direito e icterícia (tríade de Charcot), com dilatação discreta da via biliar: colangite aguda. Está hemodinamicamente estável, consciente e sem disfunção orgânica — colangite leve (grau I de Tóquio). Nesse grau, a maioria responde a antibiótico e medidas de suporte (hidratação, analgesia), com drenagem biliar (CPRE) se não houver resposta em 24–48 horas, e programação da desobstrução/colecistectomia.\n\nPor isso o gabarito considera, além do antibiótico, apenas hidratação e suporte neste momento.",
    "commentary": "Papilotomia endoscópica de urgência (B): indicada na colangite grave (grau III), após estabilização, ou na moderada de forma precoce; na leve, pode ser eletiva se houver boa resposta ao antibiótico.\n\nDreno de Kehr (C): drenagem cirúrgica aberta é exceção, quando a endoscópica e a percutânea falham.\n\nColecistectomia de urgência com colangiografia (D): com colangite ativa, primeiro se trata a infecção e desobstrui a via biliar; a colecistectomia vem depois.\n\nDrenagem trans-hepática (E): alternativa quando a CPRE não é possível, em casos graves.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Tokyo Guidelines 2018 – Diagnosis and management of acute cholangitis",
    "tags": [
      "colangite aguda",
      "tríade de Charcot",
      "coledocolitíase",
      "diretrizes de Tóquio",
      "CPRE"
    ],
    "alert": "Questão discutível: muitos serviços indicam CPRE precoce (em até 48–72 h) já na colangite leve com dilatação da via biliar. O gabarito oficial considera o tratamento clínico inicial (A)."
  },
  {
    "id": "enare2025-37",
    "module": "Cirurgia",
    "text": "Um homem de 28 anos, admitido no pronto-socorro após um acidente automobilístico, apresenta ectoscopicamente sinais evidentes de trauma abdominal. Na avaliação neurológica inicial, está consciente, mas confuso. Seus sinais vitais são: pressão arterial de 85/60 mmHg, frequência cardíaca de 130 bpm, frequência respiratória de 28 ipm, saturação de oxigênio de 94% em ar ambiente. Sua pele está fria e pegajosa, com enchimento capilar prolongado.\n\nRefere dor intensa no abdômen. O abdômen está tenso e distendido, com dor à palpação e sem peristaltismo audível.\n\nOs exames complementares mostram hemoglobina 8 g/dL com hematócrito de 24%. Foi realizado um FAST (Focused Assessment with Sonography for Trauma), que mostrou líquido livre na cavidade peritoneal. Radiografia de tórax e pelve não mostrou fraturas.\n\nNesse momento, seu diagnóstico é de choque hipovolêmico grau III por hemorragia intra-abdominal.\n\nA conduta adotada deverá ser:",
    "options": [
      "administração de solução salina isotônica e monitoramento em observação",
      "transfusão sanguínea de hemoderivados na relação 1/1/1 e intervenção cirúrgica imediata",
      "administração de medicamentos vasopressores para aumentar a pressão arterial",
      "administração de diuréticos para reduzir a pressão intra-abdominal",
      "realização de tomografia computadorizada (TC) de abdômen para avaliação adicional antes de qualquer intervenção"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma abdominal com choque hemorrágico classe III (FC 130, PA 85/60, confusão, pele fria e enchimento lento), abdome tenso e FAST positivo. A conduta é ressuscitação hemostática — transfusão precoce de concentrado de hemácias, plasma e plaquetas em proporção 1:1:1, com mínimo de cristaloide e ácido tranexâmico nas primeiras 3 horas — e laparotomia imediata para controle do sangramento. Não se deve atrasar a cirurgia para exames.",
    "commentary": "Soro fisiológico e observação (A): cristaloide em excesso piora a coagulopatia; e o paciente instável com FAST positivo precisa de cirurgia.\n\nVasopressores (C): no choque hipovolêmico, aumentam a mortalidade antes da reposição volêmica e do controle do sangramento.\n\nDiuréticos (D): não têm papel e agravariam a hipovolemia.\n\nTC antes de intervir (E): TC é para paciente estável; o instável não deve sair da sala de trauma para tomografia.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "choque hemorrágico",
      "trauma abdominal",
      "FAST",
      "protocolo de transfusão maciça",
      "laparotomia"
    ],
    "tip": "Instável + FAST positivo = centro cirúrgico, com hemoderivados 1:1:1."
  },
  {
    "id": "enare2025-38",
    "module": "Cirurgia",
    "text": "Um paciente de 81 anos, com diagnóstico de doença pulmonar obstrutiva crônica e insuficiência cardíaca congestiva, é internado para tratamento de pneumonia. Após alguns dias de tratamento com antibióticos e repouso no leito, ele começa a apresentar distensão abdominal significativa, dor leve e náuseas, mas sem vômitos. Não apresenta sinais clínicos de peritonite aos exames físico e laboratorial. Radiografias do abdômen mostram dilatação importante dos cólons, principalmente no ceco e cólon ascendente, porém sem evidência de obstrução mecânica.\n\nDiante desse quadro clínico, o diagnóstico mais provável e a melhor abordagem inicial para o manejo desse paciente são, respectivamente:",
    "options": [
      "síndrome de Ogilvie e tratamento com neostigmina",
      "colite pseudomembranosa e tratamento com metronidazol",
      "obstrução intestinal por brida e tratamento com cirurgia exploratória",
      "volvo de sigmoide e tratamento com sigmoidoscopia descompressiva",
      "íleo paralítico e tratamento com reposição de eletrólitos e mobilização precoce"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso internado com doenças graves, acamado, que desenvolve distensão colônica importante (sobretudo ceco e cólon ascendente) sem obstrução mecânica e sem peritonite: pseudo-obstrução colônica aguda (síndrome de Ogilvie). Após medidas iniciais (jejum, sonda, correção de eletrólitos, suspensão de opioides/anticolinérgicos), se não houver melhora ou o ceco estiver muito dilatado (> 10–12 cm), usa-se neostigmina IV (sob monitorização cardíaca, pelo risco de bradicardia). Colonoscopia descompressiva é a opção seguinte.",
    "commentary": "Colite pseudomembranosa com metronidazol (B): há uso de antibiótico, mas o quadro típico tem diarreia, febre e leucocitose; e o tratamento de escolha hoje é vancomicina ou fidaxomicina oral.\n\nObstrução por brida com cirurgia (C): a radiografia mostra ausência de obstrução mecânica e o paciente não tem cirurgia prévia relatada.\n\nVolvo de sigmoide (D): causa sinal do “grão de café” com dilatação do sigmoide, não predomínio de ceco e cólon direito.\n\nÍleo paralítico (E): acomete delgado e cólon de forma difusa; a dilatação predominante do cólon direito sem obstrução define Ogilvie.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ASCRS Clinical Practice Guidelines for Colonic Volvulus and Acute Colonic Pseudo-Obstruction (2021)",
    "tags": [
      "síndrome de Ogilvie",
      "pseudo-obstrução colônica",
      "neostigmina",
      "coloproctologia"
    ],
    "tip": "Idoso internado + distensão de ceco sem obstrução = Ogilvie → neostigmina."
  },
  {
    "id": "enare2025-39",
    "module": "Cirurgia",
    "text": "Um paciente de 55 anos apresenta-se no consultório com queixa de uma protuberância na região inguinal direita que se estende até o escroto. Ele relata que a protuberância aparece principalmente quando faz esforço físico, como levantar pesos, e desaparece quando está deitado. Não há sinais de dor intensa, febre ou outros sintomas sistêmicos. Ao exame físico, observa-se uma massa inguinoescrotal redutível ao repouso e com manobras de redução manual. Não há sinais de estrangulamento ou obstrução.\n\nA melhor técnica cirúrgica para tratar a hérnia inguinoescrotal redutível desse paciente será:",
    "options": [
      "herniorrafia convencional pela técnica de Shouldice",
      "redução digital, observação clínica sem intervenção cirúrgica e uso de funda",
      "herniorrafia laparoscópica transabdominal pré-peritoneal (TAPP)",
      "herniorrafia convencional pela técnica de Lichtenstein",
      "herniorrafia convencional sem reforço de tecido à Bassini"
    ],
    "correctAnswer": 3,
    "explanation": "Hérnia inguinoescrotal redutível e sintomática em adulto deve ser operada. A técnica de referência para correção aberta é a de Lichtenstein — hernioplastia com tela de polipropileno sem tensão —, recomendada pelas diretrizes internacionais por baixa recidiva, curva de aprendizado curta e possibilidade de anestesia local. Hérnias inguinoescrotais volumosas são, além disso, situação em que a via aberta costuma ser preferida à laparoscópica.",
    "commentary": "Shouldice (A): técnica sem tela com bons resultados em centros especializados, mas recidiva maior em mãos não especializadas; não é a técnica de escolha geral.\n\nRedução, observação e funda (B): hérnia sintomática em adulto saudável deve ser operada; funda não é tratamento.\n\nTAPP (C): ótima opção para hérnias bilaterais ou recidivadas após via anterior; nas inguinoescrotais volumosas a dissecção laparoscópica é mais difícil.\n\nBassini (E): técnica com tensão e sem tela, com recidiva elevada.\n\nGabarito oficial do ENARE 2025.",
    "reference": "HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "técnica de Lichtenstein",
      "hernioplastia",
      "cirurgia geral"
    ],
    "tip": "Hérnia inguinal primária unilateral, via aberta: Lichtenstein."
  },
  {
    "id": "enare2025-40",
    "module": "Cirurgia",
    "text": "Durante o pneumoperitônio para realização de cirurgias por acesso videolaparoscópico, algumas alterações hemodinâmicas podem ocorrer no paciente.\n\nEm relação a essas alterações, é correto afirmar que:",
    "options": [
      "há diminuição do débito cardíaco, com aumento do retorno venoso",
      "ocorre hipotensão por compressão mecânica da aorta abdominal",
      "a oligúria ocorre devido à hipercapnia e retenção de bicarbonato pelos rins",
      "a bradicardia ocorre por estímulo vasovagal pela distensão abdominal",
      "arritmias cardíacas e outros distúrbios de ritmo cardíaco são raros"
    ],
    "correctAnswer": 3,
    "explanation": "Durante a insuflação do pneumoperitônio, a distensão súbita do peritônio estimula o vago e pode causar bradicardia, às vezes intensa (até assistolia), sobretudo na insuflação inicial. É uma das alterações hemodinâmicas descritas na videolaparoscopia, tratada com desinsuflação e atropina.",
    "commentary": "Diminuição do débito com aumento do retorno venoso (A): a pressão intra-abdominal comprime a veia cava e reduz o retorno venoso.\n\nHipotensão por compressão da aorta (B): o efeito habitual é aumento da resistência vascular sistêmica e da pressão arterial (pela compressão arterial e pela liberação de catecolaminas e vasopressina).\n\nOligúria por hipercapnia e retenção de bicarbonato (C): a oligúria decorre da compressão de veias e parênquima renal e da liberação de ADH, não da retenção de bicarbonato.\n\nArritmias raras (E): arritmias são frequentes pela hipercapnia, estímulo vagal e embolia gasosa.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Miller's Anesthesia, 9ª ed. (anestesia para cirurgia laparoscópica)",
    "tags": [
      "videolaparoscopia",
      "pneumoperitônio",
      "fisiologia cirúrgica",
      "anestesiologia"
    ],
    "tip": "Insuflação do pneumoperitônio pode dar bradicardia vagal: desinsufla e atropina."
  },
  {
    "id": "enare2025-41",
    "module": "Pediatria",
    "text": "Uma adolescente de 12 anos apresenta pelos espessos e esparsos em genitália e mamas/mamilos aumentados, sem contorno definido.\n\nÉ correto afirmar que:",
    "options": [
      "a adolescente tem o desenvolvimento puberal adequado para a sua idade",
      "a adolescente tem o desenvolvimento puberal atrasado para a sua idade",
      "o diagnóstico de pubarca precoce deve ser investigado",
      "o diagnóstico de telarca precoce deve ser investigado",
      "os dados apresentados não permitem avaliação do desenvolvimento puberal"
    ],
    "correctAnswer": 4,
    "explanation": "A descrição mistura características de estágios de Tanner diferentes: pelos “espessos” correspondem a P3 (pelos escuros, mais grossos e encaracolados), enquanto “esparsos” são próprios de P2; e “mamas e mamilos aumentados sem contorno definido” corresponde a M3 (aumento da mama e da aréola sem separação de contornos). Como as informações são incompletas e contraditórias e não há dados de crescimento nem de idade de início, o gabarito considera que não é possível avaliar o desenvolvimento puberal.",
    "commentary": "Desenvolvimento adequado (A) e atrasado (B): seria preciso definir com clareza os estágios e contextualizar com a idade de início e a velocidade de crescimento; a descrição não permite essa conclusão.\n\nPubarca precoce (C) e telarca precoce (D): só se fala em precocidade antes dos 8 anos nas meninas; aos 12 anos esses diagnósticos não se aplicam.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Adolescência; Tanner JM. Growth at Adolescence",
    "tags": [
      "puberdade",
      "estágios de Tanner",
      "adolescência",
      "crescimento e desenvolvimento"
    ],
    "alert": "Questão discutível: se a descrição for lida como M3/P3 aos 12 anos, o desenvolvimento seria adequado (A). O gabarito oficial considera que os dados não permitem a avaliação (E)."
  },
  {
    "id": "enare2025-42",
    "module": "Pediatria",
    "text": "Um recém-nascido de 21 dias, com idade gestacional de 32 semanas, peso de nascimento de 1.600 g, está internado na UTI neonatal com sépsis, em suporte ventilatório e hemodinâmico. A vacinação do paciente deve:",
    "options": [
      "ocorrer de acordo com sua idade corrigida",
      "ocorrer imediatamente para estimulação imunológica",
      "ser realizada quando a criança tiver peso acima de 3 kg",
      "ser realizada após a alta hospitalar",
      "ser realizada durante a internação, sem vacinas com vírus vivos"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo gabarito oficial, a vacinação do prematuro internado deve seguir a idade corrigida.\n\nAtenção: o Manual dos CRIE e a Sociedade Brasileira de Pediatria recomendam vacinar o prematuro de acordo com a idade cronológica, nas mesmas doses, sem esperar ganho de peso ou alta (exceções: BCG só a partir de 2 kg, e vacina rotavírus de vírus vivo pode ser adiada para a alta). O recém-nascido de 21 dias, internado, deve receber as vacinas previstas conforme sua idade cronológica, desde que clinicamente estável.",
    "commentary": "Vacinação imediata para estimulação imunológica (B): não há benefício em antecipar o calendário; a vacinação segue as idades previstas e é adiada em instabilidade grave (sepse em suporte hemodinâmico).\n\nAguardar peso acima de 3 kg (C): não existe essa exigência; só a BCG exige 2 kg.\n\nSomente após a alta (D): o prematuro internado deve ser vacinado no hospital conforme o calendário.\n\nDurante a internação sem vacinas vivas (E): é a recomendação para a rotavírus em algumas unidades, mas a regra geral é vacinar pela idade cronológica.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE), 6ª ed.; SBP/SBIm – Calendário de vacinação do prematuro",
    "tags": [
      "vacinação",
      "prematuridade",
      "imunizações",
      "neonatologia"
    ],
    "alert": "Gabarito discutível: segundo o Manual dos CRIE e a SBIm/SBP, o prematuro é vacinado pela idade cronológica, não pela corrigida. Mantida a resposta oficial (A)."
  },
  {
    "id": "enare2025-43",
    "module": "Pediatria",
    "text": "Um lactente de 10 meses apresentou febre alta (39 °C) e coriza hialina por 3 dias. No quarto dia de doença, 12 horas após o último pico febril, surge exantema maculopapular em tronco que se dissemina para os membros. Ao exame, apresenta discreta hiperemia de orofaringe, linfonodos cervicais sem características inflamatórias e exantema maculopapular eritematoso difuso.\n\nDiante desse quadro, o diagnóstico correto é:",
    "options": [
      "escarlatina",
      "sarampo",
      "varicela",
      "rubéola",
      "exantema súbito"
    ],
    "correctAnswer": 4,
    "explanation": "Lactente de 10 meses com febre alta por 3 dias, bom estado geral e exantema maculopapular que surge após o desaparecimento da febre, começando no tronco: quadro clássico do exantema súbito (roséola infantum), causado pelo herpesvírus humano 6 (e 7), típico de crianças entre 6 meses e 2 anos. O tratamento é sintomático.",
    "commentary": "Escarlatina (A): exantema micropapular áspero (“lixa”), com febre concomitante, faringoamigdalite, língua em framboesa e sinal de Pastia, mais comum em escolares.\n\nSarampo (B): exantema surge com a febre ainda alta, precedido por tosse, coriza, conjuntivite e manchas de Koplik; progride craniocaudalmente.\n\nVaricela (C): exantema vesicular polimórfico e pruriginoso.\n\nRubéola (D): exantema róseo craniocaudal com febre baixa e linfadenopatia retroauricular e occipital.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria, 5ª ed. (doenças exantemáticas)",
    "tags": [
      "exantema súbito",
      "roséola",
      "herpesvírus humano 6",
      "doenças exantemáticas",
      "infectologia pediátrica"
    ],
    "tip": "Febre alta 3 dias → some a febre → aparece o exantema = exantema súbito."
  },
  {
    "id": "enare2025-44",
    "module": "Pediatria",
    "text": "Os pais de um escolar em tratamento de rinite alérgica com corticoide nasal procuraram o posto de saúde para aplicação da vacina HPV (papilomavírus humano).\n\nEm vista do quadro apresentado, o agente do posto de saúde deverá:",
    "options": [
      "orientar os pais a vacinarem a criança após o término do tratamento",
      "suspender a medicação por 7 dias após a vacinação",
      "vacinar a criança com as orientações habituais",
      "vacinar a criança com a dose dobrada da vacina",
      "vacinar a criança, advertindo quanto à possibilidade de reações vacinais mais intensas"
    ],
    "correctAnswer": 2,
    "explanation": "Corticoide nasal tem ação tópica e não causa imunossupressão sistêmica. Além disso, a vacina HPV é inativada (partículas semelhantes a vírus), podendo ser aplicada mesmo em imunossuprimidos. Logo, não há contraindicação nem necessidade de adiar: vacina-se a criança com as orientações habituais.",
    "commentary": "Vacinar após o término do tratamento (A): adiamento desnecessário, com risco de perder a oportunidade vacinal.\n\nSuspender a medicação por 7 dias (B): não há interação entre corticoide nasal e vacina.\n\nDose dobrada (D): não existe recomendação de dobrar dose em nenhuma situação.\n\nAdvertir sobre reações mais intensas (E): o corticoide tópico não aumenta as reações vacinais.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manual de Normas e Procedimentos para Vacinação; Manual dos CRIE",
    "tags": [
      "vacina HPV",
      "contraindicações vacinais",
      "corticoide",
      "imunizações"
    ],
    "tip": "Corticoide tópico/inalatório não contraindica vacina nenhuma."
  },
  {
    "id": "enare2025-45",
    "module": "Pediatria",
    "text": "Dentre as situações a seguir, aquela em que o recém-nascido tem dois critérios para icterícia patológica é:",
    "options": [
      "RN a termo, icterícia desde 37 horas de vida, bilirrubina total = 4 mg/dl, bilirrubina indireta = 3,1 mg/dl",
      "RN prematuro, 6º dia de vida, bilirrubina total = 3 mg/dl, bilirrubina indireta = 2,2 mg/dl",
      "RN a termo, icterícia desde 12 horas de vida, bilirrubina total = 2 mg/dl, bilirrubina indireta = 0,8 mg/dl",
      "RN prematuro, 39 horas de vida, bilirrubina total = 8 mg/dl, aumento de bilirrubina em seis horas = 0,1 mg/dl/hora",
      "RN prematuro, grupo sanguíneo/RH: RN = O+ e mãe =A+, ictérico no 12º dia de vida"
    ],
    "correctAnswer": 2,
    "explanation": "Critérios de icterícia neonatal patológica: início nas primeiras 24 horas de vida; aumento de bilirrubina > 0,5 mg/dL/h (ou > 5 mg/dL/dia); bilirrubina total acima do limiar de fototerapia para a idade; bilirrubina direta > 1 mg/dL (se BT ≤ 5 mg/dL) ou > 20% da BT; e icterícia persistente após 8 dias no termo ou 14 dias no prematuro.\n\nNa alternativa C há dois critérios: icterícia com 12 horas de vida (antes de 24 h) e bilirrubina direta de 1,2 mg/dL (BT 2 − BI 0,8), acima de 1 mg/dL.",
    "commentary": "RN a termo com icterícia desde 37 h e BD 0,9 (A): início após 24 h e BD < 1 mg/dL; nenhum critério.\n\nPrematuro no 6º dia com BT 3 (B): BD de 0,8 mg/dL e prematuro ainda dentro do prazo; nenhum critério.\n\nPrematuro com 39 h e aumento de 0,1 mg/dL/h (D): aumento abaixo de 0,5 mg/dL/h e início após 24 h.\n\nPrematuro ictérico no 12º dia, RN O+ e mãe A+ (E): no prematuro, prolongada é após 14 dias; e não há incompatibilidade ABO clássica (mãe O, RN A ou B).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Icterícia no recém-nascido com idade gestacional ≥ 35 semanas; Ministério da Saúde – Atenção à Saúde do Recém-Nascido",
    "tags": [
      "icterícia neonatal",
      "hiperbilirrubinemia",
      "neonatologia"
    ],
    "tip": "Icterícia nas primeiras 24 h é sempre patológica."
  },
  {
    "id": "enare2025-46",
    "module": "Pediatria",
    "text": "Segundo os critérios de ROMA IV para lactentes, escolares e adolescentes, na síndrome do intestino irritável:",
    "options": [
      "a criança tem diarreia associada a perda ponderal nos últimos 2 meses",
      "a dor abdominal é aliviada após resolução da constipação",
      "a dor abdominal é acompanhada de alteração na frequência das evacuações",
      "a criança tem evacuação Bristol 6 na primeira evacuação do dia, seguida por Bristol 1 nas demais evacuações",
      "os sintomas acontecem por pelo menos 1 mês antes do diagnóstico"
    ],
    "correctAnswer": 2,
    "explanation": "Pelos critérios de Roma IV para crianças e adolescentes, a síndrome do intestino irritável exige dor abdominal em pelo menos 4 dias por mês, por pelo menos 2 meses, associada a um ou mais dos seguintes: relação com a evacuação, mudança na frequência das evacuações ou mudança na forma (aparência) das fezes. Além disso, se há constipação, a dor não deve desaparecer com a resolução dela, e os sintomas não podem ser explicados por outra condição após avaliação adequada.",
    "commentary": "Diarreia com perda ponderal (A): perda de peso é sinal de alarme e sugere doença orgânica.\n\nDor aliviada com a resolução da constipação (B): nesse caso o diagnóstico é constipação funcional, não SII.\n\nBristol 6 seguido de Bristol 1 no mesmo dia (D): não é critério diagnóstico.\n\nSintomas por pelo menos 1 mês (E): Roma IV pediátrico exige pelo menos 2 meses.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Hyams JS et al. Childhood Functional Gastrointestinal Disorders: Child/Adolescent (Roma IV), Gastroenterology 2016",
    "tags": [
      "síndrome do intestino irritável",
      "critérios de Roma IV",
      "distúrbios gastrointestinais funcionais",
      "gastroenterologia pediátrica"
    ],
    "tip": "Roma IV pediátrico: 2 meses de sintomas (no adulto, 6 meses de início e 3 de critérios)."
  },
  {
    "id": "enare2025-47",
    "module": "Pediatria",
    "text": "M-CHAT-R é um teste utilizado no transtorno do espectro autista para:",
    "options": [
      "diagnóstico da síndrome de Asperger",
      "triagem dos sinais precoces",
      "acompanhamento do neurodesenvolvimento",
      "avaliação de TEA entre 9 e 15 meses de idade",
      "estadiamento do grau de autismo"
    ],
    "correctAnswer": 1,
    "explanation": "O M-CHAT-R/F é um instrumento de rastreamento (triagem) de sinais precoces de risco para transtorno do espectro autista, aplicado entre 16 e 30 meses, respondido pelos pais (20 perguntas), com entrevista de seguimento para os resultados intermediários. Ele não faz diagnóstico: identifica crianças que devem ser encaminhadas para avaliação especializada. No Brasil, é aplicação obrigatória nas consultas de rotina pelo SUS (Lei 13.438/2017) e está na Caderneta da Criança.",
    "commentary": "Diagnóstico da síndrome de Asperger (A): o M-CHAT-R não é diagnóstico, e o termo Asperger foi incorporado ao TEA no DSM-5.\n\nAcompanhamento do neurodesenvolvimento (C): o acompanhamento global é feito com os marcos da Caderneta e outros instrumentos; o M-CHAT-R é específico para risco de TEA.\n\nEntre 9 e 15 meses (D): a faixa validada é de 16 a 30 meses.\n\nEstadiamento do grau de autismo (E): os níveis de suporte são definidos na avaliação diagnóstica (DSM-5).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Orientação: Transtorno do Espectro do Autismo (2019); Ministério da Saúde – Caderneta da Criança",
    "tags": [
      "transtorno do espectro autista",
      "M-CHAT-R",
      "rastreamento",
      "neurodesenvolvimento"
    ],
    "tip": "M-CHAT-R: triagem de TEA entre 16 e 30 meses."
  },
  {
    "id": "enare2025-48",
    "module": "Pediatria",
    "text": "Uma primípara comparece à consulta de puericultura com seu filho de 2 meses. Durante a consulta, o pediatra percebe que ela está prestes a abandonar o aleitamento materno exclusivo e conduz a conversa de forma a mantê-lo.\n\nNessa conversa é importante ser empático, evitando:",
    "options": [
      "fazer perguntas abertas que permitam à mãe expressar argumentos contra a manutenção da amamentação",
      "recorrer à comunicação não verbal, uma vez que esta pode induzir a erros de interpretação, tornar-se inapropriada ou gerar problemas éticos",
      "aceitar as opiniões da mãe durante a conversa, a fim de demonstrar, de forma clara e incisiva, que a posição expressa nessas opiniões está equivocada",
      "usar palavras que possam ser interpretadas como julgamento, exceto quando possam efetivamente levar ao desmame",
      "subestimar os sentimentos da mãe, a fim de demonstrar, durante a conversa, que eles podem ser compreendidos e valorizados"
    ],
    "correctAnswer": 4,
    "explanation": "No aconselhamento em amamentação (OMS/Ministério da Saúde), as habilidades de ouvir e aprender incluem usar comunicação não verbal útil, fazer perguntas abertas, demonstrar empatia — mostrar à mãe que entende como ela se sente — e evitar palavras que soem como julgamento. Para construir confiança, aceita-se o que a mãe pensa e sente (sem concordar nem discordar), reconhece-se o que ela faz certo e oferecem-se poucas informações relevantes em linguagem simples.\n\nSer empático implica justamente não subestimar os sentimentos da mãe; por isso, o que se deve evitar é subestimá-los.",
    "commentary": "Evitar perguntas abertas (A): perguntas abertas são recomendadas, pois permitem que a mãe se expresse.\n\nEvitar comunicação não verbal (B): a comunicação não verbal útil (postura, contato visual, toque apropriado) é uma das habilidades recomendadas.\n\nAceitar opiniões para mostrar que estão equivocadas (C): aceitar é acolher sem julgamento, não preparar uma contestação incisiva.\n\nEvitar julgamento, exceto quando possa levar ao desmame (D): palavras de julgamento devem ser evitadas sempre.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde/OMS – Aconselhamento em amamentação: um curso de treinamento; Caderno de Atenção Básica nº 23 – Saúde da Criança: aleitamento materno",
    "tags": [
      "aleitamento materno",
      "aconselhamento",
      "comunicação",
      "puericultura"
    ],
    "tip": "Aconselhamento em amamentação: perguntas abertas, empatia, aceitar sem julgar."
  },
  {
    "id": "enare2025-49",
    "module": "Pediatria",
    "text": "Uma adolescente com 11 anos é levada à emergência em pediatria por apresentar vômitos.\n\nReside com a avó, que informalmente assumiu a guarda e que frequentemente desvaloriza os genitores, pois a adolescente fora abandonada pela mãe por ser fruto de gestação não desejada e nunca teve contato com o pai. A avó está em tratamento de depressão, imputando seu sofrimento à adolescente.\n\nNesse caso, a notificação:",
    "options": [
      "deverá ser feita, pois existem fatos justificando a suspeita de violência",
      "somente será feita após a localização da mãe, que possui a guarda legal",
      "deve ser registrada após concordância de ambas as envolvidas no caso",
      "só poderá ser feita caso existam provas da violência contra a adolescente",
      "poderá ocorrer caso a adolescente manifeste o desejo de que haja denúncia"
    ],
    "correctAnswer": 0,
    "explanation": "Há elementos que configuram suspeita de violência psicológica e negligência contra a adolescente (abandono materno, desvalorização constante dos genitores, atribuição do sofrimento da avó à adolescente, guarda informal). Pelo ECA (art. 13) e pelas normas de vigilância, a suspeita ou confirmação de violência contra criança ou adolescente é de notificação compulsória ao Conselho Tutelar e no SINAN. A notificação não exige provas, autorização de responsáveis ou desejo da vítima.",
    "commentary": "Após localizar a mãe (B): a notificação não depende do responsável legal.\n\nCom concordância das envolvidas (C): a notificação é obrigatória e independe de autorização.\n\nSomente com provas (D): basta a suspeita.\n\nSe a adolescente desejar a denúncia (E): notificação não é denúncia policial, e não depende da vontade da vítima.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Estatuto da Criança e do Adolescente (Lei 8.069/1990), arts. 13 e 245; Ministério da Saúde – Linha de cuidado para atenção integral à saúde de crianças, adolescentes e suas famílias em situação de violências",
    "tags": [
      "violência contra criança e adolescente",
      "notificação compulsória",
      "ECA",
      "violência psicológica"
    ],
    "tip": "Violência contra criança ou adolescente: suspeita já obriga a notificar."
  },
  {
    "id": "enare2025-50",
    "module": "Pediatria",
    "text": "Um adolescente saudável de 16 anos comparece à clínica da família para atualizar sua situação vacinal. Alega que só recebeu vacinas no primeiro ano de vida, mas, 2 meses antes, fez uma dose de vacina para difteria e tétano (dT), para se matricular em um curso. Em sua caderneta da criança, há registro das seguintes vacinas: duas doses da vacina contra hepatite B (HB); duas doses da vacina contra difteria, tétano e pertússis (DTP); uma dose da vacina contra febre amarela (VFA); uma dose da vacina contra sarampo, caxumba e rubéola (tríplice viral).\n\nA atualização deverá ser feita com:",
    "options": [
      "duas doses da VFA, duas doses da dT, duas doses da tríplice viral, duas doses de vacina contra HPV e uma dose da vacina meningocócica ACWY",
      "duas doses da HB, duas doses da VFA, uma dose da tríplice viral, uma dose da vacina contra HPV e duas doses da vacina meningocócica ACWY",
      "uma dose da HB, uma dose da VFA, uma dose da tríplice viral, uma dose da vacina contra HPV e uma dose da vacina meningocócica ACWY",
      "uma dose da HB, uma dose da DTP, duas doses da tríplice viral, duas doses da vacina contra HPV e uma dose da vacina meningocócica ACWY",
      "uma dose da VFA, uma dose da dT, uma dose da tríplice viral, uma dose da vacina contra HPV e duas doses da vacina meningocócica ACWY"
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente de 16 anos com esquema incompleto. Avaliação por vacina:\n\n• Hepatite B: 2 doses → falta 1 dose.\n• Difteria e tétano: 2 doses de DTP na infância + 1 dT recente = 3 doses → esquema completo (reforço a cada 10 anos).\n• Febre amarela: 1 dose antes dos 5 anos → 1 dose de reforço.\n• Tríplice viral: 1 dose → falta 1 dose (até 29 anos são 2 doses).\n• HPV: dose única (esquema atual do PNI até 19 anos).\n• Meningocócica ACWY: 1 dose (11 a 14 anos no calendário, ou resgate conforme oferta local).\n\nTotal: HB, VFA, tríplice viral, HPV e ACWY, uma dose de cada.",
    "commentary": "Duas doses de VFA, dT, tríplice viral e HPV (A): a dT já está completa; VFA e tríplice viral exigem apenas mais uma dose cada; HPV é dose única.\n\nDuas doses de HB, VFA e ACWY (B): falta apenas uma dose de HB e uma de VFA; a ACWY é dose única.\n\nDTP e duas doses de tríplice viral (D): DTP não é usada após os 7 anos, e só falta uma tríplice viral.\n\ndT e duas doses de ACWY (E): o esquema de dT está completo e a ACWY é dose única.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação do Adolescente (2024); Instrução Normativa do Calendário Nacional de Vacinação",
    "tags": [
      "vacinação",
      "calendário vacinal do adolescente",
      "imunizações",
      "atualização vacinal"
    ],
    "tip": "DTP na infância + dT conta para o esquema de 3 doses. HPV hoje é dose única."
  },
  {
    "id": "enare2025-51",
    "module": "Pediatria",
    "text": "Um escolar com 5 anos é atendido em uma unidade básica de saúde com história de diarreia iniciada 2 dias antes. Houve aumento da frequência das evacuações há 24 horas, e o paciente apresentou um episódio de vômitos há 12 horas. Ao exame físico, mostrou-se intranquilo, chorando sem lágrimas, com a língua levemente seca.\n\nA conduta imediata é:",
    "options": [
      "fazer hidratação oral com 75 mL/kg (sais de reidratação) em 4 horas; não medicar; observação no local",
      "iniciar hidratação venosa com 10 mL/kg em 30 minutos; prescrever ondansetrona; transferir para unidade hospitalar",
      "orientar quando à ingestão de líquidos; não usar medicamentos; dar alta com orientações sobre o retorno",
      "prescrever hidratação venosa com 70 mL/kg em 2,5 horas; usar antieméticos; manter naquela unidade de saúde",
      "indicar hidratação oral com 20 mL/kg (sais de reidratação), usar ondansetrona; retornar para casa com orientação"
    ],
    "correctAnswer": 0,
    "explanation": "Criança com diarreia aguda e sinais de desidratação: irritada/intranquila, choro sem lágrimas e mucosa seca (dois ou mais sinais do plano B), sem sinais de gravidade (letargia, incapacidade de beber, perfusão muito lenta). Pelo manejo do Ministério da Saúde, trata-se de desidratação → Plano B: terapia de reidratação oral com SRO, 50 a 100 mL/kg (média 75 mL/kg) em 4 a 6 horas, na unidade de saúde, com reavaliação frequente. Um único episódio de vômito não contraindica a TRO, e não se usam antieméticos de rotina.",
    "commentary": "Hidratação venosa com ondansetrona e transferência (B): hidratação venosa é para desidratação grave (plano C) ou falha da TRO.\n\nOrientação e alta (C): é o plano A, para crianças sem desidratação.\n\nHidratação venosa de 70 mL/kg em 2,5 h (D): é a fase rápida do plano C para desidratação grave.\n\nSRO 20 mL/kg com ondansetrona e casa (E): volume insuficiente, e a reidratação deve ser supervisionada na unidade.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manejo do paciente com diarreia (cartaz, 2023); Sociedade Brasileira de Pediatria – Diarreia aguda",
    "tags": [
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral",
      "plano B"
    ],
    "tip": "Desidratação sem gravidade = plano B: SRO 50–100 mL/kg em 4–6 h na unidade."
  },
  {
    "id": "enare2025-52",
    "module": "Pediatria",
    "text": "Um menino de 3 anos apresenta história de dificuldade para evacuar desde o primeiro ano de vida. Fica alguns dias sem evacuar e só evacua com o uso de doses altas de laxante ou com enemas. A mãe refere que ele demorou 4 dias para evacuar após nascer e o fez porque usou supositório. Tem pouco apetite e não ganha peso adequadamente. O exame clínico revelou distensão abdominal e saída de fezes explosivas ao toque retal. Realizou exames laboratoriais e clister opaco.\n\nCom base na principal hipótese diagnóstica, é esperado encontrar no exame radiológico uma área de intestino:",
    "options": [
      "dilatada, apresentando extensão limitada, iniciando em qualquer local no colo, correspondendo à região agangliônica",
      "estreitada, que acomete o colo descendente, poupando as porções distais, sendo a área com gânglios",
      "estreitada, que inicia distalmente e se estende proximalmente, correspondendo à região agangliônica",
      "dilatada, de extensão variada, que ocorre nas porções mais distais e que demonstra a parte agangliônica",
      "estreitada, que apresenta extensão limitada, tendo início proximal, traduzindo a porção com gânglios"
    ],
    "correctAnswer": 2,
    "explanation": "Constipação desde o período neonatal, com eliminação de mecônio após 48 horas (4 dias, com supositório), distensão abdominal, déficit de crescimento e saída explosiva de fezes ao toque retal (sinal do “esguicho”): doença de Hirschsprung (megacólon congênito agangliônico). A aganglionose começa no esfíncter anal interno e se estende proximalmente por extensão variável (mais comum até o retossigmoide).\n\nNo enema opaco, o segmento agangliônico aparece estreitado (não relaxa), com dilatação a montante na porção normal, e a zona de transição entre eles.",
    "commentary": "Área dilatada, em qualquer local do cólon, como região agangliônica (A): o segmento doente é o estreitado, e sempre começa distalmente.\n\nEstreitamento do descendente poupando porções distais (B): a aganglionose não poupa o reto; é contínua a partir do ânus.\n\nÁrea dilatada distal como parte agangliônica (D): a dilatação é do cólon normal, acima do segmento doente.\n\nÁrea estreitada de início proximal como porção com gânglios (E): a porção com gânglios é a dilatada; a estreitada é a agangliônica, de início distal.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria; Sociedade Brasileira de Cirurgia Pediátrica",
    "tags": [
      "doença de Hirschsprung",
      "megacólon congênito",
      "constipação",
      "cirurgia pediátrica"
    ],
    "tip": "Hirschsprung: o segmento doente é o estreito e distal; o dilatado é o normal."
  },
  {
    "id": "enare2025-53",
    "module": "Pediatria",
    "text": "Um escolar masculino de 9 anos está em acompanhamento na unidade básica por dor no joelho direito iniciada 2 meses antes. Há inchaço no local e a dor o impede de praticar basquete no time do clube. Não há história de trauma. No exame físico há edema e dor sobre a porção distal do tendão patelar direito, além de uma proeminência firme e fixa do tubérculo tibial.\n\nA radiografia do joelho está normal. O médico orientou repouso, afastamento temporário do basquete e fisioterapia.\n\nA principal hipótese diagnóstica é:",
    "options": [
      "síndrome de Sinding-Larsen-Johansson",
      "síndrome da dor patelofemoral",
      "doença de Osgood-Schlatter",
      "doença de Legg-Calvé-Perthes",
      "rotura do ligamento cruzado anterior"
    ],
    "correctAnswer": 2,
    "explanation": "Pré-adolescente esportista (basquete, saltos) com dor, edema e proeminência dolorosa na tuberosidade anterior da tíbia, sem trauma: doença de Osgood-Schlatter, apofisite por tração repetida do tendão patelar sobre a apófise tibial em fase de crescimento. O diagnóstico é clínico (a radiografia pode ser normal ou mostrar fragmentação), e o tratamento é conservador: redução da atividade, gelo, analgesia, alongamento e fortalecimento.",
    "commentary": "Sinding-Larsen-Johansson (A): apofisite no polo inferior da patela, não na tuberosidade da tíbia.\n\nSíndrome da dor patelofemoral (B): dor difusa anterior/retropatelar, pior ao subir escadas ou ficar sentado, sem proeminência da tuberosidade.\n\nLegg-Calvé-Perthes (D): osteonecrose da cabeça femoral em crianças de 4 a 8 anos, com claudicação e dor no quadril ou referida no joelho.\n\nLesão do LCA (E): ocorre após trauma em torção, com derrame articular e instabilidade.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Ortopedia Pediátrica; Sociedade Brasileira de Pediatria – Medicina do Esporte",
    "tags": [
      "doença de Osgood-Schlatter",
      "apofisite",
      "dor no joelho",
      "ortopedia pediátrica"
    ],
    "tip": "Tuberosidade da tíbia dolorosa em adolescente esportista = Osgood-Schlatter."
  },
  {
    "id": "enare2025-54",
    "module": "Saúde Coletiva",
    "text": "Schistosoma, um helminto pertencente à classe Trematoda, à família Schistossomatidae e ao gênero Schistosoma, são vermes digenéticos, delgados, de coloração branca e sexos separados. A fêmea adulta, mais alongada, encontra-se alojada em uma fenda do corpo do macho, denominada canal ginecóforo.\n\nO ser humano é o principal hospedeiro definitivo do S. mansoni. É nele que o parasita desenvolve a forma adulta e se reproduz sexuadamente, gerando ovos que são disseminados no meio ambiente por meio das fezes, ocasionando a contaminação das coleções hídricas.\n\nO ciclo biológico do S. mansoni depende da presença do hospedeiro intermediário no ambiente. Os caramujos gastrópodes aquáticos, pertencentes à família Planorbidae e ao gênero Biomphalaria, são os organismos que possibilitam a reprodução assexuada do helminto.\n\nCom relação ao período de transmissibilidade dessa doença, é correto afirmar que:",
    "options": [
      "a pessoa infectada pode eliminar ovos viáveis de S. mansoni a partir de 5 semanas após a infecção e por um período de 6 a 10 anos, podendo chegar a até mais de 20 anos",
      "os hospedeiros intermediários começam a eliminar miracídios após 4 a 7 semanas da infecção pelas cercárias",
      "os caramujos infectados eliminam cercárias por toda a vida, que é aproximadamente de 3 anos",
      "a pessoa infectada pode eliminar ovos viáveis de S. mansoni a partir de 1 semana após a infecção e por um período de 6 meses a 1 ano",
      "os hospedeiros permissivos ou reservatórios, como os primatas, marsupiais (gambá), ruminantes, roedores e lagomorfos (lebres e coelhos), são considerados reservatórios que não eliminam ovos"
    ],
    "correctAnswer": 0,
    "explanation": "Segundo o Guia de Vigilância em Saúde, o ser humano infectado pode eliminar ovos viáveis de Schistosoma mansoni a partir de 5 semanas após a infecção e por longos períodos — em média 6 a 10 anos, podendo passar de 20 anos. Os caramujos infectados (Biomphalaria) eliminam cercárias após 4 a 7 semanas da infecção pelos miracídios, por toda a vida, que é de aproximadamente 1 ano.",
    "commentary": "Caramujos eliminando miracídios (B): os caramujos eliminam cercárias, não miracídios; o miracídio é a forma que eclode do ovo e infecta o caramujo.\n\nCaramujos com vida de 3 anos (C): o tempo de vida do caramujo é de cerca de 1 ano.\n\nOvos a partir de 1 semana, por 6 meses a 1 ano (D): o período pré-patente é de cerca de 5 semanas, e a eliminação dura anos.\n\nReservatórios que não eliminam ovos (E): primatas, roedores, marsupiais e outros podem albergar o parasita e eliminar ovos, mas não têm papel epidemiológico relevante na manutenção da transmissão.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde, 6ª ed. (esquistossomose mansoni)",
    "tags": [
      "esquistossomose",
      "helmintíases",
      "vigilância em saúde",
      "parasitologia"
    ],
    "tip": "Esquistossomose: humano elimina ovos a partir de 5 semanas, por até mais de 20 anos."
  },
  {
    "id": "enare2025-55",
    "module": "Clínica Médica",
    "text": "Um jovem de 18 anos foi atendido em uma unidade básica de saúde com um quadro de segundo episódio de uretrite gonocócica em 3 meses.\n\nApós aconselhamento pela equipe, o tratamento instituído foi:",
    "options": [
      "doxiciclina 100 mg, 1 comprimido via oral, 12/12h por 30 dias",
      "ceftriaxona 1g, intramuscular, dose única",
      "ceftriaxona 500 mg, intramuscular, dose única + azitromicina 500 mg, 4 comprimidos via oral, dose única",
      "ciprofloxacino 500 mg, via oral, 12/12h por 7 dias",
      "azitromicina 500 mg, via oral, por 10 dias"
    ],
    "correctAnswer": 2,
    "explanation": "O tratamento da uretrite gonocócica pelo PCDT-IST do Ministério da Saúde é ceftriaxona 500 mg IM em dose única associada a azitromicina via oral em dose única (para cobrir clamídia coinfectante e reduzir a seleção de resistência do gonococo). O gabarito oficial é a alternativa C, que traz a ceftriaxona correta associada à azitromicina.\n\nNote que o PCDT usa azitromicina 1 g (2 comprimidos de 500 mg); a dose de 2 g citada na alternativa corresponde a esquemas alternativos. Mesmo assim, é a única opção que contempla a terapia dupla recomendada. Em episódio recorrente, investigar reinfecção (tratar parcerias), adesão e, se possível, colher cultura com antibiograma.",
    "commentary": "Doxiciclina por 30 dias (A): doxiciclina trata clamídia (7 dias), não gonorreia, e a duração é excessiva.\n\nCeftriaxona 1 g isolada (B): a recomendação brasileira é a terapia dupla, cobrindo clamídia.\n\nCiprofloxacino (D): não é mais recomendado pela alta resistência do gonococo às quinolonas no Brasil.\n\nAzitromicina por 10 dias (E): esquema inexistente; azitromicina isolada favorece resistência.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "gonorreia",
      "uretrite",
      "infecções sexualmente transmissíveis",
      "ceftriaxona",
      "azitromicina"
    ],
    "alert": "O PCDT-IST recomenda azitromicina 1 g (2 comprimidos de 500 mg); a alternativa oficial traz 2 g (4 comprimidos). Ainda assim, é a única que contempla a terapia dupla com ceftriaxona 500 mg.",
    "tip": "Uretrite gonocócica: ceftriaxona 500 mg IM + azitromicina VO, dose única, e tratar parcerias."
  },
  {
    "id": "enare2025-56",
    "module": "Clínica Médica",
    "text": "A cólera é causada pela bactéria Vibrio cholerae toxigênica dos sorogrupos O1 ou O139. O Vibrio cholerae O1 pode ser classificado em dois biotipos: Clássico e El Tor, que apresentam diferenças em relação às propriedades fenotípicas e genotípicas, patogenicidade e padrões de infecção e sobrevivência nos hospedeiros humanos. O uso de antibióticos é complementar ao tratamento e não substitui a administração de líquidos e solução de sais de reidratação oral ou de fluidos endovenosos (a reidratação é a base da terapia).\n\nDessa maneira, o antibiótico de primeira escolha, indicado pelo Ministério da Saúde, para tratamento da cólera é:",
    "options": [
      "doxiciclina 2 mg/kg a 4 mg/kg, em dose única, por via oral",
      "sulfametoxazol + trimetoprima 400/80 mg, 12/12h por 5 dias, por via oral",
      "amoxicilina + clavulanato 875/125 mg, 12/12h por 7 dias",
      "gentamicina 80 mg, por via oral, em dose única",
      "cefepime 2 g, por via oral endovenosa, 8/8h por 10 dias"
    ],
    "correctAnswer": 0,
    "explanation": "Na cólera, a reidratação é a base do tratamento; o antibiótico reduz a duração da diarreia, o volume das perdas e a eliminação do vibrião, e é indicado nas formas graves. Pelo Ministério da Saúde, a primeira escolha é a doxiciclina em dose única (300 mg para adultos; em crianças, a dose ajustada pelo peso é a da alternativa A). Alternativas: azitromicina (crianças e gestantes) e ciprofloxacino.",
    "commentary": "Sulfametoxazol-trimetoprima (B): já foi usado, mas há resistência frequente; não é primeira escolha.\n\nAmoxicilina-clavulanato (C): não é recomendado para cólera.\n\nGentamicina por via oral (D): aminoglicosídeos praticamente não são absorvidos e não são recomendados.\n\nCefepima (E): antibiótico de amplo espectro desnecessário, e a via descrita é incoerente.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (cólera); Manual Integrado de Vigilância Epidemiológica da Cólera",
    "tags": [
      "cólera",
      "diarreia aguda grave",
      "doxiciclina",
      "diarreia aguda",
      "infectologia"
    ],
    "tip": "Cólera: hidratação é a base; antibiótico de escolha é doxiciclina em dose única."
  },
  {
    "id": "enare2025-57",
    "module": "Pediatria",
    "text": "A síndrome urêmica hemolítica típica (SHU) é uma doença do grupo das microangiopatias trombóticas. São distúrbios caracterizados por anemia hemolítica microangiopática não imune, trombocitopenia e insuficiência multissistêmica. A SHU está associada a infecções intestinais por bactérias produtoras da toxina Shiga, em especial a Escherichia coli enterohemorrágica invasiva (STEC - Shiga-toxin– producing strains of E coli). Carne mal-cozida, especialmente hambúrguer, leite e suco não pasteurizados, além de frutas e vegetais crus, podem estar contaminados por essas bactérias.\n\nA doença geralmente tem início abrupto com quadro de diarreia, muitas vezes com sangue e dor abdominal. Em adultos, geralmente é autolimitada a 5-10 dias. Porém, em crianças, observa-se maior associação à SHU.\n\nCom relação a essa doença em crianças, é correto afirmar que:",
    "options": [
      "o antibiótico de escolha é o ciprofloxacino",
      "a terapia antibiótica pode aumentar o risco de SHU e a plasmaférese pode auxiliar pacientes com doença por e. coli enterohemorrágica invasiva produtora da toxina SHIGA",
      "rifaximina associada a fluorquinolona deve ser administrada imediatamente em casos de diarreia hemorrágica",
      "vancomicina 125 mg, por via oral, quatro vezes ao dia, associada a fidaxomicina 200 mg, duas vezes ao dia durante 10 dias, é o tratamento indicando",
      "sulfametoxazol + trimetoprima 800/160 mg a cada 6h por 28 dias é o tratamento de escolha"
    ],
    "correctAnswer": 1,
    "explanation": "Na infecção por E. coli produtora de toxina Shiga (como O157:H7), os antibióticos não são recomendados: o dano bacteriano pode aumentar a liberação de toxina e o risco de síndrome hemolítico-urêmica. O tratamento é de suporte (hidratação cuidadosa, controle hidroeletrolítico, transfusão quando necessária e diálise na lesão renal grave). A plasmaférese tem papel principalmente na SHU atípica (mediada por complemento) e na PTT; na SHU típica pode ser considerada em casos graves com acometimento neurológico, com evidência limitada.\n\nPelo gabarito, a alternativa B é a correta por afirmar o risco do antibiótico e citar a plasmaférese como possível auxílio.",
    "commentary": "Ciprofloxacino (A): antibióticos, especialmente quinolonas, aumentam a liberação de toxina e não são indicados.\n\nRifaximina com fluoroquinolona (C): pela mesma razão, não se usa antibiótico na diarreia sanguinolenta por STEC.\n\nVancomicina e fidaxomicina (D): são tratamento de Clostridioides difficile, não de STEC.\n\nSulfametoxazol-trimetoprima por 28 dias (E): também aumenta o risco de SHU, e o esquema não existe para essa doença.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Síndrome hemolítico-urêmica; Nelson – Tratado de Pediatria, 21ª ed.",
    "tags": [
      "síndrome hemolítico-urêmica",
      "E. coli",
      "toxina Shiga",
      "diarreia sanguinolenta",
      "nefrologia pediátrica"
    ],
    "alert": "A plasmaférese tem benefício pouco estabelecido na SHU típica (é usada sobretudo na SHU atípica e na PTT). A alternativa B é a oficial por afirmar corretamente que antibióticos aumentam o risco de SHU.",
    "tip": "Diarreia sanguinolenta por STEC: nada de antibiótico; risco de SHU."
  },
  {
    "id": "enare2025-58",
    "module": "Pediatria",
    "text": "Coqueluche é uma infecção aguda do trato respiratório causada pela bactéria Bordetella pertussis. A palavra coqueluche significa “tosse violenta”, expressão que descreve apropriadamente a característica mais consistente e proeminente da doença.\n\nO nome chinês para coqueluche é “tosse de 100 dias”, termo que descreve o curso clínico da doença com precisão. A identificação de B. pertussis foi relatada pela primeira vez por Bordet e Gengou em 1906.\n\nA classe de antibióticos mais adequada para tratamento dessa doença é:",
    "options": [
      "fosfomicina",
      "quinolona",
      "tetraciclina",
      "beta-lactâmico",
      "macrolídeo"
    ],
    "correctAnswer": 4,
    "explanation": "O tratamento e a quimioprofilaxia da coqueluche são feitos com macrolídeos. A azitromicina é a primeira escolha (inclusive em lactentes menores de 1 mês, pelo menor risco de estenose hipertrófica de piloro do que a eritromicina); claritromicina e eritromicina são alternativas. O sulfametoxazol-trimetoprima é a opção para quem não tolera macrolídeos (exceto menores de 2 meses). O antibiótico iniciado na fase catarral encurta a doença; depois, reduz principalmente a transmissão.",
    "commentary": "Fosfomicina (A): usada em infecção urinária baixa; sem ação clínica relevante contra Bordetella.\n\nQuinolona (B): tem atividade in vitro, mas não é recomendada, sobretudo em crianças.\n\nTetraciclina (C): contraindicada em crianças menores de 8 anos e não é a escolha.\n\nBetalactâmico (D): a Bordetella pertussis não responde de forma confiável aos betalactâmicos.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (coqueluche)",
    "tags": [
      "coqueluche",
      "tosse prolongada",
      "macrolídeos",
      "azitromicina",
      "infectologia pediátrica"
    ],
    "tip": "Coqueluche: azitromicina para tratar e para a quimioprofilaxia dos contatos."
  },
  {
    "id": "enare2025-59",
    "module": "Pediatria",
    "text": "Um lactente de 9 meses, com fácies sindrômica, assintomático, apresenta ausculta cardíaca com ritmo regular, bulhas normofonéticas com desdobramento variável da segunda bulha, sopro sistólico 2+/6+ mais audível em borda esternal esquerda baixa, sem irradiação, que diminui com a posição sentada. Os pulsos femorais são palpáveis.\n\nNesse caso, o médico deve:",
    "options": [
      "internar a criança para realização de exames",
      "encaminhar a criança para avaliação do cardiopediatra",
      "iniciar medicação cardiológica (furosemida e captopril)",
      "solicitar teste de oximetria de pulso",
      "considerar o achado como funcional, sem necessidade de encaminhamento"
    ],
    "correctAnswer": 1,
    "explanation": "Lactente com fácies sindrômica e sopro cardíaco: síndromes genéticas (como Down, Noonan, Williams, DiGeorge) têm alta prevalência de cardiopatias congênitas. Mesmo que o sopro tenha características benignas (baixa intensidade, variação postural), a presença de dismorfismos é critério para avaliação especializada. A conduta é encaminhar ao cardiologista pediátrico para avaliação com ecocardiograma; a criança está assintomática, sem necessidade de internação.",
    "commentary": "Internar para exames (A): criança assintomática, com pulsos normais, pode ser avaliada ambulatorialmente.\n\nIniciar furosemida e captopril (C): não há sinais de insuficiência cardíaca, nem diagnóstico definido.\n\nOximetria de pulso (D): é o teste do coraçãozinho para o recém-nascido; aos 9 meses, não substitui a avaliação cardiológica.\n\nConsiderar funcional (E): a fácies sindrômica impede assumir que o sopro seja inocente.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Pediatria – Departamento de Cardiologia; Nelson – Tratado de Pediatria, 21ª ed.",
    "tags": [
      "sopro cardíaco",
      "cardiopatia congênita",
      "síndromes genéticas",
      "cardiologia pediátrica"
    ],
    "tip": "Sopro + criança sindrômica (ou sintomática) = encaminhar ao cardiopediatra, mesmo que pareça inocente."
  },
  {
    "id": "enare2025-60",
    "module": "Pediatria",
    "text": "Um escolar de 10 anos apresenta queixa de cansaço, dores nas pernas que o acordam durante a noite e emagrecimento de 2 kg no último mês. Apresenta as seguintes alterações ao exame físico: palidez cutâneo-mucosa 3+/4+, sopro sistólico 2+/6+ em bordo esternal esquerdo, taquicardia (FC = 120 bpm), fígado a 2,5 cm do RCD, ponta de baço palpável, dor à palpação do terço proximal da tíbia bilateralmente e petéquias esparsas em membros.\n\nO quadro clínico é sugestivo de:",
    "options": [
      "anemia falciforme",
      "leucemia",
      "zika vírus",
      "endocardite infecciosa",
      "toxoplasmose"
    ],
    "correctAnswer": 1,
    "explanation": "Escolar com fadiga, palidez intensa (anemia, com sopro sistólico e taquicardia funcionais), petéquias (plaquetopenia), hepatoesplenomegalia, dor óssea noturna (infiltração medular e periosteal) e perda de peso: quadro típico de leucemia aguda, mais provavelmente a leucemia linfoide aguda, o câncer mais comum da infância. A conduta é hemograma com esfregaço e encaminhamento urgente para centro de oncologia pediátrica (mielograma).",
    "commentary": "Anemia falciforme (A): diagnosticada no teste do pezinho, com crises álgicas e hemólise desde cedo; petéquias e hepatoesplenomegalia com dor óssea noturna e emagrecimento sugerem neoplasia.\n\nZika (C): quadro agudo autolimitado com exantema e conjuntivite.\n\nEndocardite infecciosa (D): febre prolongada com sopro novo e fenômenos embólicos; não explica dor óssea com citopenias.\n\nToxoplasmose (E): linfadenopatia e febre baixa, sem pancitopenia e dor óssea.\n\nGabarito oficial do ENARE 2025.",
    "reference": "INCA – Diagnóstico precoce do câncer na criança e no adolescente; Sociedade Brasileira de Oncologia Pediátrica",
    "tags": [
      "leucemia linfoide aguda",
      "câncer infantil",
      "oncologia pediátrica",
      "hematologia pediátrica"
    ],
    "tip": "Palidez + petéquias + hepatoesplenomegalia + dor óssea noturna = leucemia."
  },
  {
    "id": "enare2025-61",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 24 anos, saudável, é usuária de dispositivo intrauterino de cobre. Refere vida sexual ativa com uso de preservativos e última menstruação há 10 dias. Há 2 horas, iniciou-se uma dor de instalação aguda, de padrão constante, em fossa ilíaca direita, sem irradiação, associada a náuseas e vômitos. Nega sangramento vaginal, febre, dor lombar, mudança de hábito intestinal ou urinário. A ultrassonografia transvaginal evidenciou aumento do ovário direito, comprometimento do fluxo sanguíneo em região anexial do mesmo lado e líquido livre em fundo de saco.\n\nA hipótese mais provável é:",
    "options": [
      "gestação ectópica à direita",
      "abscesso ovariano à direita",
      "torção de ovário e tuba uterina à direita",
      "apendicite",
      "pielonefrite à direita"
    ],
    "correctAnswer": 2,
    "explanation": "Dor aguda e intensa em fossa ilíaca direita com náuseas e vômitos, ultrassom com ovário direito aumentado, fluxo anexial comprometido ao Doppler e líquido livre: torção anexial (ovário e tuba) à direita. A ausência de atraso menstrual, a contracepção dupla (DIU e preservativo), a ausência de febre e de sintomas urinários tornam as outras hipóteses menos prováveis. A conduta é laparoscopia de urgência com distorção e, se possível, preservação do ovário.",
    "commentary": "Gestação ectópica (A): a paciente usa DIU e preservativo, está no 10º dia do ciclo e o ultrassom mostra ovário aumentado sem fluxo — achado de torção, não de massa ectópica.\n\nAbscesso ovariano (B): cursaria com febre, leucocitose e quadro de doença inflamatória pélvica.\n\nApendicite (D): o ultrassom mostra alteração ovariana com fluxo comprometido, que explica o quadro.\n\nPielonefrite (E): febre, dor lombar e disúria estão ausentes.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Abdome agudo em ginecologia; ACOG Committee Opinion nº 783 – Adnexal torsion in adolescents",
    "tags": [
      "torção anexial",
      "torção de ovário",
      "abdome agudo ginecológico",
      "ginecologia"
    ],
    "tip": "Dor súbita em FID com vômitos + ovário aumentado sem fluxo = torção."
  },
  {
    "id": "enare2025-62",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 18 anos chega à emergência do hospital referindo ter sido vítima de violência sexual há 2 horas em uma festa. Relata que, no ato, houve penetração. Ela desconhece o agressor, o qual não usou preservativo.\n\nA abordagem inicial deve incluir:",
    "options": [
      "atendimento inicial exclusivo por médico",
      "encaminhamento da paciente primeiramente ao instituto médico legal",
      "encaminhamento da paciente para realizar boletim de ocorrência antes do atendimento médico",
      "início de profilaxia para as doenças sexualmente transmissíveis e prevenção de gravidez em até 5 dias",
      "avaliação do estado geral de saúde, orientação e proteção contra doenças de transmissão sexual, prevenção de gravidez e coleta de materiais biológicos ou outros indícios materiais que permitam a identificação do agressor"
    ],
    "correctAnswer": 4,
    "explanation": "No atendimento à vítima de violência sexual, a prioridade é a assistência à saúde, que não depende de boletim de ocorrência nem de exame no IML. A abordagem inclui: avaliação do estado geral e de lesões, acolhimento e orientação, profilaxias (anticoncepção de emergência, profilaxia pós-exposição ao HIV em até 72 horas, profilaxia de IST bacterianas e de hepatite B), coleta de material biológico para identificação do agressor (vestígios, conforme a Lei 13.721/2018 e normas de cadeia de custódia), notificação compulsória e seguimento.",
    "commentary": "Atendimento exclusivo por médico (A): o atendimento é multiprofissional (enfermagem, psicologia, serviço social).\n\nEncaminhar primeiro ao IML (B) e exigir boletim de ocorrência (C): a assistência à saúde não pode ser condicionada a procedimentos policiais ou periciais.\n\nProfilaxias em até 5 dias (D): a anticoncepção de emergência é eficaz até 5 dias, mas a profilaxia do HIV deve começar idealmente nas primeiras 2 horas e no máximo em 72 horas; e a alternativa é incompleta.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Norma Técnica: Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes; PCDT de PEP (2024)",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "anticoncepção de emergência",
      "saúde da mulher"
    ],
    "tip": "Violência sexual: atendimento de saúde primeiro; não exige B.O. PEP do HIV até 72 h."
  },
  {
    "id": "enare2025-63",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 23 anos tem queixa de irregularidade menstrual de longa data. Relata que, desde a primeira menstruação, tem intervalo de 50 a 60 dias entre os ciclos e períodos de amenorreia. No último ano, estava em final de faculdade e ganhou muito peso em função de estresse e sedentarismo. Ao exame, apresenta bom estado geral, IMC 31 kg/m², presença de acne em face e dorso e escurecimento de região de dobras.\n\nFrente a esse cenário, a principal hipótese é:",
    "options": [
      "síndrome dos ovários policísticos",
      "sobrepeso com aumento de gordura visceral",
      "deficiência enzimática da suprarrenal da 21-hidroxilase",
      "síndrome de Cushing",
      "hipotireoidismo"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem com oligomenorreia desde a menarca (ciclos de 50–60 dias e períodos de amenorreia), sinais de hiperandrogenismo (acne em face e dorso) e de resistência insulínica (obesidade, acantose nigricans nas dobras): a principal hipótese é síndrome dos ovários policísticos. Pelos critérios de Rotterdam, bastam 2 de 3 (oligo/anovulação, hiperandrogenismo clínico ou laboratorial, morfologia ovariana policística), após excluir outras causas (hipotireoidismo, hiperprolactinemia, hiperplasia adrenal não clássica, Cushing).",
    "commentary": "Sobrepeso com gordura visceral (B): a obesidade agrava a SOP, mas não explica a irregularidade menstrual desde a menarca e o hiperandrogenismo.\n\nDeficiência de 21-hidroxilase (C): a forma não clássica pode simular SOP, mas é menos frequente; é diagnóstico diferencial a excluir com 17-OH-progesterona.\n\nSíndrome de Cushing (D): exigiria estrias violáceas, fraqueza muscular proximal, pletora e hipertensão.\n\nHipotireoidismo (E): pode causar irregularidade menstrual, mas não explica acne e acantose.\n\nGabarito oficial do ENARE 2025.",
    "reference": "International Evidence-based Guideline for the Assessment and Management of PCOS (2023); Febrasgo – Síndrome dos ovários policísticos",
    "tags": [
      "síndrome dos ovários policísticos",
      "hiperandrogenismo",
      "critérios de Rotterdam",
      "ginecologia endócrina"
    ],
    "tip": "Oligomenorreia desde a menarca + hiperandrogenismo + acantose = SOP."
  },
  {
    "id": "enare2025-64",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 38 anos teve diagnóstico de câncer de mama há 18 meses, com realização de quimioterapia neoadjuvante e mastectomia à direita. Não menstrua há 12 meses. Há 6 meses queixa-se de calores e suores todas as noites, com prejuízo importante de sua qualidade de vida. Recentemente notou piora da lubrificação vaginal.\n\nAnalisando o caso acima, o diagnóstico e a conduta apropriada são, respectivamente:",
    "options": [
      "menopausa precoce; início de terapia hormonal com estrogênio e progesterona via oral e uso de lubrificantes vaginais",
      "menopausa precoce; início de escitalopram e hidratantes vaginais",
      "menopausa precoce; início de estriol vaginal e laser vaginal",
      "cessação temporária da menstruação; início de desvenlafaxina e lubrificantes vaginais",
      "transição menopausal; início de estriol transdérmico e fisioterapia pélvica"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 38 anos em amenorreia há 12 meses após quimioterapia, com fogachos intensos e secura vaginal: insuficiência ovariana induzida por quimioterapia, configurando menopausa precoce (antes dos 40 anos). Por ter câncer de mama, a terapia hormonal sistêmica é contraindicada. Os sintomas vasomotores são tratados com opções não hormonais — ISRS/IRSN (escitalopram, venlafaxina, desvenlafaxina, paroxetina — esta evitada com tamoxifeno), gabapentina, clonidina ou fezolinetante — e o ressecamento vaginal com hidratantes e lubrificantes vaginais.",
    "commentary": "Terapia hormonal com estrogênio e progesterona (A): contraindicada em sobrevivente de câncer de mama.\n\nEstriol vaginal e laser (C): estrogênio vaginal é evitado como primeira linha no câncer de mama (sobretudo em uso de inibidor de aromatase), e não trata os fogachos.\n\nCessação temporária da menstruação (D): 12 meses de amenorreia com sintomas climatéricos após quimioterapia definem insuficiência ovariana.\n\nTransição menopausal com estriol transdérmico (E): o diagnóstico é de menopausa precoce, e estrogênio sistêmico é contraindicado.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Consenso de terapêutica hormonal; NAMS – The 2023 Nonhormone Therapy Position Statement",
    "tags": [
      "menopausa precoce",
      "câncer de mama",
      "sintomas vasomotores",
      "terapia não hormonal",
      "climatério"
    ],
    "tip": "Fogachos em sobrevivente de câncer de mama: ISRS/IRSN, gabapentina ou fezolinetante; nada de estrogênio sistêmico."
  },
  {
    "id": "enare2025-65",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma criança do sexo feminino, de 2 anos de idade, chega encaminhada pelo seu pediatra. A mãe relata corrimento vaginal ora sanguinolento, ora aquoso e uma estrutura semelhante a “cachos de uva” de aspecto gelatinoso na entrada da vagina.\n\nA principal hipótese é:",
    "options": [
      "má higiene",
      "sarcoma botrioide",
      "corpo estranho",
      "contaminação com gel hormonal transdérmico da mãe",
      "estímulo hormonal remanescente do intraútero"
    ],
    "correctAnswer": 1,
    "explanation": "Menina de 2 anos com sangramento vaginal e massa polipoide, gelatinosa, em “cacho de uva” saindo pela vagina: sarcoma botrioide, variante embrionária do rabdomiossarcoma, o tumor maligno vaginal mais comum na infância (geralmente antes dos 5 anos). O diagnóstico é por biópsia, e o tratamento é multimodal (quimioterapia com cirurgia conservadora).",
    "commentary": "Má higiene (A): causa vulvovaginite inespecífica, com corrimento e prurido, mas não massa vaginal.\n\nCorpo estranho (C): causa corrimento fétido e sanguinolento, mas não massa polipoide em cacho de uva.\n\nContaminação por gel hormonal (D): causaria sinais de estímulo estrogênico (telarca, sangramento), não tumoração.\n\nEstímulo hormonal intrauterino (E): justifica sangramento discreto nos primeiros dias de vida, não aos 2 anos.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Ginecologia infanto-puberal; INCA – Câncer infantojuvenil",
    "tags": [
      "sarcoma botrioide",
      "rabdomiossarcoma",
      "ginecologia infanto-puberal",
      "oncologia pediátrica"
    ],
    "tip": "Massa vaginal em “cacho de uva” em menina pequena = sarcoma botrioide."
  },
  {
    "id": "enare2025-66",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 32 anos foi à consulta ginecológica de rotina para realização de colpocitologia oncótica. O exame evidenciou agrupamento de células escamosas com núcleos aumentados, hipercrômicos e irregulares, com alta relação núcleo-citoplasmática sugestiva de lesão intraepitelial de alto grau. Como a amostra foi coletada em meio líquido, foi solicitado teste de HPV, que veio positivo para o subtipo 16.\n\nFrente a essas informações, é correto afirmar que:",
    "options": [
      "se trata de exame normal, com seguimento em 3 anos",
      "pela associação com HPV-16, a lesão é considerada de baixo grau",
      "se trata de uma lesão de alto grau com infecção por HPV de alto risco oncogênico, sendo indicada colposcopia",
      "por se tratar de uma infecção por HPV de baixo risco oncogênico, está indicado seguimento semestral",
      "se trata de uma infecção por HPV de alto risco oncogênico, sendo indicada a realização imediata da exérese da zona de transformação (EZT ou LEEP), sem a necessidade de colposcopia"
    ],
    "correctAnswer": 2,
    "explanation": "Citologia com lesão intraepitelial escamosa de alto grau (HSIL) e teste de HPV positivo para o tipo 16 (alto risco oncogênico). Toda citologia com HSIL deve ser encaminhada para colposcopia, com biópsia das áreas alteradas; em mulheres de 25 anos ou mais, se a colposcopia for satisfatória e com achado compatível, pode-se fazer a estratégia “ver e tratar” com exérese da zona de transformação.",
    "commentary": "Exame normal com seguimento em 3 anos (A): HSIL é lesão precursora significativa.\n\nLesão de baixo grau por associação com HPV-16 (B): o HPV-16 é de alto risco e associa-se a lesões de alto grau.\n\nHPV de baixo risco com seguimento semestral (D): HPV-16 é o mais oncogênico.\n\nEZT imediata sem colposcopia (E): a colposcopia é necessária para avaliar a zona de transformação e guiar o tratamento.\n\nGabarito oficial do ENARE 2025.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016); Diretrizes Brasileiras de rastreamento com teste molecular de DNA-HPV (2024)",
    "tags": [
      "câncer do colo do útero",
      "HSIL",
      "HPV",
      "colposcopia",
      "rastreamento"
    ],
    "tip": "Citologia HSIL = colposcopia, sempre."
  },
  {
    "id": "enare2025-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 63 anos, portadora de carcinoma lobular invasivo de mama direita de 2,0 cm, com axila clinicamente livre, é submetida a quadrantectomia com biópsia de linfonodo sentinela. Durante o exame de congelação intraoperatória, o patologista encontra a presença de células carcinomatosas nos linfonodos sentinelas biopsiados. É indicado o esvaziamento axilar. Para tanto, é importante definir quais são os 3 níveis dos linfonodos axilares.\n\nA estrutura anatômica que define esses níveis é:",
    "options": [
      "a artéria axilar",
      "o músculo peitoral maior",
      "o músculo peitoral menor",
      "a artéria mamária interna",
      "o nervo intercostobraquial"
    ],
    "correctAnswer": 2,
    "explanation": "Os níveis linfonodais axilares de Berg são definidos pela relação com o músculo peitoral menor: nível I — lateral (abaixo) à borda lateral do peitoral menor; nível II — posterior (atrás) ao peitoral menor; nível III — medial à borda medial do peitoral menor (infraclaviculares). Os linfonodos de Rotter (interpeitorais) ficam entre os peitorais maior e menor.",
    "commentary": "Artéria axilar (A): é dividida em partes pelo peitoral menor, mas não é a referência dos níveis.\n\nPeitoral maior (B): delimita o espaço dos linfonodos de Rotter, não os níveis I a III.\n\nArtéria mamária interna (D): referência da cadeia mamária interna, não da axila.\n\nNervo intercostobraquial (E): é estrutura sensitiva preservada no esvaziamento, sem papel na classificação.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Bland & Copeland – The Breast; Sociedade Brasileira de Mastologia",
    "tags": [
      "câncer de mama",
      "esvaziamento axilar",
      "níveis de Berg",
      "anatomia",
      "mastologia"
    ],
    "tip": "Níveis de Berg: I lateral, II atrás e III medial ao peitoral menor."
  },
  {
    "id": "enare2025-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma menina de 6 anos é levada pela mãe ao ginecologista por ter iniciado desenvolvimento mamário há 4 meses. Ao exame físico, apresenta mamas em estágio M2 de Tanner e genitália em estágio P1 de Tanner. De acordo com o gráfico de velocidade de crescimento, a paciente manteve um padrão de 4 cm/ano no último ano. Realizada uma radiografia de mão e de punhos pelo método de Greulich-Pyle, identifica-se que a idade óssea da criança é estimada em 6 anos e 2 meses. A dosagem hormonal de LH é 1,2 UI/L.\n\nConsiderando as informações acima, o diagnóstico mais provável é:",
    "options": [
      "telarca precoce isolada",
      "pubarca precoce isolada",
      "menarca precoce isolada",
      "puberdade precoce central",
      "puberdade precoce periférica"
    ],
    "correctAnswer": 3,
    "explanation": "Menina de 6 anos com telarca (M2) há 4 meses. Puberdade precoce é o início dos caracteres sexuais antes dos 8 anos nas meninas. O LH basal de 1,2 UI/L (acima de 0,3 UI/L por método ultrassensível) indica ativação do eixo hipotálamo-hipófise-gonadal, o que caracteriza puberdade precoce central — dependente de gonadotrofinas. Pelo gabarito, esse é o diagnóstico mais provável.\n\nNa prática, a velocidade de crescimento ainda normal e a idade óssea compatível com a cronológica sugerem um quadro inicial, e é preciso completar a investigação (ressonância de crânio, acompanhamento da progressão).",
    "commentary": "Telarca precoce isolada (A): é a hipótese que pesa contra o gabarito (crescimento e idade óssea normais), mas na telarca isolada o LH basal costuma ser pré-puberal (< 0,3 UI/L).\n\nPubarca precoce isolada (B): a paciente tem P1, sem pelos pubianos.\n\nMenarca precoce isolada (C): não há sangramento.\n\nPuberdade precoce periférica (E): na periférica o LH está suprimido, pois a fonte de esteroides é gonadal ou adrenal autônoma.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Endocrinologia e Metabologia / Sociedade Brasileira de Pediatria – Puberdade precoce; Febrasgo – Ginecologia infanto-puberal",
    "tags": [
      "puberdade precoce central",
      "telarca precoce",
      "LH",
      "endocrinologia pediátrica",
      "ginecologia infanto-puberal"
    ],
    "alert": "Questão discutível: velocidade de crescimento de 4 cm/ano e idade óssea igual à cronológica favorecem telarca precoce isolada (A). O gabarito oficial considera o LH basal de 1,2 UI/L suficiente para puberdade precoce central (D)."
  },
  {
    "id": "enare2025-69",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 23 anos, sexualmente ativa, utilizando contracepção com pílula hormonal combinada, refere surgimento de lesões ulceradas, dolorosas em face interna de grande lábio esquerdo, há 3 dias. Precedendo o surgimento das lesões, refere que a região acometida apresentou um aumento de sensibilidade. Além disso, relata ter apresentado quadro de faringite há 1 semana. Ao exame, identifica-se a vulva trófica, sem distopias aparentes, apresentando 5 lesões ulceradas, com menos de 0,5 cm cada, coalescendo, dolorosas ao toque. Há presença de micropolilinfadenopatia inguinal bilateral, indolor.\n\nConsiderando a principal hipótese diagnóstica, a opção adequada de tratamento para a paciente é:",
    "options": [
      "aciclovir 400 mg, três vezes ao dia, por 7 a 14 dias",
      "ceftriaxona 1g, IV ou IM, uma vez ao dia, por 8 a 10 dias",
      "doxiciclina 100 mg, VO, duas vezes ao dia, por 10 a 15 dias",
      "prednisona, 20 mg, VO, uma vez ao dia, até remissão da úlcera",
      "penicilina G benzatina, 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo)"
    ],
    "correctAnswer": 0,
    "explanation": "Úlceras genitais múltiplas, pequenas, dolorosas e coalescentes, precedidas por pródromo de hiperestesia local, com linfadenopatia inguinal bilateral e quadro de faringite prévio (sintomas sistêmicos): primoinfecção por herpes simples. O tratamento é aciclovir 400 mg VO 3 vezes ao dia por 7 a 10 dias (podendo ser estendido se a cicatrização for incompleta), conforme o PCDT-IST.",
    "commentary": "Ceftriaxona por 8 a 10 dias (B): esquema de cancroide é ceftriaxona dose única; e a apresentação (úlceras múltiplas precedidas de pródromo) é de herpes.\n\nDoxiciclina por 10 a 15 dias (C): esquema de linfogranuloma venéreo (21 dias) ou donovanose; não trata herpes.\n\nPrednisona (D): não trata infecção viral.\n\nPenicilina benzatina (E): tratamento da sífilis primária, cuja úlcera (cancro duro) é única, indolor e de base endurecida.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "herpes genital",
      "úlcera genital",
      "aciclovir",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Úlceras múltiplas, dolorosas, com pródromo = herpes → aciclovir."
  },
  {
    "id": "enare2025-70",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 63 anos, portadora de diabetes mellitus e hipertensão arterial sistêmica controlada, encontra-se em menopausa há 10 anos. Comparece ao ginecologista com queixas de sangramento vaginal há 3 meses. O exame físico não apresenta alterações aparentes ou sinais de sangramento ativo no momento. É realizada uma ultrassonografia transvaginal, que evidencia endométrio com 3 mm de espessura, com imagem ecogênica focal que ocupa a interface entre os folhetos endometriais e mede 5 mm no maior eixo.\n\nA causa mais provável do sangramento nesse caso é:",
    "options": [
      "adenomiose",
      "pólipo endometrial",
      "miomatose uterina",
      "hiperplasia endometrial",
      "adenocarcinoma do endométrio"
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento na pós-menopausa com endométrio fino (3 mm), mas com imagem ecogênica focal de 5 mm na cavidade, entre os folhetos endometriais: o achado é típico de pólipo endometrial, causa frequente de sangramento pós-menopausa. A conduta é histeroscopia com polipectomia e estudo histológico (pólipos na pós-menopausa sintomáticos têm risco de malignidade).",
    "commentary": "Adenomiose (A): acomete o miométrio, causa dismenorreia e sangramento em idade reprodutiva, e regride após a menopausa.\n\nMiomatose (C): miomas regridem na pós-menopausa; não corresponderiam a imagem ecogênica focal dentro da cavidade, de 5 mm.\n\nHiperplasia endometrial (D): cursa com espessamento difuso do endométrio (> 4–5 mm), não com endométrio fino com lesão focal.\n\nAdenocarcinoma (E): costuma vir com endométrio espessado e heterogêneo; é o diagnóstico a excluir, mas o aspecto descrito é de pólipo.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Sangramento uterino na pós-menopausa; ACOG Committee Opinion nº 734",
    "tags": [
      "sangramento pós-menopausa",
      "pólipo endometrial",
      "histeroscopia",
      "ginecologia"
    ],
    "tip": "Pós-menopausa: endométrio ≤ 4 mm sem lesão focal tranquiliza; lesão focal → histeroscopia."
  },
  {
    "id": "enare2025-71",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 25 anos, sexualmente ativa, sem atraso menstrual, comparece ao ginecologista com uma ultrassonografia transvaginal de rotina que apresentou nódulo de aspecto misto, com áreas hiperecogênicas difusas e sombra acústica posterior no ovário direito medindo 7,0 cm. O ovário esquerdo e o útero não apresentaram alterações à ultrassonografia. Ao toque vaginal, identificou-se a presença de massa móvel, indolor, medindo em torno de 7,0 cm, palpável em região anexial direita.\n\nConsiderando a principal hipótese diagnóstica do caso, é correto afirmar que:",
    "options": [
      "esse tipo de tumor ovariano é bilateral em 10% dos casos",
      "usualmente o marcador tumoral CA125 é elevado nesses casos",
      "a chance de malignidade desse tipo de tumor é usualmente alta",
      "o principal subtipo histológico desses tumores é o cistoadenocarcinoma seroso",
      "o tratamento de eleição para esse tipo de tumor é a histerectomia com ooforectomia bilateral"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem com massa anexial móvel e indolor, com componentes hiperecogênicos (gordura) e sombra acústica posterior (calcificações, dentes, cabelo): aspecto típico de teratoma cístico maduro (cisto dermoide), o tumor ovariano mais comum em mulheres jovens. É bilateral em cerca de 10–15% dos casos, tem malignização rara (< 2%, geralmente em mulheres mais velhas) e o tratamento é a cistectomia com preservação ovariana, de preferência laparoscópica.",
    "commentary": "CA-125 elevado (B): o CA-125 costuma ser normal nos teratomas maduros; eleva-se em tumores epiteliais malignos e endometriose.\n\nAlta chance de malignidade (C): o teratoma maduro é benigno na grande maioria.\n\nCistoadenocarcinoma seroso (D): é o principal tumor maligno epitelial, de mulheres mais velhas; não corresponde ao aspecto ultrassonográfico descrito.\n\nHisterectomia com ooforectomia bilateral (E): em mulher jovem, o tratamento é conservador (cistectomia).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Massas anexiais; Berek & Novak's Gynecology, 16ª ed.",
    "tags": [
      "teratoma cístico maduro",
      "cisto dermoide",
      "massa anexial",
      "tumores ovarianos"
    ],
    "tip": "Massa ovariana com gordura e sombra acústica em mulher jovem = teratoma maduro (bilateral em 10–15%)."
  },
  {
    "id": "enare2025-72",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 33 anos comparece ao médico com queixa de leucorreia há 2 semanas, com odor desagradável, que piora após a relação sexual. Ao exame especular, verifica-se conteúdo vaginal aumentado, com coloração branco-acinzentada e algo bolhoso. O colo uterino apresenta mácula rubra de 2,0 cm de diâmetro ao redor do orifício externo, e o muco cervical está com aspecto transparente. A fita de pH vaginal registra resultado de 5,2. O teste do KOH10% exacerbou o odor da leucorreia. Ao toque vaginal, o colo móvel apresenta-se indolor. Realizada a bacterioscopia, visualizaram-se células epiteliais recobertas por cocobacilos Gram variáveis.\n\nConsiderando a principal hipótese diagnóstica, o melhor tratamento para a paciente é:",
    "options": [
      "fluconazol, 1 comprimido de 150 mg em dose única",
      "duchas vaginais com bicarbonato de sódio por 10 dias",
      "fenticonazol, creme vaginal, 0,02 mg/g, uma vez ao dia, durante 7 dias",
      "metronidazol 500 mg, por via oral, duas vezes ao dia, durante 7 dias",
      "creme vaginal combinando clindamicina 2% e hidrocortisona 10%, por 14 dias"
    ],
    "correctAnswer": 3,
    "explanation": "Corrimento branco-acinzentado, bolhoso, com odor fétido que piora após o coito, pH > 4,5, teste das aminas (KOH 10%) positivo e clue cells (células epiteliais recobertas por cocobacilos Gram-variáveis): preenche os critérios de Amsel para vaginose bacteriana. O tratamento de escolha é metronidazol 500 mg VO de 12/12 horas por 7 dias (alternativas: metronidazol gel vaginal ou clindamicina). Não é necessário tratar a parceria.",
    "commentary": "Fluconazol (A) e fenticonazol (C): tratam candidíase, que cursa com corrimento grumoso, prurido e pH < 4,5.\n\nDuchas com bicarbonato (B): não tratam vaginose; duchas vaginais podem até alterar a flora e favorecer a doença.\n\nClindamicina com hidrocortisona por 14 dias (E): a clindamicina creme é alternativa por 7 dias; associar corticoide não tem indicação.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022); Febrasgo – Vulvovaginites",
    "tags": [
      "vaginose bacteriana",
      "critérios de Amsel",
      "corrimento vaginal",
      "metronidazol"
    ],
    "tip": "Vaginose: odor de peixe, pH > 4,5, aminas positivas e clue cells → metronidazol 7 dias."
  },
  {
    "id": "enare2025-73",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, após gestação e parto complicados, está em acompanhamento com endocrinologista com diagnóstico de síndrome de Sheehan.\n\nA complicação obstétrica que mais provavelmente ocorreu nesse caso foi:",
    "options": [
      "diabetes gestacional em uso de insulina",
      "descolamento prematuro da placenta",
      "rotura prematura de membranas ovulares",
      "gestação gemelar monocoriônica",
      "restrição de crescimento intrauterino"
    ],
    "correctAnswer": 1,
    "explanation": "A síndrome de Sheehan é a necrose isquêmica da hipófise causada por hemorragia obstétrica grave com hipotensão/choque no periparto (a hipófise está aumentada na gestação e é mais vulnerável à isquemia). Entre as opções, a única complicação associada a hemorragia maciça é o descolamento prematuro da placenta. Clinicamente, manifesta-se por agalactia, amenorreia e sinais de hipopituitarismo (hipotireoidismo, insuficiência adrenal).",
    "commentary": "Diabetes gestacional (A), rotura prematura de membranas (C), gestação gemelar monocoriônica (D) e restrição de crescimento (E): nenhuma dessas condições causa, por si, hemorragia grave com choque — o mecanismo da síndrome de Sheehan.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Zugaib Obstetrícia, 5ª ed.; Sociedade Brasileira de Endocrinologia e Metabologia",
    "tags": [
      "síndrome de Sheehan",
      "hipopituitarismo",
      "hemorragia pós-parto",
      "descolamento prematuro de placenta"
    ],
    "tip": "Sheehan: hemorragia obstétrica com choque → necrose hipofisária → agalactia e amenorreia."
  },
  {
    "id": "enare2025-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "A pré-eclâmpsia complicada com síndrome HELLP é caracterizada por:",
    "options": [
      "trombocitopenia e convulsões maternas",
      "disfunção hepática e elevação da glicemia",
      "hemólise, disfunção hepática e trombocitopenia",
      "convulsões maternas, hemólise e hiperglicemia",
      "diminuição dos reflexos profundos e hemólise"
    ],
    "correctAnswer": 2,
    "explanation": "A síndrome HELLP é uma forma grave da pré-eclâmpsia, definida pela tríade: Hemólise (esquizócitos, LDH > 600 UI/L, bilirrubina > 1,2 mg/dL, haptoglobina baixa), elevação de enzimas hepáticas (Elevated Liver enzymes — AST/ALT ≥ 2× o normal) e plaquetopenia (Low Platelets — < 100.000/mm³).",
    "commentary": "Trombocitopenia e convulsões (A): convulsões definem eclâmpsia, não HELLP.\n\nDisfunção hepática e hiperglicemia (B): hiperglicemia não faz parte; a hipoglicemia é que sugere esteatose hepática aguda da gestação.\n\nConvulsões, hemólise e hiperglicemia (D): mistura eclâmpsia com elementos que não fazem parte da síndrome.\n\nHiporreflexia e hemólise (E): hiporreflexia é sinal de intoxicação por sulfato de magnésio.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Febrasgo – Pré-eclâmpsia nos seus diversos aspectos (2017); Rede Brasileira de Estudos sobre Hipertensão na Gravidez",
    "tags": [
      "síndrome HELLP",
      "pré-eclâmpsia",
      "obstetrícia",
      "doença hipertensiva da gestação"
    ],
    "tip": "HELLP: Hemólise, Enzimas hepáticas elevadas, Plaquetas baixas."
  },
  {
    "id": "enare2025-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante com 28 semanas tem o diagnóstico de infecção por parvovírus B19.\n\nA melhor maneira de avaliar a principal complicação fetal nesse caso é:",
    "options": [
      "realização do doppler da artéria cerebral média",
      "avaliação ultrassonográfica da movimentação fetal",
      "pesquisa de células fetais livres no sangue materno",
      "medida menor do fundo uterino ao exame clínico",
      "realização do teste de Coombs direto no sangue materno"
    ],
    "correctAnswer": 0,
    "explanation": "O parvovírus B19 infecta precursores eritroides fetais e pode causar anemia fetal grave e hidropisia não imune. A melhor forma de rastrear anemia fetal é o Doppler da artéria cerebral média, medindo o pico de velocidade sistólica (PVS > 1,5 MoM indica anemia moderada a grave). As gestantes infectadas devem ser acompanhadas com Doppler seriado (semanal ou quinzenal) por 8 a 12 semanas; anemia grave é tratada com transfusão intrauterina.",
    "commentary": "Movimentação fetal (B): não detecta anemia de forma precoce ou confiável.\n\nCélulas fetais no sangue materno (C): não avaliam o grau de anemia fetal.\n\nAltura uterina reduzida (D): a hidropisia cursaria com polidrâmnio e altura aumentada; é um sinal tardio e inespecífico.\n\nCoombs direto materno (E): avalia anticorpos aderidos às hemácias maternas; a anemia do parvovírus não é imune.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Zugaib Obstetrícia, 5ª ed.; SMFM Consult Series – Parvovirus B19 in pregnancy",
    "tags": [
      "parvovírus B19",
      "anemia fetal",
      "dopplervelocimetria",
      "hidropisia fetal",
      "medicina fetal"
    ],
    "tip": "Anemia fetal (aloimunização, parvovírus): Doppler da ACM."
  },
  {
    "id": "enare2025-76",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante realiza ultrassonografia com 24 semanas, que identifica gestação gemelar monocoriônica, diamniótica, com um feto com peso estimado no percentil 3 e o outro com peso estimado no percentil 43. Eles têm uma diferença de 28% entre os pesos. Ambos os fetos estão com volume do líquido amniótico normal e ambos com o doppler da artéria umbilical, da artéria cerebral média e do ducto venoso dentro da normalidade.\n\nO diagnóstico compatível com esse quadro é:",
    "options": [
      "gemelidade imperfeita",
      "síndrome de transfusão feto-fetal",
      "sequência de anemia/policitemia",
      "restrição de crescimento intrauterino seletiva",
      "sequência TRAP"
    ],
    "correctAnswer": 3,
    "explanation": "Gestação gemelar monocoriônica e diamniótica com um feto abaixo do percentil 10 (percentil 3) e discordância de peso de 28% (> 25%), com líquido amniótico normal nos dois sacos e Dopplers normais: restrição de crescimento intrauterino seletiva (RCIUs), tipo I de Gratacós (Doppler da artéria umbilical normal). Decorre da divisão desigual do território placentário.",
    "commentary": "Gemelidade imperfeita (A): são gêmeos unidos (siameses), que exigem gestação monoamniótica.\n\nSíndrome de transfusão feto-fetal (B): o critério é a sequência polidrâmnio (receptor) e oligoâmnio (doador); aqui o líquido é normal nos dois sacos.\n\nSequência anemia-policitemia (C): diagnosticada pela discordância do pico sistólico da artéria cerebral média (um feto anêmico, outro policitêmico), com Dopplers aqui normais.\n\nSequência TRAP (E): um dos gêmeos é acárdico, perfundido de forma reversa pelo gêmeo “bomba”.\n\nGabarito oficial do ENARE 2025.",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (2016); Gratacós E. et al. classificação da RCIU seletiva",
    "tags": [
      "gestação gemelar",
      "monocoriônica",
      "restrição de crescimento seletiva",
      "medicina fetal"
    ],
    "tip": "Monocoriônica com discordância de peso > 25% e líquido normal = RCIU seletiva, não transfusão feto-fetal."
  },
  {
    "id": "enare2025-77",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante realiza ultrassonografia obstétrica, que evidencia uma medida do maior bolsão vertical do líquido amniótico de 12 cm.\n\nA condição que pode estar associada a esse quadro é:",
    "options": [
      "insuficiência uteroplacentária",
      "displasia tanatofórica no feto",
      "agenesia renal bilateral fetal",
      "restrição de crescimento fetal",
      "gravidez com pós-datismo"
    ],
    "correctAnswer": 1,
    "explanation": "Maior bolsão vertical ≥ 8 cm define polidrâmnio (12 cm é polidrâmnio moderado). As causas fetais incluem alterações que impedem a deglutição ou a absorção do líquido (atresia de esôfago/duodeno, defeitos neuromusculares, anomalias do SNC) e displasias esqueléticas com tórax estreito, como a displasia tanatofórica, que comprime o esôfago e prejudica a deglutição. Também se associam diabetes materno, gemelaridade monocoriônica, anemia fetal e infecções.",
    "commentary": "Insuficiência uteroplacentária (A), agenesia renal bilateral (C), restrição de crescimento (D) e pós-datismo (E): todas se associam a oligoâmnio (redução da diurese fetal ou ausência de rins), não a polidrâmnio.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Zugaib Obstetrícia, 5ª ed.; SMFM Consult Series nº 46 – Evaluation and management of polyhydramnios",
    "tags": [
      "polidrâmnio",
      "líquido amniótico",
      "displasia esquelética",
      "medicina fetal"
    ],
    "tip": "Polidrâmnio: algo impede o feto de engolir (atresias, SNC, tórax estreito) ou diabetes materno."
  },
  {
    "id": "enare2025-78",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 25 anos chega ao ambulatório com um exame de farmácia demonstrando gravidez. Ainda não realizou ultrassonografia e, pela data da última menstruação, estaria com aproximadamente 8 semanas de gestação.\n\nAo toque, nota-se um amolecimento acentuado no istmo, que configuraria o sinal de:",
    "options": [
      "Hegar",
      "Piskacek",
      "Osiander",
      "Nobile-Budin",
      "Puzos"
    ],
    "correctAnswer": 0,
    "explanation": "Os sinais de presunção e probabilidade da gravidez ao exame físico incluem alterações de consistência e forma do útero. O sinal de Hegar é o amolecimento acentuado do istmo uterino, percebido ao toque bimanual por volta de 6 a 8 semanas, que dá a sensação de que o corpo uterino está separado do colo.",
    "commentary": "Piskacek (B): assimetria uterina, com abaulamento no local de implantação do ovo.\n\nOsiander (C): percepção do pulso da artéria vaginal nos fundos de saco laterais.\n\nNobile-Budin (D): preenchimento dos fundos de saco laterais pelo útero globoso.\n\nPuzos (E): rechaço fetal intrauterino ao toque, perceptível a partir do 4º mês.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Rezende – Obstetrícia, 14ª ed.; Zugaib Obstetrícia, 5ª ed.",
    "tags": [
      "diagnóstico de gravidez",
      "sinais de gravidez",
      "semiologia obstétrica"
    ],
    "tip": "Hegar = istmo amolecido; Osiander = pulso vaginal; Piskacek = assimetria; Nobile-Budin = fundos de saco cheios."
  },
  {
    "id": "enare2025-79",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 38 anos, secundigesta e cardiopata, chega à emergência referindo cólicas intensas, sangramento vaginal em grande quantidade e sangue vivo. A idade gestacional, estabelecida pela ultrassonografia transvaginal realizada com 6 semanas, é de 9 semanas e 3 dias. Ao exame, o útero encontra-se aumentado de volume, amolecido, com colo entreaberto e saída de material ovular identificada no exame especular. A ultrassonografia mostra a presença de restos ovulares em grande quantidade.\n\nDiante desse quadro, a conduta deve ser:",
    "options": [
      "esvaziamento uterino por aspiração a vácuo ou curetagem",
      "ocitocina venosa, 20 UI em 500 ml de soro fisiológico",
      "expectante, monitorando a pressão arterial e sangramento",
      "misoprostol retal na dose de 800 mcg em dose única",
      "realização de nova ultrassonografia transvaginal em 12 horas"
    ],
    "correctAnswer": 0,
    "explanation": "Gestação de 9 semanas com sangramento abundante, cólicas, colo entreaberto, eliminação de material ovular e restos em grande quantidade ao ultrassom: abortamento incompleto com sangramento importante, em paciente cardiopata (pouca tolerância a perda sanguínea e a instabilidade). A conduta é o esvaziamento uterino imediato, preferencialmente por aspiração manual ou elétrica a vácuo (AMIU) ou por curetagem, que resolve o sangramento rapidamente.",
    "commentary": "Ocitocina venosa (B): pouco eficaz no primeiro trimestre (poucos receptores) e não substitui o esvaziamento.\n\nConduta expectante (C): inadequada com sangramento volumoso em cardiopata.\n\nMisoprostol 800 mcg retal (D): opção no abortamento incompleto estável, mas demora horas e pode falhar; com sangramento abundante, o esvaziamento instrumental é preferível.\n\nNovo ultrassom em 12 horas (E): atrasa o tratamento de uma situação já diagnosticada.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Atenção Humanizada ao Abortamento: norma técnica; Febrasgo – Abortamento",
    "tags": [
      "abortamento incompleto",
      "AMIU",
      "curetagem",
      "hemorragia da primeira metade da gestação"
    ],
    "tip": "Abortamento incompleto com sangramento importante: esvaziamento uterino (AMIU) imediato."
  },
  {
    "id": "enare2025-80",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 20 semanas, moradora de área endêmica, chegou à admissão da maternidade com sinais e sintomas sugestivos de dengue.\n\nApós o exame clínico-obstétrico e laboratorial, a equipe de plantão resolveu internar e tratar a paciente, pois identificou corretamente o seguinte sinal de alarme:",
    "options": [
      "vômitos esporádicos",
      "dor abdominal moderada",
      "hipotensão postural e/ou lipotimia",
      "diminuição progressiva do hematócrito",
      "esplenomegalia 1 cm abaixo do rebordo costal"
    ],
    "correctAnswer": 2,
    "explanation": "Na dengue, os sinais de alarme indicam extravasamento plasmático e risco de choque, e classificam o paciente no grupo C (internação). São eles: dor abdominal intensa e contínua; vômitos persistentes; acúmulo de líquidos (ascite, derrame pleural ou pericárdico); hipotensão postural e/ou lipotimia; hepatomegalia > 2 cm; sangramento de mucosa; letargia/irritabilidade; e aumento progressivo do hematócrito. Gestantes já são grupo de risco (grupo B ou mais); com sinal de alarme, internam.",
    "commentary": "Vômitos esporádicos (A): o sinal de alarme é vômito persistente.\n\nDor abdominal moderada (B): o sinal de alarme é dor intensa e contínua.\n\nQueda progressiva do hematócrito (D): o alarme é o aumento progressivo do hematócrito (hemoconcentração); queda pode indicar sangramento ou hemodiluição.\n\nEsplenomegalia de 1 cm (E): o sinal citado no manual é hepatomegalia > 2 cm.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "tags": [
      "dengue",
      "sinais de alarme",
      "gestação",
      "arboviroses"
    ],
    "tip": "Sinais de alarme da dengue: dor abdominal intensa, vômitos persistentes, lipotimia, hepatomegalia > 2 cm, sangramento de mucosa, Ht subindo."
  },
  {
    "id": "enare2025-81",
    "module": "Saúde Coletiva",
    "text": "Alice, 30 anos, chega à unidade básica de saúde com tosse seca, chiado no peito e dispneia aos grandes esforços, com piora à noite. Não tem história de febre, não apresenta perda de peso e a mucosa nasal está sem alterações. Piora com a fumaça de cigarro do marido. Ao exame pulmonar, apresenta tosse, murmúrio vesicular e sibilos difusos, especialmente na expiração forçada. Não apresenta outras alterações. Pesa 60 kg, tem 1,60 m de altura, seu IMC é 21,5 kg/m², a FC está em 77 bpm e a FR, em 15 irpm. O exame cardiovascular indica ritmo regular em 2 tempos, sem sopro e sem alteração de ictus. O abdômen está normotenso, depressível, sem organomegalias ou ruídos hidroaéreos presentes.\n\nO diagnóstico provável é:",
    "options": [
      "asma",
      "rinossinusite",
      "DPOC",
      "tuberculose",
      "pneumonia adquirida na comunidade"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem com tosse seca, sibilância e dispneia de piora noturna, desencadeadas por fumaça de cigarro (irritante), sem febre ou perda de peso, com sibilos difusos à ausculta e sem outras alterações: quadro típico de asma. O diagnóstico é confirmado por espirometria com obstrução reversível ao broncodilatador (ou variabilidade do pico de fluxo).",
    "commentary": "Rinossinusite (B): a mucosa nasal está normal e não explica sibilos difusos.\n\nDPOC (C): exige exposição prolongada (tabagismo próprio, biomassa), em geral após os 40 anos, com sintomas persistentes e pouco variáveis.\n\nTuberculose (D): tosse produtiva por mais de 3 semanas com febre, sudorese e perda de peso.\n\nPneumonia (E): febre e achados focais (estertores, macicez).\n\nGabarito oficial do ENARE 2025.",
    "reference": "Global Initiative for Asthma (GINA 2024); Sociedade Brasileira de Pneumologia e Tisiologia – Recomendações para o manejo da asma (2020)",
    "tags": [
      "asma",
      "sibilância",
      "atenção primária",
      "pneumologia"
    ],
    "tip": "Tosse, chiado e dispneia de piora noturna com gatilho = asma."
  },
  {
    "id": "enare2025-82",
    "module": "Saúde Coletiva",
    "text": "Carlos, 27 anos, vai à consulta médica com febre, exantema, gânglios retroauriculares aumentados, conjuntivite, artralgia e tosse. Em seu prontuário, não há registro de vacinação contra a rubéola. Ele declara não ter viajado recentemente, nem ter tido contato com pessoas confirmadas para rubéola. Contudo, sua região encontra-se no estado que registrou um surto da doença há 4 meses. Trata-se de um caso suspeito de rubéola.\n\nO melhor método para fazer a confirmação desse caso é:",
    "options": [
      "examinar se há vínculo epidemiológico com outros casos confirmados",
      "realizar a sorologia de anticorpos IgM e IgG contra rubéola",
      "verificar a associação temporal com a vacinação",
      "considerar os critérios clínicos como suficientes, diante dos sinais e sintomas presentes",
      "observar o caso por 48 horas"
    ],
    "correctAnswer": 1,
    "explanation": "Na vigilância das doenças exantemáticas, o caso suspeito de rubéola é confirmado por critério laboratorial, com sorologia para detecção de IgM específica (e soroconversão ou aumento de IgG em amostras pareadas). Coleta-se também material para RT-PCR (swab de oro/nasofaringe e urina) para identificação viral e genotipagem. O vínculo epidemiológico só é usado quando não é possível o diagnóstico laboratorial.",
    "commentary": "Vínculo epidemiológico (A): é critério de confirmação apenas quando não é possível coletar amostra, e o paciente não teve contato com casos confirmados.\n\nAssociação temporal com vacinação (C): serve para classificar evento adverso pós-vacinal; o paciente não foi vacinado.\n\nCritérios clínicos suficientes (D): o quadro é inespecífico e se confunde com outras doenças exantemáticas; clínico não confirma.\n\nObservar por 48 horas (E): não confirma nem descarta o caso.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde, 6ª ed. (sarampo e rubéola)",
    "tags": [
      "rubéola",
      "vigilância epidemiológica",
      "doenças exantemáticas",
      "sorologia"
    ],
    "tip": "Doença exantemática suspeita (sarampo/rubéola): confirmação laboratorial com IgM + RT-PCR."
  },
  {
    "id": "enare2025-83",
    "module": "Saúde Coletiva",
    "text": "Letícia está na 10ª semana de gestação. Diante do aumento de casos de gripe entre familiares e conhecidos, ela foi à unidade básica de saúde para saber se precisava tomar a vacina contra influenza. Na análise em seu prontuário, verificou-se que sua última vacina havia sido no ano anterior.\n\nEm relação a esse caso, é correto afirmar que:",
    "options": [
      "não se recomenda a vacina nesse estágio da gestação",
      "não é necessário o reforço da vacina, pois ela confere imunidade por 10 anos",
      "deve-se evitar a vacina na gestação",
      "a paciente deve ser revacinada",
      "a vacina deve ser tomada, por segurança, após 12 semanas de gestação"
    ],
    "correctAnswer": 3,
    "explanation": "A vacina influenza é inativada e recomendada em qualquer idade gestacional, sendo as gestantes grupo prioritário (maior risco de formas graves). Como a composição da vacina muda anualmente conforme as cepas circulantes e a proteção diminui ao longo dos meses, a vacinação deve ser repetida a cada ano. Portanto, a paciente deve ser revacinada, independentemente da idade gestacional.",
    "commentary": "Não recomendada nesse estágio (A) e evitar na gestação (C): é vacina inativada, segura e indicada em todos os trimestres.\n\nImunidade por 10 anos (B): a proteção dura cerca de um ano, e a vacina é atualizada anualmente.\n\nAguardar 12 semanas (E): não há necessidade de esperar o fim do primeiro trimestre.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Informe técnico da Campanha Nacional de Vacinação contra a Influenza; Manual de Normas e Procedimentos para Vacinação",
    "tags": [
      "influenza",
      "vacinação na gestação",
      "imunizações",
      "pré-natal"
    ],
    "tip": "Influenza: vacina anual, em qualquer idade gestacional."
  },
  {
    "id": "enare2025-84",
    "module": "Saúde Coletiva",
    "text": "Em uma atenção primária de qualidade, é papel da APS integrar verticalmente os serviços. A APS, como parte integrante da rede de atenção à saúde, estrutura-se segundo atributos e funções.\n\nAlém da resolubilidade, são funções da APS:",
    "options": [
      "organização e responsabilização",
      "organização e primeiro contato",
      "primeiro contato e longitudinalidade",
      "integralidade e coordenação",
      "coordenação e orientação comunitária"
    ],
    "correctAnswer": 0,
    "explanation": "Segundo Eugênio Vilaça Mendes, além dos atributos de Starfield (primeiro contato, longitudinalidade, integralidade, coordenação, e os derivados), a APS, como centro de comunicação das redes de atenção, cumpre três funções: resolubilidade (resolver a grande maioria dos problemas de saúde da população), organização (ou comunicação — ordenar os fluxos e contrafluxos de pessoas, produtos e informações na rede) e responsabilização (responsabilizar-se pela saúde da população adscrita).",
    "commentary": "Organização e primeiro contato (B), primeiro contato e longitudinalidade (C), integralidade e coordenação (D) e coordenação e orientação comunitária (E): primeiro contato, longitudinalidade, integralidade, coordenação e orientação comunitária são atributos (essenciais e derivados) da APS, não funções.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Mendes EV. As redes de atenção à saúde. Brasília: OPAS, 2011; Mendes EV. A construção social da atenção primária à saúde, CONASS, 2015",
    "tags": [
      "atenção primária à saúde",
      "redes de atenção à saúde",
      "SUS",
      "funções da APS"
    ],
    "tip": "Funções da APS (Mendes): resolubilidade, organização (comunicação) e responsabilização."
  },
  {
    "id": "enare2025-85",
    "module": "Saúde Coletiva",
    "text": "Milton teve o diagnóstico de monkeypox confirmado por meio de PCR positivo. Ele se enquadra no grupo de indivíduos com alto risco de desenvolver formas graves.\n\nSeu monitoramento deve acontecer:",
    "options": [
      "a cada 2 dias",
      "a cada 3 dias",
      "a cada 7 dias",
      "a cada 15 dias",
      "diariamente"
    ],
    "correctAnswer": 4,
    "explanation": "Pelas orientações do Ministério da Saúde para mpox, os casos confirmados em isolamento devem ser monitorados até a resolução das lesões. Pacientes com fatores de risco para formas graves (imunossuprimidos, PVHIV com CD4 baixo, gestantes, crianças) devem ter monitoramento diário, pela possibilidade de evolução rápida, complicações e necessidade de antiviral ou internação. Nos demais, o monitoramento pode ser a cada 48 horas.",
    "commentary": "A cada 2 dias (A): é a periodicidade para casos sem risco de gravidade.\n\nA cada 3 (B), 7 (C) e 15 dias (D): intervalos longos demais para quem tem risco de evolução grave.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Nota técnica e Plano de Contingência para Mpox; Guia de Vigilância em Saúde",
    "tags": [
      "mpox",
      "monkeypox",
      "vigilância epidemiológica",
      "monitoramento de casos"
    ],
    "tip": "Mpox com risco de gravidade: monitoramento diário."
  },
  {
    "id": "enare2025-86",
    "module": "Saúde Coletiva",
    "text": "Geraldo, 37 anos, adscrito à unidade básica de saúde, chega para consulta apresentando sintomas psicóticos. Como parte de seu delírio persecutório, recusa-se a ser medicado e não aceita ser encaminhado para o CAPS.\n\nNesse caso, a conduta correta é:",
    "options": [
      "encaminhar para o CAPS mesmo assim, pois a unidade não tem recurso para esse atendimento",
      "insistir com a medicação, que é condição para um plano terapêutico adequado",
      "fazer o acolhimento de Geraldo e convencê-lo a aderir ao tratamento para os problemas identificados",
      "fazer o acolhimento de Geraldo, avaliar o quadro clínico geral e pactuar o acompanhamento na medida de suas limitações, lançando mão da entrevista motivacional se possível",
      "chamar a ambulância para levá-lo compulsoriamente para a internação"
    ],
    "correctAnswer": 3,
    "explanation": "Na atenção primária, o paciente com sintomas psicóticos que recusa medicação e encaminhamento deve ser acolhido, com avaliação clínica global (incluindo risco para si e para terceiros, que definiria intervenção involuntária). Sem risco iminente, a conduta é construir vínculo e pactuar um acompanhamento possível, respeitando a autonomia e usando estratégias como a entrevista motivacional, com apoio matricial do CAPS/NASF (eMulti) e envolvimento da família.",
    "commentary": "Encaminhar ao CAPS mesmo assim (A): a APS é responsável pelo cuidado longitudinal, e forçar o encaminhamento rompe o vínculo.\n\nInsistir na medicação como condição (B): condicionar o cuidado à medicação afasta o paciente.\n\nConvencê-lo a aderir (C): o objetivo é pactuar, respeitando os limites do paciente, não convencê-lo.\n\nInternação compulsória (E): só se justifica diante de risco grave e iminente, não descrito no caso.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Cadernos de Atenção Básica nº 34: Saúde Mental; Lei 10.216/2001",
    "tags": [
      "saúde mental",
      "psicose",
      "atenção primária à saúde",
      "entrevista motivacional",
      "CAPS"
    ],
    "tip": "Na APS, sem risco iminente: acolher, vincular e pactuar; internação involuntária só com risco."
  },
  {
    "id": "enare2025-87",
    "module": "Saúde Coletiva",
    "text": "Apolinário, 86 anos, perfil 3 de funcionalidade, com Alzheimer em estágio avançado, hipertenso, diabético e com imobilidade grau IV, em uso de medicação para as doenças de base, é levado à consulta médica.\n\nSobre seu quadro clínico, é correto afirmar que:",
    "options": [
      "deve ser feito controle rigoroso da hipertensão e diabetes, com vistas à reabilitação",
      "todas as medicações em uso certamente são essenciais e devem ser mantidas, independentemente de se configurar a polifarmácia",
      "Apolinário apresenta dependência parcial para as atividades básicas da vida diária",
      "uma equipe multiprofissional deve ser acionada para reabilitação de Apolinário",
      "Apolinário é um paciente em cuidados paliativos prolongados ou em fase final de vida"
    ],
    "correctAnswer": 4,
    "explanation": "Idoso de 86 anos com Alzheimer avançado, imobilidade grau IV (restrito ao leito) e perfil de funcionalidade de alta dependência: trata-se de paciente em fase avançada de doença crônica progressiva, sem perspectiva de reabilitação, o que caracteriza cuidados paliativos prolongados ou de fim de vida. O plano deve priorizar conforto e qualidade de vida, metas terapêuticas menos rígidas (glicemia e pressão), desprescrição e apoio ao cuidador.",
    "commentary": "Controle rigoroso de hipertensão e diabetes para reabilitação (A): em fim de vida, metas rígidas aumentam o risco de hipoglicemia e hipotensão sem benefício.\n\nManter todas as medicações (B): a polifarmácia deve ser revista, com desprescrição do que não traz benefício.\n\nDependência parcial (C): com Alzheimer avançado e imobilidade grau IV, a dependência é total para as atividades básicas.\n\nEquipe multiprofissional para reabilitação (D): a equipe é necessária, mas para cuidado paliativo e conforto, não para reabilitação.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Moraes EN. Atenção à saúde do idoso: aspectos conceituais (OPAS/MS, 2012); Academia Nacional de Cuidados Paliativos – Manual de Cuidados Paliativos",
    "tags": [
      "cuidados paliativos",
      "doença de Alzheimer",
      "geriatria",
      "funcionalidade",
      "desprescrição"
    ],
    "tip": "Demência avançada + imobilidade total = foco em conforto e desprescrição."
  },
  {
    "id": "enare2025-88",
    "module": "Saúde Coletiva",
    "text": "Mylena, 42 anos, fuma 50 cigarros/dia desde os 16 anos. Seu Fagerström é igual a 10. Na escala de razões para fumar, declara que fuma para controlar o peso, para mediar situações de estresse e ansiedade e porque o cigarro é uma companhia. Diz que não consegue nem imaginar tentar parar de fumar e que, por isso, nunca tentou fazê-lo. Declara não se ver sem o cigarro. Recentemente, Mylena foi diagnosticada com neoplasia de pulmão.\n\nNesse caso, a abordagem a essa fumante deve considerar:",
    "options": [
      "uso de vapers para iniciar o processo de mudança",
      "cessação do tabagismo sem uso de suporte farmacoterápico",
      "cessação do tabagismo com uso de reposição de nicotina apenas",
      "entrevista motivacional, com o suporte comportamental e farmacoterápico necessário",
      "prescrição de bupropiona para cessação do tabagismo"
    ],
    "correctAnswer": 3,
    "explanation": "Fumante com alta dependência (Fagerström 10, 50 cigarros/dia), múltiplas razões para fumar e no estágio pré-contemplativo (não imagina parar e nunca tentou), agora com câncer de pulmão (momento de vulnerabilidade, mas também oportunidade). A abordagem começa pela entrevista motivacional para fazê-la avançar nos estágios de mudança, associada a abordagem cognitivo-comportamental e, quando ela estiver pronta, a farmacoterapia indicada pelo alto grau de dependência (terapia de reposição de nicotina combinada, bupropiona e/ou vareniclina).",
    "commentary": "Vapers (A): cigarros eletrônicos são proibidos no Brasil e não são recomendados para cessação.\n\nCessação sem fármaco (B): com Fagerström 10, a farmacoterapia aumenta muito a chance de sucesso.\n\nApenas reposição de nicotina (C): o tratamento deve incluir abordagem comportamental, e a paciente ainda não está pronta para parar.\n\nApenas bupropiona (E): prescrever medicamento sem motivação e sem suporte comportamental tende a falhar.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde/INCA – PCDT do Tabagismo (2020); Cadernos de Atenção Básica nº 40",
    "tags": [
      "tabagismo",
      "entrevista motivacional",
      "teste de Fagerström",
      "estágios de mudança",
      "atenção primária à saúde"
    ],
    "tip": "Pré-contemplativo: entrevista motivacional primeiro; alta dependência pede fármaco quando pronto."
  },
  {
    "id": "enare2025-89",
    "module": "Saúde Coletiva",
    "text": "Rodrigo, 48 anos, casado, autônomo, vem à unidade básica de saúde se queixando de dores de cabeça de repetição e apresentando PA = 165 x 90 mmHg. Em seu prontuário, identifica-se que, nas últimas 5 consultas, no último ano, por motivos diversos, sua pressão arterial foi, respectivamente, de 147 x 99 mmHg; 180 x 100 mmHg; 152 x 90 mmHg; 160 x 95 mmHg e 170 x 92 mmHg. Rodrigo tem história familiar de hipertensão e é sedentário.\n\nO fato que permite o diagnóstico de hipertensão arterial sistêmica é:",
    "options": [
      "ter sido admitido em unidade de pronto atendimento com pressão arterial 150 x 95 mmHg",
      "ser sedentário",
      "ter tido história familiar de hipertensão",
      "ter tido aferições da pressão arterial maiores que 140 x 90 mmHg no último ano",
      "ter 48 anos de idade"
    ],
    "correctAnswer": 3,
    "explanation": "O diagnóstico de hipertensão arterial é feito pela PA de consultório ≥ 140/90 mmHg em pelo menos duas ocasiões (consultas) diferentes, ou por medidas fora do consultório (MAPA/MRPA). Rodrigo tem várias aferições acima de 140/90 mmHg em consultas no último ano, o que confirma o diagnóstico. Fatores de risco (sedentarismo, história familiar, idade) não fazem diagnóstico.",
    "commentary": "Admissão em UPA com 150 x 95 mmHg (A): uma medida isolada, em contexto agudo, não faz diagnóstico.\n\nSedentarismo (B), história familiar (C) e idade (E): são fatores de risco para hipertensão, não critérios diagnósticos.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020)",
    "tags": [
      "hipertensão arterial sistêmica",
      "diagnóstico",
      "atenção primária à saúde"
    ],
    "tip": "HAS: PA ≥ 140/90 mmHg em pelo menos duas consultas (ou MAPA/MRPA alterada)."
  },
  {
    "id": "enare2025-90",
    "module": "Saúde Coletiva",
    "text": "Foram atendidas 5 irmãs na unidade básica de saúde. A única que tem características que permitem o diagnóstico de diabetes mellitus é:",
    "options": [
      "Maria Hilma, de 49 anos, que realizou teste de glicemia capilar com resultado 179 mg/dl",
      "Maria José, que, em 01/03/2024, apresentou hemoglobina glicada (HbA1c) = 5,6% e, em 12/07/2024, apresentou hemoglobina glicada (HbA1c) = 6,1%",
      "Maria Lina, que apresentou, em 01/03/2024, glicemia de jejum = 136 mg/dl e, em 12/07/2024, glicemia de jejum = 152 mg/dl",
      "Maria Cláudia, que apresenta glicemia de jejum = 126 mg/dl",
      "Maria Antônia, que apresenta hemoglobina glicada (HbA1c) = 4,5%"
    ],
    "correctAnswer": 2,
    "explanation": "Critérios diagnósticos de diabetes (SBD/ADA): glicemia de jejum ≥ 126 mg/dL, HbA1c ≥ 6,5%, glicemia de 2 horas no TOTG ≥ 200 mg/dL — confirmados em duas amostras ou dois exames diferentes —, ou glicemia ao acaso ≥ 200 mg/dL com sintomas clássicos.\n\nMaria Lina tem duas glicemias de jejum ≥ 126 mg/dL (136 e 152 mg/dL) em datas diferentes, o que confirma o diagnóstico.",
    "commentary": "Glicemia capilar de 179 mg/dL (A): glicemia capilar não é método diagnóstico, e o valor ao acaso seria ≥ 200 mg/dL com sintomas.\n\nHbA1c de 5,6% e 6,1% (B): valores de pré-diabetes (5,7–6,4%) e normal; não chegam a 6,5%.\n\nGlicemia de jejum de 126 mg/dL única (D): precisa de confirmação com segundo exame.\n\nHbA1c de 4,5% (E): normal.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (diagnóstico de diabetes); ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus",
      "diagnóstico",
      "glicemia de jejum",
      "hemoglobina glicada"
    ],
    "tip": "Diabetes: GJ ≥ 126, HbA1c ≥ 6,5% ou TOTG 2 h ≥ 200 — sempre confirmados (exceto glicemia ≥ 200 com sintomas)."
  },
  {
    "id": "enare2025-91",
    "module": "Saúde Coletiva",
    "text": "José, 55 anos, hipertenso há 3 anos, em uso regular de medicação, vem para consulta de rotina apresentando PA = 130 x 80 mmHg. Após exame clínico, conclui-se que tem baixo risco cardiovascular.\n\nNesse caso, a conduta é:",
    "options": [
      "manter a medicação e reforçar a importância de manter a mudança de estilo de vida, pois a PA está dentro da meta",
      "retirar a medicação e reforçar a importância de manter a mudança de estilo de vida, pois a PA está dentro da meta",
      "modificar a medicação para que o organismo não crie tolerância às medicações atuais, embora a PA esteja dentro da meta",
      "reforçar a mudança de estilo de vida, pois a PA está fora da meta",
      "modificar a conduta medicamentosa, pois a PA está fora da meta"
    ],
    "correctAnswer": 0,
    "explanation": "Hipertenso de baixo risco cardiovascular em tratamento, com PA de 130 x 80 mmHg. Pelas Diretrizes Brasileiras de Hipertensão (2020), a meta para hipertensos de risco baixo ou moderado é < 140/90 mmHg (idealmente entre 120–129/70–79 mmHg se tolerado). Como a PA está controlada, a conduta é manter o tratamento medicamentoso e reforçar as medidas de estilo de vida. A suspensão da medicação levaria à perda do controle.",
    "commentary": "Retirar a medicação (B): a PA está controlada justamente por causa do tratamento; hipertensão é doença crônica.\n\nTrocar por tolerância (C): anti-hipertensivos não induzem tolerância que exija troca.\n\nPA fora da meta (D e E): 130 x 80 mmHg está dentro da meta para baixo risco.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020)",
    "tags": [
      "hipertensão arterial sistêmica",
      "metas pressóricas",
      "atenção primária à saúde",
      "risco cardiovascular"
    ],
    "tip": "Hipertenso de baixo/moderado risco: meta < 140/90 mmHg."
  },
  {
    "id": "enare2025-92",
    "module": "Saúde Coletiva",
    "text": "Leonora, 60 anos, com diabetes mellitus diagnosticada há 5 anos, em acompanhamento contínuo na unidade básica de saúde, vem para a consulta de rotina. Após avaliação dos pés, identificamos: sensibilidade presente, deformidade ausente e úlceras ou cicatrizes de úlceras ausentes.\n\nSegundo o exame clínico do pé diabético, conclui-se que a categoria de risco e o melhor manejo para Leonora são, respectivamente:",
    "options": [
      "grau 0 – reavaliação anual",
      "grau I – reavaliação anual",
      "grau II – reavaliação semestral",
      "grau III – reavaliação semestral",
      "grau IIIa – reavaliação semestral"
    ],
    "correctAnswer": 0,
    "explanation": "Na classificação de risco do pé diabético (IWGDF/Ministério da Saúde), a paciente com sensibilidade protetora preservada, sem doença arterial periférica, sem deformidades e sem úlcera ou amputação prévia é de risco 0 (muito baixo). A conduta é reavaliar os pés uma vez por ano e manter as orientações de autocuidado.",
    "commentary": "Grau I com reavaliação anual (B): o grau 1 corresponde a perda de sensibilidade protetora ou doença arterial periférica, com reavaliação a cada 6–12 meses.\n\nGrau II semestral (C): perda de sensibilidade ou DAP associada a deformidade, reavaliação a cada 3–6 meses.\n\nGrau III (D) e IIIa (E): história de úlcera ou amputação, com reavaliação a cada 1–3 meses.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manual do pé diabético (2016); IWGDF Guidelines on the prevention of foot ulcers (2023)",
    "tags": [
      "pé diabético",
      "diabetes mellitus",
      "rastreamento",
      "atenção primária à saúde"
    ],
    "tip": "Pé diabético risco 0: sensibilidade normal, sem DAP, deformidade ou úlcera → reavaliação anual."
  },
  {
    "id": "enare2025-93",
    "module": "Saúde Coletiva",
    "text": "Vanda, 92 anos, hipertensa, com diagnóstico de Alzheimer há 16 anos, acamada, estável, sem lesões por pressão, sem histórico recente de internação, tem uma filha, Joana, de 68 anos, que faz o manejo diário: banho no leito, administração de medicação, dieta enteral, mudança de decúbito. A filha está bem orientada e procura se informar sobre o quadro e as melhores condutas.\n\nNesse caso, o plano terapêutico singular deve:",
    "options": [
      "dar suporte à cuidadora, acompanhá-la regularmente para avaliação de sobrecarga no cuidado e manter o acompanhamento de Vanda pela equipe da APS",
      "agendar consultas regulares de fisioterapia e fonoaudiologia e encaminhamento ao geriatra para acompanhamento da doença de Alzheimer",
      "agendar consultas regulares de nutricionista e encaminhamento ao CER para reabilitação da deglutição",
      "dar suporte à cuidadora e encaminhar Vanda para o serviço de atenção secundária domiciliar para reabilitação da deglutição por fonoaudióloga",
      "fornecer acompanhamento regular com fonoaudióloga e nutricionista e encaminhar a paciente ao serviço de cuidados paliativos"
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com Alzheimer avançado, acamada, mas estável, sem complicações recentes, e com cuidadora (filha idosa) bem orientada e engajada. O plano terapêutico singular deve focar no cuidado domiciliar pela equipe de APS (atenção domiciliar AD1), com suporte à cuidadora e avaliação periódica da sobrecarga — Joana tem 68 anos, faz cuidados intensivos e está em risco de adoecer. Não há necessidade de encaminhamentos especializados no momento, pois a paciente está estável e sem objetivo de reabilitação.",
    "commentary": "Fisioterapia, fonoaudiologia e geriatra (B), nutricionista e CER para deglutição (C) e reabilitação da deglutição em atenção domiciliar secundária (D): a paciente tem doença em fase avançada, estável, em dieta enteral, sem perspectiva de reabilitação; encaminhamentos de reabilitação não são a prioridade.\n\nFonoaudiologia, nutrição e serviço de cuidados paliativos (E): a abordagem paliativa já pode ser feita pela própria equipe da APS, sem necessidade de encaminhamento.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Caderno de Atenção Domiciliar; Guia Prático do Cuidador",
    "tags": [
      "plano terapêutico singular",
      "atenção domiciliar",
      "cuidador",
      "doença de Alzheimer",
      "atenção primária à saúde"
    ],
    "tip": "Paciente acamado estável com bom cuidador: APS acompanha e cuida também do cuidador."
  },
  {
    "id": "enare2025-94",
    "module": "Saúde Coletiva",
    "text": "Com queixa de dor de cabeça, Jéssica, 37 anos, diarista, vai pela primeira vez à unidade básica de saúde. Ela reporta: “Doutor, sinto essa dor há mais de 2 meses, desde que precisamos sair da nossa casa porque não dava mais para pagar o aluguel depois que meu marido foi demitido do emprego. Na minha casa somos eu, meu marido e três filhas de 4, 6 e 14 anos”.\n\nÉ exemplo de crise acidental do ciclo de vida familiar da família de Jéssica:",
    "options": [
      "família com filho pequeno",
      "família em estágio tardio",
      "desemprego",
      "família com criança em idade escolar",
      "família com adolescente"
    ],
    "correctAnswer": 2,
    "explanation": "Na abordagem familiar, distinguem-se as crises normativas (previsíveis, ligadas às etapas do ciclo de vida: nascimento de filhos, filhos em idade escolar, adolescência, saída dos filhos de casa, aposentadoria) das crises acidentais ou não normativas (inesperadas: desemprego, doença grave, morte precoce, migração, perdas financeiras). O desemprego do marido, que levou à perda da moradia, é um exemplo de crise acidental.",
    "commentary": "Família com filho pequeno (A), família em estágio tardio (B), família com criança em idade escolar (D) e família com adolescente (E): são estágios do ciclo de vida familiar, que geram crises normativas (esperadas), não acidentais.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Carter B, McGoldrick M. As mudanças no ciclo de vida familiar; Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "ciclo de vida familiar",
      "abordagem familiar",
      "medicina de família e comunidade",
      "crise acidental"
    ],
    "tip": "Crise normativa = esperada (etapas do ciclo); acidental = inesperada (desemprego, doença, morte)."
  },
  {
    "id": "enare2025-95",
    "module": "Saúde Coletiva",
    "text": "Mônica, 29 anos, professora, vem para a consulta na unidade básica de saúde preocupada com seu sobrepeso. Diz que anda muito estressada, que os cuidados com o filho mais novo têm tomado muito seu tempo e que o marido não ajuda e anda bebendo demais. Sua sogra Maria foi morar com eles e dá muito trabalho em virtude do quadro depressivo, que não melhora. O sogro, Mário, faleceu aos 53 anos, e isso a preocupa em relação a Mário Luís, seu marido, que também fuma e bebe demais. Eles têm ainda um filho de 12 anos, que não dá trabalho nenhum. Considere o genograma a seguir.\n\nO genograma de Mônica mostra que:",
    "options": [
      "existe um padrão repetitivo de comportamento e saúde entre Mário e Mário Luís",
      "existe um relação conflituosa entre Mônica e Maria",
      "existe uma relação conflituosa entre Mônica e Mário Luís",
      "Maria e Mário são divorciados",
      "Mário Luís é o indivíduo índice do genograma"
    ],
    "correctAnswer": 0,
    "explanation": "No genograma, Mário (pai de Mário Luís, falecido aos 53 anos — marcado com X) era etilista, hipertenso e tabagista; Mário Luís, o filho, também é etilista, hipertenso e tabagista. O genograma evidencia, assim, um padrão repetitivo de comportamentos e problemas de saúde entre gerações, um dos principais usos da ferramenta (identificar padrões familiares e riscos).",
    "commentary": "Relação conflituosa entre Mônica e Maria (B) e entre Mônica e Mário Luís (C): o genograma não traz símbolos de relação conflituosa (linhas em zigue-zague); as relações só seriam vistas num ecomapa ou com símbolos específicos.\n\nMaria e Mário divorciados (D): não há o símbolo de divórcio (duas barras na linha de união); Mário faleceu.\n\nMário Luís como caso índice (E): a pessoa índice é Mônica, que procurou atendimento, marcada com o contorno duplo.\n\nGabarito oficial do ENARE 2025.",
    "reference": "McGoldrick M, Gerson R. Genogramas: avaliação e intervenção familiar; Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "genograma",
      "abordagem familiar",
      "medicina de família e comunidade"
    ],
    "image": "/images/enare2025-95.webp",
    "tip": "No genograma, a pessoa índice tem contorno duplo; X indica falecimento."
  },
  {
    "id": "enare2025-96",
    "module": "Saúde Coletiva",
    "text": "Tatiana vem à consulta médica com queixa de dor lombar. Em sua consulta anterior, apresentou pressão arterial de 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal. Ela declara ter alergia a dipirona. De acordo com seu prontuário, seu último Papanicolau foi há 3 anos. Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação.\n\nEm relação ao registro das informações fornecidas por Tatiana no Registro Clínico Orientado por Problemas (RCOP), é correto afirmar que:",
    "options": [
      "devem ser registradas no campo Subjetivo as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”",
      "devem ser registradas no campo Objetivo as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”",
      "devem ser registradas no campo Avaliação as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”",
      "devem ser registradas no campo Avaliação as informações “Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação”",
      "as informações “Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação” não são relevantes; logo, não devem ser registradas no RCOP"
    ],
    "correctAnswer": 1,
    "explanation": "No Registro Clínico Orientado por Problemas (RCOP), as notas de evolução seguem o formato SOAP: S (subjetivo) — o que a pessoa relata (queixas, sentimentos, preocupações); O (objetivo) — dados do exame físico e de exames complementares (sinais vitais, peso, altura); A (avaliação) — problemas identificados e raciocínio do profissional; P (plano) — condutas. Pressão arterial, frequência cardíaca, peso, altura e frequência respiratória são dados objetivos.",
    "commentary": "Sinais vitais no Subjetivo (A) ou na Avaliação (C): são dados medidos pelo profissional, logo objetivos.\n\nRelato de cansaço, medo e insônia na Avaliação (D): o que a paciente relata vai no Subjetivo; a Avaliação é a interpretação do médico.\n\nNão registrar as preocupações (E): sentimentos e preocupações são relevantes para o cuidado centrado na pessoa e devem ser registrados no Subjetivo.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed. (registro clínico orientado por problemas)",
    "tags": [
      "registro clínico orientado por problemas",
      "SOAP",
      "prontuário",
      "medicina de família e comunidade"
    ],
    "tip": "SOAP: S = o que o paciente diz; O = o que o médico mede/observa; A = avaliação; P = plano."
  },
  {
    "id": "enare2025-97",
    "module": "Clínica Médica",
    "text": "Um senhor de 82 anos comparece à consulta queixando-se de uma cefaleia de início recente. HAS controlada com IECA. Exame físico sem particularidades, exceto por espessamento da artéria temporal à palpação.\n\nNesse contexto:",
    "options": [
      "PCR elevada aumenta a chance de arterite de células gigantes",
      "VHS > 100 mm/h aumenta a chance de arterite de células gigantes",
      "tomografia craniana é essencial para excluir diagnósticos outros, antes de se pensar em arterite de células gigantes",
      "radiografia craniana é essencial para excluir diagnósticos outros, antes de se pensar em arterite de células gigantes",
      "ressonância magnética craniana é essencial para excluir diagnósticos outros, antes de se pensar em arterite de células gigantes"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com cefaleia nova e espessamento da artéria temporal: forte suspeita de arterite de células gigantes. Os marcadores inflamatórios são muito sensíveis — VHS e PCR estão elevados na grande maioria dos casos —, e uma VHS > 100 mm/h aumenta de forma importante a probabilidade do diagnóstico (razão de verossimilhança alta). O diagnóstico é confirmado por biópsia ou ultrassom da artéria temporal, e o corticoide deve ser iniciado sem esperar a confirmação, pelo risco de cegueira.",
    "commentary": "PCR elevada (A): a PCR também se eleva e é muito sensível, mas a banca considerou a VHS acima de 100 mm/h como o achado que mais aumenta a probabilidade.\n\nTC (C), radiografia (D) e RM de crânio (E): não são essenciais antes de pensar em arterite; o exame físico já é sugestivo, e atrasar o corticoide para fazer imagem expõe ao risco de perda visual.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sociedade Brasileira de Reumatologia; ACR/Vasculitis Foundation Guideline for Giant Cell Arteritis (2021); ACR/EULAR 2022 classification criteria for GCA",
    "tags": [
      "arterite de células gigantes",
      "cefaleia",
      "VHS",
      "vasculites",
      "reumatologia"
    ],
    "alert": "Questão discutível: a PCR elevada também aumenta a chance de arterite de células gigantes (é até mais sensível que a VHS). O gabarito oficial é B; a alternativa A também é aceita aqui.",
    "alsoAccepted": [
      0
    ],
    "tip": "Idoso com cefaleia nova + artéria temporal alterada: VHS/PCR e corticoide imediato."
  },
  {
    "id": "enare2025-98",
    "module": "Saúde Coletiva",
    "text": "Segundo o Manual de Recomendações e Controle da Tuberculose no Brasil 2ª ed., atualizado em 29/05/2024, a transmissão e adoecimento por TB são influenciados por fatores demográficos, sociais e econômicos. Dentre os fatores que contribuem para a manutenção e propagação da doença, destacam-se: urbanização crescente e desordenada, desigualdade na distribuição de renda, moradias precárias e superlotação, insegurança alimentar e baixa escolaridade, bem como dificuldade de acesso aos serviços e bens públicos. Dessa maneira, no Brasil, assim como em outros países que têm condições de vida semelhantes, alguns grupos populacionais apresentam maior vulnerabilidade para a TB.\n\nPelo exposto acima, em comparação com a população em geral, o risco de adoecimento por tuberculose é maior no seguinte grupo:",
    "options": [
      "indígenas",
      "profissionais de saúde",
      "pessoas vivendo com o HIV",
      "pessoas privadas de liberdade",
      "pessoas vivendo em situação de rua"
    ],
    "correctAnswer": 4,
    "explanation": "Segundo o Manual de Recomendações para o Controle da Tuberculose no Brasil (2ª ed., 2024), todas as populações listadas têm risco aumentado de adoecer por TB em relação à população geral, mas o maior risco relativo é o das pessoas em situação de rua (cerca de 56 vezes), seguido das pessoas vivendo com HIV (cerca de 28 vezes) e das pessoas privadas de liberdade (cerca de 28 vezes). Indígenas têm risco cerca de 3 vezes maior, e profissionais de saúde, cerca de 3 vezes.",
    "commentary": "Indígenas (A), profissionais de saúde (B), pessoas vivendo com HIV (C) e pessoas privadas de liberdade (D): todas são populações vulneráveis com risco aumentado, mas menor que o da população em situação de rua.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2024)",
    "tags": [
      "tuberculose",
      "populações vulneráveis",
      "população em situação de rua",
      "epidemiologia"
    ],
    "tip": "Risco de TB: situação de rua (~56×) > HIV e privados de liberdade (~28×) > indígenas e profissionais de saúde (~3×)."
  },
  {
    "id": "enare2025-99",
    "module": "Saúde Coletiva",
    "text": "De acordo com parâmetros do Ministério da Saúde, a definição utilizada na vigilância da influenza e da covid-19 para determinar casos de síndrome respiratória aguda grave (SRAG) é:",
    "options": [
      "indivíduo com febre, mesmo que referida, acompanhada de tosse ou dor de garganta e com início dos sintomas nos últimos sete dias",
      "indivíduo com quadro respiratório agudo, caracterizado por pelo menos dois dos seguintes sinais e sintomas: febre (mesmo que referida), calafrios, dor de garganta, dor de cabeça, tosse, coriza, distúrbios olfativos ou distúrbios gustativos",
      "em crianças, além da febre (mesmo que referida), calafrios, dor de garganta, dor de cabeça, tosse, coriza, distúrbios olfativos ou distúrbios gustativos, também obstrução nasal, na ausência de outro diagnóstico específico",
      "em idosos, critérios específicos de agravamento como síncope, confusão mental, sonolência excessiva, irritabilidade e inapetência",
      "indivíduo com síndrome gripal que apresenta dispneia/desconforto respiratório, ou pressão persistente no tórax, ou saturação de O₂ ≤94% em ar ambiente ou coloração azulada dos lábios ou rosto"
    ],
    "correctAnswer": 4,
    "explanation": "Na vigilância da influenza e da covid-19, a síndrome respiratória aguda grave (SRAG) é definida como síndrome gripal acompanhada de dispneia/desconforto respiratório, ou pressão ou dor persistente no tórax, ou saturação de O₂ ≤ 94% em ar ambiente, ou coloração azulada (cianose) dos lábios ou do rosto. Em crianças, consideram-se também batimento de asa de nariz, tiragem intercostal, desidratação e inapetência.",
    "commentary": "Febre com tosse ou dor de garganta nos últimos 7 dias (A): definição antiga de síndrome gripal (influenza).\n\nPelo menos dois sinais e sintomas como febre, calafrios, dor de garganta e coriza (B): definição atual de síndrome gripal, não de SRAG.\n\nObstrução nasal em crianças (C): critério adicional de síndrome gripal na criança.\n\nCritérios de agravamento em idosos (D): síncope, confusão, sonolência e inapetência são considerados na definição de síndrome gripal em idosos, não de SRAG.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância Integrada da Covid-19, Influenza e outros vírus respiratórios (2023)",
    "tags": [
      "síndrome respiratória aguda grave",
      "síndrome gripal",
      "influenza",
      "covid-19",
      "vigilância epidemiológica"
    ],
    "tip": "SRAG = síndrome gripal + dispneia, dor torácica persistente, SatO₂ ≤ 94% ou cianose."
  },
  {
    "id": "enare2025-100",
    "module": "Saúde Coletiva",
    "text": "Os movimentos antivacina, causados por um sistema de desinformação, trazem muitos danos para as pessoas não vacinadas, pois já está mais que provado pela ciência que vacinas são muito efetivas e salvam vidas.\n\nUma dessas doenças preveníveis por vacinas tem como manifestação clínica típica a presença de placas pseudomembranosas branco-acinzentadas, aderentes, que se instalam nas amígdalas e invadem estruturas vizinhas. Essas placas podem se localizar na faringe, na laringe e nas fossas nasais; e, com menos frequência, também são observadas na conjuntiva, na pele, no conduto auditivo, na vulva, no pênis (pós circuncisão) e no cordão umbilical. A doença manifesta-se clinicamente por comprometimento do estado geral do paciente, que pode se apresentar prostrado e pálido. A dor de garganta é discreta, independentemente da localização ou da quantidade de placas existentes, e a febre normalmente não é muito elevada, variando de 37,5 °C a 38,5 °C, embora temperaturas mais altas não afastem o diagnóstico. Nos casos mais graves, há intenso edema do pescoço, com grande aumento dos gânglios linfáticos dessa área (pescoço taurino) e edema periganglionar nas cadeias cervicais e submandibulares. Dependendo do tamanho e da localização da placa pseudomembranosa, pode ocorrer asfixia mecânica aguda no paciente, o que muitas vezes exige imediata traqueostomia para evitar a morte.\n\nA descrição acima é característica de:",
    "options": [
      "vírus sincicial respiratório",
      "difteria",
      "faringo-amigdalite por estreptococo",
      "sífilis",
      "sarampo"
    ],
    "correctAnswer": 1,
    "explanation": "Placas pseudomembranosas branco-acinzentadas, aderentes (sangram ao serem removidas), que se estendem das amígdalas para faringe, laringe e fossas nasais, com comprometimento do estado geral desproporcional à febre baixa, dor de garganta discreta e edema cervical (pescoço taurino): quadro clássico de difteria (Corynebacterium diphtheriae). É doença prevenível pela vacina (DTP/dT) e de notificação compulsória imediata; o tratamento é soro antidiftérico e antibiótico (penicilina ou eritromicina).",
    "commentary": "Vírus sincicial respiratório (A): causa bronquiolite em lactentes, sem placas pseudomembranosas.\n\nFaringoamigdalite estreptocócica (C): exsudato amigdaliano que não ultrapassa as amígdalas e se destaca facilmente, com febre alta e dor de garganta intensa.\n\nSífilis (D): pode causar lesões orais (cancro, placas mucosas), mas não placas pseudomembranosas invasivas com pescoço taurino.\n\nSarampo (E): febre alta, exantema, conjuntivite, coriza, tosse e manchas de Koplik.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde, 6ª ed. (difteria)",
    "tags": [
      "difteria",
      "faringoamigdalite",
      "doenças imunopreveníveis",
      "vigilância epidemiológica"
    ],
    "tip": "Placa pseudomembranosa aderente que ultrapassa a amígdala + pescoço taurino = difteria."
  }
];
