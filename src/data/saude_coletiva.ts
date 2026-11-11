import { Question } from '../types';

export const SAUDE_COLETIVA_QUESTIONS: Question[] = [
  {
    id: 'tp2024-101',
    module: 'Saúde Coletiva',
    text: 'Indivíduos com DPOC devem tomar medidas para reduzir a exposição a material particulado (MP) no ar interior. Assinale a alternativa que contém medidas eficazes:',
    options: [
      'Verificar qualidade do ar, usar purificador domiciliar, abrir janelas para ventilar e usar máscara ao sair se MP externo alto.',
      'Manter janelas fechadas sempre, evitar purificadores de ar e usar máscara apenas dentro de casa.',
      'Não há evidências de que purificadores de ar ajudem na redução de MP em ambientes fechados.',
      'O uso de máscaras ao ar livre não tem impacto na redução da inflamação pulmonar em pacientes com DPOC.'
    ],
    correctAnswer: 0,
    explanation: "O material particulado do ar aumenta a inflamação das vias aéreas, piora a função pulmonar e favorece exacerbações na DPOC. Estudos com esses pacientes mostram que hábitos simples, sobretudo quando a família tem condições econômicas para adotá-los, reduzem a concentração de partículas dentro de casa.\n\nEntre essas medidas estão acompanhar a previsão da qualidade do ar, usar purificador de ar, ventilar a casa abrindo as janelas, manter os filtros do ar-condicionado limpos, evitar sair quando a poluição externa estiver alta e usar máscara ao sair. É a alternativa que reúne essas atitudes.",
    commentary: "Janelas sempre fechadas, sem purificador e máscara só em casa (B): fechar a casa o tempo todo concentra os poluentes gerados no próprio ambiente (fumaça de cozinha, poeira), o purificador ajuda a reduzi-los e a máscara é útil fora de casa, onde a exposição é maior.\n\nPurificador sem evidência (C): há estudos mostrando que o purificador de ar reduz o material particulado em ambientes fechados.\n\nMáscara ao ar livre sem impacto (D): a máscara diminui a inalação de partículas quando a poluição externa está alta, o que reduz a exposição que alimenta a inflamação pulmonar.",
    tip: "DPOC e poluição: ventilar a casa, purificador de ar, filtros limpos, evitar sair com ar ruim e máscara na rua.",
    reference: 'Hajeong Kim, Geunjoo Na, Shinhee Park, Seung Won Ra, Sung-Yoon Kang, Ho Cheol Kim, Hwan-Cheol Kim, Sei Won Lee,The impact of life behavior and environment on particulate matter in chronic obstructive pulmonary disease,Environmental Research, Volume 198,2021,111265,ISSN 0013-9351, https://doi.org/10.1016/j.envres.2021.111265; Kim, H., Huh, JY., Na, G. et al. Lifestyle practices that reduce seasonal PM2.5 exposure and their impact on COPD. Sci Rep 13, 11822 (2023). https://doi.org/10.1038/s41598-023-38714-5',
    tags: ['saúde ambiental', 'DPOC']
  },
  {
    id: 'tp2024-102',
    module: 'Saúde Coletiva',
    text: 'Paciente comparece com hematomas e relata agressão por pessoa com quem convive, mas nega-se a registrar Boletim de Ocorrência. Sobre a notificação, assinale a correta:',
    options: [
      'A notificação é obrigatória somente após o registro do BO policial.',
      'A ficha de notificação deve ser preenchida apenas em casos confirmados pela assistência social.',
      'É obrigatório ao médico o preenchimento da Ficha de Notificação de Violência Interpessoal e o envio à Autoridade de Saúde.',
      'A pessoa agredida pode optar por não realizar a ficha de notificação assinando um termo.'
    ],
    correctAnswer: 2,
    explanation: "A violência interpessoal faz parte da Lista Nacional de Notificação Compulsória do Ministério da Saúde. Diante de um caso suspeito ou confirmado, o médico e os demais profissionais de saúde têm o dever de preencher a Ficha de Notificação de Violência Interpessoal e Autoprovocada (SINAN) e enviá-la à vigilância em saúde do município, como determina a Lei 6.259/1975.\n\nA notificação é um instrumento de saúde pública: serve para dimensionar o problema e acionar a rede de proteção e cuidado. Ela não é uma denúncia policial, não depende do Boletim de Ocorrência e não pode ser dispensada a pedido da paciente. O registro policial é um direito da pessoa agredida, que pode ser estimulado, mas não é condição para notificar.",
    commentary: "Notificação só após o BO (A): os dois registros são independentes; a notificação é feita pelo serviço de saúde mesmo que a pessoa não queira ir à polícia.\n\nSó em casos confirmados pela assistência social (B): a notificação é obrigatória já diante da suspeita, e cabe ao profissional que atende, sem depender de confirmação nem de outra equipe.\n\nTermo de recusa (D): por ser compulsória, a notificação não depende da vontade da pessoa atendida; não existe termo que a dispense.",
    tip: "Violência interpessoal: notificar sempre, já na suspeita, mesmo sem BO e mesmo se a vítima não quiser.",
    reference: 'BRASIL, SINANWEB. Brasília. 09 de janeiro de 2020. Link disponível em: https://portalsinan.saude.gov.br/doencas-eagravos; BRASIL. Ficha de Notificação de SINAN SISTEMA DE INFORMAÇÃO DE AGRAVOS DE NOTIFICAÇÃO FICHA DE NOTIFICAÇÃO INDIVIDUAL. Brasília. Link disponível em: http://portalsinan.saude.gov.br/images/documentos/Agravos/via/violencia_v5.pdf. Acesso em 11 de junho de 2024; BRASIL. Portal SINAN. Brasília. 25 de julho de 2022. Link disponível em: http://portalsinan.saude.gov.br/violenciainterpessoal-autoprovocada. Acesso em 11 de junho de 2024; CASA CIVIL. L6259.Brasília. Link disponível: https://www.planalto.gov.br/ccivil_03/leis/l6259.htm; MINISTÉRIO DA SAÚDE. Lista Nacional de Notificação Compulsória de Doenças, Agravos e Eventos de Saúde Pública. Brasília. 19 de fevereiro de 2024.',
    tags: ['ética médica', 'vigilância em saúde']
  },
  {
    id: 'tp2024-103',
    module: 'Saúde Coletiva',
    text: 'Dentre os atributos da Atenção Primária à Saúde (APS), como a "coordenação do cuidado" pode ser entendida?',
    options: [
      'Acolher o indivíduo em seus aspectos biopsicossociais de forma holística.',
      'Capacidade de integrar as informações sobre os usuários entre os diversos serviços (referência e contrarreferência).',
      'Organizar a relação contínua entre usuários e profissionais que favoreça o conhecimento mútuo.',
      'Construção do reconhecimento pela população do serviço como sua referência preferencial.'
    ],
    correctAnswer: 1,
    explanation: "Pelos atributos da Atenção Primária descritos por Barbara Starfield, a coordenação do cuidado é a capacidade de a APS garantir que a informação sobre o usuário circule entre os diferentes serviços por onde ele passa, para que o cuidado seja contínuo e a equipe acompanhe o que foi feito em outros pontos da rede.\n\nNa prática, ela se faz por referência e contrarreferência, interconsultas, apoio matricial, discussão de casos, teleconsultoria e sistemas de informação, como o prontuário eletrônico, que integram os pontos de atenção.",
    commentary: "Acolhimento biopsicossocial e holístico (A): corresponde à integralidade, que é reconhecer e atender (ou encaminhar) todo o leque de necessidades de saúde da pessoa.\n\nRelação contínua entre usuários e profissionais (C): é a longitudinalidade, o vínculo duradouro com a mesma equipe ao longo do tempo, que depende da adscrição da população.\n\nServiço reconhecido como referência preferencial (D): é o atributo do primeiro contato (acesso), em que a APS é a porta de entrada procurada a cada nova necessidade.",
    tip: "Starfield: primeiro contato = porta de entrada; longitudinalidade = vínculo; integralidade = todas as necessidades; coordenação = integrar a rede.",
    reference: 'Medicina ambulatorial: condutas de atenção primária baseadas em evidências [recurso eletrônico] / Organizadores, Bruce B. Duncan ... [et al.]. – 5. ed. – Porto Alegre: Artmed, 2022. Capítulo 3 - A ORGANIZAÇÃO DE SERVIÇOS DE ATENÇÃO PRIMÁRIA À SAÚDE, Takeda, Silvia.',
    tags: ['APS', 'políticas de saúde', 'gestão']
  },
  {
    id: 'tp2024-104',
    module: 'Saúde Coletiva',
    text: 'Sobre o instrumento de avaliação multidimensional do idoso na Atenção Primária, assinale a alternativa CORRETA:',
    options: [
      'A dimensão psicossocial avalia exclusivamente a funcionalidade para o trabalho.',
      'Testes de visão e audição são restritos à atenção secundária (especialista).',
      'A saúde mental deve ser avaliada por psiquiatra, não pelo clínico da APS.',
      'Resume-se à checagem de funções-chave (visão, audição, cognição, mobilidade) que podem estar alteradas.'
    ],
    correctAnswer: 3,
    explanation: "A avaliação multidimensional do idoso na Atenção Primária é um instrumento breve, aplicado na própria consulta e de forma oportunística, que complementa a anamnese e o exame físico. Ela verifica um conjunto pequeno de funções-chave que costumam estar alteradas no idoso e que passam despercebidas na consulta habitual.\n\nEntram na checagem a acuidade visual e auditiva, a força e a mobilidade de braços e pernas, a cognição, o humor, os riscos de queda no domicílio, as atividades básicas e instrumentais da vida diária, a continência urinária, o emagrecimento e a rede de apoio social. Encontrar alterações aumenta a detecção dos problemas que mais afetam a qualidade de vida e orienta a conduta e os encaminhamentos.",
    commentary: "Dimensão psicossocial focada no trabalho (A): a funcionalidade é avaliada na dimensão funcional (atividades da vida diária); a psicossocial abrange fatores sociais, culturais e a saúde mental.\n\nVisão, audição e quedas na atenção secundária (B): esses testes são simples e fazem parte da avaliação na própria APS; só os casos alterados são encaminhados.\n\nSaúde mental exclusiva do especialista (C): o rastreio de cognição e de humor está dentro da avaliação multidimensional e é feito pelo médico da APS.",
    tip: "Avaliação multidimensional do idoso: checagem rápida, na APS, de funções que ninguém pergunta (visão, audição, cognição, humor, quedas, AVD).",
    reference: 'Ministério da Saúde. Nota técnica 01/2019 – Esclarecimento aos gestores sobre a avaliação multidimensional do idoso. Disponível em: https://atencaobasica.saude.rs.gov.br/upload/arquivos/201904/ 25085725-nt-01-avaliacao-multi.pdf; GUSSO, Gustavo; LOPES, José M C.; DIAS, Lêda C. Tratado de medicina de família e comunidade - 2 volumes: princípios, formação e prática. Grupo A, 2019., Capítulo 89',
    tags: ['geriatria', 'APS', 'saúde do idoso']
  },
  {
    id: 'tp2024-105',
    module: 'Saúde Coletiva',
    text: 'Mulher de 27 anos, primigesta no 2º trimestre de gestação, nunca realizou Papanicolau. Qual a indicação correta?',
    options: [
      'Indicar colposcopia diretamente por segurança.',
      'Aguardar o período puerperal para evitar riscos de sangramento.',
      'Realizar a coleta citológica na gestação, seguindo técnica adequada.',
      'Coletar apenas se houver lesões visíveis como condilomas.'
    ],
    correctAnswer: 2,
    explanation: "A gestação não muda as regras do rastreamento do câncer do colo do útero: a idade de início (25 anos) e a periodicidade são as mesmas das outras mulheres. Uma gestante de 27 anos que nunca fez o exame deve, portanto, colher a citologia durante o pré-natal.\n\nPara quem nunca foi rastreada ou tem pouco vínculo com o serviço, o pré-natal é uma oportunidade que não deve ser perdida, e a coleta deve ser completa (ectocérvice e endocérvice). Feita com técnica cuidadosa, não há evidência de que a coleta endocervical traga risco para a gravidez; pode haver um pequeno sangramento, sem consequência, e a gestante deve ser avisada disso.",
    commentary: "Colposcopia direta (A): a colposcopia é exame de investigação de citologia alterada, não de rastreamento; não há indicação sem um resultado anormal.\n\nAguardar o puerpério (B): adia sem motivo o rastreamento de uma mulher que nunca fez o exame e corre o risco de perder o seguimento depois do parto.\n\nSó se houver lesão visível (D): o objetivo do rastreamento é justamente achar lesões precursoras que não se veem a olho nu; condiloma não é critério para colher.",
    tip: "Gestante segue as mesmas regras do Papanicolau: se está na faixa e em atraso, colhe no pré-natal.",
    reference: 'Protocolos da Atenção Básica: Saúde das Mulheres / Ministério da Saúde, Instituto Sírio-Libanês de Ensino e Pesquisa – Brasília: Ministério da Saúde, 2016.',
    tags: ['rastreamento', 'saúde da mulher', 'gestação']
  },
  {
    id: 'tp2024-106',
    module: 'Saúde Coletiva',
    text: 'Os Determinantes Sociais de Saúde (DSSs) estabelecem decisivamente a saúde das pessoas. Qual alternativa demonstra a influência dos DSSs nas políticas do SUS?',
    options: [
      'Promoção de campanhas de vacinação anuais para grupos prioritários.',
      'Aumento do número de hospitais privados via Saúde Suplementar.',
      'Desenvolvimento de novas tecnologias médicas curativas.',
      'Implementação da Estratégia Saúde da Família (ESF) visando saneamento, educação e habitação.'
    ],
    correctAnswer: 3,
    explanation: "Determinantes sociais da saúde são as condições em que as pessoas nascem, vivem, trabalham e envelhecem: renda, escolaridade, moradia, saneamento, alimentação, trabalho, acesso a serviços. Agir sobre eles exige políticas que vão além do atendimento à doença e que envolvem outros setores.\n\nA Estratégia Saúde da Família é o exemplo mais claro no SUS. A equipe atua num território definido, conhece as condições de vida das famílias e trabalha com educação em saúde, vínculo, vigilância e articulação intersetorial, buscando reduzir as desigualdades que adoecem a população.",
    commentary: "Campanhas de vacinação (A): são essenciais para a prevenção, mas atuam sobre um risco biológico específico, não sobre a renda, a moradia e as demais condições de vida que moldam a saúde.\n\nMais hospitais privados pela saúde suplementar (B): o setor privado atende quem pode pagar e não segue a lógica de saúde coletiva do SUS; tende até a ampliar desigualdades de acesso.\n\nNovas tecnologias curativas (C): melhoram o tratamento de doenças já instaladas, mas não mexem nas condições de vida que levam ao adoecimento.",
    tip: "Determinantes sociais = condições de vida. No SUS, quem atua sobre eles é a ESF, com território e ação intersetorial.",
    reference: 'BUSS, P. M.; PELLEGRINI FILHO, A. A Saúde e seus Determinantes Sociais. Physis: Revista de Saúde Coletiva, p. 77-93, 2007. PAIM, J. S. Atenção Primária à Saúde no Brasil: fundamentos e perspectivas. Saúde em Debate, p. 633-646, 2020.',
    tags: ['DSS', 'SUS', 'saúde da família']
  },
  {
    id: 'tp2024-107',
    module: 'Saúde Coletiva',
    text: 'Homem, 76 anos, polifarmácia (Enalapril, HCTZ, Levotiroxina, Sinvastatina, Zolpidem). Apresenta sonolência, lapsos de memória e tosse. Qual a conduta mais apropriada?',
    options: [
      'Manter prescrição e adicionar antidepressivo (ISRS).',
      'Substituir Enalapril por BRA e considerar redução/descontinuação do Zolpidem.',
      'Aumentar HCTZ para controle pressórico e adicionar IBP.',
      'Aumentar Levotiroxina para melhorar a fadiga e manter Zolpidem.'
    ],
    correctAnswer: 1,
    explanation: "Idoso com cinco medicamentos de uso contínuo tem sono excessivo durante o dia, esquecimentos e cansaço, além de tosse persistente. Os sintomas cognitivos e a sonolência podem ser efeito do zolpidem, hipnótico listado nos Critérios de Beers como potencialmente inapropriado para idosos, por causar sedação, confusão, quedas e fraturas. A tosse seca é efeito adverso clássico dos inibidores da ECA, como o enalapril.\n\nA melhor medida é revisar a prescrição: trocar o enalapril por um bloqueador do receptor de angiotensina II, que não causa tosse, e reduzir aos poucos ou suspender o zolpidem, tratando a insônia com medidas não farmacológicas, como higiene do sono e terapia cognitivo-comportamental.",
    commentary: "Manter tudo e acrescentar ISRS (A): ignora que os sintomas podem ser causados pelos próprios remédios e aumenta ainda mais a polifarmácia, antes de rever o que já é usado.\n\nAumentar a hidroclorotiazida e adicionar IBP (C): a pressão está aceitável para a idade, a dose maior de tiazídico eleva o risco de distúrbios eletrolíticos e o IBP sem indicação é mais um item potencialmente inapropriado.\n\nAumentar a levotiroxina e manter o zolpidem (D): o TSH está normal, então mais hormônio só traria risco de hipertireoidismo (arritmia, perda óssea); e manter o zolpidem perpetua a provável causa dos sintomas.",
    tip: "Idoso com sintoma novo e polifarmácia: primeiro suspeite do remédio. IECA dá tosse; zolpidem dá sonolência, confusão e quedas.",
    reference: 'Fick, D. M., et al. (2019). "2019 American Geriatrics Society Beers Criteria® Update Expert Panel." Journal of the American Geriatrics Society, 67(4), 674-694. Maher, R. L., Hanlon, J., & Hajjar, E. R. (2014). "Clinical consequences of polypharmacy in elderly." Expert Opinion on Drug Safety, 13(1), 57-65. Katzung, B. G., Masters, S. B., & Trevor, A. J. (2012). "Basic & Clinical Pharmacology." 12ª ed. New York: McGraw-Hill Medical.',
    tags: ['polifarmácia', 'geriatria', 'farmacologia']
  },
  {
    id: 'tp2024-108',
    module: 'Saúde Coletiva',
    text: 'João, 23 anos, entregador de aplicativo, diagnosticado com HAS. Não tem condições de comprar os remédios, mas a médica explica que estão na farmácia da unidade. Quais princípios do SUS estão em destaque?',
    options: [
      'Universalidade e Integralidade.',
      'Participação e Equidade.',
      'Universalidade e Hierarquização.',
      'Equidade e Hierarquização.'
    ],
    correctAnswer: 0,
    explanation: "João foi atendido na UBS sem nenhuma barreira e, mesmo sem dinheiro para comprar os remédios, recebeu-os de graça na farmácia da unidade. Isso expressa a universalidade: a saúde é direito de todos e dever do Estado (artigo 196 da Constituição), com acesso garantido sem barreiras econômicas, legais ou de outro tipo.\n\nA médica também fez diagnóstico, prescreveu tratamento, orientou alimentação saudável e garantiu o acompanhamento e o acesso ao medicamento, articulando ações de promoção, prevenção e tratamento. Esse conjunto contínuo de cuidados é a integralidade, outro princípio do SUS previsto na Lei 8.080/1990.",
    commentary: "Participação e equidade (B): participação social diz respeito ao controle social em conselhos e conferências, que não aparece no caso; equidade seria tratar de forma diferente quem tem necessidades diferentes, o que não é o destaque da história.\n\nUniversalidade e hierarquização (C): a hierarquização é a organização dos serviços em níveis de complexidade, com referência e contrarreferência; o caso não envolve encaminhamento.\n\nEquidade e hierarquização (D): nenhum dos dois é o ponto central; o caso mostra acesso garantido a todos e cuidado completo.",
    tip: "Acesso sem barreira, inclusive financeira = universalidade. Cuidado completo, da promoção ao tratamento = integralidade.",
    reference: 'BRASIL. Constituição da República Federativa do Brasil. 18.ed. Brasília, DF: Senado, 1988. BRASIL. Lei 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. Diário Oficial da União, Brasília, DF, 19 set. 1990a. Seção 1.',
    tags: ['SUS', 'princípios', 'bioética']
  },
  {
    id: 'tp2024-109',
    module: 'Saúde Coletiva',
    text: "Dona Maria, 65 anos, mora em zona rural isolada, a cerca de 15 km da UBS, sem transporte público, e tem dificuldades financeiras e de locomoção para ir ao centro urbano. A equipe de Saúde da Família vai à região uma vez por mês. Ela precisa de acompanhamento por uma suspeita de doença pulmonar crônica.\n\nQual alternativa indica o princípio do SUS violado, com a justificativa correta?",
    options: [
      "(A) Descentralização, pois deveria haver um hospital de referência na cidade de Dona Maria para ela consultar um especialista.",
      "(B) Participação, pois Dona Maria não consegue participar dos serviços e ações oferecidos pelo SUS.",
      "(C) Universalidade, pois Dona Maria não consegue acessar adequadamente a UBS, e a ESF não consegue alcançar adequadamente os moradores da zona rural.",
      "(D) Equidade, pois Dona Maria não consegue fazer exames mais especializados na UBS do seu município."
    ],
    correctAnswer: 2,
    explanation: "Pela universalidade, todos devem conseguir chegar às ações e aos serviços de saúde sem barreiras, sejam elas legais, econômicas, físicas ou culturais. Dona Maria mora a 15 km da UBS, não há transporte público e ela não tem dinheiro para se deslocar; a equipe, por sua vez, só vai à região uma vez por mês. A barreira geográfica e financeira impede que ela tenha acesso ao serviço de que precisa.\n\nNa prova original, cada alternativa trazia uma justificativa, e só a da universalidade descrevia corretamente o problema: ela não consegue acessar a UBS e a equipe não consegue alcançar os moradores da zona rural.",
    commentary: "Descentralização (A): trata da divisão de responsabilidades entre União, estados e municípios; não implica ter hospital de referência ou especialista em cada município pequeno.\n\nParticipação popular (B): refere-se ao controle social, por meio de conselhos e conferências de saúde, e não à capacidade de usar os serviços.\n\nEquidade (D): seria tratar de forma desigual os desiguais para reduzir diferenças, e o caso também pede isso; mas na prova original a justificativa associada era que ela não conseguia fazer exames especializados na UBS, o que não é atribuição da Atenção Básica.",
    tip: "Barreira de acesso (distância, transporte, dinheiro) que impede chegar ao serviço = violação da universalidade.",
    reference: 'BRASIL. Constituição da República Federativa do Brasil. 18.ed. Brasília, DF: Senado, 1988. BRASIL. Lei 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. Diário Oficial da União, Brasília, DF, 19 set. 1990a. Seção 1.',
    tags: ['SUS', 'acesso', 'saúde rural']
  },
  {
    id: 'tp2024-110',
    module: 'Saúde Coletiva',
    text: 'Qual estratégia é mais abrangente para promover a adesão à imunização infantil, considerando os desafios atuais no Brasil?',
    options: [
      'Programas de capacitação técnica apenas para vacinadores.',
      'Políticas de conscientização com foco na redução da desigualdade de acesso e determinantes sociais.',
      'Incentivos financeiros diretos para famílias que vacinam.',
      'Vigilância intensificada apenas em regiões com alta cobertura anterior.'
    ],
    correctAnswer: 1,
    explanation: "A queda da cobertura vacinal infantil no Brasil tem várias causas: dificuldade de acesso (distância, horário de funcionamento das salas de vacina, falta de imunizantes), desigualdades sociais e regionais, desinformação e hesitação vacinal. Uma estratégia abrangente precisa atuar sobre esse conjunto.\n\nPor isso a melhor alternativa é a que une conscientização da população com redução das desigualdades de acesso, considerando os determinantes sociais da saúde. Ela segue o princípio constitucional de acesso universal e igualitário e alcança justamente os grupos com menor cobertura.",
    commentary: "Capacitação só dos vacinadores (A): melhora a qualidade do atendimento, mas não resolve barreiras de acesso, desigualdade nem desinformação das famílias.\n\nIncentivo financeiro às famílias (C): é uma medida pontual, que depende de parceria privada e não atua sobre as causas estruturais da baixa adesão.\n\nVigilância só em regiões de alta cobertura (D): concentra o esforço justamente onde o problema é menor e deixa de lado as áreas com baixa cobertura.",
    tip: "Pergunta sobre a estratégia \"mais abrangente\" em saúde coletiva: procure a que fala em determinantes sociais e redução de desigualdades.",
    reference: 'BRASIL. Constituição da República Federativa do Brasil. 18.ed. Brasília, DF: Senado, 1988. BRASIL. Lei 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. Diário Oficial da União, Brasília, DF, 19 set. 1990a. Seção 1. GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, xxii, 938. p',
    tags: ['imunização', 'saúde pública', 'equidade']
  },
  {
    id: 'tp2024-111',
    module: 'Saúde Coletiva',
    text: 'Qual estratégia é mais eficaz para proteger trabalhadores da saúde contra riscos ocupacionais no ambiente hospitalar?',
    options: [
      'Apenas contratação de mais pessoal para reduzir estresse.',
      'Foco exclusivo na aquisição de tecnologias avançadas.',
      'Programa integrado: avaliação de riscos, treinamento, ergonomia, suporte psicossocial e EPIs.',
      'Apenas melhoria na infraestrutura física do prédio.'
    ],
    correctAnswer: 2,
    explanation: "No hospital, o trabalhador está exposto a riscos biológicos, químicos, físicos, ergonômicos e psicossociais (sobrecarga, estresse, violência). Medidas isoladas atacam só um desses grupos.\n\nA estratégia mais completa é um programa integrado de saúde do trabalhador, que inclua mapeamento e avaliação contínua dos riscos, capacitação periódica, adequação ergonômica dos postos e das tarefas, apoio psicossocial e oferta e uso correto de equipamentos de proteção individual. Assim todos os tipos de risco são abordados de forma coordenada.",
    commentary: "Contratar mais profissionais (A): pode reduzir a sobrecarga e o estresse, mas não protege contra riscos biológicos, químicos, físicos ou ergonômicos.\n\nFoco em tecnologia avançada (B): atua basicamente sobre riscos físicos e deixa de lado os demais, além de não substituir treinamento e proteção individual.\n\nSó melhorar a infraestrutura (D): cumprir normas do prédio é necessário, mas é uma medida parcial, sem capacitação, ergonomia das tarefas nem suporte psicossocial.",
    tip: "Saúde do trabalhador: risco é biológico, químico, físico, ergonômico e psicossocial; a resposta certa é o programa integrado.",
    reference: 'BRASIL. Ministério da Saúde. (2012). Programa de Melhoria da Qualidade de Vida e Saúde no Trabalho (PMQVST). Brasília: Ministério da Saúde. Disponível em: http://bvsms.saude.gov.br/bvs/publicacoes/programa_qualidade_vida_saude_trabalho.pdf Santos, A. P., & Oliveira, R. A. (2013). Avaliação dos fatores de risco ocupacionais e medidas de prevenção para trabalhadores da saúde. Revista Brasileira de Saúde Ocupacional, 38(127), 172-182. Disponível em: https://www.scielo.br/j/rbso/a/ZrHP88HPdD9sL7P5tHPb8vF/?lang=pt',
    tags: ['saúde do trabalhador', 'gestão hospitalar']
  },
  {
    id: 'tp2024-112',
    module: 'Saúde Coletiva',
    text: 'D.E.N., 39 anos, universitária, apresenta secreção vaginal espessa e amarelada há 7 dias, com sangramento pós-coito. Nunca fez Papanicolau. Qual a hipótese principal?',
    options: [
      'Câncer de colo do útero.',
      'Secreção vaginal fisiológica.',
      'Candidíase.',
      'Cervicite.'
    ],
    correctAnswer: 3,
    explanation: "Corrimento amarelado, espesso e com mau odor, associado a sangramento após a relação sexual, em mulher sexualmente ativa que não usa preservativo, sugere inflamação do colo uterino: cervicite, geralmente por Chlamydia trachomatis ou Neisseria gonorrhoeae. O colo inflamado fica friável e sangra ao contato, o que explica o sangramento pós-coito, e a falta de resposta a um creme vaginal comprado por conta própria reforça que não se trata de candidíase.\n\nNo exame especular, procura-se colo com secreção mucopurulenta e sangramento fácil. O tratamento recomendado pelo Ministério da Saúde para cervicite é ceftriaxona com azitromicina, tratando também a parceria. Como ela nunca fez rastreamento, deve-se aproveitar para colher a citologia e afastar lesão do colo.",
    commentary: "Câncer de colo do útero (A): sangramento pós-coito em mulher nunca rastreada obriga a examinar o colo e colher a citologia, mas o quadro agudo de 7 dias, com corrimento purulento, aponta primeiro para infecção.\n\nSecreção fisiológica (B): a secreção normal é clara ou esbranquiçada, sem odor e sem sintomas; não causa sangramento pós-coito.\n\nCandidíase (C): o corrimento é branco, grumoso, sem odor, com prurido e ardor vulvar; um corrimento amarelado e fétido não combina com esse diagnóstico.",
    tip: "Corrimento mucopurulento + sangramento pós-coito (colo friável) = cervicite: ceftriaxona + azitromicina e tratar a parceria.",
    reference: 'GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, xxii, 938. p',
    tags: ['saúde da mulher', 'IST', 'cervicite']
  },
  {
    id: 'tp2024-113',
    module: 'Saúde Coletiva',
    text: 'M.S.N., 26 anos, 3 filhos, deseja esterilização definitiva (laqueadura). Qual o critério legal atual segundo a Lei 14.443/2022?',
    options: [
      'Ter mais de 21 anos ou pelo menos dois filhos vivos.',
      'O desejo da paciente prevalece independente de filhos ou idade.',
      'Ter mais de 3 filhos e relação estável.',
      'Apenas com laudo favorável de psicólogo e assistente social.'
    ],
    correctAnswer: 0,
    explanation: "A Lei 14.443/2022 alterou a Lei do Planejamento Familiar (Lei 9.263/1996) e passou a permitir a esterilização voluntária em pessoas com capacidade civil plena maiores de 21 anos ou com pelo menos dois filhos vivos. A mesma lei acabou com a exigência de autorização do cônjuge e permitiu a laqueadura durante o parto.\n\nContinuam valendo o prazo mínimo de 60 dias entre a manifestação da vontade e a cirurgia, período em que a pessoa recebe aconselhamento sobre métodos reversíveis, e o consentimento informado por escrito. Com 26 anos e três filhos, a paciente cumpre os critérios.",
    commentary: "Desejo acima de idade e paridade (B): a autonomia é respeitada, mas a lei exige os critérios mínimos; sem idade ou número de filhos suficientes, a esterilização não é permitida.\n\nMais de três filhos e relação estável (C): a lei não exige esse número de filhos nem relacionamento estável, e não pede mais o consentimento do cônjuge.\n\nLaudo de psicólogo e assistente social (D): a lei prevê aconselhamento por equipe multidisciplinar, mas não condiciona a cirurgia a laudo favorável desses profissionais.",
    tip: "Laqueadura ou vasectomia (Lei 14.443/2022): mais de 21 anos OU 2 filhos vivos, 60 dias de espera, sem aval do cônjuge.",
    reference: 'GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, XXII, 938. p LEI Nº 14.443, DE 2 DE SETEMBRO DE 2022, Diário Oficial da União, Publicado em: 05/09/2022 | Edição: 169 | Seção: 1 | Página: 5',
    tags: ['ética médica', 'saúde reprodutiva', 'legislação']
  },
  {
    id: 'tp2024-114',
    module: 'Saúde Coletiva',
    text: 'Sobre os princípios para evitar a polifarmácia, assinale a alternativa correta:',
    options: [
      'Usuários de 5 ou mais fármacos devem ter revisão regular para reduzir doses ou suspender itens.',
      'Para cada problema de saúde novo, deve-se obrigatoriamente adicionar um medicamento.',
      'Deve-se suspender medicamentos ignorando os desejos do paciente se o médico julgar necessário.',
      'A escolha do medicamento deve basear-se exclusivamente na preferência do prescritor.'
    ],
    correctAnswer: 0,
    explanation: "Polifarmácia (em geral definida como o uso de cinco ou mais medicamentos) aumenta o risco de interações, efeitos adversos, quedas, internações e má adesão, sobretudo em idosos. Por isso, quem usa cinco ou mais fármacos deve ter a prescrição revista periodicamente, verificando se cada remédio ainda tem indicação e se algum pode ter a dose reduzida ou ser suspenso (desprescrição).\n\nOutros princípios são evitar tratar com novo remédio o efeito adverso de outro (cascata de prescrição), preferir um medicamento que trate mais de um problema e decidir junto com o paciente, levando em conta as preferências e os objetivos dele.",
    commentary: "Um medicamento para cada problema novo (B): é o caminho para a polifarmácia; muitos problemas se resolvem sem remédio novo, ou com um fármaco que sirva para mais de uma condição.\n\nSuspender ignorando o desejo do paciente (C): a revisão deve ser compartilhada com o paciente; decidir sozinho fere a autonomia e prejudica a adesão. Também não se deve suspender algo de que ele precisa a ponto de piorar sua saúde.\n\nEscolha só pela preferência do prescritor (D): a decisão deve juntar as evidências, as características do paciente e as preferências dele, e não apenas as do médico.",
    tip: "Cinco ou mais remédios: revisar sempre, desprescrever o que não serve e decidir junto com o paciente.",
    reference: 'GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, XXII, 938. p',
    tags: ['geriatria', 'polifarmácia', 'segurança do paciente']
  },
  {
    id: 'tp2024-115',
    module: 'Saúde Coletiva',
    text: "Mulher, 25 anos, IMC 23,5 kg/m², sem doenças conhecidas, sedentária, sem consulta há mais de 1 ano, pede exames de \"check-up\". Além de medir a pressão arterial, quais exames e abordagens de rastreamento devem ser feitos?",
    options: [
      "(A) Papanicolau, colesterol total e frações, glicemia e testes de IST.",
      "(B) Hemograma, TSH, colesterol total e frações, Papanicolau e glicemia.",
      "(C) Papanicolau, abordagem do uso de álcool, tabaco e outras drogas e testes de IST (infecções sexualmente transmissíveis).",
      "(D) Papanicolau, hemograma, TSH, testes de IST, glicemia e colesterol total e frações."
    ],
    correctAnswer: 2,
    explanation: "Para uma mulher de 25 anos, saudável e sem fatores de risco, o rastreamento recomendado pelo Ministério da Saúde (Caderno de Atenção Primária 29) é limitado. Além de medir a pressão, entram a citologia do colo do útero (indicada a partir dos 25 anos para quem já teve relação sexual) e a abordagem do uso de álcool, tabaco e outras drogas, com aconselhamento.\n\nTambém se oferecem os testes para infecções sexualmente transmissíveis (HIV, sífilis e hepatites virais). Exames solicitados sem indicação, como \"check-up\" laboratorial, não trazem benefício e podem levar a resultados falso-positivos e a investigações desnecessárias.",
    commentary: "Colesterol e glicemia (A): numa mulher de 25 anos, com IMC normal e sem fatores de risco, o rastreamento de dislipidemia e de diabetes ainda não está indicado; a alternativa também deixa de fora a abordagem de álcool, tabaco e drogas.\n\nHemograma, TSH, colesterol e glicemia (B): hemograma e TSH não são exames de rastreamento na população assintomática, e colesterol e glicemia não se aplicam a ela; faltam ainda os testes de IST e a abordagem de substâncias.\n\nLista completa com hemograma e TSH (D): inclui exames sem indicação (hemograma, TSH, glicemia, colesterol), o que gera custo, resultados falso-positivos e investigações desnecessárias, e esquece a abordagem de álcool, tabaco e drogas.",
    tip: "Mulher de 25 anos saudável: pressão, Papanicolau, conversa sobre álcool, tabaco e drogas e testes de IST. TSH e hemograma não rastreiam nada.",
    reference: 'https://bvsms.saude.gov.br/bvs/publicacoes/caderno_atencao_primaria_29_rastreamento.pdf',
    tags: ['rastreamento', 'saúde da mulher', 'prevenção']
  },
  {
    id: 'tp2024-116',
    module: 'Saúde Coletiva',
    text: 'Sobre o Método Clínico Centrado na Pessoa (MCCP), é correto afirmar:',
    options: [
      'O componente "Sendo Realista" foca apenas nos recursos financeiros do paciente.',
      'O acrônimo SIFE refere-se à anamnese técnica por sistemas.',
      'Deve-se seguir rigidamente a ordem dos quatro componentes em todas as consultas.',
      'O primeiro componente foca em entender a experiência da doença para o indivíduo (ideias, sentimentos, expectativas).'
    ],
    correctAnswer: 3,
    explanation: "O Método Clínico Centrado na Pessoa organiza a consulta em quatro componentes: explorar a saúde, a doença e a experiência de adoecer; entender a pessoa como um todo (história de vida, família, contexto); elaborar um plano conjunto de manejo; e intensificar a relação médico-pessoa.\n\nO primeiro componente vai além do diagnóstico biomédico: busca saber como a pessoa vive aquele problema. Para isso usa-se o acrônimo SIFE — Sentimentos, Ideias, Funcionalidade (o impacto no dia a dia) e Expectativas em relação à consulta. É essa compreensão que permite chegar a um plano que a pessoa aceite e consiga seguir.",
    commentary: "Sendo realista restrito ao dinheiro do paciente (A): a ideia de ser realista diz respeito ao uso sensato do tempo, dos recursos do serviço e da equipe e das próprias habilidades do médico, e não só às finanças da pessoa.\n\nSIFE como anamnese por sistemas (B): o SIFE explora a experiência subjetiva da doença (sentimentos, ideias, funcionalidade e expectativas); o interrogatório sobre os diversos aparelhos é outra ferramenta.\n\nOrdem rígida dos componentes (C): os componentes se entrelaçam e são retomados conforme a conversa e o vínculo evoluem; não existe sequência obrigatória em cada consulta.",
    tip: "MCCP, 1º componente = SIFE: Sentimentos, Ideias, Funcionalidade e Expectativas do paciente sobre a doença.",
    reference: 'Consulta centrada na pessoa, José Mauro Ceratti Lopes; Lêda Chaves Dias, Tratado de Medicina de Família e Comunidade, Capítulo 15, 2ª edição, Gustavo Gusso, 2019. Método clínico centrado na pessoa, Marcelo Garcia Kolling, Medicina Ambulatorial – Condutas de Atenção Primária baseadas em Evidências, Cap 11, 5ª edição, Artmed, 2022',
    tags: ['MCCP', 'relação médico-paciente', 'APS']
  },
  {
    id: 'tp2024-117',
    module: 'Saúde Coletiva',
    text: 'Adolescente de 15 anos descobre gravidez indesejada e pede sigilo aos pais. Qual a conduta médica correta segundo o ECA?',
    options: [
      'Induzir a paciente a contar para os pais obrigatoriamente.',
      'Respeitar o sigilo da adolescente, desde que não haja risco de vida para ela ou o feto.',
      'Contar aos pais imediatamente por ela ser menor de idade.',
      'Convocar consulta familiar obrigatória sem o consentimento da paciente.'
    ],
    correctAnswer: 1,
    explanation: "A adolescente de 15 anos tem capacidade de discernimento, procurou o serviço por conta própria, aceita o pré-natal e não pretende fazer nada que coloque em risco a si mesma ou a gestação. Nessa situação, o médico deve garantir a confidencialidade, inclusive em relação aos pais.\n\nO ECA assegura ao adolescente o direito ao respeito, à privacidade e à preservação da autonomia, e o Código de Ética Médica (art. 74) proíbe revelar segredo de paciente menor com discernimento, até para os responsáveis, salvo quando o silêncio puder trazer dano a ele. O sigilo só é quebrado diante de risco real (por exemplo, intenção de aborto inseguro, ideação suicida ou suspeita de violência sexual, que em menor de 14 anos é presumida).\n\nNada impede que a equipe, ao longo do pré-natal, ofereça apoio para que ela mesma decida contar à família.",
    commentary: "Obrigar a paciente a contar aos pais (A): o médico pode estimular e apoiar o diálogo com a família, mas impor essa revelação desrespeita a autonomia garantida à adolescente.\n\nContar aos pais por ser menor de idade (C): a idade, sozinha, não autoriza a quebra do sigilo; o critério é a capacidade de discernimento e a existência de risco.\n\nConvocar consulta familiar sem consentimento (D): chamar a família para revelar a gestação sem a concordância dela é quebra de sigilo, ainda que feita de forma acolhedora.",
    tip: "Adolescente com discernimento e sem risco à vida: sigilo mantido, inclusive diante dos pais.",
    reference: 'Estatuto da Criança e do Adolescente, Lei Federal nº 8.069, de 13 de julho de 1990, artigo 227 da Constituição Federal',
    tags: ['ética médica', 'adolescência', 'sigilo']
  },
  {
    id: 'tp2024-118',
    module: 'Saúde Coletiva',
    text: 'Homem, 19 anos, com disúria e secreção uretral após contato sexual desprotegido. Qual o tratamento recomendado pelo Ministério da Saúde?',
    options: [
      'Doxiciclina oral isolada.',
      'Azitromicina oral isolada.',
      'Ciprofloxacino oral + Azitromicina.',
      'Ceftriaxona IM + Azitromicina oral.'
    ],
    correctAnswer: 3,
    explanation: "Disúria com secreção uretral após relação desprotegida configura síndrome do corrimento uretral. Sem identificação imediata do agente, o Ministério da Saúde orienta tratamento sindrômico que cubra ao mesmo tempo gonococo e clamídia, já que a coinfecção é frequente e o paciente pode não voltar.\n\nO esquema é ceftriaxona 500 mg IM em dose única (para Neisseria gonorrhoeae) mais azitromicina 1 g VO em dose única (para Chlamydia trachomatis e outros agentes, como micoplasma). A azitromicina também reforça a cobertura do gonococo. Parcerias sexuais devem ser avaliadas e tratadas, e o paciente deve ser testado para HIV, sífilis e hepatites.",
    commentary: "Doxiciclina isolada (A): trata clamídia (é alternativa à azitromicina), mas não cobre o gonococo de forma adequada.\n\nAzitromicina isolada (B): cobre clamídia, porém a monoterapia não é recomendada para gonorreia, pela resistência crescente do gonococo.\n\nCiprofloxacino + azitromicina (C): as quinolonas saíram da primeira linha porque a resistência do gonococo a elas é alta no Brasil; o ciprofloxacino foi substituído pela ceftriaxona.",
    tip: "Corrimento uretral: ceftriaxona 500 mg IM + azitromicina 1 g VO, ambos dose única, e tratar a parceria.",
    reference: 'Ministério da Saúde. Guia de vigilância em Saúde: volume 2 [recurso eletrônico] / Ministério da Saúde, Departamento de Ações Estratégicas de Epidemiologia e Vigilância em Saúde e Ambiente. – 6. ed. rev. – Brasília: Ministério da Saúde, 2024.',
    tags: ['IST', 'tratamento sindrômico', 'uretrite']
  },
  {
    id: 'tp2024-119',
    module: 'Saúde Coletiva',
    text: 'Em comunidades pobres, qual a melhor intervenção para apoiar uma mãe com dificuldades na amamentação?',
    options: [
      'Oferecer apoio emocional e orientação sobre técnicas de amamentação.',
      'Introduzir alimentos sólidos precocemente (antes dos 6 meses).',
      'Fornecer fórmulas infantis industrializadas como primeira opção.',
      'Substituir o leite materno por leite de vaca in natura.'
    ],
    correctAnswer: 0,
    explanation: "A maior parte das dificuldades na amamentação (pega incorreta, posição inadequada, dor mamilar, sensação de pouco leite, insegurança) é resolvida com aconselhamento: ouvir a mãe, observar a mamada, corrigir a técnica e reforçar a confiança dela.\n\nEm comunidades com poucos recursos, manter o aleitamento exclusivo até os 6 meses é ainda mais valioso: o leite materno é gratuito, sempre disponível, sem risco de contaminação na preparação e protege contra diarreia e infecções respiratórias. Por isso a intervenção indicada é apoio emocional somado a orientação prática, de preferência com acompanhamento pela equipe da atenção básica.",
    commentary: "Introduzir sólidos antes dos 6 meses (B): diminui a sucção e, com ela, a produção de leite, e aumenta o risco de infecções e de alergias; a alimentação complementar começa aos 6 meses.\n\nFórmula como primeira opção (C): desestimula o aleitamento, é cara para a família e, em locais com água e higiene precárias, aumenta o risco de diluição errada e contaminação.\n\nLeite de vaca no lugar do leite materno (D): não é adequado para o lactente pequeno, pois tem excesso de proteína e sódio e pouco ferro, favorecendo anemia e sobrecarga renal.",
    tip: "Dificuldade para amamentar: o tratamento é aconselhamento (pega, posição e confiança), não fórmula.",
    reference: 'Ministério da Saúde (Brasil). "Saúde da Criança: Nutrição Infantil - Aleitamento Materno e Alimentação Complementar." Cadernos de Atenção Básica, n. 33. Brasília: Ministério da Saúde, 2015. Rede IBFAN Brasil. "Manual de Aconselhamento em Amamentação." São Paulo: IBFAN Brasil, 2012. Sociedade Brasileira de Pediatria (SBP). "Aleitamento Materno: Manual de Orientação." 4ª edição, 2018. World Health Organization (WHO) e Fundo das Nações Unidas para a Infância (UNICEF). "Estratégia Global para a Alimentação de Lactentes e Crianças de Primeira Infância." Brasília: Ministério da Saúde, 2003.',
    tags: ['aleitamento materno', 'saúde da criança', 'puericultura']
  },
  {
    id: 'tp2024-120',
    module: 'Saúde Coletiva',
    text: 'Homem, 52 anos, hipertenso e tabagista assintomático. Quais exames de rastreio são adequados?',
    options: [
      'PSA e Creatinina isolados.',
      'PA, Glicemia, Colesterol e abordagem de álcool/drogas.',
      'Hemograma completo e TGO/TGP.',
      'PSA, Urina tipo I e Potássio.'
    ],
    correctAnswer: 1,
    explanation: "Rastreamento é procurar doença em quem não tem sintomas, e só faz sentido para condições em que há benefício comprovado. Para um homem de 52 anos, hipertenso e tabagista, o Caderno de Atenção Primária nº 29 (Rastreamento) apoia: aferição da pressão arterial, dosagem de colesterol (dislipidemia), glicemia (diabetes, indicada de forma especial em hipertensos) e abordagem do uso de álcool, tabaco e outras drogas.\n\nNessa idade também se inclui o rastreamento do câncer colorretal. Já o PSA não é recomendado pelo Ministério da Saúde para rastreio populacional, e exames como hemograma e transaminases não rastreiam nenhuma condição com benefício estabelecido. Creatinina, potássio e urina tipo I fazem parte do acompanhamento da hipertensão já diagnosticada, e não do rastreamento.",
    commentary: "PSA e creatinina (A): o PSA não é recomendado para rastreamento populacional do câncer de próstata pelo Ministério da Saúde, e a creatinina é exame de avaliação do hipertenso, não de rastreio.\n\nHemograma e TGO/TGP (C): não há evidência de benefício em pedi-los de rotina em pessoa assintomática.\n\nPSA, urina tipo I e potássio (D): o PSA não é indicado para rastrear, e urina e potássio servem para acompanhar a hipertensão, não para rastrear doenças.",
    tip: "Rastreio no adulto: PA, colesterol, glicemia, álcool/tabaco e câncer colorretal a partir dos 50. PSA de rotina, não.",
    reference: 'https://bvsms.saude.gov.br/bvs/publicacoes/caderno_atencao_primaria_29_rastreamento.pdf',
    tags: ['rastreamento', 'saúde do homem', 'prevenção']
  },
  {
    id: 'tp2023-101',
    module: 'Saúde Coletiva',
    text: 'De acordo com o Decreto nº 7.508/11, que regulamentou a Lei nº 8.080/1990, a instituição das Regiões de Saúde foi um dos grandes marcos na organização do SUS, pois permite que a integralidade da assistência seja proporcionada à população de forma mais justa e otimizada, aproximando os usuários dos serviços necessários. Para que uma Região de Saúde seja instituída existem requisitos mínimos na oferta de ações e serviços. Desta forma uma Região de Saúde deve conter no mínimo:',
    options: [
      '(A) Atenção primária; atenção secundária; urgência e emergência; atenção psicossocial.',
      '(B) Atenção primária; vigilância em saúde; atenção hospitalar de alta complexidade; serviço móvel de urgência.',
      '(C) Atenção primária; urgência e emergência; atenção psicossocial; atenção ambulatorial especializada e hospitalar; vigilância em saúde.',
      '(D) Atenção básica em saúde; unidade de pronto atendimento; ambulatório de especialidades; hospital de referência.'
    ],
    correctAnswer: 2,
    explanation: "O Decreto nº 7.508/2011 define Região de Saúde como um espaço geográfico formado por municípios vizinhos, com identidade cultural, econômica e social e infraestrutura de transporte compartilhada, criado para organizar e integrar as ações e os serviços de saúde.\n\nO artigo 5º do decreto lista o mínimo que cada região precisa oferecer: atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar e vigilância em saúde. São cinco itens, e a alternativa C é a única que traz todos eles. A ideia é que a maior parte das necessidades do cidadão seja resolvida perto de onde ele mora, sem longos deslocamentos.",
    commentary: "Atenção secundária no lugar de vigilância (A): a lista fica incompleta, pois faltam a vigilância em saúde e a atenção hospitalar, e \"atenção secundária\" não é um dos termos do decreto.\n\nAlta complexidade e SAMU (B): o decreto não exige alta complexidade em toda região (ela pode ser referenciada para outras regiões), e o serviço móvel é só um componente da rede de urgência; faltam atenção psicossocial e ambulatorial especializada.\n\nUPA, ambulatório e hospital de referência (D): cita equipamentos específicos em vez das ações e serviços do decreto, e deixa de fora atenção psicossocial e vigilância em saúde.",
    tip: "Região de Saúde (Decreto 7.508): APS + urgência + psicossocial + ambulatorial especializada/hospitalar + vigilância.",
    reference: 'Brasil. Conselho Nacional de Secretários de Saúde. A Gestão do SUS / Conselho Nacional de Secretários de Saúde. Brasília: CONASS, 2015. Brasil. Decreto nº 7.508, 28 de junho de 2011. Regulamenta a Lei nº 8.080 de 19 de setembro de 1990, para dispor sobre a organização do Sistema Único de Saúde – SUS, o planejamento da saúde, a assistência à saúde e a articulação interfederativa, e dá outras providências.',
    tags: ['políticas de saúde', 'SUS']
  },
  {
    id: 'tp2023-102',
    module: 'Saúde Coletiva',
    text: 'O Serviço Médico de uma empresa quer calcular a prevalência de lesão sugestiva de câncer de pele entre funcionários que trabalham expostos aos raios solares em via pública e, para isso, criou um protocolo clínico. Qual é o tipo de desenho mais adequado para essa pesquisa?',
    options: [
      '(A) Relato de casos',
      '(B) Transversal',
      '(C) Ecológico',
      '(D) Caso-controle'
    ],
    correctAnswer: 1,
    explanation: "A pergunta pede a prevalência, isto é, a proporção de pessoas que têm a lesão em um determinado momento. Para isso, basta examinar todos os funcionários expostos uma única vez e contar quem apresenta lesão suspeita.\n\nEsse é o estudo transversal (ou seccional): exposição e desfecho são medidos ao mesmo tempo, como uma fotografia da população. É o desenho típico para estimar prevalência; a limitação é não permitir afirmar o que veio antes, a exposição ou a doença.",
    commentary: "Relato de casos (A): descreve um ou poucos pacientes, sem denominador populacional; não calcula prevalência.\n\nEcológico (C): usa dados agregados de grupos ou regiões, e não de cada funcionário examinado.\n\nCaso-controle (D): parte de doentes e não doentes para comparar exposições passadas; serve para estudar associação, não para medir prevalência, porque a proporção de casos é definida pelo pesquisador.",
    tip: "Pediu prevalência? Pense em estudo transversal: exposição e desfecho medidos no mesmo momento.",
    reference: 'PEREIRA, M. G. Epidemiologia: teoria e prática. Rio de Janeiro: Guanabara Koogan, 2013.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2023-103',
    module: 'Saúde Coletiva',
    text: 'Médico de Estratégia Saúde da Família (ESF) atende um lactente com 12 meses de idade e observa no cartão vacinal da criança que as últimas vacinas recebidas foram aos 6 meses. Os pais viajarão em breve para a cidade de Belém (PA). Nesse caso, quais vacinas são prioridades nesse momento, de acordo com o Programa Nacional de Imunizações do Ministério da Saúde do Brasil?',
    options: [
      '(A) Pneumocócica 10 valente, meningocócica C, tetra viral (SCRV) e febre amarela concomitantes.',
      '(B) Tríplice viral (SCR), meningocócica C e pneumocócica 10 valente concomitantes; febre amarela após 30 dias.',
      '(C) Tríplice bacteriana (DPT), meningocócica C e tríplice viral (SCR) concomitantes; varicela após 30 dias.',
      '(D) Pneumocócica 10 valente, meningocócica C e febre amarela concomitantes; sarampo, caxumba e rubéola após 30 dias.'
    ],
    correctAnswer: 3,
    explanation: "Aos 12 meses o lactente está atrasado: não recebeu a febre amarela dos 9 meses nem as doses dos 12 meses (reforço da pneumocócica, reforço meningocócico e tríplice viral). A família vai viajar para o Pará, área com recomendação de vacina contra febre amarela, e a proteção só se estabelece cerca de 10 dias depois da aplicação. Por isso a febre amarela é a prioridade.\n\nO detalhe que a prova cobra: em menores de 2 anos, a vacina de febre amarela e a tríplice (ou tetra) viral não devem ser aplicadas no mesmo dia, porque uma reduz a resposta à outra; o intervalo recomendado é de 30 dias. Já as vacinas inativadas (pneumocócica e meningocócica) podem ser dadas junto com a febre amarela. Assim: pneumocócica, meningocócica e febre amarela hoje, e tríplice viral 30 dias depois.",
    commentary: "Tetra viral com febre amarela (A): junta, no mesmo dia, vacinas de vírus vivos que não devem ser coadministradas nessa faixa etária.\n\nTríplice viral agora e febre amarela depois (B): inverte a prioridade; adiar a febre amarela deixaria a criança sem proteção na viagem para área de risco.\n\nDTP, meningocócica e tríplice viral (C): não inclui a febre amarela, que é a vacina indispensável para a viagem.",
    tip: "Menor de 2 anos: febre amarela e tríplice viral não no mesmo dia (30 dias de intervalo). Viagem para área de risco = febre amarela primeiro.",
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Manual de Normas e Procedimentos para Vacinação / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância das Doenças Transmissíveis. – Brasília: Ministério da Saúde, 2014. Kfouri RA, et al. Febre amarela: Nota Informativa. Departamento Científico de Imunizações/Sociedade Brasileira de Pediatria, Nº 3, fevereiro de 2017.',
    tags: ['imunização', 'pediatria']
  },
  {
    id: 'tp2023-104',
    module: 'Saúde Coletiva',
    text: 'A Política Nacional de Atenção Integral da Saúde do Homem (PNAISH) tem como objetivo apoiar mudanças nas maneiras como profissionais de saúde e a população em geral entendem e agem em relação às condições de saúde do segmento de homens em nosso país, através de diversas ações. Qual ação se configura como prevenção primária para homens adultos?',
    options: [
      '(A) Disponibilidade de áreas de atividade física.',
      '(B) Dosagem de PSA (antígeno prostático específico).',
      '(C) Oferta de anti-hipertensivos ou hipoglicemiantes.',
      '(D) Notificação de casos de violência contra homens.'
    ],
    correctAnswer: 0,
    explanation: "Prevenção primária é agir antes de a doença existir, reduzindo fatores de risco ou promovendo proteção. Oferecer espaços para atividade física faz exatamente isso: estimula um hábito que diminui o risco de doenças cardiovasculares, diabetes, obesidade e problemas osteomusculares em homens ainda saudáveis.\n\nA PNAISH busca justamente aproximar os homens dos cuidados de saúde e reduzir os agravos evitáveis, e ações de promoção e proteção desse tipo fazem parte dessa estratégia.",
    commentary: "Dosagem de PSA (B): é tentativa de detecção precoce de doença já existente, portanto prevenção secundária (e o rastreamento populacional com PSA nem é recomendado de rotina pelo Ministério da Saúde).\n\nAnti-hipertensivos ou hipoglicemiantes (C): tratam hipertensão e diabetes já diagnosticados para evitar complicações; não impedem o surgimento da doença.\n\nNotificação de violência (D): gera informação para vigilância e planejamento, mas o ato de notificar, sozinho, não impede que a violência ocorra.",
    tip: "Prevenção primária = antes da doença (hábitos, proteção). Rastrear é secundária; tratar para evitar complicação não é primária.",
    reference: 'Política nacional de atenção integral a saúde do homem [recurso eletrônico] / Elza Berger Salema Coelho... [et al] — Florianópolis : Universidade Federal de Santa Catarina, 2018.',
    tags: ['prevenção', 'saúde do homem']
  },
  {
    id: 'tp2023-105',
    module: 'Saúde Coletiva',
    text: 'Homem, 35 anos, motorista de aplicativo, não segue uma alimentação regular e faz atividade física aos finais de semana. Devido ao histórico familiar, seu médico solicitou exames cardiovasculares de triagem, sendo constatado que ele apresentava um estreitamento das artérias coronárias. O diagnóstico precoce permitiu que ele recebesse tratamento adequado, incluindo mudanças no estilo de vida, medicamentos e terapia de reabilitação cardíaca, contribuindo na sua recuperação. Considerando o contexto acima, assinale a alternativa onde o nível de prevenção está adequadamente caracterizado:',
    options: [
      '(A) A terapia de reabilitação cardíaca que o paciente recebeu após o tratamento é um exemplo de prevenção secundária, pois tem o objetivo de melhorar a função cardíaca.',
      '(B) O diagnóstico precoce visa identificar e tratar a condição em seu estágio inicial para evitar complicações, essas intervenções são exemplos de prevenção terciária.',
      '(C) O estreitamento das artérias coronárias poderia ser evitado com medidas de prevenção primária, como alimentação balanceada e prática de atividade física regular.',
      '(D) Monitorar regularmente a saúde cardiovascular por meio de consultas médicas e exames de acompanhamento é uma prática de prevenção terciária.'
    ],
    correctAnswer: 2,
    explanation: "Os níveis de prevenção seguem a história natural da doença. A primária atua antes do adoecimento, sobre os fatores de risco; a secundária detecta e trata cedo a doença já instalada; a terciária reduz sequelas e incapacidades e promove reabilitação.\n\nNo caso, a aterosclerose coronariana poderia ter sido evitada ou retardada com dieta equilibrada e exercício praticado com regularidade, ou seja, com prevenção primária. Por isso a alternativa C classifica corretamente o nível.",
    commentary: "Reabilitação cardíaca como secundária (A): reabilitação é o exemplo típico de prevenção terciária, voltada a recuperar função e limitar sequelas.\n\nDiagnóstico precoce como terciária (B): identificar e tratar a doença em fase inicial é prevenção secundária.\n\nMonitoramento com consultas e exames como terciária (D): exames periódicos para detectar alterações cedo correspondem à prevenção secundária.",
    tip: "Primária evita a doença, secundária detecta cedo, terciária reabilita e limita sequelas.",
    reference: 'Epidemiologia básica / R. Bonita, R. Beaglehole, T. Kjellström; [tradução e revisão científica Juraci A. Cesar]. - 2.ed. - São Paulo, Santos. 2010. Disponivel em https://apps.who.int/iris/bitstream/handle/10665/43541/9788572888394_por.pdf;sequence=6',
    tags: ['prevenção', 'saúde cardiovascular']
  },
  {
    id: 'tp2023-106',
    module: 'Saúde Coletiva',
    text: 'Os estudos epidemiológicos podem se diferenciar em relação à unidade de análise (individual ou agregado), posicionamento do investigador (observacional ou de intervenção) e dimensão temporal (instantâneo/corte ou serial/longitudinal). Em relação aos tipos de estudos, assinale a alternativa correta seguindo, respectivamente, a sequência descrita no enunciado:',
    options: [
      '(A) Estudos caso-controle: agregado; de intervenção; longitudinal.',
      '(B) Ensaios clínicos: individual; de intervenção; longitudinal.',
      '(C) Estudos transversais: agregado; observacional; longitudinal.',
      '(D) Estudos de coorte: individual; observacional; instantâneo.'
    ],
    correctAnswer: 1,
    explanation: "No ensaio clínico, o pesquisador decide quem recebe a intervenção (estudo de intervenção ou experimental), analisa dados de cada participante (unidade individual) e acompanha os grupos ao longo do tempo até o desfecho (longitudinal). Por isso a alternativa B é a única com as três classificações corretas.\n\nVale fixar o quadro: ecológico é o desenho de unidade agregada; transversal é instantâneo; coorte, caso-controle e ensaio clínico envolvem a dimensão temporal; e só os ensaios são de intervenção.",
    commentary: "Caso-controle (A): usa dados individuais e é observacional, pois o pesquisador não atribui a exposição; não é agregado nem de intervenção.\n\nTransversal (C): é individual e observacional, mas instantâneo, já que exposição e desfecho são medidos no mesmo momento; não é longitudinal nem agregado.\n\nCoorte (D): é individual e observacional, mas longitudinal, pois acompanha expostos e não expostos ao longo do tempo até o desfecho.",
    tip: "Ensaio clínico = individual + intervenção + longitudinal. Ecológico é o agregado; transversal é o instantâneo.",
    reference: 'MEDRONHO, R.A (ed) Epidemiologia. 2 ed. São Paulo: Atheneu, 2011.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2023-107',
    module: 'Saúde Coletiva',
    text: 'Homem, 25 anos, relata perda de peso espontânea de oito quilos em três meses, acompanhada de tosse e febre diária. Para a confirmação da suspeita de tuberculose pulmonar, quais são os exames laboratoriais e/ou complementares mais facilmente indicados e realizados?',
    options: [
      '(A) Biópsia pulmonar com exame histopatológico; sorologia com pesquisa de IgM.',
      '(B) Broncoscopia com baciloscopia do lavado broncoalveolar; radiografia de tórax.',
      '(C) Teste rápido molecular de escarro; tomografia de tórax.',
      '(D) Baciloscopia; teste rápido molecular; radiografia de tórax.'
    ],
    correctAnswer: 3,
    explanation: "Perda de peso, tosse e febre diária em adulto jovem configuram suspeita de tuberculose pulmonar. Pelo Ministério da Saúde, a confirmação é feita no escarro: o teste rápido molecular (TRM-TB) é o exame preferencial, porque é mais sensível que a baciloscopia, dá resultado em poucas horas e ainda detecta resistência à rifampicina; a baciloscopia continua útil, inclusive no acompanhamento do tratamento.\n\nA radiografia de tórax complementa, mostrando a extensão da doença e lesões sugestivas, mas não confirma o diagnóstico sozinha. São exames disponíveis na rede pública e de fácil acesso, por isso a alternativa D.",
    commentary: "Biópsia pulmonar e sorologia IgM (A): a biópsia é invasiva e reservada a casos selecionados, e sorologia não é usada para diagnosticar tuberculose.\n\nBroncoscopia com lavado (B): é opção quando o paciente não consegue escarrar ou os exames de escarro são negativos com forte suspeita; não é a primeira escolha.\n\nTomografia de tórax (C): é mais cara e menos disponível; a radiografia simples já atende à avaliação inicial.",
    tip: "Suspeita de TB pulmonar: escarro para TRM-TB (e baciloscopia) + radiografia de tórax.",
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Manual de Recomendações para o Controle da Tuberculose no Brasil / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância das Doenças Transmissíveis. – Brasília: Ministério da Saúde, 2019. 364 p.: il. ISBN 978-85-334-2696-2.',
    tags: ['vigilância em saúde', 'infectologia']
  },
  {
    id: 'tp2023-108',
    module: 'Saúde Coletiva',
    text: 'Qual das seguintes características está associada à fase avançada da transição demográfica epidemiológica?',
    options: [
      '(A) Baixa prevalência de doenças crônicas não transmissíveis.',
      '(B) Predominância de doenças infecciosas e parasitárias.',
      '(C) Aumento da expectativa de vida.',
      '(D) Alta taxa de mortalidade infantil.'
    ],
    correctAnswer: 0,
    alsoAccepted: [2],
    explanation: "Gabarito oficial: A. Aqui no DEsimulados, a alternativa C também conta como certa, porque é a que está de acordo com o conceito.\n\nQuando a transição demográfica está avançada, natalidade e mortalidade já caíram, a população envelhece e a expectativa de vida aumenta. A transição epidemiológica acompanha esse processo: as doenças infecciosas e parasitárias perdem peso e passam a predominar as doenças crônicas não transmissíveis (cardiovasculares, câncer, diabetes).\n\nO próprio comentário da banca descreve esse aumento das doenças crônicas, mas conclui marcando a alternativa \"baixa prevalência de doenças crônicas\". Por isso a questão é polêmica: na prova vale a A; no estudo, guarde que a fase avançada traz mais expectativa de vida e mais doenças crônicas.",
    commentary: "Baixa prevalência de doenças crônicas (A): gabarito oficial, mas contraria o conceito; com o envelhecimento, as doenças crônicas não transmissíveis se tornam as principais causas de adoecimento e morte.\n\nPredomínio de doenças infecciosas e parasitárias (B): caracteriza as fases iniciais da transição.\n\nAlta mortalidade infantil (D): também é típica das fases iniciais; na fase avançada ela cai bastante.",
    alert: "Gabarito oficial discutível: a banca marcou A, mas o conceito aponta C. As duas contam como certas aqui.",
    tip: "Transição avançada: população mais velha, expectativa de vida maior e predomínio de doenças crônicas.",
    reference: 'Duarte Elisabeth Carmen, Barreto Sandhi Maria. Transição demográfica e epidemiológica: a Epidemiologia e Serviços de Saúde revisita e atualiza o tema. Epidemiol. Serv. Saúde [Internet]. 2012 Dez [citado 2023 Jun 29] ; 21( 4 ): 529-532. Oliveira AS. TRANSIÇÃO DEMOGRÁFICA, TRANSIÇÃO EPIDEMIOLÓGICA E ENVELHECIMENTO POPULACIONAL NO BRASIL. Hygeia [Internet];15(32):69-7. Goldani MZ, Mosca PRF, Portela AK, Silveira PP, Silva CH da. O impacto da transição demográfico-epidemiológica na saúde da criança e do adolescente do Brasil. Clin Biomed Res [Internet]. 27º de abril de 2012 ;32(1).',
    tags: ['saúde coletiva', 'demografia']
  },
  {
    id: 'tp2023-109',
    module: 'Saúde Coletiva',
    text: 'Mulher, 30 anos, tabagista (13 maços/ano), sexualmente ativa, comparece à Unidade de Saúde da Família (USF) apenas para solicitar um “check-up”. Seguindo as recomendações de evidência científica níveis A e B, quais procedimentos, em consulta e exames, deveriam ser realizados e solicitados?',
    options: [
      '(A) Hemograma completo, glicemia, colesterol total e frações, triglicerídeos, creatinina, ureia, TSH, urina tipo I e exame citopatológico do colo de útero.',
      '(B) Incentivo à cessação do tabagismo, exame citopatológico do colo de útero e verificação da pressão arterial.',
      '(C) Incentivo à cessação do tabagismo, solicitação de sorologia para HIV, sífilis, hepatites B e C, verificação da pressão arterial e exame citopatológico do colo de útero.',
      '(D) Não é necessário solicitar exames, pois a paciente está assintomática.'
    ],
    correctAnswer: 2,
    explanation: "Check-up em pessoa assintomática deve seguir rastreamentos com boa evidência (graus A e B), e não uma bateria de exames. Para esta mulher de 30 anos, tabagista e com vida sexual ativa, isso significa: abordar e apoiar a cessação do tabagismo, medir a pressão arterial, coletar o citopatológico do colo do útero (indicado dos 25 aos 64 anos) e oferecer testagem para infecções sexualmente transmissíveis, como HIV, sífilis e hepatites B e C.\n\nA alternativa C é a que reúne esse conjunto. O ponto prático é que exames gerais sem indicação não trazem benefício e podem gerar achados falso-positivos e intervenções desnecessárias.",
    commentary: "Bateria de exames laboratoriais (A): hemograma, função renal, TSH, urina tipo I e outros não têm indicação de rastreamento em mulher assintomática dessa idade sem outros riscos.\n\nSem sorologias (B): está quase certa, mas deixa de fora a testagem para HIV, sífilis e hepatites, indicada para quem tem vida sexual ativa.\n\nNão fazer nada (D): justamente por estar assintomática é que cabem as ações de rastreamento e de prevenção com benefício comprovado.",
    tip: "Check-up baseado em evidência: parar de fumar, aferir PA, citopatológico (25-64 anos) e testes para IST.",
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. Rastreamento / Ministério da Saúde, Secretaria de Atenção à Saúde, Departamento de Atenção Básica. – Brasília : Ministério da Saúde, 2010.',
    tags: ['rastreamento', 'saúde da mulher']
  },
  {
    id: 'tp2023-110',
    module: 'Saúde Coletiva',
    text: 'Um profissional de saúde que atua na Atenção Primária se depara com um dilema ético envolvendo a privacidade e o compartilhamento de informações de saúde de um paciente. O paciente em questão apresenta o diagnóstico de Botulismo e o profissional precisa decidir se deve divulgar essas informações a terceiros para proteger a saúde pública. O princípio ético mais relevante para orientar a decisão do profissional é:',
    options: [
      '(A) Respeito à autonomia',
      '(B) Beneficência',
      '(C) Não-maleficência',
      '(D) Justiça'
    ],
    correctAnswer: 3,
    explanation: "O botulismo é doença de notificação compulsória imediata. Notificar não depende do consentimento do paciente: é dever legal, e o Código de Ética Médica permite revelar informação sigilosa quando há dever legal ou motivo justo. O objetivo é proteger a coletividade, por exemplo identificando rapidamente o alimento contaminado que pode atingir outras pessoas.\n\nNa bioética, o princípio da justiça trata da distribuição equitativa de benefícios e riscos e do equilíbrio entre o interesse individual e o coletivo. Quando a privacidade de um paciente é limitada para proteger a saúde pública, é esse princípio que fundamenta a decisão, e por isso a resposta é D.",
    commentary: "Respeito à autonomia (A): sustenta o sigilo e o direito do paciente sobre suas informações, mas aqui ele cede diante do dever legal de notificar.\n\nBeneficência (B): orienta a fazer o bem ao próprio paciente; o foco da decisão descrita é a proteção de terceiros e da comunidade.\n\nNão maleficência (C): orienta a evitar dano ao paciente; não é o princípio que justifica compartilhar a informação para proteger a saúde coletiva.",
    tip: "Interesse coletivo x privacidade individual (notificação compulsória): pense no princípio da justiça.",
    reference: 'Código de Ética Médica: Resolução CFM no 2.217, de 27 de setembro de 2018, modificada pelas Resoluções CFM no 2.222/2018 e 2.226/2019 / Conselho Federal de Medicina – Brasília: Conselho Federal de Medicina, 2019. 108 p. 15. https://www.gov.br/saude/pt-br/composicao/svsa/notificacao-compulsoria/lista-nacional-de-notificacao-compulsoria-de-doencas-agravos-e-eventos-de-saude-publica',
    tags: ['ética médica', 'saúde pública']
  },
  {
    id: 'tp2023-111',
    module: 'Saúde Coletiva',
    text: 'A Estratégia Saúde da Família é reconhecida como fonte regular de cuidado às pessoas que vivem em determinado território, a qual deve ser acessada ao longo do tempo, independentemente da existência de enfermidades. Para tanto, é essencial o estabelecimento de vínculo nas relações interpessoais entre profissional de saúde e usuário, as quais podem proporcionar maior efetividade e eficiência das intervenções em saúde. Qual o atributo essencial da Atenção Primária que favorece a aproximação da unidade de saúde das famílias e possibilita o estabelecimento de vínculos entre a equipe e os usuários?',
    options: [
      '(A) Integralidade',
      '(B) Longitudinalidade',
      '(C) Coordenação do cuidado',
      '(D) Acesso de primeiro contato'
    ],
    correctAnswer: 1,
    explanation: "Longitudinalidade é o atributo da Atenção Primária que corresponde ao acompanhamento da mesma pessoa pela mesma equipe ao longo do tempo, adoecendo ou não. É essa relação contínua que cria vínculo e confiança entre equipe e usuário e torna as intervenções mais efetivas.\n\nO enunciado descreve exatamente isso: a Estratégia Saúde da Família como fonte regular de cuidado, procurada ao longo do tempo independentemente de doença, com vínculo interpessoal. Por isso a resposta é B.",
    commentary: "Integralidade (A): significa oferecer ou garantir todo o conjunto de ações de que a pessoa precisa (promoção, prevenção, tratamento e reabilitação), reconhecendo também as necessidades além das biológicas.\n\nCoordenação do cuidado (C): é a capacidade da APS de organizar e integrar o percurso do usuário pelos diferentes serviços da rede.\n\nAcesso de primeiro contato (D): é a APS como porta de entrada preferencial a cada novo problema de saúde.",
    tip: "Vínculo ao longo do tempo, doente ou não = longitudinalidade.",
    reference: 'OLIVEIRA, M. A. C.; PEREIRA, I.C. Atributos essenciais da Atenção Primária e a Estratégia Saúde da Família. Rev Bras Enferm.66(esp):158-64; 2013. Portaria 2436/17 PNAB- Política Nacional de Atenção Básica',
    tags: ['APS', 'políticas de saúde']
  },
  {
    id: 'tp2023-112',
    module: 'Saúde Coletiva',
    text: 'A febre maculosa é uma doença infecciosa transmitida por carrapatos, que pode apresentar graves manifestações clínicas, inclusive podendo levar à morte. Os níveis de prevenção da doença incluem as medidas primárias, secundárias e terciárias, além da prevenção quaternária, que tem como foco evitar a iatrogenia e o excesso de medicalização. A partir do conceito epidemiológico de história natural da doença, qual é o principal objetivo da prevenção quaternária na história natural da febre maculosa?',
    options: [
      '(A) Evitar intervenções desnecessárias aos afetados pela febre maculosa.',
      '(B) Identificar e tratar precocemente os casos de febre maculosa.',
      '(C) Reduzir a carga da doença na população afetada pela febre maculosa.',
      '(D) Evitar a exposição do hospedeiro ao vetor transmissor da doença.'
    ],
    correctAnswer: 0,
    explanation: "Prevenção quaternária é o conjunto de ações que protege a pessoa do excesso de intervenções médicas: exames, tratamentos e procedimentos desnecessários, que trazem risco sem benefício. O foco é evitar iatrogenia e medicalização excessiva.\n\nNa febre maculosa, isso significa, por exemplo, não submeter o paciente a exames e procedimentos sem indicação, mantendo o cuidado necessário, como o início precoce da doxiciclina na suspeita. Por isso a resposta é A.",
    commentary: "Identificar e tratar precocemente (B): é prevenção secundária, que atua na doença já instalada para mudar sua evolução.\n\nReduzir a carga da doença na população (C): é objetivo geral das ações de controle (primárias, secundárias e terciárias), não o foco específico da quaternária.\n\nEvitar a exposição ao vetor (D): impede a infecção, logo é prevenção primária (proteção específica).",
    tip: "Prevenção quaternária = proteger o paciente do excesso de medicina (iatrogenia e intervenções desnecessárias).",
    reference: 'ALMEIDA, L. M. Da prevenção primordial à prevenção quaternária. Revista Portuguesa de Saúde Pública, Lisboa, vol. 23, 1, p. 91-96, 2005. LEAVELL, H.; CLARK, E. G. Preventive medicine for the doctor in his community NY: Macgraw Hill, 1965.',
    tags: ['prevenção', 'saúde coletiva']
  },
  {
    id: 'tp2023-113',
    module: 'Saúde Coletiva',
    text: 'A Vigilância em Saúde engloba ações de atenção e promoção de saúde e de prevenção de doenças com atuação em 4 frentes: Vigilância Epidemiológica, Vigilância Sanitária, Vigilância Ambiental e Saúde do Trabalhador. Embora possa haver alguma sobreposição de funções, na maioria das situações existe uma competência mais ligada a uma determinada área. A alternativa que contempla a associação mais específica entre a ação realizada e sua respectiva área de atuação dentro da Vigilância em Saúde é:',
    options: [
      '(A) O controle dos vetores (capivaras e carrapatos) em fazenda (local de eventos) na cidade de Campinas (SP), associada a casos de febre maculosa - Saúde do Trabalhador.',
      '(B) A investigação de casos e óbitos de Dengue em Presidente Prudente, que registrou o maior número de casos no estado de São Paulo - Vigilância Ambiental.',
      '(C) A fiscalização e aplicação de multas em eventos com aglomeração por todo o país na pandemia de Covid-19 - Vigilância Sanitária.',
      '(D) A cobrança do uso de equipamentos de proteção individual para equipes de saúde no Brasil na pandemia de Covid-19 - Vigilância Epidemiológica.'
    ],
    correctAnswer: 2,
    explanation: "A Vigilância Sanitária é a área que regula e fiscaliza produtos, serviços e ambientes de interesse para a saúde, com poder de polícia administrativa: pode inspecionar, interditar e multar. Fiscalizar eventos com aglomeração e aplicar multas durante a pandemia de Covid-19 é, portanto, uma ação típica dela.\n\nPara não confundir as quatro frentes: epidemiológica investiga casos, óbitos e surtos; ambiental cuida de fatores do meio, como água, solo e vetores; saúde do trabalhador lida com os riscos ligados ao trabalho.",
    commentary: "Controle de capivaras e carrapatos como Saúde do Trabalhador (A): controle de vetores e reservatórios no ambiente é atribuição da Vigilância Ambiental.\n\nInvestigação de casos e óbitos de dengue como Ambiental (B): investigar casos e óbitos é função da Vigilância Epidemiológica (o controle do mosquito é que seria ambiental).\n\nCobrança de EPI para equipes de saúde como Epidemiológica (D): proteger profissionais dos riscos do próprio trabalho é tarefa da Saúde do Trabalhador.",
    tip: "Fiscalizar e multar = Sanitária. Investigar casos = Epidemiológica. Vetor e meio = Ambiental. Risco no trabalho = Saúde do Trabalhador.",
    reference: 'BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Articulação Estratégica de Vigilância em Saúde. Guia de Vigilância em Saúde [recurso eletrônico]. 5. ed. rev. e atual. – Brasília: Ministério da Saúde, 2022. 1.126 p. : il. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_5ed_rev_atual.pdf',
    tags: ['vigilância em saúde']
  },
  {
    id: 'tp2023-114',
    module: 'Saúde Coletiva',
    text: 'A Medicina de Família e Comunidade, como especialidade médica, começou no Brasil no final dos anos 70, em meio ao desgaste de um modelo médico curativo, voltado para as subespecialidades e, embora inicialmente marginalizada, ganhou espaço e hoje é a segunda especialidade médica que mais aumentou o número de especialistas nos últimos 10 anos (aumento de 246%). São características do trabalho do Médico de Saúde da Família e Comunidade:',
    options: [
      '(A) A relação clínica de longa duração, a medicina centrada na pessoa e a abordagem integral.',
      '(B) O manejo racional e eficiente dos recursos de saúde, evitando-se o encaminhamento do usuário aos níveis especializados de saúde, uma vez que, a partir daí, a referência assumiria a coordenação do cuidado.',
      '(C) O cuidado biologicista, individual e reativo voltado para as condições agudas do adoecimento.',
      '(D) O cuidado de populações amplas, em territórios não delimitados e o uso de tecnologias de baixa complexidade e alta densidade para resolver os problemas de saúde.'
    ],
    correctAnswer: 0,
    explanation: "A prática do especialista em medicina de família e comunidade se apoia em alguns pilares: vínculo duradouro com as pessoas que acompanha (longitudinalidade), atenção centrada na pessoa, e não apenas na doença, e abordagem integral, que considera aspectos biológicos, psicológicos, familiares e sociais.\n\nA alternativa A reúne esses três elementos. Ela se opõe ao modelo curativo e fragmentado que a especialidade surgiu para superar.",
    commentary: "Evitar encaminhar porque o especialista assumiria a coordenação (B): o uso racional de recursos é desejável, mas a coordenação do cuidado continua com a equipe de saúde da família mesmo quando o usuário é encaminhado.\n\nCuidado biologicista, individual e reativo (C): descreve o modelo hospitalocêntrico e curativo, oposto ao da medicina de família.\n\nTerritório não delimitado e tecnologia de baixa complexidade e alta densidade (D): a equipe cuida de população adscrita em território definido, e a APS é descrita como de baixa densidade tecnológica, mas de alta complexidade de saberes; a alternativa inverte isso.",
    tip: "Medicina de família: vínculo longo, centrada na pessoa, integral, com população e território definidos.",
    reference: 'GUSSO, G; LOPES, JMC; DIAS, LC. organizadores. Tratado de Medicina de Família e Comunidade: princípios, formação e prática. 2ª ed., Porto alegre: Artmed, 2019.',
    tags: ['MFC', 'APS']
  },
  {
    id: 'tp2023-115',
    module: 'Saúde Coletiva',
    text: 'A hanseníase é uma doença crônica, transmissível, que ainda se constitui num problema de saúde pública no Brasil. O Boletim Epidemiológico de 2022 mostrou que no ano de 2020 houve uma redução maior da taxa de detecção geral da doença no país por 100.000 habitantes, o que pode estar relacionado aos efeitos da sobrecarga dos serviços de saúde, às restrições de mobilidade e ao receio de adquirir o coronavírus ao frequentar serviços de saúde na pandemia de Covid-19. A narrativa faz referência específica à seguinte medida de Saúde Coletiva:',
    options: [
      '(A) Prevalência',
      '(B) Incidência',
      '(C) Taxa de ataque',
      '(D) Taxa de letalidade'
    ],
    correctAnswer: 1,
    explanation: "A taxa de detecção da hanseníase conta os casos novos diagnosticados em um período por 100 mil habitantes. Medir casos novos em relação à população no período é o conceito de incidência; por isso a queda descrita em 2020 se refere a ela.\n\nO ponto prático: na hanseníase, a detecção depende de os serviços encontrarem os casos. A queda durante a pandemia reflete, em boa parte, menos diagnóstico (subnotificação), e não necessariamente menos doença circulando.",
    commentary: "Prevalência (A): considera todos os casos existentes (novos e antigos) em um momento, e não apenas os recém-diagnosticados.\n\nTaxa de ataque (C): é uma incidência aplicada a surtos e eventos agudos, em população exposta por tempo curto; não combina com uma doença crônica de evolução lenta.\n\nTaxa de letalidade (D): mede a proporção de doentes que morrem pela doença, ou seja, sua gravidade.",
    tip: "Taxa de detecção de casos novos = incidência. Todos os casos existentes = prevalência.",
    reference: 'BRASIL. Ministério da Saúde. Departamento de Doenças de Condições Crônicas e Infecções Sexualmente Transmissíveis, da Secretaria de Vigilância em Saúde, do Ministério da Saúde (DCCI/SVS/ MS). Boletim Epidemiológico de Hanseníase. nº especial. Jan. 2022. ROUQUAYROL, M.Z.; ALMEIDA FILHO, N.; LUZ, F.A. Epidemiologia e Saúde. Ed. Artes Médicas: 7ª ed. 2013.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2023-116',
    module: 'Saúde Coletiva',
    text: 'Um estudo multicêntrico foi conduzido em dois países diferentes (país A e país B) para avaliar a eficácia do exame de Antígeno Prostático Específico (PSA) no diagnóstico do câncer de próstata. Foram incluídos 800 homens em cada país, todos com idades entre 50 e 75 anos e suspeita clínica de câncer de próstata. Todos os pacientes realizaram o exame de PSA e biópsias da próstata para o diagnóstico final. No país A, dos 800 homens, 80 foram diagnosticados com câncer de próstata após a biópsia, sendo este o teste padrão ouro. O exame de PSA teve uma sensibilidade de 85% e uma especificidade de 70% neste país. No país B, dos 800 homens, 160 foram diagnosticados com câncer de próstata após a biópsia. No entanto, o exame de PSA demonstrou sensibilidade de 70% e especificidade de 85% neste país. Os valores preditivos negativos (VPN) do exame de PSA nos países A e B são, respectivamente:',
    options: [
      '(A) 23,94% e 53,84%',
      '(B) 71,50% e 82,00%',
      '(C) 76,05% e 46,15%',
      '(D) 97,67% e 91,89%'
    ],
    correctAnswer: 3,
    explanation: "O VPN é a probabilidade de não ter a doença quando o teste é negativo: verdadeiros negativos divididos por todos os negativos (verdadeiros negativos mais falsos negativos).\n\nPaís A: 80 doentes e 720 sadios. Verdadeiros negativos = 0,70 × 720 = 504; falsos negativos = 0,15 × 80 = 12. VPN = 504 / 516 = 97,67%.\n\nPaís B: 160 doentes e 640 sadios. Verdadeiros negativos = 0,85 × 640 = 544; falsos negativos = 0,30 × 160 = 48. VPN = 544 / 592 = 91,89%. Repare que, mesmo com especificidade maior, o VPN caiu em B, porque a prevalência dobrou: quanto mais comum a doença, menor o valor preditivo negativo.",
    commentary: "23,94% e 53,84% (A): são os valores preditivos positivos (68/284 em A e 112/208 em B).\n\n71,50% e 82,00% (B): correspondem à acurácia global do teste em cada país, ou seja, acertos totais sobre 800.\n\n76,05% e 46,15% (C): são o complemento do VPP (proporção de falsos positivos entre os positivos), não o VPN.",
    tip: "VPN = VN / (VN + FN). Prevalência sobe, VPN cai e VPP sobe.",
    reference: 'MEDRONHO, R. A. et al. Epidemiologia. 2. ed. São Paulo: Atheneu, 2010.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2023-117',
    module: 'Saúde Coletiva',
    text: 'Em um município existiam 100 casos de tuberculose pulmonar no início de 2022. No decorrer do ano foram diagnosticados 15 novos casos. A população total desse município é de 15.350 pessoas. Nesse mesmo ano morreram 15 pessoas por tuberculose. O coeficiente de letalidade da tuberculose nesse município, no ano de 2022, é:',
    options: [
      '(A) 13% de mortes por tuberculose em relação aos pacientes diagnosticados pela doença no mesmo período.',
      '(B) 1 óbito por 100.000 habitantes.',
      '(C) 749 casos por 100.000 habitantes.',
      '(D) 53% de mortes por tuberculose em relação aos pacientes diagnosticados pela doença no mesmo período.'
    ],
    correctAnswer: 0,
    explanation: "Letalidade mede a gravidade da doença: é a proporção de doentes que morreram por ela. O denominador são os doentes, não a população.\n\nNo município, havia 100 casos no início do ano e surgiram 15 novos, totalizando 115 pessoas com tuberculose em 2022. Foram 15 óbitos por tuberculose. Letalidade = 15 / 115 × 100 ≈ 13%.",
    commentary: "1 óbito por 100.000 habitantes (B): tenta expressar mortalidade (óbitos sobre a população), mas a conta está errada: 15 / 15.350 dá cerca de 98 por 100 mil; e mortalidade não é letalidade.\n\n749 casos por 100.000 habitantes (C): é a prevalência no período (115 / 15.350), uma medida de frequência da doença, não de óbitos.\n\n53% (D): não corresponde a nenhuma divisão correta dos dados; o denominador da letalidade é o total de doentes (115).",
    tip: "Letalidade = óbitos pela doença / doentes. Mortalidade = óbitos / população.",
    reference: 'ROUQUAYROL, Maria Zélia; SILVA, Marcelo Gurgel Carlos da. Epidemiologia & saúde. 7.ed. Rio de Janeiro: Medbook, 2013. Capítulo: Medida da Saúde coletiva, páginas 108 a 201.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2023-118',
    module: 'Saúde Coletiva',
    text: 'A educação popular em saúde é considerada importante para ampliação do conhecimento e práticas relacionadas aos comportamentos saudáveis dos indivíduos e suas ações contribuem para o controle de doenças, prevenção e promoção da saúde. Em relação à educação popular em saúde, é correto afirmar que:',
    options: [
      '(A) Os valores e crenças da população não são relevantes, pois a educação popular em saúde deve ser baseada em informações técnicas e científicas.',
      '(B) Parte da concepção de que as pessoas têm experiências e saberes acumulados, por isso valorizar o universo cultural e as formas que as comunidades se organizam é fundamental para o processo de transformação da realidade.',
      '(C) Baseia-se em transmitir o saber biomédico para a população centrado em patologias individuais.',
      '(D) O objetivo da educação popular em saúde é capacitar os profissionais da equipe de saúde sobre os problemas e doenças mais prevalentes da população.'
    ],
    correctAnswer: 1,
    explanation: "A educação popular em saúde, inspirada em Paulo Freire, parte do princípio de que a população tem saberes e experiências próprios. O conhecimento é construído em diálogo entre profissionais e comunidade, valorizando a cultura local e as formas de organização dos grupos, com o objetivo de transformar a realidade.\n\nÉ uma proposta oposta à simples transmissão de informação técnica de cima para baixo, por isso a alternativa B.",
    commentary: "Valores e crenças irrelevantes (A): ao contrário, eles são o ponto de partida do processo educativo.\n\nTransmitir o saber biomédico centrado em doenças (C): descreve o modelo tradicional, vertical, que a educação popular critica.\n\nCapacitar os profissionais da equipe (D): isso é educação permanente; a educação popular tem a comunidade como protagonista.",
    tip: "Educação popular em saúde = diálogo e saberes da comunidade (Paulo Freire), não palestra vertical.",
    reference: 'GUSSO, Gustavo; LOPES, José M C.; DIAS, Lêda C. Tratado de medicina de família e comunidade - 2 volumes: princípios, formation e prática. Porto Alegre : Artmed, 2019',
    tags: ['saúde coletiva', 'promoção da saúde']
  },
  {
    id: 'tp2023-119',
    module: 'Saúde Coletiva',
    text: 'Os indicadores de saúde são parâmetros utilizados com a finalidade de avaliar, sob o ponto de vista sanitário, a higidez de agregados humanos, bem como de fornecer subsídios aos planejamentos de saúde. A respeito desses indicadores, é correto afirmar que:',
    options: [
      '(A) A maior letalidade da doença e o aumento da taxa de cura da doença são fatores que podem influenciar aumentando a taxa de prevalência de uma doença.',
      '(B) O coeficiente de incidência mede o risco da doença e a velocidade com que os casos antigos são agregados.',
      '(C) A razão de mortalidade materna está associada à qualidade de assistência ao pré-natal, parto e puerpério, sendo que o numerador do indicador corresponde ao número de óbitos de mulheres em idade fértil.',
      '(D) O coeficiente de mortalidade infantil estima o risco de um nascido vivo morrer durante o seu primeiro ano de vida e reflete o nível de saúde e as condições de vida da população.'
    ],
    correctAnswer: 3,
    explanation: "O coeficiente de mortalidade infantil é o número de óbitos de menores de 1 ano dividido pelo número de nascidos vivos no mesmo período (geralmente por mil). Estima o risco de um nascido vivo morrer antes de completar 1 ano.\n\nPor depender de saneamento, nutrição, renda, escolaridade materna e acesso a serviços, é considerado um dos melhores indicadores do nível de saúde e das condições de vida de uma população. Por isso a alternativa D está correta.",
    commentary: "Letalidade e cura aumentando a prevalência (A): os dois reduzem a prevalência, porque retiram pessoas do grupo de doentes (por morte ou cura).\n\nIncidência agregando casos antigos (B): a incidência conta apenas casos novos; casos antigos entram na prevalência.\n\nRazão de mortalidade materna com óbitos de mulheres em idade fértil (C): o numerador são as mortes por causas maternas (gestação, parto e puerpério), e o denominador, os nascidos vivos.",
    tip: "Mortalidade infantil = óbitos < 1 ano / nascidos vivos. Retrata condições de vida.",
    reference: 'ROUQUAYROL, M. Z.; GURGEL, M. Epidemiologia & saúde. 7. ed. Rio de Janeiro: Medbook, 2013.',
    tags: ['epidemiologia', 'saúde coletiva']
  },
  {
    id: 'tp2023-120',
    module: 'Saúde Coletiva',
    text: 'A saúde ambiental e do trabalhador é um campo de estudo que investiga as relações entre a produção industrial, o ambiente de trabalho e os impactos na saúde das pessoas. Nesse contexto, a epidemiologia desempenha um papel importante na compreensão dos riscos e na promoção de medidas preventivas. Qual dos seguintes cenários ilustra um exemplo de exposição ocupacional relacionada à saúde ambiental e do trabalhador?',
    options: [
      '(A) Consumo de alimentos contaminados por pesticidas.',
      '(B) Exposição à radiação ultravioleta (UV) durante a prática de esportes ao ar livre.',
      '(C) Inalação de gases tóxicos provenientes da queima de combustíveis fósseis.',
      '(D) Uso inadequado de equipamentos de proteção individual em uma construção civil.'
    ],
    correctAnswer: 2,
    explanation: "Saúde ambiental e do trabalhador estuda como o processo produtivo e os ambientes afetam a saúde. A banca considera que a inalação de gases tóxicos da queima de combustíveis fósseis representa esse tipo de exposição: um agente químico gerado pela produção e pelo uso de energia, ao qual muitos trabalhadores estão expostos (por exemplo, em indústrias, oficinas, garagens e no trânsito), com risco de doenças respiratórias, cardiovasculares e câncer.\n\nO raciocínio cobrado é distinguir uma exposição a agente nocivo, ligada ao ambiente e ao trabalho, de situações de lazer, de consumo ou de comportamento.",
    commentary: "Alimentos com pesticidas (A): descreve a exposição do consumidor, pela dieta, e não a de quem trabalha com o agrotóxico.\n\nRadiação UV no esporte (B): é exposição durante o lazer, sem relação com a atividade de trabalho.\n\nUso inadequado de EPI na construção civil (D): a banca o trata como questão de segurança do trabalho (conduta de proteção), e não como uma exposição a agente ambiental.",
    tip: "Exposição ocupacional e ambiental: agente nocivo (químico, físico, biológico) ligado ao processo produtivo.",
    reference: 'Peres, Frederico. Epidemiologia e Saúde. 2ª edição. Atheneu, 2017. Gomes, Maria Angélica de Salles. Saúde Ambiental e Trabalho: Guia para Estudo em Saúde Coletiva. Editora Fiocruz, 2015.',
    tags: ['saúde do trabalhador', 'saúde ambiental']
  },
  {
    id: 'tp2022-101',
    module: 'Saúde Coletiva',
    text: 'As arboviroses apresentam sintomas semelhantes. As manifestações clínicas/laboratoriais mais relevantes da dengue são:',
    options: [
      '(A) Dor retrorbital, sangramentos e choque; linfopenia.',
      '(B) Febre e artralgia; linfopenia e trombocitose.',
      '(C) Mialgia, conjuntivite e artralgia; trombocitopenia.',
      '(D) Dor retrorbital; leucopenia, neutropenia e trombocitopenia.'
    ],
    correctAnswer: 3,
    explanation: "Dengue, chikungunya e zika têm o mesmo vetor (Aedes aegypti) e começam de forma parecida, por isso o médico se apoia nos achados que mais pesam para cada uma. Na dengue, o destaque clínico é febre alta com dor retro-orbitária intensa, mialgia e cefaleia.\n\nNo hemograma, o padrão típico da dengue é leucopenia com neutropenia e plaquetopenia, que se acentua na fase crítica (entre o 3º e o 7º dia). O hematócrito em elevação indica extravasamento de plasma e é sinal de alarme. Já na chikungunya predominam artralgia intensa e incapacitante, e na zika, exantema pruriginoso e hiperemia conjuntival.",
    commentary: "Sangramentos, choque e linfopenia (A): sangramento e choque marcam as formas graves, não o quadro mais frequente; e o leucograma da dengue não se caracteriza por linfopenia.\n\nArtralgia com trombocitose (B): artralgia intensa sugere chikungunya, e a dengue cursa com plaquetopenia, não com aumento de plaquetas.\n\nMialgia, conjuntivite e artralgia (C): conjuntivite (hiperemia conjuntival) é mais típica da zika, e artralgia importante, da chikungunya; esse conjunto não é o que diferencia a dengue.",
    tip: "Dengue: dor retro-orbitária + leucopenia, neutropenia e plaquetopenia. Chikungunya: artralgia. Zika: exantema e olho vermelho.",
    reference: 'Brasil. Ministério da Saúde. Dengue: diagnóstico e manejo clínico. 5. ed. 2016.',
    tags: ['infectologia', 'vigilância epidemiológica']
  },
  {
    id: 'tp2022-102',
    module: 'Saúde Coletiva',
    text: 'Sobre as epidemias de fonte comum (difundidas pelo mesmo veículo como água ou alimentos), observa-se:',
    options: [
      '(A) Explosividade de surto.',
      '(B) Casos dispersos em diferentes áreas geográficas.',
      '(C) Ocorrência de casos secundários.',
      '(D) Propagação da doença de pessoa a pessoa.'
    ],
    correctAnswer: 0,
    explanation: "Na epidemia de fonte comum, muitas pessoas se expõem ao mesmo veículo contaminado (água, alimento) em um mesmo local e período. Por isso os casos surgem de uma vez, em pouco tempo, concentrados geograficamente: a curva epidêmica sobe e desce rapidamente, o que se chama explosividade.\n\nComo a doença não depende da passagem de uma pessoa para outra, não há cadeias de casos secundários. Quando a fonte é retirada (por exemplo, o alimento descartado ou a água tratada), o surto termina. Um exemplo clássico é a intoxicação alimentar depois de uma festa.",
    commentary: "Casos dispersos em diferentes áreas (B): a fonte comum costuma concentrar os casos em torno do local de exposição; dispersão ampla é mais característica das epidemias propagadas.\n\nCasos secundários (C): surgem quando há transmissão entre pessoas, o que define a epidemia progressiva ou propagada, não a de fonte comum.\n\nPropagação pessoa a pessoa (D): é justamente o mecanismo que falta na epidemia de fonte comum; a transmissão vem do veículo compartilhado.",
    tip: "Fonte comum (água, alimento): surto explosivo e localizado, sem casos secundários. Pessoa a pessoa: epidemia propagada, curva lenta.",
    reference: 'Rouquayrol, M. Z. Epidemiologia & Saúde. 7. ed. 2013.',
    tags: ['epidemiologia']
  },
  {
    id: 'tp2022-103',
    module: 'Saúde Coletiva',
    text: 'Gestante atendida em UBS após crise convulsiva recebe medicação, cadastro no pré-natal e encaminhamento ao neurologista da rede municipal. Quais princípios doutrinários do SUS foram atendidos?',
    options: [
      '(A) Universalidade e Regionalização.',
      '(B) Intersetorialidade e Equidade.',
      '(C) Universalidade e Integralidade.',
      '(D) Integralidade e Territorialização.'
    ],
    correctAnswer: 2,
    explanation: 'O acesso à UBS (Universalidade) e o cuidado que vai da atenção primária à especializada (Integralidade) exemplificam esses princípios.',
    commentary: 'A universalidade garante o acesso. A integralidade é vista no atendimento que considera todas as necessidades da paciente, articulando diferentes níveis de complexidade.',
    reference: 'Lei nº 8.080/1990.',
    tags: ['SUS', 'políticas de saúde']
  },
  {
    id: 'tp2022-104',
    module: 'Saúde Coletiva',
    text: 'A Constituição Federal de 1988 torna oficial o conteúdo da Reforma Sanitária Brasileira e estabelece:',
    options: [
      '(A) Mecanismos centralizadores de recursos.',
      '(B) O Sistema Único de Saúde (SUS).',
      '(C) O Ministério da Saúde.',
      '(D) As Secretarias Municipais de Saúde.'
    ],
    correctAnswer: 1,
    explanation: "As propostas da Reforma Sanitária, consolidadas na 8ª Conferência Nacional de Saúde (1986), entraram na Constituição de 1988, que declarou a saúde direito de todos e dever do Estado e instituiu o SUS.\n\nO SUS foi definido como sistema público, organizado em rede regionalizada e hierarquizada, descentralizado, com um único comando em cada nível (federal, estadual e municipal), atendimento integral e participação da comunidade. Seu funcionamento foi regulamentado depois pelas Leis 8.080 e 8.142, de 1990.",
    commentary: "Mecanismos centralizadores de recursos (A): a Reforma Sanitária defendia o contrário, a descentralização, com transferência de responsabilidades e recursos para estados e municípios.\n\nMinistério da Saúde (C): já existia desde 1953, bem antes da Constituição de 1988.\n\nSecretarias Municipais de Saúde (D): também são anteriores e não foram criadas pela Constituição; o que ela fez foi fortalecer o papel dos municípios dentro do SUS.",
    tip: "Constituição de 1988 criou o SUS; Leis 8.080 e 8.142 de 1990 o regulamentaram.",
    reference: 'Constituição Federal de 1988.',
    tags: ['SUS', 'história da saúde']
  },
  {
    id: 'tp2022-105',
    module: 'Saúde Coletiva',
    text: 'Sobre a classificação dos tipos de prevenção, assinale a alternativa correta:',
    options: [
      '(A) A prevenção primária envolve ações de promoção de saúde e proteção específica (ex: vacinação).',
      '(B) Promoção de saúde via alimentação e exercícios são políticas de prevenção secundária.',
      '(C) O rastreamento de novos casos em período pré-clínico é prevenção primária.',
      '(D) A prevenção secundária foca na reabilitação de complicações já instaladas.'
    ],
    correctAnswer: 0,
    explanation: "Os níveis de prevenção acompanham a história natural da doença:\n\n• Primária: antes de a doença existir. Inclui promoção da saúde (ações gerais, como alimentação adequada, atividade física, saúde mental) e proteção específica (dirigida a uma doença, como vacina).\n• Secundária: doença já instalada, em fase inicial ou pré-clínica. Rastreamento e diagnóstico e tratamento precoces.\n• Terciária: doença estabelecida, para limitar sequelas e reabilitar.\n• Quaternária: evitar danos causados por excesso de intervenções médicas.\n\nPor isso a vacinação é exemplo de prevenção primária por proteção específica.",
    commentary: "Alimentação e exercício como prevenção secundária (B): são ações de promoção da saúde, que pertencem à prevenção primária.\n\nRastreamento no período pré-clínico como prevenção primária (C): rastrear é buscar a doença já presente antes dos sintomas, o que define a prevenção secundária.\n\nReabilitação de complicações como prevenção secundária (D): reabilitar após infarto ou AVC é prevenção terciária.",
    tip: "Primária: evita a doença (vacina). Secundária: acha cedo (rastreio). Terciária: reabilita. Quaternária: evita excesso médico.",
    reference: 'Rouquayrol, M. Z. Epidemiologia & Saúde. 8. ed. 2018.',
    tags: ['prevenção', 'saúde pública']
  },
  {
    id: 'tp2022-106',
    module: 'Saúde Coletiva',
    text: 'Adolescente com DM tipo I é atendido. O médico foca apenas em hábitos e insulina, ignorando escola, vida sexual e relação familiar. Qual diretriz do SUS foi negligenciada?',
    options: [
      '(A) Universalidade.',
      '(B) Igualdade.',
      '(C) Integralidade.',
      '(D) Equidade.'
    ],
    correctAnswer: 2,
    explanation: "A integralidade, prevista na Lei 8.080/1990, significa ver a pessoa como um todo e oferecer o conjunto de ações de promoção, prevenção, tratamento e reabilitação que o caso exige, em todos os níveis de atenção.\n\nO médico tratou só o diabetes (dieta, exercício e insulina) e deixou de lado aspectos da vida do adolescente que interferem diretamente na saúde e no próprio controle da doença: escola, sexualidade e relações familiares. Essa visão fragmentada fere o princípio da integralidade.",
    commentary: "Universalidade (A): é o direito de acesso de todas as pessoas aos serviços; o adolescente foi atendido, então o acesso foi garantido.\n\nIgualdade (B): é a assistência sem preconceitos ou privilégios de qualquer tipo; nada indica discriminação no atendimento.\n\nEquidade (D): é dar mais a quem mais precisa, conforme as necessidades; o problema do caso não é distribuição de recursos, e sim a abordagem incompleta da pessoa.",
    tip: "Olhar a pessoa inteira, não só a doença = integralidade. Acesso para todos = universalidade. Mais para quem precisa mais = equidade.",
    reference: 'Lei nº 8.080/1990.',
    tags: ['SUS', 'atenção primária']
  },
  {
    id: 'tp2022-107',
    module: 'Saúde Coletiva',
    text: 'Idosa de 90 anos, analfabeta, diabética com dificuldade de locomoção. Mora com sobrinha que trabalha o dia todo. Qual o Plano Terapêutico Singular (PTS) mais seguro?',
    options: [
      '(A) Insulina à noite com a sobrinha; exercícios em casa; metas glicêmicas mais flexíveis.',
      '(B) Insulina de manhã com a sobrinha; dieta restritiva; metas glicêmicas rigorosas.',
      '(C) Insulina antes do almoço com a vizinha; evitar atividade física devido a risco de queda.',
      '(D) Insulina à noite com a sobrinha; dieta restritiva; metas glicêmicas restritivas.'
    ],
    correctAnswer: 0,
    explanation: 'Em idosos frágeis, as metas devem ser flexíveis para evitar hipoglicemia e o tratamento deve ser adaptado à rede de apoio.',
    commentary: 'Flexibilizar metas e adaptar o horário da medicação à presença do cuidador são estratégias de segurança e adesão para o paciente idoso.',
    reference: 'Diretrizes SBD 2019-2020.',
    tags: ['geriatria', 'saúde da família']
  },
  {
    id: 'tp2022-108',
    module: 'Saúde Coletiva',
    text: 'Homem de 21 anos em situação de rua, usuário de crack, com tosse há 2 semanas, perda de peso e febre vespertina. Qual o manejo adequado?',
    options: [
      '(A) Aguardar baciloscopia e exigir endereço fixo antes de tratar.',
      '(B) Tratar imediatamente e exigir moradia em albergue.',
      '(C) Exigir abstinência total de drogas para iniciar o tratamento supervisionado.',
      '(D) Solicitar baciloscopia/TRM-TB, cultura, raio-X e testes rápidos para HIV/Sífilis/Hepatites.'
    ],
    correctAnswer: 3,
    explanation: 'A busca ativa e exames completos (incluindo ISTs) são prioridade em populações vulneráveis com sintomatologia respiratória.',
    commentary: 'Não se deve impor barreiras (como endereço ou abstinência) para o cuidado. O foco é o diagnóstico rápido e a redução de danos.',
    reference: 'Manual de Recomendações para o Controle da Tuberculose no Brasil, 2019.',
    tags: ['vulnerabilidade social', 'tuberculose', 'IST']
  },
  {
    id: 'tp2022-109',
    module: 'Saúde Coletiva',
    text: 'Gestante de 32 semanas com HIV positivo recém-descoberto. CV desconhecida. Sobre as recomendações do Ministério da Saúde para o parto:',
    options: [
      '(A) Parto natural induzido na 34ª semana.',
      '(B) Cesárea eletiva após a 38ª semana e AZT injetável 3h antes.',
      '(C) Parto induzido apenas se ultrapassar a 40ª semana com AZT injetável.',
      '(D) Cesárea eletiva após 34 semanas.'
    ],
    correctAnswer: 1,
    explanation: "Gestante com HIV descoberto com 32 semanas e sem carga viral: a via de parto é decidida pela carga viral a partir de 34 semanas. Se nesse momento ela não é conhecida, ou passa de 1.000 cópias/mL, o Ministério da Saúde indica cesárea eletiva a partir de 38 semanas, antes do início do trabalho de parto e com bolsa íntegra, porque isso reduz a transmissão vertical.\n\nNessas gestantes, o AZT (zidovudina) intravenoso é iniciado pelo menos 3 horas antes da cesárea (ou no início do trabalho de parto) e mantido até o clampeamento do cordão. Ao mesmo tempo, ela deve começar já a terapia antirretroviral e colher a carga viral, que pode mudar o planejamento se vier baixa a tempo.",
    commentary: "Parto natural induzido com 34 semanas (A): indução prematura não tem indicação, e o parto vaginal só é opção com carga viral abaixo de 1.000 cópias/mL; o dolutegravir oral não substitui o AZT intravenoso no parto.\n\nIndução só após 40 semanas (C): com carga viral desconhecida, a via indicada é a cesárea eletiva, não a espera pelo trabalho de parto.\n\nCesárea eletiva após 34 semanas (D): antecipar a cesárea traria riscos de prematuridade; ela é programada a partir de 38 semanas.",
    tip: "HIV na gestação com carga viral desconhecida ou acima de 1.000 após 34 semanas: cesárea eletiva com 38 semanas + AZT IV 3 h antes.",
    reference: 'Protocolo Transmissão Vertical HIV/Sífilis/Hepatites, 2022.',
    tags: ['obstetrícia', 'infectologia']
  },
  {
    id: 'tp2022-110',
    module: 'Saúde Coletiva',
    text: 'Quais tipos de estudos melhor servem para determinar, respectivamente, eficácia de um tratamento e o prognóstico da doença?',
    options: [
      '(A) Estudo de caso-controle e estudo ecológico.',
      '(B) Estudo de coorte e estudo ecológico.',
      '(C) Estudo de acurácia e ensaio clínico randomizado.',
      '(D) Ensaio clínico randomizado e estudo de coorte.'
    ],
    correctAnswer: 3,
    explanation: "A melhor pergunta define o melhor desenho de estudo. Para saber se um tratamento funciona (eficácia), o desenho mais confiável é o ensaio clínico randomizado: a randomização distribui de forma equilibrada os fatores de confusão entre os grupos, e a diferença nos desfechos pode ser atribuída ao tratamento.\n\nPara prognóstico, isto é, o que acontece com as pessoas ao longo do tempo depois de adoecerem, o melhor desenho é o estudo de coorte, que acompanha um grupo com a doença e registra os desfechos (complicações, sequelas, óbito), permitindo calcular riscos.",
    commentary: "Caso-controle e ecológico (A): o caso-controle serve para investigar fatores de risco de doenças raras, partindo de quem já tem o desfecho; o ecológico compara grupos populacionais e não permite conclusões sobre indivíduos.\n\nCoorte e ecológico (B): a coorte é ótima para prognóstico, mas a pergunta pede primeiro a eficácia de tratamento, que é tarefa do ensaio clínico; o ecológico não avalia prognóstico individual.\n\nAcurácia e ensaio clínico (C): estudo de acurácia avalia testes diagnósticos (sensibilidade, especificidade), não tratamentos; e a ordem está invertida em relação à pergunta.",
    tip: "Tratamento: ensaio clínico randomizado. Prognóstico: coorte. Teste diagnóstico: estudo de acurácia. Doença rara: caso-controle.",
    reference: 'Medicina Baseada em Evidências, Stein e Grade, 2014.',
    tags: ['epidemiologia', 'bioestatística']
  },
  {
    id: 'tp2022-111',
    module: 'Saúde Coletiva',
    text: 'A tripla carga de agravos no Brasil envolve doenças infectocontagiosas, crônicas e causas externas. Qual alternativa exemplifica isso?',
    options: [
      '(A) Adultos com sedentarismo e dieta rica em processados.',
      '(B) Idosos com diabetes mellitus (crônica), risco de quedas (externa) e vulnerabilidade à COVID-19 (infecto).',
      '(C) Adolescentes usuários de maconha e vulneráveis a ISTs.',
      '(D) Crianças obesas em risco de violência doméstica.'
    ],
    correctAnswer: 1,
    explanation: "O Brasil vive uma tripla carga de doenças: convivem, ao mesmo tempo, doenças infecciosas e carenciais ainda não resolvidas, doenças crônicas não transmissíveis em crescimento, por causa do envelhecimento e dos hábitos de vida, e causas externas (acidentes e violências).\n\nA alternativa certa precisa trazer os três grupos juntos. O idoso com diabetes (crônica), risco de quedas (causa externa) e vulnerabilidade à COVID-19 (infecciosa) é o único exemplo que reúne as três cargas.",
    commentary: "Adultos com álcool, sedentarismo e ultraprocessados (A): são fatores de risco para doenças crônicas, ou seja, um único grupo da tripla carga.\n\nAdolescentes com maconha e vulnerabilidade a sífilis e gonorreia (C): reúne uso de substância e infecções, mas falta o componente crônico não transmissível e o de causa externa propriamente dita.\n\nCrianças com obesidade, risco de violência e atraso educacional (D): há componente crônico (obesidade) e de causa externa (violência), mas falta a doença infecciosa; atraso educacional é determinante social, não um dos três grupos.",
    tip: "Tripla carga = infecciosa + crônica + causa externa, tudo ao mesmo tempo.",
    reference: 'Eugênio Vilaça Mendes - As Redes de Atenção à Saúde.',
    tags: ['saúde coletiva', 'gestão']
  },
  {
    id: 'tp2022-112',
    module: 'Saúde Coletiva',
    text: 'Família de paciente com hipótese de Esquizofrenia solicita segunda opinião médica. De acordo com o Código de Ética Médica, a médica deve:',
    options: [
      '(A) Negar o pedido pois o paciente está em surto psicótico e oferece risco.',
      '(B) Acatar e solicitar matriciamento, pois é vedado ao médico opor-se à segunda opinião solicitada.',
      '(C) Negar pois é vedado ao médico modificar diagnóstico de colega.',
      '(D) Acatar mas não informar o diagnóstico ao paciente para evitar danos.'
    ],
    correctAnswer: 1,
    explanation: "O Código de Ética Médica (2019) não permite que o médico impeça uma segunda opinião ou a avaliação por junta médica quando o paciente ou seu representante legal a solicita (artigo 39). Então a médica deve acolher o pedido.\n\nNa atenção primária, uma forma adequada de fazer isso é o matriciamento em saúde mental: a equipe especializada discute o caso com a equipe de saúde da família, ajuda a esclarecer o diagnóstico e o plano de cuidado, e o paciente continua vinculado à UBS. O paciente está colaborativo, aceita o tratamento e tem apoio da família, o que favorece o seguimento ambulatorial.",
    commentary: "Negar e reinternar (A): o paciente está colaborativo, aceita o tratamento e tem suporte familiar; sintomas residuais não indicam por si só nova internação, e negar a segunda opinião fere o Código de Ética.\n\nVedado modificar diagnóstico de colega (C): o Código não proíbe reavaliar nem mudar diagnóstico; ele proíbe, sim, impedir a segunda opinião.\n\nNão informar diagnóstico e prognóstico (D): é vedado ao médico deixar de informar diagnóstico, prognóstico, riscos e objetivos do tratamento (artigo 34); só quando a comunicação direta puder causar dano é que ela é feita ao representante legal, e o pedido de segunda opinião não muda esse dever.",
    tip: "Pediu segunda opinião ou junta médica? O médico não pode se opor (art. 39 do Código de Ética Médica).",
    reference: 'Código de Ética Médica (2019).',
    tags: ['ética médica', 'direito do paciente']
  },
  {
    id: 'tp2022-113',
    module: 'Saúde Coletiva',
    text: 'Gestante tem teste rápido para sífilis positivo. Com relação à Notificação Compulsória, deve-se:',
    options: [
      '(A) Completar a investigação e só notificar após confirmação.',
      '(B) Notificar como "Gestante com Sífilis" já na suspeita.',
      '(C) Notificar somente se houver sífilis congênita no feto.',
      '(D) Ignorar pois sífilis não é de notificação compulsória.'
    ],
    correctAnswer: 0,
    explanation: "A resposta considerada certa é completar a investigação antes de notificar. Um teste rápido reagente para sífilis é treponêmico e pode continuar positivo por toda a vida em quem já se tratou (cicatriz sorológica). Por isso, antes de registrar o caso, verifica-se se há tratamento anterior adequado documentado e colhe-se o teste não treponêmico (VDRL), que mostra se há infecção ativa e serve de base para o seguimento.\n\nIsso não atrasa o cuidado: na gestante, o tratamento com penicilina benzatina começa já no primeiro teste reagente, enquanto a investigação é completada. A notificação compulsória (ficha de sífilis em gestante no SINAN) é feita assim que o caso se confirma pela definição da vigilância.",
    commentary: "Notificar já na suspeita (B): pela resposta oficial, a notificação aguarda a definição do caso, para não registrar como sífilis ativa uma mulher já tratada com cicatriz sorológica.\n\nNotificar só sífilis congênita (C): a sífilis em gestante é de notificação compulsória própria, independente de o bebê ser ou não infectado.\n\nIgnorar porque não é de notificação compulsória (D): sífilis adquirida, sífilis em gestante e sífilis congênita estão todas na lista nacional de notificação compulsória.",
    tip: "Gestante com teste rápido de sífilis reagente: trata na hora, investiga tratamento prévio e VDRL, e notifica sífilis em gestante.",
    reference: 'Protocolo Transmissão Vertical HIV/Sífilis, 2022.',
    tags: ['vigilância epidemiológica', 'IST']
  },
  {
    id: 'tp2022-114',
    module: 'Saúde Coletiva',
    image: '/images/tp2022-114.webp',
    text: 'O método de cálculo da Razão de Mortalidade Materna é:',
    options: [
      '(A) (óbitos por causa materna / população estimada) x 10^5.',
      '(B) (óbitos por causa materna / mulheres em idade fértil) x 10^3.',
      '(C) (óbitos por causa materna / nascidos vivos) x 10^5.',
      '(D) (óbitos por causa materna / óbitos infantis) x 10^3.'
    ],
    correctAnswer: 2,
    explanation: "A razão de mortalidade materna (RMM) mede o risco de morte por causas ligadas à gravidez, ao parto e ao puerpério (até 42 dias). O cálculo divide os óbitos maternos pelos nascidos vivos no mesmo local e período, multiplicando por 100.000.\n\nUsam-se os nascidos vivos como denominador porque eles são uma estimativa acessível do número de gestações (o total real de gestantes não é conhecido). Por isso o indicador se chama razão, e não taxa ou coeficiente em sentido estrito. Os dados vêm do SIM (óbitos) e do SINASC (nascidos vivos).",
    commentary: "Óbitos maternos por população estimada (A): a população geral inclui homens, crianças e mulheres que não estão grávidas, que não estão expostos ao risco de morte materna.\n\nÓbitos maternos por mulheres em idade fértil, por 1.000 (B): esse denominador não representa as gestações, e a multiplicação usada para a RMM é por 100.000.\n\nÓbitos maternos por óbitos infantis (D): relacionar dois tipos de óbito não mede risco de morte materna; óbitos infantis são usados no cálculo de outros indicadores, divididos por nascidos vivos.",
    tip: "Razão de mortalidade materna = óbitos maternos ÷ nascidos vivos × 100.000.",
    reference: 'Rouquayrol, M. Z. Epidemiologia & saúde. 2013.',
    tags: ['epidemiologia', 'saúde materna']
  },
  {
    id: 'tp2022-115',
    module: 'Saúde Coletiva',
    image: '/images/tp2022-115.webp',
    text: 'Mulher de 37 anos com perda de peso, fadiga, nervosismo, sudorese excessiva e bócio. Qual o diagnóstico e conduta inicial prováveis?',
    options: [
      '(A) Hipotireoidismo; iniciar levotiroxina.',
      '(B) Hipotireoidismo subclínico; conduta expectante.',
      '(C) Hipertireoidismo; iniciar levotiroxina.',
      '(D) Hipertireoidismo; iniciar metimazol.'
    ],
    correctAnswer: 3,
    explanation: "Perda de peso, nervosismo, sudorese, cansaço fácil e alteração menstrual, somados a uma tireoide aumentada à palpação, compõem o quadro de tireotoxicose. Na mulher jovem com bócio difuso, a causa mais comum é a doença de Graves, e o quadro que se mantém há pelo menos dois anos afasta tireoidite transitória.\n\nA confirmação laboratorial é feita com TSH suprimido e T4 livre (e T3) elevados. Para o tratamento inicial, o fármaco de escolha é o metimazol, que bloqueia a síntese dos hormônios tireoidianos e pode ser iniciado e acompanhado na Atenção Básica. A exceção clássica é o primeiro trimestre da gestação, quando se prefere o propiltiouracil.",
    commentary: "Hipotireoidismo com levotiroxina (A): o hipotireoidismo causa ganho de peso, lentidão, intolerância ao frio e pele seca, o contrário do que a paciente relata.\n\nHipotireoidismo subclínico (B): nele o T4 livre é normal e quase não há sintomas; não explica um quadro florido de hipermetabolismo, e a conduta expectante deixaria uma tireotoxicose sem tratamento.\n\nHipertireoidismo com levotiroxina (C): o diagnóstico está certo, mas a levotiroxina é hormônio tireoidiano e pioraria a tireotoxicose.",
    tip: "Hipertireoidismo: TSH baixo + T4 livre alto; primeira escolha é metimazol (PTU só no 1º trimestre da gestação).",
    reference: 'Consenso Brasileiro de Hipertireoidismo, 2013.',
    tags: ['endocrinologia', 'atenção primária']
  },
  {
    id: 'tp2022-116',
    module: 'Saúde Coletiva',
    text: 'Homem de 50 anos com ferimento dilacerante no braço por mordida de porco. Paciente nunca vacinado. Conduta correta:',
    options: [
      '(A) Vacina dupla adulto e vacina antirrábica.',
      '(B) Vacina dupla adulto, vacina antirrábica e soro antirrábico.',
      '(C) Apenas vacina dupla adulto.',
      '(D) Vacina dTpa e vacina antirrábica.'
    ],
    correctAnswer: 1,
    explanation: 'Mordidas de mamíferos domésticos (exceto cão/gato observáveis) em ferimentos graves exigem soro + vacina antirrábica. É necessário também iniciar esquema para tétano.',
    commentary: 'O ferimento dilacerante é considerado grave. Como o paciente não é vacinado, precisa do soro (passiva) e vacina (ativa) para raiva e dT/dupla adulto (tétano).',
    reference: 'Nota Técnica Profilaxia da Raiva Humana, SES-SP, 2020.',
    tags: ['imunização', 'emergência']
  },
  {
    id: 'tp2022-117',
    module: 'Saúde Coletiva',
    text: 'Mulher vítima de violência doméstica apresenta-se chorosa e com hematomas, mas não deseja denunciar o marido. Conduta médica correta:',
    options: [
      '(A) Realizar anamnese/exame físico, realizar notificação e orientar a paciente sobre registro e perícia.',
      '(B) Fazer corpo de delito e Boletim de Ocorrência mesmo contra a vontade da vítima.',
      '(C) Respeitar o sigilo e não realizar notificação para não denunciar.',
      '(D) Apenas orientar a procurar delegacia antes de qualquer exame.'
    ],
    correctAnswer: 0,
    explanation: 'A notificação é obrigatória para a saúde; a denúncia policial é um direito da vítima que deve ser orientado/incentivado.',
    commentary: 'A notificação compulsória para fins epidemiológicos é dever do médico. A denúncia criminal cabe à vítima em crimes de ação penal privada/condicionada.',
    reference: 'Manual Atendimento Vítimas Violência, SES/DF.',
    tags: ['violência doméstica', 'ética médica']
  },
  {
    id: 'tp2022-118',
    module: 'Saúde Coletiva',
    text: 'No SUS, qual é uma ação de competência específica do gestor MUNICIPAL de saúde?',
    options: [
      '(A) Financiar e regular sistemas de alta complexidade (UTIs).',
      '(B) Aprovar na ANVISA critérios de uso de medicamentos.',
      '(C) Elaborar e executar o plano local de saúde e aplicar vacinas.',
      '(D) Coordenar laboratórios de referência regional.'
    ],
    correctAnswer: 2,
    explanation: "A Lei 8.080/1990 distribui as atribuições do SUS entre as três esferas. Ao município, mais próximo da população, cabe planejar, organizar, gerir e executar diretamente os serviços de saúde do seu território.\n\nNa pandemia de COVID-19, isso significou elaborar e pôr em prática o plano local de enfrentamento e aplicar as vacinas aprovadas pela ANVISA nas unidades de saúde. É a única alternativa que descreve uma ação de execução local, típica do gestor municipal.",
    commentary: "Financiar e regular a alta complexidade (A): definir e coordenar as redes de alta complexidade, como a de UTIs, é atribuição da direção nacional do SUS, com participação dos estados na regulação.\n\nAprovar critérios na ANVISA (B): a ANVISA é uma agência ligada ao Ministério da Saúde; estabelecer critérios de controle sanitário de medicamentos e imunobiológicos é competência federal.\n\nCoordenar laboratórios de referência regional (D): a coordenação da rede de laboratórios de saúde pública cabe à esfera federal, com os estados gerindo os laboratórios de referência; não é papel do município.",
    tip: "Município executa (plano local, vacinação, serviços); União normatiza e coordena alta complexidade, ANVISA e rede de laboratórios.",
    reference: 'Lei nº 8.080/1990.',
    tags: ['SUS', 'gestão']
  },
  {
    id: 'tp2022-119',
    module: 'Saúde Coletiva',
    text: 'Qual estratégia favorece o cuidado longitudinal e humanizado, permitindo relações clínicas de longa duração na APS?',
    options: [
      '(A) Hierarquização da rede.',
      '(B) Regionalização intermunicipal.',
      '(C) Criação de vínculos e relação clínica humanizada.',
      '(D) Prática de uma clínica flexneriana.'
    ],
    correctAnswer: 2,
    explanation: "A longitudinalidade é um dos atributos essenciais da Atenção Primária: o acompanhamento da mesma pessoa pela mesma equipe ao longo do tempo, independentemente de haver ou não doença. Ela só se sustenta quando existe vínculo, isto é, uma relação de confiança entre usuário e profissionais.\n\nNo caso, a mulher sobrecarregada como cuidadora conseguiu expor medos e angústias porque a equipe construiu essa relação próxima e humanizada. O vínculo permite enxergar a pessoa além da doença (o diabetes descompensado) e planejar o cuidado junto com ela.",
    commentary: "Hierarquização (A): organiza os serviços em níveis de complexidade crescente; é uma diretriz de organização da rede, não a ferramenta que cria uma relação clínica duradoura.\n\nRegionalização (B): distribui os serviços dentro de uma região de saúde, entre municípios; também é organizativa e não explica o vínculo construído na UBS.\n\nClínica flexneriana (D): o modelo de Flexner é biomédico, centrado na doença, no hospital e na especialização; vai na direção oposta ao cuidado integral e humanizado descrito.",
    tip: "Longitudinalidade depende de vínculo: mesma equipe, ao longo do tempo, com relação de confiança.",
    reference: 'Política Nacional de Atenção Básica (PNAB).',
    tags: ['atenção primária', 'princípios']
  },
  {
    id: 'tp2022-120',
    module: 'Saúde Coletiva',
    text: 'Sobre a Medicina Baseada em Evidências (MBE), assinale a interpretação correta:',
    options: [
      '(A) Decisões baseiam-se exclusivamente na experiência individual.',
      '(B) As preferências do paciente devem sempre ser ignoradas em prol da ciência.',
      '(C) Deve ser seguida de forma cega independente da realidade local.',
      '(D) Integra a melhor evidência científica com a expertise clínica e a realidade do paciente.'
    ],
    correctAnswer: 3,
    explanation: "A Medicina Baseada em Evidências apoia a decisão clínica em três pilares que precisam ser combinados: a melhor evidência científica disponível, avaliada criticamente; a experiência e o julgamento clínico do médico; e os valores, preferências e circunstâncias do paciente, incluindo a realidade do serviço.\n\nPor isso, um estudo citado pelo familiar não invalida automaticamente a conduta: a evidência precisa ser interpretada à luz daquele paciente e daquele contexto. A alternativa D é a única que reúne os três elementos.",
    commentary: "Experiência individual como base (A): basear a decisão apenas na vivência pessoal é justamente o que a MBE procura superar; a experiência é um dos pilares, não o único.\n\nPreferências sempre acatadas (B): as preferências do paciente e da família devem ser consideradas na decisão compartilhada, mas não obrigam o médico a adotar qualquer conduta pedida.\n\nAplicação integral (C): a evidência não deve ser aplicada de forma automática e completa em qualquer situação; estudos têm populações e limites próprios, e a aplicação depende do caso.",
    tip: "MBE = melhor evidência + experiência clínica + valores e contexto do paciente. Nenhum pilar sozinho basta.",
    reference: 'Medicina Baseada em Evidências aplicada à prática do MFC, Stein, 2019.',
    tags: ['MBE', 'bioética']
  },
  {
    id: 'tp2025-101',
    module: 'Saúde Coletiva',
    text: 'Durante uma visita domiciliar, um médico de família avalia um paciente idoso de 85 anos, acamado, com múltiplas comorbidades, incluindo hipertensão, diabetes e insuficiência cardíaca. O paciente mora com a filha, que é sua principal cuidadora, mas ela relata dificuldades para manejar a medicação e realizar os cuidados diários com o pai. Qual deve ser a abordagem mais adequada para a gestão do cuidado desse paciente no contexto da visita domiciliar?',
    options: [
      '(A) Identificar as necessidades do paciente e da cuidadora, avaliar o suporte social disponível e coordenar uma abordagem multidisciplinar que inclua educação em saúde, ajustes no plano terapêutico e possível suporte domiciliar adicional.',
      '(B) Priorizar a adesão à medicação e orientar a filha a seguir rigorosamente as prescrições médicas, garantindo que o paciente tome todos os remédios nos horários corretos.',
      '(C) Encaminhar imediatamente o paciente para atendimento hospitalar, pois a dificuldade no manejo domiciliar indica que ele não está recebendo cuidados adequados e necessita de internação.',
      '(D) Sugerir à filha que busque um cuidador profissional, pois a complexidade do caso exige assistência especializada e a sobrecarga da cuidadora pode comprometer a qualidade do atendimento.'
    ],
    correctAnswer: 0,
    explanation: 'Uma abordagem integral e centrada na família na Atenção Domiciliar deve identificar as necessidades de ambos (idoso e cuidadora), avaliar a rede de suporte social e mobilizar uma equipe multidisciplinar para intervenção clínica e psicossocial conjunta.',
    commentary: 'Focar exclusivamente no componente biomédico (adesão estrita aos remédios) ou encaminhar ao hospital de maneira prematura desrespeita os propósitos da assistência domiciliar. A sobrecarga da cuidadora requer coordenação de cuidados, educação em saúde e acionamento de redes de suporte, em vez de mera sugestão de terceirização de custos.',
    reference: 'Caderno de Atenção Domiciliar - Volumes 1 e 2, Ministério da Saúde, 2012; Gestão do Cuidado no SUS, Ministério da Saúde, 2020.',
    tags: ['atenção domiciliar', 'atenção primária']
  },
  {
    id: 'tp2025-102',
    module: 'Saúde Coletiva',
    text: 'Ana Clara, 35 anos, branca, solteira, atendente de telemarketing, reside com a mãe. Procura o Centro de Atenção Psicossocial (CAPS) com queixa de que, há 3 meses, não tem conseguido trabalhar, pois apresenta humor depressivo, choro fácil, anedonia, baixa autoestima, desesperança e alucinações auditivas de cunho persecutório. Não apresenta ideiação suicida. Nega história psiquiátrica e/ou outros problemas de saúde. Diante do caso, no CAPS deverá ser adotada a seguinte conduta:',
    options: [
      '(A) Inserir em tratamento psicoterápico individual, com posterior avaliação da necessidade de tratamento farmacológico.',
      '(B) Encaminhar, imediatamente, a hospital de referência para internação psiquiátrica.',
      '(C) Planejar o PTS (projeto terapêutico singular), que deverá incluir tratamento psiquiátrico e psicoterápico.',
      '(D) Referenciar para tratamento com clínico geral na APS (Atenção Primária à Saúde).'
    ],
    correctAnswer: 2,
    explanation: 'A complexidade de um quadro depressivo grave com sintomas psicóticos exige o planejamento de um Projeto Terapêutico Singular (PTS) no âmbito do CAPS, integrando farmacoterapia psiquiátrica e psicoterapia.',
    commentary: 'O diagnóstico é de episódio depressivo grave com sintomas psicóticos (F32.3). Devido à gravidade, a paciente se beneficia enormemente do suporte multidisciplinar comunitário do CAPS, inviabilizando manejo puramente psicoterápico preliminar ou encaminhamento exclusivo ao clínico geral. Não há indicação para internação psiquiátrica imediata uma vez que não são relatados riscos de auto ou heteroagressão nem ideação suicida.',
    reference: 'NARDI, Antonio E. et al. Tratado de Psiquiatria da Associação Brasileira de Psiquiatria. Porto Alegre: ArtMed, 2021.',
    tags: ['saúde mental', 'caps', 'PTS']
  },
  {
    id: 'tp2025-103',
    module: 'Saúde Coletiva',
    text: 'Uma Unidade Básica de Saúde (UBS) está planejando as ações de rotina para a prevenção de câncer em sua população adscrita. A equipe multiprofissional se reúne para definir as estratégias de rastreamento a serem implementadas, considerando as diretrizes do Ministério da Saúde e a disponibilidade de recursos. Considerando as recomendações atuais para o rastreamento de neoplasias na Atenção Primária à Saúde, qual das seguintes ações representa uma estratégia prioritária e com evidências científicas consolidadas para a detecção precoce de câncer de colo do útero?',
    options: [
      '(A) Oferta semestral de exame citopatológico para mulheres com resultados normais.',
      '(B) Realização anual de exame citopatológico para as mulheres sexualmente ativas com idade de 25 a 69 anos.',
      '(C) Oferta bianual de exame citopatológico para mulheres com dois resultados normais.',
      '(D) Realização de exame citopatológico para mulheres entre 25 e 64 anos, com periodicidade definida pelas Diretrizes Nacionais.'
    ],
    correctAnswer: 3,
    explanation: 'O rastreamento do câncer de colo do útero por citologia oncótica possui evidência máxima de benefício para a faixa etária compreendida de 25 a 64 anos, com intervalo trienal após dois exames anuais normais sucessivos.',
    commentary: 'As diretrizes oficiais do Ministério da Saúde e do INCA estipulam a colpocitologia oncológica para mulheres de 25 a 64 anos que já iniciaram vida sexual. O intervalo padrão é de 3 anos, condicionado à obtenção prévia de dois resultados anuais normais seguidos, evitando intervenções iatrogênicas desnecessárias decorrentes sobre a zona de transformação do colo uterino.',
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA, 2016; OMS Global Strategy for Cervical Cancer, 2020.',
    tags: ['rastreamento', 'oncologia', 'atenção primária']
  },
  {
    id: 'tp2025-104',
    module: 'Saúde Coletiva',
    text: 'As ações de promoção à saúde e prevenção de complicações das doenças crônicas não transmissíveis (DCNT) devem ser priorizadas. Dessa forma, é necessário conhecimento do perfil de adoecimento da população com maior prevalência de morbimortalidade, acarretando perda de qualidade de vida, limitações, incapacidades, além de alta taxa de mortalidade prematura. Quais são as quatro principais doenças crônicas não transmissíveis?',
    options: [
      '(A) Doenças cardiovasculares, neoplasias, doenças respiratórias crônicas e diabetes.',
      '(B) Doenças do aparelho digestivo, doenças cardiovasculares, doenças respiratórias crônicas, doenças do aparelho geniturinário.',
      '(C) Doenças do aparelho circulatório, neoplasias, doenças do aparelho digestivo, doenças do aparelho geniturinário.',
      '(D) Doenças do aparelho geniturinário, diabetes, doenças respiratórias crônicas e doenças do aparelho digestivo.'
    ],
    correctAnswer: 0,
    explanation: 'As quatro prioridades de Doenças Crônicas Não Transmissíveis (DCNT) de maior impacto epidemiológico global e nacional compreendem os agravos cardiovasculares, as neoplasias, as doenças respiratórias crônicas e o diabetes mellitus.',
    commentary: 'De acordo com a OMS e o Plano Governamental para Enfretamento das DCNT no Brasil (2021-2030), estas quatro categorias representam os maiores coeficientes de mortalidade prematura e anos de vida perdidos por incapacidade (DALYs), justificando o foco prioritário de políticas de estilo de vida, controle de tabagismo, alimentação e imunização.',
    reference: 'Plano de Ações Estratégicas para o Enfrentamento das Doenças Crônicas e Agravos Não Transmissíveis no Brasil 2021-2030, Ministério da Saúde.',
    tags: ['DCNT', 'epidemiologia']
  },
  {
    id: 'tp2025-105',
    module: 'Saúde Coletiva',
    text: 'Com base na legislação do SUS, qual dos princípios fundamentais a seguir garante que todas as pessoas tenham direito ao atendimento nos serviços públicos de saúde?',
    options: [
      '(A) Integralidade, pois o SUS deve oferecer atendimento completo ao indivíduo, considerando promoção, prevenção, tratamento e reabilitação.',
      '(B) Universalidade, pois o acesso aos serviços de saúde é um direito de todos e um dever do Estado, sem qualquer tipo de restrição.',
      '(C) Equidade, pois o SUS deve tratar desigualmente os desiguais, garantindo mais assistência a quem mais necessita.',
      '(D) Hierarquização, pois o SUS organiza seus serviços em diferentes níveis de complexidade, garantindo acesso progressivo à assistência.'
    ],
    correctAnswer: 1,
    explanation: 'O princípio da Universalidade estatui que a saúde constitui um direito fundamental de todos os cidadãos brasileiros e um dever constitucional do Estado, assegurando acesso livre e irrestrito.',
    commentary: 'Embora todos os princípios sejam indissociáveis, cada um possui foco distinto: a Universalidade foca no acesso ao sistema de saúde sem pré-requisitos; a Integralidade enfatiza a amplitude do cuidado biopsicossocial prestado; e a Equidade trata da partilha diferenciada de recursos baseada em vulnerabilidade para atenuar as desigualdades existentes.',
    reference: 'Constituição Federal de 1988 (Art. 196 a 198); Lei Orgânica da Saúde (Lei nº 8.080/1990).',
    tags: ['SUS', 'legislação']
  },
  {
    id: 'tp2025-106',
    module: 'Saúde Coletiva',
    text: 'Em uma Unidade de Saúde da Família, o médico, ao avaliar pacientes com suspeita de dengue em uma região onde há epidemia da doença, esqueceu-se de realizar a notificação dos casos suspeitos no Sistema de Informação de Agravos de Notificação (SINAN). Em relação ao registro das informações, assinale a alternativa correta:',
    options: [
      '(A) Trata-se de subnotificação, pois o registro das informações deverá ser realizado em até 48 horas.',
      '(B) Não se trata de caso de subnotificação, uma vez que já foi considerada epidemia de dengue em sua região, não impactando nas ações planejadas.',
      '(C) Não se trata de subnotificação, pois casos de dengue deverão ser notificados somente após a confirmação.',
      '(D) Trata-se de subnotificação, o que traz repercussões importantes no conhecimento do número de casos da doença e para as ações planejadas.'
    ],
    correctAnswer: 3,
    explanation: 'A omissão do preenchimento da ficha de notificação compulsória para casos suspeitos de agravos listados configura subnotificação, gerando impactos severos no planejamento público de controle e combate epidemiológico.',
    commentary: 'A notificação sistemática de casos de dengue é compulsória frente à simples suspeita clínica de manifestação, independentemente de consolidação por exames complementares de sorologia ou biologia molecular, inclusive durante pandemias ou cenários de epidemia declarada. A notificação subsidia o monitoramento geoespacial vetorial e a adoção de ações ágeis de bloqueio por parte das equipes de vigilância sanitária local.',
    reference: 'Portaria de Consolidação nº 4 de 2017, Anexo (Ministério da Saúde); Sistema de Informação de Agravos de Notificação – Sinan.',
    tags: ['vigilância epidemiológica', 'notificação compulsória']
  },
  {
    id: 'tp2025-107',
    module: 'Saúde Coletiva',
    text: 'Paciente com diabetes mellitus tipo 2 já diagnosticada realiza acompanhamento regular com equipe multidisciplinar para evitar retinopatia e nefropatia diabética. Este caso representa qual nível de prevenção?',
    options: [
      '(A) Prevenção primária',
      '(B) Prevenção secundária',
      '(C) Prevenção terciária',
      '(D) Prevenção quaternária'
    ],
    correctAnswer: 1,
    explanation: 'De acordo com referenciais clássicos da Medicina de Família sobre níveis preventivos, a prevenção secundária visa à detecção precoce de lesões assintomáticas e ao tratamento de base imediato para conter o avanço ao espectro clínico desfavorável.',
    commentary: 'Embora o manejo de complicações estabelecidas de longo prazo seja classificado sob o crivo preventivo terciário (focado em reabilitação e limitação de incapacidades), a conduta ativa diagnóstica multiprofissional periódica voltada a interceptar manifestações ainda subclínicas em fase latente (como a busca ativa precoce por microalbuminúria ou retinopatia diabética inicial incipiente em paciente diagnosticado) assenta-se sob o escopo preventivo secundário.',
    reference: 'Lopes JM, Gusso G. Tratado de Medicina de Família e Comunidade, 2a ed. Porto Alegre: Artmed, 2019.',
    tags: ['prevenção', 'atenção primária']
  },
  {
    id: 'tp2025-108',
    module: 'Saúde Coletiva',
    text: 'Homem, 72 anos, hipertenso, em uso de terapia medicamentosa para hipertensão, comparece à UBS para avaliação de rotina, assintomático e apresentando os seguintes sinais vitais: PA 172/124mmHg e FC 52bpm. Assinale a melhor conduta para este paciente:',
    options: [
      '(A) Controle de sal da dieta, atividade física após melhor controle pressórico e tratamento medicamentoso com IECA (enalapril), bloqueador de canais de cálcio (anlodipina) e tiazídico (hidroclorotiazida).',
      '(B) Controle de sal da dieta, atividade física 3 a 5 vezes por semana e tratamento medicamentoso com IECA (enalapril), diurético de alça (furosemida) e betabloqueador(metoprolol).',
      '(C) Controle de sal da dieta, atividade física após melhor controle da PA e tratamento medicamentoso com IECA (enalapril), betabloqueador (metoprolol) e Bloqueador de AT2 (losartana).',
      '(D) Controle de sal da dieta, atividade física 3 a 5 vezes por semana e tratamento medicamentoso com diurético (clortalidona), bloqueador da aldosterona (espironolactona) e bloqueador de canais de cálcio (anlodipina).'
    ],
    correctAnswer: 0,
    explanation: 'Paciente com hipertensão grave estágio 3 e alto risco cardiovascular exige imediato acoplamento de tríplice terapia sinérgica de mecanismos distintos (IECA, BCC e diurético tiazídico), deferindo práticas de esforço físico agudo até otimizar os níveis pressóricos.',
    commentary: 'A obtenção de cifras pressóricas em níveis de Estágio 3 (PA ≥ 180 / 110) impõe o emprego ágil de complementações farmacológicas sinérgicas compostas por um IECAs ou BRA, um Bloqueador de Canal de Cálcio (BCC) e um diurético tiazídico em doses harmônicas. Betabloqueadores como o Metoprolol ficam restritos a indicações cardíacas e a associação de IECA direto com BRA (Enalapril + Losartana) é formalmente proibida pelo elevado risco de lesão renal crônica / hipercalemia aguda secundária. Exercício físico extenuante agudo deve ser postergado temporariamente até a redução dos picos de emergência mecânica vascular.',
    reference: 'Barroso et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020.',
    tags: ['atenção primária', 'hipertensão']
  },
  {
    id: 'tp2025-109',
    module: 'Saúde Coletiva',
    text: 'Mulher, 55 anos, diagnosticada com diabetes mellitus tipo 2 há dois anos, retorna ao consultório médico apresentando ansiedade, além de relatar alto consumo de alimentos açucarados e a não realização de atividade física, refletindo em um mau controle glicêmico. Atualmente, utiliza como tratamento medicamentoso o cloridrato de metformina em dose máxima (850mg, 3x/dia). A seguir são mostrados os resultados dos exames laboratoriais da paciente: glicemia de jejum 220mg/dL; glicemia glicada 8,6%. Além de se reforçar a mudança do estilo de vida da paciente, qual seria a conduta terapêutica medicamentosa adequada para que haja um melhor controle dos níveis glicêmicos?',
    options: [
      '(A) Iniciar o uso de insulinoterapia basal ou com o esquema basal-bolus.',
      '(B) Continuar com o cloridrato de metformina em monoterapia por mais três meses.',
      '(C) Manter o uso do cloridrato de metformina e associar outro hipoglicemiante oral.',
      '(D) Intensificar o uso de insulina, cloridrato de metformina e outro hipoglicemiante oral.'
    ],
    correctAnswer: 2,
    explanation: 'Diante de mau controle glicêmico residual (HbA1c 8,6%) em vigência de tratamento com monoterapia de metformina em dose plena, as diretrizes vigentes contraindicam prolongamento inútil e recomendam a associação guiada de um segundo antidiabético oral.',
    commentary: 'As metas gerais de controle glicêmico preconizam HbA1c < 7,0% na grande maioria dos pacientes adultos. Diante de falha de monoterapia estável sob metformina, deve-se instituir terapia combinada de modo progressivo (escalonamento). As classes preferenciais para o acréscimo oral na atenção primária envolvem os inibidores de SGLT2, agonistas de GLP-1, inibidores de DPP-4 ou sulfonilureias. A insulinização direta é reservada para marcante descompensação metabólica franca catabólica (glicada ≥ 9,0% ou com sintomas de perda ponderal aguda severa cetonúrica).',
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes 2022-2023; ADA Standards of Care in Diabetes, 2023.',
    tags: ['atenção primária', 'diabetes']
  },
  {
    id: 'tp2025-110',
    module: 'Saúde Coletiva',
    text: 'Entre as diferentes ferramentas de assistência à saúde no contexto do Sistema Único de Saúde (SUS), tem-se o Projeto Terapêutico Singular (PTS) para a organização e gestão do cuidado. Assinale a alternativa que define esta ferramenta:',
    options: [
      '(A) Deve ser aplicado a todos os usuários que são acompanhados na Unidade Básica de Saúde.',
      '(B) Corresponde apenas à etapa de reabilitação do processo de tratamento para as pessoas com transtornos mentais.',
      '(C) É definido previamente pelos profissionais e comunicado ao usuário.',
      '(D) É destinado a um sujeito, família ou comunidade, elaborado por equipe multiprofissional.'
    ],
    correctAnswer: 3,
    explanation: 'O Projeto Terapêutico Singular (PTS) constitui um dispositivo de co-construção terapêutica interdisciplinar focada em um sujeito de alta vulnerabilidade, família ou território multiprofissionalmente planejado.',
    commentary: 'O PTS opõe-se à conduta linear vertical hegemônica: ele envolve o próprio sujeito na tomada coparticipativa de decisões de cuidado. Destina-se singularmente às conjunturas complexas em que as abordagens padronizadas habituais demonstram ineficácia ou ineficiência, não sendo, portanto, aplicável de modo extensivo obrigatório indistintamente para a totalidade absoluta de acolhimentos epidemiológicos cotidianos de uma UBS.',
    reference: 'Slomp Júnior H, Franco TB, Merhy EE. Projeto terapêutico como dispositivo para o cuidado compartilhado. Editora Rede Unida, 2022.',
    tags: ['PTS', 'gestão do cuidado']
  },
  {
    id: 'tp2025-111',
    module: 'Saúde Coletiva',
    text: 'Para rastreamento populacional de doenças de alta incidência e/ou prevalência, qual a principal característica dos exames a serem utilizados?',
    options: [
      '(A) Alta especificidade',
      '(B) Baixa sensibilidade',
      '(C) Alta sensibilidade',
      '(D) Baixa acurácia'
    ],
    correctAnswer: 2,
    explanation: 'Os exames de triagem e rastreamento de espectro populacional inicial exigem priorizar alta sensibilidade diagnóstica para minimizar a evasão de verdadeiros doentes (falsos negativos).',
    commentary: 'Um teste de triagem epidemiológica populacional ideal visa a englobar e "capturar" a totalidade de portadores potenciais da desordem em fase pré-clínica assintomática (daí o primado de Alta Sensibilidade). Os indivíduos que acusarem reações positivas complementares deverão ser encaminhados a posteriori para exames diagnósticos de confirmação dotados de Alta Especificidade (responsáveis por expurgar falsos positivos indesejáveis antes do início de intervenções agressivas sistêmicas).',
    reference: 'Eluf-Neto J. Rastreamento. In: Martins MA et al (Org). Clínica Médica. Manole, 2ed, 2015; Ferreira JC, Patino CM. Entendendo testes diagnósticos. J Bras Pneumol, 2017.',
    tags: ['epidemiologia', 'rastreamento']
  },
  {
    id: 'tp2025-112',
    module: 'Saúde Coletiva',
    text: 'A mortalidade proporcional por idade também pode ser representada em gráfico, sendo conhecida como Curva de Mortalidade Proporcional ou Curva de Nelson de Moraes. A curva de mortalidade proporcional apresentada abaixo reflete:',
    options: [
      '(A) Nível de saúde muito baixo',
      '(B) Nível de saúde baixo',
      '(C) Nível de saúde regular',
      '(D) Nível de saúde bom'
    ],
    correctAnswer: 1,
    explanation: 'A curva com padrão de decréscimo linear íngreme tipo J invertido ou com picos concentrados em menores de um ano configura o padrão típico da Curva de Nelson de Moraes indicando nível de saúde baixo.',
    commentary: 'As Curvas de Nelson de Moraes avaliam proporcionalmente os perfis de óbito por ciclos etários divididos. O Padrão de Nível de Saúde Baixo caracteriza-se por manter altíssima mortalidade na faixa infantil de recém-nascidos e lactentes (< 1 ano) e modesto percentual de sobrevida entre os maduros tardios senis (óbitos de maiores de 50 anos inferiores a thresholds de 20%). Países desenvolvidos de Nível de Saúde Elevado ostentam curva tipo "U" ou tipo "J" tradicional em que mais de 70% dos óbitos ocorrem em idosos tardios com sobrevida avançada.',
    reference: 'Laurenti R, et al. Estudo da mortalidade e da morbidade perinatal em maternidades. Rev Saúde Pública, 18:436-47, 1984.',
    tags: ['indicadores de saúde', 'epidemiologia'],
    image: '/images/tp2025-112.webp'
  },
  {
    id: 'tp2025-113',
    module: 'Saúde Coletiva',
    text: 'Durante uma semana, uma UBS identificou aumento expressivo de atendimentos com quadros de febre, mialgia, cefaleia e exantema em moradores do mesmo bairro, localizado próximo a um terreno baldio com histórico de acúmulo de lixo e água parada. Com base na suspeita epidemiológica, qual deve ser a principal hipótese diagnóstica e a primeira medida da investigação?',
    options: [
      '(A) Surto de meningite meningocócica – Iniciar quimioprofilaxia em todos os casos suspeitos.',
      '(B) Surto de sarampo – Suspender atividades escolares e iniciar vacinação em bloqueio.',
      '(C) Surto de leptospirose – Coletar sorologia e aguardar confirmação laboratorial para ação de campo.',
      '(D) Surto de arbovirose (ex.: dengue) – Notificar imediatamente e realizar investigação entomológica e ambiental.'
    ],
    correctAnswer: 3,
    explanation: 'O padrão sintomático agudo típico (febre, cefaleia, mialgia e exantema) atrelado a nichos geográficos com acúmulo hídrico orienta o alerta de surto por arboviroses (dengue), exigindo pronta notificação e controle de vetores.',
    commentary: 'O acúmulo de detritos em terreno adjacente compõe criatório abundante para ovos do vetor Aedes aegypti. A hipótese primordial é arbovirose. A vigilância epidemiológica ágil proíbe postergar ações de eliminação ou bloqueio à espera de resultados laboratoriais tardios; impõe-se a emissão do alerta de surto e a varredura física entomológica territorial urbana de eliminação de nichos de reprodução do mosquito.',
    reference: 'Ministério da Saúde. Guia de Vigilância em Saúde. Brasília: MS, 2022; Investigação de surtos de arboviroses, OPAS, 2021.',
    tags: ['vigilância epidemiológica', 'infectologia']
  },
  {
    id: 'tp2025-114',
    module: 'Saúde Coletiva',
    text: 'Considere uma equipe da Estratégia Saúde da Família (ESF) em uma comunidade com elevada prevalência de doenças crônicas e aumento recente da demanda por atendimentos domiciliares de pacientes acamados e em cuidados paliativos. Diante de limitações de recursos humanos e materiais e com sobrecarga evidente da equipe, qual seria a melhor conduta para otimizar a gestão de recursos e garantir a continuidade e a qualidade assistencial?',
    options: [
      '(A) Interromper provisoriamente os atendimentos domiciliares para os pacientes em cuidados paliativos e priorizar as intercorrências agudas na UBS.',
      '(B) Reorganizar o processo de trabalho com base em critérios de vulnerabilidade e complexidade dos casos, articulando com a rede de apoio e pactuando fluxos entre UBS e domicílio.',
      '(C) Ampliar a agenda de atendimentos domiciliares para toda a equipe, incluindo médicos, mesmo sem reorganizar os fluxos de atendimento ou estratificação de risco.',
      '(D) Solicitar remanejamento de profissionais de outras áreas da atenção secundária, sem envolver a equipe multiprofissional na tomada de decisão.'
    ],
    correctAnswer: 1,
    explanation: 'A otimização de equipes exauridas sob demandas crônicas deve utilizar matrizes de estratificação de risco e vulnerabilidade territorial, reorganizando as ordens prioritárias de fluxo de visitas e conexões com a rede intersetorial.',
    commentary: 'Abandonar ou preterir visitas aos pacientes sob dor paliativa agride frontalmente determinantes éticos de dignidade de vida. Estender de forma desordenada a totalidade de escalas sem governança inviabiliza a conservação física funcional de recursos da unidade. Recomenda-se, portanto, a estratificação ativa de risco, definindo prioridades clínico-sociais compartilhadas continuamente com toda a equipe multiprofissional e integrando o suporte de cuidadores comunitários.',
    reference: 'Atenção Domiciliar no SUS: guia orientador, Ministério da Saúde, 2021; PNAB (Portaria nº 2.436/2017).',
    tags: ['atenção primária', 'gestão']
  },
  {
    id: 'tp2025-115',
    module: 'Saúde Coletiva',
    text: 'Durante uma consulta em uma UBS, um médico atende um paciente com suspeita de meningite meningocócica. Como o profissional deve proceder em relação à notificação da doença?',
    options: [
      '(A) Deve realizar a notificação em até 24 horas.',
      '(B) Aguardar os resultados laboratoriais e notificar, caso a doença seja confirmada.',
      '(C) Notificar se os sintomas persistirem por mais de 48 horas.',
      '(D) Encaminhar o paciente para um hospital, para que seja notificado.'
    ],
    correctAnswer: 0,
    explanation: 'A suspeita clínica fundamentada de Doença Meningocócica constitui uma emergência de saúde pública relevante, exigindo notificação compulsória imediata em janela de até 24 horas.',
    commentary: 'As meningites bacterianas agudas (como a cepa meningocócica) espalham-se celeremente por sprays aéreos de secreções orofaríngeas, exigindo profilaxia medicamentosa ágil de contatos domiciliares próximos com rifampicina/ceftriaxona. Portanto, a emissão do alerta da ficha de suspeita epidemiológica deve ocorrer em até 24 horas a partir do acolhimento original suspeito e independe de qualquer validação prévia de testes em laboratório.',
    reference: 'Ministério da Saúde, Guia de Vigilância em Saúde: Volume 1, 2024; Artigo 269 do Código Penal Brasileiro.',
    tags: ['notificação compulsória', 'infectologia']
  },
  {
    id: 'tp2025-116',
    module: 'Saúde Coletiva',
    text: 'Durante o atendimento em uma UBS, o médico da Equipe de Saúde da Família identifica que a unidade vem priorizando apenas pacientes com doenças crônicas graves, enquanto outros grupos, como gestantes e crianças, têm encontrado barreiras para agendamento de consultas. Considerando os princípios do Sistema Único de Saúde (SUS), qual deve ser a crítica correta do profissional em relação à situação descrita?',
    options: [
      '(A) A unidade está respeitando o princípio da equidade ao restringir atendimentos a pacientes com doenças crônicas graves.',
      '(B) A organização da agenda da UBS garante a integralidade da atenção ao priorizar condições mais graves.',
      '(C) A situação viola o princípio da universalidade, ao limitar o acesso de determinados grupos populacionais aos serviços de saúde.',
      '(D) A priorização de grupos com doenças crônicas está alinhada ao princípio da descentralização da gestão do SUS.'
    ],
    correctAnswer: 2,
    explanation: 'A imposição de filtros limitantes que impedem o acesso rotineiro de grupos específicos (gestantes e infância) à atenção básica fere o princípio ético-doutrinário da Universalidade do SUS.',
    commentary: 'O princípio da Universalidade exige assegurar que a totalidade da comunidade adscrita desfrute de canais acessíveis sem barreiras discriminatórias administrativas. Embora a Equidade endosse focar atenção qualificada sobre grupos de risco mais complexos sob estratificação de vulnerabilidades, ela jamais valida extinguir ou restringir as necessidades preventivas de outras coortes básicas comunitárias essenciais.',
    reference: 'Lei Orgânica da Saúde (Lei nº 8.080/1990); Política Nacional de Atenção Básica (PNAB).',
    tags: ['SUS', 'legislação']
  },
  {
    id: 'tp2025-117',
    module: 'Saúde Coletiva',
    text: 'A Febre Amarela (FA) silvestre é endêmica na Região Amazônica. De tempos em tempos, o vírus reemerge na região extra-amazônica, com surtos de magnitude e extensão variáveis. Assinale a alternativa que descreve corretamente os fatores de risco para a expansão das áreas de circulação do vírus da Febre Amarela, podendo, assim, afetar todas as regiões do país:',
    options: [
      '(A) Baixas temperaturas e baixa pluviosidade.',
      '(B) Sazonalidade, com maior incidência entre os meses de dezembro a maio, em decorrência das condições ambientais, climáticas e epidemiológicas no Brasil.',
      '(C) Circulação do vírus em região de alta sensibilidade para a vigilância de epizootias em primatas não humanos (PNH).',
      '(D) Taxas adequadas de coberturas vacinais para Febre Amarela.'
    ],
    correctAnswer: 1,
    explanation: 'O período sazonal brasileiro de maiores índices de temperatura e pluviosidade (dezembro a maio) amplifica as populações vetoriais, favorecendo a expansão geográfica e o derramamento viral para novas populações suscetíveis.',
    commentary: 'As arboviroses transmitidas por vetores florestais (como os mosquitos dos gêneros Haemagogus e Sabethes) estão intimamente associadas a condições tropicais úmidas de alto calor e umidade, as quais aumentam a sobrevida e velocidade replicativa do vírus nos insetos vetores. A vigilância atenta de epizootias e altas taxas vacinais protegem a população de surtos expansivos urbanos (Aedes aegypti).',
    reference: 'Guia de Vigilância em Saúde, 6ª ed, Ministério da Saúde, 2023.',
    tags: ['vigilância epidemiológica', 'zoologia e arboviroses']
  },
  {
    id: 'tp2025-118',
    module: 'Saúde Coletiva',
    text: 'Paciente com 60 anos, tem diagnóstico de diabetes mellitus tipo 2 há 10 anos, comparece à Unidade Básica de Saúde (UBS) para acompanhamento de rotina. Relata seguir em parte o tratamento medicamentoso, com dificuldades para manter uma dieta adequada. O exame físico mostra IMC de 29kg/m² e a glicemia de jejum está em 280mg/dL. Obedecendo os princípios do SUS e a organização da rede de atenção à saúde, qual é a conduta mais adequada para o manejo desse paciente?',
    options: [
      '(A) Solicitar internação hospitalar para controle glicêmico intensivo, independentemente da ausência de complicações agudas, com base no quadro clínico.',
      '(B) Encaminhar o paciente diretamente para endocrinologista na rede especializada para acompanhamento profissional, sem intervenções prévias na UBS.',
      '(C) Iniciar insulinoterapia de controle, devido ao quadro clínico agudo e orientar o paciente a retornar após 6 meses para novo acompanhamento.',
      '(D) Iniciar na UBS ajuste do plano terapêutico, educação em saúde (alimentação e atividade física) e agendamento de retorno em 30 dias para reavaliação.'
    ],
    correctAnswer: 3,
    explanation: 'A Atenção Primária constituirá a coordenadora principal do cuidado crônico do diabetes, exigindo plano integrado de ajustes de metas terapêuticas, aconselhamento multiprofissional alimentar e revisões curtas frequentes regulares.',
    commentary: 'Como o paciente mantem-se assintomático na ausência de sintomas cetoacidóticos graves evidentes, inexiste justificativa técnica para internação hospitalar ou encaminhamento precoce automático à média complexidade (endocrinologia), devendo a intervenção ocorrer integralmente na UBS. Um retorno distante em 6 meses com início isolado de insulina é perigoso em virtude do risco de hipoglicemia severa subitamente induzida e falta de acompanhamento de perto.',
    reference: 'Portaria nº 2.436/2017 (PNAB); Diretrizes SBD 2024 - Tratamento do DM2 no SUS.',
    tags: ['atenção primária', 'diabetes']
  },
  {
    id: 'tp2025-119',
    module: 'Saúde Coletiva',
    text: 'O médico do trabalho deve considerar aspectos coletivos e individuais para a promoção e proteção da saúde dos trabalhadores e a prevenção de doenças relacionadas ao ambiente de trabalho, devido a riscos e condições laborais. Descreva o manejo adequado para um trabalhador exposto a agentes químicos no ambiente industrial:',
    options: [
      '(A) O manejo adequado deve incluir a avaliação regular da saúde do trabalhador por meio de exames médicos periódicos, acompanhamento de possíveis sinais e sintomas de intoxicação e implementação de medidas de controle de risco no ambiente de trabalho, como ventilação adequada e redução da exposição.',
      '(B) O manejo adequado para trabalhadores expostos a agentes químicos deve ser apenas informativo, fornecendo materiais educativos sobre os riscos da exposição e orientando o uso de Equipamentos de Proteção Individual (EPIs), sem necessidade de intervenções clínicas periódicas.',
      '(C) O manejo adequado consiste em afastar o trabalhador imediatamente do ambiente de trabalho ao identificar qualquer sinal de intoxicação, sem a necessidade de acompanhamento médico ou tratamento, uma vez que o agente químico não oferece risco de longo prazo à saúde.',
      '(D) O manejo adequado envolve a realização de exames médicos apenas quando o trabalhador relatar sintomas de intoxicação, sem necessidade de medidas preventivas ou controle ambiental, já que os riscos são considerados baixos em ambientes industriais controlados.'
    ],
    correctAnswer: 0,
    explanation: 'O manejo médico-ocupacional eficaz associa o monitoramento epidemiológico clínico regular periódico individual dos trabalhadores à atuação nas melhorias de engenharia e controles sanitários dos ambientes laborais.',
    commentary: 'As normas legais regulamentadoras federais do trabalho (como a NR-7 PCMSO) impõem o controle e vigilância biológica contínua por indicadores analíticos em trabalhadores expostos a substâncias tóxicas. Condutas limitadas puramente à entrega de informativos ou reações médicas esporádicas apenas surgidos sinais tardios negligenciam a ocorrência crônica silenciosa de agravos profissionais de relevância legal e biomédica severa.',
    reference: 'Área Técnica de Saúde do Trabalhador, Ministério da Saúde; Norma Regulamentadora nº 7 (MTE - PCMSO).',
    tags: ['saúde do trabalhador', 'medicina ocupacional']
  },
  {
    id: 'tp2025-120',
    module: 'Saúde Coletiva',
    text: 'Um senhor de 80 anos faleceu em seu domicílio durante o sono. Os familiares desconhecem qualquer patologia ou tratamentos médicos prévios. No município onde residem, não há Serviço de Verificação de Óbito (SVO), somente o Instituto Médico-Legal (IML). Para que essa família possa iniciar os trâmites para a destinação do cadáver, solicitaram atendimento do Serviço de Atendimento Municipal de Urgência. Assinale a alternativa correta acerca da destinação desse cadáver pelo médico socorrista:',
    options: [
      '(A) O médico do SAMU não precisa verificar os sinais de ocorrência do óbito e, por ter histórico de morte natural, pode oferecer a emissão da Declaração de Óbito, mediante remuneração pela emissão do documento.',
      '(B) O médico socorrista deve verificar os sinais de ocorrência do óbito e, por ter histórico de morte natural, deve emitir guia de encaminhamento de cadáver para a autoridade policial local, para que esta destine o cadáver ao IML.',
      '(C) O médico socorrista deve verificar os sinais de ocorrência do óbito e, por ter histórico de morte natural, deve emitir guia de encaminhamento de cadáver para a autoridade policial local, ou pode emitir a Declaração de Óbito (D.O.).',
      '(D) O médico do SAMU não precisa verificar os sinais de ocorrência do óbito e, por ter histórico de morte natural, deve emitir guia de encaminhamento de cadáver para a autoridade policial local, para que esta destine o cadáver ao SVO da Capital.'
    ],
    correctAnswer: 2,
    explanation: 'Em mortes domiciliares naturais ocorridas fora da assistência médica e em cidades sem SVO, o médico do socorro que confirmou o falecimento deve atestar fisicamente o óbito, podendo preencher a Declaração de Óbito (D.O.) ou acionar o encaminhamento à polícia civil para emissão do obituário por médico de serviço público municipal.',
    commentary: 'O IML possui competência restrita ao diagnóstico necroscópico pericial das mortes ocasionadas por causas externas (traumáticas ou violentas suspicazes). Em episódios naturais de doente sem assistência em município desprovido de rede de SVO, o preenchimento da Declaração de Óbito (D.O.) recai idealmente sobre o médico que constatou presencialmente o óbito (inclusive do SAMU), sendo vedada qualquer cobrança pecuniária adicional por emissão de atestados de falecimentos públicos. Caso subsistam questionamentos, orienta-se o encaminhamento oficial do cadáver à autoridade policial para exames complementares de perícia básica por peritos indicados municipais.',
    reference: 'Portaria MS nº 116 de 2009; Manual de Preenchimento da Declaração de Óbito, CREMESP, 2023; Resolução SS nº 229, 2024.',
    tags: ['medicina legal', 'bioética']
  },
  {
    id: 'tp2021-101',
    module: 'Saúde Coletiva',
    text: 'Homem, 23 anos, em situação de rua, ensino fundamental incompleto, aos 18 anos abandonou sua família devido ao uso de crack e outras drogas ilícitas. Apresentou quadro associado de esquizofrenia residual sendo acompanhado pela equipe de apoio à saúde mental, numa política de redução de danos, compartilhada à unidade básica de saúde. Com tosse persistente há mais de um mês, a equipe de consultório de rua o orientou para realizar exame de baciloscopia de escarro na unidade, diagnosticando-se tuberculose. A melhor conduta é:',
    options: [
      '(A) solicitar internação hospitalar compulsória para tratamento diretamente supervisionado.',
      '(B) encaminhar para a equipe de consultório de rua que fará o tratamento diretamente observado sob supervisão da unidade.',
      '(C) buscar a família do paciente para se responsabilizar pelo tratamento supervisionado no domicílio.',
      '(D) impor abstinência do uso de drogas e encaminhar para tratamento diretamente observado em abrigo ou albergue do município.'
    ],
    correctAnswer: 1,
    explanation: 'A conduta prioritária e mais adequada de acordo com as políticas do Ministério da Saúde para pessoas em situação de rua com tuberculose é realizar o Tratamento Diretamente Observado (TDO) compartilhado com as equipes de Consultório na Rua (eCR) e a Unidade Básica de Saúde, buscando o vínculo com o usuário, sem imposição de abstinência de álcool ou drogas.',
    commentary: 'O tratamento diretamente observado (TDO) é recomendado para todas as pessoas em situação de rua (PSR) e pode ser realizado na unidade de saúde, in loco e nos equipamentos sociais, pelas equipes de consultório na rua e/ou das UBSs. Não se deve subordinar o tratamento à internação compulsória ou à exigência/imposição de abstinência, o que viola as abordagens de Redução de Danos e rompe o vínculo de cuidado.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil. Brasília: Ministério da Saúde, 2019.',
    tags: ['tuberculose', 'consultório na rua', 'redução de danos']
  },
  {
    id: 'tp2021-102',
    module: 'Saúde Coletiva',
    text: 'Caso A: paciente que, independentemente da idade e da situação vacinal, apresenta febre e exantema maculopapular acompanhados de um ou mais dos seguintes sinais e sintomas: tosse e/ou coriza e/ou conjuntivite. Caso B: paciente com quadro discreto de febre moderada, de início súbito, que dura de 2 a 3 dias, e sintomas generalizados inespecíficos (astenia, adinamia, anorexia, cefaleia e outros) e erupção cutânea papulovesicular, que se inicia na face, couro cabeludo ou tronco. Os casos A e B apresentam, respectivamente, características de casos suspeitos de:',
    options: [
      '(A) Rubéola e varicela.',
      '(B) Sarampo e rubéola.',
      '(C) Rubéola e sarampo.',
      '(D) Sarampo e varicela.'
    ],
    correctAnswer: 3,
    explanation: 'O Caso A descreve o quadro sindrômico clássico suspeito de Sarampo (febre + exantema maculopapular acompanhados de sintomas respiratórios/oculares). O Caso B descreve a Varicela ou catapora (febre moderada de início súbito com erupção papulovesicular polimórfica que se inicia na face, couro cabeludo ou tronco).',
    commentary: 'Caso suspeito de sarampo: febre e exantema maculopapular, acompanhados de tosse/coriza/conjuntivite. Caso suspeito de varicela: febre moderada, pródromos inespecíficos seguidos de erupção papulovesicular típica (vesículas com halo eritematoso, que evoluem para crostas). Caso suspeito de rubéola envolve febre, exantema e linfoadenopatia retroauricular/occipital/cervical.',
    reference: 'Guia de Vigilância em Saúde, Ministério da Saúde.',
    tags: ['vigilância epidemiológica', 'doenças exantemáticas']
  },
  {
    id: 'tp2021-103',
    module: 'Saúde Coletiva',
    text: 'Homem, 40 anos, recém separado, dois filhos adolescentes, torneiro mecânico, desempregado há 1 ano, tabagista, hipertensão não controlada, uso abusivo de álcool, procura atendimento na Unidade Básica de Saúde devido a episódio de síncope seguido por crise convulsiva. Refere pai falecido por AVC e mãe por complicações do diabetes mellitus. Após avaliação clínica e definição das suas necessidades de saúde seu caso foi escolhido para elaboração de um projeto terapêutico singular com a participação da equipe de saúde da família e do matriciamento da psiquiatria. De acordo com as etapas do projeto terapêutico singular o passo seguinte deverá definir:',
    options: [
      '(A) Um coordenador para o projeto.',
      '(B) Os momentos de reavaliação.',
      '(C) As metas e as responsabilidades.',
      '(D) Os encaminhamentos necessários.'
    ],
    correctAnswer: 2,
    explanation: 'Na elaboração do Projeto Terapêutico Singular (PTS), após o diagnóstico inicial (avaliação orgânica, psicológica e social), a etapa imediata subsequente consiste na definição de metas (propostas de curto, médio e longo prazo) e na divisão de responsabilidades/tarefas específicas de cada membro da equipe de saúde e do próprio usuário.',
    commentary: 'O PTS é estruturado tradicionalmente em quatro momentos: 1) Diagnóstico (análise da situação singular e de vulnerabilidades); 2) Definição de metas (negociação de propostas com o sujeito); 3) Divisão de responsabilidades (atribuição de tarefas claras para cada integrante); 4) Reavaliação periódica (discussão da evolução e mudanças no plano de cuidado). O passo subsequente ao diagnóstico engloba a definição de metas e responsabilidades.',
    reference: 'BRASIL. Ministério da Saúde. Clínica ampliada, equipe de referência e projeto terapêutico singular. 2. ed. Brasília: Ministério da Saúde, 2007.',
    tags: ['atenção primária', 'PTS', 'projeto terapêutico singular']
  },
  {
    id: 'tp2021-104',
    module: 'Saúde Coletiva',
    text: 'Mulher, 67 anos, PA = 160 x 90 mmHg, informa que é hipertensa e diabética há cerca de 10 anos. Teve infarto anterior do miocárdio (IAM) há dois anos. É tabagista e sedentária. O médico de família decide fazer a estratificação de risco cardiovascular, para definir sua estratégia de acompanhamento. O risco cardiovascular e o plano de cuidado a ser adotado, são respectivamente:',
    options: [
      '(A) Risco moderado; mudança de estilo de vida e tratamento não medicamentoso.',
      '(B) Risco baixo; mudança de estilo de vida e tratamento não medicamentoso.',
      '(C) Risco alto; mudança de estilo de vida e tratamento medicamentoso.',
      '(D) Risco baixo; mudança de estilo de vida e tratamento medicamentoso.'
    ],
    correctAnswer: 2,
    explanation: 'Visto que a paciente possui diagnóstico estabelecido de diabetes mellitus associado a uma lesão em órgão-alvo em consequência de evento cardiovascular prévio (Infarto Agudo do Miocárdio), o seu risco cardiovascular é obrigatoriamente estratificado como Alto. Portanto, as diretrizes vigentes apontam para a implementação imediata de mudanças de estilo de vida (tratamento não medicamentoso) associada ao tratamento medicamentoso apropriado.',
    commentary: 'A classificação de Alto Risco Cardiovascular é compulsória na presença de doença cardiovascular clinicamente manifesta (como infarto prévio), lesão de órgão-alvo ou diabetes complicado. O plano de atenção à saúde para portadores de risco cardiovascular elevado deve, indubitavelmente, coordenar ampla intervenção farmacológica contínua em paralelo a mudanças dietéticas e de atividade física.',
    reference: 'Diretrizes Brasileiras de Hipertensão Arterial, SBC, 2020; Caderno de Atenção Básica nº 14, Prevenção Clínica de Doenças Cardiovasculares, Ministério da Saúde.',
    tags: ['risco cardiovascular', 'hipertensão', 'diabetes']
  },
  {
    id: 'tp2021-105',
    module: 'Saúde Coletiva',
    text: 'Homem, caminhoneiro, procura a UBS local para receber a vacina contra febre amarela. A restrição que se impõe para que este homem não seja vacinado é:',
    options: [
      '(A) Idade acima de 50 anos.',
      '(B) Portador de HIV/AIDS assintomático.',
      '(C) Asma leve/moderada.',
      '(D) Contagem de LT-CD4+ < 200 células/mm³.'
    ],
    correctAnswer: 3,
    explanation: 'A vacina contra febre amarela é produzida a partir de virus vivo atenuado. Portanto, tem contraindicação formal e absoluta em pacientes com imunossupressão grave, incluindo indivíduos portadores de HIV com contagem de linfocitos T-CD4+ inferior a 200 células/mm³.',
    commentary: 'Pacientes assintomáticos com infecção pelo vírus HIV e reserva imunológica mantida (CD4+ > 350 ou > 200 de forma ponderada) podem receber a imunização de febre amarela quando em áreas com recomendação ou trânsito necessário. A imunodeficiência grave (CD4 < 200) impõe restrição imediata pela possibilidade teórica de replicação vacinal descontrolada (doença viscero- ou neurotrópica pós-vacinação).',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Febre amarela: guia para profissionais de saúde. Brasília: Ministério da Saúde, 2018.',
    tags: ['imunização', 'contraindicações', 'febre amarela']
  },
  {
    id: 'tp2021-106',
    module: 'Saúde Coletiva',
    text: 'O resgate e cuidado integral das pessoas vulneráveis como: crianças, portadores de transtornos mentais, idosos, doentes em fase terminal ou em estado vegetativo persistent, devem ser garantidos por meio de mecanismos de proteção. Qual o mecanismo prioritário que atua como forma de superação de vulnerabilidade?',
    options: [
      '(A) Acolhimento.',
      '(B) Matriciamento.',
      '(C) Ambiência.',
      '(D) Gestão do cuidado.'
    ],
    correctAnswer: 0,
    explanation: 'O acolhimento é um dos eixos mais substanciais da Política Nacional de Humanização (PNH) e constitui o mecanismo e postura prioritários para a identificação, recepção qualificada e superação das condições de vulnerabilidade no SUS.',
    commentary: 'De acordo com as diretrizes de humanização do Ministério da Saúde, o acolhimento não se restringe a uma triagem de recepção, mas sim a uma postura ética e estética de compromisso com a fragilidade humana e a superação da vulnerabilidade social ou clínica, amparando os indivíduos e promovendo a integralidade nas relações no SUS.',
    reference: 'Brasil. Ministério da Saúde. Acolhimento na gestão e o trabalho em saúde. Brasília: Ministério da Saúde, 2016.',
    tags: ['humanização', 'acolhimento', 'PNH']
  },
  {
    id: 'tp2021-107',
    module: 'Saúde Coletiva',
    text: 'Foi instalada uma nova equipe de Estratégia de Saúde da família em uma área de risco. A equipe iniciou o trabalho percorrendo área, fazendo o levantamento dos recursos disponíveis, possíveis barreiras ao acesso e cadastrando os residentes da área. Que princípios norteadores da Estratégia de Saúde da Família foram utilizados nesse trabalho?',
    options: [
      '(A) Territorialização e adscrição da clientela.',
      '(B) Hierarquização e integralidade.',
      '(C) Equidade e caráter substitutivo.',
      '(D) Referência e contrarreferência.'
    ],
    correctAnswer: 0,
    explanation: 'O processo de percorrer e mapear a área geográfica delimitada de atuação da equipe (definindo barreiras, vulnerabilidades e recursos) e identificar e cadastrar os habitantes da localidade caracteriza de maneira explícita os princípios norteadores de territorialização e adscrição da clientela.',
    commentary: 'No âmbito organizacional da Atenção Primária no Brasil, a territorialização define a área geográfica de corresponsabilidade da ESF e o mapeamento locorregional. Conectado a ela, a adscrição consagra o vínculo e responsabilidade permanente sobre uma população específica descrita (indivíduos cadastrados vinculados ao serviço no território demarcado).',
    reference: 'PNAB - Política Nacional de Atenção Básica, Portaria nº 2.436/2017.',
    tags: ['estratégia saúde da família', 'territorialização', 'princípios do SUS']
  },
  {
    id: 'tp2021-108',
    module: 'Saúde Coletiva',
    text: 'No primeiro mês de epidemia de febre amarela, registraram-se 20 casos numa comunidade indígena composta por 500 indivíduos. No mesmo período, 5 índios morreram em consequência da doença. As taxas de ataque/incidência, de mortalidade e de letalidade dessa doença neste período, considerando a base de 100 indivíduos, foram respectivamente de:',
    options: [
      '(A) 4; 1; 25',
      '(B) 25; 1; 4',
      '(C) 4; 25; 1',
      '(D) 25; 4; 1'
    ],
    correctAnswer: 0,
    explanation: 'As taxas calculadas em porcentagem (base de 100 indivíduos) são:\n1) Taxa de ataque (incidência no surto) = (20 casos / 500 expostos) * 100 = 4%.\n2) Taxa de mortalidade = (5 óbitos / 500 indivíduos sob risco) * 100 = 1%.\n3) Taxa de letalidade = (5 óbitos / 20 doentes) * 100 = 25%.',
    commentary: 'Os coeficientes epidemiológicos medem distintos atributos da doença:\n- Taxa de Ataque estima a incidência cumulativa numa população exposta síncrona durante período epidêmico: 20/500 = 0,04 (ou 4%).\n- Taxa de Mortalidade estima a proporção absoluta sobre a população exposta total de quem veio a morrer daquela causa: 5/500 = 0,01 (ou 1%).\n- Taxa de Letalidade avalia o potencial de gravidade ou agressividade clínica do agravo (óbitos entre os doentes aferidos): 5/20 = 0,25 (ou 25%).',
    reference: 'ROUQUAYROL, M. Z. & GURGEL, M. Epidemiologia & saúde. 7. ed. Rio de Janeiro: Medbook, 2013.',
    tags: ['epidemiologia', 'coeficientes de saúde', 'febre amarela']
  },
  {
    id: 'tp2021-109',
    module: 'Saúde Coletiva',
    text: 'Um estudo investigou a associação entre o primeiro registro do índice de massa corporal (IMC) e a sobrevida até o diagnóstico, de 22 tipos de cânceres de localizações mais comuns em população registrada em banco de dados de atendimento clínico no Reino Unido. Após 12 meses do início, até três anos, a sobrevida foi comparada entre os grupos de pacientes com diferentes faixas de IMC. Observou-se associação positiva entre IMC e vários tipos de câncer. (Bhaskaran et al. Lancet 2014). O delineamento do estudo foi:',
    options: [
      '(A) Ecológico.',
      '(B) Coorte.',
      '(C) Caso-controle.',
      '(D) Transversal.'
    ],
    correctAnswer: 1,
    explanation: 'A pesquisa parte de um fator de exposição documentado (IMC) de uma base de indivíduos inicialmente sem desfecho oncológico e os acompanha de maneira longitudinal ao longo de um intervalo temporal definido, estimando e comparando o risco de sobrevida/diagnóstico do desfecho (vários subtipos de câncer). Trata-se, portanto, de um estudo de Coorte.',
    commentary: 'Na epidemiologia, o estudo de coorte é observacional e tipicamente longitudinal prospectivo ou histórico. A sua marca conceitual essencial e inconteste é a cronologia metodológica fundada na seleção de participantes pautada no status de exposição (exposição inicial etc.) com posterior monitoramento para documentar incidência diferencial de desfechos na comparação dos grupos.',
    reference: 'MEDRONHO, R.A. Epidemiologia. Rio de Janeiro: Atheneu, 2a Ed. 2009.',
    tags: ['metodologia científica', 'estudo de coorte', 'epidemiologia']
  },
  {
    id: 'tp2021-110',
    module: 'Saúde Coletiva',
    text: 'Durante uma comemoração em um restaurante, onde estavam presentes mais de 100 pessoas, entre 2 e 4 horas após o almoço, mais de 80% dos convidados que ingeriram maionese de batatas apresentam náuseas, vômitos e diarreia. Considerando as características de uma epidemia, podemos afirmar sobre o caso relatado:',
    options: [
      '(A) É um exemplo típico de epidemia progressiva, por se tratar de uma intoxicação alimentar em que vários indivíduos foram rapidamente contaminados.',
      '(B) É um exemplo típico de epidemia por fonte comum pontual, em que os suscetíveis tiveram acesso direto a uma única fonte de contaminação por um curto espaço de tempo.',
      '(C) Que por estar localizado em um local restrito como um restaurante, não pode ser classificado como surto epidêmico.',
      '(D) Que não pode ser classificado como epidemia devido ao tempo extremamente curto entre a exposição e o desfecho.'
    ],
    correctAnswer: 1,
    explanation: 'O evento descrito ilustra uma epidemia por fonte comum de caráter pontual (intoxicação alimentar clássica ocorrendo simultaneamente em indivíduos expostos sincronicamente a uma refeição restrita compartilhada contaminada em intervalo brevíssimo e localizado de tempo).',
    commentary: 'As epidemias temporais distinguem-se em dois principais perfis formativos:\n- Fonte Comum Pontual: os expostos deparam-se simultaneamente com um mesmo agente transmissor num mesmo lapso temporal (ex: maionese contaminada em restaurante).\n- Epidemia Progressiva/Propagada: a transmissão decorre no encadeamento de pessoa para pessoa por via respiratória, de contato ou vetorial, sem origem pontual simultânea única compartilhada de alimento/exposição.',
    reference: 'ROUQUAYROL, M. Z. & ALMEIDA, N. Epidemiologia e Saúde. 7ª Edição, p. 110-112.',
    tags: ['vigilância epidemiológica', 'surtos', 'doenças de veiculação alimentar']
  },
  {
    id: 'tp2021-111',
    module: 'Saúde Coletiva',
    text: 'Mulher, 58 anos, hipertensa e diabética há 12 anos. Procurou a emergência do hospital, onde se diagnosticou angina instável e diabetes descompensado. Foi internada e, após estabilização clínica, recebeu orientação para acompanhamento médico na Unidade Básica de Saúde. No atendimento da unidade, ela teve suas medicações para o tratamento do diabetes ajustadas, as prescrições de diferentes profissionais foram organizadas em apenas uma prescrição e foi referenciada para o oftalmologista. Dentre os atributos da Atenção Primária à Saúde, o que está melhor exemplificado no atendimento desta senhora é:',
    options: [
      '(A) Longitudinalidade.',
      '(B) Orientação comunitária.',
      '(C) Coordenação do cuidado.',
      '(D) Competência cultural.'
    ],
    correctAnswer: 2,
    explanation: 'A coordenação do cuidado refere-se à habilidade da APS de exercer a integração das informações dos pacientes e coordenar os fluxos entre diferentes serviços, integrando alta hospitalar, readequação medicamentosa unificada e referenciamento articulado à rede especializada.',
    commentary: 'O atributo da Coordenação do Cuidado é essencialmente exemplificado no ajuste integrado de condutas prescritas por equipes terciárias ou secundárias de saúde, unificação de receitas farmacológicas conflitantes a fim de evitar interações deletérias e gerenciamento eficaz do retorno à UBS com novos encaminhamentos direcionados (ex: oftalmologista da rede pública).',
    reference: 'STARFIELD, B. Atenção Primária: equilíbrio entre necessidades de saúde, tecnologia e insumos. Brasília: UNESCO/Ministério da Saúde, 2002.',
    tags: ['atenção primária', 'atributos da APS', 'qualidade de assistência']
  },
  {
    id: 'tp2021-112',
    module: 'Saúde Coletiva',
    text: 'Embora a expectativa de vida da população brasileira venha aumentando nas últimas décadas, preocupam as autoridades sanitárias os níveis elevados de mortalidade de adolescentes masculinos, na faixa etária entre 13 e 19 anos, nos grandes e médios centros urbanos. As ações de maior impacto potencial, a curto prazo, para a diminuição da mortalidade desta população devem estar centradas em:',
    options: [
      '(A) Aumento das ações intersetoriais contra drogas e contra a violência.',
      '(B) Aumento das campanhas de uso de preservativo masculino.',
      '(C) Elevação da renda per capita da população.',
      '(D) Melhoria das condições de saneamento básico.'
    ],
    correctAnswer: 0,
    explanation: 'A principal causa de mortalidade em jovens e adolescentes masculinos no meio urbano brasileiro é constituída por causas externas (homicídios, acidentes de trânsito violento e violências interpessoais). Intervenções intersetoriais integradas direcionadas ao controle da criminalidade, violência urbana e consumo abusivo de entorpecentes/drogas são, portanto, as opções com maior ptencial de retorno e impacto imediato.',
    commentary: 'As causas externas constituem a grande e alarmante epidemia na saúde dos jovens brasileiros, superando infinitamente patologias infecciosas transmissíveis ou crônicas na faixa etária juvenil. Por tal característica, o amparo a este público transborda o espectro estrito de atuação do setor de saúde, demandando políticas territoriais intersetoriais articuladas de segurança, assistência social, lazer e redução de violência.',
    reference: 'BEAGLEHOLE, R.; BONITA, R.; KJELLSTRÖM, T. Epidemiologia básica. 2 ed. São Paulo: Santos / OMS, 2010.',
    tags: ['saúde do adolescente', 'causas externas', 'vulnerabilidade social']
  },
  {
    id: 'tp2021-113',
    module: 'Saúde Coletiva',
    text: 'É CORRETO afirmar que uma doença está “eliminada” quando:',
    options: [
      '(A) Não mais existir o risco de infecção ou doença, mesmo na ausência de vacinação ou qualquer outra medida de controle, sendo inclusive indicada a suspensão da vigilância.',
      '(B) Sua incidência e/ou prevalência se encontra em níveis muito baixos, de forma que ela deixe de ser considerada um problema importante em saúde pública.',
      '(C) Não mais existir o risco de transmissão, mesmo na ausência de medidas de prevenção, vacinação ou qualquer outra medida de controle.',
      '(D) Ocorre a cessação da sua transmissão em extensa área geográfica, persistindo, no entanto, o risco de sua reintrodução.'
    ],
    correctAnswer: 3,
    explanation: 'Eliminação significa que a transmissão da doença foi interrompida em uma área geográfica ampla específica devido a medidas contínuas, contudo, ainda subsiste o risco persistente de reintrodução de casos externos (importados), demandando a manutenção contínua de ações de vigilância epidemiológica e profilaxia.',
    commentary: 'Diferentemente da Erradicação (que define o encerramento em âmbito global e permanente dos casos e do próprio patógeno do planeta, possibilitando descontinuidade total de medidas preventivas, como vacinas, a exemplo histórico da varíola), a eliminação demanda que o complexo de vigilância e prevenção persista de maneira vigilante, face ao risco residual do retorno do patógeno a partir de nações limítrofes.',
    reference: 'WALDMAN, E.A. Vigilância em saúde pública. São Paulo: Fundação Petrópolis, 1998.',
    tags: ['transmissão e controle de doenças', 'erradicação e eliminação']
  },
  {
    id: 'tp2021-114',
    module: 'Saúde Coletiva',
    text: 'Homem, 30 anos, solteiro, vida sexual ativa e com diferentes parceiras nos últimos cinco anos, sem uso de preservativo na maioria das relações, encontra-se assintomático, porém com exame VDRL positivo (1:8) e teste rápido treponêmico reagente. Além das orientações sobre acolhimento/esclarecimento às parceiras, a conduta farmacológica é:',
    options: [
      '(A) Penicilina G. Benzatina 7.200.000 UI (3 doses de 2.400.000 – semanal, por 3 semanas).',
      '(B) Penicilina G. Benzatina 2.400.000 UI (dose única), repetir o exame após um ano.',
      '(C) Penicilina G. Benzatina 1.200.000 UI (dose única), repetir o exame após um ano, pois o VDRL é inespecífico para o Treponema pallidum.',
      '(D) Penicilina G. Benzatina 4.800.000 UI (2 doses de 2.400.000 – semanal, por 2 semanas), controle de cura semestral por meio do FTA-Abs.'
    ],
    correctAnswer: 0,
    explanation: 'Diante de diagnóstico sorológico de sífilis assintomática de duração desconhecida (latente tardia ou latente indeterminada), o tratamento padrão do Ministério da Saúde consiste na administração intramuscular de Penicilina G Benzatina na dosagem total de 7.200.000 UI, dividida em três doses semanais consecutivas de 2.400.000 UI.',
    commentary: 'O VDRL reagente quantitativo associado a teste confirmatório treponêmico (teste rápido ou FTA-Abs) em adulto assintomático sem histórico de exames prévios ou lesões recentes enquadra-se no diagnóstico de Sífilis Latente Tardia/Indeterminada. O tratamento de 3 semanas é preconizado devido ao desconhecimento e provável persistência cronológica do patógeno Treponema pallidum nos compartimentos corpóreos.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST), Ministério da Saúde, 2020.',
    tags: ['IST', 'sífilis', 'PCDT']
  },
  {
    id: 'tp2021-115',
    module: 'Saúde Coletiva',
    text: 'No que diz respeito à Mortalidade Infantil, os impactos do programa nacional de Imunização (PNI) podem ser observados por meio da redução da taxa de mortalidade no período:',
    options: [
      '(A) Neonatal precoce.',
      '(B) Perinatal.',
      '(C) Pós-neonatal.',
      '(D) Neonatal tardio.'
    ],
    correctAnswer: 2,
    explanation: 'O período pós-neonatal (compreendido entre o 28º dia e o 364º dia completo de vida da criança) é marcadamente influenciado por determinantes sociais e ambientais modificáveis, no qual as infecções imunopreveníveis (coqueluche, meningite, diarreias etc.) têm elevadíssima taxa histórica. Portanto, os impactos do PNI e ampliação de coberturas vacinais reduzem com maior fidedignidade a mortalidade pós-neonatal.',
    commentary: 'A mortalidade infantil fraciona-se em períodos determinantes:\n- Período Perinatal ou Neonatal Precoce (até o 6º dia): depende de forma mais expressiva de amparo de ginecologia-obstetrícia intraparto, genética, prematuridade ao nascimento, pré-natal, etc.\n- Período Pós-Neonatal: reflete as condições básicas sanitárias de vida familiar, oferta nutricional, acesso hospitalar primário e, decisivamente, cobertura vacinal protetiva contra infecções infantis endêmicas.',
    reference: 'Guia de Indicadores de Saúde e IDB, Ministério da Saúde/DATASUS.',
    tags: ['mortalidade infantil', 'imunização', 'saúde da criança']
  },
  {
    id: 'tp2021-116',
    module: 'Saúde Coletiva',
    text: 'Considerando as recomendações sobre a saúde do idoso do Ministério da Saúde, assinale a ação preventiva que deve ser indicada para todos os idosos.',
    options: [
      '(A) Vacinação anual antipneumocócica após 65 anos.',
      '(B) Vacinação anual contra Influenza após 60 anos.',
      '(C) Rastreamento com densitometria óssea após 60 anos.',
      '(D) Rastreamento com teste de esforço após 70 anos.'
    ],
    correctAnswer: 1,
    explanation: 'Pelo PNI e diretrizes de saúde do idoso do Brasil, a imunização anual preventiva contra o vírus Influenza (Gripe) é indicada para toda a população de idosos com idade igual ou superior a 60 anos.',
    commentary: 'A vacina de influenza é de ampla escala populacional universal. Diferentemente, a vacina antipneumocócica possui indicações mais restritas a subgrupos de risco específicos ou imunocomprometidos. O rastreio universal de osteoporose por densitometria óssea é recomendado somente a mulheres após os 65 anos ou de forma baseada em riscos individuais de fraturas antes dessa idade.',
    reference: 'Diretrizes para o Cuidado das Pessoas Idosas no SUS, Ministério da Saúde.',
    tags: ['saúde do idoso', 'imunização', 'ações preventivas']
  },
  {
    id: 'tp2021-117',
    module: 'Saúde Coletiva',
    text: 'Homem, 81 anos, foi levado ao ambulatório pelo neto por ter sofrido várias quedas da própria altura no último ano, logo após se levantar pela manhã. É portador de diabetes mellitus há 12 anos e refere uso de Diazepam 10 mg todas as noites. Para prevenção efetiva de novas quedas deve-se:',
    options: [
      '(A) Usar esteroides para ganho de massa magra.',
      '(B) Prescrever fludrocortisona para a hipotensão ortostática.',
      '(C) Prescrever polivitamínicos para melhorar a força muscular.',
      '(D) Retirar gradativamente o benzodiazepínico.'
    ],
    correctAnswer: 3,
    explanation: 'A utilização de benzodiazepínicos (como o Diazepam) de meia-vida longa em idosos de faixa etária avançada é fator de risco clássico e modificável de maior relevância para ocorrência de episódios graves de instabilidade postural, sonolência residual, comprometimento cognitivo e quedas recorrentes. A conduta preventiva imediata e mais efetiva consiste no desmame gradual do psicotrópico.',
    commentary: 'De acordo com os Critérios de Beers para prescrições potencialmente inapropriadas em idosos, os benzodiazepínicos de longa duração devem ser proscritos pelo aumento drástico de quedas e confusão. Prescrever medicamentos para conter efeitos deletérios do diazepam sem sua retirada prévia gera o fenômeno de Cascata Iatrogênica.',
    reference: 'Critérios de Beers, American Geriatrics Society (AGS); FREITAS, E. V. & PY, L. Tratado de Geriatria e Gerontologia. 3ª Ed.',
    tags: ['saúde do idoso', 'polifarmácia', 'segurança do paciente']
  },
  {
    id: 'tp2021-118',
    module: 'Saúde Coletiva',
    text: 'Adolescente, 16 anos, G1P1, comparece à primeira consulta de sua filha, nascida há 10 dias. Queixa-se de que a criança chora muito, apesar de amamentá-la o dia todo. Parto a termo, via vaginal, sem complicações. PN = 2.900 g, APGAR 9/10. Após avaliação da dupla mãe-bebê, constatou-se: mãe com as mamas túrgidas, bebê com peso de 2.610 g. A orientação neste momento será:',
    options: [
      '(A) Introduzir o aleitamento misto porque o bebê teve perda de peso maior que o esperado.',
      '(B) Oferecer leite materno ordenhado e com suplementação energética.',
      '(C) Prescrever medicamento para as cólicas, causa provável do choro.',
      '(D) Manter o aleitamento materno exclusivo após revisão da técnica.'
    ],
    correctAnswer: 3,
    explanation: 'A perda ponderal do bebê de 10 dias (2.610 g em relação ao peso de nascimento de 2.900 g) representa um decréscimo de exatos 10%, o que situa-se estritamente no intervalo fisiológico máximo aceito para os primeiros 10 dias de vida pós-natal. Visando preservar a barreira imunológica e os benefícios nutricionais exclusivos, deve-se orientar e manter o aleitamento materno exclusivo, revisando e corrigindo eventuais falhas nas técnicas de pega e posicionamento no peito.',
    commentary: 'O aleitamento sob livre demanda em mamas túrgidas na perimenarca materna pode cursar com fadiga ou choro do recém-nascido se a apojadura e a pega/posicionamento não estiverem gerando esvaziamento efetivo e saciedade do lactente. Não há indicações clínicas que justifiquem fórmulas infantis substitutas, visto que o decréscimo ponderal é inteiramente fisiológico até 10 dias de vida (esperando-se recuperação ponderal de nascimento até 14 dias).',
    reference: 'Guia Alimentar para Crianças Brasileiras Menores de 2 anos, Ministério da Saúde, 2021.',
    tags: ['puericultura', 'aleitamento materno', 'desenvolvimento infantil']
  },
  {
    id: 'tp2021-119',
    module: 'Saúde Coletiva',
    text: 'Gestante, 23 anos, na 35ª semana, em tratamento antirretroviral há 7 anos, sendo os últimos 3 anos em resgate. Nesta segunda gestação, apresentou efeitos adversos à Zidovudina, interrompeu todos os medicamentos e abandonou o pré-natal. Deu entrada na Unidade de Urgência com quadro de sangramento vaginal, falta de ar e dores intensas em baixo ventre. Apresentava-se em mau estado geral e evoluiu com dispneia importante, saturação de O₂ = 60%, necessitando de intubação orotraqueal, vindo a falecer após três horas. Aspirado pulmonar com BAAR positivo, radiografia de tórax com processo intersticial (miliar) e hemograma com anemia. O preenchimento correto da Declaração de Óbito é:',
    options: [
      '(A) Parte I: a – Tuberculose Pulmonar; b – HIV; c – Gestação na 35ª semana. Parte II: Insuficiência Respiratória Aguda.',
      '(B) Parte I: a – Insuficiência Respiratória Aguda; b – Tuberculose Pulmonar; c – AIDS; Parte II: Gestação na 35ª semana.',
      '(C) Parte I: a – Insuficiência Respiratória Aguda; b – Tuberculose Pulmonar; c – Gestação na 35ª semana; Parte II: HIV.',
      '(D) Parte I: a – Tuberculose pulmonar; b – Insuficiência Respiratória; c – Gestação na 35ª semana; Parte II: AIDS.'
    ],
    correctAnswer: 1,
    explanation: 'Na Declaração de Óbito (D.O.), a Parte I é destinada à cadeia causal direta em ordem retrógrada (causa imediata na linha superior \'a\', causas intervenientes nas linhas intermediárias \'b\'/\'c\' e a causa básica determinante na linha inferior \'d\'). Na paciente, a sequência causal fisiopatológica imediata é: \'a\' Insuficiência respiratória aguda, causada por \'b\' Tuberculose pulmonar de aspecto militar, decorrente de imunodeficiência severa causada por \'c\' Infecção por HIV/AIDS em virtude de abandono terapêutico antirretroviral. A condição gravídica atual do falecimento, embora importante, não faz parte da cadeia patológica direta determinante do óbito, devendo, obrigatoriamente, figurar como causa contribuinte menor no bloco da Parte II.',
    commentary: 'O correto preenchimento estatístico do obituário nacional é regulado por normas rigorosas. A causa imediata (insuficiência respiratória) estabelece o desfecho terminal na linha superior \'a\'. O processo inicial básico motivador de todo o declínio clínico progressivo (infecção crônica severa por HIV/AIDS) encerra a cadeia etiológica na base da Parte I. Por fim, a condição fisiológica coexistente gravídica puerperal de 35 semanas, que influi no risco sistêmico geral de deterioração pulmonar e que constitui morte materna indireta clássica, é inserida na Parte II da D.O.',
    reference: 'Manual de Instruções para o Preenchimento da Declaração de Óbito, Ministério da Saúde, 2011.',
    tags: ['medicina legal', 'declaração de óbito', 'HIV/AIDS na gestação']
  },
  {
    id: 'tp2021-120',
    module: 'Saúde Coletiva',
    text: 'Em estudo para avaliar um teste sorológico encontramos que entre 342 portadores da doença, 254 apresentam teste positivo e entre 328 que não apresentam a doença, 30 testaram positivo. Qual alternativa contempla, respectivamente, a especificidade, o valor preditivo positivo e a acurácia do teste?',
    options: [
      '(A) 90,8%; 74,2%; 89,4%',
      '(B) 74,2%; 77,2%; 51,0%',
      '(C) 90,8%; 89,4%; 82,4%',
      '(D) 74,2%; 77,2%; 82,4%'
    ],
    correctAnswer: 2,
    explanation: 'Os cálculos de desempenho do teste diagnóstico definem:\n- Especificidade (Verdadeiros Negativos / Total de Não Portadores) = (328 - 30) / 328 = 298 / 328 = 90,85%.\n- Valor Preditivo Positivo (Verdadeiros Positivos / Total de Testados Positivos) = 254 / (254 + 30) = 254 / 284 = 89,43%.\n- Acurácia (Verdadeiros Resultados Corretos / População Total) = (254 + 298) / (342 + 328) = 552 / 670 = 82,38%.',
    commentary: 'Portadores da doença (N = 342) -> 254 Positivos (VP) e 88 Negativos (FN).\nNão Portadores da doença (N = 328) -> 30 Positivos (FP) e 298 Negativos (VN).\n- Sensibilidade = VP / Total Portadores = 254 / 342 = 74,2%.\n- Especificidade = VN / Total Não Portadores = 298 / 328 = 90,8%.\n- VPP = VP / Total de Positivos = 254 / 284 = 89,4%.\n- Acurácia = (VP + VN) / Total Geral = 552 / 670 = 82,4%.',
    reference: 'Gordis L. Epidemiologia. Editora Revinter; 4 ed. 2010.',
    tags: ['metodologia científica', 'epidemiologia', 'testes diagnósticos']
  },
  {
    id: 'tp2026-101',
    module: 'Saúde Coletiva',
    text: 'Paciente de 82 anos, portador de neoplasia maligna avançada e sem possibilidade de terapêutica modificadora da doença, é internado por insuficiência respiratória aguda (IRA). Apresenta diretiva antecipada de vontade formalmente registrada, com recusa a medidas invasivas de suporte avançado de vida. Diante da deterioração clínica, familiares solicitam a instituição de todas as medidas de prolongamento da vida. À luz dos cuidados paliativos, da bioética e das normativas do Conselho Federal de Medicina (CFM), a conduta da equipe deve ser:',
    options: [
      '(A) Transferir a decisão integralmente para a família, já que o paciente não pode mais se comunicar.',
      '(B) Atender ao pedido da família e realizar todas as medidas invasivas possíveis, independentemente do desejo prévio do paciente.',
      '(C) Solicitar decisão judicial antes de qualquer conduta, devido ao conflito entre família e vontade do paciente.',
      '(D) Respeitar a autonomia expressa pelo paciente, evitar medidas invasivas e priorizar o controle de sintomas e conforto.'
    ],
    correctAnswer: 3,
    explanation: "O paciente tem doença oncológica avançada, sem tratamento capaz de mudar sua evolução, e registrou formalmente uma diretiva antecipada de vontade recusando medidas invasivas. A Resolução CFM nº 1.995/2012 determina que o médico leve em conta essas diretivas, e elas prevalecem sobre qualquer outro parecer, inclusive o desejo dos familiares.\n\nRespeitar a vontade do paciente cumpre a autonomia e evita a obstinação terapêutica (distanásia), que prolongaria o sofrimento sem benefício. A conduta é não instituir intubação ou outras medidas invasivas e focar em cuidados paliativos: controle da dispneia (por exemplo, com opioide), conforto e apoio à família, com comunicação clara sobre a decisão.",
    commentary: "Transferir a decisão à família (A): quando o paciente deixou sua vontade registrada, a família não decide no lugar dele; ela deve ser acolhida e informada.\n\nAtender ao pedido da família (B): desrespeita a autonomia e a diretiva registrada, e as medidas invasivas aqui só prolongariam o processo de morte.\n\nPedir decisão judicial (C): é desnecessária; a diretiva antecipada tem respaldo ético e normativo, e esperar a Justiça atrasaria o cuidado de conforto.",
    tip: "Diretiva antecipada de vontade registrada prevalece sobre o desejo da família (Resolução CFM 1.995/2012).",
    reference: 'Instituto Nacional de Câncer (INCA). Diretrizes para a organização dos cuidados paliativos no Brasil; Resolução CFM nº 1.995/2012.',
    tags: ['bioética', 'cuidados paliativos', 'autonomia do paciente']
  },
  {
    id: 'tp2026-102',
    module: 'Saúde Coletiva',
    text: 'Uma equipe de Saúde da Família, em uma Unidade Básica de Saúde (UBS) de território urbano vulnerável, realiza territorialização conforme a Política Nacional de Atenção Básica (PNAB) e identifica microáreas com alta incidência de arboviroses, elevada prevalência de Hipertensão Arterial Sitemica (HAS) e Diabetes Mellitus (DM), baixa adesão ao cuidado longitudinal e fragilidade do vínculo. Considerando o planejamento territorial baseado em risco e a integração entre vigilância e assistência, qual é a estratégia a ser adotada pela equipe?',
    options: [
      '(A) Centralizar ações de arboviroses na vigilância municipal, mantendo a equipe da APS focada no manejo clínico, notificação e acompanhamento dos casos.',
      '(B) Priorizar atendimentos clínicos para condições crônicas, ampliando o controle individual e manutenção das atividades coletivas conforme disponibilidade e organização centrada na demanda espontânea da UBS.',
      '(C) Reorganizar o processo de trabalho com estratificação de risco, priorização de microáreas críticas, integração vigilância-assistência, busca ativa, ações intersetoriais e fortalecimento do vínculo e da participação social.',
      '(D) Desenvolver campanhas periódicas voltadas ao controle de agravos, com definição de metas e organização das ações no território, sem necessidade de mudanças estruturais no processo de trabalho.'
    ],
    correctAnswer: 2,
    explanation: 'Reorganizar o processo de trabalho com estratificação de risco, priorização de microáreas críticas, integração vigilância-assistência, busca ativa, ações intersetoriais e fortalecimento do vínculo e da participação social.',
    commentary: 'De acordo com a PNAB, o planejamento das ações em uma UBS de território vulnerável deve integrar a vigilância em saúde e a assistência clínica, baseando-se na estratificação de risco, no fortalecimento do vínculo comunitário e em ações intersetoriais de promoção de saúde no território.',
    reference: 'BRASIL. Ministério da Saúde. Política Nacional de Atenção Básica (PNAB), 2017.',
    tags: ['atenção primária', 'PNAB', 'planejamento territorial']
  },
  {
    id: 'tp2026-103',
    module: 'Saúde Coletiva',
    text: 'Em uma UBS, mulher de 74 anos, diabética e hipertensa, independente para atividades de vida diária, apresenta quedas recorrentes no último ano. Considerando ações de promoção e prevenção, qual estratégia deve ser priorizada pela equipe?',
    options: [
      '(A) Fazer avaliação multifatorial de risco de quedas, revisão medicamentosa e orientação de exercício físico.',
      '(B) Solicitar densitometria óssea anual, independentemente de fatores adicionais de risco.',
      '(C) Encaminhar para otorrino para investigação de alteração do equilíbrio como causa principal das quedas.',
      '(D) Encaminhar para ortopedia para investigação de artrose como causa principal das quedas.'
    ],
    correctAnswer: 0,
    explanation: "Idosa com quedas recorrentes precisa de uma avaliação multifatorial, porque a queda raramente tem uma única causa. A equipe deve investigar fatores do próprio paciente (força, marcha e equilíbrio, visão, hipotensão postural, hipoglicemia, cognição, pés), revisar os medicamentos (anti-hipertensivos, hipoglicemiantes, sedativos e a polifarmácia em geral) e avaliar riscos em casa.\n\nA intervenção com melhor resultado para prevenir novas quedas é o exercício físico regular com treino de equilíbrio e fortalecimento, associado à correção dos fatores encontrados. Tudo isso pode ser feito e coordenado na Atenção Primária.",
    commentary: "Densitometria anual (B): pode ser indicada para avaliar osteoporose e risco de fratura, mas não previne a queda em si, e não há motivo para repeti-la todo ano de forma rotineira.\n\nEncaminhar ao otorrino (C): alteração vestibular é apenas um dos fatores possíveis; encaminhar sem avaliação global ignora os demais e tira o cuidado da APS.\n\nEncaminhar à ortopedia (D): da mesma forma, a artrose é só uma possível contribuição; o encaminhamento isolado não aborda medicamentos, visão, ambiente e condicionamento.",
    tip: "Quedas no idoso: avaliação multifatorial + revisão de remédios + exercício de equilíbrio e força.",
    reference: 'Ministério da Saúde. Caderneta de Saúde da Pessoa Idosa; Sociedade Brasileira de Geriatria e Gerontologia (SBGG).',
    tags: ['saúde do idoso', 'prevenção de quedas', 'multifatorialidade']
  },
  {
    id: 'tp2026-104',
    module: 'Saúde Coletiva',
    text: 'Mulher de 32 anos procura a UBS com tristeza persistente, insônia e desesperança há dois meses. Durante a consulta, relata que “às vezes pensa que seria melhor não acordar”. Qual é a conduta no contexto da Atenção Primária com foco na promoção e prevenção em saúde?',
    options: [
      '(A) Prescrever antidepressivo, orientar retorno programado e aguardar resposta clínica inicial ao tratamento.',
      '(B) Realizar avaliação estruturada do risco, fortalecer vínculo e organizar plano de cuidado na UBS.',
      '(C) Encaminhar ao CAPS para seguimento especializado e suspender acompanhamento na UBS.',
      '(D) Orientar medidas de autocuidado, incentivar rede de apoio e agendar reavaliação em longo prazo.'
    ],
    correctAnswer: 1,
    explanation: "A paciente tem sintomas depressivos há dois meses e relata ideação de morte passiva (seria melhor não acordar). Toda menção a pensamentos de morte deve ser investigada de forma direta e estruturada: frequência, intenção, plano, acesso a meios, tentativas anteriores, fatores de proteção e rede de apoio. Perguntar sobre suicídio não aumenta o risco.\n\nCom o risco estimado, a equipe da UBS monta um plano de cuidado e de segurança, mantém o vínculo e o acompanhamento próximo e trata a depressão. Se o risco for alto, aciona-se o CAPS ou a urgência, sem que a APS deixe de acompanhar a paciente.",
    commentary: "Prescrever antidepressivo e aguardar (A): o tratamento medicamentoso pode ser necessário, mas antes é preciso estimar o risco de suicídio; além disso, o efeito do antidepressivo demora semanas.\n\nEncaminhar ao CAPS e suspender o acompanhamento (C): o encaminhamento, quando indicado, é compartilhado; a UBS continua responsável pelo cuidado.\n\nAutocuidado e retorno distante (D): é insuficiente diante de ideação de morte; o seguimento precisa ser próximo e com avaliação de risco.",
    tip: "Ideação de morte na APS: pergunte diretamente, estime o risco, faça plano de segurança e mantenha o vínculo.",
    reference: 'Ministério da Saúde. Prevenção do Suicídio: Manual dirigido a profissionais da APS.',
    tags: ['saúde mental', 'prevenção do suicídio', 'acolhimento']
  },
  {
    id: 'tp2026-105',
    module: 'Saúde Coletiva',
    text: 'Homem de 28 anos é acompanhado na UBS com diagnóstico prévio de transtorno bipolar tipo I. Apresenta histórico recente de episódio maníaco com prejuízo funcional. Atualmente está eutímico. Qual estratégia terapêutica é mais adequada para prevenção de recaídas?',
    options: [
      '(A) Prescrever antidepressivo isolado para estabilização do humor e reavaliar em consulta futura.',
      '(B) Iniciar estabilizador de humor, como lítio, e acompanhar na APS, em articulação com saúde mental.',
      '(C) Utilizar benzodiazepínico de uso prolongado como estratégia principal de manutenção clínica.',
      '(D) Suspender a farmacoterapia após estabilização e manter apenas acompanhamento psicossocial.'
    ],
    correctAnswer: 1,
    explanation: "No transtorno bipolar tipo I, após um episódio maníaco, o objetivo é evitar novos episódios com tratamento de manutenção contínuo. O lítio é um estabilizador de humor de primeira linha para isso, reduz recaídas maníacas e depressivas e tem efeito comprovado na redução do risco de suicídio. Outras opções são valproato e alguns antipsicóticos atípicos, como a quetiapina.\n\nO lítio exige acompanhamento de nível sérico, função renal e tireoidiana. O seguimento pode ser feito na Atenção Primária em cuidado compartilhado com a equipe de saúde mental, associado a psicoeducação e atenção aos sinais precoces de recaída.",
    commentary: "Antidepressivo isolado (A): sem estabilizador, pode precipitar virada maníaca e ciclagem rápida; não é tratamento de manutenção do bipolar.\n\nBenzodiazepínico prolongado (C): pode ajudar por pouco tempo na agitação ou insônia, mas não estabiliza o humor e traz risco de dependência.\n\nSuspender a medicação (D): o bipolar tipo I tem alto risco de recorrência, e parar o tratamento após a estabilização aumenta a chance de novo episódio.",
    tip: "Bipolar I: manutenção com estabilizador (lítio é referência e reduz suicídio); nunca antidepressivo sozinho.",
    reference: 'Diretrizes da CANMAT; Ministério da Saúde. Caderno de Atenção Básica - Saúde Mental.',
    tags: ['saúde mental', 'transtorno bipolar', 'farmacoterapia']
  },
  {
    id: 'tp2026-106',
    module: 'Saúde Coletiva',
    text: 'Mulher, de 38 anos, comparece à UBS relatando episódios recorrentes de taquicardia súbita, sudorese, tremores e sensação de morte iminente há 3 meses. Nega uso de substâncias psicoativas ou comorbidades. Histórico de estresse crônico por sobrecarga laboral e luto recente pela perda materna. Qual o planejamento diagnóstico mais adequado para Transtorno de Ansiedade Generalizada e Transtorno de Pânico comórbido?',
    options: [
      '(A) Realizar apenas anamnese estendida sem ferramentas validadas, prescrever benzodiazepínico de ação curta (ex.: alprazolam 0,5mg PRN) para crises agudas e orientar terapia cognitivo-comportamental (TCC), adiando exames complementares para eventual descompensação.',
      '(B) Solicitar TSH, T4 livre e hemograma completo isoladamente, prescrever escitalopram 10mg/dia empiricamente e agendar retorno em 30 dias para reavaliação clínica sem escalas padronizadas, priorizando abordagem farmacológica inicial sem investigação diferencial.',
      '(C) Encaminhar diretamente para psiquiatria via regulação, sem escalas locais ou exames laboratoriais iniciais, e monitorar apenas com diário de crises submetido à especialidade, delegando integralmente o planejamento diagnóstico à atenção secundária.',
      '(D) Aplicar ferramentas validadas para confirmação diagnóstica e para quantificação, solicitar TSH, hemograma, ECG Holter (se crises > 3/semana) e descartar orgânico (cafeína, tireotoxicose), com estratificação de risco e plano terapêutico stepwise.'
    ],
    correctAnswer: 3,
    explanation: 'Aplicar ferramentas validadas para confirmação diagnóstica e para quantificação, solicitar TSH, hemograma, ECG Holter (se crises > 3/semana) e descartar orgânico (cafeína, tireotoxicose), com estratificação de risco e plano terapêutico stepwise.',
    commentary: 'O planejamento diagnóstico na APS deve ser baseado em evidências (stepwise), utilizando escalas padronizadas para confirmação diagnóstica de ansiedade/pânico, descartando distúrbios orgânicos subjacentes (tireotoxicose, anemia, arritmias) e estratificando o risco clínico.',
    reference: 'American Psychiatric Association. DSM-5-TR; Cadernos de Atenção Básica nº 34: Saúde Mental.',
    tags: ['saúde mental', 'ansiedade', 'diagnóstico stepwise']
  },
  {
    id: 'tp2026-107',
    module: 'Saúde Coletiva',
    text: 'Uma população em situação de rua apresenta baixa adesão às ações municipais de prevenção e rastreamento da tuberculose. Considerando a bioética nas políticas de saúde, qual medida melhor responde a esse cenário?',
    options: [
      '(A) Centralizar a oferta preventiva, padronizar horários fixos e priorizar demanda espontânea.',
      '(B) Exigir identificação formal, cadastro prévio e comparecimento regular para inclusão no rastreamento.',
      '(C) Estruturar busca territorial, vínculo longitudinal e fluxos flexíveis de acesso ao rastreamento.',
      '(D) Direcionar a oferta inicial aos usuários mais aderentes, com seguimento clínico já estabelecido.'
    ],
    correctAnswer: 2,
    explanation: "Pessoas em situação de rua têm risco muito maior de tuberculose e enfrentam barreiras para chegar aos serviços: falta de documentos e endereço, estigma, rotina instável e experiências ruins com o sistema. Se o serviço espera que elas venham, em horário fixo e com cadastro, elas não vêm.\n\nA resposta adequada aplica o princípio da equidade: oferecer mais a quem precisa mais, adaptando o serviço às pessoas. Isso significa ir até elas (busca ativa no território, como faz o Consultório na Rua), construir vínculo contínuo e flexibilizar o acesso. Assim se aumenta o diagnóstico precoce e se interrompe a transmissão, o que atende também à beneficência e à justiça.",
    commentary: "Centralizar com horários fixos e demanda espontânea (A): organiza o serviço pela conveniência da equipe e mantém afastado justamente o grupo que tem dificuldade de acesso.\n\nExigir identificação, cadastro e comparecimento regular (B): cria barreiras burocráticas que excluem quem não tem documento ou endereço; falta de documento não pode impedir atendimento no SUS.\n\nPriorizar os mais aderentes (D): favorece quem já está no cuidado e deixa de fora os mais vulneráveis, contrariando a equidade e mantendo a cadeia de transmissão.",
    tip: "População de rua e TB: o serviço vai até a pessoa (busca ativa, vínculo, acesso flexível) = equidade.",
    reference: 'Decreto Federal nº 7.053/2009 (Política Nacional para População em Situação de Rua); Manual de Tuberculose, Ministério da Saúde.',
    tags: ['bioética', 'população em situação de rua', 'equidade']
  },
  {
    id: 'tp2026-108',
    module: 'Saúde Coletiva',
    text: 'Após identificar alta mortalidade materna em um bairro de extrema pobreza, o gestor municipal alocou equipes extras de saúde da família exclusivamente para esse local. Simultaneamente, pactuou com as prefeituras das cidades vizinhas a criação de um consórcio para garantir leitos de UTI neonatal no município polo da região. As duas ações tomadas pelo gestor representam, respectivamente, um princípio doutrinário e um organizativo do SUS. São eles:',
    options: [
      '(A) Longitudinalidade e descentralização.',
      '(B) Integralidade e hierarquização.',
      '(C) Universalidade e participação social.',
      '(D) Equidade e regionalização.'
    ],
    correctAnswer: 3,
    explanation: "Os princípios doutrinários do SUS são universalidade, integralidade e equidade; as diretrizes organizativas incluem descentralização, regionalização, hierarquização e participação social.\n\nColocar equipes extras só no bairro mais pobre, onde a mortalidade materna é maior, é equidade: tratar de forma desigual os desiguais, dando mais a quem tem mais necessidade. Pactuar com municípios vizinhos um consórcio para garantir leitos de UTI neonatal na cidade-polo é regionalização: articular os serviços de uma região de saúde para que todos tenham acesso a recursos de maior complexidade que um município sozinho não teria.",
    commentary: "Longitudinalidade e descentralização (A): longitudinalidade é atributo da Atenção Primária, não princípio doutrinário do SUS; descentralização é a transferência de responsabilidades para estados e municípios, não o acordo entre municípios.\n\nIntegralidade e hierarquização (B): integralidade é ver a pessoa como um todo e articular prevenção, cura e reabilitação; a hierarquização organiza níveis de complexidade, mas o centro da ação descrita é o pacto regional entre municípios.\n\nUniversalidade e participação social (C): universalidade é acesso de todos, sem distinção, e a ação priorizou um grupo; participação social é o controle da comunidade nos conselhos e conferências, sem relação com o consórcio.",
    tip: "Doutrinários: universalidade, integralidade, equidade. Priorizar o mais pobre = equidade; consórcio entre municípios = regionalização.",
    reference: 'FALK, J. W.; ROSA, R. S. O Sistema de Saúde no Brasil; Lei nº 8.080/1990.',
    tags: ['SUS', 'diretrizes do SUS', 'princípios do SUS']
  },
  {
    id: 'tp2026-109',
    module: 'Saúde Coletiva',
    text: 'Em uma reunião do Conselho Municipal de Saúde, um representante dos usuários critica a mudança no cofinanciamento da Atenção Primária, que promove a redução da população adscrita por equipe de ESF para uma média de 2.500 pessoas. O usuário alega que "reduzir o número de pessoas piora a assistência, pois os médicos deveriam atender mais pacientes ao invés de menos". Qual é a justificativa técnica para a mudança?',
    options: [
      '(A) A redução do dimensionamento da população por equipe promove o acesso efetivo e aumenta a qualidade no atendimento, equilibrando a demanda e viabilizando o manejo eficaz de doenças agudas e crônicas, assim como ações intersetoriais e de vigilância em saúde.',
      '(B) A diminuição do número de pacientes por equipe tem como objetivo corrigir a baixa resolutividade inerente à Atenção Primária, para que o médico da ESF tenha tempo suficiente para solicitar mais exames complementares e encaminhar adequadamente cada indivíduo.',
      '(C) A redução do número de pessoas adscritas tem por finalidade diminuir também a carteira de serviços oferecida pela ESF, permitindo que as UPAs fiquem responsáveis pelas queixas agudas, para que a ESF foque nas ações de prevenção e promoção em saúde.',
      '(D) O redimensionamento populacional visa reverter a fragmentação assistencial, aumentando as consultas médicas e reduzindo a necessidade de atendimento de enfermagem e outros profissionais, o que garante maior segurança e resolutividade terapêutica aos usuários.'
    ],
    correctAnswer: 0,
    explanation: 'A redução do dimensionamento da população por equipe promove o acesso efetivo e aumenta a qualidade no atendimento, equilibrando a demanda e viabilizando o manejo eficaz de doenças agudas e crônicas, assim como ações intersetoriais e de vigilância em saúde.',
    commentary: 'A adscrição de um contingente menor por equipe (média de 2.500 pessoas na atualização da PNAB) visa equacionar a carga assistencial diária, permitindo dedicação à prevenção, ao manejo integral qualificado de doenças crônicas complexas, às ações territoriais e intersetoriais.',
    reference: 'Portaria GM/MS nº 3.493/2024; Tratado de Medicina de Família e Comunidade (Gusso & Lopes).',
    tags: ['organização da APS', 'PNAB 2024', 'dimensionamento de equipes']
  },
  {
    id: 'tp2026-110',
    module: 'Saúde Coletiva',
    text: '"O relatório Níveis e Tendências da Mortalidade Infantil, divulgado nesta terça-feira (17) pelas Nações Unidas, aponta que o Brasil alcançou as menores taxas de mortalidade neonatal e em crianças abaixo dos cinco anos dos últimos 34 anos. Segundo o Fundo das Nações Unidas para a Infância (Unicef), um conjunto de políticas adotadas pelo país tem diminuído as mortes preveníveis de crianças, em consonância com a tendência global". (Publicado em 17/03/2026 pela Agência Brasil). Quais os fatores que influenciam a taxa de mortalidade infantil?',
    options: [
      '(A) O maior acesso aos serviços de atendimento pré-natal e puericultura e à assistência especializada durante o trabalho de parto contribui de maneira significativa para redução da mortalidade infantil e materna.',
      '(B) A urbanização progressiva da população brasileira não interferiu na queda da mortalidade infantil, visto que as suas taxas são as mesmas em áreas urbanas e rurais.',
      '(C) A queda da mortalidade infantil vem ocorrendo de maneira uniforme em toda a extensão territorial, independentemente da região do país ou se é extraída de municípios do interior ou capital.',
      '(D) Com a queda da mortalidade infantil, a proporção de crianças na população brasileira vem aumentando consideravelmente, levando ao alargamento da base da pirâmide etária nacional.'
    ],
    correctAnswer: 0,
    explanation: 'O maior acesso aos serviços de atendimento pré-natal e puericultura e à assistência especializada durante o trabalho de parto contribui de maneira significativa para redução da mortalidade infantil e materna.',
    commentary: 'A cobertura robusta de pré-natal de qualidade e o acompanhamento de puericultura na rede de atenção primária são determinantes centrais estabelecidos para a queda sustentada da mortalidade infantil pós-neonatal. Fatores ambientais, econômicos e regionais mantêm fortes disparidades territoriais.',
    reference: 'RIBEIRO, G. S. Problemas de Saúde da População Brasileira e seus Determinantes. In: Saúde Coletiva: Teoria e Prática (2022).',
    tags: ['mortalidade infantil', 'indicadores de saúde', 'saúde da criança']
  },
  {
    id: 'tp2026-111',
    module: 'Saúde Coletiva',
    text: 'Um município implementou um programa de rastreamento para tuberculose pulmonar, permitindo diagnóstico e tratamento mais precoces. Após dois anos, observou-se redução do tempo médio de duração da doença na população. O número de novos casos diagnosticados por ano permaneceu semelhante ao período anterior, mas o número total de pessoas com tuberculose na comunidade diminuiu. Qual interpretação epidemiológica explica esse cenário?',
    options: [
      '(A) A incidência diminuiu devido ao diagnóstico precoce, enquanto a prevalência permaneceu estável.',
      '(B) A incidência aumentou devido ao diagnóstico precoce, enquanto a prevalência permaneceu inalterada.',
      '(C) A prevalência da doença diminuiu devido à redução da duração da doença, enquanto a incidência permaneceu estável.',
      '(D) A prevalência aumentou devido à maior detecção de casos, enquanto a incidência diminuiu.'
    ],
    correctAnswer: 2,
    explanation: "Incidência é o número de casos novos num período; prevalência é quantas pessoas estão doentes num dado momento. As duas se relacionam pela fórmula aproximada: prevalência ≈ incidência × duração média da doença.\n\nNo cenário, o número de casos novos por ano não mudou (incidência estável), mas o rastreamento permitiu diagnosticar e tratar mais cedo, e as pessoas passaram a ficar doentes por menos tempo. Com duração menor e incidência igual, o número de pessoas doentes ao mesmo tempo diminui: a prevalência caiu.",
    commentary: "Incidência diminuiu e prevalência estável (A): o enunciado diz que os casos novos ficaram semelhantes e que o total de doentes caiu; é o oposto.\n\nIncidência aumentou e prevalência inalterada (B): o número de casos novos não aumentou, e a prevalência mudou.\n\nPrevalência aumentou e incidência diminuiu (D): a detecção maior poderia elevar a prevalência no início, mas o enunciado relata queda do total de doentes e incidência estável.",
    tip: "Prevalência ≈ incidência × duração. Tratar mais cedo encurta a doença e reduz a prevalência.",
    reference: 'ROTHMAN, K. J. Modern Epidemiology (4th ed., 2021); Princípios de Epidemiologia.',
    tags: ['indicadores epidemiológicos', 'prevalência', 'incidência']
  },
  {
    id: 'tp2026-112',
    module: 'Saúde Coletiva',
    text: 'Um trabalhador de 42 anos atua há 15 anos em indústria de baterias com exposição ocupacional a chumbo. Apresenta fadiga, dor abdominal, cefaleia e parestesias. Exames laboratoriais evidenciam anemia e níveis elevados de chumbo no sangue. Considerando as ações da Vigilância em Saúde do Trabalhador, qual é a conduta inicial indicada diante desse caso?',
    options: [
      '(A) Encaminhar o trabalhador para acompanhamento clínico especializado e iniciar investigação epidemiológica, se surgirem novos casos entre trabalhadores expostos.',
      '(B) Notificar o agravo relacionado ao trabalho e iniciar investigação epidemiológica no ambiente laboral, com adoção de medidas de controle do risco ocupacional.',
      '(C) Registrar o caso no prontuário da unidade de saúde e orientar o trabalhador a procurar avaliação ocupacional junto à empresa empregadora.',
      '(D) Solicitar avaliação ocupacional pela empresa e aguardar a conclusão da investigação interna antes da atuação da vigilância em saúde.'
    ],
    correctAnswer: 1,
    explanation: 'Notificar o agravo relacionado ao trabalho e iniciar investigação epidemiológica no ambiente laboral, com adoção de medidas de controle do risco ocupacional.',
    commentary: 'A suspeita ou confirmação de intoxicação ocupacional por metais pesados (saturnismo) constitui agravo de notificação compulsória relacionada ao trabalho. Demanda imediata intervenção da Vigilância em Saúde do Trabalhador (VISAT) no ambiente fabril para neutralização de fontes de risco.',
    reference: 'Ministério da Saúde. Vigilância em Saúde do Trabalhador no SUS: orientações básicas.',
    tags: ['saúde do trabalhador', 'VISAT', 'doenças ocupacionais']
  },
  {
    id: 'tp2026-113',
    module: 'Saúde Coletiva',
    text: 'Um trabalhador de 32 anos, motorista de ônibus, sofreu acidente de motocicleta enquanto retornava para casa após o expediente do seu trabalho. No trajeto habitual, ele interrompeu o percurso para entrar rapidamente a sua esquerda, em uma padaria para comprar pão; ao retomar na rua para o deslocamento, colidiu com um carro e sofreu escoriações e fratura de punho. Escolha a alternativa que descreva o evento médico-legal mencionado.',
    options: [
      '(A) Acidente de trabalho típico, porque houve nexo temporal com o término da jornada e o deslocamento para casa.',
      '(B) Acidente de trajeto, equiparado a acidente de trabalho, pois qualquer interrupção breve no percurso é juridicamente irrelevante.',
      '(C) Acidente de trabalho por equiparação, desde que o trabalhador tenha saído do local de trabalho no mesmo dia do evento.',
      '(D) Acidente comum, porque a parada para atender interesse pessoal descaracteriza o percurso habitual entre trabalho e residência.'
    ],
    correctAnswer: 3,
    explanation: 'Acidente comum, porque a parada para atender interesse pessoal descaracteriza o percurso habitual entre trabalho e residência.',
    commentary: 'O acidente de trajeto exige linearidade habitual do percurso residencial-laboral. Desvios e interrupções significativas motivadas por interesse particular do obreiro rompem o nexo previdenciário de equiparação ao acidente laboral, enquadrando o evento como sinistro de natureza comum.',
    reference: 'Brasil. Lei nº 8.213/1991, Artigo 21, IV, "d"; Decreto nº 3.048/1999.',
    tags: ['medicina legal', 'acidente de trabalho', 'previdência social']
  },
  {
    id: 'tp2026-114',
    module: 'Saúde Coletiva',
    text: 'Durante uma visita domiciliar programada, o médico da ESF atende um agricultor de 38 anos que apresenta náuseas, tontura, miose e sialorreia iniciadas há 24 horas, após a aplicação de defensivos agrícolas em sua pequena lavoura. O paciente está estável, mas relata que "não queria ir ao posto para não perder o dia de serviço". Ao aplicar os cuidados médicos e os aspectos médico-legais no domicílio deste trabalhador, qual deve ser a conduta prioritária do médico?',
    options: [
      '(A) Realizar o manejo clínico imediato das manifestações colinérgicas, providenciar a notificação compulsória no SINAN e orientar o afastamento imediato da exposição, investigando se outros familiares também foram expostos.',
      '(B) Prescrever sintomáticos e orientar o repouso domiciliar, respeitando a autonomia do paciente em não querer que o caso seja registrado formalmente para evitar conflitos com fornecedores.',
      '(C) Encaminhar o paciente para a emergência hospitalar apenas para lavagem gástrica, visto que o atendimento domiciliar não possui respaldo legal para manejar intoxicações exógenas no SUS.',
      '(D) Notificar o caso diretamente ao Ministério do Trabalho antes de tratar o paciente, priorizando o aspect médico-legal de fiscalização da propriedade rural sobre o cuidado clínico.'
    ],
    correctAnswer: 0,
    explanation: 'Realizar o manejo clínico imediato das manifestações colinérgicas, providenciar a notificação compulsória no SINAN e orientar o afastamento imediato da exposição, investigando se outros familiares também foram expostos.',
    commentary: 'O dever de intervir clinicamente (antídotos/suporte) e a obrigação de notificar o agravo compulsório de intoxicação exógena pelo trabalho sobrepõem-se à solicitação de recusa de registro do paciente. Na saúde coletiva e medicina de família, estende-se a análise clínica de risco aos coabitantes do lar agrícola.',
    reference: 'Ministério da Saúde. Cadernos de Atenção Básica, n. 41: Saúde do Trabalhador e da Trabalhadora.',
    tags: ['saúde do trabalhador', 'notificação compulsória', 'agrotóxicos']
  },
  {
    id: 'tp2026-115',
    module: 'Saúde Coletiva',
    text: 'Maria, 55 anos, comparece a consulta para buscar o resultado de sua mamografia de rastreamento bianual, que apresentou laudo BIRADS 2. Durante a consulta, o médico aproveita para discutir hábitos de vida e a autonomia dela no cuidado com o corpo. Nesse sentido, o documento "Controle do câncer de mama no Brasil: dados e números 2025" enfatiza que a prevenção primária (controle de fatores de risco) é tão importante quanto o rastreamento. Ao aplicar as diretrizes de promoção da saúde para esta paciente, qual orientação é prioritária para reduzir o risco de desenvolvimento de novas lesões?',
    options: [
      '(A) Orientar que o achado BIRADS 2 exige repetição da mamografia em 6 meses para acompanhamento rigoroso.',
      '(B) Incentivar a manutenção do peso corporal adequado e a prática regular de atividade física, explicando a relação entre tecido adiposo e estrogênio.',
      '(C) Instruir a paciente sobre a técnica do autoexame mensal com data fixa como substituto da mamografia, visando a autonomia.',
      '(D) Recomendar a interrupção de qualquer uso de contraceptivos orais, independentemente da idade, como única medida preventiva eficaz.'
    ],
    correctAnswer: 1,
    explanation: 'Incentivar a manutenção do peso corporal adequado e a prática regular de atividade física, explicando a relação entre tecido adiposo e estrogênio.',
    commentary: 'O laudo BI-RADS 2 refere-se a achados estritamente benignos, mantendo o rastreamento bianual regular. A prevenção primária foca em fatores modificáveis, como obesidade pós-menopausa (tecido adiposo periférico converte andrógenos em estrogênios pela aromatase, elevando o risco de tumores estrogênio-dependentes).',
    reference: 'INCA. Controle do câncer de mama no Brasil: dados e números 2025; Diretrizes de Rastreamento.',
    tags: ['saúde da mulher', 'rastreamento', 'prevenção primária']
  },
  {
    id: 'tp2026-116',
    module: 'Saúde Coletiva',
    text: 'Uma mulher trans de 52 anos, preta, procura a Unidade Básica de Saúde (UBS) para uma consulta de rotina. Realiza terapia de afirmação de gênero com estrogênios há 10 anos e não foi submetida a cirurgia de redesignação sexual (neovaginoplastia). Durante a consulta, ela questiona o médico sobre a necessidade de realizar exames para "prevenir o câncer de próstata", pois leu em uma rede social que mulheres trans não precisam se preocupar com isso. Está assintomática e não possui histórico familiar de câncer de próstata em parentes de primeiro grau. Com base nas diretrizes de promoção e prevenção em saúde e nas recomendações do Ministério da Saúde e da Sociedade Brasileira de Urologia (SBU), qual a conduta mais adequada para esta paciente?',
    options: [
      '(A) Realizar o compartilhamento de decisões (Decisão Compartilhada), discutindo os potenciais riscos e benefícios do rastreamento, respeitando a identidade de gênero e mantendo a vigilância do órgão presente.',
      '(B) Orientar que a terapia hormonal com estrogênio causa atrofia prostática completa, eliminando o risco de neoplasia, desobrigando-a de qualquer tipo de rastreamento.',
      '(C) Iniciar o rastreamento imediato com dosagem de PSA sérico e toque retal, visto que mulheres trans pretas possuem risco genético triplicado para adenocarcinoma de próstata.',
      '(D) Indicar a realização de Ultrassonografia Transretal anualmente, pois o toque retal é contraindicado em pacientes que fazem uso de hormonioterapia feminina.'
    ],
    correctAnswer: 0,
    explanation: 'Realizar o compartilhamento de decisões (Decisão Compartilhada), discutindo os potenciais riscos e benefícios do rastreamento, respeitando a identidade de gênero e mantendo a vigilância do órgão presente.',
    commentary: 'Mulheres trans mantêm a glândula prostática mesmo sob hormonioterapia feminilizante (que atrofia o órgão mas não extingue integralmente o risco carcinogênico). O rastreamento deve seguir o princípio da Decisão Compartilhada de forma personalizada, evitando abordagens puramente compulsórias ou negligentes.',
    reference: 'Sociedade Brasileira de Urologia (SBU). Recomendações em Saúde Urológica de Pessoas Transgênero; Ministério da Saúde.',
    tags: ['saúde LGBT', 'decisão compartilhada', 'câncer de próstata']
  },
  {
    id: 'tp2026-117',
    module: 'Saúde Coletiva',
    text: 'Homem indígena de 46 anos procura a Unidade Básica de Saúde para avaliação de rotina. Nega comorbidades conhecidas. Refere sedentarismo e histórico familiar de hipertensão. Durante a consulta, apresenta as seguintes medidas de pressão arterial: 1ª medida: 148/92mmHg; 2ª medida (após 2 minutos): 146/90mmHg. Está assintomático e com exame físico sem alterações. Considerando as recomendações atuais para o diagnóstico de hipertensão arterial, qual é a melhor conduta para confirmação diagnóstica?',
    options: [
      '(A) Solicitar um painel de exames laboratoriais para a confirmação diagnóstica.',
      '(B) Repetir outras 3 medidas na mesma consulta médica, de modo a garantir média elevada.',
      '(C) Solicitar monitorização ambulatorial ou residencial da pressão arterial.',
      '(D) Devido ao alto risco do paciente, deve-se iniciar o tratamento medicamentoso.'
    ],
    correctAnswer: 2,
    explanation: "As duas medidas do consultório (148/92 e 146/90 mmHg) estão na faixa de hipertensão estágio 1, mas uma única consulta não basta para o diagnóstico. É preciso confirmar com medidas fora do consultório ou em novas consultas.\n\nAs diretrizes brasileiras recomendam, sempre que disponível, a monitorização ambulatorial (MAPA, de 24 horas) ou residencial da pressão (MRPA), que ainda identificam hipertensão do avental branco e hipertensão mascarada. Se não houver acesso, repetem-se as medidas em duas ou mais consultas, com intervalo de dias a semanas. Enquanto isso, já se orientam mudanças no estilo de vida, como atividade física, pela vida sedentária do paciente.",
    commentary: "Exames laboratoriais (A): servem para avaliar lesão de órgão-alvo, fatores de risco e causas secundárias, mas não confirmam o diagnóstico de hipertensão.\n\nMais três medidas na mesma consulta (B): várias medidas na mesma ocasião não substituem a confirmação em outro momento; o diagnóstico exige medidas em dias diferentes ou fora do consultório.\n\nIniciar remédio de imediato (D): o paciente não tem lesão de órgão-alvo, doença cardiovascular nem pressão muito alta; primeiro se confirma o diagnóstico e se estima o risco.",
    tip: "Pressão alta em uma consulta não fecha diagnóstico: confirme com MAPA/MRPA ou novas consultas.",
    reference: 'Diretrizes Brasileiras de Hipertensão Arterial, Sociedade Brasileira de Cardiologia (SBC), 2020.',
    tags: ['hipertensão arterial', 'diretrizes clínicas', 'diagnóstico']
  },
  {
    id: 'tp2026-118',
    module: 'Saúde Coletiva',
    text: 'Mulher de 55 anos, parda, diabética há mais de 10 anos, em tratamento irregular, procura a UBS relatando que há 1 ano iniciou dor plantar, bilateral, progressiva, em queimação e mais importante no período noturno. Ao exame físico, apresenta hipoestesia plantar. Além do controle glicêmico, a medicação com maior benefício no tratamento sintomático do quadro álgico é:',
    options: [
      '(A) Tramadol',
      '(B) Gabapentina',
      '(C) Prednisona',
      '(D) Diclofenaco'
    ],
    correctAnswer: 1,
    explanation: "Diabética de longa data, com controle ruim, dor em queimação nas plantas dos pés, bilateral e pior à noite, e hipoestesia plantar: é a polineuropatia diabética dolorosa, distal e simétrica, em padrão de bota.\n\nAlém de melhorar o controle glicêmico, o alívio da dor neuropática é feito com fármacos de primeira linha: gabapentinoides (gabapentina, pregabalina), antidepressivos tricíclicos (amitriptilina) ou inibidores da recaptação de serotonina e noradrenalina (duloxetina). Entre as opções, a gabapentina é a única de primeira linha. O exame dos pés é essencial, pela perda da sensibilidade protetora.",
    commentary: "Tramadol (A): opioide reservado para casos refratários, pelo risco de efeitos adversos e dependência; não é primeira escolha.\n\nPrednisona (C): a neuropatia diabética não é inflamatória, e o corticoide pioraria o controle glicêmico.\n\nDiclofenaco (D): anti-inflamatórios têm pouca eficácia na dor neuropática e, no diabético, aumentam o risco de lesão renal.",
    tip: "Neuropatia diabética dolorosa: gabapentinoide, tricíclico ou duloxetina. Anti-inflamatório e corticoide não resolvem.",
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes (SBD), 2023.',
    tags: ['diabetes mellitus', 'neuropatia diabética', 'dor neuropática']
  },
  {
    id: 'tp2026-119',
    module: 'Saúde Coletiva',
    text: 'Em uma UBS, um paciente de 68 anos, em uso crônico de corticoide em dose imunossupressora, apresenta esquema vacinal incompleto. Considerando a Vigilância em Saúde e as ações de promoção e prevenção, qual é a conduta mais adequada em relação à imunização?',
    options: [
      '(A) Aplicar apenas a vacina contra influenza anual.',
      '(B) Suspender o corticoide para posterior aplicação das vacinas.',
      '(C) Administrar todas as vacinas do calendário.',
      '(D) Aplicar as vacinas inativadas e avaliar contraindicação de vacinas vivas.'
    ],
    correctAnswer: 3,
    explanation: "Uso crônico de corticoide em dose imunossupressora (em geral, 20 mg/dia ou mais de prednisona, ou equivalente, por 14 dias ou mais) deixa o paciente mais vulnerável a infecções graves, e a vacinação é ainda mais importante. Mas é preciso diferenciar os tipos de vacina.\n\nAs vacinas inativadas e de componentes (influenza, pneumocócicas, dupla adulto, hepatite B, COVID-19, herpes-zóster recombinante) não se replicam e podem ser aplicadas com segurança, ainda que a resposta possa ser menor. As vacinas de vírus ou bactérias vivas atenuadas, como febre amarela e tríplice viral, podem estar contraindicadas durante a imunossupressão e precisam de avaliação individual, com apoio dos CRIEs.",
    commentary: "Só influenza (A): a vacina da gripe é importante, mas o idoso imunossuprimido também tem indicação de vacinas pneumocócicas, dupla adulto e outras inativadas.\n\nSuspender o corticoide para vacinar (B): interromper um tratamento necessário não é o caminho; as vacinas inativadas podem ser dadas durante o uso, e a interrupção abrupta do corticoide pode causar insuficiência adrenal.\n\nTodas as vacinas do calendário (C): incluiria vacinas vivas atenuadas sem avaliação, com risco de doença pelo próprio agente vacinal.",
    tip: "Imunossuprimido: vacinas inativadas podem; vivas atenuadas (febre amarela, tríplice viral) exigem avaliação.",
    reference: 'Manual de Imunização para Pacientes Especiais (CRIE), Ministério da Saúde.',
    tags: ['imunização', 'imunossuprimido', 'corticoterapia crônica']
  },
  {
    id: 'tp2026-120',
    module: 'Saúde Coletiva',
    text: 'Em uma UBS, mulher cis de 45 anos apresenta teste de HPV oncogênico positivo e citologia sem lesão intraepitelial. É vacinada tardiamente contra HPV aos 30 anos. Considerando vigilância e prevenção do câncer do colo do útero, qual conduta é mais adequada?',
    options: [
      '(A) Indicar conização imediata para reduzir risco de progressão neoplásica associada ao HPV oncogênico detectado.',
      '(B) Suspender rastreamento, considerando vacinação prévia contra HPV e ausência de lesão intraepitelial detectada na citologia.',
      '(C) Repetir teste conforme protocolo de rastreamento, com seguimento organizado e monitoramento periódico da paciente.',
      '(D) Solicitar histerectomia profilática para reduzir risco futuro de câncer do colo uterino associado a infecção viral persistente.'
    ],
    correctAnswer: 2,
    explanation: "Mulher de 45 anos com teste de DNA-HPV oncogênico positivo e citologia sem lesão. A presença do vírus, sozinha, não é lesão: na maioria das vezes a infecção é transitória e desaparece. Por isso a conduta é seguir o protocolo, com novo teste no intervalo definido e seguimento organizado.\n\nPelas diretrizes brasileiras de rastreamento com DNA-HPV, quando o vírus detectado não é do tipo 16 ou 18 e a citologia é negativa, repete-se o teste em 1 ano; se o HPV persistir, segue-se para colposcopia. A vacinação aos 30 anos não dispensa o rastreamento, porque a vacina não protege contra todos os tipos oncogênicos e não elimina infecção já existente.",
    commentary: "Conização imediata (A): é tratamento de lesão de alto grau confirmada; fazê-la sem lesão é tratamento excessivo, com risco obstétrico futuro.\n\nSuspender o rastreamento (B): a vacinação não exclui o rastreamento, e a paciente tem HPV oncogênico detectado, que precisa ser acompanhado.\n\nHisterectomia profilática (D): não há indicação sem lesão precursora de alto grau ou câncer; seria uma cirurgia desproporcional.",
    tip: "HPV positivo com citologia normal: não trate o vírus, acompanhe pelo protocolo. Vacina não dispensa rastreamento.",
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA/Ministério da Saúde.',
    tags: ['saúde da mulher', 'rastreamento de colo do útero', 'HPV']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-101',
    module: 'Saúde Coletiva',
    text: 'Conforme normatização vigente do SUS, as Redes de Atenção à Saúde (RAS) são entendidas como entrelaçamentos organizativos entre ações e serviços de saúde com diferentes densidades tecnológicas, integradas por meio de sistemas de apoio técnico, logístico e gestão, com a finalidade de:',
    options: [
      '(A) Garantir a integralidade do cuidado.',
      '(B) Aumentar a eficiência da gestão municipal.',
      '(C) Ofertar mais serviços pelo SUS.',
      '(D) Compor uma rede de atenção secundária.'
    ],
    correctAnswer: 0,
    explanation: 'Segundo a Portaria 4.279/2010, as Redes de Atenção à Saúde são arranjos de ações e serviços de diferentes densidades tecnológicas, integrados por sistemas de apoio técnico, logístico e de gestão, com o objetivo de garantir a integralidade do cuidado.',
    commentary: 'Eficiência, ampliação de oferta e composição da atenção secundária podem ser consequências, mas não são a finalidade definida pela norma.',
    reference: 'BRASIL. Ministério da Saúde. Portaria nº 4279, de 30 de dezembro de 2010. Estabelece as diretrizes para a organização da Rede de Atenção à Saúde no âmbito do Sistema Único de Saúde (SUS). Disponível em: http://bvsms.saude.gov.br/bvs/saudelegis/gm/2010/anexos/anexo s_prt4279_30_12_2010.pdf. Acesso em: 24 abr 2016.',
    tags: ['saúde coletiva', 'SUS', 'redes de atenção']
  },
  {
    id: 'tp2019-102',
    module: 'Saúde Coletiva',
    text: 'As doenças cardiovasculares e cerebrovasculares continuam sendo a principal causa de morte nos países desenvolvidos. No entanto, suas taxas de mortalidade vêm diminuindo nas últimas décadas em razão de ações de prevenção e melhor tratamento.\n\nA ação e o respectivo nível de prevenção capaz de reduzir a morbimortalidade por acidente vascular encefálico (AVE) são:',
    options: [
      '(A) Evitar iatrogenia; prevenção terciária.',
      '(B) Diagnóstico precoce do AVE; prevenção primária.',
      '(C) Tratamento precoce do AVE; prevenção secundária.',
      '(D) Redução da ingestão de sal; prevenção secundária.'
    ],
    correctAnswer: 2,
    explanation: 'Pelos níveis de prevenção de Leavell e Clark, o diagnóstico e o tratamento precoces de uma doença já instalada correspondem à prevenção secundária. O tratamento precoce do AVE (trombólise, unidades de AVC) reduz a morbimortalidade.',
    commentary: 'Reduzir o sal é prevenção primária. Diagnóstico precoce não é prevenção primária. Evitar iatrogenia é prevenção quaternária.',
    reference: 'LEAVELL Hugh R.; CLARK, Edwin G. Medicina Preventiva. SP, McGraw-Hill do Brasil, RJ FENAME, 1978 NORMAN, Armando Henrique; TESSER, Charles Dalcanale. Prevenção quaternária na atenção primária à saúde: uma necessidade do Sistema Único de Saúde. Cad. Saúde Pública, Rio de Janeiro, v. 25, n. 9, p. 2012-2020, Sept. 2009 Tratado de Medicina de Família e Comunidade 2ª edição, 2018.',
    tags: ['saúde coletiva', 'níveis de prevenção']
  },
  {
    id: 'tp2019-103',
    module: 'Saúde Coletiva',
    text: 'No Brasil, o perfil de morbimortalidade passou do predomínio de doenças infectocontagiosas para o predomínio de doenças crônicas não transmissíveis.\n\nEsse fenômeno é denominado:',
    options: [
      '(A) Falácia ecológica',
      '(B) Perfil de morbimortalidade da população',
      '(C) Transição epidemiológica',
      '(D) Evolução natural das doenças'
    ],
    correctAnswer: 2,
    explanation: 'A transição epidemiológica é a mudança, a longo prazo, dos padrões de morbimortalidade de uma população — no Brasil, o predomínio passou das doenças infecciosas para as doenças crônicas não transmissíveis, acompanhando a transição demográfica.',
    commentary: 'A falácia ecológica é um erro de inferência em estudos ecológicos. \'Perfil de morbimortalidade\' e \'evolução natural das doenças\' não nomeiam o fenômeno.',
    reference: 'Medronho RA, Carvalho DM, Bloch KV, Luiz RR, Werneck GL. Epidemiologia. São Paulo: Atheneu, 2006. / Rouquayrol MZ, Gurgel M. Epidemiologia e saúde. 8ª Ed. Rio de Janeiro: MedBook, 2018.',
    tags: ['saúde coletiva', 'epidemiologia', 'transição epidemiológica']
  },
  {
    id: 'tp2019-104',
    module: 'Saúde Coletiva',
    text: 'Homem, 32 anos, comparece à Unidade Básica de Saúde com queixas de náuseas e vômitos há 5 dias. Teve diagnóstico recente de tuberculose pulmonar e iniciou, há 20 dias, o uso de rifampicina + isoniazida + pirazinamida + etambutol (quatro comprimidos em jejum), mas suspendeu a medicação desde que os sintomas surgiram. Exame físico: desidratado, sem outras alterações.\n\nApós hidratação venosa na própria UBS, a conduta, com base nas recomendações do Ministério da Saúde, é:',
    options: [
      '(A) Prescrever sintomáticos, reintroduzir os medicamentos um a um e acompanhar com dosagem seriada de aminotransferases (ALT/AST).',
      '(B) Encaminhar para hospital de referência secundária, pois a medicação deverá ser reintroduzida em regime de internação.',
      '(C) Prescrever medicação sintomática, manter a medicação suspensa por mais 7 dias e reintroduzir, orientando que seja tomada com o café da manhã.',
      '(D) Prescrever sintomáticos, solicitar dosagem de aminotransferases (ALT/AST) e reintroduzir a medicação, orientando que seja tomada duas horas após o café da manhã.'
    ],
    correctAnswer: 3,
    explanation: 'Náuseas e vômitos são reações adversas menores ao esquema básico da tuberculose. A conduta é manejá-las na atenção básica: sintomáticos, investigar hepatotoxicidade (ALT/AST) e reintroduzir a medicação, orientando a tomada após o café da manhã ou duas horas depois para reduzir a intolerância.',
    commentary: 'A reintrodução \'um a um\' é para hepatotoxicidade confirmada. Internação não é necessária para reação menor. Manter suspenso por mais 7 dias prolonga desnecessariamente a interrupção.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância Epidemiológica. Manual de recomendações para o controle da tuberculose no Brasil. Brasília: Ministério da Saúde, 2018.',
    tags: ['saúde coletiva', 'tuberculose', 'atenção primária']
  },
  {
    id: 'tp2019-105',
    module: 'Saúde Coletiva',
    text: 'Na organização do processo de trabalho das equipes de saúde da família, as equipes de apoio matricial (NASF – Núcleo Ampliado de Saúde da Família) têm como responsabilidade:',
    options: [
      '(A) A gestão do cuidado das famílias da área de abrangência da equipe de saúde da família.',
      '(B) O atendimento básico integral às famílias da área de abrangência da equipe de saúde da família.',
      '(C) O planejamento e a execução das ações de saúde na área de abrangência da equipe de saúde da família.',
      '(D) O compartilhamento e apoio às práticas em saúde das equipes de saúde da família.'
    ],
    correctAnswer: 3,
    explanation: 'O NASF atuava como apoio matricial às equipes de Saúde da Família: compartilhava casos, apoiava tecnicamente e qualificava as práticas, sem assumir a coordenação do cuidado, que permanecia com a equipe de referência.',
    commentary: 'Gestão do cuidado, atendimento básico integral e planejamento das ações do território são atribuições da equipe de Saúde da Família. Observação: em 2023, o NASF foi substituído pelas equipes Multiprofissionais na APS (eMulti), com lógica semelhante de apoio.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. – Brasília: Ministério da Saúde, 2009. / PORTARIA Nº 2.436, DE 21 DE SETEMBRO DE 2017. Aprova a Política Nacional de Atenção Básica, estabelecendo a revisão de diretrizes para a organização da Atenção Básica, no âmbito do Sistema Único de Saúde (SUS). 9 19',
    tags: ['saúde coletiva', 'atenção primária', 'apoio matricial']
  },
  {
    id: 'tp2019-106',
    module: 'Saúde Coletiva',
    text: 'Gestante, 23 anos, na 35ª semana, em tratamento antirretroviral há 7 anos, sendo os últimos 3 anos em resgate. Nesta segunda gestação, apresentou efeitos adversos à zidovudina, interrompeu todos os medicamentos e abandonou o pré-natal. Deu entrada na Unidade de Urgência com quadro de sangramento vaginal, falta de ar e dores intensas em baixo ventre. Apresentava-se em mau estado geral e evoluiu com dispneia importante, saturação de O₂ = 60%, necessitando de intubação orotraqueal, vindo a falecer após três horas. Aspirado pulmonar com BAAR positivo, radiografia de tórax com áreas de cavitações em ápice direito e hemograma com anemia.\n\nO preenchimento correto da Declaração de Óbito é:',
    options: [
      '(A) Parte I: a – Insuficiência Respiratória Aguda; b – Tuberculose Pulmonar; c – AIDS; Parte II: Gestação na 35ª semana.',
      '(B) Parte I: a – Tuberculose Pulmonar; b – AIDS; c – Gestação na 35ª semana. Parte II: Insuficiência Respiratória Aguda.',
      '(C) Parte I: a – Insuficiência Respiratória Aguda; b – Tuberculose Pulmonar; c - Gestação na 35ª semana; Parte II: AIDS.',
      '(D) Parte I: a – Tuberculose pulmonar; b – Insuficiência Respiratória; c – Gestação na 35ª semana; Parte II: AIDS.'
    ],
    correctAnswer: 0,
    explanation: 'Na Parte I da Declaração de Óbito, a linha \'a\' traz a causa terminal e as linhas seguintes, a sequência de causas até a básica. Aqui: insuficiência respiratória aguda ← tuberculose pulmonar ← AIDS (causa básica).\n\nA gestação, que contribuiu mas não integra a cadeia causal direta, é registrada na Parte II.',
    commentary: 'As demais alternativas invertem a sequência causal ou colocam a AIDS — causa básica — fora da Parte I.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Análise de Situação de Saúde. Manual de Instruções para o preenchimento da Declaração de Óbito /Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Análise de Situação de Saúde. – Brasília: Ministério da Saúde, 2011 / Atestado médico – prática e ética. / Coordenação de Gabriel Oselka. São Paulo: Conselho Regional de Medicina do Estado de São Paulo, 2013.',
    tags: ['saúde coletiva', 'declaração de óbito']
  },
  {
    id: 'tp2019-107',
    module: 'Saúde Coletiva',
    text: 'Jovem, 15 anos, é atendida pelo médico de família de uma USF desde o seu nascimento. O médico conhece a família, que é bem estruturada e tem boas relações entre si. Ela vem ao atendimento com queixa de gripe. Durante a consulta, conta que está feliz, namorando um rapaz de 19 anos, que é usuário de drogas injetáveis e que mantém relação sexual com ele, com preservativo masculino. Além disso, conta que está usando cocaína quase diariamente com ele e que não vê nenhum problema, pois os pais não perceberam e continua indo bem na escola.\n\nLevando em conta o Código de Ética Médica, a medida mais cabível para o cuidado da jovem é:',
    options: [
      '(A) Discutir os riscos com a jovem, mas não quebrar o sigilo médico, pois pelo Estatuto da Criança e do Adolescente, o médico não pode quebrar o sigilo nesta situação.',
      '(B) Não discutir essas questões com a jovem, pois é menor de idade e quebrar o sigilo médico contando a seus pais, já que não pode ter relações sexuais com maiores de 18 anos.',
      '(C) Discutir os riscos com a jovem e avisá-la que vai quebrar o sigilo médico contando a seus pais, já que corre risco, pois está usando drogas e é menor de 18 anos.',
      '(D) Discutir os riscos com a jovem, mas não quebrar o sigilo médico, pois ela está indo bem na escola e não tem nenhuma doença ou perda de funcionalidade por este motivo.'
    ],
    correctAnswer: 2,
    explanation: 'O Código de Ética Médica veda a quebra de sigilo do adolescente com capacidade de discernimento, exceto quando a não revelação puder acarretar dano ao paciente.\n\nO uso quase diário de cocaína por uma adolescente, com parceiro usuário de drogas injetáveis, representa risco à sua saúde. Justifica-se a quebra de sigilo, informando-a previamente e discutindo os riscos com ela.',
    commentary: 'A alternativa B dispensa o diálogo com a paciente. As alternativas A e D ignoram o risco que justifica a quebra.',
    reference: 'Código de Ética Médica: Resolução CFM nº 2.217, de 27 de setembro de 2018, modificada pelas Resoluções CFM nº 2.222/2018 e 2.226/2019 / Conselho Federal de Medicina – Brasília: Conselho Federal de Medicina, 2019.',
    tags: ['ética médica', 'adolescência', 'sigilo']
  },
  {
    id: 'tp2019-108',
    module: 'Saúde Coletiva',
    text: 'Um pesquisador diz que um determinado exame laboratorial tem sensibilidade de 98% para o diagnóstico de uma doença.\n\nEle está dizendo que:',
    options: [
      '(A) 98% dos indivíduos que não têm essa doença terão resultados negativos nesse exame.',
      '(B) 2% dos indivíduos que têm essa doença terão resultados negativos para ela.',
      '(C) 98% dos indivíduos que têm resultados positivos para essa doença serão verdadeiramente doentes.',
      '(D) 2% dos indivíduos que não têm essa doença terão resultados positivos para ela.'
    ],
    correctAnswer: 1,
    explanation: 'Sensibilidade é a proporção de doentes com teste positivo. Sensibilidade de 98% significa que 98% dos doentes testam positivo — e, portanto, 2% dos doentes terão resultado negativo (falsos negativos).',
    commentary: 'A alternativa A descreve especificidade. A C descreve valor preditivo positivo. A D descreve o complemento da especificidade (falsos positivos).',
    reference: 'Weiss, N S. Clinical Epidemiology. In: Rothman KJ, Organizador. Modern Epidemiology. 3o. Philadelphia: Lippincott Williams & Wilkins; 2008. p. 641.',
    tags: ['saúde coletiva', 'epidemiologia', 'testes diagnósticos']
  },
  {
    id: 'tp2019-109',
    module: 'Saúde Coletiva',
    text: 'Mulher, 39 anos, trabalhadora de uma indústria alimentícia, comparece ao Serviço Especializado de Segurança e Medicina do Trabalho da empresa para exame médico periódico. Queixa-se de parestesias nas mãos, com piora noturna e limitação para preensão de objetos. Exerce sua atividade laboral executando movimentos repetitivos de flexão e extensão dos dedos e punhos.\n\nDuas manobras de exame físico para avaliar possível diagnóstico são:',
    options: [
      '(A) Phalen e Eichoff',
      '(B) Finkelstein e Eichoff',
      '(C) Tinel e Finkelstein',
      '(D) Tinel e Phalen'
    ],
    correctAnswer: 3,
    explanation: 'Parestesias nas mãos com piora noturna em trabalhadora com movimentos repetitivos de punho: síndrome do túnel do carpo (LER/DORT).\n\nAs manobras indicadas são o sinal de Tinel (percussão do nervo mediano no punho) e o teste de Phalen (flexão máxima do punho).',
    commentary: 'Finkelstein e Eichhoff avaliam a tenossinovite de De Quervain.',
    reference: 'BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância em Saúde Ambiental e do Trabalhador. Dor relacionada ao trabalho: lesões por esforços repetitivos (LER) e Distúrbios Osteomusculares Relacionados ao Trabalho (Dort). Brasília: Editora do Ministério da Saúde, 2012. 68 p Manuais Técnicos em Saúde do Trabalhador nº. 10. Protocolos de Complexidade Diferenciada. / http://www.scielo.br/pdf/rbort/v49n5/pt_0102-3616-rbort-49-05-0429.pdf',
    tags: ['saúde coletiva', 'saúde do trabalhador', 'ortopedia']
  },
  {
    id: 'tp2019-110',
    module: 'Saúde Coletiva',
    text: 'Jovem deu entrada na Unidade de Emergência com ferimentos na cabeça, nos braços e nas pernas. Durante a consulta com o médico de plantão, ela revelou que os ferimentos foram causados pelo marido. Nitidamente envergonhada e assustada, ela pediu ao médico que tratasse apenas os ferimentos e mantivesse a situação em segredo.\n\nCom relação à violência doméstica, a equipe deve notificar quando houver:',
    options: [
      '(A) Suspeita ou confirmação de violência doméstica, configurando quebra de sigilo profissional.',
      '(B) Suspeita ou confirmação de violência doméstica, sem o risco de configurar quebra de sigilo profissional.',
      '(C) Confirmação por exame de corpo de delito de violência doméstica, sem o risco de configurar quebra de sigilo profissional.',
      '(D) Confirmação por exame de corpo de delito de violência doméstica, configurando quebra de sigilo profissional.'
    ],
    correctAnswer: 1,
    explanation: 'A violência doméstica é de notificação compulsória diante de suspeita ou confirmação. A notificação é feita à vigilância epidemiológica (SINAN), tem finalidade de vigilância e proteção e não configura quebra de sigilo profissional nem equivale a denúncia policial.',
    commentary: 'Não é necessário exame de corpo de delito para notificar.',
    reference: 'Paraná. Atenção à Mulher em Situação de Violência – Linha Guia, 2012. Disponível em: http://www.saude.pr.gov.br/arquivos/File/Linha_Guia_Violencia_S exual_contra_a_Mulher2.pdf. / CFM. Notas e Despachos. 2016. Disponível em: http://www.portalmedico.org.br/notasdespachos/CFM/2016/3_201 2.pdf',
    tags: ['saúde coletiva', 'violência', 'notificação compulsória']
  },
  {
    id: 'tp2019-111',
    module: 'Saúde Coletiva',
    text: 'Homem, 30 anos, solteiro, vida sexual ativa e com diferentes parceiras nos últimos cinco anos, sem uso de preservativo na maioria das relações.\n\nEncontra-se assintomático, porém com exame VDRL positivo e teste rápido treponêmico reagente. A conduta é:',
    options: [
      '(A) Tratamento com Penicilina G Benzatina 7.200.000 UI, controle de cura semestral por meio do FTA-Abs e orientar sobre o uso de preservativos nas relações sexuais.',
      '(B) Não é necessário tratamento, repetir o exame após um ano, pois o VDRL é inespecífico para o Treponema pallidum.',
      '(C) Tratamento com Penicilina G Benzatina 7.200.000 UI, esclarecer sobre a importância de trazer as parceiras sexuais para o aconselhamento, diagnóstico e tratamento.',
      '(D) Tratamento com Penicilina G Benzatina 2.400.000 UI, repetir o exame após um ano e orientar sobre o uso de preservativos nas relações sexuais.'
    ],
    correctAnswer: 2,
    explanation: 'Teste não treponêmico e treponêmico reagentes em paciente assintomático, sem tempo de infecção conhecido: sífilis latente de duração indeterminada.\n\nO tratamento é penicilina benzatina 7,2 milhões UI (3 doses semanais de 2,4 milhões UI), com seguimento por VDRL trimestral e convocação das parcerias sexuais para testagem e tratamento.',
    commentary: 'Testes treponêmicos não servem para controle de cura. O VDRL reagente com treponêmico positivo não pode ser descartado. A dose de 2,4 milhões UI é para sífilis recente.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de DST, Aids e Hepatites Virais. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis – Brasília: Ministério da Saúde, 2ª edição revisada – 2016.',
    tags: ['saúde coletiva', 'sífilis', 'IST']
  },
  {
    id: 'tp2019-112',
    module: 'Saúde Coletiva',
    text: 'O coeficiente de mortalidade perinatal tem sido recomendado como o indicador mais apropriado para análise da assistência obstétrica e neonatal e de utilização dos serviços de saúde, por dar maior visibilidade aos problemas existentes e para planejamento de ações e prevenção de morte fetal e neonatal.\n\nA mortalidade perinatal representa os óbitos ocorridos entre:',
    options: [
      '(A) 22ª semana de gestação e até 7 dias após o nascimento.',
      '(B) 20ª semana de gestação e até 7 dias após o nascimento.',
      '(C) 22ª semana de gestação e até 5 dias após o nascimento.',
      '(D) 20ª semana de gestação e até 5 dias após o nascimento.'
    ],
    correctAnswer: 0,
    explanation: 'A mortalidade perinatal inclui os óbitos fetais a partir de 22 semanas completas de gestação (ou 500 g) e os óbitos neonatais precoces, até 7 dias completos de vida.',
    commentary: 'O limite inferior é 22 semanas, e não 20. O limite superior é 7 dias, e não 5.',
    reference: 'http://tabnet.datasus.gov.br/cgi/idb2000/fqc05.htm',
    tags: ['saúde coletiva', 'indicadores de saúde']
  },
  {
    id: 'tp2019-113',
    module: 'Saúde Coletiva',
    text: 'Caso A: paciente que, independentemente da idade e da situação vacinal, apresenta febre e exantema maculopapular acompanhados de um ou mais dos seguintes sinais e sintomas: tosse e/ou coriza e/ou conjuntivite. Caso B: paciente com quadro discreto de febre moderada, de início súbito, que dura de 2 a 3 dias, e sintomas generalizados inespecíficos (astenia, adinamia, anorexia, cefaleia e outros) e erupção cutânea papulovesicular, que se inicia na face, couro cabeludo ou tronco.\n\nOs casos A e B apresentam, respectivamente, características de casos suspeitos de:',
    options: [
      '(A) Rubéola e varicela',
      '(B) Sarampo e varicela',
      '(C) Sarampo e rubéola',
      '(D) Rubéola e sarampo'
    ],
    correctAnswer: 1,
    explanation: 'Caso A — febre e exantema maculopapular com tosse, coriza ou conjuntivite, independentemente de idade e vacinação: definição de caso suspeito de sarampo.\n\nCaso B — febre moderada de início súbito, sintomas gerais e exantema papulovesicular que começa na face, couro cabeludo ou tronco: varicela.',
    commentary: 'A rubéola cursa com exantema maculopapular e linfadenopatia retroauricular/occipital, sem a tríade catarral e sem vesículas.',
    reference: 'http://portal.saude.sp.gov.br/resources/cve-centro-de-vigilancia-epidemiologica/areas-de-vigilancia/doencas-de-transmissao-respiratoria/sindrome-da-rubeola-congenita-src/doc/2019/sarampo19_alerta_profissionais_saude.pdf https://www.cevs.rs.gov.br/upload/arquivos/201704/18115053-nota-tecnica-varicela-18-04-2017.pdf http://www.saude.sp.gov.br/resources/cve-centro-de-vigilancia-epidemiologica/areas-de-vigilancia/doencas-de-transmissao-respiratoria/sindrome-da-rubeola-congenita-src/rubeola.html',
    tags: ['saúde coletiva', 'vigilância epidemiológica', 'doenças exantemáticas']
  },
  {
    id: 'tp2019-114',
    module: 'Saúde Coletiva',
    text: 'Homem, 66 anos, hígido, comparece à USF para vacinar-se contra a gripe. Relata que viajará em um mês para uma região endêmica de febre amarela. No seu cartão de vacinação há somente o registro de um reforço de vacina dupla adulto, feito há oito anos.\n\nConsiderando o esquema vacinal do idoso preconizado pelo Ministério da Saúde, a melhor conduta é:',
    options: [
      '(A) Vacinar contra febre amarela e gripe no mesmo dia, informar que o cartão está incompleto e reagendar vacina para hepatite B.',
      '(B) Vacinar contra febre amarela e gripe no mesmo dia, informar que o cartão está incompleto e reagendar vacina para hepatite B e reforço da dupla adulto.',
      '(C) Vacinar contra gripe no mesmo dia, informar que o cartão está incompleto e reagendar, em cinco dias, vacina para febre amarela e hepatite B.',
      '(D) Vacinar contra febre amarela no mesmo dia, informar que o cartão está incompleto e reagendar, em cinco dias, vacina para gripe, hepatite B e dupla adulto.'
    ],
    correctAnswer: 0,
    explanation: 'Pelo calendário do Ministério da Saúde para idosos à época: hepatite B (3 doses, se não vacinado), dT a cada 10 anos e influenza anual. A febre amarela é indicada para viagem a área de risco e pode ser feita no mesmo dia da influenza.\n\nO idoso deve receber febre amarela e influenza hoje e agendar a hepatite B. A dT foi há 8 anos, portanto ainda está em dia.',
    commentary: 'O reforço de dT não está vencido. Não é necessário intervalo entre febre amarela e influenza. Observação: para pessoas com 60 anos ou mais, a vacina de febre amarela requer avaliação de risco-benefício.',
    reference: 'Sites do Ministério da Saúde: http://portalms.saude.gov.br/acoes-e-programas/vacinacao/calendario-nacional-de-vacinacao/idoso e http://portalms.saude.gov.br/acoes-e-programas/vacinacao/calendario-nacional-de-vacinacao acessados em 20/05/2018.',
    tags: ['saúde coletiva', 'imunização', 'saúde do idoso']
  },
  {
    id: 'tp2019-115',
    module: 'Saúde Coletiva',
    text: 'Vinte pessoas foram atendidas em uma Unidade de Emergência com histórico de diarreia, náuseas, vômitos, dor abdominal e febre há poucas horas. O médico plantonista identificou que todas participaram de um almoço de confraternização, oferecido em restaurante, tendo como cardápio churrasco com carnes variadas e maionese.\n\nConsiderando esse contexto, uma das condutas do médico deverá ser:',
    options: [
      '(A) Encaminhar os pacientes para a Vigilância Sanitária para que realizem a formalização da notificação.',
      '(B) Orientar para prestarem queixa policial para investigação do surto, sendo esta a autoridade responsável pela investigação e intervenção no estabelecimento.',
      '(C) Notificar o serviço de vigilância em saúde (Vigilância Epidemiológica e/ou Vigilância Sanitária).',
      '(D) Investigar as causas do surto junto ao órgão federal de saúde, para embasar o processo contra o restaurante.'
    ],
    correctAnswer: 2,
    explanation: 'Surto de doença transmitida por alimentos é de notificação compulsória imediata. O médico deve notificar a vigilância em saúde (epidemiológica e/ou sanitária), responsável pela investigação do surto e pelas medidas no estabelecimento.',
    commentary: 'A notificação é dever do profissional, não do paciente. A polícia não é a autoridade sanitária. A investigação não é feita pelo médico junto ao órgão federal para processar o restaurante.',
    reference: 'Brasil, Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância Epidemiológica. Manual integrado de vigilância, prevenção e controle de doenças transmitidas por alimentos/ Ministério da saúde, secretaria de vigilância em saúde. Brasília: editora do Ministério da Saúde, 2010.',
    tags: ['saúde coletiva', 'vigilância', 'doenças transmitidas por alimentos']
  },
  {
    id: 'tp2019-116',
    module: 'Saúde Coletiva',
    text: 'A Norma Regulamentadora nº 32, lançada pelo Ministério do Trabalho por meio da Portaria nº 485/2005, estabelece as diretrizes básicas para a implementação de medidas de proteção e segurança à saúde dos trabalhadores nos serviços de saúde.\n\nEm relação ao uso dos Equipamentos de Proteção Individual (EPI), é correto afirmar que:',
    options: [
      '(A) O uso de luvas substitui o processo de lavagem das mãos, trazendo agilidade e maior segurança durante a assistência à saúde, principalmente se o trabalhador estiver com feridas ou lesões nos membros superiores.',
      '(B) Os EPIs devem ser fornecidos gratuitamente pelo empregador; os trabalhadores não devem deixar o local de trabalho com eles e aqueles com possibilidade de exposição a agentes biológicos devem utilizar vestimenta de trabalho adequada e em condições de conforto.',
      '(C) Descartáveis ou não, deverão estar à disposição em número suficiente nos postos de trabalho, de forma que seja garantido o imediato fornecimento ou reposição, ficando sob responsabilidade do trabalhador repor o EPI quando esse deixar de seguir as normas de biossegurança.',
      '(D) O trabalhador que realiza atividades em áreas onde existam fontes de radiações ionizantes deverá utilizar o dosímetro, o qual deverá estar calibrado e enviado para leitura em até 48 horas na ocorrência ou suspeita de exposição acidental.'
    ],
    correctAnswer: 1,
    explanation: 'A NR 32 determina que os EPIs sejam fornecidos gratuitamente pelo empregador, que os trabalhadores não deixem o local de trabalho com EPIs ou vestimentas usadas e que os expostos a agentes biológicos usem vestimenta adequada e confortável.',
    commentary: 'Luvas não substituem a higiene das mãos. A reposição de EPI é responsabilidade do empregador. As regras de dosimetria descritas na alternativa D estão incorretas.',
    reference: 'BRASIL. Ministério do Trabalho. NR 32 – Segurança e saúde no trabalho em serviços de saúde. Disponível em: http://www.guiatrabalhista.com.br/legislacao/nr/nr32.htm 9 21',
    tags: ['saúde coletiva', 'saúde do trabalhador', 'biossegurança']
  },
  {
    id: 'tp2019-117',
    module: 'Saúde Coletiva',
    text: 'O financiamento do Sistema Único de Saúde é feito por meio de recursos oriundos das seguintes fontes:',
    options: [
      '(A) Orçamento da Seguridade Social, impostos de estados e municípios.',
      '(B) Fundo Nacional de Saúde e Percentual de Renda em eventos esportivos.',
      '(C) Assembleia Legislativa e Impostos pagos pelas empresas.',
      '(D) Ministério da Saúde e Contribuição Provisória sobre Movimentação Financeira (CPMF).'
    ],
    correctAnswer: 0,
    explanation: 'Pela Constituição e pela Lei 8.080/1990, o SUS é financiado com recursos do orçamento da Seguridade Social da União, além de recursos próprios de estados e municípios (impostos e transferências).',
    commentary: 'Eventos esportivos, assembleias legislativas e a CPMF (extinta em 2007) não são as fontes de financiamento do SUS.',
    reference: 'https://viniciusmaiasilva.jusbrasil.com.br/artigos/342767224/financi amento-do-sistema-unico-de-saude',
    tags: ['saúde coletiva', 'SUS', 'financiamento']
  },
  {
    id: 'tp2019-118',
    module: 'Saúde Coletiva',
    text: 'Quanto aos segmentos sociais que compõem o Conselho Nacional de Saúde (CNS), a alternativa correta de acordo com a lei 8.142/90 é:',
    options: [
      '(A) 50% de usuário do SUS, 30% de trabalhadores do SUS e 20% de gestores/prestadores de serviço de saúde.',
      '(B) 30% de usuário do SUS, 30% de trabalhadores do SUS e 40% de gestores/prestadores de serviço de saúde.',
      '(C) 25% de usuário do SUS, 25% de trabalhadores do SUS e 50% de gestores/prestadores de serviço de saúde.',
      '(D) 50% de usuário do SUS, 25% de trabalhadores do SUS e 25% de gestores/prestadores de serviço de saúde.'
    ],
    correctAnswer: 3,
    explanation: 'A Lei 8.142/1990 estabelece a paridade nos conselhos de saúde: 50% de representantes de usuários e 50% divididos entre os demais segmentos — 25% de trabalhadores da saúde e 25% de gestores e prestadores.',
    commentary: 'As demais distribuições não respeitam a paridade dos usuários.',
    reference: 'Página do Conselho Nacional de Saúde – ministério da saúde, https://conselho.saude.gov.br/apresentacao/composicao.htm Lei 8.142/90, 28/12/90 / Instituto de Métrica e Avaliação em Saúde. Estudo de Carga de Doença Global: gerando evidências, informando políticas de saúde. Seattle, WA: IHME, 2013.',
    tags: ['saúde coletiva', 'SUS', 'controle social']
  },
  {
    id: 'tp2019-119',
    module: 'Saúde Coletiva',
    text: 'No período prévio à implantação do Sistema Único de Saúde (SUS), podemos afirmar que, em relação ao acesso aos serviços de saúde:',
    options: [
      '(A) Pessoas estrangeiras só conseguiam atendimento nos serviços de saúde das entidades filantrópicas.',
      '(B) Todos os cidadãos brasileiros poderiam acessar gratuitamente os serviços de saúde dos hospitais conveniados às caixas de aposentadoria e pensão.',
      '(C) Os trabalhadores não formais tinham garantido o acesso aos serviços dos prestadores de saúde do sistema complementar gratuitamente.',
      '(D) Apenas os trabalhadores com vínculo empregatício tinham direito à assistência do Instituto Nacional de Assistência Médica da Previdência Social.'
    ],
    correctAnswer: 3,
    explanation: 'Antes do SUS, a assistência médica pública era vinculada à Previdência Social: apenas trabalhadores com carteira assinada (contribuintes) e seus dependentes tinham acesso ao INAMPS. Os demais dependiam de serviços filantrópicos, do pagamento direto ou das ações do Ministério da Saúde.',
    commentary: 'Não havia acesso universal e gratuito. Trabalhadores informais não tinham garantia de assistência, e estrangeiros não eram restritos às filantrópicas.',
    reference: 'Souza R R. - O Sistema Público de Saúde Brasileiro - MS, Brasília - DF. Coordenação-Geral de Documentação e Informação/SAA/SE Ministério da Saúde, ed. MS; 2002.',
    tags: ['saúde coletiva', 'história do SUS']
  },
  {
    id: 'tp2019-120',
    module: 'Saúde Coletiva',
    text: 'Estudante, 20 anos, comparece ao serviço de pronto atendimento ginecológico solicitando realização de testes sorológicos para doenças sexualmente transmissíveis. Na avaliação inicial, estava bastante ansiosa e, após hesitação inicial, referiu queixas depressivas há três meses, desde quando foi vítima de violência sexual em uma festa. Refere que estava embriagada, mas que se lembra sobre o evento e que ficou envergonhada quando acordou no local e notou o que havia ocorrido. Não procurou atendimento médico em um primeiro momento e nem contou a ninguém sobre o fato, com medo de julgamentos. Refere que já menstruou, mas que se sente constantemente triste e ansiosa, com medo de sair de casa, queda no rendimento acadêmico, com dificuldade de interagir com colegas e familiares, insônia e estar assustando-se com facilidade. Conta ainda que, quando dorme, frequentemente tem pesadelos e que se sente constantemente invadida por lembranças do evento.\n\nA hipótese diagnóstica mais provável é de transtorno:',
    options: [
      '(A) depressivo maior',
      '(B) do estresse pós-traumático',
      '(C) de estresse agudo',
      '(D) de ansiedade generalizada'
    ],
    correctAnswer: 1,
    explanation: 'Após um evento traumático (violência sexual), há mais de 1 mês: revivescência (pesadelos e lembranças intrusivas), evitação (medo de sair de casa), hiperexcitabilidade (sobressalto, insônia) e prejuízo funcional. O quadro é transtorno de estresse pós-traumático.',
    commentary: 'O transtorno de estresse agudo dura menos de 1 mês. O transtorno depressivo maior e o TAG não explicam as intrusões ligadas ao trauma.',
    reference: 'Organização Mundial da Saúde. CID-10 Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde; 1997. / Dalgalarrondo P. Psicopatologia e semiologia dos transtornos mentais – 2a edição – Porto Alegre: Artmed, 2008. 9 23',
    tags: ['psiquiatria', 'violência sexual', 'TEPT']
  },
  // ---- Teste de Progresso 2020 — Consórcio SP 1, outubro (gabarito oficial) ----
  {
    id: 'tp2020-21',
    module: 'Saúde Coletiva',
    text: 'O objetivo deste estudo foi verificar associação entre exposição precoce ao leite de vaca e ocorrência de Diabetes Mellitus tipo 1 entre menores de 18 anos atendidos em uma unidade de saúde. Foi selecionada uma amostra constituída por 128 indivíduos de ambos os sexos. Foram entrevistadas 64 mães com filhos de portadores de Diabetes Mellitus tipo 1 (DM Tipo 1) e 64 mães que não tiveram filhos DM Tipo 1. Os pesquisadores perguntaram a elas com qual idade os filhos tomaram leite de vaca pela primeira vez, se antes dos 4 meses ou não. Resultados: 84,4% dos indivíduos diabéticos foram expostos ao leite de vaca antes dos quatro meses de idade, enquanto no grupo controle este percentual foi de 64,1%. A análise univariada identificou uma associação estatisticamente significante entre exposição precoce ao leite de vaca e Diabetes (p = 0,01). Na análise multivariada, essa associação permaneceu e a razão de chances estimada foi de 4,09 (IC 95%: 1,19 - 14,04; p = 0,01).\n\nQue tipo de estudo foi realizado e qual a conclusão?',
    options: [
      '(A) Trata-se de um estudo transversal, pois as mães foram entrevistadas uma única vez e houve associação entre o consumo de leite precoce e a DM Tipo 1.',
      '(B) Trata-se de um estudo epidemiológico com delineamento caso-controle. O cálculo do OR na análise univariada e multivariada mostrou que a exposição precoce ao leite de vaca associou-se significativamente à DM Tipo 1 entre os filhos das mães entrevistadas.',
      '(C) Trata-se de coorte, pois os pesquisadores perguntaram às mães sobre quando ocorreu o diagnóstico de DM tipo1, do nascimento à adolescência. Não houve associação entre o consumo de leite precoce e a DM Tipo 1.',
      '(D) Trata-se de um estudo ecológico, pois os resultados percentuais remetem ao total dos participantes da amostra, e não individualmente.'
    ],
    correctAnswer: 1,
    explanation: 'Os pesquisadores partiram de indivíduos com a doença (64 mães de filhos com DM1) e sem a doença (64 controles) e investigaram retrospectivamente a exposição (leite de vaca antes dos 4 meses): estudo caso-controle.\n\nA odds ratio de 4,09 com IC 95% que não inclui 1 indica associação estatisticamente significativa.',
    commentary: 'Não é transversal (a seleção foi pelo desfecho), nem coorte (não houve seguimento a partir da exposição), nem ecológico (os dados são individuais).',
    reference: 'ROUQUAYROL, Maria Zelia; SILVA, Marcelo Gurgel Carlos Da (Org.). Epidemiologia & saúde. 8ª ed. Rio de Janeiro: Medbook, 2018. 752 p.',
    tags: ['saúde coletiva', 'epidemiologia', 'desenhos de estudo']
  },
  {
    id: 'tp2020-22',
    module: 'Saúde Coletiva',
    text: 'Considerando as precauções indicadas para a assistência aos pacientes suspeitos ou confirmados de infecção pelo novo coronavírus, são indicados equipamentos de proteção individual (EPI).\n\nAssinale a alternativa correta:',
    options: [
      '(A) O uso de luvas de procedimento pelo paciente suspeito é uma medida de precaução de contato e para gotículas.',
      '(B) A higiene das mãos com água e sabonete líquido não é considerada uma medida de precaução para aerossóis.',
      '(C) O uso da máscara N95/PFF2 ou equivalente pelo profissional de saúde é uma medida de precaução para aerossóis.',
      '(D) O uso de avental pelo profissional de saúde é uma medida de precaução para gotículas.'
    ],
    correctAnswer: 2,
    explanation: 'A máscara N95/PFF2 é a medida de precaução para aerossóis, indicada ao profissional em procedimentos geradores de aerossol em pacientes com COVID-19.',
    commentary: 'Luvas são precaução de contato, e o paciente não as usa. A higiene das mãos é medida-padrão, presente em todas as precauções. O avental é precaução de contato.',
    reference: 'Agência Nacional de Vigilância Sanitária. Nota técnica GVIMS/GGTES/ANVISA Nº 04/2020. Orientações para Serviços de Saúde: Medidas de prevenção e controle que devem ser adotadas durante a assistência aos casos suspeitos ou confirmados de infecção pelo novo Coronavírus (SARS-CoV-2). (Publicada em 30 de janeiro de 2020 e atualizada em 31/03/2020). 73p. Disponível em: http://portal.anvisa.gov.br; páginas 14, 15 e 19.',
    tags: ['saúde coletiva', 'biossegurança', 'covid-19']
  },
  {
    id: 'tp2020-23',
    module: 'Saúde Coletiva',
    text: '“R.V.T.R, nascido em 11/04/17, sexo masculino, falecido em 12/04/17. Filho de M.P.O., 28 anos, solteira, ensino médio completo e auxiliar de serviços gerais. Gestante desenvolveu toxemia severa com descolamento prematuro da placenta. RN nasceu de parto cesárea, IG 32 semanas, com a presença de circular de cordão umbilical, Apgar 2/7, sinais de sofrimento fetal com cianose +/++++. Recebeu os cuidados de reanimação na sala de parto e foi transferido para a UTI Neonatal, onde faleceu no dia seguinte. Declaração de Óbito apresentou as seguintes causas, conforme a descrição da declaração de óbito:\n\nParte I – a) P22.0 - Síndrome da angústia respiratório do recém-nascido; b) O60.1 - Trabalho de parto pré-termo com parto pré-termo; c) O14 - Hipertensão gestacional (induzida pela gravidez) com proteinúria significativa.” Com base no relatório acima, assinale a alternativa correta:',
    options: [
      '(A) Por outro lado, a causa da morte do RN foi O60.1 - Trabalho de parto pré-termo com parto pré-termo.',
      '(B) Trata-se de um óbito neonatal tardio, pois ocorreu 24 horas após o nascimento do recém-nascido.',
      '(C) A causa básica da morte do RN foi P22.0 - Síndrome da angústia respiratória do recém-nascido.',
      '(D) Segundo o caso relatado, trata-se de um óbito evitável, reduzível por adequada atenção à mulher na gestação.'
    ],
    correctAnswer: 3,
    explanation: 'O óbito ocorreu no primeiro dia de vida, em RN prematuro de mãe com pré-eclâmpsia grave e DPP — situação considerada evitável por adequada atenção à mulher na gestação (controle da hipertensão no pré-natal).\n\nA causa básica é a doença materna que iniciou a cadeia de eventos (O14 — hipertensão gestacional com proteinúria), e não a síndrome do desconforto respiratório.',
    commentary: 'O óbito até 6 dias completos é neonatal precoce, não tardio. A causa básica não é o parto pré-termo nem a SDR, que são consequências.',
    reference: 'BRASIL. Ministério da Saúde. Manual de vigilância do óbito infantil e fetal. Brasília: Editora do Ministério da Saúde, 2009. P. 15, 29, 34. / CLOHERTY, J.P, et al. Manual de neonatologia. 7. ed. - [Reimpr.] - Rio de Janeiro: Guanabara Koogan, 2019. P. 316-323.',
    tags: ['saúde coletiva', 'mortalidade infantil', 'vigilância do óbito']
  },
  {
    id: 'tp2020-24',
    module: 'Saúde Coletiva',
    image: '/images/tp2020-24.webp',
    text: 'Em consulta de acolhimento, você atende um homem de 45 anos, preocupado com uma mancha nas costas que ele acha que existe há quase três anos (imagem abaixo). Ele chegou a fazer exames em serviço de saúde de outra cidade, mas ao mudar-se para este bairro perdeu a consulta anterior. Traz exames que foram solicitados no serviço antigo. Ao exame físico, apresenta perda de sensibilidade na lesão.\n\n• Baciloscopia: negativa\n• Exame anatomopatológico: infiltrado inflamatório granulomatoso perineural e perianexial, com pesquisa de BAAR negativa\n• Reação de Mitsuda: positiva\n\nA partir do exame físico e complementar, indique a classificação da hanseníase e o tratamento corretos:',
    options: [
      '(A) Tuberculoide - Rifampicina 600mg e Dapsona 100mg.',
      '(B) Dimorfa - Rifampicina 600mg, Dapsona 100mg e Clofazimina 300mg.',
      '(C) Tuberculoide - Rifampicina 600mg, Dapsona 100mg e Clofazimina 300mg.',
      '(D) Dimorfa - Rifampicina 600mg e Dapsona 100mg.'
    ],
    correctAnswer: 0,
    explanation: 'Lesão única em placa com borda bem delimitada, anestésica, baciloscopia negativa, granuloma perineural sem bacilos e Mitsuda positivo: hanseníase tuberculoide, paucibacilar.\n\nPelo esquema vigente em 2020, a forma paucibacilar era tratada com rifampicina e dapsona por 6 doses.',
    commentary: 'ATENÇÃO — PROTOCOLO ATUALIZADO: desde 2021 o Ministério da Saúde adota a PQT-U (rifampicina, dapsona e clofazimina) para todos os casos, inclusive paucibacilares (6 meses). Pela regra atual, a alternativa C seria a correta; a resposta oficial de 2020 (A) foi mantida.',
    reference: 'Guia prático sobre a hanseníase [recurso eletrônico] /Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância das Doenças Transmissíveis. – Brasília: Ministério da Saúde, 2017.',
    tags: ['saúde coletiva', 'hanseníase', 'dermatologia']
  },
  {
    id: 'tp2020-25',
    module: 'Saúde Coletiva',
    text: 'Dois testes diagnósticos foram realizados em 500 pessoas com suspeita de COVID-19; destes, 300 foram confirmados. Os resultados dos exames foram:\n\nTeste rápido COVID-19 tipo 1\n• Positivo: 210 doentes / 50 não doentes\n• Negativo: 70 doentes / 150 não doentes\n\nTeste rápido COVID-19 tipo 2\n• Positivo: 270 doentes / 40 não doentes\n• Negativo: 30 doentes / 160 não doentes\n\nComparado ao teste rápido tipo 1, o teste rápido tipo 2 apresenta:',
    options: [
      '(A) Maior sensibilidade e maior especificidade.',
      '(B) Menor sensibilidade e menor especificidade.',
      '(C) Menor sensibilidade e maior especificidade.',
      '(D) Maior sensibilidade e menor especificidade.'
    ],
    correctAnswer: 0,
    explanation: 'Teste 1: sensibilidade = 210/280 = 75%; especificidade = 150/200 = 75%.\nTeste 2: sensibilidade = 270/300 = 90%; especificidade = 160/200 = 80%.\n\nO teste 2 tem maior sensibilidade e maior especificidade.',
    commentary: 'Os totais diferem entre as tabelas (280 doentes no teste 1 versus 300 no teste 2), mas as proporções calculadas mostram superioridade do teste 2 nos dois parâmetros.',
    reference: 'Gordis L. Epidemiologia. Editora Revinter; 4ª ed. 2010.',
    tags: ['saúde coletiva', 'epidemiologia', 'testes diagnósticos']
  },
  {
    id: 'tp2020-26',
    module: 'Saúde Coletiva',
    text: 'Um dos grandes desafios no Sistema de Saúde no Brasil é o estabelecimento de mecanismos regulatórios na relação público-privado. A criação da Agência Nacional de Saúde Suplementar (ANS), a partir na Lei Federal Nº 9.961/2000, foi uma iniciativa importante nessa direção. Várias medidas foram tomadas visando regular o Sistema Suplementar de Saúde, dentre elas destaca-se o “Ressarcimento ao SUS”.\n\nMarque a reposta correta:',
    options: [
      '(A) As operadoras de planos e seguros de saúde devem pagar aos hospitais públicos o atendimento dos pacientes com doenças crônicas não transmissíveis.',
      '(B) Ressarcimento ao SUS é o pagamento pelo atendimento nos hospitais públicos aos beneficiários de planos e seguros privados de saúde, de acordo com os respectivos contratos.',
      '(C) Os hospitais públicos devem atender sem restrições os pacientes das operadoras de planos e seguros de saúde sem ressarcimento posterior.',
      '(D) A ANS estabelece uma pactuação com as operadoras de planos e seguros de saúde para os atendimentos necessários.'
    ],
    correctAnswer: 1,
    explanation: 'Pela Lei 9.656/1998 (art. 32), as operadoras de planos de saúde devem ressarcir o SUS pelos atendimentos prestados a seus beneficiários na rede pública, quando previstos nos respectivos contratos. A cobrança é operacionalizada pela ANS.',
    commentary: 'O ressarcimento não se restringe a doenças crônicas, existe de fato e não depende de pactuação prévia com as operadoras.',
    reference: 'Carneiro Junior N, Carvalho ALF. Sistema suplementar de saúde no Brasil. In.: Carneiro Junior N (ed). Saúde Coletiva e Atenção Primária à Saúde. Rio de Janeiro: Atheneu, 2018. Pp 27-30 (Série Concursos Médicos. Coordenador da Série: Irineu Francisco Delfino Silva Massaia).',
    tags: ['saúde coletiva', 'saúde suplementar', 'SUS']
  },
  {
    id: 'tp2020-27',
    module: 'Saúde Coletiva',
    text: 'Gestante, 25 anos, vem para consulta pré-natal. Traz uma ultrassonografia (USG) de 11 semanas e 2 dias, sem anormalidades. Não traz outros exames, não traz queixas. Ao exame, altura uterina, BCF, PA, FC e IMC estão adequados para a idade gestacional. Considere não haver anormalidades ao exame físico. São aventados os seguintes diagnósticos: Diagnóstico Obstétrico de Normalidade:1G 0P 0A. GT FUV IG: 32 semanas pela DUM e 31 semanas segundo USG de primeiro trimestre. Diagnóstico Obstétrico Patológico Atual: soropositiva para HIV, carga viral (CV) desconhecida, sem tratamento. Demais diagnósticos: sem anormalidades. A paciente questiona sobre via de parto mais adequada para evitar transmissão do HIV ao feto, caso o parto ocorra ao termo.\n\nSelecione a alternativa considerada correta:',
    options: [
      '(A) Caso a mulher entre em trabalho de parto espontâneo, ainda que esteja com carga viral comprovadamente indetectável e em uso adequado de antirretroviral, a via de parto deve obrigatoriamente ser convertida para cirúrgica e empelicado.',
      '(B) Em mulheres com CV desconhecida ou maior que 1.000 cópias/mL após 34 semanas, a cesárea eletiva após 38 semanas NÃO reduz a transmissão vertical.',
      '(C) A mulher pode optar por parto vaginal ou cirúrgico, independentemente de carga viral, idade gestacional ou uso de antirretroviral (TARV).',
      '(D) Em mulheres com CV desconhecida ou maior que 1.000 cópias/mL após 34 semanas, a cesárea eletiva após 38 semanas reduz a transmissão vertical.'
    ],
    correctAnswer: 3,
    explanation: 'Pelo PCDT de transmissão vertical do HIV (2019), em gestantes com carga viral desconhecida ou ≥ 1.000 cópias/mL após 34 semanas, a cesárea eletiva a partir de 38 semanas, antes do trabalho de parto e com membranas íntegras, reduz a transmissão vertical.',
    commentary: 'Com carga viral indetectável, a via de parto é obstétrica, sem obrigatoriedade de cesárea. A escolha não é livre quando a carga viral é alta ou desconhecida.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais /Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Doenças de Condições Crônicas e Infecções Sexualmente Transmissíveis - Brasília: Ministério da Saúde, 2019. 248 p.: il. ISBN 978-85-334-2630-6. Disponível em http://www.aids.gov.br/pt-br/search/content/protocolo%20cl%C3%ADnico.',
    tags: ['obstetrícia', 'HIV', 'transmissão vertical']
  },
  {
    id: 'tp2020-28',
    module: 'Saúde Coletiva',
    text: '“A Política Nacional de Humanização (PNH) deve estar inserida em todas as políticas e programas do SUS. A PNH busca transformar as relações de trabalho a partir da ampliação do grau de contato e da comunicação entre as pessoas e grupos, tirando-os do isolamento e das relações de poder hierarquizadas; reconhecer que as diferentes especialidades e práticas de saúde podem conversar com a experiência daquele que é assistido. Juntos, esses saberes podem produzir saúde de forma mais corresponsável”.\n\nO texto acima refere-se a qual princípio da Política Nacional de Humanização?',
    options: [
      '(A) Intersetorialidade',
      '(B) Indissociabilidade entre atenção e gestão',
      '(C) Clínica Ampliada e Compartilhada',
      '(D) Transversalidade'
    ],
    correctAnswer: 3,
    explanation: 'O texto descreve a transversalidade da PNH: ampliar a comunicação entre pessoas e grupos, romper o isolamento e as hierarquias e fazer dialogar os diferentes saberes, atravessando todas as políticas e programas do SUS.',
    commentary: 'Indissociabilidade entre atenção e gestão, clínica ampliada e intersetorialidade são outros princípios/diretrizes, mas não correspondem à descrição.',
    reference: 'Política Nacional de Humanização - https://www.saude.gov.br/saude-de-a-z/doacao-de-sangue/693-acoes-e-programas/40038-humanizasus',
    tags: ['saúde coletiva', 'política nacional de humanização']
  },
  {
    id: 'tp2020-29',
    module: 'Saúde Coletiva',
    text: 'Com base no conceito ampliado de saúde, definido na 8ª CNS – 1986, as determinações econômica e social da saúde tornam-se cada vez mais relevantes.\n\nConsiderando que a integralidade é um princípio do Sistema Único de Saúde que busca garantir ao indivíduo uma assistência à saúde que transcenda a prática curativa, pode-se afirmar que:',
    options: [
      '(A) A integralidade assegura aos usuários ações e serviços de todos os níveis de acordo com a complexidade que cada caso requeira, more o cidadão onde morar, sem privilégios e sem barreiras.',
      '(B) A integralidade representa a exigência de que, quando um indivíduo busca o atendimento ou quando surge um problema de impacto coletivo sobre a saúde, o serviço correspondente esteja capacitado para enfrentá-lo e resolvê-lo até o nível da sua competência.',
      '(C) A integralidade contempla o indivíduo em todos os níveis de atenção e considera o sujeito inserido em um contexto social, familiar e cultural.',
      '(D) A integralidade é entendida como uma redistribuição das responsabilidades quanto às ações e serviços de saúde entre os vários níveis de governo.'
    ],
    correctAnswer: 2,
    explanation: 'Integralidade é considerar a pessoa como um todo, em todos os níveis de atenção (promoção, prevenção, tratamento e reabilitação), inserida em seu contexto social, familiar e cultural.',
    commentary: 'A alternativa A descreve a equidade/universalidade. A B descreve a resolubilidade. A D descreve a descentralização.',
    reference: 'Souza MC et al. Integralidade na atenção à saúde: um olhar da Equipe de Saúde da Família. O Mundo da Saúde, São Paulo - 2012;36(3):452-460/ABC do SUS: doutrinas e princípios. Brasil. Ministério da Saúde. Brasília; Brasília. Secretaria nacional de assistência à saúde; 1990. 20 p. (ABC do SUS, 1).',
    tags: ['saúde coletiva', 'princípios do SUS']
  },
  {
    id: 'tp2020-30',
    module: 'Saúde Coletiva',
    text: 'Tamara, 22 anos, vem em consulta à ESF queixando-se de disúria há 5 dias, associada a polaciúria e urgência miccional. Afirma ter vida sexual ativa, sem parceiro fixo. Como método contraceptivo, faz uso de anticoncepcional oral. Ao exame físico, não há presença de leucorreia e nem secreção uretral; o abdome está doloroso à palpação profunda do hipogástrio, sem sinais de irritação peritoneal, com sinal de Giordano ausente. Você consulta o prontuário e nota que a paciente já realizou 2 tratamentos prévios adequados para infecção do trato urinário este ano, uma vez em janeiro e outra em setembro.\n\nAssinale a assertiva correta sobre o caso:',
    options: [
      '(A) Por definição, não é possível afirmar que Tamara apresenta infecção do trato urinário de repetição, pois não apresentou 2 quadros em 6 meses consecutivos.',
      '(B) Uma possibilidade terapêutica para Tamara é, após o tratamento da infecção atual, prescrever Nitrofurantoína dose única pós-coito e reavaliar se ainda haverá recorrência.',
      '(C) Os uropatógenos da infecção do trato urinário recorrente na mulher jovem são diferentes dos quadros infecciosos não recorrentes.',
      '(D) É mandatório solicitar urografia excretora e cistoscopia, uma vez que a principal causa de infecção do trato urinário de repetição é anormalidade anatômica.'
    ],
    correctAnswer: 1,
    explanation: 'Mulher jovem, sexualmente ativa, com cistites recorrentes relacionadas ao coito. Após tratar o episódio atual, uma estratégia de prevenção válida é a nitrofurantoína em dose única pós-coito.',
    commentary: 'ITU de repetição é definida por 2 episódios em 6 meses ou 3 em 12 meses — a paciente terá 3 no ano. Os uropatógenos são os mesmos (E. coli predomina). Investigar anatomia não é obrigatório em mulher jovem sem sinais de complicação.',
    reference: 'https://aps.bvs.br/aps/ha-evidencias-que-justificam-o-uso-de-antibioticoterapia-profilatica-em-pacientes-com-infeccao-do-trato-urinario-recidivante/ / https://portaldaurologia.org.br/medicos/wpcontent/uploads/201 5/09/infeccao_urinaria_de_repeticao.pdf',
    tags: ['saúde coletiva', 'atenção primária', 'infecção urinária']
  },
  {
    id: 'tp2020-31',
    module: 'Saúde Coletiva',
    text: 'Sr. José, 40 anos, diabético e hipertenso de longa data, com tratamento inadequado, morador de zona rural, comparece à UBS referindo sensação de “pressão” no peito, com irradiação para o ombro E, e falta de ar súbita e inexplicável. Ao exame físico encontra-se descorado 1+/4+, acianótico, anictérico, afebril, dispneico, com sudorese de extremidades; comunicativo, porém ansioso ao conversar.\n\nFrente à hipótese de Síndrome Coronariana Aguda, assinale a alternativa que contemple o atendimento integral da equipe de saúde:',
    options: [
      '(A) O monitoramento e a sequência do ABC é o fundamental para o prosseguimento do atendimento, assim como o médico deve estar preparado para aplicar RCP e possível uso de desfibrilador.',
      '(B) A obtenção de ECG com 12 derivações dentro do ambiente de baixa complexidade não é obrigatória, visto que o tratamento adequado para este paciente com sintoma anginoso deva ocorrer em unidades de média ou alta complexidade, o que dispensa o exame em questão.',
      '(C) As medicações administradas em UBS e orientadas por ato médico devem incluir AAS, oxigênio suplementar, clopidogrel, nitroglicerina e morfina para todos os casos anginosos antes de encaminhá-lo ao serviço de emergência.',
      '(D) O monitoramento inicial e a avaliação pelo auxiliar de enfermagem devem incluir: verificação da pressão arterial, temperatura, saturação de oxigênio pelo oxímetro de pulso, frequência cardíaca e respiratória. Deverá ser ignorada a avaliação de glicose capilar, já que demanda tempo.'
    ],
    correctAnswer: 0,
    explanation: 'Diante de suspeita de síndrome coronariana aguda na UBS, a prioridade é monitorizar, seguir a sequência ABC e estar preparado para RCP e desfibrilação, pois arritmias ventriculares malignas podem ocorrer a qualquer momento.',
    commentary: 'O ECG em até 10 minutos é obrigatório também na atenção primária. Oxigênio e morfina não são para todos os casos. A glicemia capilar deve ser aferida (a hipoglicemia é diagnóstico diferencial).',
    reference: 'ESTADOS UNIDOS DA AMÉRICA. Suporte avançado de vida Cardiovascular. American Heart Associaton. A vida é o porquê. Manual do Profissional, 2016. / BRASIL. Ministério da Saúde. PROVAB. Dor Torácica. Brasília. UNASUS, 2014. Disponível em: https://ares.unasus.gov.br/acervo/html/ARES/13961/1/DorTora cicaPROVAB.pdf',
    tags: ['saúde coletiva', 'atenção primária', 'síndrome coronariana aguda']
  },
  {
    id: 'tp2020-32',
    module: 'Saúde Coletiva',
    text: 'Leia as asserções abaixo e responda:\n\nI. O Brasil vive uma situação epidemiológica com tripla carga de doenças, coexistindo: i) as doenças infecciosas e causas maternas e perinatais; ii) aumento das causas externas e iii) dominância das doenças crônicas e de seus fatores de risco.\n\nPORQUE\n\nII. O país passa por mudanças demográficas e epidemiológicas nos mesmos moldes e cronologias observados em países desenvolvidos. Essas mudanças pré-definidas possibilitam o ajuste das políticas públicas na área de saúde por parte dos governantes.',
    options: [
      '(A) As asserções I e II são proposições verdadeiras e a II é uma justificativa correta da I.',
      '(B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.',
      '(C) A asserção I é uma proposição verdadeira e a II é uma proposição falsa.',
      '(D) A asserção I é uma proposição falsa e a II é uma proposição verdadeira.'
    ],
    correctAnswer: 2,
    explanation: 'A asserção I é verdadeira: o Brasil tem tripla carga de doenças (infecciosas/maternas/perinatais, causas externas e crônicas).\n\nA asserção II é falsa: a transição brasileira é \'atípica\' (polarizada e prolongada), com reemergência e persistência de doenças infecciosas, e não repete os moldes e a cronologia dos países desenvolvidos.',
    commentary: 'Como a II é falsa, as alternativas que a consideram verdadeira estão incorretas.',
    reference: 'Schramm, JMA; Oliveira, AF; Leite, IC; Valente, JG; Gadelha, AMJ; Portela, MC; Campos, MR. Transição epidemiológica e o estudo de carga de doença no Brasil Ciência & Saúde Coletiva, v. 9, n. 4, 2004. Disponível em: https://www.scielo.br/pdf/csc/v9n4/a11v9n4.pdf.',
    tags: ['saúde coletiva', 'transição epidemiológica']
  },
  {
    id: 'tp2020-33',
    module: 'Saúde Coletiva',
    text: 'O desenvolvimento e a consolidação do Sistema Único de Saúde (SUS) inclui a construção da Política Nacional de Atenção Básica (PNAB), que estabelece princípios e diretrizes que orientam a organização da Atenção Básica nos municípios.\n\nConsidere a relação médica com pacientes e familiares, o Código de Ética Médica de 2018 e os princípios e diretrizes estabelecidos no âmbito da atenção básica e assinale a alternativa correta:',
    options: [
      '(A) Considerando a necessidade de construção de vínculos técnicos e afetivos no âmbito da atenção primária em saúde e em observância ao atendimento centrado na pessoa, o código de ética médica veda expressamente o atendimento médico realizado à distância.',
      '(B) Considerando a importância do papel do médico em construir vínculos humanistas e afetivos com seus pacientes, o médico tem o dever de fazer cumprir em seu cotidiano de trabalho a moral que impera socialmente para que possa orientar corretamente o paciente e sua família e integrá-los corretamente à comunidade em que vivem.',
      '(C) O cuidado da atuação médica na atenção primária deve ser singularizado e centrado na pessoa e na busca pela sua cura, sendo vedado ao médico considerar a história de vida do paciente e o contexto da comunidade em que ele esteja inserido ao promover seu atendimento.',
      '(D) Ocorrendo fatos que, a seu critério, prejudiquem o bom relacionamento com o paciente ou o pleno desempenho profissional, o médico tem o direito de renunciar ao atendimento, desde que comunique previamente ao paciente ou a seu representante legal, assegurando-se da continuidade dos cuidados e fornecendo todas as informações necessárias ao médico que o suceder.'
    ],
    correctAnswer: 3,
    explanation: 'O Código de Ética Médica permite ao médico renunciar ao atendimento quando fatos prejudiquem a relação ou o desempenho profissional, desde que comunique previamente ao paciente ou ao representante legal, assegure a continuidade dos cuidados e forneça as informações ao sucessor.',
    commentary: 'O código não veda o atendimento a distância (há regulamentação de telemedicina). O médico não deve impor a moral social. Considerar a história de vida e o contexto é parte essencial do cuidado centrado na pessoa.',
    reference: 'CONSELHO Federal de Medicina. RESOLUÇÃO CFM Nº 2.217/2018. Código de Ética Médica. D.O.U, de 1º de novembro de 2018. Seção I, p. 179 2018. Disponível em <https://sistemas.cfm.org.br/normas/visualizar/resolucoes/BR/2018/2217>.',
    tags: ['ética médica', 'atenção primária']
  },
  {
    id: 'tp2020-34',
    module: 'Saúde Coletiva',
    text: 'Em uma USF, com população adscrita de aproximadamente 3 mil pessoas, existe uma alta prevalência de pacientes obesos. O que mais preocupa é a grande quantidade de crianças com IMC alterado seguindo o perfil epidemiológico para esta doença na comunidade descrita.\n\nSabendo da importância da participação popular nos rumos do SUS, e mediante uma possível intervenção da equipe de Saúde da Família daquele território, assinale a alternativa que melhor caracteriza como solução:',
    options: [
      '(A) Alinhar uma proposta junto ao Conselho Local de Saúde, trabalhando na sequência com rodas de conversa para trocas de experiência na luta contra a obesidade.',
      '(B) Realizar um grupo com intervenção multiprofissional com o tema " Vida Saudável" objetivando a reeducação alimentar e consequente perda ponderal.',
      '(C) Calcular IMC de todos os pacientes e, para os que apresentarem níveis de obesidade, agendar imediatamente consulta com o médico da USF.',
      '(D) Promover trabalhos em grupos para pacientes, divididos por idade e sexo, sendo que receberão informações sobre os malefícios da obesidade por meio de palestras educativas.'
    ],
    correctAnswer: 0,
    explanation: 'A participação popular é diretriz do SUS. Construir a proposta com o Conselho Local de Saúde e desenvolver rodas de conversa e troca de experiências valoriza o protagonismo da comunidade na solução de um problema coletivo.',
    commentary: 'As demais alternativas são intervenções verticais, centradas no profissional, que não envolvem a participação da comunidade.',
    reference: 'Brasil. Ministério da Saúde. Conselho Nacional de Saúde. Diretrizes nacionais para o processo de educação permanente no controle social do SUS / Ministério da Saúde, Conselho Nacional de Saúde – Brasília: Editora do Ministério da Saúde, 2006. 40 p. – (Série A. Normas e Manuais Técnicos)',
    tags: ['saúde coletiva', 'participação popular', 'obesidade']
  },
  {
    id: 'tp2020-35',
    module: 'Saúde Coletiva',
    text: 'Paciente idosa, analfabeta, portadora de diabetes e insulino-dependente, com dificuldade para locomoção, apresenta dificuldade no manejo das doenças crônicas, estando sempre fora das metas terapêuticas. Mora com uma sobrinha, que sai para trabalhar após o café da manhã e só retorna na hora do jantar. Foi encontrada a receita abaixo com a paciente:\n\n1. Enalapril 10mg 1 cp 12/12h\n2. Metformina 500mg 1 cp 8/8h\n3. Amlodipina 5mg 1 cp após o café e o jantar\n4. Insulina NPH 20u cedo e 10u noite\n5. Sinvastatina 20mg 1 cp ao deitar\n\nSobre o caso, marque a alternativa correta:',
    options: [
      '(A) Mudar a posologia, mantendo 3 horários diários de uso dos medicamentos da lista acima, organizados em caixas do tipo café, almoço e jantar, com símbolos que a paciente entenda, sendo os da manhã e da noite supervisionados pela sobrinha, pode melhorar a aderência sem prejudicar a dinâmica familiar.',
      '(B) Devemos suspeitar de má aderência e fazer com que a sobrinha dê os remédios, visto que o analfabetismo inviabiliza a tomada independente.',
      '(C) Considerando os Critérios de Beers, as interações medicamentosas e o analfabetismo, a melhor estratégia é deixar enalapril dose plena, insulina com dose um pouco maior e a sinvastatina, retirar metformina e amlodipina e reforçar o automonitoramento com aparelho automático de pressão e glicosímetro.',
      '(D) A receita é bastante clara quanto a como devem ser tomados os remédios e quais podem ser tomados juntos.'
    ],
    correctAnswer: 0,
    explanation: 'Idosa analfabeta, com mobilidade reduzida e polifarmácia, fora das metas por dificuldade de manejo. A estratégia é simplificar o esquema em três horários, organizar os medicamentos em caixas com símbolos (café, almoço, jantar) e envolver a sobrinha nos horários em que está em casa.',
    commentary: 'Transferir toda a responsabilidade à sobrinha é inviável. Suspender fármacos indicados não resolve a adesão. A receita, como está, não é clara para uma paciente analfabeta.',
    reference: 'Drug prescribing for older adults. Paula A Rochon, Kenneth E Schmader, Jane Givens, MD; www.uptodate.com. Literature review current through: Feb 2020. This topic last updated: Aug 15, 2019.',
    tags: ['saúde coletiva', 'geriatria', 'adesão terapêutica']
  },
  {
    id: 'tp2020-36',
    module: 'Saúde Coletiva',
    image: '/images/tp2020-36.webp',
    text: 'Abaixo, observa-se a evolução da taxa de mortalidade materna no brasil em anos recentes:\n\nAssinale a alternativa correta:',
    options: [
      '(A) A taxa de mortalidade materna no Brasil é maior quando comparada a países desenvolvidos (Europa e América do Norte), e é decorrente de causas evitáveis por uma boa assistência pré-natal, ao parto e puerpério, tais como Hemorragias, Hipertensão, Eclâmpsia e Infecções. A legislação que criminaliza o aborto colabora para sua manutenção em patamares não elevados, evitando que a mortalidade materna seja ainda maior.',
      '(B) A taxa de mortalidade materna no Brasil é semelhante à de países desenvolvidos (Europa e América do Norte) e é decorrente de causas dificilmente evitáveis, tais como a Eclâmpsia.',
      '(C) A taxa de mortalidade materna no Brasil é menor quando comparada a países desenvolvidos (Europa e América do Norte), e é decorrente de causas não evitáveis, tais como Eclâmpsia. A legislação que criminaliza o aborto provocado colabora para sua manutenção em patamares não elevados.',
      '(D) A taxa de mortalidade materna no Brasil é maior quando comparada a países desenvolvidos (Europa e América do Norte), e é decorrente de causas evitáveis por adequada assistência pré-natal, ao parto e puerpério, tais como Hemorragias, Hipertensão, Eclâmpsia, Infecções. As complicações de abortos também são causa contribuinte importante, agravadas pela legislação que criminaliza o aborto provocado.'
    ],
    correctAnswer: 3,
    explanation: 'A razão de mortalidade materna no Brasil (cerca de 60–70 por 100 mil nascidos vivos) é muito maior que nos países desenvolvidos. A maior parte das mortes decorre de causas evitáveis (hemorragias, hipertensão/eclâmpsia, infecções), e as complicações de abortos inseguros são causa contribuinte importante.',
    commentary: 'As alternativas que apresentam a mortalidade brasileira como semelhante ou menor que a dos países desenvolvidos, ou que atribuem efeito protetor à criminalização do aborto, contrariam os dados.',
    reference: 'Datasus Informações de Saúde (TABNET) Estatísticas Vitais Óbitos de mulheres em idade fértil e óbitos maternos http://www2.datasus.gov.br/DATASUS/ / Martins MA et al. Clínica Médica Vol.1 - Medicina Preventiva – Manole 2009. / Ministério da Saúde (2009). 20 anos de pesquisas sobre aborto no Brasil. Brasília: Ministério da Saúde. ISBN 9788533415591.',
    tags: ['saúde coletiva', 'mortalidade materna', 'indicadores de saúde']
  },
  {
    id: 'tp2020-37',
    module: 'Saúde Coletiva',
    text: 'Durante a pandemia da Covid-19, o então Ministro da Saúde Nelson Teich manifestou o compromisso com o SUS, com a colegialidade de sua gestão e a disposição para o diálogo permanente com o Conselho Nacional de Secretarias Municipais de Saúde (Conasems) e com o Conselho Nacional de Secretários de Saúde (Conass) na condução desta emergência em saúde pública. Nesta oportunidade, declarou: “o sucesso na missão recebida no enfrentamento da pandemia necessita do espírito de cooperação, ajuda mútua e plena disposição dos secretários estaduais e municipais de saúde em participar do grande esforço para empreender, junto com toda a sociedade brasileira, no objetivo de vencer um inimigo comum: o coronavírus”. (Conass, 2020).\n\nConsiderando o texto acima e os princípios doutrinários e organizacionais do SUS, é correto afirmar:',
    options: [
      '(A) Cumprindo o processo de centralização e hierarquização do SUS, trata-se do princípio da integralização do sistema de saúde proposto nas Leis Orgânicas e nas Normas Operacionais Básicas da Saúde.',
      '(B) A regionalização, tendo como pressuposto a noção de territorialidade, assume o papel do planejamento e gestão federal no cumprimento constitucional do princípio organizacional da equidade.',
      '(C) O Ministro, nesta afirmação, reforça a importância da gestão tripartite na condução do enfrentamento da pandemia da Covid-19 no país, na definição de saúde pública, enquanto esforços organizados de toda a sociedade.',
      '(D) Considerando que o então Ministro da Saúde realizou um discurso pragmático e político, os próximos passos estiveram voltados para a uniformidade das ações em atenções primária e secundária da saúde, cumprindo com os princípios doutrinários do SUS.'
    ],
    correctAnswer: 2,
    explanation: 'A declaração reforça a gestão tripartite (União, estados e municípios — Conass e Conasems) e a ideia de saúde pública como esforço organizado de toda a sociedade no enfrentamento da pandemia.',
    commentary: 'O SUS é descentralizado, não centralizado. A regionalização é princípio organizativo e a equidade, doutrinário. O discurso não implicou uniformidade de ações entre níveis de atenção.',
    reference: 'ROUQUAYROL, M. Z.; GURGEL M. Epidemiologia e saúde. 8. ed. Rio de Janeiro: Medbook, 2018. / PINHEIRO, R., CECCIM, R.B. & MATTOS, R.A. Ensinar Saúde: a integralidade e o SUS nos cursos de graduação na área da saúde. Rio de Janeiro: IMS/UERJ/CEPESQ/ABRASCO.2005.',
    tags: ['saúde coletiva', 'gestão do SUS', 'covid-19']
  },
  {
    id: 'tp2020-38',
    module: 'Saúde Coletiva',
    text: 'Caso Clínico: Mulher, 35 anos, saudável, diz ao médico que deseja realizar uma série de exames laboratoriais e de imagem, com a finalidade de garantir sua saúde. Diz que tem esta rotina anualmente desde os 30 anos de idade. Atualmente, em função da pandemia da Covid-19, ao realizar o teste rápido (sorológico), testou positivo. A pedido, solicitou prescrição de hidroxicloroquina.\n\nCom base no conceito de prevenção quaternária, como o médico deverá abordar esta situação?',
    options: [
      '(A) Em concordância com o Ministério da Saúde, utilizando o manual de enfrentamento da pandemia da Covid-19, o médico deverá acompanhar a paciente até as manifestações das formas graves da doença com posterior prescrição farmacológica, enquanto ato médico.',
      '(B) Na prevenção quaternária, quando o tratamento for considerado pior que a própria doença, deve-se buscar uma alternativa a esse tratamento, envolvendo orientações, indicações médicas e riscos associados.',
      '(C) Como não há evidenciação científica nas recomendações atuais de enfrentamento à pandemia do coronavírus, esta medida em nenhuma circunstância poderá ser utilizada, qualificando a prevenção quaternária saudável e a aliança terapêutica na relação médico-paciente.',
      '(D) Considerando que a prevenção quaternária é o conjunto de ações que visam evitar danos associada às intervenções médicas e de outros profissionais da saúde, há orientação do Conselho Federal de Medicina (Parecer 04/2020) para a prescrição deste medicamento.'
    ],
    correctAnswer: 1,
    explanation: 'Prevenção quaternária é evitar danos causados por intervenções desnecessárias. Com uma paciente assintomática pedindo hidroxicloroquina — sem benefício comprovado e com riscos —, o médico deve explicar os riscos e oferecer alternativas, evitando a medicalização.',
    commentary: 'Aguardar formas graves para prescrever, ou citar o parecer do CFM como respaldo à prescrição, contraria a prevenção quaternária. A alternativa C é categórica demais.',
    reference: 'ROUQUAYROL, M. Z.; GURGEL M. Epidemiologia e saúde. 8. ed. Rio de Janeiro: Medbook, 2018. / CFM - Conselho Federal de Medicina. Portaria 04/2020. Endereço eletrônico: https://portal.cfm.org.br/',
    tags: ['saúde coletiva', 'prevenção quaternária', 'covid-19']
  },
  {
    id: 'tp2020-39',
    module: 'Saúde Coletiva',
    text: 'Em relação ao rastreio do câncer de próstata, assinale a alternativa correta:',
    options: [
      '(A) Pela incerteza do benefício, existem argumentos consistentes para recomendar o rastreamento populacional sistemático para Câncer de Próstata e indicar esta ação como estratégia de saúde pública.',
      '(B) Recomendar o rastreamento individual de Câncer de Próstata em homens com fatores de risco para desenvolvimento da doença, como indivíduos com história familiar (irmãos e/ou pai) de Câncer de Próstata e/ou indivíduos de raça negra, apesar de os estudos que relacionam raça com Câncer de Próstata no Brasil serem inconsistentes, pode trazer melhor benefício.',
      '(C) Os profissionais médicos não dispõem de estratégias baseadas em orientações e recomendações de sociedades médicas para individualizar a necessidade ou não de rastrear Câncer de Próstata para cada indivíduo específico.',
      '(D) É recomendado o rastreio populacional, sendo que há necessidade de que homens com qualquer sintoma relacionado ao aparelho urinário procurem atendimento médico para rastreio.'
    ],
    correctAnswer: 1,
    explanation: 'Não há evidência que sustente o rastreamento populacional do câncer de próstata no Brasil. A decisão deve ser individualizada e compartilhada, especialmente em homens com maior risco (história familiar em parente de primeiro grau, raça negra).',
    commentary: 'O rastreamento populacional sistemático não é recomendado. Existem orientações de sociedades médicas para individualizar. Homens com sintomas urinários devem ser investigados, o que não é rastreamento.',
    reference: 'Telessaúde do Rio Grande do Sul (https://www.ufrgs.br/telessauders/noticias/nota-conjunta-sobre-rastreamento-de-cancer-de-prostata/)',
    tags: ['saúde coletiva', 'rastreamento', 'câncer de próstata']
  },
  {
    id: 'tp2020-40',
    module: 'Saúde Coletiva',
    text: 'Luísa é uma menina de 6 anos que mora em uma comunidade periférica de uma grande cidade brasileira. Encontra-se em sobrepeso, de acordo com o gráfico da Organização Mundial de Saúde e não tem seu cuidado médico acompanhado por uma equipe de saúde. Sua mãe diz que todas as vezes que vai à unidade de saúde do seu bairro ela está lotada, faltam medicamentos e por esse motivo ela prefere levar ao pronto atendimento (PA). Luísa não faz uso de nenhum medicamento e nos últimos meses ela foi frequentemente ao PA com crises de asma, em uma delas precisou ficar 2 dias internada.\n\nEm relação à situação acima, é mais correto afirmar que:',
    options: [
      '(A) A mãe de Luísa está errada, pois seu primeiro atendimento deveria ser realizado na unidade de saúde de seu bairro, respeitando o atributo da atenção primária do acesso. É necessário melhorar a educação em saúde na região para que o atendimento seja realizado no local adequado.',
      '(B) A mãe de Luísa está correta em levá-la ao PA, pois crise de asma é uma urgência médica que necessita de recursos com os quais a unidade básica não conta.',
      '(C) Crise de asma é um motivo de consulta sensível à atenção primária e seu atendimento deveria ser realizado na unidade de saúde do seu bairro, no entanto é preciso que isso seja viabilizado através de garantia principalmente dos atributos da atenção primária do acesso (vagas disponíveis no mesmo dia com médico/equipe de saúde) e da integralidade (recursos como medicamentos e equipamentos adequados disponíveis).',
      '(D) Além do atendimento da crise, o atributo da atenção primária da equidade contribuiria para a observação de que essas crises têm sido frequentes e que pode ser necessário tratamento de manutenção, o que fica mais difícil quando o atendimento é centrado nos serviços de atenção secundária.'
    ],
    correctAnswer: 2,
    explanation: 'A crise de asma é condição sensível à atenção primária, que deveria resolvê-la e evitar internações. Isso exige garantir os atributos de acesso (vagas no mesmo dia) e integralidade (medicamentos e equipamentos disponíveis).\n\nO uso frequente do pronto atendimento reflete falha da APS, não da mãe.',
    commentary: 'Culpar a mãe ignora as barreiras de acesso. A crise leve a moderada pode ser tratada na UBS. A coordenação e a longitudinalidade (não a equidade) seriam os atributos para perceber a necessidade de tratamento de manutenção.',
    reference: 'Starfield B, Shi L, Macinko J. Contribution of primary care to health systems and health. Milbank Q. 2005; 83:457502. / Alfradique ME, Bonolo PF, Dourado I, Lima-Costa MF, Macinko J, Mendonça CS, Oliveira VB, Sampaio LFR, De Simoni C, Turci MA. Internações por condições sensíveis à atenção primária: a construção da lista brasileira como ferramenta para medir o desempenho do sistema de saúde (Projeto ICSAP - Brasil). Cad Saude Pública 2009; 25(6):1337-1349.',
    tags: ['saúde coletiva', 'atenção primária', 'asma']
  }
];
