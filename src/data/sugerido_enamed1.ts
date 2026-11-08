import { Question } from '../types';

// Simulado "Sugerido ENAMED - 1" — 100 questões no formato ENAMED.
// As de nº 1, 4, 21, 53, 66, 69, 76 e 91 são inéditas, escritas para o DEsimulados.
// Gabarito TÉCNICO, não oficial (nenhuma banca publicou gabarito para estes itens).
// Questões provisórias (com * no material de origem) levam `alert`.
export const SUGERIDO_ENAMED_1_QUESTIONS: Question[] = [
  {
    "id": "sug-enamed1-1",
    "module": "Clínica Médica",
    "text": "Mulher de 72 anos, hipertensa em uso de losartana, procura a Unidade de Pronto Atendimento com palpitações e cansaço aos esforços iniciados há cerca de 5 dias. Nega dor torácica, síncope ou dispneia em repouso.\n\nAo exame: lúcida e orientada; PA 134 × 82 mmHg; FC 128 bpm, irregular; SatO₂ 97% em ar ambiente; ausculta pulmonar sem estertores; sem edema de membros inferiores.\n\nO ECG mostra ritmo irregularmente irregular, sem ondas P identificáveis e com QRS estreito.\n\nQual é a conduta mais adequada neste momento?",
    "options": [
      "(A) Cardioversão elétrica sincronizada imediata.",
      "(B) Controle da frequência cardíaca com betabloqueador e início de anticoagulação oral.",
      "(C) Amiodarona endovenosa e alta após reversão, sem anticoagulação.",
      "(D) Encaminhamento para ablação por cateter em caráter de urgência."
    ],
    "correctAnswer": 1,
    "explanation": "O quadro é de fibrilação atrial com resposta ventricular elevada, em paciente hemodinamicamente estável e com início há mais de 48 horas. Sem instabilidade, a prioridade é controlar a frequência (betabloqueador é a primeira escolha quando não há insuficiência cardíaca descompensada) e avaliar o risco tromboembólico.\n\nPelo CHA₂DS₂-VA, a paciente soma 2 pontos (idade entre 65 e 74 anos e hipertensão), o que indica anticoagulação oral, preferencialmente com anticoagulante oral direto, salvo contraindicação.",
    "commentary": "Cardioversão imediata fica reservada à instabilidade hemodinâmica; com mais de 48 horas de evolução, reverter o ritmo sem anticoagulação prévia de pelo menos 3 semanas (ou ecocardiograma transesofágico) expõe a risco de AVC. A amiodarona com alta sem anticoagular ignora o mesmo risco, que independe do ritmo voltar ao sinusal. Ablação é estratégia eletiva de controle de ritmo, não conduta de urgência.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Diretriz Brasileira de Fibrilação Atrial (SBC, 2025); Diretriz ESC de Fibrilação Atrial (2024)",
    "tags": [
      "cardiologia",
      "fibrilação atrial",
      "anticoagulação"
    ]
  },
  {
    "id": "sug-enamed1-2",
    "module": "Pediatria",
    "text": "A equipe de fisioterapia de uma maternidade chama o médico plantonista para reavaliar um neonato de 28 semanas de idade gestacional, nascido há 1 hora via parto vaginal, com peso adequado. O recém-nascido foi reanimado, intubado e colocado em ventilação mecânica. A fisioterapeuta informa que, após atendimento e ajustes do ventilador, o recém-nascido permanece necessitando de FiO₂ de 50% para manter SatO₂ 92%. A radiografia de tórax evidencia infiltrado reticular em vidro moído.\n\nQual é a conduta preconizada em relação ao uso de surfactante para esse recém-nascido?",
    "options": [
      "(A) Administrar surfactante exógeno por via endotraqueal e mantê-lo em ventilação mecânica.",
      "(B) Manter observação e reservar surfactante, se houver necessidade de ventilação de alta frequência.",
      "(C) Administrar surfactante exógeno por via inalatória e transicionar para ventilação não invasiva com CPAP.",
      "(D) Aumentar a FiO₂ para 60% e administrar surfactante, se necessário."
    ],
    "correctAnswer": 0,
    "explanation": "Prematuro de 28 semanas ventilado invasivamente, com FiO₂ de 0,50 e padrão radiológico típico de deficiência de surfactante: há indicação de surfactante endotraqueal. A ventilação deve ser reavaliada e a extubação para suporte não invasivo considerada assim que for possível; não precisa permanecer ventilado obrigatoriamente.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-3",
    "module": "Cirurgia",
    "text": "Homem de 76 anos, sem comorbidades, encontra-se no 4º dia de pós-operatório de colectomia subtotal por neoplasia obstrutiva. Evoluiu com náuseas persistentes, distensão abdominal e sonolência. Ao exame: PA 95 × 60 mmHg; FC 118 bpm; mucosas secas e redução do turgor cutâneo, sem sinais de irritação peritoneal. Desde a cirurgia, está em uso de sonda nasogástrica, com débito entre 700 e 1.000 mL/dia.\n\nConsiderando a clínica do paciente, que alteração acidobásica e hidroeletrolítica se espera identificar?",
    "options": [
      "(A) Acidose respiratória hipercalêmica.",
      "(B) Alcalose respiratória hipoclorêmica.",
      "(C) Alcalose metabólica hipocalêmica.",
      "(D) Acidose metabólica hiperclorêmica."
    ],
    "correctAnswer": 2,
    "explanation": "A aspiração gástrica retira HCl, produzindo perda de hidrogênio e cloreto e alcalose metabólica hipoclorêmica. A contração de volume ativa aldosterona e favorece perda renal de potássio, resultando em hipocalemia.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-4",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 49 anos procura a Unidade Básica de Saúde com ondas de calor intensas, várias vezes ao dia, que atrapalham o sono e o trabalho. Os ciclos menstruais ficaram irregulares no último ano e a última menstruação foi há 7 meses.\n\nNão tem antecedentes de câncer de mama, trombose venosa, doença coronariana, AVC ou doença hepática. Não fuma. Tem útero. Mamografia e citologia oncótica recentes, normais. PA 124 × 80 mmHg; IMC 25 kg/m².\n\nEla deseja tratar os sintomas. Qual é a conduta indicada?",
    "options": [
      "(A) Estrogênio isolado por via oral, por tempo indeterminado.",
      "(B) Terapia hormonal com estrogênio associado a progestagênio.",
      "(C) Isoflavonas de soja como primeira linha, reservando hormônio para casos refratários.",
      "(D) Contraindicar terapia hormonal, pois a paciente tem mais de 45 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Sintomas vasomotores moderados a intensos que comprometem a qualidade de vida são a principal indicação de terapia hormonal. Em mulher com menos de 60 anos ou com menos de 10 anos de menopausa, sem contraindicações, os benefícios superam os riscos.\n\nComo a paciente tem útero, o estrogênio precisa ser associado a um progestagênio, que protege o endométrio contra hiperplasia e câncer. A dose e a duração são individualizadas e reavaliadas periodicamente.",
    "commentary": "Estrogênio isolado em mulher com útero aumenta o risco de hiperplasia e câncer de endométrio, e não se prescreve por tempo indeterminado sem reavaliação. Isoflavonas têm efeito pequeno e inconsistente sobre os fogachos. A idade de 49 anos está dentro da janela em que a terapia hormonal é mais segura, não é contraindicação.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Posicionamento da North American Menopause Society sobre terapia hormonal (2022); Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC)",
    "tags": [
      "climatério",
      "terapia hormonal"
    ]
  },
  {
    "id": "sug-enamed1-5",
    "module": "Pediatria",
    "text": "Menino de 9 anos é atendido em Unidade Básica de Saúde com quadro clínico sugestivo de dengue. Apresenta febre há 4 dias, que cessou nas últimas 12 horas. A mãe relata que a criança ficou muito sonolenta e parou de urinar.\n\nAo exame físico, o paciente encontra-se letárgico, com extremidades frias e pálidas, tempo de enchimento capilar de 4 segundos, pulso radial filiforme e rápido. A pressão arterial não pôde ser aferida com precisão.\n\nQual é a prescrição imediata de acordo com a classificação funcional do caso?",
    "options": [
      "(A) 20 mL/kg de solução de Cloreto de Sódio 0,9%, via endovenosa, em até 20 minutos.",
      "(B) 10 mL/kg de solução de Cloreto de Sódio 0,9%, via parenteral, em 60 minutos.",
      "(C) 10 mL/kg de sais de reidratação oral, via sonda nasogástrica, em 90 minutos.",
      "(D) 20 mL/kg de sais de reidratação oral, via oral, em 120 minutos."
    ],
    "correctAnswer": 0,
    "explanation": "Letargia, oligúria, extremidades frias, enchimento capilar de 4 segundos e pulso filiforme caracterizam choque por dengue (grupo D). A reposição inicial é cristalóide isotônico intravenoso a 20 mL/kg em até 20 minutos, com reavaliações frequentes.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-6",
    "module": "Saúde Coletiva",
    "text": "A equipe multiprofissional de determinada Unidade Básica de Saúde realiza uma análise do perfil das mulheres que fazem acompanhamento médico no território. Os dados do SISAB e do e-SUS revelam que 37% das mulheres com idade entre 45 e 59 anos relataram queixas moderadas a graves de insônia, irritabilidade, fogachos e sintomas urogenitais; dessas mulheres, 68% têm diagnóstico de hipertensão e 32% são diabéticas.\n\nConsiderando-se esse contexto e as políticas públicas brasileiras, quais estratégias devem ser aplicadas?",
    "options": [
      "(A) Estruturar fluxos para a Rede de Atenção Psicossocial e orientar o rastreio de outras comorbidades.",
      "(B) Referenciar os casos com múltiplas comorbidades para a Rede Alyne e propiciar matriciamento dos casos.",
      "(C) Ampliar a abordagem multiprofissional das comorbidades e realizar ações educativas no território.",
      "(D) Articular cuidado com a rede intersetorial e abordar as interseccionalidades das mulheres."
    ],
    "correctAnswer": 2,
    "explanation": "O diagnóstico territorial mostra sintomas do climatério associados a hipertensão e diabetes. A APS deve integrar cuidado multiprofissional, manejo das comorbidades e educação em saúde, sem encaminhamento indiscriminado a serviços especializados.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-7",
    "module": "Clínica Médica",
    "text": "Mulher de 38 anos, professora universitária, é atendida no ambulatório de clínica médica queixando-se de ganho de peso de 6 kg em 2 meses. Durante a consulta, relata que sempre foi altamente produtiva do ponto de vista acadêmico e profissional, mas refere dificuldade de se concentrar no trabalho, hipersonia, fadiga, desânimo e sentimento constante de tristeza, com início há 3 meses. Exames laboratoriais, como hemograma, dosagem sérica de TSH e bioquímica sérica, sem alterações.\n\nConsiderando-se a principal hipótese diagnóstica, qual é a primeira linha de tratamento farmacológico indicada nesse caso?",
    "options": [
      "(A) Topiramato.",
      "(B) Fluoxetina.",
      "(C) Lisdexanfetamina.",
      "(D) Amitriptilina."
    ],
    "correctAnswer": 1,
    "explanation": "Tristeza, anedonia/desânimo, hipersonia, dificuldade de concentração e alterações ponderais por 3 meses sugerem episódio depressivo. A fluoxetina é ISRS de primeira linha; a avaliação clínica deve incluir risco de suicídio e investigação de história de mania/hipomania.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-8",
    "module": "Clínica Médica",
    "text": "Homem de 66 anos, com doença renal crônica estágio G4, creatinina basal 2,4 mg/dL, diabetes mellitus e insuficiência cardíaca, é levado à emergência pelo SAMU com quadro de febre baixa, inapetência, diarreia e vômitos há 3 dias.\n\nFaz uso de enalapril 20 mg/dia, carvedilol 25 mg/dia, furosemida 40 mg/dia, dapagliflozina 10 mg/dia, insulina glargina 30 UI/dia e atorvastatina 40 mg/dia.\n\nNa admissão, apresenta PA 92 × 58 mmHg, FC 112 bpm, FR 22 irpm e temperatura axilar 37,8 °C. Exame físico: perfusão lentificada; desidratado (2+/4+), sonolento, mas responsivo.\n\nOs exames laboratoriais mostram os seguintes resultados:\n\n• Creatinina sérica: 3,90 mg/dL (VR: 0,70 a 1,20 mg/dL)\n• pH (gasometria arterial): 7,33 (VR: 7,35 a 7,45)\n• Bicarbonato (HCO₃⁻): 18 mEq/L (VR: 22 a 26 mEq/L)\n• Glicemia: 132 mg/dL (VR: 70 a 99 mg/dL)\n• Corpos cetônicos (sangue): Positivo (VR: Negativo)\n• Lactato: 1,8 mmol/L (VR: Até 2,0 mmol/L)\n• Potássio: 4,9 mEq/L (VR: 3,5 a 5,1 mEq/L)\n\nQual é o manejo em relação ao uso da dapagliflozina nesse caso?",
    "options": [
      "(A) Descontinuar definitivamente.",
      "(B) Reduzir a dose.",
      "(C) Manter prescrição habitual.",
      "(D) Suspender temporariamente."
    ],
    "correctAnswer": 3,
    "explanation": "Desidratação, hipotensão, lesão renal aguda, acidose e cetonemia durante uso de inibidor de SGLT2 exigem suspensão temporária. Deve-se investigar e tratar cetoacidose euglicêmica, que pode ocorrer mesmo com glicemia de 132 mg/dL.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
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
    "explanation": "Febre alta por 3 dias seguida de desaparecimento da febre e exantema róseo centrado no tronco indica exantema súbito (roséola, HHV-6/7). Em criança estável, a conduta é suporte sintomático; não requer exame viral rotineiro.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-10",
    "module": "Cirurgia",
    "text": "Homem de 30 anos sofreu trauma contuso de alto impacto, em região pélvica, ao andar de bicicleta.\n\nNo exame físico inicial no serviço de emergência, apresentou Glasgow 15, múltiplas escoriações pelo corpo, hematoma escrotal bilateral, bexiga palpável e dolorosa à palpação, além de sangue vivo em pequena quantidade no meato uretral. Apresenta-se hemodinamicamente estável.\n\nQual o procedimento para o quadro clínico apresentado?",
    "options": [
      "(A) Cistostomia por punção.",
      "(B) Uretrografia de urgência.",
      "(C) Laparotomia exploradora.",
      "(D) Sondagem uretral."
    ],
    "correctAnswer": 1,
    "explanation": "Sangue no meato uretral e hematoma escrotal após trauma pélvico sugerem lesão uretral. Deve-se investigar com uretrografia retrógrada antes de tentar sondagem uretral, evitando agravar possível ruptura.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-11",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 32 anos, sem comorbidades, comparece ao serviço de urgência com dor pélvica intensa, de início súbito há 6 horas, acompanhada de sangramento vaginal de pequena quantidade. A paciente relata ser sexualmente ativa, não usar método contraceptivo e ter histórico de ciclos menstruais irregulares. A data da última menstruação foi há 90 dias.\n\nAo exame: afebril, FC 84 bpm, PA 110 × 70 mmHg, abdome doloroso à palpação de andar inferior, sem sinais de irritação peritoneal, colo uterino fechado, ausência de sangramento ativo.\n\nExames complementares revelaram: β-HCG 2.500 mUI/mL. Ultrassonografia transvaginal: útero de dimensões normais, linha endometrial de 8 mm, e imagem arredondada em anexo direito, paraovariana, com halo hiperecogênico, medindo aproximadamente 2,5 cm de diâmetro, com pequena quantidade de líquido livre em pelve.\n\nO diagnóstico provável dessa paciente é:",
    "options": [
      "(A) Ameaça de aborto.",
      "(B) Aborto incompleto.",
      "(C) Gestação anembrionada.",
      "(D) Gestação ectópica."
    ],
    "correctAnswer": 3,
    "explanation": "β-hCG positivo e imagem anexial extrauterina com halo hiperecogênico e pequeno líquido livre sugerem gestação ectópica tubária. A estabilidade hemodinâmica permite decidir entre tratamento clínico e cirúrgico conforme critérios específicos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-12",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos, com diabetes mellitus tipo 2 há 6 anos, com seguimento regular em Unidade Básica de Saúde, em uso de metformina na dose máxima tolerada, comparece a uma consulta de rotina.\n\nEstá sem queixas. Refere padrão alimentar irregular e atividade física esporádica. Apresenta IMC 32 kg/m², PA 140 × 80 mmHg, glicemia de jejum 170 mg/dL, HbA1c 8,2%, taxa de filtração glomerular 46 mL/min/1,73 m² e perfil lipídico normal.\n\nAlém do reforço de medidas não farmacológicas e da manutenção da prescrição de metformina, qual é a opção terapêutica nesse caso?",
    "options": [
      "(A) Gliclazida.",
      "(B) Pioglitazona.",
      "(C) Dapagliflozina.",
      "(D) Insulina NPH."
    ],
    "correctAnswer": 2,
    "explanation": "Diabetes não controlado com metformina, obesidade e TFG de 46 mL/min/1,73 m² favorecem a adição de inibidor de SGLT2, com benefício renal/cardiovascular. A queda glicêmica com TFG reduzida pode ser modesta; considerar também agonista de GLP-1 conforme acesso e perfil.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-13",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante visita domiciliar em determinada comunidade rural, a agente comunitária de saúde de uma equipe da Estratégia de Saúde da Família identifica que uma adolescente de 17 anos realizou um teste de gravidez há 2 meses, cujo resultado foi positivo, mas não fez pré-natal até o momento. A jovem refere corrimento vaginal e desconforto em baixo-ventre.\n\nQuais são as ações necessárias para o manejo da adolescente nesse caso?",
    "options": [
      "(A) Acolhê-la na unidade de saúde, registrar a gestação no e-SUS, realizar os exames de rotina e encaminhá-la ao ambulatório especializado.",
      "(B) Solicitar transporte sanitário e encaminhá-la à maternidade de referência para avaliação clínica.",
      "(C) Encaminhá-la ao pré-natal de alto risco, além de garantir investigação diagnóstica e acompanhamento multiprofissional.",
      "(D) Iniciar pré-natal, registrar a gestação no e-SUS e garantir acompanhamento multidisciplinar na atenção primária."
    ],
    "correctAnswer": 3,
    "explanation": "Gestação na adolescência isoladamente não torna o pré-natal de alto risco obrigatório. A APS deve iniciar imediatamente o pré-natal, registrar no e-SUS, investigar corrimento e dor pélvica e organizar seguimento multidisciplinar, com encaminhamento conforme achados.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-14",
    "module": "Saúde Coletiva",
    "text": "Homem de 35 anos, com diagnóstico de esquizofrenia há 15 anos e histórico de múltiplas internações psiquiátricas, é levado pela mãe à Unidade Básica de Saúde.\n\nA mãe relata que o paciente perdeu o vínculo com os serviços especializados da rede e que, há dois meses, passou a recusar tratamento e suspendeu as medicações.\n\nAo exame psíquico, apresenta higiene preservada, mas vestimentas inadequadas para o clima; pensamento com curso lentificado e presença de delírios de autorreferência; relato de \"vozes sussurradas\"; afeto embotado; déficit leve de atenção e memória operacional.\n\nO paciente não apresenta risco iminente de auto ou heteroagressividade.\n\nNesse momento, o paciente deve ser encaminhado prioritariamente a qual dos serviços de saúde da Rede de Atenção Psicossocial?",
    "options": [
      "(A) Leito de saúde mental em hospital geral.",
      "(B) Unidade de Pronto Atendimento.",
      "(C) Centro de Atenção Psicossocial.",
      "(D) Comunidade Terapêutica."
    ],
    "correctAnswer": 2,
    "explanation": "Trata-se de transtorno psicótico crônico com descontinuação de tratamento, sem risco iminente que determine internação. O CAPS é o serviço comunitário especializado apropriado para reestabelecer vínculo, cuidado intensivo e suporte psicossocial.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-15",
    "module": "Clínica Médica",
    "text": "Mulher de 74 anos, durante visita domiciliar, queixa-se de desconforto abdominal difuso, associado a constipação e náuseas.\n\nÉ acompanhada em quimioterapia paliativa devido a um câncer de pâncreas e está em uso de morfina 10 mg via oral a cada 4 horas, com bom controle das dores abdominais, porém com piora da constipação, mantendo eliminação de flatos.\n\nO exame físico revela: paciente emagrecida, vigil e orientada; PA 125 × 75 mmHg; FC 82 bpm; FR 16 irpm; temperatura axilar 36,4 °C; abdome distendido, ruídos hidroaéreos diminuídos, sem sinais de irritação peritoneal.\n\nQual é o manejo nesse caso?",
    "options": [
      "(A) Manter a morfina e introduzir laxativo por via oral.",
      "(B) Reduzir a dose da morfina e aguardar a resolução da constipação.",
      "(C) Substituir a morfina por tramadol e prescrever supositórios de glicerina.",
      "(D) Substituir a morfina por dipirona e introduzir fibras solúveis."
    ],
    "correctAnswer": 0,
    "explanation": "Constipação induzida por opioide é frequente e não exige retirar analgesia eficaz. Mantém-se morfina e inicia-se laxativo, geralmente estimulante e/ou osmótico; avaliar fecaloma e obstrução se houver sinais sugestivos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-16",
    "module": "Pediatria",
    "text": "Uma criança de 3 anos é levada a uma Unidade Básica de Saúde para atendimento médico, com quadro de cianose perioral leve, que se intensifica durante choro ou esforço físico e melhora na posição de cócoras, segundo relato da mãe.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transposição de grandes artérias.",
      "(B) Estenose aórtica valvar.",
      "(C) Tetralogia de Fallot.",
      "(D) Anomalia de Ebstein."
    ],
    "correctAnswer": 2,
    "explanation": "Cianose aos esforços e melhora ao agachar são características da tetralogia de Fallot. A posição aumenta a resistência vascular sistêmica e reduz temporariamente o desvio direita-esquerda.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-17",
    "module": "Cirurgia",
    "text": "Homem de 28 anos, vítima de ferimento por arma branca em hemitórax direito, é admitido em serviço hospitalar de emergência após ser encontrado em via pública.\n\nO exame físico revela: paciente em regular estado geral, hidratado, acianótico, taquipneico; fácies de dor aos movimentos inspiratórios; FC 108 bpm; PA 110 × 70 mmHg; ferimento perfurocortante, de cerca de 5 cm de extensão, em região de terceiro espaço intercostal direito em linha hemiclavicular; à ausculta pulmonar, redução de murmúrio vesicular em hemitórax direito e presença de ruídos crepitantes.\n\nA conduta indicada para esse paciente no momento é realizar:",
    "options": [
      "(A) Drenagem torácica pelo local do ferimento.",
      "(B) Curativo oclusivo com fixação total do ferimento.",
      "(C) Drenagem torácica simples no quinto espaço intercostal.",
      "(D) Curativo oclusivo com fixação em três lados."
    ],
    "correctAnswer": 3,
    "explanation": "Suspeita-se de ferida torácica aspirativa/pneumotórax aberto, mas o enunciado não descreve sucção de ar pela ferida. Curativo de três lados é a resposta tradicional. Na prática contemporânea prefere-se selo torácico ventilado, monitorização para pneumotórax hipertensivo e drenagem intercostal em sítio adequado quando indicada. Logo, D é resposta clássica, não a única providência definitiva.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ressalva de diretriz). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
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
    "explanation": "BI-RADS 0 significa avaliação mamográfica incompleta, e não resultado benigno ou indicação de retorno tardio. É necessário complementar a investigação, frequentemente com ultrassonografia e/ou incidências mamográficas adicionais.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
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
    "explanation": "Febre prolongada, emagrecimento, hepatoesplenomegalia, anemia/leucopenia e hipergamaglobulinemia policlonal, em área endêmica, sugerem leishmaniose visceral. Deve-se confirmar por teste específico e avaliar gravidade.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-20",
    "module": "Saúde Coletiva",
    "text": "Em 2025, houve mudança dos critérios de pré-hipertensão das Diretrizes Brasileiras de Hipertensão Arterial (DBHA), em relação a 2020. O quadro a seguir detalha essas alterações.\n\nCritérios de pré-hipertensão das DBHA referentes a 2020 e 2025\n\n• DBHA 2020 — PAS (mmHg): 130 a 139; PAD (mmHg): e/ou 85 a 89\n• DBHA 2025 — PAS (mmHg): 120 a 139; PAD (mmHg): e/ou 80 a 89\n\nA mudança dos critérios aumentou qual característica do teste diagnóstico?",
    "options": [
      "(A) Sensibilidade.",
      "(B) Especificidade.",
      "(C) Falso-negativo.",
      "(D) Valor preditivo positivo."
    ],
    "correctAnswer": 0,
    "explanation": "Ao ampliar a faixa classificada como pré-hipertensão, o critério inclui maior número de indivíduos. Em termos de rastreio, ampliar a positividade tende a aumentar a sensibilidade, com possível redução da especificidade.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-21",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 19 anos procura a Unidade Básica de Saúde preocupada porque teve relação sexual sem preservativo há cerca de 60 horas. Não usa método contraceptivo regular. A última menstruação começou há 12 dias, com ciclos regulares. Não tem comorbidades nem usa medicamentos.\n\nNão há dispositivo intrauterino disponível na unidade. Qual é a conduta adequada?",
    "options": [
      "(A) Prescrever levonorgestrel 1,5 mg por via oral, em dose única, e orientar contracepção regular.",
      "(B) Aguardar o atraso menstrual e solicitar β-hCG antes de qualquer prescrição.",
      "(C) Informar que a contracepção de emergência só é eficaz nas primeiras 24 horas e não está mais indicada.",
      "(D) Exigir teste de gravidez negativo e a presença de um responsável antes da prescrição."
    ],
    "correctAnswer": 0,
    "explanation": "A contracepção de emergência com levonorgestrel pode ser usada até 5 dias após a relação desprotegida, com eficácia maior quanto mais cedo for tomada; o esquema preferido é 1,5 mg em dose única. Com 60 horas, ainda está indicada.\n\nO atendimento é também a oportunidade de oferecer um método contraceptivo regular e testagem para infecções sexualmente transmissíveis. Onde houver, o DIU de cobre inserido em até 5 dias é o método de emergência mais eficaz.",
    "commentary": "Esperar o atraso menstrual faz perder a janela em que o método funciona. A eficácia não se limita a 24 horas: ela diminui com o tempo, mas persiste até o quinto dia. A paciente é maior de idade, e o teste de gravidez não é pré-requisito, porque o levonorgestrel não interrompe uma gestação já implantada.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Ministério da Saúde. Cadernos de Atenção Básica nº 26 — Saúde Sexual e Saúde Reprodutiva; OMS. Critérios Médicos de Elegibilidade para Uso de Contraceptivos",
    "tags": [
      "contracepção de emergência",
      "planejamento reprodutivo"
    ]
  },
  {
    "id": "sug-enamed1-22",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos, tabagista, com diagnóstico prévio de hipertensão arterial e dislipidemia, comparece à consulta ambulatorial com queixa de dor precordial desencadeada por esforços moderados e aliviada com repouso.\n\nAtualmente, está em uso de losartana 50 mg de 12/12h, atenolol 25 mg uma vez ao dia e sinvastatina 20 mg uma vez ao dia.\n\nAo exame físico, apresenta PA 150 × 90 mmHg, sem outros achados. O perfil lipídico revela LDL 190 mg/dL e o ECG mostra sobrecarga ventricular esquerda.\n\nPara o manejo desse paciente, qual exame deve ser solicitado?",
    "options": [
      "(A) Teste ergométrico.",
      "(B) Cineangiocoronariografia.",
      "(C) Cintilografia miocárdica de perfusão.",
      "(D) Ecocardiograma transtorácico."
    ],
    "correctAnswer": 2,
    "explanation": "Dor aos esforços aliviada com repouso sugere síndrome coronariana crônica. Um exame funcional com imagem, como cintilografia de perfusão, é defensável quando a interpretação do ECG de esforço pode estar prejudicada por alterações basais de ST-T/hipertrofia; porém o enunciado descreve apenas sobrecarga ventricular esquerda, sem especificar se ST-T impede teste ergométrico. Assim, A também pode ser admissível conforme avaliação clínica, probabilidade pré-teste e capacidade de exercício. Sem mais dados, NÃO há unicidade inequívoca entre A e C.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ambiguidade entre alternativas). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-23",
    "module": "Saúde Coletiva",
    "text": "Em uma comunidade com alto índice de diarreia aguda em lactentes, uma equipe de Unidade de Saúde da Família, em reunião com lideranças locais, decide planejar uma ação de intervenção coletiva de base populacional.\n\nNesse caso, a ação com maior impacto na redução da incidência desse agravo é:",
    "options": [
      "(A) Distribuição de envelopes de sais de reidratação oral para todas as famílias com lactentes com quadro de diarreia.",
      "(B) Promoção de campanha educativa para as mães quanto à importância de se fazer terapia de reidratação oral em domicílio.",
      "(C) Realização de palestras em unidades de saúde a respeito do uso racional de antibióticos por pacientes com diarreia.",
      "(D) Conscientização das mães sobre o aleitamento materno exclusivo até os 6 meses, com a manutenção do aleitamento após a introdução alimentar."
    ],
    "correctAnswer": 3,
    "explanation": "A amamentação exclusiva até 6 meses e continuada após a introdução alimentar previne infecções gastrointestinais. Sais de reidratação oral reduzem complicações e mortalidade durante os episódios, mas não a incidência da doença.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-24",
    "module": "Cirurgia",
    "text": "Menino de 6 anos, acompanhado pela mãe, é atendido em emergência de trauma por ter sofrido queda de patinete há 6 horas, tendo evoluído com aumento de volume e dor em região supracondiliana de braço esquerdo e impossibilidade de mexer o cotovelo.\n\nÀ inspeção, são identificados aumento de volume e aparente deformidade em topografia de cotovelo esquerdo, com dor à palpação da região do úmero distal. Pulsos radial e ulnar diminuídos à esquerda. É realizada radiografia de cotovelo em AP e perfil, cujas imagens são mostradas a seguir.\n\nQual é a conduta indicada para esse paciente?",
    "options": [
      "(A) Redução incruenta com colocação de tala axilopalmar.",
      "(B) Imobilização com tala gessada em posição de Velpeau.",
      "(C) Tração no antebraço e colocação de fixador externo.",
      "(D) Fasciotomia em antebraço e redução cirúrgica da fratura."
    ],
    "correctAnswer": 0,
    "explanation": "Fratura supracondiliana deslocada de úmero em criança com pulsos diminuídos exige avaliação neurovascular imediata, redução urgente e, em geral, fixação percutânea com fios de Kirschner, seguida de imobilização. A apenas cita redução incruenta com tala, insuficiente para a fratura deslocada; D exige síndrome compartimental, não demonstrada. Falta alternativa com redução e fixação percutânea: item potencialmente anulável.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial recurso). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário.",
    "image": "/images/sugenamed1-24.PNG"
  },
  {
    "id": "sug-enamed1-25",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 28 anos, sem comorbidades, comparece a uma Unidade Básica de Saúde com queixa de lesão genital indolor, que surgiu há cerca de 3 semanas. Nega leucorreia, febre, mal-estar ou exantema cutâneo. Tem histórico de múltiplos parceiros sexuais.\n\nAo exame físico: úlcera única com base endurecida, fundo limpo, localizada em grande lábio direito, com adenomegalia próxima à lesão, não supurativa.\n\nConsiderando-se a principal hipótese diagnóstica, qual tratamento é recomendado a essa paciente?",
    "options": [
      "(A) Ceftriaxona 500 mg, intramuscular, dose única.",
      "(B) Azitromicina 1 g, por via oral, dose única.",
      "(C) Benzilpenicilina benzatina 2,4 MUI, intramuscular, dose única.",
      "(D) Doxiciclina 100 mg de 12/12 horas, por via oral, por 21 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Úlcera genital única indolor, endurecida, de fundo limpo e adenopatia não supurativa é cancro duro da sífilis primária. Usa-se penicilina benzatina 2,4 milhões UI IM em dose única para sífilis recente.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-26",
    "module": "Clínica Médica",
    "text": "Homem de 26 anos comparece a uma Unidade Básica de Saúde com queixa de febre de 39 °C há 3 dias, dores musculares de pequena intensidade, dores articulares de moderada intensidade, associadas a edema articular e aparecimento de exantema, o que o tem impedido de trabalhar e até mesmo de caminhar nesses 3 dias.\n\nQual é o diagnóstico provável nesse caso?",
    "options": [
      "(A) Dengue.",
      "(B) Zika.",
      "(C) Chikungunya.",
      "(D) Leptospirose."
    ],
    "correctAnswer": 2,
    "explanation": "A chikungunya costuma cursar com febre alta e artralgia intensa, edema articular e limitação funcional importante, que podem persistir. Dengue costuma ter mialgia mais marcante; zika geralmente apresenta quadro mais brando.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-27",
    "module": "Saúde Coletiva",
    "text": "No quadro a seguir, são apresentados os valores de prevalência da doença de Chagas em 4 municípios brasileiros, em determinado ano.\n\nPrevalência da doença de Chagas por município, em determinado ano\n\n• Município 1 — Número absoluto de casos: 1.500; Prevalência (%): 3,0; População total do município: 50.000\n• Município 2 — Número absoluto de casos: 900; Prevalência (%): 2,0; População total do município: 45.000\n• Município 3 — Número absoluto de casos: 1.625; Prevalência (%): 2,5; População total do município: 65.000\n• Município 4 — Número absoluto de casos: 864; Prevalência (%): 1,8; População total do município: 48.000\n\nConsiderando-se que o teste sorológico ELISA utilizado nesse caso apresenta sensibilidade e especificidade constantes em todos os municípios, em qual deles o valor preditivo negativo é maior para um indivíduo assintomático com resultado negativo?",
    "options": [
      "(A) 1.",
      "(B) 2.",
      "(C) 3.",
      "(D) 4."
    ],
    "correctAnswer": 3,
    "explanation": "Com sensibilidade e especificidade constantes, quanto menor a prevalência, maior tende a ser o valor preditivo negativo. O município 4 tem a menor prevalência (1,8%).",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-28",
    "module": "Clínica Médica",
    "text": "Estudante universitário de 19 anos é atendido em Unidade Básica de Saúde com queixa de tristeza persistente há cerca de 1 mês. De acordo com seu relato, tem apresentado humor rebaixado, perda de interesse nas aulas e atividades sociais, fadiga constante, insônia de manutenção e diminuição do apetite nesse período.\n\nA mãe, que o acompanha, menciona que o filho \"não está rendendo nos estudos\", que o isolamento social é notável e que o quadro está \"atrapalhando muito a vida dele\".\n\nNa história pregressa do paciente, consta que, há aproximadamente 3 meses, ele passou por um período de 5 dias em que estava \"excessivamente bem\", com energia incomum e necessidade de sono reduzida, falando muito, mais sociável e iniciando vários projetos simultaneamente. Esses sintomas eram perceptíveis por amigos e familiares, mas não causaram acentuado prejuízo social ou funcional. Não há histórico de sintomas psicóticos.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transtorno depressivo maior.",
      "(B) Transtorno ciclotímico.",
      "(C) Transtorno afetivo bipolar.",
      "(D) Transtorno depressivo misto."
    ],
    "correctAnswer": 2,
    "explanation": "O período prévio de pelo menos 4 dias com energia elevada, pouco sono, fala aumentada e mudança observável, sem prejuízo grave, é sugestivo de hipomania. O episódio depressivo atual mais a hipomania aponta para transtorno bipolar tipo II, exigindo confirmação clínica.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-29",
    "module": "Clínica Médica",
    "text": "Mulher de 23 anos comparece ao ambulatório de gastroenterologia de hospital de atenção secundária devido a dor abdominal crônica, diarreia com episódios de sangramento e emagrecimento significativo. A paciente é tabagista e não faz uso de medicações. Nega outras doenças. IMC 16,8 kg/m².\n\nAo exame físico: hipocorada (1+/4+), acianótica, anictérica e afebril; abdome escavado, flácido, com peristalse aumentada e massa palpável em fossa ilíaca direita; presença de fístula perianal. Observa-se lesão cutânea com aspecto de pioderma gangrenoso no membro inferior direito.\n\nQual é o diagnóstico provável nesse caso?",
    "options": [
      "(A) Doença de Crohn.",
      "(B) Retocolite ulcerativa.",
      "(C) Neoplasia de cólon.",
      "(D) Tuberculose intestinal."
    ],
    "correctAnswer": 0,
    "explanation": "Diarreia crônica, emagrecimento, massa em fossa ilíaca direita e sobretudo fístula perianal são muito sugestivos de doença de Crohn. Pioderma gangrenoso é manifestação extraintestinal possível.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-30",
    "module": "Pediatria",
    "text": "Lactente previamente hígido, de 8 meses, em aleitamento materno complementado com fórmula infantil e introdução adequada de alimentos, é levado a uma Unidade de Pronto Atendimento com quadro de diarreia líquida iniciado há 2 dias, com 6 a 8 evacuações/dia, sem sangue ou muco, acompanhado de vômitos esporádicos, mas com boa aceitação de líquidos e temperatura axilar de 38,2 °C.\n\nNo momento da consulta, encontra-se ativo, com boa perfusão periférica, e apresenta choro com lágrimas, mucosa úmida, tempo de enchimento capilar menor que 2 segundos e fontanela plana.\n\nAlém da administração de zinco, a conduta inicial para o caso é:",
    "options": [
      "(A) Prescrição de azitromicina.",
      "(B) Indicação de hidratação venosa.",
      "(C) Indicação de solução de reidratação oral.",
      "(D) Prescrição de albendazol."
    ],
    "correctAnswer": 2,
    "explanation": "A criança está ativa, perfundida, com lágrimas e mucosa úmida: não apresenta desidratação significativa. A reidratação oral e manutenção da alimentação são adequadas; hidratação intravenosa é reservada a situações específicas.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-31",
    "module": "Cirurgia",
    "text": "Mulher de 19 anos, previamente saudável, é levada a uma Unidade de Pronto Atendimento (UPA) após ter sofrido queda da própria altura, com traumatismo craniano e perda de consciência. A paciente chega à UPA com Glasgow 13 e é submetida à radiografia de crânio, que revela ausência de fraturas.\n\nNa sequência, é encaminhada para serviço de trauma de referência, porém, durante o trajeto, duas horas após o trauma, evolui com rebaixamento do nível de consciência.\n\nApós avaliação inicial no serviço de trauma, a paciente é submetida à tomografia de crânio, mostrada a seguir.\n\nQual é a conduta imediata nesse caso?",
    "options": [
      "(A) Aspiração de hematoma subdural agudo.",
      "(B) Drenagem de hematoma extradural.",
      "(C) Observação e suporte clínico em UTI.",
      "(D) Monitorização invasiva da pressão intracraniana."
    ],
    "correctAnswer": 1,
    "explanation": "A TC mostra coleção extra-axial hiperdensa lentiforme/biconvexa, típica de hematoma epidural, com efeito de massa e piora neurológica. Está indicada avaliação neurocirúrgica imediata para evacuação do hematoma.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ],
    "image": "/images/sugenamed1-31.PNG"
  },
  {
    "id": "sug-enamed1-32",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos, casada, primigesta, IG 8 semanas e 4 dias, comparece a uma Unidade Básica de Saúde devido a sangramento vaginal volumoso iniciado nesta manhã e dor pélvica de moderada intensidade.\n\nAo exame físico, encontra-se hemodinamicamente estável, com abdome doloroso à palpação, sem sinais de irritação peritoneal. Ao exame ginecológico, observa-se colo uterino dilatado, com sangramento ativo, sem eliminação de produtos da concepção.\n\nQual é o diagnóstico principal nesse caso?",
    "options": [
      "(A) Ameaça de abortamento.",
      "(B) Abortamento inevitável.",
      "(C) Abortamento completo.",
      "(D) Abortamento retido."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento ativo e dor com colo uterino dilatado, mas sem expulsão de produtos, caracterizam abortamento inevitável. Na ameaça de aborto o colo permanece fechado.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-33",
    "module": "Clínica Médica",
    "text": "Homem de 23 anos, previamente hígido, procura atendimento em Unidade Básica de Saúde relatando que, há cerca de duas horas, foi mordido por um gato de rua, que fugiu em seguida.\n\nA mordida resultou em ferimentos com pequenas lacerações nos dedos da mão. O paciente nega episódios anteriores de agressões desse tipo. Na cidade, no ano anterior, houve a confirmação de raiva em felinos.\n\nAlém da higienização da ferida e dos cuidados necessários para evitar suturas no ferimento, a conduta adequada nesse caso é:",
    "options": [
      "(A) Vacina antirrábica e soro antirrábico.",
      "(B) Vacina antirrábica e imunoglobulina.",
      "(C) Imunoglobulina antirrábica e soro antirrábico.",
      "(D) Vacina antirrábica e contraindicação de soro antirrábico."
    ],
    "correctAnswer": 0,
    "explanation": "Mordedura em dedos por gato não observável em região com raiva exige profilaxia pós-exposição com VACINA e imunização passiva, após limpeza adequada. A (soro antirrábico) e B (imunoglobulina antirrábica) representam modalidades alternativas de imunização passiva; diferem por origem e dose, mas ambas são agentes válidos conforme disponibilidade. Portanto há DUAS alternativas corretas na redação; forte argumento para recurso/anulação.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alsoAccepted": [
      1
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação por duplicidade): A e B estão corretas, e as duas contam como acerto aqui."
  },
  {
    "id": "sug-enamed1-34",
    "module": "Saúde Coletiva",
    "text": "Em um município de médio porte, a ocorrência de chuvas intensas desencadeou o aumento dos casos de doenças de transmissão hídrica e alimentar (DTHA). As regiões periféricas foram as mais afetadas: pessoas ficaram desalojadas e foram remanejadas para abrigos temporários; e grande parte dos imóveis ficou sem abastecimento de energia e água potável.\n\nAs equipes de saúde mantiveram os atendimentos de rotina, porém houve um aumento significativo dos casos de doenças diarreicas agudas que chegam ao serviço de saúde como demanda espontânea.\n\nNesse contexto de alerta dos serviços de saúde, o setor de vigilância epidemiológica do Ministério da Saúde deve, prioritariamente:",
    "options": [
      "(A) Promover articulação com a Secretaria de Saúde local para estabelecimento de fluxos de informação entre as esferas.",
      "(B) Ordenar a suspensão de consultas de rotina para garantir o atendimento na modalidade de acesso avançado dos usuários afetados.",
      "(C) Recomendar o uso de Hipoclorito de Sódio a 2,5% para desinfecção das superfícies nos abrigos temporários das populações.",
      "(D) Disponibilizar laboratórios móveis para análise qualitativa da água destinada ao consumo humano."
    ],
    "correctAnswer": 0,
    "explanation": "Em emergência associada a chuvas, a vigilância epidemiológica deve articular os níveis de gestão e instituir fluxos de notificação e informação para resposta coordenada. Análise da qualidade da água pertence principalmente à vigilância ambiental.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-35",
    "module": "Saúde Coletiva",
    "text": "Homem de 28 anos é levado por sua mãe à emergência de um hospital após ser encontrado inconsciente em sua residência. O rapaz estava em casa, sob vigilância de familiares, por apresentar transtorno depressivo maior com pensamentos de morte.\n\nApós realização de protocolo de ressuscitação, sem sucesso, foi constatado óbito. Na recepção do hospital, os pais e os irmãos aguardam informações, preocupados e impacientes, e interpelam o médico assim que ele surge.\n\nDiante dessa situação, ao comunicar o óbito aos familiares, o médico deve:",
    "options": [
      "(A) Levar todos a um local reservado; demonstrar empatia pelas recordações apresentadas; e oferecer-lhes a prescrição de benzodiazepínico, frente ao alto risco de desenvolvimento de sintomas ansiosos durante o período de luto.",
      "(B) Dialogar cuidadosa e honestamente com os familiares o quanto antes, na recepção; validar o sentimento de culpa que eles possam ter; e tranquilizá-los sobre os alertas que o rapaz pode ter emitido e passaram despercebidos pela família.",
      "(C) Manter comunicação acolhedora na primeira oportunidade, na recepção; demonstrar empatia pelo sentimento de tristeza que possam ter; e comunicar o óbito, fornecendo detalhes de todo o prontuário e histórico pregressos, para diminuir o sofrimento da família.",
      "(D) Disponibilizar local reservado para o diálogo; explorar o que os familiares sabem sobre a situação; acolher as emoções que surgirem; e ofertar encaminhamento a serviços de saúde, em caso de sofrimento psíquico decorrente do luto."
    ],
    "correctAnswer": 3,
    "explanation": "A comunicação de óbito deve ocorrer em local reservado, com linguagem clara, investigação do conhecimento prévio e acolhimento das reações emocionais. Oferecer suporte e acompanhamento no luto; medicamentos não são rotineiros.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-36",
    "module": "Clínica Médica",
    "text": "Homem de 27 anos comparece à consulta em Unidade Básica de Saúde com queixa de mal-estar, diminuição do apetite, inchaço em tornozelos e edema periorbital à noite, iniciados há 1 semana. Refere astenia e urina espumosa. Nega antecedentes pessoais e familiares de hipertensão, diabetes mellitus e doença renal.\n\nAo exame físico: PA 180 × 110 mmHg; edema em ambos os tornozelos, com cacifo presente.\n\nDurante a consulta, são solicitados exames complementares e agendado retorno em duas semanas.\n\nApós 15 dias, o paciente retorna com os resultados dos exames. Urina tipo I sem hematúria microscópica, com proteína 3+; bioquímica sérica com triglicerídeos, colesterol total e LDL elevados; eletroforese de proteínas com níveis de albumina séricos diminuídos; ultrassonografia de abdome com imagem sugestiva de ascite.\n\nQual é o diagnóstico provável desse paciente?",
    "options": [
      "(A) Síndrome nefrítica.",
      "(B) Síndrome nefrótica.",
      "(C) Nefropatia secundária à hipertensão.",
      "(D) Necrose tubular aguda."
    ],
    "correctAnswer": 1,
    "explanation": "Proteinúria importante, hipoalbuminemia, hiperlipidemia, edema e ascite formam o conjunto característico de síndrome nefrótica. Ausência de hematúria favorece essa hipótese, embora PA elevada requeira avaliação urgente.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-37",
    "module": "Pediatria",
    "text": "Lactente de 2 meses, previamente hígido, foi encontrado sem vida pelos pais, na mesma cama em que dormia com eles. Os pais não têm histórico de comorbidades. A análise completa post-mortem e a revisão detalhada das circunstâncias do óbito não detectaram nenhum sinal patológico interno ou externo que justificasse o ocorrido.\n\nNo que diz respeito à epidemiologia e fisiopatologia, nessa situação, a causa do óbito é compatível com:",
    "options": [
      "(A) Depressão respiratória por broncoaspiração.",
      "(B) Síndrome da morte súbita do lactente.",
      "(C) Falência das vias aéreas por asfixia mecânica.",
      "(D) Síndrome do QT longo devido à cardiopatia congênita."
    ],
    "correctAnswer": 1,
    "explanation": "A morte súbita e inexplicada de lactente, após avaliação post-mortem e investigação das circunstâncias sem causa identificada, corresponde à síndrome da morte súbita do lactente. Compartilhamento da cama é fator de risco, mas não comprova asfixia.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-38",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, com 70 kg, vítima de queimadura durante realização de churrasco em família, é levado para atendimento de emergência.\n\nO médico que o avalia inicialmente identifica áreas de queimaduras avermelhadas, edemaciadas e bolhas em tronco anterior, membros superiores anterior e posterior bilateral (inclusive palma da mão direita e dedos) e face anterior do membro inferior direito.\n\nQual é a forma correta de administração de ringer lactato nesse paciente?",
    "options": [
      "(A) 5.040 mL em 8 horas.",
      "(B) 9.450 mL em 24 horas.",
      "(C) 6.300 mL em 24 horas.",
      "(D) 2.520 mL em 8 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Estimativa pela regra dos nove no adulto: tronco anterior 18%, ambos membros superiores INTEIROS 18% (mãos incluídas) e face anterior de uma perna 9% = 45%. Diretriz ABA 2024 recomenda iniciar ressuscitação com 2 mL/kg/%SCQ em adultos com queimaduras extensas: 2×70×45=6.300 mL nas primeiras 24 horas, ajustados conforme diurese e evolução. A antiga Parkland de 4 mL/kg/% gera 12.600 mL, mas não reflete a recomendação inicial mais recente. C defensável e alinhada com ABA.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-39",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 25 anos, primigesta, sem comorbidades e assintomática, com idade gestacional de 41 semanas e 5 dias, datada pela primeira ultrassonografia feita na 9ª semana, encontra-se internada na maternidade de um hospital. O pré-natal foi realizado de forma adequada e sem intercorrências.\n\nDurante a avaliação clínica e obstétrica, foram obtidos os seguintes dados:\n\n• Pressão arterial: 110 × 60 mmHg\n• Batimentos cardíacos fetais: 140 bpm\n• Movimentação fetal: Presente\n• Fundo uterino: Compatível com a idade gestacional\n• Atividade uterina: Ausente\n• Estática fetal: Feto em situação longitudinal, com dorso à direita e apresentação cefálica\n• Exame especular: Sem evidência de perda de líquido amniótico\n• Toque vaginal: Colo uterino posterior, firme, fechado, com apagamento de 30%\n• Perfil biofísico fetal simplificado: Cardiotocografia com padrão reativo; volume de líquido amniótico normal\n\nQual é a conduta para esse caso clínico?",
    "options": [
      "(A) Expectante.",
      "(B) Amniotomia.",
      "(C) Maturação cervical.",
      "(D) Cesariana eletiva."
    ],
    "correctAnswer": 2,
    "explanation": "Com 41 semanas e 5 dias, recomenda-se programar o parto; o colo posterior, firme e fechado é desfavorável para indução imediata com ocitocina. A maturação cervical é a etapa apropriada antes da indução.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-40",
    "module": "Clínica Médica",
    "text": "Mulher de 40 anos, professora do ensino fundamental, procura Unidade Básica de Saúde para mostrar os resultados de exames realizados por conta própria em função de tristeza após perda do marido há três semanas. Não apresenta outros sintomas, e o exame físico está inalterado. Nega uso de medicamentos e de suplementos.\n\nOs resultados dos exames são os seguintes:\n\n• TSH: 7,10 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• T4 livre: 1,20 ng/dL (VR: 0,92 a 1,68 ng/dL)\n• Anti-TPO: 14 UI/mL (VR: Até 34 UI/mL)\n\nQual é a conduta adequada nesse caso?",
    "options": [
      "(A) Introdução de levotiroxina.",
      "(B) Investigação da tireoide por imagem.",
      "(C) Reavaliação clínica periódica.",
      "(D) Prescrição de sertralina."
    ],
    "correctAnswer": 2,
    "explanation": "TSH 7,1 com T4 livre normal indica hipotireoidismo subclínico leve. Em mulher de 40 anos sem sintomas atribuíveis à tireoide e anti-TPO negativo, costuma-se repetir TSH/T4 e acompanhar, em vez de iniciar levotiroxina de imediato.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-41",
    "module": "Clínica Médica",
    "text": "Uma paciente de 29 anos é avaliada em ambulatório de referência devido a fadiga persistente, fenômeno de Raynaud e artralgias migratórias nas mãos.\n\nDurante o exame físico, observam-se edema de mãos e discreta rigidez matinal. Não há rash cutâneo, mas a paciente refere episódios de dificuldade para engolir sólidos.\n\nExames laboratoriais mostram hemograma normal, PCR moderadamente elevada e painel de autoanticorpos com os seguintes resultados:\n\n• Fator antinuclear (FAN): Positivo, padrão nuclear pontilhado grosso (1:1280)\n• Anti-RNP: Positivo, em altos títulos\n• Anti-DNA nativo: Negativo\n• Anti-Sm: Negativo\n• Anti-Scl-70: Negativo\n• Anti-Jo-1: Negativo\n\nNesse caso, o diagnóstico provável é:",
    "options": [
      "(A) Polimiosite.",
      "(B) Esclerose sistêmica.",
      "(C) Lúpus eritematoso sistêmico.",
      "(D) Doença mista do tecido conjuntivo."
    ],
    "correctAnswer": 3,
    "explanation": "Anti-U1-RNP em altos títulos com Raynaud, mãos edemaciadas, artralgias e disfagia sugere doença mista do tecido conjuntivo. Reúne características de doenças do espectro de esclerose sistêmica, lúpus e miosite.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-42",
    "module": "Pediatria",
    "text": "Menino de 15 meses, em aleitamento materno até 4 meses, é atendido em Unidade Básica de Saúde para consulta de rotina. Ao exame físico, apresenta palidez cutânea. Os exames laboratoriais revelaram os seguintes resultados:\n\n• Hemoglobina: 8,1 g/dL (VR: 10,5 a 14,2 g/dL)\n• Volume Corpuscular Médio: 66 fL (VR: 75 a 87 fL)\n• Concentração de Hemoglobina Corpuscular Média: 29 g/dL (VR: 30 a 33 g/dL)\n• Amplitude de Distribuição dos Eritrócitos (RDW): 18,5% (VR: 11,5 a 15%)\n• Plaquetas: 402.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Ferritina: 9 ng/L (VR: 40 a 300 ng/mL)\n• Eletroforese Hemoglobina A2: 3,0% (VR: Menor que 3,5%)\n\nRDW: Red Cell Distribution Width.\n\nNesse caso, os diagnósticos diferenciais incluem:",
    "options": [
      "(A) Deficiência de ferro e de ácido fólico, além de anemia falciforme.",
      "(B) Deficiência de ferro e de B12, além de anemia de doença crônica.",
      "(C) Deficiência de ferro, talassemias e anemia sideroblástica.",
      "(D) Traço falcêmico, esferocitose hereditária e anemia ferropriva."
    ],
    "correctAnswer": 2,
    "explanation": "Anemia microcítica/hipocrômica com RDW elevado e ferritina muito baixa indica deficiência de ferro. Talassemias e anemia sideroblástica entram no diferencial de microcitose, ainda que os dados favoreçam claramente anemia ferropriva.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-43",
    "module": "Cirurgia",
    "text": "Homem de 60 anos, passageiro no banco traseiro de um automóvel, usando cinto de segurança de três pontos, envolve-se em uma colisão frontal. É admitido em pronto-socorro com dor em escoriação oblíqua em face anterior do tórax, com murmúrio vesicular presente bilateral e simétrico.\n\nEvolui com dificuldade respiratória, FR 28 irpm, PA 110 × 60 mmHg, turgência jugular a 30°, abafamento de bulhas cardíacas e pulso paradoxal.\n\nQual é o principal diagnóstico nesse caso?",
    "options": [
      "(A) Contusão miocárdica.",
      "(B) Pneumotórax hipertensivo.",
      "(C) Tamponamento cardíaco.",
      "(D) Rotura de aorta ascendente."
    ],
    "correctAnswer": 2,
    "explanation": "Turgência jugular, bulhas abafadas e pulso paradoxal após trauma torácico compõem quadro típico de tamponamento cardíaco. É urgência por comprometimento do enchimento ventricular.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 21 anos, submetida há 4 meses à remoção cirúrgica de dois condilomas acuminados na vulva, comparece à consulta em ambulatório de atenção secundária.\n\nSeus exames não identificaram lesões na vagina nem no colo uterino (citologia oncótica e colposcopia normais). O exame anatomopatológico revelou neoplasia epitelial de baixo grau nos condilomas.\n\nNão foram encontradas novas lesões condilomatosas, mas foram identificadas poucas áreas acetobrancas esparsas na vulva após administração de ácido acético.\n\nNesse caso, qual é a conduta indicada?",
    "options": [
      "(A) Realizar seguimento clínico periódico.",
      "(B) Solicitar genotipagem de vírus.",
      "(C) Realizar biópsia das lesões.",
      "(D) Prescrever podofilotoxina."
    ],
    "correctAnswer": 0,
    "explanation": "VIN/LSIL vulvar associada a HPV e excisada pode exigir seguimento. Áreas acetobrancas isoladas após ácido acético são inespecíficas e não autorizam diagnóstico de recidiva; porém, se forem lesões clínicas suspeitas ou persistentes, biópsia é indicada para excluir HSIL. A adequação de A depende da aparência detalhada das áreas; a redação deixa espaço para questionamento sobre C.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ponto discutível). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 22 anos, com 24 semanas de gestação, avaliada em Unidade Básica de Saúde, vem apresentando febre de 38 °C há 3 dias, acompanhada de tosse, coriza, odinofagia, inapetência e anosmia. Nega outras queixas ou comorbidades. Mora com o marido e um filho de 1 ano de idade, ambos assintomáticos.\n\nAo exame físico: paciente corada e hidratada; FR 18 irpm; FC 92 bpm; PA 110 × 60 mmHg; SatO₂ 98% em ar ambiente; sem alterações à ausculta cardíaca e respiratória. Batimentos cardíacos fetais de 148 bpm e altura uterina de 22 cm.\n\nRealizou testes para vírus respiratórios, com resultado positivo para influenza A.\n\nAlém de orientação para sinais de gravidade, isolamento domiciliar, notificação e monitoramento por teleconsulta, quais condutas são indicadas para o caso?",
    "options": [
      "(A) Prescrever oseltamivir para a gestante como tratamento e observar surgimento de sintomas gripais na criança.",
      "(B) Prescrever sintomáticos para a gestante e quimioprofilaxia com oseltamivir para criança.",
      "(C) Prescrever oseltamivir para a gestante como tratamento e quimioprofilaxia para a criança.",
      "(D) Prescrever sintomáticos para a gestante e observar surgimento de sintomas gripais na criança."
    ],
    "correctAnswer": 0,
    "explanation": "A gestante com influenza confirmada é grupo de risco: iniciar oseltamivir sem aguardar ou excluir tratamento por ter passado de 48 horas. Criança domiciliar de 1 ano assintomática não recebe quimioprofilaxia automaticamente; a decisão depende de critérios específicos (risco, intensidade e momento de exposição). A é a melhor opção se não houver critério adicional para profilaxia do contato. Em caso de indicação individual, C poderia ser considerada.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (condicional). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-46",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos comparece a uma Unidade de Pronto Atendimento com queixa de dor torácica em queimação, retroesternal, com duração aproximada de 2 horas. É hipertenso controlado com uso de enalapril 10 mg ao dia, sem outras comorbidades.\n\nRelata piora da dor após alimentação volumosa e ao se deitar, com alívio parcial quando se senta. Nega irradiação para membros superiores, dispneia, sudorese, náuseas, vômitos ou síncope.\n\nÀ admissão, o paciente encontra-se hemodinamicamente estável, com sinais vitais dentro da normalidade. O exame físico não evidencia alterações relevantes. São realizados eletrocardiogramas e dosagens de troponina de forma seriada, sem alterações.\n\nQual exame deve ser realizado para confirmação do diagnóstico provável nesse caso?",
    "options": [
      "(A) Tomografia de tórax sem contraste.",
      "(B) Ecocardiograma com estresse farmacológico.",
      "(C) pHmetria esofagiana de 24 horas.",
      "(D) Angiotomografia de artérias pulmonares."
    ],
    "correctAnswer": 2,
    "explanation": "Piora após refeição e decúbito, alívio sentado e investigação cardíaca aguda negativa sugerem refluxo gastroesofágico. A pHmetria de 24 h documenta exposição ácida quando necessária para confirmar o diagnóstico; na prática, pode-se iniciar prova terapêutica em quadro típico sem sinais de alarme.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-47",
    "module": "Pediatria",
    "text": "Uma criança de 6 anos é levada a uma Unidade Básica de Saúde para consulta por apresentar quadro, iniciado há 3 anos, de evacuações infrequentes (uma vez por semana) e fezes endurecidas, além de escapes fecais involuntários iniciados há 6 meses.\n\nSegundo relato da mãe, a criança tem histórico de comportamento retentivo e dor ao evacuar. Ao exame físico, observa-se sigmoide palpável.\n\nQual é a conduta terapêutica de primeira linha nesse caso?",
    "options": [
      "(A) Óleo mineral via oral, associado a acompanhamento multiprofissional e dieta rica em fibras insolúveis e líquidos.",
      "(B) Lactulose e clisteres com enema fosfatado, para desimpactação fecal e manutenção do hábito intestinal regular.",
      "(C) Polietilenoglicol 4000, para desimpactação fecal e manutenção do hábito intestinal regular, associado a treinamento intestinal e dieta rica em fibras e líquidos.",
      "(D) Lavagem intestinal, com indicação de dieta isenta de resíduos e encaminhamento para posterior avaliação pediátrica."
    ],
    "correctAnswer": 2,
    "explanation": "Constipação funcional com retenção e escape fecal indica impactação fecal. Polietilenoglicol é primeira linha para desimpactação e manutenção, associado a treino de toalete e hábitos alimentares.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-48",
    "module": "Cirurgia",
    "text": "Homem de 18 anos sofre um acidente ao andar de bicicleta, segurando-se na traseira de um caminhão, sendo projetado a seis metros de distância.\n\nÉ atendido pelo SAMU, apresentando Glasgow 8, cianose de extremidades, respiração ruidosa, múltiplas lesões faciais com sangramento e equimose periorbitária bilateral.\n\nÉ feita uma tentativa de laringoscopia, sem sucesso. Paciente evolui para quadro de apneia.\n\nNesse caso, qual é o procedimento imediato para garantir acesso à via aérea?",
    "options": [
      "(A) Cricotireoidostomia por punção.",
      "(B) Traqueostomia de emergência.",
      "(C) Máscara laríngea.",
      "(D) Intubação nasotraqueal."
    ],
    "correctAnswer": 1,
    "explanation": "É um cenário não consigo intubar/não consigo oxigenar (apneia após tentativa de laringoscopia, trauma facial grave). A via aérea cirúrgica de escolha no ADULTO costuma ser cricotireoidostomia CIRÚRGICA, não oferecida. A cricotireoidostomia por punção é método temporário de oxigenação, e traqueostomia de emergência (B) é mais lenta e tecnicamente exigente. Nenhuma alternativa descreve de modo adequado o acesso cirúrgico preferencial: item ambíguo/potencialmente anulável; B não deve ser ensinada como padrão de primeira escolha.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
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
    "explanation": "Massa anexial heterogênea dolorosa com ausência de fluxo ao Doppler levanta forte suspeita de torção anexial; é emergência cirúrgica. Laparoscopia permite confirmar e destorcer, priorizando preservação ovariana quando viável.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-50",
    "module": "Saúde Coletiva",
    "text": "Em reunião de Equipe de Saúde da Família, uma agente comunitária de saúde informa que, na creche localizada em sua microárea, ocorreram vinte casos de diarreia no último mês.\n\nQual é a abordagem inicial no plano de enfrentamento dessa situação?",
    "options": [
      "(A) Convocar todas as crianças e profissionais da creche para consulta na Unidade Básica de Saúde e solicitar exames de fezes.",
      "(B) Realizar reuniões com a creche sobre a importância da hidratação oral e medidas de prevenção e controle adequadas.",
      "(C) Visitar a creche para investigar os casos suspeitos e notificar o surto de doença diarreica à Vigilância em Saúde do Município.",
      "(D) Solicitar o fechamento da creche até que haja limpeza e desinfecção de todos os ambientes e utensílios com solução de hipoclorito."
    ],
    "correctAnswer": 2,
    "explanation": "Vinte casos concentrados em creche exigem investigação do possível surto, busca de vínculo epidemiológico e comunicação à vigilância municipal. Medidas educativas são importantes, mas não substituem investigação inicial.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-51",
    "module": "Clínica Médica",
    "text": "Uma adolescente de 17 anos, estudante do terceiro ano do ensino médio, procura uma Unidade Básica de Saúde com queixa de aumento de apetite e de peso nos últimos meses.\n\nRelata que está ingerindo quantidades maiores de alimentos nas refeições principais e também fora delas e que, mais de uma vez por semana, precisa induzir vômito, por se sentir mal quanto ao excesso de comida ingerida.\n\nRefere que passou a ir diariamente à academia e que faz uso, por conta própria, de laxantes, com diarreias frequentes, e furosemida.\n\nAfirma que tem se sentido muito preocupada com várias questões e problemas em casa, além de estar nervosa em razão da proximidade das provas do vestibular.\n\nRefere, ainda, ter crises de ansiedade, vontade súbita de chorar, irritabilidade, dificuldade de socialização e cansaço.\n\nO exame revela antropometria com altura 1,69 m, peso 62,8 kg, IMC 22 kg/m², mucosas desidratadas 2+/4+.\n\nQual distúrbio eletrolítico mais provavelmente se associa ao quadro apresentado?",
    "options": [
      "(A) Hiponatremia.",
      "(B) Hipocalemia.",
      "(C) Hipernatremia.",
      "(D) Hipercalemia."
    ],
    "correctAnswer": 1,
    "explanation": "Vômitos autoinduzidos, diuréticos e laxantes provocam perdas de potássio e alcalose por vômitos, podendo causar hipocalemia grave e arritmias. O quadro sugere transtorno alimentar com comportamentos purgativos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-52",
    "module": "Pediatria",
    "text": "Menino de 7 anos, previamente hígido, é levado ao pronto atendimento com história de coriza e espirros há 2 dias. Iniciou febre há 24 horas, associada à náusea e astenia. Seu irmão mais novo apresentou quadro semelhante na semana anterior.\n\nTemperatura axilar: 38,9 °C. Exame físico: hiperemia tonsilar bilateral. Ausculta cardíaca: sopro sistólico 2+/4+, audível na borda esternal esquerda média, que reduz de intensidade com a manobra de Valsalva e a posição ortostática. Ausência de outras alterações.\n\nEm relação ao sopro cardíaco, a conduta indicada nesse caso é:",
    "options": [
      "(A) Realizar eletrocardiografia.",
      "(B) Solicitar ecocardiografia.",
      "(C) Acompanhar o paciente ambulatorialmente.",
      "(D) Encaminhar o paciente à cardiologia pediátrica."
    ],
    "correctAnswer": 2,
    "explanation": "Sopro sistólico leve que diminui ao ficar em pé ou com Valsalva, no contexto de febre e sem sinais cardíacos associados, sugere sopro inocente de fluxo. Acompanhar após resolução do quadro febril; investigar se persistirem características patológicas.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-53",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, etilista, está internado há 3 dias com pneumonia em base esquerda, em uso de ceftriaxona e azitromicina. Mantém febre de 38,6 °C e dor ventilatória à esquerda.\n\nA radiografia de controle mostra derrame pleural que ocupa cerca de um terço do hemitórax esquerdo. A ultrassonografia confirma derrame livre, com finos septos. A toracocentese diagnóstica obtém líquido turvo, não purulento, com os seguintes resultados:\n\n• pH: 7,05\n• Glicose: 32 mg/dL (glicemia simultânea: 110 mg/dL)\n• DHL: 1.450 U/L (DHL sérica: 230 U/L)\n• Bacterioscopia (Gram): negativa\n\nQual é a conduta indicada?",
    "options": [
      "(A) Manter o antibiótico e repetir a radiografia em 7 dias.",
      "(B) Drenagem torácica tubular, mantendo a antibioticoterapia.",
      "(C) Pleurodese com talco na mesma internação.",
      "(D) Suspender o antibiótico e iniciar furosemida."
    ],
    "correctAnswer": 1,
    "explanation": "O líquido é um exsudato (DHL pleural muito acima de dois terços do limite superior sérico), e o pH abaixo de 7,2 com glicose baixa define derrame parapneumônico complicado, mesmo com Gram negativo. Esse derrame não se resolve só com antibiótico.\n\nA conduta é drenar o espaço pleural com dreno torácico e manter a antibioticoterapia. Se a drenagem for insuficiente por septações, considera-se fibrinolítico intrapleural ou abordagem cirúrgica (videotoracoscopia).",
    "commentary": "Apenas manter o antibiótico deixa evoluir para empiema organizado e encarceramento pulmonar. Pleurodese é usada em derrames recorrentes, como os neoplásicos, e não em infecção ativa. O derrame não é transudato de congestão: diurético não tem papel e o antibiótico não deve ser suspenso.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "British Thoracic Society Guideline for Pleural Disease (2023)",
    "tags": [
      "pneumologia",
      "derrame pleural",
      "pneumonia"
    ]
  },
  {
    "id": "sug-enamed1-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher procura atendimento no 12º dia pós-parto normal por apresentar febre de 40 °C e dor na mama esquerda.\n\nO exame físico revela aumento de temperatura, hiperemia e aumento do volume no quadrante medial superior da mama. Não foi evidenciada área de amolecimento nem ponto de flutuação.\n\nO exame ultrassonográfico mostra área delimitada medindo 4 cm de conteúdo líquido espesso na região.\n\nQual é o manejo adequado para esse caso?",
    "options": [
      "(A) Realizar drenagem cirúrgica com colocação de dreno.",
      "(B) Puncionar área com agulha grossa para esvaziamento do abscesso.",
      "(C) Prescrever compressa aquecida até drenagem espontânea do abscesso.",
      "(D) Orientar a suspensão da amamentação até resolução do quadro."
    ],
    "correctAnswer": 1,
    "explanation": "Ultrassom identifica coleção espessa de 4 cm compatível com abscesso mamário mesmo sem flutuação. A punção aspirativa guiada por ultrassom é opção inicial em muitos casos, associada a antibiótico e manutenção da lactação quando possível.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-55",
    "module": "Pediatria",
    "text": "Menino de 3 anos é levado pela mãe para consulta em uma Unidade Básica de Saúde. Foi acompanhado regularmente até 1 ano de idade e, após esse período, como nunca esteve doente, não foi mais levado para atendimento.\n\nA situação vacinal está adequada até os 12 meses, sem novas vacinas desde então. O município está monitorando casos crescentes de varicela na região.\n\nConsiderando-se o aumento de casos de varicela nesse município, qual é a orientação em relação ao esquema vacinal da criança?",
    "options": [
      "(A) Primeira dose nesta consulta e dose de reforço em 30 dias.",
      "(B) Dose de reforço aos 5 anos.",
      "(C) Primeira dose nesta consulta e dose de reforço aos 4 anos.",
      "(D) Manutenção do esquema vacinal atual."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com vacinas em dia só até 12 meses perdeu a primeira dose de varicela, habitualmente aos 15 meses pelo PNI. Aplique dose de resgate agora aos 3 anos e prossiga com segunda dose aos 4 anos segundo calendário do PNI. A nota operacional sobre intervalos em situações especiais/campanhas pode requerer adaptação. Avaliar toda a carteira vacinal.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-56",
    "module": "Saúde Coletiva",
    "text": "Determinada equipe de Saúde da Família está em treinamento de atualização a respeito de vacinação. Uma das técnicas de enfermagem dessa equipe solicita esclarecimentos sobre a vacina contra o papilomavírus humano em dose única.\n\nCom base nas recomendações do Ministério da Saúde e Sociedade Brasileira de Imunização acerca dessa vacina, qual evidência subsidia o esquema em dose única?",
    "options": [
      "(A) A vacinação de meninos confere proteção individual, com baixa contribuição para a imunidade de grupo.",
      "(B) A vacina promove maior adesão com aumento da cobertura, sem interferir na imunidade de rebanho.",
      "(C) A vacinação precoce aumenta a cobertura vacinal, o que elimina a incidência de verrugas genitais.",
      "(D) A vacina em dose única confere imunidade semelhante à de duas ou três doses em adolescentes saudáveis."
    ],
    "correctAnswer": 3,
    "explanation": "Estudos de imunogenicidade e efetividade sustentam proteção comparável do esquema de dose única de HPV em adolescentes imunocompetentes, simplificando a oferta e ampliando cobertura. Grupos imunossuprimidos podem exigir esquema diferente.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-57",
    "module": "Pediatria",
    "text": "Criança de 4 anos é internada em enfermaria para investigação de hematúria. Durante diferentes atendimentos em Unidades de Pronto Atendimento (UPA), a mãe informava, com linguajar técnico e conhecimento médico incomum, diversos sintomas, alguns deles pouco compatíveis entre si.\n\nExame físico sem alterações. Os exames de urina realizados anteriormente nas UPAs resultaram positivos para grande quantidade de hemácias; outros exames laboratoriais e de imagem estão sem alterações.\n\nDurante a internação, observa-se que, nas amostras de urina colhidas pela equipe de saúde, não se evidencia hematúria, o que motivou maior vigilância da mãe.\n\nApós alguns dias de vigilância, a equipe de enfermagem observa que a mãe furou o próprio dedo e deixou cair sangue na urina coletada da criança.\n\nQual é a principal hipótese diagnóstica no caso?",
    "options": [
      "(A) Transtorno de sintomas somáticos.",
      "(B) Transtorno factício imposto a outro.",
      "(C) Transtorno dissociativo do cuidador.",
      "(D) Transtorno de simulação."
    ],
    "correctAnswer": 1,
    "explanation": "A mãe acrescenta sangue à amostra urinária da criança, produzindo evidência falsa de doença para obter atenção médica. É transtorno factício imposto a outro, modalidade de violência contra criança que requer proteção.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-58",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos procurou atendimento pela quarta vez em uma Unidade Básica de Saúde, em razão de quadro, iniciado há 4 meses, de febre e emagrecimento, seguido por dorsalgia.\n\nHá duas semanas, começou a apresentar formigamentos e perda de força nos membros inferiores. Refere incontinência urinária e constipação nos últimos dias. Não houve definição diagnóstica em consultas anteriores.\n\nAo exame, o paciente apresenta-se emagrecido, com mucosas descoradas, incapacitado de deambular; hemodinamicamente estável, com sopro cardíaco em foco aórtico 3+/6+, dor intensa à palpação dos processos espinhosos de T9 e T10; força nos membros inferiores simétrica, 2+/5+; reflexos Aquileu e patelar ausentes; sensibilidade dolorosa diminuída abaixo do dermátomo T12 bilateral e simetricamente; e sensibilidade vibratória preservada bilateralmente.\n\nO quadro clínico apresentado é compatível com lesão do neurônio motor:",
    "options": [
      "(A) Superior por mielorradiculopatia esquistossomótica.",
      "(B) Superior por êmbolo séptico cerebral secundário a endocardite subaguda.",
      "(C) Inferior da tabes dorsalis na sífilis terciária.",
      "(D) Inferior por tuberculose óssea e compressão medular."
    ],
    "correctAnswer": 3,
    "explanation": "Febre crônica, emagrecimento, dorsalgia localizada, déficit motor, alterações sensitivas e disfunção esfincteriana sugerem espondilodiscite tuberculosa (mal de Pott) com compressão medular. Exige imagem urgente e avaliação especializada. A definição como neurônio motor inferior é simplificada e pode variar com a fase da compressão.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
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
    "explanation": "A fotografia e o contexto são compatíveis com molusco contagioso, habitualmente autolimitado. Recomendações de saúde pública NÃO exigem afastar rotineiramente crianças da creche/escola: cobrir lesões quando possível, evitar manipulação e compartilhar objetos pessoais. A opção coerente com essa hipótese é A (expectante, sem afastar). Se a imagem representar outra doença transmissível, o gabarito deve ser revisto; conferir fotografia com atenção.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (gabarito corrigido). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário.",
    "image": "/images/sugenamed1-59.PNG"
  },
  {
    "id": "sug-enamed1-60",
    "module": "Cirurgia",
    "text": "Adolescente de 14 anos é atendido em uma Unidade de Pronto Atendimento (UPA) com relato de dor súbita e persistente, de forte intensidade, na região escrotal, à esquerda, com início há 12 horas.\n\nÉ encaminhado ao serviço de referência, onde é atendido 6 horas após o atendimento inicial na UPA.\n\nO exame físico revela elevação do testículo esquerdo, que estava aumentado de tamanho e fixo, em relação ao testículo direito.\n\nNesse momento, a conduta indicada é:",
    "options": [
      "(A) Analgesia com opiáceo e antibioticoterapia.",
      "(B) Ultrassonografia de testículo com Doppler e orquidopexia.",
      "(C) Anti-inflamatório e observação hospitalar.",
      "(D) Exploração cirúrgica e orquiectomia."
    ],
    "correctAnswer": 3,
    "explanation": "Quadro clínico é fortemente sugestivo de torção testicular há cerca de 18 horas: exploração cirúrgica IMEDIATA, sem atrasar por Doppler. Na cirurgia, destorcer e avaliar viabilidade; orquiectomia SOMENTE se inviável, com orquidopexia contralateral. D inclui intervenção imediata, mas antecipa indevidamente remoção do testículo. B também é problemática ao impor Doppler antes da cirurgia. Nenhuma opção é plenamente correta.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "reference": "EAU Paediatric Urology, acute scrotum",
    "alert": "Gabarito provisório, não oficial (potencial anulação). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
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
    "explanation": "Derrame papilar sanguinolento unilateral e uniductal com nódulo palpável exige imagem diagnóstica, incluindo ultrassonografia direcionada (e mamografia diagnóstica segundo faixa etária). Biópsia virá se houver alvo suspeito.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-62",
    "module": "Pediatria",
    "text": "Menina de 4 anos, pertencente à comunidade indígena Yanomami, localizada em área de ocupação ilegal de garimpos, é atendida na Unidade do Distrito Sanitário Especial Indígena com quadro de irritabilidade, agitação, atraso do desenvolvimento neuropsicomotor, redução de fluência verbal, dormência e perda de sensibilidade nos pés.\n\nA criança iniciou acompanhamento na Unidade há 2 anos e não há registro em prontuário de exames prévios, nem do teste do pezinho.\n\nNo caso clínico apresentado, o diagnóstico provável é:",
    "options": [
      "(A) Desnutrição crônica.",
      "(B) Intoxicação por mercúrio.",
      "(C) Hipotireoidismo.",
      "(D) Deficiência de B12."
    ],
    "correctAnswer": 1,
    "explanation": "Exposição ambiental a garimpo com alterações neurocognitivas e neuropatia periférica é sugestiva de intoxicação por mercúrio, especialmente metilmercúrio. Confirmar história de exposição e dosagens apropriadas; proteger contra exposição continuada.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-63",
    "module": "Saúde Coletiva",
    "text": "Em Unidade Básica de Saúde localizada às margens de rodovia movimentada e polo industrial, observou-se aumento de 300% dos atendimentos de crises respiratórias de sibilância no último mês, fora do período sazonal para vírus respiratórios.\n\nNesse caso, a equipe multiprofissional deve, prioritariamente:",
    "options": [
      "(A) Realizar notificação compulsória dos casos à Secretaria Estadual de Saúde.",
      "(B) Articular ações intersetoriais de vigilância ambiental e mitigação da exposição.",
      "(C) Ampliar a oferta de consultas médicas e distribuição de broncodilatadores.",
      "(D) Iniciar campanha de vacinação contra influenza e pneumococo no território."
    ],
    "correctAnswer": 1,
    "explanation": "Aumento abrupto de sibilância próximo a rodovia/polo industrial fora de sazonalidade sugere exposição ambiental. Ação prioritária é investigar fontes e articular vigilância ambiental, saúde e órgãos reguladores para reduzir riscos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-64",
    "module": "Clínica Médica",
    "text": "Estudante universitário de 20 anos busca Unidade Básica de Saúde com relato de que, nos últimos 40 dias, apresentou 3 episódios de dor no peito, falta de ar, sudorese profusa, sensação de estar fora do próprio corpo e medo de morrer.\n\nInforma que tais sintomas foram autolimitados, mas que, mesmo assim, buscou atendimento de emergência, tendo realizado exames complementares, cujos resultados estavam dentro dos padrões de normalidade.\n\nEle afirma temer ir a certos locais e novamente ter um \"acesso de loucura\", o que vem impactando sua rotina. Nega histórico de doenças ou uso de medicamentos. Nega outros sintomas.\n\nQual a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Transtorno de Sintomas Somáticos.",
      "(B) Transtorno de Pânico.",
      "(C) Transtorno de Ansiedade Generalizada.",
      "(D) Transtorno de Ansiedade de Doença."
    ],
    "correctAnswer": 1,
    "explanation": "Crises abruptas recorrentes com palpitações/dor, dispneia, sudorese, despersonalização e medo de morrer, seguidas de preocupação persistente e esquiva, caracterizam transtorno de pânico após exclusão de causas clínicas.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-65",
    "module": "Saúde Coletiva",
    "text": "Homem de 50 anos, motorista de ônibus, comparece à consulta em Unidade Básica de Saúde para solicitar prescrição de morfina para tratamento de dor lombar.\n\nNo atendimento, o médico verifica registro de prescrições de codeína e paracetamol por vários meses, seguidas de tramadol nos últimos 2 meses. Considera a hipótese de dependência química.\n\nAo exame físico: paciente orientado no tempo e no espaço; PA 120 × 80 mmHg; FC 80 bpm; sem outras alterações.\n\nNessa situação, o médico tem o dever de:",
    "options": [
      "(A) Informar os familiares do paciente sobre seu quadro.",
      "(B) Manter o sigilo a respeito do caso.",
      "(C) Comunicar a situação ao empregador do paciente.",
      "(D) Notificar as autoridades policiais."
    ],
    "correctAnswer": 1,
    "explanation": "Suspeita de dependência de opioides é informação sensível protegida por sigilo profissional. Não se comunica automaticamente família, empregador ou polícia; exceções legais e risco concreto devem ser avaliados.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-66",
    "module": "Pediatria",
    "text": "Lactente de 3 meses, nascido a termo, em aleitamento materno exclusivo, é levado à Unidade Básica de Saúde porque a mãe está preocupada com regurgitações após quase todas as mamadas, de pequeno volume, sem esforço. A criança mama bem, não chora durante as mamadas e dorme bem.\n\nAo exame: bom estado geral, hidratado, ativo. Ganho de peso de 30 g/dia desde a última consulta. Não há vômitos com sangue ou bile, febre, irritabilidade, recusa alimentar ou alterações neurológicas.\n\nQual é a conduta adequada?",
    "options": [
      "(A) Orientar e tranquilizar a família, mantendo o aleitamento materno exclusivo.",
      "(B) Prescrever omeprazol por 4 semanas e reavaliar.",
      "(C) Substituir o leite materno por fórmula antirregurgitação.",
      "(D) Solicitar pHmetria esofágica de 24 horas."
    ],
    "correctAnswer": 0,
    "explanation": "Regurgitações frequentes, sem esforço, em lactente que cresce bem e não tem sinais de alarme caracterizam refluxo gastroesofágico fisiológico, muito comum até os 6 meses e que costuma desaparecer até o fim do primeiro ano.\n\nA conduta é explicar a evolução benigna, orientar posição e pega na mamada e manter o aleitamento materno exclusivo, reavaliando o crescimento nas consultas de rotina.",
    "commentary": "Inibidor de bomba de prótons não melhora regurgitação em lactentes saudáveis e tem efeitos adversos, como maior risco de infecções. Trocar o leite materno por fórmula tira da criança o melhor alimento sem necessidade. pHmetria é reservada a casos com sinais de alarme ou dúvida diagnóstica, não ao refluxo fisiológico.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Diretriz NASPGHAN/ESPGHAN de Refluxo Gastroesofágico Pediátrico (2018)",
    "tags": [
      "gastroenterologia pediátrica",
      "refluxo",
      "lactente"
    ]
  },
  {
    "id": "sug-enamed1-67",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, cirrótico, Child-Pugh B, é atendido em um pronto-socorro com quadro de hematêmese volumosa iniciada há 2 horas.\n\nNa admissão, apresenta PA 80 × 50 mmHg e FC 124 bpm. Após reposição volêmica e transfusão de duas unidades de hemoconcentrado, ocorre estabilização hemodinâmica.\n\nNo momento, o paciente está confuso, com sinais clínicos de encefalopatia hepática grau I.\n\nQual é a conduta nesse momento?",
    "options": [
      "(A) Iniciar inibidor da bomba de prótons intravenoso.",
      "(B) Encaminhar para cirurgia de descompressão portal.",
      "(C) Realizar ligadura elástica endoscópica.",
      "(D) Indicar shunt portossistêmico intra-hepático transjugular."
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico com hematêmese volumosa sugere hemorragia varicosa. Após estabilização, endoscopia precoce com ligadura elástica, associada a vasoativo e antibioticoprofilaxia, é tratamento de escolha; TIPS é reservado a critérios selecionados.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta com 14 semanas e 2 dias de idade gestacional, pela data da última menstruação e pela ultrassonografia, com sorologias IgG e IgM reagentes para toxoplasmose, foi encaminhada por uma Unidade Básica de Saúde a atendimento especializado para avaliação e realização de pré-natal.\n\nA paciente relata estar assintomática.\n\nConforme recomendações do Ministério da Saúde do Brasil, qual conduta deve ser adotada nesse momento?",
    "options": [
      "(A) Iniciar espiramicina e solicitar teste de avidez para IgG.",
      "(B) Prescrever pirimetamina, sulfadiazina e ácido folínico.",
      "(C) Indicar amniocentese para pesquisa de DNA do toxoplasma.",
      "(D) Tratar com espiramicina associada ao ácido folínico."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante com IgG e IgM positivos às 14 semanas e 2 dias: obter teste de avidez de IgG para ajudar a datar infecção e iniciar espiramicina enquanto investiga possível infecção aguda, conforme diretriz nacional de toxoplasmose gestacional. A interpretação de avidez colhida depois do primeiro trimestre exige cautela; teste de alta avidez pode NÃO excluir infecção no início da gestação. Amniocentese para PCR deve respeitar idade gestacional e tempo desde provável infecção.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "reference": "MS NT 100/2022",
    "alert": "Gabarito provisório, não oficial (cuidado na interpretação). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-69",
    "module": "Clínica Médica",
    "text": "Homem de 38 anos, garimpeiro em Roraima, é levado à Unidade de Pronto Atendimento com febre alta há 6 dias, calafrios, cefaleia e, desde ontem, confusão mental e urina escura.\n\nAo exame: sonolento, desorientado; ictérico (3+/4+); PA 100 × 60 mmHg; FC 116 bpm; temperatura axilar 39,4 °C.\n\nExames: hemoglobina 6,8 g/dL; plaquetas 38.000/mm³; creatinina 3,2 mg/dL; bilirrubina total 9,5 mg/dL; glicemia 64 mg/dL. A gota espessa mostra Plasmodium falciparum com parasitemia elevada.\n\nQual é o tratamento antimalárico de escolha?",
    "options": [
      "(A) Cloroquina e primaquina por via oral.",
      "(B) Artesunato por via endovenosa.",
      "(C) Doxiciclina por via oral isolada.",
      "(D) Arteméter + lumefantrina por via oral, em regime ambulatorial."
    ],
    "correctAnswer": 1,
    "explanation": "O paciente tem malária por P. falciparum com vários critérios de gravidade: alteração do nível de consciência, icterícia, anemia grave, insuficiência renal, hipoglicemia e parasitemia elevada.\n\nNa malária grave, o tratamento de escolha é o artesunato endovenoso, em ambiente hospitalar com suporte intensivo. Quando o paciente consegue tomar medicação oral, o tratamento é completado com um esquema combinado com derivado de artemisinina.",
    "commentary": "Cloroquina com primaquina é o esquema para malária por P. vivax, e P. falciparum é resistente à cloroquina no Brasil. Doxiciclina isolada age devagar e só é usada em associação. Arteméter + lumefantrina oral trata a malária falciparum não complicada, e não um quadro grave que exige internação.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Ministério da Saúde. Guia de Tratamento da Malária no Brasil (2021)",
    "tags": [
      "infectologia",
      "malária",
      "doenças tropicais"
    ]
  },
  {
    "id": "sug-enamed1-70",
    "module": "Saúde Coletiva",
    "text": "A Secretaria de Saúde de um município de médio porte localizado em polo industrial de confecções identificou que mais de 300 costureiras da cidade apresentam, de forma recorrente, queixa de zumbidos e hipoacusia.\n\nNessa situação, cabe à gestão municipal da saúde:",
    "options": [
      "(A) Orientar a equipe da atenção primária a encaminhar as costureiras para o Instituto Nacional de Seguridade Social.",
      "(B) Acionar o Conselho Municipal de Saúde para que fiscalize as condições de trabalho nas empresas.",
      "(C) Suspender as atividades das empresas até haver comprovação de nexo causal entre a exposição a ruídos e os sintomas apresentados pelas costureiras.",
      "(D) Apoiar o Centro de Referência em Saúde do Trabalhador na investigação e no acompanhamento dos casos."
    ],
    "correctAnswer": 3,
    "explanation": "Suspeita de perda auditiva induzida por ruído ocupacional em centenas de trabalhadoras requer vigilância em saúde do trabalhador. O CEREST apoia a investigação do nexo, notificações e ações de prevenção e acompanhamento.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-71",
    "module": "Clínica Médica",
    "text": "Homem de 82 anos, acompanhado de familiares, chega a uma Unidade de Pronto Atendimento com relato de agitação psicomotora, confusão mental, discurso incoerente, flutuação do nível de consciência, dificuldade marcante de manter a atenção e inversão do ciclo sono-vigília, com início há 24 horas.\n\nHá 3 anos, está em acompanhamento para quadro de perda de memória progressiva, mantendo relativa autonomia.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Doença de Alzheimer avançada.",
      "(B) Demência com Corpos de Lewy.",
      "(C) Esquizofrenia de início tardio.",
      "(D) Estado de delirium."
    ],
    "correctAnswer": 3,
    "explanation": "Instalação abrupta em 24 horas, flutuação do nível de consciência, déficit de atenção e inversão sono-vigília caracterizam delirium sobreposto a possível demência prévia. Deve-se buscar causa aguda, como infecção, fármacos ou distúrbios metabólicos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-72",
    "module": "Clínica Médica",
    "text": "Mulher de 54 anos, em tratamento regular de hipotireoidismo por tireoidite de Hashimoto, com uso de levotiroxina 75 mcg há 10 anos, retorna a uma Unidade Básica de Saúde com queixas de astenia e fadiga intensas.\n\nAo exame físico, mostra-se hipocorada (3+/4+), ictérica (2+/4+) e afebril. Exame neurológico mostra hiperreflexia patelar bilateral (3+/4+) e redução importante da sensibilidade vibratória nos membros inferiores, não sendo detectadas outras anormalidades objetivas. Endoscopia digestiva alta evidencia atrofia do pregueado mucoso no corpo e fundo gástricos. Biópsia mostra gastrite crônica atrófica de fundo gástrico.\n\nOs resultados dos últimos exames de controle hormonal são os seguintes:\n\n• TSH: 3,2 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• T4 livre: 1,2 ng/dL (VR: 0,92 a 1,68 ng/dL)\n\nSão solicitados novos exames, cujos resultados se encontram a seguir:\n\n• Hemoglobina: 6,2 g/dL (VR: 12,0 a 15,1 g/dL)\n• Hematócrito: 23% (VR: 40 a 50%)\n• Volume corpuscular médio: 114 fL (VR: 75 a 87 fL)\n• Leucócitos: 2.500/mm³ (VR: 4.450 a 10.950/mm³)\n• Plaquetas: 72.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Bilirrubina total: 3,3 mg/dL (VR: Até 1,2 mg/dL)\n• Bilirrubina indireta: 3,2 mg/dL (VR: Até 0,8 mg/dL)\n\nTGO, TGP, GGT, fosfatase alcalina, proteínas totais e frações e Razão Normalizada Internacional normais.\n\nContagem diferencial de leucócitos dentro da normalidade.\n\nQual é a hipótese diagnóstica provável nesse caso?",
    "options": [
      "(A) Anemia perniciosa.",
      "(B) Anemia de doença crônica.",
      "(C) Síndrome colestática.",
      "(D) Síndrome mielodisplásica."
    ],
    "correctAnswer": 0,
    "explanation": "Anemia macrocítica grave, pancitopenia, hiperbilirrubinemia indireta, perda de sensibilidade vibratória e gastrite atrófica autoimune sugerem deficiência de B12 por anemia perniciosa. É associação conhecida com tireoidite de Hashimoto.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
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
    "explanation": "Febre alta, tosse, coriza, conjuntivite e exantema morbiliforme de progressão cefalocaudal são típicos de sarampo. Exige isolamento, notificação imediata e confirmação laboratorial, sem atrasar medidas de controle.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-74",
    "module": "Cirurgia",
    "text": "Homem de 72 anos é admitido na emergência de um hospital de pequeno porte com quadro de dor abdominal que, há 4 dias, se localizava no quadrante inferior esquerdo, mas hoje se tornou difusa. Relata febre não aferida e que está sem evacuar desde o início da dor, apesar de eliminar flatos.\n\nO exame físico revela: distensão abdominal; dor intensa à palpação no quadrante inferior esquerdo do abdome, com descompressão brusca positiva; temperatura axilar de 37,9 °C; PA 135 × 85 mmHg; FC 122 bpm. Realiza-se exame radiológico, cuja imagem é mostrada a seguir.\n\nO diagnóstico provável nesse caso é abdome agudo:",
    "options": [
      "(A) Isquêmico e perfurativo.",
      "(B) Obstrutivo e inflamatório.",
      "(C) Obstrutivo e isquêmico.",
      "(D) Inflamatório e perfurativo."
    ],
    "correctAnswer": 3,
    "explanation": "Dor em fossa ilíaca esquerda, febre, peritonismo e progressão para dor difusa sugerem diverticulite aguda perfurada. Se radiografia mostra ar livre subdiafragmático, há pneumoperitônio, portanto abdome agudo inflamatório + perfurativo (D). A qualidade da imagem fotografada dificulta afirmação categórica de gás livre; a hipótese deve ser confirmada pela imagem em boa resolução/TC conforme estabilidade.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (dependente de imagem). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário.",
    "image": "/images/sugenamed1-74.PNG"
  },
  {
    "id": "sug-enamed1-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante com IG de 37 semanas é atendida na emergência de um hospital com relato de dores abdominais em cólicas de forte intensidade há meia hora, de início súbito, que progrediu para dor contínua. Nega movimentos fetais desde então e relata mal-estar, náuseas e sensação de esvaecimento.\n\nEvoluiu com sangramento vaginal de moderada intensidade. Ao exame, apresenta PA 160 × 110 mmHg, pulso taquicárdico e útero com atividade contrátil intensa sem variação do tônus. No exame especular, verifica-se sangramento através do orifício externo do colo uterino; e, ao toque, colo apagado 50% e sem dilatação do canal cervical.\n\nAusculta fetal de 90 bpm.\n\nNesse caso clínico, qual é o diagnóstico principal?",
    "options": [
      "(A) Descolamento prematuro de placenta.",
      "(B) Placenta prévia.",
      "(C) Rotura uterina.",
      "(D) Rotura de seio marginal."
    ],
    "correctAnswer": 0,
    "explanation": "Dor abdominal súbita contínua, hipertonia uterina, sangramento, hipertensão e bradicardia fetal caracterizam descolamento prematuro de placenta. É emergência obstétrica com risco materno-fetal.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-76",
    "module": "Saúde Coletiva",
    "text": "Uma médica de família assume uma equipe de Saúde da Família recém-implantada em um bairro periférico de uma capital, com crescimento recente de ocupações e poucos dados atualizados. Ela quer conhecer, em poucas semanas, os principais problemas de saúde e as condições de vida da população para planejar as ações da equipe junto com a comunidade.\n\nQual estratégia é a mais adequada para esse objetivo?",
    "options": [
      "(A) Inquérito domiciliar censitário com questionário padronizado aplicado a todas as famílias.",
      "(B) Aguardar o próximo censo do IBGE para ter dados populacionais confiáveis.",
      "(C) Estimativa rápida participativa, combinando dados já existentes, entrevistas com informantes-chave e observação do território.",
      "(D) Planejar as ações apenas com base nas queixas dos usuários que procuram a unidade."
    ],
    "correctAnswer": 2,
    "explanation": "A estimativa rápida participativa foi pensada para essa situação: obter, em pouco tempo e com baixo custo, um retrato dos problemas e recursos de um território. Combina dados secundários (registros da unidade, sistemas de informação), entrevistas com informantes-chave (lideranças, moradores antigos, profissionais) e observação direta do território pela equipe.\n\nAlém de rápida, envolve a comunidade na definição das prioridades, como propõe a Política Nacional de Atenção Básica.",
    "commentary": "Um inquérito censitário é demorado e caro para o objetivo. Esperar o censo deixaria a equipe sem diagnóstico por anos, e os dados não teriam o detalhe local necessário. Planejar só pela demanda espontânea ignora quem não chega à unidade, justamente a população mais vulnerável.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "Política Nacional de Atenção Básica (Portaria nº 2.436/2017); OPAS. Estimativa rápida participativa",
    "tags": [
      "atenção primária",
      "territorialização",
      "diagnóstico de saúde"
    ]
  },
  {
    "id": "sug-enamed1-77",
    "module": "Saúde Coletiva",
    "text": "Durante o período sazonal de chuvas, uma Unidade Básica de Saúde enfrenta um aumento expressivo de casos de dengue em seu território, que possui 10.000 habitantes. Ao consolidar os dados do mês de março, a equipe de vigilância registrou 500 casos confirmados da doença e 1 óbito.\n\nQual é o valor da taxa de letalidade nesse território?",
    "options": [
      "(A) 0,4%.",
      "(B) 0,1%.",
      "(C) 0,2%.",
      "(D) 0,5%."
    ],
    "correctAnswer": 2,
    "explanation": "Letalidade considera óbitos entre casos da doença: 1/500 × 100 = 0,2%. Os 10 mil habitantes serviriam para calcular incidência, não letalidade.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
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
    "explanation": "Amitriptilina, antidepressivo tricíclico, pode causar diminuição da libido, disfunção erétil e alteração da ejaculação. Bupropiona geralmente apresenta menos efeitos sexuais adversos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-79",
    "module": "Clínica Médica",
    "text": "Um jovem de 18 anos chega ao pronto-socorro sonolento, com dor abdominal e náuseas. Na admissão, apresenta glicemia de 450 mg/dL (VR: 70 a 99 mg/dL). Ao exame físico, encontra-se desidratado, taquicárdico, hipotenso e com hálito cetônico.\n\nPara confirmar a hipótese diagnóstica provável, o médico solicita gasometria arterial, além de pesquisa bioquímica na urina, considerando-se os seguintes valores de referência:\n\n• pH: 7,35 a 7,45\n• PaCO₂: 35 a 45 mmHg\n• HCO₃⁻: 22 a 26 mmol/L\n\nQuais são os resultados esperados para a gasometria arterial desse paciente?",
    "options": [
      "(A) pH 7,46; PaCO₂ 44,2 mmHg; e HCO₃⁻ 30,6 mmol/L.",
      "(B) pH 7,28; PaCO₂ 68,1 mmHg; e HCO₃⁻ 28,2 mmol/L.",
      "(C) pH 7,42; PaCO₂ 35,0 mmHg; e HCO₃⁻ 22,6 mmol/L.",
      "(D) pH 7,16; PaCO₂ 18,2 mmHg; e HCO₃⁻ 10,0 mmol/L."
    ],
    "correctAnswer": 3,
    "explanation": "Hiperglicemia importante, desidratação, hálito cetônico e dor abdominal sugerem cetoacidose diabética. Espera-se acidose metabólica (pH e bicarbonato baixos) com hipocapnia compensatória por hiperventilação de Kussmaul.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-80",
    "module": "Pediatria",
    "text": "Adolescente de 11 anos, previamente hígido, é encaminhado para serviço ambulatorial de referência após apresentar valores repetidos de PA em torno de 150 × 90 mmHg. Relata cefaleia ocasional, sem outros sintomas.\n\nNo atendimento: PA 148 × 88 mmHg, em membros superiores, e 116 × 72 mmHg, em membros inferiores; FC 80 bpm; FR 24 irpm.\n\nExame físico: bom estado geral; ausculta cardíaca e respiratória sem alterações; palpação abdominal normal; pulsos radiais amplos e pulsos femorais diminuídos.\n\nA investigação inicial indicada para o caso é:",
    "options": [
      "(A) Ecocardiograma bidimensional.",
      "(B) Ultrassonografia renal com Doppler.",
      "(C) Dosagem de metanefrinas séricas.",
      "(D) Relação aldosterona/renina plasmática."
    ],
    "correctAnswer": 0,
    "explanation": "Hipertensão em membros superiores, pressão menor nos inferiores e pulsos femorais diminuídos sugerem coarctação de aorta. Ecocardiograma com Doppler é exame inicial para caracterização anatômica e hemodinâmica.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-81",
    "module": "Cirurgia",
    "text": "Homem de 20 anos, açougueiro, sofreu trauma com amputação do 1º quirodáctilo esquerdo devido a acidente com faca durante o trabalho. Seus colegas localizaram o dedo amputado e o colocaram dentro de um vidro seco. O paciente foi, então, conduzido para a Unidade Básica de Saúde mais próxima, onde o médico plantonista acionou o SAMU para deslocamento do paciente para serviço de referência.\n\nQual é a conduta a ser realizada pelo médico enquanto aguarda a transferência?",
    "options": [
      "(A) Acondicionar o dedo em saco plástico com soro fisiológico e antibiótico e mantê-lo em gelo.",
      "(B) Envolver o dedo em gaze estéril com solução salina e mantê-lo dentro de recipiente com gelo.",
      "(C) Lavar o dedo com solução salina estéril e mantê-lo em recipiente de vidro dentro de geladeira.",
      "(D) Colocar o dedo em saco plástico estéril e acondicioná-lo em freezer a −10 °C."
    ],
    "correctAnswer": 1,
    "explanation": "Reimplante exige resfriamento INDIRETO: envolver segmento em gaze estéril levemente umedecida com soro, colocar dentro de saco impermeável e então pôr esse saco em segundo recipiente com gelo/água gelada, sem contato direto com gelo ou congelamento. B é a mais próxima, mas omite barreira impermeável e admite contato inadequado com gelo se interpretada literalmente.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (ressalva técnica). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-82",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 40 anos, nuligesta, comparece à consulta em Unidade Básica de Saúde em razão de estar tentando engravidar há um ano e meio, sem sucesso. Relata que tem parceiro único regular há 10 anos e que fazia uso de DIU até decidir engravidar. Possui ciclos menstruais regulares, sem comorbidades.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Encaminhar o casal para avaliação especializada.",
      "(B) Contraindicar a gestação, devido à idade avançada.",
      "(C) Prescrever ácido fólico e reavaliar em 6 meses.",
      "(D) Iniciar tratamento com hormônios."
    ],
    "correctAnswer": 0,
    "explanation": "Aos 40 anos e após 18 meses de relações com tentativa de concepção, está indicada avaliação de infertilidade do casal sem postergar mais 6 meses. Investiga-se simultaneamente fatores femininos e masculinos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-83",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 30 anos, com idade gestacional de 27 semanas, em consulta de rotina de pré-natal, apresenta teste de tolerância oral à glicose 75 g (TOTG) no valor de 190 mg/dL após uma hora.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Repetir o teste de tolerância à glicose.",
      "(B) Implementar mudança de estilo de vida.",
      "(C) Solicitar hemoglobina glicada.",
      "(D) Iniciar insulinoterapia."
    ],
    "correctAnswer": 1,
    "explanation": "TOTG 75 g com glicemia de 190 mg/dL em 1 hora confirma diabetes mellitus gestacional (corte ≥180 mg/dL). Iniciar plano alimentar, atividade física quando segura e monitorização glicêmica; insulina se metas não forem atingidas ou conforme gravidade.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-84",
    "module": "Saúde Coletiva",
    "text": "Um beneficiário de plano de saúde privado com cobertura hospitalar e ambulatorial é submetido a laparotomia em caráter de emergência no Sistema Único de Saúde (SUS) por obstrução intestinal.\n\nCom relação à sistemática de ressarcimento referente a atendimentos prestados no SUS a beneficiários de planos de saúde, a qual se insere na lógica de regulação do setor de saúde suplementar, é correto afirmar que, no caso apresentado, a identificação do beneficiário para fins de ressarcimento ao SUS é de responsabilidade:",
    "options": [
      "(A) Da operadora do plano de saúde contratado pelo beneficiário, independentemente da complexidade do atendimento.",
      "(B) Do Ministério da Saúde, independentemente da cobertura contratual pelo plano de saúde.",
      "(C) Da Agência Nacional de Saúde Suplementar, estando condicionada à cobertura contratual pelo plano de saúde.",
      "(D) Do Conselho Nacional de Saúde, estando condicionada à complexidade do atendimento."
    ],
    "correctAnswer": 2,
    "explanation": "A Agência Nacional de Saúde Suplementar (ANS) realiza a identificação dos atendimentos de beneficiários do setor privado ocorridos no SUS, confrontando registros e coberturas contratuais para apurar ressarcimento. A operadora efetua o pagamento quando devido. Portanto C trata da IDENTIFICAÇÃO; não confundir com obrigação de pagar.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ],
    "reference": "Lei 9.656/1998; ANS"
  },
  {
    "id": "sug-enamed1-85",
    "module": "Clínica Médica",
    "text": "Homem de 22 anos comparece a uma Unidade Básica de Saúde com quadro de intensa ansiedade, agitação psicomotora e sensação de \"não estar no próprio corpo\".\n\nRelata ter sido vítima de episódio de violência verbal e física motivada por homofobia, há 4 meses, na saída de uma festa e que, desde então, tem piora progressiva do funcionamento emocional e social, com intenso medo e pensamentos de que não deve confiar mais nas pessoas.\n\nRefere que não tem conseguido mais sair de casa, mesmo acompanhado. Queixa-se de apresentar pesadelos frequentes, com conteúdo e sentimento relacionados às agressões.\n\nNo acolhimento, o paciente encontra-se angustiado, com discurso coerente, porém permeado por medo intenso. Nega ideação suicida ativa no momento, mas relata pensamentos recorrentes de \"querer desaparecer\". Nega uso de álcool, substâncias psicoativas ou medicações.\n\nQual é a principal classe medicamentosa indicada para o tratamento farmacológico a longo prazo desse paciente?",
    "options": [
      "(A) Benzodiazepínico.",
      "(B) Antipsicótico atípico.",
      "(C) Estabilizador de humor.",
      "(D) Inibidor seletivo de recaptação de serotonina."
    ],
    "correctAnswer": 3,
    "explanation": "Reexperiência traumática com pesadelos, evitação, hipervigilância e prejuízo funcional após violência sugere transtorno de estresse pós-traumático. ISRS, associados a psicoterapia focada no trauma, são opções farmacológicas de manutenção; avaliar risco suicida.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-86",
    "module": "Clínica Médica",
    "text": "Homem de 56 anos é levado a uma Unidade de Pronto Atendimento devido a dispneia, aumento da expectoração e sonolência. Sinais vitais: PA 130 × 90 mmHg; FC 114 bpm; FR 28 irpm; temperatura axilar 36,9 °C; SpO₂ 87% em ar ambiente.\n\nO exame físico revela: dedos da mão esquerda amarelados pelo uso de cigarro; diâmetro anteroposterior do tórax aumentado; à ausculta, roncos difusos com alguns sibilos expiratórios bilaterais. O paciente apresenta dificuldade no uso de dispositivos inalatórios.\n\nNesse caso, qual é a conduta imediata?",
    "options": [
      "(A) Prescrever N-acetilcisteína 600 mg via oral, 2 vezes ao dia.",
      "(B) Manter SpO₂ entre 95% e 98% com oxigênio suplementar.",
      "(C) Nebulizar com salbutamol 2,5 mg em 3 mL de solução de NaCl 0,9%.",
      "(D) Iniciar salmeterol associado a fluticasona com espaçador."
    ],
    "correctAnswer": 2,
    "explanation": "Tabagismo crônico, tórax em barril, hipoxemia e aumento de expectoração sugerem exacerbação de DPOC. Broncodilatador de curta ação por nebulização é apropriado se não consegue usar inalador; oxigênio deve ser titulado em geral para SpO₂ 88–92%, com avaliação de hipercapnia.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-87",
    "module": "Pediatria",
    "text": "Menina de 9 anos, sem doenças prévias, é levada a uma Unidade Básica de Saúde por apresentar dor abdominal intensa, recorrente, iniciada há cerca de 3 semanas.\n\nA dor ocorre em crises súbitas, com duração de minutos a uma hora, o que causa inquietação e busca por posição antálgica, com melhora espontânea. Refere aumento da frequência urinária, urina avermelhada em duas ocasiões, \"como chá escuro\", sem odor alterado, e \"ardência\" leve ao final da micção.\n\nNega febre, vômitos ou diarreia. O apetite está preservado.\n\nExame físico: bom estado geral; hidratada; afebril. Abdome sem reação de defesa, mas com dor à palpação profunda em flanco direito. Punho percussão positivo à direita.\n\nA causa mais frequentemente associada ao diagnóstico principal é:",
    "options": [
      "(A) Cistinúria.",
      "(B) Hipocitratúria.",
      "(C) Acidose tubular renal.",
      "(D) Hipercalciúria idiopática."
    ],
    "correctAnswer": 3,
    "explanation": "Cólica renal, hematúria e punho-percussão positiva sugerem nefrolitíase. A alteração metabólica mais frequente na litíase pediátrica é hipercalciúria idiopática, embora hipocitratúria também seja fator importante.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-88",
    "module": "Cirurgia",
    "text": "Mulher de 18 anos é atendida no pronto-socorro de um hospital de referência terciária após trauma automobilístico com colisão frontal em alta velocidade, há 90 minutos.\n\nFoi admitida com colar cervical e prancha rígida, apresentando estabilidade hemodinâmica e Glasgow 15. Após avaliação por imagem, o único achado foi fratura de processo transverso de C4.\n\nNa avaliação secundária, foi notado hematoma cervical em expansão à esquerda, sendo indicada exploração cirúrgica.\n\nQual é a estrutura vascular mais provável de ter sido acometida nesse caso?",
    "options": [
      "(A) Veia jugular interna.",
      "(B) Artéria carótida comum.",
      "(C) Veia subclávia.",
      "(D) Artéria vertebral."
    ],
    "correctAnswer": 3,
    "explanation": "Fratura do processo transverso de C4, especialmente com envolvimento do forame transversário, está associada a lesão da artéria vertebral. Contudo, o enunciado não demonstra extensão ao forame e apresenta hematoma cervical expansivo, achado compatível também com outras lesões arteriais cervicais. D é a associação anatômica provável; não se pode inferir certeza sem angiotomografia/exploração.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (dependente de anatomia). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-89",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher, com parto vaginal anterior, está em trabalho de parto há mais de 8 horas. Teve rotura de membranas espontânea há 3 horas e recebeu analgesia peridural há aproximadamente 40 minutos. Refere estar cansada, mas com dor bem tolerável no momento.\n\nNa avaliação obstétrica, percebe-se dinâmica uterina adequada (4 contrações fortes de 35 segundos em 10 minutos) e os batimentos cardíacos fetais apresentam pouca variabilidade e importantes desacelerações após as contrações, retornando lentamente para a linha de base.\n\nAo toque, observa-se colo completamente dilatado, feto em plano +2 de DeLee, em apresentação occipitopúbica.\n\nConsiderando-se a situação fetal, qual é a conduta imediata a ser adotada após o consentimento da parturiente?",
    "options": [
      "(A) Realizar cesariana.",
      "(B) Prescrever ocitocina.",
      "(C) Realizar manobra de Kristeller.",
      "(D) Indicar parto instrumentalizado."
    ],
    "correctAnswer": 3,
    "explanation": "Desacelerações tardias recorrentes e variabilidade reduzida indicam sofrimento fetal. Com dilatação completa, apresentação cefálica em +2 e posição conhecida, parto vaginal instrumentalizado pode abreviar o nascimento, se critérios técnicos e operador experiente estiverem presentes.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-90",
    "module": "Saúde Coletiva",
    "text": "Mulher de 61 anos, em acompanhamento com psiquiatra particular, apresenta quadro de depressão há cerca de 8 anos. É cadastrada pela equipe da Estratégia Saúde da Família (ESF) há 12 anos.\n\nPelo genograma da família, observa-se que a paciente perdeu dois filhos, possui problemas no relacionamento conjugal e enfrenta dificuldades relacionadas à renda. A paciente geralmente falta às consultas agendadas pela equipe e, por isso, não há registros de tratamentos da depressão nem de encaminhamento para outros níveis de atenção da rede de cuidado.\n\nNesse caso, qual atributo de atenção primária deve ser priorizado pela ESF?",
    "options": [
      "(A) Acesso.",
      "(B) Competência cultural.",
      "(C) Orientação comunitária.",
      "(D) Longitudinalidade."
    ],
    "correctAnswer": 3,
    "explanation": "A ESF conhece a paciente há 12 anos, mas não mantém seguimento efetivo de sua condição mental. Prioriza-se longitudinalidade: vínculo contínuo, busca ativa, acompanhamento e coordenação do cuidado ao longo do tempo.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-91",
    "module": "Clínica Médica",
    "text": "Mulher de 34 anos, sem comorbidades, procura o pronto-socorro com palpitações de início e fim súbitos há 40 minutos, semelhantes a episódios curtos que já teve antes. Nega dor torácica, dispneia ou síncope.\n\nAo exame: PA 118 × 76 mmHg; FC 186 bpm; SatO₂ 99%; perfusão periférica preservada.\n\nO ECG mostra taquicardia regular com QRS estreito, sem ondas P visíveis.\n\nQual é a primeira medida terapêutica?",
    "options": [
      "(A) Cardioversão elétrica sincronizada.",
      "(B) Amiodarona endovenosa em bolus.",
      "(C) Manobra vagal, como a manobra de Valsalva modificada.",
      "(D) Anticoagulação plena antes de qualquer tentativa de reversão."
    ],
    "correctAnswer": 2,
    "explanation": "Taquicardia regular de QRS estreito, de início súbito, em paciente jovem e estável sugere taquicardia por reentrada nodal ou por via acessória. A primeira medida é a manobra vagal; a Valsalva modificada (esforço seguido de elevação das pernas em decúbito dorsal) reverte uma proporção maior de casos que a manobra clássica.\n\nSe não reverter, o próximo passo é adenosina endovenosa em bolus rápido. Depois do episódio, a paciente deve ser encaminhada para avaliação de ablação, que costuma ser curativa.",
    "commentary": "Cardioversão elétrica é para instabilidade ou falha das medidas farmacológicas. Amiodarona não é a escolha inicial na taquicardia supraventricular estável. Anticoagulação não se aplica, porque não se trata de fibrilação ou flutter atrial.\n\nQuestão inédita, escrita para o DEsimulados no formato do ENAMED.",
    "reference": "American Heart Association. Adult Advanced Life Support — taquicardia com pulso (2025); Diretriz ESC de Taquicardia Supraventricular (2019)",
    "tags": [
      "cardiologia",
      "taquicardia supraventricular",
      "emergência"
    ]
  },
  {
    "id": "sug-enamed1-92",
    "module": "Clínica Médica",
    "text": "Durante visita domiciliar solicitada por agente comunitário de saúde em uma área de Unidade Básica de Saúde (UBS), a equipe avalia uma família cujo filho de 14 anos vem apresentando isolamento social — sai de casa apenas para ir à escola —, além de queda no rendimento escolar e irritabilidade.\n\nA mãe está desempregada e o pai, preso. A mãe relata que tem um bom relacionamento com o filho e que ele passa a maior parte do tempo usando celular.\n\nEm conversa reservada com a equipe, o adolescente mostra-se pouco comunicativo e desesperançoso; afirma já ter pensado em se matar, embora não apresente ideação suicida atual. Exame físico sem alterações.\n\nQual é a conduta inicial nesse caso?",
    "options": [
      "(A) Construir rede de proteção ao suicídio para o adolescente e solicitar avaliação neuropsicológica.",
      "(B) Encaminhar ao Centro de Atenção Psicossocial e realizar a notificação de violência interpessoal e/ou autoprovocada.",
      "(C) Manter acompanhamento com a equipe da UBS e pactuar com o adolescente a comunicação da ideação suicida à mãe.",
      "(D) Regular para internação breve em leito hospitalar e solicitar relatório escolar detalhado."
    ],
    "correctAnswer": 2,
    "explanation": "Ideação suicida passada em adolescente exige avaliação imediata e estruturada de risco (intenção, plano, meios, tentativas, proteção), envolvimento seguro dos responsáveis, plano de segurança e acompanhamento próximo. C é a melhor alternativa SE a avaliação não identificar risco iminente. História de pensamentos suicidas não permite simplesmente aguardar acompanhamento, e comunicação à mãe deve preservar segurança e confidencialidade proporcional ao risco.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (atenção à segurança). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-93",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, politraumatizado após acidente automobilístico, recebeu atendimento primário em hospital de referência em trauma 1 hora após o ocorrido.\n\nAo exame inicial, apresentava-se alerta e confuso, com palidez cutaneomucosa, pulsos periféricos filiformes e simétricos, tempo de enchimento capilar de 4 segundos, múltiplas escoriações, abdome doloroso em hipocôndrio esquerdo com hematoma local de 15 cm. FC 130 bpm, FR 25 irpm, PA 80 × 50 mmHg.\n\nUltrassom FAST positivo no espaço de Morrison.\n\nApós as medidas iniciais, mantém sinais vitais inalterados.\n\nQual o achado indica a transfusão de hemoderivados nesse caso?",
    "options": [
      "(A) Hematoma.",
      "(B) Ultrassom FAST positivo.",
      "(C) Confusão mental.",
      "(D) Hipotensão."
    ],
    "correctAnswer": 3,
    "explanation": "PA 80 × 50 mmHg com taquicardia e má perfusão após trauma indica choque hemorrágico persistente. Hipotensão sustenta a necessidade de ressuscitação hemostática com hemocomponentes e controle urgente do sangramento.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-94",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 30 anos comparece a uma Unidade Básica de Saúde com relato de que, há 9 meses, parou de usar anticoncepcional oral combinado e não voltou a menstruar até o momento. Fez uso desse método contraceptivo por 10 anos. Observou aumento de pelos no corpo.\n\nO exame ginecológico apresenta-se normal. O exame físico revela: IMC 27 kg/m²; PA 110 × 72 mmHg; cintura abdominal 80 cm; acne e hirsutismo moderado.\n\nOs exames complementares mostram os seguintes resultados:\n\n• TSH: 2,50 mUI/L (VR: 0,60 a 4,48 mUI/L)\n• FSH: 6 mUI/mL (VR: 2 a 30 mUI/mL)\n• Prolactina: 18 ng/mL (VR: 2,8 a 29,2 ng/mL)\n• β-HCG: Negativo\n\nQual é a causa da amenorreia nesse caso?",
    "options": [
      "(A) Insuficiência ovariana prematura.",
      "(B) Hipogonadismo hipogonadotrófico.",
      "(C) Uso prolongado do anticoncepcional.",
      "(D) Anovulação crônica hiperandrogênica."
    ],
    "correctAnswer": 3,
    "explanation": "Amenorreia prolongada com acne e hirsutismo, TSH/prolactina normais e FSH não elevado sugere anovulação crônica hiperandrogênica, frequentemente na síndrome dos ovários policísticos. Uso prévio de contraceptivo não explica isoladamente nove meses de amenorreia.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "ginecologia e obstetrícia",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-95",
    "module": "Pediatria",
    "text": "Criança de 5 anos, abrigada em uma unidade de acolhimento institucional com seus irmãos, de 7 e 2 anos, é levada a uma Unidade Básica de Saúde em razão de apresentar muito prurido no corpo, principalmente nas mãos e na porção inferior do abdome.\n\nO responsável refere que a criança tem alergias na pele desde muito pequena, mas que o prurido e as lesões atuais estão diferentes, tendo iniciado há cerca de 20 dias. Segundo relato, o prurido piora muito à noite, após o banho. Outras crianças do abrigo também apresentam prurido, mas sem as lesões.\n\nAo exame, a paciente apresenta pequenas pápulas eritematosas entre os dedos e no abdome.\n\nConsiderando-se a principal hipótese diagnóstica, além da investigação de contactantes, qual é o medicamento tópico indicado?",
    "options": [
      "(A) Permetrina.",
      "(B) Cetoconazol.",
      "(C) Hidrocortisona.",
      "(D) Permanganato de Potássio."
    ],
    "correctAnswer": 0,
    "explanation": "Prurido noturno intenso, pápulas interdigitais e casos entre contatos em instituição apontam para escabiose. Permetrina tópica é tratamento clássico; tratar contactantes e orientar cuidados com roupas/roupas de cama.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-96",
    "module": "Clínica Médica",
    "text": "Homem de 53 anos, com história de situação de rua, é levado a uma Unidade de Pronto Atendimento pelo SAMU por ter apresentado, cerca de 4 horas antes do atendimento, crise convulsiva tônico-clônica generalizada.\n\nAo exame clínico, o paciente apresenta-se desnutrido, um pouco confuso, com dificuldade na marcha, diplopia e nistagmo.\n\nQual é a principal hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Síndrome de abstinência alcoólica.",
      "(B) Acidente vascular encefálico de cerebelo.",
      "(C) Crise convulsiva epiléptica.",
      "(D) Encefalopatia secundária à deficiência de vitamina B1."
    ],
    "correctAnswer": 3,
    "explanation": "Desnutrição, confusão, ataxia, diplopia e nistagmo formam quadro de encefalopatia de Wernicke por deficiência de tiamina (B1). Exige tiamina parenteral imediata; convulsão exige investigar causas adicionais, inclusive abstinência.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-97",
    "module": "Pediatria",
    "text": "Menina de 5 anos, previamente hígida e com vacinação completa, é levada para a Unidade Básica de Saúde por ter mantido contato domiciliar com a mãe, recém-diagnosticada com tuberculose.\n\nA criança está assintomática. Radiografia de tórax sem alterações e teste de liberação de interferon-gama (IGRA) reagente.\n\nAlém da notificação, a conduta adequada para essa criança é:",
    "options": [
      "(A) Repetir o IGRA em oito semanas e, se reagente, iniciar profilaxia para tuberculose.",
      "(B) Iniciar tratamento para infecção latente e investigar outros comunicantes.",
      "(C) Realizar teste tuberculínico e, se reagente, iniciar isoniazida ou rifampicina.",
      "(D) Iniciar tratamento para tuberculose ativa e solicitar culturas após o término."
    ],
    "correctAnswer": 1,
    "explanation": "Criança contato domiciliar de tuberculose, assintomática, com radiografia normal e IGRA positivo deve receber tratamento de infecção latente depois de excluir doença ativa. Também se deve avaliar outros contatos.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "pediatria",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-98",
    "module": "Cirurgia",
    "text": "Homem de 20 anos foi admitido em centro cirúrgico para realização de nefrolitotomia em rim direito.\n\nQuando o cirurgião chegou à sala operatória, o paciente estava anestesiado e foi posicionado em decúbito lateral direito. Foram realizadas antissepsia e aposição de campos cirúrgicos.\n\nAntes da incisão, a enfermeira-chefe, que estava atendendo a uma intercorrência, apareceu para realizar o protocolo de cirurgia segura. Houve, no entanto, divergência a respeito de qual lado do paciente deveria ser operado.\n\nDiante disso, o cirurgião desparamentou-se e retirou-se do local para revisar os exames de imagem pré-operatórios. Constatado o equívoco quanto à posição, o paciente foi reposicionado para a cirurgia, que ocorreu sem intercorrências. O pós-operatório não teve complicações e o paciente recebeu alta hospitalar no quarto dia.\n\nConsiderando-se a Classificação Internacional de Segurança do Paciente da Organização Mundial da Saúde, essa situação caracteriza-se como:",
    "options": [
      "(A) Dano leve.",
      "(B) Evento adverso.",
      "(C) Circunstância notificável.",
      "(D) Erro médico."
    ],
    "correctAnswer": 2,
    "explanation": "A posição cirúrgica errada foi executada (atingiu o paciente), mas o erro foi reconhecido e corrigido antes da incisão, sem lesão. Na classificação da OMS isso é INCIDENTE SEM DANO, e não mera circunstância notificável (condição com potencial de dano sem ocorrência de incidente) nem near miss puro (interceptado antes de alcançar paciente). Como “incidente sem dano” não consta das alternativas, C é apenas aproximação e há argumento consistente para ANULAÇÃO.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "cirurgia",
      "gabarito técnico",
      "gabarito provisório"
    ],
    "alert": "Gabarito provisório, não oficial (potencial anulação). A resposta marcada é a mais defensável, mas a questão tem ressalvas: leia o comentário."
  },
  {
    "id": "sug-enamed1-99",
    "module": "Saúde Coletiva",
    "text": "Uma adolescente de 15 anos é levada à Unidade Básica de Saúde pelos colegas de escola, os quais relatam que a amiga foi vítima de violência sexual, cometida por pessoa desconhecida, há 3 horas.\n\nO exame ginecológico revela escoriações e hematomas em órgão genital externo; a vagina possui sangue coletado; e não há sangramento ativo na vagina nem no colo do útero.\n\nDepois do acolhimento humanizado, do atendimento em ambiente reservado com a equipe multiprofissional e das devidas providências de cuidado em saúde, segundo Nota Técnica do Ministério da Saúde, a notificação compulsória deverá ser realizada pelo:",
    "options": [
      "(A) Médico que prestou o atendimento após receber o boletim de ocorrência.",
      "(B) Profissional de saúde que prestou o primeiro cuidado.",
      "(C) Gerente da unidade de saúde, desde que haja autorização dos responsáveis legais.",
      "(D) Perito que prestou atendimento à paciente após confirmação da violência."
    ],
    "correctAnswer": 1,
    "explanation": "A notificação de violência sexual deve ser feita pelo serviço/profissional de saúde que realizou atendimento, sem depender de boletim de ocorrência, autorização dos responsáveis ou confirmação pericial. Em criança/adolescente, também cabem medidas de proteção previstas em lei.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "saúde coletiva",
      "gabarito técnico"
    ]
  },
  {
    "id": "sug-enamed1-100",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos comparece a uma Unidade Básica de Saúde referindo desejo de interromper seu tabagismo, após ter tomado ciência do falecimento de seu tio por neoplasia pulmonar.\n\nRelata carga tabágica estimada em 47 maços/ano e falhas em tentativas anteriores de parar de fumar, mostrando preocupação quanto à sua capacidade de alcançar o objetivo.\n\nConsiderando-se o arsenal terapêutico disponível no Sistema Único de Saúde, além da participação em grupos de cessação do tabagismo, qual prescrição farmacológica está indicada para essa paciente?",
    "options": [
      "(A) Buspirona.",
      "(B) Vareniclina.",
      "(C) Bupropiona.",
      "(D) Clonazepam."
    ],
    "correctAnswer": 2,
    "explanation": "Bupropiona é opção farmacológica disponível para cessação do tabagismo no SUS e pode reduzir fissura e sintomas de abstinência quando associada à abordagem comportamental. Verificar contraindicações, como predisposição a convulsões.",
    "commentary": "Gabarito técnico, não oficial: esta questão não tem gabarito publicado por banca.",
    "tags": [
      "clínica médica",
      "gabarito técnico"
    ]
  }
];
