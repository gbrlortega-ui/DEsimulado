// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1160;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 160,
  "Clínica Médica": 160,
  "Cirurgia": 160,
  "Ginecologia e Obstetrícia": 160,
  "Saúde Coletiva": 160,
  "Ciências Básicas": 160,
  "ENAMED": 200
};

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026"
  kind: 'TP' | 'ENAMED';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP primeiro, depois ENAMED). */
export const EDITIONS: ExamEdition[] = [
  {
    "label": "TP 2019",
    "kind": "TP",
    "year": 2019,
    "count": 120
  },
  {
    "label": "TP 2020",
    "kind": "TP",
    "year": 2020,
    "count": 120
  },
  {
    "label": "TP 2021",
    "kind": "TP",
    "year": 2021,
    "count": 120
  },
  {
    "label": "TP 2022",
    "kind": "TP",
    "year": 2022,
    "count": 120
  },
  {
    "label": "TP 2023",
    "kind": "TP",
    "year": 2023,
    "count": 120
  },
  {
    "label": "TP 2024",
    "kind": "TP",
    "year": 2024,
    "count": 120
  },
  {
    "label": "TP 2025",
    "kind": "TP",
    "year": 2025,
    "count": 120
  },
  {
    "label": "TP 2026",
    "kind": "TP",
    "year": 2026,
    "count": 120
  },
  {
    "label": "ENAMED 2025",
    "kind": "ENAMED",
    "year": 2025,
    "count": 100
  },
  {
    "label": "ENAMED 2026",
    "kind": "ENAMED",
    "year": 2026,
    "count": 100
  }
];

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "1.1": 80
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "1.1|Cefaleias": 40,
  "1.1|AVC": 40
};

export interface SuggestedExamInfo {
  id: string;
  title: string;
  description: string;
  /** Aviso mostrado antes de começar e na primeira questão. */
  warning: string;
  count: number;
}

/** Simulados sugeridos, sem as questões (elas carregam junto com o banco). */
export const SUGERIDOS_INFO: SuggestedExamInfo[] = [
  {
    "id": "sugerido-enamed-1",
    "title": "ENAMED 1",
    "description": "Questões no formato do ENAMED, de todas as áreas, sempre na mesma ordem.",
    "warning": "O gabarito deste simulado é técnico, não oficial: nenhuma banca publicou respostas para estas questões. As questões com gabarito provisório têm um aviso no comentário.",
    "count": 100
  }
];

