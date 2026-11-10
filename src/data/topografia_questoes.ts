import { Question } from '../types';

/**
 * Questões do "Simulado por topografia".
 * Cada uma tem `topography` (id da especialidade no roteiro, ex.: "1.1") e `topic` (o assunto).
 * Questões do banco geral também entram na topografia se tiverem `topography` preenchido.
 */

// 1.1 Neurologia — Cefaleias (40 questões inéditas, nível residência, versão revisada de 10/11/2026)
const NEURO_CEFALEIAS: Question[] = [
  {
    "id": "topo-1-1-1",
    "module": "Clínica Médica",
    "text": "Mulher, 29 anos, relata seis episódios de cefaleia nos últimos dez meses, com duração de 8 a 18 horas. A dor é unilateral em quatro episódios, pulsátil, moderada a intensa e piora ao subir escadas. Em todas as crises há náusea; em algumas, fotofobia e fonofobia. Exame neurológico normal e ausência de sinais de alarme. Qual é a classificação mais provável?",
    "options": [
      "(A) Cefaleia do tipo tensional episódica provável",
      "(B) Migrânea sem aura",
      "(C) Migrânea crônica",
      "(D) Cefaleia em salvas episódica",
      "(E) Cefaleia atribuída a distúrbio cervical"
    ],
    "correctAnswer": 1,
    "explanation": "Os critérios ICHD-3 para migrânea sem aura exigem pelo menos cinco crises com duração de 4–72 horas, pelo menos duas características da dor (unilateralidade, caráter pulsátil, intensidade moderada/grave ou piora com atividade física) e náusea/vômito ou associação de fotofobia e fonofobia. O caso preenche esses elementos. Migrânea crônica exige ≥15 dias de cefaleia por mês por mais de três meses, com ≥8 dias migranosos. Salvas tem crises mais curtas, dor orbitária muito intensa e sintomas autonômicos ipsilaterais.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea sem aura: aplicação dos critérios diagnósticos"
    ],
    "tip": "Organize a hipótese em três blocos: número e duração das crises; características da dor; sintomas associados. Aura não é necessária para diagnosticar migrânea.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-2",
    "module": "Clínica Médica",
    "text": "Homem, 32 anos, apresenta fenômeno visual que começa como pequeno escotoma cintilante, aumenta progressivamente em 10 minutos e se transforma em linhas em zigue-zague. O fenômeno desaparece completamente após 25 minutos e é seguido por cefaleia pulsátil e náuseas. Qual mecanismo fisiopatológico explica melhor esse fenômeno?",
    "options": [
      "(A) Oclusão transitória da artéria central da retina",
      "(B) Despolarização neuronal cortical propagada, seguida de supressão da atividade neuronal",
      "(C) Vasoespasmo persistente da artéria cerebral média",
      "(D) Aumento agudo da pressão intracraniana",
      "(E) Descarga epileptiforme occipital sustentada"
    ],
    "correctAnswer": 1,
    "explanation": "A aura visual típica está associada à depressão alastrante cortical, fenômeno de despolarização neuronal e glial que se propaga pelo córtex, seguido por período de redução da atividade. A progressão gradual, os fenômenos visuais positivos e a reversibilidade em 5–60 minutos favorecem aura. Isquemia tende a produzir déficit súbito e frequentemente negativo, mas há sobreposição clínica: primeiro episódio, sintomas atípicos, déficit persistente ou fatores vasculares exigem investigação de AVC/AIT. Crises epilépticas occipitais tendem a ser mais breves e estereotipadas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "aura visual: distinção entre aura e evento isquêmico"
    ],
    "tip": "Fenômeno positivo que se espalha gradualmente e regride em até 60 minutos sugere aura. Déficit súbito ou persistente deve ser tratado como possível evento vascular até avaliação adequada.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-3",
    "module": "Clínica Médica",
    "text": "Mulher, 35 anos, com migrânea episódica, procura atendimento durante crise incapacitante. Fez uso precoce de naproxeno em dose adequada, sem resposta. Apresenta náuseas, mas não vomitou. Não tem doença cardiovascular, doença cerebrovascular ou hipertensão não controlada. Qual estratégia específica é mais apropriada?",
    "options": [
      "(A) Iniciar propranolol e aguardar efeito durante a crise",
      "(B) Prescrever sumatriptana, considerando associação a AINE em crises selecionadas",
      "(C) Utilizar opioide parenteral como primeira linha após falha do AINE",
      "(D) Iniciar verapamil para abortar a crise",
      "(E) Prescrever amitriptilina em dose única"
    ],
    "correctAnswer": 1,
    "explanation": "Triptanos são opções para crises moderadas ou graves, sobretudo quando AINEs são ineficazes. A associação de triptano e AINE pode aumentar a eficácia e reduzir recorrência em pacientes selecionados. Náusea sem vômito não impede necessariamente a via oral; vômitos ou gastroparesia podem favorecer via não oral e antiemético. Propranolol, verapamil e amitriptilina são empregados principalmente na prevenção, não como resgate. Opioides não são recomendados rotineiramente por baixa adequação terapêutica, risco de recorrência, dependência e cronificação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento abortivo da migrânea com falha a aine"
    ],
    "tip": "Separe tratamento da crise de prevenção. Triptano é opção abortiva; propranolol, topiramato e amitriptilina são exemplos de preventivos.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-4",
    "module": "Clínica Médica",
    "text": "Mulher, 33 anos, apresenta 8–10 dias de cefaleia por mês, com pelo menos seis dias de características migranosas e importante prejuízo laboral. O tratamento agudo oferece alívio incompleto e ela utiliza medicação sintomática em frequência crescente. Não apresenta asma, bradicardia ou bloqueio atrioventricular. Qual conduta é mais apropriada?",
    "options": [
      "(A) Manter exclusivamente tratamento abortivo, pois a profilaxia só é indicada em cefaleia diária",
      "(B) Iniciar estratégia preventiva, podendo-se considerar propranolol após avaliação individual",
      "(C) Prescrever triptano diariamente para evitar a instalação das crises",
      "(D) Indicar opioide de liberação prolongada",
      "(E) Orientar suspensão de toda atividade física durante os períodos sintomáticos"
    ],
    "correctAnswer": 1,
    "explanation": "A profilaxia deve ser considerada quando há crises frequentes, incapacidade, resposta insuficiente ao tratamento agudo, contraindicações às opções abortivas ou risco de uso excessivo de medicamentos. Propranolol é uma opção preventiva estabelecida, desde que não haja contraindicações. A escolha deve considerar comorbidades, potencial reprodutivo, efeitos adversos, preferências e acesso. Triptanos não devem ser usados diariamente como prevenção convencional; opioides favorecem danos e cronificação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "indicação de profilaxia da migrânea"
    ],
    "tip": "Não espere a cefaleia se tornar diária para discutir prevenção. Frequência, incapacidade e consumo de medicação aguda são determinantes.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-5",
    "module": "Clínica Médica",
    "text": "Homem, 42 anos, apresenta cefaleia bilateral em pressão, de intensidade leve a moderada, com duração de várias horas. Não piora ao caminhar, não há náuseas ou vômitos e apenas um entre fotofobia e fonofobia está presente. Palpação dos músculos pericranianos reproduz desconforto. Qual diagnóstico é mais provável?",
    "options": [
      "(A) Migrânea sem aura",
      "(B) Cefaleia do tipo tensional",
      "(C) Cefaleia em salvas",
      "(D) Hemicrania contínua",
      "(E) Neuralgia do trigêmeo"
    ],
    "correctAnswer": 1,
    "explanation": "A cefaleia tensional caracteriza-se por dor bilateral, em pressão ou aperto, leve a moderada, sem piora com atividade física habitual e sem náuseas ou vômitos. Pode haver fotofobia ou fonofobia isolada, mas não ambas simultaneamente nos critérios típicos. Sensibilidade pericraniana é frequente. A migrânea costuma apresentar maior intensidade, caráter pulsátil, piora com atividade e náusea ou associação de foto e fonofobia.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia do tipo tensional: diagnóstico diferencial"
    ],
    "tip": "Pressão bilateral, intensidade leve/moderada, ausência de náusea e ausência de piora com atividade favorecem cefaleia tensional.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-6",
    "module": "Clínica Médica",
    "text": "Homem, 37 anos, relata crises de dor excruciante orbitária esquerda, com duração aproximada de 45–90 minutos, duas vezes ao dia. Durante os episódios apresenta lacrimejamento, hiperemia conjuntival e congestão nasal ipsilaterais, além de inquietação motora. Os episódios ocorrem em períodos de várias semanas, separados por meses sem sintomas. Qual diagnóstico é mais provável?",
    "options": [
      "(A) Migrânea com sintomas autonômicos",
      "(B) Cefaleia em salvas episódica",
      "(C) Hemicrania paroxística",
      "(D) SUNCT",
      "(E) Cefaleia do tipo tensional episódica"
    ],
    "correctAnswer": 1,
    "explanation": "A cefaleia em salvas é uma cefaleia trigêmino-autonômica caracterizada por dor unilateral muito intensa, orbitária/supraorbitária/temporal, com duração de 15–180 minutos e sintomas autonômicos ipsilaterais ou inquietação. A periodicidade em surtos com remissões prolongadas favorece a forma episódica. Hemicrania paroxística tem crises mais curtas e frequentes, com resposta absoluta à indometacina; SUNCT tem ataques de segundos a minutos, muito frequentes.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em salvas: reconhecimento do fenótipo"
    ],
    "tip": "Dor orbitária unilateral intensa + sinais autonômicos do mesmo lado + inquietação: pense em salvas. A duração da crise ajuda a diferenciá-la das outras trigêmino-autonômicas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-7",
    "module": "Clínica Médica",
    "text": "Homem, 41 anos, com diagnóstico prévio de cefaleia em salvas, chega ao pronto-socorro durante crise típica iniciada há 15 minutos. Está inquieto, com lacrimejamento e congestão nasal à direita. Saturação de oxigênio em ar ambiente é normal e não há contraindicação conhecida a triptanos. Qual tratamento oferece maior probabilidade de abortar rapidamente a crise?",
    "options": [
      "(A) Oxigênio a 100% em alto fluxo por máscara não reinalante ou sumatriptana subcutânea",
      "(B) Dipirona oral associada a repouso em ambiente escuro",
      "(C) Verapamil por via oral em dose de ataque",
      "(D) Prednisona isolada como resgate imediato",
      "(E) Amitriptilina oral associada a metoclopramida"
    ],
    "correctAnswer": 0,
    "explanation": "O tratamento abortivo de primeira linha inclui oxigênio a 100% em alto fluxo por máscara não reinalante e sumatriptana subcutânea, quando não contraindicada. O protocolo brasileiro de urgência descreve oxigênio a 10–12 L/min por cerca de 20 minutos ou sumatriptana 6 mg SC. Verapamil é preventivo e exige ECG basal e durante titulação. Corticoide pode ser utilizado como tratamento de transição em casos selecionados, não como substituto do resgate imediato. Analgésicos orais têm início lento para a duração das crises.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento abortivo da cefaleia em salvas"
    ],
    "tip": "Na crise de salvas, pense em oxigênio e sumatriptana subcutânea. Verapamil previne; não aborta a crise em curso.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-8",
    "module": "Clínica Médica",
    "text": "Homem, 49 anos, previamente hígido, apresenta cefaleia abrupta durante relação sexual, atingindo intensidade máxima em menos de um minuto. Refere vômitos e rigidez cervical. Está hemodinamicamente estável e sem déficit focal. Qual é a hipótese prioritária e a abordagem inicial?",
    "options": [
      "(A) Migrânea desencadeada por atividade sexual; iniciar triptano e observar",
      "(B) Hemorragia subaracnóidea; realizar avaliação emergencial com TC de crânio sem contraste",
      "(C) Cefaleia primária do esforço; iniciar indometacina sem investigação",
      "(D) Cefaleia em salvas; administrar oxigênio e liberar",
      "(E) Meningite viral; solicitar sorologia ambulatorial"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia em trovoada deve ser considerada emergência até exclusão de causas secundárias. Hemorragia subaracnóidea é prioritária, embora também devam ser consideradas síndrome de vasoconstrição cerebral reversível, dissecção arterial e trombose venosa cerebral. A TC sem contraste é habitualmente o exame inicial; se negativa, a necessidade de punção lombar e/ou imagem vascular depende do tempo desde o início, qualidade do exame e probabilidade clínica residual. Exame neurológico normal não exclui hemorragia.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em trovoada: investigação inicial"
    ],
    "tip": "Início explosivo, pico em menos de um minuto e 'pior cefaleia da vida' exigem investigação emergencial, mesmo sem déficit focal.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-9",
    "module": "Clínica Médica",
    "text": "Mulher, 74 anos, procura atendimento por cefaleia temporal inédita há dez dias, dor ao pentear o cabelo e claudicação mandibular. Desde a manhã apresenta episódios de amaurose fugaz no olho esquerdo. VHS e PCR estão elevados. Qual é a melhor conduta?",
    "options": [
      "(A) Aguardar biópsia da artéria temporal para iniciar tratamento",
      "(B) Iniciar corticosteroide sistêmico imediatamente e organizar confirmação diagnóstica sem atrasar a terapia",
      "(C) Prescrever triptano e reavaliar após 48 horas",
      "(D) Realizar punção lombar antes de qualquer intervenção",
      "(E) Iniciar antiagregante isolado e solicitar ultrassonografia eletiva"
    ],
    "correctAnswer": 1,
    "explanation": "O quadro é altamente sugestivo de arterite de células gigantes, especialmente pela idade, cefaleia nova, claudicação mandibular e sintomas visuais. O tratamento com corticosteroide deve ser iniciado imediatamente quando a suspeita é relevante, sobretudo diante de ameaça visual; ultrassonografia e/ou biópsia ajudam na confirmação, mas não devem atrasar a terapia. VHS e PCR são úteis, porém valores normais não excluem completamente a doença. A principal complicação temida é perda visual irreversível por isquemia.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "arterite de células gigantes: conduta tempo-dependente"
    ],
    "tip": "Idoso com cefaleia nova + claudicação mandibular + alteração visual: trate como arterite de células gigantes até esclarecimento. Não espere a biópsia para proteger a visão.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-10",
    "module": "Clínica Médica",
    "text": "Mulher, 44 anos, com história de migrânea episódica, apresenta cefaleia em 20 dias por mês há cinco meses. Utiliza combinação analgésica com cafeína em 12–15 dias mensais e relata alívio transitório, seguido de recorrência. Qual interpretação é mais adequada?",
    "options": [
      "(A) Migrânea crônica isolada, sem relação com o uso de medicação",
      "(B) Cefaleia por uso excessivo de medicamentos, possivelmente coexistente com migrânea crônica",
      "(C) Cefaleia em salvas crônica",
      "(D) Cefaleia tensional episódica",
      "(E) Hipertensão intracraniana idiopática"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia por uso excessivo de medicamentos ocorre em paciente com cefaleia preexistente, com cefaleia em ≥15 dias/mês e uso excessivo regular de medicação aguda por mais de três meses. Para combinações analgésicas, triptanos e opioides, o limiar usual é ≥10 dias/mês; para analgésicos simples isolados, ≥15 dias/mês. Pode coexistir com migrânea crônica. A abordagem inclui educação, plano de retirada/redução, prevenção da cefaleia de base e seguimento.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia por uso excessivo de medicamentos"
    ],
    "tip": "Conte dias de cefaleia e dias de uso separadamente. O limiar depende da classe: combinações/triptanos geralmente ≥10 dias/mês; analgésicos simples, ≥15.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-11",
    "module": "Clínica Médica",
    "text": "Mulher, 28 anos, com obesidade, relata cefaleia diária, zumbido pulsátil e episódios breves de escurecimento visual ao levantar-se. Fundoscopia revela papiledema bilateral. RM de encéfalo e venografia não identificam massa, hidrocefalia ou trombose venosa. Após avaliação de segurança, qual achado liquórico apoia o diagnóstico?",
    "options": [
      "(A) Pressão de abertura elevada, com composição liquórica normal",
      "(B) Pressão de abertura normal e pleocitose linfocitária",
      "(C) Hipoglicorraquia isolada",
      "(D) Xantocromia com predomínio de hemácias",
      "(E) Proteína liquórica muito elevada como critério obrigatório"
    ],
    "correctAnswer": 0,
    "explanation": "A hipertensão intracraniana idiopática é diagnóstico de exclusão. Após neuroimagem apropriada, incluindo venografia para excluir trombose venosa, a punção lombar deve ser realizada em decúbito lateral, com técnica adequada. Em adultos, pressão de abertura acima de 25 cmH₂O e composição liquórica normal apoiam o diagnóstico no contexto clínico. Obesidade é fator associado, mas não confirma a doença. É essencial acompanhar papiledema e campos visuais; perda ponderal e acetazolamida podem ser consideradas conforme gravidade e avaliação especializada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hipertensão intracraniana idiopática: confirmação diagnóstica"
    ],
    "tip": "Papiledema exige investigação. Exclua massa e trombose venosa antes da punção; pressão de abertura elevada com líquor normal apoia HII.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-12",
    "module": "Clínica Médica",
    "text": "Homem, 23 anos, apresenta febre de 39 °C, cefaleia intensa, rigidez de nuca e fotofobia. Está sonolento, mas desperta ao chamado, sem déficit focal evidente. A equipe considera meningite bacteriana. Qual estratégia reduz o risco de atraso terapêutico?",
    "options": [
      "(A) Realizar TC e aguardar o laudo antes de colher culturas ou iniciar antibiótico em todos os casos",
      "(B) Colher hemoculturas rapidamente e iniciar antibioticoterapia empírica sem atraso; realizar punção lombar quando segura",
      "(C) Realizar punção lombar e aguardar cultura do líquor antes do tratamento",
      "(D) Administrar corticosteroide isolado e observar evolução",
      "(E) Solicitar apenas hemograma e proteína C reativa para definir etiologia"
    ],
    "correctAnswer": 1,
    "explanation": "Meningite bacteriana é emergência tempo-dependente. Hemoculturas devem ser colhidas rapidamente, desde que isso não atrase o antibiótico. A punção lombar é realizada quando segura; neuroimagem antes da punção não é rotina para todos, sendo indicada diante de fatores como déficit focal, papiledema, rebaixamento importante da consciência, convulsão recente ou imunossupressão, conforme protocolo. Se imagem ou punção atrasarem, iniciar tratamento empírico após hemoculturas. O esquema depende de idade, fatores de risco e epidemiologia.",
    "reference": "Ministério da Saúde — Meningite: diagnóstico e tratamento; OMS. WHO guidelines on meningitis diagnosis, treatment and care (2025)",
    "tags": [
      "neurologia",
      "cefaleias",
      "suspeita de meningite bacteriana: sequência de condutas"
    ],
    "tip": "Não atrase antibiótico para esperar TC, punção ou cultura quando houver suspeita relevante. Faça culturas rapidamente e trate; imagem pré-punção é seletiva.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-13",
    "module": "Clínica Médica",
    "text": "Puérpera no oitavo dia após cesariana apresenta cefaleia progressiva há 48 horas, piora ao decúbito, vômitos e episódio convulsivo focal. A TC sem contraste não mostra hemorragia ou lesão expansiva. Qual exame deve ser priorizado para investigar uma causa vascular venosa?",
    "options": [
      "(A) Angiotomografia arterial de carótidas",
      "(B) Venografia por TC ou venografia por RM",
      "(C) Ultrassonografia Doppler de carótidas",
      "(D) Eletroencefalograma como exame confirmatório",
      "(E) Radiografia simples de crânio"
    ],
    "correctAnswer": 1,
    "explanation": "O puerpério é estado pró-trombótico e aumenta o risco de trombose venosa cerebral. Cefaleia progressiva, convulsão e sinais de hipertensão intracraniana são apresentações compatíveis. TC sem contraste pode ser normal ou inespecífica; a investigação exige venografia por TC ou RM. O diferencial inclui pré-eclâmpsia/eclâmpsia, síndrome de vasoconstrição cerebral reversível e cefaleia pós-punção dural. Uma cefaleia nova e atípica no puerpério não deve ser presumida como migrânea.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia no puerpério: trombose venosa cerebral"
    ],
    "tip": "No puerpério, cefaleia progressiva com convulsão ou papiledema pede estudo venoso cerebral. TC simples normal não exclui trombose venosa.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-14",
    "module": "Clínica Médica",
    "text": "Mulher, 30 anos, submetida à raquianestesia para cesariana, desenvolve cefaleia 36 horas após o procedimento. A dor é intensa quando permanece sentada ou em pé e melhora significativamente após alguns minutos em decúbito. Refere também náuseas e zumbido. Qual mecanismo explica melhor o quadro?",
    "options": [
      "(A) Vasoconstrição cerebral reversível induzida pelo anestésico",
      "(B) Perda de líquor pelo defeito dural, com redução do volume liquórico e tração de estruturas sensíveis à dor",
      "(C) Trombose arterial por hipercoagulabilidade puerperal",
      "(D) Elevação sustentada da pressão intracraniana",
      "(E) Inflamação meníngea bacteriana relacionada ao procedimento"
    ],
    "correctAnswer": 1,
    "explanation": "A cefaleia pós-punção dural decorre de fuga de líquor pelo defeito na dura-máter, com redução do volume/pressão liquórica e tração de estruturas intracranianas. O padrão ortostático é característico, podendo haver náuseas, dor cervical, zumbido e sintomas auditivos. Casos leves podem receber medidas conservadoras e analgesia; sintomas persistentes ou incapacitantes podem exigir tampão sanguíneo epidural após avaliação anestésica. Mudança do padrão ou sinais neurológicos exigem reavaliação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia pós-punção dural"
    ],
    "tip": "Piora em pé e melhora ao deitar após raquianestesia sugere cefaleia pós-punção dural. Se a evolução for atípica, reabra o diagnóstico diferencial.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-15",
    "module": "Clínica Médica",
    "text": "Mulher, 39 anos, apresenta cefaleia em 18 dias por mês há oito meses. Em dez dias mensais a dor tem caráter pulsátil, piora com atividade e associa-se a náuseas ou foto/fonofobia. Nos demais dias, descreve pressão bilateral leve. Qual classificação é mais apropriada?",
    "options": [
      "(A) Migrânea episódica de alta frequência",
      "(B) Migrânea crônica",
      "(C) Cefaleia tensional crônica isolada",
      "(D) Cefaleia em salvas crônica",
      "(E) Cefaleia por uso excessivo de medicamentos obrigatoriamente"
    ],
    "correctAnswer": 1,
    "explanation": "Migrânea crônica exige cefaleia em ≥15 dias/mês por mais de três meses, em pessoa com história de migrânea, com características migranosas ou resposta a tratamento específico em ≥8 dias/mês. Nem todos os dias precisam ter fenótipo migranoso; alguns podem parecer cefaleia tensional. Cefaleia por uso excessivo deve ser investigada, mas não pode ser afirmada sem dados sobre frequência e classe de medicação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea crônica: aplicação dos critérios"
    ],
    "tip": "Memorize o corte: ≥15 dias de cefaleia/mês e ≥8 dias migranosos, por mais de três meses. Os dias restantes podem ter fenótipo tensional.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-16",
    "module": "Clínica Médica",
    "text": "Homem, 63 anos, apresenta paroxismos de dor facial direita em choque elétrico, com duração de poucos segundos, desencadeados ao escovar os dentes e tocar a região nasolabial. Entre as crises permanece assintomático. Não há déficit sensitivo ao exame. Qual é a hipótese e a abordagem inicial mais apropriadas?",
    "options": [
      "(A) Migrânea com aura; iniciar triptano",
      "(B) Neuralgia do trigêmeo; considerar carbamazepina ou oxcarbazepina e investigar sinais de possível causa secundária",
      "(C) Cefaleia em salvas; iniciar oxigênio domiciliar",
      "(D) Disfunção temporomandibular; indicar antibiótico",
      "(E) Hemicrania contínua; iniciar indometacina sem investigação"
    ],
    "correctAnswer": 1,
    "explanation": "A neuralgia do trigêmeo causa dor paroxística unilateral em choque, geralmente com duração de frações de segundo a dois minutos, precipitada por estímulos inócuos em zonas-gatilho. Carbamazepina ou oxcarbazepina são opções farmacológicas de primeira linha, com monitorização de efeitos adversos e interações. Déficit sensitivo persistente, bilateralidade, idade atípica ou outros sinais neurológicos aumentam a suspeita de causa secundária e justificam RM.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "neuralgia do trigêmeo: reconhecimento e investigação"
    ],
    "tip": "Dor em choque, muito breve, desencadeada por toque na face é neuralgia do trigêmeo. Déficit sensitivo não é típico e exige investigação de causa secundária.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-17",
    "module": "Clínica Médica",
    "text": "Homem, 47 anos, sem história prévia de cefaleia, apresenta dor occipital intensa durante levantamento de peso. A dor atinge o pico em 40 segundos e dura cerca de duas horas. Exame neurológico inicial sem déficits. Qual é a conduta mais apropriada?",
    "options": [
      "(A) Diagnosticar cefaleia primária do exercício com base no gatilho",
      "(B) Investigar imediatamente causas secundárias, incluindo hemorragia subaracnóidea e síndrome de vasoconstrição cerebral reversível",
      "(C) Iniciar propranolol e liberar sem neuroimagem",
      "(D) Tratar como cefaleia tensional por ser occipital",
      "(E) Solicitar radiografia simples de crânio e reavaliar em uma semana"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia precipitada por esforço pode ser primária, mas a primeira apresentação com pico abrupto exige excluir causas secundárias. Hemorragia subaracnóidea, síndrome de vasoconstrição cerebral reversível, dissecção arterial, trombose venosa cerebral e lesões da fossa posterior integram o diferencial. A investigação deve seguir o contexto de emergência, com TC sem contraste e exames adicionais conforme o tempo de início e a hipótese. Só se estabelece cefaleia primária após avaliação adequada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia desencadeada por esforço: quando investigar"
    ],
    "tip": "O gatilho não define benignidade. Primeira cefaleia explosiva durante esforço é emergência diagnóstica até exclusão de causas vasculares.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-18",
    "module": "Clínica Médica",
    "text": "Mulher, 56 anos, sem história prévia de cefaleia, apresenta dor diária progressiva há seis semanas, mais intensa ao despertar, associada a vômitos ocasionais. Exame neurológico sem déficit focal. Qual aspecto do caso mais justifica investigação de causa secundária?",
    "options": [
      "(A) A localização bilateral da dor",
      "(B) O início de cefaleia nova após os 50 anos, com progressão e vômitos",
      "(C) A ausência de fotofobia",
      "(D) A resposta parcial a analgésico comum",
      "(E) A ausência de déficit focal"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia nova após os 50 anos, padrão progressivo e vômitos são sinais de alerta para causas secundárias, incluindo lesão expansiva e alterações de pressão intracraniana. Exame neurológico normal não exclui doença estrutural. A decisão sobre TC ou RM depende da urgência e da hipótese clínica. A localização bilateral, ausência de fotofobia ou resposta parcial a analgésico não neutralizam os sinais de alerta.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "sinais de alarme: cefaleia nova após os 50 anos"
    ],
    "tip": "Valorize mudança de padrão: cefaleia nova, progressiva, após os 50 anos ou acompanhada de vômitos requer investigação, mesmo com exame neurológico normal.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-19",
    "module": "Clínica Médica",
    "text": "Homem, 60 anos, hipertenso, comparece por cefaleia leve após noite mal dormida. PA inicial de 186/108 mmHg, repetida após repouso em 174/102 mmHg. Está lúcido, sem déficit focal, dor torácica, dispneia, alteração visual ou sinais de lesão aguda de órgão-alvo. Qual interpretação é mais adequada?",
    "options": [
      "(A) O valor pressórico isolado define emergência hipertensiva",
      "(B) Cefaleia isolada comprova encefalopatia hipertensiva",
      "(C) É necessário avaliar lesão aguda de órgão-alvo; a elevação pressórica isolada não estabelece emergência hipertensiva",
      "(D) Deve-se reduzir a pressão imediatamente com anti-hipertensivo intravenoso",
      "(E) A cefaleia exclui a possibilidade de hipertensão arterial crônica não controlada"
    ],
    "correctAnswer": 2,
    "explanation": "Emergência hipertensiva requer elevação pressórica associada a lesão aguda de órgão-alvo. Cefaleia isolada não comprova encefalopatia hipertensiva nem estabelece causalidade entre pressão e dor. Deve-se confirmar a medida, avaliar contexto e sinais de lesão aguda e ajustar tratamento conforme o caso. Redução intravenosa rápida sem indicação pode causar hipoperfusão e dano. Sintomas neurológicos, visuais ou alteração de consciência mudariam a avaliação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia e pressão arterial elevada"
    ],
    "tip": "Não trate o número isoladamente. A pergunta central é: há lesão aguda de órgão-alvo? Cefaleia isolada não define emergência hipertensiva.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-20",
    "module": "Clínica Médica",
    "text": "Mulher, 26 anos, apresenta crises recorrentes de cefaleia pulsátil, associadas a náuseas e fotofobia, com padrão estável há cinco anos. Exame neurológico normal, sem mudança recente, sinais sistêmicos ou sinais de alarme. Qual é a conduta mais adequada quanto à neuroimagem?",
    "options": [
      "(A) Solicitar RM de encéfalo para confirmar migrânea",
      "(B) Solicitar TC anual para rastrear aneurisma",
      "(C) Não solicitar neuroimagem de rotina, mantendo avaliação clínica e reavaliando se houver mudança do padrão",
      "(D) Realizar punção lombar para confirmar cefaleia primária",
      "(E) Solicitar angio-RM em toda paciente com fotofobia"
    ],
    "correctAnswer": 2,
    "explanation": "Migrânea típica, estável, com exame neurológico normal e ausência de sinais de alarme é diagnóstico clínico. Neuroimagem não é necessária apenas para confirmar migrânea. Exames são indicados quando há mudança do padrão, início abrupto, déficit focal, papiledema, febre/meningismo, trauma, câncer, imunossupressão ou outros sinais de alerta. A modalidade depende da hipótese: TC é frequentemente inicial em suspeita hemorrágica aguda; RM pode ser superior em diversas causas estruturais.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "neuroimagem na migrânea típica"
    ],
    "tip": "Não peça imagem por reflexo. Pergunte qual hipótese secundária o exame pretende excluir e se há sinais clínicos que justifiquem a investigação.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-21",
    "module": "Clínica Médica",
    "text": "Mulher, 30 anos, relata quatro crises de cefaleia nos últimos seis meses, cada uma com duração de 6–12 horas. A dor é unilateral, pulsátil, moderada, piora ao caminhar e associa-se a náuseas. Não há aura. Qual afirmação é mais correta em relação aos critérios diagnósticos formais?",
    "options": [
      "(A) O diagnóstico definitivo exige obrigatoriamente aura visual",
      "(B) O número de crises ainda não alcança o mínimo de cinco para migrânea sem aura definida pelos critérios ICHD-3",
      "(C) A presença de náusea exclui migrânea",
      "(D) A duração é incompatível com migrânea, pois deve superar 72 horas",
      "(E) A unilateralidade isolada estabelece o diagnóstico"
    ],
    "correctAnswer": 1,
    "explanation": "Os critérios formais de migrânea sem aura exigem pelo menos cinco crises, duração de 4–72 horas, pelo menos duas características da dor e sintomas associados compatíveis. A paciente apresenta fenótipo migranoso, mas quatro episódios não alcançam o número mínimo para a classificação definitiva; pode ser considerada migrânea provável, conforme avaliação completa. Aura não é requisito. A duração de 6–12 horas é compatível.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea sem aura: critérios em caso limítrofe"
    ],
    "tip": "Em questão de critério formal, conte as crises. Fenótipo compatível não significa que todos os critérios diagnósticos estejam preenchidos.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-22",
    "module": "Clínica Médica",
    "text": "Mulher, 34 anos, apresenta crises migranosas entre dois dias antes e três dias após o início do fluxo menstrual em pelo menos dois de três ciclos. Também apresenta crises em outros períodos do mês. Qual classificação corresponde ao padrão descrito?",
    "options": [
      "(A) Migrânea menstrual pura",
      "(B) Migrânea relacionada à menstruação",
      "(C) Cefaleia tensional crônica",
      "(D) Migrânea com aura obrigatória",
      "(E) Cefaleia por uso excessivo de medicamentos"
    ],
    "correctAnswer": 1,
    "explanation": "Migrânea relacionada à menstruação ocorre quando as crises aparecem na janela perimenstrual e também em outros momentos do ciclo. Na forma menstrual pura, as crises se restringem à janela de dois dias antes a três dias após o início do sangramento, em pelo menos dois de três ciclos. Diário prospectivo de cefaleia e menstruação ajuda a documentar o padrão. Estratégias preventivas perimenstruais podem ser consideradas em casos selecionados.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea relacionada à menstruação"
    ],
    "tip": "Se ocorre na janela menstrual e fora dela, é relacionada à menstruação; se ocorre apenas na janela, é menstrual pura.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-23",
    "module": "Clínica Médica",
    "text": "Mulher, 36 anos, com migrânea conhecida, apresenta crise contínua e incapacitante há 84 horas, semelhante às crises habituais, com náuseas e redução da ingesta hídrica. Não há febre, déficit focal ou alteração do padrão neurológico. Qual é a interpretação mais adequada?",
    "options": [
      "(A) Aura persistente",
      "(B) Estado migranoso, após reavaliar sinais de alarme e fatores que possam perpetuar a crise",
      "(C) Cefaleia em salvas crônica",
      "(D) Neuralgia do trigêmeo",
      "(E) Cefaleia pós-punção dural"
    ],
    "correctAnswer": 1,
    "explanation": "Estado migranoso é uma crise debilitante, contínua por mais de 72 horas, em paciente com migrânea. Pode estar associado a náuseas, vômitos, desidratação e incapacidade funcional. Antes de atribuir a persistência à migrânea, é necessário reavaliar sinais de alarme, uso excessivo de medicamentos e causas secundárias, sobretudo se houver mudança do padrão. O tratamento pode exigir antieméticos e terapias parenterais; hidratação é indicada quando há desidratação, não automaticamente.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "estado migranoso: definição e reavaliação"
    ],
    "tip": "Crise incapacitante contínua >72 horas sugere estado migranoso, mas não dispensa reavaliar diagnóstico e sinais de alarme.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-24",
    "module": "Clínica Médica",
    "text": "Mulher, 25 anos, apresenta parestesias que se disseminam da mão para a face ao longo de 15 minutos, seguidas de fraqueza unilateral reversível e cefaleia pulsátil. É o primeiro episódio com fraqueza motora. Qual é a conduta mais segura?",
    "options": [
      "(A) Diagnosticar migrânea hemiplégica e dispensar investigação vascular pela progressão gradual",
      "(B) Ativar avaliação urgente para AVC e investigar causas vasculares; considerar migrânea hemiplégica após exclusão adequada",
      "(C) Prescrever triptano e liberar após melhora da dor",
      "(D) Iniciar anticoagulação empírica sem neuroimagem",
      "(E) Classificar como cefaleia tensional com sintomas sensitivos"
    ],
    "correctAnswer": 1,
    "explanation": "Migrânea hemiplégica pode produzir fraqueza motora reversível, frequentemente acompanhada de sintomas sensitivos graduais. Entretanto, primeiro episódio de déficit motor deve ser avaliado como possível AVC até investigação adequada. Progressão gradual e sintomas positivos favorecem aura, mas não excluem isquemia. A decisão sobre neuroimagem e tratamento deve seguir protocolo de AVC e janela terapêutica. Não se deve atribuir automaticamente déficit focal à migrânea.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea hemiplégica versus avc"
    ],
    "tip": "Primeiro déficit motor é AVC até prova em contrário. A história de migrânea e a progressão gradual não substituem avaliação vascular urgente.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-25",
    "module": "Clínica Médica",
    "text": "Homem, 29 anos, relata episódios reversíveis de vertigem, diplopia, disartria e zumbido, com instalação gradual e resolução completa. Em seguida, apresenta cefaleia com características migranosas. Não há fraqueza motora. Após excluir causas vasculares, qual diagnóstico pode explicar o quadro?",
    "options": [
      "(A) Migrânea com aura de tronco encefálico",
      "(B) Migrânea hemiplégica",
      "(C) Neuralgia do trigêmeo",
      "(D) Cefaleia em salvas",
      "(E) Hemicrania contínua"
    ],
    "correctAnswer": 0,
    "explanation": "A migrânea com aura de tronco encefálico envolve pelo menos dois sintomas reversíveis atribuídos ao tronco encefálico, como disartria, vertigem, zumbido, hipoacusia, diplopia, ataxia ou redução do nível de consciência, sem sintomas motores ou retinianos. Vertigem isolada não é suficiente. A primeira apresentação exige excluir isquemia da circulação posterior e outras causas. Fraqueza motora direcionaria a classificação para outro subtipo de aura ou diagnóstico diferencial.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "migrânea com aura de tronco encefálico"
    ],
    "tip": "Não confunda vertigem isolada com aura de tronco. São necessários pelo menos dois sintomas reversíveis compatíveis e exclusão de isquemia posterior.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-26",
    "module": "Clínica Médica",
    "text": "Homem, 61 anos, com migrânea moderada a grave, tem antecedente de infarto agudo do miocárdio e doença arterial coronariana estável. Solicita medicação abortiva específica. Qual afirmação orienta corretamente a escolha terapêutica?",
    "options": [
      "(A) Sumatriptana é preferível por reduzir a resistência coronariana",
      "(B) Triptanos devem ser evitados em doença arterial coronariana por seu potencial vasoconstritor",
      "(C) A associação com AINE elimina o risco cardiovascular dos triptanos",
      "(D) A contraindicação existe apenas durante a crise de angina",
      "(E) A dose subcutânea é segura porque reduz a exposição sistêmica"
    ],
    "correctAnswer": 1,
    "explanation": "Triptanos são agonistas 5-HT1B/1D e podem produzir vasoconstrição. Devem ser evitados em doença coronariana, doença vascular periférica, AVC/AIT prévio e hipertensão não controlada, entre outras condições. A associação com AINE não elimina a contraindicação. Deve-se selecionar alternativa não vasoconstritora conforme disponibilidade, comorbidades e avaliação clínica. A via subcutânea não torna o fármaco seguro em paciente com doença coronariana.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "triptanos: contraindicação cardiovascular"
    ],
    "tip": "Antes de prescrever triptano, revise doença coronariana, vascular periférica, AVC/AIT e hipertensão não controlada. A via de administração não remove a contraindicação.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-27",
    "module": "Clínica Médica",
    "text": "Gestante de 11 semanas, com história de migrânea sem aura, apresenta crise semelhante às habituais, sem hipertensão, febre, déficit focal ou sinais de alarme. Após avaliação clínica, qual opção farmacológica costuma ser considerada inicialmente?",
    "options": [
      "(A) Ergotamina em dose única",
      "(B) Paracetamol na menor dose eficaz e pelo menor tempo necessário",
      "(C) Valproato como terapia abortiva",
      "(D) Topiramato em dose de ataque",
      "(E) Anti-inflamatório não esteroidal em qualquer trimestre, sem restrições"
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, o tratamento deve considerar idade gestacional e balanço materno-fetal. Paracetamol costuma ser opção inicial para crise, na menor dose eficaz e pelo menor tempo necessário, após avaliação individual. Ergotamínicos e valproato devem ser evitados. AINEs têm restrições específicas por idade gestacional, com riscos a partir de 20 semanas e contraindicação no terceiro trimestre. Cefaleia nova ou atípica na gestação exige investigação de causas obstétricas e vasculares.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento da migrânea na gestação"
    ],
    "tip": "Gestação muda a escolha do fármaco. Paracetamol costuma ser opção inicial; evite ergotamínicos e valproato e respeite as restrições gestacionais dos AINEs.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-28",
    "module": "Clínica Médica",
    "text": "Mulher, 31 anos, com migrânea frequente e necessidade de profilaxia, apresenta antecedente de nefrolitíase recorrente por cálculos de oxalato de cálcio. Qual medicamento exige cautela especial por aumentar o risco de formação de cálculos?",
    "options": [
      "(A) Propranolol",
      "(B) Topiramato",
      "(C) Amitriptilina",
      "(D) Candesartana",
      "(E) Anticorpo monoclonal anti-CGRP"
    ],
    "correctAnswer": 1,
    "explanation": "Topiramato é eficaz na prevenção da migrânea, mas pode favorecer nefrolitíase por alterações metabólicas e urinárias, além de causar parestesias, lentificação cognitiva e acidose metabólica. Em paciente com história recorrente de cálculos, a escolha exige ponderação de risco e alternativas. A seleção preventiva deve ser individualizada e considerar comorbidades, efeitos adversos, potencial reprodutivo e acesso.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "profilaxia da migrânea: topiramato e nefrolitíase"
    ],
    "tip": "Não escolha preventivo apenas pela eficácia. Topiramato pode ser desfavorável em pacientes com nefrolitíase recorrente.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-29",
    "module": "Clínica Médica",
    "text": "Mulher, 27 anos, com migrânea frequente, deseja iniciar topiramato preventivo. Não utiliza método contraceptivo e pretende engravidar em três a seis meses. Qual aspecto deve orientar a decisão?",
    "options": [
      "(A) Topiramato não apresenta risco fetal em doses utilizadas para migrânea",
      "(B) É necessário discutir risco fetal e planejar alternativa preventiva antes da concepção",
      "(C) A dose baixa elimina o risco teratogênico",
      "(D) O medicamento deve ser mantido durante toda a gestação para evitar estado migranoso",
      "(E) Apenas função hepática precisa ser considerada"
    ],
    "correctAnswer": 1,
    "explanation": "Topiramato está associado a risco fetal, incluindo malformações congênitas e possíveis efeitos sobre crescimento e neurodesenvolvimento. Em pessoa com potencial reprodutivo que planeja gestação, é necessário discutir riscos, contracepção eficaz e alternativa preventiva antes de iniciar. Se já estiver em uso, a mudança deve ser planejada com o médico, sem suspensão abrupta ou autônoma. O plano reprodutivo é parte da escolha farmacológica.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "topiramato e potencial reprodutivo"
    ],
    "tip": "Pergunte sobre possibilidade e planejamento de gestação antes de escolher profilaxia. A eficácia não compensa ignorar risco fetal conhecido.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-30",
    "module": "Clínica Médica",
    "text": "Homem, 42 anos, apresenta crises diárias de dor orbitária unilateral durante seis semanas. Após o período, permanece completamente assintomático por oito meses. O padrão se repetiu no ano seguinte. Como classificar a cefaleia em salvas?",
    "options": [
      "(A) Forma crônica, pois houve crises diárias",
      "(B) Forma episódica, pois os períodos ativos são separados por remissão superior a três meses",
      "(C) Hemicrania paroxística",
      "(D) SUNCT",
      "(E) Migrânea crônica"
    ],
    "correctAnswer": 1,
    "explanation": "Na ICHD-3, a cefaleia em salvas episódica ocorre em períodos de salvas com duração de 7 dias a 1 ano, separados por remissões sem dor de pelo menos três meses. A forma crônica persiste por um ano ou mais sem remissão ou com remissões inferiores a três meses. A classificação depende do padrão longitudinal, não apenas da frequência diária ou intensidade.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia em salvas: classificação episódica ou crônica"
    ],
    "tip": "Na salvas, observe o intervalo livre de dor: remissão ≥3 meses favorece forma episódica; remissões menores ou ausentes por ≥1 ano sugerem forma crônica.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-31",
    "module": "Clínica Médica",
    "text": "Homem, 45 anos, inicia verapamil para prevenção de cefaleia em salvas. Durante a titulação, relata tontura e frequência cardíaca de 48 bpm. Qual é a principal preocupação e qual monitorização é recomendada?",
    "options": [
      "(A) Hipoglicemia; glicemia capilar diária",
      "(B) Bradicardia e bloqueio atrioventricular; ECG basal e repetido durante titulação",
      "(C) Nefrolitíase; ultrassonografia renal mensal",
      "(D) Hepatotoxicidade; transaminases semanais",
      "(E) Hemorragia intracraniana; TC semanal"
    ],
    "correctAnswer": 1,
    "explanation": "Verapamil é uma das principais opções preventivas para cefaleia em salvas, mas pode causar bradicardia e prolongamento da condução atrioventricular, inclusive bloqueios. Recomenda-se ECG basal e monitorização durante a titulação, especialmente em doses elevadas ou diante de sintomas. Bradicardia sintomática exige reavaliação da dose e da segurança. Oxigênio e sumatriptana permanecem opções abortivas, não preventivas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "verapamil na prevenção da cefaleia em salvas"
    ],
    "tip": "Verapamil exige ECG. Bradicardia, tontura ou síncope durante a titulação não devem ser ignoradas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-32",
    "module": "Clínica Médica",
    "text": "Paciente com cefaleia em salvas episódica apresenta várias crises diárias. O neurologista inicia verapamil, mas prevê que a titulação levará alguns dias até atingir dose preventiva eficaz. Qual estratégia pode ser utilizada como ponte em pacientes selecionados?",
    "options": [
      "(A) Corticosteroide sistêmico por curto período ou bloqueio do nervo occipital maior",
      "(B) Opioide de liberação prolongada durante todo o surto",
      "(C) Antibiótico profilático",
      "(D) Anticoagulação plena",
      "(E) Dipirona diária como prevenção de manutenção"
    ],
    "correctAnswer": 0,
    "explanation": "O tratamento de transição busca reduzir crises enquanto o preventivo principal, como verapamil, ainda está sendo titulado. Corticosteroide sistêmico por curto período ou bloqueio do nervo occipital maior podem ser considerados em pacientes selecionados, avaliando contraindicações e efeitos adversos. Não substituem a prevenção de manutenção e não devem ser prolongados indiscriminadamente. Opioides e analgésicos comuns não são estratégias adequadas para abortar salvas.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "tratamento de transição na cefaleia em salvas"
    ],
    "tip": "Diferencie as três funções: oxigênio/triptano abortam; corticoide ou bloqueio podem fazer ponte; verapamil previne.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-33",
    "module": "Clínica Médica",
    "text": "Mulher, 36 anos, apresenta dor orbitária unilateral muito intensa, associada a lacrimejamento e congestão nasal ipsilaterais. As crises duram 10–20 minutos e ocorrem 12–18 vezes ao dia. Qual diagnóstico deve ser considerado e qual característica terapêutica é marcante?",
    "options": [
      "(A) Cefaleia em salvas; resposta absoluta a oxigênio",
      "(B) Hemicrania paroxística; resposta absoluta à indometacina",
      "(C) SUNCT; resposta absoluta a triptano oral",
      "(D) Migrânea; resposta absoluta a verapamil",
      "(E) Hemicrania contínua; resposta absoluta a corticosteroide"
    ],
    "correctAnswer": 1,
    "explanation": "Hemicrania paroxística é uma cefaleia trigêmino-autonômica com crises unilaterais de 2–30 minutos, geralmente mais de cinco por dia, associadas a sintomas autonômicos ipsilaterais ou inquietação. A resposta absoluta à indometacina é característica e integra o diagnóstico. É necessário considerar toxicidade gastrointestinal, renal e cardiovascular, com proteção gástrica quando indicada. A salvas costuma ter crises mais longas e menos frequentes.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hemicrania paroxística"
    ],
    "tip": "Crises autonômicas muito frequentes e curtas, com resposta completa à indometacina, apontam para hemicrania paroxística.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-34",
    "module": "Clínica Médica",
    "text": "Homem, 46 anos, relata dor estritamente unilateral, contínua há cinco meses, com exacerbações intensas e lacrimejamento ipsilateral. A investigação inicial não identifica causa secundária. Após introdução de indometacina, ocorre desaparecimento completo da dor. Qual diagnóstico é mais provável?",
    "options": [
      "(A) Hemicrania contínua",
      "(B) Cefaleia em salvas episódica",
      "(C) Neuralgia do trigêmeo",
      "(D) Migrânea crônica",
      "(E) Cefaleia tensional crônica"
    ],
    "correctAnswer": 0,
    "explanation": "Hemicrania contínua caracteriza-se por dor estritamente unilateral e contínua por mais de três meses, com exacerbações e possíveis sintomas autonômicos ipsilaterais. A resposta completa à indometacina é elemento diagnóstico central. Diferentemente da salvas, a dor basal persiste entre as exacerbações. O uso de indometacina exige atenção à toxicidade gastrointestinal, renal e cardiovascular.",
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
    "text": "Homem, 53 anos, apresenta dezenas de ataques diários de dor orbitária unilateral em pontada, com duração de 20–40 segundos. Durante cada ataque há hiperemia conjuntival e lacrimejamento ipsilaterais. Qual síndrome é mais compatível?",
    "options": [
      "(A) SUNCT",
      "(B) Hemicrania contínua",
      "(C) Cefaleia em salvas",
      "(D) Migrânea sem aura",
      "(E) Cefaleia do tipo tensional"
    ],
    "correctAnswer": 0,
    "explanation": "SUNCT caracteriza-se por ataques breves e frequentes de dor unilateral, acompanhados simultaneamente por hiperemia conjuntival e lacrimejamento ipsilaterais. SUNA apresenta sintomas autonômicos cranianos, mas não necessariamente ambos os sinais oculares. A duração de segundos e a frequência elevada diferenciam essas síndromes da cefaleia em salvas, cujas crises duram 15–180 minutos. Apresentações atípicas podem exigir investigação estrutural.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "sunct: identificação pela duração e sintomas autonômicos"
    ],
    "tip": "Ataques de segundos, muito frequentes, com olho vermelho e lacrimejamento sugerem SUNCT. Compare duração e frequência com salvas.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-36",
    "module": "Clínica Médica",
    "text": "Mulher, 33 anos, apresenta pressão facial durante episódio de rinossinusite aguda, com obstrução nasal e secreção purulenta. A dor começou junto dos sintomas nasais e melhora paralelamente à resolução do quadro. Qual interpretação é mais adequada?",
    "options": [
      "(A) Dor frontal isolada confirma rinossinusite bacteriana",
      "(B) A relação temporal entre doença sinonasal documentada e evolução da dor sustenta cefaleia atribuída à rinossinusite",
      "(C) A localização facial exclui migrânea",
      "(D) A presença de secreção purulenta indica obrigatoriamente complicação intracraniana",
      "(E) Todo quadro exige tomografia dos seios da face"
    ],
    "correctAnswer": 1,
    "explanation": "Atribuir cefaleia à rinossinusite exige evidência de doença sinonasal e relação causal temporal: a dor começa ou piora com a rinossinusite e melhora paralelamente à resolução, entre outros critérios. Dor frontal ou pressão facial isolada não confirma sinusite bacteriana. Migrânea pode causar pressão facial, congestão nasal e lacrimejamento, sendo frequentemente confundida com 'cefaleia sinusal'. Antibiótico e tomografia dependem dos critérios clínicos e de sinais de complicação.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia atribuída à rinossinusite"
    ],
    "tip": "Não diagnostique sinusite pela localização da dor. Procure sintomas nasais objetivos e relação temporal; migrânea pode simular 'dor sinusal'.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-37",
    "module": "Clínica Médica",
    "text": "Mulher, 43 anos, apresenta cefaleia ortostática diária há quatro semanas, sem punção lombar, raquianestesia ou trauma recente. A dor piora após permanecer em pé e melhora ao deitar, acompanhada de cervicalgia e zumbido. Qual hipótese deve ser investigada?",
    "options": [
      "(A) Hipertensão intracraniana idiopática",
      "(B) Hipotensão intracraniana espontânea por fuga liquórica",
      "(C) Cefaleia pós-punção dural",
      "(D) Cefaleia em salvas",
      "(E) Arterite de células gigantes"
    ],
    "correctAnswer": 1,
    "explanation": "A hipotensão intracraniana espontânea pode decorrer de fuga liquórica sem procedimento prévio. A cefaleia costuma ser ortostática e pode acompanhar cervicalgia, náuseas, zumbido e sintomas auditivos. A investigação geralmente inclui RM de encéfalo com contraste e avaliação da coluna para localizar a fuga. A pressão de abertura pode não estar reduzida em todos os casos; portanto, um valor isolado normal não exclui a hipótese.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "hipotensão intracraniana espontânea"
    ],
    "tip": "Cefaleia ortostática sem punção prévia não é pós-punção por definição. Considere fuga espontânea de líquor e investigue se persistente.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-38",
    "module": "Clínica Médica",
    "text": "Puérpera, 30 anos, apresenta cefaleia progressiva, papiledema e crise convulsiva focal. A TC sem contraste não demonstra alteração conclusiva. Qual exame é mais apropriado para confirmar ou excluir trombose venosa cerebral?",
    "options": [
      "(A) Angio-TC arterial intracraniana isolada",
      "(B) Venografia por tomografia ou ressonância magnética",
      "(C) Doppler de carótidas",
      "(D) Eletroencefalograma isolado",
      "(E) Radiografia de crânio"
    ],
    "correctAnswer": 1,
    "explanation": "A trombose venosa cerebral pode manifestar-se com cefaleia progressiva, convulsões, papiledema e déficits focais, especialmente no puerpério, gestação, trombofilias, neoplasia ou infecção. A TC simples pode ser normal ou inespecífica; a confirmação exige venografia por TC ou RM. A suspeita clínica não deve ser encerrada por TC sem contraste normal. O tratamento, geralmente com anticoagulação, requer avaliação hospitalar especializada.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "trombose venosa cerebral: exame confirmatório"
    ],
    "tip": "TC simples normal não exclui trombose venosa cerebral. Puerpério + cefaleia progressiva + convulsão/papiledema pede estudo venoso.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-39",
    "module": "Clínica Médica",
    "text": "Homem, 68 anos, em uso de apixabana por fibrilação atrial, sofre queda da própria altura com impacto craniano. Duas horas depois, apresenta cefaleia progressiva, embora permaneça lúcido e sem déficit focal. Qual conduta é mais apropriada?",
    "options": [
      "(A) Alta após analgésico, pois o exame neurológico está normal",
      "(B) Avaliação urgente e TC de crânio sem contraste para excluir hemorragia intracraniana",
      "(C) Solicitar radiografia de crânio e observar em casa",
      "(D) Suspender anticoagulante por conta própria e reavaliar em 72 horas",
      "(E) Tratar como migrânea e solicitar RM eletiva"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma craniano em paciente anticoagulado associado a cefaleia nova ou progressiva exige avaliação urgente para excluir hemorragia intracraniana, mesmo sem déficit focal ou alteração inicial da consciência. TC de crânio sem contraste é o exame inicial habitual. Observação, repetição de imagem, reversão da anticoagulação e suspensão temporária dependem dos achados, do anticoagulante, do risco trombótico e da avaliação especializada. Exame neurológico inicial normal não exclui sangramento.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia após trauma em paciente anticoagulado"
    ],
    "tip": "Trauma + anticoagulação + cefaleia nova/progressiva é combinação de alto risco. Não libere apenas porque o exame neurológico inicial está normal.",
    "topography": "1.1",
    "topic": "Cefaleias"
  },
  {
    "id": "topo-1-1-40",
    "module": "Clínica Médica",
    "text": "Homem, 44 anos, apresenta cefaleia occipital desencadeada imediatamente por tosse e esforço evacuatório, com piora progressiva nas últimas semanas. Não há febre ou déficit focal. Qual é a conduta mais adequada?",
    "options": [
      "(A) Classificar como cefaleia primária da tosse sem investigação",
      "(B) Solicitar neuroimagem para investigar lesão de fossa posterior, malformação de Chiari ou outra causa secundária",
      "(C) Iniciar triptano e reavaliar em três meses",
      "(D) Diagnosticar cefaleia em salvas",
      "(E) Prescrever antibiótico para sinusite"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia precipitada por tosse, esforço ou manobra de Valsalva é sinal de alerta, principalmente quando nova ou progressiva. Entre as causas secundárias estão malformação de Chiari tipo I, lesões da fossa posterior, hidrocefalia e alterações de pressão liquórica; início explosivo exige também excluir causas vasculares. RM é frequentemente útil para avaliar fossa posterior e junção craniocervical. Cefaleia primária da tosse só deve ser diagnosticada após excluir causas secundárias.",
    "reference": "ICHD-3 (Sociedade Internacional de Cefaleia, 2018; tradução da Sociedade Brasileira de Cefaleia); Protocolo nacional de cefaleias nas unidades de urgência (ABN/SBCe, 2018); Consenso brasileiro para tratamento da crise migranosa (2016); Protocolos de encaminhamento — Neurologia (MS/UFRGS, 2022)",
    "tags": [
      "neurologia",
      "cefaleias",
      "cefaleia desencadeada por tosse e valsalva"
    ],
    "tip": "Cefaleia desencadeada por Valsalva merece investigação estrutural, especialmente quando nova, progressiva ou occipital.",
    "topography": "1.1",
    "topic": "Cefaleias"
  }
];

