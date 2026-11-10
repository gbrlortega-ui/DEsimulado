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

export const TOPOGRAPHY_QUESTIONS: Question[] = [...NEURO_CEFALEIAS];