/** Amostra para a questão de exemplo da página inicial. */
export const SAMPLE_QUESTIONS: Question[] = [
  {
    "id": "tp2024-42",
    "module": "Pediatria",
    "text": "Menina com 1 ano e 6 meses de idade apresenta desenvolvimento de pilificação em região genital há 2 meses, associado a acne e odor axilar. Ao exame físico, há pelos grossos escuros e encaracolados em região de grandes lábios e pube, além de hipertrofia de clítoris; não há tecido mamário palpável. Qual o melhor exame a ser solicitado para a principal hipótese dessa paciente?",
    "options": [
      "(A) LH e FSH",
      "(B) Tomografia da glândula adrenal",
      "(C) Ultrassom pélvico",
      "(D) Idade óssea"
    ],
    "correctAnswer": 1,
    "explanation": "Sinais de virilização rápida sem telarca sugerem puberdade precoce periférica de origem adrenal (como tumor).",
    "commentary": "O paciente apresenta pubarca, associado a odor axilar, acne e sinais de virilização rapidamente progressiva, devemos pensar em uma disfunção da glândula adrenal, pela rapidez do quadro, um tumor de adrenal é o diagnóstico mais provável. Portanto, o exame mais adequado é a tomografia de adrenal. LH e FSH devem ser pedidos na suspeita de puberdade e essa menina não apresenta sinal puberal já que não tem mama palpável. USg pélvico deve ser pedido na puberdade precoce periférica, quando há suspeita de tumor ovariano. Rx idade óssea deve ser pedido para avaliar o prognóstico estatural do paciente, não faz diagnóstico de nenhuma patologia.",
    "reference": "Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 5. ed. - Barueri [SP]: Manole, 2022. Seção 16 endocrinologia. Endocrinologia pediátrica / Crésio de Aragão Dantas Alves. - 1. ed. - Barueri [SP]: Manole, 2019.",
    "tags": [
      "Endocrinologia"
    ]
  },
  {
    "id": "tp2023-42",
    "module": "Pediatria",
    "text": "Em exame hematológico de rotina de uma criança de um ano de idade, encontrou-se anemia discreta, hipocrômica e RDW (medida de anisocitose) normal. No seguimento longitudinal, posteriormente, observou-se aumento na concentração de hemoglobina A2. É provável que esta criança tenha:",
    "options": [
      "(A) Anemia da doença crônica",
      "(B) ß talassemia heterozigota",
      "(C) Anemia falciforme",
      "(D) Anemia ferropriva"
    ],
    "correctAnswer": 1,
    "explanation": "Anemia microcítica com RDW normal e aumento de HbA2 é característica do traço talassêmico (beta-talassemia minor).",
    "commentary": "A concentração de hemoglobina A2 aumenta no traço talassêmico ou ß talassemia minor. Os pacientes tem um único gene anormal para a cadeia beta da hemoglobina e habitualmente não tem problemas a não ser uma discreta anemia microcítica. A talassemia homozigota evoluiria de forma mais tempestuosa com anemia severa, hepatoesplenomegalia , necessidade de múltiplas transfusões, presença de RDW (a medida da anisocitose) normal, com microcitia, alerta para este diagnóstico, um vez que ele está aumentado, devido à anisocitose, na anemia ferropriva. Na anemia ferropriva severa a hemoglobina A2 está diminuída e na anemia ferropriva leve ou moderada a hemoglobina A2 está normal.O nível de hemoglobina A2 também está normal na anemia falciforme e na anemia da doença crônica.",
    "reference": "Hay et al pp, 844-845; Kliegman et al pp, 2033-2037; Mc Millan et al pp, 1699-1700; Rudolph et al, pp 1536-1538.",
    "tags": [
      "Hematologia"
    ]
  },
  {
    "id": "tp2022-53",
    "module": "Pediatria",
    "text": "Atendimento a criança vítima de abuso sexual. Sobre o manejo, é correto afirmar:",
    "options": [
      "(A) Dispensar exames caso não haja lesões genitais visíveis.",
      "(B) Não repetir a entrevista com a criança sobre o relato (evitar revitimização).",
      "(C) Não registrar em prontuário até confirmação da autoria.",
      "(D) Restringir o exame ao aparelho genital."
    ],
    "correctAnswer": 1,
    "explanation": "A escuta especializada visa evitar que a criança repita a narrativa traumática múltiplas vezes (revitimização).",
    "commentary": "O protocolo orienta evitar a revitimização. O prontuário deve ser detalhado e o exame físico completo (não restrito à genitália) para buscar outros sinais de violência.",
    "reference": "Protocolo de Atenção Integral - UNICEF/MS.",
    "tags": [
      "Violência",
      "Ética"
    ]
  },
  {
    "id": "tp2021-51",
    "module": "Pediatria",
    "text": "Pré-escolar, levado ao pediatra por apresentar lesão eritematosa em fossas ante cubitais e poplíteas há 1 mês. Mãe refere que as lesões são acompanhadas por prurido que piora com o suor. Exame físico: placas e pápulas eritematosas que desaparecem à digito pressão nos locais descritos. Apresenta xerose cutânea e pitiríase alba em face. É critério diagnóstico para a doença apresentada:",
    "options": [
      "(A) Linfocitose.",
      "(B) IgE sérica elevada.",
      "(C) IgA sérica diminuída.",
      "(D) Leucocitose com eosinofilia."
    ],
    "correctAnswer": 1,
    "explanation": "A dermatite atópica clássica flexural (lesões pruriginosas localizadas em dobras cutâneas antecubitais e poplíteas) associada a xerodermia e pitiríase alba facial é guiada pelos critérios clínicos estabelecidos por Hanifin e Rajka. Entre os dados menores aceitos, a elevação sérica de IgE destaca-se como critério imunológico clássico.",
    "commentary": "Os critérios de Hanifin e Rajka constituem o padrão diagnótico na Dermatite Atópica. Exigem a preexistência de critérios maiores (prurido intenso, distribuição típica flexural na infância/liquenificação, cronicidade recidivante e história familiar de atopia). Entre os critérios secundários/menores estão achados de hipersensibilidade cutânea e exames laboratoriais como reatividade imunoespecífica e títulos elevados de IgE circulante.",
    "reference": "Consenso de Dermatite Atópica da SBP/SBD.",
    "tags": [
      "Dermatologia",
      "Alergia e Imunologia"
    ]
  },
  {
    "id": "tp2020-62",
    "module": "Pediatria",
    "text": "Escolar de sete anos, sexo feminino, está há dois dias em tratamento para provável infecção do trato urinário com sulfametoxazol-trimetoprim, na dose de 40mg/kg/dia de sulfa. No início do quadro, apresentava urgência, dor e dificuldade para urinar. No momento, a mãe refere melhora significativa das queixas, entretanto o resultado da urinocultura mostra 500.000 colônias de E.coli resistente ao antimicrobiano em uso.\n\nA conduta, neste caso, deverá ser:",
    "options": [
      "(A) Trocar o antimicrobiano em uso de acordo com a sensibilidade in vitro.",
      "(B) Trocar o antimicrobiano em uso por ácido nalidíxico.",
      "(C) Trocar o antimicrobiano em uso por amoxicilina oral.",
      "(D) Manter o esquema antimicrobiano em uso."
    ],
    "correctAnswer": 3,
    "explanation": "Na ITU baixa, a resposta clínica ao antimicrobiano é suficiente para mantê-lo, mesmo com resistência in vitro: a concentração urinária do fármaco costuma ser muito maior que a dos discos do antibiograma.",
    "commentary": "Trocar o antibiótico em uma criança que já melhorou é desnecessário. Ácido nalidíxico e amoxicilina não estão indicados com base no antibiograma.",
    "reference": "National Institute for Health and Clinical Excellence. UrinaryTractInfection in Children: Diagnosis, Tratament, and Longterm Management: Nice Clinical Guideline 54. London, England: National Institute for Health and Clinical Excellence; 2007. Available at: www.nice.org.uk/nicemedia/live/11819/36032/36032.pdf.",
    "tags": [
      "pediatria",
      "infecção urinária"
    ]
  },
  {
    "id": "tp2022-23",
    "module": "Clínica Médica",
    "text": "Paciente masculino, 21 anos, procura atendimento médico com o seguinte quadro: febre há 4 dias, linfonodos cervicais fibroelásticos bilateral, discreta hepatomegalia. Hemograma: 12.000 leucócitos, sendo 55% de linfócitos e 11% de linfócitos atípicos. Qual a melhor opção diagnóstica?",
    "options": [
      "(A) Adenite bacteriana",
      "(B) Linfoma não Hodgkin",
      "(C) Tuberculose ganglionar",
      "(D) Síndrome da mononucleose"
    ],
    "correctAnswer": 3,
    "explanation": "Linfocitose com atipia linfocitária associada a febre e linfonodomegalia cervical em jovem é característico de mononucleose.",
    "commentary": "Esta questão caracteriza a síndrome da mononucleose: jovem com febre aguda, linfonodos cervicais fibroelásticos bilaterais e linfocitose com atipia.",
    "reference": "Infectologia. Bases clínicas e tratamento Reinaldo Salomão, edição 2017",
    "tags": [
      "Infectologia",
      "Hematologia"
    ]
  },
  {
    "id": "tp2025-35",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos procura ambulatório por fadiga persistente e desconforto abdominal progressivo há dois anos. Antecedente de hepatite B diagnosticada há 10 anos, usando antiviral irregularmente. Ao exame físico, discretamente ictérico, com telangectasias cutâneas e esplenomegalia palpável. Exames laboratoriais: elevação de transaminases, hipoalbuminemia e trombocitopenia. O quadro clínico sugere:",
    "options": [
      "(A) Reativação de replicação viral, sem dano hepático significativo.",
      "(B) Hepatopatia crônica viral com cirrose compensada.",
      "(C) Transformação neoplásica com sinais de alarme.",
      "(D) Cirrose grave com iminência de insuficiência hepática aguda."
    ],
    "correctAnswer": 1,
    "explanation": "A evolução de hepatite B crônica com sinais de hipertensão portal (esplenomegalia descrita) associados a hipoalbuminemia, transaminases elevadas e plaquetopenia sugere cirrose compensada.",
    "commentary": "Os achados do exame físico (telangiectasias, esplenomegalia) e do laboratório (plaquetopenia, hipoalbuminemia e transaminases alteradas) traduzem evolução crônica para cirrose com hipertensão portal já estabelecida. Como o paciente não apresenta ascite rebelde, encefalopatia de repetição ou sangramentos, classifica-se em cirrose compensada neste momento.",
    "reference": "HARRISON'S Principles of Internal Medicine. 21. ed. McGraw-Hill. Sociedade Brasileira de Hepatologia, 2019.",
    "tags": [
      "Hepatologia",
      "Infectologia"
    ]
  },
  {
    "id": "tp2021-39",
    "module": "Clínica Médica",
    "text": "Mulher, 50 anos, com diabetes tipo 2 e dislipidemia mista, iniciou uso de estatina há 2 meses. Exames: creatinina = 1,5 mg/dL; ureia = 65 mg/dL; potássio = 6,0 mEq/L; CPK = 2.200 UI/L. Além da alcalinização da urina, a conduta adequada é:",
    "options": [
      "(A) Trocar estatina por fibrato e fazer controle glicêmico rigoroso com hipoglicemiante oral, iniciar antiproteinúrico.",
      "(B) Suspender imediatamente a estatina, iniciar diurético de alça e solução polarizante.",
      "(C) Suspender imediatamente a estatina, iniciar diurético de alça e gluconato de cálcio.",
      "(D) Suspender imediatamente a estatina, hidratação endovenosa com salina isotônica e solução polarizante."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente exibe quadro de injúria renal aguda secundária a rabdomiólise após estatina (CPK = 2.200 UI/L) com hipercalemia moderada-grave (K+ = 6,0 mEq/L). O pilar da conduta de rabdomiólise é a suspensão do agente causador associado à vigorosa hidratação endovenosa com salina para desobstruir os túbulos da mioglobina nefrotóxica, aliada à imediata infusão de solução polarizante para corrigir o potássio plasmático.",
    "commentary": "A rabdomiólise tem como complicação temida a necrose tubular aguda obstrutiva por depósito de mioglobina. A nefropatia de base impõe restrição no uso de IECA/BRA (antiproteinúrico sugerido) pela hipercalemia existente. Diuréticos devem ser indicados com prudência apenas na vigência de hipervolemia refratária pós-volume. A conduta padrão assenta-se na hidratação, suspensão da estatina e estabilização da calemia.",
    "reference": "FAUCI, AS et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.",
    "tags": [
      "Nefrologia",
      "Cardiologia",
      "Farmacologia",
      "Emergência"
    ]
  },
  {
    "id": "tp2019-38",
    "module": "Clínica Médica",
    "text": "Homem, 56 anos, com diabetes mellitus há 12 anos, está em uso de metformina 2g de liberação prolongada e gliclazida 120mg por dia. Exames laboratoriais: Hb glicada = 10,2%; glicemia de jejum = 190 mg/dL.\n\nA melhor conduta para esse caso é:",
    "options": [
      "(A) Substituir a gliclazida por insulina regular no jantar.",
      "(B) Aumentar a metformina para 3g/dia.",
      "(C) Introduzir insulina NPH ao deitar.",
      "(D) Reforçar modificação do estilo de vida e reavaliar em seis meses."
    ],
    "correctAnswer": 2,
    "explanation": "Diabético tipo 2 com HbA1c de 10,2% apesar de metformina e sulfonilureia em doses plenas: está muito acima da meta e precisa de intensificação.\n\nA conduta clássica é iniciar insulina basal (NPH ao deitar), mantendo os orais, e titular pela glicemia de jejum.",
    "commentary": "Trocar a gliclazida por insulina regular no jantar não é o esquema inicial. A dose de 2 g/dia já é a máxima efetiva da metformina. Apenas reforçar o estilo de vida e reavaliar em 6 meses atrasaria o controle.",
    "reference": "Qaseem A, Wilt TJ, Kansagara D, Horwitch C, Barry MJ, Forciea MA, et al. Hemoglobin A1c Targets for Glycemic Control With Pharmacologic Therapy for Non pregnant Adults With Type 2. / Diabetes Mellitus: A Guidance Statement Update From the American College of Physicians. Ann Intern Med. [Epubahead of print 6 March 2018]168:569–576. doi: 10.7326/M17-0939. / Diretrizes da Sociedade Brasileira de Diabetes 2017-2018 /Organização José Egídio Paulo de Oliveira, Renan Magalhães Montenegro Junior, Sérgio Vencio. -- São Paulo: Editora Clannad, 2017. / Netto, A P. Conduta terapêutica no Diabetes tipo 2: Algoritmo SBD 2017. 9 9",
    "tags": [
      "endocrinologia",
      "diabetes",
      "insulinoterapia"
    ]
  },
  {
    "id": "tp2024-78",
    "module": "Cirurgia",
    "text": "Disfagia progressiva (3 meses), perda ponderal > 20%, tabagista e etilista. Qual o principal diagnóstico?",
    "options": [
      "(A) Adenocarcinoma do esôfago",
      "(B) Carcinoma espinocelular do esôfago",
      "(C) Megaesôfago chagásico",
      "(D) Esôfago de Barrett"
    ],
    "correctAnswer": 1,
    "explanation": "O tabaco e álcool são os principais fatores de risco para o carcinoma espinocelular (CEC) de esôfago.",
    "commentary": "O álcool e o tabaco são fatores de risco significativos para câncer esofágico. A progressão rápida dos sintomas disfágicos, a perda de peso e os antecedentes de tabagismo e etilismo sugerem um carcinoma esofágico, especialmente carcinoma espinocelular, que é mais comumente associado a esses fatores.",
    "reference": "Engel LS, Chow WH, Vaughan TL, et al. Riscos atribuíveis à população de câncer de esôfago e gástrico. J Natl Cancer Inst. 2003;95(18):1404.",
    "tags": [
      "Oncologia",
      "Gastroenterologia"
    ]
  },
  {
    "id": "tp2022-70",
    "module": "Cirurgia",
    "text": "Politrauma com respiração ruidosa, hipertimpanismo à direita, choque, percussão pulmonar alterada e sínfise púbica alargada. Próximo passo?",
    "options": [
      "(A) Toracostomia de alívio e via aérea definitiva.",
      "(B) Fechamento de pelve e transfusão massiva.",
      "(C) Via aérea definitiva, drenagem torácica à direita e fechamento de pelve.",
      "(D) Via aérea, toracostomia de alívio e aguardar exames para fechar pelve."
    ],
    "correctAnswer": 2,
    "explanation": "O ABCDE exige: A (via aérea definitiva pela obstrução/consciência), B (drenagem pelo pneumo hipertensivo), C (pelve e restrição de cristaloides).",
    "commentary": "O fechamento temporário da pelve (lençol/cinta) é parte do controle de danos no \"C\" do trauma.",
    "reference": "ATLS 10ª Edição.",
    "tags": [
      "Trauma",
      "Emergência"
    ]
  },
  {
    "id": "tp2025-72",
    "module": "Cirurgia",
    "text": "Mulher de 38 anos procura o serviço de emergência com queixa de dor e vermelhidão ao longo de uma veia na perna esquerda há 4 dias. Relata uso recente de anticoncepcional oral. Nega traumas ou cirurgias recentes. Ao exame físico observa-se um cordão endurecido, eritematoso e doloroso ao longo da veia safena magna, sem sinais de edema significativo no membro. Considerando a principal hipótese diagnóstica, qual é a melhor conduta inicial?",
    "options": [
      "(A) Anti-inflamatórios não esteroides, compressão elástica e mobilização precoce.",
      "(B) Anticoagulação plena com heparina de baixo peso molecular imediatamente.",
      "(C) Indicar repouso absoluto do membro afetado e antibioticoterapia profilática para evitar infecção secundária.",
      "(D) Realizar punção da veia afetada para aspiração do trombo e reduzir a inflamação local."
    ],
    "correctAnswer": 0,
    "explanation": "A tromboflebite superficial estéril é tratada preferencialmente com medidas conservadoras e sintomáticas: AINEs, terapia compressiva elástica de suporte e estímulo à deambulação ativa.",
    "commentary": "Este caso exibe traços nítidos de tromboflebite superficial da via venosa subcutânea (safena magna), favorecida na mulher jovem sob terapia de anticoncepção oral combinada. Por constituir enfermidade eminentemente imunológica local autolimitada e estéril, o plano de frente abjura o repouso estrito (contra-indicado pelo aumento do estase e risco subsequente de TVP). O alívio decorre de anti-inflamatórios (AINEs), compressão graduada e mobilidade física regular. Anticoagulação formal estaria balizada em caso de proximidade direta ao sistema venoso profundo (< 3-5 cm da crossa de safena) ou lesões com extensão superior a 5 cm.",
    "reference": "Diretrizes do American College of Chest Physicians (ACCP); Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV) - Projeto Diretrizes.",
    "tags": [
      "Cirurgia Vascular"
    ]
  },
  {
    "id": "tp2026-69",
    "module": "Cirurgia",
    "text": "Homem de 40 anos apresenta tumefação dolorosa em coxa há 7 dias, com aumento progressivo, flutuação e eritema. Após tentativa prévia de antibioticoterapia e sem drenagem da lesão, houve piora do quadro. Considerando a fisiopatologia do abscesso, qual mecanismo explica a falha do tratamento clínico isolado?",
    "options": [
      "(A) Formação de cavidade encapsulada com baixa penetração de antibióticos e alta carga bacteriana.",
      "(B) Redução da perfusão tecidual local por vasoconstrição reflexa.",
      "(C) Produção bacteriana de toxinas que inativam diretamente antibióticos sistêmicos.",
      "(D) Formação de biofilme bacteriano, impedindo resposta inflamatória local."
    ],
    "correctAnswer": 0,
    "explanation": "O abscesso estabelece uma cavidade encapsulada espessa contendo pus e detritos necróticos, criando uma barreira física com baixa perfusão interna. Isso impede que os antibióticos sistêmicos atinjam concentrações terapêuticas eficazes no local infectado, exigindo drenagem cirúrgica.",
    "commentary": "O abscesso cutâneo ou muscular profundo forma uma coleção purulenta envolta por uma pseudocápsula de fibrina e tecido colágeno inflamatório. Essa barreira vascularizada externamente mas avascular internamente cria um ambiente com baixíssima perfusão central, pH ácido e altíssima carga bacteriana ativa e dormente. Como resultado, os antibióticos circulantes não penetram no interior do abscesso em quantidade suficiente, o que dita o antigo aforismo cirúrgico: \"ubi pus, ibi evacua\" (onde há pus, esvazie/drene). Sobre os distratores: (B, C, D) Embora vasoconstrição tecidual periférica, toxinas bacterianas e biofilmes bacterianos desempenhem papéis em infecções, a barreira mecânica e biológica da cápsula do abscesso é o fator fisiopatológico primário reconhecido na falha da terapia medicamentosa isolada.",
    "reference": "Stevens DL et al. Practice Guidelines for Skin and Soft Tissue Infections. Clin Infect Dis. 2014. Miller JM et al. Guide to Microbiology Laboratory Utilization. Clin Infect Dis. 2024. Seidelman JL et al. Surgical Site Infection Prevention. JAMA. 2023.",
    "tags": [
      "Abscesso",
      "Fisiopatologia",
      "Infecção"
    ]
  },
  {
    "id": "tp2020-114",
    "module": "Cirurgia",
    "text": "Paciente de 60 anos procura ambulatório por queixa de tosse seca há 2 meses, sem febre. É tabagista de longa data e sem outras comorbidades. Ao Raio X de tórax apresenta imagem em pulmão direito de 3cm de diâmetro em região periférica tendo sido feita hipótese diagnóstica inicial de nódulo solitário de pulmão.\n\nDentre as alternativas abaixo, qual caracteriza o passo fundamental para instituir o tratamento?",
    "options": [
      "(A) Tomografia computadorizada de tórax",
      "(B) Punção com agulha fina transtorácica",
      "(C) Broncoscopia com biopsia transbrônquica",
      "(D) PET-CT"
    ],
    "correctAnswer": 1,
    "explanation": "Nódulo pulmonar periférico de 3 cm em tabagista: alta probabilidade de neoplasia. O passo fundamental para instituir o tratamento é o diagnóstico histológico — em lesão periférica, a punção transtorácica com agulha (guiada por TC) é o método indicado.",
    "commentary": "Tomografia e PET-CT ajudam no estadiamento e na caracterização, mas não dão o diagnóstico histológico. A broncoscopia é melhor para lesões centrais.",
    "reference": "Sabiston, tratado de cirurgia, 19ª edição, capítulo de pulmão, seção tórax.",
    "tags": [
      "cirurgia torácica",
      "nódulo pulmonar"
    ]
  },
  {
    "id": "tp2024-93",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (8 semanas), teste rápido positivo para sífilis. Nega sintomas, múltiplos parceiros. Tratamento e conduta pelo Ministério da Saúde?",
    "options": [
      "(A) Penicilina benzatina 7,2 milhões (3 doses); tratar parceiro, acompanhar mensal com VDRL.",
      "(B) Penicilina benzatina 2,4 milhões (1 dose); repetir VDRL.",
      "(C) Penicilina benzatina 7,2 milhões; repetir VDRL trimestral.",
      "(D) Penicilina benzatina 2,4 milhões; não tratar parceiro."
    ],
    "correctAnswer": 0,
    "explanation": "Em gestantes com tempo de infecção desconhecido, utiliza-se esquema de sífilis latente tardia (3 doses de 2,4 milhões). O tratamento do parceiro é obrigatório para evitar reinfecção.",
    "commentary": "Segundo o Ministério da Saúde o tratamento proposto para gestante diante de um teste rápido positivo para a sífilis é: • Tratamento imediato com penicilina benzatina na dose compatível com o estadio da doença, que no caso é desconhecido, então, deve ser tratado com a dose de 7,2 milhões. • Coleta de novo teste para confirmação. • Tratar o parceiro sempre. • Notificar a vigilância sanitária • Acompanhar com teste não treponêmico mensal para verificar aumento de titulação.",
    "reference": "Protocolo clínico e diretrizes terapêuticas para a prevenção da transmissão vertical de HIV, sífilis e hepatites virais Ministério da Saúde 2022",
    "tags": [
      "Obstetrícia",
      "IST"
    ]
  },
  {
    "id": "tp2022-82",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 32 anos, nuligesta, resultado de citologia oncótica: ASC-US (células escamosas atípicas de significado indeterminado). Conduta preconizada pelo Ministério da Saúde:",
    "options": [
      "(A) Repetir a colpocitologia em 6 meses.",
      "(B) Repetir a colpocitologia em 12 meses.",
      "(C) Fazer a colposcopia em 18 meses.",
      "(D) Colposcopia com biópsia dirigida."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas diretrizes brasileiras, a conduta para ASC-US em mulheres de 30 anos ou mais é a repetição em 6 meses.",
    "commentary": "ASC-US em mulheres >= 30 anos exige repetição semestral. Se houver dois resultados consecutivos de ASC-US ou pior, encaminha-se para colposcopia.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA 2016.",
    "tags": [
      "Ginecologia Geral",
      "Rastreamento"
    ]
  },
  {
    "id": "tp2022-100",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (36 semanas), perda líquida clara. Especular: saída ativa por Valsalva. Toque: colo fechado. Sobre este caso:",
    "options": [
      "(A) Prescrição de penicilina após 18h de bolsa rota.",
      "(B) Cesárea de urgência obrigatória se bolsa rota > 6h.",
      "(C) Corticoindução é mandatória.",
      "(D) USG com ILA normal não exclui o diagnóstico de amniorexe."
    ],
    "correctAnswer": 3,
    "explanation": "O diagnóstico de rotura de membranas é clínico (anamnese e especular); o volume de líquido no USG pode estar normal em roturas altas.",
    "commentary": "O ILA normal não afasta bolsa rota. Com 36 semanas, a conduta é resolução da gravidez e profilaxia para GBS se indicado (sem necessidade de corticoide após 34 semanas).",
    "reference": "Cartilha Ministério da Saúde, 2021.",
    "tags": [
      "Obstetrícia"
    ]
  },
  {
    "id": "tp2021-88",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, com idade gestacional de 32 semanas, chega à emergência com dor abdominal de início súbito, contínua, associada a sangramento transvaginal de coloração escura. Traz ultrassom do dia anterior mostrando feto vivo e placenta corporal posterior. Exame físico: PA = 160 x 90 mmHg, feto longitudinal, pélvico, BCF = 110 bpm constante, útero hipertônico, colo fechado. A conduta é:",
    "options": [
      "(A) Cesárea imediata.",
      "(B) Conduta expectante.",
      "(C) Inibição de trabalho de parto.",
      "(D) Indução do trabalho de parto."
    ],
    "correctAnswer": 0,
    "explanation": "O quadro de dor abdominal contínua súbita, hipertonia uterina (útero lenhoso), elevação da pressão arterial e sofrimento fetal agudo (BCF 110 bpm fixo) com sangramento escuro é típico de Descolamento Prematuro de Placenta (DPP). Sendo um feto vivo com sofrimento agudo e sem parto vaginal iminente, indica-se a cesariana imediata.",
    "commentary": "A suspeita clínica de DPP é essencialmente clínica (dor abdominal súbita intensa contínua + hipertonia uterina + sangramento escuro). Sendo o feto vivo, e na presença de sofrimento fetal agudo sem parto vaginal iminente (no caso o colo está impérvio e fechado), a conduta prioritária é a resolução cirúrgica por cesariana rápida, precedida de amniotomia que reduz a hipertensão intraútero e evita infiltração miometrial (útero de Couvelaire) e coagulação intravascular disseminada.",
    "reference": "Fernandes CE, Silva de Sá MF. Tratado de Obstetrícia FEBRASGO. São Paulo: Elsevier, 2018; Montenegro CABR. Rezende Obstetrícia. 13ª ED. Rio de Janeiro: Guanabara Koogan, 2017.",
    "tags": [
      "Obstetrícia",
      "Descolamento de Placenta",
      "Urgência"
    ]
  },
  {
    "id": "tp2026-98",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 32 anos, com 36 semanas de gestação, em acompanhamento por infecção pelo HIV, em uso regular de terapia antirretroviral (TARV) desde o primeiro trimestre, apresenta carga viral de 1.200 cópias/mL no último exame. Evolui sem intercorrências obstétricas. Diante desse cenário, qual a conduta para redução do risco de transmissão vertical?",
    "options": [
      "(A) Indicar cesariana eletiva a partir de 38 semanas e realizar zidovudina intravenosa intraparto.",
      "(B) Manter conduta expectante e indicar parto vaginal, pois está em uso regular de TARV.",
      "(C) Indicar parto vaginal com uso de fórceps para reduzir o tempo expulsivo.",
      "(D) Suspender TARV no intraparto e iniciar profilaxia apenas no recém-nascido."
    ],
    "correctAnswer": 0,
    "explanation": "Gestantes vivendo com HIV que apresentem Carga Viral indetectável ou desconhecida, ou ainda carga viral maior ou igual a 1.000 cópias/mL detectada próximo ao termo (após 34 semanas), têm indicação formal de parto por via cesariana eletiva (com membranas íntegras, a partir de 38 semanas de gestação) associada à infusão de Zidovudina (AZT) endovenosa intraparto.",
    "commentary": "O protocolo clínico brasileiro estabelece que a determinação da via de parto na gestante infectada pelo HIV baseia-se na aferição da Carga Viral (CV) colhida na idade gestacional de 34 semanas ou mais. Se a CV for maior ou igual a 1.000 cópias/mL (ou desconhecida), a via preferencial obrigatória de eleição é a cesariana eletiva (programada, realizada antes do início do trabalho de parto e de qualquer ruptura de membranas), devendo-se infundir o AZT venoso contínuo desde 3 horas antes da incisão cirúrgica até o clampeamento do cordão. Sobre os distratores: (B) O parto vaginal só é seguro e elegível quando a Carga Viral do terceiro trimestre encontra-se comprovadamente indetectável ou < 1.000 cópias/mL. (C) O fórceps de alívio e outros procedimentos invasivos (como amniotomia ou episiotomia) devem ser evitados devido ao risco de sangramento e infecção cruzada. (D) A TARV materna jamais deve ser suspensa, sendo somada à profilaxia infundida.",
    "reference": "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de HIV, sífilis e hepatites virais. Brasília: Ministério da Saúde, 2022.",
    "tags": [
      "HIV e Gestação",
      "Transmissão Vertical",
      "Cesariana Eletiva"
    ]
  },
  {
    "id": "tp2024-107",
    "module": "Saúde Coletiva",
    "text": "Homem, 76 anos, polifarmácia (Enalapril, HCTZ, Levotiroxina, Sinvastatina, Zolpidem). Apresenta sonolência, lapsos de memória e tosse. Qual a conduta mais apropriada?",
    "options": [
      "Manter prescrição e adicionar antidepressivo (ISRS).",
      "Substituir Enalapril por BRA e considerar redução/descontinuação do Zolpidem.",
      "Aumentar HCTZ para controle pressórico e adicionar IBP.",
      "Aumentar Levotiroxina para melhorar a fadiga e manter Zolpidem."
    ],
    "correctAnswer": 1,
    "explanation": "A tosse pode ser efeito colateral do Enalapril e a sonolência/lapsos de memória do Zolpidem.",
    "commentary": "A substituição do enalapril por um BRA (bloqueador do receptor da angiotensina) pode reduzir a tosse persistente. A redução ou descontinuação do zolpidem pode diminuir a sonolência diurna, lapsos de memória e fadiga. A introdução de estratégias não farmacológicas para insônia, como a terapia cognitivocomportamental, pode melhorar a qualidade do sono sem os efeitos adversos do zolpidem. As outras opções não abordam adequadamente os problemas relacionados à polifarmácia e podem introduzir novos riscos ou não resolver os sintomas atuais.",
    "reference": "Fick, D. M., et al. (2019). \"2019 American Geriatrics Society Beers Criteria® Update Expert Panel.\" Journal of the American Geriatrics Society, 67(4), 674-694. Maher, R. L., Hanlon, J., & Hajjar, E. R. (2014). \"Clinical consequences of polypharmacy in elderly.\" Expert Opinion on Drug Safety, 13(1), 57-65. Katzung, B. G., Masters, S. B., & Trevor, A. J. (2012). \"Basic & Clinical Pharmacology.\" 12ª ed. New York: McGraw-Hill Medical.",
    "tags": [
      "Polifarmácia",
      "Geriatria",
      "Farmacologia"
    ]
  },
  {
    "id": "tp2023-108",
    "module": "Saúde Coletiva",
    "text": "Qual das seguintes características está associada à fase avançada da transição demográfica epidemiológica?",
    "options": [
      "(A) Baixa prevalência de doenças crônicas não transmissíveis.",
      "(B) Predominância de doenças infecciosas e parasitárias.",
      "(C) Aumento da expectativa de vida.",
      "(D) Alta taxa de mortalidade infantil."
    ],
    "correctAnswer": 2,
    "explanation": "A transição demográfica caracteriza-se pelo envelhecimento populacional e aumento da longevidade.",
    "commentary": "Durante a fase inicial da transição demográfica, as principais causas de morte e morbidade são dominadas por doenças infecciosas, como doenças respiratórias, diarreia e outras infecções transmissíveis. No entanto, à medida que as condições socioeconômicas melhoram, o acesso aos cuidados de saúde se amplia e ocorrem mudanças no estilo de vida e no ambiente, ocorre a transição para a fase avançada.\n\nNessa fase, a prevalência das dcnts começa a aumentar, enquanto a incidência de doenças infecciosas diminui. as dcnts, como doenças cardiovasculares, diabetes, doenças respiratórias crônicas e certos tipos de câncer, estão relacionadas principalmente a fatores de risco não transmissíveis, como tabagismo, alimentação inadequada, inatividade física, consumo excessivo de álcool e exposição a poluentes ambientais.\n\nPortanto, quando uma população entra na fase avançada da transição demográfica epidemiológica, a baixa prevalência de dcnts é uma característica observada. isso indica que a população está enfrentando uma menor carga de doenças infecciosas e está vivendo por mais tempo, mas também destaca a importância de enfrentar os fatores de risco relacionados às DCNTs para garantir a saúde e o bem-estar a longo prazo.",
    "reference": "Duarte Elisabeth Carmen, Barreto Sandhi Maria. Transição demográfica e epidemiológica: a Epidemiologia e Serviços de Saúde revisita e atualiza o tema. Epidemiol. Serv. Saúde [Internet]. 2012 Dez [citado 2023 Jun 29] ; 21( 4 ): 529-532. Oliveira AS. TRANSIÇÃO DEMOGRÁFICA, TRANSIÇÃO EPIDEMIOLÓGICA E ENVELHECIMENTO POPULACIONAL NO BRASIL. Hygeia [Internet];15(32):69-7. Goldani MZ, Mosca PRF, Portela AK, Silveira PP, Silva CH da. O impacto da transição demográfico-epidemiológica na saúde da criança e do adolescente do Brasil. Clin Biomed Res [Internet]. 27º de abril de 2012 ;32(1).",
    "tags": [
      "Saúde Coletiva",
      "Demografia"
    ]
  },
  {
    "id": "tp2022-113",
    "module": "Saúde Coletiva",
    "text": "Gestante tem teste rápido para sífilis positivo. Com relação à Notificação Compulsória, deve-se:",
    "options": [
      "(A) Completar a investigação e só notificar após confirmação.",
      "(B) Notificar como \"Gestante com Sífilis\" já na suspeita.",
      "(C) Notificar somente se houver sífilis congênita no feto.",
      "(D) Ignorar pois sífilis não é de notificação compulsória."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas diretrizes de vigilância, a notificação de sífilis deve ocorrer após a confirmação diagnostica.",
    "commentary": "Diferente de algumas outras doenças, a notificação de sífilis pressupõe a confirmação (teste treponêmico + não treponêmico ou histórico de tratamento).",
    "reference": "Protocolo Transmissão Vertical HIV/Sífilis, 2022.",
    "tags": [
      "Vigilância Epidemiológica",
      "IST"
    ]
  },
  {
    "id": "tp2021-112",
    "module": "Saúde Coletiva",
    "text": "Embora a expectativa de vida da população brasileira venha aumentando nas últimas décadas, preocupam as autoridades sanitárias os níveis elevados de mortalidade de adolescentes masculinos, na faixa etária entre 13 e 19 anos, nos grandes e médios centros urbanos. As ações de maior impacto potencial, a curto prazo, para a diminuição da mortalidade desta população devem estar centradas em:",
    "options": [
      "(A) Aumento das ações intersetoriais contra drogas e contra a violência.",
      "(B) Aumento das campanhas de uso de preservativo masculino.",
      "(C) Elevação da renda per capita da população.",
      "(D) Melhoria das condições de saneamento básico."
    ],
    "correctAnswer": 0,
    "explanation": "A principal causa de mortalidade em jovens e adolescentes masculinos no meio urbano brasileiro é constituída por causas externas (homicídios, acidentes de trânsito violento e violências interpessoais). Intervenções intersetoriais integradas direcionadas ao controle da criminalidade, violência urbana e consumo abusivo de entorpecentes/drogas são, portanto, as opções com maior ptencial de retorno e impacto imediato.",
    "commentary": "As causas externas constituem a grande e alarmante epidemia na saúde dos jovens brasileiros, superando infinitamente patologias infecciosas transmissíveis ou crônicas na faixa etária juvenil. Por tal característica, o amparo a este público transborda o espectro estrito de atuação do setor de saúde, demandando políticas territoriais intersetoriais articuladas de segurança, assistência social, lazer e redução de violência.",
    "reference": "BEAGLEHOLE, R.; BONITA, R.; KJELLSTRÖM, T. Epidemiologia básica. 2 ed. São Paulo: Santos / OMS, 2010.",
    "tags": [
      "Saúde do Adolescente",
      "Causas Externas",
      "Vulnerabilidade Social"
    ]
  },
  {
    "id": "tp2019-109",
    "module": "Saúde Coletiva",
    "text": "Mulher, 39 anos, trabalhadora de uma indústria alimentícia, comparece ao Serviço Especializado de Segurança e Medicina do Trabalho da empresa para exame médico periódico. Queixa-se de parestesias nas mãos, com piora noturna e limitação para preensão de objetos. Exerce sua atividade laboral executando movimentos repetitivos de flexão e extensão dos dedos e punhos.\n\nDuas manobras de exame físico para avaliar possível diagnóstico são:",
    "options": [
      "(A) Phalen e Eichoff",
      "(B) Finkelstein e Eichoff",
      "(C) Tinel e Finkelstein",
      "(D) Tinel e Phalen"
    ],
    "correctAnswer": 3,
    "explanation": "Parestesias nas mãos com piora noturna em trabalhadora com movimentos repetitivos de punho: síndrome do túnel do carpo (LER/DORT).\n\nAs manobras indicadas são o sinal de Tinel (percussão do nervo mediano no punho) e o teste de Phalen (flexão máxima do punho).",
    "commentary": "Finkelstein e Eichhoff avaliam a tenossinovite de De Quervain.",
    "reference": "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância em Saúde Ambiental e do Trabalhador. Dor relacionada ao trabalho: lesões por esforços repetitivos (LER) e Distúrbios Osteomusculares Relacionados ao Trabalho (Dort). Brasília: Editora do Ministério da Saúde, 2012. 68 p Manuais Técnicos em Saúde do Trabalhador nº. 10. Protocolos de Complexidade Diferenciada. / http://www.scielo.br/pdf/rbort/v49n5/pt_0102-3616-rbort-49-05-0429.pdf",
    "tags": [
      "saúde coletiva",
      "saúde do trabalhador",
      "ortopedia"
    ]
  },
  {
    "id": "tp2022-17",
    "module": "Ciências Básicas",
    "text": "Paciente com quadro de Doença Encefálica Vascular (AVC) apresentando dificuldade de movimentar o membro superior direito, fala pastosa e desvio da comissura labial à direita. Indique a alternativa que corresponde ao nome do vaso, o ramo e a sua área irrigada, respectivamente:",
    "options": [
      "(A) Cerebral média esquerda / Artéria carótida interna esquerda / Face superolateral do giro pré-central.",
      "(B) Cerebral média direita / Artéria carótida interna direita / Face superolateral do giro pós-central.",
      "(C) Cerebral anterior esquerda / Artéria carótida interna esquerda / Face superolateral do giro pré-central.",
      "(D) Cerebral anterior direita / Artéria carótida interna esquerda / Face medial do giro pós-central."
    ],
    "correctAnswer": 0,
    "explanation": "Déficit motor à direita indica lesão no hemisfério esquerdo. A face superolateral do giro pré-central (área motora) é irrigada pela cerebral média.",
    "commentary": "O déficit motor no lado direito do corpo indica uma lesão no hemisfério cerebral esquerdo devido à decussação das pirâmides. A dificuldade de fala e fraqueza na face e membro superior sugerem acometimento da face superolateral do giro pré-central, território da artéria cerebral média esquerda (ramo da carótida interna).",
    "reference": "MOORE, K. L. Anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.",
    "tags": [
      "Anatomia",
      "Neurologia"
    ]
  },
  {
    "id": "tp2021-11",
    "module": "Ciências Básicas",
    "text": "Homem, 45 anos, em acompanhamento pós-transplante renal há 10 meses, apresenta proteinúria, aumento da creatinina sanguínea e perda progressiva da função do enxerto. Realizada biópsia renal que evidenciou fibrose e anormalidades vasculares. Pode-se concluir que o paciente apresenta rejeição:",
    "options": [
      "(A) Aguda.",
      "(B) Hiperaguda.",
      "(C) Crônica.",
      "(D) Trombótica."
    ],
    "correctAnswer": 2,
    "explanation": "A biópsia renal com predomínio de fibrose intersticial, atrofia tubular e espessamento fibrointimal vascular de curso lento (10 meses pós-transplante) caracteriza a rejeição crônica do enxerto.",
    "commentary": "A rejeição crônica é patologicamente definida por lesão vascular arterial progressiva (íntima espessada secundária a proliferação celular), fibrose intersticial crônica e perda insidiosa de função glomerular renal. A rejeição hiperaguda ocorre em minutos por anticorpos pré-formados, e a aguda desenvolve infiltrado inflamatório túbulo-intersticial em semanas.",
    "reference": "SEMENTILLI, A. et al. Renal transplant pathology: main morphological findings and how to sign out biopsies. J. Bras. Patol. Med. Lab. Aug. 2008",
    "tags": [
      "Patologia",
      "Nefrologia",
      "Cirurgia"
    ]
  },
  {
    "id": "tp2026-16",
    "module": "Ciências Básicas",
    "text": "Um homem de 41 anos, internado por hipertensão resistente e fraqueza muscular, apresenta PA de 168/100mmHg. Exames sanguíneos revelam: potássio 2,9mEq/L (VR: 3,5 - 5,0); bicarbonato 33mEq/L (VR: 22 - 28); pH arterial 7,48 (VR: 7,35 - 7,45), atividade de renina plasmática reduzida e aldosterona elevada. Identifique a alteração que melhor explica os achados clínicos e laboratoriais desse paciente.",
    "options": [
      "(A) Redução da reabsorção distal de Na⁺, com redução da secreção de K⁺ e H⁺, favorecendo diminuição do HCO₃⁻ plasmático.",
      "(B) Aumento da reabsorção distal de Na⁺, com aumento da secreção de K⁺ e H⁺, favorecendo elevação do HCO₃⁻ plasmático.",
      "(C) Aumento da secreção tubular de HCO₃⁻, com redução da reabsorção de Na⁺ e retenção simultânea de K⁺.",
      "(D) Redução da secreção tubular de K⁺, com aumento da excreção de Na⁺ e retenção compensatória de H⁺."
    ],
    "correctAnswer": 1,
    "explanation": "O hiperaldosteronismo primário aumenta a reabsorção distal de Na⁺ (provocando hipertensão) e estimula a secreção de K⁺ e H⁺ pelas células intercaladas, gerando hipocalemia e alcalose metabólica.",
    "commentary": "Comentários sobre a resposta correta:\n(B) O quadro clínico-laboratorial é compatível com hiperaldosteronismo primário. A aldosterona atua promovendo reabsorção distal de Na⁺ (expansão volêmica/hipertensão), secreção tubular ativa de K⁺ (hipocalemia) e secreção de H⁺ pelas células intercaladas alfa, promovendo alcalose metabólica com elevação de HCO₃⁻.\n\nComentários sobre os distratores:\n(A) A aldosterona aumenta, e não reduz, a reabsorção de sódio e a eliminação de K⁺ e H⁺.\n(C) Contradiz o papel de retenção de Na e espoliação de K clássica da aldosterona.\n(D) No hiperaldosteronismo a secreção de K⁺ e de H⁺ está aumentada, e a excreção de Na⁺ reduzida distalmente.",
    "reference": "HALL, John E.; HALL, Michael E. Guyton & Hall - Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: GEN Guanabara Koogan, 2021. Capítulo 28.",
    "tags": [
      "Fisiologia",
      "Nefrologia",
      "Endocrinologia"
    ]
  },
  {
    "id": "enamed-2025-11",
    "module": "ENAMED",
    "text": "Paciente de 25 anos, com duas gestações e um parto, no segundo trimestre de gestação, compareceu à primeira consulta de pré-natal sem queixas. Após orientações e realização dos testes rápidos, verificou-se que o teste para sífilis foi positivo e imediatamente a paciente recebeu 2,4 milhões UI de penicilina benzatina intramuscular. Paciente nega diagnóstico e tratamento prévios para sífilis.\n\nEm relação ao acompanhamento da paciente, é correto afirmar que",
    "options": [
      "(A) com o tratamento instituído, o feto não terá sequelas.",
      "(B) titulações menores ou iguais a um quarto indicarão cicatriz sorológica.",
      "(C) a queda de duas titulações do VDRL indicará efetividade de tratamento.",
      "(D) o exame de FTA-Abs reagente indicará doença ativa."
    ],
    "correctAnswer": 2,
    "explanation": "Embora a questão tenha sido anulada, o acompanhamento da sífilis durante a gestação é realizado principalmente por meio dos testes não treponêmicos, como o VDRL. Em geral, espera-se uma queda de duas diluições (quatro vezes) do título do VDRL após tratamento adequado, indicando resposta terapêutica.",
    "commentary": "Observação: Esta questão foi anulada pelo ENAMED. A alternativa C é a que mais se aproxima do conceito correto, mas a forma como foi redigida gerou interpretação controversa, motivo pelo qual a banca optou pela anulação. A alternativa A é falsa porque o tratamento reduz de forma significativa, mas não zera o risco. B utiliza um conceito inadequado de cicatriz sorológica, que não é definida apenas por um título do VDRL. D é incorreta pois o FTA-Abs permanece reagente por muitos anos (frequentemente para toda a vida) e não indica atividade da doença.",
    "reference": "Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST) / Ministério da Saúde",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "sífilis",
      "gestação"
    ]
  },
  {
    "id": "enamed-2025-63",
    "module": "ENAMED",
    "text": "Uma equipe de Saúde da Família percebeu aumento do número de casos complicados de diabetes mellitus. Entre 3.500 pacientes cadastrados, 280 possuem diabetes tipo 2. A equipe elaborou um projeto de intervenção coletiva com orientação nutricional e incentivo à atividade física para reduzir complicações.\n\nQual é o desenho de pesquisa mais adequado para avaliar o impacto desse projeto?",
    "options": [
      "(A) Estudo de caso-controle aninhado.",
      "(B) Ensaio clínico não randomizado.",
      "(C) Estudo de coorte retrospectivo.",
      "(D) Ensaio clínico randomizado."
    ],
    "correctAnswer": 3,
    "explanation": "Para avaliar com o maior rigor metodológico possível o impacto de uma intervenção ativa (projeto educativo de orientação nutricional e atividade física), eliminando vieses de confusão e seleção, o Ensaio Clínico Randomizado (ECR) é considerado o delineamento experimental padrão-ouro. Nele, os indivíduos (ou as microáreas/grupos) são aleatorizados entre receber a intervenção e o cuidado habitual, permitindo inferir relação de causalidade direta sobre a redução de complicações.",
    "commentary": "Estudos observacionais como coorte retrospectivo (C) e caso-controle (A) apenas avaliam retrospectivamente associações de risco preexistentes, sem controle experimental ativo da intervenção. Ensaios não randomizados (B) sofrem com forte viés de seleção sistemático.",
    "reference": "Epidemiologia Clínica: Elementos Essenciais / Fletcher / Medronho",
    "tags": [
      "saúde coletiva",
      "metodologia científica",
      "epidemiologia",
      "ensaio clínico"
    ]
  },
  {
    "id": "enamed-2025-93",
    "module": "ENAMED",
    "text": "Paciente de 45 anos é atendida na Unidade Básica de Saúde com dor ocular após acidente doméstico com alvejante, que atingiu seu olho direito. Ao exame físico, observa-se hiperemia intensa, opacidade de córnea e queimadura química da pálpebra superior.\n\nQual é o manejo correto?",
    "options": [
      "(A) Prescrever analgésico tópico e colírio lubrificante.",
      "(B) Lavar os olhos com solução de água boricada e realizar curativo oclusivo.",
      "(C) Lavagem ocular com solução fisiológica e avaliação imediata pelo especialista.",
      "(D) Prescrever colírio de corticoide tópico e encaminhar precocemente ao especialista."
    ],
    "correctAnswer": 2,
    "explanation": "Queimaduras químicas oculares (por ácidos ou bases, como o alvejante) constituem emergências oftalmológicas absolutas. A conduta imediata e mais crítica, que deve ser iniciada ainda no local do acidente ou na primeira unidade de saúde atendida, é a lavagem ocular abundante com solução salina (fisiológica) ou água corrente por no mínimo 15 a 30 minutos, visando remover resíduos do agente químico e restaurar o pH fisiológico da superfície ocular. Em seguida, após a lavagem exaustiva, o paciente deve ser encaminhado com extrema urgência para avaliação por um oftalmologista para avaliação de lesão límbica, isquemia e conduta definitiva.",
    "commentary": "Prescrever apenas analgésico e lubrificante (A) ou corticoides tópicos (D) sem lavagem imediata é incorreto e pode levar a sequelas cicatriciais graves e cegueira. A lavagem com água boricada (B) e a realização de curativo oclusivo imediato não são indicados, pois o curativo oclusivo em queimadura química aguda pode reter substâncias nocivas e piorar a isquemia da superfície ocular.",
    "reference": "Manual de Urgências em Oftalmologia / Conselho Brasileiro de Oftalmologia (CBO)",
    "tags": [
      "oftalmologia",
      "urgência e emergência",
      "queimadura química",
      "lavagem ocular",
      "trauma ocular"
    ]
  }
];