// 1.1 Neurologia — AVC (40 questões inéditas, Ciclo 1 · Dia 02; 12 intermediárias, 20 residência, 8 avançadas)
const NEURO_AVC: Question[] = [
  {
    "id": "topo-1-1-41",
    "module": "Clínica Médica",
    "text": "Um homem de 68 anos, hipertenso e tabagista, estava conversando normalmente às 8h15. Às 8h40, a esposa percebeu assimetria facial à direita, fala incompreensível e incapacidade de elevar o braço direito. Na chegada do SAMU, às 9h05, está acordado, PA 166/94 mmHg e glicemia capilar 118 mg/dL. Qual é a conduta mais adequada?",
    "options": [
      "(A) Observar por 60 minutos no domicílio e encaminhar ao hospital somente se o déficit persistir",
      "(B) Administrar AAS ainda no domicílio, pois o benefício da antiagregação é tempo-dependente",
      "(C) Acionar o protocolo de AVC, registrar 8h15 como último momento bem e levar à referência",
      "(D) Orientar transporte em veículo próprio, que costuma ser mais rápido, sem pré-notificar o hospital",
      "(E) Colher ECG e troponina no atendimento pré-hospitalar e só acionar o hospital após o resultado"
    ],
    "correctAnswer": 2,
    "explanation": "O déficit focal súbito com alteração facial, motora e de linguagem impõe suspeita de AVC. O tempo relevante é a última vez comprovadamente sem sintomas (8h15), e a condução pré-hospitalar deve antecipar a equipe receptora e selecionar o destino segundo a rede local de AVC. A glicemia inicial auxilia a excluir hipoglicemia simuladora; não há indicação de aguardar melhora em casa.",
    "commentary": "(A) Incorreta. A resolução pode ocorrer, mas observar atrasa reperfusão e a avaliação de AIT.\n\n(B) Incorreta. Antiagregação antes da neuroimagem pode ser perigosa em AVC hemorrágico.\n\n(D) Incorreta. Reduz a coordenação e pode atrasar a porta-imagem.\n\n(E) Incorreta. Investigação cardíaca é relevante, mas não deve retardar o fluxo agudo.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "triagem pré-hospitalar e ativação da linha de cuidado"
    ],
    "tip": "Déficit focal súbito = código AVC. Anote a última vez sem sintomas, cheque glicemia e não perca tempo com medidas que atrasem a TC.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-42",
    "module": "Clínica Médica",
    "text": "Uma mulher de 74 anos, com diabetes em uso de insulina, é encontrada confusa, com desvio da comissura labial e hemiparesia esquerda há cerca de 30 minutos. Glicemia capilar: 38 mg/dL. PA 148/82 mmHg. Depois de correção intravenosa da glicose, a glicemia sobe para 126 mg/dL e o déficit focal desaparece completamente. Qual interpretação é a melhor?",
    "options": [
      "(A) Hipoglicemia simulando AVC; com a reversão completa, investigar a causa da hipoglicemia",
      "(B) Trombolisar sem atraso, pois a melhora após a glicose pode ser coincidência",
      "(C) Considerar AVC hemorrágico, já que confusão associada a hemiparesia sugere sangramento",
      "(D) Iniciar anticonvulsivante contínuo, pois o déficit transitório pode ser paralisia de Todd",
      "(E) Prescrever AAS e manter investigação de AVC isquêmico, sem necessidade de avaliação metabólica"
    ],
    "correctAnswer": 0,
    "explanation": "Hipoglicemia pode produzir déficits neurológicos focais e mimetizar isquemia cerebral. Deve ser pesquisada imediatamente em todo suspeito de AVC, pois o tratamento pode reverter o quadro. É importante confirmar recuperação clínica e investigar a causa, sem negligenciar AVC concomitante se persistirem déficits. Nesta vinheta, o desaparecimento completo após normalização da glicose favorece a causa metabólica.",
    "commentary": "(B) Incorreta. Hipoglicemia grave deve ser corrigida antes de determinar elegibilidade.\n\n(C) Incorreta. A apresentação não permite distinguir hemorragia de isquemia sem imagem.\n\n(D) Incorreta. Não há evidência de convulsão nem indicação de profilaxia.\n\n(E) Incorreta. O problema agudo identificado é hipoglicemia; AAS não é intervenção apropriada.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "hipoglicemia como simulador de avc"
    ],
    "tip": "Glicemia capilar faz parte do primeiro minuto. Corrija hipoglicemia e REEXAMINE; déficit persistente mantém investigação de AVC.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-43",
    "module": "Clínica Médica",
    "text": "Um homem de 63 anos foi visto sem déficits às 22h, ao se deitar. Acordou às 6h30 com afasia e fraqueza do braço direito. Chega ao hospital às 7h10. TC sem contraste não mostra hemorragia. Ao estabelecer a cronologia para elegibilidade à reperfusão, qual informação deve orientar inicialmente o cálculo do tempo de AVC?",
    "options": [
      "(A) A hora em que acordou (6h30), primeiro momento em que o déficit foi constatado",
      "(B) A hora da chegada ao hospital (7h10), quando a avaliação neurológica foi documentada",
      "(C) O ponto médio entre deitar e acordar (2h15), como estimativa padronizada do início",
      "(D) Nenhum horário, pois no AVC ao despertar a seleção depende apenas da perfusão",
      "(E) A última vez em que foi visto sem sintomas (22h), e não a hora em que acordou"
    ],
    "correctAnswer": 4,
    "explanation": "Em AVC ao despertar, a hora de descoberta do déficit não é a hora presumida de início. O marco inicial é o “last known well”, 22h. Apesar de não estar dentro da janela cronológica convencional para trombólise sem seleção avançada, o paciente não deve ser automaticamente excluído de toda reperfusão: protocolos especializados permitem selecionar candidatos por imagem DWI–FLAIR ou perfusão, inclusive para trombectomia em contextos apropriados.",
    "commentary": "(A) Incorreta. Acordar apenas indica quando o déficit foi percebido.\n\n(B) Incorreta. Hora de chegada não é início dos sintomas.\n\n(C) Incorreta. O ponto médio pode compor critérios específicos de estudos, mas não substitui universalmente o last known well.\n\n(D) Incorreta. O tempo permanece essencial à escolha do tratamento e documentação.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "último momento assintomático e janela terapêutica"
    ],
    "tip": "AVC ao acordar: calcule a partir da última vez bem; depois pergunte se a imagem permite seleção em janela estendida.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-44",
    "module": "Clínica Médica",
    "text": "Uma professora de 42 anos apresenta afasia expressiva súbita, sem paresia. Ela compreende comandos simples, mas não consegue produzir frases úteis. NIHSS total de 3. Último momento sem sintomas há 90 minutos; TC exclui hemorragia, PA 154/92 mmHg, sem contraindicações reconhecidas à reperfusão. Qual interpretação é correta?",
    "options": [
      "(A) Não trombolisar, pois NIHSS menor que 6 indica AVC leve sem benefício de reperfusão",
      "(B) A NIHSS baixa não exclui trombólise se a afasia for incapacitante",
      "(C) Afasia sem paresia sugere causa funcional; tratar ansiedade e observar a evolução",
      "(D) Repetir a TC em 24 horas para confirmar o infarto antes de decidir sobre reperfusão",
      "(E) Antiagregante sem reperfusão, pois afasia isolada é considerada déficit não incapacitante"
    ],
    "correctAnswer": 1,
    "explanation": "A escala NIHSS quantifica déficits, mas não substitui avaliação funcional. Afasia impeditiva da comunicação é incapacitante mesmo com pontuação baixa. A diretriz AHA/ASA de 2026 reforça trombólise em déficits incapacitantes dentro de 4,5 horas, independentemente de um escore NIHSS baixo; deve-se usar avaliação individual e imagem sem hemorragia. No SUS, seguir critérios do PCDT e protocolo institucional de trombólise.",
    "commentary": "(A) Incorreta. Esse limiar é usado em algumas seleções de trombectomia, não regra geral de trombólise.\n\n(C) Incorreta. Afasia é sinal cortical vascular, não sintoma psiquiátrico por exclusão.\n\n(D) Incorreta. Retarda tratamento tempo-dependente.\n\n(E) Incorreta. Afasia relevante é um déficit tipicamente incapacitante.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "nihss e impacto funcional do déficit"
    ],
    "tip": "NIHSS pequeno não significa “AVC pequeno”. Pergunte: esse déficit impede falar, andar, enxergar ou desempenhar atividades essenciais?",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-45",
    "module": "Clínica Médica",
    "text": "Um homem destro de 71 anos evolui subitamente com desvio do olhar para a esquerda, hemiparesia direita mais acentuada em face e braço, afasia global e hemianopsia homônima direita. Qual território vascular é mais provável?",
    "options": [
      "(A) Artéria cerebral anterior direita",
      "(B) Artéria cerebral posterior direita",
      "(C) Pequeno vaso perfurante capsular direito",
      "(D) Artéria cerebral média esquerda",
      "(E) Artéria cerebelar posteroinferior esquerda"
    ],
    "correctAnswer": 3,
    "explanation": "Veja a combinação de sinais corticais (afasia, desvio conjugado do olhar, hemianopsia) com déficit motor predominante em face e braço. O território da artéria cerebral média dominante, em geral à esquerda, integra a melhor localização. AVC lacunar puro não explica afasia nem alteração conjugada do olhar. Localizar o território permite antecipar oclusão de grande vaso e priorizar angiotomografia quando disponível.",
    "commentary": "(A) Incorreta. A cerebral anterior acomete sobretudo perna contralateral e sintomas frontais.\n\n(B) Incorreta. A posterior costuma causar fenômenos visuais e talâmicos; não explica tão bem afasia global e paresia braquiofacial.\n\n(C) Incorreta. Lesão lacunar não justifica afasia global com outros sinais corticais.\n\n(E) Incorreta. Território cerebelar/bulbar produz sinais de tronco e cerebelo, não síndrome cortical de ACM.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "localização cortical: artéria cerebral média dominante"
    ],
    "tip": "Afasia + face/braço > perna + desvio do olhar para a lesão: pense em ACM dominante.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-46",
    "module": "Clínica Médica",
    "text": "Uma mulher de 66 anos, com dislipidemia, apresenta início abrupto de fraqueza importante da perna esquerda, dificuldade para iniciar ações, abulia e incontinência urinária recente. Força no braço esquerdo está discretamente reduzida; não há afasia. Qual território é mais sugerido?",
    "options": [
      "(A) Artéria cerebral média direita, divisão inferior",
      "(B) Artéria cerebral posterior direita",
      "(C) Artéria cerebral anterior direita",
      "(D) Artéria cerebelar superior esquerda",
      "(E) Artéria cerebral média esquerda, tronco M1"
    ],
    "correctAnswer": 2,
    "explanation": "A artéria cerebral anterior irriga áreas mediais do lobo frontal e parietal, incluindo representação motora predominante da perna e circuitos executivos. Paresia crural contralateral, abulia, apatia e possível incontinência favorecem esse território. Em comparação, a artéria cerebral média tende a acometer face e braço; a posterior, o campo visual; e as síndromes de tronco apresentam sinais cruzados.",
    "commentary": "(A) Incorreta. Sua apresentação costuma envolver manifestações corticais parietotemporais, negligência ou alterações visuais.\n\n(B) Incorreta. Alterações de campo visual são mais esperadas que déficit crural frontal.\n\n(D) Incorreta. Esperaríamos ataxia e manifestações cerebelares, não abulia com paresia da perna.\n\n(E) Incorreta. Tipicamente déficit braquiofacial direito e manifestações corticais esquerdas.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "localização vascular: artéria cerebral anterior"
    ],
    "tip": "Perna > braço, abulia e incontinência agudas = território da cerebral anterior.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-47",
    "module": "Clínica Médica",
    "text": "Um homem de 59 anos, com hipertensão, apresenta perda súbita do hemicampo visual esquerdo em ambos os olhos, sem dor ocular nem alteração de força. Ao exame, hemianopsia homônima esquerda consistente, pupilas fotorreagentes e fundo de olho sem alterações explicativas. Qual território é mais provável?",
    "options": [
      "(A) Artéria cerebral posterior direita",
      "(B) Oclusão da artéria central da retina esquerda",
      "(C) Lesão do nervo óptico direito",
      "(D) Artéria cerebral anterior esquerda",
      "(E) Artéria cerebelar anteroinferior esquerda"
    ],
    "correctAnswer": 0,
    "explanation": "Perda homônima de um hemicampo visual indica lesão retroquiasmática contralateral. O córtex visual occipital é irrigado predominantemente pela artéria cerebral posterior. Preservação das pupilas e fundo de olho sem causa ocular reforçam origem central. O déficit visual isolado pode parecer leve em NIHSS, mas pode ser incapacitante e requer avaliação de reperfusão quando em janela.",
    "commentary": "(B) Incorreta. Provocaria perda visual monocular, não hemianopsia homônima binocular.\n\n(C) Incorreta. Alteração pré-quiasmática geralmente compromete um olho.\n\n(D) Incorreta. A principal síndrome seria crural/frontal, não campo visual homônimo.\n\n(E) Incorreta. Comprometimento vestibulococlear e cerebelar seria mais típico.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "localização vascular: artéria cerebral posterior"
    ],
    "tip": "Hemianopsia homônima = lesão após quiasma, do lado oposto ao campo perdido; pense em ACP occipital.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-48",
    "module": "Clínica Médica",
    "text": "Um homem de 64 anos, diabético e fumante, apresenta vertigem contínua de início súbito, vômitos, incapacidade de andar sem apoio e diplopia. Exame: nistagmo que muda de direção conforme o olhar, dismetria direita e paresia facial discreta. PA 172/98 mmHg. Qual é a prioridade diagnóstica?",
    "options": [
      "(A) Vertigem posicional paroxística benigna; realizar manobra de Epley e liberar",
      "(B) Neurite vestibular, pois a TC costuma ser normal nas primeiras horas",
      "(C) Aplicar a escala de Cincinnati e dar alta se ela for negativa",
      "(D) Observar por três dias e repetir a imagem para confirmar infarto antes de investigar",
      "(E) Suspeitar de AVC de circulação posterior e investigar com urgência"
    ],
    "correctAnswer": 4,
    "explanation": "A combinação de vertigem contínua com diplopia, ataxia incapacitante, nistagmo evocável de direção variável e sinais de pares cranianos aponta para causa central. A escala de Cincinnati pode ser negativa em AVC posterior, e TC inicial normal não o exclui. Requer imagem urgente e, conforme possibilidade de oclusão basilar, estudo vascular. Testes como HINTS só têm interpretação confiável quando realizados por examinador treinado em síndrome vestibular aguda apropriada.",
    "commentary": "(A) Incorreta. VPPB causa episódios breves posicionais, não síndrome contínua com sinais de tronco.\n\n(B) Incorreta. A presença de sinais neurológicos centrais contraria neurite isolada.\n\n(C) Incorreta. Cincinnati tem sensibilidade limitada para síndromes posteriores.\n\n(D) Incorreta. Perde janela de terapias tempo-dependentes.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "avc de circulação posterior e vertigem central"
    ],
    "tip": "Vertigem + diplopia, ataxia grave ou sinais focais = AVC posterior até prova em contrário.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-49",
    "module": "Clínica Médica",
    "text": "Uma mulher de 70 anos, hipertensa há 25 anos e com diabetes, desenvolve hemiparesia direita proporcional em face, braço e perna, sem afasia, negligência, desvio do olhar ou déficit visual. TC inicial sem sangramento. Qual síndrome etiológica e localização são mais prováveis?",
    "options": [
      "(A) Infarto cortical extenso no lobo temporal dominante",
      "(B) Lacuna de pequeno vaso na cápsula interna esquerda",
      "(C) Oclusão da artéria cerebral anterior direita",
      "(D) Infarto occipital esquerdo por oclusão da cerebral posterior",
      "(E) Hemorragia cerebelar direita com compressão do tronco"
    ],
    "correctAnswer": 1,
    "explanation": "O fenótipo motor puro sem sinais corticais é clássico de infarto lacunar, associado à doença de pequenos vasos por hipertensão e diabetes. A cápsula interna reúne fibras corticoespinais compactas, permitindo comprometimento de face, braço e perna. Isso não exclui totalmente oclusão proximal, porém a hipótese de pequeno vaso fica fortalecida. A reperfusão continua dependendo de janela e incapacidade; classificação etiológica definitiva pode requerer imagem e investigação adicional.",
    "commentary": "(A) Incorreta. Provavelmente produziria alteração de linguagem e outros sinais corticais.\n\n(C) Incorreta. Paresia crural predominante seria mais esperada.\n\n(D) Incorreta. Produziria principalmente hemianopsia homônima.\n\n(E) Incorreta. Esperaríamos cefaleia, vertigem, ataxia ou deterioração, não síndrome motora pura típica.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "avc lacunar e ausência de sinais corticais"
    ],
    "tip": "Paresia proporcional sem afasia, negligência ou hemianopsia: lembre cápsula interna e lacunar.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-50",
    "module": "Clínica Médica",
    "text": "Uma mulher de 78 anos, com palpitações há meses e sem anticoagulante, apresenta afasia e hemiplegia direita de início máximo instantâneo. ECG na emergência mostra fibrilação atrial com resposta ventricular de 98 bpm. Angiotomografia identifica oclusão de M1 esquerda. Qual mecanismo é mais provável, sem prejuízo de investigar outras etiologias?",
    "options": [
      "(A) Doença de pequenos vasos por lipo-hialinose",
      "(B) Hipoperfusão global com infarto de zona de fronteira",
      "(C) Vasculite primária do sistema nervoso central",
      "(D) Cardioembolia associada à fibrilação atrial",
      "(E) Aura migranosa com vasoespasmo prolongado"
    ],
    "correctAnswer": 3,
    "explanation": "A fibrilação atrial favorece formação de trombos no átrio esquerdo/apêndice atrial, com embolização para a circulação cerebral. Início abrupto de déficit cortical grande e oclusão proximal é compatível com mecanismo cardioembólico. A etiologia influencia prevenção secundária (anticoagulação quando segura), mas a prioridade aguda continua avaliar reperfusão e controlar riscos. ECG documentado fortalece a hipótese; pesquisa de doença carotídea e outras fontes pode ser necessária.",
    "commentary": "(A) Incorreta. Lacunas envolvem ramos perfurantes, não a típica obstrução proximal cortical.\n\n(B) Incorreta. A oclusão documentada de M1 favorece mecanismo arterial focal.\n\n(C) Incorreta. Sem sinais sistêmicos ou padrão multifocal, é menos provável do que FA documentada.\n\n(E) Incorreta. Oclusão arterial real e déficit incapacitante não são explicados por aura.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "etiologia cardioembólica e investigação"
    ],
    "tip": "FA + instalação máxima no início + déficit cortical importante = forte hipótese cardioembólica.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-51",
    "module": "Clínica Médica",
    "text": "Um homem de 62 anos apresenta afasia e fraqueza direita há 50 minutos. Glicemia 124 mg/dL. A tomografia sem contraste é descrita como “sem hemorragia, sem hipodensidade territorial estabelecida”. Qual interpretação é mais adequada?",
    "options": [
      "(A) A TC normal exclui infarto e indica investigar outro diagnóstico antes da reperfusão",
      "(B) A TC é insuficiente; toda trombólise exige RM prévia para confirmar a isquemia",
      "(C) A TC pode ser normal na fase hiperaguda; seu papel imediato é excluir hemorragia",
      "(D) A ausência de hipodensidade impede trombólise, pois não confirma o diagnóstico de AVC",
      "(E) A TC normal com déficit súbito sugere crise funcional e dispensa outras medidas"
    ],
    "correctAnswer": 2,
    "explanation": "A isquemia muito recente pode não gerar hipodensidade evidente na TC convencional. A ausência de hemorragia é decisiva para avaliar trombólise, juntamente com janela, déficit e contraindicações. Dizer “TC normal, logo sem AVC” é erro de prova. Ressonância com difusão é mais sensível para infarto precoce, mas não se deve atrasar trombólise elegível apenas para obter RM em cenário típico.",
    "commentary": "(A) Incorreta. A sensibilidade para isquemia nas primeiras horas é limitada.\n\n(B) Incorreta. RM não é pré-requisito para muitos pacientes em janela convencional.\n\n(D) Incorreta. A falta de grande infarto estabelecido é frequentemente favorável à avaliação de reperfusão.\n\n(E) Incorreta. O diagnóstico se sustenta em clínica e investigação, não em ausência de alteração inicial na TC.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "tomografia sem contraste na fase hiperaguda"
    ],
    "tip": "TC normal não exclui AVCI no início; primeiro exclua sangue, depois avalie reperfusão.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-52",
    "module": "Clínica Médica",
    "text": "Um paciente de 69 anos tem oclusão da artéria cerebral média direita na angiotomografia. A TC simples mostra sinais isquêmicos precoces em parte do território da ACM, com ASPECTS 7. O neurologista discute trombectomia. Qual interpretação do escore é correta?",
    "options": [
      "(A) Indica alterações precoces em 3 de 10 regiões e, por si só, não exclui trombectomia",
      "(B) Indica hemorragia em sete das dez regiões avaliadas e contraindica reperfusão",
      "(C) Indica núcleo isquêmico extenso, que contraindica trombectomia na janela precoce",
      "(D) Equivale à NIHSS e quantifica o déficit neurológico de forma padronizada",
      "(E) Corresponde a acometimento de 70% do território da artéria cerebral média"
    ],
    "correctAnswer": 0,
    "explanation": "O ASPECTS começa em 10 e subtrai um ponto para cada uma das dez regiões do território de ACM com sinais isquêmicos precoces. Escore 7 indica três regiões envolvidas, não 70% exatos do volume cerebral. A seleção para trombectomia considera localização da oclusão, tempo, independência prévia e imagem. Diretrizes 2026 ampliaram o tratamento em alguns núcleos maiores; ASPECTS não deve ser interpretado isoladamente.",
    "commentary": "(B) Incorreta. A escala avalia alterações isquêmicas precoces, não hemorragia.\n\n(C) Incorreta. O escore deve ser contextualizado com oclusão, janela e outros critérios.\n\n(D) Incorreta. NIHSS é clínica; ASPECTS é radiológica.\n\n(E) Incorreta. É pontuação regional, não medida percentual do volume.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "aspects e extensão de isquemia"
    ],
    "tip": "ASPECTS: 10 é melhor; quanto menor, maior a extensão de lesão precoce em regiões da ACM.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-53",
    "module": "Clínica Médica",
    "text": "Uma mulher de 67 anos chega 2 horas após início de hemiplegia esquerda, desvio do olhar e negligência. TC sem contraste não mostra hemorragia. NIHSS 17. Há disponibilidade de angiotomografia imediata sem atrasar a trombólise. Qual a melhor estratégia de imagem?",
    "options": [
      "(A) RM de encéfalo isolada, que dispensa avaliação vascular por ter maior sensibilidade",
      "(B) Aguardar a creatinina antes da angiotomografia, mesmo que isso atrase a reperfusão",
      "(C) Doppler de carótidas como exame vascular único na sala de emergência",
      "(D) AAS e prevenção secundária, dispensando imagem vascular pela idade avançada",
      "(E) Angiotomografia de cabeça e pescoço sem atrasar a decisão sobre trombólise"
    ],
    "correctAnswer": 4,
    "explanation": "Déficit cortical grave sugere oclusão proximal de grande vaso, cuja identificação por angiotomografia direciona trombectomia. A avaliação vascular deve ocorrer rapidamente, sem atrasar trombólise endovenosa elegível. A TC simples exclui sangramento, mas não esclarece com segurança o ponto de oclusão; estudos de perfusão são reservados a indicações específicas de seleção tardia ou incerteza.",
    "commentary": "(A) Incorreta. Pode atrasar detecção de oclusão tratável e não é o fluxo preferencial em emergência típica.\n\n(B) Incorreta. Em candidato com forte suspeita de oclusão, não se recomenda atraso sistemático por creatinina, ponderando riscos.\n\n(C) Incorreta. Não detecta adequadamente todas as oclusões intracranianas proximais.\n\n(D) Incorreta. Idade isolada não exclui reperfusão e não substitui estudo vascular.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "angiotomografia para pesquisar oclusão de grande vaso"
    ],
    "tip": "Suspeita clínica de grande vaso = TC sem contraste + angiotomografia, sem atrasar trombolítico se elegível.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-54",
    "module": "Clínica Médica",
    "text": "Um homem de 58 anos chega 11 horas após a última vez bem, com NIHSS 14 e oclusão de M1 esquerda. A TC de perfusão identifica pequeno núcleo de tecido irreversivelmente lesado e área extensa hipoperfundida potencialmente recuperável. Qual é a implicação clínica principal?",
    "options": [
      "(A) Toda área hipoperfundida corresponde a infarto irreversível e contraindica reperfusão",
      "(B) Há tecido potencialmente salvável, o que pode sustentar trombectomia em janela estendida",
      "(C) O mismatch indica hemorragia ativa, e a reperfusão deve ser contraindicada",
      "(D) A perfusão dispensa identificar o vaso ocluído para indicar a trombectomia",
      "(E) O mismatch autoriza trombólise convencional, independentemente do tempo e de contraindicações"
    ],
    "correctAnswer": 1,
    "explanation": "Núcleo isquêmico (“core”) corresponde à área de lesão grave presumivelmente estabelecida; penumbra é tecido hipoperfundido ameaçado, mas potencialmente viável após reperfusão. A discrepância entre eles (mismatch), associada a critérios clínicos e anatômicos, permite selecionar pacientes para trombectomia além de 6 horas e, em protocolos específicos, para trombólise avançada. Não basta um número isolado de perfusão; é preciso considerar oclusão arterial, volume, imagem e risco.",
    "commentary": "(A) Incorreta. Hipoperfusão pode conter penumbra recuperável.\n\n(C) Incorreta. É conceito de perfusão de isquemia, não diagnóstico de sangue.\n\n(D) Incorreta. Anatomia vascular é central à decisão de trombectomia.\n\n(E) Incorreta. A seleção tardia depende de critérios específicos; não é regra universal.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "perfusão e distinção entre núcleo e penumbra"
    ],
    "tip": "Na janela tardia, a pergunta muda de “quantas horas?” para “ainda há cérebro salvável?”",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-55",
    "module": "Clínica Médica",
    "text": "Um homem de 60 anos chega 2h20 após início de hemiparesia direita e afasia, NIHSS 12. Glicemia 136 mg/dL, PA 162/88 mmHg, plaquetas conhecidas normais, sem anticoagulante ou sangramento; TC simples sem hemorragia e sem sinais extensos de infarto. Qual é a conduta farmacológica mais adequada no fluxo de AVCI agudo do SUS?",
    "options": [
      "(A) Repetir a TC em 24 horas para delimitar o infarto antes de qualquer terapia específica",
      "(B) Heparina não fracionada em dose plena para favorecer a recanalização da ACM",
      "(C) AAS em dose de ataque antes da alteplase para aumentar a recanalização",
      "(D) Alteplase intravenosa conforme o PCDT, após checar os critérios",
      "(E) Não trombolisar, pois a TC ainda não mostra hipodensidade que confirme o infarto"
    ],
    "correctAnswer": 3,
    "explanation": "O PCDT do Ministério da Saúde, aprovado em 2023 e disponibilizado em 2025, prevê alteplase IV em pacientes elegíveis até 4h30, com TC sem hemorragia e ausência de contraindicações. O benefício é tempo-dependente. Embora a diretriz AHA/ASA 2026 também admita tenecteplase 0,25 mg/kg, o fármaco explicitamente listado no PCDT nacional consultado é alteplase; não se deve confundir inovação internacional com incorporação automática ao SUS.",
    "commentary": "(A) Incorreta. Atrasaria tratamento com maior benefício precoce.\n\n(B) Incorreta. Heparina não substitui trombólise e não é reperfusão de primeira linha.\n\n(C) Incorreta. Antiagregação não substitui reperfusão e aumenta risco se associada precocemente à fibrinólise.\n\n(E) Incorreta. TC normal nas primeiras horas é comum no AVCI.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "trombólise em até 4,5 horas"
    ],
    "tip": "AVCI incapacitante + <4h30 + TC sem sangue + sem contraindicações = avalie alteplase imediatamente no PCDT SUS.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-56",
    "module": "Clínica Médica",
    "text": "Uma mulher de 73 anos, com AVCI incapacitante há 2h10, tem PA 194/112 mmHg na triagem. TC sem hemorragia; demais critérios favorecem alteplase. Após medicação IV titulável, PA estabiliza em 176/98 mmHg. Qual é a melhor decisão?",
    "options": [
      "(A) Infundir alteplase imediatamente, pois o atraso para controlar a PA reduz o benefício",
      "(B) Contraindicar a trombólise de forma definitiva pela PA de 194/112 mmHg na triagem",
      "(C) Trombolisar, mantendo a PA abaixo de 185/110 mmHg com monitorização rigorosa",
      "(D) Reduzir a PAS para menos de 120 mmHg antes do bolus para minimizar sangramento",
      "(E) Usar anti-hipertensivo oral de ação lenta e reavaliar a trombólise no dia seguinte"
    ],
    "correctAnswer": 2,
    "explanation": "Para trombólise, é necessário controlar a PA antes da infusão, em geral abaixo de 185/110 mmHg. Hipertensão inicialmente elevada não impede automaticamente reperfusão se puder ser corrigida com segurança; pressão persistente acima dos limites apesar de tratamento adequado impede trombólise endovenosa naquele momento. Após fibrinólise, a meta usual é manter PA ≤180/105 mmHg nas primeiras 24 horas, evitando hipotensão e quedas bruscas.",
    "commentary": "(A) Incorreta. PA acima do limiar aumenta risco de hemorragia associada.\n\n(B) Incorreta. Pode ser elegível após controle pressórico sustentado.\n\n(D) Incorreta. Queda excessiva pode reduzir perfusão da penumbra.\n\n(E) Incorreta. Não atende à urgência da janela terapêutica.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "controle da pressão arterial antes da trombólise"
    ],
    "tip": "185/110 antes; 180/105 depois. Hipertensão corrigível não é exclusão automática.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-57",
    "module": "Clínica Médica",
    "text": "Um paciente de 80 kg, com AVCI incapacitante há 2 horas e elegível para trombólise, receberá alteplase IV conforme o PCDT do SUS. Qual esquema corresponde à dose correta?",
    "options": [
      "(A) 72 mg: 7,2 mg em bolus e 64,8 mg em infusão por 60 minutos",
      "(B) 80 mg: dose total em bolus intravenoso único",
      "(C) 72 mg: dose total em infusão contínua de 10 minutos",
      "(D) 64 mg: 6,4 mg em bolus e 57,6 mg em infusão por 60 minutos",
      "(E) 90 mg: 9 mg em bolus e 81 mg em infusão por 60 minutos"
    ],
    "correctAnswer": 0,
    "explanation": "A dose de alteplase para AVCI agudo é 0,9 mg/kg, máxima de 90 mg; administra-se 10% em bolus IV inicial e os outros 90% durante 60 minutos. Para 80 kg: 0,9 × 80 = 72 mg; bolus = 7,2 mg; infusão = 64,8 mg. Esse cálculo é frequentemente cobrado e deve estar integrado à checagem de contraindicações, peso correto e monitorização.",
    "commentary": "(B) Incorreta. Confunde mg/kg com dose e a via de administração.\n\n(C) Incorreta. Não corresponde ao esquema padrão de alteplase.\n\n(D) Incorreta. A dose total está subestimada para 80 kg.\n\n(E) Incorreta. 90 mg é teto, não dose fixa de todos os pacientes.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "cálculo de dose da alteplase"
    ],
    "tip": "Faça a conta: 0,9 mg/kg (máximo 90), depois 10% bolus + 90% em 1 hora.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-58",
    "module": "Clínica Médica",
    "text": "Em discussão de protocolo institucional, o neurologista compara o PCDT brasileiro de AVCI aprovado em 2023 com a diretriz AHA/ASA de janeiro de 2026. Uma paciente de 70 kg chega em janela de 2 horas, com déficit incapacitante e TC sem hemorragia. Qual afirmação está correta quanto à tenecteplase?",
    "options": [
      "(A) A AHA/ASA 2026 recomenda tenecteplase 0,4 mg/kg como opção preferencial à alteplase",
      "(B) A tenecteplase é feita em infusão de 60 minutos, com 10% em bolus, como a alteplase",
      "(C) O PCDT brasileiro determina tenecteplase em substituição à alteplase para todos",
      "(D) A dose de tenecteplase para 70 kg é 70 mg, em bolus intravenoso único",
      "(E) A AHA/ASA 2026 aceita tenecteplase 0,25 mg/kg (máx. 25 mg); o PCDT lista a alteplase"
    ],
    "correctAnswer": 4,
    "explanation": "A AHA/ASA 2026 elevou a tenecteplase 0,25 mg/kg (dose única em bolus, máximo 25 mg) ao mesmo patamar de escolha da alteplase 0,9 mg/kg em pacientes elegíveis até 4,5 horas. Para 70 kg, a dose de tenecteplase seria 17,5 mg. O PCDT do SUS aprovado em 2023 discute evidências sobre tenecteplase, porém a seção de fármaco e esquema de administração consultada elenca alteplase; adoção e financiamento de tenecteplase dependem da regulamentação e do protocolo local, e não devem ser presumidos.",
    "commentary": "(A) Incorreta. A dose de 0,4 mg/kg não é recomendada, por ausência de benefício e possível dano.\n\n(B) Incorreta. Sua vantagem operacional é o bolus único.\n\n(C) Incorreta. O documento federal consultado lista alteplase no esquema terapêutico.\n\n(D) Incorreta. A dose recomendada internacionalmente é 0,25 mg/kg, não 1 mg/kg.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026); PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "tenecteplase: avanço internacional versus pcdt brasileiro"
    ],
    "tip": "Faça duas perguntas: “o que a evidência de 2026 recomenda?” e “o que o PCDT do SUS efetivamente prevê?”",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-59",
    "module": "Clínica Médica",
    "text": "Uma mulher de 75 anos com fibrilação atrial usa varfarina e apresenta AVCI incapacitante há 2h30. TC não mostra sangramento, PA 152/84 mmHg, plaquetas 190.000/µL; o INR colhido na emergência é 2,3. Qual é a melhor conduta quanto à alteplase?",
    "options": [
      "(A) Trombolisar, pois a TC sem sangramento afasta o risco hemorrágico da varfarina",
      "(B) Não trombolisar pelo INR de 2,3 e avaliar trombectomia se houver oclusão elegível",
      "(C) Trombolisar sem considerar o INR, pois o paciente ainda está dentro da janela",
      "(D) Reverter com vitamina K e trombolisar rotineiramente após 10 minutos",
      "(E) Usar dose maior de alteplase para compensar o efeito da anticoagulação"
    ],
    "correctAnswer": 1,
    "explanation": "No PCDT nacional, INR acima de 1,7 em paciente anticoagulado com antagonista da vitamina K é contraindicação à trombólise IV. Diferentemente do paciente sem suspeita de coagulopatia, quem usa varfarina necessita aguardar o INR. O fato de não haver sangramento na TC não elimina risco hemorrágico do fibrinolítico. A contraindicação à trombólise não representa contraindicação automática à trombectomia, cuja seleção é própria.",
    "commentary": "(A) Incorreta. Coagulopatia relevante permanece apesar da TC sem sangramento.\n\n(C) Incorreta. O valor de INR é decisivo nesta situação.\n\n(D) Incorreta. Reversão para permitir fibrinólise não é estratégia padrão simples e segura.\n\n(E) Incorreta. Aumentaria gravemente o risco sem respaldo.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "varfarina e inr na elegibilidade à trombólise"
    ],
    "tip": "Varfarina: confira INR. >1,7 afasta trombólise IV convencional; não afasta automaticamente trombectomia.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-60",
    "module": "Clínica Médica",
    "text": "Um homem de 69 anos em uso de apixabana por fibrilação atrial tomou a última dose há 5 horas. Chega com afasia incapacitante, última vez bem há 2 horas; TC sem sangue, PA 154/86 mmHg, função renal preservada. Não há dosagem específica de atividade anti-Xa disponível e os testes usuais não excluem efeito do anticoagulante. Qual a conduta mais adequada?",
    "options": [
      "(A) Trombolisar, pois o INR de rotina costuma ser normal em usuários de apixabana",
      "(B) Administrar alteplase em dose reduzida para compensar o efeito da apixabana",
      "(C) Contraindicar também a trombectomia pelo uso de anticoagulante oral direto",
      "(D) Evitar trombólise IV e pesquisar oclusão de grande vaso para trombectomia",
      "(E) Aguardar 48 horas, sem imagem vascular, e reavaliar o déficit após a eliminação do fármaco"
    ],
    "correctAnswer": 3,
    "explanation": "O uso recente de anticoagulante oral direto, como apixabana, coloca risco de sangramento com trombólise. O PCDT brasileiro trata uso nas últimas 48 horas como restrição quando não há demonstração confiável de ausência de atividade anticoagulante; ensaios específicos podem modificar a decisão, mas PT/INR normais isolados não garantem ausência de efeito dos inibidores de Xa. A trombectomia em oclusão proximal elegível permanece possível, mesmo quando fibrinólise está contraindicada.",
    "commentary": "(A) Incorreta. INR não quantifica adequadamente atividade anti-Xa dos DOACs.\n\n(B) Incorreta. Não é esquema validado e não elimina risco de hemorragia.\n\n(C) Incorreta. As decisões de trombólise e trombectomia são diferentes.\n\n(E) Incorreta. Pode perder janela de terapia endovascular.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "anticoagulantes diretos e janela de 48 horas"
    ],
    "tip": "DOAC recente: pergunte última dose, rim e teste específico. INR normal não “libera” automaticamente apixabana.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-61",
    "module": "Clínica Médica",
    "text": "Uma mulher de 58 anos chega 80 minutos após início de parestesia leve na mão direita. NIHSS 1, sem limitação motora, de linguagem ou de atividades essenciais. TC exclui hemorragia e angiotomografia não identifica oclusão de grande vaso. Não usa anticoagulante e a hipótese é AVCI não cardioembólico menor. Qual conduta é mais alinhada à diretriz AHA/ASA 2026?",
    "options": [
      "(A) Trombolisar, pois todo AVC com NIHSS 0–2 se beneficia de reperfusão precoce",
      "(B) Anticoagular com heparina intravenosa para prevenir a progressão do infarto",
      "(C) Não trombolisar e considerar dupla antiagregação de curta duração",
      "(D) Repetir a TC para confirmar a lesão antes de iniciar qualquer prevenção secundária",
      "(E) Tratar como aura migranosa, já que há apenas parestesia sem déficit motor"
    ],
    "correctAnswer": 2,
    "explanation": "Ensaios não demonstraram benefício consistente da trombólise em AVC leve não incapacitante, com risco hemorrágico. A diretriz AHA/ASA 2026 privilegia antiagregação, frequentemente dupla por curto período em AVC menor não cardioembólico elegível, iniciada após excluir hemorragia e considerando riscos. A decisão distingue déficit não incapacitante de sintomas leves porém incapacitantes, para os quais o raciocínio é diferente.",
    "commentary": "(A) Incorreta. Falta benefício demonstrado em déficits não incapacitantes.\n\n(B) Incorreta. Não é tratamento inicial padrão para AVC menor não cardioembólico.\n\n(D) Incorreta. A TC inicial sem sangramento permite planejar antiagregação conforme elegibilidade.\n\n(E) Incorreta. Sintoma focal súbito em paciente vascular exige investigação de AVC.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "déficit leve não incapacitante: escolha de tratamento"
    ],
    "tip": "NIHSS baixa: primeiro classifique INCAPACITANTE vs NÃO INCAPACITANTE; não use a nota isoladamente.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-62",
    "module": "Clínica Médica",
    "text": "Um homem de 56 anos foi visto normal às 23h e acordou às 6h com hemiparesia direita e afasia. Às 7h, a RM mostra lesão aguda em difusão (DWI positiva), sem alteração correspondente em FLAIR, compatível com descompasso DWI–FLAIR. Não há sangue nem contraindicações. Qual interpretação se alinha às recomendações internacionais atuais?",
    "options": [
      "(A) O mismatch pode selecionar paciente com início desconhecido para trombólise em protocolo",
      "(B) Trombolisar todos que acordam com déficit, mesmo sem imagem avançada",
      "(C) Excluir qualquer reperfusão, pois o início desconhecido impede calcular a janela",
      "(D) O FLAIR negativo indica que não ocorreu infarto e afasta o diagnóstico de AVC",
      "(E) O mismatch DWI–FLAIR indica sangramento e contraindica a reperfusão"
    ],
    "correctAnswer": 0,
    "explanation": "O descompasso DWI positiva/FLAIR negativa é marcador indireto de lesão potencialmente recente. A diretriz AHA/ASA 2026 admite trombólise selecionada em AVC ao despertar ou início desconhecido com critérios avançados de imagem; há também seleção por perfusão em janelas específicas. Isso não significa que qualquer AVC ao despertar possa receber trombolítico, nem que a hora de despertar substitua a última vez bem. O PCDT brasileiro contém critérios próprios e a oferta deve respeitar habilitação e rede.",
    "commentary": "(B) Incorreta. O horário de acordar não define início e não dispensa seleção.\n\n(C) Incorreta. Há estratégias por imagem para casos selecionados.\n\n(D) Incorreta. DWI positiva documenta lesão aguda apesar de ausência de sinal FLAIR.\n\n(E) Incorreta. É ferramenta de avaliação temporal da isquemia, não de hemorragia.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "avc ao despertar: mismatch dwi–flair"
    ],
    "tip": "Wake-up: último momento bem costuma estar fora de 4,5h; a imagem avançada pode reabrir uma janela de elegibilidade selecionada.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-63",
    "module": "Clínica Médica",
    "text": "Um homem de 72 anos, independente previamente (mRS 0), chega 3 horas após início de hemiplegia esquerda e negligência. NIHSS 18. TC sem hemorragia, ASPECTS 8; angiotomografia confirma oclusão de M1 direita. Já foi iniciada trombólise IV por elegibilidade. Qual é a próxima medida terapêutica?",
    "options": [
      "(A) Aguardar duas horas para ver se a alteplase recanaliza antes de indicar trombectomia",
      "(B) Não indicar trombectomia, pois ela não deve ser associada a quem já recebeu alteplase",
      "(C) Endarterectomia carotídea de emergência para restabelecer o fluxo na ACM",
      "(D) Punção lombar para afastar hemorragia subaracnóidea antes do cateterismo",
      "(E) Trombectomia mecânica imediata, sem aguardar a resposta à trombólise"
    ],
    "correctAnswer": 4,
    "explanation": "Oclusão proximal de ACM (M1) com déficit incapacitante, boa funcionalidade prévia e pequeno núcleo estabelecido na janela precoce é indicação clássica de trombectomia endovascular. O PCDT do SUS recomenda trombectomia para oclusões de carótida intracraniana/M1 em janela apropriada, e a AHA/ASA 2026 reforça a recomendação. Se houve trombólise elegível, não se deve aguardar melhora clínica para começar a terapia endovascular: reperfusão rápida melhora desfechos.",
    "commentary": "(A) Incorreta. Atraso reduz benefício da trombectomia.\n\n(B) Incorreta. A estratégia combinada é recomendada em elegíveis.\n\n(C) Incorreta. Não é procedimento de escolha para oclusão intracraniana M1.\n\n(D) Incorreta. Não é necessária nem apropriada ao cenário.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023); 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "trombectomia em oclusão proximal na janela precoce"
    ],
    "tip": "M1/ACI ocluída + NIHSS elevada + ASPECTS favorável = trombectomia. Trombólise não substitui retirar o trombo.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-64",
    "module": "Clínica Médica",
    "text": "Uma mulher de 64 anos, independente antes do evento, é encontrada com afasia e hemiplegia direita. Último momento bem às 23h; avaliada às 12h (13 horas depois), NIHSS 17. Angiotomografia: oclusão da carótida interna terminal esquerda. Perfusão: núcleo pequeno e grande área de tecido em risco. Qual conduta é mais adequada?",
    "options": [
      "(A) Excluir reperfusão, pois já se passaram mais de 4,5 horas do último momento bem",
      "(B) Trombectomia mecânica com seleção por imagem, mesmo após 6 horas",
      "(C) AAS isolado, pois a janela para qualquer reperfusão já foi ultrapassada",
      "(D) Alteplase convencional, sem seleção adicional, 13 horas após o último momento bem",
      "(E) Hemicraniectomia profilática antes de avaliar a possibilidade de recanalização"
    ],
    "correctAnswer": 1,
    "explanation": "A trombectomia não está limitada às seis primeiras horas. O PCDT brasileiro recomenda o procedimento até 24 horas em pacientes selecionados por critérios clínicos, anatômicos e de imagem; a AHA/ASA 2026 também respalda janelas tardias. O alvo é salvar penumbra e restaurar fluxo em oclusão de grande vaso. A hora isolada não basta, e o procedimento exige centro habilitado e equipe endovascular.",
    "commentary": "(A) Incorreta. A janela da trombólise convencional não determina a janela da trombectomia.\n\n(C) Incorreta. Tratamento clínico pode ser insuficiente diante de oclusão elegível.\n\n(D) Incorreta. Fora da janela IV convencional; seleção tardia para trombólise é específica.\n\n(E) Incorreta. A principal opção terapêutica com tecido salvável é reperfusão.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "trombectomia tardia de 6 a 24 horas"
    ],
    "tip": "Até 24h não significa “tarde demais” para todo paciente; procure oclusão proximal e mismatch favorável.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-65",
    "module": "Clínica Médica",
    "text": "Um homem de 61 anos, previamente mRS 0, chega 4 horas após início de AVCI grave, NIHSS 20. Angiotomografia: oclusão de M1 esquerda; TC: ASPECTS 4, sem grande efeito de massa. O plantonista considera o núcleo extenso motivo absoluto para negar intervenção. À luz da AHA/ASA 2026, qual conclusão é correta?",
    "options": [
      "(A) ASPECTS abaixo de 6 contraindica trombectomia de forma absoluta nas diretrizes atuais",
      "(B) A extensão do núcleo dispensa avaliar a funcionalidade prévia na decisão",
      "(C) A trombectomia está indicada em qualquer ASPECTS, mesmo com efeito de massa",
      "(D) O ASPECTS 4 não exclui trombectomia em pacientes selecionados com oclusão proximal",
      "(E) AAS em dose alta tem taxa de recanalização equivalente à trombectomia de M1"
    ],
    "correctAnswer": 3,
    "explanation": "Ensaios recentes expandiram a evidência para trombectomia em pacientes com core maior, inclusive ASPECTS 3–5 sob critérios clínicos, anatômicos e temporais. A AHA/ASA 2026 recomenda EVT em oclusão anterior proximal com ASPECTS 3–10 na janela 0–6 horas em perfis elegíveis, não apenas ASPECTS 6–10. Contudo, isso não significa benefício universal com qualquer volume, dano estabelecido ou efeito de massa. O PCDT brasileiro 2023 é anterior a parte dessa expansão; trata-se de atualização internacional que pode exigir adequação institucional.",
    "commentary": "(A) Incorreta. A atualização 2026 incorpora evidência de benefício em pacientes selecionados.\n\n(B) Incorreta. mRS prévia e outros critérios continuam importando.\n\n(C) Incorreta. Há seleção criteriosa; isquemia devastadora ou edema importante alteram risco-benefício.\n\n(E) Incorreta. Antiagregação não remove mecanicamente um trombo proximal.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "trombectomia em núcleo isquêmico maior"
    ],
    "tip": "Não decore “ASPECTS ≤5 = proibido”. A evidência de trombectomia mudou; use critérios atuais e equipe especializada.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-66",
    "module": "Clínica Médica",
    "text": "Um homem de 65 anos chega 9 horas após início de diplopia, disartria e tetraparesia progressiva. NIHSS 22, mRS prévio 0; angiotomografia mostra oclusão da artéria basilar, e TC/RM sugerem lesão isquêmica posterior limitada (PC-ASPECTS 8). Qual conduta é recomendada pela AHA/ASA 2026 em centro capacitado?",
    "options": [
      "(A) Descartar trombectomia, pois a janela de 6 horas para oclusão basilar foi ultrapassada",
      "(B) Manobra de reposicionamento, pois diplopia e tontura sugerem causa vestibular periférica",
      "(C) Trombectomia mecânica urgente, possível até 24 horas na oclusão basilar elegível",
      "(D) Alteplase IV convencional na nona hora, sem necessidade de seleção adicional",
      "(E) Aguardar hipodensidade cerebelar extensa na imagem antes de definir o tratamento"
    ],
    "correctAnswer": 2,
    "explanation": "AVC basilar pode provocar coma, tetraplegia e morte. A diretriz AHA/ASA 2026 confere recomendação forte à trombectomia em adultos selecionados com oclusão basilar, NIHSS ≥10, mRS basal 0–1 e PC-ASPECTS ≥6, até 24 horas. Esse recorte evita extrapolar benefício para toda alteração vascular posterior. O PCDT brasileiro 2023 privilegia recomendações de trombectomia anterior, portanto é importante discriminar a fonte e o contexto assistencial.",
    "commentary": "(A) Incorreta. Oclusão basilar em selecionados pode ser tratada até 24h pela AHA/ASA 2026.\n\n(B) Incorreta. Diplopia e tetraparesia indicam tronco encefálico, não VPPB.\n\n(D) Incorreta. A janela IV convencional é diferente; decisões tardias exigem critérios.\n\n(E) Incorreta. Isso perde tecido recuperável e aumenta dano.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "trombectomia na oclusão da artéria basilar"
    ],
    "tip": "Basilar ocluída, déficit grave e pouca lesão irreversível = janela endovascular pode chegar a 24h.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-67",
    "module": "Clínica Médica",
    "text": "Uma mulher de 60 anos apresenta AVCI incapacitante há 1h40, NIHSS 16; TC sem sangue e angiotomografia confirma oclusão de carótida intracraniana. Está elegível tanto para alteplase quanto para trombectomia e o centro tem equipe endovascular de prontidão. Qual estratégia é mais adequada?",
    "options": [
      "(A) Iniciar alteplase e seguir direto para trombectomia, sem esperar o efeito do fibrinolítico",
      "(B) Omitir a alteplase, já que a trombectomia está disponível de imediato",
      "(C) Iniciar alteplase e aguardar 90 minutos para decidir sobre a trombectomia",
      "(D) Heparina em dose plena antes da trombectomia para prevenir novos êmbolos",
      "(E) Cancelar a trombectomia, pois a TC inicial não mostra sinais de isquemia"
    ],
    "correctAnswer": 0,
    "explanation": "A AHA/ASA 2026 não recomenda omitir trombólise IV elegível apenas para “ir direto ao cateter”, nem adiar EVT para observar a resposta. As intervenções podem ser complementares: o fibrinolítico pode recanalizar ou favorecer reperfusão, e a trombectomia trata a oclusão proximal persistente. Tempo, segurança e fluxo assistencial são determinantes. O PCDT brasileiro também reconhece ambas como modalidades de reperfusão em selecionados.",
    "commentary": "(B) Incorreta. Não é estratégia geral recomendada quando IVT é elegível.\n\n(C) Incorreta. Atraso pode piorar desfechos.\n\n(D) Incorreta. Não é ponte rotineira e eleva risco de sangramento.\n\n(E) Incorreta. TC sem sangue pode ser compatível com AVCI muito recente.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "trombólise-ponte antes da trombectomia"
    ],
    "tip": "Quando ambos são indicados, faça as duas etapas em paralelo no fluxo: bolus sem atraso, cateter sem espera.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-68",
    "module": "Clínica Médica",
    "text": "Um homem de 76 anos chega 10 horas após o início de hemiparesia leve, sem oclusão de grande vaso elegível, e não receberá trombólise ou trombectomia. PA 208/112 mmHg, está estável, sem dor torácica, dissecção, edema agudo de pulmão ou outra emergência hipertensiva associada. Qual conduta pressórica inicial é mais apropriada?",
    "options": [
      "(A) Reduzir a PAS rapidamente para 110 mmHg com nitroprussiato em infusão",
      "(B) Não tratar nenhum valor de PA, nem mesmo acima de 240/140 mmHg",
      "(C) Manter a PA abaixo de 180/105 mmHg, como se faz após trombólise",
      "(D) Diurético de alça em dose alta para reduzir rapidamente a pressão arterial",
      "(E) Hipertensão permissiva: evitar queda rápida e tratar só valores muito elevados"
    ],
    "correctAnswer": 4,
    "explanation": "No AVCI sem reperfusão, a autorregulação cerebral está prejudicada e a pressão pode sustentar fluxo colateral à penumbra. Em geral, aceita-se hipertensão permissiva se PA não supera cerca de 220/120 mmHg e não há outra condição que demande controle urgente. Se níveis forem maiores, costuma-se considerar redução discreta, aproximadamente 15% nas primeiras 24 horas, individualizada. Uma queda intensa para níveis normais pode agravar isquemia.",
    "commentary": "(A) Incorreta. Queda acentuada pode diminuir perfusão cerebral.\n\n(B) Incorreta. Hipertensão muito grave e comorbidades podem requerer controle.\n\n(C) Incorreta. As metas diferem conforme recebimento de reperfusão.\n\n(D) Incorreta. Não é rotina para controlar PA no AVCI e pode piorar volemia/perfusão.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026); PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "hipertensão permissiva no avci sem reperfusão"
    ],
    "tip": "Sem reperfusão: não “normalize” a PA na emergência; pense em limiar 220/120 e perfusão colateral.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-69",
    "module": "Clínica Médica",
    "text": "Uma mulher de 69 anos recebeu alteplase por AVCI e, em seguida, trombectomia com reperfusão bem-sucedida. Está estável, PA 168/94 mmHg. Um membro da equipe propõe reduzir PAS intensivamente para 115 mmHg durante as primeiras horas porque “quanto menor, melhor”. Qual orientação é a melhor?",
    "options": [
      "(A) Buscar PAS menor que 120 mmHg em todos os pacientes com reperfusão completa",
      "(B) Manter PA ≤180/105 mmHg, sem buscar PAS <140 mmHg de rotina",
      "(C) Tolerar PAS acima de 220 mmHg, já que a artéria foi recanalizada",
      "(D) Repetir a trombólise se a PA ultrapassar 180 mmHg nas primeiras horas",
      "(E) Suspender a monitorização da PA após a recanalização bem-sucedida"
    ],
    "correctAnswer": 1,
    "explanation": "Após IVT, o controle pressórico é fundamental para reduzir risco de hemorragia, mas redução intensa pode ser nociva. A AHA/ASA 2026 destaca que perseguir PAS <140 mmHg sistematicamente após trombólise ou trombectomia, mesmo com recanalização completa, não melhora desfechos e pode causar dano. A meta usual após trombólise é até 180/105 mmHg nas primeiras 24h, com estabilidade hemodinâmica e individualização conforme cenário.",
    "commentary": "(A) Incorreta. Pode reduzir perfusão e não melhora desfechos.\n\n(C) Incorreta. PA muito alta aumenta risco hemorrágico e exige abordagem.\n\n(D) Incorreta. Não é tratamento de hipertensão e eleva risco hemorrágico.\n\n(E) Incorreta. A vigilância é necessária no período pós-tratamento.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "metas de pressão após trombólise/trombectomia"
    ],
    "tip": "Pós-reperfusão ≠ “PA mais baixa possível”. Evite extremos; 180/105 é referência usual após IVT.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-70",
    "module": "Clínica Médica",
    "text": "Um homem de 61 anos recebeu alteplase IV há 4 horas por AVCI. Evolui com melhora de NIHSS 13 para 3; não apresenta piora ou sangramento evidente. O plantonista sugere iniciar AAS agora para evitar reoclusão. Qual conduta é mais adequada?",
    "options": [
      "(A) Iniciar AAS agora, já que a melhora da NIHSS indica baixo risco de sangramento",
      "(B) Associar AAS e clopidogrel nas primeiras seis horas após a trombólise",
      "(C) Iniciar heparina intravenosa em dose plena para prevenir a reoclusão",
      "(D) Adiar antiagregantes por 24 horas e repetir a neuroimagem antes de iniciá-los",
      "(E) Não iniciar nenhuma prevenção secundária durante toda a internação"
    ],
    "correctAnswer": 3,
    "explanation": "A administração precoce de AAS durante ou logo após fibrinólise aumenta risco de sangramento e não demonstrou melhora clínica. Em pacientes trombolisados, costuma-se aguardar pelo menos 24 horas e verificar imagem sem hemorragia antes de iniciar antiagregação, salvo circunstâncias excepcionais avaliadas por equipe especializada. A melhora de NIHSS não afasta transformação hemorrágica. A prevenção secundária deve ser planejada após estabilização e definição etiológica.",
    "commentary": "(A) Incorreta. Melhora clínica não elimina risco hemorrágico precoce.\n\n(B) Incorreta. A dupla antiagregação precoce após IVT não é rotina e aumenta risco.\n\n(C) Incorreta. Anticoagulação imediata após trombólise aumenta risco hemorrágico.\n\n(E) Incorreta. A prevenção deve ser instituída assim que for seguro e indicado.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "antiagregação nas primeiras 24 horas após trombólise"
    ],
    "tip": "Alteplase hoje: sem AAS/heparina de rotina por 24h; confira a imagem antes de iniciar antitrombótico.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-71",
    "module": "Clínica Médica",
    "text": "Uma mulher de 62 anos apresenta AVCI menor não cardioembólico, NIHSS 2, sem déficit incapacitante e sem trombólise; TC excluiu sangue. O evento ocorreu há 8 horas e não há alto risco hemorrágico nem indicação de anticoagulação. Qual estratégia é recomendada para reduzir recorrência precoce?",
    "options": [
      "(A) AAS e clopidogrel por tempo indefinido, para reduzir a recorrência a longo prazo",
      "(B) Varfarina, mesmo sem fibrilação atrial ou outra fonte cardioembólica",
      "(C) AAS e clopidogrel por cerca de 21 dias, depois antiagregante único",
      "(D) Heparina plena por 21 dias, seguida de suspensão do antitrombótico",
      "(E) Nenhum antitrombótico, já que a NIHSS baixa indica pequeno risco de recorrência"
    ],
    "correctAnswer": 2,
    "explanation": "No AVC isquêmico menor não cardioembólico elegível, a dupla antiagregação de curta duração (tipicamente AAS + clopidogrel por 21 dias) reduz recorrência inicial. A associação prolongada aumenta sangramento e não deve ser mantida indefinidamente. Em quem recebeu trombólise, as regras de início diferem; neste caso não houve IVT. A escolha exige confirmar mecanismo não cardioembólico, ausência de hemorragia e baixo risco de sangramento.",
    "commentary": "(A) Incorreta. O benefício é sobretudo precoce e o uso prolongado eleva sangramento.\n\n(B) Incorreta. Anticoagulação não é primeira escolha para evento não cardioembólico.\n\n(D) Incorreta. Não substitui antiagregação indicada.\n\n(E) Incorreta. O risco de recorrência existe mesmo no AVC menor.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "dupla antiagregação no avc menor não cardioembólico"
    ],
    "tip": "AVC menor não cardioembólico, sem trombólise: pense em DAPT curta, geralmente 21 dias; depois monoterapia.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-72",
    "module": "Clínica Médica",
    "text": "Um homem de 76 anos, com fibrilação atrial sem anticoagulação, apresenta AVCI de pequeno volume no córtex parietal esquerdo, NIHSS 3, sem transformação hemorrágica. Está clinicamente estável 48 horas após início. Qual é a melhor interpretação para iniciar anticoagulante oral?",
    "options": [
      "(A) Anticoagulação relativamente precoce pode ser razoável em infarto pequeno sem sangramento",
      "(B) Heparina plena intravenosa imediata em todo AVCI associado à fibrilação atrial",
      "(C) Adiar a anticoagulação oral por três meses, qualquer que seja o tamanho do infarto",
      "(D) Dupla antiagregação permanente, como alternativa equivalente à anticoagulação",
      "(E) Anticoagular de imediato também em infarto extenso com transformação hemorrágica"
    ],
    "correctAnswer": 0,
    "explanation": "A prevenção do AVC cardioembólico por FA demanda anticoagulação oral quando não há contraindicação. A decisão de quando iniciar depende do tamanho e gravidade do infarto, hemorragia, idade, comorbidades e risco embólico. Ensaios recentes e a AHA/ASA 2026 sustentam que estratégias mais precoces podem ser seguras em casos selecionados leves, sem fixar um dia único para todos. Em AVC extenso, transformação hemorrágica ou alto risco hemorrágico, costuma-se adiar e reavaliar.",
    "commentary": "(B) Incorreta. Anticoagulação plena imediata de rotina pode aumentar hemorragia sem benefício claro.\n\n(C) Incorreta. Adiar de forma fixa pode expor a recorrência embólica.\n\n(D) Incorreta. Antiagregação é inferior para prevenção cardioembólica em FA.\n\n(E) Incorreta. O risco hemorrágico impõe individualização e frequentemente adiamento.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "fibrilação atrial: tempo de anticoagulação após avc"
    ],
    "tip": "FA requer anticoagulação para prevenção; o “quando” depende de tamanho do infarto e sangramento, não de um calendário universal.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-73",
    "module": "Clínica Médica",
    "text": "Uma mulher de 80 anos, internada após AVCI com disartria e paresia facial, solicita água antes da avaliação fonoaudiológica. Está acordada, mas apresenta tosse ao tentar engolir a própria saliva. Qual é a conduta mais apropriada?",
    "options": [
      "(A) Liberar líquidos finos, pois a paciente está acordada e colaborativa",
      "(B) Liberar dieta pastosa sem teste, considerada segura na disfagia leve",
      "(C) Prescrever antibiótico profilático para prevenir pneumonia aspirativa",
      "(D) Solicitar fonoaudiologia apenas se surgirem sinais de pneumonia",
      "(E) Manter jejum oral, inclusive de medicações, até o rastreio formal de disfagia"
    ],
    "correctAnswer": 4,
    "explanation": "Disfagia pós-AVC aumenta aspiração, pneumonia e mortalidade. O PCDT brasileiro determina rastreamento de disfagia antes da primeira alimentação em todos os pacientes com AVC, tratados ou não com reperfusão. Tosse, voz molhada, disartria importante e paresia facial reforçam risco. Evitar oferecer água para “testar por conta própria”; aplicar protocolo treinado e solicitar fonoaudiologia, com via alternativa temporária quando necessária.",
    "commentary": "(A) Incorreta. Consciência preservada não garante deglutição segura.\n\n(B) Incorreta. Consistência adequada depende de avaliação específica.\n\n(C) Incorreta. Não previne pneumonia de rotina e não substitui segurança de deglutição.\n\n(D) Incorreta. Intervenção preventiva deve ocorrer precocemente.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "disfagia e prevenção de pneumonia aspirativa"
    ],
    "tip": "Antes de água, comida ou comprimido: rastrear deglutição. Tosse ao engolir = alerta de aspiração.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-74",
    "module": "Clínica Médica",
    "text": "Um homem de 73 anos com AVCI reperfundido apresenta glicemia persistente de 232 mg/dL e temperatura de 38,2°C nas primeiras 12 horas. Não há hipoxemia. A equipe propõe infusão de insulina para glicemia 90–110 mg/dL e ignorar febre até que surjam sinais infecciosos. Qual estratégia é mais adequada?",
    "options": [
      "(A) Insulina IV para glicemia de 80–100 mg/dL e observar a febre sem investigação",
      "(B) Tratar a hiperglicemia sem metas estritas e investigar e tratar a febre",
      "(C) Suspender o monitoramento da glicemia, já que a reperfusão foi realizada",
      "(D) Manter a febre sem investigação nas primeiras 48 horas, salvo sinais infecciosos",
      "(E) Tratar a febre apenas com antiagregante plaquetário, sem antitérmico"
    ],
    "correctAnswer": 1,
    "explanation": "A diretriz AHA/ASA 2026 não recomenda controle glicêmico intensivo para 80–130 mg/dL no AVCI por falta de benefício funcional e maior risco de hipoglicemia. Hiperglicemia significativa deve ser tratada com alvo hospitalar seguro individualizado, evitando hipoglicemia. Temperatura elevada demanda busca de causa e tratamento; o PCDT brasileiro orienta monitorar glicemia e temperatura, tratando hipertermia a partir de 37,5°C. Suporte fisiológico reduz complicações, embora não substitua reperfusão.",
    "commentary": "(A) Incorreta. Controle excessivamente estrito aumenta hipoglicemia e não melhora desfechos.\n\n(C) Incorreta. Metabolismo influencia prognóstico pós-AVC.\n\n(D) Incorreta. Febre requer avaliação e manejo.\n\n(E) Incorreta. Antiagregantes não tratam causa ou controle de hipertermia de modo apropriado.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026); PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023)",
    "tags": [
      "neurologia",
      "avc",
      "glicemia e temperatura no cuidado agudo"
    ],
    "tip": "AVC agudo: controle o que piora o cérebro (febre, hipo/hiperglicemia), mas nunca provoque hipoglicemia para “normalizar”.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-75",
    "module": "Clínica Médica",
    "text": "Um homem de 49 anos apresenta infarto extenso de ACM direita, inicialmente NIHSS 20. Após 36 horas, piora do nível de consciência, pupila direita mais lenta e TC com edema importante, apagamento de sulcos e desvio da linha média. Qual é a medida específica de salvamento a considerar urgentemente?",
    "options": [
      "(A) Dexametasona em dose alta como tratamento definitivo do edema isquêmico",
      "(B) Punção lombar de alívio para reduzir a hipertensão intracraniana",
      "(C) Aguardar uma semana para avaliar cirurgia, pois o edema tende a regredir",
      "(D) Avaliação neurocirúrgica imediata para hemicraniectomia descompressiva",
      "(E) AAS em dose dobrada para reduzir o edema e prevenir novo infarto"
    ],
    "correctAnswer": 3,
    "explanation": "Infarto maligno de ACM pode produzir edema progressivo, hipertensão intracraniana e herniação. Em pacientes selecionados, particularmente mais jovens e com evolução precoce, hemicraniectomia descompressiva reduz mortalidade, com necessidade de discutir prognóstico funcional com familiares. O desvio de linha média e a piora de consciência exigem suporte intensivo e avaliação neurocirúrgica emergente, não apenas analgesia ou espera. Corticoides não são terapia de edema citotóxico do AVCI.",
    "commentary": "(A) Incorreta. Corticoide não demonstrou benefício para edema do infarto.\n\n(B) Incorreta. Pode precipitar herniação em efeito de massa.\n\n(C) Incorreta. O período de deterioração é precoce e tempo-dependente.\n\n(E) Incorreta. AAS não trata hipertensão intracraniana ou efeito de massa.",
    "reference": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA, Stroke 2026)",
    "tags": [
      "neurologia",
      "avc",
      "edema maligno de acm e hemicraniectomia"
    ],
    "tip": "Grande infarto ACM + piora nas primeiras 48h + edema/desvio = pense em descompressão, não em dexametasona.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-76",
    "module": "Clínica Médica",
    "text": "Uma mulher de 67 anos, com hipertensão crônica, apresenta hemiparesia esquerda e cefaleia súbitas. TC: hemorragia putaminal direita de 18 mL, sem hidrocefalia. Glasgow 14, PA 186/104 mmHg. Não usa anticoagulantes. Qual manejo pressórico se aproxima da diretriz brasileira de hemorragia intracerebral de 2026 para um caso leve a moderado?",
    "options": [
      "(A) Tolerar PAS até 220 mmHg, pois a hipertensão permissiva vale para todo AVC",
      "(B) Reduzir a PAS imediatamente para 90 mmHg para interromper o sangramento",
      "(C) Reduzir a PAS de forma precoce e suave para cerca de 130–140 mmHg",
      "(D) Iniciar alteplase, pois há déficit focal súbito dentro da janela",
      "(E) Aguardar 72 horas antes de iniciar o controle pressórico"
    ],
    "correctAnswer": 2,
    "explanation": "A diretriz SBAVC/ABN 2026 destaca redução precoce e sustentada da PAS para faixa de cerca de 130–140 mmHg em hemorragia intracerebral de leve a moderada gravidade, com vigilância de perfusão e variabilidade, não em comas profundos ou hematomas maciços. O controle reduz risco de expansão hematomal; PAS abaixo de 130 mmHg em protocolos tradicionais pode ser nociva, por isso é importante individualizar e evitar reduções abruptas. Em AVC hemorrágico, a meta não é a hipertensão permissiva típica do AVC isquêmico não reperfundido.",
    "commentary": "(A) Incorreta. A estratégia de AVCI não se extrapola à hemorragia.\n\n(B) Incorreta. Hipotensão e queda extrema prejudicam perfusão.\n\n(D) Incorreta. Hemorragia na TC contraindica trombólise.\n\n(E) Incorreta. O risco de expansão é maior precocemente.",
    "reference": "Diretriz brasileira de hemorragia intracerebral espontânea (Sociedade Brasileira de AVC/Academia Brasileira de Neurologia, Arq Neuropsiquiatr 2026)",
    "tags": [
      "neurologia",
      "avc",
      "hemorragia intraparenquimatosa: controle pressórico"
    ],
    "tip": "AVCh leve/moderado ≠ AVCI sem reperfusão. Controle de PA precoce e suave, sem despencar a pressão.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-77",
    "module": "Clínica Médica",
    "text": "Um homem de 74 anos em uso de varfarina por fibrilação atrial chega com disartria e hemiparesia. TC mostra hemorragia talâmica de 25 mL com extensão ventricular. INR 3,4, PA 174/96 mmHg. Qual intervenção hemostática é a melhor escolha?",
    "options": [
      "(A) Suspender a varfarina e reverter com CCP de quatro fatores e vitamina K IV",
      "(B) Administrar alteplase intravenosa para acelerar a dissolução do hematoma",
      "(C) Vitamina K oral isolada e reavaliação do INR em três dias",
      "(D) Manter a varfarina até concluir a investigação etiológica da hemorragia",
      "(E) Prescrever AAS pela hemiparesia, sem corrigir o INR"
    ],
    "correctAnswer": 0,
    "explanation": "Na hemorragia intracerebral relacionada a antagonistas da vitamina K, reversão imediata é prioridade. A diretriz brasileira SBAVC/ABN 2026 recomenda concentrado de complexo protrombínico de quatro fatores (CCP4) com vitamina K para correção rápida do INR, quando disponível. Vitamina K isolada tem início lento; plasma pode ser alternativa em ausência de CCP, porém exige maior volume e corrige mais lentamente. A neuro-UTI acompanha pressão, expansão hematomal e hidrocefalia.",
    "commentary": "(B) Incorreta. Fibrinólise agravaria o sangramento.\n\n(C) Incorreta. A reversão precisa ser rápida e a via oral não atende à urgência.\n\n(D) Incorreta. Persistir anticoagulação aumenta expansão do hematoma.\n\n(E) Incorreta. O AVC é hemorrágico, e a prioridade é reverter coagulopatia.",
    "reference": "Diretriz brasileira de hemorragia intracerebral espontânea (Sociedade Brasileira de AVC/Academia Brasileira de Neurologia, Arq Neuropsiquiatr 2026)",
    "tags": [
      "neurologia",
      "avc",
      "hemorragia intracerebral em uso de varfarina"
    ],
    "tip": "Hemorragia + varfarina = CCP4 + vitamina K IV, não apenas “suspender e observar”.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-78",
    "module": "Clínica Médica",
    "text": "Uma mulher de 62 anos chega com vertigem intensa, vômitos, ataxia e rebaixamento progressivo do nível de consciência. TC: hematoma cerebelar de 22 mL, compressão do IV ventrículo e hidrocefalia obstrutiva. PA 176/98 mmHg. Qual é a conduta prioritária?",
    "options": [
      "(A) Observação clínica, pois hematomas cerebelares raramente exigem intervenção",
      "(B) Trombolítico para acelerar a reabsorção do hematoma",
      "(C) Corticosteroide em dose alta como tratamento definitivo do edema",
      "(D) Repetir a TC em 24 horas antes de acionar a neurocirurgia",
      "(E) Neurocirurgia de emergência para evacuar o hematoma e tratar a hidrocefalia"
    ],
    "correctAnswer": 4,
    "explanation": "Hematoma cerebelar volumoso é ameaça vital por compressão de tronco e bloqueio de fluxo liquórico. A diretriz brasileira de hemorragia intracerebral 2026 recomenda abordagem cirúrgica urgente em casos como volume >15 mL com hidrocefalia/compressão, associando drenagem ventricular externa conforme o cenário. O tratamento não se resume a baixar pressão: a fossa posterior tem pouco espaço para acomodar hematoma e edema. DVE isolada sem considerar evacuação pode ser insuficiente em compressão importante.",
    "commentary": "(A) Incorreta. A fossa posterior é crítica para compressão de tronco.\n\n(B) Incorreta. É contraindicado e perigoso.\n\n(C) Incorreta. Não resolve efeito de massa/hidrocefalia.\n\n(D) Incorreta. A deterioração exige resposta imediata.",
    "reference": "Diretriz brasileira de hemorragia intracerebral espontânea (Sociedade Brasileira de AVC/Academia Brasileira de Neurologia, Arq Neuropsiquiatr 2026)",
    "tags": [
      "neurologia",
      "avc",
      "hemorragia cerebelar, hidrocefalia e neurocirurgia"
    ],
    "tip": "Hematoma cerebelar + hidrocefalia + queda da consciência = emergência neurocirúrgica, não simples observação.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-79",
    "module": "Clínica Médica",
    "text": "Um homem de 53 anos apresenta cefaleia “a pior da vida” que atingiu intensidade máxima em segundos, acompanhada de vômitos e rigidez de nuca. TC mostra hemorragia subaracnóidea difusa em cisternas basais; angiotomografia sugere aneurisma de comunicante anterior. Após estabilização, qual estratégia é correta?",
    "options": [
      "(A) Trombólise intravenosa, pelo déficit neurológico associado",
      "(B) Centro neurovascular para tratar o aneurisma precocemente, com nimodipina enteral",
      "(C) Analgesia e TC ambulatorial de controle em um mês",
      "(D) AAS e clopidogrel para prevenir isquemia tardia antes de tratar o aneurisma",
      "(E) Nimodipina como tratamento suficiente, adiando a oclusão do aneurisma"
    ],
    "correctAnswer": 1,
    "explanation": "Ruptura aneurismática causa hemorragia subaracnóidea e risco de ressangramento, hidrocefalia e isquemia cerebral tardia. A diretriz AHA/ASA 2023 recomenda tratamento precoce do aneurisma por abordagem endovascular ou microcirúrgica conforme anatomia e equipe, e nimodipina enteral para reduzir isquemia cerebral tardia e melhorar desfechos. A TC confirma sangue; não há indicação de trombólise e a punção lombar não é necessária quando a TC já demonstrou HSA.",
    "commentary": "(A) Incorreta. Hemorragia contraindica fibrinólise.\n\n(C) Incorreta. Há risco agudo de ressangramento e complicações.\n\n(D) Incorreta. Antiagregação não é tratamento de HSA aneurismática não protegida.\n\n(E) Incorreta. Nimodipina não exclui o aneurisma da circulação.",
    "reference": "2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage (AHA/ASA, Stroke 2023)",
    "tags": [
      "neurologia",
      "avc",
      "hemorragia subaracnóidea aneurismática"
    ],
    "tip": "Trovoada + sangue nas cisternas = HSA. Depois de estabilizar: proteger aneurisma e pensar em nimodipina.",
    "topography": "1.1",
    "topic": "AVC"
  },
  {
    "id": "topo-1-1-80",
    "module": "Clínica Médica",
    "text": "Uma mulher de 65 anos teve AVCI não cardioembólico há 12 dias, sem transformação hemorrágica. Angiotomografia mostrou estenose carotídea esquerda sintomática de 80%; LDL 158 mg/dL e hipertensão mal controlada. NIHSS atual 2, mRS 2. Qual plano global é mais apropriado após estabilização e discussão com equipe vascular?",
    "options": [
      "(A) Manter AAS isolado, sem avaliar a estenose carotídea sintomática",
      "(B) Anticoagulação plena como tratamento padrão da estenose carotídea",
      "(C) Adiar estatina e reabilitação até a recuperação completa do déficit",
      "(D) Antiagregação, estatina de alta intensidade, avaliar endarterectomia e reabilitar",
      "(E) Trombólise intravenosa no 12º dia para tratar a estenose carotídea"
    ],
    "correctAnswer": 3,
    "explanation": "Prevenção secundária de AVC aterosclerótico envolve antiagregação, redução intensiva de LDL, controle de pressão, cessação de tabaco e atividade/reabilitação conforme capacidade. Estenose carotídea extracraniana sintomática importante pode demandar endarterectomia ou intervenção, idealmente sem atraso desnecessário em selecionados; a decisão depende de grau, anatomia, sexo, risco cirúrgico e tempo do evento. Reabilitação física, fonoaudiológica e ocupacional é parte do tratamento. Anticoagulação plena não é primeira escolha para evento não cardioembólico sem outra indicação.",
    "commentary": "(A) Incorreta. A lesão de alto grau pode ser tratável para reduzir recorrência.\n\n(B) Incorreta. Mecanismo aterosclerótico costuma requerer antiagregação e avaliação de revascularização.\n\n(C) Incorreta. Prevenção e reabilitação devem começar de forma organizada e oportuna.\n\n(E) Incorreta. Fibrinólise é terapia de fase hiperaguda e não trata placa carotídea crônica.",
    "reference": "PCDT do Acidente Vascular Cerebral Isquêmico Agudo (Ministério da Saúde, Portaria Conjunta SAES/SECTICS nº 29/2023); Diretrizes brasileiras de reabilitação após AVC (Sociedade Brasileira de AVC, 2022)",
    "tags": [
      "neurologia",
      "avc",
      "prevenção secundária e reabilitação após avc"
    ],
    "tip": "Após o AVCI: não pare no AAS. Determine mecanismo, trate LDL/PA, procure carótida sintomática e reabilite.",
    "topography": "1.1",
    "topic": "AVC"
  }
];

export const TOPOGRAPHY_QUESTIONS: Question[] = [...NEURO_CEFALEIAS, ...NEURO_AVC];
