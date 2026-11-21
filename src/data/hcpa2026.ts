import { Question } from '../types';

// HCPA 2026 (RS) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const HCPA_2026_QUESTIONS: Question[] = [
  {
    "id": "hcpa2026-1",
    "module": "Pediatria",
    "text": "Prematuro, pesando 1.200 g, com doença da membrana hialina e manifestações de insuficiência respiratória, necessitou de ventilação mecânica. A evolução clínica inicial foi satisfatória, com diminuição dos parâmetros do respirador. No 4º dia de vida, subitamente apresentou taquipneia, estertores crepitantes difusos e bilaterais, sopro sistólico na área infraclavicular esquerda (2+/4+) e má perfusão periférica. Tinha pulso periférico amplo. O fígado era facilmente palpável 5 cm abaixo do rebordo costal direito. Essa descompensação clínica provavelmente foi causada pela presença de",
    "options": [
      "padrão de circulação fetal",
      "comunicação interatrial",
      "persistência de canal arterioso",
      "tetralogia de Fallot"
    ],
    "correctAnswer": 2,
    "explanation": "Prematuro de muito baixo peso com doença da membrana hialina que, ao melhorar a ventilação (queda da resistência vascular pulmonar), descompensa no 4º dia com sopro infraclavicular esquerdo, pulsos amplos, estertores e hepatomegalia: persistência do canal arterial com shunt esquerda-direita significativo e hiperfluxo pulmonar/insuficiência cardíaca. O tratamento é restrição hídrica, diurético se necessário e fechamento farmacológico (ibuprofeno, indometacina ou paracetamol).",
    "commentary": "Padrão de circulação fetal (A): a hipertensão pulmonar persistente causa hipoxemia e cianose, não pulsos amplos e hiperfluxo.\n\nComunicação interatrial (B): raramente descompensa no período neonatal e não dá pulsos amplos.\n\nTetralogia de Fallot (D): cardiopatia cianótica com hipofluxo pulmonar, sem pulsos amplos.",
    "reference": "Sociedade Brasileira de Pediatria – Persistência do canal arterial no prematuro; AAP Clinical Report (2016)",
    "tags": [
      "persistência do canal arterial",
      "prematuridade",
      "doença da membrana hialina",
      "neonatologia"
    ],
    "tip": "Prematuro que piora ao melhorar o pulmão + pulsos amplos + sopro infraclavicular = PCA."
  },
  {
    "id": "hcpa2026-2",
    "module": "Pediatria",
    "text": "A triagem neonatal para hipotireoidismo congênito é feita com a dosagem de TSH em papel filtro entre o 3º e o 5º dias de vida. Utilizando esse método, que diagnóstico de hipotireoidismo congênito, dentre os abaixo, pode deixar de ser triado?",
    "options": [
      "Agenesia de tireoide",
      "Hipotireoidismo transitório",
      "Disormonogênese",
      "Hipotireoidismo central"
    ],
    "correctAnswer": 3,
    "explanation": "A triagem neonatal brasileira dosa TSH em papel-filtro. Ela detecta o hipotireoidismo congênito primário (TSH elevado), mas não o hipotireoidismo central (hipotalâmico ou hipofisário), em que o TSH é baixo ou normal apesar de T4 baixo.",
    "commentary": "Agenesia de tireoide (A) e disormonogênese (C): são causas primárias, com TSH elevado, detectadas pela triagem.\n\nHipotireoidismo transitório (B): também cursa com TSH elevado (por exemplo, por excesso de iodo ou anticorpos maternos) e é detectado.",
    "reference": "Ministério da Saúde – PCDT Hipotireoidismo Congênito; SBEM/SBP",
    "tags": [
      "hipotireoidismo congênito",
      "triagem neonatal",
      "hipotireoidismo central",
      "endocrinologia pediátrica"
    ],
    "tip": "Pezinho com TSH não pega hipotireoidismo central."
  },
  {
    "id": "hcpa2026-3",
    "module": "Pediatria",
    "text": "Criança com 2 dias de vida, nascida de parto vaginal sem intercorrências (idade gestacional de 39 semanas, peso ao nascimento de 2.200 g) apresentou icterícia, hepatoesplenomegalia, petéquias difusas e fontanela anterior abaulada. A mãe de 25 anos, G2P2, informou não ter feito pré-natal de forma adequada e ter tido quadro de febre e exantema não investigado durante a gestação. Os exames do neonato indicaram hemoglobina de 11 g/dl, 4.800 leucócitos/mm³ (sem desvio à esquerda) e 98.000 plaquetas/mm³. A ultrassonografia transfontanelar evidenciou diversas pequenas calcificações periventriculares.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "O diagnóstico mais provável é toxoplasmose congênita, e o tratamento indicado é espiramicina",
      "O quadro é compatível com sífilis congênita precoce, e o tratamento indicado é penicilina cristalina, intravenosa, por 10 dias",
      "Os achados são compatíveis com citomegalovirose congênita, e o tratamento pode incluir ganciclovir ou valganciclovir",
      "O diagnóstico mais provável é herpes congênito, e o tratamento indicado é aciclovir, intravenoso, por 21 dias"
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido pequeno para a idade gestacional, com icterícia, hepatoesplenomegalia, petéquias/plaquetopenia, fontanela abaulada e calcificações periventriculares, filho de mãe com febre e exantema na gestação: citomegalovirose congênita sintomática. O tratamento com ganciclovir IV ou valganciclovir oral (por 6 meses), iniciado no primeiro mês, melhora o desfecho auditivo e do neurodesenvolvimento.",
    "commentary": "Toxoplasmose com espiramicina (A): na toxoplasmose as calcificações são difusas/parenquimatosas e há hidrocefalia e coriorretinite; e o RN é tratado com sulfadiazina, pirimetamina e ácido folínico (espiramicina é usada na gestante).\n\nSífilis congênita (B): cursa com lesões cutâneas, rinite, lesões ósseas, sem calcificações periventriculares típicas.\n\nHerpes congênito (D): o herpes neonatal costuma surgir após a primeira semana, com vesículas; calcificações periventriculares são típicas do CMV.",
    "reference": "Sociedade Brasileira de Pediatria – Infecções congênitas; Rawlinson WD et al. Congenital CMV consensus, Lancet Infect Dis 2017",
    "tags": [
      "citomegalovírus congênito",
      "infecções congênitas",
      "ganciclovir",
      "neonatologia"
    ],
    "tip": "Calcificações periventriculares = CMV; difusas + hidrocefalia = toxoplasmose."
  },
  {
    "id": "hcpa2026-4",
    "module": "Pediatria",
    "text": "Lactente masculino, de 2 meses, nascido a termo de parto vaginal sem intercorrências, foi trazido à Emergência por desconforto respiratório, quadro iniciado há 2 dias. A mãe informou ter percebido congestão nasal e tosse antes do surgimento de sinais de esforço respiratório. Negou febre e contato com pessoas com sintomas respiratórios. Ao exame físico, a criança encontrava-se em bom estado geral, com secreção mucopurulenta em ambos os olhos, boa perfusão periférica e leve tiragem subcostal; à ausculta pulmonar, constataram-se estertores crepitantes bilaterais. Radiografia de tórax revelou hiperinsuflação e opacidades intersticiais difusas. Leucograma não demonstrou leucocitose, mas mostrava eosinofilia (600 eosinófilos/mm³). Que tratamento, dentre os abaixo, é o mais indicado?",
    "options": [
      "Lavagem nasal e ocular com soro fisiológico",
      "Nitazoxanida 15 mg/kg/dia, por via oral",
      "Amoxicilina 90 mg/kg/dia, por via oral",
      "Azitromicina 20 mg/kg/dia, por via oral"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 2 meses afebril, com tosse, conjuntivite com secreção mucopurulenta, taquipneia leve, estertores, infiltrado intersticial com hiperinsuflação e eosinofilia: pneumonia afebril do lactente por Chlamydia trachomatis (adquirida no parto vaginal). O tratamento é macrolídeo — azitromicina 20 mg/kg/dia por 3 dias (ou eritromicina por 14 dias).",
    "commentary": "Lavagem nasal e ocular (A): não trata a infecção por clamídia.\n\nNitazoxanida (B): é antiparasitário/antiviral, sem ação sobre clamídia.\n\nAmoxicilina (C): betalactâmicos não têm ação contra Chlamydia (bactéria intracelular).",
    "reference": "Sociedade Brasileira de Pediatria; CDC STI Treatment Guidelines (2021) – Chlamydial infections in infants",
    "tags": [
      "C. trachomatis",
      "pneumonia afebril do lactente",
      "azitromicina",
      "infectologia pediátrica"
    ],
    "tip": "Lactente 1–3 meses, afebril, conjuntivite + pneumonia intersticial + eosinofilia = clamídia → azitromicina."
  },
  {
    "id": "hcpa2026-5",
    "module": "Pediatria",
    "text": "Lactente masculino, de 3 meses, foi trazido à consulta pelos pais por terem percebido que, em algumas ocasiões, os olhos do filho pareciam desalinhados. Relataram que o desvio era mais evidente quando a criança estava cansada ou olhando para objetos muito próximos. Ao exame, o reflexo de Brückner (Teste do Reflexo Vermelho) era simétrico, e o reflexo corneano, central em ambos os olhos. Não foram constatados sinais de anomalias oculares ou neurológicas. Qual a conduta mais apropriada?",
    "options": [
      "Orientar os pais sobre o estrabismo fisiológico e observar a evolução",
      "Encaminhar a criança ao oftalmologista para prescrição de óculos com correção de hipermetropia total",
      "Encaminhar a criança ao oftalmologista para realizar cirurgia de estrabismo",
      "Solicitar ressonância magnética de crânio para excluir lesão intracraniana"
    ],
    "correctAnswer": 0,
    "explanation": "Desvio ocular intermitente em lactente de 3 meses, com reflexo vermelho simétrico, reflexo corneano central e sem anomalias: estrabismo transitório fisiológico, comum até 4–6 meses pela imaturidade da coordenação binocular. A conduta é orientar e reavaliar; se o desvio persistir após 4–6 meses, for constante ou houver alteração do reflexo vermelho, encaminhar ao oftalmologista.",
    "commentary": "Óculos para hipermetropia (B) e cirurgia (C): não há indicação nesta idade com exame normal.\n\nRessonância de crânio (D): não há sinais neurológicos ou desvio constante que a justifiquem.",
    "reference": "Sociedade Brasileira de Pediatria/Conselho Brasileiro de Oftalmologia – Saúde ocular na infância",
    "tags": [
      "estrabismo",
      "reflexo vermelho",
      "oftalmologia pediátrica",
      "puericultura"
    ],
    "tip": "Estrabismo intermitente antes de 4–6 meses com exame normal: fisiológico."
  },
  {
    "id": "hcpa2026-6",
    "module": "Pediatria",
    "text": "Menino de 5 meses foi trazido à consulta de puericultura. Em seu histórico, constavam as seguintes anotações: Nascido de gestação única com peso ao nascimento de 2.300 g e 35 semanas de idade gestacional; mãe com descolamento de placenta; sem necessidade de internação em UTI neonatal; testes de triagem neonatal normais. Não havia registro de vômitos ou regurgitações, nem de intercorrências clínicas desde o nascimento, nem de uso de medicamentos ou suplementos. A mãe informou que a alimentação vinha sendo feita exclusivamente com leite materno em livre demanda desde o nascimento, que o filho apresentava boa pega e que ele conseguia esvaziar bem as mamas. A familiar referiu que a criança se mostrava hipoativa em alguns momentos. Verificou-se dificuldade de ganho de peso pela curva na Caderneta da Criança. Considerando a hipótese diagnóstica mais provável, que exame, dentre os abaixo, deve ser solicitado?",
    "options": [
      "Videofluoroscopia da deglutição",
      "Hemograma",
      "Phmetria",
      "Dosagem de TSH e de T4 livre"
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 5 meses, pré-termo tardio e de baixo peso (fatores de risco para anemia ferropriva precoce), sem suplementação de ferro, com hipoatividade e dificuldade de ganho de peso apesar de aleitamento adequado: a principal hipótese é anemia ferropriva, investigada com hemograma (e ferritina). Prematuros devem receber ferro profilático a partir de 30 dias.",
    "commentary": "Videofluoroscopia (A): não há sinais de distúrbio de deglutição (pega boa, sem engasgos).\n\npHmetria (C): sem vômitos ou regurgitações, não há suspeita de refluxo patológico.\n\nTSH e T4 livre (D): a triagem neonatal foi normal.",
    "reference": "Sociedade Brasileira de Pediatria – Consenso sobre anemia ferropriva (2021)",
    "tags": [
      "anemia ferropriva",
      "prematuridade",
      "déficit de crescimento",
      "puericultura"
    ],
    "tip": "Prematuro sem ferro profilático: pensar em anemia ferropriva."
  },
  {
    "id": "hcpa2026-7",
    "module": "Pediatria",
    "text": "Criança de 6 meses foi trazida à Emergência com história de febre há 3 dias, sem identificação de foco. A mãe negou tosse, coriza, diarreia e alteração de humor. Ao exame físico, encontrava-se ativa, hidratada e corada, com temperatura axilar de 39,4º C; à oroscopia e otoscopia, não foram identificadas alterações; à ausculta cardíaca, o ritmo era regular, sem sopros; à ausculta respiratória, os pulmões estavam limpos; à palpação, o abdômen estava flácido e sem visceromegalias. As extremidades estavam com bons pulsos e boa perfusão periférica.\n\nCom base no quadro, assinale a alternativa que contempla o conjunto de condutas recomendado no momento.",
    "options": [
      "Coleta de sangue para hemograma, hemocultura e PCR - início de antibiótico",
      "Coleta de sangue para hemograma, hemocultura e PCR - realização de raio X de tórax - sem antibiótico até os resultados dos exames",
      "Coleta de urina para EQU com urocultura - sem antibiótico até o resultado do exame",
      "Coleta de urina para EQU com urocultura - realização de raio X de tórax - coleta de secreção nasal para pesquisa de vírus respiratórios – início de antibiótico"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 6 meses com febre sem sinais localizatórios há 3 dias, em bom estado geral e bem perfundido: a infecção bacteriana mais frequente nessa situação é a infecção do trato urinário. A conduta é colher urina (por sondagem ou punção suprapúbica) para exame qualitativo e urocultura; com exame de urina normal e criança em bom estado, aguarda-se sem antibiótico, com reavaliação.",
    "commentary": "Hemograma, hemocultura, PCR e antibiótico (A): em criança vacinada e com bom estado geral, antibiótico empírico sem foco não é indicado.\n\nExames de sangue e radiografia sem urina (B): deixa de investigar a causa mais provável (ITU).\n\nUrina, radiografia, vírus e antibiótico (D): radiografia sem sintomas respiratórios não é rotina, e o antibiótico deve depender da urina.",
    "reference": "Sociedade Brasileira de Pediatria – Febre sem sinais localizatórios; AAP Clinical Practice Guideline: Febrile Infants (2021)",
    "tags": [
      "febre sem sinais localizatórios",
      "infecção do trato urinário",
      "lactente",
      "infectologia pediátrica"
    ],
    "tip": "Lactente com febre sem foco e bom estado: começar pela urina."
  },
  {
    "id": "hcpa2026-8",
    "module": "Pediatria",
    "text": "Lactente feminina, de 9 meses, foi trazida à consulta de puericultura, sem queixas. Ao exame físico, detectou-se sopro cardíaco sistólico de curta duração, audível no terço médio da borda esternal esquerda, sem irradiação, de qualidade vibratória, com intensidade de 1+, que se tornava mais audível em decúbito dorsal (em comparação com a posição sentada). Qual o diagnóstico mais provável?",
    "options": [
      "Sopro inocente",
      "Persistência do canal arterial",
      "Defeito do septo interventricular",
      "Mixoma atrial"
    ],
    "correctAnswer": 0,
    "explanation": "Sopro sistólico curto, suave (1+), vibratório/musical, na borda esternal esquerda média, sem irradiação, que aumenta em decúbito dorsal e diminui sentado, em criança assintomática: sopro inocente de Still.",
    "commentary": "PCA (B): sopro contínuo infraclavicular esquerdo, com pulsos amplos.\n\nCIV (C): sopro holossistólico rude na borda esternal esquerda baixa, geralmente mais intenso, sem variação postural.\n\nMixoma atrial (D): raríssimo em lactentes; causa sopro variável com sintomas obstrutivos ou embólicos.",
    "reference": "Sociedade Brasileira de Pediatria – Departamento de Cardiologia",
    "tags": [
      "sopro inocente",
      "sopro de Still",
      "cardiologia pediátrica"
    ],
    "tip": "Sopro de Still: vibratório, suave, BEE média, aumenta deitado."
  },
  {
    "id": "hcpa2026-9",
    "module": "Pediatria",
    "text": "Menina de 2 anos foi trazida à consulta por febrículas e persistência da tosse em acessos, principalmente à noite, que chegava a provocar palidez de extremidades e em torno dos lábios. A expectoração era clara e viscosa. No pescoço anterior e nas pálpebras, havia várias petéquias. O quadro teve início com resfriado e congestão nasal há cerca de 4 semanas, com piora progressiva. A paciente não possuía a Caderneta da Criança (sem história de vacinação). Considerando a provável hipótese diagnóstica, assinale a alternativa que contempla as mais frequentes alterações hematológicas que a acompanham.",
    "options": [
      "Leucocitose e linfocitoses absoluta e relativa",
      "Leucopenia e eosinofilia relativa",
      "Leucocitose e monocitose",
      "Linfopenia absoluta e neutrofilia"
    ],
    "correctAnswer": 0,
    "explanation": "Criança não vacinada com tosse em acessos há 4 semanas, piora noturna, cianose perioral nos acessos, petéquias em face e pescoço (pelo esforço da tosse) e início com quadro catarral: coqueluche. A alteração hematológica típica é leucocitose (pode ser muito intensa, reação leucemoide) com linfocitose absoluta e relativa, causada pela toxina pertussis.",
    "commentary": "Leucopenia com eosinofilia (B), leucocitose com monocitose (C) e linfopenia com neutrofilia (D): não correspondem ao padrão da coqueluche.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (coqueluche)",
    "tags": [
      "coqueluche",
      "linfocitose",
      "B. pertussis",
      "infectologia pediátrica"
    ],
    "tip": "Coqueluche: leucocitose com linfocitose."
  },
  {
    "id": "hcpa2026-10",
    "module": "Pediatria",
    "text": "Menino de 2 anos foi hospitalizado por febre alta, mau estado geral, taquicardia e dispneia rapidamente progressiva. Ao exame físico, foram observadas petéquias difusas no tórax, no dorso e no abdômen, com sufusões hemorrágicas maiores nos membros inferiores do que nos superiores. O paciente evoluiu rapidamente com choque séptico, disfunção multiorgânica e coagulação intravascular disseminada. Havia relato de que outra criança da mesma escola também apresentara febre, sufusões similares nas pernas e se encontrava hospitalizada em UTI pediátrica. A partir das manifestações clínicas, da principal hipótese diagnóstica e de seu agente etiológico, assinale a assertiva correta.",
    "options": [
      "O paciente deve permanecer em isolamento respiratório com pressão negativa durante 5 dias após o início da antibioticoterapia",
      "O tratamento inicial de primeira escolha deve incluir cefepima ou meropenem",
      "Todos os contatos hospitalares e escolares do paciente devem receber quimioprofilaxia, por via oral, por 4 dias sequenciais",
      "A taxa de letalidade da doença é menor quando acompanhada de meningite simultaneamente"
    ],
    "correctAnswer": 3,
    "explanation": "Febre, petéquias e sufusões que evoluem rapidamente para choque, disfunção de múltiplos órgãos e CIVD, com outro caso na mesma escola: doença meningocócica (meningococcemia). A forma de meningococcemia sem meningite tem letalidade maior que a meningite isolada; quando há meningite associada à doença, a letalidade é menor que na meningococcemia pura.",
    "commentary": "Isolamento por 5 dias com pressão negativa (A): o isolamento é de gotículas, por 24 horas após o início do antibiótico efetivo.\n\nCefepima ou meropenem como primeira escolha (B): a escolha é ceftriaxona (ou penicilina cristalina se meningococo confirmado).\n\nQuimioprofilaxia para todos os contatos por 4 dias (C): a profilaxia é para contatos próximos (domiciliares, creche, exposição a secreções), com rifampicina por 2 dias, ou ceftriaxona/ciprofloxacino em dose única.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (doença meningocócica)",
    "tags": [
      "doença meningocócica",
      "meningococcemia",
      "quimioprofilaxia",
      "infectologia pediátrica"
    ],
    "tip": "Meningococcemia sem meningite tem maior letalidade."
  },
  {
    "id": "hcpa2026-11",
    "module": "Pediatria",
    "text": "Menino de 3 anos foi transportado até a UPA por ter apresentado episódio convulsivo, tônico-clônico, generalizado, em sua escola. A crise havia ocorrido há 1 hora e, segundo a professora, não durara mais de 4 minutos. O paciente, previamente hígido, apresentava desenvolvimento neuromotor normal. Ao exame físico admissional, estava febril, levemente taquicárdico, mas eupneico. Respondia adequadamente aos comandos verbais. O restante do exame físico não evidenciou alterações.\n\nCom base nas manifestações clínicas, assinale a assertiva correta.",
    "options": [
      "O paciente deve receber imediatamente diazepam intravenoso ou midazolan intramuscular",
      "O diagnóstico mais provável é convulsão febril, devendo o paciente permanecer em observação clínica e fazer exame eletroencefalográfico após 24 horas da crise",
      "Pelo risco de recorrência do episódio e pela idade do paciente, deve-se prescrever o uso profilático de medicamento anticonvulsivante",
      "A família deve ser informada sobre o fato de que a evolução clínica esperada é benigna, e o prognóstico, favorável"
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 3 anos com crise tônico-clônica generalizada única, com menos de 15 minutos, febre, recuperação completa e desenvolvimento normal: convulsão febril simples. A família deve ser tranquilizada: a evolução é benigna, o prognóstico é excelente, e não há indicação de EEG, neuroimagem ou anticonvulsivante profilático.",
    "commentary": "Diazepam ou midazolam imediato (A): a crise já cessou; o benzodiazepínico é para crise em curso (> 5 minutos).\n\nObservação e EEG após 24 horas (B): o EEG não é indicado na crise febril simples.\n\nAnticonvulsivante profilático (C): não é recomendado na crise febril simples.",
    "reference": "AAP Clinical Practice Guideline: Febrile Seizures (2011); Sociedade Brasileira de Pediatria",
    "tags": [
      "convulsão febril",
      "crise febril simples",
      "neurologia pediátrica"
    ],
    "tip": "Crise febril simples: tranquilizar a família; sem exames nem profilaxia."
  },
  {
    "id": "hcpa2026-12",
    "module": "Pediatria",
    "text": "Menino de 3 anos e 6 meses, previamente hígido, foi trazido pela mãe à UBS por febre de até 38º C e cansaço acima do habitual, quadro iniciado há cerca de 5 dias. Na noite anterior, relatou ter percebido manchas roxas em pernas e braços. Ao exame físico, a criança encontrava-se um pouco prostrada, com palidez cutaneomucosa, equimoses e petéquias nas faces interna e externa dos membros superiores e inferiores. O fígado era palpável 3 cm abaixo do rebordo costal direito. Demais aspectos do exame não revelaram particularidades. Considerando a principal hipótese diagnóstica, qual a conduta mais adequada?",
    "options": [
      "Solicitar sorologias para hepatite, enzimas hepáticas e perfil de coagulação",
      "Solicitar hemograma, leucograma e contagem de plaquetas",
      "Solicitar ultrassonografia abdominal, pesquisa de sangue oculto nas fezes e EQU",
      "Encaminhar o caso para a assistente social por suspeita de maus-tratos"
    ],
    "correctAnswer": 1,
    "explanation": "Pré-escolar com febre, cansaço, palidez, equimoses e petéquias em locais variados e hepatomegalia: suspeita de leucemia aguda (ou outra causa de falência medular). O primeiro passo é o hemograma completo com contagem de plaquetas e esfregaço, que orienta o encaminhamento urgente.",
    "commentary": "Sorologias para hepatite e coagulograma (A): não abordam a principal hipótese (citopenias).\n\nUltrassom, sangue oculto e urina (C): não investigam a causa das petéquias e da palidez.\n\nEncaminhar por maus-tratos (D): as lesões e os achados sistêmicos (febre, palidez, hepatomegalia) apontam para doença hematológica; maus-tratos é diferencial, mas não a conduta inicial.",
    "reference": "INCA – Diagnóstico precoce do câncer na criança e no adolescente; Sociedade Brasileira de Oncologia Pediátrica",
    "tags": [
      "leucemia aguda",
      "petéquias",
      "hemograma",
      "oncologia pediátrica"
    ],
    "tip": "Palidez + petéquias + febre + hepatomegalia: hemograma já."
  },
  {
    "id": "hcpa2026-13",
    "module": "Pediatria",
    "text": "Pré-escolar de 4 anos, com asma, foi trazido à consulta por não estar respondendo à medicação de controle (beclometasona spray oral, 50 mcg/jato, 3 jatos, 2 vezes/dia). Para melhorar a resposta clínica, recomenda-se fazer a medicação",
    "options": [
      "sem espaçador, com o spray na vertical, acoplado diretamente na boca da criança, com os lábios vedados",
      "com espaçador, com a criança chorando no colo da mãe, com a máscara bem vedada em seu rosto",
      "com espaçador, sem máscara, com os lábios vedados no bocal, com a criança respirando em volume corrente",
      "com espaçador, disparando 3 jatos consecutivamente antes de a criança fazer 2-3 inalações pela máscara"
    ],
    "correctAnswer": 2,
    "explanation": "Na criança de 4 anos ou mais que consegue cooperar, o spray dosimetrado com espaçador e bocal (sem máscara), com os lábios bem vedados e respiração em volume corrente (várias respirações por jato), melhora a deposição pulmonar. Usa-se um jato por vez, aguardando as respirações antes do próximo; a criança deve estar calma.",
    "commentary": "Sem espaçador, direto na boca (A): exige coordenação que a criança não tem e aumenta a deposição na orofaringe.\n\nCom a criança chorando (B): o choro reduz drasticamente a deposição pulmonar.\n\nTrês jatos consecutivos no espaçador (D): disparos múltiplos reduzem a quantidade de medicamento disponível; deve-se disparar um jato por vez.",
    "reference": "GINA 2024; Sociedade Brasileira de Pediatria – Técnica inalatória na criança",
    "tags": [
      "asma",
      "técnica inalatória",
      "espaçador",
      "pneumologia pediátrica"
    ],
    "tip": "Espaçador: um jato por vez, criança calma; bocal a partir de ~4 anos."
  },
  {
    "id": "hcpa2026-14",
    "module": "Pediatria",
    "text": "Pré-escolar de 5 anos, previamente hígida, foi trazida à consulta por apresentar, há 3 dias, secreção nasal inicialmente hialina e, há 1 dia, espessa e esbranquiçada. A febre associada, de até 37,8º C, foi controlada com antitérmicos. À oroscopia, constataram-se leve hiperemia faríngea e gota pós-nasal; à rinoscopia, edema e hiperemia de mucosa, além de secreção turva e espessa bilateralmente. Com esses dados clínicos, qual o diagnóstico mais provável?",
    "options": [
      "Rinossinusite aguda bacteriana",
      "Rinossinusite aguda viral",
      "Rinossinusite aguda pós-viral",
      "Rinossinusite aguda alérgica complicada"
    ],
    "correctAnswer": 1,
    "explanation": "Quadro de 3 dias de coriza que fica espessa, febre baixa, hiperemia de mucosa e gota pós-nasal: rinossinusite aguda viral (resfriado). A mudança de cor da secreção não indica infecção bacteriana. A rinossinusite bacteriana é suspeitada com sintomas persistentes por mais de 10 dias sem melhora, piora após melhora inicial (dupla piora) ou início grave (febre ≥ 39 °C com secreção purulenta por 3–4 dias).",
    "commentary": "Bacteriana (A): faltam os critérios de duração ou gravidade.\n\nPós-viral (C): definida pela piora após 5 dias ou persistência além de 10 dias (EPOS).\n\nAlérgica complicada (D): não há história de atopia ou sintomas alérgicos.",
    "reference": "EPOS 2020 – European Position Paper on Rhinosinusitis; AAP Clinical Practice Guideline (2013)",
    "tags": [
      "rinossinusite viral",
      "infecções de vias aéreas superiores",
      "otorrinolaringologia"
    ],
    "tip": "Secreção espessa não é sinal de bactéria; pensar em bacteriana após 10 dias ou dupla piora."
  },
  {
    "id": "hcpa2026-15",
    "module": "Pediatria",
    "text": "Menino de 6 anos foi trazido à UPA por apresentar diarreia há 3 dias (sem sangue ou muco) e vômitos alimentares (3 vezes antes da consulta). Ao exame físico, encontrava-se prostrado, com olhos encovados e pele com turgor diminuído e com temperatura axilar de 37,5º C; à ausculta pulmonar, não foram identificadas alterações; à ausculta cardíaca, o ritmo era regular, com frequência cardíaca de 100 bpm; à palpação, o abdômen encontrava-se globoso, depressível e com ruídos hidroaéreos aumentados; os pulsos eram palpáveis, e as extremidades estavam aquecidas.\n\nCom base no quadro, assinale o conjunto de condutas recomendado no momento.",
    "options": [
      "Manter a criança em observação na UPA e iniciar soro de reidratação oral, na dose de 100 ml/kg a cada 4 horas",
      "Manter a criança em observação na UPA e administrar soro fisiológico intravenoso, na dose de 20 ml/kg",
      "Encaminhar a criança para avaliação em ambiente hospitalar e administrar soro fisiológico intravenoso, na dose de 30 ml/kg em 1 hora",
      "Encaminhar a criança para casa e, se constatados sinais de piora clínica, retornar à UPA e administrar soro de reidratação oral a cada evacuação"
    ],
    "correctAnswer": 0,
    "explanation": "Criança com diarreia e vômitos, olhos encovados e turgor diminuído, mas com pulsos palpáveis, extremidades aquecidas e frequência normal: desidratação (pelo gabarito, plano B do Ministério da Saúde). A conduta é terapia de reidratação oral na unidade, com solução de reidratação oral 50–100 mL/kg em 4–6 horas (a alternativa cita 100 mL/kg em 4 horas), com reavaliação frequente.",
    "commentary": "SF 20 mL/kg na UPA (B): a hidratação venosa é reservada para desidratação grave ou falha da TRO.\n\nEncaminhar ao hospital com SF 30 mL/kg (C): plano C, para desidratação grave com choque.\n\nAlta com SRO após evacuações (D): é o plano A, para crianças sem desidratação.",
    "reference": "Ministério da Saúde – Manejo do paciente com diarreia (2023)",
    "tags": [
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral",
      "plano B"
    ],
    "alert": "O termo “prostrado” pode sugerir desidratação grave (plano C); o gabarito considera, pelo restante do exame (pulsos, perfusão e frequência normais), desidratação sem gravidade (plano B).",
    "tip": "Desidratação sem choque: plano B, SRO na unidade."
  },
  {
    "id": "hcpa2026-16",
    "module": "Pediatria",
    "text": "Adolescente de 10 anos iniciou, há 1 semana, com mialgia, principalmente nos membros superiores, e cansaço, mesmo sem esforços; passou a apresentar há 3 dias, febre e dificuldade para engolir alimentos sólidos por dores na garganta e no pescoço. Foi trazido à UPA, tendo-lhe sido prescrita amoxicilina (90 mg/kg/dia) por orofaringe hiperemiada, ambas as tonsilas com exsudato e linfadenopatia cervical posterior. Após 24 horas, não teve mais febre, porém apresentou erupção exantemática macular na face, no abdômen e no tórax anterior. Assinale a alternativa que contempla a hipótese diagnóstica mais provável, os achados laboratoriais relacionados e a conduta mais adequada.",
    "options": [
      "Mononucleose - linfocitose com presença de linfócitos atípicos - Manter amoxicilina e associar aciclovir",
      "Mononucleose - linfocitose com presença de linfócitos atípicos - Suspender amoxicilina e iniciar com medicamentos sintomáticos e repouso",
      "Amigdalite bacteriana - leucocitose com neutrofilia - Substituir amoxicilina por macrolídeo devido à alergia causada pelo medicamento betalactâmico",
      "Amigdalite bacteriana - leucopenia - Substituir amoxicilina por amoxicilina-clavulanato"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com fadiga, febre, faringoamigdalite exsudativa, linfadenopatia cervical posterior e exantema após amoxicilina: mononucleose infecciosa (vírus Epstein-Barr). O hemograma mostra linfocitose com linfócitos atípicos. A conduta é suspender a amoxicilina e manter tratamento sintomático, repouso e evitar esportes de contato (risco de ruptura esplênica).",
    "commentary": "Manter amoxicilina e associar aciclovir (A): o aciclovir não tem benefício clínico relevante, e a amoxicilina deve ser suspensa.\n\nAmigdalite bacteriana com alergia ao betalactâmico (C): o exantema pela amoxicilina na mononucleose não indica alergia verdadeira.\n\nAmigdalite bacteriana com amoxicilina-clavulanato (D): o quadro é viral.",
    "reference": "Sociedade Brasileira de Pediatria; Harrison – Medicina Interna",
    "tags": [
      "mononucleose infecciosa",
      "vírus Epstein-Barr",
      "exantema por amoxicilina",
      "infectologia pediátrica"
    ],
    "tip": "Faringite + linfonodo posterior + rash com amoxicilina = mononucleose."
  },
  {
    "id": "hcpa2026-17",
    "module": "Pediatria",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nInfecção do trato urinário (ITU) é a.......... infecção bacteriana mais prevalente em Pediatria. Entre as crianças com menos de 7 anos, acomete proporcionalmente mais........... Das manifestações clínicas relatadas, a piúria apresenta maior probabilidade de ocorrência quando a ITU tem como agente etiológico............",
    "options": [
      "primeira - meninas - Klebsiella sp",
      "primeira - meninos - Escherichia coli",
      "segunda - meninas - Escherichia coli",
      "segunda - meninos - Klebsiella sp"
    ],
    "correctAnswer": 2,
    "explanation": "A infecção do trato urinário é a segunda infecção bacteriana mais frequente em pediatria (após a otite média aguda). Após o primeiro ano de vida e em menores de 7 anos, acomete mais meninas. A Escherichia coli é o principal agente (80–90%), e a piúria é mais frequente nas infecções por E. coli do que por outros agentes (como Klebsiella, Enterococcus, Pseudomonas).",
    "commentary": "Primeira (A e B): a OMA é mais frequente.\n\nMeninos (B e D): meninos predominam apenas nos primeiros meses de vida.\n\nKlebsiella (A e D): a piúria é mais associada à E. coli.",
    "reference": "Sociedade Brasileira de Pediatria – Infecção do trato urinário (2021)",
    "tags": [
      "infecção do trato urinário",
      "E. coli",
      "nefrologia pediátrica"
    ],
    "tip": "ITU: segunda infecção bacteriana da infância; E. coli; mais em meninas após 1 ano."
  },
  {
    "id": "hcpa2026-18",
    "module": "Pediatria",
    "text": "Conforme o Calendário de Vacinação 2025, do Ministério da Saúde, qual o esquema de vacinação contra HPV?",
    "options": [
      "Dose única entre 9 e 14 anos apenas em meninas",
      "Dose única entre 9 e 14 anos em meninas e meninos",
      "Duas doses entre 9 e 14 anos em meninas e meninos",
      "Duas doses entre 9 e 14 anos em meninas e dose única em meninos"
    ],
    "correctAnswer": 1,
    "explanation": "Pelo Calendário Nacional de Vacinação de 2025, a vacina HPV quadrivalente é aplicada em dose única para meninas e meninos de 9 a 14 anos (com resgate até 19 anos), e em esquemas especiais para imunossuprimidos e outros grupos.",
    "commentary": "Apenas meninas (A) e esquemas diferentes por sexo (D): meninos também são vacinados, em dose única.\n\nDuas doses (C): desde 2024, o esquema na faixa de 9 a 14 anos é dose única.",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação (2025); Nota técnica sobre dose única da vacina HPV (2024)",
    "tags": [
      "vacina HPV",
      "calendário vacinal do adolescente",
      "imunizações"
    ],
    "tip": "HPV: dose única, 9–14 anos, meninos e meninas."
  },
  {
    "id": "hcpa2026-19",
    "module": "Pediatria",
    "text": "No âmbito da Atenção Primária a crianças e adolescentes, todo médico é responsável pela orientação preventiva de injúrias por causas externas. Nesse sentido, é correto afirmar que há evidências científicas suficientes de que",
    "options": [
      "a estatura mínima para uma criança ocupante do banco traseiro de veículo automotor usar o cinto de segurança do carro isoladamente, sem a necessidade do uso de dispositivo de retenção, independentemente de sua idade, é 1,35 metro segundo o padrão europeu e 1,45 metro segundo o padrão estadunidense",
      "a orientação antecipatória é factível e comprovadamente eficaz na melhora do conhecimento sobre segurança, na mudança do comportamento para um estilo mais seguro e na redução efetiva de ocorrências de todos os tipos de injúrias por causas externas",
      "o ensino de natação não é uma medida considerada eficaz na prevenção do afogamento de crianças e jovens, devendo-se dar preferência ao uso de dispositivos pessoais de flutuação, como as boias, e ao cercamento de piscinas com grades com altura mínima de 1,0 metro e portões com mola e tranca automática",
      "a supervisão deficiente por parte de cuidadores é o fator de risco mais relevante para injúrias por causas externas, sobretudo não intencionais, havendo à disposição bons programas preventivos, especificamente focados em melhorá-la"
    ],
    "correctAnswer": 1,
    "explanation": "Pelo gabarito, há evidências de que a orientação antecipatória sobre segurança, feita na puericultura, é factível e eficaz: melhora o conhecimento, muda comportamentos (uso de cadeirinha, detectores de fumaça, guarda de medicamentos, temperatura da água) e reduz a ocorrência de injúrias.",
    "commentary": "Estatura de 1,35 e 1,45 m (A): os padrões recomendam o uso do cinto isolado a partir de cerca de 1,45 m (e o CTB exige dispositivo de retenção até 10 anos ou 1,45 m); os números citados misturam padrões.\n\nEnsino de natação ineficaz (C): aulas formais de natação reduzem o risco de afogamento (AAP 2019), associadas a supervisão e cercamento da piscina (com altura mínima de 1,2–1,5 m).\n\nSupervisão como fator mais relevante, com bons programas específicos (D): a supervisão é importante, mas faltam programas comprovadamente eficazes focados só nela.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de prevenção de acidentes; AAP – Prevention of Drowning (2019)",
    "tags": [
      "prevenção de acidentes",
      "causas externas",
      "puericultura"
    ],
    "alert": "A afirmação de redução de “todos os tipos” de injúrias é forte; as evidências são mais consistentes para alguns comportamentos e tipos de acidente.",
    "tip": "Orientação antecipatória na puericultura muda comportamentos de segurança."
  },
  {
    "id": "hcpa2026-20",
    "module": "Pediatria",
    "text": "Assinale a assertiva correta sobre lesão pulmonar associada a uso de cigarro eletrônico (EVALI).",
    "options": [
      "Corticosteroide inalatório em dose alta está indicado para tratamento de casos refratários",
      "Náusea, vômito e diarreia não fazem parte das manifestações clínicas descritas",
      "O diagnóstico é clínico, não sendo necessários exames de imagem para investigação",
      "Pode evoluir para insuficiência respiratória com necessidade de ventilação mecânica"
    ],
    "correctAnswer": 3,
    "explanation": "A lesão pulmonar associada ao cigarro eletrônico (EVALI) pode evoluir para insuficiência respiratória grave com necessidade de ventilação mecânica. Cursa com sintomas respiratórios (tosse, dispneia, dor torácica), gastrointestinais (náuseas, vômitos, diarreia, dor abdominal) e constitucionais; o diagnóstico exige imagem (opacidades bilaterais, vidro fosco) e exclusão de outras causas. O tratamento inclui suspender o uso e corticoide sistêmico nos casos graves.",
    "commentary": "Corticoide inalatório em dose alta (A): nos casos graves usa-se corticoide sistêmico.\n\nSem sintomas gastrointestinais (B): náuseas, vômitos e diarreia são frequentes.\n\nDiagnóstico só clínico (C): a imagem do tórax faz parte da definição de caso.",
    "reference": "CDC – EVALI (2020); Sociedade Brasileira de Pneumologia e Tisiologia",
    "tags": [
      "EVALI",
      "cigarro eletrônico",
      "saúde do adolescente",
      "pneumologia"
    ],
    "tip": "EVALI: sintomas respiratórios + GI + imagem bilateral; pode precisar de ventilação."
  },
  {
    "id": "hcpa2026-21",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 20 anos, GIPO, sem pré-natal, foi trazida ao Centro Obstétrico por contrações e perda de líquido. Referiu ter feito uso de cocaína há 2 horas. Ao exame, apresentava sinais vitais estáveis, 3 contrações uterinas efetivas e regulares em 10 minutos, saída de líquido claro pelo orifício cervical externo e mudanças cervicais (dilatação de 5 cm e apagamento de 90%). Ultrassonografia (US) evidenciou feto único com movimentação ativa, em apresentação cefálica e idade gestacional compatível com 31 semanas. Assinale a assertiva correta sobre o caso clínico.",
    "options": [
      "São necessários testes adicionais, tais como US transvaginal evidenciando colo curto (< 25 mm) ou testes imunocromatográficos positivos, para estabelecer o diagnóstico de trabalho de parto pré-termo",
      "Por se tratar de ruptura prematura de membranas pré-termo, deve-se avaliar o bem-estar fetal, realizar tocólise e rastreamento para estreptococos do grupo B, além de administrar corticosteroides, antimicrobianos (para prolongar a latência) e progesterona",
      "Deve-se avaliar o bem-estar fetal, investigar sinais de infecção intrauterina e administrar corticosteroides, antimicrobianos (para estreptococos do grupo B) e sulfato de magnésio",
      "Se o quadro clínico evoluir, na assistência ao parto e ao recém-nascido devem ser preconizadas a ordenha do cordão umbilical, a prevenção da hipotermia do recém-nascido e a amamentação na primeira hora"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 31 semanas em trabalho de parto pré-termo ativo (contrações regulares, 5 cm de dilatação) com rotura de membranas, após uso de cocaína. A conduta é avaliar a vitalidade fetal, investigar infecção intrauterina, administrar corticoide para maturação pulmonar, antibiótico para profilaxia do estreptococo do grupo B (status desconhecido) e sulfato de magnésio para neuroproteção (abaixo de 32 semanas).",
    "commentary": "Testes adicionais para confirmar trabalho de parto (A): com 5 cm de dilatação e contrações regulares, o diagnóstico é clínico.\n\nTocólise e progesterona na rotura (B): com trabalho de parto avançado e rotura, a tocólise não é indicada, e progesterona não tem papel.\n\nOrdenha do cordão (D): a ordenha não é recomendada em prematuros com menos de 28 semanas e, em geral, prefere-se o clampeamento oportuno; a alternativa não contempla os cuidados prioritários.",
    "reference": "Febrasgo – Parto pré-termo e rotura prematura de membranas; ACOG Practice Bulletin nº 217 (2020)",
    "tags": [
      "trabalho de parto prematuro",
      "sulfato de magnésio",
      "corticoterapia antenatal",
      "estreptococo do grupo B"
    ],
    "tip": "Parto prematuro < 32 semanas: corticoide + magnésio + profilaxia do GBS."
  },
  {
    "id": "hcpa2026-22",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a infecção por toxoplasmose na gestante e no recém-nascido.",
    "options": [
      "No primeiro trimestre da gestação, a presença de IgM e IgG reagentes, associada à de IgG de alta avidez, indica fortemente infecção aguda adquirida na gestação",
      "Quando houver indicação, a amniocentese para obtenção de PCR para DNA de Toxoplasma gondii no líquido amniótico deve ser realizada a partir de 14 semanas de gestação ou, no máximo, até 4 semanas após a data da infecção primária materna",
      "O tratamento com esquema tríplice é o indicado quando o diagnóstico da infecção ocorrer após as 18 semanas de gestação; no primeiro trimestre, deve ser evitado, pois tanto a pirimetamina quanto a sulfadiazina atuam como antagonistas do ácido fólico",
      "No recém-nascido com menos de 6 meses, a presença de anticorpos da classe IgG confirma a toxoplasmose congênita, já que eles não ultrapassam a barreira placentária"
    ],
    "correctAnswer": 2,
    "explanation": "Na toxoplasmose gestacional, o esquema tríplice (pirimetamina, sulfadiazina e ácido folínico) é indicado quando há infecção fetal confirmada ou suspeita, ou infecção materna após cerca de 16–18 semanas (maior risco de transmissão); no primeiro trimestre é evitado pelo efeito antifólico da pirimetamina e da sulfadiazina (teratogenicidade), usando-se espiramicina.",
    "commentary": "IgG de alta avidez indicando infecção aguda (A): alta avidez no primeiro trimestre indica infecção antiga (mais de 12–16 semanas), antes da gestação.\n\nAmniocentese a partir de 14 semanas ou até 4 semanas após a infecção (B): deve ser feita a partir de 18 semanas e pelo menos 4 semanas após a infecção materna.\n\nIgG no RN confirma infecção congênita (D): a IgG atravessa a placenta; o diagnóstico usa IgM/IgA ou persistência da IgG após 12 meses.",
    "reference": "Ministério da Saúde – Protocolo de notificação e investigação: toxoplasmose gestacional e congênita (2018); Febrasgo",
    "tags": [
      "toxoplasmose",
      "toxoplasmose congênita",
      "esquema tríplice",
      "pré-natal"
    ],
    "tip": "Toxoplasmose na gestação: espiramicina antes de ~18 semanas; tríplice depois ou se infecção fetal."
  },
  {
    "id": "hcpa2026-23",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a toxicidade dos compostos do tabaco na gestante e no feto.",
    "options": [
      "O transporte de aminoácidos pela placenta está aumentado nas fumantes, o que interfere na síntese proteica e contribui para o mau desenvolvimento da membrana amniocoriônica",
      "A nicotina causa vasoconstricção dos vasos do útero e da placenta, reduzindo o fluxo sanguíneo e a oferta de oxigênio e nutrientes para o feto",
      "O aumento de abortamentos em fumantes pode ser explicado pelo aumento da síntese placentária de óxido nítrico, um potente constritor do miométrio",
      "A hemoglobina fetal tem uma ligação com o monóxido de carbono mais fraca do que a hemoglobina materna, resultando em níveis de carboxi-hemoglobina mais elevados na circulação fetal, responsáveis pela hipoxemia tecidual"
    ],
    "correctAnswer": 1,
    "explanation": "A nicotina causa vasoconstrição das artérias uterinas e placentárias, reduzindo o fluxo sanguíneo e a oferta de oxigênio e nutrientes ao feto, o que contribui para restrição de crescimento, descolamento de placenta e prematuridade. O monóxido de carbono agrava a hipóxia.",
    "commentary": "Transporte de aminoácidos aumentado (A): o tabagismo reduz o transporte placentário de aminoácidos.\n\nAumento do óxido nítrico como constritor (C): o óxido nítrico é vasodilatador e relaxante muscular, e o tabagismo reduz sua produção.\n\nHbF com ligação mais fraca ao CO (D): a hemoglobina fetal tem afinidade ainda maior pelo CO, gerando carboxi-hemoglobina mais alta no feto.",
    "reference": "Febrasgo – Tabagismo na gestação; Zugaib Obstetrícia, 5ª ed.",
    "tags": [
      "tabagismo na gestação",
      "nicotina",
      "restrição de crescimento fetal",
      "pré-natal"
    ],
    "tip": "Nicotina contrai os vasos uteroplacentários; CO se liga ainda mais à HbF."
  },
  {
    "id": "hcpa2026-24",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 23 anos, com hipertensão arterial crônica desde os 17 anos, tratada com losartana (50 mg/dia, por via oral), teve seu tratamento modificado, desde o início da gestação, para metildopa (500 mg, por via oral, de 12/12 horas). O feto encontrava-se com crescimento adequado. A gestante vinha realizando profilaxia para pré-eclâmpsia com AAS e cálcio. Agora, com 36 semanas, apresenta aumento da pressão arterial, permanecendo com controle adequado por ter sido alterada a dose de metildopa (500 mg, 3 vezes/dia). À investigação diagnóstica, a relação proteína/creatinina urinária era de 0,29, a dosagem de fator de crescimento placentário (PlGF) de 160 pg/ml e o ácido úrico de 4,6 mg/dl. Que conduta, dentre as abaixo, está indicada?",
    "options": [
      "Internar a gestante para observação",
      "Indicar o término imediato da gestação",
      "Associar carvedilol a metildopa",
      "Resolver a gestação com 38 semanas"
    ],
    "correctAnswer": 3,
    "explanation": "Gestante com hipertensão crônica, PA controlada com ajuste da metildopa, sem proteinúria significativa (P/C 0,29 < 0,3), PlGF normal (> 100 pg/mL, afastando pré-eclâmpsia), ácido úrico normal e feto com crescimento adequado: hipertensão crônica controlada, sem pré-eclâmpsia sobreposta. A recomendação é resolver a gestação com 38 semanas (entre 37 e 39 semanas).",
    "commentary": "Internar para observação (A): sem sinais de pré-eclâmpsia ou descontrole, o seguimento pode ser ambulatorial.\n\nTérmino imediato (B): não há indicação materna ou fetal de interromper com 36 semanas.\n\nAssociar carvedilol (C): a PA já está controlada.",
    "reference": "Febrasgo/RBEHG – Hipertensão na gestação (2023); ACOG Practice Bulletin nº 203 – Chronic Hypertension in Pregnancy",
    "tags": [
      "hipertensão crônica na gestação",
      "PlGF",
      "momento do parto",
      "gestação de alto risco"
    ],
    "tip": "Hipertensão crônica controlada sem pré-eclâmpsia: parto entre 37 e 39 semanas."
  },
  {
    "id": "hcpa2026-25",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 28 anos, G2P1, com 32 semanas de gestação, deu entrada na Emergência após acidente automobilístico de média intensidade. Informou que estava usando cinto de segurança e não ter havido perda de consciência. Referiu dor abdominal difusa e movimentos fetais diminuídos. Ao exame físico, apresentava-se hemodinamicamente estável, com dor à palpação do hipogástrio, sem sangramento vaginal. À ausculta, os batimentos cardiofetais tinham frequência de 130 bpm. Ultrassonografia revelou placenta anterior sem descolamento evidente, feto único vivo e líquido amniótico em quantidade normal. Que conduta, dentre as abaixo, é a mais adequada?",
    "options": [
      "Alta hospitalar após exame físico normal e vitalidade fetal confirmada, com orientação de retorno se houver sintomas",
      "Administração de tocolítico imediatamente para prevenir parto prematuro relacionado ao trauma",
      "Observação hospitalar por, pelo menos, 24 horas com monitorização fetal contínua",
      "Realização de parto cesáreo imediatamente por risco fetal iminente, mesmo sem sinais de condição fetal não tranquilizadora"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 32 semanas após trauma automobilístico de média energia, com dor abdominal e diminuição de movimentos fetais, mesmo estável e com ultrassom sem descolamento visível: o ultrassom tem baixa sensibilidade para descolamento prematuro de placenta. Recomenda-se observação hospitalar com monitorização cardiotocográfica contínua por pelo menos 4–6 horas — e por 24 horas se houver contrações, dor, sangramento ou alterações.",
    "commentary": "Alta após exame normal (A): a dor abdominal e a redução de movimentos fetais exigem monitorização.\n\nTocólise imediata (B): não há trabalho de parto, e a tocólise pode mascarar descolamento.\n\nCesárea imediata (D): não há sinal de sofrimento fetal ou instabilidade materna.",
    "reference": "ACOG Committee Opinion – Trauma in Pregnancy; ATLS 10ª ed. (trauma na gestante)",
    "tags": [
      "trauma na gestação",
      "descolamento prematuro de placenta",
      "cardiotocografia",
      "emergência obstétrica"
    ],
    "tip": "Trauma na gestante com dor ou sintomas: monitorização fetal prolongada."
  },
  {
    "id": "hcpa2026-26",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 40 anos, G3P2, foi encaminhada ao Centro Obstétrico por estar com 41 semanas e 2 dias de gestação. Fazia acompanhamento pré-natal de risco habitual. Os resultados de todos os exames estavam normais, e o crescimento fetal era adequado. Ao exame, o colo encontrava-se central, com 1 cm de dilatação, 30% de apagamento e consistência firme, com apresentação cefálica não insinuada. Considerando o perfil obstétrico apresentado, qual a conduta mais adequada no momento para promover o nascimento?",
    "options": [
      "Iniciar ocitocina intravenosa em infusão contínua",
      "Realizar amniotomia e iniciar deambulação",
      "Iniciar preparo cervical com análogo de prostaglandina (misoprostol) ou método mecânico (sonda de Foley), seguido de reavaliação em 6-12 horas",
      "Indicar cesariana eletiva devido a colo desfavorável e idade materna avançada, condições que aumentam o risco de insucesso da indução"
    ],
    "correctAnswer": 2,
    "explanation": "Gestação de 41 semanas e 2 dias (pós-datismo) com colo desfavorável (pouca dilatação, apagamento e consistência firme — índice de Bishop baixo): indica-se indução do parto com preparo cervical prévio, com misoprostol ou método mecânico (sonda de Foley), e reavaliação em 6–12 horas, seguido de ocitocina se necessário.",
    "commentary": "Ocitocina direta (A): com colo desfavorável, a ocitocina isolada tem menor sucesso; primeiro prepara-se o colo.\n\nAmniotomia e deambulação (B): a amniotomia exige colo favorável e apresentação insinuada.\n\nCesárea eletiva (D): idade materna e colo desfavorável não indicam cesárea; a indução é segura.",
    "reference": "Febrasgo – Indução do trabalho de parto; Ministério da Saúde – Diretrizes Nacionais de Assistência ao Parto Normal",
    "tags": [
      "indução do parto",
      "pós-datismo",
      "misoprostol",
      "obstetrícia"
    ],
    "tip": "Colo desfavorável: preparar com misoprostol ou Foley antes da ocitocina."
  },
  {
    "id": "hcpa2026-27",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a infecção por sífilis na gestação.",
    "options": [
      "A transmissão vertical será maior quanto mais avançada for a gestação, sendo também maior nas fases primária e secundária do que nas fases latente e terciária",
      "Apenas um teste não é suficiente para concluir o diagnóstico, pois testes sorológicos, principalmente os treponêmicos, estão associados a resultados falsos positivos por condições como drogadição, doenças reumáticas e até a própria gestação",
      "Em gestante que se encontra assintomática e sem história de tratamento ou conhecimento da infecção, o diagnóstico é de sífilis primária, devendo ser tratada com penicilina G benzatina, 2,4 milhões UI, por via intramuscular, em dose única (1,2 milhão UI em cada glúteo)",
      "O tratamento deve ser realizado o mais precocemente possível e, para as gestantes alérgicas a penicilina, pode-se utilizar, como medicamento alternativo, doxiciclina (100 mg, por via oral, 2 vezes/dia, por 15 dias)"
    ],
    "correctAnswer": 0,
    "explanation": "Na sífilis, a transmissão vertical é maior quanto mais avançada a gestação e nas fases recentes da doença (primária e secundária, com taxas de 70–100%), menor na latente e terciária.",
    "commentary": "Testes treponêmicos com falsos positivos por gestação (B): os falsos positivos são mais associados aos testes não treponêmicos.\n\nAssintomática sem história como sífilis primária (C): sem lesões e sem saber o tempo, classifica-se como latente de duração ignorada, tratada com 3 doses.\n\nDoxiciclina em gestantes alérgicas (D): a doxiciclina é contraindicada na gestação; a alérgica deve ser dessensibilizada para receber penicilina.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis na gestação",
      "transmissão vertical",
      "sífilis congênita"
    ],
    "tip": "Transmissão vertical da sífilis: maior nas fases recentes e no fim da gestação."
  },
  {
    "id": "hcpa2026-28",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nGestante de 22 anos, GIPO, com 25 semanas de gestação, assintomática, veio ao Centro Obstétrico por orientação do médico do pré-natal, trazendo os laudos de exames ultrassonográficos.\n\nExame 1: Identifica-se um saco gestacional, contendo dois embriões com vitalidade; o comprimento cabeça-nádegas do embrião à esquerda tem 30 mm, e o do embrião à direita tem 25 mm. Conclusão: gestação gemelar; idade gestacional compatível com 9 semanas + 5 dias.\n\nExame 2: Identificam-se dois fetos com vitalidade; massa placentária na região fúndica do útero; líquido em quantidade normal na cavidade amniótica à esquerda e diminuída à direita. Conclusão: gestação gemelar diamniótica, idade gestacional compatível com 24 semanas; o peso do feto à esquerda encontra-se no percentil 50, e o do feto à direita no percentil 8 para a IG; diferença de peso entre os fetos de 26%.\n\nConsiderando as informações dos laudos trazidos pela gestante e as diretrizes para a realização de ultrassonografia na gestação gemelar, pode-se afirmar que se trata de gestação gemelar............ A datação da gestação foi corretamente realizada pelo embrião de........... comprimento cabeça-nádegas. A hipótese diagnóstica é............",
    "options": [
      "monocoriônica - menor - síndrome de transfusão feto-fetal",
      "monocoriônica - maior - restrição de crescimento fetal seletiva",
      "dicoriônica - menor - restrição de crescimento fetal seletiva",
      "dicoriônica - maior - síndrome de transfusão feto-fetal"
    ],
    "correctAnswer": 1,
    "explanation": "O primeiro ultrassom (9 semanas) mostra um único saco gestacional com dois embriões, compatível com gestação monocoriônica; a datação, em gemelares, deve ser feita pelo embrião de maior comprimento cabeça-nádegas. Com 24 semanas, há discordância de peso de 26% e um feto abaixo do percentil 10, com líquido diminuído só ao redor desse feto (sem o polidrâmnio do outro, que caracterizaria transfusão feto-fetal): restrição de crescimento fetal seletiva.",
    "commentary": "Monocoriônica, menor CCN, transfusão feto-fetal (A): datação pelo maior, e falta o polidrâmnio no receptor.\n\nDicoriônica (C e D): um único saco gestacional no primeiro trimestre indica monocoriônica.",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (2016)",
    "tags": [
      "gestação gemelar",
      "restrição de crescimento seletiva",
      "datação da gestação",
      "medicina fetal"
    ],
    "tip": "Gemelar: datar pelo maior CCN; RCIU seletiva = discordância > 25% + um feto < p10, sem oligo/poli."
  },
  {
    "id": "hcpa2026-29",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 17 anos, com 38 semanas e 5 dias de gestação, com pré-natal de risco habitual, foi internada no Centro Obstétrico na fase ativa do trabalho de parto. Transcorridas 5 horas, evoluiu para parto vaginal com períneo íntegro. Após o nascimento, a paciente recebeu ocitocina intramuscular (10 Ul). Foi realizado clampeamento oportuno do cordão umbilical e a dequitação ocorreu com a placenta íntegra. A paciente passou a queixar-se de sudorese e mal-estar. Ao exame físico, apresentava pressão arterial de 90/60 mmHg, frequência cardíaca de 120 bpm, útero com volume aumentado (acima da cicatriz umbilical) e sangramento vaginal ativo.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "Retenção placentária é a principal causa de hemorragia puerperal, sendo necessária a imediata realização de curetagem uterina",
      "Deve-se iniciar reposição volêmica vigorosa com cristaloides no mesmo acesso venoso dos uterotônicos, independentemente da causa",
      "Ocitocina é o principal medicamento recomendado para prevenção e tratamento da atonia uterina, sendo mantida em infusão contínua",
      "Ácido tranexâmico, misoprostol e metilergometrina são medicamentos de segunda linha e somente devem ser usados se a atonia uterina não for responsiva a ocitocina"
    ],
    "correctAnswer": 2,
    "explanation": "Hemorragia pós-parto com útero aumentado, amolecido e acima da cicatriz umbilical após placenta íntegra: atonia uterina. A ocitocina é o principal fármaco para prevenção e tratamento da atonia, devendo ser mantida em infusão contínua após a dose inicial (junto com massagem uterina e ácido tranexâmico precoce).",
    "commentary": "Retenção placentária como principal causa com curetagem (A): a atonia é a principal causa, e a placenta saiu íntegra.\n\nReposição no mesmo acesso dos uterotônicos (B): idealmente usam-se dois acessos calibrosos; a reposição deve ser guiada (evitando excesso de cristaloide).\n\nÁcido tranexâmico só se não responder à ocitocina (D): o tranexâmico deve ser dado precocemente (até 3 horas), junto com os uterotônicos, independentemente da causa.",
    "reference": "OPAS – Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018); Febrasgo",
    "tags": [
      "hemorragia pós-parto",
      "atonia uterina",
      "ocitocina",
      "emergência obstétrica"
    ],
    "tip": "Atonia: ocitocina (bolus + infusão), massagem e tranexâmico precoce."
  },
  {
    "id": "hcpa2026-30",
    "module": "Ginecologia e Obstetrícia",
    "text": "Doença falciforme é enfermidade genética com a maior prevalência no Brasil. Jovens e adultos que não fizeram o Teste do Pezinho para detecção da doença podem realizar o rastreamento através de exame de sangue chamado eletroforese de hemoglobina, que é oferecido às gestantes e aos parceiros durante o pré-natal, e disponibilizado no SUS para toda a população. Sobre esse exame, associe as hemoglobinas (coluna da esquerda) aos significados de seus achados à eletroforese (coluna da direita).\n\n1 - Hb AA 2 - Hb A2 3 - Hb F 4 - Hb AS 5 - Hb SS, SC e SD ( ) Níveis aumentados (> 3,5%) podem indicar talassemia beta menor.\n\n( ) A pessoa apresenta traço falcêmico.\n\n( ) Costuma representar 95-98% da hemoglobina total em adultos.\n\nA sequência numérica correta, de cima para baixo, da coluna da direita, é",
    "options": [
      "1-4-2",
      "2-4-1",
      "2-5-3",
      "3-5-2"
    ],
    "correctAnswer": 1,
    "explanation": "Na eletroforese de hemoglobina: Hb A2 acima de 3,5% sugere talassemia beta menor (2); Hb AS indica traço falcêmico (4); Hb AA (A1) representa cerca de 95–98% da hemoglobina do adulto normal (1). Sequência: 2–4–1.",
    "commentary": "1–4–2 (A), 2–5–3 (C) e 3–5–2 (D): Hb SS/SC/SD indicam doença falciforme, não traço; e a Hb F é pequena no adulto (< 1–2%).",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas (2012); Manual de diagnóstico laboratorial das hemoglobinopatias",
    "tags": [
      "eletroforese de hemoglobina",
      "traço falcêmico",
      "talassemia",
      "hematologia"
    ],
    "tip": "A2 > 3,5% = beta-talassemia menor; AS = traço; AA = normal."
  },
  {
    "id": "hcpa2026-31",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 48 anos, G1C1, com IMC de 29 kg/m2, vivendo com HIV, retornou à consulta na UBS para apresentar o laudo de exame citopatológico (CP) de colo uterino: Satisfatório para avaliação, presença de células escamosas, metaplásicas e endocervicais. Células glandulares atípicas (AGC). Flora mista. Na primeira consulta, o exame ginecológico foi normal, mas a paciente se queixara de fluxo menstrual aumentado. Assinale a alternativa que contempla a hipótese diagnóstica e a conduta mais adequada.",
    "options": [
      "Alterações citológicas devidas ao HIV - Solicitar ultrassonografia transvaginal e encaminhar a paciente para colposcopia",
      "Quadros inflamatórios e infecciosos no colo uterino - Repetir o CP em 6 meses e encaminhar a paciente para colposcopia se o resultado estiver alterado",
      "Neoplasia de endométrio - Repetir o CP em 6 meses e solicitar ultrassonografia transvaginal",
      "Adenocarcinoma in situ - Encaminhar a paciente para colposcopia"
    ],
    "correctAnswer": 3,
    "explanation": "Citologia com células glandulares atípicas (AGC) em mulher de 48 anos com sangramento aumentado, vivendo com HIV: as AGC podem corresponder a adenocarcinoma in situ ou invasor endocervical, lesões escamosas de alto grau ou lesões endometriais. A conduta é encaminhar para colposcopia com avaliação do canal endocervical e, acima de 35 anos ou com sangramento anormal, também avaliar o endométrio (ultrassom/biópsia).",
    "commentary": "Alterações devidas ao HIV (A): o HIV não explica AGC, que exige investigação de neoplasia.\n\nInflamação com repetição em 6 meses (B) e neoplasia de endométrio com repetição da citologia (C): AGC não se repete; encaminha-se à colposcopia.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "tags": [
      "células glandulares atípicas",
      "adenocarcinoma in situ",
      "colposcopia",
      "câncer do colo do útero"
    ],
    "tip": "AGC: colposcopia (canal) e, se ≥ 35 anos ou sangramento, avaliar endométrio."
  },
  {
    "id": "hcpa2026-32",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre o sangramento uterino anormal.",
    "options": [
      "O sangramento uterino anormal por disfunção ovulatória (SUA-O) está associado a alterações do eixo hipotálamo-hipófise-ovário ou a endocrinopatias",
      "O sangramento uterino anormal por adenomiose (SUA-A) é classificado como não estrutural",
      "A investigação inicial do sangramento uterino anormal deve incluir dosagem de TSH, T4, FSH, LH e estradiol",
      "A biópsia de endométrio está indicada para paciente em menacme que apresenta espessura endometrial com mais de 5 mm pela ultrassonografia transvaginal"
    ],
    "correctAnswer": 0,
    "explanation": "Na classificação PALM-COEIN da FIGO, o sangramento uterino anormal por disfunção ovulatória (SUA-O) decorre de alterações do eixo hipotálamo-hipófise-ovário (anovulação na adolescência, perimenopausa, SOP) ou de endocrinopatias (hipotireoidismo, hiperprolactinemia).",
    "commentary": "Adenomiose como não estrutural (B): PALM são as causas estruturais (Pólipo, Adenomiose, Leiomioma, Malignidade).\n\nInvestigação inicial com TSH, T4, FSH, LH e estradiol (C): a investigação é dirigida pela clínica (beta-hCG, hemograma, TSH, ultrassom); dosagens hormonais amplas não são rotina.\n\nBiópsia com endométrio > 5 mm na menacme (D): na menacme, a espessura endometrial varia com o ciclo e não é critério isolado; a biópsia é indicada por idade (≥ 45), fatores de risco ou falha do tratamento.",
    "reference": "FIGO – PALM-COEIN classification (2018); Febrasgo – Sangramento uterino anormal",
    "tags": [
      "sangramento uterino anormal",
      "PALM-COEIN",
      "disfunção ovulatória",
      "ginecologia"
    ],
    "tip": "PALM = estruturais; COEIN = não estruturais (O = ovulatória)."
  },
  {
    "id": "hcpa2026-33",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre doenças miometriais.",
    "options": [
      "Mioma submucoso é causa de sangramento excessivo, sendo ressecção histeroscópica o tratamento preferencial",
      "Miomas subserosos estão associados a sangramento excessivo e irregular e devem ser extirpados por videolaparoscopia",
      "Adenomiose é causa de sangramento uterino anormal, sendo facilmente diagnosticada pelo aumento do útero ao toque vaginal bimanual",
      "Miomas intramurais de até 2 cm podem ser assintomáticos e são causa frequente de infertilidade"
    ],
    "correctAnswer": 0,
    "explanation": "O mioma submucoso é o tipo que mais causa sangramento uterino aumentado (e infertilidade), e o tratamento preferencial é a miomectomia histeroscópica.",
    "commentary": "Subserosos com sangramento (B): raramente causam sangramento; dão sintomas compressivos.\n\nAdenomiose facilmente diagnosticada pelo toque (C): o útero pode estar aumentado e amolecido, mas o diagnóstico exige ultrassom transvaginal ou RM.\n\nIntramurais de até 2 cm como causa frequente de infertilidade (D): miomas intramurais pequenos, sem distorção da cavidade, têm pouco impacto na fertilidade.",
    "reference": "Febrasgo – Miomatose uterina; FIGO PALM-COEIN",
    "tags": [
      "mioma uterino",
      "histeroscopia",
      "adenomiose",
      "ginecologia"
    ],
    "tip": "Submucoso: sangra mais e se trata por histeroscopia."
  },
  {
    "id": "hcpa2026-34",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 34 anos, com diabetes melito tipo 2 (em uso irregular de insulina), veio à consulta em busca de orientação para contracepção porque deseja gestar em 1 ano. Seu peso atual era de 98 kg. Informou já ter usado contraceptivos hormonais combinados, por via oral e transdérmica (adesivo) e, atualmente, prevenir-se apenas com preservativos. Referiu que a última dosagem de hemoglobina glicada foi de 8,5% e que se encontrava em acompanhamento oftalmológico por suposta lesão vascular na retina. A alternativa mais adequada para a paciente é",
    "options": [
      "retornar ao uso de anticoncepcional oral combinado, pois deseja engravidar em curto espaço de tempo e o anticoncepcional tem rápido retorno à fertilidade",
      "retornar ao uso do adesivo transdérmico, pois sua eficácia independe do peso corporal e não existem contraindicações para métodos hormonais combinados",
      "receber orientação sobre métodos de progestagênio isolado, implante subdérmico de etonogestrel, acetato de medroxiprogesterona de depósito (150 mg intramuscular, a cada 90 dias), pois são seguros e promovem pronto retorno à ovulação quando suspensos",
      "utilizar outro método contraceptivo, como pílulas de progestagênio isolado, implante subdérmico de etonogestrel, sistemas intrauterinos de levonorgestrel ou DIU de cobre, pois está com mau controle glicêmico"
    ],
    "correctAnswer": 3,
    "explanation": "Diabética com mau controle (HbA1c 8,5%), obesa e com provável retinopatia (doença vascular): métodos com estrogênio são categoria 3/4 (diabetes com lesão vascular). As opções seguras são métodos só de progestagênio (pílula, implante, SIU-LNG) e DIU de cobre, mantendo contracepção eficaz até otimizar o controle glicêmico antes da gestação planejada.",
    "commentary": "Voltar ao anticoncepcional combinado (A) e ao adesivo (B): métodos com estrogênio são contraindicados na diabetes com doença vascular; o adesivo também perde eficácia com peso ≥ 90 kg.\n\nIncluir AMPD trimestral (C): o injetável trimestral é categoria 3 na diabetes com doença vascular e tem retorno lento da fertilidade (até 10 meses), inadequado para quem quer gestar em 1 ano.",
    "reference": "OMS – Critérios médicos de elegibilidade (2015); Sociedade Brasileira de Diabetes – Diabetes e gestação",
    "tags": [
      "contracepção",
      "diabetes mellitus",
      "critérios de elegibilidade da OMS",
      "planejamento reprodutivo"
    ],
    "tip": "Diabetes com lesão vascular: nada de estrogênio nem AMPD; usar progestagênio isolado (não injetável) ou DIU."
  },
  {
    "id": "hcpa2026-35",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 32 anos, casada, G2P2 (sem registro de intercorrências nas gestações), com IMC de 33 kg/m2, não tabagista, sem doenças crônicas e sem limitações funcionais, será submetida a laqueadura tubária por via transvaginal. Vinha fazendo uso apenas de acetato de medroxiprogesterona trimestral para anticoncepção. O Termo de Consentimento Informado já se encontrava assinado por ela e pelo médico assistente. Assinale a alternativa que contempla o conjunto correto de informações em relação ao risco anestésico, à avaliação pré-operatória e ao Termo de Consentimento Informado.",
    "options": [
      "Paciente Asa I - Não são necessários exames pré-operatórios. - O Termo de Consentimento deve ser assinado também pelo esposo",
      "Paciente Asa I - Deverão ser solicitados hemograma e hemoglobina glicada no pré-operatório. - O Termo de Consentimento não precisa ser assinado pelo esposo",
      "Paciente Asa II - Deverão ser solicitados hemograma e hemoglobina glicada no pré-operatório. - O Termo de Consentimento deve ser assinado também pelo esposo",
      "Paciente Asa II - Não são necessários exames pré-operatórios. - O Termo de Consentimento não precisa ser assinado pelo esposo"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 32 anos com IMC 33 kg/m² (obesidade, 30–40) e sem outras doenças: classificação ASA II. Para cirurgia de baixo risco em paciente sem comorbidades significativas, não são necessários exames pré-operatórios de rotina. Desde a Lei 14.443/2022, a laqueadura não exige consentimento do cônjuge.",
    "commentary": "ASA I (A e B): a obesidade (IMC 30–40) classifica como ASA II.\n\nExigir hemograma e hemoglobina glicada (B e C): não há indicação clínica.\n\nAssinatura do esposo (A e C): deixou de ser exigida pela Lei 14.443/2022.",
    "reference": "ASA Physical Status Classification (2020); Lei nº 14.443/2022",
    "tags": [
      "avaliação pré-operatória",
      "classificação ASA",
      "laqueadura tubária",
      "legislação"
    ],
    "tip": "Obesidade (IMC 30–40) = ASA II. Laqueadura sem aval do cônjuge."
  },
  {
    "id": "hcpa2026-36",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 32 anos, G3P3, consultou por vir apresentando desânimo e cansaço, tendo sido solicitados vários exames para investigação. Informou ter realizado laqueadura tubária há 3 anos e estarem regulares os ciclos menstruais. Referiu ainda ter amamentado o último filho até os 2 anos. Os resultados dos exames estavam normais, exceto a prolactina (PRL de 65 ng/ml; valor de referência: < 25 ng/ml). A ressonância magnética (RM) da hipófise foi compatível com microadenoma hipofisário de 4 mm. Qual a conduta mais adequada?",
    "options": [
      "Acompanhar o aparecimento de sintomas e dosar PRL em 1 ano",
      "Acompanhar o aparecimento de sintomas e realizar RM em 1 ano",
      "Prescrever cabergolina (0,25 mg, 2 vezes/semana) e dosar PRL após 30 dias",
      "Prescrever bromoergocriptina (2,5 mg, 3 vezes/dia) e dosar PRL após 30 dias"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher com hiperprolactinemia leve (65 ng/mL) e microadenoma hipofisário de 4 mm, com ciclos regulares, sem galactorreia, hipogonadismo ou desejo de gestação (laqueada): microprolactinoma assintomático. Não há indicação de tratamento; acompanha-se com dosagem de prolactina periódica (anual) e atenção a sintomas.",
    "commentary": "RM em 1 ano (B): microadenomas raramente crescem; a vigilância é feita com prolactina e, se subir ou surgirem sintomas, nova RM.\n\nCabergolina (C) e bromocriptina (D): o tratamento é indicado em sintomas (hipogonadismo, galactorreia incômoda, infertilidade) ou macroadenomas.",
    "reference": "Endocrine Society – Diagnosis and Treatment of Hyperprolactinemia (2011); SBEM",
    "tags": [
      "hiperprolactinemia",
      "microprolactinoma",
      "endocrinologia ginecológica"
    ],
    "alert": "Desânimo e cansaço não são sintomas típicos de hiperprolactinemia; vale lembrar de excluir outras causas de hiperprolactinemia (fármacos, hipotireoidismo).",
    "tip": "Microprolactinoma sem sintomas e sem desejo de gestar: observar."
  },
  {
    "id": "hcpa2026-37",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 48 anos, G2P2, sedentária e tabagista (20 cigarros/dia), veio à consulta queixando-se de suores noturnos frequentes e fortes que vinham prejudicando sua qualidade de vida, sono interrompido e irregularidade menstrual (atrasos intercalados com 2 menstruações ao mês, fluxo escasso), quadro iniciado há 5 meses. A data da última menstruação foi há 20 dias. Tinha histórico de câncer de mama (avó materna, aos 60 anos). Trouxe resultados de exames recentes: citopatológico do colo uterino normal, mamografia BI-RADS 2, ultrassonografia transvaginal sem particularidade e alguns exames laboratoriais solicitados na UBS (hemograma normal, colesterol de 240 mg/dl, triglicerídeos de 350 mg/dl, glicemia de 98 mg/dl). Informou adotar condom como método anticoncepcional. A conduta mais apropriada é prescrever",
    "options": [
      "fluoxetina devido ao risco aumentado de câncer de mama",
      "progestagênio de segunda fase para promover regularidade menstrual",
      "estrogênio por via não oral associado a progestagênio",
      "pílula contraceptiva hormonal combinada com estrogênio natural"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 48 anos na transição menopausal com sintomas vasomotores intensos, sem contraindicação à terapia hormonal, mas tabagista e com hipertrigliceridemia. Nessa situação, prefere-se estrogênio por via não oral (transdérmica), que tem menor risco de tromboembolismo e não aumenta triglicerídeos, associado a progestagênio (tem útero). A avó com câncer de mama aos 60 anos não contraindica a terapia.",
    "commentary": "Fluoxetina pelo risco de câncer de mama (A): a história familiar distante não contraindica a terapia hormonal; e a fluoxetina é menos eficaz para fogachos.\n\nProgestagênio de segunda fase (B): regulariza o ciclo, mas não trata adequadamente os fogachos.\n\nPílula combinada (D): contraindicada em tabagista com mais de 35 anos.",
    "reference": "Febrasgo/Sobrac – Consenso de terapêutica hormonal; NAMS 2022 Position Statement",
    "tags": [
      "climatério",
      "terapia hormonal",
      "estrogênio transdérmico",
      "tabagismo"
    ],
    "tip": "Fumante ou triglicerídeo alto: estrogênio transdérmico (+ progestagênio se útero)."
  },
  {
    "id": "hcpa2026-38",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 63 anos, G4P4, com menopausa há 12 anos, procurou o Ambulatório com queixa de sensação de peso vaginal há cerca de 1 ano, que piorava ao final do dia e melhorava em repouso. Relatou, também, dificuldade para urinar, com necessidade de “empurrar a vagina” para facilitar o esvaziamento vesical. Negou escape de urina aos esforços. O exame, realizado com a paciente em posição ginecológica e manobra de Valsalva, está reproduzido abaixo.\n\nCom base no quadro clínico e na imagem, qual o diagnóstico mais provável?",
    "options": [
      "Prolapso uterino estágio III com disfunção miccional",
      "Prolapso de parede posterior estágio III",
      "Defeito de parede vaginal anterior e posterior estágio II",
      "Defeito de parede vaginal anterior estágio II com disfunção miccional"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher com sensação de peso vaginal, dificuldade de esvaziamento vesical com necessidade de reduzir o prolapso para urinar (disfunção miccional) e sem incontinência de esforço. Pelo gabarito, o exame com Valsalva mostra defeito da parede vaginal anterior (cistocele) em estágio II do POP-Q (ponto mais distal entre 1 cm acima e 1 cm abaixo do hímen), com disfunção miccional obstrutiva.",
    "commentary": "Prolapso uterino estágio III (A): o colo não é a porção mais descida na imagem segundo o gabarito.\n\nParede posterior estágio III (B): a retocele causa dificuldade evacuatória, não miccional.\n\nDefeito anterior e posterior estágio II (C): a imagem mostra predomínio da parede anterior, e a queixa é miccional.",
    "reference": "Bump RC et al. POP-Q (1996); Febrasgo – Prolapso genital",
    "tags": [
      "prolapso genital",
      "cistocele",
      "POP-Q",
      "uroginecologia"
    ],
    "image": "/images/hcpa2026-38.webp",
    "alert": "A classificação depende da medida do ponto mais distal em relação ao hímen durante o Valsalva; a imagem estática permite interpretações diferentes. Mantido o gabarito oficial (D).",
    "tip": "Precisa “empurrar a vagina” para urinar: cistocele com disfunção miccional."
  },
  {
    "id": "hcpa2026-39",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nO uso de anticoncepcional oral combinado para o tratamento da síndrome dos ovários policísticos melhora os sinais e sintomas de hiperandrogenismo por.......... as proteínas carreadoras dos hormônios sexuais (SHBG) e, consequentemente,.......... o estímulo de LH sobre as células da...........",
    "options": [
      "diminuir - aumentar - teca",
      "aumentar - diminuir - teca",
      "diminuir - aumentar - granulosa",
      "aumentar - diminuir - granulosa"
    ],
    "correctAnswer": 1,
    "explanation": "O anticoncepcional oral combinado melhora o hiperandrogenismo na SOP porque o estrogênio aumenta a síntese hepática de SHBG (reduzindo a testosterona livre) e o progestagênio suprime o LH, diminuindo o estímulo à produção de androgênios pelas células da teca ovariana.",
    "commentary": "Diminuir a SHBG (A e C): o estrogênio aumenta a SHBG.\n\nCélulas da granulosa (C e D): a granulosa converte androgênios em estrogênios (aromatase, sob FSH); quem produz androgênios sob estímulo do LH é a teca.",
    "reference": "Speroff – Endocrinologia Ginecológica Clínica e Infertilidade; International PCOS Guideline (2023)",
    "tags": [
      "síndrome dos ovários policísticos",
      "anticoncepcional oral combinado",
      "SHBG",
      "ginecologia endócrina"
    ],
    "tip": "ACO na SOP: ↑ SHBG e ↓ LH → menos androgênio da teca."
  },
  {
    "id": "hcpa2026-40",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente feminina, de 50 anos, trouxe à consulta mamografia classificada como BI-RADS 4B. Nesse caso, a suspeita de malignidade da lesão",
    "options": [
      "é ≤ 2%",
      "situa-se entre 10 e 50%",
      "situa-se entre 50 e 95%",
      "é ≥ 95%"
    ],
    "correctAnswer": 1,
    "explanation": "No BI-RADS, a categoria 4 (suspeita) tem risco de malignidade de 2% a 95% e é subdividida em 4A (baixa suspeita: 2–10%), 4B (moderada: 10–50%) e 4C (alta: 50–95%). Todas indicam biópsia.",
    "commentary": "≤ 2% (A): corresponde ao BI-RADS 3.\n\nEntre 50 e 95% (C): corresponde ao 4C.\n\n≥ 95% (D): corresponde ao BI-RADS 5.",
    "reference": "American College of Radiology – BI-RADS Atlas, 5ª ed.",
    "tags": [
      "BI-RADS",
      "mamografia",
      "câncer de mama",
      "mastologia"
    ],
    "tip": "4A: 2–10%; 4B: 10–50%; 4C: 50–95%; 5: ≥ 95%."
  },
  {
    "id": "hcpa2026-41",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 42 anos, foi trazido à Emergência após envolver-se em uma colisão automobilística. À admissão, estava consciente, agitado e com respiração rápida. Apresentava dor abdominal intensa e sinais de hipoperfusão, com pressão arterial de 80/40 mmHg e frequência cardíaca de 130 bpm. Referiu ter se alimentado pouco antes do acidente. Diante do quadro de instabilidade e necessidade iminente de controle de via aérea, a equipe optou por realizar intubação com técnica de sequência rápida. Sobre a abordagem anestésica nesse contexto, assinale a assertiva correta.",
    "options": [
      "Ventilação com máscara facial deve ser realizada sistematicamente após a indução e antes da intubação, mesmo durante a sequência rápida, para garantir oxigenação adequada",
      "Bloqueador neuromuscular deve ser administrado após a perda de consciência clínica, sem necessidade de monitor de profundidade anestésica",
      "Pré-oxigenação não é imprescindível na sequência rápida, uma vez que o paciente já está hiperventilando espontaneamente",
      "Succinilcolina está contraindicada na sequência rápida devido à possibilidade de fasciculações e aumento da pressão intracraniana"
    ],
    "correctAnswer": 1,
    "explanation": "Na sequência rápida de intubação (paciente de estômago cheio e instável), administra-se o hipnótico e, logo após a perda de consciência, o bloqueador neuromuscular, sem necessidade de monitor de profundidade anestésica. Pré-oxigenação é essencial, e evita-se ventilar com pressão positiva sob máscara entre indução e intubação (risco de aspiração), salvo se houver dessaturação.",
    "commentary": "Ventilação sistemática sob máscara (A): na sequência rápida clássica evita-se, pelo risco de distensão gástrica e aspiração (ventilação suave só se dessaturar).\n\nPré-oxigenação dispensável (C): é fundamental para aumentar o tempo de apneia segura.\n\nSuccinilcolina contraindicada (D): é um dos bloqueadores de escolha na sequência rápida; as contraindicações são hipercalemia, queimaduras e lesões neuromusculares tardias, entre outras.",
    "reference": "Difficult Airway Society Guidelines (2015); Miller's Anesthesia, 9ª ed.",
    "tags": [
      "sequência rápida de intubação",
      "via aérea",
      "anestesiologia",
      "trauma"
    ],
    "tip": "SRI: pré-oxigenar, hipnótico e bloqueador em sequência, sem ventilar sob máscara."
  },
  {
    "id": "hcpa2026-42",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre distúrbios eletrolíticos moderados a graves no pós-operatório.",
    "options": [
      "A reposição enteral ocorre de forma mais confiável e mais rápida do que a reposição intravenosa",
      "Irrigação vesical contínua, íleo adinâmico e terapia nutricional parenteral são causas remotas desses distúrbios",
      "Potássio pode ser pouco tolerado em reposição por via oral devido a náuseas, vômitos e dor abdominal",
      "Cálcio e magnésio podem ser pouco tolerados em reposição por via oral devido a náuseas e constipação"
    ],
    "correctAnswer": 2,
    "explanation": "Na reposição de potássio, a via oral (embora segura) é frequentemente mal tolerada, pois os sais de potássio irritam a mucosa gastrointestinal e causam náuseas, vômitos e dor abdominal — limitação relevante no pós-operatório.",
    "commentary": "Via enteral mais rápida e confiável que a intravenosa (A): a via IV é mais rápida e previsível para distúrbios moderados a graves.\n\nIrrigação vesical, íleo e nutrição parenteral como causas remotas (B): são causas comuns de distúrbios eletrolíticos no pós-operatório.\n\nCálcio e magnésio causando constipação (D): o magnésio oral causa diarreia, não constipação.",
    "reference": "Sabiston – Tratado de Cirurgia (cuidados perioperatórios)",
    "tags": [
      "distúrbios hidroeletrolíticos",
      "pós-operatório",
      "potássio",
      "cirurgia geral"
    ],
    "tip": "Potássio oral irrita o TGI; magnésio oral dá diarreia."
  },
  {
    "id": "hcpa2026-43",
    "module": "Cirurgia",
    "text": "Analgesia pós-operatória multimodal é uma estratégia que visa associar fármacos com diferentes mecanismos de ação para promover um melhor controle da dor pós-operatória, reduzindo seus efeitos colaterais. Associe os fármacos (coluna da esquerda) a seus mecanismos de ação (coluna da direita).\n\n1 - Dipirona 2 - Cetorolaco trometamol 3 - Tramadol 4 - Oxicodona 5 - Buprenorfina ( ) Agonismo mü, kapa e delta ( ) Inibição de recaptação da serotonina ( ) Inibição da cicloxigenase 3 A sequência numérica correta, de cima para baixo, da coluna da direita, é",
    "options": [
      "3-4-2",
      "3-5-2",
      "4-3-1",
      "5-3-1"
    ],
    "correctAnswer": 3,
    "explanation": "Associação pelo gabarito: agonismo em receptores mu, kappa e delta — buprenorfina (5); inibição da recaptação de serotonina (e noradrenalina), além de fraco agonismo mu — tramadol (3); inibição da ciclo-oxigenase 3 — dipirona (1). Sequência: 5–3–1.",
    "commentary": "3–4–2 (A) e 3–5–2 (B): o tramadol é o fármaco com inibição de recaptação de serotonina, e o cetorolaco inibe COX-1 e COX-2, não especificamente a COX-3.\n\n4–3–1 (C): o gabarito atribui o perfil mu/kappa/delta à buprenorfina.",
    "reference": "Miller's Anesthesia, 9ª ed. (farmacologia dos opioides)",
    "tags": [
      "analgesia multimodal",
      "opioides",
      "dipirona",
      "anestesiologia"
    ],
    "alert": "Questão discutível: a buprenorfina é agonista parcial mu e antagonista kappa/delta; a descrição de “agonismo mu, kappa e delta” cabe melhor a agonistas plenos. Mantido o gabarito oficial (D).",
    "tip": "Tramadol: opioide fraco + inibe recaptação de serotonina/noradrenalina. Dipirona: COX-3 (central)."
  },
  {
    "id": "hcpa2026-44",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 49 anos, com hipertensão arterial, foi encaminhado à Emergência devido à dor torácica interescapular de início súbito, seguida de perda de força nos membros inferiores. À admissão, encontrava-se agitado, referindo desconforto abdominal difuso e dificuldade para mobilizar os membros inferiores. Informou ser usuário de cocaína. A avaliação dos sinais vitais revelou pressão arterial de 210/100 mmHg, frequência cardíaca de 100 bpm e frequência respiratória de 20 mrm. Ao exame físico, não se identificaram pulsos femorais e distais palpáveis. Qual o diagnóstico mais provável?",
    "options": [
      "Aneurisma roto da aorta abdominal",
      "Dissecção crônica da aorta toracoabdominal com trombose da falsa luz",
      "Trombose aguda de aneurisma toracoabdominal",
      "Síndrome aórtica aguda complicada com má perfusão"
    ],
    "correctAnswer": 3,
    "explanation": "Hipertenso usuário de cocaína com dor torácica interescapular súbita, hipertensão grave, paraparesia (isquemia medular), dor abdominal e ausência de pulsos femorais e distais: síndrome aórtica aguda (dissecção tipo B ou estendida) complicada com má perfusão (medular, visceral e de membros inferiores). Exige controle de PA e frequência cardíaca e tratamento de urgência (endovascular).",
    "commentary": "Aneurisma roto da aorta abdominal (A): causa dor abdominal ou lombar com choque, não dor interescapular com hipertensão e paraparesia.\n\nDissecção crônica com trombose da falsa luz (B): o quadro é agudo.\n\nTrombose aguda de aneurisma (C): pouco frequente, sem a dor interescapular típica da dissecção.",
    "reference": "ESC 2024 Guidelines on Aortic Diseases; Sociedade Brasileira de Cirurgia Vascular",
    "tags": [
      "dissecção de aorta",
      "síndrome aórtica aguda",
      "má perfusão",
      "cirurgia vascular"
    ],
    "tip": "Dor interescapular súbita + hipertensão + déficit de pulsos ou paraparesia = dissecção complicada."
  },
  {
    "id": "hcpa2026-45",
    "module": "Cirurgia",
    "text": "Após check-up de rotina, paciente masculino, de 65 anos, assintomático, com história de tabagismo e hipertensão arterial, trouxe à consulta um eco doppler de carótidas e vertebrais, demonstrando espessamento parietal nas bifurcações carotídeas e fluxo reverso na artéria vertebral esquerda. À avaliação clínica do paciente, que achado, dentre os abaixo, é esperado?",
    "options": [
      "Sopro carotídeo à esquerda",
      "Redução dos pulsos periféricos no membro superior esquerdo",
      "Perda do pulso radial direito com abdução do membro superior ipsilateral e rotação cervical contralateral",
      "Pressão sistólica elevada no membro superior esquerdo em relação ao membro contralateral"
    ],
    "correctAnswer": 1,
    "explanation": "Fluxo reverso na artéria vertebral esquerda indica síndrome do roubo da subclávia: estenose ou oclusão da subclávia esquerda proximal à origem da vertebral, que passa a suprir o braço com fluxo retrógrado. Ao exame, esperam-se pulsos reduzidos e pressão sistólica menor (diferença > 15–20 mmHg) no membro superior esquerdo.",
    "commentary": "Sopro carotídeo à esquerda (A): pode ocorrer por aterosclerose, mas não é o achado específico do roubo da subclávia.\n\nPerda do pulso radial com manobra de abdução (C): é o teste de Adson, da síndrome do desfiladeiro torácico.\n\nPressão maior no membro esquerdo (D): a pressão é menor no lado da estenose.",
    "reference": "ESC 2024 Guidelines on Peripheral Arterial Diseases",
    "tags": [
      "síndrome do roubo da subclávia",
      "doença arterial periférica",
      "cirurgia vascular"
    ],
    "tip": "Fluxo reverso na vertebral = roubo da subclávia → braço desse lado com pulso e PA menores."
  },
  {
    "id": "hcpa2026-46",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 40 anos, com diabetes melito (IMC de 35 kg/m2), referiu dor e inchaço na perna direita com evolução de 24 horas, associados a vermelhidão local e alguns episódios de mal-estar e calafrios. Ao exame clínico, constataram-se eritema e aumento da temperatura local; registraram-se dor ao toque na perna e dificuldade de deambular. Considerando o quadro clínico, qual a principal suspeita diagnóstica e qual a conduta inicial mais adequada?",
    "options": [
      "Tromboflebite venosa superficial - ecodoppler venoso",
      "Lipedema sintomático - suporte elástico",
      "Trombose venosa profunda - ecodoppler venoso",
      "Erisipela - antibioticoterapia"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher diabética e obesa com dor, edema, eritema bem delimitado e calor na perna, com calafrios e mal-estar de início em 24 horas: erisipela (celulite superficial, geralmente estreptocócica). O tratamento é antibiótico (penicilina, amoxicilina ou cefalexina; internação e antibiótico IV se houver sinais sistêmicos importantes), repouso com membro elevado e tratamento da porta de entrada (intertrigo, fissuras).",
    "commentary": "Tromboflebite superficial (A): cordão endurecido e doloroso sobre trajeto venoso, sem sintomas sistêmicos.\n\nLipedema (B): acúmulo simétrico e crônico de gordura nas pernas, sem eritema agudo e febre.\n\nTVP com eco-Doppler (C): edema e dor sem eritema intenso e sem calafrios; pode ser diferencial, mas o quadro inflamatório com sintomas sistêmicos sugere erisipela.",
    "reference": "IDSA Practice Guidelines for Skin and Soft Tissue Infections (2014); Sociedade Brasileira de Dermatologia",
    "tags": [
      "erisipela",
      "celulite",
      "infecções de pele",
      "diabetes mellitus"
    ],
    "tip": "Placa eritematosa quente na perna + febre/calafrios = erisipela."
  },
  {
    "id": "hcpa2026-47",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 68 anos, histerectomizada, com fibrilação atrial crônica e má adesão à anticoagulação, veio à Emergência por dor abdominal intensa e difusa, quadro iniciado há 6 horas. Relatou que a dor surgira subitamente e permanecia forte, sendo desproporcional ao exame físico. Encontrava-se afebril, com pressão arterial de 110/70 mmHg e frequência cardíaca de 96 bpm. Exames laboratoriais iniciais indicaram leucócitos de 17.200/mm3 (com desvio à esquerda), hemoglobina de 13,2 g/dl, hematócrito de 38%, plaquetas de 230.000/mm3, PCR de 35 mg/l, amilase de 68 U/l e lipase de 51 U/l. Com base nos quadros clínico e laboratorial, qual a hipótese diagnóstica mais provável e qual a conduta adequada?",
    "options": [
      "Pancreatite aguda - Repetir amilase/lipase em 6 horas e iniciar hidratação venosa intensiva",
      "Isquemia mesentérica aguda - Solicitar angiotomografia de abdômen e avaliar cirurgia de urgência",
      "Gastroenterite viral - Manter hidratação oral e dieta leve com sintomáticos",
      "Obstrução intestinal por bridas - Solicitar radiografia simples e manter observação clínica"
    ],
    "correctAnswer": 1,
    "explanation": "Idosa com fibrilação atrial sem anticoagulação adequada, dor abdominal súbita e intensa, desproporcional ao exame físico, com leucocitose: isquemia mesentérica aguda (embolia da artéria mesentérica superior). A conduta é angiotomografia de abdome e avaliação cirúrgica de urgência (revascularização e ressecção do que não for viável), com anticoagulação.",
    "commentary": "Pancreatite (A): amilase e lipase normais.\n\nGastroenterite (C): não explica dor desproporcional súbita e leucocitose em paciente com FA.\n\nObstrução por bridas (D): a paciente tem cirurgia prévia, mas não há vômitos, distensão ou parada de eliminações; a desproporção dor × exame aponta para isquemia.",
    "reference": "ESVS Guidelines on Diseases of Mesenteric Arteries and Veins (2017); WSES (2022)",
    "tags": [
      "isquemia mesentérica aguda",
      "fibrilação atrial",
      "abdome agudo vascular"
    ],
    "tip": "FA + dor desproporcional ao exame: angio-TC para isquemia mesentérica."
  },
  {
    "id": "hcpa2026-48",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 50 anos, procurou atendimento por dor abdominal em cólica, náuseas, vômitos e parada de eliminação de gases e fezes, quadro com início há cerca de 3 dias, associado a distensão abdominal com timpanismo, sem sinais de irritação peritoneal.\n\nApresentou leucograma sem leucocitose significativa ou desvio à esquerda e proteína C reativa com elevação discreta. A hipótese diagnóstica principal é obstrução intestinal, provavelmente de etiologia mecânica. Assinale a alternativa que contempla a(s) conduta(s) inicial(ais) mais apropriada(s).",
    "options": [
      "Jejum, hidratação, correção hidroeletrolítica e passagem de sonda nasogástrica, seguidos de tomografia computadorizada de abdômen",
      "Jejum, administração empírica de antibióticos de amplo espectro, observação clínica e ultrassonografia de abdômen",
      "Colonoscopia de urgência para definição da causa da obstrução",
      "Laparotomia exploradora imediata"
    ],
    "correctAnswer": 0,
    "explanation": "Obstrução intestinal mecânica sem sinais de peritonite ou sofrimento (sem leucocitose, PCR discreta): a conduta inicial é jejum, hidratação venosa com correção hidroeletrolítica, descompressão por sonda nasogástrica e tomografia de abdome com contraste para definir causa, nível, grau de obstrução e sinais de isquemia.",
    "commentary": "Antibiótico empírico e ultrassom (B): sem sinais de infecção, antibiótico não é rotina, e o ultrassom é limitado pelo gás.\n\nColonoscopia de urgência (C): não é exame inicial na obstrução de causa indeterminada.\n\nLaparotomia imediata (D): reservada a sinais de estrangulamento, perfuração ou falha do tratamento conservador.",
    "reference": "Bologna Guidelines for Adhesive Small Bowel Obstruction (WSES 2017)",
    "tags": [
      "obstrução intestinal",
      "sonda nasogástrica",
      "tomografia computadorizada",
      "abdome agudo obstrutivo"
    ],
    "tip": "Obstrução sem sofrimento: jejum, soro, SNG e TC."
  },
  {
    "id": "hcpa2026-49",
    "module": "Cirurgia",
    "text": "Que conduta, dentre as abaixo, é a mais adequada para um paciente de 80 anos com colecistite aguda moderada a grave, após drenagem percutânea da vesícula biliar?",
    "options": [
      "Manter tratamento clínico e contraindicar cirurgia devido à idade avançada",
      "Indicar colecistectomia se houver recorrência dos sintomas",
      "Realizar colecistectomia precoce, preferencialmente dentro de 6-8 semanas após a drenagem percutânea",
      "Adiar colecistectomia por, pelo menos, 6 meses, reduzindo os riscos cirúrgicos"
    ],
    "correctAnswer": 2,
    "explanation": "Idoso com colecistite aguda moderada a grave tratado inicialmente com colecistostomia percutânea: a idade isolada não contraindica cirurgia. Recomenda-se colecistectomia (preferencialmente laparoscópica) após a resolução do quadro, cerca de 6–8 semanas depois da drenagem, para evitar recorrência, se o paciente tiver condições cirúrgicas.",
    "commentary": "Contraindicar cirurgia pela idade (A): a decisão depende da condição clínica, não da idade.\n\nOperar só se recorrer (B): a recorrência é frequente e grave; a colecistectomia de intervalo é recomendada.\n\nAdiar por pelo menos 6 meses (D): aumenta o risco de novos episódios e de complicações do dreno.",
    "reference": "Tokyo Guidelines 2018 (TG18); WSES Guidelines on acute calculous cholecystitis in the elderly (2019)",
    "tags": [
      "colecistite aguda",
      "colecistostomia percutânea",
      "idoso",
      "cirurgia geral"
    ],
    "tip": "Após colecistostomia: colecistectomia em ~6–8 semanas, se houver condições."
  },
  {
    "id": "hcpa2026-50",
    "module": "Cirurgia",
    "text": "Qual a causa mais provável de sangramento digestivo alto com instabilidade hemodinâmica em um paciente masculino, de 65 anos?",
    "options": [
      "Úlcera péptica sangrante",
      "Esofagite erosiva",
      "Neoplasia gástrica",
      "Laceração de Mallory-Weiss"
    ],
    "correctAnswer": 0,
    "explanation": "A causa mais comum de hemorragia digestiva alta, inclusive com instabilidade hemodinâmica, é a úlcera péptica (gástrica ou duodenal), sobretudo associada a AINE e H. pylori. Em cirróticos, as varizes esofágicas são causa importante.",
    "commentary": "Esofagite erosiva (B): causa sangramento geralmente leve e crônico.\n\nNeoplasia gástrica (C): costuma causar sangramento crônico e anemia, raramente instabilidade.\n\nMallory-Weiss (D): sangramento após vômitos, em geral autolimitado.",
    "reference": "ACG Clinical Guideline: Upper GI and Ulcer Bleeding (2021)",
    "tags": [
      "hemorragia digestiva alta",
      "úlcera péptica",
      "gastroenterologia"
    ],
    "tip": "HDA: úlcera péptica é a causa mais comum."
  },
  {
    "id": "hcpa2026-51",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 75 anos, com distensão e dor abdominal em cólica associada a vômitos biliosos há 24 horas, foi trazido à Emergência. Ao exame, apresentava hérnia inguinal direita irredutível, dolorosa à palpação, sem sinais de peritonite. Qual a conduta mais adequada no momento?",
    "options": [
      "Indicar cirurgia de urgência para correção da hérnia",
      "Tentar redução manual da hérnia sob analgesia e sedação leve",
      "Solicitar radiografia abdominal e manter jejum, observando a evolução clínica",
      "Iniciar administração de antibióticos e agendar correção eletiva da hérnia após melhora clínica"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso com obstrução intestinal (distensão, cólica, vômitos biliosos) e hérnia inguinal irredutível e dolorosa há 24 horas: hérnia encarcerada com obstrução intestinal, com risco de estrangulamento. A conduta é cirurgia de urgência (herniorrafia, com avaliação da viabilidade da alça). A tentativa de redução manual não é recomendada após muitas horas de encarceramento e com obstrução, pelo risco de reduzir alça isquêmica.",
    "commentary": "Redução manual sob sedação (B): pode ser tentada em encarceramentos recentes sem sinais de sofrimento, mas com 24 horas de obstrução há risco de reduzir alça necrosada.\n\nRadiografia e observação (C) e antibiótico com cirurgia eletiva (D): atrasam a cirurgia necessária.",
    "reference": "HerniaSurge Group (2018); WSES Guidelines for emergency repair of complicated abdominal wall hernias (2017)",
    "tags": [
      "hérnia inguinal encarcerada",
      "obstrução intestinal",
      "cirurgia de urgência"
    ],
    "tip": "Hérnia encarcerada com obstrução: cirurgia de urgência."
  },
  {
    "id": "hcpa2026-52",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 55 anos, previamente hígido, consultou por quadro de dor abdominal no hipocôndrio direito e icterícia. Informou ter retornado, há 2 semanas, de viagem pela Cordilheira dos Andes. Ao exame físico, encontrava-se afebril e com sinais vitais estáveis. Exames laboratoriais mostraram as seguintes alterações: AST de 167 UI/l, ALT de 142 UI/l e bilirrubina total de 4,5 mg/dl (bilirrubina direta de 3,9 mg/dl). Não se registrou alteração ao hemograma. À ultrassonografia abdominal, foram identificados cálculo de 2 cm no infundíbulo da vesícula biliar e parede da vesícula medindo 5 mm, além de dilatação do ducto biliar principal (1,2 cm). Qual a principal hipótese diagnóstica?",
    "options": [
      "Colecistite aguda, devido à obstrução do ducto cístico pelo cálculo biliar",
      "Síndrome de Mirizzi, causada pela compressão do ducto hepático comum por um cálculo impactado junto ao ducto cístico",
      "Hepatite viral aguda, resultante de processo infeccioso contraído em viagem recente",
      "Hepatite aguda alcóolica, precipitada por abuso de bebidas destiladas em viagem recente"
    ],
    "correctAnswer": 1,
    "explanation": "Icterícia obstrutiva (predomínio de bilirrubina direta) com cálculo grande impactado no infundíbulo da vesícula e dilatação do ducto biliar principal: síndrome de Mirizzi — compressão extrínseca do ducto hepático comum por cálculo impactado no ducto cístico ou no infundíbulo. A viagem é um distrator.",
    "commentary": "Colecistite aguda (A): não haveria icterícia obstrutiva com dilatação da via biliar, e o paciente está afebril.\n\nHepatite viral (C): as transaminases estariam muito mais elevadas, sem dilatação de vias biliares.\n\nHepatite alcoólica (D): sem história de etilismo e com padrão obstrutivo e dilatação biliar.",
    "reference": "Sabiston – Tratado de Cirurgia (vias biliares); Csendes A. Classificação da síndrome de Mirizzi",
    "tags": [
      "síndrome de Mirizzi",
      "icterícia obstrutiva",
      "colelitíase",
      "vias biliares"
    ],
    "tip": "Cálculo no infundíbulo + icterícia + via biliar dilatada = Mirizzi."
  },
  {
    "id": "hcpa2026-53",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 44 anos, submetido a by-pass gástrico há 2 anos, foi internado por dor e distensão abdominal difusa, além de náuseas e vômitos biliosos. Exame físico revelou ruídos hidroaéreos diminuídos e defesa abdominal. Tomografia computadorizada evidenciou alça intestinal dilatada com mesentério torcido. Qual o diagnóstico mais provável?",
    "options": [
      "Obstrução por hérnia incisional",
      "Invaginação intestinal",
      "Hérnia interna",
      "Volvo gástrico"
    ],
    "correctAnswer": 2,
    "explanation": "Paciente pós-bypass gástrico em Y de Roux com dor abdominal, distensão, vômitos e TC com alça dilatada e mesentério torcido (sinal do redemoinho): hérnia interna (pelo espaço de Petersen ou pela brecha mesentérica da enteroanastomose), complicação tardia típica, favorecida pela perda de peso. Exige cirurgia de urgência.",
    "commentary": "Hérnia incisional (A): seria visível ou palpável na parede, sem mesentério torcido.\n\nInvaginação intestinal (B): mostra o sinal do alvo, não torção do mesentério.\n\nVolvo gástrico (D): o estômago excluso não costuma torcer; a TC mostra torção do mesentério do delgado.",
    "reference": "ASMBS; Sabiston – Tratado de Cirurgia (complicações da cirurgia bariátrica)",
    "tags": [
      "hérnia interna",
      "bypass gástrico",
      "espaço de Petersen",
      "cirurgia bariátrica"
    ],
    "tip": "Pós-bypass com dor e redemoinho mesentérico na TC: hérnia interna → cirurgia."
  },
  {
    "id": "hcpa2026-54",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre a avaliação do câncer colorretal.",
    "options": [
      "Dentre os pacientes com câncer de cólon com menos de 50 anos, cerca de 60% apresentam uma mutação germinativa associada ao câncer de cólon",
      "Com o advento da indicação sistemática de colonoscopia no rastreamento colorretal, a maioria dos tumores é diagnosticada em indivíduos assintomáticos",
      "É recomendada uma avaliação endoscópica completa da mucosa colorretal antes da cirurgia para detectar cânceres sincrônicos, que estão presentes em cerca de 25% dos pacientes com câncer de cólon esporádico",
      "A dosagem do antígeno carcinoembriônico (CEA) deve ser realizada no pré-operatório, uma vez que representa fator preditivo independente de sobrevida global em pacientes com câncer de cólon em estágio I a III"
    ],
    "correctAnswer": 3,
    "explanation": "O CEA deve ser dosado no pré-operatório do câncer colorretal: níveis elevados são fator prognóstico independente de pior sobrevida nos estádios I a III, e o valor basal serve para comparação no seguimento pós-operatório (detecção de recidiva).",
    "commentary": "60% dos menores de 50 anos com mutação germinativa (A): cerca de 15–20% têm síndrome hereditária.\n\nMaioria diagnosticada em assintomáticos (B): a maioria ainda é diagnosticada por sintomas, especialmente onde o rastreamento é baixo, como no Brasil.\n\nSincrônicos em 25% (C): ocorrem em cerca de 3–5%; a colonoscopia completa pré-operatória é recomendada, mas a proporção citada está errada.",
    "reference": "NCCN Guidelines – Colon Cancer; ASCO – Tumor markers in colorectal cancer",
    "tags": [
      "câncer colorretal",
      "CEA",
      "estadiamento",
      "cirurgia oncológica"
    ],
    "tip": "CEA pré-operatório: prognóstico e base para o seguimento."
  },
  {
    "id": "hcpa2026-55",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre o manejo da doença hemorroidária.",
    "options": [
      "Aumentar a ingestão de fibras e líquidos deve ser recomendado a pacientes com hemorroidas devido à melhora documentada em casos de prolapso leve a moderado e sangramento retal",
      "Esfincterotomia lateral interna é uma das modalidades cirúrgicas mais eficazmente empregadas no tratamento de hemorroidas",
      "Pomadas à base de nitrato (diltiazem, isossorbida) devem ser empregadas antes de se indicar o tratamento cirúrgico",
      "Excisão cirúrgica de mamilos hemorroidários não é mais considerada uma técnica aceitável no tratamento de hemorroidas sintomáticas refratárias"
    ],
    "correctAnswer": 0,
    "explanation": "O aumento da ingestão de fibras e líquidos é recomendado a todos os pacientes com doença hemorroidária: melhora o sangramento e os sintomas do prolapso leve a moderado e previne recorrências (metanálise Cochrane).",
    "commentary": "Esfincterotomia lateral interna para hemorroidas (B): é tratamento da fissura anal, não de hemorroidas.\n\nPomadas de nitrato antes da cirurgia (C): são usadas na fissura; o diltiazem é bloqueador de cálcio, não nitrato.\n\nHemorroidectomia excisional não aceitável (D): é o tratamento mais eficaz para doença grau III–IV refratária.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids (2018); Alonso-Coello P et al., Cochrane 2005",
    "tags": [
      "doença hemorroidária",
      "fibras",
      "coloproctologia"
    ],
    "tip": "Hemorroidas: fibras e água para todos; hemorroidectomia nas refratárias graus III–IV."
  },
  {
    "id": "hcpa2026-56",
    "module": "Cirurgia",
    "text": "Jogador de futebol, de 28 anos, apresentou dor súbita e intensa na região posterior da coxa esquerda ao realizar um sprint (movimento de arrancada). Trazido à Emergência, referiu sensação de estalo no momento da dor e dificuldade para caminhar. Ao exame físico, observaram-se equimose e falha palpável no músculo. Qual o diagnóstico e qual a conduta inicial mais apropriada?",
    "options": [
      "Lesão muscular grau II – retorno às atividades após uso de analgésicos",
      "Lesão muscular grau II – uso de órtese rígida e imobilização por 4 semanas",
      "Lesão muscular grau III – repouso, analgesia e encaminhamento a fisioterapia",
      "Lesão muscular grau III – repouso, analgesia e avaliação especializada para possível reparo cirúrgico"
    ],
    "correctAnswer": 3,
    "explanation": "Atleta com dor súbita na face posterior da coxa durante arrancada, estalo, equimose, dificuldade de caminhar e falha palpável no músculo: lesão dos isquiotibiais grau III (ruptura completa, possivelmente com avulsão proximal). A conduta inicial é repouso, analgesia e avaliação especializada com imagem (RM) para decidir reparo cirúrgico, indicado em avulsões completas com retração.",
    "commentary": "Grau II com retorno após analgésicos (A): a falha palpável indica ruptura completa (grau III); retorno precoce aumenta o risco.\n\nGrau II com órtese rígida por 4 semanas (B): a classificação está errada e a imobilização prolongada não é o padrão.\n\nGrau III com repouso e fisioterapia apenas (C): rupturas completas com retração podem exigir cirurgia; é preciso avaliação especializada.",
    "reference": "Sociedade Brasileira de Medicina do Exercício e do Esporte; British Athletics Muscle Injury Classification",
    "tags": [
      "lesão muscular",
      "isquiotibiais",
      "medicina esportiva",
      "ortopedia"
    ],
    "tip": "Falha palpável no músculo = grau III → avaliação para cirurgia."
  },
  {
    "id": "hcpa2026-57",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 47 anos, consultou por linfadenomegalia cervical. Informou ser tabagista moderado há 18 anos, não ter tosse, nem apresentar febre ou perda de peso. Ao exame físico, identificou-se nódulo palpável, firme, indolor, com aproximadamente 2,0 cm de diâmetro, na região cervical IIa (grupo jugular superior anterior). Qual a conduta mais adequada?",
    "options": [
      "Realizar punção-biópsia com agulha fina e solicitar exame citopatológico",
      "Realizar ultrassonografia para confirmar o diagnóstico diferencial de massa cervical",
      "Excluir causas infecciosas com exames sorológicos e avaliar cavidade oral, faringe e laringe",
      "Agendar biópsia do linfonodo e solicitar imunofenotipagem da peça"
    ],
    "correctAnswer": 2,
    "explanation": "Adulto tabagista com linfonodo cervical em nível IIa, firme, indolor, de 2 cm: deve-se suspeitar de metástase de carcinoma espinocelular de cabeça e pescoço. Pelo gabarito, o passo inicial é excluir causas infecciosas (sorologias) e examinar a cavidade oral, a faringe e a laringe (nasofibrolaringoscopia) em busca de tumor primário. A punção aspirativa por agulha fina guiada por ultrassom também faz parte da investigação inicial.",
    "commentary": "PAAF com citologia (A): também é etapa recomendada na investigação de massa cervical persistente em adulto, por isso é aceita aqui.\n\nUltrassom para o diferencial (B): ajuda a caracterizar a lesão, mas não substitui o exame das vias aerodigestivas e a PAAF.\n\nBiópsia excisional com imunofenotipagem (D): a biópsia aberta deve ser evitada antes de excluir carcinoma (pode comprometer o tratamento); é reservada à suspeita de linfoma após PAAF inconclusiva.",
    "reference": "AAO-HNS Clinical Practice Guideline: Evaluation of the Neck Mass in Adults (2017)",
    "tags": [
      "massa cervical",
      "linfadenopatia cervical",
      "câncer de cabeça e pescoço",
      "otorrinolaringologia"
    ],
    "alert": "Questão discutível: as diretrizes recomendam exame completo das vias aerodigestivas superiores e PAAF na avaliação inicial de massa cervical em adulto de risco. Mantido o gabarito oficial (C); A também é aceita aqui.",
    "alsoAccepted": [
      0
    ],
    "tip": "Massa cervical em adulto tabagista: examinar boca, faringe e laringe + PAAF; evitar biópsia aberta."
  },
  {
    "id": "hcpa2026-58",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 34 anos, vítima de acidente automobilístico, apresentou hipotensão persistente embora tenha recebido adequada reposição volêmica. Radiografia abdominal evidenciou fratura pélvica em “livro aberto”. O FAST foi negativo. Que conduta imediata, dentre as abaixo, é a mais adequada?",
    "options": [
      "Laparotomia exploradora",
      "Fixação interna definitiva da pelve",
      "Realização de tomografia computadorizada do abdômen",
      "Estabilização com fixador externo ou lençol pélvico e packing retroperitoneal"
    ],
    "correctAnswer": 3,
    "explanation": "Politraumatizado com hipotensão persistente apesar de volume, FAST negativo e fratura pélvica em livro aberto: o sangramento provável é retroperitoneal pélvico. A conduta imediata é reduzir o volume pélvico com cinta/lençol pélvico ou fixador externo e controlar o sangramento com tamponamento pré-peritoneal (packing) e/ou angioembolização, conforme a disponibilidade.",
    "commentary": "Laparotomia exploradora (A): com FAST negativo, a fonte não é intraperitoneal, e a laparotomia pode piorar o sangramento pélvico.\n\nFixação interna definitiva (B): é feita após a estabilização, não na fase aguda.\n\nTC de abdome (C): o paciente instável não deve ir à tomografia.",
    "reference": "ATLS 10ª ed.; WSES Classification and Guidelines for Pelvic Trauma (2017)",
    "tags": [
      "fratura de pelve",
      "choque hemorrágico",
      "packing pré-peritoneal",
      "trauma"
    ],
    "tip": "Pelve em livro aberto + instável + FAST negativo: cinta pélvica e packing/embolização."
  },
  {
    "id": "hcpa2026-59",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 35 anos, veio à Emergência por apresentar dor intensa no flanco esquerdo e febre há 2 dias. Iniciou com cefalexina há 24 horas. Ao exame físico, apresentava punho-percussão positiva à esquerda. Exame qualitativo de urina demonstrou leucocitúria e bacteriúria. Hemograma indicou leucocitose (com desvio à esquerda); a creatinina estava normal. Tomografia computadorizada de abdômen revelou cálculo de 1,2 cm em ureter médio à esquerda, com dilatação pieloureteral e sinais de edema perirrenal à esquerda. Qual a conduta inicial mais adequada, além da analgesia?",
    "options": [
      "Desobstrução com cateter duplo J ou nefrostomia percutânea",
      "Troca imediata do antibiótico e observação clínica",
      "Coleta de material para nova urocultura e observação clínica",
      "Litotripsia extracorpórea"
    ],
    "correctAnswer": 0,
    "explanation": "Cálculo ureteral obstrutivo com hidronefrose e sinais de infecção (febre, leucocitose, piúria): pielonefrite obstrutiva, emergência urológica. Além do antibiótico, a prioridade é desobstruir a via urinária com cateter duplo J ou nefrostomia percutânea. O tratamento definitivo do cálculo fica para depois da resolução da infecção.",
    "commentary": "Trocar o antibiótico e observar (B) e nova urocultura com observação (C): sem drenagem, a infecção obstruída evolui para sepse.\n\nLitotripsia extracorpórea (D): é contraindicada na vigência de infecção.",
    "reference": "EAU Guidelines on Urolithiasis (2024); AUA Guideline on Surgical Management of Stones",
    "tags": [
      "litíase urinária",
      "pielonefrite obstrutiva",
      "cateter duplo J",
      "urologia"
    ],
    "tip": "Cálculo + obstrução + infecção: drenar (duplo J ou nefrostomia) já."
  },
  {
    "id": "hcpa2026-60",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 58 anos, com diabetes melito tipo 2, relatou disfunção erétil progressiva e gradual nos últimos anos, com piora da resposta a inibidores da fosfodiesterase-5 (tadalafila). O casal não apresentava dificuldade de relacionamento. O paciente referiu libido normal, sem registro de ereções noturnas ou matinais. O exame físico não revelou particularidades. Qual a causa mais provável da disfunção erétil?",
    "options": [
      "Disfunção erétil psicogênica",
      "Disfunção erétil vasculogênica",
      "Hipogonadismo",
      "Hiperprolactinemia"
    ],
    "correctAnswer": 1,
    "explanation": "Diabético com disfunção erétil progressiva, ausência de ereções noturnas e matinais, libido preservada e boa relação conjugal: disfunção erétil orgânica, provavelmente vasculogênica (doença arterial e disfunção endotelial do diabetes, além de neuropatia), com piora da resposta aos inibidores da PDE-5.",
    "commentary": "Psicogênica (A): tem início súbito e situacional, com ereções noturnas preservadas.\n\nHipogonadismo (C) e hiperprolactinemia (D): costumam reduzir a libido, que está normal.",
    "reference": "EAU Guidelines on Sexual and Reproductive Health (2024); Sociedade Brasileira de Urologia",
    "tags": [
      "disfunção erétil",
      "diabetes mellitus",
      "urologia"
    ],
    "tip": "Sem ereção noturna + libido normal + diabetes = disfunção erétil vasculogênica."
  },
  {
    "id": "hcpa2026-61",
    "module": "Clínica Médica",
    "text": "Que sinal, dentre os abaixo, em um paciente adulto com insuficiência respiratória aguda, exige a avaliação imediata de via aérea para possível intubação orotraqueal?",
    "options": [
      "Retração da musculatura intercostal",
      "Taquipneia",
      "Sibilos expiratórios",
      "Hipocratismo digital"
    ],
    "correctAnswer": 0,
    "explanation": "Na insuficiência respiratória aguda, sinais de aumento do trabalho respiratório e fadiga iminente — como retração da musculatura intercostal (tiragem), uso de musculatura acessória, respiração paradoxal —, além de rebaixamento de consciência e hipoxemia refratária, indicam avaliação imediata da via aérea para possível intubação.",
    "commentary": "Taquipneia (B): é sinal inespecífico e precoce, não define necessidade de intubação.\n\nSibilos expiratórios (C): indicam broncoespasmo; o silêncio auscultatório é que sugere gravidade extrema.\n\nHipocratismo digital (D): é sinal de doença crônica, sem relação com gravidade aguda.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia; Tintinalli's Emergency Medicine",
    "tags": [
      "insuficiência respiratória aguda",
      "via aérea",
      "intubação orotraqueal",
      "emergência"
    ],
    "tip": "Tiragem e uso de musculatura acessória = fadiga iminente → avaliar intubação."
  },
  {
    "id": "hcpa2026-62",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 67 anos, veio à Emergência por dor torácica típica em repouso, com início há 2 horas, que se irradiava para o braço esquerdo, acompanhada de sudorese. Em seu histórico, constavam hipertensão arterial e diabetes melito tipo 2. Todos os exames laboratoriais encontravam-se dentro dos limites da normalidade, exceto a troponina ultrassensível, discretamente aumentada (2,3 vezes o valor de referência). A eletrocardiografia realizada à admissão está reproduzida abaixo. Com base nas diretrizes atuais, qual a conduta inicial mais adequada?",
    "options": [
      "Instituir tratamento clínico conservador e agendar teste ergométrico ambulatorial em 72 horas",
      "Iniciar dupla antiagregação plaquetária e anticoagulação e encaminhar o paciente para cinecoronariografia em até 72 horas",
      "Iniciar apenas AAS e observar a evolução clínica, com dosagem de troponina em 6 horas",
      "Indicar trombólise com alteplase em razão da dor torácica e da troponina elevada"
    ],
    "correctAnswer": 1,
    "explanation": "Dor torácica típica há 2 horas com troponina ultrassensível elevada e ECG sem supradesnivelamento de ST (o traçado mostra baixa voltagem, sem supra): infarto sem supradesnivelamento de ST de alto risco (troponina positiva), sem critérios de muito alto risco (estável, sem dor refratária, arritmia ou insuficiência cardíaca). A conduta é dupla antiagregação, anticoagulação e cineangiocoronariografia precoce (em até 24 horas pelas diretrizes atuais; o gabarito cita até 72 horas).",
    "commentary": "Tratamento conservador com teste ergométrico (A): com troponina elevada, a estratificação é invasiva.\n\nSó AAS e repetir troponina (C): o diagnóstico de IAM já está feito; é preciso tratar e estratificar.\n\nTrombólise (D): não é indicada no IAM sem supradesnivelamento de ST.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz de SCA sem Supradesnível do ST (2021); ESC 2023 ACS Guidelines",
    "tags": [
      "infarto sem supradesnivelamento do ST",
      "síndrome coronariana aguda",
      "eletrocardiograma",
      "cardiologia"
    ],
    "image": "/images/hcpa2026-62.webp",
    "alert": "As diretrizes atuais recomendam estratégia invasiva precoce (< 24 h) no IAMSSST de alto risco; o prazo de 72 horas da alternativa corresponde ao risco intermediário. Ainda assim, B é a única conduta adequada entre as opções.",
    "tip": "IAMSSST: nunca trombolisar; DAPT + anticoagulação + cateterismo."
  },
  {
    "id": "hcpa2026-63",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 69 anos, com história de infarto do miocárdio, hipertensão arterial e dislipidemia, compareceu à consulta de revisão trazendo exames laboratoriais recentes, dentre os quais constava o perfil lipídico alterado. Vinha em uso apenas de AAS e enalapril. Qual das opções abaixo representa a conduta mais adequada para o tratamento da dislipidemia do paciente?",
    "options": [
      "Iniciar estatina de moderada intensidade e reavaliar o perfil lipídico em 6 meses, com meta de LDL-colesterol < 100 mg/dl",
      "Prescrever estatina de alta intensidade, com meta de LDL-colesterol < 70 mg/dl, e considerar ezetimiba apenas se houver intolerância a estatina",
      "Iniciar estatina de alta intensidade, com meta de LDL-colesterol < 55 mg/dl e redução de, pelo menos, 50% dos níveis basais; se a meta não for atingida, adicionar ezetimiba",
      "Tratar apenas se os níveis de LDL-colesterol forem > 130 mg/dl, com foco principal na mudança do estilo de vida e acompanhamento anual"
    ],
    "correctAnswer": 2,
    "explanation": "Paciente com infarto prévio (doença aterosclerótica estabelecida, risco muito alto): pela Diretriz Brasileira de Dislipidemias, a meta de LDL-c é < 50–55 mg/dL (com redução de pelo menos 50% do basal). Inicia-se estatina de alta intensidade (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg) e, se a meta não for atingida, associa-se ezetimiba (e depois inibidor de PCSK9).",
    "commentary": "Estatina moderada com meta < 100 (A): meta e intensidade insuficientes para prevenção secundária.\n\nMeta < 70 e ezetimiba só na intolerância (B): a meta é mais baixa, e a ezetimiba é indicada quando a meta não é atingida.\n\nTratar só se LDL > 130 (D): todo paciente com doença aterosclerótica deve usar estatina de alta intensidade.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (2025); ESC/EAS 2019",
    "tags": [
      "dislipidemia",
      "prevenção secundária",
      "estatina",
      "ezetimiba",
      "cardiologia"
    ],
    "tip": "Pós-infarto: estatina de alta intensidade, LDL < 55 (ou < 50) e redução ≥ 50%."
  },
  {
    "id": "hcpa2026-64",
    "module": "Clínica Médica",
    "text": "Ao serem prescritos medicamentos anti-hipertensivos a pacientes com hipertensão arterial, deve-se dar atenção a seus possíveis efeitos colaterais. Assinale a alternativa que associa corretamente as classes de medicamentos a seus principais efeitos colaterais.",
    "options": [
      "Bloqueadores dos canais de cálcio: edema maleolar - betabloqueadores: broncoespasmo - diuréticos: reação lúpus-like",
      "Diuréticos: hipopotassemia - inibidores da enzima conversora da angiotensina: tosse seca - simpatolíticos de ação central: efeito rebote com a descontinuação",
      "Vasodilatadores diretos: reação lúpus-like - diuréticos: hipopotassemia - bloqueadores dos canais de cálcio: broncoespasmo",
      "Inibidores da enzima conversora da angiotensina: tosse seca - diuréticos: broncoespasmo - bloqueadores dos canais de cálcio: edema maleolar"
    ],
    "correctAnswer": 1,
    "explanation": "Efeitos colaterais típicos: diuréticos tiazídicos e de alça causam hipocalemia (além de hiponatremia, hiperuricemia, hiperglicemia); IECA causam tosse seca (por acúmulo de bradicinina) e angioedema; simpatolíticos de ação central (clonidina) causam hipertensão de rebote na suspensão abrupta.",
    "commentary": "Diuréticos com reação lúpus-like (A): a reação lúpus-like é da hidralazina (vasodilatador direto).\n\nBloqueadores de cálcio com broncoespasmo (C): broncoespasmo é efeito dos betabloqueadores.\n\nDiuréticos com broncoespasmo (D): idem; os diuréticos causam distúrbios eletrolíticos.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020/2025)",
    "tags": [
      "anti-hipertensivos",
      "efeitos adversos",
      "hipertensão arterial sistêmica",
      "farmacologia"
    ],
    "tip": "IECA: tosse. Tiazídico: hipocalemia. Clonidina: rebote. BCC: edema. Hidralazina: lúpus-like."
  },
  {
    "id": "hcpa2026-65",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 41 anos, com diagnóstico de diabetes melito há 2 anos (em uso irregular de metformina), consultou em razão de erupções cutâneas generalizadas, iniciadas há 2 semanas. Informou que as lesões estavam “se espalhando” por todo o corpo. Vinha fazendo uso de clobetasol tópico por psoríase em placas no couro cabeludo, nos joelhos e nos cotovelos há 10 anos. Referiu que utilizara, há alguns dias, prednisona (1 mg/kg/dia) por dores articulares, suspensa antes do início do quadro. Ao exame dermatológico, apresentava eritema generalizado por todo o corpo com pústulas e descamação. Assinale a alternativa que contempla o diagnóstico e a causa mais provável do cenário atual.",
    "options": [
      "Exacerbação de psoríase vulgar por uso irregular de metformina",
      "Exacerbação de psoríase vulgar por utilização e suspensão de corticosteroide sistêmico",
      "Quadro agudo de psoríase pustulosa por uso irregular de metformina",
      "Quadro agudo de psoríase pustulosa por utilização e suspensão de corticosteroide sistêmico"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com psoríase em placas que usou corticoide sistêmico e o suspendeu, evoluindo com eritema generalizado e pústulas: psoríase pustulosa generalizada (de von Zumbusch), cujo desencadeante clássico é a retirada de corticoide sistêmico. É contraindicado usar corticoide sistêmico na psoríase por esse motivo.",
    "commentary": "Exacerbação de psoríase vulgar por metformina (A) e psoríase pustulosa por metformina (C): a metformina não desencadeia psoríase.\n\nExacerbação de psoríase vulgar por corticoide (B): o quadro de eritema generalizado com pústulas caracteriza a forma pustulosa, não exacerbação da vulgar.",
    "reference": "Sociedade Brasileira de Dermatologia – Consenso Brasileiro de Psoríase (2020)",
    "tags": [
      "psoríase pustulosa",
      "corticosteroides",
      "dermatologia"
    ],
    "tip": "Psoríase + suspensão de corticoide sistêmico = risco de forma pustulosa generalizada."
  },
  {
    "id": "hcpa2026-66",
    "module": "Clínica Médica",
    "text": "Assinale a assertiva correta sobre o diagnóstico do diabetes melito.",
    "options": [
      "O ponto de corte de 209 mg/dl em 1 hora no teste oral com glicose sugere o diagnóstico",
      "Não é necessário jejum para realização do teste de tolerância à glicose oral",
      "O valor da glicose plasmática em jejum que sugere a presença de diabetes melito é 136 mg/dl",
      "Duas dosagens de hemoglobina glicada com resultado ≥ 6% confirmam o diagnóstico"
    ],
    "correctAnswer": 2,
    "explanation": "Critério de diabetes pela glicemia de jejum: ≥ 126 mg/dL (confirmada). Entre as alternativas, a C é a única correta, pois uma glicemia de jejum de 136 mg/dL (acima de 126) sugere diabetes.",
    "commentary": "209 mg/dL em 1 hora (A): o critério do TOTG é a glicemia de 2 horas ≥ 200 mg/dL (a de 1 hora é usada em algumas propostas, com corte de 209, mas não é o critério padrão).\n\nTOTG sem jejum (B): o teste exige jejum de 8 horas.\n\nHbA1c ≥ 6% (D): o critério é ≥ 6,5%.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus",
      "diagnóstico",
      "glicemia de jejum",
      "endocrinologia"
    ],
    "alert": "A redação é imprecisa: o ponto de corte é 126 mg/dL; o valor de 136 mg/dL apenas está acima dele e por isso sugere diabetes.",
    "tip": "DM: GJ ≥ 126; HbA1c ≥ 6,5%; TOTG 2 h ≥ 200."
  },
  {
    "id": "hcpa2026-67",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 45 anos, sem comorbidades, procurou atendimento por ter sido descoberto, de forma incidental em exame de imagem, um nódulo tireoidiano. Encontrava-se assintomática. Ao exame físico, palpou-se nódulo no lobo direito da tireoide. Ultrassonografia mostrou um nódulo sólido, hipoecogênico, com margens irregulares, microcalcificações e formato mais largo do que alto, medindo 1,3 cm no maior diâmetro. A dosagem de TSH estava normal. Segundo a classificação TI-RADS, do Colégio Americano de Radiologia (ACR-TI-RADS), qual a classificação do nódulo e qual a conduta a ser adotada?",
    "options": [
      "TI-RADS 3 – Manter observação clínica e realizar dosagem semestral de TSH",
      "TI-RADS 4 – Repetir ultrassonografia em 12 meses",
      "TI-RADS 5 – Realizar punção aspirativa por agulha fina (PAAF)",
      "TI-RADS 5 – Indicar cirurgia imediata"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo ACR TI-RADS: sólido (2 pontos), hipoecoico (2), margens irregulares (2), microcalcificações/focos ecogênicos puntiformes (3) e mais largo que alto (0) = 9 pontos → TI-RADS 5 (altamente suspeito). Para TR5, a PAAF é indicada em nódulos ≥ 1,0 cm; com 1,3 cm, faz-se PAAF.",
    "commentary": "TI-RADS 3 (A) e 4 (B): a pontuação é ≥ 7, o que define TR5.\n\nCirurgia imediata (D): sem diagnóstico citológico, faz-se primeiro a PAAF.",
    "reference": "ACR TI-RADS White Paper (Tessler FN et al., 2017)",
    "tags": [
      "nódulo tireoidiano",
      "ACR TI-RADS",
      "PAAF",
      "endocrinologia"
    ],
    "tip": "TI-RADS 5: PAAF a partir de 1 cm."
  },
  {
    "id": "hcpa2026-68",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nPaciente masculino, de 78 anos, procurou a Emergência por febre, dor e diarreia pastosa, quadro iniciado há 4 dias (8 episódios/dia em pequena quantidade, associados a urgência e incontinência fecais, sem sangue ou pus visíveis). Informou internação recente por infecção urinária, tendo recebido antibioticoterapia de amplo espectro por via intravenosa, seguida de dose equivalente por via oral, tratamento finalizado há 3 dias. À chegada, apresentava temperatura axilar de 37,8oC e pressão arterial de 110/72 mmHg; a oximetria de pulso indicou saturação de oxigênio de 97% em ar ambiente. O exame físico mostrou mucosas coradas, algo desidratadas, e dor somente à palpação profunda do quadrante inferior esquerdo do abdômen. Pode-se afirmar que o quadro clínico é de.........., de etiologia.........., sendo mandatória coleta de fezes de emergência para excluir...........",
    "options": [
      "diarreia aguda - parasitária - Cyclospora sp",
      "diarreia aguda - bacteriana - Clostridioides difficile",
      "diarreia persistente - bacteriana - Bacillus cereus",
      "diarreia persistente - viral - Rotavirus"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com diarreia aguda (4 dias), febre e dor abdominal após antibioticoterapia de amplo espectro e internação recente: diarreia aguda de etiologia bacteriana, com forte suspeita de Clostridioides difficile. É mandatória a pesquisa nas fezes (toxinas A/B, GDH ou PCR) para confirmar e tratar com vancomicina ou fidaxomicina oral.",
    "commentary": "Parasitária por Cyclospora (A): não se relaciona com uso prévio de antibiótico.\n\nDiarreia persistente por Bacillus cereus (C): persistente seria > 14 dias, e o B. cereus causa intoxicação alimentar de curta duração.\n\nPersistente por rotavírus (D): o quadro é agudo, e rotavírus em idoso não tem relação com antibiótico.",
    "reference": "IDSA/SHEA Clinical Practice Guideline for Clostridioides difficile Infection (2021)",
    "tags": [
      "C. difficile",
      "diarreia associada a antibióticos",
      "infectologia"
    ],
    "tip": "Diarreia após antibiótico/internação: pesquisar C. difficile."
  },
  {
    "id": "hcpa2026-69",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 42 anos, com dor abdominal recorrente, veio encaminhada da UPA para a Emergência por dor abdominal no quadrante superior direito e no epigástrio, com irradiação para o dorso, com duração de mais de 24 horas, sem alívio com analgésico intravenoso, associada a urina escurecida e náuseas. Familiar informou coloração amarelada da esclera no dia anterior. Ao exame físico, apresentava-se anictérica, com pressão arterial de 110/72 mmHg, frequência cardíaca de 94 bpm, temperatura axilar de 36,8º C, abdômen globoso, ruídos hidroaéreos presentes, dor à palpação profunda do hipocôndrio direito e do epigástrio, sem defesa. Exames iniciais indicaram hemoglobina de 12,1 g/dl, leucócitos de 10.200/mm³, AST de 124 U/l, ALT de 148 U/l, bilirrubina total de 1,7 mg/dl, bilirrubina direta de 1,2 mg/dl, creatinina de 1,1 mg/dl e amilase de 644 U/l.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "Litíase biliar complicada é a principal hipótese diagnóstica; os cálculos biliares, em sua maioria, são pretos (> 50%) por bilirrubinato de cálcio decorrente do aumento da bilirrubina indireta",
      "Para o diagnóstico de pancreatite aguda, são necessários 3 critérios: dor abdominal, aumento de amilase ou lipase > 5 vezes o limite da normalidade e exame de imagem (tomografia computadorizada ou ressonância magnética) compatível",
      "A paciente deve ser submetida a colangiopancreatografia retrógrada endoscópica com urgência",
      "Pancreatite aguda biliar é o diagnóstico provável; a maioria dos casos é leve, estando indicada colecistectomia na mesma internação"
    ],
    "correctAnswer": 3,
    "explanation": "Dor epigástrica e em hipocôndrio direito irradiada para o dorso, amilase > 3× o normal (644 U/L), com elevação de transaminases e colúria/icterícia recente: pancreatite aguda de provável origem biliar (litíase com passagem de cálculo). A maioria das pancreatites é leve; nos casos leves de origem biliar, recomenda-se colecistectomia na mesma internação para prevenir recorrência.",
    "commentary": "Maioria dos cálculos pretos (A): no Ocidente, a maioria (cerca de 80%) é de colesterol; os pretos se associam a hemólise e cirrose.\n\nTrês critérios obrigatórios incluindo imagem (B): o diagnóstico exige 2 de 3 (dor típica, enzimas > 3× o normal, imagem compatível).\n\nCPRE de urgência (C): só se houver colangite ou obstrução biliar persistente.",
    "reference": "Classificação de Atlanta revisada (2012); ACG Guideline: Management of Acute Pancreatitis (2024)",
    "tags": [
      "pancreatite biliar",
      "colecistectomia",
      "pancreatite aguda",
      "gastroenterologia"
    ],
    "tip": "Pancreatite: 2 de 3 critérios. Biliar leve: colecistectomia na mesma internação."
  },
  {
    "id": "hcpa2026-70",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 82 anos, submeteu-se a procedimento cirúrgico por fratura de colo de fêmur. No 2º dia pós-operatório, passou a apresentar alteração do estado mental, com flutuação ao longo do dia, e agitação psicomotora. Em seu histórico, constavam diabetes melito, hipertensão arterial e dislipidemia, em tratamento. Também fazia uso de antidepressivos.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "O diagnóstico de delirium será estabelecido pela documentação de alteração na memória recente por meio da aplicação do Mini Exame do Estado Mental",
      "O uso de opioides está contraindicado para o manejo da dor de idosos no contexto hospitalar pelo risco elevado de delirium",
      "O desenvolvimento de delirium nesse cenário é um fator de risco para o desenvolvimento de demência nos próximos anos",
      "Devido à associação de delirium com polifarmácia, os medicamentos em uso devem ser suspensos até a elucidação da etiologia mais provável"
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com alteração aguda e flutuante da consciência e agitação no pós-operatório de fratura de fêmur: delirium (pós-operatório, hiperativo). O delirium é fator de risco independente para declínio cognitivo e desenvolvimento de demência nos anos seguintes, além de maior mortalidade e institucionalização.",
    "commentary": "Diagnóstico pela memória no Mini-Mental (A): o diagnóstico é clínico, centrado na desatenção e na flutuação, com ferramentas como o CAM.\n\nOpioides contraindicados (B): dor mal controlada é causa de delirium; opioides em dose adequada são usados com cautela.\n\nSuspender todos os medicamentos (D): revisam-se e suspendem-se os potencialmente deliriogênicos, mas não todos (a suspensão abrupta de antidepressivos, por exemplo, pode agravar o quadro).",
    "reference": "American Geriatrics Society – Postoperative Delirium in Older Adults (2015); NICE CG103 – Delirium",
    "tags": [
      "delirium",
      "idoso",
      "pós-operatório",
      "demência",
      "geriatria"
    ],
    "tip": "Delirium aumenta o risco de demência futura."
  },
  {
    "id": "hcpa2026-71",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 38 anos, sem comorbidades conhecidas, procurou atendimento após apresentar sangramento nasal espontâneo e gengivorragia ao escovar os dentes. Não havia história de uso de anticoagulantes ou antiagregantes. O exame físico revelou petéquias nos membros inferiores. Considerando o mecanismo da hemostasia, que alteração, dentre as abaixo, é a mais compatível com o quadro apresentado?",
    "options": [
      "Deficiência de fator VIII",
      "Trombocitopenia",
      "Deficiência de vitamina K",
      "Coagulação intravascular disseminada"
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento mucocutâneo — epistaxe, gengivorragia e petéquias — indica distúrbio da hemostasia primária (plaquetas ou fator de von Willebrand). Entre as opções, a trombocitopenia é a alteração compatível.",
    "commentary": "Deficiência de fator VIII (A): hemofilia causa sangramento profundo (hemartroses, hematomas musculares), não petéquias.\n\nDeficiência de vitamina K (C): causa sangramentos por deficiência de fatores (equimoses, hematomas, sangramento digestivo), sem petéquias.\n\nCIVD (D): ocorre em pacientes graves com doença de base (sepse, trauma), com sangramento difuso e trombose.",
    "reference": "Harrison – Medicina Interna, 21ª ed. (distúrbios da hemostasia)",
    "tags": [
      "hemostasia primária",
      "trombocitopenia",
      "petéquias",
      "hematologia"
    ],
    "tip": "Petéquias e sangramento de mucosa = plaqueta (ou von Willebrand); hemartrose = fator."
  },
  {
    "id": "hcpa2026-72",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 28 anos, previamente hígido, procurou a Emergência por quadro de febre alta há 3 dias, mialgia intensa, cefaleia retro-orbitária, náuseas e exantema. Ao exame, apresentava pressão arterial (PA) de 100/70 mmHg, frequência cardíaca de 98 bpm, temperatura axilar de 38,5º C, petéquias nos membros inferiores e prova do laço positiva. O hemograma realizado à admissão revelou leucopenia e plaquetas de 85.000/mm³, com hematócrito de 44%. Devido aos sinais de alarme, o paciente foi internado para hidratação intravenosa e monitorização. No 4º dia de sintomas, evoluiu com dor abdominal intensa, extremidades frias e PA sistólica de 85 mmHg. Foi iniciada a administração de um primeiro bolus de soro fisiológico 0,9%, 20 ml/kg em 20 minutos. À reavaliação, cerca de 30 minutos após, a PA era de 90/60 mmHg, as extremidades ainda continuavam frias, a diurese encontrava-se < 0,5 ml/kg/h e o novo hematócrito era de 48%. Considerando o provável diagnóstico, a conduta indicada é",
    "options": [
      "repetir a administração de soro fisiológico 0,9%, 20 ml/kg em 20 minutos",
      "iniciar imediatamente a administração de coloide, como a albumina (20%), 10-20 ml/kg em 30 minutos",
      "transfundir imediatamente concentrado de hemácias, 10 ml/kg",
      "iniciar a administração de noradrenalina e reduzir a infusão de cristaloide para 1 ml/kg/h"
    ],
    "correctAnswer": 0,
    "explanation": "Dengue com sinais de alarme que evoluiu com choque (hipotensão, extremidades frias, oligúria) e hemoconcentração (Ht subiu de 44% para 48%) após o primeiro bolus, com melhora parcial: grupo D. Pelo protocolo do Ministério da Saúde, se não houver melhora, repete-se a expansão com soro fisiológico 0,9% 20 mL/kg em 20 minutos (até três vezes), reavaliando; se o hematócrito estiver em queda e persistir choque, investigar sangramento; coloides e drogas vasoativas são considerados após falha.",
    "commentary": "Albumina imediata (B): coloides são considerados após falha de três expansões com cristaloide.\n\nTransfusão de hemácias (C): com hematócrito em elevação (hemoconcentração), não há indicação; transfusão é para Ht em queda com instabilidade.\n\nNoradrenalina e redução da infusão (D): o paciente ainda está hipovolêmico (Ht subindo), e o vasopressor é para choque refratário à reposição.",
    "reference": "Ministério da Saúde – Dengue: diagnóstico e manejo clínico (6ª ed., 2024)",
    "tags": [
      "dengue grave",
      "choque",
      "hidratação venosa",
      "arboviroses"
    ],
    "tip": "Dengue com choque e Ht subindo: repetir SF 20 mL/kg (até 3×)."
  },
  {
    "id": "hcpa2026-73",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 20 anos, com diabetes melito tipo 1, foi trazido à Emergência por vir apresentando poliúria, dor abdominal, náuseas e vômitos há 24 horas. Relatou ter feito, no dia anterior, consumo abusivo de álcool. Ao exame físico, encontrava-se muito desidratado, taquipneico, com respiração de Kussmaul, hálito cetônico e temperatura axilar de 38º C. Os exames laboratoriais revelaram glicemia de 480 mg/dl, pH de 7,15, bicarbonato de 8 mEq/l, cetonemia positiva, leucocitose e elevação do nível de amilase. Considerando o diagnóstico de acidose metabólica por ânion gap aumentado, foram prontamente iniciadas reposição volêmica, insulinoterapia intravenosa contínua e monitorização intensiva.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "Pancreatite aguda é a causa mais provável da descompensação da cetoacidose",
      "Hiperglicemia marcada não ajuda no diagnóstico diferencial entre cetoacidose diabética e cetoacidose alcoólica",
      "Bicarbonato de sódio deve ser prontamente administrado",
      "Todo o quadro pode ser explicado pela cetoacidose diabética"
    ],
    "correctAnswer": 3,
    "explanation": "Diabético tipo 1 com hiperglicemia, acidose (pH 7,15, HCO₃ 8), cetonemia, vômitos e dor abdominal: cetoacidose diabética. Leucocitose, febre baixa e elevação de amilase podem ocorrer na própria CAD (a amilase eleva-se em parte dos casos, muitas vezes de origem salivar), e a dor abdominal é comum, de modo que o quadro todo pode ser explicado pela CAD — sem obrigar o diagnóstico de pancreatite.",
    "commentary": "Pancreatite como causa mais provável (A): a amilase sobe na CAD sem pancreatite; o diagnóstico exigiria dor típica com lipase > 3× ou imagem.\n\nHiperglicemia não diferencia de cetoacidose alcoólica (B): na cetoacidose alcoólica a glicemia costuma ser normal ou baixa; a hiperglicemia marcada favorece CAD.\n\nBicarbonato de rotina (C): só é indicado com pH < 6,9.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; ADA Consensus on Hyperglycemic Crises (2024)",
    "tags": [
      "cetoacidose diabética",
      "cetoacidose alcoólica",
      "amilase",
      "endocrinologia"
    ],
    "tip": "Na CAD, dor abdominal, leucocitose e amilase alta podem ser da própria CAD."
  },
  {
    "id": "hcpa2026-74",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 65 anos, foi trazido à Emergência por quadro de confusão mental de início agudo. Familiar relatou que ele consumia cerca de 500 ml/dia de destilados e que estava sem beber há uns 4 dias. Teve tremor, sudorese, insônia e náuseas em casa, mas no momento não apresentava esses sintomas e os sinais vitais permaneciam estáveis. Além de incluí-lo em protocolo de AVC, que medicamento, dentre os abaixo, deveria ser iniciado imediatamente?",
    "options": [
      "Diazepam por via parenteral",
      "Diazepam por via oral",
      "Tiamina por via parenteral",
      "Tiamina por via oral"
    ],
    "correctAnswer": 2,
    "explanation": "Etilista pesado com confusão mental aguda após abstinência: pode haver encefalopatia de Wernicke (deficiência de tiamina), emergência que exige tiamina parenteral em dose alta imediatamente (antes de glicose), mesmo sem a tríade completa (confusão, ataxia, oftalmoplegia). No momento ele não apresenta sinais de abstinência ativa (tremor, sudorese, hiperatividade autonômica), então benzodiazepínico não é a prioridade.",
    "commentary": "Diazepam parenteral (A) e oral (B): estão indicados na síndrome de abstinência com sintomas autonômicos, ausentes no momento.\n\nTiamina oral (D): a absorção oral é baixa no etilista; na suspeita de Wernicke, a via é parenteral.",
    "reference": "EFNS Guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy (2010); Associação Brasileira de Psiquiatria",
    "tags": [
      "encefalopatia de Wernicke",
      "tiamina",
      "alcoolismo",
      "neurologia"
    ],
    "tip": "Etilista confuso: tiamina parenteral antes de qualquer glicose."
  },
  {
    "id": "hcpa2026-75",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 64 anos, com hipertensão arterial e diabetes melito há 10 anos, em uso regular de anlodipino, hidroclorotiazida, metformina e insulina NPH, veio à consulta de rotina referindo fadiga progressiva e edema de membros inferiores. Exames laboratoriais indicaram creatinina de 2,5 mg/dl, ureia de 70 mg/dl, relação albumina/creatinina urinária de 1.400 mg/g, HbA1c de 7,9%, TFG estimada de 28 ml/min/1,73 m²; ultrassonografia mostrou rins de tamanho normal, com aumento da ecogenicidade cortical. Qual a conduta mais apropriada para o manejo inicial?",
    "options": [
      "Suspender metformina, iniciar inibidor da enzima conversora da angiotensina (iECA) e inibidor de SGLT-2, com monitoramento da função renal e dos eletrólitos",
      "Encaminhar o paciente para biópsia renal para confirmação diagnóstica e avaliar a troca da insulina",
      "Manter metformina, iniciar iECA e observar a evolução clínica e a evolução laboratorial por 3 meses",
      "Iniciar pulsoterapia com corticosteroides visando preservação da função renal residual"
    ],
    "correctAnswer": 0,
    "explanation": "Diabético e hipertenso com doença renal crônica estágio 4 (TFG 28) e albuminúria muito elevada (1.400 mg/g), com rins de tamanho normal: doença renal do diabetes. A conduta é suspender a metformina (contraindicada com TFG < 30), iniciar IECA (ou BRA) e inibidor de SGLT2 (pode ser iniciado com TFG ≥ 20), monitorando função renal e potássio.",
    "commentary": "Biópsia renal (B): não é necessária quando o quadro é típico de doença renal do diabetes (longa evolução, albuminúria progressiva, sem hematúria ou queda abrupta).\n\nManter metformina (C): com TFG < 30 ela deve ser suspensa; e falta o iSGLT2.\n\nPulsoterapia com corticoide (D): não tem papel na doença renal do diabetes.",
    "reference": "KDIGO 2022 Diabetes in CKD Guideline; Sociedade Brasileira de Diabetes – Diretriz 2024",
    "tags": [
      "doença renal do diabetes",
      "inibidores de SGLT2",
      "metformina",
      "nefrologia"
    ],
    "tip": "TFG < 30: suspender metformina; IECA/BRA + iSGLT2 (até TFG 20)."
  },
  {
    "id": "hcpa2026-76",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 40 anos, consultou por vir apresentando episódios recorrentes de litíase renal, com eliminação frequente de cálculos. Referiu história de litíase renal na família. À avaliação metabólica, foi identificada hipercalciúria idiopática. Diante do quadro, assinale a alternativa que contempla outras medidas adequadas, além da hidratação, para prevenir novos cálculos renais.",
    "options": [
      "Restrição severa de cálcio e sal na dieta",
      "Suplementação de vitamina C e suplementação de cálcio oral (carbonato de cálcio e colecalciferol)",
      "Aumento do consumo de proteínas animais e restrição do consumo de cálcio",
      "Restrição de sal na dieta e uso de diurético tiazídico (clortalidona)"
    ],
    "correctAnswer": 3,
    "explanation": "Na hipercalciúria idiopática com litíase recorrente, além da hidratação abundante (diurese > 2–2,5 L/dia), recomenda-se restrição de sódio (o sódio aumenta a calciúria), ingestão normal de cálcio na dieta e redução de proteína animal; se persistir, diurético tiazídico (clortalidona, hidroclorotiazida), que reduz a excreção urinária de cálcio.",
    "commentary": "Restrição severa de cálcio (A e C): aumenta a absorção de oxalato e o risco de cálculos, além de prejudicar o osso.\n\nVitamina C e suplementação de cálcio (B): a vitamina C aumenta o oxalato urinário, e suplementos de cálcio longe das refeições podem aumentar a calciúria.\n\nAumentar proteína animal (C): aumenta a calciúria e reduz o citrato urinário.",
    "reference": "AUA Guideline – Medical Management of Kidney Stones (2014, revisão 2019); EAU Guidelines on Urolithiasis",
    "tags": [
      "litíase renal",
      "hipercalciúria",
      "diuréticos tiazídicos",
      "nefrologia"
    ],
    "tip": "Hipercalciúria: menos sal, cálcio normal na dieta, menos proteína animal e tiazídico."
  },
  {
    "id": "hcpa2026-77",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 43 anos, informou, em consulta eletiva, ter, desde os 12 anos, cefaleia, bilateral, latejante, incapacitante, com fono e fotofobia. Os episódios usualmente duravam 12-48 horas quando não tratados. Na infância, ocorriam 6-10 dias/ano; no período da faculdade, 5-8 dias/mês; e, nos últimos anos, 20-25 dias/mês. Inicialmente, apresentava alívio completo das crises com dipirona associada a metoclopramida; atualmente, a dor não cedia por completo.\n\nCom base no caso clínico, assinale a assertiva correta.",
    "options": [
      "O manejo deve ser realizado com sumatriptano (50 mg) no início de todas as crises, podendo a dose ser repetida após 2 horas caso a dor não tenha cedido completamente",
      "Por se tratar de cefaleia progressiva, está indicada investigação com exame de imagem e, se normal, punção lombar com medida da pressão de abertura",
      "Durante o período da faculdade, deveria ter sido prescrita profilaxia para migrânea, evitando-se o quadro atual de migrânea crônica associada a uso excessivo de medicamentos",
      "Devido ao diagnóstico de migrânea, a paciente, quando na menopausa, não deverá fazer uso de terapia hormonal"
    ],
    "correctAnswer": 2,
    "explanation": "Cefaleia desde a infância com características de migrânea (latejante, incapacitante, foto e fonofobia, 12–48 horas) que aumentou em frequência até 20–25 dias por mês, com perda de resposta aos analgésicos: migrânea crônica associada a uso excessivo de medicamentos. Na fase da faculdade (5–8 dias/mês, com impacto), já havia indicação de profilaxia, que poderia ter evitado a cronificação.",
    "commentary": "Sumatriptano em todas as crises (A): com 20–25 dias de dor por mês, o uso de triptano em todas as crises agravaria a cefaleia por uso excessivo; a prioridade é a profilaxia e a retirada dos analgésicos.\n\nImagem e punção (B): a progressão da frequência de uma migrânea típica antiga não é sinal de alarme que exija investigação.\n\nContraindicação à terapia hormonal na menopausa (D): migrânea sem aura não contraindica TH; com aura, prefere-se via transdérmica em dose baixa.",
    "reference": "Sociedade Brasileira de Cefaleia; ICHD-3",
    "tags": [
      "migrânea crônica",
      "cefaleia por uso excessivo de medicamentos",
      "profilaxia",
      "neurologia"
    ],
    "tip": "Migrânea ≥ 4–5 dias/mês ou incapacitante: profilaxia, para evitar cronificação."
  },
  {
    "id": "hcpa2026-78",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 68 anos, com histórico de hipertensão arterial, diabetes melito e tabagismo, foi admitido na Emergência após início súbito (há 1 hora) de hemiparesia direita e afasia. Ao exame, apresentava NIHSS 12. Tomografia computadorizada de crânio não mostrou sinais de hemorragia. Angiotomografia revelou oclusão da artéria cerebral média à esquerda. O hospital dispunha de trombólise intravenosa e de equipe capacitada para realização de trombectomia mecânica. Qual a conduta a ser adotada?",
    "options": [
      "Realizar trombólise intravenosa com alteplase, pois trombectomia não traz benefício adicional",
      "Realizar trombectomia mecânica sem trombólise, pois NIHSS elevado já indica benefício",
      "Iniciar trombólise intravenosa com alteplase e encaminhar o paciente imediatamente para trombectomia mecânica",
      "Não realizar reperfusão; iniciar apenas administração de antiagregante plaquetário e aguardar a evolução clínica"
    ],
    "correctAnswer": 2,
    "explanation": "AVC isquêmico com 1 hora de evolução, NIHSS 12, TC sem hemorragia e oclusão de grande vaso (artéria cerebral média proximal): a conduta é trombólise intravenosa (alteplase ou tenecteplase) e, sem atrasá-la, trombectomia mecânica, que tem benefício adicional comprovado nas oclusões de grandes vasos.",
    "commentary": "Só trombólise (A): a trombectomia traz grande benefício adicional na oclusão de grande vaso.\n\nTrombectomia sem trombólise (B): em pacientes elegíveis, a trombólise deve ser feita (as evidências de trombectomia direta não superam a combinação de forma consistente); não se deve deixar de trombolisar.\n\nNão reperfundir (D): o paciente é elegível para as duas terapias.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019); Sociedade Brasileira de Doenças Cerebrovasculares",
    "tags": [
      "AVC isquêmico",
      "trombectomia mecânica",
      "trombólise",
      "neurologia"
    ],
    "tip": "Oclusão de grande vaso na janela: trombólise + trombectomia."
  },
  {
    "id": "hcpa2026-79",
    "module": "Clínica Médica",
    "text": "Paciente masculino, com derrame pleural à direita, foi submetido a punção pleural. A análise mostrou líquido amarelo citrino, com predominância de linfócitos (90%) e ausência de células mesoteliais, pH de 7,35, glicose de 75 mg/dl, proteína total pleural de 4,6 g/dl (sérica de 6,0 g/dl), desidrogenase láctica pleural de 180 U/l (sérica de 200 U/l; limite superior da normalidade de 220 U/l) e adenosina deaminase (ADA) de 60 U/l. Com base nos resultados, pode-se afirmar que o diagnóstico mais provável é derrame pleural",
    "options": [
      "parapneumônico por bactéria típica",
      "secundário a hepatopatia",
      "secundário a insuficiência renal",
      "tuberculoso"
    ],
    "correctAnswer": 3,
    "explanation": "Líquido pleural com proteína pleural/sérica > 0,5 (4,6/6,0 = 0,77): exsudato pelos critérios de Light. Predomínio linfocitário (90%), ausência de células mesoteliais e ADA de 60 U/L (acima de 40) indicam fortemente derrame pleural tuberculoso.",
    "commentary": "Parapneumônico bacteriano (A): teria predomínio de neutrófilos, pH baixo e glicose baixa nos complicados.\n\nHepatopatia (B) e insuficiência renal (C): costumam causar transudatos.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia – Diretrizes de derrame pleural; Manual de Recomendações para o Controle da Tuberculose (2024)",
    "tags": [
      "derrame pleural",
      "tuberculose pleural",
      "adenosina deaminase",
      "pneumologia"
    ],
    "tip": "Exsudato linfocítico + ADA > 40 + sem mesoteliais = tuberculose pleural."
  },
  {
    "id": "hcpa2026-80",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 72 anos, com dislipidemia e hipertensão arterial (uso regular de sinvastatina e hidroclorotiazida), buscou atendimento por dor no joelho direito, iniciada há 6 meses, com limitação funcional. Referiu episódios de dor em ambos os joelhos há mais de 5 anos, com duração de poucas semanas, que aliviavam com repouso. O IMC era de 35 kg/m².\n\nAo exame, identificaram-se aumento de volume endurecido em ambos os joelhos, discreto calor local e dor à palpação de linhas articulares, sem dor à mobilização passiva.\n\nCom base na principal hipótese diagnóstica, assinale a assertiva correta.",
    "options": [
      "Suplementação com altas doses de vitamina D deve ser iniciada",
      "Redução de peso deve ser proposta para melhora funcional e da dor",
      "Exercício físico está contraindicado pelo risco de agravamento da lesão",
      "Uso regular de palmilhas está indicado para correção do dano estrutural"
    ],
    "correctAnswer": 1,
    "explanation": "Idosa obesa com dor crônica nos joelhos, aumento de volume ósseo, dor nas linhas articulares e episódios de dor que melhoram com repouso: osteoartrite de joelhos. A redução de peso é uma das intervenções mais eficazes para melhorar dor e função, junto com exercícios (fortalecimento e aeróbico).",
    "commentary": "Vitamina D em altas doses (A): não melhora a osteoartrite.\n\nExercício contraindicado (C): o exercício é tratamento de primeira linha.\n\nPalmilhas para corrigir o dano estrutural (D): não corrigem a lesão e têm benefício limitado.",
    "reference": "ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis (2019); OARSI (2019)",
    "tags": [
      "osteoartrite",
      "joelho",
      "obesidade",
      "reumatologia"
    ],
    "tip": "Osteoartrite de joelho: perder peso e fazer exercício."
  },
  {
    "id": "hcpa2026-81",
    "module": "Saúde Coletiva",
    "text": "Um teste rápido para dengue tem sensibilidade de 85% e especificidade de 95%. Em um cenário de epidemia, observou-se valor preditivo positivo (VPP) de 90%. Se o mesmo teste for utilizado em uma cidade sem surto epidêmico, o VPP esperado será",
    "options": [
      "maior, pois depende apenas da especificidade",
      "menor, pois o VPP diminui quando a prevalência da doença é baixa",
      "igual, já que, teoricamente, sensibilidade e especificidade não variam com a prevalência",
      "inalterado, porque o teste foi validado para ser usado em qualquer população"
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e, em tese, não dependem da prevalência; já os valores preditivos dependem dela. Quanto menor a prevalência (cidade sem epidemia), maior a proporção de falsos-positivos entre os positivos e, portanto, menor o VPP (e maior o VPN).",
    "commentary": "Maior, por depender só da especificidade (A): o VPP depende da especificidade, da sensibilidade e da prevalência; com prevalência menor, ele cai.\n\nIgual (C): sensibilidade e especificidade não mudam, mas o VPP muda.\n\nInalterado por validação (D): a validação não torna os valores preditivos independentes da prevalência.",
    "reference": "Fletcher RH, Fletcher SW – Epidemiologia Clínica: Elementos Essenciais",
    "tags": [
      "valor preditivo positivo",
      "prevalência",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "Prevalência cai → VPP cai e VPN sobe."
  },
  {
    "id": "hcpa2026-82",
    "module": "Saúde Coletiva",
    "text": "Um ensaio clínico randomizado mostrou redução da pressão arterial com uso de um inibidor cotransportador de sódio-glicose tipo 2 (SGLT-2), resultado semelhante ao obtido previamente com outro fármaco da mesma classe. Qual critério de Hill está sendo exemplificado?",
    "options": [
      "Plausibilidade biológica",
      "Consistência",
      "Gradiente biológico",
      "Especificidade"
    ],
    "correctAnswer": 1,
    "explanation": "O critério de consistência de Hill refere-se à repetição da associação em estudos diferentes, com populações, métodos ou momentos distintos. Um novo ensaio reproduzindo o efeito já observado com outro fármaco da mesma classe exemplifica a consistência.",
    "commentary": "Plausibilidade biológica (A): é a existência de um mecanismo biológico que explique a associação.\n\nGradiente biológico (C): é a relação dose-resposta.\n\nEspecificidade (D): é uma causa levar a um efeito específico.",
    "reference": "Hill AB. The Environment and Disease: Association or Causation? Proc R Soc Med, 1965",
    "tags": [
      "critérios de Hill",
      "causalidade",
      "epidemiologia"
    ],
    "tip": "Mesmo achado em estudos diferentes = consistência."
  },
  {
    "id": "hcpa2026-83",
    "module": "Saúde Coletiva",
    "text": "Pesquisadores planejaram avaliar a associação entre duração de viagens aéreas superiores a 8 horas e trombose venosa profunda (TVP). Definiram que um estudo de casos e controles seria apropriado devido à raridade do desfecho. Contudo, para avaliar melhor temporalidade e gradiente biológico, outro grupo sugeriu realizar um estudo de coorte prospectivamente planejado. Qual a principal vantagem do estudo de coorte nesse contexto?",
    "options": [
      "Possibilidade de estimar a incidência da TVP entre pessoas expostas e não expostas",
      "Menor tempo e menor custo do que o estudo de casos e controles",
      "Maior eficiência para estudar desfechos incomuns",
      "Garantia de ausência de vieses de seleção"
    ],
    "correctAnswer": 0,
    "explanation": "No estudo de coorte, parte-se da exposição (viagens longas ou não) e acompanha-se o surgimento do desfecho, o que permite calcular a incidência em expostos e não expostos (e, assim, o risco relativo), além de garantir a temporalidade e permitir avaliar dose-resposta (duração da viagem).",
    "commentary": "Menor tempo e custo (B): coortes prospectivas são mais longas e caras que estudos de casos e controles.\n\nEficiência para desfechos raros (C): o estudo de casos e controles é que é eficiente para desfechos raros.\n\nAusência de vieses de seleção (D): nenhum desenho garante ausência de vieses; a coorte é sujeita, por exemplo, a perdas de seguimento.",
    "reference": "Gordis L – Epidemiologia; Medronho RA – Epidemiologia",
    "tags": [
      "estudo de coorte",
      "estudo de casos e controles",
      "desenhos de estudo",
      "epidemiologia"
    ],
    "tip": "Coorte mede incidência e risco relativo; caso-controle, razão de chances."
  },
  {
    "id": "hcpa2026-84",
    "module": "Saúde Coletiva",
    "text": "A meta trianual para o rastreio do câncer de colo uterino é uma razão de 0,4 exames coletados em mulheres da faixa etária compreendida entre 25 e 64 anos. No último triênio, uma UBS alcançou a razão de 0,36, tendo realizado a média de 9 exames citopatológicos por mês, 108 por ano e 324 no triênio. Considerando 900 mulheres da faixa etária preconizada para o rastreio e a periodicidade do rastreio, quantos citopatológicos a mais - em relação ao ano anterior - por mês e por ano deverão ser realizados para alcançar a razão de 0,4?",
    "options": [
      "1 a mais por mês - 12 a mais por ano",
      "2 a mais por mês - 24 a mais por ano",
      "3 a mais por mês - 36 a mais por ano",
      "4 a mais por mês - 48 a mais por ano"
    ],
    "correctAnswer": 0,
    "explanation": "Meta: 0,4 × 900 mulheres = 360 exames no triênio, ou seja, 120 por ano e 10 por mês. A UBS faz 9 por mês (108 por ano); precisa fazer 1 a mais por mês, 12 a mais por ano.",
    "commentary": "2, 3 ou 4 a mais por mês (B, C e D): superariam a meta; o cálculo dá 10 exames por mês, apenas 1 a mais que os 9 atuais.",
    "reference": "Ministério da Saúde – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016); indicador de razão de exames citopatológicos",
    "tags": [
      "indicadores de saúde",
      "rastreamento do câncer de colo uterino",
      "planejamento em saúde",
      "atenção primária"
    ],
    "tip": "Razão 0,4 × população-alvo = exames do triênio; divida por 3 e por 12."
  },
  {
    "id": "hcpa2026-85",
    "module": "Saúde Coletiva",
    "text": "Em rastreamento de acuidade visual realizado pela UBS no programa Saúde na Escola, identificou-se redução de acuidade visual em uma estudante de 12 anos. Ela foi encaminhada, pela UBS, à consulta no oftalmologista e retornou com a receita de óculos. Na UBS, foi feita a solicitação de óculos na ótica de referência vinculada ao programa Porto Olhar Alegre para o fornecimento gratuito de óculos para a escolar. Essa ação é exemplo de qual princípio do SUS?",
    "options": [
      "Equidade",
      "Universalidade",
      "Integralidade",
      "Descentralização"
    ],
    "correctAnswer": 2,
    "explanation": "A integralidade compreende a articulação de ações de promoção, prevenção, diagnóstico, tratamento e reabilitação, em todos os níveis de complexidade, de modo a atender às necessidades do indivíduo. O caminho rastreamento na escola → consulta especializada → fornecimento dos óculos exemplifica esse cuidado integral e articulado em rede.",
    "commentary": "Equidade (A): é tratar de forma desigual os desiguais, priorizando quem mais precisa.\n\nUniversalidade (B): é o direito de acesso de todos aos serviços.\n\nDescentralização (D): é uma diretriz organizativa (direção única em cada esfera de governo), não um princípio do cuidado.",
    "reference": "Lei nº 8.080/1990, art. 7º",
    "tags": [
      "princípios do SUS",
      "integralidade",
      "PSE",
      "saúde coletiva"
    ],
    "tip": "Cuidado articulado da prevenção à reabilitação, em todos os níveis = integralidade."
  },
  {
    "id": "hcpa2026-86",
    "module": "Saúde Coletiva",
    "text": "A Portaria no 399, de 22 de fevereiro de 2006, apresenta as Diretrizes do Pacto pela Saúde. O documento contempla o pacto firmado entre os gestores do Sistema Único de Saúde (SUS)\n\nem 3 dimensões visando a consolidação do SUS. Assinale a alternativa que relaciona uma das dimensões do pacto a uma das ações previstas para a respectiva dimensão.",
    "options": [
      "Pacto pela Vida - Política Nacional de DST/AIDS",
      "Pacto de Gestão - Fortalecimento da Atenção Básica",
      "Pacto em Defesa do SUS - Elaboração e publicação da Carta dos Direitos dos Usuários do SUS",
      "Pacto pela Prevenção - Promoção do envelhecimento ativo e saudável"
    ],
    "correctAnswer": 2,
    "explanation": "O Pacto pela Saúde (Portaria nº 399/2006) tem três dimensões: Pacto pela Vida, Pacto em Defesa do SUS e Pacto de Gestão. Entre as ações do Pacto em Defesa do SUS está a elaboração e a publicação da Carta dos Direitos dos Usuários do SUS, junto com a repolitização do SUS e a defesa do financiamento.",
    "commentary": "Pacto pela Vida – DST/AIDS (A): as prioridades do Pacto pela Vida eram saúde do idoso, câncer de colo e de mama, mortalidade infantil e materna, doenças emergentes e endemias, promoção da saúde e atenção básica; DST/AIDS não estava entre elas.\n\nPacto de Gestão – fortalecimento da Atenção Básica (B): o fortalecimento da Atenção Básica é prioridade do Pacto pela Vida.\n\nPacto pela Prevenção (D): essa dimensão não existe; o envelhecimento ativo integra o Pacto pela Vida.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 399, de 22 de fevereiro de 2006",
    "tags": [
      "pacto pela saúde",
      "políticas de saúde",
      "SUS",
      "saúde coletiva"
    ],
    "tip": "Três pactos: pela Vida, em Defesa do SUS e de Gestão."
  },
  {
    "id": "hcpa2026-87",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 46 anos, consultou por apresentar tosse seca, sensação de aperto no peito, chiado e falta de ar, predominantemente no final do turno de trabalho, quadro iniciado há cerca de 1 ano. Informou que trabalhava em um curtume de médio porte há 3 anos.\n\nInicialmente, os sintomas eram leves e esporádicos e atualmente interferiam em suas atividades diárias, com piora durante a semana e melhora no final de semana. Negou tabagismo. Relatou ausência de ventilação adequada no local de trabalho e uso irregular de equipamentos de proteção individual. Ao exame físico, foram constatados sibilos difusos bilaterais. A saturação de oxigênio era 93% em repouso. Considerando o quadro clínico e o histórico ocupacional, qual o diagnóstico mais provável?",
    "options": [
      "Asma induzida por cromo",
      "Bronquite crônica",
      "Rinite alérgica",
      "Pneumonite química aguda"
    ],
    "correctAnswer": 0,
    "explanation": "Trabalhador de curtume (exposição a sais de cromo usados no curtimento do couro) com tosse, aperto no peito, sibilos e dispneia que pioram ao longo da semana de trabalho e melhoram nos fins de semana: asma relacionada ao trabalho, compatível com asma ocupacional induzida por cromo (sensibilizante). A investigação inclui medidas seriadas de pico de fluxo no trabalho e fora dele, e a conduta, o afastamento da exposição.",
    "commentary": "Bronquite crônica (B): exige tosse produtiva por 3 meses em 2 anos seguidos, geralmente em tabagistas, sem a relação clara com o trabalho.\n\nRinite alérgica (C): não explica sibilos difusos e dispneia.\n\nPneumonite química aguda (D): ocorre após exposição intensa e aguda a irritante, não com quadro de 1 ano com melhora nos fins de semana.",
    "reference": "Ministério da Saúde – Doenças Relacionadas ao Trabalho: Manual de Procedimentos; Sociedade Brasileira de Pneumologia e Tisiologia – Asma relacionada ao trabalho",
    "tags": [
      "asma ocupacional",
      "cromo",
      "saúde do trabalhador",
      "pneumologia"
    ],
    "tip": "Piora na semana de trabalho e melhora no fim de semana = asma ocupacional."
  },
  {
    "id": "hcpa2026-88",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 38 anos, trabalhando há 10 anos na limpeza de comedouros e no abastecimento de ração para aves em um aviário, veio à consulta queixando-se de dor localizada na região lateral do cotovelo direito, que se intensificava ao realizar movimentos que exigiam esforço com o membro superior. Referiu piora progressiva da dor nos últimos 3 meses, acompanhada de fraqueza para segurar objetos e de dificuldade para realizar tarefas manuais. Negou parestesias. Ao exame físico, apresentava dor à palpação sobre o epicôndilo lateral do úmero e dor à extensão resistida do punho. O diagnóstico mais provável é",
    "options": [
      "tendinite de De Quervain",
      "síndrome do túnel do carpo",
      "compressão do nervo cubital ao nível do cotovelo",
      "epicondilite"
    ],
    "correctAnswer": 3,
    "explanation": "Dor no epicôndilo lateral à palpação e à extensão resistida do punho, com piora ao esforço e fraqueza de preensão, em trabalhador com movimentos repetitivos de membro superior: epicondilite lateral, uma LER/DORT.",
    "commentary": "Tendinite de De Quervain (A): acomete o primeiro compartimento extensor no punho (teste de Finkelstein).\n\nSíndrome do túnel do carpo (B): causa parestesias no território do nervo mediano, negadas pelo paciente.\n\nCompressão do nervo ulnar no cotovelo (C): causa parestesias no 4º e 5º dedos e dor medial.",
    "reference": "Ministério da Saúde – LER/DORT: Dor Relacionada ao Trabalho (2012)",
    "tags": [
      "epicondilite lateral",
      "LER/DORT",
      "saúde do trabalhador",
      "ortopedia"
    ],
    "tip": "Dor no epicôndilo lateral com extensão resistida do punho = epicondilite lateral."
  },
  {
    "id": "hcpa2026-89",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 43 anos, procurou atendimento pela segunda vez no serviço ambulatorial da empresa onde trabalhava. Referiu fadiga, cefaleia, esquecimentos e irritabilidade, quadro iniciado há 2 meses. Trouxe resultados de exames solicitados na consulta anterior: hemograma, glicemia, TSH, dosagem de vitaminas, perfil lipídico, todos dentro dos padrões da normalidade. Há cerca de 2 semanas, apresentou algumas medidas de pressão arterial elevadas, o que nunca havia ocorrido. Negou tabagismo e uso abusivo de álcool ou outras drogas. Supervisor de estoque em uma rede de supermercados, há 3 meses passou a trabalhar no turno noturno, 4 vezes/semana, das 22 às 6 horas, com folga no dia seguinte. Informou que, quando chegava em casa, tomava café da manhã, ajudava a arrumar o filho para a escola e ia dormir. Não fazia uso de medicações contínuas. Diante da história, qual a hipótese mais provável e qual a intervenção possível na consulta?",
    "options": [
      "Transtorno de estresse agudo - Por provocar insônia, necessita de prescrição de antidepressivos e hipnóticos por curto período",
      "Episódio depressivo moderado - Necessita de encaminhamento para psicoterapia e início de medicamento antidepressivo",
      "Transtorno do ciclo circadiano gerando insônia aguda - Recomendam-se manejo comportamental e uso por curto tempo de hipnóticos",
      "Transtorno de ansiedade leve com sintomas somáticos - Necessita de adoção de medidas não farmacológicas, como exercícios físicos e meditação"
    ],
    "correctAnswer": 2,
    "explanation": "Início de fadiga, cefaleia, esquecimentos, irritabilidade e elevação da pressão após mudança para turno noturno, com exames normais e sono diurno fragmentado (dorme só depois de ajudar o filho): transtorno do ritmo circadiano por trabalho em turnos, com insônia. O manejo é comportamental (higiene do sono, escurecer o quarto, horário fixo de sono, exposição planejada à luz) e, se necessário, uso de hipnótico por curto período.",
    "commentary": "Estresse agudo (A): não há evento traumático desencadeante.\n\nEpisódio depressivo moderado (B): não há humor deprimido ou anedonia descritos; o quadro é explicado pela mudança de turno.\n\nAnsiedade leve com sintomas somáticos (D): ignora a relação temporal clara com o trabalho noturno.",
    "reference": "American Academy of Sleep Medicine – International Classification of Sleep Disorders (ICSD-3); Ministério da Saúde – Doenças Relacionadas ao Trabalho",
    "tags": [
      "trabalho em turnos",
      "distúrbios do ritmo circadiano",
      "insônia",
      "saúde do trabalhador"
    ],
    "tip": "Sintomas após mudança para turno noturno: pensar em transtorno circadiano."
  },
  {
    "id": "hcpa2026-90",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 73 anos, previamente hígido, procurou a UBS por apresentar quadro de início súbito de mal-estar, calafrios, febre de até 38,5° C, mialgia, disúria e dor perineal. Considerando a principal hipótese diagnóstica, assinale a assertiva correta.",
    "options": [
      "Toque retal pode revelar uma próstata aumentada, com consistência firme",
      "Massagem prostática vigorosa deve ser realizada para coleta de material para exame",
      "PSA aumentado é fundamental para o diagnóstico",
      "Solicitação de ultrassonografia da próstata deve fazer parte da avaliação inicial"
    ],
    "correctAnswer": 0,
    "explanation": "Início súbito de febre, calafrios, mal-estar, disúria e dor perineal em homem idoso: prostatite bacteriana aguda. Ao toque retal (que deve ser delicado), a próstata está aumentada, firme/endurecida, quente e muito dolorosa. O diagnóstico é clínico, com urocultura.",
    "commentary": "Massagem prostática vigorosa (B): é contraindicada na prostatite aguda, por risco de bacteremia.\n\nPSA aumentado como critério (C): o PSA pode subir, mas não é necessário para o diagnóstico e não deve ser dosado na fase aguda para rastreamento.\n\nUltrassonografia inicial (D): é reservada a suspeita de abscesso ou falha terapêutica.",
    "reference": "EAU Guidelines on Urological Infections (2024); Sociedade Brasileira de Urologia",
    "tags": [
      "prostatite bacteriana aguda",
      "infecção urinária",
      "urologia",
      "atenção primária"
    ],
    "alert": "A descrição clássica da próstata na prostatite aguda é aumentada, quente, edemaciada e muito dolorosa; a alternativa fala só em consistência firme, mas é a única correta.",
    "tip": "Prostatite aguda: toque delicado, nunca massagem."
  },
  {
    "id": "hcpa2026-91",
    "module": "Saúde Coletiva",
    "text": "Paciente feminina, de 55 anos, solteira e sem filhos, que trabalha como secretária com jornada de 6 horas diárias, veio à consulta para avaliação clínica e exames. A última avaliação médica fora há 10 anos. Não tinha queixas de saúde; seu peso era o mesmo há vários anos. Relatou sentir-se bem, fazer exercícios físicos 3 vezes/semana, não beber e não fumar.\n\nMantinha vida sexual ativa. A menopausa ocorrera aos 51 anos, com poucos sintomas e sem reposição hormonal. O pai, de 81 anos, tinha diabetes melito tipo 2 e hipertensão arterial; a mãe, de 78 anos, teve câncer de cólon aos 70 anos, fez cirurgia e encontrava-se bem. Ao exame físico, o IMC era de 24,5 kg/m2, e a pressão arterial, de 120/70 mmHg; demais aspectos do exame estavam normais. Assinale a alternativa que contempla apenas testes de rastreamento com recomendação GRADE A no contexto da paciente.",
    "options": [
      "Densitometria óssea - mamografia - teste para sífilis",
      "Colonoscopia - teste para sífilis - exame citopatológico cervical",
      "Ultrassonografia abdominal - mamografia - colonoscopia",
      "Pesquisa de HIV - dosagem de perfil lipídico - densitometria óssea"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 55 anos, sexualmente ativa, sem fatores de risco especiais. Têm recomendação grau A (USPSTF): rastreamento de câncer colorretal entre 50 e 75 anos (a mãe teve câncer aos 70, o que não muda a idade de início), exame citopatológico do colo até 64–65 anos, rastreamento de sífilis em pessoas com risco aumentado e de HIV entre 15 e 65 anos.",
    "commentary": "Densitometria e mamografia (A): mamografia é grau B; densitometria antes dos 65 anos é grau B e só se houver risco aumentado.\n\nUltrassonografia abdominal (C): não é teste de rastreamento recomendado nesse contexto.\n\nPerfil lipídico e densitometria (D): não são grau A nessa paciente.",
    "reference": "U.S. Preventive Services Task Force (USPSTF) – Recommendations; Ministério da Saúde – Cadernos de Atenção Primária nº 29 (Rastreamento)",
    "tags": [
      "rastreamento",
      "prevenção",
      "USPSTF",
      "medicina de família e comunidade"
    ],
    "tip": "Grau A USPSTF: colorretal (45/50–75), colo do útero, HIV, sífilis em risco, hipertensão."
  },
  {
    "id": "hcpa2026-92",
    "module": "Saúde Coletiva",
    "text": "Gestante, com 14 semanas de gestação, veio para a segunda consulta de pré-natal, trazendo os resultados de exames solicitados na primeira consulta: glicose de jejum de 94 mg/dl e demais exames dentro dos padrões da normalidade. Qual a conduta mais adequada?",
    "options": [
      "Encaminhar a paciente para pré-natal de alto risco, por se tratar de diagnóstico de diabetes melito gestacional",
      "Encaminhar a paciente para pré-natal de alto risco, por se tratar de diagnóstico de diabetes melito na gestação",
      "Orientar dieta e realização de glicemia capilar 4 vezes/dia, diariamente; manter acompanhamento na Atenção Primária, com reavaliação em 2 semanas",
      "Iniciar tratamento com insulina NPH e orientar dieta; manter acompanhamento na Atenção Primária, com reavaliação em 2 semanas"
    ],
    "correctAnswer": 2,
    "explanation": "Na gestação, glicemia de jejum entre 92 e 125 mg/dL no primeiro exame define diabetes melito gestacional (≥ 126 seria diabetes prévio/franco). Com 94 mg/dL, o diagnóstico é DMG. O tratamento inicial é dieta, atividade física e monitorização da glicemia capilar, com acompanhamento que pode ser mantido na Atenção Primária, reavaliando em 1–2 semanas; insulina é indicada se as metas não forem atingidas.",
    "commentary": "Encaminhar ao alto risco por DMG (A): o DMG controlado com dieta pode ser acompanhado na APS, segundo o protocolo adotado.\n\nDiabetes na gestação (B): exigiria jejum ≥ 126 mg/dL.\n\nInsulina de início (D): é indicada só após falha das medidas não farmacológicas.",
    "reference": "Ministério da Saúde/FEBRASGO/SBD/OPAS – Rastreamento e Diagnóstico de Diabetes Mellitus Gestacional no Brasil (2017); Sociedade Brasileira de Diabetes – Diretriz 2024",
    "tags": [
      "diabetes mellitus gestacional",
      "pré-natal",
      "glicemia de jejum",
      "atenção primária"
    ],
    "tip": "Gestante: GJ 92–125 = DMG; ≥ 126 = diabetes franco."
  },
  {
    "id": "hcpa2026-93",
    "module": "Saúde Coletiva",
    "text": "Paciente feminina, de 25 anos, veio à UBS para a segunda consulta de pré-natal, com 12 semanas de gestação, conforme a data da última menstruação. O exame obstétrico foi normal. Os exames de acompanhamento indicaram teste treponêmico (TT) positivo e teste não treponêmico (TNT) negativo. Os demais exames apresentaram resultados dentro dos padrões da normalidade. Não havia histórico de sífilis. Estava em um relacionamento fixo quando engravidou, mas rompeu com o parceiro e não tem mantido contato sexual com ele ou com outro parceiro. Com base no quadro, qual a conduta mais adequada?",
    "options": [
      "Tratar com benzilpenicilina benzatina 1,2 milhões UI em cada glúteo, intramuscular, semanal, por 3 semanas, e repetir TT e TNT mensalmente",
      "Tratar com benzilpenicilina benzatina 1,2 milhões UI em cada glúteo, intramuscular, em dose única, e repetir TT e TNT trimestralmente",
      "Repetir TT e TNT mensalmente e tratar com benzilpenicilina benzatina 1,2 milhões UI em cada glúteo, semanal, por 3 semanas se positivar o TNT",
      "Repetir TNT por outra técnica; se positivo, tratar com 1 dose de benzilpenicilina benzatina 1,2 milhões UI, intramuscular, em dose única, em cada glúteo, e repetir TNT trimestralmente"
    ],
    "correctAnswer": 0,
    "explanation": "Na gestante, qualquer teste reagente para sífilis exige tratamento sem esperar a confirmação, pelo risco de sífilis congênita. TT positivo com TNT negativo, sem história de tratamento e sem como datar a infecção, é tratado como sífilis latente de duração ignorada: benzilpenicilina benzatina 2,4 milhões UI por semana, por 3 semanas (7,2 milhões UI), com seguimento mensal na gestação.",
    "commentary": "Dose única (B): é para sífilis recente; sem datação, tratam-se 3 doses.\n\nEsperar o TNT positivar (C): adiar o tratamento expõe o feto; na gestação, trata-se já.\n\nRepetir o TNT por outra técnica antes de tratar (D): o protocolo recomenda confirmar com outro teste treponêmico, mas sem atrasar o tratamento na gestante; e a dose única seria insuficiente.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022); PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais",
    "tags": [
      "sífilis na gestação",
      "penicilina benzatina",
      "pré-natal",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Gestante com teste de sífilis reagente: tratar logo; duração ignorada = 3 doses."
  },
  {
    "id": "hcpa2026-94",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 53 anos, veio à consulta por desejar submeter-se a um check-up por insistência da esposa com quem se casara recentemente. Informou não realizar acompanhamento de saúde há muitos anos. No momento, não fazia uso de medicamentos nem apresentava queixas relacionadas à sua saúde. Trouxe resultado de um exame realizado há 11 anos em que constava: Amostra reagente para o anticorpo contra o vírus da hepatite C (anti-HCV). Informou nunca ter feito tratamento específico para hepatite C. Com base no quadro, qual a conduta mais adequada?",
    "options": [
      "Solicitar AST e ALT; se os resultados estiverem dentro da faixa da normalidade, manter o acompanhamento com os mesmos exames anualmente",
      "Solicitar carga viral para hepatite C; se estiver com carga viral indetectável, encerrar a investigação para hepatite C",
      "Iniciar tratamento com antivirais de ação direta para hepatite C",
      "Considerar o caso como cura espontânea com desenvolvimento de imunidade permanente para hepatite C e encerrar a investigação"
    ],
    "correctAnswer": 1,
    "explanation": "Anti-HCV reagente indica contato com o vírus, mas não distingue infecção ativa de infecção curada (cerca de 15–30% eliminam o vírus espontaneamente, e o anticorpo persiste). O passo seguinte é a carga viral (HCV-RNA): se detectável, há infecção crônica e indica-se tratamento; se indetectável, considera-se infecção resolvida e encerra-se a investigação (sem imunidade protetora).",
    "commentary": "Acompanhar com AST/ALT (A): transaminases normais não excluem hepatite C crônica.\n\nTratar direto (C): só após confirmar viremia.\n\nCura espontânea com imunidade permanente (D): não se pode presumir cura sem carga viral, e a cura não confere imunidade (reinfecção é possível).",
    "reference": "Ministério da Saúde – PCDT para Hepatite C e Coinfecções (2019, atualizações)",
    "tags": [
      "hepatite C",
      "anti-HCV",
      "carga viral",
      "infectologia"
    ],
    "tip": "Anti-HCV positivo → carga viral (HCV-RNA)."
  },
  {
    "id": "hcpa2026-95",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 30 anos, que havia retornado de viagem ao Cerrado (Goiás), foi diagnosticado com febre amarela. À avaliação inicial, apresentava vômitos, diarreia e dor abdominal. Os exames laboratoriais revelaram AST de 580 U/l, creatinina de 1,4 mg/dl e plaquetas de 45.000/mm3. Com base nas informações, qual a classificação da febre amarela?",
    "options": [
      "Forma hepatorrenal",
      "Forma leve",
      "Forma moderada",
      "Forma grave"
    ],
    "correctAnswer": 2,
    "explanation": "O Ministério da Saúde classifica a febre amarela em leve, moderada e grave. Sintomas gastrointestinais com AST ≥ 500 U/L e creatinina ≥ 1,3 mg/dL, sem os critérios de gravidade (AST/ALT ≥ 2.000, creatinina ≥ 2 mg/dL, INR ≥ 1,5, sangramento, encefalopatia, oligúria), caracterizam a forma moderada, que exige internação e monitorização.",
    "commentary": "Forma hepatorrenal (A): não é uma das categorias da classificação oficial.\n\nForma leve (B): teria transaminases abaixo de 500 U/L e função renal normal.\n\nForma grave (D): exigiria AST/ALT ≥ 2.000, creatinina ≥ 2 mg/dL, coagulopatia, sangramento ou encefalopatia.",
    "reference": "Ministério da Saúde – Febre amarela: guia para profissionais de saúde (2ª ed.)",
    "tags": [
      "febre amarela",
      "classificação de gravidade",
      "arboviroses",
      "infectologia"
    ],
    "tip": "Febre amarela: AST ≥ 500 ou Cr ≥ 1,3 = moderada; AST ≥ 2.000, Cr ≥ 2 ou sangramento = grave."
  },
  {
    "id": "hcpa2026-96",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que contempla apenas vantagens da consulta remota sobre a consulta presencial.",
    "options": [
      "Eliminação do tempo do deslocamento - redução do tempo de consulta - ampliação das possibilidades de exame físico direto - redução do risco de iatrogenia",
      "Eliminação do risco do deslocamento - comunicação de más notícias - situações de necessidade de distanciamento social - melhoria da acessibilidade",
      "Redução da pegada de carbono - aumento do acesso à saúde – atendimento de situações de risco - aumento das formas e possibilidades de agendamento de consultas",
      "Redução da pegada de carbono - possibilidade de avaliação da maioria dos órgãos e sistemas do corpo humano - triagem de pacientes - situações de necessidade de isolamento físico"
    ],
    "correctAnswer": 1,
    "explanation": "A teleconsulta elimina o risco e o tempo do deslocamento, é útil quando há necessidade de distanciamento social e amplia o acesso para quem tem dificuldade de chegar ao serviço. O gabarito inclui também a comunicação de más notícias entre as situações em que o atendimento remoto pode ser útil.",
    "commentary": "Redução do tempo de consulta e mais exame físico (A): a consulta remota não reduz necessariamente o tempo e limita o exame físico.\n\nAtendimento de situações de risco (C): situações de risco e urgência exigem avaliação presencial.\n\nAvaliação da maioria dos órgãos e sistemas (D): o exame físico remoto é limitado.",
    "reference": "Gusso G, Lopes JMC – Tratado de Medicina de Família e Comunidade (teleconsulta); Resolução CFM nº 2.314/2022 (telemedicina)",
    "tags": [
      "telemedicina",
      "teleconsulta",
      "medicina de família e comunidade"
    ],
    "alert": "Questão discutível: a comunicação de más notícias costuma ser recomendada de forma presencial; a alternativa B é a melhor entre as opções pelos demais itens.",
    "tip": "Teleconsulta: menos deslocamento e mais acesso, mas exame físico limitado."
  },
  {
    "id": "hcpa2026-97",
    "module": "Saúde Coletiva",
    "text": "Doença meningocócica é um agravo de notificação compulsória, que deve ser comunicado às Secretarias Municipais e Estaduais de Saúde em até 24 horas do diagnóstico. Além da notificação e da investigação de casos e surtos, é essencial a adoção de medidas de prevenção e controle. Na quimioprofilaxia dos contatos, não está indicado o uso de",
    "options": [
      "rifampicina",
      "ceftriaxona",
      "ciprofloxacino",
      "cefepima"
    ],
    "correctAnswer": 3,
    "explanation": "A quimioprofilaxia dos contatos próximos de doença meningocócica usa rifampicina (primeira escolha), ceftriaxona intramuscular em dose única (opção em gestantes) ou ciprofloxacino em dose única. A cefepima não faz parte dos esquemas de quimioprofilaxia.",
    "commentary": "Rifampicina (A): é a droga de escolha (600 mg 12/12 h por 2 dias em adultos).\n\nCeftriaxona (B): 250 mg IM dose única, preferida na gestação.\n\nCiprofloxacino (C): 500 mg VO dose única, alternativa para adultos.",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde (6ª ed., 2023), doença meningocócica",
    "tags": [
      "doença meningocócica",
      "quimioprofilaxia",
      "vigilância epidemiológica",
      "infectologia"
    ],
    "tip": "Profilaxia meningocócica: rifampicina, ceftriaxona ou ciprofloxacino."
  },
  {
    "id": "hcpa2026-98",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nPaciente de 13 anos veio à UBS acompanhada da mãe por quadro de dor abdominal. A mãe suspeitava que a menina estivesse com vermes. Ao exame físico, observou-se aumento do volume abdominal, com fundo uterino palpável 2 cm abaixo da cicatriz umbilical. O teste rápido para gestação foi positivo. A paciente relatou que mantivera relações sexuais desprotegidas e consensuais com um colega da escola, fato desconhecido pela mãe. Durante o atendimento, a paciente e sua mãe questionaram sobre a possibilidade de realização de um aborto. O aborto __________. A paciente deverá __________; e o profissional deverá __________.",
    "options": [
      "é possível, por se tratar de estupro de vulnerável - ser orientada e encaminhada ao serviço de referência em atendimento de crianças vítimas de violência sexual e aborto legal - fazer a notificação de situação de violência no Sistema de Informação de Agravos de Notificação (Sinan)",
      "é possível, desde que a paciente faça um boletim de ocorrência de estupro - ser encaminhada ao serviço de referência em atendimento de crianças vítimas de violência sexual e aborto legal - fazer a notificação de situação de violência no Sinan",
      "não é possível, por se tratar de um relacionamento consensual - ser orientada sobre a possibilidade de encaminhamento da criança para adoção - encaminhar a paciente ao pré-natal de alto risco",
      "não é possível, por não haver previsão de aborto legal - realizar os exames iniciais de pré-natal e agendar retorno em breve à UBS - encaminhar a paciente para acompanhamento no serviço de saúde mental devido à gestação não planejada"
    ],
    "correctAnswer": 0,
    "explanation": "Relação sexual com menor de 14 anos é estupro de vulnerável (art. 217-A do Código Penal), mesmo que consentida. Assim, o aborto é legal (art. 128, II), sem exigência de boletim de ocorrência. A paciente deve ser orientada e encaminhada ao serviço de referência para atendimento de violência sexual e aborto legal, e o profissional deve notificar a violência no Sinan (e comunicar ao Conselho Tutelar, por se tratar de criança/adolescente).",
    "commentary": "Exigir boletim de ocorrência (B): o aborto em gestação por estupro não depende de BO.\n\nNão é possível por ser consensual (C): o consentimento de menor de 14 anos não tem validade legal.\n\nNão há previsão de aborto legal (D): a lei prevê o aborto em gravidez decorrente de estupro.",
    "reference": "Código Penal, arts. 128 e 217-A; Ministério da Saúde – Atenção Humanizada ao Abortamento; Estatuto da Criança e do Adolescente",
    "tags": [
      "estupro de vulnerável",
      "aborto legal",
      "violência sexual",
      "notificação compulsória",
      "SINAN"
    ],
    "tip": "Menor de 14 anos grávida = estupro de vulnerável: aborto legal sem BO + notificação."
  },
  {
    "id": "hcpa2026-99",
    "module": "Saúde Coletiva",
    "text": "Paciente feminina, de 32 anos, veio à consulta na Atenção Primária com queixa de dor precordial em aperto, sem irradiação, com duração de cerca de 1 hora ao final do dia, quadro iniciado há 6 meses. Relatou cansaço, razão pela qual ficava mais em casa. Negou ortopneia, dispneia paroxística noturna ou dispneia aos esforços; negou, também, tabagismo e etilismo; fazia ginástica 3 vezes/semana. Ao exame físico, não apresentava anormalidades. Informou ter estado na Emergência devido à dor, ocasião em que foram feitos exames laboratoriais e eletrocardiografia, todos normais. Referiu muita preocupação com a saúde desde que perdera a mãe por um infarto há 7 meses. Não acreditava que a dor no peito fosse de origem “psicológica”, como sugerido na última consulta na UPA, mas comentou ter pensamentos persistentes com a mãe, chorar quase todos os dias, ter dificuldade para dormir. Quando chegava ao final do dia, horário próximo ao da morte da mãe, apresentava sensações de formigamento na face e a impressão de ouvir a voz dela vindo do quarto. Considerando o quadro de sintomas relatado, assinale a alternativa que contempla o tipo de luto, a natureza dos sintomas somáticos e a proposta terapêutica para a situação.",
    "options": [
      "Luto normal - sintomas devidos à somatização do infarto sofrido pela mãe - Prescrever o uso de antidepressivo para prevenir o transtorno do luto complexo persistente",
      "Luto normal - sintomas somáticos decorrentes da vivência da perda da mãe - Indicar intervenção psicossocial (terapia de reatribuição) para o sintoma somático de dor no peito",
      "Transtorno do luto complexo persistente - sintomas somáticos relacionados ao luto - Iniciar medicamento antidepressivo",
      "Transtorno do luto complexo persistente - dor torácica a ser investigada com exames complementares - Encaminhar a paciente para psicoterapia para abordagem do luto"
    ],
    "correctAnswer": 1,
    "explanation": "Sete meses após a perda da mãe, com tristeza, choro, pensamentos sobre a falecida, insônia e até impressões de ouvir a voz dela no horário da morte, mas mantendo exercício e funcionamento: luto normal (o transtorno de luto prolongado exige ao menos 12 meses em adultos, pelo DSM-5-TR). A dor torácica, com investigação normal, é sintoma somático ligado à vivência da perda, e a abordagem é psicossocial, como a terapia de reatribuição, que ajuda a relacionar o sintoma ao sofrimento emocional.",
    "commentary": "Antidepressivo para prevenir o luto complicado (A): não há indicação de medicação no luto normal, e os sintomas não são “somatização do infarto”.\n\nTranstorno do luto complexo persistente com antidepressivo (C): o tempo é insuficiente para esse diagnóstico.\n\nTranstorno do luto com nova investigação da dor (D): o diagnóstico está errado, e a dor já foi investigada sem alterações.",
    "reference": "DSM-5-TR (transtorno de luto prolongado); Gusso G, Lopes JMC – Tratado de Medicina de Família e Comunidade (sintomas somáticos e reatribuição)",
    "tags": [
      "luto",
      "sintomas somáticos",
      "terapia de reatribuição",
      "saúde mental",
      "medicina de família e comunidade"
    ],
    "tip": "Luto prolongado: ≥ 12 meses em adultos. Antes disso, luto normal."
  },
  {
    "id": "hcpa2026-100",
    "module": "Saúde Coletiva",
    "text": "Médica-residente de segundo ano (R2) encontrou no vestiário do Bloco Cirúrgico do Hospital de Clínicas de Porto Alegre uma colega residente (R1). Como já fazia algum tempo que não se viam, R2 perguntou se havia ocorrido algo extraordinário. R1 referiu ter tido H1N1, o que a impossibilitara de vir ao hospital. A conversa evoluiu e, aproveitando o encontro, R1 solicitou um atestado retroativo de 3 dias para R2. Conforme o Código de Ética Médica, do Conselho Federal de Medicina,",
    "options": [
      "é permitido atestar, no receituário do hospital, o período da doença com a data retroativa",
      "é permitido atestar, no receituário do hospital, o período da doença com a data atual",
      "é vedado atestar, no receituário do hospital, o período da doença sem ter praticado e registrado o ato da consulta médica",
      "é vedado atestar, no receituário do hospital ou no pessoal, uma doença passada com data atual, mesmo tendo ocorrido a consulta"
    ],
    "correctAnswer": 2,
    "explanation": "O Código de Ética Médica veda ao médico expedir documento sem ter praticado o ato profissional que o justifique, ou que não corresponda à verdade (art. 80), e veda atestar sem ter examinado o paciente. Sem consulta registrada, R2 não pode emitir o atestado, nem com data retroativa nem com data atual.",
    "commentary": "Atestar com data retroativa (A): sem consulta, o atestado é vedado; e a data deve ser a do atendimento.\n\nAtestar com data atual (B): continua sendo documento sem ato médico.\n\nVedado atestar doença passada com data atual mesmo com consulta (D): se houve consulta, o médico pode atestar, com a data do atendimento, o afastamento que julgar justificado.",
    "reference": "Conselho Federal de Medicina – Código de Ética Médica (Resolução CFM nº 2.217/2018), arts. 80 e 91; Resolução CFM nº 1.658/2002",
    "tags": [
      "ética médica",
      "atestado médico",
      "código de ética médica"
    ],
    "tip": "Atestado só com ato médico realizado e registrado."
  }
];
