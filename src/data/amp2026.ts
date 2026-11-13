import { Question } from '../types';

// AMP 2026 (PR) — residência médica (acesso direto). 100 questões, 5 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const AMP_2026_QUESTIONS: Question[] = [
  {
    "id": "amp2026-1",
    "topography": "1.2",
    "topic": "Conjuntivite",
    "module": "Pediatria",
    "text": "Menina de 4 anos apresenta há três dias conjuntivite unilateral à esquerda, com edema e hiperemia, mas indolor e sem secreção. Também apresenta linfadenopatia pré-auricular ipsilateral. Nega febre ou sintomas respiratórios. Não fez viagem recente, tem gato e cachorro em casa; nega casos semelhantes na família. Qual o diagnóstico mais provável?",
    "options": [
      "Glaucoma.",
      "Conjuntivite por adenovírus.",
      "Conjuntivite por Epstein-Barr.",
      "Ceratoconjuntivite por esporotricose.",
      "Síndrome oculoglandular de Parinaud."
    ],
    "correctAnswer": 4,
    "explanation": "Conjuntivite unilateral, indolor e sem secreção, com linfadenopatia pré-auricular do mesmo lado, em criança sem febre e que convive com gato: síndrome oculoglandular de Parinaud, forma atípica da doença da arranhadura do gato (Bartonella henselae). A bactéria é inoculada na conjuntiva (por mãos contaminadas ou lambedura) e forma um granuloma conjuntival com linfonodo satélite.",
    "commentary": "Glaucoma (A): olho vermelho com dor, baixa visual e, no congênito, fotofobia e córnea aumentada; não causa adenopatia.\n\nAdenovírus (B): costuma ser bilateral (ou se tornar), com secreção aquosa abundante, sintomas respiratórios e contactantes doentes.\n\nEpstein-Barr (C): a conjuntivite acompanha o quadro de mononucleose (febre, faringite, adenomegalia generalizada).\n\nEsporotricose ocular (D): rara, também pode dar quadro oculoglandular, mas o contato com gatos e o quadro clássico apontam para Bartonella; não há lesão nodular ou ulcerada descrita.",
    "reference": "Nelson Textbook of Pediatrics — Doença da arranhadura do gato / SBP",
    "tags": [
      "síndrome oculoglandular de Parinaud",
      "doença da arranhadura do gato",
      "bartonelose",
      "conjuntivite"
    ],
    "tip": "Conjuntivite unilateral + linfonodo pré-auricular + gato = Parinaud (Bartonella)."
  },
  {
    "id": "amp2026-2",
    "module": "Pediatria",
    "text": "A hérnia diafragmática congênita é a protrusão do conteúdo abdominal para dentro do tórax através de anomalia do diafragma. Sobre isso analise as afirmativas abaixo.\nI – Em 90% dos casos ocorre na porção posterolateral do diafragma, chamada de hérnia de Bochdalek, sendo a maioria do lado esquerdo.\nII – As hérnias anteriores são chamadas de H. de Morgagni e são bem menos comuns.\nIII – A principal causa de morbimortalidade é a hipoplasia pulmonar.\n\nAssinale a alternativa correta.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 3,
    "explanation": "As três afirmativas estão corretas.\n\nI: cerca de 85–90% das hérnias diafragmáticas congênitas são posterolaterais (Bochdalek), e a maioria à esquerda.\nII: as hérnias anteriores, retroesternais (Morgagni), são bem menos frequentes.\nIII: o principal determinante de morbimortalidade é a hipoplasia pulmonar, com a hipertensão pulmonar persistente associada.",
    "commentary": "I e II corretas, III incorreta (A): a III está correta.\n\nI e III corretas, II incorreta (B): a II está correta.\n\nII e III corretas, I incorreta (C): a I está correta.\n\nTodas incorretas (E): as três estão corretas.",
    "reference": "Nelson Textbook of Pediatrics / Ashcraft's Pediatric Surgery",
    "tags": [
      "hérnia diafragmática congênita",
      "hérnia de Bochdalek",
      "hipoplasia pulmonar"
    ],
    "tip": "Bochdalek: posterolateral, esquerda, 90%. O que mata é a hipoplasia pulmonar."
  },
  {
    "id": "amp2026-3",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Pediatria",
    "text": "A indicação de albumina humana no edema nefrótico grave deve ser individualizada, não sendo possível recomendar o seu uso sistemático.\nI – A infusão de albumina em pacientes hipervolêmicos deve ser feita com cautela.\nPORQUE\nII – Pode exacerbar a volemia, causando insuficiência cardíaca, edema pulmonar e piora da hipertensão arterial, sobretudo quando em infusão rápida.\n\nAssinale a alternativa correta.",
    "options": [
      "Ambas afirmativas estão corretas e a II é uma justificativa correta da I.",
      "Ambas afirmativas estão corretas e a II não é uma justificativa correta da I.",
      "A afirmativa I está correta e a II incorreta.",
      "A afirmativa I está incorreta e a II correta.",
      "Ambas estão incorretas."
    ],
    "correctAnswer": 0,
    "explanation": "A albumina na síndrome nefrótica é reservada para edema grave e refratário, sobretudo com sinais de hipovolemia. Em pacientes hipervolêmicos, a infusão aumenta o volume intravascular e pode precipitar insuficiência cardíaca, edema pulmonar e piora da hipertensão, principalmente quando feita rápido.\n\nAs duas afirmativas estão corretas, e a II explica por que a I recomenda cautela.",
    "commentary": "II não justifica I (B): a II é exatamente o motivo da cautela da I.\n\nII incorreta (C): o risco de hipervolemia e edema pulmonar é real.\n\nI incorreta (D): a cautela em hipervolêmicos é recomendada.\n\nAmbas incorretas (E): ambas estão corretas.",
    "reference": "SBP — Síndrome nefrótica idiopática na infância / KDIGO 2021",
    "tags": [
      "síndrome nefrótica",
      "albumina humana",
      "edema"
    ],
    "tip": "Albumina no nefrótico: só em casos selecionados; em hipervolêmico pode causar edema pulmonar."
  },
  {
    "id": "amp2026-4",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Pediatria",
    "text": "Sobre a intussuscepção intestinal na infância, analise as afirmativas abaixo\nI – A forma mais comum é a íleo-cólica.\nII – O ultrassom é o padrão ouro para diagnóstico.\nIII – O ápice da intussuscepção pode se exteriorizar pelo ânus, em casos negligenciados.\n\nAssinale a alternativa correta.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 3,
    "explanation": "As três afirmativas estão corretas.\n\nI: a forma ileocólica é a mais comum (cerca de 85–90%).\nII: a ultrassonografia (sinal do alvo / pseudorrim) tem sensibilidade e especificidade próximas de 100% e é o exame de escolha para o diagnóstico.\nIII: em casos negligenciados, o segmento invaginado pode chegar ao reto e até se exteriorizar pelo ânus, o que pode ser confundido com prolapso retal.",
    "commentary": "III incorreta (A): a exteriorização anal é rara, mas possível.\n\nII incorreta (B): o ultrassom é o padrão para diagnóstico.\n\nI incorreta (C): a ileocólica é a mais frequente.\n\nTodas incorretas (E): todas estão corretas.",
    "reference": "SBP / Nelson Textbook of Pediatrics — Intussuscepção",
    "tags": [
      "intussuscepção intestinal",
      "ultrassonografia",
      "abdome agudo pediátrico"
    ],
    "tip": "Intussuscepção: ileocólica, sinal do alvo no ultrassom."
  },
  {
    "id": "amp2026-5",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "A cetoacidose diabética (CAD) é uma complicação aguda que ocorre tipicamente no diabetes tipo 1. Sobre esta situação assinale a alternativa correta.",
    "options": [
      "O bicarbonato de sódio pode ser utilizado nas CAD graves com pH < 7,0.",
      "A avaliação dos níveis de potássio sempre deve ser feita antes da insulinização.",
      "A administração da insulina EV pode ser suspensa imediatamente ao se aplicar a primeira dose SC.",
      "A gravidade da CAD pode ser classificada em leve, moderada ou grave, sendo baseada na glicemia.",
      "O edema cerebral, complicação mais temida da CAD, deve ser tratado com furosemida e dexametasona."
    ],
    "correctAnswer": 1,
    "explanation": "Na cetoacidose diabética, o potássio corporal total está depletado, embora o sérico possa estar normal ou alto (por saída da célula na acidose). A insulina leva o potássio para dentro da célula e pode causar hipocalemia grave e arritmia. Por isso, o potássio deve ser medido antes de iniciar a insulina; se estiver < 3,3 mEq/L, repõe-se antes.",
    "commentary": "Bicarbonato com pH < 7,0 (A): em crianças não é recomendado (risco de edema cerebral); em adultos é reservado a pH < 6,9 e ainda assim controverso. A banca considerou a afirmação incorreta.\n\nSuspender a insulina EV ao dar a primeira SC (C): deve haver sobreposição de 1–2 horas (pediatria: 15–30 minutos com insulina rápida) para evitar rebote de cetose.\n\nGravidade pela glicemia (D): a classificação usa pH e bicarbonato, não a glicemia.\n\nEdema cerebral com furosemida e dexametasona (E): tratado com manitol ou salina hipertônica, cabeceira elevada e redução da infusão de líquidos.",
    "reference": "ISPAD 2022 — Diabetic ketoacidosis / Diretriz da SBD 2024",
    "tags": [
      "cetoacidose diabética",
      "potássio",
      "insulina",
      "diabetes tipo 1"
    ],
    "tip": "CAD: potássio antes da insulina. Gravidade por pH e bicarbonato."
  },
  {
    "id": "amp2026-6",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Na avaliação de uma criança com baixa estatura o principal indicador de uma baixa estatura patológica é a velocidade de crescimento baixa.\nI – Em caso de baixa estatura com baixa velocidade de crescimento o principal exame a colher é a dosagem de GH.\nPORQUE\nII – A principal causa endocrinológica de baixa estatura é a deficiência de GH.\n\nAssinale a alternativa correta.",
    "options": [
      "Ambas afirmativas estão corretas e a II é uma justificativa correta da I.",
      "Ambas afirmativas estão corretas e a II não é uma justificativa correta da I.",
      "A afirmativa I está correta e a II incorreta.",
      "A afirmativa II está incorreta e a I correta.",
      "Ambas estão incorretas."
    ],
    "correctAnswer": 4,
    "explanation": "Ambas as afirmativas estão incorretas.\n\nI: o GH basal não serve para diagnóstico, porque é secretado em pulsos; a investigação começa por exames gerais (hemograma, função renal, doença celíaca), função tireoidiana, idade óssea e IGF-1/IGFBP-3, e a confirmação da deficiência de GH exige testes de estímulo.\nII: a deficiência de GH é rara; entre as causas endócrinas, o hipotireoidismo é mais frequente, e as causas não endócrinas superam as endócrinas.",
    "commentary": "Ambas corretas com justificativa (A) ou sem (B): ambas são falsas.\n\nI correta e II incorreta (C): a I também está incorreta.\n\nII incorreta e I correta (D): a I está incorreta.",
    "reference": "SBP / SBEM — Avaliação da baixa estatura",
    "tags": [
      "baixa estatura",
      "hormônio do crescimento",
      "velocidade de crescimento"
    ],
    "tip": "Baixa estatura: GH basal não diagnostica; comece por IGF-1, TSH, exames gerais e idade óssea."
  },
  {
    "id": "amp2026-7",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Pediatria",
    "text": "Paciente de dois anos vem a consulta por estar apresentando espasmos de membros, com piora recente. Tem antecedentes de rabdomioma cardíaco ao nascimento e recentemente perda de algumas habilidades. Ao exame lesões cutâneas hipocrômicas em formato de folha. Qual o diagnóstico mais provável?",
    "options": [
      "Neurofibromatose.",
      "Nevo hipocrômico.",
      "Esclerose tuberosa.",
      "Hanseníase sistêmica.",
      "Síndrome de Lennox-Gastaut."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 2 anos com espasmos (síndrome de West), regressão do desenvolvimento, rabdomioma cardíaco ao nascimento e manchas hipocrômicas em folha de freixo: esclerose tuberosa. É doença genética (TSC1/TSC2) com hamartomas em vários órgãos; o rabdomioma cardíaco costuma ser o primeiro achado (às vezes ainda no pré-natal). A vigabatrina é a droga de escolha para espasmos na esclerose tuberosa.",
    "commentary": "Neurofibromatose (A): manchas café com leite, efélides axilares e neurofibromas; não manchas hipocrômicas nem rabdomioma.\n\nNevo hipocrômico (B): lesão cutânea isolada, sem epilepsia ou acometimento cardíaco.\n\nHanseníase (D): não se apresenta assim em lactentes, nem com espasmos e rabdomioma.\n\nLennox-Gastaut (E): é uma síndrome epiléptica (pode suceder West), não explica o rabdomioma e as manchas; a causa de base é a esclerose tuberosa.",
    "reference": "SBP / International Tuberous Sclerosis Complex Consensus 2021",
    "tags": [
      "esclerose tuberosa",
      "síndrome de West",
      "rabdomioma cardíaco",
      "manchas hipocrômicas"
    ],
    "tip": "Espasmos + manchas em folha + rabdomioma = esclerose tuberosa."
  },
  {
    "id": "amp2026-8",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "A comunicação interatrial (CIA) é a cardiopatia congênita mais comum e geralmente os pacientes são assintomáticos ou oligossintomáticos. Na maioria dos pacientes com CIA o achado característico na ausculta é",
    "options": [
      "Segunda bulha única e alta.",
      "Sopro sistólico de regurgitação.",
      "Desdobramento amplo e fixo da segunda bulha.",
      "Sopro sistólico de ejeção em borda esternal esquerda.",
      "Estalido protossistólico com segunda bulha hipofonética."
    ],
    "correctAnswer": 2,
    "explanation": "Na comunicação interatrial, o shunt esquerda-direita aumenta o volume do ventrículo direito, que esvazia mais tarde. O fechamento da válvula pulmonar fica atrasado em todo o ciclo respiratório, gerando o desdobramento amplo e fixo da segunda bulha — achado característico.\n\nPode haver também sopro sistólico ejetivo suave em foco pulmonar, por hiperfluxo (não pela CIA em si).",
    "commentary": "B2 única e alta (A): sugere hipertensão pulmonar importante ou cardiopatias como transposição e atresia pulmonar.\n\nSopro sistólico de regurgitação (B): típico de CIV ou insuficiência mitral/tricúspide.\n\nSopro ejetivo em borda esternal esquerda (D): pode existir na CIA (hiperfluxo pulmonar), mas não é o achado característico.\n\nEstalido protossistólico com B2 hipofonética (E): sugere estenose valvar pulmonar.",
    "reference": "SBP / Nelson Textbook of Pediatrics — Cardiopatias congênitas acianogênicas",
    "tags": [
      "comunicação interatrial",
      "desdobramento fixo de B2",
      "cardiopatias congênitas"
    ],
    "tip": "CIA = desdobramento amplo e fixo de B2."
  },
  {
    "id": "amp2026-9",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Pediatria",
    "text": "Nas crianças a apendicite aguda tem uma apresentação clínica muito variada e menos de 50% dos casos têm uma apresentação clássica. Na avaliação de uma criança com suspeita de apendicite aguda, analise as afirmativas abaixo.\nI – A dor abdominal localizada é o achado diagnóstico mais confiável no diagnóstico de apendicite aguda.\nII – O uso criterioso da analgesia com morfina para aliviar a dor abdominal não altera a precisão diagnóstica.\nIII – Nos casos de apêndice localizado inteiramente na pelve a dor pode ser mínima no exame abdominal.\n\nAssinale a alternativa correta.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 3,
    "explanation": "As três afirmativas estão corretas.\n\nI: a dor localizada (fossa ilíaca direita, com defesa) é o achado mais confiável para apendicite em crianças.\nII: analgesia com opioide em dose adequada não mascara o diagnóstico nem atrasa a cirurgia, segundo estudos e diretrizes; não se deve negar analgesia.\nIII: com o apêndice pélvico, a dor abdominal pode ser mínima, com sintomas urinários, diarreia ou dor ao toque retal.",
    "commentary": "III incorreta (A): o apêndice pélvico pode, sim, dar poucos sinais abdominais.\n\nII incorreta (B): a analgesia com morfina não prejudica a precisão diagnóstica.\n\nI incorreta (C): a dor localizada é o achado mais confiável.\n\nTodas incorretas (E): todas são verdadeiras.",
    "reference": "SBP / Nelson Textbook of Pediatrics — Apendicite",
    "tags": [
      "apendicite aguda",
      "apendicite na infância",
      "analgesia"
    ],
    "tip": "Analgesia não mascara apendicite. Apêndice pélvico pode ter abdome pouco doloroso."
  },
  {
    "id": "amp2026-10",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "A bronquiolite viral aguda é caracterizada por inflamação aguda, edema necrose de células epiteliais das pequenas vias aéreas, promovendo impactação de muco intraluminal. Sobre esta situação assinale a alternativa correta.",
    "options": [
      "A infecção pelo vírus sincicial respiratório confere imunidade duradoura.",
      "A presença de febre elevada é um achado comum na fase pulmonar da doença.",
      "É fundamental a realização de imagem radiográfica e de exames laboratoriais para o correto diagnóstico.",
      "As técnicas de fisioterapia respiratória possuem elevada efetividade no manuseio dos pacientes portadores da doença.",
      "A administração de oxigênio por cânula nasal de alto fluxo parece estar associada à menor possibilidade de necessitar de suporte ventilatório invasivo."
    ],
    "correctAnswer": 4,
    "explanation": "A cânula nasal de alto fluxo oferece oxigênio aquecido e umidificado com pressão positiva leve, reduzindo o trabalho respiratório. Em lactentes com bronquiolite e hipoxemia, estudos mostram menor escalonamento de terapia (falha de tratamento) e possivelmente menor necessidade de ventilação invasiva, sendo hoje amplamente usada.",
    "commentary": "Imunidade duradoura (A): a infecção pelo VSR não confere imunidade duradoura; as reinfecções são comuns ao longo da vida.\n\nFebre alta comum (B): a febre geralmente é baixa ou ausente; febre alta sugere outra causa ou complicação.\n\nImagem e exames essenciais (C): o diagnóstico é clínico; exames não são rotina.\n\nFisioterapia muito efetiva (D): as técnicas de fisioterapia respiratória não mostraram benefício e não são recomendadas de rotina.",
    "reference": "SBP — Bronquiolite viral aguda / AAP 2014",
    "tags": [
      "bronquiolite viral aguda",
      "cânula nasal de alto fluxo",
      "vírus sincicial respiratório"
    ],
    "tip": "Bronquiolite: diagnóstico clínico, suporte. Fisioterapia e exames não são rotina."
  },
  {
    "id": "amp2026-11",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, de 11 anos, chegou à emergência hospitalar levado por familiares com queimadura por explosão de gasolina há 3 horas. O paciente chegou agitado, apresentando dificuldade respiratória e estridor, saturando a 90% em ar ambiente. No primeiro atendimento foram retiradas as roupas do adolescente, puncionado o acesso venoso, analgesia com opioide e estimada a superfície corporal queimada (SCQ), por meio da fórmula de Lund–Browder, em 44% (queimadura em face, tronco e abdome anterior, períneo e coxas). Assinale a alternativa que apresenta as próximas condutas nesse caso.",
    "options": [
      "Proceder à intubação e iniciar a ressuscitação pela fórmula de Parkland.",
      "Realizar uma broncoscopia para identificar e diagnosticar a lesão inalatória.",
      "Iniciar a ressuscitação pela fórmula de Parkland e passar uma sonda vesical de demora.",
      "Passar uma sonda vesical e mensurar a diurese para decidir qual é a necessidade de ressuscitação.",
      "Ofertar oxigênio por máscara não reinalante, realizar expansão com soro fisiológico 0,9% e iniciar antibioticoterapia."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com queimadura de 44% da superfície corporal por explosão (ambiente fechado com chama), com estridor, dificuldade respiratória e hipoxemia: sinais de lesão inalatória com risco de obstrução da via aérea pelo edema, que piora nas horas seguintes. A intubação deve ser precoce, antes que o edema a torne impossível.\n\nCom SCQ > 20%, inicia-se a reposição volêmica (Parkland: 3–4 mL × kg × %SCQ; ATLS atual: 3 mL para crianças e adultos), com metade nas primeiras 8 horas, guiada pela diurese.",
    "commentary": "Broncoscopia antes (B): pode confirmar a lesão inalatória, mas não deve atrasar a proteção da via aérea num paciente com estridor.\n\nParkland e sonda vesical (C): necessários, mas ignorar a via aérea com estridor é perigoso; a prioridade é o A.\n\nSonda e decidir pela diurese (D): a ressuscitação deve começar já, e a diurese guia os ajustes.\n\nMáscara não reinalante, soro fisiológico em bolus e antibiótico (E): a máscara não protege uma via aérea em risco, o cristaloide preferido é o Ringer lactato, e antibiótico profilático não é indicado.",
    "reference": "ATLS — 11ª edição: Queimaduras / SBQ",
    "tags": [
      "queimaduras",
      "lesão inalatória",
      "intubação orotraqueal",
      "fórmula de Parkland"
    ],
    "tip": "Queimado com estridor ou rouquidão: intube cedo."
  },
  {
    "id": "amp2026-12",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Pediatria",
    "text": "Na admissão hospitalar de uma criança com déficit motor súbito, afasia e flutuação do nível de consciência a conduta mais adequada após estabilização clínica seria",
    "options": [
      "Realizar uma dose de heparina de baixo peso molecular.",
      "Administrar dose de ácido acetilsalicílico de 5mg/kg e encaminhar o paciente para internamento.",
      "Realizar tomografia computadorizada de crânio para descartar acidente vascular cerebral hemorrágico.",
      "Solicitar internamento imediato, obter dois acessos periféricos calibrosos e manter o paciente em leito de enfermaria com monitoração.",
      "Realizar hidratação venosa com soro fisiológico 20mL/kg, encaminhar o paciente para neurocirurgia e implementar medida de pressão intracraniana."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com déficit motor súbito, afasia e alteração de consciência: suspeita de acidente vascular cerebral. Após a estabilização (ABC, glicemia), o próximo passo é a neuroimagem urgente para diferenciar isquêmico de hemorrágico, o que define todo o tratamento. A tomografia de crânio é o exame inicial mais disponível (a ressonância é preferida quando acessível rapidamente).",
    "commentary": "Heparina de baixo peso (A): não se anticoagula sem excluir hemorragia.\n\nAAS e internação (B): também exige exclusão prévia de sangramento.\n\nAcessos e enfermaria (D): não define o diagnóstico; o paciente precisa de imagem urgente e, provavelmente, terapia intensiva.\n\nSoro, neurocirurgia e PIC (E): conduta precipitada sem diagnóstico por imagem.",
    "reference": "AHA 2019 — Management of Stroke in Neonates and Children / SBP",
    "tags": [
      "AVC na infância",
      "tomografia de crânio",
      "emergências pediátricas"
    ],
    "tip": "Déficit focal súbito na criança: imagem urgente antes de qualquer antitrombótico."
  },
  {
    "id": "amp2026-13",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Em qual etapa do desenvolvimento um bebê apresenta-se mais sereno, pacífico, sem cólicas, sorrindo com mais frequência, iniciando um interesse maior pelo rosto humano, fixando mais o olhar, postura simétrica, mãos abertas, reflexo plantar já praticamente ausente e o reflexo de Moro começa a desaparecer?",
    "options": [
      "0 a 2 meses.",
      "2 a 4 meses.",
      "4 a 6 meses.",
      "6 a 9 meses.",
      "9 a 12 meses."
    ],
    "correctAnswer": 1,
    "explanation": "Entre 2 e 4 meses o lactente fica mais tranquilo (as cólicas diminuem), surge o sorriso social, aumenta o interesse pelo rosto humano e a fixação do olhar, a postura fica mais simétrica (o reflexo tônico-cervical assimétrico diminui), as mãos se abrem e o reflexo de Moro começa a desaparecer (some até 4–6 meses).",
    "commentary": "0 a 2 meses (A): predomínio da postura assimétrica, mãos fechadas, reflexos primitivos plenos e cólicas.\n\n4 a 6 meses (C): rola, sustenta bem a cabeça, leva objetos à boca; o Moro já desapareceu.\n\n6 a 9 meses (D): senta sem apoio, estranha pessoas.\n\n9 a 12 meses (E): engatinha, fica em pé com apoio, pinça.",
    "reference": "SBP — Desenvolvimento neuropsicomotor / Caderneta da Criança (MS)",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "puericultura"
    ],
    "tip": "2–4 meses: sorriso social, mãos abertas, postura simétrica, Moro sumindo."
  },
  {
    "id": "amp2026-14",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "No atendimento de um trauma que levou à morte de uma criança ou adolescente, ou no caso em que a vítima chegou morta ao serviço de saúde\nI – é vedado ao médico oferecer Atestado de Óbito em qualquer situação de morte por causa violenta ou suspeita, seja por acidente ou violência EXCETO\nII – se não houver Instituto Médico Legal no município e região do falecimento, sem necessidade de comunicação à autoridade local.\n\nAssinale a alternativa correta.",
    "options": [
      "Ambas afirmativas estão corretas e a II é uma justificativa correta da I.",
      "Ambas afirmativas estão corretas e a II não é uma justificativa correta da I.",
      "A afirmativa I está correta e a II incorreta.",
      "A afirmativa II está incorreta e a I correta.",
      "Ambas estão incorretas."
    ],
    "correctAnswer": 0,
    "explanation": "Em morte por causa externa (violenta ou suspeita), o atestado de óbito é emitido pelo médico legista do IML, após necropsia — o médico assistente não deve fornecê-lo. Onde não há IML, qualquer médico da localidade pode ser investido como perito pela autoridade (perito eventual) e emitir o atestado.\n\nA banca considerou as duas afirmativas corretas e a II como justificativa da exceção apresentada na I.",
    "commentary": "II não justifica I (B): a banca entendeu que a II é a exceção que justifica a I.\n\nII incorreta (C) e II incorreta com I correta (D): pelo gabarito, a II foi aceita como correta.\n\nAmbas incorretas (E): a I está correta.\n\nObservação: a afirmativa II diz \"sem necessidade de comunicação à autoridade local\", o que contraria a regra — o médico só emite o atestado nessa situação quando nomeado perito pela autoridade policial ou judicial (Resolução CFM 1.779/2005 e CPP, art. 159). Por isso o gabarito é questionável.",
    "reference": "Resolução CFM nº 1.779/2005 / Ministério da Saúde — A declaração de óbito / CPP, art. 159",
    "tags": [
      "declaração de óbito",
      "morte violenta",
      "medicina legal",
      "IML"
    ],
    "tip": "Morte violenta: atestado pelo IML. Sem IML, médico local como perito nomeado pela autoridade.",
    "alert": "Gabarito discutível: a afirmativa II diz que não é preciso comunicar a autoridade, mas o médico só emite o atestado de morte violenta, onde não há IML, quando nomeado perito pela autoridade. A banca manteve A."
  },
  {
    "id": "amp2026-15",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Pediatria",
    "text": "Na faixa etária pediátrica, sobretudo antes dos seis anos de idade, as intoxicações não intencionais são frequentes, em virtude da curiosidade da criança em explorar o ambiente. Sobre as intoxicações nesta faixa etária, assinale a alternativa correta.",
    "options": [
      "O uso do carvão ativado melhora o prognóstico destes pacientes.",
      "A lavagem gástrica está indicada de rotina, especialmente dentro das duas primeiras horas da ingestão.",
      "A naloxona é o antídoto de escolha para as intoxicações por benzodiazepínicos e opioides.",
      "A descontaminação cutânea é indispensável nas intoxicações por organofosforados com exposição cutânea.",
      "A alcalinização da urina tem por objetivo alterar o pH para dificultar a passagem do tóxico através das membranas biológicas e deve ser feita em bôlus dentro da primeira hora do atendimento."
    ],
    "correctAnswer": 3,
    "explanation": "Na exposição cutânea a organofosforados (e carbamatos), a descontaminação é indispensável: retirar roupas e lavar a pele com água e sabão abundantes, com a equipe protegida, já que o tóxico continua sendo absorvido pela pele e pode contaminar os profissionais.",
    "commentary": "Carvão ativado melhora o prognóstico (A): não há evidência de melhora de desfecho clínico com uso rotineiro; é usado em casos selecionados, de preferência até 1 hora da ingestão.\n\nLavagem gástrica de rotina (B): não é mais recomendada de rotina, pelo risco de complicações e benefício não comprovado.\n\nNaloxona para benzodiazepínicos (C): a naloxona reverte opioides; o antídoto de benzodiazepínico é o flumazenil (com restrições).\n\nAlcalinização urinária em bolus (E): o objetivo é aprisionar o tóxico ionizado na urina (ex.: salicilatos, fenobarbital), feita em infusão contínua com controle do pH urinário, não em bolus.",
    "reference": "SBP — Intoxicações agudas na infância / AACT/EAPCCT Position Papers",
    "tags": [
      "intoxicações exógenas",
      "organofosforados",
      "descontaminação"
    ],
    "tip": "Organofosforado na pele: tirar a roupa e lavar com água e sabão (equipe protegida)."
  },
  {
    "id": "amp2026-16",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "É consenso que a amamentação é a melhor forma de alimentar a criança no início da vida e é inigualável. A OMS, o Ministério da Saúde do Brasil e a Sociedade Brasileira de Pediatria recomendam o aleitamento materno (AM) de forma exclusiva nos primeiros seis meses. Assinale a alternativa correta sobre o AM.",
    "options": [
      "O tempo de permanência na mama em cada mamada deve ser pré-estabelecido.",
      "Após os dois anos o AM deve ser desestimulado pelo risco de acarretar carências nutricionais.",
      "Recomenda-se que após o sexto mês a alimentação seja complementada com novos alimentos e fórmula láctea.",
      "Há indícios de que a presença do pai em casa pode aumentar a chance de manutenção do AM por dois anos ou mais.",
      "É importante que a criança fique o tempo suficiente na mama para ter acesso ao leite posterior, por conter mais calorias e saciar a criança."
    ],
    "correctAnswer": 4,
    "explanation": "O leite muda ao longo da mamada: o leite anterior tem mais água e o posterior, liberado no fim, é mais rico em gordura e calorias, responsável pela saciedade e pelo ganho de peso. Por isso a criança deve ficar na mama o tempo necessário para esvaziá-la antes de trocar de lado.\n\nA alternativa E traz essa orientação.",
    "commentary": "Tempo de mamada pré-estabelecido (A): a amamentação é em livre demanda, sem tempo fixo.\n\nDesestimular após 2 anos (B): a recomendação é manter até 2 anos ou mais; não causa carência.\n\nComplementar com fórmula após 6 meses (C): a complementação é com alimentos da família; fórmula não é rotina em quem mama.\n\nPresença do pai em casa (D): a banca considerou incorreta, por não ser recomendação formal. Há, porém, estudos brasileiros mostrando que a presença do companheiro se associa a maior duração do aleitamento, o que torna a afirmação defensável.",
    "reference": "Ministério da Saúde — Guia alimentar para crianças brasileiras menores de 2 anos / SBP",
    "tags": [
      "aleitamento materno",
      "leite posterior",
      "livre demanda"
    ],
    "tip": "Deixe esvaziar a mama: o leite do fim é o mais calórico.",
    "alsoAccepted": [
      3
    ],
    "alert": "Gabarito discutível: a alternativa D também tem apoio na literatura (presença do companheiro associada a maior duração do aleitamento). A banca manteve E. Neste simulado, a alternativa D também é aceita como correta."
  },
  {
    "id": "amp2026-17",
    "module": "Pediatria",
    "text": "Lactente com um mês de vida apresenta placas eritematodescamativas arredondadas, com crostas amareladas aderidas a uma base eritematosa em região retroauricular, pescoço, períneo e couro cabeludo. Bom estado geral, sem sinais de desconforto ou presença de febre. Qual o agente etiológico mais provável do caso?",
    "options": [
      "Malassezia.",
      "Autoimunidade.",
      "Staphylococcus aureus.",
      "Streptococcus do grupo A.",
      "Staphylococcus epidermidis."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 1 mês com placas eritematosas e escamas gordurosas amareladas aderidas no couro cabeludo (crosta láctea), região retroauricular, pescoço e área de fraldas, sem prurido importante e em bom estado geral: dermatite seborreica infantil. A levedura Malassezia (colonizando áreas ricas em glândulas sebáceas) está implicada na patogênese. O quadro é autolimitado; trata-se com emolientes, remoção suave das crostas e, se necessário, antifúngico ou corticoide tópico de baixa potência.",
    "commentary": "Autoimunidade (B): não é o mecanismo da dermatite seborreica.\n\nS. aureus (C): causa impetigo (crostas melicéricas) e pode colonizar dermatite atópica, mas não explica o quadro.\n\nEstreptococo do grupo A (D): impetigo, erisipela, dermatite perianal estreptocócica.\n\nS. epidermidis (E): comensal da pele, sem esse quadro.",
    "reference": "SBD / SBP — Dermatoses do lactente",
    "tags": [
      "dermatite seborreica",
      "malassezia",
      "crosta láctea"
    ],
    "tip": "Escamas amareladas gordurosas no couro cabeludo e dobras do lactente = seborreica (Malassezia)."
  },
  {
    "id": "amp2026-18",
    "topography": "1.2",
    "topic": "Conjuntivite",
    "module": "Pediatria",
    "text": "Recém nascido apresenta no terceiro dia de vida quadro de conjuntivite, com secreção purulenta espessa e abundante bilateralmente e com sinais de quemose de pálpebras. Baseado no agente etiológico mais provável, qual seria a melhor conduta para o caso?",
    "options": [
      "Colírio de tobramicina.",
      "Azitromicina por via oral.",
      "Antibioticoterapia sistêmica com penicilina ou ceftriaxona.",
      "Associação de colírio de eritromicina com penicilina cristalina.",
      "Irrigação ocular com solução de soro fisiológico a cada duas horas."
    ],
    "correctAnswer": 2,
    "explanation": "Conjuntivite neonatal no 2º–5º dia de vida, bilateral, com secreção purulenta abundante e quemose: oftalmia por Neisseria gonorrhoeae, que pode perfurar a córnea em pouco tempo.\n\nO tratamento é sistêmico: ceftriaxona 25–50 mg/kg (máximo 125 mg) IM ou EV em dose única, com lavagem ocular frequente e investigação de infecção disseminada. Penicilina cristalina pode ser usada se a cepa for sensível. Também é preciso tratar a mãe e as parcerias.",
    "commentary": "Colírio de tobramicina (A): tratamento tópico isolado é insuficiente para gonococo.\n\nAzitromicina oral (B): trataria clamídia, cujo quadro é mais tardio (5–14 dias) e menos purulento.\n\nColírio de eritromicina com penicilina (D): o colírio isolado não basta e a penicilina não é a primeira escolha pela resistência.\n\nSó irrigação (E): é medida auxiliar, sem tratar a infecção.",
    "reference": "Ministério da Saúde — PCDT de IST (2022) / SBP",
    "tags": [
      "oftalmia neonatal",
      "gonococo",
      "ceftriaxona",
      "conjuntivite neonatal"
    ],
    "tip": "Conjuntivite purulenta nos primeiros dias de vida = gonococo: ceftriaxona sistêmica."
  },
  {
    "id": "amp2026-19",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "A ressuscitação cardiopulmonar (RCP) envolve um conjunto de medidas que visam evitar ou reverter uma parada cardiorrespiratória (PCR) por meio de suporte ventilatório e circulatório. Sobre esta situação, analise as afirmativas abaixo.\nI – O prognóstico da RCP nas crianças é melhor que nos adultos.\nII – As arritmias ventriculares ocorrem na maioria dos casos das vítimas pediátricas em PCR extra-hospitalar.\nIII – As compressões torácicas devem ser realizadas com profundidade de 1/3 do tórax, numa frequência não superior a 100 por minuto.\n\nAssinale a alternativa correta.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 4,
    "explanation": "As três afirmativas estão incorretas.\n\nI: a PCR na criança costuma ser consequência de hipóxia prolongada, e por isso o prognóstico geralmente é pior que o do adulto (sobretudo fora do hospital).\nII: os ritmos iniciais mais frequentes em crianças são assistolia e AESP, não arritmias ventriculares chocáveis.\nIII: a profundidade é de pelo menos 1/3 do diâmetro anteroposterior do tórax, mas a frequência é de 100 a 120 por minuto (não \"não superior a 100\").",
    "commentary": "I e II corretas (A), I e III (B), II e III (C) e todas corretas (D): nenhuma das três afirmativas está correta.",
    "reference": "AHA 2020 — Pediatric Basic and Advanced Life Support / SBP",
    "tags": [
      "parada cardiorrespiratória",
      "PALS",
      "RCP pediátrica"
    ],
    "tip": "PCR pediátrica: causa respiratória, ritmo não chocável, compressões de 100 a 120/min."
  },
  {
    "id": "amp2026-20",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "A alergia alimentar é uma doença de aparente prevalência mundial, caracterizada por reação adversa imunológica reprodutível a determinado alimento. Sobre a alergia alimentar, assinale a alternativa correta.",
    "options": [
      "A alergia ao ovo e leite é para toda a vida.",
      "É mais comum em países em desenvolvimento.",
      "A dosagem de IgE específica no soro é o padrão ouro para o diagnóstico.",
      "A introdução tardia dos alimentos alergênicos pode aumentar o risco de alergia.",
      "A síndrome de enterocolite induzida por proteínas alimentares (FPIES) é uma forma grave de alergia alimentar mediada por IgE."
    ],
    "correctAnswer": 3,
    "explanation": "As evidências atuais (estudo LEAP, por exemplo) mostram que atrasar a introdução de alimentos alergênicos não previne alergia e pode até aumentar o risco. A orientação é oferecer esses alimentos (ovo, amendoim, peixe) a partir do início da alimentação complementar, por volta dos 6 meses.",
    "commentary": "Alergia a ovo e leite para toda a vida (A): a maioria das crianças adquire tolerância ao longo da infância.\n\nMais comum em países em desenvolvimento (B): é mais prevalente em países industrializados.\n\nIgE específica como padrão ouro (C): o padrão ouro é o teste de provocação oral; a IgE indica sensibilização, não alergia.\n\nFPIES mediada por IgE (E): a enterocolite induzida por proteína alimentar é não IgE-mediada.",
    "reference": "ASBAI/SBP — Consenso Brasileiro sobre Alergia Alimentar (2018)",
    "tags": [
      "alergia alimentar",
      "alimentação complementar",
      "FPIES",
      "prevenção de alergia"
    ],
    "tip": "Não atrase alimentos alergênicos. Padrão ouro da alergia alimentar é a provocação oral."
  },
  {
    "id": "amp2026-21",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 29 anos, G2P1, com 32 semanas de gestação, comparece à consulta de rotina assintomática. Seus exames revelam pressão arterial de 150 × 95 mmHg em duas aferições com 4 horas de intervalo e proteinúria positiva em teste de fita urinária. Apresenta crescimento fetal adequado e sem queixas no momento. Assinale a alternativa que considera o diagnóstico e a conduta, respectivamente, para essa paciente.",
    "options": [
      "Hipertensão gestacional: iniciar metildopa e agendar nova avaliação em 7 dias.",
      "Pré-eclâmpsia incipiente: repetir aferições da PA em 48 horas e seguir com pré-natal habitual.",
      "Hipertensão crônica: confirmar proteinúria com exames laboratoriais e aguardar evolução do quadro.",
      "Pré-eclâmpsia com sinais de deterioração clínica: iniciar sulfato de magnésio, anti-hipertensivo e indicar interrupção da gestação.",
      "Pré-eclâmpsia sem sinais de deterioração clínica: iniciar anti-hipertensivo, solicitar exames materno-fetais e manter vigilância ambulatorial."
    ],
    "correctAnswer": 4,
    "explanation": "Gestante com 32 semanas, PA de 150 × 95 mmHg confirmada após 4 horas e proteinúria: pré-eclâmpsia. Não há sinais de gravidade — PA abaixo de 160 × 110, sem sintomas (cefaleia, alterações visuais, epigastralgia), sem alterações laboratoriais conhecidas e com feto bem.\n\nNa pré-eclâmpsia sem sinais de deterioração antes de 37 semanas, a conduta é expectante: anti-hipertensivo (meta PA abaixo de 140–150/90–100), exames maternos (hemograma, plaquetas, função renal e hepática, LDH, proteinúria) e avaliação fetal, com vigilância próxima até 37 semanas.",
    "commentary": "Hipertensão gestacional (A): a presença de proteinúria define pré-eclâmpsia.\n\nPré-eclâmpsia incipiente e pré-natal habitual (B): o termo não existe e a gestante precisa de seguimento de alto risco e exames.\n\nHipertensão crônica (C): a hipertensão surgiu após 20 semanas.\n\nCom sinais de deterioração e interrupção (D): não há sinais de gravidade que indiquem sulfato de magnésio e parto aos 32 semanas.",
    "reference": "FEBRASGO / RBEHG — Pré-eclâmpsia (2023) / Manual de Gestação de Alto Risco (MS, 2022)",
    "tags": [
      "pré-eclâmpsia",
      "hipertensão na gestação",
      "conduta expectante"
    ],
    "tip": "Pré-eclâmpsia sem gravidade antes de 37 semanas: anti-hipertensivo, exames e vigilância."
  },
  {
    "id": "amp2026-22",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 36 anos, G3P1A1, com 27 semanas de gestação, apresenta teste oral de tolerância à glicose com 75g de glicose com os seguintes resultados: glicemia de jejum de 94 mg/dL, glicemia em 1 hora de 182 mg/dL, e em 2 horas de 154 mg/dL. Está assintomática, com ganho ponderal adequado e ultrassonografia mostrando feto em percentil 50 para idade gestacional. Assinale a alternativa que considera o diagnóstico e a conduta, respectivamente, para essa paciente:",
    "options": [
      "Diabetes gestacional: instituir plano alimentar, atividade física e controle glicêmico domiciliar.",
      "Intolerância à glicose gestacional: repetir TOTG em 2 semanas e manter dieta fracionada.",
      "Diabetes gestacional: iniciar insulina basal e orientar restrição de carboidratos complexos.",
      "Diabetes pré-gestacional: solicitar hemoglobina glicada e indicar avaliação oftalmológica urgente.",
      "Hiperglicemia gestacional transitória: observar evolução sem necessidade de intervenção imediata."
    ],
    "correctAnswer": 0,
    "explanation": "No TOTG 75 g entre 24 e 28 semanas, basta um valor alterado para diagnosticar diabetes gestacional: jejum ≥ 92, 1 hora ≥ 180 ou 2 horas ≥ 153 mg/dL. Aqui há três valores alterados (94, 182 e 154).\n\nA conduta inicial é terapia nutricional, atividade física e monitorização da glicemia capilar; a insulina entra se as metas não forem atingidas em 1–2 semanas.",
    "commentary": "Intolerância e repetir TOTG (B): o diagnóstico já está feito; não se repete o teste.\n\nInsulina basal imediata (C): o tratamento começa com medidas não farmacológicas, e carboidratos complexos não devem ser restritos.\n\nDiabetes pré-gestacional (D): exigiria jejum ≥ 126 ou 2 h ≥ 200, glicada ≥ 6,5% ou glicemia ≥ 200 com sintomas.\n\nHiperglicemia transitória sem intervenção (E): o diabetes gestacional precisa de tratamento para reduzir complicações.",
    "reference": "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2017) / Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "diabetes gestacional",
      "TOTG",
      "terapia nutricional"
    ],
    "tip": "TOTG: 92 / 180 / 153. Um valor basta. Comece por dieta e exercício."
  },
  {
    "id": "amp2026-23",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 26 anos, G1P0, assintomática, realiza urocultura de rotina com 15 semanas de gestação, que detecta bacteriúria assintomática por Streptococcus agalactiae (10⁵ UFC/mL). A gestante não apresenta comorbidades e tem boa evolução pré-natal. Assinale a alternativa que considera a conduta atual e a implicação dessa infecção para o momento do parto.",
    "options": [
      "Tratar a bacteriúria e repetir urocultura mensalmente até o final da gestação.",
      "Tratar a bacteriúria e indicar antibioticoprofilaxia intraparto independente de cultura vaginal posterior.",
      "Tratar somente se houver sintomas urinários e considerar profilaxia intraparto se cultura vaginal for positiva.",
      "Não tratar a bacteriúria, pois a triagem para S. agalactiae deve ser feita apenas via cultura vaginal no 3º trimestre.",
      "Iniciar antibioticoterapia e solicitar cultura vaginal com 35 semanas para decidir sobre profilaxia intraparto."
    ],
    "correctAnswer": 1,
    "explanation": "Bacteriúria por Streptococcus agalactiae (estreptococo do grupo B) em qualquer momento da gestação deve ser tratada e indica colonização intensa. Essas gestantes recebem antibioticoprofilaxia intraparto para prevenir a sepse neonatal precoce, sem necessidade de cultura vaginal e retal com 35–37 semanas.",
    "commentary": "Repetir urocultura mensal (A): não muda a indicação de profilaxia intraparto, que já está estabelecida.\n\nTratar só se sintomática (C): a bacteriúria assintomática na gestação deve ser tratada.\n\nNão tratar (D): a bacteriúria é tratada e já define profilaxia; não depende da cultura vaginal.\n\nCultura vaginal com 35 semanas para decidir (E): desnecessária, pois a bacteriúria já indica profilaxia.",
    "reference": "ACOG Committee Opinion 797 (2020) / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "estreptococo do grupo B",
      "bacteriúria assintomática",
      "profilaxia intraparto"
    ],
    "tip": "GBS na urina em qualquer fase = profilaxia intraparto, sem precisar de swab."
  },
  {
    "id": "amp2026-24",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 22 anos, G1P0, com 10 semanas de gestação, traz sorologia com IgG e IgM reagentes para Toxoplasma gondii. Ela está assintomática e sem alterações no exame físico. Não há exames prévios disponíveis. Assinale a alternativa que considera o diagnóstico mais provável e a conduta inicial, respectivamente, para essa paciente.",
    "options": [
      "Infecção antiga: manter pré-natal habitual e repetir sorologia no terceiro trimestre.",
      "Sorologia falsa-positiva: solicitar PCR para toxoplasma no sangue materno e repetir IgM em 2 semanas.",
      "Infecção recente: indicar esquema triplo com sulfadiazina, pirimetamina e ácido folínico por 6 semanas.",
      "Infecção recente: iniciar espiramicina imediatamente e encaminhar para ultrassonografia morfológica precoce.",
      "Infecção de data indeterminada: solicitar teste de avidez da IgG e iniciar espiramicina enquanto aguarda resultado."
    ],
    "correctAnswer": 4,
    "explanation": "IgG e IgM reagentes no primeiro trimestre, sem exames anteriores: a IgM pode persistir por meses ou anos, então não se sabe se a infecção é recente ou antiga — data indeterminada.\n\nA conduta é pedir o teste de avidez de IgG (avidez alta antes de 16 semanas indica infecção há mais de 3–4 meses, anterior à gestação) e iniciar espiramicina enquanto se aguarda, para reduzir a transmissão vertical.",
    "commentary": "Infecção antiga e pré-natal habitual (A): sem avidez não se pode afirmar que é antiga.\n\nFalso-positivo e PCR materna (B): a PCR no sangue materno não é o exame de escolha; a avidez esclarece a data.\n\nInfecção recente com esquema tríplice (C): o esquema tríplice é para infecção fetal confirmada (PCR no líquido amniótico) ou após 16–18 semanas em casos selecionados; e não está provado que a infecção seja recente.\n\nInfecção recente com espiramicina (D): a espiramicina está correta, mas não se pode afirmar que a infecção é recente.",
    "reference": "Ministério da Saúde — Protocolo de toxoplasmose gestacional e congênita (2022) / FEBRASGO",
    "tags": [
      "toxoplasmose na gestação",
      "teste de avidez",
      "espiramicina"
    ],
    "tip": "IgG + IgM no 1º trimestre: avidez de IgG e espiramicina enquanto espera."
  },
  {
    "id": "amp2026-25",
    "topography": "15",
    "topic": "Imunização",
    "module": "Ginecologia e Obstetrícia",
    "text": "Com base nas recomendações do Programa Nacional de Imunizações (PNI) do Ministério da Saúde para gestantes, assinale a alternativa correta.",
    "options": [
      "A vacina contra hepatite B é contraindicada durante a gestação, devendo ser adiada para o puerpério.",
      "A vacina influenza é indicada apenas para gestantes com comorbidades ou em surtos sazonais regionais.",
      "A vacina contra COVID-19 está atualmente restrita ao terceiro trimestre, por risco teórico de malformações no período embrionário.",
      "A vacina dTpa (tríplice acelular do adulto) deve ser aplicada em todas as gestações a partir de 20 semanas, independentemente do intervalo vacinal prévio.",
      "A vacina tríplice viral (sarampo, caxumba e rubéola) deve ser administrada preferencialmente no segundo trimestre, para reduzir o risco de síndrome da rubéola congênita."
    ],
    "correctAnswer": 3,
    "explanation": "A vacina dTpa é recomendada em todas as gestações, a partir de 20 semanas, independentemente de vacinação anterior. Os anticorpos contra coqueluche passam pela placenta e protegem o recém-nascido nos primeiros meses, antes que ele possa ser vacinado.",
    "commentary": "Hepatite B contraindicada (A): a vacina de hepatite B é indicada para gestantes não vacinadas, em qualquer fase.\n\nInfluenza só com comorbidades (B): é recomendada para todas as gestantes, em qualquer idade gestacional.\n\nCOVID-19 só no terceiro trimestre (C): pode ser aplicada em qualquer trimestre.\n\nTríplice viral no segundo trimestre (E): vacina de vírus vivo atenuado, contraindicada na gestação.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Gestante (PNI)",
    "tags": [
      "vacinação na gestação",
      "dTpa",
      "coqueluche",
      "imunização"
    ],
    "tip": "dTpa em toda gestação a partir de 20 semanas. Vírus vivo é contraindicado."
  },
  {
    "id": "amp2026-26",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a predição e o manejo do parto prematuro, assinale a alternativa correta.",
    "options": [
      "A terbutalina é o tocolítico preferencial no Brasil, devido ao menor risco de efeitos adversos cardiovasculares maternos.",
      "A corticoterapia antenatal está indicada de forma rotineira entre 24 e 34 semanas, com dexametasona semanal até o parto.",
      "O uso de cerclagem cervical está indicado em toda gestante com colo uterino <25 mm, independentemente de história obstétrica.",
      "O atosiban é um inibidor da fosfodiesterase utilizado como primeira escolha para tocolise em casos de contrações com dilatação <2 cm.",
      "A nifedipina pode ser usada como tocolítico em partos prematuros iminentes, mas está contraindicada na presença de cardiopatia materna."
    ],
    "correctAnswer": 4,
    "explanation": "A nifedipina (bloqueador de canal de cálcio) é um dos tocolíticos de primeira escolha no Brasil, por ser oral, barata e eficaz. Por seu efeito vasodilatador e hipotensor, deve ser evitada em cardiopatas, hipotensas e em uso concomitante de sulfato de magnésio em altas doses.",
    "commentary": "Terbutalina preferencial (A): os beta-agonistas têm mais efeitos cardiovasculares (taquicardia, arritmia, edema pulmonar) e foram substituídos por nifedipina ou atosiban.\n\nCorticoide semanal até o parto (B): faz-se um ciclo único entre 24 e 34 semanas (repetição apenas em resgate); doses semanais prejudicam o crescimento fetal.\n\nCerclagem em todo colo < 25 mm (C): no colo curto sem história de parto prematuro, a primeira escolha é a progesterona vaginal; a cerclagem é para casos com história ou colo muito curto em gestantes selecionadas.\n\nAtosiban inibidor de fosfodiesterase (D): o atosiban é antagonista do receptor de ocitocina.",
    "reference": "FEBRASGO — Parto pré-termo / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "trabalho de parto prematuro",
      "tocólise",
      "nifedipina",
      "corticoide antenatal"
    ],
    "tip": "Tocólise: nifedipina ou atosiban. Corticoide: ciclo único entre 24 e 34 semanas."
  },
  {
    "id": "amp2026-27",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 40 semanas e 3 dias, G2P1, comparece ao pronto atendimento por redução da movimentação fetal nas últimas 12 horas. Ao exame: feto único em apresentação cefálica, BCF 140 bpm, movimentos fetais lentos à palpação. Toque vaginal: colo posterior, 1 cm de dilatação, 20% de apagamento, consistência firme e altura -2. Ultrassonografia obstétrica com líquido amniótico reduzido (ILA de 4,5 cm) e doppler normal. Considerando o caso clínico e os critérios obstétricos para indução do parto, assinale a alternativa correta.",
    "options": [
      "A indução está indicada e pode ser iniciada com misoprostol vaginal para preparo cervical.",
      "A cesariana deve ser indicada de imediato devido à oligo-hidrâmnio e idade gestacional.",
      "A presença de colo desfavorável impede qualquer tentativa de indução, mesmo com métodos mecânicos.",
      "A indução está contraindicada devido ao colo desfavorável e à ausência de sofrimento fetal agudo.",
      "A conduta inicial deve ser repor volume com hidratação venosa e repetir a cardiotocografia após 12 horas."
    ],
    "correctAnswer": 0,
    "explanation": "Gestação a termo (40 semanas e 3 dias) com redução dos movimentos fetais e oligoâmnio (ILA 4,5 cm), com Doppler normal: há indicação de interromper a gestação por indução do parto, já que não existe contraindicação ao parto vaginal.\n\nCom colo desfavorável (Bishop baixo), a indução começa pelo preparo cervical, com misoprostol vaginal (25 µg) ou métodos mecânicos (sonda de Foley).",
    "commentary": "Cesárea imediata (B): oligoâmnio com vitalidade preservada não indica cesárea por si só.\n\nColo desfavorável impede indução (C): é exatamente para isso que existe o preparo cervical, inclusive com métodos mecânicos.\n\nIndução contraindicada (D): colo desfavorável não contraindica a indução.\n\nHidratação e nova CTG em 12 horas (E): adia a resolução num feto com sinais de risco.",
    "reference": "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal / FEBRASGO — Indução do trabalho de parto",
    "tags": [
      "indução do parto",
      "oligoâmnio",
      "misoprostol",
      "colo desfavorável"
    ],
    "tip": "Termo + oligoâmnio = interromper; colo desfavorável pede preparo com misoprostol ou sonda."
  },
  {
    "id": "amp2026-28",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 27 anos, G2P2, evolui com sangramento vaginal intenso 30 minutos após parto vaginal espontâneo, com perda estimada de 900 mL. Apresenta-se pálida, sudorética, PA 90 × 60 mmHg, FC 116 bpm. Ao exame: útero flácido e acima da cicatriz umbilical, placenta entregue íntegra e sem lacerações visíveis. Assinale a alternativa que representa a conduta mais adequada para essa paciente neste momento.",
    "options": [
      "Solicitar exames laboratoriais e coagulograma antes de iniciar qualquer intervenção, para excluir coagulopatia de base.",
      "Iniciar ácido tranexâmico e misoprostol retal, realizar sondagem vesical e preparar material para revisão uterina manual.",
      "Administrar ocitocina intravenosa, sem manipulação uterina, e avaliar necessidade de transfusão conforme hemoglobina.",
      "Iniciar taponamento uterino com balão de Bakri, associar misoprostol retal e sulfato de magnésio para prevenção de disfunção endotelial.",
      "Realizar avaliação clínica para identificar a causa da hemorragia, iniciar massagem uterina, monitorização, acesso venoso calibroso, soro aquecido, ácido tranexâmico e ocitocina EV."
    ],
    "correctAnswer": 4,
    "explanation": "Hemorragia pós-parto (900 mL, com instabilidade: índice de choque FC/PAS = 1,3) com útero amolecido e acima da cicatriz umbilical: atonia uterina, causa mais comum.\n\nA conduta da \"hora de ouro\" é simultânea: pedir ajuda, avaliar a causa (4 Ts), massagem uterina bimanual, monitorização, dois acessos calibrosos, reposição com cristaloide aquecido, ocitocina EV e ácido tranexâmico 1 g EV nas primeiras 3 horas. Misoprostol, metilergometrina, balão e cirurgia vêm em seguida, conforme a resposta.",
    "commentary": "Exames antes de agir (A): os exames são colhidos, mas o tratamento não pode esperar.\n\nTranexâmico, misoprostol e revisão manual (B): falta o principal — massagem uterina e ocitocina como primeira linha; a placenta já saiu íntegra.\n\nOcitocina sem manipulação uterina (C): a massagem uterina é parte da primeira linha.\n\nBalão de Bakri e sulfato de magnésio (D): o balão é segunda linha, e o sulfato não tem papel na HPP.",
    "reference": "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018) / FEBRASGO",
    "tags": [
      "hemorragia pós-parto",
      "atonia uterina",
      "ocitocina",
      "ácido tranexâmico"
    ],
    "tip": "HPP: massagem + ocitocina EV + tranexâmico + acesso e volume, tudo junto."
  },
  {
    "id": "amp2026-29",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre o conceito de parto humanizado, segundo as diretrizes da Organização Mundial da Saúde (OMS) e do Ministério da Saúde do Brasil, assinale a alternativa correta.",
    "options": [
      "O conceito de humanização está vinculado exclusivamente ao parto vaginal, não se aplicando a cesarianas eletivas.",
      "O protagonismo da mulher implica autonomia parcial nas decisões, desde que autorizadas pela equipe médica.",
      "O respeito às escolhas da gestante inclui direito à posição de parto desejada, desde que não haja contraindicações clínicas.",
      "O parto humanizado restringe o uso de métodos farmacológicos para analgesia, priorizando o estímulo à dor fisiológica.",
      "O parto humanizado pressupõe baixo risco obstétrico e está limitado ao ambiente domiciliar com equipe de parteiras treinadas."
    ],
    "correctAnswer": 2,
    "explanation": "O parto humanizado coloca a mulher como protagonista, com informação e respeito às suas escolhas. Isso inclui liberdade de posição no trabalho de parto e no parto, desde que não haja contraindicação clínica, além de acompanhante, métodos de alívio da dor e mínimo de intervenções desnecessárias.",
    "commentary": "Só parto vaginal (A): a humanização vale para qualquer via de parto, inclusive a cesárea.\n\nAutonomia parcial autorizada pela equipe (B): a autonomia é da mulher, com decisão compartilhada e informada.\n\nRestrição à analgesia farmacológica (D): a analgesia (inclusive peridural) é direito e faz parte das boas práticas.\n\nApenas baixo risco e domicílio (E): a humanização se aplica a todos os níveis de risco e cenários, incluindo o hospital.",
    "reference": "OMS 2018 — Intrapartum care for a positive childbirth experience / Diretrizes Nacionais de Assistência ao Parto Normal (MS)",
    "tags": [
      "parto humanizado",
      "boas práticas no parto",
      "autonomia"
    ],
    "tip": "Humanizar = protagonismo e escolhas da mulher, em qualquer via e cenário."
  },
  {
    "id": "amp2026-30",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera de 5 dias, primigesta, procura atendimento com queixa de dor intensa na mama direita, associada a área endurecida, quente e avermelhada no quadrante superior externo. Refere febre de 38,5 °C e calafrios nas últimas 24 horas. Relata dificuldade para amamentar, mas sem interrupção do aleitamento. Ao exame: região dolorosa e eritematosa de 6 cm, sem flutuação. Mamas com sinais de ingurgitamento bilateral leve. Com base no caso apresentado, assinale a alternativa correta.",
    "options": [
      "O diagnóstico é mastite puerperal; o aleitamento deve ser mantido e está indicado uso de antibiótico por via oral.",
      "O diagnóstico mais provável é abscesso mamário; a conduta é drenagem cirúrgica e antibioticoterapia endovenosa.",
      "A suspeita de ducto lactífero obstruído é mais provável, sendo suficiente orientar compressas frias e repouso mamário.",
      "O quadro é compatível com mastite puerperal; deve-se suspender o aleitamento na mama acometida até completa resolução.",
      "Trata-se de ingurgitamento mamário complicado; a conduta inclui analgesia e esvaziamento manual com bomba elétrica."
    ],
    "correctAnswer": 0,
    "explanation": "Puérpera com área mamária dolorosa, quente, avermelhada e endurecida, febre de 38,5 °C e calafrios, sem flutuação: mastite puerperal (lactacional). O tratamento inclui manter a amamentação (inclusive na mama afetada — o esvaziamento é parte do tratamento), analgesia e antibiótico oral com cobertura para S. aureus (cefalexina, por exemplo) por 10–14 dias.",
    "commentary": "Abscesso com drenagem (B): não há flutuação; a ultrassonografia ajudaria em caso de dúvida.\n\nDucto obstruído com repouso mamário (C): a febre alta e calafrios indicam mastite; parar de esvaziar a mama piora o quadro.\n\nSuspender a amamentação na mama afetada (D): a amamentação deve continuar; a suspensão favorece o abscesso.\n\nIngurgitamento (E): costuma ser bilateral e difuso, com febre baixa, sem área localizada inflamada.",
    "reference": "Ministério da Saúde — Saúde da criança: aleitamento materno (Cadernos de Atenção Básica nº 23) / FEBRASGO",
    "tags": [
      "mastite puerperal",
      "aleitamento materno",
      "puerpério"
    ],
    "tip": "Mastite: manter a amamentação + antibiótico antiestafilocócico."
  },
  {
    "id": "amp2026-31",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Atraso menstrual de 12 semanas com queixa de sangramento vaginal, dores em hipogástrio e vômitos. Exame de Beta-hCG 278.000 UI/L e ultrassom com útero volumoso e cistos tecaluteínicos bilaterais de 8 cm. Foi submetida a procedimento cirúrgico e o anátomo patológico revelou hidropsia vilosa difusa e hiperplasia trofoblástica difusa com ausência de tecido fetal. O diagnóstico desta paciente é",
    "options": [
      "Mola invasora.",
      "Aborto hidrópico.",
      "Mola hidatiforme parcial.",
      "Mola hidatiforme completa.",
      "Coriocarcinoma Gestacional."
    ],
    "correctAnswer": 3,
    "explanation": "Atraso menstrual com sangramento, hiperêmese, útero maior que o esperado, beta-hCG muito elevado (278.000) e cistos tecaluteínicos bilaterais sugerem mola hidatiforme. O anatomopatológico com hidropisia vilosa difusa, hiperplasia trofoblástica difusa e ausência de tecido fetal define a mola completa (cariótipo diploide de origem paterna, 46,XX).",
    "commentary": "Mola invasora (A): neoplasia trofoblástica com invasão do miométrio, diagnosticada no seguimento (platô ou aumento do hCG).\n\nAborto hidrópico (B): degeneração hidrópica sem proliferação trofoblástica.\n\nMola parcial (C): hidropisia e hiperplasia focais, com tecido fetal presente (cariótipo triploide).\n\nCoriocarcinoma (E): neoplasia maligna sem vilosidades.",
    "reference": "FEBRASGO — Doença trofoblástica gestacional / Manual de Gestação de Alto Risco (MS, 2022)",
    "tags": [
      "mola hidatiforme completa",
      "doença trofoblástica gestacional",
      "beta-hCG"
    ],
    "tip": "Mola completa: difusa e sem feto. Parcial: focal e com tecido fetal."
  },
  {
    "id": "amp2026-32",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera com 24 horas de pós-parto cesáreo por rotura prematura de membranas de 29 horas e distócia de progressão foi diagnosticada com infecção puerperal. Quais os sinais e sintomas clínicos que mais levaram a este diagnóstico?",
    "options": [
      "Temperatura 38 °C, calafrio, dor abdominal e loquiação escassa.",
      "Dor abdominal moderada, tremores, útero doloroso e hipoinvoluído.",
      "Temperatura 37,9 °C, dor abdominal, taquicardia, tremores e calafrio.",
      "Taquicardia, taquipneia, dor abdominal e lóquios abundantes e inodoro.",
      "Temperatura 38,9 °C, taquicardia, útero doloroso, pastoso e hipoinvoluído."
    ],
    "correctAnswer": 4,
    "explanation": "A infecção puerperal (endometrite) após cesárea com fatores de risco (rotura prolongada de membranas, trabalho de parto longo) se manifesta tipicamente com febre ≥ 38 °C (geralmente mais alta), taquicardia e útero doloroso, amolecido (pastoso) e hipoinvoluído, muitas vezes com lóquios fétidos.\n\nA alternativa E traz o conjunto mais característico. Tratamento: clindamicina + gentamicina EV.",
    "commentary": "Febre com lóquios escassos (A): a febre está no limite e os demais achados são inespecíficos; falta a alteração uterina.\n\nSem febre (B): o diagnóstico exige febre.\n\nTemperatura de 37,9 °C (C): abaixo do critério de febre puerperal.\n\nLóquios abundantes e inodoros (D): lóquios normais; taquicardia e taquipneia sem febre ou alteração uterina são inespecíficos.",
    "reference": "FEBRASGO — Infecção puerperal / Rezende — Obstetrícia",
    "tags": [
      "infecção puerperal",
      "endometrite",
      "puerpério"
    ],
    "tip": "Endometrite: febre, útero doloroso, amolecido e subinvoluído, lóquios fétidos."
  },
  {
    "id": "amp2026-33",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 51 anos, utilizando DIU-LNG 52 mg há 4 anos, apresenta sintomas vasomotores intensos, alteração do sono e irritabilidade. Sem comorbidades. G1P1 e DUM: 50 anos. Exames físico e complementares sem alterações. Qual seria o melhor tratamento para esta paciente?",
    "options": [
      "Remover DIU-LNG e iniciar estradiol 0,5 mg, oral, contínuo.",
      "Manter DIU-LNG e iniciar testosterona 2mg, gel transdérmico, contínuo.",
      "Manter DIU-LNG e iniciar acetato de noretisterona 35 mcg, oral, contínua.",
      "Manter DIU-LNG e iniciar estradiol 0,5 mg/dose, gel transdérmico, contínuo.",
      "Remover DIU-LNG e iniciar estradiol 1mg com didrogesterona 10mg, oral, cíclico."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher na pós-menopausa recente com sintomas vasomotores intensos e útero, que já usa DIU de levonorgestrel 52 mg: o DIU fornece a proteção endometrial necessária na terapia hormonal. Basta acrescentar estrogênio, e a via transdérmica (gel de estradiol) é preferível por ter menor risco tromboembólico.\n\nO DIU de 52 mg tem eficácia aprovada para proteção endometrial (e contracepção estendida até 8 anos), não precisando ser retirado agora.",
    "commentary": "Remover o DIU e estradiol oral isolado (A): estrogênio sem progestagênio em mulher com útero causa hiperplasia e câncer de endométrio.\n\nTestosterona (B): indicada para desejo sexual hipoativo, não para sintomas vasomotores.\n\nNoretisterona isolada (C): progestagênio isolado tem efeito limitado nos fogachos; e ela já tem progestagênio pelo DIU.\n\nRemover o DIU e terapia oral cíclica (E): seria possível, mas sem vantagem; a terapia transdérmica mantendo o DIU é mais segura e prática.",
    "reference": "FEBRASGO / SOBRAC — Consenso de terapia hormonal da menopausa / NAMS 2022",
    "tags": [
      "terapia hormonal da menopausa",
      "DIU de levonorgestrel",
      "estradiol transdérmico",
      "climatério"
    ],
    "tip": "Útero + DIU-LNG: basta acrescentar estradiol (de preferência transdérmico)."
  },
  {
    "id": "amp2026-34",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 57 anos, com urgência miccional frequente e eventuais episódios de incontinência urinária de urgência iniciados 3 anos após a menopausa. Acorda 2 vezes a noite para urinar e houve muita piora da qualidade de vida laboral e afetiva. Nega doenças neurológicas prévias e cirurgias ginecológicas e urológicas prévias. G2C2, menopausa aos 51 anos sem terapia hormonal. Bom estado geral, IMC: 29,4 kg/m².Exame ginecológico: vagina lisa, pálida e sem conteúdo. Toque bi digital: força contrátil do assoalho pélvico normal. Urocultura negativa. O diagnóstico mais provável desta paciente é",
    "options": [
      "Divertículo uretral.",
      "Incontinência urinária mista.",
      "Síndrome da bexiga hiperativa.",
      "Incontinência urinária contínua.",
      "Incontinência urinária de esforço."
    ],
    "correctAnswer": 2,
    "explanation": "Urgência miccional com episódios de incontinência de urgência e noctúria, sem infecção (urocultura negativa), sem doença neurológica e sem perdas aos esforços: síndrome da bexiga hiperativa. O tratamento começa por medidas comportamentais (treinamento vesical, ajuste da ingesta), fisioterapia e estrogênio vaginal (pela atrofia), seguidas de antimuscarínico ou mirabegrona.",
    "commentary": "Divertículo uretral (A): massa suburetral, gotejamento pós-miccional, dispareunia e infecções de repetição.\n\nIncontinência mista (B): exigiria perdas aos esforços também.\n\nIncontinência contínua (D): perda constante, por fístula ou ureter ectópico.\n\nIncontinência de esforço (E): perdas ao tossir, espirrar ou levantar peso, ausentes.",
    "reference": "FEBRASGO — Bexiga hiperativa / AUA/SUFU 2024 — Overactive Bladder Guideline",
    "tags": [
      "bexiga hiperativa",
      "incontinência urinária de urgência",
      "uroginecologia"
    ],
    "tip": "Urgência ± incontinência de urgência, noctúria e urocultura negativa = bexiga hiperativa."
  },
  {
    "id": "amp2026-35",
    "topography": "15",
    "topic": "Bioética",
    "module": "Saúde Coletiva",
    "text": "A seguinte frase definidora “alguém que, em seus pensamentos, trabalhos e ações, é capaz de seguir estas normas que ele escolheu como próprias, sem constrangimentos ou coerção externas por outros” contém a essência do que os profissionais de saúde devem considerar como consentimento informado. A frase está definindo que tipo de pessoa?",
    "options": [
      "Otimista.",
      "Mediadora.",
      "Autônoma.",
      "Performática.",
      "Individualista."
    ],
    "correctAnswer": 2,
    "explanation": "A definição descreve a pessoa autônoma: aquela capaz de deliberar e agir segundo valores e normas que escolheu para si, sem coerção ou constrangimento externo. A autonomia é a base do consentimento livre e esclarecido, um dos princípios da bioética principialista (com beneficência, não maleficência e justiça).",
    "commentary": "Otimista (A), mediadora (B), performática (D) e individualista (E): nenhuma delas corresponde ao conceito bioético de quem se autodetermina; individualismo não é sinônimo de autonomia.",
    "reference": "Beauchamp & Childress — Princípios de ética biomédica / Código de Ética Médica (CFM)",
    "tags": [
      "bioética",
      "autonomia",
      "consentimento informado"
    ],
    "tip": "Autonomia: decidir por si, sem coerção. Base do consentimento informado."
  },
  {
    "id": "amp2026-36",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 40 anos, refere ter sentido nódulo em mama direita há 1 mês, com crescimento rápido. Não tem história familiar de câncer de mama. Ao exame físico, apresenta mamas de grande volume, com nódulo de aproximadamente 3 cm em quadrante súpero-externo de mama esquerda, de consistência firme, bordos irregulares e aderido a planos profundos. Apresenta mamografia e ultrassom de mamas BIRADS 4, e foi submetida a biópsia com diagnóstico de carcinoma mamário invasor triplo-negativo, Estádio Clínico T2N0M0. Em relação a esse caso, assinale a alternativa correta.",
    "options": [
      "A quimioterapia neste caso deve ser realizada após o tratamento cirúrgico.",
      "O teste genético para câncer de mama hereditário deve ser solicitado devido à idade jovem.",
      "A reconstrução mamária deve ser tardia, pelos riscos de recidiva do tumor triplo-negativo.",
      "O tratamento inicial indicado é mastectomia esquerda com preservação de pele e complexo aréolo-papilar e linfonodo sentinela",
      "A radioterapia é sempre indicada como tratamento adjuvante, independente da cirurgia ser conservadora ou mastectomia, por tratar-se de tumor triplo negativo."
    ],
    "correctAnswer": 1,
    "explanation": "Carcinoma de mama triplo-negativo numa mulher de 40 anos. As diretrizes (NCCN e o rol de testagem atual) recomendam oferecer teste genético para câncer hereditário (BRCA1/2 e painéis) a pacientes com câncer de mama triplo-negativo em qualquer idade, e a todas com diagnóstico em idade jovem. O resultado influencia a cirurgia, o tratamento sistêmico (inibidores de PARP) e o aconselhamento da família.",
    "commentary": "Quimioterapia após a cirurgia (A): no triplo-negativo T2 (> 2 cm), a quimioterapia neoadjuvante é preferida; permite avaliar resposta e guiar o tratamento adjuvante.\n\nReconstrução obrigatoriamente tardia (C): a reconstrução imediata é segura e não aumenta a recidiva.\n\nMastectomia com preservação de pele e mamilo como tratamento inicial (D): o tratamento inicial preferido é a neoadjuvância; e cirurgia conservadora pode ser possível.\n\nRadioterapia sempre (E): após mastectomia, a radioterapia depende do tamanho e dos linfonodos; não é obrigatória só por ser triplo-negativo.",
    "reference": "NCCN Breast Cancer 2024 / NCCN Genetic/Familial High-Risk Assessment / FEBRASGO",
    "tags": [
      "câncer de mama",
      "triplo-negativo",
      "teste genético",
      "BRCA"
    ],
    "tip": "Câncer de mama triplo-negativo: ofereça teste genético e pense em neoadjuvância."
  },
  {
    "id": "amp2026-37",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 60 anos, portadora de hipertensão arterial sistêmica em uso de enalapril, e dislipidemia em uso de rosuvastatina 20 mg, G2C2, menopausa aos 50 anos, fez uso de terapia hormonal por 5 anos, IMC = 30 kg/m² . Iniciou com sangramento vaginal há 3 dias. Ultrassom mostra endométrio de 8 mm. Qual seria a sua conduta?",
    "options": [
      "Histerectomia vaginal.",
      "Histerectomia por via laparoscópica.",
      "Repetir ultrassom transvaginal em 3 meses.",
      "Repetir ultrassom transvaginal em 6 meses.",
      "Biópsia de endométrio em consultório com cureta de Novak."
    ],
    "correctAnswer": 4,
    "explanation": "Sangramento na pós-menopausa, com fatores de risco para câncer de endométrio (obesidade, hipertensão, terapia hormonal prévia) e endométrio de 8 mm (acima de 4 mm): é obrigatório obter amostra endometrial para excluir hiperplasia e câncer. A biópsia ambulatorial (cureta de Novak ou Pipelle) é o primeiro passo; histeroscopia com biópsia é a alternativa, principalmente se a amostra for insuficiente.",
    "commentary": "Histerectomia vaginal (A) ou laparoscópica (B): não se opera sem diagnóstico histológico.\n\nRepetir o ultrassom em 3 (C) ou 6 meses (D): atrasa o diagnóstico de possível câncer.",
    "reference": "FEBRASGO — Sangramento pós-menopausa / ACOG Committee Opinion 734",
    "tags": [
      "sangramento pós-menopausa",
      "câncer de endométrio",
      "biópsia de endométrio"
    ],
    "tip": "Pós-menopausa + sangramento + endométrio > 4 mm = biópsia."
  },
  {
    "id": "amp2026-38",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 30 anos, nuligesta, com desejo de engravidar, sem comorbidades, apresentou citologia oncótica cérvico-vaginal com diagnóstico de lesão intraepitelial de alto grau. Foi submetida a colposcopia, que evidenciou epitélio acetobranco denso, margens irregulares, vasos atípicos grosseiros e teste de Schiller iodo-negativo. A biópsia de colo uterino confirmou lesão intraepitelial de alto grau. Realizada conização, o laudo anatomopatológico demonstrou carcinoma escamoso invasor do tipo usual, com invasão estromal focal de até 2,5 mm de profundidade, extensão horisontal de 5 mm, ausência de invasão linfovascular e margens ectocervical e endocervical livres. Qual a conduta mais adequada para esta paciente?",
    "options": [
      "Histerectomia total.",
      "Histerectomia radical e linfadenectomia pélvica.",
      "Histerectomia total com salpingo-ooforectomia.",
      "Histerectomia total com pesquisa de linfonodo sentinela.",
      "Orientar a paciente a manter seguimento clínico e citopatológico."
    ],
    "correctAnswer": 4,
    "explanation": "Carcinoma escamoso com invasão estromal de até 2,5 mm (≤ 3 mm), sem invasão linfovascular e com margens livres na conização: estádio IA1 (FIGO 2018). Em mulher jovem que deseja engravidar, a conização com margens livres é tratamento suficiente, seguida de controle citológico (e colposcópico/HPV) periódico.",
    "commentary": "Histerectomia total (A, C) ou com linfonodo sentinela (D): seriam opções para IA1 em quem não deseja gestar (ou com invasão linfovascular, no caso do linfonodo), mas a paciente quer preservar a fertilidade e as margens estão livres.\n\nHisterectomia radical com linfadenectomia (B): tratamento de IA2/IB1, excessivo para IA1.",
    "reference": "FIGO 2018 / FEBRASGO — Câncer do colo uterino / NCCN Cervical Cancer",
    "tags": [
      "câncer de colo uterino",
      "estádio IA1",
      "conização",
      "preservação da fertilidade"
    ],
    "tip": "IA1 sem invasão linfovascular e margens livres: conização basta se quer engravidar."
  },
  {
    "id": "amp2026-39",
    "topography": "5.1",
    "topic": "Tricomoníase",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 35 anos, refere leucorreia amarelo-esverdeada com início há 1 semana, associada a ardência vaginal e dispareunia. Ao exame especular, apresenta leucorreia profusa amarelo-esverdeada associada a hiperemia de ectocérvice e paredes vaginais. Qual a conduta mais adequada para esta paciente?",
    "options": [
      "Colposcopia.",
      "Metronidazol 2 g via oral, dose única.",
      "Tratamento com fluconazol 150 mg dose única.",
      "Tratamento com metronidazol gel vaginal por sete dias.",
      "Bacterioscopia a fresco ou por Gram para diagnóstico."
    ],
    "correctAnswer": 4,
    "explanation": "Corrimento profuso amarelo-esverdeado, com ardência, dispareunia e hiperemia de vagina e colo: o quadro sugere tricomoníase, mas também pode ocorrer em vaginites mistas ou inflamatórias. Pelo PCDT, quando há recurso, o diagnóstico deve ser confirmado com exame a fresco (microscopia com protozoários móveis) e/ou Gram, além de pH e teste das aminas; o tratamento é guiado pelo achado.\n\nA banca considerou que a conduta mais adequada é confirmar com a bacterioscopia.",
    "commentary": "Colposcopia (A): não é o exame para corrimento vaginal.\n\nMetronidazol 2 g dose única (B): é o tratamento da tricomoníase (o PCDT prefere 500 mg 12/12 h por 7 dias), mas a banca preferiu confirmar o diagnóstico primeiro.\n\nFluconazol (C): trataria candidíase, cujo corrimento é branco e grumoso.\n\nMetronidazol gel (D): tratamento de vaginose bacteriana; não é eficaz para tricomoníase.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "tricomoníase",
      "corrimento vaginal",
      "exame a fresco"
    ],
    "tip": "Corrimento amarelo-esverdeado bolhoso = pense em tricomoníase; confirme no exame a fresco."
  },
  {
    "id": "amp2026-40",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 17 anos, nuligesta, sem atividade sexual, IMC = 26 kg/m², sedentária, refere ciclos menstruais irregulares, com intervalos de aproximadamente 60 dias e duração de 8 dias, associados a acne e oleosidade cutânea. Exames laboratoriais (testosterona total e livre, SDHEA, TSH, T4 livre e prolactina) apresentaram-se dentro da normalidade. Ultrassonografia transvaginal evidenciou útero de 90 cm³, ovário direito de 2,3 cm³, ovário esquerdo de 3,4 cm³, endométrio de 8 mm e anexos sem alterações. Com base nos critérios de Roterdã para diagnóstico da Síndrome dos Ovários Policísticos (SOP), assinale a alternativa correta.",
    "options": [
      "A paciente não preenche critérios diagnósticos para SOP, sendo o tratamento mais indicado o uso de anticoncepcionais orais combinados.",
      "A paciente preenche critérios diagnósticos para SOP, e a melhor opção terapêutica é o sistema intrauterino liberador de levonorgestrel.",
      "A paciente preenche critérios diagnósticos para SOP, sendo recomendado o uso de progestagênios na segunda fase do ciclo menstrual, por 10 a 14 dias.",
      "A paciente preenche critérios diagnósticos para SOP. O tratamento indicado inclui mudanças no estilo de vida, estímulo à atividade física, adequação da dieta e uso de anticoncepcionais orais combinados.",
      "A paciente não preenche critérios diagnósticos para SOP. O tratamento mais adequado consiste em mudanças no estilo de vida, uso de anticoncepcionais orais combinados e espironolactona"
    ],
    "correctAnswer": 3,
    "explanation": "Pelos critérios de Roterdã, a SOP exige 2 de 3: oligo/anovulação, hiperandrogenismo clínico ou laboratorial e morfologia ovariana policística. A paciente tem ciclos a cada 60 dias (oligovulação) e acne com oleosidade (hiperandrogenismo clínico), mesmo com androgênios normais e ovários de volume normal: preenche os critérios, após excluídas outras causas (TSH, prolactina normais).\n\nO tratamento inclui mudança de estilo de vida (atividade física e dieta, especialmente com sobrepeso) e anticoncepcional combinado para regular os ciclos e tratar a acne.",
    "commentary": "Não preenche critérios (A e E): ela tem dois critérios.\n\nSIU de levonorgestrel (B): protege o endométrio, mas não trata o hiperandrogenismo; não é a melhor opção para acne.\n\nProgestagênio na segunda fase (C): regula o sangramento, mas não trata a acne.",
    "reference": "International Evidence-based Guideline for PCOS 2023 / FEBRASGO",
    "tags": [
      "síndrome dos ovários policísticos",
      "critérios de Roterdã",
      "hiperandrogenismo"
    ],
    "tip": "Roterdã: 2 de 3 (oligovulação, hiperandrogenismo, ovário policístico)."
  },
  {
    "id": "amp2026-41",
    "topography": "6.1",
    "topic": "Bursites e tendinopatias",
    "module": "Clínica Médica",
    "text": "Sra. Mildred, 55 anos, queixa-se que há quase 3 semanas notou dor na mão D quando tenta descascar alimentos. Percebeu que a dor surge principalmente ao apertar o polegar contra os dedos da mão D quando apóia a faca. De história relevante comenta que aposentou-se recentemente e tem dedicado grande parte de seu tempo livre navegando na internet e atualizando-se sobre as noticias diárias nas redes sociais. Descobriu que ao dar “likes” as redes oferecem cada vez mais conteúdo sobre o assunto e confessa que já ficou mais de duas horas seguidas fazendo scrolling (palavra que agora domina após a filha alertá-la sobre posições viciosas que podem causar problemas). Ao exame físico apresenta edema discreto e sensibilidade dolorosa na região do processo estiloide do rádio a D. A manobra de Phalen e o sinal de Tinel são negativas, mas refere agudização da dor quando coloca o polegar na palma da mão e fecha os dedos sobre ele. Qual destes diagnósticos é o mais provável frente ao conjunto de informações acima?",
    "options": [
      "Trata-se de provável fasceíte palmar.",
      "Trata-se de tenossinovite de Quervain.",
      "Trata-se de artrite gotosa da primeira articulação metacarpofalangeana.",
      "Trata-se de artrite de pequenas articulações, muito provavelmente artrite reumatoide.",
      "Trata-se de síndrome do túnel do carpo com provável artrose de punho concomitante."
    ],
    "correctAnswer": 1,
    "explanation": "Dor no lado radial do punho, sobre o processo estiloide do rádio, ao pinçar com o polegar, piorando com uso repetitivo (uso prolongado do celular), e teste de Finkelstein positivo (dor ao fechar a mão sobre o polegar e desviar ulnarmente): tenossinovite estenosante de De Quervain, dos tendões do abdutor longo e extensor curto do polegar (1º compartimento extensor).",
    "commentary": "Fasceíte palmar (A): espessamento da fáscia palmar (Dupuytren), com nódulos e contratura dos dedos.\n\nGota na metacarpofalangeana (C): artrite aguda muito inflamatória, geralmente no hálux; não é o local nem o quadro.\n\nArtrite reumatoide (D): poliartrite simétrica de pequenas articulações, com rigidez matinal.\n\nTúnel do carpo (E): parestesias no território do mediano, com Phalen e Tinel positivos (negativos aqui).",
    "reference": "SBR / SBOT — Tendinopatias do punho",
    "tags": [
      "tenossinovite de De Quervain",
      "teste de Finkelstein",
      "dor no punho"
    ],
    "tip": "Dor no estiloide radial + Finkelstein positivo = De Quervain."
  },
  {
    "id": "amp2026-42",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Sr. Clodoaldo, 65 anos, conseguiu finalmente reduzir a massa gordurosa em 5 kg, com dieta, prática de Pilates e uso de GLP1ar. Vem a consulta relatando que iniciou com dor em coluna lombar há 2 dias, após empurrar armário na limpeza da casa. Você solicita a ressonância magnética de coluna lombossacra e identifica a presença de fratura de L4. Os exames laboratoriais que realizou há 1 mês não sugerem presença de doença secundária e a densitometria óssea que realizou há 6 meses mostrou escore T em coluna lombar ( L1 - L4) de –1,5 e de fêmur total de -0,5: Qual proposta abaixo se correlaciona ao melhor tratamento neste momento?",
    "options": [
      "Iniciar bisfosfonados orais como o alendronato (70 mg/semana) ou risedronato (35 mg/sem) cujos estudos na população masculina mostrou redução do risco de fraturas vertebrais e não vertebrais em até 70 %.",
      "Suplementar com cálcio (1000 a 1200 mg /dia) e colecalciferol 50 mil UI semanal por 8 semanas e depois manter 15.000 UI semanais de maneira contínua com previsão de redução do risco de fraturas vertebrais em 20 a 30 %.",
      "Prescrever o denosumabe (60 mg/semestral) cujos estudos de 3 anos mostraram reduzir as fraturas vertebrais em 70%, com aumento da massa óssea e redução da ocorrência de fraturas atípicas e de osteonecrose de mandíbula.",
      "Introduzir calcitonina nasal (200 mg/d) que suprime a atividade osteoclástica pela ação direta sobre o receptor da calcitonina nos osteoclastos, reduz a dor, com previsão de redução de risco de fraturas vertebrais e de quadril em até 40 %.",
      "Administrar anualmente o ácido zoledrônico, que embora esteja correlacionado a ocorrência de osteonecrose de mandíbula em pacientes sob tratamento antineoplásico, reduziu o risco de fraturas vertebrais em 70% e mostrou uma redução de 28% na mortalidade."
    ],
    "correctAnswer": 4,
    "explanation": "Fratura vertebral por trauma de baixa energia (empurrar um armário) define osteoporose clinicamente, independentemente da densitometria (T-score −1,5). Com fratura vertebral, o paciente é de alto risco e precisa de tratamento farmacológico.\n\nO ácido zoledrônico EV anual reduz fraturas vertebrais em cerca de 70% e, após fratura de quadril, mostrou redução de mortalidade de cerca de 28% (estudo HORIZON). A osteonecrose de mandíbula é rara nas doses para osteoporose, sendo mais ligada ao uso oncológico.",
    "commentary": "Bisfosfonato oral com redução de 70% em homens (A): os estudos em homens são menores e não mostram redução de fraturas não vertebrais dessa magnitude.\n\nSó cálcio e vitamina D (B): não bastam após fratura por fragilidade.\n\nDenosumabe que reduz fraturas atípicas e osteonecrose (C): o denosumabe pode causar esses eventos raros, não reduzi-los; e sua suspensão leva a efeito rebote.\n\nCalcitonina nasal (D): efeito fraco e associação com câncer; não é recomendada para tratar osteoporose (a dose é em UI, não mg).",
    "reference": "SBEM/ABRASSO — Diretrizes de osteoporose / Estudos HORIZON (NEJM 2007)",
    "tags": [
      "osteoporose",
      "fratura por fragilidade",
      "ácido zoledrônico"
    ],
    "tip": "Fratura vertebral por baixo impacto = osteoporose, qualquer que seja o T-score."
  },
  {
    "id": "amp2026-43",
    "topography": "2.2",
    "topic": "Dislipidemia",
    "module": "Clínica Médica",
    "text": "Erica, 42 anos, diabética e hipertensa bem controlada há 2 anos, em uso de anticoncepcional oral contínuo, assintomática, traz exames de rotina: colesterol= 230mg/dL; HDL colesterol= 31mg/dL; triglicerídios= 125 mg/dL; glicemia de jejum= 102 mg/dl; TSH= 1,5 UI/mL; HA1C=6,4; ácido úrico= 4,5mg/dL; vitamina D= 30 ng/mL. Qual atitude medicamentosa seria mais adequada nesta consulta?",
    "options": [
      "Considerar terapia com estatina de intensidade alta para obter níveis de colesterol LDL < 70 mg/d.",
      "Considerar terapia com estatina de intensidade moderada para obter níveis de colesterol LDL < 100 mg/dL.",
      "Considerar terapia com estatina de intensidade alta, associada a ezetimiba para obter níveis de colesterol LDL < 50 mg/dL.",
      "Considerar tratamento combinado com estatina de intensidade alta intensidade, ezetimiba e fenofibrato também visando elevação do HDL e diminuição do risco CV.",
      "Considerar terapia com ômega 3 [ácido eicosapen taenoico (EPA) e ácido docosaexaenoico (DHA)] evitando, no início, o uso da estatina que pode aumentar discretamente o risco de descompensação do diabetes."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 42 anos com diabetes e hipertensão controlados há pouco tempo, sem lesão de órgão-alvo ou doença aterosclerótica descrita. Pela estratificação da SBC para diabéticos, sem estratificadores de alto risco ela fica no risco intermediário, com meta de LDL < 100 mg/dL — alcançável com estatina de intensidade moderada.\n\nO LDL calculado (Friedewald) é cerca de 174 mg/dL (230 − 31 − 25).",
    "commentary": "Alta intensidade com LDL < 70 (A): seria para alto risco (DM com estratificadores de risco ou lesão de órgão-alvo).\n\nAlta intensidade + ezetimiba com LDL < 50 (C): meta de muito alto risco (doença aterosclerótica estabelecida).\n\nAssociar fenofibrato para elevar HDL (D): não há benefício cardiovascular em elevar HDL farmacologicamente, e os triglicerídeos são normais.\n\nÔmega 3 evitando estatina (E): o benefício cardiovascular da estatina supera muito o pequeno aumento de risco de diabetes; ômega 3 não substitui estatina.",
    "reference": "Atualização da Diretriz Brasileira de Dislipidemias (SBC) / Diretriz SBD 2024",
    "tags": [
      "dislipidemia",
      "estatinas",
      "diabetes mellitus",
      "estratificação de risco cardiovascular"
    ],
    "tip": "Diabético sem estratificadores de risco: intermediário, LDL < 100, estatina moderada."
  },
  {
    "id": "amp2026-44",
    "topography": "1.5",
    "topic": "Hipertireoidismo",
    "module": "Ginecologia e Obstetrícia",
    "text": "Helena, 24 anos, recebeu diagnóstico de doença de Graves há 3 meses e encontra-se em uso de metimazol 10 mg /dia. Vem à consulta, nesta UBS, muita ansiosa, pois teve noticia que está gravidade 8 semanas. Ao exame apresenta-se com pequeno bócio palpavel liso e indolor, tremores finos, mãos frias e úmidas e nenhum sinal de oftalmopatia de Graves. Trouxe exames coletados há 5 dias com os seguintes valores: TSH= 0,1 (0.9-2.2 ng/dL); T4 livre= 1,6 ng/dL (0.9-2.0); T3 livre= 0,4 ng/dL (0,30 a 0,47); TRAb 0,55 UI/L (até 0,55). A melhor conduta neste momento, além de reencaminhá-la ao endocrinologista que solicitou estes exames de controle, será",
    "options": [
      "Trocar o metimazol pelo propiltiouracil na proporção de 100 mg para 1 mg de metimazol, podendo mantê-lo até o final da gestação, se necessário.",
      "Trocar o metimazol por propiltiouracil e acrescentar levotiroxina em baixas dosagens devido a ação inibi tória do fármaco sobre a conversão de T3 em T4.",
      "Aumentar a dose de metimazol para 20 mg /d, pois as imunoglobulinas estimulantes da tireoide tendem a aumentar no transcorrer do período gestacional.",
      "Suspender a medicação antitireoidiana, pois considera-se que além dos riscos de teratogenicidade do metimazol, os exames atuais estão compatíveis com o bom controle da doença.",
      "Manter o metimazol na dose de 10 mg e acrescentar levotiroxina em baixas dosagens (esquema de bloqueio-reposição) para manter níveis normais de T4 livre sem prejuízo ao feto."
    ],
    "correctAnswer": 3,
    "explanation": "Gestante de 8 semanas com doença de Graves em metimazol, com T4 livre normal, T3 livre normal e TRAb no limite (negativo/baixo). As diretrizes (ATA 2017) recomendam, ao confirmar a gestação, avaliar a suspensão do antitireoidiano em pacientes bem controladas com dose baixa, pois o metimazol no primeiro trimestre (6–10 semanas) se associa a malformações. Com TRAb baixo, o risco de recidiva é pequeno, e a paciente deve ser monitorada com função tireoidiana a cada 1–2 semanas.",
    "commentary": "Trocar por PTU até o fim da gestação (A): a troca por PTU se faz no 1º trimestre, se o tratamento for necessário (proporção 1:20), mas o PTU é hepatotóxico e não deve ser mantido a gestação toda.\n\nPTU com levotiroxina (B): o bloqueio-reposição não é usado na gestação, e o PTU inibe a conversão periférica de T4 em T3 (não o contrário).\n\nAumentar o metimazol (C): a doença está controlada, e os anticorpos tendem a cair durante a gestação.\n\nMetimazol com levotiroxina (E): o esquema bloqueio-reposição é contraindicado na gestação (exige dose maior de antitireoidiano, que atravessa a placenta).",
    "reference": "ATA 2017 — Guidelines for thyroid disease during pregnancy / SBEM",
    "tags": [
      "doença de Graves",
      "hipertireoidismo na gestação",
      "metimazol",
      "propiltiouracil"
    ],
    "tip": "Graves controlado com dose baixa e gestação inicial: considere suspender o antitireoidiano."
  },
  {
    "id": "amp2026-45",
    "topography": "4.1",
    "topic": "Nefropatia diabética",
    "module": "Clínica Médica",
    "text": "Sra. Rita, 65 anos, diabética, obesa, em tratamento com metformina 2 g ao dia, vem a consulta solicitando informações. Relata ter ouvido uma entrevista sobre as complicações crônicas do diabetes e ficou preocupada, pois nunca fora orientada a consultar-se com um nefrologista. Seus últimos exames mostraram glicemia 2 horas após o almoço de 165 mg/dL; HA1c de 6,3; ureia de 40 mg/dl e creatinina de 1,12 mg/dl. Após analisar o caso você informa que o encaminhamento será realizado em caso de",
    "options": [
      "Hipertensão arterial resistente ao controle com 2 ou mais drogas antihipertensivas.",
      "Desejo de transplante de células beta (ilhotas) com ou sem transplante renal simultâneo.",
      "Necessidade de orientação sobre acesso vascular para a hemodiálise ou diálise peritoneal.",
      "Inclusão no sistema SUS para recebimento de medicação contínua de inibidores do SGLT-2.",
      "A taxa de filtração glomerular estimada for < 30 mL/min por 1,73 m2 ou a proteinúria se mostrar > 3 g/dia."
    ],
    "correctAnswer": 4,
    "explanation": "A paciente tem função renal preservada (TFG estimada acima de 60). O encaminhamento ao nefrologista na doença renal do diabetes é indicado quando a TFG estimada fica abaixo de 30 mL/min/1,73 m², com proteinúria importante (> 3 g/dia, ou relação albumina/creatinina muito elevada), perda rápida de função, hematúria ou dúvida diagnóstica.",
    "commentary": "Hipertensão resistente com 2 drogas (A): hipertensão resistente exige 3 drogas incluindo diurético; e o encaminhamento seria ao especialista em hipertensão, não indicação renal per se.\n\nTransplante de ilhotas (B): não é critério habitual.\n\nOrientação sobre diálise (C): já pressupõe doença renal avançada, contemplada pelo critério da TFG.\n\nRecebimento de iSGLT2 pelo SUS (D): não é critério de encaminhamento ao nefrologista.",
    "reference": "KDIGO 2022 — Diabetes in CKD / Diretriz da SBD 2024",
    "tags": [
      "doença renal do diabetes",
      "encaminhamento ao nefrologista",
      "taxa de filtração glomerular"
    ],
    "tip": "Diabético ao nefrologista: TFG < 30, proteinúria > 3 g/dia, perda rápida ou dúvida diagnóstica."
  },
  {
    "id": "amp2026-46",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente sexo masculino, acorda com déficit motor à direita e fala arrastada. Há 5 horas do último momento assintomático conhecido. Realizou tomografia computadorizada de crânio com ausência de hemorragia, e no estudo da perfusão demonstra uma área de penumbra significativa. Qual é a conduta mais adequada?",
    "options": [
      "Iniciar anticoagulação oral imediata.",
      "Apenas suporte clínico e posteriormente investigação da etiologia do AVE.",
      "Craniectomia descompressiva, a fim de reduzir a hipertensão intracraniana.",
      "Não indicar trombólise, pois acima de 4,5 horas sempre está contraindicado.",
      "Considerar trombólise, uma vez que protocolos avançados permitem trombolisar se houver ressonância magnética de crânio com DWI/FLAIR mismatch (restrição da difusão sem alteração no FLAIR) ."
    ],
    "correctAnswer": 4,
    "explanation": "AVC isquêmico ao acordar (wake-up stroke), com 5 horas desde o último momento visto bem e penumbra significativa na perfusão. Estudos (WAKE-UP, EXTEND) mostraram benefício da trombólise além de 4,5 horas em pacientes selecionados por imagem: mismatch DWI/FLAIR na ressonância (lesão na difusão sem correspondência no FLAIR, indicando início recente) ou mismatch na perfusão. Com déficit em território de grande vaso, também deve ser avaliada a trombectomia.",
    "commentary": "Anticoagulação imediata (A): não é indicada na fase aguda do AVC isquêmico.\n\nSó suporte (B): ignora terapias de reperfusão possíveis.\n\nCraniectomia descompressiva (C): reservada para infarto maligno da artéria cerebral média com edema.\n\nAcima de 4,5 h sempre contraindicado (D): protocolos guiados por imagem permitem tratar depois.",
    "reference": "AHA/ASA 2019 — Guidelines for early management of acute ischemic stroke / Estudos WAKE-UP e EXTEND",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "mismatch DWI/FLAIR",
      "AVC ao despertar"
    ],
    "tip": "AVC ao acordar: mismatch DWI/FLAIR ou penumbra na perfusão permite trombolisar."
  },
  {
    "id": "amp2026-47",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Paciente de 65 anos de idade com diagnóstico de insuficiência cardíaca com fração de ejeção reduzida (FE 28%) secundária a miocardiopatia isquêmica. No momento está em uso de carvedilol 25mg, enalapril 10mg, espironolactona 25mg /dia e uso de diurético de alça conforme a necessidade. Mesmo otimizado clinicamente, permanece sintomático (NYHA 3) e foi recentemente internado por descompensação. Ecocardio transtorácico demonstra dilatação ventricular esquerda, eletrocardiograma um QRS de 112 ms em ritmo sinusal. Função renal estável, creatinina 1,3mg/dl. Considerando evidências e recomendações atuais, a melhor próxima intervenção farmacológica que provavelmente reduzirá hospitalizações e mortalidade deste paciente?",
    "options": [
      "Suspender a espironolactona e iniciar ivabradina.",
      "Avaliar o uso de inotrópico, com infusão ambulatorial crônica para melhora dos sintomas.",
      "Trocar carvedilol por um betabloqueador cardios seletivo (bisoprolol) como primeira medida.",
      "Introduzir inibidor SGLT2 (por exemplo empaglifo zina) , e após estabilização clínica avaliar a troca de IECA por sacubitril/valsartana (ARNI).",
      "Realizar a troca de enalapril e espironolactona, e iniciar vasodilatadores que reduzem pré e pós carga como hidralazina e monocordil."
    ],
    "correctAnswer": 3,
    "explanation": "Insuficiência cardíaca com fração de ejeção reduzida, sintomática (NYHA III) e com internação recente, usando betabloqueador, IECA e espironolactona. O pilar que falta é o inibidor de SGLT2 (dapagliflozina ou empagliflozina), que reduz mortalidade cardiovascular e hospitalização. Também é indicado trocar o IECA por sacubitril/valsartana (ARNI), superior ao enalapril no PARADIGM-HF. O QRS de 112 ms não indica ressincronização.",
    "commentary": "Trocar espironolactona por ivabradina (A): a espironolactona reduz mortalidade; a ivabradina é para FC ≥ 70 em ritmo sinusal apesar de betabloqueador, em adição.\n\nInotrópico ambulatorial crônico (B): aumenta mortalidade; uso só paliativo ou ponte.\n\nTrocar carvedilol por bisoprolol (C): os betabloqueadores com evidência têm benefício semelhante.\n\nHidralazina e nitrato no lugar de IECA e espironolactona (E): a combinação é alternativa para quem não tolera IECA/BRA/ARNI ou adicional em negros, não substituta.",
    "reference": "Diretriz Brasileira de Insuficiência Cardíaca (SBC, atualização 2021) / ESC 2021-2023",
    "tags": [
      "insuficiência cardíaca com fração de ejeção reduzida",
      "iSGLT2",
      "sacubitril/valsartana"
    ],
    "tip": "ICFEr: os 4 pilares — betabloqueador, ARNI/IECA, antagonista mineralocorticoide e iSGLT2."
  },
  {
    "id": "amp2026-48",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Paciente dá entrada na sala de emergência referindo dispneia intensa e desconforto torácico. Ao monitorar paciente percebemos PA 160/70, FC 160bpm, FR 32, sat 88%, na ausculta pulmonar presença de estertores crepitantes até terço médio bilateral. Realizado eletrocardiograma, percebemos ausência da onda P e ritmo irregular. Diante do quadro clínico e da interpretação eletrocardiográfica, qual a melhor conduta a ser tomada?",
    "options": [
      "Cardioversão elétrica com 50J no desfibrilador monofásico",
      "Cardioversão elétrica com 200J no desfibrilador monofásico.",
      "Realizar manobra vagal se o paciente não responder infusão de adenosina 6mg EV.",
      "Investigar causas secundárias que possam estar levando ao aumento da frequência cardíaca.",
      "Amiodarona dose de ataque, seguido da dose manutenção 1mg/min nas primeiras 6 horas e 0,5mg/min nas próximas 18h."
    ],
    "correctAnswer": 1,
    "explanation": "Taquiarritmia irregular sem onda P (fibrilação atrial com resposta ventricular de 160 bpm) com sinais de instabilidade: congestão pulmonar (estertores até o terço médio), dispneia intensa, hipoxemia e desconforto torácico. Taquiarritmia instável indica cardioversão elétrica sincronizada imediata.\n\nPara fibrilação atrial, a energia inicial no desfibrilador bifásico é de 120–200 J, e no monofásico, 200 J.",
    "commentary": "50 J monofásico (A): energia baixa demais para fibrilação atrial (50–100 J é para flutter e TSV).\n\nManobra vagal e adenosina (C): tratam TSV regular de QRS estreito; não revertem FA e não cabem em paciente instável.\n\nInvestigar causas secundárias (D): importante, mas depois de estabilizar.\n\nAmiodarona (E): opção em paciente estável; no instável a cardioversão elétrica é a prioridade.",
    "reference": "AHA 2020 — Taquicardia com pulso / Diretriz Brasileira de Fibrilação Atrial (SBC)",
    "tags": [
      "fibrilação atrial",
      "cardioversão elétrica sincronizada",
      "taquiarritmia instável"
    ],
    "tip": "Taquiarritmia com instabilidade: cardioversão sincronizada. FA: 200 J monofásico."
  },
  {
    "id": "amp2026-49",
    "topography": "2.2",
    "topic": "Síndrome coronariana aguda",
    "module": "Clínica Médica",
    "text": "Nem sempre quem tem uma artéria coronária ocluída apresenta o supradesnivelamento clássico no ST no ECG. Estudos mostram que cerca de 50-60% dos pacientes com oclusão coronariana aguda (OCA) não se enquadram nos critérios tradicionais de IAM com supra de ST. Isso pode atrasar o diagnóstico de reperfusão e piorar o desfecho clínico. Baseado neste contexto, qual a melhor conduta diante de uma paciente com dor torácica típica e eletrocardiograma sem supra do segmento ST?",
    "options": [
      "Está indicado trombólise química ( rt pa ) imediata.",
      "Deve ser encaminhado a estratégia invasiva imediata.",
      "Deve ser realizada uma angiotomografia de coronárias a fim de estabelecer o diagnóstico.",
      "Paciente deve ser encaminhado imediatamente para Unidade de Terapia Intensiva para iniciar droga inotrópica a fim de melhorar perfusão tecidual e estabilização clínica.",
      "Estratificar o risco do paciente, realizar eletrocardiograma seriados, coletar marcadores de necrose miocárdica e procurar ativamente no eletrocardiograma novos padrões que sugiram obstrução coronariana aguda."
    ],
    "correctAnswer": 4,
    "explanation": "Dor torácica típica com ECG sem supra de ST não exclui oclusão coronariana. A conduta é estratificar o risco (HEART, GRACE), repetir o ECG a cada 15–30 minutos, dosar troponina seriada e buscar ativamente padrões equivalentes de oclusão (onda T hiperaguda, padrão de De Winter, infra de ST em V1–V4 indicando IAM posterior, supra em aVR com infra difuso, critérios de Sgarbossa no BRE). Encontrar esses padrões muda a conduta para reperfusão imediata.",
    "commentary": "Trombólise imediata (A): não é indicada no IAM sem supra de ST.\n\nEstratégia invasiva imediata para todos (B): reservada aos casos de muito alto risco (instabilidade, angina refratária, arritmia, IC); a regra é estratificar primeiro.\n\nAngiotomografia de coronárias (C): útil em dor de baixo-intermediário risco, não para quem tem dor típica e suspeita de oclusão aguda.\n\nUTI com inotrópico (D): não há choque descrito; inotrópico não trata a isquemia.",
    "reference": "Diretriz da SBC sobre angina instável e IAM sem supra de ST / ESC 2023 — Síndromes coronarianas agudas",
    "tags": [
      "síndrome coronariana aguda",
      "IAM sem supra de ST",
      "equivalentes de oclusão",
      "eletrocardiograma"
    ],
    "tip": "Dor típica sem supra: ECG seriado, troponina e procurar equivalentes de oclusão."
  },
  {
    "id": "amp2026-50",
    "topography": "10",
    "topic": "Endocardite",
    "module": "Clínica Médica",
    "text": "Os médicos costumam se referir a qualquer doença febril sem uma etiologia obvia inicial como Febre de Origem Obscura (FOO). A maioria das doenças febris melhora antes que um diagnóstico possa ser feito ou que desenvolva características que possibilitem o diagnóstico. O termo FOO deve ser reservado para doenças febris prolongadas sem uma etiologia estabelecida apesar da avaliação e exames diagnósticos intensivos. Diante do exposto, analise as afirmativas abaixo I - Na população idosa três diagnósticos possíveis de FOO, arterite de células temporais associada à polimialgia reumática, doença de Still e neoplasia colorretal devem ser consideradas.\n\nII - A febre com sinais de endocardite e hemoculturas negativas representa um problema especial. A endocardite com culturas negativas pode ser causada por bactérias de difícil cultivo, como bactérias nutricionalmente variantes, os microrganismos do grupo HACEK.\n\nIII - A febre de origem obscura é definida como febre > 37,8 em pelo menos duas ocasiões, duração de doença maior que 1 semana, presença de imunocomprometimento conhecido, diagnóstico que permanece incerto após anamnese e exame físico detalhados e os seguintes exames obrigatórios: determinação de VHS e proteína C reativa, contagem de plaquetas, contagem total e diferencial de leucócitos, medidas dos níveis de hemoglobina, eletrólitos, creatinina, proteínas totais, fosfatase alcalina, FAN, fator reumatoide, eletroforese de proteínas, parcial de urina com urocultura, hemoculturas, radiografia de tórax, ultrassonografia abdominal e teste cutâneo com tuberculina ou IGRA teste.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 0,
    "explanation": "I — certa: em idosos, causas importantes de febre de origem obscura são arterite de células gigantes (com polimialgia reumática), doença de Still do adulto (menos frequente) e neoplasias como o câncer colorretal.\nII — certa: endocardite com hemoculturas negativas pode ser causada por bactérias de difícil cultivo, como as nutricionalmente variantes (Abiotrophia, Granulicatella) e o grupo HACEK, além de Coxiella, Bartonella e uso prévio de antibióticos.\nIII — errada: a definição clássica exige febre por mais de 3 semanas e ausência de imunocomprometimento (os imunocomprometidos formam categorias à parte).\n\nApenas I e II estão corretas.",
    "commentary": "I e III (B) e II e III (C): a III está errada (tempo e imunocomprometimento).\n\nTodas corretas (D): a III está errada.\n\nTodas incorretas (E): I e II são verdadeiras.",
    "reference": "Harrison — Febre de origem obscura / Petersdorf e Durack",
    "tags": [
      "febre de origem obscura",
      "endocardite com cultura negativa",
      "grupo HACEK"
    ],
    "tip": "FOO clássica: febre > 3 semanas, sem diagnóstico após investigação, em imunocompetente."
  },
  {
    "id": "amp2026-51",
    "topography": "7.2",
    "topic": "Carcinoma basocelular",
    "module": "Clínica Médica",
    "text": "O câncer de pele não melanoma (CPNM) é o câncer mais comum nos Estados Unidos. A respeito do tema assinale a alternativa correta com V (verdadeiro) ou F (falso).\n\nI) Os carcinomas basocelulares (CBC) são responsáveis por 70 a 80% dos casos, enquanto os carcinomas de células escamosas (CCE) representam 20% dos casos.\n\nII) A maioria dos tumores se desenvolve em áreas da cabeça e do pescoço expostas ao sol. O risco de CCE labial ou oral aumenta com o tabagismo e a semelhança do CCE da orelha, apresenta prognóstico mais sombrio do que aquele observado em outros locais do corpo.\n\nIII) O carcinoma basocelular (CBC) é uma neoplasia cutânea que se origina de células basais epiteliais imaturas pluripotentes, que perderam sua capacidade de diferenciação e queratização normais.\n\nIV) A forma nódulo-ulcerativa é mais comum, geralmente única, acomete sobretudo cabeça e pescoço. Caracteriza-se como pápula ou nódulo com aspecto perolado, muitas vezes com telangiectasias de padrão característico à dermatoscopia.",
    "options": [
      "VFFV.",
      "VVFF.",
      "FFFF.",
      "VVVF.",
      "VVVV."
    ],
    "correctAnswer": 4,
    "explanation": "As quatro afirmativas estão corretas.\n\nI: o carcinoma basocelular responde por cerca de 70–80% dos cânceres de pele não melanoma, e o espinocelular por cerca de 20%.\nII: a maioria surge em áreas fotoexpostas da cabeça e pescoço; o tabagismo aumenta o risco de CEC de lábio e boca, e os CEC de lábio e orelha têm pior prognóstico (mais metástases).\nIII: o CBC se origina de células basais pluripotentes da epiderme e dos folículos, que perderam a capacidade de diferenciação e queratinização.\nIV: a forma nódulo-ulcerativa é a mais comum: pápula ou nódulo perolado com telangiectasias arboriformes, que pode ulcerar no centro.",
    "commentary": "VFFV (A), VVFF (B), FFFF (C) e VVVF (D): todas marcam como falsa alguma afirmativa verdadeira.",
    "reference": "SBD / Fitzpatrick's Dermatology — Câncer de pele não melanoma / INCA",
    "tags": [
      "carcinoma basocelular",
      "carcinoma espinocelular",
      "câncer de pele"
    ],
    "tip": "CBC: o mais comum, perolado com telangiectasias. CEC de lábio e orelha: pior prognóstico."
  },
  {
    "id": "amp2026-52",
    "topography": "9",
    "topic": "Coagulopatias",
    "module": "Clínica Médica",
    "text": "A classificação da Organização Mundial da Saúde (OMS) das neoplasias mieloproliferativas (NMPs) crônicas inclui distúrbios, alguns dos quais raros ou pouco caracterizados, mas todos compartilhando uma origem a partir de uma célula hematopoiética, a superprodução de um ou mais elementos do sangue sem displasia importante e uma predileção por hematopoiese extramedular, mielofibrose e transformação, em taxas variadas, em leucemia aguda. Considerando as neoplasias mieloproliferativas sem fenótipo mielocítico (mielofibrose primária, trombocitose essencial e policitemia vera), julgue as alternativas a seguir sobre a correta.",
    "options": [
      "Na trombocitose essencial, em contagens de plaquetas muito elevadas, especialmente quando acima de 1.000.000/mm³, existe risco elevado de hemorragia causada por doença de von Willebrand.",
      "A policitemia vera é limitada a eritrocitose isolada, por vezes associada a prurido aquagênico, e a presença de trombocitose isolada, leucocitose ou esplenomegalia devem direcionar a investigação a outras neoplasias mieloproliferativas.",
      "As três doenças citadas apresentam quadros clínicos extremamente variados entre si, sendo que a policitemia vera, a mais rara das três, tem a sintomatologia mais grave e agressiva, rotineiramente cursando com sintomas constitucionais e esplenomegalia.",
      "A trombocitose essencial, que apresenta alta chance de evolução para leucemia mieloide aguda, requer tratamento, na maior parte dos casos envolvendo quimioterapia, exceto em casos de intolerabilidade do paciente, que neste caso deve receber transplante alogênico de medula óssea",
      "Paradoxalmente à alcunha de mieloproliferação estabelecida pela OMS, a mielofibrose primária comumente cursa com pancitopenia já em estágio inicial, em decorrência da perda de tecido medular para eritropoese eficaz, associada a sintomas constitucionais como perda ponderal e sudorese noturna."
    ],
    "correctAnswer": 0,
    "explanation": "Na trombocitemia essencial, contagens muito altas de plaquetas (geralmente > 1.000.000/mm³) causam doença de von Willebrand adquirida: as plaquetas em excesso adsorvem e degradam os multímeros grandes do fator de von Willebrand, levando a sangramento. Por isso, nesse cenário, deve-se dosar a atividade do FvW antes de usar AAS.",
    "commentary": "Policitemia vera limitada à eritrocitose (B): a PV frequentemente cursa com leucocitose, trombocitose e esplenomegalia; a presença delas reforça o diagnóstico.\n\nPV a mais rara e mais grave (C): a mielofibrose primária é a mais rara e de pior prognóstico, com sintomas constitucionais e esplenomegalia volumosa.\n\nTrombocitemia com alta chance de LMA e quimioterapia (D): a transformação é rara; o tratamento é baseado no risco trombótico (AAS ± hidroxiureia).\n\nMielofibrose com pancitopenia precoce (E): na fase inicial (pré-fibrótica) costuma haver leucocitose e trombocitose; a pancitopenia aparece na fase avançada.",
    "reference": "Harrison — Neoplasias mieloproliferativas / OMS 2022 / ABHH",
    "tags": [
      "neoplasias mieloproliferativas",
      "trombocitemia essencial",
      "doença de von Willebrand adquirida"
    ],
    "tip": "Plaquetas > 1 milhão podem sangrar: von Willebrand adquirido."
  },
  {
    "id": "amp2026-53",
    "module": "Clínica Médica",
    "text": "Paciente de 62 anos, tabagista de longa data, apresenta dispneia progressiva, tosse e edema facial que piora em decúbito dorsal. Ao exame, observa-se pletora facial, dilatação de veias cervicais e colaterais torácicas anteriores. A tomografia computadorizada de tórax mostra massa mediastinal com compressão da veia cava superior. Sobre a síndrome da veia cava superior, assinale a alternativa correta.",
    "options": [
      "O achado mais significativo nas radiografias de tórax é o de derrame pleural, em geral localizado à direita.",
      "Em geral, os pacientes com síndrome de veia cava superior apresentam edema da face e do pescoço e os sintomas são progressivos, mas, em alguns casos, eles podem melhorar com o desenvolvimento de circulação colateral.",
      "Para seu diagnóstico é essencial a realização de exame de imagem - idealmente ressonância magnética de tórax e cervical, entretanto a tomografia de tórax pode ser considerada se impossibilidade de realização daquele exame.",
      "O desenvolvimento de varizes esofágicas, particularmente no contexto de uso de cateter de hemodiálise, deve direcionar a investigação a outras etiologias como síndrome hepatorrenal, na qual há deficiência na produção de fatores de coagulação e aumento da pressão portal.",
      "Embora classicamente fosse considerada uma síndrome relacionada a obstrução direta da veia cava superior por neoplasias malignas, hoje sabe-se que existe predominância de etiologias benignas como uso de cateteres de acesso venoso central de longa duração, marca-passos e doenças auto-imunes, particularmente a síndrome de Behçet."
    ],
    "correctAnswer": 1,
    "explanation": "Na síndrome da veia cava superior há edema de face e pescoço, pletora, turgência jugular e circulação colateral. Os sintomas costumam progredir, mas podem melhorar à medida que se desenvolvem colaterais (sistema ázigos, mamárias internas), o que explica a variação do quadro.\n\nA alternativa B está correta.",
    "commentary": "Derrame pleural como achado mais significativo (A): o achado radiográfico mais comum é o alargamento do mediastino.\n\nRessonância como exame ideal (C): o exame de escolha é a tomografia com contraste.\n\nVarizes e síndrome hepatorrenal (D): na obstrução da cava superior podem surgir varizes esofágicas \"de cima para baixo\" (downhill), sem relação com hipertensão portal ou síndrome hepatorrenal.\n\nPredomínio de causas benignas (E): a maioria dos casos ainda é por neoplasias malignas (câncer de pulmão e linfomas), embora as causas por cateteres tenham aumentado.",
    "reference": "Harrison — Emergências oncológicas",
    "tags": [
      "síndrome da veia cava superior",
      "emergências oncológicas",
      "câncer de pulmão"
    ],
    "tip": "Veia cava superior: maioria maligna (pulmão, linfoma); TC com contraste; colaterais podem melhorar os sintomas."
  },
  {
    "id": "amp2026-54",
    "module": "Clínica Médica",
    "text": "As células neoplásicas podem produzir uma variedade de produtos capazes de estimular respostas hormonais, hematológicas, dermatológicas, reumatológicas, renais e neurológicas. Dentre as síndromes paraneoplásicas mais comuns, considere as alternativas a seguir e indique a correta.",
    "options": [
      "Trombocitose, eosinofilia e granulocitose são achados frequentes em pacientes neoplásicos e, excluídas causas secundárias como infecções ou parasitoses, não requerem tratamento direto além do direcionado ao câncer.",
      "A hipercalcemia humoral do câncer pode cursar com aumento acentuado do cálcio sérico levando a fadiga, alteração do estado mental, desidratação e nefrolitíase - nestes casos observa-se grande aumento do PTH sérico.",
      "Em neoplasias malignas onde ocorre produção ectópica de gonadotrofina coriônica humana (hCG) é necessária a ablação completa de órgãos germinativos em homens ou mulheres, devido ao risco de recidiva tumoral futura.",
      "Fraqueza, letargia, náuseas, alteração do estado mental e convulsões podem ser sintomas de SIADH associada a neoplasia, no qual o excesso de vasopressina provoca níveis supra fisiológicos de sódio, chegando a níveis superiores a 150 mEq/L em casos graves.",
      "A trombose venosa profunda e a embolia pulmonar são os distúrbios trombóticos mais comuns nos pacientes com câncer e pacientes com diagnóstico neoplásico devem receber quimioprofilaxia contra TEV durante o tratamento, mesmo fora do ambiente hospitalar."
    ],
    "correctAnswer": 0,
    "explanation": "Alterações hematológicas paraneoplásicas como trombocitose, eosinofilia e granulocitose são frequentes e, em geral, não causam sintomas nem exigem tratamento próprio; afastadas causas secundárias (infecção, parasitose), o manejo é o do câncer.",
    "commentary": "Hipercalcemia humoral com PTH alto (B): na hipercalcemia humoral, por PTHrP, o PTH está suprimido.\n\nAblação gonadal na produção ectópica de hCG (C): não há essa indicação; trata-se o tumor.\n\nSIADH com sódio > 150 (D): a SIADH causa hiponatremia, não hipernatremia.\n\nProfilaxia de TEV ambulatorial para todos (E): a tromboprofilaxia ambulatorial é indicada só para pacientes de alto risco (escore de Khorana ≥ 2 ou mieloma em uso de imunomoduladores), não para todos.",
    "reference": "Harrison — Síndromes paraneoplásicas / ASCO 2023 — VTE prophylaxis in cancer",
    "tags": [
      "síndromes paraneoplásicas",
      "oncologia",
      "hipercalcemia da malignidade"
    ],
    "tip": "Hipercalcemia humoral: PTH baixo e PTHrP alto. SIADH: hiponatremia."
  },
  {
    "id": "amp2026-55",
    "topography": "9",
    "topic": "Neutropenia febril",
    "module": "Clínica Médica",
    "text": "As infecções constituem uma causa comum de morte e uma causa ainda mais comum de morbidade em pacientes que apresentam ampla variedade de neoplasias malignas – a depender do tipo de neoplasia, os óbitos relacionados a infecção podem chegar a 50% dos casos. A evolução da abordagem na prevenção e no tratamento das complicações infecciosas do câncer tem diminuído as taxas de mortalidade associadas às infecções e provavelmente continuará a fazê-lo. Julgue as alternativas a seguir e aponte a correta.",
    "options": [
      "Vacinas de vírus vivos (ou de bactérias vivas) não devem ser administradas a pacientes durante a quimioterapia intensiva, devido ao risco de infecção disseminada.",
      "Na neutropenia febril em terapia inicial sem foco definido, recomenda-se o uso empírico de vancomicina, reavaliando a manutenção deste tratamento após resultados de culturas.",
      "Pacientes com febre e neutropenia devem receber terapia intravenosa com cobertura de amplo espectro contra bactérias gram-negativas e gram-positivas e pseudomonas; o tratamento ambulatorial com antibióticos via oral nesta situação é contraindicado.",
      "Os esquemas de antibióticos recomendados empiricamente para o tratamento de pacientes febris nos quais se espera uma neutropenia de longa duração (> 7 dias) incluem cefalosporina de terceira geração, macrolídeo e sulfametoxazol/trimetoprima, frequentemente em associação.",
      "Cateteres intravenosos que são usados na quimioterapia estão propensos a causar infecção e representam um problema importante no tratamento destes pacientes; infecções de cateteres são tratadas com antibióticos e é contraindicada a remoção cirúrgica, tanto pela necessidade de via terapêutica para quimioterapia quanto pelo risco de disseminação séptica na manipulação dos mesmos."
    ],
    "correctAnswer": 0,
    "explanation": "Vacinas com agentes vivos atenuados (tríplice viral, varicela, febre amarela, BCG, tifoide oral) são contraindicadas durante a quimioterapia intensiva e por pelo menos 3 meses após, pelo risco de infecção disseminada pelo agente vacinal. Vacinas inativadas podem ser usadas, idealmente antes do tratamento.",
    "commentary": "Vancomicina empírica inicial (B): não é rotina na neutropenia febril; é acrescentada em situações específicas (instabilidade, infecção de cateter, pele e partes moles, pneumonia, colonização por MRSA).\n\nAntibiótico oral contraindicado (C): pacientes de baixo risco (MASCC ≥ 21) podem ser tratados ambulatorialmente com antibiótico oral.\n\nCefalosporina de 3ª geração, macrolídeo e sulfametoxazol (D): o esquema empírico é um betalactâmico antipseudomonas (cefepima, piperacilina-tazobactam, meropeném).\n\nRemoção de cateter contraindicada (E): o cateter deve ser retirado em várias situações (S. aureus, Pseudomonas, fungos, infecção de túnel, bacteremia persistente).",
    "reference": "IDSA/ASCO — Febrile neutropenia guidelines / Manual dos CRIE (MS)",
    "tags": [
      "neutropenia febril",
      "vacinas de vírus vivos",
      "imunossupressão",
      "oncologia"
    ],
    "tip": "Quimioterapia: nada de vacina viva. Neutropenia febril: betalactâmico antipseudomonas."
  },
  {
    "id": "amp2026-56",
    "topography": "9",
    "topic": "Trombocitopenias",
    "module": "Clínica Médica",
    "text": "Paciente de 28 anos internado em hospital terciário após fratura de membro inferior após acidente de moto, realizando profilaxia contra trombose com heparina de baixo peso molecular, após cinco dias apresenta plaquetopenia, sem sangramento. Mantido o tratamento, após quatro dias evolui com trombose do membro inferior contralateral à fratura e verifica-se queda de contagem de plaquetas para 32.000/mm³, eritrograma e leucograma sem alterações. O médico assistente observa que o exame laboratorial prévio ao internamento do paciente era normal. Avalie a alternativa correta perante o caso clínico.",
    "options": [
      "A melhor terapia neste momento seria a de esplenectomia, entretanto apenas após a transfusão de plaquetas devido ao risco de sangramento",
      "É imprescindível a realização o quanto antes de plasmaférese neste caso pois o diagnóstico mais plausível é o de púrpura trombocitopênica trombótica (PTT).",
      "A hipótese mais plausível neste caso é a de púrpura trombocitopênica imune (PTI) e deve-se iniciar imediatamente o tratamento de primeira linha com prednisona 1 mg/kg/dia.",
      "Neste momento, deve-se suspender a heparina (pelo risco de sangramento) e tão logo seja possível a realização de aspirado e biópsia de medula óssea para investigação de leucemias agudas ou síndrome mielodisplásica.",
      "Trata-se de provável caso de trombocitopenia induzida por heparina (TIH), cuja complicação mais frequente é a de trombose, ainda que com contagens baixas nas plaquetas, e deve-se interromper imediatamente o uso de heparina e sua substituição por anticoagulante alternativo como varfarina."
    ],
    "correctAnswer": 4,
    "explanation": "Queda importante de plaquetas entre o 5º e o 10º dia de heparina, com trombose nova: trombocitopenia induzida por heparina (TIH), reação imune (anticorpos anti-PF4/heparina) que é paradoxalmente trombótica. A conduta é suspender toda heparina e iniciar um anticoagulante não heparínico (argatrobana, fondaparinux, bivalirudina ou anticoagulante oral direto).\n\nA banca deu como certa a alternativa E, que acerta o diagnóstico e a suspensão da heparina.",
    "commentary": "Esplenectomia e transfusão de plaquetas (A): tratamentos de PTI; na TIH a transfusão de plaquetas pode piorar a trombose.\n\nPlasmaférese por PTT (B): a PTT exige anemia hemolítica microangiopática, ausente.\n\nPTI e prednisona (C): o contexto (heparina e trombose) aponta para TIH.\n\nMielograma (D): suspender a heparina está certo, mas o motivo não é o sangramento e não há indicação de investigar leucemia.\n\nObservação sobre E: a varfarina não deve ser usada como substituta inicial na TIH — no início, ela reduz a proteína C e pode causar necrose de pele e gangrena venosa. Só é introduzida depois que as plaquetas se recuperam (> 150 mil), sobreposta a um anticoagulante não heparínico. A alternativa é a melhor das cinco, mas o detalhe do tratamento está errado.",
    "reference": "ASH 2018 — Guidelines for heparin-induced thrombocytopenia",
    "tags": [
      "trombocitopenia induzida por heparina",
      "trombose",
      "anticoagulação"
    ],
    "tip": "TIH: suspenda a heparina e use argatrobana, fondaparinux ou DOAC. Varfarina só após recuperar as plaquetas.",
    "alert": "Gabarito discutível: a alternativa E sugere substituir a heparina por varfarina, o que é contraindicado na fase aguda da TIH. É a melhor opção entre as oferecidas, mas o tratamento correto é um anticoagulante não heparínico."
  },
  {
    "id": "amp2026-57",
    "topography": "2.1",
    "topic": "Asma",
    "module": "Clínica Médica",
    "text": "M.R.S, 16 anos, compareceu ao pronto-socorro acompanhado pela mãe, com queixa de tosse persistente e falta de ar, especialmente à noite e durante a prática de exercícios físicos. Os sintomas se iniciaram há cerca de 6 meses e têm se tornado mais frequentes e intensos. A mãe relata que o paciente acorda algumas noites com tosse, o que o impede de ter uma boa noite de sono. O paciente nega tabagismo, febre, dor no peito, perda de peso ou outros sintomas sistêmicos. Após consulta com a clínica médica foi requisitada uma espirometria com prova broncodilatadora (b.d.) cujo resultado se apresenta abaixo. Em relação ao diagnóstico marque a alternativa correta.\n\nResultados: CPT 100% CRF 104% VR 120% CVF 90% VEF₁ 35% pré b.d / 75% pós b.d",
    "options": [
      "O uso frequente de β2-agonistas de curta ação não é associado com aumento da mortalidade.",
      "Alguns diagnósticos diferenciais são a bronquiolite obliterante, a doença pulmonar obstrutiva crônica e fibrose cística.",
      "Os β2-Agonistas de longa ação (LABAs) apresentam duração de ação de cerca de 12 horas e são recomendados para uso como monoterapia.",
      "Pacientes com diagnóstico no início da vida adulta deve-se descartar causas secundárias como uso de medicamentos (betabloqueadores, AAS e IECAs).",
      "A sua fisiopatologia evidencia a inflamação crônica das vias aéreas mais comumente de natureza linfocítica, sendo a infiltração mastocitária também frequente."
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com tosse e dispneia noturnas e ao exercício há 6 meses, com espirometria obstrutiva grave (VEF₁ 35%) e resposta acentuada ao broncodilatador (VEF₁ 75% depois): asma. A curva fluxo-volume mostra o padrão côncavo típico da obstrução.\n\nNa avaliação da obstrução ao fluxo aéreo, entram como diagnósticos diferenciais a bronquiolite obliterante, a DPOC (improvável nessa idade) e a fibrose cística, além de disfunção de cordas vocais e corpo estranho.",
    "commentary": "Uso frequente de SABA sem aumento de mortalidade (A): o uso excessivo de SABA isolado se associa a mais exacerbações graves e mortes; por isso a GINA não recomenda SABA isolado.\n\nLABA em monoterapia (C): é contraindicado na asma, pelo risco de exacerbações fatais; o LABA sempre vai com corticoide inalatório.\n\nCausas secundárias no adulto jovem por IECA (D): betabloqueadores e AINEs/AAS podem precipitar broncoespasmo, mas o IECA causa tosse, não asma; e a frase não é a mais adequada.\n\nInflamação predominantemente linfocítica (E): a inflamação clássica da asma é eosinofílica (tipo 2), com participação de mastócitos e linfócitos Th2.",
    "reference": "GINA 2025 / Diretrizes da SBPT para o manejo da asma (2020)",
    "tags": [
      "asma",
      "espirometria",
      "prova broncodilatadora",
      "diagnóstico diferencial"
    ],
    "tip": "Asma: obstrução com resposta ao broncodilatador (≥ 12% e 200 mL). Nunca LABA sozinho.",
    "image": "/images/amp2026-57.webp"
  },
  {
    "id": "amp2026-58",
    "topography": "2.1",
    "topic": "Apneia do sono",
    "module": "Clínica Médica",
    "text": "J.S.A., 45 anos, técnico em informática, comparece à consulta com queixas de sonolência diurna excessiva, ansiedade e cefaleia cedo pela manhã. A esposa relata que ele ronca alto e tem episódios frequentes de pausas respiratórias durante o sono, seguidos por “engasgos” ou pequenos despertares. O paciente nega dor torácica, febre ou tosse. Os sintomas têm se intensificado nos últimos dois anos. Ele refere que costumava fazer pequenas caminhadas, mas agora se cansa com facilidade, mesmo em atividades leves como subir um lance de escadas ou caminhar no plano por poucos metros. Ele atribui a falta de ar ao “sedentarismo” e ao aumento de peso, que tem sido constante na última década. Ao exame físico apresenta Índice de Massa Corporal (IMC) de 47,4 kg/m², frequência cardíaca: 95 bpm. Frequência respiratória: 20 cpm. Saturação de O₂: 89% em ar ambiente. Pressão arterial: 145/90 mmHg. Em relação ao diagnóstico marque a alternativa correta.",
    "options": [
      "No indivíduo sadio, o nível arterial de dióxido de carbono (PaCO₂) é mantido entre 27 e 33 mmHg ao nível do mar. Todos os distúrbios de ventilação resultam em alteração nas medições da PaCO₂.",
      "Na síndrome de hipoventilação por obesidade a carga da parede torácica é menor do que a força dos músculos ventilatórios, resultando em uma troca anormal de gases após input neural ser transmitido às bombas musculares da respiração.",
      "A ventilação não invasiva com pressão positiva (VNIPP) noturna tem sido usada com sucesso no tratamento da hipoventilação e das apneias obstrutivas, porém sem sucesso nas hipoventilações de origem central .",
      "O diagnóstico mais possível é de síndrome de hipoventilação por obesidade uma vez que o paciente possui IMC > 30 kg/m², sintomas de hipoventilação crônica e evidência de distúrbio respiratório relacionado ao sono.",
      "As doenças que reduzem a ventilação-minuto ou aumentam o espaço morto podem ser classificadas em quatro categorias principais: doença do parênquima pulmonar e da parede torácica, distúrbio respiratório do sono, doença neuromuscular e cor pulmonale."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com obesidade grave (IMC 47,4), sonolência diurna, cefaleia matinal, ronco e apneias testemunhadas (apneia obstrutiva do sono), hipoxemia em vigília e dispneia aos esforços: o quadro sugere síndrome de hipoventilação por obesidade, definida por IMC ≥ 30, hipercapnia diurna (PaCO₂ ≥ 45 mmHg) e distúrbio respiratório do sono, excluídas outras causas. A confirmação requer gasometria arterial.\n\nTratamento: pressão positiva (CPAP ou BiPAP) e perda de peso.",
    "commentary": "PaCO₂ entre 27 e 33 mmHg (A): o normal é 35–45 mmHg.\n\nCarga menor que a força dos músculos (B): na hipoventilação por obesidade, a carga imposta pela parede torácica supera a capacidade dos músculos.\n\nVNI sem sucesso na hipoventilação central (C): a ventilação não invasiva também é usada com sucesso na hipoventilação central.\n\nQuatro categorias incluindo cor pulmonale (E): o cor pulmonale é consequência, não categoria causal; a classificação inclui distúrbios do controle ventilatório.",
    "reference": "ATS 2019 — Evaluation and management of obesity hypoventilation syndrome / Harrison",
    "tags": [
      "síndrome de hipoventilação por obesidade",
      "apneia obstrutiva do sono",
      "obesidade"
    ],
    "tip": "Hipoventilação por obesidade: IMC ≥ 30 + PaCO₂ ≥ 45 em vigília + distúrbio do sono."
  },
  {
    "id": "amp2026-59",
    "topography": "2.1",
    "topic": "SDRA",
    "module": "Clínica Médica",
    "text": "M.A.C., 68 anos, foi admitida na UTI devido a uma hemorragia digestiva alta grave, secundária a uma úlcera gástrica. Seu quadro inicial evoluiu para choque hipovolêmico, exigindo múltiplas transfusões de concentrado de hemácias, nas 4 horas seguintes ao final da última transfusão, a paciente desenvolveu dispneia progressiva e taquipneia. A ausculta pulmonar revelou estertores finos bilaterais, e a saturação de oxigênio caiu para 88% em ar ambiente. Ao exame físico a pressão arterial permaneceu estável, e não havia sinais de sobrecarga hídrica e nem febre. Os exames complementares mostraram uma relação PaO₂/FiO2 (P/F): 110 e radiografia de tórax abaixo. Em relação ao diagnóstico assinale a alternativa correta.",
    "options": [
      "Caso a paciente evolua para ventilação mecânica deve-se optar por ventilações com alto volume corrente por quilo para se obter uma melhora da sobrevida.",
      "Embora muitas doenças clínicas e cirúrgicas estejam associadas ao desenvolvimento de SARA, a maioria dos casos (> 80%) é causada por pneumonia e sepse (cerca de 40 a 60%).",
      "Caso a paciente evolua para ventilação mecânica, não haveria benefício em mantê-la em posição prona uma vez que melhora a oxigenação arterial sem benefício na mortalidade.",
      "Pacientes com SARA devem ser manejados evitando a restrição hídrica uma vez que a diminuição do enchimento atrial esquerdo é associado com maior mortalidade por hipoperfusão renal.",
      "Trata-se de uma SARA (síndrome da angústia respiratória aguda) grave por lesão pulmonar direta ocasionado pelo aumento de volume circulante gerado pelas múltiplas transfusões de sangue."
    ],
    "correctAnswer": 1,
    "explanation": "Insuficiência respiratória com hipoxemia grave (P/F 110), infiltrado bilateral na radiografia, sem sobrecarga hídrica, até 6 horas depois de transfusões: lesão pulmonar aguda relacionada à transfusão (TRALI), uma causa de SDRA. A relação P/F ≤ 100 define SDRA grave; 101–200, moderada.\n\nEntre as afirmativas, a correta é a B: das inúmeras causas de SDRA, as mais frequentes são pneumonia e sepse.",
    "commentary": "Alto volume corrente (A): a ventilação protetora usa volume corrente baixo (4–8 mL/kg de peso predito) e pressão de platô ≤ 30 cmH₂O, o que reduz mortalidade.\n\nPosição prona sem benefício (C): na SDRA moderada a grave (P/F < 150), a prona por ≥ 12–16 h/dia reduz mortalidade (estudo PROSEVA).\n\nEvitar restrição hídrica (D): uma estratégia conservadora de fluidos (após estabilização) reduz tempo de ventilação.\n\nSDRA por hipervolemia (E): a TRALI é uma lesão imunológica (anticorpos do doador), sem sobrecarga de volume — a sobrecarga é o TACO.",
    "reference": "Berlin definition (JAMA 2012) / ATS/ESICM 2017 — Mechanical ventilation in ARDS / Harrison",
    "tags": [
      "SDRA",
      "TRALI",
      "ventilação protetora",
      "posição prona"
    ],
    "tip": "SDRA: volume corrente baixo, platô ≤ 30 e prona se P/F < 150.",
    "image": "/images/amp2026-59.webp"
  },
  {
    "id": "amp2026-60",
    "topography": "9",
    "topic": "Neutropenia febril",
    "module": "Clínica Médica",
    "text": "C.F.A., 58 anos foi admitida no pronto socorro por hipotensão e sensação de lipotimia. A sintomatologia iniciou-se há aproximadamente 12 horas, de forma insidiosa, mas com rápida progressão. A paciente relatou, inicialmente, uma sensação de calafrios intensos. Paciente nega náuseas, vômitos ou exteriorização de sangramento. A equipe de enfermagem percebeu que a paciente estava confusa, respondendo lentamente às perguntas e parecendo desorientada. A paciente está em vigência de quimioterapia para câncer de ovário metastático sendo seu último ciclo há 10 dias. Ela não faz uso de uso de cateter central. Ao exame físico pressão arterial 85/40 mmHg, frequência cardíaca 125 bpm, frequência respiratória 26 cpm, temperatura 38 °C. O hemograma apresenta contagem de neutrófilos de 200/mm³. Em relação ao diagnóstico acima marque a alternativa correta.",
    "options": [
      "Há quatro principais processos que levam à redução no transporte de oxigênio e à hipoxia celular, sendo esses os quatro principais tipos de choque: distributivo, cardiogênico, hipovolêmico e hemorrágico.",
      "Após adequada reposição volêmica (30 mL/kg nas primeiras 3 horas) a paciente manteve hipotensão necessitando de suporte de vasopressores. Assim, a hipótese mais provável é de choque hipovolêmico.",
      "A taquicardia observada na paciente é uma resposta secundária a hipotensão na tentativa de manter o transporte do oxigênio. Como esclarece a equação: DO2 (determinates do transporte de oxigênio) = (FC (frequência cardíaca × VS (volume sistólico) × CaO2 (conteúdo arterial de oxigênio).",
      "Com o objetivo de aumentar a resistência vascular periférica, caso se comprove o choque da paciente, deve-se iniciar um vasopressor sendo a dopamina o agente de primeira escolha.",
      "Os antibióticos intravenosos devem ser iniciados assim que possível (dentro de 2 horas); especificamente com esquema de amplo espectro como cefepima 2 gramas a cada 8/8 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente em quimioterapia, 10 dias após o ciclo, com neutropenia grave (200/mm³), febre, hipotensão, taquicardia e confusão: neutropenia febril com choque séptico.\n\nA alternativa C está correta: a taquicardia é compensatória e o transporte de oxigênio (DO₂) é débito cardíaco (FC × volume sistólico) multiplicado pelo conteúdo arterial de O₂. Aumentar a FC é uma forma de manter o DO₂ quando o volume sistólico cai.",
    "commentary": "Quatro tipos de choque com hemorrágico (A): os quatro tipos são hipovolêmico (inclui o hemorrágico), cardiogênico, obstrutivo e distributivo.\n\nChoque hipovolêmico (B): hipotensão refratária a volume num paciente neutropênico febril é choque séptico (distributivo).\n\nDopamina de primeira escolha (D): o vasopressor de escolha é a noradrenalina.\n\nAntibiótico em até 2 horas (E): na neutropenia febril com choque, o antibiótico deve ser iniciado em até 1 hora (idealmente na primeira hora); cefepima 2 g 8/8 h está correto, mas o prazo não.",
    "reference": "Surviving Sepsis Campaign 2021 / IDSA — Febrile neutropenia",
    "tags": [
      "neutropenia febril",
      "choque séptico",
      "transporte de oxigênio"
    ],
    "tip": "Neutropenia febril com choque: antibiótico na primeira hora e noradrenalina."
  },
  {
    "id": "amp2026-61",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Cirurgia",
    "text": "Paciente submetido a prostatectomia radical com acesso videolaparoscópico devido a câncer de próstata. Cirurgia transcorre sem sangramento e sem lesões de estruturas adjacentes. Nas primeiras 6 horas de pós-operatório, paciente urinou 200ml (peso do paciente 100kg) e sua creatinina sérica subiu para 2mg/dl (há 2 dias, sua creatinina sérica era 1,4mg/dl). Diante desse cenário, qual conduta mais apropriada?",
    "options": [
      "As alterações são esperadas para cirurgia de grande porte, não sendo necessários quaisquer tratamentos adicionais.",
      "As alterações indicam insuficiência renal aguda, sendo indicado realizar prova de volume independente da etiologia do evento.",
      "As alterações indicam insuficiência renal aguda, sendo indicado avaliar se há alteração hidroeletrolítica e buscar a causa incitadora.",
      "As alterações indicam insuficiência renal aguda, sendo necessário realizar terapia de substituição renal para evitar complicações metabólicas.",
      "As alterações são esperadas para cirurgia de grande porte, sendo necessário tratamento paliativo baseado em hidratação endovenosa."
    ],
    "correctAnswer": 2,
    "explanation": "Débito urinário de 200 mL em 6 horas num paciente de 100 kg (0,33 mL/kg/h, < 0,5) e aumento da creatinina de 1,4 para 2,0 mg/dL (≥ 0,3 em 48 h): lesão renal aguda pelos critérios KDIGO.\n\nNo pós-operatório de prostatectomia, a investigação inclui causas pré-renais (hipovolemia), renais e pós-renais (obstrução da sonda, lesão ureteral, extravasamento de urina pela anastomose vesicouretral). A conduta é avaliar volemia e eletrólitos (potássio, acidose) e buscar a causa.",
    "commentary": "Alteração esperada (A e E): oligúria com aumento de creatinina é lesão renal, não um achado normal.\n\nProva de volume independente da causa (B): volume em quem não está hipovolêmico ou tem obstrução pode causar sobrecarga.\n\nDiálise de imediato (D): não há indicação de urgência (hipercalemia refratária, acidose grave, congestão refratária, uremia).",
    "reference": "KDIGO 2012 — Acute kidney injury",
    "tags": [
      "lesão renal aguda",
      "critérios KDIGO",
      "pós-operatório",
      "oligúria"
    ],
    "tip": "LRA (KDIGO): creatinina ↑ ≥ 0,3 em 48 h ou diurese < 0,5 mL/kg/h por 6 h."
  },
  {
    "id": "amp2026-62",
    "topography": "9",
    "topic": "Coagulopatias",
    "module": "Cirurgia",
    "text": "Paciente de 58 anos, com cirrose hepática por hepatite C, é submetido a transplante hepático ortotópico. Durante o intraoperatório, apresenta sangramento difuso, e os exames laboratoriais convencionais (TAP/RNI e TTP) mostram prolongamento moderado dos tempos, sem clara correlação com a gravidade do sangramento. O anestesista solicita uma tromboelastografia (TEG), que revela: tempo R prolongado, tempo K normal, ângulo α normal, amplitude máxima normal e LY30 < 1%. Com base nesses achados, qual é a conduta mais apropriada?",
    "options": [
      "Administração de plasma fresco congelado (PFC), pois o tempo R prolongado sugere deficiência de fatores de coagulação da fase inicial.",
      "Transfusão de plaquetas, pois a amplitude máxima representa a agregação plaquetária, e o sangramento indica trombocitopenia funcional.",
      "Nenhuma conduta específica, pois o TEG está normal e o sangramento deve ser contido com ligaduras vasculares cirúrgicas.",
      "Início de antifibrinolítico (ácido tranexâmico), pois o LY30 está aumentado, indicando lise precoce do coágulo.",
      "Administração de crioprecipitado, pois o tempo K está alterado, indicando deficiência de fibrinogênio."
    ],
    "correctAnswer": 0,
    "explanation": "Na tromboelastografia, o tempo R (até o início da formação do coágulo) reflete os fatores de coagulação; o tempo K e o ângulo α refletem o fibrinogênio; a amplitude máxima (MA) reflete plaquetas e fibrinogênio; e o LY30 reflete fibrinólise.\n\nCom tempo R isoladamente prolongado e o resto normal, há deficiência de fatores, corrigida com plasma fresco congelado (ou complexo protrombínico).",
    "commentary": "Plaquetas (B): a amplitude máxima está normal.\n\nNenhuma conduta (C): o tempo R prolongado é anormal.\n\nÁcido tranexâmico (D): o LY30 < 1% (normal até 8%) afasta hiperfibrinólise.\n\nCrioprecipitado (E): tempo K e ângulo α estão normais.",
    "reference": "Transfusion medicine — Viscoelastic tests (TEG/ROTEM) / ASA Practice Guidelines for Perioperative Blood Management",
    "tags": [
      "tromboelastografia",
      "coagulopatia",
      "plasma fresco congelado",
      "transplante hepático"
    ],
    "tip": "TEG: R → plasma; K/α → crioprecipitado; MA → plaquetas; LY30 → antifibrinolítico.",
    "image": "/images/amp2026-62.webp"
  },
  {
    "id": "amp2026-63",
    "topography": "9",
    "topic": "Transfusão sanguínea",
    "module": "Cirurgia",
    "text": "Paciente de 71 anos, sexo masculino, hipertenso e diabético, foi submetido a retossigmoidectomia por adenocarcinoma de cólon. No 1º dia de pós-operatório, está em uso de dieta zero, sem sangramento ativo aparente, pressão arterial de 118/76 mmHg, frequência cardíaca de 78 bpm, sem dor torácica ou dispneia. A hemoglobina caiu de 10,1 g/dℓ no pré-operatório para 7,3 g/dℓ. Encontra-se lúcido, orientado e clinicamente estável. Qual a conduta mais adequada em relação à transfusão de concentrado de hemácias (CH)?",
    "options": [
      "Não transfundir, pois o paciente está hemodinamicamente estável e o valor de hemoglobina ainda está acima do limite recomendado para transfusão.",
      "Indicar transfusão apenas se houver sinais de isquemia miocárdica ou instabilidade hemodinâmica, independentemente do valor de hemoglobina.",
      "Transfundir 1 unidade de CH, pois o valor de hemoglobina está abaixo de 8 g/dℓ em um paciente cirúrgico.",
      "Transfundir 2 unidades de CH devido à queda significativa da hemoglobina no pós-operatório.",
      "Iniciar transfusão profilática devido à idade do paciente e presença de comorbidades."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente estável, sem sangramento, sem sintomas e sem isquemia, com Hb 7,3 g/dL no pós-operatório. A estratégia restritiva (limiar de 7 g/dL em geral; 7,5–8 g/dL em cirurgia cardíaca ou ortopédica e em doença cardiovascular) é tão segura quanto a liberal. Como ele está acima de 7 e estável, não há indicação de transfusão.",
    "commentary": "Transfundir só com isquemia ou instabilidade, independentemente da Hb (B): o limiar de Hb também importa; abaixo de 7 g/dL se transfunde mesmo estável.\n\nTransfundir 1 unidade abaixo de 8 (C) e 2 unidades pela queda (D): ultrapassam os limiares restritivos sem benefício.\n\nTransfusão profilática pela idade (E): não há indicação.",
    "reference": "AABB 2023 — International guidelines for RBC transfusion / Ministério da Saúde — Guia para uso de hemocomponentes",
    "tags": [
      "transfusão sanguínea",
      "estratégia restritiva",
      "pós-operatório"
    ],
    "tip": "Transfusão restritiva: Hb < 7 g/dL (7,5–8 em cardiopatas ou cirurgia cardíaca/ortopédica)."
  },
  {
    "id": "amp2026-64",
    "module": "Cirurgia",
    "text": "Paciente de 65 anos, pós-operatório de cirurgia abdominal de grande porte, está internado em UTI com sepse e necessidade de ventilação mecânica. Durante a internação, apresenta hiperglicemia persistente com glicemia capilar entre 200 e 250 mg/dL. A equipe avalia a melhor estratégia para controle glicêmico. Considerando as evidências atuais sobre controle da glicose em pacientes críticos, assinale a alternativa correta.",
    "options": [
      "A hiperglicemia em pacientes críticos protege contra infecções e disfunção orgânica.",
      "Hipoglicemia grave em pacientes internados em UTI é rara e geralmente sem consequências neurológicas.",
      "A hiperglicemia de estresse em pacientes graves é benigna e não está associada a piora do prognóstico.",
      "O controle glicêmico ideal em pacientes críticos atualmente recomendado é manter a glicemia entre 140 e 180 mg/dL.",
      "O controle rígido da glicemia, mantendo níveis entre 80 e 110 mg/dL, reduz a mortalidade em pacientes criticamente enfermos."
    ],
    "correctAnswer": 3,
    "explanation": "Em pacientes críticos, a meta glicêmica recomendada é 140–180 mg/dL, iniciando insulina quando a glicemia passa de 180 mg/dL. O estudo NICE-SUGAR mostrou que o controle rígido (81–108 mg/dL) aumentou a mortalidade, principalmente por hipoglicemia.",
    "commentary": "Hiperglicemia protege (A): a hiperglicemia aumenta infecções e piora desfechos.\n\nHipoglicemia rara e sem consequências (B): é frequente com controle intensivo e associa-se a maior mortalidade e lesão neurológica.\n\nHiperglicemia de estresse benigna (C): associa-se a pior prognóstico.\n\nControle rígido reduz mortalidade (E): o NICE-SUGAR mostrou o oposto.",
    "reference": "ADA Standards of Care 2025 — Diabetes in the hospital / NICE-SUGAR (NEJM 2009) / Surviving Sepsis Campaign 2021",
    "tags": [
      "controle glicêmico",
      "paciente crítico",
      "NICE-SUGAR",
      "hipoglicemia"
    ],
    "tip": "UTI: glicemia entre 140 e 180. Controle rígido aumenta a mortalidade."
  },
  {
    "id": "amp2026-65",
    "topography": "7.2",
    "topic": "Melanoma",
    "module": "Cirurgia",
    "text": "Paciente masculino, 42 anos, apresenta lesão pigmentada na face dorsal do antebraço direito, referindo que há cerca de 8 meses percebeu aumento progressivo do tamanho e surgimento de áreas mais escuras. Ao exame, observa-se lesão de aproximadamente 7 mm, assimétrica, com bordas irregulares, variação de coloração e aspecto nodular em um dos polos. Considerando os critérios clínicos e as indicações para biópsia de lesões cutâneas pigmentadas, a conduta inicial mais adequada é",
    "options": [
      "Proceder biópsia por raspagem (shaving) para evitar cicatriz inestética.",
      "Realizar biópsia incisional com punch de 2 mm na borda menos pigmentada da lesão.",
      "Observar a evolução da lesão por três meses antes de indicar qualquer procedimento cirúrgico.",
      "Indicar ressecção ampla com margens oncológicas definitivas, dispensando biópsia diagnóstica prévia.",
      "Realizar biópsia excisional com margens estreitas, incluindo toda a lesão e estendendo a profundidade até a gordura subcutânea."
    ],
    "correctAnswer": 4,
    "explanation": "Lesão pigmentada com critérios ABCDE (assimetria, bordas irregulares, várias cores, 7 mm, evolução e área nodular): suspeita de melanoma. A conduta inicial é a biópsia excisional com margens estreitas (1–3 mm), retirando toda a lesão até o subcutâneo. Isso permite medir a espessura de Breslow, que define as margens da ampliação e a indicação de linfonodo sentinela.",
    "commentary": "Shaving (A): pode seccionar a lesão e impedir a medida correta de Breslow.\n\nPunch de 2 mm na borda (B): amostra pequena e fora da área mais suspeita (nodular); a excisão total é preferível quando possível.\n\nObservar 3 meses (C): atrasa o diagnóstico de lesão suspeita.\n\nAmpliação definitiva sem biópsia (D): as margens dependem do Breslow, que só se conhece após a biópsia.",
    "reference": "NCCN Melanoma 2024 / SBD — Consenso de melanoma cutâneo",
    "tags": [
      "melanoma",
      "biópsia excisional",
      "índice de Breslow",
      "ABCDE"
    ],
    "tip": "Suspeita de melanoma: biópsia excisional com margem de 1–3 mm até o subcutâneo."
  },
  {
    "id": "amp2026-66",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Cirurgia",
    "text": "Homem, 68 anos, foi submetido à colectomia total por megacólon tóxico. No pós-operatório, evoluiu com choque séptico e necessidade de ventilação mecânica, terapia com drogas vasoativas e hemodiálise. Apesar de suporte intensivo, apresenta piora progressiva, com elevação na pontuação SOFA e sinais de falência hepática aguda. Diante desse cenário, a conduta mais adequada é",
    "options": [
      "Discutir com a família sobre o prognóstico, objetivos de cuidado e possibilidade de limitar medidas fúteis, envolvendo equipe de cuidados paliativos e comitê de ética.",
      "Suspender todas as medidas de suporte e iniciar sedação profunda, sem comunicação prévia com a família, para evitar prolongar sofrimento.",
      "Prosseguir com todas as medidas invasivas disponíveis, independentemente do prognóstico, para evitar acusação de omissão de tratamento.",
      "Transferir o paciente para outro serviço com maior disponibilidade tecnológica, sem discutir a situação clínica atual.",
      "Iniciar imediatamente suporte hepático extracorpóreo, mesmo sem evidência de benefício para este perfil de paciente."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente em choque séptico com falência de múltiplos órgãos e piora progressiva apesar de suporte máximo: o prognóstico é muito reservado. A conduta ética é comunicar a família de forma honesta, discutir objetivos de cuidado e a possibilidade de limitar ou retirar medidas que não trarão benefício (obstinação terapêutica), com apoio da equipe de cuidados paliativos e, se necessário, do comitê de bioética. A Resolução CFM 1.805/2006 respalda a limitação de tratamentos fúteis, garantindo cuidados de conforto.",
    "commentary": "Suspender tudo e sedar sem falar com a família (B): decisões de fim de vida exigem comunicação e consentimento do paciente ou representante.\n\nManter tudo para evitar acusação de omissão (C): é obstinação terapêutica (distanásia), prolongando sofrimento.\n\nTransferir sem discutir (D): não resolve e expõe o paciente a riscos.\n\nSuporte hepático extracorpóreo (E): sem benefício comprovado nesse contexto.",
    "reference": "Resolução CFM nº 1.805/2006 / Código de Ética Médica / Manual de Cuidados Paliativos (ANCP)",
    "tags": [
      "cuidados paliativos",
      "limitação de suporte de vida",
      "ortotanásia",
      "bioética"
    ],
    "tip": "Falência múltipla progressiva: conversar com a família e limitar medidas fúteis, com cuidados paliativos."
  },
  {
    "id": "amp2026-67",
    "topography": "14",
    "topic": "Insuficiência respiratória",
    "module": "Cirurgia",
    "text": "Paciente masculino, 56 anos, vítima de politrauma, encontra-se em ventilação mecânica na UTI há 5 dias. Apresenta Glasgow 8, múltiplas fraturas costais e contusão pulmonar bilateral. A equipe prevê necessidade de ventilação mecânica por, no mínimo, 14 dias. Considerando as evidências atuais sobre traqueostomia em pacientes críticos, qual a conduta mais adequada?",
    "options": [
      "Optar pela traqueostomia somente se houver falha na extubação após o 14º dia de ventilação mecânica.",
      "Indicar traqueostomia percutânea precoce apenas se houver evidência de infecção de vias aéreas superiores.",
      "Realizar traqueostomia apenas no centro cirúrgico, visto que a percutânea apresenta maior risco de complicações graves.",
      "Manter intubação orotraqueal até o 14º dia, pois não há benefício comprovado na realização precoce de traqueostomia.",
      "Indicar traqueostomia precoce (até 7 dias), pois há evidência de redução de tempo de ventilação mecânica e permanência na UTI, mesmo sem impacto consistente na mortalidade."
    ],
    "correctAnswer": 4,
    "explanation": "Paciente politraumatizado com Glasgow 8, fraturas costais e contusão pulmonar, com previsão de ventilação mecânica por 14 dias ou mais: há indicação de traqueostomia precoce. Estudos e meta-análises mostram que a traqueostomia precoce (até 7–10 dias) reduz tempo de ventilação, sedação e permanência na UTI, embora sem impacto consistente na mortalidade.",
    "commentary": "Só após falha de extubação no 14º dia (A): atrasa o benefício em quem já se prevê ventilação prolongada.\n\nSó com infecção de vias aéreas superiores (B): não é critério.\n\nSó no centro cirúrgico, percutânea mais arriscada (C): a técnica percutânea à beira do leito é segura e tem complicações semelhantes ou menores.\n\nNenhum benefício da precoce (D): há benefício em tempo de ventilação e de UTI.",
    "reference": "Meta-análises sobre traqueostomia precoce (Cochrane 2015) / Eastern Association for the Surgery of Trauma",
    "tags": [
      "traqueostomia",
      "ventilação mecânica",
      "trauma",
      "UTI"
    ],
    "tip": "Ventilação prevista > 14 dias: traqueostomia precoce reduz tempo de VM e UTI."
  },
  {
    "id": "amp2026-68",
    "topography": "12",
    "topic": "Síndrome da fragilidade",
    "module": "Cirurgia",
    "text": "Paciente feminina, 84 anos, apresenta massa renal esquerda de 14 cm, sugestiva de carcinoma de células claras, sem metástases à distância. É hipertensa controlada, perdeu 5 kg nos últimos 4 meses, refere fadiga e marcha lenta. Necessita de ajuda parcial nas atividades instrumentais de vida diária. No teste de levantar-se da cadeira 5 vezes, levou 18 segundos. Considerando o impacto da fragilidade sobre resultados cirúrgicos, qual das alternativas descreve a conduta mais adequada?",
    "options": [
      "Indicar nefrectomia radical sem demora, pois a doença ameaça a sobrevida e a idade não contraindica cirurgia.",
      "Iniciar quimioterapia sistêmica antes da cirurgia, pois carcinoma renal localizado apresenta boa resposta inicial.",
      "Adiar a cirurgia e optar por tratamento clínico, pois a fragilidade representa risco muito elevado para o procedimento.",
      "Realizar avaliação geriátrica ampla e medir fragilidade com instrumento validado, otimizando a paciente antes da decisão.",
      "Solicitar avaliação cardiológica como principal medida, pois o risco cardiovascular é o fator mais relevante no idoso."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa de 84 anos com perda de peso, fadiga, marcha lenta, dependência parcial e teste de levantar da cadeira lento (≥ 15 s): sinais de fragilidade, forte preditora de complicações, mortalidade e perda funcional após cirurgia.\n\nAntes de decidir pela nefrectomia, deve-se fazer avaliação geriátrica ampla e medir a fragilidade com instrumento validado (Fried, Escala Clínica de Fragilidade), otimizar a paciente (nutrição, pré-habilitação) e discutir com ela os objetivos de cuidado.",
    "commentary": "Nefrectomia sem demora (A): ignora o risco cirúrgico elevado da fragilidade.\n\nQuimioterapia neoadjuvante (B): o carcinoma de células claras não responde bem à quimioterapia clássica.\n\nAdiar a cirurgia de imediato (C): a decisão deve vir depois de avaliação estruturada, não presumida.\n\nSó avaliação cardiológica (E): o risco cardíaco é apenas parte da avaliação; a fragilidade é o fator mais relevante aqui.",
    "reference": "ACS/AGS — Optimal preoperative assessment of the geriatric surgical patient",
    "tags": [
      "fragilidade",
      "avaliação geriátrica ampla",
      "risco cirúrgico no idoso"
    ],
    "tip": "Idoso frágil e cirurgia: avaliação geriátrica ampla antes de decidir."
  },
  {
    "id": "amp2026-69",
    "topography": "3.3",
    "topic": "Câncer de vesícula",
    "module": "Cirurgia",
    "text": "Durante avaliação de rotina, uma mulher de 63 anos, assintomática, realiza ultrassonografia abdominal que identifica imagem polipoide única na vesícula biliar, medindo 11 mm, sem sinais de colelitíase. A paciente não apresenta colangite esclerosante primária ou história familiar de câncer de vesícula. Exames laboratoriais estão normais. Com base nos critérios atuais, qual deve ser a conduta mais adequada?",
    "options": [
      "Iniciar tratamento com ácido ursodesoxicólico e acompanhar clinicamente.",
      "Repetir a ultrassonografia abdominal em 6 meses para avaliar crescimento da lesão.",
      "Realizar ressonância magnética das vias biliares para melhor caracterização do pólipo.",
      "Indicar colecistectomia laparoscópica eletiva devido ao risco aumentado de malignidade.",
      "Observar anualmente com exames de imagem, pois pólipos < 2 cm não exigem intervenção."
    ],
    "correctAnswer": 3,
    "explanation": "Pólipo de vesícula biliar ≥ 10 mm tem risco aumentado de malignidade e indicação de colecistectomia, mesmo sem sintomas. Outros fatores de risco são idade > 50–60 anos, crescimento ≥ 2 mm, base séssil, colangite esclerosante e etnia indiana. Nesta paciente de 63 anos, com pólipo de 11 mm, a colecistectomia laparoscópica eletiva está indicada.",
    "commentary": "Ácido ursodesoxicólico (A): não trata pólipos.\n\nRepetir o ultrassom em 6 meses (B) ou anualmente (E): o seguimento é para pólipos menores que 10 mm; o limite de cirurgia é 10 mm, não 20 mm.\n\nRessonância (C): não muda a indicação já definida pelo tamanho.",
    "reference": "ESGAR/EAES/EFISDS/ESGE 2022 — Management of gallbladder polyps",
    "tags": [
      "pólipo de vesícula biliar",
      "colecistectomia",
      "câncer de vesícula"
    ],
    "tip": "Pólipo de vesícula ≥ 10 mm = colecistectomia."
  },
  {
    "id": "amp2026-70",
    "topography": "3.4",
    "topic": "Câncer de pâncreas",
    "module": "Cirurgia",
    "text": "Um homem de 66 anos, previamente hígido, é submetido a uma ressonância magnética abdominal após queixa de desconforto epigástrico inespecífico. O exame revela cisto pancreático único, medindo 3,8 cm, localizado na cabeça do pâncreas, com nódulo mural realçado medindo 6 mm e dilatação do ducto pancreático principal com 1,2 cm de diâmetro. Não há icterícia clínica, linfadenopatia ou elevação de marcadores tumorais. Com base nos critérios atuais de estratificação de risco para neoplasia intraductal mucinosa papilífera (NIMP), qual é a conduta mais apropriada?",
    "options": [
      "Indicação de ressecção cirúrgica devido à presença de características de alto risco.",
      "Punção guiada por ecoendoscopia para dosagem de amilase e CEA no líquido cístico.",
      "Abstenção de conduta, pois se trata de um achado incidental em paciente assintomático.",
      "Seguimento clínico e radiológico anual, devido ao baixo risco de transformação maligna.",
      "Observação com nova ressonância magnética em 6 meses, apenas se houver crescimento do cisto."
    ],
    "correctAnswer": 0,
    "explanation": "Neoplasia intraductal mucinosa papilífera (IPMN) na cabeça do pâncreas com nódulo mural realçado ≥ 5 mm e ducto pancreático principal ≥ 10 mm: são estigmas de alto risco pelos critérios de Fukuoka. Paciente com condições cirúrgicas e estigmas de alto risco deve ser operado (duodenopancreatectomia), pelo alto risco de displasia de alto grau ou câncer invasivo.",
    "commentary": "Punção por ecoendoscopia (B): útil em lesões com características preocupantes (\"worrisome\") e diagnóstico duvidoso; com estigmas de alto risco, a indicação cirúrgica já está definida.\n\nAbstenção (C), seguimento anual (D) ou nova ressonância em 6 meses (E): são condutas para cistos de baixo risco.",
    "reference": "International Consensus Fukuoka Guidelines 2017 / European evidence-based guidelines on pancreatic cystic neoplasms 2018",
    "tags": [
      "neoplasia intraductal mucinosa papilífera",
      "cisto pancreático",
      "critérios de Fukuoka"
    ],
    "tip": "IPMN com nódulo realçado ≥ 5 mm ou ducto ≥ 10 mm = cirurgia."
  },
  {
    "id": "amp2026-71",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Homem 45 anos, IMC 29, crises de dor no hipocôndrio direito após refeições gordurosas. US: múltiplos cálculos < 1 cm, espessura da parede da vesícula de 3 mm, sem coleções. Em sua análise qual a melhor conduta definitiva?",
    "options": [
      "Aguardar complicação.",
      "Litotripsia extracorpórea.",
      "Dissolução medicamentosa.",
      "Dieta pobre em gordura 12 meses.",
      "Colecistectomia videolaparoscópica."
    ],
    "correctAnswer": 4,
    "explanation": "Colelitíase sintomática (cólica biliar após refeições gordurosas) sem colecistite: o tratamento definitivo é a colecistectomia videolaparoscópica eletiva, que elimina os sintomas e previne complicações (colecistite, coledocolitíase, pancreatite, colangite). Cálculos pequenos aumentam o risco de migração e pancreatite.",
    "commentary": "Aguardar complicação (A): a colelitíase sintomática tem indicação cirúrgica.\n\nLitotripsia (B) e dissolução medicamentosa (C): pouco eficazes, com alta recidiva, reservados a casos excepcionais.\n\nDieta pobre em gordura (D): pode reduzir crises, mas não é tratamento definitivo.",
    "reference": "SAGES / Sabiston — Colelitíase",
    "tags": [
      "colelitíase",
      "colecistectomia videolaparoscópica",
      "cólica biliar"
    ],
    "tip": "Colelitíase sintomática = colecistectomia laparoscópica."
  },
  {
    "id": "amp2026-72",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Mulher 24 anos, dor em fossa ilíaca direita há 12 h, Temperatura 38 °C, leucócitos 14 000. US: apêndice 9 mm de diâmetro, não compressível. Escolha o melhor tratamento?",
    "options": [
      "Colonoscopia.",
      "Antibiótico ambulatorial.",
      "Laparoscopia diagnóstica.",
      "Apendicectomia videolaparoscópica.",
      "Tomografia de abdome antes de indicar cirurgia."
    ],
    "correctAnswer": 3,
    "explanation": "Dor em fossa ilíaca direita há 12 horas, febre, leucocitose e ultrassom com apêndice de 9 mm (> 6 mm) e não compressível: apendicite aguda confirmada. O tratamento é a apendicectomia, de preferência videolaparoscópica (menos dor e infecção de ferida, retorno mais rápido e vantagem diagnóstica em mulheres jovens).",
    "commentary": "Colonoscopia (A): não tem papel na apendicite aguda e pode causar perfuração.\n\nAntibiótico ambulatorial (B): o tratamento não operatório é opção em casos selecionados, internados e sem apendicolito; não é a escolha padrão.\n\nLaparoscopia diagnóstica (C): o diagnóstico já está feito; a laparoscopia aqui é terapêutica.\n\nTomografia antes da cirurgia (E): desnecessária com diagnóstico confirmado pelo ultrassom.",
    "reference": "WSES Jerusalem Guidelines 2020 — Acute appendicitis",
    "tags": [
      "apendicite aguda",
      "apendicectomia videolaparoscópica",
      "ultrassonografia"
    ],
    "tip": "Apêndice > 6 mm e não compressível = apendicite. Tratamento: apendicectomia laparoscópica."
  },
  {
    "id": "amp2026-73",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Homem 70 kg, queimadura térmica de 30 % de superfície corporal queimada (SCQ). Nestes casos a reposição de volume de cristalóide nas primeiras 24 h é, segundo a fórmula de Parkland?",
    "options": [
      "2 mL × kg × %SCQ.",
      "3 mL × kg × %SCQ.",
      "4 mL × kg × %SCQ.",
      "5 mL × kg × %SCQ.",
      "6 mL × kg × %SCQ."
    ],
    "correctAnswer": 2,
    "explanation": "A fórmula de Parkland clássica é 4 mL × peso (kg) × %SCQ de Ringer lactato nas primeiras 24 horas, com metade nas primeiras 8 horas (a partir do momento da queimadura) e metade nas 16 horas seguintes. Para este paciente: 4 × 70 × 30 = 8.400 mL.\n\nO ATLS 10ª/11ª edição passou a recomendar 2 mL (adultos) a 3 mL (crianças), mas a questão pergunta especificamente a fórmula de Parkland.",
    "commentary": "2 mL (A): é a fórmula de Brooke modificada e o valor inicial do ATLS para adultos.\n\n3 mL (B): valor do ATLS para crianças.\n\n5 mL (D) e 6 mL (E): não correspondem a nenhuma fórmula usual.",
    "reference": "ATLS — Queimaduras / Baxter & Shires (fórmula de Parkland)",
    "tags": [
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica"
    ],
    "tip": "Parkland: 4 mL × kg × %SCQ, metade nas primeiras 8 horas."
  },
  {
    "id": "amp2026-74",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Homem 58 anos, obeso grau II, hérnia umbilical de 1,5 cm programada para reparo primário. Qual o principal fator de risco de recidiva?",
    "options": [
      "Obesidade.",
      "Tabagismo.",
      "Sexo feminino.",
      "Idade > 60 anos.",
      "Diálise peritoneal crônica."
    ],
    "correctAnswer": 0,
    "explanation": "A obesidade é o principal fator de risco para recidiva de hérnia umbilical, sobretudo com reparo primário sem tela: aumenta a pressão intra-abdominal e a tensão na sutura e prejudica a cicatrização. Por isso, em obesos, o uso de tela é ainda mais recomendado.",
    "commentary": "Tabagismo (B): aumenta complicações de ferida e recidiva, mas o principal fator neste caso é a obesidade grau II.\n\nSexo feminino (C): não é fator de risco relevante; o paciente é homem.\n\nIdade acima de 60 (D): o paciente tem 58 e não é o fator principal.\n\nDiálise peritoneal (E): aumenta o risco, mas não está presente.",
    "reference": "European Hernia Society/Americas Hernia Society — Umbilical and epigastric hernias (2020)",
    "tags": [
      "hérnia umbilical",
      "recidiva",
      "obesidade"
    ],
    "tip": "Hérnia umbilical em obeso: risco alto de recidiva sem tela."
  },
  {
    "id": "amp2026-75",
    "topography": "3.1",
    "topic": "Úlcera péptica",
    "module": "Cirurgia",
    "text": "Homem 40 anos, úlcera duodenal ativa, H. pylori positiva. Considerando a necessidade de tratamento, qual o melhor esquema inicial de erradicação?",
    "options": [
      "IBP isolado",
      "Claritromicina 7 dias",
      "IBP + metronidazol 3 dias",
      "Subsalicilato de bismuto",
      "IBP + amoxicilina + claritromicina 14 dias"
    ],
    "correctAnswer": 4,
    "explanation": "Úlcera duodenal com H. pylori: indicação de erradicação. O esquema de primeira linha no Brasil (IV Consenso Brasileiro) é a terapia tripla com IBP + amoxicilina 1 g + claritromicina 500 mg, de 12/12 h, por 14 dias. Alternativa em áreas de resistência alta ou alergia: terapia quádrupla com bismuto.\n\nO controle de erradicação é feito pelo menos 4 semanas após o fim do tratamento.",
    "commentary": "IBP isolado (A): cicatriza a úlcera, mas não erradica a bactéria; a úlcera recidiva.\n\nClaritromicina isolada por 7 dias (B): monoterapia gera resistência e tem baixa eficácia.\n\nIBP + metronidazol por 3 dias (C): esquema curto e incompleto.\n\nSubsalicilato de bismuto isolado (D): faz parte da terapia quádrupla, mas sozinho não erradica.",
    "reference": "IV Consenso Brasileiro sobre Helicobacter pylori (FBG, 2018)",
    "tags": [
      "úlcera duodenal",
      "infecção por H. pylori",
      "terapia tripla"
    ],
    "tip": "H. pylori: IBP + amoxicilina + claritromicina por 14 dias."
  },
  {
    "id": "amp2026-76",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Caso Clinico: Homem de 25 anos, chega ao Pronto Atendimento após sofrer colisão automobilística frontal. O exame físico apresenta PA 120/80 mmHg, dor em hipocôndrio direito. FAST será realizado. Assinale a alternativa correta.",
    "options": [
      "Avaliar pericárdio, estômago, retroperitônio e pelve.",
      "Avaliar apenas esplenorrenal e pelve para reduzir tempo de exame.",
      "Avaliar apenas o espaço hepatorrenal; demais janelas só se instável.",
      "Avaliar pericárdio e hepatorrenal; demais janelas não são obrigatórias.",
      "Avaliar pericárdio, espaço hepatorrenal, espaço esplenorrenal e fundo de saco pélvico."
    ],
    "correctAnswer": 4,
    "explanation": "O FAST (Focused Assessment with Sonography for Trauma) avalia quatro janelas para líquido livre: pericárdica (subxifoide), hepatorrenal (espaço de Morison), esplenorrenal e pélvica (fundo de saco). O FAST estendido (e-FAST) acrescenta as janelas torácicas para pneumotórax e hemotórax.",
    "commentary": "Pericárdio, estômago, retroperitônio e pelve (A): o FAST não avalia estômago nem retroperitônio, que é mal visto pelo ultrassom.\n\nApenas esplenorrenal e pelve (B), apenas hepatorrenal (C) ou pericárdio e hepatorrenal (D): o exame completo inclui sempre as quatro janelas.",
    "reference": "ATLS — 11ª edição: Trauma abdominal e pélvico",
    "tags": [
      "FAST",
      "trauma abdominal",
      "ultrassonografia no trauma"
    ],
    "tip": "FAST: pericárdio, hepatorrenal, esplenorrenal e pelve. e-FAST: + tórax."
  },
  {
    "id": "amp2026-77",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Caso Clinico: Mulher de 40 anos, atropelada, PA 80/50 mmHg, FC 130 bpm, FAST mostra líquido livre. Qual a melhor conduta?",
    "options": [
      "Alta com retorno se dor piorar.",
      "TC de abdome com contraste.",
      "Laparotomia exploradora imediata.",
      "Observação com expansão volêmica.",
      "Lavado peritoneal diagnóstico antes de decidir."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente politraumatizada em choque (PA 80/50, FC 130) com FAST positivo para líquido livre: hemorragia intra-abdominal com instabilidade. A conduta é laparotomia exploradora imediata, com ressuscitação hemostática em paralelo. Paciente instável não vai para a tomografia.",
    "commentary": "Alta (A): absurdo diante de choque e líquido livre.\n\nTomografia (B): só para o paciente estável.\n\nObservação com volume (D): atrasa o controle do sangramento.\n\nLavado peritoneal (E): o FAST já respondeu à pergunta; o lavado foi praticamente substituído pelo ultrassom.",
    "reference": "ATLS — 11ª edição: Trauma abdominal",
    "tags": [
      "trauma abdominal",
      "FAST",
      "laparotomia exploradora",
      "choque hemorrágico"
    ],
    "tip": "Instável + FAST positivo = laparotomia."
  },
  {
    "id": "amp2026-78",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Caso Clínico: Homem de 22 anos, sofre ferimento por arma branca (faca) em região periumbilical, com as alças do intestino delgado exteriorizadas. Chegou ao Pronto Atendimento estável e hemodinamicamente normotenso. Qual a melhor conduta?",
    "options": [
      "Laparotomia emergencial.",
      "TC e observação em enfermaria.",
      "Antibioticoterapia e jejum por 24 h.",
      "Sutura da pele sob anestesia local.",
      "Alta ambulatorial com curativo compressivo."
    ],
    "correctAnswer": 0,
    "explanation": "Ferimento abdominal penetrante com evisceração (alças exteriorizadas): indicação de laparotomia, mesmo com o paciente estável. Outras indicações absolutas são instabilidade hemodinâmica e peritonite. Enquanto isso, cobrir as alças com compressas úmidas e estéreis, sem tentar reintroduzi-las, e iniciar antibiótico.",
    "commentary": "Tomografia e observação (B): a conduta conservadora seletiva vale para facadas sem evisceração, peritonite ou instabilidade.\n\nAntibiótico e jejum (C): a evisceração exige cirurgia.\n\nSutura da pele (D) ou alta com curativo (E): ignoram a possível lesão de víscera e a evisceração.",
    "reference": "ATLS — 11ª edição / Eastern Association for the Surgery of Trauma",
    "tags": [
      "trauma abdominal penetrante",
      "evisceração",
      "laparotomia exploradora"
    ],
    "tip": "Ferimento abdominal com evisceração, peritonite ou instabilidade = laparotomia."
  },
  {
    "id": "amp2026-79",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Caso Clínico: Paciente politraumatizado, atendido no Pronto Socorro com dificuldade respiratória. R X mostra nível líquido no hemitorax. Ao reallizar a colocação de dreno torácico ocorre a drenagem de 1 800 mL de sangue ao inserir. Em sua avaliação qual a melhor conduta?",
    "options": [
      "Videotoracoscopia eletiva.",
      "Manter drenagem e reavaliar em 1 h.",
      "Autotransfusão e conduta expectante.",
      "Retirada do dreno para evitar hipotensão.",
      "Toracotomia de urgência para controle de sangramento."
    ],
    "correctAnswer": 4,
    "explanation": "Hemotórax com saída imediata de 1.800 mL ao drenar: hemotórax maciço (> 1.500 mL de saída inicial). A indicação é toracotomia de urgência para controlar o sangramento. Também indicam toracotomia o débito > 200 mL/h por 2–4 horas e a necessidade persistente de transfusão.",
    "commentary": "Videotoracoscopia eletiva (A): para hemotórax retido em paciente estável, não para sangramento maciço.\n\nManter e reavaliar em 1 hora (B): o volume inicial já indica cirurgia.\n\nAutotransfusão e expectante (C): a autotransfusão pode ajudar, mas não substitui o controle cirúrgico.\n\nRetirar o dreno (D): não controla o sangramento e causa nova coleção.",
    "reference": "ATLS — 11ª edição: Trauma torácico",
    "tags": [
      "hemotórax maciço",
      "toracotomia",
      "trauma torácico"
    ],
    "tip": "Hemotórax: > 1.500 mL de uma vez ou > 200 mL/h = toracotomia."
  },
  {
    "id": "amp2026-80",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Caso Clínico: Pessoa do sexo masculino, jovem, chega ao Pronto Socorro com ferimento aberto de 3 cm na parede torácica anterior. Apresenta-se dispnéico e presença de ruído de entrada de ar a cada movimento respiratório. Em sua avaliação qual a melhor conduta?",
    "options": [
      "Analgesia e alta.",
      "Apenas oxigênio suplementar.",
      "Antibioticoterapia profilática, sem curativo.",
      "Fechar hermeticamente com gaze e esparadrapo nos quatro lados.",
      "Cobrir com curativo de três lados e providenciar dreno em selo d’água."
    ],
    "correctAnswer": 4,
    "explanation": "Ferimento aberto no tórax com entrada de ar a cada respiração (ferida aspirativa) e dispneia: pneumotórax aberto. A conduta inicial é o curativo de três pontas (fixado em três lados), que funciona como válvula: deixa o ar sair na expiração e impede a entrada na inspiração. Em seguida, drenagem torácica em selo d'água longe do ferimento e, depois, fechamento cirúrgico da lesão.",
    "commentary": "Analgesia e alta (A), só oxigênio (B) ou antibiótico sem curativo (C): não tratam a lesão potencialmente fatal.\n\nFechar nos quatro lados (D): pode transformar o pneumotórax aberto em hipertensivo.",
    "reference": "ATLS — 11ª edição: Trauma torácico",
    "tags": [
      "pneumotórax aberto",
      "curativo de três pontas",
      "trauma torácico"
    ],
    "tip": "Pneumotórax aberto: curativo de 3 pontas + dreno longe da ferida."
  },
  {
    "id": "amp2026-81",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A respeito dos modelos de proteção social em sistemas de saúde é correto afirmar que:",
    "options": [
      "Na modalidade do tipo seguridade social, o financiamento é baseado em contribuições de empregados e empregadores.",
      "Na modalidade dos sistemas bismarckianos, o financiamento para o sistema universal é oriundo de recursos públicos provenientes de impostos gerais.",
      "Na modalidade do tipo seguro social, a prestação de assistência médica é em geral separada das ações de saúde coletiva e exercida por um órgão público diferente.",
      "Na modalidade dos sistemas beveridgianos, o Estado não assume para si a responsabilidade de garantia da proteção individual à saúde e protege apenas alguns grupos mais pobres.",
      "Na modalidade do tipo assistência social, os sistemas nacionais de saúde são apontados como mais eficientes, mais equânimes e, portanto, com maior impacto positivo nas condições de saúde."
    ],
    "correctAnswer": 2,
    "explanation": "Nos modelos de proteção social: o seguro social (bismarckiano) é financiado por contribuições de empregados e empregadores e cobre os trabalhadores contribuintes; nele, a assistência médica individual costuma ser prestada separadamente das ações de saúde pública, que ficam com outro órgão estatal (como no Brasil do INAMPS, antes do SUS). A seguridade social (beveridgiana) é universal e financiada por impostos gerais. A assistência social cobre apenas os mais pobres.",
    "commentary": "Seguridade social financiada por contribuições (A): esse é o seguro social; a seguridade usa impostos gerais.\n\nBismarckiano com impostos gerais (B): o bismarckiano usa contribuições.\n\nBeveridgiano protegendo só os pobres (D): o beveridgiano é universal; o modelo que protege só os pobres é o assistencial (residual).\n\nAssistência social mais eficiente e equânime (E): essas qualidades são atribuídas aos sistemas nacionais de seguridade (universais).",
    "reference": "Giovanella L et al. — Políticas e Sistema de Saúde no Brasil (Fiocruz)",
    "tags": [
      "modelos de proteção social",
      "seguridade social",
      "seguro social",
      "sistemas de saúde"
    ],
    "tip": "Bismarck = seguro social contributivo. Beveridge = seguridade universal por impostos."
  },
  {
    "id": "amp2026-82",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Considerando os estudos sobre as relações entre a saúde das populações e as desigualdades nas condições de vida em diferentes sociedades, é possível afirmar que:",
    "options": [
      "O principal fator que explica a situação geral da saúde de um país é sua riqueza total, independentemente do grau de crescimento econômico do país.",
      "A distribuição geográfica equitativa de recursos financeiros no setor saúde é condição necessária e suficiente para alcançar o tratamento equitativo entre grupos sociais e entre indivíduos.",
      "Grupos de renda média em um país com alto grau de iniquidade de renda apresentam uma situação de saúde pior que a de grupos com renda inferior que vivam em uma sociedade mais equitativa.",
      "Um dos principais mecanismos pelos quais as iniqüidades de renda produzem um impacto negativo na situação de saúde é o desgaste do capital social, ou seja, da proporção da riqueza do país distribuída adequadamente na sociedade.",
      "Distribuições igualitárias de recursos de saúde per capita tendem a resultar na obtenção de patamares mais igualitários nos resultados obtidos na saúde da população quando estes resultados são medidos em unidades como igualdade de acesso ou igualdade de uso."
    ],
    "correctAnswer": 2,
    "explanation": "Estudos sobre desigualdade e saúde (Wilkinson, por exemplo) mostram que, a partir de um certo nível de renda, o que pesa mais na saúde de uma sociedade é a distribuição da riqueza, não a riqueza total. Assim, grupos de renda média em países muito desiguais podem ter saúde pior que grupos de renda inferior em sociedades mais igualitárias.",
    "commentary": "Riqueza total como principal fator (A): a desigualdade de renda pesa mais que a riqueza absoluta nos países de renda média e alta.\n\nDistribuição geográfica de recursos como condição suficiente (B): é necessária, mas não suficiente; há barreiras sociais, culturais e de acesso.\n\nCapital social como proporção da riqueza bem distribuída (D): capital social é o conjunto de redes, confiança e coesão social, não a distribuição de riqueza.\n\nRecursos iguais resultam em resultados iguais (E): recursos iguais per capita não garantem igualdade de acesso ou uso, porque as necessidades são diferentes (equidade não é igualdade).",
    "reference": "Wilkinson RG — Unhealthy Societies / CNDSS — As causas sociais das iniquidades em saúde no Brasil (2008)",
    "tags": [
      "desigualdades em saúde",
      "determinantes sociais da saúde",
      "capital social",
      "equidade"
    ],
    "tip": "Na saúde de uma sociedade, a desigualdade de renda pesa mais que a riqueza total."
  },
  {
    "id": "amp2026-83",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Dentre as diversas interpretações da expressão “atenção primária à saúde - APS”, é correto afirmar que:",
    "options": [
      "A APS definida na declaração de Alma-Ata visa garantir a integralidade e a participação social e assim atingir maior organização do sistema de promoção da saúde e também da atenção à saúde.",
      "A APS seletiva refere-se ao foco na disponibilidade de profissionais especializados em medicina de família e comunidade nos serviços ambulatoriais médicos de primeiro contato no sistema de saúde.",
      "A APS abrangente ou integral refere-se ao ponto de entrada no sistema de saúde e ao local de cuidados de saúde para a maioria das pessoas na maior parte do tempo, sendo a concepção mais comum em países da Europa com sistemas universais públicos.",
      "A APS entendida como filosofia que orienta processos emancipatórios pelo direito universal à saúde preconiza que se desenvolvam como principais ações em países em desenvolvimento o monitoramento do crescimento infantil, a reidratação oral, a amamentação, a imunização, a complementação alimentar, o planejamento familiar e a alfabetização de mulheres.",
      "A APS conceituada em ser apenas o primeiro dos níveis de atenção no sistema de saúde tem como princípios fundamentais a necessidade de enfrentar os determinantes sociais de saúde, a acessibilidade e cobertura universais com base nas necessidades, a participação comunitária, a ação intersetorial e o uso eficiente de recursos e tecnologias apropriadas e com aceitabilidade social."
    ],
    "correctAnswer": 0,
    "explanation": "A Declaração de Alma-Ata (1978) definiu uma atenção primária abrangente, que inclui ações de promoção, prevenção e cuidado, participação comunitária, ação intersetorial e enfrentamento dos determinantes sociais, como parte de um sistema de saúde organizado e integral.",
    "commentary": "APS seletiva como foco em especialistas de MFC (B): a APS seletiva é um pacote restrito de intervenções de baixo custo para problemas específicos em países pobres.\n\nAPS abrangente como ponto de entrada (C): essa é a concepção de APS como primeiro nível de atenção, comum na Europa.\n\nFilosofia emancipatória com pacote GOBI-FFF (D): o pacote GOBI-FFF (monitoramento do crescimento, reidratação oral, amamentação, imunização, alimentação, planejamento familiar, alfabetização feminina) é a APS seletiva.\n\nPrimeiro nível com princípios de determinantes e participação (E): esses princípios são da APS abrangente, não da APS como simples primeiro nível.",
    "reference": "Giovanella L, Mendonça MHM — Atenção Primária à Saúde (Fiocruz) / Declaração de Alma-Ata (1978)",
    "tags": [
      "atenção primária",
      "Alma-Ata",
      "APS seletiva",
      "APS abrangente"
    ],
    "tip": "Alma-Ata = APS abrangente. GOBI-FFF = APS seletiva."
  },
  {
    "id": "amp2026-84",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Sobre a vigilância sanitária no Brasil, é correto afirmar que:",
    "options": [
      "O objetivo primordial da vigilância sanitária é eliminar o risco decorrente de atividades, serviços ou substâncias que produzir efeitos nocivos ou prejudiciais na saúde humana.",
      "Segundo a definição de legal vigente no Brasil, são objetos de intervenção da vigilância sanitária apenas os produtos e tecnologias dos grupos especificados na lei 8.080/90.",
      "No âmbito do sistema de vigilância sanitária, as externalidades negativas devem ser tratadas como importantes elos de interdependência social entre estados e municípios brasileiros.",
      "A inspeção sanitária ocorre quando se tomam medidas para limitar certa atividade ou exposição mesmo que não se tenha sido completamente estabelecido que a atividade ou exposição constitua uma ameaça à saúde.",
      "Enquanto a gerência de risco sanitário é de natureza mais científica, a avaliação de risco é de natureza político-administrativa, pois deve incorporar as preocupações sociais, econômicas e políticas na seleção de políticas de regulação mais apropriadas."
    ],
    "correctAnswer": 2,
    "explanation": "Na vigilância sanitária, externalidades negativas são efeitos nocivos de produtos, serviços ou atividades que atingem terceiros além de quem produz ou consome — e que ultrapassam fronteiras de municípios e estados. Por isso, criam interdependência entre os entes federados e exigem ação coordenada do sistema nacional de vigilância sanitária.",
    "commentary": "Eliminar o risco (A): o objetivo é eliminar, diminuir ou prevenir riscos à saúde; eliminá-los totalmente nem sempre é possível.\n\nApenas produtos listados na lei (B): a definição legal é ampla e abrange bens, serviços, ambiente e produção.\n\nInspeção como medida de precaução (D): a alternativa descreve o princípio da precaução, não a inspeção.\n\nGerência de risco científica e avaliação político-administrativa (E): está invertido — a avaliação de risco é técnico-científica e a gerência de risco é político-administrativa.",
    "reference": "Lei nº 8.080/1990, art. 6º / Lucchese G — Globalização e regulação sanitária",
    "tags": [
      "vigilância sanitária",
      "externalidades",
      "gestão de risco"
    ],
    "tip": "Avaliação de risco = científica. Gerência de risco = político-administrativa."
  },
  {
    "id": "amp2026-85",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A capacidade que as equipes de saúde da família têm de estabelecer mecanismos de integração e de cooperação clínica com os diferentes níveis de atenção, tendo como centro desses mecanismos as pessoas usuárias. A descrição supracitada diz respeito a:",
    "options": [
      "Acesso.",
      "Integralidade.",
      "Resolubilidade.",
      "Longitudinalidade.",
      "Coordenação de cuidados."
    ],
    "correctAnswer": 4,
    "explanation": "A coordenação do cuidado é o atributo da APS que integra os diferentes serviços e níveis de atenção usados pela pessoa, articulando informações, encaminhamentos e contrarreferências, com o usuário no centro. É a definição apresentada no enunciado.",
    "commentary": "Acesso (A): facilidade de chegar ao serviço e ser atendido (primeiro contato).\n\nIntegralidade (B): oferta do conjunto de ações necessárias às necessidades da pessoa, reconhecendo problemas biológicos, psicológicos e sociais.\n\nResolubilidade (C): capacidade de resolver a maioria dos problemas no próprio serviço.\n\nLongitudinalidade (D): acompanhamento da pessoa ao longo do tempo, com vínculo.",
    "reference": "Starfield B — Atenção primária: equilíbrio entre necessidades de saúde, serviços e tecnologia",
    "tags": [
      "atributos da APS",
      "coordenação do cuidado",
      "atenção primária"
    ],
    "tip": "Integrar os níveis de atenção com o usuário no centro = coordenação do cuidado."
  },
  {
    "id": "amp2026-86",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Saúde Coletiva",
    "text": "Sobre abordagem de sintomas de tristeza e depressão da Atenção Primária à Saúde, marque a alternativa correta:",
    "options": [
      "Se o paciente tem histórico de já ter utilizado um fármaco no passado, esse fármaco não deve ser usado em caso de novo episódio depressivo.",
      "Durante a gestação, deve-se abordar os sintomas apenas com medidas não medicamentosas, pois não existe fármaco seguro para uso nesse período.",
      "Terapias não medicamentosas, como psicoterapia e atividade física, não têm impacto relevante em quadros de depressão confirmada de grau moderado.",
      "Medicamentos antidepressivos não mostraram vantagens de eficácia na comparação com placebo se usados para pessoas com depressão unipolar leve.",
      "A abordagem do risco de suicídio não deve ser realizada na Atenção Primária, devendo ser feita exclusivamente em ambientes de internamento, pois não há instrumentos validados para a realização desta abordagem."
    ],
    "correctAnswer": 3,
    "explanation": "Em depressão unipolar leve, os antidepressivos não mostram vantagem consistente sobre o placebo; a primeira linha são as abordagens não farmacológicas (psicoeducação, psicoterapia, atividade física, apoio social) e o acompanhamento. Os antidepressivos têm benefício mais claro na depressão moderada e grave.",
    "commentary": "Não repetir fármaco já usado (A): um antidepressivo que funcionou antes costuma ser a melhor escolha num novo episódio.\n\nNenhum fármaco seguro na gestação (B): há opções com perfil de segurança aceitável (sertralina, por exemplo), indicadas em depressão moderada e grave.\n\nTerapias não medicamentosas sem impacto na depressão moderada (C): psicoterapia e atividade física têm eficácia comprovada.\n\nRisco de suicídio só em internação (E): a avaliação do risco é tarefa da APS, com instrumentos e perguntas diretas.",
    "reference": "NICE NG222 (2022) — Depression in adults / Gusso & Lopes — Tratado de MFC",
    "tags": [
      "depressão",
      "atenção primária",
      "antidepressivos"
    ],
    "tip": "Depressão leve: psicoterapia e medidas gerais; antidepressivo não supera o placebo."
  },
  {
    "id": "amp2026-87",
    "topography": "1.3",
    "topic": "Amigdalite/faringoamigdalite",
    "module": "Saúde Coletiva",
    "text": "Sintomas respiratórios estão entre as queixas mais comuns na Atenção Primária à Saúde, sobre este assunto, assinale a alternativa correta:",
    "options": [
      "Mesmo nos casos em que há alta probabilidade de faringite estreptocócica, o uso de antibióticos não está recomendado por não trazer benefício, sendo que os quadros são auto-limitados.",
      "Dentre os tratamentos de rinossinusites, o uso de solução salina isotônica para lavagem nasal não traz nenhum benefício em relação ao alívio sintomático, sendo o tratamento medicamentoso imperativo em todos os casos.",
      "O Escore de Centor modificado pode auxiliar na diferenciação entre faringite viral e estreptocócica, utilizando critérios como idade, ausência de tosse, exsudato em tonsilas, histórico recente de febre >38ºC e adenopatia cervical dolorosa.",
      "A tosse subaguda pós infecciosa é caracterizada por ausência de alterações ao exame físico, ausência de sintomas sistêmicos e tem um padrão de tosse seca ou pouco produtiva. É considerada como complicação e deve ser tratada com antibióticos.",
      "Medicamentos da classe do Inibidores da Enzima Conversora de Angiotensina (IECA), como o enalapril, podem ser causa de tosse. Devido à sua importância no manejo da hipertensão, não devem ser descontinuados ou substituídos, mesmo se o sintoma de tosse trouxer desconforto à pessoa que está utilizando."
    ],
    "correctAnswer": 2,
    "explanation": "O escore de Centor modificado (McIsaac) estima a probabilidade de faringite estreptocócica: febre > 38 °C, ausência de tosse, exsudato ou edema amigdaliano, linfonodos cervicais anteriores dolorosos e ajuste pela idade (+1 entre 3–14 anos, −1 acima de 45). Ajuda a decidir entre observar, testar ou tratar.",
    "commentary": "Não tratar mesmo com alta probabilidade de estreptococo (A): a faringite estreptocócica tem indicação de antibiótico (prevenção de febre reumática e complicações supurativas).\n\nLavagem nasal sem benefício (B): a solução salina melhora os sintomas da rinossinusite; e a maioria dos casos não precisa de antibiótico.\n\nTosse pós-infecciosa tratada com antibiótico (D): é autolimitada e não exige antibiótico.\n\nNão suspender IECA mesmo com tosse incômoda (E): a tosse por IECA justifica a troca por um BRA.",
    "reference": "Gusso & Lopes — Tratado de MFC / IDSA 2012 — Group A streptococcal pharyngitis",
    "tags": [
      "faringite estreptocócica",
      "escore de Centor",
      "sintomas respiratórios",
      "atenção primária"
    ],
    "tip": "Centor/McIsaac: febre, sem tosse, exsudato, linfonodo cervical doloroso e idade."
  },
  {
    "id": "amp2026-88",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "As recomendações para adequada abordagem do fumante sugerem um conjunto de intervenções, organizadas por meio de um programa estruturado e multiprofissional. É correto afirmar:",
    "options": [
      "Mesmo que o paciente não deseje parar de fumar é considerado estágio de contemplação.",
      "Quando prescrito bupropriona o paciente é orientado a parar de fumar no 8° dia de tratamento.",
      "A abordagem cognitivo-comportamental não se mostrou muito efetiva na cessação do tabagismo.",
      "A prescrição medicamentosa é recomendada em pacientes com escore do teste de Fagerström < 5.",
      "A abordagem mínima só está indicada de ser realizada para pacientes com claro interesse em parar de fumar."
    ],
    "correctAnswer": 1,
    "explanation": "Na cessação do tabagismo com bupropiona, o tratamento começa 1 semana antes da data de parada: 150 mg/dia por 3 dias e depois 150 mg 12/12 h; a pessoa para de fumar por volta do 8º dia, quando o medicamento já atingiu nível estável.",
    "commentary": "Não querer parar é contemplação (A): quem não pensa em parar está em pré-contemplação; contemplação é pensar em parar sem data definida.\n\nAbordagem cognitivo-comportamental pouco efetiva (C): é o pilar do tratamento, com eficácia comprovada.\n\nMedicação com Fagerström < 5 (D): a farmacoterapia é recomendada para dependência elevada (Fagerström ≥ 5), entre outros critérios.\n\nAbordagem mínima só para quem quer parar (E): deve ser feita com todos os fumantes, em qualquer consulta.",
    "reference": "Ministério da Saúde/INCA — Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo (2020)",
    "tags": [
      "tabagismo",
      "bupropiona",
      "cessação do tabagismo",
      "teste de Fagerström"
    ],
    "tip": "Bupropiona: começa 1 semana antes; parar de fumar no 8º dia."
  },
  {
    "id": "amp2026-89",
    "topography": "8",
    "topic": "Obesidade",
    "module": "Saúde Coletiva",
    "text": "Vários fatores têm contribuído para o aumento da obesidade na população em geral, a urbanização e a industrialização mudaram a dinâmica de vida nas últimas décadas, trazendo novos hábitos de locomoção e alimentação, o uso do automóvel ou do transporte público, criaram formas sedentárias de trabalho e lazer tudo isto aumenta associado a alimentos hipercalóricos e pouco nutritivos. É correto afirmar:",
    "options": [
      "A Bupropiona, venlafaxina, aripiprazol e lamotrigina são exemplos de fármacos obesogênicos.",
      "A perda de peso mais lenta, em comparação com perda mais rápida, não produz maior redução de massa gorda e do percentual de gordura corporal.",
      "A busca por alimentos altamente palatáveis devido à sua capacidade de gerar prazer, e não por necessidades metabólicas, é referida como fome hedônica.",
      "O IMC fornece uma estimativa da massa corporal total que indica adequadamente a composição de massa corporal magra e gordurosa, com interpretação de pontos de corte distintos conforme a faixa etária.",
      "Os locais preferenciais para o depósito do excesso de gordura são idênticos entre os indivíduos que se apresentam na mesma categoria de IMC e que, portanto, apresentam os mesmos riscos da obesidade para a saúde."
    ],
    "correctAnswer": 2,
    "explanation": "Fome hedônica é a busca por alimentos muito palatáveis (ricos em açúcar, gordura e sal) pelo prazer que proporcionam, ativando o sistema de recompensa, sem relação com necessidade energética (fome homeostática).",
    "commentary": "Bupropiona, venlafaxina, aripiprazol e lamotrigina obesogênicos (A): esses fármacos são neutros ou levam à perda de peso (a bupropiona é usada no tratamento da obesidade); obesogênicos são, por exemplo, mirtazapina, olanzapina, valproato e corticoides.\n\nPerda lenta sem vantagem (B): a banca considerou falsa; perda gradual tende a preservar mais massa magra, embora estudos mostrem resultados semelhantes em gordura corporal.\n\nIMC indica composição corporal (D): o IMC não distingue massa magra de gordura.\n\nDepósito de gordura igual em mesma faixa de IMC (E): a distribuição varia (visceral × subcutânea), e com ela o risco.",
    "reference": "ABESO — Diretrizes brasileiras de obesidade (2016) / Posicionamento sobre tratamento (2024)",
    "tags": [
      "obesidade",
      "fome hedônica",
      "fármacos obesogênicos"
    ],
    "tip": "Fome hedônica = comer por prazer, não por necessidade metabólica."
  },
  {
    "id": "amp2026-90",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Paciente de 45 anos, com hipertensão arterial crônica associado a estenose mitral decorrente de febre reumática evoluiu com insuficiência cardíaca congestiva descompensada e óbito posteriormente. O médico da Unidade de Saúde da Família é procurado por familiares para fornecimento do atestado de óbito. No campo sobre causa básica do atestado de óbito, o médico deverá preencher com:",
    "options": [
      "Febre reumática.",
      "Estenose mitral.",
      "Hipertensão arterial.",
      "Cardiopatia reumática.",
      "Insuficiência cardíaca congestiva."
    ],
    "correctAnswer": 0,
    "explanation": "A causa básica de morte é a doença que iniciou a cadeia de eventos que levou ao óbito. Aqui a sequência é: febre reumática → estenose mitral (cardiopatia reumática) → insuficiência cardíaca descompensada → óbito. A causa básica, na última linha da parte I da declaração, é a febre reumática (a CID-10 tem códigos para doença reumática crônica do coração, mas a banca aceitou febre reumática como a doença inicial).",
    "commentary": "Estenose mitral (B) e cardiopatia reumática (D): são consequências da febre reumática na cadeia causal.\n\nHipertensão arterial (C): é comorbidade que contribuiu, a ser registrada na parte II.\n\nInsuficiência cardíaca (E): é a causa terminal (imediata), não a básica.",
    "reference": "Ministério da Saúde — A declaração de óbito: documento necessário e importante (CFM/MS)",
    "tags": [
      "declaração de óbito",
      "causa básica",
      "vigilância epidemiológica"
    ],
    "tip": "Causa básica = a doença que iniciou a sequência que levou à morte."
  },
  {
    "id": "amp2026-91",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Visando facilitar o uso de recursos práticos de acesso rápido a evidências médicas de alta qualidade, um modelo de organizar tais recursos é a pirâmide de Haynes (ou “6s”), que propõe que se busque evidências de forma hierarquizada, iniciando no recurso disponível que esteja no mais alto nível da pirâmide. Sobre esse modelo, é correto afirmar que:",
    "options": [
      "Os sistemas computadorizados de suporte à tomada de decisão ficam na base da pirâmide.",
      "Artigos sobre ensaios clínicos randomizados ficam em nível acima das sinopses de sínteses.",
      "Seria indicado procurar evidências em revisões sistemáticas antes de procurar em diretrizes baseadas em evidências.",
      "O nível dos sumários é um dos mais altos e refere-se aos guias de prática clínica baseados em evidência e com atualização regular.",
      "Os recursos dos níveis mais baixos da pirâmide contém evidências que passaram por maior filtragem e pré-avaliação do que os níveis mais acima."
    ],
    "correctAnswer": 3,
    "explanation": "Na pirâmide 6S de Haynes, de cima para baixo: sistemas (suporte à decisão integrado ao prontuário), sumários (guias de prática clínica baseados em evidência e atualizados, como UpToDate e DynaMed), sinopses de sínteses, sínteses (revisões sistemáticas), sinopses de estudos e estudos originais. Os sumários ocupam o segundo nível, um dos mais altos.",
    "commentary": "Sistemas na base (A): estão no topo.\n\nEnsaios acima das sinopses de sínteses (B): estudos individuais ficam na base.\n\nRevisões antes de diretrizes (C): as diretrizes e sumários ficam acima das revisões e devem ser procurados primeiro.\n\nNíveis mais baixos com mais filtragem (E): é o contrário; os níveis mais altos são os mais pré-avaliados.",
    "reference": "Haynes RB / DiCenso A — The 6S pyramid (Evid Based Nurs 2009)",
    "tags": [
      "medicina baseada em evidências",
      "pirâmide 6S",
      "busca de evidências"
    ],
    "tip": "6S: sistemas → sumários → sinopses de sínteses → sínteses → sinopses → estudos."
  },
  {
    "id": "amp2026-92",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Uma paciente de 60 anos, negra de classe socioeconômica alta, sem comorbidades conhecidas e com todos os exames de rastreamento de rotina (mamografia, Papanicolau, exames laboratoriais básicos) dentro da normalidade para a idade, insiste em realizar um painel genético completo para risco de câncer e uma tomografia computadorizada de corpo inteiro anualmente, baseando-se em informações genéricas obtidas na internet sobre “detecção precoce de todas as doenças”. Ela relata grande ansiedade e medo de ter uma doença oculta. Considerando o caso clínico e a definição de prevenção quaternária, qual a abordagem mais adequada do médico de família em relação à demanda da paciente?",
    "options": [
      "Oferecer um programa de “check-up executivo” abrangente, com rastreios de acordo com as normas de países ricos, justificando que, embora alguns exames sejam extras e caros, eles podem trazer mais tranquilidade à paciente.",
      "Identificar a paciente como em risco de excesso de medicina, protegê-la de intervenções invasivas e onerosas desnecessárias, e focar na relação médico-paciente, promoção à saúde e procedimentos cientificamente aceitáveis.",
      "Aconselhar a paciente a buscar múltiplos especialistas para que cada um avalie sua área específica de preocupação, garantindo uma cobertura completa, dessa forma usando a coordenação do cuidado para avaliação dos riscos prováveis e improváveis.",
      "Encaminhar para a realização de todos os exames solicitados, pois a autonomia do paciente deve ser priorizada, já que é o aspecto mais importante da relação médico-paciente, além disso o pedido de exames desnecessários não afetam em nada o estado de ansiedade da paciente.",
      "Explicar que não há evidências que justifiquem tais exames para sua idade e risco, e sugerir o acompanhamento psicológico e psiquiátrico para a sua ansiedade, já que não há como mudar a opinião das pessoas se estão fixadas na sua doença ao invés de sua saúde."
    ],
    "correctAnswer": 1,
    "explanation": "A prevenção quaternária consiste em identificar pessoas em risco de sobremedicalização e protegê-las de intervenções desnecessárias, propondo cuidados eticamente aceitáveis. Diante da paciente ansiosa que pede exames sem indicação (painel genético e tomografia de corpo inteiro anual), o médico deve acolher a ansiedade, explicar os riscos (falsos-positivos, radiação, cascata de exames) e focar na relação, na promoção da saúde e no rastreamento baseado em evidência.",
    "commentary": "Check-up executivo (A): exames sem indicação geram danos e não trazem tranquilidade sustentável.\n\nVários especialistas (C): fragmenta o cuidado e aumenta intervenções desnecessárias.\n\nFazer tudo pela autonomia (D): autonomia não obriga a fazer exames sem indicação; e exames desnecessários podem aumentar a ansiedade.\n\nEncaminhar para psiquiatria por não haver como mudar a opinião (E): desconsidera a abordagem centrada na pessoa e a construção de vínculo.",
    "reference": "Jamoulle M — Prevenção quaternária / Gusso & Lopes — Tratado de MFC",
    "tags": [
      "prevenção quaternária",
      "sobremedicalização",
      "medicina de família"
    ],
    "tip": "Prevenção quaternária: proteger do excesso de exames e intervenções."
  },
  {
    "id": "amp2026-93",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Um jovem de 17 anos, pardo, classe social baixa, assintomático, comparece ao consultório acompanhado por sua mãe, que insiste na realização de rastreamentos extensos para infecções sexualmente transmissíveis (ISTs), incluindo HIV, hepatites, clamídia, gonorreia e sífilis, alegando que “é melhor prevenir antes que ele comece a vida sexual e pegue alguma coisa”. O jovem nunca teve relações sexuais. De acordo com os campos da prevenção e a abordagem relacional do médico de família, qual a conduta mais apropriada neste cenário?",
    "options": [
      "Realizar todos os exames solicitados pela mãe como forma de prevenção secundária, pois a detecção precoce é sempre benéfica.",
      "Encaminhar o jovem e a mãe para um infectologista, pois este é o especialista mais indicado para lidar com a prevenção de DSTs.",
      "Sugerir que o jovem inicie um programa de profilaxia pré-exposição (PrEP) para HIV, dada a preocupação da mãe com a prevenção de ISTs.",
      "Explicar à mãe que não há necessidade de exames, pois o jovem nunca teve relações sexuais, e focar apenas em orientações gerais de abstinência sexual.",
      "Explorar as preocupações da mãe e do jovem, fornecer educação em saúde sobre prevenção primária de IST, sem indicar exames de rastreamento para quem não teve exposição."
    ],
    "correctAnswer": 4,
    "explanation": "Adolescente sem início da vida sexual não tem exposição que justifique rastreamento de IST. A abordagem adequada é explorar as preocupações da mãe e do jovem, ouvir o adolescente (inclusive em momento a sós, com sigilo), oferecer educação sobre prevenção primária (preservativo, vacinação de HPV e hepatite B) e não pedir exames sem indicação.",
    "commentary": "Fazer todos os exames (A): rastrear sem exposição não traz benefício e pode causar dano (falsos-positivos).\n\nEncaminhar ao infectologista (B): a demanda é própria da APS.\n\nPrEP (C): indicada para pessoas com exposição de risco, não para quem não tem vida sexual.\n\nOrientar só abstinência (D): a orientação deve ser ampla, incluindo métodos de proteção, e acolher as dúvidas.",
    "reference": "Ministério da Saúde — Proteger e cuidar da saúde de adolescentes na Atenção Básica / PCDT de IST (2022)",
    "tags": [
      "saúde do adolescente",
      "infecções sexualmente transmissíveis",
      "prevenção primária",
      "rastreamento"
    ],
    "tip": "Sem exposição, sem rastreio de IST. Eduque e escute o adolescente."
  },
  {
    "id": "amp2026-94",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Dr. Carlos, médico de família e comunidade, está avaliando Marlene, uma paciente jovem, negra, em situação de rua, com queixas de disúria e polaciúria. Ele considera a combinação desses sintomas, sem corrimento vaginal, como um possível indicativo de cistite. Um estudo indica que essa combinação sintomática tem um Valor Preditivo Positivo (VPP) de 90% para diagnóstico de cistite nessa população.\n\nQual a melhor interpretação deste Valor Preditivo Positivo (VPP) para o caso de Marlene?",
    "options": [
      "Noventa por cento das mulheres que apresentam esses sintomas realmente não possuem a condição clínica de cistite.",
      "A probabilidade de encontrar essa combinação de sintomas é de 90% entre as mulheres que são diagnosticadas com cistite.",
      "Em 90% dos casos clínicos avaliados, a ausência dessa sintomatologia específica exclui completamente o diagnóstico de cistite.",
      "Existe 90% de probabilidade de Marlene ter cistite, dado que os seus sintomas (o “teste”) foram considerados positivos para a condição.",
      "Os sintomas apresentados por Marlene têm 90% de especificidade para o diagnóstico de cistite, confirmando a condição independentemente da probabilidade pré-teste."
    ],
    "correctAnswer": 3,
    "explanation": "O valor preditivo positivo é a probabilidade de a pessoa ter a doença dado que o teste (aqui, o conjunto de sintomas) foi positivo. VPP de 90% significa que Marlene, com disúria e polaciúria sem corrimento, tem 90% de probabilidade de ter cistite — lembrando que o VPP vale para populações com prevalência semelhante à do estudo.",
    "commentary": "90% não têm a doença (A): seria o complemento do VPP (falsos-positivos).\n\nProbabilidade dos sintomas entre quem tem cistite (B): é a definição de sensibilidade.\n\nAusência dos sintomas exclui o diagnóstico (C): descreve o valor preditivo negativo (e de forma exagerada).\n\n90% de especificidade independente da pré-teste (E): VPP não é especificidade, e depende da probabilidade pré-teste.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "valor preditivo positivo",
      "testes diagnósticos",
      "cistite"
    ],
    "tip": "VPP = probabilidade de ter a doença se o teste deu positivo."
  },
  {
    "id": "amp2026-95",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Em um estudo comparando o tratamento intensivo da pressão arterial com o tratamento tradicional, observou-se que o NNT (Número Necessário para Tratar) para evitar um AVC após 8,4 anos foi de 33.\n\nQual a interpretação mais precisa para o NNT de 33 obtido neste estudo sobre o tratamento da pressão arterial para a prevenção de AVC?",
    "options": [
      "É preciso tratar intensivamente 33 pacientes para causar um efeito adverso grave em um deles ao longo do período de 8,4 anos.",
      "A cada grupo de 33 pacientes tratados intensivamente, aproximadamente 32 não experimentarão um AVC ao longo de 8,4 anos.",
      "É necessário tratar 33 pacientes de forma intensiva durante 8,4 anos para evitar que ocorra em um destes pacientes um novo AVC.",
      "Trinta e três por cento dos pacientes submetidos ao tratamento intensivo terão um AVC efetivamente evitado ao longo do período de 8,4 anos.",
      "O tratamento intensivo demonstrou ser 33 vezes mais eficaz na prevenção de AVC do que a estratégia de tratamento tradicional adotada."
    ],
    "correctAnswer": 2,
    "explanation": "O número necessário para tratar (NNT) é o inverso da redução absoluta de risco. NNT de 33 significa que é preciso tratar 33 pacientes de forma intensiva, durante o tempo do estudo (8,4 anos), para evitar um AVC.",
    "commentary": "Para causar um efeito adverso (A): isso é o NNH (número necessário para causar dano).\n\n32 de 33 não terão AVC (B): confunde NNT com risco do desfecho; o NNT não diz quantos teriam AVC.\n\n33% terão AVC evitado (D): NNT de 33 corresponde a redução absoluta de cerca de 3%.\n\n33 vezes mais eficaz (E): o NNT não é medida relativa de eficácia.",
    "reference": "Fletcher — Epidemiologia Clínica / Guyatt — Users' Guides to the Medical Literature",
    "tags": [
      "número necessário para tratar",
      "NNT",
      "medidas de efeito"
    ],
    "tip": "NNT = 1 / redução absoluta de risco, sempre com o tempo de tratamento."
  },
  {
    "id": "amp2026-96",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Em uma consulta de rotina, um paciente assintomático solicita um teste diagnóstico para uma doença rara, cuja prevalência na população geral é muito baixa (probabilidade pré-teste < 1%). O teste possui uma especificidade moderada (ex: 70%).\n\nConsiderando os conceitos de probabilidade pré-teste e área de indicação para um teste diagnóstico, qual a melhor justificativa para o médico desencorajar a realização do teste neste paciente assintomático?",
    "options": [
      "O teste possui intrinsecamente baixa sensibilidade, o que significa que um grande número de casos positivos seria despercebido.",
      "A probabilidade pré-teste muito baixa aumentaria o risco significativo de resultados falso-negativos, mesmo com um teste positivo.",
      "O custo financeiro do teste torna sua aplicação inviável em pacientes sem sintomas claros ou indicação formal de rastreamento.",
      "A especificidade moderada do teste levaria a um alto risco de resultados falso-positivos em uma população com tão baixa prevalência da doença.",
      "Testes diagnósticos são considerados úteis apenas para confirmar o diagnóstico em pacientes com elevada probabilidade pré-teste da doença."
    ],
    "correctAnswer": 3,
    "explanation": "Com probabilidade pré-teste muito baixa (< 1%) e especificidade moderada (70%), 30% dos sadios terão resultado positivo. Como quase todos os testados são sadios, a grande maioria dos positivos será falso-positivo (VPP muito baixo), levando a ansiedade, novos exames e intervenções desnecessárias. Por isso o teste não deve ser feito fora da sua área de indicação.",
    "commentary": "Baixa sensibilidade (A): o problema descrito é a especificidade, não a sensibilidade.\n\nRisco de falso-negativo (B): com prevalência baixa, o VPN é alto; o risco é de falso-positivo.\n\nCusto (C): pode pesar, mas não é a justificativa epidemiológica principal.\n\nTestes só para confirmar em alta probabilidade (E): testes também servem para excluir doença; o problema é usá-los em probabilidade muito baixa.",
    "reference": "Fletcher — Epidemiologia Clínica / Gusso & Lopes — Tratado de MFC",
    "tags": [
      "probabilidade pré-teste",
      "especificidade",
      "falso-positivo",
      "testes diagnósticos"
    ],
    "tip": "Prevalência muito baixa + especificidade moderada = muitos falsos-positivos."
  },
  {
    "id": "amp2026-97",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Dra. Clara, 35 anos, de etnia negra, médica residente de Medicina de Família e Comunidade, está realizando um estudo sobre o impacto da multimorbidade na qualidade de vida de mulheres climatéricas em uma comunidade de baixa renda. Ela debate se deve usar dados de autorrelato das pacientes via questionário ou dados de prontuários médicos da Unidade Básica de Saúde para sua pesquisa.\n\nQual é a principal vantagem dos dados de autorrelatos das pacientes em comparação com os dados de prontuários médicos para a avaliação da multimorbidade, considerando o objetivo da Dra. Clara de avaliar o impacto na qualidade de vida?",
    "options": [
      "A maior precisão na classificação de doenças raras ou pouco reconhecidas, que podem não ser devidamente registradas nos prontuários.",
      "A menor sensibilidade a vieses de subdiagnóstico, pois os pacientes relatam todos os seus problemas de saúde sem omitir informações.",
      "A maior validade na identificação de condições crônicas já diagnosticadas e registradas formalmente, evitando viés de memória das pacientes.",
      "A facilidade de coleta de grandes volumes de dados para análises epidemiológicas, especialmente em estudos populacionais abrangentes.",
      "A capacidade de refletir o impacto real das doenças no nível do paciente individual, incluindo aspectos funcionais e subjetivos da experiência com a doença."
    ],
    "correctAnswer": 4,
    "explanation": "O objetivo do estudo é avaliar o impacto da multimorbidade na qualidade de vida — um desfecho centrado na pessoa. Os dados de autorrelato captam como a doença afeta o dia a dia, a funcionalidade e a experiência subjetiva, aspectos que os prontuários (centrados em diagnósticos registrados) não mostram.",
    "commentary": "Maior precisão para doenças raras (A): o autorrelato tende a ser menos preciso para diagnósticos específicos.\n\nMenor viés de subdiagnóstico, sem omissões (B): o autorrelato também tem vieses (memória, desconhecimento do diagnóstico).\n\nMaior validade para condições já registradas (C): essa é a vantagem do prontuário.\n\nFacilidade de grandes volumes (D): pode ser verdade em alguns contextos, mas não é a principal vantagem para o objetivo de qualidade de vida.",
    "reference": "Medronho — Epidemiologia / Fortin M — Multimorbidity research methods",
    "tags": [
      "multimorbidade",
      "qualidade de vida",
      "fontes de dados",
      "pesquisa"
    ],
    "tip": "Para medir impacto na vida da pessoa, ouça a pessoa (autorrelato)."
  },
  {
    "id": "amp2026-98",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Saúde Coletiva",
    "text": "Em um programa de residência de Medicina de Família e Comunidade, Dr. Gabriel, 28 anos, branco, residente de primeiro ano, atende Dona Efigênia, 85 anos, negra, viúva, aposentada com baixa renda e residente em um lar de idosos. Dona Efigênia tem demência moderada, diabetes, insuficiência renal crônica e úlceras de pressão. A família insiste em medidas agressivas para cada doença, seguindo diretrizes individuais, apesar do prognóstico reservado e do sofrimento de Dona Efigênia.\n\nNo contexto da multimorbidade, qual é a principal orientação que Dr. Gabriel deve considerar para o cuidado de Dona Efigênia, buscando a abordagem centrada no paciente e a prevenção quaternária?",
    "options": [
      "Concentrar os esforços na prevenção de infecções e na cura das úlceras de pressão, pois são as condições que causam maior sofrimento direto e imediato à paciente.",
      "Enfatizar a importância da relação paciente-médico e da continuidade dos cuidados gerais e dos medicamentos atuais, buscando compreender os objetivos da casa de repouso.",
      "Priorizar a reversão de desfechos biomédicos, como o controle glicêmico rigoroso e a função renal, visando prolongar a sobrevida da paciente, conforme as diretrizes para cada doença.",
      "Desenvolver um plano de cuidados que contemple a tomada de decisão compartilhada e prevenção de sobre medicalização, envolvendo a família e focando no que importa para a paciente, como conforto e qualidade de vida.",
      "Avaliar o nível de adesão aos cuidados previstos na diretriz de tratamento para cada um dos agravos identificados, identificando assim oportunidades para educação intensiva da rede de cuidadores de maneira que garanta que todos os cuidados previstos em tais diretrizes sejam devidamente executados."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com demência moderada, multimorbidade, lesões por pressão e prognóstico reservado: aplicar cada diretriz de doença isoladamente leva a sobretratamento, polifarmácia e sofrimento. A abordagem adequada é um plano de cuidado centrado no que importa para a paciente (conforto, qualidade de vida), com decisão compartilhada com a família e prevenção quaternária, evitando intervenções desproporcionais.",
    "commentary": "Focar nas úlceras e infecções (A): é parte do cuidado, mas não define a abordagem global.\n\nManter os medicamentos atuais e entender a casa de repouso (B): falta revisão do tratamento e foco nos objetivos da paciente.\n\nReverter desfechos biomédicos pelas diretrizes (C): controle rigoroso em quem tem prognóstico reservado aumenta riscos (hipoglicemia) sem benefício.\n\nGarantir a adesão a todas as diretrizes (E): é exatamente o sobretratamento que se quer evitar.",
    "reference": "NICE NG56 — Multimorbidity: clinical assessment and management / Gusso & Lopes — Tratado de MFC",
    "tags": [
      "multimorbidade",
      "prevenção quaternária",
      "cuidados paliativos",
      "decisão compartilhada"
    ],
    "tip": "Multimorbidade: plano único centrado nos objetivos da pessoa, não uma diretriz por doença."
  },
  {
    "id": "amp2026-99",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Saúde Coletiva",
    "text": "Ademir, 53 anos, pardo, trabalhador da construção civil, classe social baixa, veio em busca de check-up na Unidade Básica de Saúde. Considera necessário fazer novos exames de sangue por preocupação de falecer por infarto aos 54 anos como ocorreu com o pai dele. Sem doenças prévias. Fuma 15 cigarros/dia desde que os 15 anos; bebe 6 latinhas de cerveja 2 vezes por semana. Sem exercícios rotineiros no lazer. Hoje tomou diclofenaco há algumas horas, como costuma fazer 2 a 3 vezes por semana para dor lombar ou nas pernas após o trabalho. No prontuário, consta há 1 mês dosagem de colesterol total= 255mg/dL, HDL= 40mg/dL, glicemia de jejum= 98mg/dL. Ao exame, hoje está com pressão arterial= 146/96, IMC=24. Colocando estes dados na tabela de Risco Cardiovascular Global da OMS calibrada para o Brasil, você identifica haver 9% de risco de desfechos coronarianos duros em 10 anos. Na consulta de hoje, é adequado informá-lo que",
    "options": [
      "A ingesta etílica descrita é um fator protetor e, portanto, o risco cardiovascular específico dele deve ser menor do que os 9% calculados, sendo recomendado priorizar os esforços na abordagem do tabagismo, ajustando conforme o nível de motivação.",
      "A história familiar é um fator de risco agravante e, portanto, o risco cardiovascular específico dele deve ser maior do que 9%, sendo recomendado solicitar com urgência exame do perfil lipídico completo e da hemoglobina glicada para melhorar tal estimativa.",
      "O consumo frequente de diclofenaco é um fator de risco agravante e, portanto, o risco cardiovascular específico dele deve ser maior do que os 9% calculados, sendo prioritário prescrever hoje o início do uso de estatina, visando reduzir o colesterol total em pelo menos 25%.",
      "A situação socioeconômica é um fator de risco agravante e, portanto, o risco cardiovascular específico dele deve ser maior do que 9%, sendo recomendado investigar o padrão alimentar e a princípio pedir apenas um exame hoje: a monitorização residencial da pressão arterial.",
      "O sedentarismo é um fator de risco agravante e, portanto, a maior recomendação é que comece exercícios programados de forma rotineira, na intensidade e duração necessárias para obter redução da pressão arterial e do colesterol total, com precauções para não piorar as dores."
    ],
    "correctAnswer": 3,
    "explanation": "O escore global da OMS não inclui situação socioeconômica, que é um fator de risco cardiovascular reconhecido: pessoas de baixa renda e escolaridade têm mais eventos. Assim, o risco real de Ademir é provavelmente maior que 9%. A pressão de 146/96 numa única medida (e após uso de diclofenaco, que eleva a PA) precisa ser confirmada fora do consultório antes de se definir hipertensão — por isso, inicialmente, a monitorização residencial é o exame indicado, junto com investigação do padrão alimentar.\n\nO gabarito considera D a resposta mais adequada.",
    "commentary": "Álcool como protetor (A): consumo de 6 latas em 2 dias por semana é consumo em binge, de risco, não protetor.\n\nHistória familiar e exames urgentes (B): o infarto do pai aos 54 anos é, de fato, história familiar precoce (homem < 55 anos), mas colesterol e glicemia foram dosados há 1 mês; repetir exames com urgência não muda a conduta.\n\nDiclofenaco e estatina hoje (C): o AINE eleva a PA, mas não justifica iniciar estatina hoje sem considerar o risco global e a conversa com o paciente.\n\nSedentarismo como maior recomendação (E): é importante, mas a alternativa ignora o tabagismo, que é o fator modificável mais relevante.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020) / OMS — HEARTS / Gusso & Lopes — Tratado de MFC",
    "tags": [
      "risco cardiovascular",
      "determinantes sociais da saúde",
      "MRPA",
      "atenção primária"
    ],
    "tip": "Escores de risco não incluem condição social; baixa renda aumenta o risco real."
  },
  {
    "id": "amp2026-100",
    "topography": "2.2",
    "topic": "Doença arterial coronariana crônica",
    "module": "Saúde Coletiva",
    "text": "Logo após a consulta de Ademir você atende Bino, semelhante em diversos aspectos: também 53 anos, pardo, classe social baixa, fumante, sem doenças prévias e, nos exames realizados há 2 semanas, resultados laboratoriais iguais: colesterol total= 255mg/dL, HDL= 40mg/dL, glicemia de jejum= 98mg/dL. Mas Bino é agricultor, ingere 3 doses de cachaça 4 dias por semana, não usa remédios, não tem história familiar de infarto. Bino veio em busca de segunda opinião, traz declaração emitida dias atrás por outro médico: nela, consta PA =146/96, IMC=28, Risco Cardiovascular pela calculadora de Framingham (2008) = 33% de risco de desfechos coronarianos duros em 10 anos. Você recalcula por Framingham e obtém o mesmo resultado, mas confere pela tabela de Risco Cardiovascular Global da OMS calibrada para o Brasil e verifica que esta indica apenas 9% de risco de desfechos coronarianos duros em 10 anos. Nesta consulta, é adequado informá-lo que",
    "options": [
      "É mais confiável o dado da tabela de Risco Cardiovascular Global da OMS por ter sido desenvolvida a partir do acompanhamento científico de uma coorte contemporânea de pacientes brasileiros.",
      "O ideal seria realizar mais medidas da pressão arterial e nova amostra dos exames laboratoriais para obter um melhor cálculo do risco cardiovascular, postergando recomendações de tratamento para depois disto.",
      "A diferença de estimativa de prognóstico decorre do cálculo por Framingham levar em consideração também o efeito adicional do IMC elevado e da ingesta etílica, fatores não considerados pela tabela da OMS.",
      "O cálculo por Framingham frequentemente superestima o risco por se basear numa amostra menor e de outra etnia que foi obtida em estudos de coorte realizados numa época em que o risco basal de doença cardiovascular era consideravelmente maior do que no Brasil atual.",
      "Pode-se estimar que o risco de desfechos coronarianos duros para ele em 10 anos está entre 9% e 33% e, em qualquer ponto desta faixa, seriam recomendadas as mesmas condutas para prevenção cardiovascular, portanto deve-se discutir já as opções terapêuticas pertinentes, medicamentosas ou não."
    ],
    "correctAnswer": 3,
    "explanation": "A diferença entre Framingham (33%) e a tabela da OMS calibrada para o Brasil (9%) se explica pela origem do escore: Framingham foi derivado de uma coorte norte-americana, majoritariamente branca, de meados do século XX, quando a incidência de doença coronariana era muito maior. Em populações atuais e diferentes, tende a superestimar o risco. Por isso, ferramentas calibradas para a população local são preferíveis.",
    "commentary": "Tabela da OMS de coorte brasileira contemporânea (A): a tabela da OMS é calibrada para a região, mas não foi desenvolvida a partir de uma coorte brasileira.\n\nRepetir medidas e postergar recomendações (B): os dados já permitem orientar; não é preciso adiar as condutas.\n\nFramingham inclui IMC e álcool (C): o Framingham para desfechos coronarianos duros não inclui IMC nem álcool.\n\nMesmas condutas em toda a faixa de 9% a 33% (E): as condutas mudam conforme o risco (por exemplo, indicação e intensidade da estatina).",
    "reference": "OMS — HEARTS: tabelas de risco cardiovascular (2019) / Atualização da Diretriz Brasileira de Dislipidemias (SBC)",
    "tags": [
      "risco cardiovascular",
      "escore de Framingham",
      "calibração de escores"
    ],
    "tip": "Framingham superestima o risco em populações atuais e diferentes da coorte original."
  }
];
