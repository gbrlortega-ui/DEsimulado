import { Question } from '../types';

// HPP 2026 (PR) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const HPP_2026_QUESTIONS: Question[] = [
  {
    "id": "hpp2026-1",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Homem, 59 anos, tabagista, hipertenso, apresenta dor torácica súbita há 90 minutos. O ECG mostra supradesnivelamento do segmento ST em parede anterior. Ele está em um hospital do interior, e o centro de referência mais próximo para angioplastia fica a 2 horas de distância de ambulância. Qual a conduta imediata mais adequada?",
    "options": [
      "Transferir o paciente para o centro de referência após administrar AAS e Clopidogrel.",
      "Administrar AAS, Clopidogrel, Enoxaparina e realizar trombólise imediata.",
      "Realizar trombólise imediata, evitando outras terapias antitrombóticas pelo risco de sangramento.",
      "Seriar troponina para definir necessidade de transporte para o centro de referência."
    ],
    "correctAnswer": 1,
    "explanation": "IAM com supra de ST anterior, 90 minutos de dor, num hospital sem hemodinâmica e a 2 horas do centro de referência só de transporte. Somando o tempo de chegada, preparo e abertura da artéria, o tempo porta-balão previsto passa com folga dos 120 minutos aceitos para angioplastia primária.\n\nNesse cenário a escolha é a estratégia fármaco-invasiva: fibrinólise no próprio hospital (meta porta-agulha ≤ 30 minutos), sempre acompanhada de dupla antiagregação (AAS + clopidogrel) e anticoagulação (enoxaparina), e depois transferência para cateterismo em 2–24 horas (ou resgate, se a trombólise falhar).",
    "commentary": "Transferir só com AAS e clopidogrel (A): o atraso previsto passa de 120 minutos; transferir sem trombolisar adia a reperfusão e aumenta a área de necrose.\n\nTrombólise sem outros antitrombóticos (C): o fibrinolítico isolado tem mais reoclusão; AAS, clopidogrel e anticoagulante reduzem mortalidade e reinfarto, com aumento aceitável de sangramento.\n\nSeriar troponina (D): no IAM com supra o diagnóstico é clínico-eletrocardiográfico; esperar marcador só atrasa a reperfusão.",
    "reference": "Diretriz da SBC sobre IAM com supradesnivelamento do segmento ST / ESC 2023 — Síndromes coronarianas agudas",
    "tags": [
      "infarto agudo do miocárdio",
      "IAMCSST",
      "trombólise",
      "estratégia fármaco-invasiva"
    ],
    "tip": "Angioplastia em > 120 min? Trombolisa na origem com AAS + clopidogrel + enoxaparina."
  },
  {
    "id": "hpp2026-2",
    "topography": "2.2",
    "topic": "Dislipidemia",
    "module": "Clínica Médica",
    "text": "Homem, 52 anos, obeso (IMC 33), hipertenso, com diagnóstico de síndrome metabólica. Exames laboratoriais mostram LDL de 172 mg/dL, HDL 36 mg/dL e triglicerídeos 260 mg/dL. A pressão arterial medida no consultório foi de 160/95 mmHg em duas ocasiões diferentes. Qual a conduta em relação ao tratamento da dislipidemia?",
    "options": [
      "Iniciar fibrato isolado como primeira escolha.",
      "Iniciar sinvastatina 20 mg/dia (estatina de média potência).",
      "Iniciar estatina de alta potência (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg).",
      "Indicar apenas dieta hipolipídica e retorno em 6 meses."
    ],
    "correctAnswer": 2,
    "explanation": "Homem com síndrome metabólica, obesidade, HDL baixo, triglicerídeos altos e hipertensão estágio 2: a estratificação o coloca em alto risco cardiovascular, cuja meta de LDL é < 70 mg/dL.\n\nPartindo de LDL 172 mg/dL, é preciso reduzir cerca de 60%. Só estatina de alta potência (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg) entrega redução ≥ 50%, por isso é a escolha, junto com mudança de estilo de vida.",
    "commentary": "Fibrato isolado (A): reservado para hipertrigliceridemia grave (> 500 mg/dL, risco de pancreatite); com TG 260 mg/dL a prioridade é o LDL, e o fibrato não tem o mesmo benefício em eventos.\n\nSinvastatina 20 mg (B): estatina de potência moderada, reduz o LDL em 30–49%; insuficiente para a meta.\n\nSó dieta por 6 meses (D): em alto risco com LDL muito acima da meta, o remédio começa junto com as medidas de estilo de vida, sem esperar.",
    "reference": "Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose — SBC 2017/2025",
    "tags": [
      "dislipidemia",
      "estatinas",
      "risco cardiovascular",
      "síndrome metabólica"
    ],
    "tip": "Alto risco: LDL < 70. Precisa cair ≥ 50%? Estatina de alta potência."
  },
  {
    "id": "hpp2026-3",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Homem, 52 anos, obeso (IMC 33), hipertenso, com diagnóstico de síndrome metabólica. Exames laboratoriais mostram LDL de 172 mg/dL, HDL 36 mg/dL e triglicerídeos 260 mg/dL. A pressão arterial medida no consultório foi de 160/95 mmHg em duas ocasiões diferentes. Paciente retorna após 4 semanas, mantendo níveis pressóricos de 158/92 mmHg, confirmando o diagnóstico de hipertensão arterial. Qual deve ser a conduta medicamentosa inicial mais adequada?",
    "options": [
      "Iniciar terapia combinada: Enalapril 10 mg a cada 12 horas, associado a Anlodipino 5 mg/dia.",
      "Iniciar monoterapia com diurético tiazídico (hidroclorotiazida 25 mg/dia).",
      "Indicar apenas medidas não farmacológicas, com retorno em 3 meses.",
      "Iniciar Losartana 50mg a cada 12 horas."
    ],
    "correctAnswer": 0,
    "explanation": "PA de 160/95 e 158/92 mmHg confirma hipertensão; a sistólica ≥ 160 mmHg a classifica como estágio 2. Com síndrome metabólica, obesidade e dislipidemia, o risco cardiovascular é alto.\n\nA Diretriz Brasileira de Hipertensão recomenda iniciar com combinação de dois fármacos no estágio 2 (e no estágio 1 de alto risco). As combinações preferenciais são IECA ou BRA + bloqueador de canal de cálcio ou tiazídico. Enalapril 10 mg 12/12 h + anlodipino 5 mg/dia cumpre esse papel.",
    "commentary": "Tiazídico em monoterapia (B): monoterapia fica para estágio 1 de risco baixo/moderado ou idosos frágeis; no estágio 2 raramente atinge a meta.\n\nSó medidas não farmacológicas (C): devem ser indicadas a todos, mas no estágio 2 de alto risco o remédio começa de imediato.\n\nLosartana isolada (D): BRA é boa escolha, porém em monoterapia; além disso, a losartana costuma ser usada em doses de 50–100 mg/dia, divididas ou não. O erro principal é não combinar.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial — SBC 2020/2025",
    "tags": [
      "hipertensão arterial",
      "terapia combinada",
      "risco cardiovascular"
    ],
    "tip": "Estágio 2 ou alto risco: comece com dois fármacos (IECA/BRA + BCC ou tiazídico)."
  },
  {
    "id": "hpp2026-4",
    "topography": "2.2",
    "topic": "Arritmias",
    "module": "Clínica Médica",
    "text": "Paciente de 28 anos, previamente saudável, chega ao pronto atendimento com palpitações súbitas e desconforto torácico leve. Está estável hemodinamicamente, PA 125/80 mmHg, SatO₂ 97%. O eletrocardiograma foi realizado, qual a conduta inicial mais adequada?",
    "options": [
      "Realizar manobra vagal para tentativa de reversão do ritmo.",
      "Administrar Amiodarona 150mg intravenosa em bolus.",
      "Administrar Adenosina 6mg em dose plena imediatamente.",
      "Indicar cardioversão elétrica sincronizada de emergência."
    ],
    "correctAnswer": 0,
    "explanation": "O traçado mostra taquicardia regular de QRS estreito, com frequência alta e sem onda P visível antes do QRS: taquicardia supraventricular paroxística (provável reentrada nodal) num jovem sem cardiopatia.\n\nO paciente está estável (PA 125/80 mmHg, sem hipotensão, alteração de consciência, dor isquêmica importante ou congestão). O primeiro passo é a manobra vagal (Valsalva modificada é a mais eficaz; massagem do seio carotídeo em jovens sem sopro). Se não reverter, adenosina 6 mg em bolus rápido seguida de flush, e 12 mg se necessário.",
    "commentary": "Amiodarona (B): não é a primeira opção para TSV de QRS estreito; fica para casos específicos, como taquicardias de QRS largo ou falha das outras medidas.\n\nAdenosina antes da manobra vagal (C): a adenosina é o fármaco de escolha, mas vem depois da manobra vagal, que é simples e frequentemente resolve.\n\nCardioversão de emergência (D): indicada apenas se houver instabilidade hemodinâmica, ausente aqui.",
    "reference": "AHA/ACLS 2020 — Taquicardia com pulso / Diretriz brasileira de arritmias (SBC)",
    "tags": [
      "taquicardia supraventricular",
      "manobra vagal",
      "adenosina",
      "eletrocardiograma"
    ],
    "tip": "TSV estável: vagal → adenosina 6 mg → 12 mg. Instável: cardioversão sincronizada.",
    "image": "/images/hpp2026-4.webp"
  },
  {
    "id": "hpp2026-5",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos, portador de DPOC grave, procura o pronto atendimento por dispneia intensa, tosse produtiva e sibilância. Saturação periférica de oxigênio é 84% em ar ambiente. Está consciente, em uso de musculatura acessória, mas hemodinamicamente estável. Qual é o dispositivo mais adequado para ofertar oxigênio nesse momento?",
    "options": [
      "Cateter nasal convencional de baixo fluxo.",
      "Cateter nasal em alto fluxo.",
      "Máscara de não reinalação com reservatório.",
      "Máscara de Venturi."
    ],
    "correctAnswer": 3,
    "explanation": "Exacerbação de DPOC grave com hipoxemia (SpO₂ 84%). Esses pacientes podem ter retenção crônica de CO₂, e oxigênio em excesso piora a hipercapnia (alteração da relação ventilação/perfusão e efeito Haldane). O alvo é SpO₂ de 88–92%.\n\nA máscara de Venturi oferece fração inspirada de O₂ fixa e precisa (24%, 28%, 31%…), o que permite titular o oxigênio com segurança. É o dispositivo preferido na exacerbação de DPOC.",
    "commentary": "Cateter nasal de baixo fluxo (A): a FiO₂ varia com a frequência e o padrão respiratório do paciente — num doente taquipneico e com musculatura acessória, a oferta é imprevisível.\n\nCateter nasal de alto fluxo (B): é opção em insuficiência respiratória, mas não é o dispositivo inicial padrão para a exacerbação de DPOC; havendo acidose respiratória, a ventilação de escolha é a VNI.\n\nMáscara não reinalante (C): fornece FiO₂ alta e não controlada, com risco de hiperóxia e hipercapnia.",
    "reference": "GOLD 2025 — Manejo da exacerbação / BTS Guideline for oxygen use in adults",
    "tags": [
      "DPOC",
      "oxigenoterapia",
      "máscara de Venturi",
      "hipercapnia"
    ],
    "tip": "DPOC exacerbado: Venturi, alvo SpO₂ 88–92%."
  },
  {
    "id": "hpp2026-6",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Homem de 72 anos, hipertenso e obeso (IMC 33), encontra-se internado por pneumonia comunitária, em uso de antibióticos endovenosos. Está restrito ao leito, mas sem contraindicações à anticoagulação. Qual é a medida farmacológica mais adequada para profilaxia de tromboembolismo venoso neste paciente?",
    "options": [
      "Rivaroxabana 15mg via oral ao dia.",
      "Enoxaparina 1 mg/kg subcutânea a cada 12 horas.",
      "Enoxaparina 40 mg subcutânea uma vez ao dia.",
      "Ácido acetilsalicílico 100 mg via oral ao dia."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente clínico internado, idoso, obeso, com infecção aguda e restrito ao leito: risco alto de TEV (Padua ≥ 4) e sem contraindicação. Está indicada profilaxia farmacológica.\n\nA dose profilática padrão é enoxaparina 40 mg SC uma vez ao dia (alternativas: heparina não fracionada 5.000 UI SC 8/8 ou 12/12 h, ou fondaparinux 2,5 mg/dia).",
    "commentary": "Rivaroxabana 15 mg/dia (A): não é esquema profilático para paciente clínico internado (o estudo MAGELLAN usou 10 mg e mostrou mais sangramento); 15 mg é dose de tratamento ajustada.\n\nEnoxaparina 1 mg/kg 12/12 h (B): é dose terapêutica, usada para tratar TVP/TEP, não para prevenir.\n\nAAS (D): não é recomendado para profilaxia de TEV em paciente clínico.",
    "reference": "ACCP/CHEST — Prevenção de TEV em pacientes clínicos / ASH 2018",
    "tags": [
      "tromboembolismo venoso",
      "profilaxia",
      "enoxaparina",
      "escore de Padua"
    ],
    "tip": "Profilaxia de TEV: enoxaparina 40 mg 1x/dia. 1 mg/kg 12/12 h é tratamento."
  },
  {
    "id": "hpp2026-7",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos, etilista crônico, é admitido com dor abdominal em faixa irradiando para dorso, associada a náuseas. Amilase e lipase estão três vezes acima do limite superior da normalidade. O diagnóstico de pancreatite aguda é confirmado. Qual é a conduta inicial mais adequada segundo as evidências atuais?",
    "options": [
      "Analgesia e antibioticoterapia guiada para foco abdominal.",
      "Iniciar hidratação vigorosa precoce com solução cristaloide (Ringer Lactato), analgesia e iniciar dieta de forma precoce.",
      "Manter jejum absoluto por pelo menos 7 dias para repouso pancreático associado com analgesia e hidratação.",
      "Solicitar imediatamente colangiopancreatografia retrógrada endoscópica (CPRE)."
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatite aguda (dor em faixa e enzimas ≥ 3x o limite) de provável origem alcoólica. Os pilares do tratamento inicial são hidratação com cristaloide (Ringer lactato preferido ao soro fisiológico), analgesia adequada (inclusive opioides) e realimentação oral precoce, assim que houver tolerância, em geral nas primeiras 24–48 horas.\n\nA alimentação precoce preserva a barreira intestinal e reduz complicações infecciosas.",
    "commentary": "Antibiótico (A): não há indicação de antibiótico profilático; reserva-se para necrose infectada ou infecção extrapancreática documentada.\n\nJejum por 7 dias (C): o \"repouso pancreático\" prolongado não traz benefício e aumenta complicações; a dieta deve voltar cedo.\n\nCPRE imediata (D): indicada na pancreatite biliar com colangite ou obstrução persistente da via biliar, não num etilista sem sinais de obstrução.\n\nObservação: desde o estudo WATERFALL (2022), a hidratação \"agressiva\" deu lugar à hidratação moderada (bolus de 10 mL/kg se hipovolêmico e 1,5 mL/kg/h, com reavaliação), porque o excesso de volume aumentou a sobrecarga hídrica sem melhorar desfechos. A alternativa B continua a mais adequada entre as oferecidas, mas o termo \"vigorosa\" está desatualizado.",
    "reference": "ACG 2024 — Manejo da pancreatite aguda / IAP/APA / estudo WATERFALL (NEJM 2022)",
    "tags": [
      "pancreatite aguda",
      "ringer lactato",
      "dieta precoce"
    ],
    "tip": "Pancreatite: Ringer, analgesia e comer cedo. Sem antibiótico profilático."
  },
  {
    "id": "hpp2026-8",
    "topography": "8",
    "topic": "Distúrbios do cálcio",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos, em investigação de quadro pulmonar, apresenta fraqueza, poliúria e constipação. Exames laboratoriais mostram:\n• Cálcio sérico: 12,5 mg/dL (VR: 8,5–10,5)\n• PTH: 9 pg/mL (VR: 15–65)\n• 25(OH) vitamina D: 35 ng/mL (VR: 30–100)\n• 1,25(OH)₂ vitamina D: 95 pg/mL (VR: 20–60)\n\nQual o mecanismo mais provável para a hipercalcemia nesse paciente?",
    "options": [
      "Produção extrarrenal aumentada de 1,25(OH)₂ vitamina D pelos macrófagos ativados nas lesões granulomatosas.",
      "Aumento da absorção intestinal de cálcio por intoxicação por Vitamina D.",
      "Hipersecreção de PTH secundária à doença granulomatosa.",
      "Produção aumentada de PTHrP (peptídeo relacionado ao PTH) pelas células inflamatórias."
    ],
    "correctAnswer": 0,
    "explanation": "Hipercalcemia com PTH suprimido afasta hiperparatireoidismo (é PTH-independente). A 25(OH)D é normal, mas a 1,25(OH)₂D (calcitriol) está alta, num paciente em investigação de doença pulmonar.\n\nEsse padrão é típico das doenças granulomatosas (sarcoidose, tuberculose, histoplasmose): macrófagos ativados no granuloma expressam 1-alfa-hidroxilase e convertem 25(OH)D em calcitriol sem o controle do PTH, aumentando a absorção intestinal de cálcio.",
    "commentary": "Intoxicação por vitamina D (B): cursaria com 25(OH)D muito elevada (geralmente > 150 ng/mL); aqui ela é normal.\n\nHipersecreção de PTH (C): o PTH está suprimido, como esperado em resposta à hipercalcemia.\n\nPTHrP (D): é o mecanismo da hipercalcemia humoral da malignidade (ex.: carcinoma epidermoide de pulmão); nela o calcitriol costuma estar baixo ou normal, não alto.",
    "reference": "Harrison — Distúrbios do metabolismo do cálcio / Endocrine Society",
    "tags": [
      "hipercalcemia",
      "sarcoidose",
      "calcitriol",
      "doenças granulomatosas"
    ],
    "tip": "Hipercalcemia + PTH baixo + 1,25(OH)₂D alta = granuloma (sarcoidose, TB)."
  },
  {
    "id": "hpp2026-9",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Clínica Médica",
    "text": "De acordo com os novos critérios diagnósticos de obesidade propostos pela Lancet Diabetes & Endocrinology Commission (2025), qual dos pacientes abaixo deve ser considerado como portador de obesidade clínica?",
    "options": [
      "Homem de 52 anos, IMC 34 kg/m², assintomático, sem alterações funcionais ou laboratoriais relevantes.",
      "Mulher de 46 anos, IMC 29 kg/m², circunferência abdominal 110 cm, com dor articular crônica limitando atividades de vida diária.",
      "Atleta de 28 anos, IMC 32 kg/m², hipertenso controlado, com elevada massa muscular.",
      "Mulher de 39 anos, IMC 31 kg/m², circunferência abdominal 95 cm, sem sintomas, exames laboratoriais e função orgânica preservados."
    ],
    "correctAnswer": 1,
    "explanation": "A Comissão da Lancet Diabetes & Endocrinology (2025) separa a obesidade pré-clínica (excesso de adiposidade sem disfunção de órgãos) da obesidade clínica (excesso de adiposidade que já causa disfunção orgânica ou limitação das atividades de vida diária). O excesso de gordura deve ser confirmado por mais que o IMC: circunferência abdominal, relação cintura-quadril ou medida direta.\n\nA mulher com IMC 29, mas circunferência abdominal de 110 cm (adiposidade central confirmada) e dor articular crônica que limita atividades diárias, preenche os critérios de obesidade clínica, mesmo com IMC abaixo de 30.",
    "commentary": "IMC 34 sem alterações (A): sem disfunção de órgão nem limitação funcional, seria no máximo obesidade pré-clínica.\n\nAtleta com IMC 32 (C): o IMC alto reflete massa muscular; sem excesso de adiposidade confirmado não há obesidade, e a hipertensão controlada não basta para o diagnóstico.\n\nIMC 31 assintomática (D): circunferência de 95 cm, exames e função preservados — obesidade pré-clínica, não clínica.",
    "reference": "Rubino F et al. Definition and diagnostic criteria of clinical obesity — Lancet Diabetes Endocrinol 2025",
    "tags": [
      "obesidade",
      "obesidade clínica",
      "comissão Lancet"
    ],
    "tip": "Obesidade clínica = excesso de gordura confirmado + disfunção de órgão ou limitação funcional."
  },
  {
    "id": "hpp2026-10",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Clínica Médica",
    "text": "Homem de 44 anos, IMC 36 kg/m², apresenta esteatose hepática e dor crônica nos joelhos que limita suas atividades. Já tentou medidas de estilo de vida por 6 meses sem perda ponderal significativa. Segundo recomendações atuais, qual é a melhor conduta farmacológica inicial para tratamento da obesidade neste paciente?",
    "options": [
      "Prescrever sibutramina como primeira escolha, por ser segura em pacientes com comorbidades.",
      "Iniciar agonista do receptor de GLP-1 (ex.: semaglutida), associado a mudanças de estilo de vida.",
      "Utilizar metformina isoladamente, mesmo sem diabetes, como principal estratégia de perda de peso.",
      "Indicar antidepressivos tricíclicos em baixas doses para reduzir o apetite e facilitar adesão à dieta."
    ],
    "correctAnswer": 1,
    "explanation": "IMC 36 com comorbidades (esteatose hepática e osteoartrose de joelhos) e falha de 6 meses de mudança de estilo de vida: há indicação de tratamento farmacológico (IMC ≥ 30, ou ≥ 27 com comorbidade).\n\nOs agonistas do receptor de GLP-1 (semaglutida 2,4 mg, liraglutida 3 mg) — ou a tirzepatida — são hoje as opções mais eficazes, com perda de 10–15% do peso e benefício em esteatose e dor articular, sempre associados à dieta e atividade física.",
    "commentary": "Sibutramina (A): contraindicada em doença cardiovascular e com perda de peso modesta; não é \"segura em comorbidades\" nem primeira escolha.\n\nMetformina isolada (C): perda de peso pequena; não é tratamento antiobesidade em quem não tem diabetes ou pré-diabetes.\n\nTricíclicos (D): costumam aumentar o apetite e o peso.",
    "reference": "ABESO/SBEM — Posicionamento sobre tratamento farmacológico da obesidade (2024)",
    "tags": [
      "obesidade",
      "tratamento farmacológico",
      "agonistas de GLP-1",
      "semaglutida"
    ],
    "tip": "Obesidade com falha de estilo de vida: análogo de GLP-1 é a primeira linha."
  },
  {
    "id": "hpp2026-11",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem de 60 anos, com diabetes mellitus tipo 2 há 8 anos, em uso de metformina. Mantém HbA1c em 8,2%, histórico de infarto agudo do miocárdio há 2 anos e proteinúria persistente. Qual a melhor escolha para associação ao tratamento, considerando benefício glicêmico e impacto em desfechos cardiovasculares?",
    "options": [
      "Semaglutida, agonista do receptor de GLP-1 que reduz eventos cardiovasculares maiores e auxilia na perda de peso.",
      "Glibenclamida, sulfonilureia com potente efeito hipoglicemiante, mas sem benefício cardiovascular comprovado.",
      "Sitagliptina, inibidor de DPP-4, que pode ser usado em pacientes com doença cardiovascular estabelecida, embora sem redução de desfechos maiores.",
      "Insulina glargina, eficaz no controle glicêmico, mas sem evidência de impacto em eventos cardiovasculares ou progressão da nefropatia."
    ],
    "correctAnswer": 0,
    "explanation": "Diabético tipo 2 fora da meta (HbA1c 8,2%) com doença cardiovascular aterosclerótica estabelecida (IAM prévio) e doença renal (proteinúria). Nesses casos, a escolha do segundo fármaco é guiada pela proteção de órgão: agonista do GLP-1 com benefício comprovado (semaglutida, liraglutida, dulaglutida) e/ou inibidor de SGLT2.\n\nA semaglutida reduz eventos cardiovasculares maiores (SUSTAIN-6, SELECT), ajuda a perder peso e tem benefício renal demonstrado (FLOW), sendo a melhor opção entre as alternativas.",
    "commentary": "Glibenclamida (B): reduz a glicemia, mas sem benefício cardiovascular, com risco de hipoglicemia e ganho de peso.\n\nSitagliptina (C): segura na doença cardiovascular (neutra no TECOS), porém sem reduzir eventos.\n\nInsulina glargina (D): eficaz na glicemia, mas sem proteção cardiovascular ou renal específica; não é a escolha para intensificar nesse perfil.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes 2024 / ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus tipo 2",
      "agonistas de GLP-1",
      "risco cardiovascular",
      "doença renal do diabetes"
    ],
    "tip": "DM2 com doença cardiovascular ou renal: GLP-1 RA e/ou iSGLT2, independentemente da HbA1c."
  },
  {
    "id": "hpp2026-12",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos, previamente saudável, apresenta dor e edema em panturrilha esquerda há 3 dias. Doppler venoso confirma trombose venosa profunda proximal. O paciente está estável, com função renal preservada. Qual é a conduta medicamentosa inicial mais adequada?",
    "options": [
      "Rivaroxabana 15 mg via oral a cada 12 horas por 21 dias, seguida de 20 mg uma vez ao dia.",
      "Apixabana 5 mg via oral a cada 12 horas desde o início.",
      "Enoxaparina 40 mg subcutânea uma vez ao dia, como esquema de tratamento.",
      "Varfarina 5 mg via oral associada a Enoxaparina 1 mg/kg subcutânea a cada 12 horas até atingir INR terapêutico."
    ],
    "correctAnswer": 0,
    "explanation": "TVP proximal em paciente estável, sem câncer e com função renal normal: os anticoagulantes orais diretos são a primeira escolha, sem necessidade de heparina inicial no caso da rivaroxabana e da apixabana.\n\nO esquema da rivaroxabana é 15 mg 12/12 h por 21 dias (fase de ataque) e depois 20 mg uma vez ao dia, por pelo menos 3 meses.",
    "commentary": "Apixabana 5 mg 12/12 h desde o início (B): a apixabana exige ataque de 10 mg 12/12 h por 7 dias; 5 mg 12/12 h é a dose de manutenção.\n\nEnoxaparina 40 mg/dia (C): é dose profilática, insuficiente para tratar TVP (tratamento: 1 mg/kg 12/12 h ou 1,5 mg/kg/dia).\n\nVarfarina + enoxaparina (D): é um esquema válido (sobreposição por ≥ 5 dias até INR 2–3), mas hoje fica como alternativa; as diretrizes preferem os anticoagulantes diretos por eficácia semelhante, menos sangramento e sem monitoração de INR.",
    "reference": "CHEST 2021 — Antithrombotic therapy for VTE / ASH 2020",
    "tags": [
      "trombose venosa profunda",
      "anticoagulação",
      "rivaroxabana",
      "DOAC"
    ],
    "tip": "TVP: rivaroxabana 15 mg 12/12 h por 21 dias → 20 mg/dia; apixabana 10 mg 12/12 h por 7 dias → 5 mg 12/12 h."
  },
  {
    "id": "hpp2026-13",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos, assintomática, comparece à consulta de rotina. Não possui histórico familiar relevante. Qual das condutas abaixo está de acordo com as recomendações atuais de rastreamento?",
    "options": [
      "Pesquisa anual de sangue oculto nas fezes a partir dos 30 anos.",
      "Iniciar endoscopia a cada 5 anos para pacientes acima de 40 anos.",
      "Ressonância magnética de mamas a partir dos 50 anos em população geral.",
      "Colonoscopia a cada 10 anos para rastreamento de câncer colorretal."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 52 anos de risco habitual. O rastreamento de câncer colorretal é recomendado a partir dos 45–50 anos até os 75, e a colonoscopia a cada 10 anos (se normal) é uma das estratégias aceitas, ao lado da pesquisa anual de sangue oculto nas fezes a partir da faixa etária indicada.",
    "commentary": "Sangue oculto a partir dos 30 anos (A): o teste é anual, mas a idade de início para risco habitual é 45–50 anos, não 30.\n\nEndoscopia a cada 5 anos após os 40 (B): não há rastreamento endoscópico de câncer gástrico ou esofágico para a população geral no Brasil.\n\nRessonância de mamas na população geral (C): a ressonância é reservada a mulheres de alto risco (mutação BRCA, radioterapia torácica prévia); o rastreamento de risco habitual é por mamografia.",
    "reference": "USPSTF 2021 — Colorectal cancer screening / INCA — Detecção precoce do câncer",
    "tags": [
      "rastreamento",
      "câncer colorretal",
      "colonoscopia"
    ],
    "tip": "Câncer colorretal, risco habitual: 45–75 anos; colonoscopia a cada 10 anos ou sangue oculto anual."
  },
  {
    "id": "hpp2026-14",
    "topography": "6.1",
    "topic": "Lúpus eritematoso sistêmico",
    "module": "Clínica Médica",
    "text": "Mulher de 25 anos apresenta artralgias, alopecia e úlceras orais recorrentes. Exames laboratoriais: FAN positivo (1:640, padrão pontilhado fino), anti-DNA nativo positivo, consumo de complemento (C3 e C4 baixos) e proteinúria de 1,5 g/24h. Qual a conduta inicial mais adequada para este quadro?",
    "options": [
      "Hidroxicloroquina isoladamente como tratamento inicial.",
      "Anti-inflamatórios não esteroidais em monoterapia para controle de artralgia.",
      "Corticoterapia sistêmica associada a imunossupressor.",
      "Rituximabe como primeira linha de tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com artralgia, alopecia, úlceras orais, FAN alto, anti-DNA positivo e complemento baixo: lúpus eritematoso sistêmico. A proteinúria de 1,5 g/24 h (> 0,5 g) indica nefrite lúpica, manifestação grave que define a conduta.\n\nO tratamento de indução da nefrite lúpica é corticoide sistêmico (muitas vezes pulsoterapia com metilprednisolona) associado a imunossupressor — micofenolato ou ciclofosfamida —, mantendo a hidroxicloroquina como base para todos os pacientes. A biópsia renal define a classe e ajuda a guiar o esquema.",
    "commentary": "Hidroxicloroquina isolada (A): deve ser usada por todos, mas sozinha não controla acometimento renal.\n\nAINE (B): trata só a artralgia e é nefrotóxico, devendo ser evitado na nefrite.\n\nRituximabe em primeira linha (D): fica para casos refratários; não é a indução padrão.",
    "reference": "EULAR 2023 — Recommendations for SLE / KDIGO 2024 — Lupus nephritis",
    "tags": [
      "lúpus eritematoso sistêmico",
      "nefrite lúpica",
      "imunossupressão"
    ],
    "tip": "LES com proteinúria > 0,5 g/dia = nefrite: corticoide + micofenolato ou ciclofosfamida (e hidroxicloroquina)."
  },
  {
    "id": "hpp2026-15",
    "topography": "9",
    "topic": "Anemias",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos, com artrite reumatoide em acompanhamento ambulatorial, apresenta fadiga progressiva. Hemograma mostra Hb 9,8 g/dL, VCM 78 fL. Solicitaram-se exames de ferro:\n• Ferro sérico: 35 µg/dL (VR: 60–170)\n• Ferritina: 180 ng/mL (VR: 30–400)\n• Saturação de transferrina: 12% (VR: 20–50)\n• Capacidade total de ligação do ferro (TIBC): 240 µg/dL (VR: 250–400)\n\nQual o diagnóstico mais provável?",
    "options": [
      "Anemia da doença crônica.",
      "Anemia ferropriva.",
      "Anemia por deficiência de vitamina B12.",
      "Anemia hemolítica autoimune."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com artrite reumatoide e anemia microcítica leve. O perfil de ferro mostra ferro sérico baixo e saturação baixa, mas ferritina normal/alta (180 ng/mL) e capacidade total de ligação (TIBC) baixa.\n\nEsse é o padrão da anemia da doença crônica (inflamatória): a hepcidina, estimulada pela IL-6, bloqueia a ferroportina, retendo ferro nos macrófagos — há ferro nos estoques, mas ele não chega à medula.",
    "commentary": "Anemia ferropriva (B): ferritina estaria baixa (< 30 ng/mL; < 100 em inflamação) e a TIBC alta, o oposto do encontrado.\n\nDeficiência de B12 (C): anemia macrocítica (VCM alto), não microcítica.\n\nHemolítica autoimune (D): cursaria com reticulocitose, LDH e bilirrubina indireta altas, haptoglobina baixa e Coombs direto positivo; o ferro não teria esse padrão.",
    "reference": "Harrison — Anemias / ABHH",
    "tags": [
      "anemia da doença crônica",
      "artrite reumatoide",
      "perfil de ferro",
      "hepcidina"
    ],
    "tip": "Ferro baixo + ferritina normal/alta + TIBC baixa = doença crônica. Ferritina baixa + TIBC alta = ferropriva."
  },
  {
    "id": "hpp2026-16",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Paciente de 67 anos, com DPOC e diabetes, internado por pneumonia comunitária. Após reposição volêmica, apresenta:\n• Frequência respiratória 30 irpm, confusão mental, PA 85/55 mmHg, persistindo hipotenso apesar dos 30 mL/kg de cristaloide.\n• Lactato sérico: 4,5 mmol/L.\n• Oximetria de pulso estável.\n\nConsidere o seguinte: o tempo para reavaliar fluidez tecidual e decidir sobre nova reposição tem opções. Qual abordagem está de acordo com as recomendações mais atuais?",
    "options": [
      "Reavaliar a resposta clínica com capillary refill time (CRT) e testar uma manobra de elevação passiva das pernas (PLR) para guiar nova etapa de ressuscitação.",
      "Reavaliar apenas o lactato sérico após 2 horas; se não reduzir ≥ 20%, administrar mais 500 mL de cristaloide.",
      "Continuar com 30 mL/kg de cristaloide padrão e aguardar resposta hemodinâmica por SNG antes de nova intervenção.",
      "Se lactato persistir elevado (>4 mmol/L), iniciar vasopressor imediatamente sem considerar avaliação dinâmica de fluidez."
    ],
    "correctAnswer": 0,
    "explanation": "Choque séptico de foco pulmonar com hipotensão persistente e lactato de 4,5 mmol/L após os 30 mL/kg iniciais. A partir daí, novos volumes devem ser guiados por parâmetros dinâmicos de responsividade a fluidos, e não por fórmula fixa.\n\nA Surviving Sepsis Campaign 2021 sugere usar o tempo de enchimento capilar (estudo ANDROMEDA-SHOCK) como guia da ressuscitação e testes dinâmicos como a elevação passiva das pernas (PLR) para decidir se o paciente ainda responde a volume. Se não responder, segue para vasopressor (noradrenalina, que pode já estar em curso).",
    "commentary": "Só o lactato, com 500 mL a mais (B): o lactato tem cinética lenta e múltiplas causas; usá-lo isoladamente e repor volume fixo sem avaliar responsividade não é o recomendado.\n\nRepetir 30 mL/kg e aguardar (C): volume em excesso sem avaliação dinâmica causa sobrecarga, e o vasopressor não deve esperar no paciente hipotenso; \"SNG\" não é parâmetro hemodinâmico.\n\nVasopressor sem avaliação dinâmica (D): a noradrenalina está indicada na hipotensão persistente, mas a decisão sobre volume deve ser individualizada; o lactato isolado não define a conduta.",
    "reference": "Surviving Sepsis Campaign 2021 / ANDROMEDA-SHOCK (JAMA 2019)",
    "tags": [
      "sepse",
      "choque séptico",
      "responsividade a fluidos",
      "tempo de enchimento capilar"
    ],
    "tip": "Depois dos 30 mL/kg, volume só com teste de responsividade (PLR) e TEC como guia."
  },
  {
    "id": "hpp2026-17",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Homem de 70 anos apresenta declínio cognitivo progressivo há 18 meses, caracterizado por lentificação do raciocínio e dificuldades de atenção. A família refere que, nos últimos 6 meses, ele passou a ter incontinência urinária e quedas frequentes. No exame, observa-se marcha em passos curtos e magnéticos, com preservação de força muscular. A tomografia de crânio mostra ventriculomegalia desproporcional à atrofia cortical. Qual o diagnóstico mais provável?",
    "options": [
      "Demência com corpos de Lewy.",
      "Doença de Alzheimer.",
      "Demência vascular.",
      "Hidrocefalia de pressão normal."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso com a tríade de Hakim-Adams: distúrbio de marcha (passos curtos, \"magnética\", com força preservada), incontinência urinária e declínio cognitivo de padrão subcortical (lentificação, desatenção). A tomografia mostra ventriculomegalia desproporcional à atrofia cortical.\n\nO diagnóstico é hidrocefalia de pressão normal, uma das demências potencialmente reversíveis. O tap test (punção liquórica de alívio) ajuda a prever resposta à derivação ventriculoperitoneal.",
    "commentary": "Corpos de Lewy (A): flutuação cognitiva, alucinações visuais bem formadas e parkinsonismo; não cursa com ventriculomegalia desproporcional.\n\nAlzheimer (B): começa com perda de memória episódica; incontinência e distúrbio de marcha aparecem só em fases avançadas, e a imagem mostra atrofia hipocampal.\n\nDemência vascular (C): evolução em degraus, sinais focais e lesões isquêmicas/leucoaraiose na imagem.",
    "reference": "Diretrizes da Academia Brasileira de Neurologia — Demências / Harrison",
    "tags": [
      "hidrocefalia de pressão normal",
      "demências",
      "tríade de Hakim"
    ],
    "tip": "Marcha magnética + incontinência + demência = hidrocefalia de pressão normal (\"wet, wobbly, wacky\")."
  },
  {
    "id": "hpp2026-18",
    "topography": "10",
    "topic": "Leptospirose",
    "module": "Clínica Médica",
    "text": "Homem de 34 anos, previamente saudável, procura o pronto atendimento com febre, mialgia intensa em panturrilhas, cefaleia e icterícia. Ao exame: PA 90/60 mmHg, FC 112 bpm, icterícia ++/4+, conjuntivas hiperemiadas e discreta hemoptise. Exames: creatinina 3,2 mg/dL, plaquetas 75.000/mm³. Qual é a conduta mais adequada para este caso?",
    "options": [
      "Tratamento ambulatorial com doxiciclina oral por 7 dias, já que a doença é autolimitada.",
      "Internação hospitalar imediata, antibioticoterapia endovenosa e suporte clínico para falência renal/hepática.",
      "Solicitar apenas sorologia para arboviroses e aguardar o resultado antes de iniciar qualquer tratamento específico.",
      "Iniciar corticoide endovenoso isolado, já que o quadro sugere vasculite sistêmica."
    ],
    "correctAnswer": 1,
    "explanation": "Febre, mialgia intensa em panturrilhas, sufusão conjuntival, icterícia rubínica, lesão renal aguda, plaquetopenia e hemoptise: forma grave da leptospirose (síndrome de Weil, com possível hemorragia pulmonar).\n\nA conduta é internação imediata (em UTI se houver hemorragia pulmonar ou instabilidade), antibiótico endovenoso — penicilina cristalina, ceftriaxona ou ampicilina — e suporte para a insuficiência renal (inclusive diálise precoce) e demais disfunções.",
    "commentary": "Doxiciclina oral ambulatorial (A): é opção só na forma leve (anictérica); o caso tem icterícia, insuficiência renal, hipotensão e sangramento.\n\nAguardar sorologia de arboviroses (C): a suspeita é leptospirose e o antibiótico deve começar de imediato, sem esperar confirmação laboratorial.\n\nCorticoide isolado (D): o quadro é infeccioso; corticoide sozinho não trata e não é o pilar do manejo.",
    "reference": "Ministério da Saúde — Leptospirose: diagnóstico e manejo clínico / Guia de Vigilância em Saúde",
    "tags": [
      "leptospirose",
      "síndrome de Weil",
      "doença de Weil",
      "hemorragia pulmonar"
    ],
    "tip": "Mialgia de panturrilha + sufusão conjuntival + icterícia + LRA = Weil. Interna e penicilina/ceftriaxona EV."
  },
  {
    "id": "hpp2026-19",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Paciente em PCR por FV é intubado após 4 minutos de RCP. A equipe inicia ventilação com capnografia quantitativa. O valor do ETCO₂ medido é de 8 mmHg após algumas ventilações. Qual a interpretação mais adequada para este achado?",
    "options": [
      "Indica qualidade inadequada da RCP, necessitando otimizar compressões torácicas.",
      "Confirma posicionamento correto do tubo orotraqueal.",
      "Demonstra retorno da circulação espontânea (ROSC).",
      "Representa hiperventilação, devendo reduzir a frequência respiratória."
    ],
    "correctAnswer": 0,
    "explanation": "Durante a RCP, a capnografia reflete o fluxo sanguíneo gerado pelas compressões. ETCO₂ < 10 mmHg sugere compressões ineficazes (pouca profundidade, frequência inadequada, pausas ou fadiga de quem comprime).\n\nA resposta é otimizar a RCP: trocar o socorrista, corrigir profundidade (5–6 cm) e frequência (100–120/min) e minimizar interrupções. A meta é ETCO₂ de pelo menos 10–20 mmHg.",
    "commentary": "Confirmar a posição do tubo (B): uma curva persistente de capnografia confirma intubação traqueal, mas o valor de 8 mmHg indica baixa perfusão, não posição correta per se.\n\nRetorno da circulação (C): o RCE se manifesta por aumento abrupto e sustentado do ETCO₂, em geral para ≥ 35–40 mmHg.\n\nHiperventilação (D): a hiperventilação reduz o ETCO₂, mas valores baixos durante a RCP refletem principalmente débito cardíaco insuficiente gerado pelas compressões.",
    "reference": "AHA 2020/2025 — Suporte Avançado de Vida Cardiovascular",
    "tags": [
      "parada cardiorrespiratória",
      "capnografia",
      "RCP de alta qualidade"
    ],
    "tip": "RCP: ETCO₂ < 10 = melhore as compressões. Salto para ≥ 40 = provável RCE."
  },
  {
    "id": "hpp2026-20",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos chega inconsciente ao pronto-socorro após uso excessivo de morfina. Está com Glasgow de 6 (E1 V1 M4), pupilas mióticas, respiração lenta e superficial. Saturação de oxigênio no ar ambiente é de 80%, com ventilação espontânea presente, mas insuficiente. Qual a conduta inicial mais adequada?",
    "options": [
      "Administrar naloxona 0,04 mg EV em bolus, repetir a cada 2 minutos até leve despertar ou melhora da ventilação.",
      "Realizar intubação orotraqueal imediata pelo risco de depressão respiratória severa.",
      "Administrar flumazenil 0,2mg EV para reverter a depressão do sistema nervoso central.",
      "Iniciar ventilação com máscara bolsa-válvula aguardando possível recuperação espontânea."
    ],
    "correctAnswer": 0,
    "explanation": "Rebaixamento de consciência, miose e bradipneia após morfina: síndrome opioide. O paciente ainda respira, mas de forma insuficiente (SpO₂ 80%).\n\nO antídoto é a naloxona, que reverte a depressão respiratória em minutos. Em quem pode ter dependência de opioide, recomenda-se começar com doses baixas (0,04–0,4 mg EV) e titular a cada 2–3 minutos até ventilação adequada, evitando abstinência abrupta, agitação e vômitos. Enquanto o antídoto age, oferece-se oxigênio e ventilação assistida com bolsa-válvula-máscara se necessário.",
    "commentary": "Intubação imediata (B): Glasgow baixo por opioide costuma reverter com naloxona; a via aérea definitiva fica para quem não responde ao antídoto.\n\nFlumazenil (C): antagonista de benzodiazepínico, sem ação no receptor opioide, e pode precipitar convulsões.\n\nApenas ventilar com bolsa-válvula-máscara aguardando (D): ventilar é medida de suporte, mas não substitui o antídoto; esperar a recuperação espontânea prolonga a hipoxemia.",
    "reference": "AHA 2020 — Emergências associadas a opioides / Goldfrank's Toxicologic Emergencies",
    "tags": [
      "intoxicação por opioides",
      "naloxona",
      "toxíndromes"
    ],
    "tip": "Miose + bradipneia + coma = opioide. Naloxona em dose baixa e titulada."
  },
  {
    "id": "hpp2026-21",
    "topography": "3.1",
    "topic": "Úlcera péptica",
    "module": "Cirurgia",
    "text": "Sobre a doença ulcerosa péptica é CORRETO afirmar:",
    "options": [
      "Gastrinomas são tumores neuroendócrinos produtores de gastrina que se apresentam com doença ulcerosa péptica severa e podem estar associados a Neoplasia Endócrina Múltipla do tipo 2B (NEM 2B).",
      "Na Síndrome de Zollinger Ellison, a hipersecreção ácida gástrica produzida pelo feocromocitoma pode se apresentar clinicamente como doença ulcerosa péptica severa, dor abdominal e diarreia.",
      "Podem ser complicações da doença ulcerosa péptica: hemorragia digestiva alta, estenose péptica do piloro e úlcera perfurada não bloqueada e com peritonite. Desde que o paciente se encontre hemodinamicamente estável, estas complicações devem sempre ser tratadas de forma endoscópica associada ao tratamento clínico com inibidores de bomba de prótons (IBPs).",
      "Dentre as etiologias possíveis para a doença ulcerosa péptica encontra-se o uso de anti inflamatórios não esteroidais (AINEs) e a infecção por Helicobacter pylori. Todos os pacientes diagnosticados com doença ulcerosa péptica associada à infecção por H. pylori devem receber terapia de erradicação."
    ],
    "correctAnswer": 3,
    "explanation": "As duas principais causas de doença ulcerosa péptica são a infecção por Helicobacter pylori e o uso de AINEs. Toda úlcera associada ao H. pylori tem indicação de erradicação: ela cicatriza a lesão e reduz drasticamente recidiva e sangramento.\n\nA alternativa D reúne duas afirmações verdadeiras e é a correta.",
    "commentary": "Gastrinoma e NEM 2B (A): o gastrinoma associa-se à NEM 1 (paratireoide, pâncreas e hipófise); a NEM 2B reúne carcinoma medular de tireoide, feocromocitoma e neuromas mucosos.\n\nFeocromocitoma na Zollinger-Ellison (B): a hipersecreção ácida da síndrome vem da gastrina produzida pelo gastrinoma, não do feocromocitoma.\n\nTratamento endoscópico de todas as complicações (C): a hemorragia costuma ser tratada por endoscopia, mas a úlcera perfurada com peritonite livre é cirúrgica (rafia com epiploplastia), e a estenose pilórica pode precisar de dilatação ou cirurgia.",
    "reference": "Consenso brasileiro sobre Helicobacter pylori (FBG) / Sabiston — Estômago",
    "tags": [
      "úlcera péptica",
      "infecção por H. pylori",
      "síndrome de Zollinger-Ellison",
      "NEM 1"
    ],
    "tip": "Úlcera + H. pylori = erradica sempre. Gastrinoma anda com NEM 1."
  },
  {
    "id": "hpp2026-22",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Cirurgia",
    "text": "A doença do refluxo gastroesofágico (DRGE) é uma condição prevalente no Brasil, com implicações significativas na qualidade de vida dos pacientes e potencial para complicações. Sobre o diagnóstico e tratamento da DRGE, assinale a alternativa INCORRETA:",
    "options": [
      "A DRGE pode se apresentar de forma típica como pirose/queimação ácida retroesternal e/ou regurgitação e de forma atípica como disfagia, laringite por refluxo, tosse crônica e exacerbação de quadro asmático.",
      "Nos pacientes com sintomas típicos, o diagnóstico inicial é essencialmente clínico. A endoscopia digestiva alta está indicada para pacientes com sintomas atípicos, sinais de alarme para malignidade ou fatores de risco para esôfago de Barrett.",
      "Há diferença significativa de resultados clínicos no tratamento da DRGE com os diferentes Inibidores de Bomba de Prótons (IBP) disponíveis no mercado. O esomeprazol e o dexlansoprazol apresentam resultados superiores aos demais IBPs no tratamento das esofagites erosivas.",
      "O tratamento cirúrgico da DRGE deve ser considerado em pacientes com hérnia hiatal sintomática maior de 5cm e nas esofagites severas grau C e D de Los Angeles."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a INCORRETA. Os IBPs disponíveis têm eficácia clínica semelhante quando usados em doses equivalentes. Não há superioridade consistente e clinicamente relevante do esomeprazol ou do dexlansoprazol sobre os demais na cicatrização da esofagite erosiva; as diferenças são pequenas e pouco relevantes na prática.\n\nPor isso, a alternativa C é a incorreta.",
    "commentary": "Apresentações típicas e atípicas (A): correta — pirose e regurgitação são típicas; tosse crônica, laringite, asma e dor torácica não cardíaca são manifestações atípicas/extraesofágicas.\n\nDiagnóstico clínico e indicação de endoscopia (B): correta — sintomas típicos permitem teste terapêutico com IBP; a endoscopia fica para sinais de alarme, sintomas atípicos, refratariedade ou risco de Barrett.\n\nIndicação cirúrgica (D): correta para a banca — hérnia hiatal volumosa sintomática e esofagite grave (Los Angeles C/D) estão entre as situações em que a fundoplicatura é considerada.",
    "reference": "Consenso Brasileiro da DRGE / ACG 2022 — Guidelines for GERD",
    "tags": [
      "DRGE",
      "inibidores de bomba de prótons",
      "esofagite erosiva"
    ],
    "tip": "IBPs em dose equivalente têm eficácia parecida; nenhum é claramente superior."
  },
  {
    "id": "hpp2026-23",
    "topography": "3.2",
    "topic": "Cirrose hepática",
    "module": "Cirurgia",
    "text": "O transplante hepático pode ser uma opção terapêutica importante para pacientes com falência hepática aguda, doença hepática terminal e neoplasias. A respeito desta modalidade terapêutica é CORRETO afirmar:",
    "options": [
      "São indicações de transplante hepático: Cirrose hepática por hepatite C com escore MELD > 15 e carcinoma hepatocelular ressecável, único, com 3 cm de tamanho.",
      "A cirrose hepática isoladamente não se constitui indicação para transplante hepático. Para se considerar a indicação de transplante, deve existir, associada à cirrose, uma complicação da hipertensão portal ou sinais de comprometimento da função hepática, geralmente elevando o escore MELD acima de 15 pontos.",
      "O Brasil utiliza sistema de lista única para receptores e a prioridade na lista é determinada conforme o escore MELD e a compatibilidade sanguínea. O escore MELD utiliza os valores séricos de bilirrubina, creatinina e RNI para estimar a sobrevida dos pacientes em 03 meses e, para evitar fraudes ao sistema, não existem critérios de exceção ou pontuação adicional ao MELD.",
      "São contraindicações absolutas ao transplante hepático: infecção por HIV, hepatite alcoólica severa, metástase hepática de carcinoma colorretal."
    ],
    "correctAnswer": 1,
    "explanation": "A cirrose, por si só, não indica transplante. A indicação surge quando há descompensação (ascite, hemorragia varicosa, encefalopatia, síndrome hepatorrenal) ou piora da função hepática, geralmente traduzida por MELD ≥ 15 — ponto a partir do qual o benefício do transplante supera seu risco.\n\nPor isso, a alternativa B está correta.",
    "commentary": "Hepatite C com MELD > 15 e CHC ressecável (A): o carcinoma hepatocelular único e ressecável em fígado com boa função deve ser ressecado; o transplante entra quando o tumor está nos critérios de Milão e a ressecção não é possível ou a função hepática é ruim.\n\nSem critérios de exceção (C): o Brasil usa lista única e o MELD, mas há situações especiais com pontuação adicional (ex.: carcinoma hepatocelular dentro de Milão, síndrome hepatopulmonar, polineuropatia amiloidótica familiar).\n\nContraindicações absolutas (D): HIV controlado não contraindica transplante; hepatite alcoólica grave refratária pode ser transplantada em centros selecionados; já a metástase de câncer colorretal é, em geral, contraindicação.",
    "reference": "Portaria GM/MS nº 2.600/2009 — Regulamento técnico do Sistema Nacional de Transplantes / AASLD",
    "tags": [
      "transplante hepático",
      "cirrose hepática",
      "escore MELD"
    ],
    "tip": "Cirrose transplanta quando descompensa ou MELD ≥ 15."
  },
  {
    "id": "hpp2026-24",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Uma paciente de 70 anos, diabética e hipertensa estava realizando exames de pré operatório para colecistectomia por apresentar cálculo único de 2,6 cm na vesícula biliar. Antes de seu retorno ambulatorial para programação cirúrgica, dá entrada no Pronto Socorro com quadro de náuseas, vômitos, distensão abdominal e parada de eliminação de gases e fezes há 3 dias. Realizou tomografia computadorizada do abdome que mostrou sinais de obstrução intestinal, vesícula biliar com paredes espessadas e aerobilia. O local mais provável da obstrução é:",
    "options": [
      "Ângulo hepático do cólon",
      "Íleo terminal",
      "Jejuno proximal (ângulo de Treitz)",
      "Segunda porção duodenal"
    ],
    "correctAnswer": 1,
    "explanation": "Idosa com colelitíase (cálculo grande, de 2,6 cm), quadro de obstrução intestinal e, na tomografia, vesícula de paredes espessadas com aerobilia: tríade de Rigler (obstrução, pneumobilia e cálculo ectópico) do íleo biliar.\n\nO cálculo passa para o intestino por uma fístula colecistoentérica (geralmente colecistoduodenal) e impacta no ponto mais estreito do delgado, o íleo terminal, próximo à válvula ileocecal.",
    "commentary": "Ângulo hepático do cólon (A): o cólon tem calibre maior; a impactação colônica é rara (geralmente sigmoide, sobre estenose prévia) e ocorre em fístula colecistocólica.\n\nJejuno proximal (C): o jejuno tem calibre maior que o íleo; não é o sítio típico.\n\nSegunda porção duodenal (D): obstrução duodenal por cálculo é a síndrome de Bouveret, rara, com quadro de obstrução gástrica (vômitos, sem distensão abdominal importante).",
    "reference": "Sabiston — Vesícula biliar e vias biliares / Townsend",
    "tags": [
      "íleo biliar",
      "tríade de Rigler",
      "obstrução intestinal",
      "colelitíase"
    ],
    "tip": "Idosa + obstrução + aerobilia = íleo biliar, cálculo no íleo terminal."
  },
  {
    "id": "hpp2026-25",
    "topography": "3.3",
    "topic": "Colecistite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 43 anos, obesa, dá entrada no Pronto Socorro com queixa de dor abdominal epigástrica e em hipocôndrio direito, associada a náuseas, vômitos e 01 episódio de febre. Ao exame apresenta FC de 82 bpm, PA: 120/80 mmHg, dor à palpação do hipocôndrio direito, sinal de Murphy positivo e icterícia (+/++++). Exames laboratoriais com Hb 12,8; 14500 leucócitos com 6% de bastões, gama GT 450; bilirrubina total 2,67, bilirrubina direta: 1,74, bilirrubina indireta: 0,93. A ultrassonografia mostra vesícula biliar com paredes espessadas contendo múltiplos cálculos em seu interior, com cálculo de 1,5 cm impactado no infundíbulo, a via biliar principal não foi visualizada, não há dilatação das vias biliares intra-hepáticas. A respeito do caso é CORRETO afirmar:",
    "options": [
      "O quadro sugere colangite aguda grave e a paciente deve ser tratada com drenagem biliar externa com urgência.",
      "Trata-se de crise de cólica biliar e a paciente deve ser manejada com analgesia e programação de colecistectomia eletiva em segundo tempo.",
      "Trata-se de colecistite aguda com provável compressão externa da via biliar (Síndrome de Mirizzi) ou coledocolitíase associada.",
      "Trata-se de provável neoplasia maligna das vias biliares e a paciente deve realizar dosagem de CA19-9 e estadiamento com tomografia computadorizada de tórax e abdome para programação cirúrgica."
    ],
    "correctAnswer": 2,
    "explanation": "Dor em hipocôndrio direito, febre, Murphy positivo, leucocitose com desvio e ultrassom com parede espessada e cálculo impactado no infundíbulo: colecistite aguda.\n\nA presença de icterícia com aumento de bilirrubina direta e gama-GT indica que há obstrução da via biliar principal associada: pode ser compressão extrínseca do ducto hepático comum pelo cálculo impactado no infundíbulo (síndrome de Mirizzi) ou coledocolitíase. Como o colédoco não foi visualizado no ultrassom, é preciso investigar a via biliar (colangiorressonância) antes da cirurgia.",
    "commentary": "Colangite grave com drenagem urgente (A): não há disfunção orgânica (PA e frequência normais, sem confusão) nem dilatação de vias biliares; o quadro não preenche colangite grave.\n\nCólica biliar (B): cólica biliar não tem febre, leucocitose, parede espessada nem Murphy positivo — o quadro é inflamatório.\n\nNeoplasia de vias biliares (D): não há elementos (massa, dilatação de vias, perda de peso) que sugiram tumor; a icterícia é leve e acompanha quadro agudo inflamatório.",
    "reference": "Tokyo Guidelines 2018 / Sabiston — Vias biliares",
    "tags": [
      "colecistite aguda",
      "síndrome de Mirizzi",
      "coledocolitíase",
      "icterícia obstrutiva"
    ],
    "tip": "Colecistite + icterícia: pense em Mirizzi ou coledocolitíase e estude a via biliar."
  },
  {
    "id": "hpp2026-26",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "A respeito do rastreio do câncer colorretal é INCORRETO afirmar:",
    "options": [
      "Para a população de risco habitual, recomenda-se rastreio para câncer colorretal a partir dos 45 anos. Em pacientes saudáveis e com expectativa de vida de mais de 10 anos, o rastreio deve continuar até os 75 anos de idade.",
      "O câncer colorretal pode se desenvolver a partir de pólipos intestinais inflamatórios ou adenomatosos que evoluem para displasia e depois carcinoma.",
      "São fatores de risco que devem indicar rastreio antes dos 45 anos: história familiar ou pessoal de câncer colorretal, diagnóstico de doença inflamatória intestinal (retocolite ulcerativa, doença de Crohn), história familiar de Polipose Adenomatosa Familiar (PAF) e histórico pessoal de tratamento com radioterapia no abdome ou pelve.",
      "A colonoscopia é o método mais acurado para diagnóstico do câncer colorretal pois permite localizar e biopsiar lesões, além de remover pólipos e diagnosticar neoplasias sincrônicas. Define-se neoplasia sincrônica como o achado de dois ou mais tumores primários distintos diagnosticados simultaneamente ou com 06 meses de intervalo, separados por intestino normal e não por extensão direta ou metástase."
    ],
    "correctAnswer": 1,
    "explanation": "A questão pede a INCORRETA. Os pólipos inflamatórios (pseudopólipos, comuns na doença inflamatória intestinal) e os hiperplásicos pequenos não são lesões pré-malignas. O câncer colorretal surge pela sequência adenoma-carcinoma (pólipos adenomatosos) ou pela via serrilhada (adenomas serrilhados sésseis).\n\nPor isso a alternativa B está errada.",
    "commentary": "Rastreio de 45 a 75 anos (A): correto — é a recomendação atual para risco habitual (USPSTF, ACS), mantendo até 75 anos em quem tem expectativa de vida > 10 anos.\n\nFatores que antecipam o rastreio (C): correto — história pessoal ou familiar de CCR, doença inflamatória intestinal, síndromes hereditárias (PAF) e radioterapia abdominal/pélvica prévia indicam rastreio mais cedo.\n\nColonoscopia e neoplasia sincrônica (D): correto — é o método mais acurado, permite biópsia e polipectomia; tumores sincrônicos são primários distintos encontrados ao mesmo tempo ou em até 6 meses.",
    "reference": "USPSTF 2021 / ACS — Colorectal cancer screening / Sabiston",
    "tags": [
      "câncer colorretal",
      "rastreamento",
      "pólipos colônicos",
      "sequência adenoma-carcinoma"
    ],
    "tip": "Pólipo inflamatório não vira câncer; adenoma e serrilhado, sim."
  },
  {
    "id": "hpp2026-27",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Cirurgia",
    "text": "No mês de maio de 2025, o Conselho Federal de Medicina (CFM) publicou a Resolução 2429/2025 que estabelece novos parâmetros para cirurgia bariátrica e metabólica no Brasil. De acordo com esta resolução, assinale verdadeiro (V) ou falso (F) e escolha a alternativa que representa a sequência CORRETA:\n\n( ) São contraindicações à cirurgia bariátrica e/ou metabólica: obesidade clinicamente controlável, paciente grávida e abuso de drogas ilícitas mal controlado.\n( ) As cirurgias reconhecidas pelo CFM como altamente recomendadas na maioria absoluta das situações clínicas são: o Bypass gástrico em Y de Roux e a gastrectomia vertical (sleeve gástrico)\n( ) O CFM não recomenda e não autoriza, em razão dos resultados insatisfatórios e do percentual proibitivo de complicações graves, a Cirurgia de Scopinaro e a Banda gástrica ajustável.\n( ) O balão intragástrico pode ser recomendado como tratamento endoscópico para obesidade em pacientes com restrição aos procedimentos cirúrgicos ou como preparo pré-operatório para cirurgia bariátrica ou metabólica.",
    "options": [
      "VVFF.",
      "VFVF.",
      "VFFV.",
      "VVVV."
    ],
    "correctAnswer": 3,
    "explanation": "Todas as afirmações reproduzem a Resolução CFM nº 2.429/2025: são contraindicações a obesidade clinicamente controlável, a gestação e o abuso de drogas não controlado; o bypass gástrico em Y de Roux e a gastrectomia vertical (sleeve) são as técnicas recomendadas; Scopinaro e banda gástrica ajustável não são mais autorizadas, pelos maus resultados e complicações; e o balão intragástrico pode ser usado em quem tem restrição à cirurgia ou como preparo pré-operatório.\n\nSequência: V V V V.",
    "commentary": "VVFF (A): marca como falsas as afirmações sobre técnicas proscritas e balão intragástrico, que estão na resolução.\n\nVFVF (B): a afirmação sobre bypass e sleeve como técnicas recomendadas é verdadeira, assim como a do balão.\n\nVFFV (C): erra ao considerar falsas as afirmações sobre técnicas recomendadas e técnicas não autorizadas.",
    "reference": "Resolução CFM nº 2.429/2025 — Cirurgia bariátrica e metabólica",
    "tags": [
      "cirurgia bariátrica",
      "resolução CFM",
      "obesidade"
    ],
    "tip": "CFM 2025: bypass e sleeve, sim; Scopinaro e banda, não; balão como ponte ou alternativa."
  },
  {
    "id": "hpp2026-28",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Cirurgia",
    "text": "Sobre a Resolução 2429/2025 do Conselho Federal de Medicina (CFM), que estabelece novos parâmetros para cirurgia bariátrica e metabólica no Brasil, são elegíveis para cirurgia bariátrica ou metabólica, EXCETO:",
    "options": [
      "Pacientes com idade igual ou superior a 16 anos somente se apresentarem IMC acima de 40 kg/m² associado a complicações clínicas que levem a risco de vida.",
      "Pacientes adultos com IMC entre 35 e 40 kg/m² (obesidade classe 2) quando associado a pelo menos uma doença agravada pela obesidade e que melhore com a perda ponderal.",
      "Pacientes adultos com IMC entre 30 e 35 kg/m² (obesidade classe 1) na presença de diabetes mellitus tipo 2.",
      "Pacientes adultos com IMC entre 30 e 35 kg/m² (obesidade classe 1) na presença de apneia do sono grave."
    ],
    "correctAnswer": 0,
    "explanation": "A questão pede a EXCEÇÃO. A Resolução CFM nº 2.429/2025 ampliou a elegibilidade: adultos com IMC ≥ 40, ou IMC 35–40 com doença agravada pela obesidade, ou IMC 30–35 com doenças graves selecionadas (DM2, apneia do sono grave, doença cardiovascular, entre outras). Para adolescentes de 16–17 anos, os critérios são semelhantes aos dos adultos (IMC > 40 ou > 35 com comorbidade), com avaliação multidisciplinar.\n\nA alternativa A restringe os maiores de 16 anos a IMC > 40 com complicações que levem a risco de vida, o que não está na resolução.",
    "commentary": "IMC 35–40 com doença agravada pela obesidade (B): elegível.\n\nIMC 30–35 com diabetes tipo 2 (C): elegível (cirurgia metabólica).\n\nIMC 30–35 com apneia do sono grave (D): elegível pela nova resolução.",
    "reference": "Resolução CFM nº 2.429/2025 — Cirurgia bariátrica e metabólica",
    "tags": [
      "cirurgia bariátrica",
      "cirurgia metabólica",
      "resolução CFM",
      "obesidade"
    ],
    "tip": "CFM 2025: IMC 30–35 com DM2 ou doença grave já pode operar."
  },
  {
    "id": "hpp2026-29",
    "topography": "1.3",
    "topic": "Câncer de cabeça e pescoço",
    "module": "Cirurgia",
    "text": "Os Tumores de Cabeça e Pescoço podem estar associados a diversos fatores de risco. A exposição crônica do trato aerodigestivo superior a carcinógenos conhecidos pode levar a displasia ou lesões pré-malignas e evoluir com câncer de cabeça e pescoço, cujo subtipo histológico mais comum é o carcinoma escamo-celular. O câncer de cabeça e pescoço NÃO está associado a:",
    "options": [
      "Tabagismo",
      "Etilismo",
      "Papiloma Vírus Humano (HPV)",
      "Herpes Vírus tipo II"
    ],
    "correctAnswer": 3,
    "explanation": "Os principais fatores de risco do carcinoma epidermoide de cabeça e pescoço são tabagismo e etilismo (efeito sinérgico) e a infecção pelo HPV de alto risco (sobretudo HPV-16, ligado aos tumores de orofaringe). O vírus Epstein-Barr se associa ao carcinoma de nasofaringe.\n\nO herpes-vírus simples tipo 2 não é fator de risco reconhecido para câncer de cabeça e pescoço.",
    "commentary": "Tabagismo (A): principal fator de risco.\n\nEtilismo (B): fator independente, com risco multiplicado quando associado ao fumo.\n\nHPV (C): causa crescente de câncer de orofaringe, com prognóstico melhor que o tumor associado ao fumo.",
    "reference": "INCA — Câncer de cabeça e pescoço / NCCN Head and Neck Cancers",
    "tags": [
      "câncer de cabeça e pescoço",
      "carcinoma epidermoide",
      "HPV",
      "fatores de risco"
    ],
    "tip": "Cabeça e pescoço: fumo + álcool + HPV (orofaringe). EBV na nasofaringe."
  },
  {
    "id": "hpp2026-30",
    "topography": "7.1",
    "topic": "Isquemia arterial aguda",
    "module": "Cirurgia",
    "text": "Mulher de 68 anos, hipertensa e tabagista de longa data, com queixa crônica de claudicação de membro inferior esquerdo, vem ao pronto atendimento com intensa dor em membro inferior esquerdo, iniciada há 6 horas, principalmente em pé e panturrilha. Ao exame, observa-se cianose do hálux esquerdo e ausência de pulsos poplíteo e distal à esquerda. O diagnóstico mais provável é:",
    "options": [
      "Trombose venosa profunda aguda.",
      "Trombose arterial aguda.",
      "Tromboflebite superficial aguda.",
      "Pré-diabético."
    ],
    "correctAnswer": 1,
    "explanation": "Tabagista e hipertensa com claudicação crônica (doença arterial periférica prévia) que evolui com dor súbita intensa no membro, cianose do hálux e ausência de pulsos poplíteo e distais: isquemia arterial aguda.\n\nNum paciente com aterosclerose prévia e sem fonte embólica descrita (como fibrilação atrial), a causa mais provável é trombose arterial aguda sobre placa. A conduta inclui heparinização plena imediata e avaliação vascular urgente para revascularização, conforme a classificação de Rutherford.",
    "commentary": "TVP (A): cursa com edema, empastamento e dor na panturrilha, com pulsos presentes; não causa ausência de pulsos nem cianose de extremidade (exceto flegmasia, rara).\n\nTromboflebite superficial (C): cordão endurecido e doloroso no trajeto de veia superficial, sem isquemia.\n\nPré-diabetes (D): alteração metabólica, não explica quadro agudo de isquemia.",
    "reference": "Diretrizes da SBACV — Doença arterial periférica e oclusão arterial aguda / ESVS 2020",
    "tags": [
      "isquemia arterial aguda",
      "trombose arterial",
      "doença arterial periférica"
    ],
    "tip": "Os 6 Ps: dor, palidez, ausência de pulso, parestesia, paralisia, poiquilotermia. Claudicação prévia sugere trombose; FA sugere embolia."
  },
  {
    "id": "hpp2026-31",
    "topography": "3.1",
    "topic": "Fissura anal",
    "module": "Cirurgia",
    "text": "A respeito das doenças anorretais, assinale verdadeiro (V) ou falso (F) e escolha a alternativa que representa a sequência CORRETA:\n\n( ) Está indicado tratamento cirúrgico para todos os casos de fissura anal.\n( ) Nos quadros de dor anal aguda deve-se considerar, no diagnóstico diferencial, as possibilidades de: abscesso perianal, trombose hemorroidária e fissura anal.\n( ) O principal mecanismo de formação dos abscessos anorretais é a obstrução criptoglandular anal.\n( ) A principal modalidade de tratamento para abscessos perianais é a antibioticoterapia venosa de amplo espectro. A drenagem cirúrgica pode ser postergada, sendo indicada nos casos que não respondem à abordagem inicial com antibióticos.\n( ) O sangramento hemorroidário se apresenta tipicamente como melena.\n( ) O condiloma acuminado ou verruga anal é uma infecção sexualmente transmissível causada pelo HPV.",
    "options": [
      "FVVFFV.",
      "VVFVFV.",
      "FVFFVV.",
      "FVFFVF."
    ],
    "correctAnswer": 0,
    "explanation": "Afirmação 1 — F: a fissura anal aguda é tratada clinicamente (fibras, banhos de assento, analgesia, nitratos ou bloqueadores de canal de cálcio tópicos); cirurgia (esfincterotomia lateral interna) fica para fissura crônica refratária.\nAfirmação 2 — V: dor anal aguda tem como diagnósticos diferenciais abscesso, trombose hemorroidária e fissura.\nAfirmação 3 — V: a maioria dos abscessos anorretais decorre da obstrução e infecção das glândulas das criptas anais (teoria criptoglandular).\nAfirmação 4 — F: o tratamento do abscesso é a drenagem cirúrgica imediata; antibiótico é apenas complementar.\nAfirmação 5 — F: o sangramento hemorroidário é vermelho vivo (hematoquezia), no papel ou gotejando, não melena.\nAfirmação 6 — V: o condiloma acuminado é IST causada pelo HPV (tipos 6 e 11, principalmente).\n\nSequência: F V V F F V.",
    "commentary": "VVFVFV (B): considera verdadeiros a cirurgia para toda fissura e o tratamento do abscesso com antibiótico, ambos falsos.\n\nFVFFVV (C): erra ao negar a origem criptoglandular e ao aceitar melena como apresentação hemorroidária.\n\nFVFFVF (D): erra na origem criptoglandular, na melena e no condiloma.",
    "reference": "Sabiston — Ânus e reto / ASCRS Clinical Practice Guidelines",
    "tags": [
      "doenças anorretais",
      "fissura anal",
      "abscesso anorretal",
      "condiloma acuminado"
    ],
    "tip": "Abscesso anal se drena, não se trata só com antibiótico."
  },
  {
    "id": "hpp2026-32",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Cirurgia",
    "text": "Menino com 2 anos de idade iniciou há 4 horas com episódios intermitentes de choro intenso, vômitos e evacuação com muco e sangue. No exame físico apresenta abdome distendido, doloroso à palpação e massa palpável em abdome à direita. O diagnóstico mais provável é:",
    "options": [
      "Doença de Hirschsprung.",
      "Diverticulite de Meckel.",
      "Apendicite aguda.",
      "Intussuscepção intestinal."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 2 anos com crises de choro intenso e intermitente (cólica), vômitos, fezes com muco e sangue (\"geleia de framboesa\") e massa palpável em abdome direito (\"em salsicha\"): intussuscepção intestinal, geralmente ileocólica.\n\nO ultrassom mostra o sinal do alvo; sem sinais de peritonite, o tratamento é a redução hidrostática ou pneumática guiada por imagem.",
    "commentary": "Doença de Hirschsprung (A): constipação crônica desde o período neonatal (atraso na eliminação de mecônio), distensão; não cursa com crises de cólica e fezes em geleia.\n\nDiverticulite de Meckel (B): pode simular apendicite; o divertículo sangra de forma indolor (por mucosa gástrica ectópica), sem massa palpável.\n\nApendicite (C): dor contínua migratória para fossa ilíaca direita, febre; fezes com sangue e massa em salsicha não são típicas.",
    "reference": "Nelson Textbook of Pediatrics — Intussuscepção / SBP",
    "tags": [
      "intussuscepção intestinal",
      "abdome agudo pediátrico",
      "fezes em geleia de framboesa"
    ],
    "tip": "Cólica + geleia de framboesa + massa em salsicha = intussuscepção."
  },
  {
    "id": "hpp2026-33",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Homem, 48 anos, trabalhador da construção civil, vem com queixa de abaulamento doloroso inguino-escrotal esquerdo associado a náuseas, vômitos e parada de eliminação de gases e fezes há 2 dias. Ao exame apresentava hérnia inguino-escrotal não redutível. Foi levado para cirurgia de emergência que identificou segmento de intestino delgado herniado, provocando obstrução intestinal, sem sinais de sofrimento vascular da alça. Após redução do conteúdo herniado foi possível identificar alargamento importante do anel inguinal e destruição da parede posterior, ambos corrigidos segundo a técnica de Lichtenstein. A respeito do caso, assinale a alternativa que indica corretamente o diagnóstico e a classificação de Nyhus da hérnia:",
    "options": [
      "Hérnia mista estrangulada, Nyhus II.",
      "Hérnia mista encarcerada, Nyhus IIIB.",
      "Hérnia indireta encarcerada, Nyhus IIIA.",
      "Hérnia indireta estrangulada, Nyhus II."
    ],
    "correctAnswer": 1,
    "explanation": "Hérnia não redutível com obstrução intestinal, mas sem sofrimento vascular da alça: hérnia encarcerada (estrangulada é quando há isquemia).\n\nNa classificação de Nyhus, o tipo III corresponde a defeitos da parede posterior: IIIA = direta; IIIB = indireta com anel alargado e destruição da parede posterior (inclui as volumosas inguino-escrotais, mistas/\"em pantalona\" e por deslizamento); IIIC = femoral. Anel inguinal muito alargado com destruição da parede posterior caracteriza Nyhus IIIB.",
    "commentary": "Mista estrangulada, Nyhus II (A): não havia sofrimento vascular (logo, não é estrangulada), e o tipo II é a indireta com anel alargado mas parede posterior íntegra.\n\nIndireta encarcerada, Nyhus IIIA (C): IIIA é hérnia direta.\n\nIndireta estrangulada, Nyhus II (D): erra o estrangulamento e ignora a destruição da parede posterior.",
    "reference": "Sabiston — Hérnias da parede abdominal / Classificação de Nyhus",
    "tags": [
      "hérnia inguinal",
      "classificação de Nyhus",
      "hérnia encarcerada"
    ],
    "tip": "Encarcerada = presa; estrangulada = presa e isquêmica. Nyhus IIIB = indireta com parede posterior destruída."
  },
  {
    "id": "hpp2026-34",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "O cuidado pós-operatório tradicionalmente ensinado tem sido cada vez mais questionado e as evidências têm mostrado que muitas condutas e práticas perioperatórias são obsoletas e não têm respaldo científico. São quase empíricas e transmitidas a novos cirurgiões há décadas sem devido questionamento. Assinale verdadeiro (V) ou falso (F) e escolha a alternativa que representa a sequência CORRETA a respeito dos cuidados perioperatórios, tendo como base os atuais estudos de medicina baseada em evidência:\n\n( ) A realimentação precoce após operações envolvendo ressecções e anastomoses intestinais deve ser estimulada e pode ser conduzida sem riscos adicionais e com potenciais benefícios aos pacientes como: alta mais precoce, menor incidência de complicações infecciosas e diminuição de custos.\n( ) O jejum total pré-operatório é muito importante e deve ser mantido por, no mínimo, 10 horas antes do procedimento, evitando assim os riscos de broncoaspiração na anestesia.\n( ) O uso de sondas nasogástricas, vesicais e drenos no leito cirúrgico são medidas importantes para o adequado controle de fístulas e balanço hídrico no pós-operatório, portanto, seu uso é fundamental e deve ser estimulado em todas as intervenções no trato gastrintestinal.\n( ) O preparo de cólon para cirurgias eletivas colorretais deve ser feito rotineiramente e é importante para a segurança da anastomose e diminuição do risco de infecção.\n( ) O repouso no leito é importante para a recuperação pós-operatória em cirurgias de grande porte. O paciente deve ser estimulado a permanecer deitado o maior tempo possível para melhorar a cicatrização, evitar hérnias abdominais e estimular o retorno do trânsito intestinal.",
    "options": [
      "FFFFF.",
      "FVVVF.",
      "VFFFF.",
      "VFVVF."
    ],
    "correctAnswer": 2,
    "explanation": "Os protocolos de recuperação acelerada (ERAS/ACERTO) mudaram vários dogmas perioperatórios:\n\n1 — V: realimentação precoce após anastomoses intestinais é segura e reduz infecção, tempo de internação e custos.\n2 — F: jejum prolongado é desnecessário; sólidos até 6–8 h e líquidos claros (inclusive com carboidrato) até 2 h antes da anestesia.\n3 — F: sondas e drenos devem ser usados de forma seletiva, não rotineira.\n4 — F: o preparo mecânico de cólon isolado não reduz deiscência nem infecção e não deve ser rotineiro (há discussão sobre preparo combinado com antibiótico oral).\n5 — F: a deambulação precoce reduz trombose, complicações pulmonares e íleo; o repouso prolongado é prejudicial.\n\nSequência: V F F F F.",
    "commentary": "FFFFF (A): a realimentação precoce é recomendada e, portanto, verdadeira.\n\nFVVVF (B): aceita jejum de 10 horas, sondas e drenos de rotina e preparo de cólon rotineiro, todos refutados.\n\nVFVVF (D): aceita sondas/drenos de rotina e preparo de cólon rotineiro.",
    "reference": "Projeto ACERTO / ERAS Society Guidelines",
    "tags": [
      "ERAS",
      "projeto ACERTO",
      "cuidados perioperatórios",
      "jejum pré-operatório"
    ],
    "tip": "ACERTO: jejum curto, comida cedo, sem sondas e drenos de rotina, andar logo."
  },
  {
    "id": "hpp2026-35",
    "module": "Cirurgia",
    "text": "Na prática da clínica cirúrgica o diagnóstico de tumores é muito frequente. A respeito dos conceitos básicos que envolvem esse grupo de doenças, assinale a alternativa CORRETA:",
    "options": [
      "Displasias são caracterizadas por pleomorfismo, ou seja, a perda da uniformidade das células de seu padrão arquitetural de forma e tamanho. Quando a displasia é de alto grau, envolve toda a espessura do epitélio sem invadir a membrana basal e é também chamada de carcinoma in situ.",
      "Tumores ou neoplasias são massas anormais de tecido, cujo crescimento excede e é descoordenado com o tecido normal. São caracterizados pela perda da resposta aos mecanismos de controle de crescimento e, portanto, são sempre considerados malignos.",
      "A obtenção de amostra tecidual ou celular para diagnóstico pode variar de acordo com o tumor a ser estudado. Amostras obtidas por PAAF (punção aspirativa por agulha fina) ou esfregaço de Papanicolaou permitem diagnóstico histológico, enquanto as biópsias excisionais e incisionais fazem diagnóstico citológico.",
      "Metaplasias são respostas celulares de adaptação à agressão em que há substituição irreversível de um tipo celular por outro de linhagem diferente da original. É o que ocorre, por exemplo, na metaplasia intestinal do Esôfago de Barrett."
    ],
    "correctAnswer": 0,
    "explanation": "Displasia é a alteração do crescimento com perda da uniformidade celular (pleomorfismo, hipercromasia) e da orientação arquitetural. Quando acomete toda a espessura do epitélio sem romper a membrana basal, corresponde à displasia de alto grau/carcinoma in situ.\n\nA alternativa A está correta.",
    "commentary": "Neoplasias sempre malignas (B): as neoplasias podem ser benignas ou malignas; a perda de controle do crescimento não define malignidade.\n\nPAAF e biópsia (C): está invertido — PAAF e Papanicolaou dão diagnóstico citológico; biópsias incisionais e excisionais dão diagnóstico histológico.\n\nMetaplasia irreversível de outra linhagem (D): metaplasia é a substituição reversível de um tipo celular adulto por outro da mesma linhagem (epitelial por epitelial), como no esôfago de Barrett.",
    "reference": "Robbins & Cotran — Patologia: neoplasias e adaptações celulares",
    "tags": [
      "displasia",
      "carcinoma in situ",
      "metaplasia",
      "neoplasias"
    ],
    "tip": "Metaplasia é reversível e dentro da mesma linhagem; displasia de alto grau em toda a espessura = in situ."
  },
  {
    "id": "hpp2026-36",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 36 anos, envolveu-se em uma briga após um jogo de futebol e foi vítima de ferimentos por arma branca. Dá entrada no Pronto Socorro queixando-se de desconforto torácico. No exame físico observa-se ferimento cortante de 04 cm no terceiro espaço intercostal E, linha axilar anterior. O paciente apresenta distensão das veias jugulares, hipotensão e abafamento dos batimentos cardíacos. A principal suspeita diagnóstica deve ser:",
    "options": [
      "Rotura traumática de aorta.",
      "Tamponamento cardíaco.",
      "Pneumotórax aberto.",
      "Lesão traumática do baço."
    ],
    "correctAnswer": 1,
    "explanation": "Ferimento por arma branca na região precordial (\"caixa de Ziedler\") com a tríade de Beck: turgência jugular, hipotensão e abafamento de bulhas. O diagnóstico é tamponamento cardíaco.\n\nO FAST confirma o derrame pericárdico; o tratamento definitivo é cirúrgico (toracotomia/esternotomia), com pericardiocentese apenas como ponte quando a cirurgia não está imediatamente disponível.",
    "commentary": "Rotura de aorta (A): típica de trauma contuso por desaceleração; causa choque hipovolêmico, sem turgência jugular.\n\nPneumotórax aberto (C): ferimento soprante com entrada de ar e insuficiência respiratória; não justifica bulhas abafadas.\n\nLesão de baço (D): choque hemorrágico com jugulares colabadas; o ferimento é torácico alto, longe do baço.",
    "reference": "ATLS — 10ª edição: Trauma torácico",
    "tags": [
      "tamponamento cardíaco",
      "tríade de Beck",
      "trauma torácico"
    ],
    "tip": "Tríade de Beck = tamponamento: hipotensão + turgência jugular + bulhas abafadas."
  },
  {
    "id": "hpp2026-37",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Paciente de 20 anos, vítima de atropelamento com história de perda de consciência na cena do acidente, é trazido ao Pronto Socorro agitado, gritando muito. Ao exame clínico apresenta murmúrio vesicular audível claro bilateralmente, SpO₂ 98% em ar ambiente, PA 130x80 mmHg, FC: 80 bpm. Durante o exame físico evolui com rebaixamento do nível de consciência, deixa de falar, não abre os olhos e tem resposta motora de retirada à dor. A tomografia de crânio mostra a seguinte imagem:\n\nO diagnóstico é:",
    "options": [
      "Lesão axonal difusa.",
      "Hematoma subdural agudo.",
      "Hematoma extradural.",
      "Hemorragia subaracnóidea traumática."
    ],
    "correctAnswer": 2,
    "explanation": "Perda de consciência no trauma, seguida de período de relativa lucidez (chega agitado, falando) e depois piora súbita (Glasgow cai para 6: sem abertura ocular, sem fala, retirada à dor): é o intervalo lúcido.\n\nA tomografia mostra coleção hiperdensa biconvexa (lente) na região temporoparietal direita, com efeito de massa e desvio da linha média: hematoma extradural (epidural), geralmente por lesão da artéria meníngea média associada a fratura temporal. Tratamento: drenagem neurocirúrgica de urgência.",
    "commentary": "Lesão axonal difusa (A): coma desde o trauma, sem intervalo lúcido, e tomografia normal ou com pequenas hemorragias puntiformes (corpo caloso, transição córtico-subcortical).\n\nHematoma subdural agudo (B): coleção em crescente (côncavo-convexa), que cruza suturas, por rotura de veias ponte; mais comum em idosos e etilistas.\n\nHemorragia subaracnoidea traumática (D): sangue nos sulcos e cisternas, sem coleção extra-axial volumosa.",
    "reference": "ATLS — 10ª edição: Trauma cranioencefálico",
    "tags": [
      "hematoma extradural",
      "TCE",
      "intervalo lúcido",
      "tomografia de crânio"
    ],
    "tip": "Lente biconvexa + intervalo lúcido = extradural. Crescente = subdural.",
    "image": "/images/hpp2026-37.webp"
  },
  {
    "id": "hpp2026-38",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "O grau de contaminação das feridas cirúrgicas no momento da cirurgia é um fator de risco importante para a ocorrência de infecção pós-operatória. O potencial de contaminação cirúrgica descrito pelo NHSN (National Healthcare Safety Network) é amplamente utilizado mundialmente. Nele, as feridas cirúrgicas podem ser classificadas em limpas, potencialmente contaminadas, contaminadas e infectadas, de acordo com as condições locais, condições técnicas da cirurgia e sítio cirúrgico a ser abordado. Analise as seguintes cirurgias e sua classificação:\n\nI) Colecistectomia eletiva por colelitíase – contaminada\nII) Herniorrafia umbilical eletiva – limpa\nIII) Retossigmoidectomia Hartmann por diverticulite com perfuração e abscesso – infectada\nIV) Retirada de enxerto de pele da face lateral da coxa – limpa\nV) Histerectomia por mioma – potencialmente contaminada\nVI) Enterectomia com enteroanastomose por obstrução intestinal por bridas, sem perfuração - contaminada\n\nEstão CORRETA:",
    "options": [
      "Todas.",
      "Apenas a II, III, IV, V e VI.",
      "Apenas a IV, V e VI.",
      "Apenas a II, III, V e VI."
    ],
    "correctAnswer": 1,
    "explanation": "Classificação do potencial de contaminação:\n\nI — errada: a colecistectomia eletiva abre o trato biliar de forma controlada; é potencialmente contaminada.\nII — certa: herniorrafia umbilical eletiva é limpa.\nIII — certa: diverticulite perfurada com abscesso é infectada.\nIV — certa: retirada de enxerto de pele íntegra é limpa.\nV — certa: histerectomia abre a vagina (trato colonizado) de forma controlada; potencialmente contaminada.\nVI — considerada certa pela banca: a obstrução intestinal com estase e alta carga bacteriana, ao ser aberta, eleva a contaminação, classificando a cirurgia como contaminada.\n\nItens corretos: II, III, IV, V e VI.",
    "commentary": "Todas (A): o item I está errado.\n\nApenas IV, V e VI (C): deixa de fora II e III, que estão corretos.\n\nApenas II, III, V e VI (D): deixa de fora o IV, que é cirurgia limpa.\n\nObservação: pela definição clássica do CDC/NHSN, uma enterectomia com anastomose sem perfuração e sem extravasamento grosseiro seria potencialmente contaminada; considerá-la contaminada depende de haver contaminação importante durante a abertura das alças distendidas. O gabarito oficial aceitou o item VI como correto.",
    "reference": "CDC/NHSN — Surgical wound classification / ANVISA — Critérios diagnósticos de infecção de sítio cirúrgico",
    "tags": [
      "classificação de feridas cirúrgicas",
      "infecção de sítio cirúrgico",
      "potencial de contaminação"
    ],
    "tip": "Abriu trato colonizado de forma controlada = potencialmente contaminada. Pus = infectada."
  },
  {
    "id": "hpp2026-39",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "A respeito das lesões térmicas causadas por queimadura e choques elétricos, é INCORRETO afirmar:",
    "options": [
      "O carcinoma escamo-celular ulcerado que pode se desenvolver na cicatriz de uma queimadura é conhecido como úlcera de Marjolin.",
      "Nas queimaduras circunferenciais de membros, a combinação da diminuição da elasticidade da pele e edema dos tecidos moles pode levar à Síndrome Compartimental cujo tratamento deve ser rápido e pode envolver escarotomia ou fasciotomia.",
      "Nas queimaduras por choque elétrico de alta tensão, a rabdomiólise decorrente da propagação elétrica através do músculo provoca liberação de mioglobina e pode causar insuficiência renal aguda.",
      "Nas crianças, a superfície corporal total é consideravelmente diferente dos adultos e, portanto, nas queimaduras em crianças, o cálculo de superfície corporal queimada não é usado como parâmetro para cálculo do volume de fluidos a serem infundidos na reanimação."
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede a INCORRETA. Nas crianças, a proporção da superfície corporal muda (cabeça maior, membros inferiores menores) e por isso se usa a tabela de Lund-Browder em vez da regra dos 9 de adultos. Mesmo assim, a superfície corporal queimada continua sendo a base do cálculo de volume (Parkland: 3 mL × peso × %SCQ no ATLS atual para crianças, com soro glicosado de manutenção nos menores).\n\nAssim, a alternativa D é a incorreta.",
    "commentary": "Úlcera de Marjolin (A): correto — carcinoma espinocelular sobre cicatriz crônica de queimadura.\n\nSíndrome compartimental em queimadura circunferencial (B): correto — escara inelástica + edema aumentam a pressão; o tratamento é escarotomia (e fasciotomia, se necessário).\n\nRabdomiólise no choque elétrico (C): correto — a corrente lesa o músculo em profundidade, liberando mioglobina e causando lesão renal aguda; a meta de diurese é maior.",
    "reference": "ATLS — 10ª edição: Queimaduras / Cartilha para tratamento de emergência das queimaduras (Ministério da Saúde)",
    "tags": [
      "queimaduras",
      "tabela de Lund-Browder",
      "fórmula de Parkland",
      "úlcera de Marjolin"
    ],
    "tip": "Criança queimada: Lund-Browder para a %SCQ, que entra no cálculo de volume."
  },
  {
    "id": "hpp2026-40",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Segundo a Associação Americana de Anestesiologia (ASA), uma paciente com 40 anos, diabética bem controlada com medicamentos e que tem exame físico e laboratorial normal no pré-operatório, pode ser classificada como:",
    "options": [
      "ASA I.",
      "ASA II.",
      "ASA III.",
      "ASA IV."
    ],
    "correctAnswer": 1,
    "explanation": "Na classificação ASA, o ASA II corresponde ao paciente com doença sistêmica leve, sem limitação funcional: hipertensão ou diabetes bem controlados, tabagismo, obesidade leve, gestação.\n\nA diabética bem controlada com exames normais é ASA II.",
    "commentary": "ASA I (A): paciente saudável, sem doença sistêmica.\n\nASA III (C): doença sistêmica grave com limitação funcional (diabetes ou hipertensão mal controlados, DPOC, obesidade mórbida, IAM há mais de 3 meses).\n\nASA IV (D): doença sistêmica grave que é ameaça constante à vida (IAM recente, insuficiência cardíaca descompensada, sepse).",
    "reference": "American Society of Anesthesiologists — ASA Physical Status Classification System (2020)",
    "tags": [
      "classificação ASA",
      "avaliação pré-operatória",
      "risco anestésico"
    ],
    "tip": "Doença sistêmica controlada = ASA II; com limitação = ASA III."
  },
  {
    "id": "hpp2026-41",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos é trazida à emergência com febre baixa há 2 dias, coriza hialina, tosse seca e congestão nasal. No exame físico, encontra-se em bom estado geral, afebril no momento, sem exsudato, sem linfonodomegalias importantes. A mãe está preocupada porque aconteceram 3 episódios semelhantes este ano. Diante do quadro clínico, qual a conduta mais adequada?",
    "options": [
      "Solicitar hemograma e iniciar antibiótico (amoxicilina).",
      "Solicitar cultura de orofaringe para afastar faringite estreptocócica.",
      "Orientações aos pais, tratamento sintomático e observação.",
      "Internação hospitalar para investigação de imunodeficiência ."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 4 anos com febre baixa, coriza hialina, tosse seca e congestão nasal, em bom estado geral e sem sinais de bacteriana: resfriado comum (rinofaringite viral). Ter 3 episódios no ano é esperado — crianças pequenas têm em média 6 a 8 resfriados por ano, sobretudo se frequentam escola.\n\nA conduta é orientar os pais (evolução de 7–10 dias, sinais de alarme), tratamento sintomático (lavagem nasal com soro, antitérmico se necessário, hidratação) e observação.",
    "commentary": "Hemograma e amoxicilina (A): não há indício de infecção bacteriana; antibiótico em quadro viral só traz efeitos adversos e resistência.\n\nCultura de orofaringe (B): coriza, tosse e congestão apontam para vírus; a pesquisa de estreptococo fica para faringite sem sintomas virais (Centor/McIsaac), geralmente após 3 anos.\n\nInternação para imunodeficiência (D): 3 resfriados por ano estão dentro do normal; não há sinais de alerta (infecções graves, de repetição bacteriana, déficit de crescimento).",
    "reference": "SBP — Infecções de vias aéreas superiores / Nelson Textbook of Pediatrics",
    "tags": [
      "resfriado comum",
      "infecções de vias aéreas superiores",
      "uso racional de antibióticos"
    ],
    "tip": "Até 8 resfriados por ano é normal na criança pequena. Viral = sintomático."
  },
  {
    "id": "hpp2026-42",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Um menino de 7 anos, morador da zona rural, é levado ao posto de saúde por fadiga, palidez e baixo rendimento escolar. A mãe refere que ele apresenta dor abdominal vaga, baixo ganho ponderal, e quando não está na escola, costuma brincar no quintal e no campo com os amigos. Ao exame apresentou sopro sistólico fraco em bordo esternal esquerdo. Qual o diagnóstico mais provável?",
    "options": [
      "Ascaridíase",
      "Ancilostomíase",
      "Tricuríase",
      "Enterobíase"
    ],
    "correctAnswer": 1,
    "explanation": "Criança da zona rural que brinca descalça no quintal e no campo, com palidez, fadiga, baixo rendimento escolar, dor abdominal vaga e sopro sistólico (sopro funcional da anemia): anemia ferropriva por perda crônica de sangue intestinal.\n\nO quadro é típico da ancilostomíase (Ancylostoma duodenale/Necator americanus), cujas larvas penetram pela pele em contato com o solo contaminado e, já adultas no intestino, sugam sangue da mucosa. Tratamento: albendazol e reposição de ferro.",
    "commentary": "Ascaridíase (A): infecção por ingestão de ovos; causa dor abdominal, sintomas pulmonares (Löffler) e obstrução intestinal, mas não é causa clássica de anemia importante.\n\nTricuríase (C): infestação maciça causa disenteria, prolapso retal e anemia, mas a transmissão é por ingestão de ovos, sem relação com andar descalço.\n\nEnterobíase (D): prurido anal noturno, sem anemia.",
    "reference": "Ministério da Saúde — Doenças infecciosas e parasitárias: guia de bolso / SBP",
    "tags": [
      "ancilostomíase",
      "parasitoses intestinais",
      "anemia ferropriva",
      "geo-helmintíases"
    ],
    "tip": "Pé descalço + anemia ferropriva = ancilostomíase (amarelão)."
  },
  {
    "id": "hpp2026-43",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Menino de 2 anos é levado ao pronto-socorro com história de diarreia aquosa há 2 dias (6 episódios/dia), febre baixa e 2 episódios de vômitos. A mãe refere que a criança apresenta menor aceitação alimentar, mas continua mamando. Ao exame físico: bom estado geral, ativo, olhos levemente fundos, boca seca, pulso normal, tempo de enchimento capilar < (menor) que 2 segundos, diurese preservada. Qual a conduta mais adequada neste caso?",
    "options": [
      "Hidratação venosa imediata pois já tem sinais de desidratação.",
      "Indicar exames laboratoriais para diferenciação de vírus ou bactéria.",
      "Reidratação oral com solução de sais de reidratação + manutenção da alimentação habitual.",
      "Suspender alimentação sólida até cessarem episódios diarreicos."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com diarreia aguda e alguns sinais de desidratação: olhos levemente fundos e boca seca, mas ativa, com pulso normal, enchimento capilar < 2 s e diurese preservada. Pela classificação do Ministério da Saúde, há desidratação leve a moderada (alguns sinais), que corresponde ao Plano B.\n\nO Plano B é a terapia de reidratação oral na unidade (50–100 mL/kg em 4–6 horas, com sais de reidratação oral) e manutenção do aleitamento e da alimentação habitual depois de reidratada.",
    "commentary": "Hidratação venosa imediata (A): é o Plano C, para desidratação grave (letargia, incapacidade de beber, pulso fraco, enchimento > 3 s) ou falha da via oral.\n\nExames para diferenciar vírus e bactéria (B): a diarreia aguda é manejada pelo estado de hidratação; exames não mudam a conduta neste caso.\n\nSuspender sólidos (D): a alimentação deve ser mantida, pois o jejum piora a nutrição e não encurta a diarreia.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / SBP",
    "tags": [
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral",
      "plano B"
    ],
    "tip": "Diarreia com alguns sinais de desidratação = Plano B: SRO na unidade e manter a dieta."
  },
  {
    "id": "hpp2026-44",
    "topography": "10",
    "topic": "Meningococcemia",
    "module": "Pediatria",
    "text": "Um lactente de 10 meses é levado ao pronto-socorro com história de febre alta de início súbito, irritabilidade intensa e recusa alimentar há 12 horas. A mãe relata que ele apresentou vômitos e episódio de convulsão tônico-clônica há 3 horas. Ao exame físico, a criança apresenta:\n• Letargia, fontanela tensa, pescoço rígido\n• Manchas purpúricas disseminadas pelo tronco e membros\n• Pulso rápido, pressão arterial normal\n\nDiante desse quadro, qual é a conduta mais urgente?",
    "options": [
      "Solicitar hemograma, PCR e iniciar antibiótico intravenoso.",
      "Iniciar antibioticoterapia intravenosa empiricamente, solicitar exames (laboratoriais e de imagem) e estabilizar a criança.",
      "Indicar punção lombar imediatamente antes de qualquer intervenção.",
      "Aguardar resultado da cultura sanguínea para iniciar antibiótico."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente com febre alta súbita, irritabilidade, vômitos, convulsão, fontanela tensa, rigidez de nuca e púrpura disseminada: meningite bacteriana com meningococcemia (doença meningocócica invasiva), uma emergência com evolução em horas.\n\nA prioridade é estabilizar (via aérea, acesso venoso, volume) e iniciar antibiótico empírico intravenoso imediatamente (ceftriaxona), colhendo hemocultura sem atrasar a dose. A punção lombar e a imagem são feitas quando seguras e não devem retardar o antibiótico.",
    "commentary": "Hemograma e PCR antes do antibiótico (A): exames são úteis, mas não podem atrasar o antibiótico numa criança com púrpura e sinais meníngeos.\n\nPunção lombar antes de tudo (C): está contraindicada de início na instabilidade, sinais de hipertensão intracraniana, coagulopatia ou convulsão recente; e nunca deve atrasar o antibiótico.\n\nEsperar a hemocultura (D): cada hora de atraso aumenta a mortalidade da doença meningocócica.",
    "reference": "SBP — Meningites bacterianas / Ministério da Saúde — Guia de Vigilância em Saúde (doença meningocócica)",
    "tags": [
      "meningite bacteriana",
      "doença meningocócica",
      "emergências pediátricas",
      "ceftriaxona"
    ],
    "tip": "Febre + púrpura = antibiótico já. Punção e exames não podem atrasar a primeira dose."
  },
  {
    "id": "hpp2026-45",
    "topography": "1.4",
    "topic": "Herpes simples",
    "module": "Pediatria",
    "text": "Menina de 4 anos, previamente hígida, apresenta febre alta há 3 dias, dor intensa para se alimentar e hipersalivação. Ao exame, nota-se gengiva hiperemiada e edemaciada, múltiplas vesículas e úlceras dolorosas disseminadas pela mucosa oral, língua e palato. Há halitose e linfadenopatia cervical dolorosa. Qual o diagnóstico mais provável?",
    "options": [
      "Herpangina (enterovírus) – conduta de suporte apenas.",
      "Candidíase oral – tratamento com antifúngico nistatina.",
      "Estomatite aftosa recorrente – corticoide tópico oral.",
      "Gengivoestomatite herpética primária – analgesia, hidratação, e considerar uso de Aciclovir."
    ],
    "correctAnswer": 3,
    "explanation": "Criança pequena com febre alta, gengiva hiperemiada, edemaciada e sangrante, vesículas e úlceras disseminadas por toda a mucosa oral (incluindo gengiva, língua e palato anterior), halitose, sialorreia e linfadenopatia cervical dolorosa: gengivoestomatite herpética primária (HSV-1).\n\nO tratamento é analgesia e hidratação (risco de desidratação pela dor ao comer); aciclovir oral, se iniciado nas primeiras 72–96 horas, reduz a duração dos sintomas.",
    "commentary": "Herpangina (A): vesículas e úlceras na parte posterior da boca (pilares, palato mole, úvula), sem gengivite.\n\nCandidíase oral (B): placas esbranquiçadas removíveis, sem vesículas nem febre alta.\n\nEstomatite aftosa recorrente (C): poucas úlceras recorrentes, sem febre alta, gengivite ou vesículas.",
    "reference": "SBP — Doenças infecciosas na infância / Nelson Textbook of Pediatrics",
    "tags": [
      "gengivoestomatite herpética",
      "herpes simples",
      "aciclovir",
      "lesões orais"
    ],
    "tip": "Gengivite + úlceras em toda a boca + febre = herpes primário. Úlceras só no fundo da boca = herpangina."
  },
  {
    "id": "hpp2026-46",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Um lactente de 6 meses é trazido ao ambulatório pediátrico pelos pais, que relatam que o bebê apresenta cansaço excessivo, sudorese durante a alimentação e ganho de peso inadequado. Durante o exame físico, nota-se um sopro sistólico de intensidade 3/6 na região pré-cordial e um desvio de pulsos. O paciente também apresenta sinais de insuficiência cardíaca, como taquicardia, respiração acelerada e hepatomegalia. Qual é o diagnóstico mais provável?",
    "options": [
      "Defeito do Septo Atrioventricular (DSAV).",
      "Comunicação Interventricular (CIV).",
      "Estenose Aórtica Congênita.",
      "Persistência do Canal Arterioso (PCA)."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 6 meses com sinais de insuficiência cardíaca (cansaço e sudorese às mamadas, baixo ganho de peso, taquicardia, taquipneia e hepatomegalia) e sopro sistólico na região precordial.\n\nO quadro é típico de cardiopatia acianótica com hiperfluxo pulmonar, e a comunicação interventricular — a cardiopatia congênita mais comum — é o diagnóstico mais provável: com a queda da resistência pulmonar nos primeiros meses, o shunt esquerda-direita aumenta e surge insuficiência cardíaca, com sopro holossistólico na borda esternal esquerda baixa.",
    "commentary": "DSAV (A): também causa IC precoce, mas é muito associado à síndrome de Down, que não é mencionada; é bem menos comum que a CIV.\n\nEstenose aórtica (C): sopro sistólico ejetivo em foco aórtico com frêmito; quando crítica, se apresenta no período neonatal com baixo débito.\n\nPCA (D): sopro contínuo (\"em maquinaria\") e pulsos amplos, mais comum em prematuros.",
    "reference": "SBP — Cardiopatias congênitas / Nelson Textbook of Pediatrics",
    "tags": [
      "cardiopatias congênitas",
      "comunicação interventricular",
      "insuficiência cardíaca na infância"
    ],
    "tip": "Lactente com IC e sopro holossistólico em BEE baixa: CIV, a cardiopatia mais comum."
  },
  {
    "id": "hpp2026-47",
    "topography": "9",
    "topic": "Talassemias",
    "module": "Pediatria",
    "text": "Uma criança de 8 anos é levada ao consultório pediátrico com queixa de fadiga intensa, palidez e episódios frequentes de dor abdominal. Ao exame físico, observa-se palidez mucocutânea e esplenomegalia leve. Os exames laboratoriais revelam hemoglobina de 7 g/dL, presença de microcitose e hipocromia nas hemácias, além do aumento de reticulócitos. A eletroforese de hemoglobina demonstra a presença de hemoglobina F e B em níveis elevados. Qual é o diagnóstico mais provável?",
    "options": [
      "Anemia Falciforme",
      "Anemia Ferropriva",
      "Talassemia Major",
      "Anemia Megaloblástica"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com anemia importante (Hb 7 g/dL), microcítica e hipocrômica, com reticulocitose e esplenomegalia (anemia hemolítica crônica), e eletroforese com aumento de HbF (e de HbA2): beta-talassemia major (anemia de Cooley).\n\nNa beta-talassemia, a síntese de cadeias beta está reduzida ou ausente; o excesso de cadeias alfa precipita, causando eritropoese ineficaz e hemólise. A compensação ocorre com HbF (alfa2gama2) e HbA2 (alfa2delta2).",
    "commentary": "Anemia falciforme (A): a eletroforese mostra HbS; as hemácias são normocíticas e há crises vaso-oclusivas.\n\nAnemia ferropriva (B): microcítica, mas hipoproliferativa (reticulócitos baixos) e sem esplenomegalia; a eletroforese é normal (HbA2 pode até cair).\n\nAnemia megaloblástica (D): macrocítica.",
    "reference": "ABHH / Nelson Textbook of Pediatrics — Talassemias",
    "tags": [
      "talassemia",
      "beta-talassemia major",
      "anemia microcítica",
      "eletroforese de hemoglobina"
    ],
    "tip": "Microcitose + reticulocitose + esplenomegalia + HbF/HbA2 altas = beta-talassemia."
  },
  {
    "id": "hpp2026-48",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Uma criança de 10 anos é levada ao consultório pediátrico devido a preocupações com seu crescimento. Os pais relatam que o filho tem um crescimento mais lento em comparação aos colegas da escola, mas ele continua ativo e saudável, sem queixas significativas. Ao exame físico, a altura da criança está no percentil 10 para a idade, e o peso está no percentil 30. O histórico familiar revela que os pais também tiveram crescimento lento na infância, mas atingiram alturas normais durante a adolescência. Resultados laboratoriais, incluindo exames hormonais, estão dentro dos limites normais e a idade óssea é compatível com a idade cronológica. Qual é o diagnóstico mais provável?",
    "options": [
      "Deficiência de Hormônio do Crescimento.",
      "Retardo Constitucional do Crescimento.",
      "Síndrome de Turner.",
      "Anemia Ferropriva."
    ],
    "correctAnswer": 1,
    "explanation": "Menino de 10 anos, saudável, com estatura no percentil 10 (dentro da normalidade), peso proporcional, exames hormonais normais e pais que também cresceram devagar na infância, mas atingiram altura normal após uma puberdade tardia. Esse histórico familiar de \"amadurecedores lentos\" é o que define o retardo constitucional do crescimento e da puberdade (RCCP), uma variante do normal.\n\nA conduta é tranquilizar a família e acompanhar a velocidade de crescimento.",
    "commentary": "Deficiência de GH (A): velocidade de crescimento baixa, queda de percentis, idade óssea atrasada e IGF-1 baixo; os exames são normais.\n\nSíndrome de Turner (C): só ocorre no sexo feminino (o paciente é menino).\n\nAnemia ferropriva (D): doenças sistêmicas comprometem primeiro o peso; os exames são normais.\n\nObservação: no RCCP clássico a idade óssea é atrasada em relação à cronológica, e idade óssea compatível com a idade é o achado da baixa estatura familiar. O enunciado mistura as duas variantes; o gabarito considerou RCCP pela história dos pais (crescimento lento com estatura final normal).",
    "reference": "SBP — Avaliação do crescimento / Sociedade Brasileira de Endocrinologia e Metabologia",
    "tags": [
      "baixa estatura",
      "retardo constitucional do crescimento",
      "idade óssea",
      "crescimento"
    ],
    "tip": "RCCP: idade óssea atrasada e pais com puberdade tardia. Familiar: idade óssea normal e pais baixos.",
    "alert": "Gabarito discutível: a idade óssea compatível com a cronológica é típica da baixa estatura familiar, e não do retardo constitucional. A banca manteve B pela história familiar."
  },
  {
    "id": "hpp2026-49",
    "topography": "11",
    "topic": "Síndrome do desconforto respiratório neonatal",
    "module": "Pediatria",
    "text": "Um recém-nascido prematuro de 28 semanas de gestação é admitido na unidade de terapia intensiva neonatal com dificuldade respiratória progressiva nas primeiras horas de vida. Ao exame físico, o bebê apresenta taquipneia, retrações intercostais e uso de musculatura acessória para respirar. A oxigenoterapia é iniciada, mas a saturação de oxigênio permanece baixa. A radiografia de tórax revela a presença de infiltrados bilaterais difusos com áreas de opacidade, e a presença de um sinal de \"vidro fosco.\" Qual é o diagnóstico mais provável?",
    "options": [
      "Aspiração Meconial",
      "Pneumonia Bacteriana",
      "Membrana Hialina (Síndrome do Desconforto Respiratório Neonatal)",
      "Pneumotórax"
    ],
    "correctAnswer": 2,
    "explanation": "Prematuro extremo (28 semanas) com desconforto respiratório progressivo nas primeiras horas de vida, hipoxemia refratária e radiografia com infiltrado reticulogranular difuso bilateral (\"vidro moído/fosco\") e broncogramas aéreos: doença da membrana hialina (síndrome do desconforto respiratório), por deficiência de surfactante.\n\nTratamento: CPAP precoce, surfactante exógeno quando indicado e suporte; prevenção com corticoide antenatal.",
    "commentary": "Aspiração meconial (A): ocorre em recém-nascidos a termo ou pós-termo com líquido meconial; radiografia com infiltrados grosseiros e hiperinsuflação.\n\nPneumonia bacteriana (B): pode simular o quadro (estreptococo do grupo B), mas o contexto de prematuro extremo com padrão reticulogranular difuso é típico de membrana hialina.\n\nPneumotórax (D): hipertransparência unilateral com colapso pulmonar, não infiltrado difuso bilateral.",
    "reference": "SBP — Reanimação e cuidados ao recém-nascido pré-termo / European Consensus Guidelines on RDS 2022",
    "tags": [
      "doença da membrana hialina",
      "síndrome do desconforto respiratório",
      "prematuridade",
      "surfactante"
    ],
    "tip": "Prematuro + desconforto nas primeiras horas + vidro moído = membrana hialina."
  },
  {
    "id": "hpp2026-50",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos é levada ao ambulatório com uma lesão cutânea na mão que começou como um pequeno nódulo e, ao longo de algumas semanas, se tornou ulcerativa. Os pais relatam que a criança brinca frequentemente no jardim e manuseia plantas, especialmente roseiras. Durante o exame físico, a lesão apresenta bordas bem definidas, e há linfadenopatia regional. Considerando o histórico da criança e a apresentação clínica, qual é o diagnóstico mais provável?",
    "options": [
      "Esporotricose",
      "Doença da Arranhadura do Gato",
      "Infecção por Staphylococcus aureus",
      "Candidíase Cutânea"
    ],
    "correctAnswer": 0,
    "explanation": "Lesão na mão que começou como nódulo e ulcerou ao longo de semanas, em criança que manuseia plantas e roseiras, com linfadenopatia regional: esporotricose (Sporothrix spp.), micose subcutânea por inoculação traumática.\n\nA forma linfocutânea típica tem nódulos que seguem o trajeto linfático. No Brasil, a transmissão por gatos (S. brasiliensis) também é muito frequente. Tratamento: itraconazol.",
    "commentary": "Doença da arranhadura do gato (B): pápula no local da arranhadura e linfadenopatia regional importante, sem relação com roseiras; causada por Bartonella henselae.\n\nS. aureus (C): infecção aguda (furúnculo, impetigo, celulite), com evolução em dias, não em semanas.\n\nCandidíase cutânea (D): lesões em dobras e áreas úmidas, eritematosas com lesões satélites, sem nódulo ulcerado.",
    "reference": "Ministério da Saúde — Esporotricose humana: guia / SBD",
    "tags": [
      "esporotricose",
      "micoses subcutâneas",
      "doenças de pele na infância"
    ],
    "tip": "Roseira ou gato + nódulo que ulcera + cordão linfático = esporotricose. Itraconazol."
  },
  {
    "id": "hpp2026-51",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Qual das alternativas abaixo não é necessário profilaxia pós abuso sexual na infância?",
    "options": [
      "Candidíase",
      "Trichomoníase",
      "Cervicite por Chlamydia trachomatis",
      "Sífilis"
    ],
    "correctAnswer": 0,
    "explanation": "Após violência sexual, a profilaxia antibiótica cobre as IST bacterianas e parasitárias mais comuns: sífilis (penicilina benzatina), gonorreia e clamídia (ceftriaxona + azitromicina) e tricomoníase (metronidazol), além da profilaxia do HIV e da hepatite B quando indicadas.\n\nA candidíase não é IST e não entra na profilaxia pós-exposição.",
    "commentary": "Tricomoníase (B): faz parte da profilaxia (metronidazol).\n\nClamídia (C): coberta pela azitromicina.\n\nSífilis (D): coberta pela penicilina benzatina.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) / Norma técnica de atenção à violência sexual",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "infecções sexualmente transmissíveis",
      "maus-tratos infantis"
    ],
    "tip": "Profilaxia pós-violência sexual: sífilis, gonorreia, clamídia, tricomoníase (+ HIV e hepatite B)."
  },
  {
    "id": "hpp2026-52",
    "topography": "4.1",
    "topic": "Glomerulonefrite",
    "module": "Pediatria",
    "text": "Uma criança de 8 anos é levada ao consultório pediátrico com queixas de hematúria e proteinúria leves. Os pais relatam que a criança teve uma infecção respiratória relacionada à faringite há cerca de duas semanas. No exame físico, a criança apresenta-se em bom estado geral, sem edema ou hipertensão arterial. Exames laboratoriais revelam a presença de hemácias dismórficas e cilindros eritrócitos nas amostras de urina. Qual é a doença renal mais provável?",
    "options": [
      "Nefrite lúpica",
      "Síndrome nefrótica",
      "Doença de Berger (nefropatia por IgA)",
      "Glomerulonefrite pós-estreptocócica"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com hematúria glomerular (hemácias dismórficas e cilindros hemáticos) e proteinúria leve, sem edema nem hipertensão, após infecção respiratória. O gabarito oficial considera nefropatia por IgA (doença de Berger), a glomerulopatia primária mais comum no mundo, que se manifesta com episódios de hematúria desencadeados por infecções de vias aéreas, muitas vezes sem edema ou hipertensão.",
    "commentary": "Nefrite lúpica (A): exigiria quadro sistêmico de lúpus; rara nessa idade e sem outros achados.\n\nSíndrome nefrótica (B): proteinúria maciça, edema e hipoalbuminemia, sem cilindros hemáticos predominantes.\n\nGlomerulonefrite pós-estreptocócica (D): é, na verdade, o diagnóstico mais clássico desse enunciado — faringite 1 a 3 semanas antes, hematúria com cilindros hemáticos, na faixa etária escolar. A nefropatia por IgA costuma surgir junto com a infecção (1–3 dias, hematúria \"sinfaringítica\"). A ausência de edema e de hipertensão e a hematúria leve foram os argumentos da banca para preferir IgA.",
    "reference": "SBP — Glomerulopatias na infância / KDIGO 2021 — Glomerular diseases",
    "tags": [
      "nefropatia por IgA",
      "glomerulonefrite pós-estreptocócica",
      "hematúria",
      "síndrome nefrítica"
    ],
    "tip": "Hematúria junto com a IVAS (1–3 dias) = IgA. Duas semanas depois da faringite = pós-estreptocócica.",
    "alsoAccepted": [
      3
    ],
    "alert": "Gabarito discutível: hematúria duas semanas após faringite, em criança de 8 anos, é o quadro clássico de glomerulonefrite pós-estreptocócica (D). A banca manteve C (nefropatia por IgA). Neste simulado, a alternativa D também é aceita como correta."
  },
  {
    "id": "hpp2026-53",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Um menino de 6 anos é levado à consulta médica com queixas de febre baixa, mal-estar geral e uma erupção cutânea que começou nas bochechas. A mãe relata que ele teve uma leve infecção respiratória há cerca de uma semana. Ao exame físico, observam-se lesões eritematosas bem delimitadas nas bochechas, descritas como \"face esbofeteada\", e uma erupção maculopapular que se espalha para o tronco e membros. Qual é o diagnóstico mais provável para essa criança?",
    "options": [
      "Roséola infecciosa",
      "Eritema Infeccioso",
      "Exantema Súbito",
      "Rubéola"
    ],
    "correctAnswer": 1,
    "explanation": "Criança em idade escolar com pródromo leve e exantema que começa como eritema intenso nas bochechas (\"face esbofeteada\") e depois se estende como exantema maculopapular rendilhado para tronco e membros: eritema infeccioso (quinta doença), causado pelo parvovírus B19.\n\nO exantema pode reaparecer com calor, sol ou exercício. Quando surge a erupção, a criança já não transmite. Atenção para gestantes (hidropisia fetal) e pacientes com anemia hemolítica (crise aplástica).",
    "commentary": "Roséola (A) e exantema súbito (C): são a mesma doença (HHV-6), em lactentes de 6 meses a 2 anos: febre alta por 3 dias e, quando a febre cede, exantema no tronco.\n\nRubéola (D): exantema rosado craniocaudal, com linfadenopatia retroauricular e occipital, sem face esbofeteada.",
    "reference": "SBP — Doenças exantemáticas / Nelson Textbook of Pediatrics",
    "tags": [
      "eritema infeccioso",
      "parvovírus B19",
      "doenças exantemáticas"
    ],
    "tip": "Face esbofeteada + rendilhado = parvovírus B19 (eritema infeccioso)."
  },
  {
    "id": "hpp2026-54",
    "topography": "3.1",
    "topic": "Doença celíaca",
    "module": "Pediatria",
    "text": "Uma menina de 7 anos é levada ao consultório devido a queixas de dor abdominal crônica, diarreia frequente e perda de peso não intencional. A mãe relata que a criança teve crescimento abaixo do esperado para a idade e apresenta um abdômen distendido. Durante o exame físico, notam-se sinais de deficiência nutricional, como palidez e fraqueza muscular. Os exames laboratoriais mostram anemia microcítica e a presença de anticorpos anti transglutaminase tecidual elevados. Qual é o diagnóstico mais provável para essa criança?",
    "options": [
      "Doença de Crohn",
      "Intolerância à lactose",
      "Doença celíaca",
      "Síndrome do intestino irritável"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com diarreia crônica, distensão abdominal, perda de peso, déficit de crescimento e anemia (ferropriva, por má absorção duodenal de ferro), com antitransglutaminase tecidual IgA elevado: doença celíaca.\n\nA confirmação é feita com biópsia duodenal (atrofia vilositária, hiperplasia de criptas, linfócitos intraepiteliais), salvo em crianças que preenchem critérios da ESPGHAN para dispensá-la (anti-tTG > 10x o limite + antiendomísio positivo). O tratamento é a dieta sem glúten por toda a vida.",
    "commentary": "Doença de Crohn (A): pode causar dor, diarreia e déficit de crescimento, mas o anti-tTG não é marcador; haveria lesões perianais, aftas ou marcadores inflamatórios.\n\nIntolerância à lactose (B): diarreia osmótica e distensão após laticínios, sem déficit de crescimento, anemia ou autoanticorpos.\n\nSíndrome do intestino irritável (D): diagnóstico funcional; não cursa com perda de peso, anemia e déficit de crescimento (sinais de alarme).",
    "reference": "ESPGHAN 2020 — Guidelines for diagnosing coeliac disease / SBP",
    "tags": [
      "doença celíaca",
      "antitransglutaminase",
      "diarreia crônica",
      "déficit de crescimento"
    ],
    "tip": "Diarreia crônica + baixa estatura + anemia + anti-tTG alto = doença celíaca."
  },
  {
    "id": "hpp2026-55",
    "topography": "11",
    "topic": "Desnutrição",
    "module": "Pediatria",
    "text": "Um menino de 5 anos é trazido ao consultório por apresentar fadiga, irritabilidade e hematomas espontâneos. Ao exame físico, a mãe nota que ele tem gengivas inchadas e sangrantes, além de algumas lesões pontuais na pele. A criança tem uma dieta restrita, com baixa ingestão de frutas e vegetais. Qual é a deficiência vitamínica mais provável que está causando esses sintomas?",
    "options": [
      "Hipovitaminose A",
      "Hipovitaminose K",
      "Hipovitaminose D",
      "Hipovitaminose C"
    ],
    "correctAnswer": 3,
    "explanation": "Criança com dieta pobre em frutas e vegetais, gengivas edemaciadas e sangrantes, petéquias e hematomas espontâneos, irritabilidade e fadiga: escorbuto, por deficiência de vitamina C.\n\nA vitamina C é cofator da hidroxilação de prolina e lisina na síntese de colágeno; sem ela, os vasos e a gengiva ficam frágeis. Também podem ocorrer dor óssea, pseudoparalisia e hemorragia subperiosteal.",
    "commentary": "Hipovitaminose A (A): cegueira noturna, xeroftalmia e manchas de Bitot.\n\nHipovitaminose K (B): sangramentos por déficit de fatores de coagulação (II, VII, IX, X), com TP alargado, mas sem gengivite hipertrófica; associada a má absorção ou uso de antibióticos.\n\nHipovitaminose D (C): raquitismo (deformidades ósseas, alargamento de punhos, rosário raquítico).",
    "reference": "SBP — Deficiências de micronutrientes / Nelson Textbook of Pediatrics",
    "tags": [
      "escorbuto",
      "vitamina C",
      "deficiências vitamínicas"
    ],
    "tip": "Gengiva que sangra + petéquias + pouca fruta = escorbuto."
  },
  {
    "id": "hpp2026-56",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Uma criança de 2 anos é levada ao consultório para uma avaliação de rotina. Os pais estão preocupados porque perceberam que os dentes de leite da criança não parecem estar se desenvolvendo normalmente. Durante a consulta, a criança apresenta os seguintes dentes decíduos: incisivos centrais superiores e inferiores, incisivos laterais superiores e inferiores, e primeiro molar inferior. Nenhum outro dente decíduo está presente. Qual é a fase da dentição que esta criança está apresentando?",
    "options": [
      "Fase de erupção dentária primária.",
      "Fase de dentição mista.",
      "Fase de dentição permanente.",
      "Fase de erupção dos dentes de leite."
    ],
    "correctAnswer": 0,
    "explanation": "A dentição decídua (20 dentes) começa a erupcionar por volta dos 6 meses e se completa entre 2,5 e 3 anos. Aos 2 anos, ter incisivos e primeiros molares, sem nenhum dente permanente, é compatível com a fase em que os dentes decíduos ainda estão erupcionando.\n\nO gabarito considera correta a denominação técnica \"fase de erupção dentária primária\".",
    "commentary": "Dentição mista (B): começa por volta dos 6 anos, com a erupção do primeiro molar permanente e troca dos incisivos.\n\nDentição permanente (C): após a troca de todos os decíduos, por volta dos 12 anos.\n\nErupção dos dentes de leite (D): \"dentes de leite\" é sinônimo de dentição decídua/primária; a alternativa descreve a mesma fase com termo leigo. A banca preferiu a nomenclatura técnica de A.",
    "reference": "SBP — Saúde bucal na infância / Manual de Odontopediatria",
    "tags": [
      "erupção dentária",
      "dentição decídua",
      "puericultura"
    ],
    "tip": "Decídua: 6 meses a 3 anos. Mista: 6 a 12 anos. Permanente: após 12 anos.",
    "alsoAccepted": [
      3
    ],
    "alert": "Gabarito discutível: A e D descrevem a mesma fase (dentição primária = dentes de leite). A banca considerou apenas A, pela terminologia técnica. Neste simulado, a alternativa D também é aceita como correta."
  },
  {
    "id": "hpp2026-57",
    "topography": "11",
    "topic": "Obesidade infantil",
    "module": "Pediatria",
    "text": "Uma criança de 8 anos é trazida à consulta por seus pais devido a preocupações com o aumento de peso. Os pais relatam que a criança ganhou 6 kg nos últimos 6 meses e atualmente pesa 40 kg, com altura de 1,20 m. O exame físico revela um índice de massa corporal (IMC) acima do percentil 95 para a idade, além de acúmulo de gordura abdominal e dificuldade em realizar atividades físicas. A história da família mostra antecedentes de obesidade em ambos os pais. Qual é o diagnóstico mais provável para essa criança?",
    "options": [
      "Síndrome de Cushing",
      "Hipotireoidismo",
      "Diabetes tipo 1",
      "Obesidade Exógena"
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 8 anos com IMC acima do percentil 95 (obesidade), estatura normal para a idade (1,20 m), gordura abdominal e pais obesos, sem outros sinais: obesidade exógena (primária, nutricional), de longe a causa mais comum.\n\nUm dado importante para diferenciar das causas endócrinas é a estatura: na obesidade exógena a criança costuma ter estatura normal ou alta, enquanto nas causas endócrinas (Cushing, hipotireoidismo, deficiência de GH) há baixa estatura ou desaceleração do crescimento.",
    "commentary": "Síndrome de Cushing (A): ganho de peso com baixa estatura/parada de crescimento, estrias violáceas, face de lua cheia e hipertensão.\n\nHipotireoidismo (B): ganho de peso discreto, com baixa velocidade de crescimento, constipação e pele seca.\n\nDiabetes tipo 1 (C): cursa com perda de peso, poliúria e polidipsia.",
    "reference": "SBP — Manual de orientação: obesidade na infância e adolescência (2019)",
    "tags": [
      "obesidade infantil",
      "obesidade exógena",
      "IMC pediátrico"
    ],
    "tip": "Criança obesa e alta = exógena. Obesa e baixa = pense em causa endócrina."
  },
  {
    "id": "hpp2026-58",
    "module": "Pediatria",
    "text": "Um adolescente de 15 anos é apresentado ao departamento de emergência com queixas de febre, mal-estar geral e erupção cutânea que começou nas mucosas e rapidamente se espalhou pela pele. Ao exame físico, observa-se a presença de lesões vesiculares e eritematosas, com descamação difusa nas áreas afetadas. O paciente também relata dor ocular e dificuldade para engolir. A história médica revela que ele começou a tomar um novo medicamento antibiótico há uma semana. Qual é a condição mais provável que esse paciente está apresentando?",
    "options": [
      "Síndrome de Stevens-Johnson",
      "Psoríase",
      "Dermatite Atópica",
      "Eritema multiforme"
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente que, uma semana após iniciar antibiótico, apresenta febre, mal-estar e lesões que começam nas mucosas (dor ocular, odinofagia) e se espalham pela pele com vesículas e descamação: síndrome de Stevens-Johnson (SSJ), reação grave a medicamento com necrose epidérmica.\n\nOs principais desencadeantes são sulfonamidas, anticonvulsivantes aromáticos, alopurinol e alguns antibióticos (betalactâmicos). A conduta é suspender o fármaco e dar suporte, idealmente em unidade de queimados ou UTI.",
    "commentary": "Psoríase (B): placas eritematodescamativas crônicas, sem febre nem acometimento de mucosas.\n\nDermatite atópica (C): eczema pruriginoso crônico, sem relação aguda com medicação.\n\nEritema multiforme (D): lesões em alvo típicas, predominando em extremidades, com acometimento mucoso discreto ou ausente; geralmente associado ao herpes simples, e não a fármacos.",
    "reference": "SBD — Farmacodermias graves / Fitzpatrick's Dermatology",
    "tags": [
      "síndrome de Stevens-Johnson",
      "farmacodermias",
      "reação adversa a medicamentos"
    ],
    "tip": "Droga nova + febre + mucosas + descolamento de pele = Stevens-Johnson."
  },
  {
    "id": "hpp2026-59",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Um lactente de 6 meses é levado ao pronto-socorro devido a um quadro de tosse persistente, sibilância e dificuldade respiratória que se iniciou há três dias. Os pais relatam que a criança teve febre baixa e secreção nasal antes do início dos sintomas respiratórios. Ao exame físico, nota-se taquipneia, uso de músculos acessórios da respiração e estertores e sibilos difusos à ausculta pulmonar. Qual é o diagnóstico mais provável para essa criança?",
    "options": [
      "Pneumonia Viral",
      "Asma",
      "Bronquiolite viral aguda",
      "Laringite"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 6 meses (menor de 2 anos) com pródromo viral (febre baixa e coriza) seguido de tosse, sibilância, taquipneia, tiragem e estertores e sibilos difusos: bronquiolite viral aguda, primeiro episódio de sibilância, causada principalmente pelo vírus sincicial respiratório.\n\nO tratamento é de suporte (oxigênio se SpO₂ < 90–92%, hidratação, lavagem nasal); broncodilatadores e corticoides não estão indicados de rotina.",
    "commentary": "Pneumonia viral (A): pode ter estertores, mas o padrão de sibilância difusa após coriza em lactente define bronquiolite.\n\nAsma (B): o diagnóstico exige episódios recorrentes de sibilância; um primeiro episódio viral em lactente de 6 meses é bronquiolite.\n\nLaringite (D): estridor inspiratório, tosse ladrante e rouquidão, sem sibilos difusos.",
    "reference": "SBP — Diretrizes para o manejo da infecção causada pelo VSR / AAP 2014 — Bronchiolitis",
    "tags": [
      "bronquiolite viral aguda",
      "vírus sincicial respiratório",
      "sibilância"
    ],
    "tip": "Menor de 2 anos + coriza → primeira sibilância = bronquiolite. Tratamento é suporte."
  },
  {
    "id": "hpp2026-60",
    "topography": "10",
    "topic": "Toxoplasmose",
    "module": "Pediatria",
    "text": "Quais as características da Tétrade de Sabin?",
    "options": [
      "Micro ou Hidrocefalia, Coriorretinite Bilateral, Retardo Mental e Calcificação Intracraniana Generalizada.",
      "Hidrocefalia, Coriorretinite Unilateral, Retardo Mental e Calcificação Intracraniana Periventricular.",
      "Microcefalia, Estrabismo, Hepatomegalia e Calcificação Intracraniana Generalizada.",
      "Micro ou Hidrocefalia, Estrabismo, Coriorretinite Bilateral e Calcificação Intracraniana Generalizada."
    ],
    "correctAnswer": 0,
    "explanation": "A tétrade de Sabin resume a toxoplasmose congênita clássica: alterações do volume craniano (hidrocefalia ou microcefalia), coriorretinite (frequentemente bilateral), calcificações intracranianas difusas e comprometimento neurológico (retardo do desenvolvimento/convulsões).\n\nA alternativa A reúne os quatro elementos.",
    "commentary": "Coriorretinite unilateral e calcificações periventriculares (B): calcificações periventriculares são típicas do citomegalovírus; na toxoplasmose são difusas.\n\nEstrabismo e hepatomegalia (C): podem ocorrer, mas não fazem parte da tétrade.\n\nEstrabismo no lugar do retardo mental (D): o estrabismo não integra a tétrade.",
    "reference": "Ministério da Saúde — Protocolo de notificação e investigação: toxoplasmose gestacional e congênita / SBP",
    "tags": [
      "toxoplasmose congênita",
      "tétrade de Sabin",
      "infecções congênitas"
    ],
    "tip": "Sabin: hidro/microcefalia + coriorretinite + calcificações difusas + retardo. Periventricular = CMV."
  },
  {
    "id": "hpp2026-61",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "A adequada orientação sobre anticoncepção é de fundamental importância para o médico na atenção à saúde da mulher. De acordo com o U.S. Medical Eligibility Criteria for Contraceptive Use, 2024 é correto afirmar:",
    "options": [
      "A enxaqueca menstrual é um subtipo de enxaqueca sem aura e não contraindica o uso de contraceptivo oral combinado.",
      "Pacientes com Esclerose múltipla possuem contraindicação ao uso de injetável trimestral de medroxiprogesterona.",
      "Implante de progestágeno é considerado Categoria 3 antes de 21 dias após o parto para mulheres em aleitamento materno.",
      "Para pacientes com cirurgia bariátrica, os contraceptivos orais combinados são considerados categoria 4 – contraindicação absoluta."
    ],
    "correctAnswer": 0,
    "explanation": "Pelos critérios de elegibilidade do CDC (US MEC 2024), a enxaqueca sem aura é categoria 2 para os contraceptivos hormonais combinados (vantagens superam riscos). A enxaqueca menstrual pura é uma forma de enxaqueca sem aura, ligada à queda estrogênica do período menstrual; por isso não contraindica a pílula combinada.\n\nA contraindicação absoluta (categoria 4) é a enxaqueca com aura, pelo risco aumentado de AVC isquêmico.",
    "commentary": "Esclerose múltipla e injetável trimestral (B): a esclerose múltipla não contraindica o acetato de medroxiprogesterona (categoria 1, ou 2 se houver imobilidade prolongada, pela perda de massa óssea).\n\nImplante antes de 21 dias pós-parto em lactantes (C): é categoria 2 (pelo MEC 2024, os métodos só de progestágeno são categoria 1–2 no puerpério); categoria 3 cabe aos combinados nesse período.\n\nCirurgia bariátrica e pílula combinada (D): após procedimentos disabsortivos a pílula é categoria 3 (pode falhar por má absorção), não categoria 4; após procedimentos restritivos, categoria 1.",
    "reference": "CDC — U.S. Medical Eligibility Criteria for Contraceptive Use, 2024",
    "tags": [
      "contracepção",
      "critérios de elegibilidade",
      "enxaqueca",
      "contraceptivo oral combinado"
    ],
    "tip": "Enxaqueca com aura = categoria 4 para estrogênio. Sem aura (inclusive menstrual) = categoria 2."
  },
  {
    "id": "hpp2026-62",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 22 anos procura o atendimento com desejo de usar um DIU de Cobre. Sobre este método contraceptivo é correto afirmar de acordo com o U.S. Medical Eligibility Criteria for Contraceptive Use, 2024:",
    "options": [
      "A endometriose é uma contraindicação absoluta para o seu uso visto que está associada a cólicas menstruais.",
      "A presença de neoplasia intraepitelial cervical contraindica formalmente o método (categoria 4).",
      "Paciente com vaginose bacteriana são classificadas como categoria 2 (vantagens geralmente superam os riscos).",
      "Pacientes que receberam transplantes de órgãos possuem contraindicação absoluta para o uso do DIU de cobre."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo US MEC 2024, vaginite (incluindo vaginose bacteriana e tricomoníase) é categoria 2 para a inserção do DIU de cobre: as vantagens superam os riscos e o tratamento da infecção pode ser feito sem adiar o método.",
    "commentary": "Endometriose (A): categoria 1 para o DIU de cobre; o dispositivo pode aumentar cólicas, mas não é contraindicado.\n\nNeoplasia intraepitelial cervical (B): categoria 1; contraindicação é o câncer de colo aguardando tratamento (categoria 4 para inserção).\n\nTransplante de órgão sólido (D): categoria 2 se não complicado e 3 se complicado (rejeição, falência do enxerto); nunca categoria 4.",
    "reference": "CDC — U.S. Medical Eligibility Criteria for Contraceptive Use, 2024",
    "tags": [
      "DIU de cobre",
      "contracepção",
      "critérios de elegibilidade",
      "vaginose bacteriana"
    ],
    "tip": "DIU de cobre: categoria 4 em gestação, DIP/cervicite purulenta atual, sangramento não explicado e câncer de colo/endométrio."
  },
  {
    "id": "hpp2026-63",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "É de fundamental importância que o médico saiba quando a paciente possui uma contraindicação absoluta ao uso de contraceptivo (categoria 4). É correto afirmar de acordo com o U.S. Medical Eligibility Criteria for Contraceptive Use, 2024:",
    "options": [
      "Doença cardíaca valvar é contraindicação absoluta para o uso de pílula combinada, mesmo que não complicada.",
      "Pacientes em uso de antiretrovirais possuem contra-indicação absoluta ao uso de contraceptivos combinados.",
      "Pacientes com câncer de mama atual têm contraindicação absoluta ao dispositivo intrauterino com levonorgestrel.",
      "Diabetes há mais de 20 anos constitui contraindicação absoluta ao uso de injetável trimestral."
    ],
    "correctAnswer": 2,
    "explanation": "O câncer de mama atual é categoria 4 para todos os métodos hormonais — combinados e de progestágeno isolado, incluindo o SIU de levonorgestrel —, pois é um tumor hormônio-sensível. Nessas pacientes, o DIU de cobre é a opção preferida.",
    "commentary": "Valvopatia não complicada (A): categoria 2 para combinados; só a valvopatia complicada (hipertensão pulmonar, risco de FA, endocardite prévia) é categoria 4.\n\nAntirretrovirais (B): a maioria é categoria 1–2 para combinados; há interações com alguns esquemas, sem contraindicação absoluta.\n\nDiabetes com mais de 20 anos e injetável trimestral (D): é categoria 3 para o injetável (e para combinados é 3/4), não categoria 4.",
    "reference": "CDC — U.S. Medical Eligibility Criteria for Contraceptive Use, 2024",
    "tags": [
      "contracepção",
      "câncer de mama",
      "SIU de levonorgestrel",
      "critérios de elegibilidade"
    ],
    "tip": "Câncer de mama atual: nada hormonal. DIU de cobre."
  },
  {
    "id": "hpp2026-64",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "O Ministério da Saúde implantará novas diretrizes para o rastreamento do câncer do colo do útero, tendo sido aprovada no final de julho de 2025 as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero: Parte I - Rastreamento Organizado Utilizando Testes Moleculares para Detecção De DNA-HPV Oncogênico. De acordo com essas novas diretrizes é correto afirmar:",
    "options": [
      "Se na pesquisa de HPV for detectado o tipo 16 ou 18 a paciente é encaminhada diretamente para colposcopia.",
      "A faixa etária de rastreamento baixou o início dos exames para os 21 anos, contrastando com a recomendação anterior de iniciar aos 25 anos.",
      "A idade para parar o rastreamento foi fixada em 70 anos nas pacientes que não possuem mais relação sexual.",
      "Se detectado HPV de baixo risco oncogênico no rastreamento, indica-se citologia seguida da colposcopia."
    ],
    "correctAnswer": 0,
    "explanation": "As Diretrizes Brasileiras de 2025 adotam o teste de DNA-HPV oncogênico como método primário de rastreamento, de 25 a 64 anos, a cada 5 anos se negativo.\n\nSe o teste detecta HPV 16 ou 18 (tipos de maior risco), a mulher vai direto para colposcopia. Se detecta outros tipos de alto risco, faz-se citologia reflexa (no mesmo material) para decidir entre colposcopia e repetição do teste em 1 ano.",
    "commentary": "Início aos 21 anos (B): o rastreamento continua começando aos 25 anos.\n\nParar aos 70 anos sem vida sexual (C): o rastreamento termina aos 64 anos para quem tem testes negativos; a ausência de atividade sexual não é critério.\n\nHPV de baixo risco (D): o teste rastreia apenas tipos oncogênicos (alto risco); tipos de baixo risco (6 e 11, de verrugas) não fazem parte do rastreamento.",
    "reference": "Ministério da Saúde/INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero: Parte I (2025)",
    "tags": [
      "rastreamento",
      "câncer de colo uterino",
      "teste DNA-HPV",
      "colposcopia"
    ],
    "tip": "DNA-HPV: 16/18 → colposcopia direto; outros alto risco → citologia reflexa."
  },
  {
    "id": "hpp2026-65",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher residente em Curitiba, com 25 anos vem para mostrar o resultado do seu primeiro exame de rastreamento do câncer de colo uterino. Está correto de acordo com a Linha Guia de Cuidado do Câncer do Colo do Útero da Secretaria Municipal da Saúde de Curitiba 2025:",
    "options": [
      "Se o resultado for de Lesão intraepitelial de baixo grau deve ser encaminhadas para telerregulação de Patologia Cervical/Colposcopia.",
      "Se o resultado mostrar atipias de significado indeterminado em células glandulares deve repetir o citopatológico em 6 meses.",
      "Se com resultado mostrar células atípicas de origem indefinida deve-se repetir o citopatológico em 3 meses.",
      "Se o resultado indicar carcinoma escamoso invasor deve ser encaminhada para colposcopia."
    ],
    "correctAnswer": 0,
    "explanation": "Pela Linha Guia de Cuidado do Câncer do Colo do Útero da SMS de Curitiba (2025), a lesão intraepitelial de baixo grau (LSIL) na mulher em idade de rastreamento é encaminhada pela telerregulação para o ambulatório de Patologia Cervical/Colposcopia.\n\nO protocolo municipal é mais intervencionista que a diretriz nacional anterior do INCA, que propunha repetir a citologia em 6 meses para LSIL a partir dos 25 anos.",
    "commentary": "Atipias em células glandulares (B): têm alto risco de lesão de alto grau ou adenocarcinoma e vão para colposcopia com avaliação do canal, não repetição em 6 meses.\n\nCélulas atípicas de origem indefinida (C): também exigem colposcopia, não repetição em 3 meses.\n\nCarcinoma invasor (D): encaminhamento prioritário para serviço de oncologia/ginecologia oncológica para confirmação e estadiamento, não colposcopia de rotina.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Linha Guia de Cuidado do Câncer do Colo do Útero (2025)",
    "tags": [
      "câncer de colo uterino",
      "citopatológico",
      "LSIL",
      "protocolo municipal"
    ],
    "tip": "Curitiba 2025: LSIL vai para colposcopia via telerregulação."
  },
  {
    "id": "hpp2026-66",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "O conhecimento sobre o sistema de saúde onde o médico atua é importante para adequado atendimento à população. Segundo a linha de Cuidado do Câncer de Mama 2024 da SMS de Curitiba é correto afirmar:",
    "options": [
      "O rastreamento do câncer de mama deve iniciar pelo exame clínico das mamas por apresentar benefício bem estabelecido, sendo obrigatório antes da mamografia.",
      "Mulheres com próteses ou implantes mamários há mais de 1 ano devem fazer o rastreamento do câncer de mama com ultrassonografia mamária.",
      "A mamografia de rastreamento expõe a mulher a alguns riscos, tais como resultados falso positivos ou falso-negativos.",
      "A Central de Teleatendimento Saúde Já Curitiba oferece agendamento de mamografia para mulheres de qualquer idade residentes em Curitiba."
    ],
    "correctAnswer": 2,
    "explanation": "Todo rastreamento tem riscos além dos benefícios, e a Linha de Cuidado do Câncer de Mama de Curitiba (2024) destaca isso: resultados falso-positivos (ansiedade, exames e biópsias desnecessários), falso-negativos (falsa segurança), sobrediagnóstico e sobretratamento, e exposição à radiação.\n\nA alternativa C é a correta.",
    "commentary": "Exame clínico obrigatório antes da mamografia (A): o exame clínico das mamas não tem benefício bem estabelecido como rastreamento isolado e não é pré-requisito para a mamografia.\n\nUltrassonografia em quem tem prótese (B): mulheres com implantes fazem mamografia (com a manobra de Eklund); a ultrassonografia é complementar.\n\nAgendamento para qualquer idade (D): o rastreamento organizado segue faixa etária e periodicidade definidas, não é aberto a qualquer idade.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Linha de Cuidado do Câncer de Mama (2024) / INCA",
    "tags": [
      "rastreamento",
      "câncer de mama",
      "mamografia",
      "sobrediagnóstico"
    ],
    "tip": "Rastreamento tem riscos: falso-positivo, falso-negativo e sobrediagnóstico."
  },
  {
    "id": "hpp2026-67",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Algumas mulheres possuem indicação de tratamento de doença inflamatória pélvica em nível hospitalar. Assinale a alternativa que inclui critério para indicar tratamento hospitalar da DIP de acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis do Ministério da Saúde, 2022:",
    "options": [
      "Dor pélvica e à mobilização de anexos ao toque bimanual.",
      "Associação de infecção do trato urinário baixo.",
      "Colo friável e sangrante ao toque com espátula de Ayre.",
      "Ausência de resposta clínica após 72 horas do início do tratamento com antibioticoterapia oral."
    ],
    "correctAnswer": 3,
    "explanation": "O PCDT de IST (2022) lista os critérios para tratar a DIP em regime hospitalar: abscesso tubo-ovariano, gestação, ausência de resposta clínica após 72 horas de antibiótico oral, intolerância ao tratamento oral, estado geral grave (náuseas, vômitos, febre alta), dificuldade de excluir emergência cirúrgica (apendicite, gravidez ectópica) e imunodeficiência.\n\nA falha após 72 horas de tratamento oral é critério de internação.",
    "commentary": "Dor pélvica e à mobilização de anexos (A): são critérios diagnósticos da DIP, não de gravidade.\n\nITU baixa associada (B): não é critério de internação.\n\nColo friável e sangrante (C): sinal de cervicite, também usado no diagnóstico, não indica tratamento hospitalar.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "doença inflamatória pélvica",
      "infecções sexualmente transmissíveis",
      "critérios de internação"
    ],
    "tip": "DIP interna: abscesso, gestação, sem melhora em 72 h, não tolera VO, grave ou dúvida cirúrgica."
  },
  {
    "id": "hpp2026-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a fisiologia do ciclo menstrual é correto afirmar:",
    "options": [
      "Na fase folicular tardia os pulsos de GnRH aumentam a frequência e amplitude e na fase lútea ocorre prolongamento progressivo dos pulsos.",
      "O aumento da frequência de pulsos de GnRH diminui a secreção de LH e aumenta o FSH.",
      "As endorfinas estimulam a secreção de gonadotrofinas e tem seus níveis máximos durante a menstruação.",
      "A neuro-hipófise, traduz-se em um prolongamento do hipotálamo e é responsável pela produção de LH e FSH."
    ],
    "correctAnswer": 0,
    "explanation": "O GnRH é liberado em pulsos, e a frequência deles modula as gonadotrofinas. Na fase folicular, o estradiol crescente aumenta frequência e amplitude dos pulsos (pulsos rápidos favorecem LH, culminando no pico pré-ovulatório). Na fase lútea, a progesterona torna os pulsos progressivamente mais lentos (intervalos mais longos).\n\nA alternativa A descreve essa dinâmica.",
    "commentary": "Pulsos frequentes diminuem LH e aumentam FSH (B): é o contrário — pulsos rápidos favorecem LH; pulsos lentos favorecem FSH.\n\nEndorfinas estimulam gonadotrofinas (C): os opioides endógenos inibem o GnRH e têm níveis maiores na fase lútea, não na menstruação.\n\nNeuro-hipófise produz LH e FSH (D): LH e FSH são produzidos pela adeno-hipófise; a neuro-hipófise armazena e libera ocitocina e ADH produzidos no hipotálamo.",
    "reference": "Speroff — Endocrinologia ginecológica clínica e infertilidade / FEBRASGO",
    "tags": [
      "ciclo menstrual",
      "GnRH",
      "fisiologia reprodutiva",
      "gonadotrofinas"
    ],
    "tip": "GnRH rápido → LH; GnRH lento → FSH. Progesterona deixa os pulsos lentos."
  },
  {
    "id": "hpp2026-69",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que contém o tratamento recomendado para tratamento hospitalar de doença inflamatória pélvica pelo Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis do Ministério da Saúde, 2022:",
    "options": [
      "Ceftriaxona Intramuscular + Doxicilina oral + Metronidazol oral.",
      "Clindamicina endovenosa + Ampicilina/Sulbactam endovenosa.",
      "Ceftriaxona endovenosa + Doxiciclina oral + Metronidazol endovenosa.",
      "Gentamicina intramuscular+ Azitromicina endovenosa + Doxiciclina oral."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo PCDT de IST (2022), o esquema de primeira escolha para DIP no regime hospitalar é ceftriaxona 1 g IV 1x/dia por 14 dias + doxiciclina 100 mg VO 12/12 h por 14 dias + metronidazol 400 mg IV 12/12 h.\n\nO esquema cobre gonococo, clamídia e anaeróbios. A doxiciclina pode ser dada por via oral mesmo na internação, pela boa biodisponibilidade.",
    "commentary": "Ceftriaxona IM + doxiciclina + metronidazol orais (A): é o esquema ambulatorial (ceftriaxona 500 mg IM dose única).\n\nClindamicina + ampicilina/sulbactam (B): não é o esquema do protocolo; a alternativa listada é clindamicina + gentamicina, e ampicilina/sulbactam se associa à doxiciclina.\n\nGentamicina IM + azitromicina IV + doxiciclina (D): combinação que não corresponde a nenhum esquema recomendado.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "doença inflamatória pélvica",
      "antibioticoterapia",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "DIP hospitalar (PCDT): ceftriaxona EV + doxiciclina VO + metronidazol EV."
  },
  {
    "id": "hpp2026-70",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Para o tratamento das lesões por HPV é correto afirmar de acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis do Ministério da Saúde, 2022:",
    "options": [
      "A podofilotoxina tem absorção sistêmica baixa, podendo ser recomendada como tratamento domiciliar.",
      "O Ácido tricloroacético pode ser usado na gestação e é indicado para uso domiciliar devido à facilidade de uso.",
      "A podofilina pode ser usada em casa pela própria paciente, sendo indicada para grávidas.",
      "O imiquimode pode ser indicado para aplicação pela paciente em nível domiciliar em lesões uretrais e vaginais."
    ],
    "correctAnswer": 0,
    "explanation": "Para verrugas anogenitais (HPV), o PCDT de 2022 divide os tratamentos em aplicados pelo paciente em casa e realizados pelo profissional. A podofilotoxina 0,15% em creme tem baixa absorção sistêmica e pode ser autoaplicada em domicílio (ciclos de 3 dias com 4 de pausa), sendo contraindicada na gestação.\n\nA alternativa A está correta.",
    "commentary": "Ácido tricloroacético domiciliar (B): pode ser usado na gestação, mas é aplicado pelo profissional no serviço, pelo risco de queimadura química.\n\nPodofilina em casa e na gestação (C): a podofilina (resina 10–25%) é aplicada pelo profissional e é contraindicada na gestação, por toxicidade.\n\nImiquimode em uretra e vagina (D): o imiquimode é de uso domiciliar em pele genital e perianal, não sendo indicado para lesões de mucosa (uretra, vagina, colo, ânus interno).",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "HPV",
      "verrugas anogenitais",
      "condiloma acuminado",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Em casa: podofilotoxina e imiquimode (pele). No serviço: ATA (pode na gestação), crioterapia, cirurgia."
  },
  {
    "id": "hpp2026-71",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "As cardiopatias congênitas estão entre as maiores causa de mortalidade neonatal no Brasil. Segundo o protocolo de Pré-Natal Mãe Curitibana Vale A Vida 2025 são indicações para realização de ecocardiografia fetal:",
    "options": [
      "Arritmias cardíacas, alterações do líquido amniótico, gestação gemelar dicoriônica.",
      "Hipotireoidismo, sífilis materna, transluscência nucal entre 1,5 e 3 mm.",
      "Alcoolismo, hipertireoidismo e hipertensão arterial sistêmica.",
      "Todas as pacientes devem realizar ecocardiografia fetal."
    ],
    "correctAnswer": 2,
    "explanation": "O Protocolo de Pré-Natal Mãe Curitibana Vale a Vida (2025) lista indicações maternas e fetais de ecocardiografia fetal. Entre as maternas estão exposição a teratógenos (como o álcool), doenças que afetam o coração fetal (diabetes pré-gestacional, doenças tireoidianas como o hipertireoidismo, doenças autoimunes com anti-Ro) e hipertensão arterial sistêmica.\n\nA alternativa C reúne três indicações do protocolo.",
    "commentary": "Arritmias, líquido amniótico e gemelar dicoriônica (A): a gestação gemelar que indica ecocardiograma é a monocoriônica, não a dicoriônica.\n\nHipotireoidismo, sífilis e TN 1,5–3 mm (B): translucência nucal nessa faixa é normal; a indicação é TN aumentada (geralmente ≥ 3,5 mm).\n\nTodas as gestantes (D): o exame é seletivo, para gestações com fatores de risco; no restante, o rastreio cardíaco é feito no ultrassom morfológico.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Protocolo Pré-Natal Mãe Curitibana Vale a Vida (2025)",
    "tags": [
      "pré-natal",
      "ecocardiografia fetal",
      "cardiopatias congênitas",
      "protocolo municipal"
    ],
    "tip": "Gêmeos monocoriônicos (não dicoriônicos) e TN aumentada indicam eco fetal."
  },
  {
    "id": "hpp2026-72",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre o cuidado pré-natal da parceria sexual da gestante está correto segundo o Protocolo de Pré-Natal Mãe Curitibana Vale a Vida 2025:",
    "options": [
      "Encaminhamento para os cuidados da Urologia.",
      "Avaliação do IMC em Pressão arterial em cada consulta.",
      "Solicitar colesterol total, frações e triglicerídeos, quando acima dos 20 anos.",
      "Oferecer exame de biologia molecular para rastreamento de clamídia."
    ],
    "correctAnswer": 2,
    "explanation": "O pré-natal do parceiro, previsto no protocolo Mãe Curitibana Vale a Vida (2025), aproveita o momento para cuidar da saúde do homem na Atenção Primária: testes rápidos de HIV, sífilis e hepatites, atualização vacinal e exames de rotina conforme a idade, incluindo perfil lipídico (colesterol total, frações e triglicerídeos) a partir dos 20 anos.\n\nA alternativa C reproduz o protocolo.",
    "commentary": "Encaminhar à urologia (A): o cuidado é feito na Atenção Primária; especialista apenas quando houver indicação específica.\n\nIMC e PA em cada consulta (B): são avaliados no atendimento do parceiro, mas o protocolo não exige medida a cada consulta, como na gestante.\n\nBiologia molecular para clamídia (D): não está entre os exames de rotina do parceiro no protocolo; o rastreio é feito com testes rápidos.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Protocolo Pré-Natal Mãe Curitibana Vale a Vida (2025) / Guia do Pré-Natal do Parceiro (MS)",
    "tags": [
      "pré-natal do parceiro",
      "saúde do homem",
      "protocolo municipal"
    ],
    "tip": "Pré-natal do parceiro: testes rápidos, vacinas e perfil lipídico acima de 20 anos."
  },
  {
    "id": "hpp2026-73",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a estratificação de risco no pré-natal é correto afirmar de acordo o Protocolo de Pré Natal Mãe Curitibana Vale a Vida 2025:",
    "options": [
      "Pacientes com hipotireoidismo são classificadas como gestação de médio risco.",
      "Adolescente de 14 anos é considerada gestante de baixo risco.",
      "Paciente com Lesão de alto grau no citopatológico é considerada de alto risco.",
      "Paciente com asma moderada é considerada de alto risco."
    ],
    "correctAnswer": 3,
    "explanation": "Na estratificação de risco do Mãe Curitibana Vale a Vida (2025), a asma é classificada pela gravidade: asma leve controlada pode seguir no risco habitual ou intermediário, mas asma moderada ou grave classifica a gestação como alto risco, com acompanhamento em ambulatório especializado.",
    "commentary": "Hipotireoidismo como médio risco (A): pelo protocolo, as doenças da tireoide entram como alto risco.\n\nAdolescente de 14 anos como baixo risco (B): gestantes com menos de 15 anos são de risco intermediário.\n\nLesão de alto grau no citopatológico como alto risco (C): é risco intermediário, com encaminhamento à patologia cervical.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Protocolo Pré-Natal Mãe Curitibana Vale a Vida (2025)",
    "tags": [
      "pré-natal",
      "estratificação de risco gestacional",
      "asma na gestação",
      "protocolo municipal"
    ],
    "tip": "Mãe Curitibana: < 15 anos e lesão de alto grau = intermediário; asma moderada/grave = alto risco."
  },
  {
    "id": "hpp2026-74",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "A avaliação do estado nutricional da gestante deve ser realizada em todas as consultas de pré-natal. Assinale a correta de acordo como o Protocolo de Pré-Natal Mãe Curitibana Vale a Vida 2025:",
    "options": [
      "O acompanhamento do peso da gestante se dá através do gráfico do IMC pela idade gestacional na carteirinha de pré-natal.",
      "Se a paciente passar de IMC 24 kg/m² para 32 kg/m² durante a gestação, troca-se de gráfico para acompanhamento da variação do peso.",
      "Para as pacientes com IMC maior que 40 kg/m² está indicada a perda de peso durante a gestação para melhorar o resultado perinatal.",
      "Para escolha do gráfico de acompanhamento do ganho de peso na gestação leva-se em conta o IMC pré-gestacional."
    ],
    "correctAnswer": 3,
    "explanation": "O ganho de peso na gestação é avaliado pela curva da categoria do estado nutricional definida no início: o IMC pré-gestacional (ou do primeiro trimestre) decide em que gráfico/faixa de ganho a gestante será acompanhada, e ela permanece nessa categoria até o fim.\n\nA alternativa D está correta.",
    "commentary": "Gráfico de IMC por idade gestacional (A): a caderneta traz curva de IMC por semana, mas a afirmação ignora que o acompanhamento depende da categoria inicial; a banca considerou D mais completa.\n\nTrocar de gráfico ao mudar de IMC (B): a categoria não muda durante a gestação; subir de 24 para 32 significa ganho excessivo dentro da curva de eutrófica.\n\nPerda de peso com IMC > 40 (C): não se recomenda emagrecer na gestação; nas obesas, o ganho deve ser pequeno e monitorado.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Protocolo Pré-Natal Mãe Curitibana Vale a Vida (2025) / Caderneta da Gestante (MS)",
    "tags": [
      "pré-natal",
      "ganho de peso gestacional",
      "estado nutricional",
      "protocolo municipal"
    ],
    "tip": "A curva de ganho de peso é escolhida pelo IMC pré-gestacional e não muda depois."
  },
  {
    "id": "hpp2026-75",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "É correto afirmar de acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde 2022:",
    "options": [
      "Durante a rotina pré-natal está indicada a sorologia para citomegalovírus para todas as gestantes nos 3 trimestres.",
      "As gestantes susceptíveis a citomegalovírus devem fazer a vacinação no segundo trimestre.",
      "Não há restrições com relação à amamentação para as mães com infecção por citomegalovírus.",
      "Para as medidas profiláticas na gestação recomenda-se assumir que crianças com menos de 3 anos tenham citomegalovírus na saliva e na urina."
    ],
    "correctAnswer": 3,
    "explanation": "O Manual de Gestação de Alto Risco (MS, 2022) não recomenda rastreio sorológico universal para citomegalovírus. A prevenção se apoia em medidas de higiene: como crianças pequenas (menores de 3 anos, especialmente em creches) eliminam o vírus na saliva e na urina, a gestante deve agir como se elas estivessem infectadas — lavar as mãos após trocar fraldas, não compartilhar talheres e copos, evitar beijo na boca da criança.",
    "commentary": "Sorologia nos três trimestres (A): não há rastreio universal de CMV no pré-natal.\n\nVacina no segundo trimestre (B): não existe vacina licenciada contra o CMV.\n\nNenhuma restrição à amamentação (C): o aleitamento é mantido para recém-nascidos a termo, mas há cuidados em prematuros de muito baixo peso, que podem adquirir doença pelo leite.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "citomegalovírus",
      "infecções na gestação",
      "pré-natal"
    ],
    "tip": "CMV na gestação: sem rastreio e sem vacina; higiene com crianças menores de 3 anos."
  },
  {
    "id": "hpp2026-76",
    "topography": "14",
    "topic": "Emergências obstétricas",
    "module": "Ginecologia e Obstetrícia",
    "text": "São situações clínicas de urgência/emergência obstétrica que devem ser avaliadas em contexto hospitalar de acordo com o Manual de Gestação de Alto Risco 2022:",
    "options": [
      "Vômitos incoercíveis não responsivos ao tratamento e anemia grave (Hb <8,5 g/dl).",
      "Prurido gestacional e Suspeita de pielonefrite.",
      "Idade gestacional de 40 semanas ou mais e sinais premonitórios de eclâmpsia.",
      "Crise hipertensiva e suspeita de trombose venosa superficial."
    ],
    "correctAnswer": 1,
    "explanation": "O Manual de Gestação de Alto Risco (2022) lista as situações que exigem avaliação hospitalar de urgência. Entre elas estão o prurido gestacional (suspeita de colestase intra-hepática, com risco de óbito fetal) e a suspeita de pielonefrite (risco de sepse e de trabalho de parto prematuro, exigindo antibiótico venoso).\n\nAs duas condições da alternativa B estão na lista.",
    "commentary": "Anemia com Hb < 8,5 g/dL (A): a anemia grave que exige avaliação hospitalar é Hb < 7 g/dL (ou sintomática).\n\nIdade gestacional de 40 semanas (C): o critério é IG ≥ 41 semanas.\n\nTrombose venosa superficial (D): o critério é a suspeita de trombose venosa profunda.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "urgências obstétricas",
      "colestase gestacional",
      "pielonefrite na gestação"
    ],
    "tip": "Alto risco 2022: prurido, pielonefrite, Hb < 7, IG ≥ 41 sem, suspeita de TVP → hospital."
  },
  {
    "id": "hpp2026-77",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre Diabetes Gestacional é correto afirmar de acordo como o Manual de Gestação de Alto Risco do Ministério da Saúde 2022:",
    "options": [
      "Gestantes com glicemia de jejum entre 92 e 126 mg/dl devem fazer TOTG entre 24 e 28 semanas.",
      "Gestantes com glicemia de Jejum <92 mg/dl no primeiro trimestre não precisam fazer outro exame durante o pré-natal.",
      "As metas de controle glicêmico incluem a glicemia de jejum <99 mg/dl.",
      "Antes das medidas farmacológicas recomenda-se adequação nutricional e prática de exercício."
    ],
    "correctAnswer": 3,
    "explanation": "No diabetes gestacional, o tratamento começa com medidas não farmacológicas: orientação nutricional individualizada e atividade física regular, com monitorização da glicemia. A terapia farmacológica (insulina como primeira escolha; metformina em situações selecionadas) entra quando as metas não são atingidas em 1–2 semanas.\n\nA alternativa D está correta.",
    "commentary": "Jejum 92–126 mg/dL e TOTG (A): jejum de 92 a 125 mg/dL já fecha o diagnóstico de diabetes gestacional, sem necessidade de TOTG; ≥ 126 é diabetes prévio (overt).\n\nJejum < 92 no 1º trimestre dispensa outros exames (B): essas gestantes devem fazer TOTG 75 g entre 24 e 28 semanas.\n\nMeta de jejum < 99 mg/dL (C): a meta é jejum < 95 mg/dL (1 h pós-prandial < 140 e 2 h < 120).",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / Rastreamento e diagnóstico de DMG no Brasil (OPAS/MS/FEBRASGO/SBD)",
    "tags": [
      "diabetes gestacional",
      "TOTG",
      "metas glicêmicas"
    ],
    "tip": "DMG: jejum 92–125 já é diagnóstico. Meta de jejum < 95. Dieta e exercício primeiro."
  },
  {
    "id": "hpp2026-78",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a anemia por deficiência de ferro é correto afirmar de acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde, 2022:",
    "options": [
      "O ferro parenteral é a via de escolha para gestantes com deficiência de ferro e hemoglobina menor que 9 g/dl durante os 3 trimestres.",
      "A etiologia mais frequente é a cirurgia bariátrica prévia e as parasitoses intestinais.",
      "Os valores da ferritina encontram-se abaixo de 12 mcg/L e ferro sérico abaixo de 60 mg/ml também é compatível com anemia ferropriva.",
      "Para o tratamento da anemia ferropriva está indicada a suplementação rotineira de ferro elementar na dose de 30-40 mg/ dia para todas as gestantes."
    ],
    "correctAnswer": 2,
    "explanation": "Na gestação, a deficiência de ferro é confirmada principalmente pela ferritina baixa (< 12–15 µg/L confirma depleção dos estoques; < 30 µg/L já é sugestiva). O ferro sérico baixo (< 60 µg/dL) também é compatível com ferropenia, apesar de menos específico.\n\nA alternativa C é a correta pelo manual (a unidade \"mg/ml\" do enunciado é um erro de digitação para µg/dL).",
    "commentary": "Ferro parenteral como escolha para Hb < 9 (A): a via oral é a primeira escolha; o parenteral fica para intolerância, falha, má absorção ou necessidade de correção rápida no fim da gestação, evitando-se no primeiro trimestre.\n\nBariátrica e parasitoses como causa mais frequente (B): a causa mais comum é o aumento da demanda de ferro da gestação somado a estoques e ingestão insuficientes.\n\nTratamento com 30–40 mg/dia para todas (D): 30–40 mg de ferro elementar é dose de profilaxia, não de tratamento (que usa doses maiores, em torno de 120–200 mg/dia).",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "anemia ferropriva",
      "gestação",
      "ferritina",
      "suplementação de ferro"
    ],
    "tip": "Ferritina baixa confirma ferropenia. 40 mg/dia é profilaxia, não tratamento."
  },
  {
    "id": "hpp2026-79",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre Herpes Simples Genital na gestação é correto afirmar de acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde, 2022:",
    "options": [
      "O rastreamento sorológico está recomendado para todas as gestantes.",
      "O aleitamento materno não está contraindicado, salvo se lesões na mama.",
      "Em caso de lesões não genitais é necessário indicar via alta para o nascimento.",
      "O tratamento com aciclovir é contraindicado no primeiro trimestre."
    ],
    "correctAnswer": 1,
    "explanation": "No herpes genital na gestação, o aleitamento materno é mantido; só se suspende a amamentação na mama que tiver lesão herpética ativa, pelo risco de transmissão ao recém-nascido.\n\nA alternativa B está correta.",
    "commentary": "Rastreio sorológico universal (A): não é recomendado.\n\nCesárea por lesão não genital (C): a cesárea está indicada quando há lesões genitais ativas ou pródromos no trabalho de parto; lesões fora da região genital (cobertas) não indicam via alta.\n\nAciclovir contraindicado no 1º trimestre (D): o aciclovir é seguro em toda a gestação e indicado no primeiro episódio e como supressão a partir de 36 semanas.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / PCDT de IST (2022)",
    "tags": [
      "herpes genital",
      "infecções na gestação",
      "aciclovir",
      "aleitamento materno"
    ],
    "tip": "Herpes: amamenta (exceto lesão na mama), aciclovir pode em qualquer trimestre, cesárea só com lesão genital ativa."
  },
  {
    "id": "hpp2026-80",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A hemorragia pós-parto (HPP) está entre as principais causas de mortalidade materna e a estratificação de risco para HPP pode ser aplicada rotineiramente. Assinale a correta de acordo com o Manual de gestação de Alto Risco do Ministério da Saúde, 2022:",
    "options": [
      "Paciente estratificados como de médio risco para HPP incluem aquelas com cesariana prévia e placenta prévia.",
      "Pacientes com pré-eclâmpsia grave são estratificadas como de alto risco para HPP mesmo sem história prévia de coagulopatia.",
      "Está recomendado o manejo ativo do 3º estágio somente para as pacientes estratificadas como médio e alto risco.",
      "A presença de acompanhantes é desestimulada para ajudar a detectar sinais de alerta para as pacientes de alto risco para HPP."
    ],
    "correctAnswer": 1,
    "explanation": "A estratificação de risco para hemorragia pós-parto do Manual de Gestação de Alto Risco (2022) inclui, como alto risco: placenta prévia ou acretismo, pré-eclâmpsia grave, hematócrito < 30% com outros fatores, plaquetas < 100 mil, sangramento ativo à admissão, coagulopatia e uso de anticoagulante, entre outros.\n\nA pré-eclâmpsia grave entra como alto risco independentemente de história de coagulopatia.",
    "commentary": "Cesárea prévia e placenta prévia como médio risco (A): a cesárea anterior é fator de médio risco, mas a placenta prévia é de alto risco.\n\nManejo ativo só no médio e alto risco (C): o manejo ativo do terceiro período (ocitocina 10 UI IM após o nascimento) é recomendado para todas as parturientes.\n\nDesestimular acompanhantes (D): o acompanhante é um direito garantido por lei e pode ajudar a perceber sinais de alerta.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da HPP",
    "tags": [
      "hemorragia pós-parto",
      "estratificação de risco",
      "manejo ativo do terceiro período"
    ],
    "tip": "Ocitocina 10 UI IM para todas. Placenta prévia e pré-eclâmpsia grave = alto risco de HPP."
  },
  {
    "id": "hpp2026-81",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em relação às quatro modalidades de prevenção (primária, secundária, terciária e quaternária), qual a característica distintiva da prevenção quaternária?",
    "options": [
      "Busca reduzir a exposição a fatores de risco antes do aparecimento da doença.",
      "Foca na detecção precoce de doenças assintomáticas por meio de rastreamentos.",
      "Objetiva evitar intervenções médicas desnecessárias e seus potenciais danos.",
      "Visa limitar complicações e reabilitar pacientes com doença já estabelecida."
    ],
    "correctAnswer": 2,
    "explanation": "A prevenção quaternária, conceito de Marc Jamoulle, é a ação de identificar pessoas em risco de medicalização excessiva e protegê-las de intervenções desnecessárias e de seus danos (iatrogenia), oferecendo cuidados eticamente aceitáveis. Ela atravessa todos os outros níveis de prevenção.",
    "commentary": "Reduzir exposição a fatores de risco antes da doença (A): prevenção primária.\n\nDetecção precoce por rastreamento (B): prevenção secundária.\n\nLimitar complicações e reabilitar (D): prevenção terciária.",
    "reference": "Jamoulle M. — Prevenção quaternária / Gusso & Lopes — Tratado de Medicina de Família e Comunidade",
    "tags": [
      "prevenção quaternária",
      "níveis de prevenção",
      "iatrogenia"
    ],
    "tip": "Quaternária = proteger o paciente do excesso de medicina."
  },
  {
    "id": "hpp2026-82",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Na abordagem a uma família com diversos problemas de saúde, o ecomapa revela conexões fortes e recíprocas com a igreja local e o clube de futebol do bairro. Há uma conexão fraca com a escola do filho mais velho e uma relação de estresse com o serviço de saúde. A mãe está desempregada, e não há conexão com o mercado de trabalho. Baseado nesta representação, qual é a principal inferência que o profissional de saúde pode tirar para planejar intervenções?",
    "options": [
      "O ecomapa sugere que a família tem mais problemas do que recursos e, portanto, a intervenção será difícil e provavelmente ineficaz.",
      "A rede social externa da família pode ser usada como recurso para fortalecer a resiliência familiar, mesmo com a ausência de conexão profissional da mãe.",
      "O principal problema da família é o desemprego da mãe, e todas as intervenções devem ser focadas em encontrar um emprego para ela.",
      "O profissional deve focar em fortalecer a relação com o serviço de saúde antes de qualquer outra intervenção, pois este é o principal fator de estresse."
    ],
    "correctAnswer": 1,
    "explanation": "O ecomapa representa as relações da família com o meio externo (instituições, serviços, grupos). Aqui ele mostra vínculos fortes e recíprocos com a igreja e o clube de futebol — recursos de apoio social que a equipe pode mobilizar para fortalecer a resiliência familiar, mesmo diante do desemprego da mãe e da relação estressante com o serviço de saúde.\n\nA leitura correta valoriza os recursos da família, e não só os problemas.",
    "commentary": "Mais problemas que recursos, intervenção ineficaz (A): o ecomapa mostra vínculos fortes que servem de apoio; a conclusão é pessimista e não se sustenta.\n\nFocar só no emprego da mãe (C): o desemprego é relevante, mas a abordagem familiar é ampla; reduzir tudo a um problema ignora os demais.\n\nPriorizar a relação com o serviço de saúde antes de tudo (D): melhorar o vínculo é importante, mas não precisa vir antes de usar os recursos já disponíveis da rede social.",
    "reference": "Gusso & Lopes — Tratado de Medicina de Família e Comunidade: ferramentas de abordagem familiar",
    "tags": [
      "ecomapa",
      "abordagem familiar",
      "rede de apoio social",
      "medicina de família"
    ],
    "tip": "Ecomapa: mapeie os vínculos externos e use os fortes como recurso."
  },
  {
    "id": "hpp2026-83",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Um paciente de 65 anos, com diagnóstico de diabetes mellitus tipo 2, hipertensão, insuficiência cardíaca com fração de ejeção reduzida e depressão, tem histórico de múltiplas internações por descompensação das doenças crônicas. Vive sozinho e apresenta dificuldade de adesão ao tratamento medicamentoso e às orientações alimentares. A equipe de Saúde da Família propõe a construção de um Projeto Terapêutico Singular (PTS). Qual abordagem, baseada nos princípios do PTS, seria mais adequada para iniciar o processo, considerando a complexidade e a autonomia limitada do paciente?",
    "options": [
      "Definir metas de tratamento em conjunto com a família e a equipe de saúde, comunicando ao paciente as responsabilidades dele na adesão, e elaborar um cronograma de visitas domiciliares estrito para monitoramento.",
      "Enfatizar a necessidade de o paciente reconhecer a gravidade de sua situação, apresentando dados estatísticos e riscos de não adesão, e indicar um profissional de referência para monitorar exclusivamente o uso da medicação.",
      "Convidar o paciente para uma reunião com a equipe multidisciplinar e sua família, construindo, a partir de suas percepções e desafios, um plano de ação gradual que inclua o fortalecimento de sua rede social e o uso de recursos comunitários.",
      "Prescrever um novo regime medicamentoso simplificado e solicitar que o assistente social identifique um familiar responsável para gerir os cuidados diários e garantir o cumprimento das orientações."
    ],
    "correctAnswer": 2,
    "explanation": "O Projeto Terapêutico Singular (PTS) é construído coletivamente pela equipe multiprofissional com o usuário e sua família, para casos complexos. Tem quatro momentos: diagnóstico (incluindo aspectos subjetivos e sociais), definição de metas, divisão de responsabilidades e reavaliação.\n\nO ponto central é a participação ativa do paciente: partir de suas percepções e dificuldades, propor metas graduais e usar a rede social e comunitária. A alternativa C traduz esses princípios.",
    "commentary": "Metas definidas pela família e equipe, com cronograma rígido (A): o paciente só é comunicado das responsabilidades; falta corresponsabilização e flexibilidade.\n\nEnfatizar a gravidade com estatísticas (B): abordagem prescritiva e centrada na doença, que não constrói vínculo nem autonomia.\n\nSimplificar a receita e transferir os cuidados a um familiar (D): pode ajudar, mas é decisão unilateral, sem escuta e construção conjunta.",
    "reference": "Ministério da Saúde — Clínica ampliada e compartilhada (PNH) / Caderno de Atenção Básica",
    "tags": [
      "projeto terapêutico singular",
      "clínica ampliada",
      "atenção primária",
      "doenças crônicas"
    ],
    "tip": "PTS: construído com o paciente, em equipe, com metas graduais e reavaliação."
  },
  {
    "id": "hpp2026-84",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Durante uma visita domiciliar, uma equipe de Saúde da Família identifica que uma idosa acamada, portadora de uma doença crônica não transmissível em estágio avançado, recebe cuidados apenas da filha, que não possui qualificação técnica para a manipulação dos equipamentos e curativos. A filha relata cansaço extremo e dificuldade em conciliar os cuidados com o próprio trabalho. A equipe de saúde, então, elabora um plano de cuidados que inclui a capacitação da filha, o agendamento de visitas periódicas de enfermagem para o auxílio nos procedimentos e o apoio psicossocial para a cuidadora. Essa atuação da equipe, conforme a Lei nº 8.080/1990, representa a aplicação de qual princípio do SUS?",
    "options": [
      "Princípio da universalidade, pois a idosa, como todos os cidadãos, tem direito ao acesso a ações de saúde de forma gratuita e indiscriminada.",
      "Princípio da equidade, garantindo a adaptação das ações de saúde às necessidades específicas da idosa.",
      "Princípio da resolutividade, uma vez que a equipe da Atenção Primária resolve o problema dentro de sua competência, sem necessidade de referenciar o caso para outros níveis de atenção, garantindo a resolutividade.",
      "Princípio da integralidade da assistência, que se manifesta no cuidado holístico, que abrange desde os aspectos físicos (curativos, manipulação de equipamentos) até o suporte psicossocial à cuidadora."
    ],
    "correctAnswer": 3,
    "explanation": "O plano da equipe vai do cuidado técnico (curativos, equipamentos, visitas de enfermagem) até o apoio psicossocial à cuidadora — ou seja, olha para a pessoa e seu contexto como um todo, articulando ações preventivas e curativas, individuais e coletivas.\n\nIsso é a integralidade da assistência, definida na Lei 8.080/1990 como o conjunto articulado e contínuo das ações e serviços exigidos em cada caso.",
    "commentary": "Universalidade (A): garante o acesso de todos, mas não descreve a abrangência do plano de cuidado.\n\nEquidade (B): tratar desigualmente os desiguais, conforme a necessidade; não é o foco da situação.\n\nResolutividade (C): é um atributo/diretriz da organização dos serviços, e o caso não trata de evitar encaminhamentos.",
    "reference": "Lei nº 8.080/1990, art. 7º",
    "tags": [
      "princípios do SUS",
      "integralidade",
      "lei 8.080",
      "cuidador"
    ],
    "tip": "Cuidar do corpo, da mente e do contexto (inclusive do cuidador) = integralidade."
  },
  {
    "id": "hpp2026-85",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A transição demográfica e epidemiológica no Brasil impõe um novo desafio aos sistemas de saúde, com o aumento da prevalência de condições crônicas e a coexistência de doenças infecciosas e causas externas. Essa tripla carga de doenças demanda uma reorganização do Sistema Único de Saúde (SUS). O modelo de Redes de Atenção à Saúde mostra-se eficaz no enfrentamento desse cenário complexo porque:",
    "options": [
      "Integra serviços de saúde de diferentes complexidades para responder de forma efetiva e eficiente às condições de saúde da população, seja ela aguda ou crônica.",
      "É centrado em um modelo de atenção reativo, episódico e voltado prioritariamente para o enfrentamento de condições agudas e agudizações de condições crônicas.",
      "Utiliza a Atenção Ambulatorial Especializada como porta de entrada e centro de comunicação para coordenar o cuidado ao longo do tempo.",
      "Coloca o hospital como ponto principal da rede, em detrimento da Atenção Primária à Saúde e da Atenção Ambulatorial Especializada."
    ],
    "correctAnswer": 0,
    "explanation": "As Redes de Atenção à Saúde (Portaria 4.279/2010) são arranjos de serviços de diferentes densidades tecnológicas, integrados por sistemas de apoio, logísticos e de governança, com a Atenção Primária como centro de comunicação e coordenadora do cuidado.\n\nEssa integração é adequada à tripla carga de doenças porque responde tanto às condições agudas quanto às crônicas, de forma contínua, efetiva e eficiente.",
    "commentary": "Modelo reativo e episódico (B): é a característica do modelo fragmentado que as redes buscam superar.\n\nAtenção especializada como porta de entrada (C): o centro de comunicação e a porta de entrada preferencial é a Atenção Primária.\n\nHospital como centro (D): nas RAS não há hierarquia de importância; os pontos são poliárquicos, coordenados pela APS.",
    "reference": "Portaria GM/MS nº 4.279/2010 — Redes de Atenção à Saúde / Mendes EV — As Redes de Atenção à Saúde",
    "tags": [
      "redes de atenção à saúde",
      "tripla carga de doenças",
      "atenção primária",
      "SUS"
    ],
    "tip": "RAS: rede poliárquica, integrada e coordenada pela APS."
  },
  {
    "id": "hpp2026-86",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Maria e Ana têm 30 anos e apresentam a mesma condição física atual (IMC adequado, sem doenças crônicas diagnosticadas).\n• Maria nasceu em família de alta renda, estudou em boas escolas, teve acesso a lazer e alimentação saudável, fez curso superior e possui rede de apoio social sólida.\n• Ana nasceu em família em situação de pobreza, estudou em escolas precárias, precisou trabalhar cedo, não concluiu a universidade e vive em comunidade com violência urbana e rede de apoio restrita.\n\nCom base no modelo de Determinantes Sociais da Saúde da OMS, assinale a alternativa correta:",
    "options": [
      "As trajetórias de Maria e Ana refletem diferenças em determinantes estruturais, que influenciam condições intermediárias e se projetam em expectativa de vida distinta.",
      "O estado atual de saúde igual demonstra ausência de desigualdade relevante, independentemente de trajetórias passadas.",
      "A rede de apoio de Maria exemplifica capital social, mas isso não interfere em sua saúde futura ou mortalidade.",
      "O fato de Ana viver em contexto de violência se relaciona apenas a fatores individuais, não compondo determinantes sociais de saúde."
    ],
    "correctAnswer": 0,
    "explanation": "No modelo de Determinantes Sociais da Saúde da OMS (Solar e Irwin), os determinantes estruturais (renda, escolaridade, classe social, contexto socioeconômico e político) moldam os determinantes intermediários (condições de moradia, trabalho, comportamentos, fatores psicossociais, acesso aos serviços), que por sua vez geram desigualdades em saúde.\n\nMaria e Ana têm a mesma condição atual, mas trajetórias de vida muito diferentes, que tendem a se refletir em adoecimento e expectativa de vida distintos.",
    "commentary": "Saúde atual igual significa ausência de desigualdade (B): o modelo olha a trajetória; exposições acumuladas ao longo da vida se manifestam mais tarde.\n\nCapital social sem efeito na saúde (C): rede de apoio e coesão social são fatores protetores reconhecidos.\n\nViolência como fator individual (D): o contexto de violência urbana é um determinante social, não apenas individual.",
    "reference": "OMS — A conceptual framework for action on the social determinants of health (Solar & Irwin, 2010) / CNDSS 2008",
    "tags": [
      "determinantes sociais da saúde",
      "desigualdades em saúde",
      "epidemiologia social"
    ],
    "tip": "Estruturais (renda, escolaridade) → intermediários (moradia, trabalho, hábitos) → saúde."
  },
  {
    "id": "hpp2026-87",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Em relação à Avaliação de Tecnologias em Saúde (ATS) e sua aplicação na Atenção Primária, assinale a alternativa que expressa corretamente a lógica de incorporação de tecnologias no SUS segundo critérios de evidência e custo-efetividade.",
    "options": [
      "Tecnologias são incorporadas prioritariamente por demanda da indústria farmacêutica, considerando avanços terapêuticos globais.",
      "O processo de incorporação no SUS é guiado exclusivamente por análise econômica e custos absolutos, feita em conjunto pelo ministério da fazenda e pelo ministério da saúde.",
      "A Comissão Nacional de Incorporação de Tecnologias (CONITEC) avalia segurança, efetividade, impacto orçamentário e relevância clínica.",
      "A análise de custo-efetividade não se aplica à Atenção Primária à Saúde (APS), sendo restrita a medicamentos de alto custo da atenção especializada, visto que a APS tem baixa densidade tecnológica."
    ],
    "correctAnswer": 2,
    "explanation": "A incorporação de tecnologias no SUS é assessorada pela CONITEC (Lei 12.401/2011), que avalia evidências de eficácia, efetividade e segurança, além de estudos de custo-efetividade e de impacto orçamentário, e abre consulta pública antes da decisão do Ministério da Saúde.\n\nA alternativa C resume esses critérios.",
    "commentary": "Demanda da indústria (A): qualquer interessado pode pedir a avaliação, mas a decisão se baseia em evidência, não na pressão da indústria.\n\nSó custos, com o Ministério da Fazenda (B): a análise não é exclusivamente econômica e não envolve o Ministério da Fazenda.\n\nCusto-efetividade não se aplica à APS (D): a avaliação vale para qualquer tecnologia, inclusive as da Atenção Primária.",
    "reference": "Lei nº 12.401/2011 / Decreto nº 7.646/2011 — CONITEC",
    "tags": [
      "avaliação de tecnologias em saúde",
      "CONITEC",
      "custo-efetividade",
      "SUS"
    ],
    "tip": "CONITEC: evidência de eficácia e segurança + custo-efetividade + impacto orçamentário."
  },
  {
    "id": "hpp2026-88",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Um município com população de 150 mil habitantes apresenta cobertura de 65% da Estratégia Saúde da Família (ESF), aumento recente das taxas de internação por condições sensíveis à atenção primária (ICSAP), baixo índice de controle tensional dos hipertensos, média de hemoglobina glicosilada (HbA1c) acima da média dos municípios ao seu redor e alto número de atendimentos em pronto-socorro por causas evitáveis. Considerando os princípios da Atenção Primária à Saúde (APS) e o financiamento do SUS, qual ação é mais custo-efetiva para qualificar a resposta do sistema de saúde para este cenário?",
    "options": [
      "Implantar serviço de pronto-atendimento em todos os bairros, com foco em acesso rápido a consultas médicas e exames.",
      "Aumentar a cobertura da ESF para 100%, reorganizando o território com enfoque na coordenação do cuidado e vigilância em saúde.",
      "Ampliar o número de ambulâncias para agilizar a transferência intermunicipal de pacientes para os municípios ao redor, com unidades de maior complexidade.",
      "Instituir check-up anual obrigatório para todas as faixas etárias, com realização de exames laboratoriais padronizados."
    ],
    "correctAnswer": 1,
    "explanation": "Os indicadores mostram falhas típicas de Atenção Primária insuficiente: cobertura de ESF de 65%, internações por condições sensíveis à APS em alta, hipertensos e diabéticos mal controlados e uso do pronto-socorro por causas evitáveis.\n\nA intervenção mais custo-efetiva é ampliar a cobertura da ESF para 100%, com territorialização, coordenação do cuidado e vigilância em saúde — o que melhora o controle das doenças crônicas e reduz internações e atendimentos de urgência evitáveis.",
    "commentary": "Pronto-atendimento em todos os bairros (A): reforça o modelo centrado na queixa aguda, mais caro e sem continuidade do cuidado.\n\nMais ambulâncias para transferências (C): age sobre as consequências e aumenta custos, sem atacar a causa.\n\nCheck-up anual obrigatório (D): exames sem indicação geram sobrediagnóstico e custo, sem melhorar desfechos.",
    "reference": "Política Nacional de Atenção Básica (Portaria 2.436/2017) / Starfield B — Atenção Primária",
    "tags": [
      "estratégia saúde da família",
      "ICSAP",
      "custo-efetividade",
      "atenção primária"
    ],
    "tip": "ICSAP alta = APS insuficiente. A solução é fortalecer e ampliar a ESF."
  },
  {
    "id": "hpp2026-89",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A equidade é amplamente reconhecida como um princípio ético e organizativo dos sistemas de saúde. No entanto, sua incorporação formal como diretriz do Sistema Único de Saúde (SUS) não ocorreu na Lei nº 8.080/1990. Sobre a evolução legal e conceitual da equidade no SUS, assinale a alternativa correta.",
    "options": [
      "A equidade foi incluída como princípio organizativo do SUS já na Constituição Federal de 1988, em conjunto com a universalidade e integralidade.",
      "A Lei nº 8.142/1990 estabeleceu a equidade como princípio legal do SUS ao regulamentar o controle social e o repasse fundo a fundo.",
      "A equidade é um conceito que inicialmente foi externo ao SUS, incorporado nas políticas assistenciais do Ministério do Desenvolvimento Social.",
      "A equidade passou a ser reconhecida como diretriz do SUS a partir da NOB-SUS 01/96, refletindo a necessidade de alocação diferenciada de recursos segundo necessidades locais."
    ],
    "correctAnswer": 3,
    "explanation": "A equidade não aparece com esse nome nem na Constituição de 1988 nem na Lei 8.080/1990, que falam em \"igualdade da assistência à saúde\". O conceito foi sendo incorporado nas normas operacionais; a NOB-SUS 01/96, ao propor critérios de alocação de recursos que levassem em conta as necessidades e desigualdades regionais, é apontada pela banca como o marco de seu reconhecimento como diretriz.\n\nPor isso, o gabarito é D.",
    "commentary": "Constituição de 1988 (A): o texto constitucional garante acesso universal e igualitário e atendimento integral, mas não usa o termo equidade.\n\nLei 8.142/1990 (B): trata da participação da comunidade e das transferências de recursos, sem instituir a equidade como princípio.\n\nConceito externo ao SUS, vindo do Ministério do Desenvolvimento Social (C): a equidade nasce no movimento da Reforma Sanitária, não em políticas posteriores de outro ministério.",
    "reference": "Constituição Federal de 1988, art. 196 / Lei nº 8.080/1990 / NOB-SUS 01/96",
    "tags": [
      "equidade",
      "princípios do SUS",
      "NOB-SUS 01/96",
      "legislação do SUS"
    ],
    "tip": "Equidade não está escrita na CF/88 nem na Lei 8.080 (que dizem \"igualdade\")."
  },
  {
    "id": "hpp2026-90",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Em um território rural com alta pressão assistencial e difícil acesso a exames laboratoriais, a equipe da APS adota protocolos baseados em abordagem sindrômica. Considerando os princípios da epidemiologia clínica, qual das alternativas representa a melhor justificativa para essa conduta?",
    "options": [
      "A abordagem sindrômica baseia-se na exclusão diagnóstica sistemática por meio de exames, mesmo em contextos com poucos recursos.",
      "O modelo sindrômico utiliza algoritmos clínicos baseados em sinais e sintomas prevalentes, permitindo intervenções precoces com base em alta sensibilidade.",
      "Essa abordagem tem como foco principal o diagnóstico definitivo, sendo apropriada apenas em contextos hospitalares.",
      "Em cenários de alta pressão assistencial, o uso de protocolos sindrômicos reduz a necessidade de interação com o paciente e substitui a anamnese detalhada por algoritmos padronizados."
    ],
    "correctAnswer": 1,
    "explanation": "A abordagem sindrômica (usada em IST, AIDPI e outras situações) organiza o atendimento por síndromes — conjuntos de sinais e sintomas frequentes — e trata as causas mais prováveis sem depender de exames. Os fluxogramas privilegiam alta sensibilidade, para não deixar de tratar quem tem a doença, permitindo intervenção precoce em locais com pouco acesso a laboratório.",
    "commentary": "Exclusão sistemática por exames (A): é o oposto; a abordagem sindrômica dispensa exames.\n\nFoco no diagnóstico definitivo e só no hospital (C): o foco é tratar precocemente, sobretudo na atenção primária.\n\nDispensar a anamnese (D): a abordagem depende de boa anamnese e exame físico; os algoritmos não substituem a relação com o paciente.",
    "reference": "Ministério da Saúde — PCDT de IST (abordagem sindrômica) / Fletcher — Epidemiologia Clínica",
    "tags": [
      "abordagem sindrômica",
      "sensibilidade",
      "epidemiologia clínica",
      "atenção primária"
    ],
    "tip": "Abordagem sindrômica: trata pelo quadro clínico, com fluxogramas de alta sensibilidade."
  },
  {
    "id": "hpp2026-91",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A aprovação do novo arcabouço fiscal em 2023 trouxe mudanças no modelo de limitação de gastos públicos, substituindo o teto de gastos instituído em 2016. Em relação aos impactos esperados dessa mudança no financiamento da Atenção Primária à Saúde, assinale a alternativa correta.",
    "options": [
      "O novo arcabouço elimina todas as restrições de crescimento real das despesas com saúde, permitindo expansão ilimitada da APS.",
      "A vinculação constitucional da saúde ao orçamento federal foi revogada pelo novo arcabouço fiscal.",
      "O novo regime fiscal determina que os recursos da saúde sejam redistribuídos exclusivamente por demanda populacional (modelo de distribuição per capita), sem considerar vulnerabilidades.",
      "A regra fiscal prevê crescimento real limitado das despesas primárias, o que pode restringir a expansão de serviços, mesmo com aumento de demanda."
    ],
    "correctAnswer": 3,
    "explanation": "O novo arcabouço fiscal (Lei Complementar 200/2023) substituiu o teto de gastos (EC 95/2016), que congelava as despesas em termos reais. A nova regra permite crescimento real das despesas primárias, mas limitado (entre 0,6% e 2,5% ao ano, conforme a receita). Assim, há algum espaço para expandir serviços, porém ele pode ser insuficiente diante do aumento da demanda.\n\nA alternativa D está correta.",
    "commentary": "Fim de todas as restrições (A): continua havendo limite de crescimento.\n\nRevogação da vinculação constitucional (B): o piso da saúde (15% da receita corrente líquida da União, EC 86) voltou a valer com o fim do teto; não foi revogado.\n\nDistribuição só per capita (C): o novo regime fiscal não define critérios de rateio; o financiamento da APS considera também vulnerabilidade e desempenho.",
    "reference": "Lei Complementar nº 200/2023 / EC nº 95/2016 / EC nº 86/2015",
    "tags": [
      "financiamento do SUS",
      "arcabouço fiscal",
      "atenção primária"
    ],
    "tip": "Arcabouço fiscal 2023: despesa pode crescer acima da inflação, mas com limite."
  },
  {
    "id": "hpp2026-92",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Durante uma reunião de equipe em uma Unidade de Saúde, discute-se a adoção de um teste rápido com sensibilidade de 85% e especificidade de 90% para rastreamento de uma infecção que, apesar de grave, apresenta baixa prevalência na população local. Um dos profissionais menciona que o valor preditivo positivo (VPP) do teste tende a ser baixo, mesmo com boa acurácia. Assinale a alternativa que explica corretamente essa afirmação, considerando conceitos de epidemiologia clínica aplicados à APS.",
    "options": [
      "Em populações com baixa prevalência de determinada condição, o número de falsos positivos pode superar o de verdadeiros positivos, reduzindo o VPP.",
      "O VPP depende exclusivamente da sensibilidade e da especificidade do teste, portanto é invariável entre diferentes populações, independente da distribuição epidemiológica.",
      "Em populações com alta incidência da doença, o aumento dos casos pode impactar a especificidade e a interpretação clínica do teste, impactando negativamente o VPP e exigindo reavaliação do seu uso.",
      "Como a VPP está intimamente ligada à sensibilidade, esta elevada garante um VPP elevado, independentemente da prevalência da condição rastreada."
    ],
    "correctAnswer": 0,
    "explanation": "O valor preditivo positivo depende da prevalência. Com prevalência baixa, mesmo um teste com boa especificidade (90%) gera, em números absolutos, muitos falsos-positivos entre os muitos sadios, que podem superar os verdadeiros-positivos entre os poucos doentes. O VPP cai.\n\nExemplo: em 1.000 pessoas com prevalência de 1%, há 10 doentes (8,5 verdadeiros-positivos) e 990 sadios (99 falsos-positivos): VPP ≈ 8%.",
    "commentary": "VPP invariável (B): sensibilidade e especificidade são próprias do teste; o VPP varia com a prevalência.\n\nAlta prevalência piora o VPP (C): quanto maior a prevalência, maior o VPP; a especificidade não muda com a prevalência.\n\nAlta sensibilidade garante VPP alto (D): o VPP depende mais da especificidade e da prevalência; a sensibilidade influencia mais o VPN.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais / Medronho — Epidemiologia",
    "tags": [
      "valor preditivo positivo",
      "prevalência",
      "testes diagnósticos",
      "rastreamento"
    ],
    "tip": "Prevalência baixa → VPP baixo e VPN alto."
  },
  {
    "id": "hpp2026-93",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família (eSF) em Curitiba é responsável por um território com alta vulnerabilidade social, caracterizado por moradias precárias, desemprego e baixa cobertura de saneamento básico. Considerando os princípios da territorialização e da adscrição da clientela, que são pilares da Política Nacional de Atenção Básica (PNAB), qual das seguintes ações reflete a responsabilidade sanitária fundamental desta equipe para com a população de sua área?",
    "options": [
      "Focar a agenda e os recursos no atendimento de grupos prioritários identificados (como gestantes e hipertensos), deixando a demanda espontânea para ser atendida em outros pontos de atenção como a Unidade de Pronto Atendimento.",
      "Limitar o acesso aos serviços da unidade de saúde apenas aos indivíduos que possam comprovar residência fixa na área, a fim de otimizar a organização do trabalho.",
      "Assumir o cuidado longitudinal e a vigilância em saúde de toda a população presente no território, articulando ações individuais e coletivas para enfrentar os problemas de saúde locais.",
      "Encaminhar as questões relacionadas ao saneamento básico e moradia diretamente para a Secretaria Municipal de Obras, limitando a atuação da equipe de saúde às consultas médicas e de enfermagem dentro da unidade."
    ],
    "correctAnswer": 2,
    "explanation": "A PNAB define que a equipe de Saúde da Família tem responsabilidade sanitária sobre toda a população do seu território adscrito: cuidado longitudinal, vigilância em saúde, ações individuais e coletivas, e articulação intersetorial para enfrentar os problemas de saúde locais (inclusive determinantes como saneamento e moradia).",
    "commentary": "Atender só grupos prioritários e mandar a demanda espontânea para a UPA (A): a APS deve acolher a demanda espontânea e a programada.\n\nExigir comprovante de residência (B): a PNAB veda a restrição de acesso por esse motivo; a adscrição organiza, não exclui.\n\nLimitar-se a consultas e repassar saneamento à Secretaria de Obras (D): a equipe deve atuar no território e articular ações intersetoriais, não apenas encaminhar.",
    "reference": "Política Nacional de Atenção Básica — Portaria GM/MS nº 2.436/2017",
    "tags": [
      "territorialização",
      "adscrição de clientela",
      "PNAB",
      "estratégia saúde da família"
    ],
    "tip": "eSF: responsável por toda a população do território, com cuidado longitudinal e vigilância."
  },
  {
    "id": "hpp2026-94",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "Uma médica de família e comunidade realiza visita domiciliar para Dona Elza, 85 anos, portadora de diabetes mellitus tipo 2 e hipertensão arterial, acamada há 2 meses após uma queda com fratura de fêmur. Durante a visita, a médica identifica uma úlcera por pressão em estágio II na região sacral. A filha de Dona Elza, sua única cuidadora, trabalha durante o dia e relata estar sobrecarregada e ansiosa sobre como realizar o curativo e avaliar a piora da lesão. Ao final da consulta, a filha pergunta: “E então, doutora, quando a senhora volta para nos ver?”. Diante desta situação clínica e social, como deve ser a decisão sobre a frequência de acompanhamento de D. Elza?",
    "options": [
      "\"Voltarei em 15 dias para reavaliá-la. A agenda da unidade já definiu essa data como padrão para retornos.\"",
      "\"Essa é uma ótima pergunta. Vamos conversar sobre os sinais de alerta que precisamos observar nos próximos dias. Com base nisso, e na sua disponibilidade, podemos definir juntos a melhor data para o meu retorno.\"",
      "\"Vamos ver como ela evolui. Qualquer coisa, é só ligar para a unidade de saúde e falar com o agente comunitário de saúde para marcar um novo dia.\"",
      "\"Eu não precisarei voltar. O mais importante agora é o acompanhamento da equipe de enfermagem para a troca de curativos. Eles entrarão em contato para agendar as visitas deles.\""
    ],
    "correctAnswer": 1,
    "explanation": "Na atenção domiciliar, a frequência das visitas deve ser definida conforme a necessidade clínica (úlcera por pressão que pode piorar, idosa acamada com comorbidades), os sinais de alerta e as possibilidades da cuidadora — de forma compartilhada, no espírito do método clínico centrado na pessoa.\n\nA resposta B combina orientação sobre sinais de alarme, escuta da cuidadora sobrecarregada e decisão conjunta.",
    "commentary": "Retorno padronizado em 15 dias (A): agenda fixa, sem considerar a gravidade da lesão ou a situação da cuidadora.\n\n\"Qualquer coisa, liga\" (C): transfere a responsabilidade para a família sobrecarregada, sem plano nem critérios de reavaliação.\n\nNão voltar e delegar à enfermagem (D): o cuidado é de equipe, mas a médica deve seguir acompanhando uma paciente complexa; também ignora a ansiedade da filha.",
    "reference": "Ministério da Saúde — Caderno de Atenção Domiciliar / Stewart M — Medicina centrada na pessoa",
    "tags": [
      "atenção domiciliar",
      "medicina centrada na pessoa",
      "cuidador",
      "lesão por pressão"
    ],
    "tip": "Visita domiciliar: frequência decidida com a família, pela necessidade e pelos sinais de alerta."
  },
  {
    "id": "hpp2026-95",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Saúde Coletiva",
    "text": "Uma médica de família e comunidade atende uma adolescente de 14 anos acompanhada pela tia. A médica observa múltiplos hematomas em diferentes estágios de cicatrização nos braços e costas da menina. Ao conversar em particular com a adolescente, esta revela, após a construção de um vínculo de confiança, que tem sofrido agressões físicas por parte do seu padrasto, e que sua mãe é conivente por medo. Considerando o Estatuto da Criança e do Adolescente (ECA) e as diretrizes de atenção integral à saúde, qual das seguintes opções descreve a conduta correta e prioritária da médica diante do caso?",
    "options": [
      "A médica tem o dever legal de realizar a notificação compulsória para fins de vigilância epidemiológica e, simultaneamente, comunicar o fato ao Conselho Tutelar para garantir as medidas de proteção à adolescente.",
      "A comunicação ao Conselho Tutelar deve ser feita apenas após a confirmação do diagnóstico com exames de corpo de delito e o consentimento explícito da adolescente e da tia, para não violar o sigilo profissional.",
      "A médica deve priorizar a notificação para fins epidemiológicos e aguardar a orientação da gestão da unidade de saúde antes de fazer qualquer comunicação a órgãos externos, como o Conselho Tutelar, para seguir o fluxo institucional.",
      "A conduta mais adequada é convocar uma reunião com a mãe e o padrasto para confrontá-los com a suspeita, buscando uma resolução familiar antes de acionar a rede de proteção, a fim de preservar o vínculo familiar."
    ],
    "correctAnswer": 0,
    "explanation": "Diante de suspeita ou confirmação de violência contra criança ou adolescente, o ECA (art. 13 e 245) obriga o profissional de saúde a comunicar o Conselho Tutelar, e a violência interpessoal é agravo de notificação compulsória (ficha do SINAN). As duas ações são simultâneas e não dependem de confirmação pericial nem de autorização da família.\n\nA quebra do sigilo é justificada pelo dever legal e pela proteção da adolescente.",
    "commentary": "Esperar exame de corpo de delito e consentimento (B): a suspeita já basta para comunicar; condicionar a consentimento expõe a adolescente a novas agressões.\n\nAguardar orientação da gestão (C): a comunicação ao Conselho Tutelar é dever do profissional e não pode ser adiada.\n\nConfrontar mãe e padrasto (D): coloca a adolescente em risco e atrasa a proteção.",
    "reference": "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) / Portaria de notificação compulsória (MS)",
    "tags": [
      "violência contra crianças e adolescentes",
      "ECA",
      "notificação compulsória",
      "conselho tutelar"
    ],
    "tip": "Suspeita de violência contra menor: notificação (SINAN) + Conselho Tutelar, sem esperar confirmação."
  },
  {
    "id": "hpp2026-96",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "No contexto do Método Clínico Centrado na Pessoa (MCCP), o terceiro componente, \"elaborar um projeto comum de manejo\", refere-se fundamentalmente a qual prática:",
    "options": [
      "Coletar informações detalhadas sobre os sintomas, a cronologia da doença e os resultados de exames para definir um diagnóstico preciso.",
      "Negociar um plano terapêutico com o paciente, alinhando as prioridades do profissional de saúde com os valores, expectativas e o contexto de vida da pessoa.",
      "Investigar o contexto de vida do paciente, incluindo sua rede de apoio familiar, suas condições de moradia e seu histórico de vida pessoal.",
      "Realizar ações de promoção da saúde e prevenção de doenças na comunidade, focando em grupos de risco específicos, como idosos com diabetes."
    ],
    "correctAnswer": 1,
    "explanation": "O Método Clínico Centrado na Pessoa tem quatro componentes: (1) explorar a saúde, a doença e a experiência da doença; (2) entender a pessoa como um todo; (3) elaborar um plano conjunto de manejo dos problemas; e (4) intensificar a relação médico-pessoa.\n\nO terceiro componente consiste em chegar a um acordo sobre os problemas, as prioridades, os objetivos do tratamento e os papéis de cada um, alinhando a visão do profissional com os valores e o contexto do paciente.",
    "commentary": "Coletar sintomas e exames (A): faz parte do primeiro componente, focado na doença.\n\nInvestigar o contexto de vida (C): segundo componente (entender a pessoa como um todo).\n\nPromoção da saúde na comunidade (D): ação coletiva, não é componente do método clínico.",
    "reference": "Stewart M et al. — Medicina centrada na pessoa: transformando o método clínico",
    "tags": [
      "método clínico centrado na pessoa",
      "decisão compartilhada",
      "medicina de família"
    ],
    "tip": "MCCP: 1 doença/experiência; 2 pessoa inteira; 3 plano conjunto; 4 relação."
  },
  {
    "id": "hpp2026-97",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo caso-controle em Unidades Básicas de Saúde investigou fatores associados à não realização do exame de rastreamento de câncer de colo de útero em mulheres de 25 a 64 anos.\n\nResultados:\n• Baixa escolaridade: OR = 2,0 (IC95%: 1,5–2,8)\n• Renda até 1 salário mínimo: OR = 1,2 (IC95%: 1,1–1,6)\n• Ter companheiro fixo: OR = 0,7 (IC95%: 0,5–0,9)\n\nCom base nesses resultados, assinale a alternativa correta:",
    "options": [
      "Baixa escolaridade esteve associada a cerca do dobro da chance de não realizar o exame, e baixa renda a um aumento de aproximadamente 20%.",
      "Ter companheiro fixo aumentou a chance de não realizar o exame em cerca de 30%, em relação às demais mulheres.",
      "A renda baixa foi identificada como causa direta da não realização do exame, independente de outros fatores analisados.",
      "O odds ratio de 1,2 para renda baixa indica ausência de associação estatisticamente significativa com a não realização do exame."
    ],
    "correctAnswer": 0,
    "explanation": "Num estudo caso-controle a medida de associação é a razão de chances (odds ratio). OR de 2,0 para baixa escolaridade indica cerca do dobro da chance de não fazer o exame; OR de 1,2 para renda baixa, aumento de cerca de 20%. Os dois intervalos de confiança não incluem 1, então ambas as associações são estatisticamente significativas.\n\nA alternativa A interpreta corretamente os resultados.",
    "commentary": "Companheiro fixo aumenta a chance em 30% (B): OR de 0,7 (IC sem o 1) indica fator de proteção: chance cerca de 30% menor de não fazer o exame.\n\nRenda baixa como causa direta (C): estudos observacionais mostram associação; causalidade exige outros critérios e controle de confundidores.\n\nOR 1,2 sem significância (D): o IC95% (1,1–1,6) não inclui 1, logo a associação é significativa, ainda que modesta.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "estudo caso-controle",
      "odds ratio",
      "intervalo de confiança",
      "bioestatística"
    ],
    "tip": "OR > 1 = risco; < 1 = proteção. IC95% que não cruza 1 = significativo."
  },
  {
    "id": "hpp2026-98",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Um teste rápido para diagnóstico de influenza em crianças foi validado em diferentes contextos. Em estudo hospitalar com alta prevalência da doença, observou-se alto valor preditivo positivo (VPP). Já em estudo em unidades de pronto atendimento com baixa prevalência, o teste apresentou alto valor preditivo negativo (VPN). Com base nesse cenário, assinale a alternativa correta:",
    "options": [
      "A sensibilidade e a especificidade do teste variam de acordo com a prevalência da doença na população estudada.",
      "O valor preditivo positivo aumenta em populações com maior prevalência da doença.",
      "O valor preditivo negativo independe da prevalência e reflete apenas a especificidade do teste.",
      "A escolha de utilizar o teste em diferentes contextos clínicos não depende da prevalência da doença."
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade e especificidade são características intrínsecas do teste. Já os valores preditivos dependem da prevalência: em populações com prevalência alta, o VPP aumenta (e o VPN diminui); com prevalência baixa, o VPN aumenta (e o VPP diminui).\n\nO cenário descrito — VPP alto no hospital e VPN alto no pronto atendimento — ilustra exatamente isso.",
    "commentary": "Sensibilidade e especificidade variam com a prevalência (A): em princípio, não variam (exceto por viés de espectro).\n\nVPN independe da prevalência (C): o VPN também depende da prevalência, e mais da sensibilidade.\n\nEscolha do teste independe da prevalência (D): a prevalência do contexto define o desempenho prático e deve guiar o uso do teste.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "valor preditivo positivo",
      "valor preditivo negativo",
      "prevalência",
      "testes diagnósticos"
    ],
    "tip": "Prevalência sobe → VPP sobe, VPN cai. Sensibilidade e especificidade ficam."
  },
  {
    "id": "hpp2026-99",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo de coorte acompanhou crianças menores de 5 anos, avaliando a associação entre exposição à fumaça do tabaco no domicílio e o desenvolvimento de infecções respiratórias recorrentes. Observou-se que a incidência acumulada de infecção foi de 30% nas crianças expostas e de 15% nas não expostas. Analise as afirmativas:\nI. O risco relativo (RR) encontrado foi de 2,0, indicando que crianças expostas apresentaram o dobro de risco de desenvolver infecções respiratórias em comparação às não expostas.\nII. A diferença absoluta de riscos (ou risco atribuível) foi de 15%, indicando que, a cada 100 crianças expostas à fumaça do tabaco, 15 casos adicionais de infecção respiratória recorrente podem ser atribuídos diretamente à exposição.\nIII. O risco relativo mede o impacto populacional da exposição, enquanto o risco absoluto expressa apenas a razão entre incidências.\nIV. Tanto o risco relativo quanto o risco absoluto são medidas que independem da incidência nos grupos expostos e não expostos.\n\nAssinale a alternativa correta:",
    "options": [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa IV está correta."
    ],
    "correctAnswer": 0,
    "explanation": "Incidência em expostos 30% e em não expostos 15%.\n\nI — certa: risco relativo = 30/15 = 2,0 (o dobro do risco).\nII — certa: diferença de riscos (risco atribuível) = 30 − 15 = 15%, ou 15 casos a mais em cada 100 expostos atribuíveis à exposição.\nIII — errada: o risco relativo mede a força da associação; o impacto na população é medido pelo risco atribuível populacional. E o risco absoluto não é razão.\nIV — errada: as duas medidas são calculadas a partir das incidências nos grupos.\n\nApenas I e II estão corretas.",
    "commentary": "I e III (B): III está errada — o RR mede força de associação, não impacto populacional.\n\nII e IV (C): IV está errada — RR e diferença de riscos são calculados a partir das incidências.\n\nApenas IV (D): IV está errada, e I e II estão certas.",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "risco relativo",
      "risco atribuível",
      "estudo de coorte",
      "medidas de associação"
    ],
    "tip": "RR = Ie ÷ Inão; risco atribuível = Ie − Inão."
  },
  {
    "id": "hpp2026-100",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Pesquisadores avaliaram a eficácia de um novo antibiótico para pneumonia comunitária em crianças. Para isso, selecionaram 200 pacientes elegíveis, que foram randomicamente alocados em dois grupos: um recebeu o novo antibiótico e o outro recebeu o tratamento convencional. Ambos foram acompanhados por 14 dias para comparação das taxas de cura clínica. Com base nessa descrição, trata-se de um estudo:",
    "options": [
      "Estudo de Caso-controle.",
      "Estudo de Coorte prospectiva.",
      "Estudo de Ensaio Clínico Randomizado.",
      "Estudo Transversal Analítico."
    ],
    "correctAnswer": 2,
    "explanation": "Os pesquisadores alocaram aleatoriamente os participantes para receber a intervenção (novo antibiótico) ou o tratamento convencional e compararam os desfechos (cura clínica) ao longo do seguimento. É um estudo experimental: ensaio clínico randomizado, o melhor desenho para avaliar eficácia de tratamento.",
    "commentary": "Caso-controle (A): parte do desfecho (casos e controles) e olha exposições passadas; não há intervenção.\n\nCoorte prospectiva (B): também acompanha grupos no tempo, mas a exposição não é atribuída pelo pesquisador.\n\nTransversal (D): exposição e desfecho medidos no mesmo momento, sem seguimento.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "ensaio clínico randomizado",
      "desenhos de estudo",
      "estudos epidemiológicos"
    ],
    "tip": "Pesquisador sorteia quem recebe a intervenção = ensaio clínico randomizado."
  }
];
