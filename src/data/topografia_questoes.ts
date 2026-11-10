import { Question } from '../types';

/**
 * Questões do "Simulado por topografia".
 * Cada uma tem `topography` (id da especialidade no roteiro, ex.: "1.1") e `topic` (o assunto).
 * Questões do banco geral também entram na topografia se tiverem `topography` preenchido.
 */

// 1.1 Neurologia — Cefaleias (40 questões, caderno "Dia 1", revisão de fontes em 10/11/2026)
const NEURO_CEFALEIAS: Question[] = [
  {
    "id": "topo-1-1-1",
    "module": "Clínica Médica",
    "text": "Mulher, 27 anos, apresenta episódios recorrentes de cefaleia há cinco anos. Refere dor unilateral, pulsátil, moderada a forte, associada a náuseas, fotofobia e fonofobia. Os episódios duram entre 8 e 24 horas e pioram durante atividades físicas habituais. Exame neurológico normal. Qual é o diagnóstico mais provável?",
    "options": [
      "(A) Cefaleia do tipo tensional episódica",
      "(B) Migrânea sem aura",
      "(C) Cefaleia em salvas",
      "(D) Neuralgia do trigêmeo",
      "(E) Cefaleia secundária à hipertensão intracraniana"
    ],
    "correctAnswer": 1,
    "explanation": "O conjunto de achados atende ao fenótipo típico de migrânea sem aura: crises recorrentes de 4–72 horas, dor com caráter pulsátil, intensidade moderada ou forte e piora com atividade física habitual. Náuseas e a associação de fotofobia com fonofobia são sintomas acompanhantes característicos. A migrânea é um diagnóstico clínico; exame neurológico normal e padrão estável apoiam uma cefaleia primária, mas a presença de sinais de alarme mudaria a investigação. A unilateralidade é frequente, porém não obrigatória em todas as crises.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea sem aura"
    ],
    "tip": "Quando houver dor pulsátil, náuseas, fotofobia e piora com movimentação em pessoa jovem, pense em migrânea. A ausência de sinais de alarme e o exame neurológico normal reforçam o diagnóstico clínico.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-2",
    "module": "Clínica Médica",
    "text": "Homem, 31 anos, relata pontos luminosos e linhas em zigue-zague que começam pequenos e se expandem gradualmente pelo campo visual, desaparecendo após 25 minutos. Em seguida, inicia cefaleia pulsátil unilateral, com náuseas e fotofobia. Qual mecanismo melhor explica os sintomas visuais?",
    "options": [
      "(A) Isquemia retiniana transitória por embolização arterial",
      "(B) Aumento agudo da pressão intracraniana",
      "(C) Depressão alastrante cortical",
      "(D) Desmielinização aguda do nervo óptico",
      "(E) Vasoconstrição persistente da artéria cerebral média"
    ],
    "correctAnswer": 2,
    "explanation": "A aura visual típica decorre de fenômeno de depressão alastrante cortical: uma onda propagada de alteração da atividade neuronal e glial, acompanhada de mudanças transitórias no fluxo sanguíneo cortical. O padrão costuma começar com fenômenos positivos (luzes, zigue-zagues ou cintilações), expandir-se gradualmente e resolver-se por completo, em geral em 5–60 minutos. Isso difere do déficit isquêmico frequentemente súbito e predominantemente negativo, embora haja sobreposição clínica. Um primeiro episódio, sintomas persistentes ou fatores vasculares exigem avaliação para excluir AVC ou outra causa secundária.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea com aura"
    ],
    "tip": "A progressão gradual de sintomas positivos, com duração usual de 5 a 60 minutos, sugere aura. Déficit súbito deve levantar suspeita de evento vascular; não descarte AVC apenas pela história de migrânea.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-3",
    "module": "Clínica Médica",
    "text": "Mulher, 34 anos, apresenta crise de migrânea intensa, com dor pulsátil unilateral, náuseas e fotofobia. Anti-inflamatórios não tiveram resposta satisfatória em crises anteriores. Não apresenta doença cardiovascular ou contraindicações a triptanos. Qual opção é adequada?",
    "options": [
      "(A) Morfina intravenosa como primeira escolha",
      "(B) Sumatriptana, podendo ser associada a anti-inflamatório não esteroidal",
      "(C) Propranolol intravenoso para interromper a crise",
      "(D) Verapamil associado a ácido acetilsalicílico",
      "(E) Amitriptilina em dose única durante a crise"
    ],
    "correctAnswer": 1,
    "explanation": "Triptanos, como a sumatriptana, são agonistas 5‑HT1B/1D e constituem opção para crises moderadas ou graves, especialmente quando analgésicos/AINEs foram ineficazes ou quando a intensidade já justifica terapia específica. A associação de triptano com AINE pode melhorar a resposta e reduzir recorrência em alguns pacientes. Náuseas e vômitos podem comprometer a absorção oral; nesses casos, considerar via não oral e antiemético. Antes de prescrever, pesquisar doença coronariana, doença vascular periférica, AVC/AIT prévio e hipertensão não controlada, situações em que triptanos devem ser evitados. No protocolo brasileiro de urgência publicado pela Sociedade Brasileira de Cefaleia/Academia Brasileira de Neurologia, a abordagem inclui ambiente tranquilo, antiemético quando indicado, hidratação apenas se houver desidratação e tratamento parenteral conforme resposta. Opioides não são recomendados para a crise de migrânea.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento da crise de migrânea"
    ],
    "tip": "Separe tratamento abortivo de profilaxia. Na crise: analgésicos, AINEs, triptanos e antieméticos conforme o caso. Propranolol e amitriptilina são preventivos, não medicamentos de resgate.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-4",
    "module": "Clínica Médica",
    "text": "Mulher, 36 anos, apresenta cerca de 10 dias de cefaleia por mês, com episódios incapacitantes de migrânea e prejuízo no trabalho. Utiliza frequentemente medicamentos abortivos. Não possui contraindicações a betabloqueadores. Qual medicamento é opção adequada para prevenção?",
    "options": [
      "(A) Sumatriptana diária",
      "(B) Morfina em baixa dose",
      "(C) Propranolol",
      "(D) Metoclopramida contínua",
      "(E) Dipirona diária"
    ],
    "correctAnswer": 2,
    "explanation": "A profilaxia é indicada quando a frequência, a incapacidade, a resposta incompleta ao tratamento agudo ou o risco de uso excessivo justificam reduzir a carga da doença. Propranolol é uma opção preventiva estabelecida; topiramato, amitriptilina, candesartana e terapias anti-CGRP podem ser consideradas conforme comorbidades, contraindicações, acesso e preferência. O objetivo é reduzir frequência, intensidade e incapacidade, não apenas tratar a dor de cada crise. A resposta deve ser reavaliada após período adequado em dose tolerada, com diário de cefaleia e revisão de efeitos adversos.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "profilaxia da migrânea"
    ],
    "tip": "Crises frequentes, incapacitantes e consumo recorrente de medicação abortiva devem levar à avaliação de profilaxia. Sumatriptana é usada principalmente para tratar a crise.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-5",
    "module": "Clínica Médica",
    "text": "Homem, 39 anos, apresenta cefaleia bilateral, em pressão ou aperto frontal e occipital, leve a moderada. Não piora com caminhada e não há náuseas ou vômitos. Piora após jornadas prolongadas de trabalho. Diagnóstico mais provável?",
    "options": [
      "(A) Migrânea sem aura",
      "(B) Cefaleia em salvas",
      "(C) Cefaleia do tipo tensional",
      "(D) Neuralgia occipital",
      "(E) Hipertensão intracraniana idiopática"
    ],
    "correctAnswer": 2,
    "explanation": "A cefaleia tensional costuma ser bilateral, em pressão ou aperto, leve a moderada, não agravada por atividade física habitual e sem náuseas ou vômitos. Pode haver fotofobia ou fonofobia isoladamente, mas a presença conjunta das duas ou náuseas favorece migrânea. Sensibilidade pericraniana pode estar presente. Analgésicos simples ou AINE podem ser usados em episódios selecionados, evitando frequência excessiva; na forma crônica, amitriptilina é uma opção preventiva, associada a medidas comportamentais e de sono.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia do tipo tensional"
    ],
    "tip": "Pulsátil, náuseas e fotofobia sugerem migrânea; aperto bilateral sem náuseas sugere tensional; dor orbital unilateral extrema com sintomas autonômicos sugere salvas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-6",
    "module": "Clínica Médica",
    "text": "Homem, 35 anos, apresenta dor extremamente intensa na região orbitária direita, com duração de 60 minutos, lacrimejamento, hiperemia conjuntival, congestão nasal e inquietação. As crises ocorrem diariamente, geralmente no mesmo horário, há três semanas. Diagnóstico provável?",
    "options": [
      "(A) Migrânea com aura",
      "(B) Cefaleia tensional crônica",
      "(C) Cefaleia em salvas",
      "(D) Neuralgia do trigêmeo",
      "(E) Sinusite bacteriana aguda"
    ],
    "correctAnswer": 2,
    "explanation": "A cefaleia em salvas é uma cefaleia trigêmino-autonômica: dor unilateral muito intensa, orbitária, supraorbitária ou temporal, com duração de 15–180 minutos e sintomas autonômicos ipsilaterais, como lacrimejamento, hiperemia conjuntival, congestão nasal, rinorreia, ptose ou miose. A inquietação durante a crise é uma pista útil; pacientes com migrânea frequentemente procuram repouso, enquanto quem tem salvas pode caminhar ou balançar-se. A recorrência em horários semelhantes e em períodos agrupados é típica, mas não obrigatória.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em salvas"
    ],
    "tip": "Dor orbital unilateral intensa, sintomas autonômicos do mesmo lado e crises recorrentes em horários semelhantes formam uma combinação altamente sugestiva de salvas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-7",
    "module": "Clínica Médica",
    "text": "Homem, 42 anos, com diagnóstico estabelecido de cefaleia em salvas, chega durante crise de dor orbitária unilateral intensa, lacrimejamento e congestão nasal. Qual é a melhor conduta abortiva?",
    "options": [
      "(A) Dipirona oral e repouso domiciliar",
      "(B) Oxigênio a 100% em alto fluxo por máscara não reinalante e/ou sumatriptana subcutânea",
      "(C) Amitriptilina intravenosa",
      "(D) Propranolol oral",
      "(E) Prednisona como único tratamento de resgate imediato"
    ],
    "correctAnswer": 1,
    "explanation": "A cefaleia em salvas exige tratamento abortivo de início rápido, pois a crise costuma durar apenas 15–180 minutos. O protocolo nacional de urgência disponibilizado pela Sociedade Brasileira de Cefaleia e pela Academia Brasileira de Neurologia recomenda oxigênio a 100% por máscara sem recirculação, com fluxo de 10–12 L/min durante 20 minutos, ou sumatriptana 6 mg por via subcutânea, se disponível e sem contraindicação. Diretrizes internacionais frequentemente descrevem fluxos de pelo menos 12 L/min e duração aproximada de 15 minutos; por isso, a questão privilegia o protocolo brasileiro. Analgésicos comuns e opioides têm início/eficácia inadequados para abortar essas crises. Verapamil é preventivo, não abortivo, e exige ECG basal e durante titulação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento agudo da cefaleia em salvas"
    ],
    "tip": "Memorize: crise de salvas — oxigênio e sumatriptana subcutânea; prevenção — verapamil.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-8",
    "module": "Clínica Médica",
    "text": "Homem, 48 anos, apresenta cefaleia súbita e extremamente intensa durante atividade física, atingindo intensidade máxima em menos de um minuto. Descreve como a pior cefaleia da vida e apresenta náuseas e rigidez de nuca. Qual hipótese deve ser investigada imediatamente?",
    "options": [
      "(A) Migrânea sem aura",
      "(B) Cefaleia tensional episódica",
      "(C) Hemorragia subaracnóidea",
      "(D) Cefaleia em salvas",
      "(E) Neuralgia do trigêmeo"
    ],
    "correctAnswer": 2,
    "explanation": "Cefaleia em trovoada é aquela que atinge intensidade máxima abruptamente, em segundos ou poucos minutos, e deve ser tratada como emergência até exclusão de causas graves. Hemorragia subaracnóidea aneurismática é diagnóstico prioritário, mas também se consideram vasoconstrição cerebral reversível, dissecção arterial e trombose venosa cerebral. A tomografia sem contraste é o exame inicial habitual; se negativa, a necessidade de punção lombar e/ou estudo vascular depende do tempo desde o início, qualidade da tomografia e probabilidade clínica residual. Exame neurológico sem déficit não exclui hemorragia.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em trovoada"
    ],
    "tip": "A expressão \"pior cefaleia da vida\", com início explosivo, é sinal de alarme. Não classifique como migrânea antes de excluir causas potencialmente fatais.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-9",
    "module": "Clínica Médica",
    "text": "Mulher, 72 anos, apresenta cefaleia temporal recente, sensibilidade do couro cabeludo, dor mandibular durante mastigação e episódios de visão borrada. Artéria temporal espessada e dolorosa. Qual conduta é mais adequada?",
    "options": [
      "(A) Analgésicos e reavaliação em 30 dias",
      "(B) Iniciar corticosteroide sistêmico imediatamente e providenciar investigação confirmatória",
      "(C) Triptano e ressonância eletiva",
      "(D) Antibiótico de amplo espectro",
      "(E) Punção lombar antes de qualquer tratamento"
    ],
    "correctAnswer": 1,
    "explanation": "A combinação de idade acima de 50 anos, cefaleia temporal nova, hipersensibilidade do couro cabeludo e claudicação mandibular é altamente sugestiva de arterite de células gigantes. VHS e PCR frequentemente se elevam, mas resultados normais não excluem totalmente a doença. Ultrassonografia de artérias temporais e biópsia podem confirmar; a investigação não deve atrasar corticosteroide quando a suspeita é relevante, sobretudo diante de sintomas visuais. A ameaça central é isquemia do nervo óptico e perda visual irreversível.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "arterite de células gigantes"
    ],
    "tip": "Idoso com cefaleia nova, claudicação mandibular e alteração visual: pense em arterite temporal. Trate imediatamente quando a suspeita for relevante.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-10",
    "module": "Clínica Médica",
    "text": "Mulher, 41 anos, com migrânea desde a adolescência, apresenta cefaleia quase diária há seis meses. Utiliza analgésicos simples em cerca de 20 dias por mês, com alívio temporário e retorno da dor. Qual mecanismo explica melhor a manutenção do quadro?",
    "options": [
      "(A) Hipertensão intracraniana por retenção de sódio",
      "(B) Cefaleia por uso excessivo de medicamentos",
      "(C) Transformação em cefaleia em salvas",
      "(D) Neuralgia do trigêmeo secundária",
      "(E) Vasculite cerebral induzida por analgésicos"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia por uso excessivo de medicamentos pode se desenvolver em pessoas com cefaleia primária preexistente, quando o uso frequente de medicação aguda passa a contribuir para a manutenção da dor. O diagnóstico exige cefaleia em pelo menos 15 dias/mês e uso excessivo regular por mais de três meses; os limiares variam por classe: em geral, 15 dias/mês para analgésicos simples e 10 dias/mês para triptanos, opioides ou combinações. A abordagem envolve explicar o ciclo, planejar redução/retirada do fármaco, tratar a cefaleia de base e oferecer prevenção quando indicada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia por uso excessivo de medicamentos"
    ],
    "tip": "Quando a dor fica mais frequente e o paciente usa analgésicos quase diariamente, considere que o próprio tratamento pode perpetuar a cefaleia. Avalie retirada orientada e prevenção da doença de base.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-11",
    "module": "Clínica Médica",
    "text": "Mulher, 29 anos, com obesidade, apresenta cefaleia diária, escurecimentos visuais transitórios e zumbido pulsátil. Há papiledema bilateral. Ressonância não mostra massa ou hidrocefalia e venografia não demonstra trombose venosa. Qual achado é fundamental para confirmar a hipótese?",
    "options": [
      "(A) Pressão de abertura do líquor elevada, com composição liquórica normal",
      "(B) Hipoglicorraquia e pleocitose neutrofílica",
      "(C) Hemácias no líquor",
      "(D) Hipertensão arterial persistente",
      "(E) Pressão de abertura do líquor reduzida"
    ],
    "correctAnswer": 0,
    "explanation": "A hipertensão intracraniana idiopática (HII) deve ser considerada diante de papiledema, cefaleia, obscurecimentos visuais transitórios e zumbido pulsátil. O diagnóstico é de exclusão: é necessário afastar lesão expansiva, hidrocefalia e trombose venosa cerebral com neuroimagem apropriada, incluindo venografia. Após excluir contraindicações à punção, mede-se a pressão de abertura com o paciente em decúbito lateral, relaxado e com técnica adequada; em adultos, valor acima de 25 cmH₂O, associado a composição liquórica normal e ao contexto clínico, apoia o diagnóstico. Obesidade é fator associado, mas não basta para diagnosticar. Perda ponderal, acetazolamida em pacientes selecionados e acompanhamento oftalmológico com avaliação de campos visuais são centrais para preservar a visão.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hipertensão intracraniana idiopática"
    ],
    "tip": "Mulher jovem com obesidade, papiledema e zumbido pulsátil: pense em hipertensão intracraniana idiopática. Exclua massa e trombose venosa antes da punção lombar.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-12",
    "module": "Clínica Médica",
    "text": "Homem, 22 anos, apresenta cefaleia intensa, febre de 39 °C, vômitos, fotofobia e rigidez de nuca. Está consciente, porém prostrado. Qual conduta inicial é mais adequada diante da suspeita de meningite bacteriana?",
    "options": [
      "(A) Aguardar cultura do líquor antes de antibióticos",
      "(B) Tomografia obrigatória antes de qualquer tratamento",
      "(C) Coletar hemoculturas, realizar punção lombar se segura e iniciar antibioticoterapia empírica imediatamente, sem atrasos",
      "(D) Analgesia e observação por 24 horas",
      "(E) Corticoide oral isolado"
    ],
    "correctAnswer": 2,
    "explanation": "Febre, cefaleia, rigidez de nuca e fotofobia exigem suspeita de meningite e tratamento tempo-dependente. O Ministério da Saúde considera a meningite uma emergência médica e orienta que o tratamento não seja atrasado para aguardar exames de identificação etiológica. Colhem-se hemoculturas rapidamente e realiza-se punção lombar quando segura e sem atraso relevante. Neuroimagem antes da punção não é rotina para todos: é considerada quando há sinais que levantem risco de lesão expansiva/hipertensão intracraniana, como déficit focal, papiledema, rebaixamento importante da consciência, convulsão recente ou imunossupressão, conforme avaliação clínica e protocolo. Se a punção ou a imagem atrasarem, iniciar antibioticoterapia empírica após hemoculturas, sem esperar. A OMS publicou diretriz abrangente para diagnóstico e manejo da meningite em 2025; o esquema antimicrobiano deve seguir idade, fatores de risco, epidemiologia e protocolo local.",
    "reference": "Ministério da Saúde — Meningite: diagnóstico e tratamento; OMS. WHO guidelines on meningitis diagnosis, treatment and care (2025)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia e meningite"
    ],
    "tip": "Não atrase antibiótico para aguardar exames. Avalie se a punção é segura, colha culturas quando possível e trate rapidamente.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-13",
    "module": "Clínica Médica",
    "text": "Mulher, 32 anos, no sexto dia após cesariana, apresenta cefaleia intensa e progressiva, náuseas e visão borrada, sem história prévia semelhante. Qual condição secundária deve ser especialmente considerada?",
    "options": [
      "(A) Cefaleia tensional episódica",
      "(B) Trombose venosa cerebral",
      "(C) Cefaleia em salvas",
      "(D) Neuralgia do trigêmeo",
      "(E) Migrânea sem aura obrigatoriamente"
    ],
    "correctAnswer": 1,
    "explanation": "O puerpério aumenta o risco de trombose venosa cerebral, que pode se manifestar com cefaleia progressiva, papiledema, convulsões, déficits focais ou alteração de consciência. Tomografia sem contraste normal não exclui o diagnóstico; é necessário estudo venoso por angiotomografia venosa ou venografia por ressonância. O diferencial no puerpério inclui pré-eclâmpsia/eclâmpsia, síndrome de vasoconstrição cerebral reversível, cefaleia pós-punção dural e causas primárias. Uma cefaleia nova, intensa ou atípica nesse contexto deve ser investigada, não presumida como migrânea.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia no puerpério"
    ],
    "tip": "Gestante ou puérpera com cefaleia nova não deve receber automaticamente diagnóstico de migrânea. Investigue causas vasculares e hipertensivas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-14",
    "module": "Clínica Médica",
    "text": "Mulher, 26 anos, submetida à raquianestesia durante cesariana, apresenta cefaleia iniciada 24 horas após o procedimento. A dor piora ao sentar ou ficar em pé e melhora ao deitar. Qual mecanismo é mais provável?",
    "options": [
      "(A) Aumento da produção de líquor",
      "(B) Vasoconstrição das artérias cerebrais",
      "(C) Perda de líquor pelo local da punção dural, com redução da pressão liquórica",
      "(D) Trombose arterial cerebral",
      "(E) Inflamação infecciosa das meninges"
    ],
    "correctAnswer": 2,
    "explanation": "A cefaleia pós-punção dural decorre de vazamento de líquor por defeito na dura-máter, com redução do volume/pressão liquórica e tração de estruturas intracranianas sensíveis à dor. O padrão ortostático — piora em pé e melhora ao deitar — é característico; pode haver dor cervical, náuseas, zumbido e sintomas auditivos. Medidas conservadoras e analgesia podem ser tentadas em casos leves; cafeína pode aliviar temporariamente em pacientes selecionados. Dor persistente ou incapacitante pode exigir tampão sanguíneo epidural, após avaliação anestésica. Se o padrão mudar ou surgirem déficits, reavaliar diagnósticos alternativos.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia pós-punção dural"
    ],
    "tip": "Cefaleia postural após raquianestesia ou punção lombar sugere cefaleia pós-punção dural. A característica postural é a pista central.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-15",
    "module": "Clínica Médica",
    "text": "Mulher, 38 anos, apresenta cefaleia em 18 dias por mês há seis meses. Em pelo menos 10 dias, a dor tem características de migrânea, com náuseas e fotofobia. Nos demais dias, é mais leve e bilateral. Qual classificação é mais adequada?",
    "options": [
      "(A) Migrânea episódica",
      "(B) Cefaleia tensional episódica",
      "(C) Migrânea crônica",
      "(D) Cefaleia em salvas crônica",
      "(E) Neuralgia occipital"
    ],
    "correctAnswer": 2,
    "explanation": "Migrânea crônica é definida por cefaleia em pelo menos 15 dias/mês por mais de três meses, em pessoa com história de migrânea, sendo pelo menos oito dias/mês com características migranosas, aura ou resposta a medicamento específico, conforme critérios ICHD-3. Nem todos os dias precisam ser pulsáteis ou acompanhados de náuseas: pode haver dias com fenótipo semelhante à cefaleia tensional. Deve-se investigar cefaleia por uso excessivo, que pode coexistir e agravar o quadro. Diário de cefaleia ajuda a quantificar dias, sintomas e uso de medicação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea crônica"
    ],
    "tip": "Memorize: pelo menos 15 dias de cefaleia por mês e pelo menos 8 dias com características de migrânea, por mais de três meses.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-16",
    "module": "Clínica Médica",
    "text": "Homem, 61 anos, apresenta dor facial unilateral em choque elétrico, na região maxilar direita. As crises duram segundos e são desencadeadas ao escovar os dentes, falar ou tocar a face. Qual diagnóstico é mais provável?",
    "options": [
      "(A) Cefaleia em salvas",
      "(B) Neuralgia do trigêmeo",
      "(C) Migrânea com aura",
      "(D) Cefaleia tensional",
      "(E) Sinusite maxilar crônica"
    ],
    "correctAnswer": 1,
    "explanation": "Neuralgia do trigêmeo causa paroxismos unilaterais de dor facial em choque elétrico, pontada ou facada, geralmente com duração de frações de segundo até dois minutos, precipitados por estímulos inócuos em zonas-gatilho. Entre as crises, o paciente pode ficar assintomático. Carbamazepina ou oxcarbazepina são opções de primeira linha, com atenção a interações, hiponatremia, alterações hematológicas e hepáticas. Déficit sensitivo persistente, idade jovem ou outros sinais neurológicos são atípicos e exigem investigação de causa secundária, frequentemente com ressonância.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "neuralgia do trigêmeo"
    ],
    "tip": "Dor breve em choque, unilateral e desencadeada por toque na face aponta para neuralgia do trigêmeo. Salvas dura mais e tem sintomas autonômicos.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-17",
    "module": "Clínica Médica",
    "text": "Homem, 46 anos, previamente assintomático, apresenta cefaleia durante atividade física vigorosa. A dor começa subitamente e atinge intensidade máxima em 30 segundos. Qual conduta é mais adequada?",
    "options": [
      "(A) Diagnosticar cefaleia primária do esforço e liberar",
      "(B) Propranolol e retorno em 30 dias",
      "(C) Investigar causas secundárias, especialmente hemorragia subaracnóidea e doenças vasculares",
      "(D) Sumatriptana sem investigação",
      "(E) Radiografia de crânio isolada"
    ],
    "correctAnswer": 2,
    "explanation": "Cefaleia precipitada por esforço, tosse, atividade sexual ou manobra de Valsalva pode ser primária, mas a primeira apresentação — sobretudo com intensidade máxima em menos de um minuto — exige excluir causas secundárias. O protocolo do Ministério da Saúde para encaminhamento da APS inclui dor desencadeada por esforço, tosse ou Valsalva entre as situações que indicam investigação por neuroimagem, mesmo quando não há critérios de emergência imediata. Se o início for explosivo ou houver sinais neurológicos/sistêmicos, a avaliação é emergencial. Entre as hipóteses estão hemorragia subaracnóidea, síndrome de vasoconstrição cerebral reversível, dissecção arterial, trombose venosa cerebral e lesões da fossa posterior. Só se classifica como cefaleia primária do esforço após avaliação adequada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia desencadeada por esforço"
    ],
    "tip": "Cefaleia durante esforço não significa necessariamente forma primária. Se explosiva, exclua primeiro causas vasculares potencialmente graves.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-18",
    "module": "Clínica Médica",
    "text": "Mulher, 54 anos, apresenta cefaleia progressiva há dois meses, com piora recente, mais intensa pela manhã e episódios de vômitos. Nunca teve cefaleia semelhante. Qual característica representa o principal sinal de alerta?",
    "options": [
      "(A) Dor bilateral",
      "(B) Idade acima de 50 anos associada a cefaleia nova e progressiva",
      "(C) Ausência de fotofobia",
      "(D) Intensidade moderada",
      "(E) Melhora parcial após analgésicos"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia nova após os 50 anos, especialmente progressiva e acompanhada de vômitos, exige investigação de causas secundárias. O protocolo do Ministério da Saúde destaca padrão novo ou mudança recente, início após 50 anos, evolução progressiva, dor que desperta do sono e dor desencadeada por esforço/tosse/Valsalva como motivos para considerar neuroimagem e avaliação especializada. Para encaminhamento urgente, o protocolo brasileiro lista, entre outros, início súbito intenso, trauma recente, febre/rigidez de nuca/confusão, neoplasia ou HIV com padrão novo, anticoagulação/discrasia sanguínea, papiledema e déficit focal. A idade isolada não define diagnóstico; é o conjunto clínico e a presença de sinais de alerta que orientam a urgência.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "sinais de alarme em cefaleia"
    ],
    "tip": "Pergunte se a dor é igual às anteriores ou se é nova. Padrão novo, progressivo ou acompanhado de sinais neurológicos exige investigação.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-19",
    "module": "Clínica Médica",
    "text": "Homem, 58 anos, hipertenso, apresenta cefaleia leve e inespecífica. PA 178/104 mmHg. Está consciente, sem déficit neurológico, dor torácica, dispneia ou sinais de lesão aguda de órgão-alvo. Qual interpretação é mais adequada?",
    "options": [
      "(A) Toda cefaleia com pressão elevada caracteriza emergência hipertensiva",
      "(B) O quadro estabelece encefalopatia hipertensiva",
      "(C) Elevação pressórica isolada não comprova causalidade nem caracteriza, por si só, emergência hipertensiva",
      "(D) É obrigatório anti-hipertensivo intravenoso imediato",
      "(E) Cefaleia isolada exige UTI"
    ],
    "correctAnswer": 2,
    "explanation": "Pressão arterial elevada pode acompanhar dor e ansiedade, mas cefaleia isolada não estabelece emergência hipertensiva nem prova que a pressão seja a causa da dor. Emergência hipertensiva requer lesão aguda de órgão-alvo, como encefalopatia, edema pulmonar, síndrome coronariana, dissecção aórtica ou lesão renal aguda. A conduta é confirmar medidas, avaliar sintomas e sinais de lesão aguda e tratar conforme o contexto; redução intravenosa rápida sem indicação pode causar dano. Cefaleia intensa com alteração neurológica ou visual exige investigação própria.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia e hipertensão arterial"
    ],
    "tip": "A pergunta decisiva não é apenas o valor da pressão, mas se existe lesão aguda de órgão-alvo.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-20",
    "module": "Clínica Médica",
    "text": "Mulher, 25 anos, apresenta episódios recorrentes de cefaleia pulsátil unilateral, náuseas e fotofobia, com padrão estável há quatro anos. Exame neurológico normal e ausência de sinais de alarme. Qual conduta é adequada quanto à neuroimagem?",
    "options": [
      "(A) Tomografia em todos os episódios",
      "(B) Ressonância obrigatória para confirmar migrânea",
      "(C) Não solicitar neuroimagem de rotina em quadro típico, estável e com exame neurológico normal",
      "(D) Angiorressonância para excluir aneurisma em todos",
      "(E) Punção lombar para confirmar diagnóstico"
    ],
    "correctAnswer": 2,
    "explanation": "Migrânea típica, estável, com exame neurológico normal e ausência de sinais de alarme é diagnóstico clínico; neuroimagem de rotina não é necessária apenas para confirmar o diagnóstico. Isso não significa que exames nunca sejam indicados: o protocolo do Ministério da Saúde recomenda considerar TC ou RM diante de cefaleia com padrão novo/mudança recente, início após 50 anos, evolução insidiosa e progressiva, dor que acorda o paciente ou desencadeada por esforço/tosse/Valsalva. Sinais como início explosivo, febre com rigidez de nuca, papiledema, déficit focal, trauma recente ou alteração de consciência exigem avaliação urgente. A modalidade depende da hipótese e da disponibilidade: TC é frequentemente a primeira escolha na emergência hemorrágica; RM e estudos angiográficos/venográficos são úteis em outras suspeitas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "neuroimagem na migrânea típica"
    ],
    "tip": "Nem toda cefaleia precisa de tomografia ou ressonância. Solicite neuroimagem quando houver uma pergunta clínica que justifique o exame.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-21",
    "module": "Clínica Médica",
    "text": "Mulher, 29 anos, relata cinco crises semelhantes nos últimos oito meses. Cada episódio dura cerca de 12 horas, com dor unilateral, pulsátil, moderada a forte, piora ao subir escadas e associação com náuseas. O exame neurológico é normal. Qual elemento adicional é compatível com os critérios clínicos de migrânea sem aura?",
    "options": [
      "(A) Dor exclusivamente em pontada, com duração de 5 segundos",
      "(B) Presença obrigatória de aura visual antes de todas as crises",
      "(C) Fotofobia e fonofobia, ou náuseas/vômitos, durante as crises",
      "(D) Dor sempre bilateral e sem piora com atividade",
      "(E) Febre e rigidez de nuca durante os episódios"
    ],
    "correctAnswer": 2,
    "explanation": "Os critérios ICHD-3 para migrânea sem aura combinam frequência e duração das crises, características da dor e sintomas associados. Em geral, exigem pelo menos cinco crises de 4–72 horas, duas ou mais características entre unilateralidade, caráter pulsátil, intensidade moderada/grave e agravamento por atividade física, além de náusea/vômito ou fotofobia e fonofobia. O diagnóstico não depende de aura. Uma descrição estruturada evita confundir migrânea com cefaleia tensional ou neuralgias; sinais de alarme sempre prevalecem sobre a classificação de cefaleia primária.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "critérios diagnósticos de migrânea sem aura"
    ],
    "tip": "Em prova, organize o diagnóstico em três blocos: número/duração das crises, características da dor e sintomas associados. Aura não é requisito para migrânea.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-22",
    "module": "Clínica Médica",
    "text": "Mulher, 33 anos, apresenta crises de migrânea que começam de dois dias antes até o terceiro dia após o início da menstruação, em pelo menos dois de cada três ciclos. Também apresenta crises em outros períodos do mês. Qual classificação é mais adequada?",
    "options": [
      "(A) Migrânea menstrual pura",
      "(B) Migrânea relacionada à menstruação",
      "(C) Cefaleia tensional crônica",
      "(D) Cefaleia em salvas episódica",
      "(E) Cefaleia por uso excessivo de medicamentos, obrigatoriamente"
    ],
    "correctAnswer": 1,
    "explanation": "Migrânea menstrual pura ocorre quando as crises se restringem à janela perimenstrual; migrânea relacionada à menstruação ocorre nessa janela, mas também em outros momentos do ciclo. A janela diagnóstica usual vai de dois dias antes a três dias após o início do sangramento, em pelo menos dois de três ciclos. Diário prospectivo de cefaleia e menstruação melhora a precisão. A estratégia terapêutica pode incluir tratamento agudo otimizado e, em casos selecionados, prevenção perimenstrual breve, considerando contraindicações e risco de uso excessivo.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea menstrual"
    ],
    "tip": "Se há crises perimenstruais e também fora desse período, pense em migrânea relacionada à menstruação, não na forma pura. O diário ajuda a confirmar o padrão.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-23",
    "module": "Clínica Médica",
    "text": "Mulher, 37 anos, com migrânea conhecida, apresenta crise contínua e incapacitante há 80 horas, semelhante às crises habituais, mas mais prolongada. Não há febre, déficit focal ou sinais de alarme. Qual conceito melhor descreve o quadro?",
    "options": [
      "(A) Aura típica",
      "(B) Estado migranoso",
      "(C) Cefaleia em salvas crônica",
      "(D) Neuralgia do trigêmeo",
      "(E) Cefaleia pós-punção dural"
    ],
    "correctAnswer": 1,
    "explanation": "Estado migranoso é uma crise debilitante e contínua por mais de 72 horas, em pessoa com migrânea, frequentemente com náuseas, vômitos e incapacidade funcional. Antes de atribuir a persistência à migrânea, reavalie sinais de alarme, uso excessivo de medicamentos, desidratação e causas secundárias, sobretudo se o padrão for diferente do habitual. O manejo pode exigir hidratação quando indicada, antieméticos e terapias parenterais específicas, conforme protocolo e comorbidades. Opioides não são estratégia de rotina, pois podem perpetuar o problema.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "estado migranoso"
    ],
    "tip": "Crise de migrânea contínua por mais de 72 horas sugere estado migranoso. A duração prolongada não dispensa reavaliar sinais de alarme e diagnósticos alternativos.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-24",
    "module": "Clínica Médica",
    "text": "Mulher, 24 anos, apresenta episódios reversíveis de parestesia que se dissemina pela mão e face, seguida de fraqueza unilateral e cefaleia pulsátil. Os sintomas evoluem gradualmente e desaparecem completamente. Qual é a principal conduta diagnóstica?",
    "options": [
      "(A) Assumir migrânea hemiplégica sem excluir outras causas",
      "(B) Considerar migrânea com aura motora, mas realizar avaliação urgente para excluir AVC e outras causas secundárias, sobretudo em primeiro episódio",
      "(C) Tratar como cefaleia tensional",
      "(D) Diagnosticar epilepsia sem investigação",
      "(E) Indicar anticoagulação empírica"
    ],
    "correctAnswer": 1,
    "explanation": "Fraqueza motora reversível pode ocorrer na migrânea hemiplégica, mas um primeiro episódio de déficit motor deve ser tratado como possível AVC até investigação adequada. A evolução gradual, sintomas positivos que se disseminam e resolução completa favorecem aura, mas não são suficientes para excluir isquemia. Avalie tempo de início, fatores vasculares, exame neurológico e neuroimagem conforme protocolo de AVC. Persistência do déficit, início súbito ou apresentação atípica reforçam a necessidade de investigação urgente.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "aura com sintomas motores"
    ],
    "tip": "Aura motora pode imitar AVC. Em primeiro episódio, déficit persistente ou apresentação atípica, priorize protocolo de avaliação vascular; não atribua automaticamente à migrânea.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-25",
    "module": "Clínica Médica",
    "text": "Homem, 28 anos, apresenta episódios reversíveis de vertigem, disartria, zumbido e diplopia, seguidos de cefaleia migranosa. Não há fraqueza motora durante os episódios. Qual diagnóstico deve ser considerado após excluir causas vasculares?",
    "options": [
      "(A) Migrânea com aura de tronco encefálico",
      "(B) Cefaleia tensional",
      "(C) Cefaleia em salvas",
      "(D) Neuralgia do trigêmeo",
      "(E) Hipertensão intracraniana idiopática"
    ],
    "correctAnswer": 0,
    "explanation": "Migrânea com aura de tronco encefálico envolve pelo menos dois sintomas reversíveis de tronco encefálico — por exemplo, disartria, vertigem, zumbido, hipoacusia, diplopia, ataxia ou redução do nível de consciência — sem sintomas motores ou retinianos. É diagnóstico clínico após excluir isquemia da circulação posterior, epilepsia e outras causas. Vertigem isolada não basta para estabelecer o diagnóstico. A primeira apresentação, especialmente em pessoa com fatores de risco vascular, exige investigação cuidadosa.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "aura de tronco encefálico"
    ],
    "tip": "Vertigem isolada é inespecífica. A combinação de sintomas reversíveis de tronco encefálico, seguida de cefaleia migranosa, pode apontar para essa entidade, mas exige excluir isquemia posterior.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-26",
    "module": "Clínica Médica",
    "text": "Homem, 59 anos, com migrânea, apresenta doença arterial coronariana documentada e angina prévia. Procura tratamento para crise moderada a grave. Qual afirmação sobre triptanos é correta?",
    "options": [
      "(A) São preferidos por promoverem vasodilatação coronariana",
      "(B) Podem ser usados livremente se associados a AINE",
      "(C) Devem ser evitados em doença arterial coronariana por seus efeitos vasoconstritores",
      "(D) São obrigatórios em toda crise grave",
      "(E) Não possuem contraindicações cardiovasculares"
    ],
    "correctAnswer": 2,
    "explanation": "Triptanos ativam receptores 5‑HT1B/1D e podem produzir vasoconstrição; por isso, são contraindicados em doença coronariana, doença vascular periférica, AVC/AIT prévio e hipertensão não controlada, entre outras condições. Em paciente com doença arterial coronariana, a intensidade da crise não justifica ignorar o risco. Deve-se escolher alternativa não vasoconstritora adequada ao contexto e considerar tratamento antiemético e analgésico individualizado. Sempre revisar comorbidades e medicamentos antes de prescrever.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "contraindicação a triptanos"
    ],
    "tip": "Antes de prescrever triptano, procure doença vascular e hipertensão não controlada. Uma crise intensa não elimina contraindicações.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-27",
    "module": "Clínica Médica",
    "text": "Gestante de 10 semanas, com história de migrânea, apresenta crise semelhante às anteriores, sem sinais de alarme. Qual abordagem farmacológica costuma ser considerada inicialmente, após avaliação individual?",
    "options": [
      "(A) Ergotamina como primeira escolha",
      "(B) Paracetamol, na menor dose eficaz e pelo menor tempo necessário",
      "(C) Valproato para abortar a crise",
      "(D) Topiramato em dose de ataque",
      "(E) Uso irrestrito de anti-inflamatório em qualquer trimestre"
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, a abordagem deve ponderar benefício materno e risco fetal e, antes de atribuir a dor à migrânea, excluir causas obstétricas e vasculares quando houver cefaleia nova, intensa, hipertensão, sintomas visuais, déficit focal ou convulsão. Paracetamol costuma ser opção inicial para crise, na menor dose eficaz e pelo menor tempo necessário, após avaliação individual. AINEs têm restrições por idade gestacional — devem ser evitados a partir de 20 semanas salvo indicação excepcional e são contraindicados no terceiro trimestre, conforme orientação regulatória e clínica. Ergotamínicos e valproato devem ser evitados. Não há PCDT específico do SUS para migrânea na gestação identificado na listagem oficial consultada; por isso, essa questão utiliza recomendações de segurança farmacológica complementares.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea e gravidez"
    ],
    "tip": "Gestação muda o balanço risco-benefício. Evite ergotamínicos e valproato; não extrapole recomendações de AINEs entre os trimestres.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-28",
    "module": "Clínica Médica",
    "text": "Mulher, 30 anos, com migrânea frequente, apresenta obesidade e história de nefrolitíase recorrente. Está sendo considerada profilaxia farmacológica. Qual medicamento exige cautela especial por poder favorecer cálculos renais?",
    "options": [
      "(A) Topiramato",
      "(B) Propranolol",
      "(C) Amitriptilina",
      "(D) Candesartana",
      "(E) Anticorpo monoclonal anti-CGRP"
    ],
    "correctAnswer": 0,
    "explanation": "Topiramato pode ser eficaz na prevenção da migrânea, mas aumenta risco de nefrolitíase por alterações na composição urinária e pode causar parestesias, lentificação cognitiva, perda de peso e acidose metabólica. História de cálculos renais recorrentes torna a escolha menos atraente e exige ponderar alternativas. A seleção preventiva deve considerar comorbidades, efeitos adversos, potencial reprodutivo, preferências e acesso. Não existe profilático universalmente melhor para todos os pacientes.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "profilaxia e comorbidades"
    ],
    "tip": "Não escolha profilaxia apenas pela eficácia média. Associe o medicamento ao perfil do paciente: topiramato pode ser desfavorável em quem tem história de cálculos renais.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-29",
    "module": "Clínica Médica",
    "text": "Mulher de 26 anos com migrânea frequente deseja iniciar topiramato preventivo. Não utiliza contracepção e planeja engravidar nos próximos meses. Qual consideração é mais importante?",
    "options": [
      "(A) Topiramato é isento de risco fetal",
      "(B) Topiramato deve ser discutido com cautela devido ao risco fetal, incluindo malformações, e deve-se planejar alternativa apropriada",
      "(C) Topiramato é indicado para prevenção durante toda a gestação",
      "(D) A dose baixa elimina qualquer risco fetal",
      "(E) Apenas a função hepática precisa ser monitorada"
    ],
    "correctAnswer": 1,
    "explanation": "Topiramato está associado a risco fetal, incluindo malformações congênitas e possíveis efeitos sobre crescimento e neurodesenvolvimento. Em pessoa com potencial reprodutivo que planeja gestação, é essencial discutir risco, contracepção eficaz e alternativa preventiva antes de iniciar; se já estiver em uso, a mudança deve ser planejada com o médico, sem interrupção abrupta ou autônoma. A prevenção da migrânea precisa ser individualizada e reavaliada diante de planos gestacionais.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "profilaxia com topiramato e gestação potencial"
    ],
    "tip": "Em paciente que pode engravidar, pergunte sobre planos reprodutivos antes de escolher profilaxia. A eficácia não compensa ignorar teratogenicidade.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-30",
    "module": "Clínica Médica",
    "text": "Homem, 40 anos, apresenta crises diárias de cefaleia orbitária unilateral por seis semanas, seguidas de remissão completa por oito meses. O padrão se repetiu em dois anos consecutivos. Como classificar mais provavelmente?",
    "options": [
      "(A) Cefaleia em salvas episódica",
      "(B) Cefaleia em salvas crônica",
      "(C) Migrânea crônica",
      "(D) Hemicrania contínua",
      "(E) Cefaleia tensional episódica"
    ],
    "correctAnswer": 0,
    "explanation": "Na classificação ICHD-3, a cefaleia em salvas episódica apresenta períodos de salvas com duração de 7 dias a 1 ano, separados por remissões sem dor de pelo menos 3 meses. Na forma crônica, as crises ocorrem por 1 ano ou mais sem remissão ou com remissões inferiores a 3 meses. A distinção depende do padrão longitudinal, não apenas da intensidade ou da frequência diária. Diário de crises e períodos de remissão ajuda a classificar e planejar a prevenção. O protocolo nacional brasileiro de urgência descreve surtos e períodos de remissão, mas os limites formais de classificação devem seguir a ICHD-3.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em salvas: padrão episódico"
    ],
    "tip": "Na classificação das salvas, observe a duração dos períodos ativos e, principalmente, o intervalo livre de dor. Remissão de oito meses favorece forma episódica.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-31",
    "module": "Clínica Médica",
    "text": "Homem, 43 anos, inicia verapamil para prevenção de cefaleia em salvas. Qual cuidado é particularmente importante durante a titulação?",
    "options": [
      "(A) Monitorização eletrocardiográfica devido ao risco de bradicardia e bloqueio atrioventricular",
      "(B) Dosagem diária de amilase",
      "(C) Tomografia semanal",
      "(D) Suspender toda atividade física",
      "(E) Monitorização de INR em todos os pacientes"
    ],
    "correctAnswer": 0,
    "explanation": "Verapamil é uma das principais opções preventivas para cefaleia em salvas, mas pode prolongar a condução atrioventricular, causar bradicardia e bloqueios. Deve-se obter ECG basal e repetir a monitorização durante a titulação, sobretudo em doses elevadas ou diante de sintomas. A dose é individualizada por especialista e protocolo; não se deve aumentar rapidamente sem controle. Oxigênio e sumatriptana são opções abortivas e não substituem a prevenção.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em salvas: prevenção e ecg"
    ],
    "tip": "Verapamil para salvas não é simplesmente prescrever e esquecer: lembre do ECG basal e da vigilância durante titulação.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-32",
    "module": "Clínica Médica",
    "text": "Paciente com cefaleia em salvas episódica apresenta crises diárias e inicia verapamil, cuja titulação pode demorar a atingir dose eficaz. Qual estratégia pode ser usada como tratamento de transição em casos selecionados?",
    "options": [
      "(A) Corticosteroide sistêmico por curto período ou bloqueio do nervo occipital maior",
      "(B) Opioide contínuo por meses",
      "(C) Antibiótico profilático",
      "(D) Anticoagulação plena",
      "(E) Apenas paracetamol diário"
    ],
    "correctAnswer": 0,
    "explanation": "O tratamento de transição reduz as crises enquanto o preventivo principal, como verapamil, ainda está sendo titulado. Corticosteroide sistêmico por curto período ou bloqueio do nervo occipital maior podem ser considerados em pacientes selecionados, avaliando contraindicações e efeitos adversos. Não são substitutos do tratamento preventivo de manutenção e não devem ser prolongados indiscriminadamente. Opioides e analgésicos comuns não são estratégias adequadas para abortar salvas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento de transição na cefaleia em salvas"
    ],
    "tip": "Na salvas, diferencie abortivo, transição e prevenção: oxigênio/triptano abortam; corticoide ou bloqueio podem fazer ponte; verapamil previne.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-33",
    "module": "Clínica Médica",
    "text": "Mulher, 35 anos, apresenta crises muito intensas de dor orbitária unilateral, com lacrimejamento e congestão nasal. Cada episódio dura cerca de 15 minutos e ocorre 15 vezes ao dia. Qual diagnóstico deve ser considerado?",
    "options": [
      "(A) Hemicrania paroxística",
      "(B) Migrânea sem aura",
      "(C) Cefaleia tensional",
      "(D) Neuralgia occipital",
      "(E) Cefaleia pós-traumática"
    ],
    "correctAnswer": 0,
    "explanation": "Hemicrania paroxística é uma cefaleia trigêmino-autonômica com crises unilaterais orbitárias ou temporais de 2–30 minutos, geralmente mais de cinco por dia, associadas a sintomas autonômicos ipsilaterais ou inquietação. A resposta absoluta à indometacina é característica e faz parte do diagnóstico. Antes e durante o uso, é necessário considerar risco gastrointestinal, renal e cardiovascular, podendo ser necessária proteção gástrica. A frequência alta e a curta duração ajudam a distingui-la da cefaleia em salvas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hemicrania paroxística"
    ],
    "tip": "Crises autonômicas muito frequentes e curtas, com resposta absoluta à indometacina, apontam para hemicrania paroxística.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-34",
    "module": "Clínica Médica",
    "text": "Homem, 44 anos, apresenta dor estritamente unilateral contínua há cinco meses, com exacerbações intensas e lacrimejamento ipsilateral. Refere resposta completa e sustentada à indometacina. Qual diagnóstico é mais provável?",
    "options": [
      "(A) Hemicrania contínua",
      "(B) Cefaleia em salvas episódica",
      "(C) Migrânea com aura",
      "(D) Cefaleia tensional crônica",
      "(E) Neuralgia do trigêmeo"
    ],
    "correctAnswer": 0,
    "explanation": "Hemicrania contínua caracteriza-se por dor estritamente unilateral e contínua por mais de três meses, com exacerbações de intensidade variável e possíveis sintomas autonômicos ipsilaterais. A resposta completa à indometacina é elemento diagnóstico central; resposta apenas parcial exige reconsiderar o diagnóstico. O uso de indometacina demanda atenção a toxicidade gastrointestinal, renal e cardiovascular. Diferentemente da salvas, a dor basal permanece presente entre as exacerbações.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hemicrania contínua"
    ],
    "tip": "Dor sempre do mesmo lado, contínua, com exacerbações e resposta completa à indometacina sugere hemicrania contínua.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-35",
    "module": "Clínica Médica",
    "text": "Homem, 52 anos, apresenta ataques de dor orbitária unilateral em pontadas, com duração de 20 a 40 segundos, várias dezenas de vezes ao dia. Durante as crises há hiperemia conjuntival e lacrimejamento ipsilateral. Qual síndrome é mais compatível?",
    "options": [
      "(A) SUNCT",
      "(B) Cefaleia tensional",
      "(C) Migrânea menstrual",
      "(D) Hemicrania contínua",
      "(E) Cefaleia pós-punção dural"
    ],
    "correctAnswer": 0,
    "explanation": "SUNCT apresenta ataques muito breves e frequentes de dor unilateral, com hiperemia conjuntival e lacrimejamento ipsilaterais; SUNA apresenta sintomas autonômicos cranianos, mas não necessariamente ambos os sinais oculares simultaneamente. A duração de segundos e a frequência elevada diferenciam essas síndromes da salvas, cujas crises são mais longas. É importante avaliar causas estruturais em apresentações atípicas e individualizar o tratamento preventivo, frequentemente especializado.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "sunct/suna"
    ],
    "tip": "Ataques de segundos, muito frequentes, com olho vermelho e lacrimejamento são pistas para SUNCT. Compare duração e frequência com salvas e hemicranias.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-36",
    "module": "Clínica Médica",
    "text": "Mulher, 32 anos, refere pressão frontal e dor facial durante resfriado, com obstrução nasal e secreção purulenta. A dor varia paralelamente à congestão e melhora conforme os sintomas nasais resolvem. Qual interpretação é mais adequada?",
    "options": [
      "(A) Toda dor frontal é sinusite bacteriana",
      "(B) A associação temporal com sinais de rinossinusite pode sustentar cefaleia atribuída à rinossinusite, mas exige critérios clínicos e avaliação da evolução",
      "(C) Migrânea está excluída pela localização frontal",
      "(D) A presença de secreção nasal prova complicação intracraniana",
      "(E) É indicação automática de tomografia"
    ],
    "correctAnswer": 1,
    "explanation": "Atribuir cefaleia à rinossinusite exige evidência de doença sinonasal e relação causal temporal: a dor começa ou piora com a rinossinusite e melhora paralelamente à resolução, entre outros critérios. Dor frontal ou pressão facial isolada não confirma sinusite bacteriana. Migrânea pode causar pressão facial, congestão nasal e lacrimejamento, sendo frequentemente confundida com 'cefaleia sinusal'. Antibiótico ou tomografia não são automáticos; a decisão depende de critérios clínicos de rinossinusite e sinais de complicação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia atribuída à sinusite"
    ],
    "tip": "Não diagnostique sinusite apenas pela localização da dor. Procure sintomas nasais e relação temporal; migrânea frequentemente é rotulada incorretamente como sinusite.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-37",
    "module": "Clínica Médica",
    "text": "Mulher, 42 anos, apresenta cefaleia ortostática diária há três semanas, sem punção lombar ou procedimento recente. A dor piora após permanecer em pé e melhora ao deitar, acompanhada de dor cervical e zumbido. Qual hipótese deve ser considerada?",
    "options": [
      "(A) Hipotensão intracraniana espontânea por fuga liquórica",
      "(B) Cefaleia em salvas",
      "(C) Arterite de células gigantes",
      "(D) Neuralgia do trigêmeo",
      "(E) Cefaleia tensional episódica"
    ],
    "correctAnswer": 0,
    "explanation": "A hipotensão intracraniana espontânea pode decorrer de fuga espontânea de líquor, mesmo sem punção ou procedimento prévio. A cefaleia costuma ser ortostática — piora após ficar em pé e melhora ao deitar — e pode acompanhar dor cervical, náuseas, zumbido e sintomas auditivos. A investigação geralmente inclui ressonância de encéfalo com contraste e avaliação da coluna para localizar a fuga; a pressão de abertura pode não estar reduzida em todos os casos, portanto um valor isolado normal não exclui a hipótese. Cefaleia ortostática persistente merece avaliação especializada e não deve ser rotulada como pós-punção sem antecedente de punção.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia por hipotensão liquórica espontânea"
    ],
    "tip": "Cefaleia ortostática sem punção prévia não é automaticamente pós-punção. Considere fuga espontânea de líquor e investigue quando o padrão for persistente.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-38",
    "module": "Clínica Médica",
    "text": "Puérpera, 29 anos, apresenta cefaleia progressiva, convulsão e papiledema. Tomografia sem contraste não mostra alteração conclusiva. Qual exame é mais apropriado para investigar trombose venosa cerebral?",
    "options": [
      "(A) Radiografia simples de crânio",
      "(B) Venografia por tomografia ou ressonância magnética",
      "(C) Eletroencefalograma isolado",
      "(D) Ultrassonografia de carótidas",
      "(E) Punção lombar como único exame"
    ],
    "correctAnswer": 1,
    "explanation": "A trombose venosa cerebral pode causar cefaleia progressiva, convulsões, papiledema e déficits focais, especialmente no puerpério, gestação, trombofilias, neoplasia ou infecção. Tomografia simples pode ser normal ou inespecífica; a confirmação exige venografia por tomografia ou ressonância, demonstrando trombo ou alteração do fluxo venoso. Diante de suspeita clínica, não encerre a investigação com TC sem contraste normal. O tratamento costuma incluir anticoagulação, inclusive em muitos casos com infarto venoso hemorrágico, mas a decisão deve ser feita em ambiente hospitalar por equipe especializada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "trombose venosa cerebral e exame"
    ],
    "tip": "Tomografia simples normal não exclui trombose venosa cerebral. Diante de puerpério, convulsão e papiledema, solicite estudo venoso cerebral.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-39",
    "module": "Clínica Médica",
    "text": "Homem, 67 anos, em uso de anticoagulante, sofre queda da própria altura e apresenta cefaleia progressiva nas horas seguintes. Está acordado e sem déficit focal. Qual é a conduta mais adequada?",
    "options": [
      "(A) Liberar sem exames porque não há déficit focal",
      "(B) Solicitar avaliação urgente e neuroimagem, especialmente tomografia de crânio sem contraste",
      "(C) Tratar como migrânea habitual",
      "(D) Solicitar apenas radiografia cervical",
      "(E) Aguardar 72 horas para observar"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma craniano em paciente anticoagulado associado a cefaleia nova ou progressiva exige avaliação urgente para excluir hemorragia intracraniana, mesmo sem déficit focal ou alteração inicial da consciência. Tomografia de crânio sem contraste é o exame inicial habitual. A decisão sobre observação, repetição de imagem, reversão da anticoagulação e suspensão temporária depende do achado radiológico, fármaco, risco trombótico e avaliação especializada. Não é seguro liberar apenas porque o exame neurológico inicial está normal.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia após trauma"
    ],
    "tip": "Trauma + anticoagulação + cefaleia nova ou progressiva é combinação de alto risco. Não tranquilize apenas pelo exame neurológico inicial normal.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-40",
    "module": "Clínica Médica",
    "text": "Homem, 45 anos, relata cefaleia occipital desencadeada por tosse e esforço evacuatório, com piora progressiva. Qual atitude é mais apropriada?",
    "options": [
      "(A) Classificar como cefaleia tensional sem exames",
      "(B) Investigar causa estrutural da fossa posterior ou outra causa secundária com neuroimagem",
      "(C) Prescrever triptano e encerrar avaliação",
      "(D) Diagnosticar cefaleia em salvas",
      "(E) Indicar antibiótico"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia precipitada por tosse, esforço ou manobra de Valsalva é um sinal de alerta, principalmente quando nova ou progressiva. Entre as causas secundárias estão malformação de Chiari tipo I, lesões da fossa posterior, hidrocefalia e alterações de pressão liquórica; início explosivo também exige excluir causas vasculares. A ressonância é frequentemente útil para avaliar fossa posterior e junção craniocervical, mas a escolha do exame depende da urgência e da hipótese. Cefaleia primária da tosse só deve ser diagnosticada após excluir causas secundárias.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia associada a hipertensão intracraniana e valsalva"
    ],
    "tip": "Cefaleia provocada por Valsalva merece investigação estrutural, sobretudo quando nova ou progressiva.",
    "topography": "1.1",
    "topic": "Cefaleias"
  }
];

export const TOPOGRAPHY_QUESTIONS: Question[] = [...NEURO_CEFALEIAS];
