import { Question } from '../types';

// UNIMED-PB 2026 — residência médica (acesso direto). 60 questões, 5 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const UNIMEDPB_2026_QUESTIONS: Question[] = [
  {
    "id": "unimedpb2026-1",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Menina de 6 anos com história de febre alta há 3 dias, conjuntivite sem secreção purulenta, tosse seca e coriza. Nas últimas 24 horas surgiram manchas pequenas esbranquiçadas na mucosa jugal e, no dia seguinte, exantema maculopapular que iniciou na face e se espalhou de forma craniocaudal, confluentes no tronco e discretos nos membros. Calendário vacinal incompleto. Qual o diagnóstico mais provável?",
    "options": [
      "Exantema súbito (HHV-6)",
      "Rubéola",
      "Eritema infeccioso (Parvovírus B19)",
      "Sarampo",
      "Dengue"
    ],
    "correctAnswer": 3,
    "explanation": "Pródromo catarral intenso (febre alta, tosse, coriza e conjuntivite não purulenta) seguido de manchas esbranquiçadas na mucosa jugal — as manchas de Koplik, patognomônicas — e, um a dois dias depois, exantema maculopapular de progressão craniocaudal que conflui no tronco. Somado ao calendário vacinal incompleto (sem as duas doses de tríplice viral), o diagnóstico é sarampo.",
    "commentary": "Exantema súbito (A): acomete lactentes de 6 meses a 2 anos; a febre alta some de repente e só então aparece o exantema, sem pródromo catarral importante.\n\nRubéola (B): febre baixa, bom estado geral, linfonodos retroauriculares e occipitais; o exantema é rosado, pouco confluente e some em cerca de 3 dias.\n\nEritema infeccioso (C): face esbofeteada, depois exantema rendilhado em tronco e membros que reaparece com calor ou exercício; sem tríade catarral.\n\nDengue (E): febre, mialgia, dor retro-orbitária e exantema que costuma surgir na defervescência; não há manchas de Koplik.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (sarampo) / SBP — Doenças exantemáticas",
    "tags": [
      "doenças exantemáticas",
      "sarampo",
      "manchas de Koplik",
      "vacinação"
    ],
    "tip": "Tosse + coriza + conjuntivite + Koplik = sarampo. Exantema craniocaudal e confluente."
  },
  {
    "id": "unimedpb2026-2",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Um lactente de 8 meses com diagnóstico prévio de Tetralogia de Fallot apresenta episódio súbito de cianose intensa, irritabilidade, taquipneia e queda da saturação para 68%, durante um episódio de choro prolongado. No exame físico: sopro sistólico em borda esternal esquerda e taquicardia. Marque a alternativa que tem a conduta terapêutica correta:",
    "options": [
      "Colocar a criança em posição supina, administrar diurético e oxigênio em alto fluxo.",
      "Administrar morfina, aumentar retorno venoso com posição de joelhos ao tórax (posição genu-peitoral), oxigenioterapia e considerar betabloqueador.",
      "Realizar ventilação não invasiva imediata e iniciar vasodilatadores pulmonares.",
      "Administrar adrenalina em bolus para reverter o quadro de hipoperfusão.",
      "Evitar intervenções imediatas, pois as crises hipercianóticas geralmente cessam espontaneamente em poucos minutos."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente com tetralogia de Fallot que, durante choro, tem cianose intensa, irritabilidade e taquipneia: é a crise hipercianótica (crise de hipóxia). O choro aumenta a resistência vascular pulmonar e o espasmo infundibular, desviando mais sangue da direita para a esquerda pela CIV.\n\nO tratamento busca aumentar a resistência vascular sistêmica e o retorno venoso e reduzir o espasmo: posição genupeitoral (joelhos no tórax), oxigênio, morfina (seda e reduz a hiperpneia) e, se não houver resposta, betabloqueador (propranolol ou esmolol), além de volume, bicarbonato e fenilefrina nos casos refratários.",
    "commentary": "Supino com diurético (A): a posição supina não aumenta a resistência sistêmica, e o diurético reduz a pré-carga, piorando o shunt.\n\nVNI e vasodilatador pulmonar (C): o obstáculo é anatômico (estenose infundibular), não hipertensão pulmonar; não é a conduta inicial.\n\nAdrenalina em bolus (D): o efeito inotrópico e cronotrópico piora o espasmo infundibular e a crise.\n\nEsperar (E): a crise pode evoluir para convulsão, AVC e morte; precisa de tratamento imediato.",
    "reference": "SBP — Cardiopatias congênitas cianogênicas / Nelson Textbook of Pediatrics",
    "tags": [
      "cardiopatias congênitas",
      "tetralogia de Fallot",
      "crise hipercianótica",
      "emergências pediátricas"
    ],
    "tip": "Crise de Fallot: joelho no peito, O₂, morfina e propranolol."
  },
  {
    "id": "unimedpb2026-3",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Uma criança de 3 anos chega ao pronto atendimento com suspeita de sepse grave. FC 170 bpm, com extremidades frias, pulsos finos, tempo de enchimento capilar > 4 segundos, hipotensão, oligúria e sensório rebaixado. Já recebeu 40 mL/kg de cristaloide com resposta mínima. Qual a intervenção mais adequada a se seguir neste momento?",
    "options": [
      "Administrar mais 20 ml/kg de cristaloide e aguardar estabilização antes de iniciar qualquer droga.",
      "Iniciar noradrenalina como primeira escolha e aguardar hemograma, PCR e procalcitonina para iniciar antibioticoterapia.",
      "Iniciar antibiótico e droga vasoativa - adrenalina em bomba de infusão contínua",
      "Ajustar posição do paciente, infundir mais 40mL/kg de cristaloide e observar antes de qualquer intervenção adicional.",
      "Realizar intubação traqueal, iniciar antibioticoterapia e fazer amiodarona."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com choque séptico frio (extremidades frias, pulsos finos, TEC > 4 s, hipotensão, oligúria e rebaixamento do sensório) que já recebeu 40 mL/kg de cristaloide com resposta mínima: é choque refratário a fluidos.\n\nPela Surviving Sepsis Campaign pediátrica, o antibiótico deve ser feito na primeira hora, sem esperar exames, e após 40–60 mL/kg sem resposta inicia-se droga vasoativa. No choque frio, de baixo débito, a adrenalina é a primeira escolha (noradrenalina é preferida no choque quente, vasodilatado).",
    "commentary": "Mais 20 mL/kg e esperar (A): já houve 40 mL/kg sem resposta; atrasar o vasopressor aumenta a mortalidade e o excesso de volume leva à sobrecarga.\n\nNoradrenalina e esperar exames para o antibiótico (B): o antibiótico não pode aguardar resultados, e no choque frio a droga de escolha é a adrenalina.\n\nMais 40 mL/kg e observar (D): mais volume sem droga vasoativa num choque refratário só atrasa o tratamento.\n\nIntubação com amiodarona (E): não há arritmia que justifique amiodarona; a prioridade é antibiótico e suporte hemodinâmico.",
    "reference": "Surviving Sepsis Campaign — Diretrizes pediátricas (2020) / PALS",
    "tags": [
      "sepse",
      "choque séptico",
      "emergências pediátricas",
      "drogas vasoativas"
    ],
    "tip": "Choque frio refratário a volume na criança: adrenalina. Choque quente: noradrenalina."
  },
  {
    "id": "unimedpb2026-4",
    "topography": "11",
    "topic": "Obesidade infantil",
    "module": "Pediatria",
    "text": "A obesidade infantil é resultado de múltiplos fatores que precisam ser identificados precocemente para que se façam intervenções eficazes, prevenindo complicações metabólicas e promovendo um crescimento saudável. A seguir, marque verdadeiro (V) ou falso (F) sobre o tema proposto:\nI. O consumo de alimentos ultraprocessados é reconhecido pela Sociedade Brasileira de Pediatria (SBP) como um dos principais fatores do ambiente obesogênico associado à obesidade infantil.\nII. A SBP recomenda que refeições sejam realizadas com telas (TV/celular), pois isso aumenta o tempo em que a criança permanece à mesa e melhora o vínculo familiar.\nIII. Dormir poucas horas aumenta o risco de ganho de peso nas crianças, devido a alterações hormonais que aumentam fome e reduzem saciedade.\nIV. O tempo de tela deve ser limitado a no máximo duas horas diárias, sem contar as atividades escolares, como medida de prevenção à obesidade infantil.\nV. Estudos mostram que crianças de contextos socioeconômicos mais vulneráveis podem ter maior risco de obesidade, devido à maior exposição ao ambiente obesogênico.",
    "options": [
      "V, F, V, F, V",
      "V, F, V, V, V",
      "V, V, F, V, V",
      "V, V, V, V, F",
      "F, F, F, V, V"
    ],
    "correctAnswer": 1,
    "explanation": "I — Verdadeira: o consumo de ultraprocessados é um dos principais componentes do ambiente obesogênico segundo a SBP.\n\nII — Falsa: a SBP recomenda refeições sem telas; comer distraído reduz a percepção de saciedade e aumenta a ingestão.\n\nIII — Verdadeira: sono curto reduz leptina e aumenta grelina, elevando a fome.\n\nIV — Verdadeira (pelo gabarito): limitar o tempo de tela recreativo, no máximo cerca de 2 horas por dia para crianças maiores e adolescentes, é medida de prevenção.\n\nV — Verdadeira: vulnerabilidade socioeconômica aumenta a exposição a alimentos baratos e calóricos e reduz o acesso a lazer ativo.\n\nSequência: V, F, V, V, V.",
    "commentary": "A (V, F, V, F, V): considera falsa a limitação do tempo de tela, que é recomendação da SBP.\n\nC (V, V, F, V, V): aceita refeições com telas e nega o papel do sono.\n\nD (V, V, V, V, F): aceita refeições com telas e nega o efeito da vulnerabilidade social.\n\nE (F, F, F, V, V): nega o papel dos ultraprocessados e do sono.\n\nObservação: a SBP escalona o limite de tela por idade (nenhuma tela antes de 2 anos, até 1 hora dos 2 aos 5 anos e 1–2 horas dos 6 aos 10 anos); o item IV simplifica para 2 horas, mas a banca o considerou verdadeiro.",
    "reference": "SBP — Manual de Orientação: Obesidade na infância e adolescência (3ª ed.) / SBP — Menos telas, mais saúde",
    "tags": [
      "obesidade infantil",
      "telas",
      "sono",
      "prevenção"
    ],
    "tip": "Ambiente obesogênico: ultraprocessados, telas, pouco sono e vulnerabilidade social."
  },
  {
    "id": "unimedpb2026-5",
    "topography": "7.2",
    "topic": "Escabiose",
    "module": "Pediatria",
    "text": "Uma criança de 5 anos apresenta prurido intenso há 3 semanas, com piora à noite. No exame físico, observam-se pápulas eritematosas, escoriações e lesões agrupadas nas axilas, região periumbilical e nas mãos. A mãe relata que o avô, que mora na mesma casa, também tem “muita coceira nas mãos”. Qual conduta mais adequada para esse caso?",
    "options": [
      "Tratar apenas a criança com ivermectina.",
      "Prescrever hidrocortisona tópica para reduzir o prurido.",
      "Solicitar exame parasitológico da pele antes de iniciar o tratamento, pois o diagnóstico sempre exige confirmação.",
      "Iniciar permetrina 5% para a criança e tratar simultaneamente todos os contatos domiciliares, mesmo assintomáticos.",
      "Evitar retorno escolar por 10 dias, mesmo após início do tratamento, devido à alta transmissibilidade."
    ],
    "correctAnswer": 3,
    "explanation": "Prurido intenso com piora noturna, pápulas e escoriações em axilas, região periumbilical e mãos, e um familiar com o mesmo prurido: quadro típico de escabiose, cujo diagnóstico é clínico-epidemiológico.\n\nA conduta é tratar o paciente com escabicida (permetrina 5% é a primeira escolha em crianças, aplicada do pescoço para baixo e repetida em 7 dias) e tratar todos os contatos domiciliares ao mesmo tempo, mesmo sem sintomas, para evitar reinfestação. Roupas de cama e roupas usadas devem ser lavadas em água quente.",
    "commentary": "Só a criança com ivermectina (A): sem tratar os contatos há reinfestação; além disso, a ivermectina não é a primeira escolha em crianças pequenas (evitada abaixo de 15 kg).\n\nHidrocortisona (B): alivia o prurido, mas não elimina o ácaro.\n\nExame parasitológico obrigatório (C): o diagnóstico é clínico; o raspado tem baixa sensibilidade e não deve atrasar o tratamento.\n\nAfastamento por 10 dias (E): a criança pode voltar à escola 24 horas após o início do tratamento.",
    "reference": "SBD — Escabiose / Ministério da Saúde — Protocolo de dermatologia na Atenção Básica",
    "tags": [
      "dermatologia",
      "escabiose",
      "permetrina",
      "contatos domiciliares"
    ],
    "tip": "Escabiose: trate o paciente e TODOS da casa no mesmo dia."
  },
  {
    "id": "unimedpb2026-6",
    "topography": "13",
    "module": "Pediatria",
    "text": "Um adolescente de 14 anos apresenta histórico de desatenção desde a infância, desempenho escolar irregular, irritabilidade, impulsividade e dificuldade significativa em organizar tarefas. A mãe relata que, nos últimos meses, o jovem passou a dormir tarde, usa telas até tarde e frequentemente perde horário da escola. Qual alternativa está correta a respeito do diagnóstico clínico de TDAH?",
    "options": [
      "O diagnóstico de TDAH em adolescentes deve ser baseado apenas no relato familiar, pois frequentemente o próprio jovem não reconhece seus sintomas.",
      "Para confirmar TDAH, é necessário que os sintomas tenham início após os 12 anos, quando a demanda escolar aumenta.",
      "A investigação deve incluir avaliação da rotina de sono, uso de telas e presença de comorbidades como ansiedade e depressão.",
      "O diagnóstico de TDAH deve ser evitado na presença de dificuldades escolares, pois estas podem confundir a avaliação.",
      "O uso de escalas comportamentais substitui a avaliação clínica quando bem preenchidas por pais e professores."
    ],
    "correctAnswer": 2,
    "explanation": "O diagnóstico de TDAH é clínico e exige sintomas de desatenção e/ou hiperatividade-impulsividade presentes antes dos 12 anos, em mais de um ambiente, com prejuízo funcional e não explicados por outra condição.\n\nNo adolescente, a avaliação precisa incluir diagnósticos diferenciais e comorbidades: privação de sono e uso excessivo de telas podem imitar ou agravar desatenção e irritabilidade, e ansiedade, depressão e uso de substâncias são comorbidades frequentes. Por isso a investigação deve incluir rotina de sono, telas e comorbidades.",
    "commentary": "Só relato familiar (A): o diagnóstico usa várias fontes — o próprio adolescente, a família e a escola.\n\nInício após 12 anos (B): o DSM-5 exige vários sintomas antes dos 12 anos.\n\nEvitar o diagnóstico com dificuldade escolar (D): o prejuízo escolar faz parte do quadro e não impede o diagnóstico.\n\nEscalas substituem a avaliação (E): escalas (como SNAP-IV) são complementares; não substituem a entrevista clínica.",
    "reference": "DSM-5-TR — Transtorno de déficit de atenção/hiperatividade / SBP — Documento científico sobre TDAH",
    "tags": [
      "psiquiatria infantil",
      "TDAH",
      "adolescência",
      "sono",
      "telas"
    ],
    "tip": "TDAH: sintomas antes dos 12 anos, em 2 ou mais ambientes. Sempre descartar sono ruim, telas e ansiedade/depressão."
  },
  {
    "id": "unimedpb2026-7",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos apresenta nos últimos 3 meses episódios de irritabilidade, palidez, sudorese noturna, além de dor óssea intermitente, que acorda a criança à noite. No exame físico, há equimoses em membros inferiores sem história traumática. A mãe relata que a criança ficou “menos ativa” e perdeu peso nesse período. Qual é o diagnóstico mais provável?",
    "options": [
      "A associação de dor óssea persistente, palidez e equimoses sem trauma é altamente sugestiva de doença linfoproliferativa maligna.",
      "A dor óssea que desperta a criança à noite é geralmente compatível com dor de crescimento e não necessita investigação adicional.",
      "A presença de irritabilidade e perda de peso isoladamente não indica câncer infantil.",
      "A palidez com equimoses recorrentes sugere anemia carencial e deve ser manejada inicialmente com suplementação empírica de ferro.",
      "Sudorese noturna em crianças pequenas é comum e não faz parte dos sinais de alerta para malignidades."
    ],
    "correctAnswer": 0,
    "explanation": "Pré-escolar com palidez, equimoses sem trauma, dor óssea que acorda à noite, sudorese noturna, perda de peso e queda do estado geral: são sinais de infiltração medular, com anemia, plaquetopenia e dor óssea. O quadro sugere fortemente leucemia aguda (a leucemia linfoblástica aguda é o câncer mais comum da infância), e a alternativa correta descreve essa associação como neoplasia linfoproliferativa maligna. A conduta é hemograma com esfregaço e encaminhamento urgente à oncologia pediátrica.",
    "commentary": "Dor de crescimento (B): é bilateral, nas pernas, sem limitar a atividade e sem sinais sistêmicos; dor que acorda a criança somada a palidez e equimoses é sinal de alerta.\n\nIrritabilidade e perda de peso isoladas (C): aqui não estão isoladas — fazem parte de um conjunto de sinais de malignidade.\n\nAnemia carencial com ferro empírico (D): a deficiência de ferro não explica equimoses nem dor óssea; tratar empiricamente atrasa o diagnóstico.\n\nSudorese noturna comum (E): é sintoma B e um sinal de alerta para leucemias e linfomas.",
    "reference": "INCA / Ministério da Saúde — Diagnóstico precoce do câncer na criança e no adolescente",
    "tags": [
      "oncologia pediátrica",
      "leucemia linfoblástica aguda",
      "dor óssea",
      "sinais de alerta"
    ],
    "tip": "Dor óssea noturna + palidez + equimoses na criança = leucemia até prova em contrário."
  },
  {
    "id": "unimedpb2026-8",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "A amamentação é o método mais eficaz para garantir nutrição adequada, proteção imunológica e vínculo entre mãe e bebê. Seu sucesso depende de técnica correta, livre demanda e manejo adequado de intercorrências como ingurgitamento e fissuras. A seguir, marque verdadeiro (V) ou falso (F):\nI. A amamentação reduz risco de otite média, enterocolite necrosante, infecções respiratórias e síndrome da morte súbita do lactente.\nII. Contraindicações absolutas à amamentação incluem galactosemia clássica e infecção materna por HIV, de acordo com orientações das diretrizes brasileiras atuais.\nIII. O “leite anterior” (foremilk) é mais rico em gordura, enquanto o “leite posterior” (hindmilk) é mais diluído e rico em lactose.\nIV. A pega correta corresponde ao bebê abocanhar a maior parte da aréola, lábios evertidos e queixo tocando a mama, com sucção lenta e profunda.\nV. Ordenhar o leite antes de cada mamada, de forma completa, ajuda a prevenir fissuras e é prática recomendada na primeira semana.",
    "options": [
      "F, V, V, F, V",
      "V, F, V, V, V",
      "V, F, F, V, V",
      "F, V, V, F, V",
      "V, V, F, V, F"
    ],
    "correctAnswer": 4,
    "explanation": "I — Verdadeira: o aleitamento reduz otite média, infecções respiratórias, enterocolite necrosante (em prematuros) e síndrome da morte súbita do lactente.\n\nII — Verdadeira: no Brasil, HIV (e HTLV-1/2) materno e galactosemia clássica do bebê contraindicam a amamentação.\n\nIII — Falsa: está invertido — o leite anterior é mais aquoso e rico em lactose; o posterior é mais rico em gordura e dá saciedade.\n\nIV — Verdadeira: boca bem aberta abocanhando a maior parte da aréola, lábios evertidos, queixo tocando a mama e sucção lenta e profunda.\n\nV — Falsa: não se recomenda ordenhar antes de toda mamada; a ordenha é útil apenas para amolecer a aréola no ingurgitamento.\n\nSequência: V, V, F, V, F.",
    "commentary": "A e D (F, V, V, F, V): negam os benefícios do aleitamento e consideram corretos o leite anterior gorduroso e a ordenha de rotina.\n\nB (V, F, V, V, V): nega as contraindicações absolutas e aceita os dois itens falsos.\n\nC (V, F, F, V, V): nega as contraindicações e aceita a ordenha de rotina.",
    "reference": "Ministério da Saúde — Saúde da Criança: Aleitamento materno e alimentação complementar (Cadernos de Atenção Básica nº 23)",
    "tags": [
      "aleitamento materno",
      "pega",
      "contraindicações",
      "HIV"
    ],
    "tip": "Leite anterior = água e lactose; posterior = gordura e saciedade."
  },
  {
    "id": "unimedpb2026-9",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Criança de 7 anos chega ao PS com SatO₂ 84% em ar ambiente, FR 50irpm, pulso paradoxal, tiragens importantes. Recebeu salbutamol contínuo por 1h + corticoide EV sem melhora. Qual será o próximo passo?",
    "options": [
      "Sulfato de magnésio EV",
      "Antibiótico",
      "Intubação imediata",
      "Adicionar teofilina",
      "Nebulização com adrenalina"
    ],
    "correctAnswer": 0,
    "explanation": "Crise de asma grave (SatO₂ 84%, FR 50 irpm, pulso paradoxal e tiragem importante) sem resposta a 1 hora de salbutamol contínuo associado a corticoide EV. O próximo passo indicado na crise grave refratária é o sulfato de magnésio EV (25–50 mg/kg, máximo 2 g, em 20 minutos): é broncodilatador e reduz a necessidade de internação em UTI e de intubação.\n\nA criança ainda está consciente; a intubação fica para falência respiratória (sonolência, exaustão, hipercapnia progressiva).",
    "commentary": "Antibiótico (B): a crise de asma é, em geral, desencadeada por vírus; antibiótico não trata o broncoespasmo.\n\nIntubação imediata (C): é medida de exceção, para rebaixamento de consciência ou exaustão; deve-se primeiro esgotar o tratamento clínico.\n\nTeofilina (D): tem margem terapêutica estreita e muitos efeitos adversos; é pouco usada e fica atrás do magnésio.\n\nAdrenalina nebulizada (E): é usada na laringite (crupe), não na asma; adrenalina sistêmica fica para anafilaxia.",
    "reference": "GINA 2024 / SBP — Manejo da crise de asma na emergência pediátrica",
    "tags": [
      "asma infantil",
      "crise de asma",
      "sulfato de magnésio",
      "emergências pediátricas"
    ],
    "tip": "Asma grave sem resposta a β2 + corticoide: sulfato de magnésio EV."
  },
  {
    "id": "unimedpb2026-10",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Menina de 9 anos com febre baixa, tosse seca persistente há 10 dias, cefaleia e ausculta com MV preservado, estertores finos esparsos. Saturando 96%. RX: infiltrado intersticial difuso. Diante desse quadro, para qual agente etiológico o tratamento antimicrobiano deve ser direcionado e qual é o tratamento mais apropriado?",
    "options": [
      "S. pneumoniae – amoxicilina VO",
      "Pneumocystis jirovecii – sulfametoxazol-trimetoprim",
      "H. influenzae – amoxicilina + clavulanato",
      "Mycoplasma pneumoniae – macrolídeo",
      "S. aureus – oxacilina"
    ],
    "correctAnswer": 3,
    "explanation": "Escolar de 9 anos com febre baixa, tosse seca persistente, cefaleia, bom estado geral (SatO₂ 96%) e radiografia com infiltrado intersticial difuso desproporcional ao exame físico: é a pneumonia atípica, cujo principal agente nessa idade é o Mycoplasma pneumoniae.\n\nComo o micoplasma não tem parede celular, os betalactâmicos não funcionam; o tratamento é com macrolídeo (azitromicina, claritromicina).",
    "commentary": "Pneumococo com amoxicilina (A): causa pneumonia típica, com febre alta, consolidação lobar e estado geral mais comprometido.\n\nPneumocystis (B): ocorre em imunossuprimidos (HIV, quimioterapia), com hipoxemia importante.\n\nH. influenzae (C): pneumonia típica, hoje rara em vacinados.\n\nS. aureus (E): pneumonia grave, com pneumatoceles, derrame e toxemia; não combina com o bom estado geral.",
    "reference": "SBP — Pneumonia adquirida na comunidade na infância / IDSA — Pediatric CAP",
    "tags": [
      "pneumonia infantil",
      "pneumonia atípica",
      "micoplasma",
      "macrolídeos"
    ],
    "tip": "Escolar com tosse seca arrastada e RX pior que o exame: Mycoplasma → macrolídeo."
  },
  {
    "id": "unimedpb2026-11",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Criança de 4 anos apresenta diarreia com sangue há 2 dias, febre de 39ºC, dor abdominal, tenesmo e prostração. Ao exame apresenta palidez, tempo de enchimento capilar de 2 segundos, PA normal para idade, mas extremidades frias. Segundo o Ministério da Saúde, com base no manejo da diarreia com sangue, a conduta inicial correta é:",
    "options": [
      "Fazer expansão com SF 0.9% e administrar albendazol por 5 dias.",
      "Solicitar coprocultura antes de iniciar antibiótico.",
      "Iniciar antibiótico imediatamente, sendo a escolha para o caso Azitromicina.",
      "Oferecer apenas SRO, pois pode ser um quadro viral.",
      "Prescrever metronidazol empírico."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com disenteria (diarreia com sangue), febre alta, tenesmo e prostração: o quadro sugere shigelose. Pelo manejo do Ministério da Saúde, diarreia com sangue com comprometimento do estado geral deve receber antibiótico desde o início, sem esperar exames, junto com a hidratação conforme o plano indicado.\n\nO antibiótico recomendado pelo Ministério da Saúde para crianças é a azitromicina (ciprofloxacino é alternativa). O TEC de 2 s e a PA normal, com extremidades frias, indicam que a criança precisa de avaliação cuidadosa da hidratação, mas não mudam a necessidade de antibiótico.",
    "commentary": "Expansão com albendazol (A): a disenteria aguda febril não é causada por helmintos; albendazol não tem papel aqui.\n\nCoprocultura antes do antibiótico (B): a cultura pode ser colhida, mas não deve atrasar o tratamento de um quadro com toxemia.\n\nSó SRO (D): a presença de sangue com febre e prostração indica etiologia bacteriana invasiva, que pede antibiótico.\n\nMetronidazol (E): é usado na amebíase ou giardíase, não como primeira escolha na disenteria bacteriana.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (cartaz) / SBP — Diarreia aguda",
    "tags": [
      "diarreia aguda",
      "disenteria",
      "shigelose",
      "azitromicina"
    ],
    "tip": "Diarreia com sangue + toxemia na criança: antibiótico já (azitromicina)."
  },
  {
    "id": "unimedpb2026-12",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "A obstrução das vias aéreas por corpo estranho é uma emergência frequente na infância e exige reconhecimento rápido e aplicações de manobras corretas em cada faixa etária para evitar hipóxia e parada respiratória. A seguir marque verdadeiro (V) ou falso (F) sobre as intervenções recomendadas segundo o CIRCULATION/AHA 2025:\nI. Para lactentes (< 1 ano), se mantém como manobra padrão: 5 golpes interescapulares alternados com 5 compressões torácicas com 2 dedos.\nII. Se a criança com OVACE tornar-se inconsciente, recomenda-se iniciar RCP imediatamente, mesmo que se suspeite de corpo estranho impactado.\nIII. Para crianças ≥ 1 ano, a AHA 2025 reforça que tapas nas costas não devem ser realizadas, sendo substituídas exclusivamente por compressões abdominais (Heimlich).\nIV. Para crianças ≥ 1 ano, se o socorrista estiver sozinho, é recomendado primeiro aplicar a sequência de manobras “anti-OVACE” e só depois acionar o serviço de emergência, caso a obstrução não seja aliviada.\nV. Após a resolução da obstrução, a recomendação AHA 2025 é observar a criança e encaminhar para avaliação médica mesmo se estiver assintomática.",
    "options": [
      "V, V, F, F, V",
      "F, F, V, F, V",
      "V, F, V, V, F",
      "V, V, F, F, V",
      "V, V, F, V, F"
    ],
    "correctAnswer": 3,
    "explanation": "I — Verdadeira: no lactente, a manobra é alternar 5 golpes nas costas (entre as escápulas) com 5 compressões torácicas, com a cabeça mais baixa que o tronco; a compressão abdominal é contraindicada.\n\nII — Verdadeira: se a vítima perde a consciência, inicia-se RCP; as compressões torácicas também ajudam a deslocar o corpo estranho. Ao abrir a via aérea, retira-se o objeto apenas se for visível.\n\nIII — Falsa: a AHA 2025 passou a recomendar, para crianças, alternar golpes nas costas e compressões abdominais; os golpes nas costas não foram abolidos.\n\nIV — Falsa: o socorrista sozinho deve pedir ajuda (pelo celular, em viva-voz) sem atrasar as manobras; não se recomenda esgotar as manobras antes de acionar o serviço de emergência.\n\nV — Verdadeira: após a desobstrução, a criança deve ser avaliada por médico, pelo risco de lesões causadas pelas manobras e de restos de corpo estranho.\n\nSequência: V, V, F, F, V.",
    "commentary": "Atenção: na prova, as alternativas A e D trazem exatamente a mesma sequência (V, V, F, F, V). O gabarito oficial marcou a D, mas a A é idêntica e também é considerada correta aqui.\n\nB (F, F, V, F, V): nega a manobra do lactente e a RCP na vítima inconsciente.\n\nC (V, F, V, V, F): nega a RCP na vítima inconsciente e aceita os itens III e IV, que são falsos.\n\nE (V, V, F, V, F): aceita o item IV e nega a avaliação médica após a desobstrução.",
    "reference": "American Heart Association — Diretrizes de RCP e ACE 2025 (Suporte Básico de Vida pediátrico)",
    "tags": [
      "emergências pediátricas",
      "OVACE",
      "engasgo",
      "suporte básico de vida",
      "AHA 2025"
    ],
    "tip": "Lactente: 5 golpes nas costas + 5 compressões torácicas. Ficou inconsciente: RCP.",
    "alsoAccepted": [
      0
    ],
    "alert": "As alternativas A e D da prova são idênticas (V, V, F, F, V). O gabarito marcou a D; a A também é aceita."
  },
  {
    "id": "unimedpb2026-13",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "A abordagem clínica das lesões mamárias, sejam elas palpáveis ou não palpáveis, é complexa e multifatorial. Essa complexidade reflete a necessidade de condutas individualizadas, baseadas em aspectos clínicos e genéticos da paciente, nas características morfológicas e histológicas da lesão. Sobre a abordagem de lesões mamárias, associe os itens utilizando os códigos a seguir:\nI. Lesões Não Palpáveis (LNP)\nII. Nódulos\nIII. Fluxo Papilar\nIV. Distorção Arquitetural\n( ) Descrito como patológico quando espontâneo, unilateral, uniductal e de aparência cristalina ou sanguinolenta.\n( ) Podem ser identificados no exame clínico, são classificados como benignos (BI-RADS 2) ou suspeitos (BI-RADS 4 e 5), os benignos não necessitando intervenção e os suspeitos exigindo biópsia.\n( ) São detectados exclusivamente por mamografia, ultrassonografia ou ressonância magnética e classificadas pelo sistema BI-RADS.\n( ) Frequentemente benigna em casos pós-cirúrgicos, mas na ausência de histórico de cirurgia, é considerada suspeita (BI-RADS 4) e deve ser investigada.\n\nAssinale a alternativa que apresenta a sequência CORRETA:",
    "options": [
      "I - II - III - IV.",
      "III - II - I - IV.",
      "IV - I - II - III.",
      "III - I - IV - II.",
      "II - III - I - IV."
    ],
    "correctAnswer": 1,
    "explanation": "Associação dos itens:\n\n• Fluxo papilar (III): é patológico quando espontâneo, unilateral, uniductal e cristalino (\"água de rocha\") ou sanguinolento.\n• Nódulos (II): podem ser palpados ao exame clínico; BI-RADS 2 é benigno e só acompanha, BI-RADS 4 e 5 exigem biópsia.\n• Lesões não palpáveis (I): só aparecem na mamografia, na ultrassonografia ou na ressonância e são classificadas pelo BI-RADS.\n• Distorção arquitetural (IV): após cirurgia costuma ser cicatriz benigna; sem cirurgia prévia é suspeita (BI-RADS 4) e deve ser biopsiada.\n\nSequência: III - II - I - IV.",
    "commentary": "A (I - II - III - IV): troca lesão não palpável por fluxo papilar e vice-versa.\n\nC (IV - I - II - III): atribui a descrição do fluxo papilar à distorção arquitetural.\n\nD (III - I - IV - II): atribui a descrição dos nódulos palpáveis às lesões não palpáveis.\n\nE (II - III - I - IV): atribui a descrição do fluxo papilar aos nódulos.",
    "reference": "FEBRASGO — Tratado de Ginecologia (Mastologia) / ACR BI-RADS Atlas, 5ª ed.",
    "tags": [
      "mastologia",
      "BI-RADS",
      "fluxo papilar",
      "distorção arquitetural",
      "nódulo de mama"
    ],
    "tip": "Fluxo papilar suspeito: espontâneo, unilateral, uniductal, cristalino ou sanguinolento."
  },
  {
    "id": "unimedpb2026-14",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "O papilomavírus humano (HPV) é considerado o agente da infecção viral sexualmente transmissível mais prevalente em todo o mundo. A maioria dos indivíduos sexualmente ativos (mais de 80%) se infectará em algum momento da vida. Sobre o vírus HPV assinale a alternativa INCORRETA:",
    "options": [
      "O vírus é composto por uma cápsula dentro da qual há um RNA em dupla fita de cerca de 8 mil pares de bases.",
      "O genoma do HPV é dividido em áreas com funções determinadas: E (Early) e L (Late).",
      "O HPV tem a capacidade de aderir de forma não integrada ao DNA celular (forma epissomal) ou se integrar.",
      "Na maioria das lesões intraepiteliais escamosas de alto grau, o DNA viral se integra ao DNA do hospedeiro por uma quebra no nível de E2.",
      "Os HPVs são classificados como de baixo e alto risco oncogênico, conforme sua associação com tumores invasivos."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a INCORRETA. O HPV é um vírus de DNA de dupla fita circular, com cerca de 8 mil pares de bases, envolto por um capsídeo sem envelope. Dizer que o genoma é RNA está errado — essa é a resposta.",
    "commentary": "Genes E e L (B): correto; os genes precoces (E1–E7) controlam replicação e transformação celular, e os tardios (L1, L2) formam o capsídeo.\n\nForma epissomal ou integrada (C): correto; nas lesões de baixo grau o vírus costuma ficar epissomal, e nas de alto grau e no câncer tende a se integrar.\n\nIntegração com quebra em E2 (D): correto; a perda de E2, que reprime E6 e E7, libera essas oncoproteínas, que inativam p53 e pRb.\n\nBaixo e alto risco (E): correto; tipos 6 e 11 são de baixo risco (verrugas), e 16 e 18 de alto risco oncogênico.",
    "reference": "FEBRASGO — Tratado de Ginecologia (HPV e lesões precursoras) / INCA — Diretrizes para o rastreamento do câncer do colo do útero",
    "tags": [
      "HPV",
      "câncer de colo uterino",
      "virologia",
      "oncogênese"
    ],
    "tip": "HPV = DNA dupla fita circular. E6 inativa p53; E7 inativa pRb."
  },
  {
    "id": "unimedpb2026-15",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "O planejamento familiar vem sendo amplamente discutido em todo o mundo para garantir às mulheres e seus parceiros a decisão sobre sua vida reprodutiva; direito de escolha em ter ou não filhos, quantidade de filhos e espaçamento de tempo entre as gestações; acesso aos métodos contraceptivos e pleno exercício de sua sexualidade. Sobre os métodos contraceptivos modernos, e considerando suas descrições, associe os itens utilizando os códigos a seguir:\nI. Contraceptivos orais combinados\nII. Pílulas somente com progestagênio\nIII. Dispositivos intrauterinos (DIU)\nIV. Implantes subdérmicos\n( ) Bastões pequenos e flexíveis colocados sob a pele do braço; contém apenas progestagênio.\n( ) Torna o muco cervical espesso e previne ovulação, pode ser usado na amamentação, a tomada é diária sem pausa.\n( ) Contém estrogênio e progestagênio, inibem a ovulação > 99% com uso correto e consistente.\n( ) Dispositivo de plástico flexível, pequeno, inserido no útero.\n\nAssinale a alternativa que apresenta a sequência CORRETA:",
    "options": [
      "IV - II - I - III.",
      "II - III - I - V.",
      "IV - I - II - III.",
      "I - II - IV - III.",
      "III - IV - II - I."
    ],
    "correctAnswer": 0,
    "explanation": "Associação:\n\n• Bastões flexíveis sob a pele do braço, só com progestagênio → implante subdérmico (IV).\n• Espessa o muco cervical, pode ser usado na amamentação, tomada diária sem pausa → pílula só de progestagênio (II).\n• Estrogênio + progestagênio, inibe a ovulação → contraceptivo oral combinado (I).\n• Dispositivo pequeno de plástico flexível inserido no útero → DIU (III).\n\nSequência: IV - II - I - III.",
    "commentary": "B (II - III - I - V): começa errado e cita um item V que não existe.\n\nC (IV - I - II - III): inverte as pílulas combinada e só de progestagênio.\n\nD (I - II - IV - III): atribui ao contraceptivo combinado a descrição do implante.\n\nE (III - IV - II - I): atribui ao DIU a descrição do implante no braço.",
    "reference": "OMS — Critérios médicos de elegibilidade para uso de métodos anticoncepcionais / FEBRASGO — Manual de Anticoncepção",
    "tags": [
      "contracepção",
      "implante subdérmico",
      "minipílula",
      "DIU",
      "planejamento reprodutivo"
    ],
    "tip": "Lactante: progestagênio isolado (minipílula, implante, DIU). Combinado inibe ovulação."
  },
  {
    "id": "unimedpb2026-16",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "A queixa mais comumente referida por pacientes com prolapso de órgãos pélvicos (POP) é sensação de peso ou “bola na vagina”. Isso pode significar que ela já pode ter inclusive visualizado a saída do conteúdo prolapsado. Sobre os prolapsos genitais, analise as sentenças a seguir:\nI. O prolapso dos órgãos pélvicos é uma condição prevalente em idades avançadas e apresenta grande associação com a cesariana.\nII. O diagnóstico, comumente, é confirmado pelo exame físico, com a mulher em posição ginecológica e em posição ortostática, com realização da manobra de Valsalva.\nIII. Existem vários fatores de risco associados ao POP, como idade acima de 60 anos, multiparidade e doenças que levam a aumento da pressão intra-abdominal.\nIV. O tratamento dos prolapsos é indicado a mulheres sintomáticas e devem ser sempre cirúrgicos.\n\nAssinale a alternativa CORRETA:",
    "options": [
      "Somente a sentença I está correta.",
      "As sentenças I e IV estão corretas.",
      "As sentenças II e III estão corretas.",
      "Somente a sentença II está correta.",
      "Todas as sentenças estão corretas."
    ],
    "correctAnswer": 2,
    "explanation": "I — Falsa: o prolapso é mais comum em idosas, mas o principal fator obstétrico é o parto vaginal; a cesariana não é associada ao prolapso (é, se algo, protetora).\n\nII — Verdadeira: o diagnóstico é clínico, com exame em posição ginecológica e em pé, com manobra de Valsalva para mostrar o grau máximo do prolapso (classificação POP-Q).\n\nIII — Verdadeira: idade avançada, multiparidade, obesidade, tosse crônica, constipação e esforço físico aumentam o risco.\n\nIV — Falsa: trata-se apenas a mulher sintomática, mas há opções conservadoras — fisioterapia do assoalho pélvico e pessário — antes ou no lugar da cirurgia.\n\nCorretas: II e III.",
    "commentary": "A (só I): a associação é com parto vaginal, não com cesariana.\n\nB (I e IV): ambas falsas — cesariana não é fator de risco e o tratamento não é sempre cirúrgico.\n\nD (só II): o item III também está correto.\n\nE (todas): I e IV são falsas.",
    "reference": "FEBRASGO — Prolapso genital (Protocolo) / IUGA/ICS — Terminologia e classificação POP-Q",
    "tags": [
      "uroginecologia",
      "prolapso genital",
      "assoalho pélvico",
      "pessário"
    ],
    "tip": "Prolapso: fator de risco é parto vaginal. Tratamento pode ser pessário ou fisioterapia, não só cirurgia."
  },
  {
    "id": "unimedpb2026-17",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "A “janela de oportunidade” é um termo amplamente utilizado quando se fala em climatério é caracterizada como o período da vida em que os benefícios serão máximos e os efeitos colaterais adversos serão mínimos. Sobre a terapia hormonal (TH) no climatério, assinale a alternativa INCORRETA:",
    "options": [
      "Em mulheres mais velhas, especialmente aquelas com mais de 10 anos após a menopausa, é comum a presença de placas ateroscleróticas avançadas já estabelecidas, não sendo indicada a administração de estrogênio exógeno.",
      "A ocorrência de sintomas vasomotores aumenta significativamente durante a transição menopausal, porém, até que a menopausa esteja estabelecida (12 meses de amenorreia), não há indicação de iniciar a terapia hormonal.",
      "A TH demonstra eficácia na prevenção da perda óssea associada à menopausa, reduzindo a incidência de fraturas relacionadas à osteoporose, incluindo fraturas vertebrais e de quadril, mesmo em mulheres com alto risco de fratura.",
      "Em mulheres que começam a TH com mais de 10 anos desde a menopausa (ou mais de 60 anos de idade), parece não haver redução na incidência de doença cardiovascular e mortalidade geral, além de um possível aumento na incidência de acidente vascular cerebral isquêmico.",
      "Mulheres com útero intacto devem receber progesterona ou progestagênios (compostos sintéticos com ação nos receptores de progesterona) em doses apropriadas para prevenir a hiperplasia endometrial."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a INCORRETA. A terapia hormonal pode ser iniciada já na transição menopausal (perimenopausa) se houver sintomas vasomotores que prejudiquem a qualidade de vida; não é preciso esperar 12 meses de amenorreia para tratar. Por isso a alternativa B está errada e é a resposta.\n\nA \"janela de oportunidade\" é iniciar a TH antes dos 60 anos ou com menos de 10 anos de menopausa, quando o benefício é máximo e o risco cardiovascular é menor.",
    "commentary": "Placas avançadas após 10 anos de menopausa (A): correto; fora da janela, o estrogênio pode desestabilizar placas, e não se recomenda iniciar TH.\n\nPrevenção de perda óssea e fraturas (C): correto; a TH reduz fraturas vertebrais e de quadril, inclusive em mulheres de alto risco.\n\nInício tardio sem benefício cardiovascular (D): correto; após 10 anos de menopausa ou 60 anos, não há redução de eventos e há mais AVC isquêmico.\n\nProgestagênio com útero (E): correto; protege contra hiperplasia e câncer de endométrio.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC) / North American Menopause Society — Hormone Therapy Position Statement 2022",
    "tags": [
      "climatério",
      "terapia hormonal",
      "janela de oportunidade",
      "menopausa"
    ],
    "tip": "TH: pode começar na perimenopausa sintomática. Janela: < 60 anos ou < 10 anos de menopausa."
  },
  {
    "id": "unimedpb2026-18",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "O hiperandrogenismo é muito marcante em muitas mulheres com Síndrome dos Ovários Policísticos (SOP). Esse distúrbio pode interferir no sistema reprodutor, tanto central (eixo córtico-hipotalâmico-hipofisário) como perifericamente (ovários) levando à perda da ciclicidade funcional ovariana por retroalimentação inadequada.\nSobre a SOP classifique V para as sentenças verdadeiras e F para as falsas:\n( ) Em mulheres portadoras de SOP há maior produção de androgênios, o que perpetuaria a anovulação, bem como a inadequação endometrial.\n( ) A suspeita da SOP é feita quando houver queixas de pelos excessivos pelo corpo, associados à irregularidade menstrual, em geral, ciclos alongados ou períodos de amenorreia.\n( ) A hiperandrogenemia ou o hiperandrogenismo cutâneo podem ser vistos exclusivamente em mulheres com SOP, não havendo outras entidades com quadro clínico semelhante.\n( ) A ultrassonografia, em muitos casos, não é de muita ajuda, pois os ovários, em geral, são maiores e muitas vezes foliculares quando há imaturidade do eixo, o que pode levar a fazer o diagnóstico errôneo de SOP durante a adolescência.\n( ) O exame físico pode auxiliar no diagnóstico, portanto devemos procurar sinais clínicos de hiperandrogenismo, como acne e hirsutismo.\n\nAssinale a alternativa que apresenta a sequência CORRETA:",
    "options": [
      "V - V - V - F - F.",
      "F - F - V - V - V.",
      "V - V - F - V - V.",
      "V - F - V - V - F.",
      "F - V - F - F - V."
    ],
    "correctAnswer": 2,
    "explanation": "1ª — Verdadeira: na SOP há excesso de androgênios, que perpetua a anovulação e altera o endométrio.\n\n2ª — Verdadeira: a suspeita surge com hirsutismo associado a ciclos longos ou amenorreia.\n\n3ª — Falsa: hiperandrogenismo não é exclusivo da SOP; é preciso excluir hiperplasia adrenal congênita não clássica, tumores secretores de androgênio, hiperprolactinemia, Cushing e disfunção tireoidiana.\n\n4ª — Verdadeira: na adolescência os ovários são normalmente maiores e multifoliculares, por isso a ultrassonografia não é recomendada para diagnosticar SOP nos primeiros anos após a menarca.\n\n5ª — Verdadeira: acne e hirsutismo ao exame são sinais clínicos de hiperandrogenismo.\n\nSequência: V - V - F - V - V.",
    "commentary": "A (V - V - V - F - F): considera a SOP a única causa de hiperandrogenismo e nega o valor do exame físico.\n\nB (F - F - V - V - V): nega a fisiopatologia e a forma de suspeita da SOP.\n\nD (V - F - V - V - F): nega a forma de suspeita e aceita a exclusividade da SOP.\n\nE (F - V - F - F - V): nega a fisiopatologia e o papel limitado da ultrassonografia na adolescente.",
    "reference": "International Evidence-based Guideline for PCOS 2023 / FEBRASGO — Síndrome dos ovários policísticos",
    "tags": [
      "síndrome dos ovários policísticos",
      "hiperandrogenismo",
      "critérios de Rotterdam",
      "adolescência"
    ],
    "tip": "SOP é diagnóstico de exclusão. Na adolescente, não use ultrassonografia para diagnosticar."
  },
  {
    "id": "unimedpb2026-19",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A prematuridade é a principal causa de mortalidade neonatal, sendo responsável por até 50% dos casos de alterações neurológicas tardias. Sobre esta patologia analise as sentenças a seguir:\nI. Parto pré-termo é aquele que ocorre com menos de 36 semanas de idade gestacional, não se enquadrando no período definido como de abortamento.\nII. As principais contraindicações para o uso da tocólise são: malformação fetal grave, vitalidade fetal alterada, quadros hipertensivos graves (incluindo pré-eclâmpsia com achados graves), sangramento com instabilidade hemodinâmica, corioamnionite e doenças cardíacas graves.\nIII. A tocólise é recomendada para pacientes em trabalho de parto pré-termo com menos de 36 semanas e o tocolítico de primeira escolha é o salbutamol (beta mimético).\nIV. A pesquisa do estreptococo do grupo B (EGB) é contraindicada no início da tocólise, pois sua identificação precoce aumenta o risco de sepse neonatal.\nV. O sulfato de magnésio é usado como neuroprotetor fetal reduzindo a gravidade e o risco de paralisia cerebral sendo administrado em caso de falha da tocólise e iminência de parto.\n\nAssinale a alternativa CORRETA:",
    "options": [
      "Somente a sentença I está correta.",
      "As sentenças I, III, V estão corretas.",
      "As sentenças I, II e IV estão corretas.",
      "As sentenças II e V estão corretas.",
      "Apenas a sentença II está correta."
    ],
    "correctAnswer": 3,
    "explanation": "I — Falsa: parto pré-termo é o que ocorre antes de 37 semanas completas (até 36 semanas e 6 dias), não antes de 36.\n\nII — Verdadeira: são contraindicações à tocólise malformação grave, vitalidade fetal alterada, pré-eclâmpsia grave, sangramento com instabilidade, corioamnionite e cardiopatia grave — situações em que manter a gestação é mais arriscado.\n\nIII — Falsa: a tocólise é feita entre 24 e 34 semanas, e as drogas de primeira linha são nifedipina e atosibano; betamiméticos caíram em desuso pelos efeitos adversos.\n\nIV — Falsa: a pesquisa de estreptococo do grupo B é indicada no trabalho de parto prematuro, e se o resultado for desconhecido faz-se a profilaxia.\n\nV — Verdadeira: o sulfato de magnésio é neuroprotetor fetal e reduz paralisia cerebral quando o parto é iminente antes de 32 semanas.\n\nCorretas: II e V.",
    "commentary": "A (só I): o limite do pré-termo é 37 semanas, não 36.\n\nB (I, III e V): I e III são falsas.\n\nC (I, II e IV): I e IV são falsas.\n\nE (só II): o item V também está correto.",
    "reference": "FEBRASGO — Parto pré-termo (Protocolo) / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "tocólise",
      "sulfato de magnésio",
      "neuroproteção"
    ],
    "tip": "Tocólise: 24 a 34 semanas, nifedipina ou atosibano. MgSO₄ < 32 semanas = neuroproteção."
  },
  {
    "id": "unimedpb2026-20",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "As hemorragias na segunda metade da gestação constituem uma das principais causas de internação de gestantes no período anteparto, com importante aumento da morbimortalidade materna e perinatal. Sobre o sangramento na segunda metade da gestação, associe os itens, utilizando o código a seguir:\nI. Descolamento Prematuro de Placenta.\nII. Rotura Uterina.\nIII. Placenta Prévia.\nIV. Rotura de Vasa Prévia.\n( ) O sangramento intenso ocorre após a ruptura da bolsa das águas, com desaceleração grave e sustentada da frequência cardíaca fetal, necessitando da interrupção imediata da gestação para salvar a vida do feto. A taxa de mortalidade perinatal nessa situação é superior a 50%.\n( ) Presença de sangramento vaginal indolor de coloração vermelho vivo, de início e cessar súbito, imotivado, reincidente de gravidade progressiva; podendo ou não estar associado a contrações uterinas. A ultrassonografia transvaginal é considerada o padrão ouro para confirmação diagnóstica.\n( ) Na maioria das vezes, apresenta sangramento vaginal leve a moderado, dor abdominal de início súbito, hipersensibilidade à palpação uterina, hipertonia uterina e anormalidades da frequência cardíaca fetal ou ausência de batimentos.\n( ) Presença de dor abdominal intensa, com contrações dolorosas, agitação e apresentando distensão do segmento uterino inferior e bradicardia fetal. Logo em seguida, ocorre interrupção das contrações uterinas, melhora da dor e instabilidade hemodinâmica materna. Ao toque vaginal, não se palpa a apresentação fetal.\n\nAssinale a alternativa que apresenta a sequência CORRETA:",
    "options": [
      "I - II - III - IV.",
      "III - IV - II - I.",
      "IV - III - I - II.",
      "II - III - I - IV.",
      "IV - II - I - III."
    ],
    "correctAnswer": 2,
    "explanation": "Associação:\n\n• Sangramento logo após a rotura da bolsa, com bradicardia fetal grave e mortalidade perinatal acima de 50% → rotura de vasa prévia (IV); o sangue perdido é fetal.\n• Sangramento indolor, vermelho vivo, de início e fim súbitos, recorrente e progressivo; diagnóstico por ultrassonografia transvaginal → placenta prévia (III).\n• Sangramento com dor súbita, hipertonia uterina e alteração da frequência cardíaca fetal → descolamento prematuro de placenta (I).\n• Dor intensa com distensão do segmento inferior, que cessa de repente junto com as contrações, instabilidade materna e apresentação que some ao toque → rotura uterina (II).\n\nSequência: IV - III - I - II.",
    "commentary": "A (I - II - III - IV): inverte todos os quadros.\n\nB (III - IV - II - I): troca vasa prévia por placenta prévia e DPP por rotura uterina.\n\nD (II - III - I - IV): atribui à rotura uterina o sangramento após a amniorrexe.\n\nE (IV - II - I - III): atribui à rotura uterina o sangramento indolor da placenta prévia.",
    "reference": "FEBRASGO — Hemorragias da segunda metade da gestação / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "obstetrícia",
      "placenta prévia",
      "descolamento prematuro de placenta",
      "rotura uterina",
      "vasa prévia"
    ],
    "tip": "Sangrou ao romper a bolsa com bradicardia fetal: vasa prévia."
  },
  {
    "id": "unimedpb2026-21",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "O Diabetes mellitus (DM) é caracterizada pela hiperglicemia persistente, decorrente da deficiência na produção de insulina ou na sua ação, ou em ambos os mecanismos. Sobre este distúrbio metabólico na gestação, assinale a alternativa INCORRETA:",
    "options": [
      "A circunferência abdominal fetal pela ultrassonografia igual ou superior ao percentil 75 para a idade gestacional é indicativo de crescimento fetal excessivo e é marcador indireto do hiperinsulinismo fetal.",
      "O uso de corticosteroides em gestantes com DM e o controle glicêmico inadequado podem provocar a piora do quadro materno e até mesmo levar à cetoacidose diabética.",
      "A prática de exercícios físicos regulares não é recomendada para gestantes diabéticas, pois a atividade física aumenta o consumo de glicose podendo causar uma hipoglicemia.",
      "A macrossomia, caracterizada pelo peso fetal superior a 4 kg, é a principal complicação da hiperglicemia materna no segundo e no terceiro trimestre da gestação.",
      "A contagem dos movimentos fetais está indicada para todas as gestantes com DM, devendo ser realizada diariamente a partir da 28ª semana, conforme recomendações vigentes de vigilância fetal."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a INCORRETA. O exercício físico regular é recomendado para gestantes com diabetes, salvo contraindicação obstétrica: melhora a sensibilidade à insulina e o controle glicêmico. O risco de hipoglicemia se maneja com orientação e monitorização, não proibindo a atividade. A alternativa C é a resposta.",
    "commentary": "Circunferência abdominal ≥ p75 (A): correto; marca hiperinsulinismo fetal e orienta o ajuste do tratamento.\n\nCorticoide e cetoacidose (B): correto; o corticoide para maturação pulmonar eleva a glicemia e pode precipitar cetoacidose se o controle for ruim.\n\nMacrossomia (D): correto; é a complicação mais frequente da hiperglicemia materna no 2º e 3º trimestres.\n\nContagem de movimentos fetais (E): correto; é recomendada diariamente a partir de 28 semanas nas gestantes com diabetes.",
    "reference": "Ministério da Saúde/OPAS/FEBRASGO/SBD — Tratamento do diabetes mellitus gestacional no Brasil (2019) / Diretriz SBD 2024",
    "tags": [
      "obstetrícia",
      "diabetes gestacional",
      "exercício físico",
      "macrossomia"
    ],
    "tip": "Gestante diabética: exercício é tratamento, não contraindicação."
  },
  {
    "id": "unimedpb2026-22",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "As síndromes hipertensivas são a intercorrência clínica mais comum da gestação e representam a principal causa de morbimortalidade materna no mundo. Sobre esta patologia, assinale a alternativa CORRETA:",
    "options": [
      "A Pré-eclâmpsia é a identificação de hipertensão arterial, em gestante previamente normotensa, a partir da 20ª semana de gestação, nem sempre associada à proteinúria.",
      "A Pré-eclâmpsia com sinais de gravidade é caracterizada pela presença da síndrome HELLP, sinais de iminência de eclâmpsia, eclâmpsia, edema agudo de pulmão, dor torácica e pressão arterial (PA) sistólica ≤ 140 mmHg e/ou PA diastólica ≤ 90 mmHg.",
      "O aumento das enzimas hepáticas é a principal e mais precoce modificação laboratorial encontrada na síndrome HELLP, antecedendo a hemólise e a trombocitopenia.",
      "É indicada a interrupção imediata da gestação através do parto operatório, logo após uma crise convulsiva tônico-clônica generalizada (eclâmpsia) para evitar um estado prolongado de hipoxemia e acidose para o feto.",
      "O sulfato de magnésio é o hipotensor de escolha a ser administrado quando há risco de convulsão, situação inerente aos quadros de PE com sinais de deterioração clínica e/ou laboratorial, iminência de eclâmpsia, eclâmpsia, síndrome HELLP e hipertensão de difícil controle."
    ],
    "correctAnswer": 0,
    "explanation": "A pré-eclâmpsia é hipertensão surgida após 20 semanas em gestante antes normotensa, acompanhada de proteinúria OU de disfunção de órgão-alvo (plaquetopenia, alteração hepática ou renal, edema pulmonar, sintomas neurológicos) ou de disfunção uteroplacentária. Por isso ela nem sempre tem proteinúria — a alternativa A está correta.",
    "commentary": "Sinais de gravidade com PA ≤ 140/90 (B): o critério de gravidade é PA ≥ 160 x 110 mmHg; a alternativa inverte o valor.\n\nEnzimas hepáticas como primeira alteração da HELLP (C): a alteração mais precoce costuma ser a plaquetopenia (e a hemólise), não a elevação das transaminases.\n\nCesárea logo após a convulsão (D): primeiro estabiliza-se a mãe (sulfato de magnésio, controle da PA, oxigenação); a bradicardia fetal pós-crise costuma se recuperar. A via de parto é obstétrica e não há cesárea imediata.\n\nSulfato de magnésio como hipotensor (E): o magnésio é anticonvulsivante; os hipotensores de escolha na crise são hidralazina, nifedipina ou labetalol.",
    "reference": "FEBRASGO / RBEHG — Pré-eclâmpsia: protocolo 2023 / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "síndrome HELLP",
      "sulfato de magnésio",
      "eclâmpsia"
    ],
    "tip": "Pré-eclâmpsia não exige proteinúria. MgSO₄ previne convulsão; não baixa PA."
  },
  {
    "id": "unimedpb2026-23",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A hemorragia pós-parto (HPP) é uma das principais causas de morbimortalidade materna no mundo, correspondendo a 25% do total de óbitos maternos mundiais, e a segunda causa de morte materna no Brasil. Analise as sentenças a seguir:\nI. A HPP é a perda sanguínea acima de 1000 mL após parto vaginal ou acima de 2000 mL após parto cesárea, independentemente de sinais de instabilidade hemodinâmica.\nII. A compressão uterina bimanual deve ser a primeira manobra do tratamento não cirúrgico durante o quadro de atonia uterina, a fim de se obter controle transitório do sangramento.\nIII. O misoprostol é a droga de escolha para tratar a atonia uterina na hemorragia pós-parto.\nIV. A principal causa de hemorragia pós-parto (HPP) consiste na retenção de tecido placentário após o delivramento da placenta.\nV. Reconhecer fatores de risco para HPP no pré-natal e durante a assistência ao parto pode constituir-se no primeiro passo para evitar morte materna por HPP.\n\nAssinale a alternativa CORRETA:",
    "options": [
      "Somente a sentença I está correta.",
      "As sentenças I e III estão corretas.",
      "As sentenças I, II, III e IV estão corretas.",
      "Somente a sentença III está correta.",
      "As sentenças II e V estão corretas."
    ],
    "correctAnswer": 4,
    "explanation": "I — Falsa: a definição clássica é perda acima de 500 mL no parto vaginal ou acima de 1.000 mL na cesárea (hoje se usa ≥ 1.000 mL em qualquer via ou qualquer perda com instabilidade).\n\nII — Verdadeira: a compressão bimanual é manobra imediata na atonia e controla o sangramento enquanto os uterotônicos agem.\n\nIII — Falsa: a droga de escolha é a ocitocina; misoprostol é alternativa de segunda linha.\n\nIV — Falsa: a principal causa é a atonia uterina (tônus), responsável por cerca de 70% dos casos; retenção de tecido vem depois.\n\nV — Verdadeira: identificar fatores de risco no pré-natal e no parto permite preparar a equipe e é o primeiro passo para evitar óbito.\n\nCorretas: II e V.",
    "commentary": "A (só I): os volumes do item I estão errados.\n\nB (I e III): ambas falsas.\n\nC (I, II, III e IV): I, III e IV são falsas.\n\nD (só III): a ocitocina, não o misoprostol, é a primeira escolha.",
    "reference": "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018) / FEBRASGO — Hemorragia pós-parto",
    "tags": [
      "obstetrícia",
      "hemorragia pós-parto",
      "atonia uterina",
      "ocitocina",
      "4 Ts"
    ],
    "tip": "HPP: 4 Ts — Tônus é o principal. Ocitocina é a primeira droga."
  },
  {
    "id": "unimedpb2026-24",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a assistência às parturientes durante as fases clínicas do trabalho do parto, classifique V para as sentenças verdadeiras e F para as falsas:\n( ) Na fase ativa do primeiro período do parto, diante da falha na progressão, considerar a realização de amniotomia se as membranas estiverem íntegras, após o consentimento da paciente.\n( ) A tração controlada do cordão deve ser realizada na assistência ao terceiro período do parto, apenas nas parturientes de alto risco.\n( ) O uso de uterotônicos (geralmente ocitocina) para a prevenção de Hemorragia Pós-parto (HPP) durante o terceiro estágio do parto é recomendado para todos os partos.\n( ) A eliminação de mecônio durante o trabalho de parto, de forma isolada, é indicação cesariana, pois a cesárea protege o feto da ocorrência da síndrome de aspiração de mecônio no recém-nascido.\n( ) A cardiotocografia de rotina não é recomendada para a avaliação do bem-estar fetal na admissão do parto de início espontâneo, em gestantes saudáveis de risco habitual.\n\nAssinale a alternativa que apresenta a sequência CORRETA:",
    "options": [
      "F - V - V - V - F.",
      "V - F - V - F - V.",
      "F - V - F - V - V.",
      "V - F - V - F - F.",
      "V - V - F - V - V."
    ],
    "correctAnswer": 1,
    "explanation": "1ª — Verdadeira: na falha de progressão da fase ativa, a amniotomia pode ser considerada com membranas íntegras, após consentimento.\n\n2ª — Falsa: a tração controlada do cordão faz parte do manejo ativo do terceiro período e não se restringe às parturientes de alto risco.\n\n3ª — Verdadeira: ocitocina 10 UI IM após o nascimento é recomendada em todos os partos para prevenir hemorragia.\n\n4ª — Falsa: mecônio isolado não indica cesárea e a cesárea não impede a síndrome de aspiração meconial.\n\n5ª — Verdadeira: a cardiotocografia de admissão não é recomendada em gestantes de risco habitual com trabalho de parto espontâneo; usa-se a ausculta intermitente.\n\nSequência: V - F - V - F - V.",
    "commentary": "A (F - V - V - V - F): nega a amniotomia na falha de progressão e aceita mecônio como indicação de cesárea.\n\nC (F - V - F - V - V): nega a ocitocina universal e aceita mecônio como indicação de cesárea.\n\nD (V - F - V - F - F): considera recomendada a cardiotocografia de admissão em risco habitual.\n\nE (V - V - F - V - V): restringe a tração do cordão, nega a ocitocina universal e aceita o mecônio como indicação de cesárea.",
    "reference": "Ministério da Saúde — Diretriz Nacional de Assistência ao Parto Normal (2017) / OMS — Recomendações para cuidados intraparto (2018)",
    "tags": [
      "obstetrícia",
      "assistência ao parto",
      "manejo ativo do terceiro período",
      "amniotomia",
      "cardiotocografia"
    ],
    "tip": "Ocitocina 10 UI IM em TODO parto. Mecônio sozinho não indica cesárea."
  },
  {
    "id": "unimedpb2026-25",
    "topography": "4.1",
    "topic": "Glomerulonefrite",
    "module": "Clínica Médica",
    "text": "Um homem de 58 anos, previamente hígido, chega com fadiga intensa, edema e oligúria progressiva há uma semana. Os exames mostram creatinina de 4,2 mg/dL (antes 0,9), hematúria dismórfica, cilindros hemáticos e proteinúria de 1,8 g/24h. O ANCA-PR3 é positivo, reforçando suspeita de vasculite pauci-imune. A biópsia renal está indicada, mas ainda não pôde ser realizada. O quadro configura glomerulonefrite e, segundo KDIGO 2021, qual é a conduta imediata?",
    "options": [
      "Aguardar biópsia com análise de microscopia eletrônica.",
      "Pulsoterapia + ciclofosfamida.",
      "Prednisona via oral 0,8-1 mg/kg/dia.",
      "Amoxicilina 850mg 12/12h ou 500mg 8/8 horas via oral por 7 dias.",
      "Plasmaférese dias alternados 5 sessões."
    ],
    "correctAnswer": 1,
    "explanation": "Glomerulonefrite rapidamente progressiva (creatinina de 0,9 para 4,2 mg/dL em uma semana, hematúria dismórfica, cilindros hemáticos e proteinúria) com ANCA-PR3 positivo: vasculite associada ao ANCA (granulomatose com poliangeíte) com acometimento renal grave.\n\nPelo KDIGO 2021, quando a apresentação é típica e o ANCA é positivo, o tratamento de indução não deve esperar a biópsia, porque cada dia perdido significa perda de néfrons. A indução é feita com pulsoterapia de metilprednisolona seguida de corticoide oral, associada a ciclofosfamida ou rituximabe.",
    "commentary": "Esperar a biópsia (A): em GNRP com ANCA positivo, o tratamento começa antes da biópsia, se ela não puder ser feita logo.\n\nPrednisona oral isolada (C): corticoide sozinho é insuficiente; precisa de pulso e de um segundo imunossupressor.\n\nAmoxicilina (D): não se trata de glomerulonefrite pós-infecciosa; antibiótico não tem papel.\n\nPlasmaférese isolada (E): é adjuvante em casos selecionados (hemorragia alveolar, anti-MBG associado, creatinina muito alta) e nunca substitui corticoide e imunossupressor.",
    "reference": "KDIGO 2021 — Clinical Practice Guideline for the Management of Glomerular Diseases (vasculite associada ao ANCA)",
    "tags": [
      "nefrologia",
      "glomerulonefrite rapidamente progressiva",
      "vasculite ANCA",
      "ciclofosfamida"
    ],
    "tip": "GNRP com ANCA positivo: não espere a biópsia — pulso de corticoide + ciclofosfamida ou rituximabe."
  },
  {
    "id": "unimedpb2026-26",
    "topography": "4.1",
    "topic": "Pielonefrite",
    "module": "Clínica Médica",
    "text": "Uma mulher de 63 anos, diabética há 15 anos e com DRC estágio 3b (TFGe estimada em 38 mL/min), procura a emergência por febre alta, calafrios e lombalgia direita há dois dias, acompanhada de disúria e polaciúria. Relata vômitos esporádicos e redução da ingesta hídrica. No exame físico, apresenta FC 102 bpm, PA 110/70 mmHg, Temperatura = 38,7 °C e dor à punho-percussão lombar direita, mas sem sinais de instabilidade hemodinâmica ou sepse. O EAS mostra leucocitúria intensa, bacteriúria evidente e nitrito positivo, enquanto o ultrassom demonstra pielonefrite aguda sem abscesso, sem hidronefrose e sem litíase associada. Há histórico documentado de E. coli resistente a quinolonas em infecção anterior. Diante deste cenário de ITU, qual é a conduta inicial mais apropriada?",
    "options": [
      "Prescrever nitrofurantoína VO, mesmo com suspeita de acometimento de trato urinário superior.",
      "Iniciar ceftriaxona EV como terapia empírica de primeira linha para pielonefrite complicada em paciente com resistência prévia a quinolona.",
      "Administrar fosfomicina dose única, devido à sua boa ação contra enterobactérias em infecções altas.",
      "Encaminhar para acompanhamento ambulatorial, visto que não há sinais de choque.",
      "Aguardar resultado da urocultura antes de iniciar antibiótico, dado o risco de resistência."
    ],
    "correctAnswer": 1,
    "explanation": "Pielonefrite aguda (febre, calafrios, dor lombar e Giordano positivo) em diabética com DRC 3b, vômitos e baixa ingesta: é ITU complicada, com indicação de antibiótico parenteral ao menos no início. Como há E. coli resistente a quinolona documentada, a quinolona não serve como empírica.\n\nA ceftriaxona EV é a escolha empírica adequada: boa cobertura de enterobactérias, dose única diária e sem necessidade de ajuste pela função renal. Deve-se colher urocultura antes e ajustar pelo antibiograma.",
    "commentary": "Nitrofurantoína (A): não alcança níveis adequados no parênquima renal e no sangue; serve só para cistite. Além disso, perde eficácia com TFG reduzida.\n\nFosfomicina dose única (C): é para cistite não complicada, não para pielonefrite.\n\nAcompanhamento ambulatorial (D): vômitos, diabetes, DRC e falha de quinolona justificam tratamento parenteral e observação.\n\nAguardar a urocultura (E): o antibiótico empírico deve ser iniciado logo após a coleta.",
    "reference": "IDSA — Guideline on Complicated UTI (2025) / SBU/SBI — Infecção do trato urinário",
    "tags": [
      "nefrologia",
      "pielonefrite",
      "ITU complicada",
      "ceftriaxona",
      "resistência bacteriana"
    ],
    "tip": "Pielonefrite com resistência a quinolona: ceftriaxona EV. Nitrofurantoína e fosfomicina só para cistite."
  },
  {
    "id": "unimedpb2026-27",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Um homem de 71 anos, portador de HAS e DM2 há 40 anos, procura atendimento por início súbito de fraqueza intensa e palpitações nas últimas duas horas. Ao exame, apresenta PA 132/78 mmHg, FC 110 bpm e FR 22 irpm, sem sinais de choque. Nos exames laboratoriais iniciais verificam-se hemograma normal, Cr 6,9 mg/dl, Ur 289 mg/dl, PTH 365 pg/mL e potássio 6,1 mEq/L. Ele relata uso de enalapril, sem ajustes recentes. O ECG foi solicitado abaixo. Qual é a melhor conduta para este quadro clínico?",
    "options": [
      "Administrar gluconato de cálcio EV para estabilização imediata da membrana miocárdica se K de controle >6,5 mg/dl.",
      "Iniciar insulina regular EV com glicose para promover rápido shift intracelular do potássio e reavaliação clínica com nova dosagem de K a cada 6 horas.",
      "Nebulizar β2-agonista (salbutamol) em altas doses como terapia adjuvante para reduzir K+.",
      "Utilizar resinas de troca (patiromer/zirconium) associado a lactulose visando eliminação intestinal do potássio.",
      "Considerar hemodiálise de urgência após exclusão de hipovolemia e/ou obstrução renal e manutenção da hipercalemia."
    ],
    "correctAnswer": 2,
    "explanation": "Doente renal crônico avançado (Cr 6,9, ureia 289, PTH elevado) em uso de enalapril, com fraqueza, palpitações, K 6,1 mEq/L e ECG com ondas T apiculadas (em tenda): hipercalemia com repercussão eletrocardiográfica, que é emergência.\n\nO tratamento tem três pilares: estabilizar a membrana (gluconato de cálcio, já que há alteração no ECG), deslocar o potássio para dentro das células (insulina com glicose e β2-agonista em dose alta) e removê-lo do corpo (diálise, diuréticos, resinas). O gabarito considerou correta a alternativa C: o salbutamol nebulizado em altas doses é terapia adjuvante eficaz de deslocamento intracelular, e é a única afirmação sem erro.",
    "commentary": "Gluconato de cálcio só se K > 6,5 (A): com alteração no ECG, o cálcio é imediato, qualquer que seja o valor do potássio (e a unidade é mEq/L, não mg/dL).\n\nInsulina com glicose e K a cada 6 horas (B): a medida está certa, mas o controle do potássio após a insulina deve ser em 1–2 horas, não a cada 6 horas.\n\nResinas com lactulose (D): agem em horas a dias; não são a conduta na hipercalemia com alteração no ECG.\n\nDiálise após excluir hipovolemia e manutenção da hipercalemia (E): não se espera a persistência do potássio alto com ECG alterado; as medidas de estabilização e deslocamento devem começar já, como ponte.\n\nAtenção: o enunciado pede a \"melhor conduta\" e a alternativa C descreve apenas uma terapia adjuvante. A prioridade real seria o gluconato de cálcio imediato, e o paciente, dialítico em potencial (ureia 289), provavelmente precisará de diálise.",
    "reference": "KDIGO — Controversies Conference on potassium disorders (2020) / UK Kidney Association — Treatment of acute hyperkalaemia in adults (2023)",
    "tags": [
      "nefrologia",
      "hipercalemia",
      "eletrocardiograma",
      "doença renal crônica",
      "emergências"
    ],
    "tip": "Hipercalemia: Cálcio estabiliza, Insulina/β2 deslocam, Diálise remove.",
    "image": "/images/unimedpb2026-27.webp"
  },
  {
    "id": "unimedpb2026-28",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, portador de diabetes tipo 2 e doença arterial crônica, chega à emergência com histórico de tratamento ambulatorial de pneumonia há 3 dias, apresentando-se com PAM 58 mmHg, FC 112 bpm e lactato de 32 mg/dL. Após 1 hora, já recebeu 15 mL/kg de ringer lactato, com redução do tempo de enchimento capilar de 7 para 4 segundos. O ultrassom POCUS mostra veia cava inferior com colapso < 50% e linhas B bilaterais nos pulmões. O paciente permanece com PAM 58 mmHg apesar da reposição inicial. Considerando o manejo atual do choque séptico e as evidências sobre ressuscitação guiada por hemodinâmica e POCUS, qual deve ser a próxima conduta?",
    "options": [
      "Continuar expansão volêmica com cristaloide com alvo de 30 mL/kg em 3 horas.",
      "Reavaliar lactato arterial para decisão de expansão volêmica.",
      "Iniciar infusão de albumina 20% para otimizar pré-carga.",
      "Iniciar noradrenalina imediatamente e evitar mais fluidos.",
      "Aguardar resposta clínica de melhora da TEC e da PAM > 65mmHg, em seguida iniciar vasopressor."
    ],
    "correctAnswer": 3,
    "explanation": "Choque séptico (PAM 58 mmHg, lactato elevado) que se mantém hipotenso após 15 mL/kg de cristaloide. O POCUS mostra linhas B bilaterais confluentes, sinal de congestão pulmonar, e veia cava com pouco colapso, ou seja, baixa chance de responder a mais volume.\n\nNesse cenário, insistir em fluidos aumenta o risco de edema pulmonar sem ganho hemodinâmico. A conduta é iniciar noradrenalina imediatamente (pode ser por acesso periférico enquanto se obtém o central), visando PAM ≥ 65 mmHg, e restringir novos volumes.",
    "commentary": "Completar 30 mL/kg (A): o volume fixo de 30 mL/kg deve ser individualizado; há sinais de congestão e baixa fluidorresponsividade.\n\nReavaliar o lactato (B): o lactato orienta a evolução, mas não deve atrasar o vasopressor em paciente hipotenso.\n\nAlbumina 20% (C): o problema não é falta de pré-carga; mais volume, coloide ou cristaloide, piora a congestão.\n\nEsperar melhora da TEC e da PAM (E): o vasopressor é que deve corrigir a PAM; aguardar prolonga a hipoperfusão.",
    "reference": "Surviving Sepsis Campaign 2021 / ILAS — Protocolo de sepse",
    "tags": [
      "sepse",
      "choque séptico",
      "POCUS",
      "noradrenalina",
      "fluidorresponsividade"
    ],
    "tip": "Choque séptico + linhas B difusas: pare o volume e comece noradrenalina.",
    "image": "/images/unimedpb2026-28.webp"
  },
  {
    "id": "unimedpb2026-29",
    "topography": "3.2",
    "topic": "Peritonite bacteriana espontânea",
    "module": "Clínica Médica",
    "text": "Homem de 54 anos, etilista crônico, chega à emergência com dor abdominal difusa e confusão mental há 24h. Refere redução da diurese e episódios de vômitos. Ao exame: PA 94x58 mmHg, FC 108 bpm, FR 20 irpm, SatO₂ 96%, desidratado, ascite tensa e dor à palpação abdominal difusa. Paciente permanece hemodinamicamente instável, porém responsivo. É solicitada a avaliação laboratorial inicial e realizada paracentese diagnóstica.\nResultados:\nLíquido ascítico:\n• Aspecto: Turvo\n• Contagem de PMN: 870 células/mm³\n• Proteína total: 0,9 g/dL\n• Albumina do líquido: 0,5 g/dL\n• Cultura: Pendente\n• Bacterioscopia: Negativo\nExames sanguíneos:\n• Creatinina: 2,1 mg/dL (basal 1,1)\n• Ureia: 78 mg/dL\n• Sódio: 129 mEq/L\n• Albumina sérica: 2,6 g/dL\n• Leucócitos: 14.200/mm³\n• INR: 1,8\n• Lactato: 3,0 mmol/L\n\nDiante do quadro clínico, qual o melhor manejo para esse paciente no momento?",
    "options": [
      "Iniciar ceftriaxona 1 g/dia por 7 dias, expansão volêmica com cristaloide conforme fluidotolerância e iniciar droga vasoativa se necessário.",
      "Iniciar ceftriaxona e suspender todos os diuréticos, iniciar norfloxacino profilática.",
      "Iniciar ceftriaxona 2 g/dia e infundir albumina 1,5 g/kg no dia 1 e 1 g/kg no dia 3.",
      "Iniciar ceftriaxona e realizar paracentese total imediata removendo todo o líquido.",
      "Aguardar cultura do líquido para iniciar antibiótico com albumina."
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico etilista com ascite, dor abdominal, encefalopatia e líquido ascítico com 870 PMN/mm³ (≥ 250 confirma o diagnóstico) e proteína baixa: peritonite bacteriana espontânea. Há lesão renal aguda (creatinina 2,1, basal 1,1), o que é critério de alto risco para síndrome hepatorrenal.\n\nO tratamento é cefalosporina de 3ª geração (ceftriaxona ou cefotaxima) iniciada imediatamente e albumina 1,5 g/kg no 1º dia e 1 g/kg no 3º dia, indicada quando creatinina > 1 mg/dL, ureia > 30 mg/dL ou bilirrubina > 4 mg/dL. A albumina reduz a incidência de insuficiência renal e a mortalidade.",
    "commentary": "Cristaloide e vasopressor sem albumina (A): falta a albumina, que é o que reduz síndrome hepatorrenal e mortalidade na PBE com disfunção renal.\n\nNorfloxacino profilático junto (B): suspender diuréticos está certo, mas a profilaxia secundária só começa após o tratamento; falta a albumina.\n\nParacentese total imediata (D): na PBE com lesão renal e instabilidade, paracentese de grande volume pode precipitar disfunção circulatória e hepatorrenal.\n\nEsperar a cultura (E): o diagnóstico é feito pela contagem de PMN; esperar a cultura atrasa um tratamento que reduz mortalidade.",
    "reference": "AASLD 2021 — Guidance on ascites, SBP and hepatorenal syndrome / EASL 2018 — Decompensated cirrhosis / SBH",
    "tags": [
      "hepatologia",
      "cirrose",
      "peritonite bacteriana espontânea",
      "albumina",
      "síndrome hepatorrenal"
    ],
    "tip": "PBE: PMN ≥ 250. Ceftriaxona + albumina 1,5 g/kg (D1) e 1 g/kg (D3)."
  },
  {
    "id": "unimedpb2026-30",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Um homem de 28 anos, portador de DM1, chega ao pronto-socorro com náuseas, vômitos e dor abdominal há 12 horas, relatando poliúria e polidipsia desde o dia anterior, refere ter omitido a insulina basal de hoje por não estar conseguindo se alimentar. Na avaliação, apresenta PA 96/64 mmHg, FC 118 bpm, FR 28 irpm. A glicemia é 268 mg/dL e a gasometria revela pH 7,18, K 5,0 mEq/l, HCO₃⁻ 10 mEq/L e Ânion gap corrigido 16, além de cetonemia positiva. Ele nega infecção, consumo de álcool recente e uso de SGLT2i. Foi realizado o diagnóstico de cetoacidose diabética, prescrito soro fisiológico e insulina EV. Após 6 horas de tratamento, apresenta glicemia 178 mg/dL, pH 7,32, HCO₃⁻ 21 mEq/L, ânion gap normalizado e cetonemia negativa. Encontra-se desperto e orientado, hemodinamicamente estável, sem náuseas e com melhora completa dos sintomas gastrointestinais. Qual deve ser a conduta no momento?",
    "options": [
      "Manter insulina IV até completar 24 horas e manter jejum absoluto até normalização do pH e HCO₃⁻.",
      "Introduzir dieta leve e fazer transição para insulina SC basal/bolus.",
      "Suspender insulina IV e aguardar 2 horas antes de iniciar SC.",
      "Manter hidratação rápida e iniciar hipoglicemiantes orais.",
      "Liberar dieta sem insulina manter glicemia capilar de 1/1 hora."
    ],
    "correctAnswer": 1,
    "explanation": "A cetoacidose está resolvida: glicemia < 200 mg/dL, pH ≥ 7,30, bicarbonato ≥ 18 mEq/L, ânion gap normal e cetonemia negativa. O paciente está alerta, estável e tolera a via oral.\n\nNesse momento faz-se a transição para insulina subcutânea em esquema basal-bolus e libera-se a dieta. A insulina basal SC deve ser aplicada 1–2 horas antes de desligar a infusão venosa, para evitar o rebote da cetoacidose.",
    "commentary": "Manter IV por 24 horas em jejum (A): não há tempo mínimo de infusão; com critérios de resolução e via oral liberada, faz-se a transição.\n\nSuspender a IV e esperar 2 horas para a SC (C): é o inverso; a basal SC entra antes de suspender a IV, com sobreposição de 1–2 horas.\n\nHipoglicemiantes orais (D): paciente com DM1 depende de insulina.\n\nDieta sem insulina (E): no DM1, ficar sem insulina leva a nova cetoacidose.",
    "reference": "ADA — Hyperglycemic Crises in Adults with Diabetes: Consensus Report (2024) / Diretriz SBD 2024",
    "tags": [
      "endocrinologia",
      "cetoacidose diabética",
      "DM1",
      "insulinoterapia"
    ],
    "tip": "CAD resolvida: glicemia < 200 + 2 de 3 (pH ≥ 7,3, HCO₃⁻ ≥ 18, AG ≤ 12). Basal SC antes de desligar a bomba."
  },
  {
    "id": "unimedpb2026-31",
    "topography": "2.2",
    "module": "Clínica Médica",
    "text": "Homem de 47 anos, sedentário, hipertenso controlado em uso de losartana, IMC 32 kg/m² e histórico familiar de IAM (pai aos 79 anos). Após ver amigos participando de corrida nas redes sociais, decidiu iniciar treinamento para meia maratona, ou seja prática intensa. Nega dor torácica, dispneia, síncope, palpitações sustentadas ou limitação funcional. Exame físico e ECG basal são normais. Ele pergunta se precisa fazer “check-up cardiológico completo” antes de iniciar seu treinamento. Segundo diretrizes contemporâneas de avaliação pré-participação em exercício, qual é a conduta MAIS adequada, além de História clínica e exame físico focados?",
    "options": [
      "Liberar a prática de atividade física sem exames adicionais, pois está assintomático, e diretrizes não recomendam nenhum teste para indivíduos com risco intermediário.",
      "Solicitar ecocardiograma e teste ergométrico porque, a partir de 40 anos, todo indivíduo que pretende praticar atividade física vigorosa deve passar por avaliação cardiológica completa.",
      "Realizar ECG de repouso e teste ergométrico (ou teste cardiopulmonar) antes da liberação para treinamento, considerando idade >45 anos associada a fatores de risco coronariano e intenção de exercício vigoroso.",
      "Solicitar teste ergométrico apenas se ele desejar competir oficialmente; para treinos recreativos não há qualquer indicação de avaliação adicional.",
      "Contraindicar o exercício até realização de cintilografia ou angiotomografia coronariana, pois há risco importante de DAC marginal."
    ],
    "correctAnswer": 2,
    "explanation": "Homem de 47 anos, sedentário, obeso e hipertenso, assintomático, que quer iniciar exercício vigoroso (meia maratona). A Diretriz da SBC de Cardiologia do Esporte recomenda, além de anamnese e exame físico, ECG de repouso para todos e teste ergométrico (ou cardiopulmonar) em homens acima de 35–45 anos com fatores de risco cardiovascular que vão praticar atividade de alta intensidade.\n\nO teste avalia isquemia induzida pelo esforço, comportamento da PA e arritmias e ajuda a prescrever a intensidade do treino.",
    "commentary": "Liberar sem exames (A): pela diretriz brasileira, o perfil (idade, fatores de risco e intenção de exercício vigoroso) justifica avaliação com teste de esforço.\n\nEcocardiograma para todos acima de 40 anos (B): o eco não é de rotina; fica para suspeita de cardiopatia estrutural.\n\nTeste só se for competir (D): a indicação depende da intensidade do esforço e do risco, não da competição oficial.\n\nCintilografia ou angiotomografia (E): exames de imagem não são a primeira etapa em assintomático; não há motivo para contraindicar o exercício.",
    "reference": "SBC — Diretriz em Cardiologia do Esporte e do Exercício (2019) / Atualização 2024",
    "tags": [
      "cardiologia",
      "avaliação pré-participação",
      "teste ergométrico",
      "cardiologia do esporte"
    ],
    "tip": "Exercício vigoroso + homem > 35–45 anos com fatores de risco: ECG + teste ergométrico."
  },
  {
    "id": "unimedpb2026-32",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Clínica Médica",
    "text": "Homem, 58 anos, com diabetes mellitus tipo 2 há 12 anos, IAM há 3 anos, IMC 37 kg/m², circunferência abdominal 118 cm. Em uso de metformina 2.000 mg/dia, empagliflozina 25 mg/dia, atorvastatina 40 mg/dia, AAS 100 mg/dia e enalapril 20 mg/dia. Exames recentes: HbA1c 7,3%; eGFR (CKD-EPI) 56 mL/min/1,73m²; microalbuminúria 90 mg/g; PA 126x76 mmHg; perfil lipídico em metas. Refere dispneia aos grandes esforços e importante incômodo com o excesso de peso. Nega história pessoal ou familiar de carcinoma medular de tireoide ou MEN2. Não apresenta história de pancreatite. Segundo as diretrizes atuais de manejo do diabetes tipo 2, obesidade e risco cardiovascular, a conduta farmacológica MAIS adequada em relação ao uso de agonistas de GLP-1/GIP seria:",
    "options": [
      "Não há indicação de agonista de GLP-1, pois a HbA1c já está próxima da meta; deve-se priorizar apenas intensificação de dieta e exercício.",
      "Iniciar tirzepatida (Mounjaro/Zepbound) com finalidade exclusiva de controle glicêmico, reservando a semaglutida apenas para pacientes com doença cardiovascular estabelecida.",
      "Iniciar semaglutida em dose alvo para obesidade (2,4 mg SC 1x/semana), com objetivo de redução de peso e de risco de eventos cardiovasculares maiores, mesmo com HbA1c próxima da meta, podendo manter metformina e SGLT2i.",
      "Substituir o inibidor de SGLT2 por semaglutida, uma vez que o uso combinado de SGLT2i com GLP-1 RA está contraindicado pelo risco aumentado de hipoglicemia e cetoacidose.",
      "Adiar o uso de tirzepatida ou semaglutida até queda do eGFR abaixo de 30 mL/min/1,73m², quando então esses fármacos passam a ser preferenciais sobre SGLT2i nos pacientes com doença cardiovascular estabelecida."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente com DM2, doença cardiovascular aterosclerótica estabelecida (IAM prévio), obesidade grau II e albuminúria, já com metformina e iSGLT2. Mesmo com HbA1c perto da meta, as diretrizes indicam agonista de GLP-1 com benefício cardiovascular comprovado pela doença aterosclerótica e pela obesidade, independentemente da glicada.\n\nA semaglutida 2,4 mg semanal (estudo SELECT) reduziu eventos cardiovasculares maiores em obesos com doença cardiovascular, e ainda traz perda de peso e proteção renal (estudo FLOW). Pode ser associada à metformina e ao iSGLT2, cujos benefícios se somam.",
    "commentary": "Sem indicação porque a HbA1c está perto da meta (A): a indicação de GLP-1 aqui é cardiovascular e de peso, não só glicêmica.\n\nTirzepatida só para glicemia (B): a tirzepatida também reduz peso de forma importante; e a semaglutida não é restrita a quem tem doença cardiovascular.\n\nTrocar o iSGLT2 (D): a associação iSGLT2 + GLP-1 não é contraindicada e é recomendada; o risco de hipoglicemia é baixo sem insulina ou sulfonilureia.\n\nEsperar TFG < 30 (E): não faz sentido; o benefício cardiorrenal é maior quando a terapia começa cedo.",
    "reference": "ADA — Standards of Care in Diabetes 2025 / Diretriz SBD 2024 / Estudo SELECT (NEJM 2023)",
    "tags": [
      "endocrinologia",
      "diabetes tipo 2",
      "obesidade",
      "agonistas de GLP-1",
      "semaglutida",
      "risco cardiovascular"
    ],
    "tip": "DM2 + doença cardiovascular + obesidade: GLP-1 com benefício CV, mesmo com HbA1c boa."
  },
  {
    "id": "unimedpb2026-33",
    "topography": "3.1",
    "topic": "Doença inflamatória intestinal",
    "module": "Clínica Médica",
    "text": "Homem de 32 anos, portador de retocolite ulcerativa pancolônica há 4 anos, é admitido com quadro de dor abdominal difusa, febre baixa, 12 evacuações sanguinolentas/dia e PCR 96 mg/L. Foi iniciado tratamento com hidrocortisona intravenosa há 72 horas, sem melhora clínica significativa (mantém taquicardia, PCR elevada e 10 evacuações/dia). A equipe avalia a melhor conduta a seguir. Assinale a alternativa mais adequada segundo as diretrizes atuais:",
    "options": [
      "Manter corticopoterapia por até 10 dias, pois a resposta tardia não aumenta complicações pós-operatórias.",
      "Iniciar azatioprina imediatamente para reduzir a atividade inflamatória já na fase aguda.",
      "Introduzir infliximabe ou ciclosporina como terapia de resgate, e se não houver resposta em até 7 dias, indicar colectomia.",
      "Indicar colectomia subtotal com ileostomia imediatamente, pois ausência de resposta após 3 dias de corticoterapia IV é indicação formal de cirurgia.",
      "Aguardar sinais específicos de complicação (megacólon tóxico, perfuração) antes de indicar intervenção cirúrgica."
    ],
    "correctAnswer": 2,
    "explanation": "Retocolite ulcerativa aguda grave (mais de 6 evacuações com sangue, febre, taquicardia e PCR alta), sem resposta após 72 horas de hidrocortisona EV (critérios de Oxford/Travis). É a hora da terapia de resgate: infliximabe ou ciclosporina.\n\nSe não houver resposta ao resgate em 4 a 7 dias, ou se surgir complicação (megacólon tóxico, perfuração, hemorragia maciça), indica-se colectomia. A decisão deve ser conjunta com a cirurgia desde a internação, para não atrasar a operação.",
    "commentary": "Corticoide até 10 dias (A): prolongar o corticoide sem resposta aumenta as complicações e a mortalidade pós-operatória.\n\nAzatioprina na fase aguda (B): demora 8 a 12 semanas para agir; serve para manutenção, não para resgate.\n\nColectomia imediata no 3º dia (D): sem complicação, a falha ao corticoide indica primeiro o resgate clínico.\n\nEsperar complicação para operar (E): atrasar a cirurgia até perfurar ou dilatar aumenta muito a mortalidade.",
    "reference": "ECCO 2022 — Guidelines on therapeutics in ulcerative colitis / GEDIIB — Consenso brasileiro de retocolite ulcerativa",
    "tags": [
      "gastroenterologia",
      "retocolite ulcerativa",
      "colite aguda grave",
      "infliximabe",
      "ciclosporina"
    ],
    "tip": "RCU grave sem resposta em 72 h de corticoide EV: infliximabe ou ciclosporina. Sem resposta: colectomia."
  },
  {
    "id": "unimedpb2026-34",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Paciente de 54 anos, previamente hígido, procura a emergência com dor torácica pleurítica há 12 horas e dispneia aos esforços moderados. PA 122x76 mmHg, FC 92 bpm, SatO₂ 95% em ar ambiente, FR 20 irpm, sem sinais de choque ou síncope. Exame físico sem achados relevantes. D-dímero elevado e angiotomografia de tórax mostram trombo em ramos segmentares da artéria pulmonar direita, sem sinais de sobrecarga importante de ventrículo direito. Troponina e BNP normais. Calculado o sPESI, o escore é 0. O paciente tem boa rede de apoio, entende as orientações e não tem contraindicações à anticoagulação oral. Qual a conduta mais adequada segundo as evidências e diretrizes atuais?",
    "options": [
      "Internação em UTI e trombólise sistêmica com alteplase, pois todo TEP confirmado deve ser considerado de alto risco.",
      "Internação em enfermaria com heparina não fracionada em bomba de infusão e posterior transição para varfarina.",
      "Alta hospitalar contraindicada, pois todo TEP exige pelo menos 72 horas de observação hospitalar.",
      "Anticoagulação ambulatorial com anticoagulante oral direto e seguimento precoce, pois se trata de TEP de baixo risco (sPESI 0).",
      "Colocação de filtro de veia cava inferior sem anticoagulação, pois o risco de sangramento é desconhecido."
    ],
    "correctAnswer": 3,
    "explanation": "TEP confirmado em ramos segmentares, sem instabilidade, sem disfunção de ventrículo direito, com troponina e BNP normais e sPESI 0: é TEP de baixo risco.\n\nCom boa rede de apoio, compreensão das orientações e sem contraindicação à anticoagulação, pode receber alta precoce ou tratamento ambulatorial com anticoagulante oral direto (rivaroxabana ou apixabana, que dispensam heparina inicial) e retorno precoce.",
    "commentary": "Trombólise em UTI (A): a trombólise é para TEP de alto risco (com hipotensão ou choque); aqui só traria risco de sangramento.\n\nHeparina não fracionada e varfarina em enfermaria (B): não há necessidade de internação nem de HNF; os anticoagulantes diretos são preferidos.\n\nObservação mínima de 72 horas (C): não existe essa regra; pacientes de baixo risco podem ser tratados em casa.\n\nFiltro de veia cava (E): só quando há contraindicação absoluta à anticoagulação, o que não é o caso.",
    "reference": "ESC 2019 — Guidelines on acute pulmonary embolism / ASH 2020 — Treatment of VTE",
    "tags": [
      "pneumologia",
      "tromboembolismo pulmonar",
      "sPESI",
      "anticoagulantes orais diretos",
      "tratamento ambulatorial"
    ],
    "tip": "TEP com sPESI 0, sem disfunção de VD: anticoagulante oral direto em casa."
  },
  {
    "id": "unimedpb2026-35",
    "topography": "2.2",
    "topic": "Dislipidemia",
    "module": "Clínica Médica",
    "text": "Um homem de 46 anos, sem histórico prévio de doença cardiovascular, procura avaliação para prevenção. Ele apresenta pressão arterial de 128 x 78 mmHg, IMC de 27 kg/m², LDL-colesterol de 162 mg/dL, HDL de 38 mg/dL e triglicerídeos de 168 mg/dL. O paciente não é tabagista, possui hemoglobina glicada de 5,4% e relata que seu pai sofreu infarto agudo do miocárdio aos 52 anos. A dosagem de lipoproteína(a) demonstra valor de 75 mg/dL, considerado elevado, e o escore de cálcio coronário (Agatston) é zero. Considerando as Diretrizes Brasileiras de Dislipidemias e Prevenção da Aterosclerose 2025, qual é a estratificação de risco cardiovascular mais adequada para esse paciente e qual deve ser a conduta inicial recomendada?",
    "options": [
      "Risco baixo. O CAC = 0 indica ausência de aterosclerose, dispensando uso de estatina mesmo com LDL elevado.",
      "Risco intermediário. O histórico familiar precoce e a Lp(a) elevada são agravantes, aumentando a necessidade de estatina de moderada intensidade mesmo com CAC = 0.",
      "Risco alto. A presença de LDL >= 160 mg/dL classifica automaticamente o paciente como de alto risco, indicando estatina de alta intensidade independentemente de CAC ou Lp(a).",
      "Risco muito alto. A Lp(a) > 50 mg/dL é critério isolado para muito alto risco e exige terapia combinada (estatina + ezetimiba) desde o início.",
      "Risco intermediário-baixo. O CAC = 0 reclassifica o paciente para baixo risco, recomendando apenas mudança de estilo de vida e reavaliação em 5 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Homem de 46 anos em prevenção primária, com LDL 162 mg/dL, HDL baixo, história familiar de DAC precoce (pai aos 52 anos) e Lp(a) elevada (75 mg/dL). Pela estimativa de risco ele fica em risco intermediário, e a história familiar precoce e a Lp(a) alta são agravantes que favorecem o tratamento.\n\nO escore de cálcio zero normalmente reduz o risco e permite adiar a estatina, mas a diretriz de 2025 faz ressalva para quem tem agravantes importantes, como história familiar precoce e Lp(a) elevada: nesses casos o CAC zero não afasta a indicação de estatina. O gabarito considera correta a estatina de moderada intensidade.",
    "commentary": "Risco baixo sem estatina (A): o CAC zero não anula o peso da Lp(a) elevada e da história familiar precoce.\n\nAlto risco automático pelo LDL ≥ 160 (C): apenas LDL ≥ 190 mg/dL classifica automaticamente como alto risco.\n\nLp(a) como critério de muito alto risco (D): Lp(a) é agravante, não critério isolado de muito alto risco.\n\nCAC zero reclassifica para baixo risco (E): nesse paciente, com agravantes fortes, a diretriz não recomenda apenas estilo de vida.\n\nAtenção: a interpretação do CAC zero na presença de agravantes é um ponto de debate entre diretrizes; muitas permitem adiar a estatina com CAC zero. A banca seguiu a leitura de que os agravantes mantêm a indicação.",
    "reference": "SBC — Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose 2025",
    "tags": [
      "cardiologia",
      "dislipidemia",
      "lipoproteína(a)",
      "escore de cálcio",
      "estratificação de risco",
      "estatinas"
    ],
    "tip": "LDL ≥ 190 = alto risco automático. Lp(a) e história familiar precoce são agravantes."
  },
  {
    "id": "unimedpb2026-36",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Clínica Médica",
    "text": "Uma criança de 7 anos, portadora de comunicação interventricular (CIV) perimembranosa pequena, assintomática, sem sopro hiperfonético, com desenvolvimento pôndero-estatural normal, sem história de cianose, síncope ou internações prévias. Em consulta recente, apresentou exame físico estável, saturando 98%, ausculta com sopro sistólico leve (2+/6+), ritmo cardíaco regular, PA e frequência cardíaca dentro da normalidade. Ecodopplercardiograma de controle há 6 meses evidencia CIV restritiva, câmaras cardíacas de tamanho normal e função ventricular preservada, sem sinais de hipertensão pulmonar. O procedimento indicado é adenoamigdalectomia eletiva, sob anestesia geral. O otorrinolaringologista solicita avaliação cardiológica para liberação cirúrgica e estimativa de risco perioperatório. De acordo com a Diretriz Brasileira de Avaliação Cardiovascular Perioperatória 2024, qual é a conduta mais adequada para o cardiologista diante desse cenário?",
    "options": [
      "Suspender o procedimento até que se realize teste ergométrico e ressonância cardíaca para melhor avaliação de risco, visto que toda cardiopatia congênita exige investigação funcional completa antes de cirurgia sob anestesia geral.",
      "Liberar para cirurgia com risco cardiovascular considerado baixo, sem necessidade de exames adicionais, mantendo seguimento ambulatorial rotineiro, visto tratar-se de cardiopatia não complexa, hemodinamicamente estável e procedimento de baixo risco.",
      "Solicitar cateterismo cardíaco para avaliação invasiva de fluxo do defeito septal e do risco de hipertensão pulmonar oculta, pois procedimentos com anestesia geral aumentam chance de eventos adversos mesmo em CIV pequena.",
      "Contraindicar adenoamigdalectomia eletiva, uma vez que CIV, ainda que restritiva, aumenta mortalidade perioperatória em cirurgias otorrinolaringológicas, sobretudo em crianças com shunt residual.",
      "Exigir fechamento cirúrgico da CIV antes do procedimento otorrinolaringológico, pois a correção da cardiopatia deve preceder qualquer cirurgia não cardíaca em pacientes pediátricos."
    ],
    "correctAnswer": 1,
    "explanation": "Criança com CIV perimembranosa pequena e restritiva, assintomática, sem hipertensão pulmonar, com câmaras normais e função preservada, que fará adenoamigdalectomia (procedimento de baixo risco).\n\nPela Diretriz Brasileira de Avaliação Perioperatória 2024, cardiopatia congênita simples, corrigida ou hemodinamicamente insignificante tem baixo risco perioperatório. A conduta é liberar sem exames adicionais e manter o seguimento habitual. A profilaxia para endocardite não é indicada para CIV pequena não corrigida.",
    "commentary": "Teste ergométrico e ressonância (A): não há indicação de investigação funcional em cardiopatia simples e estável.\n\nCateterismo (C): exame invasivo sem justificativa; o eco já excluiu hipertensão pulmonar.\n\nContraindicar a cirurgia (D): a CIV restritiva não aumenta significativamente a mortalidade em cirurgia de baixo risco.\n\nFechar a CIV antes (E): CIV pequena e restritiva muitas vezes nem precisa de correção, e não há exigência de corrigi-la antes de outra cirurgia.",
    "reference": "SBC — Diretriz Brasileira de Avaliação Cardiovascular Perioperatória 2024",
    "tags": [
      "cardiologia pediátrica",
      "avaliação perioperatória",
      "comunicação interventricular",
      "cardiopatias congênitas"
    ],
    "tip": "Cardiopatia congênita simples e estável + cirurgia de baixo risco: liberar sem exames."
  },
  {
    "id": "unimedpb2026-37",
    "topography": "7.1",
    "topic": "Dissecção de aorta",
    "module": "Cirurgia",
    "text": "Homem de 58 anos, hipertenso conhecido e tabagista, procura a emergência com início súbito, há 1 hora, de dor torácica intensa em “rasgo” irradiando para as costas. Está ansioso, PA 180x100 mmHg no braço direito e 120x70 mmHg no braço esquerdo; FC 110 bpm; ausculta cardíaca sem sopros novos; sem sinais óbvios de choque. Eletrocardiograma sem alterações isquêmicas agudas. Tomografia computadorizada com angiotomografia abaixo: Considerando as diretrizes e protocolos atuais para dissecção aórtica, qual é a conduta mais apropriada e imediata?",
    "options": [
      "Iniciar controle rigoroso da pressão arterial (betabloqueador + vasodilatador) e seguir com tratamento exclusivamente clínico, observando evolução.",
      "Encaminhar para reparação cirúrgica urgente da aorta ascendente (substituição/reconstrução) com suporte de cirurgia cardíaca e circulação extracorpórea.",
      "Programar intervenção endovascular (TEVAR) eletiva para a aorta torácica descendente em 48-72 horas.",
      "Realizar pericardiocentese diagnóstica e terapêutica imediata para prevenir tamponamento.",
      "Administrar fibrinolítico de resgate para dissolver trombos e evitar evolução da dissecção."
    ],
    "correctAnswer": 1,
    "explanation": "Dor torácica súbita \"em rasgo\" irradiada para o dorso, em hipertenso e tabagista, com diferença de PA entre os braços. A angiotomografia mostra flap intimal (linha que separa luz verdadeira e falsa) na aorta ascendente, e também na descendente: dissecção aguda de aorta tipo A de Stanford.\n\nA dissecção tipo A é emergência cirúrgica, pelo risco de rotura, tamponamento, insuficiência aórtica aguda e oclusão coronariana. A conduta é controlar a frequência cardíaca e a PA enquanto se encaminha para cirurgia de urgência da aorta ascendente, com circulação extracorpórea.",
    "commentary": "Tratamento só clínico (A): é o tratamento da dissecção tipo B não complicada; no tipo A a mortalidade sem cirurgia é de cerca de 1–2% por hora nas primeiras horas.\n\nTEVAR eletivo em 48–72 horas (C): o endovascular é para o tipo B complicado; o tipo A envolve a ascendente e precisa de cirurgia aberta já.\n\nPericardiocentese (D): não há tamponamento; e, quando há tamponamento por dissecção, a pericardiocentese pode piorar o sangramento — o tratamento é a cirurgia.\n\nFibrinolítico (E): é contraindicado; dissecção é causa clássica de sangramento catastrófico com trombólise.",
    "reference": "ESC 2024 — Guidelines for the management of peripheral arterial and aortic diseases / ACC/AHA 2022 — Aortic Disease Guideline",
    "tags": [
      "cirurgia cardiovascular",
      "dissecção de aorta",
      "dissecção tipo A",
      "emergências"
    ],
    "tip": "Dissecção tipo A (ascendente) = cirurgia de emergência. Tipo B não complicada = tratamento clínico.",
    "image": "/images/unimedpb2026-37.webp"
  },
  {
    "id": "unimedpb2026-38",
    "topography": "2.1",
    "topic": "Câncer de pulmão",
    "module": "Cirurgia",
    "text": "Mulher de 62 anos, ex-tabagista (40 maços/ano), apresenta nódulo pulmonar de 12 mm com crescimento em 18 meses. PET-CT: captação moderada. Função pulmonar satisfatória. Cirurgião considera biópsia percutânea arriscada pela localização. Segundo diretrizes atuais sobre nódulo pulmonar, qual abordagem é mais adequada?",
    "options": [
      "Seguimento com TC anual.",
      "Repetir PET-CT antes de decidir.",
      "Ressecção cirúrgica videoassistida para diagnóstico e tratamento.",
      "Broncoscopia para biópsia independente da localização.",
      "Quimioterapia empírica se forte suspeita de malignidade."
    ],
    "correctAnswer": 2,
    "explanation": "Nódulo sólido de 12 mm que cresceu em 18 meses, com captação no PET-CT, em ex-tabagista pesada de 62 anos: alta probabilidade de câncer de pulmão. Como a biópsia percutânea é arriscada e a função pulmonar permite, a melhor conduta é a ressecção cirúrgica por videotoracoscopia, que dá diagnóstico (congelação) e tratamento no mesmo tempo, com lobectomia se for confirmada malignidade.",
    "commentary": "TC anual (A): nódulo em crescimento e com captação não pode ficar em seguimento.\n\nRepetir o PET-CT (B): não acrescenta informação e atrasa o tratamento de uma lesão provavelmente maligna.\n\nBroncoscopia independente da localização (D): nódulos periféricos pequenos têm baixo rendimento diagnóstico na broncoscopia convencional.\n\nQuimioterapia empírica (E): nunca se trata câncer sem diagnóstico histológico; a cirurgia é curativa no estádio inicial.",
    "reference": "Fleischner Society 2017 / ACCP — Evaluation of pulmonary nodules / SBPT — Nódulo pulmonar",
    "tags": [
      "cirurgia torácica",
      "nódulo pulmonar",
      "câncer de pulmão",
      "videotoracoscopia"
    ],
    "tip": "Nódulo que cresce + capta no PET + bom candidato cirúrgico: ressecção por VATS."
  },
  {
    "id": "unimedpb2026-39",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem, 35 anos, após queda de altura é resgatado pelo SAMU e levado para HETSHL com quadro de traumatismo cranioencefálico grave. Ao exame:\nX: sem sinais de hemorragia externa ativa. A: vias aéreas pérvias.\nB: saturação 98% (máscara com reservatório), FR 18 ipm, mv + simétrico.\nC: PA 70/40 mmHg, FC 62 bpm. Pulsos simétricos. Pelve estável. Sangramento em região parieto occipital.\nD: Glasgow 7, anisocoria direita.\nE: colar cervical, prancha rígida. Membros sem evidência de fratura exposta. Recebendo Solução Ringer lactato em acesso periférico 16F em veia antecubital. Abd plano.\n\nConsiderando o quadro, qual das seguintes estratégias é a mais apropriada controle de via aérea por indução em sequência rápida e manejo simultâneo do paciente?",
    "options": [
      "Indução com propofol 2 mg/kg e paralisia com succinilcolina 1,5 mg/kg; não administrar vasopressor pré-indução; aplicar manobra de Sellick e proceder intubação rápida.",
      "Indução com etomidato 0,3 mg/kg e paralisia com succinilcolina 1-1,5 mg/kg; não administrar terapia hiperosmolar; iniciar suporte vasopressor apenas se a pressão cair após intubação.",
      "Pré-tratamento com bolo de solução hipertônica (3% NaCl, 250 mL) por via rápida (considerar se disponível), indução com ketamina 1-2 mg/kg IV e paralisia com rocurônio 1,0-1,2 mg/kg IV preparar push-dose vasopressor (epinefrina 10-20 ug ou fenilefrina conforme contexto) ou infusão de noradrenalina pronta para titulação imediatamente antes/ao longo da indução; realizar Intubação orotraqueal e ventilação controlada após cânula posicionada.",
      "Indução com midazolam 0,1 mg/kg e paralisia com rocurônio 0,6 mg/kg, com administração profilática de manitol 1 g/kg imediatamente antes da laringoscopia; adiar vasopressor até pós-intubação.",
      "Realizar intubação orotraqueal sem indução (intubação “às cegas”) e suturar nasoenteral para reduzir risco de aspiração, iniciando depois sedação e vasopressor se necessário."
    ],
    "correctAnswer": 2,
    "explanation": "TCE grave (Glasgow 7) com anisocoria — sinal de herniação — e choque (PA 70/40). A hipotensão e a hipóxia são os dois maiores determinantes de lesão cerebral secundária, então a intubação precisa proteger a via aérea sem derrubar a PA nem elevar a pressão intracraniana.\n\nA estratégia mais adequada é: solução salina hipertônica (trata a hipertensão intracraniana e expande volume, ao contrário do manitol, que é diurético), cetamina como indutor (mantém a PA e não aumenta a PIC com ventilação controlada), rocurônio em dose de sequência rápida e vasopressor pronto (push-dose ou noradrenalina) para evitar o colapso pós-intubação.",
    "commentary": "Propofol sem vasopressor (A): o propofol causa vasodilatação e hipotensão, catastrófico num paciente chocado com TCE; a manobra de Sellick não é mais rotina.\n\nEtomidato sem terapia hiperosmolar e vasopressor só depois (B): deixa sem tratamento a herniação e espera a PA cair para agir.\n\nMidazolam com manitol (D): o midazolam causa hipotensão, e o manitol, por ser diurético, piora o choque.\n\nIntubação sem indução (E): aumenta a PIC, a chance de aspiração e o trauma de via aérea; não se faz em paciente com tônus preservado.",
    "reference": "ATLS 11ª edição / Brain Trauma Foundation — Guidelines for severe TBI (4ª ed.)",
    "tags": [
      "trauma",
      "TCE grave",
      "sequência rápida de intubação",
      "cetamina",
      "salina hipertônica"
    ],
    "tip": "TCE + choque: cetamina, salina hipertônica e vasopressor pronto. Evite propofol, midazolam e manitol."
  },
  {
    "id": "unimedpb2026-40",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Mulher, 58 anos, realiza exame que mostra alça intestinal delgada encarcerada no saco da hérnia, sem ar livre, sem sinais claros de pneumatose ou de perfuração; sem coleta purulenta. Considerando as diretrizes e boas práticas para manejo de hérnia incisional complicada, a conduta mais apropriada é:",
    "options": [
      "Tentar redução manual sob sedação e alta com agendamento de reparo eletivo com tela sintética, se reduzir com sucesso.",
      "Cirurgia de emergência com exploração e, se alça for viável, proceder reparo definitivo com colocação de tela sintética (preferencialmente retromuscular) na mesma cirurgia.",
      "Suspender analgesia e observar 24-48 horas com antibiótico empírico; operar somente se ocorrer peritonite ou sinais de falência da alça.",
      "Realizar ressecção entérica imediata e fechamento primário da parede sem tela, independente do aspecto da alça, para reduzir risco infeccioso.",
      "Proceder a paracentese exploradora no saco herniário e, se não houver líquido purulento, programar correção eletiva em 2-3 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Hérnia incisional com alça de delgado encarcerada, sem perfuração, pneumatose ou coleção purulenta. Hérnia encarcerada com obstrução tem indicação de cirurgia de urgência, pelo risco de estrangulamento.\n\nNa cirurgia avalia-se a viabilidade da alça. Se ela for viável e o campo não estiver contaminado, as diretrizes atuais (World Society of Emergency Surgery) permitem o reparo definitivo com tela sintética no mesmo tempo, de preferência em posição retromuscular, com menor recidiva e sem aumento relevante de infecção.",
    "commentary": "Redução manual e alta (A): a redução de hérnia incisional encarcerada pode reduzir uma alça já comprometida e mascarar isquemia.\n\nObservar 24–48 horas (C): esperar peritonite ou falência da alça aumenta morbidade e mortalidade.\n\nRessecção de rotina sem tela (D): ressecção só se a alça for inviável; e, em campo limpo, a tela é preferível.\n\nParacentese do saco herniário (E): procedimento sem indicação e com risco de lesão intestinal.",
    "reference": "WSES 2017 — Guidelines for emergency repair of complicated abdominal wall hernias / EHS — Incisional hernia guidelines",
    "tags": [
      "cirurgia geral",
      "hérnia incisional",
      "hérnia encarcerada",
      "tela"
    ],
    "tip": "Hérnia encarcerada: cirurgia. Alça viável e campo limpo: pode colocar tela."
  },
  {
    "id": "unimedpb2026-41",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Paciente de 64 anos foi submetido a colectomia direita por tumor de cólon. O laudo anatomopatológico revela: adenocarcinoma moderadamente diferenciado, pT3 N0 (pN0), margens cirúrgicas livres, porém foram identificados apenas 8 linfonodos no espécime. Não há perfuração nem obstrução. Considerando as recomendações de estadiamento e conduta adjuvante, assinale a alternativa CORRETA:",
    "options": [
      "O estadiamento pN0 é definitivo e, como não houve fatores de alto risco, o paciente não deve receber quimioterapia adjuvante.",
      "A amostragem de 8 linfonodos é considerada adequada; o paciente deve ser avaliado apenas por vigilância.",
      "A amostragem de <12 linfonodos torna o estadiamento subótimo; o paciente deve ser considerado de alto risco para recidiva e, portanto, discutir quimioterapia adjuvante.",
      "Deve ser realizada nova cirurgia para ressecção adicional de mesentério visando alcançar >=12 linfonodos.",
      "A presença de <12 linfonodos exige radioterapia adjuvante obrigatória."
    ],
    "correctAnswer": 2,
    "explanation": "Adenocarcinoma de cólon pT3 N0 (estádio II) com apenas 8 linfonodos examinados. O mínimo recomendado para estadiar com segurança é 12 linfonodos; menos que isso pode deixar passar metástases linfonodais (subestadiamento).\n\nPor isso, menos de 12 linfonodos é um dos critérios de alto risco do estádio II, junto com T4, perfuração, obstrução, invasão angiolinfática ou perineural e tumor pouco diferenciado. Nesse caso deve-se discutir quimioterapia adjuvante.",
    "commentary": "pN0 definitivo sem adjuvância (A): com menos de 12 linfonodos o pN0 não é confiável, e esse é um fator de alto risco.\n\n8 linfonodos são adequados (B): o padrão mínimo é 12.\n\nReoperar para buscar linfonodos (D): não se reopera para aumentar a contagem; usa-se o dado para orientar a adjuvância.\n\nRadioterapia obrigatória (E): radioterapia adjuvante não é rotina no câncer de cólon (é do reto).",
    "reference": "NCCN Guidelines — Colon Cancer (2025) / ESMO — Localised colon cancer",
    "tags": [
      "cirurgia oncológica",
      "câncer colorretal",
      "estadiamento",
      "linfonodos",
      "quimioterapia adjuvante"
    ],
    "tip": "Câncer de cólon: mínimo 12 linfonodos. Menos que isso no estádio II = alto risco."
  },
  {
    "id": "unimedpb2026-42",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Um homem de 34 anos, previamente saudável, é admitido no pronto-socorro após sofrer politrauma em colisão carro-moto. Chega hemodinamicamente estável após reposição de 1 L de cristaloide pré-hospitalar. Exames iniciais mostram fratura exposta de tíbia, laceração extensa em coxa e múltiplas escoriações, sem necessidade imediata de laparotomia. Está lúcido, orientado, com PA 118x76 mmHg, FC 102 bpm e temperatura de 36,2 °C. Nas primeiras 12 horas de internação, apresenta glicemia persistentemente elevada (entre 182-210 mg/dL), aumento discreto de lactato (2,1 mmol/L -> 2,6 mmol/L), oligúria leve, irritabilidade e queixa de frio, apesar de manta térmica. A equipe assistencial questiona se esse conjunto de alterações representa complicação metabólica ou se corresponde ao padrão fisiológico esperado após o trauma.\n\nConsiderando os conhecimentos contemporâneos sobre resposta metabólica ao trauma e diretrizes cirúrgicas atuais (incluindo princípios do ATLS 11 e das recomendações de controle metabólico em trauma), qual é a interpretação MAIS adequada?",
    "options": [
      "As alterações representam falência inicial da resposta ao estresse, sugerindo necessidade de investigação para insuficiência adrenal aguda.",
      "O quadro é compatível com a Fase Ebb da resposta metabólica ao trauma, caracterizada por hipometabolismo, vasoconstrição periférica, hipoperfusão e hiperglicemia por resistência periférica à insulina.",
      "A hipertermia ausente e a glicemia <220 mg/dL afastam resposta metabólica ao trauma; o mais provável é infecção precoce por germes hospitalares.",
      "A elevação do lactato indica choque descompensado, exigindo reposição agressiva de cristaloides, mesmo sem sinais clínicos de hipovolemia.",
      "Trata-se já da Fase Flow, caracterizada por hipermetabolismo e aumento do consumo energético, sendo esperado aumento de temperatura, diurese e VO2."
    ],
    "correctAnswer": 1,
    "explanation": "Nas primeiras horas após o trauma, o paciente tem hiperglicemia (resistência à insulina mediada por catecolaminas, cortisol e glucagon), queda de temperatura com sensação de frio, vasoconstrição periférica, lactato discretamente elevado e oligúria leve, mantendo estabilidade hemodinâmica.\n\nEsse padrão corresponde à fase Ebb (de refluxo) da resposta metabólica ao trauma, que dura cerca de 24–48 horas: hipometabolismo, redução do consumo de oxigênio e do débito cardíaco e retenção de sal e água. Depois vem a fase Flow, hipermetabólica.",
    "commentary": "Insuficiência adrenal (A): a resposta ao estresse está ativa (hiperglicemia, vasoconstrição); insuficiência adrenal daria hipotensão refratária, hiponatremia e hipercalemia.\n\nInfecção precoce (C): ainda é cedo para infecção hospitalar, e os achados são esperados da resposta ao trauma.\n\nChoque descompensado (D): PA normal e lactato pouco elevado não justificam volume agressivo; a hiper-hidratação tem riscos.\n\nFase Flow (E): é posterior, com hipermetabolismo, aumento de temperatura, débito cardíaco e consumo de O₂ — o contrário do que o paciente apresenta.",
    "reference": "Sabiston — Tratado de Cirurgia (resposta metabólica ao trauma) / ATLS 11ª edição",
    "tags": [
      "trauma",
      "resposta metabólica ao trauma",
      "fase Ebb",
      "hiperglicemia de estresse"
    ],
    "tip": "Ebb = primeiras horas, frio e hipometabolismo. Flow = depois, febre e hipermetabolismo."
  },
  {
    "id": "unimedpb2026-43",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Um homem de 32 anos sofre colisão motociclística e evolui com hemotórax direito drenado inicialmente com 800 mL, mantendo débito de 150 mL/h por 4 horas. Após estabilização hemodinâmica, tomografia computadorizada evidencia coágulos loculados e pulmão sem expansão adequada, compatível com hemotórax retido. Considerando as recomendações atuais para o manejo desse quadro, avalie as assertivas abaixo:\nI. A toracoscopia videoassistida (VATS) realizada nas primeiras 72 horas reduz taxas de infecção, necessidade de toracotomia e tempo de internação.\nII. A fibrinólise intrapleural é a primeira escolha no trauma fechado, pois apresenta eficácia superior à VATS quando realizada precocemente.\nIII. A manutenção da drenagem torácica como única conduta apresenta baixa taxa de resolução quando há loculações e ausência de reexpansão pulmonar.\nIV. A toracotomia de urgência está indicada apenas se houver sinais de instabilidade hemodinâmica persistente ou sangramento maciço em curso.\n\nAssinale a alternativa correta:",
    "options": [
      "V–F–V–V",
      "V–F–F–V",
      "F–F–V–F",
      "V–V–V–F",
      "F–V–V–V"
    ],
    "correctAnswer": 0,
    "explanation": "Hemotórax retido (coágulo loculado com pulmão sem expandir apesar do dreno).\n\nI — Verdadeira: a VATS precoce (primeiros 3 a 7 dias, idealmente nas primeiras 72 horas) é a conduta de escolha e reduz empiema, fibrotórax, toracotomia e tempo de internação.\n\nII — Falsa: a fibrinólise intrapleural é alternativa quando a VATS não é possível; não é superior a ela.\n\nIII — Verdadeira: o dreno não consegue remover coágulos loculados; mantê-lo como única conduta tem baixa resolução.\n\nIV — Verdadeira: a toracotomia de urgência é reservada para instabilidade persistente ou sangramento maciço (drenagem inicial ≥ 1.500 mL ou débito ≥ 200 mL/h por 2 a 4 horas).\n\nSequência: V–F–V–V.",
    "commentary": "B (V–F–F–V): considera eficaz manter apenas o dreno com loculações.\n\nC (F–F–V–F): nega o papel da VATS precoce e a indicação clássica de toracotomia.\n\nD (V–V–V–F): aceita a fibrinólise como superior à VATS.\n\nE (F–V–V–V): nega a VATS e coloca a fibrinólise como primeira escolha.",
    "reference": "EAST — Practice Management Guideline: Retained hemothorax (2020) / ATLS 11ª edição",
    "tags": [
      "trauma torácico",
      "hemotórax retido",
      "VATS",
      "fibrinólise intrapleural"
    ],
    "tip": "Hemotórax retido: VATS precoce (até 72 h a 7 dias)."
  },
  {
    "id": "unimedpb2026-44",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Um homem de 27 anos chega ao PS com dor periumbilical migrando para FID, náuseas e anorexia. PCR: 28 mg/L; leucócitos: 12.500/mm³. TC mostra apêndice de 8 mm, sem apendicolito, sem coleção, com pouca gordura inflamada. Segundo diretrizes internacionais mais recentes sobre manejo da apendicite aguda não complicada, qual conduta é aceitável e fundamentada por evidência, desde que haja acompanhamento rigoroso?",
    "options": [
      "Antibioticoterapia exclusiva ambulatorial.",
      "Cirurgia laparotômica imediata.",
      "Apendicectomia apenas se houver piora clínica após 72h de observação.",
      "Internação e antibioticoterapia endovenosa obrigatória.",
      "Laparoscopia apenas se diâmetro do apêndice > 10 mm."
    ],
    "correctAnswer": 0,
    "explanation": "Apendicite aguda não complicada confirmada por TC (apêndice de 8 mm, sem apendicolito, coleção ou perfuração) em adulto jovem estável. Estudos como CODA e APPAC mostraram que o tratamento não operatório com antibiótico é uma opção segura nesses casos selecionados, e as diretrizes (WSES 2020) o aceitam como alternativa à apendicectomia, desde que o paciente seja informado sobre a recidiva (cerca de 25–40% em 5 anos) e acompanhado de perto. O manejo pode ser ambulatorial em pacientes selecionados.\n\nA apendicectomia laparoscópica continua sendo o padrão, mas a pergunta pede a conduta não cirúrgica aceitável.",
    "commentary": "Laparotomia imediata (B): a via preferida é a laparoscópica; e há a alternativa antibiótica.\n\nObservar 72 horas sem tratamento (C): observar sem antibiótico nem cirurgia não é estratégia aceita.\n\nAntibiótico EV obrigatório com internação (D): pacientes selecionados podem fazer tratamento ambulatorial com antibiótico oral (com ou sem dose parenteral inicial).\n\nLaparoscopia só se > 10 mm (E): não existe esse critério; o diâmetro de 8 mm já é compatível com apendicite.",
    "reference": "WSES 2020 — Jerusalem guidelines on acute appendicitis / CODA Trial (NEJM 2020) / APPAC",
    "tags": [
      "cirurgia geral",
      "apendicite aguda",
      "tratamento não operatório",
      "antibioticoterapia"
    ],
    "tip": "Apendicite não complicada (sem apendicolito): antibiótico é alternativa aceitável à cirurgia."
  },
  {
    "id": "unimedpb2026-45",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Mulher de 38 anos, previamente hígida, apresenta dor súbita em hipocôndrio direito com irradiação para dorso, associada a náuseas, sem febre, icterícia ou vômitos persistentes. Ultrassonografia na urgência evidencia vesícula com múltiplos cálculos, sem sinais ultrassonográficos de colecistite aguda (sem espessamento de parede, líquido pericolecístico ou sinal de Murphy ultrassonográfico positivo). Exames laboratoriais com hemograma, transaminases, amilase e lipase normais. Após analgesia inicial com dipirona EV, a paciente persiste com dor intensa. Com base nas melhores evidências disponíveis, qual é a conduta analgésica inicial mais apropriada para esse quadro?",
    "options": [
      "Iniciar antiespasmódico isolado (escopolamina) como medicação de primeira escolha para alívio da dor biliar.",
      "Iniciar AINEs como primeira linha, pois reduzem dor, inflamação e risco de progressão para colecistite, podendo associar opioides se refratário.",
      "Evitar AINEs pelo risco de espasmo do esfíncter de Oddi, devendo-se priorizar opioides em todos os casos.",
      "Administrar antibiótico profilático (ceftriaxona + metronidazol) e programar colecistectomia eletiva, pois dor biliar isolada já é indicação de terapia antimicrobiana.",
      "Manter observação clínica sem analgesia específica, já que cálculos assintomáticos são tratados apenas com cirurgia eletiva."
    ],
    "correctAnswer": 1,
    "explanation": "Cólica biliar (dor em hipocôndrio direito irradiada para o dorso, com cálculos e sem sinais de colecistite, exames normais) que persiste após dipirona. Revisões sistemáticas mostram que os AINEs (diclofenaco, cetorolaco) aliviam a dor tanto quanto os opioides e, ao inibir prostaglandinas, reduzem a progressão para colecistite aguda. São a primeira linha, e os opioides ficam para os casos refratários.\n\nEm seguida, programa-se colecistectomia eletiva, já que a colelitíase ficou sintomática.",
    "commentary": "Escopolamina isolada (A): antiespasmódicos aliviam menos que os AINEs e não reduzem a progressão para colecistite.\n\nEvitar AINEs e usar só opioides (C): o receio do espasmo do esfíncter de Oddi com opioides é pouco relevante na prática, mas são os AINEs que têm a primeira linha.\n\nAntibiótico profilático (D): cólica biliar sem infecção não pede antibiótico.\n\nSem analgesia (E): a paciente tem dor intensa e precisa de analgesia; e colelitíase com cólica é sintomática, não assintomática.",
    "reference": "Cochrane 2016 — Analgesia for biliary colic / SAGES — Guidelines for gallstone disease",
    "tags": [
      "cirurgia geral",
      "colelitíase",
      "cólica biliar",
      "AINEs",
      "analgesia"
    ],
    "tip": "Cólica biliar: AINE é primeira linha (alivia e reduz colecistite)."
  },
  {
    "id": "unimedpb2026-46",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Mulher de 38 anos, previamente hígida, apresenta dor súbita em hipocôndrio direito com irradiação para dorso, associada a náuseas, sem febre, icterícia ou vômitos persistentes. Ultrassonografia na urgência evidencia vesícula com múltiplos cálculos, sem sinais ultrassonográficos de colecistite aguda (sem espessamento de parede, líquido pericolecístico ou sinal de Murphy ultrassonográfico positivo). Exames laboratoriais com hemograma, transaminases, amilase e lipase normais. Após analgesia inicial com dipirona EV. a paciente persiste com dor intensa. Com base nas melhores evidências disponíveis, qual é a conduta analgésica inicial mais apropriada para esse quadro?",
    "options": [
      "Iniciar antiespasmódico isolado (escopolamina) como medicação de primeira escolha para alívio da dor biliar.",
      "Iniciar AINEs como primeira linha, pois reduzem dor, inflamação e risco de progressão para colecistite, podendo associar opioides se refratário.",
      "Evitar AINEs pelo risco de espasmo do esfíncter de Oddi, devendo-se priorizar opioides em todos os casos.",
      "Administrar antibiótico profilático (ceftriaxona + metronidazol) e programar colecistectomia eletiva, pois dor biliar isolada já é indicação de terapia antimicrobiana.",
      "Manter observação clínica sem analgesia específica, já que cálculos assintomáticos são tratados apenas com cirurgia eletiva."
    ],
    "correctAnswer": 1,
    "explanation": "Cólica biliar (dor em hipocôndrio direito irradiada para o dorso, com cálculos e sem sinais de colecistite, exames normais) que persiste após dipirona. Revisões sistemáticas mostram que os AINEs (diclofenaco, cetorolaco) aliviam a dor tanto quanto os opioides e, ao inibir prostaglandinas, reduzem a progressão para colecistite aguda. São a primeira linha, e os opioides ficam para os casos refratários.\n\nEm seguida, programa-se colecistectomia eletiva, já que a colelitíase ficou sintomática.",
    "commentary": "Esta questão repete, na prova, o enunciado e as alternativas da questão 45.\n\nEscopolamina isolada (A): antiespasmódicos aliviam menos que os AINEs e não reduzem a progressão para colecistite.\n\nEvitar AINEs e usar só opioides (C): o receio do espasmo do esfíncter de Oddi com opioides é pouco relevante na prática, mas são os AINEs que têm a primeira linha.\n\nAntibiótico profilático (D): cólica biliar sem infecção não pede antibiótico.\n\nSem analgesia (E): a paciente tem dor intensa e precisa de analgesia; e colelitíase com cólica é sintomática, não assintomática.",
    "reference": "Cochrane 2016 — Analgesia for biliary colic / SAGES — Guidelines for gallstone disease",
    "tags": [
      "cirurgia geral",
      "colelitíase",
      "cólica biliar",
      "AINEs",
      "analgesia"
    ],
    "tip": "Cólica biliar: AINE é primeira linha (alivia e reduz colecistite)."
  },
  {
    "id": "unimedpb2026-47",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Paciente de 67 anos, hipertenso e com história de colectomia prévia, chega à emergência com dor abdominal difusa, vômitos biliosos, distensão e parada de flatos há 24h. Ao exame, abdome distendido, timpanismo difuso e ruídos metálicos, sem sinais de peritonite. Lactato 3,1 mmol/L e leucócitos 15.800/mm³. TC com contraste mostra distensão de delgado com ponto de transição e ingurgitamento mesentérico, sem pneumoperitônio. Após 6 horas de hidratação, analgesia e sonda nasogástrica, permanece taquicárdico, oligúrico e com dor intensa. Qual a conduta mais apropriada?",
    "options": [
      "Manter tratamento conservador por até 72 horas, já que a ausência de peritonite permite conduta expectante.",
      "Solicitar radiografia seriada e aguardar redução do lactato antes de decidir sobre intervenção cirúrgica.",
      "Indicar laparotomia exploradora.",
      "Realizar tomografia com contraste oral e retomar conduta conservadora caso o contraste progrida pelo intestino.",
      "Administrar antibiótico e manter observação clínica por mais 24h, pois lactato até 3,5 mmol/L não indica gravidade."
    ],
    "correctAnswer": 2,
    "explanation": "Obstrução de delgado por bridas (colectomia prévia) com sinais de sofrimento de alça: TC com ingurgitamento mesentérico, lactato elevado, leucocitose e, após 6 horas de tratamento clínico, persistência de taquicardia, oligúria e dor intensa. Esses são sinais de estrangulamento ou isquemia, mesmo sem peritonite franca.\n\nO tratamento conservador só vale para obstrução sem sinais de sofrimento. Aqui a indicação é laparotomia exploradora (ou laparoscopia) de urgência.",
    "commentary": "Conservador por 72 horas (A): o prazo de 72 horas vale para obstrução simples; com sinais de isquemia, esperar aumenta a mortalidade.\n\nRadiografias seriadas e esperar o lactato (B): atrasa a cirurgia num quadro de provável estrangulamento.\n\nContraste oral (Gastrografin) (D): é útil na obstrução sem sinais de gravidade; não se aplica quando há suspeita de isquemia.\n\nAntibiótico e mais 24 horas (E): o lactato elevado com piora clínica é sinal de gravidade; não há limiar seguro de 3,5 mmol/L.",
    "reference": "WSES 2017 — Bologna guidelines for adhesive small bowel obstruction",
    "tags": [
      "cirurgia geral",
      "obstrução intestinal",
      "bridas",
      "estrangulamento",
      "laparotomia"
    ],
    "tip": "Obstrução por bridas + sinais de isquemia (lactato, febre, taquicardia, dor contínua): opera."
  },
  {
    "id": "unimedpb2026-48",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Paciente com queimadura de 30% de SCQ. Segundo a fórmula de Parkland, o volume nas primeiras 24h é:",
    "options": [
      "2 ml/kg/%",
      "4 ml/kg/%",
      "6 ml/kg/%",
      "8 ml/kg/%",
      "10 ml/kg/%"
    ],
    "correctAnswer": 1,
    "explanation": "A fórmula de Parkland estima a reposição volêmica do grande queimado nas primeiras 24 horas: 4 mL × peso (kg) × % de superfície corporal queimada (2º e 3º graus), com Ringer lactato. Metade do volume vai nas primeiras 8 horas, contadas a partir do momento da queimadura, e a outra metade nas 16 horas seguintes. O ajuste é guiado pela diurese (0,5–1 mL/kg/h em adultos).\n\nO ATLS 10ª/11ª edição sugere iniciar com 2 mL/kg/% em adultos, mas a fórmula de Parkland clássica, que é o que a questão pergunta, é 4 mL/kg/%.",
    "commentary": "2 mL/kg/% (A): é a estimativa inicial atual do ATLS para adultos, não a fórmula de Parkland.\n\n6 mL/kg/% (C): não corresponde a nenhuma fórmula usual.\n\n8 e 10 mL/kg/% (D e E): volumes excessivos, com risco de síndrome compartimental e edema pulmonar.",
    "reference": "ATLS 11ª edição / Ministério da Saúde — Cartilha para tratamento de emergência das queimaduras",
    "tags": [
      "trauma",
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica"
    ],
    "tip": "Parkland: 4 × peso × SCQ. Metade em 8 h (desde a queimadura)."
  },
  {
    "id": "unimedpb2026-49",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "O Hospital Alberto Urquíza Wanderley iniciou, em 2024, um programa de vigilância para doenças respiratórias crônicas entre os pacientes atendidos no ambulatório de pneumologia. O objetivo era identificar padrões epidemiológicos associados a fatores modificáveis, como tabagismo, exposição ocupacional e condições ambientais. Como parte da análise inicial, a equipe de epidemiologia decidiu verificar se havia associação entre o hábito de fumar e a ocorrência de bronquite crônica na população atendida. Para isso, foram revisados 200 prontuários consecutivos de pacientes avaliados nos últimos três meses, todos acima de 18 anos e sem diagnóstico prévio de doença pulmonar obstrutiva grave. Após análise dos registros médicos e questionários padronizados preenchidos pelos pacientes, obtiveram-se os seguintes dados:\n• Tabagistas: 42 com bronquite crônica e 58 sem bronquite (total 100)\n• Não tabagistas: 18 com bronquite crônica e 82 sem bronquite (total 100)\n• Total: 60 com bronquite crônica e 140 sem bronquite (total 200)\n\nO objetivo da equipe é determinar se existe associação estatisticamente significativa entre tabagismo e bronquite crônica nessa amostra de pacientes atendidos no hospital. Qual teste estatístico deve ser utilizado para essa análise?",
    "options": [
      "Correlação de Pearson",
      "Teste t de Student para amostras independentes",
      "Teste exato de Fisher",
      "Teste qui-quadrado de independência",
      "Teste de Mann-Whitney"
    ],
    "correctAnswer": 3,
    "explanation": "As duas variáveis são qualitativas nominais dicotômicas (fumante ou não; bronquite ou não), organizadas numa tabela 2x2, em amostras independentes. Para testar associação entre duas variáveis categóricas usa-se o teste qui-quadrado de independência.\n\nComo a amostra é grande (200 pacientes) e todas as frequências esperadas são bem maiores que 5 (a menor é 30), o qui-quadrado é adequado.",
    "commentary": "Correlação de Pearson (A): mede relação linear entre duas variáveis quantitativas contínuas.\n\nTeste t de Student (B): compara médias de variável quantitativa entre dois grupos.\n\nTeste exato de Fisher (C): também serve para tabela 2x2, mas é indicado quando alguma frequência esperada é menor que 5 (amostras pequenas).\n\nMann-Whitney (E): teste não paramétrico para comparar variável ordinal ou quantitativa sem distribuição normal entre dois grupos.",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "bioestatística",
      "qui-quadrado",
      "testes de hipótese",
      "variáveis categóricas"
    ],
    "tip": "Duas variáveis categóricas: qui-quadrado. Esperado < 5 em alguma célula: Fisher."
  },
  {
    "id": "unimedpb2026-50",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Um pai leva sua filha de um ano para vacinação de rotina e menciona que ela apresenta fezes amolecidas há três dias. A criança é avaliada, recebe o imunizante, soro de hidratação oral e orientações alimentares. De acordo com os níveis clássicos de prevenção, o conjunto das ações realizadas corresponde a:",
    "options": [
      "Prevenção secundária e terciária.",
      "Prevenção primária e secundária.",
      "Apenas prevenção primária.",
      "Apenas prevenção terciária.",
      "Prevenção quaternária."
    ],
    "correctAnswer": 1,
    "explanation": "Pelos níveis de prevenção de Leavell e Clark:\n\n• A vacina é proteção específica antes da doença → prevenção primária.\n• Avaliar a diarreia já presente, prescrever soro de reidratação oral e orientar a alimentação é diagnóstico e tratamento precoce para evitar desidratação → prevenção secundária.\n\nPortanto, o atendimento envolveu prevenção primária e secundária.",
    "commentary": "Secundária e terciária (A): não houve reabilitação nem redução de sequelas (terciária), e a vacina é primária.\n\nApenas primária (C): o manejo da diarreia, que já existe, é secundário.\n\nApenas terciária (D): terciária é reabilitação após dano estabelecido.\n\nQuaternária (E): é evitar intervenções desnecessárias (iatrogenia); não descreve as ações realizadas.",
    "reference": "Leavell & Clark — Medicina Preventiva / Ministério da Saúde — Cadernos de Atenção Básica",
    "tags": [
      "saúde coletiva",
      "níveis de prevenção",
      "história natural da doença",
      "vacinação"
    ],
    "tip": "Vacina = primária. Tratar doença inicial = secundária. Reabilitar = terciária. Evitar excesso = quaternária."
  },
  {
    "id": "unimedpb2026-51",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Durante uma auditoria interna no Hospital Regional Santa Terezinha, a equipe identifica que alguns pacientes estão tendo dificuldade de acesso a consultas especializadas e exames de imagem. A direção argumenta que \"o hospital só deve atender pacientes encaminhados de municípios conveniados\" e que \"pacientes de fora da área pactuada não têm direito ao atendimento no serviço\". Entretanto, um paciente de 52 anos, residente em outro município dentro do mesmo estado, procura atendimento na unidade após sentir dor torácica durante uma viagem. A equipe de triagem é instruída a orientá-lo a retornar ao seu município de origem para ser atendido. Considerando os princípios e diretrizes organizativas do Sistema Único de Saúde (SUS), qual afirmação é correta?",
    "options": [
      "A diretriz da descentralização permite que serviços estaduais e municipais determinem livremente seus critérios de acesso, inclusive recusando viajantes.",
      "O atendimento só é obrigatório se o paciente apresentar cartão SUS vinculado ao município da unidade.",
      "A diretriz da integralidade permite negar o atendimento inicial, desde que haja pactuação prévia entre os municípios.",
      "A unidade agiu corretamente, pois cada município deve atender exclusivamente seus residentes conforme pactuação regional.",
      "A conduta é inadequada, pois a diretriz da universalidade garante atendimento a qualquer cidadão em situação de urgência, independentemente do domicílio."
    ],
    "correctAnswer": 4,
    "explanation": "Paciente com dor torácica — situação de urgência — foi orientado a voltar ao seu município. Pela Lei 8.080/1990 e pela Constituição, a saúde é direito de todos, e o princípio da universalidade garante acesso a qualquer cidadão, independentemente do local de residência. Pactuações regionais organizam fluxos de referência, mas não autorizam negar atendimento, ainda mais em urgência. A conduta da unidade foi inadequada.",
    "commentary": "Descentralização permite recusar (A): a descentralização distribui responsabilidades de gestão entre as esferas; não permite restringir o direito ao atendimento.\n\nCartão SUS do município (B): o Cartão SUS não é condição para atendimento, sobretudo em urgência.\n\nIntegralidade permite negar (C): integralidade é oferecer todas as ações necessárias, da prevenção à reabilitação; não justifica recusa.\n\nAtender só residentes (D): a regionalização organiza a rede, mas não restringe o acesso de quem precisa de atendimento.",
    "reference": "Constituição Federal de 1988, art. 196 / Lei nº 8.080/1990 / Política Nacional de Atenção às Urgências",
    "tags": [
      "SUS",
      "princípios do SUS",
      "universalidade",
      "urgência"
    ],
    "tip": "Universalidade: qualquer pessoa, de qualquer lugar, tem direito ao atendimento."
  },
  {
    "id": "unimedpb2026-52",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Em uma cidade de médio porte, a cobertura vacinal infantil para poliomielite caiu progressivamente nos últimos 6 anos, atingindo 78% no último levantamento, valor abaixo da meta preconizada pelo PNI. No mesmo período, houve aumento expressivo da recusa vacinal por parte dos responsáveis, motivada principalmente por desinformação disseminada em redes sociais. Diante desse cenário, a Secretaria Municipal de Saúde iniciou um plano de ação. Entre as medidas adotadas, estão:\n1. Capacitação das equipes de saúde da família para realizar busca ativa de crianças não vacinadas.\n2. Ampliação do horário de funcionamento das salas de vacinação para turno noturno e finais de semana.\n3. Intensificação de campanhas nas redes sociais com conteúdos elaborados por profissionais de saúde, combatendo fake news.\n4. Implantação de vacinação extramuros em creches, escolas e associações comunitárias.\n5. Adoção da estratégia “vacinação oportuna”, oferecendo qualquer imunização em atraso durante atendimentos de rotina, independente do motivo da consulta.\n\nApós três meses, apesar do esforço, a cobertura aumentou apenas para 80%, mantendo a cidade em situação de risco para reintrodução do poliovírus.\n\nConsiderando os princípios do Programa Nacional de Imunizações e estratégias comprovadamente eficazes para elevar a cobertura vacinal, qual ação adicional teria maior impacto real e imediato para reverter o risco epidemiológico?",
    "options": [
      "Adotar vacinação exclusivamente domiciliar para toda a população infantil da cidade.",
      "Criar uma campanha anual única, de grande mídia televisiva, alertando sobre riscos da poliomielite.",
      "Instituir penalidades administrativas para pais ou responsáveis que não levarem as crianças para vacinar.",
      "Oferecer incentivo financeiro direto às famílias que apresentarem o calendário vacinal completo.",
      "Intensificar o uso de microplanejamento local, com mapeamento nominal de faltosos, definição de metas por microárea e monitoramento semanal das coberturas."
    ],
    "correctAnswer": 4,
    "explanation": "O município já ampliou acesso, busca ativa, comunicação e vacinação oportuna, mas a cobertura quase não subiu. O que mais aumenta cobertura de forma rápida e sustentada é o microplanejamento: identificar nominalmente, por microárea, as crianças com vacina atrasada, definir metas locais, organizar busca ativa dirigida e monitorar semanalmente a cobertura, corrigindo o rumo.\n\nO microplanejamento para atividades de vacinação de alta qualidade (MAVQ) é estratégia adotada pelo Ministério da Saúde e pela OPAS.",
    "commentary": "Vacinação só domiciliar (A): inviável para toda a população e desorganiza a rede; casa a casa é complemento para faltosos.\n\nCampanha anual na TV (B): ação pontual, de baixo impacto sobre a hesitação e sem alcançar quem falta.\n\nPenalidades aos pais (C): aumenta resistência e conflito; não é estratégia do PNI.\n\nIncentivo financeiro (D): não faz parte das estratégias do PNI e tem efeito incerto e pouco sustentável.",
    "reference": "Ministério da Saúde/OPAS — Microplanejamento para atividades de vacinação de alta qualidade (2023) / Programa Nacional de Imunizações",
    "tags": [
      "imunização",
      "PNI",
      "cobertura vacinal",
      "microplanejamento",
      "poliomielite"
    ],
    "tip": "Cobertura vacinal baixa: microplanejamento com lista nominal de faltosos por microárea."
  },
  {
    "id": "unimedpb2026-53",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Durante uma visita de supervisão, a gestão municipal identifica que uma Unidade de Saúde da Família localizada em área rural tem apresentado baixa cobertura de pré-natal, elevada taxa de faltas às consultas e aumento de internações por causas sensíveis à atenção primária. A equipe relata que a população depende de transporte público irregular, possui baixa escolaridade, grande dispersão territorial e dificuldade de compreensão das orientações de saúde. Diante desse cenário, considerando os princípios doutrinários e organizativos do SUS, bem como as diretrizes da Atenção Primária à Saúde, qual medida representa a intervenção MAIS apropriada para reorganizar o cuidado e melhorar os indicadores?",
    "options": [
      "Solicitar que o município contrate um médico especialista em obstetrícia para realizar pré-natal de alto risco na própria unidade, reduzindo encaminhamentos.",
      "Implantar um sistema municipal de teleconsulta centralizada, substituindo consultas presenciais sempre que houver dificuldade de deslocamento.",
      "Implementar ações de planejamento territorial, intensificando busca ativa, ampliação da agenda programada, visitas domiciliares e estratégias de educação em saúde adaptadas ao perfil da comunidade.",
      "Transferir os pacientes moradores de áreas mais distantes para outra UBS urbana com melhor infraestrutura e equipe completa, garantindo atendimento mais rápido.",
      "Reestruturar a unidade para modelo tradicional, priorizando atendimento por demanda espontânea e reduzindo visitas domiciliares, para aumentar a produtividade."
    ],
    "correctAnswer": 2,
    "explanation": "A unidade rural tem baixa cobertura de pré-natal, muitas faltas e aumento de internações por condições sensíveis à atenção primária, numa população dispersa, de baixa escolaridade e com transporte precário. A resposta mais coerente com a Estratégia Saúde da Família é reorganizar o cuidado pelo território: planejamento territorial, busca ativa, agenda programada, visitas domiciliares (com os agentes comunitários) e educação em saúde adaptada ao perfil da comunidade.\n\nIsso aplica a equidade, a longitudinalidade e a orientação comunitária da APS.",
    "commentary": "Obstetra de alto risco na unidade (A): o problema é acesso ao pré-natal de risco habitual, que é atribuição da equipe de saúde da família.\n\nTeleconsulta substituindo o presencial (B): a teleconsulta complementa, mas não substitui o pré-natal presencial, e depende de acesso e letramento digital que essa população não tem.\n\nTransferir para UBS urbana (D): piora o acesso, quebra o vínculo e contraria a territorialização.\n\nModelo de demanda espontânea (E): abandona as ações programáticas e as visitas, que são justamente o que falta.",
    "reference": "Política Nacional de Atenção Básica (PNAB 2017) / Starfield — Atenção Primária",
    "tags": [
      "atenção primária",
      "saúde da família",
      "territorialização",
      "pré-natal",
      "equidade"
    ],
    "tip": "Problema de acesso na APS: território, busca ativa, visita domiciliar e educação em saúde."
  },
  {
    "id": "unimedpb2026-54",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Um médico atuante em medicina preventiva personalizada começa a divulgar um “teste salivar genético” de R$ 1.200,00, alegando que ele é capaz de detectar câncer colorretal em pessoas acima de 50 anos e que poderia substituir a colonoscopia recomendada pelas diretrizes. Um paciente de 58 anos, com perda de peso, alteração recente do hábito intestinal e história familiar positiva para câncer colorretal, realiza o teste e recebe um resultado positivo, que posteriormente é confirmado por colonoscopia e biópsia. Considerando os princípios de epidemiologia clínica e desempenho de testes diagnósticos, assinale a alternativa CORRETA:",
    "options": [
      "O resultado positivo nesse paciente demonstra que o teste tem alta especificidade, já que acertou um caso verdadeiro, o que valida sua incorporação nas diretrizes de rastreamento.",
      "A probabilidade pré-teste elevada aumenta o valor preditivo positivo (VPP), de modo que um resultado positivo tende a ser verdadeiro.",
      "Se um teste apresenta acurácia elevada (>95%), isso garante que poderá substituir exames padrão-ouro independentemente da prevalência da doença na população.",
      "O valor preditivo positivo (VPP) do teste aumenta quando aplicado em populações de baixo risco, tornando-o ideal para substituir métodos invasivos em screening populacional.",
      "Mesmo que o teste tenha alta sensibilidade e especificidade, seu valor preditivo negativo (VPN) será elevado nesse paciente devido à alta probabilidade pré-teste."
    ],
    "correctAnswer": 1,
    "explanation": "O valor preditivo positivo depende da probabilidade pré-teste (prevalência). O paciente tinha probabilidade pré-teste alta: perda de peso, mudança do hábito intestinal, idade acima de 50 anos e história familiar. Nessas condições, um resultado positivo tem grande chance de ser verdadeiro — o VPP aumenta.\n\nUm acerto isolado num paciente de alto risco não diz nada sobre a sensibilidade ou especificidade do teste, nem autoriza que ele substitua a colonoscopia no rastreamento.",
    "commentary": "Alta especificidade validada por um caso (A): especificidade se mede em pessoas sem a doença (verdadeiros negativos); um caso positivo não valida o teste.\n\nAcurácia > 95% garante substituir o padrão-ouro (C): o desempenho prático varia com a prevalência; acurácia alta não basta para substituir exames.\n\nVPP aumenta em baixo risco (D): é o contrário — em baixa prevalência o VPP cai e os falsos-positivos aumentam.\n\nVPN alto por alta probabilidade pré-teste (E): é o contrário — com probabilidade pré-teste alta o VPN cai.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia clínica",
      "testes diagnósticos",
      "valor preditivo",
      "probabilidade pré-teste"
    ],
    "tip": "Prevalência sobe: VPP sobe e VPN cai. Sensibilidade e especificidade não mudam."
  },
  {
    "id": "unimedpb2026-55",
    "topography": "15",
    "topic": "Bioética",
    "module": "Saúde Coletiva",
    "text": "Um hospital público deseja implementar um novo dispositivo digital de monitorização contínua do sono, que utiliza inteligência artificial para detectar distúrbios respiratórios e gerar alertas automáticos para a equipe assistencial. O fabricante afirma que o dispositivo melhora o diagnóstico precoce, mas os dados publicados são limitados a um estudo piloto internacional. A equipe de inovação do hospital propõe iniciar um estudo clínico com pacientes internados, para validar o desempenho do dispositivo e fornecer evidências para futura incorporação pelo SUS. A coleta envolveria dados fisiológicos contínuos, reconhecimento de voz durante episódios noturnos e pareamento com o prontuário eletrônico.\n\nConsiderando o contexto acima, assinale a alternativa CORRETA:",
    "options": [
      "Como envolve coleta de dados sensíveis, uso de IA e risco de reidentificação, o estudo deve ser submetido ao Sistema CEP/CONEP, e somente após parecer consubstanciado da CONEP poderá ser iniciado.",
      "O estudo pode ser iniciado diretamente após aprovação do Comitê de Ética em Pesquisa (CEP) local, pois apenas dispositivos terapêuticos farmacológicos necessitam de avaliação da CONEP.",
      "A avaliação ética é opcional, já que o dispositivo não é invasivo e não altera a conduta clínica padrão. O foco principal deve ser a análise econômica pela CONITEC (Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde).",
      "O estudo pode ser aprovado apenas pelo CEP, mas a incorporação pelo SUS dependerá de um ensaio clínico fase III com supervisão direta da ANVISA, mesmo para tecnologias não farmacológicas.",
      "A incorporação da tecnologia depende exclusivamente do protocolo de avaliação econômica e impacto orçamentário, não exigindo estudos clínicos conduzidos em território nacional."
    ],
    "correctAnswer": 1,
    "explanation": "O estudo envolve seres humanos, coleta de dados sensíveis (fisiológicos contínuos, voz), inteligência artificial e pareamento com prontuário, com risco de reidentificação, além de um dispositivo novo sem dados nacionais. Toda pesquisa com seres humanos precisa passar pelo sistema CEP/CONEP (Resolução CNS 466/2012).\n\nNa lógica da banca, as características do estudo — novo equipamento/dispositivo, dados genéticos-biométricos sensíveis e tecnologia sem registro — o colocam entre as áreas temáticas especiais que exigem apreciação também da CONEP após o CEP local, e o estudo só pode começar depois do parecer final.",
    "commentary": "Só o CEP, porque só fármacos vão à CONEP (B): pesquisas com novos equipamentos e dispositivos para a saúde também estão entre as áreas que exigem análise da CONEP.\n\nAvaliação ética opcional (C): toda pesquisa com seres humanos precisa de aprovação ética; a CONITEC avalia incorporação, não ética.\n\nFase III com supervisão direta da ANVISA (D): não existe exigência de fase III com supervisão da ANVISA para todas as tecnologias não farmacológicas.\n\nSó avaliação econômica (E): a CONITEC exige evidências de eficácia, segurança e efetividade, além do impacto orçamentário.\n\nObservação: a Resolução CNS 674/2022 reduziu as áreas que vão obrigatoriamente à CONEP; dispositivos ainda sem registro, porém, continuam entre elas.",
    "reference": "Resolução CNS nº 466/2012 / Resolução CNS nº 674/2022 / Lei Geral de Proteção de Dados (Lei nº 13.709/2018)",
    "tags": [
      "bioética",
      "ética em pesquisa",
      "CEP/CONEP",
      "dispositivos médicos",
      "inteligência artificial"
    ],
    "tip": "Pesquisa com dispositivo novo e dados sensíveis: CEP + CONEP antes de começar."
  },
  {
    "id": "unimedpb2026-56",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Um jovem de 21 anos procura atendimento após sofrer agressão física em um evento festivo. Relata que foi insultado e golpeado após trocar carícias com seu namorado em público. Apresenta ferimento leve na face e solicita avaliação médica. Considerando a natureza da agressão, qual a conduta correta?",
    "options": [
      "Não realizar notificação, por se tratar de violência comunitária em adulto.",
      "Notificar compulsoriamente destacando a orientação sexual como dado epidemiológico.",
      "Orientar a procurar delegacia e notificar apenas se houver consentimento formal.",
      "Notificar apenas se houver laudo de corpo de delito confirmando agressão.",
      "Realizar notificação compulsória por violência interpessoal, registrando motivação LGBTfóbica."
    ],
    "correctAnswer": 4,
    "explanation": "Violência interpessoal com motivação homofóbica. A ficha de notificação de violência interpessoal/autoprovocada (SINAN) é compulsória para violência contra a população LGBT, mesmo em adultos — essa é uma exceção à regra de que violência comunitária contra adulto do sexo masculino não é notificada. A ficha tem campos para orientação sexual, identidade de gênero e motivação (homofobia/lesbofobia/bifobia/transfobia).\n\nA notificação é atribuição do profissional de saúde, não depende de consentimento nem de boletim de ocorrência, e não substitui a denúncia policial, que é decisão da vítima.",
    "commentary": "Não notificar (A): violência contra pessoas LGBT é notificação compulsória, mesmo em adultos.\n\nB: a notificação é obrigatória, mas registrar apenas a orientação sexual como dado epidemiológico não traduz o essencial — a motivação LGBTfóbica.\n\nNotificar só com consentimento (C): a notificação é obrigatória e não depende de autorização (o paciente é informado).\n\nExigir corpo de delito (D): a notificação é feita pela suspeita ou confirmação no atendimento, sem necessidade de laudo.",
    "reference": "Ministério da Saúde — Viva: Instrutivo de notificação de violência interpessoal e autoprovocada (2016) / Portaria GM/MS nº 217/2023 (lista de notificação compulsória)",
    "tags": [
      "vigilância epidemiológica",
      "notificação compulsória",
      "violência",
      "população LGBT"
    ],
    "tip": "Violência contra LGBT: notifica sempre, mesmo em adulto, registrando a motivação."
  },
  {
    "id": "unimedpb2026-57",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "Durante atendimento de uma criança asmática com crise moderada, o médico nota forte odor de cigarro no pai. Após confirmar que o adulto é fumante ativo, decide iniciar abordagem motivacional. Qual a próxima pergunta mais adequada?",
    "options": [
      "“Você já considerou parar de fumar em algum momento?”",
      "“Quantos cigarros você fuma diariamente?”",
      "“Você tem consciência dos riscos do tabaco para sua saúde?”",
      "“Sabia que isso piora a asma do seu filho?”",
      "“Você percebe como o cigarro faz mal para sua família?”"
    ],
    "correctAnswer": 0,
    "explanation": "Na abordagem motivacional (entrevista motivacional), começa-se com perguntas abertas, sem julgamento, que explorem a ambivalência e a motivação do próprio paciente para mudar e permitam identificar o estágio de mudança (Prochaska e DiClemente). \"Você já considerou parar de fumar em algum momento?\" convida o pai a falar de sua própria disposição, sem confronto.",
    "commentary": "Quantos cigarros fuma (B): é pergunta de avaliação da carga tabágica e dependência, útil, mas fechada e não explora motivação.\n\nConsciência dos riscos (C): soa como teste e reprovação, gerando resistência.\n\n\"Isso piora a asma do seu filho\" (D): é confrontativa e culpabilizadora; a informação deve ser dada depois, com permissão e sem julgamento.\n\n\"Como o cigarro faz mal para a família\" (E): também é acusatória e pouco eficaz para iniciar a mudança.",
    "reference": "INCA/Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo (2020) / Miller & Rollnick — Entrevista Motivacional",
    "tags": [
      "tabagismo",
      "entrevista motivacional",
      "estágios de mudança",
      "atenção primária"
    ],
    "tip": "Entrevista motivacional: pergunta aberta, sem julgamento, sobre a vontade de mudar."
  },
  {
    "id": "unimedpb2026-58",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma Unidade Básica de Saúde identificou, ao longo de duas semanas, aumento repentino de casos de gastroenterite aguda entre os moradores de um bairro abastecido por um único poço artesiano. Foram notificados 42 casos, dos quais 28 ocorreram em pessoas que consomem exclusivamente água desse poço, enquanto 14 ocorreram entre pessoas que utilizam apenas água encanada da rede pública.\nUm levantamento rápido mostrou:\n• População total do bairro: 4.000 pessoas\n• Usuários do poço: 800 pessoas\n• Usuários exclusivos da água da rede pública: 3.200 pessoas\n\nCom base nesses dados, a medida epidemiológica que MELHOR auxilia na identificação da possível fonte comum da doença é:",
    "options": [
      "Calcular a prevalência de gastroenterite no bairro para avaliar a carga total da doença.",
      "Calcular e comparar a incidência da gastroenterite entre os usuários do poço e entre os usuários da rede pública.",
      "Aplicar teste de hipótese para determinar se a diferença entre os grupos é estatisticamente significativa, antes de qualquer ação sanitária.",
      "Comparar a letalidade entre usuários do poço e da rede pública, para determinar o grupo de maior risco.",
      "Avaliar o R0 da gastroenterite na população para inferir o potencial de transmissão comunitária."
    ],
    "correctAnswer": 1,
    "explanation": "Para identificar a fonte comum de um surto, compara-se o risco (incidência ou taxa de ataque) entre expostos e não expostos à fonte suspeita:\n\n• Usuários do poço: 28/800 = 3,5%\n• Usuários da rede pública: 14/3.200 ≈ 0,44%\n\nO risco relativo é cerca de 8: quem bebe água do poço adoece oito vezes mais, apontando o poço como provável fonte. Em números absolutos o poço tem só o dobro de casos, mas como seus usuários são muito menos numerosos, só a incidência mostra a diferença.",
    "commentary": "Prevalência no bairro (A): mede a carga total, mas não compara grupos expostos e não expostos.\n\nTeste de hipótese antes de agir (C): a investigação de surto exige ação sanitária imediata; a significância estatística não deve atrasar medidas de controle.\n\nLetalidade (D): mede gravidade entre os doentes, não o risco de adoecer.\n\nR0 (E): mede transmissão pessoa a pessoa; não identifica fonte comum de exposição.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (investigação de surtos) / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "investigação de surto",
      "incidência",
      "taxa de ataque",
      "risco relativo"
    ],
    "tip": "Fonte comum de surto: compare a taxa de ataque entre expostos e não expostos."
  },
  {
    "id": "unimedpb2026-59",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Saúde Coletiva",
    "text": "Em 2018, um grande laboratório particular observou aumento expressivo de testes positivos para hepatite A entre jovens adultos residentes de regiões centrais de uma capital brasileira. A investigação epidemiológica mostrou predomínio de casos em homens com histórico de práticas sexuais específicas, sem relação com abastecimento de água ou alimentos contaminados. Qual a via de transmissão predominante no surto?",
    "options": [
      "Exposição parenteral, habitualmente ligada ao compartilhamento de seringas.",
      "Fecal-oral, associada principalmente ao consumo de alimentos crus.",
      "Exposição sexual com práticas oro-retais e contato fecal direto.",
      "Transmissão vetorial por insetos domiciliares.",
      "Contaminação hídrica ambiental, relacionada ao sistema de abastecimento."
    ],
    "correctAnswer": 2,
    "explanation": "Surto de hepatite A em homens jovens de áreas centrais, com práticas sexuais específicas e sem relação com água ou alimentos. A hepatite A é de transmissão fecal-oral, mas, nesses surtos (como os registrados em São Paulo e em vários países por volta de 2017–2018 entre homens que fazem sexo com homens), a via predominante é sexual, por práticas oro-anais e contato fecal-oral direto.\n\nPor isso a vacina de hepatite A é indicada para pessoas com exposição sexual de risco (e é oferecida para usuários de PrEP no SUS).",
    "commentary": "Parenteral (A): a hepatite A raramente é transmitida pelo sangue; essa via é típica das hepatites B e C.\n\nFecal-oral por alimentos crus (B): o enunciado exclui alimentos contaminados.\n\nVetorial (D): hepatite A não é transmitida por insetos.\n\nHídrica (E): o enunciado exclui relação com o abastecimento de água.",
    "reference": "Ministério da Saúde — Boletim Epidemiológico de Hepatites Virais / PCDT de IST (2022)",
    "tags": [
      "hepatite A",
      "infecções sexualmente transmissíveis",
      "surto",
      "vigilância epidemiológica"
    ],
    "tip": "Hepatite A em HSH sem fonte alimentar ou hídrica: transmissão sexual oro-anal."
  },
  {
    "id": "unimedpb2026-60",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Saúde Coletiva",
    "text": "Um homem de 29 anos, vendedor, procura a unidade básica por apresentar lesões eritematosas difusas há cerca de 10 dias, envolvendo palmas, plantas e tronco, além de adenopatia cervical indolor. Ele informa que a esposa está grávida de 12 semanas e que, dois meses antes, teve um encontro eventual em que houve sexo oral desprotegido. A avaliação clínica sugere estágio avançado da infeção. Considerando o quadro e o risco familiar, assinale a alternativa correta.",
    "options": [
      "Achados compatíveis com infecção latente, sem repercussão para gestantes.",
      "Lesões compatíveis com fase primária, com transmissão já reduzida para a gestante.",
      "Achados compatíveis com sífilis secundária, período de alta transmissibilidade para parceira e feto.",
      "Indícios de sífilis terciária, ainda com alto risco de transmissão.",
      "Manifestações típicas da fase secundária, com baixo risco de transmissão vertical."
    ],
    "correctAnswer": 2,
    "explanation": "Lesões eritematosas difusas acometendo palmas e plantas, com adenopatia indolor, cerca de 2 meses após exposição sexual desprotegida: sífilis secundária. É a fase de maior transmissibilidade, pelas lesões cutaneomucosas ricas em treponemas e pela espiroquetemia.\n\nA esposa grávida de 12 semanas tem alto risco de infecção e, se infectada, de sífilis congênita (transmissão vertical de 70–100% nas fases recentes). Deve-se testar e tratar o paciente, a gestante e as parcerias (penicilina benzatina).",
    "commentary": "Infecção latente sem risco à gestante (A): há lesões ativas, então não é latente; e mesmo a latente recente transmite verticalmente.\n\nFase primária (B): a primária é o cancro duro, úlcera única e indolor no local de inoculação, sem exantema.\n\nSífilis terciária (D): surge anos depois, com gomas, aortite e neurossífilis, e transmite pouco.\n\nBaixo risco vertical na secundária (E): é o oposto; a fase secundária tem a maior taxa de transmissão vertical.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "sífilis",
      "sífilis secundária",
      "sífilis congênita",
      "gestação",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Exantema em palmas e plantas + adenopatia: sífilis secundária, a fase mais transmissível."
  }
];
