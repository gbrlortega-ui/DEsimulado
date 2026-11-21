import { Question } from '../types';

// HCPA 2025 (RS) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const HCPA_2025_QUESTIONS: Question[] = [
  {
    "id": "hcpa2025-1",
    "module": "Pediatria",
    "text": "Durante o evento climático no Rio Grande do Sul em maio de 2024, o Programa de Triagem Neonatal do RS solicitou às unidades hospitalares de referência em nascimento a coleta do Teste do Pezinho ainda no ambiente hospitalar, para evitar que não fosse feito em razão do alagamento ou destruição de Postos de Saúde das regiões afetadas. Assinale a alternativa que contempla a doença e um possível falso resultado em uma coleta precoce do teste (antes do 3º dia) em recém-nascido a termo, com peso de nascimento de 3.000 g, nascido em maternidade do SUS e cuja mãe não apresenta patologias nem faz uso de medicamentos contínuos.",
    "options": [
      "Fenilcetonúria – falso positivo",
      "Hipotireoidismo congênito – falso positivo",
      "Hiperplasia adrenal congênita – falso positivo",
      "Galactosemia – falso negativo"
    ],
    "correctAnswer": 1,
    "explanation": "Logo após o nascimento ocorre um pico fisiológico de TSH (estímulo pelo frio e pelo parto), que decai nas primeiras 48–72 horas. Por isso, a coleta do teste do pezinho antes de 48 horas aumenta os resultados falso-positivos para hipotireoidismo congênito (TSH ainda elevado). O ideal é coletar entre o 3º e o 5º dia de vida.",
    "commentary": "Fenilcetonúria com falso positivo (A): na coleta precoce, antes de o recém-nascido ingerir proteína suficiente, o risco é de falso negativo, não positivo.\n\nHiperplasia adrenal congênita com falso positivo (C): o falso positivo de 17-OH-progesterona ocorre sobretudo em prematuros, de baixo peso ou doentes, não em RN a termo de 3.000 g.\n\nGalactosemia com falso negativo (D): a galactosemia não faz parte do painel básico do SUS, e a coleta precoce não é a causa típica de falso negativo descrita.",
    "reference": "Ministério da Saúde – Triagem Neonatal Biológica: manual técnico (2016)",
    "tags": [
      "triagem neonatal",
      "teste do pezinho",
      "hipotireoidismo congênito",
      "neonatologia"
    ],
    "tip": "Pezinho antes de 48 h: TSH falso positivo; fenilcetonúria falso negativo."
  },
  {
    "id": "hcpa2025-2",
    "module": "Pediatria",
    "text": "Gestante com 39 semanas de gestação procurou a Emergência Obstétrica por não estar sentindo o feto mexer-se naquele dia. Com a confirmação da diminuição dos batimentos fetais ao Doppler, foi realizada cesariana. O recém-nascido, sem malformações aparentes, apresentou cianose e flacidez e não chorou. Após o clampeamento imediato do cordão, foi levado ao berço de reanimação, secado, estimulado e avaliado, tendo sido constatada ausência dos batimentos cardíacos. O neonato não respondeu às manobras de reanimação avançada, seguindo com ausência de frequência cardíaca até o décimo minuto após o nascimento. Diante do quadro, qual a conduta mais adequada?",
    "options": [
      "Suspender a reanimação avançada no décimo minuto e oferecer medidas de conforto, como oxigênio e opioides",
      "Seguir com a reanimação até o décimo quinto minuto e, então, suspendê-la caso o neonato se mantenha em assistolia",
      "Seguir com a reanimação até o vigésimo minuto e, então, suspendê-la caso o neonato se mantenha em assistolia e comunicar o óbito à família assim que possível",
      "Seguir com a reanimação até o trigésimo minuto e, então, suspendê-la caso o neonato se mantenha em assistolia, desde que a família concorde com a conduta"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo Programa de Reanimação Neonatal da SBP (2022), se o recém-nascido permanece em assistolia apesar de reanimação adequada (ventilação efetiva, massagem cardíaca e adrenalina), é razoável interromper a reanimação após 20 minutos de vida. A decisão é individualizada, mas deve ser discutida pela equipe, e a família comunicada do óbito assim que possível, com acolhimento.",
    "commentary": "Suspender aos 10 minutos (A): o limite proposto atualmente é de cerca de 20 minutos.\n\nSuspender aos 15 minutos (B): também é anterior ao limite recomendado.\n\nSeguir até 30 minutos dependendo da concordância da família (D): a decisão é técnica, baseada em reanimação adequada e tempo de assistolia, não em concordância familiar.",
    "reference": "Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal: diretrizes 2022",
    "tags": [
      "reanimação neonatal",
      "assistolia",
      "sala de parto",
      "neonatologia"
    ],
    "tip": "RN em assistolia apesar de reanimação adequada: considerar parar aos 20 minutos."
  },
  {
    "id": "hcpa2025-3",
    "module": "Pediatria",
    "text": "Recém-nascido com 7 dias de vida, internado por sífilis congênita, vinha recebendo tratamento com penicilina G cristalina desde o primeiro dia. Os exames laboratoriais revelaram VDRL sérico de 1:2, VDRL no líquor 1:2, líquor com proteínas totais de 69 mg/dl, 35 leucócitos/mm³ e glicose de 60 mg/dl. O raio X de ossos longos estava normal. A enfermagem informou que não conseguia mais acesso vascular intravenoso periférico na criança. Segundo as diretrizes brasileiras para o manejo dessa condição, qual a conduta mais adequada para a finalização do tratamento?",
    "options": [
      "Solicitar acesso venoso central e manter a penicilina cristalina até que se completem 10 dias de tratamento",
      "Solicitar acesso venoso central e manter a penicilina cristalina até que se completem 14 dias de tratamento",
      "Indicar alta hospitalar com prescrição de penicilina procaína intramuscular de 12/12 horas até que se completem 10 dias de tratamento",
      "Indicar alta hospitalar com prescrição de penicilina procaína intramuscular de 12/12 horas até que se completem 14 dias de tratamento"
    ],
    "correctAnswer": 0,
    "explanation": "Recém-nascido com sífilis congênita e alteração liquórica (VDRL reagente no líquor, proteinorraquia e pleocitose): neurossífilis. Pelo PCDT do Ministério da Saúde, o tratamento é penicilina G cristalina IV por 10 dias; a penicilina procaína não atinge concentração liquórica adequada para neurossífilis. Sem acesso periférico, solicita-se acesso venoso central para completar os 10 dias. Se houver interrupção maior que 1 dia, o tratamento deve ser reiniciado.",
    "commentary": "Cristalina até 14 dias (B): o tempo recomendado é 10 dias.\n\nProcaína por 10 dias com alta (C) e por 14 dias (D): a procaína é opção apenas sem neurossífilis; com alteração liquórica, usa-se cristalina IV.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis congênita",
      "neurossífilis",
      "penicilina cristalina",
      "neonatologia"
    ],
    "tip": "Sífilis congênita com líquor alterado: cristalina IV por 10 dias (procaína não)."
  },
  {
    "id": "hcpa2025-4",
    "module": "Pediatria",
    "text": "Gestante de 26 anos, trazida ao Centro Obstétrico em franco trabalho de parto, deu luz a um neonato a termo do sexo feminino, com peso de nascimento de 2.830 g. As sorologias do pré-natal e da admissão à maternidade (teste rápido para sífilis, HIV, hepatite B e toxoplasmose IgM e IgG) eram negativas. A paciente informou à equipe médica que seu marido, com diagnóstico de infecção por HIV há 2 anos, submetia-se a tratamento regular com TARV e que eles mantinham relações sexuais com uso de PrEP (profilaxia pré-exposição). Ao serem analisados os documentos trazidos pelo marido, constatou-se que o resultado do exame de carga viral, em amostra coletada há 35 dias, evidenciava 250 cópias/mm³.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "Por ser a mãe HIV negativa, não há risco de transmissão vertical, podendo-se liberar o aleitamento materno sem necessidade de medicações ou coleta laboratorial para a recém-nascida (RN)",
      "Apesar de a mãe ser HIV negativa, há risco de transmissão vertical, devendo-se contraindicar o aleitamento materno de forma definitiva e solicitar anti-HIV para a RN",
      "Apesar de a mãe ser HIV negativa, há risco de transmissão vertical, devendo-se contraindicar o aleitamento materno temporariamente, prescrever zidovudina e solicitar exame de carga viral para a RN",
      "Apesar de a mãe ser HIV negativa, há risco de transmissão vertical, devendo-se contraindicar o aleitamento materno temporariamente, prescrever zidovudina, lamivudina e raltegravir para a RN e solicitar exame de carga viral para a mãe e para a RN"
    ],
    "correctAnswer": 3,
    "explanation": "Mãe com testes negativos, mas parceiro com HIV e carga viral detectável (250 cópias): há risco de infecção aguda materna na janela imunológica (o PrEP reduz, mas não elimina o risco). O Ministério da Saúde orienta tratar a criança como exposta: suspender temporariamente o aleitamento, solicitar carga viral materna (para detectar infecção recente) e da criança e iniciar profilaxia no RN de alto risco — zidovudina, lamivudina e raltegravir — até esclarecer o status materno.",
    "commentary": "Sem risco e sem medidas (A): a possibilidade de infecção aguda materna não está afastada.\n\nContraindicar o aleitamento definitivamente e só anti-HIV (B): a suspensão é temporária, e o anti-HIV no RN reflete anticorpos maternos; usa-se carga viral.\n\nSó zidovudina e carga viral do RN (C): o cenário de alto risco indica esquema tríplice e investigação materna.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "transmissão vertical do HIV",
      "profilaxia antirretroviral",
      "aleitamento materno",
      "neonatologia"
    ],
    "tip": "Parceiro com HIV detectável: mãe pode estar em janela → suspender aleitamento e profilaxia tríplice no RN."
  },
  {
    "id": "hcpa2025-5",
    "module": "Pediatria",
    "text": "Lactente de 33 dias foi trazida à consulta de puericultura. Era filha de pais não consanguíneos e tinha 2 irmãos hígidos; a mãe de 37 anos não apresentou intercorrências no pré-natal. Ao exame, foi identificada hipotonia generalizada. Suspeitou-se de síndrome genética. O teste de triagem neonatal, coletado na UBS, não revelou alterações.\n\nCom base no caso, assinale a assertiva correta.",
    "options": [
      "Pregas epicânticas e prega palmar única são pouco frequentes na trissomia do 21",
      "Para o diagnóstico de trissomia do 21, é mandatória a realização de cariótipo",
      "Para o acompanhamento de puericultura em pacientes com trissomia do 21, não são necessárias curvas de crescimento específicas, podendo ser utilizadas as curvas da Organização Mundial da Saúde",
      "Na presença de hipotonia, síndrome de Prader-Willi e atrofia muscular espinhal estão entre os diagnósticos diferenciais"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com hipotonia generalizada e suspeita de síndrome genética: entre os diagnósticos diferenciais da hipotonia do lactente estão trissomia do 21, síndrome de Prader-Willi, atrofia muscular espinhal, hipotireoidismo, distúrbios metabólicos e miopatias.",
    "commentary": "Pregas epicânticas e prega palmar única pouco frequentes na trissomia 21 (A): são achados frequentes.\n\nCariótipo mandatório para o diagnóstico (B): o diagnóstico é clínico; o cariótipo é recomendado para definir o mecanismo (translocação) e o aconselhamento genético, mas não é requisito diagnóstico.\n\nUsar as curvas da OMS (C): crianças com síndrome de Down têm curvas de crescimento específicas, recomendadas pelo Ministério da Saúde.",
    "reference": "Ministério da Saúde – Diretrizes de Atenção à Pessoa com Síndrome de Down (2013); SBP",
    "tags": [
      "hipotonia",
      "síndrome de Down",
      "síndromes genéticas",
      "neurologia pediátrica"
    ],
    "alert": "A afirmação sobre o cariótipo é discutível: as diretrizes recomendam realizá-lo, embora o diagnóstico seja clínico. O gabarito considera a alternativa D a correta.",
    "tip": "Lactente hipotônico: Down, Prader-Willi, AME, hipotireoidismo, erros inatos."
  },
  {
    "id": "hcpa2025-6",
    "module": "Pediatria",
    "text": "Mãe de lactente de 3 meses (em aleitamento materno exclusivo) consultou por acreditar que está com pouco leite. Informou sentir as mamas menos cheias em razão de o filho querer mamar com mais frequência. A criança encontrava-se em bom estado geral, com peso adequado, embora o ganho ponderal tenha desacelerado no último mês, causando um leve desvio para baixo na curva de peso para a idade. Qual a orientação inicial mais adequada para a situação?",
    "options": [
      "Indicar apenas observação clínica com retorno ambulatorial agendado em 15 dias",
      "Adotar medidas não farmacológicas para aumentar a produção do leite",
      "Adotar medidas não farmacológicas para aumentar a produção do leite e associar a prescrição de um galactogogo por 1 semana",
      "Indicar suplementação com fórmula infantil"
    ],
    "correctAnswer": 1,
    "explanation": "Mãe com percepção de pouco leite, lactente de 3 meses em bom estado geral com leve desaceleração do ganho de peso e aumento da frequência das mamadas (pode ser um pico de crescimento). A primeira conduta é avaliar a mamada e adotar medidas não farmacológicas para aumentar a produção: corrigir pega e posição, mamadas frequentes em livre demanda, esvaziamento completo das mamas, ordenha complementar, repouso e hidratação materna.",
    "commentary": "Só observação em 15 dias (A): há desaceleração ponderal, que pede intervenção e reavaliação.\n\nGalactogogo associado (C): galactogogos (domperidona) não são primeira linha e só são considerados se as medidas não farmacológicas falharem.\n\nSuplementar com fórmula (D): reduz o estímulo à produção e ameaça o aleitamento exclusivo.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 23 (aleitamento materno); Academy of Breastfeeding Medicine Protocol #9 – Galactogogues",
    "tags": [
      "aleitamento materno",
      "baixa produção de leite",
      "puericultura"
    ],
    "tip": "Pouco leite: pega, mamadas frequentes e esvaziamento antes de pensar em fármaco ou fórmula."
  },
  {
    "id": "hcpa2025-7",
    "module": "Pediatria",
    "text": "Em consulta de puericultura de um lactente de 6 meses (em aleitamento materno exclusivo) detectou-se, à oroscopia, a erupção do primeiro incisivo central direito. Assinale a alternativa que contempla a mais adequada orientação sobre higiene oral para o caso.",
    "options": [
      "Iniciar higiene com gaze ou pano limpo, após a última mamada do dia",
      "Iniciar escovação com uso de dentifrício não fluoretado em quantidade equivalente à metade de um grão de arroz cru (0,05 g), 2 vezes/dia",
      "Iniciar escovação com uso de dentifrício fluoretado (aproximadamente 1.000 ppm) em quantidade equivalente à metade de um grão de arroz cru (0,05 g), 2 vezes/dia",
      "Iniciar escovação com uso de dentifrício fluoretado (aproximadamente 1.000 ppm) em quantidade equivalente a um grão de ervilha (0,1 g), 2 vezes/dia"
    ],
    "correctAnswer": 2,
    "explanation": "A escovação deve começar com a erupção do primeiro dente, duas vezes ao dia, com dentifrício fluoretado de pelo menos 1.000 ppm de flúor, na quantidade de um grão de arroz cru (cerca de 0,05–0,1 g) até 3 anos; a partir de 3 anos, quantidade de um grão de ervilha. A alternativa C é a que traz a recomendação de dentifrício fluoretado em pequena quantidade.",
    "commentary": "Gaze após a última mamada (A): com dente erupcionado, recomenda-se escovação com dentifrício fluoretado.\n\nDentifrício sem flúor (B): não previne cárie; o flúor é a medida eficaz.\n\nGrão de ervilha (D): quantidade para maiores de 3 anos, pelo risco de fluorose em menores.",
    "reference": "Sociedade Brasileira de Pediatria/Associação Brasileira de Odontopediatria – Saúde bucal na infância; Ministério da Saúde – Guia de recomendações para o uso de fluoretos (2009)",
    "tags": [
      "saúde bucal",
      "dentifrício fluoretado",
      "puericultura"
    ],
    "tip": "Primeiro dente: escovar 2×/dia com pasta com flúor, grão de arroz até 3 anos."
  },
  {
    "id": "hcpa2025-8",
    "module": "Pediatria",
    "text": "Que orientação, dentre as abaixo, é a mais adequada para introdução da alimentação complementar para um lactente nascido a termo e saudável?",
    "options": [
      "Em torno dos 6 meses, iniciar com frutas e com alimentos dos grupos dos cereais/tubérculos, leguminosas, verduras/legumes e carne e ovos",
      "Em torno dos 6 meses, iniciar com frutas; após 15 dias, iniciar com outros alimentos",
      "Em torno dos 6 meses, iniciar com frutas; após 1 semana, iniciar com alimentos do grupo dos cereais/tubérculos e verduras/legumes; aos 7 meses, iniciar com feijões, carnes e ovos",
      "Em torno dos 6 meses, iniciar com alimentos do grupo dos cereais; depois introduzir alimentos do grupo das verduras/legumes; aos 7 meses, introduzir feijões, carnes e ovos"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo Guia Alimentar para Crianças Brasileiras Menores de 2 Anos, a alimentação complementar começa por volta dos 6 meses com todos os grupos de alimentos desde o início: frutas e refeições com cereais ou tubérculos, leguminosas (feijão), legumes e verduras e carnes ou ovos. Não há necessidade de introduzir os grupos de forma escalonada, e alimentos potencialmente alergênicos (ovo, peixe) não devem ser adiados.",
    "commentary": "Frutas primeiro e outros alimentos após 15 dias (B), frutas, depois cereais e legumes e só aos 7 meses feijões, carnes e ovos (C), e cereais primeiro com proteínas aos 7 meses (D): todos propõem introdução escalonada, que não é mais recomendada; atrasar carnes e ovos aumenta o risco de anemia.",
    "reference": "Ministério da Saúde – Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (2019)",
    "tags": [
      "alimentação complementar",
      "introdução alimentar",
      "puericultura"
    ],
    "tip": "Aos 6 meses: todos os grupos desde o início, inclusive carne e ovo."
  },
  {
    "id": "hcpa2025-9",
    "module": "Pediatria",
    "text": "Durante consulta de rotina, mãe de 32 anos (que está amamentando a filha de 15 meses)\n\nperguntou se a vacinação contra dengue estava indicada para toda a família, incluindo o filho de 12 anos e o marido de 40 anos, que apresentara dengue na forma clínica há 3 meses. Ela informou que, em sua cidade, a Prefeitura havia liberado a vacina até os 59 anos. Seguindo regulamentação do Ministério da Saúde e da ANVISA, qual a orientação correta para a família em relação à vacina contra dengue?",
    "options": [
      "Indicar a vacina apenas para o filho de 12 anos",
      "Indicar a vacina para o filho de 12 anos e para o pai de 40 anos",
      "Indicar a vacina para o filho de 12 anos e para a mãe de 32 anos",
      "Indicar a vacina para toda a família"
    ],
    "correctAnswer": 0,
    "explanation": "A vacina dengue (Qdenga, atenuada) está no SUS para a faixa de 10 a 14 anos, e a bula autorizada pela ANVISA vai de 4 a 60 anos. É contraindicada para gestantes, lactantes e imunossuprimidos; quem teve dengue deve aguardar 6 meses após a infecção para se vacinar. Assim, só o filho de 12 anos tem indicação: a mãe está amamentando e o pai teve dengue há apenas 3 meses.",
    "commentary": "Filho e pai (B): o pai deve esperar 6 meses após a dengue.\n\nFilho e mãe (C): a vacina é contraindicada durante a amamentação.\n\nToda a família (D): a mãe e o pai têm contraindicação no momento, e a lactente de 15 meses está fora da faixa etária.",
    "reference": "Ministério da Saúde – Nota técnica sobre a vacina dengue (Qdenga) no SUS (2024); bula ANVISA",
    "tags": [
      "vacina dengue",
      "vacina Qdenga",
      "imunizações",
      "arboviroses"
    ],
    "tip": "Qdenga: SUS 10–14 anos; contraindicada em gestante, lactante e imunossuprimido; esperar 6 meses após dengue."
  },
  {
    "id": "hcpa2025-10",
    "module": "Pediatria",
    "text": "Lactente de 18 meses, previamente hígida, com episódios recorrentes de otite média aguda (OMA), foi trazida à consulta em razão de novo episódio, o quarto neste ano. A família era cuidadosa quanto à diminuição dos fatores de risco para OMA (não fumar perto da criança, não dar mamadeira em decúbito e não ofertar chupetas). As vacinas estavam em dia. Após discussão com a família sobre o impacto negativo dos episódios recorrentes na saúde global da criança, recomendou-se a colocação de tubos de ventilação. Que alternativa, dentre as abaixo, é o desfecho primário esperado para essa medida terapêutica?",
    "options": [
      "Melhora progressiva na aquisição da fala",
      "Melhora progressiva na audição",
      "Redução nas ausências escolares",
      "Redução da recorrência de episódios de OMA"
    ],
    "correctAnswer": 3,
    "explanation": "O tubo de ventilação (timpanostomia) na otite média aguda recorrente (3 episódios em 6 meses ou 4 em 12 meses, com um nos últimos 6 meses) tem como desfecho primário reduzir a recorrência dos episódios de OMA. Melhoras de audição e de fala são desfechos esperados na otite média com efusão persistente com perda auditiva, não o principal objetivo na OMA recorrente.",
    "commentary": "Melhora da fala (A) e da audição (B): são objetivos na otite média com efusão crônica com perda auditiva.\n\nRedução de ausências escolares (C): é benefício secundário, não o desfecho primário.",
    "reference": "AAO-HNS Clinical Practice Guideline: Tympanostomy Tubes in Children (2022)",
    "tags": [
      "otite média aguda recorrente",
      "tubo de ventilação",
      "otorrinolaringologia"
    ],
    "tip": "Tubo na OMA recorrente: reduzir episódios."
  },
  {
    "id": "hcpa2025-11",
    "module": "Pediatria",
    "text": "Lactente de 2 anos, com pneumonia sendo tratada com antibióticos, foi trazido à Emergência por quadro de diarreia. Devido ao estado nutricional, foi indicada internação. Ao exame físico, apresentava-se eupneico, emagrecido e desidratado (grau 2), com saturação de oxigênio de 99%. As medidas antropométricas revelaram peso de 8.240 g (peso/idade: Z -3,6), altura de 76,5 cm (altura/idade: Z -4,14), peso/altura: Z -2,15; IMC de 14 kg/m² (Z -1,39); perímetro braquial de 11,4 cm (perímetro braquial/idade: Z -3,76) e perímetro cefálico de 47 cm (Z -1,11). Conforme o Training course on the inpatient management of severe acute malnutrition: clinical instructor’s guide, da Organização Mundial da Saúde (2021), assinale a assertiva correta sobre o manejo do paciente desnutrido.",
    "options": [
      "A primeira etapa do tratamento é estabilização; nessa fase, indica-se dieta plena para idade com meta de recuperação nutricional",
      "A criança tem indicação de internação pelo quadro nutricional, pois a circunferência braquial < 11,5 cm mostra desnutrição grave, apesar de o IMC se encontrar > -2",
      "A criança não tem indicação de internação hospitalar, pois não apresentava edema +++, sinal clássico de desnutrição grave",
      "O IMC > -2 indica eutrofia, estando indicada internação apenas para tratar as complicações agudas e recomendando-se alta logo após e acompanhamento ambulatorial"
    ],
    "correctAnswer": 1,
    "explanation": "Para crianças de 6 a 59 meses, a OMS define desnutrição aguda grave por peso/altura < −3 escore Z, perímetro braquial < 11,5 cm ou edema bilateral. Esta criança tem perímetro braquial de 11,4 cm, o que define desnutrição grave e indica internação (há também complicação clínica: diarreia com desidratação e infecção), ainda que o IMC esteja acima de −2.",
    "commentary": "Dieta plena na estabilização (A): na fase de estabilização, a dieta é cautelosa (F-75), para evitar síndrome de realimentação; a recuperação vem depois.\n\nSem indicação por ausência de edema (C): o edema é apenas um dos critérios; o perímetro braquial já define gravidade.\n\nIMC > −2 indica eutrofia (D): o perímetro braquial e a estatura (Z −4,14) mostram desnutrição grave e crônica.",
    "reference": "OMS – Training course on the inpatient management of severe acute malnutrition (2021); OMS – Guideline on malnutrition (2023)",
    "tags": [
      "desnutrição grave",
      "perímetro braquial",
      "nutrição pediátrica"
    ],
    "tip": "Desnutrição grave (6–59 meses): P/A < −3, perímetro braquial < 11,5 cm ou edema."
  },
  {
    "id": "hcpa2025-12",
    "module": "Pediatria",
    "text": "Criança de 2 anos e 1 mês foi internada na Enfermaria proveniente da Emergência. Na lista de problemas, constava “quarto episódio de internação por bronquiolite viral aguda” (vírus isolado no primeiro episódio de sibilância: rinovírus). Revisando outros aspectos da história, verificou-se que a criança nascera a termo, tinha crescimento e desenvolvimento adequados, estava com as vacinas em dia e vinha em uso de hidratante para dermatite atópica.\n\nFrequentava a pré-escola em turno integral desde os 4 meses. Os pais eram hígidos, e o irmão de 12 anos fazia uso regular de formoterol, budesonida e tiotrópio inalatórios. A mãe relatou que o quadro agudo atual havia começado com coriza e tosse produtiva. Teve um pico febril de 37,9° C na chegada ao hospital, há 24 horas. Ao exame físico, apresentava bom estado geral, frequência respiratória de 38 mpm, tiragem subcostal leve e sibilos polifônicos expiratórios bilaterais. Oxímetro de pulso mostrou saturação de 96%, com suplementação de oxigênio por cânula nasal de baixo fluxo a 0,4 l/min. Radiografia de tórax revelou hiperinsuflação bilateral e opacidades intersticiais peri-hilares. Na prescrição da Emergência, estavam registrados os seguintes itens: (1) dieta por via oral; (2) oxigênio por cânula nasal de baixo fluxo a 0,4 l/min; (3) aspiração nasal, se necessário. Que modificação na prescrição médica deve ser feita por ocasião da admissão do paciente na Enfermaria?",
    "options": [
      "Aumentar o fluxo de oxigênio pelo cateter nasal para 0,8 l/min",
      "Substituir a dieta por via oral por dieta por sonda nasogástrica",
      "Incluir salbutamol spray (100 µg/jato), com espaçador, 3 jatos, a cada 4 horas",
      "Adicionar amoxicilina (50 mg/kg/dia) por via oral"
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 2 anos com quarto episódio de sibilância, dermatite atópica e irmão asmático: não se trata mais de bronquiolite viral típica, e sim de sibilância recorrente com fenótipo de asma (índice preditivo positivo). Nesse caso, o broncodilatador inalatório (salbutamol com espaçador) está indicado, e a resposta deve ser avaliada.",
    "commentary": "Aumentar o O₂ para 0,8 L/min (A): a saturação de 96% está adequada.\n\nDieta por sonda (B): a criança está em bom estado geral e se alimenta.\n\nAmoxicilina (D): o quadro é viral, sem indicação de antibiótico.",
    "reference": "GINA 2024 – Asthma in children 5 years and younger; Sociedade Brasileira de Pediatria",
    "tags": [
      "sibilância recorrente",
      "asma",
      "broncodilatador",
      "pneumologia pediátrica"
    ],
    "tip": "Sibilância recorrente com atopia: testar broncodilatador; não é mais “bronquiolite”."
  },
  {
    "id": "hcpa2025-13",
    "module": "Pediatria",
    "text": "Menino de 3 anos foi trazido à consulta por episódios intermitentes de icterícia e anemia, geralmente precipitados após infecções virais. Em seu histórico, constavam icterícia neonatal e transfusão sanguínea aos 8 meses, devido a anemia grave. Ao exame físico, foram observadas icterícia e palidez cutânea, sem esplenomegalia palpável.\n\nOs principais resultados dos exames laboratoriais encontram-se abaixo.\n• Hemoglobina: 6,5 g/dl\n• Hematócrito: 19%\n• VCM: levemente aumentado\n• Esquizócitos: presentes\n• Policromasia: presente\n• Anisocitose e reticulocitose: presentes\n• Bilirrubina indireta: aumentada\n• Teste de Coombs direto: negativo\n• Teste de fragilidade osmótica: normal\n• Eletroforese de hemoglobina: normal\n\nQual o diagnóstico mais provável?",
    "options": [
      "Esferocitose hereditária",
      "Anemia hemolítica autoimune",
      "Betatalassemia maior",
      "Deficiência de G6PD"
    ],
    "correctAnswer": 3,
    "explanation": "Menino com crises de hemólise (icterícia e anemia) após infecções virais, com icterícia neonatal, reticulocitose, bilirrubina indireta elevada, Coombs negativo, fragilidade osmótica normal e eletroforese normal: deficiência de G6PD, doença ligada ao X em que o estresse oxidativo (infecções, fármacos, fava) precipita hemólise intravascular episódica. O esfregaço pode mostrar células “mordidas” e corpúsculos de Heinz.",
    "commentary": "Esferocitose hereditária (A): a fragilidade osmótica estaria aumentada e haveria esplenomegalia e hemólise mais contínua.\n\nAnemia hemolítica autoimune (B): o Coombs direto seria positivo.\n\nBetatalassemia maior (C): microcitose intensa e eletroforese alterada (HbF e HbA2 elevadas).",
    "reference": "Sociedade Brasileira de Pediatria; Luzzatto L et al. Glucose-6-phosphate dehydrogenase deficiency, Hematol Oncol Clin North Am 2016",
    "tags": [
      "deficiência de G6PD",
      "anemia hemolítica",
      "hematologia pediátrica"
    ],
    "tip": "Menino, hemólise após infecção/fármaco, Coombs negativo, fragilidade normal = G6PD."
  },
  {
    "id": "hcpa2025-14",
    "module": "Pediatria",
    "text": "Pais procuraram orientação sobre o uso do tablet pelo filho de 4 anos: a mãe considerava o uso do dispositivo inadequado por acreditar que excesso de exposição às telas poderia causar problemas de rendimento escolar e sonolência; o pai dizia que lera, em algum lugar, que o contato precoce com informações no dispositivo seria um fator positivo para o desenvolvimento cognitivo. Com base nessa consulta acerca das vantagens e desvantagens das telas para a saúde infantil, que recomendação, dentre as abaixo, não tem respaldo da Sociedade Brasileira de Pediatria?",
    "options": [
      "Para crianças com menos de 2 anos, evitar a exposição às telas, mesmo que passivamente",
      "Para crianças de 6-10 anos, estabelecer tempo de telas limitado a um máximo de 1-2 horas, sempre com supervisão de pais/responsáveis",
      "Para crianças e adolescentes, evitar postagens de fotos em redes sociais públicas, permitindo-as apenas em ocasiões festivas",
      "Para todas as idades, restringir telas durante as refeições e desconectar o aparelho 1-2 horas antes de dormir"
    ],
    "correctAnswer": 2,
    "explanation": "A SBP recomenda que crianças e adolescentes não tenham fotos expostas em redes sociais públicas, por questões de privacidade, segurança e risco de exploração — sem a exceção de ocasiões festivas. As demais recomendações estão no manual: evitar telas antes de 2 anos; 1–2 horas por dia com supervisão dos 6 aos 10 anos; nada de telas nas refeições; desconectar 1–2 horas antes de dormir.",
    "commentary": "Evitar telas antes dos 2 anos (A), limitar a 1–2 horas entre 6 e 10 anos (B) e restringir nas refeições e antes de dormir (D): todas fazem parte das recomendações da SBP.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Orientação: Menos telas, mais saúde (2019, atualização 2024)",
    "tags": [
      "tempo de tela",
      "saúde digital",
      "puericultura"
    ],
    "tip": "SBP: < 2 anos sem tela; 2–5 até 1 h; 6–10 até 1–2 h; nada nas refeições e antes de dormir."
  },
  {
    "id": "hcpa2025-15",
    "module": "Pediatria",
    "text": "Paciente de 7 anos, com diagnóstico de transtorno do espectro autista (TEA) em nível I de suporte, sempre apresentou sintomas de hiperatividade. Os prejuízos no desempenho escolar vinham aumentando, principalmente após o ingresso no Ensino Fundamental, mesmo com terapia comportamental adequada. Com a hipótese de transtorno de déficit de atenção e hiperatividade (TDAH) como comorbidade, assinale a assertiva correta.",
    "options": [
      "Devido à comorbidade com o TEA, risperidona e aripiprazol são os fármacos de escolha",
      "Apesar da comorbidade com o TEA, neuroestimulantes (como o metilfenidato) continuam como primeira escolha",
      "Como não há um tratamento farmacológico específico para o TEA, deverá ser mantida somente a intervenção comportamental",
      "TEA e TDAH são diagnósticos mutuamente excludentes"
    ],
    "correctAnswer": 1,
    "explanation": "TEA e TDAH frequentemente coexistem (desde o DSM-5, o diagnóstico conjunto é permitido). Quando há TDAH associado ao TEA com prejuízo, apesar de intervenção comportamental, os psicoestimulantes (metilfenidato, lisdexanfetamina) continuam sendo a primeira escolha, embora com resposta um pouco menor e mais efeitos adversos que no TDAH isolado.",
    "commentary": "Risperidona e aripiprazol como escolha (A): são indicados para irritabilidade e agressividade no TEA, não para desatenção/hiperatividade.\n\nManter só intervenção comportamental (C): com prejuízo persistente, o tratamento farmacológico do TDAH é indicado.\n\nTEA e TDAH mutuamente excludentes (D): o DSM-5 permite o diagnóstico de ambos.",
    "reference": "AAP Clinical Practice Guideline for ADHD (2019); Associação Brasileira de Psiquiatria",
    "tags": [
      "TDAH",
      "transtorno do espectro autista",
      "metilfenidato",
      "psiquiatria infantil"
    ],
    "tip": "TDAH + TEA: metilfenidato ainda é primeira escolha."
  },
  {
    "id": "hcpa2025-16",
    "module": "Pediatria",
    "text": "Assinale a assertiva correta sobre hipertensão arterial sistêmica em crianças e adolescentes.",
    "options": [
      "Em adolescentes e crianças a partir dos 3 anos, ou antes se houver fatores de risco, recomenda-se medir a pressão arterial anualmente",
      "Para crianças e adolescentes de 1-18 anos, a determinação dos níveis normais de pressão arterial deve levar em consideração sexo, idade, altura e raça",
      "São fatores de risco para hipertensão arterial sistêmica: pielonefrites recorrentes, anemia falciforme e prematuros com menos de 36 semanas de idade gestacional",
      "Para selecionar o tamanho correto do manguito, a parte inflável deve representar cerca de 60% da circunferência do braço, e a largura, cerca de 40% da circunferência do braço"
    ],
    "correctAnswer": 0,
    "explanation": "Recomenda-se medir a pressão arterial anualmente em crianças a partir de 3 anos (e em todas as consultas se houver fatores de risco: obesidade, doença renal, diabetes, uso de medicamentos que elevam a PA) e antes dos 3 anos em crianças com fatores de risco (prematuridade, doença renal, cardiopatia, transplante etc.).",
    "commentary": "Considerar raça na determinação da PA normal (B): as tabelas consideram sexo, idade e percentil de estatura, não raça.\n\nPielonefrite, anemia falciforme e prematuros < 36 semanas (C): o fator de risco é prematuridade < 32 semanas (ou baixo peso); a lista não corresponde às diretrizes.\n\nManguito 60% e 40% (D): a bolsa inflável deve ter largura de cerca de 40% e comprimento de 80–100% da circunferência do braço.",
    "reference": "Sociedade Brasileira de Pediatria – Hipertensão arterial na infância e adolescência (2019); AAP Clinical Practice Guideline (2017)",
    "tags": [
      "hipertensão arterial na infância",
      "aferição da pressão arterial",
      "cardiologia pediátrica"
    ],
    "tip": "PA anual a partir de 3 anos; manguito com largura 40% e comprimento 80–100% do braço."
  },
  {
    "id": "hcpa2025-17",
    "module": "Pediatria",
    "text": "Paciente de 10 anos foi trazido à Emergência de um hospital terciário com queixa de dor em região distal da coxa direita, associada a edema e calor local. A mãe negou histórico de traumas e informou sobre febre intermitente e perda de peso nos últimos 2 meses.\n\nRadiografia de fêmur/coxa direita demonstrou lesão osteolítica e reação periostal em aspecto de triângulo de Codman no fêmur distal. Diante da história, do exame físico e do raio X ósseo do paciente, qual a conduta mais adequada?",
    "options": [
      "Liberar o paciente da Emergência com prescrição de amoxacilina-clavulanato com retorno agendado para reavaliação na UBS em 1 mês; a lesão óssea é inespecífica, e o quadro clínico é compatível com infecção de partes moles",
      "Internar o paciente e solicitar ressonância magnética do membro acometido e programar biópsia da lesão; a lesão óssea é patognomônica do sarcoma de Ewing",
      "Internar o paciente, coletar amostras para hemocultura, hemograma e proteína C reativa e iniciar oxacilina intravenosa; a lesão óssea possui característica patognomônica de osteomielite aguda, não sendo necessária investigação adicional",
      "Internar o paciente, coletar amostras para hemocultura, hemograma e proteína C reativa, iniciar oxacilina intravenosa, solicitar ressonância magnética do membro acometido e programar biópsia da lesão; a lesão óssea é altamente suspeita de tumor maligno, sendo necessário o diagnóstico diferencial para osteomielite"
    ],
    "correctAnswer": 3,
    "explanation": "Lesão osteolítica com reação periosteal em triângulo de Codman no fêmur distal, com dor, edema, febre e perda de peso: há forte suspeita de tumor ósseo maligno (osteossarcoma ou sarcoma de Ewing), mas a osteomielite também pode causar lesão lítica com reação periosteal e febre. A conduta adequada é internar, colher hemocultura, hemograma e PCR, iniciar antibiótico empírico para osteomielite enquanto se investiga, solicitar RM e programar biópsia para diagnóstico definitivo.",
    "commentary": "Alta com amoxicilina-clavulanato (A): a lesão é suspeita e exige investigação.\n\nSarcoma de Ewing patognomônico (B): o triângulo de Codman não é patognomônico (ocorre em osteossarcoma, Ewing e até infecção).\n\nOsteomielite patognomônica, sem investigação adicional (C): o quadro exige excluir tumor maligno.",
    "reference": "Sociedade Brasileira de Oncologia Pediátrica; Sociedade Brasileira de Ortopedia Pediátrica",
    "tags": [
      "tumores ósseos",
      "triângulo de Codman",
      "osteomielite",
      "oncologia pediátrica"
    ],
    "tip": "Codman: suspeitar de tumor maligno, mas fazer o diferencial com osteomielite (biópsia)."
  },
  {
    "id": "hcpa2025-18",
    "module": "Pediatria",
    "text": "Menina de 12 anos foi trazida pela mãe à Emergência por dor articular e cansaço. Relatou a ocorrência de dor sequencial no joelho direito, tornozelo esquerdo, tornozelo direito, cotovelo esquerdo e punhos bilateralmente na última semana e de dispneia há 2 dias. Descreveu episódio de “dor de garganta” há 3 semanas. Ao exame físico, encontrava-se febril (38,5° C), com artrite nos sítios referidos, rash no tronco com margens eritematosas circulares e centro pálido e sopro sistólico em foco mitral com irradiação axilar. Em relação à principal hipótese diagnóstica, assinale a assertiva correta.",
    "options": [
      "Linfadenomegalia, hepatoesplenomegalia, FAN não reagente e elevação de transaminases confirmam o diagnóstico",
      "A pesquisa de anticorpos no soro apresenta maior sensibilidade do que a cultura por swab de orofaringe neste momento",
      "Elevação discreta de VSG (VHS), proteinúria, cilindros hemáticos e resposta insatisfatória a aspirina são achados esperados",
      "Fator reumatoide e FAN reagentes, redução de complementos e elevação de PCR devem indicar avaliação por oftalmologista"
    ],
    "correctAnswer": 1,
    "explanation": "Poliartrite migratória, febre, eritema marginado (rash com margens eritematosas e centro pálido) e sopro de insuficiência mitral (cardite), 3 semanas após faringite: febre reumática aguda. Para comprovar a infecção estreptocócica prévia, a sorologia (ASLO, anti-DNase B) é mais sensível que a cultura de orofaringe, que nessa fase costuma ser negativa.",
    "commentary": "Linfadenomegalia, hepatoesplenomegalia, FAN não reagente e transaminases (A): não confirmam febre reumática; lembram artrite idiopática juvenil sistêmica ou infecção viral.\n\nVHS discreta, proteinúria, cilindros e má resposta à aspirina (C): na febre reumática a VHS costuma estar muito elevada e a artrite responde dramaticamente à aspirina; cilindros sugerem glomerulonefrite.\n\nFR e FAN reagentes com complemento baixo (D): sugerem lúpus, não febre reumática.",
    "reference": "Gewitz MH et al. Revision of the Jones Criteria (2015); Sociedade Brasileira de Cardiologia",
    "tags": [
      "febre reumática",
      "critérios de Jones",
      "ASLO",
      "reumatologia pediátrica"
    ],
    "tip": "Febre reumática: sorologia (ASLO) é mais sensível que cultura para provar o estreptococo."
  },
  {
    "id": "hcpa2025-19",
    "module": "Pediatria",
    "text": "Assinale a assertiva incorreta sobre cigarros eletrônicos e adolescência.",
    "options": [
      "A detecção de seu uso por pais e profissionais de saúde é difícil, uma vez que o cheiro liberado pelo aquecimento do líquido se dissipa rapidamente (logo após o uso), não deixando odor no ar exalado e nas roupas",
      "Os cigarros eletrônicos aromatizados, geralmente preferidos pelos adolescentes, têm pH frequentemente mais baixo, o que resulta em absorção mais rápida da nicotina contida no aerossol gerado pelo dispositivo",
      "O acetato de vitamina E, presente nos cigarros eletrônicos, está relacionado a casos de lesão pulmonar associada a produto de vaping, cuja apresentação clínica inclui sintomas respiratórios, gastrointestinais e/ou sistêmicos",
      "Com base na concentração de nicotina informada nos rótulos dos cigarros eletrônicos, é possível verificar se a dose inalada pelo adolescente é maior, menor ou equivalente à da nicotina liberada pelos cigarros de tabaco"
    ],
    "correctAnswer": 3,
    "explanation": "A alternativa incorreta é a D: a concentração de nicotina informada nos rótulos de cigarros eletrônicos não permite saber a dose inalada, pois a liberação depende do dispositivo, da potência, da forma de tragar e do tipo de nicotina (sal ou livre), e os rótulos são frequentemente imprecisos.",
    "commentary": "Detecção difícil pelo cheiro que se dissipa (A): verdadeiro; isso facilita o uso escondido.\n\nAromatizados com pH mais baixo e absorção rápida (B): o gabarito considera verdadeiro — os sais de nicotina, de pH mais baixo, permitem inalar altas concentrações com menos irritação.\n\nAcetato de vitamina E e EVALI (C): verdadeiro; foi associado à lesão pulmonar por vaping, com sintomas respiratórios, gastrointestinais e sistêmicos.",
    "reference": "Sociedade Brasileira de Pediatria – Cigarros eletrônicos e adolescência (2023); CDC – EVALI",
    "tags": [
      "cigarro eletrônico",
      "saúde do adolescente",
      "tabagismo"
    ],
    "tip": "Rótulo do vape não diz quanto de nicotina o usuário inala."
  },
  {
    "id": "hcpa2025-20",
    "module": "Pediatria",
    "text": "Adolescente feminina, de 13 anos e 6 meses, procurou o Ambulatório de Pediatria. Ao iniciar a consulta, o pediatra perguntou se algum familiar ou responsável a acompanhava. Ela informou que procurara esse atendimento sem comunicar aos pais porque desejava que a consulta fosse realizada sob sigilo médico. Tinha interesse em saber sobre sua saúde e em falar sobre sexualidade. Seguindo as orientações da Sociedade Brasileira de Pediatria, da Federação Brasileira das Associações de Ginecologia e Obstetrícia e do Código de Ética Médica, que conduta, dentre as abaixo, é a mais adequada?",
    "options": [
      "Informar à adolescente que, por ter menos de 14 anos, lhe é vedado esclarecer as questões que vierem a ser apresentadas sem a presença de pais e/ou responsável",
      "Informar à adolescente que poderá ser realizado o atendimento, mas com algumas restrições, tais como orientação sobre sexualidade, anticoncepção, prescrição de medicamentos e/ou exames laboratoriais de rotina",
      "Realizar o atendimento esclarecendo todas as questões apresentadas desde que considere que a adolescente demonstra discernimento e compreensão adequados das informações e capacidade de identificar situações que possam acarretar danos a ela ou a outros",
      "Realizar o atendimento, mas, caso esteja diante de relatos sobre conflitos na orientação sexual, identidade de gênero, interesse em iniciar atividade sexual e/ou interesse em experimentação de substância psicoativa, deve informar à adolescente sobre a necessidade de quebra de sigilo e comunicação aos pais e/ou ao responsável"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo Código de Ética Médica (art. 74) e pelas orientações da SBP e da Febrasgo, o adolescente tem direito a atendimento com sigilo e privacidade, desde que demonstre capacidade de discernimento — inclusive sobre sexualidade e contracepção. O sigilo só deve ser quebrado em situações de risco à vida ou à saúde do adolescente ou de terceiros (por exemplo, violência, ideação suicida, uso grave de drogas).",
    "commentary": "Vedado esclarecer sem os pais por ter menos de 14 anos (A): a idade não impede o atendimento sigiloso.\n\nAtendimento com restrições sobre sexualidade e anticoncepção (B): são justamente temas que o adolescente tem direito de abordar.\n\nQuebrar sigilo por orientação sexual, identidade de gênero ou início de vida sexual (D): esses temas não justificam quebra de sigilo; a quebra é para risco grave.",
    "reference": "Código de Ética Médica (Resolução CFM nº 2.217/2018), art. 74; SBP/Febrasgo – Consulta do adolescente",
    "tags": [
      "saúde do adolescente",
      "sigilo médico",
      "ética médica"
    ],
    "tip": "Adolescente com discernimento: sigilo, salvo risco de vida ou dano grave."
  },
  {
    "id": "hcpa2025-21",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a assistência pré-natal.",
    "options": [
      "Saída de colostro, colo uterino friável, sangramento gengival, náuseas e vômitos no primeiro e terceiro trimestres, leucocitose de 18.000/mm³ e hematúria são alterações fisiológicas frequentes na gestação, não havendo necessidade de investigação adicional",
      "Com 8 semanas de gestação, o útero tem o dobro do tamanho normal, adquire formato ovoide e ganha a cavidade abdominal, podendo ser palpado acima da sínfise púbica",
      "No terceiro trimestre, a pressão arterial deve ser aferida em todas as consultas de pré-natal com a paciente em decúbito lateral esquerdo, uma vez que essa posição proporciona aumento do débito cardíaco materno e da perfusão uterina",
      "A frequência normal dos batimentos cardiofetais situa-se entre 110-160 bpm ao final da gestação, e a presença de acelerações transitórias indica boa vitalidade, estando frequentemente associada a movimentação fetal ou contração uterina"
    ],
    "correctAnswer": 3,
    "explanation": "A frequência cardíaca fetal normal ao final da gestação é de 110 a 160 bpm, e a presença de acelerações transitórias (geralmente associadas à movimentação fetal ou a contrações) indica bem-estar e reatividade fetal.",
    "commentary": "Hematúria como alteração fisiológica (A): colostro, colo friável, sangramento gengival, náuseas e leucocitose podem ser fisiológicos, mas hematúria exige investigação.\n\nÚtero palpável acima da sínfise com 8 semanas (B): o útero só ultrapassa a sínfise por volta de 12 semanas.\n\nPA em decúbito lateral esquerdo em todas as consultas (C): a PA deve ser aferida com a gestante sentada (ou em decúbito lateral esquerdo no braço direito), mas a justificativa citada não é a correta, e a posição sentada é a padronizada no pré-natal.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 32: Atenção ao Pré-Natal de Baixo Risco; Febrasgo",
    "tags": [
      "pré-natal",
      "vitalidade fetal",
      "fisiologia da gestação"
    ],
    "tip": "BCF normal: 110–160 bpm; acelerações = bem-estar fetal."
  },
  {
    "id": "hcpa2025-22",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre condutas preventivas em Obstetrícia.",
    "options": [
      "No diabetes melito, o controle metabólico pré-concepcional mais adequado está associado a redução de malformações congênitas, parto prematuro e mortalidade perinatal",
      "Na prevenção de defeitos de fechamento do tubo neural, a suplementação com ácido fólico deve ser iniciada no primeiro trimestre, pois o tubo neural fecha com 12 semanas",
      "Na prevenção de nova perda gestacional em gestante com 12 semanas e história clássica de incompetência istmocervical, uso de progesterona (200-400 mg/dia) por via oral é a conduta mais adequada",
      "Na prevenção da pré-eclâmpsia, a suplementação com carbonato de cálcio e o uso do AAS devem ser realizados em jejum, a partir da 16ª semana"
    ],
    "correctAnswer": 0,
    "explanation": "Em mulheres com diabetes pré-gestacional, o bom controle glicêmico antes da concepção (HbA1c idealmente < 6,5%) reduz malformações congênitas, abortamento, prematuridade e mortalidade perinatal, já que a organogênese ocorre nas primeiras 8 semanas.",
    "commentary": "Ácido fólico no primeiro trimestre com tubo fechando com 12 semanas (B): o ácido fólico deve começar pelo menos 30 dias antes da concepção, e o tubo neural fecha por volta da 4ª semana (28 dias).\n\nProgesterona oral na incompetência istmocervical (C): com história clássica de incompetência, a conduta é cerclagem eletiva (12–14 semanas).\n\nCálcio e AAS em jejum a partir de 16 semanas (D): o AAS deve começar antes de 16 semanas (ideal entre 12 e 16), à noite; o cálcio é dado separado do ferro, não em jejum.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (diabetes na gestação); Febrasgo",
    "tags": [
      "diabetes pré-gestacional",
      "cuidado pré-concepcional",
      "malformações congênitas",
      "pré-natal"
    ],
    "tip": "Diabetes: controlar a glicemia antes de engravidar reduz malformações."
  },
  {
    "id": "hcpa2025-23",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta com 30 semanas de gestação, sem histórico de epilepsia, veio à UPA queixando-se de cefaleia e visão turva. À avaliação inicial, a pressão arterial era de 160/110 mmHg.\n\nEnquanto a enfermeira chamava o médico, a paciente teve uma convulsão tônico-clônica.\n\nImediatamente recebeu 4,0 g de sulfato de magnésio intravenoso para tratamento de eclâmpsia, e o quadro foi estabilizado. Após 15 minutos, novo episódio convulsivo ocorreu. Em situações como essa, a conduta mais adequada para reduzir a chance de novas convulsões é administrar, por via intravenosa,",
    "options": [
      "diazepam (20 mg)",
      "hidantal (50 mg)",
      "sulfato de magnésio (2,0 g)",
      "fenobarbital (100 mg)"
    ],
    "correctAnswer": 2,
    "explanation": "Na eclâmpsia, se houver nova convulsão após a dose de ataque de sulfato de magnésio, administra-se dose adicional de 2 g de sulfato de magnésio IV (em 5–15 minutos), mantendo a manutenção. O magnésio é superior a diazepam e fenitoína na prevenção de novas crises (Collaborative Eclampsia Trial).",
    "commentary": "Diazepam (A), fenitoína (B) e fenobarbital (D): são inferiores ao sulfato de magnésio; só se consideram em crises refratárias ao magnésio.",
    "reference": "Febrasgo/RBEHG – Pré-eclâmpsia (2023); The Eclampsia Trial Collaborative Group, Lancet 1995",
    "tags": [
      "eclâmpsia",
      "sulfato de magnésio",
      "emergência obstétrica"
    ],
    "tip": "Eclâmpsia com nova convulsão: + 2 g de sulfato de magnésio IV."
  },
  {
    "id": "hcpa2025-24",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com gestação gemelar de 32 semanas consultou por prurido generalizado, mas principalmente nas palmas das mãos e solas dos pés, que piorava à noite, além de dor no quadrante superior direito do abdômen, náuseas e diminuição do apetite. Submetera-se a tratamento de bacteriúria assintomática há 15 dias. Negou ter sintomas urinários no momento. Sentia dor à palpação lombar bilateralmente. Ao exame, não havia lesões de pele. Apresentava sinais vitais estáveis (incluindo temperatura de 36° C e pressão arterial de 120/70 mmHg), batimentos cardiofetais de 140 bpm e ausência de dinâmica uterina e dilatação cervical. Exames laboratoriais iniciais revelaram hematócrito de 30%, hemoglobina de 10 g/dl, leucócitos de 8.000/mm³ sem desvio, plaquetas de 200.000/mm³, glicemia de 84 mg/dl, AST de 52 U/l, ALT de 70 U/l, bilirrubina total de 1,4 mg/dl, bilirrubina direta de 0,7 mg/dl e tempo de protrombina de 12 segundos. O EQU indicou esterase leucocitária positiva.\n\nCom relação ao diagnóstico mais provável, assinale a assertiva correta.",
    "options": [
      "Trata-se de uma doença grave na gestação, caracterizada pela infiltração microvesicular de gordura no fígado, levando à insuficiência hepática; seu diagnóstico baseia-se na presença de, pelo menos, 6 critérios de Swansea, na ausência de outros diagnósticos",
      "Trata-se de uma alteração hepática exclusiva do período gestacional, e seu tratamento com ácido ursodesoxicólico objetiva a redução dos sintomas maternos; o nível de ácidos biliares > 100 µmol/l influencia na decisão do momento de interromper a gestação devido ao maior risco de morte fetal",
      "Trata-se de uma inflamação da vesícula biliar, geralmente secundária a obstrução do ducto cístico por um cálculo biliar, com alto índice de recorrência dos sintomas e complicações na gestação; o sinal de Murphy ao exame físico é relativamente específico",
      "Trata-se de uma infecção que acomete o sistema coletor e a medula renal, sendo mais prevalente na gestação do que fora dela; está associada a riscos maternos e fetais, constituindo uma das principais causas de hospitalização durante a gestação"
    ],
    "correctAnswer": 1,
    "explanation": "Prurido palmoplantar com piora noturna no terceiro trimestre, sem lesões de pele, em gestação gemelar (fator de risco), com leve elevação de transaminases: colestase intra-hepática da gestação. O diagnóstico se confirma com ácidos biliares elevados (> 10 µmol/L). O ácido ursodesoxicólico alivia o prurido; o momento do parto depende dos ácidos biliares — com ≥ 100 µmol/L o risco de óbito fetal aumenta e indica-se parto por volta de 35–36 semanas.",
    "commentary": "Esteatose hepática aguda (A): cursa com insuficiência hepática, hipoglicemia, coagulopatia e lesão renal, ausentes aqui.\n\nColecistite aguda (C): dor em hipocôndrio direito com febre e Murphy, sem prurido palmoplantar.\n\nPielonefrite (D): febre e sintomas sistêmicos; a esterase positiva isolada após bacteriúria tratada não explica o prurido.",
    "reference": "RCOG Green-top Guideline nº 43 – Intrahepatic Cholestasis of Pregnancy (2022); Febrasgo",
    "tags": [
      "colestase intra-hepática da gestação",
      "prurido",
      "ácido ursodesoxicólico",
      "gestação de alto risco"
    ],
    "tip": "Prurido palmoplantar noturno no 3º trimestre = colestase gestacional → ácidos biliares."
  },
  {
    "id": "hcpa2025-25",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nGestante de 35 anos, G2C1, com 29 semanas de gestação, veio ao Centro Obstétrico por sangramento vaginal de pequeno a moderado volume. Negou dor abdominal e episódios anteriores de sangramento. Ao exame, verificaram-se sinais vitais normais, ausência de contrações uterinas e feto com vitalidade. Considerando-se o quadro clínico, a principal hipótese diagnóstica é........... Durante o exame físico, deve-se evitar a realização de........... O exame de imagem recomendado para confirmar o diagnóstico é........... Se a principal hipótese diagnóstica for confirmada, deve-se investigar também a possibilidade de...........",
    "options": [
      "placenta prévia – toque vaginal – ultrassonografia transvaginal – acretismo placentário",
      "placenta prévia – exame especular – ultrassonografia transabdominal – vasa prévia",
      "descolamento prematuro de placenta – toque vaginal – ultrassonografia transabdominal – ruptura uterina",
      "descolamento prematuro de placenta – amniotomia – ultrassonografia transvaginal – vasa prévia"
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento vaginal indolor no terceiro trimestre, em multípara com cesárea prévia, com útero relaxado e feto vivo: placenta prévia. O toque vaginal deve ser evitado (pode provocar hemorragia grave), e o diagnóstico é confirmado pela ultrassonografia transvaginal, que é segura e mais precisa. Com cesárea anterior e placenta prévia, deve-se investigar acretismo placentário.",
    "commentary": "Evitar o especular e usar ultrassom transabdominal, investigando vasa prévia (B): o especular é permitido com cuidado; o exame de escolha é o transvaginal.\n\nDPP com ruptura uterina (C) e com amniotomia e vasa prévia (D): o sangramento indolor com útero relaxado fala contra DPP.",
    "reference": "Febrasgo – Placenta prévia e acretismo placentário; RCOG Green-top Guideline nº 27a (2018)",
    "tags": [
      "placenta prévia",
      "acretismo placentário",
      "sangramento da segunda metade",
      "ultrassonografia obstétrica"
    ],
    "tip": "Sangramento indolor no 3º trimestre: placenta prévia → nada de toque, USG transvaginal."
  },
  {
    "id": "hcpa2025-26",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre gestação gemelar.",
    "options": [
      "À visualização ultrassonográfica, massa placentária única, sexos fetais semelhantes e presença do sinal do lambda definem que a gestação é monocoriônica diamniótica",
      "Nos dicoriônicos, o óbito de um feto no segundo ou terceiro trimestre pode levar ao óbito do outro ou à hipovolemia/isquemia com dano cerebral",
      "No diagnóstico pré-natal da sequência anemia-policitemia, o feto anêmico apresenta velocidade de pico sistólico da artéria cerebral média < 1,0 MoM (múltiplos da mediana)",
      "Nos monoamnióticos, o nascimento eletivo deverá ser realizado por cesariana, a ser programada em torno da 33ª semana em razão do maior risco de óbito ou morbidade fetal grave"
    ],
    "correctAnswer": 3,
    "explanation": "Na gestação gemelar monocoriônica e monoamniótica, o risco de óbito fetal por entrelaçamento de cordões é alto; recomenda-se cesariana eletiva por volta de 32–34 semanas (após corticoide), e o parto vaginal não é recomendado.",
    "commentary": "Placenta única com sinal do lambda como monocoriônica (A): o sinal do lambda indica gestação dicoriônica; a monocoriônica tem o sinal do T.\n\nÓbito de um feto prejudicando o outro nos dicoriônicos (B): isso ocorre nos monocoriônicos, pelas anastomoses vasculares.\n\nFeto anêmico com pico sistólico < 1,0 MoM (C): na sequência anemia-policitemia, o anêmico tem PVS > 1,5 MoM e o policitêmico < 1,0 MoM.",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (2016); NICE NG137 – Twin and triplet pregnancy (2019)",
    "tags": [
      "gestação gemelar",
      "monoamniótica",
      "sequência anemia-policitemia",
      "medicina fetal"
    ],
    "tip": "Monoamniótica: cesárea eletiva com 32–34 semanas."
  },
  {
    "id": "hcpa2025-27",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 28 anos, G1P0, com 32 semanas de gestação, apresentou febre (38º C), calafrios, mialgia, astenia e dor retro-orbitária, quadro iniciado há 3 dias. No quarto dia, foram registradas hipotensão (pressão arterial de 80/50 mmHg), dor abdominal intensa, letargia e ascite. O hemograma indicou hemoglobina de 14,5 g/dl, hematócrito de 50%, leucócitos de 2.300/mm³, plaquetas de 70.000/mm³, AST de 35 U/l e creatinina de 0,9 mg/dl. Os batimentos cardiofetais estavam presentes (148 bpm). Qual a conduta inicial mais adequada?",
    "options": [
      "Solicitar ressonância magnética abdominal e painel viral",
      "Realizar hidratação intravenosa imediatamente com soro fisiológico a 0,9%",
      "Usar rapidamente expansores plasmáticos (albumina) intravenosos",
      "Interromper a gestação"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com dengue grave (hipotensão, extravasamento plasmático com ascite, hematócrito de 50% e plaquetopenia) no período crítico: choque por extravasamento (grupo D). A conduta imediata é a ressuscitação volêmica com cristaloide (soro fisiológico 0,9%, 20 mL/kg em 20 minutos, repetida conforme resposta), em unidade com suporte intensivo.",
    "commentary": "Ressonância e painel viral (A): atrasaria o tratamento do choque.\n\nAlbumina (C): coloides são considerados apenas após falha de várias expansões com cristaloide.\n\nInterromper a gestação (D): a prioridade é estabilizar a mãe; a interrupção no choque aumenta o risco.",
    "reference": "Ministério da Saúde – Dengue: diagnóstico e manejo clínico (6ª ed., 2024)",
    "tags": [
      "dengue grave",
      "gestação",
      "hidratação venosa",
      "arboviroses"
    ],
    "tip": "Dengue com choque: SF 0,9% 20 mL/kg em 20 min, repetir conforme resposta."
  },
  {
    "id": "hcpa2025-28",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 28 anos, G3P2, com 38 semanas de gestação, procurou atendimento no hospital de sua cidade por contrações uterinas dolorosas e regulares nas 2 últimas horas. Ao exame obstétrico, os batimentos cardiofetais estavam normais, a dinâmica uterina era de 5 contrações/10 minutos com “puxos”; ao toque, havia 10 cm de dilatação, com a cabeça fetal no plano +3 de De Lee e a sutura lambdoide em posição subpúbica. Assinale a assertiva correta sobre a assistência ao trabalho de parto.",
    "options": [
      "A gestante encontra-se no primeiro período ou fase clínica do parto, devendo-se orientar o aproveitamento máximo das contrações expulsivas (manobra de Valsalva) e realizar a rotação manual interna da cabeça fetal para puxá-la",
      "A variedade de posição fetal é posterior, razão pela qual a chance de um parto instrumentado é maior, devendo-se realizar sondagem vesical e episiotomia para facilitar a rotação e o desprendimento da cabeça fetal",
      "Se, após o desprendimento cefálico, a tração controlada da cabeça fetal para baixo não for suficiente para liberar o ombro anterior, deve-se partir para as manobras iniciais de distocia de ombro",
      "O manejo ativo do terceiro período do parto relaciona-se a menor volume de sangramento materno e consiste em administrar ocitocina (10 UI, por via intramuscular em cada nádega) imediatamente após o nascimento, realizar massagem no fundo do útero concomitantemente à tração do cordão e iniciar a amamentação imediatamente após o parto"
    ],
    "correctAnswer": 2,
    "explanation": "Se, após o desprendimento da cabeça, a tração suave para baixo não libera o ombro anterior, trata-se de distocia de ombro, e devem ser iniciadas as manobras (pedir ajuda, McRoberts e pressão suprapúbica, seguidas de manobras internas, conforme o mnemônico ALEERTA).",
    "commentary": "Primeiro período com Valsalva e rotação manual (A): com dilatação completa e puxos, a gestante está no segundo período; e a rotação manual não é rotina.\n\nVariedade posterior com episiotomia de rotina (B): a sutura lambdoide subpúbica indica occipitopúbica (anterior), e episiotomia e sondagem não são rotina.\n\nManejo ativo do terceiro período (D): a ocitocina é 10 UI IM (dose total, não em cada nádega), e a massagem uterina não é feita concomitante à tração do cordão.",
    "reference": "Ministério da Saúde – Diretrizes Nacionais de Assistência ao Parto Normal (2017); RCOG Green-top Guideline nº 42 – Shoulder Dystocia",
    "tags": [
      "assistência ao parto",
      "distocia de ombro",
      "período expulsivo",
      "obstetrícia"
    ],
    "tip": "Cabeça saiu e ombro não: distocia de ombro → McRoberts + pressão suprapúbica."
  },
  {
    "id": "hcpa2025-29",
    "module": "Ginecologia e Obstetrícia",
    "text": "Multípara de 30 anos, G2C1, com 28 semanas de gestação, solicitou ao pré-natalista que fosse realizada ligadura tubária durante o parto. Em casos como esse, como o médico deve proceder?",
    "options": [
      "Solicitar que a paciente e o marido assinem um termo de consentimento livre e esclarecido (TCLE) e realizar a ligadura tubária imediatamente após o parto",
      "Explicar à paciente a eficácia dos métodos reversíveis, registrar sua demanda com, pelo menos, 60 dias de antecedência ao parto e solicitar que ela assine um TCLE",
      "Aceitar a demanda da paciente e marcar a cesariana após completadas 39 semanas de gestação",
      "Explicar à paciente que a esterilização por ligadura tubária é proibida durante o parto ou durante a cesariana"
    ],
    "correctAnswer": 1,
    "explanation": "Pela Lei 14.443/2022 (que alterou a Lei 9.263/1996), a laqueadura pode ser feita em pessoas com mais de 21 anos ou com pelo menos 2 filhos vivos, sem necessidade de consentimento do cônjuge, e pode ser realizada durante o parto (cesárea ou vaginal), desde que a manifestação de vontade tenha ocorrido pelo menos 60 dias antes do parto, com aconselhamento sobre métodos reversíveis e assinatura do termo de consentimento.",
    "commentary": "Assinatura do marido (A): o consentimento do cônjuge deixou de ser exigido.\n\nMarcar cesárea com 39 semanas para a laqueadura (C): o desejo de laqueadura não indica cesárea; a via de parto segue indicação obstétrica.\n\nProibida durante o parto (D): a nova lei permite a laqueadura no parto, respeitado o prazo de 60 dias.",
    "reference": "Lei nº 14.443/2022; Lei nº 9.263/1996 (Planejamento Familiar)",
    "tags": [
      "laqueadura tubária",
      "planejamento reprodutivo",
      "legislação"
    ],
    "tip": "Laqueadura: > 21 anos ou 2 filhos; sem aval do cônjuge; no parto se pedida ≥ 60 dias antes."
  },
  {
    "id": "hcpa2025-30",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 16 anos foi atendida em consulta pré-natal de gestação com evolução normal. Que orientação, dentre as abaixo, deve ser dada à paciente em relação à prevenção de uma nova gestação logo após a atual?",
    "options": [
      "Dar preferência a métodos reversíveis de longa ação, como dispositivo intrauterino e implante, que podem ser inseridos imediatamente após o parto",
      "Dar preferência a uso de anticoncepcional oral combinado",
      "Dar preferência a uso da minipílula",
      "É desnecessário abordar o tema neste momento, pois essa orientação será mais eficiente durante a internação e o puerpério"
    ],
    "correctAnswer": 0,
    "explanation": "Adolescentes têm alto risco de nova gestação precoce. Os métodos reversíveis de longa ação (LARC: DIU de cobre, DIU hormonal e implante) são os mais eficazes e não dependem de adesão; podem ser inseridos imediatamente após o parto (o implante e o DIU de cobre estão disponíveis no SUS para adolescentes no pós-parto). A orientação deve começar ainda no pré-natal.",
    "commentary": "Anticoncepcional oral combinado (B): depende de adesão e é contraindicado no pós-parto precoce com amamentação (antes de 6 semanas).\n\nMinipílula (C): seguro na amamentação, mas exige uso diário rigoroso, com maior taxa de falha em adolescentes.\n\nAbordar só no puerpério (D): o pré-natal é o momento ideal para o aconselhamento.",
    "reference": "Febrasgo – Contracepção na adolescência; ACOG Committee Opinion nº 735 – Adolescents and LARC",
    "tags": [
      "contracepção na adolescência",
      "LARC",
      "implante",
      "gravidez na adolescência"
    ],
    "tip": "Adolescente grávida: oferecer LARC já no pré-natal, inserção no pós-parto imediato."
  },
  {
    "id": "hcpa2025-31",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menina de 4 anos foi trazida à consulta por apresentar desenvolvimento de mamas e pelos pubianos, quadro iniciado há 3 meses segundo familiares. Ao exame físico, foram constatados mamas e pelos no estágio 3 de Tanner. Exames laboratoriais e funcionais levaram ao diagnóstico de puberdade precoce dependente de gonadotrofinas. Assinale a assertiva correta com base no diagnóstico.",
    "options": [
      "Deve ser iniciado imediatamente tratamento com agonistas do GnRH e hormônio do crescimento",
      "É necessário realizar ultrassonografia pélvica para excluir tumor ou cisto ovariano",
      "É necessário realizar ressonância magnética de crânio para investigar a possibilidade de tumor",
      "É possível uma abordagem conservadora, observando a evolução da puberdade nos próximos meses"
    ],
    "correctAnswer": 2,
    "explanation": "Menina de 4 anos com puberdade precoce central (dependente de gonadotrofinas): em meninas menores de 6 anos a chance de causa orgânica no SNC (hamartoma hipotalâmico, outros tumores) é maior, e a ressonância magnética de crânio está indicada. Em meninas entre 6 e 8 anos, a maioria é idiopática, e a RM é discutida caso a caso.",
    "commentary": "GnRH e hormônio do crescimento imediatos (A): o análogo de GnRH é indicado após a investigação; GH não faz parte do tratamento.\n\nUltrassom para tumor ou cisto ovariano (B): é investigação da puberdade precoce periférica (independente de gonadotrofinas).\n\nConduta expectante (D): puberdade precoce central progressiva aos 4 anos exige investigação e, em geral, tratamento.",
    "reference": "SBEM/SBP – Puberdade precoce; Latronico AC et al., Lancet Diabetes Endocrinol 2016",
    "tags": [
      "puberdade precoce central",
      "ressonância magnética",
      "ginecologia infanto-puberal",
      "endocrinologia pediátrica"
    ],
    "tip": "Puberdade precoce central em menina < 6 anos: RM de crânio."
  },
  {
    "id": "hcpa2025-32",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos, G1P1, veio ao Posto de Saúde para realizar exame citopatológico (CP) de colo de útero. O exame não era realizado há 4 anos. Negou diagnóstico prévio de HPV e informou não ter feito a vacina. Qual a conduta mais adequada com base no exame especular reproduzido abaixo?",
    "options": [
      "Fazer a drenagem da lesão e coletar o CP em outro dia",
      "Coletar o CP e um raspado da lesão",
      "Coletar o CP e biopsiar a lesão",
      "Coletar o CP apenas"
    ],
    "correctAnswer": 3,
    "explanation": "O exame especular mostra colo uterino com pequenas formações císticas amareladas na zona de transformação — cistos de Naboth, achados benignos e fisiológicos (glândulas endocervicais obstruídas pela metaplasia escamosa). Não exigem tratamento nem biópsia; a conduta é apenas coletar a citologia.",
    "commentary": "Drenar a lesão (A), coletar raspado (B) ou biopsiar (C): cistos de Naboth são benignos e não requerem intervenção.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero; Febrasgo",
    "tags": [
      "cistos de Naboth",
      "colo uterino",
      "citologia oncótica",
      "ginecologia"
    ],
    "image": "/images/hcpa2025-32.webp",
    "tip": "Cisto de Naboth: achado benigno; só coletar o CP."
  },
  {
    "id": "hcpa2025-33",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 17 anos, com vida sexual ativa, referiu, na consulta, que seus ciclos menstruais variavam de 25-34 dias, com 4 dias de sangramento, acompanhado de dismenorreia. Foi realizado exame especular no 19º dia do ciclo (imagem abaixo). Com base nesse exame, o que se esperaria encontrar ao exame ultrassonográfico do endométrio e do ovário?",
    "options": [
      "Endométrio fino e ovários com vários folículos antrais bilateralmente, não > 0,9 cm",
      "Endométrio trilaminar de 1,0 cm e folículo de aproximadamente 1,8 cm de diâmetro em um dos anexos",
      "Endométrio homogêneo de 1,3 cm e cisto com conteúdo hemorrágico de 2,0 cm de diâmetro em um dos ovários",
      "Endométrio fino e folículo de aproximadamente 1,8 cm de diâmetro em um dos ovários"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher com ciclos de 25–34 dias examinada no 19º dia: o especular mostra muco cervical abundante, claro e filante, típico do período periovulatório (efeito estrogênico). Nessa fase espera-se endométrio trilaminar (aspecto proliferativo tardio), com cerca de 1 cm, e folículo dominante pré-ovulatório de aproximadamente 1,8–2,2 cm.",
    "commentary": "Endométrio fino com folículos antrais pequenos (A): corresponde à fase folicular inicial.\n\nEndométrio homogêneo de 1,3 cm com cisto hemorrágico (C): padrão da fase lútea (endométrio secretor e corpo lúteo).\n\nEndométrio fino com folículo de 1,8 cm (D): no período pré-ovulatório o endométrio já está espesso e trilaminar.",
    "reference": "Speroff – Endocrinologia Ginecológica Clínica e Infertilidade; Febrasgo",
    "tags": [
      "ciclo menstrual",
      "muco cervical",
      "ultrassonografia ginecológica",
      "fisiologia"
    ],
    "image": "/images/hcpa2025-33.webp",
    "tip": "Período ovulatório: muco filante, endométrio trilaminar, folículo ~2 cm."
  },
  {
    "id": "hcpa2025-34",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a contracepção.",
    "options": [
      "Durante o puerpério e a amamentação, a contracepção de emergência (1,5 mg de levonorgestrel, em dose única, usado em caso de falha da contracepção usual) está contraindicada, mesmo para pacientes sem comorbidades",
      "Os contraceptivos orais contendo apenas progestágenos não inibem a ovulação e apresentam efeitos sobre o muco cervical e a receptividade do endométrio",
      "Anticoncepção hormonal combinada está contraindicada para pacientes com enxaqueca com aura, de qualquer idade, sendo os métodos não hormonais e o anel vaginal alternativas recomendadas para esses casos",
      "Quando uma usuária de DIU de cobre é diagnosticada com doença inflamatória pélvica (DIP), deve-se tratar a DIP com antibióticos apropriados, não havendo necessidade de remover o DIU se a paciente deseja continuar com seu uso"
    ],
    "correctAnswer": 3,
    "explanation": "Na doença inflamatória pélvica em usuária de DIU de cobre, trata-se com antibióticos e não é necessário remover o DIU se a paciente quiser mantê-lo; a remoção é considerada se não houver melhora clínica em 48–72 horas.",
    "commentary": "Contracepção de emergência contraindicada no puerpério (A): o levonorgestrel é categoria 1 na amamentação e pode ser usado.\n\nPílulas de progestágeno não inibem ovulação (B): o desogestrel inibe a ovulação; a minipílula de noretisterona age mais sobre o muco.\n\nAnel vaginal como alternativa na enxaqueca com aura (C): o anel tem estrogênio e também é contraindicado.",
    "reference": "OMS – Critérios médicos de elegibilidade (2015); CDC STI Treatment Guidelines (2021)",
    "tags": [
      "contracepção",
      "DIU de cobre",
      "doença inflamatória pélvica",
      "anticoncepção"
    ],
    "tip": "DIP em usuária de DIU: tratar sem remover; retirar se não melhorar em 48–72 h."
  },
  {
    "id": "hcpa2025-35",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre a sífilis.",
    "options": [
      "O rastreamento em profissionais do sexo e em pessoas que fazem uso abusivo de álcool e drogas é anual, conforme recomendação do Ministério da Saúde",
      "A sífilis secundária manifesta-se com manchas no corpo não infectantes que desaparecem espontaneamente",
      "O tratamento da sífilis recente deve ser realizado com penicilina benzatina 2,4 milhões UI, por via intramuscular, em dose única",
      "Treponema pallidum não circula pelo sistema nervoso central antes de 1 ano"
    ],
    "correctAnswer": 2,
    "explanation": "A sífilis recente (primária, secundária e latente recente, com menos de 1 ano de evolução) é tratada com penicilina G benzatina 2,4 milhões UI IM em dose única (1,2 milhão em cada glúteo).",
    "commentary": "Rastreamento anual em profissionais do sexo e usuários de drogas (A): o Ministério da Saúde recomenda rastreio semestral nessas populações.\n\nLesões da secundária não infectantes (B): as lesões da sífilis secundária (sobretudo mucosas e condilomas planos) são altamente infectantes.\n\nT. pallidum não alcança o SNC antes de 1 ano (D): a invasão do SNC pode ocorrer precocemente, em qualquer fase.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "sífilis",
      "penicilina benzatina",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Sífilis recente: benzatina 2,4 milhões, dose única. Tardia/ignorada: 3 doses."
  },
  {
    "id": "hcpa2025-36",
    "module": "Ginecologia e Obstetrícia",
    "text": "Nulípara de 32 anos (menarca aos 12 anos), com ciclos menstruais regulares, veio à consulta por quadro de dismenorreia e dor pélvica crônica. Fazia uso de pílula anticoncepcional de forma errática, apresentando melhora dos sintomas nestes períodos. Sem queixas urinárias ou intestinais, informou manter dieta equilibrada e fazer exercícios físicos (3 vezes/semana). O exame físico não revelou anormalidades. Trouxe ultrassonografia pélvica transvaginal, mostrando um cisto folicular de 15 mm. A conduta inicial é prescrever",
    "options": [
      "anti-inflamatório não esteroidal de forma cíclica",
      "estrógeno contínuo",
      "progesterona cíclica",
      "progesterona contínua"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher jovem com dismenorreia e dor pélvica crônica que melhoram com o uso de anticoncepcional, exame físico e ultrassom sem lesões (o cisto folicular é fisiológico): a hipótese é endometriose (diagnóstico clínico). O tratamento empírico de primeira linha é supressão hormonal contínua com progestagênio (como dienogeste ou desogestrel) ou contraceptivo combinado contínuo, sem necessidade de laparoscopia diagnóstica.",
    "commentary": "AINE cíclico (A): alivia a dismenorreia, mas não trata a doença e não é a melhor opção diante de dor crônica com suspeita de endometriose.\n\nEstrogênio contínuo (B): estimula os focos de endometriose.\n\nProgesterona cíclica (C): o uso cíclico não suprime de forma adequada a doença; o contínuo é preferido.",
    "reference": "ESHRE Guideline: Endometriosis (2022); Febrasgo – Endometriose",
    "tags": [
      "endometriose",
      "dor pélvica crônica",
      "progestagênios",
      "ginecologia"
    ],
    "tip": "Suspeita clínica de endometriose: progestagênio contínuo, sem precisar de laparoscopia."
  },
  {
    "id": "hcpa2025-37",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente feminina, de 55 anos, veio à consulta queixando-se de perda involuntária de urina associada à urgência, além de noctúria. Negou perda aos esforços. Qual dos exames abaixo deve ser solicitado para firmar o diagnóstico?",
    "options": [
      "Urocultura",
      "Ultrassonografia abdominal",
      "Avaliação urodinâmica",
      "Teste de Valsalva"
    ],
    "correctAnswer": 0,
    "explanation": "Na mulher com incontinência de urgência e noctúria (bexiga hiperativa), o primeiro passo diagnóstico é excluir infecção do trato urinário com exame de urina e urocultura, pois a ITU pode causar urgência e incontinência. O diagnóstico de bexiga hiperativa é clínico; o estudo urodinâmico não é necessário antes do tratamento inicial.",
    "commentary": "Ultrassom abdominal (B): pode avaliar resíduo pós-miccional, mas não é o exame inicial para firmar o diagnóstico.\n\nAvaliação urodinâmica (C): reservada para casos refratários ou complexos.\n\nTeste de Valsalva (D): avalia incontinência de esforço, que a paciente nega.",
    "reference": "AUA/SUFU Guideline on Overactive Bladder (2024); Febrasgo – Incontinência urinária",
    "tags": [
      "incontinência urinária de urgência",
      "bexiga hiperativa",
      "urocultura",
      "uroginecologia"
    ],
    "tip": "Urgência miccional: afastar ITU primeiro."
  },
  {
    "id": "hcpa2025-38",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a assertiva correta sobre o câncer pélvico ginecológico.",
    "options": [
      "O rastreamento do carcinoma de endométrio está indicado para mulheres assintomáticas dos 45-65 anos, sendo realizado através da medida da espessura endometrial à ultrassonografia transvaginal",
      "Pacientes pré-menopáusicas com sangramento abundante ou irregular e pacientes pós-menopáusicas assintomáticas com células endometriais ao exame citopatológico de colo uterino têm indicação de biópsia endometrial",
      "O tipo histológico mais frequente do carcinoma de ovário é o seroso de baixo grau, que tem origem em lesões intraepiteliais nas fímbrias das trompas uterinas",
      "As mutações em BRCA1 e BRCA2 estão associadas a risco de carcinoma de ovário; a mutação em BRCA2 confere maior risco ao ovário do que a em BRCA1"
    ],
    "correctAnswer": 1,
    "explanation": "Biópsia endometrial está indicada em mulheres na pré-menopausa com sangramento uterino anormal abundante ou irregular persistente (sobretudo acima de 45 anos ou com fatores de risco) e em mulheres na pós-menopausa com células endometriais na citologia cervical, pois podem indicar hiperplasia ou câncer.",
    "commentary": "Rastreamento de câncer de endométrio em assintomáticas (A): não há rastreamento populacional recomendado.\n\nSeroso de baixo grau como o mais frequente (C): o tipo histológico mais frequente é o seroso de alto grau, que se origina nas fímbrias tubárias.\n\nBRCA2 com maior risco ovariano que BRCA1 (D): o risco de câncer de ovário é maior com BRCA1 (cerca de 40%) do que com BRCA2 (cerca de 15–20%).",
    "reference": "ACOG Practice Bulletin nº 149 – Endometrial Cancer; Febrasgo",
    "tags": [
      "câncer de endométrio",
      "biópsia endometrial",
      "câncer de ovário",
      "oncologia ginecológica"
    ],
    "tip": "Células endometriais na citologia da pós-menopausa: biópsia endometrial."
  },
  {
    "id": "hcpa2025-39",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 46 anos, ainda na menacme, veio à consulta na UBS queixando-se de mastalgia na mama direita. Ao exame físico, não foram palpadas linfadenopatias suspeitas nas regiões axilares ou fossas supraclaviculares. Palpou-se nódulo elástico de 6 cm, no quadrante superolateral da mama direita, doloroso, não fixo a planos profundos ou pele. A mamografia identificou nódulo com bordas regulares no quadrante superolateral da mama direita, classificado como BI-RADS zero. À ultrassonografia mamária complementar, foi evidenciada uma lesão cística de 5,5 cm, bem delimitada e com conteúdo anecoico na mesma localização, classificada como BI-RADS 2. A conduta mais adequada é",
    "options": [
      "realizar punção biópsia por agulha fina (PAAF)",
      "realizar punção com agulha grossa – core biopsy",
      "solicitar nova ultrassonografia mamária em 6 meses",
      "realizar exérese da lesão"
    ],
    "correctAnswer": 0,
    "explanation": "Cisto mamário simples (anecoico, bem delimitado, BI-RADS 2), grande (5,5 cm) e sintomático (doloroso): a conduta é a punção aspirativa por agulha fina, que alivia os sintomas e confirma a natureza cística. O líquido só é enviado para citologia se for sanguinolento, e reavalia-se se houver lesão residual ou recidiva.",
    "commentary": "Core biopsy (B): indicada em lesões sólidas ou complexas suspeitas, não em cisto simples.\n\nUltrassom em 6 meses (C): seria possível em cisto assintomático, mas a paciente tem dor.\n\nExérese (D): não indicada para cisto simples.",
    "reference": "Sociedade Brasileira de Mastologia; ACR BI-RADS Atlas, 5ª ed.",
    "tags": [
      "cisto mamário",
      "PAAF",
      "mastalgia",
      "mastologia"
    ],
    "tip": "Cisto simples sintomático: punção esvaziadora."
  },
  {
    "id": "hcpa2025-40",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente feminina, de 23 anos, veio à Emergência na manhã de hoje em busca de orientação considerando o ocorrido há 2 dias. Relatou ter ido a uma festa com amigas, mas não recordava o que havia acontecido, a não ser que acordara, na manhã seguinte, sem roupas ao lado de um homem desconhecido. Assustada, foi embora para casa, onde se manteve escondida e em profundo sofrimento, sem compartilhar com ninguém a situação. Em relação ao caso, assinale a assertiva correta sobre o atendimento a ser prestado pela equipe multidisciplinar na Emergência.",
    "options": [
      "A equipe assistencial acolhe a paciente e a orienta a procurar inicialmente a delegacia para fazer o boletim de ocorrência policial e submeter-se ao exame físico no Departamento Médico Legal, tendo em vista que ela não se lembra do que ocorreu. Na sequência, deve retornar ao hospital para receber novas orientações e realizar exames",
      "O médico assistente acolhe a paciente, solicita exames e prescreve o esquema de profilaxia para as Infecções Sexualmente Transmissíveis (ISTs) não virais, bem como fornece anticoncepção de emergência para uso imediato, mas informa que não há mais indicação para uso de antirretrovirais, pois já se passaram mais de 48 horas do ato de violência",
      "O médico assistente acolhe a paciente, solicita exames e prescreve o esquema de profilaxia para as ISTs não virais e a anticoncepção de emergência e inicia a profilaxia para HIV, que deve ser utilizada por 28 dias ininterruptamente. Além disso, solicita avaliação do Serviço de Psiquiatria e do Serviço Social conforme plano de atendimento multidisciplinar a pacientes vítimas de violência",
      "O médico assistente faz a solicitação de exames e prescreve todas as medicações do protocolo hospitalar para pacientes vítimas de violência sexual, bem como solicita avaliação do Serviço de Psiquiatria e do Serviço Social. Na alta, orienta a paciente sobre a importância do uso de preservativo por 6 meses e uso regular das medicações prescritas e agenda retorno ambulatorial. A notificação através do Sistema de Informação de Agravos de Notificação pode ou não ser realizada, de acordo com o desejo da paciente"
    ],
    "correctAnswer": 2,
    "explanation": "Possível violência sexual há 2 dias (cerca de 48 horas), com perda de memória sugerindo uso de substância. Ainda está dentro da janela de 72 horas para profilaxia pós-exposição ao HIV, que dura 28 dias, além da profilaxia de IST não virais, anticoncepção de emergência (eficaz até 5 dias), vacina/imunoglobulina para hepatite B se indicada, exames, notificação compulsória e acompanhamento multiprofissional (psiquiatria, serviço social).",
    "commentary": "Encaminhar primeiro à delegacia e ao DML (A): o atendimento de saúde não depende de boletim de ocorrência ou perícia.\n\nSem indicação de PEP após 48 horas (B): a PEP é indicada em até 72 horas.\n\nNotificação conforme desejo da paciente (D): a notificação de violência sexual é compulsória.",
    "reference": "Ministério da Saúde – Norma Técnica: Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual; PCDT de PEP (2024)",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "anticoncepção de emergência",
      "saúde da mulher"
    ],
    "tip": "Violência sexual: PEP até 72 h (28 dias), contracepção de emergência até 5 dias, notificar sempre."
  },
  {
    "id": "hcpa2025-41",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 45 anos, com diabetes melito tipo 2, submetida a colecistectomia laparoscópica há 10 dias, retornou ao Ambulatório referindo dor constante no local da incisão, vermelhidão e calor ao redor da ferida operatória. Ao exame, apresentava febre de 38,5º C, secreção purulenta no sítio cirúrgico, endurecimento e sinais inflamatórios ao redor da incisão. Hemograma evidenciou leucocitose com desvio à esquerda. Qual a conduta mais adequada?",
    "options": [
      "Orientar a higienização adequada da ferida operatória e observar por mais 48 horas antes de se adotar qualquer outra conduta",
      "Realizar drenagem da ferida operatória e iniciar antibioticoterapia empírica",
      "Indicar antipiréticos e analgesia, sem necessidade de iniciar antibioticoterapia, pois pode ser uma reação inflamatória local",
      "Solicitar ultrassonografia para investigar abscesso intracavitário, sem necessidade de iniciar antibioticoterapia empírica até o resultado do exame"
    ],
    "correctAnswer": 1,
    "explanation": "Infecção de sítio cirúrgico incisional (dor, eritema, calor, secreção purulenta, febre e leucocitose) em paciente diabética, 10 dias após colecistectomia. O tratamento principal é abrir e drenar a ferida (controle do foco), com limpeza; o antibiótico sistêmico é indicado quando há sinais sistêmicos (febre, leucocitose) ou celulite extensa, como neste caso.",
    "commentary": "Higiene e observação por 48 horas (A): com pus e sinais sistêmicos, adiar a drenagem agrava a infecção.\n\nSó antipiréticos e analgesia (C): secreção purulenta não é reação inflamatória simples.\n\nUltrassom antes de qualquer conduta (D): a infecção é superficial e evidente; imagem só se houver suspeita de coleção profunda, e o atraso não se justifica.",
    "reference": "ANVISA – Critérios diagnósticos de infecção relacionada à assistência à saúde; IDSA Guidelines for SSTI (2014)",
    "tags": [
      "infecção do sítio cirúrgico",
      "drenagem",
      "pós-operatório",
      "cirurgia geral"
    ],
    "tip": "ISC incisional com pus: abrir e drenar; antibiótico se houver sinais sistêmicos."
  },
  {
    "id": "hcpa2025-42",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 45 anos, foi trazido à Emergência após ter sido exposto ao fogo direto no local de trabalho por aproximadamente 25 segundos. À admissão, apresentava queimaduras visíveis em cerca de 30% da superfície corporal, predominantemente em braços, tórax e face, frequência cardíaca de 126 bpm, pressão arterial de 95/55 mmHg, frequência respiratória de 28 mpm e saturação de oxigênio de 89%. As vias aéreas estavam comprometidas, com sinais de inalação de fumaça. Foi imediatamente entubado para proteção das vias aéreas. Qual das intervenções abaixo é a prioritária para o manejo inicial?",
    "options": [
      "Administração imediata de antibióticos intravenosos para prevenir infecção",
      "Imediato desbridamento das áreas queimadas para reduzir a carga de tecido necrótico",
      "Infusão intravenosa agressiva de líquidos para tratar o choque hipovolêmico",
      "Transferência imediata para a Unidade de Queimados, sem intervenções iniciais"
    ],
    "correctAnswer": 2,
    "explanation": "Grande queimado (30% de superfície corporal) com lesão inalatória, já intubado, taquicárdico e hipotenso: após garantir a via aérea, a prioridade é a reposição volêmica intravenosa com Ringer lactato (fórmula de Parkland/ATLS), guiada pela diurese, para tratar o choque do queimado.",
    "commentary": "Antibiótico profilático (A): não é recomendado no queimado.\n\nDesbridamento imediato (B): é feito após estabilização, não na fase inicial.\n\nTransferir sem intervenções iniciais (D): a estabilização (via aérea e volume) deve começar antes e durante a transferência.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "queimaduras",
      "reposição volêmica",
      "lesão inalatória",
      "trauma"
    ],
    "alert": "O termo “agressiva” pode induzir a erro: a reposição deve ser guiada por metas (diurese), evitando sobrecarga (fluid creep).",
    "tip": "Queimado: via aérea, depois volume (Ringer) guiado pela diurese."
  },
  {
    "id": "hcpa2025-43",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 52 anos, em acompanhamento ambulatorial devido a uma insuficiência renal crônica avançada, foi incluído na lista de espera para transplante renal há 18 meses após passar por várias avaliações e tratamentos. Em razão da ampla publicidade do duplo transplante de um apresentador de televisão, ele expressou, durante a consulta, sua preocupação sobre a transparência e justiça do sistema de alocação dos órgãos no Brasil, questionando como os critérios de prioridade eram determinados e se seu tempo de espera era considerado justo em comparação com o de outros pacientes na lista. De acordo com a legislação brasileira, que critério, dentre os abaixo, é considerado o mais importante na priorização dos pacientes na lista de espera para transplante renal?",
    "options": [
      "A idade do paciente",
      "A compatibilidade imunológica entre doador e receptor",
      "A ordem de entrada na lista de espera",
      "A gravidade de sintomas"
    ],
    "correctAnswer": 1,
    "explanation": "No Sistema Nacional de Transplantes, a alocação de rins de doador falecido usa um sistema de pontuação em que a compatibilidade HLA entre doador e receptor tem o maior peso, junto com tempo em lista, idade, situação de priorização (impossibilidade de acesso para diálise) e sensibilização. Pelo gabarito, a compatibilidade imunológica é o critério mais importante.",
    "commentary": "Idade (A): é critério de desempate e há priorização para pediátricos, mas não é o principal.\n\nOrdem de entrada na lista (C): o tempo em lista conta pontos, mas a alocação não é por ordem de chegada.\n\nGravidade dos sintomas (D): no rim não há pontuação por gravidade (ao contrário do MELD no fígado), exceto em situações de urgência específicas.",
    "reference": "Ministério da Saúde – Portaria de Consolidação nº 4/2017 (Regulamento Técnico do Sistema Nacional de Transplantes)",
    "tags": [
      "transplante renal",
      "alocação de órgãos",
      "compatibilidade HLA",
      "nefrologia"
    ],
    "tip": "Rim de doador falecido: pontuação com maior peso para compatibilidade HLA."
  },
  {
    "id": "hcpa2025-44",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 35 anos, com diagnóstico de diabetes melito tipo 1 desde os 15 anos, foi internada por cetoacidose. Em seu histórico, constavam episódios depressivos recorrentes, transtorno por uso de álcool moderado dos 22 aos 28 anos e mãe com transtorno por uso de benzodiazepínicos. Passou a queixar-se de dor crônica em queimação nos membros inferiores com padrão de polineuropatia, tendo solicitado medicação analgésica. Já havia utilizado morfina injetável em outras internações para alívio de suas dores. Em relação à prescrição de morfina injetável para a paciente, assinale a assertiva correta.",
    "options": [
      "Está indicada morfina injetável se necessário, pois já se demonstrou que houve alívio das dores da paciente",
      "O tratamento pode ser realizado com morfina injetável de forma fixa para a dor crônica não oncológica",
      "A paciente não deve receber prescrição de opioides mesmo que apresente dor aguda, de forte intensidade, pelo alto risco de adição a opioides",
      "Independentemente do risco de adição a opioides, considerando o quadro clínico atual não há indicação de uso de morfina injetável fixa ou se necessário"
    ],
    "correctAnswer": 3,
    "explanation": "Dor neuropática crônica por polineuropatia diabética: opioides, especialmente morfina injetável, não estão indicados para dor crônica não oncológica neuropática; o tratamento é com fármacos de primeira linha para dor neuropática (duloxetina, pregabalina/gabapentina, amitriptilina). Além disso, a paciente tem fatores de risco para uso problemático (transtorno por uso de álcool, depressão, história familiar).",
    "commentary": "Morfina se necessário porque já aliviou antes (A) e morfina fixa para dor crônica (B): opioides não são indicados para essa dor neuropática crônica e aumentam riscos.\n\nNunca prescrever opioide, mesmo em dor aguda intensa (C): na dor aguda intensa (por exemplo, pós-operatória), opioide pode ser usado com cautela, mesmo em pacientes de risco.",
    "reference": "American Diabetes Association – Diabetic Neuropathy Position Statement (2017); CDC Clinical Practice Guideline for Prescribing Opioids (2022)",
    "tags": [
      "dor neuropática",
      "neuropatia diabética",
      "opioides",
      "dor crônica"
    ],
    "tip": "Dor neuropática diabética: duloxetina, pregabalina ou amitriptilina; opioide não."
  },
  {
    "id": "hcpa2025-45",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre a ultrassonografia à beira-leito na avaliação do paciente com trauma contuso toracoabdominal.",
    "options": [
      "Apresenta resultado falso negativo em lesões retroperitoneais isoladas",
      "É considerada positiva para sangramento quando imagem hiperecogênica é identificada em, pelo menos, 2 janelas do exame",
      "É superior à tomografia abdominal com contraste na identificação do foco de sangramento abdominal",
      "Permite identificar hemoperitônio, hemotórax e hemopericárdio, mas não define a presença de pneumotórax"
    ],
    "correctAnswer": 0,
    "explanation": "O ultrassom à beira do leito no trauma (FAST/eFAST) detecta líquido livre no peritônio, pericárdio e tórax (e, no eFAST, pneumotórax), mas tem baixa sensibilidade para lesões retroperitoneais (pâncreas, rins, duodeno, grandes vasos) e para lesões de víscera oca sem líquido, podendo dar falso negativo nessas situações.",
    "commentary": "Positivo com imagem hiperecogênica em 2 janelas (B): o sangue aparece como imagem anecoica (escura), e uma janela positiva já basta.\n\nSuperior à TC para localizar o sangramento (C): a TC com contraste é muito superior para identificar e graduar lesões.\n\nNão define pneumotórax (D): o eFAST detecta pneumotórax (ausência de deslizamento pleural).",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "FAST",
      "trauma abdominal",
      "ultrassonografia",
      "trauma"
    ],
    "tip": "FAST falha no retroperitônio; líquido livre é anecoico."
  },
  {
    "id": "hcpa2025-46",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 58 anos, com história de hipertensão arterial sistêmica de longa data e insuficiência renal crônica em hemodiálise, veio à consulta por edema do membro inferior esquerdo com evolução de 6 dias. A avaliação complementar com eco-Doppler colorido venoso confirmou a suspeita de trombose venosa profunda proximal. Assinale a assertiva correta sobre a opção terapêutica adequada para a paciente.",
    "options": [
      "Implante de filtro de veia cava inferior deve ser priorizado pelo risco aumentado de sangramento associado a anticoagulação sistêmica",
      "Apixabana em dose usual por, pelo menos, 6 meses é o fármaco preferencial para a anticoagulação",
      "Heparina de baixo peso molecular é o fármaco mais custo-efetivo para o tratamento ambulatorial",
      "Na utilização de rivaroxabana, não é necessário o ajuste do INR entre 2-3"
    ],
    "correctAnswer": 3,
    "explanation": "A rivaroxabana é um inibidor direto do fator Xa e não requer monitorização do INR, ao contrário da varfarina (alvo 2–3). Essa afirmação é correta como fato farmacológico — embora, em paciente em hemodiálise, os DOAC tenham uso restrito (a rivaroxabana é contraindicada com ClCr < 15).",
    "commentary": "Filtro de veia cava prioritário (A): o filtro é reservado a contraindicação absoluta à anticoagulação ou falha dela.\n\nApixabana em dose usual como preferencial (B): em hemodiálise, os dados são limitados; varfarina ou heparina não fracionada costumam ser preferidas.\n\nHBPM como mais custo-efetiva no ambulatório (C): a HBPM acumula na insuficiência renal dialítica e não é a escolha.",
    "reference": "ASH 2020 Guidelines for Management of VTE; ACCP (CHEST 2021)",
    "tags": [
      "trombose venosa profunda",
      "anticoagulação",
      "doença renal crônica",
      "hemodiálise"
    ],
    "alert": "A alternativa D é correta como fato (DOAC dispensa INR), mas a rivaroxabana não é recomendada em pacientes em hemodiálise. Nesse cenário, varfarina ou heparina não fracionada costumam ser preferidas.",
    "tip": "DOAC não precisa de INR; em diálise, preferir varfarina ou HNF."
  },
  {
    "id": "hcpa2025-47",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre a isquemia mesentérica crônica.",
    "options": [
      "Na maioria dos casos, há importante alteração da absorção intestinal",
      "A causa mais comum são embolias de repetição em pacientes com fibrilação atrial",
      "Caracteriza-se por dor abdominal pós-prandial (cerca de 15-20 minutos)",
      "A artéria mesentérica inferior é a mais comumente acometida"
    ],
    "correctAnswer": 2,
    "explanation": "A isquemia mesentérica crônica (angina intestinal), em geral por aterosclerose do tronco celíaco e da artéria mesentérica superior (costumam ser necessários dois ou mais vasos acometidos), causa dor abdominal pós-prandial começando cerca de 15–30 minutos após as refeições, com medo de comer e perda de peso.",
    "commentary": "Alteração importante da absorção (A): a perda de peso decorre principalmente da sitofobia (medo de comer), não de má absorção.\n\nEmbolias de repetição por fibrilação atrial (B): a embolia causa isquemia aguda; a crônica é aterosclerótica.\n\nArtéria mesentérica inferior como a mais acometida (D): as mais importantes são a mesentérica superior e o tronco celíaco.",
    "reference": "ESVS Guidelines on Diseases of Mesenteric Arteries and Veins (2017)",
    "tags": [
      "isquemia mesentérica crônica",
      "angina intestinal",
      "cirurgia vascular"
    ],
    "tip": "Angina intestinal: dor pós-prandial + medo de comer + emagrecimento."
  },
  {
    "id": "hcpa2025-48",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre o trauma vascular de extremidades.",
    "options": [
      "Em traumatismos penetrantes, o índice tornozelo-braço ou o índice de pressão arterial ≥ 0,9 na ausência de sinais clínicos de lesão vascular é condição suficiente para alta hospitalar sem investigação com exames de imagem",
      "No trauma contuso de alta energia, como luxação de joelho, o exame físico tem ótima sensibilidade e, portanto, não se recomenda avaliação com exames de imagem",
      "Lesões arteriais na mão e no antebraço em pacientes hemodinamicamente estáveis, mesmo sem sangramento ativo e com perfusão distal compensada, devem ser tratadas cirurgicamente em menos de 6 horas",
      "Angiografia por cateter é o exame padrão ouro para a investigação de traumatismo vascular dos membros"
    ],
    "correctAnswer": 0,
    "explanation": "No trauma penetrante de extremidade sem sinais clínicos de lesão vascular (sinais maiores ou menores), um índice tornozelo-braquial (ou índice de pressão arterial) ≥ 0,9 tem alto valor preditivo negativo para lesão arterial significativa, e o paciente pode ser liberado sem exame de imagem.",
    "commentary": "Luxação de joelho sem imagem (B): a luxação de joelho tem alto risco de lesão da artéria poplítea; recomenda-se ITB e angio-TC se alterado.\n\nCirurgia em < 6 horas para lesões de mão e antebraço compensadas (C): lesões distais com perfusão compensada podem ser tratadas de forma eletiva ou com ligadura.\n\nArteriografia como padrão-ouro (D): a angiotomografia substituiu a arteriografia como exame de escolha na maioria dos casos.",
    "reference": "EAST Practice Management Guidelines: Penetrating Lower Extremity Arterial Trauma (2012); ATLS 10ª ed.",
    "tags": [
      "trauma vascular",
      "índice tornozelo-braquial",
      "trauma de extremidades"
    ],
    "tip": "Trauma penetrante sem sinais e ITB ≥ 0,9: alta sem imagem."
  },
  {
    "id": "hcpa2025-49",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 40 anos, veio à consulta por ter sido identificado, durante avaliação clínica de rotina, nódulo de tireoide. Não apresentava história prévia de doença tireoidiana ou exposição à radiação.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "Cerca de 50% das mulheres apresentam nódulos de tireoide à ultrassonografia, a maioria com menos de 1,0 cm",
      "Biópsia com agulha fina é a conduta inicial, seguida de dosagem do TSH",
      "A terapia supressiva de TSH para nódulos benignos é recomendada, mesmo em populações não carentes de iodo",
      "Um nódulo puramente cístico apresenta moderado risco de malignidade e deve ser submetido a biópsia com agulha fina se apresentar mais de 1,0 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Nódulos tireoidianos são muito frequentes: a ultrassonografia os detecta em até 50–60% das mulheres adultas (mais com a idade), e a maioria mede menos de 1 cm. Apenas 5–10% são malignos.",
    "commentary": "PAAF inicial seguida de TSH (B): o primeiro passo é dosar TSH (se suprimido, cintilografia para nódulo quente) e fazer ultrassom; a PAAF depende do tamanho e do padrão ultrassonográfico.\n\nTerapia supressiva de TSH (C): não é recomendada em áreas suficientes em iodo.\n\nCisto puro de moderado risco (D): cistos puros são benignos e não precisam de PAAF diagnóstica.",
    "reference": "ATA Guidelines for Thyroid Nodules (2015); SBEM",
    "tags": [
      "nódulo tireoidiano",
      "ultrassonografia de tireoide",
      "endocrinologia"
    ],
    "tip": "Nódulo de tireoide: TSH e ultrassom primeiro; cisto puro é benigno."
  },
  {
    "id": "hcpa2025-50",
    "module": "Cirurgia",
    "text": "Assinale a assertiva incorreta sobre a doença do refluxo gastroesofágico (DRGE).",
    "options": [
      "O tratamento inicial envolve mudanças no estilo de vida e terapia medicamentosa; a cirurgia está indicada apenas para casos refratários ao tratamento clínico ou para casos que apresentem complicações, como esofagite erosiva ou estenose, ou para situações de grandes hérnias hiatais associadas",
      "A fundoplicatura pode ser realizada por via laparoscópica, proporcionando benefícios como menos dor pós-operatória e tempo de recuperação mais rápido em comparação com a abordagem aberta",
      "A decisão de realizar cirurgia deve estar baseada em uma avaliação cuidadosa do paciente, incluindo gravidade dos sintomas, resposta ao tratamento clínico e presença de complicações, como esofagite de Barrett, que pode exigir vigilância endoscópica adicional",
      "A realização de fundoplicatura não tem impacto na melhora da motilidade esofágica e, portanto, não deve ser considerada para pacientes com motilidade esofágica ineficaz, pois pode aumentar o risco de disfagia pós-operatória"
    ],
    "correctAnswer": 0,
    "explanation": "A questão pede a alternativa incorreta. A afirmação A restringe demais as indicações cirúrgicas: além de refratariedade e complicações, a fundoplicatura também é indicada para pacientes que respondem ao tratamento clínico mas não desejam uso prolongado de medicação, ou com sintomas de regurgitação/volume e intolerância ao IBP. Além disso, esofagite erosiva isolada não é indicação obrigatória de cirurgia.",
    "commentary": "Laparoscopia com menos dor e recuperação mais rápida (B): correta.\n\nDecisão individualizada considerando gravidade, resposta e complicações como Barrett (C): correta.\n\nFundoplicatura não melhora a motilidade e exige cautela com motilidade ineficaz (D): o gabarito a considera correta — com motilidade ineficaz prefere-se fundoplicatura parcial para reduzir a disfagia.",
    "reference": "SAGES Guidelines for Surgical Treatment of GERD (2021); Federação Brasileira de Gastroenterologia",
    "tags": [
      "doença do refluxo gastroesofágico",
      "fundoplicatura",
      "cirurgia do aparelho digestivo"
    ],
    "tip": "Fundoplicatura também é opção para quem responde ao IBP mas não quer usá-lo para sempre."
  },
  {
    "id": "hcpa2025-51",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 58 anos, com cirrose por HCV, sem história de etilismo, realizou tomografia computadorizada de abdômen contrastada. No laudo, constava: Há 2 nódulos hepáticos, um no segmento III medindo 2,7 cm e outro no segmento VI medindo 2,3 cm, ambos com realce heterogêneo pelo contraste na fase arterial e diminuição do realce pelo contraste nas fases portal e tardia. Não há sinais de invasão vascular ou linfonodomegalias intra-abdominais. Fígado de bordos rombos, ascite moderada, esplenomegalia (baço com 18 cm) e extensa circulação colateral porto-sistêmica. Tomografia computadorizada de tórax estava normal. Exames laboratoriais indicaram albumina de 2,2 g/dl (valor de referência - VR: 3,5-5,2 g/dl), INR de 1,6, bilirrubina total de 1,7 mg/dl (VR: 0,2-1,2 mg/dl) e alfafetoproteína de 87 ng/ml (VR: < 10 ng/ml). Considerando o quadro clínico, qual dos tratamentos abaixo está indicado?",
    "options": [
      "Hepatectomia não regrada de ambas as lesões",
      "Hepatectomia regrada do segmento III e do segmento VI do fígado",
      "Transplante hepático",
      "Tratamento sistêmico com sorafenibe apenas"
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico por HCV com dois nódulos (2,7 e 2,3 cm) com realce arterial e washout (CHC por critério radiológico), sem invasão vascular ou metástases, e função hepática comprometida: albumina 2,2, INR 1,6, bilirrubina 1,7 e ascite moderada (Child-Pugh B), com hipertensão portal importante. Dentro dos critérios de Milão (até 3 nódulos ≤ 3 cm), o tratamento indicado é o transplante hepático, que trata o tumor e a cirrose.",
    "commentary": "Hepatectomias (A e B): ressecção em cirrótico Child B com hipertensão portal tem alto risco de insuficiência hepática.\n\nSorafenibe isolado (D): é para doença avançada (invasão vascular, metástases), não para CHC dentro de Milão.",
    "reference": "BCLC Strategy (2022); Mazzaferro V et al. Milan criteria, NEJM 1996",
    "tags": [
      "carcinoma hepatocelular",
      "transplante hepático",
      "critérios de Milão",
      "cirrose"
    ],
    "tip": "CHC dentro de Milão com cirrose descompensada: transplante."
  },
  {
    "id": "hcpa2025-52",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 45 anos, consultou por apresentar uma lesão de pele na região dorsal do antebraço direito, que vinha crescendo lentamente nos últimos meses. Ao exame, a lesão era assimétrica, com mais de 6 mm de diâmetro, bordas irregulares e diversas cores. Qual o principal fator de risco para o desenvolvimento desse tipo de lesão cutânea?",
    "options": [
      "Exposição crônica ao sol sem proteção solar",
      "Histórico familiar de câncer de pele",
      "Consumo excessivo de alimentos ricos em gordura",
      "Tabagismo"
    ],
    "correctAnswer": 0,
    "explanation": "Lesão pigmentada com assimetria, diâmetro > 6 mm, bordas irregulares e múltiplas cores, crescendo: suspeita de melanoma (critérios ABCDE). O principal fator de risco é a exposição à radiação ultravioleta — especialmente exposição intermitente intensa e queimaduras solares —, além de fototipo claro, muitos nevos e história familiar.",
    "commentary": "História familiar (B): é fator de risco relevante, mas a exposição solar é o principal fator ambiental modificável e o mais importante na maioria dos casos.\n\nDieta rica em gordura (C) e tabagismo (D): não são fatores de risco estabelecidos para melanoma.",
    "reference": "INCA – Câncer de pele melanoma; Sociedade Brasileira de Dermatologia",
    "tags": [
      "melanoma",
      "câncer de pele",
      "exposição solar",
      "dermatologia"
    ],
    "tip": "Melanoma: radiação UV (queimaduras solares) é o principal fator de risco."
  },
  {
    "id": "hcpa2025-53",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 50 anos, consultou por desconforto e aumento de volume na região inguinal direita, que piorava durante o exercício. O exame físico confirmou a presença de uma hérnia inguinal redutível. O paciente realizava atividade física regularmente e não apresentava comorbidades relevantes. Considerando o quadro clínico, qual a opção terapêutica mais adequada no momento?",
    "options": [
      "Conduta expectante",
      "Reparo laparoscópico",
      "Reparo aberto pela técnica de Shouldice sem uso de tela",
      "Reparo aberto pela técnica de Lichtenstein com uso de tela"
    ],
    "correctAnswer": 1,
    "explanation": "Hérnia inguinal unilateral, redutível e sintomática em homem de 50 anos, ativo e sem comorbidades: há indicação de correção com tela. Pelo gabarito, a opção é o reparo laparoscópico (TEP/TAPP), que, com cirurgião experiente, oferece menos dor crônica pós-operatória e retorno mais rápido às atividades.",
    "commentary": "Conduta expectante (A): é aceitável em homens com hérnia assintomática ou minimamente sintomática; este paciente tem sintomas que limitam a atividade física.\n\nShouldice sem tela (C): técnica tecidual com maior recidiva fora de centros especializados.\n\nLichtenstein com tela (D): também é técnica recomendada pelas diretrizes internacionais (HerniaSurge), com resultados equivalentes, por isso é aceita aqui.",
    "reference": "HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "reparo laparoscópico",
      "técnica de Lichtenstein",
      "cirurgia geral"
    ],
    "alert": "Questão discutível: as diretrizes consideram tanto a via laparoscópica quanto a de Lichtenstein adequadas para hérnia primária unilateral. Mantido o gabarito oficial (B); D também é aceita aqui.",
    "alsoAccepted": [
      3
    ],
    "tip": "Hérnia inguinal sintomática: tela (laparoscopia ou Lichtenstein)."
  },
  {
    "id": "hcpa2025-54",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre metástases ósseas.",
    "options": [
      "Metástases ósseas do câncer de próstata geralmente apresentam um padrão osteoblástico",
      "Fraturas são raras em ossos longos acometidos por lesões metastáticas",
      "As metástases ósseas localizam-se preferencialmente no esqueleto apendicular",
      "A radioterapia é inapropriada para o manejo da dor em pacientes com metástases ósseas"
    ],
    "correctAnswer": 0,
    "explanation": "As metástases ósseas do câncer de próstata são tipicamente osteoblásticas (escleróticas). Outros tumores com metástases blásticas incluem mama (mistas) e carcinoide; rim, tireoide, pulmão e mieloma costumam ser líticos.",
    "commentary": "Fraturas raras em ossos longos (B): fraturas patológicas são complicações frequentes, sobretudo no fêmur.\n\nPredomínio no esqueleto apendicular (C): predominam no esqueleto axial (coluna, pelve, costelas), pela medula vermelha.\n\nRadioterapia inapropriada para a dor (D): é o tratamento de escolha para dor óssea metastática localizada.",
    "reference": "NCCN Guidelines – Adult Cancer Pain / Bone metastases; Sociedade Brasileira de Oncologia Clínica",
    "tags": [
      "metástases ósseas",
      "câncer de próstata",
      "oncologia",
      "ortopedia"
    ],
    "tip": "Próstata: metástase óssea blástica, axial."
  },
  {
    "id": "hcpa2025-55",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre rupturas agudas do tendão calcâneo (tendão de Aquiles).",
    "options": [
      "É mais comum em pacientes femininas com mais de 60 anos",
      "Ocorre com maior frequência na junção miotendínea",
      "Geralmente requer tratamento cirúrgico",
      "Complicações de pele são raras após a cirurgia aberta"
    ],
    "correctAnswer": 2,
    "explanation": "Pelo gabarito, a ruptura aguda do tendão calcâneo geralmente requer tratamento cirúrgico. Ensaios clínicos recentes mostram que o tratamento funcional (órtese com carga precoce) tem resultados semelhantes em recidiva e função, com menos complicações de ferida; a cirurgia é preferida em atletas e pacientes jovens ativos, com menor taxa de rerruptura.",
    "commentary": "Mais comum em mulheres acima de 60 anos (A): predomina em homens de 30 a 50 anos que praticam esporte ocasionalmente (“atleta de fim de semana”).\n\nMais frequente na junção miotendínea (B): a maioria ocorre 2–6 cm acima da inserção no calcâneo (zona hipovascular).\n\nComplicações de pele raras após cirurgia aberta (D): problemas de cicatrização e infecção são as principais complicações.",
    "reference": "AAOS Clinical Practice Guideline on Achilles Tendon Rupture; Ochen Y et al. BMJ 2019 (metanálise)",
    "tags": [
      "ruptura do tendão calcâneo",
      "ortopedia",
      "medicina esportiva"
    ],
    "alert": "Questão discutível: o tratamento conservador funcional tem resultados semelhantes à cirurgia em muitos estudos. Mantido o gabarito oficial (C).",
    "tip": "Ruptura do Aquiles: 2–6 cm da inserção; cirurgia ou tratamento funcional."
  },
  {
    "id": "hcpa2025-56",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 65 anos, com história de doença pulmonar obstrutiva crônica, tabagismo e diabetes melito (amputação do antepé direito há 2 anos), foi internado com quadro de perfuração gástrica por úlcera de estresse, sendo operado de urgência. Evoluiu com abscesso peritoneal, necessitando de laparotomia para lavagem da cavidade. Continuava apresentando picos febris e leucograma com desvio à esquerda. Nova tomografia computadorizada evidenciou presença de coleção peritoneal subdiafragmática direita e derrame pleural volumoso à direita com áreas loculadas. Que conjunto de condutas, dentre as abaixo, seria adequado neste momento?",
    "options": [
      "Expectante, com antibioticoterapia de amplo espectro e controle do diabetes melito",
      "Pleuroscopia e nova abordagem da coleção abdominal",
      "Drenagem torácica e antibioticoterapia de amplo espectro",
      "Punção percutânea da coleção abdominal e toracocentese"
    ],
    "correctAnswer": 1,
    "explanation": "Paciente em pós-operatório complicado com febre persistente, coleção subdiafragmática e derrame pleural volumoso e loculado (empiema): o controle do foco exige abordar as duas coleções. O empiema loculado é tratado com pleuroscopia (videotoracoscopia) para desbridamento e drenagem, e a coleção abdominal precisa de nova abordagem (drenagem percutânea ou cirúrgica).",
    "commentary": "Conduta expectante com antibiótico (A): coleções infectadas exigem drenagem.\n\nDrenagem torácica simples e antibiótico (C): empiema loculado costuma não drenar adequadamente por dreno simples, e a coleção abdominal ficaria sem tratamento.\n\nPunção percutânea e toracocentese (D): a toracocentese não resolve empiema loculado.",
    "reference": "AATS Expert Consensus Guidelines for the Management of Empyema (2017)",
    "tags": [
      "empiema pleural",
      "abscesso subfrênico",
      "videotoracoscopia",
      "cirurgia torácica"
    ],
    "tip": "Empiema loculado: videotoracoscopia; e tratar também a coleção abdominal."
  },
  {
    "id": "hcpa2025-57",
    "module": "Cirurgia",
    "text": "Paciente feminina, de 34 anos, teve diagnóstico confirmado de fissura anal de localização anterior, com evolução de 8 semanas.\n\nCom base no quadro, assinale a assertiva correta.",
    "options": [
      "O caso corresponde a uma fissura anal aguda",
      "O sítio anterior caracteriza a fissura como atípica uma vez que 90% das fissuras anais estão localizadas na comissura posterior",
      "Considerando o diagnóstico de fissura anal, é provável que a paciente apresente constipação",
      "O tratamento tópico com bloqueadores do canal de cálcio é considerado de primeira linha para a fissura anal crônica"
    ],
    "correctAnswer": 3,
    "explanation": "Fissura anal com 8 semanas é crônica. O tratamento de primeira linha da fissura crônica é a esfincterotomia química com bloqueadores de canal de cálcio tópicos (diltiazem ou nifedipina) ou nitratos, associada a fibras, banhos de assento e emolientes. A cirurgia (esfincterotomia lateral interna) é reservada à falha.",
    "commentary": "Fissura aguda (A): com mais de 6–8 semanas, é considerada crônica.\n\nSítio anterior como atípico (B): cerca de 90% são posteriores, mas as anteriores são comuns em mulheres (10–25%); atípicas são as laterais.\n\nProvável constipação (C): constipação é fator comum, mas não obrigatório; o gabarito não considera essa afirmação a correta.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Anal Fissures (2023)",
    "tags": [
      "fissura anal",
      "bloqueadores de canal de cálcio",
      "coloproctologia"
    ],
    "tip": "Fissura crônica: BCC tópico primeiro; cirurgia se falhar."
  },
  {
    "id": "hcpa2025-58",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 68 anos, procurou a UPA queixando-se de dificuldade extrema para urinar (apenas pequeno volume de urina era liberado com muito esforço), quadro iniciado no dia anterior. Informou ser tabagista com índice tabágico de 80 maços-ano. Desde os 50 anos, vinha observando enfraquecimento do jato urinário e aumento do número de vezes que acordava para urinar com a sensação de que não esvaziava a bexiga ao fim da micção. Negou febre ou ardência durante a micção. Trouxe resultado de exame de PSA solicitado na UBS. Ao exame físico, a palpação abdominal revelou bexiga distendida e sensível, e o toque retal, próstata aumentada de tamanho e de consistência firme, sem nódulos. A incidência do quadro clínico do paciente está relacionada com os seguintes fatores:",
    "options": [
      "idade, intensidade de sintomas prévios e nível do PSA",
      "idade, índice tabágico e nível do PSA",
      "índice tabágico, tamanho da próstata e IMC",
      "tamanho da próstata, IMC e intensidade dos sintomas prévios"
    ],
    "correctAnswer": 0,
    "explanation": "Retenção urinária aguda em homem com hiperplasia prostática benigna sintomática. Os principais fatores de risco para retenção urinária aguda na HPB são idade avançada, intensidade dos sintomas do trato urinário inferior (IPSS alto), volume prostático aumentado e PSA elevado (marcador de volume), além de redução do fluxo urinário e resíduo pós-miccional.",
    "commentary": "Idade, índice tabágico e PSA (B), índice tabágico, tamanho da próstata e IMC (C) e tamanho da próstata, IMC e sintomas (D): tabagismo e IMC não são os fatores de risco estabelecidos para retenção urinária aguda na HPB.",
    "reference": "EAU Guidelines on Non-neurogenic Male LUTS (2024); Jacobsen SJ et al. Olmsted County Study",
    "tags": [
      "hiperplasia prostática benigna",
      "retenção urinária aguda",
      "urologia"
    ],
    "tip": "Risco de retenção na HPB: idade, sintomas intensos, próstata grande e PSA alto."
  },
  {
    "id": "hcpa2025-59",
    "module": "Cirurgia",
    "text": "Assinale a assertiva correta sobre o câncer colorretal em pacientes com menos de 50 anos.",
    "options": [
      "Testes genéticos estão indicados uma vez que 50% dos pacientes terão alguma forma de câncer colorretal hereditário diagnosticada",
      "A maioria dos pacientes acometidos tem parentes de primeiro grau com câncer colorretal",
      "A incidência vem aumentando nos últimos 20 anos, principalmente às custas dos tumores de cólon esquerdo e reto",
      "Apesar de os tumores apresentarem crescimento mais rápido, os pacientes costumam ter o diagnóstico ainda em estágios mais precoces"
    ],
    "correctAnswer": 2,
    "explanation": "O câncer colorretal de início precoce (antes dos 50 anos) vem aumentando nas últimas décadas, principalmente à custa de tumores do cólon esquerdo (distal) e do reto. Isso motivou a redução da idade de início do rastreamento para 45 anos em algumas diretrizes.",
    "commentary": "50% com síndrome hereditária (A): cerca de 15–20% têm síndrome hereditária identificável (embora o teste genético seja recomendado a todos os pacientes jovens).\n\nMaioria com parentes de primeiro grau acometidos (B): a maioria não tem história familiar.\n\nDiagnóstico em estágios mais precoces (D): ao contrário, costumam ser diagnosticados em estágios mais avançados, pelo atraso na investigação.",
    "reference": "Siegel RL et al. Colorectal cancer statistics, CA Cancer J Clin 2023; USPSTF (2021)",
    "tags": [
      "câncer colorretal",
      "câncer colorretal de início precoce",
      "coloproctologia"
    ],
    "tip": "CCR em jovens: aumentando, sobretudo cólon esquerdo e reto, e diagnosticado tarde."
  },
  {
    "id": "hcpa2025-60",
    "module": "Cirurgia",
    "text": "Menino de 12 anos apresentou quadro de dor testicular aguda à esquerda de grande intensidade com 5 horas de evolução, não associado a trauma, tendo sido encaminhado à Emergência. Após avaliação inicial, o cirurgião plantonista solicitou ultrassonografia com Doppler, porém esse exame em caráter de urgência não está disponível no hospital.\n\nConsiderando o quadro clínico, qual a conduta mais adequada?",
    "options": [
      "Transferência imediata do paciente para serviço médico com disponibilidade para realização do exame",
      "Analgesia, antibioticoterapia e suspensório escrotal",
      "Cintilografia escrotal e orquiectomia unilateral",
      "Exploração cirúrgica e orquidopexia bilateral"
    ],
    "correctAnswer": 3,
    "explanation": "Adolescente com dor testicular aguda e intensa há 5 horas, sem trauma: torção testicular até prova em contrário. Sem Doppler disponível de imediato, não se deve atrasar a cirurgia — a viabilidade cai muito após 6 horas. A conduta é exploração cirúrgica imediata, com distorção e orquidopexia bilateral (ou orquiectomia se necrose).",
    "commentary": "Transferir para fazer o exame (A): o atraso compromete a viabilidade do testículo.\n\nAnalgesia, antibiótico e suspensório (B): tratamento de epididimite, que não deve ser assumido sem excluir torção.\n\nCintilografia e orquiectomia unilateral (C): a cintilografia atrasa a cirurgia, e a orquiectomia só se o testículo estiver inviável, com fixação contralateral.",
    "reference": "European Association of Urology – Paediatric Urology Guidelines (2024)",
    "tags": [
      "torção testicular",
      "escroto agudo",
      "urologia pediátrica",
      "emergência cirúrgica"
    ],
    "tip": "Suspeita de torção sem Doppler: explorar já."
  },
  {
    "id": "hcpa2025-61",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 32 anos, procurou a UBS queixando-se de sensação de corpo estranho no olho, diplopia, lacrimejamento e borramento visual. Negou comorbidades. Considerando-se a hipótese diagnóstica mais provável, assinale a alternativa que contempla os achados de história e exame físico esperados.",
    "options": [
      "Ptose em repouso, fraqueza de extremidades e taquicardia",
      "Tabagismo, taquicardia e bócio",
      "Dentes sépticos, quadro clínico prolongado e bom estado geral",
      "Proptose bilateral, cefaleia e vômitos"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher jovem com sensação de corpo estranho, lacrimejamento, borramento visual e diplopia: quadro sugestivo de orbitopatia de Graves (oftalmopatia tireoidiana). Espera-se encontrar sinais de hipertireoidismo (taquicardia, bócio difuso) e o tabagismo, que é o principal fator de risco modificável para a orbitopatia, além de retração palpebral e proptose.",
    "commentary": "Ptose em repouso, fraqueza de extremidades e taquicardia (A): ptose e fraqueza sugerem miastenia gravis, que causa diplopia mas não sensação de corpo estranho e lacrimejamento.\n\nDentes sépticos, quadro prolongado e bom estado geral (C): não correspondem a uma hipótese coerente com o quadro ocular.\n\nProptose bilateral, cefaleia e vômitos (D): sugerem hipertensão intracraniana ou processo expansivo, não oftalmopatia de Graves.",
    "reference": "EUGOGO Clinical Practice Guidelines for Graves' Orbitopathy (2021)",
    "tags": [
      "orbitopatia de Graves",
      "doença de Graves",
      "hipertireoidismo",
      "oftalmologia"
    ],
    "tip": "Olho com corpo estranho, lacrimejamento e diplopia + taquicardia e bócio = Graves."
  },
  {
    "id": "hcpa2025-62",
    "module": "Clínica Médica",
    "text": "Paciente de 67 anos, com hipertensão arterial, diabetes melito e história de tabagismo, foi trazido à Emergência de um hospital terciário por dor torácica opressiva iniciada há aproximadamente 2 horas, que se irradiava para o braço esquerdo, associada a sudorese e náuseas. Informou que a dor surgira enquanto realizava uma caminhada leve. À admissão, apresentava pressão arterial de 140/90 mmHg, frequência cardíaca de 137 bpm e saturação de oxigênio de 96%. O exame físico não revelou anormalidades significativas. Exames laboratoriais iniciais indicaram níveis ligeiramente elevados de troponina T ultrassensível. O eletrocardiograma em repouso, feito no momento da chegada, está reproduzido abaixo.\n\nConsiderando o caso clínico, assinale a alternativa que contempla o diagnóstico e o manejo adequado.",
    "options": [
      "Infarto agudo do miocárdico com supradesnivelamento do segmento ST de parede anterior – O paciente deve ser submetido ou à trombólise com alteplase ou à estratégia de estratificação invasiva imediata (< 2 horas)",
      "Infarto agudo do miocárdico sem supradesnivelamento do segmento ST de alto risco – O paciente necessita ser submetido à estratégia de estratificação invasiva precoce (< 24 horas)",
      "Infarto agudo do miocárdico sem supradesnivelamento do segmento ST, de muito alto risco – O paciente necessita ser submetido à estratégia de estratificação invasiva imediata (< 2 horas)",
      "Angina instável – O paciente deve ser submetido a teste de estresse não invasivo"
    ],
    "correctAnswer": 2,
    "explanation": "Dor torácica típica há 2 horas em paciente de alto risco, com troponina elevada e ECG sem supradesnivelamento persistente de ST (taquicardia com infradesnivelamentos difusos): infarto sem supradesnivelamento de ST. Pelo gabarito, há critérios de muito alto risco — taquicardia importante (137 bpm), dor persistente —, indicando estratificação invasiva imediata (cateterismo em menos de 2 horas). Critérios de muito alto risco incluem dor refratária, instabilidade hemodinâmica ou elétrica, insuficiência cardíaca aguda e complicações mecânicas.",
    "commentary": "IAM com supra de ST anterior (A): o ECG não mostra supradesnivelamento compatível.\n\nAlto risco com estratégia em < 24 horas (B): seria a conduta para alto risco (troponina positiva estável), mas o gabarito considera o quadro de muito alto risco.\n\nAngina instável com teste não invasivo (D): a troponina elevada define infarto.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz de Síndromes Coronarianas Agudas sem Supradesnível do ST (2021); ESC 2023 ACS Guidelines",
    "tags": [
      "infarto sem supradesnivelamento do ST",
      "síndrome coronariana aguda",
      "estratificação invasiva",
      "cardiologia"
    ],
    "image": "/images/hcpa2025-62.webp",
    "alert": "A classificação em muito alto risco depende da interpretação do ECG e da persistência dos sintomas; sem instabilidade hemodinâmica franca, muitos classificariam como alto risco (B).",
    "tip": "IAMSSST: muito alto risco → cateterismo < 2 h; alto risco → < 24 h."
  },
  {
    "id": "hcpa2025-63",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 70 anos, com hipertensão de longa data, apresentou quadro súbito de dor torácica retroesternal, de forte intensidade, tendo sido trazido à Emergência. À admissão, apresentava saturação de oxigênio de 96%. Foram realizados eletrocardiografia de repouso e raio X de tórax (imagens abaixo). O resultado da dosagem de troponina estava normal, e a dosagem de D-dímeros indicou 1.900 ng/ml (valor de referência: 500 ng/ml). Qual o provável diagnóstico e qual a investigação complementar?",
    "options": [
      "Síndrome aórtica aguda – angiotomografia de tórax e abdômen",
      "Síndrome coronariana aguda – coronariografia",
      "Tromboembolismo pulmonar agudo – angiografia pulmonar",
      "Aneurisma roto da aorta torácica – angiotomografia de tórax"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso hipertenso com dor torácica súbita e intensa, troponina normal e D-dímero muito elevado (> 1.500 ng/mL), com radiografia mostrando alargamento do mediastino/aorta: síndrome aórtica aguda (dissecção). O exame de escolha é a angiotomografia de tórax e abdome, que define a extensão (Stanford A ou B) e o envolvimento de ramos.",
    "commentary": "Síndrome coronariana com coronariografia (B): a troponina normal e o ECG não sugerem; e o cateterismo seria perigoso numa dissecção.\n\nTEP com angiografia pulmonar (C): a angiografia invasiva não é exame inicial, e o quadro (hipertensão, dor súbita intensa, mediastino) sugere aorta.\n\nAneurisma roto com angio-TC só de tórax (D): a dissecção pode se estender ao abdome; avalia-se toda a aorta.",
    "reference": "ESC 2024 Guidelines on Peripheral Arterial and Aortic Diseases; Sociedade Brasileira de Cirurgia Cardiovascular",
    "tags": [
      "dissecção de aorta",
      "síndrome aórtica aguda",
      "D-dímero",
      "cardiologia"
    ],
    "image": "/images/hcpa2025-63.webp",
    "tip": "Dor súbita intensa + hipertensão + D-dímero alto + troponina normal: dissecção → angio-TC."
  },
  {
    "id": "hcpa2025-64",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 82 anos, com hipertensão arterial e diabetes melito, veio à consulta queixando-se de cansaço e palpitações, quadro iniciado há 1 semana. Tinha história de infarto do miocárdio há 5 anos. Negou desmaios, mas referiu quedas eventuais. Exames recentes não mostraram isquemia ou insuficiência cardíaca. Ao exame físico, apresentava pulsos irregulares e cheios, pressão arterial de 130/80 mmHg, pulmões limpos e ausência de sopros cardíacos. Eletrocardiograma evidenciou fibrilação atrial, frequência cardíaca de 102 bpm, QRS estreito, QTc de 0,43 ms, zona inativa anterior e ausência de sinais de isquemia aguda. Assinale a assertiva correta sobre o tratamento mais adequado.",
    "options": [
      "Adenosina intravenosa em bolus é o medicamento de escolha para reversão farmacológica a ritmo sinusal",
      "Na cardioversão farmacológica, ao contrário do que ocorre na cardioversão elétrica, não é necessária anticoagulação prévia",
      "A cardioversão elétrica não sincronizada deve ser feita com brevidade devido ao intervalo QTc prolongado",
      "Mesmo com idade avançada, hipertensão arterial, diabetes melito e histórico de quedas eventuais, a paciente deve ser anticoagulada a longo prazo"
    ],
    "correctAnswer": 3,
    "explanation": "Idosa de 82 anos com fibrilação atrial, hipertensão, diabetes e infarto prévio: CHA₂DS₂-VASc de pelo menos 6 (idade ≥ 75 = 2, sexo feminino, hipertensão, diabetes, doença vascular). Tem indicação clara de anticoagulação a longo prazo. Quedas eventuais e idade avançada não contraindicam anticoagulação: o benefício na prevenção de AVC supera o risco de sangramento.",
    "commentary": "Adenosina para reverter FA (A): a adenosina não reverte FA (só taquicardias que dependem do nó AV).\n\nCardioversão farmacológica sem anticoagulação (B): o risco de embolia é o mesmo na cardioversão química e elétrica; FA > 48 h exige anticoagulação prévia ou ecotransesofágico.\n\nCardioversão não sincronizada pelo QTc (C): a cardioversão elétrica na FA é sincronizada; e o QTc de 0,43 s é normal.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Fibrilação Atrial; ESC 2024 Guidelines for AF",
    "tags": [
      "fibrilação atrial",
      "anticoagulação",
      "idoso",
      "CHA2DS2-VASc",
      "cardiologia"
    ],
    "tip": "Quedas não contraindicam anticoagulação na FA."
  },
  {
    "id": "hcpa2025-65",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 24 anos, veio à consulta dermatológica queixando-se de leve ardência na região lateral esquerda do lábio superior. Referiu que, logo após o início dos sintomas, constatou a presença de erupção com vesículas agrupadas formando um “cacho”. Já havia apresentado episódio semelhante no mesmo local há 1 ano. Assinale a assertiva correta sobre o caso.",
    "options": [
      "O eritema multiforme pode ser uma complicação desta infecção",
      "O tratamento mais efetivo é feito com aciclovir tópico por 7 dias",
      "É raro o paciente apresentar recorrências",
      "Não há exames diagnósticos complementares que possam confirmar o diagnóstico, que é sempre clínico"
    ],
    "correctAnswer": 0,
    "explanation": "Vesículas agrupadas em “cacho” sobre base eritematosa no lábio, precedidas de ardência, com recorrência no mesmo local: herpes labial recorrente (HSV-1). O herpes simples é a causa mais comum de eritema multiforme (sobretudo recorrente), que surge cerca de 1–3 semanas após o surto.",
    "commentary": "Aciclovir tópico por 7 dias como mais efetivo (B): o tratamento tópico tem eficácia modesta; o oral (valaciclovir, aciclovir) iniciado no pródromo é mais eficaz, por curto período.\n\nRecorrências raras (C): o vírus fica latente no gânglio trigeminal e as recorrências são frequentes.\n\nSem exames complementares (D): é possível confirmar por PCR, cultura ou citologia de Tzanck, embora o diagnóstico geralmente seja clínico.",
    "reference": "Sociedade Brasileira de Dermatologia; Azulay – Dermatologia, 8ª ed.",
    "tags": [
      "herpes simples",
      "herpes labial",
      "eritema multiforme",
      "dermatologia"
    ],
    "tip": "Eritema multiforme recorrente: pensar em herpes simples."
  },
  {
    "id": "hcpa2025-66",
    "module": "Clínica Médica",
    "text": "Assinale a assertiva correta sobre o tratamento da obesidade tendo como base resultados de ensaios clínicos randomizados.",
    "options": [
      "A redução de peso com mudança de estilo de vida é, via de regra, sustentada a longo prazo",
      "O tratamento medicamentoso é seguro por um prazo de 6 meses até 1 ano",
      "Os agonistas combinados de GLP-1 e GIP produzem redução de cerca de 20% de peso",
      "Os agonistas do GLP-1 reduzem o peso de forma sustentada, mas sem evidência de redução de mortalidade até o momento"
    ],
    "correctAnswer": 2,
    "explanation": "Os agonistas duplos de GIP e GLP-1 (tirzepatida) produziram, nos ensaios SURMOUNT, perda de peso média de cerca de 20% (até 20–22% na dose máxima) em pessoas com obesidade sem diabetes, superior à semaglutida.",
    "commentary": "Perda sustentada com mudança de estilo de vida isolada (A): a maioria recupera o peso a longo prazo sem tratamento adicional.\n\nMedicamentos seguros só por 6 meses a 1 ano (B): a obesidade é doença crônica, e os fármacos aprovados são usados a longo prazo.\n\nGLP-1 sem redução de mortalidade (D): o estudo SELECT mostrou que a semaglutida reduziu eventos cardiovasculares maiores em pessoas com obesidade e doença cardiovascular.",
    "reference": "Jastreboff AM et al. SURMOUNT-1, NEJM 2022; Lincoff AM et al. SELECT, NEJM 2023; ABESO",
    "tags": [
      "obesidade",
      "tirzepatida",
      "agonistas do GLP-1",
      "endocrinologia"
    ],
    "tip": "Tirzepatida: ~20% de perda de peso; semaglutida: ~15%."
  },
  {
    "id": "hcpa2025-67",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 21 anos, procurou, às 20 horas, o médico voluntário do abrigo em que se encontrava após a enchente em Porto Alegre, queixando-se de cansaço, mal-estar, náuseas e 2 episódios de vômito. Informou que teve diagnóstico de diabetes melito confirmado há 1 ano, que trouxera ao abrigo suas canetas de insulina (com prescrição de insulina glargina 24 UI antes do café e lispro conforme contagem de carboidratos), mas que esqueceu de aplicar algumas doses. Referiu ter peso de 62 kg e altura de 178 cm. Ao exame, encontrava-se em regular estado geral, corado, desidratado, com pressão arterial de 102/68 mmHg, frequência cardíaca de 110 bpm, frequência respiratória de 28 mpm e glicemia capilar de 490 mg/dl. Demais aspectos do exame físico não revelaram alterações. Qual a conduta mais adequada no momento?",
    "options": [
      "Aplicar 10 UI de insulina regular subcutânea e orientar que o paciente aplique suas doses de insulina habituais no dia seguinte",
      "Aplicar 10 UI de insulina lispro subcutânea e reavaliar o paciente em 4 horas com glicemia capilar",
      "Aplicar 6 UI de insulina lispro intravenosa e reavaliar o paciente em 1 hora com glicemia capilar",
      "Solicitar atendimento do SAMU para encaminhamento do paciente para Serviço de Emergência"
    ],
    "correctAnswer": 3,
    "explanation": "Diabético tipo 1 que omitiu doses de insulina, com náuseas, vômitos, desidratação, taquicardia, taquipneia (provável Kussmaul) e glicemia de 490 mg/dL: suspeita de cetoacidose diabética. Em um abrigo, sem estrutura para gasometria, cetonemia, hidratação venosa e insulina IV com monitorização, a conduta adequada é acionar o SAMU para transferir o paciente a um serviço de emergência.",
    "commentary": "Insulina regular SC e doses habituais no dia seguinte (A): a CAD exige hidratação venosa, potássio e insulina com monitorização.\n\nLispro SC e reavaliar em 4 horas (B): insuficiente e perigoso sem hidratação e controle de potássio.\n\nLispro IV no abrigo (C): sem estrutura de monitorização, a insulina IV sem hidratação e controle de potássio é arriscada.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (cetoacidose diabética)",
    "tags": [
      "cetoacidose diabética",
      "diabetes mellitus tipo 1",
      "emergência",
      "desastres"
    ],
    "tip": "Suspeita de CAD fora do hospital: transferir para emergência."
  },
  {
    "id": "hcpa2025-68",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nPaciente masculino, de 65 anos, procurou atendimento médico por dor epigástrica em queimação, com intensidade moderada, irradiada para o dorso, com alívio após as refeições. Apresentou episódios de despertar noturno pela dor. Referiu uso frequente de ibuprofeno e nimesulida por osteoartrose de quadril. Negou a ocorrência de pirose, disfagia, emagrecimento, hematêmese ou melena. Exames recentes não indicaram anemia. O quadro clínico é sugestivo de.........., estando indicada avaliação diagnóstica com........... Confirmada a presença de.........., deve-se...........",
    "options": [
      "doença do refluxo gastroesofágico – endoscopia digestiva alta com pesquisa de Helicobacter pylori – esofagite erosiva grau A de Los Angeles – administrar antiácido por via oral conforme demanda",
      "doença do refluxo gastroesofágico – endoscopia digestiva alta com pesquisa de Helicobacter pylori – esofagite erosiva grau A de Los Angeles – evitar o uso de anti-inflamatório não esteroidal (AINE) e prescrever inibidor de bombas de prótons por 8 semanas",
      "úlcera péptica – raio X contrastado de esôfago, estômago e duodeno – úlcera gástrica por AINE – evitar o uso de AINE e tratar o Helicobacter pylori",
      "úlcera péptica – endoscopia digestiva alta com pesquisa de Helicobacter pylori – úlcera gástrica por AINE (Helicobacter pylori negativo) – evitar o uso de AINE e prescrever inibidor de bombas de prótons por 8 semanas"
    ],
    "correctAnswer": 3,
    "explanation": "Dor epigástrica em queimação, noturna, com alívio após refeições, em usuário frequente de AINE: úlcera péptica. A avaliação é por endoscopia digestiva alta com pesquisa de H. pylori. Se confirmada úlcera associada a AINE com H. pylori negativo, a conduta é suspender o AINE e tratar com IBP por 8 semanas.",
    "commentary": "DRGE com antiácido sob demanda (A) e DRGE com IBP por 8 semanas (B): o quadro (dor epigástrica que alivia com a comida, despertar noturno, AINE) sugere úlcera, não refluxo.\n\nRadiografia contrastada e tratar H. pylori (C): a endoscopia é o exame de escolha (permite biópsia), e só se trata H. pylori se estiver presente.",
    "reference": "ACG Clinical Guideline: Treatment of H. pylori Infection (2024); Federação Brasileira de Gastroenterologia",
    "tags": [
      "úlcera péptica",
      "anti-inflamatórios não esteroides",
      "endoscopia digestiva alta",
      "gastroenterologia"
    ],
    "tip": "Úlcera por AINE: EDA, suspender AINE e IBP 8 semanas; tratar H. pylori só se positivo."
  },
  {
    "id": "hcpa2025-69",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 52 anos, com hipertensão arterial sistêmica (em tratamento com hidroclorotiazida e enalapril) e dislipidemia (em tratamento com atorvastatina), trouxe à consulta resultados de exames laboratoriais de rotina, que identificaram elevação de aminotransferases (AST de 59 U/l e ALT de 74 U/l), glicemia de jejum de 184 de mg/dl, HbA1c de 6,1%, ferritina de 483 ng/ml, além de ultrassonografia abdominal, que revelou esteatose hepática moderada. Não tinha história de consumo de álcool, e as sorologias para hepatites B e C foram negativas. Estava assintomática. Ao exame físico, apresentava pressão arterial de 142/94 mmHg, circunferência abdominal de 102 cm, peso de 89 kg, altura de 165 cm (IMC de 32 kg/m2), abdômen globoso e hepatimetria de 14 cm na linha hemiclavicular.\n\nCom base no quadro, assinale a assertiva correta sobre MASLD (Metabolic disfunction-associated steatotic liver disease).",
    "options": [
      "Hiperferritinemia leve é incomum, devendo-se considerar hemocromatose hereditária o diagnóstico mais provável",
      "A alteração de aminotransferases característica é AST > ALT, usualmente com níveis > 250 U/l",
      "A prevalência é maior em determinadas populações, podendo ser de aproximadamente 65% em indivíduos com diabetes melito tipo 2 e 90% em pacientes com obesidade grau 3",
      "A ultrassonografia abdominal apresenta elevada acurácia para o diagnóstico, com valor preditivo positivo de 90% e valor preditivo negativo de 98%"
    ],
    "correctAnswer": 2,
    "explanation": "A doença hepática esteatótica associada à disfunção metabólica (MASLD) é muito prevalente em grupos de risco: cerca de 65–70% das pessoas com diabetes tipo 2 e até 90% dos obesos grau 3 (candidatos à cirurgia bariátrica).",
    "commentary": "Hiperferritinemia leve incomum (A): a ferritina elevada é comum na MASLD (marcador inflamatório e de resistência insulínica), sem indicar hemocromatose.\n\nAST > ALT com valores > 250 (B): na MASLD costuma haver ALT > AST e elevações leves (< 5× o normal); AST > ALT sugere álcool ou fibrose avançada.\n\nUltrassom com VPP 90% e VPN 98% (D): o ultrassom tem baixa sensibilidade para esteatose leve (< 20%) e não avalia fibrose.",
    "reference": "EASL–EASD–EASO Clinical Practice Guidelines on MASLD (2024); AASLD Practice Guidance (2023)",
    "tags": [
      "MASLD",
      "esteatose hepática",
      "síndrome metabólica",
      "hepatologia"
    ],
    "tip": "MASLD: muito prevalente no DM2 e na obesidade; ALT > AST e ferritina alta são comuns."
  },
  {
    "id": "hcpa2025-70",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 24 anos, sem histórico de doenças crônicas e previamente assintomática, procurou a UBS por sentir-se fraca e cansada. Relatou quadro de congestão de vias aéreas superiores, tosse seca, dor no corpo e febre baixa não mensurada, ocorrido há 2 semanas. Na ocasião, fizera uso de 2 doses de dipirona (500 mg por via oral) e não procurara atendimento. Houve melhora dos sintomas das vias aéreas e cessação da sensação de febre. Ao exame clínico, os sinais vitais eram normais. Foram evidenciadas mucosas levemente descoradas; a ausculta pulmonar revelou sibilos expiratórios discretos, sem outros achados positivos. O hemograma indicou hemoglobina de 10 g/dl, hipocromia e microcitose, leucócitos totais de 3.400/mm3 (1.300 neutrófilos/mm3 e 1.100 linfócitos/mm3) e 98.000 plaquetas/mm3. Exames básicos de bioquímica tiveram resultados normais, e testes rápidos para hepatites e vírus da imunodeficiência humana, disponíveis na UBS, foram negativos. Em relação ao quadro clínico, assinale a assertiva correta.",
    "options": [
      "Trata-se de um quadro de pancitopenia atribuível a episódio prévio de infecção viral; por não apresentar sinais de alarme, a paciente deve ser reavaliada em 1-2 semanas",
      "Trata-se provavelmente de agranulocitose associada a uso de dipirona; pela gravidade do quadro, a paciente deve ser imediatamente encaminhada para centro especializado",
      "Os achados do hemograma são atribuíveis a anemia ferropriva, estando indicada reposição de ferro por via oral, sem necessidade de acompanhamento posterior",
      "Nesta faixa etária, a causa mais comum dos achados descritos são as deficiências nutricionais, como as de folato ou vitamina B12, ou consumo abusivo de álcool"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem com bicitopenia/pancitopenia leve (Hb 10, leucócitos 3.400 com neutrófilos 1.300, plaquetas 98.000) após quadro viral recente, sem sinais de gravidade (sem febre, sem sangramento, sem infecção, neutrófilos > 1.000). Infecções virais causam citopenias transitórias por supressão medular; a conduta é reavaliar com novo hemograma em 1–2 semanas e investigar se persistir.",
    "commentary": "Agranulocitose por dipirona (B): a agranulocitose é neutropenia grave isolada (< 500), geralmente com febre e infecção, não pancitopenia leve.\n\nAnemia ferropriva sem acompanhamento (C): não explica leucopenia e plaquetopenia, e a evolução precisa ser acompanhada.\n\nDeficiência de folato/B12 ou álcool como causa mais comum (D): causariam macrocitose, não microcitose.",
    "reference": "Harrison – Medicina Interna, 21ª ed.",
    "tags": [
      "pancitopenia",
      "citopenias",
      "infecção viral",
      "hematologia"
    ],
    "tip": "Citopenias leves após virose, sem alarme: repetir hemograma em 1–2 semanas."
  },
  {
    "id": "hcpa2025-71",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 73 anos, veio à consulta de rotina queixando-se de dor lombar, iniciada há aproximadamente 2 semanas após uma queda da própria altura em casa. Relatou fazer atividade física regularmente e tentar manter hábitos de vida saudáveis, tendo como base uma dieta vegana. Não havia história de fraturas prévias. A menopausa ocorrera aos 43 anos, sem uso de terapia de reposição hormonal. Submetia-se a tratamento para câncer de mama com inibidor de aromatase há 2 anos e negou uso de outros medicamentos. Trouxe raio X de coluna recente, evidenciando fratura moderada de T12 e L1. Diante do quadro, qual a conduta inicial mais adequada?",
    "options": [
      "Solicitar densitometria óssea para confirmar o diagnóstico de osteoporose",
      "Solicitar exames laboratoriais para afastar causas secundárias de osteoporose e iniciar tratamento farmacológico com antirreabsortivo",
      "Interromper o inibidor de aromatase e iniciar suplementação de cálcio, vitamina D e proteína",
      "Orientar analgesia, imobilização e suplementação de cálcio e vitamina D e reavaliar a paciente em 3 meses com novo exame de imagem"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 73 anos, menopausa precoce, uso de inibidor de aromatase e fratura vertebral por fragilidade (queda da própria altura): o diagnóstico de osteoporose é clínico, independentemente da densitometria. A conduta é excluir causas secundárias (cálcio, fósforo, vitamina D, PTH, função renal e tireoidiana, eletroforese de proteínas) e iniciar tratamento antirreabsortivo (bisfosfonato ou denosumabe), com cálcio, vitamina D e proteína adequados (atenção à dieta vegana).",
    "commentary": "Densitometria para confirmar (A): a fratura por fragilidade já define osteoporose; a densitometria serve de linha de base, mas não deve atrasar o tratamento.\n\nInterromper o inibidor de aromatase (C): o tratamento oncológico deve ser mantido; trata-se a osteoporose.\n\nAnalgesia, imobilização e reavaliar em 3 meses (D): atrasa o tratamento em paciente com alto risco de nova fratura.",
    "reference": "Sociedade Brasileira de Endocrinologia e Metabologia / ABRASSO – Diretrizes de osteoporose; AACE/ACE (2020)",
    "tags": [
      "osteoporose",
      "fratura vertebral",
      "inibidores da aromatase",
      "endocrinologia"
    ],
    "tip": "Fratura vertebral por fragilidade = osteoporose → tratar já (após excluir causas secundárias)."
  },
  {
    "id": "hcpa2025-72",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 25 anos, previamente hígido, veio à Emergência por mal-estar, mialgias, febre de 39°C e tosse, quadro progressivo iniciado há 5 dias. Ao exame físico, apresentava-se ictérico e com sufusão conjuntival. Referiu que seu bairro e sua casa em Porto Alegre foram inundados há cerca de 14 dias devido às chuvas e que teve contato com água e lama. Considerando o caso e a principal hipótese diagnóstica, assinale a assertiva correta.",
    "options": [
      "Transaminases > 1.000 U/l indicariam provável diagnóstico de leptospirose",
      "Insuficiência renal oligúrica é típica da doença",
      "Hepatite A faz parte das hipóteses diagnósticas",
      "Presença de tosse afasta a possibilidade de leptospirose"
    ],
    "correctAnswer": 2,
    "explanation": "Febre, mialgia, icterícia e sufusão conjuntival após exposição a água de enchente: leptospirose ictero-hemorrágica é a principal hipótese. Hepatite A também entra no diagnóstico diferencial, pois é transmitida por água contaminada e causa icterícia — especialmente relevante no contexto das enchentes.",
    "commentary": "Transaminases > 1.000 indicando leptospirose (A): na leptospirose as transaminases sobem pouco (em geral < 200–500), com icterícia desproporcional; valores > 1.000 sugerem hepatite viral.\n\nInsuficiência renal oligúrica típica (B): a lesão renal da leptospirose é classicamente não oligúrica, com hipocalemia.\n\nTosse afasta leptospirose (D): tosse é comum, e a hemorragia pulmonar é forma grave da doença.",
    "reference": "Ministério da Saúde – Leptospirose: diagnóstico e manejo clínico; Guia de Vigilância em Saúde",
    "tags": [
      "leptospirose",
      "hepatite A",
      "enchentes",
      "infectologia"
    ],
    "tip": "Leptospirose: icterícia rubínica com transaminases pouco elevadas e IRA não oligúrica."
  },
  {
    "id": "hcpa2025-73",
    "module": "Clínica Médica",
    "text": "Durante as inundações da região metropolitana de Porto Alegre, paciente masculino, de 70 anos, que havia ficado exposto à água por mais de 12 horas, apresentou parada cardiorrespiratória logo após ser resgatado. Foram iniciadas as manobras de ressuscitação conforme as recomendações da American Heart Association (AHA).\n\nCom base no caso, assinale a assertiva correta.",
    "options": [
      "Hipotermia é a causa mais provável da parada cardiorrespiratória, pois mesmo casos leves (estágio I) estão associados a instabilidade hemodinâmica e arritmias",
      "A idade do paciente não está associada a aumento de risco de complicações da hipotermia",
      "Devido à hipotermia, desfibrilação está contraindicada até o reaquecimento do paciente",
      "As manobras de reanimação não devem ser interrompidas até que o paciente seja reaquecido (> 32°C)"
    ],
    "correctAnswer": 3,
    "explanation": "Na parada cardiorrespiratória com hipotermia acidental (exposição prolongada à água fria), as manobras devem continuar até o reaquecimento (geralmente acima de 32–35 °C), pois a hipotermia protege o cérebro e há relatos de recuperação após RCP prolongada — “ninguém está morto até estar quente e morto”.",
    "commentary": "Hipotermia leve causando instabilidade e arritmias (A): a hipotermia leve (32–35 °C) causa tremores e taquicardia; arritmias graves e parada ocorrem na hipotermia grave (< 28–30 °C).\n\nIdade sem relação com risco (B): idosos têm maior risco de complicações da hipotermia.\n\nDesfibrilação contraindicada (C): a AHA recomenda tentar a desfibrilação quando indicada; pode-se repetir conforme o reaquecimento.",
    "reference": "American Heart Association – Cardiac Arrest in Special Circumstances: Accidental Hypothermia (2020)",
    "tags": [
      "hipotermia",
      "parada cardiorrespiratória",
      "afogamento",
      "emergência"
    ],
    "tip": "PCR na hipotermia: manter a RCP até reaquecer."
  },
  {
    "id": "hcpa2025-74",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 55 anos, veio à UBS para revisão do controle da pressão arterial e da dislipidemia. Com história de hipertensão desde os 45 anos, vinha em uso de enalapril (20 mg, 2 vezes/dia), hidroclorotiazida (25 mg/dia) e atorvastatina (40 mg/dia). Negou outras comorbidades. O exame físico indicou peso de 86 kg, altura de 156 cm e pressão arterial 128/78 mmHg; demais aspectos sem particularidades. Trouxe resultados de exames recentes, semelhantes aos anteriores: glicemia de 98 mg/dl, HbA1c de 5,6%, creatinina de 1,5 mg/dl (TFG de 42 ml/min/1,73 m2), albuminúria em amostra de 56 mg/l, colesterol total de 156 mg/dl, HDL de 38 mg/dl e triglicerídios de 152 mg/dl. Com base nos dados clínicos e laboratoriais, qual a conduta mais adequada?",
    "options": [
      "Recomendar apenas modificação de estilo de vida",
      "Iniciar o uso de inibidor de SGLT-2",
      "Aumentar a dose de enalapril",
      "Aumentar a dose de estatina"
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensa com doença renal crônica (TFG 42 mL/min, albuminúria), já com IECA em dose máxima, PA controlada e lípides na meta. Para reduzir a progressão da doença renal e o risco cardiovascular, está indicado acrescentar um inibidor de SGLT2 (dapagliflozina, empagliflozina), que tem benefício também em pacientes sem diabetes (DAPA-CKD, EMPA-KIDNEY).",
    "commentary": "Apenas estilo de vida (A): não reduz a progressão da DRC tanto quanto o iSGLT2.\n\nAumentar o enalapril (C): já está em dose máxima (40 mg/dia).\n\nAumentar a estatina (D): o colesterol já está controlado; não é a intervenção prioritária.",
    "reference": "KDIGO 2024 CKD Guideline; Heerspink HJL et al. DAPA-CKD, NEJM 2020",
    "tags": [
      "doença renal crônica",
      "inibidores de SGLT2",
      "nefroproteção",
      "nefrologia"
    ],
    "tip": "DRC com albuminúria, mesmo sem diabetes: IECA/BRA + iSGLT2."
  },
  {
    "id": "hcpa2025-75",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 65 anos, com doença pulmonar obstrutiva crônica (DPOC) avançada e câncer de pulmão de pequenas células recentemente diagnosticado, foi trazido à Emergência por ter apresentado uma crise convulsiva tônico-clônica generalizada. Em seu histórico, constavam perda de peso significativa, mal estar e fraqueza profunda nas últimas semanas. Ao exame físico, encontrava-se confuso, taquipneico, com frequência respiratória de 30 mpm. A tomografia computadorizada de crânio foi considerada normal.\n\nOs resultados dos exames laboratoriais iniciais encontram-se abaixo.\n• Sódio sérico: 120 mEq/l (VR: 135-145 mEq/l)\n• Potássio sérico: 3,2 mEq/l (VR: 3,5-5,1 mEq/l)\n• Cálcio sérico: 10,0 mg/dl (VR: 8,2-10,2 mg/dl)\n• Albumina sérica: 2,8 g/dl (VR: 3,5-5,2 g/dl)\n• Leucócitos: 10.000/mm³ (VR: 3.600-11.000/mm³)\n• Hemoglobina: 9,0 g/dl (VR: 11-16 g/dl)\n• Plaquetas: 250.000/mm³ (VR: 150.000-400.000/mm³)\n• Gasometria arterial: pH 7,32 (VR: 7,35-7,45); PCO₂ 60 mmHg (VR: 35-45 mmHg); PO₂ 85 mmHg (VR: 80-100 mmHg)\n\nQual a causa mais provável para a crise convulsiva?",
    "options": [
      "Encefalite límbica",
      "Síndrome da secreção inapropriada de hormônio antidiurético (SIADH)",
      "Hipóxia",
      "Hipercapnia"
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com câncer de pulmão de pequenas células, confusão e crise convulsiva, TC de crânio normal e sódio de 120 mEq/L: a hiponatremia grave (sintomática) pela síndrome da secreção inapropriada de ADH (síndrome paraneoplásica clássica do carcinoma de pequenas células) é a causa mais provável da convulsão.",
    "commentary": "Encefalite límbica (A): pode ocorrer no carcinoma de pequenas células, mas o sódio de 120 explica melhor o quadro agudo.\n\nHipóxia (C): a PO₂ de 85 mmHg é aceitável.\n\nHipercapnia (D): PCO₂ de 60 mmHg com pH 7,32 é moderada e, por si, não costuma causar convulsão.",
    "reference": "European Clinical Practice Guideline on Hyponatraemia (2014)",
    "tags": [
      "SIADH",
      "hiponatremia",
      "síndromes paraneoplásicas",
      "câncer de pulmão"
    ],
    "tip": "Pequenas células + hiponatremia: SIADH."
  },
  {
    "id": "hcpa2025-76",
    "module": "Clínica Médica",
    "text": "Com base na análise da radiografia reproduzida ao lado, realizada em incidência anteroposterior e em posição ortostática, é possível afirmar que",
    "options": [
      "foi realizada lobectomia pulmonar inferior direita",
      "há um abscesso no pulmão direito",
      "há hidropneumotórax à direita",
      "há uma consolidação na metade inferior do pulmão direito"
    ],
    "correctAnswer": 2,
    "explanation": "A radiografia em ortostase mostra nível hidroaéreo horizontal no hemitórax direito (linha reta entre ar acima e líquido abaixo), sem a curva de Damoiseau típica do derrame isolado: hidropneumotórax à direita (ar e líquido no espaço pleural).",
    "commentary": "Lobectomia inferior direita (A): não há sinais de cirurgia prévia (clipes, redução do volume com desvio).\n\nAbscesso pulmonar (B): o nível hidroaéreo do abscesso fica dentro de uma cavidade arredondada com parede, no parênquima.\n\nConsolidação (D): seria opacidade com broncograma aéreo, sem nível líquido.",
    "reference": "Fraser and Paré's Diagnosis of Diseases of the Chest; Sociedade Brasileira de Pneumologia e Tisiologia",
    "tags": [
      "hidropneumotórax",
      "radiografia de tórax",
      "pneumologia"
    ],
    "image": "/images/hcpa2025-76.webp",
    "tip": "Nível hidroaéreo reto na pleura = hidropneumotórax."
  },
  {
    "id": "hcpa2025-77",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 38 anos, com asma desde a infância, consultou por piora dos sintomas nos últimos meses, com eliminação de escarro espesso com tampões mucosos. À avaliação complementar, foram constatados piora do distúrbio ventilatório obstrutivo, IgE de 1.200 UI/ml e eosinófilos no sangue periférico de 900/mm3. Tomografia computadorizada de tórax evidenciou algumas bronquiectasias centrais com impactações mucoides e opacidades em dedo de luva. Qual a mais provável complicação clínica nessa situação?",
    "options": [
      "Pneumonia eosinofílica",
      "Micobacteriose não tuberculosa",
      "Bronquiectasias por discinesia ciliar",
      "Aspergilose broncopulmonar alérgica"
    ],
    "correctAnswer": 3,
    "explanation": "Asmático com piora, escarro com tampões mucosos, IgE total muito elevada (> 1.000 UI/mL), eosinofilia, bronquiectasias centrais com impactação mucoide (opacidades em “dedo de luva”): aspergilose broncopulmonar alérgica. O tratamento é corticoide sistêmico (e antifúngico, como itraconazol, nos recorrentes).",
    "commentary": "Pneumonia eosinofílica (A): infiltrados periféricos com eosinofilia, sem bronquiectasias centrais e impactação mucoide.\n\nMicobacteriose não tuberculosa (B): bronquiectasias e nódulos, sem IgE muito alta e eosinofilia.\n\nDiscinesia ciliar (C): bronquiectasias difusas desde a infância com sinusite e infertilidade, sem IgE elevada.",
    "reference": "ISHAM Working Group – Revised criteria for ABPA (2024); Sociedade Brasileira de Pneumologia e Tisiologia",
    "tags": [
      "aspergilose broncopulmonar alérgica",
      "asma",
      "bronquiectasias",
      "pneumologia"
    ],
    "tip": "Asma + IgE > 1.000 + eosinofilia + bronquiectasia central = ABPA."
  },
  {
    "id": "hcpa2025-78",
    "module": "Clínica Médica",
    "text": "Paciente feminina, de 30 anos, buscou atendimento na UBS, acompanhada pelo marido, por vir apresentando insônia, irritabilidade, anedonia e choro fácil. Relatou que não conseguia sair sozinha e vinha tendo crises de ansiedade frequentes, especialmente à noite, antes de deitar-se, sintomas iniciados há 10 dias, logo após ter sido resgatada numa estrada em razão de sua casa situar-se em região totalmente alagada pelas chuvas. Referiu ter ficado 3 dias abrigada em uma escola e, há 1 semana, ter ido morar com a sogra, por não conseguir retornar para sua casa por medo. Que conduta, dentre as abaixo, o médico da UBS deve priorizar?",
    "options": [
      "Orientar suporte familiar e social, apoio psicológico para uma escuta empática neste momento de estresse agudo e não prescrever benzodiazepínicos para insônia e irritabilidade",
      "Estimular a paciente a falar sobre suas vivências e sentimentos, mesmo que ela se recuse, e prescrever benzodiazepínicos para melhorar o sono",
      "Encaminhar a paciente para a Emergência psiquiátrica, pois ela deve estar com ideação suicida; o médico não poderia perguntar sobre pensamentos de morte para não a incentivar a cometer suicídio",
      "Considerar o diagnóstico de um transtorno de estresse pós-traumático em função dos sintomas intrusivos, sintomas de esquiva, alterações do humor e da cognição e reatividade alterada, prescrevendo antidepressivo"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher com sintomas há 10 dias após evento traumático (enchente): reação aguda ao estresse. A conduta prioritária são os primeiros cuidados psicológicos: suporte familiar e social, escuta empática sem forçar o relato, atenção às necessidades básicas e monitoramento. Benzodiazepínicos devem ser evitados, pois podem prejudicar a recuperação e aumentar o risco de TEPT.",
    "commentary": "Forçar o relato e prescrever benzodiazepínico (B): o debriefing forçado e os benzodiazepínicos podem piorar o desfecho.\n\nEncaminhar à emergência psiquiátrica sem perguntar sobre suicídio (C): perguntar sobre ideação suicida não induz suicídio e deve ser feito.\n\nDiagnosticar TEPT e prescrever antidepressivo (D): o TEPT exige sintomas por mais de 1 mês; com 10 dias, é reação aguda ao estresse.",
    "reference": "OMS – Primeiros Cuidados Psicológicos (2015); NICE NG116 – Post-traumatic stress disorder (2018)",
    "tags": [
      "reação aguda ao estresse",
      "primeiros cuidados psicológicos",
      "desastres",
      "saúde mental"
    ],
    "tip": "Após trauma recente: apoio e escuta; evitar benzodiazepínico. TEPT só após 1 mês."
  },
  {
    "id": "hcpa2025-79",
    "module": "Clínica Médica",
    "text": "Paciente masculino, de 55 anos, veio à Emergência por dor no joelho direito, iniciada há 2 dias, e sensação de febre (não aferida) nas últimas 12 horas. Negou trauma e episódios semelhantes prévios. Informou ser portador de hipertensão arterial sistêmica e diabetes melito tipo 2 em tratamento com hidroclorotiazida e metformina. Ao exame físico, constataram-se artrite com eritema e dor à mínima mobilização do joelho direito, úlcera secretiva no hálux direito e eritema de dorso do pé direito. Em relação à principal hipótese diagnóstica, assinale a assertiva correta.",
    "options": [
      "Na análise do líquido sinovial, espera-se encontrar celularidade aumentada, mesmo com pesquisa direta de bactérias e cultura negativas",
      "O paciente deve receber anti-inflamatório não esteroidal intravenoso e, após melhora, alta com colchicina até o retorno ambulatorial",
      "A infiltração intra-articular com glicocorticoide está indicada por apresentar melhor perfil de segurança sistêmico, levando-se em consideração as comorbidades",
      "O tratamento antimicrobiano deve ser iniciado conforme resultado da cultura, levando-se em consideração o perfil de sensibilidade identificado"
    ],
    "correctAnswer": 0,
    "explanation": "Monoartrite aguda de joelho com febre, em diabético com úlcera infectada no hálux e celulite no pé: artrite séptica até prova em contrário. Na análise do líquido sinovial espera-se celularidade muito aumentada (em geral > 50.000 leucócitos/mm³, com predomínio neutrofílico), mesmo que a bacterioscopia e a cultura possam ser negativas (sensibilidade limitada).",
    "commentary": "AINE e colchicina (B): seria tratamento de gota; não se trata artrite séptica sem antibiótico e drenagem.\n\nInfiltração com corticoide (C): é contraindicada na suspeita de infecção.\n\nAntibiótico só após a cultura (D): o antibiótico empírico deve ser iniciado logo após a punção, sem esperar o resultado.",
    "reference": "Sociedade Brasileira de Reumatologia; Mathews CJ et al. Bacterial septic arthritis in adults, Lancet 2010",
    "tags": [
      "artrite séptica",
      "líquido sinovial",
      "diabetes mellitus",
      "reumatologia"
    ],
    "tip": "Artrite séptica: puncionar, colher cultura e começar antibiótico empírico."
  },
  {
    "id": "hcpa2025-80",
    "module": "Clínica Médica",
    "text": "Trabalhador rural, de 37 anos, veio à consulta queixando-se de dor em dedo do pé esquerdo há 2 semanas. Negou trauma ou comorbidades. Relatou episódios de diarreia recorrentes nos últimos meses. Ao exame físico, havia dor à palpação e à mobilização, edema e eritema do terceiro pododáctilo esquerdo, além de onicodistrofia e pitting ungueal em mãos e pés. Diante do quadro, assinale a alternativa que confirma o diagnóstico e aumenta a chance de acometimento axial.",
    "options": [
      "Fator reumatoide reagente",
      "Colite à biópsia",
      "HLA-B27 presente",
      "Pesquisa de fungo ungueal negativa"
    ],
    "correctAnswer": 2,
    "explanation": "Dactilite (“dedo em salsicha”) e alterações ungueais (pitting, onicodistrofia): artrite psoriásica, uma espondiloartrite. A presença do HLA-B27 apoia o diagnóstico de espondiloartrite e se associa a maior chance de acometimento axial (sacroileíte, espondilite). A diarreia recorrente lembra doença inflamatória intestinal como diagnóstico diferencial.",
    "commentary": "Fator reumatoide reagente (A): sugere artrite reumatoide; nas espondiloartrites é tipicamente negativo.\n\nColite à biópsia (B): sugeriria artrite enteropática, mas não aumenta especificamente o acometimento axial.\n\nPesquisa de fungo negativa (D): ajuda a afastar onicomicose, mas não confirma o diagnóstico nem prediz acometimento axial.",
    "reference": "Critérios CASPAR (2006); Sociedade Brasileira de Reumatologia",
    "tags": [
      "artrite psoriásica",
      "dactilite",
      "HLA-B27",
      "espondiloartrites",
      "reumatologia"
    ],
    "tip": "Espondiloartrite + HLA-B27: maior chance de doença axial."
  },
  {
    "id": "hcpa2025-81",
    "module": "Saúde Coletiva",
    "text": "Assinale a assertiva correta sobre estudos de revisão sistemática.",
    "options": [
      "Uma metanálise pode ser realizada de forma independente de uma revisão sistemática, sem risco de vieses nos resultados",
      "Uma metanálise de vários estudos pequenos nem sempre irá predizer o resultado de um ensaio clínico randomizado grande, particularmente se houver viés de publicação",
      "Uma revisão sistemática é um método estatístico para combinar matematicamente os resultados de 2 ou mais estudos independentes",
      "Uma revisão sistemática deve apresentar uma única metanálise para todos os desfechos de todos os estudos incluídos na revisão"
    ],
    "correctAnswer": 1,
    "explanation": "Uma metanálise de vários estudos pequenos nem sempre prediz o resultado de um grande ensaio clínico randomizado posterior, sobretudo quando há viés de publicação (estudos pequenos com resultado positivo têm mais chance de serem publicados), heterogeneidade e baixa qualidade metodológica (efeito de estudos pequenos, avaliado pelo gráfico de funil).",
    "commentary": "Metanálise independente da revisão sistemática sem risco de viés (A): a metanálise deve partir de revisão sistemática; sem ela, a seleção dos estudos é enviesada.\n\nRevisão sistemática como método estatístico (C): esse é o conceito de metanálise; a revisão sistemática é o método de busca, seleção e avaliação.\n\nUma única metanálise para todos os desfechos (D): cada desfecho tem sua própria análise, e pode nem haver metanálise se os estudos forem heterogêneos.",
    "reference": "Cochrane Handbook for Systematic Reviews of Interventions (2023)",
    "tags": [
      "revisão sistemática",
      "metanálise",
      "viés de publicação",
      "medicina baseada em evidências"
    ],
    "tip": "Revisão sistemática = método; metanálise = estatística que pode (ou não) fazer parte."
  },
  {
    "id": "hcpa2025-82",
    "module": "Saúde Coletiva",
    "text": "Um novo antibiótico está sendo avaliado para tratamento de traqueobronquite bacteriana, apresentando menor curso e maior comodidade posológica em relação ao tratamento padrão (comparador), que tem cerca de 90% de eficácia (desfecho “taxa de cura”). O grupo pesquisador desenhou um ensaio clínico randomizado e propôs que uma efetividade de 81% seja definida como “não inferior” (Risco Relativo de 0,9 como margem de não inferioridade).\n\nCom base nas informações e na análise da figura, assinale a assertiva correta sobre estudos de não inferioridade.",
    "options": [
      "Nesse cenário e desfecho, um tratamento será considerado superior (melhor) quando a estimativa de risco relativo, com seus intervalos de confiança, for < 1",
      "Não inferioridade estará estabelecida quando a estimativa de risco e os intervalos de confiança tocarem a linha de nulidade (C, D)",
      "Não inferioridade não pode ser estabelecida se quaisquer resultados apresentarem intervalos de confiança abaixo da margem de não inferioridade, como no resultado E",
      "De acordo com os parâmetros definidos pelo pesquisador, os resultados B, C e E podem ser aceitos como não inferiores ao tratamento comparador"
    ],
    "correctAnswer": 3,
    "explanation": "Em estudo de não inferioridade, o novo tratamento é considerado não inferior quando o limite inferior do intervalo de confiança do risco relativo para cura fica acima da margem de não inferioridade (0,9). Pela figura, isso ocorre nos resultados B, C e E (o E, por ter todo o intervalo acima de 1, também é superior). Os resultados A e D têm o limite inferior abaixo de 0,9 (inconclusivos).",
    "commentary": "Superior com RR < 1 (A): para o desfecho “cura”, superioridade é RR > 1 com o intervalo todo acima de 1.\n\nNão inferioridade quando tocam a linha de nulidade (B): o critério é o limite inferior acima da margem (0,9), não a relação com a linha de 1.\n\nE não pode ser não inferior (C): o resultado E tem o intervalo todo acima de 1, portanto é não inferior e também superior.",
    "reference": "CONSORT extension for non-inferiority and equivalence trials (2012)",
    "tags": [
      "ensaio de não inferioridade",
      "intervalo de confiança",
      "epidemiologia clínica"
    ],
    "image": "/images/hcpa2025-82.webp",
    "tip": "Não inferioridade: limite inferior do IC acima da margem."
  },
  {
    "id": "hcpa2025-83",
    "module": "Saúde Coletiva",
    "text": "Em um estudo prospectivo avaliando eventos adversos de um novo medicamento, 15 dos participantes da pesquisa que receberam o medicamento apresentaram epigastralgia e 45 dos que receberam o medicamento não apresentaram tal sintoma. Dos 80 participantes que não tomaram o novo medicamento, apenas 2 apresentaram epigastralgia. Assinale a assertiva correta sobre o efeito adverso “epigastralgia” nesse estudo.",
    "options": [
      "A Razão de Chances (odds ratio) do estudo é 25",
      "O Risco Relativo para apresentar eventos adversos com o novo medicamento é 10",
      "O Risco Absoluto de eventos adversos no grupo controle é 25%",
      "O Risco Relativo de eventos adversos com o novo medicamento é 15/60"
    ],
    "correctAnswer": 1,
    "explanation": "Expostos (novo medicamento): 15 com epigastralgia e 45 sem, total 60 → risco 15/60 = 25%. Não expostos: 2 de 80 → risco 2,5%. Risco relativo = 25% / 2,5% = 10. Razão de chances = (15/45) / (2/78) ≈ 13.",
    "commentary": "Odds ratio de 25 (A): a razão de chances é (15 × 78) / (45 × 2) ≈ 13.\n\nRisco absoluto no controle de 25% (C): 25% é o risco no grupo tratado; no controle é 2,5%.\n\nRR de 15/60 (D): 15/60 é o risco absoluto do grupo tratado, não o risco relativo.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "risco relativo",
      "odds ratio",
      "medidas de associação",
      "epidemiologia"
    ],
    "tip": "RR = risco nos expostos / risco nos não expostos."
  },
  {
    "id": "hcpa2025-84",
    "module": "Saúde Coletiva",
    "text": "Um estudo de coortes prospectivo descreve que a coorte com uso de equipamentos de proteção individual (EPI) têm um risco relativo de 0,45, quando comparada à coorte sem uso de EPI, para acidentes de trabalho com dano moderado a grave.\n\nCom base no estudo, assinale a assertiva correta.",
    "options": [
      "A Redução de Risco Relativo (RRR) do grupo que utiliza EPI é 45%, e a diferença absoluta de risco, 55%",
      "A redução de risco de mais de 50% indica que o valor p deverá ser significativo",
      "Usuários de EPI têm 0,45 vez o risco de acidentes de trabalho com dano moderado a grave em comparação aos não usuários de EPI",
      "Não usuários de EPI são 55% mais propensos a sofrerem acidentes de trabalho com dano moderado a grave em comparação aos usuários de EPI"
    ],
    "correctAnswer": 2,
    "explanation": "Um risco relativo de 0,45 significa que os usuários de EPI têm 0,45 vez (45%) o risco de acidente de trabalho moderado a grave em comparação aos não usuários — uma redução de risco relativo de 55% (1 − 0,45).",
    "commentary": "RRR de 45% e diferença absoluta de 55% (A): a RRR é 55%, e a diferença absoluta não pode ser calculada sem os riscos de cada grupo.\n\nRedução > 50% implica p significativo (B): a significância depende do tamanho da amostra e do intervalo de confiança, não da magnitude do efeito.\n\nNão usuários 55% mais propensos (D): o risco dos não usuários é cerca de 2,2 vezes (1/0,45) o dos usuários, ou seja, 122% maior.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "risco relativo",
      "redução de risco relativo",
      "epidemiologia",
      "saúde do trabalhador"
    ],
    "tip": "RR 0,45 → RRR 55%; o inverso (1/0,45 ≈ 2,2) é o risco dos não expostos."
  },
  {
    "id": "hcpa2025-85",
    "module": "Saúde Coletiva",
    "text": "Até agosto de 2024, os casos de Mpox na região da República Democrática do Congo e em países vizinhos totalizaram 15.600 com 537 mortes associadas, número maior do que o registrado em todo ano de 2023. Por essa razão, a Organização Mundial da Saúde declarou Mpox como nova Emergência em Saúde Pública de importância internacional. No Brasil, desde o início de 2024, já foram registrados 709 casos, com maior concentração na região Sudeste, principalmente nos estados de São Paulo e Rio de Janeiro. A respeito dessa situação, assinale a assertiva correta.",
    "options": [
      "O coeficiente de letalidade na região africana é 537 mortes/15.600 casos",
      "A densidade de incidência no Brasil é 709 casos/100.000 habitantes/ano",
      "A notificação é compulsória, imediata e por telefone para os casos internados confirmados e no e-SUS Sinan (Sistema de Informação de Agravos de Notificação) para os demais",
      "A vacinação é obrigatória para todos os contatos de casos confirmados"
    ],
    "correctAnswer": 0,
    "explanation": "Letalidade é a proporção de óbitos entre os casos da doença: 537 mortes / 15.600 casos (cerca de 3,4%) na região africana.",
    "commentary": "Densidade de incidência de 709/100.000/ano (B): 709 é o número de casos; a incidência exige dividir pela população sob risco e pelo tempo.\n\nNotificação por telefone só para internados (C): a mpox é de notificação compulsória imediata (em até 24 horas) para todos os casos suspeitos.\n\nVacinação obrigatória para todos os contatos (D): a vacina é indicada a grupos específicos (pré e pós-exposição), não obrigatória.",
    "reference": "Ministério da Saúde – Plano de contingência para mpox; Rouquayrol MZ. Epidemiologia & Saúde",
    "tags": [
      "mpox",
      "letalidade",
      "vigilância epidemiológica"
    ],
    "tip": "Letalidade = óbitos ÷ casos."
  },
  {
    "id": "hcpa2025-86",
    "module": "Saúde Coletiva",
    "text": "Um serviço para ser considerado de Atenção Primária à Saúde necessita apresentar alguns atributos, os quais podem ser divididos em essenciais ou derivados. Em uma UBS em condições precárias de atendimento, tais como horário limitado de agendamento, ausência de prontuários para registro das consultas e não disponibilidade de materiais para procedimentos cirúrgicos ambulatoriais, quais atributos estão sendo comprometidos respectivamente?",
    "options": [
      "Acesso, equidade e integralidade do cuidado",
      "Acesso, longitudinalidade e integralidade do cuidado",
      "Coordenação do cuidado, longitudinalidade e competência cultural",
      "Coordenação do cuidado, longitudinalidade e orientação comunitária"
    ],
    "correctAnswer": 1,
    "explanation": "Pelos atributos da APS (Starfield): horário restrito de agendamento compromete o acesso de primeiro contato; a ausência de prontuários compromete a longitudinalidade (e a coordenação), pois impede o acompanhamento ao longo do tempo; e a falta de materiais para procedimentos ambulatoriais compromete a integralidade (oferta de serviços que a APS deve resolver).",
    "commentary": "Acesso, equidade e integralidade (A): equidade não é atributo da APS de Starfield, e a falta de prontuário afeta a longitudinalidade.\n\nCoordenação, longitudinalidade e competência cultural (C) e coordenação, longitudinalidade e orientação comunitária (D): o horário limitado afeta o acesso, e a falta de materiais afeta a integralidade.",
    "reference": "Starfield B. Atenção Primária (UNESCO/MS, 2002)",
    "tags": [
      "atributos da atenção primária",
      "acesso",
      "longitudinalidade",
      "integralidade"
    ],
    "tip": "Horário → acesso; prontuário → longitudinalidade; materiais → integralidade."
  },
  {
    "id": "hcpa2025-87",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do parágrafo abaixo.\n\nOs recursos financeiros do Sistema Único de Saúde, na esfera federal, são originários da.......... e fiscalizados pelo(a)..........; as receitas geradas são creditadas diretamente no...........",
    "options": [
      "Saúde – Conselho de Saúde – Fundo Municipal de Saúde",
      "Seguridade Social – Conselho de Saúde – Fundo Nacional de Saúde",
      "Seguridade Social – Conferência de Saúde – Fundo Nacional de Saúde",
      "Previdência Social – Conferência de Saúde – Fundo Municipal de Saúde"
    ],
    "correctAnswer": 1,
    "explanation": "Os recursos federais do SUS vêm do orçamento da Seguridade Social (art. 195 da Constituição), são fiscalizados pelos Conselhos de Saúde (Lei 8.142/1990) e depositados no Fundo Nacional de Saúde, de onde são repassados aos fundos estaduais e municipais.",
    "commentary": "Saúde e Fundo Municipal (A): a origem é a Seguridade Social, e na esfera federal o fundo é o Nacional.\n\nFiscalização pela Conferência (C e D): a Conferência propõe diretrizes a cada 4 anos; quem fiscaliza é o Conselho de Saúde.\n\nPrevidência Social (D): a Previdência é uma das áreas da Seguridade, não a fonte específica.",
    "reference": "Constituição Federal de 1988, arts. 195 e 198; Lei nº 8.080/1990, art. 33; Lei nº 8.142/1990",
    "tags": [
      "financiamento do SUS",
      "fundo nacional de saúde",
      "conselhos de saúde",
      "legislação do SUS"
    ],
    "tip": "Recursos federais: Seguridade Social → Fundo Nacional de Saúde; fiscalização pelo Conselho."
  },
  {
    "id": "hcpa2025-88",
    "module": "Saúde Coletiva",
    "text": "Na regulamentação do Sistema Único de Saúde - SUS (Lei nº 8.080/1990), há referência à oferta de serviços pela iniciativa privada. Assinale a assertiva correta sobre a participação complementar dos serviços privados no SUS.",
    "options": [
      "A participação complementar desses serviços será formalizada mediante contrato ou convênio, observadas, a respeito, as normas de direito privado",
      "Os critérios e valores para a remuneração de serviços e os parâmetros de cobertura assistencial são estabelecidos pelas Sociedades Médicas de cada especialidade",
      "Aos proprietários, administradores e dirigentes de entidades ou serviços contratados é vedado exercer cargo de chefia ou função de confiança no SUS",
      "As Organizações da Sociedade Civil de Interesse Público (OSCIP) terão preferência para participar do SUS"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lei 8.080/1990 (art. 26, § 4º), aos proprietários, administradores e dirigentes de entidades ou serviços contratados é vedado exercer cargo de chefia ou função de confiança no SUS, para evitar conflito de interesses.",
    "commentary": "Contrato ou convênio pelas normas de direito privado (A): a participação complementar segue as normas de direito público.\n\nCritérios de remuneração pelas sociedades médicas (B): são estabelecidos pela direção nacional do SUS, aprovados pelo Conselho Nacional de Saúde.\n\nPreferência às OSCIP (D): a preferência é para entidades filantrópicas e sem fins lucrativos.",
    "reference": "Lei nº 8.080/1990, arts. 24 a 26",
    "tags": [
      "participação complementar",
      "lei 8.080/1990",
      "saúde suplementar",
      "legislação do SUS"
    ],
    "tip": "Dono de serviço contratado não pode ter cargo de chefia no SUS."
  },
  {
    "id": "hcpa2025-89",
    "module": "Saúde Coletiva",
    "text": "Determinado município de 20 mil habitantes possui 2 Equipes de Saúde da Família; 1 Hospital geral com 10 leitos clínicos, 3 cirúrgicos, 3 obstétricos, 3 pediátricos e 6 psiquiátricos; e 1 Ambulatório de especialidades. Em 2022, apresentou taxa de mortalidade infantil de 14/1.000 nascidos vivos, predominantemente no componente pós-neonatal, e altas taxas de internação hospitalar por Condições Sensíveis à Atenção Primária à Saúde (hipertensão arterial sistêmica, gastroenterites e infecção do trato urinário em adultos e por asma nos com menos de 18 anos). Considerando que está sendo planejada a reestruturação de seu Plano Municipal de Saúde, assinale a alternativa que contempla o investimento na força de trabalho mais adequado para esse município.",
    "options": [
      "1 médico(a) neonatologista para sala de parto e 1 médico(a) pneumologista",
      "1 médico(a) psiquiatra ou médico(a) com formação em saúde mental, 1 enfermeiro(a), 3 profissionais de nível superior: psicólogo(a), assistente social, terapeuta ocupacional ou pedagogo(a) para implantar um Centro de Atenção Psicossocial Infantil (CAPS i)",
      "2 médicos(as) e 2 enfermeiros(as) (diurno e noturno) e Equipe Assistencial Multiprofissional com quantitativo de profissionais compatível com uma Unidade de Pronto-atendimento (UPA) Porte 1",
      "2 médicos(as) de família e comunidade ou médicos(as) generalistas, 2 enfermeiros(as), 2 técnicos(as) de enfermagem e 2 agentes comunitários(as) de saúde compatíveis com a ampliação de 2 Equipes de Saúde da Família (ESF)"
    ],
    "correctAnswer": 3,
    "explanation": "O município tem baixa cobertura de APS (2 equipes para 20 mil habitantes, cobrindo cerca de 7 mil pessoas), mortalidade infantil com predomínio pós-neonatal (ligada a condições sociais e atenção primária) e muitas internações por condições sensíveis à atenção primária (hipertensão, gastroenterites, ITU, asma). O investimento mais adequado é ampliar a Estratégia Saúde da Família, com mais 2 equipes.",
    "commentary": "Neonatologista e pneumologista (A): o componente predominante da mortalidade é pós-neonatal, e as internações são evitáveis pela APS.\n\nCAPS infantil (B): não responde aos problemas descritos.\n\nUPA porte 1 (C): ampliaria o atendimento de urgência, mas não reduziria as internações por condições sensíveis à APS.",
    "reference": "Ministério da Saúde – Política Nacional de Atenção Básica (2017); Lista Brasileira de Internações por Condições Sensíveis à Atenção Primária",
    "tags": [
      "internações por condições sensíveis à atenção primária",
      "mortalidade infantil",
      "ESF",
      "planejamento em saúde"
    ],
    "tip": "Muitas ICSAP e mortalidade pós-neonatal: ampliar a APS."
  },
  {
    "id": "hcpa2025-90",
    "module": "Saúde Coletiva",
    "text": "Os determinantes sociais, tais como Status Socioeconômico (SES), Índice de Vulnerabilidade Social (IVS) e Índice de Desenvolvimento Social (IDS), atuam sobre o risco e a mortalidade das doenças crônico-degenerativas na população. Assinale a assertiva correta sobre os determinantes sociais.",
    "options": [
      "SES baixo se relaciona a doença cardiovascular e aumenta o risco cardiovascular na mesma proporção que fatores de risco clássicos, como hipertensão arterial, diabetes melito, obesidade e tabagismo",
      "Educação, etnia, situação de emprego e condições ambientais são os fatores que compõem o SES",
      "Hipertensão arterial, tabagismo, obesidade e hipercolesterolemia são os fatores de risco mais frequentes entre pessoas negras do que em outros grupos étnicos",
      "Baixa escolaridade, IVS alto e IDS baixo estão relacionados a aumento da frequência de demência de Alzheimer, doença cerebrovascular e doença de Parkinson"
    ],
    "correctAnswer": 0,
    "explanation": "O baixo nível socioeconômico é fator de risco independente para doença cardiovascular, com magnitude comparável à dos fatores de risco clássicos (hipertensão, diabetes, obesidade, tabagismo), como mostram grandes coortes (estudo LIFEPATH, Lancet 2017).",
    "commentary": "Etnia e condições ambientais compõem o SES (B): o status socioeconômico é composto principalmente por renda, escolaridade e ocupação.\n\nFatores de risco mais frequentes em negros (C): a hipertensão é mais prevalente, mas a generalização para tabagismo, obesidade e colesterol não se sustenta.\n\nIVS alto e IDS baixo ligados a Parkinson (D): a associação é bem estabelecida para demência e doença cerebrovascular, mas não para Parkinson.",
    "reference": "Stringhini S et al. Socioeconomic status and the 25×25 risk factors (LIFEPATH), Lancet 2017",
    "tags": [
      "determinantes sociais da saúde",
      "nível socioeconômico",
      "doenças cardiovasculares",
      "epidemiologia"
    ],
    "tip": "Baixo nível socioeconômico pesa tanto quanto os fatores de risco clássicos."
  },
  {
    "id": "hcpa2025-91",
    "module": "Saúde Coletiva",
    "text": "Paciente de 26 anos, com seu primogênito de 13 dias de vida, procurou a UBS por estar tendo dificuldades com a amamentação. Há 3 dias, referiu a ocorrência de dor e sangramento pelo mamilo da mama esquerda durante a amamentação, razão pela qual vinha extraindo o leite dessa mama manualmente e mantendo a amamentação apenas na mama direita. A dor e a vermelhidão tinham piorado nos últimos 2 dias. Negou febre, prurido ou sensação de queimação nos mamilos, mas relatou sudorese intensa e calafrios durante a noite. Ao exame, a temperatura axilar era 37,5º C. A mama esquerda apresentava área com eritema, calor e endurecimento sem flutuação; o mamilo era plano, estava com eritema e apresentava fissuras. A criança encontrava-se saudável e, desde a alta hospitalar, já havia ganhado 320 g. Além da analgesia e orientação da pega, assinale a alternativa que contempla o diagnóstico, a conduta e as orientações adequadas para a mãe.",
    "options": [
      "Mastite – Prescrever amoxicilina-clavulanato, realizar a extração manual do leite na mama esquerda até parar o sangramento e manter a amamentação na mama direita. – Tratar o mamilo com mupirocina creme a 2%",
      "Mastite – Prescrever cefalexina, colocar compressas mornas e manter a amamentação em ambas as mamas, iniciando pela direita. – Orientar a alternância de posições de mamada, reduzindo a pressão sobre os pontos dolorosos",
      "Ingurgitamento mamário – Colocar compressas mornas e manter a amamentação em ambas as mamas, iniciando pela esquerda. – Tratar o mamilo com creme de lanolina mantendo-o seco e expondo-o ao sol",
      "Ingurgitamento mamário – Colocar compressas frias, realizar a extração manual do leite na mama esquerda até parar o sangramento e manter amamentação na mama direita. – Tratar o mamilo com mupirocina creme a 2%"
    ],
    "correctAnswer": 1,
    "explanation": "Puérpera com fissura mamilar, dor, área de eritema, calor e endurecimento na mama, febre baixa, sudorese e calafrios: mastite (infecciosa, com porta de entrada na fissura). Conduta: antibiótico com cobertura antiestafilocócica (cefalexina), analgesia, correção da pega e manter a amamentação nas duas mamas, começando pela não afetada para facilitar a ejeção, e variar as posições para drenar todos os quadrantes.",
    "commentary": "Amoxicilina-clavulanato, suspender a amamentação na mama esquerda e mupirocina (A): suspender a amamentação na mama afetada favorece estase e abscesso.\n\nIngurgitamento com compressas mornas (C): há sinais de infecção localizada; e calor prolongado aumenta o edema.\n\nIngurgitamento com suspensão da mama afetada (D): o diagnóstico é mastite, e a suspensão é inadequada.",
    "reference": "Academy of Breastfeeding Medicine Protocol #36 (2022); Ministério da Saúde – Caderno de Atenção Básica nº 23",
    "tags": [
      "mastite lactacional",
      "fissura mamilar",
      "aleitamento materno",
      "puerpério"
    ],
    "tip": "Mastite: cefalexina + manter as duas mamas (começar pela sadia)."
  },
  {
    "id": "hcpa2025-92",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 25 anos, veio à UBS com queixa de lesão ulcerada no pênis, surgida há cerca de 1 semana, levemente dolorosa e com discreta secreção. Referiu ser este o primeiro episódio. Era sexualmente ativo, não tinha parceira(o) fixo(a) nem fazia uso de preservativos em todas as relações. Negou outros sintomas. A UBS não dispunha de microscopia. O médico recomendou ao paciente comunicar-se com seus contatos e solicitou-lhe sorologias. Qual(is) o(s) diagnóstico(s) mais provável(eis) e a conduta mais apropriada?",
    "options": [
      "Donovanose – Prescrever azitromicina por 3 semanas e notificar o caso",
      "Herpes genital ou cancroide – Prescrever aciclovir por 7 dias e azitromicina em dose única",
      "Sífilis tardia – Prescrever penicilina benzatina por 3 semanas",
      "Cancroide ou sífilis recente – Prescrever azitromicina e penicilina benzatina em dose única"
    ],
    "correctAnswer": 3,
    "explanation": "Úlcera genital sem microscopia disponível: pelo fluxograma do Ministério da Saúde, se a lesão não for sugestiva de herpes (vesículas, recorrência), trata-se sífilis recente e cancroide simultaneamente — penicilina G benzatina 2,4 milhões UI em dose única e azitromicina 1 g em dose única —, com testagem e tratamento das parcerias.",
    "commentary": "Donovanose com azitromicina por 3 semanas (A): a donovanose costuma ser úlcera indolor, crônica e friável; não é a primeira hipótese em lesão de 1 semana.\n\nHerpes ou cancroide (B): sem vesículas nem episódios prévios, não se trata herpes de rotina; e a sífilis não pode ficar sem cobertura.\n\nSífilis tardia com 3 doses (C): a lesão ulcerada de 1 semana é de sífilis recente (primária), tratada com dose única.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "úlcera genital",
      "sífilis",
      "cancroide",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Úlcera genital sem microscopia: benzatina + azitromicina (sífilis + cancroide)."
  },
  {
    "id": "hcpa2025-93",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 37 anos, veio à consulta na UBS por apresentar descamação no couro cabeludo de limites imprecisos, lesões descamativas na região do supercílio, na glabela, nos sulcos paranasais e mentoniano e nas regiões retroauriculares. Relatou que as lesões eram recorrentes e melhoravam no verão. Nunca fizera tratamento. Qual dos esquemas de tratamento abaixo é o mais apropriado?",
    "options": [
      "Creme e xampu de cetoconazol a 2%, por 4 semanas, na face e no couro cabeludo respectivamente",
      "Itraconazol por via oral (200 mg/dia), por 7 dias, seguido de itraconazol por via oral (200 mg/dia), por 2 dias, no início de cada mês, por 3 meses",
      "Isotretinoína (10 mg), por via oral, a cada 2 dias, por 3 meses",
      "Xampu de cetoconazol a 2% por 4 semanas e dipropionato de betametasona (0,5 mg/g) + ácido salicílico tópico na face por 1 semana"
    ],
    "correctAnswer": 0,
    "explanation": "Descamação do couro cabeludo e lesões eritematodescamativas em supercílios, glabela, sulcos nasogenianos e retroauriculares, recorrentes, com melhora no verão: dermatite seborreica. O tratamento de primeira linha é antifúngico tópico (cetoconazol 2% em creme na face e xampu no couro cabeludo), por cerca de 4 semanas, com manutenção intermitente.",
    "commentary": "Itraconazol oral (B): reservado a casos extensos e refratários.\n\nIsotretinoína (C): não é tratamento de primeira linha.\n\nBetametasona com ácido salicílico na face (D): corticoide potente na face causa atrofia e rebote; usa-se corticoide de baixa potência por curto período, se necessário.",
    "reference": "Sociedade Brasileira de Dermatologia; Azulay – Dermatologia, 8ª ed.",
    "tags": [
      "dermatite seborreica",
      "cetoconazol",
      "dermatologia"
    ],
    "tip": "Dermatite seborreica: cetoconazol tópico (creme + xampu)."
  },
  {
    "id": "hcpa2025-94",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, de 48 anos, veio à consulta ambulatorial queixando-se de sensação de letargia iniciada há pelo menos 3 semanas, associada à sensação de irritabilidade. Informou ter dificuldade em sair da cama pela manhã, algo diferente de seu padrão usual. Ao ser perguntado, disse estar se sentindo um pouco triste e desanimado. Referiu um episódio depressivo prévio, aos 34 anos. Para o diabetes melito tipo 2, fazia uso de metformina (850 mg, 3 vezes/dia) de forma regular; para o hipotireoidismo, de levotiroxina (100 mg/dia). A hemoglobina glicada aferida há 20 dias teve como resultado 6,0%; o hemograma não indicou alterações. Não fazia uso de outros medicamentos, nem outras condições de saúde foram identificadas. Assinale a alternativa com a principal hipótese diagnóstica que deverá conduzir a investigação do quadro no momento.",
    "options": [
      "Deficiência de vitamina B12",
      "Transtorno misto ansioso e depressivo",
      "Episódio depressivo",
      "Reação de ajustamento"
    ],
    "correctAnswer": 0,
    "explanation": "Homem com letargia, irritabilidade, desânimo e humor deprimido, em uso prolongado de metformina em dose alta (2.550 mg/dia): a deficiência de vitamina B12 induzida por metformina é causa tratável de sintomas neuropsiquiátricos (fadiga, depressão, alterações cognitivas) e deve ser investigada antes de atribuir o quadro a transtorno psiquiátrico. O hemograma normal não a exclui, pois a anemia pode ser tardia.",
    "commentary": "Transtorno misto ansioso e depressivo (B), episódio depressivo (C) e reação de ajustamento (D): são diagnósticos possíveis, mas é preciso antes excluir causa orgânica tratável — a deficiência de B12 pela metformina (e checar o TSH no hipotireoidismo).",
    "reference": "ADA Standards of Care 2025 (monitorização de B12 em uso de metformina); Sociedade Brasileira de Diabetes",
    "tags": [
      "deficiência de vitamina B12",
      "metformina",
      "depressão",
      "atenção primária à saúde"
    ],
    "tip": "Metformina de longa data + sintomas neuropsiquiátricos: dosar B12."
  },
  {
    "id": "hcpa2025-95",
    "module": "Saúde Coletiva",
    "text": "Paciente feminina, negra, de 44 anos, consultou na UBS queixando-se de forte ansiedade, tristeza, choro fácil, pensamentos de desvalia, irritabilidade, cansaço excessivo, sensação de esgotamento e de incapacidade de executar as atividades de forma adequada, dificuldade de concentração e atenção, cefaleia e distúrbio do sono. Informou que trabalhava na mesma empresa há 5 anos, que iniciara como recepcionista e que fora promovida em poucos meses para auxiliar de escritório. Há 4 anos havia assumido a chefia do setor, que contava com 10 funcionários e alta demanda de trabalho. Desde então, vinha sofrendo cobranças excessivas e desrespeitosas de sua chefia imediata, inclusive com comentários em relação a sua etnia. Naquela época, começaram os sintomas descritos. Com base no relato, o médico da UBS prescreveu fluoxetina. A paciente retornou à UBS após 2 meses de uso do medicamento e relatou que a situação piorara drasticamente: solicitara um aumento salarial compatível com a função exercida que culminou com sua demissão imediatamente após o afastamento de 14 dias por doença. Diante do exposto, qual a primeira conduta a ser tomada?",
    "options": [
      "Emissão de Comunicação de Acidente de Trabalho (CAT)",
      "Avaliação da capacidade laboral e do nexo ocupacional",
      "Encaminhamento para psicoterapia",
      "Ajuste na dose do antidepressivo"
    ],
    "correctAnswer": 1,
    "explanation": "Quadro de esgotamento profissional e sofrimento mental relacionado ao trabalho (cobranças excessivas, assédio moral e racial), com piora e demissão. A primeira conduta é avaliar a capacidade laboral e estabelecer o nexo entre o adoecimento e o trabalho — que fundamenta a emissão de CAT, a notificação no SINAN (transtorno mental relacionado ao trabalho) e o acesso aos direitos previdenciários e trabalhistas.",
    "commentary": "Emitir CAT (A): a CAT é consequência do reconhecimento do nexo; primeiro se avalia o nexo ocupacional.\n\nPsicoterapia (C) e ajuste do antidepressivo (D): fazem parte do tratamento, mas a pergunta pede a primeira conduta diante da questão ocupacional.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 1.999/2023 (Lista de Doenças Relacionadas ao Trabalho); Resolução CFM nº 2.323/2022",
    "tags": [
      "saúde do trabalhador",
      "nexo ocupacional",
      "burnout",
      "assédio moral"
    ],
    "tip": "Adoecimento mental pelo trabalho: avaliar capacidade laboral e nexo; depois CAT e notificação."
  },
  {
    "id": "hcpa2025-96",
    "module": "Saúde Coletiva",
    "text": "Assinale a assertiva correta sobre as intervenções breves em pessoas com uso problemático de álcool.",
    "options": [
      "O aconselhamento para parar de beber é mais efetivo quando feito de forma diretiva e prática (como uma prescrição): o paciente deve parar de beber por sua saúde",
      "A técnica de balança entre prós e contras de manter o comportamento está indicada no estágio pré-contemplativo",
      "O aconselhamento para pessoas com problemas com uso de álcool deve focar na empatia e autonomia da pessoa",
      "Considerando que os problemas com uso de álcool atingem mais homens do que mulheres, os homens devem receber aconselhamento mais frequente em relação a diminuir ou suspender o uso de álcool"
    ],
    "correctAnswer": 2,
    "explanation": "As intervenções breves para uso problemático de álcool, baseadas na entrevista motivacional, devem focar na empatia, no respeito à autonomia e na responsabilidade da pessoa pela mudança (modelo FRAMES: feedback, responsabilidade, aconselhamento, menu de opções, empatia e autoeficácia).",
    "commentary": "Aconselhamento diretivo como prescrição (A): abordagens confrontativas e prescritivas geram resistência e são menos eficazes.\n\nBalança decisória no pré-contemplativo (B): é técnica típica do estágio contemplativo (ambivalência); no pré-contemplativo, oferecem-se informação e feedback.\n\nAconselhar mais os homens (D): o rastreamento e o aconselhamento devem ser oferecidos a todos, independentemente do sexo.",
    "reference": "OMS – AUDIT e intervenções breves (2001); Ministério da Saúde – Caderno de Atenção Básica nº 34 (Saúde Mental)",
    "tags": [
      "uso de álcool",
      "intervenção breve",
      "entrevista motivacional",
      "atenção primária à saúde"
    ],
    "tip": "Intervenção breve: empatia e autonomia, não sermão."
  },
  {
    "id": "hcpa2025-97",
    "module": "Saúde Coletiva",
    "text": "Primigesta de 25 anos, com 6 semanas de gestação, procurou uma UBS em Porto Alegre para o pré-natal. Não havia registro das vacinações prévias. Assinale a assertiva que contempla o conjunto de vacinas que a gestante deve receber antes do parto.",
    "options": [
      "Vacina dTpa (tríplice bacteriana adulto - difteria, tétano e coqueluche acelular, 1 dose); VFA (vacina contra febre amarela atenuada) após a 20ª semana de gestação; influenza em qualquer período de gestação",
      "Vacina dTpa (1 dose) após a 20ª semana de gestação; vacina contra influenza em qualquer período de gestação",
      "Vacina dT (difteria e tétano, 2 doses); vacina contra influenza em qualquer período de gestação; vacina dTpa (1 dose) após a 20ª semana de gestação",
      "Vacina dT (3 doses); influenza em qualquer período de gestação; VFA após a 20ª semana de gestação"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante sem registro vacinal deve receber esquema completo contra difteria e tétano (3 doses): 2 doses de dT e 1 de dTpa (esta a partir da 20ª semana, para proteger o recém-nascido contra coqueluche), com intervalo de 60 dias (mínimo 30). Também se indica a vacina influenza em qualquer idade gestacional (e hepatite B se não vacinada).",
    "commentary": "dTpa única com febre amarela após 20 semanas (A): a febre amarela (vírus vivo) não é rotina na gestação, e uma dose não completa o esquema em não vacinada.\n\nSó dTpa e influenza (B): sem histórico vacinal, uma dose não basta.\n\nTrês doses de dT e febre amarela (D): a dTpa deve fazer parte do esquema, e a febre amarela não é indicada de rotina.",
    "reference": "Ministério da Saúde – Calendário de vacinação da gestante (2024); Manual de Normas e Procedimentos para Vacinação",
    "tags": [
      "vacinação na gestação",
      "dTpa",
      "dT",
      "pré-natal"
    ],
    "tip": "Gestante sem vacina: 2 dT + 1 dTpa (≥ 20 semanas) + influenza."
  },
  {
    "id": "hcpa2025-98",
    "module": "Saúde Coletiva",
    "text": "Dermatose ocupacional é caracterizada por qualquer doença de pele, unhas e anexos, desencadeada ou agravada por atividades ocupacionais. As doenças podem ser classificadas de acordo com os mecanismos etiológicos: agentes mecânicos, de natureza física, biológica ou química. Com base nessa informação, associe as lesões de pele (coluna da esquerda) aos agentes causadores mais prováveis (coluna da direita).\n\nColuna da esquerda:\n1 - Eritema pérnio\n2 - Miliária\n3 - Dermatite de contato alérgica\n4 - Dermatite de contato irritativa\n5 - Queimadura química\n\nColuna da direita:\n( ) Detergentes\n( ) Sulfato de níquel\n( ) Hidróxido de sódio (soda cáustica)\n( ) Frio\n( ) Calor\n\nA sequência numérica correta, de cima para baixo, da coluna da direita, é",
    "options": [
      "3–4–1–2–5",
      "3–4–5–1–2",
      "4–3–1–2–5",
      "4–3–5–1–2"
    ],
    "correctAnswer": 3,
    "explanation": "Associação: detergentes causam dermatite de contato irritativa (4); sulfato de níquel é o alérgeno clássico da dermatite de contato alérgica (3); hidróxido de sódio (soda cáustica) causa queimadura química (5); o frio causa eritema pérnio (1); o calor causa miliária (2). Sequência: 4–3–5–1–2.",
    "commentary": "3–4–1–2–5 (A), 3–4–5–1–2 (B) e 4–3–1–2–5 (C): invertem a dermatite irritativa (detergente) com a alérgica (níquel) ou trocam a soda cáustica com frio e calor.",
    "reference": "Ministério da Saúde – Dermatoses ocupacionais (Protocolos de complexidade diferenciada, 2006)",
    "tags": [
      "dermatoses ocupacionais",
      "dermatite de contato",
      "saúde do trabalhador",
      "dermatologia"
    ],
    "tip": "Detergente: irritativa. Níquel: alérgica. Soda: queimadura química. Frio: pérnio. Calor: miliária."
  },
  {
    "id": "hcpa2025-99",
    "module": "Saúde Coletiva",
    "text": "A notificação de incidentes ocorridos na assistência ao paciente (eventos adversos) é uma das maneiras de identificar falhas. A partir da análise das situações notificadas, os serviços de saúde podem planejar sistemas de cuidados mais seguros. Assinale a assertiva correta sobre sistemas de notificação de incidentes.",
    "options": [
      "O objetivo das notificações é identificar os profissionais envolvidos para promover seu treinamento e evitar que se envolvam em novos incidentes",
      "Os incidentes notificados, por questões de privacidade institucional, não devem ser relatados aos pacientes",
      "Mesmo um incidente que não atinge o paciente deve ser notificado (por exemplo: uma troca de medicamento que é percebida antes da administração, e o erro é evitado)",
      "A notificação de incidentes ocorridos em uma instituição de saúde só pode ser feita por profissionais de saúde que ali trabalham"
    ],
    "correctAnswer": 2,
    "explanation": "Devem ser notificados todos os incidentes de segurança, inclusive os quase-erros (near miss) — que não atingem o paciente —, pois revelam falhas do sistema e permitem prevenir danos. A notificação tem caráter educativo e não punitivo (cultura justa).",
    "commentary": "Identificar profissionais para treiná-los (A): o objetivo é identificar falhas do sistema, sem caráter punitivo.\n\nNão relatar aos pacientes (B): a comunicação aberta ao paciente sobre incidentes que o atingem (disclosure) é recomendada.\n\nSó profissionais podem notificar (D): pacientes e familiares também podem notificar (por exemplo, no Notivisa).",
    "reference": "Ministério da Saúde – Programa Nacional de Segurança do Paciente (Portaria nº 529/2013); ANVISA – RDC nº 36/2013",
    "tags": [
      "segurança do paciente",
      "notificação de incidentes",
      "eventos adversos",
      "gestão em saúde"
    ],
    "tip": "Notificar também o quase-erro; foco no sistema, não na culpa."
  },
  {
    "id": "hcpa2025-100",
    "module": "Saúde Coletiva",
    "text": "Homem de 21 anos sofreu picada de cobra (espécie não identificada) no membro inferior esquerdo (MIE) que causou lesão necrótica extensa e profunda. Após 24 horas, foi internado na UTI com alteração da coagulação, celulite extensa no MIE, sepse e necessidade de ventilação mecânica. No sétimo dia, passou a apresentar anúria, acidose, insuficiência renal aguda e hiperpotassemia, evoluindo com parada cardiorrespiratória refratária e indo a óbito. Assinale a assertiva correta sobre o fornecimento do atestado de óbito.",
    "options": [
      "Por se tratar de causa renal, o mais adequado é que a equipe da Nefrologia forneça o atestado de óbito",
      "Como a etiologia da nefrite é obscura, é recomendável propor à família que seja realizada necropsia no Serviço de Patologia do hospital, o qual fornecerá o atestado de óbito",
      "Como a equipe assistencial conhece o caso e seguindo o que recomenda o Código de Ética Médica, o plantonista da UTI deve fornecer o atestado de óbito, indicando insuficiência renal aguda como causa principal",
      "A equipe médica está impedida de fornecer o atestado de óbito e deve indicar a realização de exame anatomopatológico no Instituto Médico Legal"
    ],
    "correctAnswer": 3,
    "explanation": "A morte decorreu, em última instância, de acidente ofídico — causa externa (agressão por animal peçonhento) —, mesmo que o óbito tenha ocorrido dias depois por insuficiência renal. Mortes por causas externas devem ser encaminhadas ao Instituto Médico Legal, e a declaração de óbito é emitida pelo médico legista; a equipe assistencial não deve emiti-la.",
    "commentary": "Atestado pela Nefrologia (A) e pelo plantonista com IRA como causa principal (C): a causa básica é externa (picada de cobra), o que exige IML.\n\nNecropsia no Serviço de Patologia do hospital (B): o SVO e a patologia hospitalar atendem mortes naturais; causas externas vão ao IML.",
    "reference": "Ministério da Saúde – Declaração de Óbito: manual de instruções (2022); Resolução CFM nº 1.779/2005",
    "tags": [
      "declaração de óbito",
      "causas externas",
      "IML",
      "acidente ofídico",
      "ética médica"
    ],
    "tip": "Causa externa (inclusive picada de animal), mesmo dias depois: IML."
  }
];
