import { Question } from '../types';

// FELUMA 2027 (MG) — residência médica (acesso direto). 75 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const FELUMA_2027_QUESTIONS: Question[] = [
  {
    "id": "feluma2027-1",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 52 anos de idade, com história de dispepsia crônica e uso intermitente de anti-inflamatórios, procura atendimento com dor abdominal súbita iniciada há 12 horas, inicialmente em epigástrio e evoluindo para difusa. Refere piora progressiva da dor. Ao exame físico, apresenta abdome em tábua, dor à palpação difusa com defesa involuntária e sinal de descompressão brusca positivo. Encontra-se hemodinamicamente estável. A radiografia de tórax evidencia pneumoperitônio.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a abordagem terapêutica é",
    "options": [
      "proceder à abordagem cirúrgica com controle da fonte e lavagem da cavidade abdominal",
      "realizar endoscopia digestiva alta para localização da perfuração e planejamento terapêutico",
      "instituir antibioticoterapia e realizar tratamento conservador com monitorização clínica rigorosa",
      "realizar tomografia computadorizada para avaliação da extensão da perfuração antes da intervenção"
    ],
    "correctAnswer": 0,
    "explanation": "Dispepsia crônica e uso de AINE, dor epigástrica súbita que se difunde, abdome em tábua e pneumoperitônio na radiografia: úlcera péptica perfurada com peritonite difusa. Com peritonite generalizada e pneumoperitônio, o diagnóstico está feito e o tratamento é cirúrgico: ressuscitação volêmica, antibiótico de amplo espectro, IBP e laparotomia/laparoscopia com rafia da perfuração (com ou sem omentoplastia) e lavagem da cavidade — o controle da fonte.",
    "commentary": "Endoscopia para localizar a perfuração (B): a insuflação aumenta o pneumoperitônio e a contaminação; EDA está contraindicada na perfuração aguda.\n\nAntibiótico e tratamento conservador (C): o tratamento não operatório (Taylor) só é cogitado em perfurações tamponadas, sem peritonite difusa; aqui há peritonite generalizada.\n\nTC antes da intervenção (D): a TC ajuda em casos duvidosos, mas com pneumoperitônio e peritonite clínica ela só atrasa a cirurgia.",
    "reference": "WSES Guidelines – Perforated and bleeding peptic ulcer (2020); Sabiston – Tratado de Cirurgia, 21ª ed.",
    "tags": [
      "úlcera péptica perfurada",
      "abdome agudo perfurativo",
      "pneumoperitônio",
      "peritonite"
    ],
    "tip": "Pneumoperitônio + peritonite difusa = cirurgia, sem exames adicionais."
  },
  {
    "id": "feluma2027-2",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 58 anos de idade, portador de cirrose hepática por vírus da hepatite C (Child-Pugh A5), em programa de rastreamento semestral com ultrassonografia. A última ultrassonografia revelou nódulo hepático de 18 mm, não identificado previamente.\n\nTomografia Computadorizada (TC) com contraste evidencia realce arterial e washout na fase portal. Alfa-fetoproteína = 380 ng/mL. Estadiamento Barcelona Clinic Liver Cancer (BCLC) 0.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a conduta mais adequada.",
    "options": [
      "Biópsia percutânea guiada por TC, pois a confirmação histológica é obrigatória antes de qualquer tratamento em nódulos hepáticos em cirróticos",
      "Ressecção cirúrgica ou ablação por radiofrequência, pois ambas são opções de primeira linha com sobrevida equivalente nesse caso no estádio BCLC 0 com função hepática preservada",
      "Avaliação prioritária para transplante hepático, pois todo CHC em cirrótico Child-Pugh A com nódulo único < 2 cm tem indicação de transplante como primeira escolha terapêutica",
      "Quimioembolização Transarterial (TACE), pois é o tratamento padrão para todo Carcinoma Hepatocelular (CHC) diagnosticado por critérios radiológicos, independentemente do estádio"
    ],
    "correctAnswer": 1,
    "explanation": "Cirrótico Child-Pugh A com nódulo novo de 18 mm com realce arterial e washout portal: carcinoma hepatocelular por critério radiológico (LI-RADS 5), sem necessidade de biópsia. É BCLC 0 (muito precoce: nódulo único < 2 cm, função hepática preservada, ECOG 0). Nesse estádio, ressecção cirúrgica e ablação (radiofrequência ou micro-ondas) são tratamentos curativos de primeira linha, com sobrevida semelhante em nódulos de até 2 cm.",
    "commentary": "Biópsia obrigatória (A): em cirróticos, o padrão de realce arterial com washout em nódulo ≥ 1 cm é diagnóstico; a biópsia é reservada a lesões de imagem atípica.\n\nTransplante como primeira escolha (C): no BCLC 0 com função preservada, ressecção ou ablação vêm primeiro; o transplante fica para quem não é candidato a elas ou recidiva.\n\nTACE para todo CHC (D): a quimioembolização é o tratamento do estádio intermediário (BCLC B), não do muito precoce.",
    "reference": "BCLC Strategy for Prognosis Prediction and Treatment Recommendation – atualização 2022; Sociedade Brasileira de Hepatologia – Recomendações sobre CHC",
    "tags": [
      "carcinoma hepatocelular",
      "cirrose",
      "BCLC",
      "ablação por radiofrequência",
      "hepatologia"
    ],
    "tip": "CHC BCLC 0: ressecção ou ablação. Realce arterial + washout em cirrótico dispensa biópsia."
  },
  {
    "id": "feluma2027-3",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 42 anos de idade, é resgatada de incêndio em ambiente fechado. Apresenta queimaduras na face, pelos nasais chamuscados e expectoração com fuligem. Na admissão, encontra-se consciente, orientada, com frequência respiratória de 24 irpm, saturação de 94% em oxigênio suplementar. Ao exame clínico, apresenta rouquidão, estridor inspiratório leve e edema de orofaringe à inspeção.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA em relação à via aérea.",
    "options": [
      "Realizar laringoscopia direta precoce para avaliação da via aérea superior",
      "Manter oxigenoterapia suplementar com monitorização continua da saturação periférica",
      "Realizar intubação orotraqueal precoce diante do risco de edema progressivo das vias aéreas",
      "Manter vigilância clinica seriada da via aérea, considerando ausência de sinais atuais de obstrução"
    ],
    "correctAnswer": 2,
    "explanation": "Vítima de incêndio em ambiente fechado com queimadura facial, vibrissas chamuscadas, escarro carbonáceo, rouquidão, estridor e edema de orofaringe: lesão inalatória com acometimento da via aérea superior. O edema progride nas primeiras horas (piora com a reposição volêmica) e pode tornar a intubação impossível depois. Rouquidão e estridor indicam intubação orotraqueal precoce, enquanto ainda é tecnicamente viável.",
    "commentary": "Laringoscopia direta precoce (A): a avaliação pode ser feita, mas com estridor e rouquidão já instalados a conduta é garantir a via aérea, não apenas avaliá-la.\n\nOxigenoterapia com monitorização (B) e vigilância seriada (D): esperar sinais francos de obstrução arrisca perder a janela para intubar; estridor já é sinal de obstrução.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed. (lesões térmicas)",
    "tags": [
      "lesão inalatória",
      "queimaduras",
      "via aérea",
      "intubação orotraqueal",
      "trauma"
    ],
    "tip": "Queimado com rouquidão, estridor ou escarro carbonáceo: intubação precoce."
  },
  {
    "id": "feluma2027-4",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, vítima de acidente motociclístico, é admitida em pronto-socorro com dispneia intensa e dor torácica esquerda. Ao exame físico, ausência de murmúrio vesicular à esquerda, hipertimpanismo à percussão, taquicardia (FC = 128 bpm), hipotensão (PA = 80×50 mmHg), turgência jugular e desvio de traqueia para a direita.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a conduta imediata mais adequada.",
    "options": [
      "Realizar toracocentese de alívio imediata com agulha calibrosa, seguida de drenagem tubular",
      "Intubar o paciente e iniciar ventilação com pressão positiva de alto volume como primeira medida",
      "Solicitar radiografia de tórax antes de qualquer intervenção para confirmar o diagnóstico antes da drenagem",
      "Realizar pericardiocentese guiada por ultrassom para afastar tamponamento cardíaco antes de indicar drenagem torácica"
    ],
    "correctAnswer": 0,
    "explanation": "Trauma torácico com murmúrio abolido, hipertimpanismo, hipotensão, turgência jugular e desvio da traqueia para o lado oposto: pneumotórax hipertensivo. O diagnóstico é clínico e a descompressão é imediata — por agulha calibrosa (no 4º/5º espaço intercostal, linha axilar média, no adulto, pelo ATLS 10) ou digital —, seguida de drenagem torácica tubular.",
    "commentary": "Intubar com ventilação de alto volume (B): a pressão positiva aumenta a tensão no espaço pleural e pode precipitar parada cardíaca.\n\nRadiografia antes (C): o pneumotórax hipertensivo é diagnóstico clínico; atrasar a descompressão para imagem pode ser fatal.\n\nPericardiocentese (D): turgência jugular e hipotensão também ocorrem no tamponamento, mas o hipertimpanismo, o murmúrio abolido e o desvio de traqueia apontam para pneumotórax.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "pneumotórax hipertensivo",
      "trauma torácico",
      "toracocentese de alívio",
      "drenagem torácica"
    ],
    "tip": "Pneumotórax hipertensivo: diagnóstico clínico, descompressão imediata e depois dreno."
  },
  {
    "id": "feluma2027-5",
    "module": "Cirurgia",
    "text": "A cicatrização das feridas cirúrgicas envolve fases bem definidas e pode ser influenciada por fatores locais e sistêmicos que alteram seu curso fisiológico.\n\nCom relação às fases da cicatrização e suas características, assinale a alternativa CORRETA.",
    "options": [
      "A fase inflamatória é caracterizada pela contração da ferida mediada por miofibroblastos",
      "A fase de remodelamento é caracterizada por intensa migração de neutrófilos e macrófagos",
      "A fase proliferativa é caracterizada pela formação de tecido de granulação e angiogênese ativa",
      "A fase inflamatória é caracterizada por deposição de colágeno tipo I e aumento da resistência tênsil"
    ],
    "correctAnswer": 2,
    "explanation": "A cicatrização tem três fases: inflamatória (hemostasia, neutrófilos e depois macrófagos, nos primeiros dias), proliferativa (do 4º dia a cerca de 3 semanas: fibroblastos, síntese de colágeno tipo III, angiogênese, tecido de granulação, epitelização e início da contração por miofibroblastos) e de remodelamento (meses: troca do colágeno III pelo I, ganho de resistência tênsil até cerca de 80% da pele íntegra).",
    "commentary": "Contração por miofibroblastos na fase inflamatória (A): a contração começa na fase proliferativa.\n\nNeutrófilos e macrófagos no remodelamento (B): a migração intensa dessas células é típica da fase inflamatória.\n\nColágeno tipo I e resistência tênsil na inflamatória (D): isso caracteriza o remodelamento.",
    "reference": "Sabiston – Tratado de Cirurgia, 21ª ed. (cicatrização de feridas)",
    "tags": [
      "cicatrização",
      "feridas",
      "fisiologia cirúrgica"
    ],
    "tip": "Inflamatória: neutrófilos/macrófagos. Proliferativa: granulação e angiogênese. Remodelamento: colágeno III → I."
  },
  {
    "id": "feluma2027-6",
    "module": "Cirurgia",
    "text": "Paciente, 60 anos de idade, hipertenso e diabético em tratamento regular, será submetido a hernioplastia inguinal eletiva. Refere boa capacidade funcional, realizando atividades físicas leves sem limitação. Nega sintomas cardiovasculares. Ao exame físico, não apresenta alterações relevantes.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a solicitação de exames complementares inclui",
    "options": [
      "solicitar eletrocardiograma e exames laboratoriais básicos de rotina pré-operatória",
      "restringir a investigação à avaliação clínica sem necessidade de exames complementares",
      "solicitar exames laboratoriais e de imagem amplos devido ao caráter cirúrgico do procedimento",
      "solicitar avaliação cardiológica completa com teste ergométrico independentemente da avaliação clínica"
    ],
    "correctAnswer": 0,
    "explanation": "Paciente de 60 anos, hipertenso e diabético, assintomático e com boa capacidade funcional, para cirurgia de baixo risco (hernioplastia). Os exames pré-operatórios devem ser guiados pela avaliação clínica e pelas comorbidades: o diabetes e a hipertensão justificam eletrocardiograma (idade e doença cardiovascular de risco) e exames básicos como glicemia/hemoglobina glicada, função renal e eletrólitos. Testes de estresse ou ecocardiograma não estão indicados com boa capacidade funcional.",
    "commentary": "Nenhum exame (B): em paciente saudável jovem seria aceitável, mas a idade e as comorbidades (diabetes, hipertensão) justificam ECG e exames laboratoriais dirigidos.\n\nExames amplos de laboratório e imagem (C): baterias de rotina sem indicação clínica não melhoram desfechos e geram falsos positivos.\n\nTeste ergométrico (D): com boa capacidade funcional (≥ 4 METs) e cirurgia de baixo risco, testes funcionais não mudam a conduta.",
    "reference": "Sociedade Brasileira de Cardiologia – 3ª Diretriz de Avaliação Cardiovascular Perioperatória (2017); ESC 2022 Guidelines on non-cardiac surgery",
    "tags": [
      "avaliação pré-operatória",
      "risco cirúrgico",
      "exames pré-operatórios",
      "hérnia inguinal"
    ],
    "tip": "Exame pré-operatório se pede pelas comorbidades e pela cirurgia, não por rotina."
  },
  {
    "id": "feluma2027-7",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 32 anos de idade, com diagnóstico de doença de Crohn há cinco anos, em uso de azatioprina 2,5 mg/kg/dia, apresenta dor em fossa ilíaca direita há duas semanas, febre baixa e massa palpável dolorosa. Tomografia Computadorizada (TC) de abdome: espessamento da parede do ileo terminal com abscesso pericólico de 4 cm, sem fístulas evidentes.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a conduta inicial mais adequada para o paciente.",
    "options": [
      "Internação, jejum, corticoterapia em alta dose (metilprednisolona 1 mg/kg IV) e revisão colonoscópica em 7 dias para reavaliação",
      "Administração imediata de infliximabe (anti-TNF) em dose de ataque, pois a terapia biológica é a primeira linha no Crohn com abscesso pericólico",
      "Drenagem percutânea guiada por imagem do abscesso + antibioticoterapia de amplo espectro, com otimização clínica antes de eventual cirurgia eletiva",
      "Ressecção cirúrgica de urgência do segmento ileal acometido, com enterectomia e anastomose primária, pois a presença de abscesso contraindica tratamento clínico"
    ],
    "correctAnswer": 2,
    "explanation": "Doença de Crohn ileal complicada com abscesso intra-abdominal de 4 cm, sem fístula e com paciente estável. A conduta inicial é antibioticoterapia de amplo espectro e drenagem percutânea guiada por imagem (abscessos > 3 cm), com suspensão ou cautela com imunossupressores, suporte nutricional e otimização clínica. Depois do controle da sepse, avalia-se ressecção eletiva do segmento doente ou início de terapia biológica.",
    "commentary": "Corticoide em alta dose (A): corticoide com abscesso não drenado agrava a infecção.\n\nInfliximabe imediato (B): biológicos são contraindicados enquanto houver infecção/abscesso não controlado.\n\nRessecção de urgência (D): cirurgia de urgência com anastomose primária em paciente séptico e desnutrido tem alto risco de deiscência; prefere-se drenagem e cirurgia eletiva depois.",
    "reference": "ECCO Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment (2020); GEDIIB – Consenso de doença de Crohn",
    "tags": [
      "doença de Crohn",
      "abscesso intra-abdominal",
      "drenagem percutânea",
      "doença inflamatória intestinal"
    ],
    "tip": "Crohn com abscesso: antibiótico + drenagem percutânea; biológico e corticoide só depois."
  },
  {
    "id": "feluma2027-8",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 47 anos de idade, encontra-se no 1º dia de pós-operatório de colecistectomia videolaparoscópica sem intercorrências. Está consciente, hemodinamicamente estável, sem náuseas, com dor leve controlada e aceitando líquidos por via oral. Apresenta débito seroso discreto em dreno sub-hepático. Diurese adequada.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a prescrição pós-operatória deve",
    "options": [
      "manter dieta oral leve associada à analgesia e redução progressiva da hidratação venosa",
      "manter hidratação venosa plena associada à suspensão da dieta oral até retirada do dreno",
      "manter nutrição parenteral associada à antibioticoterapia até retirada do dreno abdominal",
      "manter dieta zero associada à analgesia venosa contínua até normalização completa do débito do dreno"
    ],
    "correctAnswer": 0,
    "explanation": "Primeiro dia após colecistectomia laparoscópica sem complicações, paciente estável, sem náuseas, com dor controlada e aceitando líquidos. A prescrição deve seguir os princípios de recuperação acelerada (ERAS/ACERTO): dieta oral precoce progredindo conforme aceitação, analgesia multimodal e redução/suspensão da hidratação venosa. Um dreno com débito seroso discreto não impede a dieta.",
    "commentary": "Hidratação venosa plena e dieta suspensa até retirar o dreno (B): jejum prolongado não tem justificativa e atrasa a recuperação.\n\nNutrição parenteral com antibiótico (C): não há indicação de NPT em paciente que se alimenta nem de antibiótico terapêutico.\n\nDieta zero com analgesia contínua (D): contraria a recuperação acelerada; o débito do dreno não condiciona a dieta.",
    "reference": "Projeto ACERTO – Aguilar-Nascimento JE; ERAS Society Guidelines",
    "tags": [
      "pós-operatório",
      "colecistectomia",
      "ERAS",
      "projeto ACERTO",
      "dieta precoce"
    ],
    "tip": "Pós-operatório sem intercorrências: dieta precoce e menos soro (ACERTO)."
  },
  {
    "id": "feluma2027-9",
    "module": "Cirurgia",
    "text": "Paciente, 54 anos de idade, será submetido a gastrectomia subtotal eletiva. No início do ato operatório, a equipe solicita um acesso venoso que permita a infusão rápida de volume, caso necessário, durante a indução anestésica e a fase inicial da cirurgia.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que, para esse tipo de acesso, a opção mais adequada é o",
    "options": [
      "cateter periférico fino em veia superficial do dorso da mão",
      "cateter periférico curto e calibroso em veia de membro superior",
      "cateter venoso central de inserção periférica para infusão inicial rápida",
      "cateter venoso umbilical para reposição volêmica durante o procedimento"
    ],
    "correctAnswer": 1,
    "explanation": "Pela lei de Poiseuille, o fluxo em um cateter é proporcional à quarta potência do raio e inversamente proporcional ao comprimento. Por isso, o acesso que permite infusão mais rápida de volume é o cateter periférico curto e calibroso (14G ou 16G) em veia de grosso calibre do membro superior (fossa antecubital). Cateteres centrais são longos e, apesar de calibrosos, infundem mais devagar que um periférico 14G.",
    "commentary": "Cateter fino no dorso da mão (A): pequeno calibre limita muito o fluxo.\n\nPICC (C): cateter longo e fino, com fluxo baixo, inadequado para reposição rápida.\n\nCateter umbilical (D): só existe em recém-nascidos.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.; Miller's Anesthesia, 9ª ed.",
    "tags": [
      "acesso venoso",
      "reposição volêmica",
      "lei de Poiseuille",
      "anestesiologia"
    ],
    "tip": "Infusão rápida: cateter curto e grosso (Poiseuille)."
  },
  {
    "id": "feluma2027-10",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 15 anos de idade, adolescente, é trazido ao pronto-socorro com dor testicular direita de início súbito há 4 horas, de forte intensidade. Ao exame: testículo direito elevado e horizontalizado, com apagamento do sulco epididimo-testicular. Ausência de febre. Doppler escrotal revela ausência de fluxo vascular no testículo direito.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a conduta mais adequada é",
    "options": [
      "solicitar cintilografia testicular com tecnécio para confirmar o diagnóstico antes de indicar cirurgia",
      "iniciar antibioticoterapia empírica com ciprofloxacino, suspensório escrotal e anti-inflamatório, com reavaliação em 24-48 horas",
      "realizar punção escrotal para alívio da pressão intratesticular, seguida de observação clínica por 6 horas antes de decidir a conduta definitiva",
      "realizar exploração cirúrgica de urgência com destorção manual seguida de orquidopexia bilateral caso a viabilidade testicular seja confirmada, ou orquiectomia se houver necrose"
    ],
    "correctAnswer": 3,
    "explanation": "Adolescente com dor testicular súbita, testículo elevado e horizontalizado, perda do sulco epidídimo-testicular e ausência de fluxo ao Doppler: torção do cordão espermático. É emergência cirúrgica — a viabilidade cai muito após 6 horas. A conduta é exploração escrotal imediata com distorção; se viável, orquidopexia bilateral (o lado contralateral tem a mesma anomalia em badalo de sino); se necrótico, orquiectomia e fixação do contralateral.",
    "commentary": "Cintilografia antes da cirurgia (A): atrasa o tratamento; com quadro clínico típico e Doppler sem fluxo, não há o que confirmar.\n\nAntibiótico e suspensório (B): é o tratamento da epididimite, que tem início gradual, febre e fluxo aumentado ao Doppler.\n\nPunção escrotal e observação (C): conduta inexistente, que só atrasa a distorção.",
    "reference": "European Association of Urology – Paediatric Urology Guidelines; Sociedade Brasileira de Urologia",
    "tags": [
      "torção testicular",
      "escroto agudo",
      "urologia",
      "emergência cirúrgica"
    ],
    "tip": "Torção testicular: cirurgia imediata e orquidopexia bilateral."
  },
  {
    "id": "feluma2027-11",
    "module": "Cirurgia",
    "text": "Paciente, 72 anos de idade, submetido a laparotomia por abdome agudo séptico, evolui no pós-operatório imediato em unidade de terapia intensiva com necessidade de suporte vasopressor. Apresenta sangramento discreto por dreno abdominal nas primeiras horas, sem instabilidade hemodinâmica, com hemoglobina estável após reposição inicial. Trata-se de paciente com múltiplos fatores de risco tromboembólico.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a estratégia de tromboprofilaxia inclui",
    "options": [
      "iniciar anticoagulação plena, devido ao elevado risco tromboembólico no pós-operatório",
      "iniciar heparina de baixo peso molecular em dose profilática, associada a métodos mecânicos",
      "postergar tromboprofilaxia farmacológica por tempo indeterminado, devido ao risco hemorrágico",
      "manter exclusivamente métodos mecânicos, até completa ausência de débito em dreno abdominal"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso em pós-operatório de laparotomia por sepse, em UTI com vasopressor e múltiplos fatores de risco para tromboembolismo (alto risco de Caprini). Houve sangramento discreto pelo dreno, mas a hemoglobina está estável e não há instabilidade por sangramento. Nesse cenário, o benefício da profilaxia farmacológica supera o risco: inicia-se heparina de baixo peso molecular (ou heparina não fracionada) em dose profilática, associada a métodos mecânicos (compressão pneumática intermitente).",
    "commentary": "Anticoagulação plena (A): a dose terapêutica é para tratar trombose, não para prevenção, e aumentaria o risco de sangramento.\n\nAdiar indefinidamente (C): sangramento discreto e controlado não justifica deixar sem profilaxia farmacológica um paciente de alto risco.\n\nSomente métodos mecânicos até o dreno secar (D): mecânicos isolados são reservados para sangramento ativo ou risco hemorrágico alto, não para débito discreto estável.",
    "reference": "ACCP – Prevention of VTE in Nonorthopedic Surgical Patients (CHEST 2012); ASH 2019 Guidelines for VTE prophylaxis",
    "tags": [
      "tromboprofilaxia",
      "tromboembolismo venoso",
      "heparina de baixo peso molecular",
      "pós-operatório",
      "terapia intensiva"
    ],
    "tip": "Alto risco de TEV com sangramento controlado: HBPM profilática + compressão mecânica."
  },
  {
    "id": "feluma2027-12",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 36 anos de idade, vítima de colisão automobilística em alta velocidade, admitido com dor torácica intensa e dispneia progressiva. Evolui rapidamente com piora do padrão respiratório. Ao exame físico, apresenta frequência respiratória de 32 irpm, murmúrio vesicular abolido à direita, hipertimpanismo à percussão no hemitórax direito, distensão de veias jugulares, desvio traqueal para a esquerda e pressão arterial de 80/50 mmHg. A saturação de oxigênio é de 85% com oxigênio suplementar.\n\nCom relação ao quadro clínico descrito acima, é CORRETO afirmar que a abordagem inicial adequada é",
    "options": [
      "proceder à drenagem torácica imediata no hemitórax acometido",
      "iniciar ventilação com pressão positiva antes da definição diagnóstica",
      "solicitar tomografia computadorizada de tórax para avaliação detalhada da lesão",
      "realizar radiografia de tórax para confirmação diagnóstica antes de qualquer intervenção"
    ],
    "correctAnswer": 0,
    "explanation": "Trauma torácico com murmúrio abolido e hipertimpanismo à direita, turgência jugular, desvio de traqueia para a esquerda, hipotensão e hipoxemia: pneumotórax hipertensivo. O diagnóstico é clínico e o tratamento é imediato, sem exames de imagem: descompressão (agulha ou toracostomia digital) e drenagem torácica do lado acometido. A alternativa A é a que traz a intervenção imediata no hemitórax afetado.",
    "commentary": "Ventilação com pressão positiva antes (B): agrava o pneumotórax hipertensivo.\n\nTC de tórax (C) e radiografia (D): atrasar a descompressão para confirmar por imagem pode levar à parada cardiorrespiratória.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "pneumotórax hipertensivo",
      "trauma torácico",
      "drenagem torácica"
    ],
    "tip": "Pneumotórax hipertensivo nunca espera radiografia."
  },
  {
    "id": "feluma2027-13",
    "module": "Cirurgia",
    "text": "A hemorragia digestiva pode ser classificada em alta, baixa ou obscura, sendo fundamental a correta abordagem diagnóstica conforme a apresentação clínica e os exames iniciais.\n\nConsidera-se hemorragia digestiva obscura como o sangramento gastrointestinal persistente ou recorrente que permanece sem causa identificada após a realização inicial de Endoscopia Digestiva Alta (EDA) e colonoscopia.\n\nCom relação à investigação da hemorragia digestiva obscura, é CORRETO afirmar que a conduta diagnóstica inicial inclui",
    "options": [
      "realizar colonoscopia repetida de rotina em todos os pacientes com exames prévios normais",
      "indicar cápsula endoscópica para avaliação do intestino delgado após exames iniciais negativos",
      "realizar laparotomia exploradora imediata na ausência de diagnóstico após endoscopia digestiva",
      "indicar angiografia convencional como primeiro exame em pacientes hemodinamicamente estáveis"
    ],
    "correctAnswer": 1,
    "explanation": "Hemorragia digestiva obscura é o sangramento persistente ou recorrente sem causa após EDA e colonoscopia de boa qualidade (hoje chamada de suspeita de sangramento do intestino delgado quando ambas são normais). Após considerar repetir os exames se houver dúvida sobre a qualidade, o exame de escolha no paciente estável é a cápsula endoscópica, que avalia todo o delgado (angioectasias, tumores, úlceras). Achados podem ser tratados por enteroscopia assistida por balão.",
    "commentary": "Colonoscopia repetida de rotina em todos (A): a repetição é seletiva (preparo ruim, sinais sugestivos), não de rotina.\n\nLaparotomia imediata (C): cirurgia exploradora sem localização é último recurso.\n\nAngiografia como primeiro exame no estável (D): a angiografia exige sangramento ativo (≥ 0,5–1 mL/min) e é reservada ao instável ou com sangramento ativo.",
    "reference": "ACG Clinical Guideline: Diagnosis and Management of Small Bowel Bleeding (2015, atualização 2023)",
    "tags": [
      "hemorragia digestiva obscura",
      "cápsula endoscópica",
      "intestino delgado",
      "gastroenterologia"
    ],
    "tip": "EDA e colonoscopia normais com sangramento persistente: cápsula endoscópica."
  },
  {
    "id": "feluma2027-14",
    "module": "Cirurgia",
    "text": "Durante uma herniorrafia inguinal aberta (técnica de Shouldice), o cirurgião identifica uma hérnia que protrai medialmente aos vasos epigástricos inferiores, por meio do triângulo de Hesselbach.\n\nCom relação à anatomia da região inguinal, assinale a alternativa CORRETA sobre as estruturas limítrofes do triângulo de Hesselbach.",
    "options": [
      "O triângulo de Hesselbach é delimitado posteriormente por estruturas do assoalho pélvico e superiormente pelo ligamento inguinal",
      "O triângulo de Hesselbach é delimitado pelo ligamento inguinal lateralmente, pelos vasos epigástricos inferiores medialmente e pela bainha do reto anterior",
      "O triângulo de Hesselbach é delimitado pelo músculo oblíquo interno superiormente, pelo ligamento de Cooper inferiormente e pela artéria femoral lateralmente",
      "O triângulo de Hesselbach é delimitado medialmente pela borda lateral do reto abdominal, lateralmente pelos vasos epigástricos inferiores e inferiormente pelo ligamento inguinal"
    ],
    "correctAnswer": 3,
    "explanation": "O triângulo de Hesselbach (inguinal) é limitado medialmente pela borda lateral do músculo reto do abdome, lateralmente pelos vasos epigástricos inferiores e inferiormente pelo ligamento inguinal. É a área de fraqueza da parede posterior por onde saem as hérnias inguinais diretas (mediais aos vasos epigástricos); as indiretas saem pelo anel inguinal profundo, lateral a esses vasos.",
    "commentary": "Assoalho pélvico e ligamento inguinal superiormente (A): o ligamento inguinal é o limite inferior, e o assoalho pélvico não faz parte.\n\nLigamento inguinal lateral, epigástricos medial e bainha do reto (B): inverte os limites.\n\nOblíquo interno, ligamento de Cooper e artéria femoral (C): estruturas que não definem o triângulo.",
    "reference": "Netter – Atlas de Anatomia Humana; HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "triângulo de Hesselbach",
      "hérnia inguinal",
      "anatomia cirúrgica"
    ],
    "tip": "Hesselbach: reto (medial), epigástricos inferiores (lateral), ligamento inguinal (inferior). Hérnia direta."
  },
  {
    "id": "feluma2027-15",
    "module": "Cirurgia",
    "text": "Paciente do sexo masculino, 52 anos de idade, assintomático, solicitou exames preventivos durante uma consulta de clínica médica. Ele informa ter pai falecido por câncer de próstata aos 68 anos de idade e nega outras comorbidades. Ao exame físico, toque retal sem alterações. O médico discute as possibilidades de rastreio.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a conduta mais adequada conforme as diretrizes atuais da Sociedade Brasileira de Urologia (SBU).",
    "options": [
      "Indicar biópsia prostática guiada por ultrassom transretal imediatamente, pois o histórico familiar positivo constitui indicação absoluta de investigação histológica",
      "Rastrear individualizadamente com PSA após discussão de riscos e benefícios com o paciente; dado o histórico familiar, o rastreio pode ser iniciado a partir dos 45 anos de idade",
      "Descartar rastreio com PSA, pois estudos demonstraram ausência de benefício na redução de mortalidade por câncer de próstata e elevado número de tratamentos desnecessários",
      "Iniciar rastreio anual com Antígeno Prostático Específico (PSA) e toque retal a partir dos 50 anos de idade para todo homem assintomático, sem necessidade de discussão de riscos e benefícios"
    ],
    "correctAnswer": 1,
    "explanation": "Pela Sociedade Brasileira de Urologia, o rastreamento do câncer de próstata é individualizado, após decisão compartilhada sobre riscos (sobrediagnóstico, sobretratamento, complicações de biópsia) e benefícios. Começa aos 50 anos na população geral e aos 45 anos em homens de maior risco — negros e com parente de primeiro grau com câncer de próstata —, com PSA (e toque retal). O paciente tem 52 anos e pai com câncer de próstata, logo já está na faixa em que o rastreamento é oferecido.",
    "commentary": "Biópsia imediata (A): história familiar aumenta o risco, mas não indica biópsia sem alteração de PSA ou toque.\n\nDescartar o rastreio (C): é a posição do Ministério da Saúde/INCA para rastreamento populacional, mas a questão pede a diretriz da SBU, que recomenda decisão individualizada.\n\nRastreio anual sem discussão (D): a SBU exige decisão compartilhada.",
    "reference": "Sociedade Brasileira de Urologia – Nota sobre rastreamento do câncer de próstata; EAU Guidelines on Prostate Cancer",
    "tags": [
      "câncer de próstata",
      "rastreamento",
      "PSA",
      "urologia",
      "decisão compartilhada"
    ],
    "tip": "SBU: rastreio individualizado a partir de 50 anos, ou 45 anos se negro ou com parente de 1º grau."
  },
  {
    "id": "feluma2027-16",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 32 anos de idade, 14 semanas de gestação (gesta 2, para 1), comparece à consulta de pré-natal sem queixas urinárias. Nega disúria, polaciúria, urgência miccional ou febre. Antecedentes sem comorbidades. Exame físico sem alterações. Exames laboratoriais mostram exame de urina rotina com leucocitúria discreta e urocultura com crescimento de Escherichia coli ≥10⁵ unidades formadoras de colônia/mililitro. Função renal normal. Não há alergias medicamentosas conhecidas.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA.",
    "options": [
      "Tratar e iniciar profilaxia antibiótica contínua até o final da gestação",
      "Solicitar novos exames em uma semana e tratar apenas se houver sintomas",
      "Iniciar antibioticoterapia dirigida e repetir urocultura após o término do tratamento",
      "Contraindicar tratamento, pois, na ausência de sintomas, não há benefício em antibioticoterapia"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante assintomática com urocultura ≥ 10⁵ UFC/mL: bacteriúria assintomática. Na gestação ela deve ser sempre tratada, pois sem tratamento evolui para pielonefrite em 20–30% dos casos e se associa a parto prematuro e baixo peso. Trata-se com antibiótico guiado pelo antibiograma (ex.: cefalexina, amoxicilina, nitrofurantoína fora do termo, fosfomicina) e repete-se a urocultura 1–2 semanas após o tratamento para confirmar a cura.",
    "commentary": "Profilaxia contínua até o fim da gestação (A): é indicada após pielonefrite ou bacteriúria recorrente, não no primeiro episódio.\n\nRepetir e tratar só se houver sintomas (B) e não tratar (D): na gestação a bacteriúria assintomática deve ser tratada, ao contrário da população geral.",
    "reference": "Ministério da Saúde – Manual de Gestação de Alto Risco (2022); Febrasgo – Infecção urinária na gestação",
    "tags": [
      "bacteriúria assintomática",
      "gestação",
      "infecção do trato urinário",
      "pré-natal"
    ],
    "tip": "Gestante: bacteriúria assintomática sempre se trata e se controla com urocultura."
  },
  {
    "id": "feluma2027-17",
    "module": "Clínica Médica",
    "text": "Paciente, 52 anos de idade, é submetido a endoscopia digestiva alta por dispepsia. Biópsias gástricas são realizadas conforme o protocolo do Sistema de Sydney atualizado. O laudo histopatológico descreve infiltrado linfoplasmocitário na lâmina própria, associado à presença de neutrófilos no epitélio foveolar e glandular, sem identificação de Helicobacter pylori na coloração de rotina.\n\nCom relação ao quadro clínico descrito acima, quanto à interpretação histopatológica do caso, assinale a alternativa CORRETA.",
    "options": [
      "Considerar que a ausência de Helicobacter pylori na coloração de rotina exclui infecção ativa associada",
      "Considerar que a presença de neutrófilos indica atividade inflamatória, caracterizando gastrite crônica ativa",
      "Considerar que a presença de neutrófilos define gastrite crônica independentemente do infiltrado mononuclear",
      "Considerar que a presença de neutrófilos é achado típico de gastrite autoimune isolada sem investigação adicional"
    ],
    "correctAnswer": 1,
    "explanation": "No Sistema de Sydney, o infiltrado linfoplasmocitário na lâmina própria define gastrite crônica, e a presença de neutrófilos (no epitélio ou na lâmina própria) define atividade. Juntos caracterizam gastrite crônica ativa, padrão fortemente associado ao H. pylori. A ausência da bactéria na coloração de rotina (HE) não exclui a infecção: devem-se usar colorações especiais (Giemsa, imuno-histoquímica) ou outros testes (teste da urease, teste respiratório).",
    "commentary": "Ausência na coloração de rotina exclui infecção (A): a sensibilidade da HE é limitada, sobretudo com uso de IBP ou baixa densidade bacteriana.\n\nNeutrófilos definem gastrite crônica (C): a cronicidade é definida pelo infiltrado mononuclear; neutrófilos indicam atividade.\n\nNeutrófilos típicos de gastrite autoimune (D): a gastrite autoimune é tipicamente do corpo, com atrofia e infiltrado mononuclear; atividade neutrofílica sugere H. pylori.",
    "reference": "Dixon MF et al. Classification and grading of gastritis: the updated Sydney System, Am J Surg Pathol 1996",
    "tags": [
      "gastrite",
      "sistema de Sydney",
      "H. pylori",
      "anatomia patológica",
      "gastroenterologia"
    ],
    "tip": "Sydney: mononucleares = crônica; neutrófilos = atividade."
  },
  {
    "id": "feluma2027-18",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 56 anos de idade, com diagnóstico recente de hipertensão arterial, comparece para avaliação inicial. Nega comorbidades conhecidas. Apresenta medidas pressóricas repetidas em consultório entre 158/94 e 162/98 mmHg. A monitorização ambulatorial da pressão arterial confirma média de 24 horas de 150/92 mmHg. Exames laboratoriais sem alterações, função renal e potássio normais e ausência de albuminúria. Eletrocardiograma sem sinais de hipertrofia ventricular esquerda. Índice de Massa Corporal de 29 kg/m².\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a estratégia terapêutica inicial CORRETA para esse paciente.",
    "options": [
      "Iniciar monoterapia com inibidor do cotransportador de sódio-glicose-2, associado a mudanças no estilo de vida",
      "Iniciar betabloqueador como medicamento de primeira linha, associado a mudanças no estilo de vida",
      "Postergar o início do tratamento farmacológico, orientar mudanças no estilo de vida e reavaliar após 3 meses",
      "Iniciar 2 anti-hipertensivos entre enalapril ou losartana, anlodipino e hidroclorotiazida, associados a mudanças no estilo de vida"
    ],
    "correctAnswer": 3,
    "explanation": "Hipertensão confirmada por MAPA (média de 24 h de 150/92 mmHg) com PA de consultório de 158–162/94–98 mmHg. Pela Diretriz Brasileira de Hipertensão Arterial (2025), recomenda-se para a maioria dos hipertensos iniciar com combinação de dois fármacos, em dose baixa e de preferência em comprimido único, entre as classes de primeira linha: IECA ou BRA, bloqueador de canal de cálcio diidropiridínico e diurético tiazídico. A monoterapia fica para hipertensão estágio 1 de baixo risco, idosos frágeis ou PA limítrofe.",
    "commentary": "iSGLT2 em monoterapia (A): não é anti-hipertensivo de primeira linha; é indicado em diabetes, insuficiência cardíaca e doença renal.\n\nBetabloqueador como primeira linha (B): reservado para indicações específicas (coronariopatia, insuficiência cardíaca, controle de frequência).\n\nAdiar o tratamento por 3 meses (C): só se aplica a hipertensão estágio 1 de baixo risco; aqui a PA está próxima do estágio 2.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Hipertensão Arterial (2025)",
    "tags": [
      "hipertensão arterial sistêmica",
      "terapia combinada",
      "MAPA",
      "cardiologia"
    ],
    "tip": "Hipertensão: começar com dois fármacos (IECA/BRA + BCC ou tiazídico) para a maioria."
  },
  {
    "id": "feluma2027-19",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 70 anos de idade, com antecedente de infarto do miocárdio há 2 anos, apresenta dispneia classe funcional II da New York Heart Association, apesar de uso regular de enalapril, carvedilol, espironolactona, dapagliflozina, ácido acetilsalicilico e rosuvastatina em doses otimizadas. Nega angina. Ecocardiograma mostra fração de ejeção de 30%. Eletrocardiograma evidencia ritmo sinusal, QRS de 160 ms com morfologia de bloqueio de ramo esquerdo. Função renal estável e potássio dentro da normalidade.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta estratégia adicional CORRETA para redução do risco de mortalidade desse paciente.",
    "options": [
      "Indicar procedimento de revascularização miocárdica imediata, associada à manutenção do tratamento atual",
      "Aumentar a dose de diurético de alça, reforçar restrição hídrica e associar digoxina, mantendo o tratamento atual",
      "Indicar terapia de ressincronização cardíaca associada a cardiodesfibrilador implantável, mantendo o tratamento atual",
      "Substituir o betabloqueador por bloqueador de canal de cálcio não diidropiridínico, mantendo as demais medicações"
    ],
    "correctAnswer": 2,
    "explanation": "Insuficiência cardíaca com fração de ejeção reduzida (30%), sintomática (NYHA II) apesar de terapia otimizada com os quatro pilares (IECA, betabloqueador, antagonista mineralocorticoide e iSGLT2), em ritmo sinusal com QRS ≥ 150 ms e morfologia de bloqueio de ramo esquerdo. Esse é o perfil com maior benefício da terapia de ressincronização cardíaca, que reduz mortalidade e hospitalizações. Como a FE é ≤ 35% e a cardiopatia é isquêmica, há também indicação de cardiodesfibrilador (CRT-D). Pode-se ainda trocar o IECA por sacubitril-valsartana.",
    "commentary": "Revascularização imediata (A): o paciente não tem angina nem isquemia demonstrada; a revascularização não é a estratégia proposta para reduzir mortalidade aqui.\n\nDiurético, restrição hídrica e digoxina (B): aliviam sintomas e reduzem internações (digoxina), sem reduzir mortalidade.\n\nTrocar betabloqueador por verapamil/diltiazem (D): bloqueadores de cálcio não diidropiridínicos são contraindicados na fração de ejeção reduzida.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (2018) e atualização 2021; ESC 2021 Heart Failure Guidelines",
    "tags": [
      "insuficiência cardíaca",
      "terapia de ressincronização cardíaca",
      "cardiodesfibrilador implantável",
      "bloqueio de ramo esquerdo",
      "cardiologia"
    ],
    "tip": "ICFEr + FE ≤ 35% + BRE com QRS ≥ 150 ms em terapia otimizada: ressincronização (com CDI)."
  },
  {
    "id": "feluma2027-20",
    "module": "Clínica Médica",
    "text": "Paciente, 24 anos de idade, com diagnóstico recente de doença de Crohn, apresenta acometimento ileocolônico, úlceras profundas à colonoscopia, fístula perianal e necessidade de corticoide sistêmico no primeiro surto.\n\nCom relação ao quadro clínico descrito acima, sobre a estratificação de risco na doença de Crohn, assinale a alternativa CORRETA.",
    "options": [
      "Considerar que a resposta inicial ao corticoide afasta a necessidade de estratégias terapêuticas mais precoces",
      "Considerar que a ausência de estenose ao diagnóstico reduz de forma significativa o risco de progressão para comportamento complicado",
      "Considerar que o acometimento ileocolônico apresenta evolução semelhante à doença colônica isolada em termos de risco de complicações",
      "Considerar que a combinação de idade jovem, fenótipo penetrante e lesões profundas se associa a maior risco de evolução estrutural e à necessidade de terapia avançada"
    ],
    "correctAnswer": 3,
    "explanation": "Na doença de Crohn, fatores associados a pior prognóstico (evolução para estenose, fístulas, cirurgia) incluem: diagnóstico em idade jovem (< 30 anos), doença extensa ou ileocolônica, úlceras profundas à colonoscopia, doença perianal/fenótipo penetrante, necessidade precoce de corticoide e tabagismo. Pacientes de alto risco devem receber terapia avançada precoce (biológico, com ou sem imunomodulador — top-down/acelerada).",
    "commentary": "Resposta ao corticoide afasta terapia precoce (A): a necessidade de corticoide no primeiro surto é, ela mesma, fator de mau prognóstico.\n\nAusência de estenose reduz o risco (B): a maioria começa inflamatória e evolui ao longo do tempo para estenose ou penetração; a ausência inicial não protege.\n\nIleocolônica com evolução igual à colônica isolada (C): a doença ileal e ileocolônica tem mais risco de complicações estruturais e cirurgia.",
    "reference": "AGA Clinical Care Pathway for Crohn's Disease; ECCO Guidelines on Therapeutics in Crohn's Disease (2020); GEDIIB",
    "tags": [
      "doença de Crohn",
      "fatores prognósticos",
      "terapia biológica",
      "doença inflamatória intestinal"
    ],
    "tip": "Crohn de alto risco (jovem, perianal, úlceras profundas, corticoide precoce): terapia avançada cedo."
  },
  {
    "id": "feluma2027-21",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 67 anos de idade, apresenta insuficiência cardíaca, fração de ejeção reduzida, doença renal crônica estágio 3b, e procura atendimento por fraqueza muscular progressiva há dois dias. Está em uso de enalapril, carvedilol, dapagliflozina, espironolactona e furosemida. Ao exame, encontra-se hemodinamicamente estável, com força muscular discretamente reduzida em membros inferiores. Eletrocardiograma mostra ondas T apiculadas difusas. Exames laboratoriais revelam potássio sérico de 6,6 mEq/L; creatinina de 2,1 mg/dL; e pH de 7,36.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta inicial CORRETA para esse paciente.",
    "options": [
      "Aumentar a dose de diurético de alça",
      "Administrar gluconato de cálcio intravenoso",
      "Administrar resina de troca catiônica por via oral",
      "Iniciar infusão de solução de bicarbonato de sódio"
    ],
    "correctAnswer": 1,
    "explanation": "Hipercalemia grave (K 6,6 mEq/L) com alterações eletrocardiográficas (T apiculadas) em paciente com doença renal crônica usando enalapril e espironolactona. Com alteração no ECG, a primeira medida é estabilizar a membrana do miocárdio com gluconato de cálcio IV (efeito em minutos), antes das medidas que desviam o potássio para dentro da célula (insulina com glicose, beta-2 agonista) e das que o removem (diurético de alça, resinas/ligantes, diálise). Suspender os fármacos que retêm potássio.",
    "commentary": "Aumentar o diurético de alça (A): ajuda a eliminar potássio, mas age em horas e não protege o coração de imediato.\n\nResina de troca catiônica (C): também remove potássio lentamente; não é a primeira medida com ECG alterado.\n\nBicarbonato de sódio (D): útil sobretudo na acidose metabólica; o pH é quase normal (7,36), e seu efeito é pequeno.",
    "reference": "KDIGO – Controversies Conference on Potassium Management (2020); UK Kidney Association – Treatment of Acute Hyperkalaemia in Adults",
    "tags": [
      "hipercalemia",
      "distúrbios hidroeletrolíticos",
      "gluconato de cálcio",
      "emergência",
      "nefrologia"
    ],
    "tip": "Hipercalemia com ECG alterado: gluconato de cálcio primeiro."
  },
  {
    "id": "feluma2027-22",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 34 anos de idade, procura atendimento por fadiga, sangramentos gengivais e equimoses espontâneas há 2 semanas. Ao exame, apresenta palidez de mucosas e petéquias em membros inferiores, sem febre. Hemograma revela: hemoglobina 7,8 g/dL, leucocitos 2.100/mm³; e plaquetas 18.000/mm³. Esfregaço de sangue periférico evidencia blastos com bastonetes de Auer. Coagulograma mostra tempo de protrombina alargado, tempo de tromboplastina parcial ativada discretamente prolongado e fibrinogênio reduzido.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA para essa paciente.",
    "options": [
      "Aguardar confirmação citogenética antes de iniciar tratamento específico",
      "Indicar transplante de medula óssea de urgência como primeira abordagem",
      "Iniciar imediatamente Ácido Trans-Retinoico (ATRA) associado a suporte transfusional",
      "Iniciar antibioticoterapia empírica e observar evolução clínica antes de outras medidas"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com pancitopenia, blastos com bastonetes de Auer e coagulopatia (TP alargado, fibrinogênio baixo): leucemia promielocítica aguda (LMA M3) com coagulação intravascular disseminada. É emergência hematológica: a principal causa de morte precoce é hemorragia. Ao primeiro sinal morfológico, inicia-se imediatamente o ácido transretinoico (ATRA), sem esperar a confirmação da t(15;17)/PML-RARA, junto com suporte transfusional agressivo (plaquetas, crioprecipitado/plasma), seguido de trióxido de arsênio e/ou quimioterapia.",
    "commentary": "Aguardar citogenética (A): o atraso aumenta a mortalidade por hemorragia; o ATRA é iniciado pela suspeita.\n\nTransplante de urgência (B): a LPA tem altas taxas de cura com ATRA e arsênio; transplante não é a primeira abordagem.\n\nAntibiótico e observação (D): não há febre e o quadro exige tratamento específico imediato.",
    "reference": "European LeukemiaNet – Management of acute promyelocytic leukemia (2019); Sociedade Brasileira de Hematologia",
    "tags": [
      "leucemia promielocítica aguda",
      "bastonetes de Auer",
      "coagulação intravascular disseminada",
      "ATRA",
      "hematologia"
    ],
    "tip": "Suspeita de LPA (Auer + CIVD): ATRA imediatamente, sem esperar a genética."
  },
  {
    "id": "feluma2027-23",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 28 anos de idade, com diagnóstico de lúpus eritematoso sistêmico há 2 anos, comparece para seguimento ambulatorial. Apresenta artralgias leves, fadiga e lesões cutâneas fotossensíveis. Nega sintomas renais, neurológicos ou hematológicos.\n\nExames mostram anti-DNA de dupla hélice discretamente elevado, complemento reduzido (C3 e C4) e função renal normal, sem proteinúria. Atualmente, não faz uso regular de medicações.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a estratégia terapêutica CORRETA para o manejo ambulatorial dessa paciente.",
    "options": [
      "Prescrever anti-inflamatório não esteroide isoladamente, conforme sintomas",
      "Iniciar hidroxicloroquina de forma contínua, associada a medidas de fotoproteção",
      "Iniciar pulsoterapia com corticosteroide intravenoso, seguida de imunossupressor",
      "Iniciar ciclofosfamida como terapia de indução para prevenir progressão da doença"
    ],
    "correctAnswer": 1,
    "explanation": "Lúpus com atividade leve (artralgia, fadiga, lesões cutâneas fotossensíveis), sem acometimento renal, neurológico ou hematológico. A hidroxicloroquina é indicada para todos os pacientes com lúpus, salvo contraindicação: reduz atividade e surtos, protege contra dano orgânico e trombose e aumenta a sobrevida. Associa-se fotoproteção rigorosa e, se necessário, corticoide em baixa dose por curto período.",
    "commentary": "AINE isolado (A): alivia artralgia, mas não controla a doença.\n\nPulsoterapia com imunossupressor (C) e ciclofosfamida (D): reservados para manifestações graves (nefrite, neurolúpus, vasculite), ausentes aqui.",
    "reference": "EULAR 2023 recommendations for the management of SLE; Sociedade Brasileira de Reumatologia",
    "tags": [
      "lúpus eritematoso sistêmico",
      "hidroxicloroquina",
      "fotoproteção",
      "reumatologia"
    ],
    "tip": "Todo lúpus recebe hidroxicloroquina."
  },
  {
    "id": "feluma2027-24",
    "module": "Clínica Médica",
    "text": "Paciente, 38 anos de idade, apresenta fadiga, ganho de peso e constipação. Exames laboratoriais mostram TSH de 12 mUI/L (elevado) e T4 livre reduzido. Nega uso de medicações e não possui história prévia de doença tireoidiana.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta o próximo passo na investigação etiológica.",
    "options": [
      "Solicitar dosagem de triiodotironina total para confirmação diagnóstica",
      "Solicitar ressonância magnética de hipófise para investigação de causa central",
      "Solicitar dosagem de hormônio adrenocorticotrófico para investigação complementar",
      "Solicitar anticorpo anti-peroxidase tireoidiana para investigação de etiologia autoimune"
    ],
    "correctAnswer": 3,
    "explanation": "TSH elevado com T4 livre baixo define hipotireoidismo primário franco. No Brasil (área suficiente em iodo), a principal causa é a tireoidite de Hashimoto, e o próximo passo etiológico é dosar o anticorpo antitireoperoxidase (anti-TPO), positivo em cerca de 90% dos casos. O tratamento é levotiroxina.",
    "commentary": "Dosar T3 total (A): não acrescenta nada ao diagnóstico de hipotireoidismo, já confirmado por TSH e T4 livre.\n\nRM de hipófise (B): no hipotireoidismo central o TSH é baixo ou inapropriadamente normal; aqui o TSH está alto.\n\nDosar ACTH (C): não investiga a causa do hipotireoidismo primário.",
    "reference": "Sociedade Brasileira de Endocrinologia e Metabologia – Consenso de hipotireoidismo (2013); ATA Guidelines",
    "tags": [
      "hipotireoidismo",
      "tireoidite de Hashimoto",
      "anti-TPO",
      "endocrinologia"
    ],
    "tip": "TSH alto + T4L baixo = hipotireoidismo primário → anti-TPO."
  },
  {
    "id": "feluma2027-25",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 49 anos de idade, com diabetes tipo 2, há oito anos, e obesidade (Índice de Massa Corporal de 34 kg/m²). Estava em monoterapia com metformina, sendo associada semaglutida há seis semanas (dose atual 0,5 mg, uma vez por semana). Evoluiu com melhora parcial do controle glicêmico (hemoglobina glicada de 8,7% para 7,9%) e perda ponderal de 3 kg no período. Referia náuseas frequentes nas primeiras semanas, mas atualmente o sintoma encontra-se em regressão, sem outros efeitos adversos. Função renal e hepática normais. Nega história de pancreatite.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA, visando ao controle glicêmico e ponderal.",
    "options": [
      "Substituir a semaglutida por insulina basal",
      "Progredir a dose de semaglutida, conforme tolerância",
      "Reduzir a dose atual de semaglutida e não tentar novos aumentos",
      "Suspender a semaglutida devido a eventos adversos persistentes"
    ],
    "correctAnswer": 1,
    "explanation": "Diabético obeso com resposta parcial à semaglutida 0,5 mg/semana há 6 semanas, com náuseas iniciais em regressão e sem contraindicações. O esquema de titulação prevê aumentos a cada 4 semanas (0,25 → 0,5 → 1 → 2 mg) conforme tolerância, e o efeito sobre glicemia e peso é dose-dependente. Como o paciente ainda não atingiu a meta e tolera bem o fármaco, a conduta é progredir a dose.",
    "commentary": "Trocar por insulina basal (A): a semaglutida ainda não foi otimizada, e a insulina causaria ganho de peso.\n\nReduzir a dose (C) e suspender (D): os efeitos gastrointestinais estão regredindo, como é esperado; não justificam reduzir ou suspender.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (tratamento do DM2); ADA Standards of Care 2025",
    "tags": [
      "diabetes mellitus tipo 2",
      "agonistas do GLP-1",
      "semaglutida",
      "obesidade",
      "endocrinologia"
    ],
    "tip": "GLP-1: titular a dose a cada 4 semanas conforme tolerância."
  },
  {
    "id": "feluma2027-26",
    "module": "Clínica Médica",
    "text": "Paciente, 58 anos de idade, com esôfago de Barrett confirmado com segmento de 2 cm e sem displasia em duas endoscopias de alta qualidade, com biópsias conforme protocolo de Seattle. Assintomático em uso de inibidor de bomba de prótons.\n\nCom relação ao quadro clínico descrito acima e ao seguimento endoscópico do esôfago de Barrett, assinale a alternativa CORRETA.",
    "options": [
      "Realizar ablação endoscópica profilática do epitélio de Barrett mesmo sem displasia",
      "Realizar nova endoscopia digestiva alta em 1 ano, com biópsias a cada 1 cm do segmento",
      "Realizar nova endoscopia digestiva alta apenas se surgirem sintomas de refluxo ou disfagia",
      "Realizar nova endoscopia digestiva alta em 3 a 5 anos, com biopsias a cada 2 cm do segmento"
    ],
    "correctAnswer": 3,
    "explanation": "Esôfago de Barrett de segmento curto (< 3 cm) sem displasia, confirmado em duas endoscopias de qualidade com biópsias pelo protocolo de Seattle. O risco de progressão é baixo, e as diretrizes recomendam vigilância endoscópica espaçada: a cada 3 a 5 anos para segmentos curtos (ACG 2022: 3–5 anos para < 3 cm), com biópsias nos quatro quadrantes a cada 2 cm (protocolo de Seattle), mantendo o IBP.",
    "commentary": "Ablação profilática sem displasia (A): não é recomendada; a ablação é para displasia (baixo ou alto grau) ou carcinoma intramucoso.\n\nEndoscopia anual com biópsias a cada 1 cm (B): intervalo e espaçamento usados na displasia, não no Barrett sem displasia.\n\nEndoscopia só com sintomas (C): sintomas não se correlacionam com progressão; a vigilância é programada.",
    "reference": "ACG Clinical Guideline: Diagnosis and Management of Barrett's Esophagus (2022); Federação Brasileira de Gastroenterologia",
    "tags": [
      "esôfago de Barrett",
      "vigilância endoscópica",
      "protocolo de Seattle",
      "gastroenterologia"
    ],
    "tip": "Barrett sem displasia: < 3 cm → EDA a cada 3–5 anos; ≥ 3 cm → a cada 3 anos. Biópsias a cada 2 cm."
  },
  {
    "id": "feluma2027-27",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 46 anos de idade, profissional de saúde, completou esquema vacinal para hepatite B (3 doses) há 2 meses. Anti-HBs atual: 6 mUI/mL; HBsAg e anti-HBc negativos. Sem imunossupressão conhecida.\n\nCom relação ao quadro clínico descrito acima, sobre a estratégia de revacinação nesse caso, assinale a alternativa CORRETA.",
    "options": [
      "Iniciar dose única de reforço vacinal contra hepatite B e considerar o paciente protegido",
      "Iniciar nova série vacinal apenas se houver exposição ocupacional de risco documentada",
      "Iniciar nova série completa de vacinação contra hepatite B e repetir anti-HBs após o término",
      "Iniciar dose única de reforço vacinal contra hepatite B e não repetir sorologia posteriormente"
    ],
    "correctAnswer": 2,
    "explanation": "Profissional de saúde com esquema completo de 3 doses e anti-HBs de 6 mUI/mL (< 10 mUI/mL) 1–2 meses após a última dose: é não respondedor ao primeiro esquema. A conduta do Ministério da Saúde é repetir o esquema completo de 3 doses e dosar o anti-HBs 1 a 2 meses após a última dose. Se permanecer < 10 mUI/mL após o segundo esquema, é considerado não respondedor e, em exposição, recebe imunoglobulina (HBIG).",
    "commentary": "Dose única de reforço e considerar protegido (A): a recomendação é refazer as 3 doses e confirmar a resposta por sorologia.\n\nNova série só se houver exposição (B): o profissional de saúde deve ter a imunidade documentada antes de qualquer exposição.\n\nReforço único sem nova sorologia (D): sem sorologia não se sabe se houve resposta.",
    "reference": "Ministério da Saúde – Manual dos CRIE, 6ª ed.; PCDT de Profilaxia Pós-Exposição (2024)",
    "tags": [
      "hepatite B",
      "vacinação",
      "anti-HBs",
      "profissional de saúde",
      "imunizações"
    ],
    "tip": "Anti-HBs < 10 após 3 doses: repetir o esquema completo e nova sorologia."
  },
  {
    "id": "feluma2027-28",
    "module": "Clínica Médica",
    "text": "Paciente, 64 anos de idade, internado por pneumonia, evolui com Insuficiência Respiratória Aguda (IRA). Gasometria Arterial (GA) em máscara com Fração Inspirada de Oxigênio (FiO₂) de 0,6 mostra: pressão arterial de oxigênio (PaO₂) de 72mmHg e pressão arterial de dióxido de carbono (PaCO₂) de 35 mmHg. Radiografia de tórax com opacidades bilaterais difusas, sem sinais de sobrecarga volêmica. Início do quadro há três dias.\n\nCom relação ao quadro clínico descrito acima, quanto à classificação e estratificação da Insuficiência Respiratória Aguda (IRA) e da Síndrome do Desconforto Respiratório Agudo (SDRA), assinale a alternativa CORRETA.",
    "options": [
      "Classificar como IRA tipo 1 e SDRA leve pela relação PaO₂/FiO₂",
      "Classificar como IRA tipo 2 e SDRA grave pela relação PaO₂/FiO₂",
      "Classificar como IRA tipo 2 e SDRA moderada pela relação PaO₂/FiO₂",
      "Classificar como IRA tipo 1 e SDRA moderada pela relação PaO₂/FiO₂"
    ],
    "correctAnswer": 3,
    "explanation": "IRA hipoxêmica (tipo 1): PaO₂ baixa para a FiO₂ com PaCO₂ normal/baixa (35 mmHg). Relação PaO₂/FiO₂ = 72 / 0,6 = 120. Pela definição de Berlim, com início agudo (< 1 semana), opacidades bilaterais e edema não explicado por sobrecarga, a SDRA é classificada como leve (200–300), moderada (100–200) ou grave (≤ 100). Com relação de 120, é SDRA moderada. (Formalmente, Berlim exige PEEP ≥ 5 cmH₂O; a nova definição global aceita oxigenoterapia de alto fluxo e outras formas de suporte.)",
    "commentary": "IRA tipo 1 e SDRA leve (A): a relação de 120 é abaixo de 200, o que não é leve.\n\nIRA tipo 2 com SDRA grave (B) ou moderada (C): a PaCO₂ está normal (35 mmHg), sem hipercapnia; não é tipo 2. E a relação de 120 não é grave (≤ 100).",
    "reference": "ARDS Definition Task Force. Acute respiratory distress syndrome: the Berlin Definition, JAMA 2012; Matthay MA et al. A New Global Definition of ARDS, AJRCCM 2024",
    "tags": [
      "insuficiência respiratória aguda",
      "SDRA",
      "definição de Berlim",
      "relação PaO2/FiO2",
      "terapia intensiva"
    ],
    "tip": "P/F: 200–300 leve; 100–200 moderada; ≤ 100 grave. PaCO₂ alta = IRA tipo 2."
  },
  {
    "id": "feluma2027-29",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 58 anos de idade, com histórico de Diabetes Mellitus tipo 2, há 15 anos, e hipertensão arterial sistêmica, comparece à consulta para avaliação de função renal. Está em uso de metformina 2.000 mg/dia, losartana 100 mg/dia e anlodipino 10 mg/dia. Nega edema, dispneia ou sintomas urinários. Exames laboratoriais mostram: creatinina sérica de 1,8 mg/dL (taxa de filtração glomerular estimada: 47 mL/min/1,73 m²); relação albumina/creatinina urinária de 420 mg/g; potássio sérico de 4,5 mEq/L; e pressão arterial: 128/78 mmHg.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA para reduzir a progressão da doença renal nesse paciente.",
    "options": [
      "Suspender a losartana, devido ao risco de piora da função renal",
      "Reduzir a dose de metformina e manter o restante do tratamento",
      "Iniciar um inibidor do cotransportador Sódio-Glicose Tipo 2 (SGLT2)",
      "Recomendar restrição proteica com carga diária menor que 0,4 g/kg/dia"
    ],
    "correctAnswer": 2,
    "explanation": "Diabético com doença renal crônica (TFG 47 mL/min, albuminúria de 420 mg/g — categoria A3), já em uso de BRA em dose máxima, com PA na meta e potássio normal. Para reduzir a progressão da doença renal e eventos cardiovasculares, está indicado acrescentar um inibidor de SGLT2 (dapagliflozina, empagliflozina), que pode ser iniciado com TFG ≥ 20 mL/min. A finerenona é outra opção adicional na albuminúria persistente.",
    "commentary": "Suspender a losartana (A): o BRA é nefroprotetor na albuminúria e deve ser mantido em dose máxima tolerada.\n\nReduzir a metformina e manter o restante (B): com TFG 45–59 a metformina pode ser mantida (ajuste abaixo de 45); a medida não reduz a progressão da doença renal.\n\nRestrição proteica < 0,4 g/kg/dia (D): a recomendação no diabético com DRC é cerca de 0,8 g/kg/dia; restrição tão intensa traz risco de desnutrição.",
    "reference": "KDIGO 2022 Clinical Practice Guideline for Diabetes Management in CKD; Sociedade Brasileira de Diabetes – Diretriz 2024",
    "tags": [
      "doença renal do diabetes",
      "inibidores de SGLT2",
      "albuminúria",
      "nefroproteção",
      "nefrologia"
    ],
    "tip": "DRC diabética: IECA/BRA em dose máxima + iSGLT2 (TFG ≥ 20)."
  },
  {
    "id": "feluma2027-30",
    "module": "Clínica Médica",
    "text": "Paciente, 38 anos de idade, apresenta diagnóstico confirmado de síndrome de Cushing endógena ACTH-dependente por adenoma hipofisário. Foi submetido a cirurgia transesfenoidal, porém mantém hipercortisolismo persistente no pós-operatório.\n\nCom relação ao quadro clínico descrito acima, sobre o tratamento da síndrome de Cushing nesse cenário, assinale a alternativa CORRETA.",
    "options": [
      "Considerar a adrenalectomia unilateral como tratamento definitivo de escolha na doença persistente",
      "Considerar a suspensão progressiva de glicocorticoide como principal estratégia terapêutica nesse contexto",
      "Considerar apenas acompanhamento clínico, pois há resolução espontânea frequente após cirurgia inicial",
      "Considerar reabordagem cirúrgica, radioterapia hipofisária ou tratamento medicamentoso para controle do hipercortisolismo"
    ],
    "correctAnswer": 3,
    "explanation": "Doença de Cushing persistente após cirurgia transesfenoidal. As opções de segunda linha são: reabordagem cirúrgica (quando há tumor visível e ressecável), radioterapia hipofisária (efeito lento, com tratamento medicamentoso até o controle) e tratamento medicamentoso — inibidores da esteroidogênese (cetoconazol, metirapona, osilodrostate), agentes de ação hipofisária (cabergolina, pasireotida) ou antagonista do receptor de glicocorticoide (mifepristona). A adrenalectomia bilateral é o último recurso.",
    "commentary": "Adrenalectomia unilateral (A): na doença ACTH-dependente as duas suprarrenais estão hiperplasiadas; só a bilateral resolveria (com risco de síndrome de Nelson).\n\nSuspensão de glicocorticoide (B): é o tratamento da síndrome de Cushing exógena (iatrogênica), não da endógena.\n\nApenas acompanhar (C): a persistência do hipercortisolismo exige tratamento pelo alto risco cardiovascular e metabólico.",
    "reference": "Endocrine Society – Treatment of Cushing's Syndrome (2015); Pituitary Society Consensus on Cushing's disease (2021)",
    "tags": [
      "síndrome de Cushing",
      "doença de Cushing",
      "adenoma hipofisário",
      "endocrinologia"
    ],
    "tip": "Cushing persistente após cirurgia: reoperação, radioterapia ou medicamentos; adrenalectomia bilateral por último."
  },
  {
    "id": "feluma2027-31",
    "module": "Ginecologia e Obstetrícia",
    "text": "A contracepção cirúrgica feminina tradicionalmente é realizada por meio da ligadura tubária. considerada método definitivo de esterilização. Entretanto, evidências recentes e consensos internacionais, como os da FIGO (Federação Internacional de Ginecologia e Obstetrícia) e da European Society of Gynaecological Oncology (JAMA, 2026), têm destacado a salpingectomia oportunística (SO), definida como a remoção profilática das tubas uterinas durante procedimentos cirúrgicos indicados por outras razões, incluindo a esterilização cirúrgica. Nesse contexto, recomenda-se o aconselhamento de mulheres com risco populacional quanto aos riscos e benefícios da SO, com tomada de decisão compartilhada.\n\nCom relação ao exposto e diante das evidencias cientificas atuais, assinale a alternativa CORRETA sobre a salpingectomia oportunística (SO).",
    "options": [
      "Está associada à redução do risco de carcinoma tubo-ovariano, sem aumento relevante de complicações cirúrgicas",
      "Está associada à antecipação da menopausa, com redução média de aproximadamente 5 anos na idade do climatério",
      "Está associada à redução significativa da reserva ovariana, com queda sustentada dos níveis de AMH (hormônio antimülleriano)",
      "Está associada à possibilidade de reversão futura por microcirurgia tubária, com restauração da fertilidade semelhante à laqueadura convencional"
    ],
    "correctAnswer": 0,
    "explanation": "A maioria dos carcinomas serosos de alto grau, ditos “ovarianos”, origina-se na fímbria da tuba uterina. A salpingectomia oportunística — retirada das tubas durante uma cirurgia indicada por outro motivo (histerectomia, esterilização, cesariana) — reduz o risco de carcinoma tubo-ovariano (estudos mostram redução expressiva), com acréscimo mínimo de tempo cirúrgico e sem aumento relevante de complicações. Também é método contraceptivo mais eficaz que a ligadura.",
    "commentary": "Antecipação da menopausa em 5 anos (B): os estudos não mostram antecipação significativa da menopausa.\n\nRedução sustentada do AMH (C): as evidências não mostram impacto clinicamente relevante na reserva ovariana.\n\nReversível por microcirurgia (D): a remoção das tubas torna a esterilização irreversível; gestação futura só por fertilização in vitro.",
    "reference": "FIGO/ESGO statements on opportunistic salpingectomy; ACOG Committee Opinion nº 774 – Opportunistic Salpingectomy",
    "tags": [
      "salpingectomia oportunística",
      "câncer de ovário",
      "contracepção cirúrgica",
      "prevenção"
    ],
    "tip": "Salpingectomia oportunística: menos câncer tubo-ovariano, sem prejuízo à reserva ovariana; irreversível."
  },
  {
    "id": "feluma2027-32",
    "module": "Ginecologia e Obstetrícia",
    "text": "O câncer de endométrio representa a principal neoplasia maligna do corpo uterino, correspondendo a mais de 90% dos casos. No Brasil, para o triênio 2026-2028, o Instituto Nacional de Câncer (INCA) estima cerca de 9.650 novos casos anuais, o que o torna atualmente o segundo câncer ginecológico mais frequente e o sexto tipo de câncer mais comum entre as mulheres. A ocorrência dessa neoplasia está associada a múltiplos fatores clínicos, metabólicos, reprodutivos e genéticos, que influenciam o risco individual ao longo da vida.\n\nCom base nas evidências cientificas atuais, assinale a alternativa CORRETA que apresenta a associação adequada entre fatores de risco e fatores de proteção para o câncer de endométrio.",
    "options": [
      "A síndrome de Lynch e mulheres portadoras de mutação em BRCA1 aumentam o risco, enquanto a terapia hormonal estrogênica isolada, na pós-menopausa, apresenta efeito protetor endometrial",
      "A obesidade e a anovulação crônica estão associadas ao aumento do risco, enquanto o tabagismo em mulheres, na pós-menopausa, está associado a menor risco de desenvolvimento de câncer endometrial",
      "O uso de tamoxifeno, em pacientes em tratamento de câncer de mama, aumenta o risco de câncer endometrial; entretanto, a associação com sistema intrauterino, liberador de levonorgestrel (SIU-LNG), elimina esse risco",
      "A nuliparidade e o uso isolado de estrogênio, na pós-menopausa, estão associados ao aumento do risco; entretanto, o sistema intrauterino, liberador de levonorgestrel (SIU-LNG), não apresenta beneficio protetor sobre o endométrio"
    ],
    "correctAnswer": 1,
    "explanation": "O câncer de endométrio do tipo endometrioide está ligado ao excesso de estrogênio sem oposição de progesterona. Aumentam o risco: obesidade, anovulação crônica (SOP), nuliparidade, menarca precoce/menopausa tardia, estrogênio isolado na pós-menopausa, tamoxifeno, diabetes e síndrome de Lynch. Reduzem o risco: anticoncepcional combinado, progestagênios (inclusive SIU-LNG), multiparidade e — paradoxalmente — o tabagismo na pós-menopausa (efeito antiestrogênico), que não é recomendado pelos seus outros danos.",
    "commentary": "Estrogênio isolado protetor (A): o estrogênio sem progestagênio aumenta o risco; BRCA1 tem associação fraca, sobretudo com carcinoma seroso.\n\nSIU-LNG elimina o risco do tamoxifeno (C): o SIU-LNG reduz pólipos e hiperplasia, mas não há evidência de que elimine o risco de câncer.\n\nSIU-LNG sem benefício protetor (D): o SIU-LNG tem efeito protetor sobre o endométrio.",
    "reference": "INCA – Estimativa 2026–2028; Febrasgo – Câncer de endométrio; Berek & Novak's Gynecology",
    "tags": [
      "câncer de endométrio",
      "fatores de risco",
      "oncologia ginecológica"
    ],
    "tip": "Endométrio: estrogênio sem oposição aumenta o risco; progestagênio e (paradoxalmente) tabagismo diminuem."
  },
  {
    "id": "feluma2027-33",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 29 anos de idade, secundigesta, 11 semanas de gestação, é admitida com vômitos persistentes há 3 semanas, sem melhora com uso ambulatorial de piridoxina, doxilamina e ondansetrona. Apresenta perda de 7% do peso pré-gestacional. Ao exame: desidratada; prostrada; FC: 112 bpm; PA: 90/60 mmHg. Nota-se nistagmo horizontal e marcha atáxica. Exames: K: 2,7 mEq/L; Na: 130 mEq/L; Cetonúria (+++); TSH: 0,04 mUI/L com T4 livre normal.\n\nCom relação ao quadro clínico descrito acima, sobre o manejo imediato nessa paciente, assinale a alternativa CORRETA.",
    "options": [
      "Prescrever metilprednisolona como terapia de primeira linha para tratamento refratário do quadro emético, reduzindo o tempo de internação e evitando progressão neurológica",
      "Internar a paciente; iniciar propiltiouracil, devido a quadro de hipertireoidismo associado à gestação, e betabloqueadores para controle adrenérgico; e realizar hidratação com soro glicosado a 5%",
      "Indicar internação hospitalar; iniciar reposição volêmica com cristaloides; administrar obrigatoriamente tiamina antes de qualquer oferta de soluções glicosadas e corrigir a hipocalemia",
      "Manter a paciente em observação no pronto-atendimento para hidratação oral fracionada e reintrodução gradual de dieta sólida, reservando a via parenteral apenas se houver hematêmese"
    ],
    "correctAnswer": 2,
    "explanation": "Hiperêmese gravídica grave refratária (perda de 7% do peso, desidratação, hipocalemia, hiponatremia, cetonúria) com nistagmo e ataxia: sinais de encefalopatia de Wernicke por deficiência de tiamina. A conduta é internação, reposição volêmica com cristaloides, correção de eletrólitos (potássio) e tiamina parenteral antes de qualquer solução glicosada — a glicose consome tiamina e pode precipitar ou agravar a encefalopatia. O TSH suprimido com T4 livre normal é hipertireoidismo gestacional transitório (efeito do hCG), que não exige antitireoidiano.",
    "commentary": "Metilprednisolona como primeira linha (A): corticoide é opção de exceção na hiperêmese refratária, não a prioridade diante de Wernicke e distúrbios hidroeletrolíticos.\n\nPropiltiouracil e soro glicosado (B): o hipertireoidismo é transitório pelo hCG e não se trata com antitireoidiano; soro glicosado sem tiamina agrava Wernicke.\n\nHidratação oral em observação (D): a paciente está desidratada, com distúrbios graves e sinais neurológicos; precisa de internação e via parenteral.",
    "reference": "Febrasgo – Hiperêmese gravídica; RCOG Green-top Guideline nº 69 – Nausea and Vomiting of Pregnancy and Hyperemesis Gravidarum",
    "tags": [
      "hiperêmese gravídica",
      "encefalopatia de Wernicke",
      "tiamina",
      "hipocalemia",
      "gestação"
    ],
    "tip": "Hiperêmese com nistagmo/ataxia: tiamina antes de qualquer glicose."
  },
  {
    "id": "feluma2027-34",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 32 anos de idade, nuligesta, com atraso menstrual de 15 dias e estabilidade hemodinâmica, apresenta β-hCG quantitativo de 3.800 mUI/mL. A ultrassonografia transvaginal revela saco gestacional intrauterino de diâmetro médio de 18 mm, presença de vesícula vitelínica, sem polo embrionário visível. Não há líquido livre ou massas anexiais.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta prováveis diagnóstico e conduta para o caso, respectivamente.",
    "options": [
      "Gestação ectópica íntegra; internação para administração de metotrexato intramuscular em dose única",
      "Gestação inicial de evolução incerta; realizar nova ultrassonografia em 7 a 10 dias para reavaliação da viabilidade",
      "Gestação com ameaça de abortamento; prescrever progesterona micronizada por via vaginal e orientar repouso relativo",
      "Gestação anembrionada; proceder com esvaziamento uterino imediato, considerando ausência de batimentos cardioembrionários"
    ],
    "correctAnswer": 1,
    "explanation": "Saco gestacional intrauterino com vesícula vitelínica (confirma gestação intrauterina) e diâmetro médio de 18 mm, ainda sem embrião. Os critérios de perda gestacional definitiva exigem saco ≥ 25 mm sem embrião ou embrião ≥ 7 mm sem batimento. Com 18 mm, trata-se de gestação de viabilidade incerta, e a conduta é repetir o ultrassom em 7 a 10 dias.",
    "commentary": "Gestação ectópica com metotrexato (A): saco intrauterino com vesícula vitelínica confirma gestação tópica.\n\nAmeaça de abortamento com progesterona (C): não há sangramento ou dor, e progesterona não está indicada para viabilidade incerta.\n\nGestação anembrionada com esvaziamento imediato (D): o diagnóstico exige saco ≥ 25 mm sem embrião; esvaziar agora poderia interromper gestação viável.",
    "reference": "Doubilet PM et al. Diagnostic Criteria for Nonviable Pregnancy Early in the First Trimester, NEJM 2013; Febrasgo",
    "tags": [
      "gestação de viabilidade incerta",
      "ultrassonografia obstétrica",
      "primeiro trimestre",
      "abortamento"
    ],
    "tip": "Perda gestacional: saco ≥ 25 mm sem embrião ou embrião ≥ 7 mm sem BCF. Abaixo disso, repetir em 7–10 dias."
  },
  {
    "id": "feluma2027-35",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, secundigesta, com 28 semanas de gestação, apresenta episódios recorrentes de sangramento vaginal indolor. A ultrassonografia evidencia placenta delgada medindo 8 mm de espessura, recobrindo grande parte da cavidade uterina, inclusive o orifício interno do colo uterino. O feto apresenta peso estimado abaixo do percentil 3 para a idade gestacional. Após cesariana de urgência por hemorragia intensa, observa-se dificuldade importante na dequitação placentária, acompanhada de sangramento puerperal volumoso.\n\nCom relação ao quadro clínico descrito acima, considerando a alteração morfológica placentária predominante, assinale a alternativa que descreve CORRETAMENTE seu mecanismo fisiopatológico.",
    "options": [
      "Proliferação localizada do córion frondoso com formação de múltiplos cotilédones acessórios, determinando aumento segmentar da espessura placentária",
      "Invasão trofoblástica limitada à decídua basal com preservação integral da membrana de Nitabuch, favorecendo dequitação placentária fisiológica",
      "Hipertrofia compensatória da placa basal associada à redução focal das vilosidades terminais, resultando em diminuição da área funcional placentária",
      "Expansão difusa da superfície coriônica funcional, decorrente da persistência de vilosidades coriônicas no córion leve, formando placenta delgada e extensamente implantada"
    ],
    "correctAnswer": 3,
    "explanation": "Placenta fina, recobrindo grande parte da cavidade uterina e o orifício interno, com sangramentos indolores, restrição de crescimento fetal e dificuldade de dequitação: placenta membranácea (difusa). Nela, as vilosidades coriônicas não regridem no córion leve e persistem sobre toda a superfície do saco, formando uma placenta delgada e extensamente implantada, que tende a recobrir o segmento inferior (comportando-se como placenta prévia) e frequentemente se associa a acretismo.",
    "commentary": "Cotilédones acessórios com aumento segmentar de espessura (A): descreve a placenta sucenturiada, com lobos acessórios, não uma placenta fina e difusa.\n\nInvasão limitada com dequitação fisiológica (B): descreve a placentação normal, que não explica a dificuldade de dequitação.\n\nHipertrofia da placa basal (C): não corresponde à alteração morfológica descrita.",
    "reference": "Benirschke K. Pathology of the Human Placenta, 6ª ed.; Rezende – Obstetrícia, 14ª ed.",
    "tags": [
      "placenta membranácea",
      "anomalias placentárias",
      "placenta prévia",
      "hemorragia pós-parto",
      "obstetrícia"
    ],
    "tip": "Placenta membranácea: vilosidades persistem em todo o córion → placenta fina, extensa e com dequitação difícil."
  },
  {
    "id": "feluma2027-36",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 50 anos de idade, casada há 20 anos, refere última menstruação aos 48 anos de idade. Procura atendimento por fogachos moderados, sono não reparador e ausência de desejo sexual. Nega dispareunia ou outras queixas ginecológicas. Relata bom relacionamento conjugal. Nega comorbidades, uso de medicações e cirurgias prévias. Pratica atividade física regularmente e mantém alimentação equilibrada. Ao exame físico: IMC (Índice de Massa Corporal) de 22,8 kg/m², pressão arterial de 120/70 mmHg e frequência cardíaca de 72 bpm. Exame físico geral e ginecológico sem alterações. Citologia oncótica recente negativa para neoplasia e mamografia BI-RADS 1.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a melhor opção terapêutica para os sintomas climatéricos associados à redução do desejo sexual.",
    "options": [
      "Iniciar terapia hormonal contínua por via oral com tibolona 2,5 mg/dia",
      "Iniciar terapia hormonal combinada contínua por via oral com estradiol 1 mg associado à drospirenona 2 mg/dia",
      "Iniciar terapia hormonal por via transdérmica com gel de estradiol hemi-hidratado 0,1% associada à bupropiona 150 mg/dia",
      "Iniciar terapia hormonal combinada contínua por via transdérmica com estradiol 50 mcg/dia associado ao acetato de noretisterona 170 mcg/dia"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher na pós-menopausa com fogachos, sono ruim e queixa principal de redução do desejo sexual, sem contraindicações à terapia hormonal. A tibolona é um esteroide sintético com ações estrogênica, progestagênica e androgênica: controla os sintomas vasomotores, protege o endométrio (dispensa progestagênio) e, pelo efeito androgênico, melhora o desejo sexual. É, portanto, a melhor opção quando a hipoatividade sexual acompanha os sintomas climatéricos.",
    "commentary": "Estradiol com drospirenona (B): trata os fogachos, mas a drospirenona tem ação antiandrogênica, que pode piorar a libido.\n\nEstradiol em gel com bupropiona (C): falta progestagênio para proteger o endométrio em mulher com útero.\n\nEstradiol com noretisterona transdérmica (D): trata os sintomas vasomotores, mas não tem o efeito androgênico que favorece a libido.",
    "reference": "Febrasgo/Sobrac – Consenso brasileiro de terapêutica hormonal da menopausa; IMS Recommendations on women's midlife health (2016)",
    "tags": [
      "climatério",
      "terapia hormonal",
      "tibolona",
      "disfunção sexual feminina",
      "menopausa"
    ],
    "tip": "Climatério + queixa de libido: tibolona."
  },
  {
    "id": "feluma2027-37",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 48 anos de idade, assintomática, é atendida em unidade de atenção primária à saúde. Refere preocupação quanto ao risco de câncer de mama, pois uma prima foi diagnosticada com câncer de mama aos 38 anos de idade. Nega outras alterações e não apresenta queixas mamárias. Ao exame físico das mamas, não são identificadas alterações.\n\nCom relação ao quadro clínico descrito acima e às recomendações atuais do Ministério da Saúde, assinale a alternativa CORRETA quanto à conduta de rastreamento adequada.",
    "options": [
      "Solicitar ultrassonografia mamária e, se alterada, indicar mamografia digital",
      "Indicar mamografia digital como método de rastreamento neste momento, sob demanda",
      "Tranquilizar a paciente e orientar início do rastreamento mamográfico aos 55 anos de idade",
      "Encaminhar para avaliação com oncogeneticista para investigação de mutações em BRCA1 e BRCA2"
    ],
    "correctAnswer": 1,
    "explanation": "Pela nova recomendação do Ministério da Saúde (2025), a mamografia de rastreamento está disponível no SUS para mulheres de 40 a 49 anos sob demanda, após decisão compartilhada sobre riscos e benefícios; de 50 a 74 anos, é bienal e ativamente oferecida. A paciente tem 48 anos e manifesta preocupação, logo pode fazer mamografia. Uma prima com câncer aos 38 anos (parente de 3º grau) não a coloca em alto risco nem justifica avaliação genética.",
    "commentary": "Ultrassonografia como rastreamento (A): o ultrassom é complementar, não método de rastreamento.\n\nAguardar até os 55 anos (C): a faixa de rastreamento organizada começa aos 50 anos, e dos 40 aos 49 é possível sob demanda.\n\nOncogeneticista (D): a indicação considera parentes de primeiro ou segundo grau com câncer precoce, câncer de ovário, mama masculina ou mutação conhecida; uma prima isolada não basta.",
    "reference": "Ministério da Saúde – Nota técnica sobre rastreamento do câncer de mama (2025); INCA – Diretrizes para a detecção precoce do câncer de mama",
    "tags": [
      "câncer de mama",
      "rastreamento",
      "mamografia",
      "saúde da mulher"
    ],
    "tip": "MS 2025: mamografia 40–49 anos sob demanda; 50–74 anos bienal."
  },
  {
    "id": "feluma2027-38",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 32 anos de idade, quartigesta, com histórico de três perdas gestacionais consecutivas (entre 9 e 14 semanas), com fetos morfologicamente normais. Não possui antecedente de trombose. Na investigação pré-gestacional, apresentou anticoagulante lúpico positivo em duas ocasiões, com intervalo de 13 semanas. Atualmente, apresenta gestação tópica de seis semanas, confirmada por ultrassonografia.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta conduta CORRETA.",
    "options": [
      "Iniciar ácido acetilsalicílico em baixa dose associado à heparina de baixo peso molecular em dose profilática",
      "Prescrever ácido acetilsalicílico em baixa dose, reservando a heparina para gestantes com antecedente de trombose",
      "Indicar corticoterapia e imunoglobulina intravenosa como tratamento inicial, devido ao mecanismo imune da síndrome",
      "Iniciar heparina de baixo peso molecular em dose plena, independentemente de antecedente trombótico, sem necessidade de associar ácido acetilsalicílico"
    ],
    "correctAnswer": 0,
    "explanation": "Três perdas consecutivas antes de 10 semanas (ou uma após 10 semanas com feto normal) mais anticoagulante lúpico positivo em duas dosagens com intervalo ≥ 12 semanas fecham o diagnóstico de síndrome antifosfolípide obstétrica. Sem antecedente de trombose, o tratamento na gestação é AAS em baixa dose (iniciado de preferência antes da concepção) associado a heparina de baixo peso molecular em dose profilática, mantida até 6 semanas após o parto.",
    "commentary": "Só AAS, reservando heparina para trombose prévia (B): na SAF obstétrica com perdas recorrentes, a associação AAS + heparina aumenta a taxa de nascidos vivos.\n\nCorticoide e imunoglobulina (C): não melhoram os desfechos e não são recomendados como tratamento inicial.\n\nHeparina em dose plena sem AAS (D): a dose plena é para quem tem trombose prévia; e o AAS faz parte do esquema.",
    "reference": "EULAR recommendations for the management of antiphospholipid syndrome in adults (2019); Febrasgo – Síndrome antifosfolípide e gestação",
    "tags": [
      "síndrome antifosfolípide",
      "perda gestacional de repetição",
      "anticoagulante lúpico",
      "heparina",
      "gestação de alto risco"
    ],
    "tip": "SAF obstétrica sem trombose: AAS + HBPM profilática."
  },
  {
    "id": "feluma2027-39",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, secundigesta de 38 semanas, com diagnóstico de HIV no pré-natal e histórico de adesão irregular à terapia antirretroviral, é admitida em fase inicial de trabalho de parto (2 cm de dilatação e membranas íntegras). Última carga viral foi realizada com 32 semanas de gestação, com resultado indetectável.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA.",
    "options": [
      "Prescrever dolutegravir via oral na admissão, devido à sua capacidade de redução rápida da carga viral no canal vaginal, e manter até clampeamento do cordão",
      "Realizar amniotomia precoce e aplicar fórceps de alívio se necessário, visando abreviar o período expulsivo e minimizar o contato do neonato com secreções cérvico-vaginais",
      "Indicar parto por via cesariana, com administração de zidovudina intravenosa iniciada pelo menos três horas antes do procedimento, mantendo a bolsa íntegra até a extração fetal",
      "Conduzir trabalho de parto pela via vaginal, considerando última carga viral indetectável, mantendo medicações orais e dispensando o uso de antirretrovirais injetáveis durante o trabalho de parto"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante com HIV, adesão irregular e última carga viral com 32 semanas. Pelo PCDT de transmissão vertical, a via de parto é definida pela carga viral a partir de 34 semanas: se < 1.000 cópias/mL, parto vaginal é possível; se ≥ 1.000 ou desconhecida após 34 semanas, indica-se cesárea eletiva (bolsa íntegra, dilatação até 3–4 cm) com zidovudina IV iniciada 3 horas antes. Sem carga viral recente e com má adesão, a conduta segura é cesárea com AZT IV.",
    "commentary": "Dolutegravir na admissão para reduzir a carga viral no canal (A): a profilaxia intraparto com AZT IV é a recomendada; o dolutegravir oral não age a tempo.\n\nAmniotomia precoce e fórceps (B): procedimentos invasivos e ruptura prolongada das membranas aumentam a transmissão e devem ser evitados.\n\nParto vaginal sem AZT (D): a última carga viral é de antes de 34 semanas e a adesão é irregular; não há segurança para dispensar AZT e indicar via vaginal.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "HIV na gestação",
      "transmissão vertical",
      "zidovudina",
      "via de parto",
      "pré-natal"
    ],
    "tip": "HIV: carga viral desconhecida ou ≥ 1.000 após 34 semanas → cesárea + AZT IV 3 h antes."
  },
  {
    "id": "feluma2027-40",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, primigesta de 28 semanas e 4 dias, com pré-eclampsia, apresenta ultrassonografia com peso fetal estimado abaixo do percentil 3. Dopplerfluxometria revela artéria umbilical com fluxo diastólico reverso; artéria cerebral média com sinal de centralização; ducto venoso com onda A positiva e índice de pulsatilidade acima do percentil 95.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa que apresenta a conduta CORRETA.",
    "options": [
      "Indicar a interrupção da gestação por via cesariana após a administração de corticoterapia antenatal e sulfato de magnésio para neuroproteção fetal",
      "Realizar internação hospitalar para indução do trabalho de parto com ocitocina, visando minimizar os riscos maternos da via alta na vigência de pré-eclampsia",
      "Manter conduta expectante ambulatorial com Doppler semanal até que ocorra a ausência ou inversão da onda A no ducto venoso ou a gestação atinja 34 semanas",
      "Iniciar terapia com ácido acetilsalicílico (150 mg/dia) e repouso absoluto em decúbito lateral esquerdo para melhora do fluxo uteroplacentário, reavaliando em 15 dias"
    ],
    "correctAnswer": 0,
    "explanation": "Restrição de crescimento fetal grave e precoce (peso < p3, 28 semanas) com diástole reversa na artéria umbilical, centralização e ducto venoso com IP > p95. A diástole reversa e o ducto venoso alterado indicam comprometimento fetal avançado, e a orientação é interromper a gestação após corticoide antenatal (maturação pulmonar) e sulfato de magnésio (neuroproteção abaixo de 32 semanas), por cesariana — o feto não toleraria o trabalho de parto.",
    "commentary": "Indução com ocitocina (B): feto com diástole reversa não tolera as contrações; a via é cesárea.\n\nExpectante ambulatorial (C): diástole reversa com ducto venoso alterado exige internação e interrupção, não seguimento semanal.\n\nAAS e repouso (D): o AAS previne a pré-eclâmpsia quando iniciado antes de 16 semanas; não trata a restrição instalada.",
    "reference": "Febrasgo – Restrição de crescimento fetal; ISUOG Practice Guidelines: diagnosis and management of small-for-gestational-age fetus (2020)",
    "tags": [
      "restrição de crescimento fetal",
      "dopplervelocimetria",
      "diástole reversa",
      "ducto venoso",
      "medicina fetal"
    ],
    "tip": "RCF com diástole reversa e ducto venoso alterado: corticoide + magnésio e cesárea."
  },
  {
    "id": "feluma2027-41",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 33 anos de idade, nuligesta, sem comorbidades, com desejo de engravidar, refere tentativa de concepção há dois anos. Apresenta ciclos menstruais regulares (28/28 dias), com fluxo de cinco dias, associados à dismenorreia leve a moderada, controlada com analgésicos, sem impacto funcional significativo. Ao exame físico, apresenta discreta dor à palpação de fundo de saco posterior. Ultrassonografia transvaginal com preparo intestinal evidencia imagem sugestiva de endometrioma ovariano esquerdo de 3,2 cm, sem sinais de malignidade. Apresenta Hormônio Folículo Estimulante (FSH) do 3º dia de 8,4 mUI/mL; Hormônio Antimülleriano (AMH) de 1,4 ng/mL; e CA-125 de 12,2 U/mL.\n\nHisterossalpingografia prévia sem alterações tubárias. Espermograma do parceiro normal.\n\nNunca realizou cirurgia prévia.\n\nCom relação ao quadro clínico descrito acima e considerando o objetivo reprodutivo da paciente, assinale a alternativa CORRETA quanto à conduta terapêutica adequada.",
    "options": [
      "Indicar laparoscopia com excisão do endometrioma como abordagem inicial",
      "Indicar indução da ovulação associada a coito programado, sem intervenção cirúrgica inicial",
      "Iniciar dienogeste por três meses para reduzir a atividade da doença e aumentar a chance de concepção espontânea",
      "Indicar análogo de Hormônio Liberador de Gonadotrofina (GnRH), por seis meses, antes de tentativa espontânea, com o objetivo de melhorar a fertilidade"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 33 anos com 2 anos de infertilidade, ciclos regulares, tubas pérvias, espermograma normal e endometrioma de 3,2 cm, com reserva ovariana razoável (AMH 1,4 ng/mL). As diretrizes não recomendam operar endometriomas pequenos apenas para melhorar a fertilidade: a cirurgia reduz a reserva ovariana sem aumentar claramente a chance de gestação. Também não se recomenda supressão hormonal prévia, que só adia a concepção. Pelo gabarito, a conduta é tratamento de baixa complexidade com indução da ovulação e coito programado, sem cirurgia inicial.",
    "commentary": "Laparoscopia com excisão do endometrioma (A): cirurgia em endometrioma < 4 cm com objetivo reprodutivo reduz a reserva ovariana e não é a primeira escolha.\n\nDienogeste por 3 meses (C) e análogo de GnRH por 6 meses (D): a supressão hormonal impede a ovulação e não melhora a fertilidade espontânea; só atrasa a tentativa.",
    "reference": "ESHRE Guideline: Endometriosis (2022); Febrasgo – Endometriose e infertilidade",
    "tags": [
      "endometriose",
      "endometrioma",
      "infertilidade",
      "reprodução assistida",
      "ginecologia"
    ],
    "alert": "Questão discutível: com 33 anos, 2 anos de infertilidade e AMH de 1,4 ng/mL, muitos especialistas indicariam diretamente inseminação intrauterina ou fertilização in vitro. O ponto central do gabarito (não operar o endometrioma nem suprimir antes) é consenso."
  },
  {
    "id": "feluma2027-42",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, primigesta de 12 semanas, realiza ultrassonografia transvaginal que revela gestação gemelar com placenta única. Observa-se membrana interamniótica fina com inserção perpendicular no disco placentário, sem a presença de tecido trofoblástico em sua base. Os fetos apresentam desenvolvimento morfológico normal.\n\nCom relação ao quadro clínico descrito acima, considerando a correlação entre a cronologia da divisão embrionária e a placentação, assinale a alternativa CORRETA.",
    "options": [
      "A divisão ocorreu no estágio de blastocisto, entre o 4º e o 8º dia após a fertilização, resultando em uma configuração monocoriônica e diamniótica",
      "A clivagem ocorreu no estágio de mórula, nas primeiras 72 horas após a fertilização, permitindo a formação de dois córions e dois âmnions independentes",
      "A separação do disco embrionário ocorreu após o 9º dia da fertilização, determinando uma cavidade coriônica única e ausência de membrana interamniótica",
      "O quadro clínico decorre da fertilização de dois oócitos por espermatozoides distintos, cujas placentas sofreram fusão anatômica sem compartilhamento vascular"
    ],
    "correctAnswer": 0,
    "explanation": "Gestação gemelar com placenta única e membrana interamniótica fina, inserida em “T” no disco placentário, sem tecido trofoblástico entre as membranas (ausência do sinal do lambda): gestação monocoriônica e diamniótica. Nos gêmeos monozigóticos, a corionicidade depende do momento da divisão: até 3 dias (mórula) → dicoriônica diamniótica; 4 a 8 dias (blastocisto) → monocoriônica diamniótica; 8 a 12 dias → monoamniótica; após 13 dias → gêmeos unidos.",
    "commentary": "Divisão na mórula com dois córions (B): resultaria em gestação dicoriônica, com sinal do lambda.\n\nDivisão após o 9º dia, sem membrana (C): resultaria em monoamniótica, mas a questão descreve membrana interamniótica.\n\nDois oócitos com placentas fundidas (D): gêmeos dizigóticos são sempre dicoriônicos; placentas fundidas mostrariam o sinal do lambda.",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (2016); Zugaib Obstetrícia, 5ª ed.",
    "tags": [
      "gestação gemelar",
      "corionicidade",
      "monocoriônica",
      "embriologia",
      "ultrassonografia obstétrica"
    ],
    "tip": "Divisão: 0–3 d DC/DA; 4–8 d MC/DA (sinal do T); 8–12 d MC/MA; > 13 d unidos."
  },
  {
    "id": "feluma2027-43",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, gestante de 35 semanas, com diagnóstico prévio de pré-eclampsia, é admitida com dor abdominal súbita e intensa há duas horas e sangramento vaginal escuro. Ao exame: útero hipertônico e doloroso, dificultando a palpação das partes fetais; PA: 155/105 mmHg; e FC: 112 bpm. A cardiotocografia revela frequência cardíaca fetal basal de 100 bpm e variabilidade mínima.\n\nCom relação ao quadro clínico descrito acima, considerando a principal hipótese diagnóstica, assinale a alternativa que apresenta a conduta CORRETA.",
    "options": [
      "Prescrever hidratação vigorosa e observar a progressão do trabalho de parto por até 6 horas, reservando a cesariana apenas se houver hipotensão materna persistente ou óbito fetal",
      "Indicar a interrupção imediata da gestação pela via mais rápida, idealmente cesariana, devido ao diagnóstico clínico de descolamento prematuro de placenta com sofrimento fetal agudo",
      "Realizar ultrassonografia obstétrica com urgência para confirmação do hematoma retroplacentário e graduação do descolamento (Classificação de Sher) antes de definir a via de parto",
      "Iniciar nifedipina por via oral para redução da hipertonia uterina e melhora do bem-estar fetal e betametasona intramuscular para maturação pulmonar fetal, visando à interrupção em 48 horas"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com pré-eclâmpsia, dor abdominal súbita, sangramento escuro, útero hipertônico e doloroso e bradicardia fetal com variabilidade mínima: descolamento prematuro da placenta com sofrimento fetal agudo. O diagnóstico é clínico, e com feto vivo e comprometido a conduta é a interrupção imediata pela via mais rápida — geralmente cesariana —, junto com estabilização materna e atenção à coagulopatia.",
    "commentary": "Hidratação e observação por 6 horas (A): o tempo é decisivo para o feto e para a mãe (coagulopatia, hemorragia).\n\nUltrassom para confirmar (C): o ultrassom tem baixa sensibilidade para hematoma retroplacentário e não deve atrasar a conduta.\n\nTocólise e corticoide para interromper em 48 horas (D): tocolíticos são contraindicados no DPP, e o feto já está em sofrimento.",
    "reference": "Febrasgo – Descolamento prematuro de placenta; Ministério da Saúde – Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "descolamento prematuro de placenta",
      "sangramento da segunda metade",
      "pré-eclâmpsia",
      "sofrimento fetal"
    ],
    "tip": "DPP com feto vivo comprometido: cesárea imediata; diagnóstico é clínico."
  },
  {
    "id": "feluma2027-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 52 anos de idade, nuligesta, sem comorbidades e com vida sexual ativa, pós-menopausa há 2 anos, em uso de terapia hormonal com estrogênio transdérmico e sistema intrauterino liberador de levonorgestrel (SIU-LNG), refere episódios recorrentes de infecção urinária nos últimos 12 meses (4 episódios documentados por urocultura). Relata sintomas típicos de cistite, com melhora após antibioticoterapia. Ao exame ginecológico, normal. Nega incontinência urinária ou sintomas de esvaziamento incompleto. Exames laboratoriais e de imagem sem alterações anatômicas do trato urinário. Já realizou medidas comportamentais e de higiene pessoal, sem redução da recorrência dos episódios.\n\nCom relação ao quadro clínico descrito acima e à sequência terapêutica recomendada pelas diretrizes atuais, assinale a alternativa CORRETA quanto à conduta profilática adequada nesse momento.",
    "options": [
      "Indicar uso de cranberry diário como estratégia principal de profilaxia",
      "Prescrever nitrofurantoína 50 mg ao dia, por 6 meses, como profilaxia contínua",
      "Substituir o estrogênio transdérmico por estrogênio vaginal como estratégia isolada de prevenção de recorrência",
      "Indicar imunoprofilaxia com OM-89 por via oral como estratégia não antimicrobiana de prevenção de recorrência"
    ],
    "correctAnswer": 3,
    "explanation": "Infecção urinária de repetição na pós-menopausa (4 episódios em 12 meses), sem alterações anatômicas, já usando estrogênio (sistêmico) e com falha das medidas comportamentais. As diretrizes (EAU e Febrasgo) recomendam esgotar as estratégias não antimicrobianas antes da profilaxia antibiótica contínua: estrogênio vaginal, imunoprofilaxia oral com lisado bacteriano (OM-89), metenamina e D-manose. Pelo gabarito, o passo seguinte é a imunoprofilaxia com OM-89.",
    "commentary": "Cranberry como estratégia principal (A): a evidência é fraca e inconsistente; não é a estratégia principal.\n\nNitrofurantoína contínua (B): a profilaxia antibiótica é reservada para falha das medidas não antimicrobianas, pelo risco de resistência e efeitos adversos.\n\nTrocar o estrogênio transdérmico por vaginal isoladamente (C): o estrogênio vaginal é útil, mas retirar a terapia sistêmica, que trata os sintomas climatéricos, não é necessário; ele pode ser associado.",
    "reference": "EAU Guidelines on Urological Infections (2024); Febrasgo – Infecção urinária de repetição",
    "tags": [
      "infecção urinária de repetição",
      "pós-menopausa",
      "imunoprofilaxia",
      "OM-89",
      "uroginecologia"
    ],
    "tip": "ITU de repetição: primeiro medidas não antibióticas (estrogênio vaginal, OM-89, metenamina); antibiótico contínuo por último."
  },
  {
    "id": "feluma2027-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 25 anos de idade, nuligesta, com vida sexual ativa desde os 18 anos de idade, em relacionamento estável há 2 anos, comparece à unidade básica de saúde para consulta de rotina. Nega queixas ginecológicas e apresenta exame físico sem alterações. Durante a consulta, a médica assistente informa sobre a atualização das diretrizes nacionais, com incorporação do teste de DNA-HPV oncogênico com genotipagem como método de rastreamento primário do câncer do colo do útero no SUS.\n\nCom relação ao quadro clínico descrito acima e às recomendações mais recentes do Ministério da Saúde (2025) para rastreamento do câncer do colo do útero, assinale a alternativa CORRETA.",
    "options": [
      "Indicar teste de DNA-HPV oncogênico como rastreamento primário; se o resultado for negativo, repetir o exame em 5 anos",
      "Realizar teste de DNA-HPV oncogênico; se houver detecção de HPV 16 e/ou 18, indicar citologia reflexa como próximo passo",
      "Indicar teste de DNA-HPV oncogênico; se detectados outros tipos oncogênicos (não 16/18), encaminhar diretamente para colposcopia",
      "Indicar exame citopatológico (Papanicolau), uma vez que o teste de DNA-HPV não é recomendado como método primário de rastreamento antes dos 30 anos de idade"
    ],
    "correctAnswer": 0,
    "explanation": "Pelas Diretrizes Brasileiras de rastreamento do câncer do colo do útero com teste molecular (2024/2025), o rastreamento no SUS passa a ser feito com teste de DNA-HPV oncogênico com genotipagem, dos 25 aos 64 anos. Se o resultado for negativo, repete-se em 5 anos. Se positivo para HPV 16/18, encaminha-se diretamente à colposcopia; se positivo para outros tipos oncogênicos, faz-se citologia reflexa (na mesma amostra) e, se alterada, colposcopia.",
    "commentary": "HPV 16/18 → citologia reflexa (B): HPV 16/18 encaminha direto à colposcopia.\n\nOutros tipos → colposcopia direta (C): para os outros tipos, o próximo passo é a citologia reflexa.\n\nDNA-HPV não recomendado antes dos 30 anos (D): a diretriz brasileira adota o teste a partir dos 25 anos.",
    "reference": "INCA/Ministério da Saúde – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero: Parte I – rastreamento organizado com teste de DNA-HPV (2024)",
    "tags": [
      "câncer do colo do útero",
      "rastreamento",
      "teste de DNA-HPV",
      "genotipagem",
      "saúde da mulher"
    ],
    "tip": "DNA-HPV (25–64 anos): negativo → 5 anos; 16/18 → colposcopia; outros → citologia reflexa."
  },
  {
    "id": "feluma2027-46",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 9 meses de vida, é trazido pela mãe a uma Unidade de Pronto Atendimento (UPA) com queixa de febre baixa (37,8 °C) e episódios de diarreia aquosa iniciados há 24 horas. Durante a anamnese, a mãe do paciente, que trabalha remotamente (home office), relata que a diarreia está controlada, mas demonstra preocupação com o desenvolvimento do filho: “ele é muito quieto, não tenta engatinhar e não balbucia como o primo da mesma idade\". Para conseguir trabalhar, a mãe relata que o lactente passa aproximadamente quatro horas diárias assistindo a vídeos infantis educacionais em um tablet e permanece a maior parte da tarde em um andador tradicional (\"de sentar no meio\"), a fim de evitar acidentes pela casa. Antecedentes patológicos: nascido a termo (39 semanas), parto vaginal, sem intercorrências perinatais. Triagens neonatais normais. Calendário vacinal atualizado. Exame físico: bom estado geral, eupneico, corado, hidratado (mucosas úmidas, choro com lágrimas, tempo de enchimento capilar < 2s). Dados vitais: Frequência Cardíaca (FC): 128 bpm; Frequência Respiratória (FR): 32 irpm; Temperatura axilar: 37,2 °C; Saturação de O₂: 98% em ar ambiente. Segmentar: Oroscopia, otoscopia e ausculta cardiopulmonar sem alterações. Abdome flácido, ruídos hidroaéreos aumentados, sem visceromegalias. Semiologia neurológica e do desenvolvimento: tônus apendicular preservado, porém nota-se leve hipotonia de musculatura axial. Senta-se sem apoio, mas com cifose lombar; não realiza transição para a postura de gatas (prono) e apresenta reflexo de paraquedas incompleto. Do ponto de vista cognitivo-comportamental, apresenta escasso contato visual e ausência de responsividade vocal bidirecional (falha no mecanismo fisiológico de serve-and-return ou \"ação e reação\") quando interagido pelo examinador, focando o olhar no tablet da mãe.\n\nCom relação ao quadro clínico descrito acima, considerando a neurofisiologia da aprendizagem e a influência do ambiente na poda sináptica e mielinização nos primeiros anos de vida, assinale a alternativa que apresenta a CORRETA estratificação dos fatores ambientais desse caso e a conduta primária adequada a ser orientada à família para otimizar o neurodesenvolvimento.",
    "options": [
      "Identificar o uso de telas e o andador como fatores de risco menores que não alteram o cronograma intrínseco e genético da maturação neurobiológica. Orientar a manutenção rotineira das atividades, introduzindo suplementação polivitamínica e estimulação fisioterápica semanal para acelerar o recrutamento das unidades motoras atrasadas",
      "Identificar o uso de telas como um fator protetor cognitivo, se o conteúdo for educativo; e o andador como fator de risco biomecânico. Orientar a limitação das telas para no máximo uma hora diária e suspender o andador, promovendo treinos de marcha passiva com apoio dos pais para fortalecer o desenvolvimento musculoesquelético das pernas",
      "Identificar o andador como um fator protetor para a aquisição da marcha independente e o uso de telas como fator de risco para atrasos da fala. Orientar o uso supervisionado do andador por períodos curtos e suspender as telas, promovendo o uso de brinquedos musicais eletrônicos isolados para estimular precocemente o córtex auditivo primário",
      "Identificar o uso de telas e a permanência no andador como fatores de risco severos que prejudicam a neuroplasticidade fisiológica e a biomecânica. Orientar a suspensão total da exposição às telas e do uso do andador, promovendo momentos diários de \"brincar no chão\" (livre movimentação) e a prática de leitura interativa, fortalecendo a rede sinaptica bidirecional"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 9 meses com atraso motor (não faz a transição para gatas, paraquedas incompleto, hipotonia axial), pouco contato visual e falha nas interações recíprocas (serve-and-return), exposto a 4 horas diárias de telas e longos períodos em andador. A Sociedade Brasileira de Pediatria e a OMS recomendam nenhuma exposição a telas antes dos 2 anos (exceto videochamadas), e o andador é contraindicado (atrasa o desenvolvimento motor e causa acidentes). A orientação é retirar telas e andador e promover brincar livre no chão e interação face a face, com leitura compartilhada — base para as conexões sinápticas que dependem de experiência. A criança também deve ser acompanhada de perto pelo risco de transtornos do desenvolvimento.",
    "commentary": "Telas e andador como fatores menores, com polivitamínico e fisioterapia (A): o ambiente é fator decisivo na plasticidade cerebral; suplementos não aceleram o desenvolvimento.\n\nTelas educativas como fator protetor e marcha passiva (B): antes dos 2 anos as telas não têm benefício cognitivo, e treinar marcha passiva não é recomendado.\n\nAndador como protetor da marcha e brinquedos eletrônicos (C): o andador atrasa a marcha independente, e brinquedos eletrônicos não substituem a interação humana.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Orientação: Menos telas, mais saúde (2019, atualização 2024); SBP – Nota de alerta sobre andadores",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "tempo de tela",
      "andador",
      "puericultura"
    ],
    "tip": "Menores de 2 anos: zero tela e nada de andador; chão e interação."
  },
  {
    "id": "feluma2027-47",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 6 anos de idade, é trazido pela mãe a uma Unidade de Pronto Atendimento (UPA) referenciada. A mãe relata que, há cerca de uma semana, o filho apresentou quadro de febre baixa (máx. 37,8 °C), coriza leve e mal-estar, sendo medicado apenas com dipirona em gotas. Três dias depois, a febre cessou espontaneamente. Contudo, na tarde de ontem, a criança apresentou vermelhidão intensa e calor nas bochechas. Na manhã de hoje, surgiram manchas avermelhadas nos braços e pernas, que parecem formar um \"desenho de renda\" e que ficaram significativamente mais nítidas e hiperemiadas após o banho quente. A mãe está muito ansiosa, pois acredita tratar-se de uma reação alérgica grave e tardia à dipirona. Antecedentes patológicos: nascido a termo, sem intercorrências neonatais. Cartão de vacinas em dia (PNI). Nega histórico de alergias, uso contínuo de medicamentos, cirurgias ou internações prévias. Exame físico: Paciente em bom estado geral, corado, hidratado, eupneico e ativo. Sinais vitais: Frequência Cardíaca (FC) 92 bpm; Frequência Respiratória (FR) 20 irpm; Pressão Arterial (PA) 95 x 60 mmHg; Temperatura 36,4 °C; SatO₂ 98% em ar ambiente. Pele: eritema intenso, simétrico e confluente nas regiões malares, contrastando com nítida palidez perioral. No tronco e, principalmente, nas superfícies extensoras dos membros superiores e inferiores, nota-se exantema maculopapular de aspecto reticulado (rendilhado), não pruriginoso e que desaparece à digitopressão.\n\nAusência de lesões bolhosas, descamação ou comprometimento de mucosas. Segmentar:\n\nOroscopia normal, sem manchas de Koplik ou hiperemia de orofaringe; Ausência de linfadenopatias cervicais ou occipitais palpáveis; Otoscopia bilateral sem alterações; Aparelhos respiratório e cardiovascular sem anormalidades; Abdome flácido, indolor, sem visceromegalias; Neurológico preservado.\n\nCom relação ao quadro clínico descrito acima, à estratificação de risco e aos principais diagnósticos diferenciais, assinale a alternativa CORRETA que apresenta o diagnóstico mais provável e a conduta adequada a ser transmitida à família.",
    "options": [
      "O diagnóstico mais provável é o eritema infeccioso. Deve-se afastar a hipótese de alergia à dipirona e orientar que a criança não transmite o vírus na fase exantemática, não havendo necessidade de isolamento escolar ou domiciliar",
      "O diagnóstico mais provável é eritema infeccioso. Deve-se afastar a hipótese de alergia à dipirona e orientar que a criança está na fase de maior viremia e risco de transmissão, sendo obrigatório o isolamento de contato e por via respiratória",
      "O diagnóstico mais provável é de farmacodermia maculopapular. Deve-se confirmar a hipótese de alergia à dipirona e orientar que a doença foi desencadeada pelo uso prévio, necessitando de suspensão da droga e contraindicação definitiva",
      "O diagnóstico mais provável é exantema súbito. Deve-se afastar a hipótese de alergia à dipirona e orientar que a doença tem caráter autolimitado e benigno, com indicação de afastamento escolar até o clareamento total do exantema"
    ],
    "correctAnswer": 0,
    "explanation": "Pródromo leve com febre baixa, seguido de eritema intenso nas bochechas (“face esbofeteada”) com palidez perioral e, depois, exantema rendilhado em membros que se acentua com calor: eritema infeccioso (quinta doença), causado pelo parvovírus B19. Quando o exantema aparece, a fase virêmica já passou e a criança não transmite mais, podendo voltar à escola. Não há relação com a dipirona. Atenção a contatos gestantes, imunossuprimidos e pessoas com anemia hemolítica.",
    "commentary": "Fase de maior viremia com isolamento obrigatório (B): a transmissão ocorre no pródromo; na fase exantemática a criança não é mais contagiosa.\n\nFarmacodermia por dipirona (C): o padrão (face esbofeteada + rendilhado que piora com calor, após pródromo viral) é típico de eritema infeccioso.\n\nExantema súbito (D): ocorre em lactentes, com febre alta por 3 dias e exantema no tronco após a defervescência, sem face esbofeteada.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria, 5ª ed. (doenças exantemáticas)",
    "tags": [
      "eritema infeccioso",
      "parvovírus B19",
      "doenças exantemáticas",
      "infectologia pediátrica"
    ],
    "tip": "Face esbofeteada + rendilhado: eritema infeccioso; no exantema já não transmite."
  },
  {
    "id": "feluma2027-48",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 12 dias de vida, é levado pela mãe a uma Unidade de Pronto Atendimento (UPA) com queixa de \"nariz entupido e espirros frequentes\" há dois dias. Nega febre, tosse ou dificuldade para mamar. Antecedentes: nascido a termo (39 semanas), parto vaginal sem intercorrências, Apgar 9/10, peso de nascimento: 3.350 g. Alta com 48 horas em aleitamento materno exclusivo. Após o exame físico, o pediatra plantonista tranquiliza a mãe do paciente quanto ao quadro de congestão nasal fisiológica do recém-nascido. Aproveitando a consulta, a mãe apresenta o comprovante de coleta do \"Teste do Pezinho\" realizada no 5º dia de vida na Unidade Básica de Saúde, processado pelo Núcleo de Ações e Pesquisa em Apoio Diagnóstico (NUPAD-MG). Ela relata intensa ansiedade, pois possui dois sobrinhos paternos com diagnósticos graves e precoces na infância: um com Síndrome Nefrótica Congênita (SNC tipo Finlandês) e outro com deficiência de G6PD. A mãe questiona o pediatra se o exame coletado no SUS garantirá o rastreio para essas duas doenças específicas de sua história familiar, ou qual é a cobertura real do exame que o filho realizou.\n\nCom relação ao quadro clínico descrito acima, com base na epidemiologia, nas diretrizes do Sistema Único de Saúde (SUS) e no escopo de atuação atual do Programa de Triagem Neonatal de Minas Gerais (PTN-MG/NUPAD), assinale a alternativa que apresenta a orientação técnica e prática CORRETA a ser fornecida à genitora.",
    "options": [
      "Informar que o teste do SUS/MG restringe-se a hipotireoidismo, doença falciforme e fibrose cística. Logo, o painel público não rastreia toxoplasmose congênita, acidemia isovalérica, síndrome nefrótica congênita ou deficiência de G6PD",
      "Informar que o teste do SUS/MG rastreia infecções (toxoplasmose) e doenças renais (síndrome nefrótica congênita), mas não abrange distúrbios metabólicos detectados por espectrometria de massas, como a acidemia isovalérica e a G6PD",
      "Informar que o teste do SUS/MG contempla o painel ampliado total, rastreando síndrome nefrótica congênita, deficiência de G6PD, acidemia isovalérica e toxoplasmose; logo, a criança já está adequadamente investigada para o risco familiar",
      "Informar que o teste do SUS/MG foi ampliado, incluindo toxoplasmose congênita e distúrbios metabólicos via espectrometria de massas em tandem (ex.: acidemia isovalérica). Contudo, não rastreia a síndrome nefrótica congênita nem a deficiência de G6PD"
    ],
    "correctAnswer": 3,
    "explanation": "O Programa de Triagem Neonatal de Minas Gerais (NUPAD/UFMG) é referência no país e teve o painel ampliado, em consonância com a Lei 14.154/2021 (ampliação por etapas do teste do pezinho no SUS). Além de fenilcetonúria, hipotireoidismo congênito, doença falciforme, fibrose cística, hiperplasia adrenal congênita e deficiência de biotinidase, passou a incluir toxoplasmose congênita e erros inatos do metabolismo por espectrometria de massas em tandem (como a acidemia isovalérica). A síndrome nefrótica congênita e a deficiência de G6PD não fazem parte do painel. Por isso, diante da história familiar, a mãe deve ser orientada a investigar essas doenças à parte, se indicado.",
    "commentary": "Restrito a hipotireoidismo, falciforme e fibrose cística (A): o painel de MG é mais amplo (inclui fenilcetonúria, HAC, biotinidase, toxoplasmose e erros inatos ampliados).\n\nRastreia síndrome nefrótica e não rastreia metabólicos (B): inverte o painel.\n\nPainel completo incluindo síndrome nefrótica e G6PD (C): essas duas doenças não estão no teste do SUS/MG.",
    "reference": "NUPAD/UFMG – Programa de Triagem Neonatal de Minas Gerais; Lei 14.154/2021; Ministério da Saúde – Triagem Neonatal Biológica: manual técnico",
    "tags": [
      "triagem neonatal",
      "teste do pezinho",
      "erros inatos do metabolismo",
      "neonatologia"
    ],
    "tip": "Teste do pezinho do SUS não rastreia G6PD nem síndrome nefrótica congênita."
  },
  {
    "id": "feluma2027-49",
    "module": "Pediatria",
    "text": "Paciente do sexo feminino, 6 anos de idade, durante a aula, apresenta episódio único de perda de consciência associado a movimentos tônico-clônicos generalizados com duração de dois minutos, sem febre associada. Após o evento, evoluiu sonolenta por cerca de 20 minutos e depois retornou ao estado habitual. Criança previamente hígida e sem antecedentes neurológicos.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA.",
    "options": [
      "A presença de sonolência após o evento afasta a possibilidade de crise convulsiva, devendo ser investigados outros diagnósticos",
      "O episódio único de convulsão afebril confirma o diagnóstico de epilepsia, sem indicação de investigação clínica ou propedêutica",
      "O diagnóstico de epilepsia depende de avaliação clínica e recorrência ou critérios específicos, não sendo definido por crise única isolada",
      "A convulsão afebril em criança indica início imediato de anticonvulsivante de uso contínuo, independentemente do seguimento neurológico"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com primeira crise tônico-clônica generalizada afebril, com recuperação completa após período pós-ictal. Pela definição da ILAE, epilepsia exige: duas crises não provocadas com mais de 24 horas de intervalo; ou uma crise não provocada com risco de recorrência ≥ 60% (ex.: EEG epileptiforme, lesão estrutural); ou diagnóstico de síndrome epiléptica. Uma crise isolada não define epilepsia, mas a criança deve ser investigada (EEG; neuroimagem conforme o caso) e acompanhada.",
    "commentary": "Sonolência afasta crise (A): a sonolência pós-ictal é esperada após crise tônico-clônica e reforça o diagnóstico de crise epiléptica.\n\nCrise única confirma epilepsia sem investigação (B): não confirma, e a investigação é necessária.\n\nAnticonvulsivante imediato contínuo (D): após primeira crise afebril sem fatores de risco, em geral não se inicia tratamento contínuo.",
    "reference": "Fisher RS et al. ILAE official report: a practical clinical definition of epilepsy, Epilepsia 2014; Sociedade Brasileira de Pediatria",
    "tags": [
      "epilepsia",
      "primeira crise convulsiva",
      "convulsão afebril",
      "neurologia pediátrica"
    ],
    "tip": "Epilepsia: 2 crises não provocadas > 24 h, ou 1 crise com alto risco de recorrência, ou síndrome epiléptica."
  },
  {
    "id": "feluma2027-50",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 18 meses de vida, é trazido pela mãe a uma Unidade de Pronto Atendimento (UPA) durante o plantão noturno. Na recepção, a mãe, extremamente angustiada, relata à enfermeira do Acolhimento com Classificação de Risco que o filho \"parou de comer, não quis almoçar nem jantar hoje e está definhando\". A criança é classificada como risco azul (não urgente) e encaminhada ao consultório pediátrico. Durante a anamnese, a mãe do paciente relata que o apetite da criança vem diminuindo progressivamente nos últimos seis meses, tornando o momento das refeições uma batalha diária. A mãe confessa que tentou forçá-lo a comer a mesma quantidade que ele ingeria quando tinha 10 meses de vida. Antecedentes patológicos: nascido a termo, sem intercorrências neonatais. Cartão de vacinas em dia (PNI). Nega histórico de alergias, infecções de repetição ou internações prévias. Exame físico: paciente em excelente estado geral, ativo, sorridente e explorando o consultório. Corado, hidratado, acianótico e anictérico. Sinais vitais: Frequência Cardíaca (FC) 110 bpm; Frequência Respiratória (FR) 26 irpm; Pressão Arterial (PA) 90 x 60 mmHg; Temperatura axilar 36,4 °C; Saturação de O₂ 98% em ar ambiente. Antropometria (avaliada na Caderneta da Criança trazida pela mãe): peso atual: 11 kg (Escore Z = 0); estatura: 82 cm (Escore Z = 0). A análise do gráfico demonstra que o crescimento ponderoestatural tem sido contínuo, ascendente e estritamente paralelo à linha do Escore Z 0 desde o nascimento, sem qualquer inflexão (queda) nas curvas. Segmentar: oroscopia e otoscopia sem alterações.\n\nAparelhos respiratório e cardiovascular sem anormalidades. Abdome flácido, indolor, sem visceromegalias. Tecido celular subcutâneo com turgor e elasticidade preservados.\n\nCom relação ao quadro clínico descrito acima, considerando as bases fisiológicas do desenvolvimento na fase de lactente/pré-escolar e a semiologia do crescimento, assinale a alternativa CORRETA que apresenta a conduta para esse atendimento na UPA.",
    "options": [
      "Solicitar propedêutica laboratorial básica (hemograma, ferritina e zinco) para investigar a causa oculta da recusa alimentar. Explicar que a manutenção do Escore Z no percentil 50 não exclui o risco iminente de déficit estatural, sendo a investigação clínica isolada insuficiente",
      "Recomendar a oferta de dietas líquidas hipercalóricas em substituição às refeições principais recusadas pela criança. Advertir que o peso e a estatura no Escore Z 0 demonstram uma estagnação perigosa frente à recusa alimentar, necessitando de suporte nutricional imediato para manter a curva",
      "Prescrever suplementação polivitamínica e orexígenos para corrigir a hiporexia aguda relatada pela família. Orientar que, apesar do exame físico normal, a queda na ingesta calórica no segundo ano de vida é patológica e exige intervenção medicamentosa para evitar a desnutrição crônica",
      "Tranquilizar a mãe, explicando o fenômeno da anorexia fisiológica decorrente da desaceleração natural da velocidade de crescimento no segundo ano de vida. Utilizar a curva de crescimento normal do paciente como prova visual e objetiva de saúde, contraindicando exames laboratoriais e estimulantes de apetite"
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 18 meses saudável, ativa, com curvas de peso e estatura no escore Z 0, contínuas e sem inflexão, e queixa materna de redução do apetite. No segundo ano de vida a velocidade de crescimento desacelera de forma fisiológica, e a necessidade calórica por quilo diminui — a chamada anorexia fisiológica. A conduta é tranquilizar a mãe usando a própria curva de crescimento como prova de saúde, orientar sobre não forçar a alimentação (responsabilidade compartilhada: os pais oferecem o quê e quando; a criança decide quanto) e evitar exames e estimulantes de apetite desnecessários.",
    "commentary": "Hemograma, ferritina e zinco (A): crescimento normal e exame físico normal não justificam investigação.\n\nDietas líquidas hipercalóricas (B): substituir refeições por suplemento reforça a recusa e não há déficit a corrigir.\n\nPolivitamínico e orexígenos (C): não há doença nem carência a tratar; orexígenos não são indicados.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Alimentação: orientações para alimentação do lactente ao adolescente (2018); SBP – Dificuldades alimentares na infância",
    "tags": [
      "anorexia fisiológica",
      "dificuldade alimentar",
      "crescimento",
      "puericultura"
    ],
    "tip": "Recusa alimentar com curva de crescimento normal: tranquilizar, sem exames."
  },
  {
    "id": "feluma2027-51",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 8 anos de idade, previamente hígido, é admitido na Sala Vermelha de uma Unidade de Pronto Atendimento (UPA), trazido pelo Serviço de Atendimento Móvel de Urgência (SAMU). A mãe relata que a criança iniciou quadro de febre alta e persistente (39,5 °C) há cinco dias, associada a adinamia progressiva, dor abdominal difusa intensa, vômitos e episódios de diarreia aquosa. Há 24 horas, evoluiu com prostração severa, recusa alimentar e o aparecimento de manchas vermelhas pelo corpo. História epidemiológica: os pais relatam que a família toda apresentou quadro gripal leve com RT-PCR positivo para SARS-CoV-2 há cerca de três semanas; na ocasião, a criança teve apenas coriza e febre baixa por dois dias. Exame físico: paciente em mau estado geral, toxêmico, hipoativo, letárgico, com perfusão periférica lentificada (tempo de enchimento capilar de 5 segundos) e extremidades frias. Sinais vitais: Frequência Cardíaca (FC): 155 bpm; Frequência Respiratória (FR): 36 irpm; Pressão Arterial (PA): 75 x 40 mmHg; Temperatura: 39,2 °C; SatO₂: 94% em ar ambiente. Pele e mucosas: exantema polimórfico maculopapular difuso, hiperemia conjuntival bilateral não purulenta, lábios fissurados e eritematosos, língua em framboesa. Presença de edema não cacifo em mãos e pés. Aparelho cardiovascular: taquicárdico, ritmo de galope (presença de B3), pulsos periféricos filiformes. Aparelho respiratório: taquipneico, sem tiragens severas, murmúrio vesicular universalmente audível, sem ruídos adventícios.\n\nAbdome: flácido, doloroso à palpação difusa, sem sinais de irritação peritoneal franca, ruídos hidroaéreos diminuídos.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a justificativa fisiopatológica e a conduta terapêutica específica inicial recomendada.",
    "options": [
      "A fisiopatologia envolve vasculite aguda imunomediada de vasos de médio calibre, com preferência pelo tecido linfático mesenterico; indica-se a avaliação seriada de plaquetas e ecocardiograma, sendo a terapia baseada exclusivamente no uso de Imunoglobulina Intravenosa (IGIV) e Ácido Acetilsalicílico (AAS) em dose anti-inflamatória alta",
      "A fisiopatologia decorre da elevada replicação viral direta e lesão citopática disseminada no endotélio vascular e miocárdio concomitantes; indica-se a confirmação diagnóstica primária por swab rápido/RT-PCR para SARS-CoV-2 e o início imediato de terapia antiviral específica (ex.: remdesivir) associada a suporte ventilatório invasivo profilático precoce",
      "A fisiopatologia envolve uma resposta hiperimune pós-infecciosa tardia com intensa liberação de citocinas (tempestade de citocinas) e disfunção miocárdica aguda; indica-se avaliação de marcadores de injúria cardíaca (troponina, BNP) e terapia precoce combinada com Imunoglobulina Intravenosa (IGIV), Ácido Acetilsalicílico (AAS) e corticoterapia sistêmica (ex.: metilprednisolona)",
      "A fisiopatologia baseia-se na liberação de superantígenos bacterianos a partir de um foco gastrointestinal oculto; indica-se a coleta imediata de hemoculturas e a instituição de antibioticoterapia de amplo espectro (ex.: clindamicina e vancomicina), sendo contraindicado o uso de imunomoduladores pelo risco de supressão de resposta imune inata"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com febre persistente, sintomas gastrointestinais intensos, exantema, conjuntivite não purulenta, alterações de lábios e língua, edema de extremidades e choque com disfunção miocárdica (galope, pulsos finos), 3 semanas após infecção por SARS-CoV-2: síndrome inflamatória multissistêmica pediátrica (SIM-P). A fisiopatologia é uma resposta imune desregulada pós-infecciosa, com tempestade de citocinas e lesão miocárdica, não replicação viral ativa. A conduta é suporte do choque (volume cauteloso, inotrópico/vasopressor), troponina, BNP e ecocardiograma, e imunomodulação com imunoglobulina IV associada a corticoide (metilprednisolona), além de AAS.",
    "commentary": "Vasculite de médio calibre tratada só com IGIV e AAS em dose alta (A): descreve a doença de Kawasaki, que tem sobreposição clínica, mas o choque, a disfunção miocárdica e a relação com covid apontam para SIM-P, em que o corticoide faz parte do tratamento inicial.\n\nReplicação viral direta com remdesivir (B): o RT-PCR costuma ser negativo na SIM-P; o diagnóstico se apoia em sorologia/vínculo, e antivirais não têm papel.\n\nSuperantígeno bacteriano com contraindicação a imunomoduladores (D): a síndrome do choque tóxico é diagnóstico diferencial (antibiótico empírico até excluí-la é razoável), mas não contraindica a imunomodulação, que é o tratamento da SIM-P.",
    "reference": "Ministério da Saúde – Síndrome inflamatória multissistêmica pediátrica associada à covid-19: manejo; ACR Clinical Guidance for MIS-C (2022)",
    "tags": [
      "síndrome inflamatória multissistêmica pediátrica",
      "covid-19",
      "choque",
      "imunoglobulina",
      "cardiologia pediátrica"
    ],
    "tip": "SIM-P: febre + choque/disfunção miocárdica semanas após covid → IGIV + corticoide + AAS."
  },
  {
    "id": "feluma2027-52",
    "module": "Pediatria",
    "text": "Paciente do sexo feminino, 6 anos de idade, previamente hígida e com calendário vacinal completo, está internada no setor de observação pediátrica de uma Unidade de Pronto Atendimento (UPA) há 6 dias. Foi admitida inicialmente com quadro de febre alta, tosse produtiva e taquipneia, sendo diagnosticada com Pneumonia Adquirida na Comunidade (PAC)\n\ngrave e iniciada antibioticoterapia venosa com ampicilina (200 mg/kg/dia). Na visita diária de hoje (6º dia de tratamento), a mãe da paciente mostra-se extremamente ansiosa. Relata que a filha ainda apresenta picos febris diários (temperatura axilar de 38,5 °C). Exame físico atual: a criança encontra-se em bom estado geral, ativa, corada, hidratada e alimentando-se bem nos períodos afebris. Não apresenta sinais de toxemia ou prostração. Dados vitais: Frequência Cardíaca (FC) 105 bpm; Frequência Respiratória (FR) 24 irpm (ausência de tiragens ou esforço respiratório); Saturação de O₂ 97% em ar ambiente. Exame segmentar: aparelho respiratório: murmúrio vesicular globalmente reduzido no terço inferior do hemitórax direito, com presença de estertores crepitantes localizados; sem macicez importante à percussão. Restante do exame físico sem alterações. Exames complementares: diante da febre prolongada, foi solicitada uma Tomografia Computadorizada (TC) de tórax que evidenciou: consolidação extensa no lobo inferior direito, permeada por múltiplas pequenas imagens radiolucentes (císticas), de paredes finas, sem níveis hidroaéreos no seu interior. Não há derrame pleural significativo.\n\nCom relação ao quadro clínico descrito acima, considerando o achado tomográfico associado à evolução clínica, assinale a alternativa que descreve CORRETAMENTE o diagnóstico, sua base fisiopatológica e a conduta terapêutica mais segura e assertiva baseada em evidências.",
    "options": [
      "Diagnóstico de empiema pleural loculado, decorrente de exsudação intensa com formação de septos de fibrina. A conduta é indicar toracocentese de alívio e uso de fibrinolíticos intrapleurais associados à troca do antibiótico, visto que o controle do foco infeccioso não ocorreu",
      "Diagnóstico de pneumonia necrosante, decorrente de superinfecção por patógenos atípicos com destruição alveolar extensa. A conduta é ampliar imediatamente o espectro antimicrobiano para cobrir germes multirresistentes, visto que a febre persistente indica falha terapêutica no esquema atual",
      "Diagnóstico de abscesso pulmonar primário, decorrente da coalescência de macrófagos com formação de cápsula fibrótica espessa e nível hidroaéreo. A conduta é solicitar avaliação da cirurgia torácica para drenagem percutânea ou lobectomia, visto que o tecido necrótico não responde ao tratamento clínico",
      "Diagnóstico de pneumonia necrosante, decorrente de trombose capilar pulmonar com isquemia e liquefação do parênquima. A conduta é manter o esquema antimicrobiano atual por tempo prolongado, visto que a febre persistente integra a evolução fisiopatológica esperada na ausência de deterioração clínica"
    ],
    "correctAnswer": 3,
    "explanation": "Criança com pneumonia grave que mantém febre após 6 dias de ampicilina, mas em bom estado geral, sem piora respiratória. A TC mostra consolidação com múltiplas pequenas cavidades de paredes finas, sem nível hidroaéreo: pneumonia necrosante, em que a trombose de vasos alveolares leva a isquemia e liquefação do parênquima (sobretudo por pneumococo e S. aureus). A febre prolongada faz parte da evolução esperada; com a criança estável, mantém-se o antibiótico por tempo prolongado, sem necessidade de cirurgia ou troca empírica.",
    "commentary": "Empiema loculado (A): não há derrame pleural significativo na TC.\n\nPneumonia necrosante por atípicos com ampliação para multirresistentes (B): a necrose é causada principalmente por pneumococo e S. aureus, e a febre isolada em criança estável não indica falha terapêutica.\n\nAbscesso pulmonar com drenagem ou lobectomia (C): o abscesso é cavidade única de parede espessa com nível hidroaéreo; e mesmo ele costuma responder ao antibiótico.",
    "reference": "Sociedade Brasileira de Pediatria – Pneumonia adquirida na comunidade na infância; BTS Guidelines for the management of community acquired pneumonia in children (2011)",
    "tags": [
      "pneumonia necrosante",
      "pneumonia adquirida na comunidade",
      "pneumologia pediátrica"
    ],
    "tip": "Pneumonia necrosante em criança estável: manter antibiótico; febre prolongada é esperada."
  },
  {
    "id": "feluma2027-53",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 4 anos de idade, é trazido pela mãe à Unidade de Pronto Atendimento (UPA) com queixa de febre alta (aferida em 39 °C) há 48 horas e queixa de dor de garganta, o que tem dificultado a aceitação de alimentos sólidos. A mãe refere que o quadro iniciou um dia antes com congestão nasal, coriza hialina fluida e tosse seca esporádica. Hoje pela manhã, notou que os olhos da criança amanheceram \"vermelhos\", porém sem secreção purulenta ou fotofobia. Antecedentes patológicos: nascido a termo, hígido, sem internações prévias. Cartão de vacinas em dia (PNI). Frequenta creche em período integral. Exame físico: paciente em bom estado geral, corado, hidratado, eupneico e ativo no consultório. Sinais vitais: Frequência Cardíaca: 115 bpm; Frequência Respiratória: 22 irpm; Pressão Arterial: 90 x 60 mmHg; Temperatura axilar: 38,5 °C; SatO₂: 98% em ar ambiente. - Segmentar: Rinoscopia revela mucosa nasal hiperemiada com secreção hialina.\n\nInspeção ocular evidencia hiperemia conjuntival bilateral (injetada), sem secreção; Oroscopia mostra orofaringe e amígdalas palatinas hiperemiadas e hipertrofiadas, com presença de ralo exsudato esbranquiçado bilateral; ausência de petéquias no palato; Presença de linfonodos cervicais anteriores palpáveis, fibroelásticos, móveis e levemente dolorosos (cerca de 1 cm de diâmetro); Ausculta cardiopulmonar sem alterações; -- Abdome inocente.\n\nCom relação ao quadro clínico descrito acima, com base na integração da semiologia clínica respiratória com a fisiopatologia das infecções de vias aéreas superiores, assinale a alternativa CORRETA que apresenta o diagnóstico etiológico mais coerente e a conduta adequada para esse atendimento.",
    "options": [
      "O diagnóstico mais provável é faringoamigdalite viral, justificado pelo tropismo do patógeno pelas mucosas respiratória e ocular, traduzido por coriza, tosse e conjuntivite. A conduta indicada é o tratamento de suporte com analgésicos e antitérmicos, além da orientação sobre o curso autolimitado e sinais de alarme, sem prescrição de antibióticos",
      "O diagnóstico mais provável é herpangina por enterovirus, justificado pela intensa inflamação da mucosa orofaríngea que resulta em hiperemia, febre e linfonodomegalia dolorosa. A conduta indicada é a prescrição de antivirais orais específicos para interromper a viremia, associada a anestésicos tópicos locais antes das refeições e hidratação rigorosa",
      "O diagnóstico mais provável é mononucleose infecciosa, justificado pela forte resposta imune sistêmica que cursa com febre alta, linfonodomegalia cervical e exsudato amigdaliano. A conduta indicada é a prescrição de corticoterapia sistêmica para controle inflamatório, associada ao uso profilático de amoxicilina para prevenir a superinfecção bacteriana",
      "O diagnóstico mais provável é faringoamigdalite bacteriana estreptocócica, justificado pela presença de hipertrofia amigdaliana com exsudato esbranquiçado e febre alta. A conduta indicada é a prescrição de amoxicilina por 10 dias para erradicação do patógeno e prevenção de febre reumática, associada à profilaxia dos contactantes domiciliares com rifampicina"
    ],
    "correctAnswer": 0,
    "explanation": "Pré-escolar com febre, coriza, tosse, conjuntivite não purulenta, faringite com exsudato e linfonodos cervicais: quadro típico de infecção viral, especialmente adenovírus (febre faringoconjuntival), que pode dar exsudato amigdaliano. Sintomas como coriza, tosse e conjuntivite falam contra etiologia estreptocócica (critérios de Centor/McIsaac). O tratamento é sintomático (analgésico e antitérmico), com orientação sobre sinais de alarme, sem antibiótico.",
    "commentary": "Herpangina com antiviral (B): a herpangina causa vesículas e úlceras no palato mole e pilares, não exsudato com conjuntivite; e não há antiviral específico.\n\nMononucleose com corticoide e amoxicilina (C): corticoide só em complicações (obstrução de via aérea), e amoxicilina na mononucleose causa exantema; além disso, a conjuntivite e a coriza favorecem adenovírus.\n\nEstreptocócica com amoxicilina e rifampicina nos contatos (D): coriza, tosse e conjuntivite tornam a etiologia bacteriana improvável; e não se faz profilaxia de contatos com rifampicina.",
    "reference": "Sociedade Brasileira de Pediatria – Faringoamigdalites; Shulman ST et al. IDSA Guideline for Group A Streptococcal Pharyngitis (2012)",
    "tags": [
      "faringoamigdalite viral",
      "adenovírus",
      "conjuntivite",
      "infecções de vias aéreas superiores"
    ],
    "tip": "Faringite com coriza, tosse e conjuntivite: viral (adenovírus); sem antibiótico."
  },
  {
    "id": "feluma2027-54",
    "module": "Pediatria",
    "text": "Paciente do sexo feminino, 22 anos de idade, primípara, comparece à Unidade de Pronto Atendimento (UPA) referenciada no 6º dia pós-parto, acompanhada de seu recém-nascido. A paciente queixa-se de dor intensa em ambas as mamas há cerca de 24 horas, associada à dificuldade para amamentar e choro persistente do bebê. Relata que \"o leite desceu de uma vez\" e que hoje percebeu uma elevação leve da temperatura corporal (37,7 °C em domicílio). Antecedentes patológicos: parto vaginal a termo, sem intercorrências, com alta hospitalar no 2º dia de vida. Nega comorbidades prévias ou alergias. Recém-nascido hígido, com eliminações fisiológicas presentes. Exame físico materno: paciente em bom estado geral, fácies de dor. Dados vitais: Frequência Cardíaca (FC) 88 bpm; Frequência Respiratória (FR) 18 irpm; Pressão Arterial (PA) 110 x 70 mmHg; Temperatura axilar 37,6 °C. Ao exame das mamas, ambas apresentam-se difusamente ingurgitadas, pesadas, quentes e dolorosas à palpação, com a pele tensa e brilhante. Não há áreas de hiperemia localizada ou flutuação. A região areolar encontra-se muito edemaciada, o que resultou no apagamento (achatamento)\n\ndos mamilos. Exame físico do recém-nascido: bom estado geral, corado, hidratado, afebril (36,6 °C), reativo e choroso. Reflexo de busca e sucção presentes. Observação da mamada: durante o teste na UPA, nota-se que o recém-nascido tenta abocanhar a mama, mas escorrega devido à tensão da aréola, conseguindo prender apenas o mamilo, o que causa dor imediata na mãe e sucção ineficaz.\n\nCom relação ao quadro clínico descrito acima, considerando a fisiopatologia do quadro apresentado e as diretrizes de manejo clínico em aleitamento materno, assinale a alternativa CORRETA que apresenta a conduta mais adequada para garantir o alívio materno e a manutenção da amamentação.",
    "options": [
      "Indicar a aplicação de compressas quentes por períodos prolongados antes de cada mamada para promover vasodilatação e aumentar o fluxo lácteo, associada ao uso temporário de bicos intermediários de silicone",
      "Recomendar o espaçamento rígido das mamadas a cada quatro horas para garantir o repouso do tecido glandular, prescrevendo o uso de fórmula láctea infantil de partida nos intervalos para acalmar o recém-nascido",
      "Diagnosticar mastite puerperal incipiente devido ao quadro de febre e dor difusa, prescrever antibioticoterapia oral de amplo espectro por 10 dias e orientar a suspensão temporária do aleitamento materno na fase aguda",
      "Orientar a realização de massagem suave e ordenha manual de alívio da região areolar antes das mamadas, visando amolecer a aréola e facilitar a pega assimétrica profunda, além de manter o aleitamento em livre demanda"
    ],
    "correctAnswer": 3,
    "explanation": "Puérpera no 6º dia com mamas difusamente ingurgitadas, quentes, dolorosas, pele tensa e brilhante, aréola edemaciada com mamilos apagados, febrícula e sem área localizada de hiperemia ou flutuação: ingurgitamento mamário bilateral, por acúmulo de leite com estase e edema intersticial. A areola tensa impede a pega. A conduta é ordenha manual de alívio e massagem suave na aréola antes das mamadas, para amolecê-la e permitir a pega correta, mamadas em livre demanda e frequentes, e compressas frias após as mamadas para reduzir o edema.",
    "commentary": "Compressas quentes prolongadas e bicos de silicone (A): o calor aumenta o edema; os bicos intermediários atrapalham a pega e não são recomendados de rotina.\n\nEspaçar as mamadas e oferecer fórmula (B): agrava a estase e o ingurgitamento e ameaça o aleitamento.\n\nMastite com antibiótico e suspensão da amamentação (C): não há sinais de mastite (área localizada de hiperemia, febre alta, mal-estar); e mesmo na mastite a amamentação deve ser mantida.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 23: Saúde da Criança – Aleitamento materno e alimentação complementar (2015)",
    "tags": [
      "ingurgitamento mamário",
      "aleitamento materno",
      "puerpério",
      "pega"
    ],
    "tip": "Ingurgitamento: ordenha de alívio na aréola, mamadas em livre demanda e frio após a mamada."
  },
  {
    "id": "feluma2027-55",
    "module": "Pediatria",
    "text": "Paciente pré-escolar, 3 anos de idade, é levado à consulta por palidez e redução do apetite. O médico pediatra solicita hemograma, que vem com o seguinte resultado: hemoglobina 9,2 g/dL; Volume Corpuscular Médio (VCM) 68 fL; Hemoglobina Corpuscular Média (HCM)\n\nreduzido; Amplitude de Distribuição dos Glóbulos Vermelhos (RDW) aumentado; leucócitos e plaquetas normais para a idade.\n\nCom relação ao quadro clínico descrito acima, quanto ao hemograma apresentado, assinale a alternativa CORRETA.",
    "options": [
      "O hemograma caracteriza anemia hemolítica autoimune",
      "O padrão laboratorial é compatível com anemia ferropriva",
      "A microcitose indica quadro compatível com aplasia medular",
      "O resultado sugere anemia macrocítica por deficiência de vitamina B12"
    ],
    "correctAnswer": 1,
    "explanation": "Pré-escolar com anemia (Hb 9,2 g/dL), microcitose (VCM 68 fL), hipocromia (HCM baixa) e RDW aumentado (anisocitose), com leucócitos e plaquetas normais: padrão típico da anemia ferropriva, a causa mais comum de anemia na infância. O RDW alto ajuda a diferenciá-la do traço talassêmico, em que o RDW costuma ser normal. A confirmação é feita com ferritina baixa, e o tratamento é ferro elementar 3–5 mg/kg/dia.",
    "commentary": "Anemia hemolítica autoimune (A): costuma ser normocítica ou macrocítica (reticulocitose), com icterícia e Coombs positivo.\n\nAplasia medular (C): causa pancitopenia, com normocitose ou macrocitose; leucócitos e plaquetas estão normais.\n\nMacrocítica por B12 (D): o VCM está baixo, não alto.",
    "reference": "Sociedade Brasileira de Pediatria – Consenso sobre anemia ferropriva (2021)",
    "tags": [
      "anemia ferropriva",
      "microcitose",
      "hemograma",
      "hematologia pediátrica"
    ],
    "tip": "Microcítica com RDW alto: ferropriva. Com RDW normal: pensar em traço talassêmico."
  },
  {
    "id": "feluma2027-56",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 10 meses de vida, lactente, iniciou quadro de choro súbito intenso com flexão das pernas, intercalado por periodos de prostração. Evoluiu com vomitos e evacuação com sangue e muco há poucas horas. Ao exame fisico, encontra-se hidratado no limiar, afebril, irritado e com massa palpável em quadrante superior direito do abdome.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA.",
    "options": [
      "O quadro clínico sugere fissura anal isolada, associada à evacuação com sangue e a desconforto durante o exame físico abdominal",
      "O quadro clínico permite condução inicial com observação clínica, hidratação oral e acompanhamento ambulatorial em curto prazo",
      "O quadro clínico é compatível com gastroenterite aguda, caracterizada por vômitos e evacuações alteradas associadas a irritabilidade",
      "O quadro clínico é sugestivo de invaginação intestinal, condição frequente em lactentes com dor abdominal em crises e alteração das fezes"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 10 meses com crises de choro intenso e flexão das pernas intercaladas com prostração (letargia), vômitos, fezes com sangue e muco (“geleia de framboesa”) e massa palpável em hipocôndrio direito: quadro clássico de invaginação intestinal (intussuscepção ileocólica), mais comum entre 6 meses e 2 anos. O diagnóstico é confirmado por ultrassom (sinal do alvo), e o tratamento inicial, se não houver peritonite ou perfuração, é redução por enema hidrostático ou pneumático.",
    "commentary": "Fissura anal (A): explica sangramento discreto, mas não dor em crises, vômitos, letargia e massa abdominal.\n\nObservação e hidratação oral (B): a invaginação é emergência; o atraso aumenta o risco de isquemia e perfuração.\n\nGastroenterite aguda (C): não explica a massa abdominal nem a dor em cólica com prostração entre as crises.",
    "reference": "Sociedade Brasileira de Pediatria; Sociedade Brasileira de Cirurgia Pediátrica – Intussuscepção intestinal",
    "tags": [
      "invaginação intestinal",
      "intussuscepção",
      "abdome agudo pediátrico",
      "cirurgia pediátrica"
    ],
    "tip": "Lactente com dor em crises + letargia + fezes em geleia + massa = invaginação."
  },
  {
    "id": "feluma2027-57",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 11 meses de vida, lactente, previamente hígido, estava sendo alimentado quando iniciou episódio súbito de tosse intensa, engasgo e dificuldade respiratória. Foi levado imediatamente ao pronto atendimento. Ao exame, encontra-se consciente, agitado, cianótico, com esforço respiratório importante e incapaz de emitir sons ou chorar.\n\nCom relação ao quadro clínico descrito acima, quanto à conduta inicial diante do caso, assinale a alternativa CORRETA.",
    "options": [
      "Iniciar compressões abdominais até a expulsão do corpo estranho",
      "Oferecer oxigênio suplementar e aguardar melhora clínica espontânea",
      "Realizar 5 tapas interescapulares alternadas com 5 compressões torácicas",
      "Encaminhar imediatamente para radiografia de tórax antes de qualquer intervenção"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente consciente com engasgo durante a alimentação, cianose e incapacidade de chorar ou emitir sons: obstrução grave da via aérea por corpo estranho (tosse ineficaz). Em menores de 1 ano, a manobra é alternar 5 golpes nas costas (entre as escápulas, com a criança em decúbito ventral, cabeça mais baixa) com 5 compressões torácicas (com dois dedos no esterno), até a desobstrução ou a perda da consciência — quando se iniciam manobras de RCP.",
    "commentary": "Compressões abdominais (A): a manobra de Heimlich é contraindicada em menores de 1 ano, pelo risco de lesão de vísceras abdominais.\n\nOxigênio e aguardar (B): com obstrução grave, esperar pode levar à parada.\n\nRadiografia antes (D): atrasar a desobstrução com obstrução total é fatal.",
    "reference": "American Heart Association – Pediatric Basic Life Support (2020/2025); Sociedade Brasileira de Pediatria",
    "tags": [
      "obstrução de vias aéreas por corpo estranho",
      "engasgo",
      "suporte básico de vida pediátrico",
      "emergência pediátrica"
    ],
    "tip": "Engasgo grave < 1 ano: 5 golpes nas costas + 5 compressões torácicas; sem Heimlich."
  },
  {
    "id": "feluma2027-58",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 8 anos de idade, escolar, é levado ao pronto atendimento por quadro de urina avermelhada iniciado há 24 horas. A família também observou edema palpebral matinal e redução do volume urinário. Há antecedente de infecção de garganta há cerca de duas semanas. Ao exame físico, apresenta pressão arterial elevada para a idade.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA.",
    "options": [
      "O quadro de hematúria descrito no caso sugere sangramento uretral traumático",
      "O histórico de faringite recente não tem relação com o quadro urinário do atendimento atual",
      "A principal hipótese diagnóstica é infecção urinária baixa sem necessidade de investigação adicional",
      "O quadro clínico é sugestivo de glomerulonefrite aguda, causa de hematúria de origem glomerular"
    ],
    "correctAnswer": 3,
    "explanation": "Escolar com hematúria macroscópica, edema palpebral, oligúria e hipertensão (síndrome nefrítica) cerca de 2 semanas após faringite: glomerulonefrite difusa aguda pós-estreptocócica. A hematúria é de origem glomerular (hemácias dismórficas, cilindros hemáticos). Espera-se C3 baixo, que normaliza em até 8 semanas, e ASLO elevada. O tratamento é de suporte: restrição de sal e água, diurético e anti-hipertensivo.",
    "commentary": "Sangramento uretral traumático (A): não há trauma, e edema, oligúria e hipertensão indicam doença glomerular.\n\nFaringite sem relação (B): a faringite estreptocócica 1–3 semanas antes é justamente o gatilho da GNPE.\n\nInfecção urinária baixa (C): não explica edema, hipertensão e oligúria.",
    "reference": "Sociedade Brasileira de Pediatria – Departamento de Nefrologia: Glomerulonefrite difusa aguda pós-estreptocócica",
    "tags": [
      "glomerulonefrite pós-estreptocócica",
      "síndrome nefrítica",
      "hematúria",
      "nefrologia pediátrica"
    ],
    "tip": "Hematúria + edema + hipertensão 2 semanas após faringite = GNPE (C3 baixo)."
  },
  {
    "id": "feluma2027-59",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, recém-nascido a termo, sem intercorrências perinatais, apresenta, ao primeiro exame físico, deformidade bilateral dos pés, com antepé em adução, retropé em varo e equino, sem correção passiva completa à manipulação. O restante do exame físico é normal.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA.",
    "options": [
      "A ausência de dor e de déficit motor, na avaliação do bebê, afasta malformação ortopédica estrutural",
      "A correção cirúrgica imediata no período neonatal é a conduta inicial de escolha para o quadro descrito",
      "O quadro é compatível com pé torto congênito idiopático, sendo preconizado o tratamento com gessos seriados",
      "O caso se refere à deformidade postural transitória dos pés, sem necessidade de seguimento ortopédico no momento"
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido com pés em adução do antepé, varo do retropé e equino, sem correção passiva completa: pé torto congênito idiopático (equinovaro). O tratamento padrão é o método de Ponseti: manipulações e gessos seriados semanais iniciados nas primeiras semanas de vida, tenotomia percutânea do tendão de Aquiles na maioria dos casos e órtese de abdução (botas com barra) por alguns anos para evitar recidiva.",
    "commentary": "Ausência de dor afasta malformação (A): o pé torto é indolor; a rigidez define a deformidade estrutural.\n\nCirurgia imediata (B): a correção cirúrgica extensa foi substituída pelo método de Ponseti, que é conservador.\n\nDeformidade postural transitória (D): a postural é flexível e se corrige passivamente; aqui não há correção completa.",
    "reference": "Sociedade Brasileira de Ortopedia Pediátrica – Método de Ponseti; Ponseti IV. Congenital Clubfoot",
    "tags": [
      "pé torto congênito",
      "método de Ponseti",
      "ortopedia pediátrica",
      "neonatologia"
    ],
    "tip": "Pé torto rígido: Ponseti (gessos seriados, tenotomia e órtese)."
  },
  {
    "id": "feluma2027-60",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 5 meses de vida, lactente, é levado pela família para consulta de puericultura com queixa de lesões eritematosas pruriginosas em face extensora dos membros e bochechas, com períodos de melhora e piora desde os 3 meses de vida. O lactente está em aleitamento materno exclusivo, sem intercorrências clínicas até então. A mãe refere história pessoal de rinite alérgica. Ao exame, observam-se placas eritematodescamativas com escoriações nas bochechas no momento da consulta.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA.",
    "options": [
      "O quadro é compatível com dermatite de contato por fraldas, comum em áreas extensas dos membros e face",
      "O quadro indica tratamento inicial com antibiótico sistêmico prolongado, independentemente da extensão das lesões",
      "O quadro é sugestivo de infecção cutânea aguda, sendo incomum sua evolução em períodos recorrentes de melhora",
      "O quadro é sugestivo de dermatite atópica, frequentemente associada à história familiar ou pessoal de doenças atópicas"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com lesões eczematosas pruriginosas nas bochechas e superfícies extensoras dos membros desde os 3 meses, com evolução em surtos e história materna de atopia (rinite): dermatite atópica do lactente. A distribuição na face e extensores, poupando a área das fraldas, é típica dessa faixa etária. O tratamento é hidratação diária da pele, banhos curtos e mornos, evitar irritantes e, nas crises, corticoide tópico de baixa potência.",
    "commentary": "Dermatite de contato por fraldas (A): acomete a área da fralda, justamente a região poupada na dermatite atópica.\n\nAntibiótico sistêmico prolongado (B): só há indicação de antibiótico em infecção secundária evidente, e por curto período.\n\nInfecção cutânea aguda (C): a evolução crônica em surtos com prurido e atopia familiar é de dermatite atópica.",
    "reference": "Sociedade Brasileira de Pediatria/ASBAI – Guia prático de atualização em dermatite atópica (2017, atualização 2023)",
    "tags": [
      "dermatite atópica",
      "eczema",
      "alergia",
      "dermatologia pediátrica"
    ],
    "tip": "Lactente com eczema em bochechas e extensores, poupando a fralda: dermatite atópica."
  },
  {
    "id": "feluma2027-61",
    "module": "Saúde Coletiva",
    "text": "A Política Nacional de Educação Popular em Saúde, no âmbito do Sistema Único de Saúde (PNEPS-SUS), foi instituída pela Portaria Ministerial nº 2.761, de 19 de novembro de 2013.\n\nCom relação ao exposto acima, assinale a alternativa que apresenta CORRETAMENTE os objetivos específicos da PNEPS-SUS.",
    "options": [
      "Orientar a participação da população em pesquisas e ensaios clínicos, com seus direitos e deveres",
      "Incentivar o protagonismo popular no enfrentamento dos determinantes e condicionantes sociais de saúde",
      "Fomentar a participação dos beneficiários de planos de saúde nos conselhos de administração das operadoras",
      "Estimular a formação, a comunicação e a produção de conhecimento para a formação da auditoria dos sistemas de saúde"
    ],
    "correctAnswer": 1,
    "explanation": "A Política Nacional de Educação Popular em Saúde (Portaria 2.761/2013) tem como princípios o diálogo, a amorosidade, a problematização, a construção compartilhada do conhecimento, a emancipação e o compromisso com um projeto democrático e popular. Entre seus objetivos estão promover o diálogo entre saberes populares e técnico-científicos, apoiar a participação e o controle social e incentivar o protagonismo popular no enfrentamento dos determinantes e condicionantes sociais da saúde.",
    "commentary": "Participação em pesquisas e ensaios clínicos (A): não é objetivo da PNEPS; a ética em pesquisa é regulada pelo sistema CEP/CONEP.\n\nBeneficiários de planos nos conselhos de operadoras (C): a política trata do SUS e da participação popular, não da saúde suplementar.\n\nFormação para auditoria (D): auditoria é função de gestão, não objetivo da educação popular.",
    "reference": "Ministério da Saúde – Portaria nº 2.761, de 19 de novembro de 2013 (PNEPS-SUS)",
    "tags": [
      "educação popular em saúde",
      "PNEPS-SUS",
      "participação social",
      "políticas de saúde"
    ],
    "tip": "PNEPS-SUS: diálogo entre saberes e protagonismo popular sobre os determinantes sociais."
  },
  {
    "id": "feluma2027-62",
    "module": "Saúde Coletiva",
    "text": "Paciente do sexo feminino, 46 anos de idade, sem sintomas e sem antecedentes pessoais relevantes, procura o Centro de Saúde solicitando a realização de diversos exames para \"garantir que está tudo bem\". Relata ter recebido recomendações de conhecidos para fazer check-up completo anualmente. Após anamnese, avaliação clínica e revisão do histórico, o médico de família conclui que não há indicação de investigação adicional além das ações preventivas recomendadas para a idade e o perfil da paciente.\n\nCom relação ao quadro clínico descrito acima, assinale a alternativa CORRETA que apresenta a conduta mais apropriada.",
    "options": [
      "Encaminhar a paciente para avaliação especializada, a fím de definir um plano preventivo mais abrangente baseado em exames complementares",
      "Programar retorno em curto prazo para reavaliar a demanda da paciente e, caso ela mantenha preocupação, ampliar gradualmente a investigação laboratorial",
      "Solicitar parte dos exames pedidos pela paciente, mesmo sem indicação formal, como estratégia para fortalecer vínculo e reduzir a chance de insatisfação com a consulta",
      "Explicar à paciente os possíveis riscos de exames e intervenções sem indicação, discutir benefícios e limites do rastreamento, propondo apenas medidas preventivas adequadas ao seu perfil"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher assintomática que pede check-up amplo sem indicação. A conduta orientada pela prevenção quaternária é explicar os riscos de exames sem indicação (falsos positivos, sobrediagnóstico, cascata de exames e intervenções), discutir benefícios e limites do rastreamento e oferecer apenas as ações preventivas recomendadas para a idade e o perfil — em decisão compartilhada e respeitando a autonomia.",
    "commentary": "Encaminhar ao especialista para plano preventivo abrangente (A): não há indicação, e o encaminhamento gera custos e intervenções desnecessárias.\n\nAmpliar a investigação se ela continuar preocupada (B): a ansiedade se trata com escuta e informação, não com exames.\n\nPedir parte dos exames para fortalecer o vínculo (C): exames sem indicação expõem a paciente a dano e não constroem vínculo.",
    "reference": "Jamoulle M. Prevenção quaternária; Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "prevenção quaternária",
      "check-up",
      "rastreamento",
      "medicina de família e comunidade"
    ],
    "tip": "Pedido de check-up sem indicação: informar riscos e oferecer só o rastreamento indicado (P4)."
  },
  {
    "id": "feluma2027-63",
    "module": "Saúde Coletiva",
    "text": "Paciente do sexo feminino, 52 anos de idade, procura a Unidade Básica de Saúde por dor lombar há 3 semanas. Após avaliação clínica sem sinais de gravidade, a médica pergunta como a dor tem interferido em sua rotina. A paciente relata medo de perder o emprego, dificuldade para cuidar da mãe idosa e receio de que o problema \"piore de vez\". A profissional explora essas preocupações, discute possibilidades de manejo e define, junto com a paciente, um plano terapêutico compatível com sua rotina e prioridades.\n\nCom relação ao quadro clínico descrito acima e considerando a abordagem clínica mais adequada na Medicina de Família e Comunidade, assinale a alternativa CORRETA.",
    "options": [
      "Considerar o impacto da queixa na vida da paciente, explorar medos e expectativas e construir o plano terapêutico de forma compartilhada",
      "Direcionar a consulta para investigação da sobrecarga familiar e ocupacional, pois esses fatores passam a ser o foco principal do atendimento",
      "Centrar a consulta na exclusão de causas estruturais de lombalgia, programando revisão do tratamento após complementação propedêutica, se persistirem os sintomas",
      "Priorizar a orientação padronizada sobre analgesia e retorno se houver piora, pois a ausência de sinais de gravidade reduz a necessidade de aprofundar outros aspectos da consulta"
    ],
    "correctAnswer": 0,
    "explanation": "A situação descreve o Método Clínico Centrado na Pessoa: explorar a saúde, a doença e a experiência da doença (sentimentos, ideias, impacto no funcionamento e expectativas — SIFE), entender a pessoa como um todo e elaborar um plano conjunto de manejo. A médica avaliou o impacto da dor na rotina, explorou medos e expectativas e construiu o plano junto com a paciente.",
    "commentary": "Direcionar para a sobrecarga familiar e ocupacional (B): o contexto é importante, mas não substitui o foco na queixa; o método integra os dois.\n\nCentrar na exclusão de causas estruturais (C): sem sinais de alerta, a investigação estrutural não é necessária, e isso ignora a experiência da paciente.\n\nOrientação padronizada (D): a ausência de gravidade não dispensa compreender a experiência e pactuar o plano.",
    "reference": "Stewart M et al. Medicina centrada na pessoa: transformando o método clínico, 3ª ed.",
    "tags": [
      "método clínico centrado na pessoa",
      "decisão compartilhada",
      "lombalgia",
      "medicina de família e comunidade"
    ],
    "tip": "MCCP: explorar sentimentos, ideias, funcionamento e expectativas; plano construído junto."
  },
  {
    "id": "feluma2027-64",
    "module": "Saúde Coletiva",
    "text": "Em uma Unidade de Saúde da Família, a equipe analisa os resultados de seus indicadores e identifica desempenho satisfatório na cobertura vacinal e no acompanhamento de pessoas com hipertensão arterial sistêmica. Em contrapartida, observa-se a baixa proporção de usuários com Diabetes Mellitus com registro atualizado de avaliação clínica periódica além de inconsistências entre os registros das consultas médicas, de enfermagem e de saúde bucal. Durante a reunião, os profissionais discutem diferentes estratégias para responder aos achados.\n\nCom relação ao uso dos resultados da avaliação da qualidade na Atenção Primária à Saúde, assinale a alternativa CORRETA.",
    "options": [
      "Centralizar a revisão dos registros em um profissional da equipe, a fim de reduzir divergências entre as informações registradas",
      "Substituir o acompanhamento clínico periódico por atendimentos em grupo, priorizando o aumento da produtividade assistencial",
      "Reorganizar a agenda, realocando profissionais de ações com resultados satisfatórios para priorizar indicadores com menor desempenho",
      "Reorganizar o processo de trabalho, com pactuação de responsabilidades, qualificação dos registros e monitoramento dos usuários com acompanhamento incompleto"
    ],
    "correctAnswer": 3,
    "explanation": "Na Atenção Primária, os resultados de avaliação da qualidade servem para orientar a melhoria contínua do processo de trabalho, não para punir ou redistribuir de forma mecânica. Diante de baixa cobertura no acompanhamento do diabetes e registros inconsistentes, a resposta adequada é reorganizar o processo de trabalho em equipe: pactuar responsabilidades, qualificar os registros (prontuário eletrônico, padronização) e monitorar ativamente os usuários com acompanhamento incompleto (busca ativa).",
    "commentary": "Centralizar a revisão dos registros em um profissional (A): a qualidade dos registros é responsabilidade de toda a equipe.\n\nTrocar acompanhamento individual por grupos para aumentar produtividade (B): grupos complementam, mas não substituem a avaliação clínica periódica.\n\nRealocar profissionais das ações com bons resultados (C): pode comprometer o que já funciona; o problema é de processo, não de alocação.",
    "reference": "Ministério da Saúde – Política Nacional de Atenção Básica (Portaria 2.436/2017); Programa de melhoria do acesso e da qualidade",
    "tags": [
      "avaliação da qualidade",
      "atenção primária à saúde",
      "processo de trabalho",
      "gestão em saúde"
    ],
    "tip": "Indicador ruim na APS: reorganizar o processo de trabalho com a equipe, não punir nem realocar."
  },
  {
    "id": "feluma2027-65",
    "module": "Saúde Coletiva",
    "text": "De acordo com o Artigo 198 da Constituição Federal de 1988, as ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único.\n\nCom relação ao exposto acima, é CORRETO afirmar que o Sistema Único de Saúde (SUS) é organizado de acordo com a seguinte diretriz:",
    "options": [
      "centralização política e administrativa na esfera federal",
      "atendimento focado em ações curativas de alta complexidade",
      "descentralização, com direção única em cada esfera de governo",
      "proibição da participação da iniciativa privada, mesmo de forma complementar"
    ],
    "correctAnswer": 2,
    "explanation": "O artigo 198 da Constituição Federal estabelece que as ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado segundo três diretrizes: descentralização, com direção única em cada esfera de governo; atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e participação da comunidade.",
    "commentary": "Centralização na esfera federal (A): a diretriz é a descentralização.\n\nFoco em ações curativas de alta complexidade (B): a diretriz é o atendimento integral, com prioridade para as ações preventivas.\n\nProibição da iniciativa privada (D): o artigo 199 permite a participação privada de forma complementar ao SUS.",
    "reference": "Constituição Federal de 1988, artigos 196 a 200",
    "tags": [
      "SUS",
      "constituição federal",
      "diretrizes do SUS",
      "legislação do SUS"
    ],
    "tip": "Art. 198: descentralização, atendimento integral e participação da comunidade."
  },
  {
    "id": "feluma2027-66",
    "module": "Saúde Coletiva",
    "text": "Paciente do sexo masculino, 49 anos de idade, procura uma unidade de atenção primária por episódios recorrentes de tontura, palpitações e sensação de mal-estar há cerca de 3 meses. Já realizou atendimentos esporádicos em diferentes serviços, com exames sem alterações relevantes. Na consulta atual, relata medo de estar com “um problema grave no coração”, piora dos sintomas em períodos de sobrecarga no trabalho e dificuldade para manter suas atividades diárias. A médica revisa os registros disponíveis, recupera informações de atendimentos prévios, explora a experiência do paciente com os sintomas e pactua acompanhamento sequencial, com reavaliações programadas e plano de cuidado progressivo.\n\nCom relação ao quadro clínico descrito acima e considerando a condução mais adequada para o caso, assinale a alternativa CORRETA.",
    "options": [
      "Priorizar encaminhamento para cardiologia, considerando a recorrência dos sintomas e a ausência de definição diagnóstica nos atendimentos prévios",
      "Direcionar a consulta para a investigação dos fatores emocionais e ocupacionais relacionados aos sintomas, definindo a partir deles a principal direção do plano de cuidado",
      "Concentrar a consulta na exclusão de doenças orgânicas graves, adiando a exploração do contexto de vida e da experiência do paciente até que haja nova definição diagnóstica",
      "Utilizar o acompanhamento ao longo do tempo, a integração das informações prévias e a compreensão do contexto do paciente como recursos centrais para qualificar o raciocínio clínico e o plano de cuidado"
    ],
    "correctAnswer": 3,
    "explanation": "Sintomas recorrentes sem diagnóstico definido após vários atendimentos fragmentados. A médica usa ferramentas centrais da Medicina de Família: longitudinalidade e demora permitida (o tempo como recurso diagnóstico, com reavaliações programadas), integração das informações prévias (coordenação do cuidado) e compreensão da experiência e do contexto do paciente. Esses recursos qualificam o raciocínio clínico, evitam excesso de exames e encaminhamentos e permitem um plano de cuidado progressivo.",
    "commentary": "Priorizar encaminhamento à cardiologia (A): exames anteriores sem alterações e ausência de sinais de gravidade não justificam encaminhamento imediato; a APS pode conduzir o caso.\n\nDirecionar o plano pelos fatores emocionais (B): o contexto é importante, mas assumir causa emocional precocemente é tão arriscado quanto ignorá-la; o método integra as dimensões.\n\nAdiar a exploração do contexto (C): separar o biológico do contexto prejudica o raciocínio e o vínculo.",
    "reference": "Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed.; Starfield B. Atenção Primária",
    "tags": [
      "longitudinalidade",
      "demora permitida",
      "medicina de família e comunidade",
      "sintomas sem explicação médica"
    ],
    "tip": "Na APS, o tempo e a continuidade são ferramentas diagnósticas."
  },
  {
    "id": "feluma2027-67",
    "module": "Saúde Coletiva",
    "text": "A Lei nº 8.142, de 28 de dezembro de 1990, dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS). De acordo com a Lei nº 8.142/1990, o Sistema Único de Saúde (SUS) contará, em cada esfera de governo, sem prejuízo das funções do Poder Legislativo, com instâncias colegiadas específicas para garantir a participação da comunidade.\n\nCom relação a essas instâncias, assinale a alternativa CORRETA.",
    "options": [
      "As Conferências de Saúde reúnem-se ordinariamente a cada 2 anos para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde",
      "O Conselho Nacional de Secretários de Saúde (CONASS) e o Conselho Nacional de Secretarias Municipais de Saúde (CONASEMS) são majoritários nos Conselhos Estaduais",
      "O Conselho de Saúde, em caráter permanente e deliberativo, atua na formulação de estratégias e no controle da execução da política de saúde na instância correspondente",
      "A representação dos usuários nos Conselhos de Saúde e Conferências será de 25% (vinte e cinco por cento), sendo o restante distribuído entre governo, prestadores e profissionais"
    ],
    "correctAnswer": 2,
    "explanation": "A Lei 8.142/1990 define duas instâncias colegiadas de participação da comunidade em cada esfera de governo: a Conferência de Saúde, que se reúne a cada 4 anos para avaliar a situação de saúde e propor diretrizes; e o Conselho de Saúde, de caráter permanente e deliberativo, que atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros. A representação dos usuários é paritária em relação ao conjunto dos demais segmentos (50%).",
    "commentary": "Conferências a cada 2 anos (A): o intervalo legal é de 4 anos.\n\nCONASS e CONASEMS majoritários nos conselhos estaduais (B): eles têm representação no Conselho Nacional de Saúde, sem maioria; e os usuários têm 50% das vagas.\n\nUsuários com 25% (D): a representação dos usuários é paritária, ou seja, 50%.",
    "reference": "Lei nº 8.142, de 28 de dezembro de 1990; Resolução CNS nº 453/2012",
    "tags": [
      "lei 8.142/1990",
      "controle social",
      "conselhos de saúde",
      "conferências de saúde",
      "legislação do SUS"
    ],
    "tip": "Lei 8.142: Conferência a cada 4 anos; Conselho permanente e deliberativo; usuários = 50%."
  },
  {
    "id": "feluma2027-68",
    "module": "Saúde Coletiva",
    "text": "Em uma determinada região, usuários com insuficiência cardíaca eram acompanhados de forma desarticulada; profissionais da atenção primária desconheciam os atendimentos realizados em outros serviços, exames eram repetidos e o retorno após as internações ocorria sem plano assistencial compartilhado. Após a revisão do processo de trabalho, passou-se a adotar uma comunicação sistemática entre os serviços, com definição de fluxos assistenciais e acompanhamento longitudinal do usuário pela rede regionalizada.\n\nCom relação ao exposto acima, assinale a alternativa CORRETA que apresenta a mudança que ocorreu na organização do cuidado.",
    "options": [
      "Redefinição da atenção especializada como instância central de coordenação clínica dos usuários com condições crônicas",
      "Fortalecimento da regulação do acesso como principal estratégia de ordenação do percurso assistencial dos usuários na região",
      "Reorganização da assistência por níveis de atenção articulados de forma sequencial, conforme a complexidade crescente das necessidades do usuário",
      "Implementação de organização em rede entre pontos de atenção com distintas densidades tecnológicas, articulados para assegurar continuidade do cuidado"
    ],
    "correctAnswer": 3,
    "explanation": "A mudança descrita — comunicação sistemática entre serviços, fluxos definidos e acompanhamento longitudinal pela rede regionalizada — corresponde à organização em Redes de Atenção à Saúde (Portaria 4.279/2010): pontos de atenção com diferentes densidades tecnológicas, sem hierarquia entre si, articulados horizontalmente e coordenados pela APS, para garantir a continuidade do cuidado.",
    "commentary": "Atenção especializada como centro da coordenação (A): nas redes, o centro de comunicação e coordenação é a APS.\n\nRegulação do acesso como principal estratégia (B): a regulação é um sistema de apoio da rede, não sua essência.\n\nNíveis de atenção sequenciais por complexidade (C): é o modelo hierárquico piramidal que as redes buscam superar, com organização poliárquica.",
    "reference": "Ministério da Saúde – Portaria nº 4.279/2010 (Redes de Atenção à Saúde); Mendes EV. As redes de atenção à saúde (OPAS, 2011)",
    "tags": [
      "redes de atenção à saúde",
      "continuidade do cuidado",
      "coordenação do cuidado",
      "SUS"
    ],
    "tip": "Redes de atenção: poliárquicas, horizontais, coordenadas pela APS — não pirâmide."
  },
  {
    "id": "feluma2027-69",
    "module": "Saúde Coletiva",
    "text": "Em uma Unidade Básica de Saúde, a equipe identifica que pessoas idosas restritas ao domicílio e usuários com maior vulnerabilidade social enfrentam barreiras para acesso às ações ofertadas pela unidade. Diante dessa situação, a equipe passa a adotar ofertas diferenciadas de cuidado, com priorização de visitas domiciliares e adequação da agenda segundo grau de vulnerabilidade e barreiras de acesso.\n\nCom relação ao exposto acima e com base nos princípios da Atenção Primária à Saúde, assinale a alternativa CORRETA que corresponde diretamente ao princípio expresso nessa organização do cuidado.",
    "options": [
      "Equidade",
      "Universalidade",
      "Participação social",
      "Coordenação do cuidado"
    ],
    "correctAnswer": 0,
    "explanation": "Oferecer cuidados diferenciados conforme as necessidades — priorizando visitas domiciliares e ajustando a agenda segundo a vulnerabilidade e as barreiras de acesso — é a aplicação do princípio da equidade: tratar desigualmente os desiguais, alocando mais recursos a quem tem mais necessidade, para reduzir desigualdades.",
    "commentary": "Universalidade (B): é o direito de todos ao acesso, sem distinção; não implica tratar de forma diferente segundo a necessidade.\n\nParticipação social (C): é o envolvimento da comunidade na gestão, por conselhos e conferências.\n\nCoordenação do cuidado (D): é a integração e a continuidade entre os pontos de atenção.",
    "reference": "Lei nº 8.080/1990; Política Nacional de Atenção Básica (Portaria 2.436/2017)",
    "tags": [
      "equidade",
      "princípios do SUS",
      "atenção primária à saúde",
      "vulnerabilidade"
    ],
    "tip": "Tratar diferente quem tem necessidade diferente = equidade."
  },
  {
    "id": "feluma2027-70",
    "module": "Saúde Coletiva",
    "text": "Os sistemas de saúde podem ser organizados segundo diferentes combinações entre financiamento, cobertura populacional, papel do Estado e participação do setor privado. No Brasil, o Sistema Único de Saúde (SUS) foi instituído com base constitucional universal, em coexistência com setor suplementar destinado à assistência por planos e seguros de saúde e com a possibilidade de contratação de prestadores privados pelo poder público.\n\nCom relação aos modelos de sistema de saúde e à organização do Sistema Único de Saúde (SUS)\n\nbrasileiro, assinale a alternativa CORRETA.",
    "options": [
      "A garantia formal de acesso universal descaracteriza diferenças entre o SUS e o setor suplementar no sistema de saúde brasileiro",
      "A presença de prestadores privados contratados pelo poder público indica que a organização do SUS se baseia predominantemente em seguro social contributivo",
      "A coexistência entre o SUS e o setor privado faz do sistema de saúde brasileiro um modelo residual de assistência pública, voltado preferencialmente aos grupos sem cobertura suplementar",
      "A previsão constitucional de acesso universal aproxima o SUS dos sistemas universais de saúde, ainda que o sistema de saúde brasileiro mantenha coexistência com setor suplementar e prestação privada complementar"
    ],
    "correctAnswer": 3,
    "explanation": "O SUS foi concebido como sistema universal, financiado por impostos (modelo beveridgiano, como o NHS britânico), com acesso como direito de cidadania. Na prática, o sistema brasileiro é segmentado: coexiste com um setor suplementar (planos e seguros) que cobre cerca de um quarto da população e com prestadores privados contratados de forma complementar. Mesmo assim, a garantia constitucional de acesso universal aproxima o SUS dos sistemas universais.",
    "commentary": "Universalidade eliminaria as diferenças com o setor suplementar (A): os dois setores coexistem com lógicas de financiamento e acesso distintas.\n\nPrestadores contratados indicam seguro social contributivo (B): a contratação de prestadores não muda a fonte de financiamento, que é tributária, não contributiva.\n\nModelo residual (C): no residual o Estado atende só quem não pode pagar; o SUS é universal por lei e atende a todos.",
    "reference": "Paim J et al. O sistema de saúde brasileiro: história, avanços e desafios, The Lancet 2011; Giovanella L et al. Políticas e Sistema de Saúde no Brasil",
    "tags": [
      "sistemas de saúde",
      "SUS",
      "saúde suplementar",
      "modelos de sistemas de saúde"
    ],
    "tip": "SUS = universal (beveridgiano) na lei, mas o sistema brasileiro é segmentado na prática."
  },
  {
    "id": "feluma2027-71",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família passou a atuar em um território que, nos últimos dois anos, teve crescimento populacional acelerado, surgimento de novos loteamentos, aumento da circulação diária de trabalhadores e expansão de áreas de ocupação precária. Apesar de manter atualizado o cadastro da população residente, a equipe identificou dificuldade para acompanhar parte dos usuários, concentração de ações nas áreas mais próximas da unidade e baixa efetividade de visitas domiciliares em segmentos específicos do território. Em reunião de planejamento, os profissionais concluíram que o cadastro territorial, isoladamente, não explicava a dinâmica local nem orientava de modo suficiente a organização do cuidado.\n\nCom relação ao exposto acima e ao conceito de territorialização na Atenção Primária à Saúde, assinale a alternativa CORRETA.",
    "options": [
      "A territorialização tem como objetivo principal uniformizar a oferta de ações entre microáreas, reduzindo diferenças operacionais no trabalho da equipe",
      "A territorialização consiste na análise contínua das dinâmicas do território, orientando a identificação de necessidades, barreiras de acesso e prioridades do cuidado",
      "A territorialização corresponde ao cadastro da população adscrita e à delimitação espacial da área, sendo suficiente para orientar o planejamento das ações da equipe",
      "A territorialização organiza o planejamento a partir da distribuição espacial dos usuários cadastrados, permitindo ajustar as ações conforme a frequência de uso dos serviços"
    ],
    "correctAnswer": 1,
    "explanation": "Territorialização não é só cadastrar e delimitar área: é um processo contínuo de reconhecimento do território vivo — sua dinâmica populacional, social, econômica, ambiental e de mobilidade, os equipamentos sociais, os riscos e as vulnerabilidades. Essa análise orienta a identificação de necessidades, barreiras de acesso e prioridades, permitindo planejar ações de acordo com a realidade.",
    "commentary": "Uniformizar as ações entre microáreas (A): a territorialização serve justamente para diferenciar as ações conforme as necessidades locais.\n\nCadastro e delimitação bastam (C): o próprio caso mostra que o cadastro, isoladamente, não explicava a dinâmica local.\n\nPlanejamento pela frequência de uso dos serviços (D): planejar pela demanda espontânea ignora quem não acessa a unidade, justamente os mais vulneráveis.",
    "reference": "Ministério da Saúde – Política Nacional de Atenção Básica (2017); Monken M, Barcellos C. Vigilância em saúde e território utilizado",
    "tags": [
      "territorialização",
      "atenção primária à saúde",
      "planejamento em saúde",
      "estratégia Saúde da Família"
    ],
    "tip": "Território é vivo: territorializar é analisar continuamente sua dinâmica, não só cadastrar."
  },
  {
    "id": "feluma2027-72",
    "module": "Saúde Coletiva",
    "text": "Em um território adscrito à Atenção Primária à Saúde, a equipe identifica aumento do consumo de alimentos ultraprocessados entre adolescentes, redução do uso de espaços públicos para atividade física e crescimento de episódios de violência no entorno escolar. Em reunião com a gestão local, foram propostas diferentes estratégias para enfrentamento do problema.\n\nCom relação à promoção da saúde no âmbito do Sistema Único de Saúde, assinale a alternativa CORRETA.",
    "options": [
      "Ampliar a identificação clínica individual de fatores de risco cardiovasculares entre adolescentes acompanhados pela unidade",
      "Implantar rastreamento periódico de hipertensão arterial sistêmica e Diabetes Mellitus entre adolescentes matriculados nas escolas do território",
      "Encaminhar adolescentes com excesso de peso para acompanhamento ambulatorial especializado, com prioridade para avaliação endocrinológica",
      "Desenvolver ação intersetorial com escola, assistência social e gestão local para qualificar ambientes comunitários, ampliar oportunidades de práticas corporais e fortalecer ações de convivência"
    ],
    "correctAnswer": 3,
    "explanation": "Os problemas descritos (ultraprocessados, pouco uso de espaços públicos para atividade física, violência no entorno escolar) são determinantes sociais e ambientais da saúde. A promoção da saúde, pela Política Nacional de Promoção da Saúde, atua sobre esses determinantes por meio da intersetorialidade, da participação social e da criação de ambientes saudáveis — articulando escola (Programa Saúde na Escola), assistência social e gestão local para qualificar espaços, ampliar práticas corporais e fortalecer a convivência.",
    "commentary": "Identificação clínica individual de fatores de risco (A), rastreamento de hipertensão e diabetes em adolescentes (B) e encaminhamento ao endocrinologista (C): são ações individuais de prevenção ou assistência, que não atuam sobre os determinantes coletivos; o rastreamento de diabetes em adolescentes sem fatores de risco, além disso, não é recomendado.",
    "reference": "Ministério da Saúde – Política Nacional de Promoção da Saúde (Portaria de Consolidação nº 2/2017); Carta de Ottawa (1986)",
    "tags": [
      "promoção da saúde",
      "intersetorialidade",
      "determinantes sociais da saúde",
      "programa Saúde na Escola"
    ],
    "tip": "Promoção da saúde = agir nos determinantes, com intersetorialidade e ambientes saudáveis."
  },
  {
    "id": "feluma2027-73",
    "module": "Saúde Coletiva",
    "text": "Paciente do sexo feminino, 14 anos de idade, é levada à consulta pela mãe devido a queixas recorrentes de dor abdominal e cefaleia, sem alterações em avaliações clínicas anteriores. Durante o atendimento, a médica de família observa que a adolescente responde pouco, evita contato visual e permanece em silêncio quando a mãe relata conflitos frequentes em casa após a separação dos pais.\n\nCom relação ao quadro clínico descrito acima, considerando a abordagem da Medicina de Família e Comunidade, assinale a alternativa CORRETA que apresenta a conduta mais apropriada.",
    "options": [
      "Investigar a relação entre a adolescente e a mãe, considerando que os conflitos familiares relatados podem estar relacionados ao sofrimento apresentado",
      "Manter seguimento clínico das queixas apresentadas, com reavaliação periódica da evolução dos sintomas e da repercussão funcional no cotidiano da adolescente",
      "Explorar a estrutura e a dinâmica familiar, buscando compreender relações, papéis e acontecimentos relevantes para o sofrimento apresentado pela adolescente",
      "Ampliar a escuta da adolescente e avaliar a necessidade de acompanhamento em saúde mental, conforme a persistência dos sintomas e o impacto emocional identificado"
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com queixas somáticas recorrentes sem causa orgânica e sinais de sofrimento ligados a conflitos familiares após a separação dos pais. Na Medicina de Família, a abordagem familiar entende o sintoma no contexto do sistema familiar: explorar a estrutura e a dinâmica da família (relações, papéis, acontecimentos marcantes, fase do ciclo de vida), com ferramentas como genograma e ecomapa, para compreender o sofrimento e planejar o cuidado. Também é importante garantir um momento de escuta a sós com a adolescente.",
    "commentary": "Investigar a relação entre adolescente e mãe (A): é parte da abordagem, mas restrita a uma díade; a dinâmica familiar inclui a separação, o pai e outros membros.\n\nManter seguimento clínico das queixas (B): ignora os sinais de sofrimento ligados ao contexto familiar.\n\nAmpliar a escuta e avaliar saúde mental conforme a persistência (D): é útil, mas adia a compreensão do contexto familiar que está na origem do sofrimento.",
    "reference": "Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed. (abordagem familiar); McGoldrick M, Gerson R. Genogramas",
    "tags": [
      "abordagem familiar",
      "saúde do adolescente",
      "sintomas somáticos",
      "medicina de família e comunidade"
    ],
    "alert": "As alternativas A, C e D descrevem condutas razoáveis; o gabarito prefere a abordagem familiar mais ampla (C)."
  },
  {
    "id": "feluma2027-74",
    "module": "Saúde Coletiva",
    "text": "Em uma Unidade de Saúde da Família, a equipe observa um aumento de usuários com dor crônica, sofrimento psíquico comum e limitações funcionais leves a moderadas, com repetidas consultas individuais e baixa adesão às condutas propostas. Após a implantação das Equipes Multiprofissionais na Atenção Primária à Saúde (eMulti) no município, a gestão local propõe que a equipe multiprofissional passe a receber, em agenda própria, os usuários encaminhados pela equipe de referência, com redução da participação em reuniões de caso e nas ações coletivas do território. Parte da equipe argumenta que essa reorganização tende a aumentar o número de atendimentos individuais, mas pode fragmentar o cuidado e enfraquecer a corresponsabilização pelos usuários acompanhados.\n\nCom relação à atuação da eMulti na Atenção Primária à Saúde, assinale a alternativa CORRETA.",
    "options": [
      "Definir que a eMulti concentre seu trabalho nos usuários com maior frequência de consultas, assumindo o seguimento desses casos até a estabilização clínica, com participação pontual da equipe de referência",
      "Priorizar o atendimento direto dos usuários pela eMulti como estratégia principal de ampliação do acesso, deixando ações coletivas e reuniões de equipe em segundo plano até redução da demanda reprimida",
      "Organizar atendimentos individuais da eMulti a partir das demandas mais frequentes da unidade, com discussão compartilhada restrita aos casos em que a equipe de referência solicitar revisão do projeto terapêutico",
      "Organizar a atuação da eMulti de forma integrada à equipe de referência, com discussão regular de casos, atendimentos compartilhados, apoio técnico-pedagógico e construção conjunta do cuidado conforme necessidades do território"
    ],
    "correctAnswer": 3,
    "explanation": "As Equipes Multiprofissionais na APS (eMulti, Portaria GM/MS 635/2023), assim como os antigos NASF, atuam no apoio matricial: trabalham integradas às equipes de referência, com discussão de casos, atendimentos e visitas compartilhados, construção conjunta de projetos terapêuticos singulares, ações coletivas no território e apoio técnico-pedagógico. Transformá-las em ambulatório de especialidades com agenda própria fragmenta o cuidado e enfraquece a corresponsabilização.",
    "commentary": "eMulti assumindo o seguimento dos casos mais frequentes (A), atendimento direto como estratégia principal (B) e atendimentos individuais com discussão restrita (C): todas convertem a eMulti em serviço de referência ambulatorial, contrariando a lógica de apoio matricial e de cuidado compartilhado com a equipe de referência.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 635/2023 (eMulti); Campos GWS, Domitti AC. Apoio matricial e equipe de referência",
    "tags": [
      "eMulti",
      "apoio matricial",
      "atenção primária à saúde",
      "trabalho em equipe"
    ],
    "tip": "eMulti = apoio matricial integrado à equipe de referência, não ambulatório de especialidades."
  },
  {
    "id": "feluma2027-75",
    "module": "Saúde Coletiva",
    "text": "A Portaria do Gabinete do Ministro da Saúde, GM/MS nº 1.999/2023, atualizou a Lista de Doenças Relacionadas ao Trabalho (LDRT).\n\nCom relação às principais mudanças e às inclusões trazidas pela normativa no âmbito do Sistema Único de Saúde (SUS), assinale a alternativa CORRETA.",
    "options": [
      "A nova portaria reduziu o número de patologias listadas para simplificar o diagnóstico nos Centros de Referência em Saúde do Trabalhador (CEREST)",
      "As doenças mentais e comportamentais foram excluídas da lista para serem tratadas exclusivamente pelas políticas de saúde mental, sem nexo causal com o trabalho",
      "A lista incluiu transtornos mentais, como o burnout (síndrome do esgotamento profissional), além de doenças infecciosas como a covid-19, quando relacionada ao trabalho",
      "A LDRT atualizada pela Portaria n. 1.999/2023 destina-se apenas aos trabalhadores do setor privado, não tendo validade para servidores públicos no âmbito do Sistema Único de Saúde (SUS)"
    ],
    "correctAnswer": 2,
    "explanation": "A Portaria GM/MS 1.999/2023 atualizou a Lista de Doenças Relacionadas ao Trabalho, que não era revista desde 1999. A nova lista ampliou o número de agentes e doenças e incluiu, entre outras, transtornos mentais relacionados ao trabalho — como a síndrome de burnout, além de ansiedade, depressão e tentativa de suicídio relacionados ao trabalho — e a covid-19 relacionada ao trabalho. A LDRT orienta a vigilância e o reconhecimento do nexo no SUS para todos os trabalhadores.",
    "commentary": "Reduziu o número de patologias (A): a lista foi ampliada.\n\nExcluiu doenças mentais (B): ao contrário, incluiu vários transtornos mentais, como o burnout.\n\nVale só para o setor privado (D): a LDRT se aplica a todos os trabalhadores, formais ou informais, públicos ou privados.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 1.999, de 27 de novembro de 2023",
    "tags": [
      "saúde do trabalhador",
      "doenças relacionadas ao trabalho",
      "burnout",
      "vigilância em saúde"
    ],
    "tip": "LDRT 2023: incluiu burnout e covid-19 relacionada ao trabalho."
  }
];
