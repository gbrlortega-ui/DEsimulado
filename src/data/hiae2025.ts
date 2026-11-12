import { Question } from '../types';

// HIAE 2025 — residência médica do Hospital Israelita Albert Einstein (SP). 75 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const HIAE_2025_QUESTIONS: Question[] = [
  {
    "id": "hiae2025-1",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Paciente de 72 anos, hipertenso, diabético tipo II (DM2), obesidade grau I e doença cardiovascular aterosclerótica estabelecida. Está em acompanhamento ambulatorial de suas comorbidades. Atualmente sem queixas. Em uso de: losartana 50 mg 12/12 horas, metformina 500 mg 12/12 horas, dapagliflozina 10 mg 1x por dia, AAS 100 mg 1x por dia, rosuvastatina 20 mg 1x por dia. Exame físico sem alterações. Assinale a alternativa correta sobre o uso de agonista do receptor do GLP-1 nesse indivíduo.",
    "options": [
      "(A) O uso dos agonistas do receptor do GLP-1 nesse paciente pode estar associado a uma discreta redução da pressão arterial sistólica.",
      "(B) O principal benefício dos agonistas do receptor do GLP-1 nesse indivíduo com alto risco cardiovascular é o aumento do HDL colesterol.",
      "(C) O uso dos agonistas do receptor do GLP-1 frequentemente gera hipoglicemia quando combinado com as medicações em uso do paciente.",
      "(D) Devido ao efeito nefroprotetor dos agonistas do receptor do GLP-1, eles estão indicados para pacientes com taxa de filtração glomerular <15 mL/min/1,73 m²."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com DM2, obesidade e doença cardiovascular aterosclerótica estabelecida: os agonistas do receptor de GLP-1 com benefício comprovado (liraglutida, semaglutida, dulaglutida) reduzem eventos cardiovasculares maiores e são indicados nesse perfil. Entre seus efeitos estão perda de peso e discreta redução da pressão arterial sistólica (cerca de 2–4 mmHg).",
    "commentary": "Aumento do HDL (B): o benefício principal é a redução de eventos cardiovasculares; o efeito no HDL é pequeno.\n\nHipoglicemia frequente (C): o efeito incretínico é glicose-dependente; com metformina e iSGLT2 o risco de hipoglicemia é baixo (aumenta com sulfonilureia ou insulina).\n\nTFG < 15 (D): não há indicação na doença renal terminal; a nefroproteção foi demonstrada em pacientes com TFG ≥ 25 (estudo FLOW).",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes 2024 / ADA Standards of Care 2025",
    "tags": [
      "endocrinologia",
      "diabetes tipo 2",
      "agonistas do GLP-1",
      "risco cardiovascular"
    ],
    "tip": "DM2 com doença aterosclerótica: aGLP-1 ou iSGLT2 com benefício comprovado, independentemente da HbA1c."
  },
  {
    "id": "hiae2025-2",
    "topography": "4.1",
    "topic": "Pielonefrite",
    "module": "Clínica Médica",
    "text": "Uma mulher de 64 anos, pesando 60 kg, sem comorbidades prévias, é admitida à sala de emergência com febre de 38,7 °C, dor lombar direita e disúria há 3 dias. Na entrada, apresentava FC = 120 bpm, FR = 28 irpm, PA=74x40 mmHg. Após coleta de exames, introdução de ceftriaxona e administração de 2 litros de Ringer Lactato, a paciente segue com PA de 78 x 44 mmHg. Exames laboratoriais iniciais revelam leucocitose de 18.000/μL (VR: 4.000 11.000/μL) e creatinina de 2,6 mg/dL (VR: 0,6-1,2 mg/dL). Assinale a alternativa que apresenta uma das condutas apropriadas para esse momento.",
    "options": [
      "(A) Utilizar hidrocortisona para tratamento adjuvante do choque séptico.",
      "(B) Infundir mais 1 litro de Ringer Lactato e solicitar prioridade de transferência à UTI para início de drogas vasoativas.",
      "(C) Realizar ultrassonografia à beira-leito para avaliar obstrução de vias urinárias.",
      "(D) Ampliar a terapia antimicrobiana para meropenem."
    ],
    "correctAnswer": 2,
    "explanation": "Pielonefrite com choque séptico refratário à reposição inicial. Além de antibiótico e vasopressor, é essencial controlar o foco: a pielonefrite obstrutiva (cálculo, por exemplo) exige desobstrução urgente (cateter duplo J ou nefrostomia). A ultrassonografia à beira-leito é rápida e identifica hidronefrose, por isso deve ser feita já.",
    "commentary": "Hidrocortisona (A): está indicada se houver necessidade persistente de vasopressor em dose moderada/alta; não é a medida inicial.\n\nMais 1 L e esperar a UTI para iniciar vasopressor (B): após 30 mL/kg sem resposta, o vasopressor (noradrenalina) deve começar já, inclusive em acesso periférico, sem esperar a UTI.\n\nMeropenem (D): sem fator de risco para germe multirresistente, não há motivo para ampliar no início.",
    "reference": "Surviving Sepsis Campaign 2021 / ILAS — Protocolos de sepse",
    "tags": [
      "nefrologia",
      "pielonefrite",
      "choque séptico",
      "controle do foco"
    ],
    "tip": "Sepse urinária grave: procure obstrução — USG à beira-leito."
  },
  {
    "id": "hiae2025-3",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Um homem de 26 anos com antecedente de asma procurou o pronto atendimento há duas semanas com queixa de palpitações. Realizado o diagnóstico de fibrilação atrial, com prescrição de metoprolol oral e solicitação de ecocardiograma ambulatorial. Após o uso da medicação, o paciente apresentou sibilância e dispneia, levando-o a suspender o metoprolol por conta própria. Realizado ecocardiograma transtorácico, sem alterações. Hoje, o paciente retorna ao PA com relato de palpitações taquicárdicas nos últimos 3 dias. Sem dor torácica, dispneia ou alterações da consciência no período. Sinais vitais: FC = 136 bpm, FR = 16 irpm, PA = 130 x 80 mmHg, T = 36,5 °C. Ausculta cardíaca com bulhas arrítmicas normofonéticas, sem sopros. Ausculta pulmonar com murmúrio vesicular presente bilateralmente, sem ruídos adventícios. ECG com ritmo de fibrilação atrial com frequência ventricular de 142/min.\n\nAssinale a alternativa que apresenta a melhor opção terapêutica a ser utilizada no momento.",
    "options": [
      "(A) Esmolol.",
      "(B) Cardioversão elétrica sincronizada.",
      "(C) Propafenona.",
      "(D) Verapamil."
    ],
    "correctAnswer": 3,
    "explanation": "Fibrilação atrial com alta resposta ventricular em paciente estável, jovem, com coração estruturalmente normal e asma (broncoespasmo com metoprolol). Para controle da frequência, sem poder usar betabloqueador, a escolha é bloqueador de canal de cálcio não di-hidropiridínico: verapamil (ou diltiazem).",
    "commentary": "Esmolol (A): é betabloqueador; mesmo sendo cardiosseletivo e de curta duração, o paciente já teve broncoespasmo.\n\nCardioversão elétrica (B): reservada à instabilidade; para cardioversão eletiva de FA com mais de 48 horas seria necessário anticoagular ou fazer eco transesofágico.\n\nPropafenona (C): cardioversão química com FA de duração > 48 h exige anticoagulação prévia.",
    "reference": "Diretriz Brasileira de Fibrilação Atrial (SBC) / ESC 2024",
    "tags": [
      "cardiologia",
      "fibrilação atrial",
      "controle de frequência",
      "asma"
    ],
    "tip": "FA estável com asma: verapamil ou diltiazem no lugar do betabloqueador."
  },
  {
    "id": "hiae2025-4",
    "topography": "3.2",
    "topic": "Ascite",
    "module": "Clínica Médica",
    "text": "Um homem de 58 anos procura o ambulatório clínico com queixa de aumento progressivo do volume abdominal nas últimas quatro semanas. Ele relata distensão abdominal sem dor ou desconforto respiratório. Tem antecedente de consumo de 0,5 L de destilado diariamente nos últimos 35 anos. Procurou Unidade de Pronto Atendimento há duas semanas com mesma queixa, tendo recebido prescrição de furosemida 40 mg/dia após realização de ultrassonografia, com pouca melhora. Ao exame físico, apresenta FC 82 bpm, FR 16 irpm, PA 112 x 70 mmHg, T 36,5 °C. Ictérico ++/4; abdome globoso, com sinal do Piparote positivo, macicez móvel e circulação colateral abdominal. Exames laboratoriais mostram bilirrubina total de 3,8 mg/dL (VR: 0,1-1,2 mg/dL), albumina de 2,5 g/dL (VR: 3,5-5,0 g/dL) e TP-INR de 1,8 (VR: 0,8-1,2). A ultrassonografia abdominal realizada na UPA mostra fígado reduzido de tamanho, com bordas irregulares e sinais de hipertensão portal, além de ascite descrita como moderada. Qual é o próximo passo mais adequado na condução do caso?",
    "options": [
      "(A) Aumentar a dose de furosemida para 80 mg/dia.",
      "(B) Iniciar espironolactona 100 mg/dia em adição à furosemida.",
      "(C) Realizar paracentese diagnóstica.",
      "(D) Solicitar infusão de albumina intravenosa."
    ],
    "correctAnswer": 2,
    "explanation": "Todo cirrótico com ascite nova (ou internado, ou com piora clínica) deve fazer paracentese diagnóstica: contagem de células (PBE se neutrófilos ≥ 250/mm³), albumina para o gradiente soro-ascite (≥ 1,1 indica hipertensão portal), proteínas totais e cultura. Só depois se ajustam os diuréticos.",
    "commentary": "Aumentar furosemida (A) ou associar espironolactona (B): o diurético de base da ascite é a espironolactona, mas antes de ajustar é preciso fazer a paracentese diagnóstica.\n\nAlbumina IV (D): é usada após paracentese de grande volume, na PBE e na síndrome hepatorrenal.",
    "reference": "Sociedade Brasileira de Hepatologia / EASL — Descompensação da cirrose (2018)",
    "tags": [
      "hepatologia",
      "cirrose",
      "ascite",
      "paracentese diagnóstica"
    ],
    "tip": "Ascite nova: paracentese diagnóstica sempre."
  },
  {
    "id": "hiae2025-5",
    "topography": "15",
    "topic": "Imunização",
    "module": "Clínica Médica",
    "text": "Um paciente do sexo masculino de 37 anos de idade, portador de doença de Crohn, atualmente em uso de adalimumabe 40 mg em infusões quinzenais com bom controle de atividade de doença, perdeu seu cartão de vacinação e comparece ao centro de referência de imunobiológicos para atualização vacinal. Esse paciente pode ser vacinado com todas alternativas a seguir, EXCETO:",
    "options": [
      "(A) meningocócica C em dose única.",
      "(B) HPV tetravalente em três doses.",
      "(C) hepatite B em três doses e com volume dobrado.",
      "(D) dengue tetravalente em duas doses."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente em uso de anti-TNF (adalimumabe) está imunossuprimido. Vacinas de vírus vivos atenuados são contraindicadas, e a vacina da dengue (tetravalente, de vírus vivo atenuado) se enquadra nisso. Meningocócica, HPV e hepatite B (com dose dobrada para imunossuprimidos) são inativadas e podem ser aplicadas.",
    "commentary": "Meningocócica (A), HPV (B) e hepatite B (C): são inativadas/recombinantes e indicadas para imunossuprimidos.",
    "reference": "Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE) — Ministério da Saúde, 2023",
    "tags": [
      "imunização",
      "imunossupressão",
      "vacinas de vírus vivo",
      "doença de Crohn"
    ],
    "tip": "Imunossuprimido: nada de vacina de vírus vivo (dengue, febre amarela, tríplice viral, varicela)."
  },
  {
    "id": "hiae2025-6",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Paciente de 56 anos, hipertenso e diabético, é admitido no hospital com queixa de dor torácica retroesternal, em aperto, com irradiação para o braço esquerdo e o pescoço, iniciada\n\nhá uma hora. Sinais vitais: pressão arterial: 160 x 90 mmHg; frequência cardíaca: 90 bpm; saturação O₂: 96%; temperatura: 36,5 °C. Ausculta cardíaca e respiratória sem alterações. O eletrocardiograma realizado na admissão revelou supradesnivelamento do segmento ST em V2-V4, e a troponina está elevada. O paciente recebeu tratamento medicamentoso inicial recomendado. O cateterismo revelou lesão única de 99% no terço médio da artéria descendente anterior (DA). A conduta correta a ser realizada nesse momento consiste em",
    "options": [
      "(A) realizar tratamento clínico otimizado com IECA, betabloqueadores e estatinas, sem necessidade de revascularização.",
      "(B) indicar revascularização cirúrgica imediata devido à localização e à importância da lesão coronariana.",
      "(C) observar clinicamente e definir conduta após 24 horas da admissão, com base na curva de troponina e nas alterações do ecocardiograma.",
      "(D) realizar angioplastia coronariana com implante de stent em artéria descendente anterior."
    ],
    "correctAnswer": 3,
    "explanation": "IAM com supradesnivelamento de ST anterior há uma hora, com lesão única de 99% na descendente anterior no cateterismo. O tratamento de escolha é a angioplastia primária com implante de stent na artéria culpada, idealmente em até 90–120 minutos do primeiro contato.",
    "commentary": "Tratamento clínico (A) e observar 24 h (C): no IAMCSST precoce, reperfusão imediata reduz mortalidade.\n\nRevascularização cirúrgica imediata (B): fica para anatomia complexa (tronco, multiarterial com diabetes) ou complicações mecânicas; lesão única é angioplastia.",
    "reference": "Diretriz da SBC sobre IAM com supradesnivelamento de ST / ESC 2023 — Síndromes coronarianas agudas",
    "tags": [
      "cardiologia",
      "infarto com supra de ST",
      "angioplastia primária"
    ],
    "tip": "IAMCSST: angioplastia primária da artéria culpada."
  },
  {
    "id": "hiae2025-7",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Paciente, 59 anos, hipertenso, sedentário, obeso, em uso de enalapril 20 mg 12/12 horas, anlodipino 10 mg/dia, clortalidona 25 mg/dia, espironolactona 25 mg/dia e carvedilol 25 mg 12/12 horas. Apesar de ser aderente às medicações em uso, mantém pressão não controlada, com aferições acima de 140/90 mmHg. Com base no caso clínico, assinale a alternativa correta em relação ao manejo ambulatorial desse paciente.",
    "options": [
      "(A) Substituir a clortalidona por hidroclorotiazida, pois é o diurético de escolha em hipertensão resistente.",
      "(B) Associar diurético de alça, como a furosemida e encaminhar ao cardiologista.",
      "(C) Suspender a espironolactona pela falha terapêutica e associar hidralazina 50 mg 8/8 horas.",
      "(D) Solicitar exames para investigação de causas secundárias de hipertensão e associar clonidina."
    ],
    "correctAnswer": 3,
    "explanation": "Pressão não controlada com 5 classes em dose plena, incluindo diurético tiazídico-like e espironolactona, com boa adesão: hipertensão resistente (refratária). Deve-se investigar causas secundárias (hiperaldosteronismo, apneia do sono, doença renal, estenose de artéria renal) e associar outro fármaco, como clonidina (ou hidralazina, já que o betabloqueador está em uso).",
    "commentary": "Trocar por hidroclorotiazida (A): a clortalidona é mais potente e de ação mais longa; é o tiazídico preferido.\n\nDiurético de alça (B): só na doença renal crônica avançada (TFG < 30) ou na congestão.\n\nSuspender espironolactona (C): ela é o quarto fármaco mais eficaz na hipertensão resistente (estudo PATHWAY-2).",
    "reference": "Diretriz Brasileira de Hipertensão Arterial (2020/2025)",
    "tags": [
      "cardiologia",
      "hipertensão resistente",
      "hipertensão secundária",
      "clonidina"
    ],
    "tip": "Hipertensão resistente: confirme adesão e MAPA, investigue causa secundária e use espironolactona."
  },
  {
    "id": "hiae2025-8",
    "topography": "2.1",
    "topic": "Asma",
    "module": "Clínica Médica",
    "text": "Paciente feminina de 37 anos vem em consulta de retorno. Ela havia procurado atendimento inicialmente por queixa de tosse seca persistente e dispneia progressiva até para andar no plano, sendo que em alguns dias tinha até que parar para andar dois quarteirões. Referia que os sintomas pioravam com mudança de tempo, contato com poeiras e pelos de animais e que algumas noites percebia um chiado no peito. Já tinha ido algumas vezes a pronto atendimentos nos últimos meses por conta de falta de ar. Na ocasião da primeira consulta, foi feita a hipótese de asma, solicitada espirometria e iniciado tratamento com formoterol-budesonida 12/400 mcg 12/12h. A paciente retorna hoje referindo melhora importante dos sintomas, mantendo sintomas noturnos e necessidade de medicação de resgate pelo menos 1 a 2 vezes por semana. Seu score no Asthma Control Test (ACT) é de 18 de 25. Não teve mais buscas ao pronto-socorro. Está utilizando regularmente a medicação inalatória prescrita, refere coriza e prurido nasal persistentes e importantes, pirose e regurgitação a depender da alimentação. Tirou tapetes e cortinas de casa, mas mantém\n\nexposição ao cachorro da vizinha, que entra na sua casa regularmente. Nega história de asma na infância. Ao exame físico, paciente em bom estado geral, corada, hidratada, IMC 33 kg/m². Exame cardiovascular sem alterações, ausculta pulmonar com murmúrios vesiculares presentes bilateralmente e tempo expiratório aumentado, com raros sibilos expiratórios. SpO₂ em ar ambiente de 96%, frequência respiratória de 16 ipm. Traz espirometria mostrando distúrbio ventilatório obstrutivo leve com resposta ao broncodilatador, hemograma com eosinófilos de 350/mcL (4%) e IgE total de 200 UI/mL. Assinale a alternativa que corresponde à melhor classificação de gravidade e conduta nesse momento.",
    "options": [
      "(A) Trata-se de asma de difícil controle, sendo sugerido aumento da frequência de formoterol-budesonida para 3x/dia, checar técnica de uso da medicação inalatória, tratar rinite e refluxo e afastar da exposição ao cão.",
      "(B) Trata-se de asma leve controlada, dado que a espirometria mostrou apenas um distúrbio obstrutivo leve, e a paciente referiu melhora importante dos sintomas. Sugere-se manter as medicações atuais e tratar a rinite.",
      "(C) Trata-se de asma moderada, pois a paciente está em STEP 4 de tratamento segundo o GINA 2024. Sugere-se adicionar um anticolinérgico de longa ação ou um antileucotrieno para melhora do controle.",
      "(D) Trata-se de asma grave não controlada, sendo indicado agora o uso de imunobiológico devido ao fenótipo alérgico-eosinofílico. A escolha entre omalizumabe e mepolizumab dependerá da disponibilidade da medicação."
    ],
    "correctAnswer": 0,
    "explanation": "Asma que segue não controlada (sintomas noturnos, resgate semanal, ACT 18) apesar de budesonida-formoterol em dose média/alta (step 4) com boa adesão: asma de difícil controle. Antes de escalar, revisar técnica inalatória e adesão, tratar comorbidades (rinite, refluxo, obesidade) e afastar exposições (o cão). Também se pode otimizar o esquema, aumentando o número de inalações de manutenção (ou usando MART).",
    "commentary": "Asma leve controlada (B): sintomas noturnos e uso de resgate indicam falta de controle; a gravidade se define pelo tratamento necessário, não pela espirometria.\n\nAsma moderada com LAMA ou antileucotrieno (C): antes de acrescentar fármacos, é preciso corrigir os fatores modificáveis.\n\nAsma grave e imunobiológico (D): só se mantiver descontrole após otimizar comorbidades, técnica e step 4–5.",
    "reference": "GINA 2024 / SBPT — Recomendações para o manejo da asma (2020)",
    "tags": [
      "pneumologia",
      "asma",
      "asma de difícil controle",
      "comorbidades"
    ],
    "tip": "Antes de chamar de asma grave: técnica, adesão, comorbidades e exposição."
  },
  {
    "id": "hiae2025-9",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Paciente feminina de 68 anos é trazida ao pronto atendimento por queixa de tosse produtiva há 5 dias, sendo que hoje passou a apresentar dispneia para caminhar no plano e dor ventilatório-dependente em hemitórax direito. Nega febre, internações ou uso de antibióticos recentes. Nega sintomas gripais antes do início do quadro atual, mas diz que vem apresentando dificuldade para engolir alguns alimentos e tosse com frequência durante a alimentação. Paciente é previamente hipertensa e diabética, com controle adequado das comorbidades em uso de losartana 50 mg 12/12h, anlodipino 5 mg 12/12h, metformina 850 mg 3x/dia e dapagliflozina 10 mg/dia. Ao exame físico, paciente encontra-se em regular estado geral, corada, hidratada, anictérica, afebril, lúcida e orientada, cavidade oral em bom estado. Sinais vitais: frequência cardíaca de 102 bpm, frequência respiratória de 25 ipm, PA = 120 x 70 mmHg, SpO₂ = 91% em ar ambiente, glicemia capilar de 95 mg/L. Ausculta cardíaca e exame abdominal sem alterações, ausculta pulmonar com estertores crepitantes em campo inferior de hemitórax direito. O médico solicita uma radiografia de tórax que mostra consolidação em base do pulmão direito, com alguns infiltrados algodonosos também em campo inferior esquerdo. Exames de sangue mostram: Hb = 12,1 g/dL, leucócitos 15.000 (75% neutrófilos, 5% bastões), plaquetas 160.000/mm³, Ur = 60 mg/dL, Cr = 1,1 mg/dL, Na = 135 mEq/L, K = 4,5 mEq/L, Proteína C-reativa = 50 mg/dL, gasometria arterial com pH = 7,46 pO2 = 58 mmHg, pCO2= 34 mmHg, SpO₂= 91%. Com relação ao caso descrito, assinale a alternativa correta.",
    "options": [
      "(A) Paciente apresenta pneumonia comunitária sem sinais de gravidade, podendo ser tratada ambulatorialmente com amoxacilina-clavulanato e azitromicina. Nenhum exame adicional é necessário.",
      "(B) Paciente com provável pneumonia aspirativa, sendo recomendado tratamento com ceftriaxone e clindamicina em regime de enfermaria, além de oxigenoterapia suplementar por cateter nasal. Solicitar hemoculturas e cultura de escarro.",
      "(C) Paciente com pneumonia comunitária grave com necessidade de internação em UTI. Iniciar antibioticoterapia empírica com ceftriaxone e azitromicina, cateter de alto fluxo e hidrocortisona, colher hemoculturas e pesquisa de antígeno urinário para Legionella.",
      "(D) Paciente com pneumonia adquirida na comunidade, de provável origem aspirativa. Iniciar tratamento empírico com ceftriaxone e azitromicina, cateter nasal de oxigênio, colher hemocultura e cultura de bactérias no escarro, painel de patógenos respiratórios, antígeno urinário para Streptococcus e Legionella."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com disfagia e tosse ao comer (risco de aspiração) e pneumonia comunitária em base direita, com hipoxemia (SpO₂ 91%, PaO₂ 58), taquipneia e ureia elevada (CURB-65 = 2): pneumonia de provável origem aspirativa com indicação de internação em enfermaria. Na pneumonia aspirativa comunitária sem abscesso ou empiema, não se recomenda cobertura rotineira para anaeróbios: o esquema betalactâmico (ceftriaxona) + macrolídeo é adequado, com oxigênio, hemoculturas, cultura de escarro, painel viral e antígenos urinários de pneumococo e Legionella.",
    "commentary": "Ambulatorial sem exames (A): há hipoxemia e CURB-65 de 2, com indicação de internação.\n\nCeftriaxona com clindamicina (B): a cobertura para anaeróbios não é mais rotina (ATS/IDSA 2019).\n\nUTI, alto fluxo e hidrocortisona (C): não há critérios de pneumonia grave (sem choque, sem insuficiência respiratória importante).",
    "reference": "ATS/IDSA 2019 — Pneumonia adquirida na comunidade / SBPT 2018",
    "tags": [
      "pneumologia",
      "pneumonia comunitária",
      "pneumonia aspirativa",
      "CURB-65"
    ],
    "tip": "Pneumonia aspirativa comunitária sem abscesso: não precisa cobrir anaeróbio de rotina."
  },
  {
    "id": "hiae2025-10",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Paciente masculino de 52 anos, portador de DPOC em tratamento há 2 anos com vilanterol-umeclidínio, vinha mantendo dispneia habitual mMRC 1. Fez uso de amoxacilina-clavulanato para uma exacerbação da doença há aproximadamente 8 meses, mas sem necessidade de internação hospitalar. Paciente também é hipertenso em uso de losartana, dislipidêmico em uso de rosuvastatina, diabético em uso de empaglifozina + linagliptina. Paciente procura o pronto atendimento por queixa de piora da dispneia há 1 dia, atualmente mMRC 3. Costuma apresentar habitualmente expectoração hialina em pequena quantidade e nega aumento do volume do catarro agora, mas refere que hoje expectorou secreção clara com alguns laivos de sangue. Nega dor torácica. Ao exame físico, paciente encontra-se em regular estado geral, corado, hidratado, anictérico, cianótico, afebril, lúcido e orientado. Sinais vitais: frequência cardíaca de 115 bpm, frequência respiratória de 26 ipm, PA = 110 x 70 mmHg, SpO₂ = 86% em ar ambiente, glicemia capilar de 102 g/dL. Bulhas rítmicas hipofonéticas em 2 tempos sem sopros, estase jugular 2+/4. Murmúrio vesicular presente, mas reduzido em ápices, discretos estertores crepitantes em bases. Abdome globoso, ruídos hidroaéreos presentes, fígado palpável a 2 cm do rebordo costal direito, espaço de Traube livre. Presença de edema em membros inferiores, pulsos presentes e simétricos. Quanto ao quadro clínico descrito, todas as medidas a seguir devem ser adotadas nesse momento, EXCETO:",
    "options": [
      "(A) solicitar exame de imagem do tórax.",
      "(B) solicitar D-dímero.",
      "(C) iniciar oxigenoterapia suplementar.",
      "(D) iniciar corticoterapia sistêmica."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com DPOC e piora súbita da dispneia sem aumento do escarro, com hemoptise discreta, taquicardia, hipoxemia grave e sinais de cor pulmonale (turgência jugular, hepatomegalia, edema). O quadro sugere tromboembolismo pulmonar ou insuficiência cardíaca, e não uma exacerbação infecciosa típica. Devem-se pedir imagem do tórax e D-dímero e dar oxigênio; o corticoide sistêmico não está indicado sem critérios de exacerbação de DPOC.",
    "commentary": "Imagem de tórax (A), D-dímero (B) e oxigênio (C): são medidas indicadas para investigar TEP, pneumonia ou congestão e corrigir a hipoxemia.\n\nObservação: com probabilidade clínica alta de TEP, o D-dímero tem pouca utilidade e a angiotomografia é o exame indicado — ponto discutível do enunciado.",
    "reference": "GOLD 2024 / ESC 2019 — Tromboembolismo pulmonar",
    "tags": [
      "pneumologia",
      "DPOC",
      "tromboembolismo pulmonar",
      "diagnóstico diferencial"
    ],
    "tip": "Nem toda piora de DPOC é exacerbação: pense em TEP, IC e pneumotórax."
  },
  {
    "id": "hiae2025-11",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Um paciente de 58 anos com história de hipertensão e cirurgia ortopédica recente apresenta-se ao pronto-socorro com dispneia súbita, dor torácica e sinais de choque. O exame físico revela taquicardia, taquipneia e oximetria de pulso de 92% em ar ambiente. A tomografia computadorizada de tórax confirma tromboembolismo pulmonar (TEP) com evidência de hipertensão pulmonar significativa. O paciente está com pressão arterial de 85/50 mmHg e níveis de lactato elevados. Qual é a conduta inicial mais apropriada para o manejo desse paciente?",
    "options": [
      "(A) Iniciar anticoagulação com heparina de baixo peso molecular e monitorar a resposta clínica.",
      "(B) Iniciar trombólise intravenosa com alteplase (rtPA) para tratamento do TEP maciço e estabilização hemodinâmica.",
      "(C) Realizar intervenção cirúrgica para embolectomia pulmonar devido ao choque.",
      "(D) Iniciar terapia com vasopressores para tratamento do choque e monitorar a função cardíaca."
    ],
    "correctAnswer": 1,
    "explanation": "TEP confirmado com choque (PA 85/50, lactato elevado): TEP de alto risco (maciço). Sem contraindicação, o tratamento é trombólise sistêmica com alteplase, junto com heparina não fracionada e suporte hemodinâmico. A cirurgia ortopédica recente é contraindicação relativa, que deve ser pesada diante do risco de morte.",
    "commentary": "HBPM e observar (A): é o tratamento do TEP sem instabilidade.\n\nEmbolectomia cirúrgica (C): reservada para contraindicação absoluta ou falha da trombólise.\n\nSó vasopressor (D): é suporte, mas não trata a obstrução.",
    "reference": "ESC 2019 — Tromboembolismo pulmonar / Diretriz da SBC",
    "tags": [
      "cardiologia",
      "tromboembolismo pulmonar",
      "trombólise",
      "choque obstrutivo"
    ],
    "tip": "TEP com hipotensão = trombólise (se não houver contraindicação absoluta)."
  },
  {
    "id": "hiae2025-12",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Um paciente de 68 anos com histórico de hipertensão e diabetes tipo 2 é admitido com um acidente vascular cerebral (AVC) isquêmico agudo. Ele recebeu trombólise intravenosa (rtPA) nas primeiras 4 horas após o início dos sintomas. No segundo dia de internação, o paciente apresenta deterioração do nível de consciência, aumento súbito da hemiparesia e sinais de hipertensão intracraniana. Qual a provável causa dessa evolução?",
    "options": [
      "(A) Progressão do AVC isquêmico devido à falha da trombólise.",
      "(B) Efeito adverso da trombólise, levando à hemorragia subaracnoidea.",
      "(C) Piora do déficit devido à extensão da área de penumbra.",
      "(D) Transformação hemorrágica no território do AVC isquêmico."
    ],
    "correctAnswer": 3,
    "explanation": "Piora neurológica com rebaixamento e sinais de hipertensão intracraniana nas primeiras 24–36 horas após trombólise: a principal causa é a transformação hemorrágica sintomática do infarto (risco de cerca de 6% com alteplase). A conduta é tomografia de crânio urgente, suspensão de antitrombóticos e reversão (crioprecipitado, ácido tranexâmico).",
    "commentary": "Falha da trombólise (A) e extensão da penumbra (C): podem piorar o déficit, mas a deterioração súbita com hipertensão intracraniana após trombolítico é típica de sangramento.\n\nHemorragia subaracnoidea (B): não é a complicação típica; o sangramento ocorre no parênquima infartado.",
    "reference": "AHA/ASA 2019 — AVC isquêmico agudo / Diretrizes brasileiras de AVC",
    "tags": [
      "neurologia",
      "AVC isquêmico",
      "trombólise",
      "transformação hemorrágica"
    ],
    "tip": "Piora após trombólise: TC já e suspende tudo que anticoagula."
  },
  {
    "id": "hiae2025-13",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Um paciente de 65 anos, hipertenso e com histórico de infarto agudo do miocárdio há 3 anos, é admitido no pronto-socorro com palpitações, tontura e sudorese há cerca de 2 horas. Ao exame físico, encontra-se com pressão arterial de 90/60 mmHg, frequência cardíaca de 160 bpm, pulsos finos e irregulares, e frequência respiratória de 20 irpm. A ausculta cardíaca revela ritmo irregular sem sopros. Um eletrocardiograma (ECG) é realizado e revela uma taquicardia com QRS estreito e ondas P não visualizadas claramente, variabilidade na amplitude dos intervalos RR, sem onda F típica em \"dente de serra\". Diante desse quadro, qual a conduta mais adequada?",
    "options": [
      "(A) Administração de adenosina intravenosa.",
      "(B) Cardioversão elétrica sincronizada.",
      "(C) Administração de amiodarona intravenosa.",
      "(D) Administração de verapamil intravenoso."
    ],
    "correctAnswer": 1,
    "explanation": "Taquicardia irregular de QRS estreito sem ondas P (fibrilação atrial) com FC de 160 bpm e sinais de instabilidade (PA 90/60, tontura, pulsos finos e sudorese). Taquiarritmia instável tem indicação de cardioversão elétrica sincronizada imediata (120–200 J bifásico), com sedação.",
    "commentary": "Adenosina (A): não reverte FA e só serve para diagnóstico de taquicardias regulares.\n\nAmiodarona (C): é opção na FA estável ou após a cardioversão.\n\nVerapamil (D): contraindicado com hipotensão.",
    "reference": "ACLS — Algoritmo de taquicardia / Diretriz de FA da SBC",
    "tags": [
      "cardiologia",
      "fibrilação atrial",
      "instabilidade hemodinâmica",
      "cardioversão elétrica"
    ],
    "tip": "Taquicardia com instabilidade: choque sincronizado, sem discutir o ritmo."
  },
  {
    "id": "hiae2025-14",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Paciente, 83 anos, sexo masculino, foi internado com quadro de queda do estado geral, tosse produtiva e febre com início há 3 dias. Paciente tem antecedentes de hipertensão arterial, hipotireoidismo e doença de Parkinson. Previamente com cognição preservada, independente para as atividades básicas de vida diária e totalmente dependente para as atividades instrumentais de vida diária, devido a limitação motora pela doença de Parkinson. Seu filho conta que, nos últimos 3 dias, notou seu pai mais sonolento, alternando com períodos de confusão e agitação, com piora no dia de hoje. Ao exame clínico, nota-se que o paciente está\n\nem regular estado geral, desidratado, alerta e calmo, com atenção prejudicada e pensamento desorganizado. Além disso, encontra-se eupneico com estertores crepitantes em base esquerda. Exames complementares na admissão: Hb: 13 g/dL; leuco: 13.200/mL; plaquetas 180.000/mL. RX de tórax: opacidade com broncograma aéreo em base esquerda. Considerando as hipóteses diagnósticas, quais os fatores precipitantes e predisponentes para o caso clínico apresentado?",
    "options": [
      "(A) Internação hospitalar, sexo masculino e insuficiência cardíaca.",
      "(B) Hipertensão arterial, hipotireoidismo e déficit sensorial.",
      "(C) Idade, doença de Parkinson e pneumonia.",
      "(D) Sexo masculino, limitação motora e embolia pulmonar."
    ],
    "correctAnswer": 2,
    "explanation": "Idoso com início agudo de alteração de atenção, pensamento desorganizado e flutuação (sonolência alternada com agitação): delirium (CAM positivo). Fatores predisponentes: idade avançada e doença de Parkinson (doença neurológica). Fator precipitante: pneumonia. Também contribui a desidratação.",
    "commentary": "Internação, sexo e IC (A): o delirium começou antes da internação e não há IC descrita.\n\nHipertensão, hipotireoidismo e déficit sensorial (B): não há déficit sensorial descrito e as demais estão compensadas.\n\nEmbolia pulmonar (D): não descrita.",
    "reference": "Sociedade Brasileira de Geriatria e Gerontologia / NICE — Delirium (2023)",
    "tags": [
      "geriatria",
      "delirium",
      "pneumonia",
      "fatores precipitantes"
    ],
    "tip": "Delirium = início agudo + desatenção + flutuação. Procure o gatilho (infecção, fármaco, desidratação)."
  },
  {
    "id": "hiae2025-15",
    "topography": "9",
    "topic": "Anemia ferropriva",
    "module": "Clínica Médica",
    "text": "Paciente de 82 anos, sexo feminino, professora aposentada, hipertensa e diabética há 15 anos em uso de enalapril 10 mg 2 vezes ao dia e metformina 500 mg 2 vezes ao dia e lombalgia crônica, com uso cerca de uma a duas vezes por semana de diclofenaco 50 mg para controle de dor. Paciente com seguimento irregular, sem acompanhamento há cerca de dois anos vem à consulta referindo fadiga, dispneia aos moderados esforços e perda de peso, de cerca de 5 kg em 12 meses. Refere episódios intermitentes de diarreia há 2 anos. Ao exame físico, paciente em bom estado geral, mas com palidez cutaneomucosa 2+/4+, hidratada, anictérica, eupneica, queilite angular, PA 130/80 mmHg, ausência de hepato ou esplenomegalia. Restante do exame físico sem alterações. Exames laboratoriais: hemoglobina 9,0 g/dL; hematócrito 25%; VCM 75 fL; HCM 25 pg; RDW 16%; leucócitos 4.500/mL; plaquetas 400.000/mL; ureia 73 mg/dL; creatinina 1.38 mg/dL. Com base no caso clínico, qual a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Anemia de doença crônica.",
      "(B) Talassemia.",
      "(C) Anemia sideroblástica.",
      "(D) Anemia ferropriva."
    ],
    "correctAnswer": 3,
    "explanation": "Anemia microcítica (VCM 75) e hipocrômica com RDW aumentado (16%), plaquetose reativa e queilite angular: perfil de anemia ferropriva. Em idosa com diarreia crônica, perda de peso e uso de AINE, a deficiência de ferro exige investigar perda gastrointestinal (EDA e colonoscopia) e má absorção (doença celíaca).",
    "commentary": "Anemia de doença crônica (A): geralmente normocítica, com RDW normal.\n\nTalassemia (B): microcitose acentuada com RDW normal e número de hemácias alto.\n\nAnemia sideroblástica (C): rara; costuma ter RDW aumentado e ferro alto.",
    "reference": "ABHH — Anemia ferropriva / British Society of Gastroenterology 2021",
    "tags": [
      "hematologia",
      "anemia ferropriva",
      "perda gastrointestinal",
      "idoso"
    ],
    "tip": "Microcitose + RDW alto = ferro. Microcitose + RDW normal = talassemia."
  },
  {
    "id": "hiae2025-16",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 35 anos, sexo feminino, previamente hígida, admitida no Pronto-Socorro com quadro de dor abdominal em epigastro e hipocôndrios há 4 dias, associada a episódios de vômito e inapetência. Na admissão, encontrava-se em regular estado geral, FC 126 bpm, PA 95 x 60 mmHg, FR 22, peso 60 kg. Palpação abdominal com distensão leve, dor em andar superior, pior em epigastro, sem sinais de irritação peritoneal, sem massas palpáveis. Ruídos hidroaéreos presentes, mas diminuídos. Descompressão brusca negativa, sinal de Giordano negativo, sinal de Murphy negativo. Foram realizados exames laboratoriais na chegada: Hb 14 g/dL, Ht 46%, leucócitos 15500 (sem desvio), ureia 90 mg/dL (Valor de Referência – VR 8 – 20), creatinina 1,9 md/dL (VR 0,7 – 1,3), TGO 125 U/L (VR 10–40), TGP 98 U/L (VR 10–40), bilirrubinas totais 1,2 mg/dL (VR 0,2 – 1,1), bilirrubina direta 1,0 mg/dL (0 – 0,3), amilase 245 U/L (VR 25 – 125), lipase 1250 U/L (VR 10 – 140), PCR 105 mg/dL. Assinale a alternativa que apresenta a melhor conduta para essa paciente, nesse momento",
    "options": [
      "(A) Monitorização; jejum; ringer lactato - 500 mL EV, agora e de 6/6 h; dipirona 1g EV, de 6/6 h; ondansetrona - 4 mg EV, de 8/8 h; sondagem vesical de demora.",
      "(B) Monitorização; dieta parenteral; ceftriaxone e metronidazol EV; metoclopramida; morfina, se necessário; soro fisiológico 0,9% - 500 mL, de 12/12 h.",
      "(C) Jejum; tomografia de abdome com contraste; meropenem EV; tramadol – 100 mg EV, de 8/8h; ondansetrona - 4 mg EV, de 8/8 h.",
      "(D) Internação em UTI; dieta leve hipogordurosa; ringer lactato – 500 mL EV, de 12/12 h; sondagem vesical de demora; angiotomografia de abdome."
    ],
    "correctAnswer": 0,
    "explanation": "Dor epigástrica com vômitos e lipase > 3 vezes o normal: pancreatite aguda. Há taquicardia, hipotensão relativa, hemoconcentração (Ht 46%) e lesão renal (ureia 90, creatinina 1,9), indicando hipovolemia e possível gravidade. A base do tratamento é monitorização, ressuscitação volêmica com Ringer lactato guiada por metas (diurese, FC, ureia), analgesia, antiemético e sondagem vesical para medir diurese. A dieta oral é reintroduzida precocemente assim que tolerada.",
    "commentary": "Nutrição parenteral e antibiótico (B): a via enteral é preferida, e antibiótico profilático não é indicado na pancreatite aguda.\n\nTomografia e meropenem (C): a TC não é necessária no diagnóstico inicial (ideal após 72 h), e não há infecção.\n\nUTI e hidratação mínima (D): 500 mL de 12/12 h é insuficiente; angiotomografia não está indicada.",
    "reference": "ACG 2024 — Pancreatite aguda / Revised Atlanta Classification / WATERFALL trial",
    "tags": [
      "gastroenterologia",
      "pancreatite aguda",
      "ressuscitação volêmica",
      "ringer lactato"
    ],
    "tip": "Pancreatite aguda: Ringer lactato, analgesia, comer cedo e nada de antibiótico profilático."
  },
  {
    "id": "hiae2025-17",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 26 anos, sexo feminino, vem com queixa de mal-estar há dois dias, com piora progressiva e, há um dia, com dor abdominal em hipogastro associada a disúria e polaciúria. Nega febre, nega alterações de hábito intestinal, refere inapetência, mas nega vômitos. Sexualmente ativa, refere corrimento amarelo claro no período, faz uso de contraceptivo oral; data da última menstruação há 3 semanas. Ao exame físico, está em bom estado geral, FC 89 bpm, PAM 120 x 87 mmHg, dor à palpação de hipogastro, sem massas palpáveis ou sinal de irritação peritoneal. Urina I com 20000 leucócitos/mL (VR 0 – 10000). Realizou o exame a seguir. Assinale a alternativa que contém o diagnóstico correto para esse caso.",
    "options": [
      "(A) Abscesso túbulo ovariano.",
      "(B) Ureterolitíase.",
      "(C) Apendicite aguda não complicada.",
      "(D) Apendicite aguda perfurada."
    ],
    "correctAnswer": 2,
    "explanation": "Jovem com dor em hipogastro, disúria e polaciúria, leucocitúria leve, afebril, sem irritação peritoneal. A tomografia mostra o apêndice aumentado com densificação da gordura ao redor, sem abscesso, coleção ou pneumoperitônio: apendicite aguda não complicada. A apendicite pélvica pode irritar a bexiga e causar sintomas urinários e leucocitúria.",
    "commentary": "Abscesso tubo-ovariano (A): haveria massa anexial complexa, febre e sinais de DIP.\n\nUreterolitíase (B): cólica lombar com hematúria e cálculo/hidronefrose na imagem.\n\nApendicite perfurada (D): mostraria abscesso, ar extraluminal ou coleção.",
    "reference": "Sabiston Tratado de Cirurgia — Apendicite / WSES 2020",
    "tags": [
      "cirurgia geral",
      "apendicite aguda",
      "tomografia",
      "diagnóstico diferencial"
    ],
    "image": "/images/hiae2025-17.webp",
    "tip": "Apendicite pélvica pode dar disúria e leucocitúria."
  },
  {
    "id": "hiae2025-18",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Paciente vítima de trauma moto versus auto foi diagnosticado com pneumotórax direito, e esse paciente foi drenado pelo médico que o atendeu. Ao assumir o plantão, outro médico reavalia o paciente, que mantém queixa de dor em hemitórax direito, taquipneia e murmúrio diminuído à direita, com saturação de 93% com 2L de oxigênio. A radiografia realizada é a seguinte: Assinale a alternativa que apresenta a conduta correta a ser empregada nesse momento.",
    "options": [
      "(A) Retirar o dreno atual e realizar nova drenagem de hemitórax direito.",
      "(B) Manter dreno atual e realizar drenagem torácica esquerda.",
      "(C) Manter dreno, por enquanto, e realizar tomografia de tórax.",
      "(D) Manter dreno atual e iniciar fisioterapia respiratória."
    ],
    "correctAnswer": 0,
    "explanation": "Após drenagem de pneumotórax, o paciente segue com dor, taquipneia e murmúrio reduzido à direita. A radiografia mostra o dreno fora da cavidade pleural, no subcutâneo, com enfisema de partes moles: dreno mal posicionado, sem drenar o pneumotórax. A conduta é retirar o dreno e fazer nova drenagem no 5º espaço intercostal, entre as linhas axilares anterior e média.",
    "commentary": "Drenar o lado esquerdo (B): o problema é do lado direito.\n\nTomografia mantendo o dreno (C): a radiografia já mostra o mau posicionamento; adiar mantém o pneumotórax.\n\nFisioterapia (D): não resolve um pneumotórax não drenado.",
    "reference": "ATLS 10ª ed. — Trauma torácico",
    "tags": [
      "trauma",
      "pneumotórax",
      "drenagem torácica",
      "complicações"
    ],
    "image": "/images/hiae2025-18.webp",
    "tip": "Paciente não melhora após dreno: confira se o dreno está mesmo na pleura."
  },
  {
    "id": "hiae2025-19",
    "topography": "1.5",
    "topic": "Nódulos tireoidianos",
    "module": "Cirurgia",
    "text": "Uma paciente, sexo feminino, 52 anos, realizou ultrassonografia de tireoide por queixa de aumento do volume cervical. Na ultrassonografia, foram evidenciados quatro nódulos tireoideanos. Assinale a alternativa que descreve corretamente o nódulo mais suspeito para malignidade",
    "options": [
      "(A) Nódulo sólido, hipoecogênico, bem delimitado, sem focos ecogênicos de permeio, medindo 0,8 x 0,9 x 0,9 cm em istmo.",
      "(B) Nódulo hiperecogênico de limites bem definidos, com fluxo vascular predominantemente periférico, medindo 2,5 x 1,5 x 1,8 cm, mais largo do que alto em terço inferior de lobo direito.",
      "(C) Nódulo isoecogênico, medindo 4,0 x 2,0 x 2,5 cm, ocupando quase integralmente o lobo esquerdo da tireoide, com calcificações grosseiras de permeio.",
      "(D) Nódulo sólido hipoecogênico, medindo 1,2 x 1,0 x 0,9 cm em 1/3 superior de lobo direito, com contornos parcialmente delimitados e focos hiperecogenicos puntiformes de permeio (prováveis microcalcificações)."
    ],
    "correctAnswer": 3,
    "explanation": "Pelo TI-RADS, os achados mais sugestivos de malignidade são: nódulo sólido, hipoecogênico, mais alto que largo, de margens irregulares/mal definidas e com focos ecogênicos puntiformes (microcalcificações). O nódulo da alternativa D reúne sólido, hipoecogênico, contornos parcialmente definidos e microcalcificações (TI-RADS 5); com 1,2 cm, tem indicação de punção (≥ 1 cm).",
    "commentary": "Sólido e hipoecogênico bem delimitado (A): suspeita moderada, e com 0,9 cm não teria indicação de punção.\n\nHiperecogênico, mais largo que alto (B): características de baixo risco.\n\nIsoecogênico com calcificações grosseiras (C): risco intermediário/baixo; macrocalcificações são menos suspeitas que microcalcificações.",
    "reference": "ACR TI-RADS (2017) / SBEM — Nódulos tireoidianos",
    "tags": [
      "endocrinologia",
      "nódulo de tireoide",
      "TI-RADS",
      "microcalcificações"
    ],
    "tip": "Nódulo suspeito: sólido, hipoecoico, mais alto que largo, margem irregular, microcalcificações."
  },
  {
    "id": "hiae2025-20",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Mulher, 70 anos, DM tipo 2 e HAS, ambas com controle adequado. Hematoquezia há 3 meses. Refere emagrecimento não intencional de 10 kg, em 6 meses. Exames laboratoriais: Hb 10,9 g/dL, plaquetas 220 mil/uL, Cr 0,95mg/dL, INR 1,0, R 0,95, PCR 15,2 mg/dL, ferritina 40 ng/mL, saturação de transferrina 12%, albumina 3,5 g/dL. Exames de estadiamento negativo para metástases. Realizados os exames diagnósticos a seguir. Qual é o diagnóstico e como deve\n\nser feita a condução dessa paciente no pré-operatório?",
    "options": [
      "(A) Neoplasia de cólon. Realizar suplementação de ferro por via endovenosa.",
      "(B) Neoplasia de cólon. Realizar eritropoetina por via subcutânea.",
      "(C) Neoplasia de canal anal. Realizar suplementação de ferro por via endovenosa.",
      "(D) Neoplasia de canal anal. Realizar eritropoetina por via subcutânea."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com hematoquezia e perda de peso; colonoscopia com lesão vegetante, friável e estenosante e ressonância com espessamento circunferencial de segmento intestinal baixo: neoplasia colorretal. Há anemia ferropriva (saturação de transferrina 12%; com PCR alta, ferritina < 100 ng/mL também indica deficiência). No pré-operatório, o Patient Blood Management recomenda corrigir a anemia com ferro endovenoso, que age rápido e não depende da absorção intestinal (bloqueada pela hepcidina na inflamação).",
    "commentary": "Eritropoetina (B e D): não trata deficiência de ferro e tem risco trombótico; só em situações específicas.\n\nCanal anal (C e D): o canal anal é revestido por epitélio escamoso e o tumor típico é o carcinoma espinocelular; a imagem mostra lesão colorretal.",
    "reference": "Patient Blood Management — Consenso internacional (2018) / NCCN Colon/Rectal Cancer",
    "tags": [
      "coloproctologia",
      "câncer colorretal",
      "anemia ferropriva",
      "ferro endovenoso"
    ],
    "image": "/images/hiae2025-20.webp",
    "tip": "Anemia ferropriva antes de cirurgia oncológica: ferro EV."
  },
  {
    "id": "hiae2025-21",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem, 22 anos, vítima de colisão de carro a 70 km/h contra um caminhão; o condutor estava sem cinto de segurança. Dados locais: PA 100 x 70 mmHg, FC 110 bpm, FR 18 ipm, SatO₂ 92%. Tempo de resgaste de 30 minutos. Chega ao serviço de emergência em prancha rígida, colar cervical e máscara de oxigênio a 10 L/min. Queixa-se de muita dor no tórax e dificuldade para respirar. Sinais vitais na admissão: PA 90 x 70 mmHg, FC 130 bpm, FR 24 ipm, SatO₂ 88%. Escoriações e equimoses em face e tórax bilateral. Crepitações em tórax à direita. Murmúrios vesiculares reduzidos à direita. Qual é a conduta correta nesse momento?",
    "options": [
      "(A) Infundir 1 litro de cristaloide.",
      "(B) Toracentese descompressiva.",
      "(C) Intubação orotraqueal.",
      "(D) Realizar o FAST."
    ],
    "correctAnswer": 1,
    "explanation": "Trauma torácico grave com dispneia, crepitação (enfisema subcutâneo), murmúrio reduzido à direita, hipoxemia (88%), taquicardia e hipotensão: pneumotórax hipertensivo. É diagnóstico clínico e exige descompressão imediata, sem esperar imagem: punção no 5º espaço intercostal entre as linhas axilares anterior e média (adultos; ATLS 10ª ed.), seguida de drenagem torácica.",
    "commentary": "Cristaloide (A): o choque é obstrutivo; volume não resolve.\n\nIntubação (C): a ventilação com pressão positiva piora o pneumotórax hipertensivo; descomprime-se antes.\n\nFAST (D): atrasa a descompressão, que é a prioridade.",
    "reference": "ATLS 10ª ed. — Trauma torácico",
    "tags": [
      "trauma",
      "pneumotórax hipertensivo",
      "descompressão torácica"
    ],
    "tip": "Pneumotórax hipertensivo é diagnóstico clínico: descomprime antes de qualquer exame."
  },
  {
    "id": "hiae2025-22",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem, 22 anos, vítima de queda de motocicleta a 50 km/h, sem capacete, há 30 minutos. Trazido pelo resgate em prancha rígida e com colar cervical. Dados do local: PA 110 x 70 mmHg, FC 90 bpm, FR 16 ipm, escala de coma de Glasgow AO 4, RV 4, RM 6. Chega ao hospital com via aérea pérvia, exame torácico sem alterações, PA 110 x 60 mmHg, FC 85 bpm, FR 15 ipm, SatO₂ 95%, FAST negativo, sem deformidades em membros inferiores e superiores, ferimento corto-contuso em região parietal direita, com curativo compressivo, midríase à direita, escala de coma de Glasgow AO 2, RV 2, RM 4. O hospital não possui especialidades cirúrgicas. Qual é o diagnóstico e quais condutas devem ser tomadas nesse momento?",
    "options": [
      "(A) TCE grave, intubação orotraqueal, e transferir para centro de trauma com neurocirurgião.",
      "(B) TCE moderado, intubação orotraqueal e transferir para centro de trauma com neurocirurgião.",
      "(C) TCE moderado, iniciar manitol endovenoso, observação clínica por 2 horas, e transferir para centro de trauma com neurocirurgião.",
      "(D) TCE grave, realizar tomografia de crânio, e transferir para centro de trauma com neurocirurgião."
    ],
    "correctAnswer": 0,
    "explanation": "TCE com Glasgow 8 (AO 2, RV 2, RM 4) e anisocoria (midríase à direita): TCE grave com sinal de herniação. É preciso proteger a via aérea com intubação orotraqueal (Glasgow ≤ 8) e transferir sem atraso para um centro com neurocirurgia, já que o hospital não tem especialidades cirúrgicas.",
    "commentary": "TCE moderado (B e C): moderado é Glasgow 9–13.\n\nManitol e observar 2 h (C): o atraso é inaceitável.\n\nTomografia antes de transferir (D): sem neurocirurgião, a tomografia atrasa a transferência e não muda a conduta local; antes, a via aérea precisa ser garantida.",
    "reference": "ATLS 10ª ed. — TCE / Brain Trauma Foundation",
    "tags": [
      "trauma",
      "TCE grave",
      "intubação orotraqueal",
      "transferência"
    ],
    "tip": "Glasgow ≤ 8: intuba. Hospital sem neurocirurgia: transfira já."
  },
  {
    "id": "hiae2025-23",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 58 anos, vem por quadro de hematêmese e melena há 2 horas. Acompanhante refere que esse é o segundo episódio de sangramento nos últimos 6 meses. Tem antecedente de consumo de destilados, diariamente, há 15 anos. À admissão, encontra-se confuso e agitado, pressão arterial de 80 x 60 mmHg, FC de 120 bpm, com tempo de enchimento capilar de 5 segundos. Paciente foi admitido na sala de emergência e, após monitorização, acesso venoso e expansão volêmica, evolui com novo episódio de hematêmese, que resultou em rebaixamento do nível de consciência, com necessidade de intubação orotraqueal. São complicações do procedimento que pode ser realizado pelo médico emergencista para controle do sangramento:",
    "options": [
      "(A) contaminação cruzada, febre, reação hemolítica.",
      "(B) necrose de asa de nariz, isquemia esofágica, perfuração de esôfago.",
      "(C) encefalopatia hepática, hemobilia, insuficiência renal.",
      "(D) ulceração no esôfago, estenose esofágica, dor torácica."
    ],
    "correctAnswer": 1,
    "explanation": "Etilista com hemorragia digestiva alta grave, provavelmente varicosa, refratária, com necessidade de intubação. O procedimento que o emergencista pode fazer para controlar o sangramento é o balão de Sengstaken-Blakemore. Suas complicações são necrose da asa do nariz (pela tração), isquemia e úlcera esofágica e perfuração/ruptura do esôfago, além de aspiração e asfixia por migração do balão.",
    "commentary": "Contaminação, febre e reação hemolítica (A): são complicações de transfusão.\n\nEncefalopatia, hemobilia e insuficiência renal (C): relacionam-se ao TIPS (hemobilia, encefalopatia) e ao contraste.\n\nÚlcera, estenose e dor torácica (D): são complicações da ligadura ou escleroterapia endoscópica.",
    "reference": "Baveno VII / Sabiston Tratado de Cirurgia",
    "tags": [
      "gastroenterologia",
      "hemorragia digestiva alta",
      "balão de Sengstaken-Blakemore",
      "varizes esofágicas"
    ],
    "tip": "Balão de Sengstaken: ponte de até 24 h; risco de perfuração e necrose."
  },
  {
    "id": "hiae2025-24",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 35 anos, foi submetido à hernioplastia inguinal direita, por via\n\nlaparoscópica, pela técnica transabdominal pré-peritoneal. A cirurgia evoluiu sem intercorrências, e o paciente recebeu alta no 1º pós-operatório. No primeiro retorno ambulatorial, após 7 dias da cirurgia, o paciente referia dor inguinal e em face medial de coxa direita, sendo prescritos analgésicos simples para controle álgico. O paciente retorna 6 semanas após a cirurgia, com as mesmas queixas a despeito dos analgésicos prescritos. Ao exame físico, região inguinal direita sem abaulamentos, hematomas ou sinais de recidiva. O provável fator responsável pela dor e a terapia inicial mais adequada no momento são:",
    "options": [
      "(A) uso de grampos cirúrgicos em região lateral aos vasos epigástricos e abaixo do trato ileopúbico; gabapentina via oral.",
      "(B) ligadura inadvertida dos vasos gonadais; ultrassom Doppler de testículos.",
      "(C) migração da tela cirúrgica para região abdominal; tomografia de abdome com contraste endovenoso.",
      "(D) seroma adjacente à tela cirúrgica; punção guiada por ultrassom."
    ],
    "correctAnswer": 0,
    "explanation": "Dor inguinal e na face medial da coxa persistente após hernioplastia laparoscópica (TAPP): dor inguinal crônica neuropática por lesão de nervo. O grampeamento lateral aos vasos epigástricos e abaixo do trato iliopúbico atinge o 'triângulo da dor', onde passam o nervo cutâneo femoral lateral e o ramo femoral do genitofemoral. O tratamento inicial é clínico, com neuromoduladores (gabapentina ou pregabalina) e analgésicos.",
    "commentary": "Ligadura dos vasos gonadais (B): causaria orquite isquêmica e dor testicular, não na face medial da coxa.\n\nMigração da tela (C): rara e com outros sinais (obstrução, fístula).\n\nSeroma (D): seria abaulamento perceptível; o exame é normal.",
    "reference": "HerniaSurge — Diretrizes internacionais de hérnia inguinal (2018)",
    "tags": [
      "cirurgia geral",
      "hérnia inguinal",
      "dor inguinal crônica",
      "triângulo da dor"
    ],
    "tip": "Triângulo da dor: lateral aos vasos epigástricos e abaixo do trato iliopúbico — não grampear."
  },
  {
    "id": "hiae2025-25",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 12 anos, com quadro de dor em cólica intermitente em hipocôndrio direito há 2 meses. Realizou ultrassom de abdome, que revelou vesícula biliar normodistendida, paredes com diâmetro normal, contendo múltiplos cálculos em seu interior. Dentre as condições listadas a seguir, aquela que mais provavelmente se relaciona com o diagnóstico de colelitíase nessa paciente é:",
    "options": [
      "(A) puberdade precoce.",
      "(B) história familiar de colelitíase.",
      "(C) hipercolesterolemia familiar.",
      "(D) anemia falciforme."
    ],
    "correctAnswer": 3,
    "explanation": "Colelitíase em criança deve levantar suspeita de doença hemolítica crônica (cálculos de bilirrubinato de cálcio, pigmentares). A anemia falciforme é a principal causa no Brasil; esferocitose e talassemias também.",
    "commentary": "Puberdade precoce (A) e hipercolesterolemia familiar (C): não se associam de forma importante a cálculos na infância.\n\nHistória familiar (B): pesa pouco na criança.",
    "reference": "SBP — Colelitíase na infância / Sabiston Tratado de Cirurgia",
    "tags": [
      "cirurgia pediátrica",
      "colelitíase",
      "anemia falciforme",
      "doença hemolítica"
    ],
    "tip": "Cálculo biliar em criança: pense em hemólise (falciforme, esferocitose)."
  },
  {
    "id": "hiae2025-26",
    "topography": "3.3",
    "topic": "Colangiocarcinoma",
    "module": "Cirurgia",
    "text": "Paciente de 68 anos, sexo feminino, apresenta quadro de icterícia progressiva, colúria e acolia, nos últimos 2 meses. Refere perda de peso de, aproximadamente, 5 kg no período. Ao exame físico, apresenta-se ictérica e, à palpação abdominal, revela abdome flácido, plano, sem sinais de peritonite. Os exames laboratoriais mostram bilirrubina direta de 12 g/dL, fosfatase alcalina de 1200 e gama-glutamil transferase de 2100. Realizou ultrassom de abdome, que revelou: acentuada dilatação de vias biliares intra-hepáticas; vesícula biliar murcha, sem cálculos e colédoco com diâmetro normal. Com base nos achados clínicos e radiológicos, qual é o diagnóstico mais provável?",
    "options": [
      "(A) Coledocolítiase.",
      "(B) Adenocarcinoma de papila duodenal.",
      "(C) Tumor de Klatskin.",
      "(D) Síndrome de Mirizzi."
    ],
    "correctAnswer": 2,
    "explanation": "Icterícia progressiva indolor com perda de peso, colestase intensa, dilatação apenas das vias intra-hepáticas, colédoco de calibre normal e vesícula murcha: a obstrução está na confluência dos ductos hepáticos (hilo). É o tumor de Klatskin (colangiocarcinoma hilar). Na obstrução distal, a vesícula estaria distendida (sinal de Courvoisier) e o colédoco dilatado.",
    "commentary": "Coledocolitíase (A): dilataria o colédoco e haveria cálculos.\n\nAdenocarcinoma de papila (B): obstrução distal, com colédoco dilatado e vesícula palpável.\n\nSíndrome de Mirizzi (D): cálculo impactado no infundíbulo comprimindo o ducto hepático, com vesícula cheia de cálculos.",
    "reference": "Sabiston Tratado de Cirurgia — Neoplasias das vias biliares",
    "tags": [
      "cirurgia geral",
      "colangiocarcinoma",
      "tumor de Klatskin",
      "icterícia obstrutiva"
    ],
    "tip": "Intra-hepáticas dilatadas + colédoco fino + vesícula murcha = obstrução hilar (Klatskin)."
  },
  {
    "id": "hiae2025-27",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Cirurgia",
    "text": "Paciente, 45 anos, apresenta quadro de hematêmese e melena. Endoscopia digestiva alta realizada na urgência identifica tumor de, aproximadamente, 3 cm, recoberto por mucosa normal, com umbilicação central, em fundo gástrico, com sinais de sangramento recente. Não foi realizada biópsia. Em face do exposto, assinale a alternativa correta.",
    "options": [
      "(A) O paciente deve ser submetido à gastrectomia com linfadenectomia a D2, na urgência, considerando a alta probabilidade de câncer gástrico.",
      "(B) Deve-se encaminhar o paciente para radioterapia, para realizar radioterapia hemostática.",
      "(C) Paciente jovem, com suspeita de câncer gástrico. Deve-se suspeitar de síndrome de Lynch.",
      "(D) Biópsia da superfície do nódulo pode resultar em falso negativo, uma vez que a lesão pode ser subepitelial."
    ],
    "correctAnswer": 3,
    "explanation": "Lesão gástrica de 3 cm recoberta por mucosa normal com umbilicação central e sangramento: aspecto típico de lesão subepitelial, como o GIST (tumor estromal gastrointestinal). Como a lesão está abaixo da mucosa, a biópsia superficial com pinça costuma não pegar o tumor (falso negativo); faz-se ecoendoscopia com punção por agulha fina.",
    "commentary": "Gastrectomia D2 de urgência (A): o aspecto não é de adenocarcinoma, e a hemostasia endoscópica vem primeiro.\n\nRadioterapia hemostática (B): não é indicada.\n\nSíndrome de Lynch (C): não há evidência de câncer gástrico nem de história familiar.",
    "reference": "NCCN GIST / ESMO 2022",
    "tags": [
      "gastroenterologia",
      "GIST",
      "lesão subepitelial",
      "hemorragia digestiva alta"
    ],
    "tip": "Mucosa normal com umbilicação central = lesão subepitelial (GIST): ecoendoscopia."
  },
  {
    "id": "hiae2025-28",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "O câncer colorretal é o mais incidente dentre as neoplasias malignas gastrointestinais. Sua incidência tem aumentado em muitos países dentre os jovens. Quanto ao rastreamento para câncer colorretal, é correto afirmar:",
    "options": [
      "(A) colonoscopia pode ser utilizada não somente como exame diagnóstico, mas também como intervenção terapêutica em alguns casos de câncer colorretal.",
      "(B) pacientes com doença de Crohn devem iniciar rastreamento para câncer colorretal antes dos 45 anos, enquanto pacientes com retocolite ulcerativa seguem a mesma estratégia de rastreio que a população geral.",
      "(C) colonoscopia virtual pode ser utilizada como exame de rastreio, caso o paciente seja relutante em realizar exames, tais como sangue oculto nas fezes ou colonoscopia.",
      "(D) a grande limitação da colonoscopia como exame de rastreamento para câncer colorretal populacional é que este é um exame de baixa sensibilidade, apesar de alta especificidade."
    ],
    "correctAnswer": 0,
    "explanation": "A colonoscopia não é só diagnóstica: na mesma sessão permite remover pólipos adenomatosos (prevenindo o câncer) e tratar câncer precoce (pólipo maligno com critérios favoráveis), por polipectomia ou mucosectomia.",
    "commentary": "Retocolite seguindo o rastreio geral (B): tanto a doença de Crohn com colite extensa quanto a retocolite ulcerativa exigem colonoscopia de vigilância 8 anos após o início dos sintomas.\n\nColonoscopia virtual (C): é alternativa para quem recusa a colonoscopia, mas não é a opção indicada para quem recusa exames em geral.\n\nBaixa sensibilidade (D): a colonoscopia é o exame mais sensível; suas limitações são custo, preparo e risco.",
    "reference": "USPSTF 2021 / ACG — Rastreamento de câncer colorretal",
    "tags": [
      "coloproctologia",
      "câncer colorretal",
      "rastreamento",
      "colonoscopia"
    ]
  },
  {
    "id": "hiae2025-29",
    "topography": "7.1",
    "topic": "Insuficiência venosa crônica",
    "module": "Cirurgia",
    "text": "Paciente feminina, 45 anos, cabeleireira, apresenta queixas de dor e cansaço em membros inferiores, predominantemente no final do dia, que melhoram ao elevar as pernas. Também relata sensação de peso e queimação nas pernas. Ao exame físico, há varizes visíveis e tortuosas nas pernas e coxas, além de edema bilateral dos membros inferiores. Há também telangectasias na inspeção. Não há ulcerações, alterações pigmentares ou de textura da pele. Não há áreas de enduramento. A paciente tem hipertensão controlada com medicamentos, é tabagista e tem histórico familiar de varizes. Relata dificuldade em desempenhar suas atividades laborais devido ao desconforto nas pernas. Com base na classificação CEAP (Clinical-Etiology- -Anatomy-Pathophysiology) e no quadro clínico descrito, qual é a conduta terapêutica mais apropriada para essa paciente e qual é sua classificação?",
    "options": [
      "(A) Tratamento cirúrgico das varizes de membros inferiores devido ao impacto na qualidade de vida e presença de edema. A prescrição de meias elásticas de compressão pode ser associada para controle dos sintomas. Essa paciente tem classificação C4.",
      "(B) Iniciar anticoagulação plena devido ao risco de trombose venosa profunda, uma conduta indicada para pacientes como a descrita no enunciado. Essa paciente tem classificação C3.",
      "(C) Aplicação de escleroterapia nas telangectasias para alívio imediato dos sintomas, que é uma conduta apropriada para pacientes como a descrita no enunciado. Essa paciente tem classificação C3.",
      "(D) Tratamento cirúrgico das varizes de membros inferiores devido ao impacto na qualidade de vida e presença de edema. A prescrição de meias elásticas de compressão pode ser associada para controle dos sintomas. Essa paciente tem classificação C3."
    ],
    "correctAnswer": 3,
    "explanation": "Pela CEAP: C1 telangiectasias/veias reticulares; C2 varizes; C3 edema; C4 alterações de pele (pigmentação, eczema, lipodermatosclerose); C5 úlcera cicatrizada; C6 úlcera ativa. A paciente tem varizes e edema, sem alterações de pele: C3. Varizes sintomáticas que prejudicam a qualidade de vida e o trabalho têm indicação de tratamento intervencionista, e as meias de compressão podem ser associadas.",
    "commentary": "C4 (A): exigiria alterações de pele.\n\nAnticoagulação (B): não há trombose.\n\nEscleroterapia nas telangiectasias (C): trata as telangiectasias (estético) e não as varizes tronculares sintomáticas.",
    "reference": "SBACV — Insuficiência venosa crônica / Classificação CEAP 2020",
    "tags": [
      "cirurgia vascular",
      "insuficiência venosa crônica",
      "varizes",
      "classificação CEAP"
    ],
    "tip": "CEAP: C2 varizes, C3 edema, C4 pele, C5 úlcera cicatrizada, C6 úlcera ativa."
  },
  {
    "id": "hiae2025-30",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Um homem de 45 anos, sem comorbidades conhecidas e com antecedente de alergia a dipirona, foi submetido a uma colecistectomia laparoscópica. No primeiro dia de pós operatório, ele relata dor abdominal difusa com uma pontuação de 5/10 na escala de dor. A analgesia multimodal, incluindo paracetamol e cetoprofeno, não aliviou suficientemente a dor. O paciente apresenta dificuldade para respirar profundamente devido ao desconforto. Exames de imagem e outros testes descartaram quaisquer complicações cirúrgicas. A equipe médica agora busca otimizar o manejo da dor pós-operatória. Qual é o próximo passo mais apropriado no manejo da dor para esse paciente?",
    "options": [
      "(A) Aumentar a dose de paracetamol para maximizar seu efeito analgésico.",
      "(B) Iniciar um opioide de ação curta, como tramadol, para controle adicional da dor.",
      "(C) Administrar relaxantes musculares por via oral para reduzir o desconforto abdominal.",
      "(D) Iniciar morfina subcutânea, para controle adicional da dor."
    ],
    "correctAnswer": 1,
    "explanation": "Dor moderada (5/10) após colecistectomia, que limita a respiração profunda, apesar de paracetamol e AINE, em paciente alérgico a dipirona. Pela escada analgésica, o passo seguinte é acrescentar opioide fraco, como tramadol, mantendo a analgesia multimodal.",
    "commentary": "Aumentar paracetamol (A): já em uso, com teto de dose e risco de hepatotoxicidade.\n\nRelaxante muscular (C): não tem papel na dor pós-operatória visceral.\n\nMorfina (D): opioide forte, reservado para dor intensa ou falha do opioide fraco.",
    "reference": "OMS — Escada analgésica / Sociedade Brasileira para o Estudo da Dor",
    "tags": [
      "cirurgia geral",
      "dor pós-operatória",
      "analgesia multimodal",
      "tramadol"
    ],
    "tip": "Dor moderada que não cede com não opioides: opioide fraco."
  },
  {
    "id": "hiae2025-31",
    "module": "Pediatria",
    "text": "Escolar de 8 anos, sexo masculino, com episódios recorrentes de palpitações e desconforto no peito nas últimas horas. Os pais negam histórico prévio de problemas cardíacos ou episódios semelhantes. No momento da avaliação, o paciente está ansioso e relata sentir o coração \"batendo muito rápido\". Ele parece desconfortável e agitado, mas colabora com o atendimento quando solicitado. Ao exame físico, FC = 187 bpm, PA = 98 x 56 (70) mmHg, tempo de enchimento capilar de 2 segundos, pulsos periféricos cheios e simétricos, FR = 32 ipm, SatO₂ = 98% em ar ambiente, sem desconforto respiratório. No monitor cardíaco, nota-se o seguinte ritmo: Com base no fluxograma de avaliação de taquicardias do PALS (Pediatric Advanced Life Support), qual é a conduta mais apropriada a ser realizada inicialmente para esse paciente?",
    "options": [
      "(A) Administrar adenosina endovenosa, imediatamente.",
      "(B) Administrar adenosina apenas se ausência de resposta com manobras vagais.",
      "(C) Realizar cardioversão elétrica sincronizada com 0,5 a 1 J/kg.",
      "(D) Administrar atropina endovenosa, imediatamente."
    ],
    "correctAnswer": 1,
    "explanation": "Taquicardia de QRS estreito, regular, com FC de 187 bpm, sem ondas P visíveis e sem variação, em escolar: taquicardia supraventricular. A criança está estável (perfusão, PA e consciência normais). Pelo PALS, tentam-se primeiro manobras vagais (ex.: soprar canudo, gelo na face em lactentes); se não houver resposta, adenosina IV em bolus rápido.",
    "commentary": "Adenosina imediata (A): pode ser feita, mas na criança estável as manobras vagais vêm antes.\n\nCardioversão sincronizada (C): reservada para instabilidade.\n\nAtropina (D): é para bradicardia.",
    "reference": "PALS — Algoritmo de taquicardia com pulso (AHA 2020)",
    "tags": [
      "cardiologia pediátrica",
      "taquicardia supraventricular",
      "manobras vagais",
      "adenosina"
    ],
    "image": "/images/hiae2025-31.webp",
    "tip": "TSV estável: manobra vagal → adenosina. Instável: cardioversão."
  },
  {
    "id": "hiae2025-32",
    "topography": "4.1",
    "topic": "Síndrome nefrítica",
    "module": "Pediatria",
    "text": "Menino de 8 anos com história de edema de face e em membros inferiores há três dias associado à diminuição do débito urinário e urina escurecida. Os pais negam problemas prévios de saúde, referindo apenas que há 1 mês, paciente fez uso de cefalexina para tratar uma infecção de pele no membro inferior direito. Ao exame físico, FC = 88 bpm, PA = 138 x 67 (99) mmHg, FR = 34 ipm, SatO₂ = 89% em ar ambiente. Ausculta pulmonar diminuída em ambas as bases, com estertores crepitantes. Sinais de desconforto respiratório leve. Tendo em vista a principal hipótese diagnóstica, assinale a alternativa que contenha, respectivamente, a alteração laboratorial esperada e a conduta inicial adequada para esse paciente.",
    "options": [
      "(A) Antiesteptolisina O (ASLO) diminuída; restrição hidrossalina e furosemida.",
      "(B) Albumina sérica diminuída; albumina e corticoide.",
      "(C) Anticorpos antidesoxirribonuclease B (anti-DNase B) elevados; restrição hidrossalina e furosemida.",
      "(D) Dismorfismo eritrocitário presente; albumina e corticoide."
    ],
    "correctAnswer": 2,
    "explanation": "Edema, oligúria, urina escura e hipertensão cerca de 1 mês após piodermite: glomerulonefrite pós-estreptocócica. Após infecção de pele, a ASLO pode não subir; o anticorpo mais útil é a anti-DNase B. A hipervolemia (edema, hipertensão, congestão pulmonar) é tratada com restrição hidrossalina e furosemida.",
    "commentary": "ASLO diminuída (A): na infecção estreptocócica a ASLO aumenta (mas é menos sensível após piodermite).\n\nAlbumina baixa com albumina e corticoide (B e D): é a conduta da síndrome nefrótica; aqui o quadro é nefrítico.\n\nDismorfismo eritrocitário (D): está presente, mas a conduta descrita é errada.",
    "reference": "SBP — Glomerulonefrite difusa aguda / KDIGO 2021",
    "tags": [
      "nefrologia pediátrica",
      "glomerulonefrite pós-estreptocócica",
      "síndrome nefrítica",
      "anti-DNase B"
    ],
    "tip": "GNPE após impetigo: anti-DNase B. Após faringite: ASLO. Complemento C3 baixo."
  },
  {
    "id": "hiae2025-33",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Lactente de 9 meses com quadro de diarreia aguda há três dias, acompanhada de vômitos pontuais e febre baixa. Ao exame físico, a criança apresenta sinais de desidratação, com mucosas secas, olhos fundos, irritabilidade e diminuição da elasticidade da pele. Restante do exame: FC = 148 bpm, PA = 100 x 55 (74) mmHg, pulsos cheios, presença de lágrimas, fontanela anterior normotensa. Com base nas diretrizes do Ministério da Saúde para manejo da desidratação na criança com diarreia, qual é a conduta inicial mais apropriada para esse caso?",
    "options": [
      "(A) Iniciar terapia de reidratação oral e monitorar a resposta clínica.",
      "(B) Solicitar exames laboratoriais para avaliar eletrólitos e função renal antes de iniciar qualquer intervenção.",
      "(C) Iniciar reidratação intravenosa imediatamente com soro fisiológico ou ringer lactato.",
      "(D) Iniciar reidratação intravenosa com soro glicosado 5% e soro fisiológico em partes iguais."
    ],
    "correctAnswer": 0,
    "explanation": "Diarreia aguda com sinais de desidratação (olhos fundos, mucosas secas, irritabilidade, sinal da prega lentificado), mas sem sinais de gravidade (pulsos cheios, consciente, consegue beber): plano B do Ministério da Saúde. A conduta é terapia de reidratação oral na unidade (50–100 mL/kg em 4–6 horas) com reavaliação.",
    "commentary": "Exames antes de tratar (B): não são necessários e atrasam o tratamento.\n\nHidratação venosa (C e D): é o plano C, para desidratação grave ou falha da via oral; a solução com glicose meio a meio é antiga e não é recomendada.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / SBP",
    "tags": [
      "pediatria",
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral"
    ],
    "tip": "Desidratação sem gravidade = plano B: soro de reidratação oral na unidade."
  },
  {
    "id": "hiae2025-34",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Um menino de 4 anos com diagnóstico de TDAH (transtorno do déficit de atenção com hiperatividade) é levado ao pronto-socorro pela avó materna devido a múltiplos hematomas em diferentes estágios de cicatrização visíveis em seu corpo. A avó relata que as lesões foram observadas quando ela ajudou o menino a trocar de roupa. Ela menciona que o neto vive com os pais, mas ela nota que ele tem estado mais retraído e evita contato físico nos últimos meses. Ao exame físico, notam-se vários hematomas (alguns arroxeados, outros amarelados) em várias partes do corpo, incluindo costas, braços e pernas. Paciente se mostra reservado, evitando contato visual e mantendo postura corporal defensiva. Com base no caso clínico descrito, qual é a conduta mais apropriada a ser tomada inicialmente?",
    "options": [
      "(A) Iniciar tratamento psicológico e entrar em contato com a coordenação da escola que o paciente frequenta.",
      "(B) Realizar notificação compulsória aos órgãos competentes.",
      "(C) Orientar a avó a respeito da importância de se conversar com os pais sobre o ocorrido, para entender como surgiram os hematomas.",
      "(D) Realizar exames laboratoriais para investigação de possíveis distúrbios de coagulação."
    ],
    "correctAnswer": 1,
    "explanation": "Hematomas em diferentes estágios em locais pouco típicos de trauma acidental (costas) e mudança de comportamento (retraimento, postura defensiva): suspeita de maus-tratos físicos. A notificação compulsória (SINAN) e a comunicação ao Conselho Tutelar são obrigatórias já na suspeita.",
    "commentary": "Tratamento psicológico e escola (A): não substituem a notificação.\n\nOrientar a avó a conversar com os pais (C): pode expor a criança a risco.\n\nInvestigar coagulopatia (D): pode ser feito como diagnóstico diferencial, mas não é a conduta inicial nem dispensa a notificação.",
    "reference": "ECA (Lei 8.069/1990) / SBP — Manual de atendimento às crianças vítimas de violência",
    "tags": [
      "pediatria",
      "maus-tratos",
      "notificação compulsória",
      "violência física"
    ],
    "tip": "Hematomas em fases diferentes e lugares estranhos: notificar."
  },
  {
    "id": "hiae2025-35",
    "topography": "9",
    "topic": "Linfomas",
    "module": "Pediatria",
    "text": "Os pais de um menino de 7 anos relatam ter observado o surgimento de um nódulo em seu pescoço há cerca de 3 semanas, com aumento gradual de tamanho. Nesse mesmo periodo, a crianca apresentou alguns episódios de febre baixa, apesar da ausência de outros sintomas condizentes com infecções. Ao exame físico, presença de linfonodo palpável no lado direito do pescoço com aproximadamente 3,5 cm de diâmetro, endurecido, aderi-do aos planos profundos e indolor à palpação superficial. Palpa-se também um linfonodo menor (cerca de 1 cm) em região supraclavicular à direita. Considerando os achados clínicos, qual a conduta apropriada a seguir?",
    "options": [
      "(A) Solicitar biópsia excisional do linfonodo e exames de imagem (ultrassonografia cervical e tomografia computadorizada do tórax).",
      "(B) Acompanhar clinicamente por 4 a 6 semanas; considerar biópsia se aumento de tamanho ou sintomas sistêmicos.",
      "(C) Solicitar hemograma, DHL, e PCR e acompanhar clinicamente, sem necessidade de biópsia.",
      "(D) Solicitar biópsia por punção aspirativa com agulha fina dos linfonodos, sorologia para Epstein-Barr e citomegalovírus."
    ],
    "correctAnswer": 0,
    "explanation": "Linfonodo cervical de 3,5 cm, endurecido, aderido a planos profundos e indolor, com crescimento progressivo, febre e linfonodo supraclavicular: sinais de alerta para malignidade (linfoma). A conduta é biópsia excisional (que permite ver a arquitetura do linfonodo) e imagem: ultrassonografia cervical e tomografia de tórax para pesquisar massa mediastinal antes de qualquer sedação.",
    "commentary": "Observar 4–6 semanas (B) ou só exames (C): inadequado com sinais de alerta (supraclavicular, endurecido, aderido).\n\nPunção aspirativa (D): não avalia a arquitetura e é insuficiente para diagnosticar linfoma.",
    "reference": "SBP — Linfonodomegalias na infância / SOBOPE",
    "tags": [
      "pediatria",
      "linfonodomegalia",
      "linfoma",
      "biópsia excisional"
    ],
    "tip": "Linfonodo supraclavicular em criança: biópsia."
  },
  {
    "id": "hiae2025-36",
    "module": "Pediatria",
    "text": "Sem nada referir anteriormente, lactente de 8 meses dá entrada em serviço de emergência com quadro de vômitos, urticária e angioedema ocular bilateral, iniciados imediatamente após a ingestão de ovo cozido. A criança encontra-se eutrófica, sem história de outras condições patológicas e vem sendo amamentada ao seio materno sem qualquer restrição alimentar da nutriz. Administrada adrenalina intramuscular com resolução dos sintomas e\n\nmantida em observação por algumas horas. Em relação às recomendações necessárias no momento da alta, assinale a alternativa correta.",
    "options": [
      "(A) Vacinas cultivadas em embrião de galinha não devem ser administradas, caso da tríplice viral, influenza e febre amarela.",
      "(B) A baixa idade contraindica a realização de testes para avaliação de IgE específica para o ovo, que deve ser completamente excluído da dieta.",
      "(C) O diagnóstico deve ser necessariamente confirmado por meio de teste de provocação oral.",
      "(D) Não há necessidade de restringir as proteínas do ovo da dieta da mãe nutriz, que manterá o aleitamento materno."
    ],
    "correctAnswer": 3,
    "explanation": "Reação imediata ao ovo (urticária, angioedema, vômitos, que exigiu adrenalina): alergia ao ovo mediada por IgE. O lactente amamentado reagiu à primeira ingestão direta, não ao leite materno. Não há indicação de restringir ovo da dieta da mãe, e a amamentação deve continuar.",
    "commentary": "Contraindicar vacinas (A): tríplice viral e influenza podem ser dadas normalmente; a febre amarela tem cautela apenas na anafilaxia grave ao ovo (aplicar em ambiente preparado).\n\nIgE específica contraindicada pela idade (B): os testes podem ser feitos em qualquer idade.\n\nProvocação oral obrigatória (C): com reação grave imediata e clara, a provocação não é necessária para o diagnóstico (e tem risco).",
    "reference": "ASBAI/SBP — Consenso brasileiro sobre alergia alimentar (2018)",
    "tags": [
      "alergia",
      "alergia alimentar",
      "anafilaxia",
      "aleitamento materno"
    ],
    "tip": "Alergia a ovo: tríplice viral e influenza podem ser dadas normalmente."
  },
  {
    "id": "hiae2025-37",
    "module": "Pediatria",
    "text": "J.P.G. é um menino de 10 anos que apresenta histórico de infecções respiratórias bacterianas frequentes desde os 3 anos de idade, incluindo sinusites, otites médias e dois episódios de pneumonia comunitária. Há cerca de 2 anos, mantém tratamento regular para asma (corticoide inalatório em baixas doses associado a broncodilatador de longa duração) e corticoide tópico nasal para os sintomas da rinite alérgica. Nos últimos 6 meses, apresentou episódios recorrentes de diarreia, com resultado positivo para o antígeno de Giardia lamblia. Ao exame físico, encontra-se no escore z de zero (IMC), sinais de infecção respiratória superior; à inspeção abdominal, leve distensão e aumento do ruído hidroaéreo, sem visceromegalias ou linfadenopatia visível. Carteira vacinal completa. Considerando as principais hipóteses etiológicas que justifiquem os sintomas de J.P.G, assinale a alternativa que apresenta apenas instrumentos laboratoriais relevantes para a investigação.",
    "options": [
      "(A) Hemograma, imunofenotipagem, tomografia de seios da face.",
      "(B) Dosagem de imunoglobulinas e sorologia para anticorpos polissacarídeos.",
      "(C) Sorologia para anticorpos proteicos, dosagem de IgE específica para aeroalérgenos.",
      "(D) Espirometria, painel genético para deficiência de fagócitos, subpopulações de linfócitos."
    ],
    "correctAnswer": 1,
    "explanation": "Infecções bacterianas recorrentes do trato respiratório (sinusite, otite, pneumonia) e giardíase de repetição sugerem imunodeficiência humoral (deficiência de anticorpos: IgA, imunodeficiência comum variável). A investigação inicial é dosar imunoglobulinas (IgG, IgA, IgM) e avaliar a resposta a antígenos vacinais polissacarídicos (anti-pneumococo).",
    "commentary": "Imunofenotipagem e TC de seios (A): tomografia não é exame laboratorial e não define a etiologia.\n\nIgE específica para aeroalérgenos (C): avalia alergia, não imunodeficiência.\n\nEspirometria e fagócitos (D): espirometria não é laboratorial; o padrão (bactérias encapsuladas e Giardia) aponta para defeito de anticorpos, não de fagócitos.",
    "reference": "ASBAI — Imunodeficiências primárias / 10 sinais de alerta para imunodeficiência primária",
    "tags": [
      "imunologia",
      "imunodeficiência humoral",
      "infecções de repetição",
      "giardíase"
    ],
    "tip": "Infecção bacteriana respiratória de repetição + Giardia: dosar imunoglobulinas."
  },
  {
    "id": "hiae2025-38",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Em uma consulta pediátrica de rotina, o médico avalia o estadiamento puberal de um menino de 12 anos. Ao exame físico, observa testículos com volume dentro da normalidade para a idade e escroto com leve pigmentação; pequenas quantidades de pelos ao redor do pênis. Diante dos achados clínicos, qual é a análise correta sobre a maturação sexual do paciente?",
    "options": [
      "(A) Estádio II de Tanner, considerado normal para a idade de 12 anos.",
      "(B) Estádio I de Tanner (fase pré-púbere), exigindo monitoramento do caso.",
      "(C) Estádio III de Tanner, compatível com quadro de puberdade precoce.",
      "(D) A maturação sexual só pode ser estabelecida em associação com os níveis hormonais (testosterona)."
    ],
    "correctAnswer": 0,
    "explanation": "Testículos aumentando de volume, escroto com leve pigmentação/alteração da pele e poucos pelos na base do pênis: estádio II de Tanner (G2P2), compatível com o início puberal normal nos meninos (9 a 14 anos).",
    "commentary": "Estádio I (B): pré-púbere, sem pelos nem alteração escrotal.\n\nEstádio III com puberdade precoce (C): no estádio III o pênis cresce em comprimento; e precocidade em meninos é antes dos 9 anos.\n\nNecessidade de testosterona (D): o estadiamento de Tanner é clínico.",
    "reference": "SBP — Crescimento e puberdade / Tanner e Marshall",
    "tags": [
      "pediatria",
      "puberdade",
      "estadiamento de Tanner",
      "adolescência"
    ]
  },
  {
    "id": "hiae2025-39",
    "module": "Pediatria",
    "text": "Recém-nascido a termo e adequado para a idade gestacional (39 semanas) apresenta hipotonia e apneia logo após o nascimento. Realizados clampeamento imediato do cordão umbilical e transferência para o berço aquecido. Após as manobras iniciais, verificou-se FC = 80 bpm e ausência de respiração espontânea; iniciada ventilação com pressão positiva (VPP) com máscara facial e balão autoinflável em ar ambiente. Após 30 segundos de VPP, constatou-se FC = 60 bpm e respiração irregular. Qual é a medida indicada neste caso?",
    "options": [
      "(A) Ofertar O₂ suplementar à VPP.",
      "(B) Corrigir o escape da máscara facial e repetir a VPP.",
      "(C) Proceder com a intubação traqueal.",
      "(D) Iniciar massagem cardíaca."
    ],
    "correctAnswer": 1,
    "explanation": "Após 30 segundos de ventilação com pressão positiva, a FC caiu (80 → 60 bpm): a ventilação não está sendo efetiva. Antes de oxigênio, intubação ou massagem, corrigem-se os problemas técnicos (MR SOPA): ajustar a máscara (escape), reposicionar a cabeça, aspirar, abrir a boca, aumentar a pressão e considerar via aérea alternativa. Depois repete-se a VPP.",
    "commentary": "Acrescentar O₂ (A): o problema é a ventilação ineficaz.\n\nIntubação (C): é considerada se a VPP com máscara continuar ineficaz após correção da técnica.\n\nMassagem cardíaca (D): só com FC < 60 bpm após 30 segundos de VPP efetiva (com via aérea adequada).",
    "reference": "SBP — Programa de Reanimação Neonatal (2022)",
    "tags": [
      "neonatologia",
      "reanimação neonatal",
      "ventilação com pressão positiva",
      "MR SOPA"
    ],
    "tip": "VPP sem melhora: antes de escalar, confira a técnica (MR SOPA)."
  },
  {
    "id": "hiae2025-40",
    "topography": "1.3",
    "topic": "Amigdalite/faringoamigdalite",
    "module": "Pediatria",
    "text": "Pré-escolar de 3 anos com episódios recorrentes de febre alta (acima de 39 °C), com duração de 3 a 5 dias, associados a dor de garganta, estomatite aftosa e adenite cervical. Os episódios ocorrem aproximadamente a cada 4 a 6 semanas, desde os 2 anos de idade, aparentemente sem relação com infecções respiratórias; a criança se mantém assintomática nos intervalos. Neste momento, a paciente encontra-se em atendimento médico por estar na vigência de febre (39,2 °C). Exame físico revela eutrofia, bom estado geral apesar da febre alta, ausculta pulmonar e cardíaca normais; abdome flácido, sem visceromegalias. Orofaringe: hiperemia difusa, presença de úlceras aftosas no palato e na mucosa oral. Adenomegalia em região cervical anterior bilateral, dolorosa, medindo aproximadamente 2 cm de diâmetro. Diante da principal hipótese diagnóstica, qual é o manejo adequado?",
    "options": [
      "(A) Substituir o antipirético usual por ibuprofeno.",
      "(B) Indicar adenoamidalectomia.",
      "(C) Administrar dose única de prednisona (1 – 2 mg/kg) ou de betametasona (0,1 – 0,2 mg/kg).",
      "(D) Manter antitérmicos de horário e iniciar profilaxia com colchicina."
    ],
    "correctAnswer": 2,
    "explanation": "Febre periódica (a cada 4–6 semanas) com estomatite aftosa, faringite e adenite cervical, assintomática entre as crises e com bom crescimento: síndrome PFAPA. O tratamento da crise é uma dose única de corticoide (prednisona 1–2 mg/kg ou betametasona), que encerra a febre em poucas horas.",
    "commentary": "Ibuprofeno (A): não muda a evolução da crise.\n\nAdenoamigdalectomia (B): pode ser considerada em casos selecionados que não respondem, não de início.\n\nColchicina (D): pode ser profilaxia para reduzir a frequência das crises, mas o manejo da crise é corticoide.",
    "reference": "SBP / Sociedade Brasileira de Reumatologia — PFAPA",
    "tags": [
      "pediatria",
      "PFAPA",
      "febre periódica",
      "corticoide"
    ],
    "tip": "Febre periódica + aftas + faringite + adenite: PFAPA; corticoide em dose única."
  },
  {
    "id": "hiae2025-41",
    "module": "Pediatria",
    "text": "Pré-escolar de 5 anos, sexo masculino, com quadro de claudicação, dor na perna direita e redução da mobilidade há 24 h. Seu estado geral é bom, sem febre ou sinais de toxemia. Há uma semana apresentou quadro gripal com duração de 5 dias e melhora espontânea, com administração de sintomáticos. Ao exame físico, encontra-se em posição antálgica do joelho direito e rotação externa do membro inferior ipsilateral, sem outras alterações. A abordagem diagnóstico-terapêutica neste caso deve ser:",
    "options": [
      "(A) antibioticoterapia com cobertura para S. pyogenes.",
      "(B) sintomáticos para alívio dos sintomas.",
      "(C) tomografia computadorizada do quadril.",
      "(D) ultrassonografia para avaliar deslizamento epifisário."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 3 a 10 anos com claudicação aguda, após infecção viral, sem febre, em bom estado e com posição antálgica do quadril (flexão e rotação externa): sinovite transitória do quadril, a causa mais comum de dor no quadril na infância. O tratamento é sintomático (anti-inflamatório e repouso), com resolução em poucos dias.",
    "commentary": "Antibiótico (A): artrite séptica teria febre, toxemia, recusa em apoiar e marcadores inflamatórios elevados (critérios de Kocher).\n\nTomografia (C): sem indicação.\n\nDeslizamento epifisário (D): ocorre em adolescentes, frequentemente obesos; a imagem seria radiografia.",
    "reference": "SBOT — Sinovite transitória do quadril / Critérios de Kocher",
    "tags": [
      "ortopedia pediátrica",
      "sinovite transitória",
      "claudicação",
      "quadril"
    ],
    "tip": "Claudicação pós-viral, sem febre, criança bem: sinovite transitória."
  },
  {
    "id": "hiae2025-42",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Escolar de 8 anos de idade apresenta crises de sibilância desde os 2 anos, com melhora após o uso de salbutamol de resgate. Foi atendido por pediatra que solicitou espirometria, a qual evidenciou distúrbio ventilatório obstrutivo leve com prova broncodilatadora positiva. Quatro semanas após iniciar tratamento com beclometasona inalatória em baixa dose, paciente ainda refere ter apresentado falta de ar durante atividades físicas e necessidade de broncodilatador de resgate em média 3 vezes na semana para controle de sintomas diurnos. Após verificação da técnica inalatória e adesão, o próximo passo, de acordo com as orientações do GINA, deve ser",
    "options": [
      "(A) substituir a beclometasona pela associação formoterol-budesonida inalatória em baixa dose diária.",
      "(B) dobrar a dose de beclometasona e substituir o salbutamol de resgate pela combinação formoterol-budesonida inalatória em baixa dose apenas nas crises.",
      "(C) manter a beclometasona inalatória diária na dose prescrita e o salbutamol inalatório nas crises e associar montelucaste oral diário.",
      "(D) suspender a beclometasona e o salbutamol e prescrever a combinação formoterol budesonida inalatória em baixa dose apenas nas crises."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 8 anos com asma não controlada (resgate 3 vezes por semana) após 4 semanas com corticoide inalatório em dose baixa e técnica e adesão corrigidas. Pelo GINA para 6–11 anos, o próximo passo (step 3) é budesonida-formoterol em dose baixa de manutenção (podendo usar como alívio — MART), ou dobrar o corticoide inalatório para dose média.",
    "commentary": "Dobrar a dose e usar budesonida-formoterol só nas crises (B): mistura duas estratégias diferentes.\n\nMontelucaste (C): é opção menos eficaz.\n\nSuspender a manutenção e usar budesonida-formoterol só nas crises (D): é recomendação para maiores de 12 anos com asma leve; seria redução de tratamento num quadro não controlado.",
    "reference": "GINA 2024 / SBP — Asma",
    "tags": [
      "pediatria",
      "asma",
      "GINA",
      "budesonida-formoterol"
    ],
    "tip": "Asma 6–11 anos não controlada com CI baixo: CI + LABA em dose baixa (ou CI em dose média)."
  },
  {
    "id": "hiae2025-43",
    "module": "Pediatria",
    "text": "Lactente de 6 meses de idade comparece à unidade de pronto atendimento com queixa de febre há 72 horas, acompanhada de tosse e secreção nasal. Ao exame encontra-se irritado, em regular estado geral, com hiperemia conjuntival intensa e secreção ocular, otoscopia com membranas timpânicas opacas e hiperemiadas bilateralmente sem abaulamento, presença de linfonodos cervicais anteriores bilaterais de 1 a 1,5 cm móveis e fibroelásticos, exantema maculopapular difuso em tronco, membros e face. Ausculta respiratória com murmúrios vesiculares universalmente audíveis com roncos difusos. Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas sem sopros. Abdômen flácido e indolor à palpação. Considerando a principal hipótese diagnóstica, a conduta adequada é:",
    "options": [
      "(A) notificação compulsória imediata do caso.",
      "(B) internação e solicitação de ecocardiograma; início de AAS e imunoglobulina endovenosa.",
      "(C) prescrição de amoxicilina oral por 10 dias.",
      "(D) realização de prova do laço."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente com febre, tosse, coriza, conjuntivite intensa e exantema maculopapular que começa na face e se espalha: sarampo até prova em contrário. É doença de notificação compulsória imediata (em até 24 horas), para investigação e bloqueio vacinal dos contatos. Também se coleta sorologia, swab e urina e se administra vitamina A.",
    "commentary": "Kawasaki (B): febre ≥ 5 dias com conjuntivite não exsudativa, alterações de lábios e extremidades; aqui há secreção ocular e quadro catarral.\n\nAmoxicilina (C): a otite não tem abaulamento, e o quadro é viral.\n\nProva do laço (D): é da dengue, que não cursa com coriza e conjuntivite intensas.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: Sarampo",
    "tags": [
      "pediatria",
      "sarampo",
      "notificação compulsória",
      "doenças exantemáticas"
    ],
    "tip": "Febre + exantema + tosse/coriza/conjuntivite = sarampo: notificar em 24 h."
  },
  {
    "id": "hiae2025-44",
    "topography": "11",
    "topic": "Obesidade infantil",
    "module": "Pediatria",
    "text": "Adolescente de 12 anos, sexo feminino, comparece à consulta de rotina com pediatra. Apresenta desenvolvimento puberal em estágio M3P3 de Tanner e IMC representado no gráfico a seguir. Considerando a avaliação nutricional dessa paciente, a conduta adequada é:",
    "options": [
      "(A) solicitar dosagem de LDL para rastreio do diagnóstico de síndrome metabólica.",
      "(B) recomendar a prática de, no mínimo, 30 minutos de atividade física moderada diariamente.",
      "(C) recomendar orientação nutricional e manutenção do peso, e não a sua redução, em vista do desenvolvimento puberal ainda incompleto.",
      "(D) solicitar ultrassonografia abdominal para rastreio de doença gordurosa não alcoólica do fígado."
    ],
    "correctAnswer": 3,
    "explanation": "O ponto no gráfico de IMC por idade está acima do escore Z +3: obesidade grave. Adolescentes com obesidade grave devem ser rastreados para comorbidades, entre elas a doença hepática esteatótica (MASLD), que se rastreia com ALT e pode ser complementada com ultrassonografia abdominal.",
    "commentary": "LDL para síndrome metabólica (A): os critérios pediátricos usam triglicerídeos e HDL, não LDL.\n\n30 minutos de atividade física (B): para crianças e adolescentes, a recomendação é de pelo menos 60 minutos diários.\n\nApenas manter o peso (C): com obesidade grave, a meta é redução gradual do IMC.\n\nObservação: diretrizes (AAP 2023) preferem ALT para o rastreio de esteatose; a ultrassonografia é complementar.",
    "reference": "SBP — Obesidade na infância e adolescência (2019) / AAP 2023",
    "tags": [
      "pediatria",
      "obesidade infantil",
      "doença hepática esteatótica",
      "adolescência"
    ],
    "image": "/images/hiae2025-44.webp",
    "tip": "Escore Z de IMC > +3 = obesidade grave: rastreie comorbidades."
  },
  {
    "id": "hiae2025-45",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Lactente de 6 meses comparece à consulta na Unidade Básica de Saúde, onde é verificado que nunca recebeu nenhuma imunização. Para atualização do cartão vacinal segundo o Programa Nacional de Imunização, o adequado é aplicar",
    "options": [
      "(A) BCG, dose única; Poliomielite Inativada (VIP), 3 doses, com 2 meses de intervalo; Rotavírus (VORH), 2 doses, com 2 meses de intervalos; Pentavalente (Difteria + Tétano + Pertussis + Hepatite B + Haemophilus tipo B), 3 doses, com 2 meses de intervalo, Meningococo C, 2 doses, com 60 dias de intervalos; Pneumococo-10, 3 doses, com 60 dias de intervalo.",
      "(B) BCG, dose única; VIP, 3 doses, com 2 meses de intervalo; Pentavalente, 3 doses, com 60 dias de intervalo; Meningococo-C 2, doses, com 60 dias de intervalo; Pneumococo-10, 2 doses, com 60 dias de intervalo; Covid-19, 2 doses, com 4 semanas de intervalo.",
      "(C) Poliomielite Oral (VOP), 3 doses, com 2 meses de intervalo; Pentavalente, 3 doses, com 2 meses de intervalo; Meningococo-C, 2 doses, com 60 dias de intervalo; Pneumococo-10, 2 doses, com 60 dias de intervalo; Covid-19, 2 doses, com 4 semanas de intervalo.",
      "(D) BCG, dose única; Rotavírus, dose única; VIP, 3 doses; DTP (Difteria + Tétano + Pertussis), 3 doses, com 2 meses de intervalo; Meningococo-C, 2 doses, com 60 dias de intervalo; Pneumococo-10, 2 doses, com 60 dias de intervalo; Covid-19, 2 doses, com 4 semanas de intervalo."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 6 meses nunca vacinado. Deve-se iniciar o esquema conforme o calendário: BCG (dose única, até 5 anos); VIP 3 doses; pentavalente 3 doses com intervalo de 60 dias; meningocócica C 2 doses; pneumocócica 10-valente 2 doses (no esquema de resgate); e Covid-19 (incorporada ao calendário infantil). A vacina rotavírus não pode mais ser feita: a 1ª dose só até 3 meses e 15 dias.",
    "commentary": "Rotavírus (A e D): passou da idade máxima para a 1ª dose.\n\nVOP (C): foi substituída pela VIP no esquema primário; e falta a BCG.\n\nDTP no lugar da pentavalente (D): a pentavalente é a vacina do primeiro ano.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação (2024)",
    "tags": [
      "pediatria",
      "imunização",
      "calendário vacinal",
      "atraso vacinal"
    ],
    "tip": "Rotavírus: 1ª dose até 3 meses e 15 dias; 2ª dose até 7 meses e 29 dias."
  },
  {
    "id": "hiae2025-46",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 30 anos, antecedente de hipotireoidismo e hipertensão crônica, encontra-se na\n\nprimeira hora do puerpério de parto vaginal gemelar sob analgesia. O peso dos neonatos foi de 2430 g e 2290 g. Subitamente passa a apresentar sangramento genital em moderada quantidade. Quais medidas iniciais devem ser realizadas?",
    "options": [
      "(A) Misoprostol via retal, ergotamina IM e solicitar balão de tamponamento uterino.",
      "(B) Estimativa de perda sanguínea, avaliação do índice de choque e solicitar ajuda.",
      "(C) Ácido tranexâmico, transfusão sanguínea e ligadura de artérias hipogástricas.",
      "(D) Infusão de ocitocina IV, ergotamina IM e resfriamento abdominal."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento logo após parto gemelar (fator de risco para atonia): suspeita de hemorragia pós-parto. A abordagem inicial é organizada: estimar a perda sanguínea, calcular o índice de choque (FC/PAS ≥ 0,9 indica perda importante) e pedir ajuda (acionar a equipe e o código de HPP). Em seguida vêm as medidas da 'hora de ouro': massagem uterina, ocitocina, ácido tranexâmico nas primeiras 3 horas e reposição volêmica.",
    "commentary": "Misoprostol, ergotamina e balão (A): medidas de segunda linha; a ergotamina é contraindicada em hipertensas.\n\nTransfusão e ligadura de hipogástricas (C): são etapas avançadas, para casos refratários.\n\nOcitocina, ergotamina e resfriamento (D): a ergotamina é contraindicada (hipertensão crônica) e o resfriamento abdominal não tem papel.",
    "reference": "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "tags": [
      "obstetrícia",
      "hemorragia pós-parto",
      "índice de choque",
      "atonia uterina"
    ],
    "tip": "HPP: peça ajuda, estime a perda e calcule o índice de choque (≥ 0,9 = alerta)."
  },
  {
    "id": "hiae2025-47",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Parturiente de 39 semanas, 22 anos, é submetida à pelvimetria clínica. Observam-se uma pelve ovalada, com reduzido diâmetro anteroposterior do estreito superior, espinhas isquiáticas proeminentes e ângulo subpúbico com grande amplitude. A insinuação fetal foi observada no diâmetro transverso. O tipo mais provável de pelve é:",
    "options": [
      "(A) ginecoide.",
      "(B) androide.",
      "(C) antropoide.",
      "(D) platipeloide."
    ],
    "correctAnswer": 3,
    "explanation": "Pelve com diâmetro anteroposterior reduzido do estreito superior (forma achatada, ovalada transversalmente), ângulo subpúbico amplo e insinuação no diâmetro transverso: pelve platipeloide (a menos comum).",
    "commentary": "Ginecoide (A): estreito superior arredondado, a mais comum e favorável, com insinuação em diâmetros oblíquos ou transverso.\n\nAndroide (B): forma triangular (de coração), espinhas proeminentes e ângulo subpúbico estreito.\n\nAntropoide (C): diâmetro anteroposterior maior que o transverso, com insinuação em occipitopúbica.",
    "reference": "Rezende — Obstetrícia / Zugaib Obstetrícia",
    "tags": [
      "obstetrícia",
      "bacia obstétrica",
      "pelvimetria",
      "classificação de Caldwell-Moloy"
    ],
    "tip": "Platipeloide = achatada (AP curto, insinua em transverso)."
  },
  {
    "id": "hiae2025-48",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos comparece à consulta obstétrica pré-concepção. Encontra-se com obesidade grau I e diabetes tipo 2 há 8 anos, em uso de metformina. Os exames realizados recentemente mostram funções renal e cardíaca adequadas, fundo de olho sem alterações e hemoglobina glicada de 9,6 %. O quadro em questão pode elevar o risco das seguintes anomalias fetais:",
    "options": [
      "(A) agenesia renal e deleção de falanges.",
      "(B) hipertelorismo e implantação baixa de orelha.",
      "(C) cisto de plexo coroide e estenose uretral.",
      "(D) defeito de septo interventricular e síndrome da regressão caudal."
    ],
    "correctAnswer": 3,
    "explanation": "Diabetes pré-gestacional mal controlado (HbA1c 9,6%) na concepção aumenta o risco de malformações, proporcional à hiperglicemia na organogênese. As mais associadas são cardíacas (comunicação interventricular, transposição das grandes artérias), defeitos do tubo neural e a síndrome da regressão caudal, mais característica do diabetes materno. Recomenda-se HbA1c < 6,5% antes de engravidar.",
    "commentary": "Agenesia renal e falanges (A), hipertelorismo e implantação baixa de orelhas (B), cisto de plexo coroide e estenose uretral (C): não são associações típicas do diabetes; cisto de plexo coroide e dismorfismos faciais lembram aneuploidias.",
    "reference": "Sociedade Brasileira de Diabetes — Diabetes na gestação / Febrasgo",
    "tags": [
      "obstetrícia",
      "diabetes pré-gestacional",
      "malformações congênitas",
      "regressão caudal"
    ],
    "tip": "Diabetes pré-gestacional: cardiopatia, tubo neural e regressão caudal."
  },
  {
    "id": "hiae2025-49",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente IIGIPN, 35 anos, primeira gestação com o atual parceiro, apresenta-se na 35ª semana gestacional com PA: 173 x 121 mmHg, confirmada após repouso em DLE, dor epigástrica e náuseas. A melhor conduta é:",
    "options": [
      "(A) internação, coleta de exames da rotina hipertensiva, hidralazina, sulfato de magnésio e realização de cesariana.",
      "(B) internação, coleta de exames da rotina hipertensiva, metildopa, corticoide, sulfato de magnésio e indução do parto após a estabilização.",
      "(C) internação, coleta de exames da rotina hipertensiva, hidralazina, sulfato de magnésio e indução do parto após a estabilização.",
      "(D) internação, coleta de exames da rotina hipertensiva, hidralazina e indução do parto após a estabilização."
    ],
    "correctAnswer": 2,
    "explanation": "Com 35 semanas, PA grave (173x121) e sintomas de iminência de eclâmpsia (epigastralgia, náuseas): pré-eclâmpsia com sinais de gravidade. Conduta: internação, exames (hemograma, plaquetas, enzimas hepáticas, creatinina, LDH), anti-hipertensivo de ação rápida (hidralazina IV ou nifedipina oral), sulfato de magnésio para prevenir convulsão e interrupção da gestação após estabilização — a via é obstétrica, e a indução é possível.",
    "commentary": "Cesariana direta (A): a pré-eclâmpsia não indica cesárea por si só.\n\nMetildopa e corticoide (B): metildopa não serve para crise hipertensiva, e o corticoide para maturação não é indicado após 34 semanas.\n\nSem sulfato de magnésio (D): falta a prevenção da eclâmpsia, obrigatória com sinais de gravidade.",
    "reference": "Febrasgo / RBEHG — Pré-eclâmpsia (2023)",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "sulfato de magnésio",
      "crise hipertensiva"
    ],
    "tip": "Pré-eclâmpsia grave ≥ 34 sem: anti-hipertensivo rápido + sulfato de magnésio + parto após estabilizar."
  },
  {
    "id": "hiae2025-50",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 40 anos, nuligesta, submetida à exérese da zona de transformação do tipo 3, comparece para resultado de estudo anatomopatológico que revelou: lesão intraepitelial escamosa de alto grau com extensão para criptas endocervicais em todos os quadrantes, presença de área de invasão estromal 1.6 mm sem invasão linfo-vascular, margens cirúrgicas livres de neoplasia. Qual é a conduta mais adequada neste caso?",
    "options": [
      "(A) Caso a paciente seja desejosa de gestação, é possível conduta conservadora com traquelectomia e histerectomia após prole completa.",
      "(B) Caso a paciente seja desejosa de gestação, mesmo com doença invasora no produto da exérese, é possível manter controle rigoroso com citologia e colposcopia.",
      "(C) Como a paciente tem idade avançada para gestação, com provável baixa reserva ovariana, e doença invasora, não se recomenda conduta conservadora.",
      "(D) A conduta conservadora pode ser mantida se houver negativação do teste de DNA HPV, no primeiro controle, 6 meses após a exérese da zona de transformação."
    ],
    "correctAnswer": 1,
    "explanation": "Invasão estromal de 1,6 mm (< 3 mm), sem invasão linfovascular e com margens livres na conização: carcinoma microinvasor estádio IA1 (FIGO). A conização com margens livres é tratamento suficiente para quem deseja preservar a fertilidade, com seguimento rigoroso por citologia e colposcopia (e teste de HPV).",
    "commentary": "Traquelectomia (A): indicada para estádios IA2 a IB1 com desejo reprodutivo; no IA1 sem invasão linfovascular, a conização basta.\n\nIdade e reserva ovariana (C): não contraindicam o tratamento conservador; é decisão da paciente.\n\nDepende do teste de HPV (D): o teste orienta o seguimento, mas a conduta conservadora já se justifica pelas margens livres.",
    "reference": "FIGO 2018 — Estadiamento do câncer do colo / NCCN Cervical Cancer",
    "tags": [
      "ginecologia",
      "câncer de colo uterino",
      "microinvasão",
      "conização"
    ],
    "tip": "IA1 sem invasão linfovascular com margens livres: conização basta para preservar a fertilidade."
  },
  {
    "id": "hiae2025-51",
    "module": "Ginecologia e Obstetrícia",
    "text": "Homem transgênero de 25 anos, ainda não submetido à cirurgia de redesignação de gênero, comparece à consulta com queixa de corrimento e prurido genital intenso. Em amenorreia desde o início do uso de testosterona há 6 meses. Ao exame físico cuidadoso, presença de escoriações em vulva, conteúdo vaginal amarelo fluido abundante, hipotrofismo e presença de múltiplas diminutas erosões esparsas, orifício externo do colo puntiforme, pH alcalino. A hipótese diagnóstica mais provável é:",
    "options": [
      "(A) vaginose bacteriana.",
      "(B) tricomoníase.",
      "(C) vaginite aeróbia.",
      "(D) vaginose citolítica."
    ],
    "correctAnswer": 2,
    "explanation": "Homem trans em uso de testosterona (hipoestrogenismo, com vagina atrófica) com corrimento amarelo abundante, prurido, erosões na mucosa e pH alcalino: vaginite aeróbia (ou vaginite inflamatória descamativa), associada a atrofia e redução de lactobacilos, com flora aeróbia (estreptococos, E. coli). O tratamento usa clindamicina tópica e estrogênio local.",
    "commentary": "Vaginose bacteriana (A): não causa inflamação nem erosões; o corrimento é homogêneo, cinza e com odor.\n\nTricomoníase (B): pode ter corrimento amarelo e colpite, mas o contexto de atrofia por testosterona com erosões e sem IST descrita favorece vaginite aeróbia (o diferencial se faz pela microscopia).\n\nVaginose citolítica (D): pH ácido e sem inflamação.",
    "reference": "Febrasgo — Vulvovaginites / ISSVD",
    "tags": [
      "ginecologia",
      "vaginite aeróbia",
      "pessoas trans",
      "atrofia vaginal"
    ]
  },
  {
    "id": "hiae2025-52",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 28 anos vem para acompanhamento após 6 meses de resultado de Papanicolau com lesão intraepitelial escamosa de baixo grau. Refere ter sido vacinada com esquema completo contra HPV na adolescência. O resultado atual da citologia oncótica cérvico vaginal revela atipia de células escamosas de significado indeterminado (ASC-US). Assinale a alternativa que apresenta recomendação correta de acordo com as diretrizes brasileiras para o rastreamento do câncer do colo do útero (2016).",
    "options": [
      "(A) Como a paciente é menor de 30 anos, repetir a citologia em 12 meses.",
      "(B) Como o segundo resultado de citologia é alterado, colposcopia com biópsia dirigida.",
      "(C) Se disponível, genotipagem com DNA HPV para elucidar ASC US.",
      "(D) Como a paciente é imunizada e menor do que 30 anos, manter acompanhamento anual."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas Diretrizes Brasileiras de Rastreamento (2016), diante de LSIL em mulher ≥ 25 anos repete-se a citologia em 6 meses; se a repetição mostrar qualquer alteração (inclusive ASC-US), encaminha-se para colposcopia com biópsia dirigida, se houver achado anormal.",
    "commentary": "Repetir em 12 meses (A) ou manter anual (D): após LSIL, a citologia alterada novamente exige colposcopia; a vacinação não muda o fluxo.\n\nGenotipagem de HPV (C): não faz parte do fluxo das diretrizes de 2016.",
    "reference": "INCA — Diretrizes brasileiras para o rastreamento do câncer do colo do útero (2016)",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer de colo uterino",
      "citologia oncótica"
    ],
    "tip": "LSIL: repete em 6 meses; alterada de novo → colposcopia."
  },
  {
    "id": "hiae2025-53",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa correta em relação ao manejo pré-natal de gestante com tipagem sanguínea Rh negativo, aloimunizada.",
    "options": [
      "(A) A pesquisa do Rh fetal no sangue materno, quando realizada a partir de 10 semanas de gestação, apresenta acurácia de cerca de 85%.",
      "(B) Diante de teste de Coombs indireto positivo, é necessária a pesquisa de anticorpos irregulares com identificação e determinação dos títulos.",
      "(C) A vasodilatação cerebral fetal demonstrada no exame dopplervelocimétrico é marcador precoce de anemia moderada/grave.",
      "(D) A administração de imunoglobulina anti-D, no início do terceiro trimestre, diminui a chance de piora da sensibilização materna e de anemia fetal grave."
    ],
    "correctAnswer": 1,
    "explanation": "Na gestante Rh negativo com Coombs indireto positivo, é preciso identificar o anticorpo e medir seu título (pesquisa de anticorpos irregulares). Anti-D com título ≥ 1:16 (ou outro anticorpo clinicamente relevante) indica seguimento com Doppler da artéria cerebral média para detectar anemia fetal.",
    "commentary": "Rh fetal com acurácia de 85% (A): a genotipagem fetal em sangue materno tem acurácia acima de 95–99% a partir de 10 semanas.\n\nVasodilatação cerebral como marcador precoce (C): o aumento do pico de velocidade sistólica na cerebral média indica anemia moderada/grave, mas não é marcador precoce.\n\nAnti-D na já aloimunizada (D): não traz benefício; a imunoglobulina só previne a sensibilização.",
    "reference": "Febrasgo — Aloimunização Rh / Ministério da Saúde — Gestação de alto risco",
    "tags": [
      "obstetrícia",
      "aloimunização Rh",
      "coombs indireto",
      "anemia fetal"
    ],
    "tip": "Coombs indireto positivo: identifique e titule o anticorpo; ≥ 1:16 → Doppler de cerebral média."
  },
  {
    "id": "hiae2025-54",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante com sorologias de sífilis não reagentes, no início do pré-natal, retorna na 28ª semana com teste treponêmico positivo. É correto afirmar que",
    "options": [
      "(A) se trata de caso de sífilis em gestante, em fase latente tardia.",
      "(B) pode ser um resultado falso positivo, especialmente se o título for menor ou igual a 1/4.",
      "(C) o tratamento consiste em benzilpenicilina benzatina na dose de 2,4 milhões UI, intramuscular, 1 x/semana por 3 semanas.",
      "(D) após o tratamento, o aumento do título do VDRL, em duas diluições, indica retratamento."
    ],
    "correctAnswer": 3,
    "explanation": "Sorologia negativa no início do pré-natal e teste treponêmico positivo com 28 semanas: sífilis recente (soroconversão), não latente tardia. O tratamento depende do estágio, e o seguimento é feito com VDRL mensal na gestante. Aumento de duas diluições ou mais no VDRL após o tratamento (ex.: 1:4 → 1:16) indica reinfecção ou falha, com necessidade de retratamento.",
    "commentary": "Latente tardia (A): a soroconversão durante o pré-natal indica infecção recente.\n\nFalso positivo com título ≤ 1:4 (B): o título se refere ao VDRL, não ao teste treponêmico; na gestante, qualquer teste reagente é tratado.\n\n3 doses semanais (C): é o esquema da sífilis latente tardia ou de duração ignorada; na sífilis recente, a dose é única.",
    "reference": "Ministério da Saúde — PCDT de Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "obstetrícia",
      "sífilis na gestação",
      "VDRL",
      "retratamento"
    ],
    "tip": "Após tratar sífilis: subir 2 diluições no VDRL = retratar."
  },
  {
    "id": "hiae2025-55",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 28 anos, com atraso menstrual de 7 semanas, refere sangramento vaginal associado a dor em baixo ventre. Assinale a alternativa que indica a associação correta entre achados adicionais e hipótese diagnóstica.",
    "options": [
      "(A) Dosagem de beta-hCG sérico de 1200 mUI/mL e ultrassonografia transvaginal, demonstrando saco gestacional de 10 mm no interior da cavidade uterina; ameaça de aborto.",
      "(B) Exame clínico demonstrando colo pérvio no toque digital, sem visualização de saída de restos ovulares no exame especular; ameaça de aborto.",
      "(C) Ultrassonografia transvaginal demonstrando embrião de 5 mm, sem batimentos cardíacos; gestação não evolutiva.",
      "(D) Dosagem de beta-hCG sérico de 4000 mUI/mL, colo impérvio ao toque vaginal e ultrassonografia transvaginal com cavidade uterina vazia; aborto incompleto."
    ],
    "correctAnswer": 0,
    "explanation": "Saco gestacional intrauterino de 10 mm, beta-hCG compatível, sangramento com dor e sem outros achados (o enunciado não descreve colo aberto): ameaça de aborto. A ultrassonografia deve ser repetida para acompanhar a evolução.",
    "commentary": "Colo pérvio sem restos (B): colo aberto indica aborto inevitável/em curso, não ameaça.\n\nEmbrião de 5 mm sem batimento (C): só se fecha gestação não evolutiva com embrião ≥ 7 mm sem atividade cardíaca.\n\nCavidade vazia com beta-hCG de 4.000 (D): acima da zona discriminatória, sugere gestação ectópica (ou aborto completo), não incompleto.",
    "reference": "Febrasgo — Abortamento / SRU 2013 — Critérios de gestação não evolutiva",
    "tags": [
      "obstetrícia",
      "abortamento",
      "ameaça de aborto",
      "ultrassonografia"
    ],
    "tip": "Gestação não evolutiva: embrião ≥ 7 mm sem BCF ou saco ≥ 25 mm sem embrião."
  },
  {
    "id": "hiae2025-56",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 52 anos, sem histórico familiar de câncer de mama, apresentou-se com massa palpável na mama esquerda há aproximadamente 2 meses. Os exames de imagem revelaram lesão espiculada de 1,7 cm na mama esquerda (Bi-Rads 5). A avaliação clínica e ultrassonográfica da axila não mostrou evidências de comprometimento linfonodal. A biópsia por agulha grossa diagnosticou carcinoma invasivo do tipo não especial (SOE), grau histológico 3. A imuno-histoquímica da neoplasia mostrou receptores de estrogênio e progesterona negativos, Ki-67 de 70% e HER2 positivo (3+). Assinale a alternativa que apresenta a melhor abordagem terapêutica para esta paciente.",
    "options": [
      "(A) Mastectomia com pesquisa de linfonodo sentinela e reconstrução imediata com prótese de silicone, seguida de quimioterapia adjuvante e terapia alvo anti-HER2 (trastuzumabe).",
      "(B) Cirurgia conservadora (quadrantectoma) com pesquisa de linfonodo sentinela, seguida de quimioterapia adjuvante, terapia alvo anti-HER2 (trastuzumabe) e radioterapia.",
      "(C) Quimioterapia neoadjuvante com duplo bloqueio anti-HER2 (trastuzumabe e pertuzumabe), seguida de cirurgia conservadora (quadrantectomia) com pesquisa de linfonodo sentinela e tamoxifeno por 5 anos.",
      "(D) Cirurgia conservadora (quadrantectomia) com pesquisa de linfonodo sentinela, seguida de quimioterapia adjuvante, terapia alvo anti-HER2 (trastuzumabe), radioterapia e tamoxifeno por 5 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Carcinoma de mama HER2 positivo e receptores hormonais negativos, de 1,7 cm (T1c), sem linfonodos clinicamente comprometidos. Para tumores HER2+ com até 2 cm e axila negativa, o tratamento padrão é cirurgia primária (conservadora com linfonodo sentinela), seguida de quimioterapia adjuvante com trastuzumabe (ex.: paclitaxel + trastuzumabe) e radioterapia. Como os receptores hormonais são negativos, não há hormonioterapia.",
    "commentary": "Mastectomia (A): o tumor é pequeno e permite cirurgia conservadora, com o mesmo resultado oncológico.\n\nNeoadjuvância com duplo bloqueio e tamoxifeno (C): a neoadjuvância se recomenda para T ≥ 2 cm ou axila positiva; e o tamoxifeno não tem papel em tumor RH negativo.\n\nTamoxifeno (D): sem receptores hormonais, não há benefício.",
    "reference": "NCCN Breast Cancer 2025 / SBM — Câncer de mama HER2 positivo",
    "tags": [
      "ginecologia",
      "câncer de mama",
      "HER2",
      "trastuzumabe"
    ],
    "tip": "HER2+ < 2 cm e N0: cirurgia primeiro. ≥ 2 cm ou N+: neoadjuvância."
  },
  {
    "id": "hiae2025-57",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Diante de adolescente de 17 anos, com dismenorreia e episódios de dor pélvica acíclica, sem comorbidades, sexualmente ativa e sem desejo reprodutivo em curto prazo, com ultrassonografia com preparo intestinal para pesquisa de endometriose demonstrando discreto espessamento inespecífico de ligamentos uterossacros, qual é a melhor conduta?",
    "options": [
      "(A) Ressonância nuclear magnética para investigação complementar de endometriose e outras causas de dor pélvica crônica.",
      "(B) Iniciar tratamento clínico com contraceptivo oral combinado e reavaliar em 3 meses.",
      "(C) Cirurgia laparoscópica para confirmação diagnóstica e remoção de prováveis lesões endometrióticas.",
      "(D) Dosagem de CA 125, considerado alterado e marcador de endometriose se maior ou igual a 50 U/mL."
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com dismenorreia e dor pélvica acíclica sugestivas de endometriose, sem desejo de engravidar. O tratamento clínico empírico com contraceptivo hormonal (combinado ou só de progestagênio) é a primeira linha, sem necessidade de confirmação cirúrgica, com reavaliação em cerca de 3 meses.",
    "commentary": "Ressonância (A): o exame já feito é pouco alterado; outra imagem não muda a conduta inicial.\n\nLaparoscopia (C): não é necessária para iniciar o tratamento.\n\nCA-125 (D): tem baixa sensibilidade e especificidade; não diagnostica endometriose.",
    "reference": "ESHRE 2022 — Endometriose / Febrasgo",
    "tags": [
      "ginecologia",
      "endometriose",
      "dismenorreia",
      "adolescência"
    ],
    "tip": "Suspeita de endometriose: trate empiricamente com hormônio; cirurgia não é necessária para diagnosticar."
  },
  {
    "id": "hiae2025-58",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menstruações volumosas são uma das formas clínicas do sangramento uterino anormal,\n\ndistúrbio com alta prevalência na população global, com impacto pessoal, social, profissional e público. Diante das possíveis causas, são reconhecidas todas a seguir, EXCETO",
    "options": [
      "(A) doença de Von Wilebrand.",
      "(B) leiomioma uterino.",
      "(C) uso de anticoagulante.",
      "(D) endometriose."
    ],
    "correctAnswer": 3,
    "explanation": "Pela classificação PALM-COEIN (FIGO), as causas de sangramento uterino anormal são: Pólipo, Adenomiose, Leiomioma, Malignidade/hiperplasia (estruturais) e Coagulopatia, disfunção Ovulatória, Endometrial, Iatrogênica e Não classificada. Doença de von Willebrand (coagulopatia), leiomioma e anticoagulantes (iatrogênica) estão na lista. A endometriose não está (a adenomiose sim).",
    "commentary": "Von Willebrand (A): é a coagulopatia hereditária mais associada a sangramento menstrual volumoso.\n\nLeiomioma (B): o 'L' do PALM.\n\nAnticoagulantes (C): causa iatrogênica.",
    "reference": "FIGO — Classificação PALM-COEIN (2018)",
    "tags": [
      "ginecologia",
      "sangramento uterino anormal",
      "PALM-COEIN"
    ],
    "tip": "PALM-COEIN: adenomiose sim, endometriose não."
  },
  {
    "id": "hiae2025-59",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 32 anos, sexualmente ativa, usuária de contraceptivo oral e sem método de barreira, apresenta-se ao pronto socorro hospitalar com quadro de dor pélvica progressiva de início espontâneo há 5 dias. Nega adinamia e alteração do apetite. Ao exame físico: bom estado geral, temperatura de 38,5 graus Celsius, secreção cervical purulenta, dor à mobilização do colo uterino e ao toque bimanual com palpação dos anexos. Apresenta hemograma com leucócitos de 13950/mm³ e PCR de 57 mg/L. BHCG negativo e ultrassonografia transvaginal evidenciando espessamento tubário direito e pequena quantidade de líquido livre na pelve. Diante da hipótese de doença inflamatória pélvica aguda, neste caso, recomenda-se",
    "options": [
      "(A) antibioticoterapia de amplo espectro via oral, por 14 dias, com reavaliação clínica em 3 dias.",
      "(B) internação para antibioticoterapia de amplo espectro endovenosa, esperando 48 horas por melhora, considerando-se cirurgia em caso negativo.",
      "(C) antibioticoterapia de amplo espectro via oral, por 14 dias, com reavaliação clínica em 7 dias.",
      "(D) internação para laparoscopia e drenagem de abscesso pélvico, seguida de antibioticoterapia de amplo espectro endovenosa."
    ],
    "correctAnswer": 0,
    "explanation": "DIP aguda leve a moderada (febre, dor à mobilização do colo e dos anexos, secreção cervical purulenta, espessamento tubário sem abscesso), paciente em bom estado, sem gravidez, sem vômitos e sem abscesso tubo-ovariano. Pode ser tratada ambulatorialmente com antibiótico oral (ceftriaxona IM dose única + doxiciclina + metronidazol por 14 dias) e reavaliação clínica em 72 horas.",
    "commentary": "Reavaliar em 7 dias (C): a reavaliação deve ser em 72 horas.\n\nInternação (B): não há critério (abscesso, gravidez, falha do tratamento oral, intolerância, quadro grave, dúvida diagnóstica).\n\nLaparoscopia para abscesso (D): não há abscesso.",
    "reference": "Ministério da Saúde — PCDT de IST (2022) / CDC 2021",
    "tags": [
      "ginecologia",
      "doença inflamatória pélvica",
      "tratamento ambulatorial",
      "IST"
    ],
    "tip": "DIP: reavaliação em 72 horas; internar se abscesso, gestante, grave ou falha oral."
  },
  {
    "id": "hiae2025-60",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 22 anos, com ciclos menstruais regulares a cada 28 dias e queixa de acne importante há 6 meses, foi encaminhada ao serviço de ginecologia para avaliação. Sua mãe trata diabetes mellitus tipo 2. A paciente adota preservativo masculino como método anticoncepcional, tendo utilizado pílula combinada oral por 3 anos antes de cessar o uso há 8 meses. Ao exame físico, ela apresenta escore de Ferriman-Gallwey de 10, acantose nigricans em axilas e IMC de 24,2. O exame ginecológico é normal. Visando ao adequado diagnóstico, qual é a conduta inicial mais apropriada?",
    "options": [
      "(A) Iniciar tratamento com mio-inositol e pílula anticoncepcional combinada.",
      "(B) Realizar teste oral de tolerância à glicose 75 g e tranquilizar paciente.",
      "(C) Realizar ultrassonografia pélvica e exames laboratoriais adicionais para excluir outras causas de hiperandrogenismo.",
      "(D) Iniciar tratamento com metformina e progesterona cíclica ou sistema liberador intrauterino de levonorgestrel."
    ],
    "correctAnswer": 2,
    "explanation": "Acne, hirsutismo (Ferriman-Gallwey 10) e acantose nigricans com ciclos regulares: hiperandrogenismo clínico. Antes de fechar o diagnóstico de SOP (critérios de Rotterdam), é preciso excluir outras causas de hiperandrogenismo — hiperplasia adrenal congênita não clássica (17-OH-progesterona), disfunção tireoidiana, hiperprolactinemia, tumores — e fazer ultrassonografia pélvica para avaliar a morfologia ovariana.",
    "commentary": "Mio-inositol e pílula (A) ou metformina e progesterona (D): tratamentos antes do diagnóstico.\n\nSó TOTG e tranquilizar (B): o TOTG é útil para rastrear disglicemia, mas não exclui outras causas nem dispensa investigação.",
    "reference": "Diretriz internacional de SOP (2023) / Febrasgo",
    "tags": [
      "ginecologia",
      "síndrome dos ovários policísticos",
      "hiperandrogenismo",
      "critérios de Rotterdam"
    ],
    "tip": "SOP é diagnóstico de exclusão: dose 17-OH-progesterona, TSH e prolactina."
  },
  {
    "id": "hiae2025-61",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Um jovem de 25 anos procura a unidade básica de saúde com febre alta há 4 dias, acompanhada de dores musculares intensas, cefaleia, dor retro-orbital e náuseas. Ele relata que, nos últimos dois dias, notou algumas manchas avermelhadas na pele, principalmente nos braços e nas pernas, além de ter sentido tontura ao levantar-se pela manhã. Ao exame físico, o paciente apresenta febre de 38,7 °C, erupções cutâneas, pressão arterial de 100/70 mmHg e pulso de 98 bpm. O hemograma revela uma queda no número de plaquetas (80000/mm³) e um hematócrito aumentado (45%). Assinale a alternativa que indica a correta classificação desse caso e a conduta a ser adotada.",
    "options": [
      "(A) Dengue grupo A. Hidratação oral vigorosa e orientar procurar o pronto atendimento em caso de sinais de alarme.",
      "(B) Dengue grupo B. Observação no domicílio com hidratação oral vigorosa e solicitar coleta de IgG no 6º dia.",
      "(C) Dengue grupo D. Iniciar reposição volêmica intravenosa imediata e transferir para pronto-socorro para acompanhamento em UTI.",
      "(D) Dengue grupo C. Iniciar reposição volêmica intravenosa imediata na UBS e transferir para unidade de referência para reavaliação do hematócrito."
    ],
    "correctAnswer": 3,
    "explanation": "Dengue provável com tontura ao levantar (hipotensão postural, sinal de alarme) e hematócrito em elevação: grupo C. Deve-se iniciar hidratação venosa imediata ainda na UBS (10 mL/kg de cristaloide na primeira hora) e transferir para unidade de referência com leito de internação, reavaliando hematócrito e clínica.",
    "commentary": "Grupo A (A) ou B (B): o sinal de alarme (hipotensão postural) muda a classificação; e IgG no 6º dia não é o exame recomendado.\n\nGrupo D (C): não há choque (PA e pulso adequados).",
    "reference": "Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)",
    "tags": [
      "infectologia",
      "dengue",
      "sinais de alarme",
      "hidratação venosa"
    ],
    "tip": "Hipotensão postural na dengue = sinal de alarme (grupo C)."
  },
  {
    "id": "hiae2025-62",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Um médico de família e comunidade em uma unidade de saúde localizada no centro de uma grande metrópole, durante uma visita da equipe de Consultório na Rua, atende uma mulher de 18 anos, que é encontrada vivendo em um viaduto. Ela está grávida, aproximadamente no terceiro trimestre (cerca de 32 semanas, segundo seu relato). A paciente não possui documentação, não faz acompanhamento pré-natal e refere não conseguir acessar os serviços de saúde devido a situações de violência que enfrentou ao tentar buscar ajuda anteriormente. Ao exame físico, realizado em condições não ideais, observou-se que ela está pálida, com sinais de má nutrição. O exame obstétrico mostrou um útero compatível com a idade gestacional estimada, mas o batimento cardíaco fetal não pôde ser auscultado claramente com o sonar portátil. Quais estratégias intersetoriais poderiam ser implementadas para assegurar um acompanhamento contínuo e eficaz para essa paciente durante o restante da gestação e no período pós-parto?",
    "options": [
      "(A) Encaminhar a paciente para internação compulsória em uma Comunidade Terapêutica para monitoramento contínuo devido à alta incidência do uso de drogas em pessoas em situação de rua e pela certeza da adesão ao plano de cuidado.",
      "(B) Estabelecer uma parceria entre a unidade de saúde e a sociedade civil para criar uma rede de suporte que não se utilize da UBS e acompanhe a paciente de maneira integrada, garantindo seu parto em uma maternidade pública.",
      "(C) Cadastrá-la na UBS mais próxima do viaduto onde dorme, acionar a assistência social e buscar parcerias com instituições da sociedade civil para garantir a adesão da paciente ao pré-natal, acionando também o serviço de pré-natal de alto risco.",
      "(D) Reforçar a importância do pré-natal e responsabilizar a paciente pela adesão ao tratamento, tomando o cuidado de encaminhá-la ao serviço de pré-natal de alto risco para que seja decidida a necessidade de internação."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante em situação de rua, sem pré-natal e com barreiras de acesso. O cuidado deve ser intersetorial e centrado na pessoa: cadastrá-la na UBS de referência do território (o cadastro não exige documentos nem endereço fixo), acionar a assistência social (CREAS/Centro POP), articular a sociedade civil para apoio e encaminhar ao pré-natal de alto risco, mantendo o vínculo com a equipe do Consultório na Rua.",
    "commentary": "Internação compulsória (A): sem indicação legal; é violação de direitos.\n\nRede que não usa a UBS (B): a APS deve coordenar o cuidado.\n\nResponsabilizar a paciente (D): ignora as barreiras sociais e de acesso.",
    "reference": "Ministério da Saúde — Manual sobre o cuidado à saúde junto à população em situação de rua (2012) / PNAB",
    "tags": [
      "saúde coletiva",
      "população em situação de rua",
      "consultório na rua",
      "intersetorialidade"
    ]
  },
  {
    "id": "hiae2025-63",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Mulher de 40 anos, casada há 15 anos, trabalha como auxiliar administrativa e tem dois filhos adolescentes. Durante uma consulta na Unidade Básica de Saúde para tratar uma dor crônica nas costas, ela revela ao médico, entre divertida e constrangida, que o marido controla seu acesso ao próprio salário para que as contas fiquem sempre controladas. Ela gostaria de ter um cartão de crédito, mas o marido alega que isso poderá desregular a vida financeira da família. Questionada, ela expressa que se sente impotente e gostaria de mudar, mas não vê saída, pois depende financeiramente dele para o sustento da casa. Ressalta que não quer que os filhos saibam dessa situação, temendo que isso afete a relação deles com o pai. Considerando a situação apresentada, qual deve ser a conduta do médico de família da UBS?",
    "options": [
      "(A) Explicar à paciente que o comportamento do marido caracteriza violência patrimonial e orientá-la sobre seus direitos e a possibilidade de buscar ajuda jurídica e apoio psicológico, oferecendo-se para desenvolver um plano de segurança financeira junto com a paciente.",
      "(B) Reconhecer que o comportamento do marido é uma forma de violência patrimonial e encaminhá-la para um assistente social da UBS, que poderá envolver outros membros da equipe, como o psicólogo e a enfermeira, para discutir as implicações financeiras e emocionais da situação.",
      "(C) Sugerir que ela considere abrir uma conta bancária secreta ou procurar um advogado de confiança para garantir que ela tenha acesso ao seu dinheiro, sem a necessidade de envolver a equipe da UBS ou os filhos, preservando, assim, sua autonomia financeira e privacidade.",
      "(D) Reconhecer a violência patrimonial e ponderar que questões financeiras são comuns em casamentos e que é possível resolver a situação com diálogo. O médico pode sugerir que o casal participe de um aconselhamento financeiro."
    ],
    "correctAnswer": 0,
    "explanation": "O controle do salário da esposa pelo marido é violência patrimonial (Lei Maria da Penha, art. 7º). O médico de família deve nomear a situação, informar a paciente sobre seus direitos e a rede de apoio (jurídica, psicológica, CRAS/CREAS), respeitando a autonomia e o ritmo dela, e construir junto um plano de segurança. Casos de violência contra a mulher são de notificação compulsória.",
    "commentary": "Encaminhar ao assistente social para discutir a situação (B): o vínculo e o acolhimento pelo próprio médico são centrais; o encaminhamento isolado pode romper o cuidado.\n\nConta secreta sem envolver a equipe (C): tira a paciente da rede de cuidado.\n\nMinimizar e sugerir aconselhamento de casal (D): banaliza a violência; terapia de casal é desaconselhada na violência.",
    "reference": "Lei 11.340/2006 (Maria da Penha) / Ministério da Saúde — Atenção às mulheres em situação de violência",
    "tags": [
      "saúde coletiva",
      "violência contra a mulher",
      "violência patrimonial",
      "medicina de família"
    ],
    "tip": "Violência patrimonial é violência doméstica (Lei Maria da Penha)."
  },
  {
    "id": "hiae2025-64",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Qual das alternativas a seguir descreve, corretamente, as características da população assistida pela Atenção Primária à Saúde (APS) no Brasil em relação à incidência de transtornos de somatização?",
    "options": [
      "(A) Transtornos de somatização são mais frequentes em pessoas que, embora tenham um nível educacional elevado, enfrentam altos níveis de estresse ocupacional, o que pode ser exacerbado pelo ambiente urbano.",
      "(B) Transtornos de somatização são igualmente prevalentes entre homens e mulheres na APS, refletindo uma distribuição homogênea dos sintomas psicossomáticos em diferentes grupos sociais.",
      "(C) Transtornos de somatização tendem a ser mais diagnosticados em indivíduos com acesso frequente aos serviços de saúde, independentemente do nível socioeconômico, devido à maior sensibilização dos profissionais de saúde.",
      "(D) Transtornos de somatização são frequentemente observados em mulheres, especialmente aquelas que residem em áreas atendidas pela APS, com maior prevalência associada a questões de saúde mental não psicótica."
    ],
    "correctAnswer": 3,
    "explanation": "Na APS, a somatização é muito frequente e se concentra em mulheres, associada a transtornos mentais comuns (ansiedade e depressão, não psicóticos) e a vulnerabilidade social (baixa renda e escolaridade, violência).",
    "commentary": "Maior escolaridade com estresse ocupacional (A): a associação é com menor escolaridade e renda.\n\nIgual entre os sexos (B): é mais frequente em mulheres.\n\nMais diagnosticado com mais acesso (C): não é o perfil descrito na literatura da APS.",
    "reference": "Gusso — Tratado de Medicina de Família e Comunidade / Fortes — Transtornos mentais comuns na APS",
    "tags": [
      "saúde mental",
      "somatização",
      "atenção primária",
      "transtornos mentais comuns"
    ]
  },
  {
    "id": "hiae2025-65",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Clínica Médica",
    "text": "Em uma consulta na UBS, Lívia relata que sua pressão, apesar de estar fazendo o tratamento adequadamente, não está controlada; quando mede, às vezes, está 15 x 10, e outras vezes, 16 x 9. Fala que ela sabe que esses valores são altos e os relaciona a uma dor de cabeça na nuca. Conta que tem dor de cabeça frequentemente, que vai e volta algumas vezes no mês. A dor parece apertar a nuca e, por vezes, desce para ombros, algumas vezes dói moderadamente e, de vez em quando, dói muito, fazendo com que ela não consiga ajeitar a sua própria casa ao chegar do trabalho no final da tarde. Toma dipirona em todas ocasiões em que sente a dor, isso acontece em torno 1-2 vezes por semana, no máximo, 6 vezes por mês. Nega qualquer outro sintoma que acompanhe, exceto a pressão alterada. Hoje está com dor leve atrás da cabeça, sem qualquer outro sintoma. No exame físico, não havia qualquer alteração, e a PA era de 126 x 86 mmHg. Considerando o caso apresentado, assinale a alternativa que descreve, corretamente, o diagnóstico e o tratamento.",
    "options": [
      "(A) É uma cefaleia secundária, e há necessidade de revisar os medicamentos para hipertensão arterial sistêmica para diminuir a pressão.",
      "(B) É uma cefaleia primária, que exige tratamento profilático com antidepressivos, dose baixa e uso de exames de imagem.",
      "(C) É uma cefaleia primária, que é tratada com anti-inflamatório não esteroidal associado e medidas não farmacológicas, por exemplo, massagem.",
      "(D) É uma cefaleia crônica diária; deve-se suspender a medicação de uso frequente e pedir diário da dor, com retorno em 15 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Cefaleia em aperto, occipital/nucal com irradiação para ombros, de intensidade leve a moderada, episódica (até 6 dias por mês), sem náuseas, foto ou fonofobia e com exame normal: cefaleia do tipo tensional episódica, uma cefaleia primária. A elevação da PA é consequência da dor, não causa. Trata-se com analgésico ou AINE nas crises e medidas não farmacológicas (exercício, manejo do estresse, massagem, fisioterapia).",
    "commentary": "Cefaleia secundária à hipertensão (A): a PA não causa cefaleia nesses níveis, exceto na emergência hipertensiva.\n\nProfilaxia com antidepressivo e imagem (B): com poucos dias de dor por mês, não há indicação de profilaxia nem de imagem.\n\nCefaleia crônica diária (D): ocorre em 15 dias ou mais por mês; não há abuso de analgésico.",
    "reference": "Sociedade Brasileira de Cefaleia / ICHD-3",
    "tags": [
      "neurologia",
      "cefaleia tensional",
      "cefaleia primária",
      "atenção primária"
    ],
    "tip": "Hipertensão raramente causa cefaleia; a cefaleia é que sobe a pressão."
  },
  {
    "id": "hiae2025-66",
    "topography": "10",
    "topic": "HIV/AIDS",
    "module": "Saúde Coletiva",
    "text": "Adolescente de 16 anos, eutrófico, procura orientações a respeito das formas de proteção própria e de seus parceiros contra doenças sexualmente transmissíveis, em especial o HIV. O paciente refere ser homoafetivo e sexualmente ativo e relata não utilizar preservativos em todas as relações sexuais, com diferentes parceiros. De acordo com os protocolos atuais do Ministério da Saúde, qual seria a recomendação para o manejo da infecção por HIV nesse paciente?",
    "options": [
      "(A) Prescrever profilaxia pré-exposição ao HIV, indicada para adolescentes acima de 15 anos com mais de 35 quilos, sexualmente ativos.",
      "(B) Orientar que a profilaxia pós-exposição, se necessária, deve ser iniciada até uma semana após uma possível exposição ao HIV.",
      "(C) Informar que a profilaxia pré-exposição só pode ser prescrita com consentimento por escrito do adolescente e dos pais responsáveis.",
      "(D) Informar que a profilaxia pós-exposição com antirretrovirais deve ser administrada pelos 6 meses subsequentes à exposição sexual de risco."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente de 16 anos, homem que faz sexo com homens, com múltiplas parcerias e uso irregular de preservativo: tem indicação de profilaxia pré-exposição (PrEP). Pelo protocolo do Ministério da Saúde, a PrEP pode ser prescrita para adolescentes a partir de 15 anos com peso ≥ 35 kg e vida sexual ativa, sem necessidade de autorização dos pais.",
    "commentary": "PEP em até uma semana (B): a PEP deve começar até 72 horas após a exposição.\n\nConsentimento dos pais (C): o adolescente tem direito a atendimento com sigilo e autonomia.\n\nPEP por 6 meses (D): a PEP dura 28 dias.",
    "reference": "Ministério da Saúde — PCDT de Profilaxia Pré-Exposição ao HIV (2022/2025)",
    "tags": [
      "infectologia",
      "HIV",
      "PrEP",
      "adolescência"
    ],
    "tip": "PrEP: a partir de 15 anos e 35 kg, sem autorização dos pais. PEP: até 72 h, por 28 dias."
  },
  {
    "id": "hiae2025-67",
    "module": "Clínica Médica",
    "text": "Manuel, um paciente diabético de longa data, veio à UBS hoje porque não está se sentido muito bem; está tonto, com a visão estranha e fazendo mais xixi que o habitual; nega outras\n\nqueixas. Veio, também, porque iniciou o uso de insulina NPH, há 10 dias, e precisa fazer o controle glicêmico na UBS. Foi encaminhado para a sala de avaliação, onde foi feita a medida da sua glicemia – sendo encontrado o valor de 288 mg/dL - realizado um exame na sua urina, cujo resultado foi cetonúria negativa. Diante desse quadro, qual alternativa descreve a conduta acertada?",
    "options": [
      "(A) A médica responsável pelo paciente deve encaminhá-lo para atendimento em serviço emergência, pois a glicemia está maior que 250 mg/dL.",
      "(B) Deve-se administrar insulina regular, com dose equivalente a 10% da dose total usada pelo paciente, se possível, hidratar, mesmo que oralmente, e reavaliar a glicemia em 4 horas.",
      "(C) Deve-se administrar insulina NPH, com dose equivalente a 10% da dose usada pelo paciente, hidratar com soro fisiológico a 0,9% intravenoso e reavaliar a glicemia em 4 horas.",
      "(D) Devem-se avaliar sinais de desidratação e cetose; caso não sejam encontrados, deve-se hidratar o paciente com soro fisiológico a 0,9% intravenoso e reavaliar a glicemia em 30 minutos."
    ],
    "correctAnswer": 1,
    "explanation": "Hiperglicemia sintomática (288 mg/dL, poliúria, tontura, visão turva), sem cetose e sem sinais de gravidade, em paciente que começou insulina NPH. Pode ser manejada na UBS: insulina regular (de ação rápida) em dose de cerca de 10% da dose diária total, hidratação (oral, se possível) e nova glicemia em cerca de 4 horas.",
    "commentary": "Encaminhar à emergência só pela glicemia (A): sem cetose ou desidratação grave, a hiperglicemia pode ser corrigida na UBS.\n\nInsulina NPH (C): de ação intermediária, não serve para corrigir hiperglicemia aguda.\n\nSoro IV e glicemia em 30 minutos (D): não há desidratação grave; a reavaliação em 30 minutos é curta demais.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 36 (Diabetes) / SBD",
    "tags": [
      "endocrinologia",
      "hiperglicemia",
      "insulina regular",
      "atenção primária"
    ],
    "tip": "Hiperglicemia sem cetose na UBS: insulina regular ~10% da dose total, hidratar e reavaliar em 4 h."
  },
  {
    "id": "hiae2025-68",
    "topography": "13",
    "topic": "Abstinência alcoólica",
    "module": "Saúde Coletiva",
    "text": "Uma paciente com transtorno por uso de álcool chega a um Centro de Atenção Psicossocial (CAPS) solicitando apoio para ficar abstinente. Cristiane tem 42 anos, é mãe, está desempregada, faz uso de álcool desde os 16 anos; ela conta que aumentou o consumo perto dos 35 anos e, desde então, faz uso diariamente e ao longo de todo o dia, com maior consumo à noite. Faz 10 dias que vem diminuindo, estando há 2 dias sem beber, mas não está se sentido bem; tem insônia, náusea e inquietação, e por isso buscou ajuda. Nega febre, suor, tremor e sintomas psicóticos. É a terceira vez que tenta parar. Nas outras vezes, tentou sozinha e não conseguiu, mas não teve problemas graves de saúde. Não costuma ir à sua UBS de referência e tem receio do que as pessoas podem falar. Na avaliação, a equipe usou o Alcohol Use Disorders Identification Test (AUDIT). O escore da paciente nesse teste foi de 24 pontos, indicando provável transtorno por uso de álcool de moderado a grave. Adote: CAGE - sigla formada pelas iniciais em inglês das palavras-chaves das perguntas de um instrumento utilizado para avaliar uso de álcool (cutdown, annoyed, guilty e eyeopened). Qual das alternativas a seguir descreve a conduta correta do CAPS frente ao caso?",
    "options": [
      "(A) Aplicar também o CAGE, solicitar exames e iniciar o tratamento com inibidores da recaptação de serotonina associados a benzodiazepínicos, além de encaminhar para Unidade Básica de Saúde para demais cuidados.",
      "(B) Deve acolher, ouvir a história da paciente e encaminhá-la para cuidado longitudinal na Atenção Primária à Saúde (APS), pois ela deve entrar no sistema de saúde por intermédio da APS e, se necessário, ser encaminhada.",
      "(C) Reconhecer a gravidade do caso pelos sinais de abstinência e, a partir do diagnóstico, encaminhar para serviço de emergência para atendimento inicial, organizando internação breve para tratamento posterior.",
      "(D) Deve fazer observação por algumas horas, avaliar rede de apoio, introduzir Diazepam de até 10 mg de 8/8 horas e tiamina 100 mg IM por 5 dias, orientar sinais de alerta e marcar retorno breve para reavaliação do caso."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com transtorno por uso de álcool moderado a grave (AUDIT 24) e abstinência leve (insônia, náusea, inquietação, sem tremor, sudorese, febre ou psicose), com bom suporte: pode ser desintoxicada em regime ambulatorial no CAPS. Observar por algumas horas, avaliar a rede de apoio, usar benzodiazepínico (diazepam) e tiamina para prevenir encefalopatia de Wernicke, orientar sinais de alerta e reavaliar em pouco tempo.",
    "commentary": "Aplicar CAGE e ISRS (A): o AUDIT já foi feito; ISRS não trata abstinência.\n\nEncaminhar à APS como porta de entrada (B): o CAPS também é porta aberta e é o local adequado para o caso.\n\nEmergência e internação (C): a abstinência é leve, sem indicação de internação.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 34 (Saúde mental) / Associação Brasileira de Psiquiatria",
    "tags": [
      "saúde mental",
      "transtorno por uso de álcool",
      "abstinência alcoólica",
      "CAPS"
    ],
    "tip": "Abstinência leve com boa rede: desintoxicação ambulatorial com diazepam + tiamina."
  },
  {
    "id": "hiae2025-69",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que indica, corretamente, características importante para que um ensaio clínico randomizado seja considerado como bem conduzido.",
    "options": [
      "(A) Os grupos de comparação foram semelhantes em termos de características basais no início do estudo.",
      "(B) A seleção de participantes tenha ocorrido a partir de um único centro de pesquisa.",
      "(C) A análise tenha sido feita apenas a partir dos dados dos participantes que aderiram até o final do estudo aos tratamentos selecionados para os grupos.",
      "(D) Os resultados terem sido publicados em uma revista científica de alto impacto."
    ],
    "correctAnswer": 0,
    "explanation": "Um ensaio clínico randomizado bem conduzido tem randomização com sigilo de alocação, o que gera grupos semelhantes nas características basais (comparabilidade), além de cegamento quando possível, seguimento completo e análise por intenção de tratar.",
    "commentary": "Centro único (B): estudos multicêntricos têm mais validade externa.\n\nAnálise só de quem aderiu (C): é a análise por protocolo, sujeita a viés; o padrão é intenção de tratar.\n\nRevista de alto impacto (D): não garante a qualidade metodológica.",
    "reference": "Fletcher — Epidemiologia clínica / CONSORT",
    "tags": [
      "epidemiologia",
      "ensaio clínico randomizado",
      "validade interna",
      "intenção de tratar"
    ]
  },
  {
    "id": "hiae2025-70",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Sobre revisão sistemática e meta-analise, assinale a alternativa correta.",
    "options": [
      "(A) Revisão sistemática e meta-análise têm o mesmo significado do ponto de vista de metodologia da pesquisa.",
      "(B) Os estudos selecionados das bases de dados, nos quais forem observados vieses, devem ser sistematicamente excluídos.",
      "(C) Em uma meta-análise, a estimativa sumária final do efeito considera o peso de cada estudo, levando em conta a precisão de seu resultado.",
      "(D) A presença de heterogeneidade entre os estudos invalida o cálculo da estimativa sumário da meta-análise."
    ],
    "correctAnswer": 2,
    "explanation": "Na meta-análise, a estimativa sumária é uma média ponderada: estudos mais precisos (maiores, com menor variância) recebem mais peso (método do inverso da variância).",
    "commentary": "Revisão sistemática e meta-análise como sinônimos (A): a revisão sistemática é o método de busca e síntese; a meta-análise é a combinação estatística, que pode ou não fazer parte dela.\n\nExcluir estudos com vieses (B): avalia-se o risco de viés, que pode guiar análises de sensibilidade, mas não se excluem estudos automaticamente.\n\nHeterogeneidade invalida (D): ela deve ser investigada e pode ser considerada com modelo de efeitos aleatórios.",
    "reference": "Cochrane Handbook / Fletcher — Epidemiologia clínica",
    "tags": [
      "epidemiologia",
      "meta-análise",
      "revisão sistemática",
      "medicina baseada em evidências"
    ]
  },
  {
    "id": "hiae2025-71",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Os registros de exame físico e dados antropométricos de todos os calouros da turma de universitários de 1970 foram periodicamente coletados, armazenados e avaliados, em 2022, com o objetivo de verificar se seus pesos e alturas estariam associados ao desenvolvimento de doença cardiovascular. Esse estudo é um exemplo de:",
    "options": [
      "(A) estudo de coorte retrospectiva.",
      "(B) estudo transversal.",
      "(C) estudo caso-controle.",
      "(D) estudo adaptativo."
    ],
    "correctAnswer": 0,
    "explanation": "Os dados de exposição (peso e altura) de todos os calouros foram registrados no passado (desde 1970) e, em 2022, o pesquisador analisa a ocorrência posterior de doença cardiovascular: coorte retrospectiva (histórica). Parte-se da exposição para o desfecho, usando registros já existentes.",
    "commentary": "Transversal (B): exposição e desfecho seriam medidos num só momento.\n\nCaso-controle (C): partiria dos desfechos (com e sem doença) para investigar exposições passadas.\n\nAdaptativo (D): é um tipo de ensaio clínico com modificações planejadas.",
    "reference": "Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "epidemiologia",
      "estudo de coorte",
      "coorte retrospectiva",
      "desenho de estudo"
    ],
    "tip": "Coorte parte da exposição; caso-controle parte do desfecho."
  },
  {
    "id": "hiae2025-72",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Em um ensaio clínico controlado, o planejamento de delineamento de cross-over",
    "options": [
      "(A) elimina a necessidade de randomização.",
      "(B) requer randomização estratificada.",
      "(C) deve considerar um possível efeito residual da primeira intervenção.",
      "(D) aumenta a validade externa dos resultados."
    ],
    "correctAnswer": 2,
    "explanation": "No ensaio cruzado (cross-over), cada participante recebe as duas intervenções em sequência, servindo de controle de si mesmo. O principal cuidado é o efeito residual (carry-over) da primeira intervenção sobre a segunda, controlado por um período de washout entre as fases.",
    "commentary": "Elimina a randomização (A): a ordem das intervenções deve ser randomizada.\n\nExige randomização estratificada (B): não é obrigatório.\n\nAumenta a validade externa (D): o desenho serve a doenças crônicas estáveis; não amplia a generalização.",
    "reference": "Fletcher — Epidemiologia clínica",
    "tags": [
      "epidemiologia",
      "ensaio cruzado",
      "cross-over",
      "efeito residual"
    ]
  },
  {
    "id": "hiae2025-73",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Maria, 45 anos, vem à consulta relatando dores generalizadas há mais de oito meses, além de sensação de fadiga e sono não reparador. Ela já foi a vários especialistas e realizou múltiplos exames, os quais trouxe à consulta, todos avaliados como normais, incluindo alguns autoanticorpos e provas de atividade inflamatória. Maria chora e expressa preocupação de que os médicos não estão levando suas queixas a sério. Durante o exame físico, percebe-se que Maria tem sensibilidade dolorosa difusa à palpação muscular e articular, mas não se notam sinais inflamatórios articulares. Ao aplicar o método clínico centrado na pessoa, qual deve ser a primeira abordagem?",
    "options": [
      "(A) Informar à paciente que, apesar de todos os exames normais, os sintomas indicam claramente uma fibromialgia e iniciar o tratamento com antidepressivos tricíclicos e relaxantes musculares.",
      "(B) Explorar detalhadamente os sintomas e solicitar novos exames com perfil completo de autoanticorpos para melhor abordar a preocupação de Maria e confirmar o diagnóstico com segurança.",
      "(C) Investigar como Maria está vivenciando esses sintomas, seus medos, expectativas e impacto na sua rotina de vida e, somente então, discutir possíveis estratégias para manejo conjunto dos sintomas.",
      "(D) Encaminhar a paciente para um especialista em reumatologia, considerando o tempo de duração dos sintomas, o que colabora para a possibilidade de uma condição autoimune não detectada."
    ],
    "correctAnswer": 2,
    "explanation": "O método clínico centrado na pessoa começa explorando a doença e a experiência da pessoa: sentimentos, ideias, funcionalidade e expectativas (SIFE). Diante de sintomas persistentes e sofrimento por não ser ouvida, o primeiro passo é investigar como Maria vive os sintomas e só então construir um plano comum de manejo.",
    "commentary": "Diagnosticar fibromialgia e medicar (A): pula a escuta e o plano compartilhado.\n\nNovos exames (B): já foram feitos e estão normais; mais exames reforçam a medicalização.\n\nEncaminhar ao reumatologista (D): sem sinais inflamatórios, não há motivo e fragmenta o cuidado.",
    "reference": "Stewart — Medicina centrada na pessoa / Gusso — Tratado de MFC",
    "tags": [
      "medicina de família",
      "método clínico centrado na pessoa",
      "fibromialgia",
      "comunicação"
    ],
    "tip": "Método centrado na pessoa: SIFE (sentimentos, ideias, funcionalidade, expectativas)."
  },
  {
    "id": "hiae2025-74",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Em junho de 2024, a taxa de desemprego no Brasil caiu para 6,9%, a menor taxa desde 2015. Segundo dados do IBGE, o número de empregados no setor privado também foi o máximo já registrado, 52,2 milhões, impulsionado por novos recordes do total de trabalhadores com carteira assinada (38,4 milhões) e sem carteira (13,8 milhões). A taxa de informalidade, que inclui empregados sem carteira assinada, empregadores sem CNPJ e trabalhador familiar auxiliar, ficou em 38,6% do total de ocupados no país. Considerando a história do sistema de saúde no Brasil e a relevância desse contexto para a oferta de serviços de saúde, como seria a situação de acesso à saúde pública para a população de trabalhadores formais e informais citada na notícia antes da criação do Sistema Único de Saúde (SUS) em 1988?",
    "options": [
      "(A) Ambas as populações mencionadas teriam o mesmo acesso à saúde que têm atualmente, pois o direito à saúde pública sempre foi garantido a todos os trabalhadores, independentemente de serem formais ou informais.",
      "(B) A população de trabalhadores informais enfrentaria dificuldades significativas para acessar serviços, já que o sistema público de saúde era focado em trabalhadores formais com carteira assinada, excluindo, na maior parte, os informais.",
      "(C) Ambas as populações mencionadas teriam o mesmo acesso à saúde que têm atualmente, pois o direito à saúde pública sempre foi garantido a todos os cidadãos brasileiros, sendo sua oferta organizada pelo SUS.",
      "(D) A oferta de serviços para trabalhadores informais ficava a cargo do Instituto Nacional de Assistência Médica da Previdência Social (INAMPS), enquanto os formais tinham a garantia de planos de saúde por seus empregadores."
    ],
    "correctAnswer": 1,
    "explanation": "Antes do SUS, a assistência médica pública era vinculada à Previdência Social (INAMPS) e atendia sobretudo trabalhadores formais com carteira assinada e seus dependentes. Os trabalhadores informais e quem não contribuía dependiam de filantropia (Santas Casas), serviços municipais e estaduais limitados ou pagamento direto. A Constituição de 1988 tornou a saúde um direito universal.",
    "commentary": "Mesmo acesso que hoje (A e C): o acesso universal só veio com a Constituição de 1988 e o SUS.\n\nINAMPS para informais e planos para formais (D): é o oposto — o INAMPS atendia os formais (contribuintes).",
    "reference": "Paim — O que é o SUS / Constituição Federal de 1988, art. 196",
    "tags": [
      "saúde coletiva",
      "história do SUS",
      "INAMPS",
      "universalidade"
    ],
    "tip": "Antes do SUS, saúde pública era para quem tinha carteira assinada (INAMPS)."
  },
  {
    "id": "hiae2025-75",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Durante uma reunião da equipe de APS, a enfermeira relata o caso de um paciente com diabetes não controlado, que frequentemente busca atendimento no pronto-socorro por complicações agudas. A equipe decide discutir como otimizar o cuidado desse paciente e de outros com situação semelhante. Com base no conceito de rede de atenção à saúde, qual seria a estratégia mais eficaz para evitar novas internações e melhorar o controle da doença?",
    "options": [
      "(A) Organizar uma abordagem centralizada na APS, com ênfase em consultas frequentes e acompanhamento exclusivo pela sua equipe de forma a abordar os determinantes sociais da saúde.",
      "(B) Garantir que o paciente seja encaminhado para o nível secundário de atenção à saúde, para atendimento por um especialista em endocrinologia e melhor manejo medicamentoso do caso.",
      "(C) Estabelecer uma linha de cuidado que coordene e monitore o estado de saúde do paciente, desde a atenção primária à saúde até os serviços especializados, quando necessário.",
      "(D) Estabelecer um protocolo clínico que facilite o acesso aos demais níveis da rede de atenção à saúde para todos os pacientes com múltiplas internações por complicações agudas."
    ],
    "correctAnswer": 2,
    "explanation": "A rede de atenção à saúde se organiza por linhas de cuidado, coordenadas pela APS, que integram os pontos de atenção (primária, especializada, hospitalar, urgência) com fluxos, regulação e acompanhamento contínuo. Para doentes crônicos com descompensações frequentes, a linha de cuidado com coordenação e monitoramento é a estratégia mais efetiva.",
    "commentary": "Cuidado exclusivo da APS (A): a coordenação é da APS, mas casos complexos precisam de apoio especializado.\n\nEncaminhar ao endocrinologista (B): transfere o cuidado em vez de coordená-lo.\n\nProtocolo de acesso para todos com internações (D): facilita o acesso, mas não organiza o cuidado contínuo e longitudinal.",
    "reference": "Mendes — As redes de atenção à saúde (OPAS, 2011) / Portaria 4.279/2010",
    "tags": [
      "saúde coletiva",
      "redes de atenção à saúde",
      "linha de cuidado",
      "doenças crônicas"
    ],
    "tip": "Rede de atenção: APS coordena; linha de cuidado integra os níveis."
  }
];
