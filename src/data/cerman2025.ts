import { Question } from '../types';

// CERMAN 2025 — Comissão Estadual de Residência Médica do Amazonas (residência médica, AM). 100 questões de 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const CERMAN_2025_QUESTIONS: Question[] = [
  {
    "id": "cerman2025-1",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Clínica Médica",
    "text": "Uma paciente de 30 anos, previamente saudável e assintomática, apresenta TSH elevado e T4 livre normal. Ao exame físico, não há sinais de bócio. Qual é a conduta mais apropriada neste caso?",
    "options": [
      "(A) Iniciar levotiroxina.",
      "(B) Realizar cintilografia da tireoide.",
      "(C) Repetir o TSH, T4 livre e anticorpo anti tireoperoxidase em 3 a 6 meses.",
      "(D) Dosar tireoglobulina, anti-tireoglobulina e anti tireoperoxidase para esclarecer a etiologia."
    ],
    "correctAnswer": 2,
    "explanation": "TSH elevado com T4 livre normal é hipotireoidismo subclínico. Em mulher jovem, assintomática, sem bócio e fora da gestação, o primeiro passo é confirmar: repetir TSH e T4 livre em 3 a 6 meses (o TSH se normaliza espontaneamente em boa parte dos casos) e dosar o anti-TPO, que indica tireoidite de Hashimoto e maior risco de progressão para hipotireoidismo clínico.\n\nO tratamento é considerado com TSH ≥ 10 mUI/L, sintomas, desejo de gestar ou anti-TPO positivo com TSH em elevação.",
    "commentary": "Iniciar levotiroxina (A): não se trata um único TSH levemente alterado em paciente assintomática; antes, confirma-se a persistência.\n\nCintilografia (B): serve para investigar hipertireoidismo e nódulos, não hipotireoidismo.\n\nTireoglobulina e anti-Tg (D): a tireoglobulina é marcador de seguimento do câncer diferenciado de tireoide; para etiologia do hipotireoidismo, basta o anti-TPO.",
    "reference": "Consenso da SBEM sobre hipotireoidismo subclínico (2013) / ATA Guidelines for the Treatment of Hypothyroidism (2014)",
    "tags": [
      "hipotireoidismo subclínico",
      "TSH",
      "anti-TPO",
      "tireoide"
    ]
  },
  {
    "id": "cerman2025-2",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Com base nas recomendações da Sociedade Brasileira de Diabetes (SBD) 2024, analise as afirmativas a seguir e assinale a alternativa CORRETA:",
    "options": [
      "(A) Glicemia de jejum, HbA1c e TTGO são os primeiros testes de rastreamento de DM2.",
      "(B) É recomendado utilizar como ponto de corte de glicemia no teste de tolerância à glicose oral (TTGO) de 1h ≥ 209 mg/dl para diagnóstico de DM2 e ≥ 155 mg/dl para detecção de pré diabetes.",
      "(C) O teste de tolerância à glicose oral (TTGO) com glicemia de 1h ≥ 200 mg/dL é recomendado para diagnóstico de diabetes mellitus e é superior ao teste de tolerância à glicose oral (TTGO) de 2h em termos de praticidade e desempenho.",
      "(D) Para diagnóstico de diabetes mellitus, é suficiente a presença de glicemia de jejum ≥ 126 mg/dL em apenas uma amostra de sangue, sem necessidade de confirmação, na presença de sintomas típicos de hiperglicemia."
    ],
    "correctAnswer": 1,
    "explanation": "A diretriz da SBD 2024 incorporou a glicemia de 1 hora no TTGO com 75 g: ≥ 209 mg/dL diagnostica diabetes e ≥ 155 mg/dL indica pré-diabetes (risco aumentado). O teste de 1 hora é mais prático que o de 2 horas e tem bom desempenho para prever complicações.",
    "commentary": "Jejum, HbA1c e TTGO como primeiros testes de rastreamento (A): o rastreamento começa por glicemia de jejum e/ou HbA1c; o TTGO é reservado para casos selecionados.\n\nTTGO de 1 h ≥ 200 mg/dL (C): o corte de 1 hora é ≥ 209 mg/dL, não 200.\n\nJejum ≥ 126 em amostra única com sintomas (D): com sintomas clássicos, o diagnóstico em amostra única é feito pela glicemia ao acaso ≥ 200 mg/dL; a glicemia de jejum alterada precisa ser confirmada em segunda amostra.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Rastreamento e diagnóstico de DM2",
    "tags": [
      "diabetes mellitus",
      "TTGO de 1 hora",
      "diagnóstico",
      "pré-diabetes",
      "SBD 2024"
    ]
  },
  {
    "id": "cerman2025-3",
    "topography": "13",
    "topic": "Esquizofrenia",
    "module": "Clínica Médica",
    "text": "Paciente de 55 anos, sexo feminino, relata que há cerca de 6 meses tem a firme convicção de que está sendo secretamente monitorada por seus vizinhos, que, segundo ela, instalaram câmeras em sua casa para espionar todos os seus movimentos. Ela acredita que os vizinhos comentam sobre ela e discutem suas atividades diárias. Apesar de diversas evidências que refutam essa ideia, a paciente mantém sua crença inabalável. Ela nega ter qualquer alucinação auditiva ou visual e, fora do conteúdo do delírio, consegue manter uma vida funcional: trabalha normalmente como secretária, cuida de sua casa, e interage com familiares sem dificuldades. Não há histórico de transtorno de humor grave ou sintomas psicóticos que não sejam relacionados a esse tema específico. A paciente também nega o uso de substâncias ou outras condições médicas que possam justificar seus sintomas. Qual é o diagnóstico mais provável para este caso, de acordo com o DSM-V-TR?",
    "options": [
      "(A) Esquizofrenia",
      "(B) Transtorno delirante",
      "(C) Transtorno esquizoafetivo",
      "(D) Transtorno de personalidade esquizotípica"
    ],
    "correctAnswer": 1,
    "explanation": "Delírio persistente (há mais de 1 mês), de conteúdo plausível (perseguição pelos vizinhos), sem alucinações proeminentes, sem desorganização e com funcionamento preservado fora do tema do delírio: transtorno delirante, tipo persecutório (DSM-5-TR).",
    "commentary": "Esquizofrenia (A): exige pelo menos dois sintomas psicóticos (delírios, alucinações, discurso desorganizado, comportamento desorganizado ou sintomas negativos) e declínio funcional.\n\nTranstorno esquizoafetivo (C): requer episódio de humor maior concomitante aos sintomas psicóticos.\n\nPersonalidade esquizotípica (D): padrão de excentricidade e ideias de referência ao longo da vida, sem delírio fixo e inabalável.",
    "reference": "American Psychiatric Association — DSM-5-TR (2022)",
    "tags": [
      "transtorno delirante",
      "psicose",
      "DSM-5-TR",
      "psiquiatria"
    ]
  },
  {
    "id": "cerman2025-4",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Clínica Médica",
    "text": "A Hanseníase é uma doença infecciosa de evolução crônica que, embora seja curável, permanece endêmica no Brasil e representa um problema de saúde pública de grande magnitude. Em relação à Hanseníase, assinale a alternativa CORRETA:",
    "options": [
      "(A) A principal fonte de infecção é o contato de um indivíduo suscetível com a pele infectada de indivíduos acometidos pela hanseníase e com alta carga bacilar.",
      "(B) As reações hansênicas são fenômenos inflamatórios agudos que ocorrem em indivíduos não tratados e com alta carga bacilar por ação direta do bacilo no endotélio vascular.",
      "(C) O bacilo de Hansen afeta primariamente os nervos periféricos e a pele, porém em indivíduos com baixa grau de resistência imune ao bacilo, a doença pode acometer a mucosa do trato respiratório superior, olhos, linfonodos, testículos e sistema retículo-endotelial.",
      "(D) A hanseníase indeterminada é aquela que se encontra entre os polos tuberculoide e virchowiano no espectro clínico e baciloscópico da doença, apresentando características imunológicas mistas e lesões polimórficas que vão desde placas bem delimitadas até infiltração difusa."
    ],
    "correctAnswer": 2,
    "explanation": "O Mycobacterium leprae tem tropismo pela pele e pelos nervos periféricos (células de Schwann). Nos pacientes com baixa resistência imune (polo virchowiano), a doença se dissemina e pode acometer mucosa nasal e vias aéreas superiores, olhos, linfonodos, testículos, fígado e baço.",
    "commentary": "Transmissão pela pele (A): a principal via é respiratória, pelas secreções nasais de doentes multibacilares não tratados.\n\nReações por ação direta do bacilo em não tratados (B): as reações hansênicas são imunológicas e podem ocorrer antes, durante ou depois do tratamento.\n\nForma indeterminada entre os polos (D): essa é a forma dimorfa (borderline); a indeterminada é a inicial, com mancha hipocrômica única e mal delimitada, sem bacilos na baciloscopia.",
    "reference": "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase (2022)",
    "tags": [
      "hanseníase",
      "mycobacterium leprae",
      "forma virchowiana"
    ]
  },
  {
    "id": "cerman2025-5",
    "module": "Clínica Médica",
    "text": "Um homem de 62 anos, advogado, com hipertensão arterial, diabetes mellitus tipo 2 e dislipidemia, começou a apresentar fraqueza muscular progressiva nos membros superiores, especialmente nas mãos, com dificuldade para segurar objetos e realizar tarefas manuais finas. Além disso, desenvolveu espasmos musculares e fasciculações visíveis nos braços. O paciente relatou também perda de peso. Nos últimos meses, progrediu para membros inferiores, comprometendo sua capacidade de caminhar. Durante o exame neurológico, foram observados reflexos tendinosos exacerbados, sinal de Babinski bilateral e atrofia muscular. A função sensitiva estava preservada. Com base nesse quadro clínico, qual o diagnóstico?",
    "options": [
      "(A) Esclerose múltipla",
      "(B) Polineuropatia diabética",
      "(C) Síndrome de Guillain-Barré",
      "(D) Esclerose lateral amiotrófica (ELA)"
    ],
    "correctAnswer": 3,
    "explanation": "Fraqueza progressiva com sinais de neurônio motor inferior (atrofia, fasciculações) e superior (hiper-reflexia, Babinski) no mesmo segmento, sensibilidade preservada e perda de peso: esclerose lateral amiotrófica.",
    "commentary": "Esclerose múltipla (A): acomete mulheres jovens, por surtos, com alterações sensitivas, visuais e de coordenação; não causa fasciculações e atrofia.\n\nPolineuropatia diabética (B): predomina o déficit sensitivo distal, com reflexos reduzidos, não exaltados.\n\nGuillain-Barré (C): fraqueza aguda ascendente com arreflexia, não espasticidade e Babinski.",
    "reference": "EFNS Guidelines on the Clinical Management of Amyotrophic Lateral Sclerosis / Critérios de El Escorial revisados",
    "tags": [
      "esclerose lateral amiotrófica",
      "doença do neurônio motor",
      "fasciculações"
    ]
  },
  {
    "id": "cerman2025-6",
    "topography": "1.1",
    "topic": "Esclerose múltipla",
    "module": "Clínica Médica",
    "text": "Uma mulher de 29 anos, advogada, procura atendimento médico devido a episódios recorrentes de fraqueza e formigamento no lado direito do corpo que duram algumas semanas e depois melhoram parcialmente. Ela relata que há cerca de seis meses teve um episódio de perda temporária da visão no olho esquerdo, que foi diagnosticado como neurite óptica e também se resolveu parcialmente. Nos últimos dias, passou a ter dificuldade para caminhar devido à fraqueza na perna direita e desequilíbrio, especialmente ao fazer movimentos rápidos. Durante o exame neurológico, foram observados nistagmo ao desviar o olhar para os lados, sinal de Babinski no lado direito, espasticidade com hiperreflexia em ambos os membros inferiores. A paciente recebeu o diagnóstico de Esclerose Múltipla após a realização de uma ressonância magnética (RM) que revelou lesões em múltiplas áreas da substância branca do cérebro e da medula espinhal. Qual a patogênese da Esclerose Múltipla?",
    "options": [
      "(A) Envolve uma complexa interação entre fatores imunológicos, genéticos e ambientais.",
      "(B) Autoanticorpos contra aquaporina-4, levando a inflamação e dano aos astrócitos.",
      "(C) Deposição de placas de beta-amiloide e emaranhados neurofibrilares.",
      "(D) Presença de autoanticorpos anti-GQ1b que atacam os oligodendrócitos."
    ],
    "correctAnswer": 0,
    "explanation": "A esclerose múltipla é doença inflamatória desmielinizante autoimune do sistema nervoso central. Sua patogênese envolve predisposição genética (HLA-DRB1*15:01), fatores ambientais (infecção pelo vírus Epstein-Barr, baixa vitamina D, tabagismo, obesidade na adolescência) e resposta imune de linfócitos T e B contra a mielina.",
    "commentary": "Anticorpos antiaquaporina-4 (B): são o mecanismo da neuromielite óptica (doença de Devic), uma astrocitopatia.\n\nBeta-amiloide e emaranhados neurofibrilares (C): achados da doença de Alzheimer.\n\nAnti-GQ1b (D): associado à síndrome de Miller Fisher (variante de Guillain-Barré), que afeta nervos periféricos.",
    "reference": "McDonald Criteria 2017 / Consenso Brasileiro para o Tratamento da Esclerose Múltipla (ABN)",
    "tags": [
      "esclerose múltipla",
      "desmielinização",
      "patogênese"
    ]
  },
  {
    "id": "cerman2025-7",
    "topography": "3.2",
    "topic": "Hepatocarcinoma",
    "module": "Clínica Médica",
    "text": "Paciente com cirrose hepática por álcool, Child Pugh A e sem comorbidades, chega ao ambulatório com ultrassonografia de abdome apresentando um nódulo irregular medindo 3,0cm, em seu maior eixo, no seguimento VIII. Foi realizada tomografia de abdome com contraste dinâmico que evidenciou padrão de “wash out” no nódulo. Não se observam sinais de invasão vascular ou linfonodos. Estudos de estadiamento não apresentaram evidências de metástases. Qual a conduta mais adequada?",
    "options": [
      "(A) Repetir a tomografia com contraste em 3 meses para avaliar se haverá aumento do nódulo.",
      "(B) Encaminhar para ablação percutânea por radiofrequência.",
      "(C) Encaminhar para quimioembolização arterial.",
      "(D) Iniciar tratamento com sorafenib."
    ],
    "correctAnswer": 1,
    "explanation": "Nódulo > 1 cm em cirrótico com hiper-realce arterial e wash out na TC dinâmica tem diagnóstico radiológico de carcinoma hepatocelular, sem necessidade de biópsia. Lesão única de 3 cm, Child-Pugh A, sem invasão vascular ou metástase: estádio BCLC 0/A (muito precoce/precoce).\n\nAs opções curativas são ressecção, transplante e ablação. Para nódulo ≤ 3 cm, a ablação percutânea por radiofrequência tem resultados semelhantes aos da ressecção e foi a resposta escolhida.",
    "commentary": "Repetir TC em 3 meses (A): o diagnóstico já está feito pelo padrão típico; adiar o tratamento permite progressão.\n\nQuimioembolização (C): tratamento do estádio intermediário (BCLC B, multinodular).\n\nSorafenibe (D): reservado para doença avançada (BCLC C), com invasão vascular ou metástase.",
    "reference": "BCLC Strategy for Prognosis Prediction and Treatment Recommendation (2022) / Recomendações da SBH sobre carcinoma hepatocelular",
    "tags": [
      "carcinoma hepatocelular",
      "BCLC",
      "ablação por radiofrequência",
      "cirrose"
    ]
  },
  {
    "id": "cerman2025-8",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Clínica Médica",
    "text": "Um paciente de 35 anos de idade, advogado, previamente hígido, foi atendido no serviço de endoscopia de urgência por disfagia aguda devido a impactação de carne. Qual o diagnóstico mais provável?",
    "options": [
      "(A) Estenose péptica",
      "(B) Acalasia chagásica",
      "(C) Esofagite eosinofílica",
      "(D) Esôfago em quebra-nozes"
    ],
    "correctAnswer": 2,
    "explanation": "Impactação alimentar (bolo de carne) em homem jovem sem doença prévia é a apresentação típica da esofagite eosinofílica, doença inflamatória crônica mediada por mecanismo alérgico (Th2). O diagnóstico é feito por biópsias esofágicas com ≥ 15 eosinófilos por campo de grande aumento.",
    "commentary": "Estenose péptica (A): ocorre após longa história de refluxo, geralmente em idosos.\n\nAcalasia chagásica (B): disfagia progressiva para sólidos e líquidos, regurgitação e emagrecimento, em pacientes de área endêmica.\n\nEsôfago em quebra-nozes (D): distúrbio motor com dor torácica e disfagia intermitente, sem impactação.",
    "reference": "Diretriz da ACG para esofagite eosinofílica (2025) / AGA/JTF Guidelines on Eosinophilic Esophagitis (2020)",
    "tags": [
      "esofagite eosinofílica",
      "impactação alimentar",
      "disfagia"
    ]
  },
  {
    "id": "cerman2025-9",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Mulher de 25 anos portadora de valvulopatia mitral vem evoluindo com febre há 3 meses e ao procurar seu médico assistente o mesmo suspeita de um quadro de Endocardite Infecciosa. Em relação aos critérios de Duke modificado é correto afirmar EXCETO:",
    "options": [
      "(A) Para os micro-organismos típicos e atípicos, são necessárias duas hemoculturas, com intervalos de 12 h entre elas para serem coletadas.",
      "(B) O ecocardiograma continua sendo o exame de escolha e um critério maior. Pode apresentar como alterações a vegetação ou as complicações da EI, como perfuração ou pseudoaneurisma de folhetos, abscesso, pseudoaneurisma ou fístula paravalvares ou deiscência de prótese valvar.",
      "(C) Para os micro-organismos típicos, são necessárias duas hemoculturas positivas e para os atípicos três hemoculturas, que não necessitam mais de longos intervalos entre elas para serem coletadas.",
      "(D) São incluídos nos critérios menores a evidência clínica ou radiológica de embolia arterial, infarto pulmonar, abscesso cerebral ou esplênico, aneurisma micótico, hemorragia intracraniana, hemorragia conjuntival, lesões de Janeway, púrpura purulenta."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. Pelos critérios de Duke modificados (e pela revisão Duke-ISCVID de 2023), o microrganismo típico de endocardite (estreptococos do grupo viridans, S. gallolyticus, grupo HACEK, S. aureus, enterococo) precisa crescer em duas hemoculturas separadas, sem exigência de intervalo de 12 horas. Para microrganismos que também são contaminantes comuns, exigem-se mais amostras.\n\nA alternativa A, ao exigir intervalo de 12 horas para todos, está errada.",
    "commentary": "Ecocardiograma como critério maior (B): correto; vegetação, abscesso, pseudoaneurisma, perfuração, fístula ou nova deiscência de prótese são critérios maiores.\n\nTípicos em 2 hemoculturas e atípicos em 3, sem longos intervalos (C): correto pela revisão de 2023.\n\nFenômenos vasculares como critério menor (D): correto; embolia arterial, infarto pulmonar séptico, aneurisma micótico, hemorragia intracraniana, hemorragia conjuntival e lesões de Janeway.",
    "reference": "2023 Duke-ISCVID Criteria for Infective Endocarditis (Clin Infect Dis, 2023) / ESC Guidelines for the management of endocarditis (2023)",
    "tags": [
      "endocardite infecciosa",
      "critérios de Duke",
      "hemoculturas"
    ]
  },
  {
    "id": "cerman2025-10",
    "topography": "10",
    "topic": "Sepse",
    "module": "Clínica Médica",
    "text": "Sobre a Síndrome do choque tóxico estreptocócico, pode-se afirmar, à EXCEÇÃO de uma:",
    "options": [
      "(A) A duração do tratamento dos pacientes com bacteremia deve ser de pelo menos 14 dias.",
      "(B) A terapia empírica para tratamento desta Síndrome deve incluir o seguinte regime de antibioticoterapia: clindamicina + vancomicina associado a um carbapenêmico ou piperacilina - tazobactan.",
      "(C) A mortalidade devido à Síndrome do choque tóxico estreptocócico é substancialmente menor do que a mortalidade devido à Síndrome do choque tóxico estafilocócico.",
      "(D) Uma das terapias adjuvantes é o uso de Imunoglobulina Intravenosa por 03 dias e vários mecanismos foram sugeridos para esta intervenção: a opsonização de estreptococos do grupo A, a neutralização de toxinas estreptocócicas, a inibição da proliferação de células T e a inibição de citocinas inflamatórias, como TNF-alfa e interleucina 6."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a alternativa INCORRETA. A síndrome do choque tóxico estreptocócico (Streptococcus pyogenes, muitas vezes com fasciíte necrosante) tem mortalidade de 30–70%, bem maior que a do choque tóxico estafilocócico (abaixo de 5–10% na forma menstrual). Por isso a afirmação C está errada.",
    "commentary": "Pelo menos 14 dias na bacteremia (A): correto, é a duração recomendada para bacteremia por S. pyogenes com choque.\n\nClindamicina + vancomicina + carbapenêmico ou piperacilina-tazobactam (B): correto como esquema empírico, antes da identificação do agente; a clindamicina inibe a síntese de toxinas.\n\nImunoglobulina IV por 3 dias (D): correto; é terapia adjuvante, que neutraliza superantígenos e modula a resposta inflamatória.",
    "reference": "IDSA Practice Guidelines for Skin and Soft Tissue Infections (2014) / UpToDate — Invasive group A streptococcal infection and toxic shock syndrome",
    "tags": [
      "choque tóxico estreptocócico",
      "streptococcus pyogenes",
      "clindamicina",
      "imunoglobulina"
    ]
  },
  {
    "id": "cerman2025-11",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 35 anos de idade, vítima de acidente motociclístico (queda da moto após colisão contra um poste), cursou com traumatismo cranioencefálico e torácico. Adentra na Emergência pronunciando sons incompreensíveis, localizando dor aos estímulos dolorosos, porém sem abertura ocular. Taquidispnéico, diaforético, apresentava estase de jugulares a 45º, murmúrio vesicular abolido à esquerda, com hipertimpanismo à percussão ipsilateral. À rápida inspeção, observava-se lesão contusa em couro cabeludo, com sangramento ativo e queda da língua, com grande esforço respiratório. Mucosas descoradas 3+/4+. Dados vitais à admissão, PA=70X40mmHg, pulso=140bpm, FR=40irpm. Em relação ao estado de choque desse paciente, pode-se afirmar que mais provavelmente se trata de choque:",
    "options": [
      "(A) misto: cardiogênico e hipovolêmico",
      "(B) misto: obstrutivo e hipovolêmico",
      "(C) hipovolêmico apenas",
      "(D) neurogênico apenas"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma torácico com murmúrio abolido e hipertimpanismo à esquerda, estase jugular, taquidispneia e hipotensão: pneumotórax hipertensivo — choque obstrutivo. Somam-se mucosas muito descoradas e couro cabeludo sangrando ativamente (o couro cabeludo pode sangrar muito), sugerindo também componente hipovolêmico.\n\nA conduta imediata é descompressão torácica (agulha no 4º–5º espaço intercostal, linha axilar média, no adulto), via aérea definitiva (Glasgow 8) e controle da hemorragia.",
    "commentary": "Cardiogênico e hipovolêmico (A): a estase jugular aqui se explica pelo pneumotórax hipertensivo, não por falência de bomba.\n\nHipovolêmico apenas (C): não explica turgência jugular nem o hipertimpanismo com murmúrio abolido.\n\nNeurogênico (D): o choque neurogênico cursa com bradicardia e pele quente; o paciente está taquicárdico e diaforético.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. — Choque e trauma torácico",
    "tags": [
      "pneumotórax hipertensivo",
      "choque obstrutivo",
      "choque hipovolêmico",
      "ATLS"
    ]
  },
  {
    "id": "cerman2025-12",
    "topography": "6.1",
    "topic": "Esclerose sistêmica",
    "module": "Clínica Médica",
    "text": "Na esclerose sistêmica é considerado fator de risco para acometimento renal; assinale a alternativa CORRETA:",
    "options": [
      "(A) Sexo masculino.",
      "(B) Forma limitada da doença.",
      "(C) Uso prévio de corticoesteroide.",
      "(D) Início da doença na pós menopausa."
    ],
    "correctAnswer": 2,
    "explanation": "A crise renal esclerodérmica (hipertensão acelerada e lesão renal aguda) tem como fatores de risco: forma cutânea difusa e de progressão rápida, doença inicial (primeiros 4 anos), anticorpo anti-RNA polimerase III e uso de corticoide em dose moderada ou alta (> 15 mg/dia de prednisona).",
    "commentary": "Sexo masculino (A): não é fator de risco clássico da crise renal.\n\nForma limitada (B): o risco é maior na forma difusa.\n\nInício na pós-menopausa (D): não é fator de risco descrito.",
    "reference": "EULAR recommendations for the treatment of systemic sclerosis (2023) / Consenso da SBR para esclerose sistêmica",
    "tags": [
      "esclerose sistêmica",
      "crise renal esclerodérmica",
      "corticoide"
    ]
  },
  {
    "id": "cerman2025-13",
    "topography": "6.2",
    "topic": "Hérnia de disco",
    "module": "Clínica Médica",
    "text": "Paciente de 64 anos, obesa, após esforço físico intenso apresenta dor lombar com irradiação para a região posterior de coxa direita, joelho, perna e planta do pé direito. Sente formigamentos e choques quando flexiona a coluna ou o quadril direito. A dor a impede de andar. Podemos afirmar que se trata de:",
    "options": [
      "(A) Lombalgia mecânica comum.",
      "(B) Estenose de canal lombar com claudicação neurogênica.",
      "(C) Radiculopatia L4, provavelmente por hérnia discal L4-L5.",
      "(D) Radiculopatia S1, provavelmente por hérnia discal entre L5-S1."
    ],
    "correctAnswer": 3,
    "explanation": "Lombalgia após esforço com dor irradiada para face posterior da coxa, perna e planta do pé, piorando com a flexão (manobra de tensão radicular): radiculopatia de S1, na maioria das vezes por hérnia discal L5-S1.\n\nNa radiculopatia S1 também se esperam reflexo aquileu reduzido e fraqueza da flexão plantar.",
    "commentary": "Lombalgia mecânica comum (A): não irradia abaixo do joelho nem causa parestesias em dermátomo.\n\nEstenose de canal com claudicação neurogênica (B): dor nas pernas ao caminhar, que melhora ao sentar ou flexionar o tronco; aqui a flexão piora.\n\nRadiculopatia L4 (C): irradia para a face anterior da coxa e medial da perna, com reflexo patelar reduzido.",
    "reference": "North American Spine Society — Diagnosis and Treatment of Lumbar Disc Herniation with Radiculopathy (2012)",
    "tags": [
      "radiculopatia",
      "hérnia de disco",
      "dor lombar",
      "S1"
    ]
  },
  {
    "id": "cerman2025-14",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Clínica Médica",
    "text": "São glomerulopatias que podem cursar com Síndrome Nefrótica, EXCETO:",
    "options": [
      "(A) Nefropatia por IgA",
      "(B) Nefropatia Membranosa",
      "(C) Nefropatia por Lesão Mínima",
      "(D) Nefropatia por Anticorpo Anti-Membrana Basal Glomerular"
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a EXCEÇÃO. A doença antimembrana basal glomerular (anti-MBG, síndrome de Goodpasture quando há hemorragia pulmonar) cursa com glomerulonefrite rapidamente progressiva, crescêntica, de padrão nefrítico — não com síndrome nefrótica.",
    "commentary": "Nefropatia por IgA (A): a apresentação típica é hematúria, mas pode cursar com proteinúria nefrótica.\n\nNefropatia membranosa (B): principal causa de síndrome nefrótica primária no adulto.\n\nLesão mínima (C): principal causa de síndrome nefrótica na criança.",
    "reference": "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases",
    "tags": [
      "glomerulopatias",
      "síndrome nefrótica",
      "doença anti-MBG"
    ]
  },
  {
    "id": "cerman2025-15",
    "topography": "6.1",
    "topic": "Lúpus eritematoso sistêmico",
    "module": "Clínica Médica",
    "text": "São manifestações que sugerem acometimento renal no Lúpus Eritematoso Sistêmico; assinale a adequada:",
    "options": [
      "(A) Albuminúria <10mg e Hipertensão Arterial.",
      "(B) Hematúria, hipertensão arterial, proteinúria.",
      "(C) Anemia, creatinina sérica reduzida e edema.",
      "(D) Anemia, rins reduzidos de tamanho e alopecia."
    ],
    "correctAnswer": 1,
    "explanation": "A nefrite lúpica se manifesta com hematúria (sedimento ativo, cilindros hemáticos), proteinúria (≥ 0,5 g/24 h) e hipertensão, podendo evoluir com elevação da creatinina. Esses achados indicam biópsia renal para classificação.",
    "commentary": "Albuminúria < 10 mg (A): é albuminúria normal, sem significado de lesão renal.\n\nCreatinina reduzida (C): o acometimento renal eleva a creatinina; anemia e edema são inespecíficos.\n\nRins reduzidos e alopecia (D): rins pequenos indicam doença renal crônica avançada; alopecia é manifestação cutânea.",
    "reference": "EULAR/ERA-EDTA recommendations for lupus nephritis (2019) / KDIGO 2024 Lupus Nephritis Guideline",
    "tags": [
      "lúpus eritematoso sistêmico",
      "nefrite lúpica",
      "hematúria",
      "proteinúria"
    ]
  },
  {
    "id": "cerman2025-16",
    "topography": "12",
    "topic": "Síndrome da fragilidade",
    "module": "Clínica Médica",
    "text": "Sobre reserva funcional e funcionalidade, assinale a alternativa CORRETA:",
    "options": [
      "(A) Paciente dependente tem maior reserva funcional.",
      "(B) A reserva funcional baixa indica menor risco de reações adversas a polifarmácia.",
      "(C) A reserva funcional destina-se à resposta fisiológica para recuperação da homeostase após alguma situação de estresse ao organismo.",
      "(D) Paciente 90 anos totalmente independente para atividades instrumentais e básicas de vida diária, apenas portador de HAS, tem menor reserva funcional que um paciente de 85 anos acamado, totalmente dependente, com múltiplas comorbidades."
    ],
    "correctAnswer": 2,
    "explanation": "Reserva funcional é a capacidade dos órgãos e sistemas de responder a um estresse (infecção, cirurgia, medicamentos) e recuperar a homeostase. Com o envelhecimento e as doenças, essa reserva cai (homeoestenose), o que explica a fragilidade e a maior vulnerabilidade a eventos adversos.",
    "commentary": "Dependente tem maior reserva (A): dependência funcional reflete reserva reduzida.\n\nReserva baixa com menor risco de reações adversas (B): é o contrário; reserva baixa aumenta o risco de efeitos adversos da polifarmácia.\n\nIdoso de 90 anos independente com menor reserva que um de 85 acamado (D): a funcionalidade é melhor marcador de reserva que a idade; o independente tem maior reserva.",
    "reference": "Freitas EV. Tratado de Geriatria e Gerontologia, 5ª ed. — Avaliação geriátrica ampla",
    "tags": [
      "geriatria",
      "reserva funcional",
      "funcionalidade",
      "fragilidade"
    ]
  },
  {
    "id": "cerman2025-17",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Quanto a vacinação para pacientes com DPOC, assinale a alternativa INCORRETA:",
    "options": [
      "(A) A vacina para Herpes Zoster está recomendada para pacientes acima dos 50 anos.",
      "(B) A vacinação para Influenza e COVID-19 está recomendada para todos os pacientes.",
      "(C) A vacina para Vírus Sincicial Respiratório (VSR) está recomendada para pacientes acima de 60 anos de idade.",
      "(D) Os pacientes que recebem a vacina conjugada 13 ou 15 Valente não precisam mais receber a vacina polissacarídica Pneumo 23."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a alternativa INCORRETA. No calendário de vacinas para DPOC (GOLD 2025 e SBIm), quem recebe a pneumocócica conjugada 13 ou 15 deve completar com a polissacarídica 23-valente (VPP23), cerca de 6 a 12 meses depois. A dispensa da VPP23 vale apenas para quem recebeu a conjugada 20-valente (ou 21).",
    "commentary": "Herpes-zóster acima de 50 anos (A): correto, recomendada para adultos com DPOC a partir dos 50 anos.\n\nInfluenza e COVID-19 para todos (B): correto.\n\nVSR acima de 60 anos (C): correto, recomendada pela GOLD para pessoas com DPOC a partir de 60 anos.",
    "reference": "GOLD — Global Strategy for COPD (2025) / Calendário de Vacinação SBIm — Pacientes Especiais",
    "tags": [
      "DPOC",
      "vacinação",
      "vacina pneumocócica",
      "imunização do adulto"
    ]
  },
  {
    "id": "cerman2025-18",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Clínica Médica",
    "text": "Em um paciente com tuberculose pulmonar e hepatotoxicidade ao esquema básico sem hepatopatia prévia, a reintrodução dos fármacos após a normalização da função hepática deve ser iniciada com a seguinte associação:",
    "options": [
      "(A) Rifampicina e etambutol.",
      "(B) Rifampicina e isoniazida.",
      "(C) Rifampicina e pirazinamida.",
      "(D) Isoniazida e pirazinamida."
    ],
    "correctAnswer": 0,
    "explanation": "Na hepatotoxicidade pelo esquema básico (RHZE), suspendem-se os fármacos até as transaminases caírem abaixo de 2 vezes o limite superior e os sintomas melhorarem. A reintrodução é sequencial: começa com rifampicina + etambutol, depois isoniazida e, por último, pirazinamida (a mais hepatotóxica), com controle das enzimas a cada etapa.",
    "commentary": "Rifampicina e isoniazida (B): a isoniazida entra depois, para identificar o fármaco responsável.\n\nRifampicina e pirazinamida (C): a pirazinamida é a última a ser reintroduzida.\n\nIsoniazida e pirazinamida (D): são duas das drogas mais hepatotóxicas; não se reintroduzem juntas.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019)",
    "tags": [
      "tuberculose",
      "hepatotoxicidade",
      "esquema básico",
      "reintrodução"
    ]
  },
  {
    "id": "cerman2025-19",
    "module": "Clínica Médica",
    "text": "Homem, 51 anos, retorna à consulta ambulatorial para resultado de exames após acidente vascular cerebral isquêmico há 1 mês, com boa evolução da fase aguda. Antecedente pessoal: cirurgia por úlcera gástrica hemorrágica há 2 anos. Hemoglobina = 13 g/dL, VCM = 73 fL, leucócitos = 9.000/µL (segmentados 76%, linfócitos 15%, monócitos 5%; eosinófilos 4%), plaquetas = 850.000/µL. Ferritina = 4 ng/mL. Exame físico: baço palpável a 2 cm do rebordo costal esquerdo. Qual o diagnóstico?",
    "options": [
      "(A) Traço talassêmico.",
      "(B) Anemia ferropriva.",
      "(C) Trombofilia hereditária.",
      "(D) Trombocitemia essencial."
    ],
    "correctAnswer": 3,
    "explanation": "Plaquetas em 850.000/µL com esplenomegalia e evento trombótico arterial (AVC) em homem de 51 anos sugerem neoplasia mieloproliferativa — a banca considerou trombocitemia essencial.\n\nVale notar que há ferropenia (ferritina 4, VCM 73), provavelmente pela gastrectomia, e a deficiência de ferro também causa trombocitose reativa. Na prática, corrige-se o ferro e pesquisam-se as mutações JAK2, CALR e MPL antes de fechar o diagnóstico; a esplenomegalia e a trombose favorecem a neoplasia mieloproliferativa.",
    "commentary": "Traço talassêmico (A): microcitose com ferritina normal e eritrocitose relativa; não explica trombocitose, esplenomegalia e trombose.\n\nAnemia ferropriva (B): há ferropenia e microcitose, e ela pode causar trombocitose reativa, mas a hemoglobina de 13 g/dL está no limite inferior e a esplenomegalia com AVC sugerem doença mieloproliferativa.\n\nTrombofilia hereditária (C): favorece trombose venosa e não altera contagem de plaquetas nem o baço.",
    "reference": "WHO Classification of Myeloid Neoplasms (5ª ed., 2022) / NCCN Guidelines — Myeloproliferative Neoplasms",
    "tags": [
      "trombocitemia essencial",
      "neoplasia mieloproliferativa",
      "trombocitose",
      "deficiência de ferro"
    ]
  },
  {
    "id": "cerman2025-20",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Clínica Médica",
    "text": "A respeito da Leucemia Mieloide Crônica (L.M.C.) em fase blástica, assinale a alternativa CORRETA:",
    "options": [
      "(A) Em pacientes em uso de Inibidor de Tirosino Quinase na fase blástica, o prognóstico é menos sombrio.",
      "(B) Pacientes que vinham usando inibidores de Tirosino-Quinase devem substituir o medicamento que utilizavam por outra droga da mesma classe terapêutica.",
      "(C) O Transplante Autólogo de Medula Óssea é a primeira linha de tratamento.",
      "(D) Hidroxiureia é um dos tratamentos de escolha."
    ],
    "correctAnswer": 0,
    "explanation": "A fase blástica da leucemia mieloide crônica tem prognóstico ruim, mas os inibidores de tirosina quinase (ITK), em geral combinados à quimioterapia de indução, melhoraram a sobrevida e permitem levar o paciente ao transplante alogênico, que é o tratamento com intenção curativa.",
    "commentary": "Trocar por outro ITK da mesma classe (B): a escolha depende das mutações do BCR-ABL; troca-se por ITK eficaz contra a mutação encontrada, junto com quimioterapia, não simplesmente por qualquer droga da classe.\n\nTransplante autólogo como primeira linha (C): o transplante indicado é o alogênico.\n\nHidroxiureia como escolha (D): serve apenas para citorredução temporária.",
    "reference": "ELN Recommendations for the management of chronic myeloid leukemia (2020) / NCCN Guidelines — CML",
    "tags": [
      "leucemia mieloide crônica",
      "crise blástica",
      "inibidores de tirosina quinase"
    ]
  },
  {
    "id": "cerman2025-21",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Você está de plantão em um hospital terciário e atende um paciente do sexo masculino, 23 anos, ciclista vítima de atropelamento em via pública. O paciente é trazido pelo SAMU imobilizado, em prancha longa, com acesso venoso periférico sendo administrado 500ml de Ringer Lactato. Estava consciente e relatava contusão abdominal pelo guidão da bicicleta devido ao trauma. O tórax era atípico, estável, com ausculta cardiopulmonar sem alterações. FC: 90bpm, FR: 16irpm, P.A.: 120x80mmHg, sem sangramentos externos. Glasgow 15 pontos, pupilas isocóricas e reativas a luz, sem déficits motores ou sensitivos periféricos. O abdome apresentava escoriações em abdome superior, era doloroso à palpação profunda, porém sem sinais de irritação peritoneal à admissão. Bacia estável, sem deformidades de membros ou lesões no dorso. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Neste momento, a melhor conduta para o caso é a realização de ultrassonografia de abdome para diagnóstico de lesões de vísceras maciças e ocas.",
      "(B) De acordo com o mecanismo de trauma apresentado, há indicação precisa de lavado peritoneal diagnóstico devido ao elevado risco de lesão pancreática.",
      "(C) Mesmo que a tomografia de abdome deste paciente evidencie trauma esplênico com extravasamento de contraste pela lesão, o tratamento não operatório pode ser factível.",
      "(D) Trauma abdominal contuso associada a dor abdominal ao exame físico, mesmo na ausência de irritação peritoneal, indica laparotomia exploradora pela elevada probabilidade de lesões de vísceras maciças."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente estável com trauma abdominal contuso e dor à palpação deve fazer tomografia com contraste. Lesão esplênica com extravasamento de contraste (blush) em paciente hemodinamicamente estável não obriga a operar: o tratamento não operatório pode ser mantido com angioembolização, em centro com estrutura de UTI, cirurgia e radiologia intervencionista.",
    "commentary": "Ultrassonografia para vísceras maciças e ocas (A): o FAST detecta líquido livre, mas não caracteriza lesões de órgãos nem de vísceras ocas; no estável, o exame indicado é a TC.\n\nLavado peritoneal pela suspeita de lesão pancreática (B): o lavado não avalia o retroperitônio (pâncreas) e foi substituído pelo FAST e pela TC.\n\nDor abdominal sem peritonite indica laparotomia (D): no paciente estável e sem peritonite, a conduta é investigar com TC e operar só se houver indicação.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. / WSES Guidelines on splenic trauma (2017)",
    "tags": [
      "trauma abdominal contuso",
      "trauma esplênico",
      "tratamento não operatório",
      "angioembolização"
    ]
  },
  {
    "id": "cerman2025-22",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Trabalhador da construção civil, sexo masculino, 40 anos, vítima de queda de andaime de cerca de 3 metros, foi atendido no HPS 28 de Agosto em franco choque hipovolêmico devido a fratura de bacia e de fêmur esquerdo. Não havia lesões significativas em crânio, tórax e cavidade peritoneal. O paciente foi submetido a controle da hemorragia com transfusões de hemoderivados, empacotamento pélvico e fixação das fraturas, sendo encaminhado à UTI. À admissão observou-se hemoglobina 7g/dl, hematócrito 21%, 22.000 leucócitos com 80% de polimorfonucleares, gasometria com pH 7.3, HCO₃⁻ (valor não informado no caderno) e Excesso de Base de -6, lactato 4,5mmol/L e potássio 5,8mEq/l. Sobre o caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) O uso do ácido tranexâmico está contraindicado para o caso acima devido ao resultante aumento da permeabilidade capilar e hiperestimulação da resposta inflamatória.",
      "(B) A extensa lesão tecidual associada a ativação desordenada de neutrófilos, produção de citocinas pró-inflamatórias, ativação do sistema de complemento e de células endoteliais podem resultar em predisposição a falência de múltiplos órgãos mesmo na ausência de infecção.",
      "(C) A leucócitose observada neste momento não é secundária a infecção, no entanto a resposta inflamatória sistêmica resulta em imunodepressão e maior predisposição a sepse.",
      "(D) A hiperpotassemia observada é secundária a lesão tecidual associada a transfusão de hemoderivados e pode ser agravada caso o paciente evolua com insuficiência renal aguda."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. O ácido tranexâmico é recomendado no trauma com hemorragia significativa, idealmente nas primeiras 3 horas (estudo CRASH-2), porque reduz a mortalidade por sangramento. Não há contraindicação por aumento de permeabilidade capilar ou hiperinflamação.",
    "commentary": "Lesão tecidual extensa com resposta inflamatória e falência de órgãos (B): correto; a SIRS do trauma pode levar a disfunção múltipla de órgãos sem infecção.\n\nLeucocitose sem infecção, seguida de imunodepressão (C): correto; a resposta inflamatória é seguida de uma fase anti-inflamatória (CARS) que predispõe a sepse.\n\nHiperpotassemia por lesão tecidual e transfusão (D): correto; pode piorar com a lesão renal aguda.",
    "reference": "CRASH-2 Trial (Lancet, 2010) / ATLS 10ª ed. / European guideline on management of major bleeding after trauma (2023)",
    "tags": [
      "ácido tranexâmico",
      "trauma pélvico",
      "SIRS",
      "choque hemorrágico"
    ]
  },
  {
    "id": "cerman2025-23",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 28 anos, obesa, dá entrada no serviço de pronto atendimento queixando dor abdominal contínua, intensa, em andar superior do abdome, irradiada para o dorso, há cerca de 8 horas, associada a vômitos. Nega febre, comorbidades, história de abuso de álcool e de episódios anteriores de dor. Ao exame físico, apresentava fascies de dor, lúcida e orientada, anictérica, FC: 90bpm, FR: 24irpm, P.A.: 100x80mmHg e oligúria. Seu abdome é globoso, bastante doloroso à palpação do andar superior, sem sinais de irritação peritoneal. Na avaliação laboratorial inicial, apresentava hemoglobina 12g/dl, hematócrito 42%, 11.000 leucócitos, lipase sérica de 1.800U/l, uréia: 20mg/dl e creatinina 1,0mg/dl. Sobre a conduta inicial para o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) O tratamento clínico inicial deve ser baseado em expansão volêmica vigorosa e antibioticoprofilaxia.",
      "(B) A hiperlipasemia denota provável evolução para quadro grave, indicando a avaliação tomográfica urgente.",
      "(C) Caso a ultrassonografia de abdome inicial não evidencie cálculos na vesícula, o próximo passo na definição da etiologia deste caso é a dosagem de triglicerídeos séricos.",
      "(D) A ausência de icterícia associada a leucócitose e ao padrão progressivo da dor indicam tratamento precoce com papilotomia endoscópica para prevenção da evolução para formas graves da doença."
    ],
    "correctAnswer": 2,
    "explanation": "Dor epigástrica em faixa irradiada para o dorso com lipase acima de 3 vezes o normal: pancreatite aguda. Investigação etiológica: primeiro ultrassonografia de abdome para litíase biliar; sem cálculos e sem etilismo, o próximo passo é dosar triglicérides (hipertrigliceridemia > 1.000 mg/dL é a terceira causa) e cálcio.",
    "commentary": "Expansão vigorosa e antibiótico profilático (A): a hidratação deve ser moderada e guiada por metas (estudo WATERFALL), e antibiótico profilático não é recomendado.\n\nHiperlipasemia indica gravidade e TC urgente (B): o nível de lipase não se correlaciona com a gravidade; a TC é feita após 72 h, se houver piora ou dúvida diagnóstica.\n\nPapilotomia precoce (D): CPRE só se houver colangite ou obstrução biliar persistente; a paciente está anictérica.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024) / Estudo WATERFALL (NEJM, 2022)",
    "tags": [
      "pancreatite aguda",
      "hipertrigliceridemia",
      "etiologia"
    ]
  },
  {
    "id": "cerman2025-24",
    "topography": "3.3",
    "topic": "Colecistite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, diabética, 72 anos de idade, é encaminhada de hospital do Interior do Estado para melhor suporte clínico e conduta especializada. A paciente iniciou quadro de dor tipo cólica em hipocôndrio direito, progressiva, irradiada para o dorso, associada a vômitos, iniciada após alimentação rica em gordura, há 6 dias sendo internada para tratamento clínico com analgesia e antibióticos. No entanto, evoluiu de forma insatisfatória, com queda do estado geral, persistência da dor e vômitos e início de febre, sendo solicitada sua transferência para Manaus. À admissão, a paciente se apresentava em regular estado geral, sonolenta, anictérica, taquicárdica, levemente taquipneica e hipotensa, com abdome algo distendido onde se palpa massa dolorosa em hipocôndrio direito. Leucograma: 18.000 com desvio à esquerda, uréia: 68mg/dl, creatinina 2.0mg/dl, TAP: 60%. A ultrassonografia evidenciou vesícula biliar distendida de paredes espessadas com infiltração de gás, com conteúdo espesso com debris, contendo cálculos e presença de nível hidroaéreo no seu interior. Sobre o caso acima, assinale a alternativa INCORRETA:",
    "options": [
      "(A) A colecistostomia percutânea transhepática guiada por USG é opção terapêutica adequada neste momento.",
      "(B) O caso pode ser classificado como Tokyo III, estando indicada a compensação clínica em UTI antes e após o controle do foco séptico.",
      "(C) Caso o tratamento não operatório seja efetivo no controle do foco séptico, a colecistectomia deve ser postergada após um período de 6 semanas.",
      "(D) Devido ao risco iminente de perfuração da vesícula, podemos afirmar que não haverá melhora das repercussões sistêmicas sem colecistectomia urgente para este caso."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a alternativa INCORRETA. Colecistite aguda com gás na parede (enfisematosa) e disfunção de órgãos (rebaixamento de consciência, hipotensão, creatinina 2,0, TAP 60%): grau III (grave) de Tóquio.\n\nNo paciente grave e de alto risco cirúrgico, a drenagem percutânea da vesícula (colecistostomia) controla o foco séptico e melhora a condição sistêmica, permitindo colecistectomia posterior. Afirmar que não haverá melhora sem colecistectomia urgente está errado.",
    "commentary": "Colecistostomia percutânea (A): correto, é a opção para Tóquio III em paciente sem condições cirúrgicas.\n\nTóquio III com suporte em UTI (B): correto.\n\nColecistectomia após cerca de 6 semanas (C): correto, colecistectomia de intervalo após o controle do quadro.",
    "reference": "Tokyo Guidelines 2018 (TG18) — Acute cholecystitis",
    "tags": [
      "colecistite aguda",
      "colecistite enfisematosa",
      "diretrizes de Tóquio",
      "colecistostomia"
    ]
  },
  {
    "id": "cerman2025-25",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 70 anos, com história de dor abdominal tipo cólica difusa, acompanhada de vômitos e parada de eliminação de gases e fezes há 3 dias. Refere quadro de constipação crônica com uso frequente de medicações laxativas. Ao exame físico se encontra em REG, emagrecida, restrita ao leito, afebril, taquicárdica, taquipneica e normotensa. Seu abdome é algo distendido, sem cicatrizes ou circulação colateral, RHA ausentes, difusamente doloroso à palpação, porém dor mais intensa à palpação profunda da fossa ilíaca esquerda, sem sinais de irritação peritoneal. Toque retal com ausência de fezes ou sangue em dedo de luva. Foi submetida a tomografia de abdome que evidenciou a seguinte imagem:\n\nSobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Se disponível, o tratamento endoscópico com colonoscopia flexível é uma alternativa terapêutica adequada para o caso.",
      "(B) Por se tratar de evidente isquemia mesentérica com possibilidade de perfuração, há indicação de laparotomia imediata para provável enterectomia.",
      "(C) Por se tratar de abdome agudo obstrutivo secundário a neoplasia de cólon esquerdo, a melhor conduta para o caso é a compensação clínica seguida de cirurgia de Hartmann.",
      "(D) Por se tratar de paciente idosa, com elevado risco cirúrgico e anestésico, o tratamento clínico com descompressão nasogástrica, reposição volêmica e uso de medicação pró-cinética é a escolha mais adequada neste momento."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa constipada crônica, usuária de laxativos, com distensão, parada de eliminação e dor em fossa ilíaca esquerda; a imagem mostra grande distensão de alça colônica: volvo de sigmoide.\n\nSem sinais de peritonite ou isquemia, a conduta inicial é a descompressão endoscópica (retossigmoidoscopia ou colonoscopia flexível), que resolve a maioria dos casos. Depois, pela alta taxa de recorrência, indica-se sigmoidectomia eletiva na mesma internação.",
    "commentary": "Isquemia mesentérica e enterectomia (B): não há sinais de isquemia nem de peritonite; a distensão é colônica.\n\nNeoplasia de cólon esquerdo e Hartmann (C): o quadro é de volvo; Hartmann fica para volvo com necrose ou perfuração.\n\nTratamento clínico com pró-cinético (D): pró-cinético é contraindicado em obstrução mecânica; o volvo precisa ser destorcido.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Colonic Volvulus (2021)",
    "tags": [
      "volvo de sigmoide",
      "obstrução intestinal",
      "descompressão endoscópica"
    ],
    "image": "/images/cerman2025-25.webp"
  },
  {
    "id": "cerman2025-26",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Você está no consultório e recebe um paciente do sexo masculino, 68 anos, sem comorbidades, acompanhado do seu filho. Eles trazem consigo uma colonoscopia que foi realizada como rotina para rastreio de neoplasia de cólon. O exame não apresentava sinais de neoplasia ou pólipos, porém evidenciava divertículos no sigmóide, o que motivou a consulta para esclarecimento de dúvidas. A família está bastante ansiosa por ter lido na internet que a doença pode evoluir com perfuração e tem alta mortalidade. Você pacientemente os orienta a respeito da doença em questão. Qual das seguintes orientações é INCORRETA e não deve ser passada ao paciente?",
    "options": [
      "(A) “A presença dos divertículos no cólon não predispõe a câncer”.",
      "(B) “A diverticulose pode ser considerada como consequência do envelhecimento da parede do cólon e a chance da presença desta condição aumenta com a idade”.",
      "(C) “Mesmo que a crise de inflamação aguda ocorra, o quadro geralmente é leve e não complicado em mais de 80% dos casos, não necessitando de tratamento cirúrgico”.",
      "(D) “Se o paciente tiver a primeira crise aguda, mesmo que não complicada, ela tem grandes chances de ter novos quadros agudos, agora com complicação, sendo indicado a retirada cirúrgica do cólon sigmóide eletivamente antes que essas novas crises aconteçam”."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a orientação INCORRETA. Após um primeiro episódio de diverticulite não complicada, o risco de recorrência é baixo (cerca de 20%) e as recorrências tendem a ser também não complicadas. A sigmoidectomia eletiva não é indicada de rotina após um ou dois episódios; a decisão é individualizada (sintomas persistentes, complicações, imunossupressão).",
    "commentary": "Divertículos não predispõem a câncer (A): correto, não há associação causal.\n\nDiverticulose ligada ao envelhecimento (B): correto, a prevalência aumenta com a idade.\n\nMaioria das crises é leve e não cirúrgica (C): correto, a grande maioria é não complicada.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Left-sided Colonic Diverticulitis (2020)",
    "tags": [
      "doença diverticular",
      "diverticulite",
      "sigmoidectomia"
    ]
  },
  {
    "id": "cerman2025-27",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 9 anos de idade, é trazida pela mãe ao pronto socorro devido a quadro de dor abdominal. Refere que a dor iniciou em região periumbilical há 1 dia e migrou para a fossa ilíaca direita (FID), evoluindo com piora da sua intensidade e presença de astenia e vômito. Nega diarréia, febre e sintomas urinários. Ao exame físico, a paciente se apresenta em bom estado geral, afebril, eupneica e hemodinamicamente estável. Seu abdome é plano, flácido, doloroso à palpação profunda em FID, com descompressão brusca dolorosa. Leucograma: 12.000 com desvio à esquerda. Proteína C reativa: 48mg/dl. Sobre o caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Provavelmente esta paciente não terá indicação para drenagem da cavidade abdominal pós cirúrgica.",
      "(B) Apesar dos dados clínicos e laboratoriais sugerirem adequadamente o diagnóstico, este deve ser confirmado mediante tomografia de abdome.",
      "(C) Caso a paciente seja submetida a abordagem cirúrgica imediata, provavelmente a dose única de ceftriaxona e metronidazol administrada até 2 horas antes da cirurgia será suficiente no seu tratamento.",
      "(D) Caso a abordagem cirúrgica não possa ser realizada imediatamente, seja por disponibilidade profissional ou material do hospital local, o tratamento inicial com antibióticos e a postergação de cirurgia por 12 horas provavelmente não acarretará grande prejuízo a este paciente."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a alternativa INCORRETA. Dor periumbilical que migra para a fossa ilíaca direita, vômitos, descompressão dolorosa, leucocitose com desvio e PCR elevada: apendicite aguda, com alta probabilidade clínica (escore de Alvarado/PAS elevado).\n\nNessas situações o diagnóstico é clínico; em crianças, quando há dúvida, prefere-se ultrassonografia (sem radiação). Tomografia obrigatória está errada.",
    "commentary": "Sem indicação de dreno (A): correto, em apendicite não complicada não se drena a cavidade.\n\nDose única de antibiótico profilático (C): correto, na apendicite não complicada basta a profilaxia pré-operatória.\n\nAdiar a cirurgia por até 12 horas com antibiótico (D): correto; atrasos curtos com antibiótico não aumentam significativamente a perfuração.",
    "reference": "WSES Jerusalem guidelines for diagnosis and treatment of acute appendicitis (2020)",
    "tags": [
      "apendicite aguda",
      "cirurgia pediátrica",
      "diagnóstico clínico"
    ]
  },
  {
    "id": "cerman2025-28",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 32 anos, obeso e fumante, refere história de pirose e sensação de regurgitação ácida há muitos anos, evoluindo com episódios de dor torácica ocasional, fazendo uso intermitente de anti-ácidos por conta própria. Refere, ainda, episódios de rouquidão. Nega disfagia e hematêmese. Traz consigo à consulta, uma endoscopia digestiva alta solicitada pelo médico do posto de saúde que evidenciou presença da transição esôfago gástrica 3cm acima da impressão diafragmática além de 2 erosões em mucosa esofagiana que ocupam cerca de 75% da sua circunferência. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) A evolução crônica e os achados endoscópicos fecham o diagnóstico de esôfago de Barrett, indicando a hiatoplastia laparoscópica.",
      "(B) A evolução crônica com dor torácica e os achados endoscópicos sugerem evolução para carcinoma escamocelular de esôfago, estando indicada a esofagectomia.",
      "(C) Os achados endoscópicos sugerem que a fundoplicatura laparoscópica será mais efetiva que o tratamento medicamentoso e comportamental para este paciente.",
      "(D) Os achados endoscópicos já são suficientes para fechar o diagnóstico e indicar o tratamento, excluído a necessidade de investigação com pHmetria e manometria esofagianas."
    ],
    "correctAnswer": 3,
    "explanation": "Pirose e regurgitação com esofagite erosiva extensa (erosões confluentes em grande parte da circunferência, Los Angeles C/D) e hérnia de hiato. Pelo Consenso de Lyon, esofagite LA C ou D é evidência conclusiva de DRGE: não precisa de pHmetria para o diagnóstico.\n\nO tratamento inicial é com IBP em dose plena e mudanças de estilo de vida (perder peso, parar de fumar). Manometria é necessária apenas se for indicada cirurgia antirrefluxo.",
    "commentary": "Esôfago de Barrett (A): Barrett é diagnóstico histológico (metaplasia intestinal) e não indica hiatoplastia isolada.\n\nCarcinoma escamocelular e esofagectomia (B): não há lesão suspeita; o achado é esofagite erosiva.\n\nFundoplicatura mais efetiva que o tratamento clínico (C): o tratamento inicial é clínico; a cirurgia fica para falha, intolerância ou complicações.",
    "reference": "Consenso de Lyon 2.0 (Gut, 2024) / ACG Clinical Guideline for GERD (2022)",
    "tags": [
      "DRGE",
      "esofagite erosiva",
      "classificação de Los Angeles",
      "consenso de Lyon"
    ]
  },
  {
    "id": "cerman2025-29",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 23 anos, queixando quadro de dor em região perianal há 3 dias que evoluiu com piora progressiva e início de picos de febre alta com calafrios. Ao exame físico, apresenta-se em REG, pálido e sudoreico, febril, taquicárdico, taquipneico e levemente hipotenso. O exame proctológico revelou área edemaciada e eritematosa, com flutuação e bastante dolorosa à palpação, em região perianal às 2:00. Devido ao quadro de dor, optou-se pela não realização do toque retal. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) A indicação do tratamento cirúrgico dependerá de avaliação radiológica da musculatura pélvica, preferencialmente por ultrassonografia.",
      "(B) O quadro séptico justifica o uso de antibióticos como parte do tratamento deste paciente, todavia seu uso não influenciará na possível evolução com fístula perianal.",
      "(C) História de dor abdominal e diarréia crônica ou de doença inflamatória intestinal na família, sugere que o quadro acima pode ser secundário a retocolite ulcerativa incipiente.",
      "(D) Por tratar-se de complicação de doença hemorroidária, o tratamento de escolha neste momento é anti-inflamatórios orais, banhos de assento frios 3 vezes ao dia e uso tópico de pomadas à base de nifedipina."
    ],
    "correctAnswer": 1,
    "explanation": "Abscesso perianal com flutuação e sinais de sepse (febre, taquicardia, hipotensão): a conduta é drenagem cirúrgica imediata. Com sepse, acrescenta-se antibiótico.\n\nO antibiótico ajuda no controle sistêmico, mas não diminui o risco de formar fístula anal, que acontece em cerca de um terço dos casos e depende da origem criptoglandular do abscesso.",
    "commentary": "Cirurgia depende de US da musculatura (A): o diagnóstico de abscesso perianal superficial é clínico e a drenagem não espera exame; imagem é útil em abscessos profundos.\n\nRetocolite ulcerativa (C): doença perianal sugere doença de Crohn, não retocolite.\n\nComplicação hemorroidária com tratamento tópico (D): é abscesso anorretal, que exige drenagem.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula (2022)",
    "tags": [
      "abscesso perianal",
      "fístula anal",
      "drenagem cirúrgica"
    ]
  },
  {
    "id": "cerman2025-30",
    "topography": "3.1",
    "topic": "Hemorragia digestiva baixa",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 68 anos, sobrepeso, fumante, é admitido com quadro de hematoquezia volumosa seguido de 1 episódio de enterorragia (sangue vermelho vivo) há 2 horas. No momento não está mais sangrando (SIC). Nega história de episódios prévios de sangramento, de cirurgias ou procedimentos endoscópicos recentes ou de doença inflamatória intestinal. É hipertenso e diabético e faz uso de aspirina e clopidogrel regularmente. Ao exame físico, apresenta-se pálido, FC: 94bpm, FR: 26irpm, P.A.: 100x70mmHg. Seu abdome é algo globoso, flácido e indolor à palpação. Toque retal com sangue em dedo de luva. Hemoglobina: 10.5g/dl. Sobre a conduta do caso acima, assinale a alternativa CORRETA:",
    "options": [
      "(A) A angiotomografia é excelente opção para determinação do local de sangramento no momento da admissão deste paciente, com resultados comparáveis aos da angiografia.",
      "(B) Já que o sangramento cessou e a hipotensão permissiva está relacionada a menor incidência de ressangramento, é seguro dar alta deste paciente para investigação ambulatorial.",
      "(C) Devido a instabilidade hemodinâmica que este paciente apresenta, a melhor forma de determinar o local do sangramento à sua admissão é a colonoscopia.",
      "(D) Já que a causa mais frequente desse tipo de sangramento em pacientes idosos é a neoplasia de cólon esquerdo, a laparotomia está indicada logo após a ressuscitação volêmica adequada."
    ],
    "correctAnswer": 0,
    "explanation": "Hemorragia digestiva baixa volumosa em idoso usando dupla antiagregação, sem instabilidade franca (PA 100/70, FC 94) e sem sangramento ativo no momento. A angiotomografia é rápida, disponível e não invasiva: localiza sangramentos ativos a partir de cerca de 0,3–0,5 mL/min, com acurácia comparável à da angiografia, e orienta a terapia (embolização, colonoscopia ou cirurgia).",
    "commentary": "Alta para investigação ambulatorial (B): sangramento volumoso, queda de hemoglobina e dupla antiagregação exigem internação.\n\nColonoscopia pela instabilidade (C): a colonoscopia exige preparo e paciente estável; no instável, prefere-se angiotomografia/angiografia.\n\nNeoplasia como causa mais frequente e laparotomia (D): as causas mais frequentes no idoso são doença diverticular e angiodisplasia, e cirurgia às cegas não é indicada.",
    "reference": "ACG Clinical Guideline: Management of Acute Lower Gastrointestinal Bleeding (2023)",
    "tags": [
      "hemorragia digestiva baixa",
      "angiotomografia",
      "doença diverticular"
    ]
  },
  {
    "id": "cerman2025-31",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 52 anos, com história de dispepsia crônica há vários anos que evoluiu com discreta piora há 3 meses associada a intolerância a alimentos sólidos, plenitude pós prandial e vômitos. Refere ter perdido cerca de 14kg no período e que após 1 episódio de hematêmese, procurou atendimento médico. Ao exame físico, o paciente se encontra hipocorado ++/4, eupneico, afebril, anictérico e hemodinamicamente estável. Abdome plano, flácido, simétrico e indolor à palpação, sem massas palpáveis ou ascite. Ausência de linfonodos palpáveis em região cervical e axilar. Traz consigo endoscopia que evidencia lesão úlcero-infiltrativa em região do antro gástrico, parcialmente obstruindo o piloro. O exame histopatológico revelou tratar-se de adenocarcinoma do tipo intestinal de Lauren. Sobre o estadiamento deste paciente, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Por tratar-se de adenocarcinoma gástrico tipo Borrmann III, podemos afirmar que o estadiamento mínimo deste paciente é T3N2Mx.",
      "(B) A laparoscopia pode ser indicada no estadiamento deste paciente no intuito de realizar análise citológica peritoneal assim como coleta de ascite para estudo.",
      "(C) A ultrassonografia endoscópica é atualmente o melhor método de avaliação do grau de infiltração tumoral na parede do estômago (T) e acometimento linfonodal adjacente (N).",
      "(D) Apesar da tomografia computadorizada de abdome estar indicada para o estadiamento, sua acurácia para evidenciar linfonodos acometidos e pequenas metástases peritoneais não é adequada."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. A classificação macroscópica de Borrmann (I polipoide, II ulcerado de bordas nítidas, III ulceroinfiltrativo, IV infiltrativo difuso) descreve o aspecto endoscópico do câncer avançado, mas não define o estádio TNM. O T e o N só são determinados por ecoendoscopia, tomografia ou peça cirúrgica.",
    "commentary": "Laparoscopia com citologia peritoneal (B): correto; recomendada em tumores T3/T4 para detectar doença peritoneal oculta antes da cirurgia ou neoadjuvância.\n\nEcoendoscopia como melhor método para T e N (C): correto; é o exame mais preciso para profundidade e linfonodos regionais.\n\nTC com acurácia limitada para linfonodos e implantes pequenos (D): correto; por isso se completa com laparoscopia.",
    "reference": "Diretrizes Brasileiras de Câncer Gástrico (ABCG) / NCCN Guidelines — Gastric Cancer / AJCC 8ª ed.",
    "tags": [
      "câncer gástrico",
      "estadiamento",
      "classificação de Borrmann",
      "ecoendoscopia"
    ]
  },
  {
    "id": "cerman2025-32",
    "topography": "3.2",
    "topic": "Hepatocarcinoma",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 38 anos, vem ao consultório bastante preocupada por uma alteração evidenciada em ultrassonografia que fez em um pronto socorro por queixa de dor em baixo ventre. O exame em questão revelava imagem nodular hiperecóica e homogênea de 4cm em lobo direito do fígado. A paciente nega história de febre, dor no hipocôndrio direito, perda de peso e icterícia. Ao exame físico a paciente está em bom estado geral, bem nutrida, afebril, anictérica, eupneica, hemodinamicamente estável, sem edemas. Seu abdome é plano, flácido, indolor, sem ascite ou massas palpáveis. Você solicitou hemograma e dosagem de enzimas hepáticas. Bilirrubinas, TAP e albumina, além de tomografia computadorizada de abdome com contraste venoso. Tanto o hemograma quanto os demais exames bioquímicos eram normais. A tomografia evidenciou lesão bem definida, de limites precisos, com densidade semelhante à de vasos sanguíneos, captante de contraste, com preenchimento total de padrão centrípeto. Restante do parênquima hepático e demais órgãos abdominais sem alterações. Sobre o caso descrito, assinale a alternativa CORRETA:",
    "options": [
      "(A) Trata-se de hiperplasia nodular focal, estando indicada a hepatectomia devido ao altíssimo risco de malignização da lesão.",
      "(B) O diagnóstico de lesão metastática não pode ser adequadamente excluído, estando indicada a colonoscopia para investigação de provável tumor primário.",
      "(C) As características radiológicas são ambíguas e sugerem lesão neoplásica primária, estando indicada a biópsia percutânea por agulha para definição diagnóstica.",
      "(D) O padrão de imagem tomográfico é suficiente para fechar o diagnóstico de hemangioma e indicar tratamento expectante, porém a ressonância magnética apresenta maior sensibilidade e especificidade para o caso."
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo hepático hiperecoico e homogêneo, em mulher assintomática e sem hepatopatia, que na TC tem densidade semelhante à dos vasos e realce periférico nodular com preenchimento centrípeto progressivo: hemangioma hepático, o tumor benigno mais comum do fígado.\n\nO padrão típico dispensa biópsia e tratamento. A ressonância magnética é o exame de maior acurácia para confirmar.",
    "commentary": "Hiperplasia nodular focal com alto risco de malignização (A): a HNF tem cicatriz central e realce arterial homogêneo; não maligniza e não é operada.\n\nMetástase com colonoscopia (B): o padrão de enchimento centrípeto é típico de hemangioma, não de metástase.\n\nBiópsia percutânea (C): contraindicada em hemangioma pelo risco de sangramento; o padrão não é ambíguo.",
    "reference": "EASL Clinical Practice Guidelines on the management of benign liver tumours (2016) / ACG Clinical Guideline: Focal Liver Lesions (2014)",
    "tags": [
      "hemangioma hepático",
      "nódulo hepático",
      "tumores benignos do fígado"
    ]
  },
  {
    "id": "cerman2025-33",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 3 anos, 14kg, é trazido pela mãe ao pronto socorro referindo que a criança se queimou com água fervente ao puxar o cabo de uma panela que estava no fogão, há 30 minutos. Ao exame físico, a paciente apresenta choro forte e fascies de dor, com áreas queimadas com formação de bolhas, muitas delas já estouradas, acometendo hemiface e hemicrânio à esquerda, ombro e braço esquerdos, dorso do tórax e região lombar. Sobre o atendimento inicial deste paciente, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Por se tratar de queimadura por escaldamento em criança com menos de 30kg e acima de 10% de superfície queimada, há indicação de internação hospitalar.",
      "(B) Uso precoce de colóides, principalmente nas primeiras 8 horas após a injúria, é contraindicado devido a maior incidência de derrame pleural, formação de ascite e aumento da pressão intra-abdominal.",
      "(C) Lavar a área queimada com água corrente ou soro em temperatura ambiente por cerca de 20 minutos, como medida inicial, potencializa uma evolução menos mórbida do caso.",
      "(D) O volume inicial a ser administrado para o paciente é aproximadamente de 1.100ml de Ringer Lactato nas primeiras 24 horas, contudo o débito urinário do paciente deve ser monitorado hora a hora e o volume infundido deve ser corrigido se houver necessidade."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a alternativa INCORRETA. A reposição inicial do grande queimado é feita com cristaloide (Ringer lactato). Os coloides não são \"contraindicados\" pelas razões citadas: vários protocolos usam albumina após as primeiras 8–24 horas quando o volume de cristaloide fica excessivo, justamente para reduzir edema, síndrome compartimental abdominal e derrames (o chamado fluid creep).",
    "commentary": "Internação de criança com > 10% de SCQ (A): correto; a criança tem cerca de 36% de superfície queimada em 2º grau, incluindo face.\n\nResfriar com água corrente por 20 minutos (C): correto; interrompe a progressão da queimadura e alivia a dor.\n\nCerca de 1.100 mL em 24 h com controle pela diurese (D): aproximação de 2 mL/kg/%SCQ (14 kg × 36%); o mais importante é ajustar pelo débito urinário (1 mL/kg/h em crianças). Em pediatria soma-se ainda o soro de manutenção.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. — Lesões térmicas / Cartilha para tratamento de emergência das queimaduras (Ministério da Saúde, 2012)",
    "tags": [
      "queimaduras",
      "reposição volêmica",
      "fórmula de Parkland",
      "queimadura em criança"
    ]
  },
  {
    "id": "cerman2025-34",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 62 anos, fumante, vem ao consultório queixando abaulamento inguino-escrotal à direita, as esforço físicos, mas que regride durante o repouso e decúbito. O paciente queixa que sente dores nesta região quando carrega peso e sobe escadas no trabalho, atrapalhando as atividades do seu dia a dia. Nega hipertensão e diabetes. Ao exame físico apresenta herniação inguino-escrotal de conteúdo abdominal, de moderado volume à manobra de Valsalva, redutível à palpação. Sobre o caso, assinale a alternativa CORRETA:",
    "options": [
      "(A) Os dados fornecidos nos permitem ingerir que o paciente é portador de hérnia inguinal Nyhus IV.",
      "(B) O tempo de evolução e a idade do paciente são contraindicações para a técnica de Lichtenstein para a correção da sua hérnia.",
      "(C) O tempo de evolução e o quadro de dor nos leva a inferir que o quadro é complicado com domiciliação e demanda tratamento cirúrgico urgente.",
      "(D) Queixas referentes a nictúria e diminuição do jato urinário, constipação e tosse crônica devem ser investigados e tratados no pré-operatório e o paciente deve ser orientado a, preferencialmente, cessar o tabagismo 2 meses antes do tratamento cirúrgico."
    ],
    "correctAnswer": 3,
    "explanation": "Hérnia inguinoescrotal redutível e sintomática tem indicação de correção eletiva. No pré-operatório, investigam-se e tratam-se as condições que aumentam a pressão abdominal e favorecem recidiva (prostatismo, constipação, tosse crônica). Parar de fumar cerca de 4 a 8 semanas antes melhora a cicatrização e reduz complicações respiratórias e recidiva.",
    "commentary": "Nyhus IV (A): Nyhus IV é hérnia recidivada; uma hérnia primária inguinoescrotal seria Nyhus IIIA (direta) ou IIIB (indireta).\n\nIdade e evolução contraindicam Lichtenstein (B): não há contraindicação; é a técnica aberta padrão.\n\nComplicação por \"domiciliação\" com cirurgia urgente (C): a hérnia é redutível; perda de domicílio ocorre em hérnias volumosas e crônicas, e não é o caso.",
    "reference": "HerniaSurge — International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "pré-operatório",
      "tabagismo",
      "classificação de Nyhus"
    ]
  },
  {
    "id": "cerman2025-35",
    "topography": "4.2",
    "topic": "Câncer de próstata",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 60 anos, agricultor, hipertenso e diabético, compareceu a Unidade Básica de Saúde para atendimento de rotina e acabou sendo triado para rastreamento da campanha Novembro Azul. Retorna a consulta com PSA 7ng/ml. Refere ter observado diminuição progressiva do jato urinário há 1 ano, noctúria e gotejamento terminal após a micção. Nega dor lombar, pélvica ou em coxas e perda de peso. O toque retal evidenciou área endurecida na próstata. Sobre os próximos passos da conduta deste caso, assinale a alternativa INCORRETA:",
    "options": [
      "(A) O caso é sugestivo de adenocarcinoma prostático e indica ultrassom trans-retal, tanto para a avaliação da próstata quando como guia para biópsia.",
      "(B) A classificação histopatológica de Gleason fornece dados referentes à probabilidade de disseminação da doença e auxilia nas decisões terapêuticas que serão tomadas.",
      "(C) Devido à idade deste paciente e suas contraindicações clínicas para o tratamento cirúrgico, a opção terapêutica para o caso é a quimioterapia e terapia anti-estrogênica.",
      "(D) Uma vez confirmado o diagnóstico de neoplasia, o próximo passo é a avaliação do grau de invasão locorregional para a bexiga, uretra, vesículas seminais e trígono vesical, além de avaliar o comprometimento linfonodal pélvico, sendo a ressonância magnética um método bastante útil para este intento."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a alternativa INCORRETA. Câncer de próstata não é tratado com quimioterapia e terapia antiestrogênica. Para doença localizada, as opções são vigilância ativa, prostatectomia radical ou radioterapia (com ou sem bloqueio androgênico); a doença avançada recebe privação androgênica (castração cirúrgica ou química), eventualmente com quimioterapia (docetaxel) ou novos antiandrogênios.\n\nAlém disso, o paciente não tem contraindicação clínica descrita para cirurgia.",
    "commentary": "Ultrassom transretal para avaliação e biópsia (A): correto; atualmente se recomenda ressonância multiparamétrica antes da biópsia, quando disponível.\n\nGleason e prognóstico (B): correto; o escore de Gleason (grupos ISUP) orienta risco e tratamento.\n\nRessonância para estadiamento locorregional (D): correto.",
    "reference": "EAU Guidelines on Prostate Cancer (2024) / Diretrizes da SBU para câncer de próstata",
    "tags": [
      "câncer de próstata",
      "PSA",
      "escore de Gleason",
      "tratamento"
    ]
  },
  {
    "id": "cerman2025-36",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Cirurgia",
    "text": "Você é plantonista de uma sala de emergência e recebe o plantão com um paciente com diagnóstico de pneumonia e sepse. Para condução adequada do caso, você decide realizar uma punção venosa central para administração de medicamentos. Ciente que este procedimento requer conhecimento adequado da anatomia, relativa prática técnica e reconhecimento das suas complicações e seus respectivos manejos, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Na técnica de Seldinger, o fio-guia deve ser retirado antes da inserção do catéter na veia previamente puncionada.",
      "(B) A punção da veia femoral apresenta maior risco de infecção do catéter e de trombose venosa profunda quando comparada com a punção da veia subclávia.",
      "(C) A punção venosa profunda guiada por ultrassonografia diminui consideravelmente os riscos de falha na punção, punção arterial e pneumotórax.",
      "(D) A punção da veia subclávia apresenta maior risco complicações mecânicas como o pneumotórax quando comparada com a punção da veia jugular interna."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a alternativa INCORRETA. Na técnica de Seldinger, o cateter é introduzido SOBRE o fio-guia, que só é retirado depois que o cateter está na veia. Retirar o guia antes perde o acesso.",
    "commentary": "Femoral com mais infecção e trombose (B): correto; a subclávia tem as menores taxas de infecção e trombose.\n\nPunção guiada por ultrassom reduz complicações (C): correto, é a recomendação atual.\n\nSubclávia com maior risco de pneumotórax que a jugular (D): correto.",
    "reference": "ATLS 10ª ed. — Acesso venoso / Diretrizes do CDC para prevenção de infecção relacionada a cateter (2011)",
    "tags": [
      "acesso venoso central",
      "técnica de Seldinger",
      "complicações"
    ]
  },
  {
    "id": "cerman2025-37",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Cirurgia",
    "text": "Paciente idoso, 75 anos, sequelado de AVC, institucionalizado, é trazido para atendimento médico por cuidadora devido a quadro de dispnéia progressiva e tosse há vários dias. Não sabe referir adequadamente sobre histórico de febre. Ao exame físico, o paciente se encontra emagrecido, algo dispneico (FR: 24irpm), afebril, FC: 68bpm, P.A. 110x70 mmHg e edema de membros inferiores ++/4. A ausculta torácica, observamos estertoração em todo o hemitórax esquerdo, com murmúrio vesicular abolido em base e terço médio. Ausculta do hemitórax direito sem alterações. A ausculta cardíaca evidenciava ritmo em galope e bulhas hipofonéticas. Você solicitou uma radiografia de tórax que evidenciou derrame pleural de volume moderado à esquerda, condensação para hilar no pulmão esquerdo e aumento da sombra cardíaca. Sobre a conduta frente a este derrame pleural, assinale a alternativa INCORRETA:",
    "options": [
      "(A) Níveis de proteína no líquido pleural abaixo de 2,9g/dl e relação do DHL no líquido pleural/DHL sérico menor que 0.5 suportariam a hipótese de insuficiência cardíaca congestiva.",
      "(B) A relação da proteína no líquido pleural/proteína sérica maior que 0,5 em efusão com pH abaixo de 7,2 e evidência de efusão pleural complexa à ultrassom corroboram a indicação de drenagem fechada de tórax para o caso.",
      "(C) Em caso de diagnóstico de exsudato secundário a processo pneumônico, os drenos de silicone mais calibrosos têm preferência de uso por apresentarem drenagem mais efetiva e menor entupimento que os drenos de baixo calibre.",
      "(D) A ultrassonografia pode confirmar a presença da efusão pleural, determinar características do líquido como a presença de debris ou espessamento pleural e guiar a toracocentese indicada para o caso com menor risco de pneumotórax iatrogênico."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a alternativa INCORRETA. No derrame parapneumônico complicado e no empiema, drenos de pequeno calibre (≤ 14 Fr), sobretudo associados a fibrinolíticos intrapleurais, têm eficácia semelhante à dos drenos calibrosos e causam menos dor. Não há preferência pelos drenos grossos.",
    "commentary": "Proteína < 2,9 g/dL e DHL líquido/sérico < 0,5 sugerem transudato (A): correto, compatível com insuficiência cardíaca.\n\nExsudato com pH < 7,2 e derrame complexo indicam drenagem (B): correto.\n\nUltrassom confirma, caracteriza e guia a toracocentese (D): correto, reduz o risco de pneumotórax.",
    "reference": "BTS Guideline for pleural disease (2023) / Estudo MIST2 (NEJM, 2011)",
    "tags": [
      "derrame pleural",
      "drenagem torácica",
      "empiema",
      "critérios de Light"
    ]
  },
  {
    "id": "cerman2025-38",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 55 anos, fumante, sobrepeso (IMC 28), é internado para uma hemicolectomia esquerda laparoscópica por neoplasia de cólon, com pretensão de cura. É hipertenso compensado. Nega diabetes, cardiopatia e demais comorbidades. Nega história de sangramentos ou de distúrbios de coagulação na família. Sua hemoglobina é 12g/dl e seu perfil de coagulação (contagem de plaquetas, TAP, TTPA e INR) são normais. A respeito do risco operatório de tromboembolismo venoso (TEV) para este paciente, assinale a alternativa INCORRETA:",
    "options": [
      "(A) O sexo masculino, a obesidade e a cirurgia abdominal laparoscópica por doença maligna, classificam este paciente como tendo altíssimo risco para TEV durante e após sua internação hospitalar.",
      "(B) Já que as provas de coagulação estão normais e o paciente não faz uso de drogas antiagregantes plaquetárias, há indicação para encerramento da profilaxia no momento da alta do paciente para o domicílio.",
      "(C) De acordo com seu risco de TEV, há indicação do uso de heparina de baixo peso molecular associada a medidas de profilaxia mecânica como meias compressivas e dispositivos de compressão pneumática intermitente.",
      "(D) Avaliação e controle de fatores como o controle do peso, interrupção do tabagismo, controle da pressão arterial, escolha de técnica cirúrgica adequada e estímulo à deambulação precoce, durante todo o período peri-operatório, diminuem o risco de TEV."
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a alternativa INCORRETA. Pacientes operados de câncer abdominal ou pélvico têm alto risco de tromboembolismo (Caprini ≥ 5) e devem receber profilaxia estendida com heparina de baixo peso molecular por cerca de 4 semanas após a cirurgia, mesmo com provas de coagulação normais. Encerrar a profilaxia na alta está errado.",
    "commentary": "Altíssimo risco de TEV (A): a banca considerou correta; cirurgia oncológica abdominal soma vários pontos no escore de Caprini.\n\nHBPM associada a profilaxia mecânica (C): correto, recomendada no alto risco sem risco elevado de sangramento.\n\nControle de fatores modificáveis e deambulação precoce (D): correto.",
    "reference": "ACCP — Prevention of VTE in Nonorthopedic Surgical Patients (Chest, 2012) / ASCO Guideline — VTE prophylaxis in cancer (2023)",
    "tags": [
      "tromboembolismo venoso",
      "profilaxia",
      "escore de Caprini",
      "cirurgia oncológica"
    ]
  },
  {
    "id": "cerman2025-39",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 12 anos, é trazido pela mãe para consulta devido a pequena massa cística cervical, localizada na linha média a nível do osso hióide, móvel à deglutição. Ao exame físico observamos pequena lesão cística com sinais flogísticos e flutuação. Mãe refere história de outros processos inflamatórios locais que foram tratados com drenagem e antibióticos. Sobre a fisiopatologia e tratamento desta lesão, assinale a alternativa CORRETA:",
    "options": [
      "(A) Trata-se de herniação de saco laríngeo pela membrana tireo-hioidea e seu tratamento consiste em ressecção cirúrgica.",
      "(B) Trata-se de lesão congênita derivada de falha na migração do broto tireoidiano da base da língua e seu tratamento requer ressecção cirúrgica junto com fragmento do osso hióide.",
      "(C) Trata-se de lesão cística adquirida proveniente de déficit de drenagem de glândula salivar sublingual e seu tratamento consiste na marsupialização da lesão pela cavidade oral.",
      "(D) Trata-se de anomalia congênita derivada do fechamento inadequado do seio cervical a nível do 2º. arco branquial e seu tratamento se baseia em injeção de substância esclerosante na lesão."
    ],
    "correctAnswer": 1,
    "explanation": "Massa cística cervical na linha média, na altura do hioide, que se move com a deglutição e protrusão da língua, com infecções de repetição: cisto do ducto tireoglosso, resquício da migração da tireoide do forame cego da língua até o pescoço.\n\nO tratamento é a cirurgia de Sistrunk: ressecção do cisto, do trajeto e da porção central do osso hioide, o que reduz a recidiva. Com infecção ativa, trata-se primeiro a infecção e opera-se depois.",
    "commentary": "Laringocele (A): herniação do sáculo laríngeo pela membrana tireo-hióidea, lateral, que aumenta com a manobra de Valsalva.\n\nRânula (C): cisto de retenção da glândula sublingual, no assoalho da boca.\n\nCisto branquial (D): lateral, na borda anterior do esternocleidomastóideo; o tratamento é cirúrgico, não escleroterapia.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Cirurgia pediátrica: massas cervicais",
    "tags": [
      "cisto do ducto tireoglosso",
      "cirurgia de Sistrunk",
      "massas cervicais",
      "cirurgia pediátrica"
    ]
  },
  {
    "id": "cerman2025-40",
    "topography": "2.1",
    "topic": "Pneumotórax",
    "module": "Cirurgia",
    "text": "Você é chamado para avaliar uma paciente do sexo feminino, 2 anos de idade internada há 8 dias devido a quadro de pneumonia que necessitou drenagem de tórax. A pediatra solicita a sua avaliação sobre a possibilidade de retirada do dreno. A paciente deu entrada bastante chorosa, dispneica, com história de febre alta e tosse produtiva. Submetida à radiografia de tórax, foi observada condensação em base e terço médio do pulmão esquerdo e efusão pleural de moderado volume, sendo realizada a drenagem fechada de tórax com saída de 300ml de secreção sero-purulenta. Evoluiu com melhora do estado geral, do quadro febril e da leucócitose. Hoje, o paciente se encontra no 7º. dia pós drenagem, com dreno oscilante, com débito desprezível e fuga aérea quando a paciente respira fundo e chora. Todas as radiografias de controle mostravam pequeno pneumotórax “residual”, inclusive a que foi realizada hoje. Sobre o diagnóstico e conduta desta paciente, assinale a alternativa CORRETA:",
    "options": [
      "(A) Trata-se de empiema pleural resolvido, sendo indicada a retirada da drenagem de tórax.",
      "(B) Trata-se de encarceramento pulmonar pós empiema pleural, sendo indicada a toracotomia urgente.",
      "(C) Trata-se de formação de pneumatocele pós pneumonia, sendo indicada a retirada do dreno e ultrassonografia de tórax para diagnóstico.",
      "(D) A paciente evoluiu com fístula bronco-pleural, sendo indicada a manutenção do dreno e inicialmente tratamento com aspiração contínua."
    ],
    "correctAnswer": 3,
    "explanation": "Criança com empiema drenada há 7 dias, que melhorou clinicamente, mas mantém borbulhamento no selo d'água (fuga aérea) e pneumotórax persistente nas radiografias: fístula broncopleural.\n\nA conduta é manter o dreno; aspiração contínua em baixa pressão pode ajudar a reexpandir o pulmão e fechar a fístula. Fístulas persistentes podem precisar de abordagem cirúrgica (videotoracoscopia).",
    "commentary": "Empiema resolvido com retirada do dreno (A): a fuga aérea e o pneumotórax contraindicam a retirada.\n\nEncarceramento e toracotomia urgente (B): o pulmão encarcerado não reexpande, mas não há fuga aérea; e a decortização não é urgente.\n\nPneumatocele com retirada do dreno (C): pneumatoceles são cistos intraparenquimatosos sem fuga aérea pelo dreno.",
    "reference": "BTS Guidelines for the management of pleural infection in children (2005) / Nelson Textbook of Pediatrics, 21ª ed.",
    "tags": [
      "fístula broncopleural",
      "empiema pleural",
      "drenagem torácica",
      "pneumonia complicada"
    ]
  },
  {
    "id": "cerman2025-41",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Nas pacientes com êmese na gestação, o tratamento medicamentoso inicial considerado de primeira linha é:",
    "options": [
      "(A) Fenotiazina e doxilamina",
      "(B) Piridoxina e doxilamina",
      "(C) Ondasetrona e piridoxina",
      "(D) Doxilamina e ondasetrona"
    ],
    "correctAnswer": 1,
    "explanation": "Para náuseas e vômitos da gestação, depois das medidas dietéticas, o tratamento farmacológico de primeira linha é a associação de piridoxina (vitamina B6) e doxilamina, segura no primeiro trimestre.\n\nSe não houver resposta, acrescentam-se anti-histamínicos (dimenidrinato), metoclopramida, fenotiazinas e, depois, ondansetrona.",
    "commentary": "Fenotiazina e doxilamina (A): fenotiazinas (prometazina, clorpromazina) são de segunda linha.\n\nOndansetrona e piridoxina (C): a ondansetrona é reservada para casos refratários, com cautela no primeiro trimestre.\n\nDoxilamina e ondansetrona (D): mesma observação; não é a associação inicial.",
    "reference": "ACOG Practice Bulletin nº 189 — Nausea and Vomiting of Pregnancy (2018) / FEBRASGO — Hiperêmese gravídica",
    "tags": [
      "êmese gravídica",
      "piridoxina",
      "doxilamina",
      "pré-natal"
    ]
  },
  {
    "id": "cerman2025-42",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 42 anos, na 13ª semana de gestação, realizou exame morfológico que evidenciou aumento do índice de pulsatilidade médio das artérias uterinas e risco de pré eclampsia calculado 1/40. Assinale a alternativa CORRETA:",
    "options": [
      "(A) Iniciar ácido acetil salicílico em baixas doses (100-150mg) a noite até a 36ª semana.",
      "(B) Repetir exame na 20ª semana e se permanecer alterado iniciar ácido acetil salicílico em baixas doses (100-150mg) a noite até a 36ª semana.",
      "(C) Iniciar ácido acetil salicílico em baixas doses (100-150mg) a noite até a 20ª semana, repetir a avaliação e, se exame tiver normalizado, suspender aspirina.",
      "(D) Acompanhar no pré-natal de alto risco, e, se níveis pressóricos aumentarem, iniciar ácido acetil salicílico em baixas doses (100-150mg) a noite até a 36ª semanas."
    ],
    "correctAnswer": 0,
    "explanation": "O rastreamento combinado do primeiro trimestre (fatores maternos, PA, Doppler das artérias uterinas e PlGF) com risco ≥ 1:100 (aqui 1:40) identifica alto risco de pré-eclâmpsia. A conduta é iniciar AAS em baixa dose (100–150 mg à noite) antes de 16 semanas e manter até 36 semanas (estudo ASPRE).",
    "commentary": "Repetir o exame com 20 semanas (B): o benefício do AAS depende de começar antes de 16 semanas.\n\nSuspender se o exame normalizar com 20 semanas (C): o AAS é mantido até 36 semanas, independentemente de novos exames.\n\nIniciar só se a pressão subir (D): o AAS é preventivo; não trata pré-eclâmpsia instalada.",
    "reference": "FEBRASGO — Pré-eclâmpsia: prevenção (Protocolo, 2023) / Estudo ASPRE (NEJM, 2017)",
    "tags": [
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "rastreamento de primeiro trimestre",
      "doppler das artérias uterinas"
    ]
  },
  {
    "id": "cerman2025-43",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com amenorreia há 12 semanas, foi a maternidade referindo sangramento vaginal. Ao exame ginecológico observou-se sangramento vaginal e ao toque vaginal o útero estava intrapélvico. À ultrassonografia transvaginal o eco endometrial mediu 5,3 mm. Não foi evidenciado saco gestacional intrauterino. O Beta HCG anotado no cartão de pré-natal era 3500 mlU/ml. O resultado do Beta HCG solicitado na maternidade foi 2000 mlU/ml. Qual a principal hipótese diagnóstica:",
    "options": [
      "(A) Abortamento retido",
      "(B) Abortamento evitável",
      "(C) Abortamento completo",
      "(D) Abortamento incompleto"
    ],
    "correctAnswer": 2,
    "explanation": "Amenorreia de 12 semanas com sangramento, útero intrapélvico, endométrio fino (5,3 mm, abaixo de 15 mm), sem saco gestacional e β-hCG em queda (3.500 → 2.000 mUI/mL): abortamento completo — o conteúdo já foi eliminado.\n\nA conduta é expectante, com acompanhamento do β-hCG até negativar (para afastar gestação ectópica, já que não houve confirmação prévia de gestação intrauterina).",
    "commentary": "Abortamento retido (A): haveria saco gestacional ou embrião sem vitalidade.\n\nAbortamento evitável (B): é a ameaça de abortamento, com embrião vivo e colo fechado.\n\nAbortamento incompleto (D): haveria restos ovulares (endométrio espesso, > 15 mm) e colo aberto.",
    "reference": "FEBRASGO — Abortamento (Protocolo, 2021) / Ministério da Saúde — Atenção humanizada ao abortamento",
    "tags": [
      "abortamento completo",
      "beta-hCG",
      "ultrassonografia transvaginal"
    ]
  },
  {
    "id": "cerman2025-44",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "São fatores de risco para gravidez ectópica:",
    "options": [
      "(A) Endometriose, mioma submucoso.",
      "(B) Tabagismo, uso de pílula de progesterona.",
      "(C) Multiparidade, anticoncepção de emergência.",
      "(D) DIU, Anticoncepcional combinada de baixa dose."
    ],
    "correctAnswer": 1,
    "explanation": "Fatores de risco para gravidez ectópica: ectópica prévia, cirurgia tubária, doença inflamatória pélvica, infertilidade e reprodução assistida, tabagismo (altera a motilidade tubária), idade > 35 anos e contracepção que falha com mais frequência na tuba — DIU e pílula só de progestagênio (que reduz a motilidade tubária).",
    "commentary": "Endometriose e mioma submucoso (A): a endometriose pode aumentar o risco discretamente, mas o mioma submucoso não é fator.\n\nMultiparidade e contracepção de emergência (C): não são fatores de risco reconhecidos.\n\nDIU e anticoncepcional combinado (D): o DIU é fator (se falhar, a gestação tem maior chance de ser ectópica), mas o combinado inibe a ovulação e protege.",
    "reference": "FEBRASGO — Gravidez ectópica (Protocolo nº 22, 2021)",
    "tags": [
      "gravidez ectópica",
      "fatores de risco",
      "tabagismo",
      "progestagênio"
    ]
  },
  {
    "id": "cerman2025-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "A fecundação de um óvulo normal por dois espermatozoides da origem a:",
    "options": [
      "(A) Mola parcial",
      "(B) Mola completa",
      "(C) Gemelaridade dicoriônica",
      "(D) Gemelaridade monocoriônica"
    ],
    "correctAnswer": 0,
    "explanation": "A mola parcial é triploide (69,XXX ou 69,XXY), resultante da fecundação de um óvulo normal por dois espermatozoides (dispermia) ou por um espermatozoide que duplica. Pode haver tecido embrionário/fetal e o risco de neoplasia trofoblástica é menor.",
    "commentary": "Mola completa (B): é diploide e de origem exclusivamente paterna — óvulo sem material genético fecundado por um espermatozoide que se duplica (46,XX) ou por dois (46,XY).\n\nGemelaridade dicoriônica (C): resulta de dois óvulos fecundados por dois espermatozoides (ou divisão precoce do zigoto).\n\nGemelaridade monocoriônica (D): divisão de um único zigoto após o 3º dia.",
    "reference": "FEBRASGO — Doença trofoblástica gestacional (Protocolo, 2021)",
    "tags": [
      "mola hidatiforme",
      "mola parcial",
      "doença trofoblástica gestacional"
    ]
  },
  {
    "id": "cerman2025-46",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 40 anos, GVI PIII (cesariana) AB II (com curetagem), assintomática, realizou ultrassonografia no primeiro trimestre que evidenciou saco gestacional localizado no segmento inferior e que evoluiu com a presença de placenta com lagos placentários com fluxos turbulentos ao Doppler, com adelgaçamento do miométrio e irregularidade na interface entre serosa uterina e bexiga no segundo trimestre. Tais achados são encontrados em qual das patologias:",
    "options": [
      "(A) Placenta prévia parcial",
      "(B) Espectro da placenta Acreta",
      "(C) Doença trofoblástica gestacional",
      "(D) Descolamento prematuro da placenta"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher com cesárea e curetagens prévias, saco gestacional implantado no segmento inferior (sobre a cicatriz) e, no segundo trimestre, lacunas placentárias com fluxo turbulento, afinamento miometrial e irregularidade da interface útero-bexiga: espectro da placenta acreta.\n\nO planejamento envolve cesárea-histerectomia programada, por volta de 34–36 semanas, em centro de referência.",
    "commentary": "Placenta prévia parcial (A): é apenas a localização; os sinais de invasão miometrial apontam para acretismo.\n\nDoença trofoblástica (C): há gestação normal, com placenta e feto; as lacunas aqui são do acretismo.\n\nDPP (D): diagnóstico clínico agudo, com dor e sangramento, não achado ultrassonográfico de invasão.",
    "reference": "FIGO consensus guidelines on placenta accreta spectrum disorders (2018) / FEBRASGO — Acretismo placentário",
    "tags": [
      "espectro da placenta acreta",
      "cesárea anterior",
      "ultrassonografia obstétrica"
    ]
  },
  {
    "id": "cerman2025-47",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Nas gestações gemelares podemos afirmar que são dizigóticas se:",
    "options": [
      "(A) Houver a presença de duas placentas",
      "(B) Houver duas cavidades amnióticas",
      "(C) Houver duas vesículas vitelínicas",
      "(D) O sexo fetal for discordante"
    ],
    "correctAnswer": 3,
    "explanation": "Gêmeos monozigóticos têm o mesmo material genético e, portanto, o mesmo sexo. Sexos discordantes garantem dizigose.\n\nDuas placentas e duas bolsas amnióticas ocorrem em todos os dizigóticos, mas também em cerca de um terço dos monozigóticos (divisão até o 3º dia).",
    "commentary": "Duas placentas (A): monozigóticos divididos precocemente também são dicoriônicos.\n\nDuas cavidades amnióticas (B): monozigóticos diamnióticos são comuns.\n\nDuas vesículas vitelínicas (C): indicam diamnionicidade, não zigosidade.",
    "reference": "FEBRASGO — Gestação gemelar (Protocolo, 2021)",
    "tags": [
      "gestação gemelar",
      "zigosidade",
      "corionicidade"
    ]
  },
  {
    "id": "cerman2025-48",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que corresponde a complicação mais frequente das gestações dicoriônicas:",
    "options": [
      "(A) Sequência anemia-policitemia",
      "(B) Síndrome da transfusão feto-fetal",
      "(C) Restrição de crescimento fetal seletiva",
      "(D) Sequência de perfusão arterial reversa"
    ],
    "correctAnswer": 2,
    "explanation": "Nas gestações dicoriônicas, cada feto tem sua placenta e não há anastomoses vasculares. As complicações são as de qualquer gemelar: prematuridade, pré-eclâmpsia e restrição de crescimento seletiva (discordância de crescimento), esta a mais citada entre as opções.",
    "commentary": "Sequência anemia-policitemia (A): exclusiva das monocoriônicas (anastomoses pequenas).\n\nTransfusão feto-fetal (B): exclusiva das monocoriônicas diamnióticas.\n\nPerfusão arterial reversa (D): gemelar acárdico, só em monocoriônicas.",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (2016/2025)",
    "tags": [
      "gestação gemelar",
      "dicoriônica",
      "restrição de crescimento seletiva"
    ]
  },
  {
    "id": "cerman2025-49",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante o período expulsivo do parto, qual é a técnica mais indicada para minimizar o risco de lacerações perineais e lesões neonatais?",
    "options": [
      "(A) Realizar episiotomia de rotina para todos os partos vaginais.",
      "(B) Realizar pressão no fundo uterino (manobra de Kristeller) para auxiliar na expulsão.",
      "(C) Manter a flexão controlada da cabeça fetal durante a coroação, permitindo uma saída gradual.",
      "(D) Solicitar que a parturiente faça força máxima (manobra de Valsalva) durante o período expulsivo."
    ],
    "correctAnswer": 2,
    "explanation": "No período expulsivo, a proteção perineal com controle da deflexão da cabeça fetal (mantendo-a fletida e permitindo saída lenta e gradual), associada à compressa morna no períneo, reduz lacerações de 3º e 4º graus.",
    "commentary": "Episiotomia de rotina (A): não é recomendada; deve ser restritiva.\n\nManobra de Kristeller (B): é proscrita, por risco de lesões maternas e fetais.\n\nPuxos dirigidos com Valsalva máxima (D): recomenda-se puxo espontâneo; o puxo dirigido não traz benefício e pode aumentar lesões.",
    "reference": "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal (2017) / OMS — Intrapartum care (2018)",
    "tags": [
      "período expulsivo",
      "proteção perineal",
      "parto normal"
    ]
  },
  {
    "id": "cerman2025-50",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante 28ª semana, foi a consulta de pré-natal levando resultado de teste de tolerância oral a glicose com 75 g de dextrosol. A glicemia de jejum foi 126 g/dl a de 1 hora foi 181 e a de 2 h 190 g/dl. Qual diagnóstico?",
    "options": [
      "(A) Hiperglicemia",
      "(B) Exame Normal",
      "(C) Diabetes Mellitus",
      "(D) Diabetes gestacional"
    ],
    "correctAnswer": 3,
    "explanation": "Valores de referência do TOTG 75 g na gestação (critérios IADPSG, adotados no Brasil): jejum ≥ 92, 1 hora ≥ 180 e 2 horas ≥ 153 mg/dL — um valor alterado basta para diabetes gestacional. Aqui os três estão alterados, e a banca considerou diabetes gestacional.\n\nPorém, pelos mesmos critérios brasileiros, jejum ≥ 126 mg/dL (ou 2 horas ≥ 200) define diabetes mellitus diagnosticado na gestação (overt diabetes). Por isso a alternativa C também é defensável.",
    "commentary": "Hiperglicemia (A): termo genérico, não é diagnóstico.\n\nExame normal (B): os três valores estão acima dos limites.\n\nDiabetes mellitus (C): jejum de 126 mg/dL preenche critério de diabetes prévio pela classificação brasileira; a banca não aceitou, mas tem respaldo nas diretrizes.",
    "reference": "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2017)",
    "tags": [
      "diabetes gestacional",
      "TOTG",
      "overt diabetes"
    ],
    "alert": "Gabarito oficial discutível: jejum ≥ 126 mg/dL no TOTG preenche critério de diabetes mellitus diagnosticado na gestação (overt), segundo OPAS/MS/FEBRASGO/SBD. A alternativa C também foi aceita aqui.",
    "alsoAccepted": [
      2
    ]
  },
  {
    "id": "cerman2025-51",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual é a abordagem mais recomendada para o manejo de um mioma uterino submucoso sintomático em uma mulher que deseja preservar a fertilidade?",
    "options": [
      "(A) Prescrever agonistas do GnRH como tratamento de longo prazo.",
      "(B) Realizar uma histerectomia abdominal para remoção definitiva do mioma.",
      "(C) Indicar miomectomia histeroscópica para remoção do mioma submucoso.",
      "(D) Recomendar embolização das artérias uterinas como primeira linha de tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "Mioma submucoso sintomático (sangramento, infertilidade) em mulher que deseja engravidar: miomectomia histeroscópica, que retira o nódulo pela cavidade uterina e preserva o útero. Funciona melhor nos tipos FIGO 0 e 1 e em nódulos até cerca de 4–5 cm.",
    "commentary": "GnRH de longo prazo (A): causa hipoestrogenismo e perda óssea; é usado por pouco tempo, como pré-operatório.\n\nHisterectomia (B): não preserva a fertilidade.\n\nEmbolização como primeira linha (D): não é recomendada para quem deseja gestar, pelo risco à reserva ovariana e à gestação futura.",
    "reference": "FEBRASGO — Miomatose uterina (Protocolo, 2021) / Classificação FIGO PALM-COEIN",
    "tags": [
      "mioma submucoso",
      "miomectomia histeroscópica",
      "preservação da fertilidade"
    ]
  },
  {
    "id": "cerman2025-52",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente com diagnóstico recente de sífilis terciária apresenta sintomas neurológicos sugestivos de neurossífilis, incluindo cefaleia e alterações cognitivas. Qual é a terapêutica mais indicada para o tratamento de neurossífilis neste caso?",
    "options": [
      "(A) Azitromicina 2g via oral, dose única.",
      "(B) Ceftriaxona 1g via intramuscular uma vez ao dia por 10-14 dias.",
      "(C) Penicilina G benzatina 2,4 milhões de unidades intramuscular semanalmente por três semanas.",
      "(D) Penicilina G cristalina 18-24 milhões de unidades/dia por via intravenosa, divididas em doses a cada 4 horas por 10-14 dias."
    ],
    "correctAnswer": 3,
    "explanation": "Neurossífilis exige penicilina que atravesse a barreira hematoencefálica em níveis terapêuticos: penicilina G cristalina 18–24 milhões UI/dia, IV, fracionada a cada 4 horas (3–4 milhões UI por dose), por 14 dias.",
    "commentary": "Azitromicina (A): não é usada para sífilis, por resistência e baixa eficácia.\n\nCeftriaxona 1 g IM (B): é alternativa na alergia à penicilina, mas na dose de 2 g/dia IV por 10–14 dias; não é a terapêutica mais indicada.\n\nPenicilina benzatina semanal por 3 semanas (C): não atinge níveis adequados no líquor; é o tratamento da sífilis latente tardia.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "neurossífilis",
      "penicilina cristalina",
      "sífilis terciária"
    ]
  },
  {
    "id": "cerman2025-53",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 28 anos apresenta queixa de corrimento vaginal branco-acinzentado, com odor fétido semelhante a peixe, especialmente após as relações sexuais. Ao exame microscópico, nota-se a presença de células clue (células epiteliais cobertas por bactérias). Qual é o diagnóstico mais provável e o tratamento de escolha para essa condição?",
    "options": [
      "(A) Vaginose bacteriana – metronidazol 500 mg, duas vezes ao dia por 7 dias.",
      "(B) Vaginose bacteriana – Azitromicina 1g dose única por via oral.",
      "(C) Tricomoníase – Azitromicina 1g, dose única por via oral.",
      "(D) Tricomoníase – metronidazol 2g, dose única por via oral."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento branco-acinzentado, homogêneo, com odor de peixe que piora após o coito (liberação de aminas com o pH alcalino do sêmen) e clue cells: vaginose bacteriana (critérios de Amsel). O tratamento de escolha é metronidazol 500 mg VO de 12 em 12 horas por 7 dias.",
    "commentary": "Vaginose com azitromicina (B): azitromicina não trata vaginose bacteriana.\n\nTricomoníase com azitromicina (C): o diagnóstico é vaginose (clue cells); e tricomoníase se trata com metronidazol.\n\nTricomoníase com metronidazol 2 g (D): o corrimento da tricomoníase é amarelo-esverdeado e bolhoso, com colo em framboesa e protozoário móvel ao exame a fresco.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "vaginose bacteriana",
      "clue cells",
      "metronidazol",
      "critérios de Amsel"
    ]
  },
  {
    "id": "cerman2025-54",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa CORRETA sobre as inibinas no ciclo fisiológico.",
    "options": [
      "(A) A inibina A é produzida pela granulosa dos folículos.",
      "(B) A inibina A é principalmente secretada pelo corpo lúteo.",
      "(C) A inibina B é principalmente secretada pela placenta.",
      "(D) A inibina B é inibida pelo aumento do FSH."
    ],
    "correctAnswer": 1,
    "explanation": "A inibina B é produzida pelas células da granulosa dos folículos pequenos em crescimento e predomina na fase folicular. A inibina A é secretada principalmente pelo corpo lúteo, com pico na fase lútea (e, na gestação, pela placenta).\n\nAs duas inibem a secreção de FSH pela hipófise.",
    "commentary": "Inibina A pela granulosa dos folículos (A): a granulosa dos folículos pequenos produz principalmente a inibina B; a A sobe no folículo dominante e no corpo lúteo.\n\nInibina B secretada pela placenta (C): a placenta secreta principalmente inibina A.\n\nInibina B inibida pelo FSH (D): o FSH estimula a produção de inibina B; a inibina é que inibe o FSH.",
    "reference": "Speroff L. Clinical Gynecologic Endocrinology and Infertility, 9ª ed. — Ciclo menstrual",
    "tags": [
      "inibinas",
      "ciclo menstrual",
      "fisiologia reprodutiva"
    ]
  },
  {
    "id": "cerman2025-55",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual sintoma mais comum da transição menopausal e pós menopausa inicial?",
    "options": [
      "(A) Dispareunia",
      "(B) Osteoporose",
      "(C) Distúrbios do sono",
      "(D) Sintomas vasomotores"
    ],
    "correctAnswer": 3,
    "explanation": "Os sintomas vasomotores (fogachos e sudorese noturna) são as queixas mais comuns da transição menopausal e da pós-menopausa inicial, presentes em até 75–80% das mulheres, e a principal indicação de terapia hormonal.",
    "commentary": "Dispareunia (A): faz parte da síndrome geniturinária, que aparece e progride mais tarde.\n\nOsteoporose (B): consequência tardia e assintomática da deficiência estrogênica.\n\nDistúrbios do sono (C): frequentes, mas muitas vezes secundários aos fogachos noturnos.",
    "reference": "The 2022 Hormone Therapy Position Statement (NAMS) / Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC, 2018)",
    "tags": [
      "climatério",
      "sintomas vasomotores",
      "menopausa"
    ]
  },
  {
    "id": "cerman2025-56",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 20 anos, foi ao ginecologista levando resultado de exame que evidenciou imagem cística com ecos em vidro fosco no ovário direito de 550 cm³. Foi submetida a cirurgia videolaparoscópica para a retirada do cisto e foi identificado que o conteúdo tinha aspecto de chocolate. Essa característica está mais comumente associada a:",
    "options": [
      "(A) Fibroma",
      "(B) Teratoma",
      "(C) Endometrioma",
      "(D) Cistoadenoma seroso"
    ],
    "correctAnswer": 2,
    "explanation": "Cisto ovariano com ecos homogêneos de baixa intensidade (\"vidro fosco\") na ultrassonografia e conteúdo achocolatado (sangue antigo) na cirurgia: endometrioma, a forma ovariana da endometriose.",
    "commentary": "Fibroma (A): tumor sólido do estroma ovariano, não cístico.\n\nTeratoma (B): cisto com gordura, cabelos e calcificações (sinal da ponta do iceberg).\n\nCistoadenoma seroso (D): cisto anecoico, de conteúdo claro e seroso.",
    "reference": "ESHRE Guideline: Endometriosis (2022) / FEBRASGO — Endometriose",
    "tags": [
      "endometrioma",
      "endometriose",
      "cisto de ovário"
    ]
  },
  {
    "id": "cerman2025-57",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 30 anos, diabética com vasculopatia, deseja iniciar anticoncepção. Não quer em nenhuma hipótese usar DIU. De acordo com os critérios de elegibilidade da OMS (2015), a conduta adequada é prescrever:",
    "options": [
      "(A) anel vaginal",
      "(B) Injetável mensal",
      "(C) adesivo semanal",
      "(D) Implante de etonogestrel"
    ],
    "correctAnswer": 3,
    "explanation": "Diabetes com vasculopatia contraindica métodos com estrogênio (categoria 3/4 da OMS). Os métodos só de progestagênio são preferíveis: o implante de etonogestrel é categoria 2 (benefício maior que o risco) e é muito eficaz. Como a paciente recusa DIU, o implante é a melhor opção.",
    "commentary": "Anel vaginal (A): contém estrogênio — categoria 3/4.\n\nInjetável mensal (B): combinado (estrogênio + progestagênio) — categoria 3/4.\n\nAdesivo semanal (C): contém estrogênio — categoria 3/4.",
    "reference": "OMS — Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "contracepção",
      "critérios de elegibilidade da OMS",
      "diabetes",
      "implante de etonogestrel"
    ]
  },
  {
    "id": "cerman2025-58",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 60 anos, menopausada há 5 anos, vem à consulta com quadro de sangramento vaginal infrequente, em pequena quantidade, acíclico. Nega outras queixas. Exame físico sem alterações. Ultrassom transvaginal evidenciou endométrio linear medindo 1.4 mm. Qual a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Pólipo endometrial.",
      "(B) Atrofia endometrial.",
      "(C) Mioma submucoso.",
      "(D) Hiperplasia endometrial."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento pós-menopausa discreto com endométrio fino (≤ 4 mm; aqui 1,4 mm) na ultrassonografia transvaginal: a causa mais provável é atrofia endometrial. O endométrio fino tem valor preditivo negativo muito alto para câncer; a investigação adicional fica para sangramento persistente ou recorrente.",
    "commentary": "Pólipo endometrial (A): costuma se apresentar como espessamento focal do endométrio.\n\nMioma submucoso (C): seria visto como nódulo distorcendo a cavidade.\n\nHiperplasia endometrial (D): endométrio espessado (> 4 mm).",
    "reference": "ACOG Committee Opinion nº 734 — Role of Transvaginal Ultrasonography in Postmenopausal Bleeding (2018)",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "ultrassonografia transvaginal"
    ]
  },
  {
    "id": "cerman2025-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 30 anos, assintomática, realizou exame de ultrassonografia mamaria de rotina que evidenciou nódulo sólido, hipoecóico, classificação BI-RADS 4A. Assinale a alternativa que representa a conduta adequada para o melhor cuidado com a paciente?",
    "options": [
      "(A) Core biopsy",
      "(B) Controle em 6 meses",
      "(C) Controle em 1 ano",
      "(D) Punção por agulha fina"
    ],
    "correctAnswer": 0,
    "explanation": "BI-RADS 4 (4A: baixa suspeição, 2–10% de malignidade) indica biópsia. Para nódulos sólidos, o método de escolha é a biópsia por agulha grossa (core biopsy) guiada por ultrassonografia, que fornece diagnóstico histológico.",
    "commentary": "Controle em 6 meses (B): conduta de BI-RADS 3.\n\nControle anual (C): conduta de BI-RADS 1 e 2.\n\nPunção por agulha fina (D): fornece apenas citologia, com mais resultados inconclusivos; é usada para cistos e linfonodos.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Recomendações do CBR, SBM e FEBRASGO para o diagnóstico do câncer de mama",
    "tags": [
      "BI-RADS",
      "nódulo mamário",
      "core biopsy",
      "mastologia"
    ]
  },
  {
    "id": "cerman2025-60",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante uma histerectomia abdominal, o cirurgião deve identificar e ligar a artéria uterina para evitar sangramento excessivo. Ao fazer isso, ele precisa tomar cuidado para evitar lesionar qual estrutura anatômica adjacente que passa imediatamente inferior à artéria uterina?",
    "options": [
      "(A) Ureter",
      "(B) Nervo pudendo",
      "(C) Veia ilíaca interna",
      "(D) Ligamento uterossacro"
    ],
    "correctAnswer": 0,
    "explanation": "Na base do ligamento largo, o ureter passa por baixo da artéria uterina, cerca de 1,5–2 cm lateral ao colo (\"a água passa sob a ponte\"). É o ponto de maior risco de lesão ureteral na ligadura da uterina durante a histerectomia.",
    "commentary": "Nervo pudendo (B): sai pelo forame isquiático maior e corre no canal de Alcock, longe do pedículo uterino.\n\nVeia ilíaca interna (C): fica na parede pélvica lateral, posterior e mais lateral.\n\nLigamento uterossacro (D): é posterior; o ureter corre lateralmente a ele.",
    "reference": "Netter FH. Atlas de Anatomia Humana / Te Linde's Operative Gynecology, 12ª ed.",
    "tags": [
      "anatomia pélvica",
      "ureter",
      "artéria uterina",
      "histerectomia"
    ]
  },
  {
    "id": "cerman2025-61",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "Pré-escolar de três anos, sexo feminino, eutrófica, é levada ao Ambulatório Araújo Lima por sua mãe, com queixa que o referido não come nada, só aceita salgadinhos e guloseimas. Para comer é “chantageada” e na ocasião apresenta vômito logo em seguida da ingestão do alimento. É ofertado frutas, verduras e legumes as quais aceita mas não engole, cospe tudo (sic). O alimento que melhor aceita é leite com chocolate, que é oferecido várias vezes ao dia devido a aceitação. Os sintomas estão relacionados a qual quadro clínico:",
    "options": [
      "(A) Inapetência.",
      "(B) Neofobia alimentar.",
      "(C) Sensibilidade láctea.",
      "(D) Transtorno alimentar."
    ],
    "correctAnswer": 2,
    "explanation": "Pré-escolar eutrófica que recusa refeições, aceita guloseimas e toma leite com achocolatado várias vezes ao dia. O leite oferecido em excesso (pela boa aceitação) causa saciedade e diminui o apetite para as refeições, num ciclo mantido pela insistência e pela \"chantagem\" na hora de comer.\n\nA banca chamou o quadro de \"sensibilidade láctea\" — a dependência do leite como fonte principal de calorias. A conduta é reduzir o leite, oferecer refeições em horários regulares, sem pressão, e manter a exposição repetida aos alimentos recusados.",
    "commentary": "Inapetência (A): é o sintoma relatado pela mãe; a criança é eutrófica e come leite e guloseimas, então não há inapetência verdadeira.\n\nNeofobia alimentar (B): recusa de alimentos novos, comum dos 2 aos 6 anos; o enunciado enfatiza o consumo excessivo de leite, que a banca quis destacar.\n\nTranstorno alimentar (D): termo amplo; transtornos como o TARE causam prejuízo nutricional ou de crescimento, ausente aqui.",
    "reference": "SBP — Manual de Alimentação: orientações para alimentação do lactente ao adolescente, 4ª ed. (2018) / SBP — Dificuldades alimentares na infância",
    "tags": [
      "dificuldade alimentar",
      "seletividade alimentar",
      "pré-escolar",
      "consumo excessivo de leite"
    ],
    "alert": "Gabarito discutível: \"sensibilidade láctea\" é termo pouco usado; o quadro também se encaixa em seletividade alimentar/neofobia e erro alimentar por excesso de leite. A banca considerou a alternativa C."
  },
  {
    "id": "cerman2025-62",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "O teste da orelhinha ou exame de emissão otoacústica deve ser realizado em:",
    "options": [
      "(A) Em recém-nascidos com alterações crânio facial.",
      "(B) Em todos recém-nascido entre o 3º e 5º dia de vida.",
      "(C) Em recém-nascido que tenha recebido ventilação respiratória por mais de 5 dias.",
      "(D) Em recém-nascidos que apresentam alterações clínicas sugestivas de infecção congênita."
    ],
    "correctAnswer": 1,
    "explanation": "A triagem auditiva neonatal (teste da orelhinha) é universal e obrigatória por lei (Lei nº 12.303/2010): todos os recém-nascidos fazem emissões otoacústicas, de preferência antes da alta e até o fim do primeiro mês. Recém-nascidos com indicador de risco para deficiência auditiva fazem PEATE (BERA).",
    "commentary": "Só com alterações craniofaciais (A): é indicador de risco, mas a triagem é para todos.\n\nSó com ventilação por mais de 5 dias (C): também é indicador de risco; esses RN fazem PEATE.\n\nSó com suspeita de infecção congênita (D): também indicador de risco, sem restringir o teste.",
    "reference": "Ministério da Saúde — Diretrizes de Atenção da Triagem Auditiva Neonatal (2012) / Lei nº 12.303/2010",
    "tags": [
      "triagem auditiva neonatal",
      "teste da orelhinha",
      "emissões otoacústicas"
    ]
  },
  {
    "id": "cerman2025-63",
    "topography": "14",
    "topic": "Anafilaxia",
    "module": "Pediatria",
    "text": "Qual o conjunto de dados clínicos necessários para que seja estabelecido o diagnóstico de ANAFILAXIA:",
    "options": [
      "(A) Dor abdominal e vomito após exposição a um alérgeno conhecido.",
      "(B) Sincope que tem início minutos ou horas após exposição a um alérgeno provável.",
      "(C) Sintomas gastrointestinais persistente após exposição a um alérgeno conhecido.",
      "(D) Hipotensão que tem início minutos ou horas, após exposição a um alérgeno conhecido."
    ],
    "correctAnswer": 3,
    "explanation": "Pelos critérios da WAO, anafilaxia é provável quando há: (1) início agudo de acometimento de pele/mucosas com comprometimento respiratório, hipotensão ou disfunção de órgão; ou (2) após exposição a um alérgeno conhecido ou muito provável, hipotensão, broncoespasmo ou acometimento laríngeo, mesmo sem lesões de pele.\n\nHipotensão minutos ou horas após exposição a um alérgeno conhecido basta para o diagnóstico.",
    "commentary": "Dor abdominal e vômito isolados (A): sintomas gastrointestinais graves contam como sistema acometido, mas precisam se associar a outro sistema (pele, respiratório) ou à hipotensão.\n\nSíncope após alérgeno provável (B): a síncope pode refletir hipotensão, mas o critério é a hipotensão documentada após alérgeno conhecido.\n\nSintomas gastrointestinais persistentes (C): isolados, não definem anafilaxia.",
    "reference": "World Allergy Organization Anaphylaxis Guidance (2020) / ASBAI — Guia de anafilaxia",
    "tags": [
      "anafilaxia",
      "hipotensão",
      "emergência pediátrica"
    ]
  },
  {
    "id": "cerman2025-64",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido a termo, Apgar 9 e 10, peso ao nascer 3.600 kg, em aleitamento materno exclusivo, apresentou icterícia, necessitando de fototerapia no 3º dia de vida, na oportunidade está com 3.100 kg. Os exames laboratoriais afastaram a hipótese de infecção, incompatibilidade sanguínea e deficiência de G6PD. Qual a conduta a ser tomada:",
    "options": [
      "(A) Introduzir fórmula láctea.",
      "(B) Iniciar hidratação venosa.",
      "(C) Manter aleitamento materno.",
      "(D) Oferecer solução glicosada a 5% por via oral."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido em aleitamento exclusivo, com icterícia que exigiu fototerapia e perda de peso de cerca de 14% (3.600 → 3.100 g), sem infecção, incompatibilidade ou deficiência de G6PD: icterícia associada à amamentação insuficiente (baixa ingesta).\n\nA conduta é manter e otimizar o aleitamento materno (pega, frequência de mamadas, apoio à mãe). Complemento com leite materno ordenhado ou fórmula só se houver perda excessiva e falha da amamentação apesar do suporte.",
    "commentary": "Introduzir fórmula (A): não é o primeiro passo; a prioridade é corrigir a técnica e a frequência das mamadas.\n\nHidratação venosa (B): só se houver desidratação grave ou risco de exsanguineotransfusão.\n\nÁgua glicosada via oral (D): não reduz bilirrubina e atrapalha o aleitamento.",
    "reference": "SBP — Icterícia no recém-nascido com idade gestacional ≥ 35 semanas (2021) / AAP Clinical Practice Guideline — Hyperbilirubinemia (2022)",
    "tags": [
      "icterícia neonatal",
      "aleitamento materno",
      "perda de peso neonatal"
    ]
  },
  {
    "id": "cerman2025-65",
    "topography": "13",
    "topic": "Transtornos alimentares",
    "module": "Pediatria",
    "text": "Adolescente de 15 anos, sexo feminino, procurou o serviço ambulatorial acompanhada de seus pais que estão preocupados com sua magreza. Na anamnese relatam que a filha apresenta medo extremo da obesidade, analisa todas as calorias dos alimentos que vai ingerir e está sempre procurando sites de alimentação na internet com objetivo de manter o peso abaixo de 40kg. Ao exame físico: emagrecida, hipocorada, peso 39 kg, escore Z-3, altura 1,58 cm, IMC=15,5, TAX: 36° C, PA: 100X65 mmHg, FC: 48 bpm, Estadiamento de TANNER M4P4. Qual a hipótese diagnostica mais provável:",
    "options": [
      "(A) Ortorexia.",
      "(B) Neofobia.",
      "(C) Anorexia nervosa.",
      "(D) Adolescência normal."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com medo intenso de engordar, restrição calórica, baixo peso (IMC 15,5, escore-z −3) e sinais de adaptação à desnutrição (bradicardia, hipotermia, hipotensão): anorexia nervosa. A FC de 48 bpm é critério de gravidade e pode indicar internação.",
    "commentary": "Ortorexia (A): obsessão por comer apenas alimentos \"saudáveis\"; a motivação não é o medo de engordar.\n\nNeofobia (B): recusa de alimentos novos, típica de pré-escolares.\n\nAdolescência normal (D): IMC escore-z −3, bradicardia e hipotermia são patológicos.",
    "reference": "American Psychiatric Association — DSM-5-TR (2022) / SBP — Transtornos alimentares na adolescência",
    "tags": [
      "anorexia nervosa",
      "transtornos alimentares",
      "adolescência"
    ]
  },
  {
    "id": "cerman2025-66",
    "module": "Pediatria",
    "text": "Escolar de 9 anos, apresenta quadro de febre alta (TAX: 40°C), tonsilite pultácea, petéquias em palato, exantema micropapular difuso com intensidade nas dobras de flexão (SINAL DE PASTIA) e palidez peribucal com início há cinco dias (SINAL DE FILATOV). A principal hipótese diagnostica e a conduta indicada para o caso é:",
    "options": [
      "(A) Doença de Kawasaki - administrar imunoglobulina por via endovenosa.",
      "(B) Escarlatina – administração de penicilina por via parenteral.",
      "(C) Mononucleose infecciosa – administrar sintomático.",
      "(D) Mononucleose infecciosa - administrar prednisona oral."
    ],
    "correctAnswer": 1,
    "explanation": "Febre alta, faringoamigdalite exsudativa, petéquias no palato, exantema micropapular áspero que se acentua nas dobras (sinal de Pastia) e palidez perioral (sinal de Filatov): escarlatina, causada por estreptococo beta-hemolítico do grupo A produtor de toxina.\n\nO tratamento é penicilina — benzatina IM em dose única ou amoxicilina VO por 10 dias.",
    "commentary": "Kawasaki (A): febre ≥ 5 dias com conjuntivite, alterações de lábios e extremidades, sem amigdalite pultácea.\n\nMononucleose com sintomáticos (C): cursa com linfonodomegalia generalizada e esplenomegalia; o exantema clássico surge após amoxicilina.\n\nMononucleose com prednisona (D): corticoide só em complicações (obstrução de via aérea, anemia hemolítica).",
    "reference": "Ministério da Saúde/SBP — Faringoamigdalite estreptocócica / Red Book (AAP), 2024",
    "tags": [
      "escarlatina",
      "estreptococo do grupo A",
      "sinal de Pastia",
      "penicilina"
    ]
  },
  {
    "id": "cerman2025-67",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido com quatro dias de vida, em aleitamento materno exclusivo, mãe relata dificuldade para mamar, hipotonia, alguns episódios de vômito e hiperirritabilidade. Na admissão no serviço de emergência, RN apresenta quadro de acidose metabólica, evoluindo para coma sendo encaminhado ao CTI. A mãe por sugestão de uma amiga segue dieta vegetariana. O quadro apresentado é secundário a carência de:",
    "options": [
      "(A) Biotina.",
      "(B) L. carnitina.",
      "(C) Hidroxifolato.",
      "(D) Cobalamina."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente em aleitamento exclusivo, filho de mãe vegetariana, com dificuldade de sucção, hipotonia, vômitos, irritabilidade e acidose metabólica evoluindo para coma: deficiência de vitamina B12 (cobalamina). A B12 é cofator da metilmalonil-CoA mutase; sua falta causa acidemia metilmalônica e dano neurológico.\n\nA mãe vegetariana/vegana sem suplementação tem leite pobre em B12. O tratamento é repor B12 na criança e na mãe.",
    "commentary": "Biotina (A): a deficiência é rara e causa dermatite, alopecia e acidose; não se relaciona à dieta vegetariana materna.\n\nL-carnitina (B): deficiências são genéticas ou secundárias a erros inatos; não decorrem da dieta materna.\n\nFolato (C): a dieta vegetariana costuma ser rica em folato; a deficiência causa anemia megaloblástica sem acidose metabólica grave.",
    "reference": "SBP — Documento Científico: Alimentação vegetariana na infância e adolescência (2017)",
    "tags": [
      "deficiência de vitamina B12",
      "dieta vegetariana",
      "aleitamento materno",
      "acidemia metilmalônica"
    ]
  },
  {
    "id": "cerman2025-68",
    "module": "Pediatria",
    "text": "Recém-nascido à termo nasceu apresentando malformação congênita de parede abdominal, ocasionando exposição de estrutura intra abdominal. A hipótese diagnóstica é:",
    "options": [
      "(A) Gastroquise.",
      "(B) Tocotraumatismo.",
      "(C) Síndrome de Prune-Belly.",
      "(D) Síndrome Beckwith-Wiedemann."
    ],
    "correctAnswer": 0,
    "explanation": "Defeito congênito de parede abdominal com vísceras expostas, sem saco que as recubra: gastrosquise. O defeito fica à direita do cordão umbilical, que está íntegro, e as alças ficam em contato com o líquido amniótico (espessadas, edemaciadas).\n\nO manejo imediato é proteger as alças com cobertura estéril e plástica, manter temperatura e hidratação e fazer correção cirúrgica precoce.",
    "commentary": "Tocotraumatismo (B): lesão do parto, não malformação de parede.\n\nPrune-belly (C): ausência ou hipoplasia da musculatura abdominal, com pele enrugada, megabexiga e criptorquidia; não há vísceras expostas.\n\nBeckwith-Wiedemann (D): síndrome de hipercrescimento associada a onfalocele (com saco), macroglossia e hipoglicemia.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Defeitos da parede abdominal",
    "tags": [
      "gastrosquise",
      "defeitos da parede abdominal",
      "cirurgia pediátrica",
      "neonatologia"
    ]
  },
  {
    "id": "cerman2025-69",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Pré-escolar de 4 anos, sexo masculino, pesando 16 kg, terá que submeter-se a um procedimento cirúrgico para correção de uma malformação congênita. Exames laboratoriais pré-operatório: hematócrito 29%, hemoglobina 9,4g/dL, VCM 65 fL. O pediatra fez o diagnóstico de anemia ferropriva e instituiu o tratamento com sulfato ferroso (250mg/10 ml) oferecer 2,5 ml uma vez ao dia, antes do almoço. No 21º dia de tratamento foi solicitado novo hemograma e obteve-se praticamente os mesmos índices do hemograma anterior. Qual a melhor conduta a ser adotada neste caso:",
    "options": [
      "(A) Iniciar investigação para outras causas de anemia.",
      "(B) Corrigir a dose de ferro necessária para o tratamento.",
      "(C) Manter a mesma dose de sulfato ferroso e aguardar mais uma semana.",
      "(D) Indicar a correção cirúrgica da anomalia independente do resultado do hemograma."
    ],
    "correctAnswer": 1,
    "explanation": "A dose terapêutica de ferro na anemia ferropriva é de 3 a 5 mg/kg/dia de ferro elementar. O sulfato ferroso tem 20% de ferro elementar: 250 mg/10 mL correspondem a 50 mg de ferro elementar em 10 mL, ou 5 mg/mL. Os 2,5 mL prescritos dão cerca de 12,5 mg de ferro elementar, menos de 1 mg/kg/dia para uma criança de 16 kg (o necessário seria 48–80 mg/dia).\n\nA falta de resposta se explica pela subdose: deve-se corrigir a dose antes de investigar outras causas.",
    "commentary": "Investigar outras causas (A): antes, corrige-se a dose; só se não houver resposta com a dose adequada, investiga-se má adesão, perda ou má absorção.\n\nManter a dose e esperar (C): a dose é insuficiente; não haverá resposta.\n\nOperar sem corrigir a anemia (D): a cirurgia eletiva deve aguardar a correção.",
    "reference": "SBP — Consenso sobre Anemia Ferropriva (2018, atualizado 2021)",
    "tags": [
      "anemia ferropriva",
      "sulfato ferroso",
      "ferro elementar",
      "dose terapêutica"
    ]
  },
  {
    "id": "cerman2025-70",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido com 18 dias de vida, em aleitamento materno exclusivo, evolui há 2 semanas com quadro de vômito, perda de peso, icterícia e colúria. Ao exame físico: peso - 2.700kg, comprimento - 50cm, icterícia 3+/4+, fígado palpável a 3 cm do RCD. A pesquisa urinaria de substâncias redutoras foi positiva. O diagnóstico em questão é GALACTOSEMIA, qual o tratamento a ser proposto:",
    "options": [
      "(A) Dieta isenta de lactose.",
      "(B) Dieta cetogênica.",
      "(C) Piloromiotomia.",
      "(D) Ganciclovir."
    ],
    "correctAnswer": 0,
    "explanation": "Na galactosemia clássica (deficiência de galactose-1-fosfato uridiltransferase), a galactose do leite acumula e causa vômitos, déficit de ganho de peso, icterícia, hepatomegalia, catarata e sepse por E. coli. A urina tem substâncias redutoras.\n\nO tratamento é a retirada imediata da galactose da dieta: suspender o leite materno e usar fórmula sem lactose (à base de soja ou hidrolisado).",
    "commentary": "Dieta cetogênica (B): indicada em epilepsias refratárias e deficiência de GLUT1.\n\nPiloromiotomia (C): tratamento da estenose hipertrófica de piloro, que causa vômitos em jato sem icterícia colestática.\n\nGanciclovir (D): tratamento do citomegalovírus congênito sintomático.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Defeitos do metabolismo dos carboidratos",
    "tags": [
      "galactosemia",
      "erros inatos do metabolismo",
      "icterícia neonatal",
      "dieta isenta de lactose"
    ]
  },
  {
    "id": "cerman2025-71",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Mãe leva sua filha de 2 anos e 10 meses de idade na Unidade Básica de Saúde para consulta de puericultura, pois o Agente Comunitário de Saúde constatou atraso vacinal. Família vive em uma comunidade ribeirinha e não estavam conseguindo vir à cidade por conta da seca severa. As últimas vacinas que ela havia recebido tinham sido com um ano de idade. O médico disse que a criança estava bem e não tinha contraindicação para ser vacinada, sendo orientada a procurar o setor de imunizações com a finalidade de atualização. Qual a melhor conduta para atualizar a caderneta de vacinas da criança, segundo o PNI-MS?",
    "options": [
      "(A) Aplicar agora a Tetraviral (S,R,C,V), hepatite A, VOP e DPT.",
      "(B) Aplicar agora a Hepatite B, VOP, Tetraviral (S,R,C,V).",
      "(C) Aplicar agora a VOP e DPT, esperar 15-30 dias para administrar Tetraviral (S,R,C,V).",
      "(D) Aplicar agora a hepatite A, PNM10V e Meningo C."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 2 anos e 10 meses que parou no esquema dos 12 meses. Faltam as vacinas dos 15 meses: 1º reforço da DTP, 1º reforço da poliomielite (VOP, até 2024; depois VIP), tetraviral (ou SCR + varicela) e hepatite A.\n\nNa atualização, todas as vacinas em atraso podem ser aplicadas no mesmo dia, inclusive as de vírus vivo, sem intervalo entre elas.",
    "commentary": "Hepatite B, VOP e tetraviral (B): a hepatite B já foi completada no primeiro ano (pentavalente); falta DTP e hepatite A.\n\nEsperar 15–30 dias para a tetraviral (C): vacinas vivas podem ser aplicadas no mesmo dia; o intervalo de 30 dias só vale se não forem simultâneas, e não se aplica entre VOP e tetraviral.\n\nHepatite A, pneumo-10 e meningo C (D): os reforços de pneumo-10 e meningo são aos 12 meses, já recebidos.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Criança e Manual de Normas e Procedimentos para Vacinação (2024)",
    "tags": [
      "calendário vacinal",
      "atraso vacinal",
      "tetraviral",
      "imunização"
    ]
  },
  {
    "id": "cerman2025-72",
    "topography": "11",
    "topic": "Prematuridade",
    "module": "Pediatria",
    "text": "Pedro nasceu com 35 semanas de gestação, peso ao nascer 1.950g, comprimento 46cm e perímetro cefálico 33 cm. De acordo com as curvas de crescimento intrauterino (Intergrowth-21st), o peso de nascimento estava abaixo do P10. Quais os diagnósticos desta criança?",
    "options": [
      "(A) Prematuridade, baixo peso ao nascer, retardo de crescimento.",
      "(B) Prematuridade, baixo peso ao nascer, pequeno para Idade Gestacional.",
      "(C) Prematuridade, muito baixo peso ao nascer, retardo de crescimento.",
      "(D) Prematuridade, muito baixo peso ao nascer, pequeno para Idade Gestacional."
    ],
    "correctAnswer": 1,
    "explanation": "Nascido com 35 semanas: prematuro (< 37 semanas). Peso de 1.950 g: baixo peso ao nascer (< 2.500 g; muito baixo peso é < 1.500 g). Peso abaixo do percentil 10 para a idade gestacional: pequeno para a idade gestacional (PIG).",
    "commentary": "Retardo de crescimento (A e C): o termo para o recém-nascido classificado pela curva é PIG; restrição de crescimento é diagnóstico intrauterino, feito pelo acompanhamento do crescimento fetal.\n\nMuito baixo peso (C e D): exige peso < 1.500 g.",
    "reference": "Ministério da Saúde — Atenção à Saúde do Recém-Nascido, vol. 1 / Curvas INTERGROWTH-21st",
    "tags": [
      "prematuridade",
      "baixo peso ao nascer",
      "pequeno para a idade gestacional",
      "neonatologia"
    ]
  },
  {
    "id": "cerman2025-73",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Alessandro é um escolar de 8 anos em seu consultório. O menino sofre bullying na escola por causa da sua altura. A mãe está preocupada, pois o acha muito baixo, perto dos amigos. No manejo inicial para avaliar essa criança, além de confirmar se há realmente baixa estatura, a conduta mais apropriada é:",
    "options": [
      "(A) Solicitar cariótipo, hormônio de crescimento e encaminhar ao endorcrinologista.",
      "(B) Solicitar ultrassonografia de abdome total, Rx de joelho Ap e perfil, dosar insulina e cortisol.",
      "(C) Solicitar dosagem de gonadotrofinas, hormônio de crescimento e fazer estadiamento de Tanner.",
      "(D) Colocar no gráfico para ver se há baixa estatura, demarcar o alvo parental, calcular velocidade de crescimento e solicitar Rx de mão e punho esquerdo."
    ],
    "correctAnswer": 3,
    "explanation": "A avaliação inicial da baixa estatura começa sem exames sofisticados: medir corretamente e plotar na curva (estatura < −2 escores-z ou < p3), calcular a estatura-alvo familiar, medir a velocidade de crescimento em pelo menos 6 meses e solicitar a idade óssea (radiografia de mão e punho esquerdos).\n\nCom esses dados se distinguem baixa estatura familiar, atraso constitucional e causas patológicas, que então orientam exames específicos.",
    "commentary": "Cariótipo, GH e endocrinologista (A): GH basal não tem valor diagnóstico (secreção pulsátil); cariótipo é indicado em meninas ou com dismorfias.\n\nUS de abdome, Rx de joelho, insulina e cortisol (B): exames sem indicação na triagem inicial.\n\nGonadotrofinas, GH e Tanner (C): dosagens hormonais vêm depois da avaliação auxológica, se houver suspeita.",
    "reference": "SBP/SBEM — Baixa estatura: avaliação e diagnóstico",
    "tags": [
      "baixa estatura",
      "velocidade de crescimento",
      "idade óssea",
      "estatura-alvo"
    ]
  },
  {
    "id": "cerman2025-74",
    "module": "Pediatria",
    "text": "Eduardo tem três anos e há 10 dias apresenta febre alta. Ao exame físico, apresenta edema palpebral bilateral, petéquias no palato, exsudato amigdaliano, adenomegalia cervical anterior e posterior, fígado palpável a 4cm do rebordo costal direito e baço a 5cm do rebordo costa esquerdo. Qual exame mais indicado para confirmação do diagnóstico neste momento?",
    "options": [
      "(A) Sorologia para dengue.",
      "(B) Sorologia para Epstein-Barr vírus.",
      "(C) Aspirado e cultura de medula óssea.",
      "(D) Teste rápido para pesquisa de estreptococo do grupo A."
    ],
    "correctAnswer": 1,
    "explanation": "Febre prolongada com faringoamigdalite exsudativa, petéquias no palato, linfonodomegalia cervical anterior e posterior, edema palpebral (sinal de Hoagland), hepatomegalia e esplenomegalia: mononucleose infecciosa pelo vírus Epstein-Barr.\n\nEm crianças pequenas o teste de anticorpos heterófilos (Paul-Bunnell, monoteste) é frequentemente negativo; a sorologia específica para EBV (IgM anti-VCA) confirma o diagnóstico.",
    "commentary": "Sorologia para dengue (A): dengue não causa amigdalite exsudativa nem linfonodomegalia cervical posterior.\n\nAspirado de medula (C): seria indicado na suspeita de leucemia (citopenias, blastos); o quadro é típico de mononucleose.\n\nTeste rápido para estreptococo (D): a faringite estreptocócica não causa hepatoesplenomegalia nem adenomegalia cervical posterior.",
    "reference": "Red Book (AAP), 2024 — Epstein-Barr Virus Infections / Nelson Textbook of Pediatrics, 21ª ed.",
    "tags": [
      "mononucleose infecciosa",
      "vírus Epstein-Barr",
      "sorologia",
      "hepatoesplenomegalia"
    ]
  },
  {
    "id": "cerman2025-75",
    "topography": "10",
    "topic": "Malária",
    "module": "Pediatria",
    "text": "João, 10 anos, mora em Careiro Castanho e está há 12 dias com febre. Refere também, cefaleia, mialgia e dores abdominais. Previamente hígido sem histórico de doenças agudas ou crônicas. Fez exame de gota espessa que revelou diagnóstico de Plasmodium vivax 2+. Qual a melhor conduta neste caso, considerando que a criança apresenta G6PD normal:",
    "options": [
      "(A) Cloroquina por 3 dias e Primaquina por 7 dias.",
      "(B) Cloroquina por 3 dias e Tafenoquina dose única.",
      "(C) Artemeter + lumefantrina por 3 dias e Primaquina dose única.",
      "(D) Artemeter + lumefantrina por 3 dias e Primaquina por 14 dias."
    ],
    "correctAnswer": 0,
    "explanation": "Malária por Plasmodium vivax em criança com G6PD normal: cloroquina por 3 dias (esquizonticida sanguíneo) e primaquina por 7 dias (esquema curto, 0,5 mg/kg/dia) para eliminar os hipnozoítos hepáticos e evitar recaídas.",
    "commentary": "Cloroquina + tafenoquina (B): a tafenoquina dose única só é indicada a partir de 16 anos (e com G6PD normal quantitativo).\n\nArtemeter-lumefantrina + primaquina dose única (C): esquema para P. falciparum (primaquina dose única como gametocitocida).\n\nArtemeter-lumefantrina + primaquina por 14 dias (D): os derivados de artemisinina são reservados ao P. falciparum e a infecções mistas; para vivax, usa-se cloroquina.",
    "reference": "Ministério da Saúde — Guia de Tratamento da Malária no Brasil (2021/2024)",
    "tags": [
      "malária",
      "plasmodium vivax",
      "cloroquina",
      "primaquina"
    ]
  },
  {
    "id": "cerman2025-76",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Paciente comparece na consulta de seguimento de seu filho de 2 meses de idade, que está em aleitamento exclusivo. Refere dor e ardor no mamilo esquerdo, prurido e “fisgadas” que se irradiam para o interior da mama durante a amamentação. Nega episódios de mamilos pálidos ou arroxeados. O exame das mamas revela hiperemia dos mamilos e aréolas, que se mostram brilhantes, com aspecto friável. Exame físico do lactente sem alterações. Dentre as seguintes propostas terapêuticas, a melhor para este caso é:",
    "options": [
      "(A) Nistatina tópica para mãe.",
      "(B) Neomicina tópica para mãe.",
      "(C) Nistatina tópica para mãe e lactente.",
      "(D) Gelo local e antiinflamatório para mãe."
    ],
    "correctAnswer": 2,
    "explanation": "Dor em ardência e \"fisgadas\" irradiando para dentro da mama durante e após as mamadas, com mamilos e aréolas hiperemiados, brilhantes e descamativos: candidíase mamilar. O tratamento é antifúngico tópico (nistatina, miconazol) para a mãe E para o lactente (cavidade oral), mesmo sem lesões visíveis, para evitar a reinfecção cruzada.",
    "commentary": "Nistatina só para a mãe (A): sem tratar a boca do bebê, a infecção retorna.\n\nNeomicina tópica (B): antibiótico, sem ação contra cândida.\n\nGelo e anti-inflamatório (D): alívio sintomático, sem tratar a causa; o fenômeno de Raynaud foi afastado (não há mamilos pálidos ou arroxeados).",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Aleitamento Materno (2015)",
    "tags": [
      "candidíase mamilar",
      "aleitamento materno",
      "nistatina"
    ]
  },
  {
    "id": "cerman2025-77",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Sobre o desenvolvimento dos caracteres sexuais secundários, pode-se afirmar que:",
    "options": [
      "(A) O final da puberdade nos meninos é o odor axilar.",
      "(B) A telarca é o primeiro sinal de puberdade nas meninas.",
      "(C) O primeiro sinal de puberdade masculina é o nascimento dos pelos pubianos.",
      "(D) Nas meninas, a menarca ocorre simultaneamente à telarca, marcando o início da puberdade."
    ],
    "correctAnswer": 1,
    "explanation": "Nas meninas, o primeiro sinal de puberdade é a telarca (broto mamário, M2), em geral entre 8 e 13 anos. A menarca ocorre em média 2 a 2,5 anos depois, no estádio M4.",
    "commentary": "Odor axilar como final da puberdade masculina (A): odor axilar é sinal de adrenarca e aparece cedo.\n\nPelos pubianos como primeiro sinal masculino (C): o primeiro sinal no menino é o aumento testicular (volume ≥ 4 mL).\n\nMenarca simultânea à telarca (D): a menarca é evento tardio da puberdade.",
    "reference": "SBP — Departamento de Endocrinologia: Puberdade normal / Tanner JM",
    "tags": [
      "puberdade",
      "telarca",
      "estadiamento de Tanner",
      "adolescência"
    ]
  },
  {
    "id": "cerman2025-78",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Pediatria",
    "text": "Mãe com 26 anos, G2P2, não realizou pré-natal e não usou nenhuma medicação na gravidez. No dia do parto apresenta teste treponêmico reagente e teste não treponêmico reagente 1: 512. Recém-nascido nasceu de parto vaginal, sexo feminino, 40 semanas e 3 dias, com peso de nascimento de 2.475 gramas e hepatoesplenomegalia ao exame físico. Sorologias da criança: teste treponêmico reagente e teste não treponêmico reagente 1:128. Liquor: leucócitos = 287/mm³ (10% neutrófilo, 25% linfócitos), proteína = 350 mg/dl, glicose = 12 mg/dl; glicemia 75 mg/dl. O tratamento para o recém-nascido é:",
    "options": [
      "(A) Benzilpenicilina procaína 50.000 UI/kg, endovenosa, dose única.",
      "(B) Benzilpenicilina cristalina 50.000 UI/kg, endovenosa, dose única.",
      "(C) Benzilpenicilina cristalina 50.000 UI/kg/dose, endovenosa, por 10 dias.",
      "(D) Benzilpenicilina procaína 50.000 UI/kg/dose, intramuscular, uma vez ao dia, por 10 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido de mãe com sífilis não tratada, com hepatoesplenomegalia, VDRL reagente e líquor alterado (leucócitos e proteína elevados, glicose baixa): sífilis congênita com neurossífilis.\n\nO tratamento é benzilpenicilina cristalina 50.000 UI/kg/dose IV, a cada 12 horas na primeira semana de vida e a cada 8 horas depois, por 10 dias.",
    "commentary": "Procaína em dose única (A): não existe esquema de dose única para sífilis congênita; e a procaína é IM.\n\nCristalina em dose única (B): a duração é de 10 dias.\n\nProcaína IM por 10 dias (D): é opção para sífilis congênita SEM neurossífilis; com líquor alterado, usa-se cristalina.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) — Sífilis congênita",
    "tags": [
      "sífilis congênita",
      "neurossífilis",
      "penicilina cristalina",
      "neonatologia"
    ]
  },
  {
    "id": "cerman2025-79",
    "module": "Pediatria",
    "text": "A hipoglicemia neonatal é caracterizada pelos seguintes sinais e sintomas:",
    "options": [
      "(A) tremores e convulsões.",
      "(B) tremores e hipertonia.",
      "(C) taquipneia e hipertonia.",
      "(D) choro forte e sucção débil."
    ],
    "correctAnswer": 0,
    "explanation": "A hipoglicemia neonatal manifesta-se com sinais inespecíficos de disfunção neurológica e adrenérgica: tremores, irritabilidade, hipotonia, letargia, sucção débil, apneia, cianose, taquipneia, hipotermia e, nos casos graves, convulsões.\n\nDas alternativas, tremores e convulsões são as manifestações características.",
    "commentary": "Tremores e hipertonia (B): a hipoglicemia causa hipotonia, não hipertonia.\n\nTaquipneia e hipertonia (C): mesma observação sobre o tônus.\n\nChoro forte e sucção débil (D): o choro costuma ser fraco ou agudo, não forte.",
    "reference": "SBP — Hipoglicemia neonatal (Documento Científico, 2014) / Ministério da Saúde — Atenção à Saúde do Recém-Nascido",
    "tags": [
      "hipoglicemia neonatal",
      "neonatologia",
      "convulsões neonatais"
    ]
  },
  {
    "id": "cerman2025-80",
    "topography": "10",
    "topic": "Toxoplasmose",
    "module": "Pediatria",
    "text": "Um recém-nascido de 38 semanas apresenta microcefalia, tomografia de crânio com calcificações difusas, fundo de olho com coriorretinite bilateral e avaliação auditiva sem comprometimento. Com base nesse caso hipotético, assinale a alternativa CORRETA.",
    "options": [
      "(A) A decisão do tratamento depende da carga viral.",
      "(B) As lesões ósseas encontradas geralmente são bilaterais e simétricas, incidindo mais no rádio e na ulna.",
      "(C) Caso a mãe tivesse com a vacinação em dia, esse desfecho poderia ser evitado.",
      "(D) O tratamento medicamentoso deve ser feito por um ano."
    ],
    "correctAnswer": 3,
    "explanation": "Microcefalia, calcificações cerebrais difusas e coriorretinite bilateral com audição normal sugerem toxoplasmose congênita (no CMV as calcificações são periventriculares e a perda auditiva é comum).\n\nO tratamento da toxoplasmose congênita é feito durante todo o primeiro ano de vida, com sulfadiazina, pirimetamina e ácido folínico (e corticoide se houver coriorretinite ativa ou proteína liquórica elevada).",
    "commentary": "Tratamento depende da carga viral (A): a toxoplasmose é parasitose; a decisão depende do quadro clínico e sorológico, não de carga viral.\n\nLesões ósseas bilaterais em rádio e ulna (B): lesões ósseas metafisárias são da sífilis congênita, com predomínio em tíbia e fêmur.\n\nVacinação materna evitaria (C): não existe vacina para toxoplasmose; a prevenção é por medidas de higiene alimentar e rastreamento pré-natal.",
    "reference": "Ministério da Saúde — Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e Congênita (2018)",
    "tags": [
      "toxoplasmose congênita",
      "coriorretinite",
      "calcificações cerebrais",
      "neonatologia"
    ]
  },
  {
    "id": "cerman2025-81",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Carlos é um adolescente de 12 anos trazido por sua mãe à UBS para atualização de seu cartão vacinal. A mãe relata que ficou 3 anos sem procurar a unidade de saúde pois ficou confusa com tantas informações negativas acerca das vacinas durante a pandemia de COVID-19. Em relação à atualização da vacinação de Carlos:",
    "options": [
      "(A) Se o adolescente não recebeu nenhuma dose da vacina contra o HPV deve receber uma dose única.",
      "(B) Se o adolescente recebeu duas doses da tríplice viral, deve receber mais uma dose de reforço agora.",
      "(C) Caso o adolescente tenha recebido três doses da vacina contra hepatite B, nesse momento, deve receber um reforço.",
      "(D) Caso o adolescente ainda não tenha recebido nenhuma dose da vacina de febre amarela até os 5 anos de idade, deve receber duas doses com intervalo de um mês entre elas."
    ],
    "correctAnswer": 0,
    "explanation": "Desde 2024 o Ministério da Saúde adota a vacina HPV em dose única para meninas e meninos de 9 a 14 anos (e resgate até 19 anos), com base em evidências de proteção equivalente à do esquema de duas doses. Carlos, com 12 anos e sem dose prévia, recebe uma única dose.",
    "commentary": "Terceira dose de tríplice viral (B): duas doses completam o esquema; não há reforço.\n\nReforço de hepatite B (C): três doses completam o esquema, sem reforço de rotina.\n\nDuas doses de febre amarela (D): quem não foi vacinado até os 5 anos recebe dose única.",
    "reference": "Ministério da Saúde — Nota Técnica sobre a vacina HPV em dose única (2024) / Calendário Nacional de Vacinação do Adolescente",
    "tags": [
      "vacina HPV",
      "dose única",
      "imunização do adolescente",
      "calendário vacinal"
    ]
  },
  {
    "id": "cerman2025-82",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Luana, 24 anos, primigesta, iniciou o pré-natal na UBS Castanheiras. Após realização de sua última ultrassonografia obstétrica, recebeu o diagnóstico de malformação fetal. Desse modo, Luana foi encaminhada para consultas na unidade de pré-natal de alto risco, sendo orientada pela equipe de saúde que também deveria manter o acompanhamento com a equipe de saúde da UBS Castanheiras. Assinale a alternativa que corresponde ao atributo da Atenção Primária à Saúde aplicado ao caso acima:",
    "options": [
      "(A) Integralidade",
      "(B) Longitudinalidade",
      "(C) Competência cultural",
      "(D) Coordenação do cuidado"
    ],
    "correctAnswer": 3,
    "explanation": "Pelos atributos de Starfield, a coordenação do cuidado é a capacidade da Atenção Primária de garantir a continuidade da atenção quando a pessoa usa outros pontos da rede: a equipe da UBS segue responsável, integra informações e organiza os fluxos entre a atenção primária e a especializada.\n\nA gestante encaminhada ao pré-natal de alto risco e mantida em acompanhamento na UBS exemplifica esse atributo.",
    "commentary": "Integralidade (A): oferta de todos os serviços que a pessoa precisa (prevenção, cura, reabilitação), reconhecendo suas necessidades.\n\nLongitudinalidade (B): vínculo e acompanhamento da mesma pessoa pela mesma equipe ao longo do tempo; está presente, mas o foco do caso é articular a UBS com o serviço especializado.\n\nCompetência cultural (C): reconhecer e respeitar as características culturais da população.",
    "reference": "Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (UNESCO/MS, 2002)",
    "tags": [
      "atributos da APS",
      "coordenação do cuidado",
      "atenção primária",
      "pré-natal de alto risco"
    ]
  },
  {
    "id": "cerman2025-83",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "Joaquim, 6 meses, é trazido por sua mãe Jéssica em consulta de puericultura com a médica da equipe de estratégia de saúde da família do bairro. Após 6 meses de amamentação exclusiva de sucesso, Jéssica tem dúvidas se já deve iniciar a introdução alimentar do filho. Qual das alternativas abaixo contém um dos sinais de prontidão que deve ser pesquisado pela médica para que seja iniciada a introdução alimentar de Joaquim?",
    "options": [
      "(A) Firma a cabeça.",
      "(B) Senta com apoio.",
      "(C) Evita levar as mãos a boca.",
      "(D) Reflexo de protrusão da língua forte."
    ],
    "correctAnswer": 0,
    "explanation": "A introdução alimentar começa aos 6 meses, quando a criança mostra sinais de prontidão: sustenta a cabeça (firma o pescoço), senta sem apoio ou com pouco apoio, perdeu o reflexo de protrusão da língua e demonstra interesse pela comida (leva objetos à boca).",
    "commentary": "Senta com apoio (B): o sinal de prontidão é sentar sem apoio (ou com o mínimo de apoio).\n\nEvita levar as mãos à boca (C): levar as mãos e objetos à boca é sinal de interesse e prontidão.\n\nReflexo de protrusão forte (D): o reflexo precisa ter desaparecido; se presente, a criança empurra o alimento para fora.",
    "reference": "Ministério da Saúde — Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (2019)",
    "tags": [
      "alimentação complementar",
      "introdução alimentar",
      "sinais de prontidão",
      "puericultura"
    ]
  },
  {
    "id": "cerman2025-84",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Dr. Marcos atende em uma comunidade isolada do interior do Amazonas. Um de seus comunitários, Sr. Miqueias, 35 anos, etilista crônico, iniciou quadro de tosse, febre noturna, sudorese e perda de aproximadamente 15kg nos últimos 2 meses. Foi solicitada baciloscopia para tuberculose que resultara positivo. Considerando os contatos próximos de Sr. Miquéias, a informação de que em todo o país há indisponibilidade por tempo indeterminado da prova tuberculínica e que não está disponível o exame Interferon Gamma Release Assay (IGRA), assinale a seguir qual dos contatos do paciente-índice deverá receber tratamento prioritário para infecção latente da tuberculose:",
    "options": [
      "(A) Maria, 65 anos, mãe, diabética e hipertensa, com tosse há 15 dias, radiografia de tórax suspeita.",
      "(B) Sandreia, 15 anos, filha, sem comorbidades, assintomática, radiografia de tórax sem alterações.",
      "(C) Malaquias, 24 anos, pessoa vivendo com HIV/aids (PVHA), assintomático, radiografia de tórax sem alterações.",
      "(D) Sandra, 24 anos, esposa de Miquéias, gestante de 32 semanas, assintomática, não realizou radiografia de tórax."
    ],
    "correctAnswer": 2,
    "explanation": "Sem prova tuberculínica nem IGRA, o tratamento da infecção latente fica restrito a quem tem indicação independentemente desses testes. Pessoa vivendo com HIV que é contato de tuberculose pulmonar, assintomática e com radiografia normal (doença ativa afastada) deve tratar a infecção latente, independentemente de PT ou IGRA.",
    "commentary": "Maria com tosse e radiografia suspeita (A): é caso suspeito de tuberculose ativa; deve ser investigada (escarro, TRM-TB), não receber tratamento de infecção latente.\n\nSandreia, adolescente assintomática (B): contatos imunocompetentes precisam de PT ou IGRA positivos para tratar infecção latente.\n\nGestante sem radiografia (D): é preciso afastar doença ativa antes; e na gestação o tratamento da infecção latente costuma ser adiado para depois do parto, exceto em situações de alto risco (como HIV).",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019) / Nota informativa sobre indisponibilidade de PPD",
    "tags": [
      "tuberculose",
      "infecção latente",
      "HIV",
      "contatos"
    ]
  },
  {
    "id": "cerman2025-85",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Você estava lendo um estudo sobre uma nova estatina que prometia redução do risco de infarto agudo do miocárdio (IAM). Você identifica no estudo que houve 15 casos de IAM em 1000 pessoas que usaram a estatina, enquanto que no grupo onde a estatina não foi usada a quantidade de IAM foi de 20 em 1000 pessoas. Considerando as informações acima, podemos concluir que o Número Necessário para Tratar (NNT) deste estudo foi de:",
    "options": [
      "(A) 5",
      "(B) 25",
      "(C) 75",
      "(D) 200"
    ],
    "correctAnswer": 3,
    "explanation": "Risco no grupo controle = 20/1.000 = 2%. Risco no grupo estatina = 15/1.000 = 1,5%. Redução absoluta do risco = 2% − 1,5% = 0,5% (0,005).\n\nNNT = 1 ÷ RAR = 1 ÷ 0,005 = 200. É preciso tratar 200 pessoas para evitar um infarto.",
    "commentary": "5 (A): corresponde à diferença absoluta em número de casos (20 − 15), não ao NNT.\n\n25 (B): corresponde a 1 ÷ redução relativa do risco (0,25 × 100 = 25%), não ao NNT.\n\n75 (C): não corresponde a nenhum cálculo do estudo.",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. — Tratamento",
    "tags": [
      "número necessário para tratar",
      "redução absoluta do risco",
      "medicina baseada em evidências"
    ]
  },
  {
    "id": "cerman2025-86",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "A comunicação de notícias difíceis, como a de um diagnóstico ou óbito, é um elemento da relação médico-pessoa essencial na construção de planos terapêuticos e de seguimento. Qual das alternativas a seguir descreve uma técnica CORRETA a ser executada na comunicação de uma notícia difícil?",
    "options": [
      "(A) O médico deverá utilizar linguagem de alto conteúdo emocional (como gritos ou expressão facial de preocupação) na hora de comunicar uma notícia difícil.",
      "(B) Após comunicar uma notícia difícil, o médico deve utilizar frases empáticas ou utilizar o silêncio funcional para permitir que o paciente acomode as emoções.",
      "(C) A comunicação de uma má notícia deve ser realizada com termos técnicos do jargão médico.",
      "(D) A informação de óbito a familiares deverá ser feita utilizando-se de metáforas (Ex: “o paciente já não está mais entre nós)."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo protocolo SPIKES, depois de dar a notícia o médico deve acolher as emoções (Emotions): reconhecer o que o paciente sente, usar frases empáticas e permitir silêncios, dando tempo para que a pessoa assimile a informação antes de seguir para o plano (Strategy and Summary).",
    "commentary": "Linguagem de alto conteúdo emocional (A): o médico deve manter postura calma e acolhedora; gritos ou demonstrações exageradas aumentam a angústia.\n\nJargão técnico (C): a linguagem deve ser clara e acessível.\n\nMetáforas na comunicação do óbito (D): recomenda-se usar palavras claras (\"morreu\", \"faleceu\") para evitar ambiguidade.",
    "reference": "Baile WF et al. SPIKES — A Six-Step Protocol for Delivering Bad News (The Oncologist, 2000) / INCA — Comunicação de notícias difíceis (2010)",
    "tags": [
      "comunicação de más notícias",
      "protocolo SPIKES",
      "relação médico-paciente"
    ]
  },
  {
    "id": "cerman2025-87",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Você é médico de uma Unidade Básica de Saúde e, preocupado com o crescente número de pacientes com dependência ao álcool, você decide avaliar se o etilismo é mais comum entre os hipertensos e diabéticos comparados com aqueles que não são. Você revisou, retrospectivamente, todos os prontuários de pacientes hipertensos e diabéticos nos últimos cinco anos, comparando-os com a mesma quantidade de pacientes sem hipertensão ou diabetes no mesmo período. Qual das alternativas a seguir descreve CORRETAMENTE o tipo de estudo que você realizou?",
    "options": [
      "(A) Coorte.",
      "(B) Ecológico.",
      "(C) Caso-controle.",
      "(D) Ensaio clínico randomizado."
    ],
    "correctAnswer": 2,
    "explanation": "O pesquisador partiu de dois grupos definidos pela condição (hipertensos/diabéticos e não hipertensos/diabéticos) e olhou para trás, nos prontuários, a frequência de etilismo: estudo caso-controle (retrospectivo, observacional).\n\nVale observar que, a rigor, o etilismo é que seria a exposição e HAS/DM o desfecho; mesmo assim, a seleção por desfecho com investigação retrospectiva da exposição caracteriza caso-controle.",
    "commentary": "Coorte (A): parte da exposição e segue os grupos até o desfecho.\n\nEcológico (B): a unidade de análise é a população (dados agregados), não o indivíduo.\n\nEnsaio clínico randomizado (D): o pesquisador aloca a intervenção.",
    "reference": "Rouquayrol MZ. Epidemiologia & Saúde, 8ª ed. — Desenhos de estudo",
    "tags": [
      "estudo caso-controle",
      "desenhos de estudo",
      "epidemiologia"
    ]
  },
  {
    "id": "cerman2025-88",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Saúde Coletiva",
    "text": "Pedro tem 30 anos e teve diagnóstico de sífilis por teste rápido durante o período de pré-natal da esposa. Realizou três doses de penicilina benzatina, e apresentava um VDRL inicial de 1:128. Seis meses após o tratamento seu VDRL estava em 1:16, mantendo a titulação no VDRL do 9o. mês. Todavia, ao realizar o VDRL no 12o. mês pós-tratamento, o valor encontrado foi de 1:64. Diante da situação apresentada, qual a conduta CORRETA?",
    "options": [
      "(A) Repetir VDRL daqui a três meses.",
      "(B) Indicar novo tratamento com penicilina benzatina.",
      "(C) Considerar o valor de VDRL do 12o. mês como cicatriz sorológica.",
      "(D) Repetir teste rápido de sífilis e tratar somente se resultado positivo."
    ],
    "correctAnswer": 1,
    "explanation": "Após o tratamento, o VDRL deve cair. Aumento de pelo menos duas diluições (aqui de 1:16 para 1:64) em relação ao último título indica reinfecção ou reativação: é preciso retratar com penicilina benzatina (e investigar neurossífilis se houver sinais ou em pessoas com HIV), além de tratar e testar as parcerias.",
    "commentary": "Repetir o VDRL em 3 meses (A): a elevação de duas diluições já define falha terapêutica ou reinfecção.\n\nCicatriz sorológica (C): cicatriz é título baixo e estável (geralmente ≤ 1:8), não um título que sobe.\n\nRepetir teste rápido (D): o teste treponêmico permanece reagente por toda a vida e não diferencia infecção ativa de passada.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "sífilis",
      "VDRL",
      "reinfecção",
      "retratamento"
    ]
  },
  {
    "id": "cerman2025-89",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "O instrumento de abordagem familiar que representa graficamente todos os sistemas envolvidos e relacionados com a família e o meio onde vivem, facilitando a visualização de áreas que podem ser exploradas para melhorar o sistema social de apoio por toda a equipe de saúde se chama:",
    "options": [
      "(A) Ecomapa.",
      "(B) Genograma.",
      "(C) Apgar familiar.",
      "(D) Escala de Coelho-Savassi."
    ],
    "correctAnswer": 0,
    "explanation": "O ecomapa representa graficamente as relações da família com o meio: escola, trabalho, igreja, serviços de saúde, vizinhos, grupos sociais. Mostra os vínculos fortes, frágeis ou conflituosos e ajuda a identificar a rede de apoio.",
    "commentary": "Genograma (B): mapeia a estrutura familiar e as relações entre os membros ao longo das gerações.\n\nAPGAR familiar (C): questionário que avalia a percepção de funcionalidade da família.\n\nEscala de Coelho-Savassi (D): classifica o risco familiar a partir da ficha A do e-SUS, para priorizar visitas.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica: Abordagem familiar / Gusso G. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "ecomapa",
      "abordagem familiar",
      "ferramentas da APS"
    ]
  },
  {
    "id": "cerman2025-90",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "O sinal de Murphy é um dos sinais clínicos avaliados na investigação de colecistite aguda. A literatura mostra que o sinal de Murphy possui uma sensibilidade de 60% e uma especificidade de 85%. Considerando as informações acima, qual o valor da razão de verossimilhança (likelihood ratio) positiva do sinal?",
    "options": [
      "(A) 0,47",
      "(B) 0,7",
      "(C) 4",
      "(D) 25"
    ],
    "correctAnswer": 2,
    "explanation": "Razão de verossimilhança positiva = sensibilidade ÷ (1 − especificidade) = 0,60 ÷ (1 − 0,85) = 0,60 ÷ 0,15 = 4.\n\nUm sinal de Murphy positivo aumenta em 4 vezes a chance de colecistite.",
    "commentary": "0,47 (A): é a razão de verossimilhança negativa: (1 − 0,60) ÷ 0,85.\n\n0,7 (B): não corresponde a nenhum cálculo correto.\n\n25 (D): não corresponde a nenhum cálculo correto.",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. — Diagnóstico",
    "tags": [
      "razão de verossimilhança",
      "testes diagnósticos",
      "sinal de Murphy"
    ]
  },
  {
    "id": "cerman2025-91",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Maria Valentina, 29 anos, comparece à unidade para sua 1° consulta de pré-natal, atualmente está com 11 semanas e 3 dias. Durante a coleta da história, Maria Valentina informa que essa é sua 5° gestação, e que na sua última gestação há 1 ano e 9 meses atrás, foi bem tranquila, mas na hora do parto seu bebê nasceu muito grande, não sabe dizer ao certo com quantos quilos, mas sabe que foi mais de 4kg. Investigando a sua história familiar, afirma que sua mãe é diabética e hipertensa. Ao exame físico, observa-se: P: 103kg Alt: 1,62m IMC:39,2 kg/m² PA: 136x93mmHg Nesta primeira consulta, Maria Valentina apresentou alguns fatores que nos fazem ficar atentos ao desenvolvimento de diabetes gestacional. Identifique a alternativa que apresenta tais fatores de risco:",
    "options": [
      "(A) História familiar, multípara, Obesidade.",
      "(B) Obesidade, multípara, valor anormal da pressão.",
      "(C) Idade superior a 25 anos, macrossomia, história familiar.",
      "(D) Valor anormal da pressão, macrossomia, idade superior a 25 anos."
    ],
    "correctAnswer": 2,
    "explanation": "Fatores de risco para diabetes gestacional citados pelos manuais: idade materna mais avançada (antigos manuais do MS usavam > 25 anos; o consenso de 2017 usa ≥ 35), sobrepeso/obesidade, história familiar de diabetes em parentes de primeiro grau, macrossomia ou DMG em gestação anterior, hipertensão na gestação, SOP e baixa estatura.\n\nA alternativa C reúne três fatores presentes no caso, conforme o critério antigo de idade.",
    "commentary": "Multiparidade (A): não é fator de risco reconhecido para DMG, embora história familiar e obesidade sejam.\n\nMultiparidade e PA (B): a multiparidade não é fator; a paciente tem PA elevada, mas a combinação inclui um item incorreto.\n\nPA alterada, macrossomia e idade > 25 (D): a banca considerou a C; hipertensão é fator de risco em alguns manuais, mas a questão espera a combinação com história familiar.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 32: Atenção ao Pré-natal de Baixo Risco (2012) / OPAS/MS/FEBRASGO/SBD (2017)",
    "tags": [
      "diabetes gestacional",
      "fatores de risco",
      "pré-natal",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2025-92",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "O SOAP é um acrônimo que corresponde: S - Subjetivo, O - Objetivo, A - Avaliação e o P - Plano, e é uma ferramenta que se caracteriza por ser uma forma de registro da história clínica que permite visualizar o cuidado longitudinal. Dito isto, assinale a alternativa CORRETA sobre esta ferramenta:",
    "options": [
      "(A) No objetivo anota-se tudo que o paciente nos fala.",
      "(B) O subjetivo aborda a história do paciente e o motivo da consulta.",
      "(C) Na avaliação coloca-se as hipóteses diagnósticas pensadas durante a consulta.",
      "(D) No plano registra-se as observações profissionais sobre o paciente, como expressões faciais, aparência, como lida com afeto, entre outras percepções."
    ],
    "correctAnswer": 1,
    "explanation": "No SOAP, o S (subjetivo) traz o motivo da consulta e a história contada pela pessoa; o O (objetivo), o exame físico, os sinais vitais, os exames e as observações do profissional; o A (avaliação), os problemas e as hipóteses diagnósticas; o P (plano), as condutas.\n\nA banca considerou correta a B. A C também descreve corretamente a avaliação.",
    "commentary": "No objetivo, tudo que o paciente fala (A): o relato do paciente é o subjetivo.\n\nNa avaliação, as hipóteses diagnósticas (C): é a definição usual da avaliação; a banca preferiu a B, mas a C também está certa.\n\nNo plano, observações sobre o paciente (D): observações do profissional entram no objetivo; o plano traz exames, prescrições, orientações e encaminhamentos.",
    "reference": "Gusso G. Tratado de Medicina de Família e Comunidade, 2ª ed. — Registro clínico orientado por problemas",
    "tags": [
      "SOAP",
      "registro clínico",
      "atenção primária"
    ],
    "alert": "Gabarito oficial discutível: a avaliação (A) é onde se registram as hipóteses diagnósticas e os problemas identificados, o que torna a alternativa C também correta. Ela foi aceita aqui.",
    "alsoAccepted": [
      2
    ]
  },
  {
    "id": "cerman2025-93",
    "topography": "15",
    "topic": "Saúde da criança",
    "module": "Saúde Coletiva",
    "text": "Clarissa, 18 anos, acabou de receber alta da maternidade com Felipe, 2 dias, seu primeiro filho. Durante a gravidez, Clarissa fez 9 consultas de pré-natal com a equipe de saúde do seu bairro e durante as consultas a enfermeira reforçou para que ela avisasse quando o bebê nascesse e tivesse alta. Então a caminho de casa, Clarissa manda mensagem para Andressa, enfermeira que a acompanhava: - Bom dia, enfermeira, tudo bem? Estou saindo da maternidade com o Felipe e gostaria de saber como será feito o acompanhamento dele por aí pela UBS. Assinale a alternativa que corresponde às consultas mínimas que devem ser realizadas nos 2 primeiros anos de vida do Felipe.",
    "options": [
      "(A) As consultas devem ocorrer mensalmente até o 6 mês de vida, seguida de consultas semestrais até o segundo ano de vida.",
      "(B) A primeira avaliação deve ser realizada em até 7 dias após a alta da maternidade, seguida de consultas no 1°, 2°, 4°, 6°, 9°, 12°, 18° e 24° meses.",
      "(C) As consultas devem ser realizadas mensalmente até o primeiro ano de vida, e no segundo ano de vida as consultas devem ocorrer semestralmente.",
      "(D) A primeira avaliação deve ser realizada em até 7 dias após a alta da maternidade, seguido de consultas mensais no primeiro ano de vida e semestrais durante o segundo ano."
    ],
    "correctAnswer": 1,
    "explanation": "O calendário mínimo de consultas de puericultura do Ministério da Saúde para os dois primeiros anos: primeira consulta na primeira semana de vida (até o 7º dia, de preferência junto com a visita domiciliar), depois no 1º, 2º, 4º, 6º, 9º, 12º, 18º e 24º meses — 7 consultas no primeiro ano e 2 no segundo.",
    "commentary": "Mensais até 6 meses e depois semestrais (A): deixa de fora as consultas do 9º e 12º meses.\n\nMensais no primeiro ano (C): é prática comum (SBP), mas não é o calendário mínimo do MS; e falta a consulta da primeira semana.\n\nPrimeira semana + mensais + semestrais (D): o mínimo do MS não é mensal no primeiro ano.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 33: Saúde da Criança — Crescimento e Desenvolvimento (2012)",
    "tags": [
      "puericultura",
      "calendário de consultas",
      "saúde da criança",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2025-94",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "As atribuições dos profissionais das equipes que atuam na Atenção Básica seguem normativas específicas do Ministério da Saúde, porém existem atribuições comuns a todos os membros das equipes. De acordo com as atribuições comuns a todos os componentes da equipe, assinale a alternativa CORRETA:",
    "options": [
      "(A) Realizar procedimentos como administração de medicamentos, vacinas, coleta de material para exames, lavagem, preparação, esterilização de materiais, entre outras atividades.",
      "(B) Realizar e/ou supervisionar acolhimento com escuta qualificada e classificação de risco, de acordo com protocolos estabelecidos.",
      "(C) Realizar estratificação de risco e elaborar plano de cuidados para as pessoas que possuem condições crônicas no território.",
      "(D) Participar do processo de territorialização e mapeamento da área de atuação da equipe."
    ],
    "correctAnswer": 3,
    "explanation": "Pela PNAB 2017, participar do processo de territorialização e mapeamento da área de atuação da equipe — identificando grupos, famílias e indivíduos expostos a riscos e vulnerabilidades — é atribuição comum a todos os membros da equipe.",
    "commentary": "Administração de medicamentos, vacinas, esterilização (A): atribuições específicas de técnicos e auxiliares de enfermagem.\n\nSupervisionar acolhimento com classificação de risco (B): a classificação de risco é atribuição de profissionais de nível superior (enfermeiro, médico); todos acolhem, mas não classificam.\n\nEstratificação de risco e plano de cuidados para crônicos (C): atribuição específica de médicos e enfermeiros.",
    "reference": "Ministério da Saúde — Política Nacional de Atenção Básica (Portaria nº 2.436/2017)",
    "tags": [
      "PNAB",
      "atribuições comuns",
      "territorialização",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2025-95",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "O programa HIPERDIA é uma iniciativa do Sistema Único de Saúde (SUS) que visa o controle e a prevenção de doenças crônicas, especialmente diabetes e hipertensão. Qual das alternativas a seguir descreve CORRETAMENTE um dos principais objetivos do programa HIPERDIA na Atenção Primária à Saúde?",
    "options": [
      "(A) Realizar campanhas de vacinação para a população.",
      "(B) Focar no tratamento farmacológico das doenças crônicas.",
      "(C) Promover a internação hospitalar de pacientes com doenças crônicas.",
      "(D) Oferecer acompanhamento e monitoramento contínuo de pacientes com hipertensão e diabetes."
    ],
    "correctAnswer": 3,
    "explanation": "O HIPERDIA (Plano de Reorganização da Atenção à Hipertensão Arterial e ao Diabetes Mellitus, 2002) organizou o cadastro e o acompanhamento contínuo de hipertensos e diabéticos na atenção básica, com vinculação à unidade de saúde, fornecimento de medicamentos e monitoramento.",
    "commentary": "Campanhas de vacinação (A): não é objetivo do programa.\n\nFoco no tratamento farmacológico (B): o programa inclui medicamentos, mas o foco é o cuidado integral (mudança de estilo de vida, educação, acompanhamento).\n\nInternação hospitalar (C): o objetivo é justamente evitar internações por complicações.",
    "reference": "Ministério da Saúde — Plano de Reorganização da Atenção à Hipertensão Arterial e ao Diabetes Mellitus (HIPERDIA, 2002)",
    "tags": [
      "HIPERDIA",
      "hipertensão",
      "diabetes",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2025-96",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Saúde Coletiva",
    "text": "Cláudio, 62 anos, comparece à unidade para acompanhamento semestral e renovação da receita de Losartana 50mg 2x dia. Ao passar pela triagem, apresenta as seguintes medidas antropométricas: P:79kg Alt: 168cm IMC: 28Kg/m² PA: 146x97mmHg Dextro: 146 mg/dl em jejum. Mariana, médica que o acompanha a cerca de 4 anos, se preocupa com a glicemia, visto que durante esses anos nunca apresentou alteração nos exames, apesar de ter histórico familiar de diabetes. Qual alternativa corresponde ao plano mais adequado para Mariana seguir?",
    "options": [
      "(A) Conversar sobre diabetes e explicar a doença para Cláudio, realizar orientações sobre mudança de estilo de vida, solicitar novo exame de glicemia em jejum e hemoglobina glicada ou teste oral de tolerância à glicose, e retornar assim que os resultados ficarem prontos.",
      "(B) Realizar orientações sobre mudança de estilo de vida, solicitar exames glicemia em jejum, hemoglobina glicada ou teste oral de tolerância à glicose e iniciar metformina 500mg 1x dia, até o retorno em 3 meses, quando irá realizar exames de controle glicêmico.",
      "(C) Conversar sobre diabetes e explicar a doença para Cláudio, realizar orientações sobre mudança de estilo de vida, e agendar retorno em 6 meses para reavaliar com exames.",
      "(D) Conversar sobre diabetes e explicar a doença para Cláudio, iniciar metformina 500mg 1x dia, até o retorno em 3 meses, quando irá realizar exames de controle glicêmico."
    ],
    "correctAnswer": 0,
    "explanation": "Glicemia capilar de jejum de 146 mg/dL não confirma diabetes: o diagnóstico exige glicemia plasmática laboratorial e confirmação em segunda amostra (glicemia de jejum, HbA1c ou TTGO), a menos que haja sintomas clássicos com glicemia ao acaso ≥ 200.\n\nO adequado é explicar a suspeita, orientar mudança de estilo de vida e solicitar exames confirmatórios, com retorno assim que ficarem prontos.",
    "commentary": "Iniciar metformina antes da confirmação (B e D): não se inicia tratamento farmacológico sem diagnóstico confirmado.\n\nRetorno em 6 meses (C): o intervalo é longo demais diante de uma provável hiperglicemia; os exames devem ser solicitados já.\n\nMetformina sem exames (D): além de não confirmar o diagnóstico, adia a avaliação.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Diagnóstico / Ministério da Saúde — Caderno de Atenção Básica nº 36: Diabetes Mellitus",
    "tags": [
      "diabetes mellitus",
      "diagnóstico",
      "glicemia capilar",
      "atenção primária"
    ]
  },
  {
    "id": "cerman2025-97",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Uma cidade de médio porte no interior do Amazonas possui um quantitativo crescente de idosos com um aumento nos casos de diabetes entre seus habitantes. A maioria das UBS para acompanhamento e tratamento de diabetes está localizada no centro desta cidade, oferecendo consultas e exames em horários limitados... Já nos bairros da periferia, onde vivem muitos idosos de baixa renda, o acesso ao tratamento é limitado... O cenário gera uma desigualdade de acesso ao tratamento... Diante desse cenário, qual princípio do SUS o gestor de saúde deve considerar para garantir que idosos com diabetes, independentemente de onde vivem, tenham acesso igualitário a acompanhamento e tratamento?",
    "options": [
      "(A) Integralidade, para garantir que todos os serviços de saúde, como consultas e exames, estejam disponíveis para toda a população da cidade igualmente.",
      "(B) Eficiência, para que os recursos de saúde sejam aplicados de maneira a reduzir custos e otimizar o atendimento em todas as regiões da cidade.",
      "(C) Universalidade, para que todos os cidadãos, independentemente de onde moram, possam ter acesso aos mesmos serviços de saúde sem qualquer forma de discriminação.",
      "(D) Equidade, para que a distribuição dos serviços de saúde leve em conta as necessidades específicas da comunidade em relação aos casos de diabetes, proporcionando a essa população maior atenção e recursos de saúde."
    ],
    "correctAnswer": 3,
    "explanation": "Equidade é tratar de forma desigual os desiguais: distribuir recursos e ações conforme as necessidades, investindo mais onde as necessidades são maiores. Levar o cuidado aos idosos diabéticos da periferia, que têm menos acesso, é aplicação da equidade.",
    "commentary": "Integralidade (A): refere-se ao conjunto de ações (preventivas e curativas) em todos os níveis de complexidade; a alternativa ainda mistura com a ideia de igualdade.\n\nEficiência (B): não é princípio doutrinário do SUS.\n\nUniversalidade (C): garante o direito de acesso a todos, mas não corrige desigualdades de acesso entre grupos.",
    "reference": "Lei nº 8.080/1990 / Ministério da Saúde — ABC do SUS: Doutrinas e Princípios (1990)",
    "tags": [
      "princípios do SUS",
      "equidade",
      "acesso à saúde"
    ]
  },
  {
    "id": "cerman2025-98",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em qual modalidade de Atenção Domiciliar encontram-se as pessoas com problemas de saúde e dificuldade ou impossibilidade física de locomoção até uma UBS, com maior frequência de cuidado, recursos de saúde e acompanhamento contínuo e uso de equipamentos ou agregação de procedimentos de maior complexidade (ventilação mecânica, paracentese de repetição, nutrição parenteral, transfusão sanguínea)?",
    "options": [
      "(A) AD1.",
      "(B) AD2.",
      "(C) AD3.",
      "(D) Nenhuma modalidade, pois essas pessoas não necessitam de Atenção Domiciliar."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Portaria nº 825/2016 (Melhor em Casa), a atenção domiciliar tem três modalidades: AD1 (pacientes estáveis, com menor necessidade de cuidados, acompanhados pela atenção básica), AD2 (maior frequência de cuidado, acompanhamento contínuo pela EMAD/EMAP) e AD3 (AD2 com uso de equipamentos ou procedimentos de maior complexidade — ventilação mecânica, paracentese de repetição, nutrição parenteral, transfusão).",
    "commentary": "AD1 (A): cuidados de menor complexidade e frequência, pela equipe de atenção básica.\n\nAD2 (B): maior frequência de cuidado, mas sem os equipamentos e procedimentos complexos citados.\n\nNenhuma modalidade (D): essas pessoas são exatamente o público da AD3.",
    "reference": "Ministério da Saúde — Portaria nº 825/2016 (Atenção Domiciliar no SUS)",
    "tags": [
      "atenção domiciliar",
      "melhor em Casa",
      "modalidades AD"
    ]
  },
  {
    "id": "cerman2025-99",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "João, de 52 anos, foi ao posto de saúde para uma consulta de rotina e, após uma avaliação, o médico solicitou a realização de exames de sangue e uma colonoscopia para investigar possíveis sinais precoces de doenças. João não apresenta sintomas, mas, devido à sua idade e histórico familiar, ele tem um risco aumentado para algumas doenças crônicas. A estratégia utilizada pelo médico, ao solicitar esses exames, é um exemplo de qual tipo de prevenção?",
    "options": [
      "(A) Prevenção primária.",
      "(B) Prevenção secundária.",
      "(C) Prevenção terciária.",
      "(D) Prevenção quaternária."
    ],
    "correctAnswer": 1,
    "explanation": "Exames em pessoa assintomática para detectar doença em fase inicial (como colonoscopia para câncer colorretal) são rastreamento, que pertence à prevenção secundária de Leavell e Clark (diagnóstico precoce e tratamento oportuno).",
    "commentary": "Primária (A): age antes da doença (promoção e proteção específica, como vacinas).\n\nTerciária (C): reabilitação e prevenção de sequelas em doença estabelecida.\n\nQuaternária (D): evita intervenções excessivas e iatrogenia.",
    "reference": "Leavell HR, Clark EG. Preventive Medicine for the Doctor in his Community / Ministério da Saúde — Caderno de Atenção Primária nº 29: Rastreamento (2010)",
    "tags": [
      "níveis de prevenção",
      "prevenção secundária",
      "rastreamento"
    ]
  },
  {
    "id": "cerman2025-100",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O controle social é um dos princípios fundamentais do Sistema Único de Saúde (SUS) e permite que a sociedade participe diretamente da formulação, gestão e fiscalização das políticas públicas de saúde. Para garantir essa participação, o SUS conta com alguns espaços e mecanismos de controle social, como conselhos e conferências de saúde. Qual alternativa representa CORRETAMENTE um exemplo de controle social no SUS?",
    "options": [
      "(A) A participação de cidadãos em conselhos de saúde municipais, estaduais e nacional, onde podem discutir e influenciar as políticas públicas de saúde.",
      "(B) A criação de novas unidades de saúde pelo Ministério da Saúde, sem consulta à população.",
      "(C) A promoção de campanhas de vacinação pelo SUS para aumentar a cobertura vacinal da população.",
      "(D) A elaboração de pesquisas científicas para avaliar a eficácia de tratamentos oferecidos pelo SUS."
    ],
    "correctAnswer": 0,
    "explanation": "Controle social é a participação da comunidade na formulação, na gestão e na fiscalização das políticas de saúde. Pela Lei nº 8.142/1990, ele se dá nos Conselhos de Saúde (permanentes e deliberativos, com 50% de usuários) e nas Conferências de Saúde, em cada esfera de governo.",
    "commentary": "Novas unidades sem consulta à população (B): é o oposto de controle social.\n\nCampanhas de vacinação (C): é ação de saúde pública, não participação social.\n\nPesquisas científicas (D): produção de conhecimento, sem relação com controle social.",
    "reference": "Lei nº 8.142/1990",
    "tags": [
      "controle social",
      "conselhos de saúde",
      "lei 8.142",
      "SUS"
    ]
  }
];
