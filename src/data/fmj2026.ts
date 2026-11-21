import { Question } from '../types';

// FMJ 2026 (SP) — residência médica (acesso direto). 100 questões, 5 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const FMJ_2026_QUESTIONS: Question[] = [
  {
    "id": "fmj2026-1",
    "module": "Cirurgia",
    "text": "Assinale a região que não é acometida pela hipertensão portal, decorrente da cirrose hepática.",
    "options": [
      "varizes de esôfago",
      "varizes gástricas",
      "plexo hemorroidário externo",
      "baço",
      "varizes retais"
    ],
    "correctAnswer": 2,
    "explanation": "A hipertensão portal abre colaterais portossistêmicas onde o sistema porta encontra o sistêmico: varizes esofágicas e gástricas (veia gástrica esquerda), varizes retais (veia retal superior × média/inferior), circulação colateral da parede abdominal (veias paraumbilicais) e esplenomegalia congestiva. O plexo hemorroidário externo, abaixo da linha pectínea, drena para o sistema cava (veias retais inferiores → pudendas internas) e não faz parte das varizes da hipertensão portal; hemorroidas não são mais frequentes no cirrótico.",
    "commentary": "Varizes de esôfago (A) e gástricas (B): são as colaterais mais importantes da hipertensão portal.\n\nBaço (D): a congestão causa esplenomegalia e hiperesplenismo.\n\nVarizes retais (E): são colaterais portossistêmicas verdadeiras, diferentes das hemorroidas.",
    "reference": "Baveno VII Consensus (2022); Sabiston – Tratado de Cirurgia",
    "tags": [
      "hipertensão portal",
      "cirrose",
      "varizes",
      "anatomia cirúrgica"
    ],
    "tip": "Hemorroida não é variz portal; varizes retais sim."
  },
  {
    "id": "fmj2026-2",
    "module": "Cirurgia",
    "text": "Assinale a opção que apresenta o local adequado para a realização da flebotomia da veia safena magna no trauma grave.",
    "options": [
      "anterior e inferior ao maléolo medial",
      "anterior e superior ao maléolo medial",
      "posterior e superior ao maléolo medial",
      "anterior e superior ao maléolo lateral",
      "posterior e inferior ao maléolo lateral"
    ],
    "correctAnswer": 1,
    "explanation": "A dissecção (flebotomia) da veia safena magna no tornozelo é feita cerca de 2 cm anterior e 2 cm superior ao maléolo medial, onde a veia é superficial e de localização constante. É acesso alternativo quando não se obtêm acessos periféricos percutâneos ou intraósseo no trauma grave.",
    "commentary": "Anterior e inferior ao maléolo medial (A): a veia passa acima e à frente do maléolo, não abaixo.\n\nPosterior e superior ao maléolo medial (C): posteriormente ao maléolo medial passam o feixe tibial posterior e tendões.\n\nAnterior e superior (D) ou posterior e inferior (E) ao maléolo lateral: no lado lateral passa a veia safena parva, não a magna.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed. (procedimentos)",
    "tags": [
      "flebotomia",
      "veia safena magna",
      "acesso venoso",
      "trauma"
    ],
    "tip": "Safena magna: 2 cm acima e 2 cm à frente do maléolo medial."
  },
  {
    "id": "fmj2026-3",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, em relação à hérnia umbilical na criança.",
    "options": [
      "Orientais, síndrome de Down e peso acima de 3 kg no nascimento são os principais fatores de risco",
      "Grande parte dessas hérnias fecham espontaneamente até o quarto ou quinto ano de vida",
      "Essa condição é incomum nos recém‑nascidos, mas, quando se faz presente, apresenta um alto risco de encarceramento",
      "O ultrassom da parede abdominal deve ser solicitado, em caso de indicação de cirurgia",
      "Não é recomendada atividade física até que a hérnia seja resolvida"
    ],
    "correctAnswer": 1,
    "explanation": "A hérnia umbilical é muito comum em recém-nascidos e lactentes (sobretudo prematuros, negros e com síndrome de Down ou hipotireoidismo) e a maioria fecha espontaneamente até 4–5 anos. Por isso a conduta é expectante; a cirurgia é indicada se persistir após 4–5 anos, se o anel for muito grande (> 1,5–2 cm) ou se houver encarceramento.",
    "commentary": "Orientais, síndrome de Down e peso > 3 kg (A): os fatores de risco são prematuridade/baixo peso, raça negra, síndrome de Down e hipotireoidismo.\n\nIncomum com alto risco de encarceramento (C): é comum e o encarceramento é raro.\n\nUltrassom antes da cirurgia (D): o diagnóstico é clínico.\n\nRestringir atividade física (E): não há necessidade.",
    "reference": "Sociedade Brasileira de Cirurgia Pediátrica; Nelson – Tratado de Pediatria",
    "tags": [
      "hérnia umbilical",
      "cirurgia pediátrica",
      "parede abdominal"
    ],
    "tip": "Hérnia umbilical na criança: esperar até 4–5 anos."
  },
  {
    "id": "fmj2026-4",
    "module": "Cirurgia",
    "text": "Assinale a opção correta quanto ao toque retal (TR) no diagnóstico do câncer colorretal (CCR).",
    "options": [
      "Tumores abaixo da reflexão peritoneal são factíveis de serem diagnosticados pelo TR",
      "50% dos CCR são tocáveis",
      "A colonoscopia substituiu a necessidade do toque retal",
      "Deve ser realizado preferencialmente nos homens, para rastrear também o câncer de próstata",
      "A posição de Sims ou genupeitoral deve ser evitada, para não causar constrangimento ao paciente"
    ],
    "correctAnswer": 0,
    "explanation": "O toque retal alcança cerca de 7–8 cm da margem anal e permite palpar tumores do reto médio e baixo — abaixo da reflexão peritoneal —, avaliando a distância da margem anal, a mobilidade, a fixação e a relação com o esfíncter, informações essenciais para o planejamento cirúrgico. É parte obrigatória do exame proctológico, mesmo com colonoscopia.",
    "commentary": "50% dos CCR são tocáveis (B): a proporção é bem menor (cerca de 10–20%), limitada aos tumores retais baixos.\n\nColonoscopia substituiu o toque (C): o toque retal continua indispensável para avaliar tumores baixos e o esfíncter.\n\nPreferencialmente em homens (D): é indicado em ambos os sexos na avaliação proctológica.\n\nEvitar Sims ou genupeitoral (E): são posições adequadas para o exame, com respeito e explicação ao paciente.",
    "reference": "Sociedade Brasileira de Coloproctologia; NCCN Guidelines – Rectal Cancer",
    "tags": [
      "câncer colorretal",
      "toque retal",
      "exame proctológico",
      "coloproctologia"
    ],
    "tip": "Toque retal avalia tumores do reto baixo (abaixo da reflexão peritoneal)."
  },
  {
    "id": "fmj2026-5",
    "module": "Cirurgia",
    "text": "Assinale a opção compatível com a imagem radiológica característica de fecaloma no RX simples de abdome.",
    "options": [
      "imagem em “grão de café”",
      "nível hidro aéreo",
      "pneumoperitônio",
      "presença de fecalito, principalmente no sigmoide e reto",
      "imagem em “miolo de pão”"
    ],
    "correctAnswer": 4,
    "explanation": "Na radiografia simples, o fecaloma aparece como massa de densidade heterogênea, com bolhas de gás entremeadas a material fecal, com aspecto em “miolo de pão”, geralmente no reto e no sigmoide, podendo causar dilatação a montante.",
    "commentary": "Grão de café (A): sinal do volvo de sigmoide.\n\nNível hidroaéreo (B): sinal inespecífico de obstrução intestinal ou íleo.\n\nPneumoperitônio (C): indica perfuração de víscera oca.\n\nFecalito (D): concreção pequena e calcificada, típica do apêndice; não descreve o fecaloma.",
    "reference": "Sociedade Brasileira de Coloproctologia; Radiologia do abdome agudo",
    "tags": [
      "fecaloma",
      "radiografia de abdome",
      "constipação",
      "coloproctologia"
    ],
    "tip": "Fecaloma: “miolo de pão”. Volvo de sigmoide: “grão de café”."
  },
  {
    "id": "fmj2026-6",
    "module": "Cirurgia",
    "text": "Um examinador realizou uma compressão da fossa ilíaca direita, com um paciente em decúbito dorsal. Ao mesmo tempo, o paciente era instruído a elevar o membro inferior direito estendido. Sinal positivo: o paciente referiu uma dor intensa durante a elevação da perna, indicando irritação peritoneal localizada.\n\nCom base nesse caso clínico hipotético, é correto afirmar que essa descrição semiológica, na avaliação de apendicite aguda, recebe o nome de",
    "options": [
      "sinal de Lapinsky",
      "sinal de Blumberg",
      "sinal Rovsing",
      "sinal de Giordano",
      "sinal de Gersuny"
    ],
    "correctAnswer": 0,
    "explanation": "O sinal de Lapinsky (sinal do psoas com compressão) é pesquisado comprimindo a fossa ilíaca direita enquanto o paciente eleva o membro inferior direito estendido; a dor indica apendicite, sobretudo retrocecal, pela contração do psoas sobre o apêndice inflamado.",
    "commentary": "Blumberg (B): dor à descompressão brusca no ponto de McBurney.\n\nRovsing (C): dor na fossa ilíaca direita ao comprimir a fossa ilíaca esquerda.\n\nGiordano (D): dor à punho-percussão lombar, sugestiva de pielonefrite.\n\nGersuny (E): crepitação ao comprimir e descomprimir o fecaloma no sigmoide.",
    "reference": "Sabiston – Tratado de Cirurgia (apendicite aguda); semiologia do abdome agudo",
    "tags": [
      "apendicite aguda",
      "sinais semiológicos",
      "sinal de Lapinsky",
      "abdome agudo inflamatório"
    ],
    "tip": "Lapinsky: compressão da FID + elevação da perna direita estendida."
  },
  {
    "id": "fmj2026-7",
    "module": "Cirurgia",
    "text": "Perda sanguínea de 750 a 1500 ml, frequência cardíaca (FC) de 100 bpm, redução da pressão de pulso, pressão arterial sistêmica normal, débito urinário de 20‑30 ml/h, frequência respiratória de 20‑30 irpm, discreta agitação ou ansiedade.\n\nCom base nessas informações, é correto afirmar que essas características estão presentes no choque hemorrágico classe",
    "options": [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ],
    "correctAnswer": 1,
    "explanation": "Pelo ATLS, o choque hemorrágico classe II corresponde à perda de 15–30% da volemia (750–1.500 mL em adulto de 70 kg): frequência cardíaca discretamente elevada (> 100), pressão arterial sistólica normal, pressão de pulso reduzida, frequência respiratória de 20–30, diurese de 20–30 mL/h e ansiedade leve.",
    "commentary": "Classe I (A): perda < 15% (até 750 mL), sem alterações relevantes.\n\nClasse III (C): perda de 30–40% (1.500–2.000 mL), com hipotensão, FC > 120 e confusão.\n\nClasse IV (D): perda > 40%, com hipotensão grave, FC > 140 e letargia.\n\nClasse V (E): não existe.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "choque hemorrágico",
      "classificação do ATLS",
      "trauma"
    ],
    "tip": "Classe II: 15–30%, PA normal, pressão de pulso ↓, FC > 100."
  },
  {
    "id": "fmj2026-8",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, em relação ao condiloma acuminado.",
    "options": [
      "A vacinação nonavalente está contraindicada nos pacientes com antecedente de condiloma acuminado",
      "Condiloma acuminado na região de glande tem que ser tratado com cirurgia e, posteriormente, com postectomia",
      "Verrugas na região vaginal estão relacionadas aos tipos virais oncogênicos",
      "A depender da localização, condilomas podem ser tratados clinicamente com pomada",
      "Condilomas na região da vagina, do ânus ou do pênis estão sempre relacionados à atividade sexual sem preservativo"
    ],
    "correctAnswer": 3,
    "explanation": "O condiloma acuminado (HPV 6 e 11, de baixo risco) pode ser tratado com métodos tópicos aplicados pelo paciente (imiquimode, podofilotoxina) ou pelo profissional (ácido tricloroacético, crioterapia), ou com exérese/eletrocauterização, a depender da localização, do número e do tamanho das lesões.",
    "commentary": "Vacina contraindicada com condiloma prévio (A): a vacina pode ser aplicada e protege contra outros tipos; não é contraindicada.\n\nCirurgia e postectomia obrigatórias na glande (B): há opções tópicas e ablativas; a postectomia não é obrigatória.\n\nVerrugas ligadas a tipos oncogênicos (C): as verrugas são causadas principalmente pelos tipos 6 e 11, de baixo risco.\n\nSempre por sexo sem preservativo (E): a transmissão pode ocorrer por contato pele a pele, mesmo com preservativo, e por via não sexual.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "condiloma acuminado",
      "HPV",
      "infecções sexualmente transmissíveis",
      "coloproctologia"
    ],
    "tip": "Condiloma: HPV 6/11; tratamento tópico (imiquimode, ATA) ou ablativo conforme local."
  },
  {
    "id": "fmj2026-9",
    "module": "Cirurgia",
    "text": "Paciente vítima de ferimento corto‑contuso na face de aproximadamente 7 cm que se estende do queixo até a parte interna do lábio inferior.\n\nCom base nesse caso clínico hipotético, assinale a opção correta, em relação ao melhor fio para a realização da dessa sutura.",
    "options": [
      "Nylon 5.0 em todo o ferimento, com pontos simples separado",
      "Vicryl 6‑0 na mucosa com ponto contínuo e Nylon 5.0 na pele com ponto contínuo ancorado",
      "Vicryl 5‑0 na mucosa e Nylon 6.0 na pele, com pontos simples separado em ambos os locais",
      "Vicryl 5‑0 na mucosa e Nylon 3.0 na pele, com pontos simples separados em ambos os locais",
      "Vicryl 6‑0 na mucosa com ponto contínuo ancorado e Nylon 3.0 na pele com ponto simples separado"
    ],
    "correctAnswer": 1,
    "explanation": "Ferimento de 7 cm do queixo até a mucosa do lábio inferior: sutura em dois planos — mucosa com fio absorvível fino (poliglactina/Vicryl 5-0 ou 6-0) e pele com monofilamento fino não absorvível (náilon 5-0 ou 6-0 na face), alinhando primeiro o vermelhão. O gabarito oficial aponta a alternativa B (Vicryl 6-0 na mucosa em ponto contínuo e náilon 5-0 na pele em contínuo ancorado).",
    "commentary": "Náilon 5-0 em todo o ferimento (A): fio inabsorvível na mucosa é inadequado.\n\nVicryl 5-0 na mucosa e náilon 6-0 na pele, pontos separados (C): é a opção que muitos cirurgiões consideram a mais adequada para a face (pontos simples separados permitem melhor coaptação e retirada seletiva); por isso é aceita aqui.\n\nNáilon 3-0 na pele (D e E): fio grosso demais para a face, deixando marcas.",
    "reference": "Sabiston – Tratado de Cirurgia (feridas de face); Sociedade Brasileira de Cirurgia Plástica",
    "tags": [
      "sutura",
      "ferimento de face",
      "fios de sutura",
      "cirurgia ambulatorial"
    ],
    "alert": "Questão discutível: na pele da face, a técnica mais recomendada costuma ser náilon 5-0/6-0 com pontos simples separados (alternativa C). Mantido o gabarito oficial (B); C também é aceita aqui.",
    "alsoAccepted": [
      2
    ],
    "tip": "Face: náilon 5-0/6-0 na pele; Vicryl fino na mucosa."
  },
  {
    "id": "fmj2026-10",
    "module": "Cirurgia",
    "text": "Paciente masculino, de 33 anos de idade com queixa de sangramento, dor e abaulamento anal há 5 semanas. Nega comorbidades. Refere pouca ingesta de fibras e 3 litros de água por dia. Hábito intestinal 1x por semana com fezes endurecidas. Ao exame, presença de plicoma na região posterior do ânus associado a ulceração, papila hipertrófica e hipertonia esfincteriana.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta o tratamento correto.",
    "options": [
      "tratamento tópico com diltiazem a 2%, óleo mineral 15 ml 2x ao dia, 40 gramas de fibra por dia e higiene com água após a evacuação",
      "tratamento tópico com Xilocaína a 4%, bisacodil 1 comprimido 1x ao dia, 20 gramas de fibra por dia e higiene com lenço umedecido após a evacuação",
      "tratamento tópico com corticoide, tamarine 1 comprimido 2x ao dia, 30 gramas de fibra por dia e higiene com água após a evacuação",
      "tratamento tópico com pomada contendo vitamina B, bisacodil 1 comprimido 3x ao dia, 40 gramas de fibra por dia e higiene com água após a evacuação",
      "tratamento tópico com nifedipina, tamarine 1 comprimido ao dia, 30 gramas de fibra por dia e higiene com lenço umedecido após a evacuação seguido de banho de assento com água morna"
    ],
    "correctAnswer": 4,
    "explanation": "Plicoma sentinela, úlcera posterior, papila hipertrófica e hipertonia esfincteriana há 5 semanas, com constipação importante: fissura anal (com sinais de cronicidade). O tratamento inicial é clínico: relaxante esfincteriano tópico (nifedipina ou diltiazem), fibras e laxantes/emolientes para amolecer as fezes, banhos de assento mornos e higiene sem atrito. O gabarito oficial é E (nifedipina tópica, tamarine, fibras e banho de assento).",
    "commentary": "Diltiazem 2%, óleo mineral, 40 g de fibra e higiene com água (A): é esquema igualmente adequado (o diltiazem é bloqueador de cálcio como a nifedipina), por isso é aceito aqui.\n\nXilocaína com bisacodil (B): anestésico isolado não trata a hipertonia, e laxante estimulante não é a escolha.\n\nCorticoide tópico (C): não trata a fissura e pode atrapalhar a cicatrização.\n\nVitamina B tópica e bisacodil 3×/dia (D): sem base e com risco de diarreia.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Anal Fissures (2023)",
    "tags": [
      "fissura anal",
      "bloqueadores de canal de cálcio",
      "coloproctologia"
    ],
    "alert": "Questão discutível: a alternativa A (diltiazem 2% com óleo mineral, fibras e higiene com água) é tão adequada quanto a E. Mantido o gabarito oficial (E); A também é aceita aqui.",
    "alsoAccepted": [
      0
    ],
    "tip": "Fissura anal: relaxante tópico (diltiazem/nifedipina) + fibras + banho de assento."
  },
  {
    "id": "fmj2026-11",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, acerca das queimaduras.",
    "options": [
      "A reanimação de doentes pediátricos com menos de 30 kg deve ser realizada somente com ringer lactato",
      "A reanimação de doentes pediátricos com menos de 30 kg deve ser realizada com 1 ml de ringer lactato/ peso em kg/% área de superfície corporal queimada",
      "Em adultos, o débito urinário esperado deve ser de 1 ml/kg/hora",
      "Em adultos, metade do volume de líquido total estimado deve ser administrado nas primeiras oito horas após a queimadura",
      "A lesão por inalação não aumenta a quantidade de volume necessário para a reposição volêmica"
    ],
    "correctAnswer": 3,
    "explanation": "Na reposição volêmica do grande queimado adulto (ATLS 10), infundem-se 2 mL × kg × %SCQ de Ringer lactato nas primeiras 24 horas, sendo metade nas primeiras 8 horas após a queimadura e a outra metade nas 16 horas seguintes, ajustando pela diurese (0,5 mL/kg/h no adulto).",
    "commentary": "Crianças < 30 kg só com Ringer (A): crianças pequenas precisam de soro com glicose de manutenção além do Ringer.\n\nCrianças com 1 mL/kg/%SCQ (B): a fórmula pediátrica é 3 mL/kg/%SCQ.\n\nDiurese de 1 mL/kg/h em adultos (C): a meta no adulto é 0,5 mL/kg/h (1 mL/kg/h em crianças < 30 kg e em queimaduras elétricas).\n\nInalação não aumenta o volume (E): a lesão inalatória aumenta a necessidade de volume.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "queimaduras",
      "reposição volêmica",
      "trauma"
    ],
    "tip": "Queimado: metade do volume nas primeiras 8 h. Diurese: adulto 0,5; criança 1 mL/kg/h."
  },
  {
    "id": "fmj2026-12",
    "module": "Cirurgia",
    "text": "Utilizando a “regra dos nove” para avaliar a área de superfície corpórea queimada (ASCQ) na criança, assinale a opção que corresponda à região das costas.",
    "options": [
      "9%",
      "13%",
      "15%",
      "18%",
      "27%"
    ],
    "correctAnswer": 3,
    "explanation": "Na regra dos nove pediátrica (Lund-Browder simplificada), as costas (tronco posterior) correspondem a 18%, assim como o tronco anterior. A cabeça representa 18% na criança pequena e cada membro inferior 14%; cada membro superior 9%.",
    "commentary": "9% (A): equivale a um membro superior.\n\n13% (B) e 15% (C): não correspondem às costas.\n\n27% (E): não corresponde a nenhuma região isolada.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "queimaduras",
      "regra dos nove",
      "superfície corporal queimada",
      "cirurgia pediátrica"
    ],
    "tip": "Criança: cabeça 18%, cada perna 14%; tronco anterior e posterior 18% cada."
  },
  {
    "id": "fmj2026-13",
    "module": "Cirurgia",
    "text": "Na intubação orotraqueal no adulto de 70 kg, assinale a opção que corresponda à sequência correta dos eventos que devem ser realizados.",
    "options": [
      "oxigenação até, pelo menos, 85% de saturação, pressão sobre a cartilagem cricoide, administração de succinilcolina 100 mg, administração de etomidato 0,3 mg/kg, intubação por via orotraqueal e insuflação do cuff",
      "oxigenar até obter 100% de saturação, pressão sobre a cartilagem cricoide, administração de succinilcolina 100 mg, administração de etomidato 0,3 mg/kg, insuflação do cuff e intubação por via orotraqueal",
      "oxigenar até obter 100% de saturação, pressão sobre a cartilagem cricoide, administração de etomidato 0,3 mg/kg, administração de succinilcolina 100 mg, intubação por via orotraqueal, insuflação do cuff",
      "oxigenação até pelo menos 85% de saturação, administração de succinilcolina 100 mg, administração de etomidato 0,5 mg/kg, pressão sobre a cartilagem cricoide, intubação por via orotraqueal e insuflação do cuff",
      "oxigenar até obter 100% de saturação, administração de etomidato 0,5 mg/kg, administração de succinilcolina 100 mg, pressão sobre a cartilagem cricoide, intubação por via orotraqueal, insuflação do cuff"
    ],
    "correctAnswer": 2,
    "explanation": "Na sequência rápida de intubação no adulto: pré-oxigenação (idealmente até saturação próxima de 100%, por 3 minutos), pré-tratamento quando indicado, indução com hipnótico (etomidato 0,3 mg/kg) seguido de bloqueador neuromuscular (succinilcolina 1–1,5 mg/kg, cerca de 100 mg em 70 kg), posicionamento/proteção (a pressão cricoide é opcional e controversa), laringoscopia e intubação, insuflação do balonete e confirmação (capnografia). Das opções, a C traz a ordem correta.",
    "commentary": "Saturação de 85%, succinilcolina antes do etomidato (A): a pré-oxigenação deve buscar o máximo, e o hipnótico precede o bloqueador.\n\nInsuflar o cuff antes de intubar (B): o balonete é insuflado após a passagem do tubo.\n\nBloqueador antes do hipnótico e etomidato 0,5 mg/kg (D): ordem invertida e dose inadequada.\n\nEtomidato 0,5 mg/kg (E): a dose habitual é 0,3 mg/kg.",
    "reference": "ATLS 10ª ed.; Difficult Airway Society Guidelines (2015)",
    "tags": [
      "sequência rápida de intubação",
      "via aérea",
      "etomidato",
      "succinilcolina",
      "emergência"
    ],
    "tip": "SRI: pré-oxigenar → hipnótico → bloqueador → intubar → insuflar cuff → confirmar."
  },
  {
    "id": "fmj2026-14",
    "module": "Cirurgia",
    "text": "Assinale a opção que apresenta um conceito diagnóstico ou terapêutico incompatível com a prática clínica adequada.",
    "options": [
      "Doentes com amputação traumática do membro inferior podem se beneficiar do uso de torniquetes",
      "Abordagem gradual para o controle da hemorragia consiste na utilização de curativo compressivo, compressão direta da artéria proximal ao ferimento e caso a hemorragia persista, utilizar torniquete",
      "A aplicação de clamp vascular em ferimentos abertos não é recomendado na sala de emergência",
      "Índice tornozelo‑braquial < 0,9, indica baixa probabilidade de lesão vascular",
      "A parte amputada deve ser lavada, envolvida em gaze estéril umedecida, posteriormente em uma toalha estéril também umedecida, colocada em uma sacola plástica e transportada em um recipiente resfriado com gelo"
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede o conceito incompatível com a prática adequada. Um índice tornozelo-braquial < 0,9 no membro traumatizado indica alta probabilidade de lesão arterial e exige investigação (angio-TC ou arteriografia) — não baixa probabilidade. As demais afirmativas são corretas pelo ATLS.",
    "commentary": "Torniquete na amputação traumática (A): é correto; o torniquete salva vidas na hemorragia de extremidade.\n\nAbordagem gradual da hemorragia (B): compressão direta, depois torniquete, é a sequência recomendada.\n\nNão aplicar clamp vascular às cegas (C): correto; pode lesar nervos e veias.\n\nCuidado com a parte amputada (E): correto: lavar, envolver em gaze úmida, saco plástico e transporte refrigerado, sem contato direto com gelo.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed. (trauma musculoesquelético)",
    "tags": [
      "trauma de extremidades",
      "índice tornozelo-braquial",
      "lesão vascular",
      "trauma"
    ],
    "tip": "ITB < 0,9 após trauma = suspeitar de lesão arterial."
  },
  {
    "id": "fmj2026-15",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, a respeito das hérnias inguinais.",
    "options": [
      "Não há medidas de saúde pública que possam diminuir a incidência das hérnias inguinais",
      "A ultrassonografia da parede abdominal é o exame de escolha na suspeita diagnóstica de hérnias inguinais, sendo a tomografia a segunda opção, a qual é indicada quando ainda existirem dúvidas em relação ao diagnóstico da hérnia, após o exame ultrassonográfico",
      "A classificação de Nyhus divide as hernias inguinais em tipo I direta, tipo II indireta e tipo III femoral",
      "Em relação à prevalência das hérnias inguinais, as indiretas são mais comuns em crianças, as femorais em homens adultos e as diretas em mulheres adultas",
      "A etiologia está relacionada ao comprometimento da estrutura do colágeno que compõe o tecido conjuntivo da parede abdominal, apresentando uma menor proporção de colágeno tipo I e colágeno tipo III no tecido conjuntivo"
    ],
    "correctAnswer": 4,
    "explanation": "Na etiologia das hérnias inguinais (sobretudo diretas e recidivadas), há alteração do metabolismo do colágeno, com redução da relação entre colágeno tipo I (maduro, resistente) e tipo III (imaturo, menos resistente), o que enfraquece a fáscia transversal. Tabagismo e doenças do colágeno contribuem.",
    "commentary": "Nenhuma medida de saúde pública (A): controle de tabagismo, obesidade e doenças que aumentam a pressão abdominal podem reduzir a incidência.\n\nUltrassom como exame de escolha (B): o diagnóstico é clínico; imagem é reservada para dúvida (ultrassom e, depois, RM).\n\nNyhus com tipo I direta, II indireta, III femoral (C): na classificação de Nyhus, I e II são indiretas (anel normal ou dilatado), IIIa direta, IIIb indireta grande, IIIc femoral e IV recidivadas.\n\nFemorais em homens e diretas em mulheres (D): as femorais são mais frequentes em mulheres; as indiretas são as mais comuns em todos os grupos.",
    "reference": "HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "colágeno",
      "classificação de Nyhus",
      "cirurgia geral"
    ],
    "tip": "Hérnia e colágeno: menos colágeno I em relação ao III."
  },
  {
    "id": "fmj2026-16",
    "module": "Cirurgia",
    "text": "Assinale a opção que apresenta as características das fístulas perianais na doença de Crohn.",
    "options": [
      "O uso de mesalazina associada com azatioprina e corticoide propicia uma boa resposta",
      "Apresentam trajetos curtos sem acometimento esfincteriano",
      "Estão frequentemente associadas ao abscesso perianal",
      "A cirurgia será sempre indicada para evitar a recidiva da doença",
      "A ultrassonografia transretal é o padrão‑ouro para diagnósticos de fístulas ocultas"
    ],
    "correctAnswer": 2,
    "explanation": "As fístulas perianais da doença de Crohn são frequentemente complexas (trajetos ramificados, altos, com acometimento esfincteriano) e se associam com frequência a abscessos perianais. A avaliação é feita por ressonância magnética da pelve (padrão-ouro, junto com exame sob anestesia), e o tratamento combina drenagem de abscessos e sedenhos com terapia biológica (anti-TNF).",
    "commentary": "Mesalazina com azatioprina e corticoide (A): mesalazina e corticoide não tratam fístulas; o tratamento de escolha é anti-TNF (com ou sem imunomodulador) e antibiótico.\n\nTrajetos curtos sem acometimento esfincteriano (B): costumam ser complexos e envolver o esfíncter.\n\nCirurgia sempre (D): a cirurgia é conservadora (drenagem e sedenho) e não previne recidiva da doença.\n\nUltrassom transretal como padrão-ouro (E): o padrão-ouro é a RM pélvica.",
    "reference": "ECCO Guidelines on Therapeutics in Crohn's Disease (2020); GEDIIB",
    "tags": [
      "doença de Crohn",
      "fístula perianal",
      "abscesso perianal",
      "coloproctologia"
    ],
    "tip": "Crohn perianal: RM + drenagem/sedenho + anti-TNF."
  },
  {
    "id": "fmj2026-17",
    "module": "Cirurgia",
    "text": "Assinale a opção que apresenta os tipos de abdome agudo cujo diagnóstico é facilitado por meio do exame de ultrassonografia.",
    "options": [
      "perfurativo e vascular",
      "obstrutivo e perfurativo",
      "inflamatório e infeccioso",
      "obstrutivo e hemorrágico",
      "hemorrágico e inflamatório"
    ],
    "correctAnswer": 2,
    "explanation": "A ultrassonografia é especialmente útil no abdome agudo inflamatório/infeccioso: colecistite aguda (exame de escolha), apendicite (sobretudo em crianças, gestantes e mulheres jovens), abscessos e afecções ginecológicas. No abdome perfurativo, a radiografia e a TC são superiores; no obstrutivo e no vascular, a TC.",
    "commentary": "Perfurativo e vascular (A): pneumoperitônio e isquemia são melhor avaliados por radiografia/TC e angio-TC.\n\nObstrutivo e perfurativo (B): radiografia e TC são os exames iniciais.\n\nObstrutivo e hemorrágico (D): no obstrutivo a TC é preferida; no hemorrágico o ultrassom (FAST) ajuda, mas não no obstrutivo.\n\nHemorrágico e inflamatório (E): o hemorrágico também se beneficia do ultrassom, mas a dupla que o gabarito considera é inflamatório e infeccioso.",
    "reference": "Sabiston – Tratado de Cirurgia (abdome agudo); ACR Appropriateness Criteria",
    "tags": [
      "abdome agudo",
      "ultrassonografia",
      "diagnóstico por imagem"
    ],
    "tip": "USG brilha no abdome agudo inflamatório (vesícula, apêndice, pelve)."
  },
  {
    "id": "fmj2026-18",
    "module": "Cirurgia",
    "text": "Assinale a opção que corresponda, respectivamente, à doença que se caracteriza pela Tríade de Charcot e pela Pêntade de Reynolds.",
    "options": [
      "colangite e apendicite aguda",
      "pancreatite e colangite aguda",
      "apendicite aguda e cisto roto de ovário",
      "colangite e diverticulite complicada",
      "ambas se referem à colangite aguda"
    ],
    "correctAnswer": 4,
    "explanation": "Tríade de Charcot (febre, icterícia e dor em hipocôndrio direito) e pêntade de Reynolds (tríade + hipotensão e confusão mental) referem-se à colangite aguda; a pêntade indica colangite grave (supurativa), com necessidade de drenagem biliar de urgência.",
    "commentary": "Colangite e apendicite (A), pancreatite e colangite (B), apendicite e cisto ovariano roto (C) e colangite e diverticulite (D): tanto a tríade de Charcot quanto a pêntade de Reynolds descrevem a colangite aguda.",
    "reference": "Tokyo Guidelines 2018 (TG18)",
    "tags": [
      "colangite aguda",
      "tríade de Charcot",
      "pêntade de Reynolds",
      "vias biliares"
    ],
    "tip": "Charcot: febre + icterícia + dor. Reynolds: + choque + confusão."
  },
  {
    "id": "fmj2026-19",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, acerca de como deve ser realizada a intubação orotraqueal em um paciente com colar cervical.",
    "options": [
      "Idealmente com dois profissionais, sendo um para remover parcialmente o colar cervical, apenas a parte anterior e mantendo a estabilização manual da cabeça e outro para a intubação",
      "Idealmente com dois profissionais, sendo um para remover o colar cervical e ajudar na preparação do laringoscópio e do tubo orotraqueal e outro para a intubação",
      "Idealmente com dois profissionais, sendo um para remover parcial do colar cervical, apenas a parte anterior, e para realizar a manobra de Sellick e outro para a intubação",
      "Não há necessidade de dois profissionais, desde que mantenha o colar cervical",
      "Não há necessidade de dois profissionais, desde que retire o colar cervical e mantenha a cabeça estabilizada"
    ],
    "correctAnswer": 0,
    "explanation": "Na intubação de paciente com suspeita de lesão cervical, um profissional mantém a estabilização manual em linha da cabeça e do pescoço, enquanto a parte anterior do colar é aberta/removida para permitir abertura da boca e laringoscopia; o outro profissional intuba. Após a intubação, recoloca-se o colar.",
    "commentary": "Remover o colar e ajudar a preparar materiais (B): o auxiliar deve manter a estabilização manual, não ficar com outras funções.\n\nRemover parte do colar e fazer Sellick (C): a função do auxiliar é a estabilização manual em linha; a manobra de Sellick não é prioridade.\n\nNão precisa de dois profissionais mantendo o colar (D): com o colar fechado a abertura da boca é limitada.\n\nRetirar o colar sem auxiliar (E): sem estabilização manual há risco de mobilizar a coluna.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "via aérea",
      "trauma raquimedular",
      "intubação orotraqueal",
      "trauma"
    ],
    "tip": "Colar cervical: abrir a frente e manter estabilização manual em linha durante a intubação."
  },
  {
    "id": "fmj2026-20",
    "module": "Cirurgia",
    "text": "Assinale a opção correta, em relação a quantos pontos na escala de coma de Glasgow, corresponde à resposta motora compatível com decorticação.",
    "options": [
      "5",
      "4",
      "3",
      "2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Na escala de coma de Glasgow, a resposta motora é pontuada: 6 obedece comandos; 5 localiza a dor; 4 retirada (flexão normal); 3 flexão anormal (decorticação); 2 extensão anormal (descerebração); 1 nenhuma resposta.",
    "commentary": "5 (A): localiza o estímulo doloroso.\n\n4 (B): retirada ao estímulo (flexão normal).\n\n2 (D): extensão anormal (descerebração).\n\n1 (E): ausência de resposta motora.",
    "reference": "Teasdale G et al. Glasgow Coma Scale at 40 (2014); ATLS 10ª ed.",
    "tags": [
      "escala de coma de Glasgow",
      "trauma cranioencefálico",
      "neurologia"
    ],
    "tip": "Glasgow motor: decorticação 3, descerebração 2."
  },
  {
    "id": "fmj2026-21",
    "module": "Clínica Médica",
    "text": "Um homem de 65 anos de idade, diabético, com DRC estágio 4 (TFG estimada 28 ml/min/1,73 m²) e hipertenso relatou possuir arritmia há anos, bem como insuficiência cardíaca com fração de ejeção preservada. O paciente estava em uso de losartana e apresentava PA de 150/90 mmHg e FC de 115 na consulta. Foram confirmadas aferições em valores semelhantes em controle, o que fora trazido pelo próprio paciente.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta o próximo agente farmacológico preferencial para o tratamento anti‑hipertensivo ao caso em específico.",
    "options": [
      "furosemida",
      "bisoprolol",
      "anlodipino",
      "diltiazem",
      "espironolactona"
    ],
    "correctAnswer": 1,
    "explanation": "Hipertenso diabético com DRC estágio 4, insuficiência cardíaca com fração de ejeção preservada e arritmia com frequência de 115 bpm (provável fibrilação atrial de alta resposta), em uso de losartana. O próximo fármaco deve controlar a pressão e a frequência: um betabloqueador cardiosseletivo como o bisoprolol, que é seguro na DRC avançada e na ICFEp.",
    "commentary": "Furosemida (A): útil para congestão e hipervolemia na DRC, mas não controla a frequência cardíaca.\n\nAnlodipino (C): reduz a PA, mas não controla a frequência.\n\nDiltiazem (D): controla a frequência na FA, mas o betabloqueador é preferido quando há insuficiência cardíaca e a associação de benefícios é maior.\n\nEspironolactona (E): risco alto de hipercalemia com TFG < 30 em uso de BRA.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020) e de Fibrilação Atrial",
    "tags": [
      "hipertensão arterial sistêmica",
      "fibrilação atrial",
      "doença renal crônica",
      "betabloqueadores",
      "cardiologia"
    ],
    "tip": "Hipertensão + FA de alta resposta: betabloqueador controla PA e FC."
  },
  {
    "id": "fmj2026-22",
    "module": "Clínica Médica",
    "text": "Um homem de 65 anos de idade, diabético, com DRC estágio 4 (TFG estimada 28 ml/min/1,73 m²) e hipertenso relatou possuir arritmia há anos, bem como insuficiência cardíaca com fração de ejeção preservada. O paciente estava em uso de losartana e apresentava PA de 150/90 mmHg e FC de 115 na consulta. Foram confirmadas aferições em valores semelhantes em controle, o que fora trazido pelo próprio paciente.\n\nA figura a seguir trata de um eletrocardiograma realizado uma semana antes da consulta relatada no caso clínico apresentado.\n\nCom base nesses resultados, assinale a opção correta, quanto à anticoagulação.",
    "options": [
      "Não possui indicação ainda de iniciar anticoagulação",
      "Pode se iniciar apixabana, caso boas condições financeiras",
      "Pode se iniciar preferencialmente Rivaroxabana, caso boas condições financeiras",
      "Pode se iniciar preferencialmente Marevan, caso boas condições financeiras",
      "Pode se iniciar preferencialmente Heparina subcutânea, caso boas condições financeiras"
    ],
    "correctAnswer": 3,
    "explanation": "O ECG mostra ritmo irregular compatível com fibrilação atrial. O paciente tem CHA₂DS₂-VASc elevado (hipertensão, diabetes, insuficiência cardíaca, idade 65–74 anos) e indicação de anticoagulação. Pelo gabarito oficial, a escolha é varfarina (Marevan) com controle do INR — considerada por muitos a opção preferencial na DRC avançada.\n\nNa prática, com clearance entre 15 e 30 mL/min, a apixabana em dose ajustada também é aceita pelas diretrizes (é o DOAC com menor eliminação renal).",
    "commentary": "Sem indicação de anticoagular (A): o CHA₂DS₂-VASc é alto; a anticoagulação está indicada.\n\nApixabana (B): é opção aceitável na DRC estágio 4, por isso é aceita aqui.\n\nRivaroxabana preferencialmente (C): pode ser usada em dose reduzida até ClCr de 15, mas não é a preferencial nesse cenário.\n\nHeparina subcutânea (E): não é estratégia de anticoagulação crônica na FA.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Fibrilação Atrial; ESC 2024 Guidelines for AF; KDIGO",
    "tags": [
      "fibrilação atrial",
      "anticoagulação",
      "doença renal crônica",
      "varfarina",
      "cardiologia"
    ],
    "image": "/images/fmj2026-22.webp",
    "alert": "Questão discutível: com ClCr de 28 mL/min, a apixabana (dose ajustada) também é aceita pelas diretrizes. Mantido o gabarito oficial (D); B também é aceita aqui.",
    "alsoAccepted": [
      1
    ],
    "tip": "FA com CHA₂DS₂-VASc alto: anticoagular. DRC 4: varfarina ou apixabana."
  },
  {
    "id": "fmj2026-23",
    "module": "Clínica Médica",
    "text": "Um paciente de 62 anos de idade, com histórico de AVCi recente, apresentou‑se no departamento de emergência com rebaixamento do nível de consciência, sem atividade motora evidente. No exame físico, observaram‑se automatismo oral discreto e movimentos oculares erráticos. A glicemia capilar estava em 128. Foi apontada urina 1 com discreta leucocitúria, sem mais alterações. Aguardava exames de sangue.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a principal hipótese diagnostica e a conduta inicial recomendada na emergência.",
    "options": [
      "delirium secundário à infecção urinária; iniciar antibiótico empírico",
      "estado pós‑ictal; observação clínica",
      "estado de mal epiléptico não convulsivo; solicitar EEG urgente e iniciar benzodiazepínico",
      "encefalopatia metabólica; solicitar eletrólitos e corrigir distúrbios",
      "crise epiléptica focal simples; iniciar levetiracetam oral"
    ],
    "correctAnswer": 2,
    "explanation": "Paciente com AVC isquêmico recente (fator de risco para epilepsia), rebaixamento de consciência sem causa metabólica aparente, com automatismos orais discretos e movimentos oculares erráticos: estado de mal epiléptico não convulsivo. O diagnóstico é confirmado por EEG urgente, e o tratamento começa com benzodiazepínico, seguido de anticrise de manutenção.",
    "commentary": "Delirium por infecção urinária (A): leucocitúria discreta não explica automatismos e movimentos oculares.\n\nEstado pós-ictal (B): é transitório e não apresenta automatismos persistentes.\n\nEncefalopatia metabólica (D): a glicemia está normal; distúrbios eletrolíticos devem ser checados, mas os sinais motores sutis sugerem crise contínua.\n\nCrise focal simples (E): por definição não altera a consciência.",
    "reference": "Neurocritical Care Society – Guideline for Status Epilepticus (2012); Academia Brasileira de Neurologia",
    "tags": [
      "estado de mal epiléptico não convulsivo",
      "EEG",
      "AVC",
      "neurologia"
    ],
    "tip": "Rebaixamento inexplicado + automatismos sutis: pensar em mal epiléptico não convulsivo → EEG."
  },
  {
    "id": "fmj2026-24",
    "module": "Clínica Médica",
    "text": "Um homem de 38 anos de idade, com sinusite crônica e sem mais patologias, chegou ao departamento de emergência com quadro de febre alta (39,5 °C), sudorese intensa, agitação psicomotora, vômitos recorrentes e dor abdominal há 24 horas. No exame, apresentou taquicardia (132 bpm), pressão arterial 110/60 mmHg, confusão mental e tremores finos nas mãos. Estava com boa perfusão periférica. O ECG mostrou fibrilação atrial de alta resposta ventricular. O exame físico resultou em contexto sem lesões cutâneas, sem sopros ou outras alterações dignas de nota. Não havia outros sinais de infecção evidente, de uso de drogas e medicamentos, de episódio prévio semelhante ou de história de abstinência alcoólica.\n\nFamiliares relataram que, há algumas semanas, o paciente foi submetido a uma cirurgia com otorrinolaringologista, após a visualização de uma anormalidade na TC de face.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a principal hipótese diagnóstica e a conduta adequada na emergência.",
    "options": [
      "Fibrilação atrial de alta resposta sem desencadeante aparente no momento; proceder com cardioversão elétrica sincronizada",
      "Síndrome serotoninérgica; suspender medicações e iniciar benzodiazepínicos",
      "Crise adrenérgica por feocromocitoma; iniciar alfa‑bloqueador e hidratação",
      "Sepse de foco indeterminado; associar vasopressores",
      "Crise tireotóxica; iniciar corticoesteroides, betabloqueadores, antitérmicos e antitireoideano"
    ],
    "correctAnswer": 4,
    "explanation": "Febre alta, sudorese, agitação, confusão mental, vômitos, dor abdominal, tremor fino e fibrilação atrial de alta resposta após cirurgia otorrinolaringológica recente (provável exposição a contraste iodado ou estresse cirúrgico em hipertireoidismo não diagnosticado): crise tireotóxica (tempestade tireoidiana). O tratamento envolve betabloqueador (propranolol), tionamida (propiltiouracil ou metimazol), iodo (após a tionamida), corticoide (hidrocortisona), antitérmicos (paracetamol, não AAS) e suporte.",
    "commentary": "FA sem desencadeante e cardioversão (A): a FA é secundária à tireotoxicose; a cardioversão costuma falhar sem tratar a causa.\n\nSíndrome serotoninérgica (B): exige uso de serotoninérgicos e cursa com clônus e hiper-reflexia.\n\nFeocromocitoma (C): crises paroxísticas com hipertensão; não explica febre alta e o contexto.\n\nSepse (D): não há foco infeccioso, e a perfusão está boa.",
    "reference": "ATA Guidelines for Hyperthyroidism (2016); Burch-Wartofsky score",
    "tags": [
      "tempestade tireoidiana",
      "hipertireoidismo",
      "fibrilação atrial",
      "emergência endocrinológica"
    ],
    "tip": "Febre + taquiarritmia + agitação + gatilho (iodo, cirurgia): tempestade tireoidiana."
  },
  {
    "id": "fmj2026-25",
    "module": "Clínica Médica",
    "text": "Um homem de 38 anos de idade, com sinusite crônica e sem mais patologias, chegou ao departamento de emergência com quadro de febre alta (39,5 °C), sudorese intensa, agitação psicomotora, vômitos recorrentes e dor abdominal há 24 horas. No exame, apresentou taquicardia (132 bpm), pressão arterial 110/60 mmHg, confusão mental e tremores finos nas mãos. Estava com boa perfusão periférica. O ECG mostrou fibrilação atrial de alta resposta ventricular. O exame físico resultou em contexto sem lesões cutâneas, sem sopros ou outras alterações dignas de nota. Não havia outros sinais de infecção evidente, de uso de drogas e medicamentos, de episódio prévio semelhante ou de história de abstinência alcoólica.\n\nFamiliares relataram que, há algumas semanas, o paciente foi submetido a uma cirurgia com otorrinolaringologista, após a visualização de uma anormalidade na TC de face.\n\nApós a estabilização do paciente apresentado nesse caso clínico, assinale a opção que apresenta o exame prioritário para a continuidade do manejo do paciente.",
    "options": [
      "metanefrinas séricas e urinárias",
      "dosagem de 5‑HT sérico",
      "ressonância magnética de abdome",
      "ecocardiograma transesofágico",
      "avaliação de função tireoidiana"
    ],
    "correctAnswer": 4,
    "explanation": "Após estabilizar a suspeita de crise tireotóxica, o exame prioritário é a avaliação da função tireoidiana (TSH suprimido com T4 livre e T3 elevados), seguida da investigação etiológica (anticorpo anti-receptor de TSH, cintilografia ou ultrassom com Doppler). O tratamento não deve esperar o resultado.",
    "commentary": "Metanefrinas (A): investigariam feocromocitoma, hipótese menos provável.\n\n5-HT sérico (B): não é exame usado para síndrome serotoninérgica, cujo diagnóstico é clínico.\n\nRM de abdome (C): sem indicação.\n\nEcocardiograma transesofágico (D): útil para avaliar trombo atrial antes de cardioversão, mas não define a causa.",
    "reference": "ATA Guidelines for Hyperthyroidism (2016)",
    "tags": [
      "tempestade tireoidiana",
      "função tireoidiana",
      "hipertireoidismo",
      "endocrinologia"
    ],
    "tip": "Suspeita de tireotoxicose: TSH, T4L e T3 (sem atrasar o tratamento)."
  },
  {
    "id": "fmj2026-26",
    "module": "Clínica Médica",
    "text": "Um homem de 68 anos de idade, diabético, hipertenso e dislipidêmico dirigiu‑se à emergência do pronto‑socorro apresentando tosse, escarro produtivo, febre, confusão mental, hipotensão (PA 85/50 mmHg), taquipneia (FR de 26 irpm), oligúria e tempo de enchimento capilar de 4 segundos. O paciente negou internação recente ou intercorrências nos últimos meses.\n\nAssinale a opção correta que apresenta a conduta, com maior prioridade no quadro em questão.",
    "options": [
      "coleta de culturas e início precoce de antibiótico de amplo espectro",
      "administração de corticosteroide em altas doses",
      "início imediato de vasopressor antes da ressuscitação volêmica",
      "restrição volêmica até resultado de ecocardiograma ou pocus",
      "transfusão sanguínea imediata"
    ],
    "correctAnswer": 0,
    "explanation": "Pneumonia com choque séptico (hipotensão, confusão, oligúria, enchimento capilar lento). Pelo pacote da primeira hora da Surviving Sepsis Campaign: coletar lactato e hemoculturas, iniciar antibiótico de amplo espectro o mais cedo possível (até 1 hora), reposição volêmica com 30 mL/kg de cristaloide e vasopressor se a PA média seguir < 65 mmHg. Entre as opções, a prioridade é culturas e antibiótico precoce.",
    "commentary": "Corticoide em alta dose (B): hidrocortisona em dose baixa é indicada apenas no choque refratário a vasopressor.\n\nVasopressor antes da volemia (C): pode ser iniciado junto com a reposição em hipotensão grave, mas não substitui o volume.\n\nRestrição volêmica até ecocardiograma (D): atrasaria a ressuscitação.\n\nTransfusão imediata (E): sem anemia descrita, não há indicação.",
    "reference": "Surviving Sepsis Campaign: International Guidelines (2021); Instituto Latino-Americano de Sepse",
    "tags": [
      "choque séptico",
      "sepse",
      "pneumonia",
      "antibioticoterapia",
      "terapia intensiva"
    ],
    "tip": "Sepse: culturas + antibiótico na 1ª hora + 30 mL/kg + vasopressor se PAM < 65."
  },
  {
    "id": "fmj2026-27",
    "module": "Clínica Médica",
    "text": "Um homem de 68 anos de idade, diabético, hipertenso e dislipidêmico dirigiu‑se à emergência do pronto‑socorro apresentando tosse, escarro produtivo, febre, confusão mental, hipotensão (PA 85/50 mmHg), taquipneia (FR de 26 irpm), oligúria e tempo de enchimento capilar de 4 segundos. O paciente negou internação recente ou intercorrências nos últimos meses.\n\nCom base no caso clínico hipotético apresentado, assinale a opção que apresenta o tratamento empírico adequado.",
    "options": [
      "amoxicilina + clavulanato",
      "ceftriaxone + azitromicina",
      "vancomicina",
      "piperacilina + tazobactam",
      "piperacilina + tazobactam + vancomicina"
    ],
    "correctAnswer": 1,
    "explanation": "Pneumonia adquirida na comunidade grave (choque séptico, confusão), sem internação ou uso de antibiótico recente e sem fatores de risco para Pseudomonas ou MRSA: o esquema empírico recomendado é betalactâmico (ceftriaxona) associado a macrolídeo (azitromicina), ou betalactâmico + quinolona respiratória.",
    "commentary": "Amoxicilina-clavulanato (A): opção para tratamento ambulatorial com comorbidades, não para PAC grave.\n\nVancomicina isolada (C): só cobre gram-positivos (inclusive MRSA), sem cobertura para atípicos e gram-negativos.\n\nPiperacilina-tazobactam com ou sem vancomicina (D e E): reservados a pacientes com fatores de risco para Pseudomonas/MRSA (internação recente, antibiótico venoso nos últimos 90 dias, colonização prévia).",
    "reference": "ATS/IDSA Guideline for Community-Acquired Pneumonia (2019); SBPT (2018)",
    "tags": [
      "pneumonia adquirida na comunidade",
      "ceftriaxona",
      "azitromicina",
      "pneumologia"
    ],
    "tip": "PAC grave sem risco de Pseudomonas/MRSA: ceftriaxona + azitromicina."
  },
  {
    "id": "fmj2026-28",
    "module": "Clínica Médica",
    "text": "Um adulto hígido de 28 anos de idade compareceu ao pronto atendimento devido a uma mordedura de um cão. O paciente compareceu ao hospital 8 horas após o acidente e informou que o animal era de seu vizinho. O homem não apresentou qualquer mudança clínica recente, estava sob vigilância em domicilio e não possuía comprovação vacinal. A ferida estava localizada na mão esquerda, e se mostrava profunda e com exposição de tecido subcutâneo.\n\nAssinale a opção que apresenta a conduta adequada na avaliação inicial deste paciente.",
    "options": [
      "realizar inspeção da ferida, buscando sinais de infecção; avaliar função neurovascular e articular; investigar corpo estranho; considerar microbiologia provável para possível infecção (Pseudomonas aerouginosa, Escherichia coli, Proteus mirabilis, Staphylococcus e anaeróbios)",
      "realizar inspeção da ferida, buscando sinais de infecção; avaliar função neurovascular e articular; investigar corpo estranho; considerar microbiologia provável para possível infecção (Pasteurella spp., Capnocytophaga canimorsus, Streptococcus, Staphylococcus, anaeróbios)",
      "realizar inspeção da ferida, buscando sinais de infecção; avaliar função neurovascular e articular; investigar corpo estranho; iniciar corticoesteroides e antialérgicos e considerar microbiologia provável para possível infecção (Pasteurella spp., Capnocytophaga canimorsus, Streptococcus, Staphylococcus, anaeróbios)",
      "realizar apenas limpeza superficial, sem necessidade de avaliação da função articular ou neurovascular",
      "rescrever corticosteroide para reduzir edema local, sem necessidade de investigação microbiológica adicional por agora"
    ],
    "correctAnswer": 1,
    "explanation": "Na mordedura de cão, a avaliação inicial inclui inspeção da ferida (sinais de infecção, profundidade), avaliação neurovascular, tendínea e articular (especialmente na mão), pesquisa de corpo estranho e consideração da flora provável: Pasteurella spp., Capnocytophaga canimorsus, estreptococos, estafilococos e anaeróbios. Também se avaliam profilaxia antitetânica e antirrábica.",
    "commentary": "Flora com Pseudomonas, E. coli e Proteus (A): não é a flora típica da mordedura canina.\n\nCorticoide e antialérgico (C): não têm indicação.\n\nApenas limpeza superficial (D): ferida profunda em mão exige limpeza abundante e avaliação de estruturas profundas.\n\nCorticoide para edema (E): sem indicação, e a avaliação microbiológica é necessária.",
    "reference": "IDSA Practice Guidelines for Skin and Soft Tissue Infections (2014); Ministério da Saúde – Profilaxia da raiva humana",
    "tags": [
      "mordedura de cão",
      "P. multocida",
      "infecções de pele",
      "infectologia"
    ],
    "tip": "Mordida de cão: Pasteurella, Capnocytophaga, estrepto, estafilo e anaeróbios."
  },
  {
    "id": "fmj2026-29",
    "module": "Clínica Médica",
    "text": "Um adulto hígido de 28 anos de idade compareceu ao pronto atendimento devido a uma mordedura de um cão. O paciente compareceu ao hospital 8 horas após o acidente e informou que o animal era de seu vizinho. O homem não apresentou qualquer mudança clínica recente, estava sob vigilância em domicilio e não possuía comprovação vacinal. A ferida estava localizada na mão esquerda, e se mostrava profunda e com exposição de tecido subcutâneo.\n\nConsiderando o quadro clínico descrito, assinale a opção que apresenta a conduta adequada em relação ao antibiótico.",
    "options": [
      "iniciar profilaxia com azitromicina, devido à lesão profunda em mão, independentemente de sinais de infecção",
      "iniciar profilaxia com amoxicilina/clavulanato, devido à lesão profunda em mão, independentemente de sinais de infecção",
      "iniciar profilaxia com cefalexina, devido à lesão profunda em mão, independentemente de sinais de infecção",
      "indicar antibiótico apenas se houver sinais sistêmicos de infecção ou secreção purulenta local",
      "iniciar profilaxia com metronidazol, devido à lesão profunda em mão, independentemente de sinais de infecção"
    ],
    "correctAnswer": 1,
    "explanation": "Mordeduras de cão profundas, em mão ou face, próximas a articulações, com lesão por esmagamento ou em imunossuprimidos têm indicação de antibiótico profilático por 3 a 5 dias, mesmo sem sinais de infecção. A escolha é amoxicilina-clavulanato, que cobre Pasteurella, estafilococos, estreptococos e anaeróbios.",
    "commentary": "Azitromicina (A): cobertura inadequada para anaeróbios e estafilococos.\n\nCefalexina (C): não cobre Pasteurella multocida de forma confiável nem anaeróbios.\n\nSó tratar com sinais de infecção (D): lesão profunda em mão é indicação de profilaxia.\n\nMetronidazol (E): só cobre anaeróbios.",
    "reference": "IDSA Practice Guidelines for Skin and Soft Tissue Infections (2014)",
    "tags": [
      "mordedura de cão",
      "amoxicilina-clavulanato",
      "profilaxia antibiótica",
      "infectologia"
    ],
    "tip": "Mordida profunda em mão/face: amoxicilina-clavulanato por 3–5 dias."
  },
  {
    "id": "fmj2026-30",
    "module": "Clínica Médica",
    "text": "Um adulto hígido de 28 anos de idade compareceu ao pronto atendimento devido a uma mordedura de um cão. O paciente compareceu ao hospital 8 horas após o acidente e informou que o animal era de seu vizinho. O homem não apresentou qualquer mudança clínica recente, estava sob vigilância em domicilio e não possuía comprovação vacinal. A ferida estava localizada na mão esquerda, e se mostrava profunda e com exposição de tecido subcutâneo.\n\nEm relação às condutas menos prioritárias e seguimento no pós‑alta, assinale a opção mais adequada.",
    "options": [
      "Não há necessidade de profilaxia antitetânica se o paciente já recebeu vacina há mais de 10 anos",
      "Há necessidade de soro antirrábico e vacina",
      "Não há necessidade de soro antirrábico no momento, porém é prudente a vacinação profilática para raiva humana",
      "Não há indicação de soro nem de vacina antirrábica",
      "Há necessidade de soro antirrábico no momento, porém não de vacinação para raiva humana"
    ],
    "correctAnswer": 2,
    "explanation": "Mordedura grave (profunda, em mão) por cão observável (do vizinho, em vigilância domiciliar, sem sinais de raiva). Pelo protocolo do Ministério da Saúde, em acidente grave com cão/gato passível de observação: lavar a ferida, observar o animal por 10 dias e iniciar a vacinação antirrábica (doses nos dias 0 e 3); se o animal permanecer sadio, encerra-se o esquema; se adoecer, morrer ou desaparecer, completa-se a vacinação e aplica-se soro. Não se indica soro no momento.",
    "commentary": "Antitetânica dispensável com vacina há mais de 10 anos (A): com ferimento de risco e última dose há mais de 5 anos, faz-se reforço.\n\nSoro e vacina (B): o soro é para acidente grave com animal não observável, suspeito ou raivoso.\n\nNem soro nem vacina (D): é a conduta para acidente leve com animal observável; aqui o acidente é grave.\n\nSoro sem vacina (E): o soro nunca é usado sem vacina.",
    "reference": "Ministério da Saúde – Protocolo de Profilaxia Pré, Pós e Reexposição da Raiva Humana no Brasil (2022)",
    "tags": [
      "raiva",
      "profilaxia antirrábica",
      "mordedura de cão",
      "vigilância epidemiológica"
    ],
    "tip": "Cão observável + acidente grave: vacina (dias 0 e 3) e observar 10 dias; sem soro."
  },
  {
    "id": "fmj2026-31",
    "module": "Clínica Médica",
    "text": "Paciente masculino, 62 anos de idade, diagnóstico de câncer colorretal com metástase hepática, evolui com ascite de instalação subaguda. Exames laboratoriais: albumina sérica 3,2 g/dl; albumina do líquido ascítico 1,8 g/dl; contagem de neutrófilos no líquido ascítico 120/mm³. Ao exame físico: hepatomegalia e circulação colateral abdominal.\n\nAssinale a opção que apresenta o valor do GASA e sua interpretação clínica.",
    "options": [
      "1,4 g/dl; sugere hipertensão portal como mecanismo da ascite",
      "1,4 g/dl; sugere ascite neoplásica predominante com exsudato peritoneal",
      "1,4 g/dl; sugere ascite por carcinomatose peritoneal",
      "5,0 g/dl; sugere ascite por carcinomatose peritoneal",
      "5,0 g/dl; sugere hipertensão portal como mecanismo da ascite"
    ],
    "correctAnswer": 0,
    "explanation": "Gradiente de albumina soro-ascite (GASA) = albumina sérica − albumina do líquido = 3,2 − 1,8 = 1,4 g/dL. GASA ≥ 1,1 g/dL indica ascite por hipertensão portal (transudato) — aqui, provavelmente por metástases hepáticas extensas, com hepatomegalia e circulação colateral. GASA < 1,1 sugere causa não portal (carcinomatose peritoneal, tuberculose, pancreatite).",
    "commentary": "1,4 com exsudato neoplásico (B) ou carcinomatose (C): com GASA ≥ 1,1, o mecanismo predominante é hipertensão portal.\n\n5,0 g/dL (D e E): o cálculo é uma subtração (3,2 − 1,8), não uma soma.",
    "reference": "EASL/AASLD – Management of ascites; Runyon BA. Serum-ascites albumin gradient",
    "tags": [
      "ascite",
      "gradiente de albumina soro-ascite",
      "hipertensão portal",
      "hepatologia"
    ],
    "tip": "GASA ≥ 1,1 = hipertensão portal; < 1,1 = peritônio (carcinomatose, TB)."
  },
  {
    "id": "fmj2026-32",
    "module": "Clínica Médica",
    "text": "Paciente masculino, 62 anos de idade, diagnóstico de câncer colorretal com metástase hepática, evolui com ascite de instalação subaguda. Exames laboratoriais: albumina sérica 3,2 g/dl; albumina do líquido ascítico 1,8 g/dl; contagem de neutrófilos no líquido ascítico 120/mm³. Ao exame físico: hepatomegalia e circulação colateral abdominal.\n\nConsiderando o mecanismo da ascite nesse paciente, assinale a opção que apresenta a conduta mais adequada em relação ao uso de diuréticos.",
    "options": [
      "Iniciar espironolactona e furosemida caso apenas restrição salina não seja suficiente",
      "Iniciar hidroclorotiazida e furosemida caso apenas restrição salina não seja suficiente",
      "Iniciar hidroclorotiazida e espironolactona caso apenas restrição salina não seja suficiente",
      "Iniciar diuréticos apenas se houver hiponatremia",
      "Não iniciar diuréticos, pois ascite neoplásica responde mal a diuréticos"
    ],
    "correctAnswer": 0,
    "explanation": "Ascite com GASA ≥ 1,1 (mecanismo de hipertensão portal, por metástases hepáticas maciças) responde a restrição de sódio e diuréticos: espironolactona (base) associada a furosemida, na proporção de 100:40 mg, se só a restrição salina não bastar. Ascite por carcinomatose peritoneal (GASA baixo), ao contrário, responde mal a diuréticos e é tratada com paracenteses.",
    "commentary": "Tiazídico com furosemida (B) e tiazídico com espironolactona (C): os tiazídicos não são usados no manejo da ascite.\n\nDiurético só com hiponatremia (D): a hiponatremia é, na verdade, motivo de cautela com diuréticos.\n\nNão usar diuréticos (E): seria verdade na carcinomatose peritoneal, mas aqui o mecanismo é portal.",
    "reference": "EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "ascite",
      "espironolactona",
      "furosemida",
      "hepatologia"
    ],
    "tip": "Ascite portal: sal restrito + espironolactona/furosemida (100:40)."
  },
  {
    "id": "fmj2026-33",
    "module": "Clínica Médica",
    "text": "Paciente masculino, 62 anos de idade, diagnóstico de câncer colorretal com metástase hepática, evolui com ascite de instalação subaguda. Exames laboratoriais: albumina sérica 3,2 g/dl; albumina do líquido ascítico 1,8 g/dl; contagem de neutrófilos no líquido ascítico 120/mm³. Ao exame físico: hepatomegalia e circulação colateral abdominal.\n\nNo que diz respeito à análise do liquido ascítico do paciente e à suspeita de infecção associada, assinale a opção que apresenta os procedimentos corretos.",
    "options": [
      "iniciar antibiótico empírico imediatamente",
      "repetir paracentese em 24 horas",
      "solicitar o aguardo do resultado de cultura por agora, para se definir a existência ou não de peritonite bacteriana espontânea",
      "apontar a ausência de critérios para peritonite bacteriana espontânea no paciente",
      "descartar infecção em líquido ascítico"
    ],
    "correctAnswer": 3,
    "explanation": "O diagnóstico de peritonite bacteriana espontânea exige contagem de polimorfonucleares no líquido ascítico ≥ 250 células/mm³. Com 120 neutrófilos/mm³, o paciente não preenche critério de PBE, e não há indicação de antibiótico empírico.",
    "commentary": "Antibiótico empírico (A): sem critério de PBE, não se inicia antibiótico.\n\nRepetir a paracentese em 24 horas (B): só se houver piora clínica.\n\nAguardar a cultura para definir PBE (C): o diagnóstico de PBE é pela contagem de PMN, não pela cultura.\n\nDescartar infecção em definitivo (E): a infecção pode surgir depois; a contagem atual apenas não preenche critério.",
    "reference": "EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "peritonite bacteriana espontânea",
      "líquido ascítico",
      "hepatologia"
    ],
    "tip": "PBE: PMN ≥ 250/mm³. Abaixo disso, sem critério."
  },
  {
    "id": "fmj2026-34",
    "module": "Clínica Médica",
    "text": "Um paciente de 38 anos de idade, com diabetes tipo 1 há 12 anos, em seguimento ambulatorial, relatou dificuldades financeiras e, por isso, só dispunha de insulina NPH e insulina regular humana. Ele tinha histórico de hipoglicemias noturnas, especialmente entre 2h e 4h da manhã, com glicemias de jejum frequentemente <70 mg/ dl. O paciente realizava três refeições diárias em horários regulares, mas tinha dificuldade para realizar contagem de carboidratos. O paciente utilizava um esquema de três aplicações diárias: NPH e regular pela manhã; regular antes do jantar; e NPH ao se deitar. O paciente monitorizava glicemia capilar antes das refeições e ao acordar.\n\nConsiderando as opções de ajuste de insulinoterapia ambulatorial para esse paciente, assinale a opção que apresenta a conduta mais adequada, visando minimizar hipoglicemias noturnas, otimizar controle glicêmico e facilitar o autogerenciamento.",
    "options": [
      "Manter o esquema atual, sem ajustes, pois a regular cobre adequadamente todas as refeições e a NPH ao deitar previne hiperglicemia matinal",
      "Trocar a insulina regular por insulina lispro ou aspart, aplicando imediatamente antes das refeições, para reduzir risco de hipoglicemia noturna",
      "Aumentar a dose de insulina regular antes do jantar para compensar hipoglicemias noturnas, mantendo a dose de NPH inalterada",
      "Suspender a NPH ao deitar e utilizar apenas insulina regular antes das refeições, pois o risco de hipoglicemia noturna está relacionado exclusivamente à NPH",
      "Reduzir a dose de NPH ao deitar e redistribuir parte da dose para o período da manhã, mantendo monitorização da glicemia de jejum, e considerar simplificação do esquema para duas aplicações diárias caso persista dificuldade de autogerenciamento"
    ],
    "correctAnswer": 4,
    "explanation": "Diabético tipo 1 com hipoglicemias entre 2 e 4 horas da manhã e glicemias de jejum < 70 mg/dL em uso de NPH ao deitar: o pico da NPH (4–8 horas após a aplicação) coincide com a madrugada. A conduta é reduzir a NPH noturna e redistribuir parte da dose para a manhã, mantendo a monitorização do jejum; se houver dificuldade de autogerenciamento, considerar esquema com duas aplicações diárias (NPH + regular antes do café e antes do jantar), com ajustes. Lanche noturno também ajuda.",
    "commentary": "Manter o esquema (A): há hipoglicemias recorrentes; é preciso ajustar.\n\nTrocar regular por análogo ultrarrápido (B): o paciente não tem acesso a análogos, e a hipoglicemia de madrugada se deve sobretudo à NPH.\n\nAumentar a regular do jantar (C): pioraria a hipoglicemia.\n\nSuspender a NPH noturna (D): o paciente tem DM1 e precisa de insulina basal; suspender causaria hiperglicemia e cetose.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (insulinoterapia no DM1)",
    "tags": [
      "diabetes mellitus tipo 1",
      "insulina NPH",
      "hipoglicemia",
      "endocrinologia"
    ],
    "tip": "Hipoglicemia de madrugada com NPH ao deitar: reduzir a NPH noturna."
  },
  {
    "id": "fmj2026-35",
    "module": "Clínica Médica",
    "text": "Um paciente de 38 anos de idade, com diabetes tipo 1 há 12 anos, em seguimento ambulatorial, relatou dificuldades financeiras e, por isso, só dispunha de insulina NPH e insulina regular humana. Ele tinha histórico de hipoglicemias noturnas, especialmente entre 2h e 4h da manhã, com glicemias de jejum frequentemente <70 mg/ dl. O paciente realizava três refeições diárias em horários regulares, mas tinha dificuldade para realizar contagem de carboidratos. O paciente utilizava um esquema de três aplicações diárias: NPH e regular pela manhã; regular antes do jantar; e NPH ao se deitar. O paciente monitorizava glicemia capilar antes das refeições e ao acordar.\n\nAssinale a opção que representa a estratégia mais adequada para rastreamento de complicações microvasculares e macrovasculares nesse paciente, considerando limitações de acesso e recursos.",
    "options": [
      "Solicitar exame oftalmológico anual com retinografia, dosagem anual de albuminúria/creatinina urinária, avaliação clínica anual de neuropatia, perfil lipídico e pressão arterial, além de reforçar controle glicêmico (HbA1c <7%), priorizando exames essenciais e educação em saúde, com abordagem multifatorial para risco cardiovascular",
      "Realizar apenas exame oftalmológico a cada dois anos e dosagem de creatinina sérica anual, sem necessidade de rastreamento de neuropatia ou avaliação do perfil lipídico, pois o controle glicêmico é suficiente para prevenir complicações",
      "Priorizar rastreamento de complicações macrovasculares com ecocardiograma anual e teste ergométrico, dispensando avaliação de microvasculopatias em pacientes jovens com diabetes tipo 1",
      "Solicitar exames laboratoriais completos semestralmente (retinografia, microalbuminúria, perfil lipídico, ECG, creatinina, TSH, PCR ultrassensível), independentemente de sintomas ou recursos, pois o rastreamento intensivo é obrigatório em todos os casos",
      "Realizar apenas avaliação clínica anual dos pés e pressão arterial, pois exames laboratoriais e oftalmológicos não são custo‑efetivos em pacientes com bom controle glicêmico"
    ],
    "correctAnswer": 0,
    "explanation": "No diabetes tipo 1 (a partir de 5 anos de doença), o rastreamento anual inclui: fundo de olho/retinografia, albuminúria (relação albumina/creatinina) e creatinina com TFG, exame dos pés e neuropatia (monofilamento, vibração), perfil lipídico e pressão arterial, com meta de HbA1c em torno de 7% e abordagem multifatorial do risco cardiovascular. Em contextos de recursos limitados, priorizam-se esses exames essenciais e a educação em saúde.",
    "commentary": "Oftalmológico a cada 2 anos sem neuropatia nem lipídios (B): rastreamento incompleto.\n\nEcocardiograma e teste ergométrico anuais (C): não são rastreamento de rotina em assintomáticos e omitem a microangiopatia.\n\nExames completos semestrais independentemente de recursos (D): excessivo e sem benefício comprovado.\n\nSó pés e pressão (E): omite retina e rim, cujo rastreamento é custo-efetivo.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus tipo 1",
      "complicações crônicas",
      "rastreamento",
      "endocrinologia"
    ],
    "tip": "DM: anualmente retina, albuminúria/TFG, pés, lipídios e PA."
  },
  {
    "id": "fmj2026-36",
    "module": "Clínica Médica",
    "text": "Um paciente de 62 anos de idade, previamente hipertenso, apresentava dor torácica típica já há 2 horas, irradiando para o braço esquerdo, associada à sudorese e às náuseas. No exame físico, apresentava‑se estável hemodinamicamente. O eletrocardiograma de admissão está disposto logo a seguir. O paciente chegou ao serviço médico às 19 horas, na troca de plantão, passando‑se, assim, 45 minutos sem reavaliação. O paciente estava em um hospital sem serviço de hemodinâmica, e o centro de referência mais próximo tinha um tempo estimado de recebimento do paciente em 80 minutos.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada.",
    "options": [
      "transferir o paciente imediatamente para o centro com hemodinâmica, sem realizar trombólise",
      "realizar trombólise imediatamente, em caso de não haver contraindicações, e transferir para o centro de referência para angiografia/angioplastia posteriormente",
      "manter tratamento clínico conservador, devido ao paciente estar hemodinamicamente estável",
      "transferir para o centro de referência e realizar angioplastia eletiva após 24 horas",
      "realizar trombólise e manter o paciente no hospital de origem, sem transferência, em caso de melhora clínica"
    ],
    "correctAnswer": 1,
    "explanation": "O ECG mostra supradesnivelamento de ST em parede inferior (DII, DIII e aVF): IAM com supra de ST com 2 horas de dor. O paciente está em hospital sem hemodinâmica; o tempo até a angioplastia (45 minutos já perdidos + 80 minutos de transporte) ultrapassa 120 minutos do primeiro contato. Por isso, indica-se fibrinólise imediata (meta porta-agulha ≤ 30 min), se não houver contraindicação, seguida de transferência para centro com hemodinâmica — estratégia fármaco-invasiva, com angiografia em 2–24 horas (ou imediata se falhar a reperfusão).",
    "commentary": "Transferir sem trombólise (A): o tempo até a angioplastia excederia 120 minutos.\n\nTratamento conservador por estabilidade (C): todo IAMCSST dentro de 12 horas tem indicação de reperfusão.\n\nAngioplastia eletiva após 24 horas (D): perde a janela de reperfusão.\n\nTrombolisar e não transferir (E): após a fibrinólise, recomenda-se transferência para estratégia invasiva.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz de IAM com supradesnível do ST (2015); ESC 2023 ACS Guidelines",
    "tags": [
      "infarto agudo do miocárdio",
      "fibrinólise",
      "estratégia fármaco-invasiva",
      "eletrocardiograma",
      "cardiologia"
    ],
    "image": "/images/fmj2026-36.webp",
    "tip": "Angioplastia > 120 min: trombolisar e transferir (fármaco-invasiva)."
  },
  {
    "id": "fmj2026-37",
    "module": "Clínica Médica",
    "text": "Paciente homem de 32 anos de idade apresentou anemia grave (Hb 7,2 g/dl), reticulocitose, icterícia, esplenomegalia e história familiar de anemia. Laboratorialmente apresentava os seguintes resultados: VCM 90 fL; LDH elevado; bilirrubina indireta aumentada; haptoglobina indetectável; teste de Coombs negativo; esfregaço de sangue periférico abaixo.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta o provável diagnostico.",
    "options": [
      "anemia hemolítica autoimune",
      "síndrome mielodisplásica",
      "talassemia beta maior",
      "esferocitose hereditária",
      "anemia falciforme"
    ],
    "correctAnswer": 3,
    "explanation": "Anemia hemolítica (reticulocitose, LDH alto, bilirrubina indireta elevada, haptoglobina indetectável) com Coombs direto negativo, esplenomegalia e história familiar, com VCM normal: esferocitose hereditária, a anemia hemolítica hereditária por defeito de membrana mais comum. O esfregaço mostra esferócitos (sem palidez central), e a CHCM costuma estar elevada; a confirmação é por EMA (citometria) ou curva de fragilidade osmótica.",
    "commentary": "Anemia hemolítica autoimune (A): o Coombs direto seria positivo.\n\nSíndrome mielodisplásica (B): cursa com citopenias e reticulócitos baixos, em idosos.\n\nTalassemia beta maior (C): microcitose intensa, manifestação na infância e dependência transfusional.\n\nAnemia falciforme (E): drepanócitos no esfregaço, crises vaso-oclusivas e, em adultos, autoesplenectomia.",
    "reference": "British Society for Haematology – Guidelines for the diagnosis and management of hereditary spherocytosis (2011)",
    "tags": [
      "esferocitose hereditária",
      "anemia hemolítica",
      "hematologia"
    ],
    "alert": "O caderno cita um esfregaço de sangue periférico que não foi reproduzido na prova disponível; a resposta pode ser obtida pelos dados clínicos e laboratoriais.",
    "tip": "Hemólise + Coombs negativo + família + baço grande = esferocitose."
  },
  {
    "id": "fmj2026-38",
    "module": "Clínica Médica",
    "text": "Mulher de 26 anos de idade, saudável, sem uso prévio de medicações, procurou atendimento por crises frequentes de ansiedade generalizada há vários meses, com sintomas diários de preocupação excessiva, insônia, irritabilidade, tensão muscular e dificuldade de concentração. Relatou episódios atuais, frequentes e intensos de ansiedade, com palpitações, sudorese e sensação de falta de controle, que a impedem de realizar atividades acadêmicas e sociais. Após avaliação psiquiátrica, foi indicado início de tratamento farmacológico.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta farmacológica mais adequada para essa paciente.",
    "options": [
      "iniciar uso continuo de clonazepam",
      "iniciar uso de sertralina",
      "iniciar clonazepam e sertralina, com posterior desmame de benzodiazepínico",
      "iniciar clonazepam e amitriptilina, com posterior desmame de benzodiazepínico",
      "iniciar clonazepam e canabidiol, com posterior desmame de benzodiazepínico"
    ],
    "correctAnswer": 2,
    "explanation": "Transtorno de ansiedade generalizada com sintomas intensos e incapacitantes (ataques de ansiedade frequentes). O tratamento de primeira linha é um ISRS (como a sertralina) ou IRSN. Pelo gabarito, como a resposta ao ISRS demora 4–6 semanas e pode haver piora inicial da ansiedade, associa-se temporariamente um benzodiazepínico (clonazepam) nos casos graves, com desmame após a resposta ao antidepressivo.",
    "commentary": "Clonazepam contínuo isolado (A): benzodiazepínico isolado de longo prazo causa dependência e tolerância.\n\nSertralina isolada (B): é a primeira linha e seria adequada; mas o gabarito considera a ponte com benzodiazepínico pela intensidade dos sintomas.\n\nClonazepam com amitriptilina (D): tricíclicos são segunda linha, com mais efeitos adversos.\n\nClonazepam com canabidiol (E): o canabidiol não tem indicação estabelecida para TAG.",
    "reference": "Associação Brasileira de Psiquiatria; NICE CG113 – Generalised anxiety disorder and panic disorder (2011, atualização 2020)",
    "tags": [
      "transtorno de ansiedade generalizada",
      "inibidores seletivos da recaptação de serotonina",
      "benzodiazepínicos",
      "psiquiatria"
    ],
    "tip": "TAG: ISRS é a base; benzodiazepínico só como ponte curta."
  },
  {
    "id": "fmj2026-39",
    "module": "Clínica Médica",
    "text": "Paciente masculino, 42 anos de idade, asmático grave, apresentou crise de asma refratária apesar de nebulização com β2‑agonista de alta dose, corticosteroides intravenosos e oxigenoterapia. Referiu histórico de insuficiência cardíaca crônica com fração de ejeção 35%. Estava taquipneico, com uso intenso de musculatura acessória, saturação 88% em oxigênio suplementar e apresentava hipercapnia progressiva na gasometria arterial. Equipe de emergência decidiu realizar intubação orotraqueal de sequência rápida devido à falha da terapia medicamentosa e ao risco iminente de fadiga respiratória.\n\nCom base nesse caso clínico hipotético e considerando sedação e indução para intubação, assinale a opção que apresenta maior potência broncodilatadora e perfil mais seguro para esse paciente.",
    "options": [
      "propofol em dose de indução rápida, seguido de succinilcolina",
      "etomidato em dose de indução rápida, seguido de rocurônio",
      "ketamina em dose de indução rápida, seguida de succinilcolina",
      "midazolam em dose de indução rápida, seguido de vecurônio",
      "midazolam em dose de indução rápida, seguido de fentanil"
    ],
    "correctAnswer": 2,
    "explanation": "Para intubar o paciente com asma grave refratária, a cetamina é o agente de indução preferido: tem efeito broncodilatador (liberação de catecolaminas e ação direta no músculo liso) e preserva a estabilidade hemodinâmica. A succinilcolina é bloqueador adequado para a sequência rápida (o rocurônio também é opção). O paciente tem insuficiência cardíaca com FE de 35%, e a cetamina, por manter o tônus simpático, é mais segura que o propofol, que causa hipotensão.",
    "commentary": "Propofol com succinilcolina (A): o propofol tem algum efeito broncodilatador, mas causa vasodilatação e depressão miocárdica, perigosa com FE de 35%.\n\nEtomidato com rocurônio (B): estável hemodinamicamente, mas sem efeito broncodilatador relevante.\n\nMidazolam com vecurônio (D): o midazolam não é o melhor indutor para sequência rápida e pode causar hipotensão; o vecurônio tem início lento.\n\nMidazolam com fentanil (E): não inclui bloqueador neuromuscular, e o fentanil pode causar rigidez torácica.",
    "reference": "GINA 2024 – Management of severe asthma exacerbations; Miller's Anesthesia, 9ª ed.",
    "tags": [
      "asma grave",
      "sequência rápida de intubação",
      "cetamina",
      "terapia intensiva"
    ],
    "tip": "Intubar asmático: cetamina (broncodilatadora)."
  },
  {
    "id": "fmj2026-40",
    "module": "Clínica Médica",
    "text": "Paciente feminina, 35 anos de idade, obesa (IMC 34 kg/m²), internada no primeiro dia por colecistite aguda, apresentou clearance de creatinina estimado 28 mL/min/1,73 m². Referiu histórico de trombose venosa profunda já há 5 anos, ocorrida após uma viagem internacional de avião, que foi tratada com anticoagulação por seis meses sem recidiva.\n\nCom base nesse caso clínico hipotético e considerando o perfil de risco para TEV, assinale a opção que apresenta a conduta adequada para a profilaxia de TEV.",
    "options": [
      "heparina de baixo peso molecular 40 mg SC uma vez ao dia",
      "heparina de baixo peso molecular 40 mg SC 12/12 horas",
      "heparina em bomba de infusão contínua",
      "heparina não fracionada 5.000 ui SC de 8/8 horas",
      "Warfarina conforme INR"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente internada com colecistite aguda, obesa e com TVP prévia (risco tromboembólico alto), mas com clearance de creatinina < 30 mL/min. Nessa situação, a heparina não fracionada 5.000 UI SC de 8/8 horas é a opção preferida para profilaxia, pois não depende da função renal para eliminação. A enoxaparina, se usada, exigiria redução para 30 mg/dia.",
    "commentary": "Enoxaparina 40 mg 1×/dia (A): com ClCr < 30, a dose deve ser reduzida a 30 mg/dia, pelo acúmulo.\n\nEnoxaparina 40 mg de 12/12 h (B): dose de profilaxia para obesidade grave com função renal normal; aqui há insuficiência renal.\n\nHeparina em bomba (C): é anticoagulação plena, não profilaxia.\n\nVarfarina (E): não é usada como profilaxia hospitalar.",
    "reference": "ACCP – Prevention of VTE in Nonsurgical Patients (CHEST 2012); ASH 2018 Guidelines",
    "tags": [
      "tromboprofilaxia",
      "tromboembolismo venoso",
      "heparina não fracionada",
      "insuficiência renal"
    ],
    "tip": "Profilaxia de TEV com ClCr < 30: HNF (ou enoxaparina 30 mg/dia)."
  },
  {
    "id": "fmj2026-41",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente com 16 anos de idade, em amenorreia primária, foi diagnosticada com síndrome de Turner, na forma não mosaico.\n\nCom base nesse caso clínico hipotético, em relação a esse diagnóstico, é correto afirmar que",
    "options": [
      "isso trata de uma de anomalia de desenvolvimento dos ductos de Müller, uma vez que a paciente não tem útero, tubas e terço superior da vagina",
      "as dosagens plasmáticas de FSH e LH deverão estar elevadas. A de estradiol, baixa",
      "trata‑se de deficiência hipofisária primária e a paciente deve ser tratada com GnRH",
      "sempre é possível a coleta de óvulos e fertilização in vitro, com estimulação ovariana",
      "essa síndrome é, também, conhecida como síndrome dos testículos feminizantes e deve‑se fazer a cirurgia de retirada dos testículos"
    ],
    "correctAnswer": 1,
    "explanation": "Na síndrome de Turner (45,X), os ovários se transformam em gônadas em fita (disgenesia gonadal), sem produção de estrogênio. Sem o feedback negativo, as gonadotrofinas (FSH e LH) ficam elevadas e o estradiol baixo — hipogonadismo hipergonadotrófico. O útero está presente.",
    "commentary": "Anomalia mülleriana sem útero (A): descreve a síndrome de Mayer-Rokitansky-Küster-Hauser; na Turner o útero existe.\n\nDeficiência hipofisária tratada com GnRH (C): o problema é gonadal (primário), e o tratamento é reposição estrogênica.\n\nSempre possível coletar óvulos (D): a falência ovariana é a regra; a gestação geralmente exige ovodoação.\n\nTestículos feminizantes (E): é a insensibilidade androgênica completa (46,XY).",
    "reference": "Febrasgo – Amenorreia primária; Gravholt CH et al. Clinical practice guidelines for Turner syndrome (2024)",
    "tags": [
      "síndrome de Turner",
      "amenorreia primária",
      "hipogonadismo hipergonadotrófico",
      "ginecologia infanto-puberal"
    ],
    "tip": "Turner: FSH/LH altos, estradiol baixo, útero presente."
  },
  {
    "id": "fmj2026-42",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 60 anos de idade, com menopausa aos 48, referiu sangramento genital em pequena quantidade sem cólicas por 4 dias, e que findou há 20 dias espontaneamente. O exame ginecológico foi normal e a ultrassonografia transvaginal revelou útero com 56 cc de volume, mioma intramural de 1 cm e eco endometrial de 3 mm. Referiu ter diabetes tipo 2 e hipertensão arterial com uso de metformina e enalapril. A causa do sangramento é",
    "options": [
      "câncer do endométrio",
      "o mioma intramural",
      "atrofia endometrial",
      "efeito colateral da medicação",
      "hiperplasia endometrial simples"
    ],
    "correctAnswer": 2,
    "explanation": "Sangramento pós-menopausa pequeno, autolimitado, com exame normal e endométrio de 3 mm à ultrassonografia transvaginal: um eco endometrial ≤ 4 mm tem alto valor preditivo negativo para câncer, e a causa mais provável é atrofia endometrial. Se o sangramento recorrer, a investigação deve prosseguir (histeroscopia/biópsia).",
    "commentary": "Câncer de endométrio (A): improvável com endométrio fino (≤ 4 mm), embora deva ser excluído se o sangramento persistir.\n\nMioma intramural de 1 cm (B): pequeno e intramural, não explica sangramento pós-menopausa.\n\nEfeito de metformina ou enalapril (D): não causam sangramento uterino.\n\nHiperplasia endometrial (E): cursaria com endométrio espessado.",
    "reference": "ACOG Committee Opinion nº 734 (2018); Febrasgo – Sangramento uterino na pós-menopausa",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "ultrassonografia transvaginal",
      "ginecologia"
    ],
    "tip": "Pós-menopausa com endométrio ≤ 4 mm: atrofia é o mais provável."
  },
  {
    "id": "fmj2026-43",
    "module": "Ginecologia e Obstetrícia",
    "text": "A endometriose pélvica afeta cerca de 10 a 12% de mulheres em idade reprodutiva, podendo causar infertilidade e dor pélvica. Em relação a essa afecção, é correto afirmar que",
    "options": [
      "a dosagem plasmática do CA 125 é diretamente proporcional à gravidade da doença",
      "o local mais prevalente da endometriose é na musculatura do útero, causando a adenomiose",
      "é de origem genética, e trabalhos recentes afirmam que não deve ser tentada a fertilização in vitro",
      "uma das formas de tratamento é o uso de progestagênios que podem induzir a amenorreia",
      "seu uso é contraindicado em pacientes com endometriose, uma vez que os anticoncepcionais hormonais combinados contêm estrogênio"
    ],
    "correctAnswer": 3,
    "explanation": "Os progestagênios (dienogeste, desogestrel, acetato de medroxiprogesterona, SIU-LNG) são tratamento de primeira linha da endometriose: induzem decidualização e atrofia dos focos e frequentemente amenorreia, aliviando a dor.",
    "commentary": "CA-125 proporcional à gravidade (A): o CA-125 pode estar elevado, mas tem baixa sensibilidade e não se correlaciona bem com a gravidade.\n\nLocal mais prevalente no miométrio (B): adenomiose é entidade distinta; o local mais comum da endometriose é o ovário e o peritônio pélvico.\n\nOrigem genética contraindicando FIV (C): a FIV é tratamento eficaz para a infertilidade associada à endometriose.\n\nAnticoncepcional combinado contraindicado (E): o ACO combinado (inclusive contínuo) é opção de primeira linha.",
    "reference": "ESHRE Guideline: Endometriosis (2022); Febrasgo – Endometriose",
    "tags": [
      "endometriose",
      "progestagênios",
      "dor pélvica",
      "ginecologia"
    ],
    "tip": "Endometriose: progestagênio ou ACO combinado como primeira linha."
  },
  {
    "id": "fmj2026-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 45 anos de idade, com exame ginecológico normal e assintomática, foi submetida à mamografia de rotina. O laudo concluiu como resultado BI‑RADS 3.\n\nCom base nesse caso clínico hipotético, assinale a opção correta a respeito da conduta a ser seguida.",
    "options": [
      "repetir a mamografia em um ano",
      "solicitar biópsia guiada por ultrassonografia",
      "solicitar ressonância magnética das mamas",
      "solicitar ultrassonografia das mamas em seis meses",
      "repetir a mamografia em seis meses"
    ],
    "correctAnswer": 4,
    "explanation": "BI-RADS 3 (achado provavelmente benigno, risco de malignidade ≤ 2%) indica controle radiológico de curto prazo: nova mamografia em 6 meses (unilateral), depois aos 12 e 24 meses; se estável por 2 anos, passa a BI-RADS 2.",
    "commentary": "Repetir em 1 ano (A): é o intervalo de rastreamento habitual (BI-RADS 1 e 2).\n\nBiópsia (B): é indicada em BI-RADS 4 e 5.\n\nRessonância (C): não é a conduta padrão para BI-RADS 3.\n\nUltrassom em 6 meses (D): o controle é feito com o mesmo método em que o achado foi identificado (mamografia).",
    "reference": "American College of Radiology – BI-RADS Atlas, 5ª ed.; Colégio Brasileiro de Radiologia",
    "tags": [
      "BI-RADS",
      "mamografia",
      "câncer de mama",
      "mastologia"
    ],
    "tip": "BI-RADS 3: controle em 6 meses."
  },
  {
    "id": "fmj2026-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma forma eficaz de prevenção do câncer de colo uterino e das verrugas genitais é a vacina contra o HPV. Em relação a essa medida, é correto afirmar que",
    "options": [
      "a vacina deve ser aplicada em meninos e meninas de 9 a 14 anos de idade, segundo orientação do Ministério da Saúde",
      "a vacina não deve ser aplicada em pessoas imunossuprimidas e transplantadas",
      "a vacina é considerada a melhor forma de tratamento para mulheres com câncer de colo uterino IA",
      "estudos recentes demonstram que a vacina também age preventivamente contra o câncer do endométrio",
      "a vacina previne infecções por qualquer tipo de HPV"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo Ministério da Saúde, a vacina HPV (quadrivalente) é aplicada em meninas e meninos de 9 a 14 anos (atualmente em dose única), com resgate até 19 anos e indicação ampliada para grupos especiais, como imunossuprimidos, transplantados e pessoas vivendo com HIV (de 9 a 45 anos).",
    "commentary": "Não aplicar em imunossuprimidos e transplantados (B): esses grupos têm indicação prioritária; a vacina é inativada.\n\nTratamento do câncer IA (C): a vacina é preventiva, não terapêutica.\n\nPrevine câncer de endométrio (D): o câncer de endométrio não é causado pelo HPV.\n\nPrevine qualquer tipo de HPV (E): protege contra os tipos incluídos (6, 11, 16 e 18 na quadrivalente).",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação; Nota técnica sobre a dose única da vacina HPV (2024)",
    "tags": [
      "vacina HPV",
      "HPV",
      "imunizações",
      "prevenção do câncer do colo do útero"
    ],
    "tip": "Vacina HPV no SUS: 9 a 14 anos (dose única) + grupos especiais."
  },
  {
    "id": "fmj2026-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 54 anos de idade em amenorreia há 1 ano referiu calores corporais tipo fogachos, irritabilidade e insônia. Há 8 anos, foi submetida à histerectomia por mioma uterino e, no momento, não faz uso de nenhuma medicação. A paciente apresenta mamografia e exames laboratoriais normais. O ginecologista indicou terapia hormonal do climatério.\n\nCom base nesse caso clínico hipotético, é correto afirmar que",
    "options": [
      "a terapia hormonal deve ser combinada, isto é, com estrogênio e progestagênio",
      "a terapia hormonal está contraindicada pelo antecedente do mioma uterino",
      "a terapia hormonal, nesse caso, pode ser feita apenas com estrogênio",
      "a tibolona associada a um progestagênio é a melhor indicação",
      "é melhor prescrever um análogo do GnRH"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher histerectomizada (sem útero) com sintomas vasomotores: a terapia hormonal pode ser feita apenas com estrogênio, pois o progestagênio serve para proteger o endométrio. Estrogênio isolado em histerectomizadas tem perfil de segurança mamária favorável (estudo WHI).",
    "commentary": "Terapia combinada obrigatória (A): sem útero, o progestagênio é desnecessário (exceto em situações específicas, como endometriose prévia).\n\nContraindicada pelo mioma prévio (B): o útero foi retirado; mioma não contraindica.\n\nTibolona com progestagênio (D): a tibolona já tem ação progestagênica e não se associa a progestagênio.\n\nAnálogo do GnRH (E): causaria hipoestrogenismo e pioraria os sintomas.",
    "reference": "Febrasgo/Sobrac – Consenso de terapêutica hormonal; NAMS 2022 Position Statement",
    "tags": [
      "terapia hormonal",
      "climatério",
      "histerectomia",
      "menopausa"
    ],
    "tip": "Sem útero: estrogênio isolado."
  },
  {
    "id": "fmj2026-47",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma das principais queixas em ambulatórios de ginecologia é o corrimento vaginal, variando de cor, aspecto, se prurido ou não. Em relação a esse tipo de afecção, é correto afirmar que",
    "options": [
      "não é necessário o tratamento do parceiro sexual, quando de vulvovaginite por Trichomonas",
      "sabe‑se, hoje, que a maioria das vulvovaginites são causadas pelo HPV 22",
      "o pH vaginal, quando de vulvovaginite por gardnerella, costuma ser de 4 a 4,5",
      "diabetes, gravidez e uso de antibióticos são fatores de risco para vulvovaginite por candida albicans",
      "uma das formas de tratamento na vulvovaginite por cândida é o uso de cremes vaginais à base de estrogênio e progestagênio"
    ],
    "correctAnswer": 3,
    "explanation": "Diabetes (sobretudo descompensado), gravidez, uso de antibióticos, imunossupressão e uso de corticoides favorecem a candidíase vulvovaginal, por alterar a flora vaginal (redução de lactobacilos) e aumentar glicogênio/glicose no epitélio.",
    "commentary": "Parceiro sem tratamento na tricomoníase (A): a tricomoníase é IST, e o parceiro deve ser tratado.\n\nVulvovaginites pelo “HPV 22” (B): o HPV não causa vulvovaginite, e não há essa associação.\n\npH 4–4,5 na vaginose (C): na vaginose bacteriana o pH é > 4,5.\n\nCremes de estrogênio e progestagênio na candidíase (E): o tratamento é antifúngico (azóis tópicos ou fluconazol oral).",
    "reference": "Ministério da Saúde – PCDT-IST (2022); Febrasgo – Vulvovaginites",
    "tags": [
      "candidíase vulvovaginal",
      "vulvovaginites",
      "fatores de risco",
      "ginecologia"
    ],
    "tip": "Candidíase: diabetes, gestação, antibiótico e imunossupressão."
  },
  {
    "id": "fmj2026-48",
    "module": "Ginecologia e Obstetrícia",
    "text": "Um dos melhores métodos de avaliação da cavidade uterina é a histeroscopia. A respeito dessa propedêutica, assinale a opção correta.",
    "options": [
      "Com os modernos histeroscópios, como o de Bettocchi, não é mais necessária a distensão da cavidade uterina, seja com gás ou com líquido",
      "A biópsia orientada é preferível à dirigida por coletar material para exame anatomopatológico com melhor acurácia",
      "Na histeroscopia ambulatorial, o pinçamento do colo uterino em úteros retrovertidos deve ser feito nas laterais do colo uterino",
      "Na suspeita de câncer do endométrio, a distensão da cavidade uterina deve ser feita com gás para não haver passagem de células malignas para a cavidade abdominal",
      "Quando se usa corrente elétrica bipolar, o meio de distensão preferencial é o soro fisiológico"
    ],
    "correctAnswer": 4,
    "explanation": "Na histeroscopia cirúrgica com energia bipolar, o meio de distensão preferencial é o soro fisiológico (solução eletrolítica), que conduz corrente mas é seguro com eletrodos bipolares e reduz o risco de hiponatremia dilucional. Com energia monopolar, usam-se soluções não eletrolíticas (glicina, sorbitol, manitol), com risco de intoxicação hídrica.",
    "commentary": "Sem necessidade de distensão com histeroscópios modernos (A): a distensão (com CO₂ ou líquido) é sempre necessária para visualizar a cavidade.\n\nBiópsia orientada melhor que a dirigida (B): a biópsia dirigida sob visão direta tem maior acurácia.\n\nPinçamento lateral em úteros retrovertidos (C): em útero retrovertido o pinçamento costuma ser feito no lábio posterior do colo.\n\nGás na suspeita de câncer (D): não há evidência de que o meio gasoso evite disseminação; em geral usa-se meio líquido com baixa pressão.",
    "reference": "Febrasgo – Histeroscopia; AAGL Practice Report: Fluid Management for Hysteroscopy (2013)",
    "tags": [
      "histeroscopia",
      "meio de distensão",
      "energia bipolar",
      "ginecologia"
    ],
    "tip": "Histeroscopia: bipolar → soro fisiológico; monopolar → glicina/manitol."
  },
  {
    "id": "fmj2026-49",
    "module": "Ginecologia e Obstetrícia",
    "text": "A melhor propedêutica para diagnosticar a incontinência urinária feminina é o(a)",
    "options": [
      "uretrocistografia miccional com correntinha",
      "ressonância magnética com contraste de indigo carmim",
      "teste urodinâmico",
      "ultrassonografia do trígono vesical",
      "radiografia com contraste a base de iodo"
    ],
    "correctAnswer": 2,
    "explanation": "O estudo urodinâmico é o exame que avalia objetivamente a função do trato urinário inferior (armazenamento e esvaziamento) e permite caracterizar o tipo de incontinência (esforço, hiperatividade do detrusor, mista) — por isso é considerado a melhor propedêutica complementar. Na prática, porém, o diagnóstico inicial é clínico, e o estudo urodinâmico é reservado para casos complexos, falha de tratamento ou antes de cirurgia em situações selecionadas.",
    "commentary": "Uretrocistografia com correntinha (A): avalia anatomia (ângulo uretrovesical); não é o exame funcional de escolha.\n\nRessonância com índigo carmim (B): sem papel no diagnóstico de incontinência; o índigo carmim ajuda na pesquisa de fístulas.\n\nUltrassom do trígono (D) e radiografia contrastada (E): não avaliam a função vesical.",
    "reference": "Febrasgo – Incontinência urinária; ICS – Good Urodynamic Practices (2016)",
    "tags": [
      "incontinência urinária",
      "estudo urodinâmico",
      "uroginecologia"
    ],
    "tip": "Urodinâmica: o exame funcional da incontinência (mas o diagnóstico inicial é clínico)."
  },
  {
    "id": "fmj2026-50",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na pós‑menopausa, há queda importante do estrogênio e da progesterona. Por outro lado, aumentam o FSH e o LH. Porém, ainda há produção estrogênica.\n\nCom base nessa informação, assinale a opção correta, a respeito do estrogênio que predomina nesta fase.",
    "options": [
      "estradiol esterificado",
      "estriol",
      "acetato de ciproterona",
      "estrona",
      "etinil estradiol"
    ],
    "correctAnswer": 3,
    "explanation": "Após a menopausa, a principal fonte de estrogênio passa a ser a aromatização periférica (sobretudo no tecido adiposo) da androstenediona de origem adrenal e ovariana, formando estrona — o estrogênio predominante nessa fase. O estradiol predomina na menacme, e o estriol na gestação.",
    "commentary": "Estradiol esterificado (A): formulação farmacêutica, não estrogênio endógeno predominante.\n\nEstriol (B): estrogênio fraco, predominante na gestação (produção placentária).\n\nAcetato de ciproterona (C): progestagênio antiandrogênico sintético.\n\nEtinilestradiol (E): estrogênio sintético dos anticoncepcionais.",
    "reference": "Speroff – Endocrinologia Ginecológica Clínica e Infertilidade",
    "tags": [
      "menopausa",
      "estrona",
      "fisiologia",
      "climatério"
    ],
    "tip": "Menacme: estradiol. Gestação: estriol. Pós-menopausa: estrona."
  },
  {
    "id": "fmj2026-51",
    "module": "Ginecologia e Obstetrícia",
    "text": "Recentemente, a vacina contra o vírus sincicial respiratório (VSR) foi incorporada ao SUS. Considerando essa informação, assinale a opção que apresenta a faixa gestacional recomendada para a administração da vacina materna contra o vírus sincicial respiratório, a fim de que haja proteção do recém‑nascido.",
    "options": [
      "entre 20‑24 semanas",
      "entre 24‑28 semanas",
      "entre 32‑36 semanas",
      "entre 36‑40 semanas",
      "em qualquer trimestre, sem janela preferencial"
    ],
    "correctAnswer": 2,
    "explanation": "A vacina materna contra o vírus sincicial respiratório (proteína F pré-fusão, Abrysvo) é aplicada no terceiro trimestre — pelo gabarito, entre 32 e 36 semanas —, para que os anticorpos maternos atravessem a placenta e protejam o recém-nascido nos primeiros meses de vida contra bronquiolite grave.",
    "commentary": "Entre 20–24 (A) e 24–28 semanas (B): antes da janela recomendada.\n\nEntre 36–40 semanas (D): aplicação tardia, com menos tempo para transferência de anticorpos antes do parto.\n\nQualquer trimestre (E): há janela preferencial no terceiro trimestre.",
    "reference": "Ministério da Saúde – Nota técnica sobre a vacina VSR para gestantes (2025); FDA/CDC – RSV vaccine in pregnancy",
    "tags": [
      "vírus sincicial respiratório",
      "vacinação na gestação",
      "imunizações",
      "pré-natal"
    ],
    "alert": "As recomendações sobre a janela gestacional variam (bula: 24–36 semanas; CDC: 32–36 semanas; o PNI pode adotar outra faixa). Confira a orientação vigente do Ministério da Saúde.",
    "tip": "Vacina VSR materna: 3º trimestre."
  },
  {
    "id": "fmj2026-52",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma parturiente, durante o trabalho de parto, apresentou parada cardiorrespiratória.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a prioridade imediata da equipe obstétrica.",
    "options": [
      "Finalizar o parto por vias naturais antes de qualquer reanimação",
      "Iniciar reanimação cardiopulmonar (RCP) imediata. No caso de emergência obstétrica, a cesariana perimortem poderá ser considerada dentro de um período de 4 a 5 minutos, para que se aumente chance de sobrevida fetal",
      "Avaliar ritmo cardíaco materno. No caso de atividade elétrica sem pulso (AESP), deve‑se aguardar um emergencista para a realização do manejo multidisciplinar",
      "Aumentar a dose de ocitocina para acelerar o parto vaginal, que é a via de escolha para mãe e feto",
      "Transferir a paciente imediatamente para outro hospital"
    ],
    "correctAnswer": 1,
    "explanation": "Na parada cardiorrespiratória na gestante, a prioridade é iniciar RCP de alta qualidade imediatamente, com deslocamento uterino manual para a esquerda (para aliviar a compressão aortocava em útero na altura da cicatriz umbilical ou acima). Se não houver retorno da circulação em 4 minutos, faz-se a cesárea perimortem (histerotomia ressuscitativa), com extração fetal até 5 minutos, o que melhora a chance de sobrevida materna e fetal.",
    "commentary": "Finalizar o parto antes da reanimação (A): a RCP é prioridade absoluta.\n\nAguardar emergencista na AESP (C): a equipe presente deve iniciar a RCP e o protocolo imediatamente.\n\nAumentar ocitocina (D): não tem papel na parada.\n\nTransferir (E): atrasaria a reanimação.",
    "reference": "American Heart Association – Cardiac Arrest in Pregnancy (2015, atualização 2020); Febrasgo",
    "tags": [
      "parada cardiorrespiratória na gestação",
      "cesárea perimortem",
      "emergência obstétrica"
    ],
    "tip": "PCR na gestante: RCP + deslocamento uterino; cesárea perimortem em 4–5 min."
  },
  {
    "id": "fmj2026-53",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 30 anos de idade, primigesta, com idade gestacional de 28 semanas e 2 dias, realizou um teste oral de tolerância a glicose (TOTG) com jejum 94 mg/dl, 1 hora 130 mg/dl, 2 horas 160 mg/dl. Após orientação de dieta e de monitorização domiciliar, a paciente apresentou glicemias de jejum entre 95‑100mg/dl e, 2 horas após a refeição, o resultado já foi de 140‑150mg/dl.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta apropriada.",
    "options": [
      "reforçar orientações de dieta e atividade física",
      "iniciar insulina para alcançar metas glicêmicas",
      "iniciar dieta com restrição importante de carboidratos e espaçar dextros de perfil glicêmico",
      "indicar resolução da gestação",
      "prescrever sulfonilureia durante internação hospitalar, para alcançar metas glicêmicas"
    ],
    "correctAnswer": 1,
    "explanation": "Diabetes gestacional (TOTG com jejum 94 e 2 horas 160 mg/dL) que, após orientação dietética e atividade física, mantém glicemias acima das metas (jejum < 95 mg/dL; 1 hora pós-prandial < 140 mg/dL; 2 horas < 120 mg/dL): com glicemias de jejum de 95–100 e 2 horas de 140–150, há indicação de insulina, primeira escolha farmacológica na gestação.",
    "commentary": "Reforçar dieta e atividade (A): as metas não foram atingidas após a orientação; é hora de tratamento farmacológico.\n\nRestrição importante de carboidratos e espaçar controles (C): restrição intensa causa cetose, e a monitorização deve ser mantida ou intensificada.\n\nResolução da gestação (D): sem indicação com 28 semanas e bom estado materno-fetal.\n\nSulfonilureia (E): a glibenclamida atravessa a placenta e não é recomendada.",
    "reference": "OPAS/Ministério da Saúde/Febrasgo/SBD – Tratamento do diabetes mellitus gestacional no Brasil (2019)",
    "tags": [
      "diabetes mellitus gestacional",
      "insulina",
      "metas glicêmicas",
      "pré-natal"
    ],
    "tip": "DMG fora da meta após dieta: insulina."
  },
  {
    "id": "fmj2026-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher secundigesta, já com um parto normal realizado anteriormente, encontrava‑se com 33 semanas de idade gestacional e com diagnóstico de pré‑eclâmpsia. A paciente apresentou exames laboratoriais com AST 320, LDH alta e plaquetas 48.000.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada.",
    "options": [
      "manter conduta expectante até 37 semanas de idade gestacional",
      "induzir parto vaginal com misoprostol",
      "estabilização materna e resolução da gestação",
      "transfundir as plaquetas e aguardar a melhoria laboratorial para a resolução da gestação",
      "internação para cesárea imediata após diazepan, para a profilaxia de convulsão"
    ],
    "correctAnswer": 2,
    "explanation": "Pré-eclâmpsia com 33 semanas complicada por síndrome HELLP (AST muito elevada, LDH alto, plaquetas 48.000): a conduta é estabilizar a mãe (sulfato de magnésio, controle pressórico, avaliação de coagulopatia) e resolver a gestação. Com 33 semanas e paciente estável, pode-se fazer corticoide para maturação pulmonar sem atrasar indevidamente; a via de parto segue indicação obstétrica.",
    "commentary": "Expectante até 37 semanas (A): a HELLP indica interrupção da gestação.\n\nInduzir com misoprostol (B): a via vaginal pode ser tentada em condições favoráveis, mas a alternativa omite a estabilização materna.\n\nTransfundir plaquetas e aguardar melhora (D): os exames só melhoram após o parto; transfusão é feita se < 50.000 antes de cesárea ou com sangramento.\n\nCesárea imediata após diazepam (E): a profilaxia de convulsão é com sulfato de magnésio, e a via não precisa ser cesárea obrigatoriamente.",
    "reference": "Febrasgo/RBEHG – Pré-eclâmpsia (2023)",
    "tags": [
      "síndrome HELLP",
      "pré-eclâmpsia",
      "sulfato de magnésio",
      "obstetrícia"
    ],
    "tip": "HELLP: estabilizar (magnésio, PA) e resolver a gestação."
  },
  {
    "id": "fmj2026-55",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma primigesta, com idade gestacional de 39 semanas, encontrava‑se em trabalho de parto ativo e tinha apresentação cefálica com monitorização exibindo desacelerações tardias intermitentes. Após a ruptura espontânea das membranas, foi visualizado um prolapso de cordão umbilical. Nesse momento, a paciente estava com 6 centímetros de dilatação.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta indicada.",
    "options": [
      "cardiotocografia contínua e progressão natural conforme tríplice gradiente descendente",
      "posicionar a mãe em Trendelenburg, remover tração do cordão com toque vaginal e realizar uma cesariana de emergência",
      "instalar ocitocina em bomba endovenosa para acelerar o parto vaginal",
      "administrar antibiótico endovenoso e realizar vacuoextração via vaginal",
      "realizar episiotomia e locar fórcipe de alívio"
    ],
    "correctAnswer": 1,
    "explanation": "Prolapso de cordão umbilical com feto vivo e 6 cm de dilatação é emergência obstétrica. A conduta é aliviar a compressão do cordão — posição de Trendelenburg ou genupeitoral, elevação manual da apresentação pelo toque vaginal (sem tracionar ou manipular o cordão), enchimento vesical se necessário — e realizar cesárea de emergência. O parto vaginal só é preferido se a dilatação for completa e o parto iminente.",
    "commentary": "Cardiotocografia e evolução natural (A): o feto corre risco de hipóxia grave pela compressão do cordão.\n\nOcitocina para acelerar o parto (C): contrações aumentam a compressão do cordão.\n\nVacuoextração (D) e fórcipe (E): só são possíveis com dilatação completa e apresentação insinuada.",
    "reference": "RCOG Green-top Guideline nº 50 – Umbilical Cord Prolapse (2014); Febrasgo",
    "tags": [
      "prolapso de cordão",
      "emergência obstétrica",
      "cesárea"
    ],
    "tip": "Prolapso de cordão: elevar a apresentação, Trendelenburg e cesárea."
  },
  {
    "id": "fmj2026-56",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma tercigesta, com 2 partos normais prévios, com o último tendo ocorrido há 18 meses, e com idade gestacional de 32 semanas e 5 dias, compareceu ao pronto‑socorro queixando‑se de dor tipo cólica, a qual já estava ocorrendo há cerca de 4 horas. A paciente negou outras queixas, como também perdas vaginais e comorbidades. Foi diagnosticada uma boa movimentação fetal nessa paciente.\n• No exame físico, indicaram‑se bom estado geral, altura uterina 31 cm, BCF 130‑145 bpm sem desacelerações, movimentação fetal presente, tônus uterino normal e dinâmica uterina ausente.\n• No toque vaginal, identificaram‑se colo grosso, posterior, dilatação de 1 polpa justa, apresentação cefálica, ‑3 de DeLee e bolsa íntegra.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a orientação inicial a ser dada para essa paciente.",
    "options": [
      "internação para inibição de trabalho de parto prematuro com terbutalina e corticoprofilaxia",
      "internação para antibioticoprofilaxia, corticoprofilaxia e observação se haverá evolução das contrações",
      "observação clínica, vigilância materno‑fetal e avaliar necessidade de rastreio infeccioso",
      "observação clínica, prescrição de cefalexina para infecção urinária empiricamente",
      "alta hospitalar com orientações de mobilograma"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 32 semanas com cólicas, mas sem contrações efetivas (dinâmica ausente), colo grosso, posterior e praticamente fechado, bolsa íntegra e vitalidade fetal preservada: não há trabalho de parto prematuro. A conduta é observação clínica com vigilância materno-fetal e avaliação de causas da dor (rastreio infeccioso, como infecção urinária ou vaginal), sem tocólise, corticoide ou antibiótico empíricos.",
    "commentary": "Inibição com terbutalina e corticoide (A): não há trabalho de parto (sem contrações nem modificação cervical).\n\nAntibioticoprofilaxia e corticoide (B): sem indicação na ausência de trabalho de parto.\n\nCefalexina empírica para ITU (D): o antibiótico depende de confirmação diagnóstica (urina/urocultura).\n\nAlta imediata (E): a queixa merece avaliação e observação antes da alta.",
    "reference": "Febrasgo – Parto pré-termo; Ministério da Saúde – Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "trabalho de parto prematuro",
      "ameaça de parto prematuro",
      "obstetrícia"
    ],
    "tip": "Sem contrações efetivas e colo fechado: não é trabalho de parto prematuro."
  },
  {
    "id": "fmj2026-57",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante G2P1, com 24 anos de idade e 9 semanas de gestação, compareceu à primeira consulta de pré‑natal na UBS. A paciente negou comorbidades. Os exames indicaram PA de 110 × 70 mmHg e IMC de 23 kg/m². O exame físico estava sem alterações.\n\nCom base nesse caso clínico hipotético, assinale a opção correta, acerca da assistência de pré‑natal de baixo risco.",
    "options": [
      "O início do pré‑natal é idealmente após 14 semanas, quando se confirma a vitalidade fetal",
      "O número mínimo de consultas recomendado é de 4, desde que uma seja no 3º trimestre",
      "A sorologia para sífilis é solicitada apenas na primeira consulta e, no caso de ser negativa, não precisará ser repetida",
      "A vacinação contra dTpa é indicada entre 20 e 36 semanas, em todas as gestações",
      "A sorologia para HIV deve ser solicitada apenas se a gestante referir fator de risco"
    ],
    "correctAnswer": 3,
    "explanation": "No pré-natal de baixo risco, a vacina dTpa é indicada em todas as gestações, a partir de 20 semanas (até 36 semanas, idealmente; pode ser feita até 20 dias antes do parto ou no puerpério), para proteger o recém-nascido contra a coqueluche.",
    "commentary": "Início do pré-natal após 14 semanas (A): o pré-natal deve começar o mais cedo possível, idealmente até 12 semanas.\n\nMínimo de 4 consultas (B): o Ministério da Saúde recomenda no mínimo 6 (a OMS, 8 contatos).\n\nSífilis só na primeira consulta (C): a testagem é repetida no 3º trimestre, no parto e em situações de risco.\n\nHIV só com fator de risco (E): a testagem é universal, no 1º e 3º trimestres.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 32: Atenção ao Pré-Natal de Baixo Risco; Calendário de vacinação da gestante",
    "tags": [
      "pré-natal de baixo risco",
      "dTpa",
      "vacinação na gestação",
      "atenção primária à saúde"
    ],
    "tip": "Pré-natal: ≥ 6 consultas; sífilis e HIV no 1º e 3º trimestres; dTpa a partir de 20 semanas."
  },
  {
    "id": "fmj2026-58",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma puérpera imediata, com parto vaginal realizado há 30 minutos, apresentou perda sanguínea estimada em 900 ml, útero amolecido e elevado, além de sangramento em jorros.\n\nA placenta estava íntegra, sem lacerações importantes do canal de parto. Outros dados: PA de 90 × 60 mmHg; FC de 120 bpm; e pele fria.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a hipótese etiológica e a conduta inicial a ser tomada.",
    "options": [
      "trauma de canal de parto; indicar revisão sob anestesia geral",
      "atonia uterina; realizar massagem uterina vigorosa e administração de uterotônicos",
      "retenção placentária; realizar curetagem uterina imediata sem outras medidas",
      "coagulopatia; iniciar transfusão de plaquetas como primeira medida",
      "inversão uterina; realizar reposicionamento manual do útero"
    ],
    "correctAnswer": 1,
    "explanation": "Hemorragia pós-parto (900 mL, sinais de choque) com útero amolecido e elevado, placenta íntegra e sem lacerações: atonia uterina, a causa mais comum (o “tônus” dos 4 Ts). A conduta inicial é massagem uterina bimanual, ocitocina IV, ácido tranexâmico em até 3 horas e, se necessário, metilergometrina e misoprostol, junto com ressuscitação volêmica; persistindo, balão de tamponamento e cirurgia.",
    "commentary": "Trauma de canal com revisão (A): o exame não mostra lacerações importantes e o útero está amolecido.\n\nRetenção placentária com curetagem (C): a placenta está íntegra.\n\nCoagulopatia com plaquetas (D): não é a causa primária e plaquetas não são a primeira medida.\n\nInversão uterina (E): o útero estaria ausente ou invertido à palpação, não elevado e amolecido.",
    "reference": "OPAS – Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018); Febrasgo",
    "tags": [
      "hemorragia pós-parto",
      "atonia uterina",
      "uterotônicos",
      "emergência obstétrica"
    ],
    "tip": "HPP: 4 Ts — tônus (70%), trauma, tecido, trombina."
  },
  {
    "id": "fmj2026-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma primigesta, com 40 semanas e 1 dia de vida, compareceu ao pronto‑socorro relatando perda de líquido vaginal que vinha ocorrendo há aproximadamente 20 horas, em moderada quantidade. A paciente referiu poucas cólicas irregulares, e desejava parto normal. O pré‑natal apresentava‑se de risco habitual, sem comorbidades.\n\nO exame físico apontou os dados a seguir.\n• Altura uterina: 37 cm.\n• BCF: 135–150 bpm, sem desacelerações.\n• Movimentação fetal presente.\n• Dinâmica uterina: 1 contração fraca a cada 10 minutos.\n• Toque vaginal: colo posterior; 2 cm; 40% apagado; e apresentação cefálica alta.\n• Especular: saída de líquido claro, odor característico.\n• Bolsa rota confirmada.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada para esse caso.",
    "options": [
      "profilaxia para estreptococo do grupo B com penicilina G e indução do parto com misoprostol",
      "parto cesárea por provável desproporção céfalo‑pélvica",
      "profilaxia para infecção por estreptococo do grupo B com ampicilina, internação para indução de trabalho de parto com método de Krause",
      "internação para indução de trabalho de parto com ocitocina",
      "reavaliação clínica em 12 horas"
    ],
    "correctAnswer": 0,
    "explanation": "Rotura de membranas a termo há cerca de 20 horas, sem trabalho de parto ativo e com colo desfavorável. Como a bolsa rota passa de 18 horas e não há rastreio de estreptococo do grupo B, indica-se profilaxia intraparto (penicilina G cristalina) e indução do parto (reduz infecção materna e neonatal em relação à conduta expectante prolongada), com misoprostol para preparo do colo ou ocitocina.",
    "commentary": "Cesárea por desproporção (B): não há elementos de desproporção; a via de escolha é vaginal.\n\nKrause (C): o cateter de Foley/Krause é contraindicado com bolsa rota, pelo risco de infecção.\n\nOcitocina sem profilaxia (D): falta a profilaxia para estreptococo do grupo B, indicada pela rotura > 18 horas.\n\nReavaliar em 12 horas (E): a rotura prolongada aumenta o risco de corioamnionite; a indução não deve esperar mais.",
    "reference": "Febrasgo – Rotura prematura de membranas; Ministério da Saúde – Diretrizes nacionais de assistência ao parto normal",
    "tags": [
      "rotura prematura de membranas",
      "indução do parto",
      "estreptococo do grupo B",
      "obstetrícia"
    ],
    "tip": "Bolsa rota a termo > 18 h sem GBS conhecido: profilaxia + indução."
  },
  {
    "id": "fmj2026-60",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 24 anos de idade, com PO4 de parto cesárea por sofrimento fetal agudo, procurou o pronto‑socorro obstétrico com queixa de febre e dor pélvica. Ao exame físico, apresentou‑se com temperatura oral de 38,5 °C, PA de 120 × 60 mmHg, FC 98 bpm e FR 14 ipm. O abdome estava flácido, o útero em involução, além de haver uma ferida operatória em bom estado, sem sinais flogísticos e loquiação fisiológica. A paciente foi internada para elucidação diagnóstica e foi prescrito cefazolina endovenosa. Dois dias depois (PO6) a paciente mantinha febre, apesar de ter apresentado hemograma, rotina de urina e ecografia pélvica sem alterações.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a hipótese diagnóstica e a medicação de escolha.",
    "options": [
      "ceftriaxone",
      "ácido aminocaproico",
      "ácido tranexâmico",
      "sulfato de magnésio",
      "enoxaparina"
    ],
    "correctAnswer": 4,
    "explanation": "Puérpera pós-cesárea com febre persistente apesar de antibiótico, exame físico, ultrassom, hemograma e urina sem alterações (sem abscesso, endometrite ou infecção de ferida): a principal hipótese é tromboflebite pélvica séptica, diagnóstico de exclusão. O tratamento é anticoagulação (heparina — por exemplo, enoxaparina) associada à antibioticoterapia de amplo espectro; a resposta à heparina confirma o diagnóstico.",
    "commentary": "Ceftriaxona (A): trocar o antibiótico não resolve a tromboflebite, que exige anticoagulação.\n\nÁcido aminocaproico (B) e tranexâmico (C): antifibrinolíticos, contraindicados na trombose.\n\nSulfato de magnésio (D): sem indicação.",
    "reference": "Febrasgo – Infecção puerperal; Williams Obstetrics, 26ª ed.",
    "tags": [
      "tromboflebite pélvica séptica",
      "febre puerperal",
      "anticoagulação",
      "puerpério"
    ],
    "tip": "Febre puerperal persistente com antibiótico e exames normais: tromboflebite pélvica → heparina."
  },
  {
    "id": "fmj2026-61",
    "module": "Pediatria",
    "text": "Em relação à dose zero da vacina contra o sarampo para crianças menores de um ano de idade, conforme orientações do Ministério da Saúde, é correto afirmar que a dose zero",
    "options": [
      "deve ser iniciada aos quatro meses de vida, com a vacina dupla viral (sarampo + rubéola)",
      "é indicada entre 6 e 11 meses e 29 dias de vida, com a vacina tetra viral (sarampo, caxumba, rubéola e varicela)",
      "substitui a primeira dose do esquema vacinal de rotina aplicada aos 12 meses de vida",
      "é aplicada a partir de seis meses de vida, com a vacina dupla viral (sarampo + varicela)",
      "é indicada entre 6 meses e 11 meses e 29 dias de vida, preferencialmente com a vacina dupla viral (sarampo + rubéola) até 8 meses e 29 dias de vida"
    ],
    "correctAnswer": 4,
    "explanation": "A dose zero da vacina contra sarampo é uma dose extra aplicada em crianças de 6 meses a 11 meses e 29 dias, em situações de surto ou risco epidemiológico. Pelo gabarito, prefere-se a vacina dupla viral (sarampo e rubéola) até 8 meses e 29 dias (a partir dessa idade pode-se usar a tríplice viral). Ela não substitui as doses de rotina aos 12 e 15 meses.",
    "commentary": "Aos 4 meses (A): a dose zero começa aos 6 meses.\n\nTetraviral (B): a tetraviral não é usada na dose zero; é aplicada aos 15 meses.\n\nSubstitui a dose de 12 meses (C): é dose adicional, não conta para o esquema de rotina.\n\nDupla viral sarampo + varicela (D): a dupla viral é sarampo e rubéola.",
    "reference": "Ministério da Saúde – Informes técnicos sobre a dose zero da vacina contra o sarampo; Calendário Nacional de Vacinação",
    "tags": [
      "sarampo",
      "dose zero",
      "vacinação",
      "imunizações"
    ],
    "tip": "Dose zero de sarampo: 6–11 meses, não conta para o calendário."
  },
  {
    "id": "fmj2026-62",
    "module": "Pediatria",
    "text": "Recém‑nascido, 12 dias de vida, em uso de fórmula láctea desde o nascimento por contraindicação ao aleitamento materno, apresenta fezes com sangue há 3 dias, irritabilidade após as mamadas e regurgitação frequente. Nasceu a termo e adequado para a idade gestacional. Exame físico sem alterações de pele, sem fissuras anais, abdome flácido, indolor e sem massas palpáveis.\n\nCom base nesse caso clínico hipotético e na principal hipótese diagnóstica, assinale a conduta adequada.",
    "options": [
      "Deve‑se introduzir fórmula de soja, já que representa a primeira linha de tratamento devido ao baixo potencial alergênico",
      "Deve‑se introduzir fórmula extensamente hidrolisada como primeira linha de tratamento",
      "A fórmula de aminoácidos é a primeira linha de tratamento nesses quadros",
      "Deve‑se iniciar fórmula antirregurgitação e reorientar o preparo da fórmula láctea",
      "Iniciar leite de vaca diluído em água na proporção 1:2 e observar se há melhora dos sintomas"
    ],
    "correctAnswer": 1,
    "explanation": "Recém-nascido em fórmula de leite de vaca com sangue nas fezes, irritabilidade e regurgitação, sem fissura anal e com exame normal: proctocolite alérgica induzida por proteína do leite de vaca (APLV não IgE mediada). A primeira linha é substituir por fórmula extensamente hidrolisada; se não houver melhora, usa-se fórmula de aminoácidos.",
    "commentary": "Fórmula de soja como primeira linha (A): não é recomendada antes dos 6 meses e há reação cruzada em parte dos casos.\n\nFórmula de aminoácidos como primeira linha (C): é reservada a casos graves, anafilaxia ou falha do hidrolisado.\n\nFórmula antirregurgitação (D): contém proteína intacta do leite de vaca e não trata a alergia.\n\nLeite de vaca diluído (E): mantém o alérgeno e é inadequado para recém-nascido.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (SBP/ASBAI, 2018)",
    "tags": [
      "alergia à proteína do leite de vaca",
      "proctocolite alérgica",
      "fórmula extensamente hidrolisada",
      "gastroenterologia pediátrica"
    ],
    "tip": "APLV em uso de fórmula: hidrolisado extenso; aminoácidos se falhar ou grave."
  },
  {
    "id": "fmj2026-63",
    "module": "Pediatria",
    "text": "Uma criança de 7 anos de idade, previamente hígida, foi levada ao pronto atendimento com otalgia à direita há 1 dia. Refere que o quadro iniciou com prurido no ouvido direito, evoluindo para dor intensa local. Nega febre, coriza ou tosse. Estava na praia há 10 dias. Exame físico: dor intensa à palpação do tragus, edema do meato acústico externo e presença de secreção branco‑amarelada à otoscopia.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta, respectivamente, o diagnóstico provável e o tratamento de escolha.",
    "options": [
      "otite média aguda com efusão; tratar com amoxicilina via oral por 10 dias e analgesia",
      "otite externa aguda; tratar com antibiótico tópico e medidas locais de higiene e analgesia",
      "miringite bolhosa; tratar com antibiótico tópico e medidas locais de higiene e analgesia",
      "otite média aguda com efusão; iniciar anti‑inflamatório não esteroidal e observar por 72 horas antes de iniciar antibiótico",
      "otite externa maligna; tratar com ciprofloxacino via oral por 10 dias e analgesia"
    ],
    "correctAnswer": 1,
    "explanation": "Otalgia intensa após exposição à água (praia), com prurido inicial, dor à palpação do trágus, edema do conduto e secreção, sem febre: otite externa aguda (“otite do nadador”), geralmente por Pseudomonas aeruginosa ou S. aureus. O tratamento é tópico (gotas de antibiótico, como quinolona, com ou sem corticoide), limpeza do conduto, analgesia e evitar água no ouvido.",
    "commentary": "Otite média aguda com amoxicilina (A) ou com observação (D): a dor ao tocar o trágus e o edema do conduto indicam otite externa, não média.\n\nMiringite bolhosa (C): vesículas na membrana timpânica, associadas a infecção viral ou por micoplasma.\n\nOtite externa maligna (E): ocorre em idosos diabéticos ou imunossuprimidos, com osteomielite da base do crânio.",
    "reference": "AAO-HNS Clinical Practice Guideline: Acute Otitis Externa (2014); Associação Brasileira de Otorrinolaringologia",
    "tags": [
      "otite externa",
      "otorrinolaringologia",
      "infecções de ouvido"
    ],
    "tip": "Dor ao tocar o trágus + praia/piscina = otite externa → gotas."
  },
  {
    "id": "fmj2026-64",
    "module": "Pediatria",
    "text": "Um recém‑nascido, termo, com 7 dias de vida, foi trazido para a primeira consulta de rotina. A mãe referiu dificuldade na amamentação e acreditava que o leite materno era insuficiente. O exame físico não apontou alterações. Outros dados: peso ao nascer de 2.900 g; e peso atual: 2.755 g.\n\nCom base nesse caso clínico hipotético, assinale a opção correta.",
    "options": [
      "Como houve perda ponderal acima do esperado, será necessário introduzir fórmula láctea e suspender a amamentação",
      "Como houve perda ponderal dentro do esperado, dever‑se‑á observar a amamentação durante a consulta e orientar. Nesse caso, se a criança apresentar sucções lentas, profundas e com pausas ocasionais, a pega estará inadequada",
      "Como houve perda ponderal dentro do esperado, dever‑se‑á observar a amamentação durante a consulta e orientar. Nesse caso, se a criança apresentar sucções superficiais e rápidas, a pega estará adequada",
      "Como houve perda ponderal dentro do esperado, dever‑se‑á observar a amamentação durante a consulta e orientar. Nesse caso, se o lábio inferior estiver evertido durante a mamada, a pega estará adequada",
      "Como houve perda ponderal acima do esperado, será necessário adotar alimentação mista, mantendo‑se a amamentação com pega adequada e suplementando com fórmula láctea a cada três horas"
    ],
    "correctAnswer": 3,
    "explanation": "Perda de peso de 2.900 para 2.755 g (5%) aos 7 dias está dentro do esperado (até 10% na primeira semana, com recuperação do peso de nascimento até 10–14 dias). A conduta é observar a mamada e orientar. Sinais de pega adequada: boca bem aberta, lábio inferior evertido (virado para fora), queixo tocando a mama, mais aréola visível acima que abaixo da boca, e sucções lentas e profundas com pausas.",
    "commentary": "Introduzir fórmula e suspender a amamentação (A) e alimentação mista (E): a perda está dentro do esperado; não há indicação de fórmula.\n\nSucções lentas e profundas como pega inadequada (B): são sinal de pega adequada.\n\nSucções superficiais e rápidas como pega adequada (C): indicam pega inadequada.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 23 (aleitamento materno); OMS/UNICEF – Iniciativa Hospital Amigo da Criança",
    "tags": [
      "aleitamento materno",
      "pega",
      "perda de peso neonatal",
      "puericultura"
    ],
    "tip": "Até 10% de perda na 1ª semana é normal. Pega boa: lábio inferior evertido, sucção lenta e profunda."
  },
  {
    "id": "fmj2026-65",
    "module": "Pediatria",
    "text": "Um lactente de 20 dias de vida, nascido pré‑termo tardio (36 semanas e 5 dias), com peso de nascimento de 2.200 g, foi levado para consulta de rotina.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada em relação à suplementação medicamentosa profilática de ferro.",
    "options": [
      "iniciar 1 mg de ferro elementar/kg/dia, com início aos 30 dias de vida",
      "iniciar 1 mg de ferro elementar/kg/dia, iniciando imediatamente",
      "iniciar 2 mg de ferro elementar/kg/dia, com início aos 30 dias de vida",
      "iniciar 2 mg de ferro elementar/kg/dia, iniciando imediatamente",
      "iniciar 2 mg de ferro elementar/kg/dia, com início aos 90 dias de vida"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Sociedade Brasileira de Pediatria, recém-nascidos pré-termo com peso de nascimento entre 1.500 e 2.500 g devem receber 2 mg/kg/dia de ferro elementar a partir do 30º dia de vida durante o primeiro ano (depois, 1 mg/kg/dia no segundo ano). Prematuros com < 1.500 g recebem 3 mg/kg/dia (< 1.000 g, 4 mg/kg/dia).",
    "commentary": "1 mg/kg/dia aos 30 dias (A) ou imediatamente (B): 1 mg/kg/dia é a dose do lactente a termo, a partir de 3 meses.\n\n2 mg/kg/dia imediatamente (D): o início é aos 30 dias de vida.\n\n2 mg/kg/dia aos 90 dias (E): o início aos 3 meses é para lactentes a termo.",
    "reference": "Sociedade Brasileira de Pediatria – Consenso sobre anemia ferropriva (2021)",
    "tags": [
      "suplementação de ferro",
      "prematuridade",
      "anemia ferropriva",
      "puericultura"
    ],
    "tip": "Prematuro 1.500–2.500 g: ferro 2 mg/kg/dia a partir de 30 dias."
  },
  {
    "id": "fmj2026-66",
    "module": "Pediatria",
    "text": "Um menino de 5 anos de idade, previamente hígido, foi levado ao pronto atendimento após picada de abelha, apresentando dor abdominal intensa, vômitos repetidos. Ao exame: PA 75 x 45 mmHg; FC: 145 bpm; e sem urticária ou angioedema.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada para o caso.",
    "options": [
      "administrar adrenalina 0,01 mg/kg (solução 1:1000) via intramuscular, na face ântero‑lateral da coxa, repetir a cada 5 a 15 minutos se necessário, manter o paciente em decúbito dorsal com pernas elevadas e monitorização contínua",
      "administrar adrenalina 0,1 mg/kg (solução 1:1000) via subcutânea, repetir a cada 5 a 15 minutos se necessário, manter em posição sentada para aliviar desconforto abdominal",
      "administrar adrenalina 0,01 mg/kg (solução 1:10.000) via intramuscular na face ântero‑lateral da coxa, repetir a cada 5 a 15 minutos se necessário, manter em decúbito lateral esquerdo para evitar broncoaspiração",
      "administrar adrenalina 0,01 mg/kg (solução 1:10.000) via endovenosa em bolus, seguida de soro fisiológico 20 mL/kg, manter o paciente em decúbito dorsal com pernas elevadas e monitorização contínua",
      "administrar metilprednisolona 2 mg/kg e dexclorfeniramina 0,15 mg/kg, manter o paciente em decúbito dorsal com pernas elevadas e monitorização contínua"
    ],
    "correctAnswer": 0,
    "explanation": "Após picada de abelha, a criança apresenta hipotensão e taquicardia com sintomas gastrointestinais intensos: anafilaxia (choque anafilático), mesmo sem urticária ou angioedema — o acometimento de dois sistemas após exposição a alérgeno provável, ou hipotensão após alérgeno conhecido, já define o quadro. O tratamento é adrenalina intramuscular 0,01 mg/kg da solução 1:1.000 (máximo 0,3 mg na criança) na face anterolateral da coxa, repetida a cada 5–15 minutos se necessário, com o paciente deitado e pernas elevadas, oxigênio, expansão volêmica e monitorização.",
    "commentary": "Adrenalina 0,1 mg/kg subcutânea (B): dose dez vezes maior e via inadequada; e a posição sentada piora a hipotensão.\n\nSolução 1:10.000 por via IM (C): a solução IM é 1:1.000; a 1:10.000 é para uso EV na parada.\n\nAdrenalina EV em bolus (D): reservada à parada ou choque refratário, em infusão titulada, pelo risco de arritmia.\n\nCorticoide e anti-histamínico sem adrenalina (E): não tratam a anafilaxia; são adjuvantes.",
    "reference": "World Allergy Organization Anaphylaxis Guidance (2020); ASBAI – Guia de anafilaxia",
    "tags": [
      "anafilaxia",
      "adrenalina",
      "picada de inseto",
      "emergência pediátrica"
    ],
    "tip": "Anafilaxia: adrenalina IM 0,01 mg/kg (1:1.000) na coxa, deitado com pernas elevadas."
  },
  {
    "id": "fmj2026-67",
    "module": "Pediatria",
    "text": "Criança de 3 anos de idade foi trazida pelos familiares ao pronto‑socorro, vítima de afogamento em piscina há cerca de 10 minutos. Chegou à sala de emergência arresponsiva, sem respiração e sem pulso central palpável.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta imediata adequada.",
    "options": [
      "iniciar compressões torácicas imediatamente, na proporção de 15 compressões duas ventilações (100‑120 compressões por minuto), realizar desfibrilação precoce de 2 J/kg se disponível e adiar as ventilações até o retorno da circulação espontânea",
      "iniciar compressões torácicas imediatamente, na proporção de 15 compressões duas ventilações (100‑120 compressões por minuto), realizar desfibrilação precoce de 4 J/kg se disponível e administrar adrenalina 0,01 mg/kg por via intramuscular",
      "iniciar compressões torácicas imediatamente, na proporção de 15 compressões duas ventilações (100‑120 compressões por minuto), mantendo prioridade para oxigenação e ventilação com O2 a 100%",
      "iniciar compressões torácicas imediatamente, na proporção de 30 compressões duas ventilações (80‑100 compressões por minuto), mantendo prioridade para oxigenação e ventilação com O2 a 100%",
      "posicionar a criança em decúbito lateral para drenar a água dos pulmões e iniciar ventilações com O2 a 100%, após 30 segundos, iniciar compressões torácicas"
    ],
    "correctAnswer": 2,
    "explanation": "Na parada cardiorrespiratória por afogamento, a causa é hipóxica. Na criança, com dois socorristas, faz-se RCP com 15 compressões para 2 ventilações (100–120 compressões/min), dando prioridade à oxigenação e ventilação com O₂ a 100%. As diretrizes de afogamento recomendam iniciar com ventilações de resgate (abordagem ABC), já que a hipóxia é o mecanismo.",
    "commentary": "Adiar as ventilações (A): no afogamento a ventilação é essencial.\n\nAdrenalina por via IM (B): na parada a adrenalina é EV/IO 0,01 mg/kg; e a desfibrilação é guiada pelo ritmo.\n\n30:2 com 80–100/min (D): na criança com dois socorristas a relação é 15:2, e a frequência é 100–120/min.\n\nDrenar água dos pulmões antes (E): manobras para retirar água atrasam a RCP e não são recomendadas.",
    "reference": "American Heart Association – Pediatric Advanced Life Support (2020); Sociedade Brasileira de Salvamento Aquático",
    "tags": [
      "afogamento",
      "parada cardiorrespiratória pediátrica",
      "reanimação",
      "emergência pediátrica"
    ],
    "tip": "Afogamento: a causa é hipóxia — priorizar ventilação; criança 15:2 com 2 socorristas."
  },
  {
    "id": "fmj2026-68",
    "module": "Pediatria",
    "text": "Um lactente de 1 ano e 1 mês de vida, previamente hígido, foi trazido ao pronto atendimento com quadro de tosse e coriza havia já 3 dias. Foi dito que houve pico febril de 38 ºC no primeiro dia de sintomas. A mãe referiu boa hidratação e aceitação alimentar. No exame físico: coriza nasal hialina e congestão nasal; oroscopia com edema e hiperemia de tonsilas e parede posterior de orofaringe; ausculta pulmonar sem alterações.\n\nCom base nesse caso clínico hipotético e considerando a hipótese diagnóstica adequada, é correto afirmar que o",
    "options": [
      "uso de pseudoefedrina será indicado para alívio dos sintomas nasais, desde que em doses ajustadas ao peso",
      "uso de guaifenesina será seguro para essa faixa etária e contribuirá para reduzir a duração da tosse",
      "uso de difenidramina reduzirá os sintomas nasais e apresentará seletividade para receptores histamínicos com menos efeitos adversos",
      "uso de mel provavelmente aliviará os sintomas da tosse e reduzirá o impacto da tosse no sono",
      "uso de mucolíticos reduzirá a necessidade de antibióticos e prevenirá complicações respiratórias"
    ],
    "correctAnswer": 3,
    "explanation": "Resfriado comum em criança de 1 ano: o tratamento é sintomático (hidratação, lavagem nasal com soro, antitérmico se necessário). Para crianças acima de 1 ano, o mel pode reduzir a tosse e melhorar o sono (evitar antes de 1 ano pelo risco de botulismo). Descongestionantes, anti-histamínicos, expectorantes e mucolíticos não são recomendados em crianças pequenas.",
    "commentary": "Pseudoefedrina (A): descongestionantes orais são contraindicados em menores de 2 anos (risco cardiovascular e neurológico).\n\nGuaifenesina (B): sem eficácia comprovada e não recomendada nessa idade.\n\nDifenidramina (C): anti-histamínico de primeira geração, não seletivo e sedativo, contraindicado em menores de 2 anos.\n\nMucolíticos (E): não reduzem uso de antibiótico nem complicações, e são contraindicados em menores de 2 anos.",
    "reference": "Sociedade Brasileira de Pediatria – Uso de medicamentos para tosse e resfriado em crianças; Cochrane – Honey for acute cough in children (2018)",
    "tags": [
      "resfriado comum",
      "tosse",
      "infecções de vias aéreas superiores",
      "pediatria ambulatorial"
    ],
    "tip": "Tosse do resfriado após 1 ano: mel. Nada de antigripais em menores de 2 anos."
  },
  {
    "id": "fmj2026-69",
    "module": "Pediatria",
    "text": "Uma criança de seis anos de idade, previamente hígida, apresentou lesões na face e nos membros inferiores, as quais se iniciaram como máculas eritematosas, evoluindo rapidamente para vesículas e pústulas, o que formou uma crosta melicérica com halo eritematoso havia já três dias. Negou‑se febre, e o estado geral do paciente manteve‑se bom.\n\nCom base nesse caso clínico hipotético e considerando a hipótese diagnóstica adequada, é correto afirmar que",
    "options": [
      "o tratamento de escolha é o uso tópico de mupirocina ou ácido fusídico",
      "o uso de antibiótico oral, como amoxicilina, deve ser prescrito, já que o Streptococcus pyogenes é responsável por 80% dos casos",
      "o uso de permanganato de potássio associado a cetoconazol é recomendado como primeira linha de tratamento",
      "o tratamento indicado é com permetrina 5%, que será aplicada em todo o corpo em um intervalo de 8 a 12 horas",
      "o uso de pomadas de corticoide isolado, como beclometasona, associado à hidratação local, é o tratamento de escolha"
    ],
    "correctAnswer": 0,
    "explanation": "Lesões que começam como máculas, evoluem para vesículas e pústulas e formam crostas melicéricas, em face e membros, sem febre: impetigo não bolhoso (por S. aureus e/ou Streptococcus pyogenes). Nas formas localizadas, o tratamento de escolha é tópico, com mupirocina ou ácido fusídico, além de higiene; antibiótico oral (cefalexina) é reservado às formas extensas ou com sintomas sistêmicos.",
    "commentary": "Amoxicilina oral por S. pyogenes em 80% (B): hoje o S. aureus é o principal agente, e o tratamento oral é para casos extensos (com antiestafilocócico).\n\nPermanganato com cetoconazol (C): cetoconazol é antifúngico, sem indicação.\n\nPermetrina (D): trata escabiose, não impetigo.\n\nCorticoide tópico isolado (E): pode piorar a infecção.",
    "reference": "Sociedade Brasileira de Dermatologia; IDSA Guidelines for Skin and Soft Tissue Infections (2014)",
    "tags": [
      "impetigo",
      "crosta melicérica",
      "mupirocina",
      "dermatologia pediátrica"
    ],
    "tip": "Impetigo localizado: mupirocina ou ácido fusídico."
  },
  {
    "id": "fmj2026-70",
    "module": "Pediatria",
    "text": "No que diz respeito aos distúrbios da puberdade, assinale a opção correta.",
    "options": [
      "A puberdade precoce central é idiopática em apenas 20% das meninas e em 85% dos meninos",
      "Os casos de puberdade precoce periféricos são mais comuns, sendo a hiperplasia adrenal congênita uma causa",
      "A síndrome de McCune‑Albright é uma causa de puberdade precoce periférica, a qual é caracterizada, em meninas, pelo desenvolvimento de cistos ovarianos funcionantes que produzem estrogênio de forma autônoma",
      "A puberdade precoce em meninos é caracterizada pelo aumento do volume testicular maior que 10 ml antes dos nove anos de idade",
      "O hipotireoidismo primário de longa duração, quando não é tratado, torna‑se uma causa comum de puberdade precoce central"
    ],
    "correctAnswer": 2,
    "explanation": "A síndrome de McCune-Albright (mutação ativadora da proteína Gs, GNAS) é causa de puberdade precoce periférica (independente de gonadotrofinas): em meninas, cistos ovarianos funcionantes produzem estrogênio de forma autônoma, causando telarca e sangramentos vaginais. A tríade clássica inclui manchas café com leite de bordas irregulares e displasia fibrosa poliostótica.",
    "commentary": "Central idiopática em só 20% das meninas e 85% dos meninos (A): é o contrário — idiopática em cerca de 90% das meninas e menos frequente nos meninos (mais causas orgânicas).\n\nPeriférica mais comum (B): a forma central é a mais comum.\n\nTestículo > 10 mL antes dos 9 anos (D): o critério é volume testicular ≥ 4 mL antes dos 9 anos.\n\nHipotireoidismo como causa comum (E): é causa rara (síndrome de Van Wyk-Grumbach).",
    "reference": "SBEM/SBP – Puberdade precoce; Latronico AC et al., Lancet Diabetes Endocrinol 2016",
    "tags": [
      "puberdade precoce",
      "síndrome de McCune-Albright",
      "endocrinologia pediátrica"
    ],
    "tip": "McCune-Albright: café com leite + displasia fibrosa + puberdade precoce periférica."
  },
  {
    "id": "fmj2026-71",
    "module": "Pediatria",
    "text": "Um recém‑nascido a termo era filho de uma mãe que foi diagnosticada com sífilis, durante a gestação. A genitora realizou um teste rápido positivo no 1º trimestre, com VDRL 1:64, e foi tratada com três doses de penicilina benzatina 2.400.000 U, com a aplicação de uma dose por semana. Exames maternos para o 2º trimestre: VDRL 1:8; exames maternos para o 3º trimestre: VDRL 1:4; e, no parto: VDRL 1:8. O parceiro foi tratado adequadamente, e a gestante não apresentou sinais clínicos da doença durante o pré‑natal. O recém‑nascido nasceu assintomático, com VDRL 1:4.\n\nCom base nesse caso clínico hipotético, é correto afirmar que se trata de",
    "options": [
      "uma criança exposta à sífilis, já que a mãe apresentou tratamento adequado durante a gestação, sendo necessário, então, realizar a radiografia de ossos longos e a punção lombar com VDRL no líquor ainda na maternidade",
      "uma criança exposta à sífilis, já que a mãe apresentou tratamento adequado durante a gestação, com indicação de penicilina benzatina dose única",
      "uma criança exposta à sífilis, já que a mãe apresentou tratamento adequado durante a gestação, sem a necessidade de exames adicionais ou tratamento imediato, devendo ser realizada a coleta de VDRL com um mês de vida para seguimento",
      "uma criança com sífilis congênita, pois o tratamento materno foi inadequado, sendo necessários a radiografia de ossos longos, a punção lombar com VDRL e o tratamento com penicilina cristalina por dez dias",
      "uma criança com sífilis congênita, já que a mãe apresentou tratamento inadequado durante a gestação, sendo necessárias a radiografia de ossos longos, a punção lombar com VDRL e a penicilina procaína por dez dias"
    ],
    "correctAnswer": 2,
    "explanation": "A mãe teve sífilis tratada adequadamente (penicilina benzatina, 3 doses, iniciada mais de 30 dias antes do parto, com queda dos títulos) e o recém-nascido é assintomático com VDRL (1:4) não superior a duas diluições acima do materno (1:8). Pelo PCDT do Ministério da Saúde (2022), é criança exposta à sífilis: não há necessidade de exames adicionais (radiografia, punção lombar) nem de tratamento, mas sim de seguimento com VDRL (1, 3, 6, 12 e 18 meses).",
    "commentary": "Exposta, mas com radiografia e punção (A): exames adicionais são para crianças com sífilis congênita ou com tratamento materno inadequado.\n\nExposta com penicilina benzatina dose única (B): não é indicada na criança exposta de mãe adequadamente tratada.\n\nSífilis congênita por tratamento inadequado (D e E): o tratamento materno foi adequado; a pequena variação do título no parto (1:4 para 1:8) não caracteriza reinfecção.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis congênita",
      "criança exposta à sífilis",
      "VDRL",
      "neonatologia"
    ],
    "tip": "Mãe tratada adequadamente + RN assintomático com VDRL ≤ 2 diluições acima do materno: seguimento."
  },
  {
    "id": "fmj2026-72",
    "module": "Pediatria",
    "text": "Um garoto de quatro anos de idade foi levado ao pronto atendimento com dor leve na região do quadril esquerdo e com claudicação, sentida já havia um dia. Os responsáveis negaram febre. Foi referido que tem ocorrido um episódio de resfriado há uma semana. No exame físico, encontrava‑se em bom estado geral, com limitação dolorosa da rotação interna e abdução do quadril esquerdo, sem outras alterações. Exames laboratoriais: VHS 2 mm/h; PCR 0,1 mg/dl; hemograma normal (Hb 12,5 g/dl, leucócitos 9.000/mm³, plaquetas 220.000/mm³). A radiografia de quadris não apresentou alterações. A ultrassonografia mostrava um pequeno derrame articular no quadril esquerdo.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a principal hipótese diagnóstica.",
    "options": [
      "sinovite transitória do quadril",
      "osteomielite de fêmur",
      "doença de Legg‑Calvé‑Perthes",
      "artrite séptica do quadril",
      "síndrome de Osgood‑Schlatter"
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 4 anos com claudicação e dor leve no quadril após infecção viral recente, afebril, em bom estado geral, com VHS, PCR e leucograma normais e pequeno derrame articular ao ultrassom: sinovite transitória do quadril, a causa mais comum de dor no quadril nessa idade. O tratamento é repouso relativo e anti-inflamatório, com melhora em 1–2 semanas.",
    "commentary": "Osteomielite (B) e artrite séptica (D): cursariam com febre, mau estado geral e marcadores inflamatórios elevados (critérios de Kocher).\n\nLegg-Calvé-Perthes (C): evolução mais arrastada, com alterações radiográficas da cabeça femoral.\n\nOsgood-Schlatter (E): acomete a tuberosidade da tíbia em adolescentes.",
    "reference": "Sociedade Brasileira de Ortopedia Pediátrica; Kocher MS et al. criteria for septic arthritis",
    "tags": [
      "sinovite transitória do quadril",
      "claudicação",
      "ortopedia pediátrica"
    ],
    "tip": "Quadril doloroso pós-virose, afebril e com PCR/VHS normais: sinovite transitória."
  },
  {
    "id": "fmj2026-73",
    "module": "Pediatria",
    "text": "Acerca do transtorno do espectro autista (TEA), é correto afirmar que",
    "options": [
      "a prevalência do TEA é em torno de 10% da população mundial, com maior prevalência no sexo feminino",
      "os sinais de alerta no primeiro ano de vida incluem anormalidades no controle motor, atraso no desenvolvimento motor, sensibilidade diminuída a recompensas sociais, baixo contato visual e pouca resposta ao chamado pelo nome",
      "O M‑CHAT‑R/F (Modified Checklist for Autism in Toddlers) é um questionário de triagem que deve ser respondido pelos pais ou pelos cuidadores de crianças entre 6 e 12 meses de vida, em uma consulta de puericultura",
      "Raramente indivíduos com TEA apresentam disfunções no processamento sensorial",
      "Para o diagnóstico, é imprescindível a realização de ressonância magnética de crânio e eletroencefalograma"
    ],
    "correctAnswer": 1,
    "explanation": "Sinais de alerta para transtorno do espectro autista no primeiro ano incluem alterações do controle motor e atraso motor, pouco interesse por recompensas sociais, baixo contato visual, pouca resposta ao chamado pelo nome, ausência de sorriso social e de balbucio comunicativo. O diagnóstico é clínico, e a identificação precoce permite intervenção oportuna.",
    "commentary": "Prevalência de 10% com predomínio feminino (A): a prevalência é de cerca de 1–2%, com predomínio masculino (cerca de 4:1).\n\nM-CHAT-R/F entre 6 e 12 meses (C): é aplicado entre 16 e 30 meses.\n\nDisfunção sensorial rara (D): alterações do processamento sensorial são muito frequentes e fazem parte dos critérios do DSM-5.\n\nRM e EEG imprescindíveis (E): o diagnóstico é clínico; exames complementares são dirigidos.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Orientação: TEA (2019); DSM-5-TR",
    "tags": [
      "transtorno do espectro autista",
      "sinais de alerta",
      "neurodesenvolvimento"
    ],
    "tip": "TEA no 1º ano: pouco contato visual, não responde ao nome, pouco interesse social."
  },
  {
    "id": "fmj2026-74",
    "module": "Pediatria",
    "text": "Criança do sexo masculino, 1 ano e 8 meses de idade, previamente hígida, é levada ao pronto‑socorro após episódio de crise convulsiva tônico‑clônica generalizada com duração de aproximadamente 1 minuto, seguida de recuperação completa do nível de consciência em poucos minutos. Mãe relata febre no momento da crise e coriza no mesmo dia. Ao exame físico: bom estado geral, temperatura 38,8 °C, exame neurológico normal, presença de coriza hialina e sem outras alterações.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada.",
    "options": [
      "administrar antitérmico e orientar a família sobre o manejo domiciliar de futuras crises e evolução benigna do quadro",
      "internação hospitalar e realização de punção lombar",
      "administrar antitérmico e solicitar tomografia de crânio",
      "administrar diazepam retal e solicitar avaliação de especialista",
      "iniciar protocolo de sepse com antibioticoterapia e coleta de exames, incluindo punção lombar"
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 1 ano e 8 meses com crise tônico-clônica generalizada de cerca de 1 minuto, com febre, recuperação completa e exame neurológico normal, com foco provável em infecção de vias aéreas: convulsão febril simples. A conduta é tratar a febre, investigar e tratar a causa da febre e orientar a família sobre a evolução benigna e o manejo de futuras crises. Não há indicação de punção lombar, neuroimagem, EEG ou anticonvulsivante contínuo.",
    "commentary": "Internação e punção lombar (B): a punção é considerada se houver sinais meníngeos, alteração neurológica, menores de 12 meses não vacinados ou uso prévio de antibiótico.\n\nTomografia de crânio (C): não é indicada na convulsão febril simples.\n\nDiazepam retal e especialista (D): a crise já cessou e não há indicação de encaminhamento.\n\nProtocolo de sepse (E): a criança está em bom estado geral com foco viral.",
    "reference": "AAP Clinical Practice Guideline: Febrile Seizures (2011); Sociedade Brasileira de Pediatria",
    "tags": [
      "convulsão febril",
      "crise febril simples",
      "neurologia pediátrica"
    ],
    "tip": "Crise febril simples: tranquilizar e orientar; sem exames."
  },
  {
    "id": "fmj2026-75",
    "module": "Pediatria",
    "text": "De acordo com a Cartilha de Desenvolvimento Infantil da Sociedade Brasileira de Pediatria, assinale a opção que apresenta as habilidades esperadas para uma criança de 6 meses de vida.",
    "options": [
      "Acena “adeus” e “tchau”",
      "Chama “mamã” ou “papá” ou outro nome especial",
      "Caminha, segurando nos móveis",
      "Pega as coisas entre o polegar e o indicador",
      "Reveza‑se fazendo sons com o cuidador"
    ],
    "correctAnswer": 4,
    "explanation": "Pelos marcos da Cartilha de Desenvolvimento Infantil da SBP, aos 6 meses a criança reveza sons com o cuidador (vocaliza em resposta, troca de turno comunicativa), rola, senta com apoio e leva objetos à boca. Acenar tchau, chamar mamã/papá e andar com apoio surgem por volta de 9–12 meses, e a pinça fina por volta de 9–10 meses.",
    "commentary": "Acena tchau (A) e chama mamã/papá (B): habilidades por volta de 9–12 meses.\n\nCaminha segurando nos móveis (C): por volta de 10–12 meses.\n\nPinça polegar-indicador (D): por volta de 9–10 meses.",
    "reference": "Sociedade Brasileira de Pediatria – Cartilha de Desenvolvimento Infantil; Ministério da Saúde – Caderneta da Criança",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "puericultura"
    ],
    "tip": "6 meses: troca de sons com o cuidador, senta com apoio."
  },
  {
    "id": "fmj2026-76",
    "module": "Pediatria",
    "text": "Criança do sexo feminino, 7 anos de idade em consulta de rotina, apresenta quadro de prurido nasal, congestão nasal, coriza hialina e espirros frequentes há cerca de 3 meses, ocorrendo em média cinco vezes por semana. A mãe refere roncos noturnos, sonolência diurna, queda no desempenho escolar e dificuldade na prática de esportes, além de intenso desconforto devido ao prurido e à obstrução nasal. Ao exame físico, observa‑se presença de pregas infrapalpebrais, prega transversa no dorso nasal e mucosa pálida e edemaciada.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a principal hipótese diagnóstica.",
    "options": [
      "rinite alérgica persistente leve",
      "rinite alérgica intermitente leve",
      "rinite alérgica intermitente moderada",
      "rinite alérgica intermitente grave",
      "rinite alérgica persistente grave"
    ],
    "correctAnswer": 4,
    "explanation": "Pela classificação ARIA, a rinite é persistente quando os sintomas ocorrem mais de 4 dias por semana e por mais de 4 semanas consecutivas (aqui, 5 dias por semana há 3 meses), e moderada a grave quando há comprometimento do sono, das atividades diárias, escolares ou esportivas ou sintomas incômodos. A criança tem roncos, sonolência, queda escolar e limitação esportiva: rinite alérgica persistente moderada a grave (grave, pela alternativa).",
    "commentary": "Persistente leve (A): na forma leve não há comprometimento do sono, da escola ou das atividades.\n\nIntermitente (B, C e D): seria com sintomas em 4 dias ou menos por semana, ou por menos de 4 semanas.",
    "reference": "ARIA – Allergic Rhinitis and its Impact on Asthma (2016, 2020); ASBAI – IV Consenso Brasileiro sobre Rinites (2017)",
    "tags": [
      "rinite alérgica",
      "classificação ARIA",
      "alergia",
      "pediatria ambulatorial"
    ],
    "tip": "ARIA: persistente se > 4 dias/semana e > 4 semanas; moderada/grave se afeta sono, escola ou lazer."
  },
  {
    "id": "fmj2026-77",
    "module": "Pediatria",
    "text": "Criança do sexo masculino, previamente hígida, 3 anos e 6 meses de idade, foi levada ao pronto‑socorro com quadro de febre há 5 dias, persistente e associada à irritabilidade. No segundo dia de febre, evoluiu com hiperemia conjuntival bilateral não exsudativa e exantema máculo‑papular difuso, inicialmente no tronco. No quarto dia de sintomas, o cuidador notou fissuras nos lábios e edema em mãos. Ao exame físico, observou‑se adenomegalia cervical. Considerando esse caso clínico hipotético, assinale a opção que apresenta a principal hipótese diagnóstica.",
    "options": [
      "poliarterite nodosa",
      "escarlatina",
      "doença de Behçet",
      "sarampo",
      "doença de Kawasaki"
    ],
    "correctAnswer": 4,
    "explanation": "Febre há 5 dias com conjuntivite bilateral não exsudativa, exantema polimorfo, fissuras labiais, edema de mãos e adenomegalia cervical: preenche os critérios da doença de Kawasaki clássica (febre ≥ 5 dias + 4 ou mais critérios). O tratamento é imunoglobulina IV (2 g/kg) e AAS, idealmente até o 10º dia de febre, para prevenir aneurismas coronarianos; o ecocardiograma é obrigatório.",
    "commentary": "Poliarterite nodosa (A): vasculite rara em crianças pequenas, com lesões cutâneas, neuropatia e hipertensão.\n\nEscarlatina (B): exantema micropapular áspero com faringite, sem conjuntivite e edema de extremidades.\n\nDoença de Behçet (C): úlceras orais e genitais recorrentes e uveíte.\n\nSarampo (D): febre com tosse, coriza, conjuntivite, Koplik e exantema craniocaudal, sem edema de extremidades e fissuras labiais.",
    "reference": "McCrindle BW et al. AHA Scientific Statement on Kawasaki Disease (2017)",
    "tags": [
      "doença de Kawasaki",
      "vasculites",
      "cardiologia pediátrica"
    ],
    "tip": "Kawasaki: febre ≥ 5 dias + conjuntivite, boca, exantema, extremidades, linfonodo → IGIV + AAS."
  },
  {
    "id": "fmj2026-78",
    "module": "Pediatria",
    "text": "Criança do sexo masculino, 1 ano e 9 meses de idade, foi levada ao pronto atendimento com ganho de peso acentuado no último mês e edema na face, nos pés e nas pernas há cerca de 10 dias. Foi internada para investigação diagnóstica. Exames laboratoriais: proteína urinária (amostra isolada): 6,4 g/l; creatinina urinária: 0,8 g/l; albumina sérica: 1,8 g/dl; triglicerídeos: 420 mg/dl.\n\nCom base nesse caso clínico e laboratorial hipotético, assinale a opção que apresenta o tratamento inicial de escolha e o padrão histológico renal provável.",
    "options": [
      "prednisona; lesões histológicas mínimas",
      "prednisona; glomeruloesclerose segmentar e focal",
      "prednisona; glomerulonefrite membranosa l",
      "ciclosporina; lesões histológicas mínimas",
      "ciclosporina; glomeruloesclerose segmentar e focal"
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 1 ano e 9 meses com edema, proteinúria maciça (relação proteína/creatinina urinária de 8 mg/mg, > 2), hipoalbuminemia e dislipidemia: síndrome nefrótica idiopática. Nessa idade, a lesão histológica mais provável é a doença de lesões mínimas, e o tratamento inicial é prednisona (60 mg/m²/dia ou 2 mg/kg/dia), sem necessidade de biópsia inicial, pois a maioria é corticossensível.",
    "commentary": "GESF (B e E): é a segunda causa, frequentemente corticorresistente; não é a mais provável.\n\nGlomerulonefrite membranosa (C): rara em crianças pequenas.\n\nCiclosporina como tratamento inicial (D e E): inibidores de calcineurina são para corticorresistência ou corticodependência.",
    "reference": "Sociedade Brasileira de Pediatria – Síndrome nefrótica idiopática; KDIGO 2021 Glomerular Diseases",
    "tags": [
      "síndrome nefrótica",
      "doença de lesões mínimas",
      "prednisona",
      "nefrologia pediátrica"
    ],
    "tip": "Síndrome nefrótica de 1 a 10 anos: lesões mínimas → prednisona sem biópsia."
  },
  {
    "id": "fmj2026-79",
    "module": "Pediatria",
    "text": "Uma criança do sexo feminino, com 1 ano e 2 meses de vida, acometida por anemia falciforme, foi levada ao pronto‑socorro por palidez súbita há 1 hora e letargia. Estava resfriada há 4 dias. Exame físico: descorada 3+/4+; hipoativa; FC 160 bpm; PA 68/30 mmHg; e esplenomegalia.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a hipótese diagnóstica e a conduta adequada.",
    "options": [
      "crise álgica; administração de morfina",
      "crise aplásica, transfusão de concentrado de hemácias",
      "crise aplásica, imunoglobulina",
      "sequestro esplênico, transfusão de concentrado de hemácias",
      "sequestro esplênico, morfina"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente falciforme com palidez súbita, letargia, taquicardia, hipotensão e esplenomegalia: crise de sequestro esplênico agudo, com sequestro de sangue no baço e choque hipovolêmico. A conduta é transfusão de concentrado de hemácias (em alíquotas, pela autotransfusão quando o baço libera o sangue) e suporte hemodinâmico.",
    "commentary": "Crise álgica com morfina (A): não explica palidez súbita, choque e esplenomegalia.\n\nCrise aplásica (B e C): queda da hemoglobina com reticulocitopenia (parvovírus B19), sem esplenomegalia aguda.\n\nSequestro com morfina (E): a dor não é o problema principal; a conduta é transfusão.",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas para tratamento (2012)",
    "tags": [
      "sequestro esplênico",
      "anemia falciforme",
      "choque",
      "hematologia pediátrica"
    ],
    "tip": "Falciforme + palidez súbita + baço grande + choque = sequestro → transfundir."
  },
  {
    "id": "fmj2026-80",
    "module": "Pediatria",
    "text": "Um lactente de 9 meses de vida foi levado ao pronto atendimento por manchas vermelhas pelo corpo há 12 horas. Pais referem febre por 4 dias (T máx. 39 °C), porém a criança mantinha bom estado geral e alimentava‑se bem. A febre cessou há 36 horas, e as lesões iniciaram‑se no tronco hoje. Exame físico: bom estado geral; exantema máculo‑papular difuso; e sem outras alterações.\n\nConsiderando o caso clínico hipotético apresentado, assinale a opção que apresenta a principal hipótese diagnóstica e a conduta adequada.",
    "options": [
      "sarampo; internação e administrar vitamina A",
      "escarlatina; alta e prescrever penicilina benzatina IM",
      "exantema súbito; alta e prescrever medicações sintomáticas se necessário",
      "eritema infeccioso; alta e prescrever medicações sintomáticas se necessário",
      "exantema por enterovírus; alta e prescrever dose única de prednisolona"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 9 meses com febre alta por 4 dias, bom estado geral, e exantema maculopapular que surge no tronco após o desaparecimento da febre: exantema súbito (roséola, herpesvírus humano 6/7). A conduta é alta com tratamento sintomático e orientação.",
    "commentary": "Sarampo com vitamina A (A): o exantema surge com a febre ainda presente, com tosse, coriza, conjuntivite e Koplik.\n\nEscarlatina com benzatina (B): exantema áspero com faringite, em crianças maiores.\n\nEritema infeccioso (D): face esbofeteada e exantema rendilhado, em escolares.\n\nEnterovírus com prednisolona (E): corticoide não tem indicação.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria (doenças exantemáticas)",
    "tags": [
      "exantema súbito",
      "roséola",
      "doenças exantemáticas",
      "infectologia pediátrica"
    ],
    "tip": "Febre alta some → exantema no tronco: exantema súbito."
  },
  {
    "id": "fmj2026-81",
    "module": "Saúde Coletiva",
    "text": "Um paciente de 58 anos de idade, autodeclarado branco, compareceu à unidade básica de saúde (UBS) preocupado com uma mancha escurecida que surgiu na região dorsal da mão direita.\n\nCom base nesse caso clínico hipotético, é correto afirmar que o Ministério da Saúde esclareceu que não existem critérios definidos para o rastreamento do câncer de pele, porém ele recomenda",
    "options": [
      "a utilização do teste ABCDE como principal ferramenta de detecção precoce",
      "o uso de filtro solar com a melhor estratégia de prevenção terciária",
      "o encaminhamento dos casos suspeitos para a oncodermatologia",
      "a utilização do exame clínico, da dermatoscopia e da biópsia incisional de lesões suspeitas",
      "a solicitação da pesquisa de marcadores tumorais, como a tirosina e o mel‑CAM"
    ],
    "correctAnswer": 3,
    "explanation": "O Ministério da Saúde/INCA não recomenda rastreamento populacional do câncer de pele, por falta de evidência de benefício, mas orienta a detecção precoce: avaliação de lesões suspeitas pelo exame clínico (incluindo a regra ABCDE), dermatoscopia e confirmação histológica por biópsia. Pelo gabarito, a alternativa D reúne essas ferramentas.",
    "commentary": "ABCDE como principal ferramenta de detecção (A): é útil para orientar o exame, mas não substitui a avaliação clínica com dermatoscopia e biópsia.\n\nFiltro solar como prevenção terciária (B): fotoproteção é prevenção primária.\n\nEncaminhar à oncodermatologia (C): a avaliação inicial pode ser feita na atenção primária e na dermatologia geral.\n\nMarcadores tumorais (E): não são usados para diagnóstico do câncer de pele.",
    "reference": "INCA – Câncer de pele: detecção precoce; Sociedade Brasileira de Dermatologia",
    "tags": [
      "câncer de pele",
      "melanoma",
      "detecção precoce",
      "dermatoscopia"
    ],
    "alert": "Para lesão pigmentada suspeita de melanoma, a biópsia preferencial é excisional (com margens estreitas); a incisional é reservada a lesões grandes ou de localização difícil.",
    "tip": "Câncer de pele: sem rastreamento populacional; detecção precoce com exame, dermatoscopia e biópsia."
  },
  {
    "id": "fmj2026-82",
    "module": "Saúde Coletiva",
    "text": "Um homem de 55 anos de idade era tabagista já há 40 anos. Durante a consulta, ele manifestou desejo em parar de fumar, porém não referiu tentativas anteriores. Nos últimos 10 anos, tem fumado 30 cigarros por dia. O homem afirmou que fuma o primeiro cigarro imediatamente após acordar. Ele referiu que fuma mais frequentemente pela manhã e que tinha dificuldade para deixar de fumar o primeiro cigarro matinal. Além disso, ele citou que não considerava difícil evitar fumar em locais proibidos e que, quando estava doente, não fumava.\n\nCom base nesse caso clínico hipotético e utilizando a escala de Fagerström, que avalia o grau de dependência química à nicotina, é correto afirmar que a pontuação e a classificação da dependência referente a esse paciente é",
    "options": [
      "7 pontos, dependência BAIXA",
      "7 pontos, dependência ELEVADA",
      "7 pontos, dependência MODERADA",
      "8 pontos, dependência ELEVADA",
      "9 pontos, dependência MUITO ELEVADA"
    ],
    "correctAnswer": 1,
    "explanation": "Teste de Fagerström: primeiro cigarro em até 5 minutos após acordar = 3; dificuldade de não fumar em locais proibidos (não) = 0; cigarro mais difícil de largar (o primeiro da manhã) = 1; 30 cigarros/dia (21–30) = 2; fuma mais pela manhã (sim) = 1; fuma mesmo doente (não) = 0. Total: 7 pontos — dependência elevada (6–7: elevada; 8–10: muito elevada; 5: média; 3–4: baixa; 0–2: muito baixa).",
    "commentary": "7 pontos com dependência baixa (A) ou moderada (C): 7 pontos correspondem a dependência elevada.\n\n8 pontos (D) e 9 pontos (E): a soma correta é 7.",
    "reference": "Ministério da Saúde/INCA – PCDT do Tabagismo (2020); Heatherton TF et al. The Fagerström Test for Nicotine Dependence (1991)",
    "tags": [
      "tabagismo",
      "teste de Fagerström",
      "dependência de nicotina",
      "atenção primária à saúde"
    ],
    "tip": "Fagerström: 6–7 elevada; 8–10 muito elevada."
  },
  {
    "id": "fmj2026-83",
    "module": "Saúde Coletiva",
    "text": "Um homem de 53 anos de idade era acometido por asma desde a infância e relata hipertensão há 10 anos. Na última prescrição, constavam os medicamentos anti‑hipertensivos de uso contínuo: hidroclorotiazida 25 mg uma vez por dia; losartana 50 mg duas vezes por dia; e anlodipina 2,5 mg uma vez por dia. A pressão arterial aferida por automonitoramento nos últimos três meses apresentava diversos valores acima de 140 x 90 mmHg, e, durante a consulta, a pressão arterial aferida foi de 155 x 95 mmHg. O médico orientou e repactuou a intensificação na mudança do estilo de vida e certificou‑se de que as medicações prescritas têm sido utilizadas adequadamente.\n\nCom base nesse caso clínico hipotético e em relação ao ajuste medicamentoso, a assinale a opção que apresenta a conduta adequada para o manejo da hipertensão.",
    "options": [
      "acrescentar espironolactona 25 mg uma vez por dia",
      "aumentar a dose da anlodipina para até 10 mg uma vez por dia",
      "acrescentar atenolol 50 mg duas vezes por dia",
      "acrescentar enalapril 20 mg uma vez por dia",
      "acrescentar metildopa 250 mg duas vezes por dia"
    ],
    "correctAnswer": 1,
    "explanation": "Hipertenso não controlado em uso de três fármacos (tiazídico, BRA em dose máxima e anlodipino em dose baixa), com adesão confirmada. Antes de considerar hipertensão resistente e acrescentar espironolactona, deve-se otimizar as doses do esquema atual: aumentar o anlodipino de 2,5 mg para até 10 mg/dia.",
    "commentary": "Espironolactona (A): é o quarto fármaco na hipertensão resistente, após otimizar as doses dos três primeiros.\n\nAtenolol (C): betabloqueador é contraindicado em asmático e não é primeira escolha.\n\nEnalapril (D): IECA associado a BRA (duplo bloqueio) é contraindicado.\n\nMetildopa (E): não é opção de rotina fora da gestação.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020/2025)",
    "tags": [
      "hipertensão arterial sistêmica",
      "otimização terapêutica",
      "anlodipino",
      "atenção primária à saúde"
    ],
    "tip": "HAS não controlada: otimizar doses antes de acrescentar o 4º fármaco."
  },
  {
    "id": "fmj2026-84",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 26 anos de idade, com 28 semanas de gestação, retornou à consulta de pré‑natal. O resultado do teste oral de tolerância à glicose, com 75 gramas de glicose anidra (TOTG), apresentou jejum: 82 mg/dl; 1h: 185 mg/dl; e 2h: 150 mg/dl.\n\nCom base nesse caso clínico hipotético, é correto afirmar que a paciente tem",
    "options": [
      "diagnóstico de diabetes gestacional, porém não há maior risco de diabetes mellitus tipo 2 após o parto",
      "diagnóstico de diabetes mellitus diagnosticado na gestação (overt diabetes). Logo, há um maior risco de macrossomia fetal",
      "diagnóstico de pré‑diabetes. Logo, é necessário solicitar o exame laboratorial de hemoglobina glicada",
      "diabetes gestacional. Logo, o feto apresenta maior risco de hiperbilirrubinemia no período neonatal",
      "diagnóstico de diabetes mellitus diagnosticado na gestação (overt diabetes). Logo, existe a necessidade de instituir tratamento com insulina"
    ],
    "correctAnswer": 3,
    "explanation": "TOTG com 75 g na 28ª semana: jejum 82 (normal), 1 hora 185 mg/dL (≥ 180, alterado) e 2 horas 150 (normal). Basta um valor alterado para o diagnóstico de diabetes mellitus gestacional. Entre as complicações neonatais estão macrossomia, hipoglicemia, desconforto respiratório, policitemia e hiperbilirrubinemia.",
    "commentary": "DMG sem maior risco de DM2 (A): mulheres com DMG têm risco aumentado de DM2 no futuro e devem ser reavaliadas no pós-parto.\n\nDiabetes prévio/overt (B e E): exigiria jejum ≥ 126, 2 horas ≥ 200 ou HbA1c ≥ 6,5%.\n\nPré-diabetes (C): não é diagnóstico usado na gestação com TOTG alterado.",
    "reference": "OPAS/Ministério da Saúde/Febrasgo/SBD – Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2016)",
    "tags": [
      "diabetes mellitus gestacional",
      "TOTG",
      "complicações neonatais",
      "pré-natal"
    ],
    "tip": "TOTG 75 g: 92 / 180 / 153 — um valor basta para DMG."
  },
  {
    "id": "fmj2026-85",
    "module": "Saúde Coletiva",
    "text": "Uma mulher de 77 anos de idade, acometida por diabetes mellitus tipo 2 há 8 anos, buscou atendimento na unidade básica de saúde (UBS) por demanda espontânea referindo tosse há 2 meses e perda ponderal não intencional de 7 kg.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada para a situação.",
    "options": [
      "avaliação médica imediata para a solicitação de radiografia de tórax e prescrição de três dias de azitromicina 500 mg",
      "referenciar para a especialidade pneumologia",
      "agendamento de consulta médica na UBS para investigação da perda de peso não intencional",
      "avaliação médica imediata para solicitação de broncoscopia e exame de escarro tipo baciloscopia",
      "avaliação médica imediata para solicitação de exame de escarro tipo teste rápido molecular – PCR"
    ],
    "correctAnswer": 4,
    "explanation": "Tosse por mais de 3 semanas com emagrecimento em pessoa com diabetes (grupo com maior risco de tuberculose): sintomática respiratória com forte suspeita de TB. A conduta é avaliação imediata e coleta de escarro para teste rápido molecular (TRM-TB, GeneXpert), exame de escolha para o diagnóstico na rede pública, que também detecta resistência à rifampicina; associam-se cultura e radiografia de tórax.",
    "commentary": "Radiografia e azitromicina (A): antibiótico empírico mascararia o quadro e não trata TB.\n\nEncaminhar ao pneumologista (B): o diagnóstico de TB é feito na atenção primária.\n\nAgendar consulta futura (C): sintomático respiratório deve ser avaliado de imediato, pelo risco de transmissão.\n\nBroncoscopia e baciloscopia (D): a broncoscopia não é exame inicial; o TRM é preferível à baciloscopia onde disponível.",
    "reference": "Ministério da Saúde – Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2024)",
    "tags": [
      "tuberculose",
      "teste rápido molecular",
      "diabetes mellitus",
      "atenção primária à saúde"
    ],
    "tip": "Tosse ≥ 3 semanas: escarro para TRM-TB no mesmo dia."
  },
  {
    "id": "fmj2026-86",
    "module": "Saúde Coletiva",
    "text": "Uma mulher de 29 anos de idade migrou da Bolívia para o Brasil há três anos. A jornada de trabalho era de 10 horas por dia, em um local fechado, com uma folga semanal.\n\nRecentemente, uma colega do trabalho iniciou tratamento para tuberculose pulmonar e, para isso, procurou atendimento na unidade básica de saúde, porque estava preocupada com uma possibilidade de contrair a doença. Ela apresentava bom quadro de saúde, não relatou doenças crônicas e, no momento, estava assintomática, sem tosse e com peso estável.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada para a situação.",
    "options": [
      "realizar exame clínico, solicitar prova tuberculínica ou IGRA e radiografia de tórax PA e perfil",
      "tranquilizar a paciente, pois o risco de contrair tuberculose é baixo, uma vez que o contato não é domiciliar",
      "solicitar radiografia de tórax e indicar vacinação com BCG, uma vez que, na Bolívia, essa vacina não é rotineira",
      "orientar retorno imediato, caso ocorra o surgimento de sintomas da tuberculose ativa (tosse, febre e perda de peso)",
      "iniciar quimioprofilaxia, pois o risco de contrair tuberculose é elevado"
    ],
    "correctAnswer": 0,
    "explanation": "Contato de caso de tuberculose pulmonar (convívio prolongado em ambiente fechado de trabalho), assintomática: deve ser avaliada como contato — exame clínico para afastar TB ativa e investigação de infecção latente com prova tuberculínica ou IGRA, além de radiografia de tórax. Se a prova for positiva e a TB ativa for excluída, trata-se a infecção latente.",
    "commentary": "Tranquilizar por não ser contato domiciliar (B): contatos de trabalho com convívio prolongado em ambiente fechado também devem ser avaliados.\n\nVacinar com BCG (C): a BCG não é indicada para adultos.\n\nApenas orientar retorno com sintomas (D): a avaliação do contato é ativa.\n\nIniciar quimioprofilaxia sem investigar (E): é preciso excluir TB ativa e confirmar a infecção latente.",
    "reference": "Ministério da Saúde – Manual de Recomendações para o Controle da Tuberculose no Brasil (2024)",
    "tags": [
      "tuberculose",
      "avaliação de contatos",
      "infecção latente",
      "prova tuberculínica"
    ],
    "tip": "Contato de TB: excluir doença ativa e testar infecção latente (PT/IGRA + radiografia)."
  },
  {
    "id": "fmj2026-87",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 25 anos de idade iniciou acompanhamento pré‑natal na unidade básica de saúde. O teste rápido para sífilis na abertura do acompanhamento pré‑natal foi reagente. Ela não relatou história pregressa de sífilis e não se recordava de úlceras genitais ou de lesões cutâneas nos últimos 12 meses. Ela referiu que o seu companheiro atual e pai da criança recebeu tratamento para IST há 6 meses, com penicilina benzatina.\n\nCom base nesse caso clínico hipotético, e de acordo com o protocolo de ISTs do Ministério da Saúde (2023), assinale a opção que apresenta a conduta adequada para esse caso, além de testar o parceiro.",
    "options": [
      "prescrever penicilina benzatina 1,2 milhão UI, três doses, com intervalo de 7 dias, e acompanhar o VDRL mensalmente",
      "prescrever penicilina benzatina 2,4 milhões UI, três doses, com intervalo de 7 dias, e solicitar VDRL pós‑parto",
      "prescrever penicilina benzatina 2,4 milhões UI, duas doses, com intervalo de 7 dias, e solicitar VDRL pós‑parto",
      "prescrever penicilina benzatina 1,2 milhão UI, dose única, e solicitar VDRL pós‑parto",
      "prescrever penicilina benzatina 2,4 milhões UI, dose única, solicitar e acompanhar o VDRL mensalmente"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com teste rápido para sífilis reagente, sem tratamento prévio e sem saber o tempo de infecção: trata-se como sífilis latente tardia ou de duração ignorada, com penicilina benzatina 2,4 milhões UI IM por semana, por 3 semanas (total 7,2 milhões UI), iniciado imediatamente após o teste rápido (com coleta de VDRL para seguimento). O parceiro tratado há 6 meses deve ser retestado e, se necessário, tratado de novo.",
    "commentary": "1,2 milhão UI em três doses (A): a dose de cada aplicação é 2,4 milhões UI.\n\nDuas doses (C): o esquema para latente tardia é de três doses.\n\n1,2 milhão em dose única (D) e 2,4 milhões em dose única (E): dose única é para sífilis recente (primária, secundária, latente recente), não para duração ignorada.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022/2023)",
    "tags": [
      "sífilis na gestação",
      "penicilina benzatina",
      "pré-natal",
      "infecções sexualmente transmissíveis"
    ],
    "alert": "Na gestante, o PCDT recomenda VDRL mensal para seguimento após o tratamento, além do teste no parto. A alternativa B é a que traz o esquema correto de penicilina.",
    "tip": "Sífilis de duração ignorada na gestante: benzatina 2,4 milhões × 3 semanas + VDRL mensal."
  },
  {
    "id": "fmj2026-88",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família (eSF) identificou o caso de uma menina de 3 anos de idade com suspeita de maus‑tratos. Seguindo as normativas vigentes, o caso foi notificado ao Sistema de Vigilância Epidemiológica. Foi realizada uma investigação ampliada, envolvendo uma abordagem intersetorial com a cooperação da assistência social, do conselho tutelar e da escola da criança. O resultado da investigação não confirmou a situação de negligência ou violência por parte da família nos cuidados prestados à criança, e a suspeita inicial foi descartada. Apesar disso, identificou‑se a necessidade de suporte psicossocial. Assim, a criança e os seus pais passaram a receber assistência psicológica e continuaram em seguimento longitudinal coordenado pela equipe da UBS.\n\nConsiderando essa situação hipotética, bem como a complexidade do caso e a abordagem multiprofissional e intersetorial implementada para o acompanhamento contínuo dessa família na atenção primária, é recomendado que a equipe proceda à confecção de",
    "options": [
      "ficha de notificação compulsória de violência interpessoal/autoprovocada",
      "heredograma e avaliação do ciclo de vida familiar",
      "Plano Operativo Anual (POA) da UBS",
      "Projeto Terapêutico Singular (PTS)",
      "protocolo clínico e diretrizes terapêuticas (PCDT) para a abordagem da violência"
    ],
    "correctAnswer": 3,
    "explanation": "O Projeto Terapêutico Singular (PTS) é um conjunto de condutas terapêuticas articuladas, construído pela equipe multiprofissional (e intersetorial) com o usuário e a família, para casos complexos que exigem acompanhamento longitudinal. Etapas: diagnóstico situacional, definição de metas, divisão de responsabilidades (com profissional de referência) e reavaliação.",
    "commentary": "Ficha de notificação de violência (A): já foi feita na suspeita; a pergunta é sobre o acompanhamento.\n\nHeredograma e ciclo de vida (B): são ferramentas de abordagem familiar, não o plano de cuidado.\n\nPlano Operativo Anual (C): instrumento de gestão da unidade, não de cuidado individual.\n\nPCDT (E): é documento nacional de diretrizes, não elaborado para um caso.",
    "reference": "Ministério da Saúde – Clínica ampliada, equipe de referência e projeto terapêutico singular (2007)",
    "tags": [
      "projeto terapêutico singular",
      "violência contra criança",
      "atenção primária à saúde",
      "intersetorialidade"
    ],
    "tip": "Caso complexo com várias equipes: PTS."
  },
  {
    "id": "fmj2026-89",
    "module": "Saúde Coletiva",
    "text": "Um médico que atua na Estratégia Saúde da Família estava organizando o seu atendimento na unidade básica de saúde. Durante uma reunião de equipe, surgiu uma discussão sobre os princípios doutrinários do Sistema Único de Saúde (SUS) estabelecidos pela Lei Federal nº 8.080/1990. O médico, então, precisou esclarecer à equipe qual era o princípio que garantia que todos os cidadãos brasileiros tenham direito ao acesso aos serviços de saúde, independentemente de sua condição socioeconômica, raça, religião ou qualquer outra característica.\n\nCom base nessa situação hipotética, é correto afirmar que o princípio apresentado é o da",
    "options": [
      "universalidade",
      "integralidade",
      "equidade",
      "participação social",
      "descentralização"
    ],
    "correctAnswer": 0,
    "explanation": "O princípio da universalidade garante a todos os cidadãos o acesso às ações e serviços de saúde, em todos os níveis de assistência, sem qualquer discriminação ou privilégio (Lei 8.080/1990, art. 7º, I; Constituição, art. 196).",
    "commentary": "Integralidade (B): é a oferta do conjunto de ações preventivas e curativas, individuais e coletivas, em todos os níveis.\n\nEquidade (C): é tratar de forma diferente conforme a necessidade, reduzindo desigualdades.\n\nParticipação social (D) e descentralização (E): são princípios organizativos (diretrizes), não o acesso de todos.",
    "reference": "Lei nº 8.080/1990, art. 7º; Constituição Federal de 1988, art. 196",
    "tags": [
      "princípios do SUS",
      "universalidade",
      "lei 8.080/1990"
    ],
    "tip": "Universalidade: acesso para todos, sem discriminação."
  },
  {
    "id": "fmj2026-90",
    "module": "Ginecologia e Obstetrícia",
    "text": "Novas infecções vêm fazendo parte, de forma endêmica ou epidêmica, do dia a dia das gestantes e das puérperas, dentre elas, a covid‑19. Com relação às gestantes e às puérperas, segundo dados de 2023 do boletim do Observatório Obstétrico Brasileiro covid‑19 (OOBr covid‑19), no Brasil já houve 25.163 casos de síndrome respiratória aguda grave (SRAG)\n\nconfirmados por covid‑19 e 2.000 óbitos. Houve redução de 462 óbitos maternos em 2020 para 75 óbitos em 2022.\n\nCom base nessas informações, bem como em relação à covid‑19 e à gestação, assinale a opção correta.",
    "options": [
      "Os principais sintomas da covid‑19 na gestação são tosse produtiva e dor abdominal",
      "A vacina AstraZeneca/Fiocruz é atualmente recomendada para as gestantes",
      "As vacinas de vírus inativado, ou com mRNA, podem ser administradas a qualquer momento na gravidez",
      "As gestantes no primeiro trimestre têm maior risco de desenvolver doença grave, em relação ao terceiro trimestre",
      "As comorbidades pré‑gestação não aumentam o risco para hospitalização"
    ],
    "correctAnswer": 2,
    "explanation": "As vacinas covid-19 de vírus inativado ou de RNA mensageiro podem ser aplicadas em qualquer momento da gestação e no puerpério; as gestantes são grupo prioritário, pelo maior risco de formas graves, parto prematuro e morte materna. Gestantes no terceiro trimestre e com comorbidades têm maior risco de doença grave.",
    "commentary": "Tosse produtiva e dor abdominal como principais sintomas (A): os sintomas são semelhantes aos da população geral (febre, tosse seca, mialgia).\n\nAstraZeneca recomendada para gestantes (B): a vacina de vetor viral foi contraindicada em gestantes no Brasil após evento trombótico em 2021.\n\nMaior risco no primeiro trimestre (D): o risco de doença grave é maior no terceiro trimestre.\n\nComorbidades não aumentam o risco (E): obesidade, diabetes e hipertensão aumentam o risco de hospitalização.",
    "reference": "Ministério da Saúde – Manual de Recomendações para a Assistência à Gestante e Puérpera frente à Covid-19 (2021); Observatório Obstétrico Brasileiro",
    "tags": [
      "covid-19",
      "vacinação na gestação",
      "gestação de alto risco"
    ],
    "tip": "Covid na gestação: vacina de mRNA ou inativada em qualquer fase; maior risco no 3º trimestre."
  },
  {
    "id": "fmj2026-91",
    "module": "Saúde Coletiva",
    "text": "Na abordagem clínica ampliada, a anamnese transcende o levantamento de dados objetivos, exigindo do profissional médico uma escuta qualificada e interpretativa que articule a narrativa do paciente aos fundamentos biopsicossociais do processo de adoecimento.\n\nCom base nessa informação e nas diretrizes da medicina centrada na pessoa e nos princípios da clínica ampliada, assinale a opção que apresenta a concepção contemporânea de entrevista clínica.",
    "options": [
      "A estruturação da anamnese deve restringir‑se aos elementos técnicos objetivos, evitando a interferência de conteúdos subjetivos que possam obscurecer o raciocínio diagnóstico",
      "O método clínico exige padronização da coleta de dados, priorizando a fidedignidade estatística das informações colhidas sobre a experiência do paciente",
      "A elaboração da hipótese clínica deve orientar‑se exclusivamente pelos protocolos fundamentados em evidências, minimizando o tempo dedicado a informações que não se enquadrem nos algoritmos diagnósticos",
      "O processo anamnésico deve priorizar os critérios classificatórios das nosologias oficiais (DSM, CID), como forma de garantir uniformidade e segurança técnico‑jurídica na prática assistencial",
      "A escuta clínica deve considerar a singularidade biográfica do paciente, incorporando as suas dimensões subjetivas, sociais e simbólicas na formulação diagnóstica e no plano terapêutico"
    ],
    "correctAnswer": 4,
    "explanation": "A concepção contemporânea da entrevista clínica, baseada na medicina centrada na pessoa e na clínica ampliada, valoriza a singularidade biográfica do paciente e integra as dimensões subjetivas, sociais e simbólicas do adoecimento ao raciocínio diagnóstico e ao plano terapêutico, construído em parceria.",
    "commentary": "Restringir-se a elementos objetivos (A), padronização priorizando a estatística (B), seguir exclusivamente protocolos (C) e priorizar classificações nosológicas (D): todas reduzem a pessoa à doença, contrariando a abordagem centrada na pessoa e a clínica ampliada.",
    "reference": "Stewart M et al. Medicina centrada na pessoa, 3ª ed.; Ministério da Saúde – Clínica ampliada e compartilhada (2009)",
    "tags": [
      "medicina centrada na pessoa",
      "clínica ampliada",
      "entrevista clínica",
      "medicina de família e comunidade"
    ],
    "tip": "Clínica ampliada: a doença e a pessoa, com seu contexto."
  },
  {
    "id": "fmj2026-92",
    "module": "Saúde Coletiva",
    "text": "Um médico atendeu uma paciente de 45 anos de idade com diabete mellitus tipo 2 descompensada que relatou dificuldade em aderir ao plano terapêutico prescrito. Durante a consulta, a paciente mencionou sentir‑se sobrecarregada com as responsabilidades familiares e acreditava que o tratamento não lhe estava ajudando. O médico decidiu adotar o método clínico centrado na pessoa (MCCP).\n\nCom base nesse caso clínico hipotético e no método referido, assinale a opção que apresenta a abordagem correta para esse caso.",
    "options": [
      "O médico deve enfatizar a necessidade de aderir rigorosamente ao plano terapêutico atual, reforçando a importância de seguir as orientações médicas, para evitar complicações",
      "O médico deve explorar as preocupações, crenças e emoções da paciente sobre o tratamento e adaptar o plano terapêutico às suas necessidades e ao seu contexto de vida",
      "O foco principal deve ser a doença, garantindo que a paciente compreenda os riscos do mau controle glicêmico e as complicações futuras",
      "A consulta deve ser direcionada exclusivamente à resolução dos problemas médicos, pois questões emocionais podem ser abordadas posteriormente por outro profissional",
      "A relação médico‑paciente deve ser fundamentada na autoridade do médico, que deve tomar decisões com base em evidências, mesmo que a paciente demonstre resistência"
    ],
    "correctAnswer": 1,
    "explanation": "No Método Clínico Centrado na Pessoa, o médico explora a doença e a experiência da doença (sentimentos, ideias, funcionalidade e expectativas), entende a pessoa como um todo (contexto familiar e social) e elabora um plano conjunto de manejo. Diante da sobrecarga familiar e da descrença no tratamento, deve explorar essas preocupações e adaptar o plano ao contexto de vida da paciente.",
    "commentary": "Reforçar adesão rigorosa ao plano atual (A), focar na doença e nas complicações (C), excluir questões emocionais (D) e impor a autoridade médica (E): ignoram a experiência e o contexto da paciente, centrais no MCCP.",
    "reference": "Stewart M et al. Medicina centrada na pessoa: transformando o método clínico, 3ª ed.",
    "tags": [
      "método clínico centrado na pessoa",
      "adesão terapêutica",
      "diabetes mellitus",
      "medicina de família e comunidade"
    ],
    "tip": "MCCP: explorar a experiência da doença e construir o plano junto."
  },
  {
    "id": "fmj2026-93",
    "module": "Saúde Coletiva",
    "text": "A Atenção Primária à Saúde (APS) é reconhecida como a base para a organização dos sistemas de saúde, sendo dotada de atributos específicos que a diferenciam dos outros níveis de atenção e que são essenciais para o seu bom desempenho. A compreensão desses atributos é fundamental para a prática do médico que atua nesse cenário.\n\nCom base nessa informação, assinale a opção que apresenta um dos atributos essenciais da APS.",
    "options": [
      "O acesso de primeiro contato significa que a unidade de APS funciona exclusivamente como um serviço de urgência e emergência, sendo a porta de entrada para todos os problemas agudos de saúde, sem a necessidade de agendamento prévio para qualquer tipo de queixa",
      "A integralidade do cuidado implica que a própria unidade de APS deve ser capaz de realizar todos os procedimentos diagnósticos e terapêuticos existentes no sistema de saúde, incluindo cirurgias de alta complexidade, a fim de se evitar o encaminhamento de pacientes",
      "A coordenação do cuidado determina que, uma vez que um paciente seja encaminhado para um especialista, a equipe da APS transfere totalmente a responsabilidade do caso, não mais participando de seu acompanhamento, até que o paciente receba alta do serviço especializado",
      "A longitudinalidade refere‑se à existência de uma fonte regular de atenção ao longo do tempo, independentemente da presença de problemas ou de doenças específicas, o que permite o estabelecimento de um vínculo de confiança e a responsabilização contínua pela saúde do indivíduo",
      "A competência cultural é a capacidade dos profissionais de ignorar o cuidado às particularidades culturais de cada indivíduo, de cada família e de cada comunidade"
    ],
    "correctAnswer": 3,
    "explanation": "A longitudinalidade, atributo essencial da APS segundo Starfield, é a existência de uma fonte regular de atenção, usada ao longo do tempo, independentemente da presença de doença, com vínculo de confiança e responsabilização contínua da equipe pela saúde da pessoa.",
    "commentary": "Primeiro contato como serviço de urgência exclusivo (A): o primeiro contato é a APS como porta de entrada preferencial para todas as necessidades, não um pronto-socorro.\n\nIntegralidade fazendo todos os procedimentos, até alta complexidade (B): a integralidade inclui reconhecer necessidades e garantir acesso a outros níveis.\n\nCoordenação transferindo a responsabilidade ao especialista (C): a APS continua coordenando o cuidado durante o encaminhamento.\n\nCompetência cultural como ignorar particularidades (E): é exatamente o contrário — reconhecer e respeitar as particularidades culturais.",
    "reference": "Starfield B. Atenção Primária (UNESCO/MS, 2002)",
    "tags": [
      "atributos da atenção primária",
      "longitudinalidade",
      "atenção primária à saúde"
    ],
    "tip": "Longitudinalidade: fonte regular de cuidado ao longo do tempo, com vínculo."
  },
  {
    "id": "fmj2026-94",
    "module": "Saúde Coletiva",
    "text": "Um paciente de 72 anos de idade compareceu à UBS apresentando dispneia para tomar banho e fazer a barba, limitação para atividades diárias e agravamento do padrão de tosse produtiva, com mudança da coloração do escarro. Durante a consulta, o médico observou múltiplas contusões em diferentes estágios de cicatrização nos membros superiores e abrasões no dorso. Após estabelecer vínculo de confiança, o idoso revelou que o seu filho, com quem reside, tem consumido álcool excessivamente e se tornado agressivo, especialmente quando o pai tosse durante a noite. O paciente referiu histórico de tabagismo (50 maços/ano), duas internações por exacerbação de DPOC no último ano e que o filho frequentemente se apropriava de sua aposentadoria e não permitia que o pai adquirisse as suas medicações regularmente.\n\nConsiderando esse caso clínico hipotético, que envolve manejo clínico da DPOC e situação de vulnerabilidade por violência, assinale a opção que apresenta a conduta adequada.",
    "options": [
      "tratar a exacerbação da DPOC com antibioticoterapia oral, utilizar terapia tripla inalatória e reforçar a indicação de cessar o tabagismo. O caso de violência deve ser notificado, acionar a rede de proteção social e articular com CAPS AD para abordagem do filho dependente químico",
      "prescrever corticoide oral e antibiótico para a exacerbação da DPOC, orientar o paciente a procurar ajuda de outros familiares e retornar em 30 dias para reavaliação clínica, evitando interferir na dinâmica familiar para não piorar a situação de violência",
      "encaminhar o paciente ao pneumologista para a avaliação especializada da DPOC, sugerindo que ele considere mudar‑se para uma instituição de longa permanência para idosos como solução definitiva para o problema de violência",
      "internar o paciente imediatamente para tratar a exacerbação da DPOC e afastá‑lo temporariamente da situação de violência, sem realizar a notificação para que se preserve o vínculo terapêutico com a família",
      "tratar a DPOC com broncodilatadores de curta ação, orientando o idoso sobre a importância da cessação tabágica, e sugerir que tente dialogar com o filho sobre a situação de violência antes de qualquer intervenção externa"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso com exacerbação de DPOC (piora da dispneia e escarro purulento, com duas internações no último ano) e sinais de violência física, financeira e por negligência por parte do filho. A conduta integra: tratar a exacerbação (antibiótico pelo escarro purulento, corticoide, broncodilatador) e otimizar a manutenção (terapia tripla pelo perfil de exacerbador com dispneia), reforçar a cessação do tabagismo; notificar a violência contra a pessoa idosa (notificação compulsória), acionar a rede de proteção (assistência social, conselho do idoso, Ministério Público) e articular com o CAPS AD o cuidado do filho dependente de álcool.",
    "commentary": "Não interferir na dinâmica familiar (B): a violência contra o idoso deve ser notificada e enfrentada com a rede de proteção.\n\nSugerir institucionalização como solução (C): não resolve a violência e desconsidera a autonomia do idoso.\n\nInternar sem notificar (D): a notificação é obrigatória (Estatuto da Pessoa Idosa).\n\nSó broncodilatador de curta ação e sugerir diálogo (E): subtrata a DPOC e expõe o idoso a mais violência.",
    "reference": "Lei nº 10.741/2003 (Estatuto da Pessoa Idosa); GOLD 2025; Ministério da Saúde – Notificação de violências",
    "tags": [
      "violência contra a pessoa idosa",
      "DPOC",
      "notificação compulsória",
      "rede de proteção",
      "atenção primária à saúde"
    ],
    "tip": "Violência contra idoso: notificar e acionar a rede, além de tratar a doença."
  },
  {
    "id": "fmj2026-95",
    "module": "Clínica Médica",
    "text": "Um homem de 75 anos de idade apresentou dificuldade de concentração e atenção, lentidão cognitiva e episódios de confusão que têm ocorrido de forma episódica nos últimos dois anos. Não houve relato de heteroagressividade. Ele tinha histórico de hipertensão e dislipidemia não controladas. A ressonância nuclear magnética (FLAIR) revelou lacunas subcorticais e hiperintensidades de substância branca periventriculares. A avaliação clínica descartou sinais de doença de Parkinson ou alucinações visuais.\n\nCom base nesse caso clínico hipotético, é correto afirmar que o diagnóstico provável e a abordagem inicial adequada de manejo são, respectivamente,",
    "options": [
      "demência de corpos de Lewy; e iniciar donepezila",
      "demência vascular; e otimizar o controle da pressão arterial e tratar dislipidemia",
      "doença de Alzheimer; e iniciar terapia com inibidor de fosfodiesterase",
      "demência frontotemporal; e iniciar quetiapina",
      "demência senil; e iniciar anticoagulação para prevenir novos eventos vasculares"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com hipertensão e dislipidemia não controladas, declínio cognitivo com lentidão de processamento, déficit de atenção e evolução flutuante/em degraus, e RM com lacunas subcorticais e hiperintensidades de substância branca: demência vascular (doença de pequenos vasos). A abordagem inicial é controlar os fatores de risco vascular — pressão arterial, dislipidemia (estatina), diabetes, tabagismo — e usar antiagregante se houver indicação; inibidores de colinesterase têm benefício modesto.",
    "commentary": "Corpos de Lewy (A): teria parkinsonismo, alucinações visuais e flutuação acentuada — descartados.\n\nAlzheimer com inibidor de fosfodiesterase (C): o Alzheimer começa com perda de memória episódica, e inibidores de fosfodiesterase não são tratamento.\n\nFrontotemporal com quetiapina (D): predominam alterações de comportamento ou linguagem em pessoas mais jovens.\n\nDemência senil com anticoagulação (E): termo em desuso, e anticoagulação não previne doença de pequenos vasos.",
    "reference": "Academia Brasileira de Neurologia – Recomendações em demência vascular (2022); AHA/ASA Scientific Statement on vascular cognitive impairment (2011)",
    "tags": [
      "demência vascular",
      "comprometimento cognitivo",
      "fatores de risco vascular",
      "neurologia"
    ],
    "tip": "Demência + lacunas e leucoaraiose na RM + fatores de risco: vascular → controlar fatores de risco."
  },
  {
    "id": "fmj2026-96",
    "module": "Saúde Coletiva",
    "text": "O SARS‑CoV‑2 faz parte de uma família de vírus que causam infecções respiratórias, e o novo agente do coronavírus que provoca a doença é chamado de covid‑19. Considerando essa informação, é correto afirmar que o tratamento recomendado para os casos leves deve considerar acompanhamento ambulatorial, monitoramento de sintomas e",
    "options": [
      "repouso, hidratação e uso de medicamentos sintomáticos",
      "anticoagulação profilática com enoxaparina 40 mg/dia",
      "azitromicina 500 mg/dia durante três dias",
      "ivermectina 6 mg/dia durante dez dias",
      "dexametasona 6 mg/dia endovenosa durante dez dias"
    ],
    "correctAnswer": 0,
    "explanation": "Na covid-19 leve, o tratamento é ambulatorial e sintomático: repouso, hidratação, antitérmicos/analgésicos e monitorização de sinais de alarme (dispneia, saturação ≤ 94%). Antivirais (nirmatrelvir/ritonavir) são reservados a pacientes de alto risco nos primeiros dias.",
    "commentary": "Enoxaparina profilática (B): não indicada em casos leves ambulatoriais.\n\nAzitromicina (C): sem benefício na covid-19 e favorece resistência.\n\nIvermectina (D): ineficaz em ensaios clínicos.\n\nDexametasona (E): indicada apenas em pacientes hospitalizados com necessidade de oxigênio; em casos leves pode piorar.",
    "reference": "Ministério da Saúde – Diretrizes para o tratamento farmacológico da covid-19 (2022); NIH COVID-19 Treatment Guidelines",
    "tags": [
      "covid-19",
      "tratamento ambulatorial",
      "infectologia"
    ],
    "tip": "Covid leve: sintomáticos e sinais de alarme; dexametasona só se precisar de O₂."
  },
  {
    "id": "fmj2026-97",
    "module": "Clínica Médica",
    "text": "Um paciente de 68 anos de idade, motorista aposentado, relatou que fica acometido por tosse seca matinal e dispneia progressiva atualmente, quando caminha no plano. Era tabagista de 45 maços‑ano. O paciente negou internação hospitalar e exacerbação respiratória nos últimos 12 meses. Ele realizou espirometria com o seguinte resultado: capacidade vital forçada (CVF) com 78% do previsto; volume expiratório forçado no primeiro segundo pós‑BD (VEF1): 48%; relação VEF1/CVF pós‑BD: 64% do previsto; e resposta negativa ao broncodilatador.\n\nA partir desse caso clínico hipotético, assinale a opção que apresenta a classificação do DPOC e a conduta terapêutica adequada, conforme as recomendações GOLD 2025.",
    "options": [
      "GOLD 2 E. Uso inalatório contínuo: umeclidínio + vilanterol + fluticasona",
      "GOLD 2 B. Uso inalatório contínuo: umeclidínio + vilanterol",
      "GOLD 2 E. Uso inalatório contínuo: tiotrópio + olodaterol",
      "GOLD 2 B. Uso inalatório contínuo: formoterol + budesonida",
      "GOLD 2 B. Uso inalatório contínuo: glicopirrônio + formoterol + budesonida"
    ],
    "correctAnswer": 1,
    "explanation": "Espirometria com VEF1/CVF pós-broncodilatador < 0,70 confirma DPOC. O VEF1 de 48% do previsto corresponde, pela GOLD, a obstrução grave (GOLD 3: 30–49%); as alternativas, porém, trazem GOLD 2. Pelos sintomas (dispneia ao caminhar no plano, mMRC ≥ 2) e sem exacerbações no último ano, o paciente é do grupo B, cujo tratamento inicial recomendado pela GOLD 2025 é a associação de dois broncodilatadores de longa ação (LAMA + LABA, como umeclidínio + vilanterol).",
    "commentary": "Terapia tripla no grupo E (A): grupo E exige exacerbações; e a tripla com corticoide inalatório é para exacerbadores com eosinófilos ≥ 300.\n\nTiotrópio + olodaterol no grupo E (C): a combinação LAMA + LABA está certa, mas o paciente não é grupo E.\n\nFormoterol + budesonida (D): LABA + corticoide inalatório não é recomendado na DPOC sem indicação de corticoide.\n\nTerapia tripla no grupo B (E): o grupo B não tem indicação de corticoide inalatório.",
    "reference": "GOLD 2025 Report",
    "tags": [
      "DPOC",
      "classificação GOLD",
      "broncodilatadores de longa ação",
      "pneumologia"
    ],
    "alert": "Pela espirometria (VEF1 48%), a classificação espirométrica correta seria GOLD 3, não GOLD 2. Como todas as alternativas trazem GOLD 2, a B é a melhor resposta (grupo B e LAMA + LABA corretos).",
    "tip": "GOLD 2025: grupo B → LAMA + LABA; corticoide inalatório só em exacerbadores com eosinófilos altos."
  },
  {
    "id": "fmj2026-98",
    "module": "Saúde Coletiva",
    "text": "O câncer de mama é o tipo de neoplasia maligna que mais acomete as mulheres no Brasil.\n\nForam estimados 73.610 casos novos de câncer de mama em 2024 no território brasileiro.\n\nCom base nessa informação, é correto afirmar que, quanto ao rastreamento e à detecção precoce do câncer de mama, recentemente o Ministério da Saúde do Brasil passou a recomendar",
    "options": [
      "rastreamento com mamografia em mulheres a partir de 40 anos de idade, sob demanda e em decisão conjunta com o profissional de saúde",
      "rastreamento com ultrassonografia em mulheres a partir dos 50 anos de idade",
      "autoexame das mamas para mulheres a partir dos 40 anos de idade e mamografia a partir dos 50 anos de idade",
      "rastreamento com mamografia em mulheres a partir de 55 anos de idade",
      "rastreamento com mamografia em mulheres a partir de 45 anos de idade"
    ],
    "correctAnswer": 4,
    "explanation": "Pelo gabarito oficial, a resposta é E (mamografia a partir dos 45 anos).\n\nAtenção: a recomendação do Ministério da Saúde divulgada em 2025 ampliou o acesso à mamografia para mulheres de 40 a 49 anos sob demanda, após decisão compartilhada com o profissional, mantendo o rastreamento organizado bienal dos 50 aos 74 anos — o que corresponde à alternativa A.",
    "commentary": "A partir de 40 anos, sob demanda e em decisão conjunta (A): corresponde à recomendação divulgada pelo Ministério da Saúde em 2025, por isso é aceita aqui.\n\nUltrassonografia a partir dos 50 (B): o ultrassom não é método de rastreamento.\n\nAutoexame a partir dos 40 (C): o autoexame não é recomendado como estratégia de rastreamento.\n\nA partir de 55 anos (D): não corresponde a nenhuma recomendação vigente.",
    "reference": "Ministério da Saúde – Nota técnica sobre rastreamento do câncer de mama (2025); INCA – Diretrizes para a detecção precoce do câncer de mama",
    "tags": [
      "câncer de mama",
      "rastreamento",
      "mamografia",
      "saúde da mulher"
    ],
    "alert": "Gabarito discutível: a nova orientação do Ministério da Saúde (2025) é mamografia de 40 a 49 anos sob demanda, com decisão compartilhada (alternativa A), e bienal de 50 a 74 anos. Mantido o gabarito oficial (E); A também é aceita aqui.",
    "alsoAccepted": [
      0
    ],
    "tip": "MS 2025: 40–49 anos sob demanda; 50–74 anos bienal."
  },
  {
    "id": "fmj2026-99",
    "module": "Saúde Coletiva",
    "text": "Um homem de 45 anos de idade, diabético tipo 2, auxiliar de enfermagem, realizou teste tuberculínico (PPD), cujo resultado foi 7mm. A radiografia de tórax resultou normal, e ele não referiu tosse, febre ou perda ponderal não intencional.\n\nCom base nesse caso clínico hipotético e de acordo com as orientações do Manual de Recomendações para o Controle da Tuberculose no Brasil, a conduta terapêutica adequada para esse paciente é",
    "options": [
      "prescrever rifampicina, isoniazida, pirazinamida e etambutol (60 doses), seguida de rifampicina e isoniazida (120 doses)",
      "observar o surgimento de sintomas como tosse, e solicitar baciloscopia de escarro",
      "prescrever pirazinamida dose diária (120 doses), a ser aplicada por um período entre 4 e 6 meses",
      "prescrever isoniazida e rifapentina dose semanal (12 doses), em até 15 semanas",
      "prescrever rifampicina dose diária (60 doses) entre 2 a 3 meses"
    ],
    "correctAnswer": 3,
    "explanation": "Profissional de saúde diabético, assintomático, com radiografia normal e prova tuberculínica de 7 mm. Pelo gabarito, há indicação de tratamento da infecção latente pela tuberculose, e o esquema preferencial no Manual de 2024 é a combinação de isoniazida e rifapentina semanal (3HP: 12 doses, em até 15 semanas), que tem melhor adesão que a isoniazida isolada por 6–9 meses.",
    "commentary": "Esquema RIPE (A): é tratamento da TB ativa, excluída pela ausência de sintomas e radiografia normal.\n\nApenas observar sintomas (B): o gabarito considera indicação de tratar a infecção latente.\n\nPirazinamida isolada (C): não é esquema de infecção latente.\n\nRifampicina por 2 meses (E): o esquema com rifampicina para ILTB é de 4 meses (4R, 120 doses).",
    "reference": "Ministério da Saúde – Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2024)",
    "tags": [
      "infecção latente pela tuberculose",
      "3HP",
      "prova tuberculínica",
      "tuberculose"
    ],
    "alert": "Os pontos de corte da prova tuberculínica para tratar a infecção latente variam por grupo (≥ 5 mm em contatos e imunossuprimidos; ≥ 10 mm em outros grupos, como diabéticos e profissionais de saúde sem contato conhecido, ou conversão). Confira o manual vigente; mantido o gabarito oficial.",
    "tip": "ILTB: 3HP (isoniazida + rifapentina semanal, 12 doses) é o esquema preferencial."
  },
  {
    "id": "fmj2026-100",
    "module": "Saúde Coletiva",
    "text": "Um homem de 25 anos de idade buscou atendimento na unidade básica de saúde com sintomas febre ocorrentes já há três dias, cefaleia retrorbitária e exantema maculopapular difuso, acompanhado de vômitos persistentes, dor abdominal intensa e epistaxe. No exame físico, encontrava‑se consciente, hidratado, com pressão arterial de 90 x 60 mmHg, frequência cardíaca de 98 bpm, frequência respiratória de 18 irpm, saturação de oxigênio de 98% e glicemia capilar de 107 mg/dl. Não foi detectado edema em membros inferiores.\n\nConsiderando esse caso clínico hipotético e os critérios do Ministério da Saúde para a classificação da dengue, assinale a opção que apresenta a classificação e a conduta inicial adequada para esse paciente.",
    "options": [
      "dengue C com sinais de alarme – hidratação oral e acompanhamento ambulatorial",
      "dengue C com sinais de alarme – hidratação venosa e observação em unidade hospitalar",
      "dengue C na fase de recuperação – alta e seguimento ambulatorial",
      "dengue D hemorrágica – transfusão de plaquetas imediata",
      "dengue D grave – internação em unidade de terapia intensiva (UTI)"
    ],
    "correctAnswer": 1,
    "explanation": "Suspeita de dengue com sinais de alarme — vômitos persistentes, dor abdominal intensa e sangramento de mucosa (epistaxe) —, sem sinais de choque (PA 90/60, FC 98, consciente e perfundido): grupo C do Ministério da Saúde. A conduta é hidratação venosa imediata (10 mL/kg de soro fisiológico na primeira hora, repetindo conforme reavaliação) e internação em leito de observação/hospitalar, com hematócrito, plaquetas e reavaliação seriada.",
    "commentary": "Grupo C com hidratação oral e ambulatorial (A): o grupo C exige hidratação venosa e internação.\n\nFase de recuperação e alta (C): o paciente está na fase crítica, com sinais de alarme.\n\nDengue hemorrágica com plaquetas (D): a classificação atual não usa “hemorrágica”, e transfusão de plaquetas não é rotina.\n\nGrupo D em UTI (E): o grupo D tem choque ou disfunção grave de órgãos, ausentes aqui.",
    "reference": "Ministério da Saúde – Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "tags": [
      "dengue",
      "sinais de alarme",
      "hidratação venosa",
      "arboviroses"
    ],
    "tip": "Dengue com sinal de alarme sem choque = grupo C → soro EV e internação."
  }
];
