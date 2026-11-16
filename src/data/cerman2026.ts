import { Question } from '../types';

// CERMAN 2026 — Comissão Estadual de Residência Médica do Amazonas (residência médica, AM). 100 questões de 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const CERMAN_2026_QUESTIONS: Question[] = [
  {
    "id": "cerman2026-1",
    "topography": "14",
    "topic": "Crise hipertensiva",
    "module": "Clínica Médica",
    "text": "Qual é o principal fator que define uma Emergência Hipertensiva de acordo com as diretrizes brasileiras que deve estar associado a definição arbitrária da PAS >= 180mmHg e/ou PAD >=110mmhg ou até mesmo com valores menores?",
    "options": [
      "(A) O valor da Pressão Arterial somente.",
      "(B) A gravidade dos sintomas associados, como cefaleia intensa ou tontura.",
      "(C) A necessidade de tratamento imediato com medicação venosa.",
      "(D) Situações clínicas sintomáticas com Lesões de órgão alvo aguda e progressiva."
    ],
    "correctAnswer": 3,
    "explanation": "Pela Diretriz Brasileira de Hipertensão (SBC 2020; mantida em 2025), a crise hipertensiva tem PA ≥ 180 × 110 mmHg como referência arbitrária. O que define a emergência hipertensiva é a presença de lesão aguda e progressiva de órgão-alvo (encefalopatia, AVC, síndrome coronariana aguda, edema agudo de pulmão, dissecção de aorta, eclâmpsia), com risco iminente de morte — mesmo com valores menores de PA.",
    "commentary": "Valor da PA isoladamente (A): o valor alto sem lesão de órgão-alvo define urgência ou elevação pressórica, não emergência.\n\nGravidade dos sintomas como cefaleia ou tontura (B): sintomas inespecíficos sem lesão de órgão-alvo não definem emergência (antiga \"pseudocrise\").\n\nNecessidade de medicação venosa (C): é consequência do diagnóstico, não o critério que o define.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial (SBC, 2020) — Crises hipertensivas",
    "tags": [
      "emergência hipertensiva",
      "crise hipertensiva",
      "lesão de órgão-alvo"
    ]
  },
  {
    "id": "cerman2026-2",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, hipertenso e tabagista, chega ao pronto-socorro com dor torácica em aperto há 40 minutos, irradiando para o braço esquerdo e mandíbula. ECG mostra supradesnivelamento de ST em DII, DIII e aVF. Qual é a conduta inicial imediata mais indicada?",
    "options": [
      "(A) Administrar morfina, oxigênio, nitrato e betabloqueador.",
      "(B) Iniciar fibrinólise imediata se não houver acesso a angioplastia em até 120 minutos.",
      "(C) Solicitar troponina antes de qualquer intervenção.",
      "(D) Aguardar evolução clínica nas próximas horas."
    ],
    "correctAnswer": 1,
    "explanation": "Dor típica há 40 minutos com supra de ST em DII, DIII e aVF: IAM com supra de ST de parede inferior. A prioridade é a reperfusão. Se a angioplastia primária não puder ser feita em até 120 minutos do diagnóstico, faz-se fibrinólise, idealmente nos primeiros 30 minutos da chegada.",
    "commentary": "Morfina, oxigênio, nitrato e betabloqueador (A): o \"MONABICh\" de rotina não é recomendado; oxigênio só se SatO₂ < 90%, nitrato com cuidado no IAM inferior (risco de infarto de VD) e betabloqueador IV pode causar choque.\n\nTroponina antes de intervir (C): no IAM com supra, o diagnóstico é eletrocardiográfico; não se espera troponina para reperfundir.\n\nAguardar evolução (D): cada minuto de atraso aumenta a necrose miocárdica.",
    "reference": "Diretriz da SBC sobre Tratamento do IAM com Supradesnivelamento do Segmento ST (2015) / ESC Guidelines for the management of acute coronary syndromes (2023)",
    "tags": [
      "infarto agudo do miocárdio",
      "supradesnivelamento de ST",
      "fibrinólise",
      "angioplastia primária"
    ]
  },
  {
    "id": "cerman2026-3",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Paciente de 76 anos, sexo masculino, com histórico de HAS e Diabetes Mellitus tipo 2 e Insuficiência Cardíaca com FEVE 35%, apresenta Fibrilação Atrial (FA) persistente. Qual a conduta antitrombótica recomendada para uso ambulatorial, baseada no escore CHA2DS2-VASc?",
    "options": [
      "(A) Primeira linha a anticoagulação com Antagonista da Vitamina K (Varfarina) com INR alvo entre 2,5 e 3,5.",
      "(B) Apenas AAS (100mg/dia), pois a FEVE de 40% não configura alto risco de eventos.",
      "(C) Anticoagulação Oral (ACO) com DOACs (anticoagulantes orais diretos), se não houver contraindicações.",
      "(D) Anticoagulação com Heparina de Baixo Peso Molecular (HBPM), por se tratar de um paciente com alto risco de sangramento."
    ],
    "correctAnswer": 2,
    "explanation": "CHA₂DS₂-VASc: insuficiência cardíaca (1) + hipertensão (1) + idade ≥ 75 anos (2) + diabetes (1) = 5 pontos — alto risco de AVC. Está indicada anticoagulação oral, e os anticoagulantes orais diretos (apixabana, rivaroxabana, dabigatrana, edoxabana) são preferidos à varfarina na FA não valvar, por menor risco de hemorragia intracraniana.",
    "commentary": "Varfarina com INR 2,5–3,5 (A): na FA não valvar o alvo do INR é 2–3, e os DOACs são a primeira escolha.\n\nApenas AAS (B): o AAS não é recomendado para prevenção de AVC na FA; e o paciente tem FEVE de 35%, além de pontuação alta.\n\nHBPM ambulatorial (D): não é estratégia de longo prazo; não há dado de alto risco de sangramento que justifique.",
    "reference": "ESC Guidelines for the management of atrial fibrillation (2024) / Diretrizes Brasileiras de Fibrilação Atrial (SBC)",
    "tags": [
      "fibrilação atrial",
      "CHA2DS2-VASc",
      "anticoagulantes orais diretos"
    ]
  },
  {
    "id": "cerman2026-4",
    "topography": "1.5",
    "topic": "Hipertireoidismo",
    "module": "Clínica Médica",
    "text": "Qual dos seguintes achados é mais característico do hipertireoidismo por Doença de Graves?",
    "options": [
      "(A) Exoftalmia.",
      "(B) Bradicardia.",
      "(C) Mixedema.",
      "(D) Hiponatremia."
    ],
    "correctAnswer": 0,
    "explanation": "A oftalmopatia (exoftalmia), junto com o mixedema pré-tibial e a acropaquia, é manifestação específica da doença de Graves, causada pelos anticorpos contra o receptor do TSH (TRAb), que também atuam sobre fibroblastos orbitários. Não ocorre em outras causas de hipertireoidismo.",
    "commentary": "Bradicardia (B): o hipertireoidismo causa taquicardia e fibrilação atrial.\n\nMixedema (C): o mixedema generalizado é do hipotireoidismo; na Graves, há o mixedema pré-tibial localizado — mas a alternativa fala em mixedema genérico, e a exoftalmia é o achado mais característico.\n\nHiponatremia (D): não é achado típico do hipertireoidismo.",
    "reference": "Consenso Brasileiro para o diagnóstico e tratamento do hipertireoidismo (SBEM, 2013) / ATA Guidelines (2016)",
    "tags": [
      "doença de Graves",
      "hipertireoidismo",
      "oftalmopatia de Graves"
    ]
  },
  {
    "id": "cerman2026-5",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Clínica Médica",
    "text": "Uma paciente de 42 anos, IMC 35 kg/m², sem comorbidades aparentes, procura atendimento para manejo da obesidade. Após avaliação multiprofissional, decide-se iniciar terapia farmacológica. Segundo diretrizes atuais, qual das seguintes opções é CORRETA com relação ao tratamento medicamentoso da obesidade?",
    "options": [
      "(A) Medicamentos antiobesidade devem ser iniciados apenas em pacientes com IMC ≥ 40 kg/m², independentemente de comorbidades.",
      "(B) O uso de análogos de GLP-1 pode ser considerado em pacientes com IMC ≥ 30 kg/m², mesmo sem comorbidades, quando associado a mudanças de estilo de vida.",
      "(C) A sibutramina é considerada primeira linha em todos os pacientes com obesidade devido à sua segurança cardiovascular.",
      "(D) O tratamento farmacológico substitui a necessidade de acompanhamento nutricional e atividade física estruturada."
    ],
    "correctAnswer": 1,
    "explanation": "Pela ABESO/SBEM, o tratamento farmacológico da obesidade está indicado com IMC ≥ 30 kg/m², ou ≥ 27 kg/m² com comorbidades, sempre associado a mudanças de estilo de vida. Os agonistas do GLP-1 (liraglutida, semaglutida) e a tirzepatida são opções eficazes nesse cenário.",
    "commentary": "Só com IMC ≥ 40 (A): esse é um dos critérios para cirurgia bariátrica; o tratamento clínico começa com IMC ≥ 30.\n\nSibutramina de primeira linha com segurança cardiovascular (C): é contraindicada em doença cardiovascular (estudo SCOUT) e não é primeira linha para todos.\n\nRemédio substitui dieta e exercício (D): o medicamento é sempre adjuvante às mudanças de estilo de vida.",
    "reference": "Diretrizes Brasileiras de Obesidade (ABESO, 2016) / Posicionamento ABESO/SBEM sobre tratamento farmacológico da obesidade (2022)",
    "tags": [
      "obesidade",
      "tratamento farmacológico",
      "agonistas de GLP-1"
    ]
  },
  {
    "id": "cerman2026-6",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Paciente com diabetes mellitus tipo 2 e HbA1c 9,8% após metformina em dose máxima. Próxima medida mais indicada:",
    "options": [
      "(A) Continuar apenas com metformina e reavaliar em 6 meses.",
      "(B) Não tratar, orientar dieta apenas.",
      "(C) Suspender metformina e iniciar sulfonilureia exclusiva.",
      "(D) Adicionar segunda droga — considerar insulina ou agente hipoglicemiante injetável/oral conforme perfil."
    ],
    "correctAnswer": 3,
    "explanation": "HbA1c de 9,8% com metformina em dose máxima: a meta não foi atingida e é preciso intensificar o tratamento acrescentando um segundo agente. A escolha depende do perfil: iSGLT2 ou agonista de GLP-1 se houver doença cardiovascular, insuficiência cardíaca ou renal, ou obesidade; insulina se houver sintomas de catabolismo ou HbA1c muito alta.",
    "commentary": "Manter só metformina por 6 meses (A): é inércia terapêutica; a reavaliação deve ser a cada 3 meses, com intensificação.\n\nSó dieta (B): a hiperglicemia precisa de tratamento farmacológico.\n\nTrocar metformina por sulfonilureia (C): a metformina é mantida como base; a sulfonilureia isolada tem risco de hipoglicemia e ganho de peso.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Tratamento farmacológico do DM2",
    "tags": [
      "diabetes mellitus tipo 2",
      "intensificação do tratamento",
      "metformina",
      "hemoglobina glicada"
    ]
  },
  {
    "id": "cerman2026-7",
    "topography": "3.2",
    "topic": "Hipertensão portal",
    "module": "Clínica Médica",
    "text": "Qual é a conduta profilática secundária de primeira linha para prevenir o ressangramento em pacientes cirróticos com hemorragia digestiva alta HDA por varizes esofágicas?",
    "options": [
      "(A) Combinação de Betabloqueador Não Seletivo (Propranolol ou Carvedilol) e Ligadura Elástica de Varizes Esofágicas (LEVE).",
      "(B) Inibidor de Bomba de Prótons (IBP) em alta dose (ex: Omeprazol 40 mg de 12/12h).",
      "(C) Apenas Antibiótico Profilático (ex: Ceftriaxona) por 7 dias.",
      "(D) Derivação Portossistêmica Intra-Hepática Transjugular (TIPS), como tratamento de primeira linha."
    ],
    "correctAnswer": 0,
    "explanation": "Após o primeiro sangramento por varizes esofágicas, a profilaxia secundária de escolha é a combinação de betabloqueador não seletivo (propranolol, nadolol ou carvedilol) com ligadura elástica seriada até erradicar as varizes. A combinação reduz o ressangramento e a mortalidade mais que cada terapia isolada.",
    "commentary": "IBP em alta dose (B): não previne sangramento varicoso; é usado após ligadura para úlceras pós-procedimento.\n\nSó antibiótico profilático (C): a ceftriaxona por até 7 dias faz parte do tratamento do episódio agudo (reduz infecção e ressangramento), não da profilaxia secundária a longo prazo.\n\nTIPS de primeira linha (D): o TIPS é resgate para falha da profilaxia (ou TIPS preemptivo em Child C/B com sangramento ativo).",
    "reference": "Baveno VII — Renewing consensus in portal hypertension (2022)",
    "tags": [
      "varizes esofágicas",
      "profilaxia secundária",
      "betabloqueador não seletivo",
      "ligadura elástica"
    ]
  },
  {
    "id": "cerman2026-8",
    "topography": "3.2",
    "topic": "Cirrose hepática",
    "module": "Clínica Médica",
    "text": "Homem de 49 anos com cirrose alcoólica descompensada (ascite, encefalopatia). Nesse caso, qual marcador tem maior valor prognóstico?",
    "options": [
      "(A) TGO/TGP.",
      "(B) Bilirrubina total.",
      "(C) Escore MELD-Na.",
      "(D) GGT."
    ],
    "correctAnswer": 2,
    "explanation": "O MELD-Na (bilirrubina, INR, creatinina e sódio) é o principal escore prognóstico da cirrose: estima a mortalidade em 90 dias e organiza a fila de transplante hepático. A hiponatremia acrescenta valor prognóstico ao MELD original.",
    "commentary": "TGO/TGP (A): refletem lesão hepatocelular, não função ou prognóstico.\n\nBilirrubina isolada (B): é um componente do MELD, mas sozinha tem menor poder prognóstico.\n\nGGT (D): marcador de colestase e uso de álcool, sem valor prognóstico na cirrose.",
    "reference": "AASLD Practice Guidance — Evaluation for Liver Transplantation / Kim WR et al. NEJM, 2008 (MELD-Na)",
    "tags": [
      "cirrose hepática",
      "MELD-Na",
      "prognóstico",
      "transplante hepático"
    ]
  },
  {
    "id": "cerman2026-9",
    "topography": "12",
    "topic": "Síndrome da fragilidade",
    "module": "Clínica Médica",
    "text": "Qual das seguintes condições é considerada um componente fundamental do conceito de Fragilidade ou Síndrome da Fragilidade no idoso Critérios de Fried?",
    "options": [
      "(A) Depressão e Isolamento Social.",
      "(B) Incontinência Urinária e Constipação Intestinal.",
      "(C) Perda de Peso Não Intencional (≥4,5kg ou ≥5% no último ano).",
      "(D) Presença de Diabetes Mellitus e Hipertensão Arterial."
    ],
    "correctAnswer": 2,
    "explanation": "O fenótipo de fragilidade de Fried tem cinco critérios: perda de peso não intencional (≥ 4,5 kg ou ≥ 5% no último ano), exaustão autorreferida, fraqueza (força de preensão reduzida), lentidão da marcha e baixo nível de atividade física. Três ou mais critérios = frágil; um ou dois = pré-frágil.",
    "commentary": "Depressão e isolamento social (A): fazem parte de modelos multidimensionais de fragilidade, mas não do fenótipo de Fried.\n\nIncontinência e constipação (B): são síndromes geriátricas, não critérios de Fried.\n\nDiabetes e hipertensão (D): comorbidades não definem fragilidade.",
    "reference": "Fried LP et al. Frailty in older adults: evidence for a phenotype (J Gerontol, 2001)",
    "tags": [
      "síndrome da fragilidade",
      "critérios de Fried",
      "geriatria"
    ]
  },
  {
    "id": "cerman2026-10",
    "topography": "9",
    "topic": "Transfusão sanguínea",
    "module": "Clínica Médica",
    "text": "Segundo a Associação Brasileira de Hematologia, Hemoterapia e Terapia Celular (ABHH) no Consenso PBM-ABHH e no Guia para o uso de hemocomponentes do Ministério da Saúde, em circunstâncias clínicas em que não há sangramento ativo grave, qual das alternativas abaixo reflete a prática recomendada para a transfusão de concentrado de hemácias?",
    "options": [
      "(A) Transfundir concentrado de hemácias em qualquer paciente com hemoglobina < 9 g/dL, independentemente de sintomas ou contexto clínico.",
      "(B) Utilizar o valor de hemoglobina sozinho como critério absoluto de transfusão, ignorando a estabilidade hemodinâmica e sintomas do paciente.",
      "(C) Evitar transfundir concentrado de hemácias mesmo em pacientes sintomáticos com hemoglobina < 7 g/dL se não houver sangramento visível.",
      "(D) Avaliar o paciente considerando hemoglobina, quadro clínico, sintomas de hipoxia ou instabilidade hemodinâmica, e priorizar a estratégia de transfusão orientada por paciente (Patient-Blood-Management/PBM)."
    ],
    "correctAnswer": 3,
    "explanation": "O Patient Blood Management (PBM) orienta a transfusão pelo paciente, não apenas pelo número. Em geral usa-se estratégia restritiva (Hb < 7 g/dL; < 8 g/dL em cardiopatas e cirurgias cardíacas/ortopédicas), mas a decisão considera sintomas de hipóxia, instabilidade hemodinâmica, comorbidades e velocidade da perda.",
    "commentary": "Transfundir todos com Hb < 9 (A): estratégia liberal, sem benefício e com mais riscos.\n\nHb isolada como critério absoluto (B): ignora o contexto clínico, contrariando o PBM.\n\nNão transfundir sintomático com Hb < 7 (C): paciente sintomático com Hb < 7 tem indicação de transfusão, mesmo sem sangramento visível.",
    "reference": "Ministério da Saúde — Guia para o uso de hemocomponentes, 2ª ed. (2015) / Consenso PBM-ABHH",
    "tags": [
      "transfusão de hemácias",
      "patient blood management",
      "estratégia restritiva"
    ]
  },
  {
    "id": "cerman2026-11",
    "topography": "10",
    "topic": "HIV/AIDS",
    "module": "Clínica Médica",
    "text": "Paciente com HIV (CD4 = 38) evolui com perda visual bilateral progressiva. Fundoscopia mostra lesões algodonosas e hemorragias em chama de vela. Sobre o caso, assinale a VERDADEIRA:",
    "options": [
      "(A) É típico de retinite por Toxoplasma gondii.",
      "(B) O tratamento de escolha é o ganciclovir.",
      "(C) A profilaxia primária é indicada com TMP-SMX.",
      "(D) O agente mais provável é Candida albicans."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com aids e CD4 < 50 células/mm³ com perda visual e fundoscopia com exsudatos algodonosos e hemorragias (aspecto de \"pizza\" ou \"queijo com ketchup\"): retinite por citomegalovírus. O tratamento de escolha é ganciclovir (ou valganciclovir), com início da TARV.",
    "commentary": "Toxoplasma (A): a retinocoroidite toxoplásmica tem lesão branca, focal, com vitreíte intensa (\"farol na neblina\"), sem tantas hemorragias.\n\nProfilaxia com SMX-TMP (C): previne pneumocistose e toxoplasmose, não CMV.\n\nCandida (D): a endoftalmite por cândida causa lesões brancas em \"bola de algodão\" no vítreo, geralmente em usuários de cateter ou drogas IV.",
    "reference": "Ministério da Saúde — PCDT para Manejo da Infecção pelo HIV em Adultos (2024) — Infecções oportunistas",
    "tags": [
      "retinite por citomegalovírus",
      "HIV",
      "ganciclovir",
      "infecções oportunistas"
    ]
  },
  {
    "id": "cerman2026-12",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Sobre sepse e choque séptico, analise as afirmações a seguir:\n\nI. O aumento de lactato é marcador de hipoperfusão tecidual. II. A noradrenalina é o vasopressor de primeira escolha. III. O uso de antibiótico pode ser postergado até o resultado da cultura. IV. A reposição volêmica inicial recomendada é de 30 mL/kg.\n\nAssinale a alternativa correta:",
    "options": [
      "(A) Somente as afirmativas I, II e IV estão corretas.",
      "(B) Somente as afirmativas I e II estão corretas.",
      "(C) Todas as afirmativas estão corretas.",
      "(D) Nenhuma das afirmativas está correta."
    ],
    "correctAnswer": 0,
    "explanation": "Pela Surviving Sepsis Campaign 2021: o lactato elevado é marcador de hipoperfusão (I); a noradrenalina é o vasopressor de primeira escolha (II); na hipoperfusão ou hipotensão, sugerem-se 30 mL/kg de cristaloide nas primeiras 3 horas (IV).\n\nA afirmativa III está errada: o antibiótico deve ser iniciado em até 1 hora no choque séptico ou sepse provável, após coletar culturas — sem esperar resultados.",
    "commentary": "Só I e II (B): a IV também está correta.\n\nTodas corretas (C): a III está errada.\n\nNenhuma correta (D): I, II e IV estão corretas.",
    "reference": "Surviving Sepsis Campaign: International Guidelines (2021) / ILAS — Protocolo de sepse",
    "tags": [
      "sepse",
      "choque séptico",
      "noradrenalina",
      "lactato"
    ]
  },
  {
    "id": "cerman2026-13",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Um homem de 42 anos é encontrado inconsciente após ingerir bebida alcoólica artesanal de origem duvidosa. No pronto-socorro, apresenta taquipneia, confusão mental e visão borrada. O exame físico mostra hipotensão leve, respiração de Kussmaul e dor abdominal difusa. A gasometria revela: pH = 7,05; HCO3- = 8 mEq/L; pCO2 = 22 mmHg; lactato = 3 mmol/L; Ânion Gap 20. Com base nas informações acima, qual é a conduta inicial mais adequada?",
    "options": [
      "(A) Administrar glicose e tiamina para prevenir encefalopatia de Wernicke.",
      "(B) Realizar lavagem gástrica e administrar carvão ativado.",
      "(C) Iniciar bicarbonato de sódio, fomepizole e considerar hemodiálise.",
      "(D) Administrar naloxona e flumazenil para reversão medicamentosa."
    ],
    "correctAnswer": 2,
    "explanation": "Ingestão de bebida artesanal de origem duvidosa com acidose metabólica grave de ânion gap elevado, lactato pouco elevado (não explica o gap) e alteração visual: intoxicação por metanol (o ácido fórmico lesa o nervo óptico).\n\nO tratamento é bicarbonato para corrigir a acidose, bloqueio da álcool desidrogenase com fomepizol (ou etanol, quando o fomepizol não estiver disponível) e hemodiálise na acidose grave, alteração visual ou nível sérico alto.",
    "commentary": "Glicose e tiamina (A): úteis no etilista com risco de Wernicke, mas não tratam a intoxicação por metanol.\n\nLavagem gástrica e carvão ativado (B): o metanol é absorvido rapidamente e o carvão não o adsorve.\n\nNaloxona e flumazenil (D): antídotos de opioides e benzodiazepínicos, sem papel aqui; o flumazenil ainda pode causar convulsões.",
    "reference": "American Academy of Clinical Toxicology — Practice guidelines on the treatment of methanol poisoning / EXTRIP recommendations (2015)",
    "tags": [
      "intoxicação por metanol",
      "acidose metabólica",
      "ânion gap",
      "fomepizol"
    ]
  },
  {
    "id": "cerman2026-14",
    "topography": "4.1",
    "topic": "Nefrolitíase",
    "module": "Clínica Médica",
    "text": "De acordo com a Diretriz Brasileira para Diagnóstico e Tratamento Clínico da Nefrolitíase (SBN, 2024–2025), qual das condutas abaixo está CORRETAMENTE indicada para a prevenção de recorrência de cálculos renais de oxalato de cálcio?",
    "options": [
      "(A) Restringir de forma rigorosa a ingestão de cálcio dietético para reduzir a excreção urinária de cálcio.",
      "(B) Incentivar hidratação adequada com meta de diurese superior a 2,0–2,5 litros por dia, visando reduzir a supersaturação urinária de sais litogênicos.",
      "(C) Reduzir a ingestão de frutas cítricas, uma vez que aumentam a excreção urinária de oxalato.",
      "(D) Utilizar diuréticos de alça de forma rotineira para todos os pacientes com hipercalciúria, independentemente de avaliação metabólica prévia."
    ],
    "correctAnswer": 1,
    "explanation": "A medida mais eficaz para prevenir recorrência de qualquer cálculo é a ingestão hídrica suficiente para produzir diurese > 2–2,5 L/dia, reduzindo a supersaturação urinária. Para oxalato de cálcio, somam-se dieta com cálcio normal (1.000–1.200 mg/dia), pouco sal, pouca proteína animal e citrato.",
    "commentary": "Restringir cálcio (A): a restrição de cálcio aumenta a absorção intestinal de oxalato e a oxalúria, piorando a litogênese.\n\nReduzir frutas cítricas (C): o citrato é inibidor da cristalização; as frutas cítricas são estimuladas.\n\nDiurético de alça na hipercalciúria (D): diuréticos de alça AUMENTAM a calciúria; os tiazídicos é que a reduzem, após avaliação metabólica.",
    "reference": "Diretriz Brasileira para Diagnóstico e Tratamento Clínico da Nefrolitíase (SBN) / AUA Guideline — Medical Management of Kidney Stones (2019)",
    "tags": [
      "nefrolitíase",
      "oxalato de cálcio",
      "hidratação",
      "prevenção de recorrência"
    ]
  },
  {
    "id": "cerman2026-15",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Um paciente de 68 anos, hipertenso e diabético, é internado por pneumonia comunitária grave. No terceiro dia de internação, apresenta queda da diurese e elevação da creatinina sérica de 1,0 mg/dL para 2,1 mg/dL em 48 horas. Ao exame, está levemente hipotenso e com turgor diminuído. Sódio urinário: 8 mEq/L; fração de excreção de sódio (FENa): 0,4%; osmolaridade urinária: 520 mOsm/kg. Qual é o diagnóstico e a conduta inicial mais adequados?",
    "options": [
      "(A) Lesão renal aguda intrínseca; iniciar furosemida para estimular diurese.",
      "(B) Lesão renal aguda intrínseca; iniciar antibiótico nefrotóxico ajustado à função renal.",
      "(C) Lesão renal aguda pós-renal; solicitar ultrassonografia para avaliar hidronefrose.",
      "(D) Lesão renal aguda pré-renal; otimizar volemia com cristaloides isotônicos."
    ],
    "correctAnswer": 3,
    "explanation": "Elevação de creatinina com oligúria em paciente hipovolêmico (hipotenso, turgor reduzido), sódio urinário < 20 mEq/L, FENa < 1% e urina concentrada (osmolaridade > 500 mOsm/kg): os túbulos estão íntegros e retêm sódio e água — lesão renal aguda pré-renal. A conduta é repor volume com cristaloide isotônico.",
    "commentary": "Intrínseca com furosemida (A): os índices urinários indicam causa pré-renal; diurético piora a hipovolemia.\n\nIntrínseca com nefrotóxico ajustado (B): não é intrínseca, e nefrotóxicos devem ser evitados.\n\nPós-renal (C): não há dado de obstrução; os índices urinários são típicos de pré-renal.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012)",
    "tags": [
      "lesão renal aguda",
      "pré-renal",
      "fração de excreção de sódio"
    ]
  },
  {
    "id": "cerman2026-16",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Mulher de 46 anos apresenta cefaleia súbita, “a pior da vida”, associada a vômitos e rigidez de nuca. PA 170/100 mmHg. Qual é o exame inicial mais adequado?",
    "options": [
      "(A) TC de crânio sem contraste.",
      "(B) RM de crânio com contraste.",
      "(C) Punção lombar imediata.",
      "(D) Angiografia digital."
    ],
    "correctAnswer": 0,
    "explanation": "Cefaleia súbita e explosiva (\"a pior da vida\"), com vômitos e rigidez de nuca: suspeita de hemorragia subaracnóidea, em geral por ruptura de aneurisma. O exame inicial é a tomografia de crânio sem contraste, com sensibilidade próxima de 100% nas primeiras 6 horas.\n\nSe a TC for normal e a suspeita persistir, faz-se punção lombar (xantocromia); confirmada a HSA, angiotomografia ou angiografia para localizar o aneurisma.",
    "commentary": "RM com contraste (B): menos disponível e mais demorada; não é o exame inicial na emergência.\n\nPunção lombar imediata (C): vem depois de uma TC normal, para não arriscar herniação em caso de lesão expansiva.\n\nAngiografia digital (D): identifica o aneurisma depois do diagnóstico de HSA.",
    "reference": "AHA/ASA Guideline for the Management of Aneurysmal Subarachnoid Hemorrhage (2023)",
    "tags": [
      "hemorragia subaracnóidea",
      "cefaleia em trovoada",
      "tomografia de crânio"
    ]
  },
  {
    "id": "cerman2026-17",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Clínica Médica",
    "text": "A epilepsia é considerada refratária quando:",
    "options": [
      "(A) As crises são diárias e não melhoram com uso de pelo menos três medicações antiepilépticas em doses apropriadas.",
      "(B) As crises não melhoram com pelo menos quatro medicações antiepilépticas em doses apropriadas.",
      "(C) As crises não melhoram com pelo menos duas medicações antiepilépticas em doses apropriadas.",
      "(D) As crises são diárias e não melhoram com pelo menos cinco medicações antiepilépticas em doses apropriadas."
    ],
    "correctAnswer": 2,
    "explanation": "Pela ILAE (2010), epilepsia farmacorresistente é a falha de dois esquemas de fármacos antiepilépticos bem tolerados, adequadamente escolhidos e usados (em monoterapia ou combinação), em alcançar controle sustentado das crises. Esses pacientes devem ser encaminhados a centro de epilepsia (avaliação cirúrgica, dieta cetogênica, neuromodulação).",
    "commentary": "Três medicações e crises diárias (A): basta a falha de duas medicações; a frequência das crises não entra na definição.\n\nQuatro medicações (B): o número é dois.\n\nCinco medicações e crises diárias (D): mesma observação.",
    "reference": "Kwan P et al. Definition of drug resistant epilepsy: consensus proposal by the ILAE (Epilepsia, 2010)",
    "tags": [
      "epilepsia",
      "epilepsia farmacorresistente",
      "ILAE"
    ]
  },
  {
    "id": "cerman2026-18",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente de 68 anos apresenta sintomas de Acidente Vascular Cerebral Isquêmico (AVCI) há 2 horas. Tomografia de Crânio (TC) sem sinais de hemorragia. Qual o principal critério de inclusão para trombólise endovenosa com alteplase (t-PA)?",
    "options": [
      "(A) Janela terapêutica de até 6 horas do início dos sintomas.",
      "(B) Início claro dos sintomas de AVCI isquêmico há ≤4,5 horas.",
      "(C) Pontuação na escala NIHSS igual ou superior a 20.",
      "(D) Ausência de hipodensidade em mais de 1/3 do território da artéria cerebral média (sinal da insula)."
    ],
    "correctAnswer": 1,
    "explanation": "Critérios principais para trombólise IV com alteplase no AVC isquêmico: idade ≥ 18 anos, déficit neurológico mensurável, TC sem hemorragia e início dos sintomas (ou último momento visto bem) há no máximo 4,5 horas.",
    "commentary": "Até 6 horas (A): a janela de 6 horas (ou até 24 horas em casos selecionados) é para trombectomia mecânica.\n\nNIHSS ≥ 20 (C): não há NIHSS mínimo alto como critério; NIHSS muito alto aumenta risco de sangramento, mas não é critério de inclusão.\n\nAusência de hipodensidade > 1/3 da ACM (D): hipodensidade extensa é critério de exclusão, mas o principal critério de inclusão é o tempo.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019) / Diretrizes da SBDCV",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase",
      "janela terapêutica"
    ]
  },
  {
    "id": "cerman2026-19",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Clínica Médica",
    "text": "Homem de 19 anos é trazido à emergência após postar nas redes sociais que iria 'dar fim à própria vida'. Relata sentimento de desesperança, mas nega ter tentado o suicídio. A conduta imediata mais adequada é:",
    "options": [
      "(A) Liberar com orientação familiar.",
      "(B) Prescrever antidepressivo e agendar retorno.",
      "(C) Manter em observação e aguardar avaliação psiquiátrica antes de dar alta.",
      "(D) Solicitar exames toxicológicos e alta médica."
    ],
    "correctAnswer": 2,
    "explanation": "Jovem que anunciou publicamente a intenção de se matar, com desesperança: risco de suicídio que exige avaliação especializada antes de qualquer alta. A conduta é mantê-lo em ambiente seguro e observado, sem acesso a meios letais, até a avaliação psiquiátrica, que define o risco e o encaminhamento (internação ou seguimento intensivo).",
    "commentary": "Liberar com orientação familiar (A): sem avaliação do risco, a alta é insegura.\n\nAntidepressivo e retorno (B): o antidepressivo demora semanas para agir e não protege no momento de crise.\n\nExames toxicológicos e alta (D): não avaliam o risco de suicídio.",
    "reference": "ABP — Suicídio: informando para prevenir (2014) / Ministério da Saúde — Prevenção do suicídio: manual para profissionais",
    "tags": [
      "risco de suicídio",
      "ideação suicida",
      "emergência psiquiátrica"
    ]
  },
  {
    "id": "cerman2026-20",
    "topography": "13",
    "topic": "Esquizofrenia",
    "module": "Clínica Médica",
    "text": "Homem de 32 anos, em uso de haloperidol 10 mg/dia por esquizofrenia, chega à UPA com rigidez muscular intensa, febre de 39°C e confusão mental. PA: 150 × 90 mmHg, FC: 120 bpm. Qual é a conduta inicial mais adequada?",
    "options": [
      "(A) Aumentar a dose do antipsicótico.",
      "(B) Administrar prometazina IM e observar.",
      "(C) Suspender o antipsicótico e iniciar dantrolene e suporte clínico.",
      "(D) Iniciar biperideno e manter haloperidol."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente em uso de antipsicótico típico com rigidez muscular intensa, febre, alteração de consciência e instabilidade autonômica (taquicardia, hipertensão): síndrome neuroléptica maligna.\n\nA conduta é suspender o antipsicótico, suporte intensivo (hidratação, resfriamento, controle autonômico) e, nos casos moderados a graves, dantrolene e/ou bromocriptina. A CPK costuma estar muito elevada.",
    "commentary": "Aumentar o antipsicótico (A): o antipsicótico é a causa.\n\nPrometazina IM (B): é um fenotiazínico com ação antidopaminérgica, que pode piorar o quadro.\n\nBiperideno mantendo haloperidol (D): anticolinérgicos tratam distonia aguda e parkinsonismo, não a síndrome neuroléptica maligna, e o haloperidol precisa ser suspenso.",
    "reference": "Kaplan & Sadock's Synopsis of Psychiatry, 12ª ed. — Síndrome neuroléptica maligna",
    "tags": [
      "síndrome neuroléptica maligna",
      "haloperidol",
      "dantrolene",
      "emergência psiquiátrica"
    ]
  },
  {
    "id": "cerman2026-21",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 48 anos, é atendido no pronto atendimento com quadro de dor epigástrica, tipo cólica, que migrou para a FID há cerca de 7 dias. Havia tido diagnóstico prévio de infecção do trato urinário e estava em tratamento domiciliar com antibióticos orais e sintomáticos, porém o quadro evoluiu com febre e vômitos e decidiu buscar uma nova reavaliação. No momento o paciente se encontra em BEG, febril (38°C), FR: 20irpm, FC: 80bpm. P.A.: 120x80mmHg. Seu abdome é plano, flácido, com abaulamento doloroso à palpação em FID. Sua avaliação laboratorial evidenciou leucograma com 16.000 e desvio à esquerda e PCR: 120mg/dl. Foi submetido a tomografia computadorizada que evidenciou apêndice cecal de paredes espessadas e perfurado, espessamento de ceco e coleção líquida adjacente de cerca de 6cm, bloqueada. Sobre o caso acima, assinale a alternativa CORRETA:",
    "options": [
      "(A) A conduta de escolha para o caso neste momento é a laparotomia exploradora imediata devido a risco iminente de peritonite e sepse grave.",
      "(B) Caso haja janela disponível para punção, o tratamento não operatório com drenagem guiada por ultrassom ou tomografia, associado a antibioticoterapia, pode ser bastante efetivo para o caso.",
      "(C) Na hipótese de o tratamento conservador ser bem sucedido, não há indicação para abordagem cirúrgica eletiva posterior, uma vez que os índices de recorrência após abscesso são baixos.",
      "(D) A laparoscopia é contraindicada para o caso, uma vez que provavelmente haverá indicação de colectomia direita em ambiente infectado."
    ],
    "correctAnswer": 1,
    "explanation": "Apendicite com 7 dias de evolução, perfurada e bloqueada, com abscesso de cerca de 6 cm, em paciente estável e sem peritonite difusa. A conduta preferida é o tratamento não operatório: antibiótico e drenagem percutânea guiada por ultrassom ou TC (abscessos > 3–4 cm), que resolve a maioria dos casos e evita uma cirurgia difícil em tecido inflamado.",
    "commentary": "Laparotomia imediata (A): no plastrão/abscesso bloqueado em paciente estável, a cirurgia precoce tem mais complicações e mais chance de colectomia.\n\nSem cirurgia posterior por baixa recorrência (C): a apendicectomia de intervalo é discutível, mas acima dos 40 anos recomenda-se colonoscopia/TC de controle pelo risco de neoplasia de apêndice ou ceco; a recorrência não é desprezível.\n\nLaparoscopia contraindicada (D): a via laparoscópica pode ser usada mesmo em apendicite complicada, quando há indicação cirúrgica.",
    "reference": "WSES Jerusalem guidelines for diagnosis and treatment of acute appendicitis (2020)",
    "tags": [
      "apendicite complicada",
      "abscesso periapendicular",
      "drenagem percutânea"
    ]
  },
  {
    "id": "cerman2026-22",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 62 anos, sem comorbidades, é transferido de hospital do Interior do Estado para avaliação de quadro de dor abdominal há 5 dias. Paciente refere que apresentou dor tipo cólica, em FIE, com aumento progressivo de intensidade, associada a astenia, náuseas, vômitos e constipação. Fez uso de sintomáticos no domicílio, mas percebeu piora do quadro após 3 dias, com piora da dor e início de febre, procurando assistência médica, sendo internado para antibioticoterapia e transferido para Manaus. Neste momento, seu exame físico evidencia BEG, lúcido e orientado, FC: 98bpm, FR: 26irpm, P.A.: 120x80 mmHg. Seu abdome é globoso, algo distendido, doloroso à palpação em FIE e hipogástrio, com sinais claros de irritação peritoneal. Leucograma: 22.000 com 96% de neutrófilos. PCR: 150mg/dl. Foi submetido a tomografia de abdome que revelou presença de divertículos em sigmoide e quadro agudo compatível com Hinchey Modificado classe III/IV. Sobre o caso acima, assinale a alternativa INCORRETA:",
    "options": [
      "(A) A associação de piperacilina e tazobactam é escolha adequada como parte do tratamento empírico inicial deste paciente, porém a antibioticoterapia deve ser reavaliada após o resultado das culturas.",
      "(B) O quadro de peritonite presente indica tratamento cirúrgico urgente, preferencialmente laparoscópico, no qual a sigmoidectomia e anastomose primária, com ou sem ileostomia protetora, representam a conduta de escolha neste momento.",
      "(C) Em caso de evolução para instabilidade hemodinâmica associada a achado cirúrgico de peritonite fecal, o manejo inicial com damage control, curativo à vácuo e terapia intensiva, com posterior reabordagem para anastomose primária, seria conduta adequada para o caso.",
      "(D) Uma vez que se trata de cirurgia infectada, com elevada morbimortalidade e alto risco de deiscência de anastomose, o procedimento de Hartmann é a conduta inicial de escolha para o caso neste momento."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a alternativa INCORRETA. Diverticulite Hinchey III/IV (peritonite purulenta ou fecal) tem indicação cirúrgica urgente. Em paciente estável, sem comorbidades graves, as diretrizes atuais preferem a sigmoidectomia com anastomose primária (com ou sem ileostomia de proteção), que tem morbimortalidade semelhante e maior chance de reconstrução do trânsito que o Hartmann.\n\nO Hartmann fica reservado para pacientes instáveis, imunossuprimidos ou com muitas comorbidades; afirmar que ele é a conduta de escolha está errado.",
    "commentary": "Piperacilina-tazobactam com reavaliação pelas culturas (A): correto.\n\nCirurgia urgente com anastomose primária, de preferência laparoscópica (B): correto para paciente estável.\n\nControle de danos no instável com peritonite fecal (C): correto; laparotomia abreviada, peritoniostomia e reabordagem.",
    "reference": "ASCRS Clinical Practice Guidelines for Left-sided Colonic Diverticulitis (2020) / WSES Guidelines for acute left-sided colonic diverticulitis (2020)",
    "tags": [
      "diverticulite complicada",
      "classificação de Hinchey",
      "anastomose primária",
      "cirurgia de Hartmann"
    ]
  },
  {
    "id": "cerman2026-23",
    "topography": "3.2",
    "topic": "Cirrose hepática",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 42 anos, com história de abuso crônico de álcool, é levado pela família para avaliação médica devido a quadro de emagrecimento e distensão abdominal, sem demais queixas. O paciente refere estar em tratamento para o alcoolismo e pretende cuidar da sua saúde. Ao exame físico, o paciente se apresenta emagrecido, porém em BEG, lúcido e orientado, eupneico, afebril, anictérico e hemodinamicamente estável. Seu abdome é semigloboso, indolor à palpação, com discreta circulação colateral visível e baço palpável. Ausência de edema de membros inferiores. Traz consigo ultrassonografia que evidencia fígado de tamanho reduzido, de contorno irregular e serrilhado, de textura ecográfica heterogênea, associada a moderada ascite e esplenomegalia. Sobre o caso acima, assinale a alternativa INCORRETA:",
    "options": [
      "(A) A endoscopia digestiva alta pode revelar alterações que confirmam aumento da resistência hepática ao fluxo venoso portal, com secundário fluxo hepatofugal para o território esplâncnico, principalmente pela drenagem venosa do estômago.",
      "(B) O hemograma pode revelar alterações que sugerem hiperesplenismo e testes como o TAP e o INR podem sugerir algum grau de insuficiência funcional hepática.",
      "(C) A presença de ascite, associada ao emagrecimento, é altamente sugestiva de trombose portal aguda e a ultrassonografia com doppler é o exame de imagem de maior sensibilidade diagnóstica para o caso.",
      "(D) O tratamento do alcoolismo, o uso de drogas beta-bloqueadoras e a vigilância com endoscopia digestiva alta devem fazer parte do tratamento deste paciente."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a alternativa INCORRETA. Etilista com fígado pequeno e irregular, ascite, esplenomegalia e circulação colateral: cirrose hepática com hipertensão portal. Ascite e emagrecimento no etilista são explicados pela própria cirrose e pela desnutrição; não são sugestivos de trombose portal aguda, que se manifesta por dor abdominal súbita e pode cursar com isquemia intestinal.",
    "commentary": "EDA mostrando varizes por fluxo hepatofugal (A): correto; a EDA identifica varizes esofagogástricas, sinal de hipertensão portal.\n\nHiperesplenismo e TAP/INR alterados (B): correto; plaquetopenia e prolongamento do TAP refletem hipertensão portal e insuficiência hepática.\n\nAbstinência, betabloqueador e vigilância endoscópica (D): correto.",
    "reference": "Baveno VII (2022) / EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "cirrose hepática",
      "hipertensão portal",
      "trombose de veia porta"
    ]
  },
  {
    "id": "cerman2026-24",
    "topography": "3.3",
    "topic": "Colecistite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 72 anos, hipertensa, diabética e cardiopata, é trazida por familiares em serviço de pronto socorro com quadro de dor tipo cólica, aguda, em HD, irradiada para o dorso, associada a vômitos, há 2 dias (SIC). As informações colhidas podem não ser precisas, uma vez que a paciente tem sequelas de AVC isquêmico há 5 anos e se expressa com dificuldade. Ao exame físico, a paciente se apresenta emagrecida, desidratada, anictérica, FC: 82bpm, FR: 22irpm, P.A.: 100x70mmHg. A paciente apresenta fascies de dor à palpação profunda do HD e há a impressão de palpação de plastrão local. Leucograma: 11.000 e PCR: 80mg/dl. Submetida a USG à beira leito, observou-se vesícula biliar túrgida, de paredes espessadas, contendo cálculos. Após discussão do caso com a Clínica Médica, optou-se por iniciar tratamento clínico com ceftriaxona, metronidazol e sintomáticos. Após 48 horas, a paciente evoluiu de forma insatisfatória, apresentando sonolência e oligúria, mantendo dor em HD, com plastrão palpável e iniciando febre baixa (1 episódio). A reavaliação laboratorial evidenciou piora da leucocitose (agora 14.000), plaquetas 80.000 e PCR de 120mg/dl. Uma nova USG à beira leito evidenciou discreta infiltração de gás na parede da vesícula biliar. Sobre o caso acima, assinale a alternativa CORRETA:",
    "options": [
      "(A) Devido ao grau de fragilidade desta paciente, a melhor conduta é transferência da paciente para UTI, escalonamento do antibiótico para cefepime e reavaliação ultrassonográfica em 48 horas.",
      "(B) A conduta inicial foi inadequada, estando indicada a colecistectomia laparoscópica urgente no momento da chegada da paciente.",
      "(C) Uma vez que a piora do quadro denota gravidade Tóquio III com potencial evolução para perfuração, a conduta mais adequada neste momento é a colecistostomia percutânea trans-hepática.",
      "(D) Caso a tomografia computadorizada com contraste venoso confirmar os achados ultrassonográficos, a colecistectomia por laparotomia é a conduta mais adequada neste momento."
    ],
    "correctAnswer": 2,
    "explanation": "Idosa frágil com colecistite aguda litiásica que piora apesar do antibiótico, com rebaixamento de consciência, oligúria e plaquetopenia (disfunções orgânicas) e gás na parede da vesícula: colecistite grave (Tóquio III), possivelmente enfisematosa.\n\nEm paciente de alto risco cirúrgico, a conduta é a drenagem da vesícula — colecistostomia percutânea trans-hepática guiada por imagem —, com suporte intensivo; a colecistectomia vem depois, se a paciente tiver condições.",
    "commentary": "UTI, cefepima e nova US em 48 h (A): o foco séptico precisa ser drenado agora; só trocar antibiótico atrasa o controle.\n\nColecistectomia laparoscópica urgente na chegada (B): em idosa com várias comorbidades, o tratamento clínico inicial foi razoável; a falha é que indica drenagem.\n\nColecistectomia por laparotomia (D): em Tóquio III com disfunções orgânicas e alto risco, a drenagem percutânea é preferível.",
    "reference": "Tokyo Guidelines 2018 (TG18) — Acute cholecystitis",
    "tags": [
      "colecistite aguda",
      "diretrizes de Tóquio",
      "colecistostomia percutânea",
      "colecistite enfisematosa"
    ]
  },
  {
    "id": "cerman2026-25",
    "topography": "3.1",
    "topic": "Hemorragia digestiva baixa",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 72 anos, dá entrada no pronto socorro queixando sangramento vermelho vivo durante as defecações há cerca de 2 dias. O quadro iniciou com hematoquezia e no momento a paciente apresentou uma média de 5 episódios de enterorragia e episódio de síncope no domicílio. A paciente é hipertensa e faz uso de AAS e clopidogrel. Refere que foi submetida a colonoscopia para rastreio de neoplasia de cólon há 2 anos que evidenciou apenas presença de divertículos no sigmoide. Nega dor abdominal e alteração significativa do hábito alimentar recentemente. Ao exame físico, a paciente se encontra pálida ++/4, lúcida e orientada, FC: 100bpm, FR: 27irpm e P.A.: 110x70mmHg. Seu abdome é plano, flácido, simétrico e indolor à palpação, sem massas palpáveis. Toque retal sem alterações, exceto por sangue em dedo de luva. Seu hemograma revelou Hb: 8mg/dl e contagem de plaquetas: 90.000/µL. Sobre o caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Os dados acima nos permitem afirmar que a paciente é considerada de alto risco para complicações, com indicação intervenções terapêuticas hospitalares.",
      "(B) A conduta inicial consiste na otimização da frequência cardíaca e pressão arterial através de ressuscitação volêmica com cristalóides, manutenção do AAS e suspensão do clopidogrel, no entanto, sem indicação de transfusão de concentrado de hemácias ou plaquetas neste momento.",
      "(C) A angiotomografia computadorizada pode estar indicada para o caso na tentativa de delimitar o segmento sangrante ou definir a rede vascular do cólon, porém há indicação de colonoscopia o mais breve possível, pelo seu caráter diagnóstico e potencialmente terapêutico.",
      "(D) No caso de a colonoscopia não ser acessível e a angiotomografia definir o sítio de sangramento, a melhor conduta para esta paciente seria a colectomia segmentar."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a alternativa INCORRETA. Hemorragia digestiva baixa provavelmente diverticular, grave (síncope, Hb 8, FC 100, dupla antiagregação). Se a colonoscopia não estiver disponível e a angiotomografia localizar o sangramento ativo, o passo seguinte é a angiografia com embolização superseletiva — não a colectomia, que fica para falha do tratamento endoscópico e angiográfico.",
    "commentary": "Alto risco com indicação de tratamento hospitalar (A): correto (síncope, Hb baixa, antiagregantes).\n\nRessuscitação, manter AAS e suspender clopidogrel (B): a banca considerou correta; o AAS em prevenção secundária é mantido.\n\nAngiotomografia e colonoscopia precoce (C): correto; a colonoscopia após preparo é diagnóstica e terapêutica.",
    "reference": "ACG Clinical Guideline: Management of Acute Lower Gastrointestinal Bleeding (2023)",
    "tags": [
      "hemorragia digestiva baixa",
      "doença diverticular",
      "angioembolização",
      "angiotomografia"
    ]
  },
  {
    "id": "cerman2026-26",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Você é chamado para avaliar um paciente na enfermaria da clínica médica, sob o diagnóstico de pancreatite aguda biliar. O paciente tem história de dor contínua, em barra, intensa, associado a vômitos e sinais de hipovolemia iniciado há cerca de 3 semanas, evoluindo com choque refratário às condutas iniciais e insuficiência renal, sendo encaminhado a UTI. Ao fim da primeira semana, obteve estabilização do status hemodinâmico e melhora dos níveis séricos das escórias nitrogenadas, no entanto mantinha dor epigástrica irradiada para o dorso, náuseas e vômitos ocasionais e baixa tolerância a alimentação pela via oral. O tratamento clínico de suporte foi mantido, iniciada dieta enteral e realizada tomografia computadorizada que evidenciou necrose de 30 a 50% do pâncreas e coleção fluida retroperitoneal peripancreática. Neste momento, após 3 semanas de tratamento, o paciente encontra-se hemodinamicamente estável, com função renal normal, ausência de febre, dor controlável sem morfina e aceitando dieta oral. Sua tomografia de controle evidencia organização da coleção peripancreática e manutenção do grau de necrose pancreática. Sobre os próximos passos da conduta desta paciente, assinale a alternativa CORRETA:",
    "options": [
      "(A) A conduta adequada tanto para a coleção fluida quanto para a necrose pancreática é a expectante, sem uso de antibióticos, uma vez que há boa probabilidade de organização das lesões e sua resolução espontânea.",
      "(B) Uma vez que a paciente está devidamente estável e com baixo risco cirúrgico, a melhor conduta neste momento é a necrosectomia laparoscópica com drenagem da coleção fluida.",
      "(C) A decisão entre tratamento cirúrgico e tratamento clínico depende de punção percutânea da coleção ou da necrose para bacterioscopia e cultura.",
      "(D) O potencial para infecção da coleção fluida, neste momento, é crescente, justificando tratamento empírico com antibióticos até a resolução completa das complicações locais."
    ],
    "correctAnswer": 0,
    "explanation": "Pancreatite necrosante com coleção peripancreática, agora com 3 semanas, paciente estável, sem febre, aceitando dieta e com coleção em organização (necrose encapsulada em formação). Necrose estéril e coleções assintomáticas são tratadas de forma expectante, sem antibiótico profilático.\n\nIntervenção (preferencialmente endoscópica ou percutânea, em abordagem step-up, após 4 semanas) só se houver infecção ou sintomas compressivos persistentes.",
    "commentary": "Necrosectomia laparoscópica agora (B): intervenção não está indicada sem infecção ou sintomas; e a necrosectomia precoce aumenta a mortalidade.\n\nPunção para cultura para decidir (C): a punção por agulha fina não é rotina; a suspeita de infecção é clínica e tomográfica (gás).\n\nAntibiótico empírico até resolução (D): antibiótico profilático não é recomendado na necrose estéril.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024) / IAP/APA evidence-based guidelines (2013)",
    "tags": [
      "pancreatite necrosante",
      "necrose encapsulada",
      "coleção peripancreática",
      "abordagem step-up"
    ]
  },
  {
    "id": "cerman2026-27",
    "topography": "3.3",
    "topic": "Coledocolitíase",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, obeso, 58 anos, apresenta quadro de dor tipo cólica em HD, irradiada para o dorso, associada a náuseas e vômitos, após ingesta de alimento rico em gordura. Traz consigo USG de abdome, realizada há 1 ano, que evidencia vesícula biliar contendo cálculos. Está internado há 3 dias, sob tratamento clínico e evoluiu neste período com presença de icterícia. No momento o paciente se encontra em BEG, lúcido e orientado, eupneico, afebril e normotenso. Seu abdome é plano, flácido, pouco doloroso à palpação profunda no HD, sem plastrão palpável. Aceita dieta oral. Sua avaliação laboratorial evidenciou leucograma com 11.000 leucócitos, PCR: 45mg/dl, bilirrubinas totais: 4,2mg/dl, bilirrubina direta: 3,4 mg/dl, fosfatase alcalina: 250mg/dl e gamaGT: 380mg/dl. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Caso a ultrassonografia de controle evidencie dilatação da via biliar principal, o próximo passo seria a tomografia com contraste venoso devido a sua ótima sensibilidade e especificidade para avaliação de complicações no colédoco distal.",
      "(B) Já que o paciente não apresenta critérios de risco para obstrução de via biliar, a melhor conduta para o caso é a colecistectomia laparoscópica sem colangiografia intra-operatória e seguimento ambulatorial da icterícia.",
      "(C) Caso a ultrassonografia de controle evidencie dilatação das vias biliares, uma opção bastante adequada é a realização de abordagem endoscópica com ultrassom endoscópica e possível CPRE, sem necessidade de investigação prévia com ressonância magnética.",
      "(D) A emergente técnica de exploração endoscópica da via biliar concomitante com colecistectomia laparoscópica no mesmo tempo anestésico foi abandonada devido à elevada incidência de pancreatite pós CPRE nesses casos."
    ],
    "correctAnswer": 2,
    "explanation": "Colelitíase com icterícia colestática (bilirrubina 4,2 com predomínio direto, FA e GGT elevadas) após cólica biliar: suspeita de coledocolitíase. Com bilirrubina > 4 mg/dL e colédoco dilatado à US, o risco é alto (ASGE), e uma opção adequada é ir direto à abordagem endoscópica (ecoendoscopia seguida de CPRE no mesmo tempo, se confirmar o cálculo), sem precisar de colangiorressonância.",
    "commentary": "TC com contraste para o colédoco distal (A): a TC tem baixa sensibilidade para cálculos do colédoco; prefere-se colangiorressonância ou ecoendoscopia.\n\nColecistectomia sem colangiografia (B): o paciente tem preditores de coledocolitíase; operar sem avaliar a via biliar pode deixar cálculo residual.\n\nAbordagem combinada abandonada (D): a CPRE intraoperatória (técnica rendezvous) e a exploração laparoscópica da via biliar são usadas e têm até menor taxa de pancreatite.",
    "reference": "ASGE Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis (2019)",
    "tags": [
      "coledocolitíase",
      "icterícia obstrutiva",
      "ecoendoscopia",
      "CPRE"
    ]
  },
  {
    "id": "cerman2026-28",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 16 anos de idade, vem ao pronto socorro queixando dor ínguino-escrotal, contínua, intensa, de início súbito logo após esforço físico, há cerca 2 horas, associada a vômitos. Ao exame físico, o paciente se encontrava em BEG, eupneico, afebril e hemodinamicamente estável. Observa-se abaulamento ínguino-escrotal à direita, irredutível, bastante doloroso à palpação, com calor e rubor local. O paciente refere que apresenta esse tipo de abaulamento desde a infância, mas que reduzia facilmente à palpação ou durante o decúbito. Sobre o caso acima, assinale a alternativa CORRETA:",
    "options": [
      "(A) Os dados acima nos permitem afirmar que se trata de urgência cirúrgica, com provável indicação de abordagem tanto da região inguinal quanto da cavidade abdominal, podendo ser realizada por via laparoscópica.",
      "(B) Por tratar-se de infecção aguda de partes moles, o próximo passo na conduta é o início de antibioticoterapia, investigação da extensão da infecção com ressonância magnética e reavaliação clínica após 48 horas.",
      "(C) Por tratar-se de hérnia inguinal Nyhus IIIA, complicada, o uso de telas inorgânicas para a sua correção cirúrgica está contra-indicado.",
      "(D) A melhor conduta neste momento é a analgesia com morfina, sedação do paciente e a redução do conteúdo herniário para posterior correção cirúrgica eletiva."
    ],
    "correctAnswer": 0,
    "explanation": "Hérnia inguinoescrotal antes redutível que se torna irredutível, muito dolorosa, com calor e rubor local e vômitos: hérnia encarcerada com provável estrangulamento — urgência cirúrgica.\n\nA cirurgia deve avaliar a viabilidade do conteúdo; a via laparoscópica permite inspecionar a cavidade e, se necessário, ressecar alça isquêmica.",
    "commentary": "Infecção de partes moles com antibiótico e RM (B): os sinais inflamatórios refletem isquemia do conteúdo herniário; a conduta é cirúrgica.\n\nTela contraindicada (C): em campo limpo-contaminado, telas sintéticas podem ser usadas; a contraindicação relativa é na contaminação grosseira (ressecção intestinal com peritonite).\n\nRedução sob sedação (D): redução manual de hérnia com sinais de estrangulamento é contraindicada, pelo risco de reduzir alça necrosada.",
    "reference": "HerniaSurge — International guidelines for groin hernia management (2018) / WSES guidelines for emergency repair of complicated abdominal wall hernias (2017)",
    "tags": [
      "hérnia inguinal encarcerada",
      "estrangulamento",
      "urgência cirúrgica"
    ]
  },
  {
    "id": "cerman2026-29",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 28 anos, está no terceiro trimestre de gravidez do segundo filho (o primeiro filho nasceu de parto natural há 4 anos), busca atendimento médico devido a dor anal. A paciente refere que há cerca de 1 dia, após defecação dificultada por fezes endurecidas. Nega sangramento pelo ânus. Refere constipação crônica, com evacuação de fezes endurecidas, sob esforço, 2 vezes por semana, que piorou durante a gravidez. Ao exame físico, a paciente apresenta lesão nodular em borda anal, de coloração violácea, consistência firme, localizada às 9:00, abaixo da linha pectínea, bastante dolorosa à palpação. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Os dados acima fecham quadro clássico de fissura anal secundária ao trauma da defecação difícil, estando indicado tratamento com pomadas a base de bloqueadores de canal de cálcio, como o diltiazem.",
      "(B) Devido ao curto tempo de evolução, uma boa opção de tratamento é a excisão da lesão ou evacuação cirúrgica do coágulo, com melhora rápida dos sintomas e menor recorrência da doença.",
      "(C) Os dados acima nos permitem afirmar que se trata de urgência cirúrgica, com tratamento baseado em incisão, drenagem e antibioticoterapia, devido o risco de evolução para gangrena de Fournier.",
      "(D) Devido ao risco aumentado de neoplasia anal, a paciente deve ser submetida a biópsia ambulatorial da lesão e retossigmoidoscopia para avaliação da extensão da doença."
    ],
    "correctAnswer": 1,
    "explanation": "Nódulo violáceo, firme e doloroso na borda anal, abaixo da linha pectínea, surgido há 1 dia após evacuação com esforço: trombose hemorroidária externa.\n\nNas primeiras 48–72 horas, a excisão do trombo (ou do mamilo trombosado) sob anestesia local alivia rápido a dor e reduz recorrência. Depois disso, prefere-se tratamento conservador (analgesia, banhos de assento, laxativos), porque a dor já está em regressão. Na gestação, o procedimento sob anestesia local é seguro.",
    "commentary": "Fissura anal (A): a fissura é uma úlcera linear no anoderma, geralmente posterior (6 h), com dor intensa às evacuações e sangramento — não um nódulo violáceo.\n\nAbscesso com risco de Fournier (C): não há febre, flutuação ou celulite.\n\nNeoplasia anal com biópsia (D): o quadro agudo e típico não sugere neoplasia.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids (2024)",
    "tags": [
      "trombose hemorroidária",
      "doença hemorroidária",
      "gestação"
    ]
  },
  {
    "id": "cerman2026-30",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 15 anos, apresenta quadro de dor em FID, de início súbito, progressiva, de intensidade moderada a intensa, há cerca de 8 horas, acompanhada de náuseas e vômitos. Fez uso de sintomáticos no domicílio, sem sucesso. Menarca aos 11 anos, com ciclos irregulares. Última menstruação há 1 mês. Nega leucorreia. Ao exame físico, a paciente se encontra em BEG, normocorada, FC: 80bpm, FR: 16irpm, P.A.: 110x70mmHg. Seu abdome é plano, flácido, doloroso à palpação profunda em FID, sem sinais claros de irritação peritoneal. Foi submetida a ultrassom à beira leito que evidenciou ovário direito aumentado de volume às custas de massa cística de cerca de 8cm, deslocado para a linha média em posição retrouterina e pequena quantidade de líquido na pelve. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Os dados apresentados sugerem abdome agudo de tratamento clínico secundário a lesão cística ovariana, sendo indicado tratamento sintomático e encaminhamento para avaliação ginecológica ambulatorial.",
      "(B) Os dados fornecidos são altamente sugestivos de prenhez tubária não rôta, com abordagem via laparotomia preferencial à laparoscópica neste momento.",
      "(C) A ultrassonografia com Doppler confirmaria a necessidade urgente de abordagem cirúrgica para esta paciente.",
      "(D) Tanto os dados da história quanto do exame físico são inespecíficos e a ultrassonografia mostra doença cística não complicada, o que sugere que o quadro deve ser secundário a apendicite aguda em fase inicial."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com dor súbita em fossa ilíaca direita, náuseas e vômitos, e ovário aumentado por massa cística de 8 cm deslocada para a linha média: torção anexial até prova em contrário (massas > 5 cm são o principal fator de risco).\n\nO Doppler pode mostrar redução ou ausência de fluxo e o sinal do redemoinho, reforçando a indicação de cirurgia urgente — de preferência laparoscópica, com distorção e preservação do ovário. Doppler normal, porém, não afasta torção.",
    "commentary": "Abdome agudo de tratamento clínico (A): torção é urgência; atrasar a cirurgia leva à perda do ovário.\n\nPrenhez tubária com laparotomia (B): sem dado de gravidez e com massa cística ovariana de 8 cm; além disso, a laparoscopia é a via preferida no estável.\n\nApendicite inicial (D): a massa ovariana deslocada e a dor súbita são muito sugestivas de torção.",
    "reference": "ACOG Committee Opinion nº 783 — Adnexal Torsion in Adolescents (2019)",
    "tags": [
      "torção ovariana",
      "torção anexial",
      "abdome agudo",
      "ultrassonografia com Doppler"
    ]
  },
  {
    "id": "cerman2026-31",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 45 anos, agricultor, apresenta história de dor abdominal intensa, que iniciou subitamente no epigástrio e migrou para todo o abdome, irradiando par o pescoço e ombro esquerdo após algumas horas. Procurou o atendimento de urgência da sua comunidade rural, sendo transferido para Manaus após 9 horas de evolução. No momento se encontra em REG, com fascies de dor, afebril, taquicardico, taquipneico e normotenso. Seu abdome é difusamente tenso, doloroso à palpação superficial, com sinais claros de irritação peritoneal. Sobre o caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) A abordagem inicial inclui ressuscitação volêmica, início de antibioticoterapia empírica, inibidores de bomba de prótons e, apesar de inespecífica para a patologia em questão, avaliação laboratorial com hemograma, proteína C reativa e lactato sérico.",
      "(B) A tomografia computadorizada tem maior sensibilidade e especificidade diagnóstica para este tipo de abdome agudo que a radiografia simples de abdome.",
      "(C) O histórico prévio de sintomas dispépticos crônicos ou da ausência prévia de dor associado ao uso de antinflamatórios não hormonais e o aspecto macroscópico da lesão gástrica são parâmetros importantes para a indicação (ou não) de gastrectomia para tratamento do caso.",
      "(D) O tratamento endoscópico com uso de stents ou sutura é o atual padrão ouro para este caso, devido a menor morbimortalidade e menores taxas de deiscência e sepse."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a alternativa INCORRETA. Dor epigástrica súbita que se generaliza, com irradiação para o ombro (irritação diafragmática) e peritonite difusa: úlcera péptica perfurada. Com 9 horas de evolução e peritonite generalizada, o tratamento padrão é cirúrgico (rafia com omentoplastia, por laparoscopia ou laparotomia). Stents e suturas endoscópicas são opções em casos selecionados, não o padrão-ouro.",
    "commentary": "Ressuscitação, antibiótico, IBP e exames iniciais (A): correto.\n\nTC mais sensível e específica que a radiografia (B): correto; detecta pequenas quantidades de pneumoperitônio.\n\nHistória, uso de AINE e aspecto da lesão orientam gastrectomia (C): correto; úlcera crônica, grande ou suspeita de malignidade pode exigir ressecção.",
    "reference": "WSES guidelines for the management of perforated and bleeding peptic ulcer (2020)",
    "tags": [
      "úlcera péptica perfurada",
      "abdome agudo perfurativo",
      "tratamento cirúrgico"
    ]
  },
  {
    "id": "cerman2026-32",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Paciente de sexo masculino, 18 anos, é atendido em pronto-socorro, vítima de ferimento abdominal penetrante por arma de fogo em mesogástrio e HD, sendo submetido a laparotomia exploradora que evidenciou moderada quantidade de sangue livre na cavidade, lesões transfixantes no estômago e cólon transverso e 3 ferimentos no intestino delgado e no seu mesentério. Demais vísceras abdominais sem evidência de lesão. A conduta tomada foi a lavagem da cavidade e sutura simples das lesões e o paciente foi encaminhado a enfermaria no pós-operatório. Você foi chamado pela enfermagem para avaliar este paciente no 5º. dia de pós-operatório, devido a evolução insatisfatória, com dor abdominal difusa, febre e saída de secreção pela ferida cirúrgica. O paciente se apresentava em REG, febril (38,5oC), FC: 100bpm, FR: 28irpm, P.A.: 80x50mmHg. Seu abdome era distendido, difusamente doloroso à palpação. Você retirou dois pontos da ferida cirúrgica e observou abundante drenagem de secreção de cor esverdeada e odor bastante fétido. Sobre os próximos passos na abordagem deste paciente, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Caso a nova abordagem cirúrgica indique tratamento com abdome aberto, a instabilidade hemodinâmica secundária a infecção intra-abdominal complicada contraindica o curativo abdominal à vácuo como parte do tratamento deste paciente, sendo o damage control com bolsa de Bogotá a conduta preferencial neste momento.",
      "(B) O adequado controle cirúrgico do foco infeccioso, com desbridamento de tecidos desvitalizados, novas suturas ou anastomoses e lavagem da cavidade abdominal, pode possibilitar esquemas antibióticos de curta duração, usualmente entre 4 e 5 dias.",
      "(C) A dosagem de procalcitonina no caso acima pode guiar a duração da antibioticoterapia, uma vez que seus níveis séricos são diretamente correlacionáveis com a severidade da infecção bacteriana.",
      "(D) Os dados acima nos permitem inferir que há provável indicação de terapia antifúngica para Candida spp."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. Peritonite secundária pós-operatória (deiscência de sutura com fístula fecal e choque séptico) exige reoperação. Se o abdome for deixado aberto, a terapia por pressão negativa (vácuo) é o método preferido de fechamento temporário, inclusive no paciente instável — não é contraindicada. A bolsa de Bogotá é opção de recurso.",
    "commentary": "Controle do foco permite antibiótico curto, de 4–5 dias (B): correto (estudo STOP-IT).\n\nProcalcitonina guiando a duração (C): a banca considerou correta; ajuda a suspender o antibiótico com segurança.\n\nPossível indicação de antifúngico (D): correto; peritonite pós-operatória com perfuração gástrica e reoperação é fator de risco para candidíase intra-abdominal.",
    "reference": "WSES/SIS-E guidelines for the management of intra-abdominal infections (2017) / WSES open abdomen guidelines (2018) / Estudo STOP-IT (NEJM, 2015)",
    "tags": [
      "peritonite secundária",
      "abdome aberto",
      "terapia por pressão negativa",
      "infecção intra-abdominal"
    ]
  },
  {
    "id": "cerman2026-33",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 8 anos, é trazida pela mãe para avaliação médica devido a dor e distensão abdominal associada a vômitos, há 2 dias. A dor parece ser intermitente, tipo cólica, progressiva, de média intensidade. Refere ainda parada de eliminação de gases e fezes e que a paciente não urina há 6 horas. Ao exame físico a paciente se encontra em REG, hipoativa, com fascies de dor, taquicárdica, taquipneica e levemente hipotensa. Seu abdome se apresenta distendido, hipertimpânico, com RHA de luta, difusamente doloroso à palpação, sem sinais de irritação peritoneal, com cicatriz em FID devido a apendicectomia prévia há 2 anos. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) A presença de cirurgia prévia sugere fortemente que a intussuscepção deve ser a principal hipótese diagnóstica, estando indicada a tentativa de redução via colonoscopia.",
      "(B) A tomografia computadorizada com duplo contraste é bastante útil nestes casos, uma vez que o contraste venoso auxilia no diagnóstico da patologia em questão e suas possíveis complicações, e o contraste oral solúvel em água pode ser terapêutico ou preditivo da falha do tratamento conservador.",
      "(C) A sondagem nasogástrica é contraindicada neste caso devido a relevante aumento na incidência de broncoaspiração de secreções em crianças.",
      "(D) A evolução progressiva do quadro sugere a necessidade de laparotomia imediata pelo elevado risco iminente de isquemia intestinal, confirmável com a radiografia simples de abdome."
    ],
    "correctAnswer": 1,
    "explanation": "Criança com apendicectomia prévia, cólica, distensão, vômitos, parada de eliminação e ruídos de luta: obstrução do intestino delgado por bridas. A TC com contraste venoso define o nível, a causa e sinais de sofrimento de alça; o contraste hidrossolúvel oral (Gastrografin) tem papel diagnóstico e terapêutico — se chegar ao cólon em 24 horas, prediz sucesso do tratamento conservador.",
    "commentary": "Intussuscepção com colonoscopia (A): a cirurgia prévia sugere bridas; a intussuscepção é mais comum em lactentes e é reduzida por enema guiado por imagem.\n\nSonda nasogástrica contraindicada (C): a descompressão gástrica é parte essencial do tratamento e reduz o risco de aspiração.\n\nLaparotomia imediata confirmada por radiografia (D): sem sinais de isquemia ou peritonite, tenta-se tratamento conservador; a radiografia não confirma isquemia.",
    "reference": "Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (WSES, 2017)",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "contraste hidrossolúvel",
      "cirurgia pediátrica"
    ]
  },
  {
    "id": "cerman2026-34",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 10 anos, é trazida ao hospital pelos familiares devido a extensa queimadura por incêndio no seu domicílio. Há relato de a paciente ter ficado presa em ambiente fechado durante o acidente. A paciente apresenta queimadura de face, tórax e abdome anterior, face anterior do ombro e braço esquerdo e ambas as pernas, circunferencialmente. Durante a avaliação da face, você observa queimadura das sobrancelhas e vibices nasais, além de hiperemia e edema de lábios, língua e hipofaringe. A paciente apresenta desconforto respiratório, sialorreia e dificuldade para deglutir. A paciente se encontra confusa, pouco cooperativa, queixando dor e náuseas, com FC: 110bpm, FR: 26irpm e P.A.: 100x50mmHg. Sobre as condutas iniciais para esta paciente, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Os dados acima nos permitem afirmar que há grande risco para injúria inalatória do tipo I, cujas consequências podem ser potencializadas pela ressuscitação volêmica para esta paciente, podendo indicar avaliação com laringoscopia flexível seguida de provável aquisição de via aérea definitiva.",
      "(B) Caso a avaliação laboratorial deste paciente evidenciar significativa acidose metabólica e hiperlactatemia mesmo após a ressuscitação volêmica inicial, as condutas devem incluir dosagem de carboxihemoglobina, terapia com O2 a 100% e administração de hidroxicobalamina endovenosa.",
      "(C) A melhor estratégia para reposição volêmica desta paciente é iniciar administração de solução salina via oral ou por sonda nasogástrica, seguida de cálculo do volume de hidratação para 24 horas segundo a fórmula consenso da Associação Americana de Queimados, infundido em cateter central, preferencialmente puncionado em área não queimada.",
      "(D) Os dados acima nos permitem inferir que haverá indicação de administração precoce de coloides como parte da estratégia de ressuscitação volêmica desta paciente."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a alternativa INCORRETA. Grande queimada (face, tronco anterior, membro superior e membros inferiores circunferenciais — bem acima de 20% de SCQ) com sinais de lesão inalatória. A reposição deve ser intravenosa, com Ringer lactato pela fórmula de consenso da ABA (2–4 mL/kg/%SCQ, metade nas primeiras 8 horas), por acessos periféricos calibrosos de preferência em pele íntegra; a via oral não é adequada nessa gravidade e com risco de via aérea.",
    "commentary": "Risco de lesão inalatória com laringoscopia e via aérea definitiva (A): correto; o edema progride com a reposição volêmica.\n\nAcidose com lactato alto: carboxi-hemoglobina, O₂ 100% e hidroxocobalamina (B): correto; incêndio em ambiente fechado sugere intoxicação por monóxido de carbono e cianeto.\n\nColoides precoces (D): a banca considerou correta, pela grande superfície queimada e risco de reposição excessiva de cristaloide.",
    "reference": "ATLS 10ª ed. — Lesões térmicas / American Burn Association Practice Guidelines",
    "tags": [
      "queimaduras",
      "lesão inalatória",
      "intoxicação por cianeto",
      "reposição volêmica"
    ]
  },
  {
    "id": "cerman2026-35",
    "topography": "7.1",
    "topic": "Isquemia arterial aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 75 anos, tabagista, hipertenso e diabético, apresenta quadro de dor abdominal de início súbito, bastante intensa, rapidamente progressiva, no mesogástrio, há 2 horas, seguido de episódios de vômito. Nega febre, diarréia e sintomas urinários. Sua esposa refere que há alguns meses o paciente sente dor mesogástrica semelhante, mas de leve intensidade, algumas horas após as refeições, o que fez com que o paciente perdesse peso. Ao exame físico, o paciente se encontra emagrecido, com fascies de dor, taquicárdico, taquipneico e normotenso. Apesar da queixa de dor intensa, seu abdome é plano, flácido à palpação, sem sinais de irritação peritoneal. Sobre a avaliação e conduta deste paciente, assinale a alternativa CORRETA:",
    "options": [
      "(A) Elevações dos níveis séricos do lactato de d dímero elevados mais de 3 vezes fecham o diagnóstico de trombose portal, indicando terapia anticoagulante com heparina.",
      "(B) O uso de contraste venoso durante a avaliação tomográfica deste paciente está contra indicado devido ao elevado risco de evolução para insuficiência renal aguda.",
      "(C) A observação de diminuição do fluxo vascular da parede das alças intestinais, pneumatose e presença de gás na veia porta à ultrassonografia com doppler fecha o diagnóstico precoce de embolia mesentérica e indica laparotomia urgente.",
      "(D) O quadro clínico descrito é compatível com trombose da artéria mesentérica superior e seu tratamento de escolha deve envolver a associação do tratamento endovascular com a laparotomia exploradora."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso tabagista, hipertenso e diabético, com dor abdominal pós-prandial há meses (angina intestinal) e emagrecimento, que agora tem dor súbita e intensa desproporcional ao exame físico: isquemia mesentérica aguda por trombose da artéria mesentérica superior sobre placa aterosclerótica.\n\nO tratamento combina revascularização (endovascular ou cirúrgica) com laparotomia para avaliar e ressecar alças inviáveis — a abordagem híbrida.",
    "commentary": "D-dímero e lactato fecham trombose portal (A): são inespecíficos; o quadro é arterial.\n\nContraste venoso contraindicado (B): a angiotomografia é o exame de escolha; o risco renal não supera o benefício do diagnóstico.\n\nAchados tardios ao Doppler fecham diagnóstico precoce de embolia (C): pneumatose e gás portal são sinais de necrose (tardios); e a história de angina intestinal sugere trombose, não embolia.",
    "reference": "ESVS Clinical Practice Guidelines on the Management of Diseases of Mesenteric Arteries and Veins (2017) / WSES guidelines for acute mesenteric ischemia (2022)",
    "tags": [
      "isquemia mesentérica aguda",
      "trombose da artéria mesentérica superior",
      "angina intestinal"
    ]
  },
  {
    "id": "cerman2026-36",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Você é chamado para avaliar um paciente idoso e emagrecido na enfermaria da Clínica Médica, acamado por sequela de AVC prévio e internado para tratamento de uma pneumonia. Durante a visita de rotina, a enfermagem identificou uma lesão na região sacral e solicitou seu parecer. Ao exame físico, observa-se área ulcerada superficial, de cerca de 5cm de diâmetro, com perda parcial da pele e exposição da derme, de coloração rosada, com pouca umidade, sem presença de tecido desvitalizado. Não há flutuação, drenagem de secreção ou odor fétido. Não há exposição de tecidos profundos. A borda da lesão é bem definida e a pele ao redor está íntegra e sem sinais flogísticos. Sobre o caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Devido a proximidade com o ânus e provável contaminação fecal, podemos afirmar que se trata de ferida infectada, sendo indicado a antibioticoterapia com cobertura para flora polimicrobiana e reavaliação da lesão em 48 a 72 horas.",
      "(B) Os dados descritos nos permitem inferir que houve falha nas condutas preventivas deste tipo de lesão, tais como o uso de colchões tipo “casca de ovo” e a mudança de decúbito de horário.",
      "(C) O ferimento ocorreu devido a pressão que o osso sacro exerce nos tecidos moles adjacentes em contato com o leito, levando a isquemia e perda da pele.",
      "(D) Fazem parte do tratamento deste paciente o desbridamento não cirúrgico do tecido desvitalizado, suporte nutricional adequado e uso de agentes tópicos a base de hidrogel."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. Úlcera sacral com perda parcial da espessura da pele, leito rosado, sem tecido desvitalizado, sem secreção nem sinais flogísticos: lesão por pressão estágio 2. Ferida colonizada não é ferida infectada: sem sinais clínicos de infecção, não há indicação de antibiótico sistêmico.",
    "commentary": "Falha na prevenção (B): a banca considerou correta; mudança de decúbito e superfícies de redistribuição de pressão são medidas preventivas.\n\nIsquemia por pressão do sacro sobre os tecidos (C): correto, é o mecanismo.\n\nDesbridamento, nutrição e hidrogel (D): a banca considerou correta; nutrição e curativo úmido fazem parte do tratamento.",
    "reference": "NPIAP/EPUAP — Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline (2019)",
    "tags": [
      "lesão por pressão",
      "úlcera sacral",
      "feridas",
      "infecção de ferida"
    ]
  },
  {
    "id": "cerman2026-37",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Um homem de 28 anos é trazido ao pronto-socorro após ferimento penetrante por arma branca na face medial da coxa direita durante assalto. Ele chega carregado por terceiros, sem imobilização, visivelmente pálido e agitado. Na admissão, apresenta com pele fria e pegajosa, FC 148 bpm, P.A. não mensurável no braço direito; 70×40 mmHg no braço esquerdo, tempo de enchimento capilar > 4 segundos, FR 32 irpm e SpO₂ 90% em ar ambiente. O ferimento apresenta sangramento pulsátil ativo, encharcando roupas e macas. O paciente está consciente, porém confuso e sonolento, repetindo que “não consegue respirar direito”. A equipe de plantão prepara material para intubação orotraqueal imediata, considerando a taquipneia e a instabilidade hemodinâmica. Sobre o caso descrito, qual deve ser a próxima conduta?",
    "options": [
      "(A) Proceder à intubação orotraqueal imediata para estabilização da via aérea e controle da ventilação, antes de manejar o sangramento.",
      "(B) Realizar acesso venoso calibroso bilateral, iniciar infusão rápida de cristaloides aquecidos e só então avaliar a necessidade de torniquete ou hemostasia local.",
      "(C) Aplicar torniquete proximal de alta pressão no membro afetado para controle imediato da hemorragia, antes de qualquer intervenção de via aérea ou ventilação.",
      "(D) Proceder imediatamente a clampagem cirúrgica exploratória do vaso femoral em sala de trauma, sem intervenções prévias no local do PS."
    ],
    "correctAnswer": 2,
    "explanation": "Ferimento na coxa com sangramento pulsátil ativo e choque classe IV: hemorragia externa exsanguinante. Pelo ATLS 11 (e protocolos como o XABCDE), o controle da hemorragia externa grave vem antes da via aérea — torniquete proximal ao ferimento, apertado até cessar o sangramento.\n\nO paciente fala e mantém a via aérea; a dispneia e a confusão decorrem do choque.",
    "commentary": "Intubar antes de controlar o sangramento (A): intubar em choque profundo, sem controlar a hemorragia, pode precipitar parada cardíaca.\n\nCristaloide antes do torniquete (B): reposição sem controlar a fonte só aumenta a perda e dilui fatores de coagulação.\n\nClampagem cirúrgica do vaso no PS (D): pinçar às cegas lesa estruturas adjacentes; o torniquete controla e o reparo é feito no centro cirúrgico.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. (2025) / PHTLS — XABCDE",
    "tags": [
      "torniquete",
      "hemorragia exsanguinante",
      "trauma de extremidade",
      "XABCDE"
    ]
  },
  {
    "id": "cerman2026-38",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Um motociclista de 34 anos chega ao pronto socorro após colisão frontal com automóvel. Refere que usava capacete. Ele está consciente, ansioso, diaforético e queixa-se de forte dor abdominal. Ao exame, apresenta FC: 136 bpm, PA: 88 × 50 mmHg, FR: 28 irpm, SatO₂ 97%, pele fria e úmida. Seu abdome é distendido, doloroso difusamente. Extremidades sem deformidades. TEP > 3 segundos. Não há sinais de hemorragia externa. Foi realizado FAST na sala de trauma mostra líquido livre em fundo de saco, sem tamponamento cardíaco e sem pneumotórax. A equipe prepara 2 L de Ringer Lactato aquecido para reposição volêmica imediata. De acordo com os dados apresentados, qual deve ser a melhor conduta inicial?",
    "options": [
      "(A) Administrar rapidamente os 2 L de cristaloide aquecido para restaurar a pressão arterial enquanto se aguarda disponibilidade de sangue.",
      "(B) Iniciar transfusão maciça precoce com hemoderivados em proporção equilibrada (ex.: 1:1:1), priorizando controle definitivo da hemorragia, evitando grandes volumes de cristaloides.",
      "(C) Realizar intubação orotraqueal imediata, pois a taquipneia e o choque indicam risco iminente de falência respiratória.",
      "(D) Encaminhar o paciente diretamente para tomografia computadorizada de abdome para melhor definição da lesão, já que está hemodinamicamente instável, mas ainda consciente."
    ],
    "correctAnswer": 1,
    "explanation": "Trauma abdominal fechado com choque (FC 136, PA 88 × 50, pele fria) e FAST positivo: hemorragia intra-abdominal em paciente instável. A conduta é ressuscitação de controle de danos — hemocomponentes precoces em proporção balanceada (1:1:1), hipotensão permissiva, ácido tranexâmico e cirurgia imediata (laparotomia) —, evitando grandes volumes de cristaloide.",
    "commentary": "2 L de cristaloide (A): o ATLS 10/11 limita o cristaloide a 1 L; grandes volumes causam coagulopatia, acidose e hipotermia.\n\nIntubação imediata (C): o paciente mantém via aérea e SatO₂ 97%; intubar em choque sem reposição pode causar colapso.\n\nTC no paciente instável (D): instabilidade hemodinâmica com FAST positivo indica laparotomia, não tomografia.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª/11ª ed. — Choque / Estudo PROPPR (JAMA, 2015)",
    "tags": [
      "trauma abdominal",
      "choque hemorrágico",
      "transfusão maciça",
      "FAST"
    ]
  },
  {
    "id": "cerman2026-39",
    "module": "Cirurgia",
    "text": "Um homem de 62 anos, tabagista há 40 anos e etilista inveterado, procura atendimento por disfagia progressiva para sólidos há 2 meses, acompanhada de perda ponderal de 6 kg. Nega dor torácica, hematêmese ou febre. Ao exame físico, o paciente se apresenta emagrecido, hidratado, sem linfonodos cervicais palpáveis, ausculta pulmonar normal, abdome sem ascite, massas ou visceromegalias. Diante do quadro clínico, o médico solicita endoscopia digestiva alta (EDA) e exames laboratoriais iniciais. A equipe discute quais exames adicionais seriam necessários, caso a endoscopia confirme lesão suspeita de neoplasia. Sobre o caso acima, é INCORRETO afirmar que:",
    "options": [
      "(A) Dentre as neoplasias que compõem os diagnósticos diferenciais do caso acima, a mais provável é o carcinoma espinocelular, doença que continua predominando em países asiáticos, respondendo por mais de 90% dos casos naqueles países.",
      "(B) A tomografia computadorizada com contraste venoso, de tórax e abdome é suficiente para o estadiamento inicial, dispensando PET-CT, pois este não acrescenta informações relevantes na avaliação de metástases ocultas, sendo mais indicado no acompanhamento pós-operatório.",
      "(C) A endoscopia é o primeiro exame na investigação de disfagia com perda de peso, permitindo biópsia direta e diagnóstico histológico, sendo essencial para planejar estadiamento.",
      "(D) A ecoendoscopia (EUS) é um dos métodos mais importantes para determinar profundidade de invasão e avaliar linfonodos regionais, definindo adequadamente se o tumor é ressecável ou não."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a alternativa INCORRETA. No câncer de esôfago, o estadiamento combina TC de tórax e abdome (metástases), ecoendoscopia (T e N) e PET-CT, recomendado para candidatos a tratamento curativo porque detecta metástases ocultas em uma parcela relevante dos pacientes e muda a conduta. Dizer que a TC basta e o PET-CT não acrescenta está errado.",
    "commentary": "CEC mais provável, predominando na Ásia (A): correto; tabagismo e etilismo favorecem o carcinoma espinocelular.\n\nEDA como primeiro exame com biópsia (C): correto.\n\nEcoendoscopia para profundidade e linfonodos (D): correto.",
    "reference": "NCCN Guidelines — Esophageal and Esophagogastric Junction Cancers / ESMO Clinical Practice Guidelines (2022)",
    "tags": [
      "câncer de esôfago",
      "estadiamento",
      "PET-CT",
      "ecoendoscopia"
    ]
  },
  {
    "id": "cerman2026-40",
    "topography": "4.1",
    "topic": "Nefrolitíase",
    "module": "Cirurgia",
    "text": "Um homem de 42 anos, previamente saudável, apresenta dor lombar esquerda súbita, intensa, em cólica, irradiada para fossa ilíaca, associada a náuseas e vômitos. Nega febre. Ao exame, está taquicárdico (FC 104 bpm), PA 135×80 mmHg, afebril, sem sinais de irritação peritoneal. Seus exames iniciais revelam hematúria +++, sem nitrito, sem leucocitúria importante no EAS, creatinina: 1,0 mg/dL e PCR normal. Foi submetido a ultrassom realizado na emergência que evidencia discreta hidronefrose esquerda, cálculo hiperecogênico no ureter proximal, sem sinais de obstrução grave ou complicação. A equipe cogita solicitar tomografia e questiona se é necessário ampliar a investigação laboratorial antes de definir a conduta. Sobre o caso descrito, qual deve ser o próximo passo na condução do caso?",
    "options": [
      "(A) Solicitar PCR seriada e hemoculturas para afastar pielonefrite oculta antes de definir conduta.",
      "(B) Solicitar TC helicoidal sem contraste para confirmação diagnóstica e mensuração precisa do cálculo, pois é o exame de escolha após ultrassom inicial.",
      "(C) Iniciar tamsulosina imediatamente e programar litotripsia extracorpórea (SWL) como tratamento definitivo.",
      "(D) Optar por observação expectante com analgesia, já que cálculos ureterais proximais geralmente têm alta taxa de eliminação espontânea."
    ],
    "correctAnswer": 1,
    "explanation": "Cólica renal típica, sem febre e sem sinais de infecção, com cálculo no ureter proximal e hidronefrose discreta à US. A TC helicoidal sem contraste é o exame de escolha para confirmar e medir o cálculo (tamanho, localização e densidade), o que define a probabilidade de eliminação espontânea e o tratamento (expectante, terapia expulsiva ou intervenção).",
    "commentary": "PCR seriada e hemoculturas (A): não há febre, leucocitúria ou PCR elevada; sem suspeita de infecção.\n\nTansulosina e litotripsia como tratamento definitivo (C): a conduta depende do tamanho do cálculo, ainda desconhecido; a terapia expulsiva tem mais benefício em cálculos distais de 5–10 mm.\n\nObservação porque cálculos proximais saem fácil (D): cálculos do ureter proximal têm menor taxa de eliminação espontânea que os distais.",
    "reference": "EAU Guidelines on Urolithiasis (2024) / AUA/Endourology Society Guideline — Surgical Management of Stones (2016)",
    "tags": [
      "nefrolitíase",
      "cólica renal",
      "tomografia sem contraste",
      "cálculo ureteral"
    ]
  },
  {
    "id": "cerman2026-41",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "De acordo com os critérios de elegibilidade da OMS (2015), o uso de métodos contraceptivos injetáveis mensais NÃO deve ser indicado em mulheres que fazem uso de:",
    "options": [
      "(A) rifampicina.",
      "(B) lamotrigina.",
      "(C) cetoconazol.",
      "(D) zidovudina."
    ],
    "correctAnswer": 0,
    "explanation": "A rifampicina é um potente indutor enzimático hepático e acelera o metabolismo dos estrogênios e progestagênios, reduzindo a eficácia de métodos hormonais combinados. Pelos critérios da OMS (2015), seu uso classifica o injetável mensal (combinado) como categoria 3 — o método não deve ser indicado. Prefere-se DIU de cobre, DIU hormonal ou acetato de medroxiprogesterona trimestral.",
    "commentary": "Lamotrigina (B): os combinados reduzem o nível da lamotrigina, mas o anticonvulsivante não reduz a eficácia do contraceptivo; para o injetável mensal é categoria 2/3 conforme a fonte, menos restritivo que a rifampicina.\n\nCetoconazol (C): antifúngicos não reduzem a eficácia dos contraceptivos (categoria 1).\n\nZidovudina (D): os ITRN não interagem de forma relevante (categoria 1).",
    "reference": "OMS — Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "contracepção",
      "critérios de elegibilidade da OMS",
      "rifampicina",
      "interação medicamentosa"
    ]
  },
  {
    "id": "cerman2026-42",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Considerando a fisiologia de um ciclo menstrual regular, o hormônio identificado pela seta na Figura, refere-se a:",
    "options": [
      "(A) FSH.",
      "(B) Inibina A.",
      "(C) Estradiol.",
      "(D) Progesterona."
    ],
    "correctAnswer": 2,
    "explanation": "No gráfico do ciclo, a curva com dois picos — um alto antes da ovulação (que dispara o pico de LH) e um segundo, menor, na fase lútea (produzido pelo corpo lúteo) — é o estradiol. A seta aponta esse segundo pico, na fase lútea.\n\nA progesterona tem um único pico amplo na fase lútea, e o LH, um pico estreito e alto no meio do ciclo.",
    "commentary": "FSH (A): sobe no início da fase folicular e tem um pequeno pico junto com o LH no meio do ciclo, sem elevação na fase lútea.\n\nInibina A (B): sobe na fase lútea, mas tem um único pico, sem a elevação pré-ovulatória marcante do estradiol.\n\nProgesterona (D): é a curva com um único pico amplo na fase lútea, não a curva de dois picos.",
    "reference": "Speroff L. Clinical Gynecologic Endocrinology and Infertility, 9ª ed. — Ciclo menstrual",
    "tags": [
      "ciclo menstrual",
      "estradiol",
      "fisiologia reprodutiva"
    ],
    "image": "/images/cerman2026-42.webp"
  },
  {
    "id": "cerman2026-43",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 63 anos vai à consulta por sangramento vaginal, em pequena quantidade, com duração de dois dias. Nega outros episódios prévios desde a menopausa aos 53 anos. Nega uso de terapia hormonal e outras queixas. Foi solicitada ultrassonografia transvaginal que evidenciou endométrio homogêneo com 5,4 mm de espessura. Qual a conduta mais adequada nesse caso?",
    "options": [
      "(A) Indicar histerectomia por se tratar de paciente pós-menopausa.",
      "(B) Realizar nova ultrassonografia transvaginal de controle em 6 meses.",
      "(C) Tranquilizar a paciente, pois se trata de sangramento por atrofia.",
      "(D) Prosseguir investigação solicitando biópsia endometrial."
    ],
    "correctAnswer": 3,
    "explanation": "Sangramento pós-menopausa com endométrio > 4 mm (aqui 5,4 mm) à ultrassonografia transvaginal exige amostragem do endométrio para afastar hiperplasia e câncer — biópsia endometrial, idealmente guiada por histeroscopia.",
    "commentary": "Histerectomia (A): só depois de diagnóstico que a justifique.\n\nNova US em 6 meses (B): o endométrio acima do limite em sangramento pós-menopausa precisa de histologia agora.\n\nTranquilizar por atrofia (C): a atrofia é a causa mais comum, mas com endométrio > 4 mm não se pode presumi-la.",
    "reference": "ACOG Committee Opinion nº 734 (2018) / FEBRASGO — Sangramento pós-menopausa",
    "tags": [
      "sangramento pós-menopausa",
      "espessura endometrial",
      "biópsia endometrial"
    ]
  },
  {
    "id": "cerman2026-44",
    "topography": "5.1",
    "topic": "Candidíase vaginal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 30 anos, compareceu para consulta ginecológica referindo “corrimento vaginal” com prurido, sem odor, principalmente no período pré menstrual desde a adolescência. A microscopia está representada na figura.\n\nQual o diagnóstico e a conduta?",
    "options": [
      "(A) Vaginite por cândida - nistatina creme vaginal.",
      "(B) Vaginose bacteriana - metronidazol gel vaginal.",
      "(C) Vaginite descamativa - clindamicina 2% creme vaginal.",
      "(D) Vaginose citolítica - ducha vaginal com bicarbonato de sódio."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento com prurido, sem odor, piorando no período pré-menstrual, e microscopia mostrando pseudo-hifas e blastoconídios (leveduras em brotamento): candidíase vulvovaginal. O tratamento é antifúngico tópico (nistatina, miconazol, clotrimazol) ou oral (fluconazol 150 mg).",
    "commentary": "Vaginose bacteriana (B): corrimento acinzentado com odor de peixe e clue cells; não há hifas.\n\nVaginite descamativa (C): corrimento purulento com células parabasais e leucócitos, sem fungos.\n\nVaginose citolítica (D): sintomas parecidos com candidíase, mas a microscopia mostra excesso de lactobacilos e lise celular, sem hifas.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) — Corrimento vaginal",
    "tags": [
      "candidíase vulvovaginal",
      "pseudo-hifas",
      "vulvovaginites",
      "exame a fresco"
    ],
    "image": "/images/cerman2026-44.webp"
  },
  {
    "id": "cerman2026-45",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual o método considerado padrão ouro no diagnóstico de pólipo endometrial?",
    "options": [
      "(A) Ultrassonografia transvaginal.",
      "(B) Histeroscopia.",
      "(C) Histerossonografia.",
      "(D) Histerossalpingografia."
    ],
    "correctAnswer": 1,
    "explanation": "A histeroscopia é o padrão-ouro para o diagnóstico de pólipo endometrial: permite visualização direta da cavidade, biópsia dirigida e, no mesmo tempo, a ressecção (\"see and treat\").",
    "commentary": "US transvaginal (A): é o exame inicial, mas com menor acurácia.\n\nHisterossonografia (C): tem boa acurácia, superior à US simples, mas não permite biópsia nem tratamento.\n\nHisterossalpingografia (D): avalia permeabilidade tubária; mostra falhas de enchimento inespecíficas.",
    "reference": "AAGL Practice Guidelines for the Diagnosis and Management of Endometrial Polyps (2012)",
    "tags": [
      "pólipo endometrial",
      "histeroscopia",
      "padrão-ouro"
    ]
  },
  {
    "id": "cerman2026-46",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com sangramento uterino anormal, foi ao ginecologista com resultado de ultrassonografia transvaginal com diagnostico de mioma FIGO 0 (zero) de 18 mm. Qual o melhor método para a ressecção da lesão?",
    "options": [
      "(A) Robótica.",
      "(B) Laparotomia.",
      "(C) Laparoscopia.",
      "(D) Histeroscopia."
    ],
    "correctAnswer": 3,
    "explanation": "Mioma FIGO 0 é totalmente intracavitário (pediculado), e com 18 mm é ideal para miomectomia histeroscópica: tratamento resolutivo, ambulatorial ou com internação curta, sem incisão abdominal e preservando o útero.",
    "commentary": "Robótica (A), laparotomia (B) e laparoscopia (C): são vias para miomas intramurais ou subserosos; para um mioma totalmente na cavidade, a via abdominal é desnecessariamente invasiva.",
    "reference": "FEBRASGO — Miomatose uterina (Protocolo, 2021) / Classificação FIGO PALM-COEIN",
    "tags": [
      "mioma submucoso",
      "classificação FIGO",
      "miomectomia histeroscópica"
    ]
  },
  {
    "id": "cerman2026-47",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Saúde Coletiva",
    "text": "Uma mulher vítima de violência sexual procura atendimento emergencial, mas não possui carteira vacinal e não se recorda de ter recebido vacina contra hepatite B anteriormente. Sobre a profilaxia pós-exposição ao vírus da hepatite B (VHB), qual das condutas a seguir está CORRETA, considerando a situação em que não se conhece o estado sorológico do agressor?",
    "options": [
      "(A) Administrar a imunoglobulina hiperimune nas primeiras 12 horas e programar a vacinação após 30 dias, quando já se conhecer o estado sorológico da paciente.",
      "(B) Administrar a primeira dose da vacina contra hepatite B e aguardar resultado dos marcadores sorológicos maternos para decidir sobre a administração da imunoglobulina.",
      "(C) Administrar a primeira dose da vacina contra hepatite B e imunoglobulina hiperimune, preferencialmente nas primeiras 12 horas após a agressão.",
      "(D) Postergar a vacinação para após o resultado dos marcadores sorológicos maternos, mas administrar a imunoglobulina hiperimune dentro das primeiras 24 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Na violência sexual, a vítima sem vacinação comprovada contra hepatite B, com agressor de status sorológico desconhecido, deve receber a primeira dose da vacina e a imunoglobulina hiperimune contra hepatite B (IGHAHB), de preferência nas primeiras 48 horas (até 14 dias), completando depois o esquema vacinal.\n\nA banca escreveu \"primeiras 12 horas\" — prazo ideal para o recém-nascido de mãe HBsAg positiva, mas que não invalida a conduta correta.",
    "commentary": "Imunoglobulina e vacina só após 30 dias (A): a vacina deve ser iniciada já, junto com a imunoglobulina.\n\nVacina e esperar sorologia para decidir a imunoglobulina (B): com agressor desconhecido e vítima não vacinada, a imunoglobulina já está indicada.\n\nAdiar a vacina (D): vacina e imunoglobulina são feitas juntas, em locais diferentes.",
    "reference": "Ministério da Saúde — Norma Técnica: Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual (2012) / PCDT de PEP (2024)",
    "tags": [
      "violência sexual",
      "hepatite B",
      "profilaxia pós-exposição",
      "imunoglobulina"
    ]
  },
  {
    "id": "cerman2026-48",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Em relação à evolução natural da sífilis adquirida, qual das afirmações abaixo está CORRETA?",
    "options": [
      "(A) As lesões secundárias são pouco infectantes, não apresentam manifestações sistêmicas e raramente acometem mais de um órgão.",
      "(B) A regressão espontânea do cancro duro após 1– 6 semanas indica resolução da infecção e menor risco de progressão para secundarismo.",
      "(C) A fase latente recente dura de 3 à 6 meses após o desaparecimento das lesões secundárias e é caracterizada por ausência completa de sororreatividade.",
      "(D) A fase latente tardia é assintomática, pode perdurar por mais de 30 anos e seu término é marcado pelo surgimento da primeira manifestação terciária."
    ],
    "correctAnswer": 3,
    "explanation": "A sífilis latente tardia (mais de 1 ano de infecção, sem sinais clínicos) pode durar décadas. Em parte dos pacientes não tratados (cerca de um terço), ela termina com o aparecimento de manifestações terciárias — gomas, sífilis cardiovascular (aortite) e neurossífilis tardia.",
    "commentary": "Secundária pouco infectante e sem manifestações sistêmicas (A): é altamente infectante e sistêmica (febre, linfadenopatia, hepatite, meningite).\n\nCancro regride porque a infecção se resolveu (B): o cancro regride espontaneamente, mas a infecção se dissemina e evolui para o secundarismo.\n\nLatente recente sem sororreatividade (C): na fase latente os testes são reagentes; a latente recente vai até 1 ano após a infecção.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "sífilis",
      "história natural",
      "sífilis latente",
      "sífilis terciária"
    ]
  },
  {
    "id": "cerman2026-49",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 29 anos, nuligesta, procura atendimento por dismenorreia progressiva, dispareunia profunda e dor pélvica cíclica há 18 meses. Exame físico revela sensibilidade à palpação dos ligamentos uterossacros, mas sem massas anexiais palpáveis. A paciente realizou ultrassonografia transvaginal no 14º dia do ciclo, com profissional experiente, segundo protocolo IDEA, que não identificou endometrioma ou nódulos profundos evidentes. Ela está muito ansiosa. Qual é a conduta mais adequada nesse caso?",
    "options": [
      "(A) Indicar laparoscopia diagnóstica de imediato, pois exame físico normal ou inconclusivo já constitui indicação isolada de videolaparoscopia.",
      "(B) Iniciar tratamento mesmo sem confirmação cirúrgica ou exame de imagem, porque o manejo clínico melhora a qualidade de vida, ainda que empírico.",
      "(C) Solicitar ressonância magnética para complementar a investigação, principalmente para pesquisa de focos profundos extra peritoneais e lesões atípicas.",
      "(D) Repetir a ultrassonografia em fase folicular precoce, quando as condições anatômicas tendem a favorecer melhor definição de planos profundos e do compartimento posterior."
    ],
    "correctAnswer": 1,
    "explanation": "Dismenorreia progressiva, dispareunia de profundidade e dor pélvica com uterossacros dolorosos: suspeita clínica de endometriose. A ultrassonografia especializada (protocolo IDEA) negativa não afasta doença superficial, que não é vista em exames de imagem.\n\nAs diretrizes atuais (ESHRE 2022) recomendam iniciar tratamento empírico (progestagênios ou anticoncepcional hormonal) sem necessidade de confirmação cirúrgica; a laparoscopia fica para falha, infertilidade ou suspeita de doença profunda.",
    "commentary": "Laparoscopia imediata (A): a laparoscopia diagnóstica não é mais o primeiro passo; não se opera só para confirmar.\n\nRessonância complementar (C): a US com protocolo IDEA por examinador experiente tem acurácia semelhante à da RM para doença profunda.\n\nRepetir a US na fase folicular precoce (D): não há essa recomendação; o exame já foi adequado.",
    "reference": "ESHRE Guideline: Endometriosis (2022) / FEBRASGO — Endometriose",
    "tags": [
      "endometriose",
      "tratamento empírico",
      "protocolo IDEA",
      "dor pélvica"
    ]
  },
  {
    "id": "cerman2026-50",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 26 anos apresenta nódulo mamário único, móvel, fibroelástico, medindo 1,82 cm. A ultrassonografia evidencia lesão oval, paralela à pele, circunscrita e hipoecogênica, compatível com BI-RADS 3. Qual é a conduta mais adequada?",
    "options": [
      "(A) Realizar acompanhamento com ultrassonografia a cada 6 meses por 2 anos, visando documentar estabilidade da lesão.",
      "(B) Indicar core biopsy, pois toda lesão sólida palpável exige confirmação histológica imediata.",
      "(C) Solicitar mamografia para diferenciar fibroadenoma de tumor filoide, visto que o método tem alta acurácia para tumores fibroepiteliais em pacientes jovens.",
      "(D) Solicitar ressonância magnética para esclarecer discordância entre o exame clínico e a ultrassonografia."
    ],
    "correctAnswer": 0,
    "explanation": "Nódulo com características de benignidade (oval, paralelo à pele, circunscrito) em mulher jovem: BI-RADS 3 (provavelmente benigno, < 2% de malignidade), tipicamente fibroadenoma. A conduta é seguimento ultrassonográfico de curto intervalo — a cada 6 meses por 2 anos — para documentar estabilidade.",
    "commentary": "Core biopsy em toda lesão palpável (B): no BI-RADS 3 o padrão é seguimento; a biópsia fica para crescimento, ansiedade da paciente ou impossibilidade de seguimento.\n\nMamografia para diferenciar filoide (C): em mulheres jovens a mama é densa e a mamografia não diferencia fibroadenoma de filoide.\n\nRessonância (D): não há discordância clínico-radiológica que a justifique.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Recomendações do CBR, SBM e FEBRASGO",
    "tags": [
      "BI-RADS 3",
      "fibroadenoma",
      "nódulo mamário",
      "seguimento"
    ]
  },
  {
    "id": "cerman2026-51",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante sem comorbidades, na triagem do 1º trimestre, apresenta teste rápido treponêmico para sífilis (TR) reagente. Refere nunca ter recebido tratamento prévio. Qual a conduta inicial mais adequada?",
    "options": [
      "(A) Solicitar teste treponêmico convencional para confirmação.",
      "(B) Colher VDRL para avaliar título e descartar cicatriz sorológica antes de tratar.",
      "(C) Administrar penicilina benzatina e solicitar VDRL para seguimento.",
      "(D) Colher simultaneamente teste treponêmico e não treponêmico para posterior definição terapêutica."
    ],
    "correctAnswer": 2,
    "explanation": "Na gestação, um teste rápido treponêmico reagente, sem tratamento prévio, já basta para tratar com penicilina benzatina, sem aguardar o teste não treponêmico — o objetivo é evitar a transmissão vertical. Ao mesmo tempo, coleta-se o VDRL para conhecer o título e acompanhar a resposta.",
    "commentary": "Confirmar com teste treponêmico convencional (A): atrasaria o tratamento.\n\nVDRL antes de tratar (B): na gestante, trata-se no resultado do teste rápido; o VDRL serve para seguimento.\n\nColher os dois testes e decidir depois (D): o tratamento não pode esperar.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis na gestação",
      "teste rápido",
      "penicilina benzatina",
      "transmissão vertical"
    ]
  },
  {
    "id": "cerman2026-52",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante foi ao pré-natal com resultado de sorologia para toxoplasmose realizada na 18ª semana de gestação (IgG: Reagente / IgM: Não reagente). Assinale a alternativa CORRETA de acordo com as diretrizes brasileiras.",
    "options": [
      "(A) O resultado da Avidez de IgG não é importante para definir a conduta. Aguardar resultado da amniocentese para iniciar tratamento.",
      "(B) Avidez de IgG, evidencia infecção antiga. Encaminhar para o pré-natal de risco habitual para acompanhamento.",
      "(C) O resultado da Avidez de IgG não modifica a conduta. Iniciar tratamento com sulfadiazina, pirimetamina e ácido folínico, até resultado de amniocentese.",
      "(D) Avidez de IgG evidencia infecção antiga. Realizar amniocentese, se PCR positivo, iniciar tratamento com sulfadiazina, pirimetamina e ácido folínico."
    ],
    "correctAnswer": 1,
    "explanation": "IgG reagente e IgM não reagente indicam infecção antiga (imunidade), sem risco de transmissão vertical em gestante imunocompetente. Não é preciso teste de avidez nem tratamento; a gestante segue no pré-natal de risco habitual. A banca descreveu a avidez como confirmando infecção antiga.",
    "commentary": "Aguardar amniocentese para tratar (A): não há infecção aguda; amniocentese não está indicada.\n\nTratamento tríplice até amniocentese (C): sem suspeita de infecção na gestação, não há tratamento.\n\nAmniocentese em infecção antiga (D): não há indicação.",
    "reference": "Ministério da Saúde — Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e Congênita (2018)",
    "tags": [
      "toxoplasmose",
      "sorologia na gestação",
      "imunidade",
      "pré-natal"
    ]
  },
  {
    "id": "cerman2026-53",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante na 20ª semana, foi diagnosticada com oligodrâmnio acentuado na ultrassonografia obstétrica. Nesse caso, qual a causa provável para esse diagnóstico?",
    "options": [
      "(A) Redução da diurese fetal por rins policísticos bilaterais.",
      "(B) Redução da deglutição de líquido amniótico por atresia de esôfago fetal.",
      "(C) Absorção do líquido amniótico pelas alças intestinais na gastrosquise fetal.",
      "(D) Aumento da deglutição de líquido amniótico por disrafia de coluna."
    ],
    "correctAnswer": 0,
    "explanation": "A partir de cerca de 16 semanas, o líquido amniótico é formado principalmente pela urina fetal. Oligodrâmnio acentuado com 20 semanas sugere agenesia renal, rins policísticos bilaterais, uropatia obstrutiva baixa ou rotura de membranas.",
    "commentary": "Atresia de esôfago (B): o feto deixa de deglutir o líquido, causando POLIdrâmnio.\n\nGastrosquise (C): não causa oligodrâmnio por absorção; pode haver polidrâmnio.\n\nDisrafia de coluna (D): associa-se a polidrâmnio, não a aumento de deglutição.",
    "reference": "Zugaib M. Obstetrícia, 4ª ed. — Líquido amniótico",
    "tags": [
      "oligodrâmnio",
      "líquido amniótico",
      "malformação renal fetal"
    ]
  },
  {
    "id": "cerman2026-54",
    "topography": "5.2",
    "topic": "Diagnóstico de gravidez",
    "module": "Ginecologia e Obstetrícia",
    "text": "No primeiro trimestre, o amolecimento do istmo uterino, perceptível ao exame físico, corresponde a qual sinal clássico?",
    "options": [
      "(A) Sinal de Nobile-Budin.",
      "(B) Sinal de MacDonald.",
      "(C) Sinal de Piskacek.",
      "(D) Sinal de Hegar."
    ],
    "correctAnswer": 3,
    "explanation": "O sinal de Hegar é o amolecimento do istmo uterino percebido ao toque bimanual, que dá a impressão de separação entre corpo e colo, por volta de 6–8 semanas.",
    "commentary": "Nobile-Budin (A): preenchimento dos fundos de saco vaginais pelo útero gravídico, que se torna globoso.\n\nMacDonald (B): facilidade em flexionar o corpo uterino sobre o colo, decorrente do amolecimento do istmo.\n\nPiskacek (C): assimetria uterina, com abaulamento no local de implantação.",
    "reference": "Rezende J. Obstetrícia Fundamental, 14ª ed. — Diagnóstico da gravidez",
    "tags": [
      "diagnóstico de gravidez",
      "sinal de Hegar",
      "sinais de presunção e probabilidade"
    ]
  },
  {
    "id": "cerman2026-55",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, gestação gemelar, 30 anos, IMC de 31 kg/m², na 12ª semana de gestação, realizou Doppler de artéria uterina com índice de pulsatilidade no percentil 60. Qual a melhor conduta segundo o Manual da Rede Brasileira de Hipertensão e o Ministério da Saúde?",
    "options": [
      "(A) Manter vigilância pressórica e orientação nutricional, reservando AAS para gestantes com história prévia de pré-eclâmpsia e Doppler alterado.",
      "(B) Considerar o Doppler normal (< p95), não havendo indicação de iniciar medicação profilática.",
      "(C) Repetir o Doppler na época do exame morfológico do segundo trimestre (entre 20 –24 semanas) e, se alterado, iniciar AAS.",
      "(D) Iniciar ácido acetilsalicílico (AAS) em baixa dose e suplementação de cálcio, independentemente do resultado do Doppler."
    ],
    "correctAnswer": 3,
    "explanation": "O Ministério da Saúde e a RBEHG indicam AAS (100–150 mg à noite, de 12 a 36 semanas) e cálcio (para gestantes com baixa ingesta) pela presença de fatores clínicos de risco, independentemente de Doppler. Gestação gemelar é fator de alto risco; obesidade e primiparidade somam-se.\n\nAqui, a indicação vem dos fatores clínicos, mesmo com IP das uterinas normal.",
    "commentary": "Reservar AAS para pré-eclâmpsia prévia com Doppler alterado (A): basta um fator de alto risco (como gemelaridade) para indicar AAS.\n\nDoppler normal sem profilaxia (B): o Doppler normal não anula os fatores clínicos de risco.\n\nRepetir o Doppler com 20–24 semanas (C): o AAS deve começar antes de 16 semanas para ter efeito.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / RBEHG — Pré-eclâmpsia nos seus diversos aspectos (2023)",
    "tags": [
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "cálcio",
      "gestação gemelar"
    ]
  },
  {
    "id": "cerman2026-56",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 26 semanas com glicemia de jejum inicial 81 mg/dL realiza TOTG 75 g com resultados: → Jejum: 84 mg/dL → 1 h: 178 mg/dL → 2 h: 139 mg/dL. Qual o diagnóstico?",
    "options": [
      "(A) Teste é considerado normal.",
      "(B) Intolerância à glicose.",
      "(C) Diabetes Mellitus Gestacional",
      "(D) Diabetes mellitus pré-gestacional."
    ],
    "correctAnswer": 0,
    "explanation": "TOTG 75 g na gestação: diabetes gestacional se jejum ≥ 92, 1 hora ≥ 180 ou 2 horas ≥ 153 mg/dL. Os valores 84, 178 e 139 mg/dL estão todos abaixo dos cortes: teste normal.",
    "commentary": "Intolerância à glicose (B): não é categoria diagnóstica na gestação pelo critério IADPSG.\n\nDiabetes gestacional (C): nenhum valor atingiu o corte (178 < 180 em 1 hora).\n\nDiabetes pré-gestacional (D): exigiria jejum ≥ 126 ou 2 horas ≥ 200.",
    "reference": "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2017)",
    "tags": [
      "diabetes gestacional",
      "TOTG",
      "rastreamento"
    ]
  },
  {
    "id": "cerman2026-57",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante aloimunizada, 28 semanas, sem hidropisia. Doppler da artéria cerebral média com pico de velocidade sistólica= 1,65 MoM. De acordo com o MS, qual é a conduta CORRETA?",
    "options": [
      "(A) Indicar parto cesáreo.",
      "(B) Repetir o Doppler em 7 dias.",
      "(C) Indicar cordocentese para Hb/Ht.",
      "(D) Realizar ultrassonografia seriada."
    ],
    "correctAnswer": 1,
    "explanation": "O pico de velocidade sistólica da artéria cerebral média (PVS-ACM) estima a anemia fetal na aloimunização. Valores ≥ 1,5 MoM indicam anemia moderada a grave, com indicação de cordocentese para medir hemoglobina/hematócrito e fazer transfusão intrauterina, se confirmada.\n\nA banca, porém, considerou correta a repetição do Doppler em 7 dias, conduta que costuma ser aplicada a valores entre 1,29 e 1,5 MoM. Com 1,65 MoM, a cordocentese é a conduta mais defendida.",
    "commentary": "Cesárea com 28 semanas (A): a prematuridade extrema não se justifica; trata-se a anemia intraútero com transfusão.\n\nCordocentese (C): é a conduta indicada para PVS ≥ 1,5 MoM pela literatura e manuais; a banca não aceitou.\n\nUS seriada (D): o seguimento é feito pelo Doppler da ACM, e o valor atual já está acima do limite.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / Mari G et al. NEJM, 2000",
    "tags": [
      "aloimunização",
      "doppler da artéria cerebral média",
      "anemia fetal",
      "cordocentese"
    ],
    "alert": "Gabarito oficial discutível: pico sistólico da artéria cerebral média ≥ 1,5 MoM indica risco de anemia fetal moderada/grave e, pelos manuais, cordocentese (alternativa C), também aceita aqui.",
    "alsoAccepted": [
      2
    ]
  },
  {
    "id": "cerman2026-58",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "De acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde, qual das condições a seguir é considerada fator de alto risco para hemorragia pós-parto imediata?",
    "options": [
      "(A) Cesariana prévia.",
      "(B) Corioamnionite.",
      "(C) Placenta prévia.",
      "(D) Macrossomia fetal."
    ],
    "correctAnswer": 2,
    "explanation": "Na estratificação de risco para hemorragia pós-parto do MS/OPAS, placenta prévia ou acretismo é fator de alto risco (junto com sangramento ativo à admissão, hematócrito < 30%, plaquetas < 100.000, coagulopatia e dois ou mais fatores de médio risco).",
    "commentary": "Cesárea prévia (A): é fator de médio risco (ou baixo, conforme número).\n\nCorioamnionite (B): é fator de médio risco.\n\nMacrossomia (D): é fator de médio risco.",
    "reference": "OPAS/Ministério da Saúde — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "tags": [
      "hemorragia pós-parto",
      "estratificação de risco",
      "placenta prévia"
    ]
  },
  {
    "id": "cerman2026-59",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera com tuberculose pulmonar bacilífera, em tratamento rifampicina, isoniazida, pirazinamida e etambutol, acompanhado de piridoxina. O recém nascido é saudável. Segundo o Ministério da Saúde, qual é a conduta CORRETA quanto ao aleitamento?",
    "options": [
      "(A) Suspender o aleitamento materno e fornecer fórmula infantil.",
      "(B) Interromper o aleitamento apenas até a negativação do escarro.",
      "(C) Amamentar apenas após a conclusão do tratamento da mãe.",
      "(D) O aleitamento materno deve ser mantido, com a mãe utilizando máscara cirúrgica."
    ],
    "correctAnswer": 3,
    "explanation": "A tuberculose materna não contraindica o aleitamento. Os fármacos do esquema básico são compatíveis com a amamentação, e o bacilo não passa pelo leite; a transmissão é respiratória. A mãe bacilífera amamenta usando máscara cirúrgica, e o recém-nascido recebe quimioprofilaxia (isoniazida ou rifampicina) e BCG conforme o protocolo.",
    "commentary": "Suspender o aleitamento (A): não é necessário.\n\nInterromper até negativar o escarro (B): não há indicação de interromper.\n\nAmamentar só após o tratamento (C): privaria a criança do aleitamento sem benefício.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019)",
    "tags": [
      "tuberculose",
      "aleitamento materno",
      "puerpério"
    ]
  },
  {
    "id": "cerman2026-60",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 28 anos, 32 semanas, apresenta múltiplos condilomas acuminados vulvoperineais por HPV aguardando genotipagem. Não há sangramento, infecção secundária e o exame físico não demonstra obstrução do canal de parto. Segundo o Ministério da Saúde, qual é a melhor conduta quanto à via de parto?",
    "options": [
      "(A) Definir a via de parto por critérios obstétricos, pois a cesariana não reduz a transmissão vertical do HPV.",
      "(B) Indicar cesariana eletiva para reduzir o risco de transmissão vertical e papilomatose respiratória no recém-nascido.",
      "(C) Indicar cesariana devido a presença de condilomas múltiplos, ainda que sem repercussão clínica.",
      "(D) Programar cesariana se o teste de HPV for positivo para tipos de alto risco, mesmo sem lesões obstrutivas."
    ],
    "correctAnswer": 0,
    "explanation": "A presença de condilomas genitais não indica cesárea: a cesariana não previne de forma eficaz a transmissão vertical do HPV nem a papilomatose respiratória recorrente juvenil. A via de parto segue critérios obstétricos; a cesárea só se justifica se as lesões obstruírem o canal de parto ou houver risco de sangramento importante.",
    "commentary": "Cesárea para reduzir a papilomatose (B): não há proteção comprovada.\n\nCesárea por múltiplos condilomas sem repercussão (C): sem obstrução ou sangramento, não se indica.\n\nCesárea se HPV de alto risco (D): a genotipagem não muda a via de parto; aliás, condilomas são causados por HPV de baixo risco (6 e 11).",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) — HPV",
    "tags": [
      "HPV",
      "condiloma acuminado",
      "via de parto",
      "gestação"
    ]
  },
  {
    "id": "cerman2026-61",
    "module": "Pediatria",
    "text": "Você é o pediatra da rotina na UTI e a enfermeira vem avisar sobre recém-nascido de 30 horas de vida que nasceu prematuro de 36 semanas, AIG, portador de Síndrome de Down. No pré-natal, mãe teve história de polidrâmnio. RN ainda não evacuou e somente eliminou pouca quantidade de mecônio ao toque retal. Vômitos biliosos e desidratado. Exame físico sem outras alterações. RX simples de abdome evidencia o sinal da dupla bolha. Este quadro indica:",
    "options": [
      "(A) Má rotação de intestino médio.",
      "(B) Invaginação intestinal.",
      "(C) Atresia duodenal.",
      "(D) Doença de Hirschsprung."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido com síndrome de Down, polidrâmnio no pré-natal, vômitos biliosos nas primeiras horas, pouca eliminação de mecônio e sinal da dupla bolha (estômago e duodeno distendidos, sem ar distal): atresia duodenal. Cerca de 30% dos casos têm trissomia do 21. O tratamento é a duodenoduodenostomia.",
    "commentary": "Má rotação intestinal (A): pode dar dupla bolha com ar distal, e o volvo causa vômitos biliosos com piora rápida; a associação com Down e polidrâmnio favorece a atresia.\n\nInvaginação (B): ocorre em lactentes, entre 6 meses e 2 anos.\n\nDoença de Hirschsprung (D): retarda a eliminação de mecônio, mas a radiografia mostra distensão difusa de alças, não dupla bolha.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Atresia duodenal",
    "tags": [
      "atresia duodenal",
      "sinal da dupla bolha",
      "síndrome de Down",
      "obstrução intestinal neonatal"
    ]
  },
  {
    "id": "cerman2026-62",
    "topography": "10",
    "topic": "Toxoplasmose",
    "module": "Pediatria",
    "text": "Recém-nascido de mãe com sorologia realizada com 9 semanas de gestação para toxoplasmose IgM e IgG reagentes e avidez para IgG alta, não realizou seguimento e nem tratamento durante a gestação. O parto foi a termo, sem intercorrências. O RN apresenta bom estado geral, sem alterações clínicas aparentes. Considerando as diretrizes nacionais para o manejo da toxoplasmose congênita, assinale a conduta CORRETA:",
    "options": [
      "(A) Iniciar imediatamente o tratamento tríplice (sulfadiazina, pirimetamina e ácido folínico) e solicitar PCR para Toxoplasma gondii no líquor.",
      "(B) Tranquilizar a família, pois a alta avidez IgG materna indica infecção antiga, sem necessidade de investigação neonatal específica.",
      "(C) Solicitar sorologia para toxoplasmose IgM e IgA no recém-nascido e encaminhar para telerregulação com infectologista pediátrica.",
      "(D) Solicitar ultrassonografia transfontanelar e iniciar tratamento profilático para toxoplasmose até a confirmação laboratorial."
    ],
    "correctAnswer": 1,
    "explanation": "IgM e IgG reagentes com avidez alta antes de 12–16 semanas de gestação indicam infecção adquirida antes da concepção. Nessas condições, não há risco de transmissão vertical em gestante imunocompetente, e o recém-nascido assintomático não precisa de investigação específica para toxoplasmose congênita.",
    "commentary": "Tratamento tríplice e PCR no líquor (A): não há suspeita de infecção congênita.\n\nIgM/IgA no RN e telerregulação (C): seria a conduta em infecção materna na gestação ou indeterminada.\n\nUS transfontanelar e tratamento profilático (D): não há indicação.",
    "reference": "Ministério da Saúde — Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e Congênita (2018)",
    "tags": [
      "toxoplasmose",
      "teste de avidez",
      "recém-nascido",
      "toxoplasmose congênita"
    ]
  },
  {
    "id": "cerman2026-63",
    "topography": "4.1",
    "topic": "Síndrome nefrítica",
    "module": "Pediatria",
    "text": "Durante seu plantão em um hospital regional, você é chamado para avaliar João, 7 anos, internado há três dias por quadro de inchaço corporal e diminuição do volume urinário iniciado há cinco dias. No exame físico, a criança encontra-se pálida, com edema generalizado, frequência cardíaca de 120 bpm e pressão arterial de 120 × 80 mmHg (acima do percentil 95 para idade, sexo e estatura). Os resultados laboratoriais disponíveis são: Hemoglobina: 9,5 g/dL; leucócitos e plaquetas normais; ureia: 36 mg/dL; creatinina: 0,8 mg/dL; sódio: 134 mEq/L; potássio: 4,8 mEq/L. EAS: pH 6,0; densidade 1.020; hemoglobina +++; proteína ++; hemácias >100.000/mm³; leucócitos 20.000/mm³. Com base nesse quadro clínico-laboratorial, qual a hipótese diagnóstica principal e os exames complementares mais indicados para elucidar a etiologia?",
    "options": [
      "(A) Síndrome nefrótica – proteinúria de 24 horas e Colesterol.",
      "(B) Síndrome nefrítica – dismorfismo eritrocitário, PCR e p-ANCA.",
      "(C) Síndrome nefrítica – ASLO e Complemento C3.",
      "(D) Síndrome nefrótica – proteinúria em amostra de urina isolada e biopsia renal."
    ],
    "correctAnswer": 2,
    "explanation": "Edema, oligúria, hipertensão, hematúria macro/microscópica com proteinúria leve a moderada em criança em idade escolar: síndrome nefrítica. A causa mais comum nessa idade é a glomerulonefrite pós-estreptocócica, investigada com ASLO (ou anti-DNase B, se após impetigo) e complemento C3, que fica baixo e normaliza em até 8 semanas.",
    "commentary": "Síndrome nefrótica com proteinúria e colesterol (A): a hematúria intensa e a hipertensão caracterizam nefrítica, com proteinúria não nefrótica.\n\nNefrítica com dismorfismo, PCR e p-ANCA (B): ANCA investiga vasculites, menos prováveis nessa idade; a primeira hipótese é pós-infecciosa.\n\nNefrótica com biópsia (D): o quadro não é nefrótico, e biópsia não é o primeiro passo.",
    "reference": "SBP — Glomerulonefrite difusa aguda pós-estreptocócica / Nelson Textbook of Pediatrics, 21ª ed.",
    "tags": [
      "síndrome nefrítica",
      "glomerulonefrite pós-estreptocócica",
      "complemento C3",
      "ASLO"
    ]
  },
  {
    "id": "cerman2026-64",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Lactente de um ano é levado a atendimento em unidade básica de saúde para atendimento de rotina. Durante o atendimento, a mãe informa que eles moram numa comunidade e devido à seca estavam sem acesso à UBS de referência desde em 1 mês de idade. No trajeto até o atendimento, o barco que estavam afundou e eles perderam tudo, inclusive o cartão vacinal. Exame físico: presença de cicatriz vacinal em braço direito e sem alterações nos demais aparelhos. O médico decide, corretamente, atualizar a situação vacinal do menino e escreve no prontuário todas as vacinas que deverão ser atualizadas até o primeiro ano de, com exceção de:",
    "options": [
      "(A) Febre amarela.",
      "(B) BCG e tríplice viral.",
      "(C) Varicela.",
      "(D) BCG e Rotavírus."
    ],
    "correctAnswer": 3,
    "explanation": "Na atualização vacinal de uma criança de 1 ano que só tomou as vacinas do nascimento:\n• BCG: a cicatriz vacinal comprova a dose; não se repete.\n• Rotavírus: a idade máxima para a 1ª dose é 3 meses e 15 dias e, para a última, 7 meses e 29 dias — passou do prazo.\n\nAs demais (pentavalente, VIP, pneumo-10, meningo, febre amarela, tríplice viral etc.) são atualizadas.",
    "commentary": "Febre amarela (A): aplicada a partir dos 9 meses; deve ser atualizada.\n\nBCG e tríplice viral (B): a tríplice viral é dos 12 meses e deve ser aplicada.\n\nVaricela (C): a varicela (na tetraviral) é dos 15 meses; aos 12 meses ainda não está em atraso, mas entra no planejamento — e a pergunta pede as vacinas que não serão feitas.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação e Manual de Normas e Procedimentos para Vacinação (2024)",
    "tags": [
      "calendário vacinal",
      "atraso vacinal",
      "vacina rotavírus",
      "BCG"
    ]
  },
  {
    "id": "cerman2026-65",
    "module": "Pediatria",
    "text": "Pré-escolar, 3 anos, que com 11 meses iniciou tratamento para Leucemia Linfoide aguda, iniciou há quatro dias quadro de febre alta (39,5 ºC), tosse seca, coriza intensa e conjuntivite. No segundo dia de febre surgiram pequenas manchas esbranquiçadas com halo avermelhado em mucosa jugal, na altura dos molares. No terceiro dia, aparece exantema maculopapular eritematoso, inicialmente em face e atrás das orelhas, com progressão em 24 horas para tronco e membros, tornando-se confluente. O rash evolui com descamação fina. Em relação ao quadro descrito, o agente etiológico mais provável é:",
    "options": [
      "(A) Rubivirus — agente da rubéola.",
      "(B) Morbillivirus — agente do sarampo.",
      "(C) Parvovirus B19 — agente do eritema infeccioso.",
      "(D) Enterovirus — agente da síndrome mão-pé boca."
    ],
    "correctAnswer": 1,
    "explanation": "Pródromo com febre alta, tosse, coriza e conjuntivite (os três \"Cs\"), manchas de Koplik na mucosa jugal e exantema maculopapular que começa na face e atrás das orelhas e desce em 24–48 horas, tornando-se confluente, com descamação furfurácea: sarampo (Morbillivirus). Em imunossuprimidos, como a criança em tratamento de leucemia, o sarampo é especialmente grave (pneumonia, encefalite).",
    "commentary": "Rubéola (A): quadro leve, com linfonodomegalia retroauricular e occipital, exantema róseo não confluente e sem manchas de Koplik.\n\nEritema infeccioso (C): face \"esbofeteada\" e exantema rendilhado, com poucos sintomas gerais.\n\nMão-pé-boca (D): vesículas em mãos, pés e boca.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (2024) — Sarampo",
    "tags": [
      "sarampo",
      "manchas de Koplik",
      "doenças exantemáticas",
      "imunossuprimido"
    ]
  },
  {
    "id": "cerman2026-66",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Durante o atendimento em sala de parto, nasce um recém-nascido de 37 semanas e 4 dias, após trabalho de parto complicado por prolapso de cordão umbilical. O bebê chega ao berço aquecido em apneia, e os passos iniciais da reanimação são realizados. Após 30 segundos, o recém-nascido permanece em apneia, com frequência cardíaca de 80 bpm. Foi iniciada ventilação com balão e máscara, e o oxímetro de pulso pré-ductal foi colocado, mas ainda sem leitura disponível. Considerando as diretrizes de reanimação neonatal atualizadas (AHA/AAP 2025), qual deve ser a próxima conduta imediata?",
    "options": [
      "(A) Iniciar massagem cardíaca sincronizada, pois a frequência cardíaca permanece abaixo de 100 bpm.",
      "(B) Verificar se a técnica de ventilação está correta quanto à adaptação da máscara à face do recém-nascido, permeabilidade das vias aéreas e pressão exercida no balão.",
      "(C) Repetir o ciclo de ventilação por balão e máscara, oferecendo oxigênio suplementar a 100%.",
      "(D) Está indicada a ventilação através de cânula traqueal devido à ventilação por máscara facial não efetiva."
    ],
    "correctAnswer": 1,
    "explanation": "Após iniciar a ventilação com pressão positiva, se a frequência cardíaca não sobe, o primeiro passo é verificar se a ventilação é efetiva: ajuste da máscara à face, posição da cabeça e permeabilidade das vias aéreas, abertura da boca e pressão aplicada (sequência MR SOPA). A maior causa de falha na reanimação neonatal é a ventilação inadequada.",
    "commentary": "Massagem cardíaca com FC < 100 (A): a massagem só é indicada se FC < 60 bpm após 30 segundos de ventilação efetiva.\n\nOxigênio a 100% (C): em RN ≥ 34 semanas a ventilação começa com ar ambiente; o O₂ é ajustado pela oximetria, e antes é preciso corrigir a técnica.\n\nIntubação (D): é considerada se a ventilação por máscara continuar ineficaz após as correções.",
    "reference": "SBP — Programa de Reanimação Neonatal (2022) / AHA/AAP Neonatal Resuscitation Guidelines (2025)",
    "tags": [
      "reanimação neonatal",
      "ventilação com pressão positiva",
      "MR SOPA"
    ]
  },
  {
    "id": "cerman2026-67",
    "topography": "9",
    "topic": "Coagulopatias",
    "module": "Pediatria",
    "text": "Durante consulta pediátrica, um lactente de 10 meses é trazido pelos pais devido a inchaço progressivo nos joelhos há cerca de 30 dias, percebido após o início do engatinhar. A criança não apresenta febre, dor intensa ou limitação importante dos movimentos. Ao exame físico, observa-se edema bilateral de joelhos, sem calor ou rubor, e demais sistemas sem alterações. Os exames laboratoriais mostram: Hemograma: normal. TAP: normal. TTPa: prolongado. Com base nesses achados, qual o diagnóstico mais provável?",
    "options": [
      "(A) Hemofilia.",
      "(B) Artrite reumatoide juvenil.",
      "(C) Sinovite transitória.",
      "(D) Artrite séptica."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente que começou a engatinhar e passou a ter aumento de volume nos joelhos (hemartroses por microtraumas), com TAP normal e TTPa prolongado: hemofilia (deficiência de fator VIII — hemofilia A — ou IX — hemofilia B). O diagnóstico é confirmado pela dosagem dos fatores.",
    "commentary": "Artrite reumatoide juvenil (B): não altera o coagulograma e é rara nessa idade.\n\nSinovite transitória (C): quadro agudo e autolimitado de quadril, em pré-escolares, geralmente após infecção viral.\n\nArtrite séptica (D): febre, dor intensa, calor e impotência funcional.",
    "reference": "Ministério da Saúde — Manual de Hemofilia, 2ª ed. (2015)",
    "tags": [
      "hemofilia",
      "hemartrose",
      "TTPa prolongado",
      "coagulopatias"
    ]
  },
  {
    "id": "cerman2026-68",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Você é médico de família em uma unidade básica de saúde do interior do Amazonas e atende uma criança de 3 anos trazida pela mãe com queixa de atraso na fala. A criança ainda não fala, compreende comandos verbais simples e, por vezes, aponta ou conduz o responsável pela mão para expressar suas vontades. Os marcos motores foram adquiridos dentro da normalidade. Na creche, tende ao isolamento, irrita-se com mudanças na rotina, apresenta hipersensibilidade a sons, episódios de agitação e irritabilidade, além de movimentos repetitivos das mãos. Diante do quadro descrito, qual é a principal hipótese diagnóstica?",
    "options": [
      "(A) Transtorno do processamento auditivo central",
      "(B) Transtorno do déficit de atenção e hiperatividade.",
      "(C) Não há atraso, apenas a criança é mais tímida.",
      "(D) Transtorno do espectro autista."
    ],
    "correctAnswer": 3,
    "explanation": "Atraso de linguagem com comunicação por gestos instrumentais (conduz o adulto pela mão), isolamento social, resistência a mudanças de rotina, hipersensibilidade sensorial e estereotipias motoras: transtorno do espectro autista. Os dois domínios do DSM-5-TR estão presentes — déficit de comunicação e interação social, e padrões restritos e repetitivos.\n\nA conduta é encaminhar para avaliação especializada e intervenção precoce, sem esperar o diagnóstico definitivo para iniciar estímulos.",
    "commentary": "Processamento auditivo central (A): não explica o déficit de interação social e as estereotipias.\n\nTDAH (B): desatenção e hiperatividade, sem atraso de linguagem com déficit social e comportamentos repetitivos.\n\nTimidez (C): a criança tem atraso de linguagem e sinais claros de alerta.",
    "reference": "American Psychiatric Association — DSM-5-TR (2022) / SBP — Manual de Orientação: Transtorno do Espectro do Autismo (2019)",
    "tags": [
      "transtorno do espectro autista",
      "atraso de linguagem",
      "desenvolvimento neuropsicomotor"
    ]
  },
  {
    "id": "cerman2026-69",
    "module": "Pediatria",
    "text": "Durante atendimento no CAIC, um menino de 8 anos, branco é trazido pelos pais com queixa de inchaço no joelho esquerdo há quase dois meses. A mãe relata que o menino acorda com rigidez e dificuldade para andar pela manhã, mas melhora ao longo do dia. Ao exame físico, o paciente apresenta marcha claudicante, edema e limitação de movimentos no joelho direito, sem sinais de infecção ou outras alterações sistêmicas. Os exames laboratoriais mostram: FAN positivo (1:320); ASLO = 800 U Todd (normal até 300 U); Demais exames sem alterações relevantes. Com base nesses achados, qual é a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Púrpura trombocitopênica idiopática.",
      "(B) Artrite gonocócica.",
      "(C) Artrite idiopática juvenil.",
      "(D) Síndrome de Sjögren."
    ],
    "correctAnswer": 2,
    "explanation": "Artrite de uma única grande articulação por mais de 6 semanas, com rigidez matinal, em criança, com FAN positivo e sem sinais infecciosos: artrite idiopática juvenil, forma oligoarticular. O FAN positivo aumenta o risco de uveíte anterior crônica (assintomática), o que exige exame oftalmológico periódico com lâmpada de fenda.\n\nA ASLO elevada isolada indica apenas contato prévio com estreptococo.",
    "commentary": "PTI (A): causa plaquetopenia e sangramentos, não artrite.\n\nArtrite gonocócica (B): ocorre em adolescentes sexualmente ativos, com quadro agudo, febre e tenossinovite.\n\nSíndrome de Sjögren (D): rara na infância, com xerostomia, xeroftalmia e parotidite.",
    "reference": "SBP/SBR — Artrite idiopática juvenil / ILAR classification (2001)",
    "tags": [
      "artrite idiopática juvenil",
      "oligoartrite",
      "FAN",
      "uveíte"
    ]
  },
  {
    "id": "cerman2026-70",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Um menino de 6 anos é trazido ao consultório por apresentar episódios recorrentes de tosse seca, especialmente à noite, e sibilância ocasional há cerca de seis meses. Nas últimas semanas, os sintomas se intensificaram, com dispneia leve aos esforços. Nega febre e refere expectoração mucosa eventual. Há histórico familiar de asma. Ao exame, notam-se sibilos expiratórios bilaterais. Considerando o manejo clínico dessa criança, qual dos critérios a seguir é mais útil para avaliar, a longo prazo, o controle e a eficácia do tratamento?",
    "options": [
      "(A) Frequência de uso de broncodilatadores de curta ação.",
      "(B) Monitoramento quinzenal da função pulmonar com espirometria.",
      "(C) Medição da frequência respiratória e do pulso durante as crises.",
      "(D) Realização de exames de imagem torácica a cada dois meses."
    ],
    "correctAnswer": 0,
    "explanation": "O controle da asma (GINA) é avaliado pela frequência de sintomas diurnos, despertares noturnos, limitação de atividades e, principalmente, necessidade de broncodilatador de resgate. Uso frequente de SABA indica asma mal controlada e necessidade de ajustar o tratamento de manutenção.",
    "commentary": "Espirometria quinzenal (B): a função pulmonar é avaliada no diagnóstico e periodicamente (a cada 1–2 anos ou após mudança de tratamento), não quinzenalmente.\n\nFR e pulso nas crises (C): avaliam a gravidade da crise, não o controle a longo prazo.\n\nImagem torácica a cada 2 meses (D): não tem papel no seguimento da asma.",
    "reference": "GINA — Global Strategy for Asthma Management and Prevention (2024)",
    "tags": [
      "asma",
      "controle da asma",
      "broncodilatador de resgate",
      "GINA"
    ]
  },
  {
    "id": "cerman2026-71",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Durante uma ação de saúde em uma comunidade ribeirinha, você é chamado para avaliar uma criança de 11 meses que apresenta diarreia há dois dias e três episódios de vômitos desde a manhã. A mãe relata que o bebê tem mamado menos e não urina há cerca de 6 horas. Ao exame, a criança está irritada, com olhos fundos e prega cutânea que se desfaz lentamente (cerca de 6 segundos). Não há febre. Com base no caso clínico, indique o grau mais provável de desidratação que a criança apresenta:",
    "options": [
      "(A) Desidratação leve.",
      "(B) Desidratação moderada.",
      "(C) Desidratação grave.",
      "(D) Sem sinais de desidratação."
    ],
    "correctAnswer": 2,
    "explanation": "Pela avaliação do estado de hidratação do Ministério da Saúde (AIDPI), são sinais de desidratação grave: letargia ou inconsciência, olhos muito fundos, incapacidade de beber e sinal da prega que desaparece muito lentamente (> 2 segundos). Dois ou mais desses sinais definem desidratação grave.\n\nA criança tem olhos fundos e prega desaparecendo em cerca de 6 segundos, além de oligúria — a banca classificou como desidratação grave.",
    "commentary": "Desidratação leve (A): não há categoria \"leve\" separada no AIDPI; a prega muito lenta já é sinal de gravidade.\n\nDesidratação moderada (\"algum grau\") (B): exige dois sinais como irritabilidade, olhos fundos e prega lenta (≤ 2 s); prega de 6 s ultrapassa esse grau.\n\nSem desidratação (D): há sinais claros de desidratação.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / AIDPI",
    "tags": [
      "desidratação",
      "diarreia aguda",
      "AIDPI",
      "sinal da prega"
    ]
  },
  {
    "id": "cerman2026-72",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Durante uma ação de saúde em uma comunidade ribeirinha, você é chamado para avaliar uma criança de 11 meses que apresenta diarreia há dois dias e três episódios de vômitos desde a manhã. A mãe relata que o bebê tem mamado menos e não urina há cerca de 6 horas. Ao exame, a criança está irritada, com olhos fundos e prega cutânea que se desfaz lentamente (cerca de 6 segundos). Não há febre.\n\nCom base no grau provável de desidratação, indique o tratamento preconizado no primeiro momento no Pronto Atendimento:",
    "options": [
      "(A) Administração intravenosa de solução salina normal.",
      "(B) Início imediato de terapia de reidratação com soro oral.",
      "(C) Observação e orientação para aumentar a ingestão de líquidos em casa.",
      "(D) Administração de antieméticos e reavaliação."
    ],
    "correctAnswer": 0,
    "explanation": "Desidratação grave: Plano C, com hidratação intravenosa imediata com soro fisiológico 0,9% (ou Ringer lactato), em fase rápida de expansão, seguida de reavaliação frequente. Assim que a criança conseguir beber, oferece-se também SRO.",
    "commentary": "SRO imediata (B): é o Plano B, para algum grau de desidratação.\n\nOrientar e liberar (C): é o Plano A, para crianças sem desidratação.\n\nAntiemético e reavaliação (D): atrasaria a reidratação; antieméticos não são a prioridade.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023)",
    "tags": [
      "desidratação grave",
      "plano C",
      "hidratação venosa"
    ]
  },
  {
    "id": "cerman2026-73",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Durante uma ação de saúde em uma comunidade ribeirinha, você é chamado para avaliar uma criança de 11 meses que apresenta diarreia há dois dias e três episódios de vômitos desde a manhã. A mãe relata que o bebê tem mamado menos e não urina há cerca de 6 horas. Ao exame, a criança está irritada, com olhos fundos e prega cutânea que se desfaz lentamente (cerca de 6 segundos). Não há febre.\n\nPara prevenir futuros episódios de desidratação como o descrito no caso em crianças, a mais eficaz entre as seguintes medidas é:",
    "options": [
      "(A) Iniciar dieta oral com introdução progressiva de alimentos.",
      "(B) Manter a amamentação exclusiva até pelo menos 4 meses.",
      "(C) Aumentar a frequência das mamadas durante episódios de diarreia.",
      "(D) Iniciar água de coco e Imolac Lactiol."
    ],
    "correctAnswer": 2,
    "explanation": "Na prevenção de desidratação em novos episódios de diarreia, a medida mais eficaz entre as listadas é manter e aumentar o aleitamento materno durante a diarreia (Plano A: oferecer mais líquidos que o habitual e manter a alimentação), já que o leite materno hidrata, nutre e protege contra infecções.",
    "commentary": "Dieta com introdução progressiva (A): a alimentação habitual deve ser mantida desde o início, sem jejum nem reintrodução lenta; não é a medida mais eficaz de prevenção da desidratação.\n\nAmamentação exclusiva até 4 meses (B): a recomendação é até 6 meses.\n\nÁgua de coco e Imolac (D): não substituem a solução de reidratação oral; fórmulas especiais não são indicadas de rotina.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / AIDPI",
    "tags": [
      "diarreia aguda",
      "aleitamento materno",
      "prevenção de desidratação"
    ]
  },
  {
    "id": "cerman2026-74",
    "topography": "11",
    "topic": "Doença de Kawasaki",
    "module": "Pediatria",
    "text": "Entre as manifestações clínicas para o diagnóstico da Doença de Kawasaki, sempre há presença de febre com duração igual ou superior a cinco dias, associada a critérios maiores como:",
    "options": [
      "(A) Exantema, hepatomegalia, prurido, artralgia, icterícia.",
      "(B) Edema de mãos e pés, exantema polimorfo e generalizado, e hiperemia ocular.",
      "(C) Descamação palmo-plantar, hepatosplenomegalia, petéquias, artralgia, prurido.",
      "(D) Piúria estéril, icterícia, PCR elevado, hiperemia ocular, artralgia."
    ],
    "correctAnswer": 1,
    "explanation": "Critérios clássicos da doença de Kawasaki: febre ≥ 5 dias com pelo menos 4 de 5 critérios — conjuntivite bilateral não exsudativa (hiperemia ocular), alterações de lábios e mucosa oral, alterações de extremidades (edema e eritema de mãos e pés, depois descamação periungueal), exantema polimorfo e linfonodomegalia cervical (≥ 1,5 cm, geralmente unilateral).",
    "commentary": "Hepatomegalia, prurido, artralgia e icterícia (A): podem ocorrer, mas não são critérios maiores.\n\nDescamação, hepatoesplenomegalia, petéquias (C): a descamação é tardia; petéquias e hepatoesplenomegalia não são critérios.\n\nPiúria estéril, icterícia e PCR (D): são achados laboratoriais de apoio, não critérios clínicos maiores.",
    "reference": "AHA Scientific Statement — Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease (2017)",
    "tags": [
      "doença de Kawasaki",
      "critérios diagnósticos",
      "vasculites"
    ]
  },
  {
    "id": "cerman2026-75",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "Lactente de 8 meses procura consulta pediátrica com história de irritabilidade, vômitos e diarreia com sangue há 15 dias, desde o início da alimentação complementar com fórmulas, papas de frutas e legumes. Exame físico: bom estado geral, hidratado, com eczema em couro cabeludo e face. Peso: 8 kg (score Z+2). Provável diagnóstico:",
    "options": [
      "(A) Cloridrorreia congênita.",
      "(B) Invaginação intestinal.",
      "(C) Gastroenterite viral.",
      "(D) Alergia alimentar."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente que, após introduzir fórmula (proteína do leite de vaca) e outros alimentos, passou a ter irritabilidade, vômitos e diarreia com sangue, com eczema e bom estado geral: alergia alimentar, provavelmente à proteína do leite de vaca (proctocolite alérgica). O tratamento é a exclusão do alérgeno, com fórmula extensamente hidrolisada ou de aminoácidos.",
    "commentary": "Cloridorreia congênita (A): diarreia aquosa desde o nascimento (ou polidrâmnio na gestação), sem sangue.\n\nInvaginação (B): dor em cólica intermitente com fezes em geleia de framboesa, quadro agudo, não 15 dias com bom estado geral.\n\nGastroenterite viral (C): diarreia aguda e autolimitada, sem relação com a introdução de alimentos nem eczema.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (ASBAI/SBP, 2018)",
    "tags": [
      "alergia à proteína do leite de vaca",
      "alergia alimentar",
      "proctocolite alérgica"
    ]
  },
  {
    "id": "cerman2026-76",
    "topography": "9",
    "topic": "Anemias",
    "module": "Pediatria",
    "text": "Lactente de 3 meses, residente no interior, é levado à Unidade de Saúde por apresentar manchas café com leite, hiperpigmentação cutânea, atraso de crescimento, ausência de polegares e microcefalia → Hemograma: Pancitopenia. Provável diagnóstico:",
    "options": [
      "(A) Anemia de Fanconi.",
      "(B) Disceratose congênita.",
      "(C) Talassemia maior.",
      "(D) Síndrome de Marfan."
    ],
    "correctAnswer": 0,
    "explanation": "Manchas café com leite, hiperpigmentação, baixa estatura, anomalias de polegar (ausência, hipoplasia), microcefalia e pancitopenia: anemia de Fanconi, a principal síndrome de falência medular hereditária. O diagnóstico é confirmado pelo teste de quebras cromossômicas (diepoxibutano ou mitomicina C). Há risco aumentado de leucemia mieloide e tumores sólidos.",
    "commentary": "Disceratose congênita (B): tríade de distrofia ungueal, pigmentação reticulada e leucoplasia oral.\n\nTalassemia maior (C): anemia hemolítica microcítica grave, com hepatoesplenomegalia, sem anomalias de polegar nem pancitopenia.\n\nSíndrome de Marfan (D): doença do tecido conjuntivo (alta estatura, aracnodactilia, ectopia do cristalino), sem falência medular.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Síndromes de falência medular hereditária",
    "tags": [
      "anemia de Fanconi",
      "pancitopenia",
      "falência medular"
    ]
  },
  {
    "id": "cerman2026-77",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Lactente de 5 meses, sexo masculino, é levado inconsciente ao SPA após episódio de crise convulsiva. A mãe relata que o quadro ocorreu após sua irmã, de 2 anos, arremessar uma boneca com força contra o corpo do lactente. Fundoscopia: hemorragia retiniana bilateral. Hipótese mais provável:",
    "options": [
      "(A) Intoxicação exógena.",
      "(B) Deficiência de piridoxina.",
      "(C) Síndrome do bebê sacudido.",
      "(D) Ruptura de aneurisma cerebral."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 5 meses com convulsão, rebaixamento de consciência e hemorragia retiniana bilateral, com história incompatível com a gravidade (uma criança de 2 anos arremessando uma boneca): traumatismo craniano abusivo (síndrome do bebê sacudido). A tríade clássica é hematoma subdural, hemorragias retinianas e encefalopatia.\n\nA conduta inclui neuroimagem, investigação de outras lesões (radiografias de esqueleto), proteção da criança e notificação obrigatória ao Conselho Tutelar.",
    "commentary": "Intoxicação exógena (A): não explica as hemorragias retinianas.\n\nDeficiência de piridoxina (B): causa convulsões neonatais refratárias, sem hemorragia retiniana.\n\nAneurisma cerebral (D): muito raro em lactentes.",
    "reference": "SBP — Manual de Atendimento às Crianças e Adolescentes Vítimas de Violência (2018)",
    "tags": [
      "síndrome do bebê sacudido",
      "maus-tratos infantis",
      "hemorragia retiniana",
      "traumatismo craniano abusivo"
    ]
  },
  {
    "id": "cerman2026-78",
    "topography": "1.3",
    "topic": "Sinusite/rinossinusite",
    "module": "Pediatria",
    "text": "Menina de 6 anos é trazida pela mãe ao ambulatório com rinorreia purulenta há 21 dias. Há 15 dias foi avaliada e prescrito soro nasal e amoxicilina. Terminou o tratamento e o quadro persiste. Ao exame físico está em bom estado geral, sem febre com presença de rinorreia purulenta e fétida na fossa nasal direita. Diagnóstico e conduta são:",
    "options": [
      "(A) Corpo estranho, internar para iniciar antibiótico antes da remoção.",
      "(B) Rinossinusite, introduzir amoxicilina com clavulanato.",
      "(C) Rinossinusite, solicitar TC de seios da face.",
      "(D) Corpo estranho, retirar da fossa nasal."
    ],
    "correctAnswer": 3,
    "explanation": "Rinorreia purulenta e fétida unilateral, persistente apesar de antibiótico, em criança em bom estado geral: corpo estranho nasal até prova em contrário. A conduta é a remoção do corpo estranho (com pinça, aspiração ou técnica de pressão positiva), sob visualização adequada.",
    "commentary": "Internar e iniciar antibiótico antes da remoção (A): a remoção resolve o quadro; não há indicação de internação.\n\nRinossinusite com amoxicilina-clavulanato (B): a unilateralidade e o odor fétido apontam para corpo estranho; a rinossinusite costuma ser bilateral.\n\nRinossinusite com TC (C): TC só para complicações ou cirurgia; não é o caso.",
    "reference": "Diretrizes Brasileiras de Rinossinusites (ABORL-CCF, 2015) / Nelson Textbook of Pediatrics, 21ª ed.",
    "tags": [
      "corpo estranho nasal",
      "rinorreia unilateral",
      "otorrinolaringologia pediátrica"
    ]
  },
  {
    "id": "cerman2026-79",
    "topography": "11",
    "topic": "Desnutrição",
    "module": "Pediatria",
    "text": "Pré-escolar, desnutrido, indígena Ticuna, é levado a uma consulta ambulatorial devido ao surgimento de manchas escamosas, ressecadas e hiperceratóticas nos braços, pernas e nádegas. Ainda relata dificuldade de enxergar à noite ou em locais com pouca claridade. A hipótese diagnóstica mais provável é deficiência de:",
    "options": [
      "(A) Ácido fólico.",
      "(B) Vitamina A.",
      "(C) Tiamina.",
      "(D) Niacina."
    ],
    "correctAnswer": 1,
    "explanation": "Pele seca, descamativa e com hiperceratose folicular (frinodermia) em braços, pernas e nádegas, com cegueira noturna (nictalopia), em criança desnutrida: hipovitaminose A. A deficiência de vitamina A também causa xeroftalmia, manchas de Bitot e maior gravidade de infecções (sarampo, diarreia). O Brasil suplementa vitamina A em áreas de risco, como populações indígenas e a Região Norte.",
    "commentary": "Ácido fólico (A): causa anemia megaloblástica e glossite.\n\nTiamina (C): causa beribéri (insuficiência cardíaca, neuropatia).\n\nNiacina (D): causa pelagra — dermatite em áreas expostas ao sol, diarreia e demência.",
    "reference": "Ministério da Saúde — Programa Nacional de Suplementação de Vitamina A (2013)",
    "tags": [
      "hipovitaminose A",
      "cegueira noturna",
      "desnutrição",
      "saúde indígena"
    ]
  },
  {
    "id": "cerman2026-80",
    "topography": "2.2",
    "topic": "Febre reumática",
    "module": "Pediatria",
    "text": "São critérios maiores para o diagnóstico de febre reumática, EXCETO:",
    "options": [
      "(A) Coreia.",
      "(B) Artralgia.",
      "(C) Cardite.",
      "(D) Poliartrite."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a EXCEÇÃO. Critérios maiores de Jones: cardite, poliartrite (ou monoartrite/poliartralgia em populações de risco moderado/alto), coreia de Sydenham, eritema marginado e nódulos subcutâneos. A artralgia é critério menor (em populações de baixo risco).",
    "commentary": "Coreia (A): critério maior.\n\nCardite (C): critério maior (clínica ou subclínica, ao ecocardiograma).\n\nPoliartrite (D): critério maior.",
    "reference": "Critérios de Jones revisados (AHA, 2015) / Diretrizes Brasileiras para Diagnóstico, Tratamento e Prevenção da Febre Reumática (SBC)",
    "tags": [
      "febre reumática",
      "critérios de Jones",
      "artralgia"
    ]
  },
  {
    "id": "cerman2026-81",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Uma mulher de 45 anos, assintomática, procura o posto de saúde após ver um vídeo de um médico em uma rede social contendo uma lista de exames laboratoriais e de imagem que toda mulher deveria realizar. Ela deseja realizá-los “para ter certeza de que está tudo bem”. A médica da unidade, após anamnese e exame físico sem fatores de risco relevantes, orienta a paciente sobre riscos e benefícios da solicitação de exames desnecessários. Com base nos níveis de prevenção em saúde, a conduta da médica exemplifica:",
    "options": [
      "(A) Prevenção primária.",
      "(B) Prevenção secundária.",
      "(C) Prevenção terciária.",
      "(D) Prevenção quaternária."
    ],
    "correctAnswer": 3,
    "explanation": "Prevenção quaternária é a detecção de pessoas em risco de sobremedicalização e a proteção contra intervenções desnecessárias ou danosas. Orientar uma mulher assintomática, sem fatores de risco, sobre os riscos de exames sem indicação (falsos-positivos, sobrediagnóstico, cascata de exames) é prevenção quaternária.",
    "commentary": "Primária (A): age antes da doença (promoção e proteção específica).\n\nSecundária (B): diagnóstico precoce e rastreamento com indicação.\n\nTerciária (C): reabilitação e redução de sequelas.",
    "reference": "Jamoulle M. Prevenção quaternária / Gusso G. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "prevenção quaternária",
      "níveis de prevenção",
      "sobrediagnóstico"
    ]
  },
  {
    "id": "cerman2026-82",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Durante a reunião de equipe em uma Unidade de Saúde da Família, o médico relata que a comunidade tem buscado o serviço apenas para obter encaminhamentos para especialistas, e que muitos desconhecem a carta de serviços da UBS. Ele propõe ações educativas para reforçar a importância do vínculo dos comunitários com a equipe e o acompanhamento longitudinal. Qual atributo da Atenção Primária à Saúde está sendo mais diretamente abordado na proposta do médico?",
    "options": [
      "(A) Primeiro contato.",
      "(B) Coordenação do cuidado.",
      "(C) Integralidade.",
      "(D) Orientação comunitária."
    ],
    "correctAnswer": 0,
    "explanation": "O primeiro contato (acessibilidade e uso do serviço como porta de entrada a cada novo problema) é o atributo da APS em jogo quando a população usa a UBS só como local de encaminhamento e desconhece a carta de serviços. As ações educativas propostas buscam que a comunidade procure a equipe como serviço de primeira escolha.",
    "commentary": "Coordenação do cuidado (B): integração do cuidado entre a APS e outros pontos da rede.\n\nIntegralidade (C): oferta de todos os serviços necessários.\n\nOrientação comunitária (D): reconhecimento das necessidades da comunidade pelo contexto; é atributo derivado.",
    "reference": "Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (2002)",
    "tags": [
      "atributos da APS",
      "primeiro contato",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-83",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Ao receber o resultado de uma biópsia que confirmou neoplasia gástrica avançada, um médico de família prepara-se para comunicar o diagnóstico ao paciente. Em consulta reservada, ele inicia a conversa buscando entender o que o paciente compreende sobre sua condição e quais preocupações tem naquele momento. No protocolo SPIKES, essa conduta se insere predominantemente em qual componente da abordagem?",
    "options": [
      "(A) Preparação do ambiente para a notícia (Setting up).",
      "(B) Comunicação do diagnóstico e prognóstico (Knowledge).",
      "(C) Exploração da percepção do paciente (Perception).",
      "(D) Planejamento conjunto dos próximos passos (Strategy/Summary)."
    ],
    "correctAnswer": 2,
    "explanation": "No protocolo SPIKES: S (Setting — preparar o ambiente), P (Perception — entender o que o paciente já sabe), I (Invitation — quanto ele quer saber), K (Knowledge — dar a informação), E (Emotions — acolher) e S (Strategy and Summary — plano). Perguntar o que o paciente entende sobre sua condição corresponde à Percepção.",
    "commentary": "Setting (A): preparação do ambiente — privacidade, tempo, acompanhante.\n\nKnowledge (B): comunicação da notícia, em linguagem clara.\n\nStrategy/Summary (D): plano dos próximos passos.",
    "reference": "Baile WF et al. SPIKES — A Six-Step Protocol for Delivering Bad News (The Oncologist, 2000)",
    "tags": [
      "protocolo SPIKES",
      "comunicação de más notícias",
      "relação médico-paciente"
    ]
  },
  {
    "id": "cerman2026-84",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Saúde Coletiva",
    "text": "Mulher de 55 anos, previamente submetida à histerectomia total por miomatose uterina benigna, comparece à unidade básica de saúde solicitando agendamento de exame preventivo. Segundo as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2025), qual deve ser a conduta?",
    "options": [
      "(A) Suspender o rastreamento.",
      "(B) Realizar colposcopia anual.",
      "(C) Realizar citologia vaginal anual.",
      "(D) Manter rastreamento a cada 3 anos."
    ],
    "correctAnswer": 0,
    "explanation": "Mulheres submetidas a histerectomia total por doença benigna, sem antecedente de lesão de alto grau ou câncer, não têm mais colo uterino e devem ter o rastreamento suspenso.",
    "commentary": "Colposcopia anual (B): sem indicação.\n\nCitologia vaginal anual (C): sem indicação após histerectomia total por doença benigna.\n\nManter a cada 3 anos (D): não há colo a rastrear.",
    "reference": "INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016/2025)",
    "tags": [
      "rastreamento",
      "câncer de colo uterino",
      "histerectomia"
    ]
  },
  {
    "id": "cerman2026-85",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Conforme Lopes e Dias (2019) destacam no Tratado de Medicina de Família e Comunidade, o Método Clínico Centrado na Pessoa (MCCP) é um modelo derivado da abordagem centrada na pessoa que considera que a consulta deva atender às necessidades e expectativas de médicos e pessoas, tornando esses encontros adequados para a Atenção Primária à Saúde. Considerando a atualização por Moira Stewart e colaboradores em 2017 dos componentes interativos do MCCP no livro “Medicina Centrada na Pessoa - transformando o encontro clínico\", assinale a alternativa que CORRETAMENTE contenha estes componentes:",
    "options": [
      "(A) Explorando a saúde, a doença e a experiência da pessoa com a doença; Entender a pessoa como um todo - o indivíduo, família e o contexto; Elaborando um plano comum de manejo; Incorporando prevenção e promoção da saúde; Fortalecendo a relação médico-paciente; Ser realista.",
      "(B) Intensificando a relação entre a pessoa e médico; Entendendo a pessoa como um todo - o indivíduo, família e o contexto; Elaborando um plano conjunto de manejo dos problemas; Explorando a saúde, a doença e a experiência com a doença.",
      "(C) Ser gentil e acolhedor; Entendendo sentimentos, ideias, funções e expectativas; Elaborando um plano conjunto de manejo dos problemas; Ser realista.",
      "(D) Incorporar prevenção e promoção da saúde; Fortalecer a relação médico-pessoa; Ser realista; Ser gentil e acolhedor."
    ],
    "correctAnswer": 1,
    "explanation": "Na 3ª edição de \"Medicina Centrada na Pessoa\" (Stewart et al., 2014/2017), o MCCP foi reorganizado em quatro componentes interativos: (1) explorando a saúde, a doença e a experiência da doença; (2) entendendo a pessoa como um todo; (3) elaborando um plano conjunto de manejo dos problemas; (4) intensificando a relação entre a pessoa e o médico. \"Incorporar prevenção e promoção\" e \"ser realista\" foram integrados aos demais.",
    "commentary": "Seis componentes (A): é a versão anterior do método.\n\nSer gentil e acolhedor, entender SIFE, ser realista (C): mistura elementos que não formam os componentes do MCCP.\n\nPrevenção, relação, ser realista, ser gentil (D): também não corresponde aos quatro componentes.",
    "reference": "Stewart M et al. Medicina Centrada na Pessoa: transformando o método clínico, 3ª ed. / Gusso G. Tratado de MFC, 2ª ed. (2019)",
    "tags": [
      "método clínico centrado na pessoa",
      "medicina de família",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-86",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Considerando as recomendações atuais, conforme Nota Técnica conjunta de 2023 do Ministério da Saúde e Instituto Nacional do Câncer (INCA), bem como princípios da Prevenção Quaternária de sobrediagnóstico e sobretratamento, assinale a alternativa que contenha orientação CORRETA acerca do rastreamento populacional do Câncer de Próstata:",
    "options": [
      "(A) Realizar rastreio de Câncer de Próstata em todas as pessoas com próstata acima dos 45 anos utilizando o PSA e/ou toque retal como estratégias de triagem.",
      "(B) Realizar toque retal em todas as pessoas com próstata acima de 45 anos durante a campanha do Novembro Azul, para favorecer o acesso às políticas de saúde na Atenção Primária.",
      "(C) Utilizar o PSA como estratégia eficaz de rastreamento populacional.",
      "(D) Não realizar campanhas para convocar homens assintomáticos para a realização de rastreamento com PSA e/ou toque retal."
    ],
    "correctAnswer": 3,
    "explanation": "A Nota Técnica conjunta MS/INCA (2023) não recomenda o rastreamento populacional do câncer de próstata com PSA ou toque retal em homens assintomáticos, por falta de benefício claro em mortalidade e pelos danos do sobrediagnóstico e sobretratamento (incontinência, impotência). Por isso também não se recomendam campanhas para convocar homens assintomáticos; a decisão individual é compartilhada.",
    "commentary": "Rastrear todos acima de 45 anos (A): contraria a recomendação.\n\nToque retal no Novembro Azul (B): campanhas de rastreamento em assintomáticos não são recomendadas.\n\nPSA como estratégia eficaz de rastreamento populacional (C): o PSA não demonstrou benefício que supere os danos em nível populacional.",
    "reference": "Ministério da Saúde/INCA — Nota Técnica sobre o rastreamento do câncer de próstata (2023)",
    "tags": [
      "câncer de próstata",
      "rastreamento",
      "PSA",
      "prevenção quaternária"
    ]
  },
  {
    "id": "cerman2026-87",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A Atenção Primária à Saúde (APS) se desenvolve a partir de princípios nucleares e derivados que foram cunhados coletivamente e formalizados na Declaração de Alma-Ata de 1978. Assinale a alternativa que contenha os princípios DERIVADOS da APS:",
    "options": [
      "(A) Integralidade, longitudinalidade e competência cultural.",
      "(B) Acesso, orientação comunitária e competência cultural.",
      "(C) Foco na família, orientação comunitária e competência cultural.",
      "(D) Coordenação do cuidado, competência cultural e integralidade."
    ],
    "correctAnswer": 2,
    "explanation": "Starfield descreve quatro atributos essenciais (nucleares) da APS — primeiro contato (acesso), longitudinalidade, integralidade e coordenação do cuidado — e três derivados: orientação familiar (foco na família), orientação comunitária e competência cultural.",
    "commentary": "Integralidade e longitudinalidade (A): são atributos essenciais.\n\nAcesso (B): primeiro contato/acesso é atributo essencial.\n\nCoordenação e integralidade (D): são atributos essenciais.",
    "reference": "Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (2002)",
    "tags": [
      "atributos da APS",
      "atributos derivados",
      "competência cultural",
      "orientação comunitária"
    ]
  },
  {
    "id": "cerman2026-88",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "A respeito dos níveis de prevenção e sobre os critérios de Wilson e Jungner (1968) para a justificação ética e operacional de um programa de rastreamento populacional (screening), qual das seguintes afirmações é VERDADEIRA?",
    "options": [
      "(A) A história natural da condição, incluindo o conhecimento de uma fase latente (pré-sintomática) e a progressão para a doença manifesta, é um requisito fundamental para definir a janela de oportunidade do rastreamento.",
      "(B) O teste de rastreamento deve ter uma especificidade perfeita (100%), pois qualquer resultado falso-positivo inviabiliza economicamente o programa.",
      "(C) A doença deve obrigatoriamente ter um tratamento disponível, mas esse tratamento não precisa necessariamente ter sido demonstrado como mais eficaz quando aplicado na fase pré-sintomática.",
      "(D) A disponibilidade de recursos e a relação custo-eficácia não são critérios de Wilson e Jungner, sendo considerados apenas em uma etapa posterior de planejamento político administrativo."
    ],
    "correctAnswer": 0,
    "explanation": "Entre os critérios de Wilson e Jungner (OMS, 1968) está o conhecimento adequado da história natural da doença, com fase latente ou pré-sintomática detectável: é essa janela que permite detectar a doença antes dos sintomas e tratar com benefício.",
    "commentary": "Especificidade perfeita (B): nenhum teste é perfeito; exige-se teste aceitável e com desempenho adequado.\n\nTratamento sem precisar ser mais eficaz na fase precoce (C): o tratamento precoce deve trazer benefício maior que o tardio; caso contrário, o rastreamento não se justifica.\n\nCusto não faz parte dos critérios (D): os critérios incluem recursos para diagnóstico e tratamento e custo equilibrado com os gastos em saúde.",
    "reference": "Wilson JMG, Jungner G. Principles and practice of screening for disease (OMS, 1968)",
    "tags": [
      "rastreamento",
      "critérios de Wilson e Jungner",
      "história natural da doença"
    ]
  },
  {
    "id": "cerman2026-89",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em uma comunidade indígena atendida pela equipe de Saúde da Família, qual atuação da equipe promove a competência cultural e o cuidado efetivo?",
    "options": [
      "(A) Integrar saberes tradicionais e biomedicina, construindo planos terapêuticos respeitando práticas culturais locais.",
      "(B) Impor o modelo biomédico tradicional sem considerar as particularidades culturais.",
      "(C) Evitar contato com as lideranças comunitárias para não influenciar decisões clínicas.",
      "(D) Padronizar protocolos usando somente as diretrizes clínicas nacionais, sem adaptação cultural."
    ],
    "correctAnswer": 0,
    "explanation": "Competência cultural é reconhecer e respeitar as características culturais da população e incorporá-las ao cuidado. Em comunidades indígenas, isso significa dialogar com lideranças, integrar saberes tradicionais e biomedicina e construir planos terapêuticos que respeitem as práticas locais — princípio da Política Nacional de Atenção à Saúde dos Povos Indígenas.",
    "commentary": "Impor o modelo biomédico (B): contraria a competência cultural.\n\nEvitar lideranças (C): o diálogo com lideranças é essencial.\n\nProtocolos sem adaptação (D): ignora as especificidades culturais.",
    "reference": "Ministério da Saúde/FUNASA — Política Nacional de Atenção à Saúde dos Povos Indígenas (2002)",
    "tags": [
      "competência cultural",
      "saúde indígena",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-90",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Qual das seguintes vacinas é recomendada pela rotina do Calendário Nacional de Vacinação para crianças com 2 meses de idade?",
    "options": [
      "(A) Vacina contra HPV.",
      "(B) Vacina pentavalente (DTP + Hib + Hepatite B).",
      "(C) Vacina antirrábica.",
      "(D) Vacina contra febre amarela (dose única)."
    ],
    "correctAnswer": 1,
    "explanation": "Aos 2 meses, o calendário do PNI prevê: pentavalente (DTP + Hib + hepatite B), VIP (poliomielite inativada), pneumocócica 10-valente e rotavírus humano.",
    "commentary": "HPV (A): a partir dos 9 anos.\n\nAntirrábica (C): não é vacina de rotina; usada em pré ou pós-exposição.\n\nFebre amarela (D): aos 9 meses, com reforço aos 4 anos.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Criança (2024)",
    "tags": [
      "calendário vacinal",
      "vacina pentavalente",
      "imunização"
    ]
  },
  {
    "id": "cerman2026-91",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Na organização da Rede de Atenção Psicossocial (RAPS), qual serviço da Atenção Primária deve atuar como porta de entrada e coordenador do cuidado para pessoas com sofrimento mental?",
    "options": [
      "(A) Hospital Psiquiátrico.",
      "(B) Centros de Atenção Psicossocial (CAPS).",
      "(C) Serviços de Urgência Psiquiátrica.",
      "(D) Unidade Básica de Saúde (UBS)."
    ],
    "correctAnswer": 3,
    "explanation": "Na Rede de Atenção Psicossocial (Portaria nº 3.088/2011), a atenção básica — UBS e equipes de Saúde da Família — é porta de entrada e coordenadora do cuidado em saúde mental, acompanhando os casos leves e moderados e articulando com os CAPS os casos graves.",
    "commentary": "Hospital psiquiátrico (A): não é porta de entrada nem coordena o cuidado na RAPS.\n\nCAPS (B): é serviço especializado de atenção psicossocial, não da atenção primária.\n\nUrgência psiquiátrica (C): atende crises, não coordena o cuidado longitudinal.",
    "reference": "Ministério da Saúde — Portaria nº 3.088/2011 (Rede de Atenção Psicossocial)",
    "tags": [
      "RAPS",
      "saúde mental",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-92",
    "topography": "1.3",
    "topic": "Vertigem",
    "module": "Clínica Médica",
    "text": "Maria, 68 anos, procura a Unidade Básica de Saúde relatando episódios de tontura nos últimos dias. Ela descreve que “tudo gira ao seu redor” quando deita ou vira a cabeça para o lado direito. Os episódios duram menos de 1 minuto, são recorrentes e vêm acompanhados de náusea, mas sem perda auditiva ou zumbido. Diante desse quadro, qual é a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Doença de Ménière.",
      "(B) Tontura inespecífica.",
      "(C) Vertigem posicional paroxística benigna.",
      "(D) Neurite vestibular."
    ],
    "correctAnswer": 2,
    "explanation": "Vertigem rotatória desencadeada por mudança de posição da cabeça (deitar, virar para o lado), com crises de menos de 1 minuto, náusea e sem perda auditiva ou zumbido: vertigem posicional paroxística benigna. Confirma-se com a manobra de Dix-Hallpike e trata-se com manobra de reposicionamento (Epley).",
    "commentary": "Doença de Ménière (A): crises de 20 minutos a horas, com perda auditiva flutuante, zumbido e plenitude auricular.\n\nTontura inespecífica (B): o quadro é de vertigem rotatória típica.\n\nNeurite vestibular (D): vertigem contínua por dias, sem relação com a posição, após infecção viral.",
    "reference": "AAO-HNS Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (2017)",
    "tags": [
      "vertigem",
      "VPPB",
      "manobra de Dix-Hallpike"
    ]
  },
  {
    "id": "cerman2026-93",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Você estava lendo uma diretriz estrangeira de dislipidemias e chamou a sua atenção os resultados da redução de desfechos cardiovasculares entre pacientes que utilizaram a droga evolocumab... No grupo de pacientes que utilizaram o evolocumabe, o risco de um evento cardiovascular foi de 9,8%, enquanto no grupo placebo este risco foi de 11,3%... qual seria o valor do NNT do evolocumabe para este estudo? (Desconsidere casas decimais).",
    "options": [
      "(A) 13.",
      "(B) 66.",
      "(C) 87.",
      "(D) 98."
    ],
    "correctAnswer": 1,
    "explanation": "Redução absoluta do risco = 11,3% − 9,8% = 1,5% (0,015). NNT = 1 ÷ 0,015 ≈ 66,7 — desconsiderando as casas decimais, 66. É preciso tratar cerca de 67 pacientes para evitar um evento cardiovascular.",
    "commentary": "13 (A): corresponde aproximadamente à redução relativa do risco em % (1,5 ÷ 11,3 ≈ 13%), não ao NNT.\n\n87 (C): não corresponde ao cálculo correto.\n\n98 (D): não corresponde ao cálculo correto.",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. — Tratamento",
    "tags": [
      "número necessário para tratar",
      "redução absoluta do risco",
      "medicina baseada em evidências"
    ]
  },
  {
    "id": "cerman2026-94",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "T., mulher, 52 anos, auxiliar de serviços gerais, moradora de bairro da periferia de Manaus, procura o acolhimento da UBS queixando-se de lombalgia recorrente, que piorou há um dia e causando limitação importante. Durante o acolhimento, o ACS informa ao enfermeiro da UBS que o filho mais novo da paciente está preso há cerca de 4 meses. Durante a conversa inicial a paciente conta que a piora da dor coincide com o tempo no qual o filho está preso sentindo também vergonha e culpa. Ela relata tê-lo visitado recentemente e solicita à médica que providencie uma receita de antibiótico para o filho preso, que estaria com uma lesão de pele. Considerando o Código de Ética Médica, o que o profissional de saúde deveria responder à paciente em relação à demanda de emissão de receita de antibiótico?",
    "options": [
      "(A) Não liberaria a receita, explicando que não se pode emitir receita sem atendimento presencial do paciente e devendo ser explicada a necessidade de atendimento pela equipe de saúde do sistema prisional.",
      "(B) Liberaria a receita, considerando que a história trazida é compatível com piodermite.",
      "(C) Liberaria a receita, considerando a dificuldade de acesso aos serviços de saúde dentro do sistema prisional.",
      "(D) Não liberaria a receita solicitada, mas orientaria sobre como tratar a possível infecção com outros cuidados não medicamentosos."
    ],
    "correctAnswer": 0,
    "explanation": "O Código de Ética Médica (art. 37) proíbe prescrever tratamento sem exame direto do paciente, salvo em urgência e emergência com impossibilidade comprovada de realizá-lo (e telemedicina regulamentada). O médico não deve emitir receita para o filho preso; deve explicar a razão e orientar que ele seja atendido pela equipe de saúde do sistema prisional (PNAISP), além de acolher o sofrimento da mãe.",
    "commentary": "Liberar a receita por compatibilidade com piodermite (B): prescrever sem examinar é infração ética.\n\nLiberar pela dificuldade de acesso no presídio (C): a dificuldade não autoriza prescrever sem exame; o caminho é acionar a saúde prisional.\n\nOrientar tratamento não medicamentoso à distância (D): também é conduta sobre paciente não examinado.",
    "reference": "Código de Ética Médica (Resolução CFM nº 2.217/2018), art. 37 / Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade (PNAISP)",
    "tags": [
      "ética médica",
      "código de Ética Médica",
      "prescrição",
      "saúde prisional"
    ]
  },
  {
    "id": "cerman2026-95",
    "topography": "10",
    "topic": "HIV/AIDS",
    "module": "Saúde Coletiva",
    "text": "O., 32 anos, homem cisgênero, vive com HIV há 5 anos, com carga viral indetectável devido à terapia antiretroviral (TARV) a qual possui boa adesão. Seu monitoramento de carga viral e níveis de CD4 estão estáveis e dentro das faixas normais. Ele está atualmente em um relacionamento monogâmico com sua parceira T., mulher cis, 28 anos soronegativa para HIV, sem comorbidades. Ambos estão juntos há 1 ano e têm um relacionamento estável. O casal decidiu buscar aconselhamento médico sobre a possibilidade de iniciar a PrEP como uma medida adicional de proteção contra a transmissão do HIV. Embora ele tenha uma carga viral indetectável e seu tratamento seja correto, o casal deseja aumentar sua segurança. Qual é a alternativa CORRETA no que se refere à introdução de PrEP, para a paciente T.?",
    "options": [
      "(A) O uso de PrEP não é necessário pois o casal já possui relacionamento sexual ativo.",
      "(B) Ela deve realizar testagem para HIV e outras ISTs, recebendo aconselhamento sobre práticas sexuais seguras, estando indicada PrEP caso esteja soronegativa para HIV.",
      "(C) Ela não precisa ser submetida a testes de HIV para confirmar que está soronegativa, podendo ser iniciado PrEP imediatamente.",
      "(D) Caso elegível após a testagem, a paciente pode iniciar a PrEP, tomando o medicamento em dose única mensal conforme orientação médica."
    ],
    "correctAnswer": 1,
    "explanation": "Pessoa vivendo com HIV com carga viral indetectável há mais de 6 meses não transmite o vírus por via sexual (I = I). Ainda assim, a PrEP pode ser oferecida à parceria soronegativa que deseje proteção adicional. Antes de iniciar, é obrigatório testar HIV (para não usar PrEP em quem já tem infecção, o que gera resistência), além de outras ISTs, hepatites e função renal, com aconselhamento.",
    "commentary": "PrEP desnecessária por já terem relação ativa (A): a relação ativa não é motivo para recusar; a PrEP pode ser oferecida.\n\nIniciar sem testar HIV (C): a testagem é obrigatória antes da PrEP.\n\nDose única mensal (D): a PrEP oral é diária (ou sob demanda, 2-1-1, para homens cis e pessoas sem estrogênio exógeno); o cabotegravir injetável é a cada 2 meses.",
    "reference": "Ministério da Saúde — PCDT para Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV (2022)",
    "tags": [
      "PrEP",
      "HIV",
      "casal sorodiferente",
      "indetectável = intransmissível"
    ]
  },
  {
    "id": "cerman2026-96",
    "topography": "12",
    "topic": "Polifarmácia",
    "module": "Saúde Coletiva",
    "text": "Ana é médica de uma UBS na zona sul de Manaus e tem o hábito de revisar periodicamente a farmacoterapia de seus pacientes com doenças crônicas, especialmente idosos e pessoas com multimorbidades. Durante a consulta de acompanhamento de um paciente de 74 anos em uso de sete medicamentos contínuos, ela avalia a possibilidade de desprescrição. Considerando as melhores evidências e recomendações sobre o tema, qual é a conduta mais adequada?",
    "options": [
      "(A) Suspender prioritariamente o medicamento mais caro, pois o custo é o fator central na definição do que deve ser desprescrito.",
      "(B) Evitar desprescrever medicamentos iniciados por especialistas focais, pois isso não faz parte de suas atribuições como médica da Atenção Primária à Saúde.",
      "(C) Realizar a desprescrição apenas em situações de efeitos adversos graves já instalados, pois a suspensão preventiva oferece pouco benefício.",
      "(D) Revisar sistematicamente todas as prescrições em cada consulta de seguimento, identificando medicamentos sem indicação atual, com risco maior que benefício ou sem eficácia comprovada, envolvendo o paciente no processo de decisão compartilhada."
    ],
    "correctAnswer": 3,
    "explanation": "Desprescrição é o processo sistemático de identificar e retirar medicamentos cujo risco supera o benefício, sem indicação atual ou sem eficácia comprovada para aquele paciente, considerando objetivos de cuidado e expectativa de vida. Deve ser feita de forma contínua, com ferramentas como critérios de Beers e STOPP/START, e envolvendo o paciente em decisão compartilhada.",
    "commentary": "Retirar o mais caro (A): o critério é risco × benefício, não custo.\n\nNão mexer em prescrições de especialistas (B): o médico de família coordena o cuidado e pode — e deve — revisar toda a farmacoterapia, em diálogo com os especialistas.\n\nSó após efeito adverso grave (C): a desprescrição é preventiva e reduz quedas, internações e interações.",
    "reference": "Critérios de Beers (AGS, 2023) / STOPP/START v3 (2023) / Gusso G. Tratado de MFC, 2ª ed.",
    "tags": [
      "desprescrição",
      "polifarmácia",
      "idoso",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-97",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em uma revisão de registros clínicos, observa-se o seguinte SOAP feito durante atendimento em uma UBS a um paciente de 38 anos com dor abdominal:\n\nS: Dor abdominal difusa há 24h, piora após refeições, sem vômitos. O: Abdome flácido, dor à palpação em epigástrio “devido dispepsia funcional”, ruídos hidroaéreos presentes, sem sinais de abdome agudo. A: Dispepsia funcional. P: Orientada dieta leve, iniciado IBP por 4 semanas, retorno em 30 dias ou antes se piora.\n\nQual é a avaliação CORRETA sobre esse registro?",
    "options": [
      "(A) O erro central está no item S, que não deveria incluir sintomas gastrointestinais sem confirmação laboratorial.",
      "(B) A etapa A está inadequada porque deve conter apenas hipóteses diagnósticas.",
      "(C) O registro apresenta erro estrutural, pois o trecho “devido dispepsia funcional” constitui interpretação diagnóstica e não deveria constar na seção Objetivo (O).",
      "(D) O item P está incorreto porque condutas não devem ser registradas no SOAP."
    ],
    "correctAnswer": 2,
    "explanation": "No SOAP, o O (objetivo) registra dados observados e medidos (exame físico, sinais vitais, exames). Escrever \"dor em epigástrio devido dispepsia funcional\" dentro do O mistura interpretação diagnóstica com achado objetivo — a interpretação pertence à avaliação (A).",
    "commentary": "Erro no S (A): o subjetivo é justamente o relato dos sintomas pelo paciente, sem confirmação laboratorial.\n\nA deve conter só hipóteses (B): a avaliação pode registrar diagnósticos estabelecidos e problemas, não apenas hipóteses.\n\nCondutas fora do SOAP (D): o P (plano) é exatamente para as condutas.",
    "reference": "Gusso G. Tratado de Medicina de Família e Comunidade, 2ª ed. — Registro clínico orientado por problemas",
    "tags": [
      "SOAP",
      "registro clínico",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2026-98",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Saúde Coletiva",
    "text": "Durante uma visita domiciliar, a equipe avalia uma idosa de 84 anos, acamada, com limitação funcional grave, dependente para todas as atividades de vida diária, portadora de demência avançada e com necessidade de curativos semanais. A família não consegue levá-la à UBS. Segundo a Política Nacional de Atenção Domiciliar (PNAD), qual é o tipo de atenção mais adequado?",
    "options": [
      "(A) AD1.",
      "(B) AD2.",
      "(C) AD3.",
      "(D) Não se enquadra em Atenção Domiciliar."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Política Nacional de Atenção Domiciliar (Portaria nº 825/2016): AD1 — pacientes com necessidade de cuidados de menor complexidade e frequência, acompanhados pela atenção básica; AD2 — maior frequência de cuidado, com necessidade de visitas semanais ou mais da EMAD (equipe multiprofissional de atenção domiciliar); AD3 — AD2 com uso de equipamentos e procedimentos complexos.\n\nIdosa acamada, totalmente dependente, com demência avançada e curativos semanais: a banca considerou AD2.",
    "commentary": "AD1 (A): para pacientes com menor necessidade de cuidados; a banca entendeu que a dependência total e os curativos semanais exigem maior frequência de cuidado.\n\nAD3 (C): exige equipamentos ou procedimentos de maior complexidade (ventilação mecânica, nutrição parenteral, paracentese de repetição).\n\nFora da atenção domiciliar (D): a impossibilidade de ir à UBS é exatamente a indicação de atenção domiciliar.",
    "reference": "Ministério da Saúde — Portaria nº 825/2016 (Atenção Domiciliar no SUS)",
    "tags": [
      "atenção domiciliar",
      "melhor em Casa",
      "modalidades AD",
      "idoso dependente"
    ]
  },
  {
    "id": "cerman2026-99",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Durante auditoria em uma Secretaria Municipal de Saúde, identificou-se que determinada UBS passou a restringir o atendimento de pessoas sem comprovante de residência da área adscrita. Visitantes, trabalhadores da região e pessoas em trânsito eram orientados a procurar a UBS do bairro de origem. Essa prática contraria diretamente qual princípio doutrinário do SUS, conforme a Lei 8.080/90?",
    "options": [
      "(A) Universalidade.",
      "(B) Equidade.",
      "(C) Integralidade.",
      "(D) Regionalização."
    ],
    "correctAnswer": 0,
    "explanation": "A universalidade garante o acesso aos serviços de saúde em todos os níveis de assistência a todas as pessoas, sem restrição. Negar atendimento por falta de comprovante de residência contraria esse princípio; a adscrição de território organiza o cuidado, mas não autoriza recusar atendimento.",
    "commentary": "Equidade (B): tratar desigualmente os desiguais segundo suas necessidades.\n\nIntegralidade (C): conjunto articulado de ações preventivas e curativas em todos os níveis.\n\nRegionalização (D): é princípio organizativo, não doutrinário.",
    "reference": "Lei nº 8.080/1990, art. 7º / PNAB (Portaria nº 2.436/2017)",
    "tags": [
      "princípios do SUS",
      "universalidade",
      "acesso à saúde"
    ]
  },
  {
    "id": "cerman2026-100",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Durante o acolhimento à demanda espontânea na UBS, chegam simultaneamente quatro situações. A equipe precisa identificar quais delas exigem notificação compulsória imediata.\n\nI. Mulher de 26 anos relata que foi forçada a ter relação sexual pelo parceiro na noite anterior e apresenta lesões compatíveis com violência sexual. II. Homem de 18 anos chega acompanhado da mãe após ingerir grande quantidade de comprimidos em uma tentativa de suicídio. Está clinicamente estável. III. Criança de 7 anos apresenta febre e tosse há 48h, sem sinais de gravidade. IV. Idoso de 72 anos procura a UBS para ajuste de medicação da hipertensão.\n\nConsiderando a legislação vigente, qual situação exige notificação compulsória IMEDIATA pela equipe da APS?",
    "options": [
      "(A) A criança febril e o idoso hipertenso.",
      "(B) Apenas o paciente em tentativa de suicídio.",
      "(C) Apenas a mulher com suspeita de violência sexual.",
      "(D) A mulher vítima de violência sexual e o paciente em tentativa de suicídio."
    ],
    "correctAnswer": 3,
    "explanation": "Pela lista nacional de notificação compulsória, a violência sexual e a tentativa de suicídio são de notificação imediata (em até 24 horas) para a vigilância municipal, além da notificação no Sinan. A criança com quadro respiratório leve e o hipertenso não geram notificação.",
    "commentary": "Criança febril e idoso hipertenso (A): não há agravo de notificação.\n\nApenas tentativa de suicídio (B): a violência sexual também é de notificação imediata.\n\nApenas violência sexual (C): a tentativa de suicídio também é de notificação imediata.",
    "reference": "Ministério da Saúde — Portaria de Consolidação nº 4/2017 (Lista Nacional de Notificação Compulsória, atualizada)",
    "tags": [
      "notificação compulsória",
      "violência sexual",
      "tentativa de suicídio",
      "vigilância epidemiológica"
    ]
  }
];
