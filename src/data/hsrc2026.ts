import { Question } from '../types';

// HSRC 2026 (SP) — Hospital Santa Rita de Cássia, residência médica (acesso direto). 50 questões, 5 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const HSRC_2026_QUESTIONS: Question[] = [
  {
    "id": "hsrc2026-1",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos de idade do sexo masculino procurou atendimento médico na Unidade de Pronto Atendimento devido ao surgimento de dispneia aos grandes esforços associada a palpitações há 8 semanas, além de astenia progressiva. Negou febre, dispneia paroxística noturna, edemas, precordialgia, tosse, cianose, sibilos, dor torácica ou hemoptise. Informou que estava vivendo em situação de rua há 1 ano, período em que passou a ter alimentação muito precária, com consequente perda ponderal de 8 Kg. Negou histórico de comorbidades, tabagismo, uso de drogas ilícitas ou etilismo. Ao exame, apresentava-se emagrecido, lúcido e orientado, com mucosas pálidas, anictérico, acianótico e sem adenomegalias. Sem anormalidades no exame cardiovascular, pulmonar, abdominal e neurológico. O hemograma do paciente mostrou hemoglobina de 8,4 g/dL, VCM 112 fL, leucócitos 3.000/mL e plaquetas 115.000/mL. No esfregaço sanguíneo identificou-se a presença de hemácias macrocíticas e neutrófilos hipersegmentados.\n\nConsiderando o caso acima, assinale a alternativa que apresenta a deficiência vitamínica mais provável responsável pela pancitopenia observada no paciente.",
    "options": [
      "Vitamina B1",
      "Vitamina B2",
      "Vitamina B3",
      "Vitamina B9",
      "Vitamina B12"
    ],
    "correctAnswer": 3,
    "explanation": "Anemia macrocítica (VCM 112 fL) com pancitopenia e neutrófilos hipersegmentados: anemia megaloblástica, por deficiência de folato (B9) ou cobalamina (B12).\n\nO que diferencia aqui é a história: um ano de alimentação muito precária, sem alterações neurológicas. Os estoques de folato duram apenas 3 a 4 meses, enquanto os de B12 duram anos (3 a 5). Além disso, a deficiência de B12 costuma vir acompanhada de alterações neurológicas (neuropatia, perda da sensibilidade vibratória, ataxia), ausentes no exame. Por isso, o mais provável é deficiência de ácido fólico.",
    "commentary": "Vitamina B1 (A): a tiamina causa beribéri (insuficiência cardíaca de alto débito, neuropatia) e Wernicke-Korsakoff; não causa megaloblastose.\n\nVitamina B2 (B): a riboflavina causa queilite angular, glossite e dermatite seborreica.\n\nVitamina B3 (C): a niacina causa pelagra (dermatite, diarreia e demência).\n\nVitamina B12 (E): também causa megaloblastose, mas a reserva dura anos, e a deficiência costuma trazer sinais neurológicos, ausentes aqui.",
    "reference": "Harrison — Anemias megaloblásticas / ABHH",
    "tags": [
      "anemia megaloblástica",
      "deficiência de folato",
      "pancitopenia",
      "desnutrição"
    ],
    "tip": "Megaloblástica sem neurologia, por má alimentação recente = folato. Com neurologia = B12."
  },
  {
    "id": "hsrc2026-2",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos de idade do sexo masculino procurou atendimento médico na Unidade de Pronto Atendimento devido ao surgimento de dispneia aos grandes esforços associada a palpitações há 8 semanas, além de astenia progressiva. Negou febre, dispneia paroxística noturna, edemas, precordialgia, tosse, cianose, sibilos, dor torácica ou hemoptise. Informou que estava vivendo em situação de rua há 1 ano, período em que passou a ter alimentação muito precária, com consequente perda ponderal de 8 Kg. Negou histórico de comorbidades, tabagismo, uso de drogas ilícitas ou etilismo. Ao exame, apresentava-se emagrecido, lúcido e orientado, com mucosas pálidas, anictérico, acianótico e sem adenomegalias. Sem anormalidades no exame cardiovascular, pulmonar, abdominal e neurológico. O hemograma do paciente mostrou hemoglobina de 8,4 g/dL, VCM 112 fL, leucócitos 3.000/mL e plaquetas 115.000/mL. No esfregaço sanguíneo identificou-se a presença de hemácias macrocíticas e neutrófilos hipersegmentados.\n\nPacientes com quadros mais severos da mesma hipovitaminose do paciente do caso acima podem apresentar",
    "options": [
      "Síndrome de Wernicke-Korsakoff.",
      "Icterícia por hiperbilirrubinemia indireta.",
      "Queilite angular, dermatite seborreica e vascularização da córnea.",
      "Dermatite, diarreia e demência.",
      "Neuropatia com diminuição da sensação de vibração."
    ],
    "correctAnswer": 1,
    "explanation": "Na anemia megaloblástica grave, a eritropoese é ineficaz: os precursores eritroides defeituosos são destruídos ainda na medula (hemólise intramedular). Isso libera hemoglobina e eleva a bilirrubina indireta (podendo dar icterícia leve) e a LDH, muitas vezes a níveis bem altos.\n\nEsse achado é comum às deficiências de folato e de B12.",
    "commentary": "Wernicke-Korsakoff (A): deficiência de tiamina (B1).\n\nQueilite angular, dermatite seborreica e vascularização da córnea (C): deficiência de riboflavina (B2).\n\nDermatite, diarreia e demência (D): pelagra, por deficiência de niacina (B3).\n\nNeuropatia com perda da sensibilidade vibratória (E): característica da deficiência de B12 (degeneração combinada subaguda da medula), não do folato.",
    "reference": "Harrison — Anemias megaloblásticas",
    "tags": [
      "anemia megaloblástica",
      "eritropoese ineficaz",
      "hemólise intramedular",
      "deficiência de folato"
    ],
    "tip": "Megaloblástica: LDH muito alta e bilirrubina indireta elevada (hemólise na medula)."
  },
  {
    "id": "hsrc2026-3",
    "topography": "2.2",
    "topic": "Valvopatias",
    "module": "Clínica Médica",
    "text": "Durante o exame físico de uma paciente de 38 anos de idade com histórico de febre reumática na infância, o médico assistente fez o diagnóstico de estenose mitral ao realizar a ausculta cardíaca. A melhor descrição das características do sopro cardíaco decorrente deste tipo de lesão valvar nesse caso é",
    "options": [
      "Sopro sistólico no foco mitral, seguido de um ruflar pré-diastólico, melhor audível com a campânula do estetoscópio, com o paciente em decúbito lateral esquerdo.",
      "Sopro protodiastólico irradiado para o pescoço, melhor audível com o diafragma do estetoscópio no foco mitral, com o paciente em posição de Pachón.",
      "Sopro diastólico com reforço pré-sistólico, melhor audível com o paciente em decúbito lateral esquerdo, com a campânula do estetoscópio no foco mitral.",
      "Sopro protomesodiastólico no foco mitral, melhor audível com o diafragma do estetoscópio, irradiado para o pescoço, que engloba a segunda bulha, que está hipofonética.",
      "Sopro telediastólico com irradiação para a fúrcula, melhor audível no foco mitral com a campânula do estetoscópio e o paciente em posição sentada."
    ],
    "correctAnswer": 2,
    "explanation": "Na estenose mitral, o sangue passa com dificuldade do átrio para o ventrículo esquerdo durante a diástole. O sopro é diastólico, em ruflar, de baixa frequência — por isso é melhor ouvido com a campânula, no foco mitral, com o paciente em decúbito lateral esquerdo (posição de Pachón).\n\nEm ritmo sinusal, a contração atrial no fim da diástole aumenta o fluxo e produz o reforço pré-sistólico. Outros achados: B1 hiperfonética e estalido de abertura.",
    "commentary": "Sopro sistólico seguido de ruflar (A): o sopro da estenose mitral não é sistólico; a descrição mistura achados.\n\nProtodiastólico para o pescoço com diafragma (B): é a descrição da insuficiência aórtica (aspirativo, de alta frequência, em borda esternal esquerda), não da estenose mitral.\n\nProtomesodiastólico para o pescoço englobando B2 (D): sopros que irradiam para o pescoço são aórticos; o da estenose mitral fica localizado no ápice.\n\nTelediastólico para a fúrcula, sentado (E): irradiação e posição erradas; o paciente sentado e inclinado para frente favorece os sopros aórticos.",
    "reference": "Porto — Semiologia médica / Diretriz Brasileira de Valvopatias (SBC 2020)",
    "tags": [
      "estenose mitral",
      "valvopatias",
      "febre reumática",
      "ausculta cardíaca"
    ],
    "tip": "Estenose mitral: ruflar diastólico com reforço pré-sistólico, campânula, decúbito lateral esquerdo."
  },
  {
    "id": "hsrc2026-4",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Paciente de 23 anos de idade do sexo masculino procurou atendimento médico emergencial por acidente ofídico, porém não conseguiu identificar o animal quando questionado. O médico assistente sabe que a apresentação clínica é fundamental para direcionar a conduta terapêutica. Assinale a alternativa que descreve o quadro clínico de acidente elapídico, segundo o Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos do Ministério da Saúde.",
    "options": [
      "Fraqueza muscular progressiva, com ptose palpebral, oftalmoplegia e a presença de fácies miastênica.",
      "Dor e edema no local da picada, de intensidade variável, com equimoses e sangramento no ponto da picada.",
      "Edema local importante, equimose e dor, porém sem alteração da coagulação.",
      "Síndrome vagal com bradicardia, cólicas abdominais e diarreia.",
      "Insuficiência renal aguda, com necrose tubular geralmente de instalação nas primeiras 48 horas."
    ],
    "correctAnswer": 0,
    "explanation": "O veneno da coral-verdadeira (Micrurus, acidente elapídico) é neurotóxico: bloqueia a junção neuromuscular e provoca fraqueza progressiva, ptose palpebral, oftalmoplegia, diplopia e fácies miastênica (\"neurotóxica\"), podendo evoluir para insuficiência respiratória por paralisia da musculatura.\n\nTodo acidente elapídico é considerado potencialmente grave e recebe soro antielapídico. A neostigmina pode ajudar a reverter a fraqueza.",
    "commentary": "Dor, edema e sangramento local (B): é o quadro do acidente botrópico (jararaca), com ação proteolítica e coagulante.\n\nEdema, equimose e dor sem coagulopatia (C): não corresponde a nenhum quadro típico; o botrópico costuma alterar a coagulação, e o elapídico tem poucos achados locais.\n\nSíndrome vagal (D): é característica do acidente laquético (surucucu), junto com manifestações locais e coagulopatia.\n\nInsuficiência renal aguda (E): principal complicação do acidente crotálico (cascavel), por rabdomiólise.",
    "reference": "Ministério da Saúde — Manual de diagnóstico e tratamento de acidentes por animais peçonhentos / Guia de Vigilância em Saúde",
    "tags": [
      "acidentes ofídicos",
      "acidente elapídico",
      "animais peçonhentos",
      "soro antielapídico"
    ],
    "tip": "Coral = neurotóxico (ptose, fácies miastênica). Cascavel = rabdomiólise e IRA. Surucucu = vagal."
  },
  {
    "id": "hsrc2026-5",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Paciente de 16 anos de idade do sexo feminino procurou atendimento em Unidade de Pronto Atendimento com queixas de febre de 38,3 °C há 7 dias, acompanhada de tosse seca, odinofagia alta, mialgias, otalgia à esquerda e, há 2 dias, surgimento de lesões cutâneas com prurido ocasional. O exame físico mostrou a presença de eritema leve na orofaringe, hiperemia timpânica à esquerda. Exames cardiovascular e pulmonar normais. Apresentava lesões maculopapulares simétricas de aspecto “em alvo” na face e nos membros superiores e inferiores. A radiografia de tórax revelou infiltrado intersticial difuso bilateralmente.\n\nO agente etiológico mais provável e a antibioticoterapia adequada ao caso acima é",
    "options": [
      "Streptococcus pneumoniae e Amoxicilina.",
      "Staphylococcus aureus e Oxacilina.",
      "Haemophilus influenzae e Cefuroxima.",
      "Chlamydia pneumoniae e Levofloxacino.",
      "Mycoplasma pneumoniae e Azitromicina."
    ],
    "correctAnswer": 4,
    "explanation": "Adolescente com febre por uma semana, tosse seca, faringite, miringite (otalgia com hiperemia timpânica), mialgia, lesões em alvo (eritema multiforme) e radiografia com infiltrado intersticial difuso desproporcional ao exame físico pulmonar normal: pneumonia atípica por Mycoplasma pneumoniae.\n\nO micoplasma não tem parede celular, então betalactâmicos não funcionam. O tratamento é com macrolídeo (azitromicina); doxiciclina ou quinolona respiratória são alternativas.",
    "commentary": "S. pneumoniae e amoxicilina (A): pneumonia típica, com início abrupto, tosse produtiva e consolidação lobar.\n\nS. aureus e oxacilina (B): pneumonia grave, frequentemente após influenza, com cavitações e pneumatoceles.\n\nH. influenzae e cefuroxima (C): mais comum em DPOC e idosos, com quadro de pneumonia típica.\n\nChlamydia pneumoniae e levofloxacino (D): também é atípica, mas os achados extrapulmonares (eritema multiforme, miringite) apontam para micoplasma, e em adolescentes o macrolídeo é a escolha.",
    "reference": "Diretrizes brasileiras para pneumonia adquirida na comunidade (SBPT) / Mandell — Infectious Diseases",
    "tags": [
      "pneumonia atípica",
      "micoplasma",
      "eritema multiforme",
      "azitromicina"
    ],
    "tip": "Jovem + tosse seca + miringite + eritema multiforme + RX pior que o exame = micoplasma."
  },
  {
    "id": "hsrc2026-6",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Paciente de 16 anos de idade do sexo feminino procurou atendimento em Unidade de Pronto Atendimento com queixas de febre de 38,3 °C há 7 dias, acompanhada de tosse seca, odinofagia alta, mialgias, otalgia à esquerda e, há 2 dias, surgimento de lesões cutâneas com prurido ocasional. O exame físico mostrou a presença de eritema leve na orofaringe, hiperemia timpânica à esquerda. Exames cardiovascular e pulmonar normais. Apresentava lesões maculopapulares simétricas de aspecto “em alvo” na face e nos membros superiores e inferiores. A radiografia de tórax revelou infiltrado intersticial difuso bilateralmente.\n\nEm casos como esse, pacientes podem apresentar também",
    "options": [
      "Elevação dos níveis séricos das transaminases em mais de 10 vezes.",
      "Dissociação pulso-temperatura ou sinal de Faget.",
      "Boa resposta terapêutica às aminopenicilinas.",
      "Elevação dos níveis séricos de crioaglutininas.",
      "Formação de derrame pleural volumoso."
    ],
    "correctAnswer": 3,
    "explanation": "A infecção por Mycoplasma pneumoniae induz a produção de crioaglutininas (IgM contra o antígeno I das hemácias) em cerca de metade dos pacientes, o que pode causar anemia hemolítica autoimune por anticorpos frios.\n\nOutras manifestações extrapulmonares incluem miringite bolhosa, eritema multiforme/Stevens-Johnson, mucosite (MIRM), artralgia e encefalite.",
    "commentary": "Transaminases > 10 vezes (A): elevação leve pode ocorrer, mas aumento acentuado é sugestivo de outros agentes (ex.: Legionella, hepatites).\n\nDissociação pulso-temperatura (B): o sinal de Faget é clássico da febre amarela; também é descrito na legionelose e na febre tifoide.\n\nBoa resposta às aminopenicilinas (C): o micoplasma não tem parede celular e é naturalmente resistente aos betalactâmicos.\n\nDerrame pleural volumoso (E): derrame é raro e, quando ocorre, pequeno.",
    "reference": "Mandell — Infectious Diseases: Mycoplasma pneumoniae / SBPT",
    "tags": [
      "micoplasma",
      "crioaglutininas",
      "anemia hemolítica por anticorpos frios"
    ],
    "tip": "Micoplasma: crioaglutininas, anemia hemolítica a frio, miringite bolhosa."
  },
  {
    "id": "hsrc2026-7",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Paciente de 54 anos de idade do sexo masculino procurou Unidade de Atenção Básica para acompanhamento ambulatorial de seu quadro de Hipertensão Arterial Sistêmica diagnosticado há 4 anos. O paciente questionou se a utilização de certas substâncias e medicamentos poderiam exercer algum efeito deletério sobre o seu tratamento e controle pressórico. Relatou que recentemente teve quadro de síndrome gripal e foi medicado com solução salina hipertônica nasal, descongestionante oral e anti inflamatório não esteroidal via oral. Além disso, apreciava tomar todo dia uma dose de aguardente e 4 xícaras de café. O médico assistente solicitou a Monitoração Residencial da Pressão Arterial para o tratamento e o paciente pediu informações sobre a forma correta de realizá-la.\n\nAssinale a alternativa que apresenta a orientação adequada ao paciente nesse caso, baseando-se na diretriz americana publicada em 2025: Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines.",
    "options": [
      "Não há necessidade de limitar a ingestão diária de cafeína.",
      "A aplicação de solução salina hipertônica nasal está contraindicada.",
      "Os anti-inflamatórios não esteroidais orais não interferem no tratamento.",
      "Preferir bebidas alcoólicas fermentadas às destiladas.",
      "Evitar descongestionantes orais casos de hipertensão grave ou não controlada."
    ],
    "correctAnswer": 4,
    "explanation": "A diretriz ACC/AHA 2025 lista substâncias que podem elevar a pressão ou interferir no tratamento. Os descongestionantes orais simpatomiméticos (pseudoefedrina, fenilefrina) aumentam a pressão e devem ser evitados por hipertensos, sobretudo com hipertensão grave ou não controlada, preferindo-se alternativas como solução salina nasal ou anti-histamínicos.",
    "commentary": "Cafeína sem limite (A): a recomendação é moderar a cafeína (em geral até cerca de 300 mg/dia) e evitá-la na hipertensão não controlada; quatro xícaras ficam no limite.\n\nSolução salina hipertônica nasal contraindicada (B): é uma alternativa segura aos descongestionantes; o sódio absorvido é desprezível.\n\nAINEs não interferem (C): os AINEs retêm sódio, elevam a pressão e reduzem o efeito dos anti-hipertensivos; devem ser evitados.\n\nPreferir fermentadas a destiladas (D): o efeito pressórico depende da quantidade de álcool, não do tipo de bebida; a recomendação é reduzir ou suspender o consumo.",
    "reference": "ACC/AHA 2025 — Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults",
    "tags": [
      "hipertensão arterial",
      "descongestionantes",
      "interações medicamentosas",
      "AINEs"
    ],
    "tip": "Hipertenso: evitar AINE e descongestionante oral; moderar álcool e cafeína."
  },
  {
    "id": "hsrc2026-8",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Paciente de 54 anos de idade do sexo masculino procurou Unidade de Atenção Básica para acompanhamento ambulatorial de seu quadro de Hipertensão Arterial Sistêmica diagnosticado há 4 anos. O paciente questionou se a utilização de certas substâncias e medicamentos poderiam exercer algum efeito deletério sobre o seu tratamento e controle pressórico. Relatou que recentemente teve quadro de síndrome gripal e foi medicado com solução salina hipertônica nasal, descongestionante oral e anti inflamatório não esteroidal via oral. Além disso, apreciava tomar todo dia uma dose de aguardente e 4 xícaras de café. O médico assistente solicitou a Monitoração Residencial da Pressão Arterial para o tratamento e o paciente pediu informações sobre a forma correta de realizá-la.\n\nA orientação ao paciente, baseando-se nas Diretrizes Brasileiras de Medidas da Pressão Arterial Dentro e Fora do Consultório de 2023, é",
    "options": [
      "Utilizar sempre o mesmo braço para realizar as medidas durante todo o exame. O braço escolhido será o de menor pressão arterial no consultório.",
      "Sentar e relaxar antes da aferição, por pelo menos 3 minutos, idealmente 5 minutos, e não falar durante as medições.",
      "Colocar o braço estendido ao longo do corpo com a palma da mão para cima.",
      "Evitar o consumo de cafeína ou praticar exercícios 30 minutos após as medições.",
      "Salientar que, na maioria das pessoas, a PA fora do consultório é mais alta."
    ],
    "correctAnswer": 1,
    "explanation": "Na Monitorização Residencial da Pressão Arterial (MRPA), o paciente deve repousar sentado por pelo menos 3 minutos (idealmente 5), com as costas apoiadas, pernas descruzadas e pés no chão, e não falar durante as medidas. São feitas medidas pela manhã e à noite, em duplicata, por vários dias.\n\nA alternativa B reproduz essa orientação da Diretriz Brasileira de Medidas da PA de 2023.",
    "commentary": "Mesmo braço, o de menor pressão (A): usa-se sempre o mesmo braço, mas o escolhido é o de maior pressão no consultório.\n\nBraço estendido ao longo do corpo (C): o braço deve ficar apoiado na altura do coração, com a palma para cima e cotovelo levemente fletido.\n\nEvitar cafeína e exercício 30 minutos após (D): a restrição é antes das medidas, não depois.\n\nPA fora do consultório mais alta (E): na maioria das pessoas a PA no consultório é maior (efeito do avental branco).",
    "reference": "Diretrizes Brasileiras de Medidas da Pressão Arterial Dentro e Fora do Consultório — SBC 2023",
    "tags": [
      "MRPA",
      "medida da pressão arterial",
      "hipertensão arterial"
    ],
    "tip": "MRPA: sentado, 3–5 min de repouso, sem falar, braço apoiado na altura do coração."
  },
  {
    "id": "hsrc2026-9",
    "topography": "3.2",
    "topic": "Hepatocarcinoma",
    "module": "Clínica Médica",
    "text": "Um indivíduo com cirrose hepática secundária a hepatite C crônica, com recente diagnóstico de carcinoma hepatocelular, foi consultar-se após a realização de exames complementares. O médico assistente notou anormalidade nos resultados que o fez suspeitar de síndrome paraneoplásica relacionada ao carcinoma hepatocelular. A anormalidade ocorre em 3% a 12% dos pacientes com carcinoma hepatocelular e é uma das síndromes paraneoplásicas mais conhecidas que complicam esse tumor é o(a)",
    "options": [
      "Eritrocitose.",
      "Hiperglicemia.",
      "Hipocalcemia.",
      "Aumento da excreção urinária de Ácido 5-Hidroxiindolacético.",
      "Hiponatremia com queda da osmolalidade plasmática."
    ],
    "correctAnswer": 0,
    "explanation": "As síndromes paraneoplásicas mais conhecidas do carcinoma hepatocelular são a hipoglicemia (por consumo pelo tumor ou produção de IGF-2 incompleto), a eritrocitose (por produção de eritropoetina pelo tumor), a hipercalcemia (PTHrP) e a hipercolesterolemia.\n\nA eritrocitose ocorre em 3% a 12% dos casos, a faixa descrita no enunciado, sendo a resposta da banca.",
    "commentary": "Hiperglicemia (B): o que ocorre é hipoglicemia, não hiperglicemia.\n\nHipocalcemia (C): o tumor pode causar hipercalcemia, por PTHrP.\n\nAumento do 5-HIAA (D): marcador da síndrome carcinoide (tumores neuroendócrinos).\n\nHiponatremia hiposmolar (E): SIADH é típica do carcinoma de pequenas células de pulmão.",
    "reference": "Harrison — Tumores hepáticos / AASLD",
    "tags": [
      "carcinoma hepatocelular",
      "síndromes paraneoplásicas",
      "eritrocitose"
    ],
    "tip": "CHC paraneoplásico: hipoglicemia, eritrocitose, hipercalcemia e hipercolesterolemia."
  },
  {
    "id": "hsrc2026-10",
    "topography": "10",
    "topic": "Chikungunya",
    "module": "Clínica Médica",
    "text": "Paciente de 48 anos de idade do sexo feminino procurou a Unidade Básica de Saúde com queixa de dores articulares intensas há 4 meses. Relatou que há 5 meses foi acometida por quadro infeccioso agudo, com febre, exantema e dores articulares. O diagnóstico à época foi o de infecção por Chikungunya. Apesar de ter utilizado dipirona e anti-inflamatórios não esteroidais, evoluiu com persistência da dor articular em joelhos, punhos e cotovelos. Houve piora progressiva da intensidade das dores articulares com concomitante surgimento de sinais flogísticos nas articulações e rigidez matinal. A medicação inicialmente prescrita foi hidroxicloroquina, porém não houve boa resposta terapêutica. Ao exame físico, apresentava artrite em joelhos, punhos e cotovelos. De acordo com a segunda edição da publicação Chikungunya: Manejo Clínico do Ministério da Saúde, a droga de escolha para o tratamento do quadro da paciente é",
    "options": [
      "Colchicina.",
      "Sais de ouro.",
      "Metotrexato.",
      "Opioide.",
      "Imunobiológico."
    ],
    "correctAnswer": 2,
    "explanation": "Chikungunya na fase crônica (sintomas articulares por mais de 3 meses), com artrite inflamatória (sinais flogísticos, rigidez matinal) e sem resposta à hidroxicloroquina. Pelo manual do Ministério da Saúde, a fase crônica com acometimento inflamatório é tratada com hidroxicloroquina (com ou sem sulfassalazina) e, na falha ou em quadros mais intensos, o metotrexato é a droga de escolha, como nas artrites inflamatórias crônicas.",
    "commentary": "Colchicina (A): usada em gota e outras doenças por cristais, não em artrite crônica pós-chikungunya.\n\nSais de ouro (B): drogas antigas, praticamente abandonadas, sem papel no protocolo.\n\nOpioide (D): pode ser usado para dor intensa, mas não trata o processo inflamatório.\n\nImunobiológico (E): fica para casos refratários ao metotrexato, com acompanhamento reumatológico.",
    "reference": "Ministério da Saúde — Chikungunya: manejo clínico (2ª edição)",
    "tags": [
      "chikungunya",
      "artrite crônica",
      "metotrexato",
      "arboviroses"
    ],
    "tip": "Chikungunya crônica inflamatória: hidroxicloroquina → metotrexato."
  },
  {
    "id": "hsrc2026-11",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Durante uma consulta, um menino de 6 anos de idade apresenta histórico de evacuações infrequentes e dolorosas, com episódios de fezes volumosas e escape fecal semanal. O exame físico é normal. Considerando os critérios de Roma IV e as recomendações da Sociedade Brasileira de Pediatria (SBP, 2024), o diagnóstico mais provável nesse caso é",
    "options": [
      "Constipação intestinal funcional.",
      "Constipação intestinal orgânica.",
      "Síndrome do intestino irritável.",
      "Disquesia do lactente.",
      "Doença celíaca."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 6 anos com evacuações infrequentes e dolorosas, fezes volumosas e escape fecal semanal, com exame físico normal: preenche os critérios de Roma IV para constipação funcional (dois ou mais critérios por pelo menos um mês, como ≤ 2 evacuações por semana, incontinência fecal, retenção, dor, fezes volumosas).\n\nO escape é por transbordamento ao redor do fecaloma. Tratamento: desimpactação, polietilenoglicol, mudanças de dieta e treinamento de toalete.",
    "commentary": "Constipação orgânica (B): não há sinais de alarme (início neonatal, atraso na eliminação de mecônio, distensão, déficit de crescimento, alterações neurológicas).\n\nSíndrome do intestino irritável (C): o quadro predominante é dor abdominal associada à alteração do hábito, e não fezes volumosas com escape.\n\nDisquesia do lactente (D): afeta lactentes menores de 9 meses, que fazem esforço e choram antes de evacuar fezes moles.\n\nDoença celíaca (E): pode causar constipação, mas viria com perda de peso, distensão ou anemia.",
    "reference": "SBP 2024 — Constipação intestinal na infância / Critérios de Roma IV",
    "tags": [
      "constipação funcional",
      "critérios de Roma IV",
      "escape fecal"
    ],
    "tip": "Fezes volumosas + dor + escape fecal com exame normal = constipação funcional."
  },
  {
    "id": "hsrc2026-12",
    "topography": "3.1",
    "topic": "Doença inflamatória intestinal",
    "module": "Pediatria",
    "text": "Uma adolescente de 13 anos de idade apresenta dor abdominal recorrente há quatro meses, associada à perda ponderal e febre. Nesse caso, a conduta inicial mais apropriada é",
    "options": [
      "Considerar distúrbio funcional e iniciar suporte psicológico.",
      "Conversar com os familiares e evitar exames complementares.",
      "Solicitar exames para investigação de causa orgânica.",
      "Iniciar dieta pobre em FODMAPs.",
      "Iniciar tratamento empírico com probióticos."
    ],
    "correctAnswer": 2,
    "explanation": "Dor abdominal recorrente em adolescente associada a perda de peso e febre: esses são sinais de alarme que sugerem causa orgânica (doença inflamatória intestinal, infecções, tuberculose, neoplasias) e afastam a hipótese de distúrbio funcional.\n\nA conduta inicial é investigar com exames (hemograma, provas inflamatórias, calprotectina fecal, parasitológico, imagem e, conforme o caso, endoscopia).",
    "commentary": "Distúrbio funcional e suporte psicológico (A): só pode ser considerado na ausência de sinais de alarme.\n\nEvitar exames (B): com sinais de alarme, os exames são obrigatórios.\n\nDieta pobre em FODMAPs (D): estratégia para síndrome do intestino irritável, após excluir causas orgânicas.\n\nProbióticos empíricos (E): não tratam nem esclarecem um quadro com sinais de alarme.",
    "reference": "SBP — Dor abdominal crônica na infância / Critérios de Roma IV",
    "tags": [
      "dor abdominal recorrente",
      "sinais de alarme",
      "doença inflamatória intestinal"
    ],
    "tip": "Dor abdominal + perda de peso ou febre = sinal de alarme. Investigue causa orgânica."
  },
  {
    "id": "hsrc2026-13",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Pediatria",
    "text": "Uma criança de 6 anos de idade chega ao pronto socorro com febre alta, taquipneia e sonolência. O exame revela saturação de 90%, tempo de enchimento capilar aumentado e necessidade de oxigenoterapia. Segundo o Phoenix Sepsis Score (PSS), a pontuação de dois pontos está associada à presença de disfunção orgânica ameaçadora da vida. Com base nesses critérios, a conduta imediata do pediatra deve ser:",
    "options": [
      "Aguardar resultados laboratoriais antes de iniciar antibiótico.",
      "Indicar observação em enfermaria para monitoramento clínico.",
      "Solicitar exames de imagem torácica e acompanhamento ambulatorial.",
      "Iniciar antibioticoterapia e suporte hemodinâmico imediato.",
      "Prescrever antitérmico e alta com reavaliação em 24 horas."
    ],
    "correctAnswer": 3,
    "explanation": "Os critérios de Phoenix (2024) definem sepse pediátrica como infecção suspeita com escore ≥ 2 pontos, somando disfunções respiratória, cardiovascular, de coagulação e neurológica. Aqui há hipoxemia com necessidade de oxigênio, perfusão ruim e sonolência.\n\nCom sepse, a conduta é imediata: antibiótico na primeira hora e suporte hemodinâmico (bolus de cristaloide de 10–20 mL/kg com reavaliação, e droga vasoativa se necessário).",
    "commentary": "Aguardar exames para o antibiótico (A): o atraso aumenta a mortalidade; o antibiótico deve ser feito na primeira hora.\n\nObservação em enfermaria (B): criança com disfunção orgânica precisa de tratamento imediato e monitorização intensiva.\n\nImagem e acompanhamento ambulatorial (C): incompatível com a gravidade.\n\nAntitérmico e alta (E): ignora a disfunção orgânica e pode ser fatal.",
    "reference": "Phoenix Sepsis Criteria (JAMA 2024) / Surviving Sepsis Campaign pediátrica (2020)",
    "tags": [
      "sepse pediátrica",
      "critérios de Phoenix",
      "emergências pediátricas"
    ],
    "tip": "Phoenix ≥ 2 = sepse: antibiótico na primeira hora e suporte hemodinâmico."
  },
  {
    "id": "hsrc2026-14",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Uma menina de 3 anos de idade é avaliada com febre há dois dias, tosse produtiva e taquipneia leve, mas boa aceitação alimentar. Sem sinais de desconforto respiratório grave, o pediatra considera pneumonia adquirida na comunidade (PAC) não complicada. Nesse caso, a conduta diagnóstica mais adequada, segundo as diretrizes da SBP e Ministério da Saúde, é",
    "options": [
      "Solicitar hemocultura e radiografia de tórax para confirmação.",
      "Solicitar procalcitonina sérica para diferenciar infecção bacteriana.",
      "Aguardar resultados laboratoriais antes de prescrever antibióticos.",
      "Indicar internação para coleta de exames e suporte venoso",
      "Iniciar antibioticoterapia empírica e reavaliar em 48 a 72 h."
    ],
    "correctAnswer": 4,
    "explanation": "Criança com pneumonia comunitária não complicada, sem sinais de gravidade e com boa aceitação: o diagnóstico é clínico (febre, tosse e taquipneia) e o tratamento é ambulatorial.\n\nInicia-se antibiótico empírico (amoxicilina) e reavalia-se em 48–72 horas. Radiografia e exames laboratoriais não são necessários de rotina nesses casos.",
    "commentary": "Hemocultura e radiografia (A): não são necessárias para confirmar pneumonia não complicada tratada em ambulatório.\n\nProcalcitonina (B): não é exame de rotina para decidir o tratamento nesses casos.\n\nAguardar exames (C): atrasaria o tratamento sem benefício.\n\nInternação (D): reservada para sinais de gravidade (tiragem, hipoxemia, recusa alimentar, idade < 2 meses, complicações).",
    "reference": "SBP — Pneumonia adquirida na comunidade na infância / Ministério da Saúde (AIDPI)",
    "tags": [
      "pneumonia adquirida na comunidade",
      "pneumonia infantil",
      "tratamento ambulatorial"
    ],
    "tip": "PAC infantil sem gravidade: diagnóstico clínico, amoxicilina e reavaliar em 48–72 h."
  },
  {
    "id": "hsrc2026-15",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Um menino de 2 anos de idade, previamente saudável, apresenta febre e tosse há três dias, sendo diagnosticado com pneumonia adquirida na comunidade sem sinais de gravidade. Segundo o protocolo da SBP (2022), o tratamento antimicrobiano de primeira escolha é",
    "options": [
      "Amoxicilina oral em dose de 50 mg/kg/dia por 7 dias.",
      "Ceftriaxona intramuscular por 10 dias.",
      "Azitromicina oral por 5 dias.",
      "Clindamicina oral em dose de 30 mg/kg/dia por 7 dias.",
      "Claritromicina oral por 10 dias."
    ],
    "correctAnswer": 0,
    "explanation": "Na pneumonia comunitária sem gravidade em crianças, o principal agente é o pneumococo. A primeira escolha é a amoxicilina oral, 50 mg/kg/dia (dividida de 8/8 ou 12/12 h), por 5 a 7 dias.",
    "commentary": "Ceftriaxona IM por 10 dias (B): reservada a quem não pode usar a via oral ou casos graves; não é primeira escolha.\n\nAzitromicina (C): indicada se houver suspeita de agente atípico (mais comum acima de 5 anos) ou alergia grave a betalactâmico.\n\nClindamicina (D): não é primeira escolha; tem papel em alergia ou na suspeita de S. aureus.\n\nClaritromicina (E): também é macrolídeo; não é o tratamento inicial padrão.",
    "reference": "SBP — Pneumonia adquirida na comunidade na infância (2022)",
    "tags": [
      "pneumonia infantil",
      "amoxicilina",
      "antibioticoterapia"
    ],
    "tip": "PAC na criança: amoxicilina 50 mg/kg/dia."
  },
  {
    "id": "hsrc2026-16",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Um menino de 3 anos de idade apresenta quadro de diarreia aquosa intensa, irritabilidade e olhos fundos. Ao exame, o pulso é fraco, e o sinal da prega abdominal desaparece lentamente. Assinale a alternativa que apresenta o plano de reidratação recomendado segundo o fluxograma do Ministério da Saúde adotado pela SBP.",
    "options": [
      "Plano A – prevenção de desidratação",
      "Plano B – reidratação oral supervisionada",
      "Plano C – reidratação endovenosa",
      "Plano D – antibiótico e antiemético",
      "Plano E – observação e dieta zero"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com diarreia e sinais de desidratação grave: pulso fraco e sinal da prega que desaparece muito lentamente (> 2 segundos), além de olhos fundos e irritabilidade. Pelo esquema do Ministério da Saúde, a presença de dois ou mais sinais de gravidade (letargia ou inconsciência, olhos muito fundos, pulso fraco, prega muito lenta, incapacidade de beber) indica o Plano C: reidratação venosa imediata.",
    "commentary": "Plano A (A): sem desidratação; tratamento em casa com aumento de líquidos.\n\nPlano B (B): desidratação sem gravidade; terapia de reidratação oral na unidade.\n\nPlanos D e E (D e E): não existem no protocolo.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / SBP",
    "tags": [
      "desidratação",
      "diarreia aguda",
      "plano C",
      "hidratação venosa"
    ],
    "tip": "Pulso fraco ou prega muito lenta = desidratação grave = Plano C (venoso)."
  },
  {
    "id": "hsrc2026-17",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Um adolescente asmático, previamente controlado, passa a apresentar despertares noturnos e uso semanal de broncodilatador. Espirometria mostra leve queda de VEF₁. De acordo com a GINA 2025, o controle da asma, nesse caso, deve considerar o(a)",
    "options": [
      "Ausência de sintomas diurnos.",
      "Frequência dos sintomas, função pulmonar e risco de exacerbações.",
      "Número de visitas ao pronto-socorro.",
      "Uso de corticoide inalatório.",
      "Tempo desde o diagnóstico."
    ],
    "correctAnswer": 1,
    "explanation": "A GINA avalia a asma em dois domínios: o controle dos sintomas (sintomas diurnos, despertares noturnos, uso de broncodilatador de alívio e limitação de atividades nas últimas 4 semanas) e o risco futuro (exacerbações, perda de função pulmonar, efeitos adversos), no qual entra o VEF₁.\n\nPortanto, a avaliação deve considerar a frequência dos sintomas, a função pulmonar e o risco de exacerbações.",
    "commentary": "Só sintomas diurnos (A): é apenas um dos itens; despertares e uso de alívio também contam.\n\nNúmero de idas ao pronto-socorro (C): é um fator de risco, mas não define sozinho o controle.\n\nUso de corticoide inalatório (D): é tratamento, não critério de controle.\n\nTempo desde o diagnóstico (E): não entra na avaliação de controle.",
    "reference": "GINA 2025 — Global Strategy for Asthma Management and Prevention",
    "tags": [
      "asma",
      "controle da asma",
      "GINA"
    ],
    "tip": "GINA: controle = sintomas das últimas 4 semanas + risco futuro (VEF₁, exacerbações)."
  },
  {
    "id": "hsrc2026-18",
    "module": "Pediatria",
    "text": "Um lactente de 10 meses de idade apresenta nódulo doloroso eritematoso na região glútea, evoluindo com flutuação central e febre baixa. Não há sinais sistêmicos de gravidade. O médico pediatra suspeita de furúnculo. A conduta inicial mais adequada nesse caso é",
    "options": [
      "Iniciar antibiótico oral de amplo espectro e banho de permanganato.",
      "Realizar drenagem após formação de ponto de flutuação e higiene local.",
      "Utilizar pomada antibiótica isoladamente sendo desnecessário a drenagem.",
      "Solicitar ultrassonografia para descartar abscesso profundo.",
      "Prescrever antibiótico endovenoso em ambiente hospitalar."
    ],
    "correctAnswer": 1,
    "explanation": "Furúnculo é uma infecção profunda do folículo piloso, geralmente por S. aureus, formando nódulo doloroso que evolui com flutuação. Quando há ponto de flutuação, o tratamento principal é a drenagem, associada a calor local e higiene. Antibiótico sistêmico fica para lesões extensas, múltiplas, celulite associada, imunossupressão ou sinais sistêmicos.",
    "commentary": "Antibiótico oral de amplo espectro e permanganato (A): sem sinais sistêmicos, a drenagem é suficiente; amplo espectro é desnecessário.\n\nPomada isolada sem drenagem (C): não resolve uma coleção já formada.\n\nUltrassonografia (D): pode ajudar em dúvida diagnóstica, mas não é necessária quando a flutuação é evidente.\n\nAntibiótico venoso hospitalar (E): reservado a casos graves.",
    "reference": "SBD / IDSA 2014 — Infecções de pele e partes moles",
    "tags": [
      "furúnculo",
      "abscesso cutâneo",
      "estafilococo",
      "infecções de pele"
    ],
    "tip": "Coleção com flutuação: drenar. Antibiótico só se extenso ou com sinais sistêmicos."
  },
  {
    "id": "hsrc2026-19",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos de idade, previamente hígida, é levada à unidade básica de saúde com quadro de tosse há três semanas, febre vespertina, perda de peso e inapetência. A mãe relata que o avô, morador da mesma casa, está em tratamento para tuberculose pulmonar. A radiografia de tórax mostrou adenomegalias hilares, e a prova tuberculínica apresentou 12 mm. A baciloscopia do escarro induzido foi negativa. Com base nas recomendações do Ministério da Saúde, a conduta diagnóstica mais adequada para este caso é",
    "options": [
      "Considerar o diagnóstico de tuberculose após confirmação por cultura positiva.",
      "Repetir o teste rápido molecular (TRM-TB) e, se negativo, suspender a investigação",
      "Adiar a avaliação até que a criança complete 6 anos de idade, quando poderá expectorar adequadamente.",
      "Solicitar tomografia computadorizada de tórax para confirmar a presença de cavitação pulmonar.",
      "Aplicar o sistema de pontuação específico para tuberculose na infância e iniciar o tratamento se o escore for ≥ 40 pontos."
    ],
    "correctAnswer": 4,
    "explanation": "Na criança, a tuberculose geralmente é paucibacilar e ela não consegue expectorar, por isso baciloscopia e cultura costumam ser negativas. O Ministério da Saúde recomenda o sistema de pontuação para diagnóstico de tuberculose pulmonar em crianças e adolescentes com baciloscopia negativa: quadro clínico, radiografia, contato com adulto bacilífero, prova tuberculínica e estado nutricional.\n\nCom ≥ 40 pontos, o diagnóstico é muito provável e se inicia o tratamento. Neste caso (sintomas por 3 semanas, adenomegalia hilar, contato próximo e PT ≥ 10 mm), o escore passa de 40.",
    "commentary": "Esperar cultura positiva (A): a cultura frequentemente é negativa na criança; o escore permite tratar sem confirmação bacteriológica.\n\nSuspender a investigação se o TRM-TB for negativo (B): o teste molecular também tem baixa sensibilidade em crianças e não exclui a doença.\n\nAdiar até 6 anos (C): atrasar o tratamento é perigoso.\n\nTomografia para cavitação (D): cavitações são raras em crianças pequenas; a forma típica é a ganglionar.",
    "reference": "Ministério da Saúde — Manual de recomendações para o controle da tuberculose no Brasil (2019, atualizações)",
    "tags": [
      "tuberculose na infância",
      "escore de pontuação",
      "prova tuberculínica"
    ],
    "tip": "TB na criança com baciloscopia negativa: escore do MS; ≥ 40 pontos = tratar."
  },
  {
    "id": "hsrc2026-20",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos de idade tem episódios recorrentes de sibilância e dispneia após infecções virais. Não há sintomas entre os episódios. Segundo a GINA 2025, a abordagem inicial mais apropriada para essa faixa etária é:",
    "options": [
      "Uso diário de ICS em baixa dose contínua.",
      "LABA contínuo por 3 meses.",
      "SABA isolado em todos os episódios.",
      "ICS intermitente iniciado com os sintomas.",
      "Anticolinérgico inalatório como monoterapia."
    ],
    "correctAnswer": 3,
    "explanation": "Criança de até 5 anos com sibilância apenas em episódios desencadeados por vírus, sem sintomas entre eles. A GINA propõe para esse perfil o uso de corticoide inalatório intermitente, iniciado no começo do quadro viral, associado a SABA de alívio. O corticoide diário fica para quem tem episódios frequentes ou sintomas entre as crises.",
    "commentary": "Corticoide inalatório diário (A): indicado se houver sintomas entre os episódios ou crises frequentes e graves.\n\nLABA contínuo (B): não é recomendado como terapia nessa faixa etária.\n\nSABA isolado (C): é o alívio, mas a GINA atual propõe acrescentar o corticoide intermitente na sibilância viral recorrente.\n\nAnticolinérgico em monoterapia (E): sem papel no controle.",
    "reference": "GINA 2025 — Children 5 years and younger",
    "tags": [
      "sibilância recorrente",
      "asma infantil",
      "corticoide inalatório intermitente",
      "GINA"
    ],
    "tip": "Menor de 5 anos com sibilância só nas viroses: corticoide inalatório intermitente + SABA."
  },
  {
    "id": "hsrc2026-21",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente de 70 anos de idade, hipertenso e com arritmia, apresenta hérnia umbilical há 10 anos. Há 3 meses vem relatando incômodo e episódios de dor. Ao exame, apresenta hérnia umbilical de cerca de 2 cm. Nesse caso, a melhor estratégia para este paciente é",
    "options": [
      "Manter observação clínica e acompanhamento.",
      "Indicação cirúrgica de herniorrafia com fechamento primário da falha da aponeurose.",
      "Correção aberta com colocação de tela intraperitoneal.",
      "Correção da hérnia aberta com colocação de tela pré-peritoneal.",
      "Reparo laparoscópico primário sem colocação de tela."
    ],
    "correctAnswer": 3,
    "explanation": "Hérnia umbilical sintomática (dor e desconforto) tem indicação cirúrgica. Pelas diretrizes da European Hernia Society, defeitos ≥ 1 cm devem ser corrigidos com tela, que reduz a recidiva. Em hérnias pequenas a médias (1–4 cm) operadas por via aberta, a tela é colocada preferencialmente no espaço pré-peritoneal (ou retromuscular), longe das vísceras.",
    "commentary": "Observação (A): poderia ser considerada em hérnias pequenas e assintomáticas; aqui já há dor.\n\nFechamento primário sem tela (B): aceitável apenas em defeitos < 1 cm, pela recidiva maior.\n\nTela intraperitoneal na cirurgia aberta (C): o contato com as alças aumenta aderências, obstrução e fístula; é evitada.\n\nLaparoscopia sem tela (E): reparo sem tela tem mais recidiva, e a via laparoscópica é reservada a defeitos maiores.",
    "reference": "European Hernia Society/Americas Hernia Society — Guidelines for umbilical and epigastric hernias (2020)",
    "tags": [
      "hérnia umbilical",
      "tela pré-peritoneal",
      "hernioplastia"
    ],
    "tip": "Umbilical ≥ 1 cm: tela. Via aberta: pré-peritoneal, não intraperitoneal."
  },
  {
    "id": "hsrc2026-22",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Paciente de 20 anos de idade sofreu um acidente de moto e chegou ao Pronto socorro com sangramento ativo da perna esquerda logo abaixo do joelho. Ao exame, encontrava-se com Glasgow 13, pulso 132 bpm, PA: 80/50 mmHg, sangramento ativo de laceração da perna esquerda. A melhor conduta nesse caso é:",
    "options": [
      "Compressão imediata do sangramento com compressas.",
      "Certificar se a via aérea está pérvia.",
      "Reposição volêmica com 2.000 mL de Ringer lactato aquecido.",
      "Avaliar a oximetria de pulso e monitorização cardíaca.",
      "Verificar se o membro está alinhado."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente politraumatizado em choque com hemorragia externa ativa no membro. Pela sequência atual do atendimento ao trauma (XABCDE do PHTLS e ATLS 11ª edição), o primeiro passo é controlar a hemorragia exsanguinante: compressão direta imediata, e torniquete se não for suficiente.\n\nSó depois se segue para via aérea, respiração e demais etapas.",
    "commentary": "Via aérea (B): no XABCDE, o \"X\" da hemorragia externa grave vem antes do A; além disso, com Glasgow 13 a via aérea provavelmente está pérvia.\n\nReposição de 2 litros de Ringer (C): a reposição agressiva com cristaloide não é mais recomendada; a prioridade é parar o sangramento e repor com sangue.\n\nOximetria e monitorização (D): úteis, mas não antes de conter a hemorragia.\n\nAlinhar o membro (E): faz parte do cuidado com fraturas, depois da estabilização.",
    "reference": "ATLS — 11ª edição / PHTLS — 10ª edição (XABCDE)",
    "tags": [
      "trauma",
      "XABCDE",
      "hemorragia externa",
      "choque hemorrágico"
    ],
    "tip": "XABCDE: sangramento exsanguinante primeiro."
  },
  {
    "id": "hsrc2026-23",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Paciente vítima de ferimento por arma de fogo no abdome, dando entrada no hospital com pulso de 144 bpm, PA: 60/30 mmHg, com pele fria e sudorífico. Assinale a alternativa que apresenta a conduta correta em relação à reposição volêmica desse paciente.",
    "options": [
      "Sangue total",
      "Dois concentrados de hemácias tipadas",
      "Ringer lactato 30 mL/kg/hora",
      "Soro fisiológico 0,9% 2.000 mL",
      "Quatro concentrados de hemácias e uma unidade de Plasma"
    ],
    "correctAnswer": 0,
    "explanation": "Ferimento por arma de fogo no abdome com choque classe IV (FC 144, PA 60/30 mmHg, pele fria): perda estimada acima de 40% da volemia. A reposição deve ser feita precocemente com hemocomponentes, sem cristaloide em grande volume, e o paciente precisa de cirurgia imediata.\n\nO sangue total é considerado pelas diretrizes mais recentes de trauma (ATLS 11ª edição) a melhor opção na ressuscitação hemostática, pois repõe hemácias, plasma e plaquetas na proporção fisiológica. Na falta dele, usa-se o protocolo de transfusão maciça com hemácias, plasma e plaquetas na proporção 1:1:1.",
    "commentary": "Dois concentrados de hemácias tipados (B): esperar tipagem num paciente nesse estado é inaceitável (usa-se O negativo/ O positivo de emergência), e só hemácias não corrigem a coagulopatia.\n\nRinger 30 mL/kg/h (C): volume alto de cristaloide piora coagulopatia, acidose e hipotermia.\n\nSoro fisiológico 2 litros (D): mesmo problema, com acidose hiperclorêmica adicional.\n\nQuatro concentrados e uma unidade de plasma (E): proporção 4:1, desbalanceada; o recomendado é 1:1:1.",
    "reference": "ATLS — 11ª edição: Choque / Ressuscitação hemostática",
    "tags": [
      "choque hemorrágico",
      "sangue total",
      "ressuscitação hemostática",
      "transfusão maciça"
    ],
    "tip": "Choque hemorrágico grave: sangue (total ou 1:1:1), não cristaloide."
  },
  {
    "id": "hsrc2026-24",
    "topography": "3.3",
    "topic": "Coledocolitíase",
    "module": "Cirurgia",
    "text": "Paciente de 32 anos de idade com queixa de icterícia há 2 semanas, além de alguns episódios de dor abdominal. Ao exame encontra-se ictérica ++/4+, em bom estado geral, com abdome plano, flácido, pouco doloroso em hipocôndrio direito. Murphy negativo. Realizou ultrassom que mostrou múltiplos cálculos na vesícula biliar além de dilatação de vias biliares intra e extra hepáticas, sem verificação de ponto de obstrução. Hemograma com 16.700 Leucócitos (normal até 10.000), bilirrubinas totais de 5,7 (normal até 1,0). Assinale a alternativa que apresenta a conduta mais indicada nesse caso.",
    "options": [
      "Colangiografia por ressonância magnética",
      "Colecistectomia videolaparoscópica",
      "Colangiopancreatografia retrógrada endoscópica",
      "Ecoendoscopia",
      "Tomografia computadorizada de abdome total"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher com colelitíase, icterícia obstrutiva (bilirrubina 5,7), dilatação das vias biliares intra e extra-hepáticas e leucocitose: o quadro sugere coledocolitíase, possivelmente com colangite inicial. Pelos critérios da ASGE, a combinação de bilirrubina > 4 mg/dL com via biliar dilatada (ou colangite) define probabilidade alta de cálculo no colédoco.\n\nCom probabilidade alta, a conduta é a CPRE, que confirma e trata (papilotomia e retirada dos cálculos), seguida de colecistectomia.",
    "commentary": "Colangiorressonância (A): indicada em probabilidade intermediária; com probabilidade alta, só atrasa o tratamento.\n\nColecistectomia primeiro (B): deixaria os cálculos do colédoco; a via biliar precisa ser desobstruída antes ou durante a cirurgia.\n\nEcoendoscopia (D): também para probabilidade intermediária.\n\nTomografia (E): pouco sensível para cálculos no colédoco e não acrescenta à conduta.",
    "reference": "ASGE 2019 — Guideline on the management of choledocholithiasis / Tokyo Guidelines 2018",
    "tags": [
      "coledocolitíase",
      "CPRE",
      "icterícia obstrutiva",
      "colangite"
    ],
    "tip": "Bilirrubina > 4 + colédoco dilatado = alta probabilidade: vai direto para CPRE."
  },
  {
    "id": "hsrc2026-25",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Paciente de 41 anos de idade, vítima de acidente de carro contra um caminhão, foi trazido ao PS pelo pré-hospitalar onde deu entrada com Glasgow 14, pulso de 92 bpm, PA: 110/70 mmHg. Sem alterações respiratórias ou cardíacas. Abdome com escoriação no andar superior, pouco doloroso à palpação profunda e sem sinais de irritação peritoneal. Nesse caso, o atendimento deve prosseguir com",
    "options": [
      "Observação clínica e tomografia de crânio.",
      "Tomografia de corpo inteiro.",
      "Realização do FAST estendido.",
      "Ultrassom de abdome.",
      "Lavagem peritoneal diagnóstica."
    ],
    "correctAnswer": 1,
    "explanation": "Vítima de colisão de alta energia (carro contra caminhão), estável hemodinamicamente, com Glasgow 14 e escoriação no abdome superior. O mecanismo grave e a alteração de consciência tornam o exame físico pouco confiável.\n\nNo paciente estável, o exame de escolha para avaliar as lesões é a tomografia computadorizada; dado o mecanismo de alta energia, a tomografia de corpo inteiro (crânio, coluna cervical, tórax, abdome e pelve) é a melhor opção.",
    "commentary": "Observação e TC só de crânio (A): deixaria de avaliar tórax, abdome e pelve num trauma de alta energia com sinal abdominal.\n\nFAST estendido (C): útil no paciente instável ou na triagem inicial, mas não substitui a tomografia num paciente estável.\n\nUltrassom de abdome (D): pouco sensível para vísceras ocas e retroperitônio.\n\nLavado peritoneal diagnóstico (E): praticamente substituído por FAST e tomografia; invasivo.",
    "reference": "ATLS — 11ª edição: Trauma abdominal",
    "tags": [
      "trauma abdominal fechado",
      "tomografia de corpo inteiro",
      "trauma de alta energia"
    ],
    "tip": "Trauma de alta energia, paciente estável: tomografia de corpo inteiro."
  },
  {
    "id": "hsrc2026-26",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Uma paciente de 66 anos de idade procura o pronto-socorro com queixa de dor abdominal na parte inferior do abdome, além de náuseas e febre. Ao exame, abdome plano, flácido, doloroso em fossa ilíaca esquerda, com defesa neste local. Com base nesse caso, assinale a alternativa correta.",
    "options": [
      "A colonoscopia poderá dar informações importantes para o diagnóstico.",
      "A radiografia simples de abdome é o exame com melhor custo-benefício para esta paciente.",
      "O tratamento destes casos deve ser feito inicialmente com a videolaparoscopia.",
      "A tomografia pode confirmar o diagnóstico e classificar a doença.",
      "O tratamento cirúrgico é a principal maneira de resolução da maioria dos casos como este."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com dor em fossa ilíaca esquerda, defesa localizada, febre e náuseas: diverticulite aguda.\n\nA tomografia de abdome com contraste é o exame de escolha: confirma o diagnóstico, mostra complicações (abscesso, perfuração, fístula) e permite classificar a gravidade (classificação de Hinchey modificada), o que orienta o tratamento.",
    "commentary": "Colonoscopia (A): contraindicada na fase aguda, pelo risco de perfuração; é feita 6 a 8 semanas depois, para excluir neoplasia.\n\nRadiografia simples (B): só mostra pneumoperitônio ou obstrução; não confirma nem classifica a diverticulite.\n\nVideolaparoscopia inicial (C): a maioria dos casos (não complicados) é tratada clinicamente; cirurgia é para peritonite ou falha.\n\nCirurgia na maioria dos casos (E): a maior parte dos casos se resolve com tratamento clínico, sem cirurgia.",
    "reference": "ASCRS 2020 — Clinical Practice Guidelines for left-sided colonic diverticulitis / Sabiston",
    "tags": [
      "diverticulite aguda",
      "tomografia",
      "classificação de Hinchey"
    ],
    "tip": "Dor em FIE no idoso: tomografia confirma e classifica (Hinchey). Colonoscopia só depois."
  },
  {
    "id": "hsrc2026-27",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Paciente trazido por policiais, vítima de ferimento por arma de fogo no quarto espaço intercostal, linha axilar anterior direita, chegou ao PS dispneico, com saturação de 88%. murmúrio vesicular reduzido à direita, pulso de 123 bpm e PA: 80/50 mmHg. Realizada drenagem de tórax com saída de 1.600 ml de sangue. Nesse caso, a conduta a ser tomada é",
    "options": [
      "Monitorização em UTI e quantificação do débito do dreno.",
      "Videotoracoscopia.",
      "Toracotomia anterolateral direita.",
      "Laparotomia exploradora.",
      "Tomografia computadorizada."
    ],
    "correctAnswer": 2,
    "explanation": "Ferimento por arma de fogo no hemitórax direito com choque e hemotórax: a drenagem saiu com 1.600 mL de sangue. Pelo ATLS, drenagem inicial > 1.500 mL (ou > 200 mL/h por 2–4 horas, ou necessidade persistente de transfusão) define hemotórax maciço com indicação de toracotomia de urgência.\n\nNo paciente instável com lesão de hemitórax direito, a via é a toracotomia anterolateral direita.",
    "commentary": "UTI e quantificar o dreno (A): o débito inicial já indica cirurgia; observar atrasaria o controle do sangramento.\n\nVideotoracoscopia (B): reservada a pacientes estáveis (hemotórax retido, por exemplo).\n\nLaparotomia (D): o ferimento é torácico (4º espaço intercostal), acima do rebordo, e a fonte do sangramento é intratorácica.\n\nTomografia (E): paciente instável não vai para a tomografia.",
    "reference": "ATLS — 11ª edição: Trauma torácico",
    "tags": [
      "hemotórax maciço",
      "toracotomia",
      "trauma torácico penetrante"
    ],
    "tip": "Dreno com > 1.500 mL na hora ou > 200 mL/h = toracotomia."
  },
  {
    "id": "hsrc2026-28",
    "topography": "3.4",
    "topic": "Pancreatite crônica",
    "module": "Cirurgia",
    "text": "Paciente etilista crônico, de 55 anos de idade, apresenta dor abdominal intensa na região de dorso, com piora progressiva há 6 meses. Exame de tomografia de abdome demonstra pâncreas aumentado de volume, com múltiplas pequenas calcificações em seu parênquima e moderada dilatação do ducto pancreático, sem dilatação das vias biliares. Assinale a alternativa que apresenta o diagnóstico mais provável.",
    "options": [
      "Pancreatite aguda",
      "Úlcera gástrica perfurada",
      "Doença cística mucinosa do pâncreas",
      "Adenocarcinoma de pâncreas",
      "Pancreatite crônica"
    ],
    "correctAnswer": 4,
    "explanation": "Etilista crônico com dor abdominal irradiada para o dorso há meses e tomografia mostrando calcificações no parênquima pancreático e dilatação do ducto pancreático principal: pancreatite crônica.\n\nAs calcificações são praticamente patognomônicas em contexto clínico compatível. A doença pode evoluir com insuficiência exócrina (esteatorreia) e endócrina (diabetes).",
    "commentary": "Pancreatite aguda (A): quadro agudo, com enzimas elevadas; calcificações e dilatação ductal indicam cronicidade.\n\nÚlcera perfurada (B): abdome agudo súbito com pneumoperitônio.\n\nNeoplasia cística mucinosa (C): lesão cística, geralmente em mulheres de meia-idade, no corpo/cauda.\n\nAdenocarcinoma de pâncreas (D): massa hipodensa, frequentemente com icterícia (cabeça) e perda de peso; calcificações difusas não são típicas.",
    "reference": "Sabiston — Pâncreas / Consenso brasileiro de pancreatite crônica",
    "tags": [
      "pancreatite crônica",
      "calcificações pancreáticas",
      "etilismo"
    ],
    "tip": "Etilista + dor crônica + calcificações pancreáticas = pancreatite crônica."
  },
  {
    "id": "hsrc2026-29",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Após a realização de uma laparotomia exploradora por uma úlcera perfurada, a melhor maneira de fechar a aponeurose abdominal é a sutura",
    "options": [
      "Com poliglactina, pontos separados",
      "Contínua com polidioxanona.",
      "Contínua com polipropileno.",
      "Separada com mononylon.",
      "Contínua com categute cromado."
    ],
    "correctAnswer": 2,
    "explanation": "O fechamento da aponeurose é feito com sutura contínua de fio monofilamentar de absorção lenta ou inabsorvível. A banca considera o polipropileno (inabsorvível, monofilamentar e resistente) a melhor opção, especialmente em campo potencialmente contaminado como na úlcera perfurada, pela força tênsil duradoura.",
    "commentary": "Poliglactina em pontos separados (A): fio trançado e de absorção rápida; perde força antes da cicatrização da aponeurose e pode abrigar bactérias.\n\nContínua com polidioxanona (B): também é uma opção excelente e, segundo a European Hernia Society e estudos como o STITCH, é a preferida atualmente (monofilamento de absorção lenta, menos dor e menos granulomas). A banca escolheu o polipropileno.\n\nSeparada com mononáilon (D): pontos separados levam mais tempo e o náilon tem menor segurança no nó.\n\nCategute cromado (E): absorção rápida, inadequado para a aponeurose.",
    "reference": "European Hernia Society 2015 — Closure of abdominal wall incisions / Estudo STITCH (Lancet 2015)",
    "tags": [
      "fechamento da parede abdominal",
      "fios cirúrgicos",
      "laparotomia"
    ],
    "tip": "Aponeurose: sutura contínua com monofilamento lento (PDS) ou inabsorvível (polipropileno).",
    "alsoAccepted": [
      1
    ],
    "alert": "Gabarito discutível: as diretrizes atuais preferem a sutura contínua com fio monofilamentar de absorção lenta (polidioxanona, B). A banca considerou C (polipropileno). Neste simulado, a alternativa B também é aceita como correta."
  },
  {
    "id": "hsrc2026-30",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 15 anos de idade, com dor abdominal há 5 dias, foi submetido a procedimento cirúrgico cujo achado revelou apendicite aguda grau IV, com presença de coleção purulenta na fossa ilíaca direita. A sutura do coto apendicular foi realizada com bom resultado, sendo deixado dreno na cavidade abdominal. Com relação à utilização de dreno na apendicite aguda, assinale a alternativa correta.",
    "options": [
      "A apendicectomia sempre deve ser drenada.",
      "O dreno deve ser retirado no primeiro dia pós-operatório.",
      "Não há necessidade de drenagem após limpeza e lavagem da cavidade.",
      "Nesse caso, o dreno deve ficar por, ao menos, sete dias.",
      "No caso relatado, o dreno deve ficar até, ao menos, o terceiro dia, ou enquanto sair secreção purulenta."
    ],
    "correctAnswer": 4,
    "explanation": "Quando um dreno é deixado na cavidade, como neste caso de apendicite complicada com coleção purulenta, ele deve permanecer pelo menos até o terceiro dia ou enquanto houver saída de secreção purulenta, sendo retirado quando o débito diminui e muda de aspecto.\n\nVale lembrar que a drenagem rotineira na apendicite complicada é controversa: estudos não mostram benefício e indicam mais tempo de internação, de modo que hoje muitos serviços não drenam.",
    "commentary": "Sempre drenar (A): a apendicectomia não complicada não é drenada, e mesmo na complicada a drenagem é seletiva.\n\nRetirar no primeiro dia (B): em cavidade com pus, a retirada precoce perde o objetivo do dreno.\n\nNão há necessidade de drenagem (C): é a tendência atual da literatura, mas o enunciado pergunta sobre o caso em que o dreno foi deixado.\n\nAo menos sete dias (D): não há tempo fixo tão longo; o critério é o débito.",
    "reference": "Sabiston — Apêndice / WSES Jerusalem Guidelines 2020",
    "tags": [
      "apendicite aguda",
      "drenos cirúrgicos",
      "apendicite complicada"
    ],
    "tip": "Dreno na apendicite complicada: retirar quando o pus cessar (geralmente após o 3º dia)."
  },
  {
    "id": "hsrc2026-31",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Renata, 17 anos de idade, menarca aos 13 anos, apresenta ciclos menstruais sempre irregulares, com episódios de sangramento intenso e prolongado nos últimos três meses. Nega coágulos nas fezes ou urina e não utiliza medicações. Exame físico sem alterações, índice de massa corporal dentro da normalidade. Beta-hCG negativo, hemograma com leve anemia, TSH e prolactina normais. Ultrassonografia pélvica sem alterações estruturais. Assinale a alternativa que apresenta a conduta inicial mais adequada para o manejo do sangramento nessa paciente.",
    "options": [
      "Curetagem uterina diagnóstica",
      "Anticoncepcional combinado oral em esquema contínuo",
      "Dispositivo intrauterino com levonorgestrel",
      "Análogo de GnRH",
      "Ácido tranexâmico isolado"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com ciclos irregulares desde a menarca, sangramento intenso e prolongado, exames e ultrassom normais e beta-hCG negativo: sangramento uterino anormal por disfunção ovulatória (SUA-O), causa mais comum nessa idade, pela imaturidade do eixo hipotálamo-hipófise-ovário.\n\nCom estabilidade e anemia leve, o tratamento inicial é hormonal: anticoncepcional combinado oral (pode ser em esquema contínuo ou em doses decrescentes no sangramento agudo), que estabiliza o endométrio e regula os ciclos. Vale investigar coagulopatias (como doença de von Willebrand) em adolescentes com sangramento intenso.",
    "commentary": "Curetagem (A): indicada apenas em hemorragia grave refratária; não é diagnóstica nem terapêutica de primeira linha nessa idade.\n\nDIU de levonorgestrel (C): ótima opção para sangramento intenso crônico, mas não é a primeira escolha para controlar o episódio numa adolescente sem atividade sexual referida.\n\nAnálogo de GnRH (D): reservado para casos refratários, pelos efeitos de hipoestrogenismo.\n\nÁcido tranexâmico isolado (E): reduz o fluxo, mas não corrige a disfunção ovulatória.",
    "reference": "FEBRASGO — Sangramento uterino anormal na adolescência / ACOG Committee Opinion 785",
    "tags": [
      "sangramento uterino anormal",
      "adolescência",
      "disfunção ovulatória",
      "anticoncepcional combinado"
    ],
    "tip": "Adolescente com SUA e exames normais = anovulação. Tratamento: pílula combinada."
  },
  {
    "id": "hsrc2026-32",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Juliana, 36 anos de idade, G2P1, com 32 semanas de gestação, relata boa percepção dos movimentos fetais e ausência de intercorrências. Na consulta, o médico de família realiza avaliação clínica e orientações sobre sinais de alerta, registrando: PA = 110/70 mmHg, BCF = 142 bpm e AU = 32 cm. Conforme o protocolo de pré-natal de baixo risco do Ministério da Saúde, assinale a alternativa que apresenta a avaliação de rotina recomendada para o acompanhamento da vitalidade e do crescimento fetal.",
    "options": [
      "Cardiotocografia basal em todas as consultas",
      "Perfil biofísico fetal a cada 15 dias",
      "Verificação de movimentos fetais, BCF e curva de crescimento uterino",
      "Ultrassonografia com Doppler umbilical mensal",
      "Amnioscopia de rotina"
    ],
    "correctAnswer": 2,
    "explanation": "No pré-natal de baixo risco, a vitalidade e o crescimento fetal são acompanhados clinicamente em todas as consultas: percepção dos movimentos fetais, ausculta dos batimentos cardíacos fetais e medida da altura uterina, registrada na curva de crescimento uterino da caderneta.\n\nNesta gestante, AU de 32 cm com 32 semanas está adequada.",
    "commentary": "Cardiotocografia em todas as consultas (A): não é recomendada de rotina no baixo risco.\n\nPerfil biofísico quinzenal (B): exame de vigilância para gestações de alto risco.\n\nDoppler umbilical mensal (D): indicado em situações de risco, como restrição de crescimento ou hipertensão.\n\nAmnioscopia (E): procedimento sem indicação de rotina.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco",
    "tags": [
      "pré-natal de baixo risco",
      "altura uterina",
      "vitalidade fetal"
    ],
    "tip": "Baixo risco: movimentos fetais + BCF + altura uterina na curva."
  },
  {
    "id": "hsrc2026-33",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Carolina, 19 anos de idade, G1P0, comparece para primeira consulta de pré-natal com 9 semanas de gestação confirmada por ultrassonografia. Está clinicamente bem, nega doenças prévias e não faz uso de medicações. A equipe multiprofissional planeja a solicitação de exames laboratoriais de rotina. De acordo com o Ministério da Saúde, o conjunto mínimo obrigatório de exames laboratoriais a ser solicitado na primeira consulta de pré-natal de baixo risco é:",
    "options": [
      "Hemograma, glicemia, VDRL, urina tipo I, tipagem e fator Rh, sorologias para HIV e hepatite B",
      "Hemograma, glicemia, VDRL, urina tipo I, tipagem sanguínea e TSH",
      "Hemograma, glicemia, ureia e creatinina, TSH e ultrassonografia obstétrica",
      "Hemograma, coagulograma, VDRL e sorologia para toxoplasmose",
      "Hemograma, glicemia e cultura de urina"
    ],
    "correctAnswer": 0,
    "explanation": "Os exames da primeira consulta do pré-natal de baixo risco, pelo Ministério da Saúde, incluem: hemograma, tipagem sanguínea e fator Rh (com Coombs indireto se Rh negativo), glicemia de jejum, urina tipo I e urocultura, testes rápidos ou sorologias para sífilis, HIV e hepatites B e C, e sorologia para toxoplasmose (onde houver).\n\nDas alternativas, a A é a que reúne o conjunto mínimo correto.",
    "commentary": "Com TSH (B): o TSH não é exame de rotina universal no pré-natal de baixo risco, e faltam tipagem e sorologias.\n\nCom ureia, creatinina e TSH (C): não são exames de rotina; e o ultrassom não é exame laboratorial.\n\nCom coagulograma (D): o coagulograma não é rotina, e faltam glicemia, urina e tipagem.\n\nSó hemograma, glicemia e urocultura (E): incompleto.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 32 / Caderneta da Gestante",
    "tags": [
      "pré-natal",
      "exames de rotina",
      "primeira consulta"
    ],
    "tip": "1ª consulta: hemograma, ABO-Rh, glicemia, urina e urocultura, sífilis, HIV, hepatites e toxo."
  },
  {
    "id": "hsrc2026-34",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Helena, 27 anos de idade, G2P2, comparece à Unidade Básica de Saúde 45 dias após parto vaginal sem complicações. Encontra-se em amamentação exclusiva, sem retorno da menstruação, e relata bom suporte familiar. Deseja evitar nova gestação por, pelo menos, dois anos e apresenta dúvida quanto ao uso de contraceptivos, afirmando ter ouvido que “a pílula pode secar o leite”. Conforme as diretrizes do Ministério da Saúde e da FEBRASGO, assinale a alternativa que apresenta a conduta mais adequada para o planejamento reprodutivo dessa paciente.",
    "options": [
      "Iniciar anticoncepcional combinado oral imediatamente.",
      "Oferecer laqueadura tubária imediata por conveniência.",
      "Prescrever anticoncepcional injetável combinado mensal.",
      "Recomendar aguardar a volta da menstruação para iniciar anticoncepção.",
      "Indicar método de amenorreia lactacional (LAM) e discutir opções de longa duração."
    ],
    "correctAnswer": 4,
    "explanation": "Puérpera de 45 dias, em amamentação exclusiva e amenorreica: preenche os três critérios do método da amenorreia lactacional (LAM) — amamentação exclusiva, amenorreia e menos de 6 meses pós-parto —, que tem eficácia de cerca de 98%.\n\nComo ela deseja evitar gestação por 2 anos, é o momento de aconselhar sobre métodos de longa duração compatíveis com a amamentação (DIU de cobre ou hormonal, implante), a serem iniciados antes que o LAM perca efeito.",
    "commentary": "Pílula combinada imediatamente (A): o estrogênio pode reduzir a produção de leite; antes de 6 meses de amamentação exclusiva, é categoria 2–3 dependendo do tempo pós-parto e não é primeira escolha.\n\nLaqueadura imediata por conveniência (B): exige consentimento informado e respeito ao prazo legal; não é \"conveniência\".\n\nInjetável combinado mensal (C): também contém estrogênio, com as mesmas restrições na amamentação.\n\nAguardar a menstruação (D): a ovulação pode ocorrer antes da primeira menstruação, com risco de gestação.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 26: Saúde sexual e reprodutiva / FEBRASGO",
    "tags": [
      "contracepção no puerpério",
      "amenorreia lactacional",
      "LARC",
      "aleitamento materno"
    ],
    "tip": "LAM: amamentação exclusiva + amenorreia + < 6 meses. Planeje um LARC."
  },
  {
    "id": "hsrc2026-35",
    "module": "Ginecologia e Obstetrícia",
    "text": "Cláudia, 46 anos de idade, enfermeira, realizou biópsia de nódulo mamário de 1,8 cm, confirmando carcinoma ductal invasivo, receptor hormonal positivo, HER2 negativo. Estadiamento clínico mostra T1cN0M0 e boa reserva funcional. A paciente deseja preservar a mama, se possível. De acordo com as diretrizes atuais da FEBRASGO (2023) e da National Comprehensive Cancer Network (2024), a melhor conduta cirúrgica inicial nesse caso é",
    "options": [
      "Mastectomia radical com esvaziamento axilar completo.",
      "Quadrantectomia sem avaliação linfonodal.",
      "Radioterapia exclusiva como tratamento inicial.",
      "Quadrantectomia com biópsia do linfonodo sentinela.",
      "Quimioterapia neoadjuvante obrigatória."
    ],
    "correctAnswer": 3,
    "explanation": "Carcinoma ductal invasivo de 1,8 cm (T1c), axila clinicamente negativa (N0), sem metástases, em paciente que deseja preservar a mama: é candidata à cirurgia conservadora (setorectomia/quadrantectomia), seguida de radioterapia.\n\nCom axila clinicamente negativa, o estadiamento axilar é feito pela biópsia do linfonodo sentinela, evitando o esvaziamento axilar e suas complicações (linfedema).",
    "commentary": "Mastectomia radical com esvaziamento (A): tratamento excessivo para tumor inicial e axila negativa.\n\nSem avaliação linfonodal (B): o status axilar é necessário no tumor invasivo para estadiar e definir tratamento (exceções são idosas selecionadas).\n\nRadioterapia exclusiva (C): não substitui a cirurgia.\n\nQuimioterapia neoadjuvante obrigatória (E): tumor pequeno, luminal e HER2-negativo não tem indicação obrigatória de neoadjuvância.",
    "reference": "FEBRASGO 2023 / NCCN Breast Cancer 2024",
    "tags": [
      "câncer de mama",
      "cirurgia conservadora",
      "linfonodo sentinela"
    ],
    "tip": "Tumor pequeno, axila negativa: cirurgia conservadora + linfonodo sentinela + radioterapia."
  },
  {
    "id": "hsrc2026-36",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Ana Paula, 40 anos de idade, portadora de endometriose profunda com acometimento retovaginal, foi submetida à videolaparoscopia para ressecção completa dos nódulos e lise de aderências. Após seis meses, relata melhora importante da dor pélvica, mas refere episódios discretos de disúria cíclica e sensação de distensão pélvica no período menstrual. Considerando as diretrizes atualizadas da FEBRASGO (2023) e da (European Society of Human Reproduction and Embryology) ESHRE (2022), assinale a alternativa que apresenta a principal medida terapêutica recomendada para prevenir a recidiva da endometriose e estabilizar os sintomas residuais.",
    "options": [
      "Iniciar terapia combinada cíclica com estrogênio e progestagênio.",
      "Iniciar anticoncepção hormonal contínua ou progestagênio isolado.",
      "Repetir cirurgia preventiva após 12 meses.",
      "Suspender todos os hormônios para avaliar a função ovariana residual.",
      "Iniciar agonista de GnRH por tempo indeterminado."
    ],
    "correctAnswer": 1,
    "explanation": "Após a cirurgia de endometriose, a recidiva é frequente. A ESHRE e a FEBRASGO recomendam supressão hormonal pós-operatória prolongada em quem não deseja gestar: anticoncepcional combinado em uso contínuo ou progestagênio isolado (dienogeste, DIU de levonorgestrel, desogestrel). Esses métodos reduzem a recorrência da dor e dos endometriomas.",
    "commentary": "Terapia combinada cíclica (A): o uso contínuo é preferível ao cíclico, porque evita a menstruação e o sangramento cíclico dos focos.\n\nRepetir cirurgia preventiva (C): não há indicação de cirurgia profilática; reoperações aumentam o risco.\n\nSuspender hormônios (D): aumenta a chance de recidiva.\n\nAgonista de GnRH por tempo indeterminado (E): causa hipoestrogenismo e perda óssea; uso limitado e com add-back.",
    "reference": "ESHRE 2022 — Endometriosis guideline / FEBRASGO 2023",
    "tags": [
      "endometriose",
      "supressão hormonal",
      "recidiva pós-operatória"
    ],
    "tip": "Pós-operatório de endometriose: progestagênio ou pílula contínua para evitar recidiva."
  },
  {
    "id": "hsrc2026-37",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Maria do Carmo, 68 anos de idade, G5P5, menopausada há 15 anos, apresenta queixa de sensação de “peso” e “bola” vaginal há 8 meses, com piora ao final do dia e aos esforços. Relata constipação e dificuldade para iniciar a micção, sem dor pélvica associada. No exame ginecológico, o sistema POP-Q evidencia: Aa = +2 cm, Ba = +3 cm, C = +3 cm, Ap = 0 cm, Bp = 0 cm, D = –4 cm, hiato genital (HG) = 3 cm, corpo perineal (CP) = 2 cm e comprimento vaginal total (CVT) = 8 cm. Considerando a classificação POP-Q, assinale a alternativa que indica o estadiamento e o compartimento principal do prolapso.",
    "options": [
      "Estádio II, compartimento posterior",
      "Estádio IV, prolapso total uterino",
      "Estádio III, compartimento posterior",
      "Estádio II, compartimento anterior",
      "Estádio III, compartimento anterior e apical"
    ],
    "correctAnswer": 4,
    "explanation": "No POP-Q, o estadiamento é dado pelo ponto mais distal do prolapso. Aqui, Ba (parede anterior) e C (colo) estão em +3 cm, além do hímen; o comprimento vaginal total é 8 cm.\n\nEstádio III é quando o ponto mais distal está mais de 1 cm além do hímen, mas não chega a CVT − 2 cm (+6 cm). Com ponto máximo em +3, é estádio III, com predomínio dos compartimentos anterior (Aa +2, Ba +3) e apical (C +3); o compartimento posterior está no hímen (Ap e Bp = 0).",
    "commentary": "Estádio II posterior (A): o ponto mais distal passa de +1, então não é estádio II, e o posterior não é o principal.\n\nEstádio IV (B): exige eversão completa (ponto mais distal ≥ CVT − 2, ou seja, +6).\n\nEstádio III posterior (C): o compartimento posterior está em 0.\n\nEstádio II anterior (D): o ponto máximo de +3 corresponde ao estádio III.",
    "reference": "ICS/IUGA — Sistema POP-Q / FEBRASGO",
    "tags": [
      "prolapso genital",
      "POP-Q",
      "uroginecologia"
    ],
    "tip": "POP-Q: III quando o ponto mais distal fica entre +1 e CVT − 2."
  },
  {
    "id": "hsrc2026-38",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Ginecologia e Obstetrícia",
    "text": "Maria Helena, 58 anos de idade, professora, relata perda involuntária de urina há aproximadamente dois anos, predominando durante esforços como tossir, espirrar ou levantar peso. O quadro intensificou-se após a menopausa, associando-se a sensação de ressecamento vaginal. Nega disúria, hematúria e dor pélvica. No exame físico, evidencia-se discreta flacidez do assoalho pélvico, sem cistocele ou retocele relevantes, teste do cotonete positivo e perda de urina observada ao esforço. A paciente refere prejuízo importante à qualidade de vida, mas opta por tratamento clínico. Considerando esse caso hipotético e conforme as diretrizes atuais, assinale a alternativa que indica a conduta inicial mais apropriada.",
    "options": [
      "Prescrever antibiótico profilático e solicitar urocultura mensal.",
      "Indicar cirurgia imediata com tela sintética tipo sling transobturatório.",
      "Iniciar fisioterapia do assoalho pélvico com treino muscular supervisionado.",
      "Iniciar anticolinérgico oral e encaminhar para urodinâmica.",
      "Iniciar terapia estrogênica sistêmica para melhora da mucosa vaginal."
    ],
    "correctAnswer": 2,
    "explanation": "Perda de urina aos esforços (tosse, espirro, peso), com teste do cotonete positivo (hipermobilidade uretral) e perda observada ao esforço: incontinência urinária de esforço.\n\nO tratamento inicial, especialmente em quem prefere abordagem clínica, é o treinamento dos músculos do assoalho pélvico supervisionado por fisioterapeuta, por pelo menos 3 meses. Estrogênio vaginal tópico pode ajudar a atrofia urogenital, e perda de peso e manejo da constipação também contribuem.",
    "commentary": "Antibiótico profilático e urocultura mensal (A): não há infecção urinária.\n\nSling imediato (B): a cirurgia é para falha do tratamento conservador ou desejo da paciente; ela optou por tratamento clínico.\n\nAnticolinérgico (D): trata a bexiga hiperativa (incontinência de urgência), não a de esforço.\n\nEstrogênio sistêmico (E): não melhora a incontinência e pode até piorá-la; a via indicada para a atrofia é a vaginal.",
    "reference": "FEBRASGO — Incontinência urinária / AUA/SUFU 2023 — Stress urinary incontinence",
    "tags": [
      "incontinência urinária de esforço",
      "fisioterapia do assoalho pélvico",
      "uroginecologia"
    ],
    "tip": "Incontinência de esforço: fisioterapia do assoalho pélvico primeiro; sling se falhar."
  },
  {
    "id": "hsrc2026-39",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Maria Clara, 29 anos de idade, G2P1A0, comparece ao pronto atendimento com sangramento vaginal escuro há 24 horas, sem eliminação de coágulos, associado a cólica leve em hipogástrio. Refere última menstruação há 9 semanas. No exame físico, o colo uterino está fechado e o útero apresenta tamanho compatível com a idade gestacional. Exames complementares: β-hCG = 85.000 mUI/mL; ultrassonografia transvaginal revela embrião único vivo com batimentos cardíacos presentes e discreto descolamento corioamniótico. Com base nesse caso hipotético, assinale a alternativa que indica a conduta inicial mais apropriada.",
    "options": [
      "Internação imediata para curetagem uterina.",
      "Indicar uso de misoprostol para esvaziamento.",
      "Prescrever repouso absoluto e antibioticoterapia.",
      "Orientar repouso relativo, evitar relações sexuais e manter acompanhamento ultrassonográfico.",
      "Iniciar progesterona intramuscular por tempo indeterminado."
    ],
    "correctAnswer": 3,
    "explanation": "Sangramento vaginal na 9ª semana com colo fechado, útero compatível e embrião vivo com batimentos cardíacos ao ultrassom: ameaça de abortamento. O pequeno descolamento corioamniótico não muda a conduta.\n\nO manejo é expectante: tranquilizar, repouso relativo, abstinência sexual e acompanhamento ultrassonográfico. A maioria das gestações evolui bem quando há atividade cardíaca.",
    "commentary": "Curetagem (A): seria esvaziar uma gestação viável.\n\nMisoprostol (B): usado para esvaziamento em abortamento retido ou incompleto, não com embrião vivo.\n\nRepouso absoluto e antibiótico (C): repouso absoluto não muda o desfecho e há risco de trombose; não há infecção.\n\nProgesterona IM por tempo indeterminado (E): pode ter papel em casos selecionados (progesterona vaginal em sangramento com história de perdas), mas não por tempo indeterminado nem por via IM como rotina.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / FEBRASGO — Abortamento",
    "tags": [
      "ameaça de abortamento",
      "sangramento na primeira metade da gestação"
    ],
    "tip": "Colo fechado + embrião vivo = ameaça de aborto: conduta expectante."
  },
  {
    "id": "hsrc2026-40",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Maria Eduarda, 34 anos de idade, G2P2A0, usuária de DIU de cobre há 3 anos, refere corrimento vaginal acinzentado, fluido, de odor forte semelhante a “peixe”, sem prurido. Ao exame ginecológico, a secreção encontra-se aderida às paredes vaginais. O pH vaginal é 5,5, o teste das aminas é positivo e o exame microscópico mostra clue cells. Assinale a alternativa que indica o diagnóstico correto e o tratamento indicado.",
    "options": [
      "Vaginose bacteriana – tratar com metronidazol 500 mg VO a cada 12h por 7 dias.",
      "Tricomoníase – tratar com metronidazol 2 g VO dose única.",
      "Candidíase – tratar com fluconazol 150 mg VO dose única.",
      "Cervicite – tratar com azitromicina e ceftriaxona.",
      "Infeção pélvica – tratar com antibióticos parenterais."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento acinzentado, fluido e aderido às paredes, com odor de peixe, pH > 4,5, teste das aminas (whiff) positivo e clue cells: os critérios de Amsel fecham o diagnóstico de vaginose bacteriana (precisa de 3 dos 4).\n\nO tratamento recomendado é metronidazol 500 mg VO de 12/12 h por 7 dias (ou gel vaginal por 5 dias). Não há necessidade de tratar o parceiro, nem de retirar o DIU.",
    "commentary": "Tricomoníase (B): corrimento amarelo-esverdeado, bolhoso, com colo em framboesa e protozoários móveis no exame a fresco.\n\nCandidíase (C): corrimento branco grumoso, prurido intenso e pH < 4,5.\n\nCervicite (D): secreção mucopurulenta do colo, sem odor de peixe nem clue cells.\n\nDoença inflamatória pélvica (E): dor pélvica, dor à mobilização do colo e dos anexos e febre.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "vaginose bacteriana",
      "critérios de Amsel",
      "metronidazol",
      "corrimento vaginal"
    ],
    "tip": "Odor de peixe + clue cells + pH > 4,5 = vaginose: metronidazol 7 dias."
  },
  {
    "id": "hsrc2026-41",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "A Norma Regulamentadora n.º 1 que trata das disposições gerais e gerenciamento de riscos ocupacionais, incluiu explicitamente que a partir de 2022 as organizações obrigadas a constituir CIPA nos termos da NR-05 devem adotar medidas com vistas à prevenção e ao combate do",
    "options": [
      "Assédio moral e discriminação de raça.",
      "Assédio sexual e às demais formas de violência no âmbito do trabalho.",
      "Assédio moral e discriminação de gênero.",
      "Assédio sexual e discriminação de credo religioso.",
      "Assédio moral e discriminação de trabalhadores PCD."
    ],
    "correctAnswer": 1,
    "explanation": "A Lei 14.457/2022 alterou a NR-5 e passou a chamar a CIPA de Comissão Interna de Prevenção de Acidentes e de Assédio. As empresas obrigadas a constituir CIPA devem adotar medidas de prevenção e combate ao assédio sexual e às demais formas de violência no trabalho, como regras de conduta, canais de denúncia e capacitação anual.",
    "commentary": "Assédio moral e discriminação racial (A): o texto legal fala em assédio sexual e demais formas de violência, não destacando apenas raça.\n\nAssédio moral e discriminação de gênero (C): o foco explícito da lei é o assédio sexual.\n\nAssédio sexual e discriminação religiosa (D): a lei não especifica credo; fala em todas as formas de violência.\n\nAssédio moral e PCD (E): não corresponde ao texto.",
    "reference": "Lei nº 14.457/2022 / Norma Regulamentadora nº 5 (Portaria MTP 4.219/2022)",
    "tags": [
      "saúde do trabalhador",
      "CIPA",
      "assédio sexual",
      "normas regulamentadoras"
    ],
    "tip": "Desde 2022 a CIPA é \"de Prevenção de Acidentes e de Assédio\"."
  },
  {
    "id": "hsrc2026-42",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta a correta associação de complicações mais frequentes das pneumoconioses no trabalho, além da fibrose do parênquima pulmonar.",
    "options": [
      "Silicose: tuberculose",
      "Asbestose: bronquiectasias",
      "Silicose: mesotelioma de pleura",
      "Asbestose: hipertensão pulmonar",
      "Silicose: asma brônquica"
    ],
    "correctAnswer": 0,
    "explanation": "A silicose, causada pela inalação de sílica cristalina livre (mineração, jateamento de areia, pedreiras, cerâmica), aumenta muito o risco de tuberculose — a sílica prejudica a função dos macrófagos alveolares. É a complicação mais característica, e trabalhadores com silicose devem ser rastreados para TB latente.",
    "commentary": "Asbestose e bronquiectasias (B): o asbesto se associa a placas pleurais, mesotelioma e câncer de pulmão.\n\nSilicose e mesotelioma (C): o mesotelioma de pleura é ligado ao asbesto (amianto), não à sílica.\n\nAsbestose e hipertensão pulmonar (D): a hipertensão pulmonar pode ocorrer em fibroses avançadas, mas não é a associação clássica.\n\nSilicose e asma (E): a silicose é doença fibrosante, não asma ocupacional.",
    "reference": "Ministério da Saúde — Doenças relacionadas ao trabalho / Protocolo de pneumoconioses",
    "tags": [
      "pneumoconioses",
      "silicose",
      "tuberculose",
      "saúde do trabalhador"
    ],
    "tip": "Silicose → tuberculose. Asbesto → placas pleurais, mesotelioma e câncer de pulmão."
  },
  {
    "id": "hsrc2026-43",
    "topography": "10",
    "topic": "HIV/AIDS",
    "module": "Saúde Coletiva",
    "text": "Uma enfermeira gestante procura o pronto-socorro após exposição de material biológico (líquido amniótico) que atingiu sua mucosa oral e conjuntiva durante o auxílio a parto em período expulsivo, ocorrido há 2 dias. O feto era prematuro, neomorto, e o teste anti-HIV foi negativo. A gestante não realizou acompanhamento pré-natal e evadiu-se no dia seguinte ao parto. Assinale a alternativa que apresenta a conduta correta em relação à profilaxia pós-exposição ao HIV.",
    "options": [
      "Não indicação de realização de quimioprofilaxia tendo em vista o tempo decorrido da exposição.",
      "Não há indicação de realização de quimioprofilaxia tendo em vista que a enfermeira se encontra gestante e há comprovação do teste anti-HIV negativo do natimorto.",
      "Não indicação de realização de quimioprofilaxia tendo em vista que o material biológico não oferece risco",
      "Há indicação de quimioprofilaxia, porém como está gestante deverá ser em dose única.",
      "Há indicação de quimioprofilaxia, pois é seguro para gestantes, e não se conhece a sorologia do paciente fonte."
    ],
    "correctAnswer": 4,
    "explanation": "O líquido amniótico é considerado material biológico potencialmente infectante para HIV, e a exposição de mucosas (boca e conjuntiva) é de risco. A fonte (a parturiente) não tem sorologia conhecida — o teste do natimorto não substitui o da mãe —, e a exposição ocorreu há 2 dias, dentro da janela de 72 horas.\n\nPortanto, há indicação de PEP (tenofovir + lamivudina + dolutegravir por 28 dias), segura na gestação.",
    "commentary": "Tempo decorrido (A): a PEP pode ser iniciada em até 72 horas; 48 horas ainda estão dentro do prazo.\n\nGestação e teste negativo do natimorto (B): a gestação não contraindica a PEP, e o status da fonte é o da mãe, que não foi testada.\n\nMaterial sem risco (C): o líquido amniótico é potencialmente infectante (diferente de urina, saliva ou fezes sem sangue).\n\nDose única na gestante (D): a PEP é sempre por 28 dias.",
    "reference": "Ministério da Saúde — PCDT para Profilaxia Pós-Exposição de Risco à Infecção pelo HIV, IST e Hepatites Virais",
    "tags": [
      "profilaxia pós-exposição",
      "HIV",
      "acidente com material biológico",
      "saúde do trabalhador"
    ],
    "tip": "PEP: até 72 h, por 28 dias. Líquido amniótico é material de risco. Gestação não contraindica."
  },
  {
    "id": "hsrc2026-44",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta em relação à prevenção primária específica por vacinação.",
    "options": [
      "A vacina da dengue não é necessária para quem já teve dengue comprovadamente há menos de dez anos, pois a infecção gera imunidade nesse período para todos os tipos virais da doença.",
      "A vacina da raiva é exclusiva para pessoas em pós-exposição, que sofreram algum acidente com animais de risco.",
      "A vacina da febre tifoide não é indicada para a população em geral devido à baixa incidência em áreas desenvolvidas com infraestrutura de saneamento básico adequada.",
      "A vacina da hepatite C é restrita a pacientes que submetem à hemodiálise, devido à sua alta toxidade e baixa proteção.",
      "A vacina contra o Vírus Sincicial Respiratório (VSR) é contraindicada para gestantes devido ao risco teratogênico."
    ],
    "correctAnswer": 2,
    "explanation": "A febre tifoide depende de saneamento precário; onde há água tratada e esgoto, a incidência é baixa. Por isso, a vacina não está no calendário de rotina da população geral, sendo indicada em situações específicas (viajantes para áreas endêmicas, profissionais de laboratório, surtos).",
    "commentary": "Dengue (A): a infecção protege apenas contra o sorotipo que a causou; a vacina é indicada também para quem já teve dengue (e algumas são preferidas nesse grupo).\n\nRaiva só pós-exposição (B): também há esquema pré-exposição para grupos de risco (veterinários, trabalhadores de laboratório, de zoonoses).\n\nVacina de hepatite C (D): não existe.\n\nVSR contraindicada na gestação (E): a vacina contra VSR é aplicada justamente em gestantes (entre 28 e 36 semanas, no Brasil) para proteger o recém-nascido.",
    "reference": "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais / Calendário Nacional de Vacinação",
    "tags": [
      "vacinação",
      "febre tifoide",
      "imunização"
    ],
    "tip": "Não existe vacina de hepatite C. A de VSR é dada na gestação."
  },
  {
    "id": "hsrc2026-45",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Saúde Coletiva",
    "text": "A hanseníase é uma doença crônica, infectocontagiosa de elevada endemicidade no Brasil, causada por um bacilo capaz de infectar grande número de indivíduos (alta infectividade), embora poucos adoeçam (baixa patogenicidade). Essas propriedades não ocorrem em função apenas das características intrínsecas do agente etiológico, mas dependem, sobretudo, da relação com o hospedeiro e o grau de endemicidade do meio, entre outros aspectos. A forma em que a imunidade celular é nula e o bacilo se multiplica com mais facilidade, levando a uma maior gravidade, com anestesia de pés e mãos, é a:",
    "options": [
      "Indeterminada",
      "Tuberculoide",
      "Dimorfa",
      "Virchowiana",
      "Determinada ou borderline"
    ],
    "correctAnswer": 3,
    "explanation": "A hanseníase tem formas definidas pela resposta imune. Na forma virchowiana (lepromatosa), a imunidade celular contra o bacilo é praticamente nula: o M. leprae se multiplica livremente, com baciloscopia fortemente positiva, lesões disseminadas (infiltração difusa, hansenomas, madarose) e grande acometimento de nervos, incluindo anestesia em luva e bota. É a forma mais grave e contagiosa.",
    "commentary": "Indeterminada (A): forma inicial, com mancha hipocrômica de limites imprecisos e alteração de sensibilidade; pode evoluir para qualquer polo.\n\nTuberculoide (B): imunidade celular forte, poucas lesões bem delimitadas e baciloscopia negativa.\n\nDimorfa (C): imunidade intermediária e instável, com características dos dois polos.\n\nDeterminada ou borderline (E): \"borderline\" é sinônimo da dimorfa; \"determinada\" não é forma clínica.",
    "reference": "Ministério da Saúde — Diretrizes para vigilância, atenção e eliminação da hanseníase / PCDT Hanseníase (2022)",
    "tags": [
      "hanseníase",
      "forma virchowiana",
      "imunidade celular"
    ],
    "tip": "Virchowiana: imunidade celular nula, muitos bacilos, multibacilar e mais grave."
  },
  {
    "id": "hsrc2026-46",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Saúde Coletiva",
    "text": "Em relação à prevenção do suicídio, assinale a alternativa correta.",
    "options": [
      "Pessoas que falam sobre o suicídio não farão mal a si próprias, pois querem apenas chamar a atenção.",
      "Não devemos falar sobre o suicídio pois isso pode aumentar o risco.",
      "A maioria das pessoas que está pensando em suicídio comunica seus pensamentos e intenções, dando sinais e fazendo comentários sobre “querer morrer”.",
      "É proibido que a mídia aborde o suicídio, com a finalidade de estimular as pessoas que apresentam ideação.",
      "Indivíduos com ideação suicida querem mesmo morrer, ou seja, estão decididos."
    ],
    "correctAnswer": 2,
    "explanation": "A maioria das pessoas que pensam em suicídio dá sinais: comenta que quer morrer, que é um peso, se despede, organiza pendências. Reconhecer esses sinais e perguntar diretamente sobre ideação é fundamental para prevenir.\n\nA alternativa C desfaz um dos mitos mais comuns sobre o suicídio.",
    "commentary": "Quem fala não faz (A): mito; falar sobre suicídio é um sinal de alerta e deve ser levado a sério.\n\nNão falar sobre suicídio (B): perguntar não induz o comportamento; ao contrário, alivia e abre espaço para ajuda.\n\nMídia proibida de abordar o tema (D): a mídia pode abordar, desde que de forma responsável (sem detalhar métodos, com informação de ajuda).\n\nQuem tem ideação está decidido (E): a maioria é ambivalente, e a intervenção pode fazer diferença.",
    "reference": "OMS / ABP — Suicídio: informando para prevenir / Ministério da Saúde",
    "tags": [
      "prevenção do suicídio",
      "risco de suicídio",
      "saúde mental"
    ],
    "tip": "Quem fala em morrer está pedindo ajuda. Perguntar não aumenta o risco."
  },
  {
    "id": "hsrc2026-47",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A despeito da Política Nacional de Atenção à Saúde dos Povos Indígenas que integra a Política Nacional de Saúde, assinale a alternativa correta.",
    "options": [
      "Sua implementação não deve adotar um modelo complementar e diferenciado de organização dos serviços de saúde para não caracterizar discriminação étnica.",
      "Os povos indígenas estão presentes basicamente nas regiões norte e nordeste, o que facilita a implementação de ações específicas de saúde à esta população.",
      "Os povos indígenas enfrentam situações semelhantes de tensão social, ameaças e vulnerabilidade da população da classe social desfavorecida.",
      "Em termos gerais observa-se um decréscimo demográfico entre os povos indígenas do país, fato normalmente associado ao precário acesso aos serviços de atenção básica à saúde.",
      "Faz-se necessária uma rede de serviços nas terras indígenas, de forma a superar as deficiências de cobertura, acesso e aceitabilidade do Sistema Único de Saúde para essa população."
    ],
    "correctAnswer": 4,
    "explanation": "A Política Nacional de Atenção à Saúde dos Povos Indígenas (2002) propõe um modelo complementar e diferenciado, com Distritos Sanitários Especiais Indígenas (DSEIs) e uma rede de serviços nas terras indígenas, respeitando a cultura e os saberes tradicionais. O objetivo é superar as deficiências de cobertura, acesso e aceitabilidade do SUS para essa população.",
    "commentary": "Sem modelo diferenciado (A): a política propõe justamente um modelo complementar e diferenciado, para garantir equidade.\n\nPresentes basicamente no Norte e Nordeste (B): há povos indígenas em todas as regiões do país.\n\nSituação semelhante à das classes desfavorecidas (C): os povos indígenas têm vulnerabilidades próprias (territoriais, culturais, linguísticas), não equivalentes.\n\nDecréscimo demográfico (D): nas últimas décadas há crescimento demográfico da população indígena.",
    "reference": "Política Nacional de Atenção à Saúde dos Povos Indígenas — Portaria MS nº 254/2002",
    "tags": [
      "saúde indígena",
      "DSEI",
      "equidade",
      "SUS"
    ],
    "tip": "Saúde indígena: modelo diferenciado, com DSEIs e rede nas terras indígenas."
  },
  {
    "id": "hsrc2026-48",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Saúde Coletiva",
    "text": "Considerando que a cefaleia é um dos sintomas mais frequentes atendidos pelas equipes da atenção primária, assinale a alternativa correta acerca dos atendimentos.",
    "options": [
      "A causa mais comum é a do tipo secundária, relacionada à crise hipertensiva arterial sistêmica.",
      "As cefaleias tipo migrânea (enxaqueca) é a segunda causa mais comum.",
      "A terceira causa está associada a doenças intracranianas graves como tumores ou infecções cerebrais.",
      "O exame físico no caso de cefaleias agudas é irrelevante, pois o diagnóstico é essencialmente sintomatológico.",
      "Nas pacientes do sexo feminino, as crises de migrânea iniciam na puberdade, são mais intensas nas fases menstruais, e pioram muito na gravidez"
    ],
    "correctAnswer": 1,
    "explanation": "A maioria das cefaleias atendidas na atenção primária é primária. A cefaleia do tipo tensional é a mais comum na população, e a migrânea (enxaqueca) vem em segundo lugar.\n\nA alternativa B é a correta.",
    "commentary": "Crise hipertensiva como causa mais comum (A): a hipertensão raramente causa cefaleia, salvo em emergências hipertensivas.\n\nTumores e infecções em terceiro lugar (C): causas graves são raras (menos de 1% dos casos na atenção primária).\n\nExame físico irrelevante (D): o exame físico e neurológico é essencial para buscar sinais de alarme.\n\nMigrânea piora na gravidez (E): a maioria das mulheres melhora da enxaqueca na gestação, especialmente no 2º e 3º trimestres.",
    "reference": "Gusso & Lopes — Tratado de Medicina de Família e Comunidade / Sociedade Brasileira de Cefaleia",
    "tags": [
      "cefaleia",
      "migrânea",
      "cefaleia tensional",
      "atenção primária"
    ],
    "tip": "Tensional é a mais comum; migrânea é a segunda. Enxaqueca costuma melhorar na gestação."
  },
  {
    "id": "hsrc2026-49",
    "topography": "2.2",
    "topic": "Doença arterial coronariana crônica",
    "module": "Saúde Coletiva",
    "text": "A sintomatologia álgica no tórax e abdome é uma frequente queixa nas unidades de saúde, porém para diagnóstico diferencial, a manifestação clássica da isquemia que é a angina, apresenta a seguinte característica mais típica:",
    "options": [
      "Dor na região do tórax que pode ser localizada com a ponta de um dedo e que persiste por muitas horas.",
      "Desconforto na região mediana ou inferior do abdome, que se irradia para as extremidades inferiores.",
      "Dor região do tórax produzida com o movimento ou a palpação da parede do tórax ou dos braços;",
      "Sensação de peso ou aperto no tórax, uma “queimação” ou dificuldade de respirar, associada a irradiação para o ombro esquerdo ou pescoço.",
      "Dor aguda região do tórax, tipo pontada ou em facada, provocada pelos movimentos respiratórios ou pela tosse."
    ],
    "correctAnswer": 3,
    "explanation": "A angina típica é um desconforto retroesternal em peso, aperto, opressão ou queimação, às vezes percebido como falta de ar, que pode irradiar para ombro e braço esquerdos, pescoço ou mandíbula. É desencadeada por esforço ou estresse e alivia com repouso ou nitrato, durando minutos.",
    "commentary": "Dor localizada com a ponta do dedo e por horas (A): dor puntiforme e muito prolongada é atípica, sugerindo causa não isquêmica.\n\nAbdome inferior irradiando para as pernas (B): não é a localização da angina.\n\nDor reproduzida à palpação ou ao movimento (C): sugere causa musculoesquelética.\n\nPontada ventilatório-dependente (E): sugere pleurite, pericardite ou causa parietal.",
    "reference": "Diretriz da SBC sobre doença coronariana estável / Porto — Semiologia médica",
    "tags": [
      "angina",
      "dor torácica",
      "doença arterial coronariana"
    ],
    "tip": "Angina: peso/aperto retroesternal, irradiação para braço ou mandíbula, ligado ao esforço."
  },
  {
    "id": "hsrc2026-50",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em relação à atenção à saúde do homem, assinale a alternativa correta:",
    "options": [
      "Tradicionalmente, o sistema de saúde tem dado prioridade à atenção a crianças, mulheres e idosos – considerando-os como estratos mais frágeis da sociedade",
      "Os homens procuram rotineiramente os espaços de saúde, porém não encontram o suporte necessário.",
      "A violência acomete de maneira semelhante em frequência tantos homens como mulheres, principalmente na faixa de 20 a 39 anos.",
      "Os óbitos por doenças do aparelho circulatório têm prevalência muito próxima entre homens em mulheres, pois estas passaram a apresentar hábitos de risco.",
      "Os tumores que incidem com maior frequência na população masculina são oriundos dos aparelhos digestivo, respiratório e urinário, sendo estes os mais frequentes."
    ],
    "correctAnswer": 0,
    "explanation": "A Política Nacional de Atenção Integral à Saúde do Homem (2009) parte da constatação de que o sistema de saúde tradicionalmente priorizou crianças, mulheres e idosos, considerados mais frágeis, e de que os homens pouco procuram a atenção primária, chegando aos serviços já em fases avançadas das doenças.\n\nA alternativa A reproduz essa constatação.",
    "commentary": "Homens procuram rotineiramente os serviços (B): ao contrário, os homens procuram menos a atenção primária.\n\nViolência semelhante entre os sexos (C): os homens jovens, sobretudo de 20 a 39 anos, são muito mais vítimas de homicídio e acidentes.\n\nÓbitos circulatórios semelhantes (D): os homens têm mortalidade cardiovascular maior e mais precoce.\n\nTumores mais frequentes (E): excluindo pele não melanoma, o câncer mais frequente no homem é o de próstata.",
    "reference": "Ministério da Saúde — Política Nacional de Atenção Integral à Saúde do Homem (PNAISH, 2009)",
    "tags": [
      "saúde do homem",
      "PNAISH",
      "atenção primária"
    ],
    "tip": "PNAISH: homens procuram pouco a APS e morrem mais e mais cedo."
  }
];
