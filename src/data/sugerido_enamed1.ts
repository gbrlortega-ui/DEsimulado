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
    "explanation": "Paciente estável (PA preservada, SatO₂ 98%, sem choque, isquemia, congestão ou rebaixamento de consciência) com taquicardia de QRS estreito, R-R irregular e sem ondas P sinusais: fibrilação atrial com resposta ventricular rápida (diferencial com flutter de condução variável). Na estabilidade, não há indicação de cardioversão de emergência, e a decisão central passa a ser o risco tromboembólico. O CHA₂DS₂-VASc é 2 (hipertensão + idade de 65–74 anos), o que indica anticoagulação plena, independentemente da escolha posterior entre controle da frequência ou do ritmo. Além disso, o início dos sintomas há 2 horas não garante o início da arritmia.",
    "commentary": "A: não há bradicardia nem bloqueio AV que justifique marca-passo. B: a cardioversão é opção de controle do ritmo, mas não é obrigatória no paciente estável e exige avaliar duração da arritmia e anticoagulação antes. C: o ecocardiograma transesofágico pode excluir trombo antes de uma cardioversão, mas não é o passo inicial obrigatório.",
    "tip": "Taquiarritmia: estabilidade → ritmo → anticoagulação. Não se cardioverte só pela frequência, e não se deixa de anticoagular paciente de risco só porque a arritmia é recente.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (alta controvérsia). Resposta adotada: D (anticoagulação pelo CHA₂DS₂-VASc de 2 pontos). O gabarito original indicava B, mas a cardioversão elétrica não é obrigatória em paciente estável.",
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
    "explanation": "Prematuridade de 28 semanas implica imaturidade de pneumócitos tipo II e deficiência de surfactante, favorecendo atelectasia difusa, baixa complacência e necessidade progressiva de oxigênio. O infiltrado reticulogranular em vidro fosco é compatível com síndrome do desconforto respiratório neonatal. Como já foi intubado e necessita FiO₂ 0,50, deve receber surfactante pelo tubo endotraqueal precocemente; a literatura atual recomenda surfactante logo após intubação de prematuro abaixo de 32 semanas quando há SDR.",
    "commentary": "B e D adiam indevidamente o tratamento; C menciona via inalatória, que não representa a administração recomendada nesse neonato intubado. A está correta quanto ao surfactante endotraqueal; porém 'mantê-lo em ventilação mecânica' só se justifica enquanto houver necessidade, com tentativa de extubação precoce quando seguro.\n\nAtenção: Diretrizes europeias 2025: minimizar tempo de ventilação invasiva e usar suporte não invasivo quando possível.",
    "tip": "Prematuro + vidro fosco difuso + FiO₂ elevada = pense em falta de surfactante. Se já está intubado, trate pelo tubo e reavalie a extubação o quanto antes.",
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
    "explanation": "O estômago secreta HCl. A aspiração persistente de 700–1.000 mL/dia pela sonda remove H+ e Cl−, aumentando bicarbonato plasmático: alcalose metabólica hipoclorêmica. Hipovolemia e ativação do sistema renina-angiotensina-aldosterona aumentam reabsorção de sódio e excreção renal de potássio e hidrogênio, mantendo alcalose e produzindo hipocalemia. Hipotensão, taquicardia e mucosas secas reforçam a perda volêmica.",
    "commentary": "A e B descrevem distúrbios respiratórios sem mecanismo compatível; D é associada a perda de bicarbonato por diarreia ou administração de cloreto, não à perda de ácido gástrico. Na prática, corrigir volemia, cloreto e potássio e reavaliar a necessidade da sonda.",
    "tip": "Perdeu conteúdo gástrico por vômitos ou sonda? Perdeu HCl: pense em alcalose metabólica hipoclorêmica com hipocalemia.",
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
    "explanation": "Amenorreia por 14 meses em mulher de 51 anos estabelece menopausa clínica. Os fogachos frequentes e o prejuízo de sono justificam discutir terapia hormonal se não houver contraindicação. A via transdérmica do 17β-estradiol evita a primeira passagem hepática e costuma ser vantajosa frente à via oral em pacientes com fatores cardiometabólicos, como obesidade, hipertensão e diabetes. Como a paciente não foi histerectomizada, a progesterona é necessária para reduzir risco de hiperplasia/câncer endometrial.",
    "commentary": "A é contraceptivo combinado, não o regime menopausal de escolha; B oferece estrogênio isolado, inadequado para mulher com útero; C pode ajudar em algumas pacientes, mas é menos efetiva para fogachos que terapia hormonal elegível. Confirmar antecedentes de trombose, neoplasia hormônio-dependente, sangramento genital e risco cardiovascular antes da prescrição.",
    "tip": "Fogachos incapacitantes + menopausa + útero presente: estradiol acompanhado de proteção endometrial. Avalie contraindicações e prefira via transdérmica quando houver risco cardiometabólico.",
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
    "explanation": "Na dengue, a fase crítica frequentemente coincide com a queda da febre. Letargia, anúria, tempo de enchimento capilar de 4 s, extremidades frias e pulso filiforme apontam choque por extravasamento plasmático (grupo D), mesmo quando a pressão arterial é difícil de medir. Esse quadro impõe expansão volêmica imediata com cristalóide isotônico 20 mL/kg IV em até 20 minutos, reavaliando perfusão, pressão, hematócrito e débito urinário.",
    "commentary": "B oferece volume e velocidade insuficientes para choque estabelecido; C e D propõem reidratação enteral/oral incompatível com hipoperfusão grave. Atenção: após cada bolus, reavaliar para evitar tanto subtratamento quanto sobrecarga hídrica.",
    "tip": "Na dengue, a piora pode começar justamente quando a febre cai. Extremidades frias, pulso fino e enchimento lento = choque: priorize cristalóide IV e reavaliação frequente.",
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
    "explanation": "A análise territorial caracteriza mulheres no climatério com sintomas vasomotores/urogenitais e elevada prevalência de comorbidades. O princípio da atenção primária é cuidado integral: identificar intensidade dos sintomas, condições cardiovasculares, diabetes, saúde mental, sexualidade, demandas sociais e possibilidades de tratamento, com trabalho multiprofissional e atividades coletivas de educação.",
    "commentary": "A encaminha desnecessariamente o grupo para saúde mental; B utiliza uma rede voltada à saúde materna, não ao climatério. D destaca intersetorialidade, importante em situações concretas de vulnerabilidade, mas não substitui abordagem clínica abrangente das comorbidades. C é a estratégia diretamente alinhada ao cenário e à população descrita.",
    "tip": "Quando o problema é de um grupo do território, raciocine em duas frentes: cuidado clínico integral e ação coletiva; não transforme climatério em encaminhamento automático.",
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
    "explanation": "Três meses de humor deprimido/desânimo, hipersonia, fadiga, dificuldade de concentração e ganho ponderal sugerem episódio depressivo maior; exames normais tornam causas como hipotireoidismo e anemia menos prováveis. Na ausência de história de mania/hipomania, um ISRS como fluoxetina é opção farmacológica de primeira linha, associado à psicoterapia e ao acompanhamento da resposta.",
    "commentary": "Topiramato não trata depressão primária; lisdexanfetamina é estimulante, sem indicação de primeira linha nesse quadro; amitriptilina pode funcionar, mas seus efeitos anticolinérgicos, cardiovasculares e toxicidade em superdose reduzem a preferência inicial. Investigar risco suicida, transtorno bipolar e preferências da paciente antes de escolher o fármaco.",
    "tip": "Tristeza com anedonia e prejuízo por semanas exige investigar depressão, suicídio e história de mania. Sem bipolaridade, um ISRS costuma ser opção inicial.",
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
    "explanation": "Vômitos, diarreia e hipotensão levam à hipovolemia e aumento da creatinina de 2,4 para 3,9 mg/dL, compatível com lesão renal aguda sobre DRC. O uso de dapagliflozina durante jejum/doença aguda aumenta risco de cetogênese e cetoacidose euglicêmica: pH 7,33, bicarbonato 18, cetonas positivas e glicemia apenas 132 mg/dL tornam a hipótese relevante. Suspender temporariamente o SGLT2 até recuperação clínica, hidratação e resolução da cetose, com avaliação hospitalar e tratamento do distúrbio metabólico.",
    "commentary": "A suspensão definitiva depende de avaliação posterior; B não resolve risco agudo; C perpetua a exposição. O achado de cetonemia isolada não confirma por si só cetoacidose diabética: é preciso caracterizar ânion gap, β-hidroxibutirato e critérios diagnósticos.",
    "tip": "SGLT2 + jejum/vômitos + cetonas + acidose, mesmo com glicose normal, acende alerta para cetoacidose euglicêmica: suspenda temporariamente e investigue.",
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
    "explanation": "A sequência 'febre alta por 3 dias → desaparecimento da febre → exantema róseo centrado no tronco' é praticamente típica da roséola infantil/exantema súbito, relacionado a HHV-6/7. A criança permanece ativa e sem sinais de toxemia, portanto a abordagem é clínica, com hidratação, orientações e antitérmico se voltar a ter febre/desconforto.",
    "commentary": "A não corresponde à notificação compulsória usual da roséola; C não é necessária em apresentação clássica; D não exige isolamento domiciliar específico após melhora, salvo orientação clínica individual. Diferenciar de sarampo, em que febre e sintomas respiratórios normalmente acompanham o início do exantema e há implicações para vigilância.",
    "tip": "Febre alta que desaparece ANTES de surgir exantema rosado no tronco em lactente bem = roséola (exantema súbito).",
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
      "(B) Uretrografia de urgência.",
      "(C) Laparotomia exploradora.",
      "(D) Sondagem uretral."
    ],
    "correctAnswer": 1,
    "explanation": "Trauma pélvico de alta energia, sangue no meato e hematoma escrotal são sinais de lesão uretral, sobretudo posterior. A uretra possivelmente rompida não deve ser instrumentada às cegas: a uretrografia retrógrada demonstra extravasamento e permite definir se há lesão parcial ou completa antes de tentativa de sondagem.",
    "commentary": "D pode agravar a lesão; A (derivação suprapúbica) poderá ser necessária após avaliação urológica, mas não substitui o exame diagnóstico em paciente estável; C não está indicada sem outra lesão abdominal sugestiva. O dado decisivo é sangue no meato uretral.",
    "tip": "Sangue no meato após trauma de pelve é lesão uretral até prova em contrário: faça uretrografia antes de sondagem uretral às cegas.",
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
    "explanation": "A gravidez está confirmada por β-hCG positivo (2.500 mUI/mL). A ultrassonografia não descreve gestação intrauterina e demonstra imagem anexial com halo hiperecogênico ('anel tubário'), associada a pequeno líquido livre e dor pélvica: conjunto fortemente sugestivo de gestação ectópica tubária. A estabilidade hemodinâmica permite avaliar metotrexato, cirurgia ou seguimento muito selecionado, dependendo de β-hCG, sinais de ruptura e critérios clínicos.",
    "commentary": "Ameaça de aborto pressupõe gestação intrauterina e colo fechado; aborto incompleto sugere eliminação parcial de produtos/colo aberto; gestação anembrionada é saco gestacional intrauterino sem embrião. Dor intensa e líquido livre exigem avaliação urgente mesmo sem hipotensão.",
    "tip": "β-hCG positivo, útero sem gestação visível e massa anexial com halo = ectópica até prova em contrário; cheque estabilidade e líquido livre.",
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
    "explanation": "HbA1c de 8,2% evidencia controle glicêmico insuficiente com metformina. A TFG de 46 mL/min/1,73 m² indica DRC G3a, situação em que SGLT2 (dapagliflozina) oferece proteção cardiorrenal além da redução da glicemia, desde que não haja contraindicações e seguindo critérios de prescrição. Com função renal reduzida, seu efeito hipoglicemiante pode ser menor, mas os benefícios renais/cardiovasculares permanecem relevantes.",
    "commentary": "Gliclazida pode causar hipoglicemia e não oferece o mesmo benefício renal; pioglitazona pode causar edema/ganho de peso; insulina NPH não é primeira escolha se não há hiperglicemia sintomática ou descompensação grave. Avaliar albuminúria, pressão, adesão e necessidade posterior de agonista GLP-1.",
    "tip": "Diabetes com TFG reduzida: escolha não apenas pela HbA1c; priorize medicamentos com proteção renal/cardiovascular quando indicados.",
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
    "explanation": "Adolescente de 17 anos com teste positivo e sem pré-natal precisa iniciar acompanhamento imediatamente na APS: confirmação/datação da gestação, avaliação de sinais vitais, exames de rotina, imunização, suplementação e registro e-SUS. Corrimento e dor abdominal exigem investigação de IST, cervicite ou doença pélvica/obstétrica, com avaliação de urgência conforme sintomas. A idade, isoladamente, não obriga encaminhamento a pré-natal de alto risco.",
    "commentary": "A e C encaminham automaticamente sem indicação clara de alto risco; B encaminha diretamente à maternidade sem evidência de emergência no texto. A resposta D prioriza início do cuidado, vínculo e abordagem multiprofissional; sinais de gravidade modificariam o fluxo.",
    "tip": "Gestante adolescente sem pré-natal: acolha e comece acompanhamento na APS hoje; investigue corrimento/dor e só estratifique alto risco por critério real.",
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
    "explanation": "A interrupção de antipsicóticos há dois meses, com retorno de delírios e alucinações, aponta descompensação da esquizofrenia. Apesar da necessidade de reavaliação breve e reintrodução assistida de tratamento, o enunciado afasta risco iminente de auto/heteroagressão. O CAPS pode oferecer acompanhamento longitudinal especializado, busca ativa, equipe multiprofissional, reabilitação psicossocial e articulação com a UBS.",
    "commentary": "Leito em hospital geral ou UPA são úteis em situação de urgência/risco ou incapacidade de cuidado comunitário, não como destino inicial obrigatório aqui. Comunidade terapêutica não substitui CAPS no tratamento da esquizofrenia.",
    "tip": "Psicose crônica descompensada sem risco iminente: rearticule CAPS + APS. Emergência psiquiátrica/hospital é para risco ou gravidade que exige esse nível.",
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
    "explanation": "A morfina está controlando dor oncológica e não deve ser reduzida por constipação isolada. Opioides ativam receptores µ intestinais, diminuindo peristaltismo e secreção; a tolerância a esse efeito é pequena. O tratamento usual é manter analgesia e iniciar esquema laxativo (estimulante e/ou osmótico), além de verificar fecaloma, hidratação, fármacos associados e sinais de obstrução.",
    "commentary": "B sacrifica analgesia sem corrigir prontamente a constipação; C e D trocam desnecessariamente o opioide e podem piorar dor. Distensão e ruídos diminuídos requerem vigilância para íleo/obstrução antes de intensificar laxantes.",
    "tip": "Se o opioide controla a dor, não o retire apenas por constipação: associe prevenção e tratamento intestinal, sempre excluindo obstrução.",
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
    "explanation": "A tetralogia de Fallot combina comunicação interventricular, obstrução da via de saída do VD, aorta cavalgante e hipertrofia ventricular direita. Em crises hipóxicas, a diminuição da resistência sistêmica aumenta o shunt direita-esquerda. Agachar-se aumenta a resistência vascular sistêmica, reduz o desvio direita-esquerda e melhora transitoriamente a oxigenação, explicando a melhora da cianose.",
    "commentary": "Transposição de grandes artérias costuma se manifestar com cianose intensa precoce; estenose aórtica isolada não explica crises que melhoram em cócoras; anomalia de Ebstein tem outro mecanismo anatômico. A pista clássica da questão é a posição genupeitoral/cócoras.",
    "tip": "Cianose aos esforços que melhora ao agachar é pista clássica de tetralogia de Fallot: a cócoras eleva resistência sistêmica e reduz shunt direita-esquerda.",
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
    "explanation": "Ferimento penetrante torácico com redução do murmúrio vesicular e dispneia levanta suspeita de pneumotórax traumático; a descrição de um defeito aberto no tórax sugere a possibilidade de pneumotórax aberto. Na formulação tradicional de provas, curativo oclusivo fixado em três lados funciona como válvula improvisada, permitindo saída de ar e reduzindo entrada na inspiração. Na prática atual, prefere-se selo torácico ventilado apropriado e considerar drenagem pleural em local distinto da ferida, com vigilância para tensão.",
    "commentary": "A não deve utilizar o próprio ferimento como local do dreno; B pode reter ar e precipitar pneumotórax hipertensivo; C é procedimento definitivo para pneumotórax, mas a escolha como ação imediata depende de confirmar que não se trata de ferida aspirativa. O enunciado não descreve passagem de ar pela ferida, deixando D com ressalva.",
    "tip": "Ferida que comunica pleura com ambiente: feche o fluxo de ar de modo seguro e prepare drenagem em local apropriado; evite drenar pela própria ferida.",
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
    "explanation": "BI-RADS 0 não indica câncer nem exame normal: significa avaliação incompleta e necessidade de complementação diagnóstica. Isso pode incluir incidências mamográficas adicionais, comparação com exames prévios e/ou ultrassonografia direcionada conforme o achado. Entre as alternativas oferecidas, a ultrassonografia é o melhor complemento.",
    "commentary": "BI-RADS 3 costuma motivar controle de curto intervalo, não BI-RADS 0; BI-RADS 1/2 voltam a rastreamento habitual. Ressonância não é a primeira complementação rotineira, e aguardar 2 anos com exame inconclusivo seria inadequado.",
    "tip": "BI-RADS 0 não é resultado normal: é avaliação incompleta. Complemente com incidências mamográficas e/ou ultrassom, conforme o achado.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-19",
    "module": "Clínica Médica",
    "text": "Homem de 28 anos, trabalhador rural no Mato Grosso do Sul, é atendido em Unidade Básica de Saúde por apresentar, há 60 dias, febre baixa contínua, associada a inapetência, adinamia e perda de peso.\n\nAchados do exame físico: paciente hipocorado (2+/4+); fígado a 2 cm do rebordo costal direito; e esplenomegalia. Ausência de sangramentos.\n\nApós 10 dias, o paciente retorna com os resultados dos exames apresentados na tabela.\n\n• Hematócrito: 24% (VR: 40 a 50%)\n• Hemoglobina: 9,6 mg/dL (VR: 13,2 a 16,7 mg/dL)\n• Leucócitos: 3.500/mm³ (VR: 4.450 a 10.950/mm³)\n• Plaquetas: 170.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Velocidade de hemossedimentação: 55 mm/h (VR: Até 15 mm/h)\n• TGO: 65 U/L (VR: Até 41 U/L)\n• TGP: 80 U/L (VR: Até 40 U/L)\n\nMorfologia de hemácias normocíticas e normocrômicas. Presença de hipergamaglobulinemia policlonal.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Leishmaniose visceral.",
      "(B) Malária.",
      "(C) Mononucleose.",
      "(D) Esquistossomose."
    ],
    "correctAnswer": 0,
    "explanation": "A leishmaniose visceral provoca infecção sistêmica por Leishmania com febre prolongada, perda ponderal, hepatoesplenomegalia, alterações hematológicas por comprometimento medular/esplênico e hipergamaglobulinemia policlonal pela ativação B. O trabalhador rural de região endêmica apresenta justamente esse conjunto, sem quadro típico de doença hepática isolada.",
    "commentary": "Malária pode dar febre e esplenomegalia, mas o curso insidioso e a hipergamaglobulinemia favorecem leishmaniose; mononucleose costuma cursar com síndrome febril aguda e linfadenopatias; esquistossomose hepatoesplênica costuma ter história evolutiva distinta. Confirmar com teste rápido rK39, sorologia e/ou demonstração do parasita conforme protocolo.",
    "tip": "Febre prolongada + perda ponderal + hepatoesplenomegalia + citopenias + hipergamaglobulinemia em área endêmica = leishmaniose visceral.",
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
    "explanation": "O ponto de corte de pré-hipertensão foi ampliado de PAS 130–139/PAD 85–89 para PAS 120–139/PAD 80–89 mmHg, passando a classificar mais pessoas como positivas para essa categoria de risco. Ao reduzir o limiar para identificar uma condição, tende-se a captar mais pessoas que futuramente apresentarão desfecho/risco, elevando a sensibilidade, à custa de possível queda de especificidade.",
    "commentary": "Especificidade não costuma subir quando se torna o critério mais amplo; falsos negativos tendem a diminuir, não aumentar; valor preditivo positivo depende da prevalência e geralmente não melhora com classificação excessivamente abrangente. Nota conceitual: pré-hipertensão é categoria prognóstica, não teste binário formal de doença.",
    "tip": "Ao reduzir o limiar para classificar positivo, você encontra mais pessoas: sensibilidade tende a subir e especificidade a cair.",
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
    "explanation": "A retirada deliberada do preservativo sem consentimento ('stealthing') viola o consentimento sexual e configura violência sexual. O acolhimento deve preservar confidencialidade, autonomia, registrar a história sem julgamento, ofertar contracepção de emergência, profilaxias e exames pertinentes, além de notificação compulsória pelos serviços de saúde nos prazos previstos.",
    "commentary": "A pode gerar culpabilização e não é ação prioritária; exame de corpo de delito pode ser informado e disponibilizado, mas não é pré-requisito do cuidado nem da notificação; benzodiazepínicos não são resposta automática. Notificação sanitária e comunicação policial são processos diferentes, com regras próprias.",
    "tip": "Retirar preservativo sem consentimento configura violência sexual. Cuide, ofereça profilaxias e notifique; não exija boletim de ocorrência.",
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
    "explanation": "Dor precordial típica desencadeada por esforço e aliviada por repouso caracteriza angina estável/síndrome coronariana crônica. Após estratificar probabilidade clínica e avaliar ECG basal, pode-se investigar isquemia com teste ergométrico se o traçado for interpretável e o paciente conseguir exercitar-se; exame funcional com imagem (como cintilografia) costuma ser preferível quando há alterações de repolarização basais que prejudicam o teste convencional. O ECG relata sobrecarga ventricular esquerda, mas não detalha alterações ST-T.",
    "commentary": "B (cineangiocoronariografia) costuma ser reservada a alto risco/indicação específica, não automaticamente à primeira avaliação; D (eco de repouso) avalia estrutura e função, mas isoladamente não demonstra isquemia induzível. A e C podem ser defensáveis segundo o contexto; não há dados suficientes para afirmar superioridade universal de C.",
    "tip": "Dor típica aos esforços pede estratificação de doença coronária; ECG com HVE pode prejudicar teste ergométrico simples. Escolha exame pela probabilidade e interpretabilidade.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ambiguidade entre alternativas). Sem saber se o ECG é interpretável para esforço e qual a probabilidade pré-teste, a unicidade A versus C fica prejudicada."
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
    "explanation": "A pergunta é sobre reduzir INCIDÊNCIA de diarreia, isto é, prevenir novos episódios. O aleitamento materno exclusivo até 6 meses fornece proteção imunológica, reduz exposição a água/alimentos contaminados e protege contra infecções entéricas. Continuar o aleitamento após a introdução alimentar conserva parte dessa proteção, inclusive em comunidades vulneráveis.",
    "commentary": "Sais de reidratação oral (A) e ensino sobre reidratação (B) reduzem desidratação, complicações e óbitos após a doença surgir, mas não são medidas de maior impacto sobre surgimento de novos casos. Uso racional de antibióticos (C) é importante, mas tem foco diferente.",
    "tip": "SRO reduz desidratação e morte; aleitamento materno previne episódios de diarreia. A questão pede INCIDÊNCIA, não tratamento do caso.",
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
    "explanation": "A radiografia evidencia fratura supracondiliana do úmero deslocada, comum após queda com apoio na mão estendida. Pulsos radial e ulnar diminuídos constituem sinal de possível comprometimento arterial, exigindo reavaliação neurovascular imediata. Nas fraturas deslocadas, a conduta padrão é redução urgente, frequentemente fechada, com fixação percutânea por fios de Kirschner e imobilização subsequente; persistindo déficit vascular, avaliar exploração.",
    "commentary": "A menciona apenas redução incruenta e tala, e não a fixação necessária em muitas fraturas desse grau; B não corrige desalinhamento e é inadequada; C não é técnica de escolha; D exige quadro de síndrome compartimental demonstrada para justificar fasciotomia. A é a mais próxima, mas incompleta.",
    "tip": "Fratura supracondiliana deslocada + pulso diminuído = prioridade neurovascular. Reduza e estabilize urgentemente; talas isoladas podem ser insuficientes.",
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
    "explanation": "Úlcera genital única, indolor, endurecida, com fundo limpo e linfadenopatia regional não supurativa é o padrão do cancro duro da sífilis primária por Treponema pallidum. O esquema para sífilis recente é benzilpenicilina benzatina 2,4 milhões UI IM em dose única (divididas entre sítios de aplicação segundo apresentação). Solicitar testes treponêmico e não treponêmico, testar outras IST e orientar avaliação de parceiros.",
    "commentary": "Ceftriaxona em dose única trata gonorreia; azitromicina 1 g é alternativa para algumas IST, não o regime da sífilis; doxiciclina 21 dias não é o esquema indicado para sífilis primária. Atenção: não atrasar tratamento quando suspeita é alta, conforme protocolos.",
    "tip": "Úlcera genital única, limpa, endurecida e indolor + ínguas não supurativas = cancro duro da sífilis primária; penicilina benzatina é padrão.",
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
    "explanation": "Febre alta súbita associada a artralgias relevantes, edema articular e limitação incapacitante para marcha/trabalho constitui quadro típico de chikungunya, causada por alfavírus transmitido pelo Aedes. A dor articular pode persistir após cessar febre e demandar seguimento na fase subaguda/crônica.",
    "commentary": "Dengue costuma ter febre, cefaleia e mialgia intensas com artralgia menos incapacitante; zika costuma dar exantema e conjuntivite com febre baixa ou ausente; leptospirose associa-se a exposição hídrica, mialgia intensa em panturrilhas e sinais sistêmicos. Na fase aguda, excluir dengue antes de prescrever anti-inflamatórios.",
    "tip": "Chikungunya costuma dar dor articular mais intensa e incapacitante, com edema; dengue costuma destacar mialgia e sinais hemorrágicos.",
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
    "explanation": "Valor preditivo negativo (VPN) é a probabilidade de não ter doença quando o teste é negativo: VPN = verdadeiros negativos/(verdadeiros negativos + falsos negativos). Mantidas sensibilidade e especificidade, o VPN aumenta à medida que a prevalência diminui, porque existem proporcionalmente menos doentes capazes de gerar falsos negativos.",
    "commentary": "As prevalências são 3,0%, 2,0%, 2,5% e 1,8%; o município 4 tem a menor (1,8%), portanto maior VPN. Não confundir número absoluto de casos com prevalência, nem VPN com especificidade, que é propriedade intrínseca do teste.",
    "tip": "Com sensibilidade/especificidade fixas, quanto MENOR a prevalência, MAIOR o valor preditivo negativo. Procure o município de menor prevalência.",
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
    "explanation": "O episódio atual apresenta humor deprimido, anedonia, perda funcional, insônia, fadiga e hiporexia por cerca de 1 mês, compatível com episódio depressivo. Três meses antes houve pelo menos 5 dias de humor excessivamente elevado, energia aumentada, fala excessiva, múltiplos projetos e menor necessidade de sono, observáveis sem prejuízo grave ou psicose: descrição sugestiva de hipomania. Episódio depressivo maior + hipomania apontam para transtorno bipolar tipo II, se todos os critérios forem confirmados.",
    "commentary": "Depressão unipolar (A) ignora a hipomania; ciclotimia (B) exige flutuações subclínicas prolongadas, não episódios plenos descritos; 'depressão mista' não explica melhor o episódio hipomaníaco prévio. Evitar antidepressivo isolado antes de avaliar bipolaridade.",
    "tip": "Depressão atual + episódio prévio de energia elevada, menor necessidade de sono e mudança observável por vários dias = rastreie hipomania, não rotule como unipolar.",
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
    "explanation": "Doença de Crohn pode acometer qualquer segmento gastrointestinal e causar inflamação transmural, estenoses, massas inflamatórias e fístulas. Massa em fossa ilíaca direita sugere acometimento ileocecal; fístula perianal é particularmente sugestiva de Crohn. Emagrecimento acentuado e pioderma gangrenoso reforçam doença inflamatória intestinal com manifestação extraintestinal.",
    "commentary": "Retocolite ulcerativa limita-se ao cólon e raramente causa fístulas complexas; câncer colorretal é menos provável pela idade e manifestações perianais; tuberculose intestinal entra no diferencial de acometimento ileocecal, mas não explica tão bem o conjunto. Confirmar por ileocolonoscopia com biópsias e avaliação de extensão.",
    "tip": "Diarreia crônica + emagrecimento + fístula perianal + massa em fossa ilíaca direita aponta fortemente para doença de Crohn.",
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
    "explanation": "A criança está ativa, aceita líquidos, chora com lágrimas, tem mucosa úmida, perfusão normal, TEC <2 segundos e fontanela plana: não há desidratação clinicamente relevante. Para diarreia aguda sem sangue, a conduta é manter alimentação/aleitamento e oferecer solução de reidratação oral após perdas para prevenir desidratação; zinco é considerado segundo política/local e idade.",
    "commentary": "Antibióticos (A) não são rotineiros em gastroenterite aquosa sem sinais de invasão; via venosa (B) é reservada a desidratação grave, choque ou falha da via oral; antiparasitário (D) não tem indicação empírica nesse contexto. Orientar sinais de alarme e retorno.",
    "tip": "Diarreia em lactente com lágrimas, mucosa úmida e boa perfusão: mantenha alimentação e use SRO; hidratação venosa é para gravidade/fracasso oral.",
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
    "explanation": "A tomografia apresenta coleção extra-axial hiperdensa de formato lentiforme/biconvexo, típica de hematoma epidural (extradural). O intervalo inicial com consciência relativamente preservada seguido de piora neurológica lembra o 'intervalo lúcido', decorrente da expansão do sangramento e aumento da pressão intracraniana. O efeito de massa somado à deterioração indica avaliação neurocirúrgica emergencial para evacuação.",
    "commentary": "Hematoma subdural tende a ser crescente e em meia-lua, não lentiforme; observação isolada ou apenas monitorização de pressão intracraniana não tratam massa expansiva com piora neurológica. A prioridade é estabilizar ABC e providenciar neurocirurgia.",
    "tip": "Após TCE, melhora relativa seguida de piora de consciência + hematoma biconvexo na TC é emergência neurocirúrgica por epidural.",
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
    "explanation": "Sangramento vaginal volumoso, cólica e colo uterino DILATADO antes de ocorrer eliminação dos produtos gestacionais caracterizam abortamento inevitável ou em curso. O colo aberto significa que a gestação não se mantém viável e a expulsão é esperada ou já começou, exigindo avaliação obstétrica de sangramento, estabilidade e conduta expectante, medicamentosa ou uterina conforme caso.",
    "commentary": "Ameaça de abortamento exige colo fechado; abortamento completo ocorre após expulsão total e útero esvaziado; retido apresenta gestação inviável sem eliminação, em geral colo fechado. Não confundir estabilidade hemodinâmica com ausência de gravidade potencial do sangramento.",
    "tip": "Sangramento na gestação inicial: colo FECHADO sugere ameaça; colo ABERTO sem expulsão do conteúdo sugere abortamento inevitável.",
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
    "explanation": "Ferimento transdérmico nos dedos por gato de rua não localizável é exposição relevante à raiva, especialmente em local com ocorrência recente confirmada em felinos. Deve-se lavar imediatamente com água e sabão, avaliar necessidade de antibiótico e antitetânica, e iniciar profilaxia antirrábica pós-exposição conforme classificação de risco. A imunização passiva pode ser feita por soro heterólogo antirrábico OU imunoglobulina humana antirrábica, enquanto a vacina produz proteção ativa.",
    "commentary": "A e B trazem vacina associada a formas alternativas de imunização passiva, ambas clinicamente corretas quando indicadas; C omite vacina e duplica imunização passiva; D dispensa indevidamente anticorpos no contexto descrito. A redação não diferencia A e B.",
    "tip": "Mordida de animal não observável em região com raiva + lesão na mão: lave, classifique exposição e avalie vacina COM imunização passiva; soro e imunoglobulina são alternativas.",
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
    "explanation": "Chuvas intensas com ruptura de saneamento, deslocamento de moradores e elevação de diarreias exigem resposta coordenada da vigilância epidemiológica. Sua atribuição prioritária é articular comunicação, definição de casos, investigação de surtos e fluxos entre municípios, estado e União para orientar assistência e medidas preventivas. A rede de notificação e análise dos dados permite resposta proporcional à dimensão do evento.",
    "commentary": "Suspender toda consulta de rotina (B) é medida desproporcional; hipoclorito para superfícies (C) é providência operacional específica, com concentração dependente de uso; análise de água (D) é eixo relevante da vigilância ambiental, mas não substitui a coordenação epidemiológica.",
    "tip": "Surto após desastre exige informação rápida e articulada entre vigilâncias e esferas de gestão; a primeira decisão é organizar detecção, comunicação e resposta.",
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
    "explanation": "A comunicação de óbito é uma intervenção clínica. Recomenda-se ambiente privado, identificação dos familiares, esclarecimento do que já sabem, informação clara sem eufemismos, pausa para reação emocional e oferta de apoio posterior. Como havia possível suicídio, evitar julgamentos, suposições sobre culpa ou divulgação indiscriminada de informações sigilosas.",
    "commentary": "A propõe benzodiazepínicos profiláticos, não indicados de rotina no luto; B e C pretendem comunicar na recepção, local inadequado, e C expõe o prontuário sem critério. D corresponde à estrutura de comunicação acolhedora, próxima aos princípios do protocolo SPIKES.",
    "tip": "Comunicar morte: ambiente privado, verificar o que a família sabe, notícia clara, acolhimento, silêncio e apoio. Não medicalize o luto automaticamente.",
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
    "explanation": "A síndrome nefrótica resulta de aumento da permeabilidade da barreira glomerular à albumina, levando a proteinúria intensa, hipoalbuminemia, redução da pressão oncótica e edema/ascite; o fígado aumenta síntese de lipoproteínas, justificando hipercolesterolemia e hipertrigliceridemia. A urina 3+ e a ausência de hematúria tornam esse mecanismo mais provável. A confirmação quantitativa requer relação proteína/creatinina ou proteinúria de 24 horas, além de investigar a causa glomerular.",
    "commentary": "Síndrome nefrítica costuma causar hematúria, cilindros hemáticos, hipertensão e oligúria; nefropatia hipertensiva não costuma iniciar tão abruptamente com esse conjunto; necrose tubular aguda produz lesão renal, mas não a tríade de edema + hipoalbuminemia + hiperlipidemia. PA de 180/110 mmHg requer avaliação urgente de lesão de órgão-alvo.",
    "tip": "Proteinúria importante + hipoalbuminemia + edema + hiperlipidemia = síndrome nefrótica, mesmo que a pressão esteja muito alta.",
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
    "explanation": "Síndrome da morte súbita do lactente descreve morte súbita, inesperada e inexplicada de bebê menor de 1 ano após autópsia completa e investigação do cenário e da história. O pico de incidência ocorre entre 1 e 4 meses. Compartilhar cama com adultos aumenta risco, mas não permite afirmar asfixia mecânica sem evidência circunstancial ou anatomopatológica.",
    "commentary": "Broncoaspiração e sufocação têm que ser identificadas por elementos específicos; síndrome do QT longo pode causar morte súbita, mas não foi demonstrada e não equivale obrigatoriamente a cardiopatia estrutural. Orientação preventiva: dormir de barriga para cima, superfície firme e no mesmo quarto, porém em berço separado.",
    "tip": "Morte inesperada de lactente sem causa após investigação completa sugere síndrome da morte súbita; dormir na cama dos pais é fator de risco, não diagnóstico de asfixia.",
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
    "explanation": "Para estimar área corporal queimada (SCQ) no adulto, somam-se somente áreas de espessura parcial/profunda, excluindo eritema isolado. Regra dos nove: tronco anterior 18%, dois membros superiores completos 18%, face anterior de uma perna 9%: total 45%, considerando que a descrição inclui todo o segmento superior bilateral. A diretriz ABA 2024 sugere iniciar reposição com 2 mL × kg × %SCQ nas primeiras 24 h: 2 × 70 × 45 = 6.300 mL de Ringer lactato, ajustados à diurese e resposta hemodinâmica.",
    "commentary": "A e D distribuem volumes/intervalos que não correspondem ao total da abordagem de 2 mL/kg/%; B superestima a necessidade. Fórmulas são PONTO DE PARTIDA, não prescrição fixa: iniciar a contagem a partir da queimadura, considerar perdas e titular por perfusão/diurese.\n\nAtenção: Se a banca usar fórmula antiga de Parkland (4 mL/kg/%), haverá outra dose inicial; diretriz ABA 2024 recomenda 2 mL/kg/% para adultos com queimadura extensa.",
    "tip": "Queimadura: conte apenas áreas com espessura parcial/total. No adulto, regra dos nove; calcule 2 mL × kg × %SCQ como ponto de partida e titule à diurese.",
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
    "explanation": "A gestação de 41 semanas e 5 dias está próxima do pós-termo, momento em que aumentam riscos de insuficiência placentária e eventos perinatais, justificando planejar resolução em vez de prolongar indiscriminadamente. A avaliação fetal está tranquilizadora, o feto é cefálico e não há contraindicação relatada à via vaginal. O colo é posterior, firme, fechado e pouco apagado: Bishop desfavorável; inicia-se preparo/maturação cervical antes de induzir contrações.",
    "commentary": "Amniotomia (B) exige colo acessível e condições obstétricas apropriadas; cesariana eletiva (D) não é obrigatória sem outra indicação; conduta expectante (A) não é a melhor opção nessa idade gestacional no cenário proposto. O método de maturação deve ser escolhido conforme protocolos e contraindicações.",
    "tip": "Gestação avançando além de 41 semanas + colo desfavorável: planeje indução com maturação cervical, não cesárea automática.",
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
    "explanation": "TSH 7,10 mUI/L com T4 livre normal define hipotireoidismo subclínico, não hipotireoidismo manifesto. Em mulher de 40 anos, assintomática do ponto de vista tireoidiano, anti-TPO negativo e TSH abaixo de 10, a conduta usual é repetir TSH/T4 em semanas/meses, confirmar persistência e individualizar necessidade de levotiroxina. A tristeza surgida há três semanas após luto não comprova episódio depressivo maior ou sintoma tireoidiano.",
    "commentary": "Levotiroxina (A) não é automática nesse TSH; imagem da tireoide (B) depende de bócio/nódulos, ausentes; sertralina (D) não deve ser prescrita apenas por luto recente sem avaliação clínica. Considerar desejo reprodutivo, sintomas, anticorpos e risco cardiovascular no seguimento.",
    "tip": "TSH discretamente elevado com T4 livre normal = hipotireoidismo subclínico; em pessoa não gestante e assintomática, confirme persistência antes de tratar.",
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
    "explanation": "Doença mista do tecido conjuntivo é síndrome de sobreposição de manifestações de lúpus, esclerose sistêmica e miosite, fortemente associada a anti-U1-RNP em títulos altos. O conjunto Raynaud, mãos 'inchadas', artralgias e disfagia sugere componente vascular/inflamatório e possível dismotilidade esofágica. FAN pontilhado alto e anti-RNP positivo reforçam o diagnóstico, embora critérios clínicos formais precisem ser avaliados.",
    "commentary": "Anti-Scl-70 negativo não exclui esclerose sistêmica, mas o conjunto de sobreposição e anti-RNP favorece D; anti-Sm/anti-DNA negativos diminuem evidência para lúpus clássico; anti-Jo-1 negativo e ausência de fraqueza proximal afastam polimiosite como hipótese principal. Monitorar pulmão, pressão pulmonar e órgãos-alvo.",
    "tip": "Raynaud + mãos edemaciadas + disfagia + anti-U1-RNP muito alto = pense em doença mista do tecido conjuntivo.",
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
    "text": "Menino de 15 meses, em aleitamento materno até 4 meses, é atendido em Unidade Básica de Saúde para consulta de rotina. Ao exame físico, apresenta palidez cutânea. Os exames laboratoriais revelaram os seguintes resultados:\n\n• Hemoglobina: 8,1 g/dL (VR: 10,5 a 14,2 g/dL)\n• Volume Corpuscular Médio: 66 fL (VR: 75 a 87 fL)\n• Concentração de Hemoglobina Corpuscular Média: 29 g/dL (VR: 30 a 33 g/dL)\n• Amplitude de Distribuição dos Eritrócitos (RDW): 18,5% (VR: 11,5 a 15%)\n• Plaquetas: 402.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Ferritina: 9 ng/L (VR: 40 a 300 ng/mL)\n• Eletroforese Hemoglobina A2: 3,0% (VR: Menor que 3,5%)\n\nRDW: Red Cell Distribution Width.\n\nNesse caso, os diagnósticos diferenciais incluem:",
    "options": [
      "(A) Deficiência de ferro e de ácido fólico, além de anemia falciforme.",
      "(B) Deficiência de ferro e de B12, além de anemia de doença crônica.",
      "(C) Deficiência de ferro, talassemias e anemia sideroblástica.",
      "(D) Traço falcêmico, esferocitose hereditária e anemia ferropriva."
    ],
    "correctAnswer": 2,
    "explanation": "Hb 8,1 g/dL, VCM 66 fL e CHCM baixa configuram anemia microcítica hipocrômica. Ferritina de 9 é altamente sugestiva de deficiência absoluta de ferro, e RDW elevado indica grande variação de tamanho eritrocitário, frequentemente vista na ferropriva. Entre os diagnósticos diferenciais de microcitose estão talassemias e anemia sideroblástica, embora não sejam as mais prováveis neste paciente.",
    "commentary": "Deficiência de B12 e folato produz classicamente macrocitose, tornando A/B menos apropriadas; anemia falciforme e esferocitose são mais comumente normocíticas; HbA2 de 3,0% não apoia β-talassemia menor típica. Avaliar dieta, perdas, suplementação preventiva e resposta ao ferro; não presumir talassemia apenas pelo VCM.",
    "tip": "VCM baixo + RDW alto + ferritina baixa = ferropriva. Na investigação de microcitose, lembre de talassemias e anemia sideroblástica.",
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
    "explanation": "O choque obstrutivo do tamponamento acontece quando sangue no pericárdio eleva pressão intrapericárdica e limita enchimento ventricular. Após trauma torácico, o conjunto de turgência jugular, abafamento de bulhas e pulso paradoxal é típico; a tríade de Beck contém hipotensão (que pode ainda não estar estabelecida), turgência jugular e abafamento de bulhas. Ecografia à beira-leito pode apoiar diagnóstico sem atrasar tratamento quando instável.",
    "commentary": "Pneumotórax hipertensivo costuma causar grande assimetria à ausculta, ausente; contusão miocárdica não explica tão bem a combinação de distensão jugular e pulso paradoxal; ruptura de aorta causa geralmente outra apresentação. Tamponamento traumático exige abordagem emergencial especializada.",
    "tip": "Trauma torácico + jugulares túrgidas + bulhas abafadas + pulso paradoxal: pense em tamponamento, mesmo que PA ainda não esteja muito baixa.",
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
    "explanation": "A lesão inicial é condiloma associado a HPV, com achado histológico de baixo grau, que já foi excisado. Áreas acetobrancas na vulva após ácido acético são inespecíficas e podem corresponder a inflamação, cicatrização ou HPV sem lesão relevante; não significam automaticamente neoplasia de alto grau. Na ausência de lesões clínicas novas ou suspeitas, seguimento clínico periódico é plausível.",
    "commentary": "Genotipagem (B) não define conduta sobre pequenas áreas vulvares; podofilotoxina (D) trata verrugas visíveis, não coloração inespecífica; biópsia (C) passa a ser preferível se houver área persistente, elevada, pigmentada, ulcerada, endurecida ou suspeita de HSIL. O enunciado não descreve morfologia suficiente para excluir totalmente C.",
    "tip": "HPV vulvar de baixo grau sem novas verrugas típicas exige avaliar significado das áreas acetobrancas; acetobranqueamento isolado não confirma lesão de alto grau.",
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
    "explanation": "Gestação é fator de risco para complicações da influenza, portanto oseltamivir deve ser iniciado o mais cedo possível mesmo com sintomas há mais de 48 h e sem hipóxia no momento. O bebê de 1 ano assintomático é contato domiciliar; recomenda-se monitorização cuidadosa e avaliação de critérios específicos de profilaxia, não profilaxia universal a todo contato saudável.",
    "commentary": "B/D negam tratamento antiviral apropriado à gestante; C adiciona quimioprofilaxia automaticamente sem informar exposição de alto risco ou situação epidemiológica que justifique. Orientar sinais de agravamento em gestante e criança, isolamento e assistência se sintomas surgirem.",
    "tip": "Influenza em gestante é grupo de risco: indique oseltamivir precocemente, mesmo após 48 h quando necessário. Contato assintomático não recebe profilaxia automaticamente.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (condicional). Indicação de quimioprofilaxia para contatos é individualizada por risco, tempo de exposição e protocolos locais."
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
    "explanation": "Queimação retroesternal pós-prandial, piora no decúbito e melhora ao sentar são típicos de doença do refluxo gastroesofágico (DRGE). A avaliação de síndrome coronariana aguda foi inicialmente negativa por ECG e troponina seriados, diminuindo a probabilidade de causa isquêmica aguda. Quando é necessário comprovar refluxo patológico, pHmetria esofágica ambulatorial (ou impedanciopHmetria, conforme indicação) quantifica exposição ácida e associação temporal com sintomas.",
    "commentary": "TC sem contraste não confirma DRGE; eco com estresse investiga isquemia; angioTC pulmonar pesquisa embolia. Na prática, um quadro típico sem sinais de alarme pode receber inicialmente teste terapêutico com IBP; dor torácica requer sempre estratificação do risco cardíaco apropriada.",
    "tip": "Queimação retroesternal pós-prandial e pior ao deitar sugere refluxo; após afastar causas graves, pHmetria pode documentar exposição ácida quando realmente indicada.",
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
    "explanation": "Evacuação semanal, fezes endurecidas, dor, postura retentiva e escape involuntário sugerem constipação funcional com fecaloma e incontinência fecal por transbordamento. O reto distendido perde sensibilidade e deixa fezes líquidas passarem ao redor da massa fecal. É fundamental desimpactar antes de manutenção; polietilenoglicol por via oral é preferido em diretrizes pediátricas, seguido de dose de manutenção e rotina de sentar no vaso após refeições.",
    "commentary": "Óleo mineral não é primeira escolha e oferece risco de aspiração; enemas fosfatados repetidos têm riscos eletrolíticos; dieta isenta de resíduos (D) piora o quadro. Apoio familiar sem punição e avaliação de sinais de alarme fazem parte do tratamento.",
    "tip": "Constipação funcional + escape fecal = provável fecaloma. Primeiro desimpacte com PEG; depois mantenha hábito intestinal e prevenção.",
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
    "correctAnswer": 1,
    "explanation": "Glasgow 8, trauma maxilofacial extenso, hemorragia, tentativa de laringoscopia malsucedida e evolução para apneia caracterizam emergência de via aérea. Quando não se consegue intubar nem oxigenar, é necessário acesso emergencial pela membrana cricotireóidea, preferencialmente cricotireoidostomia cirúrgica no adulto treinado, com equipe e material disponíveis. A cricotireoidostomia por punção fornece oxigenação temporária e não ventilação definitiva satisfatória.",
    "commentary": "Traqueostomia de emergência (B) é mais demorada/tecnicamente complexa e não a primeira técnica recomendada no cenário CICO; máscara laríngea (C) pode ser ponte se viável, mas trauma facial/sangramento grave podem impedi-la; via nasal (D) é imprópria diante de suspeita de fratura de base/crânio e não atende à apneia em segurança. A opção A é uma via temporária possível, porém não substitui cricotireoidostomia cirúrgica.",
    "tip": "Se não consegue intubar nem oxigenar, trata-se de via aérea cirúrgica de resgate. Em adulto, cricotireoidostomia cirúrgica é a referência, mesmo se não estiver nas opções.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação). Nenhuma alternativa apresenta a via aérea definitiva preferida; entre A e B há disputa de melhor resposta conforme contexto e treinamento."
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
    "explanation": "Dor pélvica que se torna contínua, massa anexial dolorosa, imagem heterogênea e ausência de vascularização ao Doppler levantam suspeita de torção anexial, especialmente no contexto de lesão como teratoma (sombra acústica pode refletir tecidos densos). A torção é uma emergência tempo-dependente: laparoscopia permite confirmar, destorcer e preservar o ovário quando viável. Doppler normal não exclui torção, assim como fluxo ausente aumenta suspeita.",
    "commentary": "Antibiótico (A) trataria doença infecciosa, mas não a isquemia; aspiração de cisto (B) e punção de fundo de saco (C) não resolvem pedículo torcido e atrasam a conduta apropriada. β-hCG negativo reduz chance de gravidez ectópica.",
    "tip": "Massa anexial dolorosa com imagem heterogênea, sombra acústica e pouco fluxo sugere torção de ovário/dermoide: não espere exames inconclusivos para explorar.",
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
    "explanation": "Vinte episódios de diarreia em uma única creche durante um mês sugerem agregação de casos possivelmente acima do esperado, com potencial surto. A ação inicial de vigilância é investigar pessoas, datas, exposições alimentares/água, hipóteses de transmissão e vínculos epidemiológicos, comunicando prontamente a vigilância municipal para orientar coleta e medidas de controle.",
    "commentary": "A submete indiscriminadamente todos a exames; B é promoção de saúde pertinente, mas insuficiente antes de caracterizar evento; D determina fechamento sem investigação nem avaliação de proporcionalidade. A visita epidemiológica não impede iniciar higiene, água segura e afastamento individual dos sintomáticos conforme orientação sanitária.",
    "tip": "Vinte diarreias relacionadas à mesma creche indicam possível surto: investigar ativamente e comunicar vigilância vem ANTES de medidas educativas isoladas.",
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
    "explanation": "Episódios repetidos de comer em excesso associados a vômitos autoinduzidos, uso de laxantes e diurético sugerem transtorno alimentar com purgação, apesar do IMC normal. Vômitos causam perda de ácido gástrico, alcalose metabólica e depleção de cloreto; contração volêmica e aldosterona favorecem excreção renal de potássio. Furosemida e diarreia por laxantes acrescentam perda de potássio, tornando hipocalemia a alteração mais provável.",
    "commentary": "Hiponatremia também pode ocorrer, mas é menos característica da soma de perdas e purgação; hipernatremia e hipercalemia não são as alterações mais esperadas. Avaliar ECG, potássio, magnésio, função renal e risco de arritmia; rastrear risco suicida e conduzir cuidado multiprofissional.",
    "tip": "Vômitos autoinduzidos + laxantes + diuréticos geram perda de potássio: pense em hipocalemia e risco de arritmia, mesmo com IMC normal.",
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
    "explanation": "Sopro sistólico de baixa intensidade, sem outros sinais cardiovasculares e que DIMINUI com manobra de Valsalva ou posição em pé é comportamento típico de sopro inocente de fluxo, que tende a ser mais audível em estados hiperdinâmicos como febre. Ele não apresenta sinais de insuficiência cardíaca, cianose, atraso de crescimento ou sopro diastólico.",
    "commentary": "ECG e ecocardiograma não são de rotina para sopro com características inocentes inequívocas; encaminhamento especializado é necessário quando há achados patológicos, história preocupante ou dúvida clínica. O seguimento permite reavaliar o sopro depois que a febre se resolver.",
    "tip": "Sopro sistólico leve que diminui com Valsalva e ortostatismo, sem sinais de doença cardíaca, favorece sopro inocente; acompanhar e reexaminar após febre.",
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
    "correctAnswer": 1,
    "explanation": "A radiografia mostra coleção pleural direita importante e a redução do murmúrio vesicular corresponde à ocupação do espaço pleural. Tosse produtiva, dor pleurítica e evolução rápida sugerem derrame parapneumônico; se a imagem comprovar gás pleural, nível hidroaéreo, loculação extensa ou coleção purulenta, drenagem intercostal em selo d'água passa a ser necessária. Porém, em paciente estável com derrame novo não caracterizado, a toracocentese diagnóstica é normalmente o primeiro passo para avaliar pH, glicose, LDH, Gram e cultura.",
    "commentary": "Videotoracoscopia é reservada a casos selecionados/fracasso de drenagem; biópsia pleural investiga etiologias específicas, não costuma ser o primeiro ato na infecção aguda. A escolha entre A e B depende da qualidade e interpretação da imagem, não apenas do tamanho do derrame.",
    "tip": "Derrame pleural + possível ar no espaço pleural exige ler a radiografia com atenção: nível hidroaéreo/coleção complicada favorece drenagem, líquido simples pede punção diagnóstica.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ponto discutível). CONTROVÉRSIA A × B: examinar imagem para confirmar nível pleural gás-líquido/empiema ou derrame simples antes de afirmar drenagem imediata.",
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
    "explanation": "Febre alta no puerpério, hiperemia mamária e ultrassom com coleção delimitada de conteúdo espesso de 4 cm caracterizam abscesso mamário relacionado à lactação, mesmo sem flutuação palpável. O abscesso precisa ser esvaziado, com punção aspirativa guiada por US quando apropriada; muitas vezes são necessárias aspirações repetidas, drenagem por cateter ou intervenção cirúrgica conforme tamanho, loculações e resposta. Antibióticos direcionados a estafilococos e cultura do aspirado são considerados.",
    "commentary": "Compressas isoladas não drenam uma coleção consolidada; suspender amamentação rotineiramente prejudica esvaziamento e pode agravar estase; drenagem cirúrgica com dreno pode ser necessária, mas não é obrigatória como primeira opção em toda coleção de 4 cm. Manter amamentação ou extração, conforme conforto e orientação clínica.",
    "tip": "Febre puerperal + massa dolorosa + coleção líquida espessa ao US = abscesso mamário: antibiótico e drenagem por punção quando viável.",
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
    "explanation": "No calendário de rotina do PNI, a primeira dose de varicela é administrada aos 15 meses (geralmente por tetraviral/tríplice viral + varicela conforme disponibilidade) e a segunda aos 4 anos. Como a criança estava vacinada somente até 12 meses, perdeu a primeira dose e deve ser atualizada agora, aos 3 anos, com seguimento para a dose de 4 anos. É indispensável revisar o restante da caderneta de vacinação.",
    "commentary": "A sugere intervalo de 30 dias como rotina sem critério especial; B pressupõe que já recebeu a primeira dose; D mantém esquema incompleto. Em situação de surto, calendários operacionais podem definir ações adicionais, mas o enunciado não descreve mudança formal para esta criança.",
    "tip": "Criança que perdeu visitas de vacina não reinicia tudo: atualize o esquema na idade atual e programe segunda dose de varicela conforme calendário vigente.",
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
    "explanation": "O esquema de dose única para HPV em adolescentes imunocompetentes foi sustentado por ensaios e dados de efetividade que mostram proteção robusta e não inferioridade prática frente a esquemas com mais doses em populações elegíveis. Simplificar doses melhora oportunidade de cobertura e reduz perdas de seguimento, mas a justificativa científica principal é a proteção demonstrada. Imunossuprimidos têm regimes específicos.",
    "commentary": "A reduz indevidamente o efeito populacional da vacinação de meninos; B confunde uma vantagem programática com evidência principal de imunogenicidade/eficácia; C promete eliminação absoluta de verrugas, resultado não garantido. A comparação entre esquemas apoia D, nos grupos indicados.",
    "tip": "Uma dose de HPV em adolescentes imunocompetentes pode produzir proteção robusta; diferencie evidência de não inferioridade de promessas de eliminação total da doença.",
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
    "explanation": "No transtorno factício imposto a outro, o cuidador falsifica ou induz sinais de doença em pessoa sob seus cuidados, apresentando-a como enferma, sem benefício externo evidente que explique o comportamento. A mãe contamina intencionalmente a urina da criança com sangue próprio, criando achado laboratorial e levando a exames e internações potencialmente prejudiciais. A prioridade é proteger a criança e comunicar equipe multiprofissional e instâncias legais cabíveis.",
    "commentary": "Transtorno somático envolve sofrimento genuíno pela interpretação de sintomas, não fabricação de achados; simulação busca ganho externo identificável e não explica tão bem o padrão; transtorno dissociativo não corresponde. Não enfrentar o cuidador sozinho sem plano de segurança pediátrico.",
    "tip": "Sintomas fabricados por cuidador, com adulteração objetiva das amostras, sugerem transtorno factício imposto a outro e risco de violência contra a criança.",
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
    "explanation": "Febre prolongada, emagrecimento, dor focal em T9–T10, déficit bilateral em pernas, alterações sensitivas e disfunção esfincteriana configuram compressão medular ou doença infecciosa espinal até prova em contrário. Tuberculose vertebral (mal de Pott) pode comprometer corpos vertebrais e formar abscesso epidural com déficit neurológico progressivo, compatível com hipótese da letra D. É emergência: solicitar ressonância urgente de coluna, avaliação cirúrgica/infectológica e investigar etiologia.",
    "commentary": "AVC por êmbolo cerebral (B) não explica síndrome medular bilateral com nível sensitivo; tabes dorsal (C) costuma abolir vibração/propriocepção e produzir ataxia, diferentemente do caso; mielorradiculopatia esquistossomótica (A) é diferencial regional. Rotular compressão medular como lesão do neurônio motor INFERIOR é simplificação: sinais podem ser flácidos na fase aguda e piramidais depois.\n\nAtenção: Endocardite/espondilodiscite bacteriana também são diferenciais devido ao sopro e febre; o agente não está comprovado pelo enunciado.",
    "tip": "Dor vertebral + febre/emagrecimento + déficit motor + disfunção esfincteriana = compressão medular até prova em contrário: imagem urgente e avaliação especializada.",
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
    "explanation": "Pequenas pápulas agrupadas em crianças de creche, no tronco e axilas, são compatíveis com molusco contagioso por poxvírus, tipicamente papuloso, brilhante e às vezes umbilicado. A doença costuma remitir espontaneamente e a maioria dos casos não precisa de destruição das lesões. Recomendações do CDC e de serviços pediátricos não exigem afastamento de creche/escola apenas pelo molusco.",
    "commentary": "B erra ao usar aciclovir, que não trata poxvírus; C propõe remoção traumática rotineira; D implica afastamento até remissão, o que pode durar meses ou anos e não é recomendado. Orientar cobrir lesões quando possível, higiene e não compartilhar toalhas.",
    "tip": "Molusco contagioso em creche costuma ser autolimitado: não afastar por meses. Cobrir lesões e evitar compartilhamento de toalhas.",
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
    "explanation": "Dor escrotal súbita e intensa, testículo alto, aumentado e em posição anômala são sinais típicos de torção testicular. O tempo total já se aproxima de 18 horas, mas pode existir tecido viável mesmo depois da janela ideal: a exploração cirúrgica não deve ser atrasada por Doppler se a suspeita clínica é alta. Na cirurgia realiza-se destorção e avaliação da perfusão; orquiectomia somente se testículo inviável, e orquidopexia contralateral.",
    "commentary": "A e C negligenciam urgência vascular; B condiciona cirurgia a ultrassom Doppler, que pode atrasar atendimento, apesar de 'orquidopexia' ser o procedimento se viável; D acerta urgência de explorar, mas estabelece orquiectomia antecipadamente sem prova de necrose.",
    "tip": "Dor escrotal súbita + testículo alto/fixo = torção; o relógio importa, mas não exclui resgate. Cirurgia imediata e decisão de viabilidade intraoperatória.",
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
