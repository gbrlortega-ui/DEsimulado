import { Question } from '../types';

// FAMERP 2026 (SP) — residência médica. 80 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const FAMERP_2026_QUESTIONS: Question[] = [
  {
    "id": "famerp2026-1",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um trabalhador da área Metalúrgica apresentou no Exame Médico Periódico (NR-7) a chamada gota acústica, que mostrou o seguinte perfil audiométrico:",
    "options": [
      "Frequências 500-1.000 e 2.000, 4.000 e 6.000 Hz normais e 8.000Hz alterado",
      "Frequências 500-1.000 e 2.000, 4.000 e 6.000 Hz alterado e 8.000Hz normal",
      "Frequências 500-1.000, 2000 e 3.000 Hz normais, 4000 e 6000 Hz alterado e 8.000 Hz normal",
      "Todas as Frequências 500-1.000 e 2.000 alterado 4.000 e 6.000 e 8.000 Hz normal"
    ],
    "correctAnswer": 2,
    "explanation": "\"Gota acústica\" é o entalhe audiométrico típico da perda auditiva induzida por ruído (PAIR): queda dos limiares em 3.000, 4.000 e/ou 6.000 Hz, com as frequências graves e médias (500 a 2.000 Hz) normais e recuperação em 8.000 Hz. No audiograma, o traçado faz um \"V\" (ou gota) centrado em 4–6 kHz.\n\nA PAIR é neurossensorial, quase sempre bilateral e simétrica, irreversível, e não progride após cessar a exposição.",
    "commentary": "8.000 Hz alterado isolado (A): queda em agudos extremos com 4–6 kHz normais lembra presbiacusia ou ototoxicidade, não o entalhe da PAIR.\n\nTodas as frequências até 6.000 Hz alteradas e 8.000 normal (B): o acometimento de graves e médios não é característico da PAIR inicial.\n\nGraves e médios alterados com agudos normais (D): é o padrão inverso (perda em graves), visto por exemplo na doença de Ménière.",
    "tip": "PAIR: entalhe em 3–6 kHz (pior em 4 kHz) com recuperação em 8 kHz — a \"gota acústica\".",
    "reference": "Ministério da Saúde. Perda Auditiva Induzida por Ruído (PAIR) — Protocolos de Complexidade Diferenciada, 2006. NR-7, Anexo II — Controle médico ocupacional da exposição a níveis de pressão sonora elevados.",
    "tags": [
      "PAIR",
      "gota acústica",
      "audiometria",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2026-2",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Nos Textos de História da Medicina do Trabalho, da lavra de autores brasileiros, é costume referir-se como \"Pai da Medicina do Trabalho\", inclusive quem padronizou a célebre pergunta ao trabalhador, que auxilia no diagnóstico das patologias relacionadas ao trabalho - \"qual é a sua profissão?\":",
    "options": [
      "Hipócrates",
      "Bernardino Ramazzini",
      "Sir Robert Backer",
      "Bernardo Bedrikow"
    ],
    "correctAnswer": 1,
    "explanation": "Bernardino Ramazzini (1633–1714), médico italiano, é o \"Pai da Medicina do Trabalho\". Em 1700 publicou De Morbis Artificum Diatriba (As doenças dos trabalhadores), descrevendo doenças de mais de 50 ocupações, e acrescentou à anamnese hipocrática a pergunta \"qual é a sua ocupação?\", base da investigação do nexo entre trabalho e doença.",
    "commentary": "Hipócrates (A): é o pai da medicina; descreveu a intoxicação por chumbo em mineiros, mas não sistematizou a medicina do trabalho.\n\nRobert Baker (C): foi um dos primeiros médicos inspetores de fábricas na Inglaterra, após o Factory Act de 1833.\n\nBernardo Bedrikow (D): médico brasileiro, pioneiro da medicina do trabalho no país, mas não é o \"pai\" da especialidade.",
    "tip": "Ramazzini, 1700, De Morbis Artificum: \"qual é a sua ocupação?\".",
    "reference": "Ramazzini B. As doenças dos trabalhadores (De Morbis Artificum Diatriba). Trad. Fundacentro, 4ª ed., 2016. Mendes R. Patologia do Trabalho, 3ª ed.",
    "tags": [
      "história da medicina do trabalho",
      "pai da medicina do trabalho",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2026-3",
    "topography": "7.2",
    "topic": "Dermatite de contato",
    "module": "Saúde Coletiva",
    "text": "Uma trabalhadora da área Metalúrgica apresentou no Exame Periódico (NR-7), reação cutânea maculopapular, pruriginosa nas orelhas ao nivel do orificio dos brincos, no punho ao usar relógio, ou relacionada com o botão metálico da calça \"jeans\" sugere dermatite de contato por:",
    "options": [
      "Niquel",
      "Cromo",
      "Zinco",
      "Aluminio"
    ],
    "correctAnswer": 0,
    "explanation": "Dermatite eczematosa pruriginosa nos lóbulos (brincos), no punho (relógio) e na região do botão metálico da calça jeans: distribuição clássica da dermatite alérgica de contato ao níquel, o alérgeno de contato mais comum, sobretudo em mulheres. É reação de hipersensibilidade tipo IV, confirmada pelo teste de contato (patch test).",
    "commentary": "Cromo (B): típico do cimento (pedreiros) e do couro curtido (calçados, luvas).\n\nZinco (C): é raramente alergênico; o óxido de zinco é usado até em pomadas protetoras.\n\nAlumínio (D): alergia de contato muito rara (às vezes ligada a vacinas e desodorantes).",
    "tip": "Brinco + relógio + botão de jeans = níquel. Cimento e couro = cromo.",
    "reference": "Sociedade Brasileira de Dermatologia. Dermatite de contato — Consenso. Ministério da Saúde. Dermatoses ocupacionais — Protocolos de Complexidade Diferenciada, 2006.",
    "tags": [
      "dermatite de contato",
      "níquel",
      "dermatoses ocupacionais",
      "teste de contato"
    ]
  },
  {
    "id": "famerp2026-4",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um Trabalhador da Área da Saúde (Enfermeiro) teve a sua Jornada de Trabalho Expirada as 18h, saindo em sua motocicleta em direção à sua residência, quando lembrou-se de realizar as compras do mês em um supermercado que estava inserido no trajeto, tendo gasto aproximadamente 90 minutos para realiza-las. Dando início ao retorno para sua residência, sofre um acidente, sendo projetado ao solo, apresentando diversas fraturas de membros superiores.\n\nComo se caracteriza esse acidente?",
    "options": [
      "Não tenho elementos para caracterizar como Acidente de Trabalho",
      "Caracteriza-se como Acidente do Trabalho de acordo com a Legislação Vigente",
      "Caracteriza-se como acidente de Trânsito de acordo com a Legislação Vigente",
      "Tanto pode ser caracterizado como Acidente de Trânsito ou do Trabalho"
    ],
    "correctAnswer": 2,
    "explanation": "O acidente de trajeto (in itinere) é equiparado a acidente do trabalho (Lei 8.213/1991, art. 21, IV, d) quando ocorre no percurso habitual entre residência e trabalho, sem desvio ou interrupção por interesse pessoal. Ao parar por cerca de 90 minutos para fazer compras do mês, o trabalhador interrompeu o trajeto por motivo particular; o acidente que ocorre depois perde o nexo com o trabalho e é caracterizado como acidente de trânsito comum.\n\n(Paradas curtas e inerentes ao trajeto, como abastecer o veículo, não costumam descaracterizar.)",
    "commentary": "Sem elementos para caracterizar (A): os dados permitem concluir — houve desvio por interesse pessoal.\n\nAcidente do trabalho (B): o desvio prolongado e particular rompe o nexo do trajeto.\n\nTanto um quanto outro (D): a caracterização não é indiferente; com interrupção por interesse pessoal, não é acidente de trajeto.",
    "tip": "Acidente de trajeto exige percurso habitual sem desvio ou interrupção por interesse pessoal.",
    "reference": "Brasil. Lei nº 8.213/1991, art. 21, IV, alínea d. INSS — Instrução Normativa PRES/INSS nº 128/2022.",
    "tags": [
      "acidente de trajeto",
      "acidente do trabalho",
      "previdência social",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2026-5",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "No ano 1833, o primeiro inspetor Médico Robert Backer, durante a Revolução Industrial na Inglaterra (1760-1850) assinou o \"Factory Act\", cuja redação era seguinte:",
    "options": [
      "A idade minima para o trabalho era de 6 anos",
      "A idade máxima para o trabalho noturno será de 30 anos",
      "Fica proibido o trabalho noturno para menores de 35 anos",
      "A jornada de trabalho semanal será no mínimo de 69 horas"
    ],
    "correctAnswer": 3,
    "explanation": "O Factory Act de 1833 (Inglaterra) regulou o trabalho nas fábricas têxteis e criou os inspetores de fábrica (entre eles Robert Baker, médico). Principais pontos: proibição do trabalho de menores de 9 anos; jornada de até 9 horas/dia (48 h/semana) para 9 a 13 anos; até 12 horas/dia, 69 horas por semana, para 13 a 18 anos; e proibição do trabalho noturno para menores de 18 anos.\n\nO gabarito escolheu a alternativa D pelo número de 69 horas semanais, que é o dado histórico — embora a lei o tenha fixado como MÁXIMO, não mínimo.",
    "commentary": "Idade mínima de 6 anos (A): a idade mínima fixada foi de 9 anos.\n\nIdade máxima de 30 anos para trabalho noturno (B): não existia esse limite; a proteção era para menores de 18.\n\nProibição de trabalho noturno para menores de 35 anos (C): a proibição era para menores de 18 anos.",
    "alert": "Gabarito discutível: pelo Factory Act de 1833, 69 horas semanais eram o limite MÁXIMO para jovens de 13 a 18 anos, não o mínimo. A alternativa D foi mantida por ser a única com o dado histórico correto; a questão seria passível de anulação.",
    "tip": "Factory Act 1833: < 9 anos proibido; 13–18 anos até 12 h/dia (69 h/semana); sem trabalho noturno < 18 anos; cria inspetores.",
    "reference": "Mendes R. Patologia do Trabalho, 3ª ed. — História da saúde do trabalhador. Rosen G. Uma história da saúde pública. Hucitec/Unesp.",
    "tags": [
      "lei fabril inglesa de 1833",
      "história da medicina do trabalho",
      "trabalho infantil",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2026-6",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Ao realizar Exame Admissional de um Trabalhador da Área Metalúrgica que apresenta Nível de Pressão Sonora Elevado (RUÍDO) Médio de 115 decibéis, o E.P.I. (Equipamento de Proteção Individual), mais adequado a ser utilizado em uma Jornada de 40 horas semanais deve ser:",
    "options": [
      "Protetor Auricular tipo Concha",
      "Protetor Auricular tipo de Inserção",
      "Qualquer dos dois tipos de protetores de Inserção ou Concha",
      "Não há necessidade para a utilização de protetor auricular"
    ],
    "correctAnswer": 0,
    "explanation": "Pela NR-15 (Anexo 1), o limite de tolerância é de 85 dB(A) por 8 horas, e o tempo permitido cai pela metade a cada 5 dB. Com 115 dB(A), a exposição máxima diária sem proteção é de apenas 7 minutos.\n\nPara uma jornada de 8 horas a atenuação necessária é muito alta, e o gabarito considera mais adequado o protetor tipo concha, que costuma oferecer atenuação efetiva maior e menos dependente da colocação pelo trabalhador e da anatomia do conduto.",
    "commentary": "Protetor de inserção (B): em geral tem atenuação real menor e muito dependente da colocação correta.\n\nQualquer um dos dois (C): a escolha depende da atenuação necessária (NRRsf); nesse nível de ruído não é indiferente.\n\nSem protetor (D): 115 dB é o limite máximo da norma, tolerado por poucos minutos; o protetor é obrigatório.",
    "alert": "Questão com nuance: na prática, o protetor é escolhido pelo NRRsf do modelo, e para 115 dB costuma-se recomendar proteção dupla (plug + concha), além de medidas coletivas. O gabarito oficial é A.",
    "tip": "NR-15: 85 dB = 8 h; cada +5 dB corta o tempo pela metade; 115 dB = 7 minutos.",
    "reference": "Brasil. Ministério do Trabalho. NR-15 — Atividades e Operações Insalubres, Anexo 1 (Ruído). NR-6 — Equipamento de Proteção Individual.",
    "tags": [
      "ruído ocupacional",
      "NR-15",
      "equipamento de proteção individual",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2026-7",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "PLINIO (23 a 79 D.C.), descreveu no ambiente nocivo das Minas de Carvão, Chumbo e Mercúrio, relatando que os trabalhadores utilizavam o Primeiro Equipamento de Proteção Individual (E.P.I.). descrito na literatura disponível.\n\nQual foi o equipamento individual descrito:",
    "options": [
      "Botas do tipo Coturno",
      "Membrana da bexiga do Carneiro",
      "Avental de raspa de couro de animais",
      "Camisa de Algodão com Manga Cumprida"
    ],
    "correctAnswer": 1,
    "explanation": "Plínio, o Velho (23–79 d.C.), em sua Historia Naturalis, descreveu os trabalhadores que manipulavam minérios (como o mínio, óxido de chumbo, e o cinábrio, de mercúrio) cobrindo o rosto com membranas de bexiga de animais (carneiro) para não inalar as poeiras — o primeiro registro de um equipamento de proteção individual, precursor das máscaras respiratórias.",
    "commentary": "Botas do tipo coturno (A), avental de raspa de couro (C) e camisa de algodão de manga comprida (D): não são o equipamento descrito por Plínio; o registro histórico é a máscara improvisada com bexiga animal contra poeiras.",
    "tip": "Primeiro EPI descrito (Plínio, séc. I): máscara de bexiga de animal contra poeira de chumbo e mercúrio.",
    "reference": "Mendes R. Patologia do Trabalho, 3ª ed. — Breve história da saúde do trabalhador. Fundacentro — História da segurança e saúde no trabalho.",
    "tags": [
      "história da medicina do trabalho",
      "equipamento de proteção individual",
      "primeiro EPI"
    ]
  },
  {
    "id": "famerp2026-8",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um trabalhador da área Rural durante o Exame Médico Periódico (NR-7) apresentou sintomas de intoxicação por Organofosforados.\n\nIdentifique o provável Organofosforado:",
    "options": [
      "Acetilcolina",
      "Ácido Mandélico",
      "Ácido organo fosfórico",
      "Ácido delta aminolevulínico"
    ],
    "correctAnswer": 2,
    "explanation": "Os organofosforados são ésteres do ácido fosfórico (\"ácido organofosfórico\"), usados como inseticidas agrícolas. Inibem irreversivelmente a acetilcolinesterase, acumulando acetilcolina nas sinapses (síndrome colinérgica: miose, sialorreia, broncorreia, bradicardia, fasciculações). No trabalhador exposto, o monitoramento biológico é feito pela atividade da colinesterase plasmática e eritrocitária.",
    "commentary": "Acetilcolina (A): é o neurotransmissor que se acumula; não é o agente tóxico.\n\nÁcido mandélico (B): é o indicador biológico de exposição ao estireno (e ao etilbenzeno).\n\nÁcido delta-aminolevulínico (D): indicador de exposição ao chumbo (saturnismo).",
    "tip": "Organofosforado/carbamato: inibe colinesterase → monitore colinesterase. ALA-U = chumbo. Ácido mandélico = estireno.",
    "reference": "Brasil. NR-7 — PCMSO, Anexo I (Indicadores biológicos de exposição). Ministério da Saúde. Diretrizes Brasileiras para o diagnóstico e tratamento de intoxicações por agrotóxicos, 2018.",
    "tags": [
      "organofosforados",
      "agrotóxicos",
      "colinesterase",
      "intoxicação exógena"
    ]
  },
  {
    "id": "famerp2026-9",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Criança de 3 anos, masculino, apresentou febre de 38,5°C há 1 dia, tosse seca (inicialmente), coriza, conjuntivite não purulenta, com pequenos pontos brancos na boca na altura do último molar, com exantema que surgiu atrás das orelhas, no rosto e se espalhou pelo corpo. Foi à UPA, onde foi feita a suspeita de sarampo. Frequentou a Creche Municipal até o dia anterior ao início dos sintomas. Esta Creche atende crianças de 3 meses a 6 anos de idade e fica em um bairro com grande densidade populacional. A mãe refere que tem outra filha de 7 anos, que está em tratamento de leucemia linfoide aguda.\n\nQual é a ação de vacinação, de acordo com a recomendação do Ministério da Saúde, no domicílio desta criança e na creche para interromper a circulação do vírus e controlar da transmissão do sarampo?",
    "options": [
      "Deve ser realizada a vacinação por varredura, em até 48 horas, em todos os indivíduos suscetíveis* maiores de seis meses e que residem nos quarteirões próximos da creche e nos quarteirões próximos do domicílio do caso suspeito (*exceto nas contraindicações a aplicação da vacina, como a irmã de 7 anos com Leucemia que deve receber a Imunoglobulina humana inespecífica)",
      "Deve ser realizada a vacinação de bloqueio com a Vacina Tríplice Viral (SCR), preferencialmente no prazo máximo de até 72 horas, para as crianças suscetíveis de 3 a 6 meses e gestantes* (*exceto nos indivíduos com contraindicações a aplicação da vacina)",
      "Deve ser realizada a vacinação de bloqueio, em até 72 horas, em todos os indivíduos suscetíveis*, que tiveram contato com o caso suspeito, a partir dos 6 meses de idade, sem limite de idade com a Vacina Tríplice Viral (SCR) (*exceto nas contraindicações a aplicação da vacina, como a irmã de 7 anos com Leucemia que deve receber a Imunoglobulina humana inespecífica)",
      "Deve ser realizada a vacinação por varredura com a Vacina Tríplice Viral (SCR), no prazo máximo de até 48 horas, em todos os indivíduos suscetíveis* de 3 meses até nove meses que frequentam as creches no bairro do caso suspeito bem como no seu domicílio (*exceto nos indivíduos com contraindicações a aplicação da vacina)"
    ],
    "correctAnswer": 2,
    "explanation": "Caso suspeito de sarampo (febre, exantema, tosse, coriza, conjuntivite e manchas de Koplik). A medida de controle imediata é a vacinação de BLOQUEIO com tríplice viral, em até 72 horas após a exposição, de todos os contatos suscetíveis (no domicílio, na creche e em outros locais de convívio) a partir dos 6 meses de idade, sem limite de idade (a dose entre 6 e 11 meses é \"dose zero\", não conta para o calendário).\n\nContatos com contraindicação à vacina — gestantes, menores de 6 meses e imunodeprimidos, como a irmã em tratamento de leucemia — recebem imunoglobulina humana inespecífica em até 6 dias.",
    "commentary": "Varredura em até 48 horas nos quarteirões (A): a varredura é estratégia de intensificação mais ampla; a ação imediata para contatos de caso suspeito é o bloqueio em até 72 horas.\n\nBloqueio só de 3 a 6 meses e gestantes (B): menores de 6 meses e gestantes NÃO recebem tríplice viral (vírus vivo); o bloqueio é para suscetíveis a partir de 6 meses.\n\nVarredura de 3 a 9 meses (D): faixa etária errada e inclui menores de 6 meses, que não devem ser vacinados.",
    "tip": "Sarampo: bloqueio com tríplice viral em até 72 h para contatos ≥ 6 meses; imunodeprimido, gestante e < 6 meses → imunoglobulina em até 6 dias.",
    "reference": "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed., 2024 — Sarampo. Ministério da Saúde. Plano de ação para interrupção da circulação do vírus do sarampo.",
    "tags": [
      "sarampo",
      "vacinação de bloqueio",
      "tríplice viral",
      "imunoglobulina humana"
    ]
  },
  {
    "id": "famerp2026-10",
    "topography": "10",
    "topic": "Raiva",
    "module": "Saúde Coletiva",
    "text": "Menino de 15 anos, previamente hígido, procura atendimento na Unidade Básica de Saúde (UBS) referindo que há cerca de 30 min foi mordido por um gato de rua ao tentar retirá-lo de dentro da cozinha de sua avó idosa. As mordidas resultaram em lesões corto-contusas nas mãos, principalmente nos dedos, sendo mais intensas na mão direita atingindo polpas digitais. Paciente nega episódios anteriores de agressões desse tipo. O gato não pertence a ninguém da vizinhança e fugiu após a tentativa de ser capturado. Na localidade observou-se, no ano anterior, a confirmação de raiva em gatos.\n\nA conduta adequada no atendimento imediato ao paciente é:",
    "options": [
      "Lavar os ferimentos com antissépticos; aguardar a busca ativa do animal, até 10 dias, pela zoonose para início da profilaxia; aplicar reforço da vacina dt (difteria e tétano) e fazer curativo diariamente",
      "Lavar os ferimentos com água corrente abundante e sabão; administrar a vacina antirrábica em 4 doses, nos dias 0, 3, 7 e 14; aplicar imunoglobulina humana antirrábica",
      "Higienizar adequadamente e suturar as lacerações; prescrever 1 dose de penicilina benzatina 1,2 milhão UI; aplicar o soro antirrábico; soro antitetânico e agendar curativos diários",
      "Higienizar com solução antisséptica; administrar a 1ª dose da vacina antirrábica; na presença de qualquer reação adversa, contraindicar as doses subsequentes; aplicar o soro antirrábico"
    ],
    "correctAnswer": 1,
    "explanation": "Mordedura por gato de rua, que fugiu (não pode ser observado), em área com raiva felina confirmada, com lesões nas mãos e polpas digitais (região muito inervada): exposição GRAVE. A conduta é:\n• lavar imediatamente com água corrente abundante e sabão (a medida mais eficaz para reduzir o vírus);\n• vacina antirrábica em 4 doses, nos dias 0, 3, 7 e 14 (intramuscular);\n• soro ou imunoglobulina humana antirrábica, infiltrada nas lesões.\n\nAs feridas por mordedura não devem ser suturadas, salvo necessidade estética ou hemostática. Avaliar também a profilaxia do tétano.",
    "commentary": "Antissépticos e aguardar o animal por 10 dias (A): a observação só vale para cão ou gato observável; animal desaparecido em área com raiva exige profilaxia imediata.\n\nSuturar e penicilina benzatina (C): mordeduras não devem ser suturadas de rotina, e a penicilina benzatina não é o antibiótico indicado (amoxicilina-clavulanato, se necessário).\n\nSuspender doses se houver reação adversa (D): reações leves não contraindicam as doses seguintes; e a lavagem com água e sabão é a primeira medida.",
    "tip": "Gato/cão desaparecido + lesão grave (mão, face, profunda) = vacina (0, 3, 7, 14) + soro/imunoglobulina antirrábica.",
    "reference": "Ministério da Saúde. Nota Técnica nº 8/2022-CGZV/DEIDT/SVS — Atualização do protocolo de profilaxia pré, pós e reexposição da raiva humana. Guia de Vigilância em Saúde, 6ª ed., 2024.",
    "tags": [
      "raiva",
      "profilaxia antirrábica",
      "mordedura de gato",
      "exposição grave"
    ]
  },
  {
    "id": "famerp2026-11",
    "topography": "10",
    "module": "Saúde Coletiva",
    "text": "Paciente com 53 anos, portador de asma, chega na Emergência do Hospital de Ensino com a história de febre de 38,5° C há 1 dia, tosse seca, dor de garganta, mialgia, cefaleia e prostração. Foi feito diagnóstico de Sindrome Gripal com identificação no painel de patógenos respiratórios do vírus Influenza.\n\nQual a conduta correta para este caso?",
    "options": [
      "Internar para solicitar a pesquisa de virus respiratório pelo Polymerase Chain Reaction (PCR) e notificar no SINAN",
      "Prescrever antitérmico, colher exame para a pesquisa de virus respiratório pelo Polymerase Chain Reaction (PCR) e retornar se dificuldade respiratória",
      "Internar para introduzir antibiótico macrolideo injetável, pois a principal complicação de Sindrome Gripal em paciente com asma é a pneumonia",
      "Prescrever oseltamivir, preferencialmente nas primeiras 48h. Orientar o paciente a retornar"
    ],
    "correctAnswer": 3,
    "explanation": "Síndrome gripal (febre, tosse, dor de garganta, mialgia, cefaleia) com influenza confirmada, em paciente com fator de risco para complicação (asma — doença pulmonar crônica). Pelo protocolo do Ministério da Saúde, todo paciente com síndrome gripal e fator de risco deve receber oseltamivir, idealmente nas primeiras 48 horas, mesmo sem confirmação laboratorial — independentemente da vacinação. Sem sinais de gravidade (dispneia, hipoxemia, piora), o tratamento é ambulatorial, com orientação de retorno se houver sinais de alarme.",
    "commentary": "Internar para PCR e notificar no SINAN (A): não há sinais de síndrome respiratória aguda grave; síndrome gripal só é notificada em unidades sentinela, e o vírus já foi identificado.\n\nSó antitérmico e PCR (B): com fator de risco, o antiviral está indicado; e o diagnóstico já está feito.\n\nInternar com macrolídeo IV (C): não há pneumonia; antibiótico não trata influenza.",
    "tip": "Síndrome gripal + fator de risco (asma, gestante, idoso, < 5 anos, imunossupressão) = oseltamivir, idealmente em 48 h.",
    "reference": "Ministério da Saúde. Guia de Manejo e Tratamento de Influenza 2023. Guia de Vigilância em Saúde, 6ª ed., 2024.",
    "tags": [
      "influenza",
      "síndrome gripal",
      "oseltamivir",
      "asma"
    ]
  },
  {
    "id": "famerp2026-12",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Homem 57 anos, tabagista, portador de dislipidemia, hipertensão arterial e obesidade. Reside sozinho em área onde a população é atendida pela Estratégia de Saúde da Família (ESF), porém não faz seguimento com a Equipe da ESF. Estava em sua casa quando apresentou intensa dor em região precordial iniciada há 24 horas, com piora progressiva, procurou o vizinho que chamou o SAMU e foi levado para a UPA. Deu entrada no serviço e evoluiu a óbito poucas horas após, sem resposta a manobras de reanimação. Eletrocardiograma da entrada na unidade evidenciou fibrilação ventricular.\n\nEm relação ao preenchimento da Declaração de Óbito deste caso a alternativa correta é:",
    "options": [
      "Parte I: a) fibrilação ventricular b) infarto agudo do miocárdio c) hipertensão arterial Parte II d) dislipidemia, tabagismo, obesidade",
      "Parte I: a) infarto agudo do miocárdio b) aterosclerose coronariana c) fibrilação atrial Parte II d) dislipidemia, hipertensão arterial obesidade",
      "Parte I: a) fibrilação ventricular b) infarto agudo do miocárdio c) aterosclerose coronariana Parte II d) dislipidemia, hipertensão arterial, obesidade",
      "Parte I: a) aterosclerose coronariana b) fibrilação atrial c) infarto agudo do miocárdio Parte II d) dislipidemia, hipertensão arterial obesidade"
    ],
    "correctAnswer": 2,
    "image": "/images/famerp2026-12.webp",
    "explanation": "Na Parte I da Declaração de Óbito, escreve-se a sequência de eventos de cima para baixo, uma causa por linha: na linha (a) a causa imediata (terminal) e na última linha preenchida a causa básica, que iniciou toda a cadeia. Na Parte II, as condições que contribuíram sem fazer parte da sequência.\n\nAqui: (a) fibrilação ventricular, devida a (b) infarto agudo do miocárdio, devido a (c) aterosclerose coronariana (causa básica). Hipertensão, dislipidemia, obesidade (e tabagismo) entram na Parte II, como fatores contribuintes.",
    "commentary": "Hipertensão como causa básica (A): a sequência fisiopatológica do IAM é a aterosclerose coronariana; a hipertensão é fator contribuinte (Parte II).\n\nIAM, aterosclerose e fibrilação atrial (B): a ordem está invertida e a arritmia registrada foi fibrilação ventricular, não atrial.\n\nAterosclerose, FA e IAM (D): ordem invertida (a causa básica deve ficar na última linha) e arritmia errada.",
    "tip": "DO: linha a = causa terminal; última linha = causa básica. Fatores de risco vão para a Parte II.",
    "reference": "Ministério da Saúde. Declaração de Óbito: manual de instruções para preenchimento, 2022. CID-10 — regras de seleção da causa básica.",
    "tags": [
      "declaração de óbito",
      "causa básica",
      "infarto agudo do miocárdio",
      "atestado de óbito"
    ]
  },
  {
    "id": "famerp2026-13",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Mulher cisgênero, de 34 anos, procura atendimento em uma UBS (Unidade Básica de Saúde) do seu bairro, com seu médico de família, pois uma amiga descobriu recentemente um \"câncer no útero\". Chega em consulta solicitando diversos exames para investigação de câncer, pois está muito preocupada que possa ter algum problema grave de saúde, uma vez que não passa por qualquer avaliação há mais de 5 anos. Não tem comorbidades, é tabagista de 1 maço ao dia desde os 20 anos e tem IMC de 30,5 kg/m².\n\nConsiderando as recomendações baseadas em evidências científicas assinale a alternativa que incorpore as investigações e exames corretamente indicados para a paciente:",
    "options": [
      "Tomografia de tórax de baixa dose; coleta de citopatologia oncótica, coleta de sorologia para HIV e sífilis",
      "Coleta de citopatologia oncótica; aferição de pressão arterial; avaliação de perfil lipídico; avaliação de glicemia de jejum; coleta de sorologia para HIV e sífilis",
      "Coleta de citopatologia oncótica; aferição de pressão arterial; avaliação de perfil lipídico, avaliação de glicemia de jejum; mamografia",
      "Aferição de pressão arterial; coleta de citopatologia oncótica, solicitação de ultrassonografia transvaginal; coleta de sorologia para HIV e sífilis"
    ],
    "correctAnswer": 1,
    "explanation": "Rastreamentos com evidência para mulher de 34 anos, tabagista e obesa:\n• Citologia oncótica (25 a 64 anos; ela está há mais de 5 anos sem exame).\n• Pressão arterial (todos os adultos).\n• Glicemia de jejum (sobrepeso/obesidade e outros fatores de risco).\n• Perfil lipídico (adulto com fatores de risco cardiovascular, como tabagismo e obesidade).\n• Sorologias para HIV e sífilis (oferta universal ao menos uma vez e conforme risco).\n\nAlém disso, abordagem do tabagismo e da obesidade. A ansiedade pela doença da amiga deve ser acolhida sem pedir exames sem indicação.",
    "commentary": "Tomografia de baixa dose (A): o rastreamento de câncer de pulmão é para 50–80 anos com carga tabágica ≥ 20 maços-ano; ela tem 34 anos e 14 maços-ano.\n\nMamografia (C): não é indicada aos 34 anos sem alto risco (o Ministério da Saúde recomenda dos 50 aos 69 anos).\n\nUltrassonografia transvaginal (D): não há indicação de USG transvaginal para rastreamento de câncer de ovário ou endométrio.",
    "tip": "Rastreie o que tem evidência: citologia, PA, glicemia e lipídios por risco, HIV/sífilis. Nada de TC, mamografia ou USG transvaginal sem indicação.",
    "reference": "Ministério da Saúde. Cadernos de Atenção Primária nº 29 — Rastreamento, 2010. INCA. Diretrizes para o rastreamento do câncer do colo do útero, 2016. USPSTF Recommendations.",
    "tags": [
      "rastreamento",
      "prevenção quaternária",
      "citologia oncótica",
      "atenção primária"
    ]
  },
  {
    "id": "famerp2026-14",
    "topography": "10",
    "topic": "Dengue",
    "module": "Saúde Coletiva",
    "text": "Você é um médico de família e comunidade em uma UBS (Unidade Básica de Saúde) e o seu município enfrenta uma das piores epidemias de dengue dos últimos 20 anos. A unidade está com fluxo intenso de atendimentos. Considerando as fases clínicas da doença e a classificação dos grupos de risco, assinale a alternativa que elucida estratégia de acordo com o protocolo do Ministério da Saúde e que otimize recursos físicos e humanos diante de tal contexto epidemiológico. Leve em consideração apenas o manejo dos grupos A e B uma vez que grupos C e D serão referenciados para setor hospitalar.",
    "options": [
      "Coleta de hemograma e reavaliação diária para grupo B até 48h após remissão da febre; coleta de hemograma e reavaliação após 48h da remissão da febre para grupo A; reidratação oral",
      "Coleta de hemograma e reavaliação diária para grupos A e B; hidratação endovenosa para os grupos A e B até 48h da admissão",
      "Coleta de hemograma e reavaliação diária para grupos B até 48h após remissão da febre; hidratação endovenosa para os grupos A e B",
      "Coleta de hemograma e reavaliação diária para grupos A e B até 48h após remissão da febre; reidratação oral disponível em sala de espera da UBS; hidratação endovenosa"
    ],
    "correctAnswer": 0,
    "explanation": "Na epidemia, os grupos A e B são tratados na atenção primária:\n• Grupo A (sem sinal de alarme, sem comorbidade ou risco social, sem sangramento): tratamento domiciliar com hidratação oral; hemograma a critério e reavaliação no dia da melhora da febre (ou até o 5º dia) e se surgirem sinais de alarme.\n• Grupo B (sangramento de pele espontâneo ou induzido, comorbidade, gestante, idoso, risco social): hemograma obrigatório, hidratação oral supervisionada e reavaliação clínica e laboratorial diária até 48 horas após a remissão da febre.\n\nO gabarito considerou a alternativa A, que separa o seguimento diário do grupo B e a reavaliação após a febre no grupo A, sempre com reidratação oral.",
    "commentary": "Hidratação venosa para A e B (B): grupos A e B recebem hidratação ORAL; venosa é para os grupos C e D.\n\nHidratação venosa para A e B (C): mesmo erro.\n\nHemograma diário para todos e hidratação venosa (D): o grupo A não precisa de reavaliação laboratorial diária, e a hidratação venosa não é a regra nesses grupos.",
    "tip": "Dengue: A e B = hidratação oral (B com hemograma e reavaliação diária até 48 h sem febre). C e D = venosa e hospital.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança, 6ª ed., 2024.",
    "tags": [
      "dengue",
      "classificação de risco",
      "hidratação oral",
      "atenção primária"
    ]
  },
  {
    "id": "famerp2026-15",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "O Programa Nacional de Imunização (PNI) recomenda as vacinas que devem ser administradas em gestantes a nível nacional. Dentre elas, preconiza-se a administração da vacina dTpa a partir da 20ª semana de gestação. A seguir, assinale a alternativa que elucida corretamente o motivo dessa recomendação.",
    "options": [
      "A dose de reforço de dTpa nas gestantes é recomendada devido a imunossupressão fisiológica enfrentada durante o ciclo gravídico-puerperal",
      "A dose de reforço de dTpa nas gestantes constitui estratégia em saúde pública, regulamentada pelo Ministério da Saúde, considerando o aumento de morbimortalidade materna em caso de difteria, tétano e coqueluche no ciclo gravídico-puerperal",
      "A dose de reforço de dTpa nas gestantes é preconizada uma vez que imunizantes contra difteria, tétano e B. pertussis não são administrados em lactentes",
      "A dose de reforço de dTpa nas gestantes aumenta a produção de anticorpos maternos e, portanto, constitui imunizante passivo aos lactentes contra difteria, tétano e B. pertussis, até que os mesmos sejam vacinados e adquiram imunidade ativa"
    ],
    "correctAnswer": 3,
    "explanation": "A dTpa na gestante (a partir da 20ª semana, em toda gestação) tem como objetivo principal proteger o recém-nascido contra a coqueluche. Os anticorpos IgG maternos atravessam a placenta e conferem imunidade passiva ao lactente nos primeiros meses, até que ele complete o esquema com a pentavalente (2, 4 e 6 meses). A coqueluche é mais grave e letal justamente nos menores de 6 meses.",
    "commentary": "Imunossupressão fisiológica da gestação (A): o motivo não é proteger a gestante de uma imunossupressão, e sim o bebê.\n\nAumento da morbimortalidade materna (B): o foco da estratégia é a proteção neonatal contra coqueluche (e tétano neonatal), não a doença materna.\n\nLactentes não recebem vacina contra difteria, tétano e coqueluche (C): recebem — a pentavalente aos 2, 4 e 6 meses; a dTpa materna cobre o intervalo até a imunidade ativa.",
    "tip": "dTpa na gestação (≥ 20 semanas, toda gestação) = anticorpo passivo para o bebê contra coqueluche.",
    "reference": "Ministério da Saúde. Calendário Nacional de Vacinação da Gestante, 2024. SBIm. Calendário de vacinação da gestante 2024/2025.",
    "tags": [
      "dTpa",
      "vacinação da gestante",
      "coqueluche",
      "imunidade passiva"
    ]
  },
  {
    "id": "famerp2026-16",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Homem de 64 anos, diabético, em uso de metformina 1000mg/dia, sem outras comorbidades, procura atendimento com sua médica de família e comunidade em sua UBS (Unidade Básica de Saúde) e queixa-se de cansaço, sonolência, boca seca, perda de peso e dificuldade para ter relações sexuais com a esposa. A médica revê o prontuário e identifica que o paciente tem exames do mês anterior com a única alteração sendo de sua hemoglobina glicada no valor de 14,5%. Em consultas anteriores a médica já havia captado que ele tem certa resistência ao uso da insulina, e quando retoma o assunto do resultado do exame, ele diz \"insulina não doutora, depois que minha finada mãe começou com a insulina, tudo desandou, fez até diálise!\". Considerando o método clínico centrado na pessoa e as diretrizes clínicas para manejo de diabetes mellitus, assinale a alternativa que corresponde com a correta condução do caso.",
    "options": [
      "Explicar de forma acolhedora que as queixas trazidas estão relacionadas com a descompensação do diabetes mellitus e prescrever o uso de insulina NPH 0,5U/kg",
      "Explorar a experiência da doença e desmistificar equívocos quanto ao uso da insulina, compreender as ideias, sentimentos e expectativas da doença e do seu tratamento; pactuar em decisão compartilhada a introdução da insulina",
      "Explorar a experiência da doença e a decisão compartilhada, respeitando definitivamente a decisão do paciente de não fazer uso de insulina. Registrar em prontuário, para respaldo, que o paciente está negando o tratamento proposto",
      "Explicar ao paciente os efeitos deletérios da evolução da doença e otimizar tratamento farmacológico por meio de medicamentos via oral, acolhendo as angústias com tratamento por insulina; compartilhar o caso em reunião de equipe"
    ],
    "correctAnswer": 1,
    "explanation": "Diabético com HbA1c de 14,5% e sintomas de catabolismo (poliúria/boca seca, perda de peso, cansaço): há indicação de insulina. O paciente resiste por uma experiência familiar (associa a insulina à diálise da mãe).\n\nPelo método clínico centrado na pessoa, explora-se a experiência da doença (ideias, sentimentos, expectativas e impacto na vida), desfazem-se as crenças equivocadas (a diálise decorreu da evolução do diabetes, não da insulina) e busca-se um plano comum, com decisão compartilhada para iniciar a insulina.",
    "commentary": "Explicar e prescrever NPH 0,5 U/kg (A): ignora a experiência e a resistência do paciente; impor a prescrição tende a resultar em não adesão.\n\nRespeitar definitivamente a recusa e registrar (C): a autonomia deve ser respeitada, mas antes é preciso explorar e esclarecer as crenças; a decisão não é \"definitiva\" e o vínculo permite retomar o tema.\n\nOtimizar só com orais (D): com HbA1c de 14,5% e catabolismo, os orais isoladamente não atingem o controle; seria evitar o problema.",
    "tip": "Método clínico centrado na pessoa: explorar a experiência da doença (ideias, sentimentos, expectativas) → entender a pessoa → plano conjunto.",
    "reference": "Stewart M et al. Medicina Centrada na Pessoa: transformando o método clínico, 3ª ed. Artmed, 2017. Sociedade Brasileira de Diabetes. Diretriz 2024 — Insulinoterapia no DM2.",
    "tags": [
      "método clínico centrado na pessoa",
      "diabetes mellitus tipo 2",
      "insulinoterapia",
      "decisão compartilhada"
    ]
  },
  {
    "id": "famerp2026-17",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 36 anos de idade, trabalhadora na área de saúde pública, atendida no ambulatório de Ginecologia, irá fazer doutorado em outro país, está casada há dois anos e pretende engravidar após retornar ao país dentro de três anos. Refere a menarca aos 12 anos, ciclos menstruais regulares a cada 28/30 dias, fluxo menstrual de 5 dias, cólica menstrual de baixa intensidade, iniciou a vida sexual aos 20 anos, faz uso de preservativo masculino como método contraceptivo.\n\nQuais exames você solicitaria para fornecer as orientações à paciente?",
    "options": [
      "Dosagem de Estradiol e progesterona no terceiro dia do ciclo menstrual",
      "Dosagem de TSH (Hormônio TireoEstimulante) e PRL (Prolactina) no terceiro dia do ciclo menstrual",
      "Dosagem de FSH (Hormônio Folículo Estimulante) e HAM (Hormônio Antimülleriano) no terceiro dia do ciclo menstrual",
      "Dosagem de ATGO (Anti-tireoglobulina) e HAM (Hormônio Antimülleriano) no terceiro dia do ciclo menstrual"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 36 anos que quer adiar a gestação por 3 anos: o fator mais importante é a idade e a reserva ovariana, que cai de forma acelerada após os 35 anos. Para orientar (inclusive sobre preservação da fertilidade, como o congelamento de óvulos), avalia-se a reserva ovariana com FSH (e estradiol) no início da fase folicular (2º–3º dia) e o hormônio antimülleriano, que pode ser dosado em qualquer fase do ciclo; a contagem de folículos antrais por USG complementa.",
    "commentary": "Estradiol e progesterona no 3º dia (A): a progesterona no início do ciclo não informa nada (é útil na fase lútea para confirmar ovulação); o estradiol isolado não avalia reserva.\n\nTSH e prolactina (B): avaliam causas de anovulação em mulheres com ciclo irregular; ela tem ciclos regulares.\n\nAntitireoglobulina e HAM (D): o anticorpo antitireoglobulina não avalia reserva ovariana.",
    "tip": "Reserva ovariana: HAM (qualquer dia) + FSH/estradiol no 2º–3º dia + contagem de folículos antrais.",
    "reference": "FEBRASGO. Avaliação da reserva ovariana — Tratado de Ginecologia FEBRASGO, 2019. ASRM Practice Committee. Testing and interpreting measures of ovarian reserve, 2020.",
    "tags": [
      "reserva ovariana",
      "hormônio antimülleriano",
      "FSH",
      "preservação da fertilidade"
    ]
  },
  {
    "id": "famerp2026-18",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 55 anos, casada, G=3 P=3 partos normais, com vida sexual ativa, vem ao ambulatório de Ginecologia com queixa de perda urinária contínua pela vagina após ter sido submetida a histerectomia abdominal total por miomatose uterina.\n\nA conduta é:",
    "options": [
      "Iniciar com Oxibutinina oral",
      "Teste com injeção de azul de metileno intravesical",
      "Encaminhar a paciente para estudo urodinâmico",
      "Solicitar Ultrassonografia vaginal e reavaliação após"
    ],
    "correctAnswer": 1,
    "explanation": "Perda urinária CONTÍNUA pela vagina após histerectomia abdominal: fístula vesicovaginal, a mais comum das fístulas urogenitais em países desenvolvidos (complicação de cirurgia ginecológica). O primeiro exame é simples e feito no consultório: instilação de azul de metileno na bexiga com gaze ou tampão na vagina — se o tampão se cora de azul, confirma a fístula vesicovaginal. Se sair líquido claro, pensa-se em fístula ureterovaginal (então se usa fenazopiridina oral ou índigo carmim EV).",
    "commentary": "Oxibutinina (A): trata bexiga hiperativa (urgência), não perda contínua por fístula.\n\nEstudo urodinâmico (C): avalia incontinência de esforço e urgência, não fístulas.\n\nUSG vaginal (D): não diagnostica a fístula; o teste do azul de metileno (e a cistoscopia) sim.",
    "tip": "Perda contínua após histerectomia = fístula. Azul de metileno na bexiga cora o tampão = vesicovaginal; não cora = pensar em ureterovaginal.",
    "reference": "FEBRASGO. Fístulas urogenitais — Tratado de Ginecologia FEBRASGO, 2019. Hillary CJ et al. Changes in the aetiology of vesicovaginal fistula. Eur Urol, 2016.",
    "tags": [
      "fístula vesicovaginal",
      "histerectomia",
      "teste do azul de metileno",
      "uroginecologia"
    ]
  },
  {
    "id": "famerp2026-19",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 28 anos, casada, atendida no serviço de Emergência, refere usar de DIU (Dispositivo Intrauterino) de cobre há dois anos; apresentando alteração do fluxo menstrual nos últimos seis meses. Após a realização do exame físico ginecológico e ultrassom obstétrico, teve confirmada gestação de 16 semanas e, no exame especular, não foi visualizado o fio do DIU.\n\nA conduta médica correta é:",
    "options": [
      "Interromper a gestação",
      "Deixar a gestação evoluir",
      "Retirar o DIU instrumentalmente",
      "Retirar o DIU e usar antibiótico profilático por 7 dias"
    ],
    "correctAnswer": 1,
    "explanation": "Gestação com DIU de cobre: se os fios forem visíveis e a gestação for inicial (1º trimestre), a retirada do DIU é recomendada, porque reduz o risco de aborto e infecção. Quando o fio NÃO é visível — e sobretudo numa gestação de 16 semanas — a tentativa de retirada instrumental às cegas aumenta o risco de rotura das membranas, infecção e aborto. A conduta é deixar a gestação evoluir, com acompanhamento de pré-natal atento a abortamento, parto prematuro e infecção, e localizar o DIU por ultrassonografia (retirada no parto).",
    "commentary": "Interromper a gestação (A): não há indicação legal nem médica; a gestação pode evoluir.\n\nRetirar o DIU instrumentalmente (C): com o fio não visível, a manipulação intrauterina tem alto risco de perda gestacional.\n\nRetirar e dar antibiótico profilático (D): mesmo problema; e não há indicação de antibiótico profilático.",
    "tip": "Gestante com DIU: fio visível no 1º trimestre → retirar; fio não visível → deixar e acompanhar.",
    "reference": "FEBRASGO. Dispositivos intrauterinos — Protocolo, 2021. WHO. Medical Eligibility Criteria for Contraceptive Use, 5ª ed., 2015.",
    "tags": [
      "DIU de cobre",
      "gestação com DIU",
      "pré-natal",
      "contracepção"
    ]
  },
  {
    "id": "famerp2026-20",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 26 anos de idade, atendida na Unidade Básica de Saúde, refere que desde que menstruou a primeira vez aos 13 anos apresenta dores tipo cólica menstrual de forte intensidade, aos 16 anos de idade iniciou vida sexual e passou a usar contraceptivo hormonal oral com melhoras das dores Devido diminuição da libido e cefaleia optou por parar com o uso do contraceptivo hormonal e está usando coito interrompido há oito meses. Porém as dores voltaram com aumento da intensidade, dificultando as atividades laborais, passando a sentir dor à profundidade durante a relação sexual. Ao exame físico ginecológico, no toque vaginal observa-se a presença de útero em retroversoflexão (RVF), com pouca mobilidade e doloroso com nodulações de consistência endurecida em região do fórnice vaginal posterior. Trouxe resultado de exame de ultrassom pélvico abdominal e endovaginal realizado há dois meses, porém esqueceu o laudo, tendo em mãos somente a imagem abaixo.\n\nQual a sua hipótese diagnóstica?",
    "options": [
      "Endometriose Peritoneal Profunda e Endometrioma Ovariano Bilateral.",
      "Síndrome do Ovários Policísticos com Microcistos Ovarianos Bilateral",
      "Doença Inflamatória Pélvica com Abcesso Tubo Ovariano Bilateral",
      "Dor Pélvica Aguda com Hidrossalpinge Bilateral."
    ],
    "correctAnswer": 0,
    "image": "/images/famerp2026-20.webp",
    "explanation": "Dismenorreia desde a menarca, que melhorou com contraceptivo e piorou ao parar, com dispareunia de profundidade e, ao toque, útero retrovertido fixo e doloroso com nódulos endurecidos no fórnice posterior (fundo de saco/retrocervical): endometriose profunda. A imagem de ultrassonografia mostra cistos ovarianos de conteúdo homogêneo com ecos finos (aspecto em \"vidro fosco\"), típicos de endometriomas.\n\nO diagnóstico atual é clínico e por imagem (USG transvaginal com preparo intestinal ou ressonância), sem necessidade de laparoscopia para iniciar tratamento.",
    "commentary": "SOP com microcistos (B): a SOP cursa com irregularidade menstrual e hiperandrogenismo; não explica dor, nodulação no fórnice e útero fixo.\n\nDIP com abscesso tubo-ovariano (C): quadro agudo com febre, corrimento e dor à mobilização do colo; a evolução aqui é crônica, desde a menarca.\n\nDor pélvica aguda com hidrossalpinge (D): a dor é crônica e cíclica, e a imagem não é de hidrossalpinge (estrutura tubular alongada).",
    "tip": "Dismenorreia progressiva + dispareunia de profundidade + nódulo retrocervical + cisto em vidro fosco = endometriose profunda com endometrioma.",
    "reference": "FEBRASGO. Endometriose — Protocolo nº 78, 2021. Becker CM et al. ESHRE guideline: endometriosis. Hum Reprod Open, 2022.",
    "tags": [
      "endometriose profunda",
      "endometrioma",
      "dismenorreia",
      "dispareunia"
    ]
  },
  {
    "id": "famerp2026-21",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 38 anos, nuligesta com desejo reprodutivo, procura ambulatório de ginecologia com queixa de aumento do volume do fluxo menstrual há 6 meses. A ultrassonografia pélvica endovaginal evidenciou dois nódulos de mioma, sendo o maior em parede uterina anterior de 2 x 3 cm (FIGO 1) e o menor com 1,5 x 2 cm (FIGO 4).\n\nAssinale a melhor alternativa para o tratamento definitivo do quadro:",
    "options": [
      "Curetagem uterina para remoção de leiomioma FIGO 4",
      "Anti-inflamatório e ácido tranexâmico para controle do sangramento",
      "Miomectomia do leiomioma FIGO 1 por histeroscopia cirúrgica",
      "Propor tratamento com anticoncepcional combinado de uso contínuo"
    ],
    "correctAnswer": 2,
    "explanation": "Nuligesta de 38 anos com desejo reprodutivo e sangramento menstrual aumentado. Pela classificação FIGO, o mioma FIGO 1 é submucoso com menos de 50% de componente intramural — é ele que distorce a cavidade e causa o sangramento. O FIGO 4 é intramural, sem contato com a cavidade, e de 2 cm, sem indicação de tratamento.\n\nO tratamento definitivo que preserva a fertilidade é a miomectomia histeroscópica do mioma FIGO 1 (indicada para FIGO 0, 1 e, em mãos experientes, 2).",
    "commentary": "Curetagem para o FIGO 4 (A): a curetagem não remove mioma, e o FIGO 4 é intramural, sem acesso pela cavidade.\n\nAINE e ácido tranexâmico (B): controlam o sangramento, mas não são tratamento definitivo.\n\nAnticoncepcional contínuo (D): controle sintomático; impede a gestação desejada e não trata o mioma submucoso.",
    "tip": "Mioma submucoso FIGO 0–1 (e 2 selecionado) + sangramento ou infertilidade = miomectomia histeroscópica.",
    "reference": "Munro MG et al. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of AUB (PALM-COEIN). Int J Gynaecol Obstet, 2018. FEBRASGO. Miomatose uterina — Protocolo, 2021.",
    "tags": [
      "mioma submucoso",
      "classificação FIGO",
      "miomectomia histeroscópica",
      "sangramento uterino anormal"
    ]
  },
  {
    "id": "famerp2026-22",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 30 anos, G2 P2 (2 partos vaginais), procura Unidade Básica de Saúde por queixa de dor abdominal em baixo ventre há um mês e foi colhido seu primeiro exame de citologia cervical convencional. O resultado da citologia oncótica revelou uma lesão intra-epitelial de alto grau de colo de útero (NIC 3).\n\nO próximo passo para o diagnóstico é:",
    "options": [
      "Colher PCR para HPV com genotipagem",
      "Encaminhar para colposcopia e provável biopsia",
      "Conização de colo de útero por cirurgia de alta frequência (CAF)",
      "Aguardar 6 meses e realizar nova coleta de citologia oncótica"
    ],
    "correctAnswer": 1,
    "explanation": "Citologia com lesão intraepitelial de alto grau (HSIL) — a citologia não dá \"NIC 3\", que é diagnóstico histológico, mas o enunciado indica lesão de alto grau. Pelas Diretrizes Brasileiras, toda mulher com HSIL na citologia deve ser encaminhada à colposcopia; se a colposcopia for satisfatória com achados maiores e JEC visível, pode-se fazer biópsia ou, em mulheres ≥ 25 anos, até \"ver e tratar\" (EZT).",
    "commentary": "Teste de HPV com genotipagem (A): não muda a conduta na HSIL; a colposcopia é obrigatória.\n\nConização direta (C): o tratamento é decidido após a colposcopia (\"ver e tratar\" exige achados colposcópicos compatíveis).\n\nRepetir citologia em 6 meses (D): é a conduta para LSIL, não para lesão de alto grau.",
    "tip": "HSIL na citologia = colposcopia sempre.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016.",
    "tags": [
      "HSIL",
      "colposcopia",
      "rastreamento de câncer do colo",
      "NIC 3"
    ]
  },
  {
    "id": "famerp2026-23",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher adulta, de 28 anos de idade, procura atendimento na Unidade Básica de Saúde do seu município, referindo que não fez uso da vacina na adolescência, há seis meses notou o aparecimento de lesões verrucosas na vulva sendo diagnosticada como condiloma e passou por tratamento das mesmas. Ficou sabendo pelas amigas que tem clínicas particulares que fazem uma nova vacina contra HPV (Papiloma Vírus Humano).\n\nQual a sua orientação para a paciente da imunização contra HPV na mulher adulta?",
    "options": [
      "Desconsiderar o uso da vacina por já ter iniciado vida sexual",
      "Desconsiderar o uso da vacina por ter mais que 26 anos de idade",
      "Considerar a vacinação contra HPV2-valente, na rede pública com esquema de duas doses (0 - 2 meses)",
      "Considerar a vacinação contra HPV9-valente, em clínicas particulares, esquema de três doses (0-2-6 meses)"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 28 anos, já com vida sexual e condiloma tratado, pode se beneficiar da vacina contra HPV: a vacina protege contra os tipos ainda não adquiridos e reduz recidiva de lesões. No SUS, a vacina quadrivalente (6, 11, 16, 18) está disponível para faixas específicas (9 a 14 anos e grupos especiais, como imunossuprimidos e vítimas de violência sexual até 45 anos); fora desses grupos, a mulher adulta pode usar a nonavalente na rede privada, em três doses (0, 2 e 6 meses), aprovada até 45 anos.",
    "commentary": "Não vacinar por já ter vida sexual (A): a eficácia é maior antes da exposição, mas ainda há benefício após o início sexual.\n\nNão vacinar por ter mais de 26 anos (B): a vacina está licenciada no Brasil até 45 anos.\n\nBivalente na rede pública em duas doses (C): a rede pública não usa a bivalente, ela não estaria disponível para essa paciente, e o esquema de adulto é de três doses.",
    "tip": "HPV em adulto: nonavalente (privada) até 45 anos, 3 doses (0-2-6). SUS: quadrivalente, 9–14 anos e grupos especiais.",
    "reference": "SBIm. Calendário de vacinação da mulher 2024/2025. Ministério da Saúde. Nota técnica sobre a vacina HPV, 2024. FEBRASGO. Vacinação contra HPV, 2023.",
    "tags": [
      "vacina HPV",
      "condiloma",
      "imunização do adulto",
      "HPV"
    ]
  },
  {
    "id": "famerp2026-24",
    "topography": "15",
    "topic": "Imunização",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma adolescente de 16 anos de idade, acompanhada da sua mãe e da irmã de nove anos de idade, procura atendimento na Unidade Básica de Saúde do seu município. A jovem refere ter menstruado aos 12 anos de idade, apresenta ciclos regulares a cada 28 a 30 dias e com seis dias de fluxo menstrual sem cólicas, sendo a última menstruação há 15 dias atrás. Informa que começou a namorar faz três meses, não teve relação sexual ainda, porém acredita que vai ter. Na aula de ciências, a professora orientou sobre o uso de vacina contra HPV (Papiloma Vírus Humano) na adolescência, porém a mãe não deseja vacinar nenhuma das filhas.\n\nQual argumento abaixo está correto sobre a orientação do uso de vacina em adolescentes?",
    "options": [
      "A eficácia máxima da vacinação ocorre quando é aplicada antes do início sexual devido a produção de anticorpos que inativam o HPV intracelular.",
      "A eficácia máxima da vacinação ocorre quando é aplicada após o início sexual devido a produção de anticorpos que inativam o HPV intracelular.",
      "A eficácia máxima da vacinação ocorre quando é aplicada antes do início sexual devido a produção de anticorpos no líquido intercelular que inativam o HPV.",
      "A eficácia máxima da vacinação ocorre quando é aplicada após o início sexual e com parceiro infectado levando a produção de anticorpos que inativam o HPV intracelular."
    ],
    "correctAnswer": 2,
    "explanation": "A vacina contra HPV induz altos títulos de anticorpos neutralizantes séricos (IgG), que transudam para o muco cervicovaginal e o fluido intersticial do epitélio. Eles neutralizam o vírus ANTES que ele infecte as células basais (através de microlesões). Por isso a eficácia é máxima antes do início da vida sexual, quando ainda não houve exposição ao HPV. A vacina não tem ação terapêutica sobre infecção já instalada (vírus intracelular).",
    "commentary": "Anticorpos que inativam o HPV intracelular (A): anticorpos não atuam dentro das células; a proteção é por neutralização extracelular.\n\nEficácia máxima após o início sexual (B): é o oposto — máxima antes da exposição.\n\nApós início sexual com parceiro infectado (D): exposição prévia reduz o benefício, e a ação não é intracelular.",
    "tip": "Vacina HPV: anticorpos no fluido intercelular neutralizam o vírus antes da infecção → melhor antes da primeira relação.",
    "reference": "Schiller JT, Lowy DR. Understanding and learning from the success of prophylactic human papillomavirus vaccines. Nat Rev Microbiol, 2012. Ministério da Saúde. Calendário Nacional de Vacinação 2024.",
    "tags": [
      "vacina HPV",
      "adolescência",
      "anticorpos neutralizantes",
      "imunização"
    ]
  },
  {
    "id": "famerp2026-25",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 24 anos, gestação de 38 semanas, em consulta num pronto atendimento obstétrico. Relata que há 4 horas está apresentando contrações uterinas dolorosas. Gestação de risco usual, fez pré-natal em uma Unidade Básica de Saúde. Exame físico geral: sem alterações. Exame obstétrico: altura uterina de 35 cm, batimentos cardíacos fetais normais, contrações uterinas presentes (3 contrações/30seg/10 min), feto em apresentação cefálica, plano + 2 de De Lee, bolsa amniocorial íntegra e colo uterino dilatado em 6 cm. Realizado analgesia peridural.\n\nAlém da internação, assinale a alternativa que contém as medidas mais apropriadas para a condução deste caso, durante este período clínico do parto:",
    "options": [
      "Realizar cardiotocografia, ausculta intermitente dos batimentos cardíacos fetais antes e avaliar a dilatação cervical a cada 2 horas",
      "Avaliar as contrações de hora em hora, ausculta intermitente dos batimentos cardíacos fetais e verificar a dilatação cervical a cada 4 horas",
      "Recomendar cardiotocografia contínua e o uso de ocitocina intravenosa, após realizar analgesia peridural",
      "Orientar a paciente para realizar puxos dirigidos durante as contrações e administrar ocitocina por via endovenosa, se este período estiver prolongado"
    ],
    "correctAnswer": 1,
    "explanation": "Primigesta de baixo risco em fase ativa do trabalho de parto (6 cm, contrações regulares). Pelas diretrizes nacionais de assistência ao parto normal, a vigilância recomendada é: avaliar as contrações a cada hora (frequência e duração), auscultar a frequência cardíaca fetal de forma intermitente (a cada 15–30 minutos na fase ativa) e fazer toque vaginal a cada 4 horas (ou antes, se houver indicação).\n\nA analgesia peridural não muda essa rotina, embora exija monitorização da pressão materna e da FCF após a punção.",
    "commentary": "CTG e toque a cada 2 horas (A): em gestação de baixo risco a cardiotocografia contínua de rotina não é recomendada, e toques frequentes aumentam o risco de infecção sem benefício.\n\nCTG contínua e ocitocina após peridural (C): não há indicação de ocitocina com evolução normal; a analgesia não exige ocitocina.\n\nPuxos dirigidos (D): puxos são do período expulsivo (dilatação completa); a paciente está com 6 cm.",
    "tip": "Fase ativa de baixo risco: contrações de 1/1 h, ausculta intermitente, toque de 4/4 h.",
    "reference": "Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017. WHO recommendations: intrapartum care for a positive childbirth experience, 2018.",
    "tags": [
      "assistência ao parto",
      "fase ativa",
      "ausculta intermitente",
      "partograma"
    ]
  },
  {
    "id": "famerp2026-26",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 28 anos, G3P2 (cesáreas) A0, atualmente na 39ª semana é atendida no pronto socorro obstétrico em período expulsivo. Evolui sem intercorrências para parto por via vaginal. Após 30 minutos do nascimento, não ocorreu o secundamento. Realizada curagem, não ocorrendo o desprendimento placentário. O útero está contraído na cicatriz umbilical e não existem lacerações de trajeto. É indicado laparotomia exploradora de emergência.\n\nQual a conduta mais adequada para esta paciente?",
    "options": [
      "Histerectomia puerperal com placenta in loco",
      "Cirurgia de B-Lynch e posterior histerectomia",
      "Retirada da placenta e posterior histerorrafia",
      "Manobra da Taxe e procedimento de Huntington"
    ],
    "correctAnswer": 0,
    "explanation": "Duas cesáreas prévias, placenta que não descola após 30 minutos nem com curagem (extração manual), útero contraído e sem lacerações: acretismo placentário (espectro da placenta acreta), cujo principal fator de risco é a cesárea anterior. Na laparotomia, a conduta padrão é a histerectomia com a placenta mantida in situ — tentar arrancar a placenta provoca hemorragia maciça.",
    "commentary": "B-Lynch e depois histerectomia (B): a sutura de B-Lynch trata atonia; o útero está contraído e o problema é a placenta aderida.\n\nRetirar a placenta e fazer histerorrafia (C): a tentativa de descolar a placenta acreta causa sangramento incontrolável.\n\nTaxe e Huntington (D): são manobras para inversão uterina, que não ocorreu.",
    "tip": "Placenta que não sai + cesáreas prévias = acretismo → histerectomia com placenta in situ. Não tente arrancar.",
    "reference": "FEBRASGO. Espectro da placenta acreta — Protocolo nº 26, 2021. Jauniaux E et al. FIGO consensus guidelines on placenta accreta spectrum disorders, 2018.",
    "tags": [
      "acretismo placentário",
      "placenta acreta",
      "histerectomia puerperal",
      "retenção placentária"
    ]
  },
  {
    "id": "famerp2026-27",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 28 anos, G3 P2 (partos por via vaginal), sem comorbidades. Está em sua primeira consulta na Unidade Básica de Saúde, assintomática, relatando um atraso menstrual de 18 semanas. Foi realizado ultrassom endovaginal onde foi observado feto com idade gestacional compatível com 13 semanas e ausência de batimentos cardíacos.\n\nA melhor conduta para esta paciente é:",
    "options": [
      "Aguardar expulsão fetal espontaneamente",
      "Aspiração Manual Intrauterina (AMIU) e ocitocina",
      "Curetagem uterina após expulsão fetal com misoprostol",
      "Ocitocina por via endovenosa e curetagem uterina após expulsão fetal"
    ],
    "correctAnswer": 2,
    "explanation": "Feto sem batimentos com tamanho de 13 semanas (atraso de 18 semanas): aborto retido do 2º trimestre inicial (> 12 semanas). Com feto de esqueleto já calcificado, a aspiração ou curetagem direta tem risco de perfuração e retenção de partes. A conduta é induzir a expulsão com misoprostol (prostaglandina) e, após a expulsão do feto, completar o esvaziamento com curetagem ou aspiração, se houver restos.",
    "commentary": "Conduta expectante (A): no aborto retido acima de 12 semanas a espera prolongada aumenta risco de infecção e coagulopatia; o esvaziamento ativo é preferido.\n\nAMIU e ocitocina (B): a AMIU é indicada até 12 semanas; acima disso há partes fetais calcificadas.\n\nOcitocina e curetagem (D): no 2º trimestre inicial o útero tem poucos receptores de ocitocina; o misoprostol é muito mais eficaz.",
    "tip": "Aborto retido ≤ 12 semanas: AMIU/aspiração (ou misoprostol). > 12 semanas: misoprostol → expulsão → curetagem.",
    "reference": "Ministério da Saúde. Atenção Humanizada ao Abortamento — Norma Técnica, 2ª ed., 2011. FEBRASGO. Abortamento — Protocolo, 2021.",
    "tags": [
      "aborto retido",
      "misoprostol",
      "curetagem uterina",
      "abortamento"
    ]
  },
  {
    "id": "famerp2026-28",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Tercigesta, 24 anos, realiza suas consultas de pré-natal em ambulatório de alto risco, devido doença hemolítica perinatal na segunda gestação. Apresenta tipagem sanguínea Rh negativo e o esposo Rh positivo.\n\nPara a avaliação do grau de anemia fetal, qual exame deve ser solicitado:",
    "options": [
      "Cordocentese na 28ª semana de gestação e repetir na 36ª semana",
      "Teste de Coombs indireto e dosagem espectrofotométrica da bilirubina",
      "Doppler da artéria cerebral média na 18ª semana e repetir semanalmente",
      "Teste de Coombs indireto e cardiotocografia mensal até o momento do parto"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante Rh negativo com doença hemolítica perinatal na gestação anterior: é sensibilizada, e o Coombs indireto deixa de ser útil para seguimento (o risco fetal é alto independentemente do título). A anemia fetal é rastreada de forma não invasiva pelo Doppler da artéria cerebral média, medindo o pico de velocidade sistólica (PVS-ACM): valores acima de 1,5 MoM indicam anemia moderada/grave e cordocentese com transfusão intrauterina. Começa por volta de 18 semanas (ou 10 semanas antes da idade em que houve o evento na gestação anterior) e é repetido a cada 1–2 semanas.",
    "commentary": "Cordocentese programada (A): é invasiva, com risco de perda fetal e de piora da sensibilização; só se indica quando o Doppler sugere anemia.\n\nCoombs indireto e bilirrubina no líquido amniótico (B): a espectrofotometria do líquido amniótico (Liley) foi substituída pelo Doppler, e o Coombs não serve na paciente já sensibilizada com feto afetado antes.\n\nCoombs e cardiotocografia mensal (D): a CTG detecta sofrimento tardio, não quantifica anemia.",
    "tip": "Gestante Rh− sensibilizada: Doppler da ACM (PVS > 1,5 MoM = anemia) a partir de ~18 semanas, a cada 1–2 semanas.",
    "reference": "FEBRASGO. Aloimunização Rh — Protocolo nº 41, 2021. Mari G et al. Noninvasive diagnosis by Doppler ultrasonography of fetal anemia. N Engl J Med, 2000.",
    "tags": [
      "aloimunização Rh",
      "doença hemolítica perinatal",
      "dopplervelocimetria da artéria cerebral média",
      "anemia fetal"
    ]
  },
  {
    "id": "famerp2026-29",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 24 anos, parto anterior de termo por via vaginal, sem intercorrências. É atendida na emergência obstétrica, com gestação de 36 semanas e queixa de perda de líquido por via vaginal há 6 horas. Exame físico geral sem anormalidades. Exame obstétrico: batimentos cardíacos fetais de 140/minuto, 4 contrações uterinas em 10 minutos de observação, líquido amniótico transparente fluindo do colo uterino, dilatação cervical de 8 cm, apresentação cefálica no plano 0 de De Lee.\n\nQual a conduta mais adequada para esta paciente?",
    "options": [
      "Administrar sulfato de magnésio para neuroproteção fetal",
      "Administrar corticoide para acelerar a maturidade pulmonar fetal",
      "Realizar ultrassom para confirmar o diagnóstico de bolsa rota",
      "Realizar ausculta fetal intermitente e aguardar o parto por via vaginal"
    ],
    "correctAnswer": 3,
    "explanation": "Rotura de membranas com 36 semanas, mas a gestante já está em trabalho de parto avançado (8 cm, 4 contrações em 10 minutos), com líquido claro fluindo do colo (diagnóstico clínico confirmado ao exame especular/toque) e vitalidade fetal normal. A conduta é a assistência ao parto vaginal, com ausculta intermitente da FCF.",
    "commentary": "Sulfato de magnésio (A): a neuroproteção é indicada abaixo de 32 semanas.\n\nCorticoide (B): indicado até 33 6/7 semanas (e, em casos selecionados, até 36 6/7 sem parto iminente); com 8 cm o parto é iminente e o corticoide não teria tempo de agir.\n\nUltrassom para confirmar bolsa rota (C): o diagnóstico já é clínico (líquido saindo pelo colo); a USG não é necessária.",
    "tip": "Rotura de membranas com líquido visível saindo do colo = diagnóstico clínico. Trabalho de parto avançado a termo/pré-termo tardio: assistir o parto.",
    "reference": "FEBRASGO. Rotura prematura das membranas ovulares — Protocolo nº 31, 2021. Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017.",
    "tags": [
      "rotura prematura de membranas",
      "pré-termo tardio",
      "assistência ao parto"
    ]
  },
  {
    "id": "famerp2026-30",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 18 anos, idade gestacional de 38 semanas, gestação de risco usual, é internada em trabalho de parto. Exame físico geral sem alterações. Exame obstétrico: altura uterina de 35 cm, batimentos cardíacos fetais normais, 3 contrações de 30 segundos em 10 minutos de observação, colo uterino dilatado em 6 cm, apresentação cefálica, plano 0 de De Lee, bolsa íntegra. Exame cardiotocográfico: evidencia linha de base da frequência cardíaca fetal de 140 bpm, variabilidade moderada, presença de acelerações transitórias e desacelerações precoces.\n\nDe acordo com estes dados, assinale a alternativa correta que contém, respectivamente, a classificação do exame cardiotocográfico e a conduta:",
    "options": [
      "Categoria I, traçado da FCF normal; conduzir de maneira habitual, com ausculta da FCF de 30/30 minutos no 1º estágio e 15/15 minutos no 2º estágio.",
      "Categoria II, traçado indeterminado da FCF; requer acompanhamento com ausculta da FCF contínua, perfil biofísico fetal e dopplervelocimetria.",
      "Categoria III, traçado anormal; requer medidas de ressuscitação intrauterina e resolução da gestação.",
      "Não reativa; continuar a avaliação da FCF durante 40 minutos e, não melhorando, realizar medidas de ressuscitação intrauterina."
    ],
    "correctAnswer": 0,
    "explanation": "Cardiotocografia com linha de base de 140 bpm (normal: 110–160), variabilidade moderada (6–25 bpm), acelerações transitórias e desacelerações precoces (DIP I, por compressão cefálica, benignas), sem tardias ou variáveis: categoria I (NICHD) — traçado normal, que prediz equilíbrio ácido-base fetal normal. A conduta é seguir a assistência habitual, com ausculta intermitente: a cada 30 minutos na fase ativa e a cada 15 minutos no período expulsivo para gestação de baixo risco.",
    "commentary": "Categoria II (B): seria um traçado indeterminado (por exemplo, variabilidade mínima, taquicardia, desacelerações variáveis ou tardias recorrentes com variabilidade presente).\n\nCategoria III (C): variabilidade ausente com desacelerações tardias ou variáveis recorrentes ou bradicardia, ou padrão sinusoidal.\n\nNão reativa (D): o termo é usado na CTG anteparto; aqui há acelerações, o que indica reatividade.",
    "tip": "CTG categoria I: linha de base 110–160, variabilidade moderada, sem tardias/variáveis (precoces e acelerações permitidas) → conduta habitual.",
    "reference": "Macones GA et al. NICHD workshop report on electronic fetal monitoring, 2008. FEBRASGO. Avaliação da vitalidade fetal intraparto — Protocolo nº 48, 2021.",
    "tags": [
      "cardiotocografia",
      "categoria I",
      "vitalidade fetal",
      "trabalho de parto"
    ]
  },
  {
    "id": "famerp2026-31",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 18 anos, gestação de 24 semanas, em consulta na UBS devido lesões na região vulvar. Feito diagnóstico de herpes genital, sendo tratada com Aciclovir por via oral. A paciente deseja realizar parto por via vaginal.\n\nPara evitar a transmissão vertical, em qual fase da gestação deve ser realizada a terapia supressiva com aciclovir?",
    "options": [
      "Da 20ª semana até a 36ª semana.",
      "Da 28ª semana até a 36ª semana.",
      "Da 28ª semana até o momento do parto.",
      "Da 36ª semana até o momento do parto."
    ],
    "correctAnswer": 3,
    "explanation": "Primeiro episódio de herpes genital na gestação. Para reduzir a recorrência no termo, a excreção viral assintomática e a necessidade de cesárea, recomenda-se terapia supressiva com aciclovir (400 mg 3x/dia) ou valaciclovir a partir de 36 semanas até o parto. No trabalho de parto, se houver lesões ativas ou pródromos, a cesárea está indicada.",
    "commentary": "Da 20ª à 36ª semana (A), da 28ª à 36ª (B) e da 28ª até o parto (C): a supressão é feita a partir de 36 semanas, período que importa para a transmissão no parto; começar antes não traz benefício comprovado.",
    "tip": "Herpes genital na gestação: aciclovir supressivo de 36 semanas até o parto; lesão ativa no parto = cesárea.",
    "reference": "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis, 2022. ACOG Practice Bulletin nº 220 — Management of genital herpes in pregnancy, 2020.",
    "tags": [
      "herpes genital",
      "aciclovir",
      "terapia supressiva",
      "transmissão vertical"
    ]
  },
  {
    "id": "famerp2026-32",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta 28 anos, pré-natal de risco usual, internada em trabalho de parto com gestação de termo. A evolução do trabalho de parto está demonstrada no partograma abaixo.\n\nApós realizar diagnóstico de parada secundária da descida, qual a etiologia e a melhor conduta?",
    "options": [
      "Distocia de rotação e fórceps de Kielland",
      "Desproporção cefalopélvica cesariana e operação",
      "Desproporção cefalopélvica e rotação manual da apresentação",
      "Distocia da variedade de posição e posição materna verticalizada"
    ],
    "correctAnswer": 1,
    "image": "/images/famerp2026-32.webp",
    "explanation": "No partograma, a dilatação evoluiu até completa, mas a apresentação parou de descer por 2 ou mais toques sucessivos com dilatação completa: parada secundária da descida. É a distocia associada à desproporção cefalopélvica (relativa ou absoluta), sobretudo quando há contrações adequadas. Com apresentação alta e parada da descida, a conduta é a cesariana (o fórceps só é possível com a cabeça insinuada em plano baixo e sem desproporção).",
    "commentary": "Distocia de rotação e fórceps de Kielland (A): o diagnóstico do partograma é parada da descida por desproporção; fórceps em apresentação alta é contraindicado.\n\nDesproporção e rotação manual (C): a rotação manual não corrige desproporção cefalopélvica.\n\nDistocia de variedade de posição e posição verticalizada (D): medidas posturais ajudam em distocias funcionais leves, não na parada secundária da descida por desproporção.",
    "tip": "Partograma: parada secundária da descida (dilatação completa e cabeça parada) = desproporção cefalopélvica → cesárea (fórceps só se cabeça baixa e sem DCP).",
    "reference": "Zugaib M. Zugaib Obstetrícia, 5ª ed. — Partograma e distocias. Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017.",
    "tags": [
      "partograma",
      "parada secundária da descida",
      "desproporção cefalopélvica",
      "cesárea"
    ]
  },
  {
    "id": "famerp2026-33",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido (Rn) termo está com 10 dias de vida, em aleitamento materno exclusivo, com bom ganho ponderal, diurese e evacuação presentes. Ao exame físico encontra-se ictérico zona II de Kramer.\n\nQual deve ser sua conduta neste momento:",
    "options": [
      "Manter aleitamento materno e investigar colestase",
      "Manter aleitamento materno e investigar doença hemolítica",
      "Manter aleitamento materno e reavaliar icterícia em 5-7 dias",
      "Iniciar fórmula infantil e reavaliar icterícia em 5 -7 dias"
    ],
    "correctAnswer": 2,
    "explanation": "RN a termo de 10 dias, em aleitamento materno exclusivo, mamando bem, com ganho de peso adequado, diurese e evacuações normais (fezes coradas), e icterícia leve (zona II de Kramer). O quadro é compatível com icterícia do leite materno, benigna, que pode durar algumas semanas. A conduta é manter o aleitamento e reavaliar a icterícia em alguns dias.\n\nSe a icterícia persistir após 14 dias (RN a termo), dosa-se bilirrubina total e frações para excluir colestase (bilirrubina direta elevada, acolia, colúria).",
    "commentary": "Investigar colestase agora (A): não há acolia, colúria ou outros sinais; a investigação é indicada se a icterícia persistir após 14 dias.\n\nInvestigar doença hemolítica (B): hemólise dá icterícia precoce (primeiras 24–36 horas) e intensa, não leve no 10º dia.\n\nTrocar por fórmula (D): a suspensão do aleitamento não é recomendada.",
    "tip": "Icterícia leve em RN bem, mamando no peito, após a 1ª semana = leite materno. Persistiu > 14 dias = dosar frações (colestase?).",
    "reference": "Sociedade Brasileira de Pediatria. Icterícia no recém-nascido com idade gestacional ≥ 35 semanas — Documento científico, 2021. Kemper AR et al. AAP Clinical Practice Guideline: Hyperbilirubinemia, 2022.",
    "tags": [
      "icterícia neonatal",
      "icterícia do leite materno",
      "zonas de Kramer",
      "aleitamento materno"
    ]
  },
  {
    "id": "famerp2026-34",
    "topography": "11",
    "module": "Pediatria",
    "text": "Recém-nascido (Rn) termo de 37 3/7 semanas de parto cesárea por descontrole glicêmico, sexo masculino, APGAR 7/8 e peso de nascimento de 2970g. Evoluiu com desconforto respiratório precoce e necessitou de internação em UTI Neonatal em uso de CPAP. Após 4 horas de internação evoluiu com piora súbita do padrão respiratório e queda de saturação O2.\n\nQual a principal hipótese diagnóstica neste momento:",
    "options": [
      "Pneumotórax",
      "Cardiopatia congênita canal dependente",
      "Taquipneia transitória do Recém-nascido",
      "Síndrome do Desconforto Respiratório Grave"
    ],
    "correctAnswer": 0,
    "explanation": "RN a termo precoce de mãe diabética, nascido de cesárea, com desconforto respiratório precoce (taquipneia transitória ou SDR pelo atraso de maturação pulmonar do filho de diabética) em CPAP. A piora súbita do padrão respiratório com queda de saturação em paciente sob pressão positiva sugere fortemente pneumotórax — complicação típica do CPAP e da ventilação. Exame: assimetria de murmúrio, transiluminação positiva; confirma-se com radiografia ou ultrassonografia e, se hipertensivo, faz-se punção/drenagem.",
    "commentary": "Cardiopatia canal-dependente (B): costuma descompensar no fechamento do canal arterial (dias de vida), não de forma súbita durante CPAP às 4 horas.\n\nTaquipneia transitória (C): melhora progressivamente em 24–72 horas; não causa piora súbita.\n\nSDR grave (D): a SDR piora de forma progressiva nas primeiras horas, não abrupta; numa piora súbita em CPAP, pensar primeiro em pneumotórax.",
    "tip": "RN em CPAP/ventilação com piora súbita = pneumotórax até prova em contrário.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. — Distúrbios respiratórios do RN. Ministério da Saúde. Atenção à Saúde do Recém-Nascido, vol. 3, 2014.",
    "tags": [
      "pneumotórax neonatal",
      "CPAP",
      "filho de mãe diabética",
      "desconforto respiratório neonatal"
    ]
  },
  {
    "id": "famerp2026-35",
    "topography": "11",
    "topic": "Prematuridade",
    "module": "Pediatria",
    "text": "Recém-nascido (Rn) de 36 1/7 semanas, nascido de parto normal, sem intercorrências, pesando 2110g percent 5 da curva de peso/estatura - Intergrow21).\n\nQuais as classificações corretas deste paciente:",
    "options": [
      "Rn pretermo tardio, adequado para idade gestacional e baixo peso",
      "Rn pretermo tardio, pequeno para a idade gestacional e baixo peso",
      "Rn pretermo, pequeno para a idade gestacional e muito baixo peso",
      "Rn pretermo, pequeno para a idade gestacional e baixo peso"
    ],
    "correctAnswer": 3,
    "explanation": "Classificação em três eixos:\n• Idade gestacional: 36 1/7 semanas é pré-termo (< 37 semanas); mais especificamente pré-termo tardio (34 0/7 a 36 6/7).\n• Peso para a idade gestacional: percentil 5 (Intergrowth-21st) = pequeno para a idade gestacional (< p10).\n• Peso absoluto: 2.110 g = baixo peso (< 2.500 g).\n\nO gabarito oficial marcou D (\"pré-termo, PIG e baixo peso\"). A alternativa B traz a mesma classificação com o termo mais específico (\"pré-termo tardio\"), também correta.",
    "commentary": "Pré-termo tardio, AIG e baixo peso (A): no percentil 5, o RN é PIG, não AIG.\n\nPré-termo tardio, PIG e baixo peso (B): classificação correta e mais precisa; aceita aqui também como certa.\n\nMuito baixo peso (C): muito baixo peso é < 1.500 g.",
    "alert": "Gabarito discutível: \"pré-termo tardio, PIG e baixo peso\" (B) é tão correta quanto D, e mais específica. As duas contam como certas aqui; o gabarito oficial é D.",
    "alsoAccepted": [
      1
    ],
    "tip": "Pré-termo tardio = 34 0/7 a 36 6/7. PIG < p10. Baixo peso < 2.500 g; muito baixo < 1.500 g; extremo < 1.000 g.",
    "reference": "Sociedade Brasileira de Pediatria. Classificação do recém-nascido — Tratado de Pediatria, 5ª ed. Villar J et al. INTERGROWTH-21st newborn size standards. Lancet, 2014.",
    "tags": [
      "prematuridade",
      "pequeno para a idade gestacional",
      "baixo peso ao nascer",
      "Intergrowth-21st"
    ]
  },
  {
    "id": "famerp2026-36",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Pediatria",
    "text": "Você está passando visita no alojamento conjunto em um recém-nascido a termo e mãe com história de Sífilis durante a gestação tratada com 3 doses de penicilina benzatina e queda da titulação da sorologia, com último resultado de VDRL de 1:4. Rn está assintomático, com boa aceitação de seio materno e com VDRL no nascimento de 1:4.\n\nQual deve ser a sua conduta frente a esse paciente:",
    "options": [
      "Acompanhamento ambulatorial",
      "Penicilina benzatina dose única",
      "Triagem com hemograma e radiografia de ossos longos",
      "Triagem com hemograma, radiografia de ossos longos e liquor"
    ],
    "correctAnswer": 0,
    "explanation": "Mãe com sífilis adequadamente tratada na gestação (penicilina benzatina em 3 doses, com queda dos títulos) e RN assintomático com VDRL igual ao materno (1:4 — não é ≥ 2 diluições maior). Pelo PCDT, esse RN é classificado como criança EXPOSTA à sífilis, não como caso de sífilis congênita. Não precisa de exames invasivos nem tratamento: segue com acompanhamento ambulatorial na puericultura, com VDRL aos 1, 3, 6, 12 e 18 meses (espera-se queda e negativação até os 6 meses).",
    "commentary": "Penicilina benzatina dose única (B): é a opção para RN de mãe NÃO adequadamente tratada, assintomático, com VDRL não reagente e exames normais (conforme protocolo), não para o exposto com mãe tratada.\n\nHemograma e radiografia de ossos longos (C) e incluindo líquor (D): a investigação completa é para os casos de sífilis congênita (mãe não tratada ou inadequadamente tratada, ou RN com título ≥ 2 diluições acima do materno ou sintomático).",
    "tip": "Mãe tratada adequadamente + RN assintomático + VDRL ≤ materno (diferença < 2 diluições) = criança exposta → seguimento com VDRL seriado.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais, 2022.",
    "tags": [
      "sífilis congênita",
      "criança exposta à sífilis",
      "VDRL",
      "recém-nascido"
    ]
  },
  {
    "id": "famerp2026-37",
    "topography": "11",
    "module": "Pediatria",
    "text": "Recém-nascido com 35 2/7 semanas nascido de parto normal com choro forte e bom tônus muscular.\n\nSegundo as últimas diretrizes da Sociedade de Pediatria e do Programa de Reanimação Neonatal, a conduta ideal para esse paciente será:",
    "options": [
      "Clampeamento imediato de cordão umbilical, levar para a fonte de calor radiante, estabilização e retorno para o contato pele a pele e amamentação na primeira hora de vida",
      "Clampeamento imediato de cordão umbilical, contato pele a pele e amamentação na primeira hora de vida",
      "Clampeamento oportuno de cordão umbilical, contato pele a pele e amamentação na primeira hora de vida",
      "Clampeamento oportuno de cordão umbilical, levar para a fonte de calor radiante, estabilização e retorno para o contato pele a pele e amamentação na primeira hora de vida"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo Programa de Reanimação Neonatal da SBP (2022), o RN ≥ 34 semanas que nasce com respiração/choro e tônus adequados vai direto para o contato pele a pele com a mãe, com clampeamento oportuno (tardio) do cordão — 1 a 3 minutos após o nascimento — e estímulo à amamentação na primeira hora de vida. Não é necessário levá-lo à fonte de calor radiante.",
    "commentary": "Clampeamento imediato e calor radiante (A): o RN vigoroso não precisa de passos iniciais na mesa; o clampeamento deve ser tardio.\n\nClampeamento imediato e pele a pele (B): o clampeamento imediato só se indica se o RN não for vigoroso (ou em situações específicas da mãe/placenta).\n\nClampeamento oportuno e calor radiante (D): levar à fonte de calor é desnecessário no RN com boa vitalidade.",
    "tip": "RN ≥ 34 semanas, respirando e com bom tônus: clampeamento em 1–3 min, pele a pele e mamada na 1ª hora.",
    "reference": "Sociedade Brasileira de Pediatria. Reanimação do recém-nascido ≥ 34 semanas em sala de parto: diretrizes 2022 do Programa de Reanimação Neonatal.",
    "tags": [
      "clampeamento tardio do cordão",
      "contato pele a pele",
      "sala de parto",
      "reanimação neonatal"
    ]
  },
  {
    "id": "famerp2026-38",
    "topography": "7.2",
    "module": "Pediatria",
    "text": "Lactente com 9 meses, apresenta lesão eritematosa, com pequenas pústulas e áreas de descamação em períneo, sem poupar dobras. Segundo a mãe, as lesões surgiram há mais ou menos 1 semana e a criança chora muito durante a limpeza da região.\n\nQual o melhor tratamento para esse paciente:",
    "options": [
      "Limpeza delicada da região e creme de barreira intercalando as trocas",
      "Limpeza delicada da região, nistatina tópica por 14 dias e creme de barreira intercalando as trocas",
      "Limpeza delicada da região, corticoide tópico por 14 dias e creme de barreira intercalando as trocas",
      "Limpeza delicada da região, antibiótico tópico por 14 dias e creme de barreira intercalando as trocas"
    ],
    "correctAnswer": 1,
    "explanation": "Dermatite na área das fraldas com eritema intenso, pústulas e descamação, ACOMETENDO as dobras, há uma semana: dermatite por Candida (candidíase da área das fraldas). As lesões satélites (pápulas e pústulas ao redor da placa) e o envolvimento das pregas são típicos. Tratamento: higiene delicada, creme de barreira e antifúngico tópico (nistatina ou imidazólico) por cerca de 14 dias.",
    "commentary": "Só limpeza e barreira (A): suficiente para a dermatite irritativa de contato (que poupa as dobras), não para a candidíase.\n\nCorticoide tópico (C): pode piorar a infecção fúngica; não é indicado como tratamento isolado.\n\nAntibiótico tópico (D): para impetigo/infecção bacteriana secundária (crostas melicéricas, bolhas), não para Candida.",
    "tip": "Dermatite de fraldas que poupa dobras = irritativa (barreira). Que acomete dobras com lesões satélites = Candida (antifúngico).",
    "reference": "Sociedade Brasileira de Pediatria. Dermatite da área das fraldas — Documento científico, 2020. Sociedade Brasileira de Dermatologia.",
    "tags": [
      "dermatite das fraldas",
      "candidíase",
      "nistatina",
      "dermatologia pediátrica"
    ]
  },
  {
    "id": "famerp2026-39",
    "topography": "11",
    "topic": "Púrpura de Henoch-Schönlein",
    "module": "Pediatria",
    "text": "Menino de 6 anos apresenta, há 4 dias, rash eritematoso caracterizado por lesões purpúricas elevadas, não pruriginosas e que não somem à digitopressão. As lesões iniciaram-se de forma esparsa em ambos os pés, progredindo proximalmente para as coxas e extremidades superiores, com acometimento também de palmas e plantas. Hoje, evoluiu com edema doloroso em pés, limitando a deambulação, além de dor abdominal difusa, mais intensa nos quadrantes superiores direito e esquerdo, de caráter cólico, exacerbada pela alimentação. Nega diarreia, sangramento digestivo, febre ou outros sintomas sistêmicos. É previamente hígido, nega uso habitual de medicações. Refere uso de claritromicina há cerca de 14 dias para quadro respiratório. Hemograma realizado em serviço de emergência não apresenta citopenias ou outras alterações significativas.\n\nConsiderando a principal hipótese diagnóstica, qual dos seguintes exames é o mais relevante para complementar a avaliação do quadro clínico deste paciente?",
    "options": [
      "Angiotomografia torácica e abdominal",
      "Pesquisa de leucócitos fecais e angiotomografia abdominal",
      "Biópsia cutânea com imunofluorescência ou imuno-histoquímica",
      "Urina 1 (exame de sedimento urinário), dosagem sérica de ureia e creatinina"
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 6 anos com púrpura palpável em membros inferiores (com progressão), edema doloroso de pés (artralgia/artrite), dor abdominal em cólica pós-prandial e plaquetas normais, após infecção respiratória: vasculite por IgA (púrpura de Henoch-Schönlein). O diagnóstico é clínico.\n\nO exame mais relevante para complementar é a avaliação renal — urina tipo 1 (hematúria, proteinúria), ureia e creatinina (e pressão arterial) —, porque o acometimento renal define o prognóstico em longo prazo. Recomenda-se seguimento com urina e PA por pelo menos 6 meses.",
    "commentary": "Angiotomografia (A): não é necessária para o diagnóstico.\n\nLeucócitos fecais e angiotomografia (B): a dor abdominal é da vasculite; se houver suspeita de invaginação, o exame é a ultrassonografia.\n\nBiópsia cutânea (C): mostraria vasculite leucocitoclástica com depósito de IgA, mas só é necessária em casos atípicos.",
    "tip": "Púrpura palpável + artrite + dor abdominal com plaquetas normais = vasculite por IgA → sempre urina, função renal e PA.",
    "reference": "Ozen S et al. EULAR/PRINTO/PRES criteria for Henoch-Schönlein purpura, 2010. Ozen S et al. SHARE recommendations for IgA vasculitis. Rheumatology, 2019.",
    "tags": [
      "vasculite por IgA",
      "púrpura de Henoch-Schönlein",
      "nefrite",
      "púrpura palpável"
    ]
  },
  {
    "id": "famerp2026-40",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Menina de 07 anos de idade previamente hígida, é admitida no hospital com febre, tosse, queda do estado geral, inapetência e dor abdominal de início há três dias. À radiografia de tórax notou-se área de opacidade em terço médio-inferior esquerdo, com obliteração do seio costofrênico esquerdo e sinal do menisco.\n\nA propedeutica pulmonar esperada ao exame físico dessa criança é:",
    "options": [
      "Expansibilidade pulmonar diminuída no hemitórax esquerdo, frêmito toracovocal e murmúrio vesicular diminuídos em terço médio-inferior esquerdo",
      "Expansibilidade pulmonar diminuida no hemitórax esquerdo, frêmito toracovocal aumentado e murmúrio vesicular diminuído em terço médio-inferior esquerdo",
      "Expansibilidade pulmonar diminuida no hemitórax esquerdo, frêmito toracovocal diminuido com murmúrio vesicular presente bilateralmente",
      "Expansibilidade pulmonar diminuida no hemitórax esquerdo, frêmito toracovocal aumentado e murmúrio vesicular abolido em terço médio-inferior esquerdo"
    ],
    "correctAnswer": 0,
    "explanation": "Pneumonia com obliteração do seio costofrênico e sinal do menisco na radiografia: derrame pleural parapneumônico à esquerda. No exame físico do derrame:\n• expansibilidade diminuída no lado acometido;\n• frêmito toracovocal DIMINUÍDO ou abolido (o líquido afasta o pulmão da parede e atenua a vibração);\n• murmúrio vesicular diminuído ou abolido;\n• macicez à percussão.",
    "commentary": "Frêmito aumentado e MV diminuído (B): frêmito aumentado é típico de consolidação (sem derrame).\n\nFrêmito diminuído com MV presente bilateralmente (C): no derrame o murmúrio está diminuído no lado acometido.\n\nFrêmito aumentado e MV abolido (D): combinação incoerente; o frêmito aumentado indica consolidação.",
    "tip": "Derrame: tudo diminui (expansibilidade, frêmito, murmúrio) + macicez. Consolidação: frêmito AUMENTA.",
    "reference": "Porto CC. Semiologia Médica, 8ª ed. — Exame do tórax. Sociedade Brasileira de Pediatria — Derrame pleural parapneumônico na criança.",
    "tags": [
      "derrame pleural",
      "semiologia do tórax",
      "frêmito toracovocal",
      "pneumonia infantil"
    ]
  },
  {
    "id": "famerp2026-41",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Criança de 3 anos, feminino, vem apresentando resfriados recorrentes caracterizados por coriza, espirros, congestão e prurido nasal, que evoluem às vezes com muita tosse e chiado no peito. Mãe relata que os episódios se iniciaram depois que começou a frequentar creche aos 8 meses de idade e nos últimos meses vem notando que a criança faz um barulho estranho no peito e tem crise de tosse quando dá gargalhada ou chora muito. De antecedentes pessoais, refere episódio de Bronquiolite viral aguda grave aos 9 meses, com necessidade de hospitalização e suporte ventilatório, com painel viral positivo para rinovírus. Refere ainda que há um mês teve que procurar a UPA porque teve crise intensa de tosse e ficou com respiração ofegante, mas melhorou rapidamente após a administração de doses de Salbutamol em spray. Mãe relata que passou por pediatra especialista em doenças respiratórias que não observou alterações ao exame físico e solicitou exames investigatórios que estavam normais.\n\nO diagnóstico clínico mais provável é:",
    "options": [
      "Asma persistente",
      "Bronquiolite obliterante",
      "Discinesia ciliar primária",
      "Sindrome do bebê chiador"
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 3 anos com sibilância recorrente desencadeada por infecções virais e também por riso e choro (desencadeantes não virais), sintomas de rinite (atopia), história de bronquiolite grave por rinovírus (fator de risco importante para asma) e resposta rápida ao salbutamol, com exame e investigação normais entre as crises. O quadro é de asma, e o padrão (sintomas também fora das infecções, crises que exigem atendimento) caracteriza asma persistente.\n\nEm menores de 5 anos o diagnóstico é clínico: sibilância recorrente, sintomas com exercício, riso ou choro, resposta ao broncodilatador e/ou ao corticoide e exclusão de diagnósticos alternativos.",
    "commentary": "Bronquiolite obliterante (B): após infecção grave (sobretudo adenovírus), com sibilância e estertores persistentes, hipoxemia e pouca resposta ao broncodilatador; o exame entre as crises é anormal.\n\nDiscinesia ciliar primária (C): tosse úmida crônica desde o período neonatal, rinossinusite e otites crônicas, às vezes situs inversus.\n\nSíndrome do bebê chiador (D): termo para lactentes (< 2–3 anos) com sibilância recorrente predominantemente viral; os desencadeantes não virais e a atopia apontam para asma.",
    "tip": "Sibilância com riso/choro + atopia + resposta ao broncodilatador + exame normal entre crises = asma, mesmo < 5 anos.",
    "reference": "Global Initiative for Asthma (GINA) 2024 — crianças de 5 anos ou menos. Sociedade Brasileira de Pediatria. Sibilância recorrente do lactente e pré-escolar — Documento científico, 2017.",
    "tags": [
      "asma infantil",
      "sibilância recorrente",
      "pré-escolar",
      "rinovírus"
    ]
  },
  {
    "id": "famerp2026-42",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Menina de 6 anos, há 15 dias apresentando tosse, adinamia e anorexia, evoluindo nos últimos quatro dias com febre baixa e com piora clínica progressiva. Foi iniciado Ceftriaxona endovenosa na origem e transferida hospital de referência. À radiografia de tórax evidenciado consolidação extensa a esquerda, com pequeno derrame pleural. Foi realizado toracocentese, sem necessidade de drenagem pleural. Recebeu dois esquemas antibióticos amplos para germes comuns e atípicos durante o período de 15 dias, evoluindo sem melhora clínico radiológica.\n\nA conduta adequada para essa paciente é:",
    "options": [
      "Realizar exame do escarro para identificar a presença do bacilo da tuberculose e iniciar o tratamento somente se o resultado for positivo",
      "Iniciar o tratamento da tuberculose se a prova tuberculínica mostrar uma reação na pele de 10 mm ou maior, pois nesse caso o diagnóstico é muito provável",
      "Manter esquema antibiótico ampliado e investigar imunodeficiência devido à falta de resposta a antibioticoterapia prolongada",
      "Realizar uma tomografia de tórax para avaliar a extensão da pneumonia e do derrame pleural e a indicação de toracocentese"
    ],
    "correctAnswer": 1,
    "explanation": "Criança com pneumonia arrastada (sintomas há 15 dias antes e mais 15 dias de internação), sem resposta a dois esquemas antibióticos amplos para germes comuns e atípicos: a tuberculose deve ser considerada. Em crianças, a baciloscopia costuma ser negativa (doença paucibacilar e dificuldade de coletar escarro), e o Ministério da Saúde usa um sistema de pontuação: quadro clínico (sintomas > 2 semanas), radiografia (condensação que não melhora com antibiótico por > 2 semanas), contato com adulto bacilífero, prova tuberculínica e estado nutricional.\n\nCom os pontos clínicos e radiológicos já presentes, uma prova tuberculínica ≥ 10 mm eleva o escore a ≥ 40 pontos — diagnóstico muito provável, com indicação de iniciar o tratamento.",
    "commentary": "Só tratar com baciloscopia positiva (A): a maioria das crianças tem baciloscopia negativa; esperar por ela atrasaria o tratamento.\n\nManter antibiótico e investigar imunodeficiência (C): antes, é preciso considerar tuberculose, a causa mais comum de pneumonia que não responde a antibiótico.\n\nTomografia para avaliar derrame e toracocentese (D): não esclarece a etiologia; a investigação de tuberculose é a prioridade.",
    "tip": "Pneumonia que não melhora com antibiótico em criança = pense em TB. Escore do MS ≥ 40 = diagnóstico muito provável, tratar.",
    "reference": "Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada, 2019 — Diagnóstico da TB na criança.",
    "tags": [
      "tuberculose na criança",
      "escore de pontuação",
      "prova tuberculínica",
      "pneumonia arrastada"
    ]
  },
  {
    "id": "famerp2026-43",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Menina de 8 anos, com diagnóstico recente de Leucemia Linfoblástica Aguda, em tratamento no primeiro ciclo de quimioterapia, apresenta perda de consciência, apneia e ausência de pulso central palpável. O monitor cardíaco demonstra fibrilação ventricular. Reanimação cardiorrespiratória é iniciada.\n\nEm relação às drogas que podem ser administradas durante a reanimação cardiorrespiratória podemos afirmar:",
    "options": [
      "A amiodarona deve ser utilizada após o terceiro choque",
      "A lidocaína deve ser administrada após o primeiro choque",
      "Está indicada a cardiovexão elétrica sincronizada desde o primeiro ciclo de reanimação",
      "A adrenalina deve ser usada precocemente no primeiro ciclo de reanimação, pois melhora o prognóstico"
    ],
    "correctAnswer": 0,
    "explanation": "Criança em PCR com fibrilação ventricular. Pelo PALS: desfibrilar (2 J/kg), RCP por 2 minutos, segundo choque (4 J/kg) e então epinefrina (a cada 3–5 minutos); após o terceiro choque, se a FV/TV sem pulso persiste, faz-se amiodarona 5 mg/kg (ou lidocaína 1 mg/kg) — antiarrítmico para ritmo chocável refratário.",
    "commentary": "Lidocaína após o primeiro choque (B): o antiarrítmico (amiodarona ou lidocaína) é usado após o terceiro choque.\n\nCardioversão sincronizada (C): é para taquiarritmias com pulso; em FV usa-se desfibrilação (não sincronizada).\n\nAdrenalina precoce no primeiro ciclo em ritmo chocável (D): no ritmo chocável a epinefrina entra após o segundo choque; a administração precoce é a regra nos ritmos NÃO chocáveis.",
    "tip": "PALS chocável: choque → RCP → choque → epinefrina → choque → amiodarona 5 mg/kg.",
    "reference": "Topjian AA et al. Part 4: Pediatric Basic and Advanced Life Support — 2020 AHA Guidelines for CPR and ECC. Circulation, 2020.",
    "tags": [
      "parada cardiorrespiratória pediátrica",
      "fibrilação ventricular",
      "amiodarona",
      "PALS"
    ]
  },
  {
    "id": "famerp2026-44",
    "topography": "8",
    "topic": "SIADH",
    "module": "Pediatria",
    "text": "Na manutenção hídrica do paciente criticamente enfermo não deve ser utilizada solução hipotônica. Um dos principais mecanismos que causam esta complicação é a Secreção Inapropriada do Hormônio Antidiurético (ADH).\n\nQual das alternativas abaixo contém a característica clínico-laboratorial da SIADH?",
    "options": [
      "Hipernatremia euvolêmica",
      "Hiponatremia hipovolêmica",
      "Hiponatremia euvolêmica",
      "Hipernatremia hipovolêmica"
    ],
    "correctAnswer": 2,
    "explanation": "Na SIADH há liberação de ADH sem estímulo osmótico ou volêmico: o rim retém água livre, causando hiponatremia hiposmolar EUVOLÊMICA (a retenção de água é distribuída e a natriurese compensatória evita edema), com urina inapropriadamente concentrada (osmolalidade urinária > 100 mOsm/kg) e sódio urinário > 30–40 mEq/L.\n\nEm crianças criticamente enfermas (dor, náusea, cirurgia, pneumonia, doenças do SNC), a SIADH é frequente, por isso os soros de manutenção devem ser ISOTÔNICOS — soros hipotônicos aumentam o risco de hiponatremia grave e encefalopatia.",
    "commentary": "Hipernatremia euvolêmica (A): típica do diabetes insipidus (falta de ADH ou resistência), o oposto da SIADH.\n\nHiponatremia hipovolêmica (B): perdas de sódio (vômitos, diuréticos, perda cerebral de sal), com sinais de desidratação.\n\nHipernatremia hipovolêmica (D): perda de água maior que de sódio (diarreia, febre, ingesta insuficiente).",
    "tip": "SIADH = hiponatremia hiposmolar euvolêmica com urina concentrada e Na urinário alto. Manutenção em criança grave: soro isotônico.",
    "reference": "Feld LG et al. Clinical Practice Guideline: Maintenance Intravenous Fluids in Children. Pediatrics, 2018. Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.",
    "tags": [
      "SIADH",
      "hiponatremia",
      "hidratação venosa de manutenção",
      "soro isotônico"
    ]
  },
  {
    "id": "famerp2026-45",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Você está de plantão na emergência pediátrica de um Hospital Infantil e recebe um paciente, sexo masculino, 10 anos com história de vômitos e dor abdominal há 3 dias. Na avaliação sistemática você identifica uma criança extremamente desidratada, com a seguinte avaliação: FC: 110 bpm, FR: 48 irpm, Saturação O₂: 98% ar ambiente PA: 110 x 70mmHg, sem sinais de desconforto respiratório, pulsos amplos e simétricos. Exames:\n\n• Glicemia capilar: 350 mg/dL\n• Sódio: 137 mEq/L\n• Cloro: 92 mEq/L\n• Gasometria venosa: pH 6,9; pO₂ 86; pCO₂ 10; bicarbonato 2; BE −30; SatO₂ 78%\n\nQual distúrbio ácido básico presente?",
    "options": [
      "Acidose metabólica hiperclorêmica",
      "Alcalose metabólica hiperclorêmica",
      "Acidose metabólica ânion gap aumentada e o AG é de 30",
      "Acidose metabólica de ânion gap aumentado e o AG é de 47"
    ],
    "correctAnswer": 3,
    "explanation": "Criança desidratada, com vômitos, dor abdominal, taquipneia (Kussmaul), glicemia de 350 mg/dL e gasometria com pH 6,9 e bicarbonato 2: cetoacidose diabética grave. É uma acidose metabólica com compensação respiratória (pCO₂ 10).\n\nÂnion gap = Na⁺ − (Cl⁻ + HCO₃⁻) = 137 − (92 + 2) = 43 mEq/L — muito aumentado, pelo acúmulo de cetoácidos. Nenhuma alternativa traz 43; a alternativa D (AG aumentado, 47) é a que o gabarito considera correta, por ser a mais próxima.",
    "commentary": "Acidose hiperclorêmica (A): teria AG normal; o cloro está baixo-normal e o AG muito alto.\n\nAlcalose metabólica (B): o pH é 6,9 — acidose extrema.\n\nAG aumentado de 30 (C): identifica o distúrbio, mas o AG calculado (43) está longe de 30.",
    "alert": "Atenção ao cálculo: com os dados do enunciado o ânion gap é 43 [137 − (92 + 2)], não 47. A alternativa D foi mantida por ser a que mais se aproxima e por identificar corretamente o distúrbio.",
    "tip": "AG = Na − (Cl + HCO₃); normal 8–12. CAD = acidose de AG aumentado.",
    "reference": "Glaser N et al. ISPAD Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatr Diabetes, 2022.",
    "tags": [
      "cetoacidose diabética",
      "ânion gap",
      "acidose metabólica",
      "emergência pediátrica"
    ]
  },
  {
    "id": "famerp2026-46",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Pré-escolar, 6 anos de idade internado na unidade de internação pediátrica do Hospital, com diagnóstico de pneumonia adquirida na comunidade. Encontra-se hemodinamicamente estável em cateter nasal de baixo fluxo 1L/min. A radiografia encontra-se abaixo.\n\nQual o principal agente etiológico e o esquema preferencial de tratamento?",
    "options": [
      "Staphylococcus aureus, Oxacilina",
      "Staphylococcus aureus, Vancomicina",
      "Streptococcus pneumoniae, Penicilina cristalina",
      "Streptococcus pneumoniae, Ceftriaxona associado a oxacilina"
    ],
    "correctAnswer": 2,
    "image": "/images/famerp2026-46.webp",
    "explanation": "Criança de 6 anos com pneumonia comunitária, hemodinamicamente estável, com necessidade de oxigênio em baixo fluxo. A radiografia mostra pneumonia sem pneumatoceles, abscesso ou empiema extenso que sugiram estafilococo. O principal agente da pneumonia bacteriana típica em crianças é o Streptococcus pneumoniae, e no paciente internado sem complicações o tratamento preferencial é a penicilina cristalina (ou ampicilina) endovenosa.",
    "commentary": "S. aureus com oxacilina (A) ou vancomicina (B): pensar em estafilococo diante de pneumatoceles, abscessos, empiema, piora rápida, lesões de pele ou após varicela/influenza; nada disso é descrito.\n\nPneumococo com ceftriaxona + oxacilina (D): o esquema associado é para pneumonia grave/complicada com suspeita de S. aureus; o pneumococo no Brasil tem boa sensibilidade à penicilina em doses adequadas.",
    "tip": "PAC infantil internada sem complicação: pneumococo → penicilina cristalina/ampicilina. Pneumatocele/empiema = pensar em S. aureus (oxacilina).",
    "reference": "Sociedade Brasileira de Pediatria. Pneumonia adquirida na comunidade na infância — Documento científico, 2018. Bradley JS et al. IDSA/PIDS Guideline for CAP in children, 2011.",
    "tags": [
      "pneumonia adquirida na comunidade",
      "pneumococo",
      "penicilina cristalina",
      "pneumonia infantil"
    ]
  },
  {
    "id": "famerp2026-47",
    "topography": "11",
    "module": "Pediatria",
    "text": "A febre é uma das principais queixas nos departamentos de emergências pediátricas.\n\nNa avaliação de um paciente com febre sem sinais localizatórios com idade entre 1 a 3 meses, a definição entre alto e baixo risco de uma infecção bacteriana grave depende dos seguintes exames:",
    "options": [
      "Hemograma, Urinálise",
      "Hemograma, coprocultura e Liquor",
      "Hemograma, hemocultura, Urinalise",
      "Hemograma, Urinálise, Liquor e Raio X de tórax"
    ],
    "correctAnswer": 0,
    "explanation": "Lactentes de 1 a 3 meses com febre sem sinais localizatórios: a classificação de risco para infecção bacteriana grave (critérios de Rochester e similares) combina o estado geral (bom aspecto, previamente hígido, a termo) com exames de triagem — hemograma (leucócitos entre 5.000 e 15.000, bastões < 1.500) e exame de urina (urinálise com até 10 leucócitos por campo). O gabarito considerou esses dois exames como os que definem alto ou baixo risco.\n\nNos protocolos mais recentes, acrescentam-se marcadores inflamatórios (PCR, procalcitonina) e a hemocultura entra na investigação dos casos de risco.",
    "commentary": "Hemograma, coprocultura e líquor (B): coprocultura só se houver diarreia; o líquor é feito em casos de alto risco ou antes de antibiótico, não para classificar o risco.\n\nHemograma, hemocultura e urinálise (C): a hemocultura não fica pronta a tempo para classificar o risco; é exame de investigação, não de triagem.\n\nHemograma, urinálise, líquor e radiografia (D): a radiografia só se houver sintomas respiratórios; líquor não é rotina em baixo risco.",
    "alert": "Questão com nuance: protocolos atuais (AAP 2021, PECARN) usam também PCR e procalcitonina na estratificação e indicam hemocultura e urocultura em grande parte dos lactentes febris. O gabarito oficial é A (critérios de Rochester).",
    "tip": "Febre sem sinais em 1–3 meses (Rochester): bom estado + leucócitos 5–15 mil + urina normal = baixo risco.",
    "reference": "Sociedade Brasileira de Pediatria. Febre sem sinais localizatórios — Documento científico, 2021. Pantell RH et al. AAP Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old, 2021.",
    "tags": [
      "febre sem sinais localizatórios",
      "lactente",
      "critérios de Rochester",
      "infecção bacteriana grave"
    ]
  },
  {
    "id": "famerp2026-48",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Paciente gestante com quadro de artrite reumatoide que faz uso de rituximab como forma de controle de sua doença durante a gestação sendo a última dose realizada 2 semanas antes no nascimento. O Rn nasce a termo, APGAR 9/10, Peso de nascimento 2500 gramas, parto normal.\n\nCom relação à vacina da hepatite B e à vacina BCG, assinale a alternativa correta:",
    "options": [
      "Contra-indicar a hepatite B e BCG",
      "Dar a vacina hepatite B e adiar por 3 meses a BCG",
      "Dar a vacina da hepatite B e adiar a BCG por 8 meses",
      "Dar a vacina hepatite B e contra-indicar a BCG por 12 meses"
    ],
    "correctAnswer": 3,
    "explanation": "O rituximabe (anti-CD20) atravessa a placenta, sobretudo no 3º trimestre, e pode deixar o recém-nascido com depleção de linfócitos B por meses. Vacinas inativadas, como a da hepatite B, são seguras e devem ser feitas normalmente ao nascer. Vacinas de agentes vivos, como a BCG, devem ser adiadas: o gabarito adotou o intervalo de 12 meses para exposição intraútero ao rituximabe, por ser um biológico depletor de células B com efeito prolongado.",
    "commentary": "Contraindicar hepatite B e BCG (A): a vacina da hepatite B é inativada e não deve ser adiada.\n\nAdiar BCG por 3 meses (B): intervalo considerado insuficiente após exposição ao rituximabe.\n\nAdiar BCG por 8 meses (C): para o gabarito, ainda insuficiente para um depletor de células B; para anti-TNF costuma-se adiar 6 meses.",
    "alert": "Questão com nuance: as recomendações variam (6 meses ou mais, conforme a droga e, idealmente, após avaliação de linfócitos B do lactente). O gabarito oficial considera 12 meses para o rituximabe.",
    "tip": "RN exposto a biológico intraútero: inativadas normalmente; vacinas vivas (BCG, rotavírus) adiadas — ≥ 6 meses para anti-TNF, mais para rituximabe.",
    "reference": "SBIm/SBP. Calendários de vacinação de pacientes especiais 2024/2025 — RN de mães em uso de imunobiológicos. Ministério da Saúde. Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed., 2023.",
    "tags": [
      "rituximabe",
      "vacina BCG",
      "imunobiológicos na gestação",
      "vacinas de agentes vivos"
    ]
  },
  {
    "id": "famerp2026-49",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Paciente de 75 anos, gênero feminino, é trazida à unidade de emergência hospitalar por quadro de desorientação no tempo e espaço há 6 horas. Exames complementares colhidos encontram-se dentro da normalidade exceto por Na=118mEq/L.\n\nUma vez que tenha sido optada pela prescrição de solução salina a 3%, qual deve o objetivo de variação da natremia desta paciente?",
    "options": [
      "4 a 6 mEq rapidamente",
      "8 a 12 mEq em 24 horas",
      "6 a 8 mEq em 36 horas",
      "8 a 10 mEq em 48 horas"
    ],
    "correctAnswer": 0,
    "explanation": "Hiponatremia grave (118 mEq/L) com sintomas neurológicos (desorientação) e início aparentemente agudo: indicação de salina hipertônica a 3%. O objetivo inicial é elevar rapidamente o sódio em 4 a 6 mEq/L, o que já reduz o edema cerebral e reverte os sintomas graves (em geral com bolus de 100–150 mL, repetidos se necessário).\n\nDepois, respeita-se o limite de correção para evitar a síndrome de desmielinização osmótica: no máximo 8–10 mEq/L em 24 horas (8 mEq/L em pacientes de alto risco: etilistas, desnutridos, hipocalêmicos, cirróticos).",
    "commentary": "8 a 12 mEq em 24 horas (B): é perto do LIMITE máximo de correção, não a meta inicial; 12 mEq/24 h já aumenta o risco de desmielinização.\n\n6 a 8 mEq em 36 horas (C) e 8 a 10 mEq em 48 horas (D): correções lentas demais para a fase aguda sintomática; a meta imediata é subir 4–6 mEq rapidamente.",
    "tip": "Hiponatremia sintomática grave: salina 3% para subir 4–6 mEq rápido; limite 8–10 mEq/24 h.",
    "reference": "Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia (ESE/ESICM/ERA-EDTA). Eur J Endocrinol, 2014. Verbalis JG et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med, 2013.",
    "tags": [
      "hiponatremia",
      "salina hipertônica",
      "desmielinização osmótica"
    ]
  },
  {
    "id": "famerp2026-50",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos, gênero feminino, é admitida em unidade de emergência por quadro de tetraparesia flácida que progrediu de perda de força motora ao longo de 7 dias. Desconhecia comorbidades e não fazia uso de medicações regularmente. Exames laboratoriais evidenciaram K=2,2mEq/L; Na=135mEq/L; gasometria venosa: pH=7,25 HCO₃⁻=18 pCO₂=26; Cl⁻=105mEq/L; Ca=9,9; creatinina=1,0mg/dL; hemograma sem alterações e urina I: densidade=1015 pH=7,0 leucócitos=2.000 hemácias, proteínas e cilindros ausentes.\n\nDiante deste quadro, qual é o diagnóstico mais provável?",
    "options": [
      "Amiloidose",
      "Mieloma múltiplo",
      "Síndrome de Sjogren",
      "Doença de Addison"
    ],
    "correctAnswer": 2,
    "explanation": "Tetraparesia flácida por hipocalemia grave (2,2) e acidose metabólica com ânion gap normal: 135 − (105 + 18) = 12. O pH urinário de 7,0, em plena acidemia, mostra incapacidade de acidificar a urina: acidose tubular renal distal (tipo 1), que cursa com hipocalemia.\n\nEm mulher adulta sem outras causas, a síndrome de Sjögren é a principal causa de ATR distal (nefrite intersticial), podendo ser sua primeira manifestação.",
    "commentary": "Amiloidose (A): o acometimento renal típico é síndrome nefrótica.\n\nMieloma múltiplo (B): associa-se a ATR proximal (síndrome de Fanconi), com anemia, hipercalcemia e insuficiência renal, ausentes aqui.\n\nDoença de Addison (D): cursa com hipercalemia (ATR tipo 4), o oposto do quadro.",
    "tip": "Acidose com AG normal + hipocalemia + pH urinário > 5,5 = ATR distal → em mulher, pense em Sjögren.",
    "reference": "Harrison's Principles of Internal Medicine, 21ª ed. — Acidose tubular renal. Evans RD et al. Renal involvement in primary Sjögren's syndrome. Rheumatology, 2015.",
    "tags": [
      "acidose tubular renal distal",
      "hipocalemia",
      "síndrome de Sjögren",
      "paralisia hipocalêmica"
    ]
  },
  {
    "id": "famerp2026-51",
    "topography": "8",
    "topic": "Distúrbios do cálcio",
    "module": "Clínica Médica",
    "text": "Paciente de 38 anos, gênero masculino, é admitido em unidade de emergência por rebaixamento do nível de consciência sucedido por crises convulsivas há 6 horas. Não apresenta déficits sensitivos ou motores. Exames complementares evidenciaram calcemia total=13,5mg/dL (VR: 8,8 a 10,2), PTH=8 pg/ml (VR=15 a 65), 1,25(OH)2vitamina D=120 pg/ml (VR=18 a 72), 25(OH)vitamina D=28 ng/ml (VR=30 a 60).\n\nQual, dentre as abaixo, seria a possibilidade diagnóstica mais provável?",
    "options": [
      "Linfoma",
      "Amiloidose",
      "Neoplasia produtora de PTHrp",
      "Intoxicação de colecalciferol"
    ],
    "correctAnswer": 0,
    "explanation": "Hipercalcemia grave (13,5) com PTH suprimido (8): hipercalcemia independente de PTH. A 1,25(OH)₂ vitamina D (calcitriol) está muito elevada (120) com 25(OH) vitamina D baixa-normal (28) — padrão de produção extrarrenal de calcitriol, sem intoxicação exógena. As causas são os linfomas e as doenças granulomatosas (sarcoidose, tuberculose), em que macrófagos ou células tumorais expressam 1-alfa-hidroxilase. Entre as opções, o linfoma.",
    "commentary": "Amiloidose (B): não causa hipercalcemia mediada por calcitriol.\n\nNeoplasia produtora de PTHrP (C): na hipercalcemia humoral da malignidade o calcitriol é baixo ou normal (o PTHrP não estimula bem a 1-alfa-hidroxilase).\n\nIntoxicação por colecalciferol (D): elevaria muito a 25(OH) vitamina D (em geral > 150 ng/mL), que aqui está baixa.",
    "tip": "PTH baixo + calcitriol alto + 25-OH-D normal/baixa = linfoma ou granulomatose. 25-OH-D muito alta = intoxicação por vitamina D.",
    "reference": "Harrison's Principles of Internal Medicine, 21ª ed. — Hipercalcemia. Endocrine Society. Treatment of hypercalcemia of malignancy in adults, 2023.",
    "tags": [
      "hipercalcemia",
      "calcitriol",
      "linfoma",
      "PTH suprimido"
    ]
  },
  {
    "id": "famerp2026-52",
    "topography": "9",
    "topic": "Anemias",
    "module": "Clínica Médica",
    "text": "Paciente de 65 anos, gênero feminino, retorna à consulta ambulatorial para seguimento do seu tratamento de artrite reumatoide em uso exclusivo dos metrotexate. Está apresentando queixa recorrente de astenia. Exames complementares evidenciaram: hemograma Hb=8,8g/dl VCM=78fl HCM=30pg leucócitos=8.500 plaquetas=230mil, ferritina=650ng/ml (VR: 20 a 300), capacidade total de ligação do ferro=150ug/dl (VR: 250 a 400).\n\nQual é o provável mecanismo da anemia da paciente?",
    "options": [
      "Hemólise",
      "Ferropenia",
      "Deficiência de folato",
      "Aumento de hepcidina"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com artrite reumatoide (doença inflamatória crônica), anemia microcítica, ferritina elevada (650) e capacidade total de ligação do ferro baixa (150): anemia da doença crônica (anemia da inflamação). A IL-6 estimula a produção hepática de hepcidina, que degrada a ferroportina: o ferro fica retido nos macrófagos e enterócitos e não chega à medula — por isso a ferritina (estoque) é alta e a transferrina/CTLF é baixa.",
    "commentary": "Hemólise (A): teria reticulocitose, LDH e bilirrubina indireta elevadas, haptoglobina baixa; não explica ferritina alta com CTLF baixa.\n\nFerropenia (B): cursa com ferritina BAIXA e CTLF ALTA.\n\nDeficiência de folato (C): possível no uso de metotrexato, mas causa anemia macrocítica, e aqui o VCM é baixo.",
    "tip": "Anemia com ferritina alta e CTLF baixa = doença crônica (hepcidina alta). Ferritina baixa e CTLF alta = ferropriva.",
    "reference": "Weiss G, Ganz T, Goodnough LT. Anemia of inflammation. Blood, 2019. Harrison's Principles of Internal Medicine, 21ª ed.",
    "tags": [
      "anemia da doença crônica",
      "hepcidina",
      "artrite reumatoide",
      "ferritina"
    ]
  },
  {
    "id": "famerp2026-53",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Clínica Médica",
    "text": "Paciente de 65 anos, gênero masculino, está internado na enfermaria de clínica médica para investigar volumoso derrame pleural em hemitórax direito visto no raio x de tórax, solicitado por queixa de dispneia progressiva há 2 semanas, com ortopneia e trepopneia. Paciente desconhece comorbidades, não faz uso de medicações e nega tabagismo ou etilismo. Foi realizada toracocentese diagnóstica com seguintes achados: aspecto amarelo-âmbar, DHL=180U/l, proteínas totais=5,8g/dl, celularidade com 38% de neutrófilos, 30% de linfócitos, 32% de monócitos, ADA=18U/I, glicose=60mg/dL ph=7,5. Exames séricos colhidos conjuntamente à toracocentese: DHL=240U/I (VR:125 a 250); proteínas totais=7,5g/dl (VR:6 a 8,3) albumina=4,0g/dl.\n\nDiante deste quadro, qual é a hipótese diagnóstica mais provável?",
    "options": [
      "Tuberculose",
      "Neoplasia",
      "Pneumonia",
      "TEP"
    ],
    "correctAnswer": 1,
    "explanation": "Pelos critérios de Light, o derrame é EXSUDATO: proteína pleural/sérica = 5,8/7,5 = 0,77 (> 0,5); DHL pleural/sérico = 180/240 = 0,75 (> 0,6); DHL pleural > 2/3 do limite superior sérico (> 167). Em homem de 65 anos com derrame volumoso, evolução progressiva, celularidade mista com muitos monócitos (sem predomínio linfocítico nem neutrofílico importante) e ADA baixa (18), a hipótese mais provável é derrame neoplásico. O próximo passo é a citologia oncótica do líquido e, se negativa, biópsia pleural (de preferência por toracoscopia).",
    "commentary": "Tuberculose (A): exsudato linfocítico (> 50–80% linfócitos) com ADA alta (> 40 U/L); aqui a ADA é 18.\n\nPneumonia (C): derrame parapneumônico é neutrofílico, com quadro infeccioso agudo (febre, tosse), ausente.\n\nTEP (D): costuma dar derrame pequeno, frequentemente hemorrágico, num contexto de dispneia súbita e dor pleurítica.",
    "tip": "Exsudato volumoso em idoso, não linfocítico, com ADA baixa = neoplasia até prova em contrário → citologia e biópsia pleural.",
    "reference": "Light RW. Pleural Diseases, 6ª ed. Roberts ME et al. British Thoracic Society Guideline for pleural disease, 2023.",
    "tags": [
      "derrame pleural",
      "critérios de Light",
      "derrame neoplásico",
      "exsudato"
    ]
  },
  {
    "id": "famerp2026-54",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Paciente de 78 anos, gênero masculino, retorna ao ambulatório de clínica médica para seguimento do seu tratamento de hipertensão reportando recorrentes episódios de vertigem, em especial ao se levantar. Ao exame físico apresenta PA sentada= 120x72mmHg e PA em pé=98x60mmHg. Está em uso regular de enalapril 10mg/dia, hidroclorotiazida 25mg/dia e anlodipina 5mg/dia.\n\nDiante deste quadro qual seria a melhor conduta?",
    "options": [
      "Aumentar sal da dieta",
      "Suspender anlodipina",
      "Suspender hidroclorotiazida",
      "Substituir o enalapril por losartan"
    ],
    "correctAnswer": 2,
    "explanation": "Idoso de 78 anos com tontura ao levantar e queda de 22 mmHg na sistólica e 12 na diastólica em ortostase: hipotensão postural (queda ≥ 20/10 mmHg), com PA sentada já controlada (120 x 72). No idoso, os diuréticos tiazídicos estão entre os principais causadores, por depleção de volume (somada a hiponatremia e hipocalemia). A conduta é desprescrever o tiazídico, mantendo o IECA e o anlodipino, e reavaliar.",
    "commentary": "Aumentar o sal (A): não é a medida inicial num hipertenso; antes, revisar os medicamentos.\n\nSuspender anlodipino (B): o anlodipino causa menos hipotensão postural que o diurético; o diurético é o principal suspeito.\n\nTrocar enalapril por losartana (D): não há vantagem para hipotensão postural; a troca só se justificaria por tosse ou angioedema.",
    "tip": "Idoso com hipotensão ortostática e PA controlada sentado: suspenda primeiro o diurético.",
    "reference": "Barroso WKS et al. Diretrizes Brasileiras de Hipertensão Arterial — 2020. Arq Bras Cardiol, 2021. Sociedade Brasileira de Cardiologia — Hipertensão no idoso.",
    "tags": [
      "hipotensão ortostática",
      "hipertensão no idoso",
      "diurético tiazídico",
      "desprescrição"
    ]
  },
  {
    "id": "famerp2026-55",
    "topography": "3.2",
    "topic": "Encefalopatia hepática",
    "module": "Clínica Médica",
    "text": "Paciente de 69 anos, gênero masculino, encontra-se internado em enfermaria por descompensação de cirrose por álcool com ascite volumosa. Foi iniciado tratamento com furosemida e espironolactona após realização de paracentese cujo resultado evidenciou albumina=1,1 proteínas totais=2,2g/dl neutrófilos=200/mm³ e cultura negativa. No 3º dia de internação evoluiu com alteração do ciclo sono-vigília e achado de flapping no exame físico.\n\nQual possível achado laboratorial ou condição clínica, dentre os abaixo, pode ter contribuído para evolução clínica do paciente?",
    "options": [
      "Hipercalcemia",
      "Hipocalemia",
      "Acidose metabólica",
      "Peritonite Bacteriana Espontânea"
    ],
    "correctAnswer": 1,
    "explanation": "Cirrótico com ascite em uso de furosemida e espironolactona que evolui no 3º dia com alteração do ciclo sono-vigília e flapping: encefalopatia hepática. Entre os precipitantes, os diuréticos podem causar hipocalemia e alcalose metabólica: a hipocalemia aumenta a produção renal de amônia, e a alcalose favorece a forma NH₃, que atravessa a barreira hematoencefálica.\n\nOutros precipitantes a investigar: infecção (PBE), sangramento digestivo, constipação, desidratação e lesão renal, hiponatremia e sedativos.",
    "commentary": "Hipercalcemia (A): não é complicação típica da cirrose nem precipitante de encefalopatia hepática.\n\nAcidose metabólica (C): é a ALCALOSE (com hipocalemia) que favorece a encefalopatia.\n\nPBE (D): é precipitante clássico, mas a paracentese com 200 neutrófilos/mm³ (< 250) e cultura negativa afasta PBE.",
    "tip": "Precipitantes de encefalopatia hepática: infecção, sangramento, constipação, diuréticos (hipocalemia/alcalose), desidratação, sedativos.",
    "reference": "Vilstrup H et al. Hepatic encephalopathy in chronic liver disease: AASLD/EASL Practice Guideline, 2014. EASL Clinical Practice Guidelines on the management of hepatic encephalopathy, 2022.",
    "tags": [
      "encefalopatia hepática",
      "cirrose hepática",
      "hipocalemia",
      "diuréticos"
    ]
  },
  {
    "id": "famerp2026-56",
    "topography": "1.5",
    "topic": "Nódulos tireoidianos",
    "module": "Clínica Médica",
    "text": "Paciente de 38 anos, gênero feminino, procura atendimento ambulatorial após realizar Ultrassom de tireoide feito pelo histórico familiar de carcinoma papilífero com evidência de nódulo tireoidiano de 0,9x0,7x0,6cm, em lobo esquerdo, TIRADS 5. Clinicamente está assintomática.\n\nQual deve ser a conduta correta neste momento?",
    "options": [
      "Cintilografia de tireoide",
      "PAAF guiada por US",
      "Dosagem de TSH",
      "Ultrassom anual"
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo de 0,9 cm, TI-RADS 5 (altamente suspeito), em paciente assintomática. Pelo ACR TI-RADS, a PAAF no TR5 está indicada a partir de 1,0 cm; entre 0,5 e 0,9 cm, recomenda-se seguimento ultrassonográfico (anual, por até 5 anos). Por isso o gabarito escolheu o ultrassom anual.\n\nO histórico familiar de carcinoma papilífero aumenta o risco e, em algumas diretrizes, permite considerar PAAF em nódulos suspeitos menores, mas não muda a recomendação de base do TI-RADS. O TSH também faz parte da avaliação inicial de qualquer nódulo.",
    "commentary": "Cintilografia (A): só é indicada se o TSH estiver baixo (para identificar nódulo hiperfuncionante).\n\nPAAF (B): pelo ACR TI-RADS, no TR5 a punção é indicada a partir de 1 cm; abaixo disso, seguimento.\n\nDosagem de TSH (C): é feita na avaliação inicial de todo nódulo, mas não é a conduta que a questão pede para o nódulo TR5 subcentimétrico.",
    "alert": "Questão com nuance: o TSH deve ser dosado em todo nódulo, e o histórico familiar de câncer de tireoide é fator de risco que algumas diretrizes consideram para punção de nódulos suspeitos menores. O gabarito oficial é D (ultrassom anual pelo ACR TI-RADS).",
    "tip": "ACR TI-RADS PAAF: TR3 ≥ 2,5 cm; TR4 ≥ 1,5 cm; TR5 ≥ 1,0 cm. TR5 entre 0,5 e 0,9 cm = USG anual.",
    "reference": "Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper. J Am Coll Radiol, 2017. Haugen BR et al. 2015 ATA Guidelines for thyroid nodules and differentiated thyroid cancer.",
    "tags": [
      "nódulo tireoidiano",
      "TI-RADS",
      "PAAF",
      "câncer de tireoide"
    ]
  },
  {
    "id": "famerp2026-57",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Clínica Médica",
    "text": "Paciente de 40 anos procura atendimento médico pois deseja emagrecer. Não apresenta queixas clínicas e seus exames de glicemia e perfil lipídico encontram-se dentro da faixa de referência. Nega outras comorbidades ou fármacos em uso regular. Ao exame físico apresenta PA=120x80 e os seguintes dados antropométricos: Altura = 1,70m, peso = 89,59kg (IMC = 31), circunferência abdominal = 108cm, circunferência de quadril = 95cm.\n\nLevando-se em conta estes dados de exame físico e a história clínica e a nova proposta de avaliação diagnóstica para obesidade como podemos definir este paciente?",
    "options": [
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade clínica",
      "Obesidade pré-clínica"
    ],
    "correctAnswer": 3,
    "explanation": "A Comissão do Lancet Diabetes & Endocrinology (2025) propôs nova abordagem diagnóstica: confirmar o excesso de adiposidade não só pelo IMC, mas por outra medida (circunferência abdominal, relação cintura-quadril ou cintura-altura) ou medida direta de gordura; e então separar:\n• Obesidade clínica: excesso de adiposidade com disfunção de órgãos ou limitação das atividades diárias atribuíveis à obesidade.\n• Obesidade pré-clínica: excesso de adiposidade sem disfunção orgânica nem limitação funcional (risco aumentado, mas ainda sem doença).\n\nO paciente tem IMC 31 e circunferência abdominal de 108 cm (adiposidade confirmada), com glicemia, lipídios e PA normais e sem queixas: obesidade pré-clínica.",
    "commentary": "Sobrepeso (A): IMC 31 com cintura aumentada está acima da faixa de sobrepeso (25–29,9).\n\nObesidade grau 1 (B): é a classificação apenas pelo IMC (30–34,9); a questão pede a nova proposta diagnóstica.\n\nObesidade clínica (C): exigiria disfunção de órgãos ou limitação funcional, ausentes.",
    "tip": "Lancet 2025: adiposidade confirmada (IMC + cintura) → com disfunção orgânica = obesidade clínica; sem = pré-clínica.",
    "reference": "Rubino F et al. Definition and diagnostic criteria of clinical obesity. Lancet Diabetes Endocrinol, 2025.",
    "tags": [
      "obesidade",
      "obesidade pré-clínica",
      "obesidade clínica",
      "circunferência abdominal"
    ]
  },
  {
    "id": "famerp2026-58",
    "topography": "3.1",
    "topic": "Doença celíaca",
    "module": "Clínica Médica",
    "text": "Paciente de 22 anos, gênero feminino, procura atendimento ambulatorial para investigar quadro de astenia progressiva nos últimos 3 meses associado a oligomenorreia e episódios de dores abdominais difusas. Dentre as possibilidades diagnósticas foi pensado em doença celíaca.\n\nConsiderando esta hipótese qual deveria ser o plano terapêutico?",
    "options": [
      "Solicitar anticorpo anti-transglutaminase IgA e IgA total",
      "Solicitar anticorpo anti-endomísio IgA e anticorpo anti-gliadina IgG",
      "Solicitar pesquisa HLA DQ2 ou DQ8 se auto-anticorpos negativos",
      "Solicitar pesquisa HLA DQ2 ou DQ8 e endoscopia digestiva com biópsia"
    ],
    "correctAnswer": 0,
    "explanation": "Na suspeita de doença celíaca, o primeiro exame é a sorologia: anticorpo antitransglutaminase tecidual IgA, junto com a dosagem de IgA total — a deficiência de IgA é mais comum nos celíacos e daria um falso-negativo. Se houver deficiência de IgA, usam-se testes IgG (anti-DGP IgG ou anti-tTG IgG). A sorologia positiva é seguida de endoscopia com biópsias duodenais, sempre com o paciente consumindo glúten.",
    "commentary": "Antiendomísio IgA e antigliadina IgG (B): o antiendomísio é muito específico, mas é caro, operador-dependente e não é o primeiro exame; a antigliadina nativa tem baixa acurácia e não é mais recomendada.\n\nHLA-DQ2/DQ8 se autoanticorpos negativos (C): o HLA serve para excluir a doença em situações específicas (dúvida diagnóstica, dieta já iniciada), não como passo seguinte de rotina.\n\nHLA e endoscopia (D): pular a sorologia e ir direto ao HLA e à endoscopia não é a sequência recomendada.",
    "tip": "Suspeita de doença celíaca: anti-tTG IgA + IgA total, comendo glúten.",
    "reference": "Rubio-Tapia A et al. ACG Clinical Guideline: Diagnosis and Management of Celiac Disease. Am J Gastroenterol, 2023. Ministério da Saúde. PCDT Doença Celíaca, 2015.",
    "tags": [
      "doença celíaca",
      "antitransglutaminase",
      "deficiência de IgA",
      "sorologia"
    ]
  },
  {
    "id": "famerp2026-59",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Clínica Médica",
    "text": "Paciente de 81 anos, gênero masculino, comparece em consulta ambulatorial para seguimento de hipertensão e dislipidemia. Faz uso regular de hidroclorotiazida 25mg/dia, losartan 50mg/dia e rosuvastatina 10mg/dia. Não traz novas queixas à consulta. Ao exame físico PA=130x70, peso corporal=60kg, altura=170cm, sem alterações significativas cardiovasculares ou respiratórias. Exames de rotina dentro dos parâmetros de referência exceto por TSH=7,5 mUI/L (VR: 0,5 a 4,5).\n\nDiante deste caso, qual deve a conduta com relação à abordagem do resultado do TSH?",
    "options": [
      "Expectante",
      "Aguardar ultrassom de tireoide",
      "Introduzir levotiroxina 1,5mcg/kg",
      "Introduzir levotiroxina 25mcg/dia"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso de 81 anos, assintomático, com TSH de 7,5 (a única alteração; o T4 livre não é citado como baixo): hipotireoidismo subclínico leve. O TSH aumenta normalmente com a idade, e em idosos acima de 70–80 anos valores até 7–10 mUI/L podem ser normais para a faixa etária. Tratar não traz benefício nessa situação e aumenta o risco de fibrilação atrial e osteoporose por excesso de dose. A conduta é expectante: repetir TSH e T4 livre em 2–3 meses para confirmar e acompanhar.",
    "commentary": "Aguardar ultrassom (B): não há indicação de USG de tireoide para hipotireoidismo subclínico sem nódulo palpável.\n\nLevotiroxina 1,5 mcg/kg (C): dose plena é para hipotireoidismo franco em jovens; no idoso subclínico leve não há indicação.\n\nLevotiroxina 25 mcg (D): seria a dose inicial se houvesse indicação (TSH ≥ 10, sintomas ou progressão), o que não ocorre.",
    "tip": "Hipotireoidismo subclínico em idoso > 70–80 anos com TSH < 10: observar e repetir, não tratar.",
    "reference": "Sgarbi JA et al. Consenso Brasileiro para a abordagem clínica e tratamento do hipotireoidismo subclínico em adultos (SBEM). Arq Bras Endocrinol Metab, 2013. Stott DJ et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism (TRUST). N Engl J Med, 2017.",
    "tags": [
      "hipotireoidismo subclínico",
      "idoso",
      "TSH",
      "levotiroxina"
    ]
  },
  {
    "id": "famerp2026-60",
    "topography": "2.2",
    "topic": "Cardiomiopatias",
    "module": "Clínica Médica",
    "text": "Homem, 80 anos, internado na enfermaria de Clínica Médica devido dispneia a pequenos esforços, ortopneia e edema de membros inferiores. Exames laboratoriais revelam hemoglobina de 13g/dL, creatinina 1.2 mg/dL. com presença de proteinúria. Eletrocardiograma evidencia ritmo de fibrilação atrial, sem outras alterações. Ecocardiograma mostra função ventricular esquerda normal, com espessamento de septo e parede posterior (14 mm). Ressonância magnética cardíaca mostra realce tardio subendocárdico difuso.\n\nPara prosseguir a investigação diagnóstica, qual seria a conduta mais adequada?",
    "options": [
      "Solicitação de cintilografia miocárdica com pirofosfato",
      "Solicitação de imunofixação sérica e urinária e dosagem de cadeias leves livres",
      "Realização de ultrassom de rins e vias urinárias, seguida de biópsia renal diagnóstica",
      "Realização de mielograma com biopsia de medula óssea"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com insuficiência cardíaca com fração de ejeção preservada, espessamento ventricular (14 mm), fibrilação atrial, proteinúria e realce tardio subendocárdico difuso na ressonância: suspeita forte de amiloidose cardíaca. Antes da cintilografia com pirofosfato (que identifica a forma por transtirretina), é obrigatório excluir a amiloidose de cadeias leves (AL) com imunofixação sérica e urinária e dosagem de cadeias leves livres (kappa/lambda) — a proteinúria reforça a possibilidade de AL com acometimento renal. A cintilografia positiva só permite diagnosticar ATTR sem biópsia se não houver proteína monoclonal.",
    "commentary": "Cintilografia com pirofosfato primeiro (A): sem excluir gamopatia monoclonal, a captação pode ocorrer também na AL e levar a erro.\n\nUSG renal e biópsia renal (C): a investigação começa pela pesquisa de proteína monoclonal; biópsia de órgão pode ser necessária depois.\n\nMielograma com biópsia de medula (D): é feito se a pesquisa de proteína monoclonal for positiva, não como primeiro passo.",
    "tip": "Suspeita de amiloidose cardíaca: primeiro imunofixação sérica/urinária + cadeias leves livres (excluir AL); depois cintilografia com pirofosfato (ATTR).",
    "reference": "Simões MV et al. Diretriz sobre Diagnóstico e Tratamento da Cardiomiopatia Amiloidótica — SBC 2021. Arq Bras Cardiol, 2021. Garcia-Pavia P et al. ESC position statement on cardiac amyloidosis, 2021.",
    "tags": [
      "amiloidose cardíaca",
      "cadeias leves livres",
      "cintilografia com pirofosfato",
      "insuficiência cardíaca com fração de ejeção preservada"
    ]
  },
  {
    "id": "famerp2026-61",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Paciente Masculino, 63 anos, diabético e hipertenso, submetido à colectomia esquerda eletiva (neoplasia de colon esquerdo). Devido à hemorragia acidental, a perda sanguínea estimada foi de 2300ml e o tempo cirúrgico se estendeu por 6 horas. Admitido em UTI para cuidados pós operatórios sob analgossedação, ventilação mecânica invasiva e uso de noradrenalina 0,3 mcg/kg/min. Cateter venoso central em veia jugular interna direita, linha arterial em artéria radial direita, mantido com colostomia e dreno de vigilância abdominal. Os dados hemodinâmicos referentes ás 4 primeiras horas em UTI estão representados abaixo (admissão → 2ª hora → 4ª hora):\n\n• FC: 85 → 110 → 125 bpm\n• PAS/PAD: 120/70 → 110/60 → 100/55 mmHg\n• Diurese: — → 0,5 → 0,2 mL/kg/h\n• PVC: 12 → 7 → 4 mmHg\n• Saturação venosa central de O₂: 79 → 60 → 58%\n• P(v-a)CO₂: 6 → 7 → 10 mmHg\n\nQual seria a conduta mais adequada?",
    "options": [
      "Otimização de vasopressor, introdução de inotrópico, contactar cirurgião para avaliar reabordagem cirúrgica",
      "Expansão volêmica com solução cristaloide, iniciar furosemida endovenosa para estímulo diurético e controle de glicemia",
      "Expansão volêmica com solução cristaloide, avaliar necessidade de transfusão de hemocomponentes e otimização de vasopressor",
      "Expansão volêmica com solução coloide, avaliar necessidade transfusão de hemocomponentes e solicitar a presença do cirurgião"
    ],
    "correctAnswer": 2,
    "explanation": "Pós-operatório de cirurgia com perda de 2.300 mL, em noradrenalina, com deterioração nas primeiras 4 horas: FC subindo (85 → 125), PA caindo, PVC caindo (12 → 4), oligúria (0,2 mL/kg/h), saturação venosa central baixa (79 → 58%) e gap venoarterial de CO₂ aumentado (6 → 10 mmHg). PVC baixa indica pré-carga reduzida; ScvO₂ < 70% e P(v-a)CO₂ > 6 indicam baixo fluxo e oferta de O₂ insuficiente. O quadro é de choque hipovolêmico/hemorrágico.\n\nConduta: expansão volêmica com cristaloide, avaliar transfusão (hemoglobina, sangramento pelo dreno) e otimizar o vasopressor para manter a perfusão — e, se o sangramento persistir, reabordagem cirúrgica.",
    "commentary": "Inotrópico e reabordagem (A): o problema é falta de volume; inotrópico sem corrigir a volemia não resolve. A reabordagem pode ser necessária, mas a ressuscitação vem primeiro.\n\nFurosemida (B): diurético em paciente hipovolêmico e oligúrico agrava a hipoperfusão.\n\nColoide e chamar o cirurgião (D): coloides sintéticos não são recomendados (risco de lesão renal) e não têm vantagem sobre cristaloides.",
    "tip": "PVC baixa + ScvO₂ < 70% + gap CO₂ > 6 + oligúria = baixo fluxo por hipovolemia → volume e sangue.",
    "reference": "Cecconi M et al. Consensus on circulatory shock and hemodynamic monitoring (ESICM). Intensive Care Med, 2014. Spahn DR et al. European guideline on management of major bleeding and coagulopathy following trauma, 2023.",
    "tags": [
      "choque hipovolêmico",
      "saturação venosa central",
      "gap de CO2",
      "pós-operatório"
    ]
  },
  {
    "id": "famerp2026-62",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Um paciente masculino de 45 anos, recentemente internado num leito de UTI, tem diagnóstico sindrômico de choque. Foi submetido à passagem de cateter de Swan-Ganz. As medidas realizadas evidenciam: pressão capilar pulmonar ocluída reduzida, débito cardíaco normal, pressão venosa central reduzida e resistência vascular sistêmica reduzida.\n\nCom base nesses achados, esse paciente apresenta que tipo de choque?",
    "options": [
      "Obstrutivo",
      "Distributivo",
      "Hipovolêmico",
      "Cardiogênico"
    ],
    "correctAnswer": 1,
    "explanation": "Perfil hemodinâmico pelo cateter de Swan-Ganz: resistência vascular sistêmica REDUZIDA, débito cardíaco normal (ou aumentado), pressões de enchimento (PVC e pressão capilar pulmonar) reduzidas. A vasodilatação com resistência baixa e débito preservado é a marca do choque distributivo (séptico, anafilático, neurogênico). As pressões de enchimento baixas refletem a hipovolemia relativa da vasodilatação.",
    "commentary": "Obstrutivo (A): débito baixo com resistência alta; no tamponamento as pressões de enchimento se igualam e ficam altas; no TEP a PVC sobe.\n\nHipovolêmico (C): PVC e capilar pulmonar baixas, mas com débito BAIXO e resistência ALTA (vasoconstrição compensatória).\n\nCardiogênico (D): débito baixo, resistência alta e pressão capilar pulmonar ALTA.",
    "tip": "Choque distributivo: RVS baixa com débito normal/alto. Hipovolêmico e cardiogênico: débito baixo e RVS alta (cardiogênico com capilar alta).",
    "reference": "Vincent JL, De Backer D. Circulatory shock. N Engl J Med, 2013.",
    "tags": [
      "choque distributivo",
      "cateter de Swan-Ganz",
      "resistência vascular sistêmica",
      "perfil hemodinâmico"
    ]
  },
  {
    "id": "famerp2026-63",
    "topography": "1.1",
    "topic": "Encefalite",
    "module": "Clínica Médica",
    "text": "Masculino, 25 anos, é admitido no pronto atendimento de emergência, apresenta quadro de alteração do estado mental há 01 semana, caracterizada como comportamento inadequado, com agressividade e agitação. Ontem, apresentou quadro de parada da contactuação com duração de alguns segundos, acompanhada de liberação esfincteriana. Previamente é tabagista importante, não usa medicações continuamente. Ao exame físico, FC: 101 bpm, PA: 120x80 mmhg, Glasgow 14 (confuso), dextro 81, sem déficits neurológicos focais, sinal de Kernig e Brudzinski negativos. Nos exames iniciais de emergência, laboratoriais séricos sem alterações significativas e tomografia de crânio dentro da normalidade.\n\nQual conduta seria a mais adequada neste momento:",
    "options": [
      "Coleta de liquor",
      "Cintilografia Cerebral",
      "Ressonância de Crânio",
      "Avaliação da Psiquiatria"
    ],
    "correctAnswer": 0,
    "explanation": "Jovem com alteração comportamental subaguda (agressividade, agitação) há uma semana, rebaixamento leve da consciência e crise epiléptica, sem sinais meníngeos, com exames séricos e tomografia normais. O quadro sugere encefalite (infecciosa, como a herpética, ou autoimune, como a anti-NMDAR). Com a tomografia normal e sem sinais de hipertensão intracraniana, o passo seguinte mais adequado é a coleta de líquor (celularidade, proteína, glicose, PCR para herpes e outros vírus, pesquisa de anticorpos), enquanto se inicia aciclovir empírico.",
    "commentary": "Cintilografia cerebral (B): não tem papel na investigação inicial de encefalite.\n\nRessonância de crânio (C): é muito útil e deve ser feita, mas não substitui o líquor, que é o exame diagnóstico-chave e não deve ser adiado.\n\nAvaliação psiquiátrica (D): rebaixamento de consciência e crise epiléptica indicam causa orgânica; o primeiro episódio psicótico com sinais neurológicos exige investigação neurológica.",
    "tip": "Alteração comportamental aguda + crise + confusão = encefalite até prova em contrário → líquor + aciclovir empírico.",
    "reference": "Venkatesan A et al. Case definitions, diagnostic algorithms, and priorities in encephalitis (International Encephalitis Consortium). Clin Infect Dis, 2013. Graus F et al. A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol, 2016.",
    "tags": [
      "encefalite",
      "encefalite autoimune",
      "líquor",
      "crise epiléptica"
    ]
  },
  {
    "id": "famerp2026-64",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Paciente 59 anos, portador de estenose mitral moderada, é internado na enfermaria de Clínica Médica com diagnóstico de endocardite infecciosa de valva mitral (vegetação confirmada em ecocardiograma), em uso de ceftriaxona e vancomicina (empiricamente, aguardando resultado de culturas). No 3º dia de internação evolui com palidez cutânea, hipotensão, bradicardia, com o seguinte eletrocardiograma:\n\nSobre o caso assinale o diagnóstico e a conduta mais adequados:",
    "options": [
      "Trata-se de um bloqueio atrioventricular (BAV) 2:1, esperado nos quadros de endocardite e geralmente com resolução espontânea",
      "Trata-se de um bloqueio atrioventricular total (BAVT), mas neste caso não é indicada a colocação de marcapasso temporário, pois há risco de embolização séptica.",
      "Trata-se de um bloqueio atrioventricular total (BAVT) por possível abscesso valvar, sendo indicado marcapasso temporário e cirurgia de troca valvar de urgência",
      "Trata-se de bloqueio atrioventricular (BAV) de 1º grau, sendo indicada observação em leito de terapia intensiva."
    ],
    "correctAnswer": 2,
    "image": "/images/famerp2026-64.webp",
    "explanation": "Endocardite de valva mitral que evolui com bradicardia, hipotensão e, no ECG, dissociação entre ondas P e complexos QRS (bloqueio atrioventricular total). Distúrbio de condução novo na endocardite sugere extensão perivalvar da infecção — abscesso perivalvar comprometendo o sistema de condução. Com instabilidade, está indicado marcapasso temporário; o abscesso é indicação de cirurgia valvar de urgência (controle da infecção não controlada), com ecocardiograma transesofágico para confirmar.",
    "commentary": "BAV 2:1 esperado e de resolução espontânea (A): o traçado mostra BAV total; e bloqueio novo na endocardite é sinal de gravidade, não evolução esperada.\n\nBAVT sem marcapasso pelo risco de embolização (B): com instabilidade hemodinâmica, o marcapasso temporário é necessário; o risco de infecção do eletrodo não justifica deixar o paciente sem estimulação.\n\nBAV de 1º grau (D): o traçado não é só PR prolongado; e mesmo um BAV de 1º grau novo na endocardite merece investigação de abscesso.",
    "tip": "Endocardite + bloqueio AV novo = abscesso perivalvar → ETE e cirurgia de urgência (marcapasso temporário se instável).",
    "reference": "Delgado V et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J, 2023. Baddour LM et al. AHA Scientific Statement on infective endocarditis in adults, 2015.",
    "tags": [
      "endocardite infecciosa",
      "bloqueio atrioventricular total",
      "abscesso perivalvar",
      "cirurgia valvar"
    ]
  },
  {
    "id": "famerp2026-65",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Cirurgia",
    "text": "Sexo masculino, 16 anos, sem comorbidades, faz uso inadvertido de diclofenaco sódico devido a dores musculares frequentes após treinos em academia. Dá entrada na emergência cirúrgica devido a queda no banheiro há 12 horas, apresentando sinais de traumatismo cranioencefálico leve. Está consciente e orientado, tem pequeno ferimento corto-contuso em supercílio direito, sem necessidade de sutura, pálido 2+/4+. Sinais vitais: PA = 80X40mmHg, FC = 130bpm. O abdome é flácido, indolor a palpação. Toque retal é positivo para melena.\n\nDiante do provável diagnóstico e considerando os índices de estratificação de risco, assinale a alternativa correta:",
    "options": [
      "Shock index = 1,6 e pontuação de Glasgow-Blatchford de pelo menos 4 pontos indicam a necessidade de endoscopia digestiva alta em até 36 horas da admissão hospitalar.",
      "Shock index = 1,6 e pontuação de Glasgow-Blatchford de pelo menos 7 pontos indicam a necessidade de endoscopia digestiva alta urgente após a estabilização hemodinâmica.",
      "Shock index = 1,8 e pontuação de Glasgow-Blatchford de pelo menos 3 pontos indicam a realização de tomografia de crânio seguida de angiotomografia do abdome.",
      "Shock index = 1,8 e pontuação de Glasgow-Blatchford de pelo menos 12 pontos indicam a necessidade de tomografia do abdome com contraste endovenoso."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem em uso de diclofenaco, com melena, palidez e choque (PA 80 x 40, FC 130): hemorragia digestiva alta, provavelmente por úlcera péptica induzida por AINE. A queda no banheiro e o TCE leve são consequência da hipovolemia (síncope), não a causa do choque.\n\n• Índice de choque = FC / PAS = 130 / 80 ≈ 1,6 (normal < 0,7; > 1 indica choque).\n• Escore de Glasgow-Blatchford: com PAS < 90, FC ≥ 100 e melena, o escore já passa de 7 (sem contar a ureia e a hemoglobina).\n\nGBS ≥ 7, ou instabilidade, indica endoscopia digestiva alta precoce, após estabilização hemodinâmica (em até 12–24 horas; urgente se instável).",
    "commentary": "GBS ≥ 4 com EDA em até 36 horas (A): o escore do paciente é mais alto, e o prazo de 36 horas é longo demais para paciente instável.\n\nÍndice de choque 1,8 e tomografia de crânio + angiotomografia (C): o cálculo está errado e o TCE é leve; a prioridade é a hemorragia digestiva.\n\nÍndice 1,8 e tomografia de abdome (D): cálculo errado; na HDA a investigação e o tratamento são endoscópicos.",
    "tip": "HDA: índice de choque = FC/PAS (> 1 = choque). Glasgow-Blatchford ≥ 7 ou instabilidade = EDA precoce após estabilizar.",
    "reference": "Laine L et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol, 2021. Gralnek IM et al. ESGE Guideline: endoscopic diagnosis and management of nonvariceal UGIB, 2021.",
    "tags": [
      "hemorragia digestiva alta",
      "escore de Glasgow-Blatchford",
      "índice de choque",
      "úlcera por AINE"
    ]
  },
  {
    "id": "famerp2026-66",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Mulher de 60 anos refere abaulamento doloroso na região inguinal direita há 3 meses, que desaparece quando se deita. Ao exame físico, observa-se presença de hérnia femoral redutível.\n\nQual é a estrutura anatômica determinante para a diferenciação clínica entre as hérnias inguinais e femorais?",
    "options": [
      "Anel inguinal interno",
      "Fáscia transversalis",
      "Ligamento inguinal",
      "Vasos epigástricos inferiores"
    ],
    "correctAnswer": 2,
    "explanation": "O ligamento inguinal é o marco que separa os dois tipos: as hérnias inguinais (diretas e indiretas) se exteriorizam ACIMA do ligamento inguinal, pelo canal inguinal; as hérnias femorais passam ABAIXO dele, pelo canal femoral (medialmente à veia femoral). A hérnia femoral é mais comum em mulheres e tem alto risco de encarceramento e estrangulamento, por isso deve ser sempre operada.",
    "commentary": "Anel inguinal interno (A): é por onde passa a hérnia inguinal indireta; não diferencia inguinal de femoral.\n\nFáscia transversalis (B): sua fraqueza no triângulo de Hesselbach causa a hérnia direta.\n\nVasos epigástricos inferiores (D): diferenciam hérnia inguinal direta (medial a eles) de indireta (lateral).",
    "tip": "Acima do ligamento inguinal = inguinal; abaixo = femoral. Vasos epigástricos: medial = direta, lateral = indireta.",
    "reference": "HerniaSurge Group. International guidelines for groin hernia management. Hernia, 2018. Sabiston Textbook of Surgery, 21ª ed. — Hérnias.",
    "tags": [
      "hérnia femoral",
      "ligamento inguinal",
      "hérnia inguinal",
      "anatomia cirúrgica"
    ]
  },
  {
    "id": "famerp2026-67",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Homem de 32 anos, com antecedente pessoal de apendicectomia aos 20 anos, realizada através de incisão de McBurney, dá entrada na emergência cirúrgica de um hospital terciário com queixa de dor e distensão abdominal há 3 dias, associadas a vomitos. Não evacua e não elimina flatos há 5 dias.\n\nConsiderando-se a hipótese de abdome agudo obstrutivo secundário a bridas, assinale a alternativa correta em relação ao tratamento:",
    "options": [
      "O tratamento não operatório pode ser tentado desde que o paciente esteja estável hemodinamicamente, não apresente sinais de peritonite ao exame físico e a dosagem da PCR < 5mg/dL.",
      "A adesiólise cirúrgica (lise cirúrgica das bridas) é o procedimento de escolha e não pode ser realizada por via laparoscópica devido ao risco de lesão inadvertida de alças.",
      "A cirurgia laparoscópica pode ser indicada e apresenta menor morbidade, apesar do risco mais elevado de lesão intestinal quando comparada a via laparotômica.",
      "São sinais de falência do tratamento clínico: persistência da dor abdominal por mais de 72 horas, drenagem de conteúdo de estase pela sonda nasogástrica de 200ml em 24 horas e sinais de peritonite ao exame físico."
    ],
    "correctAnswer": 2,
    "explanation": "Obstrução intestinal por bridas em paciente com apendicectomia prévia. Sem sinais de estrangulamento, isquemia ou peritonite, tenta-se tratamento não operatório (jejum, sonda nasogástrica, hidratação, contraste hidrossolúvel), por até 72 horas. Quando há indicação cirúrgica, a adesiólise laparoscópica é uma opção em pacientes selecionados (estáveis, sem distensão grave, poucas cirurgias prévias): tem menor morbidade, menor tempo de internação e recuperação mais rápida, embora com risco maior de lesão intestinal inadvertida e de conversão.",
    "commentary": "TNO só se PCR < 5 mg/dL (A): a PCR não é critério isolado para indicar ou contraindicar o tratamento não operatório; o que importa é a ausência de sinais de estrangulamento ou peritonite.\n\nAdesiólise não pode ser laparoscópica (B): pode, em pacientes selecionados.\n\nFalência do TNO com drenagem de 200 mL em 24 horas (D): débito de 200 mL pela sonda é baixo e sugere melhora; os critérios de falha são débito alto persistente (> 500 mL), ausência de melhora em 72 horas ou sinais de peritonite.",
    "tip": "Obstrução por bridas sem sinais de sofrimento: TNO por até 72 h com contraste hidrossolúvel. Peritonite/estrangulamento = cirurgia.",
    "reference": "Ten Broek RPG et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update (WSES). World J Emerg Surg, 2018.",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "adesiólise laparoscópica",
      "abdome agudo obstrutivo"
    ]
  },
  {
    "id": "famerp2026-68",
    "topography": "1.5",
    "topic": "Hiperparatireoidismo",
    "module": "Cirurgia",
    "text": "Uma mulher, de 45 anos, apresenta hiperparatireoidismo primário sintomático. Durante a cirurgia, nota-se que todas as quatro glândulas estão marcadamente aumentadas.\n\nQual das opções a seguir é a melhor recomendação?",
    "options": [
      "Remoção das quatro glândulas com autotransplante de doze pedaços de tecido paratireoidiano de um milímetro no antebraço e criopreservação.",
      "Remoção das quatro glândulas com reposição oral de cálcio e criopreservação das glândulas ressecadas.",
      "Biópsia das quatro glândulas sem removê-las e aguardar resultado do exame anatomopatológico para reoperação.",
      "Remoção de uma glândula e biópsia das outras três, aguardando o resultado do exame anatomopatológico para reoperação."
    ],
    "correctAnswer": 0,
    "explanation": "Hiperparatireoidismo primário com as quatro glândulas aumentadas: hiperplasia das paratireoides (doença multiglandular, que pode estar associada a NEM 1 ou 2A). Há duas estratégias cirúrgicas aceitas: paratireoidectomia subtotal (3 e 1/2 glândulas, deixando um remanescente de ~50 mg) ou paratireoidectomia total com autotransplante de fragmentos (cerca de 1 mm, em geral 10 a 20) no músculo do antebraço não dominante, além de criopreservação de tecido para eventual hipoparatireoidismo. Entre as alternativas, a correta é a total com autoimplante e criopreservação.",
    "commentary": "Remoção das quatro sem autoimplante (B): causaria hipoparatireoidismo definitivo, com necessidade de cálcio e calcitriol por toda a vida.\n\nBiópsia das quatro sem remover (C): deixar as glândulas hiperplásicas não trata a doença e expõe a uma reoperação desnecessária.\n\nRemover uma e biopsiar as outras (D): é a lógica do adenoma único; na hiperplasia das quatro, a doença persistiria.",
    "tip": "Hiperplasia das 4 paratireoides: subtotal (3½) ou total + autoimplante no antebraço + criopreservação.",
    "reference": "Wilhelm SM et al. The American Association of Endocrine Surgeons Guidelines for Definitive Management of Primary Hyperparathyroidism. JAMA Surg, 2016.",
    "tags": [
      "hiperparatireoidismo primário",
      "hiperplasia de paratireoides",
      "autotransplante de paratireoide",
      "paratireoidectomia"
    ]
  },
  {
    "id": "famerp2026-69",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Mulher de 48 anos, realizou endoscopia digestiva alta, que evidenciou uma lesão ovalada, projetada para o lúmen gástrico, recoberto por mucosa de aspecto normal, de consistência firme ao toque da pinça, medindo aproximadamente 3cm de diâmetro e localizada na parede posterior do corpo, sugestiva de tumor estromal.\n\nConsiderando-se esta hipótese diagnóstica, é correto afirmar:",
    "options": [
      "Níveis elevados do marcador HER 2 confirmam o diagnóstico",
      "A mutação no proto-oncogene c-Kit está presente em 95% destas neoplasias",
      "A gastrectomia total com linfadenectomia é a cirurgia padrão para o tratamento",
      "A classificação em tipos intestinal e difuso tem importância na determinação prognóstica"
    ],
    "correctAnswer": 1,
    "explanation": "Lesão gástrica subepitelial (recoberta por mucosa normal), firme, de 3 cm: suspeita de GIST (tumor estromal gastrointestinal), originado das células intersticiais de Cajal. Cerca de 95% expressam KIT (CD117), e a maioria (75–80%) tem mutação ativadora do proto-oncogene c-KIT (outros 5–10%, de PDGFRA). Isso fundamenta o tratamento com imatinibe nos casos avançados ou de alto risco.\n\nO tratamento é a ressecção completa com margens livres (em cunha ou gastrectomia parcial), sem linfadenectomia de rotina.",
    "commentary": "HER2 elevado confirma o diagnóstico (A): HER2 é marcador do adenocarcinoma gástrico (e de mama), não do GIST.\n\nGastrectomia total com linfadenectomia (C): o GIST raramente dá metástase linfonodal; basta a ressecção com margens livres.\n\nClassificação intestinal e difusa (D): é a classificação de Laurén para adenocarcinoma gástrico.",
    "alert": "Precisão do dado: cerca de 95% dos GIST expressam KIT (CD117) na imuno-histoquímica, mas a mutação de c-KIT está presente em cerca de 75–80%. A alternativa B mistura os dois números; o gabarito oficial a considera correta.",
    "tip": "GIST: CD117 (KIT) e DOG1 positivos; ressecção com margem livre, sem linfadenectomia; imatinibe se alto risco ou metastático.",
    "reference": "Casali PG et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS Clinical Practice Guidelines, 2022. NCCN Guidelines: GIST, 2024.",
    "tags": [
      "GIST",
      "c-KIT",
      "CD117",
      "lesão subepitelial gástrica"
    ]
  },
  {
    "id": "famerp2026-70",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Um homem de 60 anos, tabagista, realizou endoscopia digestiva alta para investigação de sintomas dispépticos e foi diagnosticado com uma neoplasia de antro. Para o tratamento curativo do adenocarcinoma gástrico, são utilizadas várias modalidades terapêuticas, de forma isolada ou associadas.\n\nEm relação ao tema, assinale a alternativa correta:",
    "options": [
      "O tratamento atual de escolha consiste em esquema perioperatório com quimioterapia e cirurgia com linfadenectomia",
      "Radioterapia neoadjuvante do abdome e gastrectomia é o tratamento de escolha para tumores locorregionais",
      "Gastrectomia com ressecção linfonodal seguida de radioterapia adjuvante é preconizada para as neoplasias do antro",
      "Quimioterapia com gastrectomia parcial vertical sem linfadenectomia é uma alternativa para pacientes com status performance ruim"
    ],
    "correctAnswer": 0,
    "explanation": "Adenocarcinoma gástrico localmente avançado e ressecável (T2 ou mais, ou linfonodos positivos): o tratamento de escolha é a quimioterapia perioperatória (esquema FLOT: 4 ciclos antes e 4 depois) associada a gastrectomia com linfadenectomia D2. Tumores precoces (T1) podem ir direto à cirurgia ou à ressecção endoscópica, conforme critérios.",
    "commentary": "Radioterapia neoadjuvante e gastrectomia (B): a radioterapia neoadjuvante é usada em tumores da junção esofagogástrica, não no estômago distal.\n\nGastrectomia seguida de radioterapia adjuvante (C): a quimiorradiação adjuvante (Macdonald) caiu em desuso, reservada para ressecção com linfadenectomia inadequada.\n\nQuimioterapia com gastrectomia vertical sem linfadenectomia (D): \"gastrectomia vertical\" é cirurgia bariátrica (sleeve) e não é tratamento oncológico.",
    "tip": "Câncer gástrico ≥ T2 ou N+: FLOT perioperatório + gastrectomia com D2.",
    "reference": "Al-Batran SE et al. Perioperative FLOT versus ECF/ECX (FLOT4-AIO). Lancet, 2019. Lordick F et al. ESMO Clinical Practice Guideline: Gastric cancer, 2022.",
    "tags": [
      "câncer gástrico",
      "quimioterapia perioperatória",
      "FLOT",
      "linfadenectomia D2"
    ]
  },
  {
    "id": "famerp2026-71",
    "topography": "3.3",
    "topic": "Colangite aguda",
    "module": "Cirurgia",
    "text": "Uma mulher de 73 anos dá entrada no pronto-socorro devido a febre alta (39°C), dor no quadrante superior direito e icterícia de início agudo. Nas últimas 12 horas, apresentou rebaixamento do nível de consciência e hipotensão (PA = 80X50mmHg), necessitando do uso de noradrenalina. Exames laboratoriais - Leucograma = 14.000/mm³ com neutrofilia, fosfatase alcalina = 600 U/L, bilirrubina total = 6,0mg/dL. A ultrassonografia do abdome mostra dilatação do ducto colédoco com cálculo impactado ao nível da ampola de Vater.\n\nDe acordo com os critérios de Tóquio 2018, qual é o diagnóstico, a classificação e o manejo terapêutico correto?",
    "options": [
      "Colangite moderada; internação em UTI e drenagem endoscópica precoce após estabilização.",
      "Colangite moderada; antibioticoterapia por via intravenosa por 7 dias e drenagem endoscópica eletiva após estabilização hemodinâmica.",
      "Colangite grave; intervenção hemodinâmica imediata com suporte intensivo, antibioticoterapia e drenagem biliar emergencial por CPRE.",
      "Colangite grave; antibioticoterapia com atenção a agentes multirresistentes e drenagem cirúrgica imediata."
    ],
    "correctAnswer": 2,
    "explanation": "Febre, dor em hipocôndrio direito e icterícia (tríade de Charcot), mais rebaixamento de consciência e hipotensão (pêntade de Reynolds), com cálculo impactado na papila: colangite aguda. Pelos critérios de Tóquio 2018, disfunção de órgão — cardiovascular (necessidade de noradrenalina) e neurológica — define colangite GRAVE (grau III).\n\nConduta: suporte intensivo e ressuscitação, antibiótico de amplo espectro e drenagem biliar de URGÊNCIA, preferencialmente por CPRE (com papilotomia e extração do cálculo ou prótese), assim que possível após estabilização inicial.",
    "commentary": "Colangite moderada com drenagem precoce (A): a disfunção hemodinâmica e neurológica classifica como grave, não moderada.\n\nModerada, antibiótico 7 dias e drenagem eletiva (B): erra a gravidade e o momento da drenagem.\n\nGrave com drenagem cirúrgica imediata (D): a drenagem de escolha é endoscópica (CPRE); a cirurgia de urgência tem mortalidade muito maior e fica para falha da via endoscópica ou percutânea.",
    "tip": "Colangite com disfunção orgânica (choque, rebaixamento, insuficiência renal) = grau III → UTI, antibiótico e CPRE de urgência.",
    "reference": "Kiriyama S et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci, 2018. Miura F et al. TG18 flowchart for the management of acute cholangitis.",
    "tags": [
      "colangite aguda",
      "critérios de Tóquio",
      "pêntade de Reynolds",
      "CPRE"
    ]
  },
  {
    "id": "famerp2026-72",
    "topography": "3.4",
    "module": "Cirurgia",
    "text": "Um homem de 45 anos é encaminhado ao ambulatório do cirurgião após investigação por diarréia crônica e perda ponderal de 10kg em 6 meses. Ele também refere episódios intermitentes de rubor facial e sensação de calor. Exame fisico sem alterações. Exames laboratoriais mostram hipocalemia e acidose metabólica hiperclorêmica. A tomografia computadorizada revela massa sólida hipervascular de 2cm no corpo do pâncreas. Não há evidências de metástases à distância.\n\nCom base no quadro clínico e nos achados complementares, qual diagnóstico é mais provável e qual deve ser o plano terapêutico?",
    "options": [
      "VIPoma; controle de eletrólitos no pré-operatório e tratamento cirúrgico da lesão",
      "Glucagonoma; ressecção completa da lesão e controle intensivo de hiperglicemia",
      "Insulinoma; monitoramento clínico exclusivo devido ao pequeno tamanho da lesão",
      "Gastrinoma; administração de altas doses de IBP seguida de quimioterapia neoadjuvante"
    ],
    "correctAnswer": 0,
    "explanation": "Diarreia aquosa crônica volumosa, perda de peso, rubor facial, hipocalemia e acidose metabólica hiperclorêmica (perda de bicarbonato e potássio nas fezes), com tumor sólido hipervascular no pâncreas: VIPoma (síndrome de Verner-Morrison ou WDHA — watery diarrhea, hypokalemia, achlorhydria). O VIP estimula a secreção intestinal de água e eletrólitos.\n\nO tratamento envolve correção de volume e eletrólitos, análogo de somatostatina (octreotide) para controlar a diarreia e ressecção cirúrgica do tumor localizado.",
    "commentary": "Glucagonoma (B): cursa com eritema necrolítico migratório, diabetes, perda de peso e trombose venosa.\n\nInsulinoma (C): hipoglicemias (tríade de Whipple); mesmo pequeno, o tratamento é cirúrgico (enucleação).\n\nGastrinoma (D): síndrome de Zollinger-Ellison — úlceras pépticas múltiplas e refratárias com diarreia; tratamento com IBP e ressecção, não quimioterapia neoadjuvante.",
    "tip": "Diarreia aquosa volumosa + hipocalemia + acloridria (acidose hiperclorêmica) + tumor pancreático = VIPoma.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Tumores neuroendócrinos do pâncreas. Falconi M et al. ENETS Consensus Guidelines for functional pancreatic neuroendocrine tumors, 2016.",
    "tags": [
      "VIPoma",
      "tumor neuroendócrino pancreático",
      "diarreia secretora",
      "hipocalemia"
    ]
  },
  {
    "id": "famerp2026-73",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Paciente masculino, 20 anos, história de acidente motociclistico em alta velocidade na rodovia, tendo sido ejetado por cerca de 5 metros, com traumatismo cranioencefálico e torácico. Apresenta-se confuso, dispneico, queixando-se de falta de ar. Ao exame físico, apresenta ausculta abolida em hemitórax esquerdo, distensão de veias do pescoço, com PA = 80X50mmHg, FC = 130 bpm, FR = 40 ipm e saturação de O2 de 75% com máscara de oxigênio a 12 litros por minuto.\n\nA conduta imediata durante o atendimento inicial deve ser:",
    "options": [
      "Drenagem de tórax",
      "Descompressão torácica",
      "Toracotomia exploradora",
      "Intubação orotraqueal"
    ],
    "correctAnswer": 1,
    "explanation": "Politraumatizado com dispneia, murmúrio abolido no hemitórax esquerdo, turgência jugular, hipotensão, taquicardia e hipoxemia: pneumotórax hipertensivo. O diagnóstico é clínico e o tratamento deve ser imediato, sem esperar radiografia: descompressão torácica com agulha (ou toracostomia digital) no 4º–5º espaço intercostal na linha axilar média/anterior (ATLS 10ª ed.; em crianças, 2º espaço na linha hemiclavicular), seguida de drenagem torácica em selo d'água.",
    "commentary": "Drenagem de tórax (A): é o tratamento definitivo, mas leva mais tempo; a descompressão imediata vem antes no paciente em choque obstrutivo.\n\nToracotomia exploradora (C): indicada para hemotórax maciço com drenagem > 1.500 mL ou sangramento persistente, não para pneumotórax hipertensivo.\n\nIntubação (D): a ventilação com pressão positiva antes da descompressão piora o pneumotórax hipertensivo e pode precipitar parada.",
    "tip": "Pneumotórax hipertensivo = diagnóstico clínico → descompressão imediata (5º EIC, axilar média) → dreno.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. — Trauma torácico.",
    "tags": [
      "pneumotórax hipertensivo",
      "descompressão torácica",
      "trauma torácico",
      "ATLS"
    ]
  },
  {
    "id": "famerp2026-74",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Paciente feminino, 26 anos, história de acidente automobilistico na rodovia em alta velocidade com colisão frontal. Apresenta marca do cinto de segurança em abdome, queixando-se de dor abdominal. O exame físico demonstra dor à palpação profunda de mesogástrio, sem sinais de irritação peritoneal. Hemodinamicamente normal, com PA = 110X70mmHg, FC = 96 bpm, FR = 18 ipm e saturação de O₂ 97% em ar ambiente. A tomografia abdominal evidenciou uma lesão esplénica Grau IV, com escape de contraste em ramo polar inferior do baço, com moderada quantidade de líquido livre em cavidade peritoneal.\n\nDiante do achado tomográfico e do exame físico, qual a melhor conduta?",
    "options": [
      "Laparotomia exploradora com esplenectomia total",
      "Videolaparoscopia exploradora com esplenectomia total",
      "Arteriografia com embolização de ramo de artéria esplénica",
      "Tratamento expectante com exame físico seríado em Unidade de Terapia Intensiva"
    ],
    "correctAnswer": 2,
    "explanation": "Lesão esplênica grau IV com extravasamento de contraste (blush) em paciente hemodinamicamente normal e sem peritonite. O tratamento não operatório é indicado pela estabilidade, e o blush ativo (sangramento arterial) é indicação de angiografia com embolização seletiva do ramo sangrante, que aumenta muito a taxa de sucesso do tratamento não operatório e preserva o baço. A paciente deve ficar em ambiente monitorizado, com reavaliações seriadas e equipe cirúrgica disponível.",
    "commentary": "Laparotomia com esplenectomia (A): indicada para instabilidade hemodinâmica ou peritonite, ausentes.\n\nVideolaparoscopia com esplenectomia (B): não é a conduta para paciente estável; o objetivo é preservar o baço.\n\nApenas observação em UTI (D): com blush ativo em lesão grau IV, a observação isolada tem alta taxa de falha.",
    "tip": "Baço com blush no paciente estável = angioembolização. Instável = laparotomia.",
    "reference": "Coccolini F et al. Splenic trauma: WSES classification and guidelines for adult and pediatric patients. World J Emerg Surg, 2017. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "trauma esplênico",
      "angioembolização",
      "blush",
      "tratamento não operatório"
    ]
  },
  {
    "id": "famerp2026-75",
    "topography": "4.2",
    "module": "Cirurgia",
    "text": "Um jovem de 22 anos é levado a um Hospital de Trauma após acidente de moto com anteparo fixo. Queixa se de dor em região de dorso. Durante a avaliação inicial, apresentou um episódio de hematúria franca. Em função do exame físico, foi solicitado tomografia de corpo inteiro.\n\nDentre as condições abaixo, a única que seria indicação imediata de laparotomia exploradora frente ao diagnóstico de lesão renal traumática é:",
    "options": [
      "Aparecimento de instabilidade hemodinâmica",
      "Achado tomográfico de lesão de ducto coletor",
      "Achado tomográfico de trombose da artéria renal",
      "Persistência de hematúria após iniciar irrigação vesical"
    ],
    "correctAnswer": 0,
    "explanation": "No trauma renal, a grande maioria das lesões, inclusive de alto grau, é tratada de forma não operatória no paciente estável. A indicação absoluta de exploração cirúrgica é a instabilidade hemodinâmica que não responde à ressuscitação, atribuída a sangramento renal (outras: hematoma retroperitoneal pulsátil ou em expansão na laparotomia, avulsão do pedículo renal).",
    "commentary": "Lesão do sistema coletor (B): extravasamento urinário costuma ser tratado de forma conservadora ou com cateter duplo J; não indica laparotomia imediata.\n\nTrombose da artéria renal (C): tratada de forma endovascular (stent) se diagnosticada precocemente, ou conservadora; não é indicação imediata de laparotomia.\n\nHematúria persistente (D): a hematúria não se correlaciona com a gravidade da lesão e não é indicação isolada de cirurgia; irrigação vesical não é tratamento de trauma renal.",
    "tip": "Trauma renal: quase tudo é não operatório. Opera se instável sem resposta ou hematoma pulsátil/em expansão.",
    "reference": "Morey AF et al. Urotrauma: AUA Guideline, 2020. Coccolini F et al. Kidney and uro-trauma: WSES-AAST guidelines. World J Emerg Surg, 2019.",
    "tags": [
      "trauma renal",
      "indicação de laparotomia",
      "instabilidade hemodinâmica",
      "trauma urológico"
    ]
  },
  {
    "id": "famerp2026-76",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Uma jovem vítima de acidente de moto, atendida pela equipe pré-hospitalar, é conduzida até a emergência de um hospital terciário para o atendimento inicial. O rolamento em bloco é uma parte fundamental no atendimento à vítima politraumatizada.\n\nSobre ele, é correto afirmar:",
    "options": [
      "Só deve ser realizado quando o paciente chega à emergência com os dispositivos prancha rígida e colar cervical e, atendido pela equipe pré-hospitalar",
      "Deve ser realizado ao final da avaliação secundária, exceto quando se busca fonte de sangramento ativo no dorso",
      "Deve ser realizado assim que o paciente chega no setor de emergência do hospital para que a prancha rígida seja retirada o mais rápido possível",
      "Deve ser realizado após a avaliação primária, depois que todas as lesões que pudessem levar risco à vida do paciente terem sido diagnosticadas e tratadas"
    ],
    "correctAnswer": 1,
    "explanation": "No atendimento inicial do politraumatizado (ATLS), a avaliação primária (ABCDE) identifica e trata as lesões com risco imediato à vida. O rolamento em bloco, com proteção da coluna, é feito para examinar o dorso (lesões, deformidades, toque retal quando indicado) e retirar a prancha rígida; para o gabarito, ele é realizado ao final da avaliação secundária, exceto quando é preciso procurar uma fonte de sangramento ativo no dorso, situação em que é antecipado.",
    "commentary": "Só quando o paciente chega com prancha e colar (A): o exame do dorso é necessário em todo politraumatizado, independentemente de ter vindo imobilizado.\n\nAssim que chega à emergência (C): a prioridade é a avaliação primária (ABCDE); o rolamento não deve atrasá-la.\n\nApós a avaliação primária, depois de todas as lesões graves tratadas (D): a alternativa considerada correta é a que coloca o rolamento no fim da avaliação secundária, com exceção para busca de sangramento.",
    "alert": "Questão com nuance: o ATLS 10ª ed. recomenda retirar o paciente da prancha precocemente, e muitos serviços fazem o rolamento já na avaliação primária (exposição) ou logo após ela. O gabarito oficial é B.",
    "tip": "Rolamento em bloco: para examinar o dorso e tirar a prancha; não deve atrasar o ABCDE.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. — Avaliação inicial e atendimento.",
    "tags": [
      "rolamento em bloco",
      "ATLS",
      "avaliação secundária",
      "politrauma"
    ]
  },
  {
    "id": "famerp2026-77",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Um homem de 41 anos, vítima de ferimento por arma branca em região cervical direita e hemitórax esquerdo, é atendido em uma Unidade Primária de Atendimento de Emergência, com sinais clínicos sugestivos de choque hemorrágico. Após iniciar reposição volêmica com Ringer Lactato e infusão de 1,0 grama de Ácido Tranexâmico, iniciou a transferência a um Hospital Quaternário, Nível I de Trauma. Na chegada a este Hospital de Trauma, durante a avaliação inicial, o médico assistente evidencia Shock Index de 1,2 e ABC score de 3 pontos.\n\nNeste momento, com relação ao tratamento do choque hemorrágico, a conduta deveria iniciar a ressuscitação hemodinâmica com:",
    "options": [
      "Concentrado de Hemáceas; Soro Albuminado; Plasma Fresco; Plaquetas",
      "Concentrado de Hemáceas; Solução Salina Hipertônica; Plasma Fresco",
      "Concentrado de Hemáceas; Plasma Fresco; Plaquetas; Crioprecipitado",
      "Concentrado de Hemáceas; Soro Albuminado; Plasmalyte; Plaquetas"
    ],
    "correctAnswer": 2,
    "explanation": "Choque hemorrágico por ferimentos penetrantes, com índice de choque > 1 (1,2) e escore ABC (Assessment of Blood Consumption) de 3 pontos — ABC ≥ 2 prediz necessidade de transfusão maciça. A conduta é ativar o protocolo de transfusão maciça e fazer a ressuscitação hemostática: concentrado de hemácias, plasma fresco congelado e plaquetas em proporção próxima de 1:1:1, com crioprecipitado (ou fibrinogênio) conforme o fibrinogênio, minimizando cristaloides. O ácido tranexâmico já foi feito nas primeiras 3 horas.",
    "commentary": "Hemácias, soro albuminado, plasma e plaquetas (A): a albumina não tem papel na ressuscitação do choque hemorrágico.\n\nHemácias, salina hipertônica e plasma (B): a salina hipertônica não é recomendada na ressuscitação do trauma e faltam plaquetas.\n\nHemácias, albumina, Plasmalyte e plaquetas (D): cristaloide e albumina diluem fatores de coagulação; falta o plasma.",
    "tip": "ABC score ≥ 2 = transfusão maciça: hemácias + plasma + plaquetas (1:1:1) e crioprecipitado/fibrinogênio; pouco cristaloide.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. Holcomb JB et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs 1:1:2 ratio (PROPPR). JAMA, 2015.",
    "tags": [
      "choque hemorrágico",
      "transfusão maciça",
      "escore ABC",
      "ressuscitação hemostática"
    ]
  },
  {
    "id": "famerp2026-78",
    "topography": "7.2",
    "topic": "Melanoma",
    "module": "Cirurgia",
    "text": "Um homem negro de 62 anos se apresenta à clínica para seu exame anual do pé diabético. Ele reclama de unhas grossas e amareladas que esfregam em seus sapatos. O exame físico dos membros inferiores revela diminuição da sensibilidade em ambos os pés, pulsos poplíteos e pediosos palpáveis. Há um pequeno nevo preto em seu calcanhar direito que exibe um padrão dermatoscópico de crista paralela.\n\nQual dos seguintes tipos de câncer de pele pode estar associado com o padrão dermatoscópico descrito?",
    "options": [
      "Melanoma nodular",
      "Melanoma lentiginoso acral",
      "Melanoma lentigo maligno A",
      "Melanoma extensivo superficial"
    ],
    "correctAnswer": 1,
    "explanation": "Lesão pigmentada no calcanhar (região acral) com padrão de cristas paralelas à dermatoscopia (pigmento sobre as cristas da pele, e não nos sulcos) — padrão altamente sugestivo de melanoma acral. O melanoma lentiginoso acral é o subtipo mais comum em pessoas de pele negra e asiáticos, acomete palmas, plantas e leito ungueal e não se relaciona à exposição solar. Nevos acrais benignos têm padrão de sulcos paralelos. A lesão deve ser biopsiada (excisional).",
    "commentary": "Melanoma nodular (A): lesão elevada de crescimento vertical rápido, sem preferência acral nem o padrão de cristas.\n\nLentigo maligno melanoma (C): em áreas fotoexpostas (face) de idosos, com padrão dermatoscópico folicular (pseudorrede, aberturas foliculares assimétricas).\n\nExtensivo superficial (D): o subtipo mais comum em geral, em tronco e membros, de pele clara.",
    "tip": "Pele acral: sulcos paralelos = nevo benigno; cristas paralelas = melanoma lentiginoso acral (o mais comum em negros e asiáticos).",
    "reference": "Sociedade Brasileira de Dermatologia. Consenso Brasileiro de Dermatoscopia. Saida T et al. Significance of dermoscopic patterns in detecting malignant melanoma on acral volar skin. Arch Dermatol, 2004.",
    "tags": [
      "melanoma lentiginoso acral",
      "dermatoscopia",
      "padrão de cristas paralelas",
      "pé diabético"
    ]
  },
  {
    "id": "famerp2026-79",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Homem de 57 anos dá entrada no pronto-atendimento com queixa de dor abdominal em quadrante inferior esquerdo, febre aferida e diarréia com raias de sangue há 3 dias. Ao exame físico apresenta-se em regular estado geral, PAM = 65mmHg, FC = 98bpm, TAx = 37,9°C, abdome globoso, doloroso a palpação profusa, com sinais de peritonite. Exames laboratoriais - Leucometria = 17000/mm³ (88% de segmentados), PCR = 32mg/dL. Após realização de tomografia do abdome, recebe o diagnóstico de diverticulite aguda complicada (classificação de Hinchey II).\n\nAssinale a alternativa que indica a provável necessidade de tratamento cirúrgico:",
    "options": [
      "Presença de peritonite",
      "Leucocitose maior que 15000/mm³",
      "Temperatura axilar maior que 36,5°C",
      "PCR maior que 30mg/dL"
    ],
    "correctAnswer": 0,
    "explanation": "Diverticulite aguda complicada (Hinchey II: abscesso pélvico ou distante). Abscessos maiores que 3–4 cm são drenados por via percutânea guiada por imagem, com antibiótico. A indicação de cirurgia de urgência é a peritonite generalizada (purulenta, Hinchey III, ou fecal, Hinchey IV), ou a falha do tratamento conservador. Entre as alternativas, a presença de peritonite é o que indica tratamento cirúrgico.",
    "commentary": "Leucocitose > 15.000 (B), temperatura > 36,5 °C (C) e PCR > 30 mg/dL (D): são marcadores de inflamação que ajudam na avaliação da gravidade, mas nenhum, isoladamente, indica cirurgia.",
    "tip": "Diverticulite: Hinchey I–II = antibiótico ± drenagem percutânea; Hinchey III–IV (peritonite generalizada) = cirurgia.",
    "reference": "Sartelli M et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg, 2020.",
    "tags": [
      "diverticulite aguda",
      "classificação de Hinchey",
      "peritonite",
      "abdome agudo inflamatório"
    ]
  },
  {
    "id": "famerp2026-80",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Mulher de 48 anos, em programação cirúrgica para videocolecistectomia devido a colelitíase sintomática, dá entrada na emergência cirúrgica de um hospital terciário devido a dor refratária em andar superior do abdome e vômitos há dois dias. Exames laboratoriais da admissão - Leucometria = 15600/mm³ (valor de referência até 11000/mm³), amilase = 1730U/I (até 100U/I), lipase = 3200 (até 60U/I), PCR = 36mg/dL (até 0,5mg/dL).\n\nConsiderando-se o diagnóstico, assinale a alternativa correta:",
    "options": [
      "A reposição fluídica moderadamente agressiva (1,5ml/kg/h) com ringer lactato deve ser iniciada.",
      "O aumento da proteína C reativa deve indicar o início da antibioticoterapia com carbapenêmicos.",
      "O uso de analgésicos opioides e anti-inflamatórios não esteroidais é contraindicado na pancreatite aguda biliar.",
      "A dieta parenteral deve ser iniciada o mais precocemente possível, mesmo na ausência de contraindicações à dieta por via oral."
    ],
    "correctAnswer": 0,
    "explanation": "Dor epigástrica refratária, vômitos e lipase de 3.200 (> 3 vezes o limite) em paciente com colelitíase: pancreatite aguda biliar. A reposição volêmica deve ser moderada e guiada por metas — o estudo WATERFALL mostrou que a hidratação agressiva aumenta a sobrecarga de volume sem melhorar desfechos. Recomenda-se ringer lactato: bolus de 10 mL/kg se houver hipovolemia e depois cerca de 1,5 mL/kg/h, reavaliando com frequência.",
    "commentary": "PCR elevada indica carbapenêmico (B): antibiótico profilático não é recomendado; só se trata infecção confirmada ou fortemente suspeita (necrose infectada, colangite).\n\nOpioides e AINEs contraindicados (C): a analgesia adequada é essencial, e os opioides são seguros e frequentemente necessários.\n\nNutrição parenteral precoce (D): a dieta oral ou enteral precoce é preferida; a parenteral só quando a via enteral não é possível ou é insuficiente.",
    "tip": "Pancreatite aguda: ringer lactato moderado (≈ 1,5 mL/kg/h), analgesia com opioide, dieta oral precoce, sem antibiótico profilático.",
    "reference": "de-Madaria E et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL). N Engl J Med, 2022. Tenner S et al. ACG Guidelines: Management of Acute Pancreatitis, 2024.",
    "tags": [
      "pancreatite aguda",
      "pancreatite biliar",
      "hidratação venosa",
      "ringer lactato"
    ]
  }
];
