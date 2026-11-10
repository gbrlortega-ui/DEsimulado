/**
 * Roteiro por topografia (ENAMED e Residência Médica): regiões do corpo → especialidades → assuntos.
 * Uma especialidade fica disponível em "Simulado por topografia" assim que tiver questões
 * marcadas com `topography` = id dela (ex.: "1.1"). Regiões sem subdivisão usam o próprio id ("8").
 */
export interface TopographyTopic {
  name: string;
  /** Principais pontos cobrados. */
  points: string;
}
export interface TopographyGroup {
  id: string;
  name: string;
  topics: TopographyTopic[];
}
export interface TopographyRegion {
  id: string;
  name: string;
  groups: TopographyGroup[];
}

export const TOPOGRAPHY: TopographyRegion[] = [
  {
    id: "1",
    name: "Cabeça e pescoço",
    groups: [
      {
        id: "1.1",
        name: "Neurologia",
        topics: [
          {
            name: "Cefaleias",
            points: "Enxaqueca, tensional, salvas, sinais de alarme e tratamento"
          },
          {
            name: "AVC",
            points: "Isquêmico x hemorrágico, trombólise, trombectomia e NIHSS"
          },
          {
            name: "Ataque isquêmico transitório",
            points: "Diagnóstico, risco de AVC e prevenção secundária"
          },
          {
            name: "Epilepsia",
            points: "Tipos de crises, estado de mal epiléptico e tratamento"
          },
          {
            name: "Convulsão febril",
            points: "Crise simples x complexa e conduta"
          },
          {
            name: "Meningite",
            points: "Bacteriana x viral, sinais meníngeos, líquor e tratamento"
          },
          {
            name: "Encefalite",
            points: "HSV, manifestações e diagnóstico"
          },
          {
            name: "Demências",
            points: "Alzheimer, vascular, corpos de Lewy e frontotemporal"
          },
          {
            name: "Parkinson",
            points: "Sinais motores, diagnóstico e tratamento"
          },
          {
            name: "Esclerose múltipla",
            points: "Desmielinização e critérios diagnósticos"
          },
          {
            name: "Hipertensão intracraniana",
            points: "Papiledema, tríade de Cushing e herniação"
          },
          {
            name: "Tumores cerebrais",
            points: "Gliomas, meningiomas e metástases"
          },
          {
            name: "TCE",
            points: "Glasgow, hematoma epidural e subdural"
          }
        ]
      },
      {
        id: "1.2",
        name: "Oftalmologia",
        topics: [
          {
            name: "Conjuntivite",
            points: "Viral, bacteriana e alérgica"
          },
          {
            name: "Catarata",
            points: "Fatores de risco, quadro clínico e tratamento"
          },
          {
            name: "Glaucoma",
            points: "Ângulo aberto x fechado e pressão intraocular"
          },
          {
            name: "Retinopatia diabética",
            points: "Não proliferativa x proliferativa"
          },
          {
            name: "Retinopatia hipertensiva",
            points: "Alterações vasculares"
          },
          {
            name: "Descolamento de retina",
            points: "Fotopsias, moscas volantes e cortina visual"
          },
          {
            name: "Uveíte",
            points: "Olho vermelho doloroso e fotofobia"
          },
          {
            name: "Ceratite",
            points: "Lentes de contato e úlcera de córnea"
          },
          {
            name: "Erros refrativos",
            points: "Miopia, hipermetropia, astigmatismo e presbiopia"
          },
          {
            name: "Perda visual súbita",
            points: "Oclusão arterial, neurite óptica e descolamento"
          }
        ]
      },
      {
        id: "1.3",
        name: "Otorrinolaringologia",
        topics: [
          {
            name: "Amigdalite/faringoamigdalite",
            points: "Viral x estreptocócica, Centor/McIsaac e antibióticos"
          },
          {
            name: "Abscesso peritonsilar",
            points: "Trismo, voz abafada e desvio de úvula"
          },
          {
            name: "Sinusite/rinossinusite",
            points: "Viral x bacteriana, critérios diagnósticos e tratamento"
          },
          {
            name: "Otite média aguda",
            points: "Diagnóstico, amoxicilina e complicações"
          },
          {
            name: "Otite externa",
            points: "Pseudomonas e dor à mobilização do pavilhão"
          },
          {
            name: "Mastoidite",
            points: "Complicação da otite média"
          },
          {
            name: "Rinite alérgica",
            points: "Imunopatologia e tratamento"
          },
          {
            name: "Epistaxe",
            points: "Sangramento anterior x posterior"
          },
          {
            name: "Apneia obstrutiva do sono",
            points: "Ronco, IAH e CPAP"
          },
          {
            name: "Vertigem",
            points: "VPPB, neurite vestibular e Ménière"
          },
          {
            name: "Surdez",
            points: "Condutiva x neurossensorial, Weber e Rinne"
          },
          {
            name: "Laringite",
            points: "Etiologia e manifestações"
          },
          {
            name: "Câncer de cabeça e pescoço",
            points: "Tabagismo, HPV e sinais de alerta"
          }
        ]
      },
      {
        id: "1.4",
        name: "Boca e cavidade oral",
        topics: [
          {
            name: "Candidíase oral",
            points: "Placas removíveis e fatores predisponentes"
          },
          {
            name: "Herpes simples",
            points: "Gengivoestomatite e recorrência"
          },
          {
            name: "Aftas",
            points: "Diagnóstico diferencial"
          },
          {
            name: "Leucoplasia",
            points: "Lesão potencialmente maligna"
          },
          {
            name: "Câncer de boca",
            points: "Úlcera persistente e fatores de risco"
          },
          {
            name: "Doença periodontal",
            points: "Gengivite x periodontite"
          },
          {
            name: "Sialadenite",
            points: "Infecção das glândulas salivares"
          },
          {
            name: "Sialolitíase",
            points: "Obstrução ductal e dor relacionada às refeições"
          }
        ]
      },
      {
        id: "1.5",
        name: "Tireoide e região cervical",
        topics: [
          {
            name: "Hipotireoidismo",
            points: "TSH, T4 livre, Hashimoto e levotiroxina"
          },
          {
            name: "Hipertireoidismo",
            points: "Graves, bócio multinodular tóxico e exames"
          },
          {
            name: "Tireoidites",
            points: "Hashimoto, De Quervain e tireoidite silenciosa"
          },
          {
            name: "Nódulos tireoidianos",
            points: "TSH, ultrassonografia, TI-RADS e PAAF"
          },
          {
            name: "Câncer de tireoide",
            points: "Papilífero, folicular, medular e anaplásico"
          },
          {
            name: "Bócio",
            points: "Difuso, nodular e investigação"
          },
          {
            name: "Tempestade tireotóxica",
            points: "Reconhecimento e tratamento"
          },
          {
            name: "Coma mixedematoso",
            points: "Hipotermia e alteração de consciência"
          },
          {
            name: "Hiperparatireoidismo",
            points: "Hipercalcemia e PTH"
          },
          {
            name: "Hipoparatireoidismo",
            points: "Hipocalcemia, Chvostek e Trousseau"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Tórax",
    groups: [
      {
        id: "2.1",
        name: "Pneumologia",
        topics: [
          {
            name: "Asma",
            points: "Fisiopatologia, espirometria, tratamento e GINA"
          },
          {
            name: "DPOC",
            points: "Tabagismo, VEF1/CVF, GOLD e exacerbação"
          },
          {
            name: "Pneumonia comunitária",
            points: "Diagnóstico, CURB-65 e antibióticos"
          },
          {
            name: "Pneumonia hospitalar",
            points: "Agentes etiológicos e antibioticoterapia"
          },
          {
            name: "Tuberculose pulmonar",
            points: "Baciloscopia, TRM-TB e tratamento"
          },
          {
            name: "Derrame pleural",
            points: "Transudato x exsudato e critérios de Light"
          },
          {
            name: "Pneumotórax",
            points: "Simples, hipertensivo e conduta"
          },
          {
            name: "Embolia pulmonar",
            points: "Wells, PERC, dímero-D e angiotomografia"
          },
          {
            name: "Câncer de pulmão",
            points: "Pequenas células x não pequenas células"
          },
          {
            name: "Bronquiectasias",
            points: "Infecções recorrentes e imagem"
          },
          {
            name: "Fibrose pulmonar",
            points: "Doença intersticial e padrão restritivo"
          },
          {
            name: "Apneia do sono",
            points: "Polissonografia e tratamento"
          },
          {
            name: "Insuficiência respiratória",
            points: "Hipoxêmica x hipercápnica"
          },
          {
            name: "SDRA",
            points: "Critérios de Berlim e ventilação protetora"
          },
          {
            name: "Tabagismo",
            points: "Carga tabágica, dependência e cessação"
          }
        ]
      },
      {
        id: "2.2",
        name: "Cardiologia",
        topics: [
          {
            name: "Hipertensão arterial sistêmica",
            points: "Diagnóstico, classificação, tratamento e lesões de órgão-alvo"
          },
          {
            name: "Insuficiência cardíaca",
            points: "FE reduzida x preservada, NYHA e tratamento"
          },
          {
            name: "Síndrome coronariana aguda",
            points: "IAM com supra, sem supra e angina instável"
          },
          {
            name: "Doença arterial coronariana crônica",
            points: "Estratificação, testes funcionais e FFR/iFR"
          },
          {
            name: "Infarto agudo do miocárdio",
            points: "ECG, troponina, reperfusão e complicações"
          },
          {
            name: "Arritmias",
            points: "FA, flutter, TSV, TV, FV e bloqueios AV"
          },
          {
            name: "Fibrilação atrial",
            points: "CHA₂DS₂-VASc, anticoagulação e controle de frequência"
          },
          {
            name: "Valvopatias",
            points: "Estenose aórtica, insuficiência mitral e estenose mitral"
          },
          {
            name: "Endocardite infecciosa",
            points: "Critérios de Duke, hemoculturas e antibióticos"
          },
          {
            name: "Pericardite",
            points: "Dor típica, ECG, derrame e tamponamento"
          },
          {
            name: "Miocardite",
            points: "Etiologia e diagnóstico"
          },
          {
            name: "Cardiomiopatias",
            points: "Dilatada, hipertrófica e restritiva"
          },
          {
            name: "Febre reumática",
            points: "Critérios de Jones e profilaxia"
          },
          {
            name: "Choque cardiogênico",
            points: "Diagnóstico e tratamento"
          },
          {
            name: "Doença arterial periférica",
            points: "ITB, claudicação e isquemia crítica"
          },
          {
            name: "Dislipidemia",
            points: "LDL, risco cardiovascular e estatinas"
          },
          {
            name: "Síncope",
            points: "Causas cardíacas, neurológicas e vasovagais"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Abdome superior",
    groups: [
      {
        id: "3.1",
        name: "Gastroenterologia",
        topics: [
          {
            name: "DRGE",
            points: "Fisiopatologia, sintomas, IBP e endoscopia"
          },
          {
            name: "Gastrite",
            points: "H. pylori e AINEs"
          },
          {
            name: "Úlcera péptica",
            points: "Gástrica x duodenal e complicações"
          },
          {
            name: "Hemorragia digestiva alta",
            points: "Varicosa x não varicosa e endoscopia"
          },
          {
            name: "Hemorragia digestiva baixa",
            points: "Divertículos, angiodisplasia e neoplasias"
          },
          {
            name: "Dispepsia funcional",
            points: "Critérios e tratamento"
          },
          {
            name: "Doença celíaca",
            points: "Anti-transglutaminase e biópsia"
          },
          {
            name: "Doença inflamatória intestinal",
            points: "Crohn x retocolite ulcerativa"
          },
          {
            name: "Síndrome do intestino irritável",
            points: "Critérios de Roma IV"
          },
          {
            name: "Diarreia aguda",
            points: "Infecciosa, inflamatória e aquosa"
          },
          {
            name: "Diarreia crônica",
            points: "Má absorção, inflamação e causas funcionais"
          },
          {
            name: "Constipação intestinal",
            points: "Causas, sinais de alarme e tratamento"
          },
          {
            name: "Diverticulose/diverticulite",
            points: "Quadro clínico e conduta"
          },
          {
            name: "Câncer colorretal",
            points: "Rastreamento e sinais de alerta"
          },
          {
            name: "Doença hemorroidária",
            points: "Classificação e tratamento"
          },
          {
            name: "Fissura anal",
            points: "Dor evacuatória e sangramento"
          }
        ]
      },
      {
        id: "3.2",
        name: "Hepatologia",
        topics: [
          {
            name: "Hepatites virais",
            points: "A, B, C, D e E, sorologias e vacinação"
          },
          {
            name: "Cirrose hepática",
            points: "Etiologia, Child-Pugh e MELD"
          },
          {
            name: "Hipertensão portal",
            points: "Varizes, esplenomegalia e ascite"
          },
          {
            name: "Ascite",
            points: "Gradiente albumina soro-ascite (GASA)"
          },
          {
            name: "Peritonite bacteriana espontânea",
            points: "Diagnóstico e tratamento"
          },
          {
            name: "Encefalopatia hepática",
            points: "Graus, precipitantes e lactulose"
          },
          {
            name: "Síndrome hepatorrenal",
            points: "Fisiopatologia e diagnóstico"
          },
          {
            name: "Esteatose hepática/MASLD",
            points: "Resistência à insulina e fibrose"
          },
          {
            name: "Hepatocarcinoma",
            points: "Rastreamento e diagnóstico"
          },
          {
            name: "Insuficiência hepática aguda",
            points: "INR, encefalopatia e transplante"
          },
          {
            name: "Icterícia",
            points: "Pré-hepática, hepática e pós-hepática"
          },
          {
            name: "Colestase",
            points: "FA, GGT e bilirrubina direta"
          }
        ]
      },
      {
        id: "3.3",
        name: "Vesícula biliar e vias biliares",
        topics: [
          {
            name: "Colelitíase",
            points: "Fatores de risco e indicação cirúrgica"
          },
          {
            name: "Colecistite aguda",
            points: "Murphy, ultrassonografia e cirurgia"
          },
          {
            name: "Coledocolitíase",
            points: "Icterícia, colestase, colangiorressonância e CPRE"
          },
          {
            name: "Colangite aguda",
            points: "Tríade de Charcot e pêntade de Reynolds"
          },
          {
            name: "Pancreatite biliar",
            points: "Etiologia, diagnóstico e tratamento"
          },
          {
            name: "Câncer de vesícula",
            points: "Fatores de risco e manifestações"
          },
          {
            name: "Colangiocarcinoma",
            points: "Obstrução biliar e investigação"
          }
        ]
      },
      {
        id: "3.4",
        name: "Pâncreas",
        topics: [
          {
            name: "Pancreatite aguda",
            points: "Critérios de Atlanta, lipase e tratamento"
          },
          {
            name: "Pancreatite crônica",
            points: "Insuficiência exócrina, dor e calcificações"
          },
          {
            name: "Câncer de pâncreas",
            points: "Icterícia indolor e perda ponderal"
          },
          {
            name: "Insuficiência pancreática exócrina",
            points: "Esteatorreia e má absorção"
          },
          {
            name: "Diabetes pancreatogênico",
            points: "Relação com doença pancreática"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Abdome inferior e sistema urinário",
    groups: [
      {
        id: "4.1",
        name: "Nefrologia",
        topics: [
          {
            name: "Lesão renal aguda",
            points: "Pré-renal, renal e pós-renal, KDIGO"
          },
          {
            name: "Doença renal crônica",
            points: "TFG, albuminúria e estágios"
          },
          {
            name: "Glomerulonefrite",
            points: "Hematúria, proteinúria e complemento"
          },
          {
            name: "Síndrome nefrótica",
            points: "Proteinúria, edema e hipoalbuminemia"
          },
          {
            name: "Síndrome nefrítica",
            points: "Hematúria, hipertensão e oligúria"
          },
          {
            name: "Nefropatia diabética",
            points: "Albuminúria e progressão"
          },
          {
            name: "Nefroesclerose hipertensiva",
            points: "Lesão renal crônica"
          },
          {
            name: "Nefrolitíase",
            points: "Tipos de cálculos e investigação metabólica"
          },
          {
            name: "Pielonefrite",
            points: "Quadro clínico e antibióticos"
          },
          {
            name: "Cistite",
            points: "Diagnóstico e tratamento"
          },
          {
            name: "Distúrbios hidroeletrolíticos",
            points: "Sódio, potássio, cálcio e magnésio"
          },
          {
            name: "Distúrbios ácido-base",
            points: "Acidose e alcalose metabólica e respiratória"
          },
          {
            name: "Doença renal policística",
            points: "Genética e complicações"
          },
          {
            name: "Nefrite intersticial",
            points: "AINEs, antibióticos e medicamentos"
          }
        ]
      },
      {
        id: "4.2",
        name: "Urologia",
        topics: [
          {
            name: "Hiperplasia prostática benigna",
            points: "LUTS, IPSS e tratamento"
          },
          {
            name: "Câncer de próstata",
            points: "PSA, toque e biópsia"
          },
          {
            name: "Câncer de bexiga",
            points: "Hematúria indolor e tabagismo"
          },
          {
            name: "Câncer renal",
            points: "Manifestações e diagnóstico por imagem"
          },
          {
            name: "Torção testicular",
            points: "Emergência e tratamento cirúrgico"
          },
          {
            name: "Epididimite/orquite",
            points: "Diferenciação clínica e tratamento"
          },
          {
            name: "Varicocele",
            points: "Infertilidade e exame físico"
          },
          {
            name: "Hidrocele",
            points: "Diagnóstico e diferenciação"
          },
          {
            name: "Retenção urinária",
            points: "Conduta e investigação"
          },
          {
            name: "Incontinência urinária",
            points: "Esforço, urgência e transbordamento"
          },
          {
            name: "Estenose de uretra",
            points: "Jato fraco e retenção"
          },
          {
            name: "Fimose",
            points: "Tratamento clínico x cirúrgico"
          }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Sistema reprodutor e pelve",
    groups: [
      {
        id: "5.1",
        name: "Ginecologia",
        topics: [
          {
            name: "Sangramento uterino anormal",
            points: "PALM-COEIN e tratamento"
          },
          {
            name: "Síndrome dos ovários policísticos",
            points: "Rotterdam e hiperandrogenismo"
          },
          {
            name: "Endometriose",
            points: "Dor pélvica, dismenorreia e infertilidade"
          },
          {
            name: "Mioma uterino",
            points: "Classificação e tratamento"
          },
          {
            name: "Adenomiose",
            points: "Dismenorreia e útero aumentado"
          },
          {
            name: "Câncer de colo uterino",
            points: "HPV e rastreamento"
          },
          {
            name: "Câncer de endométrio",
            points: "Sangramento pós-menopausa"
          },
          {
            name: "Câncer de ovário",
            points: "Massa anexial e fatores de risco"
          },
          {
            name: "Doença inflamatória pélvica",
            points: "Critérios clínicos e antibióticos"
          },
          {
            name: "Vaginose bacteriana",
            points: "Corrimento, pH e clue cells"
          },
          {
            name: "Candidíase vaginal",
            points: "Prurido e corrimento"
          },
          {
            name: "Tricomoníase",
            points: "Corrimento e tratamento do casal"
          },
          {
            name: "Climatério e menopausa",
            points: "Terapia hormonal e contraindicações"
          },
          {
            name: "Prolapso genital",
            points: "Classificação e tratamento"
          },
          {
            name: "Infertilidade",
            points: "Investigação do casal"
          },
          {
            name: "Contracepção",
            points: "Métodos, eficácia e contraindicações"
          },
          {
            name: "Planejamento reprodutivo",
            points: "Métodos reversíveis e definitivos"
          }
        ]
      },
      {
        id: "5.2",
        name: "Obstetrícia",
        topics: [
          {
            name: "Pré-natal",
            points: "Consultas, exames, vacinação e suplementação"
          },
          {
            name: "Diagnóstico de gravidez",
            points: "Beta-hCG e ultrassonografia"
          },
          {
            name: "Idade gestacional",
            points: "DUM, ultrassom e DPP"
          },
          {
            name: "Trabalho de parto",
            points: "Fases, dinâmica uterina e partograma"
          },
          {
            name: "Assistência ao parto",
            points: "Parto vaginal e indicações de cesariana"
          },
          {
            name: "Pré-eclâmpsia",
            points: "Hipertensão, proteinúria e gravidade"
          },
          {
            name: "Eclâmpsia",
            points: "Convulsões e sulfato de magnésio"
          },
          {
            name: "Síndrome HELLP",
            points: "Hemólise, enzimas hepáticas e plaquetopenia"
          },
          {
            name: "Diabetes gestacional",
            points: "Rastreamento e tratamento"
          },
          {
            name: "Hemorragia pós-parto",
            points: "Quatro Ts e manejo"
          },
          {
            name: "Placenta prévia",
            points: "Sangramento indolor"
          },
          {
            name: "Descolamento prematuro de placenta",
            points: "Dor, hipertonia e sangramento"
          },
          {
            name: "Gravidez ectópica",
            points: "Beta-hCG e ultrassonografia"
          },
          {
            name: "Abortamento",
            points: "Tipos, diagnóstico e conduta"
          },
          {
            name: "Isoimunização Rh",
            points: "Coombs indireto e imunoglobulina anti-D"
          },
          {
            name: "Restrição de crescimento fetal",
            points: "Doppler e vigilância"
          },
          {
            name: "Rotura prematura de membranas",
            points: "Diagnóstico e conduta"
          },
          {
            name: "Infecções na gestação",
            points: "Sífilis, HIV, toxoplasmose e hepatites"
          },
          {
            name: "Puerpério",
            points: "Hemorragia, infecção e amamentação"
          }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Sistema musculoesquelético",
    groups: [
      {
        id: "6.1",
        name: "Reumatologia",
        topics: [
          {
            name: "Artrite reumatoide",
            points: "FR, anti-CCP e critérios ACR/EULAR"
          },
          {
            name: "Osteoartrose",
            points: "Degeneração da cartilagem e tratamento"
          },
          {
            name: "Gota",
            points: "Hiperuricemia e cristais de urato"
          },
          {
            name: "Pseudogota",
            points: "Cristais de pirofosfato de cálcio"
          },
          {
            name: "Artrite séptica",
            points: "S. aureus, artrocentese e antibióticos"
          },
          {
            name: "Espondilite anquilosante",
            points: "HLA-B27 e sacroileíte"
          },
          {
            name: "Lúpus eritematoso sistêmico",
            points: "FAN, anti-DNA e complemento"
          },
          {
            name: "Síndrome de Sjögren",
            points: "Xeroftalmia e xerostomia"
          },
          {
            name: "Esclerose sistêmica",
            points: "Raynaud e fibrose"
          },
          {
            name: "Vasculites",
            points: "ANCA e manifestações clínicas"
          },
          {
            name: "Polimialgia reumática",
            points: "Dor e rigidez em cinturas"
          },
          {
            name: "Fibromialgia",
            points: "Dor crônica difusa"
          },
          {
            name: "Osteoporose",
            points: "Densitometria, FRAX e tratamento"
          },
          {
            name: "Osteomielite",
            points: "Etiologia e diagnóstico"
          },
          {
            name: "Bursites e tendinopatias",
            points: "Diagnóstico diferencial e manejo"
          }
        ]
      },
      {
        id: "6.2",
        name: "Ortopedia e traumatologia",
        topics: [
          {
            name: "Fraturas",
            points: "Classificação, consolidação e complicações"
          },
          {
            name: "Luxações",
            points: "Redução e avaliação neurovascular"
          },
          {
            name: "Lesão do ligamento cruzado anterior",
            points: "Testes clínicos e tratamento"
          },
          {
            name: "Lesão meniscal",
            points: "McMurray e Thessaly"
          },
          {
            name: "Lesões do manguito rotador",
            points: "Testes e diagnóstico"
          },
          {
            name: "Síndrome do túnel do carpo",
            points: "Nervo mediano e testes clínicos"
          },
          {
            name: "Lombalgia",
            points: "Sinais de alerta e manejo"
          },
          {
            name: "Hérnia de disco",
            points: "Radiculopatia e tratamento"
          },
          {
            name: "Síndrome da cauda equina",
            points: "Emergência neurológica"
          },
          {
            name: "Escoliose",
            points: "Diagnóstico e acompanhamento"
          },
          {
            name: "Pé diabético",
            points: "Classificação, infecção e isquemia"
          },
          {
            name: "Síndrome compartimental",
            points: "Dor desproporcional e emergência"
          }
        ]
      }
    ]
  },
  {
    id: "7",
    name: "Sistema vascular e dermatológico",
    groups: [
      {
        id: "7.1",
        name: "Angiologia e cirurgia vascular",
        topics: [
          {
            name: "Trombose venosa profunda",
            points: "Wells, dímero-D, ultrassom e anticoagulação"
          },
          {
            name: "Insuficiência venosa crônica",
            points: "Varizes, edema e úlceras"
          },
          {
            name: "Doença arterial periférica",
            points: "ITB, claudicação e isquemia"
          },
          {
            name: "Isquemia arterial aguda",
            points: "Seis Ps e revascularização"
          },
          {
            name: "Aneurisma de aorta abdominal",
            points: "Rastreamento e cirurgia"
          },
          {
            name: "Dissecção de aorta",
            points: "Dor súbita e Stanford A/B"
          },
          {
            name: "Linfedema",
            points: "Causas e diferenciação do edema venoso"
          }
        ]
      },
      {
        id: "7.2",
        name: "Dermatologia",
        topics: [
          {
            name: "Dermatite atópica",
            points: "Barreira cutânea e tratamento"
          },
          {
            name: "Dermatite de contato",
            points: "Irritativa x alérgica"
          },
          {
            name: "Psoríase",
            points: "Placas, sinal de Auspitz e artrite"
          },
          {
            name: "Escabiose",
            points: "Prurido noturno e tratamento dos contatos"
          },
          {
            name: "Impetigo",
            points: "Crostas melicéricas"
          },
          {
            name: "Erisipela",
            points: "Infecção superficial e limites definidos"
          },
          {
            name: "Celulite",
            points: "Infecção de derme e tecido subcutâneo"
          },
          {
            name: "Hanseníase",
            points: "Lesões, sensibilidade e nervos"
          },
          {
            name: "Melanoma",
            points: "ABCDE e Breslow"
          },
          {
            name: "Carcinoma basocelular",
            points: "Lesão perolada"
          },
          {
            name: "Carcinoma espinocelular",
            points: "Lesões queratósicas e risco metastático"
          },
          {
            name: "Herpes-zóster",
            points: "Distribuição dermatomérica"
          },
          {
            name: "Urticária",
            points: "Histamina e angioedema"
          },
          {
            name: "Pênfigo e penfigoide",
            points: "Autoimunidade e bolhas"
          }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Endocrinologia e metabolismo",
    groups: [
      {
        id: "8",
        name: "Endocrinologia e metabolismo",
        topics: [
          {
            name: "Diabetes mellitus tipo 1 e 2",
            points: "Diagnóstico, fisiopatologia e tratamento"
          },
          {
            name: "Cetoacidose diabética",
            points: "Ânion gap, cetonas e potássio"
          },
          {
            name: "Estado hiperosmolar",
            points: "Hiperglicemia e desidratação"
          },
          {
            name: "Hipoglicemia",
            points: "Classificação e conduta"
          },
          {
            name: "Obesidade",
            points: "IMC e tratamento"
          },
          {
            name: "Síndrome metabólica",
            points: "Critérios diagnósticos"
          },
          {
            name: "Dislipidemia",
            points: "LDL, HDL, triglicerídeos e estatinas"
          },
          {
            name: "Síndrome de Cushing",
            points: "Cortisol e testes diagnósticos"
          },
          {
            name: "Insuficiência adrenal",
            points: "Addison e crise adrenal"
          },
          {
            name: "Hiperaldosteronismo primário",
            points: "Hipertensão e hipocalemia"
          },
          {
            name: "Feocromocitoma",
            points: "Cefaleia, sudorese e palpitações"
          },
          {
            name: "Acromegalia",
            points: "GH, IGF-1 e manifestações"
          },
          {
            name: "Prolactinoma",
            points: "Hiperprolactinemia e tratamento"
          },
          {
            name: "Diabetes insipidus",
            points: "Central x nefrogênico"
          },
          {
            name: "SIADH",
            points: "Hiponatremia e osmolaridade"
          },
          {
            name: "Distúrbios do cálcio",
            points: "Hipercalcemia e hipocalcemia"
          }
        ]
      }
    ]
  },
  {
    id: "9",
    name: "Hematologia e oncologia",
    groups: [
      {
        id: "9",
        name: "Hematologia e oncologia",
        topics: [
          {
            name: "Anemias",
            points: "Microcítica, normocítica e macrocítica"
          },
          {
            name: "Anemia ferropriva",
            points: "Ferritina e saturação de transferrina"
          },
          {
            name: "Anemia megaloblástica",
            points: "B12, folato e alterações neurológicas"
          },
          {
            name: "Anemia hemolítica",
            points: "LDH, bilirrubina indireta e haptoglobina"
          },
          {
            name: "Anemia falciforme",
            points: "Crises, complicações e profilaxia"
          },
          {
            name: "Talassemias",
            points: "Eletroforese de hemoglobina"
          },
          {
            name: "Leucemias",
            points: "Agudas x crônicas, mieloides x linfoides"
          },
          {
            name: "Linfomas",
            points: "Hodgkin x não Hodgkin"
          },
          {
            name: "Mieloma múltiplo",
            points: "CRAB, eletroforese e lesões ósseas"
          },
          {
            name: "Trombocitopenias",
            points: "PTI, PTT e SHU"
          },
          {
            name: "Coagulopatias",
            points: "Hemofilia A/B e doença de von Willebrand"
          },
          {
            name: "CIVD",
            points: "Consumo de fatores e plaquetas"
          },
          {
            name: "Neutropenia febril",
            points: "Emergência oncológica"
          },
          {
            name: "Transfusão sanguínea",
            points: "Indicações, compatibilidade e reações"
          },
          {
            name: "Síndrome de lise tumoral",
            points: "Alterações metabólicas e prevenção"
          }
        ]
      }
    ]
  },
  {
    id: "10",
    name: "Infectologia",
    groups: [
      {
        id: "10",
        name: "Infectologia",
        topics: [
          {
            name: "HIV/AIDS",
            points: "Diagnóstico, TARV, CD4 e infecções oportunistas"
          },
          {
            name: "Sífilis",
            points: "Estágios, VDRL e tratamento"
          },
          {
            name: "Tuberculose",
            points: "Diagnóstico, tratamento e contatos"
          },
          {
            name: "Dengue",
            points: "Classificação, sinais de alarme e hidratação"
          },
          {
            name: "Chikungunya",
            points: "Artralgia aguda e crônica"
          },
          {
            name: "Zika",
            points: "Manifestações e gestação"
          },
          {
            name: "Febre amarela",
            points: "Vacinação e manifestações graves"
          },
          {
            name: "Leptospirose",
            points: "Exposição, icterícia e insuficiência renal"
          },
          {
            name: "Malária",
            points: "Diagnóstico e tratamento por espécie"
          },
          {
            name: "Doença de Chagas",
            points: "Fases aguda e crônica"
          },
          {
            name: "Toxoplasmose",
            points: "Gestação e imunossuprimidos"
          },
          {
            name: "Sepse",
            points: "SOFA, lactato, culturas e tratamento"
          },
          {
            name: "Meningococcemia",
            points: "Petéquias, púrpura e choque"
          },
          {
            name: "Endocardite",
            points: "Hemoculturas e critérios de Duke"
          },
          {
            name: "Osteomielite",
            points: "Agentes etiológicos e diagnóstico"
          },
          {
            name: "Infecções sexualmente transmissíveis",
            points: "Diagnóstico sindrômico e etiológico"
          },
          {
            name: "Raiva",
            points: "Profilaxia pós-exposição"
          },
          {
            name: "Tétano",
            points: "Profilaxia e tratamento"
          },
          {
            name: "Infecções relacionadas à assistência",
            points: "Prevenção e controle"
          }
        ]
      }
    ]
  },
  {
    id: "11",
    name: "Pediatria e neonatologia",
    groups: [
      {
        id: "11",
        name: "Pediatria e neonatologia",
        topics: [
          {
            name: "Puericultura",
            points: "Crescimento, desenvolvimento e consultas"
          },
          {
            name: "Aleitamento materno",
            points: "Composição, benefícios e dificuldades"
          },
          {
            name: "Alimentação complementar",
            points: "Introdução alimentar aos 6 meses"
          },
          {
            name: "Calendário vacinal",
            points: "PNI e situações especiais"
          },
          {
            name: "Desenvolvimento neuropsicomotor",
            points: "Marcos do desenvolvimento"
          },
          {
            name: "Desnutrição",
            points: "Classificação e manejo"
          },
          {
            name: "Obesidade infantil",
            points: "Diagnóstico e acompanhamento"
          },
          {
            name: "Anemia ferropriva",
            points: "Prevenção, rastreio e tratamento"
          },
          {
            name: "Icterícia neonatal",
            points: "Bilirrubina e fototerapia"
          },
          {
            name: "Sepse neonatal",
            points: "Fatores de risco e antibióticos"
          },
          {
            name: "Prematuridade",
            points: "Complicações e acompanhamento"
          },
          {
            name: "Síndrome do desconforto respiratório neonatal",
            points: "Surfactante e suporte respiratório"
          },
          {
            name: "Bronquiolite",
            points: "Diagnóstico e suporte"
          },
          {
            name: "Asma infantil",
            points: "Diagnóstico e tratamento"
          },
          {
            name: "Pneumonia infantil",
            points: "Classificação e tratamento"
          },
          {
            name: "Diarreia aguda",
            points: "Planos A, B e C"
          },
          {
            name: "Desidratação",
            points: "Classificação e reposição"
          },
          {
            name: "Refluxo gastroesofágico",
            points: "Fisiológico x doença"
          },
          {
            name: "Convulsão febril",
            points: "Critérios e conduta"
          },
          {
            name: "ITU pediátrica",
            points: "Investigação e imagem"
          },
          {
            name: "Cardiopatias congênitas",
            points: "Cianóticas x acianóticas"
          },
          {
            name: "Púrpura de Henoch-Schönlein",
            points: "Manifestações e complicações"
          },
          {
            name: "Doença de Kawasaki",
            points: "Critérios clínicos e tratamento"
          },
          {
            name: "Maus-tratos infantis",
            points: "Identificação e notificação"
          }
        ]
      }
    ]
  },
  {
    id: "12",
    name: "Geriatria",
    groups: [
      {
        id: "12",
        name: "Geriatria",
        topics: [
          {
            name: "Síndrome da fragilidade",
            points: "Critérios e avaliação"
          },
          {
            name: "Delirium",
            points: "Início agudo, flutuação e causas"
          },
          {
            name: "Demências",
            points: "Diagnóstico diferencial"
          },
          {
            name: "Quedas",
            points: "Avaliação multifatorial e prevenção"
          },
          {
            name: "Polifarmácia",
            points: "Medicamentos potencialmente inapropriados"
          },
          {
            name: "Incontinência urinária",
            points: "Tipos e manejo"
          },
          {
            name: "Sarcopenia",
            points: "Força, massa e desempenho muscular"
          },
          {
            name: "Osteoporose",
            points: "Prevenção de fraturas"
          },
          {
            name: "Cuidados paliativos",
            points: "Controle de sintomas e planejamento"
          },
          {
            name: "Depressão no idoso",
            points: "Diagnóstico e diferenciação de demência"
          }
        ]
      }
    ]
  },
  {
    id: "13",
    name: "Psiquiatria",
    groups: [
      {
        id: "13",
        name: "Psiquiatria",
        topics: [
          {
            name: "Depressão maior",
            points: "Critérios diagnósticos e tratamento"
          },
          {
            name: "Transtorno bipolar",
            points: "Mania, hipomania e depressão"
          },
          {
            name: "Esquizofrenia",
            points: "Sintomas positivos e negativos"
          },
          {
            name: "Transtornos de ansiedade",
            points: "TAG, pânico e fobias"
          },
          {
            name: "TOC",
            points: "Obsessões e compulsões"
          },
          {
            name: "TEPT",
            points: "Critérios e tratamento"
          },
          {
            name: "Transtornos alimentares",
            points: "Anorexia e bulimia"
          },
          {
            name: "Dependência química",
            points: "Álcool, tabaco e outras drogas"
          },
          {
            name: "Abstinência alcoólica",
            points: "Delirium tremens e tratamento"
          },
          {
            name: "Risco de suicídio",
            points: "Avaliação e conduta"
          },
          {
            name: "Transtornos de personalidade",
            points: "Características e diagnóstico"
          }
        ]
      }
    ]
  },
  {
    id: "14",
    name: "Medicina de emergência e terapia intensiva",
    groups: [
      {
        id: "14",
        name: "Medicina de emergência e terapia intensiva",
        topics: [
          {
            name: "Parada cardiorrespiratória",
            points: "ACLS e ritmos chocáveis/não chocáveis"
          },
          {
            name: "Choque",
            points: "Hipovolêmico, distributivo, cardiogênico e obstrutivo"
          },
          {
            name: "Sepse e choque séptico",
            points: "Reconhecimento e manejo inicial"
          },
          {
            name: "Insuficiência respiratória",
            points: "Oxigenoterapia, VNI e intubação"
          },
          {
            name: "Anafilaxia",
            points: "Adrenalina IM e manejo"
          },
          {
            name: "Intoxicações",
            points: "Antídotos e abordagem inicial"
          },
          {
            name: "Distúrbios hidroeletrolíticos",
            points: "Correção segura"
          },
          {
            name: "Acidose e alcalose",
            points: "Interpretação da gasometria"
          },
          {
            name: "Hipoglicemia grave",
            points: "Tratamento emergencial"
          },
          {
            name: "Crise hipertensiva",
            points: "Emergência x urgência hipertensiva"
          },
          {
            name: "Emergências neurológicas",
            points: "AVC, convulsões e hipertensão intracraniana"
          },
          {
            name: "Trauma",
            points: "ABCDE, choque hemorrágico e FAST"
          },
          {
            name: "Queimaduras",
            points: "Classificação e reposição"
          },
          {
            name: "Intoxicação por monóxido de carbono",
            points: "Carboxi-hemoglobina e oxigenoterapia"
          },
          {
            name: "Emergências obstétricas",
            points: "Eclâmpsia e hemorragias"
          },
          {
            name: "Emergências pediátricas",
            points: "Insuficiência respiratória, choque e convulsões"
          }
        ]
      }
    ]
  },
  {
    id: "15",
    name: "Medicina preventiva, saúde coletiva e atenção primária",
    groups: [
      {
        id: "15",
        name: "Medicina preventiva, saúde coletiva e atenção primária",
        topics: [
          {
            name: "SUS",
            points: "Princípios e diretrizes"
          },
          {
            name: "Atenção Primária",
            points: "Atributos essenciais e derivados"
          },
          {
            name: "Estratégia Saúde da Família",
            points: "Organização e território"
          },
          {
            name: "Epidemiologia",
            points: "Incidência, prevalência e mortalidade"
          },
          {
            name: "Testes diagnósticos",
            points: "Sensibilidade, especificidade, VPP e VPN"
          },
          {
            name: "Rastreamento",
            points: "Benefícios, riscos e critérios"
          },
          {
            name: "Estudos epidemiológicos",
            points: "Coorte, caso-controle e ensaios clínicos"
          },
          {
            name: "Bioestatística",
            points: "RR, OR, RRR, RRA e NNT"
          },
          {
            name: "Imunização",
            points: "Calendário vacinal e rede de frio"
          },
          {
            name: "Vigilância epidemiológica",
            points: "Notificação compulsória"
          },
          {
            name: "Saúde da mulher",
            points: "Rastreamento de colo uterino e mama"
          },
          {
            name: "Saúde da criança",
            points: "Puericultura e vacinação"
          },
          {
            name: "Saúde do idoso",
            points: "Prevenção de quedas e fragilidade"
          },
          {
            name: "Saúde do trabalhador",
            points: "Nexo causal e doenças ocupacionais"
          },
          {
            name: "Bioética",
            points: "Autonomia, beneficência, não maleficência e justiça"
          },
          {
            name: "Ética médica",
            points: "Sigilo, prontuário e responsabilidade profissional"
          }
        ]
      }
    ]
  },
  {
    id: "16",
    name: "Cirurgia geral e aparelho digestivo",
    groups: [
      {
        id: "16",
        name: "Cirurgia geral e aparelho digestivo",
        topics: [
          {
            name: "Abdome agudo",
            points: "Inflamatório, obstrutivo, perfurativo, vascular e hemorrágico"
          },
          {
            name: "Apendicite aguda",
            points: "Alvarado, imagem e cirurgia"
          },
          {
            name: "Obstrução intestinal",
            points: "Causas, níveis e conduta"
          },
          {
            name: "Perfuração de víscera oca",
            points: "Pneumoperitônio e abordagem"
          },
          {
            name: "Isquemia mesentérica",
            points: "Dor desproporcional e angiotomografia"
          },
          {
            name: "Hérnias",
            points: "Inguinal, femoral, umbilical e encarceramento"
          },
          {
            name: "Colecistite",
            points: "Diagnóstico e tratamento cirúrgico"
          },
          {
            name: "Pancreatite",
            points: "Critérios de gravidade e suporte"
          },
          {
            name: "Trauma abdominal",
            points: "FAST e laparotomia"
          },
          {
            name: "Trauma torácico",
            points: "Pneumotórax hipertensivo, hemotórax e tórax instável"
          },
          {
            name: "Pré-operatório",
            points: "Risco cirúrgico e avaliação clínica"
          },
          {
            name: "Pós-operatório",
            points: "Infecção, trombose, íleo e deiscência"
          },
          {
            name: "Feridas",
            points: "Cicatrização, infecção e curativos"
          },
          {
            name: "Nutrição cirúrgica",
            points: "Avaliação nutricional e suporte"
          }
        ]
      }
    ]
  }
];

export const TOPOGRAPHY_GROUPS = TOPOGRAPHY.flatMap((r) => r.groups);
export const findTopographyGroup = (id?: string) => TOPOGRAPHY_GROUPS.find((g) => g.id === id);
