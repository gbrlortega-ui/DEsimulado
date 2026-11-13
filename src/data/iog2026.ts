import { Question } from '../types';

// Instituto de Olhos de Goiânia (IOG) 2026 — residência médica. 50 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const IOG_2026_QUESTIONS: Question[] = [
  {
    "id": "iog2026-1",
    "topography": "1.1",
    "module": "Clínica Médica",
    "text": "Homem, 28 anos de idade, recebeu 20 mL de glicose 50% endovenosa em atendimento por intoxicação alcoólica aguda. Após 20 minutos, o paciente evoluiu com confusão mental. Nesse momento, o paciente encontrava-se com glicemia capilar de 100 mg/dL, afebril, descorado, desnutrido, sem sinais de comprometimento respiratório ou cardíaco. Ao exame neurológico observa-se marcha com base alargada, dismetria à manobra index-nariz bilateralmente, nistagmo horizontal que bate para a esquerda ao olhar para a esquerda e bate para a direita ao olhar para a direita; paresia do músculo ocular reto lateral bilateralmente.\n\nQual é a principal hipótese diagnóstica para o quadro neurológico?",
    "options": [
      "Acidente vascular cerebral isquêmico.",
      "Mielinólise pontina central.",
      "Polirradiculoneurite tóxico-metabólica.",
      "Encefalopatia de Wernicke."
    ],
    "correctAnswer": 3,
    "explanation": "Etilista desnutrido que recebeu glicose sem tiamina e, minutos depois, ficou confuso, com ataxia de marcha, dismetria, nistagmo e paresia bilateral do reto lateral (VI nervo): é a tríade da encefalopatia de Wernicke — confusão, ataxia e oftalmoparesia.\n\nA glicose consome a pouca tiamina que resta e precipita o quadro. O tratamento é tiamina parenteral em dose alta (por exemplo, 500 mg EV três vezes ao dia), idealmente antes ou junto com a glicose em todo etilista.",
    "commentary": "AVC isquêmico (A): seria de início súbito e com déficits focais compatíveis com um território vascular; a oftalmoparesia bilateral com ataxia e confusão logo após glicose sugere carência de tiamina.\n\nMielinólise pontina central (B): ocorre após correção rápida de hiponatremia, com tetraparesia e disartria/disfagia, dias depois da correção.\n\nPolirradiculoneurite (C): causaria fraqueza ascendente e arreflexia, sem confusão nem oftalmoparesia.",
    "reference": "EFNS — Guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy / Harrison — Medicina Interna",
    "tags": [
      "neurologia",
      "encefalopatia de Wernicke",
      "tiamina",
      "alcoolismo"
    ],
    "tip": "Etilista + glicose sem tiamina + confusão, ataxia e oftalmoparesia = Wernicke."
  },
  {
    "id": "iog2026-2",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Médico de 57 anos de idade veio trazido pela esposa à Unidade Básica de Saúde em virtude de alteração do comportamento há 2 anos. Antes disso, era uma pessoa funcional e não tinha doenças prévias diagnosticadas. O quadro se iniciou com irritabilidade e impulsividade, às vezes parecendo que havia \"perdido o freio mental\", falando o que \"vinha na cabeça\". Também passou a comer muito doce, algo que não era comum. Durante toda a consulta, o paciente demonstrava-se inquieto e, às vezes, fazia comentários jocosos. Na avaliação cognitiva, apresentava respostas impulsivas e estava um pouco desatento. Ao miniexame do estado mental, ele fez 26 pontos (perdeu 3 pontos nas subtrações seriadas e 1 no comando verbal). O exame clínico não tem outras alterações.\n\nQual é a hipótese diagnóstica mais provável?",
    "options": [
      "Demência da doença de Alzheimer.",
      "Transtorno afetivo bipolar.",
      "Transtorno de personalidade.",
      "Demência frontotemporal."
    ],
    "correctAnswer": 3,
    "explanation": "Homem de 57 anos com 2 anos de mudança de comportamento: desinibição (\"perdeu o freio\"), impulsividade, comentários jocosos e mudança alimentar (compulsão por doces), com memória relativamente preservada (MEEM 26). Esse quadro de alteração precoce de personalidade e comportamento, com início antes dos 65 anos, é típico da variante comportamental da demência frontotemporal.",
    "commentary": "Alzheimer (A): começa com perda de memória episódica recente; alterações de comportamento costumam ser tardias.\n\nTranstorno bipolar (B): surgiria em episódios, com humor alterado, e raramente começa aos 55 anos sem história prévia.\n\nTranstorno de personalidade (C): é padrão duradouro desde o início da vida adulta, não mudança nova aos 55 anos.",
    "reference": "Rascovsky et al. — Critérios para a variante comportamental da DFT (Brain, 2011) / Academia Brasileira de Neurologia — Diagnóstico de demências",
    "tags": [
      "neurologia",
      "demência frontotemporal",
      "demências",
      "desinibição"
    ],
    "tip": "Demência pré-senil com desinibição, apatia e hiperoralidade, memória preservada: frontotemporal."
  },
  {
    "id": "iog2026-3",
    "topography": "9",
    "module": "Clínica Médica",
    "text": "Mulher, 25 anos de idade, comparece ao ambulatório de clínica médica geral encaminhada da unidade básica de saúde, pois desde os 15 anos de idade tem sinusites de repetição (aproximadamente 4 no último ano) e uma internação por pneumonia. Apresentou também diversos episódios de diarreia, sempre com exames coproparasitológicos positivos para Giárdia. Traz consigo tomografia computadorizada de tórax que demonstra bronquiectasias.\n\nQual alternativa traz o principal grupo de doenças a ser investigado e os exames que devem ser solicitados?",
    "options": [
      "Imunodeficiência de CD4 e dosagem de imunoglobulinas.",
      "Imunodeficiência celular e imunofenotipagem de linfócitos T, B e NK.",
      "Deficiência de fagócitos e imunofenotipagem de linfócitos NK.",
      "Imunodeficiência humoral e dosagem de imunoglobulinas."
    ],
    "correctAnswer": 3,
    "explanation": "Adulta jovem com infecções sinopulmonares bacterianas de repetição desde a adolescência, bronquiectasias e giardíase recorrente: é o padrão das imunodeficiências humorais (de anticorpos), em especial a imunodeficiência comum variável, que costuma se manifestar na 2ª ou 3ª década. A Giardia é o parasita típico de quem não produz IgA secretora.\n\nA investigação começa pela dosagem de imunoglobulinas séricas (IgG, IgA, IgM) e pela resposta vacinal.",
    "commentary": "Deficiência de CD4 (A): quadros com CD4 baixo (como HIV) dão infecções oportunistas (fungos, vírus, micobactérias), e a dosagem de imunoglobulinas não avalia CD4.\n\nImunodeficiência celular (B): cursa com infecções virais, fúngicas e oportunistas graves, geralmente desde a infância.\n\nDeficiência de fagócitos (C): dá abscessos cutâneos e profundos, infecções por S. aureus e fungos; e linfócitos NK não avaliam fagócitos.",
    "reference": "ASBAI — Imunodeficiências primárias: sinais de alerta e investigação / ESID — Critérios diagnósticos de imunodeficiência comum variável",
    "tags": [
      "imunologia",
      "imunodeficiência comum variável",
      "bronquiectasias",
      "giardíase"
    ],
    "tip": "Sinusite e pneumonia de repetição + Giardia = falta de anticorpo. Peça imunoglobulinas."
  },
  {
    "id": "iog2026-4",
    "topography": "7.2",
    "topic": "Psoríase",
    "module": "Clínica Médica",
    "text": "Mulher, 45 anos de idade, apresenta há 8 anos lesões eritematosas e descamativas, bem delimitadas, com eritema vermelho vivo e escamas branco-prateadas aderentes e esparsas no couro cabeludo, região sacral, cotovelos e joelhos. Sinal da vela e do orvalho sangrento estão presentes. Apresenta história de monoartrite de articulação interfalangeana proximal no 3° quirodáctilo direito.\n\nQual é o diagnóstico?",
    "options": [
      "Lúpus eritematoso cutâneo crônico.",
      "Psoríase.",
      "Artrite reumatoide.",
      "Dermatite seborreica."
    ],
    "correctAnswer": 1,
    "explanation": "Placas eritematosas bem delimitadas com escamas branco-prateadas em couro cabeludo, região sacral, cotovelos e joelhos (superfícies extensoras), com sinal da vela (escamas que se destacam como raspas de vela) e do orvalho sangrento (sinal de Auspitz): psoríase vulgar. A monoartrite de interfalangeana sugere artrite psoriásica associada.",
    "commentary": "Lúpus cutâneo crônico (A): lesões discoides com atrofia, cicatriz e alteração de pigmento, em áreas fotoexpostas; não tem sinal da vela nem de Auspitz.\n\nArtrite reumatoide (C): artrite simétrica de pequenas articulações, sem as lesões cutâneas descritas.\n\nDermatite seborreica (D): escamas amareladas e oleosas em face, couro cabeludo e dobras, sem placas extensoras nem Auspitz.",
    "reference": "Consenso Brasileiro de Psoríase (SBD, 2020)",
    "tags": [
      "dermatologia",
      "psoríase",
      "sinal de Auspitz",
      "artrite psoriásica"
    ],
    "tip": "Escama prateada + sinal da vela + orvalho sangrento = psoríase."
  },
  {
    "id": "iog2026-5",
    "topography": "6.1",
    "topic": "Espondilite anquilosante",
    "module": "Clínica Médica",
    "text": "Homem, 29 anos de idade, motorista, com história de lombalgia há 5 anos, refere dificuldade para a realização de suas atividades no período da manhã, mas com melhora após o almoço. Nota melhora da lombalgia com o uso de naproxeno. Há 2 semanas vem observando olho vermelho, com dor e embaçamento visual à direita. Exame clínico apresenta hiperemia difusa de olho direito, ausência de dor ou edema em articulações periféricas. Discreta limitação para flexão de coluna lombar (teste de Schober = 3,5 cm). O restante do exame clínico está normal.\n\nConsiderando que o diagnóstico mais provável foi confirmado, qual alternativa a seguir traz as características clássicas da uveíte aguda associada a essa condição?",
    "options": [
      "Anterior e episódio isolado.",
      "Posterior e recorrente.",
      "Posterior e episódio isolado.",
      "Anterior e recorrente."
    ],
    "correctAnswer": 3,
    "explanation": "Homem jovem com lombalgia inflamatória há anos (rigidez matinal que melhora com o movimento e resposta a AINE) e Schober reduzido: espondilite anquilosante. Agora tem olho vermelho, doloroso e com borramento visual: uveíte.\n\nA uveíte da espondiloartrite associada ao HLA-B27 é tipicamente anterior aguda, unilateral, recorrente e alternando os olhos.",
    "commentary": "Anterior e isolada (A): a localização está certa, mas ela costuma recorrer.\n\nPosterior e recorrente (B) / Posterior e isolada (C): uveíte posterior é típica de outras doenças (toxoplasmose, Behçet, sarcoidose), não da espondilite.",
    "reference": "SBR — Recomendações para o tratamento da espondiloartrite axial / ASAS — Critérios de classificação",
    "tags": [
      "reumatologia",
      "espondilite anquilosante",
      "uveíte anterior",
      "HLA-B27"
    ],
    "tip": "Espondilite: uveíte anterior aguda, unilateral, recorrente."
  },
  {
    "id": "iog2026-6",
    "topography": "1.2",
    "topic": "Retinopatia diabética",
    "module": "Clínica Médica",
    "text": "Dentre as alternativas a seguir, quais são as alterações mais precoces encontradas na retinopatia diabética?",
    "options": [
      "Ingurgitamento venoso.",
      "Exsudatos duros.",
      "Micro-hemorragias.",
      "Microaneurismas."
    ],
    "correctAnswer": 3,
    "explanation": "A primeira alteração visível da retinopatia diabética não proliferativa são os microaneurismas: pequenas dilatações saculares dos capilares, causadas pela perda de pericitos e enfraquecimento da parede. Depois surgem micro-hemorragias, exsudatos duros, manchas algodonosas, alterações venosas e, por fim, neovasos.",
    "commentary": "Ingurgitamento venoso (A): alterações venosas (dilatação, \"em rosário\") marcam doença mais avançada, já pré-proliferativa.\n\nExsudatos duros (B): são depósitos lipídicos por extravasamento, posteriores aos microaneurismas.\n\nMicro-hemorragias (C): aparecem junto ou logo depois, mas os microaneurismas são o sinal mais precoce.",
    "reference": "SBD/CBO — Diretriz de retinopatia diabética / ETDRS",
    "tags": [
      "oftalmologia",
      "retinopatia diabética",
      "microaneurismas",
      "diabetes"
    ],
    "tip": "Primeiro sinal da retinopatia diabética: microaneurisma."
  },
  {
    "id": "iog2026-7",
    "topography": "8",
    "topic": "Hipoglicemia",
    "module": "Clínica Médica",
    "text": "Homem, 57 anos de idade, hipertenso e diabético há 12 anos em acompanhamento clínico regular, faz uso de captopril, metformina e glibenclamida, todos em dose máxima. Não tem outros antecedentes mórbidos relevantes. Há três dias apresenta náuseas, diarreia e inapetência, com vômitos. Refere febre de até 38,3 °C no período. Há 30 minutos queixou-se de mal-estar inespecífico e há 15 minutos apresentou convulsão tônico-clônica generalizada, quando foi trazido ao pronto-socorro.\n\nQual é a principal hipótese etiológica para o quadro convulsivo?",
    "options": [
      "Acidose metabólica.",
      "Acidente vascular encefálico.",
      "Hipopotassemia.",
      "Hipoglicemia."
    ],
    "correctAnswer": 3,
    "explanation": "Diabético em uso de glibenclamida (sulfonilureia) em dose máxima, que há 3 dias come pouco, tem vômitos e diarreia: a ingestão caiu, mas a sulfonilureia continua estimulando a insulina. A desidratação pode piorar a função renal e prolongar a ação do fármaco. A causa mais provável de convulsão é a hipoglicemia, que deve ser confirmada com glicemia capilar e tratada com glicose EV.",
    "commentary": "Acidose metabólica (A): a acidose lática pela metformina na desidratação é possível, mas raramente causa convulsão como primeira manifestação.\n\nAVE (B): convulsão como manifestação inicial de AVE é rara, e o contexto aponta para causa metabólica.\n\nHipopotassemia (C): causa fraqueza, íleo e arritmias, não convulsões.",
    "reference": "Diretriz SBD 2024 — Hipoglicemia / ADA Standards of Care 2025",
    "tags": [
      "endocrinologia",
      "hipoglicemia",
      "sulfonilureia",
      "convulsão"
    ],
    "tip": "Diabético com sulfonilureia que não está comendo e convulsiona: hipoglicemia até prova em contrário."
  },
  {
    "id": "iog2026-8",
    "topography": "2.2",
    "topic": "Valvopatias",
    "module": "Clínica Médica",
    "text": "Mulher, 81 anos, apresentou nas últimas semanas três episódios de perda súbita da consciência após levantar-se. Nega tontura, escurecimento da visão ou dor precordial. Antecedentes pessoais: hipertensão arterial em uso de hidroclorotiazida e losartana, osteoporose em uso de composto de cálcio e vitamina D. Exame físico: PA 168x70 mmHg; FC 72 bpm. Ausculta cardíaca: sopro sistólico em diamante em focos da base. Ausculta pulmonar limpa. Solicitado ecocardiograma.\n\nO achado esperado é:",
    "options": [
      "Estenose aórtica.",
      "Insuficiência aórtica.",
      "Insuficiência mitral.",
      "Dilatação da raiz da aorta."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com síncopes de esforço/postura, sopro sistólico em diamante (ejetivo, crescendo-decrescendo) nos focos da base: estenose aórtica degenerativa (calcificada). A tríade de sintomas da estenose aórtica grave é angina, síncope e dispneia, e a síncope indica pior prognóstico e indicação de troca valvar.",
    "commentary": "Insuficiência aórtica (B): sopro diastólico aspirativo, com pressão diferencial larga e pulsos amplos.\n\nInsuficiência mitral (C): sopro sistólico em regurgitação (holossistólico) no foco mitral, irradiando para a axila.\n\nDilatação da raiz da aorta (D): costuma ser silenciosa ou causar insuficiência aórtica, não sopro sistólico em diamante.",
    "reference": "SBC — Atualização das Diretrizes Brasileiras de Valvopatias (2020)",
    "tags": [
      "cardiologia",
      "estenose aórtica",
      "valvopatias",
      "síncope"
    ],
    "tip": "Sopro sistólico em diamante no foco aórtico + síncope no idoso: estenose aórtica."
  },
  {
    "id": "iog2026-9",
    "topography": "2.1",
    "topic": "Pneumotórax",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos, previamente hígido, procura o Pronto Socorro com queixa de dor torácica súbita há uma hora, em pontada, que piora com a respiração e acompanhada de leve dispneia. Exame físico: afebril, normotenso e com perfusão periférica normal. Tórax: inspeção estática: sem alterações, inspeção dinâmica: diminuição da expansibilidade à direita; percussão: som timpânico e murmúrio vesicular diminuído à direita.\n\nO diagnóstico é:",
    "options": [
      "Pneumonia.",
      "Derrame pleural.",
      "Embolia de pulmão.",
      "Pneumotórax."
    ],
    "correctAnswer": 3,
    "explanation": "Homem jovem e magro, sem doença prévia, com dor pleurítica súbita e dispneia leve; ao exame, expansibilidade reduzida, hipertimpanismo e murmúrio vesicular diminuído do mesmo lado: pneumotórax espontâneo primário. O timpanismo é o achado que separa o ar (pneumotórax) do líquido (derrame, com macicez).",
    "commentary": "Pneumonia (A): teria febre, macicez e estertores, não timpanismo.\n\nDerrame pleural (B): dá macicez à percussão.\n\nEmbolia pulmonar (C): costuma ter exame do tórax normal, sem timpanismo localizado.",
    "reference": "BTS 2023 — Guideline for pleural disease (pneumothorax) / SBPT",
    "tags": [
      "pneumologia",
      "pneumotórax",
      "exame físico do tórax",
      "dor pleurítica"
    ],
    "tip": "Timpanismo + MV abolido = ar (pneumotórax). Macicez + MV abolido = líquido."
  },
  {
    "id": "iog2026-10",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Clínica Médica",
    "text": "Mulher, 64 anos, procura atendimento médico queixando-se de edema, urina espumosa e inchaço nos olhos há uma semana. Antecedentes pessoais: neoplasia de tireoide, curada há quatro anos. Exames laboratoriais: ureia 30 mg/dL; creatinina 0,8 mg/dL; exame de urina: hemácias 2/campo; leucócitos 5/campo; proteína 3+/4; relação proteína/creatinina urinária 5,8mg/g; albumina sérica 2g/dL; complemento C3 e C4 normais. Indicada biópsia renal.\n\nO diagnóstico mais provável é:",
    "options": [
      "Glomerulonefrite proliferativa com crescentes.",
      "Glomerulopatia membranosa.",
      "Nefropatia por deposição de cristais.",
      "Glomerulopatia membrano-proliferativa."
    ],
    "correctAnswer": 1,
    "explanation": "Síndrome nefrótica pura (proteinúria maciça, hipoalbuminemia, edema, sem hematúria importante, função renal e complemento normais) em mulher de 64 anos com antecedente de câncer. Nos adultos, especialmente acima de 60 anos e com neoplasia, a causa mais provável é a glomerulopatia membranosa, que pode ser secundária a tumores sólidos.",
    "commentary": "Glomerulonefrite crescêntica (A): apresenta-se como GN rapidamente progressiva, com hematúria e piora rápida da função renal.\n\nNefropatia por cristais (C): causa lesão renal aguda ou crônica tubulointersticial, não síndrome nefrótica.\n\nMembranoproliferativa (D): costuma ter hematúria e complemento baixo.",
    "reference": "KDIGO 2021 — Glomerular Diseases (nefropatia membranosa)",
    "tags": [
      "nefrologia",
      "síndrome nefrótica",
      "glomerulopatia membranosa",
      "neoplasia"
    ],
    "tip": "Nefrótica pura no adulto mais velho, ainda mais com câncer: membranosa."
  },
  {
    "id": "iog2026-11",
    "topography": "1.5",
    "topic": "Câncer de tireoide",
    "module": "Cirurgia",
    "text": "Paciente submetido a cirurgia de tireoidectomia total com esvaziamento nível VI por carcinoma papilífero de tireoide, sem intercorrências intraoperatórias. Alguns minutos após a extubação, o paciente cursou com estridor e necessidade de uso de musculatura acessória para respirar.\n\nQual estrutura deve ter sido comprometida durante a cirurgia?",
    "options": [
      "Nervos laríngeos inferiores.",
      "Pleura visceral.",
      "Parede posterior traqueia.",
      "Paratireoides."
    ],
    "correctAnswer": 0,
    "explanation": "Estridor com uso de musculatura acessória logo após a extubação de uma tireoidectomia total com esvaziamento central: lesão bilateral dos nervos laríngeos recorrentes (inferiores). As duas pregas vocais ficam paralisadas em posição paramediana, fechando a glote. É emergência: reintubação e, muitas vezes, traqueostomia.",
    "commentary": "Pleura visceral (B): uma lesão pleural causaria pneumotórax, não estridor.\n\nParede posterior da traqueia (C): lesão traqueal causaria enfisema e vazamento de ar, rara e geralmente percebida no intraoperatório.\n\nParatireoides (D): a hipocalcemia surge em 24–72 horas, com parestesias e tetania, não estridor imediato após a extubação.",
    "reference": "ATA 2015 — Guidelines for thyroid nodules and differentiated thyroid cancer / Sabiston — Tratado de Cirurgia",
    "tags": [
      "cirurgia de cabeça e pescoço",
      "tireoidectomia",
      "nervo laríngeo recorrente",
      "complicações pós-operatórias"
    ],
    "tip": "Estridor logo após extubar uma tireoidectomia: lesão bilateral do laríngeo recorrente."
  },
  {
    "id": "iog2026-12",
    "topography": "3.2",
    "topic": "Hipertensão portal",
    "module": "Cirurgia",
    "text": "Homem de 50 anos de idade procura atendimento médico com queixa de melena há 3 horas. Refere que teve episódio semelhante há 1 ano, quando foi diagnosticado sangramento de varizes de esôfago e cirrose hepática por vírus B. Desde então usa propranolol e faz sessões de escleroterapia. Recentemente utilizou anti-inflamatórios devido a lombalgia. Na sala de emergência apresenta-se orientado, frequência cardíaca de 90 batimentos por minuto, pressão arterial de 80 x 50 mmHg e tempo de enchimento capilar maior que 3 segundos. Submetido a endoscopia com achado de varizes de fundo gástrico com sangramento ativo.\n\nQual a melhor conduta indicada neste caso?",
    "options": [
      "Obliteração com cianoacrilato.",
      "Passagem de balão de Sengstaken-Blakemore.",
      "Ligadura elástica das varizes e octreotide.",
      "Cirurgia de emergência (desconexão ázigos-portal)."
    ],
    "correctAnswer": 0,
    "explanation": "Cirrótico com hemorragia por varizes de fundo gástrico com sangramento ativo e instabilidade. Para varizes gástricas isoladas de fundo (IGV1) ou gastroesofágicas que se estendem para o fundo (GOV2), o tratamento endoscópico de escolha é a obliteração com cianoacrilato, que tem maior hemostasia e menos ressangramento do que a ligadura.\n\nIsso acompanha medidas gerais: reposição volêmica restritiva, vasoconstritor (terlipressina ou octreotide), antibioticoprofilaxia (ceftriaxona) e, em falha, TIPS.",
    "commentary": "Balão de Sengstaken-Blakemore (B): é ponte temporária quando a endoscopia falha; não é a primeira escolha.\n\nLigadura e octreotide (C): a ligadura é a escolha para varizes esofágicas; nas de fundo gástrico tem pior resultado.\n\nCirurgia de emergência (D): tem alta mortalidade e foi substituída pelo tratamento endoscópico e pelo TIPS.",
    "reference": "Baveno VII (2022) / AASLD 2024 — Varices and variceal hemorrhage",
    "tags": [
      "hepatologia",
      "hemorragia digestiva alta",
      "varizes gástricas",
      "cianoacrilato"
    ],
    "tip": "Variz esofágica: ligadura. Variz de fundo gástrico: cianoacrilato."
  },
  {
    "id": "iog2026-13",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Mulher de 65 anos de idade, com queixa de epigastralgia há 3 meses, realizou endoscopia digestiva alta com achado de lesão ulcerada de 2,2 cm em fundo gástrico. Relatório anatomopatológico confirmou Adenocarcinoma gástrico indiferenciado com células em anel de sinete. Tomografia computadorizada mostrou somente lesão gástrica, sem metástases.\n\nA paciente deverá ser submetida a:",
    "options": [
      "Quimioterapia e radioterapia neoadjuvantes.",
      "Mucosectomia endoscópica.",
      "Gastrectomia subtotal com linfadenectomia D2.",
      "Gastrectomia total com linfadenectomia D2."
    ],
    "correctAnswer": 3,
    "explanation": "Adenocarcinoma gástrico de fundo (terço proximal), ulcerado, de 2,2 cm e com células em anel de sinete, sem metástases. Não preenche critérios de ressecção endoscópica e, pela localização proximal, a cirurgia com margem adequada é a gastrectomia total com linfadenectomia D2.\n\nPela banca, a resposta é a cirurgia. Na prática, para tumores a partir de T2 ou com linfonodo positivo, as diretrizes atuais indicam quimioterapia perioperatória (FLOT) antes e depois da gastrectomia; o enunciado não traz o estadiamento T/N para essa decisão.",
    "commentary": "Quimioterapia e radioterapia neoadjuvantes (A): a radioterapia não faz parte do tratamento padrão do câncer de corpo e fundo gástrico; a quimioterapia perioperatória, quando indicada, acompanha a cirurgia, que continua sendo a resposta.\n\nMucosectomia (B): só para câncer precoce bem selecionado; lesão ulcerada, maior que 2 cm e indiferenciada tem alto risco de metástase linfonodal.\n\nGastrectomia subtotal (C): é para tumores distais (antro); no fundo gástrico não dá margem.",
    "reference": "Japanese Gastric Cancer Treatment Guidelines 2021 / NCCN — Gastric Cancer / Consenso Brasileiro de Câncer Gástrico",
    "tags": [
      "cirurgia oncológica",
      "câncer gástrico",
      "gastrectomia total",
      "linfadenectomia D2"
    ],
    "tip": "Câncer gástrico proximal: gastrectomia total + D2. Distal: subtotal + D2."
  },
  {
    "id": "iog2026-14",
    "topography": "16",
    "module": "Cirurgia",
    "text": "Homem, 19 anos de idade, com antecedente de queda da motocicleta há 70 dias, com múltiplas fraturas de costelas à direita, contusão pulmonar, hemopneumotórax e trauma craniano grave. Tratado, na ocasião, com drenagem torácica à direita e ventilação mecânica por 17 dias. Recebeu alta hospitalar após 28 dias de internação, em bom estado geral. Retorna ao serviço de emergência com queixa de dispneia de instalação progressiva associada a cornagem. Ao exame clínico, saturação de 94%, frequência respiratória de 24 ipm, tiragem de fúrcula.\n\nQual é a hipótese diagnóstica mais provável e o tratamento imediato?",
    "options": [
      "Estenose de traqueia; intubação orotraqueal e ventilação invasiva.",
      "Estenose de traqueia; corticoesteroide endovenoso, inalação com adrenalina e ventilação não invasiva.",
      "Estenose de laringe; cricotireoidostomia e ventilação invasiva.",
      "Estenose de laringe; corticoesteroide e broncodilatadores inalatórios e ventilação não invasiva."
    ],
    "correctAnswer": 0,
    "explanation": "Jovem que ficou 17 dias em ventilação mecânica e, cerca de 6 semanas depois da alta, tem dispneia progressiva com estridor (cornagem), taquipneia e tiragem: estenose traqueal pós-intubação, por isquemia da mucosa causada pelo balonete.\n\nPela banca, diante de insuficiência respiratória obstrutiva a conduta imediata é garantir a via aérea com intubação orotraqueal (tubo de menor calibre). Na prática, em paciente ainda com SatO₂ 94%, a abordagem preferida costuma ser a broncoscopia rígida com dilatação em centro preparado; a intubação de uma traqueia estenosada é tecnicamente difícil.",
    "commentary": "Corticoide, adrenalina e VNI (B): podem aliviar edema, mas não tratam uma estenose cicatricial fixa e atrasam a definição da via aérea.\n\nEstenose de laringe com cricotireoidostomia (C): a lesão do balonete costuma ser traqueal, abaixo da cricoide; a cricotireoidostomia não ultrapassaria a estenose.\n\nEstenose de laringe com medidas clínicas (D): diagnóstico topográfico errado e tratamento insuficiente.",
    "reference": "Grillo — Surgery of the trachea and bronchi / SBCT — Estenose traqueal pós-intubação",
    "tags": [
      "cirurgia torácica",
      "estenose traqueal",
      "intubação prolongada",
      "via aérea"
    ],
    "tip": "Estridor semanas após intubação prolongada: estenose traqueal."
  },
  {
    "id": "iog2026-15",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Paciente de 55 anos com antecedente de adenocarcinoma de cólon sigmoide tratado há 4 anos com retossigmoidectomia, sem intercorrências, vem ao ambulatório com exame de seguimento que mostra apenas 2 lesões metastáticas, restritas ao segmento II e III do fígado, sem acometimento vascular.\n\nQual é a melhor alternativa cirúrgica após tratamento quimioterápico sistêmico?",
    "options": [
      "Quimioembolização portal seguida de hepatectomia esquerda ampliada.",
      "Hepatectomia lateral esquerda com controle intraoperatório por ultrassom.",
      "Quimioembolização portal seguida de hepatectomia direita ampliada.",
      "Hepatectomia lateral direita com controle intraoperatório por ultrassom."
    ],
    "correctAnswer": 1,
    "explanation": "Duas metástases hepáticas de câncer de cólon, restritas aos segmentos II e III, sem invasão vascular. Os segmentos II e III formam o lobo lateral esquerdo; a ressecção anatômica correspondente é a hepatectomia (segmentectomia) lateral esquerda, com ultrassom intraoperatório para confirmar as lesões e buscar outras não vistas nos exames.\n\nComo o volume de fígado remanescente é amplo, não há necessidade de embolização portal.",
    "commentary": "Embolização portal com hepatectomia esquerda ampliada (A): ressecção maior que o necessário; embolização portal serve para aumentar o fígado remanescente em grandes ressecções.\n\nEmbolização portal com hepatectomia direita ampliada (C): retiraria o lado errado do fígado.\n\nHepatectomia lateral direita (D): não corresponde aos segmentos II e III.",
    "reference": "Couinaud — Anatomia segmentar hepática / ESMO 2023 — Metastatic colorectal cancer",
    "tags": [
      "cirurgia hepática",
      "metástases hepáticas",
      "câncer colorretal",
      "segmentação de Couinaud"
    ],
    "tip": "Segmentos II e III = lobo lateral esquerdo."
  },
  {
    "id": "iog2026-16",
    "topography": "3.3",
    "topic": "Câncer de vesícula",
    "module": "Cirurgia",
    "text": "Mulher de 62 anos de idade realizou uma ultrassonografia de abdome superior ao qual se evidenciou um pólipo em vesícula biliar de 1,5 cm, com fluxo sanguíneo detectado ao doppler. Não apresenta sintomas.\n\nQual é a melhor conduta para o caso?",
    "options": [
      "Colecistectomia por via videolaparoscópica.",
      "Colecistectomia por via aberta.",
      "Repetir ultrassonografia de abdome superior em 6 meses.",
      "Repetir ultrassonografia de abdome superior em 12 meses."
    ],
    "correctAnswer": 0,
    "explanation": "Pólipo de vesícula de 1,5 cm com fluxo ao Doppler (vascularizado, portanto lesão verdadeira, não colesterolose). Pólipos ≥ 10 mm têm risco relevante de malignidade e indicam colecistectomia, mesmo sem sintomas; a idade acima de 50 anos reforça.\n\nA via laparoscópica é a padrão. Se houver suspeita de câncer invasivo à imagem (pólipo muito grande, infiltração da parede), planeja-se cirurgia oncológica.",
    "commentary": "Colecistectomia aberta (B): a via aberta fica para suspeita de câncer avançado; para pólipo de 1,5 cm sem sinais de invasão, a laparoscopia é padrão.\n\nUltrassom em 6 meses (C) ou em 12 meses (D): seguimento é para pólipos menores que 10 mm sem fatores de risco.",
    "reference": "ESGAR/EAES/EURO-FED/ICAR 2022 — Management of gallbladder polyps / SBCBM",
    "tags": [
      "cirurgia geral",
      "pólipo de vesícula",
      "colecistectomia"
    ],
    "tip": "Pólipo de vesícula ≥ 1 cm: colecistectomia."
  },
  {
    "id": "iog2026-17",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Cirurgia",
    "text": "Paciente no pós-operatório de correção de aneurisma de aorta abdominal encontra-se internado na UTI.\n\nQual das alternativas abaixo é indicação de tratamento dialítico de urgência?",
    "options": [
      "Ureia sérica de 150 mg/dL.",
      "Creatinina sérica de 7 mg/dL.",
      "Acidose metabólica moderada (HCO₃⁻ = 15 mEq/L) e potássio sérico de 5,5 mEq/L.",
      "Edema agudo pulmonar na fase oligúrica de insuficiência renal."
    ],
    "correctAnswer": 3,
    "explanation": "As indicações de diálise de urgência na lesão renal aguda são as complicações refratárias ao tratamento clínico — o mnemônico AEIOU: acidose grave (pH < 7,1–7,15), distúrbios eletrolíticos graves (hipercalemia refratária), intoxicações dialisáveis, sobrecarga de volume (edema agudo de pulmão) refratária e uremia sintomática (pericardite, encefalopatia, sangramento).\n\nEdema agudo de pulmão na fase oligúrica, sem resposta a diurético, é indicação clássica.",
    "commentary": "Ureia de 150 mg/dL (A) ou creatinina de 7 mg/dL (B): valores isolados, sem sintomas urêmicos ou complicações, não indicam diálise de urgência.\n\nHCO₃⁻ 15 e K 5,5 (C): acidose moderada e potássio pouco elevado se tratam clinicamente.",
    "reference": "KDIGO 2012 — Acute Kidney Injury / STARRT-AKI (NEJM 2020)",
    "tags": [
      "nefrologia",
      "lesão renal aguda",
      "diálise de urgência",
      "pós-operatório"
    ],
    "tip": "Diálise de urgência: AEIOU — acidose, eletrólitos, intoxicação, overload (volume), uremia."
  },
  {
    "id": "iog2026-18",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Homem de 69 anos de idade deu entrada no pronto-socorro por dor abdominal há 2 dias. É hipertenso, diabético, obeso e tabagista. Foi feito o diagnóstico de abdome agudo inflamatório, sendo submetido a laparotomia exploradora que evidenciou diverticulite perfurada. Foi realizada sigmoidectomia a Hartmann. No 6° dia pós-operatório o paciente teve saída de grande quantidade de líquido sero-hemático por entre os pontos da ferida operatória.\n\nQual é a principal hipótese diagnóstica para a complicação pós-operatória apresentada?",
    "options": [
      "Deiscência da aponeurose.",
      "Infecção de sítio cirúrgico.",
      "Fístula intestinal.",
      "Hematoma na parede abdominal."
    ],
    "correctAnswer": 0,
    "explanation": "Saída de grande volume de líquido sero-hemático (\"cor de água de carne\") pela ferida operatória por volta do 5º–8º dia após laparotomia é o sinal clássico de deiscência da aponeurose, que precede a evisceração. O paciente tem vários fatores de risco: idade, obesidade, diabetes, tabagismo e cirurgia de urgência em campo contaminado.\n\nA conduta é cobrir com compressa úmida estéril e levar ao centro cirúrgico para ressutura da parede.",
    "commentary": "Infecção de sítio cirúrgico (B): drena secreção purulenta, com hiperemia, calor e dor local.\n\nFístula intestinal (C): drenaria conteúdo entérico (bilioso, fecaloide), não líquido sero-hemático.\n\nHematoma (D): aparece mais cedo, com abaulamento e equimose, e drena sangue escuro e coágulos.",
    "reference": "Sabiston — Tratado de Cirurgia (complicações da ferida operatória)",
    "tags": [
      "cirurgia geral",
      "deiscência de aponeurose",
      "complicações pós-operatórias",
      "evisceração"
    ],
    "tip": "Líquido sero-hemático pela ferida no 5º–8º dia: deiscência da aponeurose."
  },
  {
    "id": "iog2026-19",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 36 anos de idade é vítima de acidente automobilístico (colisão entre dois automóveis de passeio). Chega ao pronto-socorro de um hospital terciário imobilizado por colar cervical e com vias aéreas protegidas. No exame clínico, está hemodinamicamente estável. Pontuação na escala de coma de Glasgow: 15. Apresenta dor à palpação de flanco esquerdo. O resultado do FAST na sala de emergência é negativo. A tomografia computadorizada de abdome e pelve evidenciou volumoso hematoma perirrenal à esquerda e extravasamento de contraste na fase arterial.\n\nQual é a conduta para o caso?",
    "options": [
      "Nefrectomia total esquerda.",
      "Embolização por arteriografia.",
      "Laparotomia exploradora e controle de danos.",
      "Observação clínica em terapia intensiva."
    ],
    "correctAnswer": 1,
    "explanation": "Trauma renal em paciente hemodinamicamente estável, com hematoma perirrenal e extravasamento de contraste na fase arterial (sangramento ativo). O tratamento não operatório é a regra no trauma renal do paciente estável, e o extravasamento arterial é indicação de angiografia com embolização seletiva, que preserva o rim.",
    "commentary": "Nefrectomia (A): reservada para instabilidade hemodinâmica com lesão renal grave (avulsão de pedículo, lesão grau V sangrante).\n\nLaparotomia com controle de danos (C): para pacientes instáveis; este está estável.\n\nApenas observação (D): o sangramento arterial ativo precisa ser tratado; observar sem embolizar aumenta o risco de instabilidade.",
    "reference": "EAU — Guidelines on urological trauma / AAST/WSES 2019 — Kidney and urotrauma",
    "tags": [
      "trauma",
      "trauma renal",
      "embolização",
      "tratamento não operatório"
    ],
    "tip": "Trauma renal estável com blush arterial: embolização."
  },
  {
    "id": "iog2026-20",
    "topography": "7.1",
    "topic": "Isquemia arterial aguda",
    "module": "Cirurgia",
    "text": "Paciente de 60 anos de idade, com antecedente de infarto agudo do miocárdio há 1 ano, refere dor e esfriamento (sic) do membro inferior esquerdo há 4 horas. Nega antecedentes de claudicação prévia. Exame físico: ausência de pulso da artéria femoral esquerda para baixo e membro contralateral com pulsos normais.\n\nQual a hipótese mais provável e a conduta?",
    "options": [
      "Embolia arterial aguda; tratamento endovascular.",
      "Trombose arterial aguda; revascularização com safena.",
      "Trombose arterial aguda; tratamento endovascular.",
      "Embolia arterial aguda; heparinização."
    ],
    "correctAnswer": 0,
    "explanation": "Dor e frialdade súbitas do membro há 4 horas, ausência de pulsos a partir da femoral, sem claudicação prévia e com membro contralateral normal, em paciente com IAM há 1 ano (fonte de trombo mural): embolia arterial aguda.\n\nA conduta é heparinização imediata e revascularização. Pela banca, o tratamento endovascular (tromboaspiração ou trombólise dirigida por cateter) é a opção correta. A embolectomia com cateter de Fogarty continua sendo a técnica clássica, especialmente em êmbolos femorais com membro ameaçado; a escolha depende da gravidade (classificação de Rutherford) e da estrutura disponível.",
    "commentary": "Trombose com ponte de safena (B): a ausência de claudicação prévia e os pulsos normais do outro lado falam contra trombose; ponte é para doença aterosclerótica.\n\nTrombose com endovascular (C): a hipótese diagnóstica está errada.\n\nEmbolia com heparinização apenas (D): a heparina é obrigatória, mas não basta; o membro isquêmico precisa ser revascularizado.",
    "reference": "ESVS 2020 — Clinical Practice Guidelines on acute limb ischaemia / SBACV",
    "tags": [
      "cirurgia vascular",
      "isquemia arterial aguda",
      "embolia arterial",
      "revascularização"
    ],
    "tip": "Embolia: início súbito, fonte cardíaca, sem claudicação prévia, outro membro normal."
  },
  {
    "id": "iog2026-21",
    "topography": "5.2",
    "topic": "Idade gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 16 anos de idade procura o serviço de saúde preocupada porque acha que a barriga está pequena e não sente o bebê mexer ainda. Não iniciou o pré-natal por medo de contar para os pais da gravidez, não se lembra da data da última menstruação, mas acha que está com 7 meses (lembra de ter sangrado em maio). Nega doenças, refere uso eventual de maconha e cigarro. Ao exame obstétrico, altura uterina 22 cm, BCF presente e rítmico ao sonar, especular sem alterações, toque vaginal com colo amolecido, grosso e impérvio. Realizada ultrassonografia obstétrica, com peso fetal estimado de 650 g e índice de líquido amniótico de 10 cm, biometria compatível com 24 semanas.\n\nA orientação para a paciente é de que:",
    "options": [
      "A datação da gravidez é de 24 semanas; seguir pré-natal normal.",
      "Realizar dopplervelocimetria de artérias uterinas.",
      "É necessário repetir a ultrassonografia em 14 a 21 dias para confirmar a datação.",
      "Realizar amniocentese e cariótipo fetal."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente sem pré-natal, sem saber a DUM, acha que está com 7 meses, mas a altura uterina (22 cm) e a ultrassonografia (biometria de 24 semanas) indicam gestação menor. Uma ultrassonografia isolada tardia não diferencia um feto de 24 semanas com crescimento normal de um feto mais velho com restrição de crescimento, porque o erro da datação aumenta com a idade gestacional.\n\nA conduta é repetir a ultrassonografia em 2 a 3 semanas: se o crescimento for adequado nesse intervalo, a datação se confirma; se for insuficiente, sugere restrição de crescimento.",
    "commentary": "Assumir 24 semanas e seguir (A): com dúvida de datação e uso de cigarro e maconha, não se pode descartar restrição de crescimento por um único exame tardio.\n\nDoppler de artérias uterinas (B): serve para rastreio de pré-eclâmpsia e insuficiência placentária, não para datar a gestação.\n\nAmniocentese e cariótipo (D): não há malformação ou marcador que indique investigação genética invasiva.",
    "reference": "FEBRASGO — Datação da gestação / ACOG Committee Opinion 700 — Methods for estimating the due date",
    "tags": [
      "obstetrícia",
      "idade gestacional",
      "ultrassonografia",
      "restrição de crescimento fetal"
    ],
    "tip": "Datação incerta por ultrassom tardio: repita em 2–3 semanas e avalie o crescimento."
  },
  {
    "id": "iog2026-22",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com diagnóstico pré-natal de diabetes gestacional realizado no teste de tolerância à glicose com 26 semanas, controlada com insulina NPH e regular.\n\nNo pós-parto imediato a prescrição deve contemplar:",
    "options": [
      "Dieta geral e suspensão da terapêutica hipoglicemiante, sem controle de glicemia.",
      "Dieta para diabetes, manter insulina, controle de glicemia capilar às refeições.",
      "Dieta para diabetes, suspensão da terapêutica hipoglicemiante, glicemia às refeições.",
      "Dieta geral, iniciar hipoglicemiante oral, controle de glicemia capilar às refeições."
    ],
    "correctAnswer": 0,
    "explanation": "No diabetes gestacional, a hiperglicemia é causada pelos hormônios placentários; após a saída da placenta, a resistência à insulina cai rapidamente. Por isso, no pós-parto suspende-se a insulina e mantêm-se dieta e monitorização da glicemia capilar nos primeiros dias, para identificar as mulheres que já tinham diabetes prévio. O TOTG de 75 g deve ser repetido entre 6 semanas e 6 meses após o parto.",
    "commentary": "Dieta geral sem controle glicêmico (A): é necessário monitorar a glicemia, porque parte das mulheres tinha diabetes prévio não diagnosticado.\n\nManter a insulina (B): com a saída da placenta, manter a insulina causa hipoglicemia.\n\nHipoglicemiante oral (D): não há indicação de tratamento após o parto sem hiperglicemia comprovada.",
    "reference": "Ministério da Saúde/OPAS/FEBRASGO/SBD — Tratamento do diabetes mellitus gestacional no Brasil (2019)",
    "tags": [
      "obstetrícia",
      "diabetes gestacional",
      "puerpério",
      "insulinoterapia"
    ],
    "tip": "DMG: tirou a placenta, tira a insulina — mas continua medindo a glicemia."
  },
  {
    "id": "iog2026-23",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 32 anos de idade, secundigesta e primípara, vem para a primeira consulta de pré-natal com 8 semanas e 2 dias de gestação. Está preocupada, pois tem lúpus eritematoso sistêmico com acometimento cutâneo, articular e hematológico. Refere última crise há 7 meses e está em uso de hidroxicloroquina 400 mg e prednisona 10 mg por dia.\n\nQual é a orientação com relação ao uso de hidroxicloroquina e da prednisona na fase inicial da gestação?",
    "options": [
      "Deve suspender hidroxicloroquina.",
      "Deve manter ambas as medicações.",
      "Deve suspender os dois medicamentos.",
      "Deve suspender a prednisona."
    ],
    "correctAnswer": 1,
    "explanation": "Lúpus em remissão há 7 meses, usando hidroxicloroquina e prednisona 10 mg. Na gestação, a hidroxicloroquina deve ser mantida: é segura, reduz atividade da doença, recaídas, pré-eclâmpsia e, nas anti-Ro positivas, bloqueio cardíaco congênito. Suspendê-la aumenta o risco de reativação.\n\nA prednisona em dose baixa também é compatível com a gestação (a placenta inativa boa parte dela) e não deve ser retirada abruptamente; o objetivo é usar a menor dose eficaz.",
    "commentary": "Suspender a hidroxicloroquina (A): aumenta o risco de reativação do lúpus e de complicações gestacionais.\n\nSuspender ambos (C): risco de reativação e de insuficiência adrenal pela retirada súbita do corticoide.\n\nSuspender a prednisona (D): a retirada abrupta pode precipitar crise lúpica e insuficiência adrenal; a dose de 10 mg é aceitável.",
    "reference": "EULAR 2017 — Recommendations for women's health in SLE / SBR — Lúpus e gestação",
    "tags": [
      "obstetrícia",
      "lúpus eritematoso sistêmico",
      "hidroxicloroquina",
      "gestação de alto risco"
    ],
    "tip": "Lúpus na gravidez: NUNCA suspenda a hidroxicloroquina."
  },
  {
    "id": "iog2026-24",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos de idade, primigesta, com idade gestacional de 40 semanas e 6 dias, está em período expulsivo do trabalho de parto. Neste momento, nota-se distocia de ombro.\n\nQual das manobras está indicada para a assistência ao caso neste momento?",
    "options": [
      "Rebater o feto sobre o ventre materno.",
      "Utilizar o vácuo extrator dorsal.",
      "Mudar a paciente para decúbito lateral.",
      "Pressão suprapúbica e hiperflexão de pernas."
    ],
    "correctAnswer": 3,
    "explanation": "Na distocia de ombro, a primeira linha é a manobra de McRoberts (hiperflexão das coxas sobre o abdome), associada à pressão suprapúbica (manobra de Rubin I), que desimpacta o ombro anterior da sínfise. Se falhar, seguem-se as manobras internas (Rubin II, Woods, retirada do braço posterior) e a de Gaskin (quatro apoios).",
    "commentary": "Rebater o feto sobre o ventre materno (A): manobra de Bracht, usada no parto pélvico.\n\nVácuo extrator (B): o problema é o ombro, não a cabeça; tracionar a cabeça aumenta lesão do plexo braquial.\n\nDecúbito lateral (C): não é manobra de resolução da distocia; a de Gaskin é em quatro apoios.",
    "reference": "FEBRASGO — Distocia de ombro (Protocolo) / RCOG Green-top Guideline 42",
    "tags": [
      "obstetrícia",
      "distocia de ombro",
      "manobra de McRoberts",
      "assistência ao parto"
    ],
    "tip": "Distocia de ombro: McRoberts + pressão suprapúbica primeiro."
  },
  {
    "id": "iog2026-25",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 23 anos, realizou fertilização assistida. Encontra-se na 5ª semana de gestação diagnosticada por beta hCG sérico de 2.350 mUI/mL há 2 dias. Vem ao pronto atendimento com queixa de sangramento vaginal com característica de borra de café. O exame clínico apresentou como achados relevantes abdome indolor e pequena quantidade de sangue coletado em fórnice posterior da vagina. Foi solicitada avaliação ultrassonográfica, que demonstrou útero em anteversoflexão com eco endometrial espessado medindo 16 mm e imagem paraovariana esquerda medindo 28 x 20 x 22 mm. O nível sérico de beta hCG foi de 1.650 mUI/mL.\n\nNessa paciente, a conduta indicada é:",
    "options": [
      "Cirúrgica por laparoscopia.",
      "Cirúrgica por curetagem uterina.",
      "Conservadora com beta HCG seriado.",
      "Medicamentosa com metotrexato."
    ],
    "correctAnswer": 2,
    "explanation": "Gestação de 5 semanas após fertilização, sem saco gestacional intrauterino, com massa paraovariana de 2,8 cm e beta-hCG em queda (2.350 → 1.650 mUI/mL), paciente estável, assintomática e sem hemoperitônio: gravidez ectópica com evolução favorável, provavelmente em resolução espontânea.\n\nCritérios para conduta expectante: estabilidade, beta-hCG baixo (< 1.500–2.000) e em queda, massa menor que 3,5 cm, sem batimento cardíaco embrionário. Acompanha-se com beta-hCG seriado até negativar.",
    "commentary": "Laparoscopia (A): indicada em instabilidade, rotura, massa grande ou falha das outras condutas.\n\nCuretagem (B): não trata ectópica; o endométrio espesso é reação decidual.\n\nMetotrexato (D): indicado quando o beta-hCG está estável ou subindo; com hCG em queda espontânea, a expectativa é preferível.",
    "reference": "FEBRASGO — Gravidez ectópica (Protocolo) / ACOG Practice Bulletin 193",
    "tags": [
      "obstetrícia",
      "gravidez ectópica",
      "conduta expectante",
      "beta-hCG"
    ],
    "tip": "Ectópica estável, pequena e com beta-hCG caindo: conduta expectante."
  },
  {
    "id": "iog2026-26",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 30 anos, IG IP (normal há 8 anos), refere ciclos menstruais regulares, dismenorreia leve (melhora espontânea sem uso de analgésicos), faz uso de preservativo como método contraceptivo. Há 4 meses, teve início dor em região lombar direita, em cólica, com irradiação pélvica e intensidade progressiva sem melhora com analgésico ou anti-inflamatório. Nega disúria ou polaciúria. Exame abdominal: plano e flácido, sem massas palpáveis. Apresenta dor à palpação profunda em fossa ilíaca direita. Punho percussão negativa em regiões lombares. Exame especular: conteúdo vaginal habitual, colo epitelizado anteriorizado, zona de transição normal. Toque vaginal: útero retrovertido, tamanho habitual, dor à palpação em fórnice vaginal posterior, tumoração anexial direita, regular, móvel, indolor. Exame de sedimento urinário normal. Colpocitologia classe 2 de Papanicolau.\n\nA principal hipótese diagnóstica é:",
    "options": [
      "Mioma uterino.",
      "Câncer de ovário.",
      "Câncer de colo uterino.",
      "Endometriose."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher em idade fértil com dor pélvica progressiva há meses, refratária a analgésicos, dor à palpação do fundo de saco posterior, útero retrovertido e massa anexial direita: o conjunto aponta para endometriose, com provável endometrioma ovariano (cisto de chocolate) e acometimento do fundo de saco. A investigação segue com ultrassonografia transvaginal com preparo intestinal ou ressonância.",
    "commentary": "Mioma (A): causaria útero aumentado e irregular e sangramento aumentado, não massa anexial com dor em fundo de saco.\n\nCâncer de ovário (B): é raro aos 30 anos e costuma ser massa complexa, fixa, com ascite; o quadro doloroso com dor no fundo de saco favorece endometriose.\n\nCâncer de colo (C): o colo é normal e a citologia é benigna.",
    "reference": "FEBRASGO — Endometriose (Protocolo) / ESHRE 2022 — Endometriosis guideline",
    "tags": [
      "ginecologia",
      "endometriose",
      "endometrioma",
      "dor pélvica crônica"
    ],
    "tip": "Dor pélvica progressiva + dor no fundo de saco + massa anexial: endometriose."
  },
  {
    "id": "iog2026-27",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 40 anos refere sangramentos menstruais excessivos nos últimos 5 ciclos, que se apresentam com intervalo de 30 dias, duração de 7 dias e perda de coágulos. Nega comorbidades, uso de medicamentos, cirurgias prévias, alergias. Antecedente de 2 partos vaginais, último há 10 anos. Marido vasectomizado. No momento o sangramento é intenso, terceiro dia do ciclo. Ao exame clínico: frequência cardíaca de 90 bpm, PA 120 x 80 mmHg, abdome flácido indolor. Exame especular: colo epitelizado e grande quantidade de sangue na vagina com exteriorização pelo canal cervical. Exame pélvico com útero em anteversoflexão, não doloroso, tamanho normal, regiões anexiais livres.\n\nNeste momento, a medicação mais adequada para o controle do sangramento é:",
    "options": [
      "De-hidroepiandrosterona (DHEA).",
      "Diclofenaco sódico.",
      "Progesterona.",
      "Ácido tranexâmico."
    ],
    "correctAnswer": 3,
    "explanation": "Sangramento menstrual aumentado em curso, sem causa estrutural ao exame (útero normal, anexos livres), mulher estável. Para controlar o sangramento agudo de forma não hormonal, a escolha é o ácido tranexâmico, antifibrinolítico que reduz a perda menstrual em 30–55%.\n\nDepois do episódio, investiga-se a causa (PALM-COEIN, ultrassonografia) e se planeja o tratamento de manutenção (SIU-LNG, progestagênios, anticoncepcional).",
    "commentary": "DHEA (A): androgênio sem papel no controle de sangramento.\n\nDiclofenaco (B): AINEs reduzem o fluxo em cerca de 20–40%, são opção na manutenção, mas são menos eficazes que o ácido tranexâmico no sangramento intenso.\n\nProgesterona (C): é opção hormonal, mas leva mais tempo para agir e é mais usada no sangramento anovulatório; a paciente tem ciclos regulares (ovulatórios).",
    "reference": "FEBRASGO — Sangramento uterino anormal (Protocolo) / ACOG Committee Opinion 557",
    "tags": [
      "ginecologia",
      "sangramento uterino anormal",
      "ácido tranexâmico",
      "menorragia"
    ],
    "tip": "Sangramento menstrual intenso agudo, ciclo ovulatório: ácido tranexâmico."
  },
  {
    "id": "iog2026-28",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 27 anos, maratonista, IG 1P (vaginal há 7 anos), utilizava dispositivo intrauterino (DIU) liberador de progestagênio até 8 meses atrás, quando o retirou por desejo pessoal. Desde então permanece com seu treinamento habitual e utiliza preservativo como contraceptivo. Queixa-se de não ter apresentado fluxo menstrual desde a retirada do DIU. Exame de beta-hCG negativo. Foi medicada com medroxiprogesterona 10 mg ao dia por 10 dias, sem apresentar sangramento genital. Dosagem de FSH = 1,2 mUI/mL e de LH = 2,1 mUI/mL. Ressonância magnética de sela túrcica normal.\n\nA principal hipótese diagnóstica para a origem do quadro de amenorreia é:",
    "options": [
      "Hipófise.",
      "Ovários.",
      "Hipotálamo.",
      "Útero."
    ],
    "correctAnswer": 2,
    "explanation": "Amenorreia secundária com beta-hCG negativo e teste da progesterona negativo (sem sangramento): falta estrogênio. FSH e LH baixos indicam origem central (hipogonadismo hipogonadotrófico), e a ressonância da sela normal afasta tumor hipofisário. Em uma maratonista com treino intenso, a causa mais provável é a amenorreia hipotalâmica funcional, ligada ao déficit energético (tríade da mulher atleta).",
    "commentary": "Hipófise (A): a ressonância normal afasta adenoma; sem outra causa hipofisária, a origem funcional hipotalâmica é a mais provável.\n\nOvários (B): falência ovariana daria FSH e LH elevados.\n\nÚtero (D): a progesterona não fez sangrar por falta de estrogênio, não por problema endometrial; não há antecedente de curetagem (Asherman).",
    "reference": "Endocrine Society 2017 — Functional hypothalamic amenorrhea / FEBRASGO — Amenorreias",
    "tags": [
      "ginecologia",
      "amenorreia",
      "amenorreia hipotalâmica",
      "tríade da mulher atleta"
    ],
    "tip": "Amenorreia com FSH/LH baixos e sela normal em atleta: hipotalâmica."
  },
  {
    "id": "iog2026-29",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 23 anos, vida sexual com uso de preservativo, ciclos menstruais regulares. Realiza exame ginecológico com achado de tumoração anexial direita, móvel e indolor. Exame ultrassonográfico complementar identifica tumoração ovariana de 6 cm compatível com diagnóstico de teratoma.\n\nA ooforoplastia direita prevenirá qual das seguintes complicações?",
    "options": [
      "Degeneração maligna.",
      "Sangramento.",
      "Infertilidade.",
      "Torção."
    ],
    "correctAnswer": 3,
    "explanation": "Teratoma maduro (cisto dermoide) de 6 cm em mulher jovem. A complicação mais comum desse tumor é a torção ovariana, favorecida pelo tamanho (maior que 5 cm) e pelo peso do conteúdo. A cistectomia com preservação do ovário (ooforoplastia) é indicada justamente para prevenir a torção, além de confirmar a histologia.",
    "commentary": "Degeneração maligna (A): é rara (menos de 2%), ocorre mais em mulheres mais velhas e não é o principal motivo da cirurgia.\n\nSangramento (B): não é complicação típica do teratoma.\n\nInfertilidade (C): o teratoma não causa infertilidade; a cirurgia preserva o ovário justamente para não comprometer a fertilidade.",
    "reference": "FEBRASGO — Tumores anexiais benignos / ACOG Practice Bulletin 174",
    "tags": [
      "ginecologia",
      "teratoma",
      "torção ovariana",
      "massa anexial"
    ],
    "tip": "Teratoma maduro: maior risco é torção."
  },
  {
    "id": "iog2026-30",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos, nuligesta em uso de contraceptivo oral combinado. Refere que há 7 dias começou quadro de mialgia inespecífica, cefaleia e febre não medida, controlada com paracetamol. Há 4 dias dor pélvica e corrimento vaginal muco sanguinolento intenso. Ao exame clínico apresenta-se em regular estado geral, FC 80 bpm, FR 18 ipm, PA 120/70 mmHg, temperatura axilar 37,2 °C. Ausculta pulmonar e cardíaca normais, presença de linfonodos inguinais palpáveis, móveis, fibroelásticos e dolorosos. Órgãos genitais externos sem alterações.\n\nA principal hipótese diagnóstica é:",
    "options": [
      "Herpes simples.",
      "Behçet.",
      "Tricomoníase.",
      "Clamídia."
    ],
    "correctAnswer": 0,
    "explanation": "Pródromo sistêmico (febre, mialgia, cefaleia), seguido de dor pélvica e corrimento mucossanguinolento, com linfonodos inguinais dolorosos: é o quadro da primoinfecção por herpes simples genital, que pode causar cervicite intensa e sintomas sistêmicos. As vesículas e úlceras dolorosas podem estar no colo ou na vagina, e os genitais externos podem estar normais.\n\nO tratamento é com aciclovir (ou valaciclovir) por 7 a 10 dias.",
    "commentary": "Behçet (B): úlceras orais e genitais recorrentes, uveíte, sem esse padrão de primoinfecção febril com linfonodos.\n\nTricomoníase (C): corrimento amarelo-esverdeado bolhoso, com colo em framboesa, sem pródromo sistêmico nem linfonodos dolorosos.\n\nClamídia (D): cervicite geralmente pouco sintomática, sem febre e mialgia prévias.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "ginecologia",
      "herpes genital",
      "cervicite",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Febre e mialgia antes de lesão genital dolorosa + linfonodo doloroso: primoinfecção herpética."
  },
  {
    "id": "iog2026-31",
    "topography": "11",
    "module": "Pediatria",
    "text": "Menino de 12 anos de idade é trazido pela mãe à consulta devido a quadro de movimentos involuntários. Na última semana, a mãe e os professores haviam notado que a criança estava mais desatenta e apresentava hiperatividade. Há 2 dias, os movimentos involuntários iniciaram, de forma aguda. O menino não tinha antecedentes mórbidos relevantes e não usava medicamentos. A última intercorrência clínica foi uma faringite há 1 mês, tratada com antibiótico. No exame neurológico, observam-se movimentos involuntários generalizados, de curta duração, com intensidade variável e de caráter migratório. Quando o paciente anda, esses movimentos parasitam a marcha e também os movimentos voluntários, e muitas vezes o próprio paciente incorpora deliberadamente o movimento involuntário em um movimento voluntário, originando uma gesticulação exagerada. Não há outras alterações no exame clínico.\n\nQual é a principal hipótese diagnóstica?",
    "options": [
      "Meningoencefalite herpética.",
      "Coreia de Sydenham.",
      "Doença de Parkinson juvenil.",
      "Doença de Huntington."
    ],
    "correctAnswer": 1,
    "explanation": "Movimentos involuntários bruscos, breves, migratórios e irregulares, que o paciente disfarça incorporando-os a gestos (parakinesia), com desatenção e labilidade, cerca de 1 mês após faringite: coreia de Sydenham, manifestação maior da febre reumática (critérios de Jones).\n\nA coreia pode surgir 1 a 6 meses após a infecção estreptocócica e às vezes isolada. Além do tratamento sintomático, está indicada a profilaxia secundária com penicilina benzatina, e deve-se investigar cardite com ecocardiograma.",
    "commentary": "Encefalite herpética (A): cursa com febre, rebaixamento de consciência, crises e alteração de comportamento aguda grave.\n\nParkinson juvenil (C): rigidez, bradicinesia e tremor, de evolução lenta; não coreia aguda.\n\nHuntington (D): coreia progressiva de adulto, com história familiar; não começa de forma aguda após faringite.",
    "reference": "SBC/SBP — Diretrizes Brasileiras para o diagnóstico, tratamento e prevenção da febre reumática / AHA 2015 — Critérios de Jones revisados",
    "tags": [
      "pediatria",
      "coreia de Sydenham",
      "febre reumática",
      "critérios de Jones"
    ],
    "tip": "Coreia após faringite em criança: Sydenham = febre reumática → penicilina benzatina."
  },
  {
    "id": "iog2026-32",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Menina, 6 anos de idade, portadora de diabetes mellitus tipo 1, está em sala de emergência há 3 horas recebendo tratamento para cetoacidose diabética. Desde a entrada no pronto-socorro, recebeu três expansões de 20 mL por kg de soro fisiológico, duas correções de potássio e duas doses de insulina ultrarrápida de 0,1 U/kg. A glicemia inicial era de 484 mg/dL, e no momento está 78 mg/dL. Evoluiu com quadro de confusão mental, bradicardia e hipertensão arterial.\n\nA complicação apresentada pela paciente é:",
    "options": [
      "Hipoglicemia relativa.",
      "Edema cerebral.",
      "Mielinólise pontina.",
      "Hipercalemia."
    ],
    "correctAnswer": 1,
    "explanation": "Criança em tratamento de cetoacidose que piora o nível de consciência e desenvolve bradicardia e hipertensão (tríade de Cushing): edema cerebral, a complicação mais grave e principal causa de morte da CAD pediátrica. Os fatores de risco incluem menor idade, CAD grave, ureia alta, uso de bicarbonato e queda rápida da glicemia/osmolaridade — aqui a glicemia caiu de 484 para 78 mg/dL em 3 horas, rápido demais.\n\nTratamento imediato: manitol (0,5–1 g/kg) ou salina hipertônica a 3%, cabeceira elevada, redução da infusão de fluidos, e depois imagem.",
    "commentary": "Hipoglicemia relativa (A): a glicemia de 78 mg/dL não explica bradicardia e hipertensão; essa tríade é de hipertensão intracraniana.\n\nMielinólise pontina (C): está ligada a correção rápida de sódio, não ao tratamento de CAD, e se manifesta dias depois.\n\nHipercalemia (D): causaria arritmias e fraqueza, não confusão com hipertensão.",
    "reference": "ISPAD 2022 — Diabetic ketoacidosis and hyperglycemic hyperosmolar state / SBP",
    "tags": [
      "pediatria",
      "cetoacidose diabética",
      "edema cerebral",
      "DM1"
    ],
    "tip": "CAD na criança + confusão, bradicardia e hipertensão: edema cerebral → manitol ou salina 3%."
  },
  {
    "id": "iog2026-33",
    "topography": "11",
    "module": "Pediatria",
    "text": "Menino de 10 dias de vida é trazido ao pronto-socorro por sangue nas fezes há 2 dias. Nasceu com idade gestacional de 39 semanas e 2 dias, por via vaginal, com boletim de Apgar 9/10/10. As triagens neonatais indicadas foram realizadas e resultaram normais. Na maternidade, recebeu 1 mg de vitamina K por via intramuscular e as vacinas para hepatite B e BCG-ID. Permaneceu em alojamento conjunto, com alta da maternidade no terceiro dia de vida, sem intercorrências. Atualmente está em aleitamento misto, com leite materno e fórmula láctea, que a mãe iniciou após a alta da maternidade, pois sentia que tinha pouco leite. A mãe usa carbamazepina, há 6 anos, para controle de epilepsia. No exame clínico, criança em bom estado geral. Semiologia abdominal sem alterações. Não há fissuras ou outras lesões perineais. A mãe traz fralda com presença de sangue (confirmado pelo teste de catalase, que veio positivo). O restante do exame clínico da criança é normal. Também foram examinadas as mamas da mãe, sem fissuras ou quaisquer outras lesões.\n\nQual é a principal hipótese diagnóstica para o sangramento do recém-nascido?",
    "options": [
      "É compatível com sangramento por deficiência de vitamina K forma tardia, devendo-se administrar uma dose de 2 mg de vitamina K intravenosa, com parada do sangramento esperada em, no máximo, 4 horas.",
      "É a forma clássica de sangramento por deficiência de vitamina K, devido à baixa quantidade de vitamina K na fórmula derivada do leite de vaca. Deve-se administrar 2 mg de vitamina K via oral e reforçar o aleitamento materno exclusivo.",
      "É decorrente do uso de anticonvulsivante, que interfere na absorção intestinal da vitamina K pelo RN, levando a uma coagulopatia, sendo denominado sangramento dependente da deficiência de vitamina K, forma precoce.",
      "É sugestivo de alergia à proteína do leite de vaca, não podendo ser classificado como sangramento dependente da deficiência de vitamina K, seja nas formas clássica ou tardia."
    ],
    "correctAnswer": 3,
    "explanation": "Recém-nascido de 10 dias, em bom estado geral, que recebeu vitamina K IM ao nascer e passou a receber fórmula de leite de vaca após a alta, com sangue nas fezes (confirmado), sem fissura anal e sem lesão nos mamilos maternos (afasta sangue materno deglutido).\n\nA profilaxia com vitamina K IM torna muito improvável a doença hemorrágica do recém-nascido. O quadro de lactente bem, com sangue nas fezes logo após a introdução de proteína do leite de vaca, é típico da proctocolite alérgica, forma de alergia à proteína do leite de vaca. A conduta é retirar a proteína do leite de vaca (fórmula extensamente hidrolisada; se mantiver leite materno, dieta materna sem leite) e reavaliar.",
    "commentary": "Forma tardia de deficiência de vitamina K (A): ocorre entre 2 semanas e 6 meses, quase sempre em aleitamento materno exclusivo sem profilaxia; este RN recebeu vitamina K IM.\n\nForma clássica pela fórmula (B): a forma clássica é do 2º ao 7º dia, e a fórmula é rica em vitamina K — protege, não causa deficiência.\n\nForma precoce por carbamazepina (C): a forma precoce, ligada a drogas maternas como anticonvulsivantes, aparece nas primeiras 24 horas de vida, não aos 10 dias.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (SBP/ASBAI, 2018) / SBP — Doença hemorrágica do recém-nascido",
    "tags": [
      "neonatologia",
      "alergia à proteína do leite de vaca",
      "proctocolite alérgica",
      "vitamina K"
    ],
    "tip": "RN bem, com sangue nas fezes depois de começar fórmula, com vitamina K feita: proctocolite alérgica."
  },
  {
    "id": "iog2026-34",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Menina, 13 meses de idade, previamente saudável, é levada ao pronto atendimento com história de febre e tosse há 2 dias. Mãe refere boa aceitação alimentar e eliminações normais. Vacinações em dia. Ao exame clínico se apresenta em regular estado geral, alerta, com temperatura de 38,9°C, frequência cardíaca é de 142 bpm, a frequência respiratória é de 50 irpm e a saturação de oxigênio é de 95% no ar ambiente. Não apresenta estridor ou retrações torácicas, há presença de estertores crepitantes na base do pulmão direito. O restante do exame clínico é normal. Não apresenta antecedentes alérgicos.\n\nQual das alternativas a seguir é o patógeno mais provável?",
    "options": [
      "Bordetella pertussis.",
      "Streptococcus pneumoniae.",
      "Haemophilus influenzae tipo B.",
      "Mycoplasma pneumoniae."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 13 meses com febre alta, tosse, taquipneia (FR 50 irpm, acima do limite de 40 para 1–5 anos) e estertores crepitantes localizados na base direita, sem sibilância: pneumonia adquirida na comunidade. O agente bacteriano mais comum dos 2 meses aos 5 anos é o Streptococcus pneumoniae, tratado com amoxicilina oral quando não há sinais de gravidade.",
    "commentary": "Bordetella pertussis (A): tosse paroxística com guincho, em geral sem febre alta nem crepitações focais.\n\nHaemophilus influenzae tipo B (C): ficou raro após a vacina (a criança está com vacinação em dia).\n\nMycoplasma pneumoniae (D): mais comum em escolares e adolescentes, com quadro arrastado e febre baixa.",
    "reference": "SBP — Pneumonia adquirida na comunidade na infância / OMS — Manejo da pneumonia na criança",
    "tags": [
      "pediatria",
      "pneumonia infantil",
      "pneumococo",
      "taquipneia"
    ],
    "tip": "Pneumonia típica de 2 meses a 5 anos: pneumococo → amoxicilina."
  },
  {
    "id": "iog2026-35",
    "topography": "1.3",
    "topic": "Sinusite/rinossinusite",
    "module": "Pediatria",
    "text": "Menino de 3 anos de idade foi levado a consulta médica por queixa de tosse, coriza e obstrução nasal há 12 dias, sem melhora. Apresenta secreção nasal esverdeada intensa, principalmente ao acordar, que vai melhorando ao longo do dia. Queixa-se de cefaleia em região frontal durante todo o período de doença. Não há alterações do exame clínico. Traz radiografia de seios da face realizada hoje, com nível hidroaéreo em seios maxilares.\n\nConsiderando a principal hipótese diagnóstica para o caso, qual das alternativas a seguir justifica a introdução de antibioticoterapia?",
    "options": [
      "Cefaleia em região frontal.",
      "Secreção nasal esverdeada intensa.",
      "Sintomas respiratórios por 12 dias.",
      "Nível hidroaéreo na radiografia."
    ],
    "correctAnswer": 2,
    "explanation": "Rinossinusite em criança: o diagnóstico de rinossinusite bacteriana aguda é clínico e se apoia em um de três padrões: sintomas persistentes por mais de 10 dias sem melhora, piora após melhora inicial (\"dupla piora\") ou início grave (febre ≥ 39 °C com secreção purulenta por 3 ou mais dias). Aqui os sintomas persistem por 12 dias sem melhora, o que justifica antibiótico (amoxicilina).",
    "commentary": "Cefaleia frontal (A): é inespecífica, e o seio frontal nem está desenvolvido aos 3 anos.\n\nSecreção esverdeada (B): a cor da secreção não diferencia infecção viral de bacteriana.\n\nNível hidroaéreo na radiografia (D): radiografia não é indicada para diagnosticar sinusite em crianças; as alterações aparecem também nos resfriados virais.",
    "reference": "AAP 2013 — Clinical practice guideline for acute bacterial sinusitis in children / ABORL-CCF — Diretrizes de rinossinusites",
    "tags": [
      "pediatria",
      "rinossinusite bacteriana",
      "antibioticoterapia",
      "otorrinolaringologia"
    ],
    "tip": "Rinossinusite bacteriana: > 10 dias sem melhora, dupla piora ou início grave."
  },
  {
    "id": "iog2026-36",
    "topography": "11",
    "module": "Pediatria",
    "text": "Menina, 9 anos de idade, vem à consulta de rotina. O pai está preocupado porque recentemente notou uma nodulação na mama direita da filha. Relata que a avó paterna faleceu de câncer de mama aos 49 anos. Ao exame clínico, nota-se uma elevação da aréola e papila à direita, formando uma pequena saliência, com palpação fibroelástica. Sem alterações do lado esquerdo. Sem outras alterações ao exame clínico.\n\nA conduta é:",
    "options": [
      "Solicitar ultrassonografia de mama.",
      "Solicitar prolactina, TSH e cortisol.",
      "Manter conduta expectante.",
      "Realizar punção aspirativa por agulha fina."
    ],
    "correctAnswer": 2,
    "explanation": "Menina de 9 anos com elevação da aréola e papila em uma mama, com tecido fibroelástico sob a aréola: é o broto mamário (telarca, estágio M2 de Tanner), início normal da puberdade, que costuma ser unilateral ou assimétrico por alguns meses. A idade é normal para a telarca (8 a 13 anos), e a história familiar de câncer não muda a interpretação.\n\nConduta: tranquilizar a família e acompanhar; não se faz exame nem biópsia.",
    "commentary": "Ultrassonografia (A): desnecessária para broto mamário típico.\n\nProlactina, TSH e cortisol (B): não há sinal de doença endócrina; a puberdade está na idade normal.\n\nPunção aspirativa (D): contraindicada, pode lesar o broto e comprometer o desenvolvimento da mama.",
    "reference": "SBP — Puberdade normal e alterações / Tanner — Estadiamento puberal",
    "tags": [
      "pediatria",
      "telarca",
      "puberdade",
      "broto mamário"
    ],
    "tip": "Nódulo subareolar unilateral aos 8–13 anos: broto mamário. Não puncione."
  },
  {
    "id": "iog2026-37",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascida de termo, adequada para a idade gestacional. Pré-natal e parto vaginal sem intercorrências. Mãe primigesta, saudável, com 30 anos de idade. Com 12 horas de vida observa-se icterícia zona I/II na RN. Neste momento a dosagem de bilirrubina indireta (BI) revelou 8 mg/dL. Iniciada fototerapia. Tipagem sanguínea materna O Rh negativo, coombs indireto (CI) negativo e do RN A Rh positivo, coombs direto (CD) negativo e eluato positivo. Com 20 horas de vida a BI estava em 10 mg/dL, repetida com 24 horas de vida e mantida em 11 mg/dL. Reticulócitos 11%.\n\nA causa para a alteração observada e a conduta devem ser:",
    "options": [
      "Doença hemolítica não imune, manter fototerapia e solicitar curva de fragilidade osmótica da RN.",
      "Doença hemolítica por incompatibilidade A-O, manter fototerapia, com controle sérico de bilirrubina.",
      "Doença hemolítica por incompatibilidade Rh, administrar imunoglobulina e realizar controle sérico de bilirrubina.",
      "Doença hemolítica devida a grupos menores, solicitar a pesquisa do antígeno envolvido e realizar a exsanguineotransfusão."
    ],
    "correctAnswer": 1,
    "explanation": "Icterícia nas primeiras 24 horas de vida (sempre patológica), mãe O e RN A: incompatibilidade ABO. Coombs direto negativo com eluato positivo e reticulocitose (11%) confirmam hemólise por anticorpos anti-A maternos. A incompatibilidade Rh está afastada: a mãe é Rh negativo, mas tem Coombs indireto negativo (não é sensibilizada) e o Coombs direto do RN é negativo.\n\nConduta: manter fototerapia e controlar a bilirrubina sérica; exsanguineotransfusão e imunoglobulina ficam para progressão apesar da fototerapia.",
    "commentary": "Hemólise não imune (A): o eluato positivo mostra anticorpo ligado às hemácias, ou seja, hemólise imune.\n\nIncompatibilidade Rh (C): a mãe não está sensibilizada (Coombs indireto negativo) e o Coombs direto do RN é negativo.\n\nGrupos menores com exsanguineotransfusão (D): a combinação O/A explica o quadro, e a bilirrubina não está em nível de exsanguineotransfusão.",
    "reference": "SBP — Icterícia no recém-nascido com idade gestacional ≥ 35 semanas (2021) / AAP 2022 — Hyperbilirubinemia guideline",
    "tags": [
      "neonatologia",
      "icterícia neonatal",
      "incompatibilidade ABO",
      "fototerapia"
    ],
    "tip": "Mãe O, RN A ou B, icterícia < 24 h: incompatibilidade ABO (Coombs direto pode ser negativo)."
  },
  {
    "id": "iog2026-38",
    "topography": "11",
    "module": "Pediatria",
    "text": "Menina, 9 anos de idade, vem para sua primeira consulta de acompanhamento. A mãe afirma que sempre apresentou infecções respiratórias frequentes, com uso de antibióticos em múltiplos tratamentos desde 1 ano de idade. Refere ter tosse com produção de secreção, diariamente, e falta de ar na atividade física da escola. A mãe também está preocupada com seu baixo crescimento e baixo ganho de peso. Ao exame clínico está abaixo do percentil 5 na altura e também no peso para sua idade. À ausculta apresenta estertores grossos difusos e baqueteamento de dedos.\n\nQual é a principal hipótese diagnóstica para o quadro?",
    "options": [
      "Asma não controlada.",
      "Fístula traqueoesofágica.",
      "Fibrose cística.",
      "Tuberculose."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com infecções respiratórias de repetição desde o 1º ano, tosse produtiva diária, estertores grossos, baqueteamento digital e déficit de peso e altura: doença pulmonar supurativa crônica com falha de crescimento (provável má absorção por insuficiência pancreática). O quadro é típico de fibrose cística. O diagnóstico é confirmado pelo teste do suor (cloro ≥ 60 mmol/L) ou por genética (CFTR).",
    "commentary": "Asma não controlada (A): não causa baqueteamento digital nem supuração crônica; é doença de vias aéreas reversível.\n\nFístula traqueoesofágica (B): causa tosse e engasgo com alimentação e pneumonias aspirativas desde o período neonatal, sem baqueteamento ou déficit de crescimento tão marcado.\n\nTuberculose (D): pode causar perda de peso, mas não explica infecções de repetição desde 1 ano com tosse produtiva crônica e baqueteamento.",
    "reference": "Diretrizes Brasileiras de Diagnóstico e Tratamento da Fibrose Cística (SBPT, 2017) / Cystic Fibrosis Foundation",
    "tags": [
      "pediatria",
      "fibrose cística",
      "bronquiectasias",
      "baqueteamento digital",
      "déficit de crescimento"
    ],
    "tip": "Supuração pulmonar crônica + baqueteamento + baixo peso na criança: teste do suor."
  },
  {
    "id": "iog2026-39",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Gestante com 35 semanas e 2 dias de gestação que evolui para parto vaginal sem intercorrências. O pré-natal foi adequado, e a sorologia para hepatite B revelava HBsAg positivo. O recém-nascido, do sexo masculino, é pequeno para a idade gestacional, com peso de nascimento de 1.850 g.\n\nQual a conduta a ser adotada para a prevenção de hepatite B nesse caso?",
    "options": [
      "Vacina para hepatite B nas primeiras 12 horas de vida, sem necessidade de administração de imunoglobulina para hepatite B.",
      "Imunoglobulina específica contra a hepatite B, e a vacina para hepatite B só poderá ser administrada após atingir peso acima de 2.000 g.",
      "Vacina para hepatite B nas primeiras 12 horas de vida e imunoglobulina específica contra a hepatite B.",
      "Imunoglobulina específica contra a hepatite B, e aplicar a vacina para hepatite B após 30 dias de vida, em razão da prematuridade."
    ],
    "correctAnswer": 2,
    "explanation": "Filho de mãe HBsAg positiva deve receber a vacina de hepatite B e a imunoglobulina específica (IGHAHB) nas primeiras 12 horas de vida, em locais diferentes, independentemente do peso e da idade gestacional. Isso previne mais de 90% da transmissão vertical.\n\nEm RN com menos de 2.000 g ou menos de 33 semanas, a dose ao nascer não é contada no esquema e são feitas mais doses (esquema de 4 doses: 0, 1, 2 e 6 meses), mas a vacina não é adiada.",
    "commentary": "Só vacina (A): filho de mãe HBsAg positiva precisa também da imunoglobulina.\n\nAdiar a vacina até 2.000 g (B) ou 30 dias (D): adiar perde a janela de proteção; vacina e imunoglobulina são dadas nas primeiras 12 horas.",
    "reference": "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE, 2023) / PCDT Transmissão Vertical (2022)",
    "tags": [
      "neonatologia",
      "hepatite B",
      "transmissão vertical",
      "imunoglobulina",
      "vacinação"
    ],
    "tip": "Mãe HBsAg+: vacina + imunoglobulina nas primeiras 12 h, qualquer peso."
  },
  {
    "id": "iog2026-40",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Pediatria",
    "text": "A primeira sorologia para sífilis de uma gestante de 23 anos de idade apresentou TPPA positivo e VDRL (venereal disease research laboratory) de 1/64, sendo adequadamente tratada na 12ª semana de gestação. Controles de VDRL revelaram queda dos níveis até 1/4 na 30ª semana de gestação. Com 39 semanas de gestação, evoluiu para parto vaginal, sem intercorrências. A sorologia materna para sífilis, na admissão para o parto, revelou VDRL de 1/32. No RN, o VDRL foi de 1/16 e TPPA (treponema pallidum particle agglutination) reagente.\n\nEsse recém-nascido deverá:",
    "options": [
      "Realizar hemograma e radiografia de ossos longos. Se houver alteração de ao menos um desses exames, colher líquor e iniciar tratamento.",
      "Realizar hemograma e radiografia de ossos longos, colher líquor e iniciar tratamento com penicilina cristalina.",
      "Receber alta do berçário sem coleta de exames e realizar VDRL na Unidade Básica de Saúde aos 18 meses de vida.",
      "Receber alta do berçário sem coleta de exames e realizar VDRL na Unidade Básica de Saúde com 1, 2, 4 e 6 meses de vida."
    ],
    "correctAnswer": 0,
    "explanation": "A gestante foi tratada, os títulos caíram até 1/4 e depois subiram para 1/32 no parto: aumento de mais de duas diluições indica reinfecção ou falha, e ela passa a ser considerada inadequadamente tratada. O RN tem VDRL 1/16, menor que o materno, com exame físico normal.\n\nPela leitura da banca, nesse cenário o RN faz hemograma e radiografia de ossos longos; se houver alteração, colhe-se líquor e trata-se com penicilina cristalina (ou procaína) por 10 dias; se tudo for normal, penicilina benzatina em dose única e seguimento.\n\nAtenção: o PCDT do Ministério da Saúde (2022) recomenda, para todo RN de mãe não tratada ou inadequadamente tratada, investigação completa já de início, incluindo a punção lombar. Por isso a alternativa A é uma simplificação.",
    "commentary": "Investigação completa com tratamento por 10 dias para todos (B): pela banca, o tratamento por 10 dias com cristalina só é obrigatório se houver alteração clínica ou laboratorial, ou se o VDRL do RN for pelo menos duas diluições maior que o materno.\n\nAlta sem exames com VDRL aos 18 meses (C) ou VDRL seriado (D): filho de mãe inadequadamente tratada nunca recebe alta sem investigação.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) / Nota técnica de sífilis congênita",
    "tags": [
      "neonatologia",
      "sífilis congênita",
      "VDRL",
      "penicilina"
    ],
    "tip": "Mãe com VDRL subindo ≥ 2 diluições = inadequadamente tratada → investigar o RN."
  },
  {
    "id": "iog2026-41",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Considere um determinado teste diagnóstico de uma infecção sendo utilizado em uma cidade onde sua prevalência é 10%. O que se espera dos valores preditivos positivo (VPP), negativo (VPN) e da especificidade (E) deste teste, se ele for aplicado em outra cidade onde a prevalência da infecção é 20%?",
    "options": [
      "Aumentará; diminuirá; será mantida.",
      "Diminuirá; aumentará; aumentará.",
      "Diminuirá; aumentará; será mantida.",
      "Aumentará; aumentará; diminuirá."
    ],
    "correctAnswer": 0,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e não mudam com a prevalência. Já os valores preditivos dependem dela: quando a prevalência sobe (de 10% para 20%), o VPP aumenta (um positivo tem mais chance de ser verdadeiro) e o VPN diminui (um negativo tem mais chance de ser falso).\n\nResposta: VPP aumenta, VPN diminui, especificidade mantida.",
    "commentary": "B: o VPP não diminui e a especificidade não aumenta com a prevalência.\n\nC: inverte o comportamento do VPP e do VPN.\n\nD: o VPN não aumenta, e a especificidade não muda.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia clínica",
      "testes diagnósticos",
      "valor preditivo",
      "prevalência"
    ],
    "tip": "Prevalência ↑ → VPP ↑ e VPN ↓. Sensibilidade e especificidade não mudam."
  },
  {
    "id": "iog2026-42",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Com a finalidade de identificar fatores associados à hipertensão arterial sistêmica (HAS), foram selecionados 1.453 indivíduos de determinada localidade. Cento e três indivíduos (7,1%) foram diagnosticados como hipertensos. O odds ratio (OR) de hipertensão entre os que apresentavam hábitos de vida sedentários comparados com aqueles mais ativos foi de 4,01 com IC95% (2,19-6,27). Quando os dados foram ajustados para idade, o OR foi de 3,57 com IC95% (0,87-5,31).\n\nCom base nos resultados desse estudo, qual a afirmação correta?",
    "options": [
      "Representa avaliação de estudo epidemiológico do tipo caso-controle.",
      "Trata-se de estudo epidemiológico do tipo transversal.",
      "O risco de desenvolver hipertensão é 4,01 vezes maior entre os que têm hábitos de vida sedentários.",
      "A probabilidade de hipertensão é 3,57% superior nos indivíduos com hábitos de vida sedentários."
    ],
    "correctAnswer": 1,
    "explanation": "Selecionou-se uma amostra de 1.453 pessoas de uma localidade e, num mesmo momento, mediu-se quem tem hipertensão (7,1%, uma prevalência) e quem é sedentário: é um estudo transversal (de prevalência). A medida de associação reportada é o OR de prevalência.\n\nAlém disso, após o ajuste por idade o IC 95% passou a incluir 1 (0,87–5,31), ou seja, a associação deixou de ser estatisticamente significativa.",
    "commentary": "Caso-controle (A): partiria de doentes e não doentes selecionados e olharia exposições passadas; aqui a amostra é da população e a doença é medida junto com a exposição.\n\n\"Risco 4,01 vezes maior\" (C): estudo transversal não mede risco (incidência); o OR bruto também não é risco relativo, e foi confundido pela idade.\n\n\"Probabilidade 3,57% superior\" (D): OR não é diferença percentual, e o OR ajustado não é significativo (IC inclui 1).",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "epidemiologia",
      "estudo transversal",
      "odds ratio",
      "intervalo de confiança",
      "confundimento"
    ],
    "tip": "Mediu exposição e doença ao mesmo tempo numa amostra = transversal. IC que inclui 1 = não significativo."
  },
  {
    "id": "iog2026-43",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo clínico prospectivo, randomizado e multicêntrico:",
    "options": [
      "É suficiente para definir uma questão clínica e deve ser imediatamente incorporado nos guidelines específicos e servir para pronta mudança universal de condutas.",
      "É a melhor ferramenta para estudos das doenças raras, para evitar que essas sejam tratadas apenas com base em relatos de casos ou opinião de especialistas.",
      "É menos difundido em cirurgia, por ser mais laborioso e custoso do que situações clínicas, além de diversos desafios práticos e metodológicos para sua realização no âmbito da cirurgia.",
      "Tem valor quase nulo com menos de 1.000 pacientes arrolados."
    ],
    "correctAnswer": 2,
    "explanation": "O ensaio clínico randomizado multicêntrico é o desenho de maior força para avaliar intervenções, mas é menos frequente em cirurgia: é caro e trabalhoso, a técnica depende da curva de aprendizado e da habilidade do cirurgião, o cegamento é difícil (às vezes impossível), há resistência de pacientes e cirurgiões à randomização e há dificuldade em padronizar o procedimento.",
    "commentary": "Suficiente para mudar condutas imediatamente (A): um único estudo precisa ser replicado e avaliado em revisões sistemáticas antes de mudar diretrizes.\n\nMelhor para doenças raras (B): doenças raras dificultam recrutar pacientes; estudos caso-controle e registros são mais viáveis.\n\nValor quase nulo com menos de 1.000 pacientes (D): o valor de um ensaio depende do cálculo amostral e da qualidade metodológica, não de um número fixo; muitos ensaios importantes têm menos de mil pacientes.",
    "reference": "Fletcher — Epidemiologia Clínica / McCulloch et al. — IDEAL framework for surgical innovation (Lancet, 2009)",
    "tags": [
      "epidemiologia",
      "ensaio clínico randomizado",
      "medicina baseada em evidências",
      "pesquisa em cirurgia"
    ],
    "tip": "Ensaio randomizado é padrão-ouro, mas difícil em cirurgia (cegamento, técnica, custo)."
  },
  {
    "id": "iog2026-44",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Qual das características apresentadas é compatível com a realização de um teste diagnóstico em um cenário de rastreamento populacional?",
    "options": [
      "Baixa sensibilidade.",
      "Alta probabilidade pré-teste.",
      "Baixo valor preditivo positivo.",
      "Alta especificidade."
    ],
    "correctAnswer": 1,
    "explanation": "No rastreamento populacional a prevalência é baixa e a maioria das pessoas é saudável. Para evitar uma avalanche de falsos-positivos (com exames confirmatórios, ansiedade e custos), o teste precisa ter boa especificidade, além de boa sensibilidade para não deixar escapar os casos. Entre as opções, alta especificidade é a característica compatível.",
    "commentary": "Baixa sensibilidade (A): deixaria passar muitos casos, o que contraria o objetivo do rastreamento.\n\nAlta probabilidade pré-teste (B): no rastreamento a probabilidade pré-teste é baixa; alta probabilidade caracteriza investigação diagnóstica de sintomáticos.\n\nBaixo VPP (C): é uma consequência indesejada da baixa prevalência, não uma característica desejável do teste.",
    "reference": "Wilson & Jungner — Princípios do rastreamento (OMS) / Ministério da Saúde — Cadernos de Atenção Primária nº 29 (Rastreamento)",
    "tags": [
      "rastreamento",
      "testes diagnósticos",
      "especificidade",
      "medicina preventiva"
    ],
    "tip": "Rastreamento = população saudável, baixa prevalência: precisa de especificidade alta."
  },
  {
    "id": "iog2026-45",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Assinale o indicador utilizado para monitoramento da Atenção Básica.",
    "options": [
      "Proporção de encaminhamentos para internação hospitalar no mês.",
      "Taxa de mortalidade por doenças respiratórias no ano.",
      "Frequência de casos vítimas de violência doméstica no mês.",
      "Proporção de atendimentos a crianças nascidas a termo por mês."
    ],
    "correctAnswer": 0,
    "explanation": "Indicadores de monitoramento da Atenção Básica avaliam sua resolutividade e a coordenação do cuidado. A proporção de encaminhamentos para internação hospitalar reflete a capacidade da equipe de resolver problemas no próprio nível (espera-se resolver 80–90% das demandas) e relaciona-se às internações por condições sensíveis à atenção primária. É o indicador que monitora o funcionamento da AB entre as opções.",
    "commentary": "Mortalidade por doenças respiratórias no ano (B): indicador epidemiológico geral, influenciado por muitos fatores fora da AB.\n\nFrequência de violência doméstica (C): é dado de vigilância e notificação, não indicador de desempenho da AB.\n\nAtendimentos a crianças nascidas a termo (D): não é indicador consagrado; o que se monitora é cobertura de puericultura, vacinação, consultas de pré-natal etc.",
    "reference": "Ministério da Saúde — Sistema de Informação em Saúde para a Atenção Básica (SISAB) / Pacto de Indicadores da Atenção Básica",
    "tags": [
      "atenção primária",
      "indicadores de saúde",
      "resolutividade",
      "monitoramento"
    ],
    "tip": "Muitos encaminhamentos para internação = AB pouco resolutiva."
  },
  {
    "id": "iog2026-46",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Para que o sistema de saúde brasileiro se torne mais resolutivo, é fundamental que o nível de Atenção Primária à Saúde:",
    "options": [
      "Realize ações rotineiras de baixa complexidade no cuidado da saúde das pessoas e famílias de baixa renda e encaminhe-as para os níveis secundário e terciário do sistema sempre que ocorrerem problemas de difícil solução.",
      "Exerça prioritariamente ações de cunho preventivo e de promoção da saúde e atenda às demandas diagnósticas, terapêuticas e de reabilitação quando houver recursos financeiros suficientes para essas demandas.",
      "Ordene-se segundo os atributos de porta de entrada para o sistema, de acolhimento às demandas de saúde de pessoas, famílias e comunidades, de coordenação do cuidado e de longitudinalidade.",
      "Seja o responsável por combater os determinantes sociais do processo saúde-doença-cuidado."
    ],
    "correctAnswer": 2,
    "explanation": "A APS torna o sistema resolutivo quando cumpre seus atributos essenciais (Starfield): acesso de primeiro contato (porta de entrada), longitudinalidade, integralidade e coordenação do cuidado, acolhendo as demandas de pessoas, famílias e comunidades. Uma APS forte resolve a maior parte dos problemas e ordena o fluxo para os outros níveis.",
    "commentary": "Ações de baixa complexidade para os mais pobres (A): APS não é \"medicina simplificada para pobres\"; é universal e de alta complexidade de conhecimento, com baixa densidade tecnológica.\n\nPrioritariamente preventiva, assistência só com recursos (B): a APS faz prevenção, diagnóstico, tratamento e reabilitação; não condiciona o cuidado a recursos.\n\nResponsável por combater determinantes sociais (D): a APS atua sobre determinantes, mas eles dependem de políticas intersetoriais além do setor saúde.",
    "reference": "Starfield — Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia / PNAB 2017",
    "tags": [
      "atenção primária",
      "atributos da APS",
      "atributos essenciais",
      "coordenação do cuidado"
    ],
    "tip": "Atributos da APS: primeiro contato, longitudinalidade, integralidade e coordenação."
  },
  {
    "id": "iog2026-47",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Qual instrumento metodológico é utilizado em vigilância epidemiológica para definir a existência ou não de uma epidemia?",
    "options": [
      "Comparação da prevalência com municípios vizinhos.",
      "Comparação da incidência com municípios vizinhos.",
      "Busca ativa de casos utilizando visitas domiciliares.",
      "Construção de um diagrama de controle."
    ],
    "correctAnswer": 3,
    "explanation": "Para saber se há epidemia, compara-se a incidência atual com a incidência esperada para o mesmo local e período, com base na série histórica. O instrumento é o diagrama de controle: calcula-se a média histórica (por mês ou semana) e um limite superior (média + 1,96 desvio-padrão, por exemplo); incidências acima desse limite caracterizam epidemia.",
    "commentary": "Comparar prevalência com municípios vizinhos (A): epidemia se avalia por casos novos (incidência), no próprio local, contra seu histórico.\n\nComparar incidência com vizinhos (B): realidades diferentes; a referência é a série histórica do próprio local.\n\nBusca ativa (C): é estratégia de investigação de casos, não método para definir epidemia.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "vigilância epidemiológica",
      "diagrama de controle",
      "epidemia",
      "incidência"
    ],
    "tip": "Epidemia: incidência acima do limite superior do diagrama de controle."
  },
  {
    "id": "iog2026-48",
    "topography": "10",
    "topic": "Meningococcemia",
    "module": "Saúde Coletiva",
    "text": "Dentre as alternativas a seguir, qual está correta sobre a epidemiologia da doença meningocócica?",
    "options": [
      "A transmissão da Neisseria meningitidis ocorre predominantemente no domicílio.",
      "Menores de 5 anos de idade são os mais frequentes portadores do agente etiológico na orofaringe.",
      "A ocorrência da doença meningocócica é sazonal, predominando nos meses quentes e úmidos.",
      "A patogenicidade e a infectividade da Neisseria meningitidis são altas."
    ],
    "correctAnswer": 0,
    "explanation": "A Neisseria meningitidis é transmitida por gotículas e secreções respiratórias, por contato próximo e prolongado, e o ambiente domiciliar é onde se concentra o maior risco de transmissão — por isso a quimioprofilaxia é dirigida aos contatos íntimos (domiciliares, creche, quem dormiu no mesmo ambiente).",
    "commentary": "Menores de 5 anos como principais portadores (B): o estado de portador é mais frequente em adolescentes e adultos jovens; as crianças pequenas são as que mais adoecem.\n\nPredomínio em meses quentes e úmidos (C): a doença predomina no outono e inverno, com aglomeração em ambientes fechados.\n\nAlta patogenicidade e infectividade (D): a infectividade é baixa (muitos portadores assintomáticos e poucos doentes), embora a patogenicidade e a virulência sejam altas.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (doença meningocócica)",
    "tags": [
      "vigilância epidemiológica",
      "doença meningocócica",
      "meningococo",
      "quimioprofilaxia"
    ],
    "tip": "Meningococo: portador = adolescente/adulto jovem; doente = criança; transmissão = domicílio."
  },
  {
    "id": "iog2026-49",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Considerando os objetivos do desenvolvimento sustentável da OMS, além da vacinação com BCG, quais das seguintes ações programáticas são propostas como estratégias para melhoria dos indicadores de saúde para a tuberculose?",
    "options": [
      "Tratar sintomáticos respiratórios.",
      "Tratar a infecção latente para todos os contatos.",
      "Confirmar cura dos casos.",
      "Tratar reatores ao teste tuberculínico."
    ],
    "correctAnswer": 2,
    "explanation": "A Estratégia pelo Fim da Tuberculose (End TB), alinhada aos Objetivos de Desenvolvimento Sustentável, e o Plano Nacional pelo Fim da TB colocam como pilares o diagnóstico precoce, o tratamento completo com confirmação da cura e a prevenção (vacina BCG e tratamento da infecção latente em grupos indicados). Confirmar a cura dos casos é ação programática central: reduz transmissão, recidiva e resistência, e é um dos indicadores monitorados.",
    "commentary": "Tratar sintomáticos respiratórios (A): sintomáticos devem ser investigados (busca ativa e exames), não tratados empiricamente.\n\nTratar ILTB de todos os contatos (B): o tratamento da infecção latente é indicado conforme a prova tuberculínica/IGRA e o grupo de risco, não para todos.\n\nTratar reatores à prova tuberculínica (D): não é para todo reator; depende do resultado, da idade, do risco e da exclusão de doença ativa.",
    "reference": "OMS — End TB Strategy / Ministério da Saúde — Plano Nacional pelo Fim da Tuberculose como Problema de Saúde Pública (2021–2025)",
    "tags": [
      "tuberculose",
      "estratégia pelo fim da tuberculose",
      "ODS",
      "vigilância epidemiológica"
    ],
    "tip": "TB: busque o sintomático, trate até a cura e confirme a cura."
  },
  {
    "id": "iog2026-50",
    "topography": "10",
    "topic": "Raiva",
    "module": "Saúde Coletiva",
    "text": "Maria, 56 anos, foi mordida na perna pelo cachorro da vizinha. No momento do acidente, a paciente realizou limpeza com água e sabão e manteve suas atividades domésticas. Cerca de 9 horas após o acidente, foi à Unidade Básica de Saúde (UBS), onde foi atendida pela enfermeira. A enfermeira coletou a informação de que o cachorro era conhecido e habitava a casa da vizinha. Avaliou tratar-se de ferimento superficial, sem sangramento, constituído por pontos perfurantes correspondentes à mordedura.\n\nQual é a conduta?",
    "options": [
      "Encaminhar para realizar vacinação antirrábica em Maria.",
      "Manter observação do cão por 10 dias.",
      "Encaminhar para realizar vacinação e soro antirrábico em Maria.",
      "Encaminhar para realizar vacinação antirrábica em Maria se o cão não foi vacinado."
    ],
    "correctAnswer": 1,
    "explanation": "Mordedura por cão, ferimento superficial e único em membro inferior: é acidente leve. O cão é conhecido, mora na casa da vizinha e pode ser observado. Pelo protocolo do Ministério da Saúde, quando o animal (cão ou gato) é observável, faz-se lavagem do ferimento e observação do animal por 10 dias, sem iniciar profilaxia. Se o animal adoecer, morrer, desaparecer ou mudar de comportamento nesse período, inicia-se a vacinação.",
    "commentary": "Vacinar a paciente (A): em acidente leve com cão observável, não se vacina de início.\n\nVacina e soro (C): o soro é para acidentes graves com animal suspeito ou não observável.\n\nVacinar se o cão não for vacinado (D): a decisão depende da possibilidade de observar o animal, não do seu cartão de vacina.",
    "reference": "Ministério da Saúde — Protocolo de profilaxia pré, pós e reexposição da raiva humana no Brasil (2022)",
    "tags": [
      "vigilância epidemiológica",
      "raiva",
      "profilaxia antirrábica",
      "acidente com animal"
    ],
    "tip": "Cão ou gato observável: observar 10 dias. Profilaxia só se o animal adoecer ou sumir."
  }
];
