import { Question } from '../types';

// Simulado "Sugerido ENAMED - 1" — 100 questões no formato ENAMED.
// Gabarito TÉCNICO, não oficial (nenhuma banca publicou gabarito para estes itens).
// Questões provisórias (com * no material de origem) levam `alert`.
export const SUGERIDO_ENAMED_1_QUESTIONS: Question[] = [
  {
    "id": "sug-enamed1-1",
    "topography": "2.2",
    "topic": "Arritmias",
    "module": "Clínica Médica",
    "text": "Homem de 66 anos, com hipertensão arterial sistêmica bem controlada, comparece à Unidade de Pronto Atendimento com palpitações de início súbito há cerca de 2 horas. Nega outros sintomas. O exame físico revela PA 128 × 78 mmHg, FC 135 bpm e SatO₂ 98% em ar ambiente. O ECG mostra o seguinte resultado:\n\nQual é a conduta adequada nesse caso?",
    "options": [
      "(A) Implantar marca-passo temporário.",
      "(B) Proceder à cardioversão elétrica.",
      "(C) Realizar ecocardiograma transesofágico.",
      "(D) Iniciar anticoagulação plena."
    ],
    "correctAnswer": 3,
    "explanation": "Taquicardia de QRS estreito, com intervalos R-R irregulares e sem ondas P: fibrilação atrial (FA) com resposta ventricular rápida, iniciada há cerca de 2 horas. O paciente está estável — PA 128 × 78 mmHg, SatO₂ 98%, sem dor torácica, dispneia, congestão ou rebaixamento de consciência —, então não há indicação de cardioversão de emergência. O passo comum a qualquer estratégia é a proteção contra AVC: o CHA₂DS₂-VA é 2 (hipertensão + idade 65–74 anos), o que indica anticoagulação plena, mantida por tempo indeterminado, independentemente de se controlar a frequência ou reverter o ritmo.\n\nRoteiro da FA aguda:\n\n• Estabilidade: hipotensão/choque, angina, edema agudo de pulmão ou rebaixamento de consciência → cardioversão elétrica sincronizada imediata. Sem esses critérios, há tempo para decidir.\n• CHA₂DS₂-VA: insuficiência cardíaca (1), hipertensão (1), idade ≥ 75 anos (2), diabetes (1), AVC/AIT/embolia prévia (2), doença vascular (1), idade 65–74 anos (1). Escore ≥ 2 → anticoagular; escore 1 → considerar. Preferir os anticoagulantes diretos (apixabana, rivaroxabana, edoxabana, dabigatrana); varfarina se estenose mitral moderada a grave ou prótese mecânica.\n• Controle da frequência (alvo FC < 110 bpm em repouso): betabloqueador ou bloqueador de canal de cálcio não di-hidropiridínico (diltiazem, verapamil); digoxina ou amiodarona se disfunção ventricular.\n• Controle do ritmo (cardioversão elétrica ou química): FA < 24–48 h e baixo risco → pode reverter sem ecocardiograma transesofágico, já sob anticoagulação; FA ≥ 48 h, de início incerto ou com risco tromboembólico elevado → anticoagular por 3 semanas antes ou fazer ecocardiograma transesofágico para excluir trombo. Em todos os casos, anticoagular por pelo menos 4 semanas após a reversão.",
    "commentary": "Alternativa (A): marca-passo temporário trata bradicardia sintomática ou bloqueio AV avançado; aqui a frequência é alta, não baixa.\n\nAlternativa (B): cardioversão elétrica imediata é reservada à FA instável. No paciente estável, é uma das opções de controle do ritmo, mas com CHA₂DS₂-VA 2 só deve ser feita sob anticoagulação — e não é obrigatória.\n\nAlternativa (C): o ecocardiograma transesofágico só é usado se a estratégia escolhida for reverter o ritmo sem as 3 semanas prévias de anticoagulação; não é o primeiro passo de todo paciente.\n\nPonto de controvérsia: em FA com menos de 48 h, parte da literatura aceita cardioversão precoce já com o anticoagulante iniciado, o que tornaria B defensável. A anticoagulação, porém, é a única conduta obrigatória em qualquer cenário.",
    "tip": "FA estável: anticoagule conforme o CHA₂DS₂-VA e só depois escolha entre controlar a frequência ou o ritmo. FA instável: cardioversão elétrica sincronizada imediata.",
    "reference": "Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J, 2024. Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Fibrilação Atrial.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (alta controvérsia). Resposta adotada: D (anticoagulação plena pelo CHA₂DS₂-VA de 2 pontos).",
    "image": "/images/sugenamed1-1.webp"
  },
  {
    "id": "sug-enamed1-2",
    "topography": "11",
    "topic": "Síndrome do desconforto respiratório neonatal",
    "module": "Pediatria",
    "text": "A equipe de fisioterapia de uma maternidade chama o médico plantonista para reavaliar um neonato de 28 semanas de idade gestacional, nascido há 1 hora via parto vaginal, com peso adequado. O recém-nascido foi reanimado, intubado e colocado em ventilação mecânica. A fisioterapeuta informa que, após atendimento e ajustes do ventilador, o recém-nascido permanece necessitando de FiO₂ de 50% para manter SatO₂ 92%. A radiografia de tórax evidencia infiltrado reticular em vidro moído.\n\nQual é a conduta preconizada em relação ao uso de surfactante para esse recém-nascido?",
    "options": [
      "(A) Administrar surfactante exógeno por via endotraqueal e mantê-lo em ventilação mecânica.",
      "(B) Manter observação e reservar surfactante, se houver necessidade de ventilação de alta frequência.",
      "(C) Administrar surfactante exógeno por via inalatória e transicionar para ventilação não invasiva com CPAP.",
      "(D) Aumentar a FiO₂ para 60% e administrar surfactante, se necessário."
    ],
    "correctAnswer": 0,
    "explanation": "Prematuro de 28 semanas, com desconforto respiratório desde o nascimento, radiografia com infiltrado reticulogranular difuso em vidro moído e necessidade de FiO₂ de 50% para saturar 92%: síndrome do desconforto respiratório (SDR, doença da membrana hialina), causada pela deficiência de surfactante por imaturidade dos pneumócitos tipo II. O RN já está intubado e com FiO₂ alta, então deve receber surfactante exógeno pela cânula traqueal agora, mantendo a ventilação mecânica enquanto necessária e planejando a extubação precoce para CPAP.\n\nManejo da SDR do prematuro (consenso europeu e SBP):\n\n• Prevenção: corticoide antenatal (betametasona) entre 24 e 34 semanas com risco de parto prematuro.\n• Suporte inicial: CPAP desde a sala de parto (pressão de 6–8 cmH₂O) em prematuros com respiração espontânea; intubação se falha.\n• Indicação de surfactante: SDR com FiO₂ > 0,30 em CPAP ≥ 6 cmH₂O, ou todo prematuro com SDR que precise de intubação. Quanto mais precoce (primeiras 2 horas de vida), melhor.\n• Via e técnica: endotraqueal — por cânula no RN intubado, ou por técnica minimamente invasiva (LISA/MIST, cateter fino na traqueia, mantendo o CPAP) no RN em respiração espontânea. Dose inicial de poractanto alfa 200 mg/kg; repetir se a necessidade de oxigênio persistir.\n• Após o surfactante: reduzir rapidamente pressões e FiO₂ conforme a complacência melhora, e extubar para suporte não invasivo assim que possível (cafeína ajuda).\n\nDiferenciais no RN com desconforto: taquipneia transitória (termo ou próximo do termo, cesárea, cisuras com líquido), pneumonia neonatal (fatores de risco infecciosos, pode imitar SDR) e síndrome de aspiração meconial (termo/pós-termo, infiltrado grosseiro e hiperinsuflação).",
    "commentary": "Alternativa (B): observar e reservar o surfactante para a ventilação de alta frequência atrasa o tratamento de base. A ventilação de alta frequência é resgate, não critério para indicar surfactante.\n\nAlternativa (C): a via inalatória (nebulizada) não é a forma recomendada de administração — segue em estudo. Além disso, um RN com FiO₂ de 50% ainda não está pronto para sair da ventilação invasiva.\n\nAlternativa (D): subir a FiO₂ e deixar o surfactante para \"se necessário\" ignora que o critério de uso (FiO₂ > 0,30) já foi ultrapassado; o oxigênio alto apenas compensa e aumenta o risco de lesão pulmonar e retinopatia da prematuridade.\n\nSobre a alternativa (A): \"manter em ventilação mecânica\" vale enquanto houver necessidade; a meta é extubar precocemente para CPAP.",
    "tip": "Prematuro + vidro moído + FiO₂ > 30% = surfactante endotraqueal precoce. Intubado: pela cânula. Em CPAP: técnica LISA. Depois, extubar cedo.",
    "reference": "Sweet DG et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 Update. Neonatology, 2023. Sociedade Brasileira de Pediatria. Reanimação do prematuro < 34 semanas em sala de parto, 2022.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-3",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Cirurgia",
    "text": "Homem de 76 anos, sem comorbidades, encontra-se no 4º dia de pós-operatório de colectomia subtotal por neoplasia obstrutiva. Evoluiu com náuseas persistentes, distensão abdominal e sonolência. Ao exame: PA 95 × 60 mmHg; FC 118 bpm; mucosas secas e redução do turgor cutâneo, sem sinais de irritação peritoneal. Desde a cirurgia, está em uso de sonda nasogástrica, com débito entre 700 e 1.000 mL/dia.\n\nConsiderando a clínica do paciente, que alteração acidobásica e hidroeletrolítica se espera identificar?",
    "options": [
      "(A) Acidose respiratória hipercalêmica.",
      "(B) Alcalose respiratória hipoclorêmica.",
      "(C) Alcalose metabólica hipocalêmica.",
      "(D) Acidose metabólica hiperclorêmica."
    ],
    "correctAnswer": 2,
    "explanation": "Idoso no 4º pós-operatório com sonda nasogástrica drenando 700–1.000 mL/dia, hipotensão, taquicardia, mucosas secas e sonolência: perda de suco gástrico com hipovolemia. O suco gástrico é rico em HCl (e também tem K⁺). Cada H⁺ secretado deixa um HCO₃⁻ no sangue, então a perda gera alcalose metabólica hipoclorêmica. A hipovolemia ativa o sistema renina-angiotensina-aldosterona: o rim reabsorve Na⁺ trocando por K⁺ e H⁺, o que mantém a alcalose e produz hipocalemia. Resposta: alcalose metabólica hipoclorêmica e hipocalêmica.\n\nComo pensar a alcalose metabólica:\n\n• Geração: perda de ácido (vômitos, sonda gástrica), perda renal de H⁺ (diuréticos, hiperaldosteronismo), ganho de base (bicarbonato, citrato de transfusões maciças).\n• Manutenção: hipovolemia, depleção de cloro e hipocalemia impedem o rim de excretar o excesso de bicarbonato. Na depleção grave, aparece a acidúria paradoxal — urina ácida apesar da alcalose, porque o rim prioriza reter Na⁺ e já não tem K⁺ para trocar.\n• Classificação pelo cloro urinário: < 20 mEq/L = cloro-responsiva (vômitos, sonda, diurético já suspenso); > 20 mEq/L = cloro-resistente (hiperaldosteronismo, Cushing, Bartter/Gitelman, diurético em uso).\n• Tratamento da cloro-responsiva: soro fisiológico 0,9% para repor volume e cloro, KCl para repor potássio, e reduzir a perda (rever a necessidade da sonda; inibidor de bomba de prótons diminui a acidez do drenado).\n• Compensação respiratória esperada: pCO₂ ≈ 0,7 × HCO₃⁻ + 21 (± 2) — hipoventilação, limitada pela hipoxemia.\n\nContraste útil: perda de conteúdo intestinal baixo (diarreia, fístula pancreática ou biliar, ileostomia de alto débito) leva bicarbonato e causa acidose metabólica hiperclorêmica.",
    "commentary": "Alternativa (A): acidose respiratória exige hipoventilação primária (DPOC, depressão do centro respiratório, fadiga muscular); a sonolência aqui vem da hipovolemia e dos distúrbios eletrolíticos, e a perda gástrica tende a baixar, não subir, o potássio.\n\nAlternativa (B): alcalose respiratória exige hiperventilação primária (dor, ansiedade, sepse inicial, TEP). O distúrbio primário aqui é metabólico, causado pela perda de HCl.\n\nAlternativa (D): acidose metabólica hiperclorêmica ocorre com perda de bicarbonato (diarreia, fístulas pancreáticas, acidose tubular renal) ou infusão excessiva de soro fisiológico — o contrário do que a sonda gástrica provoca.",
    "tip": "Vômitos ou sonda nasogástrica = perda de HCl = alcalose metabólica hipoclorêmica e hipocalêmica, com acidúria paradoxal. Trate com SF 0,9% + KCl.",
    "reference": "Sabiston Textbook of Surgery. 21ª ed. Cap. Fluidos, eletrólitos e equilíbrio ácido-base. Rose BD, Post TW. Clinical Physiology of Acid-Base and Electrolyte Disorders.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-4",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 51 anos é atendida em Unidade Básica de Saúde com queixa de ondas de calor, principalmente no tronco e na face, acompanhadas de sudorese, vertigem, palpitações, cefaleia e insônia. Refere que essas crises acontecem por volta de 6 a 8 vezes por dia, especialmente à noite. A paciente relata, ainda, irritabilidade, diminuição da libido, esquecimento e ansiedade.\n\nSua última menstruação foi há 14 meses. Tem hipertensão, controlada com enalapril e hidroclorotiazida, e diabetes mellitus, tratado com dieta e exercícios. Sem outros sintomas, comorbidades ou cirurgias prévias.\n\nAo exame físico, apresenta PA 130 × 80 mmHg, FC 86 bpm e IMC 30,4 kg/m². Sem outras alterações.\n\nExames recentes: mamografia com BI-RADS 2 bilateralmente, citopatológico de colo uterino negativo para células malignas.\n\nQual é o tratamento indicado para controlar os sintomas dessa paciente?",
    "options": [
      "(A) Etinilestradiol 0,020 mg e drospirenona 3 mg via oral, 24 comprimidos por mês.",
      "(B) Valerato de estradiol 2 mg via oral, 1 comprimido por dia.",
      "(C) Fluoxetina 20 mg via oral, 1 comprimido por dia.",
      "(D) 17 β-estradiol gel percutâneo 0,5 mg, diário; e progesterona micronizada 200 mg, via oral, 12 comprimidos por mês."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 51 anos com amenorreia há 14 meses (mais de 12 meses = menopausa) e fogachos frequentes (6–8 por dia), com sudorese noturna, insônia e prejuízo de qualidade de vida: síndrome climatérica moderada a grave. A terapia hormonal da menopausa (THM) é o tratamento mais eficaz para os sintomas vasomotores. A paciente está dentro da janela de oportunidade e não tem contraindicação (mamografia BI-RADS 2, citologia normal, sem trombose ou doença cardiovascular estabelecida). Por ter útero, precisa de estrogênio associado a progestagênio; por ter obesidade, hipertensão e diabetes, a via transdérmica é a preferida. Resposta: estradiol gel percutâneo + progesterona micronizada.\n\nRoteiro da terapia hormonal da menopausa:\n\n• Indicação principal: sintomas vasomotores moderados a graves. Também síndrome geniturinária (preferir estrogênio vaginal se for o único sintoma) e prevenção de perda óssea em mulheres de risco.\n• Janela de oportunidade: iniciar antes dos 60 anos ou até 10 anos da menopausa, quando o benefício supera o risco.\n• Contraindicações: câncer de mama ou de endométrio, sangramento genital não esclarecido, doença hepática descompensada, tromboembolismo venoso prévio ou trombofilia, doença coronariana ou AVC, porfiria, lúpus com risco trombótico.\n• Regime: mulher sem útero → estrogênio isolado. Mulher com útero → estrogênio + progestagênio (cíclico, com sangramento de privação, como 12 dias de progesterona por mês; ou contínuo, sem sangramento, preferido anos após a menopausa).\n• Via: transdérmica (gel ou adesivo) evita a primeira passagem hepática e não aumenta o risco de trombose — preferir em obesidade, hipertensão, diabetes, hipertrigliceridemia, enxaqueca, tabagismo e risco de TEV.\n• Sem possibilidade de THM: ISRS ou IRSN (paroxetina, venlafaxina, desvenlafaxina, escitalopram), gabapentina, clonidina ou fezolinetante, todos menos eficazes que o estrogênio.",
    "commentary": "Alternativa (A): etinilestradiol com drospirenona é anticoncepcional oral combinado, com dose estrogênica muito acima da necessária e maior risco trombótico — inadequado para uma mulher de 51 anos, hipertensa, diabética e obesa já na pós-menopausa.\n\nAlternativa (B): valerato de estradiol isolado, sem progestagênio, em mulher com útero causa hiperplasia e aumenta o risco de câncer de endométrio; além disso, a via oral é a menos indicada no perfil cardiometabólico dela.\n\nAlternativa (C): fluoxetina é opção não hormonal quando a THM é contraindicada ou recusada, mas é menos eficaz para os fogachos e não é a primeira escolha numa paciente elegível. Entre os ISRS, paroxetina e escitalopram têm mais evidência para sintomas vasomotores.\n\nAntes de prescrever, confirmar ausência de TEV, câncer hormônio-dependente, sangramento genital e doença cardiovascular, e reavaliar a terapia anualmente.",
    "tip": "Menopausa + fogachos + útero = estrogênio + progestagênio. Risco cardiometabólico (obesidade, HAS, DM) = estradiol transdérmico. Sem útero = estrogênio isolado.",
    "reference": "The 2022 Hormone Therapy Position Statement of The North American Menopause Society. Menopause, 2022. Pompei LM et al. Consenso Brasileiro de Terapêutica Hormonal da Menopausa — SOBRAC, 2018.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-5",
    "topography": "10",
    "topic": "Dengue",
    "module": "Pediatria",
    "text": "Menino de 9 anos é atendido em Unidade Básica de Saúde com quadro clínico sugestivo de dengue. Apresenta febre há 4 dias, que cessou nas últimas 12 horas. A mãe relata que a criança ficou muito sonolenta e parou de urinar.\n\nAo exame físico, o paciente encontra-se letárgico, com extremidades frias e pálidas, tempo de enchimento capilar de 4 segundos, pulso radial filiforme e rápido. A pressão arterial não pôde ser aferida com precisão.\n\nQual é a prescrição imediata de acordo com a classificação funcional do caso?",
    "options": [
      "(A) 20 mL/kg de solução de Cloreto de Sódio 0,9%, via endovenosa, em até 20 minutos.",
      "(B) 10 mL/kg de solução de Cloreto de Sódio 0,9%, via parenteral, em 60 minutos.",
      "(C) 10 mL/kg de sais de reidratação oral, via sonda nasogástrica, em 90 minutos.",
      "(D) 20 mL/kg de sais de reidratação oral, via oral, em 120 minutos."
    ],
    "correctAnswer": 0,
    "explanation": "Na dengue, a fase crítica costuma começar justamente com a queda da febre (entre o 3º e o 7º dia). Letargia, anúria, tempo de enchimento capilar de 4 s, extremidades frias e pálidas e pulso filiforme e rápido são sinais de choque por extravasamento plasmático — mesmo sem conseguir medir a pressão. A criança é do grupo D, e a prescrição imediata é expansão com soro fisiológico 0,9% 20 mL/kg IV em 20 minutos.\n\nClassificação de risco e manejo da dengue (Ministério da Saúde):\n\n• Grupo A — sem sinais de alarme, sem sangramento espontâneo e prova do laço negativa, sem condição especial, comorbidade ou risco social. Tratamento ambulatorial: hidratação oral (adulto 60 mL/kg/dia, 1/3 em SRO e o restante em outros líquidos; criança pela regra de Holliday-Segar, com SRO), dipirona ou paracetamol, sem AINE nem AAS. Retorno no dia da melhora da febre ou diante de sinal de alarme.\n• Grupo B — sem sinais de alarme, mas com sangramento de pele espontâneo ou prova do laço positiva, ou condição especial (lactente, gestante, idoso > 65 anos), comorbidade ou risco social. Hemograma obrigatório e hidratação oral enquanto aguarda o resultado, em observação. Hematócrito normal: segue como grupo A, com reavaliação diária. Hematócrito aumentado ou sinal de alarme: conduzir como grupo C.\n• Grupo C — sinais de alarme sem choque: dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos (ascite, derrame pleural ou pericárdico), hipotensão postural ou lipotimia, hepatomegalia > 2 cm, sangramento de mucosa, letargia ou irritabilidade, aumento progressivo do hematócrito. Internação e expansão com SF 0,9% 10 mL/kg na 1ª hora, repetida até 3 vezes conforme a reavaliação clínica e do hematócrito; com melhora, passar à fase de manutenção.\n• Grupo D — dengue grave: choque (taquicardia, extremidades frias, enchimento capilar lento, pulso fraco ou filiforme, PA convergente ≤ 20 mmHg, hipotensão, oligúria), sangramento grave ou disfunção grave de órgão. Leito de UTI e SF 0,9% 20 mL/kg em 20 minutos, repetido até 3 vezes. Com melhora, seguir como grupo C. Sem melhora: hematócrito em alta → albumina ou coloide; hematócrito em queda → investigar hemorragia e transfundir concentrado de hemácias.",
    "commentary": "Alternativa (B): 10 mL/kg de SF 0,9% em 1 hora é a expansão do grupo C (sinais de alarme sem choque). Para choque estabelecido, o volume e a velocidade são insuficientes.\n\nAlternativa (C): hidratação enteral por sonda não faz parte do protocolo da dengue e é inadequada em hipoperfusão grave, com criança letárgica.\n\nAlternativa (D): hidratação oral é a conduta dos grupos A e B (sem sinais de alarme). No choque, atrasa a reposição e expõe a criança rebaixada a risco de aspiração.\n\nApós cada bolus, reavaliar perfusão, pressão, diurese e hematócrito, para evitar tanto o subtratamento quanto a sobrecarga hídrica.",
    "tip": "Na dengue, a piora pode começar justamente quando a febre cai. Extremidades frias, pulso fino e enchimento lento = choque: priorize cristalóide IV e reavaliação frequente.",
    "reference": "Brasil. Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança. 6ª ed. Brasília: MS, 2024.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-6",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A equipe multiprofissional de determinada Unidade Básica de Saúde realiza uma análise do perfil das mulheres que fazem acompanhamento médico no território. Os dados do SISAB e do e-SUS revelam que 37% das mulheres com idade entre 45 e 59 anos relataram queixas moderadas a graves de insônia, irritabilidade, fogachos e sintomas urogenitais; dessas mulheres, 68% têm diagnóstico de hipertensão e 32% são diabéticas.\n\nConsiderando-se esse contexto e as políticas públicas brasileiras, quais estratégias devem ser aplicadas?",
    "options": [
      "(A) Estruturar fluxos para a Rede de Atenção Psicossocial e orientar o rastreio de outras comorbidades.",
      "(B) Referenciar os casos com múltiplas comorbidades para a Rede Alyne e propiciar matriciamento dos casos.",
      "(C) Ampliar a abordagem multiprofissional das comorbidades e realizar ações educativas no território.",
      "(D) Articular cuidado com a rede intersetorial e abordar as interseccionalidades das mulheres."
    ],
    "correctAnswer": 2,
    "explanation": "A análise do território mostra um grupo de mulheres de 45 a 59 anos no climatério, com sintomas vasomotores, de humor, de sono e urogenitais, e com alta prevalência de hipertensão e diabetes. A resposta da atenção primária a um problema coletivo do território combina duas frentes: cuidado clínico integral (avaliar sintomas, tratar o climatério quando indicado e controlar as comorbidades cardiovasculares e metabólicas) com abordagem multiprofissional, e ações coletivas de educação em saúde. É exatamente o que propõe a alternativa C.\n\nPolíticas e redes que a questão cobra:\n\n• PNAISM (Política Nacional de Atenção Integral à Saúde da Mulher, 2004): incluiu o climatério como fase do ciclo de vida a ser cuidada, superando a visão restrita ao ciclo gravídico-puerperal.\n• Manual de Atenção à Mulher no Climatério/Menopausa (MS): o climatério é acompanhado na atenção primária, com abordagem integral (sintomas, saúde cardiovascular, óssea, mental, sexualidade), atividades educativas em grupo e encaminhamento só quando necessário.\n• Atributos da APS: primeiro contato, longitudinalidade, integralidade e coordenação do cuidado, mais orientação comunitária (agir sobre o perfil do território).\n• eMulti (antigo NASF): equipe multiprofissional que apoia as equipes de Saúde da Família com atendimento compartilhado, grupos e matriciamento.\n• Rede Alyne (2024, substituiu a Rede Cegonha): cuidado materno e infantil — pré-natal, parto, puerpério e criança até 2 anos.\n• RAPS (Rede de Atenção Psicossocial): pessoas com sofrimento mental grave e persistente ou uso problemático de álcool e outras drogas.",
    "commentary": "Alternativa (A): estruturar fluxos para a RAPS trata irritabilidade e insônia do climatério como transtorno mental, o que medicaliza e encaminha sem necessidade. Sintomas psíquicos leves do climatério são cuidados na própria APS; a RAPS fica para casos graves.\n\nAlternativa (B): a Rede Alyne é voltada à gestação, ao parto, ao puerpério e à criança, não ao climatério; e comorbidades como hipertensão e diabetes são acompanhadas na própria APS, não referenciadas por si só.\n\nAlternativa (D): intersetorialidade e interseccionalidade (raça, classe, gênero, território) são princípios importantes, mas o enunciado aponta um problema clínico concreto — sintomas do climatério e comorbidades —, que exige primeiro o cuidado clínico multiprofissional. D é complementar, não a estratégia central.",
    "tip": "Problema identificado no território da UBS: resolva na própria APS — cuidado integral multiprofissional + ação educativa coletiva. Climatério não é encaminhamento automático.",
    "reference": "Brasil. Ministério da Saúde. Manual de Atenção à Mulher no Climatério/Menopausa. Brasília: MS, 2008. Brasil. Política Nacional de Atenção Integral à Saúde da Mulher, 2004. Portaria GM/MS nº 5.350/2024 (Rede Alyne).",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-7",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Mulher de 38 anos, professora universitária, é atendida no ambulatório de clínica médica queixando-se de ganho de peso de 6 kg em 2 meses. Durante a consulta, relata que sempre foi altamente produtiva do ponto de vista acadêmico e profissional, mas refere dificuldade de se concentrar no trabalho, hipersonia, fadiga, desânimo e sentimento constante de tristeza, com início há 3 meses. Exames laboratoriais, como hemograma, dosagem sérica de TSH e bioquímica sérica, sem alterações.\n\nConsiderando-se a principal hipótese diagnóstica, qual é a primeira linha de tratamento farmacológico indicada nesse caso?",
    "options": [
      "(A) Topiramato.",
      "(B) Fluoxetina.",
      "(C) Lisdexanfetamina.",
      "(D) Amitriptilina."
    ],
    "correctAnswer": 1,
    "explanation": "Três meses de tristeza, desânimo, fadiga, dificuldade de concentração, hipersonia e ganho de peso, com prejuízo no trabalho, fecham critérios de episódio depressivo maior (com sintomas atípicos: hipersonia e aumento de apetite/peso). Hemograma, TSH e bioquímica normais afastam anemia e hipotireoidismo como causa. Sem história de mania ou hipomania, a primeira linha farmacológica é um ISRS — aqui, fluoxetina —, associado à psicoterapia.\n\nEscala terapêutica da depressão (CANMAT 2023 e manuais brasileiros):\n\n• 1ª linha: ISRS (fluoxetina, sertralina, escitalopram, citalopram, paroxetina); também IRSN (venlafaxina, desvenlafaxina, duloxetina), bupropiona, mirtazapina, vortioxetina e agomelatina. Associar psicoterapia (TCC, interpessoal); em quadros leves, a psicoterapia isolada é opção. Avaliar resposta em 2 a 4 semanas e dar 4 a 8 semanas em dose adequada antes de considerar falha.\n• 2ª linha (resposta parcial ou ausente): otimizar a dose; trocar por outro antidepressivo de 1ª linha, da mesma classe ou de outra; tricíclicos (amitriptilina, nortriptilina, clomipramina), eficazes mas com mais efeitos adversos e letais em superdose; potencializar com antipsicótico atípico (aripiprazol, quetiapina, brexpiprazol) ou combinar antidepressivos (por exemplo, ISRS + mirtazapina ou bupropiona).\n• 3ª linha (depressão resistente, falha de 2 ou mais tratamentos adequados): potencialização com lítio ou T3; IMAO (tranilcipromina); escetamina intranasal; eletroconvulsoterapia e estimulação magnética transcraniana. A ECT passa à frente — é 1ª escolha — na depressão grave com sintomas psicóticos, catatonia, risco suicida iminente ou recusa alimentar.\n\nApós a remissão, manter o antidepressivo por 6 a 12 meses no primeiro episódio e por 2 anos ou mais nos recorrentes.",
    "commentary": "Alternativa (A): topiramato é anticonvulsivante, sem papel no tratamento da depressão; às vezes é usado para perda de peso, o que não trata o quadro de base.\n\nAlternativa (C): lisdexanfetamina é psicoestimulante indicado para TDAH e transtorno de compulsão alimentar; não é antidepressivo de 1ª linha.\n\nAlternativa (D): amitriptilina é eficaz, mas fica na 2ª linha pelos efeitos anticolinérgicos, sedação, ganho de peso (indesejável nesta paciente), risco cardíaco e toxicidade em superdose.\n\nAntes de prescrever, investigar risco de suicídio e história de mania ou hipomania — antidepressivo isolado em bipolar pode precipitar virada maníaca.",
    "tip": "Tristeza com anedonia e prejuízo por semanas exige investigar depressão, suicídio e história de mania. Sem bipolaridade, um ISRS costuma ser opção inicial.",
    "reference": "Lam RW et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 Update on Clinical Guidelines for Management of Major Depressive Disorder in Adults. Can J Psychiatry, 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-8",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem de 66 anos, com doença renal crônica estágio G4, creatinina basal 2,4 mg/dL, diabetes mellitus e insuficiência cardíaca, é levado à emergência pelo SAMU com quadro de febre baixa, inapetência, diarreia e vômitos há 3 dias.\n\nFaz uso de enalapril 20 mg/dia, carvedilol 25 mg/dia, furosemida 40 mg/dia, dapagliflozina 10 mg/dia, insulina glargina 30 UI/dia e atorvastatina 40 mg/dia.\n\nNa admissão, apresenta PA 92 × 58 mmHg, FC 112 bpm, FR 22 irpm e temperatura axilar 37,8 °C. Exame físico: perfusão lentificada; desidratado (2+/4+), sonolento, mas responsivo.\n\nOs exames laboratoriais mostram os seguintes resultados:\n\n• Creatinina sérica: 3,90 mg/dL (VR: 0,70 a 1,20 mg/dL)\n• pH (gasometria arterial): 7,33 (VR: 7,35 a 7,45)\n• Bicarbonato (HCO₃⁻): 18 mEq/L (VR: 22 a 26 mEq/L)\n• Glicemia: 132 mg/dL (VR: 70 a 99 mg/dL)\n• Corpos cetônicos (sangue): Positivo (VR: Negativo)\n• Lactato: 1,8 mmol/L (VR: Até 2,0 mmol/L)\n• Potássio: 4,9 mEq/L (VR: 3,5 a 5,1 mEq/L)\n\nQual é o manejo em relação ao uso da dapagliflozina nesse caso?",
    "options": [
      "(A) Descontinuar definitivamente.",
      "(B) Reduzir a dose.",
      "(C) Manter prescrição habitual.",
      "(D) Suspender temporariamente."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com DRC G4, diabetes e insuficiência cardíaca, em uso de dapagliflozina, que há 3 dias tem vômitos, diarreia e inapetência. Está hipovolêmico (PA 92 × 58 mmHg, FC 112 bpm, desidratado), com lesão renal aguda sobre a DRC (creatinina de 2,4 para 3,9 mg/dL) e acidose metabólica (pH 7,33, HCO₃⁻ 18) com corpos cetônicos positivos, glicemia de apenas 132 mg/dL e lactato normal. É o quadro de cetoacidose euglicêmica associada ao inibidor de SGLT2: o fármaco faz glicosúria, baixa a glicemia e a insulina e favorece a cetogênese, sobretudo em jejum, desidratação e doença aguda. A conduta é suspender a dapagliflozina temporariamente, hidratar, tratar a cetoacidose e reintroduzir quando o paciente estiver estável, comendo e hidratado — pelo benefício renal e cardíaco que o fármaco traz.\n\nRegras para os \"dias de doença\" (sick day rules): na doença aguda com vômitos, diarreia ou baixa ingestão, suspender temporariamente os fármacos que pioram a função renal ou causam toxicidade na desidratação:\n\n• Inibidores de SGLT2 (dapagliflozina, empagliflozina): risco de cetoacidose euglicêmica. Suspender também 3 dias antes de cirurgias (4 dias para ertugliflozina).\n• IECA e BRA (enalapril, losartana): pioram a lesão renal na hipovolemia.\n• Diuréticos (furosemida, hidroclorotiazida): agravam a desidratação.\n• Metformina: risco de acidose lática.\n• Sulfonilureias: risco de hipoglicemia.\n• AINEs: nefrotoxicidade.\n\nCetoacidose euglicêmica: pH < 7,3 e/ou HCO₃⁻ < 18 mEq/L, cetonemia (β-hidroxibutirato) elevada e glicemia < 250 mg/dL, em paciente com SGLT2. O tratamento é como o da cetoacidose clássica — hidratação, insulina —, mas com soro glicosado desde o início, porque a glicemia já é normal. Quem estiver com taxa de filtração abaixo do limite de início pode manter o SGLT2 até a diálise, se tolerado — por isso a suspensão é temporária.",
    "commentary": "Alternativa (A): suspender definitivamente tira do paciente um fármaco que reduz progressão da DRC, internações por insuficiência cardíaca e mortalidade. Após o episódio, a decisão de reintroduzir é individual, mas não é proibitiva por si só.\n\nAlternativa (B): reduzir a dose não elimina o risco de cetoacidose nem de piora da hipovolemia; a dapagliflozina usada na DRC e na IC já é 10 mg, sem ajuste renal útil.\n\nAlternativa (C): manter o SGLT2 em vigência de jejum, vômitos e cetose perpetua a cetogênese e a perda de volume.\n\nNa mesma internação, também devem ser suspensos temporariamente o enalapril e a furosemida, e a insulina glargina deve ser mantida em dose ajustada (não suspender insulina basal na cetose).",
    "tip": "Doença aguda com vômitos, diarreia ou jejum: suspenda temporariamente SGLT2, IECA/BRA, diuréticos, metformina, sulfonilureias e AINEs. SGLT2 + cetose com glicemia normal = cetoacidose euglicêmica.",
    "reference": "American Diabetes Association. Standards of Care in Diabetes — 2025. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Sociedade Brasileira de Diabetes. Diretriz Oficial, 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-9",
    "module": "Pediatria",
    "text": "Uma criança de 10 meses é levada a uma Unidade Básica de Saúde para atendimento. A mãe relata que a criança apresentou picos de temperatura de 39 a 40 °C por 3 dias, sem foco aparente, mantendo bom estado geral.\n\nNo 4º dia, a febre cessou, mas surgiu exantema maculopapular róseo, predominantemente em tronco, com discreta disseminação para pescoço e membros. Ao exame físico, a criança apresenta-se afebril, ativa e sem sinais de gravidade.\n\nAlém do acompanhamento clínico, a conduta indicada nessa situação é:",
    "options": [
      "(A) Realizar notificação do caso.",
      "(B) Orientar tratamento sintomático.",
      "(C) Solicitar detecção de antígenos virais.",
      "(D) Indicar isolamento domiciliar."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 10 meses com febre alta (39–40 °C) por 3 dias, sem foco e em bom estado geral; a febre some e, no 4º dia, surge exantema maculopapular róseo no tronco que se espalha para pescoço e membros. É a sequência clássica do exantema súbito (roséola infantil), causado pelo herpes-vírus humano 6 (e às vezes o 7): febre alta primeiro, exantema depois da defervescência. É doença benigna e autolimitada, e a conduta é sintomática — antitérmico se houver febre ou desconforto, hidratação e orientação sobre sinais de alarme. A principal complicação é a convulsão febril, durante a fase de febre.\n\nDoenças exantemáticas da infância — o que diferencia cada uma:\n\n• Sarampo: febre alta com tosse, coriza e conjuntivite; manchas de Koplik; exantema maculopapular que começa na face/atrás das orelhas e desce, com a febre ainda presente. Notificação imediata e isolamento.\n• Rubéola: febre baixa, linfonodos retroauriculares, cervicais posteriores e occipitais aumentados, exantema róseo craniocaudal que some em 3 dias. Notificação imediata; risco para gestantes (síndrome da rubéola congênita).\n• Exantema súbito (HHV-6): 6 meses a 2 anos; febre alta por 3–5 dias, exantema que começa no tronco quando a febre desaparece.\n• Eritema infeccioso (parvovírus B19): face esbofeteada, depois exantema rendilhado em membros; pode causar crise aplástica em doença falciforme.\n• Escarlatina (estreptococo do grupo A): exantema áspero em lixa, sinal de Filatov (palidez perioral), sinal de Pastia (pregas), língua em framboesa; tratar com penicilina.\n• Varicela: lesões em diferentes estágios ao mesmo tempo (mácula, pápula, vesícula, crosta), pruriginosas.\n• Kawasaki: febre ≥ 5 dias com conjuntivite não exsudativa, alteração de lábios e mucosa, alterações de extremidades, exantema e linfonodo cervical — pede imunoglobulina e AAS.",
    "commentary": "Alternativa (A): roséola não é doença de notificação compulsória. A notificação imediata vale para doença exantemática febril suspeita de sarampo ou rubéola — e aqui o exantema surgiu depois da febre, sem tosse, coriza, conjuntivite ou linfonodos característicos.\n\nAlternativa (C): pesquisa de antígenos ou sorologia não é necessária quando o quadro é típico; o diagnóstico é clínico e não muda a conduta.\n\nAlternativa (D): não há indicação de isolamento domiciliar: quando o exantema aparece, a criança já está afebril e transmitindo pouco, e o HHV-6 é adquirido pela maioria das crianças por contato com adultos portadores assintomáticos.",
    "tip": "Febre alta que some e só DEPOIS aparece exantema róseo no tronco, em lactente bem = exantema súbito (HHV-6). Tratamento sintomático; cuidado com convulsão febril.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Doenças exantemáticas. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-10",
    "topography": "4.2",
    "topic": "Estenose de uretra",
    "module": "Cirurgia",
    "text": "Homem de 30 anos sofreu trauma contuso de alto impacto, em região pélvica, ao andar de bicicleta.\n\nNo exame físico inicial no serviço de emergência, apresentou Glasgow 15, múltiplas escoriações pelo corpo, hematoma escrotal bilateral, bexiga palpável e dolorosa à palpação, além de sangue vivo em pequena quantidade no meato uretral. Apresenta-se hemodinamicamente estável.\n\nQual o procedimento para o quadro clínico apresentado?",
    "options": [
      "(A) Cistostomia por punção.",
      "(B) Uretrorrafia de urgência.",
      "(C) Laparotomia exploradora.",
      "(D) Sondagem uretral."
    ],
    "correctAnswer": 0,
    "explanation": "Trauma contuso de alta energia na pelve, sangue no meato uretral, hematoma escrotal e bexiga palpável e dolorosa (retenção urinária) indicam lesão de uretra. A conduta inicial tem dois pilares: não passar sonda uretral às cegas e drenar a bexiga. Como a uretrografia retrógrada — exame que confirmaria e caracterizaria a lesão — não está entre as alternativas, o procedimento indicado é a cistostomia suprapúbica por punção, que descomprime a bexiga distendida sem manipular a uretra.\n\nO reparo definitivo é feito depois, de forma eletiva: uretroplastia tardia (cerca de 3 meses, após reabsorção do hematoma) ou realinhamento endoscópico precoce em casos selecionados. Com a bexiga palpável, a cistostomia por punção é segura e pode ser feita à beira do leito.",
    "commentary": "Alternativa (B): uretrorrafia (sutura primária da uretra) de urgência não é indicada no trauma contuso. O tecido está contundido e com hematoma, e o reparo imediato tem mais estenose, incontinência e disfunção erétil. A uretrorrafia primária fica reservada a lesões penetrantes ou à fratura de pênis com lesão uretral, quando o paciente vai à cirurgia de qualquer forma.\n\nAlternativa (C): laparotomia exploradora não tem indicação em paciente estável, sem sinais de lesão intra-abdominal.\n\nAlternativa (D): sondagem uretral é contraindicada com sangue no meato antes de excluir lesão uretral — pode converter ruptura parcial em completa e criar falso trajeto.\n\nAtenção: a questão original trazia, na alternativa B, \"uretrografia de urgência\" — nesse caso, como o paciente está estável, a uretrografia retrógrada seria a resposta (diagnóstico antes de qualquer procedimento). Com o texto corrigido (uretrorrafia), a resposta passa a ser a cistostomia por punção.",
    "tip": "Sangue no meato após trauma de pelve: nunca sonda uretral. Diagnóstico com uretrografia retrógrada; derivação com cistostomia suprapúbica; uretroplastia só depois.",
    "reference": "Morey AF et al. Urotrauma Guideline. American Urological Association, 2020. Sociedade Brasileira de Urologia — Trauma urogenital.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-11",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 32 anos, sem comorbidades, comparece ao serviço de urgência com dor pélvica intensa, de início súbito há 6 horas, acompanhada de sangramento vaginal de pequena quantidade. A paciente relata ser sexualmente ativa, não usar método contraceptivo e ter histórico de ciclos menstruais irregulares. A data da última menstruação foi há 90 dias.\n\nAo exame: afebril, FC 84 bpm, PA 110 × 70 mmHg, abdome doloroso à palpação de andar inferior, sem sinais de irritação peritoneal, colo uterino fechado, ausência de sangramento ativo.\n\nExames complementares revelaram: β-HCG 2.500 mUI/mL. Ultrassonografia transvaginal: útero de dimensões normais, linha endometrial de 8 mm, e imagem arredondada em anexo direito, paraovariana, com halo hiperecogênico, medindo aproximadamente 2,5 cm de diâmetro, com pequena quantidade de líquido livre em pelve.\n\nO diagnóstico provável dessa paciente é:",
    "options": [
      "(A) Ameaça de aborto.",
      "(B) Aborto incompleto.",
      "(C) Gestação anembrionada.",
      "(D) Gestação ectópica."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher em idade fértil, sem contracepção, com atraso menstrual, dor pélvica súbita e pequeno sangramento: toda dor pélvica com β-hCG positivo é gravidez ectópica até prova em contrário. O β-hCG de 2.500 mUI/mL está acima da zona discriminatória (cerca de 1.500–3.500 mUI/mL), nível em que a gestação intrauterina já deveria ser vista na ultrassonografia transvaginal — e o útero está vazio. Somam-se a imagem anexial com halo hiperecogênico (sinal do anel tubário) e o líquido livre na pelve: gestação ectópica tubária. A paciente está estável e sem sinais de ruptura, o que abre a possibilidade de tratamento clínico.\n\nRoteiro da gravidez ectópica:\n\n• Fatores de risco: ectópica prévia, cirurgia tubária, doença inflamatória pélvica/clamídia, DIU em uso (se engravidar), reprodução assistida, tabagismo.\n• Diagnóstico: β-hCG + ultrassonografia transvaginal. Útero vazio com β-hCG acima da zona discriminatória, ou massa anexial separada do ovário, confirma a suspeita. β-hCG baixo e útero vazio = gestação de localização desconhecida: repetir em 48 h (na gestação tópica, sobe ao menos ~50%).\n• Instável ou com ruptura (choque, hemoperitônio volumoso): cirurgia imediata — salpingectomia, por laparoscopia se possível ou laparotomia.\n• Metotrexato (50 mg/m² IM, dose única): estável, sem ruptura, β-hCG < 5.000 mUI/mL, massa < 3,5–4 cm, sem batimento cardíaco embrionário, com possibilidade de seguimento. Dosar β-hCG no 4º e 7º dia: queda ≥ 15% = sucesso; depois, semanal até negativar.\n• Conduta expectante: estável, β-hCG baixo (< 1.500–2.000) e em queda, massa pequena.\n• Cirurgia eletiva: contraindicação ou falha do metotrexato. Salpingostomia (conserva a tuba) se a outra tuba está doente e há desejo reprodutivo; salpingectomia na maioria dos casos.\n• Mãe Rh negativo: imunoglobulina anti-D.",
    "commentary": "Alternativa (A): ameaça de aborto pressupõe gestação intrauterina viável, com sangramento e colo fechado. Aqui não há gestação dentro do útero, apesar de β-hCG acima da zona discriminatória.\n\nAlternativa (B): no aborto incompleto há eliminação parcial do conteúdo, colo aberto e restos ovulares na cavidade (endométrio espesso e heterogêneo) — o colo está fechado e a imagem é anexial.\n\nAlternativa (C): gestação anembrionada é um saco gestacional intrauterino ≥ 25 mm sem embrião; nesta paciente não há saco gestacional no útero.\n\nDor intensa e líquido livre exigem vigilância próxima mesmo com sinais vitais normais: a ruptura pode acontecer a qualquer momento.",
    "tip": "β-hCG acima de ~1.500–3.500 com útero vazio na transvaginal = ectópica até prova em contrário. Estável, β-hCG < 5.000, massa < 3,5 cm e sem batimento: metotrexato. Instável: cirurgia.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Gravidez ectópica, 2021. ACOG Practice Bulletin nº 193: Tubal Ectopic Pregnancy, 2018.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-12",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos, com diabetes mellitus tipo 2 há 6 anos, com seguimento regular em Unidade Básica de Saúde, em uso de metformina na dose máxima tolerada, comparece a uma consulta de rotina.\n\nEstá sem queixas. Refere padrão alimentar irregular e atividade física esporádica. Apresenta IMC 32 kg/m², PA 140 × 80 mmHg, glicemia de jejum 170 mg/dL, HbA1c 8,2%, taxa de filtração glomerular 46 mL/min/1,73 m² e perfil lipídico normal.\n\nAlém do reforço de medidas não farmacológicas e da manutenção da prescrição de metformina, qual é a opção terapêutica nesse caso?",
    "options": [
      "(A) Gliclazida.",
      "(B) Pioglitazona.",
      "(C) Dapagliflozina.",
      "(D) Insulina NPH."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher com diabetes tipo 2 há 6 anos, HbA1c de 8,2% apesar de metformina em dose máxima: precisa de um segundo fármaco. A escolha não é só pela glicemia, mas pelas comorbidades: a taxa de filtração de 46 mL/min/1,73 m² caracteriza doença renal crônica G3a. Nesse cenário, o inibidor de SGLT2 é prioridade, porque reduz a progressão da doença renal, internações por insuficiência cardíaca e eventos cardiovasculares, independentemente do efeito glicêmico. Resposta: dapagliflozina.\n\nEscolha do 2º fármaco no diabetes tipo 2 (SBD e ADA):\n\n• Doença renal crônica (TFG 20–60 e/ou albuminúria): inibidor de SGLT2 (iniciar se TFG ≥ 20, manter até a diálise). Se precisar de mais, associar agonista de GLP-1.\n• Insuficiência cardíaca: inibidor de SGLT2.\n• Doença cardiovascular aterosclerótica estabelecida ou alto risco: agonista de GLP-1 (semaglutida, liraglutida, dulaglutida) ou inibidor de SGLT2 com benefício comprovado.\n• Obesidade: agonista de GLP-1 ou tirzepatida, pela maior perda de peso.\n• Sem essas condições: decidir por eficácia, risco de hipoglicemia, peso, custo e disponibilidade no SUS (metformina, gliclazida, dapagliflozina e insulinas estão na rede).\n• Insulina desde já: HbA1c > 10%, glicemia ≥ 300 mg/dL, sintomas de hiperglicemia ou perda de peso (catabolismo).\n• Metformina na DRC: dose plena se TFG ≥ 45; até 1.000 mg/dia se 30–44; suspender se < 30.\n\nCom a TFG abaixo de 45, o efeito do SGLT2 na glicemia diminui, mas a proteção renal e cardiovascular se mantém — por isso continua sendo a escolha.",
    "commentary": "Alternativa (A): gliclazida é barata e eficaz na glicemia, mas causa hipoglicemia (maior risco com TFG reduzida) e ganho de peso, sem proteção renal ou cardiovascular.\n\nAlternativa (B): pioglitazona melhora a resistência à insulina, mas causa retenção hídrica, edema, ganho de peso e risco de fraturas, é contraindicada em insuficiência cardíaca e não protege o rim.\n\nAlternativa (D): insulina NPH fica para HbA1c muito alta, sintomas de hiperglicemia ou falha da combinação de orais; aos 8,2% e assintomática, não é o próximo passo, e traz hipoglicemia e ganho de peso numa paciente com IMC 32.\n\nCompletar a avaliação com a relação albumina/creatinina na urina e reforçar o controle da pressão (alvo < 130 × 80 mmHg, com IECA ou BRA se houver albuminúria).",
    "tip": "Diabetes tipo 2 fora da meta com DRC ou insuficiência cardíaca: some inibidor de SGLT2. Doença aterosclerótica ou obesidade: pense em agonista de GLP-1. Escolha pela comorbidade, não só pela HbA1c.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz Oficial — Tratamento farmacológico do diabetes tipo 2, 2024. American Diabetes Association. Standards of Care in Diabetes — 2025. KDIGO 2022 Diabetes in CKD.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-13",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante visita domiciliar em determinada comunidade rural, a agente comunitária de saúde de uma equipe da Estratégia de Saúde da Família identifica que uma adolescente de 17 anos realizou um teste de gravidez há 2 meses, cujo resultado foi positivo, mas não fez pré-natal até o momento. A jovem refere corrimento vaginal e desconforto em baixo-ventre.\n\nQuais são as ações necessárias para o manejo da adolescente nesse caso?",
    "options": [
      "(A) Acolhê-la na unidade de saúde, registrar a gestação no e-SUS, realizar os exames de rotina e encaminhá-la ao ambulatório especializado.",
      "(B) Solicitar transporte sanitário e encaminhá-la à maternidade de referência para avaliação clínica.",
      "(C) Encaminhá-la ao pré-natal de alto risco, além de garantir investigação diagnóstica e acompanhamento multiprofissional.",
      "(D) Iniciar pré-natal, registrar a gestação no e-SUS e garantir acompanhamento multidisciplinar na atenção primária."
    ],
    "correctAnswer": 3,
    "explanation": "Adolescente de 17 anos com teste de gravidez positivo há 2 meses e nenhuma consulta de pré-natal, identificada pela agente comunitária. A prioridade é a captação imediata: acolher, iniciar o pré-natal na própria equipe de Saúde da Família, registrar a gestação no e-SUS, pedir os exames da primeira consulta e investigar a queixa de corrimento e dor em baixo-ventre (vulvovaginite, cervicite, infecção urinária, ameaça de aborto). Idade de 17 anos, por si só, não é critério de pré-natal de alto risco: ela é acompanhada na APS, com apoio multiprofissional e encaminhamento só se surgir critério.\n\nRoteiro do pré-natal na APS (Ministério da Saúde):\n\n• Captação precoce: iniciar até a 12ª semana; mínimo de 6 consultas (mensais até 28 semanas, quinzenais até 36 e semanais depois).\n• Exames da 1ª consulta: hemograma, tipagem ABO/Rh e Coombs indireto se Rh negativo, glicemia de jejum, testes rápidos de HIV, sífilis e hepatites B e C, urina tipo 1 e urocultura, sorologia de toxoplasmose, ultrassonografia obstétrica e citologia se estiver em atraso.\n• Vacinas: dTpa a partir de 20 semanas, hepatite B, influenza e covid-19.\n• Suplementos: ácido fólico (idealmente desde antes da concepção até 12 semanas) e sulfato ferroso.\n• Alto risco (encaminhar, mantendo o vínculo com a APS): doenças maternas prévias (hipertensão crônica, diabetes, cardiopatia, nefropatia, epilepsia, HIV), história obstétrica grave, e intercorrências como pré-eclâmpsia, diabetes gestacional que não controla com dieta, restrição de crescimento ou gemelaridade.\n• Adolescente: tem direito a atendimento sem acompanhante e com sigilo (ECA). Avaliar contexto familiar e escolar, rede de apoio e violência — gestação abaixo de 14 anos é presumida estupro de vulnerável e obriga notificação.\n• Queixas: corrimento e dor pélvica merecem exame especular e abordagem das IST na própria consulta; sangramento, dor intensa, febre ou perda de líquido mudam o fluxo para a maternidade.",
    "commentary": "Alternativa (A): começa bem (acolher, registrar, pedir exames), mas encaminha ao ambulatório especializado sem critério de alto risco, fragmentando o cuidado.\n\nAlternativa (B): transporte sanitário para a maternidade é para urgência obstétrica (sangramento importante, dor intensa, febre, sinais de abortamento ou de ectópica). O enunciado não traz sinais de gravidade.\n\nAlternativa (C): adolescência não é, por si só, indicação de pré-natal de alto risco; encaminhar sem critério sobrecarrega o serviço especializado e afasta a gestante da equipe que tem vínculo com ela.",
    "tip": "Gestante adolescente sem pré-natal: comece o pré-natal na APS hoje, registre no e-SUS e investigue as queixas. Alto risco só com critério clínico ou obstétrico real.",
    "reference": "Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 32 — Atenção ao pré-natal de baixo risco, 2012. Brasil. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-14",
    "topography": "13",
    "topic": "Esquizofrenia",
    "module": "Saúde Coletiva",
    "text": "Homem de 35 anos, com diagnóstico de esquizofrenia há 15 anos e histórico de múltiplas internações psiquiátricas, é levado pela mãe à Unidade Básica de Saúde.\n\nA mãe relata que o paciente perdeu o vínculo com os serviços especializados da rede e que, há dois meses, passou a recusar tratamento e suspendeu as medicações.\n\nAo exame psíquico, apresenta higiene preservada, mas vestimentas inadequadas para o clima; pensamento com curso lentificado e presença de delírios de autorreferência; relato de \"vozes sussurradas\"; afeto embotado; déficit leve de atenção e memória operacional.\n\nO paciente não apresenta risco iminente de auto ou heteroagressividade.\n\nNesse momento, o paciente deve ser encaminhado prioritariamente a qual dos serviços de saúde da Rede de Atenção Psicossocial?",
    "options": [
      "(A) Leito de saúde mental em hospital geral.",
      "(B) Unidade de Pronto Atendimento.",
      "(C) Centro de Atenção Psicossocial.",
      "(D) Comunidade Terapêutica."
    ],
    "correctAnswer": 2,
    "explanation": "Homem com esquizofrenia há 15 anos que perdeu o vínculo com os serviços e suspendeu os antipsicóticos há 2 meses, agora com delírios de autorreferência, alucinações auditivas e embotamento afetivo: recaída psicótica por abandono do tratamento. O enunciado afasta risco iminente de auto ou heteroagressão, então não há indicação de urgência ou internação. O ponto de atenção certo é o CAPS — serviço de base comunitária para transtornos mentais graves e persistentes —, que retoma o tratamento, faz busca ativa e projeto terapêutico singular, em articulação com a UBS.\n\nComponentes da Rede de Atenção Psicossocial (RAPS):\n\n• Atenção primária: UBS, eMulti (antigo NASF), consultório na rua e centros de convivência — porta de entrada e cuidado de casos leves a moderados.\n• Atenção psicossocial especializada: CAPS — transtornos mentais graves e persistentes. CAPS I, II e III (o III funciona 24 h, com acolhimento noturno), CAPS AD (álcool e drogas; AD III 24 h) e CAPSi (crianças e adolescentes).\n• Urgência e emergência: SAMU, UPA e prontos-socorros — crise com risco (agitação, agressividade, ideação suicida grave).\n• Atenção residencial de caráter transitório: unidades de acolhimento e comunidades terapêuticas (só para uso de substâncias).\n• Atenção hospitalar: leitos de saúde mental em hospital geral, para internações breves quando os recursos extra-hospitalares forem insuficientes.\n• Desinstitucionalização e reabilitação: serviços residenciais terapêuticos, Programa De Volta para Casa, geração de renda.\n\nLei 10.216/2001: a internação só é indicada quando os recursos extra-hospitalares se mostrarem insuficientes, e pode ser voluntária, involuntária (sem consentimento, a pedido de terceiro, comunicada ao Ministério Público em 72 h) ou compulsória (determinada pela Justiça). Em quem abandona o tratamento oral, considerar antipsicótico de depósito (haloperidol decanoato, palmitato de paliperidona).",
    "commentary": "Alternativa (A): o leito de saúde mental em hospital geral é para internação breve quando há risco ou falha do cuidado comunitário; sem risco iminente, internar contraria a Lei 10.216.\n\nAlternativa (B): a UPA é componente de urgência, para crise com risco ou agitação que exija contenção ou medicação imediata; não oferece seguimento longitudinal.\n\nAlternativa (D): comunidade terapêutica é serviço residencial transitório voltado a pessoas com necessidades decorrentes do uso de álcool e drogas; não trata esquizofrenia.",
    "tip": "Transtorno mental grave e persistente sem risco iminente = CAPS (com a UBS). Risco ou agitação = urgência (SAMU, UPA). Internação só quando o cuidado comunitário não basta.",
    "reference": "Brasil. Ministério da Saúde. Portaria nº 3.088/2011 (Rede de Atenção Psicossocial), consolidada na Portaria de Consolidação nº 3/2017. Brasil. Lei nº 10.216, de 6 de abril de 2001.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-15",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Clínica Médica",
    "text": "Mulher de 74 anos, durante visita domiciliar, queixa-se de desconforto abdominal difuso, associado a constipação e náuseas.\n\nÉ acompanhada em quimioterapia paliativa devido a um câncer de pâncreas e está em uso de morfina 10 mg via oral a cada 4 horas, com bom controle das dores abdominais, porém com piora da constipação, mantendo eliminação de flatos.\n\nO exame físico revela: paciente emagrecida, vigil e orientada; PA 125 × 75 mmHg; FC 82 bpm; FR 16 irpm; temperatura axilar 36,4 °C; abdome distendido, ruídos hidroaéreos diminuídos, sem sinais de irritação peritoneal.\n\nQual é o manejo nesse caso?",
    "options": [
      "(A) Manter a morfina e introduzir laxativo por via oral.",
      "(B) Reduzir a dose da morfina e aguardar a resolução da constipação.",
      "(C) Substituir a morfina por tramadol e prescrever supositórios de glicerina.",
      "(D) Substituir a morfina por dipirona e introduzir fibras solúveis."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com câncer de pâncreas em cuidados paliativos, com dor bem controlada por morfina, apresentando constipação, náuseas e distensão, mas eliminando flatos e sem sinais de peritonite: constipação induzida por opioide. Os opioides agem nos receptores µ do intestino, reduzindo a motilidade e a secreção, e — ao contrário da náusea e da sedação — não há tolerância a esse efeito. Como a analgesia é boa, a conduta é manter a morfina e introduzir laxativo oral. O ideal é que o laxativo seja prescrito já no início do opioide, de forma profilática.\n\nManejo da constipação induzida por opioide:\n\n• Prevenção: todo paciente em opioide contínuo deve receber laxativo regular desde o início, com orientação de hidratação e mobilidade quando possível.\n• 1ª linha: laxativo estimulante (bisacodil, sene) e/ou osmótico (lactulose, polietilenoglicol), ajustando a dose até evacuar a cada 1–3 dias.\n• Avaliação: toque retal para excluir fecaloma (se presente: supositório, enema ou desimpactação manual); excluir obstrução intestinal (parada de flatos, vômitos fecaloides, dor em cólica, distensão progressiva).\n• Refratária: antagonistas µ de ação periférica (metilnaltrexona subcutânea, naloxegol), que tratam a constipação sem reverter a analgesia.\n• Evitar: fibras ou formadores de bolo isolados, que pioram o quadro em quem ingere pouco líquido e tem motilidade reduzida.\n• Outros efeitos dos opioides: náusea e sedação melhoram em dias (tolerância); depressão respiratória é rara com titulação adequada; miose e constipação persistem.\n\nEscada analgésica da OMS: degrau 1 — analgésico não opioide (dipirona, paracetamol, AINE); degrau 2 — opioide fraco (codeína, tramadol); degrau 3 — opioide forte (morfina, oxicodona, metadona, fentanil). Adjuvantes em todos os degraus.",
    "commentary": "Alternativa (B): reduzir a morfina sacrifica um controle de dor que estava bom e não resolve a constipação, que depende do laxativo; a dor volta e a paciente sofre sem necessidade.\n\nAlternativa (C): trocar morfina por tramadol desce na escada analgésica (opioide fraco para dor oncológica que precisou de opioide forte) e o tramadol também constipa; glicerina retal sozinha é medida pontual.\n\nAlternativa (D): dipirona isolada não controla dor oncológica que exigia morfina, e fibras solúveis tendem a piorar a constipação em paciente com baixa ingesta hídrica e motilidade reduzida.",
    "tip": "Opioide controlando a dor + constipação: mantenha o opioide e associe laxativo (estimulante e/ou osmótico). Laxativo se prescreve junto com o opioide, desde o primeiro dia.",
    "reference": "Larkin PJ et al. Diagnosis, assessment and management of constipation in advanced cancer: ESMO Clinical Practice Guidelines. Ann Oncol, 2018. Academia Nacional de Cuidados Paliativos (ANCP). Manual de Cuidados Paliativos. 2ª ed.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-16",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Uma criança de 3 anos é levada a uma Unidade Básica de Saúde para atendimento médico, com quadro de cianose perioral leve, que se intensifica durante choro ou esforço físico e melhora na posição de cócoras, segundo relato da mãe.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transposição de grandes artérias.",
      "(B) Estenose aórtica valvar.",
      "(C) Tetralogia de Fallot.",
      "(D) Anomalia de Ebstein."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 3 anos com cianose que piora ao chorar ou fazer esforço e melhora quando ela se agacha (posição de cócoras): quadro clássico de tetralogia de Fallot. Os quatro componentes são comunicação interventricular, estenose da via de saída do ventrículo direito (pulmonar), aorta cavalgante e hipertrofia do ventrículo direito. O choro e o esforço baixam a resistência vascular sistêmica e aumentam o desvio de sangue não oxigenado do VD para a aorta (shunt direita-esquerda). Agachar dobra as artérias femorais, aumenta a resistência sistêmica, devolve sangue ao pulmão e melhora a cianose.\n\nRoteiro das cardiopatias congênitas:\n\n• Cianóticas (shunt direita-esquerda ou mistura) — os 5 Ts: tetralogia de Fallot, transposição das grandes artérias, truncus arteriosus, atresia tricúspide, drenagem anômala total das veias pulmonares. Também anomalia de Ebstein.\n• Acianóticas com hiperfluxo pulmonar (shunt esquerda-direita): CIV (a mais comum), CIA, persistência do canal arterial, defeito do septo atrioventricular (associado à síndrome de Down).\n• Acianóticas obstrutivas: coarctação da aorta (pulsos femorais diminuídos, PA maior nos braços), estenose aórtica, estenose pulmonar.\n\nTetralogia de Fallot em detalhe:\n\n• Exame: sopro sistólico ejetivo em borda esternal esquerda (da estenose pulmonar); quanto mais grave a obstrução, mais cianose e menor o sopro.\n• Radiografia: coração em bota (tamanco holandês), com trama vascular pulmonar diminuída. ECG: sobrecarga do VD.\n• Crise hipercianótica: posição genupeitoral, oxigênio, morfina, volume, betabloqueador (propranolol) e, se necessário, vasopressor que aumente a resistência sistêmica (fenilefrina).\n• Tratamento definitivo: correção cirúrgica total, em geral entre 3 e 6 meses de vida; shunt de Blalock-Taussig como ponte em casos selecionados.",
    "commentary": "Alternativa (A): a transposição das grandes artérias causa cianose intensa nas primeiras horas de vida, sem melhora com a posição, e sem tratamento não chega aos 3 anos; radiografia com coração em ovo deitado. Precisa de prostaglandina e atriosseptostomia no período neonatal.\n\nAlternativa (B): a estenose aórtica valvar é cardiopatia acianótica: sopro sistólico em foco aórtico, com possível síncope, dor torácica ou insuficiência cardíaca; não causa cianose nem melhora ao agachar.\n\nAlternativa (D): na anomalia de Ebstein, a valva tricúspide é deslocada para dentro do VD; causa cianose por shunt pelo forame oval, cardiomegalia acentuada (coração em moringa) e associação com síndrome de Wolff-Parkinson-White, mas o agachamento não é sua marca.",
    "tip": "Cianose que piora ao chorar e melhora de cócoras = tetralogia de Fallot (CIV + estenose pulmonar + aorta cavalgante + hipertrofia de VD). Radiografia: coração em bota.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Cardiopatias congênitas. Park MK. Park's Pediatric Cardiology for Practitioners. 7ª ed.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-17",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem de 28 anos, vítima de ferimento por arma branca em hemitórax direito, é admitido em serviço hospitalar de emergência após ser encontrado em via pública.\n\nO exame físico revela: paciente em regular estado geral, hidratado, acianótico, taquipneico; fácies de dor aos movimentos inspiratórios; FC 108 bpm; PA 110 × 70 mmHg; ferimento perfurocortante, de cerca de 5 cm de extensão, em região de terceiro espaço intercostal direito em linha hemiclavicular; à ausculta pulmonar, redução de murmúrio vesicular em hemitórax direito e presença de ruídos crepitantes.\n\nA conduta indicada para esse paciente no momento é realizar:",
    "options": [
      "(A) Drenagem torácica pelo local do ferimento.",
      "(B) Curativo oclusivo com fixação total do ferimento.",
      "(C) Drenagem torácica simples no quinto espaço intercostal.",
      "(D) Curativo oclusivo com fixação em três lados."
    ],
    "correctAnswer": 3,
    "explanation": "Ferimento por arma branca de 5 cm no 3º espaço intercostal direito, com taquipneia, dor ventilatória dependente, murmúrio vesicular reduzido e crepitações, em paciente hemodinamicamente estável: pneumotórax aberto (ferida torácica aspirativa). Quando o orifício da parede tem mais de cerca de 2/3 do diâmetro da traqueia, o ar entra preferencialmente pela ferida a cada inspiração, colapsando o pulmão. A conduta imediata do ATLS é o curativo oclusivo estéril fixado em três lados: na inspiração, o curativo é sugado e veda a ferida; na expiração, o lado livre deixa o ar sair, evitando o pneumotórax hipertensivo. Em seguida, drenagem torácica em local distante da ferida e, depois, fechamento cirúrgico da ferida.\n\nLesões torácicas que matam na avaliação primária (ATLS):\n\n• Pneumotórax hipertensivo: desvio de traqueia, turgência jugular, hipotensão, murmúrio abolido e hipertimpanismo. Diagnóstico clínico — descompressão imediata com agulha (5º espaço intercostal, entre as linhas axilares anterior e média no adulto) e depois dreno.\n• Pneumotórax aberto: curativo de três lados (ou selo torácico com válvula) e dreno em outro local.\n• Hemotórax maciço: > 1.500 mL na drenagem inicial ou > 200 mL/h por 2–4 h → toracotomia.\n• Tamponamento cardíaco: tríade de Beck (hipotensão, turgência jugular, abafamento de bulhas); FAST. Pericardiocentese como ponte, toracotomia/janela pericárdica como tratamento.\n• Tórax instável com contusão pulmonar: analgesia, oxigênio e ventilação se necessário.\n\nDrenagem torácica: 5º espaço intercostal, entre as linhas axilares anterior e média, na borda superior da costela inferior, nunca pelo próprio ferimento. A maioria dos traumas torácicos penetrantes (cerca de 85%) se resolve só com drenagem.",
    "commentary": "Alternativa (A): drenar pelo próprio ferimento é contraindicado: o trajeto é contaminado, o dreno pode seguir o caminho da lesão para estruturas lesadas e a vedação ao redor do dreno fica ruim.\n\nAlternativa (B): o curativo fixado nos quatro lados transforma o pneumotórax aberto em pneumotórax hipertensivo, porque o ar que continua saindo do pulmão lesado não tem por onde escapar.\n\nAlternativa (C): a drenagem torácica no 5º espaço é o tratamento definitivo e deve ser feita logo em seguida, mas a medida imediata, na avaliação primária, é vedar a ferida aspirativa com o curativo de três lados. Por isso C fica como segundo passo.\n\nRessalva: o enunciado não descreve explicitamente o ar entrando e saindo pela ferida; a resposta parte da interpretação de que uma ferida de 5 cm é aspirativa. Hoje, quando disponível, usa-se selo torácico comercial com válvula no lugar do curativo improvisado.",
    "tip": "Ferida torácica aspirativa (pneumotórax aberto): curativo oclusivo fixo em 3 lados e dreno em outro local. Fechar os 4 lados = pneumotórax hipertensivo.",
    "reference": "American College of Surgeons. Advanced Trauma Life Support (ATLS) — Student Course Manual. 10ª ed., 2018.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ressalva de diretriz). Distinguir conduta de prova tradicional e protocolos modernos de trauma; um selo ventilado substitui o curativo improvisado quando disponível."
  },
  {
    "id": "sug-enamed1-18",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 58 anos, menopausada, comparece a um ambulatório com mamografia de rotina classificada como categoria BI-RADS 0 (zero). Relata controle bianual desde os 50 anos, sem alterações prévias. Tem como antecedente uma prima com história de câncer de mama. Nega terapia hormonal no climatério. Não apresenta alteração detectável ao exame físico.\n\nNesse caso, a conduta adequada é solicitar:",
    "options": [
      "(A) Mamografia de controle em 6 meses.",
      "(B) Ultrassonografia mamária.",
      "(C) Ressonância magnética mamária.",
      "(D) Mamografia de rotina em 2 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 58 anos, assintomática, com mamografia de rastreamento classificada como BI-RADS 0. Essa categoria não é resultado normal nem suspeito: significa avaliação incompleta, e a paciente precisa de exame complementar antes de receber uma classificação final — incidências mamográficas adicionais (compressão localizada, magnificação), comparação com exames anteriores e/ou ultrassonografia. Entre as alternativas, a ultrassonografia mamária é o complemento adequado. A prima com câncer de mama é parente de 3º grau e não muda o risco nem a conduta.\n\nCategorias BI-RADS e conduta:\n\n• 0 — inconclusivo: complementar (incidências adicionais, ultrassonografia, comparação com exames prévios).\n• 1 — negativo: rastreamento de rotina.\n• 2 — achado benigno (cisto simples, linfonodo intramamário, calcificações grosseiras): rotina.\n• 3 — provavelmente benigno (risco de câncer ≤ 2%): controle em 6 meses e depois a cada 6–12 meses, por 2 a 3 anos.\n• 4 — suspeito (4A, 4B, 4C; risco de 2% a 95%): biópsia.\n• 5 — altamente suspeito (risco ≥ 95%): biópsia.\n• 6 — malignidade já comprovada por biópsia: tratamento.\n\nRastreamento do câncer de mama:\n\n• Ministério da Saúde/INCA: mamografia a cada 2 anos na faixa de 50 a 69 anos (com ampliação recente da faixa etária; abaixo dos 50, por decisão compartilhada).\n• Sociedades médicas (CBR, SBM, FEBRASGO): anual a partir dos 40 anos.\n• Alto risco (risco ≥ 20% ao longo da vida, mutação BRCA, parente de 1º grau com câncer de mama jovem, radioterapia de tórax antes dos 30 anos): mamografia e ressonância anuais, começando mais cedo.",
    "commentary": "Alternativa (A): controle em 6 meses é a conduta para BI-RADS 3 (provavelmente benigno); no BI-RADS 0 ainda não se sabe qual é o achado, então esperar 6 meses atrasa o diagnóstico.\n\nAlternativa (C): a ressonância magnética não é o complemento de rotina do BI-RADS 0; é usada no rastreamento de alto risco, no estadiamento de câncer confirmado e em situações específicas (implantes, discordâncias).\n\nAlternativa (D): voltar à rotina em 2 anos é conduta para BI-RADS 1 e 2; com exame inconclusivo, seria deixar sem resposta um achado que pode ser câncer.",
    "tip": "BI-RADS 0 = exame incompleto, não normal: complemente com incidências adicionais e/ou ultrassonografia. BI-RADS 3 = controle em 6 meses. BI-RADS 4 e 5 = biópsia.",
    "reference": "American College of Radiology. ACR BI-RADS Atlas. 5ª ed., 2013. Urban LABD et al. Recomendações do CBR, SBM e FEBRASGO para o rastreamento do câncer de mama, 2023. INCA. Diretrizes para a detecção precoce do câncer de mama no Brasil.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-19",
    "module": "Clínica Médica",
    "text": "Homem de 28 anos, trabalhador rural no Mato Grosso do Sul, é atendido em Unidade Básica de Saúde por apresentar, há 60 dias, febre baixa contínua, associada a inapetência, adinamia e perda de peso.\n\nAchados do exame físico: paciente hipocorado (2+/4+); fígado a 2 cm do rebordo costal direito; e esplenomegalia. Ausência de sangramentos.\n\nApós 10 dias, o paciente retorna com os resultados dos exames apresentados na tabela.\n\n• Hematócrito: 24% (VR: 40 a 50%)\n• Hemoglobina: 9,6 g/dL (VR: 13,2 a 16,7 g/dL)\n• Leucócitos: 3.500/mm³ (VR: 4.450 a 10.950/mm³)\n• Plaquetas: 170.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Velocidade de hemossedimentação: 55 mm/h (VR: Até 15 mm/h)\n• TGO: 65 U/L (VR: Até 41 U/L)\n• TGP: 80 U/L (VR: Até 40 U/L)\n\nMorfologia de hemácias normocíticas e normocrômicas. Presença de hipergamaglobulinemia policlonal.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Leishmaniose visceral.",
      "(B) Malária.",
      "(C) Mononucleose.",
      "(D) Esquistossomose."
    ],
    "correctAnswer": 0,
    "explanation": "Trabalhador rural do Mato Grosso do Sul (área endêmica) com 60 dias de febre baixa contínua, emagrecimento, astenia, hepatomegalia e esplenomegalia, anemia normocítica, leucopenia, VHS elevada, transaminases discretamente alteradas e hipergamaglobulinemia policlonal: leishmaniose visceral (calazar). O parasita (Leishmania infantum) infecta macrófagos do baço, fígado e medula, o que explica a hepatoesplenomegalia e as citopenias (por hiperesplenismo e invasão medular); a ativação policlonal de linfócitos B gera a hipergamaglobulinemia, com inversão albumina/globulina.\n\nRoteiro da leishmaniose visceral (Ministério da Saúde):\n\n• Transmissão: picada do flebotomíneo Lutzomyia longipalpis (mosquito-palha); o cão é o principal reservatório urbano. Doença de notificação compulsória.\n• Quadro: febre prolongada, emagrecimento, esplenomegalia volumosa, hepatomegalia, palidez; pancitopenia (pode faltar uma das linhagens, como aqui), hipergamaglobulinemia e hipoalbuminemia. Fases tardias: edema, sangramentos, icterícia, infecções bacterianas (principal causa de morte).\n• Diagnóstico: teste rápido imunocromatográfico (rK39) e RIFI; confirmação parasitológica no aspirado de medula óssea (padrão), ou de baço/linfonodo; PCR.\n• Tratamento: antimoniato de meglumina ou anfotericina B lipossomal. A lipossomal é preferida em gestantes, menores de 1 ano, maiores de 50 anos, coinfecção HIV, imunossupressão, insuficiência renal, hepática ou cardíaca, e casos graves. O antimonial é cardiotóxico (alarga QT) e contraindicado na gestação.\n• Sinais de gravidade: idade < 6 meses ou > 65 anos, desnutrição grave, icterícia, sangramentos, edema generalizado, infecção bacteriana, comorbidades.",
    "commentary": "Alternativa (B): a malária causa febre e esplenomegalia, mas com febre alta em paroxismos (calafrio, calor e sudorese) e curso agudo; é concentrada na região amazônica e não explica a hipergamaglobulinemia. O diagnóstico é pela gota espessa.\n\nAlternativa (C): a mononucleose infecciosa (vírus Epstein-Barr) atinge sobretudo adolescentes e adultos jovens, com faringite, linfadenopatia cervical, esplenomegalia leve e linfocitose com linfócitos atípicos — não leucopenia — e dura semanas, não 2 meses com consumo.\n\nAlternativa (D): a esquistossomose hepatoesplênica causa esplenomegalia por hipertensão portal, com varizes de esôfago e hemorragia digestiva; não costuma dar febre prolongada nem consumo, e é endêmica no Nordeste e em Minas Gerais.\n\nOutros diferenciais de febre prolongada com esplenomegalia: linfoma e leucemia, tuberculose disseminada, endocardite, brucelose e histoplasmose.",
    "tip": "Febre prolongada + emagrecimento + esplenomegalia volumosa + citopenias + hipergamaglobulinemia, em área endêmica = calazar. Teste rK39 e aspirado de medula.",
    "reference": "Brasil. Ministério da Saúde. Manual de Vigilância e Controle da Leishmaniose Visceral, 2014. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-20",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Em 2025, houve mudança dos critérios de pré-hipertensão das Diretrizes Brasileiras de Hipertensão Arterial (DBHA), em relação a 2020. O quadro a seguir detalha essas alterações.\n\nCritérios de pré-hipertensão das DBHA referentes a 2020 e 2025\n\n• DBHA 2020 — PAS (mmHg): 130 a 139; PAD (mmHg): e/ou 85 a 89\n• DBHA 2025 — PAS (mmHg): 120 a 139; PAD (mmHg): e/ou 80 a 89\n\nA mudança dos critérios aumentou qual característica do teste diagnóstico?",
    "options": [
      "(A) Sensibilidade.",
      "(B) Especificidade.",
      "(C) Falso-negativo.",
      "(D) Valor preditivo positivo."
    ],
    "correctAnswer": 0,
    "explanation": "A DBHA 2025 baixou o limite inferior da pré-hipertensão de 130/85 para 120/80 mmHg. Baixar o ponto de corte de um teste faz com que mais pessoas sejam classificadas como positivas: menos doentes (ou pessoas em risco) escapam, ou seja, caem os falsos-negativos e sobe a sensibilidade. O preço é que mais pessoas sem o desfecho também são rotuladas como positivas — sobem os falsos-positivos e cai a especificidade. Resposta: sensibilidade.\n\nPropriedades de um teste diagnóstico (tabela 2 × 2: VP, FP, FN, VN):\n\n• Sensibilidade = VP / (VP + FN): capacidade de detectar quem tem a doença. Teste muito sensível, quando negativo, afasta a doença (SnNout). Útil em rastreamento e em doenças graves que não podem passar.\n• Especificidade = VN / (VN + FP): capacidade de reconhecer quem não tem a doença. Teste muito específico, quando positivo, confirma a doença (SpPin). Útil para confirmar antes de tratamento agressivo.\n• Valor preditivo positivo = VP / (VP + FP) e valor preditivo negativo = VN / (VN + FN): dependem da prevalência. Mais prevalência → VPP sobe e VPN cai.\n• Razão de verossimilhança: positiva = sensibilidade / (1 − especificidade); negativa = (1 − sensibilidade) / especificidade. Não depende da prevalência.\n• Ponto de corte: sensibilidade e especificidade andam em sentidos opostos (curva ROC). Baixar o limiar → mais sensível e menos específico; subir o limiar → mais específico e menos sensível.",
    "commentary": "Alternativa (B): a especificidade cai, e não sobe, quando o critério fica mais amplo — mais pessoas sem risco real passam a ser rotuladas como pré-hipertensas (mais falsos-positivos).\n\nAlternativa (C): com o limiar mais baixo, menos pessoas em risco ficam de fora; os falsos-negativos diminuem.\n\nAlternativa (D): o valor preditivo positivo depende da prevalência e da especificidade; ao incluir muitas pessoas de menor risco, a proporção de positivos que de fato evoluem para hipertensão tende a cair.\n\nNota conceitual: pré-hipertensão é uma categoria de risco, não um teste diagnóstico binário; a questão usa a mudança de critério para cobrar o raciocínio sobre ponto de corte.",
    "tip": "Baixou o ponto de corte (critério mais amplo) = mais positivos = sensibilidade sobe, especificidade cai, falsos-negativos caem. VPP e VPN dependem da prevalência.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Hipertensão Arterial — 2025. Fletcher GS. Epidemiologia Clínica: elementos essenciais. 6ª ed.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-21",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 21 anos é atendida em consulta médica em Unidade Básica de Saúde, demonstrando sinais de ansiedade e preocupação com uma possível gravidez indesejada, falando baixo e mostrando-se evidentemente constrangida.\n\nApós o médico reforçar que o atendimento é sigiloso e que está ali para ajudá-la, a paciente conta que, durante o ato sexual, cerca de 16 horas atrás, percebeu que o rapaz retirou o preservativo sem seu consentimento.\n\nAlém da profilaxia pós-exposição e da contracepção de emergência, qual é a conduta no momento do atendimento?",
    "options": [
      "(A) Investigar a ausência de proteção durante o sexo.",
      "(B) Notificar o caso como violência interpessoal.",
      "(C) Encaminhar a paciente para exame de corpo de delito.",
      "(D) Prescrever benzodiazepínico."
    ],
    "correctAnswer": 1,
    "explanation": "A retirada do preservativo sem o consentimento da parceira durante a relação (conhecida como stealthing) anula o consentimento que havia sido dado para o sexo protegido: é violência sexual, e pode configurar o crime de violação sexual mediante fraude. Como profissional de saúde, além de acolher, ofertar as profilaxias e a contracepção de emergência, o médico tem o dever de notificar o caso no SINAN como violência interpessoal/sexual — a notificação de violência sexual é compulsória e imediata (em até 24 h) à vigilância municipal. A notificação é sigilosa, é dever do serviço e não depende de a paciente registrar boletim de ocorrência.\n\nAtendimento à violência sexual (Ministério da Saúde):\n\n• Acolhimento: escuta sem julgamento, sigilo, privacidade e respeito às decisões da paciente. O atendimento é obrigatório, imediato e integral em todo hospital do SUS (Lei 12.845/2013) e não exige boletim de ocorrência.\n• Contracepção de emergência: levonorgestrel 1,5 mg em dose única, o quanto antes (eficaz até 5 dias, melhor nas primeiras 72 h); DIU de cobre até 5 dias é a opção mais eficaz.\n• Profilaxia do HIV (PEP): iniciar até 72 h, idealmente nas primeiras 2 h — tenofovir + lamivudina + dolutegravir por 28 dias.\n• IST bacterianas: penicilina benzatina 2,4 milhões UI IM (sífilis), ceftriaxona 500 mg IM (gonorreia) e azitromicina 1 g VO (clamídia); metronidazol 2 g (tricomoníase) pode ser adiado para não somar efeitos gastrointestinais.\n• Hepatite B: vacinar se não vacinada; imunoglobulina se a vítima for suscetível e houver indicação.\n• Exames: testes rápidos de HIV, sífilis e hepatites B e C, e β-hCG; seguimento com repetição dos testes.\n• Notificação compulsória (Lei 10.778/2003): ficha de violência interpessoal/autoprovocada no SINAN. A Lei 13.931/2019 acrescentou a comunicação à autoridade policial em 24 h para fins estatísticos, sem identificar a vítima e sem condicionar o atendimento.\n• Registro de vestígios: pode ser feito no próprio serviço de saúde e encaminhado à perícia, se a mulher quiser — o exame de corpo de delito é direito, não pré-requisito.\n• Seguimento: apoio psicológico e social, rede de proteção (CRAM, Delegacia da Mulher, Defensoria).",
    "commentary": "Alternativa (A): investigar \"a ausência de proteção\" desloca o foco para a conduta da vítima e pode soar como culpabilização. A história já está clara — houve retirada do preservativo sem consentimento — e o que falta é o dever de notificar.\n\nAlternativa (C): o exame de corpo de delito deve ser informado e oferecido, mas a decisão de fazê-lo e de registrar ocorrência é da paciente. Encaminhar para o IML não é a conduta obrigatória do atendimento e não substitui a notificação.\n\nAlternativa (D): ansiedade e constrangimento são reações esperadas a uma violência; não há indicação de benzodiazepínico como conduta. O cuidado é acolhimento, apoio psicológico e seguimento.",
    "tip": "Violência sexual (inclusive retirada do preservativo sem consentimento): acolha, contracepção de emergência, PEP em até 72 h, profilaxia de IST, notificação compulsória imediata. Boletim de ocorrência não é exigência.",
    "reference": "Brasil. Ministério da Saúde. Norma Técnica — Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes. 3ª ed., 2012. Brasil. PCDT para Profilaxia Pós-Exposição de Risco à Infecção pelo HIV, IST e Hepatites Virais. Leis nº 10.778/2003, 12.845/2013 e 13.931/2019.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-22",
    "topography": "2.2",
    "topic": "Doença arterial coronariana crônica",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos, tabagista, com diagnóstico prévio de hipertensão arterial e dislipidemia, comparece à consulta ambulatorial com queixa de dor precordial desencadeada por esforços moderados e aliviada com repouso.\n\nAtualmente, está em uso de losartana 50 mg de 12/12h, atenolol 25 mg uma vez ao dia e sinvastatina 20 mg uma vez ao dia.\n\nAo exame físico, apresenta PA 150 × 90 mmHg, sem outros achados. O perfil lipídico revela LDL 190 mg/dL e o ECG mostra sobrecarga ventricular esquerda.\n\nPara o manejo desse paciente, qual exame deve ser solicitado?",
    "options": [
      "(A) Teste ergométrico.",
      "(B) Cineangiocoronariografia.",
      "(C) Cintilografia miocárdica de perfusão.",
      "(D) Ecocardiograma transtorácico."
    ],
    "correctAnswer": 2,
    "explanation": "Homem de 62 anos com dor precordial desencadeada por esforço e aliviada pelo repouso: angina típica, suspeita de doença arterial coronariana (DAC) crônica. O primeiro passo é estimar a probabilidade pré-teste (PPT) de DAC obstrutiva, que define o exame:\n\n• Muito baixa (≤ 5%): sem necessidade de novos testes.\n• Baixa (> 5–15%): ajustar a PPT (ECG, ecocardiograma, teste ergométrico, escore de cálcio) ou angiotomografia de coronárias.\n• Moderada (> 15–50%): prova funcional ou angiotomografia.\n• Alta (> 50–85%): prova funcional com imagem (cintilografia de perfusão, ecocardiograma de estresse ou ressonância de estresse).\n• Muito alta (> 85%): cineangiocoronariografia direta.\n\nHomem na faixa de 60–69 anos com angina típica tem PPT em torno de 75–80%, e os fatores de risco (tabagismo, hipertensão, dislipidemia com LDL 190) e a alteração no ECG reforçam a categoria alta. Logo, o exame indicado é uma prova funcional. Além disso, o ECG com sobrecarga ventricular esquerda costuma vir com alteração de repolarização (padrão strain), que torna o segmento ST ininterpretável no teste ergométrico — por isso a prova funcional deve ter imagem: cintilografia miocárdica de perfusão.",
    "commentary": "Alternativa (A): o teste ergométrico depende da análise do ST. Com sobrecarga ventricular esquerda no ECG de repouso, o exame perde acurácia (falso-positivos). No fluxograma, ele aparece como ferramenta para ajustar a PPT nas categorias baixas, não como prova funcional de escolha na PPT alta.\n\nAlternativa (B): a cineangiocoronariografia direta fica para PPT muito alta (> 85%) ou para quem já tem critério de alto risco (angina refratária ao tratamento, disfunção ventricular, arritmia grave, isquemia extensa em teste prévio). Não é o caso: paciente estável, sem esses achados.\n\nAlternativa (D): o ecocardiograma transtorácico de repouso avalia função ventricular e estrutura, mas não demonstra isquemia induzível; no fluxograma, entra apenas para ajustar a PPT. Ecocardiograma de ESTRESSE seria alternativa equivalente à cintilografia — não é o que está escrito.\n\nParalelamente ao exame, otimizar o tratamento: estatina de alta potência (sinvastatina 20 mg é insuficiente para LDL 190), AAS, controle pressórico e cessação do tabagismo.",
    "tip": "DAC crônica: calcule a PPT. ≤ 5% nada; 5–15% ajustar ou angio-TC; 15–50% funcional ou angio-TC; 50–85% prova funcional; > 85% cateterismo. ECG basal alterado (HVE, BRE, marca-passo, digital) = prova funcional com imagem, não teste ergométrico.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretriz Brasileira de Doença Arterial Coronariana Crônica – 2024. Arq Bras Cardiol.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-23",
    "topography": "15",
    "topic": "Saúde da criança",
    "module": "Saúde Coletiva",
    "text": "Em uma comunidade com alto índice de diarreia aguda em lactentes, uma equipe de Unidade de Saúde da Família, em reunião com lideranças locais, decide planejar uma ação de intervenção coletiva de base populacional.\n\nNesse caso, a ação com maior impacto na redução da incidência desse agravo é:",
    "options": [
      "(A) Distribuição de envelopes de sais de reidratação oral para todas as famílias com lactentes com quadro de diarreia.",
      "(B) Promoção de campanha educativa para as mães quanto à importância de se fazer terapia de reidratação oral em domicílio.",
      "(C) Realização de palestras em unidades de saúde a respeito do uso racional de antibióticos por pacientes com diarreia.",
      "(D) Conscientização das mães sobre o aleitamento materno exclusivo até os 6 meses, com a manutenção do aleitamento após a introdução alimentar."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a ação de maior impacto na redução da INCIDÊNCIA da diarreia — ou seja, prevenção de novos casos, e não tratamento dos casos que já aconteceram. O aleitamento materno exclusivo até 6 meses é a medida de prevenção com maior impacto: o leite humano transfere anticorpos (IgA secretora), oligossacarídeos e fatores que protegem contra patógenos entéricos, e evita a exposição do lactente a água, mamadeiras e alimentos contaminados. Manter o aleitamento após a introdução alimentar (até 2 anos ou mais) preserva parte dessa proteção.\n\nDiarreia na infância — prevenção × tratamento:\n\n• Prevenção primária (reduz a incidência): aleitamento materno exclusivo até 6 meses; saneamento básico e água tratada; lavagem das mãos; higiene no preparo dos alimentos; vacina oral contra rotavírus (2 e 4 meses); suplementação de vitamina A em áreas de risco.\n• Tratamento (reduz gravidade, desidratação e mortalidade): terapia de reidratação oral, zinco por 10–14 dias, manutenção da alimentação e do aleitamento, antibiótico só em disenteria com comprometimento do estado geral ou cólera.\n\nNíveis de prevenção de Leavell e Clark: primária (promoção da saúde e proteção específica — aleitamento, saneamento, vacina), secundária (diagnóstico e tratamento precoces — reidratação oral), terciária (reabilitação e limitação de sequelas).",
    "commentary": "Alternativa (A): distribuir sais de reidratação oral às famílias de lactentes que já estão com diarreia trata a desidratação dos casos existentes; reduz mortalidade, mas não reduz o surgimento de novos casos.\n\nAlternativa (B): a campanha sobre reidratação oral no domicílio também é medida de tratamento (prevenção secundária), com grande impacto sobre óbitos, mas não sobre a incidência.\n\nAlternativa (C): o uso racional de antibióticos evita resistência e efeitos adversos — a maioria das diarreias é viral e autolimitada —, mas não previne novos episódios. Além disso, palestras na unidade não são ação de base populacional.",
    "tip": "Pergunta sobre INCIDÊNCIA pede prevenção (aleitamento, saneamento, lavagem de mãos, vacina de rotavírus). Pergunta sobre mortalidade ou gravidade pede tratamento (reidratação oral, zinco).",
    "reference": "Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 23 — Saúde da criança: aleitamento materno e alimentação complementar. 2ª ed., 2015. OMS/UNICEF. Global Action Plan for Prevention and Control of Pneumonia and Diarrhoea (GAPPD), 2013.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-24",
    "topography": "6.2",
    "topic": "Fraturas",
    "module": "Cirurgia",
    "text": "Menino de 6 anos, acompanhado pela mãe, é atendido em emergência de trauma por ter sofrido queda de patinete há 6 horas, tendo evoluído com aumento de volume e dor em região supracondiliana de braço esquerdo e impossibilidade de mexer o cotovelo.\n\nÀ inspeção, são identificados aumento de volume e aparente deformidade em topografia de cotovelo esquerdo, com dor à palpação da região do úmero distal. Pulsos radial e ulnar diminuídos à esquerda. É realizada radiografia de cotovelo em AP e perfil, cujas imagens são mostradas a seguir.\n\nQual é a conduta indicada para esse paciente?",
    "options": [
      "(A) Redução incruenta com colocação de tala axilopalmar.",
      "(B) Imobilização com tala gessada em posição de Velpeau.",
      "(C) Tração no antebraço e colocação de fixador externo.",
      "(D) Fasciotomia em antebraço e redução cirúrgica da fratura."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 6 anos com queda e apoio no membro estendido, dor, edema e deformidade no cotovelo e radiografia com fratura supracondiliana do úmero desviada: é a fratura mais comum do cotovelo na infância (pico entre 5 e 7 anos), quase sempre do tipo em extensão. O pulso radial e ulnar diminuídos indicam comprometimento vascular — o fragmento proximal pode comprimir ou estirar a artéria braquial —, o que torna a redução urgente. A conduta é a redução fechada (incruenta) o quanto antes, que costuma restabelecer o fluxo, seguida de estabilização (o padrão hoje é fixação percutânea com fios de Kirschner) e imobilização axilopalmar. Entre as alternativas, a A é a que contempla a redução urgente.\n\nRoteiro da fratura supracondiliana do úmero na criança:\n\n• Classificação de Gartland (tipo extensão): I — sem desvio → imobilização axilopalmar com cotovelo a 90° por cerca de 3 semanas. II — angulada com a cortical posterior íntegra → redução fechada e, na maioria, fixação com fios. III — desvio completo → redução fechada e fixação percutânea com fios de Kirschner, com urgência. IV — instabilidade em flexão e extensão.\n• Lesões nervosas: o nervo interósseo anterior (ramo do mediano) é o mais lesado — a criança não consegue fazer o sinal de OK com polegar e indicador; também nervo radial e, na fixação com fio medial, o ulnar (lesão iatrogênica).\n• Lesão vascular: mão sem pulso mas rosada e perfundida → redução e fixação, depois observação; mão branca, fria e sem perfusão → redução imediata e, se a perfusão não voltar, exploração da artéria braquial.\n• Síndrome compartimental do antebraço: dor desproporcional, que piora com a extensão passiva dos dedos, antebraço tenso. Exige fasciotomia; se não tratada, leva à contratura isquêmica de Volkmann.\n• Complicação tardia mais comum: cúbito varo (deformidade em coronha de espingarda), por consolidação viciosa.",
    "commentary": "Alternativa (B): a tala em posição de Velpeau (braço junto ao tórax) é usada em fraturas do úmero proximal e da clavícula; não reduz a fratura supracondiliana desviada nem resolve o compromisso vascular.\n\nAlternativa (C): tração esquelética e fixador externo não são o tratamento padrão dessa fratura na criança; a tração ficou restrita a situações excepcionais, e atrasaria a redução num membro com pulso diminuído.\n\nAlternativa (D): fasciotomia é para síndrome compartimental, que o enunciado não descreve (dor desproporcional, dor à extensão passiva, compartimento tenso). Pulso diminuído por si só pede redução, não fasciotomia.\n\nSobre a alternativa (A): está incompleta — a redução deve ser feita no centro cirúrgico, com fixação percutânea por fios de Kirschner, e não apenas com tala. É a mais próxima da conduta correta por priorizar a redução urgente.",
    "tip": "Criança + queda com mão estendida + cotovelo deformado = fratura supracondiliana. Desviada ou com pulso diminuído: redução fechada urgente e fios de Kirschner. Cheque o nervo interósseo anterior (sinal do OK).",
    "reference": "Rockwood and Wilkins' Fractures in Children. 9ª ed. Supracondylar fractures of the distal humerus. American Academy of Orthopaedic Surgeons. Clinical Practice Guideline — Management of Pediatric Supracondylar Humerus Fractures.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial recurso). Nenhuma opção oferece redução urgente com estabilização percutânea e avaliação da perfusão arterial.",
    "image": "/images/sugenamed1-24.webp"
  },
  {
    "id": "sug-enamed1-25",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 28 anos, sem comorbidades, comparece a uma Unidade Básica de Saúde com queixa de lesão genital indolor, que surgiu há cerca de 3 semanas. Nega leucorreia, febre, mal-estar ou exantema cutâneo. Tem histórico de múltiplos parceiros sexuais.\n\nAo exame físico: úlcera única com base endurecida, fundo limpo, localizada em grande lábio direito, com adenomegalia próxima à lesão, não supurativa.\n\nConsiderando-se a principal hipótese diagnóstica, qual tratamento é recomendado a essa paciente?",
    "options": [
      "(A) Ceftriaxona 500 mg, intramuscular, dose única.",
      "(B) Azitromicina 1 g, por via oral, dose única.",
      "(C) Benzilpenicilina benzatina 2,4 MUI, intramuscular, dose única.",
      "(D) Doxiciclina 100 mg de 12/12 horas, por via oral, por 21 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Úlcera genital única, indolor, de base endurecida e fundo limpo, surgida cerca de 3 semanas após exposição, com linfonodo regional aumentado e não supurativo: cancro duro da sífilis primária (Treponema pallidum). O tratamento de sífilis recente (até 1 ano de evolução) é benzilpenicilina benzatina 2,4 milhões UI IM em dose única (1,2 milhão em cada glúteo). Pedir teste treponêmico (teste rápido) e não treponêmico (VDRL), testar HIV e hepatites, e convocar as parcerias sexuais.\n\nSífilis — classificação e tratamento (PCDT IST, Ministério da Saúde):\n\n• Sífilis recente (primária, secundária ou latente com menos de 1 ano): benzatina 2,4 milhões UI IM, dose única.\n• Sífilis tardia (latente com mais de 1 ano ou de duração ignorada, terciária): benzatina 2,4 milhões UI IM por semana, por 3 semanas (7,2 milhões UI no total).\n• Neurossífilis: penicilina cristalina 18–24 milhões UI/dia IV por 14 dias.\n• Alergia a penicilina (fora da gestação): doxiciclina 100 mg 12/12 h por 15 dias (recente) ou 30 dias (tardia), ou ceftriaxona. Na gestante, só a penicilina trata o feto — dessensibilizar se alérgica.\n• Seguimento: VDRL a cada 3 meses no 1º ano (mensal na gestante); resposta adequada = queda de 2 diluições em 6 meses (recente).\n\nDiferencial das úlceras genitais:\n\n• Sífilis primária: única, indolor, endurecida, fundo limpo; linfonodo não supurativo.\n• Cancro mole (Haemophilus ducreyi): múltiplas, dolorosas, fundo sujo e bordas irregulares; bubão que fistuliza por orifício único. Azitromicina 1 g dose única ou ceftriaxona.\n• Herpes genital: vesículas agrupadas que viram úlceras rasas, dolorosas, com ardor prévio. Aciclovir.\n• Linfogranuloma venéreo (Chlamydia trachomatis L1–L3): úlcera fugaz, depois bubão que fistuliza por vários orifícios (bico de regador). Doxiciclina 21 dias.\n• Donovanose (Klebsiella granulomatis): úlcera crônica, indolor, vermelho-viva, que sangra fácil. Doxiciclina por pelo menos 21 dias.",
    "commentary": "Alternativa (A): ceftriaxona 500 mg IM em dose única é o tratamento da gonorreia; não é o esquema da sífilis (a ceftriaxona só entra como alternativa, em vários dias).\n\nAlternativa (B): azitromicina 1 g em dose única trata clamídia e cancro mole; não é recomendada para sífilis pela resistência do treponema aos macrolídeos.\n\nAlternativa (D): doxiciclina por 21 dias é o esquema do linfogranuloma venéreo e da donovanose. Na sífilis, a doxiciclina é só alternativa em alérgicos, por 15 dias na forma recente.",
    "tip": "Úlcera genital única, indolor, endurecida e limpa = cancro duro. Sífilis recente: benzatina 2,4 milhões UI dose única; tardia: 3 doses semanais; neurossífilis: cristalina IV.",
    "reference": "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST), 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-26",
    "topography": "10",
    "topic": "Chikungunya",
    "module": "Clínica Médica",
    "text": "Homem de 26 anos comparece a uma Unidade Básica de Saúde com queixa de febre de 39 °C há 3 dias, dores musculares de pequena intensidade, dores articulares de moderada intensidade, associadas a edema articular e aparecimento de exantema, o que o tem impedido de trabalhar e até mesmo de caminhar nesses 3 dias.\n\nQual é o diagnóstico provável nesse caso?",
    "options": [
      "(A) Dengue.",
      "(B) Zika.",
      "(C) Chikungunya.",
      "(D) Leptospirose."
    ],
    "correctAnswer": 2,
    "explanation": "Febre alta de início súbito com artralgia intensa, edema articular e incapacidade de trabalhar e até de andar: o quadro em que a dor articular domina é o da chikungunya, arbovirose por alfavírus transmitida pelo Aedes aegypti e albopictus. O nome vem de uma língua africana e significa \"aqueles que se dobram\", pela postura antálgica. A artralgia costuma ser simétrica, poliarticular, em mãos, punhos e tornozelos, e pode persistir por meses.\n\nDiferenciando as arboviroses:\n\n• Dengue: febre alta, cefaleia, dor retro-orbitária e mialgia intensas; artralgia leve; exantema em cerca de metade dos casos; plaquetopenia e risco de extravasamento plasmático com a queda da febre.\n• Chikungunya: febre alta; artralgia intensa e incapacitante, com edema, desde o início; exantema frequente; pode cronificar.\n• Zika: febre baixa ou ausente; exantema pruriginoso precoce (1º–2º dia), conjuntivite não purulenta; artralgia leve. Complicações: microcefalia congênita e síndrome de Guillain-Barré.\n\nFases e tratamento da chikungunya:\n\n• Aguda (até 14 dias): repouso, hidratação, paracetamol ou dipirona, compressas frias. Evitar AINE e AAS até excluir dengue. Grupos de risco (gestantes, idosos, recém-nascidos, comorbidades) precisam de avaliação mais próxima.\n• Pós-aguda (até 3 meses): AINE; prednisona em dose baixa (0,5 mg/kg/dia) nos casos moderados a graves.\n• Crônica (mais de 3 meses): hidroxicloroquina, sulfassalazina ou metotrexato, com fisioterapia; encaminhar à reumatologia se refratária.",
    "commentary": "Alternativa (A): na dengue predominam febre, cefaleia, dor retro-orbitária e mialgia intensa (febre quebra-ossos), mas a artralgia com edema articular e incapacidade de andar não é o padrão.\n\nAlternativa (B): a zika tem febre baixa ou ausente e destaca o exantema pruriginoso e a conjuntivite; dor e edema articular, quando ocorrem, são leves — não febre de 39 °C com incapacidade.\n\nAlternativa (D): a leptospirose vem com história de exposição a enchentes, esgoto ou urina de rato, mialgia intensa nas panturrilhas, sufusão conjuntival e, na forma grave (síndrome de Weil), icterícia rubínica, insuficiência renal e hemorragia pulmonar. Não tem artrite com edema como marca.",
    "tip": "Febre + artralgia intensa e incapacitante com edema = chikungunya. Mialgia e dor retro-orbitária = dengue. Exantema pruriginoso + conjuntivite com pouca febre = zika. Até excluir dengue, nada de AINE.",
    "reference": "Brasil. Ministério da Saúde. Chikungunya: manejo clínico, 2017. Brasil. Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-27",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "No quadro a seguir, são apresentados os valores de prevalência da doença de Chagas em 4 municípios brasileiros, em determinado ano.\n\nPrevalência da doença de Chagas por município, em determinado ano\n\n• Município 1 — Número absoluto de casos: 1.500; Prevalência (%): 3,0; População total do município: 50.000\n• Município 2 — Número absoluto de casos: 900; Prevalência (%): 2,0; População total do município: 45.000\n• Município 3 — Número absoluto de casos: 1.625; Prevalência (%): 2,5; População total do município: 65.000\n• Município 4 — Número absoluto de casos: 864; Prevalência (%): 1,8; População total do município: 48.000\n\nConsiderando-se que o teste sorológico ELISA utilizado nesse caso apresenta sensibilidade e especificidade constantes em todos os municípios, em qual deles o valor preditivo negativo é maior para um indivíduo assintomático com resultado negativo?",
    "options": [
      "(A) 1.",
      "(B) 2.",
      "(C) 3.",
      "(D) 4."
    ],
    "correctAnswer": 3,
    "explanation": "O valor preditivo negativo (VPN) é a probabilidade de a pessoa não ter a doença quando o teste dá negativo. Diferente da sensibilidade e da especificidade, que são propriedades do teste, os valores preditivos dependem da prevalência da doença na população testada. Com sensibilidade e especificidade fixas, quanto menor a prevalência, menos doentes há para gerar falsos-negativos — e maior o VPN. As prevalências são 3,0%, 2,0%, 2,5% e 1,8%: a menor é a do município 4, que tem o maior VPN.\n\nExemplo numérico (teste com sensibilidade de 90% e especificidade de 95%):\n\n• Município 1 (prevalência 3%): em 10.000 pessoas, 300 doentes → 30 falsos-negativos; 9.700 sadios → 9.215 verdadeiros-negativos. VPN = 9.215 / 9.245 ≈ 99,68%.\n• Município 4 (prevalência 1,8%): 180 doentes → 18 falsos-negativos; 9.820 sadios → 9.329 verdadeiros-negativos. VPN = 9.329 / 9.347 ≈ 99,81%.\n\nRegras da prevalência:\n\n• Prevalência sobe → VPP sobe e VPN cai (mais doentes entre os positivos e entre os negativos).\n• Prevalência cai → VPP cai e VPN sobe. Por isso um teste de rastreamento em população de baixa prevalência gera muitos falsos-positivos, mas um resultado negativo é muito confiável.\n• Sensibilidade, especificidade e razões de verossimilhança não mudam com a prevalência.\n• Prevalência = casos existentes / população total. Aqui, conferir o cálculo: 1.500/50.000 = 3%; 900/45.000 = 2%; 1.625/65.000 = 2,5%; 864/48.000 = 1,8%.",
    "commentary": "Alternativa (A): o município 1 tem a maior prevalência (3%) — é onde o VPN é menor e o VPP é maior.\n\nAlternativa (B): o município 2 tem prevalência intermediária (2%), maior que a do município 4.\n\nAlternativa (C): o município 3 tem o maior número absoluto de casos (1.625), o que pode enganar, mas a prevalência é de 2,5%; o que importa para os valores preditivos é a proporção, não o número de casos.",
    "tip": "Valores preditivos dependem da prevalência: menor prevalência → maior VPN e menor VPP. Sensibilidade e especificidade não mudam. Compare prevalências, não números absolutos.",
    "reference": "Fletcher GS. Epidemiologia Clínica: elementos essenciais. 6ª ed. Medronho RA et al. Epidemiologia. 2ª ed. Cap. Validade de testes diagnósticos.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-28",
    "topography": "13",
    "topic": "Transtorno bipolar",
    "module": "Clínica Médica",
    "text": "Estudante universitário de 19 anos é atendido em Unidade Básica de Saúde com queixa de tristeza persistente há cerca de 1 mês. De acordo com seu relato, tem apresentado humor rebaixado, perda de interesse nas aulas e atividades sociais, fadiga constante, insônia de manutenção e diminuição do apetite nesse período.\n\nA mãe, que o acompanha, menciona que o filho \"não está rendendo nos estudos\", que o isolamento social é notável e que o quadro está \"atrapalhando muito a vida dele\".\n\nNa história pregressa do paciente, consta que, há aproximadamente 3 meses, ele passou por um período de 5 dias em que estava \"excessivamente bem\", com energia incomum e necessidade de sono reduzida, falando muito, mais sociável e iniciando vários projetos simultaneamente. Esses sintomas eram perceptíveis por amigos e familiares, mas não causaram acentuado prejuízo social ou funcional. Não há histórico de sintomas psicóticos.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transtorno depressivo maior.",
      "(B) Transtorno ciclotímico.",
      "(C) Transtorno afetivo bipolar.",
      "(D) Transtorno depressivo misto."
    ],
    "correctAnswer": 2,
    "explanation": "Episódio atual de 1 mês com humor deprimido, perda de interesse, fadiga, insônia, hiporexia e prejuízo importante nos estudos e na vida social: episódio depressivo maior. A chave está na história: há 3 meses, 5 dias de humor elevado, energia aumentada, menor necessidade de sono, fala excessiva e muitos projetos ao mesmo tempo, notados por terceiros, mas sem prejuízo acentuado e sem psicose — isso é um episódio hipomaníaco. Depressão maior + hipomania (sem mania) = transtorno afetivo bipolar tipo II. Reconhecer isso muda o tratamento: antidepressivo isolado pode induzir virada para mania ou ciclagem rápida.\n\nCritérios (DSM-5-TR):\n\n• Mania: humor elevado, expansivo ou irritável + energia aumentada por pelo menos 7 dias (ou qualquer duração, se hospitalizado), com prejuízo acentuado, necessidade de internação ou psicose.\n• Hipomania: os mesmos sintomas por pelo menos 4 dias consecutivos, com mudança perceptível por outras pessoas, mas sem prejuízo acentuado, sem internação e sem psicose.\n• Sintomas (mnemônico DIGFAST): distratibilidade, impulsividade/indiscrição, grandiosidade, fuga de ideias, aumento de atividade, diminuição da necessidade de sono (sleep), taquilalia.\n• Transtorno bipolar tipo I: pelo menos um episódio maníaco (episódios depressivos são comuns, mas não necessários).\n• Transtorno bipolar tipo II: pelo menos um episódio hipomaníaco e um depressivo maior, nunca mania.\n• Ciclotimia: por pelo menos 2 anos (1 ano em crianças e adolescentes), períodos de sintomas hipomaníacos e depressivos que não fecham critérios de episódio.\n• \"Com características mistas\": especificador de um episódio (sintomas do polo oposto ao mesmo tempo), não um diagnóstico por si só.\n\nTratamento da depressão bipolar: quetiapina, lurasidona, lítio ou lamotrigina (esta especialmente no tipo II); evitar antidepressivo em monoterapia.",
    "commentary": "Alternativa (A): o diagnóstico de transtorno depressivo maior exige que nunca tenha havido mania ou hipomania; o episódio de 5 dias de energia elevada descarta a depressão unipolar.\n\nAlternativa (B): na ciclotimia, os sintomas hipomaníacos e depressivos nunca fecham critérios de episódio e duram pelo menos 2 anos; aqui há episódio depressivo maior completo e um hipomaníaco completo.\n\nAlternativa (D): \"transtorno depressivo misto\" não é diagnóstico do DSM-5-TR. Existe o especificador \"com características mistas\", que exige sintomas hipomaníacos durante o episódio depressivo — não um episódio separado, 3 meses antes.",
    "tip": "Todo deprimido: pergunte por episódios prévios de energia alta e pouca necessidade de sono. Hipomania (≥ 4 dias, sem prejuízo acentuado) + depressão maior = bipolar tipo II. Evite antidepressivo isolado.",
    "reference": "American Psychiatric Association. DSM-5-TR — Manual Diagnóstico e Estatístico de Transtornos Mentais, 2022. Yatham LN et al. CANMAT and ISBD 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord, 2018.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-29",
    "topography": "3.1",
    "topic": "Doença inflamatória intestinal",
    "module": "Clínica Médica",
    "text": "Mulher de 23 anos comparece ao ambulatório de gastroenterologia de hospital de atenção secundária devido a dor abdominal crônica, diarreia com episódios de sangramento e emagrecimento significativo. A paciente é tabagista e não faz uso de medicações. Nega outras doenças. IMC 16,8 kg/m².\n\nAo exame físico: hipocorada (1+/4+), acianótica, anictérica e afebril; abdome escavado, flácido, com peristalse aumentada e massa palpável em fossa ilíaca direita; presença de fístula perianal. Observa-se lesão cutânea com aspecto de pioderma gangrenoso no membro inferior direito.\n\nQual é o diagnóstico provável nesse caso?",
    "options": [
      "(A) Doença de Crohn.",
      "(B) Retocolite ulcerativa.",
      "(C) Neoplasia de cólon.",
      "(D) Tuberculose intestinal."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem, tabagista, com dor abdominal crônica, diarreia com sangue, emagrecimento importante (IMC 16,8), anemia, massa em fossa ilíaca direita, fístula perianal e pioderma gangrenoso: doença de Crohn. A massa na fossa ilíaca direita representa o acometimento ileocecal (o local mais comum), com alças espessadas e aderidas; a fístula perianal traduz a inflamação transmural, marca da doença; o tabagismo é fator de risco e de pior evolução no Crohn; o pioderma gangrenoso é manifestação extraintestinal das doenças inflamatórias intestinais.\n\nCrohn × retocolite ulcerativa (RCU):\n\n• Localização: Crohn — qualquer ponto da boca ao ânus, sobretudo íleo terminal; RCU — só o cólon, começando sempre no reto.\n• Distribuição: Crohn — salteada (áreas doentes e sadias intercaladas); RCU — contínua, do reto para cima.\n• Profundidade: Crohn — transmural (fístulas, abscessos, estenoses); RCU — restrita à mucosa.\n• Endoscopia e histologia: Crohn — úlceras aftoides e longitudinais, aspecto em pedra de calçamento, granulomas não caseosos; RCU — friabilidade, perda do padrão vascular, pseudopólipos, abscessos de cripta.\n• Clínica: Crohn — dor, diarreia, emagrecimento, massa, doença perianal; RCU — diarreia com sangue, puxo e tenesmo.\n• Tabagismo: piora o Crohn; é \"protetor\" na RCU.\n• Sorologia: ASCA mais no Crohn; p-ANCA mais na RCU.\n• Extraintestinais: eritema nodoso, pioderma gangrenoso, artrite, uveíte e episclerite (ambas); colangite esclerosante primária mais na RCU.\n\nTratamento do Crohn moderado a grave: corticoide para induzir remissão; manutenção com imunossupressor (azatioprina) e/ou biológico (anti-TNF — infliximabe, adalimumabe —, vedolizumabe, ustequinumabe). Doença fistulizante perianal: drenagem de abscesso e seton, antibiótico (metronidazol, ciprofloxacino) e anti-TNF. Cessar o tabagismo. Antes de imunossuprimir, rastrear tuberculose latente e hepatites.",
    "commentary": "Alternativa (B): a retocolite ulcerativa é restrita ao cólon e à mucosa: não causa massa em fossa ilíaca direita nem fístula perianal, e o tabagismo, na verdade, se associa a menor risco de RCU.\n\nAlternativa (C): câncer colorretal aos 23 anos é raro (a não ser em síndromes hereditárias) e não explica fístula perianal nem pioderma gangrenoso.\n\nAlternativa (D): a tuberculose intestinal é o principal diferencial no Brasil, porque também acomete a região ileocecal e causa massa, dor e emagrecimento; mas costuma vir com febre e sudorese noturna, pode ter acometimento pulmonar, e fístula perianal e pioderma gangrenoso falam a favor de Crohn. Na dúvida, biópsia (granuloma caseoso, pesquisa de BAAR, cultura, PCR) — e excluir TB antes de imunossuprimir.",
    "tip": "Diarreia crônica + emagrecimento + massa em fossa ilíaca direita + fístula perianal (+ tabagismo) = doença de Crohn. Retocolite: começa no reto, é contínua e só da mucosa.",
    "reference": "Gordon H et al. ECCO Guidelines on Therapeutics in Crohn's Disease: Medical Treatment. J Crohns Colitis, 2024. Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas — Doença de Crohn.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-30",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Lactente previamente hígido, de 8 meses, em aleitamento materno complementado com fórmula infantil e introdução adequada de alimentos, é levado a uma Unidade de Pronto Atendimento com quadro de diarreia líquida iniciado há 2 dias, com 6 a 8 evacuações/dia, sem sangue ou muco, acompanhado de vômitos esporádicos, mas com boa aceitação de líquidos e temperatura axilar de 38,2 °C.\n\nNo momento da consulta, encontra-se ativo, com boa perfusão periférica, e apresenta choro com lágrimas, mucosa úmida, tempo de enchimento capilar menor que 2 segundos e fontanela plana.\n\nAlém da administração de zinco, a conduta inicial para o caso é:",
    "options": [
      "(A) Prescrição de azitromicina.",
      "(B) Indicação de hidratação venosa.",
      "(C) Indicação de solução de reidratação oral.",
      "(D) Prescrição de albendazol."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 8 meses com diarreia aguda aquosa, sem sangue, há 2 dias, febre baixa e vômitos ocasionais, aceitando bem os líquidos. Ao exame está ativo, com lágrimas, mucosa úmida, enchimento capilar < 2 s e fontanela normal: não há sinais de desidratação. A conduta é o Plano A do Ministério da Saúde — tratamento domiciliar com soro de reidratação oral após cada evacuação, para prevenir a desidratação —, mantendo o aleitamento e a alimentação habitual, e zinco por 10–14 dias.\n\nAvaliação da hidratação e planos de tratamento (Ministério da Saúde):\n\n• Sem desidratação (bem alerta, lágrimas presentes, boca úmida, bebe normalmente, sinal da prega desaparece logo, pulso cheio, enchimento capilar < 3 s) → Plano A, em casa: mais líquidos que o habitual; SRO após cada evacuação líquida — menores de 1 ano 50–100 mL, de 1 a 10 anos 100–200 mL, maiores de 10 anos à vontade; manter alimentação e aleitamento; zinco (10 mg/dia abaixo de 6 meses, 20 mg/dia a partir de 6 meses, por 10–14 dias); orientar sinais de perigo.\n• Desidratação (dois ou mais: irritado, olhos fundos, sem lágrimas, boca seca, sede intensa, prega desaparece lentamente, pulso rápido e fraco, enchimento capilar 3–5 s) → Plano B, na unidade: SRO 50–100 mL/kg em 4–6 h, reavaliando; se hidratado, volta ao Plano A.\n• Desidratação grave (comatoso ou hipotônico, não consegue beber, prega desaparece muito lentamente, pulso fraco ou ausente, enchimento capilar > 5 s) ou falha do Plano B → Plano C: hidratação venosa — fase rápida com soro fisiológico 0,9% (20 mL/kg em 30 minutos em menores de 5 anos, repetindo até melhorar), depois manutenção e reposição.\n• Antibiótico só em disenteria (sangue nas fezes) com comprometimento do estado geral (ciprofloxacino ou ceftriaxona) ou suspeita de cólera. Antieméticos e antidiarreicos não são rotina (ondansetrona em dose única pode ser usada em vômitos que impedem a via oral).",
    "commentary": "Alternativa (A): azitromicina não está indicada na diarreia aquosa aguda, quase sempre viral (rotavírus, norovírus) e autolimitada. Antibiótico fica para disenteria com comprometimento do estado geral ou cólera.\n\nAlternativa (B): hidratação venosa é o Plano C, para desidratação grave, choque ou falha da via oral. O lactente aceita líquidos e está hidratado; a via venosa traria riscos e custos sem benefício.\n\nAlternativa (D): albendazol não tem indicação empírica na diarreia aguda; parasitoses intestinais causam quadros mais arrastados e o tratamento é guiado por suspeita clínica ou exame.",
    "tip": "Diarreia aguda: classifique a hidratação. Sem desidratação = Plano A (SRO após cada evacuação em casa + zinco + manter alimentação). Desidratado = Plano B (SRO na unidade). Grave = Plano C (venosa).",
    "reference": "Brasil. Ministério da Saúde. Manejo do paciente com diarreia (cartaz de avaliação e tratamento), 2023. Sociedade Brasileira de Pediatria. Guia Prático de Atualização — Diarreia aguda: diagnóstico e tratamento, 2017.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-31",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Mulher de 19 anos, previamente saudável, é levada a uma Unidade de Pronto Atendimento (UPA) após ter sofrido queda da própria altura, com traumatismo craniano e perda de consciência. A paciente chega à UPA com Glasgow 13 e é submetida à radiografia de crânio, que revela ausência de fraturas.\n\nNa sequência, é encaminhada para serviço de trauma de referência, porém, durante o trajeto, duas horas após o trauma, evolui com rebaixamento do nível de consciência.\n\nApós avaliação inicial no serviço de trauma, a paciente é submetida à tomografia de crânio, mostrada a seguir.\n\nQual é a conduta imediata nesse caso?",
    "options": [
      "(A) Aspiração de hematoma subdural agudo.",
      "(B) Drenagem de hematoma extradural.",
      "(C) Observação e suporte clínico em UTI.",
      "(D) Monitorização invasiva da pressão intracraniana."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem com TCE após queda, perda de consciência inicial, chegada com Glasgow 13 e piora do nível de consciência cerca de 2 horas depois. A tomografia mostra coleção extra-axial hiperdensa em forma de lente biconvexa: hematoma extradural (epidural). O sangue fica entre o osso e a dura-máter, em geral por lesão da artéria meníngea média (muitas vezes com fratura do osso temporal), e a dura aderida às suturas limita a expansão, dando o formato de lente. O padrão clássico é perda de consciência, intervalo lúcido e nova deterioração à medida que o hematoma cresce. Com piora neurológica, o tratamento é a drenagem neurocirúrgica de urgência (craniotomia).\n\nRoteiro do TCE:\n\n• Gravidade pelo Glasgow: leve 13–15, moderado 9–12, grave 3–8 (grave = proteger a via aérea com intubação).\n• Exame de imagem: tomografia de crânio sem contraste. Radiografia de crânio não tem papel — não exclui lesão intracraniana, como mostra o caso.\n• Hematoma extradural: lente biconvexa, não cruza suturas; intervalo lúcido em cerca de 1/3 dos casos. Cirurgia se volume > 30 mL (independentemente do Glasgow), ou Glasgow < 9 com anisocoria; casos pequenos (< 30 mL, < 15 mm, desvio < 5 mm, Glasgow > 8, sem déficit) podem ser observados com tomografias seriadas.\n• Hematoma subdural agudo: meia-lua (crescente), cruza suturas, por rotura de veias-ponte; idosos, alcoolistas e anticoagulados. Cirurgia se espessura > 10 mm ou desvio da linha média > 5 mm.\n• Hemorragia subaracnóidea traumática, contusões e lesão axonal difusa (coma desproporcional à tomografia quase normal).\n• Hipertensão intracraniana: cabeceira a 30°, sedação e analgesia, normocapnia, salina hipertônica ou manitol; monitorização da PIC em TCE grave com tomografia alterada.\n• Herniação: anisocoria (midríase do lado da lesão), hemiparesia contralateral e tríade de Cushing (hipertensão, bradicardia, alteração respiratória).",
    "commentary": "Alternativa (A): a imagem não é de hematoma subdural (que tem forma de meia-lua e cruza suturas), e \"aspiração\" não é a técnica para hematoma agudo coagulado — o subdural agudo cirúrgico também se trata por craniotomia.\n\nAlternativa (C): observação em UTI só cabe em hematoma extradural pequeno, em paciente estável e sem déficit; aqui houve piora do nível de consciência, sinal de efeito de massa progressivo.\n\nAlternativa (D): monitorizar a PIC mede a pressão, mas não remove a causa. Diante de massa cirúrgica com deterioração, a conduta é drenar; a monitorização pode complementar depois.",
    "tip": "TCE + intervalo lúcido + lente biconvexa na tomografia = hematoma extradural (artéria meníngea média): drenagem cirúrgica de urgência. Meia-lua = subdural (veias-ponte).",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018. Bullock MR et al. Guidelines for the Surgical Management of Traumatic Brain Injury. Neurosurgery, 2006.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ],
    "image": "/images/sugenamed1-31.webp"
  },
  {
    "id": "sug-enamed1-32",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos, casada, primigesta, IG 8 semanas e 4 dias, comparece a uma Unidade Básica de Saúde devido a sangramento vaginal volumoso iniciado nesta manhã e dor pélvica de moderada intensidade.\n\nAo exame físico, encontra-se hemodinamicamente estável, com abdome doloroso à palpação, sem sinais de irritação peritoneal. Ao exame ginecológico, observa-se colo uterino dilatado, com sangramento ativo, sem eliminação de produtos da concepção.\n\nQual é o diagnóstico principal nesse caso?",
    "options": [
      "(A) Ameaça de abortamento.",
      "(B) Abortamento inevitável.",
      "(C) Abortamento completo.",
      "(D) Abortamento retido."
    ],
    "correctAnswer": 1,
    "explanation": "Gestante de 8 semanas com sangramento volumoso, cólica e colo uterino dilatado, sem eliminação de restos ovulares até o momento: abortamento inevitável. O dado que define é o colo aberto — a gestação não tem mais como evoluir, e a expulsão está em curso. A paciente está estável, então a conduta é o esvaziamento uterino (aspiração manual intrauterina, misoprostol ou curetagem), com analgesia e imunoglobulina anti-D se for Rh negativo.\n\nFormas clínicas do abortamento:\n\n• Ameaça de abortamento: sangramento leve, colo fechado, embrião vivo na ultrassonografia. Conduta: analgesia, repouso relativo, orientação; a maioria evolui bem.\n• Abortamento inevitável (em curso): sangramento abundante, cólicas, colo aberto, ainda sem eliminação completa. Conduta: esvaziamento uterino.\n• Abortamento incompleto: houve eliminação parcial; colo aberto e restos na cavidade (endométrio espesso, > 15 mm). Conduta: aspiração manual intrauterina (preferida até 12 semanas), misoprostol ou curetagem.\n• Abortamento completo: tudo foi eliminado; o sangramento e a dor diminuem, o colo se fecha e o endométrio fica fino (< 15 mm). Conduta: expectante.\n• Abortamento retido: embrião morto (sem batimentos com comprimento cabeça-nádega ≥ 7 mm) ou saco ≥ 25 mm sem embrião (anembrionada), colo fechado, sem expulsão. Conduta: misoprostol ou aspiração.\n• Abortamento infectado: febre, dor, secreção com odor fétido, após manipulação. Conduta: antibiótico de amplo espectro e esvaziamento.\n• Abortamento de repetição: 3 ou mais perdas consecutivas (alguns consideram 2) — investigar trombofilias (síndrome antifosfolípide), alterações uterinas, cromossômicas e endócrinas.",
    "commentary": "Alternativa (A): na ameaça de abortamento o colo está fechado e o sangramento costuma ser discreto; o colo aberto já indica que a perda é inevitável.\n\nAlternativa (C): no abortamento completo todo o conteúdo já foi expulso, o colo volta a se fechar e o sangramento diminui — o oposto do sangramento ativo com colo dilatado.\n\nAlternativa (D): no abortamento retido o embrião morreu, mas fica dentro do útero, com colo fechado e pouco ou nenhum sangramento.\n\nEstabilidade hemodinâmica não significa ausência de gravidade: sangramento volumoso pede acesso venoso, hemograma, tipagem e esvaziamento sem demora.",
    "tip": "Abortamento: olhe o colo. Fechado = ameaça, completo ou retido. Aberto = inevitável ou incompleto. Inevitável: colo aberto sem eliminação ainda; incompleto: já eliminou parte.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Abortamento espontâneo: classificação, diagnóstico e conduta, 2021. Brasil. Ministério da Saúde. Atenção humanizada ao abortamento: norma técnica. 2ª ed., 2011.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-33",
    "topography": "10",
    "topic": "Raiva",
    "module": "Clínica Médica",
    "text": "Homem de 23 anos, previamente hígido, procura atendimento em Unidade Básica de Saúde relatando que, há cerca de duas horas, foi mordido por um gato de rua, que fugiu em seguida.\n\nA mordida resultou em ferimentos com pequenas lacerações nos dedos da mão. O paciente nega episódios anteriores de agressões desse tipo. Na cidade, no ano anterior, houve a confirmação de raiva em felinos.\n\nAlém da higienização da ferida e dos cuidados necessários para evitar suturas no ferimento, a conduta adequada nesse caso é:",
    "options": [
      "(A) Vacina antirrábica e soro antirrábico.",
      "(B) Vacina antirrábica e imunoglobulina.",
      "(C) Imunoglobulina antirrábica e soro antirrábico.",
      "(D) Vacina antirrábica e contraindicação de soro antirrábico."
    ],
    "correctAnswer": 0,
    "explanation": "Mordedura por gato de rua que fugiu (animal não observável), com ferimentos lacerados nos dedos, em cidade com raiva confirmada em felinos no ano anterior. Pela classificação do Ministério da Saúde, ferimentos em mãos, pés, face, cabeça e pescoço, ou profundos, múltiplos ou extensos, são acidentes GRAVES — essas regiões têm muita inervação e o vírus chega mais rápido ao sistema nervoso. Acidente grave com animal que não pode ser observado indica vacina (imunização ativa) + soro (imunização passiva, infiltrada na ferida). No Brasil, a imunização passiva de escolha é o soro antirrábico heterólogo; a imunoglobulina humana antirrábica fica para quem tem contraindicação ao soro.\n\nProfilaxia antirrábica pós-exposição (Ministério da Saúde):\n\n• Lavar imediatamente a ferida com água corrente e sabão — a medida isolada mais importante. Não suturar (se inevitável, aproximar e infiltrar o soro antes). Avaliar antitetânica e antibiótico (amoxicilina-clavulanato em mordedura de gato, com alto risco de infecção).\n• Acidente leve: ferimento superficial e pouco extenso em tronco ou membros (exceto mãos e pés), lambedura de pele com lesão superficial.\n• Acidente grave: mãos, pés, face, cabeça, pescoço; ferimentos profundos, múltiplos ou extensos; lambedura de mucosas ou de lesão profunda.\n• Cão ou gato observável por 10 dias: em geral, observar o animal (sem vacina no acidente leve; no grave, iniciar vacina e suspender se o animal continuar sadio).\n• Cão ou gato não observável, suspeito ou raivoso: acidente leve → vacina; acidente grave → vacina + soro.\n• Morcegos e outros mamíferos silvestres (inclusive domiciliados), primatas: sempre acidente grave → vacina + soro.\n• Esquema da vacina: 4 doses intramusculares (dias 0, 3, 7 e 14) ou esquema intradérmico. Soro: dose única, o máximo possível infiltrado ao redor das lesões, até 7 dias após a 1ª dose de vacina.",
    "commentary": "Alternativa (B): vacina + imunoglobulina humana também é profilaxia completa e eficaz, por isso é aceita como certa aqui. Pela norma do Ministério da Saúde, porém, a imunoglobulina é reservada a quem tem hipersensibilidade ao soro heterólogo, uso prévio de imunoglobulinas de origem equina ou contato frequente com animais — o soro é a primeira escolha.\n\nAlternativa (C): soro e imunoglobulina são duas formas da mesma imunização passiva; usar as duas juntas é duplicidade, e a falta da vacina deixa o paciente sem proteção duradoura.\n\nAlternativa (D): dispensar o soro em acidente grave com gato não observável em área com raiva felina recente é erro: a imunização passiva cobre o período até a vacina gerar anticorpos (cerca de 7 a 14 dias).",
    "tip": "Mãos, pés, face, cabeça, pescoço, ferimento profundo ou múltiplo = acidente grave. Grave + animal não observável = vacina + soro (soro heterólogo é 1ª escolha no Brasil). Lave com água e sabão e não suture.",
    "reference": "Brasil. Ministério da Saúde. Protocolo de profilaxia pré, pós e reexposição da raiva humana no Brasil, 2022. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alsoAccepted": [
      1
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação por duplicidade): A e B estão corretas, e as duas contam como acerto aqui. Duas alternativas descrevem modalidades aceitas de profilaxia passiva; verificar eventual critério de disponibilidade não informado no enunciado."
  },
  {
    "id": "sug-enamed1-34",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Em um município de médio porte, a ocorrência de chuvas intensas desencadeou o aumento dos casos de doenças de transmissão hídrica e alimentar (DTHA). As regiões periféricas foram as mais afetadas: pessoas ficaram desalojadas e foram remanejadas para abrigos temporários; e grande parte dos imóveis ficou sem abastecimento de energia e água potável.\n\nAs equipes de saúde mantiveram os atendimentos de rotina, porém houve um aumento significativo dos casos de doenças diarreicas agudas que chegam ao serviço de saúde como demanda espontânea.\n\nNesse contexto de alerta dos serviços de saúde, o setor de vigilância epidemiológica do Ministério da Saúde deve, prioritariamente:",
    "options": [
      "(A) Promover articulação com a Secretaria de Saúde local para estabelecimento de fluxos de informação entre as esferas.",
      "(B) Ordenar a suspensão de consultas de rotina para garantir o atendimento na modalidade de acesso avançado dos usuários afetados.",
      "(C) Recomendar o uso de Hipoclorito de Sódio a 2,5% para desinfecção das superfícies nos abrigos temporários das populações.",
      "(D) Disponibilizar laboratórios móveis para análise qualitativa da água destinada ao consumo humano."
    ],
    "correctAnswer": 0,
    "explanation": "O desastre (chuvas intensas, desalojados em abrigos, falta de água potável e energia) elevou os casos de doenças de transmissão hídrica e alimentar. A pergunta é sobre o papel da vigilância epidemiológica do MINISTÉRIO DA SAÚDE — a esfera federal. No SUS, a execução das ações (atender, investigar, coletar água, desinfetar abrigos) é municipal; à União cabe coordenar o sistema nacional, apoiar tecnicamente e articular as três esferas. Por isso a ação prioritária do Ministério é se articular com a secretaria local para estabelecer fluxos de informação entre município, estado e União, que permitem dimensionar o evento e direcionar a resposta.\n\nVigilância em saúde em emergências:\n\n• Município: executa — notificação, investigação dos surtos, assistência, coleta de amostras, ações nos abrigos.\n• Estado: apoia e coordena os municípios, laboratório central (LACEN), investigação de maior complexidade.\n• União (Ministério da Saúde): normatiza, coordena o sistema nacional, apoio técnico e logístico; CIEVS (Centro de Informações Estratégicas em Vigilância em Saúde) para detecção e resposta; Força Nacional do SUS; pode declarar Emergência em Saúde Pública de Importância Nacional (ESPIN).\n• Surto de DTHA: dois ou mais casos com quadro semelhante após exposição comum (alimento ou água). É de notificação imediata.\n• Vigilância ambiental (VIGIAGUA): qualidade da água para consumo humano — orientar hipoclorito para tratar a água no domicílio (2 gotas de hipoclorito 2,5% por litro, 30 minutos de espera).\n• Atenção primária: manter o atendimento, com reorganização da agenda para a demanda espontânea; reidratação oral e identificação de sinais de gravidade.",
    "commentary": "Alternativa (B): o Ministério da Saúde não gerencia agendas de unidades básicas — isso é do município. E suspender todas as consultas de rotina é medida desproporcional: gestantes, crianças e doentes crônicos continuam precisando de cuidado; o caminho é reorganizar a agenda para absorver a demanda.\n\nAlternativa (C): desinfecção de superfícies nos abrigos é ação operacional local, de execução municipal (e não é atribuição da vigilância epidemiológica federal); além disso, a prioridade em DTHA é a água para consumo e o manejo de alimentos.\n\nAlternativa (D): análise da água para consumo é relevante, mas cabe à vigilância ambiental (VIGIAGUA), executada pelo município com apoio do LACEN; não é a ação prioritária da vigilância epidemiológica do Ministério.",
    "tip": "Na vigilância, a esfera muda a resposta: município executa, estado apoia e coordena regionalmente, União normatiza, coordena e articula fluxos de informação (CIEVS).",
    "reference": "Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024 (capítulo Doenças de transmissão hídrica e alimentar). Brasil. Lei nº 8.080/1990.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-35",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Saúde Coletiva",
    "text": "Homem de 28 anos é levado por sua mãe à emergência de um hospital após ser encontrado inconsciente em sua residência. O rapaz estava em casa, sob vigilância de familiares, por apresentar transtorno depressivo maior com pensamentos de morte.\n\nApós realização de protocolo de ressuscitação, sem sucesso, foi constatado óbito. Na recepção do hospital, os pais e os irmãos aguardam informações, preocupados e impacientes, e interpelam o médico assim que ele surge.\n\nDiante dessa situação, ao comunicar o óbito aos familiares, o médico deve:",
    "options": [
      "(A) Levar todos a um local reservado; demonstrar empatia pelas recordações apresentadas; e oferecer-lhes a prescrição de benzodiazepínico, frente ao alto risco de desenvolvimento de sintomas ansiosos durante o período de luto.",
      "(B) Dialogar cuidadosa e honestamente com os familiares o quanto antes, na recepção; validar o sentimento de culpa que eles possam ter; e tranquilizá-los sobre os alertas que o rapaz pode ter emitido e passaram despercebidos pela família.",
      "(C) Manter comunicação acolhedora na primeira oportunidade, na recepção; demonstrar empatia pelo sentimento de tristeza que possam ter; e comunicar o óbito, fornecendo detalhes de todo o prontuário e histórico pregressos, para diminuir o sofrimento da família.",
      "(D) Disponibilizar local reservado para o diálogo; explorar o que os familiares sabem sobre a situação; acolher as emoções que surgirem; e ofertar encaminhamento a serviços de saúde, em caso de sofrimento psíquico decorrente do luto."
    ],
    "correctAnswer": 3,
    "explanation": "Comunicar um óbito — ainda mais uma morte inesperada, possivelmente por suicídio — é um procedimento médico com técnica. A alternativa D reúne os passos do protocolo SPIKES: lugar reservado, explorar o que a família já sabe, acolher as emoções e oferecer apoio e seguimento. Em mortes por suicídio, a família tem risco maior de luto complicado, depressão e até suicídio: ofertar encaminhamento faz parte da posvenção (cuidado dos enlutados).\n\nProtocolo SPIKES para más notícias:\n\n• S — Setting (ambiente): lugar reservado, todos sentados, sem interrupções (celular silenciado), presença das pessoas que a família quiser; apresentar-se e confirmar quem são os familiares.\n• P — Perception (percepção): perguntar o que já sabem sobre o que aconteceu.\n• I — Invitation (convite): avaliar o quanto querem saber naquele momento.\n• K — Knowledge (conhecimento): dar a notícia de forma clara, com frase de aviso antes (\"infelizmente, tenho uma notícia difícil\"), usando a palavra \"morreu\" ou \"faleceu\", sem eufemismos nem termos técnicos.\n• E — Emotions (emoções): silêncio, acolher choro, raiva ou culpa com respostas empáticas; não minimizar nem julgar.\n• S — Strategy and Summary (estratégia e resumo): explicar os próximos passos e oferecer apoio.\n\nNa prática, após o óbito: permitir que a família veja o corpo; explicar os trâmites — morte violenta ou suspeita (incluindo suicídio) vai para o IML, e a declaração de óbito é emitida pelo médico legista, não pelo médico do hospital; manter o sigilo das informações clínicas do paciente.",
    "commentary": "Alternativa (A): começa bem (local reservado, empatia), mas oferece benzodiazepínico de rotina. O luto é processo normal; benzodiazepínico não previne luto complicado, pode atrasar a elaboração e traz risco de dependência e de intoxicação — risco relevante em família enlutada por suicídio.\n\nAlternativa (B): comunicar na recepção, diante de outras pessoas, viola a privacidade. E \"tranquilizar\" sobre os sinais que passaram despercebidos é promessa que o médico não pode fazer; o caminho é acolher a culpa, sem negá-la nem reforçá-la.\n\nAlternativa (C): além do local inadequado, expor todo o prontuário e o histórico pregresso não diminui o sofrimento e pode violar o sigilo médico, que se mantém após a morte. A informação deve ser a necessária, no ritmo da família.",
    "tip": "Má notícia = SPIKES: lugar reservado, o que sabem, quanto querem saber, notícia clara (\"morreu\"), acolher emoções, próximos passos. Benzodiazepínico não é cuidado de luto.",
    "reference": "Baile WF et al. SPIKES — A six-step protocol for delivering bad news. Oncologist, 2000. Brasil. Ministério da Saúde. Manual de instruções para o preenchimento da declaração de óbito, 2022.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-36",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Clínica Médica",
    "text": "Homem de 27 anos comparece à consulta em Unidade Básica de Saúde com queixa de mal-estar, diminuição do apetite, inchaço em tornozelos e edema periorbital à noite, iniciados há 1 semana. Refere astenia e urina espumosa. Nega antecedentes pessoais e familiares de hipertensão, diabetes mellitus e doença renal.\n\nAo exame físico: PA 180 × 110 mmHg; edema em ambos os tornozelos, com cacifo presente.\n\nDurante a consulta, são solicitados exames complementares e agendado retorno em duas semanas.\n\nApós 15 dias, o paciente retorna com os resultados dos exames. Urina tipo I sem hematúria microscópica, com proteína 3+; bioquímica sérica com triglicerídeos, colesterol total e LDL elevados; eletroforese de proteínas com níveis de albumina séricos diminuídos; ultrassonografia de abdome com imagem sugestiva de ascite.\n\nQual é o diagnóstico provável desse paciente?",
    "options": [
      "(A) Síndrome nefrítica.",
      "(B) Síndrome nefrótica.",
      "(C) Nefropatia secundária à hipertensão.",
      "(D) Necrose tubular aguda."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem com edema que começou pelos olhos e tornozelos, urina espumosa, proteinúria 3+ sem hematúria, albumina baixa, colesterol e triglicerídeos altos e ascite: síndrome nefrótica. A lesão da barreira de filtração glomerular deixa passar grande quantidade de albumina (urina espumosa); a queda da albumina reduz a pressão oncótica e causa edema e ascite; o fígado compensa produzindo mais lipoproteínas, daí a dislipidemia. A hipertensão pode ocorrer em algumas causas (como a glomeruloesclerose segmentar e focal), mas o que define o quadro é a tríade proteinúria maciça + hipoalbuminemia + edema.\n\nSíndrome nefrótica × nefrítica:\n\n• Nefrótica: proteinúria > 3,5 g/24 h (ou relação proteína/creatinina > 3,5 g/g) no adulto, hipoalbuminemia (< 3,5 g/dL), edema, dislipidemia e lipidúria; sedimento pobre (pouca ou nenhuma hematúria).\n• Nefrítica: hematúria dismórfica com cilindros hemáticos, hipertensão, oligúria, edema e proteinúria < 3,5 g/24 h; ex.: glomerulonefrite pós-estreptocócica, nefropatia por IgA, lúpus.\n\nCausas de síndrome nefrótica:\n\n• Primárias: glomeruloesclerose segmentar e focal (causa mais comum em adultos no Brasil), nefropatia membranosa (anticorpo anti-PLA2R; a mais associada a trombose de veia renal), doença de lesão mínima (a principal em crianças).\n• Secundárias: diabetes, amiloidose, lúpus (classe V), hepatites B e C, HIV, sífilis, neoplasias, medicamentos (AINE).\n\nComplicações e tratamento:\n\n• Complicações: tromboembolismo (perda de antitrombina III), infecções (perda de imunoglobulinas — peritonite pneumocócica), dislipidemia, desnutrição, lesão renal aguda.\n• Medidas gerais: restrição de sal, diurético de alça, IECA ou BRA (reduz a proteinúria), estatina, anticoagulação em casos selecionados (albumina muito baixa, sobretudo na membranosa).\n• No adulto, a biópsia renal define a doença de base e o tratamento específico (corticoide, imunossupressores).",
    "commentary": "Alternativa (A): a síndrome nefrítica tem hematúria como achado central, com cilindros hemáticos e oligúria; a urina deste paciente não tem hematúria, e a hipoalbuminemia com dislipidemia e ascite aponta para nefrótica.\n\nAlternativa (C): a nefropatia hipertensiva evolui lentamente, ao longo de anos, com proteinúria discreta e rins diminuídos; não causa edema agudo com hipoalbuminemia e ascite em 1 semana num jovem sem história de hipertensão.\n\nAlternativa (D): a necrose tubular aguda é causa de lesão renal aguda (isquemia, sepse, nefrotóxicos), com cilindros granulosos (\"marrom-lama\") e queda da função renal; não produz proteinúria maciça, hipoalbuminemia e dislipidemia.\n\nA pressão de 180 × 110 mmHg precisa de controle e de avaliação de lesão de órgão-alvo.",
    "tip": "Urina espumosa + edema + hipoalbuminemia + dislipidemia = síndrome nefrótica (proteinúria > 3,5 g/dia). Hematúria + hipertensão + oligúria = nefrítica. Adulto nefrótico = biópsia renal.",
    "reference": "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int, 2021. Sociedade Brasileira de Nefrologia — Diretrizes de glomerulopatias.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-37",
    "topography": "15",
    "topic": "Saúde da criança",
    "module": "Pediatria",
    "text": "Lactente de 2 meses, previamente hígido, foi encontrado sem vida pelos pais, na mesma cama em que dormia com eles. Os pais não têm histórico de comorbidades. A análise completa post-mortem e a revisão detalhada das circunstâncias do óbito não detectaram nenhum sinal patológico interno ou externo que justificasse o ocorrido.\n\nNo que diz respeito à epidemiologia e fisiopatologia, nessa situação, a causa do óbito é compatível com:",
    "options": [
      "(A) Depressão respiratória por broncoaspiração.",
      "(B) Síndrome da morte súbita do lactente.",
      "(C) Falência das vias aéreas por asfixia mecânica.",
      "(D) Síndrome do QT longo devido à cardiopatia congênita."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 2 meses encontrado morto durante o sono, com autópsia completa, análise da cena do óbito e revisão da história sem nenhuma causa identificada: é exatamente a definição de síndrome da morte súbita do lactente (SMSL) — morte súbita e inesperada de menor de 1 ano durante o sono, que permanece sem explicação após investigação completa. O pico ocorre entre 2 e 4 meses, e 90% dos casos acontecem antes dos 6 meses. A teoria mais aceita é a do triplo risco: lactente vulnerável (alteração no controle do despertar e da respiração no tronco cerebral) + período crítico do desenvolvimento + estressor externo (posição prona, superaquecimento, cama compartilhada).\n\nFatores de risco e proteção:\n\n• Risco: dormir de bruços ou de lado; superfície macia, travesseiros, protetores de berço, cobertores e brinquedos; cama compartilhada com adultos (sobretudo se os pais fumam, bebem ou usam sedativos, ou em sofá); superaquecimento; tabagismo na gestação e exposição ao fumo; prematuridade, baixo peso, sexo masculino; mãe jovem e pré-natal inadequado.\n• Proteção: dormir de barriga para cima (campanha \"Back to Sleep\"/\"Dormir de barriga para cima\", que reduziu os casos em mais de 50%); berço com colchão firme e sem objetos; dormir no quarto dos pais, mas em berço próprio, até pelo menos 6 meses; aleitamento materno; chupeta na hora de dormir (depois de o aleitamento estar estabelecido); vacinação em dia; evitar fumo.\n\nTerminologia: morte súbita inesperada do lactente é o termo amplo; após a investigação, ela é atribuída a uma causa (asfixia, infecção, arritmia, maus-tratos) ou, se nada for encontrado, classificada como SMSL — um diagnóstico de exclusão.",
    "commentary": "Alternativa (A): a broncoaspiração deixaria sinais na autópsia (conteúdo gástrico nas vias aéreas, pneumonite); a investigação foi negativa. Lactente dormindo de costas não tem mais risco de aspiração — esse medo é um dos mitos que atrasam a adoção da posição supina.\n\nAlternativa (C): a asfixia mecânica (sufocação pelo corpo de um adulto ou por roupa de cama) é uma causa de morte súbita inesperada que precisa ser demonstrada pela cena e pela autópsia. A cama compartilhada aumenta o risco, mas, sem achados que comprovem asfixia, o óbito não pode ser atribuído a ela.\n\nAlternativa (D): a síndrome do QT longo é canalopatia, em geral genética, sem alteração estrutural do coração — não é \"devida a cardiopatia congênita\". Pode explicar uma parte das mortes súbitas, mas não foi demonstrada.",
    "tip": "Morte de lactente < 1 ano durante o sono, com autópsia e cena sem causa = SMSL (pico 2–4 meses). Prevenção: de barriga para cima, berço firme e vazio, no quarto dos pais sem dividir a cama, aleitamento, sem fumo.",
    "reference": "Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022. Sociedade Brasileira de Pediatria. Documento científico — Síndrome da morte súbita do lactente.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-38",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, com 70 kg, vítima de queimadura durante realização de churrasco em família, é levado para atendimento de emergência.\n\nO médico que o avalia inicialmente identifica áreas de queimaduras avermelhadas, edemaciadas e bolhas em tronco anterior, membros superiores anterior e posterior bilateral (inclusive palma da mão direita e dedos) e face anterior do membro inferior direito.\n\nQual é a forma correta de administração de ringer lactato nesse paciente?",
    "options": [
      "(A) 5.040 mL em 8 horas.",
      "(B) 9.450 mL em 24 horas.",
      "(C) 6.300 mL em 24 horas.",
      "(D) 2.520 mL em 8 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Bolhas, vermelhidão e edema = queimadura de 2º grau (espessura parcial), que entra no cálculo da superfície corporal queimada (SCQ); queimadura só com eritema (1º grau) não entra. Pela regra dos nove do adulto: tronco anterior 18% + membros superiores inteiros, faces anterior e posterior, dos dois lados (9% cada = 18%) + face anterior do membro inferior direito 9% = 45% da SCQ. A mão e a palma estão dentro dos 9% de cada membro superior.\n\nReposição volêmica (ATLS 10ª ed. e American Burn Association): para adulto com queimadura térmica, iniciar com Ringer lactato 2 mL × peso (kg) × %SCQ nas primeiras 24 horas: 2 × 70 × 45 = 6.300 mL. Metade (3.150 mL) nas primeiras 8 horas, contadas a partir do momento da queimadura, e a outra metade nas 16 horas seguintes. O volume é ponto de partida: ajustar pela diurese.\n\nRoteiro do grande queimado:\n\n• Profundidade: 1º grau (epiderme — eritema e dor, não entra na conta); 2º grau superficial (bolhas, leito rosado, muita dor); 2º grau profundo (leito pálido, menos dor); 3º grau (couro, branco ou marrom, indolor, exige enxerto).\n• Regra dos nove no adulto: cabeça e pescoço 9%, cada membro superior 9%, tronco anterior 18%, tronco posterior 18%, cada membro inferior 18% (9% anterior e 9% posterior), períneo 1%. A palma do paciente (com dedos) vale cerca de 1% — útil em queimaduras irregulares. Em crianças, usar a tabela de Lund-Browder (cabeça proporcionalmente maior).\n• Fórmulas: 2 mL/kg/%SCQ em adultos; 3 mL/kg/%SCQ em crianças (com soro glicosado de manutenção nas menores); 4 mL/kg/%SCQ em queimaduras elétricas. A fórmula clássica de Parkland usava 4 mL/kg/%SCQ para todos, o que levava a excesso de volume.\n• Monitorização: diurese alvo de 0,5 mL/kg/h no adulto (30–50 mL/h), 1 mL/kg/h em crianças < 30 kg e 1–1,5 mL/kg/h em queimadura elétrica.\n• Via aérea: intubação precoce se queimadura de face, vibrissas queimadas, escarro carbonáceo, rouquidão, estridor ou queimadura em ambiente fechado.\n• Encaminhar a centro de queimados: > 10% de SCQ de espessura parcial, 3º grau, face, mãos, pés, genitais, períneo e grandes articulações, queimaduras elétricas e químicas, lesão inalatória.",
    "commentary": "Alternativa (A): 5.040 mL em 8 horas corresponde à fórmula de 4 mL/kg aplicada a 36% de SCQ (4 × 70 × 36 = 10.080 mL, metade em 8 h) — erro de área (não somou a face posterior dos membros superiores ou o membro inferior) e uso da Parkland antiga.\n\nAlternativa (B): 9.450 mL em 24 horas equivale a 3 mL/kg/%SCQ (3 × 70 × 45), fórmula de crianças; no adulto, superestima o volume e aumenta o risco de síndrome compartimental abdominal e edema pulmonar.\n\nAlternativa (D): 2.520 mL em 8 horas corresponde a 2 mL/kg aplicados a 36% (5.040 mL em 24 h, metade em 8 h) — subestima a área queimada.\n\nAtenção: com a fórmula de Parkland (4 mL/kg/%SCQ), o total seria 12.600 mL (6.300 mL nas primeiras 8 h); essa opção não existe, o que confirma que a banca usou 2 mL/kg/%SCQ.",
    "tip": "Adulto queimado: Ringer lactato 2 mL × kg × %SCQ (só 2º e 3º graus) em 24 h, metade nas primeiras 8 h desde a queimadura; criança 3 mL; elétrica 4 mL. Ajuste pela diurese (0,5 mL/kg/h no adulto).",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Lesões térmicas). American Burn Association. Clinical Practice Guideline on Burn Shock Resuscitation, 2024. Brasil. Ministério da Saúde. Cartilha para tratamento de emergência das queimaduras, 2012.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-39",
    "topography": "5.2",
    "topic": "Idade gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 25 anos, primigesta, sem comorbidades e assintomática, com idade gestacional de 41 semanas e 5 dias, datada pela primeira ultrassonografia feita na 9ª semana, encontra-se internada na maternidade de um hospital. O pré-natal foi realizado de forma adequada e sem intercorrências.\n\nDurante a avaliação clínica e obstétrica, foram obtidos os seguintes dados:\n\n• Pressão arterial: 110 × 60 mmHg\n• Batimentos cardíacos fetais: 140 bpm\n• Movimentação fetal: Presente\n• Fundo uterino: Compatível com a idade gestacional\n• Atividade uterina: Ausente\n• Estática fetal: Feto em situação longitudinal, com dorso à direita e apresentação cefálica\n• Exame especular: Sem evidência de perda de líquido amniótico\n• Toque vaginal: Colo uterino posterior, firme, fechado, com apagamento de 30%\n• Perfil biofísico fetal simplificado: Cardiotocografia com padrão reativo; volume de líquido amniótico normal\n\nQual é a conduta para esse caso clínico?",
    "options": [
      "(A) Expectante.",
      "(B) Amniotomia.",
      "(C) Maturação cervical.",
      "(D) Cesariana eletiva."
    ],
    "correctAnswer": 2,
    "explanation": "Gestação de 41 semanas e 5 dias, bem datada por ultrassonografia de 1º trimestre, sem trabalho de parto, com vitalidade fetal tranquilizadora e apresentação cefálica. A partir de 41 semanas, o risco de óbito fetal, síndrome de aspiração meconial e insuficiência placentária aumenta, e a recomendação é induzir o parto (até 42 semanas). Como o colo está desfavorável — posterior, firme, fechado, apagado 30% (índice de Bishop baixo) —, a indução começa pela maturação (preparo) cervical, e não por ocitocina ou amniotomia.\n\nRoteiro da gestação prolongada e da indução:\n\n• Definições: termo precoce 37–38 6/7; termo completo 39–40 6/7; termo tardio 41–41 6/7; pós-termo ≥ 42 semanas. A datação confiável é a do 1º trimestre.\n• A partir de 40–41 semanas: vigilância da vitalidade (cardiotocografia e volume de líquido amniótico, 2 vezes por semana) e oferta de descolamento de membranas.\n• Indução: recomendada a partir de 41 semanas, antes de 42; vitalidade alterada ou oligoâmnio indicam resolução imediata.\n• Índice de Bishop (dilatação, apagamento, altura da apresentação, consistência e posição do colo): ≤ 6 = colo desfavorável → maturação cervical; > 6 (ou ≥ 8) = colo favorável → ocitocina e amniotomia.\n• Maturação cervical: misoprostol 25 µg via vaginal a cada 6 horas (contraindicado com cicatriz uterina) ou métodos mecânicos (sonda de Foley intracervical).\n• Contraindicações à indução: as mesmas do parto vaginal (placenta prévia, apresentação anômala, vasa prévia, herpes ativo, cicatriz uterina corporal).\n• Cesariana: só com indicação obstétrica; gestação prolongada por si só não é indicação.",
    "commentary": "Alternativa (A): manter conduta expectante após 41 semanas expõe o feto ao risco crescente de insuficiência placentária e óbito; a recomendação é induzir antes de 42 semanas.\n\nAlternativa (B): a amniotomia exige colo dilatado e apresentação insinuada; com colo fechado e posterior, é tecnicamente inviável e aumentaria o risco de prolapso de cordão e infecção.\n\nAlternativa (D): gestação prolongada, com feto cefálico e bem, não é indicação de cesariana. A indução com colo desfavorável não aumenta a taxa de cesárea em relação à conduta expectante.",
    "tip": "41 semanas = induzir antes de 42. Bishop ≤ 6 = maturar o colo (misoprostol ou Foley); Bishop favorável = ocitocina e amniotomia. Cesariana só com indicação obstétrica.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Gestação prolongada e indução do trabalho de parto, 2021. ACOG Practice Bulletin nº 146: Management of Late-Term and Postterm Pregnancies.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-40",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Clínica Médica",
    "text": "Mulher de 40 anos, professora do ensino fundamental, procura Unidade Básica de Saúde para mostrar os resultados de exames realizados por conta própria em função de tristeza após perda do marido há três semanas. Não apresenta outros sintomas, e o exame físico está inalterado. Nega uso de medicamentos e de suplementos.\n\nOs resultados dos exames são os seguintes:\n\n• TSH: 7,10 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• T4 livre: 1,20 ng/dL (VR: 0,92 a 1,68 ng/dL)\n• Anti-TPO: 14 UI/mL (VR: Até 34 UI/mL)\n\nQual é a conduta adequada nesse caso?",
    "options": [
      "(A) Introdução de levotiroxina.",
      "(B) Investigação da tireoide por imagem.",
      "(C) Reavaliação clínica periódica.",
      "(D) Prescrição de sertralina."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 40 anos sem sintomas tireoidianos, com TSH 7,10 mUI/L, T4 livre normal e anti-TPO negativo: hipotireoidismo subclínico leve (TSH entre o limite superior e 10). O primeiro passo é confirmar: repetir TSH e T4 livre em 2 a 3 meses, porque o TSH pode subir de forma transitória (recuperação de doença aguda, estresse, variação laboratorial) e voltar ao normal em boa parte dos casos. Sem anti-TPO positivo, sem bócio, sem desejo de engravidar e com TSH < 10, a conduta é reavaliação clínica e laboratorial periódica, sem levotiroxina. A tristeza de 3 semanas após a morte do marido é luto, não um quadro tireoidiano nem depressão maior.\n\nHipotireoidismo subclínico — quando tratar:\n\n• Definição: TSH acima do valor de referência com T4 livre normal; confirmar com nova dosagem.\n• TSH ≥ 10 mUI/L: tratar com levotiroxina (maior risco de progressão e cardiovascular).\n• TSH entre o limite e 10: individualizar — considerar tratamento se houver sintomas de hipotireoidismo, anti-TPO positivo (risco de progressão de cerca de 4% ao ano), bócio, gestação ou desejo de engravidar, insuficiência cardíaca ou dislipidemia; nos demais, acompanhar com TSH a cada 6–12 meses.\n• Idosos (acima de 65–70 anos): o TSH normal sobe com a idade; em geral não tratar com TSH < 10.\n• Gestação: tratar com TSH acima do limite do trimestre, sobretudo com anti-TPO positivo.\n• Ultrassonografia de tireoide: só se houver nódulo ou bócio palpável; não é parte da investigação de disfunção.\n\nLuto × depressão: o luto normal tem tristeza em ondas, ligada ao falecido, com autoestima preservada; depressão maior tem humor deprimido persistente, culpa, desvalia, ideação suicida e prejuízo global. Nas primeiras semanas, a conduta é acolher e acompanhar.",
    "commentary": "Alternativa (A): levotiroxina não está indicada num primeiro TSH de 7,1, sem confirmação, sem sintomas, sem anti-TPO positivo e sem plano de gestação; tratar sem indicação traz risco de hipertireoidismo iatrogênico (arritmia, perda óssea).\n\nAlternativa (B): ultrassonografia de tireoide avalia estrutura (nódulos, bócio) e não acrescenta nada à disfunção hormonal quando o exame físico é normal.\n\nAlternativa (D): sertralina não está indicada para luto normal de 3 semanas; antidepressivo exige diagnóstico de episódio depressivo, com critérios de duração e intensidade.",
    "tip": "TSH alto com T4 livre normal = hipotireoidismo subclínico: repita em 2–3 meses. Trate se TSH ≥ 10, ou se 4,5–10 com sintomas, anti-TPO positivo, bócio ou gestação. Ultrassom só se houver nódulo ou bócio.",
    "reference": "Sgarbi JA et al. Consenso brasileiro para a abordagem clínica e tratamento do hipotireoidismo subclínico em adultos — SBEM. Arq Bras Endocrinol Metab, 2013. Pearce SHS et al. 2013 ETA Guideline: Management of Subclinical Hypothyroidism. Eur Thyroid J, 2013.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-41",
    "topography": "6.1",
    "topic": "Lúpus eritematoso sistêmico",
    "module": "Clínica Médica",
    "text": "Uma paciente de 29 anos é avaliada em ambulatório de referência devido a fadiga persistente, fenômeno de Raynaud e artralgias migratórias nas mãos.\n\nDurante o exame físico, observam-se edema de mãos e discreta rigidez matinal. Não há rash cutâneo, mas a paciente refere episódios de dificuldade para engolir sólidos.\n\nExames laboratoriais mostram hemograma normal, PCR moderadamente elevada e painel de autoanticorpos com os seguintes resultados:\n\n• Fator antinuclear (FAN): Positivo, padrão nuclear pontilhado grosso (1:1280)\n• Anti-RNP: Positivo, em altos títulos\n• Anti-DNA nativo: Negativo\n• Anti-Sm: Negativo\n• Anti-Scl-70: Negativo\n• Anti-Jo-1: Negativo\n\nNesse caso, o diagnóstico provável é:",
    "options": [
      "(A) Polimiosite.",
      "(B) Esclerose sistêmica.",
      "(C) Lúpus eritematoso sistêmico.",
      "(D) Doença mista do tecido conjuntivo."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher jovem com fenômeno de Raynaud, mãos edemaciadas (\"mãos inchadas\", em dedos de salsicha), artralgias, rigidez matinal e disfagia para sólidos (dismotilidade esofágica), com FAN pontilhado grosso em título alto e anti-U1-RNP isolado em altos títulos, sem anti-DNA, anti-Sm, anti-Scl-70 ou anti-Jo-1. É o perfil da doença mista do tecido conjuntivo (DMTC): síndrome de sobreposição com traços de lúpus, esclerose sistêmica e miosite, cujo marcador obrigatório é o anti-U1-RNP em título alto.\n\nCritérios diagnósticos da DMTC (Alarcón-Segovia): anti-U1-RNP em título alto + pelo menos 3 de 5 achados clínicos — edema de mãos, sinovite, miosite, fenômeno de Raynaud e esclerodactilia (sendo obrigatória a presença de miosite ou sinovite quando os 3 são edema, Raynaud e esclerodactilia). A principal causa de morte é a hipertensão arterial pulmonar, que deve ser rastreada com ecocardiograma. O tratamento é dirigido às manifestações (bloqueador de canal de cálcio para Raynaud, hidroxicloroquina e AINE para artrite, corticoide e imunossupressores para miosite ou serosite).\n\nAutoanticorpos que ajudam a separar as colagenoses:\n\n• Lúpus eritematoso sistêmico: FAN (sensível, quase sempre positivo); anti-DNA nativo (atividade e nefrite) e anti-Sm (o mais específico); anti-Ro e anti-La (lúpus cutâneo subagudo, lúpus neonatal); antifosfolípides.\n• Esclerose sistêmica: anti-Scl-70/topoisomerase I (forma difusa, doença intersticial pulmonar); anticentrômero (forma limitada/CREST, hipertensão pulmonar); anti-RNA polimerase III (crise renal esclerodérmica).\n• Miopatias inflamatórias: anti-Jo-1 e outros antissintetase (miosite + doença pulmonar intersticial + mãos de mecânico + artrite + Raynaud); anti-Mi-2 (dermatomiosite clássica); anti-MDA5 (dermatomiosite amiopática com doença pulmonar grave).\n• Síndrome de Sjögren: anti-Ro e anti-La.\n• Lúpus induzido por drogas: anti-histona (hidralazina, procainamida, isoniazida).\n• Doença mista do tecido conjuntivo: anti-U1-RNP isolado em título alto.",
    "commentary": "Alternativa (A): a polimiosite se apresenta com fraqueza muscular proximal e simétrica, CK elevada e alterações na eletroneuromiografia e biópsia; Raynaud e mãos edemaciadas não são sua marca, e o anti-Jo-1 (da síndrome antissintetase) é negativo.\n\nAlternativa (B): a esclerose sistêmica também tem Raynaud, mãos edemaciadas na fase inicial e disfagia, mas os anticorpos típicos — anti-Scl-70 ou anticentrômero — são negativos, e não há espessamento cutâneo descrito. Anti-RNP isolado em título alto aponta para a sobreposição.\n\nAlternativa (C): o lúpus tem FAN positivo, mas o anti-DNA nativo e o anti-Sm, os mais específicos, são negativos, e faltam as manifestações típicas (rash malar, fotossensibilidade, úlceras orais, serosite, nefrite, citopenias — o hemograma é normal).\n\nA DMTC pode evoluir, com o tempo, para uma colagenose definida (mais comumente esclerose sistêmica ou lúpus); o seguimento deve ser periódico.",
    "tip": "Raynaud + mãos inchadas + artrite ± miosite ± disfagia com anti-U1-RNP isolado em título alto = doença mista do tecido conjuntivo. Rastreie hipertensão pulmonar.",
    "reference": "Alarcón-Segovia D, Cardiel MH. Comparison between 3 diagnostic criteria for mixed connective tissue disease. J Rheumatol, 1989. Sociedade Brasileira de Reumatologia. Doença mista do tecido conjuntivo — cartilha e recomendações.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-42",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Menino de 15 meses, em aleitamento materno até 4 meses, é atendido em Unidade Básica de Saúde para consulta de rotina. Ao exame físico, apresenta palidez cutânea. Os exames laboratoriais revelaram os seguintes resultados:\n\n• Hemoglobina: 8,1 g/dL (VR: 10,5 a 14,2 g/dL)\n• Volume Corpuscular Médio: 66 fL (VR: 75 a 87 fL)\n• Concentração de Hemoglobina Corpuscular Média: 29 g/dL (VR: 30 a 33 g/dL)\n• Amplitude de Distribuição dos Eritrócitos (RDW): 18,5% (VR: 11,5 a 15%)\n• Plaquetas: 402.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Ferritina: 9 ng/mL (VR: 40 a 300 ng/mL)\n• Eletroforese Hemoglobina A2: 3,0% (VR: Menor que 3,5%)\n\nRDW: Red Cell Distribution Width.\n\nNesse caso, os diagnósticos diferenciais incluem:",
    "options": [
      "(A) Deficiência de ferro e de ácido fólico, além de anemia falciforme.",
      "(B) Deficiência de ferro e de B12, além de anemia de doença crônica.",
      "(C) Deficiência de ferro, talassemias e anemia sideroblástica.",
      "(D) Traço falcêmico, esferocitose hereditária e anemia ferropriva."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 15 meses, com aleitamento materno só até 4 meses (provável introdução precoce de leite de vaca), palidez e anemia microcítica e hipocrômica (Hb 8,1, VCM 66, CHCM 29), com RDW alto e ferritina muito baixa (9): anemia ferropriva, a anemia mais comum da infância, com pico entre 6 e 24 meses. A pergunta, porém, pede os diagnósticos diferenciais da anemia MICROCÍTICA: deficiência de ferro, talassemias e anemia sideroblástica (e também anemia de doença crônica e intoxicação por chumbo). Só a alternativa C reúne exclusivamente causas de microcitose.\n\nDiferencial das anemias microcíticas:\n\n• Ferropriva: ferritina baixa (melhor exame; < 12 ng/mL em crianças), ferro sérico baixo, transferrina e capacidade de ligação altas, saturação baixa, RDW alto, plaquetas normais ou altas.\n• Talassemia minor (traço): microcitose acentuada com anemia leve, número de hemácias normal ou alto, RDW normal, ferritina normal; índice de Mentzer (VCM ÷ número de hemácias em milhões) < 13. Beta-talassemia minor: HbA2 > 3,5% na eletroforese; alfa-talassemia: eletroforese normal (diagnóstico molecular).\n• Anemia de doença crônica: em geral normocítica, às vezes microcítica; ferritina normal ou alta, ferro e transferrina baixos.\n• Anemia sideroblástica: sideroblastos em anel na medula; ferro e ferritina altos; causas hereditárias, álcool, isoniazida, deficiência de B6, chumbo.\n• Intoxicação por chumbo: pontilhado basófilo, dor abdominal, alteração neurológica.\n\nAtenção: a deficiência de ferro reduz a HbA2 e pode mascarar uma beta-talassemia — refazer a eletroforese após repor o ferro.\n\nTratamento e prevenção:\n\n• Tratamento: ferro elementar 3–5 mg/kg/dia por via oral, longe das refeições e do leite, até normalizar a hemoglobina e por mais 2–3 meses para repor estoques (ferritina). Reticulocitose em 5–10 dias confirma a resposta.\n• Profilaxia (Ministério da Saúde): suplementação de ferro dos 6 aos 24 meses; prematuros e baixo peso, a partir de 30 dias de vida.\n• Prevenção: aleitamento materno exclusivo até 6 meses; evitar leite de vaca integral antes de 1 ano (pobre em ferro e causa micro-hemorragias intestinais); alimentos ricos em ferro (carnes) e vitamina C na alimentação complementar.",
    "commentary": "Alternativa (A): deficiência de ácido fólico causa anemia MACROcítica (megaloblástica), e a anemia falciforme é normocítica e hemolítica, com HbS na eletroforese.\n\nAlternativa (B): deficiência de vitamina B12 causa anemia macrocítica; a anemia de doença crônica é diferencial possível de microcitose, mas, junto com a B12, a alternativa mistura mecanismos que não explicam VCM de 66.\n\nAlternativa (D): traço falcêmico não causa anemia (é portador assintomático), e a esferocitose hereditária é anemia hemolítica com CHCM aumentada, não diminuída.",
    "tip": "Microcítica e hipocrômica: pense em ferro (ferritina baixa, RDW alto), talassemia (Mentzer < 13, RDW normal, HbA2 > 3,5% na beta), doença crônica e sideroblástica. Ferropenia baixa a HbA2: repita após repor ferro.",
    "reference": "Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva: atualização — destaques 2021. Brasil. Ministério da Saúde. Programa Nacional de Suplementação de Ferro: manual de condutas gerais, 2013.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-43",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem de 60 anos, passageiro no banco traseiro de um automóvel, usando cinto de segurança de três pontos, envolve-se em uma colisão frontal. É admitido em pronto-socorro com dor em escoriação oblíqua em face anterior do tórax, com murmúrio vesicular presente bilateral e simétrico.\n\nEvolui com dificuldade respiratória, FR 28 irpm, PA 110 × 60 mmHg, turgência jugular a 30°, abafamento de bulhas cardíacas e pulso paradoxal.\n\nQual é o principal diagnóstico nesse caso?",
    "options": [
      "(A) Contusão miocárdica.",
      "(B) Pneumotórax hipertensivo.",
      "(C) Tamponamento cardíaco.",
      "(D) Rotura de aorta ascendente."
    ],
    "correctAnswer": 2,
    "explanation": "Trauma torácico fechado (marca do cinto no tórax), com murmúrio vesicular preservado e simétrico, evoluindo com dispneia, turgência jugular, abafamento de bulhas e pulso paradoxal: tamponamento cardíaco. O sangue acumulado no saco pericárdico, inextensível, comprime o coração e impede o enchimento das câmaras direitas — choque obstrutivo. O murmúrio simétrico afasta pneumotórax hipertensivo, o principal diferencial de turgência jugular com choque no trauma. A PA de 110 × 60 mmHg ainda está compensada, mas a evolução esperada é hipotensão.\n\nRoteiro do tamponamento cardíaco:\n\n• Tríade de Beck: hipotensão, turgência jugular e abafamento de bulhas — completa em minoria dos casos.\n• Pulso paradoxal: queda > 10 mmHg da PA sistólica na inspiração. Sinal de Kussmaul: aumento da turgência jugular na inspiração.\n• Diagnóstico: FAST (janela subxifoide) ou ecocardiograma à beira do leito; não atrasar o tratamento em paciente instável.\n• Tratamento: volume para manter a pré-carga como ponte; pericardiocentese de alívio (subxifoide) se não houver cirurgião disponível; tratamento definitivo com toracotomia ou janela pericárdica.\n\nDiferenciais de choque no trauma torácico:\n\n• Pneumotórax hipertensivo: turgência jugular e hipotensão, mas com murmúrio ABOLIDO de um lado, hipertimpanismo e desvio da traqueia → descompressão com agulha.\n• Hemotórax maciço: murmúrio abolido e macicez, com veias jugulares colabadas (hipovolemia) → drenagem e, se > 1.500 mL, toracotomia.\n• Contusão miocárdica: arritmias e alterações no ECG após impacto no esterno; ECG normal praticamente afasta lesão significativa.\n• Lesão traumática da aorta: desaceleração brusca; quase sempre no istmo (aorta descendente, após a subclávia esquerda); mediastino alargado na radiografia; angiotomografia confirma.",
    "commentary": "Alternativa (A): a contusão miocárdica se manifesta principalmente por arritmias (taquicardia sinusal, extrassístoles, bloqueios) e alterações do ECG; não causa pulso paradoxal e abafamento de bulhas, que indicam líquido no pericárdio.\n\nAlternativa (B): o pneumotórax hipertensivo também dá turgência jugular e choque, mas com murmúrio vesicular abolido no lado afetado e desvio da traqueia — aqui o murmúrio é presente e simétrico.\n\nAlternativa (D): a rotura traumática da aorta acontece quase sempre no istmo (aorta descendente), não na ascendente, e a maioria morre no local; os sobreviventes se apresentam com hematoma contido e mediastino alargado, sem o quadro de turgência jugular com abafamento de bulhas.",
    "tip": "Trauma + turgência jugular + abafamento de bulhas + pulso paradoxal com murmúrio simétrico = tamponamento (FAST, pericardiocentese como ponte, toracotomia). Murmúrio abolido + desvio de traqueia = pneumotórax hipertensivo.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Trauma torácico).",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-44",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 21 anos, submetida há 4 meses à remoção cirúrgica de dois condilomas acuminados na vulva, comparece à consulta em ambulatório de atenção secundária.\n\nSeus exames não identificaram lesões na vagina nem no colo uterino (citologia oncótica e colposcopia normais). O exame anatomopatológico revelou neoplasia epitelial de baixo grau nos condilomas.\n\nNão foram encontradas novas lesões condilomatosas, mas foram identificadas poucas áreas acetobrancas esparsas na vulva após administração de ácido acético.\n\nNesse caso, qual é a conduta indicada?",
    "options": [
      "(A) Realizar seguimento clínico periódico.",
      "(B) Solicitar genotipagem de vírus.",
      "(C) Realizar biópsia das lesões.",
      "(D) Prescrever podofilotoxina."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem que teve dois condilomas vulvares excisados há 4 meses, com histologia de lesão de baixo grau (efeito do HPV de baixo risco, tipos 6 e 11), citologia e colposcopia normais e, agora, sem nenhuma lesão visível — apenas áreas acetobrancas esparsas na vulva. O teste do ácido acético na vulva tem baixa especificidade: o acetobranqueamento aparece em inflamação, cicatriz, microtraumas e infecção subclínica pelo HPV, e não há indicação de tratar infecção subclínica. Sem lesão clínica nova ou suspeita, a conduta é o seguimento clínico periódico, com orientação sobre a possibilidade de recidiva (comum nos primeiros 3 meses após o tratamento).\n\nRoteiro do condiloma acuminado (PCDT IST):\n\n• Diagnóstico: clínico, pela inspeção. Biópsia apenas se houver dúvida diagnóstica, lesões atípicas (pigmentadas, endurecidas, fixas, ulceradas ou sangrantes), imunossupressão, falta de resposta ou piora com o tratamento.\n• Tratamento domiciliar (autoaplicado): podofilotoxina 0,15% creme ou imiquimode 5% creme — contraindicados na gestação.\n• Tratamento no consultório: ácido tricloroacético 80–90%, crioterapia, exérese cirúrgica, eletrocauterização ou laser. Na gestante: ácido tricloroacético, crioterapia ou exérese.\n• O objetivo é remover as lesões visíveis; nenhum tratamento erradica o vírus, e a infecção subclínica não deve ser tratada.\n• Genotipagem do HPV não tem papel no manejo do condiloma (os tipos 6 e 11 são de baixo risco oncogênico).\n• Rastreio do câncer do colo do útero segue a rotina; oferecer testagem para outras IST.\n• Prevenção: vacina contra HPV no SUS (meninas e meninos de 9 a 14 anos; grupos especiais e imunossuprimidos em faixas mais amplas) e preservativo.",
    "commentary": "Alternativa (B): a genotipagem do HPV não muda a conduta no condiloma — já se sabe que são tipos de baixo risco, e o rastreamento do colo segue a rotina.\n\nAlternativa (C): biópsia é indicada para lesões visíveis suspeitas ou atípicas; áreas acetobrancas esparsas, sem lesão macroscópica, em vulva já tratada não têm critério de biópsia, pela baixa especificidade do teste.\n\nAlternativa (D): a podofilotoxina trata lesões visíveis; não há condiloma presente, e tratar infecção subclínica pelo HPV não traz benefício.\n\nPonto de controvérsia: se o examinador interpretar as áreas acetobrancas como lesões suspeitas, a biópsia (C) passaria a ser defensável — o enunciado não descreve outras características que justifiquem.",
    "tip": "Condiloma tratado, sem lesão visível: só acompanhar. Acetobranco isolado na vulva não é indicação de biópsia nem de tratamento. Biopsie lesão atípica, pigmentada, ulcerada ou refratária.",
    "reference": "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST), 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ponto discutível). Critérios de biópsia dependem da inspeção detalhada; ácido acético sozinho tem baixa especificidade."
  },
  {
    "id": "sug-enamed1-45",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 22 anos, com 24 semanas de gestação, avaliada em Unidade Básica de Saúde, vem apresentando febre de 38 °C há 3 dias, acompanhada de tosse, coriza, odinofagia, inapetência e anosmia. Nega outras queixas ou comorbidades. Mora com o marido e um filho de 1 ano de idade, ambos assintomáticos.\n\nAo exame físico: paciente corada e hidratada; FR 18 irpm; FC 92 bpm; PA 110 × 60 mmHg; SatO₂ 98% em ar ambiente; sem alterações à ausculta cardíaca e respiratória. Batimentos cardíacos fetais de 148 bpm e altura uterina de 22 cm.\n\nRealizou testes para vírus respiratórios, com resultado positivo para influenza A.\n\nAlém de orientação para sinais de gravidade, isolamento domiciliar, notificação e monitoramento por teleconsulta, quais condutas são indicadas para o caso?",
    "options": [
      "(A) Prescrever oseltamivir para a gestante como tratamento e observar surgimento de sintomas gripais na criança.",
      "(B) Prescrever sintomáticos para a gestante e quimioprofilaxia com oseltamivir para criança.",
      "(C) Prescrever oseltamivir para a gestante como tratamento e quimioprofilaxia para a criança.",
      "(D) Prescrever sintomáticos para a gestante e observar surgimento de sintomas gripais na criança."
    ],
    "correctAnswer": 0,
    "alsoAccepted": [
      2
    ],
    "explanation": "Gestante de 24 semanas com síndrome gripal (febre, tosse, coriza, dor de garganta) e influenza A confirmada, sem sinais de gravidade (SatO₂ 98%, FR 18, estável). Gestantes, em qualquer idade gestacional, e puérperas até 2 semanas pertencem ao grupo de risco para complicações, então o oseltamivir está indicado já, mesmo com mais de 48 h de sintomas e sem gravidade: 75 mg de 12/12 h por 5 dias. O filho de 1 ano é contato domiciliar assintomático.\n\nSobre a criança: crianças menores de 5 anos também são grupo de risco para complicações da influenza, e o protocolo do Ministério da Saúde indica quimioprofilaxia com oseltamivir para pessoas de risco não vacinadas (ou vacinadas há menos de 2 semanas) expostas a caso confirmado, iniciada em até 48 h após a última exposição. Como o enunciado não informa a vacinação da criança, tanto observar (se vacinada) quanto fazer a quimioprofilaxia (se não vacinada) são defensáveis — por isso A e C contam como certas aqui.\n\nRoteiro da influenza (Ministério da Saúde):\n\n• Síndrome gripal: febre (mesmo referida) + tosse ou dor de garganta, com cefaleia, mialgia ou artralgia.\n• Síndrome respiratória aguda grave (SRAG): síndrome gripal + dispneia, desconforto respiratório, SatO₂ < 95% ou cianose → internação e oseltamivir.\n• Grupos de risco: gestantes e puérperas, crianças < 5 anos, idosos ≥ 60 anos, indígenas, doenças crônicas (cardiopatia, pneumopatia, diabetes, nefropatia, imunossupressão), obesidade (IMC ≥ 40).\n• Oseltamivir: toda SRAG e toda síndrome gripal em grupo de risco, idealmente nas primeiras 48 h, mas sem deixar de tratar depois. Adulto 75 mg 12/12 h por 5 dias; crianças, por peso.\n• Quimioprofilaxia: pessoas de risco não vacinadas ou vacinadas há menos de 2 semanas, expostas a caso suspeito ou confirmado, em até 48 h; 75 mg 1 vez ao dia por 10 dias no adulto. Não substitui a vacina.\n• Vacina: anual na campanha, para gestantes (qualquer trimestre), crianças de 6 meses a < 6 anos, idosos e demais grupos prioritários.",
    "commentary": "Alternativa (B): deixar a gestante só com sintomáticos ignora que ela é grupo de risco, com indicação de oseltamivir independentemente da gravidade e do tempo de sintomas.\n\nAlternativa (C): tratar a gestante está certo, e a quimioprofilaxia para a criança é indicada se ela não estiver vacinada — situação que o enunciado não esclarece. Por isso C também é aceita como certa.\n\nAlternativa (D): erra na gestante (sem antiviral) e, se a criança não for vacinada, também na profilaxia.",
    "tip": "Gestante ou puérpera com síndrome gripal = oseltamivir já, mesmo após 48 h e sem gravidade. Contato de risco (como criança < 5 anos) não vacinado = quimioprofilaxia em até 48 h da exposição.",
    "reference": "Brasil. Ministério da Saúde. Protocolo de Tratamento de Influenza, 2023. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (condicional): A e C contam como acerto. A quimioprofilaxia da criança de 1 ano (grupo de risco) depende do estado vacinal, que o enunciado não informa."
  },
  {
    "id": "sug-enamed1-46",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos comparece a uma Unidade de Pronto Atendimento com queixa de dor torácica em queimação, retroesternal, com duração aproximada de 2 horas. É hipertenso controlado com uso de enalapril 10 mg ao dia, sem outras comorbidades.\n\nRelata piora da dor após alimentação volumosa e ao se deitar, com alívio parcial quando se senta. Nega irradiação para membros superiores, dispneia, sudorese, náuseas, vômitos ou síncope.\n\nÀ admissão, o paciente encontra-se hemodinamicamente estável, com sinais vitais dentro da normalidade. O exame físico não evidencia alterações relevantes. São realizados eletrocardiogramas e dosagens de troponina de forma seriada, sem alterações.\n\nQual exame deve ser realizado para confirmação do diagnóstico provável nesse caso?",
    "options": [
      "(A) Tomografia de tórax sem contraste.",
      "(B) Ecocardiograma com estresse farmacológico.",
      "(C) pHmetria esofagiana de 24 horas.",
      "(D) Angiotomografia de artérias pulmonares."
    ],
    "correctAnswer": 2,
    "explanation": "Homem de 45 anos com dor retroesternal em queimação, que piora após refeições volumosas e ao deitar e melhora ao sentar, sem sinais de alarme cardiovascular e com ECG e troponina seriados normais. Afastada a síndrome coronariana aguda — o primeiro passo obrigatório em toda dor torácica —, o diagnóstico provável é doença do refluxo gastroesofágico (DRGE) com dor torácica não cardíaca. Entre as alternativas, o exame que CONFIRMA refluxo patológico é a pHmetria esofágica de 24 horas, que mede o tempo de exposição do esôfago ao ácido e relaciona os episódios aos sintomas.\n\nRoteiro da DRGE:\n\n• Sintomas típicos: pirose e regurgitação. Atípicos: dor torácica, tosse crônica, rouquidão, asma, erosão dentária.\n• Sintomas típicos sem sinais de alarme: tratamento empírico com inibidor de bomba de prótons (IBP) em dose plena por 4–8 semanas; a resposta reforça o diagnóstico.\n• Endoscopia digestiva alta: indicada se sinais de alarme (disfagia, odinofagia, perda de peso, sangramento, anemia, vômitos persistentes, massa, idade acima de 40–45 anos com início recente, história familiar de câncer gástrico), falha do IBP ou antes de cirurgia. Classifica a esofagite (Los Angeles A a D) e identifica Barrett.\n• pHmetria de 24 horas (ou impedâncio-pHmetria): padrão-ouro para confirmar refluxo — indicada com endoscopia normal e sintomas refratários, sintomas atípicos ou antes de cirurgia antirrefluxo. Pelo consenso de Lyon, tempo de exposição ácida > 6% é conclusivo e < 4% é normal.\n• Manometria esofágica: não diagnostica refluxo; avalia motilidade antes da fundoplicatura e exclui acalasia.\n• Tratamento: perder peso, elevar a cabeceira, evitar refeições volumosas e deitar logo após comer; IBP; cirurgia (fundoplicatura de Nissen) para quem não tolera ou não quer IBP contínuo, ou para hérnias volumosas.",
    "commentary": "Alternativa (A): tomografia de tórax sem contraste avalia pulmão e mediastino, mas não demonstra refluxo nem é exame de dor torácica aguda (dissecção de aorta e TEP exigem contraste).\n\nAlternativa (B): ecocardiograma de estresse pesquisa isquemia miocárdica; a dor tem características de refluxo e a síndrome coronariana aguda foi afastada — pode ser considerado depois, na investigação de doença coronária crônica, se houver suspeita clínica, mas não confirma o diagnóstico provável.\n\nAlternativa (D): angiotomografia de artérias pulmonares investiga tromboembolismo pulmonar, que não tem suporte clínico (sem dispneia, taquicardia, hipoxemia ou fatores de risco).\n\nNa prática, antes da pHmetria seria comum o teste terapêutico com IBP e, pela idade, a endoscopia; nenhuma das duas está entre as opções.",
    "tip": "Dor torácica: primeiro exclua coronária. Queimação que piora após comer e ao deitar = DRGE. IBP empírico na maioria; endoscopia se sinais de alarme; pHmetria de 24 h confirma refluxo.",
    "reference": "Katz PO et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol, 2022. Gyawali CP et al. Updates to the modern diagnosis of GERD: Lyon consensus 2.0. Gut, 2024.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-47",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Uma criança de 6 anos é levada a uma Unidade Básica de Saúde para consulta por apresentar quadro, iniciado há 3 anos, de evacuações infrequentes (uma vez por semana) e fezes endurecidas, além de escapes fecais involuntários iniciados há 6 meses.\n\nSegundo relato da mãe, a criança tem histórico de comportamento retentivo e dor ao evacuar. Ao exame físico, observa-se sigmoide palpável.\n\nQual é a conduta terapêutica de primeira linha nesse caso?",
    "options": [
      "(A) Óleo mineral via oral, associado a acompanhamento multiprofissional e dieta rica em fibras insolúveis e líquidos.",
      "(B) Lactulose e clisteres com enema fosfatado, para desimpactação fecal e manutenção do hábito intestinal regular.",
      "(C) Polietilenoglicol 4000, para desimpactação fecal e manutenção do hábito intestinal regular, associado a treinamento intestinal e dieta rica em fibras e líquidos.",
      "(D) Lavagem intestinal, com indicação de dieta isenta de resíduos e encaminhamento para posterior avaliação pediátrica."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 6 anos com evacuações semanais, fezes endurecidas, dor ao evacuar, comportamento retentivo, escape fecal involuntário e sigmoide palpável (massa fecal): constipação funcional com impactação fecal e incontinência por transbordamento (escape de fezes amolecidas ao redor do fecaloma — não é diarreia nem encoprese voluntária). O tratamento tem duas fases: primeiro a desimpactação e depois a manutenção, ambas de preferência com polietilenoglicol (PEG) por via oral, associadas a treinamento do hábito intestinal (sentar no vaso após as refeições) e alimentação com fibras e água em quantidade adequada.\n\nCritérios de Roma IV para constipação funcional (criança ≥ 4 anos; pelo menos 2 critérios, por pelo menos 1 mês):\n\n• 2 ou menos evacuações no vaso por semana.\n• Pelo menos 1 episódio de incontinência fecal por semana.\n• Postura ou comportamento retentivo.\n• Evacuações dolorosas ou de fezes endurecidas.\n• Grande massa fecal no reto.\n• Fezes de grande calibre, que podem entupir o vaso.\n\nTratamento (ESPGHAN/NASPGHAN):\n\n• Desimpactação: PEG 1–1,5 g/kg/dia por 3–6 dias por via oral (preferido); enema é alternativa se o PEG não estiver disponível.\n• Manutenção: PEG 0,4–0,8 g/kg/dia por pelo menos 2 meses e até 1 mês sem sintomas; desmame gradual. Alternativa: lactulose. Óleo mineral pode ser usado acima de 1 ano, sem risco de aspiração.\n• Comportamento: sentar no vaso 5–10 minutos após as refeições, com apoio para os pés; diário das evacuações; reforço positivo.\n• Dieta: fibras e água em quantidade normal para a idade; excesso não traz benefício.\n\nSinais de alarme (pensar em causa orgânica): início no 1º mês de vida, eliminação de mecônio após 48 h (doença de Hirschsprung), fezes em fita, distensão abdominal importante, déficit de crescimento, vômitos biliosos, alterações neurológicas de membros inferiores ou da região sacral, sangue nas fezes sem fissura.",
    "commentary": "Alternativa (A): o óleo mineral é opção de manutenção, mas não é o de 1ª linha para desimpactação, e fibras insolúveis em excesso, numa criança impactada, podem piorar o desconforto. Falta a desimpactação.\n\nAlternativa (B): enemas fosfatados são alternativa de desimpactação quando o PEG oral não está disponível; são invasivos e traumáticos para uma criança com comportamento retentivo e dor, e há risco de distúrbios eletrolíticos.\n\nAlternativa (D): lavagem intestinal é procedimento hospitalar desnecessário na 1ª abordagem, e dieta isenta de resíduos (sem fibras) é o oposto do recomendado; encaminhar ao pediatra não é a conduta de 1ª linha na UBS.",
    "tip": "Constipação funcional com escape fecal = fecaloma com transbordamento. Primeiro desimpacte (PEG 1–1,5 g/kg/dia por 3–6 dias), depois mantenha (PEG 0,4–0,8 g/kg/dia por meses) + sentar no vaso após as refeições.",
    "reference": "Tabbers MM et al. Evaluation and treatment of functional constipation in infants and children: ESPGHAN/NASPGHAN guidelines. J Pediatr Gastroenterol Nutr, 2014. Hyams JS et al. Childhood functional gastrointestinal disorders: child/adolescent — Rome IV. Gastroenterology, 2016.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-48",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 18 anos sofre um acidente ao andar de bicicleta, segurando-se na traseira de um caminhão, sendo projetado a seis metros de distância.\n\nÉ atendido pelo SAMU, apresentando Glasgow 8, cianose de extremidades, respiração ruidosa, múltiplas lesões faciais com sangramento e equimose periorbitária bilateral.\n\nÉ feita uma tentativa de laringoscopia, sem sucesso. Paciente evolui para quadro de apneia.\n\nNesse caso, qual é o procedimento imediato para garantir acesso à via aérea?",
    "options": [
      "(A) Cricotireoidostomia por punção.",
      "(B) Traqueostomia de emergência.",
      "(C) Máscara laríngea.",
      "(D) Intubação nasotraqueal."
    ],
    "correctAnswer": 0,
    "explanation": "Politraumatizado com Glasgow 8, trauma de face extenso com sangramento, equimose periorbitária bilateral (sinal do guaxinim, fratura de base de crânio), respiração ruidosa e cianose; a laringoscopia falhou e ele evoluiu para apneia. É a situação \"não consigo intubar, não consigo oxigenar\": a indicação é via aérea cirúrgica imediata pela membrana cricotireóidea. No adulto, a cricotireoidostomia cirúrgica é a preferida; como ela não está entre as alternativas, a cricotireoidostomia por punção é a resposta — é a técnica mais rápida, oxigena por 30–45 minutos (com insuflação a jato) e serve de ponte até a via aérea definitiva.\n\nRoteiro da via aérea no trauma (ATLS):\n\n• Via aérea definitiva: tubo na traqueia com balonete insuflado, fixado e ligado a oxigênio — intubação orotraqueal (com proteção da coluna cervical), ou via aérea cirúrgica.\n• Indicações de via aérea definitiva: apneia, Glasgow ≤ 8, incapacidade de manter a via aérea pérvia, risco de aspiração (sangue, vômito), lesão inalatória, fraturas faciais graves, hipóxia refratária.\n• Falha de intubação: dispositivo extraglótico (máscara laríngea, tubo laríngeo) como ponte, se conseguir ventilar; se não oxigena, via aérea cirúrgica.\n• Cricotireoidostomia cirúrgica: incisão na membrana cricotireóidea e tubo com balonete — escolha no adulto; contraindicada abaixo de 12 anos.\n• Cricotireoidostomia por punção: cateter calibroso (12–14G) pela membrana, com oxigênio a jato; temporária (retenção de CO₂ limita o uso a cerca de 30–45 minutos). Técnica de escolha em crianças < 12 anos.\n• Traqueostomia: não é via de emergência — demora mais, sangra mais e exige mais habilidade; reservada a fratura de laringe ou transecção laringotraqueal, ou feita depois, de forma eletiva.\n• Intubação nasotraqueal: contraindicada em apneia e em suspeita de fratura de base de crânio ou de face média.",
    "commentary": "Alternativa (B): a traqueostomia de emergência não é recomendada no atendimento inicial do trauma: é mais demorada, tem mais sangramento e complicações, e o paciente em apneia não pode esperar. Fica para situações específicas, como fratura de laringe, ou como procedimento eletivo depois.\n\nAlternativa (C): a máscara laríngea é dispositivo de resgate após falha de intubação, mas não é via aérea definitiva, não protege contra aspiração, e com sangramento facial volumoso e trauma maxilofacial grave é difícil obter vedação; num paciente em apneia que não se consegue oxigenar, a via aérea cirúrgica é prioritária.\n\nAlternativa (D): a intubação nasotraqueal exige respiração espontânea (é feita às cegas, guiada pelo som da respiração) e é contraindicada com fratura de base de crânio (equimose periorbitária bilateral) e trauma de face média, pelo risco de o tubo entrar no crânio.",
    "tip": "Trauma: não intubo e não oxigeno = via aérea cirúrgica pela membrana cricotireóidea. Adulto: cricotireoidostomia cirúrgica (ou por punção como ponte). Criança < 12 anos: por punção. Traqueostomia não é via de emergência.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Via aérea e ventilação).",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito técnico revisado: a resposta adotada passou a ser A (cricotireoidostomia por punção). Pelo ATLS, a via aérea cirúrgica de emergência é feita pela membrana cricotireóidea; a cricotireoidostomia cirúrgica, preferida no adulto, não está entre as opções, e a traqueostomia não é via de emergência."
  },
  {
    "id": "sug-enamed1-49",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 24 anos busca atendimento em Unidade de Pronto Atendimento com história de dor pélvica, tipo cólica, iniciada há 7 dias, que evoluiu para dor constante há 1 dia.\n\nA última menstruação foi há 20 dias. O exame físico revelou temperatura axilar 36,8 °C; abdome com ruídos hidroaéreos presentes e dor à palpação profunda, com descompressão negativa.\n\nO exame ginecológico mostrou colo uterino com aspecto normal e, ao toque vaginal, massa em fossa ilíaca esquerda, moderadamente dolorosa e móvel.\n\nHemograma com leucocitose discreta, sem desvio. Exame de urina rotina normal. β-HCG quantitativo negativo.\n\nA ultrassonografia revelou imagem heterogênea em topografia de anexo esquerdo, com sombra acústica e ausência de fluxo ao Doppler.\n\nQual é a conduta indicada nesse caso?",
    "options": [
      "(A) Iniciar antibioticoterapia de largo espectro.",
      "(B) Solicitar aspiração do cisto guiada por ultrassonografia.",
      "(C) Realizar punção de fundo de saco posterior.",
      "(D) Indicar laparoscopia exploradora."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher jovem com β-hCG negativo, dor pélvica em cólica há 7 dias que se tornou contínua, massa anexial esquerda dolorosa e móvel, sem febre e sem sinais de doença inflamatória pélvica. A ultrassonografia mostra massa heterogênea com sombra acústica — característica do teratoma cístico maduro (cisto dermoide), que contém gordura, pelos, dentes e calcificações — e ausência de fluxo ao Doppler. Massa ovariana + dor + Doppler sem fluxo = torção anexial até prova em contrário. É emergência cirúrgica: a laparoscopia confirma o diagnóstico, permite distorcer o anexo, preservar o ovário e retirar o cisto.\n\nRoteiro da torção anexial:\n\n• Quem torce: ovário aumentado por cisto ou tumor, sobretudo entre 5 e 10 cm — o teratoma maduro é o tumor mais associado; também ovários estimulados na fertilização e na gestação.\n• Clínica: dor pélvica súbita e intensa, às vezes intermitente (torções parciais), náuseas e vômitos, massa anexial dolorosa; febre baixa e leucocitose podem aparecer.\n• Ultrassonografia com Doppler: ovário aumentado e edemaciado com folículos na periferia, sinal do redemoinho (whirlpool) no pedículo. A ausência de fluxo reforça a suspeita, mas fluxo presente NÃO exclui torção (circulação dupla do ovário).\n• Tratamento: laparoscopia de urgência com distorção do anexo e preservação do ovário, mesmo que pareça escurecido (a maioria recupera); cistectomia na mesma cirurgia ou depois. Ooforectomia só se houver necrose evidente ou suspeita de malignidade na pós-menopausa.\n\nDiferenciais de dor pélvica aguda com β-hCG negativo:\n\n• Doença inflamatória pélvica: febre, corrimento, dor à mobilização do colo, abscesso tubo-ovariano → antibiótico.\n• Cisto hemorrágico: padrão rendilhado (em rede), fluxo periférico preservado → em geral expectante.\n• Endometrioma: conteúdo homogêneo em vidro fosco, dor crônica cíclica.\n• Apendicite: dor que migra para a fossa ilíaca direita, sinais de irritação peritoneal.\n• Com β-hCG positivo: pensar sempre em gravidez ectópica.",
    "commentary": "Alternativa (A): antibiótico de largo espectro trata doença inflamatória pélvica ou abscesso tubo-ovariano; a paciente está afebril, sem corrimento, com colo normal e leucocitose discreta sem desvio — e atrasar a cirurgia na torção leva à perda do ovário.\n\nAlternativa (B): aspiração guiada de cisto ovariano não é recomendada: tem alta recidiva, não trata a torção, e num teratoma pode derramar conteúdo sebáceo e causar peritonite química.\n\nAlternativa (C): a punção do fundo de saco posterior (culdocentese) era usada para procurar sangue na suspeita de ectópica rota; hoje foi substituída pela ultrassonografia e não tem papel na torção, com β-hCG negativo.",
    "tip": "Massa anexial + dor súbita ou que piora + Doppler sem fluxo = torção: laparoscopia de urgência, distorcer e preservar o ovário. Doppler com fluxo não exclui. Sombra acústica em massa ovariana = teratoma.",
    "reference": "American College of Obstetricians and Gynecologists. Committee Opinion nº 783: Adnexal Torsion in Adolescents, 2019. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Tratado de Ginecologia.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-50",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Em reunião de Equipe de Saúde da Família, uma agente comunitária de saúde informa que, na creche localizada em sua microárea, ocorreram vinte casos de diarreia no último mês.\n\nQual é a abordagem inicial no plano de enfrentamento dessa situação?",
    "options": [
      "(A) Convocar todas as crianças e profissionais da creche para consulta na Unidade Básica de Saúde e solicitar exames de fezes.",
      "(B) Realizar reuniões com a creche sobre a importância da hidratação oral e medidas de prevenção e controle adequadas.",
      "(C) Visitar a creche para investigar os casos suspeitos e notificar o surto de doença diarreica à Vigilância em Saúde do Município.",
      "(D) Solicitar o fechamento da creche até que haja limpeza e desinfecção de todos os ambientes e utensílios com solução de hipoclorito."
    ],
    "correctAnswer": 2,
    "explanation": "Vinte casos de diarreia em um mês numa mesma creche é uma agregação de casos acima do esperado, com vínculo de lugar: suspeita de surto. Surto de doença diarreica (doença de transmissão hídrica e alimentar) é de notificação compulsória imediata à vigilância municipal. A abordagem inicial é, portanto, ir até a creche investigar — confirmar os casos, levantar datas, sintomas, alimentos, água, práticas de higiene e troca de fraldas — e notificar, para que a vigilância apoie a coleta de amostras e as medidas de controle.\n\nEtapas da investigação de um surto:\n\n• Confirmar a existência do surto: comparar o número de casos com o esperado para o lugar e a época.\n• Confirmar o diagnóstico e criar a definição de caso (pessoa, tempo e lugar; ex.: criança ou funcionário da creche com 3 ou mais evacuações líquidas em 24 h no período).\n• Busca ativa de casos e descrição: curva epidêmica (fonte comum pontual × transmissão pessoa a pessoa), lugares e características dos doentes.\n• Formular hipóteses sobre fonte e modo de transmissão; coletar amostras (fezes, alimentos, água).\n• Medidas de controle desde o início: lavagem das mãos, higiene no preparo dos alimentos e na troca de fraldas, desinfecção de superfícies, afastamento de crianças e manipuladores doentes até 24–48 h sem diarreia, reidratação oral dos casos.\n• Notificar e comunicar os resultados (relatório, devolutiva à creche e à comunidade).\n\nNa creche, os agentes mais comuns são rotavírus, norovírus, Shigella, Giardia, Escherichia coli e Cryptosporidium, com transmissão fecal-oral pessoa a pessoa favorecida pelas fraldas e pelo contato próximo.",
    "commentary": "Alternativa (A): convocar todas as crianças e funcionários para consulta e exame de fezes, sem investigação e definição de caso, é desproporcional, sobrecarrega a unidade e desperdiça exames; a coleta deve ser direcionada pela investigação e pela vigilância.\n\nAlternativa (B): orientar sobre hidratação oral e prevenção é parte das medidas de controle, mas sem investigar e notificar não se identifica a fonte nem se dimensiona o surto — fica incompleto como abordagem inicial.\n\nAlternativa (D): fechar a creche é medida extrema, raramente necessária (pode até dispersar a transmissão para outros lugares), e não é decisão da equipe de saúde sem investigação; a limpeza com hipoclorito entra como parte das medidas de controle, com a creche funcionando.",
    "tip": "Casos agrupados acima do esperado num mesmo lugar = surto: investigue no local e notifique imediatamente a vigilância. Medidas de controle começam junto, sem esperar o agente.",
    "reference": "Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024 (capítulo Doenças de transmissão hídrica e alimentar). Brasil. Ministério da Saúde. Manual integrado de vigilância, prevenção e controle de doenças transmitidas por alimentos, 2010.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-51",
    "topography": "13",
    "topic": "Transtornos alimentares",
    "module": "Clínica Médica",
    "text": "Uma adolescente de 17 anos, estudante do terceiro ano do ensino médio, procura uma Unidade Básica de Saúde com queixa de aumento de apetite e de peso nos últimos meses.\n\nRelata que está ingerindo quantidades maiores de alimentos nas refeições principais e também fora delas e que, mais de uma vez por semana, precisa induzir vômito, por se sentir mal quanto ao excesso de comida ingerida.\n\nRefere que passou a ir diariamente à academia e que faz uso, por conta própria, de laxantes, com diarreias frequentes, e furosemida.\n\nAfirma que tem se sentido muito preocupada com várias questões e problemas em casa, além de estar nervosa em razão da proximidade das provas do vestibular.\n\nRefere, ainda, ter crises de ansiedade, vontade súbita de chorar, irritabilidade, dificuldade de socialização e cansaço.\n\nO exame revela antropometria com altura 1,69 m, peso 62,8 kg, IMC 22 kg/m², mucosas desidratadas 2+/4+.\n\nQual distúrbio eletrolítico mais provavelmente se associa ao quadro apresentado?",
    "options": [
      "(A) Hiponatremia.",
      "(B) Hipocalemia.",
      "(C) Hipernatremia.",
      "(D) Hipercalemia."
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com episódios de comer grande quantidade de comida com sensação de exagero, seguidos de comportamentos compensatórios — vômito autoinduzido mais de uma vez por semana, laxantes, furosemida e exercício excessivo —, com IMC normal (22) e sinais de desidratação: bulimia nervosa. Cada método de purgação faz perder potássio: o vômito leva HCl e gera alcalose metabólica, e a hipovolemia ativa a aldosterona, que aumenta a perda renal de K⁺; a diarreia por laxantes perde K⁺ nas fezes; a furosemida perde K⁺ na urina. O distúrbio mais esperado é a hipocalemia — que é também o mais perigoso, pelo risco de arritmia.\n\nRoteiro dos transtornos alimentares (DSM-5-TR):\n\n• Bulimia nervosa: compulsão alimentar + comportamentos compensatórios (vômito, laxantes, diuréticos, jejum, exercício) pelo menos 1 vez por semana, por 3 meses; autoavaliação muito influenciada por peso e forma; peso geralmente normal.\n• Anorexia nervosa: restrição com peso significativamente baixo, medo intenso de engordar e distorção da imagem corporal; subtipos restritivo e compulsivo-purgativo. Gravidade pelo IMC (grave < 15 kg/m²).\n• Transtorno de compulsão alimentar: compulsões sem comportamentos compensatórios; associado a obesidade.\n\nBulimia — achados e complicações:\n\n• Exame: sinal de Russell (calosidade no dorso da mão pelo atrito com os dentes ao provocar o vômito), hipertrofia de parótidas, erosão do esmalte dentário.\n• Laboratório: hipocalemia, alcalose metabólica hipoclorêmica (vômitos), acidose metabólica (abuso de laxantes), hipomagnesemia, amilase salivar aumentada.\n• Complicações: arritmias (QT longo), esofagite, síndrome de Mallory-Weiss, ruptura esofágica (Boerhaave), nefropatia hipocalêmica.\n• Tratamento: terapia cognitivo-comportamental (1ª linha); fluoxetina em dose alta (60 mg/dia), com acompanhamento multiprofissional e nutricional. Evitar bupropiona (risco de convulsão nessa população). Rastrear depressão, ansiedade e risco de suicídio.\n• Na anorexia grave, atenção à síndrome de realimentação: hipofosfatemia, hipocalemia e hipomagnesemia ao reiniciar a nutrição.",
    "commentary": "Alternativa (A): a hiponatremia pode ocorrer com diuréticos ou ingestão excessiva de água, mas não é o distúrbio mais característico da soma de vômitos, laxantes e furosemida — todos convergem para perda de potássio.\n\nAlternativa (C): a hipernatremia exige perda de água livre maior que a de sódio sem reposição (sem acesso à água, diabetes insípido); não é o padrão esperado na purgação.\n\nAlternativa (D): a hipercalemia é o oposto do esperado — vômito, diarreia e diurético de alça aumentam a perda de potássio. Só apareceria com lesão renal grave ou uso de poupadores de potássio.\n\nNa prática: dosar potássio, magnésio, função renal e gasometria, fazer ECG e repor K⁺ (e Mg²⁺) antes de liberar.",
    "tip": "Purgação (vômito, laxante, diurético) = hipocalemia, com alcalose metabólica se o vômito predomina. Bulimia tem peso normal; anorexia, peso baixo. Sinal de Russell e parótidas aumentadas denunciam o vômito.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders. 4ª ed., 2023.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-52",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Menino de 7 anos, previamente hígido, é levado ao pronto atendimento com história de coriza e espirros há 2 dias. Iniciou febre há 24 horas, associada à náusea e astenia. Seu irmão mais novo apresentou quadro semelhante na semana anterior.\n\nTemperatura axilar: 38,9 °C. Exame físico: hiperemia tonsilar bilateral. Ausculta cardíaca: sopro sistólico 2+/4+, audível na borda esternal esquerda média, que reduz de intensidade com a manobra de Valsalva e a posição ortostática. Ausência de outras alterações.\n\nEm relação ao sopro cardíaco, a conduta indicada nesse caso é:",
    "options": [
      "(A) Realizar eletrocardiografia.",
      "(B) Solicitar ecocardiografia.",
      "(C) Acompanhar o paciente ambulatorialmente.",
      "(D) Encaminhar o paciente à cardiologia pediátrica."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 7 anos com febre (estado hiperdinâmico) e um sopro sistólico suave (2+/4+), na borda esternal esquerda média, sem outros achados cardiovasculares, que DIMINUI com a manobra de Valsalva e ao ficar em pé. São características de sopro inocente (funcional) — muito comum dos 3 aos 7 anos e que se intensifica com febre, anemia e exercício. A manobra de Valsalva e a posição ortostática reduzem o retorno venoso e diminuem a maioria dos sopros; as exceções, que aumentam, são a cardiomiopatia hipertrófica e o prolapso da valva mitral. A conduta é acompanhar e reauscultar após a febre, sem exames.\n\nCaracterísticas do sopro inocente (os \"7 S\" em inglês): suave (≤ 2/6, sem frêmito), sistólico, curto (não holossistólico), sem clique ou som extra, pequena área de ausculta e sem irradiação, som musical ou vibratório, e sensível à posição (muda com a posição ou com manobras). Bulhas normais, criança sem sintomas e com crescimento adequado.\n\nTipos mais comuns:\n\n• Sopro de Still: vibratório, musical, na borda esternal esquerda média ou baixa; 3 a 6 anos; o mais comum.\n• Sopro de ejeção pulmonar: foco pulmonar, crianças maiores e adolescentes.\n• Zumbido venoso: contínuo, abaixo das clavículas; desaparece ao deitar ou ao comprimir a jugular.\n• Estenose de ramos pulmonares periféricos: recém-nascidos e lactentes pequenos, irradia para axilas e dorso; some até 6 meses.\n\nSinais de sopro patológico (pedir ECG e ecocardiograma e encaminhar à cardiologia pediátrica): sopro diastólico; intensidade ≥ 3/6 ou com frêmito; holossistólico; clique, B2 hiperfonética ou com desdobramento fixo (CIA); sopro que aumenta em pé ou com Valsalva (cardiomiopatia hipertrófica); cianose, cansaço às mamadas, sudorese, baixo ganho de peso, síncope ou dor torácica aos esforços; pulsos femorais diminuídos (coarctação).",
    "commentary": "Alternativa (A): o ECG não acrescenta nada diante de um sopro com todas as características de inocente; seria indicado se houvesse sinais de patologia (síncope, arritmia, sopro patológico).\n\nAlternativa (B): o ecocardiograma é o exame que define cardiopatia estrutural, mas não está indicado de rotina para sopro claramente inocente — vale se houver qualquer sinal de sopro patológico ou se o sopro mudar na reavaliação.\n\nAlternativa (D): o encaminhamento à cardiologia pediátrica fica para sopro com características patológicas, sintomas ou dúvida diagnóstica; aqui o sopro diminui com Valsalva e em pé e surge num contexto de febre.",
    "tip": "Sopro sistólico suave, sem frêmito, que muda com a posição, em criança sem sintomas (e com febre) = inocente: acompanhar. Diastólico, ≥ 3/6, com frêmito, clique ou que AUMENTA com Valsalva = investigar.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Sopros cardíacos na infância. Park MK. Park's Pediatric Cardiology for Practitioners. 7ª ed.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-53",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Clínica Médica",
    "text": "Homem de 50 anos é atendido em emergência com quadro de dispneia, tosse produtiva e dor torácica à direita há 4 dias, com piora progressiva. Relata história pregressa de diabetes e hipertensão arterial compensados. Nega tabagismo.\n\nO exame físico revela paciente hemodinamicamente estável, descorado 2+/4+; FR 24 irpm; à ausculta pulmonar, murmúrio vesicular abolido no terço inferior do hemitórax direito.\n\nÉ realizada radiografia de tórax, cujas imagens são mostradas a seguir.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Toracocentese com agulha.",
      "(B) Drenagem pleural em selo d'água.",
      "(C) Videotoracoscopia.",
      "(D) Biópsia pleural com agulha."
    ],
    "correctAnswer": 0,
    "alsoAccepted": [
      1
    ],
    "explanation": "Homem de 50 anos, diabético, com 4 dias de tosse produtiva, dor pleurítica, dispneia e murmúrio abolido na base direita: pneumonia com derrame pleural parapneumônico. As radiografias são em PA, perfil e decúbito lateral com raios horizontais (incidência de Laurell). A incidência de Laurell serve justamente para ver se o líquido escorre livremente e medir a espessura da lâmina: derrame livre com mais de 10 mm na Laurell indica toracocentese diagnóstica. O paciente está estável e o derrame ainda não foi caracterizado, então o primeiro passo é puncionar com agulha e analisar o líquido (aspecto, pH, glicose, LDH, proteínas, Gram, cultura, celularidade). O resultado define se é preciso drenar.\n\nRoteiro do derrame pleural:\n\n• Critérios de Light (exsudato se pelo menos 1): proteína pleural/sérica > 0,5; LDH pleural/sérica > 0,6; LDH pleural > 2/3 do limite superior sérico. Transudato: insuficiência cardíaca, cirrose, síndrome nefrótica. Exsudato: pneumonia, tuberculose, neoplasia, TEP, colagenoses.\n• Derrame parapneumônico não complicado: líquido livre, pH > 7,2, glicose > 60 mg/dL, Gram e cultura negativos → só antibiótico.\n• Derrame complicado ou empiema → drenagem torácica em selo d'água: pus franco, Gram ou cultura positivos, pH < 7,2, glicose < 60 mg/dL, derrame loculado, derrame volumoso (mais da metade do hemitórax) ou nível hidroaéreo.\n• Falha da drenagem (loculações, septações): fibrinolítico intrapleural (alteplase + dornase) ou videotoracoscopia para debridamento; decorticação nas fases tardias.\n• Exsudato linfocítico: pensar em tuberculose (ADA > 40 U/L) e neoplasia (citologia); biópsia pleural se a análise do líquido não esclarecer.",
    "commentary": "Alternativa (B): a drenagem em selo d'água é indicada quando a análise do líquido mostra derrame complicado ou empiema, ou se a imagem já mostrar loculação, nível hidroaéreo ou derrame de mais da metade do hemitórax. Se o examinador interpretar a imagem como derrame volumoso ou com nível hidroaéreo, a drenagem direta é defensável — por isso B também é aceita aqui.\n\nAlternativa (C): a videotoracoscopia é reservada a derrames loculados ou ao empiema que não resolve com drenagem e antibiótico; não é a primeira conduta.\n\nAlternativa (D): a biópsia pleural por agulha investiga exsudatos sem diagnóstico (tuberculose, neoplasia) depois da toracocentese; não é conduta inicial no derrame associado a pneumonia aguda.",
    "tip": "Derrame + pneumonia: Laurell com lâmina > 10 mm = toracocentese diagnóstica. Drenar se pus, Gram/cultura positivos, pH < 7,2, glicose < 60, loculação ou derrame > metade do hemitórax.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia. Diretrizes brasileiras para pneumonia adquirida na comunidade em adultos imunocompetentes. J Bras Pneumol. Light RW. Pleural Diseases. 6ª ed. British Thoracic Society Guideline for Pleural Disease, 2023.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito técnico revisado: a resposta adotada passou a ser A (toracocentese), com B (drenagem) também aceita. A incidência de Laurell está na prova para indicar punção diagnóstica de derrame livre; a drenagem direta só se justificaria se a imagem mostrar nível hidroaéreo, loculação ou derrame de mais da metade do hemitórax.",
    "image": "/images/sugenamed1-53.webp"
  },
  {
    "id": "sug-enamed1-54",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher procura atendimento no 12º dia pós-parto normal por apresentar febre de 40 °C e dor na mama esquerda.\n\nO exame físico revela aumento de temperatura, hiperemia e aumento do volume no quadrante medial superior da mama. Não foi evidenciada área de amolecimento nem ponto de flutuação.\n\nO exame ultrassonográfico mostra área delimitada medindo 4 cm de conteúdo líquido espesso na região.\n\nQual é o manejo adequado para esse caso?",
    "options": [
      "(A) Realizar drenagem cirúrgica com colocação de dreno.",
      "(B) Puncionar área com agulha grossa para esvaziamento do abscesso.",
      "(C) Prescrever compressa aquecida até drenagem espontânea do abscesso.",
      "(D) Orientar a suspensão da amamentação até resolução do quadro."
    ],
    "correctAnswer": 1,
    "explanation": "Puérpera no 12º dia com febre de 40 °C, dor, calor, hiperemia e aumento de volume num quadrante da mama, e ultrassonografia com coleção delimitada de 4 cm com conteúdo espesso: abscesso mamário lactacional, complicação da mastite. A ausência de flutuação ao exame não exclui abscesso — por isso a ultrassonografia é indicada quando a mastite não melhora ou há massa. O tratamento é esvaziar a coleção, hoje de preferência por punção aspirativa com agulha grossa (guiada por ultrassom, repetida se necessário), associada a antibiótico antiestafilocócico e manutenção da amamentação ou da ordenha.\n\nRoteiro das intercorrências mamárias na lactação:\n\n• Ingurgitamento: mamas cheias, endurecidas e doloridas, bilateral, nos primeiros dias → mamadas frequentes, ordenha da aréola, compressas frias.\n• Ducto obstruído: nódulo doloroso localizado, sem febre → esvaziar a mama, mudar posições.\n• Mastite: área em cunha vermelha, quente e dolorosa, com febre e mal-estar; Staphylococcus aureus é o principal agente → manter a amamentação, esvaziar a mama, analgesia, antibiótico (cefalexina ou dicloxacilina por 10–14 dias; clindamicina ou sulfametoxazol-trimetoprima se suspeita de MRSA ou alergia).\n• Abscesso: coleção na ultrassonografia, com ou sem flutuação → punção aspirativa (com cultura) + antibiótico; drenagem por cateter ou incisão cirúrgica se a coleção for grande, multiloculada, se a punção falhar ou se a pele estiver comprometida.\n• Amamentação: continuar na mama não afetada e, na afetada, se o local da punção ou incisão permitir; se não, ordenhar para manter a produção e evitar estase.",
    "commentary": "Alternativa (A): a drenagem cirúrgica com dreno é opção quando a punção falha, em abscessos muito grandes ou multiloculados, ou com necrose de pele; como 1ª escolha num abscesso único de 4 cm, é mais invasiva do que o necessário e deixa cicatriz maior.\n\nAlternativa (C): compressas quentes não resolvem uma coleção purulenta já formada e esperar a drenagem espontânea pela pele expõe a paciente a necrose e sepse.\n\nAlternativa (D): suspender a amamentação aumenta a estase do leite e piora o quadro; o leite não faz mal ao bebê. A amamentação deve continuar ou, se a mama afetada não puder ser oferecida, ser substituída pela ordenha.",
    "tip": "Mastite que não melhora ou com massa: ultrassom. Abscesso = punção aspirativa (guiada por ultrassom, repetida se preciso) + antibiótico antiestafilocócico. Não suspenda a amamentação.",
    "reference": "Mitchell KB et al. Academy of Breastfeeding Medicine Clinical Protocol #36: The Mastitis Spectrum, Revised 2022. Breastfeed Med, 2022. Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 23 — Saúde da criança: aleitamento materno e alimentação complementar, 2015.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-55",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Menino de 3 anos é levado pela mãe para consulta em uma Unidade Básica de Saúde. Foi acompanhado regularmente até 1 ano de idade e, após esse período, como nunca esteve doente, não foi mais levado para atendimento.\n\nA situação vacinal está adequada até os 12 meses, sem novas vacinas desde então. O município está monitorando casos crescentes de varicela na região.\n\nConsiderando-se o aumento de casos de varicela nesse município, qual é a orientação em relação ao esquema vacinal da criança?",
    "options": [
      "(A) Primeira dose nesta consulta e dose de reforço em 30 dias.",
      "(B) Dose de reforço aos 5 anos.",
      "(C) Primeira dose nesta consulta e dose de reforço aos 4 anos.",
      "(D) Manutenção do esquema vacinal atual."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 3 anos com vacinação em dia até 12 meses, sem nenhuma vacina depois disso. No calendário do Programa Nacional de Imunizações, a 1ª dose contra varicela é aos 15 meses (na vacina tetraviral — sarampo, caxumba, rubéola e varicela) e a 2ª aos 4 anos (varicela monovalente). Ela perdeu a dose dos 15 meses: deve receber agora a 1ª dose de varicela e a 2ª aos 4 anos (intervalo mínimo de 3 meses entre as doses em menores de 13 anos). A circulação do vírus no município reforça a urgência de atualizar a caderneta.\n\nCalendário da criança a partir de 1 ano (PNI) — pontos principais:\n\n• 12 meses: tríplice viral (1ª dose), reforço da pneumocócica 10-valente e reforço da meningocócica.\n• 15 meses: tetraviral (2ª dose de sarampo, caxumba e rubéola + 1ª dose de varicela), 1º reforço da DTP, reforço da vacina contra poliomielite e hepatite A (dose única).\n• 4 anos: 2º reforço da DTP e 2ª dose de varicela.\n• Influenza anual dos 6 meses aos menores de 6 anos.\n\nVacinação atrasada: não se reinicia esquema — aplicam-se as doses que faltam, respeitando intervalos mínimos, e é possível aplicar várias vacinas no mesmo dia. Nesta criança, além da varicela, faltam a 2ª dose de tríplice viral, o reforço da DTP e da pólio e a hepatite A — a tetraviral ou a tríplice viral + varicela resolve parte disso na mesma consulta.\n\nVaricela — profilaxia pós-exposição: vacina em até 5 dias após o contato (idealmente 3) para suscetíveis acima de 9 meses; imunoglobulina específica (VZIG) em até 10 dias para suscetíveis de risco (imunodeprimidos, gestantes, recém-nascidos de mães com varicela perto do parto, prematuros).",
    "commentary": "Alternativa (A): o reforço com 30 dias não segue o calendário de rotina; o intervalo mínimo entre doses de varicela em criança é de 3 meses, e a 2ª dose está prevista aos 4 anos.\n\nAlternativa (B): fala em \"dose de reforço aos 5 anos\", o que pressupõe uma 1ª dose que a criança não recebeu, e a idade da 2ª dose no calendário é 4 anos.\n\nAlternativa (D): manter o esquema atual deixa a criança sem nenhuma proteção contra varicela num município com casos em alta.",
    "tip": "Varicela no PNI: 15 meses (tetraviral) e 4 anos. Atrasou? Aplique as doses que faltam, sem reiniciar esquema, respeitando 3 meses de intervalo entre as doses de varicela na criança.",
    "reference": "Brasil. Ministério da Saúde. Calendário Nacional de Vacinação — Criança (atualizado). Brasil. Ministério da Saúde. Manual de Normas e Procedimentos para Vacinação, 2014. Sociedade Brasileira de Imunizações (SBIm). Calendário de vacinação da criança 2025/2026.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-56",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Determinada equipe de Saúde da Família está em treinamento de atualização a respeito de vacinação. Uma das técnicas de enfermagem dessa equipe solicita esclarecimentos sobre a vacina contra o papilomavírus humano em dose única.\n\nCom base nas recomendações do Ministério da Saúde e Sociedade Brasileira de Imunização acerca dessa vacina, qual evidência subsidia o esquema em dose única?",
    "options": [
      "(A) A vacinação de meninos confere proteção individual, com baixa contribuição para a imunidade de grupo.",
      "(B) A vacina promove maior adesão com aumento da cobertura, sem interferir na imunidade de rebanho.",
      "(C) A vacinação precoce aumenta a cobertura vacinal, o que elimina a incidência de verrugas genitais.",
      "(D) A vacina em dose única confere imunidade semelhante à de duas ou três doses em adolescentes saudáveis."
    ],
    "correctAnswer": 3,
    "explanation": "Em 2024, o Ministério da Saúde adotou o esquema de dose única da vacina contra HPV para meninas e meninos de 9 a 14 anos. A base é científica: ensaios clínicos e estudos de efetividade (como o KEN SHE, no Quênia, e os seguimentos de longo prazo na Costa Rica e na Índia) mostraram que uma dose em adolescentes saudáveis gera proteção contra infecção persistente pelos tipos vacinais semelhante à de 2 ou 3 doses, por pelo menos uma década. Com base nisso, a Organização Mundial da Saúde passou a recomendar, em 2022, a dose única. A maior adesão e cobertura são consequências bem-vindas, mas a evidência que sustenta a mudança é a eficácia equivalente.\n\nVacina HPV no SUS:\n\n• Vacina quadrivalente (tipos 6 e 11, responsáveis pela maioria das verrugas genitais; 16 e 18, responsáveis por cerca de 70% dos cânceres do colo do útero).\n• Rotina: meninas e meninos de 9 a 14 anos, dose única. Estratégias temporárias de resgate ampliaram a oferta para adolescentes de 15 a 19 anos não vacinados.\n• Grupos especiais (3 doses, esquema 0, 2 e 6 meses): pessoas vivendo com HIV, transplantados, pacientes oncológicos e outros imunossuprimidos, de 9 a 45 anos; também vítimas de violência sexual e usuários de PrEP, em faixas etárias definidas pelo Ministério.\n• Benefícios: prevenção dos cânceres de colo do útero, vulva, vagina, ânus, pênis e orofaringe, das lesões precursoras e das verrugas genitais; a vacinação de meninos protege diretamente os homens e contribui para a imunidade de rebanho.\n• A vacina não substitui o rastreamento do câncer do colo do útero.",
    "commentary": "Alternativa (A): a vacinação de meninos contribui, sim, para a imunidade de grupo (reduz a circulação do vírus e protege inclusive mulheres não vacinadas), além da proteção individual contra cânceres e verrugas.\n\nAlternativa (B): a maior adesão é vantagem operacional, não a evidência que sustenta o esquema; e a afirmação de que não interfere na imunidade de rebanho é errada — maior cobertura amplia o efeito de rebanho.\n\nAlternativa (C): nenhuma estratégia vacinal \"elimina\" a incidência de verrugas genitais; a vacinação reduz muito a incidência, mas a afirmação é absoluta e não é a base da dose única.",
    "tip": "HPV dose única (SUS desde 2024, 9 a 14 anos): proteção equivalente a 2–3 doses em adolescentes saudáveis. Imunossuprimidos continuam com 3 doses.",
    "reference": "Brasil. Ministério da Saúde. Nota técnica sobre a adoção do esquema de dose única da vacina HPV, 2024. World Health Organization. Human papillomavirus vaccines: WHO position paper, 2022. Barnabas RV et al. Efficacy of single-dose HPV vaccination among young African women (KEN SHE). NEJM Evid, 2022.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-57",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Criança de 4 anos é internada em enfermaria para investigação de hematúria. Durante diferentes atendimentos em Unidades de Pronto Atendimento (UPA), a mãe informava, com linguajar técnico e conhecimento médico incomum, diversos sintomas, alguns deles pouco compatíveis entre si.\n\nExame físico sem alterações. Os exames de urina realizados anteriormente nas UPAs resultaram positivos para grande quantidade de hemácias; outros exames laboratoriais e de imagem estão sem alterações.\n\nDurante a internação, observa-se que, nas amostras de urina colhidas pela equipe de saúde, não se evidencia hematúria, o que motivou maior vigilância da mãe.\n\nApós alguns dias de vigilância, a equipe de enfermagem observa que a mãe furou o próprio dedo e deixou cair sangue na urina coletada da criança.\n\nQual é a principal hipótese diagnóstica no caso?",
    "options": [
      "(A) Transtorno de sintomas somáticos.",
      "(B) Transtorno factício imposto a outro.",
      "(C) Transtorno dissociativo do cuidador.",
      "(D) Transtorno de simulação."
    ],
    "correctAnswer": 1,
    "explanation": "Criança com múltiplas idas a serviços de emergência por queixas variadas e pouco coerentes, mãe com linguagem técnica incomum, hematúria que aparece só nas amostras colhidas pela mãe e desaparece nas colhidas pela equipe, e flagrante da mãe pingando o próprio sangue na urina da criança. É o transtorno factício imposto a outro (antes chamado síndrome de Munchausen por procuração): o cuidador falsifica ou induz sinais de doença em quem está sob seus cuidados, apresentando-o como doente, com comportamento enganoso evidente mesmo sem ganho externo óbvio. Do ponto de vista da criança, é uma forma grave de maus-tratos, com mortalidade de cerca de 6–10%.\n\nDiagnóstico diferencial (DSM-5-TR):\n\n• Transtorno factício (imposto a si ou a outro): falsificação ou indução de sintomas, com engano; a motivação é assumir o papel de doente (ou de cuidador do doente), sem incentivo externo evidente.\n• Simulação: produção intencional de sintomas para obter ganho EXTERNO identificável (afastamento do trabalho, indenização, fugir de processo, obter drogas). Não é considerada transtorno mental.\n• Transtorno de sintomas somáticos: sintomas reais (não fabricados) com pensamentos, sentimentos e comportamentos excessivos relacionados a eles.\n• Transtorno conversivo (neurológico funcional): sintomas neurológicos sem produção intencional, incompatíveis com doença neurológica.\n\nConduta diante da suspeita:\n\n• Proteger a criança: manter internação, vigilância da coleta de exames, documentar com detalhes.\n• Equipe multiprofissional (pediatria, psicologia, serviço social, psiquiatria); não confrontar o cuidador sozinho e sem plano de segurança.\n• Notificação compulsória de violência (ficha do SINAN) e comunicação ao Conselho Tutelar (ECA, art. 13), com medidas legais quando necessário; avaliar irmãos.\n• Sinais de alerta: sintomas que só ocorrem na presença do cuidador, exames incoerentes, falha de tratamentos habituais, cuidador muito familiarizado com a linguagem médica e satisfeito com a internação, histórico de irmãos com doenças inexplicadas ou morte súbita.",
    "commentary": "Alternativa (A): no transtorno de sintomas somáticos os sintomas não são fabricados — o sofrimento é genuíno e o problema está na preocupação excessiva com eles; aqui houve falsificação deliberada do exame.\n\nAlternativa (C): \"transtorno dissociativo do cuidador\" não é uma categoria diagnóstica. Os transtornos dissociativos envolvem perturbação da memória, identidade ou consciência, e não a fabricação planejada de sinais em outra pessoa.\n\nAlternativa (D): simulação pressupõe objetivo externo identificável (dinheiro, benefício, evitar obrigação); o enunciado não traz nenhum ganho externo, e o padrão de engano repetido para que a criança seja vista como doente caracteriza o transtorno factício.",
    "tip": "Cuidador que fabrica ou induz doença na criança, sem ganho externo = transtorno factício imposto a outro (Munchausen por procuração): é maus-tratos. Proteja, documente, notifique e acione o Conselho Tutelar.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Flaherty EG, MacMillan HL; AAP Committee on Child Abuse and Neglect. Caregiver-Fabricated Illness in a Child: A Manifestation of Child Maltreatment. Pediatrics, 2013. Brasil. Lei nº 8.069/1990 (ECA).",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-58",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos procurou atendimento pela quarta vez em uma Unidade Básica de Saúde, em razão de quadro, iniciado há 4 meses, de febre e emagrecimento, seguido por dorsalgia.\n\nHá duas semanas, começou a apresentar formigamentos e perda de força nos membros inferiores. Refere incontinência urinária e constipação nos últimos dias. Não houve definição diagnóstica em consultas anteriores.\n\nAo exame, o paciente apresenta-se emagrecido, com mucosas descoradas, incapacitado de deambular; hemodinamicamente estável, com sopro cardíaco em foco aórtico 3+/6+, dor intensa à palpação dos processos espinhosos de T9 e T10; força nos membros inferiores simétrica, 2+/5+; reflexos Aquileu e patelar ausentes; sensibilidade dolorosa diminuída abaixo do dermátomo T12 bilateral e simetricamente; e sensibilidade vibratória preservada bilateralmente.\n\nO quadro clínico apresentado é compatível com lesão do neurônio motor:",
    "options": [
      "(A) Superior por mielorradiculopatia esquistossomótica.",
      "(B) Superior por êmbolo séptico cerebral secundário a endocardite subaguda.",
      "(C) Inferior da tabes dorsalis na sífilis terciária.",
      "(D) Inferior por tuberculose óssea e compressão medular."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso com 4 meses de febre, emagrecimento e dorsalgia, que evolui com paraparesia flácida (força 2/5, reflexos patelar e aquileu abolidos), nível de sensibilidade dolorosa em T12, sensibilidade vibratória preservada, retenção/incontinência urinária e constipação, e dor intensa à palpação de T9–T10. É uma síndrome de compressão medular torácica de evolução subaguda, num quadro infeccioso crônico: tuberculose vertebral (mal de Pott) com compressão medular. A preservação da vibração (cordões posteriores) com perda da dor (tratos espinotalâmicos) e motricidade sugere acometimento anterior da medula, como ocorre com o abscesso e o colapso do corpo vertebral, que crescem de frente para trás. O quadro flácido e arreflexo de instalação recente é compatível com choque medular ou acometimento do cone e das raízes; com o tempo, lesões da medula costumam evoluir com sinais de neurônio motor superior.\n\nRoteiro do mal de Pott:\n\n• Localização: coluna torácica baixa e lombar alta; destrói o corpo vertebral e o disco, formando abscesso paravertebral (às vezes \"abscesso frio\" no psoas) e cifose angular (giba).\n• Clínica: dor lombar ou dorsal crônica, febre baixa, sudorese noturna, emagrecimento; déficit neurológico por compressão (paraparesia, nível sensitivo, alteração esfincteriana).\n• Diagnóstico: ressonância da coluna (exame de escolha, com urgência quando há déficit), biópsia guiada por tomografia com cultura, pesquisa de BAAR, teste molecular e histologia (granuloma caseoso); radiografia de tórax e pesquisa de foco pulmonar.\n• Tratamento: esquema básico (rifampicina, isoniazida, pirazinamida e etambutol por 2 meses, depois rifampicina e isoniazida) prolongado para 12 meses nas formas osteoarticulares; cirurgia (descompressão e estabilização) se houver déficit neurológico, instabilidade ou abscesso volumoso.\n\nNeurônio motor superior × inferior:\n\n• Superior (encéfalo e medula): fraqueza, hiper-reflexia, espasticidade, sinal de Babinski (na fase aguda da lesão medular, choque medular com flacidez e arreflexia transitórias).\n• Inferior (corno anterior, raiz, nervo): fraqueza, hiporreflexia ou arreflexia, flacidez, atrofia e fasciculações.",
    "commentary": "Alternativa (A): a mielorradiculopatia esquistossomótica é diferencial importante de mielopatia lombossacra em área endêmica, mas não causa febre e emagrecimento de 4 meses com dor à palpação de processos espinhosos e destruição vertebral; e o quadro descrito é flácido e arreflexo, não de neurônio motor superior.\n\nAlternativa (B): o sopro aórtico e a febre lembram endocardite, mas um êmbolo séptico cerebral causa déficit focal assimétrico (hemiparesia, afasia), não paraparesia simétrica com nível sensitivo torácico e alteração esfincteriana — achados de lesão medular.\n\nAlternativa (C): a tabes dorsalis (neurossífilis) lesa os cordões posteriores e raízes dorsais: ataxia sensitiva, perda da sensibilidade vibratória e da propriocepção, dores lancinantes e pupila de Argyll Robertson. Aqui a vibração está preservada e há fraqueza importante com nível sensitivo.\n\nRessalva: com febre e sopro aórtico, espondilodiscite bacteriana (por exemplo, por endocardite) também entra no diferencial — a biópsia define o agente.",
    "tip": "Febre e emagrecimento crônicos + dor vertebral + paraparesia com nível sensitivo e esfíncteres = compressão medular infecciosa (mal de Pott até prova em contrário): ressonância urgente, biópsia e tratamento por 12 meses.",
    "reference": "Brasil. Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil. 2ª ed. atualizada, 2019. Garg RK, Somvanshi DS. Spinal tuberculosis: a review. J Spinal Cord Med, 2011.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-59",
    "module": "Pediatria",
    "text": "Durante visita de rotina a determinada creche local, uma equipe de saúde da família é informada sobre um surto, em várias crianças da creche, de lesões cutâneas com as mesmas características, em tronco e axilas, conforme a imagem a seguir.\n\nNesse caso, a conduta indicada é:",
    "options": [
      "(A) Expectante, sem afastar da creche as crianças acometidas.",
      "(B) Prescrição de aciclovir tópico, sem afastar da creche as crianças acometidas.",
      "(C) Remoção de lesões, afastando-se da creche as crianças acometidas.",
      "(D) Expectante, afastando-se da creche as crianças acometidas até a remissão das lesões."
    ],
    "correctAnswer": 0,
    "explanation": "Várias crianças da mesma creche com pequenas pápulas cor da pele ou peroladas, agrupadas no tronco e nas axilas: molusco contagioso, infecção cutânea benigna causada por um poxvírus, transmitida por contato direto, fômites (toalhas) e autoinoculação. A lesão típica é uma pápula de 2–5 mm, brilhante, com umbilicação central. A doença é autolimitada — as lesões regridem sozinhas em 6 a 12 meses (às vezes até 2–4 anos), em geral sem cicatriz. A conduta habitual é expectante, sem afastar a criança da creche, com medidas de higiene.\n\nRoteiro do molusco contagioso:\n\n• Quem: crianças de 2 a 10 anos (especialmente com dermatite atópica), adultos por transmissão sexual (lesões genitais) e imunossuprimidos (lesões numerosas e grandes — em adulto com lesões extensas, testar HIV).\n• Diagnóstico: clínico. O sinal BOTE (\"beginning of the end\") — inflamação ao redor das lesões — indica resposta imune e regressão próxima.\n• Conduta expectante: na maioria das crianças.\n• Tratar quando: lesões numerosas ou que se espalham, desconforto, coceira, infecção secundária, lesões genitais, imunossupressão ou desejo da família. Opções: curetagem (com anestésico tópico), crioterapia, hidróxido de potássio tópico, cantaridina.\n• Creche e escola: não há necessidade de afastamento; cobrir as lesões visíveis com roupa ou curativo, não compartilhar toalhas, evitar coçar e manipular.\n\nOutras dermatoses frequentes em creches: impetigo (crostas melicéricas; afastar até 24 h após início do antibiótico), escabiose (prurido noturno, sulcos; tratar a criança e os contatos, afastar até o dia seguinte ao tratamento), varicela (vesículas em vários estágios; afastar até todas virarem crostas), tinha do corpo.",
    "commentary": "Alternativa (B): aciclovir age sobre herpes-vírus (herpes simples e varicela-zóster), não sobre o poxvírus do molusco; o tratamento não tem efeito.\n\nAlternativa (C): remover as lesões (curetagem) não é obrigatório: é doloroso para a criança, pode deixar cicatriz e fica reservado a casos selecionados. E afastar da creche não é necessário.\n\nAlternativa (D): a conduta expectante está certa, mas afastar as crianças até a remissão das lesões não se justifica — a remissão pode levar meses a anos, o prejuízo seria grande e a transmissão é controlada com medidas simples de higiene.\n\nRessalva: o diagnóstico depende da imagem original; se as lesões forem de outra doença, a conduta muda.",
    "tip": "Pápulas peroladas umbilicadas em criança = molusco contagioso (poxvírus). Autolimitado: observar, sem afastar da creche; cobrir lesões e não compartilhar toalhas. Aciclovir não funciona.",
    "reference": "Sociedade Brasileira de Dermatologia. Molusco contagioso. Centers for Disease Control and Prevention (CDC). Molluscum Contagiosum — clinical guidance. American Academy of Pediatrics. Red Book 2024–2027.",
    "tags": [
      "pediatria",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (gabarito corrigido). Se o diagnóstico baseado na fotografia original for outro, a classificação precisa ser revisada; a visualização não substitui exame da lesão.",
    "image": "/images/sugenamed1-59.webp"
  },
  {
    "id": "sug-enamed1-60",
    "topography": "4.2",
    "topic": "Torção testicular",
    "module": "Cirurgia",
    "text": "Adolescente de 14 anos é atendido em uma Unidade de Pronto Atendimento (UPA) com relato de dor súbita e persistente, de forte intensidade, na região escrotal, à esquerda, com início há 12 horas.\n\nÉ encaminhado ao serviço de referência, onde é atendido 6 horas após o atendimento inicial na UPA.\n\nO exame físico revela elevação do testículo esquerdo, que estava aumentado de tamanho e fixo, em relação ao testículo direito.\n\nNesse momento, a conduta indicada é:",
    "options": [
      "(A) Analgesia com opiáceo e antibioticoterapia.",
      "(B) Ultrassonografia de testículo com Doppler e orquidopexia.",
      "(C) Anti-inflamatório e observação hospitalar.",
      "(D) Exploração cirúrgica e orquiectomia."
    ],
    "correctAnswer": 3,
    "explanation": "Adolescente de 14 anos (pico da torção entre 12 e 18 anos) com dor escrotal súbita, intensa e contínua há 12 horas, chegando ao serviço de referência com cerca de 18 horas de evolução; testículo elevado, aumentado e fixo: torção do cordão espermático. É emergência cirúrgica — o diagnóstico é clínico, e a ultrassonografia com Doppler não deve atrasar a exploração quando a suspeita é alta. Com 18 horas de isquemia, a chance de o testículo estar inviável é grande, e a alternativa D (exploração cirúrgica e orquiectomia) é a que contempla a urgência da exploração. Na cirurgia, destorce-se o cordão e avalia-se a viabilidade: testículo viável → orquidopexia; necrótico → orquiectomia. Em ambos os casos, faz-se orquidopexia do lado oposto.\n\nRoteiro do escroto agudo:\n\n• Torção testicular: dor súbita e intensa, náuseas e vômitos, testículo alto e horizontalizado, reflexo cremastérico ausente, sinal de Prehn negativo (elevar o testículo não alivia a dor). Deformidade em badalo de sino predispõe.\n• Tempo e salvamento: < 6 horas, viabilidade de cerca de 90–100%; 12–24 horas, cerca de 20–50%; > 24 horas, < 10%.\n• Distorção manual (no sentido de \"abrir o livro\", de medial para lateral) pode ser tentada se a cirurgia for demorar, mas não substitui a exploração.\n• Torção do apêndice testicular: dor mais gradual e localizada no polo superior, sinal do ponto azul, reflexo cremastérico presente → analgesia e repouso.\n• Orquiepididimite: dor progressiva, febre, sintomas urinários, sinal de Prehn positivo, reflexo presente, Doppler com aumento de fluxo → antibiótico (em sexualmente ativos, ceftriaxona + doxiciclina).\n• Escore TWIST (edema testicular, consistência endurecida, ausência do reflexo cremastérico, náuseas/vômitos, testículo alto) ajuda: escore alto → cirurgia direta, sem esperar exame.",
    "commentary": "Alternativa (A): analgesia com opioide e antibiótico trataria orquiepididimite; na torção, atrasa a cirurgia e condena o testículo.\n\nAlternativa (B): a orquidopexia é o que se faz se o testículo estiver viável, mas condicionar a cirurgia ao Doppler atrasa a exploração num quadro com alta suspeita clínica. Além disso, após 18 horas, a probabilidade de testículo viável é baixa.\n\nAlternativa (C): anti-inflamatório e observação é conduta para torção de apêndice testicular, não para torção do cordão.\n\nRessalva: nenhuma alternativa descreve a conduta ideal — exploração imediata com decisão na cirurgia entre orquidopexia e orquiectomia, mais orquidopexia contralateral. A orquiectomia só deve ser feita se o testículo estiver inviável após a destorção.",
    "tip": "Escroto agudo com testículo alto, horizontal e sem reflexo cremastérico = torção: exploração cirúrgica imediata, sem esperar Doppler. Viável → orquidopexia; necrótico → orquiectomia; sempre fixar o outro lado.",
    "reference": "Sociedade Brasileira de Urologia. Escroto agudo — diretrizes. European Association of Urology (EAU)/ESPU Guidelines on Paediatric Urology, 2024 (capítulo Escroto agudo).",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação). Nenhuma alternativa expressa exploração imediata com decisão intraoperatória de preservação versus orquiectomia."
  },
  {
    "id": "sug-enamed1-61",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 54 anos, na menopausa há 6 anos, queixa-se de saída de secreção pelo mamilo direito. O exame físico mostra: mamas simétricas, sem abaulamentos ou retrações à inspeção estática e dinâmica, com linfonodos axilares e supraclaviculares não palpáveis; nódulo subareolar direito, pouco móvel, endurecido, indolor, de 2 × 2 cm; e presença de derrame papilar sanguinolento uniductal à expressão.\n\nNesse caso, o exame complementar que deve ser realizado é:",
    "options": [
      "(A) Ultrassonografia.",
      "(B) Ressonância magnética.",
      "(C) Biópsia.",
      "(D) Citologia."
    ],
    "correctAnswer": 0,
    "explanation": "Derrame papilar unilateral, uniductal e sanguinolento, ainda mais acompanhado de nódulo subareolar endurecido em mulher de 54 anos, é secreção patológica e deve ser investigado para papiloma intraductal, ectasia ductal e neoplasia. A abordagem inicial inclui mamografia diagnóstica e ultrassonografia direcionada ao retroaréolo; entre as opções oferecidas, o ultrassom é exame complementar pertinente.",
    "commentary": "Citologia de secreção tem sensibilidade limitada e não substitui imagem; ressonância é considerada quando mamografia/US não esclarecem ou por indicação específica; biópsia depende da avaliação do nódulo/alvo suspeito, mas pode ser necessária precocemente. Não tranquilizar apenas por ausência de linfonodos palpáveis.",
    "tip": "Derrame papilar espontâneo unilateral sanguinolento + nódulo subareolar = sinal de alerta: comece investigação por imagem e planeje biópsia se indicada.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-62",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Pediatria",
    "text": "Menina de 4 anos, pertencente à comunidade indígena Yanomami, localizada em área de ocupação ilegal de garimpos, é atendida na Unidade do Distrito Sanitário Especial Indígena com quadro de irritabilidade, agitação, atraso do desenvolvimento neuropsicomotor, redução de fluência verbal, dormência e perda de sensibilidade nos pés.\n\nA criança iniciou acompanhamento na Unidade há 2 anos e não há registro em prontuário de exames prévios, nem do teste do pezinho.\n\nNo caso clínico apresentado, o diagnóstico provável é:",
    "options": [
      "(A) Desnutrição crônica.",
      "(B) Intoxicação por mercúrio.",
      "(C) Hipotireoidismo.",
      "(D) Deficiência de B12."
    ],
    "correctAnswer": 1,
    "explanation": "Garimpo de ouro ilegal frequentemente libera mercúrio ambiental; o metal, especialmente metilmercúrio na cadeia alimentar, é neurotóxico. Irritabilidade, alteração comportamental, prejuízo do desenvolvimento, alteração de linguagem e neuropatia sensitiva podem decorrer de exposição crônica. A associação epidemiológica com garimpo e déficits neurológicos torna intoxicação por mercúrio hipótese principal, exigindo identificação de exposição e medidas de saúde ambiental.",
    "commentary": "Hipotireoidismo e deficiência de B12 podem causar atraso e neuropatia, mas não explicam tão diretamente o cenário de exposição; desnutrição crônica pode coexistir e não deve ser ignorada. Solicitar avaliação toxicológica conforme forma de exposição, além de abordagem comunitária e proteção da criança.",
    "tip": "Déficit neurocognitivo e parestesias em área de garimpo = pense em exposição ao mercúrio; a história ambiental é parte do diagnóstico.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-63",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Em Unidade Básica de Saúde localizada às margens de rodovia movimentada e polo industrial, observou-se aumento de 300% dos atendimentos de crises respiratórias de sibilância no último mês, fora do período sazonal para vírus respiratórios.\n\nNesse caso, a equipe multiprofissional deve, prioritariamente:",
    "options": [
      "(A) Realizar notificação compulsória dos casos à Secretaria Estadual de Saúde.",
      "(B) Articular ações intersetoriais de vigilância ambiental e mitigação da exposição.",
      "(C) Ampliar a oferta de consultas médicas e distribuição de broncodilatadores.",
      "(D) Iniciar campanha de vacinação contra influenza e pneumococo no território."
    ],
    "correctAnswer": 1,
    "explanation": "Aumento de 300% de crises de sibilância num território adjacente a rodovia e polo industrial, fora da estação de vírus, sugere desencadeantes ambientais, como material particulado, dióxido de nitrogênio e emissões industriais. A abordagem coletiva deve investigar temporalidade, mapas de exposição, fontes poluentes e fatores ocupacionais/ambientais, envolvendo vigilâncias, órgãos ambientais e gestores para reduzir a exposição.",
    "commentary": "Notificação compulsória individual de toda crise de sibilância não é a estratégia central; mais consultas/bronco­dilatadores tratam eventos sem agir sobre a causa; vacina respiratória não resolve pico não sazonal ambiental. É importante também garantir assistência aos pacientes sintomáticos.",
    "tip": "Crises respiratórias agrupadas perto de rodovia/polo industrial fora da sazonalidade = investigue exposição ambiental coletiva, não apenas prescreva broncodilatadores.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-64",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Clínica Médica",
    "text": "Estudante universitário de 20 anos busca Unidade Básica de Saúde com relato de que, nos últimos 40 dias, apresentou 3 episódios de dor no peito, falta de ar, sudorese profusa, sensação de estar fora do próprio corpo e medo de morrer.\n\nInforma que tais sintomas foram autolimitados, mas que, mesmo assim, buscou atendimento de emergência, tendo realizado exames complementares, cujos resultados estavam dentro dos padrões de normalidade.\n\nEle afirma temer ir a certos locais e novamente ter um \"acesso de loucura\", o que vem impactando sua rotina. Nega histórico de doenças ou uso de medicamentos. Nega outros sintomas.\n\nQual a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transtorno de Sintomas Somáticos.",
      "(B) Transtorno de Pânico.",
      "(C) Transtorno de Ansiedade Generalizada.",
      "(D) Transtorno de Ansiedade de Doença."
    ],
    "correctAnswer": 1,
    "explanation": "O transtorno de pânico envolve crises abruptas de medo intenso com sintomas físicos (dispneia, dor torácica, sudorese) e cognitivos (medo de morrer, despersonalização). A recorrência dos ataques associada a preocupação persistente e evitação de locais por receio de novos episódios sustenta transtorno de pânico. A duração de 40 dias já permite suspeita de alteração comportamental persistente, após investigar causas médicas/substâncias.",
    "commentary": "Ansiedade generalizada gera preocupação crônica difusa por múltiplos temas; ansiedade de doença centra-se na convicção de estar doente; sintomas somáticos têm foco persistente em sintomas físicos, sem necessariamente ataques de pânico recorrentes. A resposta ao tratamento envolve TCC e, quando indicado, ISRS.",
    "tip": "Crises abruptas de medo com palpitação, falta de ar e despersonalização, seguidas de medo de novas crises e evitação = transtorno do pânico.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-65",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Homem de 50 anos, motorista de ônibus, comparece à consulta em Unidade Básica de Saúde para solicitar prescrição de morfina para tratamento de dor lombar.\n\nNo atendimento, o médico verifica registro de prescrições de codeína e paracetamol por vários meses, seguidas de tramadol nos últimos 2 meses. Considera a hipótese de dependência química.\n\nAo exame físico: paciente orientado no tempo e no espaço; PA 120 × 80 mmHg; FC 80 bpm; sem outras alterações.\n\nNessa situação, o médico tem o dever de:",
    "options": [
      "(A) Informar os familiares do paciente sobre seu quadro.",
      "(B) Manter o sigilo a respeito do caso.",
      "(C) Comunicar a situação ao empregador do paciente.",
      "(D) Notificar as autoridades policiais."
    ],
    "correctAnswer": 1,
    "explanation": "Dependência ou uso problemático de opioides é informação de saúde protegida pelo sigilo médico. O profissional deve avaliar critérios diagnósticos, risco de overdose, direção profissional de veículo e segurança, propor cuidado e orientar sem comunicar automaticamente a terceiros. O paciente está orientado e não há autorização nem exceção legal explicitada para divulgar seus dados.",
    "commentary": "Informar familiares ou empregador sem consentimento pode violar confidencialidade; polícia não é destino rotineiro de suspeita de dependência. Exceções de sigilo são restritas e dependem de dever legal, justa causa e risco concreto, devendo ser avaliadas individualmente.",
    "tip": "Suspeita de dependência em adulto não autoriza avisar família ou empregador: sigilo e cuidado longitudinal são o padrão, salvo exceções legais.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-66",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Lactente de 2 meses é levado para consulta de rotina em uma Unidade Básica de Saúde. Está em aleitamento materno exclusivo e há queixa de regurgitações e vômitos frequentes após as mamadas. A mãe questiona se o leite materno está sendo insuficiente para saciar a criança.\n\nAo exame: bom estado geral, sem sinais de desidratação ou desconforto respiratório; ganho ponderal médio de 33 gramas/dia.\n\nA conduta adequada nesse caso é:",
    "options": [
      "(A) Orientar a mãe a complementar a amamentação com fórmula infantil e agendar retorno em 15 dias.",
      "(B) Prescrever medicamento antirrefluxo e orientar a mãe a observar a resposta ao tratamento.",
      "(C) Orientar a mãe sobre posicionamento adequado durante e após as mamadas e agendar retorno para acompanhamento.",
      "(D) Indicar o uso de fórmula antirrefluxo e encaminhar a criança para gastroenterologia pediátrica."
    ],
    "correctAnswer": 2,
    "explanation": "Regurgitar após mamadas é comum aos 2 meses pela imaturidade do esfíncter esofagiano inferior, dieta líquida e decúbito. O lactente está ativo, hidratado e cresce cerca de 33 g/dia, evidência de ingestão suficiente e refluxo fisiológico, sem sinais de doença do refluxo gastroesofágico complicada. Orientar pega/posição durante alimentação, evitar oferta excessiva e manter vertical no colo por curto período enquanto acordado.",
    "commentary": "Fórmulas complementares/antirrefluxo e fármacos não são necessários diante de crescimento adequado. Segurança do sono: bebê SEMPRE em decúbito dorsal, em superfície firme e plana, mesmo com regurgitação; não indicar prona ou elevação improvisada do berço. Vigiar falha ponderal, sangue, vômitos biliosos e engasgos importantes.",
    "tip": "Lactente que regurgita, mas ganha 33 g/dia e está bem, geralmente tem refluxo fisiológico: oriente e acompanhe, sem retirar leite materno.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-67",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, cirrótico, Child-Pugh B, é atendido em um pronto-socorro com quadro de hematêmese volumosa iniciada há 2 horas.\n\nNa admissão, apresenta PA 80 × 50 mmHg e FC 124 bpm. Após reposição volêmica e transfusão de duas unidades de hemoconcentrado, ocorre estabilização hemodinâmica.\n\nNo momento, o paciente está confuso, com sinais clínicos de encefalopatia hepática grau I.\n\nQual é a conduta nesse momento?",
    "options": [
      "(A) Iniciar inibidor da bomba de prótons intravenoso.",
      "(B) Encaminhar para cirurgia de descompressão portal.",
      "(C) Realizar ligadura elástica endoscópica.",
      "(D) Indicar shunt portossistêmico intra-hepático transjugular."
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico Child-Pugh B com hematêmese maciça apresenta provável hemorragia digestiva alta varicosa por hipertensão portal. Após ressuscitação com metas de transfusão e estabilização das vias aéreas, a endoscopia precoce permite diagnosticar e tratar varizes esofágicas por ligadura elástica. Devem ser iniciados de forma precoce vasoativos (por exemplo, terlipressina ou octreotida conforme disponibilidade) e antibioticoprofilaxia, pois reduzem complicações e ressangramento.",
    "commentary": "IBP sozinho não controla ruptura de variz; cirurgia de descompressão não é primeira linha; TIPS é reservado a ressangramento ou grupos selecionados de alto risco, após avaliação. Confusão/encefalopatia reforça necessidade de proteção da via aérea e evitar sedação desnecessária.",
    "tip": "Cirrótico com hematêmese estabilizada: suspeite sangramento varicoso, use vasoativo/antibiótico e faça endoscopia terapêutica; TIPS é para situações selecionadas.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-68",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta com 14 semanas e 2 dias de idade gestacional, pela data da última menstruação e pela ultrassonografia, com sorologias IgG e IgM reagentes para toxoplasmose, foi encaminhada por uma Unidade Básica de Saúde a atendimento especializado para avaliação e realização de pré-natal.\n\nA paciente relata estar assintomática.\n\nConforme recomendações do Ministério da Saúde do Brasil, qual conduta deve ser adotada nesse momento?",
    "options": [
      "(A) Iniciar espiramicina e solicitar teste de avidez para IgG.",
      "(B) Prescrever pirimetamina, sulfadiazina e ácido folínico.",
      "(C) Indicar amniocentese para pesquisa de DNA do toxoplasma.",
      "(D) Tratar com espiramicina associada ao ácido folínico."
    ],
    "correctAnswer": 0,
    "explanation": "IgG e IgM reagentes em gestante de 14 semanas podem representar infecção recente ou IgM persistente de infecção anterior. A diretriz nacional recomenda iniciar espiramicina enquanto esclarece o momento da infecção, com teste de avidez de IgG obtido preferencialmente da amostra inicial. Alta avidez antes de 16 semanas tende a afastar aquisição durante a gestação; baixa/intermediária sustenta investigação e tratamento da gestante.",
    "commentary": "Esquema tríplice com pirimetamina/sulfadiazina/ácido folínico depende da idade gestacional e confirmação/forte suspeita de infecção fetal, não é primeiro passo automático aqui. Amniocentese para PCR deve respeitar idade gestacional mínima e intervalo da provável infecção; ácido folínico não é componente habitual isolado da espiramicina.",
    "tip": "Toxo IgM+ e IgG+ na gestação não define infecção aguda: investigue avidez conforme idade gestacional e inicie estratégia indicada enquanto esclarece.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (cuidado na interpretação). Fonte: Ministério da Saúde, Nota Técnica nº 100/2022 e Manual de Gestação de Alto Risco."
  },
  {
    "id": "sug-enamed1-69",
    "topography": "10",
    "topic": "Malária",
    "module": "Clínica Médica",
    "text": "Homem de 32 anos, pardo, jangadeiro, residente no Amazonas, sem histórico de viagens recentes para fora do estado, deu entrada em uma Unidade de Pronto Atendimento com história de dor abdominal no hipocôndrio direito, icterícia, febre, calafrios e rebaixamento do nível de consciência.\n\nOs exames laboratoriais de admissão mostraram hiperbilirrubinemia de 45 mg/dL (VR: 0,2 a 1,1 mg/dL), acidose metabólica grave, trombocitopenia, creatinina 5,8 mg/dL (VR: 0,63 a 1,06 mg/dL) e leucocitose com desvio até metamielócitos. O escore APACHE II foi 37.\n\nConsiderando-se a principal hipótese diagnóstica para o quadro, que exame deve ser realizado para a confirmação diagnóstica?",
    "options": [
      "(A) PCR em tempo real.",
      "(B) Gota espessa.",
      "(C) Sorologias.",
      "(D) Esfregaço delgado."
    ],
    "correctAnswer": 1,
    "explanation": "Malária grave na Amazônia pode apresentar febre, icterícia acentuada, trombocitopenia, lesão renal aguda, acidose metabólica e alteração de consciência, mesmo sem história de viagem fora do estado: a área de residência já é endêmica. A gota espessa é exame parasitológico sensível, rápido e tradicionalmente de escolha para confirmação e pesquisa de formas do Plasmodium. Esfregaço delgado auxilia especiação e parasitemia.",
    "commentary": "PCR pode ter maior sensibilidade em situações específicas, mas não é exame imediato de rotina em urgência; sorologia não confirma infecção ativa em tempo oportuno. Muito importante: colangite grave e leptospirose também são diferenciais, pelo padrão de icterícia e falência orgânica; avaliação e tratamento de sepse e malária não podem ser atrasados.",
    "tip": "Febre, icterícia, insuficiência renal e rebaixamento de consciência em área de malária = quadro grave. Confirme rapidamente por gota espessa sem atrasar suporte.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-70",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "A Secretaria de Saúde de um município de médio porte localizado em polo industrial de confecções identificou que mais de 300 costureiras da cidade apresentam, de forma recorrente, queixa de zumbidos e hipoacusia.\n\nNessa situação, cabe à gestão municipal da saúde:",
    "options": [
      "(A) Orientar a equipe da atenção primária a encaminhar as costureiras para o Instituto Nacional de Seguridade Social.",
      "(B) Acionar o Conselho Municipal de Saúde para que fiscalize as condições de trabalho nas empresas.",
      "(C) Suspender as atividades das empresas até haver comprovação de nexo causal entre a exposição a ruídos e os sintomas apresentados pelas costureiras.",
      "(D) Apoiar o Centro de Referência em Saúde do Trabalhador na investigação e no acompanhamento dos casos."
    ],
    "correctAnswer": 3,
    "explanation": "Centenas de costureiras com zumbido e hipoacusia em polo industrial levantam suspeita de perda auditiva induzida por ruído ocupacional (PAIR) e exposição coletiva. Cabe à vigilância em saúde do trabalhador, com apoio do CEREST, investigar ambiente e processos de trabalho, avaliar audiometrias, estabelecer nexo e articular medidas preventivas com os órgãos responsáveis, além de acompanhar as trabalhadoras.",
    "commentary": "Encaminhar diretamente ao INSS não resolve a exposição; Conselho Municipal de Saúde não substitui fiscalização técnica; interditar automaticamente todas as empresas sem inspeção e procedimento adequado não é resposta proporcional. Ação territorial articulada é central.",
    "tip": "Sintomas auditivos ligados a uma categoria profissional pedem investigação em saúde do trabalhador, com CEREST e avaliação de exposição ao ruído.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-71",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Homem de 82 anos, acompanhado de familiares, chega a uma Unidade de Pronto Atendimento com relato de agitação psicomotora, confusão mental, discurso incoerente, flutuação do nível de consciência, dificuldade marcante de manter a atenção e inversão do ciclo sono-vigília, com início há 24 horas.\n\nHá 3 anos, está em acompanhamento para quadro de perda de memória progressiva, mantendo relativa autonomia.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Doença de Alzheimer avançada.",
      "(B) Demência com Corpos de Lewy.",
      "(C) Esquizofrenia de início tardio.",
      "(D) Estado de delirium."
    ],
    "correctAnswer": 3,
    "explanation": "Delirium é síndrome aguda e flutuante de disfunção cerebral, caracterizada sobretudo por déficit de atenção, alteração da consciência, desorganização do pensamento e alteração do ciclo sono-vigília. O início em 24 horas e a flutuação diferenciam-no de demência progressiva; o Alzheimer prévio é fator predisponente, não explicação suficiente da piora súbita. A abordagem exige identificar precipitantes reversíveis como infecção, retenção urinária, distúrbios hidroeletrolíticos, dor ou medicamentos.",
    "commentary": "Demência de Alzheimer avançada não surge em 24 h; demência com corpos de Lewy pode flutuar, mas costuma ter história de parkinsonismo/alucinações visuais e curso crônico; esquizofrenia tardia não explica desatenção aguda e nível de consciência flutuante. Preservar orientação ambiental e evitar contenção/sedação indiscriminadas.",
    "tip": "Confusão que começou em 24 h e FLUTUA com desatenção = delirium, mesmo em paciente com demência prévia. Procure causa aguda precipitante.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-72",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Clínica Médica",
    "text": "Mulher de 54 anos, em tratamento regular de hipotireoidismo por tireoidite de Hashimoto, com uso de levotiroxina 75 mcg há 10 anos, retorna a uma Unidade Básica de Saúde com queixas de astenia e fadiga intensas.\n\nAo exame físico, mostra-se hipocorada (3+/4+), ictérica (2+/4+) e afebril. Exame neurológico mostra hiperreflexia patelar bilateral (3+/4+) e redução importante da sensibilidade vibratória nos membros inferiores, não sendo detectadas outras anormalidades objetivas. Endoscopia digestiva alta evidencia atrofia do pregueado mucoso no corpo e fundo gástricos. Biópsia mostra gastrite crônica atrófica de fundo gástrico.\n\nOs resultados dos últimos exames de controle hormonal são os seguintes:\n\n• TSH: 3,2 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• T4 livre: 1,2 ng/dL (VR: 0,92 a 1,68 ng/dL)\n\nSão solicitados novos exames, cujos resultados se encontram a seguir:\n\n• Hemoglobina: 6,2 g/dL (VR: 12,0 a 15,1 g/dL)\n• Hematócrito: 23% (VR: 40 a 50%)\n• Volume corpuscular médio: 114 fL (VR: 75 a 87 fL)\n• Leucócitos: 2.500/mm³ (VR: 4.450 a 10.950/mm³)\n• Plaquetas: 72.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Bilirrubina total: 3,3 mg/dL (VR: Até 1,2 mg/dL)\n• Bilirrubina indireta: 3,2 mg/dL (VR: Até 0,8 mg/dL)\n\nTGO, TGP, GGT, fosfatase alcalina, proteínas totais e frações e Razão Normalizada Internacional normais.\n\nContagem diferencial de leucócitos dentro da normalidade.\n\nQual é a hipótese diagnóstica provável nesse caso?",
    "options": [
      "(A) Anemia perniciosa.",
      "(B) Anemia de doença crônica.",
      "(C) Síndrome colestática.",
      "(D) Síndrome mielodisplásica."
    ],
    "correctAnswer": 0,
    "explanation": "A tireoidite de Hashimoto é doença autoimune que pode coexistir com gastrite autoimune do corpo/fundo gástrico, destruindo células parietais e reduzindo fator intrínseco; isso compromete absorção ileal de vitamina B12 e provoca anemia perniciosa. VCM 114 fL, Hb 6,2, leucopenia e trombocitopenia são sinais de megaloblastose intensa. Hiperbilirrubinemia indireta indica eritropoiese ineficaz/hemólise intramedular; perda de sensibilidade vibratória sugere comprometimento neurológico por B12.",
    "commentary": "Anemia de doença crônica geralmente é normocítica ou microcítica; colestase eleva sobretudo bilirrubina direta e enzimas canaliculares; mielodisplasia também causa citopenias/macrocitose, mas gastrite atrófica e neuropatia favorecem B12. Dosar B12, eventualmente MMA/homocisteína e anticorpos antifator intrínseco; tratar prontamente, sobretudo diante de déficit neurológico.",
    "tip": "Macrocitose importante + pancitopenia + neuropatia vibratória + gastrite atrófica = deficiência de B12 por anemia perniciosa.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-73",
    "module": "Pediatria",
    "text": "Lactente de 11 meses é levado à Unidade de Pronto Atendimento com história de febre (39,5 °C) há 4 dias, acompanhada de tosse seca persistente, coriza e conjuntivite.\n\nSegundo relato da mãe, há 24 horas, surgiram lesões hiperemiadas retroauriculares, com progressão para a face e tronco.\n\nExame físico: exantema maculopapular morbiliforme em face, região cervical posterior, tórax, membros superiores e inferiores. Hiperemia conjuntival importante e fotofobia.\n\nImunização: recebeu vacinas de rotina até os 9 meses.\n\nA principal hipótese diagnóstica para o caso é:",
    "options": [
      "(A) Sarampo.",
      "(B) Varicela.",
      "(C) Dengue.",
      "(D) Rubéola."
    ],
    "correctAnswer": 0,
    "explanation": "Sarampo provoca pródromo de febre alta, tosse, coriza e conjuntivite, seguido por exantema maculopapular que aparece atrás das orelhas/face e se dissemina no sentido cefalocaudal. Hiperemia conjuntival e fotofobia reforçam o diagnóstico. Um lactente de 11 meses com vacinação rotineira somente até 9 meses pode ainda não ter recebido a dose de rotina de tríplice viral, ficando suscetível.",
    "commentary": "Varicela costuma ter vesículas em diferentes estágios; dengue tem outro padrão sistêmico; rubéola geralmente causa quadro mais brando e linfadenopatia retroauricular/occipital. Sarampo exige isolamento respiratório, notificação imediata, coleta específica e investigação de contatos sem aguardar confirmação para medidas de saúde pública.",
    "tip": "Tríplice viral incompleta + febre, tosse, coriza, conjuntivite e exantema que começa retroauricular = sarampo: isole e notifique imediatamente.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-74",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Cirurgia",
    "text": "Homem de 72 anos é admitido na emergência de um hospital de pequeno porte com quadro de dor abdominal que, há 4 dias, se localizava no quadrante inferior esquerdo, mas hoje se tornou difusa. Relata febre não aferida e que está sem evacuar desde o início da dor, apesar de eliminar flatos.\n\nO exame físico revela: distensão abdominal; dor intensa à palpação no quadrante inferior esquerdo do abdome, com descompressão brusca positiva; temperatura axilar de 37,9 °C; PA 135 × 85 mmHg; FC 122 bpm. Realiza-se exame radiológico, cuja imagem é mostrada a seguir.\n\nO diagnóstico provável nesse caso é abdome agudo:",
    "options": [
      "(A) Isquêmico e perfurativo.",
      "(B) Obstrutivo e inflamatório.",
      "(C) Obstrutivo e isquêmico.",
      "(D) Inflamatório e perfurativo."
    ],
    "correctAnswer": 3,
    "explanation": "Dor inicialmente localizada na fossa ilíaca esquerda em idoso, febre e posteriormente dor difusa com descompressão brusca positiva sugerem diverticulite aguda do sigmoide complicada por perfuração e peritonite. A radiografia deve ser inspecionada em busca de ar livre subdiafragmático (pneumoperitônio), que mudaria o diagnóstico sindrômico para abdome agudo inflamatório e perfurativo. A instabilidade pode surgir rapidamente apesar de PA inicial preservada.",
    "commentary": "Abdome obstrutivo costuma apresentar vômitos, distensão e níveis hidroaéreos conforme local; isquemia intestinal costuma cursar com dor intensa desproporcional e fatores vasculares. O diagnóstico definitivo e a extensão devem ser avaliados por tomografia quando houver condições, com antibiótico e equipe cirúrgica de urgência.",
    "tip": "Dor em fossa ilíaca esquerda que vira peritonite difusa em idoso sugere diverticulite perfurada; ar livre subdiafragmático reforça abdome perfurativo.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (dependente de imagem). Confirmar presença de pneumoperitônio na radiografia fotografada antes de assumir D como incontroversa.",
    "image": "/images/sugenamed1-74.webp"
  },
  {
    "id": "sug-enamed1-75",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante com IG de 37 semanas é atendida na emergência de um hospital com relato de dores abdominais em cólicas de forte intensidade há meia hora, de início súbito, que progrediu para dor contínua. Nega movimentos fetais desde então e relata mal-estar, náuseas e sensação de esvaecimento.\n\nEvoluiu com sangramento vaginal de moderada intensidade. Ao exame, apresenta PA 160 × 110 mmHg, pulso taquicárdico e útero com atividade contrátil intensa sem variação do tônus. No exame especular, verifica-se sangramento através do orifício externo do colo uterino; e, ao toque, colo apagado 50% e sem dilatação do canal cervical.\n\nAusculta fetal de 90 bpm.\n\nNesse caso clínico, qual é o diagnóstico principal?",
    "options": [
      "(A) Descolamento prematuro de placenta.",
      "(B) Placenta prévia.",
      "(C) Rotura uterina.",
      "(D) Rotura de seio marginal."
    ],
    "correctAnswer": 0,
    "explanation": "Descolamento prematuro de placenta (DPP) é separação placentária antes do nascimento, frequentemente associada a hipertensão. A combinação de início súbito de dor forte que se torna contínua, útero hipertônico sem relaxamento entre contrações, sangramento vaginal e sofrimento fetal (FC 90 bpm) é clássica. Parte do sangramento pode ficar oculto atrás da placenta, e a gravidade fetal pode exceder o volume exteriorizado.",
    "commentary": "Placenta prévia costuma sangrar sem dor e com útero relaxado; rotura uterina frequentemente altera contorno uterino/cessa atividade e associa-se a cicatriz anterior; rotura de seio marginal não explica tão bem hipertonia e bradicardia fetal. É emergência obstétrica com estabilização materna e definição imediata da via de parto.",
    "tip": "Dor súbita contínua + hipertonia uterina + sangue vaginal + sofrimento fetal + hipertensão materna = descolamento prematuro da placenta.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-76",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Um médico de família acaba de assumir equipe em comunidade periférica de município de grande porte, com altos índices de violência e vulnerabilidade social. Devido à forte pressão assistencial na Unidade Básica de Saúde (UBS), ele decide iniciar seu planejamento pela priorização de ações emergenciais e realização de uma estimativa rápida no território.\n\nQue tipo de metodologias e estratégias esse médico deve utilizar para realizar essa estimativa?",
    "options": [
      "(A) Dados epidemiológicos gerais disponíveis em sistemas de informação em saúde nacionais com foco na avaliação dos indicadores de saúde da região.",
      "(B) Dados qualitativos de fontes primárias, como observação, documentos e informantes-chave da comunidade, e dados epidemiológicos locais.",
      "(C) Entrevistas individuais por amostragem com os moradores da região e coleta de dados do censo do IBGE.",
      "(D) Análise dos prontuários para verificar diagnósticos registrados em consulta médica dos pacientes do território atendidos na UBS."
    ],
    "correctAnswer": 1,
    "explanation": "Estimativa rápida participativa do território não pretende produzir censo exaustivo: busca reconhecer problemas prioritários mediante observação direta, entrevistas com informantes-chave, análise de documentos locais e indicadores epidemiológicos contextualizados. Combinar dados qualitativos de fontes primárias com informações secundárias permite compreender problemas de violência, vulnerabilidade, condições de vida e acesso e definir prioridades de intervenção.",
    "commentary": "A usa somente agregados nacionais e ignora singularidades territoriais; C demanda inquérito amostral formal, mais lento; D restringe-se aos usuários que já acessaram a UBS e perde os invisibilizados pelo serviço. A questão exige método de diagnóstico situacional rápido.",
    "tip": "Estimativa rápida combina ouvir informantes-chave, observar o território e consultar dados locais; censo sozinho não mostra a vida cotidiana.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-77",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Durante o período sazonal de chuvas, uma Unidade Básica de Saúde enfrenta um aumento expressivo de casos de dengue em seu território, que possui 10.000 habitantes. Ao consolidar os dados do mês de março, a equipe de vigilância registrou 500 casos confirmados da doença e 1 óbito.\n\nQual é o valor da taxa de letalidade nesse território?",
    "options": [
      "(A) 0,4%.",
      "(B) 0,1%.",
      "(C) 0,2%.",
      "(D) 0,5%."
    ],
    "correctAnswer": 2,
    "explanation": "Taxa de letalidade expressa a proporção de pessoas com uma doença que morrem por ela no período: óbitos entre casos ×100. Aqui há 1 óbito entre 500 casos confirmados, portanto 1/500 ×100 = 0,2%. É indicador de gravidade/desfecho entre doentes, não de risco populacional de adoecer.",
    "commentary": "O denominador de 10.000 habitantes seria usado para incidência acumulada: 500/10.000 = 5% no período, uma grandeza diferente. A interpretação dos percentuais em A, B e D não se sustenta pelo denominador correto.",
    "tip": "Letalidade usa ÓBITOS/CASOS da doença, não óbitos/população. Neste caso: 1 ÷ 500 × 100 = 0,2%.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-78",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos procura atendimento em Unidade Básica de Saúde por apresentar diminuição da libido e disfunção sexual masculina. Nega problemas pessoais e no relacionamento afetivo. Nos últimos meses, iniciou uso de bupropiona, para interrupção do tabagismo; amitriptilina, como profilaxia de enxaqueca; atorvastatina, para dislipidemia; e anlodipina, para hipertensão arterial sistêmica.\n\nNessa situação, qual dos fármacos em uso está associado às queixas principais do paciente?",
    "options": [
      "(A) Amitriptilina.",
      "(B) Anlodipina.",
      "(C) Atorvastatina.",
      "(D) Bupropiona."
    ],
    "correctAnswer": 0,
    "explanation": "Amitriptilina é antidepressivo tricíclico com ações serotoninérgicas, noradrenérgicas e anticolinérgicas; pode causar redução de libido, disfunção erétil e ejaculatório/orgásmica. Como a alteração surgiu após introdução de várias medicações, a relação temporal e o perfil de efeitos adversos tornam amitriptilina a hipótese mais provável, sem excluir causas vasculares, endócrinas e psicossociais.",
    "commentary": "Bupropiona tem baixa incidência de disfunção sexual e pode até ser usada em determinados contextos para esse problema; estatina e anlodipina podem ter relatos isolados, mas são menos característicos que tricíclicos. Rever indicação e dose, avaliar testosterona e risco cardiovascular conforme anamnese.",
    "tip": "Antidepressivo tricíclico tem forte associação com efeitos sexuais adversos; bupropiona tende a causar menos disfunção sexual.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-79",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Um jovem de 18 anos chega ao pronto-socorro sonolento, com dor abdominal e náuseas. Na admissão, apresenta glicemia de 450 mg/dL (VR: 70 a 99 mg/dL). Ao exame físico, encontra-se desidratado, taquicárdico, hipotenso e com hálito cetônico.\n\nPara confirmar a hipótese diagnóstica provável, o médico solicita gasometria arterial, além de pesquisa bioquímica na urina, considerando-se os seguintes valores de referência:\n\n• pH: 7,35 a 7,45\n• PaCO₂: 35 a 45 mmHg\n• HCO₃⁻: 22 a 26 mmol/L\n\nQuais são os resultados esperados para a gasometria arterial desse paciente?",
    "options": [
      "(A) pH 7,46; PaCO₂ 44,2 mmHg; e HCO₃⁻ 30,6 mmol/L.",
      "(B) pH 7,28; PaCO₂ 68,1 mmHg; e HCO₃⁻ 28,2 mmol/L.",
      "(C) pH 7,42; PaCO₂ 35,0 mmHg; e HCO₃⁻ 22,6 mmol/L.",
      "(D) pH 7,16; PaCO₂ 18,2 mmHg; e HCO₃⁻ 10,0 mmol/L."
    ],
    "correctAnswer": 3,
    "explanation": "Cetoacidose diabética combina deficiência efetiva de insulina, produção excessiva de corpos cetônicos e acidose metabólica com ânion gap elevado. Hálito cetônico, glicemia 450 mg/dL, desidratação e alteração de consciência sustentam o diagnóstico. Espera-se pH baixo e bicarbonato reduzido; a compensação respiratória ocorre por hiperventilação profunda, diminuindo PaCO₂. A alternativa D (pH 7,16, HCO₃ 10, PaCO₂ 18,2) reproduz esse padrão.",
    "commentary": "A apresenta alcalose metabólica; B combina acidemia com hipercapnia e bicarbonato elevado, mais compatível com acidose respiratória; C é essencialmente normal. Fórmula de Winter para HCO₃ de 10 dá PaCO₂ esperada ≈ 1,5×10+8 = 23 ±2 mmHg; PaCO₂ de 18,2 sugere alcalose respiratória adicional, embora D seja a única que demonstra cetoacidose metabólica importante.\n\nAtenção: A compensação da alternativa D está mais intensa do que a prevista por Winter; pode haver distúrbio misto.",
    "tip": "Cetoacidose: pH baixo, HCO₃ baixo e PaCO₂ baixa compensatória. Use a fórmula de Winter para checar se a compensação é adequada.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-80",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Pediatria",
    "text": "Adolescente de 11 anos, previamente hígido, é encaminhado para serviço ambulatorial de referência após apresentar valores repetidos de PA em torno de 150 × 90 mmHg. Relata cefaleia ocasional, sem outros sintomas.\n\nNo atendimento: PA 148 × 88 mmHg, em membros superiores, e 116 × 72 mmHg, em membros inferiores; FC 80 bpm; FR 24 irpm.\n\nExame físico: bom estado geral; ausculta cardíaca e respiratória sem alterações; palpação abdominal normal; pulsos radiais amplos e pulsos femorais diminuídos.\n\nA investigação inicial indicada para o caso é:",
    "options": [
      "(A) Ecocardiograma bidimensional.",
      "(B) Ultrassonografia renal com Doppler.",
      "(C) Dosagem de metanefrinas séricas.",
      "(D) Relação aldosterona/renina plasmática."
    ],
    "correctAnswer": 0,
    "explanation": "A coarctação da aorta é estreitamento congênito do istmo aórtico, habitualmente distal à subclávia esquerda. O estreitamento aumenta pressão antes da lesão (braços) e diminui depois dela (pernas), gerando pulsos femorais fracos/atrasados e diferença braço-perna. Criança de 11 anos com HAS de 150/90, PA de pernas significativamente menor e pulsos femorais diminuídos tem apresentação muito típica. Ecocardiograma com Doppler avalia anatomia e gradiente.",
    "commentary": "Ultrassom renal Doppler (B), metanefrinas (C) e relação aldosterona/renina (D) são pertinentes para outras causas secundárias de HAS pediátrica, mas não explicam tão diretamente o gradiente de pulsos e pressão entre membros.",
    "tip": "HAS nos braços + PA/pulsos menores nas pernas = coarctação de aorta. Solicite ecocardiograma com Doppler.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-81",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 20 anos, açougueiro, sofreu trauma com amputação do 1º quirodáctilo esquerdo devido a acidente com faca durante o trabalho. Seus colegas localizaram o dedo amputado e o colocaram dentro de um vidro seco. O paciente foi, então, conduzido para a Unidade Básica de Saúde mais próxima, onde o médico plantonista acionou o SAMU para deslocamento do paciente para serviço de referência.\n\nQual é a conduta a ser realizada pelo médico enquanto aguarda a transferência?",
    "options": [
      "(A) Acondicionar o dedo em saco plástico com soro fisiológico e antibiótico e mantê-lo em gelo.",
      "(B) Envolver o dedo em gaze estéril com solução salina e mantê-lo dentro de recipiente com gelo.",
      "(C) Lavar o dedo com solução salina estéril e mantê-lo em recipiente de vidro dentro de geladeira.",
      "(D) Colocar o dedo em saco plástico estéril e acondicioná-lo em freezer a −10 °C."
    ],
    "correctAnswer": 1,
    "explanation": "O sucesso de reimplante de dedo amputado depende de preservar tecidos sem dano térmico e reduzir isquemia. Envolver o segmento em gaze estéril levemente umedecida com soro fisiológico, colocá-lo em saco impermeável fechado e acomodar esse saco em outro recipiente com gelo e água fria realiza resfriamento indireto, sem contato direto com o gelo. O dedo não deve ficar imerso em soro nem congelado; tratar coto e transferir rapidamente ao serviço de cirurgia da mão.",
    "commentary": "A mantém o dedo potencialmente imerso em soro/antibiótico sem necessidade; C resfria insuficientemente e não protege adequadamente; D congela tecido e agrava necrose. B é a opção mais próxima, mas a redação omite uma barreira impermeável, indispensável para prevenir contato direto com gelo.",
    "tip": "Dedo amputado: gaze umedecida + saco impermeável + gelo externo. Nunca ponha tecido direto no gelo nem congele.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ressalva técnica). O método completo requer invólucro impermeável entre o tecido e o gelo."
  },
  {
    "id": "sug-enamed1-82",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 40 anos, nuligesta, comparece à consulta em Unidade Básica de Saúde em razão de estar tentando engravidar há um ano e meio, sem sucesso. Relata que tem parceiro único regular há 10 anos e que fazia uso de DIU até decidir engravidar. Possui ciclos menstruais regulares, sem comorbidades.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Encaminhar o casal para avaliação especializada.",
      "(B) Contraindicar a gestação, devido à idade avançada.",
      "(C) Prescrever ácido fólico e reavaliar em 6 meses.",
      "(D) Iniciar tratamento com hormônios."
    ],
    "correctAnswer": 0,
    "explanation": "Infertilidade é investigada após 12 meses de tentativas em mulheres com menos de 35 anos; a partir de 35 anos costuma-se antecipar para 6 meses, e aos 40 anos pode-se iniciar investigação imediatamente. Essa paciente tem 40 anos e tenta há 18 meses, justificando encaminhar o casal sem novas postergações. É preciso avaliar reserva ovariana, ovulação, trompas/cavidade uterina e espermograma, porque fatores masculinos também são frequentes.",
    "commentary": "Idade avançada não é contraindicação absoluta para gestação; apenas ácido fólico e esperar mais 6 meses desperdiçam tempo reprodutivo; iniciar hormônios sem investigação pode ser ineficaz ou inadequado. Prescrever folato como cuidado pré-concepcional pode ocorrer paralelamente, mas não substitui avaliação.",
    "tip": "Infertilidade aos 40 anos não pode aguardar mais 6 meses. Investigue o CASAL já; a idade modifica o tempo de encaminhamento.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-83",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 30 anos, com idade gestacional de 27 semanas, em consulta de rotina de pré-natal, apresenta teste de tolerância oral à glicose 75 g (TOTG) no valor de 190 mg/dL após uma hora.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Repetir o teste de tolerância à glicose.",
      "(B) Implementar mudança de estilo de vida.",
      "(C) Solicitar hemoglobina glicada.",
      "(D) Iniciar insulinoterapia."
    ],
    "correctAnswer": 1,
    "explanation": "No teste oral de tolerância à glicose com 75 g entre 24–28 semanas, um único valor alterado já permite diagnóstico de diabetes mellitus gestacional: jejum ≥92, 1 h ≥180 ou 2 h ≥153 mg/dL (observadas faixas que definem diabetes manifesto). Uma hora de 190 mg/dL excede 180 e confirma DMG. O primeiro passo é plano alimentar individualizado, atividade física adequada à gestação, educação e automonitorização de glicemias; se não alcançar metas, adicionar farmacoterapia, frequentemente insulina.",
    "commentary": "Não é necessário repetir TOTG, nem pedir HbA1c para confirmar diagnóstico já definido; iniciar insulina imediatamente pode ser apropriado em hiperglicemia grave, mas não é obrigatório só com a medida de 1 h isolada. Metas usuais incluem jejum <95 e 1 h pós-prandial <140 mg/dL.",
    "tip": "No TOTG 75 g da gestante, basta UM valor alterado (1 h ≥180 mg/dL) para diagnosticar DMG; comece dieta, exercício e monitorização.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-84",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Um beneficiário de plano de saúde privado com cobertura hospitalar e ambulatorial é submetido a laparotomia em caráter de emergência no Sistema Único de Saúde (SUS) por obstrução intestinal.\n\nCom relação à sistemática de ressarcimento referente a atendimentos prestados no SUS a beneficiários de planos de saúde, a qual se insere na lógica de regulação do setor de saúde suplementar, é correto afirmar que, no caso apresentado, a identificação do beneficiário para fins de ressarcimento ao SUS é de responsabilidade:",
    "options": [
      "(A) Da operadora do plano de saúde contratado pelo beneficiário, independentemente da complexidade do atendimento.",
      "(B) Do Ministério da Saúde, independentemente da cobertura contratual pelo plano de saúde.",
      "(C) Da Agência Nacional de Saúde Suplementar, estando condicionada à cobertura contratual pelo plano de saúde.",
      "(D) Do Conselho Nacional de Saúde, estando condicionada à complexidade do atendimento."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lei 9.656/1998, quando beneficiário de plano privado utiliza no SUS serviço coberto pelo contrato, há mecanismo de ressarcimento ao SUS. A ANS identifica os atendimentos mediante cruzamento de sistemas assistenciais e cadastro de beneficiários, verifica cobertura e notifica as operadoras para eventual ressarcimento. O exemplo cita laparotomia de emergência coberta por contrato ambulatorial-hospitalar, enquadrando a lógica legal.",
    "commentary": "A confunde agente pagador (operadora) com órgão que faz identificação regulatória; B e D atribuem a responsabilidade a órgãos que não executam esse processo. A resposta C identifica ANS e o requisito de cobertura contratual, mas a cobertura e elegibilidade precisam ser efetivamente verificadas.",
    "tip": "Ressarcimento ao SUS: ANS identifica e regula; operadora paga quando há cobertura contratual e requisitos legais.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-85",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Clínica Médica",
    "text": "Homem de 22 anos comparece a uma Unidade Básica de Saúde com quadro de intensa ansiedade, agitação psicomotora e sensação de \"não estar no próprio corpo\".\n\nRelata ter sido vítima de episódio de violência verbal e física motivada por homofobia, há 4 meses, na saída de uma festa e que, desde então, tem piora progressiva do funcionamento emocional e social, com intenso medo e pensamentos de que não deve confiar mais nas pessoas.\n\nRefere que não tem conseguido mais sair de casa, mesmo acompanhado. Queixa-se de apresentar pesadelos frequentes, com conteúdo e sentimento relacionados às agressões.\n\nNo acolhimento, o paciente encontra-se angustiado, com discurso coerente, porém permeado por medo intenso. Nega ideação suicida ativa no momento, mas relata pensamentos recorrentes de \"querer desaparecer\". Nega uso de álcool, substâncias psicoativas ou medicações.\n\nQual é a principal classe medicamentosa indicada para o tratamento farmacológico a longo prazo desse paciente?",
    "options": [
      "(A) Benzodiazepínico.",
      "(B) Antipsicótico atípico.",
      "(C) Estabilizador de humor.",
      "(D) Inibidor seletivo de recaptação de serotonina."
    ],
    "correctAnswer": 3,
    "explanation": "Pesadelos revivendo agressão, evitação de sair de casa, hipervigilância, mudanças persistentes de crenças e prejuízo funcional por 4 meses após violência sustentam transtorno de estresse pós-traumático (TEPT). O tratamento de primeira linha é psicoterapia focada no trauma quando acessível; ISRS, como sertralina/paroxetina, podem ser escolhidos para manejo farmacológico longitudinal, conforme avaliação e disponibilidade.",
    "commentary": "Benzodiazepínicos não são recomendados como tratamento crônico e podem prejudicar recuperação; antipsicóticos e estabilizadores de humor são reservados a indicações específicas, não rotina do TEPT. A fala de 'querer desaparecer' impõe investigação cuidadosa de risco suicida mesmo sem ideação ativa.",
    "tip": "Trauma + pesadelos + evitação + hipervigilância por mais de 1 mês = TEPT. Psicoterapia focada no trauma e ISRS são pilares.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-86",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 56 anos é levado a uma Unidade de Pronto Atendimento devido a dispneia, aumento da expectoração e sonolência. Sinais vitais: PA 130 × 90 mmHg; FC 114 bpm; FR 28 irpm; temperatura axilar 36,9 °C; SpO₂ 87% em ar ambiente.\n\nO exame físico revela: dedos da mão esquerda amarelados pelo uso de cigarro; diâmetro anteroposterior do tórax aumentado; à ausculta, roncos difusos com alguns sibilos expiratórios bilaterais. O paciente apresenta dificuldade no uso de dispositivos inalatórios.\n\nNesse caso, qual é a conduta imediata?",
    "options": [
      "(A) Prescrever N-acetilcisteína 600 mg via oral, 2 vezes ao dia.",
      "(B) Manter SpO₂ entre 95% e 98% com oxigênio suplementar.",
      "(C) Nebulizar com salbutamol 2,5 mg em 3 mL de solução de NaCl 0,9%.",
      "(D) Iniciar salmeterol associado a fluticasona com espaçador."
    ],
    "correctAnswer": 2,
    "explanation": "Tabagismo intenso, tórax em barril, expectoração aumentada, roncos/sibilos, taquipneia e SpO₂ 87% sugerem exacerbação aguda de DPOC com hipoxemia e risco de retenção de CO₂. Broncodilatador β₂ de curta ação, como salbutamol nebulizado, é apropriado quando há dificuldade em usar inaladores; pode-se associar anticolinérgico de curta ação. Oxigênio é necessário, mas deve ser titulado geralmente à meta de SpO₂ 88–92%, com gasometria devido à sonolência.",
    "commentary": "N-acetilcisteína isolada não trata broncoespasmo agudo; almejar saturação 95–98% indiscriminadamente pode piorar hipercapnia em DPOC; salmeterol/fluticasona é tratamento controlador, não resgate. Avaliar necessidade de corticoide sistêmico, antibióticos e ventilação não invasiva conforme gravidade.",
    "tip": "Exacerbação de DPOC com SatO₂ 87% e sibilos: broncodilatador de ação curta, oxigênio TITULADO 88–92% e atenção à hipercapnia.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-87",
    "topography": "4.1",
    "topic": "Nefrolitíase",
    "module": "Pediatria",
    "text": "Menina de 9 anos, sem doenças prévias, é levada a uma Unidade Básica de Saúde por apresentar dor abdominal intensa, recorrente, iniciada há cerca de 3 semanas.\n\nA dor ocorre em crises súbitas, com duração de minutos a uma hora, o que causa inquietação e busca por posição antálgica, com melhora espontânea. Refere aumento da frequência urinária, urina avermelhada em duas ocasiões, \"como chá escuro\", sem odor alterado, e \"ardência\" leve ao final da micção.\n\nNega febre, vômitos ou diarreia. O apetite está preservado.\n\nExame físico: bom estado geral; hidratada; afebril. Abdome sem reação de defesa, mas com dor à palpação profunda em flanco direito. Punho percussão positivo à direita.\n\nA causa mais frequentemente associada ao diagnóstico principal é:",
    "options": [
      "(A) Cistinúria.",
      "(B) Hipocitratúria.",
      "(C) Acidose tubular renal.",
      "(D) Hipercalciúria idiopática."
    ],
    "correctAnswer": 3,
    "explanation": "Dor cólica em flanco com irradiação variável, inquietação, hematúria e punho-percussão positiva indicam nefrolitíase/ureterolitíase. Em crianças, hipercalciúria idiopática é uma das alterações metabólicas mais prevalentes associadas à formação de cálculos de cálcio, inclusive sem hipercalcemia sérica. A investigação inclui US renal, urina, relação cálcio/creatinina conforme idade e estudo metabólico se recorrente.",
    "commentary": "Hipocitratúria também é fator importante, mas não é a causa mais frequentemente destacada em muitas séries pediátricas; cistinúria é menos prevalente e associa-se a cálculos específicos; acidose tubular renal distal predispõe a nefrocalcinose, porém não é a causa global mais comum. Febre/sinais de obstrução infectada mudam urgência.",
    "tip": "Cólica renal pediátrica + hematúria sugere cálculo; hipercalciúria idiopática é causa metabólica frequente em crianças.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-88",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Cirurgia",
    "text": "Mulher de 18 anos é atendida no pronto-socorro de um hospital de referência terciária após trauma automobilístico com colisão frontal em alta velocidade, há 90 minutos.\n\nFoi admitida com colar cervical e prancha rígida, apresentando estabilidade hemodinâmica e Glasgow 15. Após avaliação por imagem, o único achado foi fratura de processo transverso de C4.\n\nNa avaliação secundária, foi notado hematoma cervical em expansão à esquerda, sendo indicada exploração cirúrgica.\n\nQual é a estrutura vascular mais provável de ter sido acometida nesse caso?",
    "options": [
      "(A) Veia jugular interna.",
      "(B) Artéria carótida comum.",
      "(C) Veia subclávia.",
      "(D) Artéria vertebral."
    ],
    "correctAnswer": 3,
    "explanation": "A artéria vertebral atravessa os forames transversários das vértebras cervicais (classicamente de C6 a C1), tornando-se vulnerável em fraturas do processo transverso, especialmente quando atingem o forame transversário. Trauma cervical de alta energia com fratura de C4 sugere essa associação anatômica. Hematoma cervical expansivo demanda avaliação vascular urgente; angiotomografia cervical costuma ser exame relevante quando estabilidade permite.",
    "commentary": "Veia jugular interna e carótida comum situam-se na bainha carotídea, mais anterolateral; veia subclávia relaciona-se à base cervical. Contudo, o enunciado não comprova envolvimento do forame nem especifica de onde vem o hematoma, de modo que D é associação mais provável, não certeza anatômica absoluta.",
    "tip": "Fratura cervical que envolve processo/forame transversário levanta risco de lesão da artéria vertebral: avalie circulação cervical com urgência.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (dependente de anatomia). Hematoma expansivo é sinal de lesão vascular grave e exige abordagem rápida, independentemente da artéria identificada em prova."
  },
  {
    "id": "sug-enamed1-89",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher, com parto vaginal anterior, está em trabalho de parto há mais de 8 horas. Teve rotura de membranas espontânea há 3 horas e recebeu analgesia peridural há aproximadamente 40 minutos. Refere estar cansada, mas com dor bem tolerável no momento.\n\nNa avaliação obstétrica, percebe-se dinâmica uterina adequada (4 contrações fortes de 35 segundos em 10 minutos) e os batimentos cardíacos fetais apresentam pouca variabilidade e importantes desacelerações após as contrações, retornando lentamente para a linha de base.\n\nAo toque, observa-se colo completamente dilatado, feto em plano +2 de DeLee, em apresentação occipitopúbica.\n\nConsiderando-se a situação fetal, qual é a conduta imediata a ser adotada após o consentimento da parturiente?",
    "options": [
      "(A) Realizar cesariana.",
      "(B) Prescrever ocitocina.",
      "(C) Realizar manobra de Kristeller.",
      "(D) Indicar parto instrumentalizado."
    ],
    "correctAnswer": 3,
    "explanation": "Desacelerações tardias repetidas após as contrações e variabilidade reduzida sugerem comprometimento da oxigenação fetal. O colo está completamente dilatado, a apresentação é cefálica, occipitopúbica e a cabeça está em estação +2 de DeLee, contexto em que o parto vaginal instrumental pode abreviar o nascimento quando não houver contraindicação e houver operador capacitado, com apoio neonatal. A decisão precisa considerar padrão cardiotocográfico e condições de execução segura.",
    "commentary": "Ocitocina agravaria contrações e não resolve sofrimento fetal; manobra de Kristeller não é recomendada; cesariana pode ser necessária se parto instrumental não for seguro/viável ou não puder ser imediato. Consentimento, analgesia, bexiga vazia e avaliação da pelve são requisitos.",
    "tip": "Cardiotocografia preocupante + colo total + cabeça baixa (+2) = considere acelerar nascimento por parto instrumental se critérios e equipe permitirem.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-90",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Mulher de 61 anos, em acompanhamento com psiquiatra particular, apresenta quadro de depressão há cerca de 8 anos. É cadastrada pela equipe da Estratégia Saúde da Família (ESF) há 12 anos.\n\nPelo genograma da família, observa-se que a paciente perdeu dois filhos, possui problemas no relacionamento conjugal e enfrenta dificuldades relacionadas à renda. A paciente geralmente falta às consultas agendadas pela equipe e, por isso, não há registros de tratamentos da depressão nem de encaminhamento para outros níveis de atenção da rede de cuidado.\n\nNesse caso, qual atributo de atenção primária deve ser priorizado pela ESF?",
    "options": [
      "(A) Acesso.",
      "(B) Competência cultural.",
      "(C) Orientação comunitária.",
      "(D) Longitudinalidade."
    ],
    "correctAnswer": 3,
    "explanation": "Longitudinalidade é o atributo da APS relacionado a vínculo contínuo ao longo do tempo e acompanhamento das necessidades de saúde, mesmo quando há especialistas. A paciente está cadastrada há 12 anos, tem múltiplas perdas e vulnerabilidades e frequenta serviço psiquiátrico privado, mas a ESF não coordena nem mantém registro de seu cuidado em saúde mental. A busca ativa, plano compartilhado e continuidade do vínculo devem ser priorizados.",
    "commentary": "Acesso é importante diante de faltas, mas não resume a falha principal; competência cultural lida com adequação a valores e crenças; orientação comunitária enfoca necessidades coletivas do território. O problema central é fragmentação do cuidado de uma pessoa conhecida da equipe.",
    "tip": "Conhecer a família há anos não basta: longitudinalidade exige vínculo, busca ativa, registro e acompanhamento também quando há cuidado privado.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-91",
    "topography": "2.2",
    "topic": "Arritmias",
    "module": "Clínica Médica",
    "text": "Homem de 55 anos, piloto da aviação civil, procura unidade de emergência de hospital de grande porte com queixa de palpitações e mal-estar geral. Apresenta FC 160 bpm, apesar de encontrar-se hemodinamicamente estável, sem congestão pulmonar ou baixo débito.\n\nO ECG inicial revela a presença de taquiarritmia regular de complexos QRS estreitos. Após tratamento adequado, é revertida a arritmia cardíaca e o paciente é submetido a novo ECG, mostrado a seguir.\n\nQual foi a provável arritmia apresentada pelo paciente?",
    "options": [
      "(A) Taquicardia ventricular idiopática.",
      "(B) Taquicardia supraventricular antidrômica.",
      "(C) Síndrome de Wolff-Parkinson-White.",
      "(D) Fibrilação atrial paroxística."
    ],
    "correctAnswer": 2,
    "explanation": "No ECG APÓS reversão, procura-se o padrão de pré-excitação ventricular: PR curto, início lentificado do QRS (onda delta) e QRS que pode estar alargado. Esse conjunto identifica síndrome de Wolff–Parkinson–White, substrato de vias acessórias capaz de produzir taquicardia por reentrada. Uma taquicardia REGULAR de QRS ESTREITO nesses pacientes costuma ser reentrada atrioventricular ortodrômica; a taquicardia antidrômica geralmente é de QRS largo.",
    "commentary": "A taquicardia ventricular normalmente alarga QRS; B contradiz a descrição de QRS estreito inicial; FA paroxística é classicamente irregular. A alternativa C nomeia a síndrome de pré-excitação, não propriamente o mecanismo da arritmia inicial. Confirmar no traçado se delta e PR curto estão presentes.",
    "tip": "Taquicardia regular estreita revertida + PR curto e onda delta no ECG basal = pré-excitação por via acessória (WPW).",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (dependente do ecg). Classificação depende da leitura do ECG original; não inferir WPW apenas pela frequência de 160 bpm.",
    "image": "/images/sugenamed1-91.webp"
  },
  {
    "id": "sug-enamed1-92",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Clínica Médica",
    "text": "Durante visita domiciliar solicitada por agente comunitário de saúde em uma área de Unidade Básica de Saúde (UBS), a equipe avalia uma família cujo filho de 14 anos vem apresentando isolamento social — sai de casa apenas para ir à escola —, além de queda no rendimento escolar e irritabilidade.\n\nA mãe está desempregada e o pai, preso. A mãe relata que tem um bom relacionamento com o filho e que ele passa a maior parte do tempo usando celular.\n\nEm conversa reservada com a equipe, o adolescente mostra-se pouco comunicativo e desesperançoso; afirma já ter pensado em se matar, embora não apresente ideação suicida atual. Exame físico sem alterações.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Construir rede de proteção ao suicídio para o adolescente e solicitar avaliação neuropsicológica.",
      "(B) Encaminhar ao Centro de Atenção Psicossocial e realizar a notificação de violência interpessoal e/ou autoprovocada.",
      "(C) Manter acompanhamento com a equipe da UBS e pactuar com o adolescente a comunicação da ideação suicida à mãe.",
      "(D) Regular para internação breve em leito hospitalar e solicitar relatório escolar detalhado."
    ],
    "correctAnswer": 2,
    "explanation": "Queda do rendimento, retraimento, desesperança e relato de pensamento suicida prévio exigem avaliação estruturada da segurança na MESMA consulta, mesmo sem intenção suicida atual. Investigar plano, meios, tentativas, impulsividade, ambiente familiar e fatores protetores; envolver adulto responsável de modo seguro e pactuar plano de segurança e seguimento próximo. A equipe da APS pode coordenar o cuidado e acionar serviço especializado se o risco identificado exigir.",
    "commentary": "Internação não é automática sem risco iminente; avaliação neuropsicológica não substitui triagem de suicídio; notificar violência não se justifica apenas pela ideação passada, sem história de violência/autolesão informada. C é aceitável somente se o risco for baixo após investigação, com comunicação e proteção adequadas.",
    "tip": "Adolescente com relato de ideação suicida pregressa exige avaliação atual de risco, plano de segurança e inclusão protetiva da família.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (atenção à segurança). ATENÇÃO À SEGURANÇA: história suicida sempre exige investigação imediata; não se limitar a agendar consulta futura."
  },
  {
    "id": "sug-enamed1-93",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, politraumatizado após acidente automobilístico, recebeu atendimento primário em hospital de referência em trauma 1 hora após o ocorrido.\n\nAo exame inicial, apresentava-se alerta e confuso, com palidez cutaneomucosa, pulsos periféricos filiformes e simétricos, tempo de enchimento capilar de 4 segundos, múltiplas escoriações, abdome doloroso em hipocôndrio esquerdo com hematoma local de 15 cm. FC 130 bpm, FR 25 irpm, PA 80 × 50 mmHg.\n\nUltrassom FAST positivo no espaço de Morrison.\n\nApós as medidas iniciais, mantém sinais vitais inalterados.\n\nQual o achado indica a transfusão de hemoderivados nesse caso?",
    "options": [
      "(A) Hematoma.",
      "(B) Ultrassom FAST positivo.",
      "(C) Confusão mental.",
      "(D) Hipotensão."
    ],
    "correctAnswer": 3,
    "explanation": "Após trauma grave, PA 80×50, FC 130, pulsos finos, TEC 4 segundos e confusão indicam choque hemorrágico persistente. A hipotensão confirma descompensação hemodinâmica e necessidade de reanimação hemostática com hemocomponentes, protocolos de transfusão maciça conforme avaliação e controle urgente da hemorragia intra-abdominal. FAST positivo aumenta a suspeita de hemoperitônio e orienta a busca de tratamento definitivo.",
    "commentary": "Hematoma isolado não mede perda sanguínea sistêmica; FAST positivo indica provável líquido livre, mas transfusão é decidida sobretudo pelo quadro de choque; confusão é sinal de hipoperfusão, porém menos específico. No contexto deste paciente, a persistência da hipotensão torna D a melhor alternativa.",
    "tip": "Trauma com PAS 80 mmHg, FC 130 e perfusão ruim = choque hemorrágico até prova contrária; não espere só pelo FAST para iniciar ressuscitação hemostática.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-94",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 30 anos comparece a uma Unidade Básica de Saúde com relato de que, há 9 meses, parou de usar anticoncepcional oral combinado e não voltou a menstruar até o momento. Fez uso desse método contraceptivo por 10 anos. Observou aumento de pelos no corpo.\n\nO exame ginecológico apresenta-se normal. O exame físico revela: IMC 27 kg/m²; PA 110 × 72 mmHg; cintura abdominal 80 cm; acne e hirsutismo moderado.\n\nOs exames complementares mostram os seguintes resultados:\n\n• TSH: 2,50 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• FSH: 6 mUI/mL (VR: 2 a 30 mUI/mL)\n• Prolactina: 18 ng/mL (VR: 2,8 a 29,2 ng/mL)\n• β-HCG: Negativo\n\nQual é a causa da amenorreia nesse caso?",
    "options": [
      "(A) Insuficiência ovariana prematura.",
      "(B) Hipogonadismo hipogonadotrófico.",
      "(C) Uso prolongado do anticoncepcional.",
      "(D) Anovulação crônica hiperandrogênica."
    ],
    "correctAnswer": 3,
    "explanation": "Nove meses sem menstruar após suspender contraceptivo, com acne e hirsutismo, sugerem hiperandrogenismo associado a anovulação crônica, frequentemente síndrome dos ovários policísticos. β-hCG negativo exclui gravidez atual, TSH e prolactina normais afastam duas causas frequentes, e FSH não elevado reduz probabilidade de insuficiência ovariana primária. A avaliação requer história de irregularidade menstrual prévia, dosagem androgênica e exclusão de outras causas.",
    "commentary": "Insuficiência ovariana prematura costuma cursar com FSH elevado; hipogonadismo hipogonadotrófico pode causar amenorreia, mas não explica bem acne/hirsutismo; anticoncepcional prolongado geralmente mascarava o padrão ovulatório anterior em vez de causar nove meses de amenorreia por si só. Verificar sinais de virilização e causas raras de hiperandrogenismo.",
    "tip": "Amenorreia persistente + acne/hirsutismo + gravidez/TSH/prolactina excluídos sugere anovulação crônica hiperandrogênica (SOP).",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-95",
    "topography": "7.2",
    "topic": "Escabiose",
    "module": "Pediatria",
    "text": "Criança de 5 anos, abrigada em uma unidade de acolhimento institucional com seus irmãos, de 7 e 2 anos, é levada a uma Unidade Básica de Saúde em razão de apresentar muito prurido no corpo, principalmente nas mãos e na porção inferior do abdome.\n\nO responsável refere que a criança tem alergias na pele desde muito pequena, mas que o prurido e as lesões atuais estão diferentes, tendo iniciado há cerca de 20 dias. Segundo relato, o prurido piora muito à noite, após o banho. Outras crianças do abrigo também apresentam prurido, mas sem as lesões.\n\nAo exame, a paciente apresenta pequenas pápulas eritematosas entre os dedos e no abdome.\n\nConsiderando-se a principal hipótese diagnóstica, além da investigação de contactantes, qual é o medicamento tópico indicado?",
    "options": [
      "(A) Permetrina.",
      "(B) Cetoconazol.",
      "(C) Hidrocortisona.",
      "(D) Permanganato de Potássio."
    ],
    "correctAnswer": 0,
    "explanation": "Escabiose é infestação por Sarcoptes scabiei, transmitida por contato prolongado e favorecida em instituições. Prurido noturno intenso, pápulas nos espaços interdigitais, punhos e abdome, com outros residentes também coçando, é apresentação muito típica. Permetrina tópica (habitualmente 5%) é tratamento de primeira linha, aplicada conforme idade/orientação; tratar simultaneamente contatos íntimos e orientar lavagem ou isolamento temporário de roupas/lençóis.",
    "commentary": "Cetoconazol trata fungos, hidrocortisona não elimina o ácaro e permanganato não é escabicida. O prurido pode persistir semanas mesmo após erradicação, e retratamento deve considerar reinfestação, falha de aplicação ou dermatite pós-escabiótica.",
    "tip": "Prurido noturno + pápulas entre os dedos + outros moradores coçando = escabiose; trate com permetrina e avalie contactantes.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-96",
    "topography": "13",
    "topic": "Abstinência alcoólica",
    "module": "Clínica Médica",
    "text": "Homem de 53 anos, com história de situação de rua, é levado a uma Unidade de Pronto Atendimento pelo SAMU por ter apresentado, cerca de 4 horas antes do atendimento, crise convulsiva tônico-clônica generalizada.\n\nAo exame clínico, o paciente apresenta-se desnutrido, um pouco confuso, com dificuldade na marcha, diplopia e nistagmo.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Síndrome de abstinência alcoólica.",
      "(B) Acidente vascular encefálico de cerebelo.",
      "(C) Crise convulsiva epiléptica.",
      "(D) Encefalopatia secundária à deficiência de vitamina B1."
    ],
    "correctAnswer": 3,
    "explanation": "Confusão, ataxia de marcha e sinais oculomotores (nistagmo e diplopia) formam a tríade clássica da encefalopatia de Wernicke por deficiência de tiamina. A condição ocorre sobretudo em pessoas desnutridas, com uso problemático de álcool ou deficiência alimentar, e é emergência neurológica tratada empiricamente com tiamina parenteral, antes ou junto de glicose se houver hipoglicemia. A tríade completa nem sempre está presente e não se deve esperar exame confirmatório.",
    "commentary": "Abstinência alcoólica pode causar convulsão, mas não explica isoladamente alterações oculomotoras e ataxia típica; AVC cerebelar é diferencial urgente, sobretudo se súbito/focal; crise epiléptica isolada não explica todo o quadro de desnutrição e sinais oculares persistentes. Investigar também eletrólitos, trauma e outras etiologias da convulsão.",
    "tip": "Ataxia + confusão + oftalmoparesia/nistagmo em desnutrido = encefalopatia de Wernicke: tiamina parenteral imediata.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-97",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Menina de 5 anos, previamente hígida e com vacinação completa, é levada para a Unidade Básica de Saúde por ter mantido contato domiciliar com a mãe, recém-diagnosticada com tuberculose.\n\nA criança está assintomática. Radiografia de tórax sem alterações e teste de liberação de interferon-gama (IGRA) reagente.\n\nAlém da notificação, a conduta adequada para essa criança é:",
    "options": [
      "(A) Repetir o IGRA em oito semanas e, se reagente, iniciar profilaxia para tuberculose.",
      "(B) Iniciar tratamento para infecção latente e investigar outros comunicantes.",
      "(C) Realizar teste tuberculínico e, se reagente, iniciar isoniazida ou rifampicina.",
      "(D) Iniciar tratamento para tuberculose ativa e solicitar culturas após o término."
    ],
    "correctAnswer": 1,
    "explanation": "A criança de 5 anos teve contato domiciliar com tuberculose pulmonar, não apresenta sintomas, tem radiografia normal e IGRA reagente. Após excluir doença ativa (incluindo avaliação clínica apropriada), isso define infecção latente por Mycobacterium tuberculosis e há indicação de tratamento preventivo conforme esquema do PNI/PNCT e idade, além de investigação de outros contatos.",
    "commentary": "Repetir IGRA (A) é desnecessário se já reagente; fazer teste tuberculínico para 'confirmar' IGRA positivo (C) não é exigido; tratar como TB ativa (D) expõe indevidamente a esquema múltiplo sem evidência de doença. A notificação e organização do seguimento seguem norma local/nacional.",
    "tip": "Contato com TB + criança assintomática + RX normal + IGRA positivo = infecção latente: trate após excluir doença ativa e investigue contatos.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-98",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Homem de 20 anos foi admitido em centro cirúrgico para realização de nefrolitotomia em rim direito.\n\nQuando o cirurgião chegou à sala operatória, o paciente estava anestesiado e foi posicionado em decúbito lateral direito. Foram realizadas antissepsia e aposição de campos cirúrgicos.\n\nAntes da incisão, a enfermeira-chefe, que estava atendendo a uma intercorrência, apareceu para realizar o protocolo de cirurgia segura. Houve, no entanto, divergência a respeito de qual lado do paciente deveria ser operado.\n\nDiante disso, o cirurgião desparamentou-se e retirou-se do local para revisar os exames de imagem pré-operatórios. Constatado o equívoco quanto à posição, o paciente foi reposicionado para a cirurgia, que ocorreu sem intercorrências. O pós-operatório não teve complicações e o paciente recebeu alta hospitalar no quarto dia.\n\nConsiderando-se a Classificação Internacional de Segurança do Paciente da Organização Mundial da Saúde, essa situação caracteriza-se como:",
    "options": [
      "(A) Dano leve.",
      "(B) Evento adverso.",
      "(C) Circunstância notificável.",
      "(D) Erro médico."
    ],
    "correctAnswer": 2,
    "explanation": "A cirurgia foi preparada com o paciente posicionado para lado errado, mas o erro foi reconhecido antes da incisão. Houve falha de processo que alcançou o paciente, não houve dano e o procedimento ocorreu corretamente depois: na taxonomia da OMS, 'incidente sem dano' descreve melhor que 'circunstância notificável', que é condição potencialmente danosa sem incidente concreto. O checklist de cirurgia segura existe para identificar justamente esse tipo de falha antes de atingir estruturas operadas.",
    "commentary": "Evento adverso (B) requer dano ao paciente; dano leve (A) também pressupõe lesão; erro médico (D) é expressão genérica que não corresponde à categoria da classificação pedida. Como 'incidente sem dano' está ausente, C é aproximação inadequada à nomenclatura.",
    "tip": "Erro alcançou paciente, mas foi corrigido sem lesão = incidente sem dano. Circunstância notificável é risco que ainda não alcançou o paciente.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação). Alternativa técnica correta ('incidente sem dano') não está oferecida."
  },
  {
    "id": "sug-enamed1-99",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Uma adolescente de 15 anos é levada à Unidade Básica de Saúde pelos colegas de escola, os quais relatam que a amiga foi vítima de violência sexual, cometida por pessoa desconhecida, há 3 horas.\n\nO exame ginecológico revela escoriações e hematomas em órgão genital externo; a vagina possui sangue coletado; e não há sangramento ativo na vagina nem no colo do útero.\n\nDepois do acolhimento humanizado, do atendimento em ambiente reservado com a equipe multiprofissional e das devidas providências de cuidado em saúde, segundo Nota Técnica do Ministério da Saúde, a notificação compulsória deverá ser realizada pelo:",
    "options": [
      "(A) Médico que prestou o atendimento após receber o boletim de ocorrência.",
      "(B) Profissional de saúde que prestou o primeiro cuidado.",
      "(C) Gerente da unidade de saúde, desde que haja autorização dos responsáveis legais.",
      "(D) Perito que prestou atendimento à paciente após confirmação da violência."
    ],
    "correctAnswer": 1,
    "explanation": "Violência sexual contra adolescente exige atendimento imediato e humanizado, profilaxias, contracepção de emergência quando pertinente, exames e proteção, independentemente de investigação policial. A notificação compulsória é obrigação do serviço de saúde e pode ser preenchida pelo profissional que prestou o primeiro atendimento, seguindo os prazos e protocolos de violência sexual. Não depende de boletim de ocorrência, autorização dos responsáveis ou laudo pericial confirmatório.",
    "commentary": "A e D condicionam indevidamente notificação a polícia/perícia; C transfere responsabilidade à gerência e exige autorização, o que é incorreto. Pelo Estatuto da Criança e do Adolescente, também devem ser acionados fluxos de proteção, respeitando sigilo e evitando revitimização.",
    "tip": "Violência sexual contra adolescente exige notificação pelo serviço de saúde, sem BO, perícia ou autorização familiar como condição.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-100",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos comparece a uma Unidade Básica de Saúde referindo desejo de interromper seu tabagismo, após ter tomado ciência do falecimento de seu tio por neoplasia pulmonar.\n\nRelata carga tabágica estimada em 47 maços/ano e falhas em tentativas anteriores de parar de fumar, mostrando preocupação quanto à sua capacidade de alcançar o objetivo.\n\nConsiderando-se o arsenal terapêutico disponível no Sistema Único de Saúde, além da participação em grupos de cessação do tabagismo, qual prescrição farmacológica está indicada para essa paciente?",
    "options": [
      "(A) Buspirona.",
      "(B) Vareniclina.",
      "(C) Bupropiona.",
      "(D) Clonazepam."
    ],
    "correctAnswer": 2,
    "explanation": "Bupropiona é antidepressivo que modula noradrenalina e dopamina, reduz sintomas de abstinência e desejo intenso de fumar e integra opções farmacológicas de cessação disponíveis no SUS quando associada a apoio comportamental. Carga de 47 maços-ano e tentativas frustradas justificam abordagem estruturada com definição de data, avaliação de dependência, oferta de apoio e monitorização de recaídas. Investigar história de convulsões, transtornos alimentares e outras contraindicações antes de prescrever.",
    "commentary": "Buspirona não é fármaco padrão para cessação; clonazepam traz risco de dependência sem tratar tabagismo; vareniclina pode ser eficaz, mas disponibilidade no SUS varia e não corresponde ao arsenal federal usual previsto na questão. Terapia de reposição de nicotina também é importante e pode ser combinada conforme protocolo.",
    "tip": "Cessar tabagismo = apoio comportamental + fármaco adequado; bupropiona é opção, mas sempre avalie risco de convulsão e outras contraindicações.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  }
];
