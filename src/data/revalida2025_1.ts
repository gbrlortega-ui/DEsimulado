import { Question } from '../types';

// Revalida INEP 2025/1 — primeira etapa (prova objetiva). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const REVALIDA_2025_1_QUESTIONS: Question[] = [
  {
    "id": "revalida-2025-1-1",
    "topography": "2.2",
    "topic": "Arritmias",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos vai a uma unidade de pronto atendimento (UPA) referindo cansaço e tontura ao se levantar há 2 semanas. Nega outras queixas, comorbidades ou cirurgias prévias, assim como o uso de medicamentos. Ao exame físico, apresenta-se corado, hidratado, lúcido e orientado em tempo e espaço; pressão arterial de 120 x 70 mmHg; frequência cardíaca de 45 bpm; saturação de O₂ de 96% em ar ambiente; ritmo cardíaco regular, sem turgência jugular; murmúrio vesicular fisiológico, sem ruídos acessórios; e enchimento capilar de 2 segundos. Diante disso, o médico solicita um eletrocardiograma de 12 derivações:\n\nA partir desse quadro clínico e da interpretação do eletrocardiograma, a conduta adequada consiste em",
    "options": [
      "(A) conceder alta médica e encaminhar o paciente ao ambulatório especializado de cardiologia.",
      "(B) monitorizar o paciente, solicitar marca-passo transcutâneo e aguardar avaliação do cardiologista.",
      "(C) monitorizar o paciente, administrar atropina 1 mg (IV) e implantar marca-passo transcutâneo.",
      "(D) monitorizar o paciente, administrar atropina 1 mg (IV) e iniciar uso de dopamina 5 mcg/kg/min."
    ],
    "correctAnswer": 1,
    "explanation": "O ECG mostra ondas P regulares que não têm relação com os complexos QRS (dissociação atrioventricular), com escape de QRS estreito e FC de 45 bpm: bloqueio atrioventricular total. O paciente tem sintomas leves (cansaço, tontura postural), mas está estável (PA normal, lúcido, boa perfusão).\n\nBloqueio de alto grau é indicação de marca-passo definitivo. Enquanto isso, o paciente deve ficar monitorizado, com marca-passo transcutâneo disponível (pás posicionadas) para uso se instabilizar, aguardando o cardiologista.",
    "commentary": "Alta e ambulatório (A): BAV total é risco de assistolia e síncope; não se dá alta.\n\nAtropina e marca-passo transcutâneo (C) / atropina e dopamina (D): são medidas para bradicardia com instabilidade (hipotensão, choque, alteração de consciência, dor torácica, congestão). Além disso, a atropina costuma falhar em bloqueios infranodais.",
    "reference": "Diretriz de Arritmias Cardíacas da SBC / ACLS — Algoritmo de bradicardia",
    "tags": [
      "cardiologia",
      "bloqueio atrioventricular",
      "bradicardia",
      "marca-passo"
    ],
    "image": "/images/revalida2025-1-1.webp",
    "tip": "Bradicardia estável: monitora, deixa as pás prontas e chama o cardiologista. Atropina só para quem está instável."
  },
  {
    "id": "revalida-2025-1-2",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem de 42 anos, em uso crônico de anti-inflamatório não esteroide por doença reumática, dá entrada no pronto-socorro com 6 horas de evolução de dor epigástrica de forte intensidade. Sinais vitais:\n\n• Frequência cardíaca: 110 bpm\n• Pressão arterial: 90 x 50 mmHg\n• Frequência respiratória: 22 irpm\n• Temperatura axilar: 36,5 ºC\n\nAo exame físico, abdome tenso, com descompressão brusca dolorosa nos quatro quadrantes. O hemograma apresenta valores dentro da normalidade e a tomografia de abdome evidencia líquido livre intraperitoneal com ar no recesso hepatofrênico. Nesse caso, assinale a alternativa que apresenta a principal hipótese diagnóstica.",
    "options": [
      "(A) Úlcera gástrica perfurada.",
      "(B) Pancreatite aguda.",
      "(C) Colecistite aguda.",
      "(D) Diverticulite aguda."
    ],
    "correctAnswer": 0,
    "explanation": "Uso crônico de AINE, dor epigástrica súbita e intensa, peritonite difusa (abdome tenso, descompressão dolorosa nos quatro quadrantes), sinais de choque e pneumoperitônio na tomografia (ar sob o diafragma/recesso hepatofrênico). O quadro é de úlcera péptica perfurada, cujo tratamento é cirúrgico de urgência.",
    "commentary": "Pancreatite aguda (B): não produz pneumoperitônio.\n\nColecistite aguda (C): dor no hipocôndrio direito com sinal de Murphy, sem ar livre.\n\nDiverticulite aguda (D): dor na fossa ilíaca esquerda em idosos; quando perfura, o contexto é outro e não há relação com AINE e dor epigástrica.",
    "reference": "Sabiston Tratado de Cirurgia — Úlcera péptica complicada",
    "tags": [
      "cirurgia geral",
      "abdome agudo perfurativo",
      "úlcera péptica",
      "pneumoperitônio"
    ],
    "tip": "AINE + dor epigástrica súbita + ar livre = úlcera perfurada."
  },
  {
    "id": "revalida-2025-1-3",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Menina de 7 anos e 6 meses é encaminhada ao ambulatório de pediatria porque sua família percebeu surgimento de broto mamário há cerca de 3 meses. O exame físico revela que seu estadiamento puberal é M2P1 e sua estatura está próxima ao escore Z +2 para a idade, com peso em escore Z 0. Um exame de radiografia simples de punho, solicitado pelo médico da atenção primária, mostra idade óssea compatível com 9 anos e 6 meses. Considerando essa situação, assinale a alternativa que apresenta a principal hipótese diagnóstica, seguida de sua justificativa.",
    "options": [
      "(A) Puberdade precoce central, pois o crescimento das mamas está associado a avanço da idade óssea.",
      "(B) Telarca isolada precoce, pois a diferença entre a idade óssea e a idade cronológica não é significativa.",
      "(C) Telarca isolada precoce, pois o crescimento das mamas foi um achado isolado na investigação da paciente.",
      "(D) Puberdade precoce central, pois, além da telarca, há também sinais de pubarca, o que sugere ativação do eixo hormonal."
    ],
    "correctAnswer": 0,
    "explanation": "Telarca aos 7 anos e 6 meses (antes dos 8 anos) com estatura acelerada (escore Z +2 com peso em Z 0) e idade óssea 2 anos à frente da idade cronológica. O avanço de idade óssea e a aceleração do crescimento indicam ação estrogênica sustentada: puberdade precoce central. O próximo passo é dosar LH (basal ou após estímulo com GnRH) e fazer ressonância de sela.",
    "commentary": "Telarca isolada (B e C): é típica de meninas menores de 2–3 anos, sem aceleração do crescimento e com idade óssea compatível com a idade; aqui a diferença de 2 anos é significativa.\n\nPubarca (D): a paciente é P1, ou seja, não tem pelos pubianos.",
    "reference": "Sociedade Brasileira de Pediatria / SBEM — Puberdade precoce",
    "tags": [
      "pediatria",
      "endocrinologia pediátrica",
      "puberdade precoce",
      "idade óssea"
    ],
    "tip": "Puberdade precoce: telarca antes dos 8 anos (meninas) ou testículos ≥ 4 mL antes dos 9 (meninos)."
  },
  {
    "id": "revalida-2025-1-4",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 25 anos procura o pronto atendimento de ginecologia e obstetrícia com história de atraso menstrual e resultado de beta-hCG quantitativo de 10.000 mlU/mL realizado há 2 dias. Não se recorda da data da última menstruação. Queixa-se de sangramento vaginal, em pequena quantidade, que já dura 3 dias. Ao exame especular, nota-se presença de sangramento vivo em pequena quantidade e, ao toque, percebe-se colo uterino fechado. Solicitado beta-hCG no dia da consulta, com resultado de 23.400 mlU/mL. A partir desses dados, assinale a alternativa que apresenta, respectivamente, o diagnóstico desse caso e a conduta adequada.",
    "options": [
      "(A) Gestação ectópica; laparotomia.",
      "(B) Ameaça de aborto; repouso relativo.",
      "(C) Aborto incompleto; curetagem uterina.",
      "(D) Aborto em evolução; acompanhamento clínico."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento pequeno, colo fechado e beta-hCG que mais que dobrou em 48 horas (10.000 → 23.400 mUI/mL), o que indica gestação viável em evolução. O diagnóstico é ameaça de aborto, com conduta expectante (repouso relativo, analgesia se necessário) e ultrassonografia transvaginal para confirmar a localização e a vitalidade.",
    "commentary": "Gestação ectópica (A): costuma ter aumento insuficiente do beta-hCG; além disso, a conduta não seria laparotomia sem instabilidade.\n\nAborto incompleto (C): o colo estaria aberto, com eliminação parcial de restos.\n\nAborto em evolução (D): o colo estaria pérvio, com sangramento e cólicas intensos.",
    "reference": "Febrasgo / Ministério da Saúde — Atenção humanizada ao abortamento",
    "tags": [
      "obstetrícia",
      "sangramento na primeira metade da gestação",
      "ameaça de aborto",
      "beta-hCG"
    ],
    "tip": "Colo fechado + beta-hCG dobrando em 48 h = ameaça de aborto."
  },
  {
    "id": "revalida-2025-1-5",
    "topography": "7.2",
    "topic": "Escabiose",
    "module": "Saúde Coletiva",
    "text": "A médica de uma penitenciária avalia homem de 26 anos, com 98 kg, que relata compartilhar a cela com 12 pessoas (a qual comportaria no máximo 5). O paciente queixa-se de prurido cutâneo há 2 dias com piora no período noturno. Ao exame físico, a médica identifica pápulas eritematosas com escoriações em região de prega em braços e em região posterior de\n\njoelhos. Com relação a essa situação, assinale a alternativa que apresenta, respectivamente, a orientação médica e a prescrição medicamentosa adequadas.",
    "options": [
      "(A) Restrição de visitas aos detentos e isolamento dos casos nas celas, sem permissão de saída; uso de ivermectina 6 mg, 01 comprimido via oral, repetindo em 15 dias, para todos da cela.",
      "(B) Isolamento dos casos na enfermaria da unidade e lavagem frequente das roupas de cama, de banho e de vestuário com água quente (pelo menos a 30 °C); uso de sprays inseticidas e fumigantes.",
      "(C) Realização de palestras educativas para os detentos sobre medidas preventivas e aumento do tempo de banho de sol; uso de fluconazol 150 mg por semana durante 1 mês, para todos da cela.",
      "(D) Incremento da frequência de limpeza geral da unidade e higienização adequada das roupas de uso pessoal, de cama e de banho; uso de ivermectina 6 mg, dose conforme o peso, repetindo em 15 dias, para todos da cela."
    ],
    "correctAnswer": 3,
    "explanation": "Prurido noturno com pápulas escoriadas em dobras, em ambiente superlotado: escabiose. O tratamento é coletivo (todos os contatos ao mesmo tempo): ivermectina oral em dose ajustada ao peso (200 mcg/kg; para 98 kg, cerca de 3 comprimidos de 6 mg), repetida em 7–14 dias, junto com limpeza do ambiente e lavagem de roupas de uso pessoal, cama e banho.",
    "commentary": "Restrição de visitas e isolamento sem saída (A): medida desproporcional e que fere direitos; e a ivermectina deve ser dada conforme o peso, não 1 comprimido fixo.\n\nInseticidas e fumigantes (B): o ácaro não sobrevive muito fora da pele; fumigação não é recomendada e o tratamento dos doentes falta.\n\nFluconazol (C): é antifúngico, sem ação na escabiose.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde / Atenção à saúde da população privada de liberdade (PNAISP)",
    "tags": [
      "dermatologia",
      "escabiose",
      "ivermectina",
      "população privada de liberdade"
    ],
    "tip": "Escabiose: trata todos os contatos ao mesmo tempo e repete a dose."
  },
  {
    "id": "revalida-2025-1-6",
    "topography": "3.1",
    "topic": "Gastrite",
    "module": "Clínica Médica",
    "text": "Mulher de 38 anos, com deficiência congênita de IgA, é atendida em ambulatório de clínica médica devido a insucesso terapêutico no tratamento de infecção por Helicobacter pylori. Apresentava diagnóstico de úlcera duodenal, tendo sido prescrito omeprazol, amoxicilina e claritromicina. Apesar da melhora clínica, observou-se persistência da infecção em teste respiratório com C13. Atribuiu-se o insucesso terapêutico ao uso recorrente de macrolídeos e fluoroquinolonas. Nesse caso, deve-se prescrever",
    "options": [
      "(A) pantoprazol, amoxicilina e levofloxacino por 7 dias.",
      "(B) omeprazol, claritromicina e levofloxacino por 14 dias.",
      "(C) omeprazol, subcitrato de bismuto coloidal, doxiciclina e metronidazol por 14 dias.",
      "(D) pantoprazol, subcitrato de bismuto coloidal, furazolidona e levofloxacino por 10 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Falha do esquema com claritromicina em paciente que já usou macrolídeos e fluoroquinolonas: há alto risco de resistência a ambos, o que exclui esquemas com claritromicina ou levofloxacino. Indica-se a quadrupla terapia com bismuto por 14 dias: IBP, subcitrato de bismuto, tetraciclina (ou doxiciclina, quando a tetraciclina não está disponível) e metronidazol.",
    "commentary": "Pantoprazol, amoxicilina e levofloxacino (A): contém fluoroquinolona, à qual há provável resistência, e a duração de 7 dias é curta.\n\nClaritromicina e levofloxacino (B): repete os dois grupos provavelmente resistentes.\n\nFurazolidona e levofloxacino (D): mantém a fluoroquinolona.",
    "reference": "VI Consenso Brasileiro sobre Infecção por Helicobacter pylori (FBG) / Maastricht VI",
    "tags": [
      "gastroenterologia",
      "helicobacter pylori",
      "terapia quádrupla",
      "bismuto"
    ],
    "tip": "Falhou com claritromicina e já usou quinolona: quádrupla com bismuto por 14 dias."
  },
  {
    "id": "revalida-2025-1-7",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 28 anos foi admitido em hospital após 30 minutos de acidente motociclístico. Apresentava múltiplas e graves lesões em face, mandíbula e cavidade oral, sem lesões cervicais. Exame físico do tórax e do abdome e ultrassonografia focada no abdome no trauma (FAST) sem alterações. Sinais vitais: frequência cardíaca 92 bpm; pressão arterial 130 x 80 mmHg; saturação periférica de oxigênio 100% em ar ambiente. O paciente evoluiu rapidamente com dispneia, taquipneia, estridor inspiratório e expiratório, cornagem e rebaixamento do nível de consciência. Saturação periférica de oxigênio passou para 88%, mesmo com a oferta de oxigênio suplementar. Após alguns minutos, evoluiu com saturação periférica de oxigênio de 59% e frequência cardíaca de 48 bpm. Nesse momento, qual é a conduta imediata adequada para esse paciente?",
    "options": [
      "(A) Traqueostomia.",
      "(B) Cricotireoidotomia.",
      "(C) Intubação orotraqueal.",
      "(D) Intubação nasotraqueal."
    ],
    "correctAnswer": 1,
    "explanation": "Trauma de face com evolução rápida para obstrução de via aérea (estridor, cornagem, queda da saturação, bradicardia): é preciso via aérea definitiva imediata. Com lesões de face, mandíbula e cavidade oral, a intubação orotraqueal fica impossível ou muito arriscada, e o paciente está periparada. A via cirúrgica de emergência indicada é a cricotireoidotomia, mais rápida e simples que a traqueostomia.",
    "commentary": "Traqueostomia (A): é mais demorada e difícil; não é a via de emergência.\n\nIntubação orotraqueal (C): as lesões de face e cavidade oral tornam a visualização e a passagem do tubo improváveis com o paciente em hipóxia grave.\n\nIntubação nasotraqueal (D): contraindicada em traumas de face (risco de fratura de base de crânio) e em apneia.",
    "reference": "ATLS 10ª ed. — Via aérea e ventilação",
    "tags": [
      "trauma",
      "via aérea",
      "cricotireoidotomia",
      "trauma de face"
    ],
    "tip": "Não intuba, não ventila em trauma de face: cricotireoidotomia."
  },
  {
    "id": "revalida-2025-1-8",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Adolescente de 12 anos é levado à unidade de pronto atendimento (UPA) devido a um quadro de dor abdominal iniciada há 1 dia. A dor era mais difusa inicialmente, mas, após algumas horas de evolução, passou a concentrar-se na fossa ilíaca direita, tornando-se mais intensa. Além disso, o jovem apresentou vômitos de conteúdo bilioso e inapetência. Ao exame físico abdominal, apresenta defesa à palpação e descompressão brusca dolorosa. A partir desse caso, assinale a alternativa que apresenta indicação para que este adolescente seja avaliado por uma equipe cirúrgica.",
    "options": [
      "(A) Dor abdominal difusa.",
      "(B) Descompressão brusca dolorosa.",
      "(C) Dor abdominal associada a vômitos.",
      "(D) Massa palpável em fossa ilíaca direita."
    ],
    "correctAnswer": 1,
    "explanation": "Dor que começa difusa e migra para a fossa ilíaca direita, com vômitos e inapetência: apendicite aguda. A descompressão brusca dolorosa (sinal de Blumberg) indica irritação peritoneal, sinal de abdome agudo cirúrgico que exige avaliação da equipe cirúrgica.",
    "commentary": "Dor abdominal difusa (A) e dor com vômitos (C): são inespecíficas, presentes em gastroenterites e outras causas clínicas.\n\nMassa em fossa ilíaca direita (D): não é descrita no caso; quando presente, sugere plastrão ou abscesso, mas não é o achado que motiva a avaliação aqui.",
    "reference": "Sabiston Tratado de Cirurgia — Apendicite / Escore de Alvarado",
    "tags": [
      "cirurgia geral",
      "apendicite aguda",
      "peritonite",
      "cirurgia pediátrica"
    ],
    "tip": "Irritação peritoneal (Blumberg) = chama o cirurgião."
  },
  {
    "id": "revalida-2025-1-9",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 39 anos, G4P3, 12 semanas de gestação, comparece à primeira consulta de pré-natal na atenção primária. A paciente é hipertensa crônica há 2 anos, faz uso de losartana e apresenta índice de massa corporal (IMC) de 35 kg/m², encontra-se assintomática. Considerando esse contexto, assinale a conduta inicial e a avaliação a ser realizada.",
    "options": [
      "(A) Suspender losartana e iniciar metildopa e AAS; realizar pesquisa de lesão de órgãos-alvo.",
      "(B) Manter losartana e iniciar AAS; solicitar exames para avaliar a função hepática.",
      "(C) Suspender losartana; indicar avaliação cardiológica detalhada.",
      "(D) Manter losartana; realizar pesquisa de hipertensão secundária."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante hipertensa crônica usando losartana: os bloqueadores do receptor de angiotensina (e os IECA) são contraindicados na gestação pelo risco de fetotoxicidade (oligoidrâmnio, insuficiência renal fetal). Deve-se trocar por anti-hipertensivo seguro, como metildopa (ou nifedipina). Ela tem alto risco de pré-eclâmpsia (hipertensão crônica, obesidade, 39 anos), então deve iniciar AAS 100–150 mg à noite entre 12 e 16 semanas, além de cálcio. Na primeira consulta, avaliam-se lesões de órgãos-alvo (função renal, proteinúria, ECG, fundo de olho).",
    "commentary": "Manter losartana (B e D): é contraindicada na gravidez.\n\nSuspender sem substituir (C): a paciente ficaria sem tratamento; e não há indicação de avaliação cardiológica detalhada de rotina sem sintomas.",
    "reference": "Ministério da Saúde — Manual de gestação de alto risco (2022) / Febrasgo — Hipertensão na gestação",
    "tags": [
      "obstetrícia",
      "hipertensão crônica na gestação",
      "pré-eclâmpsia",
      "AAS"
    ],
    "tip": "Gestante: IECA e BRA estão proibidos. AAS para quem tem alto risco de pré-eclâmpsia."
  },
  {
    "id": "revalida-2025-1-10",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Mulher de 34 anos, com 4 filhos, desempregada, comparece a uma unidade básica de saúde (UBS) com queixa de atraso menstrual de um mês. Durante a consulta, a paciente relata que está muito aflita, por ter realizado um teste de gravidez cujo resultado foi positivo. Afirma que compareceu à consulta porque não deseja essa gravidez. Quando questionada, a paciente nega qualquer situação de violência sexual. Nesse caso, além de acolher e acalmar a paciente, a melhor abordagem a ser realizada pelo médico deve ser",
    "options": [
      "(A) iniciar o pré-natal regular, mencionando a possibilidade de entrega voluntária da criança para adoção após seu nascimento.",
      "(B) desencorajar a realização de um aborto, apesar da paciente ter direito, enfatizando os riscos à saúde advindos do procedimento de abortamento, como hemorragia, infecção, perfuração uterina, infertilidade e morte.",
      "(C) assegurar o direito às informações clínicas e legais adequadas, garantir o sigilo e informar sobre sintomas que justifiquem a busca de atendimento médico em caso de realização de um aborto inseguro.",
      "(D) questionar abertamente sobre a intenção de abortar, sem julgamento, e informá-la que tem obrigação ética de fazer um boletim de ocorrência caso o aborto venha a ser realizado."
    ],
    "correctAnswer": 2,
    "explanation": "A paciente não deseja a gestação e não há situação legal de aborto (não houve estupro, nem risco de vida, nem anencefalia). Mesmo assim, o médico deve acolher sem julgamento, garantir o direito à informação clínica e legal, manter o sigilo e orientar sobre sinais de complicação que exigem procurar atendimento, numa abordagem de redução de danos. O sigilo é dever ético: o médico não comunica à polícia.",
    "commentary": "Pré-natal e adoção (A): ignora o desejo manifestado pela paciente; a entrega para adoção pode ser informada, mas não substitui o acolhimento e a informação.\n\nDesencorajar com riscos (B): é abordagem moralizante e intimidatória.\n\nBoletim de ocorrência (D): o médico não tem essa obrigação; comunicar quebraria o sigilo profissional (Código de Ética Médica, art. 73).",
    "reference": "Código de Ética Médica (CFM) / Ministério da Saúde — Atenção humanizada ao abortamento",
    "tags": [
      "ética médica",
      "sigilo médico",
      "abortamento",
      "redução de danos"
    ],
    "tip": "Sigilo protege a paciente: médico não denuncia aborto."
  },
  {
    "id": "revalida-2025-1-11",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "Mulher de 45 anos vai à unidade básica de saúde (UBS) reportando dificuldade para reduzir o consumo de cigarros. Refere fumar 20 cigarros por dia desde os 20 anos e que já tentou interromper o uso várias vezes. Relata, ainda, irritação e ansiedade quando reduz o consumo de tabaco. Diante desse caso, o plano terapêutico adequado para essa paciente consiste em",
    "options": [
      "(A) reposição de nicotina com redução gradual da dose.",
      "(B) terapia comportamental associada à reposição de nicotina.",
      "(C) terapia comportamental e cessação imediata do tabagismo.",
      "(D) prescrição de benzodiazepínico e redução gradual do número de cigarros diários."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente dependente (20 cigarros/dia, sintomas de abstinência, várias tentativas frustradas). O tratamento com melhor resultado combina abordagem cognitivo-comportamental com farmacoterapia, como a terapia de reposição de nicotina (adesivo associado a goma ou pastilha) ou bupropiona, conforme o protocolo do Ministério da Saúde.",
    "commentary": "Reposição de nicotina isolada (A): é menos eficaz que associada à terapia comportamental.\n\nTerapia comportamental com cessação imediata sem fármaco (C): para dependência moderada a grave, o apoio farmacológico aumenta a chance de sucesso.\n\nBenzodiazepínico (D): não trata a dependência de nicotina e pode causar dependência.",
    "reference": "Ministério da Saúde/INCA — PCDT do Tabagismo (2020)",
    "tags": [
      "pneumologia",
      "tabagismo",
      "terapia de reposição de nicotina",
      "atenção primária"
    ],
    "tip": "Tabagismo: terapia comportamental + fármaco (TRN ou bupropiona)."
  },
  {
    "id": "revalida-2025-1-12",
    "module": "Pediatria",
    "text": "Recém-nascido a termo, do sexo masculino, nascido de parto via vaginal, Apgar 9/10, apresenta salivação excessiva e muco no canto da boca após o nascimento. Durante a amamentação, apresenta regurgitação, cianose, tosse e insuficiência respiratória. Na sala de parto, não foi realizada passagem de sonda pelas narinas, nem pela boca. A ultrassonografia pré-natal evidenciava polidrâmnio. Considerando o caso descrito, assinale a alternativa que apresenta o diagnóstico provável.",
    "options": [
      "(A) Atresia esofágica.",
      "(B) Atresia gástrica.",
      "(C) Atresia intestinal.",
      "(D) Atresia pancreática."
    ],
    "correctAnswer": 0,
    "explanation": "Polidrâmnio no pré-natal, salivação excessiva logo após o nascimento e engasgo, tosse e cianose às mamadas: atresia de esôfago (na maioria, com fístula traqueoesofágica distal). O diagnóstico se confirma pela impossibilidade de passar sonda até o estômago, com radiografia mostrando a sonda enrolada no coto proximal.",
    "commentary": "Atresia gástrica (B): rara; causa vômitos não biliosos, mas não sialorreia nem engasgo à primeira mamada.\n\nAtresia intestinal (C): causa vômitos (biliosos se distal à papila) e distensão, não salivação excessiva.\n\nAtresia pancreática (D): não é uma entidade que cause esse quadro.",
    "reference": "Sociedade Brasileira de Pediatria — Malformações do trato digestivo / Tratado de Pediatria SBP",
    "tags": [
      "neonatologia",
      "atresia de esôfago",
      "polidrâmnio",
      "cirurgia pediátrica"
    ],
    "tip": "Polidrâmnio + baba + engasgo na 1ª mamada = atresia de esôfago."
  },
  {
    "id": "revalida-2025-1-13",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Mulher de 18 anos deu à luz uma criança do sexo feminino, Apgar 9/10, nascida a termo, com peso de nascimento de 3.500 g, comprimento de 50 cm e perímetro cefálico de 35 cm. A criança permaneceu em aleitamento materno exclusivo desde o nascimento. Com 24 horas de vida, o médico constata a perda de 175 g, eliminações presentes, a paciente corada e hidratada. Nesse caso, a perda de peso em relação ao peso do nascimento é de",
    "options": [
      "(A) 5%, o que não é motivo de preocupação.",
      "(B) 15%, devendo receber complemento com fórmula.",
      "(C) 15%, sendo necessária observação clínica rigorosa.",
      "(D) 5%, mas não deveria estar acontecendo nesse momento."
    ],
    "correctAnswer": 0,
    "explanation": "Perda de 175 g sobre 3.500 g = 5%. A perda fisiológica do recém-nascido a termo é de até 7–10% do peso de nascimento na primeira semana, com recuperação até 10–14 dias. Com bebê corado, hidratado e eliminações presentes, não há motivo de preocupação: manter aleitamento exclusivo em livre demanda.",
    "commentary": "15% (B e C): o cálculo está errado (175/3.500 = 5%).\n\nNão deveria estar acontecendo (D): a perda nos primeiros dias é esperada.",
    "reference": "Ministério da Saúde — Atenção à saúde do recém-nascido / SBP",
    "tags": [
      "neonatologia",
      "perda de peso fisiológica",
      "aleitamento materno"
    ],
    "tip": "Perda fisiológica: até 10% na 1ª semana; recupera até 10–14 dias."
  },
  {
    "id": "revalida-2025-1-14",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 49 anos procura atendimento médico relatando que, há 1 mês, não consegue dormir adequadamente por causa de intensas ondas de calor, o que a deixa cansada, irritada e deprimida. Relata dispareunia de penetração e vagina seca. Fez histerectomia e salpingooforectomia bilateral há 3 meses e exame anatomopatológico revelou: adenomiose, hidrossalpinge em ambas as tubas uterinas, cistos de endometriose em ovário direito e focos de endometriose no peritônio. Nega comorbidades. Nesse caso, a conduta mais indicada é",
    "options": [
      "(A) fitoterápicos, pelo histórico de adenomiose e endometriose.",
      "(B) antidepressivos tricíclicos, já que a hormonioterapia é contraindicada.",
      "(C) estrogenioterapia exclusiva, uma vez que a paciente passou por histerectomia.",
      "(D) tratamento hormonal estro-progestativo, considerando que a paciente apresentou quadro de endometriose."
    ],
    "correctAnswer": 3,
    "explanation": "Menopausa cirúrgica aos 49 anos com sintomas vasomotores intensos e síndrome geniturinária: há indicação de terapia hormonal. Apesar da histerectomia (que permitiria estrogênio isolado), a paciente teve endometriose extensa (ovário e peritônio). Nessas pacientes recomenda-se associar progestagênio ao estrogênio, para evitar reativação de focos residuais e o risco de transformação maligna estimulada pelo estrogênio sem oposição.",
    "commentary": "Fitoterápicos (A): têm eficácia limitada e a endometriose não contraindica terapia hormonal.\n\nTricíclicos (B): a terapia hormonal não é contraindicada; antidepressivos para fogachos são ISRS/IRSN, não tricíclicos.\n\nEstrogênio isolado (C): seria a regra após histerectomia, mas não na história de endometriose.",
    "reference": "Febrasgo — Consenso de terapêutica hormonal da menopausa / ESHRE — Endometriose",
    "tags": [
      "ginecologia",
      "climatério",
      "terapia hormonal da menopausa",
      "endometriose"
    ],
    "tip": "Histerectomizada com endometriose: estrogênio + progestagênio."
  },
  {
    "id": "revalida-2025-1-15",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Saúde Coletiva",
    "text": "Menina de 6 anos é paciente do mesmo médico na unidade básica de saúde (UBS) desde que nasceu. Sempre foi uma criança alegre, saudável e sociável. Na última consulta, há cerca de 15 dias, o pai a trouxe porque ela estava com “dor de barriga”, mas a paciente permaneceu encolhida e calada todo o tempo, quase não deixando o médico examiná-la. Há 2 dias, a professora da criança procurou a equipe preocupada com a mudança de comportamento da criança. Relatou que foi informada sobre a existência de fotos íntimas da criança numa rede social. A mãe, quando chamada, relatou que está trabalhando e a criança tem ficado com o pai na maior parte do tempo. Nessa situação, além da avaliação clínica, o médico deve",
    "options": [
      "(A) registrar, em prontuário, dados clínicos de forma isenta de interpretações pessoais; notificar violência no SINAN e contatar os equipamentos sociais e conselho tutelar para o seguimento do caso juntamente com a equipe.",
      "(B) encaminhar a criança à perícia médica mais próxima da unidade, onde será realizado exame físico mais detalhado e coleta de vestígios da violência; confirmar a violência antes da notificação no SINAN e contatar o conselho tutelar.",
      "(C) confrontar os dados relatados pela professora com os pais, questionando-os sobre a denúncia e demonstrando preocupação; orientar as medidas de apoio à criança e à família.",
      "(D) anotar, em prontuário, os dados da história com suspeita de abuso e denunciar o caso na delegacia mais próxima; encaminhar a criança para um serviço de proteção social local."
    ],
    "correctAnswer": 0,
    "explanation": "Há suspeita de violência sexual contra a criança (mudança de comportamento, fotos íntimas em rede social, convivência com o pai). O médico deve registrar os dados de forma objetiva no prontuário, notificar no SINAN (a notificação é obrigatória já na suspeita, sem precisar confirmar) e comunicar o Conselho Tutelar, articulando a rede de proteção junto com a equipe.",
    "commentary": "Confirmar antes de notificar (B): a notificação é feita diante da suspeita; a perícia é etapa posterior, conduzida pela rede.\n\nConfrontar os pais (C): pode expor a criança a mais risco e atrapalhar a proteção.\n\nDenunciar na delegacia (D): a comunicação obrigatória é ao Conselho Tutelar (ECA, art. 13) e a notificação ao SINAN.",
    "reference": "ECA (Lei 8.069/1990) / Ministério da Saúde — Notificação de violências interpessoais",
    "tags": [
      "pediatria",
      "violência sexual",
      "notificação compulsória",
      "conselho tutelar"
    ],
    "tip": "Suspeita de violência contra criança: notifica (SINAN) e avisa o Conselho Tutelar."
  },
  {
    "id": "revalida-2025-1-16",
    "topography": "13",
    "topic": "Abstinência alcoólica",
    "module": "Clínica Médica",
    "text": "Homem de 44 anos é levado à sala de emergência do pronto-socorro apresentando agitação intensa, confusão mental, tremores generalizados e sudorese profusa. Ao exame físico verifica-se frequência cardíaca de 110 bpm e pressão arterial (PA) de 150 x 110 mmHg. O paciente é etilista crônico, sem antecedentes patológicos e seus familiares relatam que ele interrompeu o consumo de álcool há 48 horas. Com base nessas informações, assinale a\n\nalternativa que apresenta, respectivamente, o diagnóstico correto e a conduta inicial para esse paciente.",
    "options": [
      "(A) Delirium tremens; administração de antipsicóticos, como haloperidol.",
      "(B) Delirium tremens; administração intravenosa de benzodiazepínicos, como diazepam.",
      "(C) Encefalopatia hipertensiva; restrição de líquidos e monitoramento estrito da função renal.",
      "(D) Encefalopatia hipertensiva; administração de nitroprussiato de sódio para redução da PA média entre 20 e 25% nas primeiras 2 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Etilista que parou de beber há 48 horas e apresenta agitação, confusão mental, tremores, sudorese, taquicardia e hipertensão: delirium tremens (forma grave da abstinência, geralmente 48–96 h após a última dose). O tratamento é benzodiazepínico intravenoso (diazepam) titulado até sedação leve, além de tiamina antes da glicose, hidratação e correção de eletrólitos.",
    "commentary": "Haloperidol isolado (A): não trata a abstinência e reduz o limiar convulsivo; é só adjuvante.\n\nEncefalopatia hipertensiva (C e D): a hipertensão aqui é secundária à hiperatividade autonômica da abstinência; o contexto clínico aponta para delirium tremens.",
    "reference": "Associação Brasileira de Psiquiatria — Abstinência alcoólica / Diretriz CIWA-Ar",
    "tags": [
      "psiquiatria",
      "delirium tremens",
      "abstinência alcoólica",
      "benzodiazepínicos"
    ],
    "tip": "Abstinência grave: benzodiazepínico (+ tiamina antes da glicose)."
  },
  {
    "id": "revalida-2025-1-17",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Homem de 39 anos, sem comorbidades e em bom estado de saúde, encontra-se em preparação pré-operatória eletiva de colecistectomia que será realizada por via laparoscópica. Durante consulta com o médico que o acompanha, o paciente manifesta preocupação sobre o que pode ingerir e por quanto tempo deve permanecer em jejum antes do procedimento. Nesse caso, o médico deve orientar o paciente a fazer, antes da anestesia, jejum de alimentos sólidos por",
    "options": [
      "(A) 12 horas e de líquidos por 8 horas.",
      "(B) 6 a 8 horas e de líquidos claros por 2 horas.",
      "(C) 4 a 6 horas e de bebida proteica por 1 hora.",
      "(D) 10 horas e de pequenos volumes de água por 4 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas recomendações atuais (ASA, ERAS e projeto ACERTO), adultos saudáveis fazem jejum de 6 a 8 horas para sólidos (6 h para refeição leve, 8 h para refeição gordurosa) e de 2 horas para líquidos claros, inclusive bebida com carboidrato, que reduz a resistência à insulina e o desconforto.",
    "commentary": "12 h de sólidos e 8 h de líquidos (A): jejum prolongado e desnecessário, que aumenta o catabolismo.\n\nBebida proteica em 1 hora (C): bebida com proteína não é líquido claro.\n\nÁgua em pequenos volumes até 4 h (D): os líquidos claros são liberados até 2 horas antes.",
    "reference": "ASA — Diretriz de jejum pré-operatório (2023) / Projeto ACERTO",
    "tags": [
      "cirurgia geral",
      "pré-operatório",
      "jejum",
      "ERAS"
    ],
    "tip": "Jejum: 6–8 h sólidos; 2 h líquidos claros."
  },
  {
    "id": "revalida-2025-1-18",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Lactente saudável de 40 dias, que atualmente vive em uma unidade de acolhimento, é atendido em uma unidade básica de saúde (UBS) em sua primeira consulta desde o nascimento. Sua cuidadora informa que não foi realizado teste do pezinho. A respeito da indicação de coleta do teste do pezinho, assinale a alternativa correta.",
    "options": [
      "(A) O teste do pezinho pode ser coletado somente até o 28º dia de vida; dessa forma, a coleta não poderá ser realizada nesse lactente.",
      "(B) O teste do pezinho pode ser coletado apenas entre o 3º e o 5º dia de vida do bebê; dessa forma, a coleta não poderá ser realizada nesse lactente.",
      "(C) A coleta do teste do pezinho deveria ter sido realizada na maternidade, logo nas primeiras 48 horas de vida do bebê, o que evitaria a situação atual.",
      "(D) A coleta do teste do pezinho após o 28º dia de vida é uma condição de exceção, podendo ser realizada em caso de difícil acesso ao serviço ou de negligência."
    ],
    "correctAnswer": 3,
    "explanation": "O ideal é coletar o teste do pezinho entre o 3º e o 5º dia de vida. Fora dessa janela, a coleta ainda deve ser feita: a coleta depois de 28 dias é uma situação de exceção, aceita em casos como dificuldade de acesso, internação ou negligência, para não deixar de rastrear doenças tratáveis (hipotireoidismo congênito, fenilcetonúria, anemia falciforme etc.).",
    "commentary": "Somente até 28 dias (A) / só entre o 3º e 5º dia (B): após esse período o exame ainda deve ser coletado.\n\nNas primeiras 48 horas (C): coletar antes de 48 h de alimentação aumenta falsos negativos (ex.: fenilcetonúria).",
    "reference": "Ministério da Saúde — Programa Nacional de Triagem Neonatal: Manual técnico",
    "tags": [
      "neonatologia",
      "triagem neonatal",
      "teste do pezinho"
    ],
    "tip": "Teste do pezinho: ideal do 3º ao 5º dia, mas colete sempre que não foi feito."
  },
  {
    "id": "revalida-2025-1-19",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 25 anos é atendida em uma maternidade no primeiro estágio da fase ativa de trabalho de parto. Seu pré-natal foi de risco habitual e ela está com 40 semanas de gestação.\n\nDurante a ausculta intermitente, é detectada uma frequência cardíaca fetal mantida de 100 bpm. Diante disso, é realizada cardiotocografia, que mostra parâmetros normais, exceto a linha de base em torno de 102 bpm por um período de 10 minutos. A paciente não apresenta outros sinais ou sintomas de complicações, e o restante do exame físico está dentro dos parâmetros esperados para a fase ativa do trabalho de parto. Diante desse quadro clínico, a conduta adequada é",
    "options": [
      "(A) encaminhar a paciente para cesariana por se tratar de sofrimento fetal agudo.",
      "(B) administrar ocitocina e acelerar a ultimação do parto por se tratar de sofrimento fetal agudo.",
      "(C) iniciar tocolíticos para reduzir a atividade uterina e aguardar melhora espontânea da frequência cardíaca fetal.",
      "(D) administrar oxigênio e mudar a posição da gestante, reavaliando a frequência cardíaca fetal após alguns minutos."
    ],
    "correctAnswer": 3,
    "explanation": "Bradicardia fetal isolada com linha de base em torno de 100–110 bpm e o restante da cardiotocografia normal (variabilidade e sem desacelerações) não caracteriza sofrimento fetal agudo. A conduta é com medidas de reanimação intrauterina — mudar a posição materna (decúbito lateral), avaliar hipotensão e excesso de contrações, hidratação — e reavaliar a frequência cardíaca fetal.",
    "commentary": "Cesariana (A) e acelerar o parto com ocitocina (B): não há sofrimento fetal; ocitocina pode até piorar a oxigenação fetal.\n\nTocolíticos (C): só se houver taquissistolia; não há indicação.",
    "reference": "Ministério da Saúde — Diretriz nacional de assistência ao parto normal / Febrasgo — Cardiotocografia",
    "tags": [
      "obstetrícia",
      "cardiotocografia",
      "vitalidade fetal",
      "trabalho de parto"
    ],
    "tip": "Alteração isolada da CTG: reposiciona, hidrata e reavalia antes de operar."
  },
  {
    "id": "revalida-2025-1-20",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Saúde Coletiva",
    "text": "Um casal consulta com o médico de família e comunidade devido à preocupação da esposa com marido, que tem demonstrado compulsividade relacionada ao consumo de pornografia. Isso tem gerado discussões constantes entre eles, pois o homem é motorista por aplicativo e está deixando de trabalhar devido a este padrão de comportamento — o que tem impactado na situação financeira da família, que já é difícil. Ele relata que a prática começou como distração e alívio do estresse, mas admite que tem dificuldades para controlar esses comportamentos e reconhece as consequências que isso tem gerado para seu contexto familiar. Durante a consulta, o médico identifica sinais de baixa autoestima e de ansiedade nesse paciente. Diante desse relato, qual é o grau de motivação do paciente para a mudança de comportamento?",
    "options": [
      "(A) Ação, visto que já planeja e cria condições para que uma mudança comportamental ocorra.",
      "(B) Contemplação, visto que admite o problema e é ambivalente em relação ao seu comportamento.",
      "(C) Pré-contemplação, visto que reconhece o impacto do vício em seu relacionamento e em sua família.",
      "(D) Preparação, visto que sua percepção sobre os efeitos do vício ainda é limitada, sem possibilidade de mudança."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo modelo transteórico (Prochaska e DiClemente), o paciente reconhece o problema e suas consequências, mas ainda não tem plano de mudança e mantém o comportamento: está na fase de contemplação, marcada pela ambivalência. A entrevista motivacional ajuda a avançar para a preparação.",
    "commentary": "Ação (A): exigiria mudanças em curso.\n\nPré-contemplação (C): o paciente não reconheceria o problema.\n\nPreparação (D): haveria intenção e planejamento próximos de mudança; a justificativa dada também está errada.",
    "reference": "Prochaska e DiClemente — Modelo transteórico / Ministério da Saúde — Cadernos de Atenção Básica",
    "tags": [
      "psiquiatria",
      "entrevista motivacional",
      "modelo transteórico",
      "atenção primária"
    ],
    "tip": "Reconhece o problema mas não age = contemplação."
  },
  {
    "id": "revalida-2025-1-21",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 55 anos procura atendimento em unidade básica de saúde (UBS) para renovar prescrição de losartana. Durante a consulta, relata dispneia aos esforços físicos moderados. Além disso, refere tosse pouco produtiva há alguns anos, o que atribui ao uso de 20 cigarros por dia há 20 anos. Radiografia do tórax revela alargamento dos espaços intercostais, sem outras alterações. Espirometria apresenta os seguintes resultados:\n\n• VEF1: 1,72 L antes e 1,73 L após broncodilatador (previsto: 3,65 L)\n• CVF: 3,13 L antes e 3,14 L após broncodilatador (previsto: 4,66 L)\n• VEF1/CVF: 0,55 antes e 0,55 após broncodilatador (previsto: 0,79)\n\nDiante dos achados, define-se doença pulmonar obstrutiva crônica. Nesse caso, de acordo com os critérios GOLD, a doença do paciente pode ser funcionalmente classificada em",
    "options": [
      "(A) estágio 1.",
      "(B) estágio 2.",
      "(C) estágio 3.",
      "(D) estágio 4."
    ],
    "correctAnswer": 2,
    "explanation": "Espirometria com VEF1/CVF pós-broncodilatador de 0,55 (< 0,70), confirmando obstrução persistente. O VEF1 pós-BD é 1,73 L para previsto de 3,65 L, cerca de 47% do previsto. Pela classificação GOLD da gravidade da obstrução: GOLD 1 ≥ 80%; GOLD 2 de 50 a 79%; GOLD 3 de 30 a 49%; GOLD 4 < 30%. Portanto, GOLD 3 (grave).",
    "commentary": "Estágio 1 (A) e 2 (B): exigiriam VEF1 ≥ 80% e ≥ 50%, respectivamente.\n\nEstágio 4 (D): VEF1 < 30% do previsto.",
    "reference": "GOLD 2024 / SBPT — Diretrizes de DPOC",
    "tags": [
      "pneumologia",
      "DPOC",
      "espirometria",
      "classificação GOLD"
    ],
    "tip": "GOLD pelo VEF1 pós-BD: ≥80 / 50–79 / 30–49 / <30%."
  },
  {
    "id": "revalida-2025-1-22",
    "topography": "1.2",
    "topic": "Perda visual súbita",
    "module": "Cirurgia",
    "text": "Homem de 40 anos é levado a uma unidade de pronto atendimento após sofrer um acidente de trabalho enquanto utilizava uma máquina de esmerilhamento. Ele relata que um fragmento metálico de alta velocidade ultrapassou a proteção de seus óculos e atingiu seu olho direito. O paciente apresenta dor intensa no olho afetado, com perda parcial da visão e sensação de corpo estranho. O exame físico revela laceração na conjuntiva bulbar com extravasamento espontâneo de pequena quantidade de conteúdo gelatinoso pelo olho direito. Nesse momento, antes de encaminhar o paciente para o especialista, qual é a conduta adequada para o caso?",
    "options": [
      "(A) Irrigar o olho afetado com solução salina estéril, fazer penicilina cristalina via endovenosa e reavaliar o paciente após 6 horas.",
      "(B) Colocar escudo rígido sobre o olho afetado, iniciar fluoroquinolona endovenosa e verificar imunização antitetânica.",
      "(C) Aplicar colírio corticoide no olho afetado, colocar escudo rígido sobre ele e solicitar radiografia de órbita.",
      "(D) Aplicar colírio antibiótico no olho afetado, realizar curativo oclusivo e prescrever analgesia endovenosa."
    ],
    "correctAnswer": 1,
    "explanation": "Projétil metálico em alta velocidade com laceração e saída de conteúdo gelatinoso (vítreo/úvea): trauma ocular aberto (perfuração do globo). Antes do especialista: proteger o olho com escudo rígido sem pressionar, não manipular, antibiótico sistêmico com boa penetração ocular (fluoroquinolona) para prevenir endoftalmite, profilaxia antitetânica, analgesia e antiemético, e jejum para cirurgia.",
    "commentary": "Irrigar o olho (A): manipular o globo aberto pode extruir o conteúdo intraocular.\n\nColírio corticoide (C): não se aplica colírio em olho perfurado; a imagem de escolha é tomografia, não radiografia.\n\nColírio e curativo oclusivo (D): o curativo comprime o globo; colírios são evitados.",
    "reference": "Conselho Brasileiro de Oftalmologia — Trauma ocular / ATLS",
    "tags": [
      "oftalmologia",
      "trauma ocular",
      "perfuração ocular",
      "emergência"
    ],
    "tip": "Olho perfurado: escudo rígido, nada de pressão nem colírio, antibiótico sistêmico e antitetânica."
  },
  {
    "id": "revalida-2025-1-23",
    "module": "Pediatria",
    "text": "Agrupadas no acrônimo TORCHSZ, as infecções congênitas e/ou perinatais são causas de significativa morbimortalidade neonatal. Os sinais e sintomas dessas enfermidades são similares, porém algumas características são mais sugestivas de determinada doença. A partir do exposto, assinale a alternativa que relaciona corretamente sinais e sintomas e/ou achados de exames complementares com a doença.",
    "options": [
      "(A) Hidrocefalia, plaquetose, hepatoesplenomegalia e icterícia são achados mais comuns da toxoplasmose.",
      "(B) Rash macular com úlceras, plaquetopenia e alteração liquórica são achados típicos da rubéola congênita.",
      "(C) Rinite serossanguinolenta, pseudoparalisia de Parrot, catarata e coriorretinite são encontradas na herpes simples.",
      "(D) Catarata, persistência do canal arterial ou estenose pulmonar e retardo de crescimento intrauterino são achados mais comuns de citomegalovírus."
    ],
    "correctAnswer": 0,
    "explanation": "Na toxoplasmose congênita, a tríade clássica de Sabin é hidrocefalia, coriorretinite e calcificações cerebrais difusas. Formas sistêmicas podem ter hepatoesplenomegalia e icterícia. O gabarito considera a alternativa A como associação correta.",
    "commentary": "Rubéola (B): os achados típicos são catarata, cardiopatia (PCA, estenose pulmonar), surdez e lesões purpúricas em 'blueberry muffin'.\n\nHerpes (C): rinite serossanguinolenta e pseudoparalisia de Parrot são da sífilis congênita.\n\nCitomegalovírus (D): catarata e PCA são da rubéola; o CMV dá microcefalia, calcificações periventriculares, surdez e petéquias.\n\nObservação: na toxoplasmose congênita o mais comum é plaquetopenia, não plaquetose — imprecisão do enunciado.",
    "reference": "Ministério da Saúde — Atenção à saúde do recém-nascido: infecções congênitas / SBP",
    "tags": [
      "neonatologia",
      "infecções congênitas",
      "TORCH",
      "toxoplasmose congênita"
    ],
    "tip": "Toxo: hidrocefalia + calcificações difusas + coriorretinite. CMV: periventriculares + surdez.",
    "alert": "Gabarito discutível: na toxoplasmose congênita o achado hematológico típico é plaquetopenia, não plaquetose. Mantida a resposta do gabarito (associação mais próxima da toxoplasmose)."
  },
  {
    "id": "revalida-2025-1-24",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, G2P1 (parto vaginal), é conduzida ao serviço de urgência obstétrica por estar desacordada, após ter apresentado dor abdominal súbita e desmaio em casa. Está com 35 semanas de gestação e é hipertensa crônica em uso de metildopa e nifedipina. Está inconsciente, apresenta tônus uterino aumentado, com batimento cardíaco fetal de 50 bpm, colo uterino fechado e com moderado sangramento escuro por via vaginal. Ela apresenta os seguintes dados vitais:\n\n• Frequência cardíaca materna: 60 bpm\n• Pressão arterial: 80 x 60 mmHg\n• Saturação de oxigênio: 94%\n\nDiante desse quadro clínico, assinale a alternativa que apresenta, respectivamente, o diagnóstico e a conduta adequados.",
    "options": [
      "(A) Descolamento prematuro de placenta; priorizar a estabilização hemodinâmica com reposição volêmica, posicionar a paciente em decúbito lateral e realizar a cesárea imediatamente.",
      "(B) Descolamento prematuro de placenta; iniciar a administração de reposição volêmica com cristaloides e com oxigênio e iniciar a monitorização contínua materno-fetal, enquanto a paciente é preparada para o parto vaginal induzido.",
      "(C) Placenta prévia; iniciar a reanimação materna com cristaloides, oxigênio suplementar e administração de uterolíticos para diminuir o tônus e conter o sangramento, enquanto a paciente é transferida para o centro cirúrgico a fim de realizar avaliação de cesariana de urgência.",
      "(D) Placenta prévia; realizar manobras de suporte à vida materna, como reposição volêmica com cristaloides e administração de oxigênio, e iniciar monitorização contínua materno-fetal enquanto a paciente é preparada para o parto vaginal induzido."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante hipertensa com dor abdominal súbita, hipertonia uterina, sangramento escuro, bradicardia fetal grave e choque materno (PA 80x60, desmaio): descolamento prematuro de placenta grave. Com feto vivo, a conduta é estabilização materna (reposição volêmica, decúbito lateral, oxigênio, reserva de sangue e avaliação da coagulação) e cesariana imediata.",
    "commentary": "DPP com parto vaginal induzido (B): com feto vivo em sofrimento grave e mãe instável, o parto vaginal não é rápido o suficiente.\n\nPlacenta prévia (C e D): o sangramento seria vermelho vivo, indolor, com útero de tônus normal; uterolíticos estariam contraindicados no DPP.",
    "reference": "Febrasgo — Descolamento prematuro de placenta / Ministério da Saúde — Gestação de alto risco",
    "tags": [
      "obstetrícia",
      "descolamento prematuro de placenta",
      "hemorragia da segunda metade",
      "hipertensão na gestação"
    ],
    "tip": "Dor + hipertonia + sangue escuro em hipertensa = DPP. Feto vivo: cesárea já."
  },
  {
    "id": "revalida-2025-1-25",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Os povos ciganos/Romani que vivem no Brasil possuem um estilo de vida não homogêneo, com uma cultura muitas vezes divergente. Portanto, é essencial que gestores e profissionais da saúde se aproximem dessa população e conheçam suas questões específicas. Nesse contexto, ao se fazer o planejamento de ações de saúde para essa população, é importante considerar que",
    "options": [
      "(A) as questões de saúde são conduzidas por homens na maioria das comunidades ciganas/Romani, motivo pelo qual as mulheres não devem ir ao hospital sozinhas.",
      "(B) a depressão e o suicídio são problemas de saúde nas comunidades ciganas/Romani, com maior incidência em mulheres, sendo motivados pelo racismo e por outras formas de violência.",
      "(C) as mulheres são as lideranças mais respeitadas por toda a comunidade cigana/Romani; por isso, para criar um vínculo de confiança com a comunidade, os agentes públicos de saúde devem iniciar a interlocução com elas.",
      "(D) os povos ciganos/Romani optam, em sua grande maioria, por se manterem nômades, buscando formas alternativas de garantir saúde e educação, apesar de atualmente algumas famílias ciganas/Romani preferirem residências fixas."
    ],
    "correctAnswer": 1,
    "explanation": "Estudos e documentos do Ministério da Saúde sobre a saúde do povo cigano/Romani apontam a depressão e o suicídio como problemas relevantes, com maior peso entre as mulheres, ligados ao racismo (anticiganismo) e a outras violências. Essa informação é importante para planejar ações de saúde mental culturalmente adequadas.",
    "commentary": "Mulheres não devem ir sozinhas (A): é uma generalização que não pode virar regra de atendimento.\n\nMulheres como lideranças (C): na maioria das comunidades as lideranças tradicionais são masculinas; generalizar também é inadequado.\n\nMaioria nômade (D): hoje a maior parte dos ciganos no Brasil vive em residência fixa.",
    "reference": "Ministério da Saúde — Subsídios para o cuidado à saúde do povo cigano (2016)",
    "tags": [
      "saúde coletiva",
      "equidade",
      "populações vulneráveis",
      "povo cigano"
    ]
  },
  {
    "id": "revalida-2025-1-26",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, com histórico de doença pulmonar obstrutiva crônica há 10 anos e tabagismo há 50 anos, é levado a unidade de pronto atendimento com desconforto respiratório, tosse e confusão mental há 2 horas. Familiar relata que, nos últimos 5 dias, houve piora progressiva da dispneia e aumento do volume de expectoração, além de mudança no aspecto dessa secreção, que passou de amarelo claro para verde escuro. Ao exame físico, encontra-se torporoso, com extremidades cianóticas e com sibilos e estertores difusos em todos os campos pulmonares. Considerando a situação apresentada, a condução clínica desse paciente deve incluir, obrigatoriamente corticoterapia",
    "options": [
      "(A) sistêmica e acompanhamento ambulatorial.",
      "(B) inalatória e acompanhamento ambulatorial.",
      "(C) inalatória e internação hospitalar.",
      "(D) sistêmica e internação hospitalar."
    ],
    "correctAnswer": 3,
    "explanation": "Exacerbação de DPOC com aumento da dispneia, do volume e da purulência do escarro (critérios de Anthonisen) e sinais de gravidade: confusão mental/torpor e cianose (provável hipercapnia). Exige internação hospitalar e corticoide sistêmico (prednisona 40 mg por 5 dias ou equivalente IV), além de broncodilatador de curta ação, antibiótico, oxigênio controlado e avaliação para ventilação não invasiva.",
    "commentary": "Acompanhamento ambulatorial (A e B): o paciente está torporoso e cianótico, com indicação de internação.\n\nCorticoide inalatório (B e C): não substitui o corticoide sistêmico na exacerbação.",
    "reference": "GOLD 2024 — Manejo da exacerbação",
    "tags": [
      "pneumologia",
      "DPOC",
      "exacerbação da DPOC",
      "corticoide sistêmico"
    ],
    "tip": "Exacerbação com rebaixamento = interna + corticoide sistêmico + antibiótico + avaliar VNI."
  },
  {
    "id": "revalida-2025-1-27",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 18 anos, chega ao pronto atendimento com dor abdominal em mesogástrio e epigástrio, de início insidioso e caráter progressivo, associada a náuseas e hiporexia. A evolução do quadro tem cerca de 24 horas. Ao exame físico, a dor abdominal é exacerbada pela tosse, há discreta diferença de temperatura entre a região axilar e a retal (+1,2 °C), além de dor à palpação profunda em região inferior direita do abdome. Exames laboratoriais mostram leucócitos 14.000/mm³ com 80% de neutrófilos, além de sumário de urina com 6 piócitos/campo. Com base no quadro clínico e laboratorial, qual achado clínico complementa o diagnóstico mais provável?",
    "options": [
      "(A) Dor à punho-percussão na região lombar à direita.",
      "(B) Crepitação na parede abdominal associada à presença de gás.",
      "(C) Dor à palpação no hipocôndrio direito durante inspiração profunda.",
      "(D) Dor à descompressão entre a espinha ilíaca ântero superior e o umbigo."
    ],
    "correctAnswer": 3,
    "explanation": "Jovem com dor periumbilical/epigástrica que migrou para a fossa ilíaca direita, náuseas, hiporexia, dor que piora com a tosse, diferença axilorretal > 1 °C (sinal de Lenander) e leucocitose com neutrofilia: apendicite aguda. A leucocitúria leve pode ocorrer por contiguidade com o ureter. O achado que completa o quadro é a dor à descompressão no ponto de McBurney (sinal de Blumberg), entre a espinha ilíaca anterossuperior e o umbigo.",
    "commentary": "Punho-percussão lombar (A): sinal de Giordano, sugere pielonefrite ou litíase.\n\nCrepitação com gás na parede (B): sugere infecção necrotizante de partes moles.\n\nDor no hipocôndrio direito à inspiração (C): sinal de Murphy, da colecistite.",
    "reference": "Sabiston Tratado de Cirurgia — Apendicite",
    "tags": [
      "cirurgia geral",
      "apendicite aguda",
      "sinal de Blumberg"
    ],
    "tip": "McBurney: terço lateral da linha entre a espinha ilíaca anterossuperior e o umbigo."
  },
  {
    "id": "revalida-2025-1-28",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Menino de cinco meses é levado para consulta de rotina. Nasceu com idade gestacional de 28 semanas, com boa evolução na internação e recebeu alta para acompanhamento ambulatorial. O bebê está bem, mas teve um episódio de infecção respiratória leve. A família está preocupada com eventuais complicações que o bebê possa ter, uma vez que o inverno está chegando e os pais querem proteger a criança. Nessa situação, a conduta médica mais adequada é indicar a",
    "options": [
      "(A) administração da vacina anti-influenza de imediato e a restrição de visitas.",
      "(B) administração de palivizumabe e orientar os cuidados essenciais de prevenção.",
      "(C) manutenção do calendário vacinal atualizado e o encaminhamento do bebê para a infectologia infantil.",
      "(D) manutenção do calendário vacinal atualizado e a administração de omalizumabe em caso de infecções."
    ],
    "correctAnswer": 1,
    "explanation": "Prematuro de 28 semanas com 5 meses na sazonalidade do vírus sincicial respiratório: tem indicação de palivizumabe (anticorpo monoclonal anti-VSR), que no SUS é indicado para prematuros ≤ 28 semanas até 1 ano de idade e para cardiopatas e pneumopatas crônicos até 2 anos. Associam-se cuidados como higiene das mãos, evitar aglomerações e fumaça e manter aleitamento.",
    "commentary": "Vacina da influenza de imediato (A): está indicada a partir dos 6 meses; a restrição de visitas isolada não basta.\n\nEncaminhar à infectologia (C): desnecessário; falta a imunoprofilaxia para VSR.\n\nOmalizumabe (D): é anti-IgE para asma alérgica grave, sem papel aqui.",
    "reference": "Ministério da Saúde — Protocolo de uso do palivizumabe / SBP",
    "tags": [
      "pediatria",
      "prematuridade",
      "vírus sincicial respiratório",
      "palivizumabe"
    ],
    "tip": "Palivizumabe: prematuro ≤ 28 sem até 1 ano; cardiopata/pneumopata até 2 anos."
  },
  {
    "id": "revalida-2025-1-29",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 24 anos chega à maternidade com queixa de cefaleia, febre e dores articulares leves há 5 dias. Relata que ontem houve piora da febre e surgimento de manchas pelo corpo, o que a fez procurar a emergência. O obstetra verifica o cartão do pré-natal e constata que ela está com 22 semanas de gestação e já realizou 3 consultas na unidade básica de saúde (UBS), sempre com sinais vitais normais e exames laboratoriais sem alterações. Ao exame físico, a paciente apresenta-se em bom estado geral, lúcida e orientada. Durante a análise clínica, foram obtidos os seguintes resultados:\n\n• Pressão arterial: 90 x 70 mmHg\n• Frequência cardíaca: 82 bpm\n• Saturação de O₂: 98% em ar ambiente\n• Temperatura axilar: 38,6 °C\n• Altura uterina: 20 cm\n• Batimentos cardiofetais: 142 bpm (regular)\n\nApós ouvir a história da paciente e examiná-la, o médico solicita um hemograma, cujo resultado é:\n\n• Hematócrito: 38% (VR: 35 a 45%)\n• Hemoglobina: 11,2 g/dL (VR: 12,0 a 16,0 g/dL)\n• Leucócitos totais: 9.500/mm³ (VR: 4.500 a 11.000/mm³)\n• Plaquetas: 28.000/mm³ (VR: 150.000 a 450.000/mm³)\n\nNesse caso, qual a principal hipótese diagnóstica e a conduta a ser adotada pelo obstetra?",
    "options": [
      "(A) Dengue; internar imediatamente a paciente, iniciar hidratação venosa, dipirona endovenosa e realizar controle diário de plaquetas.",
      "(B) Chikungunya; colocar a paciente em leito de observação clínica, iniciar hidratação venosa, dipirona e, após terminar, liberar retorno ao pré-natal.",
      "(C) Zika; colocar a paciente em leito de observação clínica, iniciar hidratação venosa, dipirona endovenosa e realizar controle diário de plaquetas.",
      "(D) Febre de Oropouche; internar imediatamente a paciente, iniciar transfusão de plaquetas, paracetamol por via oral e, após a transfusão, liberar retorno ao pré-natal."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante com febre, cefaleia, artralgia leve e exantema, hemodinamicamente estável, com plaquetas de 28.000/mm³: hipótese principal de dengue. Toda gestante com dengue é, no mínimo, grupo B e deve ter acompanhamento mais próximo; a plaquetopenia importante e a gestação justificam internação, hidratação venosa, analgesia com dipirona (evitar AINEs e AAS) e controle seriado de hematócrito e plaquetas.",
    "commentary": "Chikungunya (B): a artralgia seria intensa e incapacitante, e plaquetopenia grave é incomum; liberar sem controle é inadequado.\n\nZika (C): exantema pruriginoso, febre baixa, conjuntivite e sem plaquetopenia importante.\n\nOropouche (D): não se transfundem plaquetas profilaticamente na dengue sem sangramento grave, e a alta seria inadequada.",
    "reference": "Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)",
    "tags": [
      "obstetrícia",
      "dengue",
      "arboviroses",
      "dengue na gestação"
    ],
    "tip": "Dengue em gestante: no mínimo grupo B; plaquetas baixas pedem internação e controle."
  },
  {
    "id": "revalida-2025-1-30",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Enchentes, secas, ondas de calor, tempestades tropicais, incêndios florestais e aumento do nível do mar estão diretamente relacionados à escalada dos determinantes sociais da saúde. Esses fatores podem levar ao aumento de doenças cardiovasculares, entre outras. Considerando a interferência desses fatores, assinale a alternativa correta com relação às ações de promoção da saúde.",
    "options": [
      "(A) A exposição à poluição do ar pode acarretar no aumento do risco para hipertensão, diabetes e dermatite atópica, portanto, indica-se fechar as janelas da residência nos horários de maior fluxo de carros a fim de reduzir a exposição aos poluentes.",
      "(B) As plantações de milho para a produção de biocombustível configuram uma importante tendência no país uma vez que aumentam a oferta de empregos na economia verde e melhoram as condições de vida de pequenos e médios produtores rurais.",
      "(C) A elevação da pressão arterial é um efeito comum das ondas de calor, por isso, é indicado aumentar as doses dos anti-hipertensivos, reforçar a hidratação e procurar fontes de sombra e refrigeração.",
      "(D) As atividades de educação em saúde acerca do estresse climático são desaconselháveis nas escolas, devido ao risco de sofrimento emocional nas crianças e nos adolescentes."
    ],
    "correctAnswer": 0,
    "explanation": "A poluição atmosférica aumenta o risco de doenças cardiovasculares, metabólicas (hipertensão, diabetes) e alérgicas, como dermatite atópica e asma. Reduzir a exposição — por exemplo, fechar as janelas nos horários de maior tráfego — é uma orientação de promoção e proteção da saúde.",
    "commentary": "Milho para biocombustível (B): monoculturas extensivas podem trazer desmatamento, uso de agrotóxicos e concentração de terra; a afirmação é equivocada.\n\nAumentar anti-hipertensivo no calor (C): o calor causa vasodilatação e desidratação, com tendência a queda da pressão; pode ser necessário reduzir doses.\n\nEvitar educação climática nas escolas (D): a educação em saúde sobre clima é recomendada.",
    "reference": "OMS — Mudança climática e saúde / Ministério da Saúde — Saúde ambiental",
    "tags": [
      "saúde coletiva",
      "saúde ambiental",
      "mudança climática",
      "promoção da saúde"
    ]
  },
  {
    "id": "revalida-2025-1-31",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Homem de 40 anos procura a unidade básica de saúde (UBS) relatando que está com tosse produtiva há 3 meses, associada a febre vespertina e perda de peso. Nega histórico de tuberculose. Na UBS, é realizado o teste rápido molecular (TRM) para tuberculose no escarro, com resultado positivo e resistência à rifampicina. Diante disso, esse paciente é encaminhado para o ambulatório de referência em tuberculose do município. Nessa situação, a conduta médica, baseada no resultado do TRM, é",
    "options": [
      "(A) inadequada, devendo ser solicitada a baciloscopia no escarro; o encaminhamento do paciente deve ser cancelado enquanto aguarda o resultado da baciloscopia.",
      "(B) adequada, sendo desnecessário aguardar a baciloscopia no escarro; o encaminhamento do paciente deve ser cancelado e deve ser iniciado o esquema básico imediatamente.",
      "(C) adequada, sendo desnecessário aguardar a baciloscopia no escarro; o encaminhamento do paciente deve ser mantido e deve ser feito novo TRM, além de cultura e teste de sensibilidade.",
      "(D) inadequada, devendo ser solicitada a baciloscopia no escarro; o encaminhamento do paciente deve ser mantido, devido à necessidade de confirmação diagnóstica por centro especializado."
    ],
    "correctAnswer": 2,
    "explanation": "O teste rápido molecular (TRM-TB) positivo confirma a tuberculose, sem necessidade de baciloscopia. Quando detecta resistência à rifampicina, o protocolo manda manter o encaminhamento à referência (tuberculose drogarresistente), repetir o TRM em nova amostra para confirmar a resistência e solicitar cultura com teste de sensibilidade.",
    "commentary": "Baciloscopia antes (A e D): o TRM já é diagnóstico e mais sensível.\n\nEsquema básico imediato (B): com resistência à rifampicina, o esquema básico (RIPE) seria ineficaz e selecionaria mais resistência.",
    "reference": "Ministério da Saúde — Manual de recomendações para o controle da tuberculose (2019)",
    "tags": [
      "saúde coletiva",
      "tuberculose",
      "teste rápido molecular",
      "tuberculose resistente"
    ],
    "tip": "TRM com resistência à rifampicina: repete o TRM, pede cultura com sensibilidade e encaminha à referência."
  },
  {
    "id": "revalida-2025-1-32",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Paciente do sexo feminino, 33 anos, previamente saudável, após ter sido submetida a abdominoplastia em clínica privada, evoluiu com instabilidade hemodinâmica no pós-operatório imediato antes da alta. O cirurgião plástico que a operou pediu à família da paciente que a levasse para a unidade de pronto atendimento, onde chegou sem vida. À luz do Código de Ética Médica, deve-se considerar que o cirurgião plástico da situação descrita foi",
    "options": [
      "(A) imprudente ao operar a paciente em clínica privada.",
      "(B) imperito ao realizar o procedimento de abdominoplastia.",
      "(C) negligente quanto à estabilização pré-transporte da paciente.",
      "(D) diligente ao solicitar aos familiares a rápida transferência da paciente."
    ],
    "correctAnswer": 2,
    "explanation": "Ao enviar uma paciente instável para a UPA em carro particular, sem estabilização, acompanhamento médico e transporte adequado (ambulância), o cirurgião omitiu cuidados que devia prestar: é negligência, que o Código de Ética Médica veda (art. 1º). O médico também não pode deixar de assumir a responsabilidade pelo próprio procedimento.",
    "commentary": "Imprudente por operar em clínica privada (A): operar em clínica não é falta ética, desde que haja estrutura adequada.\n\nImperito (B): não há informação de falha técnica na cirurgia.\n\nDiligente (D): a transferência sem suporte foi inadequada.",
    "reference": "Código de Ética Médica (CFM, 2019) / Resolução CFM 2.110/2014 — Transporte de pacientes",
    "tags": [
      "ética médica",
      "negligência",
      "transporte inter-hospitalar"
    ],
    "tip": "Negligência = omissão; imprudência = ação precipitada; imperícia = falta de técnica."
  },
  {
    "id": "revalida-2025-1-33",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Lactante previamente hígida comparece à consulta de puericultura com seu filho de 4 meses. Ela refere que voltará a trabalhar em 15 dias, por isso tem dúvidas quanto à oferta do leite materno. Considerando essa situação, assinale a alternativa que apresenta a orientação correta quanto aos cuidados adequados com a ordenha e o leite materno ordenhado.",
    "options": [
      "(A) Para o descongelamento do leite materno, pode-se realizar a fervura ou o aquecimento em micro-ondas.",
      "(B) Para a coleta de leite materno, pode-se realizar ordenha manual após higienização das mamas com álcool 70%.",
      "(C) Para a conservação do leite materno, pode-se mantê-lo em congelador por até 15 dias a partir da primeira retirada.",
      "(D) Para o favorecimento da continuidade do aleitamento materno, pode-se oferecer em mamadeira o leite ordenhado."
    ],
    "correctAnswer": 2,
    "explanation": "Pelas orientações do Ministério da Saúde, o leite materno ordenhado pode ser guardado na geladeira por até 12 horas e no congelador ou freezer por até 15 dias. O descongelamento é feito em banho-maria, fora do fogo, e o leite é oferecido em copinho ou colher, não em mamadeira.",
    "commentary": "Fervura ou micro-ondas (A): destroem fatores imunológicos e aquecem de forma irregular.\n\nÁlcool 70% nas mamas (B): basta lavar as mãos e as mamas com água; álcool resseca a pele.\n\nMamadeira (D): pode causar confusão de bicos e desmame; o recomendado é copinho.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Saúde da criança — aleitamento materno",
    "tags": [
      "pediatria",
      "aleitamento materno",
      "leite ordenhado",
      "puericultura"
    ],
    "tip": "Leite ordenhado: geladeira 12 h, congelador 15 dias, oferecer no copinho."
  },
  {
    "id": "revalida-2025-1-34",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menina de 14 anos vai à consulta na unidade básica de saúde (UBS), acompanhada de sua mãe, relatando preocupação, pois todas as suas amigas da mesma faixa etária já menstruaram, exceto ela. A paciente apresenta as mamas desenvolvidas e alguns pelos pubianos e, durante a consulta, apresenta muitas dúvidas em relação à menstruação. Nesse caso, após orientar a menina sobre ciclo menstrual e sobre métodos contraceptivos, a conduta adequada é",
    "options": [
      "(A) solicitar exames complementares para investigação de amenorreia.",
      "(B) orientar a mãe e a filha a aguardarem a menstruação até os 16 anos.",
      "(C) indicar teste de progesterona oral para confirmar amenorreia primária.",
      "(D) solicitar ultrassonografia e dosagens hormonais para investigação de amenorreia."
    ],
    "correctAnswer": 1,
    "explanation": "Aos 14 anos, com mamas desenvolvidas e pelos pubianos, ainda não há amenorreia primária. Ela é investigada se não houver menstruação até os 15 anos com caracteres sexuais secundários (ou até 13 anos sem eles, ou 3 anos após a telarca). O gabarito considera adequado orientar e aguardar, com seguimento.",
    "commentary": "Investigar amenorreia agora (A e D) e teste de progesterona (C): ainda não há critério de amenorreia primária.\n\nObservação: diretrizes atuais (Febrasgo, ACOG) usam 15 anos como limite com desenvolvimento puberal; o enunciado do gabarito fala em 16 anos, critério mais antigo.",
    "reference": "Febrasgo — Amenorreias / ACOG — Menstruation in girls and adolescents",
    "tags": [
      "ginecologia",
      "ginecologia infanto-puberal",
      "amenorreia primária",
      "puberdade"
    ],
    "tip": "Amenorreia primária: sem menstruar aos 15 anos com caracteres sexuais (ou aos 13 sem eles).",
    "alert": "Gabarito discutível: as diretrizes atuais investigam amenorreia primária aos 15 anos (com caracteres sexuais); a alternativa do gabarito fala em 16 anos. Mantida a resposta do gabarito."
  },
  {
    "id": "revalida-2025-1-35",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Um médico de família e comunidade, atuante numa equipe fluvial, atende a uma população ribeirinha e a uma população indígena, ambas na região amazônica. Ele reconhece que essas duas populações vivem em regiões remotas. No entanto, é notável que elas apresentam diferenças culturais e de modos de vida. A partir dessas informações, assinale a alternativa que apresenta a estratégia adequada a ser adotada pelo médico e por sua equipe no cuidado à saúde das populações mencionadas.",
    "options": [
      "(A) Utilização de profissionais de saúde nativos ou locais sem a necessidade de capacitação específica focada no paradigma biomédico, uma vez que eles já conhecem profundamente a cultura, as tradições e os hábitos dessas populações.",
      "(B) Atendimento à população ribeirinha centrado em soluções biomédicas e tecnológicas, utilizando conhecimentos da medicina ocidental, enquanto o atendimento à população indígena deve ser pautado por suas próprias práticas de cuidado e cura.",
      "(C) Incentivo e valorização das práticas de cuidado tradicionais, promoção do uso racional de medicamentos básicos pela população indígena e estímulo à participação local e à integração do saber acadêmico e do senso comum da comunidade ribeirinha.",
      "(D) Organização dos atendimentos das populações de forma padronizada, a partir da identificação das prioridades em saúde, considerando que as comunidades compartilham realidades geográficas e desafios semelhantes em relação ao acesso a cuidados médicos."
    ],
    "correctAnswer": 2,
    "explanation": "Populações ribeirinhas e indígenas compartilham o isolamento geográfico, mas têm culturas e modos de vida distintos. O cuidado deve ser culturalmente sensível: valorizar as práticas tradicionais de cuidado (articulando-as com a medicina ocidental), promover o uso racional de medicamentos e estimular a participação comunitária, integrando o saber acadêmico ao saber local, como prevê a Política Nacional de Atenção à Saúde dos Povos Indígenas.",
    "commentary": "Agentes locais sem capacitação (A): conhecer a cultura não dispensa formação em saúde.\n\nBiomédico para ribeirinhos e só práticas tradicionais para indígenas (B): ambas as populações têm direito ao cuidado integral, com diálogo entre os saberes.\n\nAtendimento padronizado (D): ignora as diferenças culturais que o próprio enunciado destaca.",
    "reference": "Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI) / PNAB — Equipes ribeirinhas e fluviais",
    "tags": [
      "saúde coletiva",
      "saúde indígena",
      "populações ribeirinhas",
      "competência cultural"
    ]
  },
  {
    "id": "revalida-2025-1-36",
    "module": "Clínica Médica",
    "text": "Mulher de 45 anos foi levada para consulta na casa de saúde indígena da capital do estado, com febre (até 39°C), tosse, dor de garganta, cefaleia, mialgia e artralgia iniciados há cerca de 36 horas. Outros 5 pacientes da mesma comunidade indígena apresentaram quadro semelhante no mesmo período. No dia da consulta, a paciente começou a se queixar de leve falta de ar. Ao exame físico apresentava parâmetros dentro da normalidade, exceto pela febre (39 °C) e por estertores crepitantes na base pulmonar direita. Frequência respiratória de 22 irpm e pressão arterial é de 120 x 80 mmHg. Considerando o caso apresentado, assinale a alternativa que indica, respectivamente, a hipótese diagnóstica e a conduta mais adequada.",
    "options": [
      "(A) Pneumonia viral; prescrever o uso de oseltamivir.",
      "(B) Tuberculose; solicitar pesquisa de BAAR no escarro.",
      "(C) Pneumonia bacteriana; indicar o uso de ceftriaxona e amoxicilina.",
      "(D) Resfriado comum; recomendar o uso de medicações sintomáticas."
    ],
    "correctAnswer": 0,
    "explanation": "Febre alta de início súbito, tosse, dor de garganta, cefaleia, mialgia e artralgia, com vários casos simultâneos na mesma comunidade indígena: síndrome gripal por influenza em surto. A paciente evoluiu com dispneia e crepitações, sinais de comprometimento pulmonar (pneumonia viral). Indígenas são grupo de risco para complicações, então o oseltamivir está indicado, idealmente nas primeiras 48 horas, sem esperar confirmação.",
    "commentary": "Tuberculose (B): o quadro agudo de 36 horas e em surto não é compatível.\n\nPneumonia bacteriana com ceftriaxona e amoxicilina (C): a apresentação epidemiológica é viral; além disso, os dois betalactâmicos juntos não fazem sentido.\n\nResfriado comum (D): não cursa com febre alta, mialgia intensa e crepitações.",
    "reference": "Ministério da Saúde — Protocolo de tratamento de influenza (2023)",
    "tags": [
      "infectologia",
      "influenza",
      "síndrome gripal",
      "oseltamivir",
      "saúde indígena"
    ],
    "tip": "Síndrome gripal em grupo de risco: oseltamivir sem esperar exame."
  },
  {
    "id": "revalida-2025-1-37",
    "topography": "15",
    "topic": "Bioética",
    "module": "Saúde Coletiva",
    "text": "Mulher de 24 anos, previamente saudável, portadora de rim único, sofreu um acidente motociclístico há 7 dias. Foi levada a um hospital, onde foi submetida a craniectomia descompressiva e drenagem de hematoma subdural agudo. No entanto, há 1 dia, evoluiu com coma aperceptivo e ausência de reflexos de tronco encefálico. Diante disso, foi realizado o protocolo de morte encefálica, com confirmação diagnóstica. Testes laboratoriais mostraram função renal preservada, anti-HBs positivo e HBsAg negativo. Embora a paciente seja doadora de órgãos e tecidos, seu esposo se posiciona contra a doação, afirmando que isso interferirá em suas crenças. Com base na legislação pertinente, assinale a alternativa correta quanto à doação de órgãos nessa situação.",
    "options": [
      "(A) A condição renal da paciente, embora seja saudável, contraindica a doação de órgãos.",
      "(B) A doação de órgãos da paciente requer o consentimento e a autorização de seu esposo.",
      "(C) O poder público poderá intervir a favor do cumprimento do desejo de doação da paciente.",
      "(D) Os resultados dos exames laboratoriais citados impossibilitam a doação de órgãos da paciente."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Lei 9.434/1997 (com redação da Lei 10.211/2001), a retirada de órgãos de doador falecido depende da autorização do cônjuge ou de parente maior de idade até o segundo grau. A vontade manifestada em vida não basta: sem a autorização familiar, a doação não ocorre.",
    "commentary": "Condição renal (A) e exames (D): a função renal preservada e o anti-HBs positivo isolado (vacinação) não contraindicam a doação.\n\nIntervenção do poder público (C): não há previsão legal para obrigar a doação contra a família.",
    "reference": "Lei 9.434/1997 e Lei 10.211/2001 / Decreto 9.175/2017",
    "tags": [
      "bioética",
      "doação de órgãos",
      "morte encefálica",
      "legislação"
    ],
    "tip": "Doação de órgãos no Brasil: quem autoriza é a família (cônjuge ou parente até 2º grau)."
  },
  {
    "id": "revalida-2025-1-38",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "Menino de 6 meses, saudável, é levado para consulta de rotina. Ele está em aleitamento materno exclusivo e a mãe busca orientações sobre a introdução alimentar, pois se trata de seu primeiro filho. Nesse caso, a conduta adequada é manter aleitamento materno e",
    "options": [
      "(A) introduzir 1 refeição com composto lácteo.",
      "(B) iniciar 1 refeição minimamente processada.",
      "(C) oferecer suco de frutas e dar 2 papas de legumes.",
      "(D) introduzir 1 refeição principal e 1 porção de fruta."
    ],
    "correctAnswer": 3,
    "explanation": "Aos 6 meses inicia-se a alimentação complementar, mantendo o aleitamento materno: uma refeição principal (almoço, papa salgada com cereal/tubérculo, leguminosa, carne e legumes) e frutas nos lanches. Aos 7 meses acrescenta-se a segunda refeição principal (jantar).",
    "commentary": "Composto lácteo (A): não é recomendado; o aleitamento continua.\n\nRefeição 'minimamente processada' (B): a descrição é vaga; o guia orienta comida de verdade (in natura e minimamente processada) organizada em refeições.\n\nSuco de frutas e 2 papas (C): sucos não são recomendados antes de 1 ano, e a segunda refeição salgada entra aos 7 meses.",
    "reference": "Ministério da Saúde — Guia alimentar para crianças brasileiras menores de 2 anos (2019)",
    "tags": [
      "pediatria",
      "alimentação complementar",
      "aleitamento materno",
      "puericultura"
    ],
    "tip": "6 meses: 1 papa salgada + frutas; 7 meses: 2 papas salgadas."
  },
  {
    "id": "revalida-2025-1-39",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 30 anos é encaminhada pelo médico da unidade básica de saúde (UBS) para avaliação com o ginecologista. Relata corrimento com odor fétido após o término da menstruação, nos últimos três ciclos menstruais, e apresenta o laudo da citologia cervical realizada na UBS: presença de epitélio escamoso e glandular, flora com lactobacilos e dentro dos limites da normalidade. Ao exame especular, observa-se corrimento abundante\n\nhomogêneo, com vagina e colo uterino de aspecto normal e sem hiperemia. Teste com hidróxido de potássio, realizado na secreção vaginal, com a percepção de odor fétido e pH superior a 5,0. No exame a fresco da secreção vaginal, observam-se células guia (clue cells) no microscópio. Nesse caso, quais são, respectivamente, o diagnóstico e o tratamento a serem prescritos?",
    "options": [
      "(A) Vaginose citolítica; tratamento com banho de assento com bicarbonato de sódio.",
      "(B) Tricomoníase; tratamento com metronidazol por via oral, ou em forma de creme vaginal.",
      "(C) Candidíase; tratamento com miconazol creme vaginal, ou com fluconazol por via oral.",
      "(D) Vaginose bacteriana; tratamento com metronidazol por via oral, ou em forma de creme vaginal, ou com clindamicina creme."
    ],
    "correctAnswer": 3,
    "explanation": "Corrimento homogêneo, sem inflamação, com teste das aminas positivo (odor fétido com KOH), pH > 4,5 e clue cells: preenche os critérios de Amsel para vaginose bacteriana. O tratamento é metronidazol oral (500 mg 12/12h por 7 dias) ou gel vaginal, ou clindamicina creme.",
    "commentary": "Vaginose citolítica (A): pH ácido, excesso de lactobacilos, sem odor.\n\nTricomoníase (B): corrimento amarelo-esverdeado, bolhoso, colpite em framboesa; o tratamento é sempre oral (e do parceiro).\n\nCandidíase (C): corrimento grumoso, prurido, pH < 4,5.",
    "reference": "Ministério da Saúde — PCDT de Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "ginecologia",
      "vaginose bacteriana",
      "corrimento vaginal",
      "critérios de Amsel"
    ],
    "tip": "Amsel (3 de 4): corrimento homogêneo, pH > 4,5, Whiff positivo, clue cells."
  },
  {
    "id": "revalida-2025-1-40",
    "topography": "6.2",
    "topic": "Lombalgia",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos, trabalhador da construção civil, comparece a uma unidade básica de saúde (UBS) devido à dor lombar iniciada há um mês, com piora progressiva, irradiada para o membro inferior direito, com maior intensidade ao final do expediente de trabalho, especialmente após carregar materiais pesados. Nega histórico de trauma, febre, perda de peso ou outros sintomas sistêmicos. Ao exame físico, há dor à palpação de musculatura paravertebral bilateral na região lombar, sem alterações neurológicas. Não há restrição de movimentos e a flexão está preservada. O exame de força e sensibilidade nos membros inferiores está normal, e os reflexos patelar e aquileu estão preservados. Lasègue negativo bilateralmente. Quais são as condutas adequadas a serem adotadas nesse caso?",
    "options": [
      "(A) Solicitar ressonância magnética da coluna lombar, devido à irradiação da dor para membro inferior; prescrever anti-inflamatório não esteroide associado a paracetamol.",
      "(B) Solicitar radiografia de coluna lombar, devido à duração e à irradiação da dor; prescrever corticoide sistêmico associado a paracetamol; encaminhar o paciente à fisioterapia.",
      "(C) Não solicitar exames complementares, devido à duração da dor e reflexos preservados; prescrever corticoide sistêmico associado a relaxante muscular; orientar repouso por 5 dias.",
      "(D) Não solicitar exames complementares, devido à ausência de sinais de alerta; orientar a prática de exercício físico; prescrever anti-inflamatório não esteroide associado a relaxante muscular."
    ],
    "correctAnswer": 3,
    "explanation": "Lombalgia mecânica de 1 mês, relacionada ao esforço, sem sinais de alarme (sem trauma, febre, emagrecimento, déficit neurológico) e com Lasègue negativo: lombalgia inespecífica. Não se solicita imagem. O tratamento inclui manter-se ativo/exercício (evitar repouso), AINE pelo menor tempo possível e, se preciso, relaxante muscular por curto período.",
    "commentary": "Ressonância (A) e radiografia (B): sem sinais de alarme, imagem não muda conduta; a dor irradiada sem déficit e com Lasègue negativo não é radiculopatia.\n\nCorticoide sistêmico e repouso (C): corticoide não tem benefício na lombalgia inespecífica, e repouso piora a evolução.",
    "reference": "Ministério da Saúde — Linha de cuidado da dor lombar / ACP — Low back pain (2017)",
    "tags": [
      "ortopedia",
      "lombalgia",
      "sinais de alarme",
      "atenção primária"
    ],
    "tip": "Lombalgia sem bandeira vermelha: sem exame, sem repouso, mexa-se."
  },
  {
    "id": "revalida-2025-1-41",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Saúde Coletiva",
    "text": "Homem de 22 anos comparece à unidade básica de saúde (UBS) com queixa de úlcera na região genital associada a \"íngua na virilha\". Ele afirma que, há cerca de 10 dias, observou lesão papular, única, indolor, localizada na glande. Em pouco tempo, essa lesão evoluiu para ulceração local. Ao exame físico, o paciente apresenta, na glande, úlcera única de fundo limpo e bordas elevadas, endurecidas e linfonodos inguinais palpáveis bilateralmente, não supurativos, móveis e indolores. Ao ser questionado, ele confirma ter tido relação sexual desprotegida cerca de 3 semanas antes do início dos primeiros sinais. Nesse caso, qual é o exame complementar indicado para o diagnóstico do paciente?",
    "options": [
      "(A) VDRL sérico (Venereal Disease Research Laboratory).",
      "(B) Cultura de secreção uretral em meio de Thayer-Martin.",
      "(C) Aspirado linfonodal com pesquisa de Haemophilus ducreyi.",
      "(D) Pesquisa de corpúsculos de Donovan em esfregaço da lesão."
    ],
    "correctAnswer": 0,
    "explanation": "Úlcera genital única, indolor, de fundo limpo e bordas endurecidas, com adenopatia inguinal bilateral indolor e não supurativa, cerca de 3 semanas após exposição: cancro duro (sífilis primária). Entre as opções, o exame indicado é o VDRL (teste não treponêmico), junto com teste treponêmico (teste rápido). Na fase primária muito inicial, o VDRL pode ainda estar negativo; o ideal seria pesquisa direta do treponema. Pelo protocolo, trata-se o caso com penicilina benzatina 2,4 milhões UI dose única.",
    "commentary": "Thayer-Martin (B): meio de cultura para gonococo (uretrite).\n\nHaemophilus ducreyi (C): agente do cancro mole, com úlceras múltiplas, dolorosas e de fundo sujo, e bubão que supura.\n\nCorpúsculos de Donovan (D): diagnóstico da donovanose, com úlceras crônicas e vegetantes.",
    "reference": "Ministério da Saúde — PCDT de Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "infectologia",
      "sífilis primária",
      "úlcera genital",
      "IST"
    ],
    "tip": "Cancro duro: único, indolor, borda dura, fundo limpo. Cancro mole: múltiplo, doloroso, sujo."
  },
  {
    "id": "revalida-2025-1-42",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Mulher de 45 anos, sem comorbidades, é submetida a uma colecistectomia videolaparoscópica eletiva devido a colecistopatia crônica calculosa. O procedimento transcorre sem complicações, durando cerca de 40 minutos. No pós-operatório imediato, a paciente apresenta-se hemodinamicamente estável, com pressão arterial de 110 x 70 mmHg, frequência cardíaca de 82 bpm e saturação de oxigênio de 98% em ar ambiente. Nega náusea e relata dor leve em região abdominal. De acordo com os protocolos multimodais de recuperação pós-operatória (ERAS e ACERTO), qual é a conduta adequada em relação à alimentação dessa paciente?",
    "options": [
      "(A) Início de dieta líquida via oral após 6 horas do procedimento.",
      "(B) Início imediato de dieta via oral, de acordo com sua vontade.",
      "(C) Início de dieta via oral após 24 horas do procedimento.",
      "(D) Início imediato de dieta via oral, de forma escalonada."
    ],
    "correctAnswer": 1,
    "explanation": "Pelos protocolos ERAS e ACERTO, após cirurgia eletiva sem complicação, como a colecistectomia videolaparoscópica, a dieta oral pode ser liberada logo no pós-operatório imediato, de acordo com a tolerância e a vontade da paciente. A realimentação precoce reduz o catabolismo, o íleo e o tempo de internação.",
    "commentary": "Dieta líquida após 6 h (A), após 24 h (C) e escalonada (D): esperar ou impor progressão rígida não tem benefício e contraria os protocolos.",
    "reference": "Projeto ACERTO / ERAS Society",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "ERAS",
      "realimentação precoce"
    ],
    "tip": "ERAS/ACERTO: comida cedo, conforme a vontade do paciente."
  },
  {
    "id": "revalida-2025-1-43",
    "topography": "2.1",
    "topic": "Bronquiectasias",
    "module": "Pediatria",
    "text": "Adolescente de 15 anos com fibrose cística comparece ao pronto-socorro com aumento da tosse produtiva, expectoração purulenta e febre iniciada há três dias. Ele relata piora da dispneia, e sua mãe, que o acompanha, observa que ele tem tido mais dificuldade para realizar suas atividades diárias. Ao exame físico, o paciente apresenta moderado desconforto respiratório, com taquipneia (frequência respiratória de 32 irpm), sibilos bilaterais e diminuição do murmúrio vesicular nas bases pulmonares. A saturação de oxigênio em ar ambiente é de 87%.\n\nConsiderando o quadro clínico apresentado, a abordagem inicial é",
    "options": [
      "(A) internar o paciente; iniciar oxigenoterapia e antibioticoterapia de amplo espectro intravenosa; e solicitar cultura de escarro.",
      "(B) internar o paciente; iniciar corticoterapia sistêmica; e realizar drenagem postural imediata com fisioterapia respiratória intensiva.",
      "(C) realizar nebulização com broncodilatadores; prescrever antibioticoterapia oral domiciliar; e agendar acompanhamento em ambulatório especializado.",
      "(D) realizar tomografia de tórax, gasometria arterial e exames séricos para avaliar melhor o grau de comprometimento pulmonar antes de iniciar tratamento."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com fibrose cística e exacerbação pulmonar (mais tosse e secreção purulenta, febre, dispneia, piora funcional) com hipoxemia (SatO₂ 87%) e desconforto moderado. Deve ser internado para oxigenoterapia e antibioticoterapia intravenosa de amplo espectro, incluindo cobertura para Pseudomonas aeruginosa (ex.: betalactâmico antipseudomonas + aminoglicosídeo), guiada por cultura de escarro.",
    "commentary": "Corticoide e drenagem postural intensiva (B): corticoide não é rotina, e a fisioterapia é adjuvante, não o tratamento principal.\n\nTratamento oral domiciliar (C): inadequado com hipoxemia.\n\nAdiar o tratamento para exames (D): o antibiótico não deve esperar.",
    "reference": "Diretrizes brasileiras de diagnóstico e tratamento da fibrose cística (SBPT, 2017)",
    "tags": [
      "pneumologia pediátrica",
      "fibrose cística",
      "exacerbação pulmonar",
      "pseudomonas"
    ],
    "tip": "Exacerbação de fibrose cística com hipoxemia: interna, O₂ e antibiótico IV antipseudomonas."
  },
  {
    "id": "revalida-2025-1-44",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, G3P1A, gestação de 13 semanas, datada pela ecografia de 8 semanas, procura atendimento com queixa de sangramento vaginal há 3 dias, em pequena quantidade. A tipagem sanguínea anotada em seu cartão de pré-natal é A negativo. Ela desconhece a tipagem sanguínea de seu companheiro. Ao exame ginecológico, nota-se sangramento vaginal em moderada quantidade e colo uterino fechado. Solicitado teste de coombs indireto, com resultado positivo.\n\nDiante desse contexto, a conduta médica adequada é",
    "options": [
      "(A) alertar a paciente sobre a inviabilidade da gestação.",
      "(B) realizar imunoglobulina anti-RH, por via endovenosa, imediatamente.",
      "(C) repetir o exame de coombs indireto e solicitar tipagem sanguínea do parceiro.",
      "(D) encaminhar ao pré-natal de alto risco e indicar monitoramento por aloimunização."
    ],
    "correctAnswer": 3,
    "explanation": "Gestante Rh negativo com Coombs indireto positivo: já está aloimunizada. A imunoglobulina anti-D não serve mais (só previne a sensibilização). A conduta é encaminhar ao pré-natal de alto risco para identificar e titular o anticorpo e monitorar anemia fetal, com Doppler da artéria cerebral média quando os títulos forem significativos.",
    "commentary": "Gestação inviável (A): não há base; o sangramento com colo fechado é ameaça de aborto, e a aloimunização não inviabiliza a gestação.\n\nAnti-D endovenosa (B): sem utilidade em quem já está sensibilizada.\n\nRepetir Coombs e tipar o parceiro (C): pode complementar, mas o positivo já define aloimunização e indica o alto risco.",
    "reference": "Ministério da Saúde — Manual de gestação de alto risco (2022) / Febrasgo — Aloimunização Rh",
    "tags": [
      "obstetrícia",
      "aloimunização Rh",
      "coombs indireto",
      "pré-natal de alto risco"
    ],
    "tip": "Coombs indireto positivo: anti-D não adianta mais; vai para alto risco."
  },
  {
    "id": "revalida-2025-1-45",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um médico recém-contratado para atuar como gerente de uma unidade básica de saúde (UBS) em uma cidade com 35.000 habitantes agendou uma reunião com a equipe para tratar de visitas domiciliares. Seu objetivo é propor uma investigação com enfoque em doenças crônicas não transmissíveis, na população residente com 18 anos ou mais de idade. O médico visa melhorar, em um curto período de tempo, o planejamento de cuidados de saúde dessa população.\n\nO desenho de pesquisa mais adequado para esse levantamento denomina-se",
    "options": [
      "(A) estudo transversal.",
      "(B) estudo experimental.",
      "(C) análise de caso-controle.",
      "(D) análise de coorte prospectivo."
    ],
    "correctAnswer": 0,
    "explanation": "Para conhecer rapidamente a frequência de doenças crônicas e seus fatores na população adulta, o desenho adequado é o estudo transversal (inquérito de prevalência): mede exposição e desfecho num mesmo momento, é rápido e barato e serve ao planejamento.",
    "commentary": "Experimental (B): há intervenção alocada pelo pesquisador; não se aplica a levantamento.\n\nCaso-controle (C): parte de doentes e não doentes para investigar exposições; não estima prevalência.\n\nCoorte prospectiva (D): acompanha expostos ao longo do tempo; é demorada e cara.",
    "reference": "Rouquayrol — Epidemiologia & Saúde / Fletcher — Epidemiologia clínica",
    "tags": [
      "epidemiologia",
      "estudo transversal",
      "desenho de estudo"
    ],
    "tip": "Prevalência num retrato do momento = estudo transversal."
  },
  {
    "id": "revalida-2025-1-46",
    "topography": "6.1",
    "topic": "Artrite reumatoide",
    "module": "Clínica Médica",
    "text": "Mulher de 25 anos vai à consulta na unidade básica de saúde (UBS) com dor articular há 4 meses, edema e vermelhidão nas articulações metacarpo falangeanas e interfalangeanas proximais de ambas as mãos e também em punhos e joelhos. Refere rigidez matinal de 2 horas, mal-estar generalizado e sensação de febre. Nega lesões cutâneas ou alopecia. Fez uso de ibuprofeno, com alívio parcial das dores. Exame físico: à palpação das articulações acometidas presença de dor, espessamento sinovial, sem deformidades. Os exames indicam velocidade de hemossedimentação de 35 mm/hora (valor de referência [VR]: < 20 mm/hora); proteína C reativa de 12 mg/dL (VR: < 6 mg/dL); e fator reumatoide negativo (referência: negativo).\n\nConsiderando o caso apresentado, assinale a alternativa que indica, respectivamente, o diagnóstico e o tratamento medicamentoso adequados.",
    "options": [
      "(A) Osteoartrite; uso de paracetamol.",
      "(B) Artrite reumatoide; uso de metotrexato.",
      "(C) Esclerose sistêmica; uso de prednisona.",
      "(D) Lúpus eritematoso sistêmico; uso de cloroquina."
    ],
    "correctAnswer": 1,
    "explanation": "Poliartrite de pequenas articulações das mãos, punhos e joelhos, simétrica, com rigidez matinal prolongada (2 horas), sinovite e provas inflamatórias elevadas: artrite reumatoide (o fator reumatoide pode ser negativo em até 30%; dosar anti-CCP). O tratamento de base é metotrexato, que deve ser iniciado precocemente.",
    "commentary": "Osteoartrite (A): rigidez matinal curta (< 30 min), sem inflamação sistêmica nem sinovite.\n\nEsclerose sistêmica (C): espessamento cutâneo, Raynaud.\n\nLúpus (D): não há manifestações cutâneas, renais ou hematológicas descritas.",
    "reference": "Sociedade Brasileira de Reumatologia — Diretrizes de AR (2022) / Critérios ACR/EULAR 2010",
    "tags": [
      "reumatologia",
      "artrite reumatoide",
      "metotrexato",
      "poliartrite"
    ],
    "tip": "Poliartrite simétrica de mãos + rigidez > 1 h = AR. Metotrexato é a âncora."
  },
  {
    "id": "revalida-2025-1-47",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, vítima de acidente de trânsito, com amputação traumática de membro inferior direito na região da perna, recebe atendimento no local do acidente. O exame clínico revela sangramento ativo e abundante na região da amputação. No momento, sua pele está pálida e fria, apresenta 13 pontos em Escala de Coma de Glasgow e seus sinais vitais são apresentados a seguir.\n\n• Pressão arterial: 80 x 50 mmHg\n• Frequência cardíaca: 130 bpm\n• Frequência respiratória: 30 irpm\n\nCom base no protocolo do “X” ATLS, qual é a intervenção prioritária inicial para esse paciente?",
    "options": [
      "(A) Posicionar cânula orofaríngea.",
      "(B) Administrar fluidos intravenosos.",
      "(C) Manter a coluna cervical estabilizada.",
      "(D) Colocar torniquete acima do local da amputação."
    ],
    "correctAnswer": 3,
    "explanation": "No XABCDE do ATLS, o 'X' vem antes da via aérea: controle de hemorragia exsanguinante externa. Amputação traumática com sangramento ativo em paciente em choque (PA 80x50, FC 130) exige torniquete proximal ao sangramento imediatamente.",
    "commentary": "Cânula orofaríngea (A): o paciente tem Glasgow 13 e via aérea pérvia; não é a prioridade.\n\nFluidos (B): vêm depois do controle do sangramento (no C).\n\nColuna cervical (C): faz parte do A, que fica após o X.",
    "reference": "ATLS 10ª ed. / PHTLS",
    "tags": [
      "trauma",
      "XABCDE",
      "hemorragia exsanguinante",
      "torniquete"
    ],
    "tip": "X antes do A: sangramento externo grave se controla primeiro."
  },
  {
    "id": "revalida-2025-1-48",
    "topography": "11",
    "topic": "Obesidade infantil",
    "module": "Pediatria",
    "text": "Menino de 6 anos é levado para consulta por seus pais, por estarem preocupados com seu ganho de peso. Notaram escurecimento da pele da criança em região de pescoço e axilas, pensando que isso pode ser algum problema grave. O menino apresenta índice de massa corporal (IMC) entre +2 e +3 no escore Z e uma relação circunferência abdominal / estatura de 0,9. Ao exame físico, apresenta manchas escurecidas e aveludadas em região de pescoço e axilas.\n\nNesse caso, as alterações clínicas e a conduta adequada, respectivamente, são",
    "options": [
      "(A) risco de sobrepeso e acantosis nigricans; iniciar hipoglicemiante oral.",
      "(B) eutrofia e acrodermatite; encaminhar o paciente para dermatologia.",
      "(C) obesidade e acantosis nigricans; orientar alimentação e prática de esportes.",
      "(D) sobrepeso e acrodermatite; encaminhar o paciente para endocrinologia infantil."
    ],
    "correctAnswer": 2,
    "explanation": "IMC entre escore Z +2 e +3 aos 6 anos é obesidade (OMS: > +2 a +3 obesidade; > +3 obesidade grave; +1 a +2 sobrepeso). A relação cintura/estatura de 0,9 (normal < 0,5) indica adiposidade central. As placas escuras e aveludadas em pescoço e axilas são acantose nigricans, marcador de resistência à insulina. A base do tratamento é mudança de estilo de vida da família: alimentação saudável e atividade física.",
    "commentary": "Risco de sobrepeso e hipoglicemiante (A): classificação errada; metformina não é primeira linha.\n\nEutrofia e acrodermatite (B) / sobrepeso e acrodermatite (D): classificação errada; acrodermatite (deficiência de zinco) afeta extremidades e orifícios.",
    "reference": "Ministério da Saúde/OMS — Curvas de crescimento / SBP — Obesidade na infância e adolescência",
    "tags": [
      "pediatria",
      "obesidade infantil",
      "acantose nigricans",
      "resistência à insulina"
    ],
    "tip": "IMC/idade em escore Z: +1 a +2 sobrepeso; +2 a +3 obesidade; > +3 obesidade grave."
  },
  {
    "id": "revalida-2025-1-49",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Mulher de 65 anos procura atendimento médico na unidade de atenção primária. Relata que teve a menopausa aos 50 anos, com diagnóstico de osteoporose, confirmado por exame de densitometria óssea (T-score de -2,5). A paciente não apresenta histórico de fraturas, é obesa,\n\nsedentária e faz uso crônico de corticoides orais.\n\nDiante do caso, a conduta adequada é",
    "options": [
      "(A) reposição hormonal com estrógenos orais, restrição de atividade física de alto impacto, com nova avaliação após 1 ano.",
      "(B) calcitonina nasal, recomendando exercícios leves, além de sugerir aumento de ingestão de alimentos ricos em cálcio e em vitamina D.",
      "(C) vitamina D isolada associada ao aumento da ingestão de proteínas, recomendando atividades físicas de baixo impacto, com reavaliação após 1 ano.",
      "(D) bisfosfonato oral, recomendando a prática regular de exercícios físicos (por 30 a 40 minutos, 3 vezes por semana) e a suplementação de cálcio e de vitamina D."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 65 anos com osteoporose densitométrica (T-score −2,5) e fator de risco importante (uso crônico de corticoide oral). Há indicação de tratamento farmacológico, e a primeira linha é bisfosfonato oral (alendronato ou risedronato), com cálcio e vitamina D adequados e exercício físico regular (resistido e de equilíbrio).",
    "commentary": "Estrogênio oral (A): aos 65 anos, 15 anos após a menopausa, os riscos superam os benefícios; e o exercício não deve ser restrito.\n\nCalcitonina (B): baixa eficácia, uso restrito.\n\nVitamina D isolada (C): não trata osteoporose estabelecida.",
    "reference": "PCDT Osteoporose — Ministério da Saúde / Diretriz SBR",
    "tags": [
      "reumatologia",
      "osteoporose",
      "bisfosfonatos",
      "osteoporose induzida por glicocorticoide"
    ],
    "tip": "Osteoporose: bisfosfonato + cálcio + vitamina D + exercício."
  },
  {
    "id": "revalida-2025-1-50",
    "module": "Saúde Coletiva",
    "text": "Homem de 42 anos, pescador que mora próximo a um lago, é atendido em uma unidade básica de saúde (UBS) no norte de Minas Gerais. Ele relata dor abdominal intermitente, cansaço, febre baixa, hiporexia, episódios de diarreia há cerca de um mês e áreas de prurido em membros inferiores. No exame físico, apresenta hepatoesplenomegalia e distensão abdominal. Nos membros inferiores há lesões sugestivas de estrófulos. O hemograma mostra eosinofilia. Aguarda resultado de exame parasitológico de fezes pelo método Kato-Katz.\n\nNesse caso, qual deverá ser a conduta de acordo com o resultado do exame?",
    "options": [
      "(A) Se o resultado for positivo, tratar o paciente com metronidazol e notificar ao SINAN.",
      "(B) Se o resultado for positivo, solicitar ensaio imunoenzimático (ELISA) para detecção de anticorpos IgG e confirmação da atividade da doença.",
      "(C) Se o resultado for positivo, tratar o paciente com praziquantel e notificar no sistema de informação do programa específico da doença.",
      "(D) Se o resultado for negativo, solicitar método de sedimentação espontânea de fezes (Hoffman) para descartar a principal hipótese diagnóstica."
    ],
    "correctAnswer": 2,
    "explanation": "Pescador em área endêmica (norte de Minas), com dor abdominal, diarreia, febre, dermatite pruriginosa nos membros inferiores (porta de entrada das cercárias), hepatoesplenomegalia e eosinofilia: esquistossomose mansônica. Com Kato-Katz positivo, trata-se com praziquantel e notifica-se no sistema do programa de controle (SISPCE nas áreas endêmicas; SINAN fora delas).",
    "commentary": "Metronidazol (A): não trata helmintos.\n\nELISA para confirmar (B): o Kato-Katz positivo já confirma.\n\nHoffman se negativo (D): o Kato-Katz é o método indicado para Schistosoma; se negativo, repetem-se lâminas/amostras.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: Esquistossomose",
    "tags": [
      "infectologia",
      "esquistossomose",
      "praziquantel",
      "doenças negligenciadas"
    ],
    "tip": "Água doce + prurido nas pernas + hepatoesplenomegalia + eosinofilia = esquistossomose."
  },
  {
    "id": "revalida-2025-1-51",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Homem de 25 anos vai à unidade de pronto atendimento (UPA) apresentando quadro de febre alta há 3 dias, associado a náuseas, mialgia, artralgia e leve dor em quadrantes superiores do abdome. Ao exame físico, o paciente encontra-se alerta, consciente e orientado; pressão arterial de 100 x 70 mmHg; frequência cardíaca de 110 bpm; e frequência respiratória de 18 irpm; pulsos cheios e extremidades quentes; fígado palpável a 3 centímetros do rebordo costal direito, levemente doloroso à palpação. Os exames laboratoriais iniciais do paciente revelam os seguintes resultados:\n\n• Leucócitos totais: 3.500 células/mm³ (VR: 4.000 a 10.000/mm³)\n• Hematócrito: 46% (VR: 39,9 a 52,1%)\n• Plaquetas: 130.000/mm³ (VR: 150.000 a 450.000/mm³)\n• Teste rápido de antígeno NS1: Positivo\n\nNesse caso, a conduta inicial mais adequada envolve",
    "options": [
      "(A) alta para acompanhamento ambulatorial diário e hidratação oral abundante e analgesia.",
      "(B) hidratação oral abundante e sintomáticos, alta e orientação de retorno no primeiro dia após a cessação da febre.",
      "(C) hidratação venosa e internação hospitalar em enfermaria para monitorização clínica e laboratorial.",
      "(D) internação em unidade de terapia intensiva (UTI) imediatamente para hidratação vigorosa e monitoramento contínuo."
    ],
    "correctAnswer": 2,
    "explanation": "Dengue confirmada (NS1 positivo) com sinal de alarme: hepatomegalia dolorosa > 2 cm (e dor abdominal). Sem sinais de choque (PA e perfusão adequadas), o paciente é grupo C: internação em leito de enfermaria, hidratação venosa (10 mL/kg/h na primeira hora) e reavaliação clínica e de hematócrito.",
    "commentary": "Alta com hidratação oral (A e B): seriam condutas dos grupos A/B, sem sinal de alarme.\n\nUTI (D): é para o grupo D (choque, sangramento grave, disfunção orgânica).",
    "reference": "Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)",
    "tags": [
      "infectologia",
      "dengue",
      "sinais de alarme",
      "classificação de risco"
    ],
    "tip": "Sinal de alarme sem choque = grupo C: interna e hidrata IV."
  },
  {
    "id": "revalida-2025-1-52",
    "topography": "3.3",
    "topic": "Coledocolitíase",
    "module": "Cirurgia",
    "text": "Mulher de 47 anos apresenta dor abdominal no quadrante superior direito iniciada há 3 dias, associada a náuseas e vômitos. Ela relata que a dor, inicialmente intermitente, tornou-se constante e irradia para o dorso. O exame físico mostra icterícia leve, dor à palpação do quadrante superior direito e sinal de Murphy ausente. Os exames laboratoriais revelam elevação de bilirrubinas (sendo a direta predominante), aumento de fosfatase alcalina e gama-GT, amilase e lipase normais. A ultrassonografia abdominal evidencia múltiplos cálculos na vesícula biliar e dilatação das vias biliares. A colangiorressonância evidencia cálculo no ducto biliar comum (diâmetro de 9 mm), associado a dilatação do colédoco e das vias biliares intra-hepáticas.\n\nNesse caso, a conduta médica adequada é",
    "options": [
      "(A) prescrever antibióticos e acompanhar a paciente clinicamente até a resolução dos sintomas.",
      "(B) solicitar tomografia computadorizada, antes de qualquer intervenção, para avaliar o estado da via biliar.",
      "(C) realizar colecistectomia laparoscópica imediatamente, sem necessidade de outros exames ou intervenções.",
      "(D) indicar colangiopancreatografia retrógrada endoscópica (CPRE) para remoção dos cálculos na via biliar principal."
    ],
    "correctAnswer": 3,
    "explanation": "Icterícia colestática com dilatação de vias biliares e cálculo no colédoco à colangiorressonância: coledocolitíase. A conduta é desobstruir a via biliar com CPRE e papilotomia, e depois fazer colecistectomia (de preferência na mesma internação).",
    "commentary": "Antibiótico e observação (A): não remove o cálculo; o risco de colangite e pancreatite persiste.\n\nTomografia (B): a colangiorressonância já confirmou o diagnóstico.\n\nColecistectomia isolada (C): não resolve o cálculo no colédoco, a menos que se faça exploração da via biliar.",
    "reference": "Sabiston Tratado de Cirurgia / ASGE — Coledocolitíase (2019)",
    "tags": [
      "cirurgia geral",
      "coledocolitíase",
      "CPRE",
      "icterícia obstrutiva"
    ],
    "tip": "Cálculo no colédoco confirmado: CPRE antes da colecistectomia."
  },
  {
    "id": "revalida-2025-1-53",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Menina de 11 meses, nascida a termo é levada para avaliação médica pois a mãe está preocupada com o desenvolvimento da criança: está mais irritada, não senta sem apoio, não engatinha, e dorme pouco. A alimentação consiste de aleitamento materno complementado com a dieta da família, que é vegana. Faz suplementação de vitamina D (400 UI ao dia). O hemograma da criança revela leucócitos totais normais e diferencial de células sem alterações, além dos seguintes achados:\n\n• Hemoglobina (Hb): 9,5 g/dL (VR: 10,5 a 13,5 g/dL)\n• Hematócrito (Ht): 34% (VR: 33 a 39%)\n• Volume corpuscular médio (VCM): 101 fL (VR: 70 a 86 fL)\n• Hemoglobina corpuscular média (HCM): 23 pg (VR: 23 a 31 pg)\n• Plaquetas: 120.000/mm³ (VR: 200.000 a 500.000/mm³)\n\nConsiderando o quadro descrito, a conduta adequada para essa criança é",
    "options": [
      "(A) solicitar avaliação de nutricionista e iniciar suplementação de vitamina A e vitamina C.",
      "(B) iniciar suplementação de ferro e vitamina B12 e solicitar acompanhamento com fisioterapia.",
      "(C) encaminhar para neurologista infantil e iniciar suplementação de ácido fólico e de vitamina B12.",
      "(D) aumentar a dose de suplementação de vitamina D, iniciar ferro e manter acompanhamento de rotina."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente em dieta vegana com aleitamento materno (provavelmente de mãe vegana), com anemia macrocítica, plaquetopenia e atraso motor: deficiência de vitamina B12, que causa anemia megaloblástica e dano neurológico. Há também risco de deficiência de ferro pela dieta. A conduta é repor B12 (e ferro) e estimular o desenvolvimento com fisioterapia.",
    "commentary": "Vitaminas A e C (A): não corrigem o quadro.\n\nNeurologista e ácido fólico (C): ácido fólico isolado pode corrigir a anemia e mascarar o agravamento neurológico da falta de B12.\n\nAumentar vitamina D (D): não há indicação; o problema é B12.",
    "reference": "SBP — Guia prático de dietas vegetarianas na infância / Tratado de Pediatria",
    "tags": [
      "pediatria",
      "anemia megaloblástica",
      "vitamina B12",
      "dieta vegana"
    ],
    "tip": "Lactente de mãe vegana com anemia macrocítica e atraso motor = falta de B12."
  },
  {
    "id": "revalida-2025-1-54",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 54 anos procura a unidade de pronto atendimento (UPA) com queixa de dor pélvica e de sangramento vaginal ativo, há 2 dias. Relata preocupação, pois não menstruava há 4 anos. Relata que a menopausa ocorreu aos 50 anos e que tem diabetes mellitus tipo 2, tratada com metformina desde os 41 anos. É sedentária, não fuma e nunca ingeriu bebidas alcoólicas. Apresentou os exames de mamografia e citologia de colo uterino, realizados há 4 meses, que mostraram BIRADS 2 bilateral na mamografia e citologia dentro dos limites da normalidade. Ao exame físico, a paciente encontra-se em bom estado geral, orientada, corada, com pressão arterial de 120 x 70 mmHg, frequência cardíaca de 69 bpm e índice de massa corporal (IMC) de 32,3 kg/m². O exame especular revela pequeno sangramento vermelho vivo, saindo pelo orifício cervical externo, com colo do útero atrófico e sem lesões visíveis. O hemograma realizado na UPA revela os seguintes resultados:\n\n• Hemoglobina: 12,7 g/dL (VR: 11,5 a 14,8 g/dL)\n• Hematócrito: 38% (VR: 35,4 a 45,9 %)\n• Leucócitos: 7.800/mm³ (VR: 3.143 a 10.074/mm³)\n• Plaquetas: 324.000/mm³ (VR: 135.606 a 343.044/mm³)\n\nConsiderando o caso descrito, a conduta adequada é",
    "options": [
      "(A) solicitar ultrassonografia transvaginal e orientar o retorno à unidade básica de saúde.",
      "(B) solicitar ressonância magnética de pelve e orientar que a paciente procure um ginecologista.",
      "(C) solicitar histeroscopia cirúrgica e orientar a paciente que procure uma unidade básica para ser referenciada.",
      "(D) encaminhar a paciente para hospital, com urgência, para realizar curetagem uterina para controle e avaliação do sangramento."
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento pós-menopausa em mulher obesa, estável e sem anemia: o primeiro passo é ultrassonografia transvaginal para medir o eco endometrial (> 4–5 mm indica biópsia/histeroscopia), com retorno à UBS para seguimento. O sangramento é pequeno, sem indicação de intervenção de urgência.",
    "commentary": "Ressonância (B): não é exame inicial.\n\nHisteroscopia cirúrgica direta (C): vem depois da ultrassonografia, se o endométrio estiver espessado.\n\nCuretagem de urgência (D): não há sangramento volumoso nem instabilidade.",
    "reference": "Febrasgo — Sangramento pós-menopausa / Câncer de endométrio",
    "tags": [
      "ginecologia",
      "sangramento pós-menopausa",
      "câncer de endométrio",
      "ultrassonografia transvaginal"
    ],
    "tip": "Sangramento pós-menopausa: USG transvaginal; endométrio > 4 mm vai para biópsia."
  },
  {
    "id": "revalida-2025-1-55",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Homem de 61 anos procura uma unidade básica de saúde (UBS) de uma cidade grande desejando receber um pedido para colonoscopia, pois ouviu que é um exame preventivo necessário após os 50 anos de idade para detecção de câncer do intestino. Questionado pela médica da UBS, o paciente relata que não apresenta sintomas gastrointestinais, anemia, perda de peso ou histórico familiar de câncer de intestino.\n\nConsiderando-se que neste município existe ampla disponibilidade de recursos diagnósticos, e\n\nlevando em conta as políticas públicas do Ministério da Saúde para rastreamento, que conduta inicial a médica deverá adotar nesse caso?",
    "options": [
      "(A) Fornecer o pedido de colonoscopia para diagnóstico precoce ao paciente, para que ele busque realizar o exame no SUS por meio de ação judicial.",
      "(B) Solicitar colonoscopia para diagnóstico precoce e informar o paciente da possível demora para sua realização, visto que não há suspeita de câncer.",
      "(C) Solicitar exame de sangue oculto nas fezes, informando o paciente de que se trata de um exame indicado pelo SUS para rastreio de câncer do intestino.",
      "(D) Esclarecer que o SUS não prevê a realização de colonoscopia para rastreio de câncer de intestino e orientar o paciente a realizar o exame no setor privado."
    ],
    "correctAnswer": 2,
    "explanation": "O Ministério da Saúde não estabelece programa de rastreamento populacional organizado do câncer colorretal, mas, quando se rastreia, o exame preconizado para adultos de 50 a 75 anos é a pesquisa de sangue oculto nas fezes (de preferência imunoquímico); a colonoscopia fica para os resultados positivos. O médico deve explicar isso e solicitar o exame de sangue oculto.",
    "commentary": "Pedido de colonoscopia via ação judicial (A) ou com demora (B): a colonoscopia não é o exame inicial de rastreio no SUS.\n\nOrientar o setor privado (D): o SUS oferece o rastreio com sangue oculto.",
    "reference": "INCA — Detecção precoce do câncer colorretal / Ministério da Saúde",
    "tags": [
      "saúde coletiva",
      "rastreamento",
      "câncer colorretal",
      "sangue oculto nas fezes"
    ],
    "tip": "Rastreio de câncer colorretal no SUS: sangue oculto nas fezes; colonoscopia se positivo."
  },
  {
    "id": "revalida-2025-1-56",
    "topography": "10",
    "topic": "Raiva",
    "module": "Saúde Coletiva",
    "text": "Homem de 50 anos, agricultor, procura atendimento médico na unidade básica de saúde (UBS) após mordedura de boi em antebraço esquerdo. A ferida é superficial, está limpa e apresenta sangramento local leve. O paciente relata que o animal não possui manifestações aparentes de raiva. Ele também afirma que o boi é de propriedade conhecida e pode ser mantido sob observação. Quando questionado, o paciente revela não ter histórico de vacinação prévia contra raiva.\n\nConsiderando a profilaxia da raiva humana, deve-se limpar a ferida e",
    "options": [
      "(A) observar o animal por 10 dias antes de decidir por qualquer intervenção adicional.",
      "(B) dispensar observação do animal e liberar o paciente sem vacina antirrábica.",
      "(C) iniciar imediatamente o esquema completo de vacinação antirrábica.",
      "(D) administrar imediatamente soro antirrábico."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo protocolo de profilaxia da raiva, a observação do animal por 10 dias só vale para cães e gatos. Herbívoros de produção (boi, cavalo) não são observados. Mordedura superficial em membro (exposição leve) por animal de produção sem sintomas: lavar a ferida e iniciar o esquema de vacinação antirrábica (4 doses: dias 0, 3, 7 e 14), sem soro.",
    "commentary": "Observar o animal (A): não se aplica a herbívoros.\n\nDispensar a profilaxia (B): o boi é mamífero potencialmente transmissor.\n\nSoro antirrábico (D): reservado para exposições graves.",
    "reference": "Ministério da Saúde — Protocolo de profilaxia pré, pós e reexposição da raiva humana (2022)",
    "tags": [
      "infectologia",
      "raiva",
      "profilaxia pós-exposição",
      "acidente com animais"
    ],
    "tip": "Observação de 10 dias só para cão e gato."
  },
  {
    "id": "revalida-2025-1-57",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 24 anos é atendido no serviço de emergência 20 minutos após ferimento por arma de fogo. O orifício de entrada do projetil localiza-se 2 cm lateralmente à linha hemiclavicular direita, ao nível do quarto espaço intercostal. O paciente apresenta pressão arterial de 120 x 82 mmHg, frequência cardíaca de 110 bpm e frequência respiratória de 19 irpm. O médico que o atende observa o seguinte: paciente normocorado e cooperativo; murmúrios vesiculares diminuídos em hemitórax direito; macicez diffusa à percussão; e ausência do frêmito tóraco-vocal nesse mesmo lado do tórax. Durante a avaliação inicial, é realizada reposição volêmica, oferta-se oxigênio suplementar, são colhidos exames laboratoriais e é administrado ácido tranexâmico.\n\nNessa situação, assinale a alternativa que apresenta o procedimento adequado a ser realizado.",
    "options": [
      "(A) Toracotomia exploradora para retirada do projetil alojado no tórax.",
      "(B) Toracocentese com agulha grossa, no segundo espaço intercostal direito.",
      "(C) Drenagem pleural no quinto espaço intercostal, entre linha axilar anterior e média.",
      "(D) Drenagem pleural por meio do orifício de entrada do projétil, em aspiração contínua."
    ],
    "correctAnswer": 2,
    "explanation": "Ferimento por arma de fogo no tórax com murmúrio reduzido, macicez à percussão e frêmito abolido no mesmo lado: hemotórax (o pneumotórax daria hipertimpanismo). Com o paciente estável, o tratamento é drenagem pleural fechada no 5º espaço intercostal, entre as linhas axilares anterior e média. Toracotomia fica para drenagem inicial > 1.500 mL ou > 200 mL/h por 2–4 horas, ou instabilidade.",
    "commentary": "Toracotomia para retirar o projétil (A): não está indicada só para retirar o projétil.\n\nPunção no 2º espaço (B): é para pneumotórax hipertensivo.\n\nDrenar pelo orifício do projétil (D): aumenta o risco de infecção e mau posicionamento.",
    "reference": "ATLS 10ª ed. — Trauma torácico",
    "tags": [
      "trauma",
      "hemotórax",
      "drenagem torácica",
      "trauma torácico"
    ],
    "tip": "Hemotórax: macicez. Pneumotórax: timpanismo. Dreno no 5º EIC, axilar anterior/média."
  },
  {
    "id": "revalida-2025-1-58",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menino de 10 anos, em atendimento ambulatorial, apresenta tosse persistente que o desperta à noite frequentemente, além de chiado no peito, de forma intermitente, há cerca de 10 meses. Os sintomas pioram durante a realização de atividades físicas, como correr e jogar futebol. Teve 2 crises recentes de “chiadeira” e cansaço, necessitando ir ao serviço de urgência. Foi diagnosticado com asma aos 5 anos e é medicado com salbutamol inalatório nos episódios de crise. A função pulmonar revela VEF1 de 70% do previsto, VEF1/CVF igual a 0,8 e aumento de 15% após uso de broncodilatador.\n\nEntre as opções a seguir, a indicação terapêutica adequada para o caso é",
    "options": [
      "(A) antileucotrieno via oral diariamente, associado a corticoide por via inalatória durante as exacerbações.",
      "(B) beta-agonista de longa duração (LABA), corticoide inalatório para alívio dos sintomas e beta agonista de resgate durantes as crises.",
      "(C) corticoide oral associado a beta-agonista de curta duração (SABA) para alívio dos sintomas durante as exacerbações.",
      "(D) beta-agonista de longa duração (LABA) e corticoide oral nas crises, além de brometo de ipratrópio durante as exacerbações."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 10 anos com sintomas noturnos frequentes, limitação aos exercícios, crises recentes com ida ao pronto-socorro, VEF1 de 70% e só usando SABA: asma não controlada. Deve-se iniciar tratamento de manutenção com corticoide inalatório associado a LABA (step 3–4 do GINA), com broncodilatador de resgate.",
    "commentary": "Antileucotrieno com corticoide só nas crises (A): o corticoide inalatório deve ser de manutenção.\n\nCorticoide oral com SABA (C): corticoide oral é só para crise; falta controle de base.\n\nLABA sem corticoide inalatório (D): LABA isolado é contraindicado na asma.",
    "reference": "GINA 2024 / SBP — Asma",
    "tags": [
      "pediatria",
      "asma",
      "corticoide inalatório",
      "LABA"
    ],
    "tip": "Nunca LABA sozinho na asma: sempre com corticoide inalatório."
  },
  {
    "id": "revalida-2025-1-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher procura orientação na atenção primária preocupada com risco de câncer de mama. Pede orientação sobre quando deve iniciar rastreamento por mamografia. Relata que sua mãe teve câncer de mama aos 45 anos. Está assintomática e suas mamas não apresentam anormalidades ao exame.\n\nNesse caso, considerando-se o uso racional de exames complementares e a segurança da paciente, qual é a conduta mais adequada?",
    "options": [
      "(A) Manter realização de exame clínico das mamas anualmente, sem a necessidade de exames complementares, e iniciar avaliação por mamografia após os 40 anos.",
      "(B) Iniciar rastreamento com mamografia a partir dos 40 anos, realizado a cada 2 anos, conforme recomendação para a população geral, devido à ausência de sintomas.",
      "(C) Manter acompanhamento clínico regular anual e iniciar mamografia após os 50 anos, uma vez que a paciente está assintomática e sem sinais clínicos de câncer.",
      "(D) Iniciar rastreamento com mamografia a partir dos 35 anos, uma vez que o histórico de câncer de mama em parente de primeiro grau antes dos 50 anos justifica o início precoce do rastreamento."
    ],
    "correctAnswer": 3,
    "explanation": "Mãe com câncer de mama aos 45 anos (parente de primeiro grau antes dos 50 anos) coloca a paciente em risco elevado. Pelo consenso do Ministério da Saúde/INCA, mulheres de alto risco devem fazer exame clínico das mamas e mamografia anuais a partir dos 35 anos.",
    "commentary": "Mamografia após 40 (A e B) ou após 50 anos (C): são recomendações para risco habitual; não se aplicam a quem tem mãe com câncer de mama antes dos 50.",
    "reference": "INCA — Diretrizes para detecção precoce do câncer de mama (2015) / Consenso para controle do câncer de mama (2004)",
    "tags": [
      "ginecologia",
      "câncer de mama",
      "rastreamento",
      "alto risco familiar"
    ],
    "tip": "Parente de 1º grau com câncer de mama antes dos 50: mamografia anual a partir dos 35."
  },
  {
    "id": "revalida-2025-1-60",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Criança de 6 meses e 15 dias é levada pela mãe para uma consulta de puericultura com a médica de família e comunidade devido à dificuldade de introdução alimentar, pois apresenta baixa aceitação das papas de frutas e de legumes. A mãe relata preocupação, pois o\n\ndesenvolvimento da criança tem sido diferente da experiência que teve com o primeiro filho, que aceitou rapidamente as primeiras papas introduzidas aos 6 meses. A médica, então, revisa o prontuário e identifica que, em avaliações anteriores, a criança não apresentava sorriso social e não vocalizava nenhum tipo de som. Esses achados foram confirmados nesta consulta.\n\nDiante desse quadro, a conduta médica apropriada é",
    "options": [
      "(A) realizar o M-CHAT (Modified Children’s Autism Test) e, se o resultado for positivo, encaminhar a criança para avaliação multidisciplinar.",
      "(B) levar em consideração a preocupação da mãe sobre o desenvolvimento da criança e investigar fatores de risco sociofamiliares e sinais de alerta.",
      "(C) aplicar o protocolo de observação para diagnóstico de Transtorno do Espectro Autista (TEA) a fim de diferenciar a suspeita de autismo e de outras deficiências.",
      "(D) encaminhar a criança ao neurologista para avaliação clínica e para a solicitação de exames de imagem, a fim de investigar o atraso de desenvolvimento."
    ],
    "correctAnswer": 1,
    "explanation": "A mãe percebe diferença no desenvolvimento, e a criança não tem sorriso social nem vocaliza: são sinais de alerta. A conduta inicial é valorizar a preocupação dos pais e fazer avaliação ampla — sinais de alerta do desenvolvimento e fatores de risco sociofamiliares — antes de rotular. O M-CHAT é validado a partir de 16 meses e, se houver atraso global, a investigação é mais ampla.",
    "commentary": "M-CHAT (A): é validado para 16 a 30 meses; a criança é mais nova.\n\nProtocolo diagnóstico de TEA (C): o diagnóstico de TEA não se fecha nessa idade nem é o primeiro passo.\n\nNeurologista e imagem (D): o encaminhamento pode vir depois, mas exame de imagem não é o passo inicial.",
    "reference": "Ministério da Saúde — Caderneta da Criança / SBP — Transtorno do espectro autista",
    "tags": [
      "pediatria",
      "desenvolvimento neuropsicomotor",
      "sinais de alerta",
      "transtorno do espectro autista"
    ],
    "tip": "Preocupação dos pais com o desenvolvimento é sinal de alerta: sempre investigue."
  },
  {
    "id": "revalida-2025-1-61",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos é encaminhado a um hospital para investigação de febre persistente. Na história patológica pregressa, o paciente apresenta diagnóstico de retocolite ulcerativa. À fundoscopia direita, é identificada lesão arredondada com borda eritematosa e centro pálido, medindo cerca de 8 mm diâmetro. Durante o exame físico, além de palidez cutaneomucosa leve e sopro cardíaco sistólico de baixa intensidade, são constatadas hemorragias subungueais em alguns quirodáctilos.\n\nCom base nesses achados clínicos, a hipótese diagnóstica mais provável é de",
    "options": [
      "(A) endocardite infecciosa.",
      "(B) leucemia mieloide aguda.",
      "(C) vaculite leucocitoclástica.",
      "(D) lúpus eritematoso sistêmico."
    ],
    "correctAnswer": 0,
    "explanation": "Febre persistente com sopro, hemorragias subungueais em lasca e lesão retiniana com centro pálido (mancha de Roth) são achados clássicos de endocardite infecciosa. A doença inflamatória intestinal se associa a bacteremia por Streptococcus gallolyticus/bovis (ligada a doença colônica). Investigar com hemoculturas seriadas e ecocardiograma.",
    "commentary": "Leucemia aguda (B): pode ter manchas de Roth e palidez, mas hemorragias em lasca e sopro novo apontam para endocardite.\n\nVasculite leucocitoclástica (C): púrpura palpável, sem esse conjunto.\n\nLúpus (D): pode ter endocardite de Libman-Sacks, mas o quadro febril com esses estigmas é de endocardite infecciosa.",
    "reference": "Diretriz Brasileira de Valvopatias (SBC) / Critérios de Duke-ISCVID 2023",
    "tags": [
      "cardiologia",
      "endocardite infecciosa",
      "manchas de Roth",
      "critérios de Duke"
    ],
    "tip": "Febre + sopro + lesões em lasca/Janeway/Osler/Roth = endocardite."
  },
  {
    "id": "revalida-2025-1-62",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Homem de 41 anos, após queda de altura de 5 metros, foi levado a um hospital terciário com traumatismo cranioencefálico grave. O paciente foi submetido à neurocirurgia para drenagem de hematoma extradural e evoluiu com internação em unidade de terapia intensiva (UTI), onde permaneceu por 60 dias. Após esse período, ele faleceu por complicações associadas a sepse.\n\nNessa situação, qual deve ser a conduta da equipe da UTI em relação à emissão do atestado de óbito?",
    "options": [
      "(A) Fornecer o atestado de óbito, o que é responsabilidade da equipe médica que coordena e chefia a UTI.",
      "(B) Encaminhar o corpo ao Instituto Médico Legal (IML), que tem a responsabilidade de emitir o atestado de óbito.",
      "(C) Encaminhar o corpo para o Serviço de Verificação de Óbito (SVO), que deverá realizar a necrópsia e a emissão do atestado.",
      "(D) Fornecer o atestado de óbito, o que é responsabilidade da equipe médica que estava de plantão na UTI no momento do óbito."
    ],
    "correctAnswer": 1,
    "explanation": "Morte por causa externa (violenta), mesmo tardia e por complicação (sepse) do trauma, mantém a natureza violenta: o atestado de óbito é feito pelo médico-legista do IML após necropsia. O médico assistente não deve emitir a declaração.",
    "commentary": "Equipe da UTI (A e D): só atestam óbitos por causa natural.\n\nSVO (C): investiga mortes naturais sem causa definida.",
    "reference": "Resolução CFM 1.779/2005 / Ministério da Saúde — Declaração de óbito: manual de instruções",
    "tags": [
      "ética médica",
      "declaração de óbito",
      "IML",
      "causa externa"
    ],
    "tip": "Morte violenta (mesmo tardia) = IML. Natural sem causa definida = SVO."
  },
  {
    "id": "revalida-2025-1-63",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Menino de 4 anos é levado a uma unidade de pronto atendimento (UPA) devido a dor abdominal e constipação. A mãe relata que a criança vem apresentando constipação importante desde o desfralde, que foi realizado antes dos dois anos de idade, com evacuações a cada 4 dias, fezes em cíbalos, esforço evacuatório e dor. O exame físico revela massa palpável em fossa ilíaca esquerda e dor abdominal difusa.\n\nNesse caso, a conduta inicial adequada é",
    "options": [
      "(A) solicitar radiografia de abdome e coprológico funcional.",
      "(B) indicar desimpactação retal com lactulose e óleo mineral.",
      "(C) orientar sobre alimentação, ingesta hídrica e treinamento de toalete.",
      "(D) indicar desimpactação fecal com enema retal ou polietilenoglicol por via oral."
    ],
    "correctAnswer": 3,
    "explanation": "Constipação funcional com fecaloma (massa em fossa ilíaca esquerda). Antes da manutenção, é preciso desimpactar: polietilenoglicol oral em dose alta (1–1,5 g/kg/dia por 3–6 dias) ou enema retal. Depois vem a manutenção com PEG, dieta, água e treinamento de toalete.",
    "commentary": "Radiografia e coprológico (A): o diagnóstico é clínico; não são necessários.\n\nLactulose e óleo mineral para desimpactar (B): são laxativos de manutenção, não de desimpactação.\n\nSó orientação (C): é parte da manutenção, mas não resolve o fecaloma.",
    "reference": "NASPGHAN/ESPGHAN — Constipação funcional na criança (2014) / SBP",
    "tags": [
      "gastroenterologia pediátrica",
      "constipação funcional",
      "fecaloma",
      "polietilenoglicol"
    ],
    "tip": "Fecaloma: primeiro desimpacta (PEG em dose alta ou enema), depois mantém."
  },
  {
    "id": "revalida-2025-1-64",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta com idade gestacional de 38 semanas procura a maternidade. Realizou pré-natal regular e todos os seus exames estão dentro da normalidade. Relata sentir ansiedade porque a data provável do parto se aproxima e ela ainda não tem sinais do início do trabalho de parto. Diante disso, expressa desejo de realizar uma cesariana para evitar possíveis complicações. Ao exame clínico, não foram identificadas alterações.\n\nNesse caso, a conduta mais adequada é",
    "options": [
      "(A) conversar sobre os riscos da cesariana e, caso a paciente mantenha o desejo de realizá-la, agendar o procedimento a partir de 39 semanas de gestação.",
      "(B) expor que, devido aos maiores riscos da cesariana, o parto vaginal é a via de parto indicada em gestações de baixo risco e que, por isso, é inviável optar pela cesariana.",
      "(C) explicar que, em gestações de baixo risco, a cesariana por desejo materno só pode ser realizada antes do início do trabalho de parto, a partir de 41 semanas de gestação.",
      "(D) orientar sobre os riscos da cesariana e, caso a paciente mantenha o desejo de realizá-la, fazer o procedimento imediatamente, posto que a autonomia da gestante deve ser garantida."
    ],
    "correctAnswer": 0,
    "explanation": "A Resolução CFM 2.144/2016 garante à gestante o direito de optar pela cesariana em gestação de risco habitual, desde que bem informada sobre riscos e benefícios e que o procedimento seja feito a partir de 39 semanas completas, para reduzir a morbidade respiratória neonatal. O médico deve orientar e, se mantido o desejo, agendar após 39 semanas.",
    "commentary": "Inviável optar (B): a cesariana a pedido é permitida.\n\nSó a partir de 41 semanas (C): o limite é 39 semanas.\n\nImediatamente com 38 semanas (D): antes de 39 semanas aumenta o risco neonatal.",
    "reference": "Resolução CFM 2.144/2016 / Ministério da Saúde — Diretriz de atenção à gestante: operação cesariana",
    "tags": [
      "obstetrícia",
      "cesariana a pedido",
      "autonomia",
      "via de parto"
    ],
    "tip": "Cesárea a pedido: consentimento informado e só a partir de 39 semanas."
  },
  {
    "id": "revalida-2025-1-65",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos vai à unidade básica de saúde (UBS) relatando parto há 15 dias e desejo\n\nde inserção de DIU.\n\nNesse caso, assinale a alternativa que indica o momento da inserção e o principal mecanismo de ação do DIU de cobre.",
    "options": [
      "(A) A partir de 12 semanas após o parto; inibição da nidação ovular devido à alta concentração de cobre e afinamento do endométrio.",
      "(B) De forma imediata no ambulatório de Ginecologia; espessamento do muco cervical, dificultando a mobilidade dos espermatozoides.",
      "(C) No período de 4 a 6 semanas após o parto; ação inflamatória e citotóxica no endométrio pela liberação de íons de cobre na cavidade uterina.",
      "(D) De forma imediata na UBS; concentração de cobre no muco cervical, o que o torna mais fluido, inibindo a mobilidade dos espermatozoides."
    ],
    "correctAnswer": 2,
    "explanation": "O DIU pode ser inserido no pós-parto imediato (até 48 horas, ainda na maternidade) ou a partir de 4–6 semanas, quando a involução uterina diminui o risco de expulsão e perfuração. Aos 15 dias pós-parto, deve-se aguardar até 4–6 semanas. O DIU de cobre age por reação inflamatória estéril e efeito citotóxico dos íons de cobre, que são espermicidas e impedem a fertilização.",
    "commentary": "12 semanas e inibição da nidação (A): o tempo está errado e o principal mecanismo é pré-fertilização.\n\nInserção imediata (B e D): fora da janela pós-placentária, aos 15 dias há maior risco de expulsão/perfuração; o espessamento do muco é do DIU hormonal.",
    "reference": "OMS — Critérios médicos de elegibilidade (2015) / Febrasgo — DIU",
    "tags": [
      "ginecologia",
      "contracepção",
      "DIU de cobre",
      "pós-parto"
    ],
    "tip": "DIU pós-parto: até 48 h ou após 4–6 semanas."
  },
  {
    "id": "revalida-2025-1-66",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Mulher de 57 anos com diagnóstico de diabetes mellitus há 10 anos e uso regular de metformina 2 g/dia e gliclazida 60 mg/dia comparece à unidade básica de saúde (UBS). Durante a consulta, a pressão arterial média, aferida em 3 medições consecutivas com intervalos de 1 minuto, é de 154 x 94 mmHg. Ao revisar o prontuário, o médico observa que, nas últimas 3 consultas, os níveis pressóricos registrados também estavam acima de 140 x 90 mmHg . Além disso, o médico verifica exame prévio de albuminúria de 50 mg/g de creatinina (valor de referência: < 30 mg/g de creatinina).\n\nDe acordo com a Diretriz Brasileira de Hipertensão e com base nesse quadro clínico e laboratorial, a conduta terapêutica inicial mais adequada para o tratamento da hipertensão consiste na prescrição de",
    "options": [
      "(A) betabloqueador.",
      "(B) diurético.",
      "(C) inibidor da enzima de conversão.",
      "(D) bloqueador de canal de cálcio."
    ],
    "correctAnswer": 2,
    "explanation": "Hipertensão confirmada (estágio 1–2) com lesão de órgão-alvo: albuminúria moderadamente aumentada (30–300 mg/g). Nessa situação, a Diretriz Brasileira de Hipertensão recomenda bloqueio do sistema renina-angiotensina (IECA ou BRA), que reduz a albuminúria e protege o rim.",
    "commentary": "Betabloqueador (A): não é primeira linha sem indicação específica (pós-IAM, IC, angina, arritmias).\n\nDiurético (B) e bloqueador de canal de cálcio (D): são primeira linha na hipertensão em geral, mas com albuminúria o IECA/BRA tem prioridade.",
    "reference": "Diretriz Brasileira de Hipertensão Arterial (2020/2025)",
    "tags": [
      "cardiologia",
      "hipertensão arterial",
      "albuminúria",
      "IECA"
    ],
    "tip": "Hipertenso com albuminúria: IECA ou BRA."
  },
  {
    "id": "revalida-2025-1-67",
    "module": "Pediatria",
    "text": "Menino de 4 anos é levado por sua mãe a uma unidade básica de saúde (UBS) para consulta. Ela refere que a criança apresenta, desde seu nascimento, uma tumoração no pescoço, cujo volume está aumentando. O exame físico releva tumoração arredondada de 1,5 cm de diâmetro, indolor, com pele íntegra, em linha média da região cervical anterior e móvel com o movimento de protrusão da língua. A mãe nega processos inflamatórios ou saída de secreção locais.\n\nConsiderando essa situação, assinale a alternativa que apresenta a principal hipótese diagnóstica.",
    "options": [
      "(A) Cisto dermoide.",
      "(B) Tireoide ectópica.",
      "(C) Higroma cístico.",
      "(D) Cisto tireoglosso."
    ],
    "correctAnswer": 3,
    "explanation": "Massa cervical na linha média, indolor, que sobe com a protrusão da língua (por estar ligada ao osso hioide/trato tireoglosso): cisto do ducto tireoglosso, a massa cervical congênita mais comum. O tratamento é cirurgia de Sistrunk (ressecção do cisto, do trajeto e do corpo do hioide), após ultrassonografia para confirmar tireoide tópica.",
    "commentary": "Cisto dermoide (A): também é de linha média, mas não se move com a protrusão da língua.\n\nTireoide ectópica (B): pode simular o cisto; por isso se faz ultrassonografia antes da cirurgia, mas não é a principal hipótese.\n\nHigroma cístico (C): linfangioma lateral, mole e transiluminável.",
    "reference": "Sabiston Tratado de Cirurgia — Cirurgia pediátrica: massas cervicais",
    "tags": [
      "cirurgia pediátrica",
      "massa cervical",
      "cisto tireoglosso"
    ],
    "tip": "Massa cervical mediana que sobe com a língua = cisto tireoglosso."
  },
  {
    "id": "revalida-2025-1-68",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Menino de 4 anos é levado a unidade básica de saúde (UBS) por sua mãe, que relata que ele está com tosse persistente há mais de 3 semanas, febre baixa no final da tarde, cansaço e perda de apetite. Além dos pais, o menino reside também com o avô diagnosticado com tuberculose há 2 meses.\n\nCom base nos protocolos do Ministério da Saúde, a conduta para este caso é",
    "options": [
      "(A) prescrever antibióticos de amplo espectro para tratar a tosse e solicitar retorno em 15 dias para avaliar se há melhora dos sintomas.",
      "(B) iniciar tratamento empírico para tuberculose mesmo sem confirmação diagnóstica, haja vista o histórico de contato e os sintomas apresentados.",
      "(C) solicitar radiografia de tórax e prova tuberculínica e explicar à família que esses exames são fundamentais para o diagnóstico de tuberculose pulmonar.",
      "(D) solicitar hemograma e radiografia de tórax para investigar tuberculose pulmonar e manter o menino afastado do avô até que este complete 6 meses de tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com tosse > 3 semanas, febre vespertina, astenia e inapetência, contato domiciliar com adulto com tuberculose. Em crianças, a baciloscopia costuma ser negativa (doença paucibacilar), e o diagnóstico usa o sistema de pontuação do Ministério da Saúde, que combina clínica, contato, radiografia de tórax, prova tuberculínica e estado nutricional. Por isso, solicita-se radiografia de tórax e prova tuberculínica (PPD).",
    "commentary": "Antibiótico de amplo espectro (A): atrasa o diagnóstico de tuberculose.\n\nTratamento empírico sem avaliação (B): é preciso aplicar o escore antes de tratar.\n\nAfastar do avô por 6 meses (D): o adulto deixa de transmitir poucas semanas após iniciar o tratamento; o afastamento não é recomendado.",
    "reference": "Ministério da Saúde — Manual de recomendações para o controle da tuberculose (2019)",
    "tags": [
      "pediatria",
      "tuberculose na infância",
      "escore de pontos",
      "prova tuberculínica"
    ],
    "tip": "TB na criança: escore de pontos (clínica + contato + RX + PPD + nutrição)."
  },
  {
    "id": "revalida-2025-1-69",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta com idade gestacional de 18 semanas comparece à consulta na unidade básica de saúde (UBS) para iniciar seu pré-natal. Está assintomática e, ao exame clínico, não são identificadas alterações. A paciente, no entanto, relata que entrou em trabalho de parto espontâneo com 32 semanas em sua primeira gestação.\n\nConsiderado o caso descrito, é indicado prescrever",
    "options": [
      "(A) indometacina por via oral diariamente.",
      "(B) pessário vaginal, após 22 semanas de gestação.",
      "(C) progesterona por via intramuscular semanalmente.",
      "(D) progesterona natural micronizada por via vaginal diariamente."
    ],
    "correctAnswer": 3,
    "explanation": "Antecedente de parto prematuro espontâneo é o principal fator de risco para nova prematuridade. Nessa situação, recomenda-se progesterona natural micronizada vaginal diária (200 mg) de 16 até 36 semanas, além de medir o colo uterino por ultrassonografia transvaginal no segundo trimestre.",
    "commentary": "Indometacina (A): é tocolítico usado no trabalho de parto prematuro, não na prevenção.\n\nPessário (B): é opção em colo curto, não indicação baseada só na história.\n\nProgesterona intramuscular semanal (C): o caproato de 17-hidroxiprogesterona não mostrou benefício consistente (estudo PROLONG) e não está disponível no Brasil.",
    "reference": "Febrasgo — Prevenção do parto prematuro / Ministério da Saúde — Gestação de alto risco (2022)",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "progesterona vaginal",
      "pré-natal"
    ],
    "tip": "Prematuro espontâneo prévio ou colo < 25 mm: progesterona vaginal."
  },
  {
    "id": "revalida-2025-1-70",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Mulher de 67 anos chega a uma unidade básica de saúde (UBS) acompanhada pelo filho. Ele relata que a mãe, há cerca de 30 minutos, passou a apresentar intensa dor de cabeça e dificuldade para falar. A paciente é hipertensa, faz uso de anti-hipertensivos, estatina e antiagregante plaquetário em dose profilática. Há 6 anos, sofreu um acidente vascular cerebral (AVC) sem sequelas. Durante o exame físico, pontuou 14 na Escala de Coma de Glasgow e apresentou seguintes sinais vitais:\n\n- Pressão arterial (PA): 150 x 95 mmHg - Frequência cardíaca (FC): 90 bpm - Frequência respiratória (FR): 20 irpm - Saturação de oxigênio: 95%\n\nNessa situação, qual é a conduta adequada a ser adotada pelo médico da UBS?",
    "options": [
      "(A) Estabilizar a paciente na sala de observação da UBS, ofertar anti-hipertensivo via oral para redução da PA e solicitar exames de imagem.",
      "(B) Acionar o Serviço Móvel de Urgência de imediato para encaminhamento ao serviço de urgência e estabilizar a paciente na UBS até a chegada da ambulância.",
      "(C) Administrar anti-hipertensivo sublingual e reavaliar a paciente após 30 minutos; caso não haja queda da PA, encaminhá-la para serviço de urgência.",
      "(D) Medicar a paciente, com o objetivo de reduzir a PA dentro de 24 a 48 horas, e realizar seguimento ambulatorial para avaliar se houve reversão dos sintomas."
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia intensa súbita e afasia há 30 minutos em hipertensa com AVC prévio: suspeita de AVC agudo (isquêmico ou hemorrágico). É emergência tempo-dependente: deve-se acionar o SAMU imediatamente para transferência a um centro com tomografia e possibilidade de trombólise/trombectomia, estabilizando a paciente enquanto isso. Não se reduz a pressão de forma agressiva na fase aguda.",
    "commentary": "Anti-hipertensivo oral e imagem a partir da UBS (A): atrasa o transporte e a redução da PA pode piorar a penumbra.\n\nAnti-hipertensivo sublingual (C): está contraindicado (queda brusca e imprevisível) e atrasa a transferência.\n\nSeguimento ambulatorial (D): ignora a emergência.",
    "reference": "Ministério da Saúde — Linha de cuidado do AVC / Diretrizes da SBDCV",
    "tags": [
      "neurologia",
      "AVC",
      "emergência",
      "atenção primária"
    ],
    "tip": "Suspeita de AVC na UBS: SAMU já. Tempo é cérebro."
  },
  {
    "id": "revalida-2025-1-71",
    "topography": "6.1",
    "topic": "Espondilite anquilosante",
    "module": "Clínica Médica",
    "text": "Homem de 45 anos com queixa de dor lombar, há 1 ano, é encaminhado da atenção primária para o ambulatório de reumatologia. O paciente é obeso, sedentário. Relata dor ao acordar e dificuldade de movimentação, que melhora após cerca de 2 horas. Utilizou diversos anti-inflamatórios não hormonais e analgésicos comuns, com melhora parcial e transitória. A radiografia de coluna lombar, realizada na unidade básica de saúde (UBS), revela redução de espaço L4-L5 com esclerose subcondral. O exame físico mostra uma redução na amplitude dos movimentos da coluna lombar, com um teste de Schober de 1 cm, e não há sinais de artrite ou de entesite.\n\nConsiderando o diagnóstico mais provável, quais são as condutas médicas específicas para o caso?",
    "options": [
      "(A) Solicitar o HLA-B37 e prescrever anti-inflamatórios hormonais.",
      "(B) Solicitar provas de atividades inflamatórias e ressonância magnética de sacroilíacas.",
      "(C) Orientar sobre ergonomia e prescrever anti-inflamatórios não hormonais sob demanda.",
      "(D) Orientar redução de peso, realização de sessões de fisioterapia e prescrever analgésicos opioides."
    ],
    "correctAnswer": 1,
    "explanation": "Homem jovem com dor lombar crônica de ritmo inflamatório (rigidez matinal prolongada que melhora com o movimento, resposta a AINE) e mobilidade lombar reduzida (Schober de 1 cm, normal ≥ 5 cm): suspeita de espondiloartrite axial. A investigação inclui provas inflamatórias (PCR, VHS) e ressonância de sacroilíacas, que detecta sacroileíte precoce antes da radiografia (também se pode pedir HLA-B27).",
    "commentary": "HLA-B37 e corticoide (A): o marcador é HLA-B27, e corticoide sistêmico não é tratamento da forma axial.\n\nErgonomia e AINE sob demanda (C): trata como lombalgia mecânica; falta investigar.\n\nOpioide (D): não é indicado; os AINEs em dose plena são a primeira linha.",
    "reference": "Sociedade Brasileira de Reumatologia — Espondiloartrites / Critérios ASAS",
    "tags": [
      "reumatologia",
      "espondiloartrite axial",
      "lombalgia inflamatória",
      "ressonância de sacroilíacas"
    ],
    "tip": "Lombalgia inflamatória: < 40 anos, início insidioso, melhora com exercício, piora com repouso, dor noturna."
  },
  {
    "id": "revalida-2025-1-72",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Lactente de 40 dias de vida, do sexo feminino, é levada para consulta por sua mãe. A criança tem história de icterícia e colúria progressivas desde a segunda semana de vida. Está em aleitamento materno, com boa aceitação e ganho ponderal, porém regurgita muito. A mãe relata que as fezes da bebê estão muito claras (acolia). O exame físico revela: paciente em bom estado geral; eutrófica; fígado de consistência firme, não nodular ou doloroso, a 3 cm do rebordo costal; baço a 1 cm do rebordo costal esquerdo.\n\nTendo em vista essa situação, assinale a alternativa que contém, respectivamente, a principal hipótese diagnóstica e a conduta adequada para o caso.",
    "options": [
      "(A) Icterícia não obstrutiva prolongada, com bom ganho ponderal; solicitar gama-GT e aminotransferases.",
      "(B) Icterícia obstrutiva prolongada por doença metabólica; substituir leite materno por fórmula e solicitar função hepática.",
      "(C) Icterícia não obstrutiva prolongada, relacionada ao aleitamento materno, com evolução benigna; adotar conduta expectante.",
      "(D) Icterícia obstrutiva prolongada por atresia biliar; encaminhar a criança urgentemente para avaliação diagnóstica e tratamento."
    ],
    "correctAnswer": 3,
    "explanation": "Icterícia com colúria e acolia desde a 2ª semana, com hepatomegalia endurecida, em lactente que ganha peso: colestase neonatal, e a principal hipótese é atresia de vias biliares. É urgência: a cirurgia de Kasai tem melhores resultados se feita antes de 45–60 dias de vida. Encaminhar imediatamente para investigação (ultrassonografia, cintilografia, biópsia) e tratamento.",
    "commentary": "Icterícia não obstrutiva (A e C): colúria e acolia indicam colestase (bilirrubina direta).\n\nDoença metabólica e trocar o leite (B): suspender o leite materno não é conduta e atrasa o diagnóstico da atresia.",
    "reference": "SBP — Colestase neonatal: alerta amarelo / Caderneta da Criança (escala de cor das fezes)",
    "tags": [
      "pediatria",
      "colestase neonatal",
      "atresia de vias biliares",
      "icterícia neonatal"
    ],
    "tip": "Acolia em bebê: atresia biliar até prova em contrário. Kasai antes de 60 dias."
  },
  {
    "id": "revalida-2025-1-73",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Menino de 10 meses é atendido em unidade básica de saúde (UBS) com história de febre alta iniciada há 4 dias (até 39 °C), com 3 picos por dia, inicialmente sem outros sintomas associados, evoluindo com exantema maculopapular em região cervical e tronco. Não apresentou febre nas últimas 18 horas.\n\nA respeito de possíveis diagnósticos diferenciais para o quadro apresentado, assinale a alternativa correta.",
    "options": [
      "(A) O diagnóstico de síndrome mão-pé-boca é mais provável, ainda que não tenham sido observadas vesículas na pele.",
      "(B) A anamnese e o exame físico exigem descartar laboratorialmente o diagnóstico diferencial de sarampo, pois se trata de menor de 1 ano.",
      "(C) A anamnese e o exame físico são suficientes para o diagnóstico de exantema súbito, não havendo indicação de exames complementares.",
      "(D) A presença de febre alta torna um quadro bacteriano mais provável, o que, associado à presença do exantema, sugere o diagnóstico de escarlatina."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 10 meses com febre alta por 3–4 dias, em bom estado, e exantema maculopapular surgindo no tronco e no pescoço depois que a febre cede: exantema súbito (roséola), causado pelo herpesvírus humano 6 (ou 7). O diagnóstico é clínico e não exige exames.",
    "commentary": "Mão-pé-boca (A): exige vesículas em mãos, pés e boca.\n\nSarampo (B): o exantema surge com febre alta, junto com tosse, coriza, conjuntivite e manchas de Koplik; aqui a febre já cedeu.\n\nEscarlatina (D): exantema áspero ('lixa') durante a febre, com faringite; é rara antes dos 3 anos.",
    "reference": "SBP — Doenças exantemáticas / Tratado de Pediatria",
    "tags": [
      "pediatria",
      "doenças exantemáticas",
      "exantema súbito",
      "herpesvírus 6"
    ],
    "tip": "Exantema que aparece quando a febre vai embora = exantema súbito."
  },
  {
    "id": "revalida-2025-1-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 35 anos procura atendimento na unidade básica de saúde com ultrassonografia transvaginal que revela uma imagem cística anecóica, em seu ovário direito, medindo aproximadamente 6 cm no maior diâmetro, com contornos regulares e paredes finas, sem septações, conteúdo sólido ou vascularização interna. A paciente está assintomática, possui ciclos menstruais regulares e fluxo normal. Nega doenças crônicas ou cirurgias prévias.\n\nDiante dessa situação, a conduta adequada é",
    "options": [
      "(A) realizar dosagem sanguínea do CA 125.",
      "(B) indicar acompanhamento ginecológico de rotina.",
      "(C) indicar realização de ressonância magnética da pelve.",
      "(D) repetir a ultrassonografia transvaginal em até 12 semanas."
    ],
    "correctAnswer": 3,
    "explanation": "Cisto ovariano simples (anecoico, paredes finas, sem septos, sólido ou fluxo) de 6 cm em mulher assintomática na menacme: provavelmente funcional e quase sempre benigno (O-RADS 2). Para cistos simples de 5 a 10 cm, recomenda-se repetir a ultrassonografia em 8–12 semanas, idealmente na fase folicular, para confirmar regressão.",
    "commentary": "CA-125 (A): não é indicado para cisto simples na menacme (muitos falsos positivos).\n\nSó rotina (B): cistos > 5 cm merecem reavaliação.\n\nRessonância (C): reservada para massas indeterminadas na ultrassonografia.",
    "reference": "ACR O-RADS US (2022) / Febrasgo — Massas anexiais",
    "tags": [
      "ginecologia",
      "massa anexial",
      "cisto ovariano simples",
      "O-RADS"
    ],
    "tip": "Cisto simples na menacme: < 5 cm nada; 5–10 cm repete USG em 8–12 semanas."
  },
  {
    "id": "revalida-2025-1-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 35 anos, contente por sua primeira gravidez, começa o pré-natal na unidade básica de saúde (UBS) de seu bairro. Durante a consulta de enfermagem, é identificado, no exame das mamas, um nódulo na mama direita. Quando informada sobre esse achado, a paciente relata que sua mãe teve câncer de mama aos 38 anos.\n\nDiante desse quadro, a conduta médica indicada é",
    "options": [
      "(A) requisitar biópsia do nódulo mamário guiada por ultrassonografia.",
      "(B) encaminhar a paciente para o ambulatório de gestação de alto risco.",
      "(C) solicitar ultrassonografia de mamas e considerar realização de mamografia com proteção abdominal.",
      "(D) aguardar o final da gestação para realizar investigação do nódulo a partir de ultrassonografia e de mamografia."
    ],
    "correctAnswer": 2,
    "explanation": "Nódulo mamário palpável na gestação deve ser investigado sem atraso: o câncer de mama associado à gestação costuma ser diagnosticado tardiamente. O primeiro exame é a ultrassonografia de mamas; a mamografia pode ser feita com proteção abdominal (dose fetal desprezível), e a biópsia por agulha grossa é segura se houver lesão suspeita. A história de mãe com câncer aos 38 anos aumenta a suspeita.",
    "commentary": "Biópsia direta (A): a biópsia vem depois da imagem, conforme a classificação do achado.\n\nAlto risco obstétrico (B): o nódulo não é fator de risco obstétrico; deve ser investigado pela mastologia.\n\nAguardar o fim da gestação (D): atrasa o diagnóstico de possível câncer.",
    "reference": "Febrasgo — Câncer de mama na gestação / INCA",
    "tags": [
      "ginecologia",
      "câncer de mama",
      "gestação",
      "nódulo mamário"
    ],
    "tip": "Nódulo na mama na gravidez: investigue já (USG; mamografia com proteção abdominal se precisar)."
  },
  {
    "id": "revalida-2025-1-76",
    "topography": "7.2",
    "topic": "Melanoma",
    "module": "Clínica Médica",
    "text": "Mulher branca de 47 anos comparece a consulta médica na unidade básica de saúde (UBS) queixando-se da presença de lesão escurecida, assimétrica e de bordas irregulares em antebraço esquerdo. Relata que, nas últimas quatro semanas, a lesão tem aumentado de tamanho e se tornado pruriginosa, com episódio de pequeno sangramento local.\n\nConsiderando a situação apresentada, a principal hipótese diagnóstica da paciente é",
    "options": [
      "(A) melanoma.",
      "(B) queratoacantoma.",
      "(C) carcinoma basocelular.",
      "(D) carcinoma espinocelular."
    ],
    "correctAnswer": 0,
    "explanation": "A lesão pigmentada preenche os critérios ABCDE do melanoma: assimetria, bordas irregulares, cores variadas (preto, marrom e áreas róseas na imagem), diâmetro grande e evolução (crescimento recente), além de prurido e sangramento. A conduta é biópsia excisional com margens estreitas para avaliar a espessura de Breslow.",
    "commentary": "Queratoacantoma (B): lesão nodular de crescimento rápido com cratera central de queratina, cor da pele.\n\nCarcinoma basocelular (C): pápula perolada com telangiectasias e ulceração central; pode ser pigmentado, mas não com esse padrão.\n\nCarcinoma espinocelular (D): placa ou nódulo queratósico em área fotoexposta, geralmente não pigmentado.",
    "reference": "Sociedade Brasileira de Dermatologia / INCA — Câncer de pele melanoma",
    "tags": [
      "dermatologia",
      "melanoma",
      "regra ABCDE",
      "lesão pigmentada"
    ],
    "image": "/images/revalida2025-1-76.webp",
    "tip": "ABCDE: Assimetria, Bordas, Cores, Diâmetro > 6 mm, Evolução."
  },
  {
    "id": "revalida-2025-1-77",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 36 anos é levado a um hospital terciário pelo Serviço Móvel de Urgência após queda de altura de 4 metros. No atendimento pré-hospitalar, o paciente evoluiu com rebaixamento do nível de consciência (7 na Escala de Coma de Glasgow) e intubação orotraqueal. Foi observado hematoma subcutâneo em região frontoparietal direita, sem outras lesões aparentes e sem nenhum tipo de hemorragia externa. O paciente não havia\n\ningerido álcool ou drogas, nem apresentava comorbidades.\n\nSegundo o ATLS, ao entrar na sala de emergência do hospital, qual deverá ser a conduta prioritária?",
    "options": [
      "(A) Realização de tomografia de crânio, tórax e abdome.",
      "(B) Administração de ácido tranexâmico e volume.",
      "(C) Avaliação das vias aéreas do paciente.",
      "(D) Estabilização da coluna cervical."
    ],
    "correctAnswer": 2,
    "explanation": "Mesmo com o paciente já intubado no pré-hospitalar, a avaliação primária no hospital recomeça pelo ABCDE: o primeiro passo é avaliar a via aérea — confirmar posição e fixação do tubo (capnografia, ausculta) e sua permeabilidade —, com proteção da coluna cervical.",
    "commentary": "Tomografias (A): só depois da avaliação primária e da estabilização.\n\nÁcido tranexâmico e volume (B): não há sinal de hemorragia; é parte do C.\n\nColuna cervical (D): é feita junto com o A, mas o foco prioritário é garantir a via aérea.",
    "reference": "ATLS 10ª ed.",
    "tags": [
      "trauma",
      "ATLS",
      "via aérea",
      "TCE grave"
    ],
    "tip": "Chegou intubado? Reavalie o tubo: o A sempre vem primeiro."
  },
  {
    "id": "revalida-2025-1-78",
    "topography": "11",
    "topic": "Púrpura de Henoch-Schönlein",
    "module": "Pediatria",
    "text": "Menino de 7 anos é levado à unidade de pronto atendimento com dor abdominal intensa e febre intermitente nos últimos 3 dias. Segundo relato da mãe, ele apresentou um quadro gripal há cerca de uma semana. Ao exame físico, o paciente apresenta púrpura palpável localizada principalmente nos membros inferiores e nas nádegas, além de edema nos tornozelos e dor nas articulações dos joelhos e cotovelos. A dor abdominal é difusa e não é aliviada com analgesia simples. Testes laboratoriais mostram proteinúria leve e hematúria microscópica.\n\nA hipótese diagnóstica, com justificativa correta para o caso, é",
    "options": [
      "(A) doença de Kawasaki; presença de febre e envolvimento articular.",
      "(B) artrite reumatoide juvenil; presença de febre, edema articular e dor.",
      "(C) lúpus eritematoso sistêmico; artralgia, púrpura palpável e achados urinários.",
      "(D) vasculite por imunoglobulina A; púrpura palpável, dor abdominal e achados urinários."
    ],
    "correctAnswer": 3,
    "explanation": "Criança após infecção de vias aéreas com púrpura palpável em membros inferiores e nádegas, artralgia/edema, dor abdominal e hematúria/proteinúria: vasculite por IgA (púrpura de Henoch-Schönlein), a vasculite mais comum da infância. O tratamento é de suporte, com acompanhamento renal.",
    "commentary": "Kawasaki (A): febre ≥ 5 dias com conjuntivite, alterações de mucosas e extremidades, linfonodo; não há púrpura palpável.\n\nArtrite idiopática juvenil (B): não explica púrpura, dor abdominal e nefrite.\n\nLúpus (C): raro nessa idade e não costuma ter púrpura palpável em nádegas e pernas.",
    "reference": "SBP / Critérios EULAR/PRINTO/PRES para vasculite por IgA",
    "tags": [
      "pediatria",
      "vasculite por IgA",
      "púrpura de Henoch-Schönlein",
      "reumatologia pediátrica"
    ],
    "tip": "Púrpura palpável em pernas e nádegas + abdome + articulações + rim = vasculite por IgA."
  },
  {
    "id": "revalida-2025-1-79",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Multípara de 43 anos, lactante no 2º mês de amamentação, procura atendimento afirmando área de hiperemia e dor no quadrante superior-lateral de mama esquerda, há 5 dias. Relata que, inicialmente, a área afetada era próxima à aréola e que depois foi se estendendo para a região axilar homolateral. Verifica-se ponto de flutuação e adenopatia dolorosa na axila esquerda. Paciente febril no momento do atendimento.\n\nDiante desse quadro, deve-se realizar",
    "options": [
      "(A) drenagem cirúrgica sobre o ponto de flutuação, com prosseguimento de amamentação em ambas as mamas.",
      "(B) drenagem com agulha fina guiada por ultrassonografia, com prosseguimento de amamentação pela mama contralateral.",
      "(C) antibioticoterapia durante 7 dias, com lactação mantida, desde que o leite produzido pela mama afetada seja fervido antes de oferecê-lo.",
      "(D) mamografia para descartar carcinoma inflamatório de mama, seguida de punção esvaziadora e de suspensão de amamentação até o resultado do anatomopatológico."
    ],
    "correctAnswer": 0,
    "explanation": "Lactante com mastite que evoluiu para abscesso mamário (área flutuante, febre, linfonodo axilar doloroso). O tratamento é drenagem do abscesso associada a antibiótico antiestafilocócico (cefalexina ou oxacilina), e a amamentação deve continuar, inclusive na mama afetada (o esvaziamento ajuda a resolver o quadro).",
    "commentary": "Drenagem por agulha com amamentação só na outra mama (B): a mama afetada pode continuar amamentando, salvo se a incisão estiver no trajeto da boca do bebê.\n\nAntibiótico isolado e ferver o leite (C): abscesso exige drenagem; ferver o leite é desnecessário.\n\nMamografia e suspensão da amamentação (D): o quadro é infeccioso típico; não há motivo para suspender.\n\nObservação: hoje a aspiração por agulha guiada por ultrassonografia é a primeira opção para abscessos menores, deixando a drenagem cirúrgica para os maiores ou com pele comprometida.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23 / Febrasgo — Mastite puerperal",
    "tags": [
      "obstetrícia",
      "abscesso mamário",
      "mastite",
      "aleitamento materno"
    ],
    "tip": "Mastite e abscesso: não suspenda a amamentação."
  },
  {
    "id": "revalida-2025-1-80",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Mulher comparece na unidade básica de saúde (UBS) com seus dois filhos, um menino de 8 anos e uma menina de 13 anos, buscando orientações quanto à vacinação contra o HPV.\n\nDiante desse quadro, qual a orientação correta?",
    "options": [
      "(A) O menino e a menina podem receber dose única nessa visita.",
      "(B) O menino e a menina podem receber a primeira dose nessa visita e agendar a segunda dose em 60 dias.",
      "(C) A menina não deve ser vacinada e o menino poderá receber a primeira dose ao completar 11 anos.",
      "(D) A menina pode ser vacinada em dose única nessa visita e não há indicação para que o filho seja vacinado agora."
    ],
    "correctAnswer": 3,
    "explanation": "Desde 2024 o Ministério da Saúde adota dose única da vacina HPV para meninas e meninos de 9 a 14 anos. A menina de 13 anos pode ser vacinada em dose única nessa visita. O menino de 8 anos ainda não tem idade: deve receber a vacina a partir dos 9 anos.",
    "commentary": "Ambos em dose única agora (A) e duas doses para ambos (B): o menino ainda não tem 9 anos, e o esquema atual é de dose única.\n\nMenina não deve ser vacinada (C): ela está na faixa indicada; e a vacina para meninos começa aos 9, não aos 11 anos.",
    "reference": "Ministério da Saúde — Nota técnica sobre dose única da vacina HPV (2024) / Calendário Nacional de Vacinação",
    "tags": [
      "saúde coletiva",
      "imunização",
      "vacina HPV",
      "calendário vacinal"
    ],
    "tip": "HPV no SUS: dose única dos 9 aos 14 anos, meninas e meninos."
  },
  {
    "id": "revalida-2025-1-81",
    "topography": "3.4",
    "topic": "Pancreatite crônica",
    "module": "Clínica Médica",
    "text": "Homem de 42 anos é internado para investigação de episódios recorrentes de dor epigástrica de forte intensidade com irradiação para o dorso, com diversas avaliações em serviços de pronto-atendimento, sem diagnóstico conclusivo. Ultrassonografia abdominal sem sinais de litíase ou de dilatação de vias biliares. Relata uso diário de bebida alcoólica desde os 16 anos.\n\nConsiderando o caso apresentado, assinale a alternativa que indica, respectivamente, o exame complementar e a conduta terapêutica adequados.",
    "options": [
      "(A) Tomografia computadorizada de abdome; administração de amitriptilina.",
      "(B) Colangiopancreatografia endoscópica retrógrada; administração de gabapentina.",
      "(C) Tomografia computadorizada de abdome; administração de ácido ursodesoxicólico.",
      "(D) Colangiopancreatografia endoscópica retrógrada; administração de enzimas pancreáticas."
    ],
    "correctAnswer": 0,
    "explanation": "Etilista com dor epigástrica recorrente em faixa: suspeita de pancreatite crônica. O exame inicial para o diagnóstico é a tomografia de abdome (calcificações pancreáticas, dilatação do ducto, atrofia). Para a dor, além de parar de beber e fumar, usam-se analgésicos escalonados e adjuvantes neuromoduladores, como amitriptilina ou pregabalina.",
    "commentary": "CPRE (B e D): é invasiva e não é exame diagnóstico inicial; tem papel terapêutico em casos selecionados.\n\nÁcido ursodesoxicólico (C): é usado em doenças colestáticas e cálculos de colesterol; não trata pancreatite crônica.\n\nObservação: enzimas pancreáticas tratam a insuficiência exócrina (esteatorreia), não a dor.",
    "reference": "Consenso brasileiro de pancreatite crônica / UEG — Diretrizes de pancreatite crônica",
    "tags": [
      "gastroenterologia",
      "pancreatite crônica",
      "etilismo",
      "dor crônica"
    ],
    "tip": "Pancreatite crônica: TC (calcificações). Dor: abstinência + analgésico + neuromodulador."
  },
  {
    "id": "revalida-2025-1-82",
    "topography": "4.2",
    "topic": "Retenção urinária",
    "module": "Cirurgia",
    "text": "Homem de 20 anos, pedreiro, é atendido em um pronto-socorro após cair de um andaime a uma altura de, aproximadamente, 2 metros, com impacto direto na região urogenital. Refere impossibilidade de micção espontânea. O exame físico revela equimose em “asa de borboleta” no períneo, uretrorragia e globo vesical palpável abaixo da cicatriz umbilical.\n\nFrente ao quadro clínico desse paciente, qual é a conduta médica mais adequada?",
    "options": [
      "(A) Passagem de sonda vesical de demora.",
      "(B) Realização de cistostomia por punção.",
      "(C) Estímulo com diurético endovenoso.",
      "(D) Incremento da hidratação venosa."
    ],
    "correctAnswer": 1,
    "explanation": "Queda a cavaleiro com equimose perineal em asa de borboleta, uretrorragia e retenção urinária com globo vesical: lesão de uretra anterior (bulbar). A sondagem uretral está contraindicada, pois pode completar a lesão. A conduta é drenar a bexiga com cistostomia suprapúbica por punção e investigar com uretrografia retrógrada.",
    "commentary": "Sonda vesical (A): contraindicada na suspeita de lesão uretral.\n\nDiurético (C) e hidratação (D): pioram a distensão vesical em quem não consegue urinar.",
    "reference": "ATLS 10ª ed. / Sociedade Brasileira de Urologia — Trauma urogenital",
    "tags": [
      "urologia",
      "trauma de uretra",
      "cistostomia",
      "trauma"
    ],
    "tip": "Uretrorragia em trauma: nada de sonda; uretrografia e cistostomia."
  },
  {
    "id": "revalida-2025-1-83",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Menina de 2 anos e 6 meses é atendida em uma unidade básica de saúde (UBS). A mãe relata que a criança consome cerca de um litro de leite de vaca por dia e ingere pouca carne. O médico observa palidez cutaneomucosa e solicita exames. Os resultados são apresentados a seguir:\n\n• Hemoglobina: 9,0 g/dL (VR: 10,5 a 13,5 g/dL)\n• Hematócrito: 27,5% (VR: 33 a 39%)\n• Volume corpuscular médio: 64 fL (VR: 70 a 86 fL)\n• Ferritina: 12 ng/mL (VR: 20 a 100 ng/mL)\n• Observação: anisocitose +\n\nO médico inicia tratamento com ferro elementar na dose de 2 mg/kg/dia. Após 3 meses, exames foram repetidos:\n\n• Hemoglobina: 9,2 g/dL (VR: 10,5 a 13,5 g/dL)\n• Hematócrito: 27,9% (VR: 33 a 39%)\n• Volume corpuscular médio: 68 fL (VR: 70 a 86 fL)\n• Ferritina: 15 ng/mL (VR: 20 a 100 ng/mL)\n• Observação: anisocitose +\n\nCom relação ao tratamento e à conduta desse paciente é correto afirmar que a",
    "options": [
      "(A) resposta é a esperada para o tratamento; devendo-se manter o tratamento atual por mais 3 meses e reavaliar laboratorialmente.",
      "(B) resposta à administração de ferro oral é resistente; deve se repor com ferro endovenoso e investigar a má absorção por doença celíaca.",
      "(C) falha terapêutica é sugestiva de outra causa da anemia microcítica; deve-se considerar hipótese de traço talassêmico e encaminhar a paciente para hematologista.",
      "(D) falha terapêutica deve-se a persistência de fatores de risco relacionados à alimentação e à subdose de ferro elementar; deve-se aumentar a dose e orientar a alimentação."
    ],
    "correctAnswer": 3,
    "explanation": "Anemia microcítica com ferritina baixa (12 ng/mL) em criança que bebe 1 L de leite de vaca por dia e come pouca carne: anemia ferropriva. Após 3 meses, a resposta foi mínima (Hb 9,0 → 9,2; ferritina 12 → 15). As causas: dose de tratamento abaixo do recomendado (o tratamento usa 3 a 5 mg/kg/dia de ferro elementar) e manutenção do excesso de leite de vaca, que reduz a absorção de ferro e pode causar microssangramento intestinal. Deve-se ajustar a dose e corrigir a dieta.",
    "commentary": "Manter o tratamento (A): uma resposta adequada elevaria a Hb em pelo menos 1 g/dL em 4 semanas.\n\nFerro endovenoso e investigar doença celíaca (B): antes, corrigem-se dose e dieta.\n\nTraço talassêmico (C): a ferritina baixa confirma deficiência de ferro.",
    "reference": "SBP — Consenso sobre anemia ferropriva (2021)",
    "tags": [
      "pediatria",
      "anemia ferropriva",
      "leite de vaca",
      "suplementação de ferro"
    ],
    "tip": "Tratamento de anemia ferropriva na criança: 3–5 mg/kg/dia de ferro elementar."
  },
  {
    "id": "revalida-2025-1-84",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 27 anos, G1P0, comparece à unidade de pronto atendimento apresentando dor pélvica leve e sangramento vaginal discreto há 6 horas. Refere data da última menstruação (DUM) há 7 semanas. Ao exame físico, tem-se sinais vitais normais e exame abdominal normal. Ao exame especular, nota-se sangramento em pequena quantidade, vivo, oriundo do orifício externo do colo uterino. Títulos de beta-hCG realizados há dois dias eram de 2.500 mUI/mL. Títulos de beta-hCG realizados no pronto-socorro são de 3.500 mUI/mL. Foi solicitada ultrassonografia transvaginal, que demonstrou ausência de saco gestacional intrauterino e\n\npresença de massa anexial à direita, medindo 3 cm, contendo no seu interior imagem compatível com embrião, sem batimentos cardíacos. Com base no quadro clínico e nos achados dos exames complementares, a conduta mais adequada a ser realizada nessa paciente é",
    "options": [
      "(A) laparoscopia imediata, considerando os níveis em ascenção de beta-hCG e o tamanho da massa anexial.",
      "(B) tratamento com metotrexato intramuscular, considerando os níveis de beta-hCG e o tamanho da massa anexial.",
      "(C) laparotomia imediata, considerando os níveis em ascenção do beta-hCG e a presença de embrião na massa anexial.",
      "(D) monitoramento com ultrassonografia transvaginal e beta-hCG em 48 horas, considerando os níveis em ascenção de beta-hCG."
    ],
    "correctAnswer": 1,
    "explanation": "Gestação ectópica íntegra: beta-hCG de 3.500 mUI/mL (subindo pouco), massa anexial de 3 cm sem batimento cardíaco embrionário, paciente estável e com sangramento discreto. Preenche critérios para tratamento com metotrexato intramuscular (dose única de 50 mg/m²): estabilidade, beta-hCG < 5.000, massa < 3,5 cm e sem atividade cardíaca, desde que haja seguimento possível.",
    "commentary": "Laparoscopia imediata (A) ou laparotomia (C): indicadas para instabilidade, ruptura, critérios fora do tratamento clínico ou contraindicação ao metotrexato.\n\nApenas monitorar (D): a conduta expectante exige beta-hCG baixo e em queda (< 1.500–2.000), não em ascensão.",
    "reference": "Febrasgo — Gravidez ectópica / Ministério da Saúde — Gestação de alto risco",
    "tags": [
      "obstetrícia",
      "gravidez ectópica",
      "metotrexato"
    ],
    "tip": "MTX na ectópica: estável, beta-hCG < 5.000, massa < 3,5 cm, sem BCE."
  },
  {
    "id": "revalida-2025-1-85",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "Mulher de 55 anos, ao visitar seu pai, de 82 anos, com Doença de Alzheimer, em uma instituição de longa permanência para idosos (ILPI), suspeita de maus-tratos, uma vez que o encontrou restrito ao leito, com fraldas sujas e fácies de dor. Ela já havia presenciado outros idosos residentes passarem por situações semelhantes a essa na mesma instituição. Ao ser questionada, a equipe responsável responde que a restrição de mobilidade no leito foi efetuada porque o paciente se encontrava agitado pela manhã. Quanto à higiene do idoso, a equipe alega falta de profissionais para realizar as trocas de fraldas. Tendo em vista o que dispõe o Estatuto do Idoso, de que maneira a situação descrita pode ser qualificada?",
    "options": [
      "(A) A decisão dos familiares de manter o paciente em uma ILPI configura ato de violência contra o idoso.",
      "(B) A situação descrita é justificável do ponto de vista institucional por se tratar de paciente agitado e com demência.",
      "(C) A presença de negligência, caracterizada pela omissão na prestação de cuidados, configura-se como uma forma de violência institucional.",
      "(D) A situação caracteriza violência patrimonial, pois os recursos financeiros do idoso não estão sendo empregados para garantir os cuidados de que necessita."
    ],
    "correctAnswer": 2,
    "explanation": "Idoso restrito ao leito sem indicação clínica e com fraldas sujas por falta de pessoal: negligência, isto é, omissão de cuidados devidos, praticada pela instituição — violência institucional, prevista no Estatuto da Pessoa Idosa. O caso deve ser notificado e comunicado aos órgãos competentes (Ministério Público, conselho do idoso, vigilância sanitária).",
    "commentary": "Família manter na ILPI (A): institucionalizar não é violência.\n\nJustificável (B): agitação não autoriza contenção sem prescrição e monitoramento; falta de pessoal não justifica.\n\nViolência patrimonial (D): refere-se à apropriação ou uso indevido de bens e recursos, o que não foi descrito.",
    "reference": "Estatuto da Pessoa Idosa (Lei 10.741/2003) / Ministério da Saúde — Caderno de Atenção Básica nº 19",
    "tags": [
      "saúde do idoso",
      "violência contra o idoso",
      "negligência",
      "ILPI"
    ],
    "tip": "Negligência = omissão de cuidados; vale para família e para instituições."
  },
  {
    "id": "revalida-2025-1-86",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos em quimioterapia paliativa para câncer gástrico avançado é internado devido à queda do estado geral e dispneia. Ao ser atendido, apresenta Saturação de O₂ de 86%, sendo prescrita oxigenioterapia. A tomografia computadorizada de tórax evidencia padrão sugestivo de extensa linfangite carcinomatosa bilateral e pequeno derrame pleural à esquerda. Apesar do registro em prontuário da “diretiva antecipada de vontade” de não ser submetido a procedimentos invasivos, um de seus filhos insiste que o paciente seja submetido à ventilação mecânica invasiva. Nesse caso, a conduta adequada diante da piora respiratória do paciente é",
    "options": [
      "(A) realizar a intubação orotraqueal.",
      "(B) prescrever morfina por via parenteral.",
      "(C) realizar toracocentese terapêutica à esquerda.",
      "(D) instituir ventilação não invasiva seguida de intubação orotraqueal."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com câncer gástrico avançado, linfangite carcinomatosa extensa e diretiva antecipada de vontade registrada recusando procedimentos invasivos. A diretiva deve ser respeitada (Resolução CFM 1.995/2012) e prevalece sobre o desejo dos familiares. A dispneia em cuidados paliativos é tratada com opioide (morfina parenteral), que alivia a sensação de falta de ar.",
    "commentary": "Intubação (A e D): contraria a vontade expressa do paciente e não muda o prognóstico.\n\nToracocentese (C): o derrame é pequeno e não explica a dispneia, causada pela linfangite.",
    "reference": "Resolução CFM 1.995/2012 / Academia Nacional de Cuidados Paliativos — Manual de cuidados paliativos",
    "tags": [
      "cuidados paliativos",
      "diretivas antecipadas de vontade",
      "dispneia",
      "morfina"
    ],
    "tip": "Diretiva antecipada de vontade prevalece sobre o desejo da família."
  },
  {
    "id": "revalida-2025-1-87",
    "module": "Pediatria",
    "text": "Menino de 6 anos é levado ao pronto-socorro pediátrico por sua mãe, que relata que a criança introduziu um objeto metálico pequeno no nariz enquanto brincava. O paciente apresenta obstrução nasal à direita, sem outros sintomas significativos. Radiografia em mentonaso dos seios da face revela uma imagem radiopaca circular com duplo contorno em fossa nasal direita. Nesse caso, qual é a conduta médica adequada?",
    "options": [
      "(A) Alta médica, com encaminhamento para consulta com otorrinolaringologista.",
      "(B) Transferência para centro de referência, para nasofibroscopia imediata.",
      "(C) Internação no pronto-socorro, para lavagem e aspiração nasal.",
      "(D) Internação hospitalar, para realização de rinoscopia eletiva."
    ],
    "correctAnswer": 1,
    "explanation": "Imagem radiopaca circular com duplo contorno (sinal do halo) é característica de bateria de botão. Na cavidade nasal, ela causa necrose de liquefação e perfuração septal em poucas horas. É emergência: a remoção deve ser imediata, sob visão direta (nasofibroscopia/endoscopia), em serviço com otorrinolaringologista.",
    "commentary": "Alta e consulta ambulatorial (A) ou rinoscopia eletiva (D): o atraso causa lesão grave.\n\nLavagem e aspiração nasal (C): não remove a bateria e a solução pode acelerar a lesão (a bateria gera corrente elétrica no meio úmido).",
    "reference": "Associação Brasileira de Otorrinolaringologia — Corpo estranho nasal",
    "tags": [
      "otorrinolaringologia",
      "corpo estranho",
      "bateria de botão",
      "emergência pediátrica"
    ],
    "tip": "Duplo contorno no raio X = bateria de botão: remoção imediata."
  },
  {
    "id": "revalida-2025-1-88",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Pediatria",
    "text": "Menino de 6 anos está internado e em tratamento da leucemia linfoblástica aguda (LLA). Tem indicação de transplante de células-tronco hematopoiéticas — transplante de medula óssea (TMO). Com relação a essa modalidade de tratamento, assinale a alternativa correta.",
    "options": [
      "(A) O encaminhamento desse paciente para o centro de referência para TMO deve ser realizado o quanto antes.",
      "(B) A inscrição do paciente em centro de referência para TMO deve ser realizada tão logo seja detectada falha na terapia de indução.",
      "(C) O exame de compatibilidade em todos os familiares de 1º grau deve ser realizado antes da inscrição em centro de referência para TMO.",
      "(D) O encaminhamento desse paciente para centro de referência para TMO deve ser realizado somente após a alta hospitalar, via ambulatorial."
    ],
    "correctAnswer": 1,
    "explanation": "Na leucemia linfoblástica aguda da criança, o transplante de medula óssea não é tratamento de primeira linha: fica para doença de alto risco, como falha de indução (sem remissão após a indução), doença residual mínima persistente, recidiva e algumas alterações citogenéticas. O gabarito considera que a inscrição para transplante deve ocorrer quando se detecta a falha da indução.",
    "commentary": "O quanto antes (A): a maioria das crianças com LLA é curada só com quimioterapia; o transplante depende de critérios de risco.\n\nTipar todos os familiares antes da inscrição (C): a tipagem HLA de irmãos e a busca no registro (REDOME) ocorrem em paralelo, não como pré-requisito.\n\nSó após alta (D): a indicação depende da resposta, não do local de atendimento.",
    "reference": "Ministério da Saúde — Regulamento técnico do Sistema Nacional de Transplantes / SOBOPE",
    "tags": [
      "onco-hematologia pediátrica",
      "leucemia linfoblástica aguda",
      "transplante de medula óssea"
    ]
  },
  {
    "id": "revalida-2025-1-89",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 45 anos, G2P2, retorna ao ambulatório de ginecologia do hospital escola para o resultado da biópsia de colo uterino realizada há 20 dias. A biópsia evidenciou NIC III, sendo a paciente informada pela residente que ela terá que realizar uma conização do colo uterino para remoção da lesão e prevenção do câncer. Após as explicações, a paciente solicita que já se faça histerectomia para evitar problemas futuros. Diante da solicitação da paciente, a médica deverá informar que a",
    "options": [
      "(A) histerectomia é um procedimento mais indicado do que a conização, por se tratar de um tumor in situ.",
      "(B) histerectomia é um procedimento mais indicado do que a conização, já que a paciente tem prole constituída.",
      "(C) conização é um procedimento menos invasivo e necessário para afastar a hipótese de microinvasão pelo tumor.",
      "(D) conização é um procedimento menos invasivo e suficiente para o tratamento da paciente, uma vez que se trata de um tumor in situ."
    ],
    "correctAnswer": 2,
    "explanation": "NIC III (lesão de alto grau) na biópsia é tratada com exérese da zona de transformação/conização, que é diagnóstica e terapêutica: avalia toda a lesão e afasta microinvasão, que mudaria o tratamento. A histerectomia não é o tratamento inicial da NIC III — se houvesse carcinoma invasor não diagnosticado, a histerectomia simples seria tratamento inadequado.",
    "commentary": "Histerectomia por ser in situ (A) ou por prole constituída (B): a conização vem primeiro para afastar invasão.\n\nConização suficiente por ser in situ (D): a biópsia não garante que não haja invasão; a conização é necessária justamente para afastá-la.",
    "reference": "INCA — Diretrizes brasileiras para o rastreamento do câncer do colo do útero (2016)",
    "tags": [
      "ginecologia",
      "NIC III",
      "conização",
      "câncer de colo uterino"
    ],
    "tip": "NIC III: conização antes de qualquer histerectomia."
  },
  {
    "id": "revalida-2025-1-90",
    "topography": "10",
    "topic": "Febre amarela",
    "module": "Saúde Coletiva",
    "text": "Paciente de 38 anos, morador de uma zona urbana não endêmica e sem história de viagens recentes para regiões de risco, vai à unidade básica de saúde (UBS) apresentando histórico vacinal de febre amarela há 9 anos. Ele relata ao médico que um macaco foi encontrado morto perto de sua casa. Diante desse relato, o médico deve",
    "options": [
      "(A) salientar a ausência de risco de febre amarela, uma vez que o Brasil não é país endêmico.",
      "(B) informar que é desnecessário realizar reforço para a vacina contra febre amarela nesse caso.",
      "(C) solicitar e aguardar resultado do anatomopatológico do animal, a fim de confirmar febre amarela.",
      "(D) indicar o reforço da vacina contra febre amarela, independentemente da ministração da última dose."
    ],
    "correctAnswer": 1,
    "explanation": "Epizootia em primatas (macaco morto) é sinal de alerta para circulação do vírus da febre amarela. O Ministério da Saúde adota dose única da vacina para quem foi vacinado a partir dos 5 anos, e ela confere proteção por toda a vida. O paciente vacinado há 9 anos não precisa de reforço.",
    "commentary": "Ausência de risco (A): o Brasil tem áreas de transmissão e a morte de macacos indica risco.\n\nAguardar o anatomopatológico (C): a vacinação de quem não é vacinado não espera o resultado; quem já é vacinado não precisa de nova dose.\n\nReforço independentemente da última dose (D): não há indicação de reforço após dose válida aos ≥ 5 anos.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação / Guia de Vigilância em Saúde: Febre amarela",
    "tags": [
      "infectologia",
      "febre amarela",
      "imunização",
      "epizootia"
    ],
    "tip": "Febre amarela: dose única a partir dos 5 anos vale para a vida toda."
  },
  {
    "id": "revalida-2025-1-91",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Mulher de 70 anos, sem comorbidades, é internada devido a quadro de dor, distensão abdominal e vômitos frequentes iniciados há 2 dias. Foi diagnosticada com uma hérnia umbilical encarcerada e submetida a correção cirúrgica e a enterectomia segmentar da porção necrosada. No primeiro dia de pós-operatório, observou-se drenagem de cerca de 2 litros de líquido pela sonda nasogástrica. No segundo dia, o abdome da paciente permaneceu distendido, com ruídos hidroaéreos hipoativos. Notou-se que ela está sem evacuar e com pouca eliminação de flatos. Nessa situação, o quadro clínico do segundo dia de pós-operatório é justificado pela",
    "options": [
      "(A) hipocalemia.",
      "(B) hipercalemia.",
      "(C) hipermagnesemia.",
      "(D) hipomagnesemia."
    ],
    "correctAnswer": 0,
    "explanation": "Grande perda de suco gástrico pela sonda nasogástrica (2 L) causa hipocalemia e alcalose metabólica. A hipocalemia reduz a motilidade intestinal e mantém o íleo paralítico (distensão, ruídos hipoativos, sem flatos). É preciso dosar e repor potássio e magnésio.",
    "commentary": "Hipercalemia (B): o efeito da perda gástrica é o oposto.\n\nHipermagnesemia (C): não ocorre nessa situação.\n\nHipomagnesemia (D): pode coexistir e dificultar a correção do potássio, mas a causa principal do íleo é a hipocalemia.",
    "reference": "Sabiston Tratado de Cirurgia — Distúrbios hidroeletrolíticos",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "íleo paralítico",
      "hipocalemia"
    ],
    "tip": "Perda gástrica = hipocalemia + alcalose (e o potássio baixo prende o intestino)."
  },
  {
    "id": "revalida-2025-1-92",
    "topography": "4.2",
    "topic": "Hiperplasia prostática benigna",
    "module": "Cirurgia",
    "text": "Paciente, 67 anos, procurou a unidade de saúde relatando dificuldade para urinar, jato urinário fraco e noctúria. Ele nega dor ao urinar ou sangramento visível na urina. Ao exame físico, o toque retal revelou uma próstata aumentada, de consistência firme, sem nódulos palpáveis. Para avaliação complementar, o médico solicitou exames laboratoriais, incluindo dosagem do antígeno prostático específico total de 3,1 ng/mL, creatinina sérica 1,1 mg/dL,\n\nalém de ultrassonografia do trato urinário que mostrou próstata aumentada de tamanho com volume de 40 gramas, sem nódulos. Paciente já em tratamento com finasterida e doxasozina, porém sem melhoras dos sintomas. Com base nesse caso, qual é a conduta mais apropriada?",
    "options": [
      "(A) Solicitar biópsia prostática.",
      "(B) Iniciar tratamento empírico com antibióticos.",
      "(C) Repetir o exame de ultrassonografia da próstata.",
      "(D) Encaminhar para ressecção transuretral da próstata."
    ],
    "correctAnswer": 3,
    "explanation": "Hiperplasia prostática benigna sintomática (próstata de 40 g, PSA compatível, sem nódulos) que não respondeu ao tratamento combinado (alfabloqueador + inibidor da 5-alfa-redutase): falha do tratamento clínico, com indicação de cirurgia. A ressecção transuretral da próstata (RTU) é o padrão para próstatas de 30 a 80 g.",
    "commentary": "Biópsia (A): PSA de 3,1 e toque sem nódulos não sugerem câncer; e a finasterida reduz o PSA em cerca de 50%, então o valor corrigido é cerca de 6,2 — o gabarito considera a indicação cirúrgica como prioridade.\n\nAntibiótico (B): não há sinal de infecção.\n\nRepetir ultrassonografia (C): não muda a conduta.",
    "reference": "Sociedade Brasileira de Urologia — Hiperplasia prostática benigna / AUA 2023",
    "tags": [
      "urologia",
      "hiperplasia prostática benigna",
      "ressecção transuretral da próstata"
    ],
    "tip": "HPB que falha com alfabloqueador + 5-ARI: cirurgia (RTU)."
  },
  {
    "id": "revalida-2025-1-93",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Pediatria",
    "text": "Menino, 3 anos, internado em uma unidade de terapia intensiva pediátrica com neoplasia de sistema nervoso central, foi operado pela neurocirurgia com retirada parcial da lesão há 3 meses, e desde então vem realizando tratamento quimioterápico. Ressonância magnética recente mostra aumento importante do tumor e a equipe de oncologia considera que não há mais possibilidades terapêuticas para tratamento do tumor. O paciente permanece acamado, pouco responsivo e acompanhado de sua mãe. A equipe multidisciplinar se reúne para definir quais condutas terapêuticas serão realizadas nesse paciente. Nesse caso, a conduta a ser adotada deve ser",
    "options": [
      "(A) administrar opióides para controle da dor e, junto da família, orientar a não realização de ressuscitação cardiopulmonar.",
      "(B) realizar sedação e intubação orotraqueal para maior conforto e orientar a não realização de ressuscitação cardiopulmonar.",
      "(C) iniciar um novo ciclo de quimioterapia com medicações diferentes das que já foram utilizadas, para controle da proliferação celular tumoral.",
      "(D) solicitar nova abordagem pela equipe de neurocirurgia para retirada de parte da lesão, o que aliviará a pressão intracraniana e prolongará a sobrevida."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com tumor do sistema nervoso central em progressão, sem possibilidades terapêuticas de controle da doença: o foco passa a ser cuidados paliativos — controle de sintomas (opioide para dor), conforto e apoio à família —, com decisão compartilhada de não realizar reanimação cardiopulmonar, que seria obstinação terapêutica.",
    "commentary": "Intubação para conforto (B): intubação não traz conforto e é medida invasiva desproporcional.\n\nNova quimioterapia (C) e nova cirurgia (D): não há perspectiva de benefício; seriam distanásia.",
    "reference": "Academia Nacional de Cuidados Paliativos / Resolução CFM 1.805/2006 (ortotanásia)",
    "tags": [
      "cuidados paliativos",
      "pediatria",
      "ortotanásia",
      "oncologia pediátrica"
    ]
  },
  {
    "id": "revalida-2025-1-94",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 60 anos é encaminhada para atendimento especializado por ter apresentado 4 episódios de sangramento vaginal. Ela está lúcida, orientada, sem queixas e com autonomia em sua vida pessoal e social. Apresentou uma ultrassonografia transvaginal com endométrio de 12 mm de espessura e heterogêneo. Foi indicada histeroscopia diagnóstica, mas a paciente recusa-se a fazer porque acha que o sangramento é normal. Nesse caso, o médico deve",
    "options": [
      "(A) dizer à paciente que respeitará sua decisão e evitar discutir com ela o diagnóstico provável.",
      "(B) informar à paciente que existe a possibilidade de ser câncer e reforçar a necessidade do exame.",
      "(C) esclarecer para a família a necessidade do exame, mas omitir o diagnóstico provável para a paciente.",
      "(D) orientar que, caso ela se recuse a fazer o exame, será necessário procurar outro serviço para acompanhamento."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento pós-menopausa com endométrio de 12 mm e heterogêneo: suspeita de câncer de endométrio, com indicação de histeroscopia com biópsia. A paciente é capaz e tem direito de recusar, mas a decisão precisa ser informada: o médico deve explicar claramente a possibilidade de câncer e reforçar a importância do exame.",
    "commentary": "Respeitar sem discutir o diagnóstico (A): a recusa sem informação adequada não é autonomia verdadeira.\n\nOmitir o diagnóstico para a paciente (C): viola o direito à informação e o sigilo.\n\nAmeaçar com troca de serviço (D): é coercitivo e não ético.",
    "reference": "Código de Ética Médica (art. 34) / Febrasgo — Câncer de endométrio",
    "tags": [
      "ginecologia",
      "ética médica",
      "autonomia",
      "sangramento pós-menopausa"
    ],
    "tip": "Autonomia de verdade exige informação: explique o risco antes de aceitar a recusa."
  },
  {
    "id": "revalida-2025-1-95",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Durante uma roda de conversa em uma sala de espera com mães que aguardavam a consulta de seus filhos com um médico de família e comunidade, uma enfermeira da equipe de saúde da família propôs a discussão do tema da hesitação vacinal. Durante o diálogo, uma das participantes afirmou que “a culpa de tudo isso é da Internet”. Considerando essa situação, assinale a alternativa correta, acerca dos argumentos a serem utilizados pela enfermeira nessa conversa com a comunidade.",
    "options": [
      "(A) A Internet veicula dúvidas quanto à real eficácia/eficiência e segurança das vacinas, o que abala a confiança da população nos imunobiológicos; ademais, o algoritmo das redes sociais associa temas antivacinação a outros temas de natureza moral, fazendo exposição seletiva.",
      "(B) A hesitação vacinal ocorre nos extratos sociais de menor renda, que são contrárias à medicalização da saúde e acreditam que hábitos de vida saudáveis protegem contra doenças e garantem saúde, dispensando a necessidade de vacinação.",
      "(C) O paradoxo epidemiológico de que algumas doenças imunopreveníveis hoje são raras, associado à complexidade do calendário vacinal, criou a política de redução temporária do uso de algumas vacinas em determinado ano para aumentar o engajamento da população no ano seguinte.",
      "(D) A circulação de informações falsas (fake news), impulsionada pela internet, causa pouco impacto nas escolhas da população de menor poder aquisitivo, que tende a ter mais confiança na vacinação e menor acesso às redes sociais."
    ],
    "correctAnswer": 0,
    "explanation": "A internet e as redes sociais difundem desinformação sobre eficácia e segurança das vacinas, o que reduz a confiança da população. Os algoritmos das redes ampliam conteúdos antivacina e os associam a temas morais e ideológicos, criando bolhas de exposição seletiva — fator reconhecido de hesitação vacinal.",
    "commentary": "Hesitação só nos mais pobres (B): ocorre em todos os estratos e frequentemente em grupos de maior renda e escolaridade.\n\nPolítica de redução temporária de vacinas (C): não existe.\n\nFake news com pouco impacto nos mais pobres (D): a desinformação atinge todos os grupos.",
    "reference": "OMS — Hesitação vacinal (SAGE) / Ministério da Saúde — Programa Nacional de Imunizações",
    "tags": [
      "saúde coletiva",
      "hesitação vacinal",
      "desinformação",
      "imunização"
    ]
  },
  {
    "id": "revalida-2025-1-96",
    "topography": "9",
    "topic": "Transfusão sanguínea",
    "module": "Clínica Médica",
    "text": "Durante consulta no serviço de hematologia de um hospital terciário, um homem de 72 anos reage com a seguinte argumentação diante da proposta terapêutica do médico: \"Não, doutor, devido a minha crença, eu não posso receber sangue \". Ele está sendo atendido por síndrome mielodisplásica recentemente diagnosticada e, por questões religiosas, se recusa a aderir à proposta terapêutica de hemotransfusões periódicas. Diante desse cenário, o médico deve",
    "options": [
      "(A) adiar a decisão de transfusão até uma situação de maior gravidade, em que tenha maior poder de convencimento.",
      "(B) respeitar a autonomia do paciente, buscando outras formas de lidar com a anemia, como a administração de eritropoietina.",
      "(C) insistir na argumentação da necessidade da terapia transfusional, mostrando evidências científicas que comprovam o seu benefício.",
      "(D) buscar apoio do comitê de ética médica da unidade hospitalar para o convencimento do paciente sobre a necessidade das transfusões."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente adulto, capaz e consciente, que recusa transfusão por convicção religiosa em situação não emergencial (tratamento crônico de síndrome mielodisplásica). A Resolução CFM 2.232/2019 garante a recusa terapêutica nesse contexto. O médico deve respeitar a autonomia e buscar alternativas, como agentes estimuladores da eritropoiese, ferro e ácido fólico.",
    "commentary": "Adiar até ficar grave (A): é manipulação; a autonomia deve ser respeitada desde já.\n\nInsistir com evidências (C) e usar o comitê de ética para convencer (D): podem informar, mas não forçar o paciente capaz a aceitar.",
    "reference": "Resolução CFM 2.232/2019 — Recusa terapêutica",
    "tags": [
      "bioética",
      "recusa terapêutica",
      "testemunhas de Jeová",
      "síndrome mielodisplásica"
    ],
    "tip": "Adulto capaz, sem emergência: a recusa terapêutica deve ser respeitada."
  },
  {
    "id": "revalida-2025-1-97",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Cirurgia",
    "text": "Homem de 58 anos procura atendimento devido a queixa de disfagia progressiva para alimentos sólidos iniciada há 6 meses, associada a perda de peso não intencional. Além disso, apresenta episódios frequentes de pirose e regurgitação, há vários anos, sem tratamento\n\nadequado. Endoscopia digestiva alta recente revela estenose esofágica no terço distal e sinais de esofagite crônica, com biópsias que não evidenciam malignidade. Nesse caso, a conduta inicial mais apropriada é indicar",
    "options": [
      "(A) esofagectomia subtotal por via videolaparoscópica.",
      "(B) aplicação de toxina botulínica em esôfago distal via endoscópica.",
      "(C) cirurgia de fundoplicatura imediata para correção do refluxo gastroesofágico.",
      "(D) dilatação endoscópica da estenose e prescrever inibidor de bomba de prótons."
    ],
    "correctAnswer": 3,
    "explanation": "Doença do refluxo de longa data, sem tratamento, que evoluiu com estenose péptica do esôfago distal (biópsias sem malignidade): o tratamento inicial é dilatação endoscópica associada a inibidor de bomba de prótons em dose plena, que reduz a recidiva da estenose.",
    "commentary": "Esofagectomia (A): reservada para câncer ou estenose refratária complexa.\n\nToxina botulínica (B): usada na acalasia.\n\nFundoplicatura imediata (C): pode ser considerada depois, mas não resolve a disfagia pela estenose já formada.",
    "reference": "Federação Brasileira de Gastroenterologia — DRGE / ACG 2022",
    "tags": [
      "gastroenterologia",
      "DRGE",
      "estenose péptica",
      "dilatação endoscópica"
    ],
    "tip": "Estenose péptica benigna: dilatação + IBP."
  },
  {
    "id": "revalida-2025-1-98",
    "topography": "14",
    "topic": "Trauma",
    "module": "Pediatria",
    "text": "Menino de 10 anos é levado para um serviço de urgência com quadro compatível com politraumatismo e choque hemorrágico. Há indicação de transfusão de concentrado de hemácias, porém a mãe do paciente informa que a família e a criança são Testemunhas de Jeová e recusam terminantemente a transfusão. Considerando esse caso clínico e as questões éticas nele implicadas, assinale a alternativa correta.",
    "options": [
      "(A) A recusa terapêutica coloca em risco a vida de paciente menor de idade e não deve ser aceita pelo médico, que deve realizar a transfusão.",
      "(B) Trata-se de recusa terapêutica apresentada por responsável legal do paciente e, pelo princípio da autonomia, o médico não deverá realizar a transfusão.",
      "(C) Diante da recusa terapêutica, a equipe médica poderá se recusar a prestar o atendimento à criança, até que a família do paciente autorize a realização da transfusão.",
      "(D) Por se tratar de paciente menor de idade, o fato deve ser comunicado às autoridades competentes, como o Ministério Público e o Conselho Tutelar, para que decidam quanto à transfusão."
    ],
    "correctAnswer": 0,
    "explanation": "Criança em choque hemorrágico com risco iminente de morte e recusa dos pais à transfusão por motivo religioso. Pela Resolução CFM 2.232/2019 e pelo ECA, em menores de idade com risco de vida, o médico deve fazer a transfusão, porque a recusa dos responsáveis não pode prevalecer sobre o direito à vida da criança.",
    "commentary": "Respeitar a autonomia dos pais (B): os pais não podem recusar tratamento vital para o filho.\n\nRecusar atendimento (C): seria omissão de socorro.\n\nAguardar decisão de autoridades (D): pode ser comunicado, mas em emergência a transfusão não espera.",
    "reference": "Resolução CFM 2.232/2019 / ECA (Lei 8.069/1990)",
    "tags": [
      "bioética",
      "recusa terapêutica",
      "menor de idade",
      "transfusão"
    ],
    "tip": "Criança com risco de vida: transfunda, mesmo com recusa dos pais."
  },
  {
    "id": "revalida-2025-1-99",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 45 anos está em acompanhamento no ambulatório de mastologia de um hospital escola devido ao diagnóstico de câncer de mama há 3 anos. Fez tratamento cirúrgico e radioterapia e, no momento, faz uso apenas de tamoxifeno. Tem apresentado fluxos menstruais a cada 15-20 dias, com volume aumentado há 2 meses. Relata que, antes do tratamento do câncer de mama, só menstruava duas vezes por ano ou quando usava pílula contraceptiva. Apresenta um IMC de 28 kg/m², exame especular sem lesões visíveis e sem sangramento ativo e toque vaginal normal. Solicitada ultrassonografia transvaginal, ficou evidenciado endométrio heterogêneo de 15 mm e ovário direito com folículo de 23 mm. Nesse caso, a conduta médica adequada é",
    "options": [
      "(A) inserir DIU hormonal.",
      "(B) suspender o tamoxifeno.",
      "(C) indicar estudo histológico do endométrio.",
      "(D) prescrever progestogênio em altas doses."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente em uso de tamoxifeno, que tem efeito estrogênico no endométrio, com sangramento anormal e endométrio espessado (15 mm) e heterogêneo. O tamoxifeno aumenta o risco de hiperplasia, pólipos e câncer de endométrio; sangramento anormal nessas usuárias exige avaliação histológica (biópsia, idealmente por histeroscopia).",
    "commentary": "DIU hormonal (A): pode proteger o endométrio, mas antes é preciso excluir câncer.\n\nSuspender o tamoxifeno (B): faria perder o tratamento adjuvante do câncer de mama; a decisão é do oncologista e não substitui a investigação.\n\nProgestogênio em altas doses (D): mascara o quadro sem diagnóstico.",
    "reference": "Febrasgo — Câncer de endométrio / ACOG — Tamoxifeno e câncer de endométrio",
    "tags": [
      "ginecologia",
      "tamoxifeno",
      "câncer de endométrio",
      "sangramento uterino anormal"
    ],
    "tip": "Usuária de tamoxifeno com sangramento anormal: biópsia de endométrio."
  },
  {
    "id": "revalida-2025-1-100",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Diante de um novo teste diagnóstico para hanseníase, que está sendo aplicado em uma unidade básica de saúde (UBS), o médico julga pertinente iniciar uma capacitação com sua equipe sobre a validade de testes diagnósticos, medidas de sensibilidade, especificidade e valores preditivos. Então, ele apresenta os seguintes dados a sua equipe: dentre 100 pessoas acometidas por hanseníase, 98 são verdadeiros positivos; e, dentre 100 pessoas não acometidas por hanseníase, 90 são verdadeiros negativos. A partir desses dados, é correto afirmar que o valor de sensibilidade do teste é",
    "options": [
      "(A) 90%.",
      "(B) 90,7%.",
      "(C) 97,8%.",
      "(D) 98%."
    ],
    "correctAnswer": 3,
    "explanation": "Sensibilidade = verdadeiros positivos / total de doentes = 98/100 = 98%. É a capacidade do teste de identificar quem tem a doença. A especificidade seria 90/100 = 90%.",
    "commentary": "90% (A): é a especificidade (verdadeiros negativos / não doentes).\n\n90,7% (B): é o valor preditivo positivo (98 / (98+10)).\n\n97,8% (C): é o valor preditivo negativo (90 / (90+2)).",
    "reference": "Fletcher — Epidemiologia clínica",
    "tags": [
      "epidemiologia",
      "testes diagnósticos",
      "sensibilidade",
      "hanseníase"
    ],
    "tip": "Sensibilidade = VP / doentes; especificidade = VN / não doentes."
  }
];
