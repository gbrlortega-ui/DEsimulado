import { Question } from '../types';

// FUBOG 2027 (GO) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const FUBOG_2027_QUESTIONS: Question[] = [
  {
    "id": "fubog2027-1",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos, com diagnóstico prévio de Doença de Addison, é admitido no pronto-socorro com quadro de prostração intensa, náuseas, vômitos e dor abdominal difusa após quadro infeccioso respiratório. Ao exame físico, apresenta-se desidratado, com hiperpigmentação de mucosas e pressão arterial de 80/40 mmHg, que se mantém refratária à reposição volêmica inicial com dois litros de cristaloide. Considerando a fisiopatologia e o manejo da crise adrenal aguda, é CORRETO afirmar:",
    "options": [
      "O uso de solução glicosada é a medida preferencial para a expansão volêmica, sendo o aumento da secreção de aldosterona o mecanismo esperado para a correção da hipernatremia grave",
      "A reposição de hidrocortisona por via intravenosa deve preceder a confirmação laboratorial, visando à correção do déficit de glicocorticoide e à restauração da estabilidade hemodinâmica",
      "O achado de hiperglicemia associada à hipocalemia é o padrão laboratorial característico da insuficiência adrenal primária, decorrente do excesso de produção de cortisol pela glândula suprarrenal",
      "A realização do teste de estímulo com ACTH sintético é contraindicada durante a fase aguda, sendo a dosagem de metanefrinas urinárias o marcador de escolha para o diagnóstico de falência medular"
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com doença de Addison, desencadeante infeccioso, vômitos, dor abdominal, hiperpigmentação e choque refratário a volume: crise adrenal aguda. É emergência: coleta-se cortisol e ACTH se possível, mas sem atrasar o tratamento — hidrocortisona IV imediata (100 mg em bolus, depois 200 mg/dia em infusão ou 50 mg de 6/6 h), soro fisiológico (com glicose se hipoglicemia) e tratamento do fator precipitante. A hidrocortisona em dose alta também tem efeito mineralocorticoide.",
    "commentary": "Solução glicosada com aldosterona corrigindo hipernatremia (A): a expansão é feita com soro fisiológico, e a insuficiência adrenal primária cursa com hiponatremia (falta de aldosterona), não hipernatremia.\n\nHiperglicemia com hipocalemia por excesso de cortisol (C): o padrão é hipoglicemia, hiponatremia e hipercalemia, por deficiência hormonal.\n\nMetanefrinas para falência medular (D): metanefrinas avaliam feocromocitoma; o teste com ACTH é feito depois da estabilização, e o problema é cortical, não medular.",
    "reference": "Endocrine Society – Diagnosis and Treatment of Primary Adrenal Insufficiency (2016); SBEM",
    "tags": [
      "crise adrenal",
      "insuficiência adrenal",
      "doença de Addison",
      "hidrocortisona",
      "endocrinologia"
    ],
    "tip": "Suspeita de crise adrenal: hidrocortisona IV já, sem esperar exame."
  },
  {
    "id": "fubog2027-2",
    "module": "Clínica Médica",
    "text": "A progressão da Doença Renal Crônica (DRC) envolve adaptações hemodinâmicas glomerulares que, embora inicialmente compensatórias, resultam em fibrose intersticial e declínio da taxa de filtração. O manejo clínico foca na redução da proteinúria e no controle das complicações metabólicas para retardar a necessidade de terapia substitutiva renal. No que se refere às diretrizes de tratamento e diagnóstico da DRC, é CORRETO afirmar:",
    "options": [
      "A anemia da doença renal crônica decorre principalmente da deficiência de eritropoetina, e a terapia com Agentes Estimuladores da Eritropoese (ESA) deve evitar níveis de hemoglobina acima de 11,5 g/dL, visando a redução do risco de eventos cardiovasculares e trombóticos",
      "Os inibidores da enzima conversora de angiotensina promovem a dilatação da arteríola aferente, garantindo o aumento da pressão intraglomerular em pacientes com nefropatia diabética",
      "O diagnóstico de osteodistrofia renal fundamenta-se na presença de hipofosfatemia severa associada a níveis reduzidos de paratormônio, resultando em calcificações vasculares de grandes artérias",
      "A restrição proteica rigorosa para valores abaixo de 0,3 g/kg/dia é a medida padrão para pacientes em estágio inicial da DRC, sendo a única estratégia comprovadamente eficaz para impedir a progressão da perda de função renal"
    ],
    "correctAnswer": 0,
    "explanation": "A anemia da doença renal crônica é normocítica e decorre principalmente da deficiência relativa de eritropoetina (além de ferropenia e inflamação). Com agentes estimuladores da eritropoese, a meta é manter a hemoglobina em torno de 10–11,5 g/dL, evitando valores acima de 11,5–13 g/dL, que aumentam AVC, eventos cardiovasculares e trombose de acesso (estudos TREAT, CHOIR). Antes do ESA, corrige-se a deficiência de ferro.",
    "commentary": "IECA dilatando a arteríola aferente (B): o IECA dilata a arteríola eferente e reduz a pressão intraglomerular — daí a nefroproteção.\n\nOsteodistrofia com hipofosfatemia e PTH baixo (C): na DRC há hiperfosfatemia e hiperparatireoidismo secundário (PTH alto).\n\nRestrição proteica < 0,3 g/kg/dia como padrão (D): recomenda-se cerca de 0,8 g/kg/dia (0,55–0,6 em casos selecionados); restrições extremas causam desnutrição e não são “a única estratégia eficaz”.",
    "reference": "KDIGO 2012 Clinical Practice Guideline for Anemia in CKD; KDIGO 2024 CKD Guideline",
    "tags": [
      "doença renal crônica",
      "anemia da doença renal crônica",
      "eritropoetina",
      "nefrologia"
    ],
    "tip": "ESA na DRC: alvo de Hb ~10–11,5 g/dL; não passar de 11,5–13."
  },
  {
    "id": "fubog2027-3",
    "module": "Clínica Médica",
    "text": "A Artrite Reumatoide é uma patologia inflamatória sistêmica de caráter autoimune que atinge primordialmente as articulações diartrodiais, podendo evoluir com deformidades permanentes e manifestações extra-articulares. O sucesso terapêutico está atrelado à estratégia de tratamento por metas, utilizando drogas modificadoras do curso da doença de forma precoce. Sobre a avaliação laboratorial e o tratamento da AR, é CORRETO afirmar:",
    "options": [
      "O uso de glicocorticoides em altas doses constitui a terapia de manutenção a longo prazo, visando a remissão completa da sinovite por meio do bloqueio dos receptores de interleucina-6",
      "O fator reumatoide apresenta alta sensibilidade para o diagnóstico precoce, sendo sua negatividade um critério para a interrupção do uso de metotrexato em pacientes sintomáticos",
      "A presença de anticorpos contra Peptídeos Citrulinados Cíclicos (anti-CCP) confere maior especificidade diagnóstica e correlaciona-se com um curso clínico de maior agressividade e erosão óssea",
      "A sulfassalazina é o agente biológico de escolha para pacientes com doença ativa grave, atuando como um inibidor do fator de necrose tumoral alfa em receptores periféricos"
    ],
    "correctAnswer": 2,
    "explanation": "O anticorpo anti-CCP (antipeptídeo citrulinado cíclico) tem sensibilidade semelhante à do fator reumatoide, mas especificidade muito maior (cerca de 95%) para artrite reumatoide, pode surgir anos antes da doença e se associa a curso mais agressivo, com erosões e pior prognóstico.",
    "commentary": "Corticoide em alta dose como manutenção por bloqueio de IL-6 (A): o corticoide é usado em dose baixa e por curto período como ponte; o bloqueio da IL-6 é feito pelo tocilizumabe.\n\nFR com alta sensibilidade e negatividade para suspender metotrexato (B): o FR é pouco específico, e sua negatividade não orienta a suspensão do tratamento.\n\nSulfassalazina como biológico anti-TNF (D): a sulfassalazina é DMARD sintético convencional, não biológico.",
    "reference": "Sociedade Brasileira de Reumatologia – Diretrizes para o tratamento da artrite reumatoide (2017, atualização 2020); ACR/EULAR 2010",
    "tags": [
      "artrite reumatoide",
      "anti-CCP",
      "reumatologia"
    ],
    "tip": "Anti-CCP: mais específico que o FR e marcador de doença erosiva."
  },
  {
    "id": "fubog2027-4",
    "module": "Clínica Médica",
    "text": "Paciente de 38 anos, com diagnóstico de HIV e histórico de má adesão à terapia antirretroviral, apresenta cefaleia holocraniana progressiva há duas semanas, associada a episódios de confusão mental e vômitos. O exame físico revela rigidez de nuca leve, e a contagem de linfócitos T-CD4 é de 45 células/mm³. Após a realização de punção lombar, a análise do líquido cefalorraquidiano demonstra abertura sob pressão elevada e presença de leveduras encapsuladas na coloração com tinta da China. Sobre o manejo da meningite criptocócica, é CORRETO afirmar:",
    "options": [
      "O tratamento de indução baseia-se na combinação de anfotericina B lipossomal com flucitosina, sendo a realização de punções lombares de alívio indicada para o controle da hipertensão intracraniana",
      "O início da terapia antirretroviral nas primeiras 48 horas é a conduta prioritária, visando ao aumento da imunidade celular para a eliminação direta do fungo no sistema nervoso central",
      "O uso de corticosteroides em doses imunossupressoras deve ser instituído de forma rotineira para reduzir a formação de granulomas fúngicos, sendo a dexametasona o agente que impede a recidiva precoce",
      "A profilaxia secundária com fluconazol pode ser interrompida após sete dias de tratamento estável, desde que a cultura do líquor apresente crescimento bacteriano de flora polimicrobiana em aerobiose"
    ],
    "correctAnswer": 0,
    "explanation": "Meningite criptocócica em paciente com AIDS (CD4 45), com tinta da China positiva e pressão de abertura elevada. O tratamento de indução é anfotericina B (preferencialmente lipossomal) associada a flucitosina (ou fluconazol, na falta desta) por 1–2 semanas, seguida de consolidação e manutenção com fluconazol. A hipertensão intracraniana é tratada com punções lombares de alívio repetidas, principal medida para reduzir a mortalidade.",
    "commentary": "TARV nas primeiras 48 horas (B): na meningite criptocócica a TARV deve ser adiada por 4–6 semanas, pelo risco de síndrome inflamatória de reconstituição imune grave e maior mortalidade (estudo COAT).\n\nCorticoide de rotina (C): o corticoide aumentou a mortalidade e a incapacidade na meningite criptocócica (estudo CryptoDex) e não é recomendado.\n\nSuspender a profilaxia secundária após 7 dias (D): a manutenção com fluconazol dura pelo menos 1 ano e até a recuperação do CD4 (> 100–200) com carga viral suprimida.",
    "reference": "Ministério da Saúde – PCDT para Manejo da Infecção pelo HIV em Adultos (2024); WHO Guidelines for cryptococcal disease (2022)",
    "tags": [
      "meningite criptocócica",
      "HIV",
      "infecções oportunistas",
      "anfotericina B",
      "infectologia"
    ],
    "tip": "Criptococose meníngea: anfotericina + flucitosina, punções de alívio e TARV só após 4–6 semanas."
  },
  {
    "id": "fubog2027-5",
    "module": "Clínica Médica",
    "text": "O manejo da hipertensão arterial sistêmica visa à proteção de órgãos-alvo e à redução do risco cardiovascular global por meio de metas pressóricas individualizadas. A escolha da terapia medicamentosa inicial considera as comorbidades do paciente e a eficácia das diferentes classes de anti-hipertensivos na redução de desfechos maiores. De acordo com as diretrizes brasileiras de hipertensão arterial, é CORRETO afirmar:",
    "options": [
      "A medida da pressão arterial em consultório é o único parâmetro válido para o ajuste de dose, sendo o valor de 140 x 90 mmHg a meta universal para todos os pacientes idosos, independentemente da fragilidade",
      "Os betabloqueadores de primeira geração representam a droga de escolha para pacientes idosos sem doenças cardíacas, devido ao seu efeito protetor contra o surgimento de diabetes mellitus",
      "O uso de inibidores diretos da renina é realizado de forma combinada com bloqueadores dos receptores de angiotensina para garantir a máxima proteção renal em pacientes com proteinúria",
      "A associação de bloqueadores dos canais de cálcio com diuréticos tiazídicos é uma opção eficaz para o tratamento inicial, promovendo a redução da resistência vascular periférica"
    ],
    "correctAnswer": 3,
    "explanation": "Pelas Diretrizes Brasileiras de Hipertensão, as classes de primeira linha (com redução comprovada de desfechos) são diuréticos tiazídicos, bloqueadores dos canais de cálcio, IECA e BRA; a combinação de duas classes é recomendada como tratamento inicial para a maioria dos pacientes. A associação de bloqueador de cálcio (vasodilatador arterial) com tiazídico é eficaz e reduz a resistência vascular periférica.",
    "commentary": "Só a medida de consultório e meta 140/90 universal para idosos (A): MAPA e MRPA também orientam o tratamento, e a meta é individualizada pela fragilidade e pelo risco.\n\nBetabloqueadores de primeira geração para idosos e proteção contra diabetes (B): betabloqueadores não são primeira linha sem indicação específica e podem favorecer o diabetes.\n\nInibidor direto da renina com BRA (C): o duplo bloqueio do sistema renina-angiotensina aumenta hipercalemia e lesão renal e é contraindicado.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020/2025)",
    "tags": [
      "hipertensão arterial sistêmica",
      "terapia combinada",
      "bloqueadores dos canais de cálcio",
      "cardiologia"
    ],
    "tip": "Primeira linha na HAS: tiazídico, BCC, IECA ou BRA — nunca IECA + BRA ou alisquireno juntos."
  },
  {
    "id": "fubog2027-6",
    "module": "Clínica Médica",
    "text": "Adolescente de 14 anos procura assistência médica devido à dor migratória em grandes articulações (joelhos e tornozelos) iniciada há três dias, associada à febre e fadiga. Relata quadro de orofaringite purulenta não tratada há aproximadamente três semanas. Ao exame cardiovascular, nota-se sopro holossistólico em foco mitral com irradiação para a axila, sugerindo insuficiência mitral aguda. Diante da aplicação dos Critérios de Jones para o diagnóstico de febre reumática, é CORRETO afirmar:",
    "options": [
      "A coreia de Sydenham manifesta-se como um critério menor de diagnóstico, sendo caracterizada por movimentos voluntários de grande amplitude que desaparecem durante o repouso",
      "O prolongamento do intervalo PR no eletrocardiograma constitui um critério maior de cardite reumática, sendo indicação para a realização imediata de troca valvar por prótese biológica",
      "O diagnóstico é estabelecido pela presença de dois critérios maiores, como a poliartrite migratória e a cardite, associados à evidência de infecção prévia pelo estreptococo do grupo A",
      "O eritema marginado apresenta-se como pápulas pruriginosas em faces extensoras dos membros, sendo o marcador de atividade inflamatória crônica em pacientes com estenose aórtica"
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com poliartrite migratória de grandes articulações, febre e sopro de insuficiência mitral (cardite), 3 semanas após faringite. Pelos critérios de Jones revisados (2015), o primeiro surto de febre reumática é diagnosticado com 2 critérios maiores, ou 1 maior + 2 menores, associados à evidência de infecção estreptocócica recente (ASLO elevada, cultura ou teste rápido). Aqui há dois maiores: cardite e poliartrite.",
    "commentary": "Coreia como critério menor e movimentos voluntários (A): a coreia de Sydenham é critério maior, com movimentos involuntários que desaparecem no sono.\n\nPR prolongado como critério maior e indicação de troca valvar (B): o PR longo é critério menor, e não indica cirurgia.\n\nEritema marginado pruriginoso em extensores (D): é lesão anular, não pruriginosa, no tronco e na raiz dos membros, critério maior de atividade aguda.",
    "reference": "Gewitz MH et al. Revision of the Jones Criteria, Circulation 2015; Sociedade Brasileira de Cardiologia – Diretrizes de febre reumática",
    "tags": [
      "febre reumática",
      "critérios de Jones",
      "cardite reumática",
      "cardiologia"
    ],
    "tip": "Jones: 2 maiores ou 1 maior + 2 menores + evidência de estreptococo."
  },
  {
    "id": "fubog2027-7",
    "module": "Clínica Médica",
    "text": "O manejo farmacológico da Insuficiência Cardíaca visa à redução da mortalidade e da frequência de internações hospitalares por meio do bloqueio neuro-hormonal. Sobre as diretrizes atuais relacionadas à terapia otimizada da IC com fração de ejeção reduzida, analise as afirmações:\n\nI. O uso de bloqueadores dos receptores de angiotensina em associação com alisquireno é a estratégia recomendada para potencializar a ação da neprilisina, garantindo estabilidade pressórica em quadros de congestão pulmonar.\nII. A espironolactona atua como antagonista competitivo da vasopressina nos túbulos coletores, sendo a monitorização da calcemia o parâmetro clínico para o ajuste de dose em pacientes com doença renal crônica.\nIII. Os inibidores do cotransportador sódio-glicose 2 (iSGLT2) promovem glicosúria, reduzem a pré-carga por efeito osmótico e têm indicação para pacientes com ICFEr com ou sem diabetes mellitus, com benefício em mortalidade e hospitalizações.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "I: o alisquireno associado a BRA é contraindicado (duplo bloqueio), e quem inibe a neprilisina é o sacubitril, associado à valsartana (F). II: a espironolactona é antagonista da aldosterona (receptor mineralocorticoide), não da vasopressina, e o parâmetro de monitorização é o potássio, não o cálcio (F). III: os iSGLT2 (dapagliflozina, empagliflozina) promovem glicosúria e natriurese e reduzem mortalidade e hospitalizações na ICFEr, com ou sem diabetes (V).",
    "commentary": "Apenas II (A), I e III (C) e II e III (D): as proposições I e II estão erradas; só a III é correta.",
    "reference": "Sociedade Brasileira de Cardiologia – Atualização de Tópicos Emergentes da Diretriz de Insuficiência Cardíaca (2021); ESC 2021/2023",
    "tags": [
      "insuficiência cardíaca",
      "inibidores de SGLT2",
      "espironolactona",
      "cardiologia"
    ],
    "tip": "ICFEr: os 4 pilares são INRA/IECA/BRA, betabloqueador, antagonista mineralocorticoide e iSGLT2."
  },
  {
    "id": "fubog2027-8",
    "module": "Clínica Médica",
    "text": "O diagnóstico de tromboembolismo pulmonar baseia-se na probabilidade clínica pré-teste e no uso racional de exames de imagem e biomarcadores. Acerca disso, analise as sentenças:\n\n1. O escore de Wells permite a estratificação dos pacientes em diferentes níveis de risco, sendo a dosagem do D-dímero indicada para excluir o diagnóstico nos pacientes com baixa ou moderada probabilidade clínica.\n2. A angiotomografia de tórax é o exame de escolha para a confirmação diagnóstica, permitindo a visualização direta de falhas de enchimento nas artérias pulmonares, com boa sensibilidade para a detecção de trombos em ramos segmentares.\n3. O achado eletrocardiográfico de inversão da onda T de V1 a V4 indica sobrecarga do ventrículo esquerdo, e a administração de betabloqueadores é a conduta inicial para reduzir o risco de infarto pulmonar.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 3,
    "explanation": "1: o escore de Wells estratifica a probabilidade clínica; com probabilidade baixa ou intermediária (ou “TEP improvável”), um D-dímero normal exclui o diagnóstico (V). 2: a angiotomografia de tórax é o exame de escolha para confirmação, mostrando falhas de enchimento, com boa sensibilidade até ramos segmentares (V). 3: inversão de T de V1 a V4 indica sobrecarga do ventrículo direito, e betabloqueador não é tratamento — o tratamento é anticoagulação (F).",
    "commentary": "F, F, F (A) e V, V, V (B): as duas primeiras sentenças são verdadeiras e a terceira é falsa.\n\nV, F, F (C): a angiotomografia é sim o exame de escolha para confirmar TEP.",
    "reference": "ESC 2019 Guidelines on Acute Pulmonary Embolism; Sociedade Brasileira de Pneumologia e Tisiologia",
    "tags": [
      "tromboembolismo pulmonar",
      "escore de Wells",
      "D-dímero",
      "angiotomografia",
      "pneumologia"
    ],
    "tip": "TEP: Wells baixo/intermediário + D-dímero normal exclui; alta probabilidade → angio-TC direto."
  },
  {
    "id": "fubog2027-9",
    "module": "Clínica Médica",
    "text": "A Doença Pulmonar Obstrutiva (DPOC) caracteriza-se por limitação crônica ao fluxo aéreo, geralmente progressiva e associada a uma resposta inflamatória anormal dos pulmões a partículas ou gases nocivos. O diagnóstico baseia-se na espirometria, e o tratamento visa à melhora dos sintomas, da tolerância ao exercício e à prevenção de exacerbações. Sobre a classificação e o manejo da DPOC, é CORRETO afirmar:",
    "options": [
      "O uso de corticosteroides inalatórios está indicado como monoterapia para pacientes com sintomas leves, visando a expansão da capacidade vital forçada por meio da lise das fibras elásticas",
      "A presença de relação VEF1/CVF (índice de Tiffeneau) pós-broncodilatador inferior a 0,7 confirma a limitação ao fluxo aéreo, sendo a cessação do tabagismo a intervenção que comprovadamente reduz a mortalidade",
      "A oxigenoterapia domiciliar prolongada é prescrita para pacientes com PaO₂ superior a 70 mmHg em repouso, com o objetivo de evitar o surgimento de policitemia e hipertensão pulmonar",
      "Os broncodilatadores de curta ação representam a base do tratamento de manutenção para o grupo D de GOLD, sendo administrados em horários fixos para prevenir a hipertensão pulmonar"
    ],
    "correctAnswer": 1,
    "explanation": "O diagnóstico de DPOC exige espirometria com relação VEF1/CVF pós-broncodilatador < 0,70, confirmando obstrução persistente. A cessação do tabagismo é a intervenção que mais altera a história natural, reduzindo o declínio da função pulmonar e a mortalidade (junto com a oxigenoterapia domiciliar em hipoxêmicos).",
    "commentary": "Corticoide inalatório em monoterapia (A): não é recomendado na DPOC; quando indicado (eosinofilia, exacerbações), associa-se a broncodilatadores de longa ação.\n\nOxigênio domiciliar com PaO₂ > 70 mmHg (C): a indicação é PaO₂ ≤ 55 mmHg (ou ≤ 59 com cor pulmonale ou policitemia).\n\nBroncodilatadores de curta ação como base no grupo D/E (D): a manutenção usa broncodilatadores de longa ação (LAMA, LABA); os de curta ação são de resgate.",
    "reference": "GOLD 2024 Report; Sociedade Brasileira de Pneumologia e Tisiologia – Diretrizes de DPOC (2022)",
    "tags": [
      "DPOC",
      "espirometria",
      "cessação do tabagismo",
      "pneumologia"
    ],
    "tip": "DPOC: VEF1/CVF < 0,7 pós-BD. Reduzem mortalidade: parar de fumar e O₂ domiciliar em hipoxêmicos."
  },
  {
    "id": "fubog2027-10",
    "module": "Clínica Médica",
    "text": "O tratamento do Infarto Agudo do Miocárdio (IAM) com supradesnivelamento do segmento ST baseia-se na reperfusão miocárdica imediata para limitar a área de necrose e reduzir complicações mecânicas e elétricas. O tempo decorrido entre o início dos sintomas e a abertura da artéria culpada é o principal determinante do prognóstico a curto e longo prazos. Sobre as estratégias de reperfusão, é CORRETO afirmar:",
    "options": [
      "O tratamento de suporte inclui a administração de oxigênio suplementar a todos os pacientes, mesmo aos com saturação acima de 95%, visando à redução da resistência vascular coronariana por hiperóxia",
      "O uso de fibrinolíticos está indicado para pacientes com início dos sintomas há mais de 24 horas, sendo a presença de acidente vascular cerebral isquêmico recente uma contraindicação relativa",
      "A intervenção coronária percutânea primária é a estratégia preferencial quando pode ser realizada em até 120 minutos após o primeiro contato médico em centros capacitados",
      "O ácido acetilsalicílico deve ser evitado nas primeiras horas do atendimento para permitir a realização de testes de coagulação, sendo a varfarina o antiagregante de escolha na sala de emergência"
    ],
    "correctAnswer": 2,
    "explanation": "No IAM com supradesnível de ST, a angioplastia primária é a estratégia de reperfusão preferencial quando pode ser feita em até 120 minutos do primeiro contato médico (tempo porta-balão ideal ≤ 90 minutos) em centro capacitado. Se esse prazo não puder ser cumprido, faz-se fibrinólise em até 30 minutos (porta-agulha), dentro de 12 horas do início dos sintomas.",
    "commentary": "Oxigênio para todos, mesmo com SatO₂ > 95% (A): só se indica O₂ com SatO₂ < 90%; a hiperóxia não traz benefício e pode ser prejudicial.\n\nFibrinólise após 24 horas (B): a fibrinólise é indicada até 12 horas; AVC isquêmico recente (< 3 meses) é contraindicação absoluta.\n\nEvitar AAS e usar varfarina como antiagregante (D): o AAS deve ser dado imediatamente; varfarina é anticoagulante, não antiagregante.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz de IAM com supradesnível do ST (2015); ESC 2023 ACS Guidelines",
    "tags": [
      "infarto agudo do miocárdio",
      "angioplastia primária",
      "fibrinólise",
      "síndrome coronariana aguda",
      "cardiologia"
    ],
    "tip": "IAMCSST: angioplastia se ≤ 120 min do primeiro contato; senão, fibrinólise em ≤ 30 min."
  },
  {
    "id": "fubog2027-11",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 52 anos, etilista crônico, apresenta dor abdominal em barra, de forte intensidade, em andar superior do abdome, com irradiação para o dorso, acompanhada de múltiplos episódios de vômitos. Laboratorialmente, apresenta amilase e lipase três vezes acima do limite superior da normalidade, com hematócrito de 48% e ureia elevada. A tomografia de abdome demonstra edema glandular difuso e borramento da gordura peripancreática, sem coleções. Sobre a abordagem terapêutica inicial da pancreatite aguda, é CORRETO afirmar:",
    "options": [
      "A ressuscitação volêmica precoce com cristaloides isotônicos (preferencialmente ringer lactato), guiada por metas clínicas e laboratoriais de perfusão, constitui a base do tratamento inicial da pancreatite aguda, evitando-se sobrecarga volêmica",
      "O uso de antibióticos profiláticos de amplo espectro é indicado para os casos de etiologia alcoólica, visando à esterilização do ducto de Wirsung para prevenir a formação de pseudocistos",
      "A dieta zero é mantida por, no mínimo, sete dias para garantir o repouso enzimático completo, sendo a nutrição parenteral total a via preferencial para evitar a translocação bacteriana",
      "A realização de colangiopancreatografia retrógrada endoscópica é mandatória nas primeiras 12 horas, visando à drenagem de detritos proteicos acumulados no lúmen gástrico"
    ],
    "correctAnswer": 0,
    "explanation": "Pancreatite aguda alcoólica (dor em barra, amilase/lipase ≥ 3× o normal, TC com pancreatite edematosa), com hemoconcentração e ureia elevada (marcadores de gravidade). A base do tratamento inicial é a ressuscitação volêmica precoce com cristaloide, de preferência Ringer lactato, guiada por metas (diurese, frequência cardíaca, hematócrito, ureia), de forma moderada para evitar sobrecarga (estudo WATERFALL), além de analgesia e dieta oral precoce conforme tolerância.",
    "commentary": "Antibiótico profilático (B): não é indicado na pancreatite aguda, inclusive na necrosante; só se usa em infecção confirmada ou suspeita.\n\nJejum de 7 dias com nutrição parenteral (C): a dieta oral ou enteral precoce é preferida e reduz infecções; a parenteral fica para quem não tolera via enteral.\n\nCPRE obrigatória em 12 horas (D): a CPRE é indicada na pancreatite biliar com colangite ou obstrução persistente, não na alcoólica.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024); IAP/APA Guidelines (2013)",
    "tags": [
      "pancreatite aguda",
      "ressuscitação volêmica",
      "solução de Ringer lactato",
      "gastroenterologia"
    ],
    "tip": "Pancreatite: Ringer lactato guiado por metas, dieta precoce, sem antibiótico profilático."
  },
  {
    "id": "fubog2027-12",
    "module": "Clínica Médica",
    "text": "A hepatite B é uma infecção viral que pode evoluir para formas crônicas, cirrose e carcinoma hepatocelular, sendo o diagnóstico baseado em marcadores sorológicos e na carga viral. O manejo clínico envolve a identificação da fase da doença e a necessidade de tratamento antiviral para suprimir a replicação do vírus. Sobre a interpretação sorológica da hepatite B, é CORRETO afirmar:",
    "options": [
      "O anticorpo anti-HBc da classe IgM é o marcador de cronicidade da infecção, permanecendo elevado por décadas após a resolução clínica da icterícia obstrutiva",
      "O marcador HBeAg positivo correlaciona-se com baixa replicação viral e baixo risco de transmissão, sendo encontrado predominantemente em pacientes na fase de portador inativo",
      "A presença isolada do anticorpo anti-HBs em pacientes sem histórico de infecção prévia indica imunidade conferida pela vacinação, com proteção contra o antígeno de superfície",
      "O antígeno HBsAg negativo associado ao anti-HBc total positivo define a infecção aguda em atividade, sendo necessária a biópsia hepática imediata para descartar a coinfecção pelo vírus D"
    ],
    "correctAnswer": 2,
    "explanation": "Na sorologia da hepatite B, o anti-HBs isolado (com HBsAg e anti-HBc negativos) indica imunidade vacinal; quando associado ao anti-HBc total positivo, indica imunidade por infecção prévia curada. Títulos ≥ 10 mUI/mL são considerados protetores.",
    "commentary": "Anti-HBc IgM como marcador de cronicidade (A): o anti-HBc IgM indica infecção aguda (ou reativação); o que persiste por décadas é o anti-HBc IgG/total.\n\nHBeAg com baixa replicação e portador inativo (B): o HBeAg indica alta replicação e alta infectividade; o portador inativo é HBeAg negativo com anti-HBe positivo.\n\nHBsAg negativo + anti-HBc total positivo como infecção aguda (D): esse padrão sugere infecção passada (com ou sem anti-HBs) ou a “janela imunológica”; não exige biópsia.",
    "reference": "Ministério da Saúde – PCDT para Hepatite B e Coinfecções (2023)",
    "tags": [
      "hepatite B",
      "marcadores sorológicos",
      "anti-HBs",
      "hepatologia"
    ],
    "tip": "Anti-HBs isolado = vacina; anti-HBs + anti-HBc = infecção curada; anti-HBc IgM = aguda."
  },
  {
    "id": "fubog2027-13",
    "module": "Clínica Médica",
    "text": "A tempestade tireoidiana é uma emergência endócrina caracterizada pela exacerbação grave dos sintomas do hipertireoidismo, frequentemente desencadeada por eventos agudos como infecções ou cirurgias. O reconhecimento clínico baseia-se em critérios de disfunção orgânica, como febre, taquicardia e alterações do sistema nervoso central. Sobre o tratamento da crise tireotóxica, é CORRETO afirmar:",
    "options": [
      "Os betabloqueadores, como o propranolol, atuam apenas na redução da pressão arterial diastólica, sem interferir nas manifestações adrenérgicas do sistema cardiovascular",
      "O uso de iodo inorgânico precede em duas horas a administração das tionamidas, para evitar que o iodo atue como substrato adicional para a síntese de novos hormônios tireoidianos na glândula",
      "A reposição de glicocorticoides é contraindicada devido ao risco de mascarar a febre, sendo o uso de ácido acetilsalicílico a medida de escolha para o controle da temperatura corporal",
      "O Propiltiouracil (PTU) é preferível ao metimazol no manejo agudo por inibir a síntese hormonal e, adicionalmente, bloquear a conversão periférica de tiroxina (T4) em tri-iodotironina (T3)"
    ],
    "correctAnswer": 3,
    "explanation": "Na tempestade tireoidiana, o propiltiouracil é preferido ao metimazol na fase aguda porque, além de bloquear a síntese hormonal, inibe a conversão periférica de T4 em T3 (desiodase tipo 1). Associam-se betabloqueador (propranolol, que também reduz a conversão), iodo inorgânico (pelo menos 1 hora após a tionamida), glicocorticoide (hidrocortisona) e medidas de suporte, além do tratamento do fator desencadeante.",
    "commentary": "Betabloqueador só reduz a diastólica (A): o propranolol controla taquicardia, tremor e demais manifestações adrenérgicas.\n\nIodo duas horas antes da tionamida (B): a ordem é inversa — primeiro a tionamida, depois o iodo, para que ele não sirva de substrato.\n\nCorticoide contraindicado e AAS para a febre (C): o corticoide é recomendado; o AAS é evitado porque desloca T4 da proteína de ligação e aumenta o hormônio livre.",
    "reference": "ATA Guidelines for Hyperthyroidism and Other Causes of Thyrotoxicosis (2016); SBEM",
    "tags": [
      "tempestade tireoidiana",
      "hipertireoidismo",
      "propiltiouracil",
      "emergência endocrinológica"
    ],
    "tip": "Tempestade: PTU, depois iodo (≥ 1 h), propranolol e hidrocortisona; nada de AAS."
  },
  {
    "id": "fubog2027-14",
    "module": "Clínica Médica",
    "text": "Paciente de 28 anos relata episódios de ptose palpebral bilateral e diplopia que pioram ao final do dia e melhoram após períodos de repouso. Recentemente, passou a apresentar dificuldade para mastigar e fraqueza em membros superiores ao realizar atividades de rotina, como pentear o cabelo. O exame físico demonstra fatigabilidade muscular após esforço repetido, sem alterações de sensibilidade ou de reflexos osteotendíneos. Diante da suspeita de distúrbio da junção neuromuscular, é CORRETO afirmar:",
    "options": [
      "A presença de timoma em exames de imagem do mediastino é um achado raro que contraindica a realização de timectomia, sendo o uso de ciclosporina o método para estabilizar o volume tumoral",
      "O tratamento sintomático inicial fundamenta-se no uso de inibidores irreversíveis da acetilcolinesterase, sendo a atrofia muscular progressiva o sinal clínico que indica a realização de plasmaférese",
      "A fisiopatologia envolve a produção de autoanticorpos contra os receptores nicotínicos de acetilcolina na placa motora pós-sináptica, resultando em falha na transmissão do potencial de ação",
      "O teste do gelo promove o bloqueio dos canais de cálcio voltagem-dependentes na membrana pré-sináptica, resultando no agravamento da ptose palpebral em pacientes com doença ativa"
    ],
    "correctAnswer": 2,
    "explanation": "Ptose e diplopia flutuantes que pioram ao fim do dia, fraqueza bulbar e proximal com fatigabilidade, sem alterações sensitivas ou de reflexos: miastenia gravis. A fisiopatologia é autoimune, com anticorpos contra os receptores nicotínicos de acetilcolina da membrana pós-sináptica (ou contra MuSK/LRP4), reduzindo o número de receptores funcionais e causando falha da transmissão neuromuscular.",
    "commentary": "Timoma raro e contraindicando timectomia (A): o timoma ocorre em cerca de 10–15% dos casos e é indicação de timectomia.\n\nInibidores irreversíveis e atrofia como indicação de plasmaférese (B): usa-se piridostigmina, inibidor reversível; a plasmaférese é para crise miastênica ou preparo cirúrgico, e atrofia não é típica.\n\nTeste do gelo bloqueando canais de cálcio e piorando a ptose (D): o frio reduz a atividade da acetilcolinesterase e melhora a ptose.",
    "reference": "International Consensus Guidance for Management of Myasthenia Gravis (2020); Academia Brasileira de Neurologia",
    "tags": [
      "miastenia gravis",
      "junção neuromuscular",
      "neurologia"
    ],
    "tip": "Miastenia: anticorpo anti-receptor de ACh pós-sináptico; teste do gelo melhora a ptose."
  },
  {
    "id": "fubog2027-15",
    "module": "Clínica Médica",
    "text": "O acidente vascular cerebral isquêmico resulta da oclusão de um vaso arterial cerebral, levando à isquemia e à necrose do tecido neural dependente do suprimento vascular. O atendimento hospitalar prioriza a estabilização do paciente e a avaliação da elegibilidade para terapias de reperfusão, visando à redução de sequelas funcionais. Considerando as janelas terapêuticas e as contraindicações da trombólise venosa, é CORRETO afirmar:",
    "options": [
      "Recomenda-se manter a pressão arterial sistólica acima de 220 mmHg durante a infusão do trombolítico, para garantir o fluxo sanguíneo na zona de penumbra isquêmica",
      "A administração de alteplase intravenosa pode ser realizada em até 4 horas e 30 minutos do início dos sintomas em pacientes sem contraindicações e sem evidência de hemorragia intracraniana na tomografia inicial",
      "O uso de anticoagulantes orais em paciente com tempo de protrombina/INR dentro da faixa terapêutica normal constitui contraindicação absoluta ao procedimento, devido ao risco de transformação hemorrágica",
      "A presença de hipoglicemia sintomática é uma contraindicação absoluta à trombólise venosa, mesmo que a glicemia seja corrigida e persistam os déficits neurológicos focais após a correção"
    ],
    "correctAnswer": 1,
    "explanation": "No AVC isquêmico agudo, a alteplase IV (0,9 mg/kg, máximo 90 mg) pode ser feita em até 4h30 do início dos sintomas (ou do último momento visto bem), em paciente sem contraindicações e com TC sem hemorragia. A tenecteplase é alternativa. Trombectomia mecânica é indicada em oclusão de grande vaso, até 24 horas em casos selecionados.",
    "commentary": "Manter PAS > 220 mmHg durante a trombólise (A): para trombolisar, a PA deve ser reduzida para < 185/110 mmHg e mantida < 180/105 nas 24 horas seguintes.\n\nAnticoagulante com INR normal como contraindicação absoluta (C): o uso de varfarina com INR ≤ 1,7 não contraindica a alteplase; a contraindicação é INR > 1,7 (ou uso recente de DOAC).\n\nHipoglicemia corrigida com déficit persistente como contraindicação absoluta (D): se o déficit persiste após corrigir a glicemia, a trombólise pode ser feita.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019); Sociedade Brasileira de Doenças Cerebrovasculares",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase",
      "neurologia"
    ],
    "tip": "Trombólise: até 4h30, PA < 185/110, INR ≤ 1,7, TC sem sangramento."
  },
  {
    "id": "fubog2027-16",
    "module": "Clínica Médica",
    "text": "A anemia ferropriva é a carência nutricional mais comum no mundo, sendo frequentemente secundária a perdas sanguíneas crônicas ou má absorção intestinal. O diagnóstico laboratorial fundamenta-se na análise do hemograma e do perfil de ferro, sendo o tratamento focado na reposição dos estoques corporais e na investigação da causa de base. Sobre os achados laboratoriais da anemia ferropriva, é CORRETO afirmar:",
    "options": [
      "O ferro sérico elevado associado a ferritina normal define o diagnóstico de anemia por carência nutricional em pacientes idosos com sangramento digestivo oculto de origem diverticular",
      "O aumento da saturação de transferrina acima de 50% é o achado característico da deficiência de ferro, associado a uma redução da Capacidade Total de Ligação do Ferro (TIBC)",
      "A presença de reticulocitose marcada na ausência de tratamento indica regeneração medular eficaz, sendo as hemácias tipicamente macrocíticas e hipercrômicas no esfregaço periférico",
      "A redução da ferritina sérica é o marcador laboratorial mais precoce da depleção dos estoques de ferro, ocorrendo antes mesmo da queda dos níveis de hemoglobina e do Volume Corpuscular Médio (VCM)"
    ],
    "correctAnswer": 3,
    "explanation": "Na deficiência de ferro, os estoques se esgotam antes da queda da hemoglobina: a ferritina sérica é o marcador mais precoce (e o mais específico quando baixa). Em seguida caem a saturação de transferrina e o ferro sérico, sobe a TIBC e, por fim, surgem anemia e microcitose.",
    "commentary": "Ferro sérico alto com ferritina normal (A): esse padrão não é de ferropenia.\n\nSaturação de transferrina > 50% com TIBC baixa (B): na ferropenia a saturação é baixa (< 20%) e a TIBC alta.\n\nReticulocitose e hemácias macrocíticas hipercrômicas (C): a ferropriva é hiporregenerativa, microcítica e hipocrômica.",
    "reference": "Harrison – Medicina Interna, 21ª ed.; ASH Education Program – Iron deficiency anemia",
    "tags": [
      "anemia ferropriva",
      "ferritina",
      "cinética do ferro",
      "hematologia"
    ],
    "tip": "Ferropenia: ferritina cai primeiro; depois saturação; anemia por último."
  },
  {
    "id": "fubog2027-17",
    "module": "Clínica Médica",
    "text": "O rastreamento do diabetes mellitus tipo 2 em adultos assintomáticos fundamenta-se na identificação de fatores de risco e na aplicação de exames laboratoriais padronizados. Sobre os critérios estabelecidos pelas sociedades brasileiras e internacionais, analise as afirmações:\n\nI. O teste de tolerância oral à glicose utiliza sobrecarga de 100 g de dextrosol para avaliar a fase precoce de secreção de insulina, sendo o valor de jejum acima de 90 mg/dL o ponto de corte para pré-diabetes em adultos.\nII. Hemoglobina glicada com valor igual ou superior a 6,5% confirma o diagnóstico de diabetes, sendo necessária a repetição do exame na ausência de sintomas inequívocos de hiperglicemia.\nIII. A glicemia de jejum entre 100 e 125 mg/dL define o quadro de resistência à insulina, sendo a insulinização basal a terapia inicial de escolha para evitar a progressão para microalbuminúria.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "I: o TOTG usa sobrecarga de 75 g de glicose em adultos (100 g é teste diagnóstico antigo na gestação), e o pré-diabetes pela glicemia de jejum começa em 100 mg/dL (F). II: HbA1c ≥ 6,5% é critério diagnóstico de diabetes e, sem sintomas clássicos, precisa ser confirmada (repetição ou outro exame) (V). III: glicemia de jejum entre 100 e 125 mg/dL define pré-diabetes (glicemia de jejum alterada), não “resistência insulínica”, e o tratamento inicial é mudança de estilo de vida (± metformina), nunca insulina basal (F).",
    "commentary": "Apenas III (B), I e III (C) e II e III (D): somente a proposição II está correta.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (diagnóstico e rastreamento); ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus",
      "rastreamento",
      "hemoglobina glicada",
      "pré-diabetes",
      "endocrinologia"
    ],
    "tip": "DM: GJ ≥ 126, HbA1c ≥ 6,5% ou TOTG 75 g 2 h ≥ 200 — confirmar se assintomático."
  },
  {
    "id": "fubog2027-18",
    "module": "Clínica Médica",
    "text": "A cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, resultando em alterações hemodinâmicas que levam ao surgimento de varizes esofágicas e ascite. Acerca disso, analise as sentenças:\n\n1. O rastreamento de varizes esofagogástricas é realizado por endoscopia digestiva alta em pacientes cirróticos, visando à instituição de profilaxia primária com betabloqueadores não seletivos ou ligadura elástica nas varizes de médio e grosso calibre.\n2. A administração de albumina humana está indicada logo após a realização de paracentese de pequeno volume (< 2 litros), para expansão do espaço intersticial e prevenção da encefalopatia hepática induzida pela amônia intestinal.\n3. O diagnóstico de Peritonite Bacteriana Espontânea fundamenta-se na contagem de polimorfonucleares no líquido ascítico superior a 250 células/mm³, sendo a Escherichia coli o patógeno mais frequentemente isolado.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-F, 2-F, 3-F"
    ],
    "correctAnswer": 2,
    "explanation": "1: todo cirrótico deve fazer EDA para rastrear varizes; varizes de médio/grosso calibre (ou finas com sinais vermelhos/Child C) recebem profilaxia primária com betabloqueador não seletivo ou ligadura elástica (V). 2: a albumina (6–8 g por litro retirado) é indicada após paracentese de grande volume (> 5 litros), para prevenir disfunção circulatória pós-paracentese — não após paracentese pequena nem para encefalopatia (F). 3: PBE é diagnosticada por PMN > 250 células/mm³ no líquido ascítico, e a E. coli é o agente mais comum (V).",
    "commentary": "V, F, F (A): a sentença 3 também é verdadeira.\n\nV, V, V (B): a albumina é indicada após paracentese de grande volume, não pequena.\n\nF, F, F (D): as sentenças 1 e 3 são verdadeiras.",
    "reference": "Baveno VII Consensus (2022); EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "cirrose",
      "varizes esofágicas",
      "peritonite bacteriana espontânea",
      "paracentese",
      "hepatologia"
    ],
    "tip": "Albumina após paracentese > 5 L (6–8 g/L retirado). PBE: PMN > 250; E. coli é o mais comum."
  },
  {
    "id": "fubog2027-19",
    "module": "Clínica Médica",
    "text": "A Cetoacidose Diabética é uma complicação metabólica aguda caracterizada pela tríade de hiperglicemia, acidose metabólica e cetonemia, resultante da deficiência absoluta ou relativa de insulina. O tratamento envolve a expansão volêmica, a correção eletrolítica e a insulinoterapia venosa contínua para reverter o estado catabólico. Sobre os critérios diagnósticos e o manejo da CAD, é CORRETO afirmar:",
    "options": [
      "O diagnóstico é confirmado pela presença de pH arterial inferior a 7,30 e bicarbonato sérico reduzido (< 18 mEq/L), associados à detecção de corpos cetônicos na urina ou no sangue, em paciente com hiperglicemia",
      "A reposição de potássio deve ser iniciada apenas após a normalização completa do pH sanguíneo, para evitar a arritmia cardíaca decorrente da hipercalemia induzida pela insulina",
      "O uso rotineiro de bicarbonato de sódio está indicado em pacientes com hiato aniônico elevado, visando a acelerar a recuperação da consciência e a reduzir a incidência de edema cerebral",
      "A reposição volêmica inicial da cetoacidose deve ser feita com solução salina hipotônica a 0,45% nas primeiras 2 horas, para induzir diurese osmótica e prevenir o edema cerebral"
    ],
    "correctAnswer": 0,
    "explanation": "O diagnóstico de cetoacidose diabética exige hiperglicemia (ou diabetes conhecido), acidose metabólica (pH < 7,30 e/ou bicarbonato < 18 mEq/L) e cetonemia ou cetonúria. O tratamento envolve expansão com soro fisiológico 0,9%, reposição de potássio (antes da insulina se K < 3,3) e insulina regular IV contínua.",
    "commentary": "Potássio só após normalizar o pH (B): o potássio é reposto quando K < 5,0–5,2 com diurese, durante o tratamento; se < 3,3, a insulina espera a reposição.\n\nBicarbonato de rotina (C): só se usa com pH < 6,9; o uso rotineiro não acelera a recuperação e pode piorar o edema cerebral (sobretudo em crianças).\n\nSoro 0,45% inicial (D): a expansão inicial é com soro isotônico; a solução a 0,45% pode ser usada depois, conforme o sódio corrigido.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; ADA Consensus Report on Hyperglycemic Crises (2024)",
    "tags": [
      "cetoacidose diabética",
      "emergências metabólicas",
      "endocrinologia"
    ],
    "tip": "CAD: SF 0,9% → potássio → insulina IV. Bicarbonato só com pH < 6,9."
  },
  {
    "id": "fubog2027-20",
    "module": "Clínica Médica",
    "text": "Paciente de 25 anos, sem comorbidades conhecidas, apresenta-se com febre alta (39°C), calafrios, náuseas e dor lombar intensa à direita há 24 horas. Ao exame físico, apresenta sinal de Giordano positivo à direita e estabilidade hemodinâmica, sem evidências de gestação. O exame de urina demonstra leucocitúria maciça e nitrito positivo, sugerindo infecção do trato urinário superior. Considerando o manejo da pielonefrite não complicada em pacientes jovens, é CORRETO afirmar:",
    "options": [
      "A internação hospitalar é indicada de rotina para a administração de penicilina benzatina intramuscular em dose única, sendo o repouso à medida que evita a progressão para o choque séptico",
      "A realização de tomografia computadorizada com contraste é indicada já no primeiro episódio de infecção, visando à identificação precoce de fístulas vesicovaginais congênitas",
      "O esquema terapêutico com nitrofurantoína por sete dias é a conduta de escolha para atingir concentrações terapêuticas no parênquima renal e reduzir a incidência de cicatrizes corticais",
      "O tratamento pode ser realizado em regime ambulatorial com o uso de fluoroquinolonas por via oral, desde que a paciente apresente boa tolerância à ingestão de líquidos e ausência de vômitos"
    ],
    "correctAnswer": 3,
    "explanation": "Pielonefrite aguda não complicada em mulher jovem, estável e tolerando via oral pode ser tratada ambulatorialmente com fluoroquinolona oral (ciprofloxacino 7 dias ou levofloxacino 5–7 dias) ou, conforme a resistência local, betalactâmico ou SMX-TMP guiados por cultura. Internação fica para instabilidade, vômitos que impeçam a via oral, gestação, complicações ou falha.",
    "commentary": "Internação com penicilina benzatina (A): a penicilina benzatina não trata pielonefrite e a internação não é rotina.\n\nTC já no primeiro episódio (B): imagem só em casos complicados, ausência de resposta em 48–72 horas ou suspeita de obstrução/abscesso.\n\nNitrofurantoína (C): não atinge concentração adequada no parênquima renal e não deve ser usada em pielonefrite.",
    "reference": "IDSA/ESCMID Guidelines for Uncomplicated Cystitis and Pyelonephritis in Women (2011); EAU Guidelines (2024)",
    "tags": [
      "pielonefrite aguda",
      "infecção do trato urinário",
      "fluoroquinolonas",
      "infectologia"
    ],
    "tip": "Pielonefrite: nitrofurantoína e fosfomicina não servem."
  },
  {
    "id": "fubog2027-21",
    "module": "Pediatria",
    "text": "Lactente de 3 semanas, sexo masculino, chega à emergência com vômitos não biliosos em jato após todas as mamadas há 4 dias. Ao exame: desidratado, com massa palpável em formato de oliva no hipocôndrio direito. A gasometria mostra alcalose metabólica hipoclorêmica. Diante da principal hipótese diagnóstica, a conduta CORRETA é:",
    "options": [
      "A cintilografia biliar com tecnécio deve ser feita de imediato para descartar atresia de vias biliares, sendo a reposição de potássio contraindicada pelo risco de acidose respiratória",
      "O uso de eritromicina no período neonatal é o principal fator protetor contra a hipertrofia da musculatura pilórica, sendo a fórmula espessada o tratamento de escolha",
      "A ultrassonografia mostra encurtamento do canal pilórico e redução da espessura mucosa, sendo o pneumoperitônio o critério diagnóstico",
      "O tratamento definitivo é cirúrgico (piloromiotomia à Fredet-Ramstedt), precedido da correção dos distúrbios hidroeletrolíticos e da desidratação"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 3 semanas, menino, com vômitos não biliosos em jato após as mamadas, desidratação, “oliva” palpável e alcalose metabólica hipoclorêmica (e hipocalêmica): estenose hipertrófica do piloro. O diagnóstico é confirmado por ultrassom (espessura do músculo pilórico ≥ 3–4 mm e canal ≥ 15–17 mm). A cirurgia não é emergência: primeiro corrigem-se a desidratação e os distúrbios hidroeletrolíticos (soro com cloreto e potássio), e depois se faz a piloromiotomia de Fredet-Ramstedt (aberta ou laparoscópica).",
    "commentary": "Cintilografia biliar e contraindicação ao potássio (A): atresia biliar cursa com icterícia e acolia, não com vômitos em jato; e o potássio deve ser reposto.\n\nEritromicina como protetora e fórmula espessada (B): a eritromicina neonatal é fator de risco, e o tratamento é cirúrgico.\n\nCanal encurtado com pneumoperitônio como critério (C): o ultrassom mostra canal alongado e músculo espessado; pneumoperitônio indicaria perfuração.",
    "reference": "Sociedade Brasileira de Cirurgia Pediátrica; Nelson – Tratado de Pediatria, 21ª ed.",
    "tags": [
      "estenose hipertrófica do piloro",
      "vômitos no lactente",
      "alcalose metabólica",
      "cirurgia pediátrica"
    ],
    "tip": "Vômito em jato não bilioso + oliva + alcalose hipoclorêmica: corrigir eletrólitos e depois piloromiotomia."
  },
  {
    "id": "fubog2027-22",
    "module": "Pediatria",
    "text": "A icterícia tardia do leite materno é uma das causas de hiperbilirrubinemia indireta prolongada em lactentes, com curso tipicamente benigno. Sobre isso, a alternativa que melhor descreve o seu mecanismo é:",
    "options": [
      "A interrupção definitiva da amamentação é indicada quando a bilirrubina atinge 10 mg/dL, substituindo-a por leite de vaca integral para reduzir o urobilinogênio",
      "A indicação inicial para lactentes com bilirrubina em níveis baixos é o uso de fórmula infantil à base de soja, para aporte de fitosteróis que bloqueiam o transporte biliar",
      "A beta-glucuronidase presente no leite materno promove a desconjugação da bilirrubina no lúmen intestinal, aumentando a reabsorção da fração indireta pela circulação êntero-hepática",
      "A fototerapia deve ser suspensa quando há perda de peso superior a 10%, sendo a hidratação com soro glicosado a 5% o tratamento padrão-ouro"
    ],
    "correctAnswer": 2,
    "explanation": "A icterícia do leite materno (tardia) surge após a primeira semana, com pico na 2ª–3ª semana, e pode durar até 2–3 meses, em lactente que mama bem e ganha peso. O mecanismo envolve fatores do leite humano, como a beta-glucuronidase, que desconjuga a bilirrubina no intestino e aumenta sua reabsorção pela circulação êntero-hepática. É benigna, e a amamentação deve ser mantida.",
    "commentary": "Suspender a amamentação definitivamente e oferecer leite de vaca (A): a amamentação deve ser mantida; leite de vaca integral é inadequado no primeiro ano.\n\nFórmula de soja com fitosteróis (B): não há essa indicação.\n\nSuspender fototerapia por perda de peso e soro glicosado (D): descreve de forma errada a icterícia por baixa ingestão (precoce); o tratamento é otimizar a amamentação, e soro glicosado não é padrão.",
    "reference": "Sociedade Brasileira de Pediatria – Icterícia no recém-nascido com idade gestacional ≥ 35 semanas",
    "tags": [
      "icterícia do leite materno",
      "hiperbilirrubinemia indireta",
      "aleitamento materno",
      "neonatologia"
    ],
    "tip": "Icterícia do leite materno: tardia, benigna, manter a amamentação."
  },
  {
    "id": "fubog2027-23",
    "module": "Pediatria",
    "text": "Durante a assistência em sala de parto a um recém-nascido a termo, a intervenção mais importante da reanimação neonatal é:",
    "options": [
      "O clampeamento precoce do cordão, indicado em recém-nascidos vigorosos para prevenir poliglobulia e reduzir a resistência vascular sistêmica",
      "A Ventilação com Pressão Positiva (VPP), indicada na presença de apneia, gasping ou frequência cardíaca inferior a 100 bpm",
      "A administração de adrenalina por via endotraqueal como primeiro passo após a secagem e o aquecimento, com monitorização da saturação no membro inferior esquerdo",
      "O uso de oxigênio a 100%, recomendado para o início da ventilação do recém-nascido a termo, pela rápida reversão da cianose e estabilização do pH"
    ],
    "correctAnswer": 1,
    "explanation": "Na reanimação neonatal, a ventilação com pressão positiva é o procedimento mais importante e efetivo: indicada no primeiro minuto (golden minute) se o recém-nascido estiver em apneia, com respiração irregular/gasping ou com frequência cardíaca < 100 bpm após os passos iniciais. No recém-nascido ≥ 34 semanas, a VPP é iniciada em ar ambiente (FiO₂ 21%).",
    "commentary": "Clampeamento precoce em vigorosos (A): em vigorosos, o clampeamento é tardio (1 a 3 minutos), o que melhora as reservas de ferro.\n\nAdrenalina endotraqueal como primeiro passo (C): a adrenalina só é usada se FC < 60 bpm apesar de VPP adequada e massagem; e a oximetria é feita no membro superior direito (pré-ductal).\n\nO₂ a 100% no início (D): no recém-nascido a termo começa-se com ar ambiente; oxigênio em excesso causa lesão oxidativa.",
    "reference": "Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal: diretrizes 2022",
    "tags": [
      "reanimação neonatal",
      "ventilação com pressão positiva",
      "sala de parto",
      "neonatologia"
    ],
    "tip": "Reanimação neonatal: a VPP é o procedimento mais importante; começar em ar ambiente no termo."
  },
  {
    "id": "fubog2027-24",
    "module": "Pediatria",
    "text": "Criança de 2 anos apresenta, após 2 dias de coriza e febre baixa, tosse ladrante (“de cachorro”), rouquidão e estridor inspiratório em repouso, com tiragem subcostal moderada e saturação de 95%, sem sialorreia. Nesse caso, a conduta CORRETA é:",
    "options": [
      "Indicar intubação orotraqueal de rotina nas crianças com tosse ladrante, utilizando xilocaína tópica para impedir laringoespasmo por refluxo",
      "Iniciar antibióticos de amplo espectro para erradicar o vírus parainfluenza 3, solicitando radiografia de pescoço em busca de pseudomembranas",
      "Prescrever nebulização com soro fisiológico aquecido como tratamento padrão, buscando o sinal do polegar no perfil da laringe como achado típico",
      "Administrar dexametasona por via oral ou intramuscular, para reduzir o edema subglótico e diminuir a necessidade de hospitalização"
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 2 anos com pródromo viral, tosse ladrante, rouquidão e estridor em repouso com tiragem moderada: laringotraqueobronquite viral (crupe) moderada, geralmente por parainfluenza. O tratamento é dexametasona (0,15–0,6 mg/kg VO ou IM, dose única), que reduz o edema subglótico, a gravidade e as hospitalizações; nos casos moderados/graves com estridor em repouso associa-se nebulização com adrenalina.",
    "commentary": "Intubação de rotina (A): só na falência respiratória; a grande maioria responde a corticoide e adrenalina.\n\nAntibióticos para o vírus e busca de pseudomembranas (B): a doença é viral; pseudomembranas são da traqueíte bacteriana ou difteria.\n\nNebulização com soro e sinal do polegar (C): a nebulização com soro não tem benefício; o sinal do polegar é da epiglotite (no crupe, a radiografia mostra o sinal da torre/ponta de lápis).",
    "reference": "Sociedade Brasileira de Pediatria – Crupe viral; Bjornson CL, Johnson DW. Croup, NEJM 2008",
    "tags": [
      "crupe viral",
      "laringotraqueobronquite",
      "dexametasona",
      "pneumologia pediátrica"
    ],
    "tip": "Crupe: dexametasona sempre; adrenalina nebulizada se estridor em repouso."
  },
  {
    "id": "fubog2027-25",
    "module": "Pediatria",
    "text": "No Calendário Nacional de Vacinação da criança, uma das vacinas é aplicada ao nascimento por via intradérmica, em dose única, visando prevenir formas graves de tuberculose.\n\nCom relação a essa e outras vacinas do calendário, é CORRETO afirmar:",
    "options": [
      "A vacina tríplice viral é aplicada em dose única aos 12 meses e não exige reforço posterior, por ser composta por vírus inativado",
      "A vacina contra hepatite B é administrada em dose única aos 6 meses, com reforço anual até os 5 anos para manutenção dos títulos de anti-HBs",
      "A vacina BCG é aplicada em dose única ao nascimento, por via intradérmica no deltoide direito, para prevenção das formas meníngea e miliar da tuberculose",
      "A vacina oral de rotavírus é indicada em crianças imunodeprimidas entre 6 e 24 meses, na forma fracionada, para evitar invaginação intestinal"
    ],
    "correctAnswer": 2,
    "explanation": "A BCG é aplicada em dose única ao nascimento (ou o mais cedo possível), por via intradérmica, na inserção inferior do deltoide direito, e protege contra as formas graves da tuberculose — meníngea e miliar — na infância.",
    "commentary": "Tríplice viral em dose única por vírus inativado (A): é vacina de vírus vivos atenuados, com duas doses (12 meses e 15 meses, como tetraviral).\n\nHepatite B em dose única aos 6 meses com reforço anual (B): a primeira dose é ao nascer, seguida da pentavalente aos 2, 4 e 6 meses; não há reforço anual.\n\nRotavírus para imunodeprimidos entre 6 e 24 meses (D): é vacina viva, contraindicada em imunodeprimidos, aplicada aos 2 e 4 meses (limite de 7 meses e 29 dias para a última dose).",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação da Criança (2024)",
    "tags": [
      "BCG",
      "vacinação",
      "tuberculose",
      "imunizações"
    ],
    "tip": "BCG: intradérmica no deltoide direito, ao nascer; protege de formas meníngea e miliar."
  },
  {
    "id": "fubog2027-26",
    "module": "Pediatria",
    "text": "Paciente de 7 anos apresenta febre alta, dor de garganta e cefaleia de início súbito; após 24 horas, evolui com exantema micropapular em textura de lixa, língua em morango, palidez perioral (sinal de Filatov) e acentuação nas dobras de flexão (linhas de Pastia). Sobre esse quadro clínico, é CORRETO afirmar:",
    "options": [
      "A transmissão ocorre pela picada de carrapatos do gênero Amblyomma, sendo a presença de vesículas purulentas o marcador de gravidade para choque tóxico",
      "A causa são toxinas eritrogênicas do Streptococcus pyogenes; a penicilina benzatina é indicada para prevenir febre reumática",
      "O tratamento inicial é com corticosteroides em altas doses para evitar descamação laminar, com biópsia para diferenciar de síndrome de Kawasaki",
      "A vacinação com toxoide estreptocócico é indicada para contatos domiciliares, e o repouso por 30 dias previne a progressão para artrite juvenil"
    ],
    "correctAnswer": 1,
    "explanation": "Febre, faringite, exantema micropapular áspero (em lixa), língua em framboesa, palidez perioral (Filatov) e linhas de Pastia: escarlatina, causada por toxinas eritrogênicas (pirogênicas) do Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A). O tratamento com penicilina (benzatina IM dose única ou amoxicilina oral por 10 dias) erradica o estreptococo e previne a febre reumática.",
    "commentary": "Transmissão por carrapato (A): isso é a febre maculosa; a escarlatina se transmite por gotículas.\n\nCorticoide em altas doses e biópsia (C): não há indicação; o tratamento é antibiótico.\n\nToxoide estreptocócico e repouso de 30 dias (D): não existe vacina contra o estreptococo do grupo A em uso, e o repouso não previne doença.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria, 5ª ed.",
    "tags": [
      "escarlatina",
      "estreptococo",
      "febre reumática",
      "doenças exantemáticas"
    ],
    "tip": "Escarlatina: penicilina previne febre reumática."
  },
  {
    "id": "fubog2027-27",
    "module": "Pediatria",
    "text": "Sobre a doença mão-pé-boca na infância, analise as afirmações:\n\nI. O agente etiológico principal é o Coxsackie A16, com tratamento focado no controle sintomático da dor e na manutenção da hidratação oral.\nII. A transmissão é hematogênica por vetores artrópodes, sendo o aciclovir venoso o tratamento padrão para evitar progressão para herpangina bolhosa.\nIII. O período de transmissibilidade encerra-se com o surgimento das crostas melicéricas, exigindo isolamento respiratório por 30 dias para retorno escolar.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "I: a doença mão-pé-boca é causada principalmente pelo Coxsackie A16 (e enterovírus 71, Coxsackie A6), e o tratamento é sintomático — analgesia e hidratação (V). II: a transmissão é fecal-oral e por secreções respiratórias e contato com as vesículas, não por vetores, e não há indicação de aciclovir (F). III: a eliminação viral nas fezes persiste por semanas; as lesões são vesículas, não crostas melicéricas (típicas do impetigo), e não se exige isolamento de 30 dias (F).",
    "commentary": "Apenas II (B), I e III (C) e II e III (D): somente a proposição I está correta.",
    "reference": "Sociedade Brasileira de Pediatria – Doença mão-pé-boca: nota técnica",
    "tags": [
      "doença mão-pé-boca",
      "enterovírus",
      "coxsackievírus",
      "infectologia pediátrica"
    ],
    "tip": "Mão-pé-boca: Coxsackie A16, fecal-oral e respiratória, tratamento sintomático."
  },
  {
    "id": "fubog2027-28",
    "module": "Pediatria",
    "text": "Um dos grandes avanços da pediatria moderna foi a compreensão de que a composição do leite materno se adapta às necessidades do lactente em cada fase. Acerca dessa fisiologia, analise as sentenças:\n\n1. O colostro tem alta concentração de proteínas e imunoglobulinas (principalmente IgA), sendo o baixo teor de gordura uma característica que facilita a digestão nos primeiros dias de vida.\n2. O leite anterior é rico em água e carboidratos e garante hidratação, enquanto o leite posterior tem maior densidade lipídica, contribuindo para saciedade e ganho de peso.\n3. A suplementação universal de ferro é iniciada na primeira hora de vida em todos os recém-nascidos, para corrigir a baixa biodisponibilidade do ferro no leite humano.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-F, 2-F, 3-F"
    ],
    "correctAnswer": 0,
    "explanation": "1: o colostro é rico em proteínas, imunoglobulinas (sobretudo IgA secretora), leucócitos e fatores de proteção, com menos gordura e lactose que o leite maduro (V). 2: o leite do início da mamada (anterior) tem mais água e carboidratos; o do fim (posterior) é mais rico em gordura, dando saciedade e ganho de peso — por isso a mama deve ser esvaziada (V). 3: o ferro do leite humano tem alta biodisponibilidade; a suplementação profilática no lactente a termo começa aos 3 (SBP) ou 6 meses (MS), não na primeira hora (F).",
    "commentary": "V, V, V (B): a suplementação de ferro não começa na primeira hora de vida.\n\nV, F, F (C) e F, F, F (D): as sentenças 1 e 2 estão corretas.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 23 (aleitamento materno); SBP – Consenso sobre anemia ferropriva (2021)",
    "tags": [
      "aleitamento materno",
      "composição do leite materno",
      "colostro",
      "puericultura"
    ],
    "tip": "Leite posterior: mais gordura e saciedade. Ferro profilático: a partir de 3–6 meses."
  },
  {
    "id": "fubog2027-29",
    "module": "Pediatria",
    "text": "A prevenção das carências de micronutrientes é um dos pilares recomendações da Sociedade Brasileira de Pediatria, é CORRETO afirmar:",
    "options": [
      "A introdução de sucos cítricos dispensa a suplementação vitamínica em prematuros, sendo a absorção do cálcio mediada pela ferritina do intestino grosso",
      "O ferro elementar é indicado a partir dos 12 meses em lactentes a termo com peso adequado, na dose de 10 mg/kg/dia para prevenir raquitismo",
      "A suplementação profilática de vitamina D é iniciada na primeira semana de vida em todos os lactentes em aleitamento materno, na dose de 400 UI/dia durante o primeiro ano",
      "O leite de vaca integral é a principal fonte de ferro para menores de 6 meses, sendo a lactoferrina o fator que garante biodisponibilidade de 100%"
    ],
    "correctAnswer": 2,
    "explanation": "A Sociedade Brasileira de Pediatria recomenda vitamina D profilática de 400 UI/dia a partir da primeira semana de vida até 12 meses (e 600 UI/dia de 12 a 24 meses), para lactentes em aleitamento materno ou com fórmula em volume insuficiente, já que o leite humano tem pouca vitamina D.",
    "commentary": "Sucos cítricos dispensando vitaminas em prematuros (A): os prematuros precisam de suplementação; a ferritina não medeia absorção de cálcio.\n\nFerro aos 12 meses na dose de 10 mg/kg para prevenir raquitismo (B): a profilaxia é de 1 mg/kg/dia a partir de 3 meses (termo) e o ferro não previne raquitismo.\n\nLeite de vaca integral como fonte de ferro (D): o leite de vaca é pobre em ferro, causa micro-hemorragias intestinais e não deve ser dado antes de 12 meses.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Suplementação de Vitaminas e Minerais (2024)",
    "tags": [
      "vitamina D",
      "suplementação",
      "micronutrientes",
      "puericultura"
    ],
    "tip": "Vitamina D: 400 UI/dia desde a 1ª semana até 1 ano."
  },
  {
    "id": "fubog2027-30",
    "module": "Pediatria",
    "text": "O ressurgimento do sarampo em algumas regiões tornou essencial o reconhecimento clínico precoce da doença. Sobre suas manifestações clínicas, é CORRETO afirmar:",
    "options": [
      "O período de incubação é de 48 horas após o contato com secreções gástricas, sendo a vacinação com vírus inativado a forma de bloqueio em gestantes suscetíveis",
      "O exantema inicia-se pelas extremidades inferiores com progressão centrípeta, e a presença de vesículas umbilicadas confirma panencefalite esclerosante",
      "A vitamina A em altas doses é contraindicada em crianças desnutridas com acometimento pulmonar, pelo risco de aumento da replicação bacteriana alveolar",
      "As manchas de Koplik surgem na mucosa oral durante o pródromo e precedem o exantema maculopapular morbiliforme, sendo patognomônicas da doença"
    ],
    "correctAnswer": 3,
    "explanation": "No sarampo, após incubação de cerca de 10–12 dias, há pródromo com febre alta, tosse, coriza e conjuntivite; ao fim do pródromo surgem as manchas de Koplik (pontos brancos na mucosa jugal), patognomônicas, que precedem o exantema maculopapular morbiliforme de progressão craniocaudal.",
    "commentary": "Incubação de 48 horas e vacina inativada em gestantes (A): a incubação é de 7–21 dias; a vacina é de vírus vivo e contraindicada na gestação.\n\nExantema iniciando nos membros inferiores e vesículas confirmando PEES (B): o exantema é craniocaudal; a panencefalite esclerosante subaguda é complicação tardia, sem relação com vesículas.\n\nVitamina A contraindicada em desnutridos (C): a vitamina A é recomendada para todas as crianças com sarampo e reduz mortalidade, sobretudo em desnutridas.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde, 6ª ed. (sarampo)",
    "tags": [
      "sarampo",
      "manchas de Koplik",
      "doenças exantemáticas",
      "vigilância epidemiológica"
    ],
    "tip": "Sarampo: Koplik antes do exantema; vitamina A para todos."
  },
  {
    "id": "fubog2027-31",
    "module": "Pediatria",
    "text": "Lactente de 2 meses, a termo, com peso adequado e em aleitamento materno exclusivo, apresenta palidez discreta em consulta de rotina, sem outras alterações. O hemograma revela hemoglobina de 10 g/dL, com índices hematimétricos normais e reticulócitos baixos. O mecanismo mais provável para esse achado é:",
    "options": [
      "O aumento da oxigenação tecidual após o nascimento suprime a eritropoetina, reduzindo temporariamente a eritropoese até que novos estímulos medulares sejam reativados",
      "Trata-se de indicação de transfusão de concentrado de hemácias, sendo a esplenectomia a conduta para evitar sobrecarga hídrica no ventrículo direito",
      "É causado por deficiência de vitamina B12 pelo consumo de leite de cabra, e a reposição de ácido fólico restaura a síntese de globina",
      "Há hemólise por anticorpos maternos, evidenciada por corpúsculos de Heinz no esfregaço, sendo a fototerapia o tratamento da anemia macrocítica"
    ],
    "correctAnswer": 0,
    "explanation": "Lactente a termo de 2 meses, saudável, com Hb de 10 g/dL, índices normais e reticulócitos baixos: anemia fisiológica do lactente. Após o nascimento, a oxigenação aumenta, a eritropoetina cai e a produção de hemácias diminui, enquanto as hemácias fetais (de vida mais curta) são destruídas e o volume sanguíneo cresce. O nadir ocorre entre 8 e 12 semanas (Hb ~9–11 g/dL), sem necessidade de tratamento.",
    "commentary": "Transfusão e esplenectomia (B): é condição fisiológica, sem indicação de intervenção.\n\nDeficiência de B12 pelo leite de cabra (C): o leite de cabra causa deficiência de folato (e anemia megaloblástica), e o lactente está em aleitamento exclusivo.\n\nHemólise com corpúsculos de Heinz e fototerapia (D): não há sinais de hemólise; corpúsculos de Heinz sugerem deficiência de G6PD.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria; Nelson – Tratado de Pediatria",
    "tags": [
      "anemia fisiológica do lactente",
      "eritropoetina",
      "hematologia pediátrica"
    ],
    "tip": "Anemia fisiológica: nadir entre 8 e 12 semanas no termo; não tratar."
  },
  {
    "id": "fubog2027-32",
    "module": "Pediatria",
    "text": "A infecção do trato urinário é causa frequente de febre sem sinal localizatório em lactentes e exige coleta de urina com rigor técnico. O método preferencial para confirmação microbiológica em lactentes sem controle esfincteriano é:",
    "options": [
      "Urocultura de saco coletor adesivo, por apresentar alto valor preditivo positivo e permitir tratamento imediato com ceftriaxona diante de crescimento bacteriano",
      "Urocultura por cateterismo vesical ou punção suprapúbica, devido ao alto risco de contaminação do saco coletor",
      "Ultrassonografia de rins e vias urinárias inicial e cintilografia com DMSA para identificar fístulas ureterovaginais neonatais",
      "Profilaxia antibiótica prolongada após o primeiro episódio de cistite, para induzir tolerância imunológica aos sorotipos patogênicos de Proteus"
    ],
    "correctAnswer": 1,
    "explanation": "Em lactentes sem controle esfincteriano, a urina para cultura deve ser colhida por cateterismo vesical ou punção suprapúbica. O saco coletor tem alta taxa de contaminação (falsos positivos de até 85%): um resultado negativo ajuda a afastar ITU, mas um positivo não deve ser usado para confirmar o diagnóstico.",
    "commentary": "Saco coletor com alto valor preditivo positivo (A): o valor preditivo positivo é baixo pela contaminação.\n\nUltrassom e DMSA para fístulas ureterovaginais (C): os exames de imagem são feitos após o diagnóstico, para investigar malformações; não confirmam a infecção.\n\nProfilaxia após a primeira cistite para induzir tolerância (D): profilaxia não induz tolerância e não é indicada de rotina após o primeiro episódio.",
    "reference": "Sociedade Brasileira de Pediatria – Infecção do trato urinário (2021); AAP Clinical Practice Guideline (2011, reafirmada 2016)",
    "tags": [
      "infecção do trato urinário",
      "coleta de urina",
      "febre sem sinais localizatórios",
      "nefrologia pediátrica"
    ],
    "tip": "Lactente: urocultura por sonda ou punção; saco coletor só vale se negativo."
  },
  {
    "id": "fubog2027-33",
    "module": "Pediatria",
    "text": "No tratamento de manutenção da asma persistente em crianças, a terapia de primeira escolha é:",
    "options": [
      "Corticosteroides inalatórios em baixa dose, que reduzem a inflamação brônquica e a necessidade de resgate com broncodilatadores",
      "Beta-2 agonistas de curta ação em horários fixos, para prevenir remodelamento das vias aéreas, preferindo-se a via oral à inalatória em menores de 5 anos",
      "Imunoterapia com veneno de himenópteros iniciada durante as crises agudas de sibilância, bloqueando a liberação de histamina pelos receptores muscarínicos",
      "Prática exclusiva de natação como atividade física, com espirometria diária em domicílio para ajuste da aminofilina venosa"
    ],
    "correctAnswer": 0,
    "explanation": "O tratamento de manutenção de primeira escolha na asma persistente da criança é o corticoide inalatório em dose baixa, que reduz a inflamação brônquica, as exacerbações, as internações e o uso de broncodilatador de resgate. Em maiores de 6 anos (e adolescentes), a GINA também admite budesonida-formoterol como manutenção e resgate.",
    "commentary": "Beta-2 de curta ação em horário fixo, preferindo via oral (B): o SABA é de resgate, a via inalatória é preferível em todas as idades e o uso regular não previne remodelamento.\n\nImunoterapia com veneno de himenópteros nas crises (C): é tratamento para alergia a picadas de insetos, não para asma; e nunca se inicia em crise.\n\nNatação exclusiva e aminofilina venosa (D): não é tratamento de manutenção; aminofilina não é recomendada de rotina.",
    "reference": "GINA 2024; Sociedade Brasileira de Pediatria – Asma na infância",
    "tags": [
      "asma",
      "corticoide inalatório",
      "pneumologia pediátrica"
    ],
    "tip": "Asma persistente na criança: corticoide inalatório em dose baixa."
  },
  {
    "id": "fubog2027-34",
    "module": "Pediatria",
    "text": "Lactente de 9 meses apresenta dor abdominal intermitente, puxa os membros inferiores e chora inconsolavelmente, alternando com períodos de letargia. Nas últimas 2 horas, apresentou vômitos e evacuou fezes em “geleia de morango”. Diante da principal hipótese diagnóstica, a conduta adequada é:",
    "options": [
      "Antibióticos orais como tratamento definitivo da infecção apendicular por rotavírus, com apendicectomia para impedir recidiva do prolapso hemorroidário",
      "Laxantes osmóticos para facilitar a eliminação do segmento invaginado, associados a biópsia retal para descartar megacólon agangliônico",
      "Ultrassonografia abdominal (sinal do alvo ou pseudorrim) para confirmação e redução por enema (hidrostático ou pneumático) como terapia inicial em casos não complicados",
      "Colonoscopia de urgência para identificar pólipos adenomatosos, com dieta rica em fibras para reverter a isquemia mesentérica superior"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 9 meses com dor em cólica intermitente (encolhe as pernas e chora), letargia entre as crises, vômitos e fezes em “geleia de morango”: invaginação intestinal. O diagnóstico é confirmado por ultrassonografia (sinal do alvo no corte transversal e do pseudorrim no longitudinal), e o tratamento inicial, sem peritonite, perfuração ou choque, é a redução por enema hidrostático ou pneumático guiado por imagem. A cirurgia fica para falha ou complicações.",
    "commentary": "Antibiótico e apendicectomia (A): não há infecção apendicular; a hipótese é invaginação.\n\nLaxantes e biópsia retal (B): laxantes estão contraindicados na obstrução; biópsia retal é para Hirschsprung.\n\nColonoscopia de urgência e fibras (D): não é o método diagnóstico nem terapêutico da invaginação.",
    "reference": "Sociedade Brasileira de Cirurgia Pediátrica; ESPR/ESPGHAN – Intussusception",
    "tags": [
      "invaginação intestinal",
      "sinal do alvo",
      "abdome agudo pediátrico",
      "cirurgia pediátrica"
    ],
    "tip": "Invaginação: USG com sinal do alvo e redução por enema."
  },
  {
    "id": "fubog2027-35",
    "module": "Pediatria",
    "text": "A convulsão febril é o distúrbio convulsivo mais comum entre 6 meses e 5 anos de idade e, na maioria das vezes, tem curso benigno. Nesse caso, uma crise é considerada simples:",
    "options": [
      "Quando exige a realização de eletroencefalograma e tomografia de crânio após o primeiro episódio, para identificar focos de calcificação por citomegalovírus",
      "Quando é generalizada, tem duração inferior a 15 minutos e não se repete no mesmo episódio febril em 24 horas",
      "Quando é tratada com fenobarbital contínuo para prevenir autismo em crianças com febre baixa, com punção lombar de rotina em pacientes acima de 5 anos",
      "Quando se previne a recorrência com antitérmicos em horários rigorosos, sendo o ácido acetilsalicílico o fármaco de escolha na infância"
    ],
    "correctAnswer": 1,
    "explanation": "Convulsão febril simples: crise generalizada, com duração inferior a 15 minutos, que não se repete em 24 horas (no mesmo episódio febril), em criança de 6 meses a 5 anos sem infecção do SNC ou distúrbio metabólico. A complexa é focal, dura ≥ 15 minutos ou recorre em 24 horas.",
    "commentary": "Exige EEG e TC após o primeiro episódio (A): a convulsão febril simples não exige EEG nem neuroimagem de rotina.\n\nFenobarbital contínuo e punção de rotina acima de 5 anos (C): anticonvulsivante contínuo não é indicado; punção lombar é considerada se houver sinais meníngeos, em menores de 12 meses não vacinados ou após antibiótico.\n\nAntitérmicos em horário fixo e AAS (D): antitérmicos não previnem recorrência; AAS é contraindicado em crianças (síndrome de Reye).",
    "reference": "AAP Clinical Practice Guideline: Febrile Seizures (2011); Sociedade Brasileira de Pediatria",
    "tags": [
      "convulsão febril",
      "crise febril simples",
      "neurologia pediátrica"
    ],
    "tip": "Crise febril simples: generalizada, < 15 min, 1 em 24 h. Não pede exames."
  },
  {
    "id": "fubog2027-36",
    "module": "Pediatria",
    "text": "Na diarreia aguda da criança, a Terapia de Reidratação Oral (TRO) continua sendo a intervenção de primeira escolha em casos leves e moderados. A característica da solução preconizada pela OMS que explica a sua eficácia é:",
    "options": [
      "A preferência pela via intravenosa em crianças com desidratação leve e sede intensa, utilizando ringer lactato para neutralizar toxinas da Giardia",
      "A manutenção de jejum por 24 horas após o início da reidratação, com fórmulas isentas de lactose para evitar desnutrição proteica",
      "A possibilidade de substituição por refrigerantes e sucos industrializados, com aporte de potássio para a contratilidade do músculo liso gástrico",
      "A baixa osmolaridade (~75 mOsm/L), que reduz o volume das fezes e a ocorrência de vômitos durante o tratamento"
    ],
    "correctAnswer": 3,
    "explanation": "A solução de reidratação oral de osmolaridade reduzida da OMS/UNICEF (cerca de 245 mOsm/L total, com sódio e glicose em 75 mmol/L cada) aproveita o cotransporte sódio-glicose do enterócito. Comparada à fórmula antiga (311 mOsm/L), reduz o volume das fezes, os vômitos e a necessidade de hidratação venosa. O enunciado se refere à concentração de 75 mmol/L de sódio e de glicose (a osmolaridade total é ~245 mOsm/L).",
    "commentary": "Via intravenosa na desidratação leve (A): a TRO é a primeira escolha; venosa só na grave ou falha da oral.\n\nJejum de 24 horas e fórmulas sem lactose (B): a alimentação deve ser mantida; fórmula sem lactose não é rotina.\n\nSubstituir por refrigerantes e sucos (C): bebidas hiperosmolares pioram a diarreia.",
    "reference": "OMS/UNICEF – Reduced osmolarity oral rehydration salts (2006); Ministério da Saúde – Manejo do paciente com diarreia",
    "tags": [
      "terapia de reidratação oral",
      "diarreia aguda",
      "solução de reidratação oral",
      "puericultura"
    ],
    "alert": "Imprecisão do enunciado: a SRO de osmolaridade reduzida tem cerca de 245 mOsm/L no total; 75 mmol/L é a concentração de sódio e de glicose. A alternativa D é a melhor resposta.",
    "tip": "SRO de baixa osmolaridade: menos fezes e menos vômitos."
  },
  {
    "id": "fubog2027-37",
    "module": "Pediatria",
    "text": "O rastreamento neonatal para hipotireoidismo congênito visa evitar sequelas irreversíveis do desenvolvimento neuropsicomotor. Sobre o tema, analise as afirmações:\n\nI. O fenótipo clássico ao nascimento inclui fontanela posterior fechada e choro agudo, sendo a ecografia cervical suficiente para confirmação diagnóstica sem necessidade de coleta de sangue venoso.\nII. A tri-iodotironina (T3) sintética é administrada por via intramuscular em dose mensal, com monitorização da glicemia de jejum como parâmetro para ajuste da dose na primeira infância.\nIII. A dosagem do TSH no teste do pezinho é o método de triagem utilizado para identificar falha na produção de tiroxina, sendo o início da reposição com levotiroxina recomendado nos primeiros dias de vida.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "I: o hipotireoidismo congênito costuma ser assintomático ao nascer; quando há sinais, incluem fontanela posterior aberta (> 0,5 cm), choro rouco, icterícia prolongada, hérnia umbilical e macroglossia; a confirmação é por TSH e T4 livre séricos (F). II: o tratamento é levotiroxina (T4) oral diária, monitorizado por TSH e T4 livre (F). III: o teste do pezinho dosa TSH (no Brasil), e a levotiroxina deve começar nas primeiras duas semanas de vida (idealmente na primeira) (V).",
    "commentary": "Apenas II (A), I e III (C) e II e III (D): só a proposição III está correta.",
    "reference": "Sociedade Brasileira de Pediatria/SBEM – Hipotireoidismo congênito: diagnóstico e tratamento; Ministério da Saúde – PCDT Hipotireoidismo Congênito",
    "tags": [
      "hipotireoidismo congênito",
      "triagem neonatal",
      "teste do pezinho",
      "levotiroxina",
      "endocrinologia pediátrica"
    ],
    "tip": "Hipotireoidismo congênito: TSH no pezinho, levotiroxina nas primeiras 2 semanas."
  },
  {
    "id": "fubog2027-38",
    "module": "Pediatria",
    "text": "A vigilância do desenvolvimento neuropsicomotor é parte obrigatória da consulta pediátrica, pois permite a detecção precoce de atrasos que podem ser trabalhados com intervenções oportunas. Acerca disso, analise as sentenças:\n\n1. O lactente atinge a sustentação cefálica completa por volta dos 3 meses de idade; a fixação do olhar e o sorriso social são marcos esperados até o fim do 2º mês.\n2. A pinça fina (polegar e indicador) é habilidade motora observada aos 6 meses, sendo o sentar sem apoio o critério para a introdução de texturas sólidas.\n3. A ansiedade de separação e o medo de estranhos surgem entre o 8º e o 9º mês, coincidindo com o início da locomoção independente (engatinhar).\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-F, 2-F, 3-F"
    ],
    "correctAnswer": 0,
    "explanation": "1: sorriso social (por volta de 2 meses) e fixação do olhar ocorrem até o fim do 2º mês; sustentação cefálica completa por volta de 3–4 meses (V). 2: a pinça fina (polegar-indicador) surge por volta de 9–10 meses, não aos 6 meses; aos 6 meses a preensão é palmar (F). 3: estranhamento e ansiedade de separação surgem por volta de 8–9 meses, junto com o engatinhar (V).",
    "commentary": "V, V, V (B) e V, F, F (C): a pinça fina não está presente aos 6 meses, e a ansiedade de separação ocorre de fato por volta de 8–9 meses.\n\nF, F, F (D): as sentenças 1 e 3 estão corretas.",
    "reference": "Ministério da Saúde – Caderneta da Criança (marcos do desenvolvimento); SBP – Manual de Puericultura",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "puericultura"
    ],
    "tip": "Pinça fina: 9–10 meses. Estranhamento: 8–9 meses."
  },
  {
    "id": "fubog2027-39",
    "module": "Pediatria",
    "text": "A puberdade é o período de transição entre a infância e a idade adulta, marcado por surgimento de caracteres sexuais secundários, estirão de crescimento e maturação gonadal. A respeito do seu desenvolvimento normal, é CORRETO afirmar:",
    "options": [
      "O aumento do volume testicular acima de 20 mL define o início da puberdade masculina, e a ginecomastia puberal é sinal de deficiência de receptores de testosterona",
      "O broto mamário (telarca) corresponde ao estágio M2 de Tanner e é o marco inicial da puberdade feminina, esperado entre 8 e 13 anos de idade",
      "A menarca sinaliza o início do estirão de crescimento, sendo a administração de estrogênio a medida indicada para aumentar a estatura final em adolescentes",
      "O surgimento de pelos pubianos antes dos 10 anos em meninos é fisiológico, sendo a prolactina o exame que diferencia puberdade central de hiperplasia adrenal"
    ],
    "correctAnswer": 1,
    "explanation": "Nas meninas, o primeiro sinal puberal é a telarca (broto mamário, M2 de Tanner), normalmente entre 8 e 13 anos. Nos meninos, o primeiro sinal é o aumento do volume testicular para 4 mL ou mais (G2), entre 9 e 14 anos.",
    "commentary": "Volume testicular > 20 mL e ginecomastia por deficiência de receptores (A): o início é com ≥ 4 mL; a ginecomastia puberal é fisiológica e transitória.\n\nMenarca sinaliza o início do estirão e estrogênio para aumentar estatura (C): a menarca ocorre após o pico do estirão; estrogênio fecha as epífises.\n\nPubarca antes de 10 anos em meninos é fisiológica e prolactina diferencia (D): pubarca antes de 9 anos em meninos é precoce; o diferencial entre causa central e adrenal usa LH, 17-OH-progesterona e idade óssea.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Adolescência; Tanner JM",
    "tags": [
      "puberdade",
      "telarca",
      "estágios de Tanner",
      "adolescência"
    ],
    "tip": "Início da puberdade: telarca (8–13 a) nas meninas; testículo ≥ 4 mL (9–14 a) nos meninos."
  },
  {
    "id": "fubog2027-40",
    "module": "Pediatria",
    "text": "Lactente de 8 meses chega ao pronto-socorro com febre alta, irritabilidade e recusa alimentar há 12 horas, evoluindo com vômitos e fontanela tensa; há petéquias em tronco e membros inferiores, e os sinais meníngeos clássicos estão ausentes. Nesse caso, a abordagem inicial CORRETA é:",
    "options": [
      "Restrição hídrica rigorosa a 10 mL/kg/dia em todos os pacientes, para prevenção de Síndrome da Secreção Inapropriada de Hormônio Antidiurético em neonatos",
      "Administração de dexametasona apenas após a 3ª dose de antibiótico para garantir lise bacteriana, com ressonância magnética dispensando a análise do líquor",
      "Vitamina K em dose única como tratamento específico da meningite por Neisseria meningitidis, com isolamento de contato por 60 dias da família",
      "Coleta de hemoculturas e punção lombar para identificação do patógeno, com início precoce de antibioticoterapia endovenosa empírica após a estabilização do paciente"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com febre, irritabilidade, vômitos, fontanela abaulada e petéquias: meningite bacteriana com possível meningococcemia (em lactentes os sinais meníngeos clássicos podem faltar). A abordagem inicial é estabilizar (ABC, acesso venoso, tratamento do choque), colher hemoculturas e fazer punção lombar se não houver contraindicação, iniciando antibiótico empírico IV imediatamente (ceftriaxona); se a punção atrasar ou estiver contraindicada (instabilidade, coagulopatia, hipertensão intracraniana), o antibiótico não espera. A dexametasona, quando indicada, é dada antes ou junto da primeira dose do antibiótico.",
    "commentary": "Restrição hídrica rigorosa para todos (A): a restrição só se justifica com SIADH comprovada; em choque, a criança precisa de volume.\n\nDexametasona após a 3ª dose e RM dispensando o líquor (B): o corticoide é dado antes ou com a primeira dose; o líquor é essencial.\n\nVitamina K como tratamento e isolamento de 60 dias (C): vitamina K não trata meningite; o isolamento respiratório é por 24 horas de antibiótico, e os contatos recebem quimioprofilaxia.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (meningites); Sociedade Brasileira de Pediatria",
    "tags": [
      "meningite bacteriana",
      "doença meningocócica",
      "febre no lactente",
      "infectologia pediátrica"
    ],
    "tip": "Suspeita de meningite: estabilizar, colher culturas e não atrasar o antibiótico."
  },
  {
    "id": "fubog2027-41",
    "module": "Cirurgia",
    "text": "Paciente de 60 anos, com diagnóstico prévio de Doença de Chagas e constipação crônica, é admitido com distensão abdominal acentuada, parada de eliminação de gases e fezes e dor abdominal, sem sinais de peritonite. A radiografia simples de abdome demonstra alça colônica vastamente dilatada, com imagem em “U” invertido (“grão de café”), sugerindo volvo de sigmoide. Considerando a abordagem inicial, é CORRETO afirmar:",
    "options": [
      "A descompressão endoscópica por colonoscopia é a manobra inicial indicada em pacientes sem sinais de peritonite, visando à detorsão da alça e à preparação para cirurgia eletiva",
      "A administração de neostigmina intravenosa é a conduta definitiva para o tratamento do volvo, sendo o sinal do “bico de pássaro” no enema opaco a contraindicação absoluta para a cirurgia",
      "A ileostomia em alça é à medida que previne a translocação bacteriana para o mediastino, sendo o uso de supositórios de glicerina o método que reduz a pressão intra-abdominal",
      "A laparotomia com sigmoidopexia é a técnica de primeira escolha para evitar a recidiva, sendo a biópsia de pele o exame que confirma a denervação mioentérica"
    ],
    "correctAnswer": 0,
    "explanation": "Volvo de sigmoide (megacólon chagásico, imagem em “U” invertido/grão de café), sem peritonite: a conduta inicial é a descompressão endoscópica (retossigmoidoscopia ou colonoscopia) com distorção da alça e passagem de sonda retal, que resolve a maioria dos casos. Como a recidiva é alta, indica-se sigmoidectomia eletiva na mesma internação, após preparo. Com peritonite, isquemia ou falha endoscópica, a cirurgia é de urgência (Hartmann).",
    "commentary": "Neostigmina como tratamento definitivo (B): neostigmina é para pseudo-obstrução (Ogilvie), sendo contraindicada na obstrução mecânica.\n\nIleostomia e supositórios (C): não tratam o volvo.\n\nSigmoidopexia como primeira escolha e biópsia de pele (D): a sigmoidopexia tem alta recidiva; o tratamento definitivo é a sigmoidectomia, e a denervação é confirmada por biópsia retal/colônica, não de pele.",
    "reference": "ASCRS Clinical Practice Guidelines for Colonic Volvulus (2021); WSES Guidelines on sigmoid volvulus (2023)",
    "tags": [
      "volvo de sigmoide",
      "megacólon chagásico",
      "doença de Chagas",
      "coloproctologia"
    ],
    "tip": "Volvo de sigmoide sem peritonite: descompressão endoscópica e sigmoidectomia eletiva."
  },
  {
    "id": "fubog2027-42",
    "module": "Cirurgia",
    "text": "A cicatrização de feridas é um processo dinâmico que envolve a interação de diversas linhagens celulares, citocinas e componentes da matriz extracelular para restaurar a integridade tecidual. Sobre a biologia da cicatrização, é CORRETO afirmar:",
    "options": [
      "A fase inflamatória é conduzida pela migração inicial de linfócitos T auxiliares para o sítio da lesão, que promovem a lise do coágulo de fibrina pela liberação de histamina",
      "O remodelamento tecidual ocorre pela conversão progressiva de colágeno maduro em fibras de elastina, garantindo que a força tensil final da cicatriz supere em cerca de 20% a resistência da pele íntegra",
      "A fase proliferativa é caracterizada pela deposição de colágeno do tipo III por fibroblastos, com formação de tecido de granulação e angiogênese mediada pelo Fator de Crescimento Endotelial Vascular (VEGF)",
      "O fechamento por segunda intenção consiste na aproximação primária das bordas com fios monofilamentares, permitindo que a epitelização ocorra de forma descendente a partir dos anexos glandulares"
    ],
    "correctAnswer": 2,
    "explanation": "Na fase proliferativa da cicatrização (cerca do 4º ao 21º dia), fibroblastos depositam colágeno tipo III, formando tecido de granulação, com angiogênese estimulada principalmente pelo VEGF, além de epitelização e início da contração por miofibroblastos.",
    "commentary": "Linfócitos T e histamina na fase inflamatória (A): a fase inflamatória começa com plaquetas e neutrófilos, seguidos de macrófagos (células-chave).\n\nRemodelamento convertendo colágeno em elastina e superando a pele íntegra (B): o colágeno III é substituído pelo tipo I, e a cicatriz atinge no máximo cerca de 80% da resistência da pele normal.\n\nSegunda intenção com aproximação das bordas (D): a segunda intenção é o fechamento espontâneo da ferida aberta, por granulação e contração; a aproximação das bordas é primeira intenção.",
    "reference": "Sabiston – Tratado de Cirurgia, 21ª ed. (cicatrização de feridas)",
    "tags": [
      "cicatrização",
      "fase proliferativa",
      "colágeno",
      "fisiologia cirúrgica"
    ],
    "tip": "Proliferativa: colágeno III, granulação, VEGF. Remodelamento: colágeno I, até 80% da força."
  },
  {
    "id": "fubog2027-43",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 25 anos, vítima de acidente automobilístico, é admitido no pronto-socorro hemodinamicamente estável após a infusão de 1.000 mL de cristaloide. A tomografia de abdome com contraste evidencia lesão hepática grau II (laceração < 3 cm, sem extravasamento ativo de contraste) e pequeno hemoperitônio. Sobre a conduta terapêutica neste caso, é CORRETO afirmar:",
    "options": [
      "A laparotomia exploradora é a conduta mandatória para todas as lesões hepáticas documentadas por imagem, com a manobra de Pringle como primeira medida para o controle do sangramento",
      "O tratamento não operatório é a conduta de escolha, devendo ser conduzido em ambiente com monitorização hemodinâmica contínua, controle clínico e laboratorial seriado e acesso imediato a imagem e terapia endovascular",
      "A arteriografia com embolização é o tratamento de escolha, mesmo na ausência de extravasamento ativo de contraste, por permitir a prevenção precoce de ressangramento tardio",
      "O empacotamento peri-hepático (“packing”) com laparotomia de controle de danos é a estratégia inicial de escolha, independentemente da estabilidade hemodinâmica, para evitar coagulopatia"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma hepático grau II em paciente hemodinamicamente estável (ou que responde à reposição), sem extravasamento de contraste: o tratamento não operatório é a escolha, com sucesso em mais de 80–90% dos casos. Exige ambiente com monitorização contínua, exames clínicos e laboratoriais seriados (hemoglobina) e acesso imediato a centro cirúrgico, tomografia e angiografia/embolização.",
    "commentary": "Laparotomia para toda lesão hepática (A): a maioria das lesões em pacientes estáveis é tratada sem cirurgia.\n\nEmbolização sem extravasamento (C): a angioembolização é indicada quando há blush ou sangramento ativo, não de rotina.\n\nPacking com controle de danos independentemente da estabilidade (D): o controle de danos é para o instável, com coagulopatia, acidose e hipotermia.",
    "reference": "WSES/AAST Liver trauma guidelines (2020); ATLS 10ª ed.",
    "tags": [
      "trauma hepático",
      "tratamento não operatório",
      "trauma abdominal"
    ],
    "tip": "Trauma de víscera sólida em paciente estável: tratamento não operatório."
  },
  {
    "id": "fubog2027-44",
    "module": "Cirurgia",
    "text": "Paciente, sexo feminino, 38 anos, apresenta dor epigástrica súbita com irradiação para o dorso, vômitos e elevação de amilase três vezes acima do limite superior da normalidade. A ultrassonografia evidencia colelitíase, via biliar principal fina e pâncreas com edema. A tomografia realizada após 72 horas classifica o quadro como Balthazar A. A paciente encontra-se em boa evolução clínica. Sobre o tratamento desta paciente, é CORRETO afirmar:",
    "options": [
      "A antibioticoterapia profilática de amplo espectro deve ser iniciada imediatamente para prevenir a necrose pancreática infectada, mantendo jejum absoluto por pelo menos 10 dias",
      "A Colangiopancreatografia Retrógrada Endoscópica (CPRE) com esfincterotomia é indicada de rotina em toda pancreatite biliar, substituindo a necessidade de tratamento cirúrgico da vesícula",
      "A colecistectomia videolaparoscópica deve ser realizada na mesma internação, após a resolução do quadro inflamatório agudo, para prevenir a recorrência de eventos biliares",
      "A drenagem percutânea do ducto de Wirsung é a conduta inicial, indicada pela elevação da amilase sérica, devendo ser mantida até a normalização enzimática"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatite aguda biliar leve (Balthazar A, boa evolução): para prevenir a recidiva de eventos biliares (que chega a 30% em semanas), recomenda-se colecistectomia videolaparoscópica na mesma internação, assim que o quadro inflamatório se resolver. Nas formas graves com coleções, a cirurgia é adiada até a resolução das coleções (cerca de 6 semanas).",
    "commentary": "Antibiótico profilático e jejum de 10 dias (A): não há indicação de antibiótico profilático, e a dieta oral deve ser precoce.\n\nCPRE de rotina substituindo a colecistectomia (B): a CPRE é indicada se houver colangite ou obstrução biliar persistente; não substitui a colecistectomia.\n\nDrenagem percutânea do Wirsung (D): conduta inexistente nesse contexto.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024); IAP/APA (2013)",
    "tags": [
      "pancreatite biliar",
      "colecistectomia",
      "colelitíase",
      "cirurgia geral"
    ],
    "tip": "Pancreatite biliar leve: colecistectomia na mesma internação."
  },
  {
    "id": "fubog2027-45",
    "module": "Cirurgia",
    "text": "O manejo inicial do paciente queimado foca na manutenção da patência das vias aéreas, na ressuscitação volêmica adequada e na prevenção da hipotermia e das infecções. Sobre o tratamento das queimaduras, é CORRETO afirmar:",
    "options": [
      "A fórmula de Parkland orienta a reposição volêmica nas primeiras 24 horas com ringer lactato, baseando-se no peso do paciente e na extensão da superfície corporal queimada",
      "A queimadura de terceiro grau caracteriza-se pela presença de bolhas tensas e dor intensa à palpação, com regeneração espontânea a partir da epiderme em cerca de sete dias",
      "A antibioticoterapia sistêmica profilática é recomendada de rotina em queimaduras maiores que 20% da superfície corporal para prevenir a colonização por Pseudomonas aeruginosa",
      "A síndrome compartimental em extremidades queimadas decorre do aumento da complacência do tecido subcutâneo, sendo a hidratação oral com soluções hipertônicas o método de escolha para a sua resolução"
    ],
    "correctAnswer": 0,
    "explanation": "A fórmula de Parkland orienta a reposição nas primeiras 24 horas do grande queimado: 4 mL × peso (kg) × %SCQ (queimaduras de 2º e 3º graus) de Ringer lactato, metade nas primeiras 8 horas e metade nas 16 horas seguintes (o ATLS 10 propõe 2 mL no adulto), ajustada pela diurese (0,5 mL/kg/h no adulto).",
    "commentary": "Terceiro grau com bolhas e dor e regeneração em 7 dias (B): bolhas e dor são do 2º grau superficial; a de 3º grau é indolor, com aspecto de couro, e exige enxerto.\n\nAntibiótico profilático sistêmico de rotina (C): não é recomendado; usa-se tratamento tópico (sulfadiazina de prata) e antibiótico só para infecção.\n\nSíndrome compartimental por maior complacência e hidratação hipertônica oral (D): decorre da escara inelástica que reduz a complacência, e o tratamento é escarotomia.",
    "reference": "ATLS 10ª ed.; Ministério da Saúde – Cartilha para tratamento de emergência das queimaduras",
    "tags": [
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica",
      "trauma"
    ],
    "tip": "Parkland: 4 mL × kg × %SCQ de Ringer lactato, metade em 8 h."
  },
  {
    "id": "fubog2027-46",
    "module": "Cirurgia",
    "text": "Paciente de 20 anos, vítima de acidente automobilístico, apresenta dor em hipocôndrio esquerdo com irradiação para o ombro (sinal de Kehr). Encontra-se hemodinamicamente estável após a infusão de 1.000 mL de cristaloides, e a tomografia demonstra lesão esplênica grau II com pequeno hemoperitônio, sem evidência de extravasamento ativo de contraste (blush). Sobre a conduta para este paciente, é CORRETO afirmar:",
    "options": [
      "A esplenectomia total de urgência é mandatória para todas as lesões esplênicas grau II, visando à prevenção da sepse fulminante pós-esplenectomia pela retirada precoce do foco de sangramento",
      "O tratamento não operatório com observação clínica rigorosa, monitorização hemodinâmica e controle laboratorial seriado é a conduta preferencial, sendo a estabilidade hemodinâmica o principal critério para a manutenção dessa estratégia",
      "A vacinação contra germes encapsulados deve ser realizada nas primeiras seis horas após o trauma, mesmo em pacientes submetidos a tratamento não operatório, pelo risco de falha tardia do baço",
      "A embolização da artéria esplênica é a técnica complementar indicada para todos os casos de lesão grau II, independentemente da presença de extravasamento ativo de contraste (blush) na tomografia"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma esplênico grau II em paciente hemodinamicamente estável, sem blush: o tratamento não operatório é a conduta preferencial, com observação clínica rigorosa, monitorização e hemoglobina seriada, em hospital com centro cirúrgico disponível. A estabilidade hemodinâmica é o principal critério para manter essa estratégia; instabilidade indica cirurgia.",
    "commentary": "Esplenectomia de urgência para todo grau II (A): a esplenectomia aumenta o risco de sepse pós-esplenectomia; a preservação é o objetivo.\n\nVacinação nas primeiras 6 horas no tratamento conservador (C): vacinas contra encapsulados são para quem perde o baço (aplicadas cerca de 14 dias após a esplenectomia).\n\nEmbolização para todos os grau II (D): é indicada com blush, pseudoaneurisma ou lesões de alto grau, não de rotina.",
    "reference": "WSES Splenic Trauma Guidelines (2017); ATLS 10ª ed.",
    "tags": [
      "trauma esplênico",
      "tratamento não operatório",
      "trauma abdominal"
    ],
    "tip": "Baço: estável → conservador; instável → cirurgia."
  },
  {
    "id": "fubog2027-47",
    "module": "Cirurgia",
    "text": "O diagnóstico da apendicite aguda baseia-se na correlação entre achados clínicos e exames complementares para a definição da conduta cirúrgica. Sobre a fisiopatologia e o diagnóstico desta condição, analise as afirmações:\n\nI. O sinal de Murphy caracteriza-se pela interrupção da inspiração profunda durante a palpação do ponto de McBurney, indicando a presença de abscesso periapendicular em alças de intestino delgado.\nII. A ultrassonografia demonstra o apêndice inflamado com diâmetro reduzido e ar em seu interior, sendo a ressonância magnética o exame inicial de escolha para pacientes com obesidade.\nIII. A obstrução do lúmen apendicular por fecálitos promove supercrescimento bacteriano e aumento da pressão intraluminal, com isquemia parietal e dor visceral periumbilical que migra para a fossa ilíaca direita quando há irritação do peritônio parietal.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "III: a obstrução do lúmen apendicular (fecálito, hiperplasia linfoide) leva a supercrescimento bacteriano, aumento de pressão, congestão e isquemia da parede; a dor inicial é visceral, periumbilical, e migra para a fossa ilíaca direita quando o peritônio parietal se inflama (V). I: o sinal de Murphy é da colecistite (palpação do hipocôndrio direito) (F). II: no ultrassom o apêndice inflamado está aumentado (> 6 mm), não reduzido; e a TC é o exame de escolha em adultos (RM é para gestantes e crianças selecionadas) (F).",
    "commentary": "Apenas I (A), apenas II (B) e I e II (D): as proposições I e II estão erradas; só a III é correta.",
    "reference": "WSES Jerusalem Guidelines – Acute appendicitis (2020)",
    "tags": [
      "apendicite aguda",
      "fisiopatologia",
      "diagnóstico por imagem",
      "abdome agudo inflamatório"
    ],
    "tip": "Apendicite: dor periumbilical que migra para FID; apêndice > 6 mm no USG."
  },
  {
    "id": "fubog2027-48",
    "module": "Cirurgia",
    "text": "O conhecimento da anatomia da região inguinal é fundamental para a correção cirúrgica eficaz das hérnias e para a minimização do risco de recidiva e de dor crônica pós-operatória. Acerca disso, análise as sentenças:\n\n1. A hérnia inguinal indireta ocorre lateralmente aos vasos epigástricos inferiores devido à persistência do conduto peritoneovaginal, sendo o tipo mais comum tanto em homens quanto em mulheres.\n2. A técnica de Lichtenstein utiliza uma tela de polipropileno para o reforço do assoalho do canal inguinal sem tensão, resultando em menores taxas de recorrência quando comparada às técnicas teciduais.\n3. O triângulo de Doom é delimitado pelos vasos deferentes e pelos vasos ilíacos externos, sendo a fixação de grampos nessa zona a medida de segurança que impede a lesão do nervo genitofemoral durante a cirurgia laparoscópica.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 3,
    "explanation": "1: a hérnia inguinal indireta passa pelo anel profundo, lateral aos vasos epigástricos inferiores, pela persistência do conduto peritoneovaginal, e é a mais comum em homens e mulheres (V). 2: a técnica de Lichtenstein usa tela de polipropileno para reforçar a parede posterior sem tensão, com menor recidiva que as técnicas teciduais (V). 3: o triângulo de Doom (ducto deferente medial e vasos espermáticos lateral) contém os vasos ilíacos externos, e nele não se devem colocar grampos — risco de lesão vascular grave; o nervo genitofemoral está no triângulo da dor (F).",
    "commentary": "V, F, F (A) e V, F, V (C): a técnica de Lichtenstein de fato reduz a recidiva.\n\nV, V, V (B): no triângulo de Doom a fixação com grampos é proibida.",
    "reference": "HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "técnica de Lichtenstein",
      "triângulo de Doom",
      "anatomia cirúrgica"
    ],
    "tip": "Triângulo de Doom: vasos ilíacos externos — nunca grampear. Triângulo da dor: nervos."
  },
  {
    "id": "fubog2027-49",
    "module": "Cirurgia",
    "text": "O câncer gástrico é neoplasia de alta incidência que exige estadiamento rigoroso para a definição do potencial de ressecabilidade e da necessidade de terapia neoadjuvante. Sobre o tratamento cirúrgico do adenocarcinoma gástrico, é CORRETO afirmar:",
    "options": [
      "A reconstrução em Y de Roux é evitada em pacientes jovens devido ao risco de refluxo biliar intenso, sendo a gastroduodenoanastomose a técnica que garante a maior área de absorção de vitamina B12",
      "A linfadenectomia D2, que inclui os linfonodos perigástricos e aqueles situados ao longo dos ramos do tronco celíaco (artérias hepáticas comum, esplênica e gástrica esquerda), é considerada padrão para o tratamento cirúrgico com intenção curativa no câncer gástrico avançado ressecável",
      "O tumor de Krukenberg representa a disseminação linfática para os linfonodos supraclaviculares esquerdos, com indicação de gastrectomia total e esofagectomia distal de urgência",
      "A classificação de Borrmann tipo IV define lesão polipoide bem delimitada na cárdia, sendo o tratamento conservador com inibidores de bomba de prótons a conduta inicial indicada"
    ],
    "correctAnswer": 1,
    "explanation": "No adenocarcinoma gástrico avançado ressecável, a cirurgia curativa é a gastrectomia (subtotal ou total, conforme a localização) com linfadenectomia D2, que inclui os linfonodos perigástricos (D1) e os das artérias gástrica esquerda, hepática comum, esplênica e tronco celíaco, retirando pelo menos 15–16 linfonodos. É o padrão recomendado pelas diretrizes ocidentais e orientais.",
    "commentary": "Evitar Y de Roux e gastroduodenoanastomose para absorção de B12 (A): a reconstrução em Y de Roux é preferida justamente por reduzir o refluxo biliar, e a absorção de B12 depende do fator intrínseco, não do tipo de anastomose.\n\nKrukenberg como metástase supraclavicular (C): Krukenberg é metástase ovariana; o linfonodo supraclavicular esquerdo é o de Virchow, e ambos indicam doença avançada.\n\nBorrmann IV como lesão polipoide (D): Borrmann IV é infiltrativa difusa (linite plástica); a polipoide é o tipo I.",
    "reference": "Japanese Gastric Cancer Treatment Guidelines (2021); NCCN Gastric Cancer; Sociedade Brasileira de Cirurgia Oncológica",
    "tags": [
      "câncer gástrico",
      "linfadenectomia D2",
      "gastrectomia",
      "cirurgia oncológica"
    ],
    "tip": "Câncer gástrico ressecável: gastrectomia com D2 (≥ 16 linfonodos)."
  },
  {
    "id": "fubog2027-50",
    "module": "Cirurgia",
    "text": "O suporte nutricional perioperatório é fundamental para reduzir as taxas de infecção de sítio cirúrgico e acelerar a recuperação funcional do paciente. Sobre a terapia nutricional no paciente cirúrgico, é CORRETO afirmar:",
    "options": [
      "A nutrição parenteral total é indicada como via preferencial em pacientes com fístulas colônicas de baixo débito, sendo a administração de glicose pura à medida que previne a síndrome de realimentação",
      "A imunonutrição com arginina e ácidos graxos ômega-3 é iniciada no pós-operatório imediato de cirurgias ambulatoriais, com a finalidade principal de reduzir aderências peritoneais em pacientes obesos",
      "O repouso digestivo prolongado por pelo menos 10 dias é a conduta padrão após anastomoses colorretais, sendo a oferta precoce de líquidos claros associada a maiores taxas de deiscência anastomótica",
      "A nutrição enteral é a via preferencial em pacientes com trato gastrointestinal íntegro e funcionante, contribuindo para a manutenção da barreira mucosa intestinal e para a redução do risco de translocação bacteriana"
    ],
    "correctAnswer": 3,
    "explanation": "Quando o trato gastrointestinal está íntegro e funcionante, a via enteral é a preferencial para o suporte nutricional: é mais fisiológica, mantém o trofismo e a barreira da mucosa intestinal, reduz a translocação bacteriana e as complicações infecciosas e é mais barata que a parenteral.",
    "commentary": "Parenteral em fístulas colônicas de baixo débito e glicose pura prevenindo realimentação (A): fístulas de baixo débito, sobretudo distais, toleram dieta enteral; e a síndrome de realimentação é prevenida com oferta calórica gradual e reposição de fósforo, potássio, magnésio e tiamina.\n\nImunonutrição em cirurgia ambulatorial para aderências (B): a imunonutrição é indicada no pré-operatório de grandes cirurgias oncológicas, não em ambulatoriais nem para aderências.\n\nRepouso digestivo de 10 dias após anastomose colorretal (C): a alimentação precoce é segura e recomendada pelos protocolos ERAS/ACERTO.",
    "reference": "ESPEN Guideline: Clinical nutrition in surgery (2021); BRASPEN; Projeto ACERTO",
    "tags": [
      "terapia nutricional",
      "nutrição enteral",
      "perioperatório",
      "cirurgia geral"
    ],
    "tip": "Se o intestino funciona, use-o: nutrição enteral."
  },
  {
    "id": "fubog2027-51",
    "module": "Cirurgia",
    "text": "Paciente de 70 anos, portador de fibrilação atrial crônica sem anticoagulação, apresenta dor abdominal súbita e intensa, desproporcional ao exame físico. Evolui em poucas horas com distensão abdominal, acidose láctica e eliminação de fezes com aspecto de “geleia de morango”. A angiotomografia confirma oclusão da artéria mesentérica superior, com sinais tomográficos de sofrimento de alça. Sobre o manejo dessa emergência, é CORRETO afirmar:",
    "options": [
      "A colonoscopia de urgência é o método de escolha para o diagnóstico da embolia arterial, permitindo a dilatação retrógrada da veia porta para reduzir a pressão hidrostática no território esplâncnico",
      "A administração de vasopressina intravenosa é indicada para promover a vasodilatação do tronco celíaco, sendo a reposição de bicarbonato à medida que impede a formação de pneumatose intestinal",
      "A laparotomia exploradora de urgência, associada a revascularização (embolectomia cirúrgica ou bypass mesentérico) e ressecção das alças inviáveis, é a conduta indicada em pacientes com sinais tomográficos ou clínicos de sofrimento de alça",
      "A heparinização plena isolada é a conduta definitiva para casos de isquemia transmural, sendo o sinal do “alvo” na tomografia o critério que indica a resolução espontânea da necrose"
    ],
    "correctAnswer": 2,
    "explanation": "Isquemia mesentérica aguda embólica (fibrilação atrial sem anticoagulação, dor desproporcional, acidose lática, fezes sanguinolentas e angio-TC com oclusão da artéria mesentérica superior e sinais de sofrimento de alça). Com sinais de peritonite ou sofrimento de alça, a conduta é laparotomia de urgência com revascularização (embolectomia ou bypass, ou técnica híbrida) e ressecção das alças inviáveis, frequentemente com second look em 24–48 horas, além de heparinização plena e ressuscitação.",
    "commentary": "Colonoscopia de urgência (A): não é método diagnóstico de embolia e não trata a oclusão.\n\nVasopressina para vasodilatação (B): a vasopressina é vasoconstritora e pioraria a isquemia; o vasodilatador usado na isquemia não oclusiva é a papaverina.\n\nHeparinização isolada como conduta definitiva na isquemia transmural (D): a necrose exige ressecção; heparina é adjuvante.",
    "reference": "ESVS Guidelines on Diseases of Mesenteric Arteries and Veins (2017); WSES Acute Mesenteric Ischemia (2022)",
    "tags": [
      "isquemia mesentérica aguda",
      "embolia mesentérica",
      "fibrilação atrial",
      "cirurgia vascular"
    ],
    "tip": "Isquemia mesentérica com sofrimento de alça: revascularizar e ressecar o que não for viável."
  },
  {
    "id": "fubog2027-52",
    "module": "Cirurgia",
    "text": "A diverticulite aguda é complicação frequente da doença diverticular dos cólons, apresentando espectro que varia de inflamação leve a peritonite. O manejo é guiado pela classificação de Hinchey e pelo estado clínico do paciente. Sobre a diverticulite aguda, é CORRETO afirmar:",
    "options": [
      "A dieta rica em sementes e cascas de frutas é o principal fator de risco para a perfuração livre, sendo o uso de anti-inflamatórios esteroidais à medida que previne a formação de abscessos hepáticos",
      "A cirurgia de Hartmann consiste na anastomose primária entre o íleo terminal e o reto superior, sendo a técnica de escolha para pacientes jovens com peritonite fecal e instabilidade hemodinâmica",
      "A colonoscopia de urgência é o método padrão para o diagnóstico da fase aguda, permitindo a cauterização de fístulas colovesicais e a redução de volvos de sigmoides associados à diverticulose",
      "O estágio Ia da classificação de Hinchey corresponde ao fleimão pericólico sem abscesso, sendo o tratamento inicial baseado em antibioticoterapia e suporte clínico, reservando-se a drenagem percutânea guiada por imagem para os abscessos maiores que 3 a 4 cm (Hinchey Ib)"
    ],
    "correctAnswer": 3,
    "explanation": "Na classificação de Hinchey modificada, o estágio Ia corresponde a inflamação pericólica/fleimão sem abscesso, e o Ib a abscesso pericólico pequeno. O Ia é tratado com antibiótico e suporte clínico (em casos selecionados não complicados, até sem antibiótico). A drenagem percutânea guiada por imagem é reservada a abscessos maiores que 3–4 cm.",
    "commentary": "Sementes e cascas como risco de perfuração (A): estudos não mostram associação de nozes, sementes e pipoca com diverticulite ou perfuração; e corticoide aumenta o risco de perfuração.\n\nHartmann como anastomose íleo-reto (B): o Hartmann é a sigmoidectomia com colostomia terminal e fechamento do coto retal, sem anastomose.\n\nColonoscopia na fase aguda (C): é contraindicada na fase aguda pelo risco de perfuração; o diagnóstico é por TC.",
    "reference": "WSES Guidelines for acute left sided colonic diverticulitis (2020); ASCRS (2020)",
    "tags": [
      "diverticulite aguda",
      "classificação de Hinchey",
      "drenagem percutânea",
      "coloproctologia"
    ],
    "tip": "Hinchey modificada: Ia fleimão; Ib abscesso pericólico; II abscesso à distância; III purulenta; IV fecal."
  },
  {
    "id": "fubog2027-53",
    "module": "Cirurgia",
    "text": "A lesão por inalação é causa importante de mortalidade em vítimas de incêndio em espaços fechados, resultando em edema de vias aéreas e toxicidade sistêmica por gases. Sobre a lesão térmica e de vias aéreas, é CORRETO afirmar:",
    "options": [
      "O monóxido de carbono provoca dissociação imediata da oxi-hemoglobina em bicarbonato de cálcio, resultando em valores de oximetria de pulso falsamente reduzidos em pacientes com hipóxia tecidual",
      "A presença de estridor inspiratório, queimaduras circunferenciais cervicais, fuligem nas vias aéreas superiores e escarro carbonáceo são indicadores de risco iminente de obstrução por edema de laringe, justificando a intubação orotraqueal protetora precoce",
      "A broncoscopia é contraindicada em pacientes com escaras faciais pelo risco de induzir a produção de surfactante ectópico, sendo a traqueostomia de urgência a primeira via de acesso em todos os casos",
      "A intoxicação por cianeto causa alcalose metabólica pelo bloqueio da síntese de colágeno mitocondrial, sendo tratada com infusão de vitamina C em altas doses por via subcutânea"
    ],
    "correctAnswer": 1,
    "explanation": "Estridor, queimaduras circunferenciais do pescoço, fuligem na via aérea e escarro carbonáceo indicam lesão inalatória com risco iminente de obstrução por edema de laringe, justificando intubação orotraqueal precoce, enquanto ainda é possível. Também se trata a intoxicação por monóxido de carbono (O₂ a 100%) e por cianeto (hidroxicobalamina).",
    "commentary": "CO causando oximetria falsamente reduzida (A): a carboxi-hemoglobina dá oximetria de pulso falsamente normal; a CO-oximetria é necessária.\n\nBroncoscopia contraindicada e traqueostomia como primeira via (C): a broncoscopia é útil para diagnóstico, e a intubação orotraqueal é a primeira opção.\n\nCianeto causando alcalose e tratado com vitamina C (D): o cianeto bloqueia a citocromo-oxidase e causa acidose lática; o antídoto é a hidroxicobalamina.",
    "reference": "ATLS 10ª ed.; American Burn Association – Inhalation injury",
    "tags": [
      "lesão inalatória",
      "queimaduras",
      "via aérea",
      "monóxido de carbono",
      "trauma"
    ],
    "tip": "CO: oximetria falsamente normal. Cianeto: acidose lática → hidroxicobalamina."
  },
  {
    "id": "fubog2027-54",
    "module": "Cirurgia",
    "text": "Paciente, sexo feminino, 50 anos, com pirose e regurgitação ácida há 5 anos, com resposta parcial e recorrência após inibidores de bomba de prótons. A endoscopia evidencia esofagite erosiva grau C de Los Angeles; a manometria esofágica demonstra hipotonia do esfíncter esofágico inferior, com motilidade do corpo esofágico preservada. Sobre o tratamento cirúrgico deste caso, é CORRETO afirmar:",
    "options": [
      "A esofagectomia trans-hiatal é a conduta prioritária nos pacientes com hipotonia do esfíncter esofágico inferior, sendo o teste de Bernstein o exame que define a extensão da linfadenectomia mediastinal",
      "A técnica de Toupet fundamenta-se na gastroplastia de redução associada a vagotomia troncular, sendo o achado de esôfago de Barrett a indicação para a realização de gastrectomia subtotal à Polya",
      "A colocação endoscópica de prótese metálica autoexpansível na transição esofagogástrica é o tratamento cirúrgico de escolha para a esofagite erosiva grau C, sendo a disfagia paradoxal o sinal que indica a necessidade de dilatação pneumática por balão",
      "A fundoplicatura total a Nissen por via laparoscópica é o procedimento de escolha, consistindo na confecção de uma válvula antirrefluxo de 360 graus, em pacientes com motilidade esofágica preservada"
    ],
    "correctAnswer": 3,
    "explanation": "DRGE com esofagite erosiva grau C de Los Angeles, resposta parcial e recorrência com IBP, esfíncter esofágico inferior hipotônico e motilidade do corpo esofágico preservada: há indicação de cirurgia antirrefluxo. O procedimento de escolha é a fundoplicatura total (360°) de Nissen por via laparoscópica. Com motilidade ineficaz, prefere-se fundoplicatura parcial (Toupet, 270°).",
    "commentary": "Esofagectomia trans-hiatal (A): é cirurgia para câncer ou doença terminal, não para DRGE; o teste de Bernstein avalia a sensibilidade ácida, não linfadenectomia.\n\nToupet como gastroplastia com vagotomia (B): Toupet é fundoplicatura parcial posterior de 270°; Barrett não indica gastrectomia.\n\nPrótese metálica endoscópica (C): é tratamento paliativo de estenoses malignas, não de esofagite.",
    "reference": "SAGES Guidelines for Surgical Treatment of GERD (2021); Federação Brasileira de Gastroenterologia – Consenso de DRGE",
    "tags": [
      "doença do refluxo gastroesofágico",
      "fundoplicatura de Nissen",
      "esofagite erosiva",
      "cirurgia do aparelho digestivo"
    ],
    "tip": "DRGE cirúrgica: Nissen (360°) se motilidade normal; Toupet (270°) se motilidade ineficaz."
  },
  {
    "id": "fubog2027-55",
    "module": "Cirurgia",
    "text": "O câncer colorretal é uma das neoplasias mais incidentes no Brasil, e o estadiamento e o tratamento cirúrgico adequados são determinantes para o prognóstico. Sobre os princípios do estadiamento e do tratamento cirúrgico do câncer colorretal, é CORRETO afirmar:",
    "options": [
      "A linfadenectomia oncológica no câncer colorretal requer a ressecção de, no mínimo, 12 linfonodos para o adequado estadiamento patológico (pN), sendo a ligadura vascular na origem dos vasos mesentéricos um dos princípios da cirurgia oncológica completa",
      "O estadiamento local do câncer de reto é realizado preferencialmente pela tomografia computadorizada da pelve, que substituiu a ressonância magnética por apresentar maior acurácia para a avaliação do T e do N em tumores médios e baixos",
      "A quimiorradioterapia neoadjuvante é indicada para todos os cânceres de cólon em estádios II e III, sendo a cirurgia reservada aos pacientes com resposta parcial após 6 meses de tratamento",
      "A polipectomia endoscópica de pólipo adenomatoso com invasão submucosa maciça (sm3) e margem livre é considerada tratamento oncologicamente suficiente, dispensando a ressecção cirúrgica complementar"
    ],
    "correctAnswer": 0,
    "explanation": "Os princípios da cirurgia oncológica colorretal incluem ressecção com margens livres, ligadura alta dos vasos na origem e linfadenectomia adequada, com no mínimo 12 linfonodos examinados para estadiar corretamente o N. Menos de 12 linfonodos é fator de pior prognóstico e pode indicar subestadiamento.",
    "commentary": "TC substituindo a RM no reto (B): a ressonância magnética de pelve é o exame de escolha para estadiamento local do câncer de reto (T, N, fáscia mesorretal).\n\nQuimiorradioterapia neoadjuvante para cólon II e III (C): a neoadjuvância com radioterapia é para o câncer de reto; no cólon, a cirurgia é o tratamento inicial, com quimioterapia adjuvante.\n\nPolipectomia de pólipo com invasão submucosa maciça (sm3) (D): sm3 tem alto risco de metástase linfonodal; está indicada colectomia complementar.",
    "reference": "NCCN Guidelines – Colon and Rectal Cancer; Sociedade Brasileira de Coloproctologia",
    "tags": [
      "câncer colorretal",
      "linfadenectomia",
      "estadiamento",
      "cirurgia oncológica"
    ],
    "tip": "Colectomia oncológica: ≥ 12 linfonodos e ligadura vascular na origem."
  },
  {
    "id": "fubog2027-56",
    "module": "Cirurgia",
    "text": "A antibioticoprofilaxia em cirurgia é uma das principais medidas para a prevenção de infecção de sítio cirúrgico, e sua eficácia depende da escolha da droga, do momento da administração e da duração adequada. Sobre a antibioticoprofilaxia cirúrgica, é CORRETO afirmar:",
    "options": [
      "A tricotomia realizada com lâmina de barbear na noite anterior ao procedimento é a medida preferencial para a redução da carga microbiana cutânea, sendo a principal causa de cicatrização por terceira intenção em planos profundos",
      "A vancomicina é a droga de primeira escolha para a profilaxia em cirurgias limpas de hérnia inguinal em pacientes sem alergias, sendo sua manutenção por sete dias à medida que evita a formação de biofilme sobre a tela",
      "A administração do antibiótico profilático deve ocorrer nos 60 minutos que antecedem a incisão cirúrgica (ou nos 120 minutos para drogas como vancomicina e fluoroquinolonas), visando a atingir níveis teciduais terapêuticos no momento da exposição bacteriana",
      "Glicemias capilares sustentadas acima de 200 mg/dL no período peroperatório promovem a migração de fibroblastos, sendo o método ideal para prevenir a formação de seroma em cirurgias de tireoide"
    ],
    "correctAnswer": 2,
    "explanation": "A antibioticoprofilaxia cirúrgica deve ser administrada nos 60 minutos antes da incisão (120 minutos para vancomicina e fluoroquinolonas), para que o nível tecidual seja adequado no momento da contaminação. A escolha usual é cefazolina; redoses são feitas em cirurgias longas ou com grande perda sanguínea, e a duração não deve passar de 24 horas.",
    "commentary": "Tricotomia com lâmina na véspera (A): aumenta a infecção; se necessária, faz-se com tricotomizador elétrico, imediatamente antes da cirurgia.\n\nVancomicina por 7 dias em hérnia (B): a primeira escolha é cefazolina, em dose única; vancomicina só em alérgicos ou colonizados por MRSA.\n\nGlicemia > 200 mg/dL benéfica (D): hiperglicemia perioperatória aumenta infecção; recomenda-se manter < 180–200 mg/dL.",
    "reference": "ASHP/IDSA/SIS/SHEA Clinical Practice Guidelines for Antimicrobial Prophylaxis in Surgery (2013); ANVISA – Medidas de prevenção de infecção relacionada à assistência à saúde",
    "tags": [
      "antibioticoprofilaxia",
      "infecção do sítio cirúrgico",
      "cefazolina",
      "cirurgia geral"
    ],
    "tip": "Profilaxia: cefazolina até 60 min antes da incisão; não passar de 24 h."
  },
  {
    "id": "fubog2027-57",
    "module": "Cirurgia",
    "text": "A colecistite aguda calculosa é causa frequente de abdome agudo inflamatório, cujo diagnóstico e estratificação de gravidade seguem as diretrizes internacionais. Sobre o diagnóstico e o tratamento desta condição, analise as afirmações:\n\nI. A colecistectomia videolaparoscópica deve ser postergada por cerca de 6 meses após o início dos sintomas, visando à maturação das aderências fibrinosas para evitar a lesão iatrogênica da via biliar.\nII. O espessamento da parede vesicular superior a 4–5 mm, associado ao sinal de Murphy ultrassonográfico e à distensão vesicular, compõe o bloco de achados de imagem que, em conjunto com os sinais locais e sistêmicos de inflamação, estabelece o diagnóstico segundo as Tokyo Guidelines.\nIII. O nível elevado de amilase sérica é o critério laboratorial que define a colecistite aguda como grau III (grave), sendo a drenagem percutânea por agulha fina a conduta definitiva em pacientes com baixo risco cirúrgico.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "II: pelas Diretrizes de Tóquio 2018, o diagnóstico de colecistite aguda combina sinais locais (Murphy, massa ou dor em hipocôndrio direito), sinais sistêmicos (febre, leucocitose, PCR elevada) e achados de imagem (espessamento da parede > 4–5 mm, Murphy ultrassonográfico, distensão, líquido pericolecístico) (V). I: a colecistectomia laparoscópica é recomendada precocemente, idealmente em até 72 horas (até 7–10 dias), não após 6 meses (F). III: o grau III é definido por disfunção orgânica (cardiovascular, neurológica, respiratória, renal, hepática, hematológica), não por amilase; e a drenagem percutânea é para pacientes de alto risco cirúrgico, como ponte (F).",
    "commentary": "Apenas I (A), apenas III (C) e I e III (D): somente a proposição II está correta.",
    "reference": "Tokyo Guidelines 2018 (TG18) – Acute cholecystitis",
    "tags": [
      "colecistite aguda",
      "diretrizes de Tóquio",
      "colecistectomia",
      "abdome agudo inflamatório"
    ],
    "tip": "Colecistite: colecistectomia precoce (até 72 h). Grau III = disfunção orgânica."
  },
  {
    "id": "fubog2027-58",
    "module": "Cirurgia",
    "text": "A obstrução mecânica do intestino delgado exige diagnóstico e tratamento oportunos para a prevenção de isquemia e de translocação bacteriana. Acerca disso, analise as sentenças:\n\n1. As bridas ou aderências pós-operatórias constituem a principal causa de obstrução mecânica do intestino delgado em adultos, e o quadro clínico inclui dor em cólica, parada de eliminação de gases e fezes, vômitos e distensão abdominal, cuja intensidade varia conforme o nível da obstrução.\n2. A administração de bário por via oral é a conduta inicial para identificar o ponto de transição em alças com suspeita de estrangulamento, promovendo a desobstrução imediata pelo aumento do gradiente oncótico intraluminal.\n3. O empilhamento de moedas (válvulas coniventes) na radiografia simples de abdome em ortostase é sinal sugestivo de distensão de alças de delgado, enquanto a pneumatose intestinal e o gás no sistema portal na tomografia são achados sugestivos de sofrimento vascular de alça.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-F, 2-F, 3-F",
      "1-V, 2-F, 3-V"
    ],
    "correctAnswer": 3,
    "explanation": "1: as bridas pós-operatórias são a principal causa de obstrução do delgado em adultos, com dor em cólica, parada de gases e fezes, vômitos e distensão variáveis conforme o nível (V). 2: o contraste oral usado no teste diagnóstico-terapêutico é hidrossolúvel (gastrografina), não bário, e é contraindicado se há suspeita de estrangulamento (F). 3: na radiografia, o empilhamento de moedas (válvulas coniventes) indica distensão de delgado; pneumatose intestinal e gás portal na TC sugerem sofrimento vascular (V).",
    "commentary": "V, V, V (A): o bário não é usado, e a suspeita de estrangulamento indica cirurgia.\n\nV, F, F (B) e F, F, F (C): as sentenças 1 e 3 estão corretas.",
    "reference": "Bologna Guidelines for Adhesive Small Bowel Obstruction (WSES 2017)",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "abdome agudo obstrutivo",
      "radiologia"
    ],
    "tip": "Obstrução por bridas: contraste hidrossolúvel, nunca bário. Pneumatose/gás portal = sofrimento."
  },
  {
    "id": "fubog2027-59",
    "module": "Cirurgia",
    "text": "A abordagem do nódulo tireoidiano exige correlação entre achados clínicos, ultrassonográficos e citopatológicos, sendo a Punção Aspirativa por Agulha Fina (PAAF) com avaliação pelo sistema Bethesda fundamental para a definição da conduta. Sobre o nódulo tireoidiano e a indicação cirúrgica, é CORRETO afirmar:",
    "options": [
      "Todo nódulo tireoidiano palpável, independentemente das características ultrassonográficas ou do resultado da PAAF, tem indicação formal de tireoidectomia total com esvaziamento cervical profilático",
      "A PAAF classificada como Bethesda II (lesão benigna) indica, por si só, tireoidectomia subtotal para todos os pacientes, como medida de prevenção de malignização",
      "A PAAF classificada como Bethesda V (“suspeito para malignidade”) em nódulo sólido e hipoecoico tem indicação cirúrgica, sendo a lobectomia com istmectomia ou a tireoidectomia total as opções aceitas, a depender do tamanho do nódulo e das características clínico-ecográficas",
      "Nódulos císticos puros, independentemente do tamanho, devem ser submetidos rotineiramente a tireoidectomia total pelo elevado risco de carcinoma papilífero subjacente"
    ],
    "correctAnswer": 2,
    "explanation": "No sistema Bethesda, a categoria V (suspeito para malignidade) tem risco de câncer de cerca de 50–75%, com indicação cirúrgica. A extensão (lobectomia com istmectomia ou tireoidectomia total) depende do tamanho do nódulo, de achados ecográficos (extensão extratireoidiana, linfonodos), de nódulos contralaterais e da preferência do paciente; testes moleculares podem ajudar.",
    "commentary": "Tireoidectomia total para todo nódulo palpável (A): a maioria dos nódulos é benigna; a conduta depende de ultrassom e PAAF.\n\nBethesda II indicando cirurgia (B): nódulo benigno é acompanhado; cirurgia só por sintomas compressivos, crescimento ou estética.\n\nCistos puros com tireoidectomia (D): cistos puros são benignos e não exigem PAAF nem cirurgia de rotina.",
    "reference": "ATA Guidelines for Thyroid Nodules and Differentiated Thyroid Cancer (2015); SBEM",
    "tags": [
      "nódulo tireoidiano",
      "sistema Bethesda",
      "PAAF",
      "cirurgia de cabeça e pescoço"
    ],
    "tip": "Bethesda V e VI: cirurgia (lobectomia ou total, conforme o caso)."
  },
  {
    "id": "fubog2027-60",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 45 anos, obeso, apresenta dor em cólica no hipocôndrio direito após ingestão de alimentos gordurosos, associada a icterícia flutuante e colúria. Os exames laboratoriais evidenciam elevação de bilirrubina direta e fosfatase alcalina; a ultrassonografia mostra colelitíase e dilatação do colédoco de 12 mm. Sobre a propedêutica e o tratamento para este paciente, é CORRETO afirmar:",
    "options": [
      "A colangiopancreatografia retrógrada endoscópica com papilotomia e extração do cálculo é a conduta indicada para a limpeza do colédoco, seguida de colecistectomia videolaparoscópica na mesma internação para prevenir novos episódios de obstrução",
      "O uso oral de ácido ursodeoxicólico é a conduta definitiva para a dissolução imediata do cálculo impactado no colédoco, sendo a biópsia hepática o método que descarta a colangite esclerosante primária",
      "A drenagem biliar percutânea trans-hepática é a conduta inicial em pacientes estáveis com vesícula palpável, sendo o sinal de Courvoisier-Terrier o achado patognomônico de litíase residual no ducto biliar",
      "A cintilografia biliar com ácido iminodiacético é o padrão-ouro para a identificação de cálculos no colédoco, sendo a exploração cirúrgica evitada pelo risco de pancreatite autoimune"
    ],
    "correctAnswer": 0,
    "explanation": "Cólica biliar, icterícia flutuante, colúria, padrão colestático e colédoco dilatado (12 mm) com colelitíase: coledocolitíase de alto risco. A conduta é CPRE com papilotomia e extração dos cálculos, seguida de colecistectomia laparoscópica na mesma internação (alternativa: colecistectomia com exploração laparoscópica do colédoco em um tempo, onde houver experiência).",
    "commentary": "Ácido ursodesoxicólico para dissolver cálculo impactado (B): não dissolve cálculos do colédoco de forma rápida ou confiável.\n\nDrenagem trans-hepática inicial e Courvoisier como litíase (C): a drenagem percutânea é alternativa quando a CPRE falha; o sinal de Courvoisier (vesícula palpável e indolor com icterícia) sugere neoplasia periampular, não cálculo.\n\nCintilografia como padrão-ouro para cálculos (D): a cintilografia avalia colecistite aguda; para o colédoco usam-se colangiorressonância e ultrassom endoscópico.",
    "reference": "ASGE Guideline on the role of endoscopy in suspected choledocholithiasis (2019); ESGE (2019)",
    "tags": [
      "coledocolitíase",
      "CPRE",
      "colecistectomia",
      "icterícia obstrutiva"
    ],
    "tip": "Coledocolitíase de alto risco: CPRE + colecistectomia na mesma internação."
  },
  {
    "id": "fubog2027-61",
    "module": "Ginecologia e Obstetrícia",
    "text": "As diretrizes brasileiras para o diagnóstico do Diabetes Mellitus Gestacional (DMG)\n\nestabelecem critérios laboratoriais bem definidos para o pré-natal. Sobre isso, é CORRETO afirmar:",
    "options": [
      "Hemoglobina glicada de 5,7% na primeira consulta confirma diabetes prévio à gestação",
      "O teste oral de tolerância à glicose com 75 g define DMG quando o valor de 2 horas atinge 140 mg/dL",
      "Glicemia de jejum entre 92 e 125 mg/dL no primeiro trimestre estabelece o diagnóstico de DMG",
      "Glicemia capilar pós-prandial acima de 180 mg/dL na 10ª semana é suficiente para o diagnóstico"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo consenso brasileiro (OPAS/MS/Febrasgo/SBD, 2016), glicemia de jejum entre 92 e 125 mg/dL em qualquer momento da gestação (inclusive no primeiro trimestre) define diabetes mellitus gestacional. Valores ≥ 126 mg/dL definem diabetes prévio (overt diabetes). Na 24ª–28ª semana, o TOTG com 75 g define DMG com jejum ≥ 92, 1 hora ≥ 180 ou 2 horas ≥ 153 mg/dL (basta um valor).",
    "commentary": "HbA1c de 5,7% confirmando diabetes prévio (A): o diabetes prévio é definido por HbA1c ≥ 6,5%.\n\nTOTG com 2 horas ≥ 140 mg/dL (B): o ponto de corte de 2 horas é 153 mg/dL.\n\nGlicemia capilar pós-prandial > 180 mg/dL (D): glicemia capilar não é método diagnóstico.",
    "reference": "OPAS/Ministério da Saúde/Febrasgo/SBD – Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2016)",
    "tags": [
      "diabetes mellitus gestacional",
      "rastreamento",
      "TOTG",
      "pré-natal"
    ],
    "tip": "DMG: GJ 92–125 em qualquer fase; TOTG 75 g: 92 / 180 / 153."
  },
  {
    "id": "fubog2027-62",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente de 16 anos com mamas e pelos pubianos desenvolvidos (Tanner V), mas sem menarca, apresenta ausência de útero à ultrassonografia pélvica. O cariótipo é 46, XX. O diagnóstico mais provável é:",
    "options": [
      "Síndrome de Turner (45, X), que cursa com ausência de útero e FSH persistentemente baixo",
      "Síndrome de Mayer-Rokitansky-Küster-Hauser, caracterizada por agenesia mülleriana com ovários funcionantes",
      "Insensibilidade completa aos androgênios, que cursa com útero hipoplásico e testosterona em faixa feminina",
      "Hímen imperfurado, identificado pelo estádio Tanner I e estradiol elevado"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com desenvolvimento puberal completo (mamas e pelos Tanner V, indicando ovários funcionantes), amenorreia primária, ausência de útero e cariótipo 46,XX: síndrome de Mayer-Rokitansky-Küster-Hauser (agenesia mülleriana), com agenesia de útero e dos dois terços superiores da vagina e ovários normais.",
    "commentary": "Síndrome de Turner (A): cariótipo 45,X, com útero presente (hipoplásico), ausência de desenvolvimento puberal e FSH elevado.\n\nInsensibilidade completa aos androgênios (C): cariótipo 46,XY, sem útero, com mamas desenvolvidas mas sem pelos pubianos e testosterona em níveis masculinos.\n\nHímen imperfurado (D): o útero está presente, há dor cíclica e hematocolpo; o desenvolvimento puberal é normal.",
    "reference": "Febrasgo – Amenorreia primária; ACOG Committee Opinion nº 728 – Müllerian Agenesis",
    "tags": [
      "amenorreia primária",
      "síndrome de Mayer-Rokitansky-Küster-Hauser",
      "agenesia mülleriana",
      "ginecologia infanto-puberal"
    ],
    "tip": "Amenorreia primária + caracteres normais + sem útero: 46,XX → MRKH; 46,XY → insensibilidade androgênica."
  },
  {
    "id": "fubog2027-63",
    "module": "Ginecologia e Obstetrícia",
    "text": "Entre as diversas ferramentas para a predição e o manejo do trabalho de parto prematuro, uma das mais utilizadas na prática é a medida do comprimento cervical.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "A medida do comprimento cervical por ultrassonografia transvaginal tem alto valor preditivo negativo para parto prematuro em 7 dias",
      "A nifedipina atua como tocolítico por bloquear canais de potássio, e a hipotensão materna é o efeito desejado",
      "A betametasona para maturação pulmonar é indicada em dose semanal até o nascimento",
      "O sulfato de magnésio tem indicação para neuroproteção em partos acima de 34 semanas, reduzindo a retinopatia da prematuridade"
    ],
    "correctAnswer": 0,
    "explanation": "O comprimento do colo uterino medido por ultrassonografia transvaginal ajuda a predizer o parto prematuro: um colo longo (por exemplo, > 30 mm) em gestante com contrações tem alto valor preditivo negativo — o parto nos 7 dias seguintes é pouco provável —, evitando internações e tocólise desnecessárias.",
    "commentary": "Nifedipina bloqueando canais de potássio, com hipotensão desejada (B): a nifedipina bloqueia canais de cálcio; a hipotensão é efeito adverso.\n\nBetametasona semanal até o nascimento (C): faz-se um ciclo (12 mg IM, 2 doses com 24 h); doses semanais repetidas não são recomendadas (no máximo um ciclo de resgate).\n\nSulfato de magnésio acima de 34 semanas para retinopatia (D): a neuroproteção é indicada abaixo de 32 semanas e reduz paralisia cerebral, não retinopatia.",
    "reference": "Febrasgo – Parto pré-termo; ACOG Practice Bulletin nº 234 – Prediction and Prevention of Spontaneous Preterm Birth",
    "tags": [
      "parto prematuro",
      "comprimento do colo uterino",
      "ultrassonografia transvaginal",
      "obstetrícia"
    ],
    "tip": "Colo longo no USG: alto valor preditivo negativo para parto prematuro em 7 dias."
  },
  {
    "id": "fubog2027-64",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera de 32 anos, após parto vaginal, apresenta sangramento vaginal volumoso e útero amolecido. Apesar da massagem uterina e da ocitocina endovenosa, mantém hipotensão progressiva. Neste caso, a conduta indicada é:",
    "options": [
      "Realizar a manobra de Kristeller (compressão bimanual interna do útero), indicada para retenção placentária",
      "Administrar ácido tranexâmico nas primeiras 3 horas, medida que reduz a mortalidade por sangramento",
      "Inserir balão de tamponamento intrauterino preenchido com ar comprimido, indicado para lacerações cervicais",
      "Indicar sutura de B-Lynch, técnica específica para rotura uterina, que consiste na ligadura das artérias ilíacas internas"
    ],
    "correctAnswer": 1,
    "explanation": "Hemorragia pós-parto por atonia uterina (útero amolecido) que persiste apesar de massagem e ocitocina, com hipotensão progressiva. Além de seguir com os uterotônicos de segunda linha (metilergometrina, misoprostol) e preparar tamponamento ou cirurgia, administra-se ácido tranexâmico 1 g IV o mais cedo possível, idealmente nas primeiras 3 horas após o parto, o que reduz a morte por sangramento (estudo WOMAN).",
    "commentary": "Kristeller como compressão bimanual (A): Kristeller é a pressão no fundo uterino durante o período expulsivo, manobra condenada; a compressão bimanual é a manobra de Hamilton.\n\nBalão com ar comprimido para lacerações cervicais (C): o balão (Bakri) é preenchido com soro e é indicado para atonia, não para lacerações, que exigem sutura.\n\nB-Lynch para rotura uterina com ligadura das ilíacas (D): a sutura de B-Lynch é compressiva, para atonia; não é ligadura arterial nem técnica para rotura.",
    "reference": "Febrasgo – Hemorragia pós-parto; OPAS – Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018); WOMAN Trial, Lancet 2017",
    "tags": [
      "hemorragia pós-parto",
      "atonia uterina",
      "ácido tranexâmico",
      "emergência obstétrica"
    ],
    "tip": "HPP: ácido tranexâmico 1 g IV nas primeiras 3 horas."
  },
  {
    "id": "fubog2027-65",
    "module": "Ginecologia e Obstetrícia",
    "text": "A conduta diante de achados citopatológicos anormais no rastreamento do câncer do colo do útero segue diretrizes bem estabelecidas pelo Ministério da Saúde. Sobre isso, é CORRETO afirmar:",
    "options": [
      "A captura híbrida para HPV substitui a citologia em gestantes, e a cauterização química é o tratamento no parto",
      "Células Escamosas Atípicas de Significado Indeterminado (ASC-US) em mulheres acima de 30 anos exigem colposcopia imediata",
      "Lesão Intraepitelial de Baixo Grau (LSIL) em adolescentes é tratada com excisão da zona de transformação",
      "Citologia com Lesão Intraepitelial de Alto Grau (HSIL) indica a realização de colposcopia"
    ],
    "correctAnswer": 3,
    "explanation": "Pelas Diretrizes Brasileiras de rastreamento do câncer do colo do útero, citologia com lesão intraepitelial escamosa de alto grau (HSIL) indica encaminhamento para colposcopia, com biópsia ou, se compatível e na mulher ≥ 25 anos, estratégia “ver e tratar” com exérese da zona de transformação.",
    "commentary": "Captura híbrida substituindo citologia em gestantes (A): na gestante o rastreamento segue o habitual e o tratamento de lesões pré-invasivas é adiado para o pós-parto.\n\nASC-US acima de 30 anos com colposcopia imediata (B): pela diretriz citológica, ASC-US com ≥ 30 anos repete a citologia em 6 meses.\n\nLSIL em adolescente com excisão (C): LSIL em mulheres jovens tende a regredir; repete-se a citologia, sem excisão.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "tags": [
      "câncer do colo do útero",
      "HSIL",
      "colposcopia",
      "rastreamento"
    ],
    "tip": "Citologia HSIL = colposcopia."
  },
  {
    "id": "fubog2027-66",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 24 semanas apresenta dor abdominal periumbilical que migrou para o flanco direito, com Blumberg positivo. Sobre a apendicite aguda na gestação, é CORRETO afirmar:",
    "options": [
      "Leucocitose acima de 15.000/mm³ é patognomônica de apendicite na gestação e dispensa exames de imagem",
      "O crescimento uterino desloca o apêndice para cima, podendo a dor localizar-se no quadrante superior direito, e a ultrassonografia é o exame inicial",
      "A antibioticoterapia isolada é a conduta preferencial no 2º trimestre, postergando a cirurgia até a viabilidade fetal",
      "O decúbito dorsal horizontal favorece o sinal do psoas, e o desvio da temperatura axilar tem alta acurácia diagnóstica"
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, o útero aumentado desloca o apêndice para cima e lateralmente; a partir do segundo trimestre a dor pode localizar-se no flanco ou no quadrante superior direito. A ultrassonografia é o exame inicial e, se inconclusiva, a ressonância magnética sem contraste. O tratamento é apendicectomia (preferencialmente laparoscópica) em qualquer trimestre, pois a perfuração aumenta muito a perda fetal.",
    "commentary": "Leucocitose > 15.000 patognomônica (A): a leucocitose é fisiológica na gestação e não é específica.\n\nAntibiótico isolado no 2º trimestre (C): o tratamento conservador tem mais falha e complicações na gestante; a apendicectomia é recomendada.\n\nDecúbito dorsal favorecendo o psoas e temperatura com alta acurácia (D): os sinais clássicos têm menor acurácia na gestação, e o decúbito dorsal pode causar hipotensão supina.",
    "reference": "SAGES Guidelines for the Use of Laparoscopy During Pregnancy (2017); Febrasgo",
    "tags": [
      "apendicite na gestação",
      "abdome agudo na gestação",
      "obstetrícia",
      "cirurgia geral"
    ],
    "tip": "Apendicite na gestante: dor mais alta; USG primeiro, depois RM; operar."
  },
  {
    "id": "fubog2027-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "A Síndrome dos Ovários Policísticos é a endocrinopatia mais comum em mulheres em idade reprodutiva e seu diagnóstico segue os Critérios de Rotterdam. Considerando essa afirmação, analise as afirmações:\n\nI. O hirsutismo é avaliado pela escala de Ferriman-Gallwey modificada, e os contraceptivos orais combinados são opção terapêutica para o hiperandrogenismo.\nII. A ultrassonografia confirma morfologia policística quando identifica 12 ou mais folículos em cada ovário, sendo o espessamento endometrial critério obrigatório.\nIII. Os critérios de Rotterdam exigem a presença simultânea de irregularidade menstrual, hiperandrogenismo e resistência insulínica comprovada. Desta forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "I: o hirsutismo é avaliado pela escala de Ferriman-Gallwey modificada, e o contraceptivo oral combinado é primeira linha para o hiperandrogenismo e a irregularidade menstrual na SOP (V). II: a morfologia policística, pelo consenso de 2023, é definida por ≥ 20 folículos por ovário (ou volume ≥ 10 mL) com transdutor de alta frequência; e o espessamento endometrial não é critério (F). III: Rotterdam exige 2 de 3 critérios (oligo/anovulação, hiperandrogenismo, morfologia policística), e resistência insulínica não é critério (F).",
    "commentary": "Apenas II (B), I e III (C) e II e III (D): somente a proposição I está correta.",
    "reference": "International Evidence-based Guideline for PCOS (2023); Febrasgo – SOP",
    "tags": [
      "síndrome dos ovários policísticos",
      "critérios de Rotterdam",
      "hirsutismo",
      "ginecologia endócrina"
    ],
    "tip": "Rotterdam: 2 de 3 (oligo/anovulação, hiperandrogenismo, ovário policístico ≥ 20 folículos)."
  },
  {
    "id": "fubog2027-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "A endometriose é uma doença inflamatória estrogênio-dependente com grande impacto na qualidade de vida e na fertilidade. Acerca do seu diagnóstico e tratamento, analise as sentenças:\n\n1. A ultrassonografia transvaginal com preparo intestinal apresenta boa sensibilidade para a detecção de lesões em ligamentos uterossacros e compartimento retrocervical.\n2. Os análogos do GnRH promovem hipoestrogenismo para alívio da dor, sendo a terapia add-back indicada para mitigar efeitos colaterais.\n3. A drenagem com ablação da cápsula preserva melhor a reserva ovariana que a cistectomia de endometrioma e é superior em pacientes jovens.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-V, 3-F",
      "1-F, 2-F, 3-F"
    ],
    "correctAnswer": 2,
    "explanation": "1: a ultrassonografia transvaginal com preparo intestinal, feita por examinador experiente, tem boa sensibilidade para endometriose profunda retrocervical e de ligamentos uterossacros (V). 2: os análogos do GnRH induzem hipoestrogenismo e aliviam a dor; a terapia add-back (estrogênio/progestagênio em baixa dose ou tibolona) reduz os sintomas climatéricos e a perda óssea (V). 3: a cistectomia (excisão da cápsula) tem menor recorrência e maior chance de gestação espontânea que drenagem com ablação, embora possa reduzir mais a reserva ovariana; a drenagem não é considerada superior (F).",
    "commentary": "V, F, F (A) e F, F, F (D): a sentença 2 também é verdadeira.\n\nV, V, V (B): a cistectomia é a técnica preferida em relação à drenagem com ablação.",
    "reference": "ESHRE Guideline: Endometriosis (2022); Febrasgo – Endometriose",
    "tags": [
      "endometriose",
      "análogos do GnRH",
      "endometrioma",
      "ginecologia"
    ],
    "tip": "Endometrioma operado: cistectomia > drenagem (menos recidiva)."
  },
  {
    "id": "fubog2027-69",
    "module": "Ginecologia e Obstetrícia",
    "text": "Diante de uma paciente com diagnóstico clínico de Doença Inflamatória Pélvica (DIP) aguda, com estabilidade hemodinâmica e sem abscesso tubo-ovariano, a conduta terapêutica apropriada é:",
    "options": [
      "Remoção imediata do DIU associada a anti-inflamatórios, considerados determinantes para a cura microbiológica",
      "Observação clínica, já que a dor à mobilização do colo e à palpação anexial é critério de exclusão e obriga laparoscopia para confirmação",
      "Monoterapia hospitalar com metronidazol venoso, para cobertura exclusiva de anaeróbios",
      "Tratamento ambulatorial com ceftriaxona intramuscular associada a doxiciclina oral, com ou sem metronidazol, sendo a hospitalização indicada em abscessos tubo-ovarianos ou instabilidade hemodinâmica"
    ],
    "correctAnswer": 3,
    "explanation": "Doença inflamatória pélvica leve a moderada, sem abscesso, gravidez ou instabilidade, é tratada em regime ambulatorial: ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h por 14 dias + metronidazol 500 mg VO 12/12 h por 14 dias (PCDT-IST). Internação é indicada em abscesso tubo-ovariano, gestação, instabilidade, intolerância à via oral, falha do tratamento ou dúvida diagnóstica (abdome agudo cirúrgico).",
    "commentary": "Remoção imediata do DIU e anti-inflamatórios (A): não é necessário remover o DIU (só se não houver melhora em 48–72 h), e o tratamento é antibiótico.\n\nObservação e laparoscopia (B): dor à mobilização do colo e anexial são justamente critérios diagnósticos; a laparoscopia não é obrigatória.\n\nMetronidazol isolado (C): é preciso cobrir gonococo, clamídia e anaeróbios.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "doença inflamatória pélvica",
      "ceftriaxona",
      "doxiciclina",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "DIP ambulatorial: ceftriaxona IM + doxiciclina + metronidazol por 14 dias."
  },
  {
    "id": "fubog2027-70",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na abordagem da mastite lactacional, a conduta correta é:",
    "options": [
      "Interromper a amamentação no seio afetado e aplicar compressas quentes para inibir a produção láctea",
      "Manter o esvaziamento mamário frequente (amamentação ou ordenha) e prescrever antibioticoterapia com cobertura para Staphylococcus aureus (ex.: cefalexina)",
      "Suspender a lactação bilateral ao diagnosticar abscesso mamário, realizando drenagem aberta sob anestesia geral ambulatorial",
      "Solicitar cultura de leite materno de rotina antes de iniciar o tratamento e substituir o leite por fórmula em casos de febre alta"
    ],
    "correctAnswer": 1,
    "explanation": "Na mastite lactacional, o esvaziamento frequente da mama é essencial (manter a amamentação, inclusive do lado afetado, ou ordenhar), com analgesia, repouso e hidratação. Se os sintomas não melhoram em 12–24 horas ou há sinais de infecção, prescreve-se antibiótico com cobertura para Staphylococcus aureus, como cefalexina ou dicloxacilina, por 10–14 dias.",
    "commentary": "Interromper a amamentação no lado afetado e compressas quentes (A): interromper favorece estase e abscesso; o frio após as mamadas reduz o edema.\n\nSuspender a lactação no abscesso e drenagem aberta sob anestesia geral (C): o abscesso é drenado preferencialmente por punção guiada por ultrassom, e a amamentação pode continuar na outra mama (e na afetada se a incisão permitir).\n\nCultura de rotina e trocar por fórmula na febre (D): a cultura é para casos graves ou refratários, e a febre não contraindica amamentar.",
    "reference": "Academy of Breastfeeding Medicine Protocol #36: The Mastitis Spectrum (2022); Ministério da Saúde – Caderno de Atenção Básica nº 23",
    "tags": [
      "mastite lactacional",
      "aleitamento materno",
      "S. aureus",
      "puerpério"
    ],
    "tip": "Mastite: continuar amamentando + cefalexina se não melhorar em 24 h."
  },
  {
    "id": "fubog2027-71",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 20 semanas com diagnóstico de carcinoma ductal invasor, receptores hormonais positivos e sem metástases. Nesse caso, a quimioterapia pode ser administrada com segurança:",
    "options": [
      "Durante toda a gestação na forma de tamoxifeno, com amamentação recomendada para reduzir os níveis séricos no lactente",
      "Apenas após o parto, pois a mastectomia com linfadenectomia axilar é contraindicada durante a gestação",
      "Nunca, pois a radioterapia adjuvante com proteção fetal por aventais de chumbo é a terapêutica de escolha na gestação",
      "A partir do 2º trimestre, interrompendo-a cerca de 3 semanas antes do parto"
    ],
    "correctAnswer": 3,
    "explanation": "O câncer de mama na gestação pode ser tratado com segurança: a cirurgia (mastectomia ou conservadora, com biópsia de linfonodo sentinela com radiofármaco) pode ser feita em qualquer trimestre; a quimioterapia (antraciclinas e taxanos) é segura a partir do segundo trimestre, após a organogênese, e deve ser suspensa cerca de 3 semanas antes do parto (ou a partir de 35 semanas) para evitar mielossupressão materna e neonatal no parto. Radioterapia, tamoxifeno e trastuzumabe são adiados para depois do parto.",
    "commentary": "Tamoxifeno durante a gestação e amamentação (A): o tamoxifeno é teratogênico e contraindicado na gestação; também não se recomenda amamentar durante seu uso.\n\nSó após o parto, com mastectomia contraindicada (B): a cirurgia é possível em qualquer trimestre, e adiar o tratamento piora o prognóstico.\n\nRadioterapia com proteção de chumbo como escolha (C): a radioterapia é evitada durante a gestação.",
    "reference": "ESMO Clinical Practice Guidelines: Cancer, pregnancy and fertility (2023); Sociedade Brasileira de Mastologia",
    "tags": [
      "câncer de mama na gestação",
      "quimioterapia",
      "oncologia ginecológica",
      "gestação de alto risco"
    ],
    "tip": "Quimioterapia na gestação: a partir do 2º trimestre, parar ~3 semanas antes do parto."
  },
  {
    "id": "fubog2027-72",
    "module": "Ginecologia e Obstetrícia",
    "text": "Quanto à classificação e ao tratamento dos miomas uterinos, é CORRETO afirmar:",
    "options": [
      "A embolização de artérias uterinas é contraindicada em mulheres que desejam preservar o útero",
      "Os análogos do GnRH aumentam o volume uterino por vasodilatação pélvica, sendo indicados em mulheres jovens",
      "O mioma pediculado intracavitário é classificado como FIGO 0, sendo a histeroscopia cirúrgica o tratamento preferencial",
      "O mioma subseroso é a variante que mais causa hipermenorreia, e os progestágenos reduzem o volume tumoral"
    ],
    "correctAnswer": 2,
    "explanation": "Na classificação FIGO (PALM-COEIN), o mioma FIGO 0 é o submucoso pediculado totalmente intracavitário; o tipo 1 tem < 50% intramural e o 2, ≥ 50%. Os submucosos (sobretudo 0 e 1) são tratados preferencialmente por histeroscopia cirúrgica (miomectomia histeroscópica).",
    "commentary": "Embolização contraindicada para quem quer preservar o útero (A): a embolização é justamente uma alternativa que preserva o útero (embora não seja a primeira escolha para quem deseja gestar).\n\nAnálogos do GnRH aumentando o útero (B): reduzem o volume uterino e dos miomas (efeito temporário), usados no pré-operatório.\n\nSubseroso como o que mais causa hipermenorreia (D): os submucosos são os que mais causam sangramento; progestágenos não reduzem o volume do mioma.",
    "reference": "FIGO Classification System (PALM-COEIN) for Causes of AUB (2018); Febrasgo – Miomatose uterina",
    "tags": [
      "mioma uterino",
      "classificação FIGO",
      "histeroscopia",
      "ginecologia"
    ],
    "tip": "FIGO 0 = pediculado intracavitário → histeroscopia."
  },
  {
    "id": "fubog2027-73",
    "module": "Ginecologia e Obstetrícia",
    "text": "O acompanhamento da gestante Rh negativo envolve a prevenção da sensibilização materna ao antígeno D fetal. A respeito desse manejo, é CORRETO afirmar:",
    "options": [
      "O Coombs indireto é realizado mensalmente em gestantes Rh negativo não sensibilizadas, e a imunoglobulina anti-D é administrada na 28ª semana e após eventos sensibilizantes",
      "A medida do pico de velocidade sistólica da artéria cerebral média é um método invasivo, e valores baixos indicam transfusão fetal",
      "A análise espectrofotométrica do líquido amniótico (curva de Liley) é o padrão atual para predição de anemia fetal",
      "A profilaxia com imunoglobulina anti-D está indicada para gestantes já sensibilizadas (Coombs indireto 1:32), por via intramuscular, para neutralizar IgM"
    ],
    "correctAnswer": 0,
    "explanation": "Na gestante Rh negativo não sensibilizada (parceiro Rh positivo ou desconhecido), faz-se Coombs indireto no início do pré-natal e repetições (mensais a partir de 24–28 semanas pelo Ministério da Saúde). Administra-se imunoglobulina anti-D (300 µg) com 28 semanas, até 72 horas após o parto de recém-nascido Rh positivo e após eventos sensibilizantes (sangramentos, abortamento, ectópica, procedimentos invasivos, trauma).",
    "commentary": "Doppler da ACM invasivo, com valores baixos indicando transfusão (B): o Doppler da ACM é não invasivo, e são os valores altos de pico sistólico (> 1,5 MoM) que indicam anemia fetal.\n\nCurva de Liley como padrão atual (C): a espectrofotometria do líquido amniótico (invasiva) foi substituída pelo Doppler da ACM.\n\nAnti-D para gestantes já sensibilizadas (D): a imunoglobulina anti-D só previne a sensibilização; não tem efeito em quem já está sensibilizada.",
    "reference": "Ministério da Saúde – Manual de Gestação de Alto Risco (2022); Febrasgo – Aloimunização Rh",
    "tags": [
      "aloimunização Rh",
      "imunoglobulina anti-D",
      "teste de Coombs indireto",
      "pré-natal"
    ],
    "tip": "Rh negativo não sensibilizada: anti-D com 28 semanas e até 72 h após o parto ou eventos."
  },
  {
    "id": "fubog2027-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 55 anos, menopausa há 5 anos, com fogachos frequentes e T-score de -2,7 em colo de fêmur, sem fratura prévia. A terapêutica apropriada é:",
    "options": [
      "Tibolona, que estimula diretamente a formação óssea pelos osteoblastos e exige densitometria semestral",
      "Bisfosfonatos orais associados a vitamina K em altas doses, para a mineralização da matriz osteoide",
      "Terapia hormonal estrogênica, que reduz o risco de fraturas vertebrais e não vertebrais ao inibir a reabsorção óssea pelos osteoclastos",
      "Raloxifeno, que aumenta a densidade óssea, potencializa os fogachos e é indicado em alto risco de câncer de endométrio"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 55 anos, com 5 anos de menopausa (dentro da janela de oportunidade: < 60 anos e < 10 anos de menopausa), fogachos frequentes e osteoporose densitométrica (T-score −2,7). A terapia hormonal estrogênica (com progestagênio se tiver útero) trata os sintomas vasomotores e reduz fraturas vertebrais e não vertebrais, ao inibir a reabsorção osteoclástica (estudo WHI). É boa opção para quem tem as duas indicações e não tem contraindicações.",
    "commentary": "Tibolona estimulando osteoblastos e densitometria semestral (A): a tibolona é antirreabsortiva e reduz fraturas vertebrais, mas não é anabólica; e a densitometria é feita a cada 1–2 anos.\n\nBisfosfonatos com vitamina K em altas doses (B): bisfosfonatos são opção para osteoporose, mas não tratam os fogachos, e a vitamina K não faz parte do tratamento.\n\nRaloxifeno potencializando fogachos para alto risco de câncer de endométrio (D): o raloxifeno piora fogachos (inadequado aqui) e não é indicado para risco endometrial; reduz câncer de mama e fraturas vertebrais.",
    "reference": "Febrasgo/Sobrac – Consenso de terapêutica hormonal; NAMS – The 2022 Hormone Therapy Position Statement",
    "tags": [
      "osteoporose",
      "terapia hormonal",
      "climatério",
      "menopausa"
    ],
    "tip": "Menopausa < 10 anos + fogachos + osteoporose: terapia hormonal é ótima opção."
  },
  {
    "id": "fubog2027-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "O sistema POP-Q utiliza pontos de referência anatômicos para graduar o descenso dos órgãos pélvicos. Sobre isso, é CORRETO afirmar:",
    "options": [
      "O pessário vaginal é o tratamento cirúrgico de escolha em pacientes com alto risco cardiovascular, e a colpocleise preserva a função sexual",
      "O estágio II corresponde à porção mais distal do prolapso entre 1 cm acima e 1 cm abaixo do hímen",
      "A cistocele é o prolapso do compartimento posterior da vagina, corrigido por colpoperineoplastia",
      "O ponto Ba representa a parede vaginal posterior, e valores negativos indicam protrusão retal"
    ],
    "correctAnswer": 1,
    "explanation": "No sistema POP-Q, os estágios são: 0 — sem prolapso; I — ponto mais distal mais de 1 cm acima do hímen; II — ponto mais distal entre 1 cm acima e 1 cm abaixo do hímen (−1 a +1); III — mais de 1 cm abaixo do hímen, mas sem eversão completa; IV — eversão completa.",
    "commentary": "Pessário como tratamento cirúrgico e colpocleise preservando a função sexual (A): o pessário é tratamento conservador; a colpocleise oblitera a vagina e impede o coito.\n\nCistocele como prolapso posterior (C): a cistocele é do compartimento anterior; o posterior é a retocele, corrigida por colpoperineoplastia posterior.\n\nPonto Ba na parede posterior (D): Ba é da parede anterior (Bp é a posterior); valores negativos indicam posição acima do hímen.",
    "reference": "Bump RC et al. The standardization of terminology of female pelvic organ prolapse (POP-Q), Am J Obstet Gynecol 1996; Febrasgo",
    "tags": [
      "prolapso genital",
      "POP-Q",
      "uroginecologia"
    ],
    "tip": "POP-Q estágio II: ponto mais distal entre −1 e +1 cm do hímen."
  },
  {
    "id": "fubog2027-76",
    "module": "Ginecologia e Obstetrícia",
    "text": "Os critérios médicos de elegibilidade da OMS orientam a escolha do método contraceptivo diante de condições clínicas específicas.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "O anel vaginal e o adesivo transdérmico têm menor risco de tromboembolismo do que as pílulas, sendo liberados para histórico de trombose",
      "O DIU de levonorgestrel é contraindicado em nulíparas pelo risco de Doença Inflamatória Crônica, e o implante subdérmico causa menor amenorreia",
      "O injetável trimestral de progestágeno é indicado para hipertensas graves, com rápida recuperação da fertilidade após a interrupção",
      "Contraceptivos orais combinados são categoria 4 (risco inaceitável) em mulheres com enxaqueca com aura, pelo risco de AVC isquêmico"
    ],
    "correctAnswer": 3,
    "explanation": "Pelos critérios de elegibilidade da OMS, enxaqueca com aura é categoria 4 (risco inaceitável) para métodos hormonais combinados (pílula, anel, adesivo, injetável mensal), em qualquer idade, pelo aumento do risco de AVC isquêmico. Métodos só de progestagênio e DIU de cobre são opções.",
    "commentary": "Anel e adesivo com menor risco de trombose (A): têm risco semelhante ou maior que a pílula e também são categoria 4 com história de trombose.\n\nDIU-LNG contraindicado em nulíparas e implante com menos amenorreia (B): o DIU é categoria 2 em nulíparas (pode usar), e o implante causa sangramento irregular e amenorreia com frequência.\n\nInjetável trimestral para hipertensas graves com rápido retorno da fertilidade (C): o AMPD é categoria 3 na hipertensão grave e o retorno da fertilidade pode demorar até 10 meses.",
    "reference": "OMS – Critérios médicos de elegibilidade para uso de métodos anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "anticoncepção",
      "critérios de elegibilidade da OMS",
      "enxaqueca com aura",
      "anticoncepcional oral combinado"
    ],
    "tip": "Enxaqueca com aura = categoria 4 para qualquer método com estrogênio."
  },
  {
    "id": "fubog2027-77",
    "module": "Ginecologia e Obstetrícia",
    "text": "O manejo ativo do quarto período do parto e a identificação precoce da hemorragia pós-parto são ferramentas essenciais na redução da mortalidade materna. Acerca desse contexto, analise as sentenças:\n\nI. A manobra de Hamilton consiste na compressão bimanual do útero para tratamento da inversão uterina aguda, e o misoprostol endovenoso é o tratamento farmacológico.\nII. O balão de Bakri atua por tamponamento intrauterino em casos de laceração de trajeto, e o ácido tranexâmico é administrado após 12 horas de sangramento.\nIII. O índice de choque tem maior sensibilidade que a pressão arterial isolada na detecção precoce de hipovolemia, e a ocitocina profilática é a medida padrão após a expulsão fetal.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição II está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "III: o índice de choque (FC/PAS) identifica hipovolemia mais precocemente que a pressão arterial isolada — valores ≥ 0,9 sugerem perda importante e indicam ação —, e a ocitocina profilática (10 UI IM) logo após a expulsão fetal é a principal medida de prevenção da hemorragia pós-parto (V). I: a manobra de Hamilton é a compressão bimanual do útero, usada na atonia; a inversão uterina é corrigida pela manobra de Taxe (Johnson), e misoprostol não é endovenoso (F). II: o balão de Bakri é para atonia, não para laceração, e o ácido tranexâmico é dado nas primeiras 3 horas (F).",
    "commentary": "Apenas II (A), I e III (C) e II e III (D): só a proposição III está correta.",
    "reference": "OPAS – Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018); Febrasgo",
    "tags": [
      "hemorragia pós-parto",
      "índice de choque",
      "ocitocina",
      "emergência obstétrica"
    ],
    "tip": "Índice de choque ≥ 0,9 no pós-parto: alerta para hemorragia grave."
  },
  {
    "id": "fubog2027-78",
    "module": "Ginecologia e Obstetrícia",
    "text": "As síndromes hipertensivas da gestação requerem identificação precoce e implementação de medidas preventivas em grupos de risco. Acerca disso, analise as sentenças:\n\n1. A aspirina em baixa dose, iniciada antes da 16ª semana em gestantes com história de pré-eclâmpsia anterior, reduz o risco de pré-eclâmpsia e suas complicações.\n2. O diagnóstico de pré-eclâmpsia exige obrigatoriamente proteinúria superior a 300 mg em urina de 24 horas, não podendo ser feito na ausência desse achado.\n3. O sulfato de magnésio é a droga de escolha para a prevenção e o tratamento da eclâmpsia, exigindo monitorização da diurese e dos reflexos patelares.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-V, 2-F, 3-V"
    ],
    "correctAnswer": 3,
    "explanation": "1: AAS em baixa dose (100–150 mg à noite), iniciado entre 12 e 16 semanas (antes de 16) em gestantes de alto risco — como pré-eclâmpsia prévia —, reduz a pré-eclâmpsia e suas complicações (V). 2: a pré-eclâmpsia pode ser diagnosticada sem proteinúria, se houver hipertensão com disfunção de órgão-alvo (plaquetopenia, alteração renal ou hepática, sintomas neurológicos, edema pulmonar) ou disfunção uteroplacentária (F). 3: o sulfato de magnésio é a droga de escolha na prevenção e no tratamento da eclâmpsia, com monitorização de diurese, frequência respiratória e reflexos patelares (V).",
    "commentary": "F, F, F (A) e V, F, F (C): as sentenças 1 e 3 estão corretas.\n\nV, V, V (B): a proteinúria não é obrigatória para o diagnóstico.",
    "reference": "Febrasgo/RBEHG – Pré-eclâmpsia nos seus diversos aspectos (2023); ISSHP (2021)",
    "tags": [
      "pré-eclâmpsia",
      "sulfato de magnésio",
      "ácido acetilsalicílico",
      "doença hipertensiva da gestação"
    ],
    "tip": "Pré-eclâmpsia não exige proteinúria se houver lesão de órgão-alvo."
  },
  {
    "id": "fubog2027-79",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 30 semanas apresenta perda súbita de líquido claro por via vaginal, sem contrações ou sinais de infecção; o exame especular confirma ruptura de membranas. Nesse caso, a conduta CORRETA é:",
    "options": [
      "Indução com ocitocina como conduta padrão, sendo a via vaginal contraindicada pelo risco de compressão do cordão",
      "Tocolíticos até a 36ª semana, indicados para prevenir hipoplasia pulmonar fetal",
      "Conduta expectante com internação hospitalar para vigilância de corioamnionite, antibioticoterapia de latência e corticoterapia para maturação pulmonar",
      "Investigação por cristais de cloreto de sódio no muco cervical, seguida de amnioinfusão com povidine-iodo para selar a fenda"
    ],
    "correctAnswer": 2,
    "explanation": "Ruptura prematura pré-termo de membranas com 30 semanas, sem infecção nem trabalho de parto: conduta expectante até 34 semanas, com internação, vigilância de corioamnionite (temperatura, pulso, leucograma, dor uterina, odor do líquido) e da vitalidade fetal, antibioticoterapia de latência (ampicilina + azitromicina/eritromicina), corticoide para maturação pulmonar e sulfato de magnésio se o parto for iminente antes de 32 semanas.",
    "commentary": "Indução com ocitocina e via vaginal contraindicada (A): com 30 semanas, sem infecção, a conduta é expectante; e a via de parto segue indicação obstétrica.\n\nTocolíticos até 36 semanas (B): a tocólise não é recomendada na rotura de membranas (no máximo por 48 h para o corticoide) e não previne hipoplasia pulmonar.\n\nAmnioinfusão com povidine (D): não existe tal tratamento; o teste da cristalização (samambaia) avalia o líquido no fundo de saco.",
    "reference": "Febrasgo – Rotura prematura de membranas ovulares; ACOG Practice Bulletin nº 217 (2020)",
    "tags": [
      "rotura prematura de membranas",
      "prematuridade",
      "corticoterapia antenatal",
      "obstetrícia"
    ],
    "tip": "RPMO < 34 semanas sem infecção: internar, antibiótico de latência e corticoide."
  },
  {
    "id": "fubog2027-80",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 19 anos, com 10 semanas de gestação, apresenta sangramento vaginal, útero maior que o esperado e ultrassonografia com imagem em “tempestade de neve”, sem embrião. O beta-hCG é superior a 200.000 UI. Nesse caso, o tratamento é:",
    "options": [
      "Esvaziamento uterino por vácuo-aspiração, com seguimento por dosagens semanais de beta-hCG",
      "Conduta expectante, já que a mola completa tem cariótipo triploide e tipicamente apresenta tecido fetal associado",
      "Histerectomia total, pois os anticoncepcionais hormonais são contraindicados no seguimento por estimularem o sinciciotrofoblasto",
      "Histerectomia com preservação anexial em pacientes jovens com desejo de prole futura, sendo a alfafetoproteína o marcador de recidiva"
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento na primeira metade da gestação, útero maior que o esperado, ultrassom em “tempestade de neve” sem embrião e β-hCG > 200.000 mUI/mL: mola hidatiforme completa. O tratamento é o esvaziamento uterino por vácuo-aspiração, seguido de controle semanal do β-hCG até 3 resultados negativos consecutivos e depois mensal, com contracepção eficaz durante o seguimento, para detectar neoplasia trofoblástica gestacional.",
    "commentary": "Conduta expectante e mola completa triploide com tecido fetal (B): a mola completa é diploide (geralmente 46,XX androgenético), sem tecido fetal; a parcial é triploide.\n\nHisterectomia com anticoncepcional contraindicado (C): a histerectomia é exceção (prole completa, idade avançada), e o anticoncepcional hormonal é recomendado no seguimento.\n\nHisterectomia em jovens e alfafetoproteína como marcador (D): em jovem que quer filhos, faz-se aspiração; o marcador é o β-hCG.",
    "reference": "Febrasgo – Doença trofoblástica gestacional; Centro de Referência em Doença Trofoblástica",
    "tags": [
      "mola hidatiforme",
      "doença trofoblástica gestacional",
      "beta-hCG",
      "sangramento da primeira metade"
    ],
    "tip": "Mola: aspiração a vácuo e β-hCG semanal até negativar, com contracepção."
  },
  {
    "id": "fubog2027-81",
    "module": "Saúde Coletiva",
    "text": "Recém-nascido tem diagnóstico confirmado de anemia falciforme pelo Programa Nacional de Triagem Neonatal. Considerando a Política Nacional de Saúde Integral da População Negra (PNSIPN), é CORRETO afirmar:",
    "options": [
      "A promoção da saúde baseia-se na exclusão de dados sobre cor e raça dos sistemas de informação, adotando a fisioterapia respiratória como tratamento curativo",
      "A estratégia de redução de danos para comunidades quilombolas baseia-se na distribuição de repelentes e na proibição do consumo de proteínas animais em períodos de seca",
      "O enfrentamento das vulnerabilidades baseia-se na cobrança de taxas de conveniência para exames e na internação em massa para tratar a malária",
      "A PNSIPN reconhece a anemia falciforme como condição de alta prevalência na população negra e estabelece diretrizes para o combate ao racismo institucional no SUS"
    ],
    "correctAnswer": 3,
    "explanation": "A Política Nacional de Saúde Integral da População Negra (2009) reconhece o racismo — inclusive o institucional — como determinante social das condições de saúde, estabelece diretrizes para seu enfrentamento no SUS e prioriza agravos de maior prevalência na população negra, como a doença falciforme, a hipertensão e o diabetes, além de qualificar o quesito raça/cor nos sistemas de informação.",
    "commentary": "Excluir o dado de raça/cor dos sistemas (A): a PNSIPN determina justamente a inclusão e qualificação do quesito raça/cor.\n\nRepelentes e proibição de proteína animal para quilombolas (B) e cobrança de taxas e internação em massa (C): não correspondem a nenhuma diretriz da política; o SUS é gratuito.",
    "reference": "Ministério da Saúde – Política Nacional de Saúde Integral da População Negra (Portaria nº 992/2009)",
    "tags": [
      "saúde da população negra",
      "PNSIPN",
      "doença falciforme",
      "equidade",
      "racismo institucional"
    ],
    "tip": "PNSIPN: racismo como determinante de saúde; doença falciforme é prioridade."
  },
  {
    "id": "fubog2027-82",
    "module": "Saúde Coletiva",
    "text": "A probabilidade pré-teste de uma doença interfere diretamente na interpretação dos valores preditivos de um exame diagnóstico.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "O Valor Preditivo Negativo não depende da probabilidade pré-teste, sendo determinado apenas pela taxa de falsos positivos",
      "A redução da prevalência aumenta a sensibilidade do teste e estabiliza o Valor Preditivo Negativo em grupos de alto risco",
      "O aumento da prevalência eleva o Valor Preditivo Positivo (VPP) e reduz o Valor Preditivo Negativo (VPN)",
      "A especificidade do teste correlaciona-se inversamente com o VPP, favorecendo a detecção em baixa endemicidade"
    ],
    "correctAnswer": 2,
    "explanation": "Os valores preditivos dependem da prevalência (probabilidade pré-teste): com prevalência maior, aumenta o valor preditivo positivo (mais positivos são verdadeiros) e diminui o valor preditivo negativo. Sensibilidade e especificidade, por sua vez, são características do teste.",
    "commentary": "VPN independente da prevalência (A): o VPN depende da prevalência e é afetado pelos falsos negativos, não pelos falsos positivos.\n\nRedução da prevalência aumentando a sensibilidade (B): a sensibilidade não muda com a prevalência; e o VPN aumenta quando a prevalência cai.\n\nEspecificidade inversamente relacionada ao VPP (D): quanto mais específico o teste, maior o VPP.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "valores preditivos",
      "prevalência",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "Prevalência ↑ → VPP ↑ e VPN ↓."
  },
  {
    "id": "fubog2027-83",
    "module": "Saúde Coletiva",
    "text": "No Planejamento Estratégico Situacional (PES) de Carlos Matus, o objetivo do momento explicativo é:",
    "options": [
      "Definir os recursos financeiros necessários para a execução das metas, baseando-se na viabilidade política das coalizões de oposição",
      "Identificar e selecionar os problemas sob a ótica dos atores sociais, buscando compreender suas causas e os nós críticos da realidade",
      "Elaborar leis e decretos que garantem a universalidade, por meio dos conselhos de ética médica",
      "Aplicar questionários de satisfação ao usuário, sendo o coeficiente de mortalidade a ferramenta-chave para o desenho do plano"
    ],
    "correctAnswer": 1,
    "explanation": "O Planejamento Estratégico Situacional de Carlos Matus tem quatro momentos: explicativo (identificar e explicar os problemas na visão dos atores sociais, com suas causas e nós críticos), normativo (desenhar o plano de ação), estratégico (analisar a viabilidade e construí-la) e tático-operacional (executar e monitorar).",
    "commentary": "Definir recursos com base na viabilidade das coalizões de oposição (A): mistura os momentos normativo e estratégico.\n\nElaborar leis e decretos (C) e aplicar questionários de satisfação (D): não correspondem ao momento explicativo do PES.",
    "reference": "Matus C. Política, planejamento e governo; Artmann E. O planejamento estratégico situacional no nível local",
    "tags": [
      "planejamento estratégico situacional",
      "PES",
      "planejamento em saúde",
      "gestão em saúde"
    ],
    "tip": "PES: explicativo (problemas e nós críticos) → normativo → estratégico → tático-operacional."
  },
  {
    "id": "fubog2027-84",
    "module": "Saúde Coletiva",
    "text": "Gestante de alto risco com pré-eclâmpsia grave precisa transitar entre a Unidade Básica de Saúde e o hospital de referência com UTI neonatal de forma coordenada. Esse fluxo assistencial é garantido pelo princípio de:",
    "options": [
      "Fragmentação do cuidado em unidades isoladas por patologia, utilizando telemensagens",
      "Privatização dos leitos de retaguarda para pacientes com plano de saúde, com autogestão financeira",
      "Centralização das decisões no Ministério da Economia, com distribuição de cestas básicas",
      "Regionalização e hierarquização, que organiza os serviços em níveis de complexidade crescente"
    ],
    "correctAnswer": 3,
    "explanation": "O fluxo coordenado da gestante de alto risco entre a UBS e o hospital de referência com UTI neonatal é garantido pela diretriz de regionalização e hierarquização: os serviços são organizados em níveis de complexidade crescente, em base territorial, com mecanismos de referência e contrarreferência (hoje articulados nas Redes de Atenção à Saúde, como a Rede Alyne/Cegonha).",
    "commentary": "Fragmentação do cuidado (A), privatização de leitos (B) e centralização no Ministério da Economia (C): são contrárias às diretrizes do SUS, que preveem integração, gestão pública e descentralização.",
    "reference": "Constituição Federal, art. 198; Lei nº 8.080/1990",
    "tags": [
      "regionalização",
      "hierarquização",
      "redes de atenção à saúde",
      "diretrizes do SUS"
    ],
    "tip": "Fluxo entre níveis de complexidade: regionalização e hierarquização."
  },
  {
    "id": "fubog2027-85",
    "module": "Saúde Coletiva",
    "text": "Na vigilância em saúde, o coeficiente de incidência é um dos indicadores mais utilizados para medir o impacto das doenças em uma população. Sobre o coeficiente, é CORRETO afirmar:",
    "options": [
      "Expressa o número de casos novos de uma doença em um período determinado, indicando a velocidade de ocorrência na população sob risco",
      "É influenciado pela duração média da enfermidade e calculado pela soma dos casos antigos com os óbitos da rede privada",
      "A incidência cumulativa representa o estoque total de doentes em um ponto fixo do tempo",
      "O coeficiente de prevalência determina o risco individual de adoecimento, e a taxa de ataque mede a imunidade de rebanho"
    ],
    "correctAnswer": 0,
    "explanation": "O coeficiente de incidência é o número de casos novos de uma doença em determinado período dividido pela população sob risco, multiplicado por uma base (por exemplo, 100 mil). Mede o risco e a velocidade com que a doença surge na população.",
    "commentary": "Influenciado pela duração e somando casos antigos (B): isso descreve, de forma distorcida, a prevalência, que depende da incidência e da duração.\n\nIncidência cumulativa como estoque de doentes (C): o estoque de doentes num ponto do tempo é a prevalência pontual.\n\nPrevalência como risco individual e taxa de ataque medindo imunidade (D): o risco é dado pela incidência, e a taxa de ataque é a incidência em surtos.",
    "reference": "Rouquayrol MZ, Gurgel M. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "coeficiente de incidência",
      "indicadores de saúde",
      "epidemiologia"
    ],
    "tip": "Incidência: casos novos/população em risco (risco). Prevalência: casos existentes (carga)."
  },
  {
    "id": "fubog2027-86",
    "module": "Saúde Coletiva",
    "text": "Adolescente de 16 anos solicita prescrição de método contraceptivo e pede que os pais não sejam informados. O médico considera que o jovem tem maturidade para compreender sua condição. Segundo o Código de Ética Médica, a conduta CORRETA do médico é:",
    "options": [
      "Notificar a polícia a respeito do início da vida sexual, em respeito ao princípio da não maleficência",
      "Revelar obrigatoriamente aos responsáveis, pois toda intervenção em menores exige o consentimento dos pais, e o prontuário autoriza a quebra do sigilo por motivos religiosos",
      "Manter o sigilo profissional, pois o adolescente com discernimento é capaz de decidir sobre sua saúde, salvo risco de dano grave",
      "Impor a sua própria autonomia acima da vontade do paciente e indicar internamento compulsório para impedir a transmissão de sífilis congênita"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo Código de Ética Médica (art. 74), é vedado ao médico revelar sigilo relacionado ao paciente menor de idade, inclusive a seus pais ou representantes legais, desde que o menor tenha capacidade de discernimento, salvo quando a não revelação possa acarretar dano ao paciente. Assim, o médico deve manter o sigilo e pode prescrever o contraceptivo, com orientação sobre dupla proteção.",
    "commentary": "Notificar a polícia (A): a vida sexual de adolescente de 16 anos com consentimento não é crime nem exige notificação.\n\nRevelar obrigatoriamente aos responsáveis (B): fere o sigilo do adolescente com discernimento.\n\nImpor a autonomia do médico e internação compulsória (D): não há fundamento ético ou legal.",
    "reference": "Conselho Federal de Medicina – Código de Ética Médica (Resolução CFM nº 2.217/2018), art. 74; Ministério da Saúde – Marco Legal: Saúde, um Direito de Adolescentes",
    "tags": [
      "sigilo médico",
      "saúde do adolescente",
      "anticoncepção",
      "ética médica"
    ],
    "tip": "Adolescente com discernimento: sigilo, salvo risco de dano grave."
  },
  {
    "id": "fubog2027-87",
    "module": "Saúde Coletiva",
    "text": "Os níveis de prevenção descritos por Leavell & Clark orientam as intervenções em saúde desde a fase pré-patogênica até a reabilitação. Sobre esse tema, analise as afirmações:\n\nI. A prevenção secundária consiste no rastreamento de doenças crônicas em pacientes terminais, reduzindo iatrogenias pelo uso de imunobiológicos na fase de patogênese.\nII. A prevenção primária fundamenta-se na proteção específica e na promoção da saúde para reduzir a incidência de agravos, antes do início do processo patológico.\nIII. A prevenção quaternária foca na reintegração do indivíduo à sociedade após a cura, utilizando fisioterapia motora para limitar a invalidez por complicações cirúrgicas.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "Na história natural das doenças de Leavell & Clark, a prevenção primária atua no período pré-patogênico, por promoção da saúde e proteção específica (vacinas, saneamento), reduzindo a incidência. A secundária faz diagnóstico precoce e tratamento oportuno; a terciária, reabilitação; e a quaternária (Jamoulle) evita a medicalização e a iatrogenia.",
    "commentary": "Secundária como rastreamento de terminais com imunobiológicos (I): a secundária é o diagnóstico e tratamento precoces na fase de patogênese.\n\nQuaternária como reintegração e fisioterapia (III): isso descreve a prevenção terciária; a quaternária evita intervenções desnecessárias.\n\nPor isso, apenas a proposição II está correta (B).",
    "reference": "Leavell HR, Clark EG. Medicina Preventiva; Jamoulle M. Prevenção quaternária",
    "tags": [
      "níveis de prevenção",
      "níveis de Leavell e Clark",
      "medicina preventiva"
    ],
    "tip": "Primária: antes da doença; secundária: diagnóstico precoce; terciária: reabilitação; quaternária: evitar iatrogenia."
  },
  {
    "id": "fubog2027-88",
    "module": "Saúde Coletiva",
    "text": "Os princípios doutrinários do SUS, estabelecidos pela Constituição Federal de 1988, orientam toda a organização do sistema público de saúde brasileiro. Acerca disso, analise as sentenças:\n\n1. A universalidade garante o acesso de todos os cidadãos às ações e serviços de saúde em todos os níveis de complexidade, sem discriminação.\n2. A equidade baseia-se no tratamento diferenciado conforme as necessidades dos indivíduos, priorizando grupos vulneráveis para reduzir desigualdades injustas.\n3. A descentralização consiste na transferência da gestão financeira para indústrias farmacêuticas multinacionais, com controle social exercido por conselhos privados.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-F, 3-F",
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-F",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 3,
    "explanation": "1: a universalidade garante acesso de todos às ações e serviços de saúde, em todos os níveis, sem discriminação (V). 2: a equidade trata desigualmente os desiguais, priorizando quem tem mais necessidade para reduzir desigualdades injustas (V). 3: a descentralização transfere responsabilidades e recursos da União para estados e municípios, com direção única em cada esfera e controle social por conselhos de saúde paritários — não para empresas privadas (F).",
    "commentary": "F, F, F (A) e V, F, F (C): as sentenças 1 e 2 estão corretas.\n\nV, V, V (B): a descentralização é entre esferas de governo, não para a indústria.",
    "reference": "Constituição Federal de 1988, arts. 196 a 198; Lei nº 8.080/1990",
    "tags": [
      "princípios do SUS",
      "universalidade",
      "equidade",
      "descentralização"
    ],
    "tip": "Princípios doutrinários: universalidade, integralidade, equidade. Organizativos: descentralização, regionalização, participação."
  },
  {
    "id": "fubog2027-89",
    "module": "Saúde Coletiva",
    "text": "A Declaração de Óbito (DO) é o documento-base do Sistema de Informação sobre Mortalidade (SIM). Sobre o seu preenchimento e fluxo, é CORRETO afirmar:",
    "options": [
      "O preenchimento da causa básica e das causas contribuintes é de responsabilidade médica; os dados são encaminhados às secretarias de saúde para codificação conforme a CID-10",
      "O médico assistente emite a DO em casos de morte por causas externas, sendo necessária a autorização do delegado para o diagnóstico de asfixia",
      "A declaração de óbito fetal é opcional para gestações com duração inferior a 30 semanas e restrita aos hospitais com serviço de patologia",
      "O Serviço de Verificação de Óbitos (SVO) atua em casos de morte violenta, com necropsia realizada por peritos criminais"
    ],
    "correctAnswer": 0,
    "explanation": "O preenchimento da declaração de óbito, incluindo as causas da morte (parte I — sequência até a causa básica — e parte II — causas contribuintes), é de responsabilidade médica. As vias seguem para as secretarias de saúde, onde codificadores treinados aplicam a CID-10 e as regras de seleção da causa básica, alimentando o Sistema de Informações sobre Mortalidade (SIM).",
    "commentary": "Médico assistente emitindo DO em causas externas (B): mortes por causas externas (inclusive suspeitas) são encaminhadas ao IML, cujo perito emite a DO.\n\nDO fetal opcional abaixo de 30 semanas (C): a DO fetal é obrigatória quando a gestação tem 20 semanas ou mais, ou feto com 500 g ou mais, ou 25 cm ou mais.\n\nSVO em mortes violentas com peritos criminais (D): o SVO atende mortes naturais sem diagnóstico definido; as violentas vão ao IML.",
    "reference": "Ministério da Saúde – Declaração de Óbito: manual de instruções para preenchimento (2022); Resolução CFM nº 1.779/2005",
    "tags": [
      "declaração de óbito",
      "SIM",
      "causa básica",
      "ética médica"
    ],
    "tip": "Causa externa → IML; morte natural sem diagnóstico → SVO."
  },
  {
    "id": "fubog2027-90",
    "module": "Saúde Coletiva",
    "text": "No principialismo proposto por Beauchamp e Childress, a autonomia é um dos pilares da bioética clínica. A afirmativa que melhor descreve esse princípio é:",
    "options": [
      "A não maleficência consiste na promoção do bem social acima dos desejos individuais, impedindo a autonomia de pacientes menores",
      "A beneficência sobrepõe-se à autonomia em doenças crônicas transmissíveis, sendo o tratamento compulsório a medida que protege minorias étnicas",
      "Baseia-se na capacidade do indivíduo de decidir sobre intervenções em seu corpo, sendo operacionalizada pelo consentimento livre e esclarecido",
      "O paternalismo médico é a expressão máxima da autonomia profissional, sendo a ocultação de diagnósticos a prática que preserva a família"
    ],
    "correctAnswer": 2,
    "explanation": "No principialismo de Beauchamp e Childress (autonomia, beneficência, não maleficência e justiça), a autonomia é a capacidade do indivíduo de decidir sobre si e sobre intervenções em seu corpo, de forma livre e informada. Na prática clínica, é operacionalizada pelo consentimento livre e esclarecido.",
    "commentary": "Não maleficência como bem social acima dos desejos individuais (A): a não maleficência é não causar dano; a frase confunde princípios.\n\nBeneficência sobrepondo-se à autonomia e tratamento compulsório (B): não há hierarquia fixa entre os princípios; tratamento compulsório é exceção legal.\n\nPaternalismo como expressão da autonomia (D): o paternalismo se opõe à autonomia do paciente, e ocultar diagnósticos fere a ética.",
    "reference": "Beauchamp TL, Childress JF. Principles of Biomedical Ethics, 8ª ed.",
    "tags": [
      "bioética",
      "autonomia",
      "consentimento livre e esclarecido",
      "ética médica"
    ],
    "tip": "Autonomia na prática = consentimento livre e esclarecido."
  },
  {
    "id": "fubog2027-91",
    "module": "Saúde Coletiva",
    "text": "Auxiliar de enfermagem sofre ferimento com agulha contaminada em paciente HIV positivo.\n\nAcerca do Nexo Técnico Epidemiológico Previdenciário (NTEP) nesse contexto, é CORRETO afirmar:",
    "options": [
      "Caracteriza-se pela presença de asbestose em trabalhadores da construção civil, sendo a alta hospitalar o critério para a suspensão do uso de EPI",
      "O NTEP estabelece a relação entre a patologia (CID) e o ramo de atividade econômica da empresa (CNAE), permitindo a presunção de nexo causal quando há correlação estatística",
      "A responsabilidade civil do empregador baseia-se na teoria do risco profissional para doenças genéticas",
      "O auxílio-doença é concedido apenas para acidentes ocorridos dentro do centro cirúrgico"
    ],
    "correctAnswer": 1,
    "explanation": "O Nexo Técnico Epidemiológico Previdenciário (NTEP, Lei 11.430/2006) cruza o código da doença (CID) com o da atividade econômica da empresa (CNAE). Quando há associação estatística significativa, a perícia do INSS presume o nexo entre a doença e o trabalho, cabendo à empresa provar o contrário. O acidente com material biológico, por sua vez, é acidente de trabalho típico e deve ser notificado (CAT e SINAN).",
    "commentary": "Asbestose na construção civil e suspensão de EPI (A): não define o NTEP, e o EPI não é suspenso.\n\nResponsabilidade por doenças genéticas (C): doenças genéticas não são relacionadas ao trabalho; o NTEP é epidemiológico.\n\nAuxílio-doença só para acidentes no centro cirúrgico (D): o benefício é concedido por incapacidade, independentemente do local.",
    "reference": "Lei nº 11.430/2006; Decreto nº 6.042/2007; Ministério da Saúde – Exposição a materiais biológicos (protocolo)",
    "tags": [
      "saúde do trabalhador",
      "nexo técnico epidemiológico",
      "acidente com material biológico",
      "previdência social"
    ],
    "tip": "NTEP: CID × CNAE → nexo presumido."
  },
  {
    "id": "fubog2027-92",
    "module": "Saúde Coletiva",
    "text": "Desde 2017, as transferências federais do SUS passaram a ser organizadas em um modelo unificado de blocos. Sobre o financiamento federal do SUS, é CORRETO afirmar:",
    "options": [
      "As transferências federais são organizadas em dois blocos — custeio e investimento —, destinados, respectivamente, à manutenção dos serviços e à aquisição de equipamentos e obras",
      "O orçamento da saúde provém da arrecadação de impostos sobre grandes fortunas, sendo a vinculação de receitas a garantia de pleno emprego para os agentes comunitários de saúde",
      "A EC 95/2016 estabelece o aumento real anual do teto de gastos baseado na taxa de natalidade, com o superávit primário regulando a atenção primária",
      "O financiamento da vigilância em saúde baseia-se no número de internações hospitalares, com repasse condicionado à erradicação de doenças respiratórias"
    ],
    "correctAnswer": 0,
    "explanation": "Desde a Portaria GM/MS 3.992/2017 (vigente a partir de 2018), os repasses federais fundo a fundo do SUS foram reorganizados em dois blocos: custeio (manutenção das ações e serviços públicos de saúde) e investimento (aquisição de equipamentos, obras e reformas), substituindo os seis blocos anteriores.",
    "commentary": "Imposto sobre grandes fortunas (B): esse imposto não foi regulamentado; a saúde é financiada por tributos gerais e contribuições sociais.\n\nEC 95/2016 com aumento baseado na natalidade (C): a EC 95 congelou os gastos corrigindo-os apenas pela inflação (substituída pelo arcabouço fiscal de 2023).\n\nVigilância financiada por internações (D): o financiamento da vigilância não se baseia em internações.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 3.992/2017; Lei Complementar nº 141/2012",
    "tags": [
      "financiamento do SUS",
      "blocos de financiamento",
      "gestão em saúde"
    ],
    "tip": "Desde 2018: dois blocos — custeio e investimento."
  },
  {
    "id": "fubog2027-93",
    "module": "Saúde Coletiva",
    "text": "A classificação de Schilling é utilizada pela perícia e pela medicina do trabalho para caracterizar o papel do trabalho na gênese ou no agravamento de doenças. Sobre as doenças do Grupo II, é CORRETO afirmar:",
    "options": [
      "A exposição a agentes biológicos em laboratórios causa doenças de notificação compulsória, sendo a presença do agente suficiente para dispensar EPI",
      "O trabalho é causa necessária da doença; o mesotelioma por exposição ao amianto é o exemplo clássico",
      "O trabalho atua como provocador de distúrbios latentes, sendo a depressão maior o desfecho que caracteriza o nexo em trabalhadores autônomos",
      "O trabalho é fator de risco contributivo ou agravante para doenças comuns; são exemplos as patologias cardiovasculares e osteomusculares"
    ],
    "correctAnswer": 3,
    "explanation": "Classificação de Schilling: Grupo I — o trabalho é causa necessária (doenças profissionais, como silicose, asbestose, intoxicação por chumbo); Grupo II — o trabalho é fator de risco contributivo ou adicional para doenças comuns (como doenças cardiovasculares, osteomusculares, alguns cânceres); Grupo III — o trabalho é provocador de distúrbio latente ou agravador de doença já estabelecida (asma, dermatites, transtornos mentais).",
    "commentary": "Agentes biológicos com EPI dispensável (A): não descreve o Grupo II, e EPI nunca é dispensável.\n\nTrabalho como causa necessária (B): isso é o Grupo I.\n\nTrabalho como provocador de distúrbio latente (C): isso é o Grupo III.",
    "reference": "Schilling RSF. More effective prevention in occupational health practice, 1984; Ministério da Saúde – Doenças relacionadas ao trabalho: manual de procedimentos (2001)",
    "tags": [
      "saúde do trabalhador",
      "classificação de Schilling",
      "doenças relacionadas ao trabalho"
    ],
    "tip": "Schilling: I causa necessária; II contributivo; III provocador/agravante."
  },
  {
    "id": "fubog2027-94",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família identifica, na territorialização, altos índices de violência doméstica e uso abusivo de álcool. A ação que corresponde ao momento explicativo do Planejamento Estratégico Situacional nessa situação é:",
    "options": [
      "Definir a carga horária dos profissionais em centros de recuperação, tendo a punição administrativa como base do controle social",
      "Identificar os problemas sob a visão dos atores sociais envolvidos, selecionando as causas sobre as quais a equipe tem capacidade de agir (nós críticos)",
      "Comprar equipamentos de monitoramento eletrônico, tendo a receita tributária como único índice do fluxo de caixa da unidade",
      "Elaborar tabelas de morbidade infantil, indicando repouso absoluto para impedir a recidiva da depressão pós-parto"
    ],
    "correctAnswer": 1,
    "explanation": "No PES, o momento explicativo consiste em identificar e explicar os problemas a partir da visão dos diferentes atores sociais, construindo a árvore explicativa e selecionando os nós críticos — causas sobre as quais a equipe pode agir e cuja mudança tem maior impacto. Diante de violência doméstica e uso abusivo de álcool, é exatamente essa análise que a equipe faria nesse momento.",
    "commentary": "Carga horária e punição (A), compra de equipamentos (C) e tabelas de morbidade infantil com repouso (D): não correspondem ao momento explicativo, nem ao problema identificado.",
    "reference": "Matus C. Política, planejamento e governo; Artmann E. O planejamento estratégico situacional no nível local",
    "tags": [
      "planejamento estratégico situacional",
      "nós críticos",
      "planejamento em saúde",
      "ESF"
    ],
    "tip": "Momento explicativo: problemas e nós críticos."
  },
  {
    "id": "fubog2027-95",
    "module": "Saúde Coletiva",
    "text": "O modelo sanitarista (campanhista) é um dos modelos históricos de organização da atenção à saúde no Brasil. A afirmativa que o caracteriza CORRETAMENTE é:",
    "options": [
      "Baseia-se na participação popular e no controle social das águas, com internação compulsória para reduzir a incidência de câncer de próstata",
      "Tem como foco a assistência médico-hospitalar de alta tecnologia, com o especialista coordenando o cuidado na atenção primária",
      "Organiza-se em campanhas verticais e programas focais voltados ao controle de vetores e doenças transmissíveis em grupos populacionais específicos",
      "Fundamenta-se na gestão de casos de doenças crônicas, tendo a farmácia clínica como ferramenta para reduzir a polifarmácia em áreas rurais"
    ],
    "correctAnswer": 2,
    "explanation": "O modelo sanitarista-campanhista (início do século XX, Oswaldo Cruz) organizava-se em campanhas verticais, com estruturas centralizadas e muitas vezes autoritárias, voltadas ao controle de vetores e doenças transmissíveis (febre amarela, varíola, peste) em grupos ou regiões específicas, para proteger a economia agroexportadora.",
    "commentary": "Participação popular e controle social (A): são características do modelo do SUS, não do campanhista.\n\nAssistência médico-hospitalar de alta tecnologia (B): descreve o modelo médico-assistencial privatista.\n\nGestão de doenças crônicas e farmácia clínica (D): descreve modelos atuais de atenção às condições crônicas.",
    "reference": "Paim JS. Modelos de atenção à saúde no Brasil; Giovanella L et al. Políticas e Sistema de Saúde no Brasil",
    "tags": [
      "modelos de atenção à saúde",
      "modelo sanitarista-campanhista",
      "história da saúde pública"
    ],
    "tip": "Campanhista: campanhas verticais contra doenças transmissíveis."
  },
  {
    "id": "fubog2027-96",
    "module": "Saúde Coletiva",
    "text": "Entre os desenhos de estudo epidemiológicos, a coorte é especialmente útil para avaliar a incidência de desfechos e o risco relativo associado a uma exposição. A afirmativa que caracteriza corretamente esse desenho é:",
    "options": [
      "Acompanha grupos expostos e não expostos ao longo do tempo para observar a incidência do desfecho e calcular o risco relativo",
      "Compara indivíduos doentes e saudáveis em um único momento, calculando a razão de chances para medir a eficácia de vacinas",
      "Utiliza randomização para alocação em grupos de intervenção, sendo o relato de caso a ferramenta que comprova causalidade em doenças raras",
      "Analisa dados agregados de populações nacionais, tendo o efeito ecológico como viés que impede generalização para o nível individual"
    ],
    "correctAnswer": 0,
    "explanation": "O estudo de coorte parte da exposição: acompanha ao longo do tempo grupos expostos e não expostos, livres do desfecho no início, para medir a incidência do desfecho em cada grupo e calcular o risco relativo. Pode ser prospectivo ou histórico.",
    "commentary": "Doentes e saudáveis num único momento com razão de chances (B): mistura o estudo transversal (único momento) com o caso-controle (que parte do desfecho e usa odds ratio).\n\nRandomização (C): caracteriza o ensaio clínico; e relato de caso não comprova causalidade.\n\nDados agregados de populações (D): descreve o estudo ecológico, sujeito à falácia ecológica.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed.; Fletcher RH. Epidemiologia Clínica",
    "tags": [
      "estudo de coorte",
      "risco relativo",
      "desenhos de estudo",
      "epidemiologia"
    ],
    "tip": "Coorte: parte da exposição → incidência → risco relativo."
  },
  {
    "id": "fubog2027-97",
    "module": "Saúde Coletiva",
    "text": "A transição demográfica e a transição epidemiológica são processos simultâneos que alteram a estrutura etária e o perfil de doenças de uma população. A esse respeito, analise as afirmações:\n\nI. A transição epidemiológica caracteriza-se pelo aumento relativo das doenças crônicas não transmissíveis e das causas externas, em substituição ao predomínio das doenças infectocontagiosas.\nII. O bônus demográfico manifesta-se quando a taxa de mortalidade infantil supera a natalidade, promovendo o crescimento da população dependente.\nIII. A transição demográfica ocorre pelo aumento da fecundidade associado à redução da expectativa de vida, resultando em estreitamento do ápice da pirâmide etária.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e III estão corretas",
      "Apenas as proposições II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "I: a transição epidemiológica é a mudança do predomínio das doenças infecciosas para o das doenças crônicas não transmissíveis e das causas externas (V). II: o bônus demográfico ocorre quando a proporção da população em idade ativa é grande em relação à dependente (crianças e idosos), após a queda da fecundidade — não por mortalidade infantil superior à natalidade (F). III: a transição demográfica decorre da queda da mortalidade e depois da fecundidade, com aumento da expectativa de vida e alargamento do ápice da pirâmide (envelhecimento) (F).",
    "commentary": "Apenas II (B), I e III (C) e II e III (D): só a proposição I está correta.",
    "reference": "Vasconcelos AMN, Gomes MMF. Transição demográfica: a experiência brasileira, Epidemiol Serv Saúde 2012",
    "tags": [
      "transição epidemiológica",
      "transição demográfica",
      "bônus demográfico",
      "epidemiologia"
    ],
    "tip": "Transição demográfica: menos mortalidade e fecundidade → envelhecimento (ápice alarga)."
  },
  {
    "id": "fubog2027-98",
    "module": "Saúde Coletiva",
    "text": "Os indicadores de saúde são instrumentos fundamentais para a análise da situação sanitária e o planejamento de intervenções. Acerca disso, analise as sentenças:\n\n1. A taxa de letalidade mede o risco de morte entre as pessoas que apresentam determinada doença, refletindo a gravidade da patologia e a eficácia da assistência médica.\n2. O coeficiente de prevalência expressa a força com que a doença surge em uma população suscetível, sendo calculado pela divisão dos casos novos pelo total de pessoas em risco.\n3. A mortalidade infantil é composta pelos componentes neonatal e pós-neonatal, refletindo condições de assistência ao parto, pré-natal e saneamento básico.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-V, 2-F, 3-F",
      "1-F, 2-F, 3-F"
    ],
    "correctAnswer": 1,
    "explanation": "1: a letalidade é a proporção de óbitos entre os doentes, refletindo a gravidade da doença e a qualidade da assistência (V). 2: a medida da “força com que a doença surge” e calculada com casos novos é a incidência; a prevalência inclui todos os casos existentes (novos e antigos) (F). 3: a mortalidade infantil tem componente neonatal (0–27 dias: precoce e tardio, ligado ao pré-natal e ao parto) e pós-neonatal (28 dias a menos de 1 ano, ligado a condições socioambientais e saneamento) (V).",
    "commentary": "V, V, V (A): a sentença 2 descreve a incidência, não a prevalência.\n\nV, F, F (C) e F, F, F (D): as sentenças 1 e 3 estão corretas.",
    "reference": "RIPSA – Indicadores básicos para a saúde no Brasil, 2ª ed.; Rouquayrol MZ. Epidemiologia & Saúde",
    "tags": [
      "indicadores de saúde",
      "letalidade",
      "mortalidade infantil",
      "epidemiologia"
    ],
    "tip": "Neonatal: pré-natal e parto. Pós-neonatal: condições socioeconômicas e saneamento."
  },
  {
    "id": "fubog2027-99",
    "module": "Saúde Coletiva",
    "text": "Entre os atributos da Atenção Primária à Saúde definidos por Starfield, a coordenação do cuidado exerce papel central na integração das redes assistenciais. A alternativa que melhor descreve esse atributo é:",
    "options": [
      "A equipe de atenção básica integra as informações sobre o paciente provenientes de outros pontos da rede, garantindo continuidade do cuidado",
      "O acesso é garantido pela eliminação de barreiras geográficas e financeiras, sendo o agendamento por ordem de chegada o método que reduz a prevalência de cefaleia",
      "A integralidade fundamenta-se na especialização por sistemas orgânicos, permitindo a fragmentação de prontuários em centros de oncologia",
      "A integralidade consiste na oferta de serviços especializados em cada domicílio, sendo a cirurgia bariátrica o foco das equipes de Saúde da Família"
    ],
    "correctAnswer": 0,
    "explanation": "Para Barbara Starfield, a coordenação do cuidado é a capacidade da atenção primária de integrar as informações sobre o paciente geradas em diferentes pontos da rede (especialistas, hospital, exames), garantindo a continuidade e a organização do cuidado ao longo do tempo.",
    "commentary": "Eliminação de barreiras e agendamento por ordem de chegada (B): descreve, de forma distorcida, o atributo de acesso (primeiro contato).\n\nIntegralidade como especialização e fragmentação (C) e oferta especializada em domicílio (D): a integralidade é a oferta de todos os serviços necessários, com reconhecimento das necessidades; não é especialização nem fragmentação.",
    "reference": "Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (UNESCO/MS, 2002)",
    "tags": [
      "atributos da atenção primária",
      "coordenação do cuidado",
      "atributos de Starfield",
      "atenção primária à saúde"
    ],
    "tip": "Starfield: primeiro contato, longitudinalidade, integralidade e coordenação (+ família, comunidade, cultura)."
  },
  {
    "id": "fubog2027-100",
    "module": "Saúde Coletiva",
    "text": "Em um surto de febre tifoide em uma pequena localidade, foram identificados 200 casos da doença em uma população de 10.000 habitantes; 10 pacientes evoluíram para óbito em 30 dias. Sobre os indicadores epidemiológicos desse surto, é CORRETO afirmar:",
    "options": [
      "A prevalência da febre tifoide foi de 50%, calculada pela divisão dos óbitos pelo total de habitantes",
      "O coeficiente de mortalidade geral foi de 10%, indicando o risco de adoecimento da população suscetível",
      "A taxa de letalidade foi de 5%, indicando a proporção de óbitos entre os doentes",
      "O índice de Swaroop-Uemura baseia-se na contagem de casos novos e define a eficácia da vacinação oral"
    ],
    "correctAnswer": 2,
    "explanation": "Letalidade = óbitos pela doença / casos da doença × 100 = 10 / 200 = 5%. Representa a proporção de doentes que morrem, indicando a gravidade da doença. Já a taxa de ataque (incidência no surto) foi 200 / 10.000 = 2%, e a mortalidade específica, 10 / 10.000 = 0,1%.",
    "commentary": "Prevalência de 50% pela divisão dos óbitos pela população (A): o cálculo e o conceito estão errados; 10/10.000 é 0,1% e corresponde à mortalidade específica.\n\nMortalidade geral de 10% como risco de adoecimento (B): a mortalidade foi 0,1%, e o risco de adoecer é medido pela incidência.\n\nSwaroop-Uemura sobre casos novos e vacinação (D): o índice de Swaroop-Uemura é a proporção de óbitos em pessoas com 50 anos ou mais, indicador de desenvolvimento.",
    "reference": "Rouquayrol MZ, Gurgel M. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "letalidade",
      "indicadores epidemiológicos",
      "surto",
      "epidemiologia"
    ],
    "tip": "Letalidade = óbitos ÷ doentes. Mortalidade = óbitos ÷ população."
  }
];
