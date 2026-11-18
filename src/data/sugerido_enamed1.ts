import { Question } from '../types';

// Simulado "Sugerido ENAMED - 1" — 100 questões no formato ENAMED.
// Gabarito OFICIAL divulgado pelos organizadores do simulado.
// Onde o oficial é discutível, a alternativa tecnicamente defensável entra em `disputed`
// (aparece em amarelo, mas não conta como acerto) e o `alert` explica a controvérsia.
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
    "correctAnswer": 1,
    "disputed": [
      2,
      3
    ],
    "explanation": "Fibrilação atrial (FA) com início há cerca de 2 horas, em paciente estável (PA preservada, SatO₂ 98%, sem dor torácica, congestão ou rebaixamento de consciência). O gabarito oficial é a cardioversão elétrica: com a FA de menos de 48 horas — e, de preferência, menos de 24 horas —, pode-se optar pelo controle do ritmo já, sem ecocardiograma transesofágico e sem as 3 semanas prévias de anticoagulação, porque a chance de trombo no átrio ainda é baixa.\n\nA cardioversão elétrica sincronizada, sob sedação, reverte o ritmo em mais de 90% dos casos. A anticoagulação deve ser iniciada antes ou junto da cardioversão e mantida por pelo menos 4 semanas — e, como o CHA₂DS₂-VA é 2 (hipertensão + idade de 65 a 74 anos), por tempo indeterminado.\n\nDuas alternativas são discutíveis, embora a resposta oficial seja a cardioversão: a D (anticoagulação plena), obrigatória em qualquer estratégia, e a C (ecocardiograma transesofágico), que é uma forma aceita de excluir trombo no átrio esquerdo antes de cardioverter um paciente que não vem anticoagulado e tem risco tromboembólico elevado.\n\n**Roteiro da FA aguda:**\n\n• **Estabilidade:** hipotensão/choque, angina, edema agudo de pulmão ou rebaixamento de consciência → cardioversão elétrica sincronizada imediata. Sem esses critérios, há tempo para decidir.\n• **CHA₂DS₂-VA:** insuficiência cardíaca (1), hipertensão (1), idade ≥ 75 anos (2), diabetes (1), AVC/AIT/embolia prévia (2), doença vascular (1), idade 65–74 anos (1). Escore ≥ 2 → anticoagular; escore 1 → considerar. Preferir os anticoagulantes diretos (apixabana, rivaroxabana, edoxabana, dabigatrana); varfarina se estenose mitral moderada a grave ou prótese mecânica.\n• **Controle da frequência (alvo FC < 110 bpm em repouso):** betabloqueador ou bloqueador de canal de cálcio não di-hidropiridínico (diltiazem, verapamil); digoxina ou amiodarona se disfunção ventricular.\n• **Controle do ritmo (cardioversão elétrica ou química):** FA < 24–48 h e baixo risco → pode reverter sem ecocardiograma transesofágico, já sob anticoagulação; FA ≥ 48 h, de início incerto ou com risco tromboembólico elevado → anticoagular por 3 semanas antes ou fazer ecocardiograma transesofágico para excluir trombo. Em todos os casos, anticoagular por pelo menos 4 semanas após a reversão.",
    "commentary": "**Alternativa (A):** marca-passo temporário trata bradicardia sintomática ou bloqueio AV avançado; aqui a frequência é alta.\n\n**Alternativa (C):** o ecocardiograma transesofágico é usado para excluir trombo antes da cardioversão quando a FA tem 48 horas ou mais (ou duração incerta) e o paciente não está anticoagulado há 3 semanas — não é o caso de uma FA de 2 horas.\n\n**Alternativa (D):** discutível (em amarelo), mas não conta como acerto. A anticoagulação plena é indispensável neste paciente (CHA₂DS₂-VA 2), e diretrizes recentes (ESC 2024) recomendam anticoagular antes de qualquer cardioversão quando o risco tromboembólico é elevado; muitas referências preferem controlar a frequência e anticoagular, deixando a cardioversão eletiva.",
    "tip": "FA estável < 48 h: pode cardioverter já (elétrica ou química), anticoagulando antes e por ≥ 4 semanas depois. ≥ 48 h ou duração incerta: 3 semanas de anticoagulação ou ETE antes. Instável: cardioversão imediata. Anticoagulação a longo prazo pelo CHA₂DS₂-VA.",
    "reference": "Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J, 2024. Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Fibrilação Atrial.",
    "tags": [
      "clínica médica",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "image": "/images/sugenamed1-1.webp",
    "alert": "Gabarito oficial: B. As alternativas C e D (em amarelo) são discutíveis, mas não contam como acerto. D: com CHA₂DS₂-VA 2, anticoagular é obrigatório em qualquer estratégia. C: como o risco tromboembólico não é baixo e o paciente não vinha anticoagulado, o ecocardiograma transesofágico para excluir trombo no átrio esquerdo antes da cardioversão também é uma conduta defensável."
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
    "explanation": "Prematuro de 28 semanas, com desconforto respiratório desde o nascimento, radiografia com infiltrado reticulogranular difuso em vidro moído e necessidade de FiO₂ de 50% para saturar 92%: síndrome do desconforto respiratório (SDR, doença da membrana hialina), causada pela deficiência de surfactante por imaturidade dos pneumócitos tipo II.\n\nO RN já está intubado e com FiO₂ alta, então deve receber surfactante exógeno pela cânula traqueal agora, mantendo a ventilação mecânica enquanto necessária e planejando a extubação precoce para CPAP.\n\n**Manejo da SDR do prematuro (consenso europeu e SBP):**\n\n• **Prevenção:** corticoide antenatal (betametasona) entre 24 e 34 semanas com risco de parto prematuro.\n• **Suporte inicial:** CPAP desde a sala de parto (pressão de 6–8 cmH₂O) em prematuros com respiração espontânea; intubação se falha.\n• **Indicação de surfactante:** SDR com FiO₂ > 0,30 em CPAP ≥ 6 cmH₂O, ou todo prematuro com SDR que precise de intubação. Quanto mais precoce (primeiras 2 horas de vida), melhor.\n• **Via e técnica:** endotraqueal — por cânula no RN intubado, ou por técnica minimamente invasiva (LISA/MIST, cateter fino na traqueia, mantendo o CPAP) no RN em respiração espontânea. Dose inicial de poractanto alfa 200 mg/kg; repetir se a necessidade de oxigênio persistir.\n• **Após o surfactante:** reduzir rapidamente pressões e FiO₂ conforme a complacência melhora, e extubar para suporte não invasivo assim que possível (cafeína ajuda).\n\nDiferenciais no RN com desconforto: taquipneia transitória (termo ou próximo do termo, cesárea, cisuras com líquido), pneumonia neonatal (fatores de risco infecciosos, pode imitar SDR) e síndrome de aspiração meconial (termo/pós-termo, infiltrado grosseiro e hiperinsuflação).",
    "commentary": "**Alternativa (B):** observar e reservar o surfactante para a ventilação de alta frequência atrasa o tratamento de base. A ventilação de alta frequência é resgate, não critério para indicar surfactante.\n\n**Alternativa (C):** a via inalatória (nebulizada) não é a forma recomendada de administração — segue em estudo. Além disso, um RN com FiO₂ de 50% ainda não está pronto para sair da ventilação invasiva.\n\n**Alternativa (D):** subir a FiO₂ e deixar o surfactante para \"se necessário\" ignora que o critério de uso (FiO₂ > 0,30) já foi ultrapassado; o oxigênio alto apenas compensa e aumenta o risco de lesão pulmonar e retinopatia da prematuridade.\n\nSobre a alternativa (A): \"manter em ventilação mecânica\" vale enquanto houver necessidade; a meta é extubar precocemente para CPAP.",
    "tip": "Prematuro + vidro moído + FiO₂ > 30% = surfactante endotraqueal precoce. Intubado: pela cânula. Em CPAP: técnica LISA. Depois, extubar cedo.",
    "reference": "Sweet DG et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 Update. Neonatology, 2023. Sociedade Brasileira de Pediatria. Reanimação do prematuro < 34 semanas em sala de parto, 2022.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Idoso no 4º pós-operatório com sonda nasogástrica drenando 700–1.000 mL/dia, hipotensão, taquicardia, mucosas secas e sonolência: perda de suco gástrico com hipovolemia. O suco gástrico é rico em HCl (e também tem K⁺). Cada H⁺ secretado deixa um HCO₃⁻ no sangue, então a perda gera alcalose metabólica hipoclorêmica.\n\nA hipovolemia ativa o sistema renina-angiotensina-aldosterona: o rim reabsorve Na⁺ trocando por K⁺ e H⁺, o que mantém a alcalose e produz hipocalemia. Resposta: alcalose metabólica hipoclorêmica e hipocalêmica.\n\n**Como pensar a alcalose metabólica:**\n\n• **Geração:** perda de ácido (vômitos, sonda gástrica), perda renal de H⁺ (diuréticos, hiperaldosteronismo), ganho de base (bicarbonato, citrato de transfusões maciças).\n• **Manutenção:** hipovolemia, depleção de cloro e hipocalemia impedem o rim de excretar o excesso de bicarbonato. Na depleção grave, aparece a acidúria paradoxal — urina ácida apesar da alcalose, porque o rim prioriza reter Na⁺ e já não tem K⁺ para trocar.\n• **Classificação pelo cloro urinário:** < 20 mEq/L = cloro-responsiva (vômitos, sonda, diurético já suspenso); > 20 mEq/L = cloro-resistente (hiperaldosteronismo, Cushing, Bartter/Gitelman, diurético em uso).\n• **Tratamento da cloro-responsiva:** soro fisiológico 0,9% para repor volume e cloro, KCl para repor potássio, e reduzir a perda (rever a necessidade da sonda; inibidor de bomba de prótons diminui a acidez do drenado).\n• **Compensação respiratória esperada:** pCO₂ ≈ 0,7 × HCO₃⁻ + 21 (± 2) — hipoventilação, limitada pela hipoxemia.\n\nContraste útil: perda de conteúdo intestinal baixo (diarreia, fístula pancreática ou biliar, ileostomia de alto débito) leva bicarbonato e causa acidose metabólica hiperclorêmica.",
    "commentary": "**Alternativa (A):** acidose respiratória exige hipoventilação primária (DPOC, depressão do centro respiratório, fadiga muscular); a sonolência aqui vem da hipovolemia e dos distúrbios eletrolíticos, e a perda gástrica tende a baixar, não subir, o potássio.\n\n**Alternativa (B):** alcalose respiratória exige hiperventilação primária (dor, ansiedade, sepse inicial, TEP). O distúrbio primário aqui é metabólico, causado pela perda de HCl.\n\n**Alternativa (D):** acidose metabólica hiperclorêmica ocorre com perda de bicarbonato (diarreia, fístulas pancreáticas, acidose tubular renal) ou infusão excessiva de soro fisiológico — o contrário do que a sonda gástrica provoca.",
    "tip": "Vômitos ou sonda nasogástrica = perda de HCl = alcalose metabólica hipoclorêmica e hipocalêmica, com acidúria paradoxal. Trate com SF 0,9% + KCl.",
    "reference": "Sabiston Textbook of Surgery. 21ª ed. Cap. Fluidos, eletrólitos e equilíbrio ácido-base. Rose BD, Post TW. Clinical Physiology of Acid-Base and Electrolyte Disorders.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
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
    "explanation": "Mulher de 51 anos com amenorreia há 14 meses (mais de 12 meses = menopausa) e fogachos frequentes (6–8 por dia), com sudorese noturna, insônia e prejuízo de qualidade de vida: síndrome climatérica moderada a grave. A terapia hormonal da menopausa (THM) é o tratamento mais eficaz para os sintomas vasomotores.\n\nA paciente está dentro da janela de oportunidade e não tem contraindicação (mamografia BI-RADS 2, citologia normal, sem trombose ou doença cardiovascular estabelecida). Por ter útero, precisa de estrogênio associado a progestagênio; por ter obesidade, hipertensão e diabetes, a via transdérmica é a preferida. Resposta: estradiol gel percutâneo + progesterona micronizada.\n\n**Roteiro da terapia hormonal da menopausa:**\n\n• **Indicação principal:** sintomas vasomotores moderados a graves. Também síndrome geniturinária (preferir estrogênio vaginal se for o único sintoma) e prevenção de perda óssea em mulheres de risco.\n• **Janela de oportunidade:** iniciar antes dos 60 anos ou até 10 anos da menopausa, quando o benefício supera o risco.\n• **Contraindicações:** câncer de mama ou de endométrio, sangramento genital não esclarecido, doença hepática descompensada, tromboembolismo venoso prévio ou trombofilia, doença coronariana ou AVC, porfiria, lúpus com risco trombótico.\n• **Regime:** mulher sem útero → estrogênio isolado. Mulher com útero → estrogênio + progestagênio (cíclico, com sangramento de privação, como 12 dias de progesterona por mês; ou contínuo, sem sangramento, preferido anos após a menopausa).\n• **Via:** transdérmica (gel ou adesivo) evita a primeira passagem hepática e não aumenta o risco de trombose — preferir em obesidade, hipertensão, diabetes, hipertrigliceridemia, enxaqueca, tabagismo e risco de TEV.\n• **Sem possibilidade de THM:** ISRS ou IRSN (paroxetina, venlafaxina, desvenlafaxina, escitalopram), gabapentina, clonidina ou fezolinetante, todos menos eficazes que o estrogênio.",
    "commentary": "**Alternativa (A):** etinilestradiol com drospirenona é anticoncepcional oral combinado, com dose estrogênica muito acima da necessária e maior risco trombótico — inadequado para uma mulher de 51 anos, hipertensa, diabética e obesa já na pós-menopausa.\n\n**Alternativa (B):** valerato de estradiol isolado, sem progestagênio, em mulher com útero causa hiperplasia e aumenta o risco de câncer de endométrio; além disso, a via oral é a menos indicada no perfil cardiometabólico dela.\n\n**Alternativa (C):** fluoxetina é opção não hormonal quando a THM é contraindicada ou recusada, mas é menos eficaz para os fogachos e não é a primeira escolha numa paciente elegível. Entre os ISRS, paroxetina e escitalopram têm mais evidência para sintomas vasomotores.\n\nAntes de prescrever, confirmar ausência de TEV, câncer hormônio-dependente, sangramento genital e doença cardiovascular, e reavaliar a terapia anualmente.",
    "tip": "Menopausa + fogachos + útero = estrogênio + progestagênio. Risco cardiometabólico (obesidade, HAS, DM) = estradiol transdérmico. Sem útero = estrogênio isolado.",
    "reference": "The 2022 Hormone Therapy Position Statement of The North American Menopause Society. Menopause, 2022. Pompei LM et al. Consenso Brasileiro de Terapêutica Hormonal da Menopausa — SOBRAC, 2018.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Na dengue, a fase crítica costuma começar justamente com a queda da febre (entre o 3º e o 7º dia). Letargia, anúria, tempo de enchimento capilar de 4 s, extremidades frias e pálidas e pulso filiforme e rápido são sinais de choque por extravasamento plasmático — mesmo sem conseguir medir a pressão. A criança é do grupo D, e a prescrição imediata é expansão com soro fisiológico 0,9% 20 mL/kg IV em 20 minutos.\n\n**Classificação de risco e manejo da dengue (Ministério da Saúde):**\n\n• Grupo A — sem sinais de alarme, sem sangramento espontâneo e prova do laço negativa, sem condição especial, comorbidade ou risco social. Tratamento ambulatorial: hidratação oral (adulto 60 mL/kg/dia, 1/3 em SRO e o restante em outros líquidos; criança pela regra de Holliday-Segar, com SRO), dipirona ou paracetamol, sem AINE nem AAS. Retorno no dia da melhora da febre ou diante de sinal de alarme.\n• Grupo B — sem sinais de alarme, mas com sangramento de pele espontâneo ou prova do laço positiva, ou condição especial (lactente, gestante, idoso > 65 anos), comorbidade ou risco social. Hemograma obrigatório e hidratação oral enquanto aguarda o resultado, em observação. Hematócrito normal: segue como grupo A, com reavaliação diária. Hematócrito aumentado ou sinal de alarme: conduzir como grupo C.\n• **Grupo C — sinais de alarme sem choque:** dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos (ascite, derrame pleural ou pericárdico), hipotensão postural ou lipotimia, hepatomegalia > 2 cm, sangramento de mucosa, letargia ou irritabilidade, aumento progressivo do hematócrito. Internação e expansão com SF 0,9% 10 mL/kg na 1ª hora, repetida até 3 vezes conforme a reavaliação clínica e do hematócrito; com melhora, passar à fase de manutenção.\n• **Grupo D — dengue grave:** choque (taquicardia, extremidades frias, enchimento capilar lento, pulso fraco ou filiforme, PA convergente ≤ 20 mmHg, hipotensão, oligúria), sangramento grave ou disfunção grave de órgão. Leito de UTI e SF 0,9% 20 mL/kg em 20 minutos, repetido até 3 vezes. Com melhora, seguir como grupo C. Sem melhora: hematócrito em alta → albumina ou coloide; hematócrito em queda → investigar hemorragia e transfundir concentrado de hemácias.",
    "commentary": "**Alternativa (B):** 10 mL/kg de SF 0,9% em 1 hora é a expansão do grupo C (sinais de alarme sem choque). Para choque estabelecido, o volume e a velocidade são insuficientes.\n\n**Alternativa (C):** hidratação enteral por sonda não faz parte do protocolo da dengue e é inadequada em hipoperfusão grave, com criança letárgica.\n\n**Alternativa (D):** hidratação oral é a conduta dos grupos A e B (sem sinais de alarme). No choque, atrasa a reposição e expõe a criança rebaixada a risco de aspiração.\n\nApós cada bolus, reavaliar perfusão, pressão, diurese e hematócrito, para evitar tanto o subtratamento quanto a sobrecarga hídrica.",
    "tip": "Na dengue, a piora pode começar justamente quando a febre cai. Extremidades frias, pulso fino e enchimento lento = choque: priorize cristalóide IV e reavaliação frequente.",
    "reference": "Brasil. Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança. 6ª ed. Brasília: MS, 2024.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "correctAnswer": 3,
    "disputed": [
      2
    ],
    "explanation": "**Gabarito oficial: D.** A análise do território mostra mulheres de 45 a 59 anos no climatério, com sintomas vasomotores, de humor, de sono e urogenitais, e alta prevalência de hipertensão e diabetes. A banca valorizou a abordagem ampliada da Política Nacional de Atenção Integral à Saúde da Mulher: o climatério não é só um evento biológico — renda, trabalho, raça/cor, violência, sobrecarga de cuidado e acesso aos serviços influenciam como os sintomas e as comorbidades aparecem e são tratados (interseccionalidade).\n\nArticular o cuidado com a rede intersetorial (assistência social, educação, trabalho, esporte e lazer) e considerar essas desigualdades faz parte do cuidado integral. A alternativa C — ampliar a abordagem multiprofissional das comorbidades e fazer ações educativas no território — também descreve cuidado adequado na APS e é discutível, mas a resposta oficial é D.\n\n**Políticas e redes que a questão cobra:**\n\n• **PNAISM (Política Nacional de Atenção Integral à Saúde da Mulher, 2004):** incluiu o climatério como fase do ciclo de vida a ser cuidada, superando a visão restrita ao ciclo gravídico-puerperal.\n• **Manual de Atenção à Mulher no Climatério/Menopausa (MS):** o climatério é acompanhado na atenção primária, com abordagem integral (sintomas, saúde cardiovascular, óssea, mental, sexualidade), atividades educativas em grupo e encaminhamento só quando necessário.\n• **Atributos da APS:** primeiro contato, longitudinalidade, integralidade e coordenação do cuidado, mais orientação comunitária (agir sobre o perfil do território).\n• **eMulti (antigo NASF):** equipe multiprofissional que apoia as equipes de Saúde da Família com atendimento compartilhado, grupos e matriciamento.\n• **Rede Alyne (2024, substituiu a Rede Cegonha):** cuidado materno e infantil — pré-natal, parto, puerpério e criança até 2 anos.\n• **RAPS (Rede de Atenção Psicossocial):** pessoas com sofrimento mental grave e persistente ou uso problemático de álcool e outras drogas.",
    "commentary": "**Alternativa (A):** estruturar fluxos para a RAPS trata irritabilidade e insônia do climatério como transtorno mental, o que medicaliza e encaminha sem necessidade; sintomas psíquicos leves do climatério são cuidados na própria APS.\n\n**Alternativa (B):** a Rede Alyne é voltada à gestação, ao parto, ao puerpério e à criança, não ao climatério; e hipertensão e diabetes são acompanhadas na APS, não referenciadas por si só.\n\n**Alternativa (C):** discutível (em amarelo), mas não conta como acerto. Cuidado clínico multiprofissional das comorbidades e ações educativas coletivas são o núcleo do que o Manual de Atenção à Mulher no Climatério propõe; o enunciado não traz elemento (como vulnerabilidade social explícita) que torne D claramente superior.",
    "tip": "Climatério na APS: cuidado integral, multiprofissional e intersetorial, considerando as desigualdades (raça, renda, gênero, território), com ações educativas — não encaminhamento automático.",
    "reference": "Brasil. Ministério da Saúde. Manual de Atenção à Mulher no Climatério/Menopausa. Brasília: MS, 2008. Brasil. Política Nacional de Atenção Integral à Saúde da Mulher, 2004. Portaria GM/MS nº 5.350/2024 (Rede Alyne).",
    "tags": [
      "saúde coletiva",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: D. A alternativa C (em amarelo) é discutível, mas não conta como acerto: as duas descrevem estratégias de cuidado integral adequadas, e o enunciado não traz elemento que torne uma claramente superior."
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
    "explanation": "Três meses de tristeza, desânimo, fadiga, dificuldade de concentração, hipersonia e ganho de peso, com prejuízo no trabalho, fecham critérios de episódio depressivo maior (com sintomas atípicos: hipersonia e aumento de apetite/peso). Hemograma, TSH e bioquímica normais afastam anemia e hipotireoidismo como causa.\n\nSem história de mania ou hipomania, a primeira linha farmacológica é um ISRS — aqui, fluoxetina —, associado à psicoterapia.\n\n**Escala terapêutica da depressão (CANMAT 2023 e manuais brasileiros):**\n\n• **1ª linha:** ISRS (fluoxetina, sertralina, escitalopram, citalopram, paroxetina); também IRSN (venlafaxina, desvenlafaxina, duloxetina), bupropiona, mirtazapina, vortioxetina e agomelatina. Associar psicoterapia (TCC, interpessoal); em quadros leves, a psicoterapia isolada é opção. Avaliar resposta em 2 a 4 semanas e dar 4 a 8 semanas em dose adequada antes de considerar falha.\n• **2ª linha (resposta parcial ou ausente):** otimizar a dose; trocar por outro antidepressivo de 1ª linha, da mesma classe ou de outra; tricíclicos (amitriptilina, nortriptilina, clomipramina), eficazes mas com mais efeitos adversos e letais em superdose; potencializar com antipsicótico atípico (aripiprazol, quetiapina, brexpiprazol) ou combinar antidepressivos (por exemplo, ISRS + mirtazapina ou bupropiona).\n• 3ª linha (depressão resistente, falha de 2 ou mais tratamentos adequados): potencialização com lítio ou T3; IMAO (tranilcipromina); escetamina intranasal; eletroconvulsoterapia e estimulação magnética transcraniana. A ECT passa à frente — é 1ª escolha — na depressão grave com sintomas psicóticos, catatonia, risco suicida iminente ou recusa alimentar.\n\nApós a remissão, manter o antidepressivo por 6 a 12 meses no primeiro episódio e por 2 anos ou mais nos recorrentes.",
    "commentary": "**Alternativa (A):** topiramato é anticonvulsivante, sem papel no tratamento da depressão; às vezes é usado para perda de peso, o que não trata o quadro de base.\n\n**Alternativa (C):** lisdexanfetamina é psicoestimulante indicado para TDAH e transtorno de compulsão alimentar; não é antidepressivo de 1ª linha.\n\n**Alternativa (D):** amitriptilina é eficaz, mas fica na 2ª linha pelos efeitos anticolinérgicos, sedação, ganho de peso (indesejável nesta paciente), risco cardíaco e toxicidade em superdose.\n\nAntes de prescrever, investigar risco de suicídio e história de mania ou hipomania — antidepressivo isolado em bipolar pode precipitar virada maníaca.",
    "tip": "Tristeza com anedonia e prejuízo por semanas exige investigar depressão, suicídio e história de mania. Sem bipolaridade, um ISRS costuma ser opção inicial.",
    "reference": "Lam RW et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 Update on Clinical Guidelines for Management of Major Depressive Disorder in Adults. Can J Psychiatry, 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Paciente com DRC G4, diabetes e insuficiência cardíaca, em uso de dapagliflozina, que há 3 dias tem vômitos, diarreia e inapetência. Está hipovolêmico (PA 92 × 58 mmHg, FC 112 bpm, desidratado), com lesão renal aguda sobre a DRC (creatinina de 2,4 para 3,9 mg/dL) e acidose metabólica (pH 7,33, HCO₃⁻ 18) com corpos cetônicos positivos, glicemia de apenas 132 mg/dL e lactato normal.\n\nÉ o quadro de cetoacidose euglicêmica associada ao inibidor de SGLT2: o fármaco faz glicosúria, baixa a glicemia e a insulina e favorece a cetogênese, sobretudo em jejum, desidratação e doença aguda. A conduta é suspender a dapagliflozina temporariamente, hidratar, tratar a cetoacidose e reintroduzir quando o paciente estiver estável, comendo e hidratado — pelo benefício renal e cardíaco que o fármaco traz.\n\nRegras para os \"dias de doença\" (sick day rules): na doença aguda com vômitos, diarreia ou baixa ingestão, suspender temporariamente os fármacos que pioram a função renal ou causam toxicidade na desidratação:\n\n• **Inibidores de SGLT2 (dapagliflozina, empagliflozina):** risco de cetoacidose euglicêmica. Suspender também 3 dias antes de cirurgias (4 dias para ertugliflozina).\n• **IECA e BRA (enalapril, losartana):** pioram a lesão renal na hipovolemia.\n• **Diuréticos (furosemida, hidroclorotiazida):** agravam a desidratação.\n• **Metformina:** risco de acidose lática.\n• **Sulfonilureias:** risco de hipoglicemia.\n• **AINEs:** nefrotoxicidade.\n\nCetoacidose euglicêmica: pH < 7,3 e/ou HCO₃⁻ < 18 mEq/L, cetonemia (β-hidroxibutirato) elevada e glicemia < 250 mg/dL, em paciente com SGLT2. O tratamento é como o da cetoacidose clássica — hidratação, insulina —, mas com soro glicosado desde o início, porque a glicemia já é normal.\n\nQuem estiver com taxa de filtração abaixo do limite de início pode manter o SGLT2 até a diálise, se tolerado — por isso a suspensão é temporária.",
    "commentary": "**Alternativa (A):** suspender definitivamente tira do paciente um fármaco que reduz progressão da DRC, internações por insuficiência cardíaca e mortalidade. Após o episódio, a decisão de reintroduzir é individual, mas não é proibitiva por si só.\n\n**Alternativa (B):** reduzir a dose não elimina o risco de cetoacidose nem de piora da hipovolemia; a dapagliflozina usada na DRC e na IC já é 10 mg, sem ajuste renal útil.\n\n**Alternativa (C):** manter o SGLT2 em vigência de jejum, vômitos e cetose perpetua a cetogênese e a perda de volume.\n\nNa mesma internação, também devem ser suspensos temporariamente o enalapril e a furosemida, e a insulina glargina deve ser mantida em dose ajustada (não suspender insulina basal na cetose).",
    "tip": "Doença aguda com vômitos, diarreia ou jejum: suspenda temporariamente SGLT2, IECA/BRA, diuréticos, metformina, sulfonilureias e AINEs. SGLT2 + cetose com glicemia normal = cetoacidose euglicêmica.",
    "reference": "American Diabetes Association. Standards of Care in Diabetes — 2025. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Sociedade Brasileira de Diabetes. Diretriz Oficial, 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Lactente de 10 meses com febre alta (39–40 °C) por 3 dias, sem foco e em bom estado geral; a febre some e, no 4º dia, surge exantema maculopapular róseo no tronco que se espalha para pescoço e membros. É a sequência clássica do exantema súbito (roséola infantil), causado pelo herpes-vírus humano 6 (e às vezes o 7): febre alta primeiro, exantema depois da defervescência.\n\nÉ doença benigna e autolimitada, e a conduta é sintomática — antitérmico se houver febre ou desconforto, hidratação e orientação sobre sinais de alarme. A principal complicação é a convulsão febril, durante a fase de febre.\n\n**Doenças exantemáticas da infância — o que diferencia cada uma:**\n\n• **Sarampo:** febre alta com tosse, coriza e conjuntivite; manchas de Koplik; exantema maculopapular que começa na face/atrás das orelhas e desce, com a febre ainda presente. Notificação imediata e isolamento.\n• **Rubéola:** febre baixa, linfonodos retroauriculares, cervicais posteriores e occipitais aumentados, exantema róseo craniocaudal que some em 3 dias. Notificação imediata; risco para gestantes (síndrome da rubéola congênita).\n• **Exantema súbito (HHV-6):** 6 meses a 2 anos; febre alta por 3–5 dias, exantema que começa no tronco quando a febre desaparece.\n• **Eritema infeccioso (parvovírus B19):** face esbofeteada, depois exantema rendilhado em membros; pode causar crise aplástica em doença falciforme.\n• **Escarlatina (estreptococo do grupo A):** exantema áspero em lixa, sinal de Filatov (palidez perioral), sinal de Pastia (pregas), língua em framboesa; tratar com penicilina.\n• **Varicela:** lesões em diferentes estágios ao mesmo tempo (mácula, pápula, vesícula, crosta), pruriginosas.\n• **Kawasaki:** febre ≥ 5 dias com conjuntivite não exsudativa, alteração de lábios e mucosa, alterações de extremidades, exantema e linfonodo cervical — pede imunoglobulina e AAS.",
    "commentary": "**Alternativa (A):** roséola não é doença de notificação compulsória. A notificação imediata vale para doença exantemática febril suspeita de sarampo ou rubéola — e aqui o exantema surgiu depois da febre, sem tosse, coriza, conjuntivite ou linfonodos característicos.\n\n**Alternativa (C):** pesquisa de antígenos ou sorologia não é necessária quando o quadro é típico; o diagnóstico é clínico e não muda a conduta.\n\n**Alternativa (D):** não há indicação de isolamento domiciliar: quando o exantema aparece, a criança já está afebril e transmitindo pouco, e o HHV-6 é adquirido pela maioria das crianças por contato com adultos portadores assintomáticos.",
    "tip": "Febre alta que some e só DEPOIS aparece exantema róseo no tronco, em lactente bem = exantema súbito (HHV-6). Tratamento sintomático; cuidado com convulsão febril.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Doenças exantemáticas. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "commentary": "**Alternativa (B):** uretrorrafia (sutura primária da uretra) de urgência não é indicada no trauma contuso. O tecido está contundido e com hematoma, e o reparo imediato tem mais estenose, incontinência e disfunção erétil. A uretrorrafia primária fica reservada a lesões penetrantes ou à fratura de pênis com lesão uretral, quando o paciente vai à cirurgia de qualquer forma.\n\n**Alternativa (C):** laparotomia exploradora não tem indicação em paciente estável, sem sinais de lesão intra-abdominal.\n\n**Alternativa (D):** sondagem uretral é contraindicada com sangue no meato antes de excluir lesão uretral — pode converter ruptura parcial em completa e criar falso trajeto.\n\nAtenção: a questão original trazia, na alternativa B, \"uretrografia de urgência\" — nesse caso, como o paciente está estável, a uretrografia retrógrada seria a resposta (diagnóstico antes de qualquer procedimento). Com o texto corrigido (uretrorrafia), a resposta passa a ser a cistostomia por punção.",
    "tip": "Sangue no meato após trauma de pelve: nunca sonda uretral. Diagnóstico com uretrografia retrógrada; derivação com cistostomia suprapúbica; uretroplastia só depois.",
    "reference": "Morey AF et al. Urotrauma Guideline. American Urological Association, 2020. Sociedade Brasileira de Urologia — Trauma urogenital.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
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
    "explanation": "Mulher em idade fértil, sem contracepção, com atraso menstrual, dor pélvica súbita e pequeno sangramento: toda dor pélvica com β-hCG positivo é gravidez ectópica até prova em contrário. O β-hCG de 2.500 mUI/mL está acima da zona discriminatória (cerca de 1.500–3.500 mUI/mL), nível em que a gestação intrauterina já deveria ser vista na ultrassonografia transvaginal — e o útero está vazio.\n\nSomam-se a imagem anexial com halo hiperecogênico (sinal do anel tubário) e o líquido livre na pelve: gestação ectópica tubária. A paciente está estável e sem sinais de ruptura, o que abre a possibilidade de tratamento clínico.\n\n**Roteiro da gravidez ectópica:**\n\n• **Fatores de risco:** ectópica prévia, cirurgia tubária, doença inflamatória pélvica/clamídia, DIU em uso (se engravidar), reprodução assistida, tabagismo.\n• **Diagnóstico:** β-hCG + ultrassonografia transvaginal. Útero vazio com β-hCG acima da zona discriminatória, ou massa anexial separada do ovário, confirma a suspeita. β-hCG baixo e útero vazio = gestação de localização desconhecida: repetir em 48 h (na gestação tópica, sobe ao menos ~50%).\n• **Instável ou com ruptura (choque, hemoperitônio volumoso):** cirurgia imediata — salpingectomia, por laparoscopia se possível ou laparotomia.\n• **Metotrexato (50 mg/m² IM, dose única):** estável, sem ruptura, β-hCG < 5.000 mUI/mL, massa < 3,5–4 cm, sem batimento cardíaco embrionário, com possibilidade de seguimento. Dosar β-hCG no 4º e 7º dia: queda ≥ 15% = sucesso; depois, semanal até negativar.\n• **Conduta expectante:** estável, β-hCG baixo (< 1.500–2.000) e em queda, massa pequena.\n• **Cirurgia eletiva:** contraindicação ou falha do metotrexato. Salpingostomia (conserva a tuba) se a outra tuba está doente e há desejo reprodutivo; salpingectomia na maioria dos casos.\n• **Mãe Rh negativo:** imunoglobulina anti-D.",
    "commentary": "**Alternativa (A):** ameaça de aborto pressupõe gestação intrauterina viável, com sangramento e colo fechado. Aqui não há gestação dentro do útero, apesar de β-hCG acima da zona discriminatória.\n\n**Alternativa (B):** no aborto incompleto há eliminação parcial do conteúdo, colo aberto e restos ovulares na cavidade (endométrio espesso e heterogêneo) — o colo está fechado e a imagem é anexial.\n\n**Alternativa (C):** gestação anembrionada é um saco gestacional intrauterino ≥ 25 mm sem embrião; nesta paciente não há saco gestacional no útero.\n\nDor intensa e líquido livre exigem vigilância próxima mesmo com sinais vitais normais: a ruptura pode acontecer a qualquer momento.",
    "tip": "β-hCG acima de ~1.500–3.500 com útero vazio na transvaginal = ectópica até prova em contrário. Estável, β-hCG < 5.000, massa < 3,5 cm e sem batimento: metotrexato. Instável: cirurgia.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Gravidez ectópica, 2021. ACOG Practice Bulletin nº 193: Tubal Ectopic Pregnancy, 2018.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Mulher com diabetes tipo 2 há 6 anos, HbA1c de 8,2% apesar de metformina em dose máxima: precisa de um segundo fármaco. A escolha não é só pela glicemia, mas pelas comorbidades: a taxa de filtração de 46 mL/min/1,73 m² caracteriza doença renal crônica G3a. Nesse cenário, o inibidor de SGLT2 é prioridade, porque reduz a progressão da doença renal, internações por insuficiência cardíaca e eventos cardiovasculares, independentemente do efeito glicêmico. Resposta: dapagliflozina.\n\n**Escolha do 2º fármaco no diabetes tipo 2 (SBD e ADA):**\n\n• **Doença renal crônica (TFG 20–60 e/ou albuminúria):** inibidor de SGLT2 (iniciar se TFG ≥ 20, manter até a diálise). Se precisar de mais, associar agonista de GLP-1.\n• **Insuficiência cardíaca:** inibidor de SGLT2.\n• **Doença cardiovascular aterosclerótica estabelecida ou alto risco:** agonista de GLP-1 (semaglutida, liraglutida, dulaglutida) ou inibidor de SGLT2 com benefício comprovado.\n• **Obesidade:** agonista de GLP-1 ou tirzepatida, pela maior perda de peso.\n• **Sem essas condições:** decidir por eficácia, risco de hipoglicemia, peso, custo e disponibilidade no SUS (metformina, gliclazida, dapagliflozina e insulinas estão na rede).\n• **Insulina desde já:** HbA1c > 10%, glicemia ≥ 300 mg/dL, sintomas de hiperglicemia ou perda de peso (catabolismo).\n• **Metformina na DRC:** dose plena se TFG ≥ 45; até 1.000 mg/dia se 30–44; suspender se < 30.\n\nCom a TFG abaixo de 45, o efeito do SGLT2 na glicemia diminui, mas a proteção renal e cardiovascular se mantém — por isso continua sendo a escolha.",
    "commentary": "**Alternativa (A):** gliclazida é barata e eficaz na glicemia, mas causa hipoglicemia (maior risco com TFG reduzida) e ganho de peso, sem proteção renal ou cardiovascular.\n\n**Alternativa (B):** pioglitazona melhora a resistência à insulina, mas causa retenção hídrica, edema, ganho de peso e risco de fraturas, é contraindicada em insuficiência cardíaca e não protege o rim.\n\n**Alternativa (D):** insulina NPH fica para HbA1c muito alta, sintomas de hiperglicemia ou falha da combinação de orais; aos 8,2% e assintomática, não é o próximo passo, e traz hipoglicemia e ganho de peso numa paciente com IMC 32.\n\nCompletar a avaliação com a relação albumina/creatinina na urina e reforçar o controle da pressão (alvo < 130 × 80 mmHg, com IECA ou BRA se houver albuminúria).",
    "tip": "Diabetes tipo 2 fora da meta com DRC ou insuficiência cardíaca: some inibidor de SGLT2. Doença aterosclerótica ou obesidade: pense em agonista de GLP-1. Escolha pela comorbidade, não só pela HbA1c.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz Oficial — Tratamento farmacológico do diabetes tipo 2, 2024. American Diabetes Association. Standards of Care in Diabetes — 2025. KDIGO 2022 Diabetes in CKD.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Adolescente de 17 anos com teste de gravidez positivo há 2 meses e nenhuma consulta de pré-natal, identificada pela agente comunitária. A prioridade é a captação imediata: acolher, iniciar o pré-natal na própria equipe de Saúde da Família, registrar a gestação no e-SUS, pedir os exames da primeira consulta e investigar a queixa de corrimento e dor em baixo-ventre (vulvovaginite, cervicite, infecção urinária, ameaça de aborto).\n\nIdade de 17 anos, por si só, não é critério de pré-natal de alto risco: ela é acompanhada na APS, com apoio multiprofissional e encaminhamento só se surgir critério.\n\n**Roteiro do pré-natal na APS (Ministério da Saúde):**\n\n• **Captação precoce:** iniciar até a 12ª semana; mínimo de 6 consultas (mensais até 28 semanas, quinzenais até 36 e semanais depois).\n• **Exames da 1ª consulta:** hemograma, tipagem ABO/Rh e Coombs indireto se Rh negativo, glicemia de jejum, testes rápidos de HIV, sífilis e hepatites B e C, urina tipo 1 e urocultura, sorologia de toxoplasmose, ultrassonografia obstétrica e citologia se estiver em atraso.\n• **Vacinas:** dTpa a partir de 20 semanas, hepatite B, influenza e covid-19.\n• **Suplementos:** ácido fólico (idealmente desde antes da concepção até 12 semanas) e sulfato ferroso.\n• **Alto risco (encaminhar, mantendo o vínculo com a APS):** doenças maternas prévias (hipertensão crônica, diabetes, cardiopatia, nefropatia, epilepsia, HIV), história obstétrica grave, e intercorrências como pré-eclâmpsia, diabetes gestacional que não controla com dieta, restrição de crescimento ou gemelaridade.\n• **Adolescente:** tem direito a atendimento sem acompanhante e com sigilo (ECA). Avaliar contexto familiar e escolar, rede de apoio e violência — gestação abaixo de 14 anos é presumida estupro de vulnerável e obriga notificação.\n• **Queixas:** corrimento e dor pélvica merecem exame especular e abordagem das IST na própria consulta; sangramento, dor intensa, febre ou perda de líquido mudam o fluxo para a maternidade.",
    "commentary": "**Alternativa (A):** começa bem (acolher, registrar, pedir exames), mas encaminha ao ambulatório especializado sem critério de alto risco, fragmentando o cuidado.\n\n**Alternativa (B):** transporte sanitário para a maternidade é para urgência obstétrica (sangramento importante, dor intensa, febre, sinais de abortamento ou de ectópica). O enunciado não traz sinais de gravidade.\n\n**Alternativa (C):** adolescência não é, por si só, indicação de pré-natal de alto risco; encaminhar sem critério sobrecarrega o serviço especializado e afasta a gestante da equipe que tem vínculo com ela.",
    "tip": "Gestante adolescente sem pré-natal: comece o pré-natal na APS hoje, registre no e-SUS e investigue as queixas. Alto risco só com critério clínico ou obstétrico real.",
    "reference": "Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 32 — Atenção ao pré-natal de baixo risco, 2012. Brasil. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Homem com esquizofrenia há 15 anos que perdeu o vínculo com os serviços e suspendeu os antipsicóticos há 2 meses, agora com delírios de autorreferência, alucinações auditivas e embotamento afetivo: recaída psicótica por abandono do tratamento. O enunciado afasta risco iminente de auto ou heteroagressão, então não há indicação de urgência ou internação.\n\nO ponto de atenção certo é o CAPS — serviço de base comunitária para transtornos mentais graves e persistentes —, que retoma o tratamento, faz busca ativa e projeto terapêutico singular, em articulação com a UBS.\n\n**Componentes da Rede de Atenção Psicossocial (RAPS):**\n\n• **Atenção primária:** UBS, eMulti (antigo NASF), consultório na rua e centros de convivência — porta de entrada e cuidado de casos leves a moderados.\n• **Atenção psicossocial especializada:** CAPS — transtornos mentais graves e persistentes. CAPS I, II e III (o III funciona 24 h, com acolhimento noturno), CAPS AD (álcool e drogas; AD III 24 h) e CAPSi (crianças e adolescentes).\n• **Urgência e emergência:** SAMU, UPA e prontos-socorros — crise com risco (agitação, agressividade, ideação suicida grave).\n• **Atenção residencial de caráter transitório:** unidades de acolhimento e comunidades terapêuticas (só para uso de substâncias).\n• **Atenção hospitalar:** leitos de saúde mental em hospital geral, para internações breves quando os recursos extra-hospitalares forem insuficientes.\n• **Desinstitucionalização e reabilitação:** serviços residenciais terapêuticos, Programa De Volta para Casa, geração de renda.\n\nLei 10.216/2001: a internação só é indicada quando os recursos extra-hospitalares se mostrarem insuficientes, e pode ser voluntária, involuntária (sem consentimento, a pedido de terceiro, comunicada ao Ministério Público em 72 h) ou compulsória (determinada pela Justiça). Em quem abandona o tratamento oral, considerar antipsicótico de depósito (haloperidol decanoato, palmitato de paliperidona).",
    "commentary": "**Alternativa (A):** o leito de saúde mental em hospital geral é para internação breve quando há risco ou falha do cuidado comunitário; sem risco iminente, internar contraria a Lei 10.216.\n\n**Alternativa (B):** a UPA é componente de urgência, para crise com risco ou agitação que exija contenção ou medicação imediata; não oferece seguimento longitudinal.\n\n**Alternativa (D):** comunidade terapêutica é serviço residencial transitório voltado a pessoas com necessidades decorrentes do uso de álcool e drogas; não trata esquizofrenia.",
    "tip": "Transtorno mental grave e persistente sem risco iminente = CAPS (com a UBS). Risco ou agitação = urgência (SAMU, UPA). Internação só quando o cuidado comunitário não basta.",
    "reference": "Brasil. Ministério da Saúde. Portaria nº 3.088/2011 (Rede de Atenção Psicossocial), consolidada na Portaria de Consolidação nº 3/2017. Brasil. Lei nº 10.216, de 6 de abril de 2001.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Paciente com câncer de pâncreas em cuidados paliativos, com dor bem controlada por morfina, apresentando constipação, náuseas e distensão, mas eliminando flatos e sem sinais de peritonite: constipação induzida por opioide. Os opioides agem nos receptores µ do intestino, reduzindo a motilidade e a secreção, e — ao contrário da náusea e da sedação — não há tolerância a esse efeito.\n\nComo a analgesia é boa, a conduta é manter a morfina e introduzir laxativo oral. O ideal é que o laxativo seja prescrito já no início do opioide, de forma profilática.\n\n**Manejo da constipação induzida por opioide:**\n\n• **Prevenção:** todo paciente em opioide contínuo deve receber laxativo regular desde o início, com orientação de hidratação e mobilidade quando possível.\n• **1ª linha:** laxativo estimulante (bisacodil, sene) e/ou osmótico (lactulose, polietilenoglicol), ajustando a dose até evacuar a cada 1–3 dias.\n• **Avaliação:** toque retal para excluir fecaloma (se presente: supositório, enema ou desimpactação manual); excluir obstrução intestinal (parada de flatos, vômitos fecaloides, dor em cólica, distensão progressiva).\n• **Refratária:** antagonistas µ de ação periférica (metilnaltrexona subcutânea, naloxegol), que tratam a constipação sem reverter a analgesia.\n• **Evitar:** fibras ou formadores de bolo isolados, que pioram o quadro em quem ingere pouco líquido e tem motilidade reduzida.\n• **Outros efeitos dos opioides:** náusea e sedação melhoram em dias (tolerância); depressão respiratória é rara com titulação adequada; miose e constipação persistem.\n\nEscada analgésica da OMS: degrau 1 — analgésico não opioide (dipirona, paracetamol, AINE); degrau 2 — opioide fraco (codeína, tramadol); degrau 3 — opioide forte (morfina, oxicodona, metadona, fentanil). Adjuvantes em todos os degraus.",
    "commentary": "**Alternativa (B):** reduzir a morfina sacrifica um controle de dor que estava bom e não resolve a constipação, que depende do laxativo; a dor volta e a paciente sofre sem necessidade.\n\n**Alternativa (C):** trocar morfina por tramadol desce na escada analgésica (opioide fraco para dor oncológica que precisou de opioide forte) e o tramadol também constipa; glicerina retal sozinha é medida pontual.\n\n**Alternativa (D):** dipirona isolada não controla dor oncológica que exigia morfina, e fibras solúveis tendem a piorar a constipação em paciente com baixa ingesta hídrica e motilidade reduzida.",
    "tip": "Opioide controlando a dor + constipação: mantenha o opioide e associe laxativo (estimulante e/ou osmótico). Laxativo se prescreve junto com o opioide, desde o primeiro dia.",
    "reference": "Larkin PJ et al. Diagnosis, assessment and management of constipation in advanced cancer: ESMO Clinical Practice Guidelines. Ann Oncol, 2018. Academia Nacional de Cuidados Paliativos (ANCP). Manual de Cuidados Paliativos. 2ª ed.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Criança de 3 anos com cianose que piora ao chorar ou fazer esforço e melhora quando ela se agacha (posição de cócoras): quadro clássico de tetralogia de Fallot. Os quatro componentes são comunicação interventricular, estenose da via de saída do ventrículo direito (pulmonar), aorta cavalgante e hipertrofia do ventrículo direito.\n\nO choro e o esforço baixam a resistência vascular sistêmica e aumentam o desvio de sangue não oxigenado do VD para a aorta (shunt direita-esquerda). Agachar dobra as artérias femorais, aumenta a resistência sistêmica, devolve sangue ao pulmão e melhora a cianose.\n\n**Roteiro das cardiopatias congênitas:**\n\n• **Cianóticas (shunt direita-esquerda ou mistura) — os 5 Ts:** tetralogia de Fallot, transposição das grandes artérias, truncus arteriosus, atresia tricúspide, drenagem anômala total das veias pulmonares. Também anomalia de Ebstein.\n• **Acianóticas com hiperfluxo pulmonar (shunt esquerda-direita):** CIV (a mais comum), CIA, persistência do canal arterial, defeito do septo atrioventricular (associado à síndrome de Down).\n• **Acianóticas obstrutivas:** coarctação da aorta (pulsos femorais diminuídos, PA maior nos braços), estenose aórtica, estenose pulmonar.\n\n**Tetralogia de Fallot em detalhe:**\n\n• **Exame:** sopro sistólico ejetivo em borda esternal esquerda (da estenose pulmonar); quanto mais grave a obstrução, mais cianose e menor o sopro.\n• **Radiografia:** coração em bota (tamanco holandês), com trama vascular pulmonar diminuída. ECG: sobrecarga do VD.\n• **Crise hipercianótica:** posição genupeitoral, oxigênio, morfina, volume, betabloqueador (propranolol) e, se necessário, vasopressor que aumente a resistência sistêmica (fenilefrina).\n• **Tratamento definitivo:** correção cirúrgica total, em geral entre 3 e 6 meses de vida; shunt de Blalock-Taussig como ponte em casos selecionados.",
    "commentary": "**Alternativa (A):** a transposição das grandes artérias causa cianose intensa nas primeiras horas de vida, sem melhora com a posição, e sem tratamento não chega aos 3 anos; radiografia com coração em ovo deitado. Precisa de prostaglandina e atriosseptostomia no período neonatal.\n\n**Alternativa (B):** a estenose aórtica valvar é cardiopatia acianótica: sopro sistólico em foco aórtico, com possível síncope, dor torácica ou insuficiência cardíaca; não causa cianose nem melhora ao agachar.\n\n**Alternativa (D):** na anomalia de Ebstein, a valva tricúspide é deslocada para dentro do VD; causa cianose por shunt pelo forame oval, cardiomegalia acentuada (coração em moringa) e associação com síndrome de Wolff-Parkinson-White, mas o agachamento não é sua marca.",
    "tip": "Cianose que piora ao chorar e melhora de cócoras = tetralogia de Fallot (CIV + estenose pulmonar + aorta cavalgante + hipertrofia de VD). Radiografia: coração em bota.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Cardiopatias congênitas. Park MK. Park's Pediatric Cardiology for Practitioners. 7ª ed.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "correctAnswer": 2,
    "explanation": "**Gabarito: C** (drenagem torácica simples no 5º espaço intercostal). Ferimento penetrante no hemitórax direito com taquipneia, dor ventilatória e taquicardia (FC 108), mas PA preservada, e murmúrio vesicular **reduzido** (não abolido) à direita: o quadro é de **hemotórax** traumático (ou hemopneumotórax) em paciente estável. O sangue na pleura reduz o murmúrio; no pneumotórax hipertensivo ele estaria abolido, com hipertimpanismo, desvio de traqueia e turgência jugular — nada disso foi descrito.\n\nO tratamento é a drenagem pleural fechada em selo d'água no 5º espaço intercostal, entre as linhas axilares anterior e média, longe da ferida. Ela esvazia o hemitórax, reexpande o pulmão e permite medir o sangramento: > 1.500 mL na drenagem inicial ou > 200 mL/h por 2–4 h indicam toracotomia. A maioria dos traumas torácicos penetrantes (cerca de 85%) se resolve só com o dreno.\n\nO enunciado não descreve ar entrando e saindo pela ferida (ferida aspirativa), então não há pneumotórax aberto a vedar: o problema a tratar é o sangue no espaço pleural.\n\n**Lesões torácicas que matam na avaliação primária (ATLS):**\n\n• **Pneumotórax hipertensivo:** desvio de traqueia, turgência jugular, hipotensão, murmúrio abolido e hipertimpanismo. Diagnóstico clínico — descompressão imediata com agulha (5º espaço intercostal, entre as linhas axilares anterior e média no adulto) e depois dreno.\n• **Pneumotórax aberto:** ferida aspirativa; curativo de três lados (ou selo torácico com válvula) e dreno em outro local.\n• **Hemotórax maciço:** murmúrio reduzido, macicez e choque; > 1.500 mL na drenagem inicial ou > 200 mL/h por 2–4 h → toracotomia.\n• **Tamponamento cardíaco:** tríade de Beck (hipotensão, turgência jugular, abafamento de bulhas); FAST. Pericardiocentese como ponte, toracotomia/janela pericárdica como tratamento.\n• **Tórax instável com contusão pulmonar:** analgesia, oxigênio e ventilação se necessário.\n\nDrenagem torácica: 5º espaço intercostal, entre as linhas axilares anterior e média, na borda superior da costela inferior, nunca pelo próprio ferimento.",
    "commentary": "**Alternativa (A):** drenar pelo próprio ferimento é contraindicado: o trajeto é contaminado, o dreno pode seguir o caminho da lesão e a vedação ao redor do dreno fica ruim.\n\n**Alternativa (B):** curativo oclusivo não trata o sangue acumulado na pleura; e, fixado nos quatro lados, pode transformar a lesão em pneumotórax hipertensivo, porque o ar que sai do pulmão lesado não tem por onde escapar.\n\n**Alternativa (D):** o curativo de três lados é a conduta do pneumotórax aberto (ferida aspirativa), que o enunciado não descreve. Com murmúrio reduzido por hemotórax, o curativo não esvazia a pleura nem permite medir o sangramento — o tratamento é o dreno.",
    "tip": "Trauma penetrante com murmúrio REDUZIDO (não abolido) e paciente estável = hemotórax → dreno no 5º EIC, entre as linhas axilares anterior e média, nunca pela ferida. Curativo de 3 lados só se a ferida for aspirativa.",
    "reference": "American College of Surgeons. Advanced Trauma Life Support (ATLS) — Student Course Manual. 10ª ed., 2018.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ]
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
    "explanation": "Mulher de 58 anos, assintomática, com mamografia de rastreamento classificada como BI-RADS 0. Essa categoria não é resultado normal nem suspeito: significa avaliação incompleta, e a paciente precisa de exame complementar antes de receber uma classificação final — incidências mamográficas adicionais (compressão localizada, magnificação), comparação com exames anteriores e/ou ultrassonografia.\n\nEntre as alternativas, a ultrassonografia mamária é o complemento adequado. A prima com câncer de mama é parente de 3º grau e não muda o risco nem a conduta.\n\n**Categorias BI-RADS e conduta:**\n\n• **0 — inconclusivo:** complementar (incidências adicionais, ultrassonografia, comparação com exames prévios).\n• **1 — negativo:** rastreamento de rotina.\n• 2 — achado benigno (cisto simples, linfonodo intramamário, calcificações grosseiras): rotina.\n• **3 — provavelmente benigno (risco de câncer ≤ 2%):** controle em 6 meses e depois a cada 6–12 meses, por 2 a 3 anos.\n• 4 — suspeito (4A, 4B, 4C; risco de 2% a 95%): biópsia.\n• **5 — altamente suspeito (risco ≥ 95%):** biópsia.\n• **6 — malignidade já comprovada por biópsia:** tratamento.\n\n**Rastreamento do câncer de mama:**\n\n• **Ministério da Saúde/INCA:** mamografia a cada 2 anos na faixa de 50 a 69 anos (com ampliação recente da faixa etária; abaixo dos 50, por decisão compartilhada).\n• **Sociedades médicas (CBR, SBM, FEBRASGO):** anual a partir dos 40 anos.\n• Alto risco (risco ≥ 20% ao longo da vida, mutação BRCA, parente de 1º grau com câncer de mama jovem, radioterapia de tórax antes dos 30 anos): mamografia e ressonância anuais, começando mais cedo.",
    "commentary": "**Alternativa (A):** controle em 6 meses é a conduta para BI-RADS 3 (provavelmente benigno); no BI-RADS 0 ainda não se sabe qual é o achado, então esperar 6 meses atrasa o diagnóstico.\n\n**Alternativa (C):** a ressonância magnética não é o complemento de rotina do BI-RADS 0; é usada no rastreamento de alto risco, no estadiamento de câncer confirmado e em situações específicas (implantes, discordâncias).\n\n**Alternativa (D):** voltar à rotina em 2 anos é conduta para BI-RADS 1 e 2; com exame inconclusivo, seria deixar sem resposta um achado que pode ser câncer.",
    "tip": "BI-RADS 0 = exame incompleto, não normal: complemente com incidências adicionais e/ou ultrassonografia. BI-RADS 3 = controle em 6 meses. BI-RADS 4 e 5 = biópsia.",
    "reference": "American College of Radiology. ACR BI-RADS Atlas. 5ª ed., 2013. Urban LABD et al. Recomendações do CBR, SBM e FEBRASGO para o rastreamento do câncer de mama, 2023. INCA. Diretrizes para a detecção precoce do câncer de mama no Brasil.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Trabalhador rural do Mato Grosso do Sul (área endêmica) com 60 dias de febre baixa contínua, emagrecimento, astenia, hepatomegalia e esplenomegalia, anemia normocítica, leucopenia, VHS elevada, transaminases discretamente alteradas e hipergamaglobulinemia policlonal: leishmaniose visceral (calazar).\n\nO parasita (Leishmania infantum) infecta macrófagos do baço, fígado e medula, o que explica a hepatoesplenomegalia e as citopenias (por hiperesplenismo e invasão medular); a ativação policlonal de linfócitos B gera a hipergamaglobulinemia, com inversão albumina/globulina.\n\n**Roteiro da leishmaniose visceral (Ministério da Saúde):**\n\n• **Transmissão:** picada do flebotomíneo Lutzomyia longipalpis (mosquito-palha); o cão é o principal reservatório urbano. Doença de notificação compulsória.\n• **Quadro:** febre prolongada, emagrecimento, esplenomegalia volumosa, hepatomegalia, palidez; pancitopenia (pode faltar uma das linhagens, como aqui), hipergamaglobulinemia e hipoalbuminemia. Fases tardias: edema, sangramentos, icterícia, infecções bacterianas (principal causa de morte).\n• **Diagnóstico:** teste rápido imunocromatográfico (rK39) e RIFI; confirmação parasitológica no aspirado de medula óssea (padrão), ou de baço/linfonodo; PCR.\n• **Tratamento:** antimoniato de meglumina ou anfotericina B lipossomal. A lipossomal é preferida em gestantes, menores de 1 ano, maiores de 50 anos, coinfecção HIV, imunossupressão, insuficiência renal, hepática ou cardíaca, e casos graves. O antimonial é cardiotóxico (alarga QT) e contraindicado na gestação.\n• **Sinais de gravidade:** idade < 6 meses ou > 65 anos, desnutrição grave, icterícia, sangramentos, edema generalizado, infecção bacteriana, comorbidades.",
    "commentary": "**Alternativa (B):** a malária causa febre e esplenomegalia, mas com febre alta em paroxismos (calafrio, calor e sudorese) e curso agudo; é concentrada na região amazônica e não explica a hipergamaglobulinemia. O diagnóstico é pela gota espessa.\n\n**Alternativa (C):** a mononucleose infecciosa (vírus Epstein-Barr) atinge sobretudo adolescentes e adultos jovens, com faringite, linfadenopatia cervical, esplenomegalia leve e linfocitose com linfócitos atípicos — não leucopenia — e dura semanas, não 2 meses com consumo.\n\n**Alternativa (D):** a esquistossomose hepatoesplênica causa esplenomegalia por hipertensão portal, com varizes de esôfago e hemorragia digestiva; não costuma dar febre prolongada nem consumo, e é endêmica no Nordeste e em Minas Gerais.\n\nOutros diferenciais de febre prolongada com esplenomegalia: linfoma e leucemia, tuberculose disseminada, endocardite, brucelose e histoplasmose.",
    "tip": "Febre prolongada + emagrecimento + esplenomegalia volumosa + citopenias + hipergamaglobulinemia, em área endêmica = calazar. Teste rK39 e aspirado de medula.",
    "reference": "Brasil. Ministério da Saúde. Manual de Vigilância e Controle da Leishmaniose Visceral, 2014. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "A DBHA 2025 baixou o limite inferior da pré-hipertensão de 130/85 para 120/80 mmHg. Baixar o ponto de corte de um teste faz com que mais pessoas sejam classificadas como positivas: menos doentes (ou pessoas em risco) escapam, ou seja, caem os falsos-negativos e sobe a sensibilidade.\n\nO preço é que mais pessoas sem o desfecho também são rotuladas como positivas — sobem os falsos-positivos e cai a especificidade. Resposta: sensibilidade.\n\n**Propriedades de um teste diagnóstico (tabela 2 × 2: VP, FP, FN, VN):**\n\n• **Sensibilidade = VP / (VP + FN):** capacidade de detectar quem tem a doença. Teste muito sensível, quando negativo, afasta a doença (SnNout). Útil em rastreamento e em doenças graves que não podem passar.\n• **Especificidade = VN / (VN + FP):** capacidade de reconhecer quem não tem a doença. Teste muito específico, quando positivo, confirma a doença (SpPin). Útil para confirmar antes de tratamento agressivo.\n• Valor preditivo positivo = VP / (VP + FP) e valor preditivo negativo = VN / (VN + FN): dependem da prevalência. Mais prevalência → VPP sobe e VPN cai.\n• **Razão de verossimilhança:** positiva = sensibilidade / (1 − especificidade); negativa = (1 − sensibilidade) / especificidade. Não depende da prevalência.\n• **Ponto de corte:** sensibilidade e especificidade andam em sentidos opostos (curva ROC). Baixar o limiar → mais sensível e menos específico; subir o limiar → mais específico e menos sensível.",
    "commentary": "**Alternativa (B):** a especificidade cai, e não sobe, quando o critério fica mais amplo — mais pessoas sem risco real passam a ser rotuladas como pré-hipertensas (mais falsos-positivos).\n\n**Alternativa (C):** com o limiar mais baixo, menos pessoas em risco ficam de fora; os falsos-negativos diminuem.\n\n**Alternativa (D):** o valor preditivo positivo depende da prevalência e da especificidade; ao incluir muitas pessoas de menor risco, a proporção de positivos que de fato evoluem para hipertensão tende a cair.\n\nNota conceitual: pré-hipertensão é uma categoria de risco, não um teste diagnóstico binário; a questão usa a mudança de critério para cobrar o raciocínio sobre ponto de corte.",
    "tip": "Baixou o ponto de corte (critério mais amplo) = mais positivos = sensibilidade sobe, especificidade cai, falsos-negativos caem. VPP e VPN dependem da prevalência.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Hipertensão Arterial — 2025. Fletcher GS. Epidemiologia Clínica: elementos essenciais. 6ª ed.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "A retirada do preservativo sem o consentimento da parceira durante a relação (conhecida como stealthing) anula o consentimento que havia sido dado para o sexo protegido: é violência sexual, e pode configurar o crime de violação sexual mediante fraude. Como profissional de saúde, além de acolher, ofertar as profilaxias e a contracepção de emergência, o médico tem o dever de notificar o caso no SINAN como violência interpessoal/sexual — a notificação de violência sexual é compulsória e imediata (em até 24 h) à vigilância municipal.\n\nA notificação é sigilosa, é dever do serviço e não depende de a paciente registrar boletim de ocorrência.\n\n**Atendimento à violência sexual (Ministério da Saúde):**\n\n• **Acolhimento:** escuta sem julgamento, sigilo, privacidade e respeito às decisões da paciente. O atendimento é obrigatório, imediato e integral em todo hospital do SUS (Lei 12.845/2013) e não exige boletim de ocorrência.\n• **Contracepção de emergência:** levonorgestrel 1,5 mg em dose única, o quanto antes (eficaz até 5 dias, melhor nas primeiras 72 h); DIU de cobre até 5 dias é a opção mais eficaz.\n• **Profilaxia do HIV (PEP):** iniciar até 72 h, idealmente nas primeiras 2 h — tenofovir + lamivudina + dolutegravir por 28 dias.\n• **IST bacterianas:** penicilina benzatina 2,4 milhões UI IM (sífilis), ceftriaxona 500 mg IM (gonorreia) e azitromicina 1 g VO (clamídia); metronidazol 2 g (tricomoníase) pode ser adiado para não somar efeitos gastrointestinais.\n• **Hepatite B:** vacinar se não vacinada; imunoglobulina se a vítima for suscetível e houver indicação.\n• **Exames:** testes rápidos de HIV, sífilis e hepatites B e C, e β-hCG; seguimento com repetição dos testes.\n• Notificação compulsória (Lei 10.778/2003): ficha de violência interpessoal/autoprovocada no SINAN. A Lei 13.931/2019 acrescentou a comunicação à autoridade policial em 24 h para fins estatísticos, sem identificar a vítima e sem condicionar o atendimento.\n• **Registro de vestígios:** pode ser feito no próprio serviço de saúde e encaminhado à perícia, se a mulher quiser — o exame de corpo de delito é direito, não pré-requisito.\n• **Seguimento:** apoio psicológico e social, rede de proteção (CRAM, Delegacia da Mulher, Defensoria).",
    "commentary": "**Alternativa (A):** investigar \"a ausência de proteção\" desloca o foco para a conduta da vítima e pode soar como culpabilização. A história já está clara — houve retirada do preservativo sem consentimento — e o que falta é o dever de notificar.\n\n**Alternativa (C):** o exame de corpo de delito deve ser informado e oferecido, mas a decisão de fazê-lo e de registrar ocorrência é da paciente. Encaminhar para o IML não é a conduta obrigatória do atendimento e não substitui a notificação.\n\n**Alternativa (D):** ansiedade e constrangimento são reações esperadas a uma violência; não há indicação de benzodiazepínico como conduta. O cuidado é acolhimento, apoio psicológico e seguimento.",
    "tip": "Violência sexual (inclusive retirada do preservativo sem consentimento): acolha, contracepção de emergência, PEP em até 72 h, profilaxia de IST, notificação compulsória imediata. Boletim de ocorrência não é exigência.",
    "reference": "Brasil. Ministério da Saúde. Norma Técnica — Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes. 3ª ed., 2012. Brasil. PCDT para Profilaxia Pós-Exposição de Risco à Infecção pelo HIV, IST e Hepatites Virais. Leis nº 10.778/2003, 12.845/2013 e 13.931/2019.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Homem de 62 anos com dor precordial desencadeada por esforço e aliviada pelo repouso: angina típica, suspeita de doença arterial coronariana (DAC) crônica. O primeiro passo é estimar a probabilidade pré-teste (PPT) de DAC obstrutiva, que define o exame:\n\n• **Muito baixa (≤ 5%):** sem necessidade de novos testes.\n• **Baixa (> 5–15%):** ajustar a PPT (ECG, ecocardiograma, teste ergométrico, escore de cálcio) ou angiotomografia de coronárias.\n• **Moderada (> 15–50%):** prova funcional ou angiotomografia.\n• **Alta (> 50–85%):** prova funcional com imagem (cintilografia de perfusão, ecocardiograma de estresse ou ressonância de estresse).\n• **Muito alta (> 85%):** cineangiocoronariografia direta.\n\nHomem na faixa de 60–69 anos com angina típica tem PPT em torno de 75–80%, e os fatores de risco (tabagismo, hipertensão, dislipidemia com LDL 190) e a alteração no ECG reforçam a categoria alta. Logo, o exame indicado é uma prova funcional. Além disso, o ECG com sobrecarga ventricular esquerda costuma vir com alteração de repolarização (padrão strain), que torna o segmento ST ininterpretável no teste ergométrico — por isso a prova funcional deve ter imagem: cintilografia miocárdica de perfusão.",
    "commentary": "**Alternativa (A):** o teste ergométrico depende da análise do ST. Com sobrecarga ventricular esquerda no ECG de repouso, o exame perde acurácia (falso-positivos). No fluxograma, ele aparece como ferramenta para ajustar a PPT nas categorias baixas, não como prova funcional de escolha na PPT alta.\n\n**Alternativa (B):** a cineangiocoronariografia direta fica para PPT muito alta (> 85%) ou para quem já tem critério de alto risco (angina refratária ao tratamento, disfunção ventricular, arritmia grave, isquemia extensa em teste prévio). Não é o caso: paciente estável, sem esses achados.\n\n**Alternativa (D):** o ecocardiograma transtorácico de repouso avalia função ventricular e estrutura, mas não demonstra isquemia induzível; no fluxograma, entra apenas para ajustar a PPT. Ecocardiograma de ESTRESSE seria alternativa equivalente à cintilografia — não é o que está escrito.\n\nParalelamente ao exame, otimizar o tratamento: estatina de alta potência (sinvastatina 20 mg é insuficiente para LDL 190), AAS, controle pressórico e cessação do tabagismo.",
    "tip": "DAC crônica: calcule a PPT. ≤ 5% nada; 5–15% ajustar ou angio-TC; 15–50% funcional ou angio-TC; 50–85% prova funcional; > 85% cateterismo. ECG basal alterado (HVE, BRE, marca-passo, digital) = prova funcional com imagem, não teste ergométrico.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretriz Brasileira de Doença Arterial Coronariana Crônica – 2024. Arq Bras Cardiol.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "A pergunta pede a ação de maior impacto na redução da INCIDÊNCIA da diarreia — ou seja, prevenção de novos casos, e não tratamento dos casos que já aconteceram. O aleitamento materno exclusivo até 6 meses é a medida de prevenção com maior impacto: o leite humano transfere anticorpos (IgA secretora), oligossacarídeos e fatores que protegem contra patógenos entéricos, e evita a exposição do lactente a água, mamadeiras e alimentos contaminados.\n\nManter o aleitamento após a introdução alimentar (até 2 anos ou mais) preserva parte dessa proteção.\n\n**Diarreia na infância — prevenção × tratamento:**\n\n• **Prevenção primária (reduz a incidência):** aleitamento materno exclusivo até 6 meses; saneamento básico e água tratada; lavagem das mãos; higiene no preparo dos alimentos; vacina oral contra rotavírus (2 e 4 meses); suplementação de vitamina A em áreas de risco.\n• **Tratamento (reduz gravidade, desidratação e mortalidade):** terapia de reidratação oral, zinco por 10–14 dias, manutenção da alimentação e do aleitamento, antibiótico só em disenteria com comprometimento do estado geral ou cólera.\n\nNíveis de prevenção de Leavell e Clark: primária (promoção da saúde e proteção específica — aleitamento, saneamento, vacina), secundária (diagnóstico e tratamento precoces — reidratação oral), terciária (reabilitação e limitação de sequelas).",
    "commentary": "**Alternativa (A):** distribuir sais de reidratação oral às famílias de lactentes que já estão com diarreia trata a desidratação dos casos existentes; reduz mortalidade, mas não reduz o surgimento de novos casos.\n\n**Alternativa (B):** a campanha sobre reidratação oral no domicílio também é medida de tratamento (prevenção secundária), com grande impacto sobre óbitos, mas não sobre a incidência.\n\n**Alternativa (C):** o uso racional de antibióticos evita resistência e efeitos adversos — a maioria das diarreias é viral e autolimitada —, mas não previne novos episódios. Além disso, palestras na unidade não são ação de base populacional.",
    "tip": "Pergunta sobre INCIDÊNCIA pede prevenção (aleitamento, saneamento, lavagem de mãos, vacina de rotavírus). Pergunta sobre mortalidade ou gravidade pede tratamento (reidratação oral, zinco).",
    "reference": "Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 23 — Saúde da criança: aleitamento materno e alimentação complementar. 2ª ed., 2015. OMS/UNICEF. Global Action Plan for Prevention and Control of Pneumonia and Diarrhoea (GAPPD), 2013.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "correctAnswer": 3,
    "disputed": [
      0
    ],
    "explanation": "**Gabarito oficial: D** (fasciotomia do antebraço e redução cirúrgica). A radiografia mostra fratura supracondiliana do úmero com desvio completo (Gartland III), 6 horas após a queda, com cotovelo muito edemaciado, deformado e pulsos radial e ulnar diminuídos. A banca interpretou o quadro como fratura com comprometimento vascular e risco de síndrome compartimental do antebraço: além de reduzir e fixar a fratura no centro cirúrgico (redução aberta quando a fechada não é possível ou quando é preciso explorar a artéria braquial), faz-se a fasciotomia para descomprimir os compartimentos e evitar a contratura isquêmica de Volkmann.\n\nPelos protocolos atuais, porém, a fasciotomia exige sinais de síndrome compartimental (dor desproporcional, dor à extensão passiva dos dedos, antebraço tenso), que o enunciado não descreve, e a 1ª conduta diante de pulso diminuído é a redução fechada urgente com fixação percutânea — por isso a alternativa A é discutível, mas a resposta oficial é D.\n\n**Roteiro da fratura supracondiliana do úmero na criança:**\n\n• **Classificação de Gartland (tipo extensão):** I — sem desvio → imobilização axilopalmar com cotovelo a 90° por cerca de 3 semanas. II — angulada com a cortical posterior íntegra → redução fechada e, na maioria, fixação com fios. III — desvio completo → redução fechada e fixação percutânea com fios de Kirschner, com urgência. IV — instabilidade em flexão e extensão.\n• **Lesões nervosas:** o nervo interósseo anterior (ramo do mediano) é o mais lesado — a criança não consegue fazer o sinal de OK com polegar e indicador; também nervo radial e, na fixação com fio medial, o ulnar (lesão iatrogênica).\n• **Lesão vascular:** mão sem pulso mas rosada e perfundida → redução e fixação, depois observação; mão branca, fria e sem perfusão → redução imediata e, se a perfusão não voltar, exploração da artéria braquial.\n• **Síndrome compartimental do antebraço:** dor desproporcional, que piora com a extensão passiva dos dedos, antebraço tenso. Exige fasciotomia; se não tratada, leva à contratura isquêmica de Volkmann.\n• **Complicação tardia mais comum:** cúbito varo (deformidade em coronha de espingarda), por consolidação viciosa.",
    "commentary": "**Alternativa (A):** discutível (em amarelo), mas não conta como acerto. A redução incruenta urgente é o passo que costuma restabelecer o fluxo da artéria braquial; o padrão atual é complementá-la com fixação percutânea por fios de Kirschner no centro cirúrgico, e não só com tala.\n\n**Alternativa (B):** a tala em posição de Velpeau (braço junto ao tórax) é usada em fraturas do úmero proximal e da clavícula; não reduz a fratura supracondiliana desviada nem resolve o compromisso vascular.\n\n**Alternativa (C):** tração esquelética com fixador externo não é o tratamento dessa fratura na criança e atrasaria a redução num membro com pulso diminuído.",
    "tip": "Supracondiliana desviada + pulso diminuído: redução urgente e fios de Kirschner; sem perfusão após reduzir, explorar a artéria. Dor desproporcional, dor à extensão passiva e antebraço tenso = síndrome compartimental → fasciotomia.",
    "reference": "Rockwood and Wilkins' Fractures in Children. 9ª ed. Supracondylar fractures of the distal humerus. American Academy of Orthopaedic Surgeons. Clinical Practice Guideline — Management of Pediatric Supracondylar Humerus Fractures.",
    "tags": [
      "cirurgia",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "image": "/images/sugenamed1-24.webp",
    "alert": "Gabarito oficial: D. A alternativa A (em amarelo) é discutível, mas não conta como acerto: sem sinais descritos de síndrome compartimental, a conduta padrão para fratura desviada com pulso diminuído é a redução fechada urgente (com fixação por fios), e a fasciotomia fica para síndrome compartimental estabelecida."
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
    "explanation": "Úlcera genital única, indolor, de base endurecida e fundo limpo, surgida cerca de 3 semanas após exposição, com linfonodo regional aumentado e não supurativo: cancro duro da sífilis primária (Treponema pallidum). O tratamento de sífilis recente (até 1 ano de evolução) é benzilpenicilina benzatina 2,4 milhões UI IM em dose única (1,2 milhão em cada glúteo).\n\nPedir teste treponêmico (teste rápido) e não treponêmico (VDRL), testar HIV e hepatites, e convocar as parcerias sexuais.\n\n**Sífilis — classificação e tratamento (PCDT IST, Ministério da Saúde):**\n\n• **Sífilis recente (primária, secundária ou latente com menos de 1 ano):** benzatina 2,4 milhões UI IM, dose única.\n• Sífilis tardia (latente com mais de 1 ano ou de duração ignorada, terciária): benzatina 2,4 milhões UI IM por semana, por 3 semanas (7,2 milhões UI no total).\n• **Neurossífilis:** penicilina cristalina 18–24 milhões UI/dia IV por 14 dias.\n• **Alergia a penicilina (fora da gestação):** doxiciclina 100 mg 12/12 h por 15 dias (recente) ou 30 dias (tardia), ou ceftriaxona. Na gestante, só a penicilina trata o feto — dessensibilizar se alérgica.\n• **Seguimento:** VDRL a cada 3 meses no 1º ano (mensal na gestante); resposta adequada = queda de 2 diluições em 6 meses (recente).\n\n**Diferencial das úlceras genitais:**\n\n• **Sífilis primária:** única, indolor, endurecida, fundo limpo; linfonodo não supurativo.\n• **Cancro mole (Haemophilus ducreyi):** múltiplas, dolorosas, fundo sujo e bordas irregulares; bubão que fistuliza por orifício único. Azitromicina 1 g dose única ou ceftriaxona.\n• **Herpes genital:** vesículas agrupadas que viram úlceras rasas, dolorosas, com ardor prévio. Aciclovir.\n• **Linfogranuloma venéreo (Chlamydia trachomatis L1–L3):** úlcera fugaz, depois bubão que fistuliza por vários orifícios (bico de regador). Doxiciclina 21 dias.\n• **Donovanose (Klebsiella granulomatis):** úlcera crônica, indolor, vermelho-viva, que sangra fácil. Doxiciclina por pelo menos 21 dias.",
    "commentary": "**Alternativa (A):** ceftriaxona 500 mg IM em dose única é o tratamento da gonorreia; não é o esquema da sífilis (a ceftriaxona só entra como alternativa, em vários dias).\n\n**Alternativa (B):** azitromicina 1 g em dose única trata clamídia e cancro mole; não é recomendada para sífilis pela resistência do treponema aos macrolídeos.\n\n**Alternativa (D):** doxiciclina por 21 dias é o esquema do linfogranuloma venéreo e da donovanose. Na sífilis, a doxiciclina é só alternativa em alérgicos, por 15 dias na forma recente.",
    "tip": "Úlcera genital única, indolor, endurecida e limpa = cancro duro. Sífilis recente: benzatina 2,4 milhões UI dose única; tardia: 3 doses semanais; neurossífilis: cristalina IV.",
    "reference": "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST), 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Febre alta de início súbito com artralgia intensa, edema articular e incapacidade de trabalhar e até de andar: o quadro em que a dor articular domina é o da chikungunya, arbovirose por alfavírus transmitida pelo Aedes aegypti e albopictus. O nome vem de uma língua africana e significa \"aqueles que se dobram\", pela postura antálgica.\n\nA artralgia costuma ser simétrica, poliarticular, em mãos, punhos e tornozelos, e pode persistir por meses.\n\n**Diferenciando as arboviroses:**\n\n• **Dengue:** febre alta, cefaleia, dor retro-orbitária e mialgia intensas; artralgia leve; exantema em cerca de metade dos casos; plaquetopenia e risco de extravasamento plasmático com a queda da febre.\n• **Chikungunya:** febre alta; artralgia intensa e incapacitante, com edema, desde o início; exantema frequente; pode cronificar.\n• **Zika:** febre baixa ou ausente; exantema pruriginoso precoce (1º–2º dia), conjuntivite não purulenta; artralgia leve. Complicações: microcefalia congênita e síndrome de Guillain-Barré.\n\n**Fases e tratamento da chikungunya:**\n\n• **Aguda (até 14 dias):** repouso, hidratação, paracetamol ou dipirona, compressas frias. Evitar AINE e AAS até excluir dengue. Grupos de risco (gestantes, idosos, recém-nascidos, comorbidades) precisam de avaliação mais próxima.\n• **Pós-aguda (até 3 meses):** AINE; prednisona em dose baixa (0,5 mg/kg/dia) nos casos moderados a graves.\n• **Crônica (mais de 3 meses):** hidroxicloroquina, sulfassalazina ou metotrexato, com fisioterapia; encaminhar à reumatologia se refratária.",
    "commentary": "**Alternativa (A):** na dengue predominam febre, cefaleia, dor retro-orbitária e mialgia intensa (febre quebra-ossos), mas a artralgia com edema articular e incapacidade de andar não é o padrão.\n\n**Alternativa (B):** a zika tem febre baixa ou ausente e destaca o exantema pruriginoso e a conjuntivite; dor e edema articular, quando ocorrem, são leves — não febre de 39 °C com incapacidade.\n\n**Alternativa (D):** a leptospirose vem com história de exposição a enchentes, esgoto ou urina de rato, mialgia intensa nas panturrilhas, sufusão conjuntival e, na forma grave (síndrome de Weil), icterícia rubínica, insuficiência renal e hemorragia pulmonar. Não tem artrite com edema como marca.",
    "tip": "Febre + artralgia intensa e incapacitante com edema = chikungunya. Mialgia e dor retro-orbitária = dengue. Exantema pruriginoso + conjuntivite com pouca febre = zika. Até excluir dengue, nada de AINE.",
    "reference": "Brasil. Ministério da Saúde. Chikungunya: manejo clínico, 2017. Brasil. Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "O valor preditivo negativo (VPN) é a probabilidade de a pessoa não ter a doença quando o teste dá negativo. Diferente da sensibilidade e da especificidade, que são propriedades do teste, os valores preditivos dependem da prevalência da doença na população testada.\n\nCom sensibilidade e especificidade fixas, quanto menor a prevalência, menos doentes há para gerar falsos-negativos — e maior o VPN. As prevalências são 3,0%, 2,0%, 2,5% e 1,8%: a menor é a do município 4, que tem o maior VPN.\n\n**Exemplo numérico (teste com sensibilidade de 90% e especificidade de 95%):**\n\n• **Município 1 (prevalência 3%):** em 10.000 pessoas, 300 doentes → 30 falsos-negativos; 9.700 sadios → 9.215 verdadeiros-negativos. VPN = 9.215 / 9.245 ≈ 99,68%.\n• **Município 4 (prevalência 1,8%):** 180 doentes → 18 falsos-negativos; 9.820 sadios → 9.329 verdadeiros-negativos. VPN = 9.329 / 9.347 ≈ 99,81%.\n\n**Regras da prevalência:**\n\n• Prevalência sobe → VPP sobe e VPN cai (mais doentes entre os positivos e entre os negativos).\n• Prevalência cai → VPP cai e VPN sobe. Por isso um teste de rastreamento em população de baixa prevalência gera muitos falsos-positivos, mas um resultado negativo é muito confiável.\n• Sensibilidade, especificidade e razões de verossimilhança não mudam com a prevalência.\n• Prevalência = casos existentes / população total. Aqui, conferir o cálculo: 1.500/50.000 = 3%; 900/45.000 = 2%; 1.625/65.000 = 2,5%; 864/48.000 = 1,8%.",
    "commentary": "**Alternativa (A):** o município 1 tem a maior prevalência (3%) — é onde o VPN é menor e o VPP é maior.\n\n**Alternativa (B):** o município 2 tem prevalência intermediária (2%), maior que a do município 4.\n\n**Alternativa (C):** o município 3 tem o maior número absoluto de casos (1.625), o que pode enganar, mas a prevalência é de 2,5%; o que importa para os valores preditivos é a proporção, não o número de casos.",
    "tip": "Valores preditivos dependem da prevalência: menor prevalência → maior VPN e menor VPP. Sensibilidade e especificidade não mudam. Compare prevalências, não números absolutos.",
    "reference": "Fletcher GS. Epidemiologia Clínica: elementos essenciais. 6ª ed. Medronho RA et al. Epidemiologia. 2ª ed. Cap. Validade de testes diagnósticos.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Episódio atual de 1 mês com humor deprimido, perda de interesse, fadiga, insônia, hiporexia e prejuízo importante nos estudos e na vida social: episódio depressivo maior. A chave está na história: há 3 meses, 5 dias de humor elevado, energia aumentada, menor necessidade de sono, fala excessiva e muitos projetos ao mesmo tempo, notados por terceiros, mas sem prejuízo acentuado e sem psicose — isso é um episódio hipomaníaco.\n\nDepressão maior + hipomania (sem mania) = transtorno afetivo bipolar tipo II. Reconhecer isso muda o tratamento: antidepressivo isolado pode induzir virada para mania ou ciclagem rápida.\n\n**Critérios (DSM-5-TR):**\n\n• **Mania:** humor elevado, expansivo ou irritável + energia aumentada por pelo menos 7 dias (ou qualquer duração, se hospitalizado), com prejuízo acentuado, necessidade de internação ou psicose.\n• **Hipomania:** os mesmos sintomas por pelo menos 4 dias consecutivos, com mudança perceptível por outras pessoas, mas sem prejuízo acentuado, sem internação e sem psicose.\n• **Sintomas (mnemônico DIGFAST):** distratibilidade, impulsividade/indiscrição, grandiosidade, fuga de ideias, aumento de atividade, diminuição da necessidade de sono (sleep), taquilalia.\n• **Transtorno bipolar tipo I:** pelo menos um episódio maníaco (episódios depressivos são comuns, mas não necessários).\n• **Transtorno bipolar tipo II:** pelo menos um episódio hipomaníaco e um depressivo maior, nunca mania.\n• **Ciclotimia:** por pelo menos 2 anos (1 ano em crianças e adolescentes), períodos de sintomas hipomaníacos e depressivos que não fecham critérios de episódio.\n• **\"Com características mistas\":** especificador de um episódio (sintomas do polo oposto ao mesmo tempo), não um diagnóstico por si só.\n\nTratamento da depressão bipolar: quetiapina, lurasidona, lítio ou lamotrigina (esta especialmente no tipo II); evitar antidepressivo em monoterapia.",
    "commentary": "**Alternativa (A):** o diagnóstico de transtorno depressivo maior exige que nunca tenha havido mania ou hipomania; o episódio de 5 dias de energia elevada descarta a depressão unipolar.\n\n**Alternativa (B):** na ciclotimia, os sintomas hipomaníacos e depressivos nunca fecham critérios de episódio e duram pelo menos 2 anos; aqui há episódio depressivo maior completo e um hipomaníaco completo.\n\n**Alternativa (D):** \"transtorno depressivo misto\" não é diagnóstico do DSM-5-TR. Existe o especificador \"com características mistas\", que exige sintomas hipomaníacos durante o episódio depressivo — não um episódio separado, 3 meses antes.",
    "tip": "Todo deprimido: pergunte por episódios prévios de energia alta e pouca necessidade de sono. Hipomania (≥ 4 dias, sem prejuízo acentuado) + depressão maior = bipolar tipo II. Evite antidepressivo isolado.",
    "reference": "American Psychiatric Association. DSM-5-TR — Manual Diagnóstico e Estatístico de Transtornos Mentais, 2022. Yatham LN et al. CANMAT and ISBD 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord, 2018.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Mulher jovem, tabagista, com dor abdominal crônica, diarreia com sangue, emagrecimento importante (IMC 16,8), anemia, massa em fossa ilíaca direita, fístula perianal e pioderma gangrenoso: doença de Crohn. A massa na fossa ilíaca direita representa o acometimento ileocecal (o local mais comum), com alças espessadas e aderidas; a fístula perianal traduz a inflamação transmural, marca da doença; o tabagismo é fator de risco e de pior evolução no Crohn; o pioderma gangrenoso é manifestação extraintestinal das doenças inflamatórias intestinais.\n\n**Crohn × retocolite ulcerativa (RCU):**\n\n• **Localização:** Crohn — qualquer ponto da boca ao ânus, sobretudo íleo terminal; RCU — só o cólon, começando sempre no reto.\n• **Distribuição:** Crohn — salteada (áreas doentes e sadias intercaladas); RCU — contínua, do reto para cima.\n• **Profundidade:** Crohn — transmural (fístulas, abscessos, estenoses); RCU — restrita à mucosa.\n• **Endoscopia e histologia:** Crohn — úlceras aftoides e longitudinais, aspecto em pedra de calçamento, granulomas não caseosos; RCU — friabilidade, perda do padrão vascular, pseudopólipos, abscessos de cripta.\n• **Clínica:** Crohn — dor, diarreia, emagrecimento, massa, doença perianal; RCU — diarreia com sangue, puxo e tenesmo.\n• **Tabagismo:** piora o Crohn; é \"protetor\" na RCU.\n• **Sorologia:** ASCA mais no Crohn; p-ANCA mais na RCU.\n• **Extraintestinais:** eritema nodoso, pioderma gangrenoso, artrite, uveíte e episclerite (ambas); colangite esclerosante primária mais na RCU.\n\nTratamento do Crohn moderado a grave: corticoide para induzir remissão; manutenção com imunossupressor (azatioprina) e/ou biológico (anti-TNF — infliximabe, adalimumabe —, vedolizumabe, ustequinumabe). Doença fistulizante perianal: drenagem de abscesso e seton, antibiótico (metronidazol, ciprofloxacino) e anti-TNF. Cessar o tabagismo. Antes de imunossuprimir, rastrear tuberculose latente e hepatites.",
    "commentary": "**Alternativa (B):** a retocolite ulcerativa é restrita ao cólon e à mucosa: não causa massa em fossa ilíaca direita nem fístula perianal, e o tabagismo, na verdade, se associa a menor risco de RCU.\n\n**Alternativa (C):** câncer colorretal aos 23 anos é raro (a não ser em síndromes hereditárias) e não explica fístula perianal nem pioderma gangrenoso.\n\n**Alternativa (D):** a tuberculose intestinal é o principal diferencial no Brasil, porque também acomete a região ileocecal e causa massa, dor e emagrecimento; mas costuma vir com febre e sudorese noturna, pode ter acometimento pulmonar, e fístula perianal e pioderma gangrenoso falam a favor de Crohn. Na dúvida, biópsia (granuloma caseoso, pesquisa de BAAR, cultura, PCR) — e excluir TB antes de imunossuprimir.",
    "tip": "Diarreia crônica + emagrecimento + massa em fossa ilíaca direita + fístula perianal (+ tabagismo) = doença de Crohn. Retocolite: começa no reto, é contínua e só da mucosa.",
    "reference": "Gordon H et al. ECCO Guidelines on Therapeutics in Crohn's Disease: Medical Treatment. J Crohns Colitis, 2024. Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas — Doença de Crohn.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Lactente de 8 meses com diarreia aguda aquosa, sem sangue, há 2 dias, febre baixa e vômitos ocasionais, aceitando bem os líquidos. Ao exame está ativo, com lágrimas, mucosa úmida, enchimento capilar < 2 s e fontanela normal: não há sinais de desidratação. A conduta é o Plano A do Ministério da Saúde — tratamento domiciliar com soro de reidratação oral após cada evacuação, para prevenir a desidratação —, mantendo o aleitamento e a alimentação habitual, e zinco por 10–14 dias.\n\n**Avaliação da hidratação e planos de tratamento (Ministério da Saúde):**\n\n• Sem desidratação (bem alerta, lágrimas presentes, boca úmida, bebe normalmente, sinal da prega desaparece logo, pulso cheio, enchimento capilar < 3 s) → Plano A, em casa: mais líquidos que o habitual; SRO após cada evacuação líquida — menores de 1 ano 50–100 mL, de 1 a 10 anos 100–200 mL, maiores de 10 anos à vontade; manter alimentação e aleitamento; zinco (10 mg/dia abaixo de 6 meses, 20 mg/dia a partir de 6 meses, por 10–14 dias); orientar sinais de perigo.\n• Desidratação (dois ou mais: irritado, olhos fundos, sem lágrimas, boca seca, sede intensa, prega desaparece lentamente, pulso rápido e fraco, enchimento capilar 3–5 s) → Plano B, na unidade: SRO 50–100 mL/kg em 4–6 h, reavaliando; se hidratado, volta ao Plano A.\n• Desidratação grave (comatoso ou hipotônico, não consegue beber, prega desaparece muito lentamente, pulso fraco ou ausente, enchimento capilar > 5 s) ou falha do Plano B → Plano C: hidratação venosa — fase rápida com soro fisiológico 0,9% (20 mL/kg em 30 minutos em menores de 5 anos, repetindo até melhorar), depois manutenção e reposição.\n• Antibiótico só em disenteria (sangue nas fezes) com comprometimento do estado geral (ciprofloxacino ou ceftriaxona) ou suspeita de cólera. Antieméticos e antidiarreicos não são rotina (ondansetrona em dose única pode ser usada em vômitos que impedem a via oral).",
    "commentary": "**Alternativa (A):** azitromicina não está indicada na diarreia aquosa aguda, quase sempre viral (rotavírus, norovírus) e autolimitada. Antibiótico fica para disenteria com comprometimento do estado geral ou cólera.\n\n**Alternativa (B):** hidratação venosa é o Plano C, para desidratação grave, choque ou falha da via oral. O lactente aceita líquidos e está hidratado; a via venosa traria riscos e custos sem benefício.\n\n**Alternativa (D):** albendazol não tem indicação empírica na diarreia aguda; parasitoses intestinais causam quadros mais arrastados e o tratamento é guiado por suspeita clínica ou exame.",
    "tip": "Diarreia aguda: classifique a hidratação. Sem desidratação = Plano A (SRO após cada evacuação em casa + zinco + manter alimentação). Desidratado = Plano B (SRO na unidade). Grave = Plano C (venosa).",
    "reference": "Brasil. Ministério da Saúde. Manejo do paciente com diarreia (cartaz de avaliação e tratamento), 2023. Sociedade Brasileira de Pediatria. Guia Prático de Atualização — Diarreia aguda: diagnóstico e tratamento, 2017.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Jovem com TCE após queda, perda de consciência inicial, chegada com Glasgow 13 e piora do nível de consciência cerca de 2 horas depois. A tomografia mostra coleção extra-axial hiperdensa em forma de lente biconvexa: hematoma extradural (epidural). O sangue fica entre o osso e a dura-máter, em geral por lesão da artéria meníngea média (muitas vezes com fratura do osso temporal), e a dura aderida às suturas limita a expansão, dando o formato de lente.\n\nO padrão clássico é perda de consciência, intervalo lúcido e nova deterioração à medida que o hematoma cresce. Com piora neurológica, o tratamento é a drenagem neurocirúrgica de urgência (craniotomia).\n\n**Roteiro do TCE:**\n\n• **Gravidade pelo Glasgow:** leve 13–15, moderado 9–12, grave 3–8 (grave = proteger a via aérea com intubação).\n• **Exame de imagem:** tomografia de crânio sem contraste. Radiografia de crânio não tem papel — não exclui lesão intracraniana, como mostra o caso.\n• **Hematoma extradural:** lente biconvexa, não cruza suturas; intervalo lúcido em cerca de 1/3 dos casos. Cirurgia se volume > 30 mL (independentemente do Glasgow), ou Glasgow < 9 com anisocoria; casos pequenos (< 30 mL, < 15 mm, desvio < 5 mm, Glasgow > 8, sem déficit) podem ser observados com tomografias seriadas.\n• **Hematoma subdural agudo:** meia-lua (crescente), cruza suturas, por rotura de veias-ponte; idosos, alcoolistas e anticoagulados. Cirurgia se espessura > 10 mm ou desvio da linha média > 5 mm.\n• Hemorragia subaracnóidea traumática, contusões e lesão axonal difusa (coma desproporcional à tomografia quase normal).\n• **Hipertensão intracraniana:** cabeceira a 30°, sedação e analgesia, normocapnia, salina hipertônica ou manitol; monitorização da PIC em TCE grave com tomografia alterada.\n• **Herniação:** anisocoria (midríase do lado da lesão), hemiparesia contralateral e tríade de Cushing (hipertensão, bradicardia, alteração respiratória).",
    "commentary": "**Alternativa (A):** a imagem não é de hematoma subdural (que tem forma de meia-lua e cruza suturas), e \"aspiração\" não é a técnica para hematoma agudo coagulado — o subdural agudo cirúrgico também se trata por craniotomia.\n\n**Alternativa (C):** observação em UTI só cabe em hematoma extradural pequeno, em paciente estável e sem déficit; aqui houve piora do nível de consciência, sinal de efeito de massa progressivo.\n\n**Alternativa (D):** monitorizar a PIC mede a pressão, mas não remove a causa. Diante de massa cirúrgica com deterioração, a conduta é drenar; a monitorização pode complementar depois.",
    "tip": "TCE + intervalo lúcido + lente biconvexa na tomografia = hematoma extradural (artéria meníngea média): drenagem cirúrgica de urgência. Meia-lua = subdural (veias-ponte).",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018. Bullock MR et al. Guidelines for the Surgical Management of Traumatic Brain Injury. Neurosurgery, 2006.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
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
    "explanation": "Gestante de 8 semanas com sangramento volumoso, cólica e colo uterino dilatado, sem eliminação de restos ovulares até o momento: abortamento inevitável. O dado que define é o colo aberto — a gestação não tem mais como evoluir, e a expulsão está em curso. A paciente está estável, então a conduta é o esvaziamento uterino (aspiração manual intrauterina, misoprostol ou curetagem), com analgesia e imunoglobulina anti-D se for Rh negativo.\n\n**Formas clínicas do abortamento:**\n\n• **Ameaça de abortamento:** sangramento leve, colo fechado, embrião vivo na ultrassonografia. Conduta: analgesia, repouso relativo, orientação; a maioria evolui bem.\n• **Abortamento inevitável (em curso):** sangramento abundante, cólicas, colo aberto, ainda sem eliminação completa. Conduta: esvaziamento uterino.\n• **Abortamento incompleto:** houve eliminação parcial; colo aberto e restos na cavidade (endométrio espesso, > 15 mm). Conduta: aspiração manual intrauterina (preferida até 12 semanas), misoprostol ou curetagem.\n• **Abortamento completo:** tudo foi eliminado; o sangramento e a dor diminuem, o colo se fecha e o endométrio fica fino (< 15 mm). Conduta: expectante.\n• **Abortamento retido:** embrião morto (sem batimentos com comprimento cabeça-nádega ≥ 7 mm) ou saco ≥ 25 mm sem embrião (anembrionada), colo fechado, sem expulsão. Conduta: misoprostol ou aspiração.\n• **Abortamento infectado:** febre, dor, secreção com odor fétido, após manipulação. Conduta: antibiótico de amplo espectro e esvaziamento.\n• **Abortamento de repetição:** 3 ou mais perdas consecutivas (alguns consideram 2) — investigar trombofilias (síndrome antifosfolípide), alterações uterinas, cromossômicas e endócrinas.",
    "commentary": "**Alternativa (A):** na ameaça de abortamento o colo está fechado e o sangramento costuma ser discreto; o colo aberto já indica que a perda é inevitável.\n\n**Alternativa (C):** no abortamento completo todo o conteúdo já foi expulso, o colo volta a se fechar e o sangramento diminui — o oposto do sangramento ativo com colo dilatado.\n\n**Alternativa (D):** no abortamento retido o embrião morreu, mas fica dentro do útero, com colo fechado e pouco ou nenhum sangramento.\n\nEstabilidade hemodinâmica não significa ausência de gravidade: sangramento volumoso pede acesso venoso, hemograma, tipagem e esvaziamento sem demora.",
    "tip": "Abortamento: olhe o colo. Fechado = ameaça, completo ou retido. Aberto = inevitável ou incompleto. Inevitável: colo aberto sem eliminação ainda; incompleto: já eliminou parte.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Abortamento espontâneo: classificação, diagnóstico e conduta, 2021. Brasil. Ministério da Saúde. Atenção humanizada ao abortamento: norma técnica. 2ª ed., 2011.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Mordedura por gato de rua que fugiu (animal não observável), com ferimentos lacerados nos dedos, em cidade com raiva confirmada em felinos no ano anterior. Pela classificação do Ministério da Saúde, ferimentos em mãos, pés, face, cabeça e pescoço, ou profundos, múltiplos ou extensos, são acidentes GRAVES — essas regiões têm muita inervação e o vírus chega mais rápido ao sistema nervoso.\n\nAcidente grave com animal que não pode ser observado indica vacina (imunização ativa) + soro (imunização passiva, infiltrada na ferida). No Brasil, a imunização passiva de escolha é o soro antirrábico heterólogo; a imunoglobulina humana antirrábica fica para quem tem contraindicação ao soro.\n\n**Profilaxia antirrábica pós-exposição (Ministério da Saúde):**\n\n• Lavar imediatamente a ferida com água corrente e sabão — a medida isolada mais importante. Não suturar (se inevitável, aproximar e infiltrar o soro antes). Avaliar antitetânica e antibiótico (amoxicilina-clavulanato em mordedura de gato, com alto risco de infecção).\n• **Acidente leve:** ferimento superficial e pouco extenso em tronco ou membros (exceto mãos e pés), lambedura de pele com lesão superficial.\n• **Acidente grave:** mãos, pés, face, cabeça, pescoço; ferimentos profundos, múltiplos ou extensos; lambedura de mucosas ou de lesão profunda.\n• **Cão ou gato observável por 10 dias:** em geral, observar o animal (sem vacina no acidente leve; no grave, iniciar vacina e suspender se o animal continuar sadio).\n• **Cão ou gato não observável, suspeito ou raivoso:** acidente leve → vacina; acidente grave → vacina + soro.\n• Morcegos e outros mamíferos silvestres (inclusive domiciliados), primatas: sempre acidente grave → vacina + soro.\n• **Esquema da vacina:** 4 doses intramusculares (dias 0, 3, 7 e 14) ou esquema intradérmico. Soro: dose única, o máximo possível infiltrado ao redor das lesões, até 7 dias após a 1ª dose de vacina.",
    "commentary": "**Alternativa (B):** vacina + imunoglobulina humana também é profilaxia completa e eficaz, por isso é discutível (aparece em amarelo), mas não conta como acerto. Pela norma do Ministério da Saúde, porém, a imunoglobulina é reservada a quem tem hipersensibilidade ao soro heterólogo, uso prévio de imunoglobulinas de origem equina ou contato frequente com animais — o soro é a primeira escolha.\n\n**Alternativa (C):** soro e imunoglobulina são duas formas da mesma imunização passiva; usar as duas juntas é duplicidade, e a falta da vacina deixa o paciente sem proteção duradoura.\n\n**Alternativa (D):** dispensar o soro em acidente grave com gato não observável em área com raiva felina recente é erro: a imunização passiva cobre o período até a vacina gerar anticorpos (cerca de 7 a 14 dias).",
    "tip": "Mãos, pés, face, cabeça, pescoço, ferimento profundo ou múltiplo = acidente grave. Grave + animal não observável = vacina + soro (soro heterólogo é 1ª escolha no Brasil). Lave com água e sabão e não suture.",
    "reference": "Brasil. Ministério da Saúde. Protocolo de profilaxia pré, pós e reexposição da raiva humana no Brasil, 2022. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "disputed": [
      1
    ],
    "alert": "Gabarito oficial: A. A alternativa B (em amarelo) é discutível, mas não conta como acerto: vacina + imunoglobulina humana também é profilaxia completa; o soro heterólogo é a 1ª escolha do Ministério da Saúde, e a imunoglobulina fica para quem não pode recebê-lo."
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
    "explanation": "O desastre (chuvas intensas, desalojados em abrigos, falta de água potável e energia) elevou os casos de doenças de transmissão hídrica e alimentar. A pergunta é sobre o papel da vigilância epidemiológica do MINISTÉRIO DA SAÚDE — a esfera federal. No SUS, a execução das ações (atender, investigar, coletar água, desinfetar abrigos) é municipal; à União cabe coordenar o sistema nacional, apoiar tecnicamente e articular as três esferas.\n\nPor isso a ação prioritária do Ministério é se articular com a secretaria local para estabelecer fluxos de informação entre município, estado e União, que permitem dimensionar o evento e direcionar a resposta.\n\n**Vigilância em saúde em emergências:**\n\n• **Município:** executa — notificação, investigação dos surtos, assistência, coleta de amostras, ações nos abrigos.\n• **Estado:** apoia e coordena os municípios, laboratório central (LACEN), investigação de maior complexidade.\n• **União (Ministério da Saúde):** normatiza, coordena o sistema nacional, apoio técnico e logístico; CIEVS (Centro de Informações Estratégicas em Vigilância em Saúde) para detecção e resposta; Força Nacional do SUS; pode declarar Emergência em Saúde Pública de Importância Nacional (ESPIN).\n• **Surto de DTHA:** dois ou mais casos com quadro semelhante após exposição comum (alimento ou água). É de notificação imediata.\n• **Vigilância ambiental (VIGIAGUA):** qualidade da água para consumo humano — orientar hipoclorito para tratar a água no domicílio (2 gotas de hipoclorito 2,5% por litro, 30 minutos de espera).\n• **Atenção primária:** manter o atendimento, com reorganização da agenda para a demanda espontânea; reidratação oral e identificação de sinais de gravidade.",
    "commentary": "**Alternativa (B):** o Ministério da Saúde não gerencia agendas de unidades básicas — isso é do município. E suspender todas as consultas de rotina é medida desproporcional: gestantes, crianças e doentes crônicos continuam precisando de cuidado; o caminho é reorganizar a agenda para absorver a demanda.\n\n**Alternativa (C):** desinfecção de superfícies nos abrigos é ação operacional local, de execução municipal (e não é atribuição da vigilância epidemiológica federal); além disso, a prioridade em DTHA é a água para consumo e o manejo de alimentos.\n\n**Alternativa (D):** análise da água para consumo é relevante, mas cabe à vigilância ambiental (VIGIAGUA), executada pelo município com apoio do LACEN; não é a ação prioritária da vigilância epidemiológica do Ministério.",
    "tip": "Na vigilância, a esfera muda a resposta: município executa, estado apoia e coordena regionalmente, União normatiza, coordena e articula fluxos de informação (CIEVS).",
    "reference": "Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024 (capítulo Doenças de transmissão hídrica e alimentar). Brasil. Lei nº 8.080/1990.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Comunicar um óbito — ainda mais uma morte inesperada, possivelmente por suicídio — é um procedimento médico com técnica. A alternativa D reúne os passos do protocolo SPIKES: lugar reservado, explorar o que a família já sabe, acolher as emoções e oferecer apoio e seguimento.\n\nEm mortes por suicídio, a família tem risco maior de luto complicado, depressão e até suicídio: ofertar encaminhamento faz parte da posvenção (cuidado dos enlutados).\n\n**Protocolo SPIKES para más notícias:**\n\n• **S — Setting (ambiente):** lugar reservado, todos sentados, sem interrupções (celular silenciado), presença das pessoas que a família quiser; apresentar-se e confirmar quem são os familiares.\n• **P — Perception (percepção):** perguntar o que já sabem sobre o que aconteceu.\n• **I — Invitation (convite):** avaliar o quanto querem saber naquele momento.\n• **K — Knowledge (conhecimento):** dar a notícia de forma clara, com frase de aviso antes (\"infelizmente, tenho uma notícia difícil\"), usando a palavra \"morreu\" ou \"faleceu\", sem eufemismos nem termos técnicos.\n• **E — Emotions (emoções):** silêncio, acolher choro, raiva ou culpa com respostas empáticas; não minimizar nem julgar.\n• **S — Strategy and Summary (estratégia e resumo):** explicar os próximos passos e oferecer apoio.\n\nNa prática, após o óbito: permitir que a família veja o corpo; explicar os trâmites — morte violenta ou suspeita (incluindo suicídio) vai para o IML, e a declaração de óbito é emitida pelo médico legista, não pelo médico do hospital; manter o sigilo das informações clínicas do paciente.",
    "commentary": "**Alternativa (A):** começa bem (local reservado, empatia), mas oferece benzodiazepínico de rotina. O luto é processo normal; benzodiazepínico não previne luto complicado, pode atrasar a elaboração e traz risco de dependência e de intoxicação — risco relevante em família enlutada por suicídio.\n\n**Alternativa (B):** comunicar na recepção, diante de outras pessoas, viola a privacidade. E \"tranquilizar\" sobre os sinais que passaram despercebidos é promessa que o médico não pode fazer; o caminho é acolher a culpa, sem negá-la nem reforçá-la.\n\n**Alternativa (C):** além do local inadequado, expor todo o prontuário e o histórico pregresso não diminui o sofrimento e pode violar o sigilo médico, que se mantém após a morte. A informação deve ser a necessária, no ritmo da família.",
    "tip": "Má notícia = SPIKES: lugar reservado, o que sabem, quanto querem saber, notícia clara (\"morreu\"), acolher emoções, próximos passos. Benzodiazepínico não é cuidado de luto.",
    "reference": "Baile WF et al. SPIKES — A six-step protocol for delivering bad news. Oncologist, 2000. Brasil. Ministério da Saúde. Manual de instruções para o preenchimento da declaração de óbito, 2022.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Jovem com edema que começou pelos olhos e tornozelos, urina espumosa, proteinúria 3+ sem hematúria, albumina baixa, colesterol e triglicerídeos altos e ascite: síndrome nefrótica. A lesão da barreira de filtração glomerular deixa passar grande quantidade de albumina (urina espumosa); a queda da albumina reduz a pressão oncótica e causa edema e ascite; o fígado compensa produzindo mais lipoproteínas, daí a dislipidemia.\n\nA hipertensão pode ocorrer em algumas causas (como a glomeruloesclerose segmentar e focal), mas o que define o quadro é a tríade proteinúria maciça + hipoalbuminemia + edema.\n\n**Síndrome nefrótica × nefrítica:**\n\n• **Nefrótica:** proteinúria > 3,5 g/24 h (ou relação proteína/creatinina > 3,5 g/g) no adulto, hipoalbuminemia (< 3,5 g/dL), edema, dislipidemia e lipidúria; sedimento pobre (pouca ou nenhuma hematúria).\n• **Nefrítica:** hematúria dismórfica com cilindros hemáticos, hipertensão, oligúria, edema e proteinúria < 3,5 g/24 h; ex.: glomerulonefrite pós-estreptocócica, nefropatia por IgA, lúpus.\n\n**Causas de síndrome nefrótica:**\n\n• **Primárias:** glomeruloesclerose segmentar e focal (causa mais comum em adultos no Brasil), nefropatia membranosa (anticorpo anti-PLA2R; a mais associada a trombose de veia renal), doença de lesão mínima (a principal em crianças).\n• **Secundárias:** diabetes, amiloidose, lúpus (classe V), hepatites B e C, HIV, sífilis, neoplasias, medicamentos (AINE).\n\n**Complicações e tratamento:**\n\n• **Complicações:** tromboembolismo (perda de antitrombina III), infecções (perda de imunoglobulinas — peritonite pneumocócica), dislipidemia, desnutrição, lesão renal aguda.\n• **Medidas gerais:** restrição de sal, diurético de alça, IECA ou BRA (reduz a proteinúria), estatina, anticoagulação em casos selecionados (albumina muito baixa, sobretudo na membranosa).\n• No adulto, a biópsia renal define a doença de base e o tratamento específico (corticoide, imunossupressores).",
    "commentary": "**Alternativa (A):** a síndrome nefrítica tem hematúria como achado central, com cilindros hemáticos e oligúria; a urina deste paciente não tem hematúria, e a hipoalbuminemia com dislipidemia e ascite aponta para nefrótica.\n\n**Alternativa (C):** a nefropatia hipertensiva evolui lentamente, ao longo de anos, com proteinúria discreta e rins diminuídos; não causa edema agudo com hipoalbuminemia e ascite em 1 semana num jovem sem história de hipertensão.\n\n**Alternativa (D):** a necrose tubular aguda é causa de lesão renal aguda (isquemia, sepse, nefrotóxicos), com cilindros granulosos (\"marrom-lama\") e queda da função renal; não produz proteinúria maciça, hipoalbuminemia e dislipidemia.\n\nA pressão de 180 × 110 mmHg precisa de controle e de avaliação de lesão de órgão-alvo.",
    "tip": "Urina espumosa + edema + hipoalbuminemia + dislipidemia = síndrome nefrótica (proteinúria > 3,5 g/dia). Hematúria + hipertensão + oligúria = nefrítica. Adulto nefrótico = biópsia renal.",
    "reference": "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int, 2021. Sociedade Brasileira de Nefrologia — Diretrizes de glomerulopatias.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Lactente de 2 meses encontrado morto durante o sono, com autópsia completa, análise da cena do óbito e revisão da história sem nenhuma causa identificada: é exatamente a definição de síndrome da morte súbita do lactente (SMSL) — morte súbita e inesperada de menor de 1 ano durante o sono, que permanece sem explicação após investigação completa.\n\nO pico ocorre entre 2 e 4 meses, e 90% dos casos acontecem antes dos 6 meses. A teoria mais aceita é a do triplo risco: lactente vulnerável (alteração no controle do despertar e da respiração no tronco cerebral) + período crítico do desenvolvimento + estressor externo (posição prona, superaquecimento, cama compartilhada).\n\n**Fatores de risco e proteção:**\n\n• **Risco:** dormir de bruços ou de lado; superfície macia, travesseiros, protetores de berço, cobertores e brinquedos; cama compartilhada com adultos (sobretudo se os pais fumam, bebem ou usam sedativos, ou em sofá); superaquecimento; tabagismo na gestação e exposição ao fumo; prematuridade, baixo peso, sexo masculino; mãe jovem e pré-natal inadequado.\n• **Proteção:** dormir de barriga para cima (campanha \"Back to Sleep\"/\"Dormir de barriga para cima\", que reduziu os casos em mais de 50%); berço com colchão firme e sem objetos; dormir no quarto dos pais, mas em berço próprio, até pelo menos 6 meses; aleitamento materno; chupeta na hora de dormir (depois de o aleitamento estar estabelecido); vacinação em dia; evitar fumo.\n\nTerminologia: morte súbita inesperada do lactente é o termo amplo; após a investigação, ela é atribuída a uma causa (asfixia, infecção, arritmia, maus-tratos) ou, se nada for encontrado, classificada como SMSL — um diagnóstico de exclusão.",
    "commentary": "**Alternativa (A):** a broncoaspiração deixaria sinais na autópsia (conteúdo gástrico nas vias aéreas, pneumonite); a investigação foi negativa. Lactente dormindo de costas não tem mais risco de aspiração — esse medo é um dos mitos que atrasam a adoção da posição supina.\n\n**Alternativa (C):** a asfixia mecânica (sufocação pelo corpo de um adulto ou por roupa de cama) é uma causa de morte súbita inesperada que precisa ser demonstrada pela cena e pela autópsia. A cama compartilhada aumenta o risco, mas, sem achados que comprovem asfixia, o óbito não pode ser atribuído a ela.\n\n**Alternativa (D):** a síndrome do QT longo é canalopatia, em geral genética, sem alteração estrutural do coração — não é \"devida a cardiopatia congênita\". Pode explicar uma parte das mortes súbitas, mas não foi demonstrada.",
    "tip": "Morte de lactente < 1 ano durante o sono, com autópsia e cena sem causa = SMSL (pico 2–4 meses). Prevenção: de barriga para cima, berço firme e vazio, no quarto dos pais sem dividir a cama, aleitamento, sem fumo.",
    "reference": "Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022. Sociedade Brasileira de Pediatria. Documento científico — Síndrome da morte súbita do lactente.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Bolhas, vermelhidão e edema = queimadura de 2º grau (espessura parcial), que entra no cálculo da superfície corporal queimada (SCQ); queimadura só com eritema (1º grau) não entra. Pela regra dos nove do adulto: tronco anterior 18% + membros superiores inteiros, faces anterior e posterior, dos dois lados (9% cada = 18%) + face anterior do membro inferior direito 9% = 45% da SCQ. A mão e a palma estão dentro dos 9% de cada membro superior.\n\nReposição volêmica (ATLS 10ª ed. e American Burn Association): para adulto com queimadura térmica, iniciar com Ringer lactato 2 mL × peso (kg) × %SCQ nas primeiras 24 horas: 2 × 70 × 45 = 6.300 mL. Metade (3.150 mL) nas primeiras 8 horas, contadas a partir do momento da queimadura, e a outra metade nas 16 horas seguintes. O volume é ponto de partida: ajustar pela diurese.\n\n**Roteiro do grande queimado:**\n\n• **Profundidade:** 1º grau (epiderme — eritema e dor, não entra na conta); 2º grau superficial (bolhas, leito rosado, muita dor); 2º grau profundo (leito pálido, menos dor); 3º grau (couro, branco ou marrom, indolor, exige enxerto).\n• **Regra dos nove no adulto:** cabeça e pescoço 9%, cada membro superior 9%, tronco anterior 18%, tronco posterior 18%, cada membro inferior 18% (9% anterior e 9% posterior), períneo 1%. A palma do paciente (com dedos) vale cerca de 1% — útil em queimaduras irregulares. Em crianças, usar a tabela de Lund-Browder (cabeça proporcionalmente maior).\n• **Fórmulas:** 2 mL/kg/%SCQ em adultos; 3 mL/kg/%SCQ em crianças (com soro glicosado de manutenção nas menores); 4 mL/kg/%SCQ em queimaduras elétricas. A fórmula clássica de Parkland usava 4 mL/kg/%SCQ para todos, o que levava a excesso de volume.\n• **Monitorização:** diurese alvo de 0,5 mL/kg/h no adulto (30–50 mL/h), 1 mL/kg/h em crianças < 30 kg e 1–1,5 mL/kg/h em queimadura elétrica.\n• **Via aérea:** intubação precoce se queimadura de face, vibrissas queimadas, escarro carbonáceo, rouquidão, estridor ou queimadura em ambiente fechado.\n• **Encaminhar a centro de queimados:** > 10% de SCQ de espessura parcial, 3º grau, face, mãos, pés, genitais, períneo e grandes articulações, queimaduras elétricas e químicas, lesão inalatória.",
    "commentary": "**Alternativa (A):** 5.040 mL em 8 horas corresponde à fórmula de 4 mL/kg aplicada a 36% de SCQ (4 × 70 × 36 = 10.080 mL, metade em 8 h) — erro de área (não somou a face posterior dos membros superiores ou o membro inferior) e uso da Parkland antiga.\n\n**Alternativa (B):** 9.450 mL em 24 horas equivale a 3 mL/kg/%SCQ (3 × 70 × 45), fórmula de crianças; no adulto, superestima o volume e aumenta o risco de síndrome compartimental abdominal e edema pulmonar.\n\n**Alternativa (D):** 2.520 mL em 8 horas corresponde a 2 mL/kg aplicados a 36% (5.040 mL em 24 h, metade em 8 h) — subestima a área queimada.\n\nAtenção: com a fórmula de Parkland (4 mL/kg/%SCQ), o total seria 12.600 mL (6.300 mL nas primeiras 8 h); essa opção não existe, o que confirma que a banca usou 2 mL/kg/%SCQ.",
    "tip": "Adulto queimado: Ringer lactato 2 mL × kg × %SCQ (só 2º e 3º graus) em 24 h, metade nas primeiras 8 h desde a queimadura; criança 3 mL; elétrica 4 mL. Ajuste pela diurese (0,5 mL/kg/h no adulto).",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Lesões térmicas). American Burn Association. Clinical Practice Guideline on Burn Shock Resuscitation, 2024. Brasil. Ministério da Saúde. Cartilha para tratamento de emergência das queimaduras, 2012.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
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
    "explanation": "Gestação de 41 semanas e 5 dias, bem datada por ultrassonografia de 1º trimestre, sem trabalho de parto, com vitalidade fetal tranquilizadora e apresentação cefálica. A partir de 41 semanas, o risco de óbito fetal, síndrome de aspiração meconial e insuficiência placentária aumenta, e a recomendação é induzir o parto (até 42 semanas).\n\nComo o colo está desfavorável — posterior, firme, fechado, apagado 30% (índice de Bishop baixo) —, a indução começa pela maturação (preparo) cervical, e não por ocitocina ou amniotomia.\n\n**Roteiro da gestação prolongada e da indução:**\n\n• **Definições:** termo precoce 37–38 6/7; termo completo 39–40 6/7; termo tardio 41–41 6/7; pós-termo ≥ 42 semanas. A datação confiável é a do 1º trimestre.\n• **A partir de 40–41 semanas:** vigilância da vitalidade (cardiotocografia e volume de líquido amniótico, 2 vezes por semana) e oferta de descolamento de membranas.\n• **Indução:** recomendada a partir de 41 semanas, antes de 42; vitalidade alterada ou oligoâmnio indicam resolução imediata.\n• Índice de Bishop (dilatação, apagamento, altura da apresentação, consistência e posição do colo): ≤ 6 = colo desfavorável → maturação cervical; > 6 (ou ≥ 8) = colo favorável → ocitocina e amniotomia.\n• **Maturação cervical:** misoprostol 25 µg via vaginal a cada 6 horas (contraindicado com cicatriz uterina) ou métodos mecânicos (sonda de Foley intracervical).\n• **Contraindicações à indução:** as mesmas do parto vaginal (placenta prévia, apresentação anômala, vasa prévia, herpes ativo, cicatriz uterina corporal).\n• **Cesariana:** só com indicação obstétrica; gestação prolongada por si só não é indicação.",
    "commentary": "**Alternativa (A):** manter conduta expectante após 41 semanas expõe o feto ao risco crescente de insuficiência placentária e óbito; a recomendação é induzir antes de 42 semanas.\n\n**Alternativa (B):** a amniotomia exige colo dilatado e apresentação insinuada; com colo fechado e posterior, é tecnicamente inviável e aumentaria o risco de prolapso de cordão e infecção.\n\n**Alternativa (D):** gestação prolongada, com feto cefálico e bem, não é indicação de cesariana. A indução com colo desfavorável não aumenta a taxa de cesárea em relação à conduta expectante.",
    "tip": "41 semanas = induzir antes de 42. Bishop ≤ 6 = maturar o colo (misoprostol ou Foley); Bishop favorável = ocitocina e amniotomia. Cesariana só com indicação obstétrica.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Gestação prolongada e indução do trabalho de parto, 2021. ACOG Practice Bulletin nº 146: Management of Late-Term and Postterm Pregnancies.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Mulher de 40 anos sem sintomas tireoidianos, com TSH 7,10 mUI/L, T4 livre normal e anti-TPO negativo: hipotireoidismo subclínico leve (TSH entre o limite superior e 10). O primeiro passo é confirmar: repetir TSH e T4 livre em 2 a 3 meses, porque o TSH pode subir de forma transitória (recuperação de doença aguda, estresse, variação laboratorial) e voltar ao normal em boa parte dos casos.\n\nSem anti-TPO positivo, sem bócio, sem desejo de engravidar e com TSH < 10, a conduta é reavaliação clínica e laboratorial periódica, sem levotiroxina. A tristeza de 3 semanas após a morte do marido é luto, não um quadro tireoidiano nem depressão maior.\n\n**Hipotireoidismo subclínico — quando tratar:**\n\n• **Definição:** TSH acima do valor de referência com T4 livre normal; confirmar com nova dosagem.\n• **TSH ≥ 10 mUI/L:** tratar com levotiroxina (maior risco de progressão e cardiovascular).\n• **TSH entre o limite e 10:** individualizar — considerar tratamento se houver sintomas de hipotireoidismo, anti-TPO positivo (risco de progressão de cerca de 4% ao ano), bócio, gestação ou desejo de engravidar, insuficiência cardíaca ou dislipidemia; nos demais, acompanhar com TSH a cada 6–12 meses.\n• **Idosos (acima de 65–70 anos):** o TSH normal sobe com a idade; em geral não tratar com TSH < 10.\n• **Gestação:** tratar com TSH acima do limite do trimestre, sobretudo com anti-TPO positivo.\n• **Ultrassonografia de tireoide:** só se houver nódulo ou bócio palpável; não é parte da investigação de disfunção.\n\nLuto × depressão: o luto normal tem tristeza em ondas, ligada ao falecido, com autoestima preservada; depressão maior tem humor deprimido persistente, culpa, desvalia, ideação suicida e prejuízo global. Nas primeiras semanas, a conduta é acolher e acompanhar.",
    "commentary": "**Alternativa (A):** levotiroxina não está indicada num primeiro TSH de 7,1, sem confirmação, sem sintomas, sem anti-TPO positivo e sem plano de gestação; tratar sem indicação traz risco de hipertireoidismo iatrogênico (arritmia, perda óssea).\n\n**Alternativa (B):** ultrassonografia de tireoide avalia estrutura (nódulos, bócio) e não acrescenta nada à disfunção hormonal quando o exame físico é normal.\n\n**Alternativa (D):** sertralina não está indicada para luto normal de 3 semanas; antidepressivo exige diagnóstico de episódio depressivo, com critérios de duração e intensidade.",
    "tip": "TSH alto com T4 livre normal = hipotireoidismo subclínico: repita em 2–3 meses. Trate se TSH ≥ 10, ou se 4,5–10 com sintomas, anti-TPO positivo, bócio ou gestação. Ultrassom só se houver nódulo ou bócio.",
    "reference": "Sgarbi JA et al. Consenso brasileiro para a abordagem clínica e tratamento do hipotireoidismo subclínico em adultos — SBEM. Arq Bras Endocrinol Metab, 2013. Pearce SHS et al. 2013 ETA Guideline: Management of Subclinical Hypothyroidism. Eur Thyroid J, 2013.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Mulher jovem com fenômeno de Raynaud, mãos edemaciadas (\"mãos inchadas\", em dedos de salsicha), artralgias, rigidez matinal e disfagia para sólidos (dismotilidade esofágica), com FAN pontilhado grosso em título alto e anti-U1-RNP isolado em altos títulos, sem anti-DNA, anti-Sm, anti-Scl-70 ou anti-Jo-1. É o perfil da doença mista do tecido conjuntivo (DMTC): síndrome de sobreposição com traços de lúpus, esclerose sistêmica e miosite, cujo marcador obrigatório é o anti-U1-RNP em título alto.\n\nCritérios diagnósticos da DMTC (Alarcón-Segovia): anti-U1-RNP em título alto + pelo menos 3 de 5 achados clínicos — edema de mãos, sinovite, miosite, fenômeno de Raynaud e esclerodactilia (sendo obrigatória a presença de miosite ou sinovite quando os 3 são edema, Raynaud e esclerodactilia).\n\nA principal causa de morte é a hipertensão arterial pulmonar, que deve ser rastreada com ecocardiograma. O tratamento é dirigido às manifestações (bloqueador de canal de cálcio para Raynaud, hidroxicloroquina e AINE para artrite, corticoide e imunossupressores para miosite ou serosite).\n\n**Autoanticorpos que ajudam a separar as colagenoses:**\n\n• **Lúpus eritematoso sistêmico:** FAN (sensível, quase sempre positivo); anti-DNA nativo (atividade e nefrite) e anti-Sm (o mais específico); anti-Ro e anti-La (lúpus cutâneo subagudo, lúpus neonatal); antifosfolípides.\n• **Esclerose sistêmica:** anti-Scl-70/topoisomerase I (forma difusa, doença intersticial pulmonar); anticentrômero (forma limitada/CREST, hipertensão pulmonar); anti-RNA polimerase III (crise renal esclerodérmica).\n• **Miopatias inflamatórias:** anti-Jo-1 e outros antissintetase (miosite + doença pulmonar intersticial + mãos de mecânico + artrite + Raynaud); anti-Mi-2 (dermatomiosite clássica); anti-MDA5 (dermatomiosite amiopática com doença pulmonar grave).\n• **Síndrome de Sjögren:** anti-Ro e anti-La.\n• **Lúpus induzido por drogas:** anti-histona (hidralazina, procainamida, isoniazida).\n• **Doença mista do tecido conjuntivo:** anti-U1-RNP isolado em título alto.",
    "commentary": "**Alternativa (A):** a polimiosite se apresenta com fraqueza muscular proximal e simétrica, CK elevada e alterações na eletroneuromiografia e biópsia; Raynaud e mãos edemaciadas não são sua marca, e o anti-Jo-1 (da síndrome antissintetase) é negativo.\n\n**Alternativa (B):** a esclerose sistêmica também tem Raynaud, mãos edemaciadas na fase inicial e disfagia, mas os anticorpos típicos — anti-Scl-70 ou anticentrômero — são negativos, e não há espessamento cutâneo descrito. Anti-RNP isolado em título alto aponta para a sobreposição.\n\n**Alternativa (C):** o lúpus tem FAN positivo, mas o anti-DNA nativo e o anti-Sm, os mais específicos, são negativos, e faltam as manifestações típicas (rash malar, fotossensibilidade, úlceras orais, serosite, nefrite, citopenias — o hemograma é normal).\n\nA DMTC pode evoluir, com o tempo, para uma colagenose definida (mais comumente esclerose sistêmica ou lúpus); o seguimento deve ser periódico.",
    "tip": "Raynaud + mãos inchadas + artrite ± miosite ± disfagia com anti-U1-RNP isolado em título alto = doença mista do tecido conjuntivo. Rastreie hipertensão pulmonar.",
    "reference": "Alarcón-Segovia D, Cardiel MH. Comparison between 3 diagnostic criteria for mixed connective tissue disease. J Rheumatol, 1989. Sociedade Brasileira de Reumatologia. Doença mista do tecido conjuntivo — cartilha e recomendações.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Lactente de 15 meses, com aleitamento materno só até 4 meses (provável introdução precoce de leite de vaca), palidez e anemia microcítica e hipocrômica (Hb 8,1, VCM 66, CHCM 29), com RDW alto e ferritina muito baixa (9): anemia ferropriva, a anemia mais comum da infância, com pico entre 6 e 24 meses.\n\nA pergunta, porém, pede os diagnósticos diferenciais da anemia MICROCÍTICA: deficiência de ferro, talassemias e anemia sideroblástica (e também anemia de doença crônica e intoxicação por chumbo). Só a alternativa C reúne exclusivamente causas de microcitose.\n\n**Diferencial das anemias microcíticas:**\n\n• **Ferropriva:** ferritina baixa (melhor exame; < 12 ng/mL em crianças), ferro sérico baixo, transferrina e capacidade de ligação altas, saturação baixa, RDW alto, plaquetas normais ou altas.\n• **Talassemia minor (traço):** microcitose acentuada com anemia leve, número de hemácias normal ou alto, RDW normal, ferritina normal; índice de Mentzer (VCM ÷ número de hemácias em milhões) < 13. Beta-talassemia minor: HbA2 > 3,5% na eletroforese; alfa-talassemia: eletroforese normal (diagnóstico molecular).\n• **Anemia de doença crônica:** em geral normocítica, às vezes microcítica; ferritina normal ou alta, ferro e transferrina baixos.\n• **Anemia sideroblástica:** sideroblastos em anel na medula; ferro e ferritina altos; causas hereditárias, álcool, isoniazida, deficiência de B6, chumbo.\n• **Intoxicação por chumbo:** pontilhado basófilo, dor abdominal, alteração neurológica.\n\nAtenção: a deficiência de ferro reduz a HbA2 e pode mascarar uma beta-talassemia — refazer a eletroforese após repor o ferro.\n\n**Tratamento e prevenção:**\n\n• **Tratamento:** ferro elementar 3–5 mg/kg/dia por via oral, longe das refeições e do leite, até normalizar a hemoglobina e por mais 2–3 meses para repor estoques (ferritina). Reticulocitose em 5–10 dias confirma a resposta.\n• **Profilaxia (Ministério da Saúde):** suplementação de ferro dos 6 aos 24 meses; prematuros e baixo peso, a partir de 30 dias de vida.\n• **Prevenção:** aleitamento materno exclusivo até 6 meses; evitar leite de vaca integral antes de 1 ano (pobre em ferro e causa micro-hemorragias intestinais); alimentos ricos em ferro (carnes) e vitamina C na alimentação complementar.",
    "commentary": "**Alternativa (A):** deficiência de ácido fólico causa anemia MACROcítica (megaloblástica), e a anemia falciforme é normocítica e hemolítica, com HbS na eletroforese.\n\n**Alternativa (B):** deficiência de vitamina B12 causa anemia macrocítica; a anemia de doença crônica é diferencial possível de microcitose, mas, junto com a B12, a alternativa mistura mecanismos que não explicam VCM de 66.\n\n**Alternativa (D):** traço falcêmico não causa anemia (é portador assintomático), e a esferocitose hereditária é anemia hemolítica com CHCM aumentada, não diminuída.",
    "tip": "Microcítica e hipocrômica: pense em ferro (ferritina baixa, RDW alto), talassemia (Mentzer < 13, RDW normal, HbA2 > 3,5% na beta), doença crônica e sideroblástica. Ferropenia baixa a HbA2: repita após repor ferro.",
    "reference": "Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva: atualização — destaques 2021. Brasil. Ministério da Saúde. Programa Nacional de Suplementação de Ferro: manual de condutas gerais, 2013.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "correctAnswer": 0,
    "disputed": [
      2
    ],
    "explanation": "**Gabarito oficial: A** (contusão miocárdica). Trauma fechado do tórax anterior, com escoriação oblíqua do cinto de segurança, num homem de 60 anos: o impacto direto sobre o esterno é o mecanismo clássico da contusão miocárdica (lesão cardíaca contusa), que causa arritmias, disfunção ventricular e, raramente, ruptura de câmara com hemopericárdio — e, por essa via, tamponamento.\n\nA banca associou o quadro ao mecanismo do trauma. Os achados descritos, porém — turgência jugular, abafamento de bulhas e pulso paradoxal, com murmúrio vesicular simétrico — são os sinais clássicos de tamponamento cardíaco (alternativa C), que é a síndrome clínica apresentada e a que exige conduta imediata (pericardiocentese, janela pericárdica ou toracotomia). Por isso C é discutível — e tecnicamente a mais precisa —, mas a resposta oficial é A.\n\n**Contusão miocárdica:**\n\n• **Manifestações:** taquicardia sinusal inexplicada, extrassístoles, fibrilação atrial, bloqueio de ramo direito, alterações do segmento ST; hipotensão por disfunção do ventrículo direito.\n• **Avaliação:** ECG na admissão em todo trauma torácico anterior importante; ECG e troponina normais praticamente afastam lesão significativa. ECG alterado → monitorização por 24 horas; instabilidade → ecocardiograma.\n• **Tratamento:** suporte e tratamento das arritmias; ruptura de parede livre → hemopericárdio e tamponamento, com indicação cirúrgica.\n\n**Roteiro do tamponamento cardíaco:**\n\n• **Tríade de Beck:** hipotensão, turgência jugular e abafamento de bulhas — completa em minoria dos casos.\n• **Pulso paradoxal:** queda > 10 mmHg da PA sistólica na inspiração. Sinal de Kussmaul: aumento da turgência jugular na inspiração.\n• **Diagnóstico:** FAST (janela subxifoide) ou ecocardiograma à beira do leito; não atrasar o tratamento em paciente instável.\n• **Tratamento:** volume para manter a pré-carga como ponte; pericardiocentese de alívio (subxifoide) se não houver cirurgião disponível; tratamento definitivo com toracotomia ou janela pericárdica.\n\n**Diferenciais de choque no trauma torácico:**\n\n• **Pneumotórax hipertensivo:** turgência jugular e hipotensão, mas com murmúrio ABOLIDO de um lado, hipertimpanismo e desvio da traqueia → descompressão com agulha.\n• **Hemotórax maciço:** murmúrio abolido e macicez, com veias jugulares colabadas (hipovolemia) → drenagem e, se > 1.500 mL, toracotomia.\n• **Contusão miocárdica:** arritmias e alterações no ECG após impacto no esterno; ECG normal praticamente afasta lesão significativa.\n• **Lesão traumática da aorta:** desaceleração brusca; quase sempre no istmo (aorta descendente, após a subclávia esquerda); mediastino alargado na radiografia; angiotomografia confirma.",
    "commentary": "**Alternativa (B):** o pneumotórax hipertensivo também dá turgência jugular e choque, mas com murmúrio vesicular abolido no lado afetado e desvio da traqueia — aqui o murmúrio é presente e simétrico.\n\n**Alternativa (C):** discutível (em amarelo) e tecnicamente a mais precisa, mas não conta como acerto: turgência jugular, abafamento de bulhas e pulso paradoxal após trauma torácico configuram tamponamento cardíaco (tríade de Beck, ainda sem hipotensão franca), que pode resultar justamente de uma lesão cardíaca contusa.\n\n**Alternativa (D):** a rotura traumática da aorta ocorre quase sempre no istmo (aorta descendente), e não na ascendente; os sobreviventes se apresentam com mediastino alargado, sem o quadro de turgência jugular com abafamento de bulhas.",
    "tip": "Turgência jugular + abafamento de bulhas + pulso paradoxal = tamponamento. Impacto no esterno com arritmia ou ECG alterado = contusão miocárdica (ECG e troponina normais afastam).",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Trauma torácico).",
    "tags": [
      "cirurgia",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: A. A alternativa C (em amarelo) é discutível, mas não conta como acerto — e é a mais precisa: turgência jugular, abafamento de bulhas e pulso paradoxal após trauma torácico são os sinais de tamponamento cardíaco; a contusão miocárdica se manifesta principalmente por arritmias."
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
    "explanation": "Mulher jovem que teve dois condilomas vulvares excisados há 4 meses, com histologia de lesão de baixo grau (efeito do HPV de baixo risco, tipos 6 e 11), citologia e colposcopia normais e, agora, sem nenhuma lesão visível — apenas áreas acetobrancas esparsas na vulva.\n\nO teste do ácido acético na vulva tem baixa especificidade: o acetobranqueamento aparece em inflamação, cicatriz, microtraumas e infecção subclínica pelo HPV, e não há indicação de tratar infecção subclínica. Sem lesão clínica nova ou suspeita, a conduta é o seguimento clínico periódico, com orientação sobre a possibilidade de recidiva (comum nos primeiros 3 meses após o tratamento).\n\n**Roteiro do condiloma acuminado (PCDT IST):**\n\n• **Diagnóstico:** clínico, pela inspeção. Biópsia apenas se houver dúvida diagnóstica, lesões atípicas (pigmentadas, endurecidas, fixas, ulceradas ou sangrantes), imunossupressão, falta de resposta ou piora com o tratamento.\n• **Tratamento domiciliar (autoaplicado):** podofilotoxina 0,15% creme ou imiquimode 5% creme — contraindicados na gestação.\n• **Tratamento no consultório:** ácido tricloroacético 80–90%, crioterapia, exérese cirúrgica, eletrocauterização ou laser. Na gestante: ácido tricloroacético, crioterapia ou exérese.\n• O objetivo é remover as lesões visíveis; nenhum tratamento erradica o vírus, e a infecção subclínica não deve ser tratada.\n• Genotipagem do HPV não tem papel no manejo do condiloma (os tipos 6 e 11 são de baixo risco oncogênico).\n• Rastreio do câncer do colo do útero segue a rotina; oferecer testagem para outras IST.\n• **Prevenção:** vacina contra HPV no SUS (meninas e meninos de 9 a 14 anos; grupos especiais e imunossuprimidos em faixas mais amplas) e preservativo.",
    "commentary": "**Alternativa (B):** a genotipagem do HPV não muda a conduta no condiloma — já se sabe que são tipos de baixo risco, e o rastreamento do colo segue a rotina.\n\n**Alternativa (C):** biópsia é indicada para lesões visíveis suspeitas ou atípicas; áreas acetobrancas esparsas, sem lesão macroscópica, em vulva já tratada não têm critério de biópsia, pela baixa especificidade do teste.\n\n**Alternativa (D):** a podofilotoxina trata lesões visíveis; não há condiloma presente, e tratar infecção subclínica pelo HPV não traz benefício.\n\nPonto de controvérsia: se o examinador interpretar as áreas acetobrancas como lesões suspeitas, a biópsia (C) passaria a ser defensável — o enunciado não descreve outras características que justifiquem.",
    "tip": "Condiloma tratado, sem lesão visível: só acompanhar. Acetobranco isolado na vulva não é indicação de biópsia nem de tratamento. Biopsie lesão atípica, pigmentada, ulcerada ou refratária.",
    "reference": "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST), 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
    ]
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
    "disputed": [
      2
    ],
    "explanation": "Gestante de 24 semanas com síndrome gripal (febre, tosse, coriza, dor de garganta) e influenza A confirmada, sem sinais de gravidade (SatO₂ 98%, FR 18, estável). Gestantes, em qualquer idade gestacional, e puérperas até 2 semanas pertencem ao grupo de risco para complicações, então o oseltamivir está indicado já, mesmo com mais de 48 h de sintomas e sem gravidade: 75 mg de 12/12 h por 5 dias. O filho de 1 ano é contato domiciliar assintomático.\n\nSobre a criança: crianças menores de 5 anos também são grupo de risco para complicações da influenza, e o protocolo do Ministério da Saúde indica quimioprofilaxia com oseltamivir para pessoas de risco não vacinadas (ou vacinadas há menos de 2 semanas) expostas a caso confirmado, iniciada em até 48 h após a última exposição.\n\nComo o enunciado não informa a vacinação da criança, tanto observar (se vacinada) quanto fazer a quimioprofilaxia (se não vacinada) são defensáveis. O gabarito oficial é A; a C é discutível (aparece em amarelo), mas não conta como acerto.\n\n**Roteiro da influenza (Ministério da Saúde):**\n\n• **Síndrome gripal:** febre (mesmo referida) + tosse ou dor de garganta, com cefaleia, mialgia ou artralgia.\n• **Síndrome respiratória aguda grave (SRAG):** síndrome gripal + dispneia, desconforto respiratório, SatO₂ < 95% ou cianose → internação e oseltamivir.\n• **Grupos de risco:** gestantes e puérperas, crianças < 5 anos, idosos ≥ 60 anos, indígenas, doenças crônicas (cardiopatia, pneumopatia, diabetes, nefropatia, imunossupressão), obesidade (IMC ≥ 40).\n• **Oseltamivir:** toda SRAG e toda síndrome gripal em grupo de risco, idealmente nas primeiras 48 h, mas sem deixar de tratar depois. Adulto 75 mg 12/12 h por 5 dias; crianças, por peso.\n• **Quimioprofilaxia:** pessoas de risco não vacinadas ou vacinadas há menos de 2 semanas, expostas a caso suspeito ou confirmado, em até 48 h; 75 mg 1 vez ao dia por 10 dias no adulto. Não substitui a vacina.\n• **Vacina:** anual na campanha, para gestantes (qualquer trimestre), crianças de 6 meses a < 6 anos, idosos e demais grupos prioritários.",
    "commentary": "**Alternativa (B):** deixar a gestante só com sintomáticos ignora que ela é grupo de risco, com indicação de oseltamivir independentemente da gravidade e do tempo de sintomas.\n\n**Alternativa (C):** tratar a gestante está certo, e a quimioprofilaxia para a criança é indicada se ela não estiver vacinada — situação que o enunciado não esclarece. Por isso C é discutível (aparece em amarelo), mas não conta como acerto.\n\n**Alternativa (D):** erra na gestante (sem antiviral) e, se a criança não for vacinada, também na profilaxia.",
    "tip": "Gestante ou puérpera com síndrome gripal = oseltamivir já, mesmo após 48 h e sem gravidade. Contato de risco (como criança < 5 anos) não vacinado = quimioprofilaxia em até 48 h da exposição.",
    "reference": "Brasil. Ministério da Saúde. Protocolo de Tratamento de Influenza, 2023. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: A. A alternativa C (em amarelo) é discutível, mas não conta como acerto: a criança de 1 ano é grupo de risco, e a quimioprofilaxia depende do estado vacinal, que o enunciado não informa."
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
    "explanation": "Homem de 45 anos com dor retroesternal em queimação, que piora após refeições volumosas e ao deitar e melhora ao sentar, sem sinais de alarme cardiovascular e com ECG e troponina seriados normais. Afastada a síndrome coronariana aguda — o primeiro passo obrigatório em toda dor torácica —, o diagnóstico provável é doença do refluxo gastroesofágico (DRGE) com dor torácica não cardíaca.\n\nEntre as alternativas, o exame que CONFIRMA refluxo patológico é a pHmetria esofágica de 24 horas, que mede o tempo de exposição do esôfago ao ácido e relaciona os episódios aos sintomas.\n\n**Roteiro da DRGE:**\n\n• **Sintomas típicos:** pirose e regurgitação. Atípicos: dor torácica, tosse crônica, rouquidão, asma, erosão dentária.\n• **Sintomas típicos sem sinais de alarme:** tratamento empírico com inibidor de bomba de prótons (IBP) em dose plena por 4–8 semanas; a resposta reforça o diagnóstico.\n• **Endoscopia digestiva alta:** indicada se sinais de alarme (disfagia, odinofagia, perda de peso, sangramento, anemia, vômitos persistentes, massa, idade acima de 40–45 anos com início recente, história familiar de câncer gástrico), falha do IBP ou antes de cirurgia. Classifica a esofagite (Los Angeles A a D) e identifica Barrett.\n• **pHmetria de 24 horas (ou impedâncio-pHmetria):** padrão-ouro para confirmar refluxo — indicada com endoscopia normal e sintomas refratários, sintomas atípicos ou antes de cirurgia antirrefluxo. Pelo consenso de Lyon, tempo de exposição ácida > 6% é conclusivo e < 4% é normal.\n• **Manometria esofágica:** não diagnostica refluxo; avalia motilidade antes da fundoplicatura e exclui acalasia.\n• **Tratamento:** perder peso, elevar a cabeceira, evitar refeições volumosas e deitar logo após comer; IBP; cirurgia (fundoplicatura de Nissen) para quem não tolera ou não quer IBP contínuo, ou para hérnias volumosas.",
    "commentary": "**Alternativa (A):** tomografia de tórax sem contraste avalia pulmão e mediastino, mas não demonstra refluxo nem é exame de dor torácica aguda (dissecção de aorta e TEP exigem contraste).\n\n**Alternativa (B):** ecocardiograma de estresse pesquisa isquemia miocárdica; a dor tem características de refluxo e a síndrome coronariana aguda foi afastada — pode ser considerado depois, na investigação de doença coronária crônica, se houver suspeita clínica, mas não confirma o diagnóstico provável.\n\n**Alternativa (D):** angiotomografia de artérias pulmonares investiga tromboembolismo pulmonar, que não tem suporte clínico (sem dispneia, taquicardia, hipoxemia ou fatores de risco).\n\nNa prática, antes da pHmetria seria comum o teste terapêutico com IBP e, pela idade, a endoscopia; nenhuma das duas está entre as opções.",
    "tip": "Dor torácica: primeiro exclua coronária. Queimação que piora após comer e ao deitar = DRGE. IBP empírico na maioria; endoscopia se sinais de alarme; pHmetria de 24 h confirma refluxo.",
    "reference": "Katz PO et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol, 2022. Gyawali CP et al. Updates to the modern diagnosis of GERD: Lyon consensus 2.0. Gut, 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Criança de 6 anos com evacuações semanais, fezes endurecidas, dor ao evacuar, comportamento retentivo, escape fecal involuntário e sigmoide palpável (massa fecal): constipação funcional com impactação fecal e incontinência por transbordamento (escape de fezes amolecidas ao redor do fecaloma — não é diarreia nem encoprese voluntária).\n\nO tratamento tem duas fases: primeiro a desimpactação e depois a manutenção, ambas de preferência com polietilenoglicol (PEG) por via oral, associadas a treinamento do hábito intestinal (sentar no vaso após as refeições) e alimentação com fibras e água em quantidade adequada.\n\n**Critérios de Roma IV para constipação funcional (criança ≥ 4 anos; pelo menos 2 critérios, por pelo menos 1 mês):**\n\n• 2 ou menos evacuações no vaso por semana.\n• Pelo menos 1 episódio de incontinência fecal por semana.\n• Postura ou comportamento retentivo.\n• Evacuações dolorosas ou de fezes endurecidas.\n• Grande massa fecal no reto.\n• Fezes de grande calibre, que podem entupir o vaso.\n\n**Tratamento (ESPGHAN/NASPGHAN):**\n\n• **Desimpactação:** PEG 1–1,5 g/kg/dia por 3–6 dias por via oral (preferido); enema é alternativa se o PEG não estiver disponível.\n• **Manutenção:** PEG 0,4–0,8 g/kg/dia por pelo menos 2 meses e até 1 mês sem sintomas; desmame gradual. Alternativa: lactulose. Óleo mineral pode ser usado acima de 1 ano, sem risco de aspiração.\n• **Comportamento:** sentar no vaso 5–10 minutos após as refeições, com apoio para os pés; diário das evacuações; reforço positivo.\n• **Dieta:** fibras e água em quantidade normal para a idade; excesso não traz benefício.\n\nSinais de alarme (pensar em causa orgânica): início no 1º mês de vida, eliminação de mecônio após 48 h (doença de Hirschsprung), fezes em fita, distensão abdominal importante, déficit de crescimento, vômitos biliosos, alterações neurológicas de membros inferiores ou da região sacral, sangue nas fezes sem fissura.",
    "commentary": "**Alternativa (A):** o óleo mineral é opção de manutenção, mas não é o de 1ª linha para desimpactação, e fibras insolúveis em excesso, numa criança impactada, podem piorar o desconforto. Falta a desimpactação.\n\n**Alternativa (B):** enemas fosfatados são alternativa de desimpactação quando o PEG oral não está disponível; são invasivos e traumáticos para uma criança com comportamento retentivo e dor, e há risco de distúrbios eletrolíticos.\n\n**Alternativa (D):** lavagem intestinal é procedimento hospitalar desnecessário na 1ª abordagem, e dieta isenta de resíduos (sem fibras) é o oposto do recomendado; encaminhar ao pediatra não é a conduta de 1ª linha na UBS.",
    "tip": "Constipação funcional com escape fecal = fecaloma com transbordamento. Primeiro desimpacte (PEG 1–1,5 g/kg/dia por 3–6 dias), depois mantenha (PEG 0,4–0,8 g/kg/dia por meses) + sentar no vaso após as refeições.",
    "reference": "Tabbers MM et al. Evaluation and treatment of functional constipation in infants and children: ESPGHAN/NASPGHAN guidelines. J Pediatr Gastroenterol Nutr, 2014. Hyams JS et al. Childhood functional gastrointestinal disorders: child/adolescent — Rome IV. Gastroenterology, 2016.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Politraumatizado com Glasgow 8, trauma de face extenso com sangramento, equimose periorbitária bilateral (sinal do guaxinim, fratura de base de crânio), respiração ruidosa e cianose; a laringoscopia falhou e ele evoluiu para apneia. É a situação \"não consigo intubar, não consigo oxigenar\": a indicação é via aérea cirúrgica imediata pela membrana cricotireóidea.\n\nNo adulto, a cricotireoidostomia cirúrgica é a preferida; como ela não está entre as alternativas, a cricotireoidostomia por punção é a resposta — é a técnica mais rápida, oxigena por 30–45 minutos (com insuflação a jato) e serve de ponte até a via aérea definitiva.\n\n**Roteiro da via aérea no trauma (ATLS):**\n\n• **Via aérea definitiva:** tubo na traqueia com balonete insuflado, fixado e ligado a oxigênio — intubação orotraqueal (com proteção da coluna cervical), ou via aérea cirúrgica.\n• **Indicações de via aérea definitiva:** apneia, Glasgow ≤ 8, incapacidade de manter a via aérea pérvia, risco de aspiração (sangue, vômito), lesão inalatória, fraturas faciais graves, hipóxia refratária.\n• **Falha de intubação:** dispositivo extraglótico (máscara laríngea, tubo laríngeo) como ponte, se conseguir ventilar; se não oxigena, via aérea cirúrgica.\n• **Cricotireoidostomia cirúrgica:** incisão na membrana cricotireóidea e tubo com balonete — escolha no adulto; contraindicada abaixo de 12 anos.\n• **Cricotireoidostomia por punção:** cateter calibroso (12–14G) pela membrana, com oxigênio a jato; temporária (retenção de CO₂ limita o uso a cerca de 30–45 minutos). Técnica de escolha em crianças < 12 anos.\n• **Traqueostomia:** não é via de emergência — demora mais, sangra mais e exige mais habilidade; reservada a fratura de laringe ou transecção laringotraqueal, ou feita depois, de forma eletiva.\n• **Intubação nasotraqueal:** contraindicada em apneia e em suspeita de fratura de base de crânio ou de face média.",
    "commentary": "**Alternativa (B):** a traqueostomia de emergência não é recomendada no atendimento inicial do trauma: é mais demorada, tem mais sangramento e complicações, e o paciente em apneia não pode esperar. Fica para situações específicas, como fratura de laringe, ou como procedimento eletivo depois.\n\n**Alternativa (C):** a máscara laríngea é dispositivo de resgate após falha de intubação, mas não é via aérea definitiva, não protege contra aspiração, e com sangramento facial volumoso e trauma maxilofacial grave é difícil obter vedação; num paciente em apneia que não se consegue oxigenar, a via aérea cirúrgica é prioritária.\n\n**Alternativa (D):** a intubação nasotraqueal exige respiração espontânea (é feita às cegas, guiada pelo som da respiração) e é contraindicada com fratura de base de crânio (equimose periorbitária bilateral) e trauma de face média, pelo risco de o tubo entrar no crânio.",
    "tip": "Trauma: não intubo e não oxigeno = via aérea cirúrgica pela membrana cricotireóidea. Adulto: cricotireoidostomia cirúrgica (ou por punção como ponte). Criança < 12 anos: por punção. Traqueostomia não é via de emergência.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Via aérea e ventilação).",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ]
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
    "explanation": "Mulher jovem com β-hCG negativo, dor pélvica em cólica há 7 dias que se tornou contínua, massa anexial esquerda dolorosa e móvel, sem febre e sem sinais de doença inflamatória pélvica. A ultrassonografia mostra massa heterogênea com sombra acústica — característica do teratoma cístico maduro (cisto dermoide), que contém gordura, pelos, dentes e calcificações — e ausência de fluxo ao Doppler.\n\nMassa ovariana + dor + Doppler sem fluxo = torção anexial até prova em contrário. É emergência cirúrgica: a laparoscopia confirma o diagnóstico, permite distorcer o anexo, preservar o ovário e retirar o cisto.\n\n**Roteiro da torção anexial:**\n\n• **Quem torce:** ovário aumentado por cisto ou tumor, sobretudo entre 5 e 10 cm — o teratoma maduro é o tumor mais associado; também ovários estimulados na fertilização e na gestação.\n• **Clínica:** dor pélvica súbita e intensa, às vezes intermitente (torções parciais), náuseas e vômitos, massa anexial dolorosa; febre baixa e leucocitose podem aparecer.\n• **Ultrassonografia com Doppler:** ovário aumentado e edemaciado com folículos na periferia, sinal do redemoinho (whirlpool) no pedículo. A ausência de fluxo reforça a suspeita, mas fluxo presente NÃO exclui torção (circulação dupla do ovário).\n• **Tratamento:** laparoscopia de urgência com distorção do anexo e preservação do ovário, mesmo que pareça escurecido (a maioria recupera); cistectomia na mesma cirurgia ou depois. Ooforectomia só se houver necrose evidente ou suspeita de malignidade na pós-menopausa.\n\n**Diferenciais de dor pélvica aguda com β-hCG negativo:**\n\n• **Doença inflamatória pélvica:** febre, corrimento, dor à mobilização do colo, abscesso tubo-ovariano → antibiótico.\n• **Cisto hemorrágico:** padrão rendilhado (em rede), fluxo periférico preservado → em geral expectante.\n• **Endometrioma:** conteúdo homogêneo em vidro fosco, dor crônica cíclica.\n• **Apendicite:** dor que migra para a fossa ilíaca direita, sinais de irritação peritoneal.\n• **Com β-hCG positivo:** pensar sempre em gravidez ectópica.",
    "commentary": "**Alternativa (A):** antibiótico de largo espectro trata doença inflamatória pélvica ou abscesso tubo-ovariano; a paciente está afebril, sem corrimento, com colo normal e leucocitose discreta sem desvio — e atrasar a cirurgia na torção leva à perda do ovário.\n\n**Alternativa (B):** aspiração guiada de cisto ovariano não é recomendada: tem alta recidiva, não trata a torção, e num teratoma pode derramar conteúdo sebáceo e causar peritonite química.\n\n**Alternativa (C):** a punção do fundo de saco posterior (culdocentese) era usada para procurar sangue na suspeita de ectópica rota; hoje foi substituída pela ultrassonografia e não tem papel na torção, com β-hCG negativo.",
    "tip": "Massa anexial + dor súbita ou que piora + Doppler sem fluxo = torção: laparoscopia de urgência, distorcer e preservar o ovário. Doppler com fluxo não exclui. Sombra acústica em massa ovariana = teratoma.",
    "reference": "American College of Obstetricians and Gynecologists. Committee Opinion nº 783: Adnexal Torsion in Adolescents, 2019. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Tratado de Ginecologia.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Vinte casos de diarreia em um mês numa mesma creche é uma agregação de casos acima do esperado, com vínculo de lugar: suspeita de surto. Surto de doença diarreica (doença de transmissão hídrica e alimentar) é de notificação compulsória imediata à vigilância municipal.\n\nA abordagem inicial é, portanto, ir até a creche investigar — confirmar os casos, levantar datas, sintomas, alimentos, água, práticas de higiene e troca de fraldas — e notificar, para que a vigilância apoie a coleta de amostras e as medidas de controle.\n\n**Etapas da investigação de um surto:**\n\n• **Confirmar a existência do surto:** comparar o número de casos com o esperado para o lugar e a época.\n• Confirmar o diagnóstico e criar a definição de caso (pessoa, tempo e lugar; ex.: criança ou funcionário da creche com 3 ou mais evacuações líquidas em 24 h no período).\n• **Busca ativa de casos e descrição:** curva epidêmica (fonte comum pontual × transmissão pessoa a pessoa), lugares e características dos doentes.\n• Formular hipóteses sobre fonte e modo de transmissão; coletar amostras (fezes, alimentos, água).\n• **Medidas de controle desde o início:** lavagem das mãos, higiene no preparo dos alimentos e na troca de fraldas, desinfecção de superfícies, afastamento de crianças e manipuladores doentes até 24–48 h sem diarreia, reidratação oral dos casos.\n• Notificar e comunicar os resultados (relatório, devolutiva à creche e à comunidade).\n\nNa creche, os agentes mais comuns são rotavírus, norovírus, Shigella, Giardia, Escherichia coli e Cryptosporidium, com transmissão fecal-oral pessoa a pessoa favorecida pelas fraldas e pelo contato próximo.",
    "commentary": "**Alternativa (A):** convocar todas as crianças e funcionários para consulta e exame de fezes, sem investigação e definição de caso, é desproporcional, sobrecarrega a unidade e desperdiça exames; a coleta deve ser direcionada pela investigação e pela vigilância.\n\n**Alternativa (B):** orientar sobre hidratação oral e prevenção é parte das medidas de controle, mas sem investigar e notificar não se identifica a fonte nem se dimensiona o surto — fica incompleto como abordagem inicial.\n\n**Alternativa (D):** fechar a creche é medida extrema, raramente necessária (pode até dispersar a transmissão para outros lugares), e não é decisão da equipe de saúde sem investigação; a limpeza com hipoclorito entra como parte das medidas de controle, com a creche funcionando.",
    "tip": "Casos agrupados acima do esperado num mesmo lugar = surto: investigue no local e notifique imediatamente a vigilância. Medidas de controle começam junto, sem esperar o agente.",
    "reference": "Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024 (capítulo Doenças de transmissão hídrica e alimentar). Brasil. Ministério da Saúde. Manual integrado de vigilância, prevenção e controle de doenças transmitidas por alimentos, 2010.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Adolescente com episódios de comer grande quantidade de comida com sensação de exagero, seguidos de comportamentos compensatórios — vômito autoinduzido mais de uma vez por semana, laxantes, furosemida e exercício excessivo —, com IMC normal (22) e sinais de desidratação: bulimia nervosa.\n\nCada método de purgação faz perder potássio: o vômito leva HCl e gera alcalose metabólica, e a hipovolemia ativa a aldosterona, que aumenta a perda renal de K⁺; a diarreia por laxantes perde K⁺ nas fezes; a furosemida perde K⁺ na urina. O distúrbio mais esperado é a hipocalemia — que é também o mais perigoso, pelo risco de arritmia.\n\n**Roteiro dos transtornos alimentares (DSM-5-TR):**\n\n• **Bulimia nervosa:** compulsão alimentar + comportamentos compensatórios (vômito, laxantes, diuréticos, jejum, exercício) pelo menos 1 vez por semana, por 3 meses; autoavaliação muito influenciada por peso e forma; peso geralmente normal.\n• **Anorexia nervosa:** restrição com peso significativamente baixo, medo intenso de engordar e distorção da imagem corporal; subtipos restritivo e compulsivo-purgativo. Gravidade pelo IMC (grave < 15 kg/m²).\n• **Transtorno de compulsão alimentar:** compulsões sem comportamentos compensatórios; associado a obesidade.\n\n**Bulimia — achados e complicações:**\n\n• **Exame:** sinal de Russell (calosidade no dorso da mão pelo atrito com os dentes ao provocar o vômito), hipertrofia de parótidas, erosão do esmalte dentário.\n• **Laboratório:** hipocalemia, alcalose metabólica hipoclorêmica (vômitos), acidose metabólica (abuso de laxantes), hipomagnesemia, amilase salivar aumentada.\n• **Complicações:** arritmias (QT longo), esofagite, síndrome de Mallory-Weiss, ruptura esofágica (Boerhaave), nefropatia hipocalêmica.\n• **Tratamento:** terapia cognitivo-comportamental (1ª linha); fluoxetina em dose alta (60 mg/dia), com acompanhamento multiprofissional e nutricional. Evitar bupropiona (risco de convulsão nessa população). Rastrear depressão, ansiedade e risco de suicídio.\n• **Na anorexia grave, atenção à síndrome de realimentação:** hipofosfatemia, hipocalemia e hipomagnesemia ao reiniciar a nutrição.",
    "commentary": "**Alternativa (A):** a hiponatremia pode ocorrer com diuréticos ou ingestão excessiva de água, mas não é o distúrbio mais característico da soma de vômitos, laxantes e furosemida — todos convergem para perda de potássio.\n\n**Alternativa (C):** a hipernatremia exige perda de água livre maior que a de sódio sem reposição (sem acesso à água, diabetes insípido); não é o padrão esperado na purgação.\n\n**Alternativa (D):** a hipercalemia é o oposto do esperado — vômito, diarreia e diurético de alça aumentam a perda de potássio. Só apareceria com lesão renal grave ou uso de poupadores de potássio.\n\nNa prática: dosar potássio, magnésio, função renal e gasometria, fazer ECG e repor K⁺ (e Mg²⁺) antes de liberar.",
    "tip": "Purgação (vômito, laxante, diurético) = hipocalemia, com alcalose metabólica se o vômito predomina. Bulimia tem peso normal; anorexia, peso baixo. Sinal de Russell e parótidas aumentadas denunciam o vômito.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders. 4ª ed., 2023.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Criança de 7 anos com febre (estado hiperdinâmico) e um sopro sistólico suave (2+/4+), na borda esternal esquerda média, sem outros achados cardiovasculares, que DIMINUI com a manobra de Valsalva e ao ficar em pé. São características de sopro inocente (funcional) — muito comum dos 3 aos 7 anos e que se intensifica com febre, anemia e exercício.\n\nA manobra de Valsalva e a posição ortostática reduzem o retorno venoso e diminuem a maioria dos sopros; as exceções, que aumentam, são a cardiomiopatia hipertrófica e o prolapso da valva mitral. A conduta é acompanhar e reauscultar após a febre, sem exames.\n\nCaracterísticas do sopro inocente (os \"7 S\" em inglês): suave (≤ 2/6, sem frêmito), sistólico, curto (não holossistólico), sem clique ou som extra, pequena área de ausculta e sem irradiação, som musical ou vibratório, e sensível à posição (muda com a posição ou com manobras). Bulhas normais, criança sem sintomas e com crescimento adequado.\n\n**Tipos mais comuns:**\n\n• **Sopro de Still:** vibratório, musical, na borda esternal esquerda média ou baixa; 3 a 6 anos; o mais comum.\n• **Sopro de ejeção pulmonar:** foco pulmonar, crianças maiores e adolescentes.\n• **Zumbido venoso:** contínuo, abaixo das clavículas; desaparece ao deitar ou ao comprimir a jugular.\n• **Estenose de ramos pulmonares periféricos:** recém-nascidos e lactentes pequenos, irradia para axilas e dorso; some até 6 meses.\n\nSinais de sopro patológico (pedir ECG e ecocardiograma e encaminhar à cardiologia pediátrica): sopro diastólico; intensidade ≥ 3/6 ou com frêmito; holossistólico; clique, B2 hiperfonética ou com desdobramento fixo (CIA); sopro que aumenta em pé ou com Valsalva (cardiomiopatia hipertrófica); cianose, cansaço às mamadas, sudorese, baixo ganho de peso, síncope ou dor torácica aos esforços; pulsos femorais diminuídos (coarctação).",
    "commentary": "**Alternativa (A):** o ECG não acrescenta nada diante de um sopro com todas as características de inocente; seria indicado se houvesse sinais de patologia (síncope, arritmia, sopro patológico).\n\n**Alternativa (B):** o ecocardiograma é o exame que define cardiopatia estrutural, mas não está indicado de rotina para sopro claramente inocente — vale se houver qualquer sinal de sopro patológico ou se o sopro mudar na reavaliação.\n\n**Alternativa (D):** o encaminhamento à cardiologia pediátrica fica para sopro com características patológicas, sintomas ou dúvida diagnóstica; aqui o sopro diminui com Valsalva e em pé e surge num contexto de febre.",
    "tip": "Sopro sistólico suave, sem frêmito, que muda com a posição, em criança sem sintomas (e com febre) = inocente: acompanhar. Diastólico, ≥ 3/6, com frêmito, clique ou que AUMENTA com Valsalva = investigar.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Sopros cardíacos na infância. Park MK. Park's Pediatric Cardiology for Practitioners. 7ª ed.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Homem de 50 anos, diabético, com 4 dias de tosse produtiva, dor pleurítica, dispneia e murmúrio abolido na base direita: pneumonia com derrame pleural parapneumônico. As radiografias são em PA, perfil e decúbito lateral com raios horizontais (incidência de Laurell).\n\nA incidência de Laurell serve justamente para ver se o líquido escorre livremente e medir a espessura da lâmina: derrame livre com mais de 10 mm na Laurell indica toracocentese diagnóstica. O paciente está estável e o derrame ainda não foi caracterizado, então o primeiro passo é puncionar com agulha e analisar o líquido (aspecto, pH, glicose, LDH, proteínas, Gram, cultura, celularidade). O resultado define se é preciso drenar.\n\n**Roteiro do derrame pleural:**\n\n• **Critérios de Light (exsudato se pelo menos 1):** proteína pleural/sérica > 0,5; LDH pleural/sérica > 0,6; LDH pleural > 2/3 do limite superior sérico. Transudato: insuficiência cardíaca, cirrose, síndrome nefrótica. Exsudato: pneumonia, tuberculose, neoplasia, TEP, colagenoses.\n• **Derrame parapneumônico não complicado:** líquido livre, pH > 7,2, glicose > 60 mg/dL, Gram e cultura negativos → só antibiótico.\n• **Derrame complicado ou empiema → drenagem torácica em selo d'água:** pus franco, Gram ou cultura positivos, pH < 7,2, glicose < 60 mg/dL, derrame loculado, derrame volumoso (mais da metade do hemitórax) ou nível hidroaéreo.\n• **Falha da drenagem (loculações, septações):** fibrinolítico intrapleural (alteplase + dornase) ou videotoracoscopia para debridamento; decorticação nas fases tardias.\n• **Exsudato linfocítico:** pensar em tuberculose (ADA > 40 U/L) e neoplasia (citologia); biópsia pleural se a análise do líquido não esclarecer.",
    "commentary": "**Alternativa (B):** a drenagem em selo d'água é indicada quando a análise do líquido mostra derrame complicado ou empiema, ou se a imagem já mostrar loculação, nível hidroaéreo ou derrame de mais da metade do hemitórax. Se a imagem mostrasse derrame volumoso ou nível hidroaéreo, a drenagem direta seria defensável.\n\n**Alternativa (C):** a videotoracoscopia é reservada a derrames loculados ou ao empiema que não resolve com drenagem e antibiótico; não é a primeira conduta.\n\n**Alternativa (D):** a biópsia pleural por agulha investiga exsudatos sem diagnóstico (tuberculose, neoplasia) depois da toracocentese; não é conduta inicial no derrame associado a pneumonia aguda.",
    "tip": "Derrame + pneumonia: Laurell com lâmina > 10 mm = toracocentese diagnóstica. Drenar se pus, Gram/cultura positivos, pH < 7,2, glicose < 60, loculação ou derrame > metade do hemitórax.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia. Diretrizes brasileiras para pneumonia adquirida na comunidade em adultos imunocompetentes. J Bras Pneumol. Light RW. Pleural Diseases. 6ª ed. British Thoracic Society Guideline for Pleural Disease, 2023.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
    ],
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
    "explanation": "Puérpera no 12º dia com febre de 40 °C, dor, calor, hiperemia e aumento de volume num quadrante da mama, e ultrassonografia com coleção delimitada de 4 cm com conteúdo espesso: abscesso mamário lactacional, complicação da mastite. A ausência de flutuação ao exame não exclui abscesso — por isso a ultrassonografia é indicada quando a mastite não melhora ou há massa.\n\nO tratamento é esvaziar a coleção, hoje de preferência por punção aspirativa com agulha grossa (guiada por ultrassom, repetida se necessário), associada a antibiótico antiestafilocócico e manutenção da amamentação ou da ordenha.\n\n**Roteiro das intercorrências mamárias na lactação:**\n\n• **Ingurgitamento:** mamas cheias, endurecidas e doloridas, bilateral, nos primeiros dias → mamadas frequentes, ordenha da aréola, compressas frias.\n• **Ducto obstruído:** nódulo doloroso localizado, sem febre → esvaziar a mama, mudar posições.\n• **Mastite:** área em cunha vermelha, quente e dolorosa, com febre e mal-estar; Staphylococcus aureus é o principal agente → manter a amamentação, esvaziar a mama, analgesia, antibiótico (cefalexina ou dicloxacilina por 10–14 dias; clindamicina ou sulfametoxazol-trimetoprima se suspeita de MRSA ou alergia).\n• **Abscesso:** coleção na ultrassonografia, com ou sem flutuação → punção aspirativa (com cultura) + antibiótico; drenagem por cateter ou incisão cirúrgica se a coleção for grande, multiloculada, se a punção falhar ou se a pele estiver comprometida.\n• **Amamentação:** continuar na mama não afetada e, na afetada, se o local da punção ou incisão permitir; se não, ordenhar para manter a produção e evitar estase.",
    "commentary": "**Alternativa (A):** a drenagem cirúrgica com dreno é opção quando a punção falha, em abscessos muito grandes ou multiloculados, ou com necrose de pele; como 1ª escolha num abscesso único de 4 cm, é mais invasiva do que o necessário e deixa cicatriz maior.\n\n**Alternativa (C):** compressas quentes não resolvem uma coleção purulenta já formada e esperar a drenagem espontânea pela pele expõe a paciente a necrose e sepse.\n\n**Alternativa (D):** suspender a amamentação aumenta a estase do leite e piora o quadro; o leite não faz mal ao bebê. A amamentação deve continuar ou, se a mama afetada não puder ser oferecida, ser substituída pela ordenha.",
    "tip": "Mastite que não melhora ou com massa: ultrassom. Abscesso = punção aspirativa (guiada por ultrassom, repetida se preciso) + antibiótico antiestafilocócico. Não suspenda a amamentação.",
    "reference": "Mitchell KB et al. Academy of Breastfeeding Medicine Clinical Protocol #36: The Mastitis Spectrum, Revised 2022. Breastfeed Med, 2022. Brasil. Ministério da Saúde. Cadernos de Atenção Básica nº 23 — Saúde da criança: aleitamento materno e alimentação complementar, 2015.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Criança de 3 anos com vacinação em dia até 12 meses, sem nenhuma vacina depois disso. No calendário do Programa Nacional de Imunizações, a 1ª dose contra varicela é aos 15 meses (na vacina tetraviral — sarampo, caxumba, rubéola e varicela) e a 2ª aos 4 anos (varicela monovalente).\n\nEla perdeu a dose dos 15 meses: deve receber agora a 1ª dose de varicela e a 2ª aos 4 anos (intervalo mínimo de 3 meses entre as doses em menores de 13 anos). A circulação do vírus no município reforça a urgência de atualizar a caderneta.\n\n**Calendário da criança a partir de 1 ano (PNI) — pontos principais:**\n\n• **12 meses:** tríplice viral (1ª dose), reforço da pneumocócica 10-valente e reforço da meningocócica.\n• **15 meses:** tetraviral (2ª dose de sarampo, caxumba e rubéola + 1ª dose de varicela), 1º reforço da DTP, reforço da vacina contra poliomielite e hepatite A (dose única).\n• **4 anos:** 2º reforço da DTP e 2ª dose de varicela.\n• Influenza anual dos 6 meses aos menores de 6 anos.\n\nVacinação atrasada: não se reinicia esquema — aplicam-se as doses que faltam, respeitando intervalos mínimos, e é possível aplicar várias vacinas no mesmo dia. Nesta criança, além da varicela, faltam a 2ª dose de tríplice viral, o reforço da DTP e da pólio e a hepatite A — a tetraviral ou a tríplice viral + varicela resolve parte disso na mesma consulta.\n\nVaricela — profilaxia pós-exposição: vacina em até 5 dias após o contato (idealmente 3) para suscetíveis acima de 9 meses; imunoglobulina específica (VZIG) em até 10 dias para suscetíveis de risco (imunodeprimidos, gestantes, recém-nascidos de mães com varicela perto do parto, prematuros).",
    "commentary": "**Alternativa (A):** o reforço com 30 dias não segue o calendário de rotina; o intervalo mínimo entre doses de varicela em criança é de 3 meses, e a 2ª dose está prevista aos 4 anos.\n\n**Alternativa (B):** fala em \"dose de reforço aos 5 anos\", o que pressupõe uma 1ª dose que a criança não recebeu, e a idade da 2ª dose no calendário é 4 anos.\n\n**Alternativa (D):** manter o esquema atual deixa a criança sem nenhuma proteção contra varicela num município com casos em alta.",
    "tip": "Varicela no PNI: 15 meses (tetraviral) e 4 anos. Atrasou? Aplique as doses que faltam, sem reiniciar esquema, respeitando 3 meses de intervalo entre as doses de varicela na criança.",
    "reference": "Brasil. Ministério da Saúde. Calendário Nacional de Vacinação — Criança (atualizado). Brasil. Ministério da Saúde. Manual de Normas e Procedimentos para Vacinação, 2014. Sociedade Brasileira de Imunizações (SBIm). Calendário de vacinação da criança 2025/2026.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Em 2024, o Ministério da Saúde adotou o esquema de dose única da vacina contra HPV para meninas e meninos de 9 a 14 anos. A base é científica: ensaios clínicos e estudos de efetividade (como o KEN SHE, no Quênia, e os seguimentos de longo prazo na Costa Rica e na Índia) mostraram que uma dose em adolescentes saudáveis gera proteção contra infecção persistente pelos tipos vacinais semelhante à de 2 ou 3 doses, por pelo menos uma década.\n\nCom base nisso, a Organização Mundial da Saúde passou a recomendar, em 2022, a dose única. A maior adesão e cobertura são consequências bem-vindas, mas a evidência que sustenta a mudança é a eficácia equivalente.\n\n**Vacina HPV no SUS:**\n\n• Vacina quadrivalente (tipos 6 e 11, responsáveis pela maioria das verrugas genitais; 16 e 18, responsáveis por cerca de 70% dos cânceres do colo do útero).\n• **Rotina:** meninas e meninos de 9 a 14 anos, dose única. Estratégias temporárias de resgate ampliaram a oferta para adolescentes de 15 a 19 anos não vacinados.\n• **Grupos especiais (3 doses, esquema 0, 2 e 6 meses):** pessoas vivendo com HIV, transplantados, pacientes oncológicos e outros imunossuprimidos, de 9 a 45 anos; também vítimas de violência sexual e usuários de PrEP, em faixas etárias definidas pelo Ministério.\n• **Benefícios:** prevenção dos cânceres de colo do útero, vulva, vagina, ânus, pênis e orofaringe, das lesões precursoras e das verrugas genitais; a vacinação de meninos protege diretamente os homens e contribui para a imunidade de rebanho.\n• A vacina não substitui o rastreamento do câncer do colo do útero.",
    "commentary": "**Alternativa (A):** a vacinação de meninos contribui, sim, para a imunidade de grupo (reduz a circulação do vírus e protege inclusive mulheres não vacinadas), além da proteção individual contra cânceres e verrugas.\n\n**Alternativa (B):** a maior adesão é vantagem operacional, não a evidência que sustenta o esquema; e a afirmação de que não interfere na imunidade de rebanho é errada — maior cobertura amplia o efeito de rebanho.\n\n**Alternativa (C):** nenhuma estratégia vacinal \"elimina\" a incidência de verrugas genitais; a vacinação reduz muito a incidência, mas a afirmação é absoluta e não é a base da dose única.",
    "tip": "HPV dose única (SUS desde 2024, 9 a 14 anos): proteção equivalente a 2–3 doses em adolescentes saudáveis. Imunossuprimidos continuam com 3 doses.",
    "reference": "Brasil. Ministério da Saúde. Nota técnica sobre a adoção do esquema de dose única da vacina HPV, 2024. World Health Organization. Human papillomavirus vaccines: WHO position paper, 2022. Barnabas RV et al. Efficacy of single-dose HPV vaccination among young African women (KEN SHE). NEJM Evid, 2022.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Criança com múltiplas idas a serviços de emergência por queixas variadas e pouco coerentes, mãe com linguagem técnica incomum, hematúria que aparece só nas amostras colhidas pela mãe e desaparece nas colhidas pela equipe, e flagrante da mãe pingando o próprio sangue na urina da criança.\n\nÉ o transtorno factício imposto a outro (antes chamado síndrome de Munchausen por procuração): o cuidador falsifica ou induz sinais de doença em quem está sob seus cuidados, apresentando-o como doente, com comportamento enganoso evidente mesmo sem ganho externo óbvio.\n\nDo ponto de vista da criança, é uma forma grave de maus-tratos, com mortalidade de cerca de 6–10%.\n\n**Diagnóstico diferencial (DSM-5-TR):**\n\n• **Transtorno factício (imposto a si ou a outro):** falsificação ou indução de sintomas, com engano; a motivação é assumir o papel de doente (ou de cuidador do doente), sem incentivo externo evidente.\n• **Simulação:** produção intencional de sintomas para obter ganho EXTERNO identificável (afastamento do trabalho, indenização, fugir de processo, obter drogas). Não é considerada transtorno mental.\n• **Transtorno de sintomas somáticos:** sintomas reais (não fabricados) com pensamentos, sentimentos e comportamentos excessivos relacionados a eles.\n• **Transtorno conversivo (neurológico funcional):** sintomas neurológicos sem produção intencional, incompatíveis com doença neurológica.\n\n**Conduta diante da suspeita:**\n\n• **Proteger a criança:** manter internação, vigilância da coleta de exames, documentar com detalhes.\n• Equipe multiprofissional (pediatria, psicologia, serviço social, psiquiatria); não confrontar o cuidador sozinho e sem plano de segurança.\n• Notificação compulsória de violência (ficha do SINAN) e comunicação ao Conselho Tutelar (ECA, art. 13), com medidas legais quando necessário; avaliar irmãos.\n• **Sinais de alerta:** sintomas que só ocorrem na presença do cuidador, exames incoerentes, falha de tratamentos habituais, cuidador muito familiarizado com a linguagem médica e satisfeito com a internação, histórico de irmãos com doenças inexplicadas ou morte súbita.",
    "commentary": "**Alternativa (A):** no transtorno de sintomas somáticos os sintomas não são fabricados — o sofrimento é genuíno e o problema está na preocupação excessiva com eles; aqui houve falsificação deliberada do exame.\n\n**Alternativa (C):** \"transtorno dissociativo do cuidador\" não é uma categoria diagnóstica. Os transtornos dissociativos envolvem perturbação da memória, identidade ou consciência, e não a fabricação planejada de sinais em outra pessoa.\n\n**Alternativa (D):** simulação pressupõe objetivo externo identificável (dinheiro, benefício, evitar obrigação); o enunciado não traz nenhum ganho externo, e o padrão de engano repetido para que a criança seja vista como doente caracteriza o transtorno factício.",
    "tip": "Cuidador que fabrica ou induz doença na criança, sem ganho externo = transtorno factício imposto a outro (Munchausen por procuração): é maus-tratos. Proteja, documente, notifique e acione o Conselho Tutelar.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Flaherty EG, MacMillan HL; AAP Committee on Child Abuse and Neglect. Caregiver-Fabricated Illness in a Child: A Manifestation of Child Maltreatment. Pediatrics, 2013. Brasil. Lei nº 8.069/1990 (ECA).",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Idoso com 4 meses de febre, emagrecimento e dorsalgia, que evolui com paraparesia flácida (força 2/5, reflexos patelar e aquileu abolidos), nível de sensibilidade dolorosa em T12, sensibilidade vibratória preservada, retenção/incontinência urinária e constipação, e dor intensa à palpação de T9–T10. É uma síndrome de compressão medular torácica de evolução subaguda, num quadro infeccioso crônico: tuberculose vertebral (mal de Pott) com compressão medular.\n\nA preservação da vibração (cordões posteriores) com perda da dor (tratos espinotalâmicos) e motricidade sugere acometimento anterior da medula, como ocorre com o abscesso e o colapso do corpo vertebral, que crescem de frente para trás. O quadro flácido e arreflexo de instalação recente é compatível com choque medular ou acometimento do cone e das raízes; com o tempo, lesões da medula costumam evoluir com sinais de neurônio motor superior.\n\n**Roteiro do mal de Pott:**\n\n• **Localização:** coluna torácica baixa e lombar alta; destrói o corpo vertebral e o disco, formando abscesso paravertebral (às vezes \"abscesso frio\" no psoas) e cifose angular (giba).\n• **Clínica:** dor lombar ou dorsal crônica, febre baixa, sudorese noturna, emagrecimento; déficit neurológico por compressão (paraparesia, nível sensitivo, alteração esfincteriana).\n• **Diagnóstico:** ressonância da coluna (exame de escolha, com urgência quando há déficit), biópsia guiada por tomografia com cultura, pesquisa de BAAR, teste molecular e histologia (granuloma caseoso); radiografia de tórax e pesquisa de foco pulmonar.\n• **Tratamento:** esquema básico (rifampicina, isoniazida, pirazinamida e etambutol por 2 meses, depois rifampicina e isoniazida) prolongado para 12 meses nas formas osteoarticulares; cirurgia (descompressão e estabilização) se houver déficit neurológico, instabilidade ou abscesso volumoso.\n\n**Neurônio motor superior × inferior:**\n\n• **Superior (encéfalo e medula):** fraqueza, hiper-reflexia, espasticidade, sinal de Babinski (na fase aguda da lesão medular, choque medular com flacidez e arreflexia transitórias).\n• **Inferior (corno anterior, raiz, nervo):** fraqueza, hiporreflexia ou arreflexia, flacidez, atrofia e fasciculações.",
    "commentary": "**Alternativa (A):** a mielorradiculopatia esquistossomótica é diferencial importante de mielopatia lombossacra em área endêmica, mas não causa febre e emagrecimento de 4 meses com dor à palpação de processos espinhosos e destruição vertebral; e o quadro descrito é flácido e arreflexo, não de neurônio motor superior.\n\n**Alternativa (B):** o sopro aórtico e a febre lembram endocardite, mas um êmbolo séptico cerebral causa déficit focal assimétrico (hemiparesia, afasia), não paraparesia simétrica com nível sensitivo torácico e alteração esfincteriana — achados de lesão medular.\n\n**Alternativa (C):** a tabes dorsalis (neurossífilis) lesa os cordões posteriores e raízes dorsais: ataxia sensitiva, perda da sensibilidade vibratória e da propriocepção, dores lancinantes e pupila de Argyll Robertson. Aqui a vibração está preservada e há fraqueza importante com nível sensitivo.\n\nRessalva: com febre e sopro aórtico, espondilodiscite bacteriana (por exemplo, por endocardite) também entra no diferencial — a biópsia define o agente.",
    "tip": "Febre e emagrecimento crônicos + dor vertebral + paraparesia com nível sensitivo e esfíncteres = compressão medular infecciosa (mal de Pott até prova em contrário): ressonância urgente, biópsia e tratamento por 12 meses.",
    "reference": "Brasil. Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil. 2ª ed. atualizada, 2019. Garg RK, Somvanshi DS. Spinal tuberculosis: a review. J Spinal Cord Med, 2011.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Várias crianças da mesma creche com pequenas pápulas cor da pele ou peroladas, agrupadas no tronco e nas axilas: molusco contagioso, infecção cutânea benigna causada por um poxvírus, transmitida por contato direto, fômites (toalhas) e autoinoculação. A lesão típica é uma pápula de 2–5 mm, brilhante, com umbilicação central.\n\nA doença é autolimitada — as lesões regridem sozinhas em 6 a 12 meses (às vezes até 2–4 anos), em geral sem cicatriz. A conduta habitual é expectante, sem afastar a criança da creche, com medidas de higiene.\n\n**Roteiro do molusco contagioso:**\n\n• **Quem:** crianças de 2 a 10 anos (especialmente com dermatite atópica), adultos por transmissão sexual (lesões genitais) e imunossuprimidos (lesões numerosas e grandes — em adulto com lesões extensas, testar HIV).\n• **Diagnóstico:** clínico. O sinal BOTE (\"beginning of the end\") — inflamação ao redor das lesões — indica resposta imune e regressão próxima.\n• **Conduta expectante:** na maioria das crianças.\n• **Tratar quando:** lesões numerosas ou que se espalham, desconforto, coceira, infecção secundária, lesões genitais, imunossupressão ou desejo da família. Opções: curetagem (com anestésico tópico), crioterapia, hidróxido de potássio tópico, cantaridina.\n• **Creche e escola:** não há necessidade de afastamento; cobrir as lesões visíveis com roupa ou curativo, não compartilhar toalhas, evitar coçar e manipular.\n\nOutras dermatoses frequentes em creches: impetigo (crostas melicéricas; afastar até 24 h após início do antibiótico), escabiose (prurido noturno, sulcos; tratar a criança e os contatos, afastar até o dia seguinte ao tratamento), varicela (vesículas em vários estágios; afastar até todas virarem crostas), tinha do corpo.",
    "commentary": "**Alternativa (B):** aciclovir age sobre herpes-vírus (herpes simples e varicela-zóster), não sobre o poxvírus do molusco; o tratamento não tem efeito.\n\n**Alternativa (C):** remover as lesões (curetagem) não é obrigatório: é doloroso para a criança, pode deixar cicatriz e fica reservado a casos selecionados. E afastar da creche não é necessário.\n\n**Alternativa (D):** a conduta expectante está certa, mas afastar as crianças até a remissão das lesões não se justifica — a remissão pode levar meses a anos, o prejuízo seria grande e a transmissão é controlada com medidas simples de higiene.\n\nRessalva: o diagnóstico depende da imagem original; se as lesões forem de outra doença, a conduta muda.",
    "tip": "Pápulas peroladas umbilicadas em criança = molusco contagioso (poxvírus). Autolimitado: observar, sem afastar da creche; cobrir lesões e não compartilhar toalhas. Aciclovir não funciona.",
    "reference": "Sociedade Brasileira de Dermatologia. Molusco contagioso. Centers for Disease Control and Prevention (CDC). Molluscum Contagiosum — clinical guidance. American Academy of Pediatrics. Red Book 2024–2027.",
    "tags": [
      "pediatria",
      "gabarito oficial"
    ],
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
    "explanation": "Adolescente de 14 anos (pico da torção entre 12 e 18 anos) com dor escrotal súbita, intensa e contínua há 12 horas, chegando ao serviço de referência com cerca de 18 horas de evolução; testículo elevado, aumentado e fixo: torção do cordão espermático. É emergência cirúrgica — o diagnóstico é clínico, e a ultrassonografia com Doppler não deve atrasar a exploração quando a suspeita é alta.\n\nCom 18 horas de isquemia, a chance de o testículo estar inviável é grande, e a alternativa D (exploração cirúrgica e orquiectomia) é a que contempla a urgência da exploração. Na cirurgia, destorce-se o cordão e avalia-se a viabilidade: testículo viável → orquidopexia; necrótico → orquiectomia. Em ambos os casos, faz-se orquidopexia do lado oposto.\n\n**Roteiro do escroto agudo:**\n\n• **Torção testicular:** dor súbita e intensa, náuseas e vômitos, testículo alto e horizontalizado, reflexo cremastérico ausente, sinal de Prehn negativo (elevar o testículo não alivia a dor). Deformidade em badalo de sino predispõe.\n• **Tempo e salvamento:** < 6 horas, viabilidade de cerca de 90–100%; 12–24 horas, cerca de 20–50%; > 24 horas, < 10%.\n• Distorção manual (no sentido de \"abrir o livro\", de medial para lateral) pode ser tentada se a cirurgia for demorar, mas não substitui a exploração.\n• **Torção do apêndice testicular:** dor mais gradual e localizada no polo superior, sinal do ponto azul, reflexo cremastérico presente → analgesia e repouso.\n• **Orquiepididimite:** dor progressiva, febre, sintomas urinários, sinal de Prehn positivo, reflexo presente, Doppler com aumento de fluxo → antibiótico (em sexualmente ativos, ceftriaxona + doxiciclina).\n• Escore TWIST (edema testicular, consistência endurecida, ausência do reflexo cremastérico, náuseas/vômitos, testículo alto) ajuda: escore alto → cirurgia direta, sem esperar exame.",
    "commentary": "**Alternativa (A):** analgesia com opioide e antibiótico trataria orquiepididimite; na torção, atrasa a cirurgia e condena o testículo.\n\n**Alternativa (B):** a orquidopexia é o que se faz se o testículo estiver viável, mas condicionar a cirurgia ao Doppler atrasa a exploração num quadro com alta suspeita clínica. Além disso, após 18 horas, a probabilidade de testículo viável é baixa.\n\n**Alternativa (C):** anti-inflamatório e observação é conduta para torção de apêndice testicular, não para torção do cordão.\n\nRessalva: nenhuma alternativa descreve a conduta ideal — exploração imediata com decisão na cirurgia entre orquidopexia e orquiectomia, mais orquidopexia contralateral. A orquiectomia só deve ser feita se o testículo estiver inviável após a destorção.",
    "tip": "Escroto agudo com testículo alto, horizontal e sem reflexo cremastérico = torção: exploração cirúrgica imediata, sem esperar Doppler. Viável → orquidopexia; necrótico → orquiectomia; sempre fixar o outro lado.",
    "reference": "Sociedade Brasileira de Urologia. Escroto agudo — diretrizes. European Association of Urology (EAU)/ESPU Guidelines on Paediatric Urology, 2024 (capítulo Escroto agudo).",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ]
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
    "correctAnswer": 2,
    "disputed": [
      0
    ],
    "explanation": "**Gabarito oficial: C** (biópsia). Mulher de 54 anos, na pós-menopausa, com derrame papilar espontâneo, unilateral, uniductal e sanguinolento (derrame patológico) e nódulo subareolar palpável, endurecido, pouco móvel, de 2 cm: lesão clinicamente suspeita. Nódulo palpável suspeito exige diagnóstico histológico — a biópsia percutânea por agulha grossa (core biopsy), guiada por ultrassonografia, define a natureza da lesão (papiloma intraductal × carcinoma), e a suspeita clínica alta obriga a biópsia mesmo que a imagem pareça pouco alarmante.\n\nNa sequência habitual, a biópsia é precedida e guiada pela imagem (mamografia diagnóstica + ultrassonografia), por isso a alternativa A é discutível, mas a resposta oficial é C.\n\n**Roteiro do derrame papilar:**\n\n• **Fisiológico ou benigno:** bilateral, multiductal, provocado pela expressão, de cor leitosa, esverdeada ou acastanhada → investigar galactorreia (gestação, prolactina, TSH, medicamentos como antipsicóticos, metoclopramida, antidepressivos) ou ectasia ductal.\n• **Patológico:** espontâneo, unilateral, uniductal, em água de rocha (cristalino) ou sanguinolento, associado a nódulo, ou em mulher acima de 50 anos.\n• **Causas do derrame patológico:** papiloma intraductal (a mais comum, em geral benigna, na região subareolar), ectasia ductal e carcinoma (cerca de 5–15%, mais provável com idade avançada e nódulo associado).\n• **Investigação:** mamografia e ultrassonografia; ressonância magnética ou ductografia se a imagem inicial for normal; biópsia percutânea (core biopsy) de qualquer lesão identificada.\n• **Tratamento do derrame patológico persistente sem lesão definida:** exérese do ducto acometido (ressecção seletiva) ou dos ductos principais retroareolares, com estudo histológico.\n\nNódulo mamário palpável: abaixo de 30–35 anos, começar pela ultrassonografia; acima de 40 anos, mamografia + ultrassonografia, e biópsia guiada se BI-RADS 4 ou 5. Nódulo clinicamente suspeito deve ser biopsiado mesmo que a imagem seja pouco alarmante.",
    "commentary": "**Alternativa (A):** discutível (em amarelo), mas não conta como acerto. A ultrassonografia (com a mamografia) caracteriza o nódulo, avalia o restante das mamas e guia a agulha; na prática, é feita antes da biópsia.\n\n**Alternativa (B):** a ressonância magnética não é exame inicial; é complementar quando mamografia e ultrassonografia são normais apesar de derrame patológico, ou para estadiamento de câncer confirmado.\n\n**Alternativa (D):** a citologia do derrame tem baixa sensibilidade (um resultado negativo não afasta câncer) e não substitui a biópsia do nódulo.",
    "tip": "Derrame papilar patológico + nódulo palpável suspeito = biópsia (core biopsy guiada por ultrassom), com mamografia e ultrassom para caracterizar e guiar. Citologia do derrame não exclui câncer.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Derrame papilar, 2021. American College of Radiology. ACR Appropriateness Criteria — Evaluation of Nipple Discharge, 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: C. A alternativa A (em amarelo) é discutível, mas não conta como acerto: na sequência habitual, a ultrassonografia (com a mamografia) vem antes e guia a biópsia do nódulo."
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
    "explanation": "Criança Yanomami de território com garimpo ilegal, com irritabilidade, agitação, atraso do desenvolvimento, piora da fala e perda de sensibilidade e dormência nos pés: intoxicação crônica por mercúrio. No garimpo de ouro, o mercúrio metálico é usado para amalgamar o ouro e é liberado nos rios, onde bactérias o transformam em metilmercúrio; ele se acumula nos peixes — base da alimentação indígena — e atravessa a placenta e a barreira hematoencefálica. O sistema nervoso em desenvolvimento é o mais vulnerável.\n\n**Roteiro da intoxicação por mercúrio:**\n\n• **Formas:** mercúrio metálico (vapor inalado ao queimar o amálgama — pulmão, rim, tremor); metilmercúrio (ingestão de peixe — neurotoxicidade); sais inorgânicos (rim, trato gastrointestinal).\n• **Metilmercúrio — doença de Minamata:** parestesias perioral e de extremidades, ataxia, constrição do campo visual, disartria, perda auditiva, tremor, alterações de comportamento; exposição na gestação causa paralisia cerebral, deficiência intelectual e atraso do desenvolvimento.\n• **Mercúrio metálico (eretismo):** irritabilidade, timidez, insônia, tremor, gengivite e sialorreia.\n• **Diagnóstico:** dosagem de mercúrio no cabelo (exposição crônica a metilmercúrio, a melhor amostra para avaliar populações), no sangue (metilmercúrio, exposição recente) e na urina (mercúrio metálico e inorgânico).\n• **Conduta:** interromper a exposição (fonte de alimento segura, ação sobre o garimpo), notificação como intoxicação exógena e articulação com vigilância em saúde ambiental e órgãos de proteção; quelantes (como o DMSA) têm benefício limitado na exposição crônica a metilmercúrio.\n\nSaúde indígena: atendida pelo Subsistema de Atenção à Saúde Indígena (SasiSUS), organizado em Distritos Sanitários Especiais Indígenas (DSEI), sob a Secretaria de Saúde Indígena (SESAI). A crise Yanomami de 2023 foi declarada Emergência em Saúde Pública de Importância Nacional.",
    "commentary": "**Alternativa (A):** a desnutrição crônica é frequente nessa população e pode atrasar o desenvolvimento, mas não explica a neuropatia sensitiva nos pés nem a alteração de comportamento; além disso, o enunciado destaca o garimpo como exposição.\n\n**Alternativa (C):** o hipotireoidismo congênito não rastreado (sem teste do pezinho) causaria atraso global, baixa estatura, hipotonia, constipação e mixedema — não neuropatia periférica e agitação.\n\n**Alternativa (D):** a deficiência de B12 pode causar neuropatia e atraso do desenvolvimento (sobretudo em filhos de mães veganas ou com anemia perniciosa), mas viria com anemia megaloblástica e não tem a relação com o garimpo; ainda assim, vale dosar na investigação.",
    "tip": "Garimpo + peixe + criança com alteração neurológica (comportamento, fala, parestesias, ataxia) = intoxicação por metilmercúrio. Dosar mercúrio no cabelo e cortar a exposição.",
    "reference": "Organização Mundial da Saúde. Mercury and health — fact sheet. Convenção de Minamata sobre Mercúrio, promulgada no Brasil pelo Decreto nº 9.470/2018.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Aumento de 300% das crises de sibilância num único território vizinho a rodovia movimentada e polo industrial, FORA da época de circulação dos vírus respiratórios: a explicação mais provável é ambiental — poluentes do ar (material particulado fino, dióxido de nitrogênio, ozônio, dióxido de enxofre, emissões industriais) desencadeando crises de asma e de DPOC.\n\nTratar cada crise é necessário, mas não muda a causa. A ação prioritária da equipe é coletiva: articular a vigilância em saúde ambiental, a vigilância epidemiológica e outros setores (meio ambiente, trânsito, indústria, gestão municipal) para identificar a fonte e reduzir a exposição.\n\n**Roteiro da vigilância em saúde ambiental:**\n\n• **Componentes da Vigilância em Saúde:** epidemiológica, sanitária, ambiental e de saúde do trabalhador.\n• **Vigilância ambiental:** monitora fatores do ambiente que afetam a saúde — água (VIGIAGUA), ar (VIGIAR), solo (VIGISOLO), desastres, contaminantes químicos, vetores.\n• **VIGIAR:** vigilância de populações expostas a poluentes atmosféricos; usa unidades sentinela para relacionar dados de qualidade do ar com atendimentos respiratórios.\n• **Investigação:** distribuição dos casos no tempo e no mapa, relação com horários e episódios de emissão, dados de monitoramento do ar do órgão ambiental, exposição ocupacional.\n• **Intersetorialidade:** a redução da exposição depende de outros setores (fiscalização ambiental, controle de emissões, trânsito); a saúde produz a evidência e articula.\n• **No território:** manter o cuidado clínico (plano de ação da asma, corticoide inalatório), orientar a população e notificar se houver surto ou agravo de notificação.",
    "commentary": "**Alternativa (A):** crise de sibilância não é agravo de notificação compulsória individual, e notificar caso a caso ao estado não investiga nem reduz a exposição; o fluxo de vigilância começa no município.\n\n**Alternativa (C):** ampliar consultas e distribuir broncodilatadores é resposta assistencial necessária, mas apenas trata os efeitos; sem agir sobre a fonte, as crises continuam.\n\n**Alternativa (D):** vacinar contra influenza e pneumococo é importante para quem tem doença respiratória, mas o aumento ocorreu fora do período viral, o que aponta para causa ambiental, não infecciosa.",
    "tip": "Aumento de casos agrupado num território, fora da sazonalidade e perto de fonte poluente = pense em causa ambiental: vigilância ambiental (VIGIAR) e ação intersetorial para reduzir a exposição.",
    "reference": "Brasil. Ministério da Saúde. Vigilância em saúde de populações expostas à poluição atmosférica (VIGIAR) — diretrizes. Brasil. Ministério da Saúde. Política Nacional de Vigilância em Saúde (Resolução CNS nº 588/2018).",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Jovem com 3 episódios em 40 dias de início súbito de dor torácica, falta de ar, sudorese, despersonalização (sensação de estar fora do corpo) e medo de morrer, que passam sozinhos, com exames clínicos normais, e que agora teme ter novas crises e evita certos lugares: transtorno de pânico.\n\nO critério não é só ter ataques — é ter ataques inesperados e recorrentes seguidos de pelo menos 1 mês de preocupação com novas crises ou mudança de comportamento para evitá-las.\n\n**Critérios e manejo (DSM-5-TR):**\n\n• **Ataque de pânico:** pico de medo intenso em minutos, com pelo menos 4 sintomas — palpitações, sudorese, tremores, falta de ar, sufocação, dor no peito, náusea, tontura, calafrios ou ondas de calor, parestesias, desrealização ou despersonalização, medo de perder o controle ou enlouquecer, medo de morrer.\n• **Transtorno de pânico:** ataques inesperados e recorrentes + pelo menos 1 mês de preocupação persistente com novos ataques ou mudança de comportamento (evitação), sem outra explicação (substâncias como cafeína, cocaína e anfetaminas; hipertireoidismo; arritmias; feocromocitoma).\n• **Agorafobia:** medo ou evitação de lugares de onde seria difícil sair ou obter ajuda (transporte público, multidões, filas); pode coexistir e é diagnosticada à parte.\n• **Tratamento:** terapia cognitivo-comportamental e ISRS (sertralina, escitalopram, paroxetina) ou IRSN (venlafaxina) como 1ª linha, começando em dose baixa (pode haver piora inicial da ansiedade) e mantendo por 9–12 meses após a melhora. Benzodiazepínicos apenas por curto período, no início, pelo risco de dependência.\n• Avaliar uso de substâncias, depressão associada e risco de suicídio.\n\nDiferenciais: transtorno de ansiedade generalizada (preocupação excessiva e difusa com vários temas, por pelo menos 6 meses, sem crises abruptas); fobia específica e fobia social (medo restrito a situações específicas, ataques esperados).",
    "commentary": "**Alternativa (A):** no transtorno de sintomas somáticos há sintomas físicos persistentes (por mais de 6 meses) com preocupação desproporcional e excessiva com eles; aqui são crises agudas e autolimitadas de medo intenso.\n\n**Alternativa (C):** o transtorno de ansiedade generalizada é uma preocupação excessiva, contínua e difícil de controlar sobre vários temas, por pelo menos 6 meses, com tensão muscular, insônia e irritabilidade — não crises súbitas com pico em minutos.\n\n**Alternativa (D):** no transtorno de ansiedade de doença (antiga hipocondria), o foco é o medo de TER uma doença grave, com poucos ou nenhum sintoma físico e busca repetida de exames; o paciente aqui teme ter novas crises, não uma doença oculta.",
    "tip": "Crises súbitas de medo intenso com sintomas físicos, pico em minutos, recorrentes, + ≥ 1 mês de medo de novas crises ou evitação = transtorno de pânico. Tratamento: TCC + ISRS; benzodiazepínico só como ponte curta.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Associação Brasileira de Psiquiatria. Diretrizes para o tratamento dos transtornos de ansiedade. National Institute for Health and Care Excellence (NICE). Generalised anxiety disorder and panic disorder in adults: management (CG113).",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Paciente em uso prolongado de opioides (codeína, depois tramadol) pedindo morfina, com suspeita de uso problemático ou dependência. Informações de saúde, inclusive dependência química, são protegidas pelo sigilo médico. O Código de Ética Médica (art. 73) proíbe revelar fato conhecido no exercício da profissão, exceto por motivo justo, dever legal ou consentimento por escrito do paciente — e nenhuma dessas exceções está presente.\n\nO dever do médico é manter o sigilo e cuidar: avaliar a dor e o uso de opioides, propor tratamento e orientar o paciente sobre os riscos, inclusive para dirigir.\n\n**Sigilo médico — quando pode ser quebrado:**\n\n• Consentimento do paciente, por escrito.\n• **Dever legal:** notificação compulsória de doenças e agravos à autoridade sanitária; notificação de violência (contra criança, idoso, mulher, pessoa com deficiência); comunicação de crime de ação pública que não exponha o paciente a processo.\n• **Motivo justo:** risco grave e concreto a terceiros que o paciente se recusa a evitar (por exemplo, motorista profissional que insiste em dirigir sob efeito de substâncias, ou parceiro em risco de infecção quando o paciente se recusa a informá-lo) — depois de esgotadas as tentativas de convencer o paciente, revelando o mínimo necessário a quem precisa saber.\n• O sigilo persiste após a morte do paciente e mesmo que o fato seja público.\n• **Não é permitido:** revelar a familiares, ao empregador, a seguradoras ou à polícia sem uma dessas bases; o médico do trabalho também não informa diagnóstico ao empregador — apenas apto ou inapto.\n\nNa prática: investigar critérios de transtorno por uso de opioides, não prescrever morfina sem indicação, oferecer abordagem da dor crônica (não farmacológica, adjuvantes) e tratamento da dependência (CAPS AD, buprenorfina ou metadona quando disponíveis), e orientar sobre não dirigir sob efeito de opioides.",
    "commentary": "**Alternativa (A):** informar os familiares sem consentimento do paciente, que está lúcido e orientado, viola o sigilo; a família pode ser envolvida no cuidado se ele autorizar.\n\n**Alternativa (C):** comunicar o empregador é quebra de sigilo sem justa causa. Mesmo sendo motorista, o caminho é orientar o paciente e, se necessário, afastá-lo por atestado sem revelar o diagnóstico; só o risco concreto, com recusa do paciente em se afastar, poderia configurar motivo justo.\n\n**Alternativa (D):** uso ou dependência de medicamentos prescritos não é crime a ser comunicado à polícia, e a dependência é condição de saúde, a ser tratada.",
    "tip": "Dependência química é informação sigilosa. Quebra de sigilo só com consentimento escrito, dever legal (notificação compulsória) ou motivo justo (risco grave a terceiros, depois de tentar convencer o paciente).",
    "reference": "Conselho Federal de Medicina. Código de Ética Médica — Resolução CFM nº 2.217/2018, capítulo IX (Sigilo profissional), arts. 73 a 79.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Lactente de 2 meses, em aleitamento materno exclusivo, com regurgitações e vômitos após as mamadas, mas em bom estado geral, hidratado e ganhando 33 g/dia (acima do esperado, de 20–30 g/dia nos primeiros meses). É o refluxo gastroesofágico fisiológico do lactente (lactente regurgitador feliz): acontece em mais da metade dos bebês, pelo esfíncter esofágico inferior imaturo, estômago pequeno e dieta líquida, com pico aos 4 meses e resolução até os 12–18 meses.\n\nO ganho de peso mostra que o leite materno é suficiente. A conduta é tranquilizar a mãe, orientar pega, posição e manejo das mamadas, e acompanhar.\n\n**Refluxo fisiológico × doença do refluxo (DRGE):**\n\n• **Refluxo fisiológico:** regurgitação sem outros problemas, bom ganho de peso, sem irritabilidade importante. Orientações: manter o aleitamento, boa pega, evitar mamadas excessivas, arrotar, manter o bebê em posição vertical após mamar enquanto acordado. Dormir SEMPRE de barriga para cima (a posição prona aumenta o risco de morte súbita).\n• **DRGE:** refluxo com complicações — baixo ganho ou perda de peso, recusa alimentar, irritabilidade e choro intenso às mamadas, hematêmese, anemia, sintomas respiratórios (tosse, sibilância, pneumonias de repetição), postura de Sandifer.\n• **Na DRGE em lactente:** em aleitamento artificial, tentar fórmula espessada ou excluir proteína do leite de vaca (alergia pode imitar DRGE) por 2–4 semanas; em aleitamento materno, dieta de exclusão de leite de vaca para a mãe; IBP só com DRGE comprovada ou esofagite, por tempo limitado.\n\nSinais de alarme (pensar em outra causa): vômitos em jato (estenose hipertrófica de piloro, 2–8 semanas de vida), vômitos biliosos (obstrução intestinal, má rotação), sangue nas fezes, febre, letargia, abaulamento da fontanela, distensão abdominal, início após 6 meses.",
    "commentary": "**Alternativa (A):** complementar com fórmula não tem indicação — o ganho de peso de 33 g/dia mostra que o leite materno é suficiente; a fórmula ameaçaria o aleitamento exclusivo e não reduziria a regurgitação.\n\n**Alternativa (B):** medicamentos antirrefluxo (IBP, domperidona, bromoprida) não são indicados para refluxo fisiológico: não reduzem a regurgitação, têm efeitos adversos (infecções, alterações da microbiota) e não tratam um problema que não é doença.\n\n**Alternativa (D):** fórmula antirrefluxo substituiria o leite materno sem necessidade, e o encaminhamento à gastroenterologia fica para DRGE complicada ou sinais de alarme.",
    "tip": "Lactente que regurgita mas mama bem, está feliz e ganha peso = refluxo fisiológico: orientar e acompanhar. Nada de fórmula, remédio ou dormir de bruços. Ganho ponderal ruim, recusa, choro intenso ou sangue = DRGE.",
    "reference": "Rosen R et al. Pediatric Gastroesophageal Reflux Clinical Practice Guidelines: NASPGHAN/ESPGHAN. J Pediatr Gastroenterol Nutr, 2018. Sociedade Brasileira de Pediatria. Documento científico — Refluxo gastroesofágico em lactentes.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Cirrótico Child-Pugh B com hematêmese volumosa e choque (PA 80 × 50 mmHg, FC 124 bpm), estabilizado com volume e transfusão: hemorragia digestiva alta por varizes esofágicas até prova em contrário. Com o paciente estável, a conduta é a endoscopia digestiva alta nas primeiras 12 horas, com ligadura elástica das varizes — o tratamento endoscópico de escolha.\n\nA ligadura é feita junto com o tratamento farmacológico, que deve começar antes da endoscopia: vasoconstritor esplâncnico e antibiótico profilático. A encefalopatia grau I pede atenção à proteção da via aérea (intubação se houver piora do nível de consciência antes da endoscopia).\n\n**Roteiro da hemorragia varicosa (Baveno VII):**\n\n• **Reanimação:** dois acessos calibrosos; transfusão restritiva (alvo de hemoglobina 7–8 g/dL — transfusão excessiva aumenta a pressão portal e o ressangramento); evitar excesso de volume.\n• Vasoativo, iniciado o quanto antes, mesmo antes da endoscopia, por 2 a 5 dias: terlipressina, octreotida ou somatostatina.\n• **Antibiótico profilático:** ceftriaxona 1 g/dia por até 7 dias — reduz infecções, ressangramento e mortalidade.\n• **Endoscopia em até 12 horas:** ligadura elástica nas varizes de esôfago; cianoacrilato nas varizes gástricas.\n• **Falha (sangramento persistente):** balão de Sengstaken-Blakemore ou prótese esofágica metálica como ponte para TIPS de resgate.\n• **TIPS preemptivo (nas primeiras 72 h):** Child-Pugh C 10–13 pontos, ou Child B > 7 com sangramento ativo na endoscopia.\n• **Prevenir encefalopatia:** lactulose (ou retirada do sangue do intestino).\n• **Profilaxia secundária:** betabloqueador não seletivo (propranolol ou carvedilol) + ligaduras seriadas até erradicar as varizes.",
    "commentary": "**Alternativa (A):** o IBP intravenoso é o tratamento da hemorragia por úlcera péptica; no cirrótico costuma ser iniciado até a endoscopia definir a causa, mas não trata varizes e não é a conduta definitiva neste momento.\n\n**Alternativa (B):** a cirurgia de descompressão portal (derivações cirúrgicas) foi praticamente abandonada no sangramento agudo, com alta mortalidade em cirróticos, e substituída pelo TIPS.\n\n**Alternativa (D):** o TIPS é resgate quando a ligadura e o tratamento farmacológico falham, ou preemptivo em pacientes de alto risco selecionados (Child C 10–13, ou Child B com sangramento ativo na endoscopia); não é o primeiro passo antes da endoscopia.",
    "tip": "Cirrótico com hematêmese: transfusão restritiva (Hb 7–8), vasoativo (terlipressina) e ceftriaxona já na chegada, endoscopia em até 12 h com ligadura elástica. TIPS se falhar.",
    "reference": "de Franchis R et al. Baveno VII — Renewing consensus in portal hypertension. J Hepatol, 2022. Bittencourt PL et al. Variceal bleeding: update of recommendations from the Brazilian Association of Hepatology. Arq Gastroenterol, 2017.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Gestante de 14 semanas, assintomática, com IgG e IgM reagentes para toxoplasmose. A IgM pode persistir por meses ou anos após a infecção, então o resultado não permite dizer se a infecção é recente (risco de transmissão ao feto) ou antiga (sem risco). Pela recomendação do Ministério da Saúde, a conduta é iniciar espiramicina imediatamente — para reduzir a chance de o parasita atravessar a placenta — e pedir o teste de avidez de IgG (de preferência na mesma amostra).\n\nAntes de 16 semanas, avidez alta indica infecção há mais de 3–4 meses, ou seja, anterior à gestação: a espiramicina pode ser suspensa. Avidez baixa ou intermediária mantém a suspeita de infecção na gestação.\n\n**Interpretação das sorologias de toxoplasmose na gestação:**\n\n• **IgG não reagente e IgM não reagente:** suscetível → prevenção (não comer carne crua ou malpassada, lavar frutas e verduras, evitar contato com fezes de gato, usar luvas ao mexer na terra) e repetir a sorologia a cada trimestre.\n• **IgG reagente e IgM não reagente:** imunidade (infecção antiga) → sem risco para o feto em imunocompetente.\n• **IgG reagente e IgM reagente:** possível infecção recente → espiramicina + avidez (até 16 semanas). Após 16 semanas, a avidez alta não descarta infecção na gestação: tratar como infecção aguda.\n• **IgG não reagente e IgM reagente:** infecção muito recente ou falso-positivo → espiramicina e repetir em 2–3 semanas (o aparecimento de IgG confirma soroconversão).\n\n**Tratamento na infecção materna confirmada:**\n\n• **Espiramicina 1 g de 8/8 h:** profilaxia da transmissão vertical enquanto não há evidência de infecção fetal.\n• Infecção fetal confirmada (PCR no líquido amniótico, por amniocentese a partir de 18 semanas) ou infecção materna após cerca de 30 semanas: esquema tríplice — pirimetamina + sulfadiazina + ácido folínico (pirimetamina evitada no 1º trimestre, por ser teratogênica).\n• Ultrassonografias seriadas para sinais de infecção fetal (calcificações cerebrais, ventriculomegalia, hepatomegalia).",
    "commentary": "**Alternativa (B):** o esquema tríplice é para infecção FETAL confirmada ou infecção materna no fim da gestação; além disso, a pirimetamina é teratogênica e não deve ser usada no 1º trimestre. Com 14 semanas e sem confirmação nem de infecção recente, não há indicação.\n\n**Alternativa (C):** a amniocentese para PCR só deve ser feita a partir de 18 semanas (antes, menor sensibilidade e mais risco) e após confirmar ou suspeitar fortemente de infecção materna na gestação — ainda não confirmada aqui.\n\n**Alternativa (D):** a espiramicina está certa, mas o ácido folínico só é usado junto com a pirimetamina (para prevenir a toxicidade medular dela); com espiramicina isolada, não tem papel. Falta também o teste de avidez, que define a conduta.",
    "tip": "Gestante IgG + e IgM +: espiramicina já e avidez de IgG. Avidez alta antes de 16 semanas = infecção anterior à gestação. Esquema tríplice (com ácido folínico) só se infecção fetal ou após ~30 semanas.",
    "reference": "Brasil. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022. Brasil. Ministério da Saúde. Protocolo de notificação e investigação: toxoplasmose gestacional e congênita, 2018.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
    ]
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
    "explanation": "Morador do Amazonas (área endêmica de malária, onde a transmissão é local — dispensa história de viagem) com febre, calafrios, icterícia intensa, rebaixamento do nível de consciência, acidose metabólica grave, plaquetopenia e insuficiência renal: malária grave, em geral por Plasmodium falciparum.\n\nO exame de escolha para confirmar a malária no Brasil é a gota espessa: barata, rápida, sensível (concentra o sangue e detecta parasitemias baixas), permite identificar a espécie e estimar a parasitemia — o que, na malária grave, ajuda a acompanhar a resposta ao tratamento.\n\n**Roteiro da malária:**\n\n• **Espécies no Brasil:** P. vivax (cerca de 80% dos casos; formas hipnozoítas no fígado causam recaídas), P. falciparum (formas graves) e P. malariae. Transmissão pelo mosquito Anopheles; a Amazônia Legal concentra mais de 99% dos casos.\n• **Diagnóstico:** gota espessa (padrão de referência no SUS); esfregaço delgado (melhor para identificar a espécie, menos sensível); teste rápido imunocromatográfico (quando não há microscopista); PCR (pesquisa e casos de baixa parasitemia).\n• **Critérios de malária grave:** rebaixamento de consciência ou convulsões (malária cerebral), prostração, icterícia, insuficiência renal, acidose metabólica ou hiperlactatemia, hipoglicemia, anemia grave, sangramento, edema pulmonar ou SDRA, choque, hiperparasitemia.\n• **Tratamento da malária grave:** artesunato intravenoso (1ª escolha) por pelo menos 24 h, seguido de tratamento oral completo com derivado de artemisinina; UTI.\n• **Malária não grave:** P. vivax — cloroquina + primaquina (a primaquina elimina hipnozoítos; testar deficiência de G6PD; contraindicada na gestação e em menores de 6 meses); P. falciparum — artemeter + lumefantrina (ou artesunato + mefloquina) + primaquina em dose única.\n\nDiferencial importante: leptospirose na forma grave (síndrome de Weil) também causa icterícia intensa (rubínica), insuficiência renal, plaquetopenia e leucocitose com desvio, em pessoas expostas a água contaminada — e é diagnosticada por sorologia ou PCR. Na Amazônia, a gota espessa é o primeiro exame em todo quadro febril.",
    "commentary": "**Alternativa (A):** a PCR em tempo real é mais sensível e define espécies, mas é cara, demorada e restrita a laboratórios de referência; não é o exame de rotina para confirmar malária no SUS.\n\n**Alternativa (C):** sorologias para malária detectam anticorpos de exposição prévia e não confirmam infecção atual — não servem para diagnóstico agudo. (Se a hipótese fosse leptospirose, a sorologia teria papel.)\n\n**Alternativa (D):** o esfregaço delgado é melhor para identificar a espécie pela morfologia, mas é menos sensível que a gota espessa (examina uma camada fina de sangue); é complementar.",
    "tip": "Febre em área endêmica de malária = gota espessa sempre (diagnóstico, espécie e parasitemia). Rebaixamento de consciência, icterícia, insuficiência renal, acidose = malária grave: artesunato intravenoso.",
    "reference": "Brasil. Ministério da Saúde. Guia de tratamento da malária no Brasil, 2021 (atualizado). Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Mais de 300 costureiras de um polo industrial com zumbido e perda auditiva recorrentes: suspeita de perda auditiva induzida por ruído (PAIR) ocupacional, um problema coletivo ligado ao ambiente de trabalho (máquinas de costura industriais em galpões). Cabe à gestão municipal do SUS, pela Vigilância em Saúde do Trabalhador, investigar e intervir.\n\nO Centro de Referência em Saúde do Trabalhador (CEREST) é o serviço da Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST) que dá suporte técnico: investiga o ambiente e os processos de trabalho, estabelece o nexo causal, acompanha as trabalhadoras e orienta as medidas de prevenção. A gestão deve apoiar o CEREST e garantir a notificação dos casos.\n\n**Roteiro da saúde do trabalhador no SUS:**\n\n• **Base legal:** Lei 8.080/1990 (a saúde do trabalhador é campo de atuação do SUS, inclusive com vigilância dos ambientes de trabalho) e Política Nacional de Saúde do Trabalhador e da Trabalhadora (2012).\n• **RENAST:** rede que integra a atenção primária (porta de entrada e cuidado), os CEREST (referência técnica regional e estadual) e a vigilância em saúde do trabalhador (VISAT).\n• **Notificação compulsória (SINAN) de agravos relacionados ao trabalho:** acidentes de trabalho graves, fatais e com crianças e adolescentes, acidentes com material biológico, intoxicações exógenas — e, em unidades sentinela, PAIR, LER/DORT, pneumoconioses, dermatoses, câncer e transtornos mentais relacionados ao trabalho.\n• **PAIR:** perda neurossensorial, bilateral, simétrica, irreversível, com entalhe característico em 3, 4 ou 6 kHz na audiometria; exposição contínua a ruído acima de 85 dB(A) em 8 horas. Prevenção: controle na fonte (máquinas, isolamento), medidas administrativas e protetores auditivos; Programa de Conservação Auditiva.\n• **INSS (Previdência Social):** afastamento e benefícios — acionado com a emissão da Comunicação de Acidente de Trabalho (CAT) quando há incapacidade, não para investigar.\n• **Fiscalização trabalhista:** Ministério do Trabalho (auditores-fiscais). A vigilância sanitária e a de saúde do trabalhador do SUS também podem inspecionar ambientes.",
    "commentary": "**Alternativa (A):** o INSS concede benefícios e reconhece incapacidade, mas não investiga nem previne o adoecimento; encaminhar as costureiras para lá não resolve o problema coletivo nem garante cuidado.\n\n**Alternativa (B):** o Conselho Municipal de Saúde é instância de controle social (formula estratégias e fiscaliza a política de saúde e a gestão), não órgão de fiscalização das condições de trabalho nas empresas.\n\n**Alternativa (C):** suspender as atividades de todas as empresas é medida extrema, sem investigação, e não é a primeira ação da gestão da saúde; a interdição só cabe em risco grave e iminente, após inspeção, por órgão competente.",
    "tip": "Agravo coletivo ligado ao trabalho = Vigilância em Saúde do Trabalhador + CEREST (RENAST): investigar ambiente, nexo e acompanhar. INSS é benefício; Conselho de Saúde é controle social.",
    "reference": "Brasil. Ministério da Saúde. Política Nacional de Saúde do Trabalhador e da Trabalhadora — Portaria nº 1.823/2012. Brasil. Ministério da Saúde. Perda auditiva induzida por ruído (PAIR) — Protocolo de complexidade diferenciada, 2006.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Idoso de 82 anos com demência leve (perda de memória progressiva há 3 anos, ainda com autonomia) que, em 24 horas, passa a ter agitação, confusão, discurso incoerente, flutuação do nível de consciência, dificuldade marcante de manter a atenção e inversão do ciclo sono-vigília: delirium.\n\nAs chaves são o início agudo, o curso flutuante e o déficit de ATENÇÃO. A demência é o principal fator predisponente, mas não explica uma piora em horas. O delirium é uma emergência médica: sempre há uma causa precipitante a procurar e tratar.\n\n**Roteiro do delirium:**\n\n• **Diagnóstico (CAM — Confusion Assessment Method):** 1) início agudo e curso flutuante E 2) desatenção, MAIS 3) pensamento desorganizado OU 4) alteração do nível de consciência.\n• **Subtipos:** hiperativo (agitação), hipoativo (sonolência, apatia — o mais comum e o mais subdiagnosticado, com pior prognóstico) e misto.\n• **Predisponentes:** idade avançada, demência, déficit visual ou auditivo, fragilidade, múltiplas comorbidades, desnutrição.\n• **Precipitantes a investigar:** infecção (urinária, pneumonia), medicamentos (anticolinérgicos, benzodiazepínicos, opioides, anti-histamínicos), distúrbios hidroeletrolíticos (sódio, cálcio), hipoglicemia, desidratação, retenção urinária e constipação (fecaloma), dor, hipóxia, AVC, abstinência de álcool ou sedativos, cirurgia, internação e privação de sono.\n• **Exames iniciais:** hemograma, eletrólitos, glicemia, função renal e hepática, urina, radiografia de tórax, ECG; tomografia de crânio se déficit focal, queda ou anticoagulação.\n• **Tratamento:** corrigir a causa; medidas não farmacológicas são a base (reorientação, presença da família, óculos e aparelho auditivo, luz natural de dia e sono à noite, mobilização precoce, evitar contenção física e sondas). Antipsicótico em dose baixa (haloperidol, quetiapina) só se agitação com risco; evitar benzodiazepínicos (pioram o delirium), exceto na abstinência alcoólica.\n\nDelirium × demência: delirium — início agudo, flutuante, desatenção, nível de consciência alterado, em geral reversível; demência — início insidioso, progressivo, atenção e consciência preservadas nas fases iniciais.",
    "commentary": "**Alternativa (A):** o paciente ainda tem relativa autonomia, então a doença de Alzheimer não está avançada; além disso, a doença progride lentamente, ao longo de anos, e não muda em 24 horas com flutuação da consciência.\n\n**Alternativa (B):** a demência com corpos de Lewy tem flutuação cognitiva, alucinações visuais bem formadas, parkinsonismo e distúrbio comportamental do sono REM, mas é crônica e progressiva — não explica um quadro instalado em 24 horas num paciente com perda de memória prévia típica.\n\n**Alternativa (C):** esquizofrenia de início tardio é rara aos 82 anos e cursa com delírios e alucinações com consciência clara, sem flutuação do nível de consciência e sem a desatenção marcante do delirium.",
    "tip": "Idoso com piora em horas a dias, desatenção e consciência flutuante = delirium (CAM). Procure a causa (infecção, remédio, eletrólitos, retenção urinária, dor) e trate sem benzodiazepínico.",
    "reference": "Inouye SK et al. Delirium in elderly people. Lancet, 2014. National Institute for Health and Care Excellence (NICE). Delirium: prevention, diagnosis and management (CG103, atualizada 2023). American Psychiatric Association. DSM-5-TR, 2022.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Mulher com tireoidite de Hashimoto (doença autoimune) e gastrite atrófica de corpo e fundo gástrico, apresentando anemia grave macrocítica (VCM 114), pancitopenia, icterícia por bilirrubina indireta e alterações neurológicas (perda da sensibilidade vibratória e hiper-reflexia): anemia perniciosa, causa autoimune de deficiência de vitamina B12. Anticorpos destroem as células parietais (gastrite atrófica do tipo A, poupa o antro) e o fator intrínseco, sem o qual a B12 não é absorvida no íleo terminal. Doenças autoimunes se associam: Hashimoto, vitiligo, diabetes tipo 1 e doença de Addison.\n\n**Por que cada achado aparece:**\n\n• **Macrocitose e pancitopenia:** a falta de B12 prejudica a síntese de DNA nas células da medula (eritropoiese megaloblástica), afetando as três linhagens; neutrófilos hipersegmentados no sangue periférico.\n• **Icterícia com bilirrubina indireta e LDH muito alto:** eritropoiese ineficaz — as células morrem ainda na medula (hemólise intramedular).\n• **Neurológico:** degeneração combinada subaguda da medula — cordões posteriores (perda de vibração e propriocepção, ataxia) e laterais (hiper-reflexia, Babinski) —, além de neuropatia periférica e alterações cognitivas. Pode ocorrer sem anemia e ser irreversível se o tratamento atrasar.\n\n**Diagnóstico e tratamento:**\n\n• B12 sérica baixa; ácido metilmalônico e homocisteína elevados (o ácido metilmalônico separa B12 de folato, em que só a homocisteína sobe).\n• Anticorpos anti-fator intrínseco (específico) e anticélula parietal (sensível); gastrina elevada.\n• **Tratamento:** vitamina B12 (cianocobalamina) intramuscular — 1.000 µg diariamente ou em dias alternados na fase inicial, depois semanal e mensal por toda a vida; doses orais altas são alternativa. Não dar ácido fólico isolado: corrige a anemia, mas a lesão neurológica progride.\n• **Cuidado:** hipocalemia nos primeiros dias de tratamento (consumo de potássio pela nova produção de células).\n• **Seguimento:** risco aumentado de adenocarcinoma gástrico e tumores carcinoides — endoscopia de vigilância.\n\nOutras causas de deficiência de B12: dieta vegana, gastrectomia ou cirurgia bariátrica, doença ou ressecção do íleo terminal (Crohn), metformina e IBP por longo prazo, Diphyllobothrium latum, supercrescimento bacteriano.",
    "commentary": "**Alternativa (B):** a anemia de doença crônica é normocítica (às vezes microcítica), leve a moderada, sem pancitopenia, icterícia indireta ou alterações neurológicas.\n\n**Alternativa (C):** na síndrome colestática a bilirrubina elevada é a DIRETA, com fosfatase alcalina e GGT aumentadas — aqui são normais e a bilirrubina é indireta.\n\n**Alternativa (D):** a síndrome mielodisplásica pode causar macrocitose e citopenias em idosos, mas não explica as alterações neurológicas típicas da B12 nem a associação com gastrite atrófica autoimune; é diagnóstico a considerar se não houver resposta à reposição de B12.",
    "tip": "Autoimune (Hashimoto, vitiligo) + gastrite atrófica de corpo + macrocitose com pancitopenia + icterícia indireta + perda de vibração = anemia perniciosa. B12 intramuscular para sempre; nunca folato isolado.",
    "reference": "Stabler SP. Vitamin B12 deficiency. N Engl J Med, 2013. Associação Brasileira de Hematologia, Hemoterapia e Terapia Celular (ABHH). Anemias carenciais — recomendações.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Lactente de 11 meses com febre alta há 4 dias, tosse seca, coriza e conjuntivite com fotofobia (pródromo clássico), seguidos de exantema maculopapular morbiliforme que começou atrás das orelhas e desceu para face, tronco e membros: sarampo. A sequência febre alta + os três \"Cs\" (cough, coryza, conjunctivitis — tosse, coriza e conjuntivite) + exantema craniocaudal, com a febre ainda presente quando o exantema aparece, é típica. O lactente não recebeu a tríplice viral, prevista aos 12 meses, e estava suscetível.\n\n**Roteiro do sarampo:**\n\n• **Agente:** vírus do gênero Morbillivirus; um dos mais contagiosos que existem (transmissão por aerossóis), de 4 dias antes até 4 dias depois do início do exantema.\n• **Clínica:** pródromo de 3–5 dias com febre alta, tosse, coriza, conjuntivite e manchas de Koplik (pontos brancos na mucosa oral, junto aos molares, que precedem o exantema); exantema maculopapular que começa na região retroauricular e na linha do cabelo e desce, confluente, por cerca de 5–6 dias, descamando em fina descamação.\n• **Complicações:** otite média, pneumonia (principal causa de morte), diarreia, encefalite, panencefalite esclerosante subaguda (anos depois); maior gravidade em desnutridos, menores de 1 ano e imunodeprimidos.\n• **Diagnóstico:** sorologia IgM e RT-PCR (swab de oro e nasofaringe e urina).\n• **Conduta:** notificação compulsória IMEDIATA (em até 24 h) de todo caso suspeito — febre + exantema maculopapular + tosse, coriza ou conjuntivite; isolamento respiratório até 4 dias após o exantema; vitamina A para todas as crianças com sarampo (reduz gravidade e mortalidade); tratamento de suporte.\n• Bloqueio vacinal dos contatos suscetíveis em até 72 h (tríplice viral a partir de 6 meses — \"dose zero\" em surtos); imunoglobulina em até 6 dias para contatos de risco (menores de 6 meses, gestantes, imunodeprimidos).\n• **Vacinação:** tríplice viral aos 12 meses e tetraviral aos 15 meses.",
    "commentary": "**Alternativa (B):** a varicela tem exantema vesicular, pruriginoso, com lesões em diferentes estágios ao mesmo tempo (mácula, pápula, vesícula, crosta), centrípeto (mais no tronco), com pródromo leve — não maculopapular craniocaudal com conjuntivite.\n\n**Alternativa (C):** a dengue tem febre alta, mialgia, cefaleia e dor retro-orbitária; o exantema, quando aparece, é tardio (com a queda da febre), muitas vezes pruriginoso, e não há tosse, coriza e conjuntivite marcantes.\n\n**Alternativa (D):** a rubéola é mais branda: febre baixa, linfonodos retroauriculares, cervicais posteriores e occipitais aumentados, exantema róseo craniocaudal que some em 3 dias, sem a conjuntivite intensa e a fotofobia nem a tosse proeminente do sarampo.",
    "tip": "Febre alta + tosse + coriza + conjuntivite (+ Koplik) e depois exantema que começa atrás das orelhas e desce = sarampo. Notificação imediata, isolamento, vitamina A e bloqueio vacinal dos contatos em 72 h.",
    "reference": "Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024 (capítulo Sarampo). Sociedade Brasileira de Pediatria. Tratado de Pediatria. 5ª ed. Doenças exantemáticas.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Idoso com dor que começou na fossa ilíaca esquerda há 4 dias, febre, e que hoje tem dor difusa, distensão, descompressão brusca positiva e taquicardia: diverticulite aguda do sigmoide que evoluiu com perfuração e peritonite. A radiografia de tórax em pé mostra ar livre abaixo do diafragma (pneumoperitônio), sinal de perfuração de víscera oca.\n\nO abdome agudo é, portanto, inflamatório (diverticulite) e perfurativo (perfuração com peritonite generalizada).\n\n**Classificação sindrômica do abdome agudo:**\n\n• **Inflamatório:** apendicite, colecistite, diverticulite, pancreatite — dor que piora progressivamente, febre, leucocitose, irritação peritoneal localizada.\n• **Perfurativo:** úlcera péptica perfurada, diverticulite perfurada, perfuração por corpo estranho ou tumor — dor súbita e difusa, abdome em tábua, pneumoperitônio (ar sob o diafragma na radiografia em pé; sinal de Jobert — perda da macicez hepática).\n• **Obstrutivo:** bridas, hérnias, tumores, volvo — cólica, vômitos, distensão, parada de eliminação de gases e fezes, níveis hidroaéreos.\n• **Isquêmico (vascular):** isquemia mesentérica — dor desproporcional ao exame físico, em idoso com fibrilação atrial ou aterosclerose, acidose láctica.\n• **Hemorrágico:** gravidez ectópica rota, aneurisma de aorta roto, ruptura de baço.\n\n**Diverticulite — classificação de Hinchey e conduta:**\n\n• **Não complicada:** antibiótico oral ou mesmo observação em casos selecionados.\n• **Hinchey I (abscesso pericólico) e II (abscesso pélvico ou distante):** antibiótico; drenagem percutânea se abscesso > 3–4 cm.\n• **Hinchey III (peritonite purulenta) e IV (peritonite fecal):** cirurgia de urgência — cirurgia de Hartmann (sigmoidectomia com colostomia terminal) ou ressecção com anastomose primária em pacientes selecionados; lavagem laparoscópica em casos selecionados de Hinchey III.\n• Tomografia de abdome com contraste é o exame de escolha para diagnóstico e estadiamento.\n• Colonoscopia 6–8 semanas após o episódio, para excluir câncer.",
    "commentary": "**Alternativa (A):** o abdome agudo isquêmico (isquemia mesentérica) se caracteriza por dor intensa e desproporcional ao exame físico, em geral sem dor localizada prévia na fossa ilíaca esquerda; o quadro de 4 dias com febre e dor localizada evoluindo para peritonite é de causa inflamatória.\n\n**Alternativa (B):** apesar de não evacuar, o paciente elimina flatos — não há obstrução completa —, e a constipação é reflexo do íleo paralítico da peritonite. O pneumoperitônio define perfuração, não obstrução.\n\n**Alternativa (C):** não há obstrução nem isquemia como mecanismos principais; o caso combina inflamação (diverticulite) e perfuração (ar livre).",
    "tip": "Idoso + dor em fossa ilíaca esquerda + febre = diverticulite. Dor que vira difusa com peritonite e ar sob o diafragma = perfurou: inflamatório + perfurativo (Hinchey III/IV), cirurgia de urgência (Hartmann).",
    "reference": "Sartelli M et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg, 2020. Sabiston Textbook of Surgery. 21ª ed. Abdome agudo.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ],
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
    "explanation": "Gestante de 37 semanas, hipertensa (PA 160 × 110 mmHg), com dor abdominal súbita e intensa que se tornou contínua, sangramento vaginal, útero hipertônico (contração mantida, sem relaxamento) e bradicardia fetal (90 bpm): descolamento prematuro de placenta (DPP).\n\nA hipertensão (pré-eclâmpsia) é o principal fator de risco. O sangue que se acumula entre a placenta e o útero (hematoma retroplacentário) irrita o miométrio, causando hipertonia, e parte do sangramento pode ficar oculto, de modo que a gravidade materna e fetal pode ser maior do que o sangramento visível sugere.\n\n**Roteiro do DPP:**\n\n• **Fatores de risco:** síndromes hipertensivas (o principal), DPP prévio, trauma abdominal, tabagismo, cocaína, rotura prematura de membranas, descompressão uterina súbita (polidrâmnio, gemelar), idade materna avançada, trombofilias.\n• **Clínica:** dor súbita e intensa, sangramento escuro (pode ser oculto), hipertonia uterina (útero lenhoso), sofrimento ou óbito fetal, sinais de choque desproporcionais ao sangramento exteriorizado.\n• **Diagnóstico:** clínico — não esperar ultrassonografia, que tem baixa sensibilidade.\n• **Complicações:** coagulação intravascular disseminada (a mais temida; dosar fibrinogênio), útero de Couvelaire (infiltração hemorrágica do miométrio, com atonia), choque, insuficiência renal, óbito fetal.\n• **Conduta com feto vivo:** amniotomia (reduz a pressão intrauterina e a passagem de tromboplastina para a circulação) e resolução pela via mais rápida — cesariana, a menos que o parto vaginal seja iminente. Com feto morto: amniotomia e parto vaginal, se a mãe estiver estável.\n• **Suporte:** dois acessos calibrosos, reposição de volume e hemoderivados, controle pressórico, sulfato de magnésio se pré-eclâmpsia grave.\n\nDPP × placenta prévia: DPP — dor, hipertonia, sangue escuro, sofrimento fetal, associação com hipertensão; placenta prévia — sangramento indolor, vermelho vivo, de repetição, útero relaxado, feto geralmente bem, toque vaginal proibido até excluir.",
    "commentary": "**Alternativa (B):** a placenta prévia causa sangramento INDOLOR, vermelho vivo, com útero de tônus normal e feto em geral sem sofrimento — o oposto de dor intensa com hipertonia e bradicardia fetal.\n\n**Alternativa (C):** a rotura uterina ocorre sobretudo em útero com cicatriz (cesárea anterior), durante o trabalho de parto, com dor súbita seguida de ALÍVIO e parada das contrações, partes fetais palpáveis sob a pele e subida da apresentação; não há hipertonia — o útero roto não se contrai.\n\n**Alternativa (D):** a rotura do seio marginal causa sangramento vaginal discreto, indolor, sem hipertonia, sem repercussão materna ou fetal; é diagnóstico em geral feito após o parto, pelo exame da placenta.",
    "tip": "Gestante hipertensa + dor súbita + útero hipertônico (lenhoso) + sangramento escuro + sofrimento fetal = DPP. Amniotomia e parto pela via mais rápida (cesárea se feto vivo); vigiar coagulopatia.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Descolamento prematuro de placenta, 2021. Brasil. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "A estimativa rápida participativa é um método de diagnóstico de saúde do território que, em pouco tempo e com baixo custo, identifica os principais problemas e recursos de uma comunidade, envolvendo a própria população. Ela combina dados qualitativos de fontes primárias — observação direta do território, entrevistas com informantes-chave (lideranças, agentes comunitários, professores, comerciantes, religiosos) e análise de documentos locais — com dados epidemiológicos locais já disponíveis (registros da UBS, SISAB/e-SUS, notificações).\n\nÉ a ferramenta indicada quando o médico precisa conhecer o território e definir prioridades rapidamente, em contexto de alta pressão assistencial.\n\n**Princípios da estimativa rápida:**\n\n• Coletar só os dados pertinentes e necessários ao planejamento — sem pretender ser exaustiva.\n• Analisar as informações no próprio local, junto à comunidade.\n• **Ser flexível e participativa:** a população ajuda a identificar e hierarquizar problemas.\n• **Três fontes principais:** registros escritos existentes (fontes secundárias), entrevistas com informantes-chave e observação ativa do território.\n\n**Ferramentas relacionadas na Atenção Primária:**\n\n• **Territorialização:** reconhecimento do território com mapa inteligente (áreas de risco, equipamentos sociais, barreiras de acesso), feito com os agentes comunitários.\n• **Planejamento Estratégico Situacional (PES, de Carlos Matus):** identificação e priorização de problemas, explicação (árvore de problemas), plano de ação e gestão.\n• Cadastro individual e domiciliar no e-SUS, base para conhecer a população adscrita.\n• **Critérios de priorização de problemas:** magnitude, transcendência (gravidade e valor social), vulnerabilidade (possibilidade de intervenção) e custo.",
    "commentary": "**Alternativa (A):** dados epidemiológicos nacionais são agregados e defasados, e não mostram as particularidades de uma comunidade periférica específica (violência, condições de moradia, recursos locais) — insuficientes para a estimativa rápida.\n\n**Alternativa (C):** entrevistas por amostragem com moradores e dados do censo exigem desenho amostral, tempo e recursos — é um inquérito populacional, não uma estimativa rápida; e o censo do IBGE é desatualizado e pouco detalhado para a microárea.\n\n**Alternativa (D):** os prontuários só mostram quem chega à UBS e os diagnósticos registrados; deixam de fora quem não acessa o serviço e os determinantes sociais (violência, vulnerabilidade), justamente o que a estimativa busca.",
    "tip": "Estimativa rápida participativa = observação do território + informantes-chave + documentos locais + dados epidemiológicos locais. Rápida, barata, com a comunidade — não é censo nem inquérito.",
    "reference": "Brasil. Ministério da Saúde. Política Nacional de Atenção Básica — Portaria nº 2.436/2017. Gusso G, Lopes JMC, Dias LC (org.). Tratado de Medicina de Família e Comunidade. 2ª ed., 2019.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Letalidade é a proporção de doentes que morrem pela doença: número de óbitos pela doença ÷ número de casos da doença × 100. Aqui: 1 óbito ÷ 500 casos × 100 = 0,2%. A letalidade mede a GRAVIDADE da doença (e a qualidade da assistência) entre quem adoece — por isso o denominador são os casos, e não a população.\n\n**Indicadores que costumam ser confundidos:**\n\n• Letalidade = óbitos pela doença ÷ casos da doença × 100. Aqui, 1/500 = 0,2%.\n• Mortalidade específica = óbitos pela doença ÷ população total × 10ⁿ. Aqui, 1/10.000 = 0,01% = 10 por 100.000 habitantes.\n• Incidência (taxa de ataque, em surtos) = casos novos ÷ população exposta × 10ⁿ. Aqui, 500/10.000 = 5% = 5.000 por 100.000 habitantes.\n• Prevalência = casos existentes (novos e antigos) ÷ população × 10ⁿ.\n• **Relação:** mortalidade = incidência × letalidade (5% × 0,2% = 0,01%).\n\nNa dengue, o Ministério da Saúde acompanha a letalidade entre os casos graves (dengue grave e com sinais de alarme): letalidade elevada indica falha no manejo clínico — classificação de risco e hidratação adequadas reduzem a letalidade da dengue grave para menos de 1%.",
    "commentary": "**Alternativa (A):** 0,4% corresponderia a 2 óbitos em 500 casos — o dobro do registrado.\n\n**Alternativa (B):** 0,1% corresponderia a 1 óbito em 1.000 casos — erro de denominador (o território tem 500 casos).\n\n**Alternativa (D):** 0,5% corresponderia a 1 óbito em 200 casos, ou a confundir com a proporção de doentes na população — a incidência é 5% (500/10.000), não 0,5%.\n\nA pegadinha clássica é usar a população (10.000) no denominador: daria 0,01%, que é a mortalidade específica, não a letalidade.",
    "tip": "Letalidade = óbitos ÷ CASOS (gravidade). Mortalidade = óbitos ÷ POPULAÇÃO (risco de morrer). Incidência = casos novos ÷ população. Mortalidade = incidência × letalidade.",
    "reference": "Rouquayrol MZ, Gurgel M. Epidemiologia & Saúde. 8ª ed. Medronho RA et al. Epidemiologia. 2ª ed. Rede Interagencial de Informações para a Saúde (RIPSA). Indicadores básicos para a saúde no Brasil. 2ª ed., 2008.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Homem com diminuição da libido e disfunção sexual surgidas após iniciar quatro medicamentos. Entre eles, a amitriptilina — antidepressivo tricíclico — é a que mais causa disfunção sexual: o aumento de serotonina inibe o desejo, a excitação e o orgasmo (ejaculação retardada), e os efeitos anticolinérgicos e antiadrenérgicos alfa-1 prejudicam a ereção. Mesmo nas doses baixas usadas na profilaxia da enxaqueca, o efeito pode aparecer.\n\n**Medicamentos e disfunção sexual:**\n\n• **Antidepressivos:** ISRS e IRSN (paroxetina, sertralina, fluoxetina, venlafaxina) e tricíclicos (amitriptilina, clomipramina) — os que mais causam; menor risco com bupropiona, mirtazapina, agomelatina, vortioxetina.\n• **Anti-hipertensivos:** tiazídicos, betabloqueadores não seletivos (propranolol), espironolactona (antiandrogênica), clonidina e metildopa. Bloqueadores de canal de cálcio, IECA e BRA quase não afetam (os BRA podem até melhorar).\n• Antipsicóticos (sobretudo por hiperprolactinemia: risperidona, haloperidol), antiandrogênicos (finasterida, ciproterona), opioides, benzodiazepínicos, anticonvulsivantes, álcool.\n\nConduta na disfunção sexual por fármaco: confirmar a relação temporal; avaliar causas orgânicas (vasculares — a disfunção erétil é marcador de risco cardiovascular —, diabetes, hipogonadismo com dosagem de testosterona, tabagismo) e psicológicas; trocar a medicação (para a profilaxia da enxaqueca há alternativas: propranolol, topiramato, flunarizina, valproato, candesartana); se não for possível, considerar inibidor de fosfodiesterase 5.",
    "commentary": "**Alternativa (B):** a anlodipina (bloqueador de canal de cálcio di-hidropiridínico) é um dos anti-hipertensivos com menor associação com disfunção sexual; seus efeitos típicos são edema de tornozelos, cefaleia e rubor.\n\n**Alternativa (C):** a atorvastatina não tem associação consistente com queda de libido ou disfunção erétil; ao melhorar a função endotelial, pode até beneficiar a ereção. Seus efeitos típicos são mialgia e elevação de transaminases.\n\n**Alternativa (D):** a bupropiona (inibidor da recaptação de dopamina e noradrenalina) é o antidepressivo com MENOR impacto sexual e às vezes é usada para tratar a disfunção sexual causada por ISRS. Seus efeitos típicos são insônia, boca seca e redução do limiar convulsivo.",
    "tip": "Disfunção sexual por remédio: pense em antidepressivo serotoninérgico (ISRS, IRSN, tricíclico), tiazídico, betabloqueador, espironolactona, antipsicótico. Bupropiona, anlodipina, IECA e BRA quase não causam.",
    "reference": "Montejo AL et al. Management strategies for antidepressant-related sexual dysfunction. J Clin Med, 2019. Sociedade Brasileira de Urologia. Diretrizes de disfunção erétil.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Jovem com hiperglicemia de 450 mg/dL, desidratação, hipotensão, hálito cetônico, dor abdominal, náuseas e sonolência: cetoacidose diabética (CAD), muitas vezes a primeira manifestação do diabetes tipo 1. A falta de insulina libera a lipólise e a produção hepática de corpos cetônicos (ácidos), que consomem bicarbonato: acidose metabólica com ânion gap aumentado.\n\nO organismo compensa com hiperventilação (respiração de Kussmaul), baixando a PaCO₂. O padrão esperado é pH baixo, bicarbonato baixo e PaCO₂ baixa — alternativa D (pH 7,16; HCO₃⁻ 10; PaCO₂ 18,2).\n\nConferindo a compensação (fórmula de Winter): PaCO₂ esperada = 1,5 × HCO₃⁻ + 8 (± 2) = 1,5 × 10 + 8 = 23 (21–25). A PaCO₂ de 18,2 está um pouco abaixo, o que indica compensação respiratória vigorosa (ou alcalose respiratória associada, por exemplo, por dor ou ansiedade).\n\n**Roteiro da cetoacidose diabética:**\n\n• **Diagnóstico (SBD/ADA):** glicemia ≥ 250 mg/dL (ou diabetes conhecido), pH < 7,3 e/ou HCO₃⁻ < 18 mEq/L, cetonemia (β-hidroxibutirato ≥ 3 mmol/L) ou cetonúria significativa. Ânion gap > 12.\n• **Gravidade:** leve (pH 7,25–7,30), moderada (7,00–7,24), grave (< 7,00 ou HCO₃⁻ < 10, torpor ou coma). Este paciente tem CAD moderada a grave.\n• **Precipitantes:** infecção (a principal), omissão de insulina, primeira manifestação do diabetes tipo 1, infarto, pancreatite, AVC, uso de inibidor de SGLT2, drogas.\n• **Tratamento — ordem importa:** 1) hidratação com SF 0,9% (15–20 mL/kg na 1ª hora); 2) potássio — se K⁺ < 3,3 mEq/L, repor antes de iniciar a insulina; se 3,3–5,2, repor junto; se > 5,2, não repor e checar a cada 2 h; 3) insulina regular intravenosa contínua 0,1 U/kg/h (com ou sem bolus); 4) soro glicosado quando a glicemia chegar a 200–250 mg/dL, mantendo a insulina até resolver a acidose.\n• Bicarbonato só se pH < 6,9 (ou 7,0, conforme a diretriz).\n• **Resolução:** glicemia < 200 mg/dL + dois de: HCO₃⁻ ≥ 15, pH > 7,3, ânion gap ≤ 12 → transição para insulina subcutânea, com 1–2 h de sobreposição.\n• **Complicação temida em crianças e jovens:** edema cerebral (correção rápida demais da osmolalidade).",
    "commentary": "**Alternativa (A):** pH 7,46 com bicarbonato alto (30,6) é alcalose metabólica — padrão de vômitos persistentes ou uso de diuréticos, não de cetoacidose.\n\n**Alternativa (B):** pH 7,28 com PaCO₂ alta (68,1) e bicarbonato normal-alto é acidose RESPIRATÓRIA aguda (hipoventilação — DPOC, depressão respiratória por sedativos); na CAD, o paciente hiperventila e a PaCO₂ cai.\n\n**Alternativa (C):** valores normais (pH 7,42; HCO₃⁻ 22,6; PaCO₂ 35) não são compatíveis com o quadro de cetoacidose descrito; seriam esperados num estado hiperglicêmico hiperosmolar (que tem pH > 7,3 e bicarbonato > 18), mais comum em idosos com diabetes tipo 2.",
    "tip": "Cetoacidose: pH baixo + HCO₃⁻ baixo + PaCO₂ baixa (Kussmaul), ânion gap alto. Winter: PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2. Tratar: soro, potássio (antes da insulina se < 3,3), insulina 0,1 U/kg/h, glicosado quando glicemia < 250.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz Oficial — Cetoacidose diabética, 2023/2024. Umpierrez GE et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (ADA/EASD/JBDS/AACE/DTS). Diabetes Care, 2024.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Adolescente de 11 anos com hipertensão (150 × 90 mmHg nos braços), PA nas pernas MENOR que nos braços (116 × 72 mmHg), pulsos radiais amplos e femorais diminuídos: coarctação da aorta. O estreitamento da aorta, em geral no istmo (logo após a artéria subclávia esquerda), aumenta a pressão antes da lesão (cabeça e membros superiores) e reduz o fluxo depois dela (abdome e membros inferiores).\n\nNormalmente a PA nas pernas é igual ou maior que nos braços; diferença braço-perna de mais de 10–20 mmHg é altamente sugestiva. A investigação inicial é o ecocardiograma com Doppler, que mostra a anatomia da coarctação, o gradiente de pressão e as lesões associadas.\n\n**Roteiro da coarctação da aorta:**\n\n• **Associações:** valva aórtica bicúspide (até 50–80%), síndrome de Turner (45,X), CIV, aneurismas cerebrais (polígono de Willis).\n• **Apresentações:** no recém-nascido, coarctação crítica dependente do canal arterial — choque e insuficiência cardíaca quando o canal fecha (tratar com prostaglandina E1); na criança maior e adolescente, hipertensão nos membros superiores, cefaleia, claudicação, epistaxe, sopro sistólico no dorso (interescapular).\n• **Radiografia de tórax (crianças maiores):** erosões nas bordas inferiores das costelas (sinal de Roesler, por circulação colateral pelas artérias intercostais) e sinal do \"3\" no contorno da aorta.\n• **Diagnóstico:** ecocardiograma com Doppler; angiotomografia ou angiorressonância para planejar o tratamento.\n• **Tratamento:** angioplastia com balão e stent (crianças maiores e adultos) ou correção cirúrgica (ressecção com anastomose); seguimento por toda a vida (hipertensão residual, recoarctação, aneurismas).\n\nHipertensão na infância: em crianças pequenas e com PA muito elevada, predominam causas secundárias (renal — a principal —, renovascular, coarctação, endócrinas). Medir sempre a PA nos quatro membros e palpar pulsos femorais em toda criança hipertensa.",
    "commentary": "**Alternativa (B):** a ultrassonografia renal com Doppler investiga doença renal parenquimatosa e estenose de artéria renal — causas importantes de hipertensão secundária na infância —, mas não explica a diferença de pressão entre braços e pernas com pulsos femorais diminuídos.\n\n**Alternativa (C):** as metanefrinas investigam feocromocitoma ou paraganglioma, que causa hipertensão paroxística ou sustentada com palpitações, sudorese e cefaleia — com pulsos e pressões simétricos nos quatro membros.\n\n**Alternativa (D):** a relação aldosterona/renina investiga hiperaldosteronismo primário (hipertensão com hipocalemia), também sem diferença de pressão entre braços e pernas.",
    "tip": "Criança hipertensa com PA nos braços maior que nas pernas e pulsos femorais fracos = coarctação da aorta: ecocardiograma com Doppler. Associações: valva bicúspide e síndrome de Turner.",
    "reference": "Flynn JT et al. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. Pediatrics, 2017. Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Hipertensão Arterial — 2025 (capítulo Hipertensão na criança e no adolescente).",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Amputação traumática do polegar por faca (lesão cortante, limpa — a de melhor prognóstico para reimplante), com o dedo levado num vidro seco. O polegar é a principal indicação de reimplante digital, porque responde por cerca de 40–50% da função da mão. Enquanto aguarda a transferência, o médico deve preservar o segmento amputado com resfriamento indireto: envolver o dedo em gaze estéril umedecida com soro fisiológico, colocá-lo num saco plástico fechado e pôr esse saco num recipiente com gelo e água.\n\nO frio reduz o metabolismo e prolonga a tolerância à isquemia, mas o tecido nunca pode ter contato direto com o gelo nem ficar imerso em líquido. Entre as alternativas, a B é a que mais se aproxima.\n\n**Roteiro da amputação traumática:**\n\n• **Segmento amputado:** limpar sujeira grosseira com soro; envolver em gaze úmida com soro (não encharcada); saco plástico estéril fechado; recipiente com gelo e água (cerca de 4 °C). Identificar com nome e horário.\n• **Não fazer:** gelo em contato direto, congelamento, imersão em soro (macera o tecido), álcool, antissépticos ou outras soluções.\n• **Tempo de isquemia tolerado em dedos (pouco músculo):** até cerca de 12 h quente e 24 h ou mais resfriado; em segmentos com muito músculo (braço, perna), 6 h quente e 12 h resfriado.\n• **Coto:** compressão direta para hemostasia (evitar torniquete prolongado e pinçar vasos às cegas), curativo estéril úmido, elevação do membro, analgesia, profilaxia do tétano e antibiótico.\n• **Indicações de reimplante:** polegar, múltiplos dedos, mão ou punho, qualquer amputação em criança, dedo isolado distal à inserção do flexor superficial. Contraindicações relativas: lesão por esmagamento ou avulsão extensa, segmento muito contaminado, instabilidade do paciente, isquemia prolongada.",
    "commentary": "**Alternativa (A):** colocar o dedo dentro do saco com soro (imerso) e acrescentar antibiótico no líquido macera os tecidos e não traz benefício; o saco deve conter o dedo envolto em gaze úmida, e o antibiótico é dado ao paciente, não ao segmento.\n\n**Alternativa (C):** lavar com soro está certo, mas guardar em vidro na geladeira sem proteção úmida e sem saco resseca o tecido; a geladeira comum também não garante a temperatura adequada e retarda o transporte com o paciente.\n\n**Alternativa (D):** congelar a −10 °C destrói os tecidos (cristais de gelo lesam as células e os vasos) e inviabiliza o reimplante.\n\nRessalva: a alternativa B não menciona o saco impermeável entre a gaze e o gelo; o dedo não deve encostar no gelo. Mesmo assim, é a única que contempla gaze úmida com soro e resfriamento.",
    "tip": "Dedo amputado: gaze úmida com soro → saco plástico fechado → recipiente com gelo e água. Nunca gelo direto, nunca imerso, nunca congelado. Polegar é prioridade de reimplante.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Trauma musculoesquelético). Sociedade Brasileira de Cirurgia da Mão. Orientações sobre amputações traumáticas e reimplantes.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ]
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
    "explanation": "Infertilidade é a ausência de gravidez após 12 meses de relações sexuais regulares sem contracepção. A idade materna antecipa a investigação: aos 35 anos ou mais, investigar após 6 meses; acima de 40 anos, a investigação pode ser imediata, porque a reserva ovariana e a qualidade dos óvulos caem rapidamente.\n\nEsta mulher de 40 anos tenta há 18 meses: deve ser investigada sem demora. A infertilidade é um problema do CASAL — o fator masculino está presente em cerca de 40–50% dos casos —, por isso o encaminhamento é do casal para avaliação especializada.\n\n**Investigação básica do casal infértil:**\n\n• **Fator ovulatório:** história menstrual (ciclos regulares sugerem ovulação), progesterona no meio da fase lútea, TSH e prolactina; avaliar síndrome dos ovários policísticos.\n• **Reserva ovariana (sobretudo a partir de 35 anos):** hormônio antimülleriano, FSH e estradiol no 3º dia do ciclo, contagem de folículos antrais na ultrassonografia.\n• **Fator tuboperitoneal:** histerossalpingografia (permeabilidade das trompas); laparoscopia se suspeita de endometriose ou aderências (doença inflamatória pélvica prévia).\n• **Fator uterino:** ultrassonografia transvaginal e histeroscopia (pólipos, miomas submucosos, septos, sinéquias).\n• **Fator masculino:** espermograma (2 amostras, abstinência de 2–5 dias).\n\nTratamento conforme a causa: indução da ovulação (letrozol, clomifeno), inseminação intrauterina, fertilização in vitro (indicada precocemente em mulheres acima de 38–40 anos, obstrução tubária ou fator masculino grave). Desde já: ácido fólico, vacinas em dia, cessar tabagismo e álcool, controle de peso. Idade avançada aumenta o risco de aborto e de aneuploidias, mas não é contraindicação à gestação.",
    "commentary": "**Alternativa (B):** idade de 40 anos não contraindica a gestação; aumenta riscos (aborto, cromossomopatias, pré-eclâmpsia, diabetes gestacional), que devem ser informados, mas a decisão de engravidar é da paciente e cabe ao médico apoiar.\n\n**Alternativa (C):** ácido fólico deve ser prescrito a toda mulher que planeja engravidar, mas esperar mais 6 meses aos 40 anos desperdiça tempo precioso, com a fertilidade em queda rápida.\n\n**Alternativa (D):** iniciar hormônios (indutores de ovulação) sem investigar é inadequado: a paciente tem ciclos regulares (provavelmente ovula), e o problema pode estar nas trompas, no útero ou no parceiro; tratamento às cegas expõe a riscos (gestação múltipla, hiperestímulo) e atrasa o tratamento correto.",
    "tip": "Infertilidade = 12 meses sem gravidez (< 35 anos); ≥ 35 anos, 6 meses; > 40 anos, investigar já. Sempre investigar o CASAL (espermograma). Idade não contraindica gestar.",
    "reference": "Practice Committee of the American Society for Reproductive Medicine. Fertility evaluation of infertile women: a committee opinion, 2021. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Investigação básica do casal infértil, 2021.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Gestante de 27 semanas com TOTG 75 g com glicemia de 1 hora de 190 mg/dL: diabetes mellitus gestacional (DMG). No TOTG entre 24 e 28 semanas, basta UM valor alterado — jejum 92–125, 1 h ≥ 180 ou 2 h 153–199 mg/dL. Não há necessidade de repetir o exame nem de hemoglobina glicada.\n\nA conduta inicial é a terapia não farmacológica: orientação nutricional individualizada, atividade física regular (se não houver contraindicação obstétrica) e automonitorização da glicemia capilar. Cerca de 70–85% das gestantes atingem as metas só com essas medidas.\n\n**Roteiro do diabetes gestacional (SBD/FEBRASGO/OPAS — consenso brasileiro):**\n\n• **Rastreamento:** glicemia de jejum na 1ª consulta (até 20 semanas). 92–125 mg/dL = DMG; ≥ 126 mg/dL = diabetes prévio (diagnosticado na gestação). Se normal, TOTG 75 g entre 24 e 28 semanas.\n• **Diabetes prévio (manifesto) na gestação:** jejum ≥ 126, 2 h do TOTG ≥ 200, HbA1c ≥ 6,5% ou glicemia ao acaso ≥ 200 com sintomas.\n• **Metas de glicemia capilar:** jejum < 95, 1 h após as refeições < 140, 2 h após < 120 mg/dL.\n• **Tratamento farmacológico:** se as metas não forem atingidas em 1–2 semanas de dieta e atividade física (ou se crescimento fetal excessivo — circunferência abdominal ≥ percentil 75), iniciar insulina (NPH e/ou regular ou análogos), a 1ª escolha. Metformina é alternativa quando não há acesso ou aceitação da insulina.\n• **Complicações:** macrossomia, distocia de ombro, hipoglicemia neonatal, polidrâmnio, pré-eclâmpsia, maior risco de cesárea.\n• **Pós-parto:** suspender o tratamento e fazer TOTG 75 g entre 6 semanas e 6 meses após o parto — risco de 50% de diabetes tipo 2 em 10 anos.",
    "commentary": "**Alternativa (A):** repetir o TOTG não é necessário — um único valor alterado confirma o diagnóstico e atrasar o tratamento aumenta as complicações fetais.\n\n**Alternativa (C):** a hemoglobina glicada não é usada para diagnosticar DMG (sofre interferência da anemia e da renovação das hemácias na gestação) e não acrescenta nada à conduta.\n\n**Alternativa (D):** a insulina é reservada a quem não atinge as metas com dieta e atividade física após 1–2 semanas (ou tem crescimento fetal excessivo); não é a conduta inicial.",
    "tip": "TOTG 75 g na gestação: jejum ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153 — um valor basta para DMG. Primeiro dieta + atividade física + glicemia capilar; insulina se não atingir metas em 1–2 semanas.",
    "reference": "Organização Pan-Americana da Saúde, Ministério da Saúde, FEBRASGO e Sociedade Brasileira de Diabetes. Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil, 2016. Sociedade Brasileira de Diabetes. Diretriz Oficial — Diabetes na gestação, 2024.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Quando um beneficiário de plano de saúde é atendido no SUS em procedimento coberto pelo seu contrato, a operadora deve ressarcir o SUS (Lei 9.656/1998, art. 32, considerado constitucional pelo STF em 2018). Quem faz a identificação desses atendimentos é a Agência Nacional de Saúde Suplementar (ANS): ela cruza os dados de atendimento do SUS (internações, procedimentos ambulatoriais de alta complexidade, atendimentos de urgência) com o cadastro de beneficiários das operadoras, verifica se o procedimento estava coberto pelo contrato (segmentação, carência, área de abrangência) e notifica a operadora, que pode contestar. Os valores cobrados vão para o Fundo Nacional de Saúde.\n\n**Saúde suplementar — pontos que caem em prova:**\n\n• ANS (Lei 9.961/2000): agência reguladora vinculada ao Ministério da Saúde que regula, normatiza, controla e fiscaliza as operadoras de planos de saúde; define o Rol de Procedimentos (cobertura mínima obrigatória).\n• Lei 9.656/1998: regras dos planos — segmentações (ambulatorial, hospitalar com ou sem obstetrícia, odontológico, referência), carências máximas (24 h para urgência e emergência, 300 dias para parto a termo, 180 dias para os demais procedimentos), cobertura de doenças preexistentes, proibição de exclusão por idade ou doença.\n• **Ressarcimento ao SUS:** só atendimentos cobertos pelo contrato; identificação pela ANS por meio do Aviso de Beneficiário Identificado (ABI); o beneficiário não paga nada e não perde direito ao atendimento no SUS, que é universal.\n• A participação da iniciativa privada no SUS é complementar (CF art. 199), com preferência para entidades filantrópicas e sem fins lucrativos.",
    "commentary": "**Alternativa (A):** a operadora é quem paga o ressarcimento, mas não é ela que identifica os atendimentos — se dependesse dela, não haveria cobrança. E o ressarcimento depende da cobertura contratual, não da complexidade do atendimento.\n\n**Alternativa (B):** o Ministério da Saúde recebe os recursos no Fundo Nacional de Saúde, mas a identificação e a cobrança são atribuição da ANS; além disso, o ressarcimento só ocorre se o procedimento estiver coberto pelo contrato.\n\n**Alternativa (D):** o Conselho Nacional de Saúde é instância de controle social do SUS (participação da comunidade na formulação e fiscalização das políticas), sem atribuição de identificar beneficiários ou cobrar operadoras.",
    "tip": "Ressarcimento ao SUS (Lei 9.656/98, art. 32): a ANS identifica o atendimento de beneficiário de plano, confere se estava coberto pelo contrato e cobra da operadora. O paciente não paga nada.",
    "reference": "Brasil. Lei nº 9.656, de 3 de junho de 1998 (art. 32). Brasil. Lei nº 9.961, de 28 de janeiro de 2000 (cria a ANS). Agência Nacional de Saúde Suplementar. Ressarcimento ao SUS — informações e boletins.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Jovem vítima de violência física e verbal homofóbica há 4 meses, com pesadelos sobre a agressão (revivência), evitação (não sai mais de casa, nem acompanhado), alterações negativas de pensamento e humor (desconfiança das pessoas, medo intenso, ideias de \"querer desaparecer\"), hiperexcitação (ansiedade intensa, agitação) e sintomas dissociativos (despersonalização), com prejuízo importante: transtorno de estresse pós-traumático (TEPT).\n\nO tratamento de 1ª linha é a psicoterapia focada no trauma; entre os medicamentos, os ISRS (sertralina, paroxetina) e o IRSN venlafaxina são a 1ª escolha para o tratamento a longo prazo.\n\nCritérios do TEPT (DSM-5-TR) — após exposição a morte ou ameaça de morte, lesão grave ou violência sexual (vivida, testemunhada ou ao saber que ocorreu com pessoa próxima):\n\n• **Intrusão:** lembranças intrusivas, pesadelos, flashbacks, sofrimento ou reações físicas a lembretes.\n• **Evitação:** de pensamentos, lugares, pessoas ou situações ligadas ao trauma.\n• **Alterações negativas em cognição e humor:** crenças negativas sobre si e o mundo (\"não posso confiar em ninguém\"), culpa, medo persistente, distanciamento, incapacidade de sentir emoções positivas, amnésia de partes do trauma.\n• **Alterações de excitação e reatividade:** hipervigilância, sobressalto, irritabilidade, insônia, dificuldade de concentração, comportamento autodestrutivo.\n• Duração superior a 1 mês, com prejuízo. Se menos de 1 mês (de 3 dias a 1 mês): transtorno de estresse agudo.\n\n**Tratamento:**\n\n• **Psicoterapia focada no trauma (1ª linha):** terapia cognitivo-comportamental focada no trauma, terapia de processamento cognitivo, exposição prolongada, EMDR.\n• **Farmacológico:** sertralina, paroxetina, fluoxetina ou venlafaxina, por pelo menos 6–12 meses após a resposta. Prazosina pode ajudar nos pesadelos.\n• **Evitar benzodiazepínicos:** não tratam o TEPT, pioram a evolução (atrapalham o processamento do trauma), aumentam o risco de dependência e, logo após o trauma, podem favorecer o desenvolvimento do transtorno.\n• Avaliar risco de suicídio (os pensamentos de \"querer desaparecer\" pedem seguimento próximo), depressão e uso de substâncias; acolher sem discriminação e acionar a rede de proteção (violência motivada por LGBTfobia é notificável no SINAN).",
    "commentary": "**Alternativa (A):** benzodiazepínicos aliviam a ansiedade no curto prazo, mas não tratam o TEPT, pioram o prognóstico, causam dependência e não são recomendados no tratamento a longo prazo.\n\n**Alternativa (B):** antipsicóticos atípicos não são 1ª linha no TEPT; podem ser usados como potencialização em casos refratários ou com sintomas psicóticos, e trazem efeitos metabólicos importantes.\n\n**Alternativa (C):** estabilizadores de humor são usados no transtorno bipolar; não têm evidência consistente no TEPT e não são indicados para este paciente.",
    "tip": "Trauma + revivência (pesadelos, flashbacks) + evitação + humor/crenças negativas + hiperexcitação por mais de 1 mês = TEPT. Psicoterapia focada no trauma + ISRS (sertralina, paroxetina). Benzodiazepínico, não.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. VA/DoD Clinical Practice Guideline for the Management of Posttraumatic Stress Disorder and Acute Stress Disorder, 2023. National Institute for Health and Care Excellence (NICE). Post-traumatic stress disorder (NG116), 2018.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Tabagista com tórax em barril, aumento da expectoração e da dispneia, roncos e sibilos, taquipneia, SpO₂ de 87% e sonolência: exacerbação aguda da DPOC. A conduta imediata é a broncodilatação com β₂-agonista de curta ação (salbutamol), associado ou não a anticolinérgico de curta ação (ipratrópio).\n\nComo ele tem dificuldade com os dispositivos inalatórios, a nebulização é a via adequada — no paciente com DPOC e risco de retenção de CO₂, a nebulização deve ser feita com ar comprimido, com oxigênio por cateter à parte, ou por tempo limitado. A sonolência sugere hipercapnia: pedir gasometria arterial.\n\n**Roteiro da exacerbação da DPOC (GOLD 2025):**\n\n• **Definição:** piora aguda da dispneia, tosse ou expectoração em menos de 14 dias. Causas: infecção viral ou bacteriana (a maioria), poluição; excluir pneumonia, insuficiência cardíaca, TEP e pneumotórax.\n• **Broncodilatador:** β₂ de curta ação (salbutamol) ± ipratrópio, por nebulização ou inalador com espaçador.\n• **Corticoide sistêmico:** prednisona 40 mg/dia por 5 dias — reduz falha do tratamento e tempo de recuperação.\n• **Antibiótico:** se escarro purulento associado a aumento da dispneia ou do volume do escarro, ou se precisar de ventilação (amoxicilina-clavulanato, macrolídeo, quinolona respiratória conforme risco), por 5–7 dias.\n• **Oxigênio:** titulado para SpO₂ de 88–92% (por cateter ou máscara de Venturi), com gasometria — oxigênio em excesso piora a hipercapnia (perda do estímulo hipóxico, piora da relação ventilação/perfusão e efeito Haldane).\n• **Ventilação não invasiva (VNI):** acidose respiratória (pH ≤ 7,35 com PaCO₂ ≥ 45 mmHg), dispneia intensa com uso de musculatura acessória, hipoxemia persistente — reduz intubação e mortalidade. Intubação se falha da VNI, rebaixamento importante do nível de consciência, instabilidade.\n• **Após a alta:** otimizar o tratamento de manutenção (broncodilatadores de longa ação), cessação do tabagismo, vacinas, reabilitação pulmonar.",
    "commentary": "**Alternativa (A):** a N-acetilcisteína (mucolítico) pode reduzir exacerbações em uso crônico em alguns pacientes, mas não tem papel no tratamento da exacerbação aguda.\n\n**Alternativa (B):** oxigênio é necessário, mas a meta na DPOC é SpO₂ de 88–92%; buscar 95–98% aumenta o risco de hipercapnia e acidose respiratória — perigoso num paciente já sonolento.\n\n**Alternativa (D):** salmeterol com fluticasona é tratamento de MANUTENÇÃO (broncodilatador de longa ação com início lento + corticoide inalatório); não alivia o broncoespasmo agudo e não é a conduta imediata — e o paciente tem dificuldade com dispositivos.",
    "tip": "Exacerbação de DPOC: salbutamol ± ipratrópio, prednisona 40 mg por 5 dias, antibiótico se escarro purulento, O₂ para SpO₂ 88–92% e gasometria. Acidose respiratória (pH ≤ 7,35) = VNI.",
    "reference": "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management and Prevention of COPD — 2025 Report. Sociedade Brasileira de Pneumologia e Tisiologia. Diretrizes brasileiras para o manejo da DPOC, 2021.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Menina de 9 anos com crises de dor intensa, em cólica, que a deixam inquieta (não encontra posição), com hematúria macroscópica, aumento da frequência urinária, ardência e punho-percussão positiva à direita, sem febre: litíase urinária (cólica renal). Na infância, a maioria dos cálculos é de oxalato de cálcio, e a alteração metabólica mais frequente é a hipercalciúria idiopática — excreção urinária de cálcio aumentada com cálcio sérico normal, de herança familiar. Ela também causa hematúria isolada e sintomas urinários mesmo sem cálculo.\n\n**Roteiro da litíase urinária na criança:**\n\n• **Causas metabólicas (cerca de 50% das crianças com cálculo têm alguma):** hipercalciúria idiopática (a mais comum), hipocitratúria (o citrato inibe a formação de cálculos; frequente associada), hiperoxalúria, hiperuricosúria, cistinúria (rara, genética, cálculos recorrentes e radiotransparentes) e acidose tubular renal distal (cálculos e nefrocalcinose).\n• **Outras causas:** infecção urinária por germes produtores de urease (Proteus — cálculos de estruvita, coraliformes), malformações e estase urinária (junção ureteropiélica), imobilização, medicamentos (topiramato, furosemida em prematuros).\n• **Diagnóstico:** ultrassonografia de rins e vias urinárias (1º exame na criança, sem radiação); tomografia sem contraste só se a dúvida persistir. Urina tipo 1 e urocultura.\n• **Investigação metabólica:** relação cálcio/creatinina em amostra isolada e urina de 24 horas (cálcio > 4 mg/kg/dia = hipercalciúria; também citrato, oxalato, ácido úrico, cistina); análise do cálculo, se eliminado.\n• **Tratamento da crise:** analgesia (AINE, dipirona), hidratação; cálculos < 5 mm costumam ser eliminados espontaneamente; litotripsia ou ureteroscopia para cálculos maiores ou obstrutivos.\n• **Prevenção:** muita água, dieta com pouco sódio e cálcio NORMAL para a idade (restringir cálcio aumenta a absorção de oxalato e prejudica o osso); citrato de potássio se hipocitratúria; tiazídico se hipercalciúria persistente com cálculos recorrentes.",
    "commentary": "**Alternativa (A):** a cistinúria é doença genética rara (defeito do transporte de cistina e aminoácidos dibásicos), responsável por pequena parcela dos cálculos infantis — não é a causa mais frequente.\n\n**Alternativa (B):** a hipocitratúria é frequente e muitas vezes se associa à hipercalciúria, mas, como causa isolada, é menos prevalente que a hipercalciúria idiopática na faixa pediátrica.\n\n**Alternativa (C):** a acidose tubular renal distal (tipo 1) causa nefrocalcinose e cálculos por urina alcalina, hipercalciúria e hipocitratúria, mas é rara e cursa com acidose metabólica hiperclorêmica, déficit de crescimento e hipocalemia.",
    "tip": "Cólica renal com hematúria na criança: ultrassonografia. Causa metabólica mais frequente = hipercalciúria idiopática (cálcio sérico normal). Prevenção: água, pouco sal, cálcio normal na dieta.",
    "reference": "Sociedade Brasileira de Pediatria. Documento científico — Litíase urinária na infância. Sociedade Brasileira de Nefrologia/Departamento de Nefrologia Pediátrica. Hipercalciúria idiopática na infância.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Trauma de alta energia com fratura do processo transverso de C4 e hematoma cervical em expansão: lesão vascular cervical. A artéria vertebral sobe pelo pescoço dentro dos forames transversários das vértebras cervicais (em geral de C6 a C1), justamente na estrutura fraturada.\n\nFraturas que atingem o forame transversário, subluxações e lesões de C1 a C3 são as principais indicações de rastrear lesão da artéria vertebral. As outras estruturas citadas ficam fora do canal ósseo e se relacionam pouco com fraturas do processo transverso.\n\n**Lesões cerebrovasculares contusas (carótida e vertebral):**\n\n• **Mecanismo:** hiperextensão com rotação, desaceleração, trauma direto ou fratura — dissecção, trombose, pseudoaneurisma ou ruptura.\n• **Critérios de rastreamento (Denver modificados):** sinais — hemorragia arterial, sopro cervical, hematoma cervical em expansão, déficit neurológico focal não explicado pela tomografia, AVC em imagem; fatores de risco — fratura de coluna cervical (sobretudo envolvendo o forame transversário, subluxação, C1–C3), fratura de base de crânio envolvendo o canal carotídeo, fratura de Le Fort II ou III, lesão axonal difusa com Glasgow < 6, quase-enforcamento, marca do cinto no pescoço com edema.\n• **Exame:** angiotomografia cervical (rastreamento de escolha); arteriografia nos casos duvidosos ou para tratamento endovascular.\n• **Tratamento:** lesões menores — antiagregante ou anticoagulante (previne AVC); pseudoaneurismas e oclusões selecionadas — tratamento endovascular; hemorragia ativa ou hematoma expansivo — exploração cirúrgica ou embolização.\n\nZonas do pescoço (trauma penetrante): zona I (clavículas à cartilagem cricoide), zona II (cricoide ao ângulo da mandíbula — a mais acessível cirurgicamente), zona III (acima do ângulo da mandíbula). Sinais \"duros\" de lesão vascular (sangramento ativo, hematoma expansivo ou pulsátil, sopro, choque) indicam exploração imediata.",
    "commentary": "**Alternativa (A):** a veia jugular interna corre na bainha carotídea, lateral à carótida, sem relação com os processos transversos; lesão venosa costuma causar hematoma não pulsátil e de baixa pressão, menos expansivo.\n\n**Alternativa (B):** a artéria carótida comum também corre na bainha carotídea, anterior aos processos transversos; lesões contusas dela se associam mais a hiperextensão, trauma direto (cinto de segurança) e fraturas de base de crânio, não a fratura do processo transverso.\n\n**Alternativa (C):** a veia subclávia fica na base do pescoço, atrás da clavícula; lesões estão ligadas a fraturas da clavícula e da 1ª costela ou ao trauma penetrante da zona I, não a fratura de C4.",
    "tip": "Fratura de processo transverso (forame transversário) cervical = risco de lesão da artéria vertebral. Hematoma cervical expansivo = sinal duro de lesão vascular: exploração. Rastreamento: angiotomografia cervical.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulos Trauma de pescoço e de coluna). Bromberg WJ et al. Blunt cerebrovascular injury practice management guidelines: EAST. J Trauma, 2010.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
    ]
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
    "explanation": "Multípara no período expulsivo — colo totalmente dilatado, apresentação cefálica em occipitopúbica (variedade de posição mais favorável), no plano +2 de DeLee —, com cardiotocografia mostrando variabilidade reduzida e desacelerações tardias (após as contrações, com retorno lento): sinais de hipóxia fetal, padrão anormal (categoria III quando há perda de variabilidade com desacelerações tardias recorrentes).\n\nA conduta é abreviar o nascimento pela via mais rápida e segura: com cabeça baixa e bem posicionada e colo completo, o parto vaginal instrumental (vácuo-extrator ou fórceps) é mais rápido que a cesariana. Antes, medidas de reanimação intraútero: decúbito lateral esquerdo, hidratação, oxigênio se hipoxemia materna, suspender ocitocina e corrigir hipotensão (comum após a peridural).\n\n**Roteiro do parto vaginal instrumental:**\n\n• **Indicações:** suspeita de comprometimento fetal no período expulsivo, período expulsivo prolongado, exaustão materna, condições maternas em que o puxo deve ser evitado (cardiopatia, doenças neurológicas).\n• **Pré-requisitos:** dilatação completa, membranas rotas, cabeça insinuada (plano 0 ou abaixo; idealmente +2 ou mais baixo), variedade de posição conhecida, proporção cefalopélvica adequada, analgesia, bexiga vazia, operador treinado e possibilidade de cesariana se falhar.\n• **Vácuo-extrator:** menos lesão perineal materna; contraindicado abaixo de 34 semanas.\n• **Fórceps:** maior taxa de sucesso, mais lacerações perineais; fórceps de Simpson para variedades anteriores (como a occipitopúbica), Kielland para rotações.\n\n**Cardiotocografia — classificação:**\n\n• **Categoria I (normal):** linha de base 110–160 bpm, variabilidade moderada (6–25 bpm), acelerações presentes, sem desacelerações tardias ou variáveis.\n• **Categoria II (indeterminada):** achados intermediários — requer vigilância e medidas corretivas.\n• **Categoria III (anormal):** variabilidade ausente com desacelerações tardias ou variáveis recorrentes, ou bradicardia; padrão sinusoidal → resolução rápida do parto.\n• **Desacelerações precoces (espelho da contração):** compressão do polo cefálico, benignas. Tardias: insuficiência uteroplacentária. Variáveis (em V ou W): compressão do cordão.",
    "commentary": "**Alternativa (A):** a cesariana resolveria, mas com a cabeça em +2 e colo completo, o parto instrumental é mais rápido (preparo, anestesia e extração de uma cabeça já baixa levam mais tempo na cesárea) e evita os riscos de extrair um polo cefálico profundamente encaixado.\n\n**Alternativa (B):** a dinâmica uterina já é adequada (4 contrações em 10 minutos); a ocitocina aumentaria as contrações e pioraria a oxigenação do feto, que já mostra sinais de hipóxia. Na verdade, ela deve ser suspensa.\n\n**Alternativa (C):** a manobra de Kristeller (pressão no fundo do útero para empurrar o feto) não é recomendada pelo Ministério da Saúde e pela OMS: não há evidência de benefício e há risco de rotura uterina, lesões perineais graves e trauma fetal.",
    "tip": "Sofrimento fetal no período expulsivo com cabeça baixa (+2), colo completo e variedade conhecida = parto instrumental (vácuo ou fórceps). Cabeça alta ou pré-requisitos ausentes = cesariana. Kristeller, nunca.",
    "reference": "Brasil. Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017. American College of Obstetricians and Gynecologists. Practice Bulletin nº 219: Operative Vaginal Birth, 2020. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Parto vaginal operatório, 2021.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Mulher cadastrada há 12 anos na equipe de Saúde da Família, com depressão há 8 anos acompanhada só por psiquiatra particular, múltiplas perdas (dois filhos), conflito conjugal e dificuldades financeiras, que falta às consultas e não tem registro de cuidado na equipe.\n\nO atributo a priorizar é a longitudinalidade: o acompanhamento da pessoa ao longo do tempo, por uma equipe que a conhece, com vínculo e responsabilização pelas suas necessidades de saúde — independentemente de existirem outros profissionais envolvidos. A equipe deve buscar ativamente a paciente, construir vínculo, registrar e assumir o cuidado, compartilhando-o com o psiquiatra (e com o eMulti ou o CAPS, se necessário).\n\n**Atributos da atenção primária (Barbara Starfield):**\n\n• **Acesso de primeiro contato (essencial):** o serviço é a porta de entrada procurada a cada novo problema, com acessibilidade (horário, localização, acolhimento da demanda espontânea).\n• **Longitudinalidade (essencial):** relação pessoal de longa duração entre a equipe e a pessoa, ao longo da vida — vínculo, confiança, conhecimento da história.\n• **Integralidade (essencial):** a equipe reconhece e responde ao conjunto das necessidades (biológicas, psicológicas e sociais), oferecendo ou garantindo os serviços necessários.\n• **Coordenação do cuidado (essencial):** integrar o cuidado entre os vários pontos da rede, com informação e registros (referência e contrarreferência).\n• **Orientação familiar (derivado):** considerar o contexto familiar (genograma, ecomapa, ciclo de vida familiar).\n• **Orientação comunitária (derivado):** conhecer as necessidades do território e agir sobre elas.\n• **Competência cultural (derivado):** reconhecer e adaptar o cuidado às características culturais da população.",
    "commentary": "**Alternativa (A):** o acesso (primeiro contato) já existe — a paciente está cadastrada há 12 anos e tem consultas agendadas; o problema não é conseguir atendimento, mas a falta de vínculo e de continuidade do cuidado.\n\n**Alternativa (B):** a competência cultural trata de adaptar o cuidado a características culturais específicas (etnia, religião, origem); o enunciado não traz barreira cultural.\n\n**Alternativa (C):** a orientação comunitária olha para as necessidades coletivas do território; o caso é de cuidado individual e familiar ao longo do tempo.\n\nA coordenação do cuidado (integrar o acompanhamento com o psiquiatra particular) também seria pertinente, mas não está entre as alternativas e depende, antes, de a equipe assumir a longitudinalidade.",
    "tip": "Atributos de Starfield — essenciais: acesso, longitudinalidade, integralidade, coordenação; derivados: orientação familiar, comunitária e competência cultural. Vínculo ao longo do tempo = longitudinalidade.",
    "reference": "Starfield B. Atenção primária: equilíbrio entre necessidades de saúde, serviços e tecnologia. Brasília: UNESCO/Ministério da Saúde, 2002. Brasil. Ministério da Saúde. Política Nacional de Atenção Básica — Portaria nº 2.436/2017.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Taquicardia regular de QRS estreito a 160 bpm, revertida; o ECG em ritmo sinusal, após a reversão, mostra intervalo PR curto (< 120 ms) e o início do QRS empastado (onda delta), mais visível em D1 e de V4 a V6, alargando discretamente o QRS: pré-excitação ventricular.\n\nPré-excitação + taquicardia sintomática = síndrome de Wolff-Parkinson-White (WPW). Existe uma via acessória (feixe de Kent) que liga átrio e ventrículo fora do nó atrioventricular. A taquicardia regular de QRS estreito que esses pacientes apresentam é, quase sempre, a taquicardia por reentrada atrioventricular ORTODRÔMICA: o estímulo desce pelo nó AV (QRS estreito) e volta pela via acessória.\n\n**Roteiro da síndrome de WPW:**\n\n• **ECG em ritmo sinusal:** PR curto, onda delta, QRS alargado, alterações secundárias de repolarização. A pré-excitação sem sintomas é chamada \"padrão de WPW\".\n• **Taquicardia ortodrômica (cerca de 95%):** regular, QRS estreito — tratamento agudo como das taquicardias supraventriculares: manobra vagal, adenosina, e cardioversão elétrica se instável.\n• **Taquicardia antidrômica (rara):** desce pela via acessória — QRS largo, parece taquicardia ventricular.\n• **Fibrilação atrial pré-excitada (a mais perigosa):** irregular, QRS largos e de morfologia variável, frequência muito alta — pode degenerar em fibrilação ventricular. NÃO usar bloqueadores do nó AV (adenosina, verapamil, diltiazem, digoxina, betabloqueadores), que favorecem a condução pela via acessória. Usar procainamida ou ibutilida; cardioversão elétrica se instável.\n• **Tratamento definitivo:** ablação da via acessória por cateter (sucesso acima de 95%) — indicada para sintomáticos e considerada mesmo em assintomáticos com profissão de risco, como pilotos, motoristas profissionais e atletas.",
    "commentary": "**Alternativa (A):** taquicardia ventricular tem QRS largo (≥ 120 ms); o enunciado descreve QRS estreito.\n\n**Alternativa (B):** a taquicardia antidrômica ocorre na própria síndrome de WPW, mas tem QRS LARGO (o ventrículo é ativado pela via acessória); a taquicardia relatada era de QRS estreito, compatível com a forma ortodrômica.\n\n**Alternativa (D):** fibrilação atrial é taquiarritmia IRREGULAR, sem ondas P; o enunciado descreve ritmo regular.\n\nRessalva: WPW é a síndrome (o substrato), e a arritmia propriamente dita foi uma taquicardia por reentrada atrioventricular ortodrômica — que não está entre as alternativas. A identificação depende da leitura do ECG original após a reversão.",
    "tip": "ECG após reverter taquicardia de QRS estreito com PR curto e onda delta = WPW (taquicardia ortodrômica). FA pré-excitada (irregular, QRS largo): nada de bloqueador do nó AV — procainamida ou cardioversão. Cura: ablação.",
    "reference": "Brugada J et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J, 2020. Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Arritmias Cardíacas.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
    ],
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
    "explanation": "Adolescente de 14 anos com isolamento social, queda do rendimento escolar, irritabilidade e desesperança — quadro sugestivo de depressão na adolescência (que muitas vezes se manifesta com irritabilidade, não tristeza) —, com relato de ideação suicida prévia, sem ideação atual, em contexto de vulnerabilidade (pai preso, mãe desempregada) e com bom vínculo com a mãe (fator de proteção).\n\nSem plano, tentativa ou ideação atual, o risco não é alto: a equipe da UBS pode e deve manter o acompanhamento, com avaliação de risco estruturada, plano de segurança e seguimento próximo. Envolver a mãe é parte essencial da proteção, e a forma correta é pactuar com o adolescente essa comunicação — preservando o vínculo e explicando que, diante de risco à vida, o sigilo pode ser quebrado.\n\n**Roteiro do manejo do risco de suicídio na APS:**\n\n• Perguntar diretamente sobre ideação suicida não aumenta o risco — reduz.\n• **Avaliar:** ideação atual, plano, acesso a meios, tentativas prévias, intenção, impulsividade, uso de álcool e drogas, transtorno mental, perdas, violência, bullying, fatores de proteção (família, escola, vínculos, religiosidade).\n• **Risco baixo (ideação sem plano):** seguimento na APS, tratamento do transtorno de base, plano de segurança, envolver a família, reavaliações frequentes.\n• **Risco moderado (ideação com plano, sem intenção imediata):** compartilhar com saúde mental (CAPSi para crianças e adolescentes, eMulti), restringir acesso a meios, contato frequente.\n• Risco alto (plano com intenção, tentativa recente, acesso a meios letais): não deixar sozinho, encaminhar à urgência ou ao CAPS III/CAPSi, avaliar internação.\n• **Plano de segurança:** sinais de alerta pessoais, estratégias de enfrentamento, pessoas e lugares de apoio, contatos de profissionais e do CVV (188), redução do acesso a meios (medicamentos, armas, venenos).\n• **Sigilo do adolescente:** garantido pelo Código de Ética Médica (art. 74), exceto quando a não revelação possa causar dano ao paciente — risco de suicídio é exceção, e a comunicação aos responsáveis deve ser, sempre que possível, negociada com ele.\n• **Notificação compulsória:** tentativa de suicídio e automutilação (violência autoprovocada) são de notificação imediata; ideação suicida isolada não é notificável.",
    "commentary": "**Alternativa (A):** construir uma rede de proteção é adequado, mas a avaliação neuropsicológica (testes de funções cognitivas) não tem indicação nem prioridade no manejo do risco de suicídio e da depressão do adolescente.\n\n**Alternativa (B):** encaminhar ao CAPS cabe em risco moderado a alto ou transtorno grave; com ideação apenas prévia e risco baixo, o cuidado pode ser feito na APS. E ideação suicida sem tentativa não é notificável como violência autoprovocada — a notificação vale para tentativas e automutilação.\n\n**Alternativa (D):** internação breve é para risco alto (plano estruturado, intenção, tentativa grave, ausência de rede de apoio); afastaria o adolescente da família e da escola sem necessidade.",
    "tip": "Ideação suicida: pergunte, estratifique o risco, faça plano de segurança e restrinja meios. Risco baixo = APS com família envolvida (pactuar a comunicação com o adolescente). Tentativa ou automutilação = notificação imediata.",
    "reference": "Brasil. Ministério da Saúde. Prevenção do suicídio: manual dirigido a profissionais das equipes de saúde mental, 2006. Brasil. Lei nº 13.819/2019 (Política Nacional de Prevenção da Automutilação e do Suicídio). Conselho Federal de Medicina. Código de Ética Médica, art. 74.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
    ]
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
    "explanation": "Politraumatizado com PA 80 × 50 mmHg, FC 130 bpm, FR 25 irpm, confusão, pulsos filiformes e enchimento capilar de 4 s, que não melhora após as medidas iniciais: choque hemorrágico classe III a IV do ATLS, sem resposta à reposição inicial. A hipotensão marca a perda de mais de 30% da volemia (a PA só cai quando os mecanismos de compensação se esgotam) e é o achado que indica transfusão de hemoderivados, idealmente pelo protocolo de transfusão maciça.\n\nO FAST positivo no espaço de Morrison mostra a fonte (hemoperitônio, provavelmente por lesão de baço ou fígado) e, no paciente instável, indica laparotomia imediata.\n\n**Classes de choque hemorrágico (ATLS 10ª ed.):**\n\n• **Classe I (< 15% da volemia):** FC, PA e diurese normais. Mínima reposição.\n• **Classe II (15–30%):** FC normal ou aumentada, PA normal, pressão de pulso diminuída, ansiedade leve, déficit de base −2 a −6. Cristaloide; possível transfusão.\n• **Classe III (31–40%):** FC aumentada, PA normal a diminuída, confusão, oligúria, déficit de base −6 a −10. Transfusão de hemoderivados.\n• **Classe IV (> 40%):** FC muito aumentada, hipotensão, letargia, anúria, déficit de base < −10. Transfusão maciça.\n\n**Reanimação hemostática (ATLS e diretrizes de trauma):**\n\n• Cristaloide limitado (até 1 L no adulto); priorizar hemoderivados precocemente.\n• **Transfusão balanceada:** concentrado de hemácias, plasma e plaquetas na proporção 1:1:1.\n• **Ácido tranexâmico em até 3 horas do trauma:** 1 g em 10 minutos e 1 g em 8 horas.\n• Hipotensão permissiva (PA sistólica 80–90 mmHg, ou PAM 50–65) até o controle do sangramento — exceto em TCE.\n• **Evitar a tríade letal:** hipotermia, acidose e coagulopatia.\n• **Controle definitivo do sangramento:** laparotomia (FAST positivo com instabilidade), angioembolização, fixação pélvica.\n• **Resposta à reposição:** respondedor rápido, respondedor transitório (volta a piorar — sangramento ativo) e não respondedor (como neste caso — cirurgia imediata).",
    "commentary": "**Alternativa (A):** o hematoma no hipocôndrio esquerdo sugere lesão esplênica e orienta a investigação, mas sozinho não define a necessidade de transfusão — muitos hematomas não causam instabilidade.\n\n**Alternativa (B):** o FAST positivo mostra líquido livre (provável sangue) na cavidade e define a CONDUTA cirúrgica no paciente instável (laparotomia), mas não é o critério de transfusão — um paciente estável com FAST positivo pode não precisar de sangue.\n\n**Alternativa (C):** a confusão mental acompanha o choque classe III e IV, mas é inespecífica (pode ser TCE, intoxicação, hipóxia); a hipotensão é o marcador hemodinâmico que traduz a perda volêmica significativa.",
    "tip": "Trauma: hipotensão = perda > 30% da volemia (classe III/IV) = transfundir (1:1:1) + ácido tranexâmico em até 3 h. FAST positivo + instável = laparotomia. Cristaloide no máximo 1 L.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support. 10ª ed., 2018 (capítulo Choque). Rossaint R et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care, 2023.",
    "tags": [
      "cirurgia",
      "gabarito oficial"
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
    "explanation": "Mulher de 30 anos com amenorreia secundária há 9 meses após suspender o anticoncepcional, com acne, hirsutismo e sobrepeso; β-hCG negativo, TSH, prolactina e FSH normais. A gravidez, o hipotireoidismo e a hiperprolactinemia estão excluídos; FSH normal afasta insuficiência ovariana.\n\nA amenorreia com hiperandrogenismo clínico aponta para anovulação crônica hiperandrogênica, cuja principal causa é a síndrome dos ovários policísticos (SOP). O anticoncepcional provavelmente mascarou, por anos, os ciclos irregulares e o hiperandrogenismo. A \"amenorreia pós-pílula\" não justifica falta de menstruação por mais de 3–6 meses — sempre investigar.\n\n**Investigação da amenorreia secundária:**\n\n• **1º passo:** β-hCG (gravidez é a causa mais comum).\n• **Depois:** TSH, prolactina e FSH (± estradiol); avaliar sinais de hiperandrogenismo.\n• FSH elevado (> 25 mUI/mL em 2 dosagens) antes dos 40 anos = insuficiência ovariana prematura.\n• FSH baixo ou normal com estradiol baixo = causa hipotalâmica ou hipofisária (estresse, exercício excessivo, perda de peso, anorexia, tumores) — ressonância de sela se não houver causa evidente.\n• **Teste da progesterona:** sangramento após progestagênio indica estrogênio adequado e trato de saída pérvio (típico da SOP); sem sangramento, testar estrogênio + progestagênio (sem sangramento = causa uterina, como síndrome de Asherman).\n\n**Síndrome dos ovários policísticos (critérios de Rotterdam — 2 de 3, após excluir outras causas):**\n\n• Oligo ou anovulação (ciclos > 35 dias ou amenorreia).\n• Hiperandrogenismo clínico (hirsutismo, acne, alopecia) ou laboratorial (testosterona elevada).\n• Ovários policísticos na ultrassonografia (≥ 20 folículos por ovário ou volume ≥ 10 mL) — ou hormônio antimülleriano elevado no adulto.\n• **Excluir:** hiperplasia adrenal congênita não clássica (17-OH-progesterona), hipotireoidismo, hiperprolactinemia, Cushing, tumores produtores de androgênios (virilização rápida, testosterona muito alta).\n• **Riscos associados:** resistência à insulina, diabetes tipo 2, dislipidemia, esteatose, apneia do sono, depressão, hiperplasia e câncer de endométrio (pela anovulação crônica).\n• **Tratamento:** mudança de estilo de vida (perda de 5–10% do peso já restaura ciclos); anticoncepcional combinado (regula ciclos, protege o endométrio e trata hirsutismo e acne); progestagênio cíclico se não quiser anticoncepção hormonal; metformina para alterações metabólicas; espironolactona para hirsutismo; letrozol para induzir a ovulação em quem deseja engravidar.",
    "commentary": "**Alternativa (A):** a insuficiência ovariana prematura cursa com FSH ELEVADO (em geral > 25 mUI/mL, em 2 dosagens) e sintomas de hipoestrogenismo (fogachos, secura vaginal); o FSH de 6 é normal e há sinais de excesso de androgênio, não de falta de estrogênio.\n\n**Alternativa (B):** o hipogonadismo hipogonadotrófico (causa hipotalâmica ou hipofisária) tem FSH e LH baixos e estradiol baixo, em geral sem hiperandrogenismo, com história de estresse, exercício intenso ou perda de peso — e a paciente tem IMC 27 com hirsutismo.\n\n**Alternativa (C):** o anticoncepcional não causa amenorreia prolongada após a suspensão; a fertilidade e os ciclos costumam voltar em até 3 meses. Amenorreia por mais de 6 meses depois da pílula exige investigar outra causa — que o anticoncepcional muitas vezes estava mascarando.",
    "tip": "Amenorreia secundária: β-hCG → TSH, prolactina e FSH. FSH alto = insuficiência ovariana; FSH baixo = hipotálamo/hipófise; FSH normal + hiperandrogenismo = SOP (Rotterdam: 2 de 3). Amenorreia pós-pílula > 6 meses não existe.",
    "reference": "Teede HJ et al. Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. J Clin Endocrinol Metab, 2023. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Protocolo — Amenorreia, 2021.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito oficial"
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
    "explanation": "Criança em abrigo com prurido intenso que piora à noite (e após o banho quente), pápulas eritematosas nos espaços interdigitais e no abdome inferior, e outras crianças da instituição também com prurido: escabiose (sarna), infestação pelo ácaro Sarcoptes scabiei, transmitida por contato pele a pele prolongado — instituições, creches e domicílios cheios favorecem surtos.\n\nO tratamento tópico de 1ª linha é a permetrina 5% loção ou creme, aplicada em todo o corpo e repetida após 7 dias, tratando ao mesmo tempo todos os contatos próximos, mesmo sem sintomas.\n\n**Roteiro da escabiose:**\n\n• **Clínica:** prurido intenso, pior à noite; pápulas, vesículas e sulcos (lesão patognomônica — linha fina e sinuosa) nos espaços interdigitais, punhos, axilas, cintura, umbigo, nádegas, genitais (nódulos no pênis e escroto) e aréolas. Em lactentes, também palmas, plantas, couro cabeludo e face. Poupa a face e o couro cabeludo em crianças maiores e adultos.\n• **Diagnóstico:** clínico e epidemiológico (contatos com prurido); raspado de lesão com visualização do ácaro, ovos ou fezes, ou dermatoscopia (sinal da asa-delta).\n• **Tratamento:** permetrina 5% — aplicar do pescoço para baixo (em lactentes, também couro cabeludo e face), deixar por 8–12 horas (à noite) e remover no banho; repetir em 7 dias. Pode ser usada a partir de 2 meses de idade.\n• **Alternativas:** ivermectina oral 200 µg/kg em 2 doses com intervalo de 7 dias (acima de 15 kg, não em gestantes e lactantes) — útil em surtos institucionais e na escabiose crostosa; enxofre precipitado 5–10% em vaselina (lactentes pequenos e gestantes); benzoato de benzila (diluído em crianças).\n• **Medidas gerais:** tratar todos os contatos ao mesmo tempo; lavar roupas de cama, toalhas e roupas a quente (≥ 60 °C) ou guardá-las em saco plástico fechado por 72 horas; afastar da escola ou creche até o dia seguinte ao início do tratamento.\n• O prurido pode persistir por 2–4 semanas após o tratamento (reação de hipersensibilidade) — tratar com anti-histamínico, sem repetir o escabicida sem necessidade.\n• **Escabiose crostosa (norueguesa):** imunossuprimidos, idosos institucionalizados — crostas espessas, pouco prurido, altamente contagiosa; ivermectina oral + escabicida tópico.\n• **Complicação frequente:** impetigo por coçadura (infecção bacteriana secundária).",
    "commentary": "**Alternativa (B):** o cetoconazol é antifúngico, indicado para micoses superficiais (tinhas, pitiríase versicolor, candidíase, dermatite seborreica); não tem ação sobre o ácaro.\n\n**Alternativa (C):** a hidrocortisona tópica pode aliviar a inflamação de dermatites, mas não mata o ácaro, mascara o quadro e, em uso isolado, pode piorar a infestação (escabiose incógnita).\n\n**Alternativa (D):** o permanganato de potássio é antisséptico e secativo, usado em banhos para lesões exsudativas e vesiculares (eczemas agudos, varicela); não é escabicida.",
    "tip": "Prurido noturno + pápulas interdigitais, punhos e cintura + vários contatos coçando = escabiose. Permetrina 5% do pescoço para baixo, repetir em 7 dias, tratar TODOS os contatos ao mesmo tempo. Ivermectina oral em surtos.",
    "reference": "Sociedade Brasileira de Dermatologia. Escabiose — orientações. Engelman D et al. The 2020 International Alliance for the Control of Scabies Consensus Criteria for the Diagnosis of Scabies. Br J Dermatol, 2020. Brasil. Ministério da Saúde. Guia de Vigilância em Saúde. 6ª ed., 2024.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "explanation": "Homem desnutrido, em situação de rua (provável uso crônico de álcool), com confusão mental, ataxia de marcha e alterações oculomotoras (nistagmo e diplopia, por paralisia do nervo abducente ou do olhar conjugado): tríade da encefalopatia de Wernicke, causada pela deficiência de tiamina (vitamina B1).\n\nA crise convulsiva pode ter sido de abstinência alcoólica, mas o quadro neurológico atual — sobretudo a tríade — define a principal hipótese, que é uma emergência: tratar com tiamina intravenosa em dose alta imediatamente, sem esperar exames, e antes de qualquer soro glicosado (a glicose consome tiamina e pode precipitar ou piorar a encefalopatia).\n\n**Roteiro da encefalopatia de Wernicke:**\n\n• **Causas da deficiência de tiamina:** alcoolismo (a principal), desnutrição, hiperêmese gravídica, cirurgia bariátrica, vômitos prolongados, nutrição parenteral sem vitaminas, síndrome de realimentação.\n• **Clínica:** confusão mental, ataxia de marcha e oftalmoparesia/nistagmo — a tríade completa aparece em apenas 10–20% dos casos, por isso basta suspeitar para tratar.\n• **Diagnóstico:** clínico. Ressonância pode mostrar alterações nos corpos mamilares, tálamo medial e região periaquedutal, mas não deve atrasar o tratamento.\n• **Tratamento:** tiamina IV em dose alta (por exemplo, 200–500 mg de 8/8 h por 3–5 dias, depois dose oral de manutenção), ANTES da glicose; corrigir magnésio (cofator da tiamina).\n• **Sem tratamento, evolui para a síndrome de Korsakoff:** amnésia anterógrada grave, confabulação — em grande parte irreversível.\n• **Profilaxia:** tiamina para todo paciente alcoolista ou desnutrido admitido no pronto atendimento.\n\n**Síndrome de abstinência alcoólica (para comparação):**\n\n• Tremores, ansiedade, sudorese, taquicardia, insônia em 6–24 h da última dose; alucinose alcoólica em 12–48 h; convulsões em 6–48 h; delirium tremens em 48–96 h (confusão, agitação, alucinações, hiperatividade autonômica — mortalidade alta sem tratamento).\n• **Tratamento:** benzodiazepínicos (diazepam; lorazepam se hepatopatia grave), guiado pela escala CIWA-Ar; tiamina para todos; hidratação e correção eletrolítica.",
    "commentary": "**Alternativa (A):** a convulsão pode ter sido de abstinência alcoólica, mas a abstinência não explica a ataxia, a diplopia e o nistagmo; a tríade neurológica aponta para a deficiência de tiamina — que muitas vezes coexiste com a abstinência no mesmo paciente.\n\n**Alternativa (B):** AVC de cerebelo causa ataxia e nistagmo, mas em geral de início súbito, com vertigem, vômitos, dismetria e sinais unilaterais; não explica a confusão num paciente desnutrido, e a convulsão generalizada não é típica. A tomografia ajuda a afastar, se houver dúvida.\n\n**Alternativa (C):** uma crise epiléptica isolada explicaria confusão pós-ictal transitória, mas não a ataxia e as alterações oculomotoras, que persistem horas depois.",
    "tip": "Alcoolista ou desnutrido com confusão + ataxia + nistagmo/oftalmoplegia = Wernicke: tiamina IV em dose alta ANTES da glicose. Não espere a tríade completa. Sem tratamento → Korsakoff.",
    "reference": "Galvin R et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol, 2010. Sechi G, Serra A. Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol, 2007.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
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
    "explanation": "Criança de 5 anos, contato domiciliar de caso de tuberculose pulmonar (a mãe), assintomática, com radiografia de tórax normal e IGRA reagente. Afastada a doença ativa (sem sintomas e com radiografia normal), o IGRA reagente define infecção latente pelo Mycobacterium tuberculosis (ILTB).\n\nCrianças menores de 10 anos têm risco elevado de adoecer — e de ter formas graves (meningite, miliar) —, por isso o tratamento da ILTB está indicado já. Além disso, todos os outros contatos devem ser avaliados (busca ativa).\n\n**Investigação de contatos (Ministério da Saúde):**\n\n• **Contato sintomático:** investigar tuberculose ativa (radiografia, baciloscopia ou teste rápido molecular, cultura).\n• **Criança contato assintomática:** radiografia de tórax + prova tuberculínica (PT) ou IGRA. Radiografia normal com PT ≥ 5 mm (independentemente da vacina BCG) ou IGRA reagente = tratar ILTB.\n• **PT < 5 mm ou IGRA não reagente:** repetir em 8 semanas (para pegar a conversão); se converter, tratar ILTB.\n• **Recém-nascido de mãe bacilífera:** não vacinar com BCG ao nascer; isoniazida ou rifampicina por 3 meses e depois PT — se não reagente, suspender e vacinar; se reagente, completar o tratamento.\n\n**Esquemas para ILTB:**\n\n• Rifampicina por 4 meses (4R).\n• Isoniazida + rifapentina semanal, 12 doses (3HP) — a partir de 2 anos.\n• Isoniazida por 6 ou 9 meses (6H ou 9H).\n• Os esquemas curtos com rifamicinas têm melhor adesão e menos hepatotoxicidade.\n• A ILTB é de notificação (ficha específica no sistema de informação de tratamentos preventivos).\n\nTuberculose ativa: esquema básico RIPE (rifampicina, isoniazida, pirazinamida, etambutol) por 2 meses, seguido de RI por 4 meses (6 meses no total); em menores de 10 anos, RIP sem etambutol na fase de ataque.",
    "commentary": "**Alternativa (A):** repetir o IGRA em 8 semanas só se aplica quando o primeiro teste é NÃO reagente (para detectar a conversão); com IGRA já reagente e radiografia normal, a infecção latente está diagnosticada e o tratamento deve começar.\n\n**Alternativa (C):** a prova tuberculínica e o IGRA são testes alternativos para o mesmo fim; com o IGRA já reagente, não há por que fazer a PT antes de tratar.\n\n**Alternativa (D):** tratamento para tuberculose ativa exige doença ativa (sintomas, radiografia alterada ou bacteriologia positiva); tratar infecção latente com esquema de doença ativa expõe a criança a mais medicamentos e efeitos adversos sem necessidade.",
    "tip": "Contato de TB: sintomático → investigar doença ativa. Assintomático com radiografia normal + PT ≥ 5 mm ou IGRA reagente → tratar ILTB (4R, 3HP ou isoniazida). Teste negativo → repetir em 8 semanas.",
    "reference": "Brasil. Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil. 2ª ed. atualizada, 2019. Brasil. Ministério da Saúde. Protocolo de vigilância da infecção latente pelo Mycobacterium tuberculosis no Brasil. 2ª ed., 2022.",
    "tags": [
      "pediatria",
      "gabarito oficial"
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
    "correctAnswer": 1,
    "disputed": [
      2
    ],
    "explanation": "**Gabarito oficial: B** (evento adverso). O paciente foi anestesiado, posicionado, preparado e coberto com campos para operar o lado errado; a falha só foi detectada na checagem antes da incisão. A banca considerou que o erro chegou ao paciente — ele passou por posicionamento e preparo indevidos, com prolongamento da anestesia e reposicionamento — e classificou o caso como evento adverso.\n\nPela Classificação Internacional de Segurança do Paciente da OMS, porém, evento adverso é o incidente que resulta em dano; como não houve dano, a classificação mais precisa seria incidente sem dano ou quase erro (near miss). Entre as opções, a circunstância notificável (C) é discutível, mas a resposta oficial é B.\n\n**Classificação Internacional de Segurança do Paciente (OMS):**\n\n• **Incidente:** evento ou circunstância que poderia ter resultado, ou resultou, em dano desnecessário ao paciente.\n• **Circunstância notificável:** situação com potencial significativo de causar dano, sem que nenhum incidente tenha ocorrido (exemplo: desfibrilador quebrado na sala de emergência).\n• **Quase erro (near miss):** incidente que não atingiu o paciente (exemplo: medicação errada detectada antes de ser administrada).\n• **Incidente sem dano:** atingiu o paciente, mas não causou dano (exemplo: medicação errada administrada, sem consequência).\n• **Evento adverso (incidente com dano):** resultou em dano ao paciente (leve, moderado, grave ou óbito).\n• **Erro:** falha em executar uma ação planejada como pretendido, ou aplicação de um plano incorreto — é a causa, não a classificação do desfecho.\n\nPrograma Nacional de Segurança do Paciente (Portaria MS nº 529/2013 e RDC Anvisa nº 36/2013) — seis protocolos básicos: identificação do paciente, cirurgia segura, higiene das mãos, prevenção de quedas, prevenção de lesão por pressão, segurança na prescrição, uso e administração de medicamentos.\n\nO checklist de Cirurgia Segura da OMS tem três momentos: antes da indução anestésica (sign in), antes da incisão (time out — confirmação de paciente, procedimento e lateralidade por toda a equipe) e antes de o paciente sair da sala (sign out).",
    "commentary": "**Alternativa (A):** dano leve pressupõe dano (sintomas leves, intervenção mínima); o paciente evoluiu sem nenhuma consequência do erro de posicionamento.\n\n**Alternativa (C):** discutível (em amarelo), mas não conta como acerto. É a única opção que não pressupõe dano e descreve situação com potencial significativo de causar dano, que deve ser notificada para que o serviço aprenda com ela.\n\n**Alternativa (D):** \"erro médico\" não é categoria de classificação de incidentes na taxonomia da OMS; o erro é a falha na execução de um processo, e a abordagem de segurança do paciente foca no sistema, não na culpa individual.",
    "tip": "OMS: circunstância notificável (potencial de dano, sem incidente) → quase erro (não atingiu o paciente) → incidente sem dano (atingiu, sem dano) → evento adverso (com dano). Time out antes da incisão confirma lado e procedimento.",
    "reference": "World Health Organization. Conceptual Framework for the International Classification for Patient Safety, 2009. Brasil. Ministério da Saúde. Portaria nº 529/2013 (Programa Nacional de Segurança do Paciente). Agência Nacional de Vigilância Sanitária. RDC nº 36/2013.",
    "tags": [
      "cirurgia",
      "gabarito oficial",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: B. A alternativa C (em amarelo) é discutível, mas não conta como acerto: pela taxonomia da OMS, evento adverso exige dano ao paciente, que não ocorreu; a classificação mais precisa (quase erro ou incidente sem dano) não está entre as opções."
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
    "explanation": "Adolescente de 15 anos vítima de violência sexual há 3 horas. A notificação compulsória da violência sexual é imediata (em até 24 horas) e é dever do serviço de saúde: deve ser feita pelo profissional de saúde que prestou o primeiro atendimento, no ato do atendimento ou logo após.\n\nEla não depende de boletim de ocorrência, de autorização dos pais ou responsáveis nem de confirmação da violência — basta a suspeita. Por se tratar de adolescente, o caso também deve ser comunicado ao Conselho Tutelar (ECA, art. 13).\n\n**Atendimento à violência sexual — pontos centrais:**\n\n• Acolhimento humanizado, ambiente reservado, escuta sem julgamento e sem revitimização (Lei 13.431/2017 — escuta especializada de crianças e adolescentes).\n• Atendimento obrigatório, imediato e integral em todo hospital do SUS (Lei 12.845/2013), sem exigência de boletim de ocorrência.\n• **Profilaxias:** contracepção de emergência (até 5 dias, melhor nas primeiras 72 h); PEP para HIV em até 72 h (idealmente em 2 h); profilaxia das IST bacterianas (sífilis, gonorreia, clamídia; tricomoníase); vacina e, se indicado, imunoglobulina para hepatite B.\n• **Exames:** testes rápidos de HIV, sífilis e hepatites B e C, β-hCG; seguimento com repetição.\n• Coleta de vestígios (sêmen, sangue, secreções) pode ser feita no próprio serviço de saúde e encaminhada à perícia, se a vítima quiser.\n• Notificação compulsória (SINAN — ficha de violência interpessoal/autoprovocada): imediata para violência sexual; profissional que atendeu. Em criança e adolescente: comunicar o Conselho Tutelar. A Lei 13.931/2019 acrescentou a comunicação à autoridade policial em 24 horas nos casos de violência contra a mulher, para fins estatísticos.\n• Interrupção legal da gestação, se ocorrer gravidez decorrente de estupro, garantida sem necessidade de boletim de ocorrência.",
    "commentary": "**Alternativa (A):** a notificação não depende de boletim de ocorrência; condicioná-la ao registro policial atrasaria o cumprimento de um dever do serviço de saúde e excluiria vítimas que não querem ou não podem procurar a polícia.\n\n**Alternativa (C):** a notificação não exige autorização dos responsáveis legais (que podem, inclusive, estar envolvidos na violência) e é feita pelo profissional que atendeu, não necessariamente pelo gerente.\n\n**Alternativa (D):** o perito do IML realiza o exame de corpo de delito para fins criminais; a notificação compulsória é atribuição do serviço de saúde e não depende de confirmação da violência — a suspeita já obriga a notificar.",
    "tip": "Violência sexual: notificação compulsória imediata pelo profissional que atendeu — sem boletim de ocorrência, sem autorização dos responsáveis, sem confirmação. Criança ou adolescente: comunicar também o Conselho Tutelar.",
    "reference": "Brasil. Ministério da Saúde. Norma Técnica — Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes. 3ª ed., 2012. Brasil. Ministério da Saúde. Viva: Instrutivo de notificação de violência interpessoal e autoprovocada. 2ª ed., 2016. Brasil. Lei nº 8.069/1990 (ECA), art. 13.",
    "tags": [
      "saúde coletiva",
      "gabarito oficial"
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
    "explanation": "Mulher de 52 anos, tabagista pesada (47 maços-ano), motivada a parar, com falhas em tentativas anteriores. O tratamento do tabagismo no SUS combina abordagem cognitivo-comportamental (individual ou em grupo) com medicamentos. O arsenal farmacológico disponível no SUS (Programa Nacional de Controle do Tabagismo) é a terapia de reposição de nicotina — adesivo, goma e pastilha — e a bupropiona.\n\nEntre as alternativas, a bupropiona é a única de 1ª linha disponível no SUS. A vareniclina é eficaz, mas não faz parte do protocolo do SUS.\n\n**Roteiro da cessação do tabagismo:**\n\n• **Avaliação:** carga tabágica (maços por dia × anos de tabagismo), grau de dependência (teste de Fagerström: ≥ 5 pontos = dependência elevada), estágio de motivação (pré-contemplação, contemplação, preparação, ação, manutenção) e tentativas prévias.\n• Abordagem breve para todos os fumantes em toda consulta (perguntar, avaliar, aconselhar, preparar, acompanhar).\n• **Abordagem intensiva:** sessões estruturadas (em geral 4 sessões semanais iniciais e manutenção), com escolha da data para parar.\n• **Indicações de medicamento:** fumar 20 ou mais cigarros por dia, fumar o 1º cigarro até 30 minutos após acordar e pelo menos 10 por dia, Fagerström ≥ 5, tentativas anteriores com sintomas de abstinência intensos.\n• **Bupropiona:** 150 mg pela manhã por 3 dias, depois 150 mg 2 vezes ao dia, começando 1–2 semanas antes da data de parada, por 12 semanas. Contraindicações: epilepsia ou convulsão prévia, bulimia ou anorexia, uso de IMAO, abstinência de álcool ou benzodiazepínicos; cuidado com hipertensão. Efeitos: insônia, boca seca, redução do limiar convulsivo.\n• **Terapia de reposição de nicotina:** adesivo (dose conforme o número de cigarros, com redução gradual) associado a goma ou pastilha para as fissuras — a combinação é mais eficaz. Pode ser associada à bupropiona.\n• **Vareniclina:** agonista parcial do receptor nicotínico, o medicamento isolado mais eficaz, mas fora do protocolo do SUS.\n• **Rastreio de câncer de pulmão:** tomografia de baixa dose anual, de 50 a 80 anos, com carga ≥ 20 maços-ano, fumante ou que parou há menos de 15 anos (USPSTF) — esta paciente se enquadra.",
    "commentary": "**Alternativa (A):** a buspirona é ansiolítico (agonista parcial da serotonina) usado no transtorno de ansiedade generalizada; não tem eficácia comprovada na cessação do tabagismo e não faz parte do protocolo.\n\n**Alternativa (B):** a vareniclina é eficaz (na verdade, a monoterapia mais eficaz), mas não está disponível no SUS; a pergunta pede a opção do arsenal terapêutico do SUS.\n\n**Alternativa (D):** o clonazepam (benzodiazepínico) não ajuda a parar de fumar, causa dependência e, além disso, sua retirada abrupta é contraindicação relativa ao uso da bupropiona, por reduzir o limiar convulsivo.",
    "tip": "Tabagismo no SUS: abordagem cognitivo-comportamental + terapia de reposição de nicotina (adesivo, goma, pastilha) e/ou bupropiona. Bupropiona: começar 1–2 semanas antes de parar; contraindicada em epilepsia e transtornos alimentares.",
    "reference": "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo, 2020. Instituto Nacional de Câncer (INCA). Programa Nacional de Controle do Tabagismo — tratamento do fumante. US Preventive Services Task Force. Lung Cancer Screening, 2021.",
    "tags": [
      "clínica médica",
      "gabarito oficial"
    ]
  }
];
