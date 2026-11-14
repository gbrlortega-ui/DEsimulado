import { Question } from '../types';

// AMRIGS 2026 (RS) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const AMRIGS_2026_QUESTIONS: Question[] = [
  {
    "id": "amrigs2026-1",
    "module": "Clínica Médica",
    "text": "Considerando as características das cefaleias, relacione a Coluna 1 à Coluna 2, associando cada tipo de cefaleia à sua descrição, caso esteja disponível.\n\nColuna 1:\n1. Migrânea.\n2. Cefaleia tipo tensional.\n3. Cefaleias trigêmino-autonômicas.\n4. Cefaleia em salvas.\n\nColuna 2:\n( ) Cefaleia isenta de manifestações associadas, como vômito, latejamento ou agravamento com movimentos.\n( ) Dor profunda, retro-orbital, intensidade excruciante, não flutuante e de característica explosiva.\n( ) Crises repetidas de cefaleia, unilateral e latejante, com duração de 4 a 72 horas em pacientes com exame físico normal.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "options": [
      "4 – 1 – 2.",
      "3 – 4 – 1.",
      "2 – 4 – 1.",
      "2 – 3 – 4."
    ],
    "correctAnswer": 2,
    "explanation": "Associação correta:\n\n• Cefaleia sem náuseas/vômitos, sem latejamento e sem piora com atividade física: cefaleia tipo tensional (2).\n• Dor retro-orbital, excruciante, explosiva: cefaleia em salvas (4).\n• Crises repetidas, unilaterais, latejantes, de 4 a 72 horas, com exame normal: migrânea (1).\n\nSequência: 2 – 4 – 1. As cefaleias trigêmino-autonômicas (3) são o grupo ao qual a cefaleia em salvas pertence e não foram usadas.",
    "commentary": "4 – 1 – 2 (A): troca as três descrições.\n\n3 – 4 – 1 (B): a primeira descrição é a da tensional, não a de trigêmino-autonômica.\n\n2 – 3 – 4 (D): a segunda descreve a salva especificamente, e a terceira é migrânea.",
    "reference": "Classificação Internacional das Cefaleias (ICHD-3) / Sociedade Brasileira de Cefaleia",
    "tags": [
      "cefaleia",
      "migrânea",
      "cefaleia tipo tensional",
      "cefaleia em salvas"
    ],
    "tip": "Migrânea: unilateral, pulsátil, 4–72 h. Salva: retro-orbital, excruciante, curta, com sinais autonômicos."
  },
  {
    "id": "amrigs2026-2",
    "module": "Clínica Médica",
    "text": "Em relação ao delirium, analise as assertivas a seguir:\nI. Suas principais características são o déficit de atenção e o distúrbio de consciência.\nII. É um estado de confusão mental e comportamental de redução da compreensão, coerência e da capacidade de raciocínio, com meses de evolução.\nIII. O clonazepam é o fármaco de escolha para a promoção do sono em pacientes com delirium hiperativo, devido à facilidade de administração e ao baixo risco de eventos adversos.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: o núcleo do delirium é a alteração de atenção e de consciência, de início agudo e curso flutuante.\nII incorreta: o delirium se instala em horas a dias; evolução de meses é característica de demência.\nIII incorreta: benzodiazepínicos pioram e prolongam o delirium; só são indicados na abstinência de álcool ou de sedativos. A prioridade é tratar a causa e usar medidas não farmacológicas para o sono.",
    "commentary": "Apenas III (B): a III está errada.\n\nApenas II e III (C): ambas estão erradas.\n\nI, II e III (D): II e III estão erradas.",
    "reference": "DSM-5-TR / NICE CG103 — Delirium",
    "tags": [
      "delirium",
      "benzodiazepínicos",
      "idoso"
    ],
    "tip": "Delirium = início agudo + desatenção + flutuação. Demência = meses a anos."
  },
  {
    "id": "amrigs2026-3",
    "module": "Clínica Médica",
    "text": "Em relação à influenza A, assinale a alternativa correta.",
    "options": [
      "A transmissibilidade e virulência das cepas virais são bastante previsíveis, o que faz com que não ocorram pandemias em decorrência da influenza A.",
      "A implementação de medidas de isolamento e a restrição de viagens ocorridas durante a pandemia de covid-19 não reduziram a circulação do vírus da influenza A na população.",
      "A plasticidade e a segmentação dos seus genomas e seu extenso reservatório em mamíferos e aves potencializam o seu risco de causar uma pandemia.",
      "A vacinação em massa não se mostrou efetiva para a prevenção de infecção por influenza A."
    ],
    "correctAnswer": 2,
    "explanation": "O vírus influenza A tem genoma segmentado (8 segmentos de RNA) e grande variabilidade: mutações pontuais causam drift antigênico (epidemias sazonais) e o rearranjo de segmentos entre vírus humanos, aviários e suínos causa shift antigênico (novos subtipos, com potencial pandêmico). Os reservatórios em aves e mamíferos ampliam esse risco.",
    "commentary": "Transmissibilidade previsível, sem pandemias (A): a influenza A causou as pandemias de 1918, 1957, 1968 e 2009.\n\nMedidas da covid-19 sem efeito sobre a influenza (B): a circulação de influenza caiu muito durante as medidas de distanciamento em 2020–2021.\n\nVacinação em massa não efetiva (D): a vacinação reduz infecção, internações e óbitos, sobretudo nos grupos de risco.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: influenza / Harrison — Medicina Interna",
    "tags": [
      "influenza A",
      "pandemia",
      "shift antigênico",
      "vacinação"
    ],
    "tip": "Drift = epidemia sazonal; shift (rearranjo de segmentos) = pandemia."
  },
  {
    "id": "amrigs2026-4",
    "module": "Clínica Médica",
    "text": "Em relação à aferição da pressão arterial, analise as seguintes assertivas:\nI. O uso inapropriado de manguito pequeno subestima o valor da pressão arterial.\nII. Definem-se as pressões sistólica e diastólica, respectivamente, com o primeiro e o quinto sons de Korotkoff.\nIII. Em geral, o valor da pressão sistólica aumenta e o valor da diastólica diminui quando a aferição é feita em artérias mais distais.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: manguito pequeno para a circunferência do braço SUPERESTIMA a pressão.\nII correta: a sistólica corresponde ao 1º som de Korotkoff (fase I) e a diastólica ao desaparecimento dos sons (fase V).\nIII correta: em artérias mais distais, a amplificação da onda de pulso eleva a sistólica e reduz discretamente a diastólica.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial — SBC 2020",
    "tags": [
      "pressão arterial",
      "aferição da pressão",
      "sons de Korotkoff",
      "manguito"
    ],
    "tip": "Manguito pequeno = PA falsamente alta."
  },
  {
    "id": "amrigs2026-5",
    "module": "Clínica Médica",
    "text": "O gráfico abaixo apresenta o perfil farmacocinético de três diferentes tipos de insulina para o tratamento do diabetes. As insulinas correspondentes às letras A, B e C, respectivamente, são:",
    "options": [
      "Glargina – NPH – regular.",
      "Lispro – glargina – regular.",
      "NPH – degludeca – lispro.",
      "Lispro – NPH – glargina."
    ],
    "correctAnswer": 3,
    "explanation": "O gráfico mostra três perfis:\n\nA: pico alto e precoce, de curta duração — análogo de ação ultrarrápida (lispro, asparte, glulisina).\nB: pico em algumas horas e duração intermediária (cerca de 12–16 h) — NPH.\nC: concentração baixa e praticamente constante, sem pico, por mais de 24 h — análogo de ação longa (glargina; a degludeca seria ainda mais longa).\n\nSequência: lispro – NPH – glargina.",
    "commentary": "Glargina – NPH – regular (A): a curva A tem pico, o que não ocorre com a glargina.\n\nLispro – glargina – regular (B): a glargina não tem pico (seria a curva C), e a regular não tem perfil plano.\n\nNPH – degludeca – lispro (C): inverte a ultrarrápida e a basal.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Insulinoterapia no DM1 e DM2",
    "tags": [
      "insulina",
      "farmacocinética das insulinas",
      "diabetes",
      "insulina NPH",
      "insulina glargina"
    ],
    "tip": "Ultrarrápida: pico agudo e curto. NPH: pico em 4–8 h. Glargina/degludeca: plana, sem pico.",
    "image": "/images/amrigs2026-5.webp"
  },
  {
    "id": "amrigs2026-6",
    "module": "Clínica Médica",
    "text": "Sobre a infecção urinária, é correto afirmar que:",
    "options": [
      "Mulheres com suspeita de cistite não complicada devem realizar cultura de urina para direcionar o tratamento conforme o perfil de sensibilidade antimicrobiano.",
      "Homens com sintomas de cistite podem receber tratamento empírico, sem necessidade de exame de cultura adicional.",
      "O critério microbiológico para diagnóstico de bacteriúria assintomática é a presença de mais de 10.000 unidades formadoras de colônia/ml de bactérias na urina.",
      "Apenas membros da família Enterobacteriaceae convertem o nitrato em nitrito na urina."
    ],
    "correctAnswer": 3,
    "explanation": "O teste do nitrito detecta bactérias que reduzem nitrato a nitrito, propriedade típica das enterobactérias (E. coli, Klebsiella, Proteus). Por isso, nitrito negativo não exclui infecção por enterococo, Staphylococcus saprophyticus ou Pseudomonas. A banca considerou correta a afirmação de que apenas as Enterobacteriaceae fazem essa conversão.",
    "commentary": "Urocultura em toda cistite não complicada da mulher (A): o tratamento é empírico; a cultura fica para falha, recorrência, gestação ou suspeita de complicação.\n\nHomem com cistite sem cultura (B): infecção urinária no homem é considerada complicada e deve ter urocultura.\n\nBacteriúria assintomática com mais de 10.000 UFC/mL (C): o critério é ≥100.000 UFC/mL (10⁵) em duas amostras na mulher ou em uma no homem.",
    "reference": "IDSA — Asymptomatic bacteriuria guideline (2019) / SBU — Infecção do trato urinário",
    "tags": [
      "infecção urinária",
      "nitrito",
      "bacteriúria assintomática",
      "urocultura"
    ],
    "tip": "Nitrito positivo sugere enterobactéria; nitrito negativo não exclui ITU.",
    "alert": "Gabarito discutível: a alternativa D diz que \"apenas\" as enterobactérias convertem nitrato em nitrito, mas outros Gram-negativos (como Pseudomonas) também o fazem. É a única opção sem erro grosseiro, e a banca a manteve."
  },
  {
    "id": "amrigs2026-7",
    "module": "Clínica Médica",
    "text": "São fatores que contribuem para a falência orgânica na sepse os seguintes, EXCETO:",
    "options": [
      "Resposta inflamatória aberrante com dano celular.",
      "Disfunção do endotélio vascular da microcirculação.",
      "Disfunção mitocondrial devido a estresse oxidativo.",
      "Redução da produção de oxido nítrico, provocando colapso vasomotor."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a EXCEÇÃO. Na sepse há AUMENTO, e não redução, da produção de óxido nítrico (pela óxido nítrico sintase induzível), o que causa vasodilatação e hipotensão refratária — o colapso vasomotor do choque séptico.",
    "commentary": "Resposta inflamatória aberrante (A): contribui — a resposta desregulada do hospedeiro é o centro da definição de sepse.\n\nDisfunção endotelial da microcirculação (B): contribui — aumenta a permeabilidade, causa microtrombose e má distribuição do fluxo.\n\nDisfunção mitocondrial (C): contribui — gera hipóxia citopática, com falência celular mesmo com oferta de O₂.",
    "reference": "Sepsis-3 (JAMA 2016) / Harrison — Sepse e choque séptico",
    "tags": [
      "sepse",
      "choque séptico",
      "óxido nítrico",
      "disfunção orgânica"
    ],
    "tip": "No choque séptico o óxido nítrico SOBE: vasodilatação."
  },
  {
    "id": "amrigs2026-8",
    "module": "Clínica Médica",
    "text": "Em relação à crise renal esclerodérmica, assinale a alternativa correta.",
    "options": [
      "A presença de anticorpo anticentrômero sinaliza um alto risco para crise renal esclerodérmica.",
      "A droga de escolha para o tratamento da crise são os inibidores da enzima de conversão da angiotensina.",
      "A crise hipertensiva faz parte da abertura do quadro em todos os pacientes.",
      "O exame de urina mostra proteinúria maciça e hematúria macroscópica."
    ],
    "correctAnswer": 1,
    "explanation": "A crise renal esclerodérmica (hipertensão maligna com lesão renal aguda, típica da esclerose sistêmica difusa precoce) é tratada com IECA (captopril), que mudou o prognóstico da complicação. O IECA deve ser mantido mesmo se a função renal piorar ou houver diálise.",
    "commentary": "Anticorpo anticentrômero (A): marca a forma limitada, de menor risco; os de maior risco são anti-RNA polimerase III e o uso de corticoide em dose alta.\n\nCrise hipertensiva em todos (C): cerca de 10% dos casos são normotensos, com pior prognóstico.\n\nProteinúria maciça e hematúria macroscópica (D): o sedimento costuma ser discreto (proteinúria leve, hematúria microscópica).",
    "reference": "EULAR — Recomendações para esclerose sistêmica (2023) / SBR",
    "tags": [
      "esclerose sistêmica",
      "crise renal esclerodérmica",
      "IECA",
      "captopril"
    ],
    "tip": "Crise renal esclerodérmica: IECA, mesmo com creatinina subindo."
  },
  {
    "id": "amrigs2026-9",
    "module": "Clínica Médica",
    "text": "A respeito da anemia, analise as assertivas a seguir:\nI. A anemia associada a aumento na produção de reticulócitos, após ajuste para o grau de anemia, sugere ocorrência de perda de sangue ou hemólise.\nII. Deficiência de ferro ou de folato são situações em que, na presença de sangramento ou hemólise, pode não haver uma resposta apropriada dos reticulócitos.\nIII. O percentual de reticulócitos representa a porcentagem de eritrócitos que são reticulócitos, e não é necessário ajuste em relação ao grau de anemia para sua interpretação.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: reticulocitose adequada (índice de produção corrigido >2–3) indica medula respondendo, como em hemorragia ou hemólise.\nII correta: se faltam ferro, folato ou B12, a medula não consegue responder, e a reticulocitose esperada não aparece.\nIII incorreta: o percentual de reticulócitos deve ser corrigido pelo hematócrito (e pelo tempo de maturação — índice de produção reticulocitária), senão superestima a resposta medular.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada.\n\nI, II e III (D): a III está errada.",
    "reference": "Zago — Tratado de Hematologia / Harrison — Medicina Interna",
    "tags": [
      "anemia",
      "reticulócitos",
      "índice de produção reticulocitária",
      "hemólise"
    ],
    "tip": "Reticulócitos: sempre corrigir pelo hematócrito (IPR)."
  },
  {
    "id": "amrigs2026-10",
    "module": "Clínica Médica",
    "text": "Em relação aos tumores secretores de catecolaminas, analise as assertivas a seguir:\nI. Ocorrem em igual frequência entre homens e mulheres, principalmente na terceira, quarta e quinta décadas de vida.\nII. Os anti-hipertensivos e hipoglicemiantes orais podem aumentar os níveis mensurados de catecolaminas e metanefrinas, podendo provocar resultados falso-positivos.\nIII. A excreção urinária de 24 horas de catecolaminas e metanefrinas fracionadas ou a determinação dos níveis plasmáticos de metanefrinas fracionadas devem ser verificadas anualmente, durante toda a vida dos pacientes que tiveram diagnóstico e foram tratados.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 1,
    "explanation": "I correta: feocromocitomas e paragangliomas ocorrem igualmente em homens e mulheres, com pico entre a terceira e a quinta décadas.\nII incorreta (segundo a banca): a lista de fármacos que causam falso-positivo inclui antidepressivos tricíclicos, IMAO, levodopa, antipsicóticos, alfa e betabloqueadores (fenoxibenzamina, labetalol), simpaticomiméticos e cocaína — não anti-hipertensivos e hipoglicemiantes orais de forma geral.\nIII correta: após a ressecção, metanefrinas devem ser dosadas anualmente por toda a vida, pois há risco de recidiva e de tumores metacrônicos.",
    "commentary": "Apenas I e II (A): a II está errada.\n\nApenas II e III (C): a II está errada.\n\nI, II e III (D): a II está errada.",
    "reference": "Endocrine Society — Pheochromocytoma and Paraganglioma Clinical Practice Guideline (2014) / Harrison",
    "tags": [
      "feocromocitoma",
      "metanefrinas",
      "paraganglioma"
    ],
    "tip": "Feocromocitoma operado: metanefrinas anuais para sempre."
  },
  {
    "id": "amrigs2026-11",
    "module": "Clínica Médica",
    "text": "Relacione a Coluna 1 à Coluna 2, associando cada medicamento ao nutriente com níveis adversamente alterados quando do seu uso.\n\nColuna 1:\n1. Colestiramina.\n2. Omeprazol.\n3. Isoniazida.\n4. Penicilamina.\n\nColuna 2:\n( ) Zinco.\n( ) Vitamina B12.\n( ) Vitamina D.\n( ) Piridoxina.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "options": [
      "1 – 2 – 3 – 4.",
      "2 – 4 – 1 – 3.",
      "4 – 1 – 3 – 2.",
      "4 – 2 – 1 – 3."
    ],
    "correctAnswer": 3,
    "explanation": "Associação correta:\n\n• Zinco — penicilamina (4): quelante de metais, depleta zinco.\n• Vitamina B12 — omeprazol (2): a hipocloridria reduz a liberação da B12 dos alimentos.\n• Vitamina D — colestiramina (1): resina que reduz a absorção de vitaminas lipossolúveis.\n• Piridoxina — isoniazida (3): a isoniazida antagoniza a B6 e pode causar neuropatia periférica.\n\nSequência: 4 – 2 – 1 – 3.",
    "commentary": "1 – 2 – 3 – 4 (A), 2 – 4 – 1 – 3 (B), 4 – 1 – 3 – 2 (C): trocam as associações acima.",
    "reference": "Harrison — Medicina Interna (deficiências de vitaminas e oligoelementos)",
    "tags": [
      "interações fármaco-nutriente",
      "isoniazida",
      "piridoxina",
      "inibidor de bomba de prótons",
      "vitamina B12"
    ],
    "tip": "Isoniazida → B6; IBP/metformina → B12; colestiramina → vitaminas A, D, E, K."
  },
  {
    "id": "amrigs2026-12",
    "module": "Clínica Médica",
    "text": "Sobre o diabetes insipidus, é correto afirmar que:",
    "options": [
      "O diabetes insipidus nefrogênico é causado pela incapacidade do hipotálamo de secretar vasopressina para atuar sobre um rim normal.",
      "A polidipsia primária é um distúrbio causado pela ausência primária de produção de vasopressina.",
      "Níveis de ácido úrico superiores a 5 mg/dL podem ajudar a diferenciar o diabetes insipidus de polidipsia primária.",
      "O diabetes insipidus nefrogênico ocorre comumente em pacientes com isquemia cerebral grave e pode indicar morte encefálica."
    ],
    "correctAnswer": 2,
    "explanation": "O ácido úrico ajuda a diferenciar diabetes insipidus de polidipsia primária: no diabetes insipidus central, a falta de vasopressina (que também age no receptor V1 e na depuração do urato) e a leve contração de volume elevam o ácido úrico (>5 mg/dL); na polidipsia primária, a expansão de volume aumenta a excreção e o ácido úrico costuma ser baixo.",
    "commentary": "Nefrogênico por falta de vasopressina do hipotálamo (A): isso é o diabetes insipidus central; no nefrogênico, o rim não responde à vasopressina.\n\nPolidipsia primária por ausência de vasopressina (B): o distúrbio primário é a ingestão excessiva de água; a vasopressina é suprimida de forma fisiológica.\n\nNefrogênico na isquemia cerebral grave/morte encefálica (D): o que ocorre na morte encefálica é o diabetes insipidus central.",
    "reference": "Harrison — Medicina Interna / Sociedade Brasileira de Endocrinologia — Diabetes insipidus",
    "tags": [
      "diabetes insipidus",
      "polidipsia primária",
      "vasopressina",
      "ácido úrico"
    ],
    "tip": "Morte encefálica → diabetes insipidus CENTRAL."
  },
  {
    "id": "amrigs2026-13",
    "module": "Clínica Médica",
    "text": "Sobre as crioglobulinemias, analise as seguintes assertivas:\nI. As do tipo I são monoclonais, não têm atividade do fator reumatoide e estão associadas a neoplasias malignas hematopoiéticas, como o mieloma.\nII. As dos tipos II e III podem estar relacionadas à vasculite sistêmica, envolvendo vasos de pequeno calibre.\nIII. A infecção pelo vírus da hepatite B é responsável por pelo menos 80% dos casos de vasculite associada à crioglobulina mista.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: a crioglobulinemia tipo I é formada por imunoglobulina monoclonal isolada, sem atividade de fator reumatoide, associada a mieloma, macroglobulinemia de Waldenström e outras neoplasias linfoides.\nII correta: as mistas (tipos II e III) causam vasculite de pequenos vasos (púrpura, artralgia, neuropatia, glomerulonefrite membranoproliferativa).\nIII incorreta: a principal causa da crioglobulinemia mista é a hepatite C (até 80–90% dos casos), não a hepatite B.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada.\n\nI, II e III (D): a III está errada.",
    "reference": "Harrison — Medicina Interna (vasculites) / SBR",
    "tags": [
      "crioglobulinemia",
      "vasculite",
      "hepatite C"
    ],
    "tip": "Crioglobulinemia mista = hepatite C."
  },
  {
    "id": "amrigs2026-14",
    "module": "Clínica Médica",
    "text": "Em relação ao sarampo, analise as seguintes assertivas:\nI. O tratamento é, em grande parte, de suporte, com administração de vitamina A e antibiótico para combate do agente causador da doença.\nII. A resposta imune do hospedeiro ao vírus do sarampo é essencial para a eliminação viral e recuperação clínica.\nIII. A resposta da IgM está ausente após reexposição ou revacinação e serve como marcador de infecção primária.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: o sarampo é viral; o tratamento é de suporte com vitamina A. Antibiótico só trata infecção bacteriana secundária (pneumonia, otite), não o agente da doença.\nII correta: a resposta imune celular é que elimina o vírus e leva à recuperação (e explica o exantema).\nIII correta: na reexposição ou revacinação ocorre resposta secundária com IgG, geralmente sem IgM; IgM positiva marca infecção primária.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: sarampo / Harrison",
    "tags": [
      "sarampo",
      "vitamina A",
      "sorologia",
      "IgM"
    ],
    "tip": "Sarampo: vitamina A para todos os casos; antibiótico só para complicação bacteriana."
  },
  {
    "id": "amrigs2026-15",
    "module": "Clínica Médica",
    "text": "Em relação à dengue, analise as seguintes assertivas:\nI. Na febre hemorrágica da dengue, a trombocitopenia com plaquetas abaixo de 100.000 células/ml e alargamento do tempo de protrombina são característicos.\nII. A leucopenia desenvolve-se no segundo dia de febre, caindo para 1.000 a 2.000 células/ml no quinto ou sexto dia.\nIII. O anticorpo IgM surge de 3 a 5 dias após a infecção, e o IgG, de 9 a 10 dias após.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "A banca considerou corretas as três assertivas, com dados clássicos do Harrison:\n\nI: na febre hemorrágica da dengue, plaquetas abaixo de 100.000/mm³ e alargamento do tempo de protrombina são característicos.\nII: a leucopenia começa por volta do segundo dia de febre e pode chegar a 1.000–2.000/mm³ no 5º–6º dia.\nIII: na infecção primária, IgM surge em 3 a 5 dias e IgG em cerca de 9 a 10 dias.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva considerada correta.\n\nObservação: \"febre hemorrágica da dengue\" é terminologia antiga; a classificação atual (OMS 2009, MS) usa dengue sem sinais de alarme, com sinais de alarme e grave.",
    "reference": "Harrison — Medicina Interna (arboviroses) / Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)",
    "tags": [
      "dengue",
      "plaquetopenia",
      "leucopenia",
      "sorologia"
    ],
    "tip": "Dengue: leucopenia precoce e plaquetopenia; IgM a partir do 5º–6º dia."
  },
  {
    "id": "amrigs2026-16",
    "module": "Clínica Médica",
    "text": "Em relação ao Acidente Vascular Cerebral (AVC), é correto afirmar que:",
    "options": [
      "Pressão arterial superior a 185/110 mmHg, a despeito do tratamento, não é contraindicação à trombólise.",
      "O ácido acetilsalicílico é o único agente antiplaquetário que se mostrou eficaz no tratamento agudo do acidente vascular cerebral isquêmico.",
      "A anticoagulação de rotina faz parte do tratamento primário da isquemia cerebral aterotrombótica.",
      "A combinação de ácido acetilsalicílico e clopidogrel após um AVC minor não se mostrou benéfica na prevenção de um segundo AVC."
    ],
    "correctAnswer": 1,
    "explanation": "Na fase aguda do AVC isquêmico, o AAS (160–325 mg nas primeiras 24–48 h, ou 24 h após trombólise) foi o antiplaquetário com benefício demonstrado nos grandes ensaios (IST, CAST). A banca considerou esta a alternativa correta.",
    "commentary": "PA >185/110 mmHg não contraindica trombólise (A): pressão acima de 185/110 mmHg que não baixa com tratamento CONTRAINDICA a trombólise.\n\nAnticoagulação de rotina (C): não é indicada no AVC aterotrombótico agudo (não reduz recorrência e aumenta sangramento).\n\nAAS + clopidogrel sem benefício após AVC minor (D): os estudos CHANCE e POINT mostraram redução de recorrência com dupla antiagregação por 21 dias após AVC menor ou AIT de alto risco.",
    "reference": "AHA/ASA — Guidelines for the Early Management of Acute Ischemic Stroke (2019) / Diretrizes da SBDCV",
    "tags": [
      "AVC isquêmico",
      "ácido acetilsalicílico",
      "trombólise",
      "dupla antiagregação"
    ],
    "tip": "AVC menor/AIT de alto risco: AAS + clopidogrel por 21 dias.",
    "alert": "Gabarito discutível: a alternativa B chama o AAS de \"único\" antiplaquetário eficaz na fase aguda, mas a dupla antiagregação (AAS + clopidogrel, estudos CHANCE e POINT) também tem benefício no AVC menor. As demais alternativas estão claramente erradas, e a banca manteve B."
  },
  {
    "id": "amrigs2026-17",
    "module": "Clínica Médica",
    "text": "Sobre a doença hepática gordurosa não alcoólica, assinale a alternativa correta.",
    "options": [
      "Ao contrário da doença hepática alcoólica, os níveis de ALT (alanina aminotransferase) são mais elevados do que os níveis de AST (aspartato aminotransferase), tendo importância prognóstica.",
      "Elevação discreta da ferritina e resultados positivos para anticorpo antinuclear e anticorpo antimúsculo liso são comuns quando do diagnóstico.",
      "Pacientes com cirrose induzida por hepatite não alcoólica não têm risco de evoluir para hepatocarcinoma.",
      "A presença de vírus da hepatite B ou C não interfere nos critérios diagnósticos para doença hepática gordurosa não alcoólica."
    ],
    "correctAnswer": 1,
    "explanation": "Na doença hepática gordurosa não alcoólica (hoje MASLD), é comum encontrar ferritina discretamente elevada (marcador inflamatório e de resistência insulínica) e autoanticorpos (FAN, antimúsculo liso) em títulos baixos, sem que isso indique outra doença.",
    "commentary": "ALT > AST com importância prognóstica (A): ALT > AST é o padrão usual, mas não tem valor prognóstico; a inversão (AST > ALT) sugere fibrose avançada.\n\nSem risco de hepatocarcinoma (C): a cirrose por esteato-hepatite tem risco de carcinoma hepatocelular, e há casos até sem cirrose.\n\nHepatites B e C não interferem (D): o diagnóstico de DHGNA exige excluir outras causas de esteatose/hepatopatia, como vírus e álcool.",
    "reference": "Sociedade Brasileira de Hepatologia — Consenso sobre DHGNA / AASLD Practice Guidance (2023)",
    "tags": [
      "doença hepática gordurosa não alcoólica",
      "esteatose hepática",
      "MASLD",
      "ferritina"
    ],
    "tip": "DHGNA: ferritina e FAN podem estar levemente alterados sem significar outra doença."
  },
  {
    "id": "amrigs2026-18",
    "module": "Clínica Médica",
    "text": "Qual das alternativas abaixo indica uma doença pulmonar intersticial que geralmente apresenta boa resposta clínica ao uso de corticoide sistêmico isoladamente?",
    "options": [
      "Pneumoconiose.",
      "Asbestose.",
      "Sarcoidose.",
      "Fibrose pulmonar crônica por radiação."
    ],
    "correctAnswer": 2,
    "explanation": "A sarcoidose é a doença pulmonar intersticial que classicamente responde bem ao corticoide sistêmico isolado (prednisona), indicado quando há sintomas, declínio funcional ou doença extrapulmonar grave.",
    "commentary": "Pneumoconiose (A) e asbestose (B): doenças fibrosantes por exposição ocupacional, sem resposta ao corticoide.\n\nFibrose pulmonar crônica por radiação (D): a pneumonite actínica aguda pode responder ao corticoide, mas a fibrose crônica estabelecida não.",
    "reference": "Diretrizes da SBPT — Doenças pulmonares intersticiais / ATS — Sarcoidosis guideline (2020)",
    "tags": [
      "sarcoidose",
      "doença pulmonar intersticial",
      "corticoide"
    ],
    "tip": "Intersticial que responde ao corticoide: sarcoidose (e pneumonias de hipersensibilidade, em afastamento da exposição)."
  },
  {
    "id": "amrigs2026-19",
    "module": "Clínica Médica",
    "text": "Homem, 75 anos, é trazido à consulta por sua esposa devido a um quadro de declínio cognitivo progressivo há mais de um ano. Inicialmente, passou a apresentar dificuldade para planejar tarefas rotineiras, como organizar pagamentos, seguir rotas conhecidas ao dirigir e utilizar aparelhos eletrônicos simples. Frequentemente, mostra-se desatento durante conversas e tem dificuldade de manter o foco por mais de alguns minutos. Também se atrapalha ao localizar objetos no espaço, mesmo quando estão visíveis à sua frente. Apesar disso, mantém boa recordação de eventos recentes e passados. O paciente começou a relatar visões recorrentes de pessoas estranhas dentro de casa, com imagens vívidas e bem definidas que progressivamente foram aumentando de frequência. A esposa relata ainda que o paciente apresenta episódios de sonolência e desorientação ao longo do dia, intercalados com momentos de lucidez. Há dois meses, observou que ele passou a andar mais devagar, com passos curtos, postura encurvada e com episódios de desequilíbrio e quedas. Além disso, tem demonstrado lentidão para levantar-se de cadeiras e para se vestir. Diante da piora das alucinações visuais e das flutuações cognitivas já observadas, foi prescrita risperidona 1 mg à noite, ocorrendo acentuada piora da rigidez muscular, tremores e lentificação motora. Anos antes do início do quadro atual, o paciente já apresentava episódios noturnos em que gritava, se debatia e caía da cama durante o sono, sugerindo um possível transtorno comportamental do sono REM. Com base no quadro apresentado, qual é o diagnóstico mais provável?",
    "options": [
      "Transtorno neurocognitivo maior devido à doença de Alzheimer.",
      "Transtorno neurocognitivo maior devido à doença de Parkinson.",
      "Transtorno neurocognitivo maior com corpos de Lewy.",
      "Delirium induzido por antipsicótico em paciente idoso."
    ],
    "correctAnswer": 2,
    "explanation": "O quadro reúne os critérios da demência com corpos de Lewy: declínio cognitivo com predomínio de atenção, funções executivas e visuoespaciais (memória relativamente preservada no início), flutuação cognitiva, alucinações visuais recorrentes e bem formadas, parkinsonismo que surge depois (ou junto) do declínio, sensibilidade grave a antipsicóticos e transtorno comportamental do sono REM.",
    "commentary": "Doença de Alzheimer (A): começa pela memória episódica recente, que aqui está preservada; alucinações e parkinsonismo precoces não são típicos.\n\nDemência da doença de Parkinson (B): o parkinsonismo precede a demência em mais de um ano; aqui a cognição piorou antes.\n\nDelirium por antipsicótico (D): o quadro tem mais de um ano de evolução; a piora após risperidona é a sensibilidade a neurolépticos da doença de Lewy.",
    "reference": "McKeith IG et al. Critérios de consenso para demência com corpos de Lewy (Neurology 2017) / ABN",
    "tags": [
      "demência com corpos de Lewy",
      "demências",
      "alucinações visuais",
      "transtorno comportamental do sono REM"
    ],
    "tip": "Lewy: flutuação + alucinação visual + parkinsonismo + sono REM + piora com antipsicótico."
  },
  {
    "id": "amrigs2026-20",
    "module": "Clínica Médica",
    "text": "Homem, 28 anos, é trazido ao pronto-socorro por amigos após apresentar agitação extrema, taquicardia, sudorese profusa, hipertensão arterial (PA 180/110 mmHg), midríase, episódios de alucinações visuais e pensamentos paranoides. Relata ter consumido uma quantidade significativa de cocaína aproximadamente uma hora antes. O paciente também apresenta tremores, náuseas e dificuldade de fala. Não há sinais de febre ou de trauma. Considerando o caso apresentado, assinale a alternativa correta.",
    "options": [
      "Os usuários de cocaína têm menor risco de apresentar distonia aguda induzida por antipsicóticos.",
      "Para controle da hipertensão, é indicado utilizar propranolol.",
      "Quando há risco de heteroagressão, em que a via parenteral seja necessária, diazepam intramuscular é a medicação de escolha.",
      "Devido à ação GABAérgica, os benzodiazepínicos são a primeira escolha para reduzir a agitação psicomotora e o risco de heteroagressividade, por antagonizar os efeitos estimulantes da cocaína."
    ],
    "correctAnswer": 3,
    "explanation": "Na intoxicação por cocaína com agitação, taquicardia, hipertensão e sintomas psicóticos, os benzodiazepínicos são a primeira escolha: reduzem a hiperatividade simpática e a agitação e diminuem o risco de convulsões e de complicações cardiovasculares.",
    "commentary": "Menor risco de distonia por antipsicótico (A): usuários de cocaína têm MAIOR risco de distonia aguda (depleção dopaminérgica).\n\nPropranolol para hipertensão (B): o betabloqueador não seletivo deixa a estimulação alfa sem oposição e pode piorar a hipertensão e a vasoconstrição coronariana; usa-se benzodiazepínico, nitrato ou fentolamina.\n\nDiazepam IM (C): o diazepam tem absorção intramuscular errática; por via IM prefere-se midazolam (ou lorazepam).",
    "reference": "ABP — Diretrizes para o manejo da agitação psicomotora / AHA Scientific Statement on cocaine-associated chest pain",
    "tags": [
      "intoxicação por cocaína",
      "agitação psicomotora",
      "benzodiazepínicos",
      "emergência psiquiátrica"
    ],
    "tip": "Cocaína: benzodiazepínico; evite betabloqueador. IM: midazolam, não diazepam."
  },
  {
    "id": "amrigs2026-21",
    "module": "Cirurgia",
    "text": "Analise as assertivas a seguir sobre a anatomia das hérnias inguinais à luz dos tratados cirúrgicos atuais:\nI. O triângulo de Hesselbach é delimitado medialmente pela borda lateral do músculo reto abdominal, lateralmente pelos vasos epigástricos inferiores e inferiormente pelo ligamento inguinal.\nII. O nervo genitofemoral divide-se em dois ramos, sendo que o ramo genital acompanha o funículo espermático através do anel inguinal profundo e, eventualmente, é lesado durante hernioplastias.\nIII. Hérnias inguinais indiretas, em geral, localizam-se medialmente aos vasos epigástricos inferiores e penetram no canal inguinal através de um defeito adquirido na parede posterior.\nIV. O tendão conjunto é formado pela união das fibras do músculo oblíquo interno e transverso do abdome, reforçando a parede posterior do canal inguinal.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e IV.",
      "Apenas II e III.",
      "Apenas II e IV.",
      "Apenas I, II e IV."
    ],
    "correctAnswer": 3,
    "explanation": "I correta: o triângulo de Hesselbach é limitado medialmente pela borda lateral do reto abdominal, lateralmente pelos vasos epigástricos inferiores e inferiormente pelo ligamento inguinal — é a área das hérnias diretas.\nII correta: o ramo genital do nervo genitofemoral acompanha o funículo espermático pelo anel inguinal profundo e pode ser lesado na hernioplastia (dor crônica, parestesia).\nIII incorreta: a hérnia indireta passa LATERALMENTE aos vasos epigástricos inferiores, pelo anel inguinal profundo (persistência do conduto peritoniovaginal); a que atravessa defeito adquirido da parede posterior, medialmente aos vasos, é a direta.\nIV correta: o tendão conjunto, formado pela fusão de fibras do oblíquo interno e do transverso, reforça a parede posterior medialmente.",
    "commentary": "Apenas I e IV (A): deixa de fora a II, correta.\n\nApenas II e III (B): a III está errada e a I está correta.\n\nApenas II e IV (C): deixa de fora a I, correta.",
    "reference": "Sabiston — Tratado de Cirurgia (hérnias) / HerniaSurge — International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "triângulo de Hesselbach",
      "anatomia",
      "nervo genitofemoral"
    ],
    "tip": "Indireta: lateral aos epigástricos. Direta: medial (Hesselbach)."
  },
  {
    "id": "amrigs2026-22",
    "module": "Cirurgia",
    "text": "A respeito da anatomia cirúrgica da região cervical, analise as assertivas a seguir:\nI. A artéria tireóidea inferior se origina do tronco tireocervical, que é ramo da artéria subclávia.\nII. A artéria tireóidea superior se origina da artéria carótida interna.\nIII. O nervo laríngeo recorrente direito passa por baixo do ligamento arterioso no arco aórtico e segue no sulco traqueoesofágico até atingir a tireoide.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: a artéria tireóidea inferior vem do tronco tireocervical, ramo da subclávia.\nII incorreta: a tireóidea superior é o primeiro ramo da carótida EXTERNA.\nIII incorreta: quem contorna o ligamento arterioso (arco aórtico) é o laríngeo recorrente ESQUERDO; o direito contorna a artéria subclávia direita.",
    "commentary": "Apenas II (B): a II está errada.\n\nApenas III (C): a III descreve o recorrente esquerdo.\n\nApenas II e III (D): ambas estão erradas.",
    "reference": "Moore — Anatomia Orientada para a Clínica / Sabiston — Tratado de Cirurgia (tireoide)",
    "tags": [
      "anatomia cervical",
      "tireoide",
      "nervo laríngeo recorrente",
      "artérias tireóideas"
    ],
    "tip": "Recorrente esquerdo: arco aórtico. Direito: subclávia. Tireóidea superior: carótida externa."
  },
  {
    "id": "amrigs2026-23",
    "module": "Cirurgia",
    "text": "Mulher, 42 anos, assintomática, realiza ecografia de rotina na qual é identificado um nódulo de 4 cm localizado no lobo direito do fígado. Tomografia computadorizada com contraste endovenoso e ressonância magnética de abdome apresentam a mesma imagem característica: lesão de 4,2 cm, hipervascularizada, apresentando uma cicatriz fibrosa central com septos radiados. Com base nessas informações, qual é a melhor conduta no caso?",
    "options": [
      "Solicitar uma cintilografia com hemácias marcadas.",
      "Proceder à punção biópsia com agulha fina para esclarecer o diagnóstico.",
      "Manter a conduta expectante é o mais apropriado, visto que a paciente está assintomática.",
      "Indicar cirurgia de ressecção para evitar complicações futuras."
    ],
    "correctAnswer": 2,
    "explanation": "Lesão hepática hipervascular com cicatriz central e septos radiados, em mulher assintomática, com imagem típica em TC e RM, é hiperplasia nodular focal. É benigna, não sofre transformação maligna e raramente complica; com diagnóstico por imagem seguro, a conduta é expectante, sem biópsia nem cirurgia.",
    "commentary": "Cintilografia com hemácias marcadas (A): é para confirmar hemangioma; a imagem já é típica de hiperplasia nodular focal.\n\nPunção-biópsia (B): desnecessária quando a imagem é característica.\n\nRessecção (D): só para casos sintomáticos ou dúvida diagnóstica; é o adenoma, não a HNF, que tem risco de sangramento e malignização.",
    "reference": "EASL Clinical Practice Guidelines — Benign liver tumours (2016) / Sabiston",
    "tags": [
      "hiperplasia nodular focal",
      "tumores hepáticos benignos",
      "fígado"
    ],
    "tip": "Cicatriz central em lesão hipervascular = HNF: não opera, não biopsia."
  },
  {
    "id": "amrigs2026-24",
    "module": "Cirurgia",
    "text": "Homem, 70 anos, previamente assintomático, apresenta dor em fossa ilíaca esquerda, febre e leucocitose. Tomografia Computadorizada (TC) de abdome mostra área de espessamento na topografia do cólon sigmoide, compatível com o diagnóstico de diverticulite aguda não complicada. Com base nas informações fornecidas, considerando as opções abaixo, assinale a alternativa que apresenta a melhor conduta no caso.",
    "options": [
      "O tratamento inicial deve ser clínico, com analgésicos, modificação na dieta e antibióticos.",
      "Colonoscopia deve ser indicada na avaliação inicial, para descartar a presença de neoplasia maligna.",
      "Deve ser indicada cirurgia, pois a recorrência de crises é muito elevada apenas com o tratamento clínico.",
      "Nos casos em que for indicada a cirurgia, deve ser realizada colostomia para diminuir o índice de complicações do procedimento."
    ],
    "correctAnswer": 0,
    "explanation": "Diverticulite aguda não complicada em paciente que é internado com febre e leucocitose: tratamento clínico com analgesia, dieta adaptada e antibiótico (em pacientes imunocompetentes e sem sinais sistêmicos, as diretrizes atuais já admitem omitir o antibiótico).",
    "commentary": "Colonoscopia na avaliação inicial (B): deve ser feita após a resolução do quadro (6–8 semanas), pelo risco de perfuração na fase aguda.\n\nCirurgia pela recorrência alta (C): a recorrência após um episódio não complicado é baixa (cerca de 10–20%); a cirurgia eletiva é individualizada.\n\nColostomia sempre que operar (D): em cirurgia eletiva ou em casos selecionados, a ressecção com anastomose primária é a regra.",
    "reference": "ASCRS — Clinical Practice Guidelines for Left-sided Colonic Diverticulitis (2020) / WSES (2020)",
    "tags": [
      "diverticulite aguda",
      "diverticulite não complicada",
      "cólon sigmoide"
    ],
    "tip": "Diverticulite: colonoscopia só depois de 6–8 semanas."
  },
  {
    "id": "amrigs2026-25",
    "module": "Cirurgia",
    "text": "Homem, 65 anos, apresenta abaulamento em região umbilical há cerca de 1 ano. Há 24 horas iniciou com dor intensa no local. Refere que não evacua nem elimina flatos há 48 horas e apresentou dois episódios de vômitos com odor fétido nesse período. Ao exame físico, apresenta hérnia umbilical com área de hiperemia local, não redutível e dolorosa à palpação.\n\nConsiderando o caso apresentado, analise as assertivas a seguir:\nI. O quadro descrito sugere hérnia encarcerada complicada por estrangulamento.\nII. A conduta inicial indicada é a tentativa de redução manual do conteúdo da hérnia.\nIII. Em caso de indicação cirúrgica, herniorrafia com tela é a melhor alternativa.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas I e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: hérnia umbilical irredutível, dolorosa, com hiperemia de pele, parada de eliminação de gases e fezes e vômitos fecaloides = hérnia encarcerada com obstrução e provável estrangulamento.\nII incorreta: com sinais de estrangulamento, a redução manual é contraindicada (risco de reduzir alça isquêmica ou necrótica); a indicação é cirurgia de urgência.\nIII incorreta (para a banca): em campo potencialmente contaminado, com possível ressecção intestinal, a tela é evitada e prefere-se a herniorrafia primária.",
    "commentary": "Apenas II (B): a II está errada.\n\nApenas III (C): a III foi considerada errada.\n\nApenas I e III (D): a III foi considerada errada.",
    "reference": "WSES Guidelines — Emergency repair of complicated abdominal wall hernias (2017) / Sabiston",
    "tags": [
      "hérnia umbilical",
      "hérnia encarcerada",
      "hérnia estrangulada",
      "tela"
    ],
    "tip": "Hérnia com sinais de estrangulamento: não reduzir, operar.",
    "alert": "Gabarito discutível: a banca considerou errada a assertiva III (tela), mas diretrizes recentes (WSES) admitem tela sintética em campo limpo-contaminado. Como a II está errada de qualquer forma, a resposta depende só do julgamento da III."
  },
  {
    "id": "amrigs2026-26",
    "module": "Cirurgia",
    "text": "O abdome agudo é uma das condições mais relevantes no atendimento de emergência. Sobre o tema, assinale a alternativa correta.",
    "options": [
      "A dor visceral é tipicamente bem delimitada, e o paciente, em geral, consegue apontar com exatidão o local de maior intensidade dolorosa.",
      "O sinal de chandelier corresponde a uma vesícula biliar distendida e palpável, acompanhada de icterícia obstrutiva, achado típico de tumores periampulares.",
      "No contexto do abdome agudo, a laparoscopia diagnóstica pode auxiliar tanto no diagnóstico quanto na conduta terapêutica. Todavia, a presença de distensão intestinal significativa constitui contraindicação absoluta à sua realização.",
      "A apendicite aguda constitui a causa mais frequente de abdome agudo não obstétrico durante a gestação."
    ],
    "correctAnswer": 3,
    "explanation": "A apendicite aguda é a causa mais frequente de abdome agudo não obstétrico na gestação (cerca de 1 em 1.000–1.500 gestações), seguida da colecistite.",
    "commentary": "Dor visceral bem localizada (A): a dor visceral é mal localizada, na linha média; a dor somática (parietal) é que é bem localizada.\n\nSinal de chandelier como vesícula palpável e icterícia (B): isso é o sinal de Courvoisier-Terrier; o sinal do candelabro (chandelier) é dor intensa à mobilização do colo uterino na doença inflamatória pélvica.\n\nDistensão como contraindicação absoluta à laparoscopia (C): a distensão importante dificulta, mas é contraindicação relativa.",
    "reference": "Sabiston — Tratado de Cirurgia (abdome agudo e cirurgia na gestação)",
    "tags": [
      "abdome agudo",
      "apendicite aguda",
      "gestação",
      "dor visceral"
    ],
    "tip": "Abdome agudo não obstétrico mais comum na gestante: apendicite."
  },
  {
    "id": "amrigs2026-27",
    "module": "Cirurgia",
    "text": "Gestante de 30 semanas, G1P0, apresenta dor abdominal de início súbito, migrando do mesogástrio para o flanco direito, acompanhada de náuseas. Refere febre não aferida e discreto mal-estar. Ao exame, apresenta FC 118 bpm, PA 112/70 mmHg, T 37,3 °C, dor à palpação em flanco/lombar direito, sem sinais claros de irritação peritoneal. Ultrassom foi inconclusivo para apendicite e também não demonstrou sinais de sofrimento fetal ou causas obstétricas. Exames laboratoriais indicam leucócitos 13.500/mm³ e PCR elevada. O hospital no qual está internada não dispõe de ressonância magnética. Diante desse quadro e considerando as recomendações do “Sabiston Tratado de Cirurgia” (Townsend et al., 2019), qual das condutas abaixo é a mais adequada?",
    "options": [
      "Realizar TC abdominal, utilizando protocolo de dose mínima de radiação, visando esclarecer o diagnóstico.",
      "Indicar cirurgia imediatamente, com base nos achados clínico-laboratoriais, pois o atraso pode aumentar risco fetal.",
      "Repetir o ultrassom seriado enquanto se aguarda melhora clínica, pois a exposição à radiação na gestação é proibitiva.",
      "Iniciar antibiótico empírico e observar a paciente, evitando exame adicional."
    ],
    "correctAnswer": 0,
    "explanation": "Na gestante com suspeita de apendicite e ultrassom inconclusivo, o exame seguinte é a ressonância magnética. Sem RM disponível, a TC com protocolo de baixa dose é aceitável: a dose fetal fica bem abaixo do limiar de risco (cerca de 50 mGy), e o atraso no diagnóstico (perfuração) traz risco fetal muito maior.",
    "commentary": "Cirurgia imediata (B): o quadro é atípico, com ultrassom inconclusivo; uma laparotomia negativa também tem riscos — o diagnóstico deve ser esclarecido.\n\nUltrassom seriado porque a radiação é proibitiva (C): a radiação diagnóstica não é proibitiva; aguardar pode levar à perfuração.\n\nAntibiótico e observação sem exames (D): o tratamento não operatório da apendicite na gestação tem alta falha e não é o padrão.",
    "reference": "Sabiston — Tratado de Cirurgia (Townsend et al., 2019) / ACOG Committee Opinion nº 723 — Imaging during pregnancy",
    "tags": [
      "apendicite na gestação",
      "tomografia",
      "radiação na gestação",
      "abdome agudo"
    ],
    "tip": "Gestante com suspeita de apendicite: US → RM → (sem RM) TC de baixa dose."
  },
  {
    "id": "amrigs2026-28",
    "module": "Cirurgia",
    "text": "Homem, 55 anos, com sobrepeso, apresenta história de pirose retroesternal diária há 8 anos, associada à regurgitação ácida ocasional e desconforto pós-prandial. Apesar do uso intermitente de inibidor da bomba de prótons, os sintomas persistem. Foi submetido à endoscopia digestiva alta, que evidenciou metaplasia intestinal no epitélio esofágico distal, firmando o diagnóstico de Esôfago de Barrett (EB). Sobre o EB, analise as assertivas a seguir:\nI. Ocorre como consequência do refluxo ácido, não sendo observado em casos de refluxo alcalino.\nII. A identificação do EB constitui indicação absoluta para a realização de cirurgia antirrefluxo.\nIII. Pode ser classificado, conforme sua extensão, em longo (≥3 cm) ou curto (<3 cm).\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas III.",
      "Apenas I e II.",
      "Apenas II e III."
    ],
    "correctAnswer": 1,
    "explanation": "I incorreta: o refluxo biliar/alcalino (duodenogastroesofágico) também participa da gênese do Barrett.\nII incorreta: o Barrett não é indicação absoluta de cirurgia antirrefluxo; a fundoplicatura controla os sintomas, mas não comprovadamente previne a progressão para câncer. O tratamento base é o IBP e a vigilância endoscópica.\nIII correta: classifica-se em Barrett longo (≥3 cm) e curto (<3 cm) — a classificação de Praga (C e M) descreve a extensão.",
    "commentary": "Apenas I (A): a I está errada.\n\nApenas I e II (C): ambas estão erradas.\n\nApenas II e III (D): a II está errada.",
    "reference": "ACG Clinical Guideline — Barrett's Esophagus (2022) / Consenso Brasileiro sobre Esôfago de Barrett",
    "tags": [
      "esôfago de Barrett",
      "DRGE",
      "refluxo biliar",
      "classificação de Praga"
    ],
    "tip": "Barrett: IBP + vigilância; cirurgia não é obrigatória."
  },
  {
    "id": "amrigs2026-29",
    "module": "Cirurgia",
    "text": "Mulher, 45 anos, sem comorbidades conhecidas, é admitida no pronto-socorro com queixa de dor abdominal intensa no quadrante inferior esquerdo, iniciada há 48 horas. Ao exame físico, apresenta febre baixa (37,9 °C), sensibilidade à palpação na fossa ilíaca esquerda e leucocitose leve (11.500/mm³). A TC abdominal revela diverticulite sigmoide com espessamento da parede do cólon, inflamação da gordura pericólica e presença de pequenas bolhas de ar pericólicas (<5 cm do segmento inflamado), sem evidência de abscesso ou líquido livre. A paciente está hemodinamicamente estável e tolerando dieta oral. Qual das seguintes condutas é a mais apropriada para o manejo inicial dessa paciente?",
    "options": [
      "Iniciar antibioticoterapia intravenosa de amplo espectro, manter a paciente em dieta zero e monitorizar a evolução clínica.",
      "Prescrever antibioticoterapia oral com cobertura para Gram-negativos e anaeróbios, associada à dieta líquida restrita e repouso no leito.",
      "Optar por tratamento sintomático com analgésicos e dieta oral liberada, sem antibioticoterapia, e reavaliar em 24-48 horas.",
      "Considerar tratamento não operatório, avaliar nível de PCR e monitorizar a evolução clínica."
    ],
    "correctAnswer": 3,
    "explanation": "A TC mostra diverticulite com pequenas bolhas de ar pericólicas, sem abscesso e sem líquido livre — diverticulite complicada leve (WSES 1A / Hinchey modificado Ia-Ib). A paciente está estável e aceita dieta. A conduta é tratamento não operatório (antibiótico conforme o caso), com monitorização clínica e laboratorial — a PCR ajuda a acompanhar a evolução e a detectar complicação.",
    "commentary": "Antibiótico IV de amplo espectro e dieta zero (A): exagera o tratamento numa paciente estável, que aceita dieta.\n\nAntibiótico oral com dieta líquida e repouso (B): repouso no leito e dieta restrita não têm benefício comprovado.\n\nSem antibiótico, só sintomáticos (C): ar extraluminal já caracteriza forma complicada; a omissão do antibiótico vale para a diverticulite não complicada.",
    "reference": "WSES Guidelines for the management of acute left-sided colonic diverticulitis (2020)",
    "tags": [
      "diverticulite aguda",
      "diverticulite complicada",
      "proteína C reativa",
      "tratamento não operatório"
    ],
    "tip": "Diverticulite com bolha de ar pericólica e sem abscesso: tratamento clínico.",
    "alert": "Gabarito discutível: a alternativa D é genérica (\"considerar tratamento não operatório\"). A banca a escolheu por priorizar o manejo não operatório com monitorização; as demais trazem medidas sem respaldo (dieta zero, repouso, omitir antibiótico na forma complicada)."
  },
  {
    "id": "amrigs2026-30",
    "module": "Cirurgia",
    "text": "O câncer de esôfago representa uma condição de elevada morbimortalidade e exige conhecimento sobre sua epidemiologia e fatores de risco. Em relação ao câncer esofágico, analise as assertivas a seguir:\nI. O adenocarcinoma esofágico é de 3 a 4 vezes mais prevalente em indivíduos do sexo masculino, e a cor da pele também parece desempenhar um papel importante. A incidência de adenocarcinoma é significativamente maior entre afro-americanos, mesmo após ajuste para fatores como status socioeconômico e consumo de tabaco e álcool.\nII. Estudos recentes demonstram que a associação entre HPV e carcinoma espinocelular de esôfago é amplamente prevalente, com impacto prognóstico e terapêutico bem estabelecido na prática clínica.\nIII. A duração dos sintomas de doença do refluxo gastroesofágico (DRGE) está associada ao risco de desenvolvimento de adenocarcinoma esofágico, porém a frequência desses sintomas não apresenta correlação significativa com tal risco.\n\nQuais estão INCORRETAS?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três estão INCORRETAS.\n\nI: o adenocarcinoma esofágico predomina em homens, mas sobretudo BRANCOS; o carcinoma espinocelular é que é mais comum em negros.\nII: a associação do HPV com o carcinoma espinocelular de esôfago é inconsistente e sem impacto prognóstico ou terapêutico estabelecido (diferente da orofaringe).\nIII: tanto a duração quanto a frequência e a gravidade dos sintomas de refluxo se associam ao risco de adenocarcinoma.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva incorreta.",
    "reference": "Sabiston — Tratado de Cirurgia (esôfago) / Lagergren J et al. NEJM 1999",
    "tags": [
      "câncer de esôfago",
      "adenocarcinoma de esôfago",
      "carcinoma espinocelular",
      "DRGE"
    ],
    "tip": "Adenocarcinoma de esôfago: homem branco, obeso, com refluxo. Espinocelular: negro, tabagista, etilista."
  },
  {
    "id": "amrigs2026-31",
    "module": "Cirurgia",
    "text": "A respeito da fisiopatologia e dos fatores de risco para pancreatite aguda, analise as assertivas abaixo:\nI. A ingestão alcoólica é a segunda causa mais frequente de pancreatite aguda. O risco da doença é reduzido em indivíduos que consomem álcool e também são tabagistas, devido a um efeito anti-inflamatório do tabaco, também observado em outras doenças.\nII. A pancreatite aguda é a complicação mais comum após a realização de colangiopancreatografia retrógrada endoscópica (CPRE), ocorrendo com maior frequência em mulheres e, na maioria dos casos, tendo apresentação clínica branda.\nIII. A principal causa de pancreatite aguda no Ocidente é a litíase biliar. A população mais afetada por pancreatite aguda biliar são mulheres na faixa etária de 50 a 70 anos.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: o álcool é a segunda causa de pancreatite aguda, mas o tabagismo AUMENTA o risco (efeito sinérgico com o álcool), não o reduz.\nII correta: a pancreatite pós-CPRE é a complicação mais comum do procedimento (3–10%), mais frequente em mulheres jovens e geralmente leve.\nIII correta: no Ocidente, a litíase biliar é a principal causa, com maior incidência em mulheres de 50 a 70 anos.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Sabiston — Tratado de Cirurgia (pâncreas) / ACG Guideline — Acute Pancreatitis (2024)",
    "tags": [
      "pancreatite aguda",
      "pancreatite pós-CPRE",
      "litíase biliar",
      "tabagismo"
    ],
    "tip": "Tabagismo é fator de risco independente para pancreatite."
  },
  {
    "id": "amrigs2026-32",
    "module": "Cirurgia",
    "text": "Acerca dos distúrbios motores do esôfago, assinale a alternativa correta.",
    "options": [
      "O esôfago em quebra-nozes (ou esôfago hipercontrátil) é uma patologia que acomete homens e mulheres em proporções semelhantes. Trata-se do distúrbio de hipermotilidade esofágica mais comum.",
      "O espasmo esofágico difuso é uma doença de fisiopatologia ainda pouco compreendida, sendo mais frequente em mulheres. Nesse distúrbio, as alterações motoras do esôfago predominam nos terços proximal e médio.",
      "A tríade clássica de sintomas da acalásia inclui disfagia, dor torácica e perda ponderal.",
      "A acalásia é considerada uma condição pré-maligna. Ao longo de 20 anos, pacientes com essa doença apresentam um risco entre 18 e 20% de desenvolver neoplasia maligna."
    ],
    "correctAnswer": 0,
    "explanation": "O esôfago em quebra-nozes (hipercontrátil) é o distúrbio de hipermotilidade esofágica mais comum na manometria, acometendo homens e mulheres de forma semelhante; manifesta-se com dor torácica e disfagia.",
    "commentary": "Espasmo difuso nos terços proximal e médio (B): as alterações predominam no terço distal (musculatura lisa).\n\nTríade da acalásia com dor torácica (C): a tríade clássica é disfagia, regurgitação e perda de peso.\n\nAcalásia com risco de 18–20% de câncer (D): o risco de carcinoma espinocelular é aumentado, mas muito menor (em torno de 1 caso a cada 300 pacientes-ano, cerca de 2–7% ao longo da vida).",
    "reference": "Classificação de Chicago v4.0 / Sabiston — Tratado de Cirurgia (distúrbios motores do esôfago)",
    "tags": [
      "distúrbios motores do esôfago",
      "esôfago em quebra-nozes",
      "acalásia",
      "espasmo esofágico difuso"
    ],
    "tip": "Acalásia: disfagia + regurgitação + emagrecimento."
  },
  {
    "id": "amrigs2026-33",
    "module": "Cirurgia",
    "text": "Homem, 28 anos, é vítima de acidente automobilístico por colisão frontal com caminhão. Apresenta-se no pronto-socorro com múltiplos ferimentos por vidro na região abdominal e instabilidade hemodinâmica. Sinais vitais na admissão: FC 130 bpm, PA 85/50 mmHg, com tempo de enchimento capilar prolongado e extremidades frias. Gasometria arterial inicial revela pH 7,15, déficit de base (BE) -12, lactato 4,8 mmol/L e T 34,2 °C. Ultrassom (FAST) positivo para líquido livre em pelve e flanco esquerdo. Após ressuscitação volêmica inicial com 2l de cristaloide, 3 unidades de concentrado de hemácias, 3 unidades de plasma fresco, mantém instabilidade hemodinâmica. Durante a laparotomia exploradora de urgência, evidencia-se hemoperitônio de aproximadamente 2.000 ml, laceração hepática grau IV com sangramento ativo difuso dos segmentos VI e VII, lesão esplênica grau III, laceração jejunal em mais de 50% da circunferência da alça e avulsão do mesossigmoide, com perfuração e isquemia do cólon sigmoide distal e contaminação fecal da cavidade. Considerando as condutas que podem ser discutidas durante as diferentes fases desse atendimento, assinale a alternativa correta.",
    "options": [
      "A tromboelastografia é capaz de identificar trombocitopenia e hiperfibrinólise, permitindo direcionar a reposição de hemoderivados, porém o tempo necessário até o resultado não permite seu uso no atendimento inicial.",
      "O ácido tranexâmico é um inibidor da fibrinólise e administrá-lo precocemente está associado à redução da mortalidade por sangramento sem aumentar significativamente o risco de eventos tromboembólicos.",
      "Na cirurgia de urgência, a conduta indicada consiste em rafia do parênquima hepático, esplenectomia, resseção do segmento jejunal lacerado com enteroanastomose e resseção do sigmoide com anastomose primária.",
      "A expansão volêmica com solução cristaloide está indicada no transoperatório, enquanto se aguardam resultados de hemograma e coagulograma para decisão sobre nova transfusão de sangue e hemoderivados."
    ],
    "correctAnswer": 1,
    "explanation": "O ácido tranexâmico, antifibrinolítico, dado nas primeiras 3 horas do trauma (1 g em 10 min + 1 g em 8 h), reduz a mortalidade por sangramento sem aumentar significativamente os eventos tromboembólicos (CRASH-2).",
    "commentary": "Tromboelastografia lenta para o atendimento inicial (A): é teste de beira de leito, com resultados em minutos; é justamente útil para guiar a transfusão no trauma.\n\nCorreção definitiva de todas as lesões (C): paciente com acidose, hipotermia e coagulopatia (tríade letal) deve ir para cirurgia de controle de danos — tamponamento hepático, controle de contaminação com ressecções sem anastomose, abdome aberto e reabordagem.\n\nCristaloide no transoperatório aguardando exames (D): no choque hemorrágico, o cristaloide piora a coagulopatia; deve-se manter a transfusão balanceada (protocolo de transfusão maciça).",
    "reference": "ATLS 10ª ed. / CRASH-2 (Lancet 2010) / European guideline on management of major bleeding after trauma (2023)",
    "tags": [
      "trauma abdominal",
      "ácido tranexâmico",
      "cirurgia de controle de danos",
      "choque hemorrágico",
      "tríade letal"
    ],
    "tip": "Trauma com sangramento: ácido tranexâmico em até 3 h."
  },
  {
    "id": "amrigs2026-34",
    "module": "Cirurgia",
    "text": "Homem, 58 anos, relata dor abdominal difusa iniciada há 24 horas, de intensidade moderada a forte, associada a náuseas e vômitos alimentares que evoluíram para biliosos. Refere parada de eliminação de gases há 12 horas e de fezes há 24 horas. Antecedentes cirúrgicos de laparotomia exploradora por trauma abdominal há 8 anos e apendicectomia há 20 anos. Ao exame físico, apresenta regular estado geral, FC 110 bpm, PA 110/70 mmHg e temperatura axilar de 37,7 °C. Abdome moderadamente distendido, com dor à palpação difusa, mais intensa em região periumbilical, sem sinais de irritação peritoneal. Ruídos hidroaéreos presentes, pouco aumentados. A TC de abdome com contraste endovenoso demonstra segmento de jejuno distal dilatado entre dois pontos de estreitamento, com espessura da parede de 4 mm e redução do realce parietal pelo contraste, pequena quantidade de líquido entre alças, dilatação do intestino delgado proximal e estômago, e ausência de pneumoperitônio. Considerando o quadro apresentado, qual é a conduta terapêutica mais indicada?",
    "options": [
      "Proceder à abordagem cirúrgica.",
      "Indicar nada por via oral (NPO), hidratação, sonda nasogástrica e manter conduta expectante.",
      "Solicitar exame contrastado de trânsito do intestino delgado.",
      "Efetuar dosagem de lactato, gasometria arterial e LDH."
    ],
    "correctAnswer": 0,
    "explanation": "Obstrução de delgado em paciente com cirurgia prévia, com TC mostrando alça de jejuno dilatada entre dois pontos de estreitamento (alça fechada), redução do realce da parede, líquido entre alças, taquicardia e febre baixa: sinais de sofrimento vascular. Obstrução em alça fechada ou com sinais de isquemia tem indicação de cirurgia de urgência, sem período de observação.",
    "commentary": "NPO, sonda e expectante (B): só para obstrução por bridas sem sinais de estrangulamento.\n\nTrânsito intestinal contrastado (C): útil no manejo conservador (gastrografina), não quando já há sinais de isquemia.\n\nLactato, gasometria e LDH (D): marcadores pouco sensíveis e específicos; não devem atrasar a cirurgia diante de achados tomográficos de isquemia.",
    "reference": "WSES — Bologna guidelines for adhesive small bowel obstruction (2017)",
    "tags": [
      "obstrução intestinal",
      "obstrução em alça fechada",
      "isquemia intestinal",
      "bridas"
    ],
    "tip": "Obstrução + alça fechada ou realce reduzido na TC = cirurgia."
  },
  {
    "id": "amrigs2026-35",
    "module": "Cirurgia",
    "text": "Recentemente, houve um grande aumento da indicação da cirurgia bariátrica.\n\nConsiderando esse contexto, analise as assertivas a seguir sobre a obesidade mórbida:\nI. Doença renal terminal está associada à obesidade mórbida.\nII. Obesidade mórbida está associada ao risco de câncer de próstata.\nIII. A alteração mais frequente em obesos mórbidos é artrite com doença articular degenerativa.\nIV. Alterações epigenéticas são frequentes no desenvolvimento da obesidade mórbida.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e IV.",
      "Apenas II e III.",
      "Apenas I, II e III.",
      "I, II, III e IV."
    ],
    "correctAnswer": 3,
    "explanation": "A banca considerou as quatro corretas: a obesidade grave associa-se a doença renal crônica terminal (por diabetes, hipertensão e glomerulopatia da obesidade), a maior risco de câncer de próstata agressivo, à doença articular degenerativa (artrose, comorbidade muito frequente) e a alterações epigenéticas (metilação de DNA) que participam do seu desenvolvimento.",
    "commentary": "Apenas I e IV (A), Apenas II e III (B), Apenas I, II e III (C): todas deixam de fora assertivas consideradas corretas.",
    "reference": "Sabiston — Tratado de Cirurgia (cirurgia bariátrica) / Diretrizes Brasileiras de Obesidade (ABESO)",
    "tags": [
      "obesidade",
      "cirurgia bariátrica",
      "comorbidades da obesidade"
    ],
    "tip": "Obesidade grave aumenta risco de DRC, câncer e artrose.",
    "alert": "Gabarito discutível: chamar a artrite de \"a alteração mais frequente\" no obeso grave (III) é discutível — hipertensão, dislipidemia e esteatose também são muito prevalentes. A banca considerou as quatro assertivas corretas."
  },
  {
    "id": "amrigs2026-36",
    "module": "Cirurgia",
    "text": "Homem, 42 anos, com história de pancreatite aguda biliar, evoluiu com necessidade de internação em UTI por insuficiência respiratória e síndrome da resposta inflamatória sistêmica, apresentando melhora clínica gradativa, totalizando 22 dias de hospitalização. Em torno de 6 semanas após o início do quadro, procurou o pronto atendimento relatando dor abdominal persistente em epigástrio e hipocôndrio esquerdo, de intensidade moderada, associada à saciedade precoce, náuseas ocasionais e perda ponderal de 6 kg no período. Nega febre ou icterícia. Ao exame físico, apresenta-se em bom estado geral, afebril, PA 122/76 mmHg, FC 88 bpm, abdome com desconforto à palpação profunda em região epigástrica. TC de abdome com contraste evidencia área bem delimitada de aproximadamente 8 cm no corpo e cauda pancreáticos, com conteúdo heterogêneo de densidade mista, apresentando componente líquido e sólido, circundada por parede bem definida com realce pelo contraste. Observa-se ainda atrofia do parênquima pancreático adjacente. Exames laboratoriais mostram amilase 130 U/L (VR 25-125 U/L) e lipase 68 U/L (VR 13-60 U/L), hemoglobina 13,4 g/dL, 12.400 leucócitos/mm³ com neutrófilos 68% (8.432/mm³), linfócitos 24% (2.976/mm³), monócitos 6% (744/mm³), eosinófilos 2% (248/mm³), basófilos 0%. Assinale a alternativa que apresenta o diagnóstico correto.",
    "options": [
      "Necrose pancreática isolada.",
      "Pseudocisto pancreático.",
      "Coleção líquida aguda peripancreática.",
      "Abscesso pancreático."
    ],
    "correctAnswer": 0,
    "explanation": "Seis semanas após pancreatite aguda grave, coleção bem delimitada, com parede que realça e conteúdo heterogêneo (líquido e sólido) em área de necrose pancreática: necrose encapsulada (walled-off necrosis, WON), traduzida na alternativa como \"necrose pancreática isolada\". Pela classificação de Atlanta revisada, depois de 4 semanas a coleção encapsulada com componente sólido é WON; só líquido, sem necrose, é pseudocisto.",
    "commentary": "Pseudocisto (B): conteúdo apenas líquido e homogêneo, após pancreatite intersticial; aqui há componente sólido (necrose).\n\nColeção líquida aguda peripancreática (C): ocorre nas primeiras 4 semanas e não tem parede.\n\nAbscesso pancreático (D): termo abandonado pela classificação de Atlanta; falaria-se em necrose infectada, com febre e gás — o paciente está afebril.",
    "reference": "Classificação de Atlanta revisada (Gut 2013) / Sabiston",
    "tags": [
      "pancreatite aguda",
      "necrose pancreática encapsulada",
      "classificação de Atlanta",
      "pseudocisto pancreático"
    ],
    "tip": "Atlanta: <4 semanas = coleção aguda; >4 semanas = pseudocisto (só líquido) ou WON (com sólido)."
  },
  {
    "id": "amrigs2026-37",
    "module": "Cirurgia",
    "text": "Mulher, 42 anos, foi admitida no pronto-socorro acompanhada por familiar, que relata que ela está com quadro de fraqueza generalizada, náuseas, vômitos persistentes e diminuição significativa da ingestão alimentar, todos em caráter progressivo ao longo dos últimos 3 dias. Durante a avaliação, foram constatados diplopia ocular, nistagmo, queixas de vertigem rotatória, anormalidades da marcha, delirium e déficit de memória recente. A paciente foi submetida à cirurgia bariátrica do tipo bypass gástrico há 3 anos. Ao exame físico, apresentava sinais vitais estáveis, com frequência cardíaca de 92 bpm, PA de 112/67 mmHg e temperatura de 36,8 °C, abdome depressível, com desconforto à palpação mesogástrica, sem sinais de irritação peritoneal. A paciente tornou a vomitar durante a avaliação. O teste de glicemia capilar revelou glicemia de 122 mg/dL. Qual é o diagnóstico mais provável?",
    "options": [
      "Deficiência de tiamina.",
      "Choque hipovolêmico.",
      "Suboclusão intestinal.",
      "Hiponatremia."
    ],
    "correctAnswer": 0,
    "explanation": "Vômitos persistentes após bypass gástrico seguidos de oftalmoplegia (diplopia, nistagmo), ataxia de marcha e confusão/alteração de memória: encefalopatia de Wernicke por deficiência de tiamina (B1). Tratamento imediato com tiamina parenteral em dose alta, antes de soluções com glicose.",
    "commentary": "Choque hipovolêmico (B): sinais vitais estáveis.\n\nSuboclusão intestinal (C): não explica os sinais neurológicos.\n\nHiponatremia (D): pode causar confusão, mas não a tríade oftalmoplegia–ataxia–confusão.",
    "reference": "ASMBS — Integrated Health Nutritional Guidelines for the Surgical Weight Loss Patient (2019)",
    "tags": [
      "encefalopatia de Wernicke",
      "tiamina",
      "cirurgia bariátrica",
      "deficiência nutricional"
    ],
    "tip": "Bariátrica + vômitos + confusão/ataxia/oftalmoplegia = tiamina IV já."
  },
  {
    "id": "amrigs2026-38",
    "module": "Cirurgia",
    "text": "De acordo com o checklist de cirurgia segura proposto pela Organização Mundial de Saúde (OMS), qual dos itens a seguir faz parte da etapa de time-out?",
    "options": [
      "Avaliação de via aérea difícil.",
      "Medição da PA.",
      "Contagem de compressas utilizadas.",
      "Confirmação do procedimento."
    ],
    "correctAnswer": 3,
    "explanation": "O checklist da OMS tem três etapas: sign in (antes da indução anestésica), time-out (antes da incisão) e sign out (antes de o paciente sair da sala). No time-out, a equipe se apresenta e confirma paciente, procedimento e local da incisão, além de antibioticoprofilaxia, eventos críticos previstos e exames de imagem disponíveis.",
    "commentary": "Via aérea difícil (A): faz parte do sign in, antes da indução.\n\nMedição da PA (B): é monitorização anestésica de rotina, não item específico do time-out.\n\nContagem de compressas (C): faz parte do sign out.",
    "reference": "OMS — Manual de Cirurgia Segura Salva Vidas (2009) / Ministério da Saúde — Protocolo de Cirurgia Segura",
    "tags": [
      "cirurgia segura",
      "checklist da OMS",
      "time-out",
      "segurança do paciente"
    ],
    "tip": "Sign in: antes da anestesia. Time-out: antes da incisão. Sign out: antes de sair da sala."
  },
  {
    "id": "amrigs2026-39",
    "module": "Cirurgia",
    "text": "Assinale a alternativa que apresenta o fator favorável ao fechamento espontâneo de fístula enterocutânea.",
    "options": [
      "Trajeto <2 cm.",
      "Trajeto epitelizado.",
      "Fístula lateral.",
      "Débito elevado."
    ],
    "correctAnswer": 2,
    "explanation": "Fístula lateral (com continuidade intestinal preservada) favorece o fechamento espontâneo. Outros fatores favoráveis: trajeto longo (>2 cm), baixo débito, boa nutrição, ausência de obstrução distal, de infecção, de neoplasia, de doença inflamatória intestinal e de corpo estranho.",
    "commentary": "Trajeto <2 cm (A): trajeto curto desfavorece o fechamento.\n\nTrajeto epitelizado (B): epitelização impede o fechamento.\n\nDébito elevado (D): fístula de alto débito (>500 mL/dia) fecha com menos frequência.",
    "reference": "Sabiston — Tratado de Cirurgia (fístulas enterocutâneas)",
    "tags": [
      "fístula enterocutânea",
      "fechamento espontâneo"
    ],
    "tip": "Fístula que não fecha (FRIENDS): corpo estranho, radiação, inflamação/infecção, epitelização, neoplasia, obstrução distal, esteroides."
  },
  {
    "id": "amrigs2026-40",
    "module": "Cirurgia",
    "text": "Homem, 32 anos, vítima de acidente automobilístico, deu entrada no serviço de emergência trazido inconsciente pelo resgate, com trauma abdominal contuso e fratura de pelve. Foi submetido à laparotomia exploradora de urgência para controle de hemorragia intra-abdominal de origem hepática e esplênica, satisfatoriamente controladas com rafia hepática e esplenectomia. Submetido à fixação externa da pelve e transfusão de 4 unidades de concentrado de hemácias e 4 unidades de plasma fresco. Após 18 horas da cirurgia, encontra-se sedado, em ventilação mecânica, necessitando de aumento da pressão inspiratória para manter volumes correntes adequados. Apresenta débito urinário de 15 ml/h nas últimas 4 horas, com ressuscitação volêmica com solução fisiológica 0,9% e uso de noradrenalina para manter PAM >65 mmHg e FC 115 bpm. Gasometria arterial revela pH 7,28, PaCO2 48 mmHg, HCO3- 18 mEq/L, BE -8, lactato 4,2 mmol/L. Pressão intra-abdominal, aferida através de sonda vesical de demora, de 36 cmH2O (26,5 mmHg). Considerando o caso apresentado, qual é a medida indicada no caso?",
    "options": [
      "Iniciar protocolo de transfusão maciça (1:1:1).",
      "Administrar manitol 20%, EV.",
      "Administrar solução salina hipertônica, EV.",
      "Proceder à laparotomia."
    ],
    "correctAnswer": 3,
    "explanation": "Pressão intra-abdominal de 26,5 mmHg (>20 mmHg) com nova disfunção orgânica — oligúria, aumento da pressão de via aérea, hipercapnia, acidose e necessidade de vasopressor — define síndrome compartimental abdominal. O tratamento é a laparotomia descompressiva, com abdome aberto.",
    "commentary": "Transfusão maciça 1:1:1 (A): não há sinal de sangramento ativo descrito; o problema é a hipertensão abdominal.\n\nManitol (B) e salina hipertônica (C): tratam hipertensão intracraniana, não síndrome compartimental abdominal.",
    "reference": "WSACS — World Society of the Abdominal Compartment Syndrome guidelines (2013) / ATLS",
    "tags": [
      "síndrome compartimental abdominal",
      "hipertensão intra-abdominal",
      "laparotomia descompressiva",
      "trauma"
    ],
    "tip": "PIA >20 mmHg + nova disfunção orgânica = síndrome compartimental: descompressão."
  },
  {
    "id": "amrigs2026-41",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 28 anos, nulípara, relata ter observado nódulo palpável em mama direita há 3 meses, móvel, fibroelástico, medindo 2,5x1,3x2,0 cm, com limites regulares, indolor, sem alterações estéticas da mama. Nega história familiar de câncer de mama ou outro aspecto significativo na sua história. O ultrassom mostra um tumor ovalado, com orientação paralela à pele, bem definido, com margens delimitadas e com ecos internos fracos e homogêneos (hipoecogênico). Considerando o caso apresentado, qual é a conduta mais adequada?",
    "options": [
      "Exérese cirúrgica imediata com margem de segurança.",
      "Biópsia por agulha grossa (core biopsy) para confirmação histológica.",
      "Acompanhamento semestral com ultrassonografia.",
      "Mamografia bilateral para avaliação complementar."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com nódulo móvel, fibroelástico, regular, e ultrassom com lesão oval, paralela à pele, circunscrita e homogênea: fibroadenoma típico (BI-RADS 3, provavelmente benigno). Abaixo de 30–35 anos, a conduta é acompanhamento com ultrassonografia a cada 6 meses (por cerca de 2 anos); biópsia se houver crescimento ou mudança de aspecto.",
    "commentary": "Exérese imediata com margem (A): margem é para lesões malignas ou filoides; o fibroadenoma típico não precisa ser retirado.\n\nCore biopsy (B): reservada para lesões suspeitas (BI-RADS 4/5), crescimento ou desejo da paciente.\n\nMamografia bilateral (D): em mulheres com menos de 30 anos, o ultrassom é o exame inicial; a mamografia pouco acrescenta em mama densa.",
    "reference": "FEBRASGO — Lesões benignas da mama / Colégio Brasileiro de Radiologia — BI-RADS",
    "tags": [
      "fibroadenoma",
      "nódulo mamário",
      "BI-RADS 3",
      "ultrassonografia mamária"
    ],
    "tip": "BI-RADS 3: controle em 6 meses; não biopsiar de rotina."
  },
  {
    "id": "amrigs2026-42",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 19 anos, procura atendimento médico queixando-se de cólicas menstruais intensas desde a sua primeira menstruação, aos 12 anos. A dor é cíclica, iniciando-se um dia antes do fluxo menstrual e persistindo nos dois primeiros dias, com intensidade que a impede de frequentar a escola e realizar suas atividades diárias, não sendo progressiva. Nega dispareunia, sangramento uterino anormal ou outros sintomas ginecológicos. Ao exame físico, não são identificadas alterações. Considerando o caso clínico apresentado, assinale a alternativa que apresenta o diagnóstico mais provável e a conduta inicial mais adequada, respectivamente.",
    "options": [
      "Dismenorreia secundária – solicitar ultrassonografia pélvica e prescrever analgésicos opioides.",
      "Dismenorreia primária – orientar medidas de higiene menstrual e prescrever anti-inflamatórios não esteroides (AINEs).",
      "Endometriose – indicar laparoscopia diagnóstica e terapêutica e prescrever AINEs.",
      "Doença inflamatória pélvica – iniciar antibioticoterapia de amplo espectro e solicitar exames para pesquisa de clamídia e gonococo."
    ],
    "correctAnswer": 1,
    "explanation": "Dor menstrual desde a menarca, iniciando com o fluxo e durando 1–2 dias, sem progressão, com exame normal: dismenorreia primária (por prostaglandinas endometriais). Tratamento de primeira linha: AINEs (eventualmente com anticoncepcional hormonal), além de medidas gerais.",
    "commentary": "Dismenorreia secundária com opioide (A): não há sinal de causa orgânica; opioide não é tratamento de dismenorreia.\n\nEndometriose com laparoscopia (C): a dor não é progressiva e não há dispareunia; mesmo na suspeita, o tratamento clínico empírico vem antes da laparoscopia.\n\nDoença inflamatória pélvica (D): não há febre, corrimento ou dor à mobilização do colo, e o quadro é cíclico desde a menarca.",
    "reference": "FEBRASGO — Dismenorreia (Protocolo) / ACOG Committee Opinion nº 760",
    "tags": [
      "dismenorreia primária",
      "AINE",
      "adolescente"
    ],
    "tip": "Dismenorreia desde a menarca, sem progressão, exame normal = primária → AINE."
  },
  {
    "id": "amrigs2026-43",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 26 anos, previamente saudável, procura atendimento em um posto de saúde com queixa de disúria, aumento da frequência miccional e dor suprapúbica há 2 dias. Nega febre, calafrios ou dor lombar. Relata que teve relações sexuais há 3 dias. No exame físico, não há sinais de corrimento vaginal ou irritação vulvar. A análise do sedimento urinário revela leucocitúria e presença de nitritos positivos. Não foram realizados exames de imagem ou urocultura no momento. O diagnóstico e a conduta mais prováveis no caso são, respectivamente:",
    "options": [
      "Cistite aguda – iniciar nitrofurantoína por 5 dias.",
      "Vulvovaginite – solicitar cultura de secreção vaginal e iniciar tratamento antifúngico.",
      "Uretrite – solicitar cultura de secreção vaginal e uretral e iniciar azitromicina.",
      "Síndrome da bexiga dolorosa – solicitar exame de urina, urocultura e cistoscopia."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem, não gestante, com disúria, polaciúria e dor suprapúbica, sem febre nem dor lombar e sem corrimento: cistite aguda não complicada (a relação sexual recente é fator de risco). Nitrito e leucocitúria reforçam o diagnóstico. Tratamento empírico: nitrofurantoína por 5 dias (ou fosfomicina dose única).",
    "commentary": "Vulvovaginite (B): não há corrimento nem irritação vulvar.\n\nUretrite (C): cursa com corrimento uretral e disúria sem urgência importante; nitrito positivo aponta para cistite.\n\nSíndrome da bexiga dolorosa (D): quadro crônico (>6 semanas) e sem infecção.",
    "reference": "FEBRASGO — Infecção do trato urinário (Protocolo) / IDSA — Uncomplicated cystitis (2011)",
    "tags": [
      "cistite aguda",
      "infecção urinária",
      "nitrofurantoína"
    ],
    "tip": "Cistite não complicada: tratar sem urocultura (nitrofurantoína 5 dias ou fosfomicina)."
  },
  {
    "id": "amrigs2026-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "Casal, ambos com 35 anos, procura atendimento médico devido à infertilidade conjugal. A mulher relata ciclos menstruais regulares, mas com fluxo menstrual reduzido. O homem não apresenta histórico de infertilidade prévia. Após anamnese e exame físico, foram solicitados os seguintes exames: espermograma, ultrassonografia transvaginal (USTV), dosagem de progesterona e histerossalpingografia (HSG). Os resultados dos exames foram os seguintes:\n• Espermograma: normozoospermia.\n• USTV: ovários com volume normal, sem sinais de policistose ovariana, e útero com cavidade normal.\n• Dosagem de progesterona: 10 ng/ml (referência: fase lútea >3 ng/ml), realizada 7 dias antes da data esperada da próxima menstruação.\n• HSG: patência tubária bilateral.\n\nCom base nos resultados dos exames e no caso clínico apresentado, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) A paciente apresenta evidências de ovulação.\n( ) A HSG é o exame padrão-ouro para avaliação da cavidade uterina.\n( ) A USTV pode avaliar a reserva ovariana.\n( ) A presença de normozoospermia no espermograma não exclui a necessidade de avaliação hormonal no homem.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "options": [
      "V – F – V – F.",
      "V – F – F – V.",
      "F – V – F – V.",
      "F – V – V – F."
    ],
    "correctAnswer": 0,
    "explanation": "(V) Progesterona de 10 ng/mL na fase lútea média (cerca de 7 dias antes da menstruação) confirma ovulação (>3 ng/mL).\n(F) O padrão-ouro para avaliar a cavidade uterina é a histeroscopia; a HSG avalia sobretudo a permeabilidade tubária.\n(V) A USTV avalia a reserva ovariana pela contagem de folículos antrais.\n(F) Com espermograma normal, não há indicação de avaliação hormonal do homem.\n\nSequência: V – F – V – F.",
    "commentary": "V – F – F – V (B): a USTV avalia reserva ovariana e o homem com espermograma normal não precisa de avaliação hormonal.\n\nF – V – F – V (C) e F – V – V – F (D): a paciente ovula e a HSG não é padrão-ouro para a cavidade.",
    "reference": "FEBRASGO — Investigação do casal infértil (Protocolo) / ASRM Committee Opinion (2015)",
    "tags": [
      "infertilidade",
      "propedêutica do casal infértil",
      "reserva ovariana",
      "histerossalpingografia"
    ],
    "tip": "Infertilidade: ovulação (progesterona), tubas (HSG), reserva (CFA/AMH), sêmen (espermograma)."
  },
  {
    "id": "amrigs2026-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 28 anos, saudável, consulta por Sangramento Uterino Anormal (SUA) persistente há 2 meses, desde que iniciou o uso de pílula anticoncepcional combinada (etinilestradiol 20 mcg + levonorgestrel 100 mcg). Relata tomar a pílula corretamente, iniciando a primeira cartela no primeiro dia da menstruação, sem esquecimentos, e não apresenta outros sintomas. Nega tabagismo e possui um parceiro sexual fixo há 1 ano. O exame especular é normal e a citologia oncótica está em dia e sem alterações. Qual é a conduta inicial mais adequada para essa paciente, considerando as causas mais prováveis?",
    "options": [
      "Realizar USTV para investigar causas estruturais (por exemplo, miomas e pólipos) e prescrever AINEs para controle do sangramento.",
      "Suspender o uso da pílula combinada, prescrever anticoncepcional contendo apenas progesterona e agendar histeroscopia diagnóstica.",
      "Orientar a paciente sobre a possibilidade de adaptação do organismo nos primeiros meses de uso da pílula, reforçar a importância da adesão correta e agendar reavaliação em 2 meses.",
      "Prescrever doxiciclina 100 mg/dia profilática, realizar teste de gravidez e solicitar exames para rastreio de infecções sexualmente transmissíveis."
    ],
    "correctAnswer": 2,
    "explanation": "Sangramento irregular (spotting) nos primeiros 3 meses de uso de contraceptivo combinado de baixa dose é comum e tende a diminuir com a adaptação do endométrio. Em paciente que usa corretamente, sem outros sintomas e com exame especular e citologia normais, a conduta inicial é orientar, reforçar a adesão e reavaliar. Persistindo além de 3–6 meses, investigam-se outras causas (gravidez, infecção como clamídia, lesões estruturais).",
    "commentary": "USTV e AINE já (A): investigação estrutural só se o sangramento persistir após a adaptação ou houver outros sinais.\n\nTrocar por progestagênio isolado e histeroscopia (B): o progestagênio isolado causa ainda mais sangramento irregular; histeroscopia não está indicada.\n\nDoxiciclina profilática (D): não há indicação de antibiótico sem diagnóstico de infecção.",
    "reference": "FEBRASGO — Manual de Anticoncepção / OMS — Critérios médicos de elegibilidade (2015)",
    "tags": [
      "anticoncepcional oral combinado",
      "sangramento uterino anormal",
      "spotting",
      "anticoncepção"
    ],
    "tip": "Escape nos 3 primeiros meses de pílula é esperado: orientar e aguardar."
  },
  {
    "id": "amrigs2026-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 28 anos, procura atendimento médico queixando-se de corrimento vaginal, odor fétido e prurido. Ao exame especular, observa-se corrimento acinzentado, fluido e homogêneo, aderido às paredes da vagina. O pH vaginal é 5,0 e o teste de aminas é positivo. Diante do quadro clínico apresentado, o diagnóstico mais provável é de __________, e o tratamento preconizado é ____________________, por _________.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
    "options": [
      "candidíase vaginal – fluconazol 150 mg ao dia, VO – 3 dias",
      "vaginose bacteriana – secnidazol 2 g, VO – 1 dia",
      "tricomoníase – metronidazol 2 g, dose única, VO – 1 dia",
      "vaginite aeróbica – clindamicina creme vaginal 2% – 14 dias"
    ],
    "correctAnswer": 1,
    "explanation": "Corrimento acinzentado, fluido, homogêneo, com odor fétido, pH >4,5 e teste das aminas positivo (critérios de Amsel): vaginose bacteriana. Pelo PCDT de IST, o tratamento é metronidazol 500 mg VO 12/12 h por 7 dias; secnidazol 2 g VO em dose única é uma alternativa — a única entre as opções com tratamento correto para o diagnóstico correto.",
    "commentary": "Candidíase (A): corrimento branco grumoso, pH <4,5, aminas negativas; o fluconazol é dose única de 150 mg.\n\nTricomoníase (C): corrimento amarelo-esverdeado, bolhoso, com colo em framboesa.\n\nVaginite aeróbica (D): corrimento amarelado, inflamação intensa, aminas negativas.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "vaginose bacteriana",
      "corrimento vaginal",
      "critérios de Amsel",
      "secnidazol"
    ],
    "tip": "Vaginose: cinza, fluido, pH >4,5, teste do cheiro positivo (Amsel)."
  },
  {
    "id": "amrigs2026-47",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 55 anos, no climatério, apresenta sintomas vasomotores moderados a graves há 2 anos, impactando sua qualidade de vida e sono. Ela opta por não utilizar terapia hormonal devido a preferências pessoais e não apresenta contraindicações médicas para outras intervenções. O médico elaborou quatro recomendações baseadas em evidências científicas sobre o manejo não hormonal dos fogachos. Assinale a alternativa que apresenta a recomendação correta de acordo com o caso apresentado.",
    "options": [
      "Recomendar medicina herbal chinesa como primeira linha para reduzir a frequência dos fogachos, devido à sua eficácia comprovada em revisões sistemáticas.",
      "Indicar terapia cognitivo-comportamental, que demonstrou redução significativa dos sintomas vasomotores em ensaios clínicos e é recomendada por diretrizes internacionais.",
      "Prescrever acupuntura como tratamento principal, dado que revisões sistemáticas confirmaram sua eficácia sustentada no controle dos fogachos, inclusive em longo prazo.",
      "Sugerir técnicas de relaxamento, como yoga ou tai chi, como primeira linha de tratamento, pois estudos mostraram melhora consistente nos sintomas vasomotores."
    ],
    "correctAnswer": 1,
    "explanation": "Entre as opções não hormonais e não farmacológicas para fogachos, a terapia cognitivo-comportamental tem evidência de ensaios clínicos e é recomendada pela North American Menopause Society (2023), assim como a hipnose clínica.",
    "commentary": "Fitoterapia chinesa (A): sem eficácia comprovada; não é recomendada.\n\nAcupuntura (C): resultados semelhantes a placebo/sham; não recomendada como tratamento principal.\n\nYoga ou tai chi (D): melhoram bem-estar, mas não reduzem de forma consistente os sintomas vasomotores.",
    "reference": "The 2023 Nonhormone Therapy Position Statement of The North American Menopause Society",
    "tags": [
      "climatério",
      "sintomas vasomotores",
      "terapia cognitivo-comportamental",
      "tratamento não hormonal"
    ],
    "tip": "Fogachos sem hormônio: TCC e hipnose (não farmacológicos); ISRS/IRSN, gabapentina, fezolinetante (farmacológicos)."
  },
  {
    "id": "amrigs2026-48",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 28 anos, comparece à consulta por apresentar dismenorreia intensa, progressiva e dispareunia nos últimos anos. Relata que os sintomas pioram durante o fluxo menstrual. Qual é a melhor abordagem inicial para o tratamento dessa paciente, considerando a necessidade de alívio dos sintomas e a possibilidade de preservar sua fertilidade?",
    "options": [
      "Tratamento empírico com progestogênios contínuos, sem necessidade de confirmação diagnóstica por laparoscopia.",
      "Uso de análogos do GnRH (hormônio liberador de gonadotrofinas) como primeira linha de tratamento para reduzir os níveis de estrogênio.",
      "Realização de laparoscopia para confirmação diagnóstica e tratamento cirúrgico imediato.",
      "Uso de contraceptivos com pausa de 7 dias, após laparoscopia cirúrgica."
    ],
    "correctAnswer": 0,
    "explanation": "Dismenorreia progressiva e dispareunia em mulher jovem sugerem endometriose. As diretrizes atuais permitem diagnóstico clínico e de imagem e tratamento empírico com progestagênio contínuo (por exemplo, dienogeste) ou contraceptivo combinado contínuo, sem necessidade de laparoscopia confirmatória — que fica para falha clínica, endometrioma volumoso ou infertilidade.",
    "commentary": "Análogo de GnRH como primeira linha (B): é segunda linha, pelos efeitos de hipoestrogenismo e custo.\n\nLaparoscopia imediata (C): não é mais exigida para diagnóstico; cirurgia tem riscos (inclusive para a reserva ovariana).\n\nContraceptivo com pausa após laparoscopia (D): prefere-se o uso contínuo, sem pausa, e a laparoscopia não é pré-requisito.",
    "reference": "ESHRE Guideline — Endometriosis (2022) / FEBRASGO — Endometriose",
    "tags": [
      "endometriose",
      "dismenorreia secundária",
      "progestagênio",
      "dienogeste"
    ],
    "tip": "Endometriose suspeita: progestagênio contínuo empírico; laparoscopia não é obrigatória."
  },
  {
    "id": "amrigs2026-49",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 25 anos, apresenta hirsutismo e acne com progressão lenta, acompanhada de ciclos menstruais irregulares. Relata que os sintomas pioraram nos últimos anos e expressa preocupação com a preservação da sua fertilidade futura. Ao exame físico, não apresenta sinais de virilização, escala de Ferriman-Gallwey é 7 e Índice de Massa Corporal (IMC) de 26. As ultrassonografias pélvica e renal não apresentam anormalidades. Os valores de TSH, prolactina, teste de tolerância à glicose com 75 g e 17-alfa-hidroxiprogesterona são normais. Qual é a melhor abordagem inicial para o tratamento dessa paciente, considerando a necessidade de alívio dos sintomas e de preservação da fertilidade?",
    "options": [
      "Indicar o uso de contraceptivos hormonais combinados como primeira linha de tratamento para reduzir os níveis de androgênios e regular os ciclos menstruais.",
      "Iniciar tratamento com metformina para melhorar a resistência à insulina e potencialmente regular os ciclos menstruais.",
      "Dosar androgênios livres para investigar a presença de ovários policísticos ou tumores produtores de androgênios.",
      "Indicar o uso de antiandrogênios, como a espirolactona, como primeira linha de tratamento para reduzir os sintomas de hiperandrogenismo."
    ],
    "correctAnswer": 0,
    "explanation": "Hiperandrogenismo clínico (hirsutismo, acne) com ciclos irregulares, após exclusão de hiperplasia adrenal (17-OH-progesterona normal), hiperprolactinemia e tireoidopatia: síndrome dos ovários policísticos. Para quem não deseja engravidar agora, a primeira linha é o contraceptivo hormonal combinado — reduz androgênios livres (aumenta SHBG e suprime LH), regula ciclos e protege o endométrio, sem comprometer a fertilidade futura.",
    "commentary": "Metformina (B): adjuvante, sobretudo com resistência insulínica; não é primeira linha para hirsutismo e ciclo.\n\nDosar androgênios para excluir tumor (C): sem virilização e com evolução lenta, não há suspeita de tumor; o diagnóstico de SOP já é possível clinicamente.\n\nEspironolactona como primeira linha (D): antiandrogênios são associados ao contraceptivo quando a resposta é insuficiente após 6 meses, e exigem contracepção (teratogênicos).",
    "reference": "International evidence-based guideline for the assessment and management of PCOS (2023) / FEBRASGO",
    "tags": [
      "síndrome dos ovários policísticos",
      "hirsutismo",
      "anticoncepcional oral combinado",
      "hiperandrogenismo"
    ],
    "tip": "SOP sem desejo de gestar agora: contraceptivo combinado é a primeira linha."
  },
  {
    "id": "amrigs2026-50",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 30 anos, relata ter realizado há 2 meses cirurgia bariátrica com a técnica de bypass gástrico. Comparece à consulta para ser orientada sobre métodos anticoncepcionais. O seu IMC era de 30, e é de 26 no momento da consulta. Paciente está planejando engravidar em 1 ano, mas precisa de uma opção segura e eficaz até lá. Tem fluxo menstrual aumentado, sem nenhuma causa identificável, e tem história de trombose venosa no passado, estando assintomática no momento. Qual é o melhor método anticoncepcional para essa paciente, considerando a necessidade de eficácia e segurança pós-cirurgia bariátrica?",
    "options": [
      "Contraceptivos orais combinados de baixa dosagem.",
      "Sistema intrauterino liberador de levonorgestrel.",
      "Adesivo contraceptivo.",
      "Medroxiprogesterona injetável, pois a fertilidade retorna 2 meses após a pausa."
    ],
    "correctAnswer": 1,
    "explanation": "Após bypass gástrico, contraceptivos orais têm absorção incerta (OMS: categoria 3). Com antecedente de trombose venosa, métodos com estrogênio estão contraindicados (categoria 4). O SIU de levonorgestrel é o melhor: altamente eficaz, sem passar pelo trato digestivo, sem estrogênio, reduz o fluxo menstrual aumentado e permite rápido retorno à fertilidade ao planejar gestação (recomendada após 12–18 meses da bariátrica).",
    "commentary": "Contraceptivo oral combinado (A): estrogênio contraindicado por TVP prévia, e absorção reduzida após bypass.\n\nAdesivo (C): contém estrogênio — contraindicado pela TVP.\n\nMedroxiprogesterona injetável (D): a fertilidade pode demorar 7–10 meses ou mais para retornar, e há ganho de peso e perda de massa óssea.",
    "reference": "OMS — Critérios médicos de elegibilidade para uso de métodos anticoncepcionais (2015) / FEBRASGO — Anticoncepção após cirurgia bariátrica",
    "tags": [
      "anticoncepção",
      "cirurgia bariátrica",
      "SIU de levonorgestrel",
      "trombose venosa profunda"
    ],
    "tip": "Pós-bypass + TVP prévia: DIU (hormonal ou de cobre), sem estrogênio e sem via oral."
  },
  {
    "id": "amrigs2026-51",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 28 anos, com 40 semanas e 2 dias de gestação, comparece ao hospital em trabalho de parto. Relata contrações uterinas regulares há 6 horas, com intervalos de 3 minutos e duração média de 60 segundos. Ao exame obstétrico, verifica-se dilatação cervical de 4 cm, esvaecimento (apagamento) completo do colo e bolsa íntegra. O líquido amniótico é claro, com grumos. A paciente está hemodinamicamente estável e sem sinais de sofrimento fetal. Após 4 horas de evolução, observa-se que a dilatação cervical permanece em 4 cm, apesar da manutenção das contrações regulares. Qual é a conduta mais adequada nesse momento?",
    "options": [
      "Realizar amniotomia para acelerar o trabalho de parto.",
      "Administrar ocitocina para aumentar a intensidade das contrações uterinas.",
      "Diagnosticar como fase latente prolongada e aguardar evolução espontânea.",
      "Diagnosticar como trabalho de parto estacionado e indicar cesariana imediata."
    ],
    "correctAnswer": 2,
    "explanation": "Pelas definições atuais (OMS 2018, ACOG), a fase ativa do trabalho de parto começa com 5–6 cm de dilatação. Com 4 cm, mesmo com apagamento completo e contrações regulares, a paciente ainda está na fase latente; ficar em 4 cm por 4 horas não é parada de progressão. Com bem-estar materno e fetal, a conduta é expectante (a fase latente prolongada em primíparas é >20 h).",
    "commentary": "Amniotomia (A): não é recomendada de rotina para acelerar o trabalho de parto, sobretudo na fase latente.\n\nOcitocina (B): não se usa ocitocina na fase latente sem indicação; as contrações já são adequadas.\n\nParto estacionado com cesárea (D): parada de progressão só é diagnosticada na fase ativa (≥6 cm), após 4 h com contrações adequadas e bolsa rota, ou 6 h com ocitocina.",
    "reference": "OMS — Recomendações de cuidados intraparto para uma experiência positiva de parto (2018) / ACOG–SMFM Obstetric Care Consensus nº 1",
    "tags": [
      "trabalho de parto",
      "fase latente",
      "partograma",
      "parada de progressão"
    ],
    "tip": "Fase ativa começa com 5–6 cm. Antes disso não se diagnostica parada."
  },
  {
    "id": "amrigs2026-52",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera, 25 anos, primípara, comparece ao ambulatório 10 dias após parto vaginal sem complicações. Relata sangramento vaginal em pequena quantidade, de coloração amarelada, e desconforto perineal leve. Ao exame físico, observa-se episiorrafia íntegra, sem sinais de infecção ou hematomas. O fundo uterino não é palpável no abdome. Paciente está afebril e hemodinamicamente estável. Qual é a conduta mais adequada nesse momento?",
    "options": [
      "Solicitar hemograma para descartar anemia pós-parto.",
      "Realizar ultrassonografia pélvica para avaliar involução uterina.",
      "Tranquilizar a paciente e orientar sobre os cuidados com o períneo e a evolução dos lóquios.",
      "Prescrever antibiótico para endometrite de grau leve no puerpério."
    ],
    "correctAnswer": 2,
    "explanation": "Dez dias após o parto, lóquios amarelados em pequena quantidade (lochia flava/serosa), útero não palpável no abdome (involução normal), episiorrafia íntegra, afebril e estável: puerpério normal. A conduta é tranquilizar e orientar sobre a evolução dos lóquios, higiene e cuidado perineal, amamentação e sinais de alerta.",
    "commentary": "Hemograma (A): não há sinal de anemia ou sangramento importante.\n\nUltrassom pélvico (B): a involução está normal ao exame.\n\nAntibiótico para endometrite (D): não há febre, dor uterina nem lóquios fétidos.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 32 (pré-natal e puerpério) / Zugaib — Obstetrícia",
    "tags": [
      "puerpério",
      "lóquios",
      "consulta puerperal"
    ],
    "tip": "Lóquios: vermelhos (1–4 dias) → serossanguinolentos/amarelados → brancos."
  },
  {
    "id": "amrigs2026-53",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera, 26 anos, primípara, comparece ao hospital no terceiro dia após cesariana de urgência realizada devido à parada de progressão no trabalho de parto. Relata febre persistente desde o segundo dia pós-parto, atingindo 38,8 °C, além de dor abdominal difusa e loquiação fétida. Ao exame físico, observa-se útero hipoinvoluído e doloroso à palpação. Paciente está hemodinamicamente estável, sem sinais de choque séptico. Qual é a conduta inicial mais adequada para essa paciente?",
    "options": [
      "Solicitar e aguardar resultados do hemograma e da hemocultura antes de iniciar antibióticos.",
      "Iniciar antibioticoterapia empírica intravenosa com cobertura para bactérias aeróbias e anaeróbias.",
      "Realizar USTV para avaliar retenção de restos placentários antes de iniciar o tratamento.",
      "Prescrever antibioticoterapia oral com ampicilina e acompanhar ambulatorialmente."
    ],
    "correctAnswer": 1,
    "explanation": "Febre, dor abdominal, lóquios fétidos e útero subinvoluído e doloroso após cesárea: endometrite puerperal. O tratamento é antibiótico intravenoso imediato, de amplo espectro, cobrindo aeróbios e anaeróbios (clássico: clindamicina + gentamicina), até 48 h afebril.",
    "commentary": "Aguardar hemograma e hemocultura (A): não se adia o antibiótico em infecção puerperal.\n\nUSTV antes do tratamento (C): pode ser feita para pesquisar restos ou abscesso, mas sem atrasar o antibiótico.\n\nAmpicilina oral ambulatorial (D): a endometrite pós-cesárea exige tratamento intravenoso e cobertura anaeróbia.",
    "reference": "FEBRASGO — Infecção puerperal / Zugaib — Obstetrícia",
    "tags": [
      "endometrite",
      "infecção puerperal",
      "clindamicina",
      "cesárea"
    ],
    "tip": "Endometrite pós-cesárea: clindamicina + gentamicina IV."
  },
  {
    "id": "amrigs2026-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante a primeira consulta de uma puérpera que está amamentando exclusivamente há 15 dias, ela relata dor intensa nos mamilos durante as mamadas e observa fissuras bilaterais. Ao exame físico, nota-se eritema ao redor dos mamilos e ausência de sinais de infecção. O manejo inicial deve incluir a correção da técnica de amamentação, especialmente no que diz respeito à:",
    "options": [
      "Pega do bebê e à posição da mãe e do bebê.",
      "Pega do bebê e à frequência das mamadas.",
      "Ordenha manual e à frequência das mamadas.",
      "Ordenha manual e à posição da mãe e do bebê."
    ],
    "correctAnswer": 0,
    "explanation": "Fissuras e dor mamilar nas primeiras semanas decorrem, na maioria das vezes, de pega e posicionamento inadequados. O manejo inicial é corrigir a pega (boca bem aberta, abocanhando boa parte da aréola, lábio inferior evertido) e a posição da mãe e do bebê (corpo alinhado, barriga com barriga).",
    "commentary": "Pega e frequência (B): a frequência das mamadas é livre demanda e não causa fissura.\n\nOrdenha manual e frequência (C) / ordenha e posição (D): a ordenha ajuda no ingurgitamento, mas não corrige a causa da fissura.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Saúde da criança — aleitamento materno",
    "tags": [
      "aleitamento materno",
      "fissura mamilar",
      "pega",
      "amamentação"
    ],
    "tip": "Fissura mamilar = corrigir pega e posição."
  },
  {
    "id": "amrigs2026-55",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 28 anos, no segundo trimestre de gestação, procura atendimento médico relatando eliminação de segmentos semelhantes a “fitas brancas” nas fezes, acompanhada de dor abdominal leve e episódios de diarreia. Relata consumo recente de carne suína malcozida. O exame protoparasitológico confirma a presença de proglótides. Além de orientar medidas de higiene alimentar, qual é, respectivamente, o diagnóstico mais provável e a conduta mais adequada para o manejo inicial dessa paciente?",
    "options": [
      "Teníase – prescrever albendazol.",
      "Teníase – prescrever praziquantel.",
      "Ascaridíase – iniciar albendazol.",
      "Ascaridíase – iniciar niclosamida."
    ],
    "correctAnswer": 1,
    "explanation": "Eliminação de proglótides (\"fitas brancas\") nas fezes após consumo de carne suína malcozida: teníase por Taenia solium. O praziquantel em dose única é o tratamento de escolha e pode ser usado na gestação (sobretudo após o primeiro trimestre); a niclosamida é alternativa segura.",
    "commentary": "Teníase com albendazol (A): o albendazol é menos eficaz na teníase e deve ser evitado na gestação.\n\nAscaridíase (C e D): o Ascaris é um verme cilíndrico grande, não elimina proglótides; a niclosamida é para tênias, não para Ascaris.",
    "reference": "Ministério da Saúde — Doenças infecciosas e parasitárias: guia de bolso / FEBRASGO — Parasitoses na gestação",
    "tags": [
      "teníase",
      "praziquantel",
      "gestação",
      "parasitoses intestinais"
    ],
    "tip": "Proglótides nas fezes = tênia → praziquantel (ou niclosamida)."
  },
  {
    "id": "amrigs2026-56",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 32 anos, com 36 semanas de gestação, G3P2 (todos por via vaginal), procura atendimento médico relatando ausência de movimentos fetais há 3 dias. Ao exame físico, observa-se altura uterina compatível com a idade gestacional e ausência de batimentos cardíacos fetais confirmado pela ultrassonografia. O feto tinha uma apresentação cefálica e a placenta era corporal fúndica. Após receber essa informação, a paciente manifestou grande ansiedade e seu desejo de resolver rapidamente a situação. A paciente não apresenta sinais de infecção ou coagulopatia. O colo uterino é desfavorável (índice de Bishop = 4). Qual é a conduta mais adequada para o manejo inicial dessa paciente?",
    "options": [
      "Realizar cesariana imediatamente para remoção do feto.",
      "Optar pela conduta expectante por até 4 semanas.",
      "Induzir o parto com misoprostol por via vaginal e reavaliar a cada 4 horas.",
      "Internar a paciente e iniciar a indução do trabalho de parto com ocitocina intravenosa."
    ],
    "correctAnswer": 2,
    "explanation": "Óbito fetal no terceiro trimestre, sem infecção, coagulopatia ou contraindicação ao parto vaginal (cefálico, placenta fúndica, partos vaginais prévios), com colo desfavorável (Bishop 4) e desejo de resolução: indução com misoprostol vaginal, que amadurece o colo e induz contrações, com reavaliação periódica.",
    "commentary": "Cesárea imediata (A): não há indicação obstétrica; a via vaginal é preferida, com menor morbidade.\n\nConduta expectante por 4 semanas (B): possível em teoria, mas aumenta o risco de coagulopatia e não respeita o desejo da paciente.\n\nOcitocina com colo desfavorável (D): com Bishop baixo, o primeiro passo é o preparo do colo (misoprostol); a ocitocina vem depois.",
    "reference": "FEBRASGO — Óbito fetal (Protocolo) / FIGO — Recomendações de dose de misoprostol (2023)",
    "tags": [
      "óbito fetal",
      "indução do parto",
      "misoprostol",
      "índice de Bishop"
    ],
    "tip": "Colo desfavorável (Bishop <6): preparar com misoprostol antes da ocitocina."
  },
  {
    "id": "amrigs2026-57",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 29 anos, com 41 semanas de gestação, sem doenças, sente o bebê mexer normalmente e apresenta cardiotocografia reativa. A ultrassonografia mostra adramnia. O exame do colo do útero mostra que ele ainda está fechado e grosso. Qual é a conduta mais adequada no caso?",
    "options": [
      "Realizar amnioinfusão.",
      "Aguardar até completar 42 semanas sem fazer exames.",
      "Repetir os exames de bem-estar fetal em 2 dias.",
      "Interrupção da gestação."
    ],
    "correctAnswer": 3,
    "explanation": "Gestação de 41 semanas com oligoâmnio grave (adramnia) é indicação de resolução, independentemente da cardiotocografia reativa, pelo risco de compressão funicular, sofrimento e mecônio. Colo desfavorável não impede a indução (com preparo do colo), e a via de parto segue critérios obstétricos.",
    "commentary": "Amnioinfusão (A): não é tratamento do oligoâmnio pré-parto.\n\nAguardar 42 semanas sem exames (B): pós-datismo exige vigilância, e com adramnia a gestação deve ser interrompida.\n\nRepetir vitalidade em 2 dias (C): seria adequado com líquido normal; com adramnia, não se aguarda.",
    "reference": "FEBRASGO — Gestação prolongada (Protocolo) / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "gestação prolongada",
      "oligoâmnio",
      "indução do parto",
      "vitalidade fetal"
    ],
    "tip": "41 semanas + oligoâmnio = interromper a gestação."
  },
  {
    "id": "amrigs2026-58",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 34 anos, 12 semanas de gestação, G3P2, relata surgimento de lesões pouco dolorosas na região vulvar há 15 dias. Ao exame físico, observam-se múltiplas lesões papulopustulosas e comedões abertos e fechados na região vulvar e perineal, sem sinais de abscesso, fístulas, confluências ou celulite. O diagnóstico mais provável é de _____________. A conduta inicial mais apropriada para o caso deve incluir antibioticoterapia _____________.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
    "options": [
      "acne vulgar – oral",
      "acne vulgar – tópica",
      "hidradenite supurativa – oral",
      "hidradenite supurativa – tópica"
    ],
    "correctAnswer": 3,
    "explanation": "Lesões recorrentes papulopustulosas com comedões (inclusive duplos, \"em ponte\"), em áreas de dobra como a vulva e o períneo, sem abscessos, fístulas ou confluência: hidradenite supurativa, estágio leve (Hurley I). O tratamento inicial da forma leve é antibiótico tópico (clindamicina 1%), além de medidas gerais.",
    "commentary": "Acne vulgar (A e B): ocorre em face, dorso e tórax; comedões em região vulvoperineal sugerem hidradenite.\n\nHidradenite com antibiótico oral (C): tetraciclinas orais (contraindicadas na gestação) ou clindamicina + rifampicina são para formas moderadas ou refratárias.",
    "reference": "Consenso Brasileiro de Hidradenite Supurativa (SBD, 2019) / European S1 guideline for HS (2015)",
    "tags": [
      "hidradenite supurativa",
      "estadiamento de Hurley",
      "clindamicina tópica",
      "gestação"
    ],
    "tip": "Hidradenite Hurley I: clindamicina tópica."
  },
  {
    "id": "amrigs2026-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante a avaliação de uma paciente no puerpério imediato, observam-se sintomas abruptos de confusão mental, delírios, alucinações auditivas, agitação psicomotora e insônia grave iniciados dentro das primeiras 2 semanas após o parto. Qual é o principal transtorno psiquiátrico relacionado a esse quadro, conhecido como psicose puerperal?",
    "options": [
      "Esquizofrenia.",
      "Transtorno depressivo maior.",
      "Transtorno obsessivo-compulsivo.",
      "Transtorno bipolar."
    ],
    "correctAnswer": 3,
    "explanation": "A psicose puerperal (início abrupto nas primeiras semanas, com confusão, delírios, alucinações, agitação e insônia grave) está fortemente associada ao transtorno bipolar — muitas vezes é a primeira manifestação dele ou uma recaída. É emergência psiquiátrica, pelo risco de suicídio e infanticídio.",
    "commentary": "Esquizofrenia (A): pode recair no puerpério, mas não é a principal associação da psicose puerperal.\n\nTranstorno depressivo maior (B): a depressão pós-parto pode ter sintomas psicóticos, mas o vínculo principal é com o espectro bipolar.\n\nTOC (C): pode surgir no puerpério (pensamentos intrusivos de ferir o bebê, com crítica), sem psicose.",
    "reference": "ACOG Clinical Practice Guideline nº 5 (2023) / Kaplan & Sadock — Compêndio de Psiquiatria",
    "tags": [
      "psicose puerperal",
      "transtorno bipolar",
      "puerpério",
      "saúde mental perinatal"
    ],
    "tip": "Psicose puerperal: pense em transtorno bipolar e trate como emergência."
  },
  {
    "id": "amrigs2026-60",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 32 anos, procura atendimento relatando episódios mensais de intensa irritabilidade, labilidade emocional, fadiga, distúrbios do sono e sensação de descontrole, iniciando cerca de uma semana antes da menstruação e desaparecendo nos primeiros dias do fluxo menstrual. Refere prejuízo funcional significativo, especialmente no trabalho e nas relações interpessoais. A sintomatologia é cíclica e se repete na maioria dos ciclos menstruais há mais de um ano. O exame físico está dentro da normalidade, e os exames laboratoriais excluíram causas ginecológicas, hormonais e hematológicas. Com base no caso apresentado, em que fase do ciclo menstrual esse transtorno ocorre mais comumente?",
    "options": [
      "Folicular.",
      "Ovulatória.",
      "Menstrual.",
      "Lútea."
    ],
    "correctAnswer": 3,
    "explanation": "Sintomas afetivos e físicos com prejuízo funcional que começam cerca de uma semana antes da menstruação e somem nos primeiros dias do fluxo, na maioria dos ciclos: transtorno disfórico pré-menstrual. Ocorre na fase lútea (pós-ovulatória), ligado à sensibilidade às variações de estrogênio e progesterona e a alterações serotoninérgicas.",
    "commentary": "Folicular (A), ovulatória (B) e menstrual (C): por definição, os sintomas surgem na fase lútea e melhoram poucos dias após o início do fluxo, com intervalo livre na fase folicular.",
    "reference": "DSM-5-TR / ACOG Clinical Practice Guideline nº 7 — Premenstrual disorders (2023)",
    "tags": [
      "transtorno disfórico pré-menstrual",
      "síndrome pré-menstrual",
      "fase lútea",
      "ciclo menstrual"
    ],
    "tip": "TDPM: sintomas na fase lútea, melhora com o fluxo. Tratamento: ISRS."
  },
  {
    "id": "amrigs2026-61",
    "module": "Pediatria",
    "text": "Autonomia, privacidade, sigilo e confidencialidade são aspectos a serem considerados na consulta do adolescente. No entanto, a quebra de sigilo é necessária em algumas situações. Entre os casos apresentados a seguir, qual representa uma situação imperativa para a quebra de sigilo?",
    "options": [
      "Sexo masculino, 13 anos, conflito com identidade de gênero.",
      "Sexo masculino, 15 anos, uso escalonado de álcool.",
      "Sexo feminino, 13 anos, início de contracepção oral.",
      "Sexo feminino, 15 anos, início de atividade sexual."
    ],
    "correctAnswer": 1,
    "explanation": "O sigilo na consulta do adolescente pode ser quebrado quando há risco à vida ou à saúde dele ou de terceiros: uso escalonado (progressivo) de álcool e outras drogas, ideação suicida, gravidez, abuso sexual, recusa de tratamento grave. O uso escalonado de álcool aos 15 anos é situação de risco que exige envolver os responsáveis.",
    "commentary": "Conflito de identidade de gênero (A): é questão íntima, a ser acolhida com sigilo, sem risco que justifique a quebra.\n\nInício de contracepção oral aos 13 anos (C): o adolescente tem direito à orientação e prescrição de contraceptivos com sigilo (salvo suspeita de abuso).\n\nInício de atividade sexual aos 15 anos (D): por si só, não justifica quebra de sigilo.",
    "reference": "SBP — Consulta do adolescente: abordagem clínica, orientações éticas e legais / Código de Ética Médica, art. 74",
    "tags": [
      "adolescente",
      "sigilo médico",
      "ética médica",
      "uso de álcool"
    ],
    "tip": "Quebra de sigilo no adolescente: risco de vida (drogas, suicídio, abuso, gravidez)."
  },
  {
    "id": "amrigs2026-62",
    "module": "Pediatria",
    "text": "Menina, 4 anos, previamente hígida, em coma há 3 horas, chegou à unidade de emergência apresentando postura de decorticação. Sobre essa condição, analise as assertivas a seguir:\nI. Corresponde, nos membros superiores, à postura flexora, com adução e flexão de cotovelo, punhos e dedos; nos membros inferiores, à postura extensora.\nII. Indica lesão supratentorial.\nIII. Pode indicar herniação transtentorial.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "I correta: decorticação = flexão e adução dos membros superiores (cotovelos, punhos, dedos) com extensão dos inferiores.\nII correta: indica lesão acima do mesencéfalo (hemisférios, cápsula interna, tálamo) — supratentorial.\nIII correta: pode ser sinal de herniação transtentorial em evolução (antes da descerebração, que indica lesão mesencefálica/pontina).",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva correta.",
    "reference": "SBP — Coma na infância / Nelson Textbook of Pediatrics",
    "tags": [
      "coma",
      "postura de decorticação",
      "herniação cerebral",
      "neurologia pediátrica"
    ],
    "tip": "Decorticação: braços fletidos (lesão acima do mesencéfalo). Descerebração: braços estendidos (tronco)."
  },
  {
    "id": "amrigs2026-63",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) a termo, 38 semanas, vem à consulta de puericultura com 7 dias de vida. Está em aleitamento materno exclusivo, mas a mãe se queixa de dor ao amamentar e apresenta fissuras mamilares. Apresentou peso de nascimento de 3.140 g e peso de alta, após 48h de internação, de 3.020 g. O peso do RN na consulta é de 3.090 g. A fim de estimular e preservar o aleitamento materno, são sinais de boa pega e posição:\nI. Cabeça e tronco do bebê alinhados.\nII. Bochechas do bebê encovadas.\nIII. Lábio inferior do bebê evertido.\nIV. Bochechas do bebê tocando o seio.\nV. Aréola da mãe mais visível acima da boca do bebê.\n\nQuais estão corretos?",
    "options": [
      "Apenas I, II e IV.",
      "Apenas I, III e V.",
      "Apenas III, IV e V.",
      "I, II, III, IV e V."
    ],
    "correctAnswer": 1,
    "explanation": "Sinais de boa posição e pega (Ministério da Saúde/OMS): cabeça e tronco do bebê alinhados, corpo próximo ao da mãe, boca bem aberta, lábio inferior evertido, queixo tocando a mama, bochechas arredondadas (não encovadas) e mais aréola visível acima da boca do que abaixo. Corretos: I, III e V.",
    "commentary": "Apenas I, II e IV (A): bochechas encovadas indicam sucção inadequada; e o sinal descrito é o queixo, não as bochechas, tocando a mama.\n\nApenas III, IV e V (C): exclui o alinhamento (I) e inclui o IV.\n\nTodos (D): o II é sinal de pega inadequada.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Saúde da criança — aleitamento materno",
    "tags": [
      "aleitamento materno",
      "pega",
      "amamentação",
      "puericultura"
    ],
    "tip": "Boa pega: boca aberta, lábio inferior evertido, queixo na mama, bochechas cheias, mais aréola acima."
  },
  {
    "id": "amrigs2026-64",
    "module": "Pediatria",
    "text": "Menina, 5 anos, vem à consulta com as seguintes queixas, há mais de 6 meses: dor e dificuldade para evacuar, apresentando fezes de grande calibre que, com frequência, entopem o vaso sanitário. Ao exame físico, está em bom estado geral, é eutrófica. Palpa-se grande massa em fossa ilíaca esquerda e observa-se a roupa íntima com restos fecais. Considerando a principal hipótese diagnóstica para o caso, qual deve ser a conduta?",
    "options": [
      "Administração de probióticos.",
      "Investigação com ecografia.",
      "Início de laxantes osmóticos.",
      "Internação para enemas seriados."
    ],
    "correctAnswer": 2,
    "explanation": "Constipação funcional: dor e dificuldade para evacuar, fezes de grande calibre que entopem o vaso, massa fecal palpável e escape fecal (roupa suja) por impactação, em criança eutrófica e em bom estado. O tratamento começa pela desimpactação e manutenção com laxante osmótico — polietilenoglicol (PEG 3350/4000) é a primeira escolha — mais orientação alimentar e treino de toalete.",
    "commentary": "Probióticos (A): não há evidência suficiente para recomendá-los.\n\nEcografia (B): o diagnóstico é clínico (critérios de Roma IV); exames só com sinais de alarme.\n\nInternação para enemas seriados (D): a desimpactação por via oral com PEG em dose alta é tão eficaz e menos invasiva; internação é exceção.",
    "reference": "ESPGHAN/NASPGHAN — Constipação funcional na criança (2014) / SBP",
    "tags": [
      "constipação intestinal",
      "constipação funcional",
      "polietilenoglicol",
      "escape fecal"
    ],
    "tip": "Constipação funcional: PEG para desimpactar e manter."
  },
  {
    "id": "amrigs2026-65",
    "module": "Pediatria",
    "text": "Menino, 9 meses, apresentou episódio de infecção urinária febril, com necessidade de internação e antibioticoterapia endovenosa. Esse é o segundo episódio com necessidade de internação. Na primeira internação, aos 6 meses, realizou ecografia de vias urinárias, com resultado normal. Da atual internação, recebeu alta com orientação de manter profilaxia antibiótica diária, até obtenção do resultado dos exames solicitados. Mãe traz o paciente à consulta com resultado de uretrocistografia miccional indicando refluxo vesicoureteral bilateral grau II (RVU-II). Considerando o caso apresentado, qual deve ser a conduta?",
    "options": [
      "Modificar profilaxia antibiótica para frequência de 3 vezes na semana.",
      "Solicitar uretrocistografias miccionais periódicas para controle.",
      "Indicar correção cirúrgica do refluxo vesicoureteral.",
      "Suspender profilaxia antibiótica."
    ],
    "correctAnswer": 3,
    "explanation": "Refluxo vesicoureteral de baixo grau (I–II) tem alta taxa de resolução espontânea e baixo risco de lesão renal; as diretrizes (AAP 2011) não recomendam profilaxia antibiótica de rotina nesses casos — ela favorece resistência bacteriana. A conduta é suspender a profilaxia, orientar sobre sintomas e tratar precocemente novos episódios febris.",
    "commentary": "Profilaxia 3 vezes por semana (A): não há indicação de profilaxia, e o esquema não é usado.\n\nUretrocistografias periódicas (B): exame invasivo e irradiante; não se repete de rotina no RVU grau II.\n\nCorreção cirúrgica (C): indicada em graus altos (IV–V) com infecções de repetição apesar da profilaxia ou cicatrizes renais progressivas.",
    "reference": "AAP — Urinary Tract Infection: Clinical Practice Guideline (2011, reafirmado 2016) / SBP — ITU na criança",
    "tags": [
      "refluxo vesicoureteral",
      "infecção urinária",
      "profilaxia antibiótica",
      "nefrologia pediátrica"
    ],
    "tip": "RVU de baixo grau: tende a resolver sozinho; profilaxia não é rotina.",
    "alert": "Gabarito discutível: a banca seguiu a AAP, que não recomenda profilaxia de rotina no refluxo de baixo grau. O estudo RIVUR e a diretriz europeia (EAU/ESPU) apoiam a profilaxia em lactentes com ITU febril de repetição. Nenhuma das outras alternativas é adequada."
  },
  {
    "id": "amrigs2026-66",
    "module": "Pediatria",
    "text": "Menina, 6 meses, previamente hígida, há uma semana vem apresentando “espasmos”, descritos como contrações abruptas seguidas por contrações tônicas com duração de poucos segundos. Conforme a mãe, essas contrações envolvem o tronco e o pescoço, e os braços e as pernas fletem nesses momentos. Os episódios ocorrem predominantemente na fase N1 do sono (sonolência) ou ao despertar. O eletroencefalograma evidenciou hipsarritmia. Considerando as informações apresentadas, é correto afirmar que a paciente apresenta a síndrome",
    "options": [
      "dos espasmos epilépticos infantis (síndrome de West).",
      "de Ohtahara.",
      "epiléptica neonatal-infantil (familiar) autolimitada.",
      "de Dravet."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 6 meses com espasmos em salvas (flexão súbita de tronco, pescoço e membros), ao despertar ou na sonolência, e EEG com hipsarritmia: síndrome de espasmos epilépticos infantis (síndrome de West). Tratamento: ACTH ou prednisolona em dose alta, ou vigabatrina (primeira escolha na esclerose tuberosa).",
    "commentary": "Ohtahara (B): encefalopatia epiléptica nos primeiros 3 meses, com espasmos tônicos e EEG com surto-supressão.\n\nEpilepsia neonatal-infantil autolimitada (C): crises focais em lactentes com desenvolvimento normal e EEG sem hipsarritmia.\n\nDravet (D): crises febris prolongadas e hemiclônicas no primeiro ano, mutação SCN1A.",
    "reference": "ILAE — Classificação das síndromes epilépticas de início neonatal e na infância (2022)",
    "tags": [
      "síndrome de West",
      "espasmos epilépticos infantis",
      "hipsarritmia",
      "epilepsia na infância"
    ],
    "tip": "West: espasmos em salvas + hipsarritmia + parada do desenvolvimento."
  },
  {
    "id": "amrigs2026-67",
    "module": "Pediatria",
    "text": "São fármacos de primeira linha indicados para crianças com crises de ausência típicas:",
    "options": [
      "Etossuximida, valproato e lamotrigina.",
      "Etossuximida, valproato e oxcarbazepina.",
      "Etossuximida, oxcarbazepina e lamotrigina.",
      "Valproato, lamotrigina e oxcarbazepina."
    ],
    "correctAnswer": 0,
    "explanation": "Para a epilepsia ausência da infância, os fármacos de primeira linha são etossuximida (preferida, com melhor perfil cognitivo), valproato e lamotrigina.",
    "commentary": "Alternativas com oxcarbazepina (B, C, D): oxcarbazepina e carbamazepina (bloqueadores de canal de sódio), além de fenitoína, gabapentina e vigabatrina, podem AGRAVAR as crises de ausência e as mioclonias.",
    "reference": "ILAE / Glauser TA et al. NEJM 2010 (Childhood Absence Epilepsy trial)",
    "tags": [
      "epilepsia ausência",
      "etossuximida",
      "valproato",
      "anticonvulsivantes"
    ],
    "tip": "Ausência: etossuximida. Evite carbamazepina e oxcarbazepina."
  },
  {
    "id": "amrigs2026-68",
    "module": "Pediatria",
    "text": "Menino, 7 anos, previamente hígida, apresentou, durante a madrugada, episódio semelhante ao que o havia acometido por cerca de 2 minutos, há 7 meses, também de madrugada. Conforme relato da mãe, de repente ouviu um barulho vindo do quarto do filho e o encontrou sentado na cama, babando e com a fala alterada. Poucos minutos depois, o menino relatou à mãe que, durante essa situação, sentira dormência na língua, lábios, gengiva e bochecha. À tarde, após o episódio, o médico da unidade de emergência constatou exame físico normal, e o eletroencefalograma mostrou padrão interictal, caracterizado por ondas agudas bifásicas, com alta amplitude, seguidas de ondas lentas com projeção nas regiões centro-temporais, que se exacerbam durante o sono. De acordo com as informações apresentadas, o diagnóstico mais provável é:",
    "options": [
      "Terror noturno.",
      "Epilepsia rolândica.",
      "Síndrome de Landau-Kleffner.",
      "Episódio isquêmico transitório."
    ],
    "correctAnswer": 1,
    "explanation": "Criança em idade escolar com crises noturnas focais orofaciais (parestesia de língua, lábios e bochecha, sialorreia, disartria), consciência preservada, exame normal e EEG com pontas centrotemporais ativadas pelo sono: epilepsia autolimitada com pontas centrotemporais (epilepsia rolândica). Tem bom prognóstico, com remissão na adolescência; muitas vezes nem exige tratamento.",
    "commentary": "Terror noturno (A): parassonia com choro e agitação, sem parestesias orofaciais nem alteração eletroencefalográfica.\n\nLandau-Kleffner (C): afasia adquirida com regressão de linguagem e EEG com atividade contínua no sono.\n\nAtaque isquêmico transitório (D): raríssimo nessa idade; não explica o padrão do EEG.",
    "reference": "ILAE — Classificação das síndromes epilépticas (2022) / SBP",
    "tags": [
      "epilepsia rolândica",
      "pontas centrotemporais",
      "epilepsia na infância"
    ],
    "tip": "Crise noturna com formigamento na boca e baba + pontas centrotemporais = rolândica."
  },
  {
    "id": "amrigs2026-69",
    "module": "Pediatria",
    "text": "Criança, 8 meses, chega à unidade de emergência febril e com rinorreia abundante há três dias. Na consulta, está taquipneica e, ao exame inicial, chama a atenção a hipoxemia de 89% em ar ambiente e a sibilância difusa na ausculta pulmonar, sem sinais de hipoperfusão tecidual. O manejo inicial dessa criança deve considerar:",
    "options": [
      "Oxigenação com cateter nasal de baixo fluxo e fração inspirada de oxigênio de 100% inicialmente.",
      "Antibioticoterapia empírica com ampicilina intravenosa.",
      "Salbutamol inalado associado a corticosteroide sistêmico.",
      "Lavagem nasal com cloreto de sódio a 0,9% e oxigenação adequada."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 8 meses com coriza, febre baixa, taquipneia, sibilância difusa e hipoxemia: bronquiolite viral aguda. O manejo é de suporte: desobstrução nasal com soro fisiológico, oxigênio se SatO₂ <90–92%, hidratação e alimentação adequadas.",
    "commentary": "Cateter nasal de baixo fluxo com FiO₂ 100% (A): o cateter de baixo fluxo não fornece FiO₂ de 100%; titula-se o O₂ pela saturação.\n\nAmpicilina IV (B): a bronquiolite é viral; antibiótico não está indicado sem infecção bacteriana.\n\nSalbutamol e corticoide (C): sem benefício comprovado na bronquiolite; não recomendados de rotina.",
    "reference": "SBP — Diretrizes para o manejo da infecção causada pelo vírus sincicial respiratório (2017) / AAP — Bronchiolitis guideline (2014)",
    "tags": [
      "bronquiolite viral aguda",
      "vírus sincicial respiratório",
      "lactente",
      "oxigenoterapia"
    ],
    "tip": "Bronquiolite: lavagem nasal, O₂ se precisar e hidratação. Sem broncodilatador nem corticoide."
  },
  {
    "id": "amrigs2026-70",
    "module": "Pediatria",
    "text": "Considerando um caso de desidratação em escolar, de 16 kg, associada à diarreia aguda febril tipo disenteria, ainda sem sinais de taquicardia, sem rebaixamento de sensório, nem prolongamento do tempo de enchimento capilar, a correção deve ser feita no(a) ____________ e com o insumo denominado ____________.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
    "options": [
      "sala de emergência – soro reidratante oral",
      "domicílio – soro reidratante oral",
      "unidade de terapia intensiva – ringer lactato intravenoso",
      "sala de emergência – soro fisiológico intravenoso"
    ],
    "correctAnswer": 0,
    "explanation": "A criança tem desidratação sem sinais de gravidade (sem taquicardia, sem alteração de consciência, enchimento capilar normal): plano B do Ministério da Saúde — terapia de reidratação oral com sais de reidratação oral, no serviço de saúde, sob observação, até a reidratação. A disenteria indica antibiótico, mas não muda a via de hidratação. A banca entendeu \"sala de emergência\" como o serviço de saúde onde o plano B é realizado.",
    "commentary": "Domicílio com SRO (B): é o plano A, para crianças sem desidratação.\n\nUTI com ringer lactato (C) e sala de emergência com soro fisiológico IV (D): a hidratação venosa (plano C) é para desidratação grave ou falha da via oral.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (cartaz, 2023) / SBP",
    "tags": [
      "desidratação",
      "terapia de reidratação oral",
      "diarreia aguda",
      "disenteria"
    ],
    "tip": "Desidratação sem gravidade: plano B, SRO no serviço de saúde."
  },
  {
    "id": "amrigs2026-71",
    "module": "Pediatria",
    "text": "Adolescente, 13 anos, ingeriu uma cartela de 20 comprimidos de diazepam. Chega à emergência desacordado, eupneico, hipotenso e com escala de coma de Glasgow de 6. A conduta mais efetiva nesse momento, no que diz respeito à resolução do coma, é:",
    "options": [
      "Proceder à intubação orotraqueal.",
      "Administrar solução salina hipertônica intravenosa.",
      "Administrar flumazenil intravenoso.",
      "Administrar naloxone intravenoso."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta é sobre a medida mais efetiva para RESOLVER o coma por benzodiazepínico: o flumazenil, antagonista competitivo do receptor benzodiazepínico, reverte a sedação.",
    "commentary": "Intubação (A): protege a via aérea, mas não resolve o coma; o paciente está eupneico.\n\nSalina hipertônica (B): é para hipertensão intracraniana ou hiponatremia grave.\n\nNaloxona (D): antagonista opioide, sem efeito sobre benzodiazepínicos.",
    "reference": "SBP — Intoxicações agudas na infância / Goldfrank's Toxicologic Emergencies",
    "tags": [
      "intoxicação por benzodiazepínicos",
      "flumazenil",
      "antídotos",
      "toxicologia"
    ],
    "tip": "Benzodiazepínico: flumazenil. Opioide: naloxona.",
    "alert": "Gabarito discutível: o flumazenil reverte o coma por benzodiazepínico, mas pode precipitar convulsões (uso crônico, coingestão de tricíclicos) e, na prática, muitos priorizam suporte e via aérea (Glasgow 6). A banca manteve C porque a pergunta é sobre a resolução do coma."
  },
  {
    "id": "amrigs2026-72",
    "module": "Pediatria",
    "text": "Na crise adrenal do lactente em choque séptico, há evidência de hiponatremia e hiperpotassemia. Em relação às complicações graves, a parada cardiorrespiratória associada nesse contexto tem como causa mais plausível:",
    "options": [
      "A desidratação neuronal da hiponatremia, gerando morte neuronal.",
      "O edema cerebral da hiperpotassemia, gerando herniação uncal.",
      "A fibrilação ventricular da hiperpotassemia, gerando ausência de pulso.",
      "A hipoxemia celular pelo deslocamento da curva de dissociação da hemoglobina para a direita, pela hiponatremia."
    ],
    "correctAnswer": 2,
    "explanation": "Na insuficiência adrenal aguda, a falta de mineralocorticoide causa hiponatremia e hipercalemia. A hipercalemia grave é a causa mais plausível de parada cardiorrespiratória: altera a repolarização e pode levar a fibrilação ventricular ou assistolia.",
    "commentary": "Desidratação neuronal pela hiponatremia (A): a hiponatremia causa edema celular (a água entra no neurônio), não desidratação.\n\nEdema cerebral por hipercalemia (B): a hipercalemia age no coração, não causa edema cerebral.\n\nHipoxemia por desvio da curva da hemoglobina pela hiponatremia (D): o sódio não desloca a curva de dissociação da hemoglobina.",
    "reference": "SBP — Insuficiência adrenal aguda / Nelson Textbook of Pediatrics",
    "tags": [
      "insuficiência adrenal aguda",
      "hipercalemia",
      "crise adrenal",
      "choque séptico"
    ],
    "tip": "Crise adrenal: hipoNa + hiperK. O que mata rápido é a arritmia da hipercalemia."
  },
  {
    "id": "amrigs2026-73",
    "module": "Pediatria",
    "text": "A cetoacidose diabética na criança predispõe ao risco aumentado de morte por edema cerebral, estando frequentemente associado ao(à):",
    "options": [
      "Insulinização contínua, em vez da intermitente.",
      "Expansão volêmica cautelosa.",
      "Utilização de potássio intravenoso superior à sua necessidade diária.",
      "Rebaixamento de sensório nas primeiras 12 horas do manejo."
    ],
    "correctAnswer": 3,
    "explanation": "O edema cerebral é a principal causa de morte na cetoacidose diabética pediátrica e costuma surgir nas primeiras 12 horas (4–12 h) do tratamento, manifestando-se por cefaleia, bradicardia, hipertensão e rebaixamento ou piora do nível de consciência. A banca relacionou o edema a esse rebaixamento precoce durante o manejo.",
    "commentary": "Insulina contínua em vez de intermitente (A): a infusão contínua de insulina regular (0,05–0,1 UI/kg/h) é o padrão; não é fator de risco.\n\nExpansão cautelosa (B): a reposição cautelosa é recomendada justamente para reduzir risco.\n\nPotássio acima da necessidade (C): o potássio é reposto conforme os níveis; não se associa a edema cerebral.",
    "reference": "ISPAD Clinical Practice Consensus Guidelines 2022 — Diabetic ketoacidosis / SBD",
    "tags": [
      "cetoacidose diabética",
      "edema cerebral",
      "diabetes tipo 1",
      "emergência pediátrica"
    ],
    "tip": "CAD na criança: piora neurológica nas primeiras horas = edema cerebral → manitol ou salina 3%.",
    "alert": "Gabarito discutível: o rebaixamento de consciência nas primeiras horas é manifestação do edema cerebral, não sua causa; os fatores de risco clássicos (bicarbonato, PaCO₂ baixa, ureia alta) não estão entre as opções. A banca manteve D."
  },
  {
    "id": "amrigs2026-74",
    "module": "Pediatria",
    "text": "Na triagem inicial do paciente politraumatizado pediátrico, a lesão de menor mortalidade, considerando as apresentadas abaixo, é:",
    "options": [
      "Trauma cervical com ruptura de laringe.",
      "Pneumotórax aberto.",
      "Concussão cerebral, levando à crise convulsiva.",
      "Hipotensão por ruptura gástrica."
    ],
    "correctAnswer": 2,
    "explanation": "Na triagem do politraumatizado (ABCDE), as lesões que ameaçam a vida de imediato são as de via aérea (ruptura de laringe), respiração (pneumotórax aberto) e circulação (choque hemorrágico por ruptura de víscera). A concussão cerebral com crise convulsiva é, entre as opções, a de menor mortalidade.",
    "commentary": "Ruptura de laringe (A): ameaça imediata à via aérea, de alta letalidade.\n\nPneumotórax aberto (B): compromete a ventilação, risco imediato de morte.\n\nHipotensão por ruptura gástrica (D): choque com peritonite, alta mortalidade sem cirurgia.",
    "reference": "ATLS 10ª ed. — Trauma pediátrico",
    "tags": [
      "trauma pediátrico",
      "politrauma",
      "ABCDE",
      "concussão"
    ],
    "tip": "ABCDE: o que mata primeiro (via aérea, respiração, circulação) é tratado primeiro."
  },
  {
    "id": "amrigs2026-75",
    "module": "Pediatria",
    "text": "Escolar, 6 anos, chega ao plantão febril, taquipneico, prostrado e com estertoração difusa bibasal. O resultado do raio X de tórax é apresentado na figura abaixo. Ultrassonografia point of care à beira do leito evidencia volumoso derrame pleural direito, com presença de septações.\n\nDe acordo com as informações apresentadas, no manejo inicial desse paciente, além da antibioticoterapia, deve-se considerar:",
    "options": [
      "Punção pleural diagnóstica e de alívio, apenas.",
      "Toracocentese para utilização de fibrinolítico intrapleural.",
      "Videotoracoscopia assistida.",
      "Toracocentese definitiva, mas apenas se a punção confirmar empiema pleural."
    ],
    "correctAnswer": 2,
    "explanation": "A radiografia mostra opacidade homogênea na base direita, com derrame pleural volumoso; o ultrassom mostra derrame septado — empiema em fase fibrinopurulenta. Além do antibiótico, o derrame septado precisa de drenagem efetiva: videotoracoscopia (desbridamento e drenagem) ou dreno torácico com fibrinolítico intrapleural, opções equivalentes nas diretrizes. Das alternativas, a videotoracoscopia é a correta.",
    "commentary": "Punção diagnóstica e de alívio apenas (A): não resolve derrame septado volumoso.\n\nToracocentese para fibrinolítico (B): o fibrinolítico é dado por dreno torácico (tubo), não por toracocentese.\n\nToracocentese só se confirmar empiema (D): as septações no ultrassom já indicam derrame complicado; atrasar a drenagem piora o desfecho.",
    "reference": "BTS Guidelines for the management of pleural infection in children (2005) / SBP — Derrame pleural parapneumônico",
    "tags": [
      "derrame pleural parapneumônico",
      "empiema pleural",
      "videotoracoscopia",
      "pneumonia"
    ],
    "tip": "Derrame septado na criança: drenagem com fibrinolítico ou videotoracoscopia.",
    "image": "/images/amrigs2026-75.webp"
  },
  {
    "id": "amrigs2026-76",
    "module": "Pediatria",
    "text": "Em uma criança vítima de acidente por submersão, a lesão que mais agressivamente deve ser tratada, por estar diretamente relacionada à morbimortalidade nesse tipo de acidente, é a:",
    "options": [
      "Hipernatremia por afogamento em água salgada.",
      "Hipoxemia sistêmica.",
      "Infecção por afogamento em águas contaminadas.",
      "Obstrução de via aérea pela aspiração de água."
    ],
    "correctAnswer": 1,
    "explanation": "No afogamento, a lesão central é a hipóxia: a aspiração de água lesa o surfactante e a membrana alveolocapilar, causando shunt e hipoxemia, que levam à parada cardíaca e à lesão cerebral. A correção agressiva da hipoxemia (ventilação, oxigênio, PEEP) é o que mais muda a morbimortalidade.",
    "commentary": "Hipernatremia em água salgada (A): a quantidade aspirada raramente causa distúrbio eletrolítico relevante.\n\nInfecção (C): complicação possível e tardia, não a prioridade.\n\nObstrução da via aérea por água (D): a água aspirada não obstrui a via aérea; manobras para \"retirar água\" (como Heimlich) não são indicadas.",
    "reference": "Sociedade Brasileira de Salvamento Aquático — Afogamento / AHA — Drowning (2019)",
    "tags": [
      "afogamento",
      "hipoxemia",
      "emergência pediátrica"
    ],
    "tip": "Afogamento: o problema é a hipóxia — ventile e oxigene."
  },
  {
    "id": "amrigs2026-77",
    "module": "Pediatria",
    "text": "Gestante de 39 semanas chega em franco trabalho de parto ao centro obstétrico. Em sua carteira de pré-natal, consta resultado positivo para triagem de HTLV (teste ELISA) no segundo trimestre gestacional. As demais sorologias eram não reagentes.\n\nConsiderando o caso apresentado, qual é a medida mais eficaz para prevenir a infecção do neonato pelo HTLV?",
    "options": [
      "Indicar parto por cesariana.",
      "Orientar o clampeamento imediato do cordão umbilical após o nascimento.",
      "Prescrever zidovudina solução oral nos primeiros 28 dias do neonato.",
      "Contraindicar o aleitamento materno."
    ],
    "correctAnswer": 3,
    "explanation": "A principal via de transmissão vertical do HTLV-1 é o aleitamento materno (risco proporcional ao tempo de amamentação). A medida mais eficaz é contraindicar a amamentação e oferecer fórmula infantil, com inibição da lactação.",
    "commentary": "Cesárea (A): não há evidência de que reduza a transmissão do HTLV.\n\nClampeamento imediato do cordão (B): não previne a transmissão.\n\nZidovudina no neonato (C): é profilaxia do HIV, sem papel no HTLV.\n\nObservação: o ELISA de triagem deve ser confirmado (Western blot ou PCR); com o teste confirmado, a recomendação é suspender a amamentação.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022) e nota técnica sobre HTLV",
    "tags": [
      "HTLV",
      "transmissão vertical",
      "aleitamento materno",
      "recém-nascido"
    ],
    "tip": "HTLV na gestante: não amamentar."
  },
  {
    "id": "amrigs2026-78",
    "module": "Pediatria",
    "text": "RN, 8 dias de vida, internado por sífilis congênita, vinha recebendo tratamento com penicilina cristalina desde o primeiro dia. Os exames laboratoriais revelaram VDRL sérico de 1:4, VDRL no líquor não reagente, líquor com proteínas totais de 69 mg/dl, 5 leucócitos/mm³ e glicose de 60 mg/dl. O raio X de ossos longos estava normal. A enfermagem informou que não estava mais conseguindo acesso vascular intravenoso periférico no bebê.\n\nConsiderando as diretrizes brasileiras para o manejo dessa condição, qual é a conduta mais adequada para a finalização do tratamento?",
    "options": [
      "Completar o tratamento com penicilina benzatina em dose única.",
      "Completar o tratamento com penicilina procaína intramuscular até o 10º dia de tratamento.",
      "Completar o tratamento com penicilina procaína intramuscular até o 14º dia de tratamento.",
      "Solicitar acesso venoso central e completar o tratamento com penicilina cristalina até o 10º dia de tratamento."
    ],
    "correctAnswer": 1,
    "explanation": "RN com sífilis congênita sem neurossífilis (VDRL no líquor não reagente e líquor com celularidade e proteínas normais para o período neonatal) e radiografia normal: o tratamento é de 10 dias com penicilina cristalina IV ou penicilina procaína IM (50.000 UI/kg/dia). Sem acesso venoso, completa-se com procaína IM até o 10º dia.",
    "commentary": "Benzatina dose única (A): só para RN assintomático, com exames normais e VDRL não reagente ou menor que o materno em situações específicas; este RN está em tratamento de 10 dias.\n\nProcaína até o 14º dia (C): o tempo é de 10 dias.\n\nAcesso central (D): procedimento invasivo desnecessário, já que a procaína IM é equivalente na ausência de neurossífilis.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis congênita",
      "penicilina procaína",
      "neurossífilis",
      "recém-nascido"
    ],
    "tip": "Sífilis congênita sem neurossífilis: cristalina IV ou procaína IM por 10 dias."
  },
  {
    "id": "amrigs2026-79",
    "module": "Pediatria",
    "text": "Em relação ao tratamento farmacológico com psicoestimulantes no Transtorno de Déficit de Atenção e Hiperatividade (TDAH), assinale a alternativa correta.",
    "options": [
      "A interrupção do uso da medicação durante os fins de semana é recomendada para todos os pacientes com TDAH, a fim de minimizar efeitos adversos a longo prazo.",
      "O tratamento com estimulantes aumenta o risco de desenvolvimento de transtornos por uso de substâncias.",
      "Para crianças, a melhora dos sintomas com psicoestimulantes tende a ser restrita ao ambiente escolar, não havendo benefício significativo em outros contextos da vida da criança.",
      "Além da redução dos sintomas de desatenção e hiperatividade, os psicoestimulantes repercutem positivamente sobre irritabilidade, autoestima, relações interpessoais e funcionamento cognitivo."
    ],
    "correctAnswer": 3,
    "explanation": "Os psicoestimulantes (metilfenidato, lisdexanfetamina) reduzem desatenção, hiperatividade e impulsividade e têm efeitos positivos em irritabilidade, autoestima, relações sociais, desempenho escolar e funcionamento cognitivo.",
    "commentary": "Interromper nos fins de semana para todos (A): a pausa pode ser individualizada, mas não é recomendação universal; muitos pacientes se beneficiam do uso contínuo.\n\nAumento do risco de transtorno por uso de substâncias (B): os estudos não mostram aumento — o tratamento pode até reduzir esse risco.\n\nBenefício restrito à escola (C): a melhora se estende à família, às relações sociais e a outros contextos.",
    "reference": "ABDA / NICE NG87 — Attention deficit hyperactivity disorder (2018) / AAP (2019)",
    "tags": [
      "TDAH",
      "psicoestimulantes",
      "metilfenidato",
      "psiquiatria infantil"
    ],
    "tip": "Estimulante no TDAH não aumenta (e pode reduzir) risco de abuso de substâncias."
  },
  {
    "id": "amrigs2026-80",
    "module": "Pediatria",
    "text": "Em relação ao transtorno de oposição desafiante, analise as assertivas a seguir:\nI. Caracteriza-se por padrão de humor raivoso e/ou irritável, de comportamento questionador e/ou desafiante ou índole vingativa, com duração de pelo menos 6 meses.\nII. Considerando que, em geral, os sintomas do transtorno são mais evidentes nas interações com adultos ou pares que o indivíduo conhece bem, eles podem não ficar tão evidentes no exame clínico.\nIII. A presença de sintomas do transtorno em múltiplos contextos é um indicativo de gravidade.\nIV. Os sintomas de humor raivoso e/ou irritável respondem pela maior parte do risco para transtorno da conduta.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas III e IV.",
      "Apenas I, II e III.",
      "I, II, III e IV."
    ],
    "correctAnswer": 2,
    "explanation": "I correta: definição do DSM-5 — humor raivoso/irritável, comportamento questionador/desafiante ou índole vingativa por pelo menos 6 meses.\nII correta: os sintomas aparecem mais com pessoas próximas e podem não surgir na consulta.\nIII correta: sintomas em vários ambientes indicam maior gravidade (leve = 1 ambiente; moderado = 2; grave = 3 ou mais).\nIV incorreta: os sintomas de humor raivoso/irritável predizem sobretudo transtornos emocionais (ansiedade, depressão); o risco de transtorno da conduta está mais ligado aos sintomas de comportamento desafiante e vingativo.",
    "commentary": "Apenas I e II (A): deixa de fora a III.\n\nApenas III e IV (B): a IV está errada e exclui I e II.\n\nI, II, III e IV (D): a IV está errada.",
    "reference": "DSM-5-TR — Transtorno de oposição desafiante",
    "tags": [
      "transtorno de oposição desafiante",
      "transtorno da conduta",
      "psiquiatria infantil"
    ],
    "tip": "TOD: irritabilidade prediz ansiedade/depressão; desafio/vingança predizem transtorno da conduta."
  },
  {
    "id": "amrigs2026-81",
    "module": "Saúde Coletiva",
    "text": "Sobre a organização da Atenção Primária à Saúde (APS), assinale a alternativa correta.",
    "options": [
      "A consolidação da APS se dá pela efetiva coordenação do cuidado, que demanda articulação longitudinal entre a atenção primária e os demais pontos da rede assistencial.",
      "A inserção de equipes de Estratégia Saúde da Família (ESF) na APS visa restringir o acesso à atenção especializada como forma de reduzir os custos hospitalares e exames de alta complexidade.",
      "A abordagem centrada na pessoa na APS prioriza a intervenção biomédica, independentemente da compreensão das condições socioambientais dos pacientes.",
      "A gestão da APS deve ser organizada de forma verticalizada e centralizada para assegurar a padronização dos serviços nas unidades locais e melhores coeficientes de morbimortalidade."
    ],
    "correctAnswer": 0,
    "explanation": "A coordenação do cuidado — articular de forma contínua a atenção primária com os demais pontos da rede — é atributo essencial e condição para que a APS cumpra seu papel de ordenadora da rede de atenção.",
    "commentary": "ESF para restringir acesso à atenção especializada (B): o objetivo é ampliar acesso e resolutividade; a APS regula o acesso, não o restringe.\n\nCentrada na pessoa com prioridade biomédica (C): o método centrado na pessoa considera o contexto social, familiar e ambiental.\n\nGestão verticalizada e centralizada (D): a APS é descentralizada e organizada a partir do território.",
    "reference": "PNAB 2017 (Portaria nº 2.436/2017) / Starfield B. Atenção primária (2002)",
    "tags": [
      "atenção primária",
      "coordenação do cuidado",
      "redes de atenção à saúde"
    ],
    "tip": "APS: porta de entrada, longitudinal, integral e coordenadora do cuidado."
  },
  {
    "id": "amrigs2026-82",
    "module": "Saúde Coletiva",
    "text": "Maria Joana, 62 anos, diagnosticada com enfisema pulmonar, é acompanhada há 5 anos pela mesma equipe da Estratégia Saúde da Família. Refere sentir-se segura com os profissionais que a atendem, os quais conhecem seu histórico clínico e familiar. Quando necessário, recebe visitas domiciliares e tem seu cuidado articulado com a rede especializada, sem perder o vínculo com a equipe da unidade de saúde. Além disso, participa de grupos educativos sobre cessação do tabagismo e manejo da doença. Com base nas características e atributos da APS, a situação descrita exemplifica, principalmente:",
    "options": [
      "Integralidade, regionalização e territorialização.",
      "Universalidade, longitudinalidade e equidade.",
      "Equidade, acesso e universalidade.",
      "Longitudinalidade, integralidade e coordenação."
    ],
    "correctAnswer": 3,
    "explanation": "O caso exemplifica três atributos da APS: longitudinalidade (acompanhamento pela mesma equipe há 5 anos, com vínculo e conhecimento da história), integralidade (visitas domiciliares, grupos educativos de cessação do tabagismo, prevenção e tratamento) e coordenação (cuidado articulado com a rede especializada sem perder o vínculo com a unidade).",
    "commentary": "Integralidade, regionalização e territorialização (A): regionalização é diretriz organizativa do SUS e não aparece no caso.\n\nUniversalidade, longitudinalidade e equidade (B): universalidade e equidade são princípios doutrinários do SUS, não o que o caso destaca.\n\nEquidade, acesso e universalidade (C): não descreve o vínculo e a articulação com a rede.",
    "reference": "Starfield B. Atenção primária (2002) / PNAB 2017",
    "tags": [
      "atenção primária",
      "longitudinalidade",
      "integralidade",
      "coordenação do cuidado"
    ],
    "tip": "Mesma equipe ao longo do tempo = longitudinalidade; cuidado articulado com a rede = coordenação."
  },
  {
    "id": "amrigs2026-83",
    "module": "Saúde Coletiva",
    "text": "No contexto da atenção domiciliar vinculada à APS e considerando a normatização vigente no Brasil, analise as assertivas a seguir:\nI. O cuidado domiciliar pode ser indicado para indivíduos com limitações temporárias ou permanentes na mobilidade, visando promover reabilitação e manutenção da autonomia funcional no ambiente domiciliar.\nII. A internação domiciliar destina-se a pacientes com quadro clínico instável, que necessitem de suporte ventilatório avançado ou monitorização intensiva, substituindo o ambiente hospitalar.\nIII. O acompanhamento domiciliar é direcionado a pacientes que requerem intervenções periódicas ou paliativas, incluindo aqueles em tratamento crônico avançado ou com limitações para deslocamento até as unidades de saúde.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II, III e IV."
    ],
    "correctAnswer": 1,
    "explanation": "I correta: a atenção domiciliar atende pessoas com limitação temporária ou permanente de mobilidade, com foco em reabilitação e autonomia.\nII incorreta: a atenção domiciliar é para pacientes clinicamente estáveis; quem precisa de ventilação avançada contínua ou monitorização intensiva deve estar no hospital.\nIII correta: o acompanhamento domiciliar inclui pacientes que precisam de intervenções periódicas ou cuidados paliativos e com dificuldade de ir à unidade.",
    "commentary": "Apenas I e II (A): a II está errada.\n\nApenas II e III (C): a II está errada.\n\n\"I, II, III e IV\" (D): a II está errada (e não existe assertiva IV).",
    "reference": "Ministério da Saúde — Portaria de Consolidação nº 5/2017 (atenção domiciliar, antiga Portaria nº 825/2016) / Caderno de Atenção Domiciliar",
    "tags": [
      "atenção domiciliar",
      "atenção primária",
      "cuidados paliativos"
    ],
    "tip": "Atenção domiciliar: paciente estável; instabilidade e ventilação invasiva = hospital.",
    "alert": "Atenção à redação: a alternativa D cita \"I, II, III e IV\", mas a questão tem só três assertivas. O gabarito (B) não é afetado."
  },
  {
    "id": "amrigs2026-84",
    "module": "Saúde Coletiva",
    "text": "Em relação aos Conselhos de Saúde, analise as assertivas a seguir:\nI. São instâncias deliberativas e permanentes do SUS em cada esfera de governo.\nII. Sua composição deve garantir paridade entre representantes do governo e da sociedade civil.\nIII. Têm como uma de suas atribuições aprovar o Plano Municipal de Saúde.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II, III e IV."
    ],
    "correctAnswer": 3,
    "explanation": "As três assertivas estão corretas (a alternativa D traz \"I, II, III e IV\", mas só há três assertivas — a banca a considerou como \"todas corretas\").\n\nI: os conselhos de saúde são instâncias colegiadas, deliberativas e permanentes em cada esfera de governo (Lei 8.142/90).\nII: a composição é paritária — 50% de usuários e 50% divididos entre trabalhadores de saúde, governo e prestadores.\nIII: entre suas atribuições está aprovar o plano de saúde da respectiva esfera (Plano Municipal, no município).",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva correta.",
    "reference": "Lei nº 8.142/1990 / Resolução CNS nº 453/2012",
    "tags": [
      "conselhos de saúde",
      "controle social",
      "participação social",
      "SUS"
    ],
    "tip": "Conselho de saúde: permanente, deliberativo e paritário (50% usuários).",
    "alert": "Atenção à redação: a alternativa D cita \"I, II, III e IV\", mas a questão tem só três assertivas — a banca a considerou como \"todas corretas\"."
  },
  {
    "id": "amrigs2026-85",
    "module": "Saúde Coletiva",
    "text": "Marta, 43 anos, hipertensa e diabética, realizava acompanhamento periódico em uma Unidade Básica de Saúde (UBS) vinculada à ESF. Após mudança de endereço dentro do mesmo município, passou a procurar atendimento em outra UBS, na qual teve dificuldade para dar continuidade ao seu cuidado, uma vez que não houve acesso a seu histórico clínico nem reconhecimento do vínculo anterior. Nos meses seguintes, ao procurar atendimento em uma UPA por quadro de descompensação clínica, exames complementares foram repetidos, e o plano terapêutico foi reiniciado a partir de informações parciais. A paciente expressou frustração com a descontinuidade, dizendo ter a sensação de que “os serviços não se comunicam”. Entre os princípios do SUS, a situação descrita reflete, sobretudo, uma violação do princípio da:",
    "options": [
      "Equidade – ao não priorizar o cuidado da paciente conforme suas vulnerabilidades clínicas.",
      "Universalidade – ao condicionar o acesso da paciente ao vínculo territorial anterior.",
      "Integralidade – ao fragmentar a atenção e dificultar o fluxo contínuo e articulado de cuidado.",
      "Regionalização – ao não garantir a referência assistencial entre os pontos de atenção do território."
    ],
    "correctAnswer": 2,
    "explanation": "A paciente teve o cuidado fragmentado: sem continuidade de informação entre unidades, exames repetidos, plano reiniciado. A integralidade, como princípio do SUS, inclui a articulação entre ações e serviços de todos os níveis, garantindo um fluxo contínuo de cuidado — é o que foi violado.",
    "commentary": "Equidade (A): o problema não foi falta de prioridade conforme vulnerabilidade, mas de continuidade.\n\nUniversalidade (B): a paciente teve acesso aos serviços.\n\nRegionalização (D): diretriz organizativa da rede; a questão central é a fragmentação do cuidado ao indivíduo.",
    "reference": "Lei nº 8.080/1990 / Mendes EV. As redes de atenção à saúde (2011)",
    "tags": [
      "SUS",
      "integralidade",
      "princípios do SUS",
      "coordenação do cuidado"
    ],
    "tip": "Cuidado fragmentado, sem comunicação entre serviços = falha de integralidade/coordenação."
  },
  {
    "id": "amrigs2026-86",
    "module": "Saúde Coletiva",
    "text": "A consulta embasada no Método Clínico Centrado na Pessoa (MCCP) apresenta alguns componentes. Nesse sentido, analise os componentes apresentados abaixo:\n1. Fortalecer a relação médico-paciente.\n2. Conhecer o contexto do paciente.\n3. Construir um entendimento acerca do problema e do que precisa ser feito.\n4. Focalizar os aspectos objetivos da doença, como sinais e sintomas.\n\nO resultado da somatória dos números correspondentes aos componentes corretos é:",
    "options": [
      "05.",
      "06.",
      "08.",
      "10."
    ],
    "correctAnswer": 1,
    "explanation": "O Método Clínico Centrado na Pessoa (Stewart et al.) tem quatro componentes: explorar a saúde, a doença e a experiência da doença; entender a pessoa como um todo (inclusive seu contexto); elaborar um plano conjunto de manejo (entendimento comum do problema e do que fazer); e intensificar a relação médico-pessoa.\n\nCorretos: 1 (fortalecer a relação), 2 (conhecer o contexto) e 3 (construir entendimento comum). O 4 está errado: o método não foca apenas nos aspectos objetivos da doença. Soma: 1 + 2 + 3 = 6.",
    "commentary": "05 (A): soma de 1 + 4 ou 2 + 3, deixando de fora componentes corretos.\n\n08 (C) e 10 (D): incluem o item 4, que contraria o método.",
    "reference": "Stewart M et al. Medicina centrada na pessoa: transformando o método clínico (3ª ed.) / Gusso — Tratado de Medicina de Família e Comunidade",
    "tags": [
      "método clínico centrado na pessoa",
      "medicina de família e comunidade",
      "relação médico-paciente"
    ],
    "tip": "MCCP: experiência da doença, pessoa como um todo, plano conjunto, relação médico-pessoa."
  },
  {
    "id": "amrigs2026-87",
    "module": "Saúde Coletiva",
    "text": "No território de uma equipe de ESF, Ana, 38 anos, foi diagnosticada com depressão moderada durante uma consulta com o enfermeiro. A paciente relatou sintomas persistentes há mais de 6 meses, dificuldades familiares e pensamentos de desesperança, mas sem ideação suicida. Após acolhimento e escuta qualificada, o enfermeiro iniciou o plano de cuidado, com orientações, acompanhamento quinzenal e encaminhamento para consulta com o médico da equipe, que confirmou o diagnóstico e iniciou tratamento com antidepressivos. O caso foi discutido em reunião de equipe, e o médico e o enfermeiro combinaram ações de acompanhamento longitudinal, com reavaliação conjunta após 4 semanas. Com base na Política Nacional de Atenção Básica (PNAB) e na prática colaborativa em saúde, assinale a alternativa correta sobre a condução do caso descrito.",
    "options": [
      "O enfermeiro extrapolou suas atribuições ao conduzir a escuta inicial e propor plano de cuidado antes da consulta médica.",
      "A condução do caso demonstra inadequação ao modelo da ESF, pois o enfermeiro não pode atuar em condições de saúde mental.",
      "A atuação do enfermeiro está de acordo com suas competências, incluindo acolhimento, escuta e organização do processo de cuidado.",
      "O médico não deveria prescrever antidepressivos na APS sem avaliação de um profissional da saúde mental da atenção especializada."
    ],
    "correctAnswer": 2,
    "explanation": "Pela PNAB e pela lógica do trabalho em equipe, o enfermeiro faz acolhimento, escuta qualificada, consulta de enfermagem e organização do plano de cuidado, encaminhando ao médico quando necessário. A condução descrita — escuta, plano inicial, encaminhamento, discussão em equipe e seguimento compartilhado — é adequada.",
    "commentary": "Enfermeiro extrapolou atribuições (A): acolhimento, escuta e plano de cuidado de enfermagem são competências do enfermeiro.\n\nEnfermeiro não atua em saúde mental (B): saúde mental é responsabilidade de toda a equipe da APS.\n\nMédico não deve prescrever antidepressivo sem especialista (D): a depressão leve a moderada deve ser tratada na APS; o matriciamento ajuda nos casos complexos.",
    "reference": "PNAB 2017 / Ministério da Saúde — Caderno de Atenção Básica nº 34: Saúde mental",
    "tags": [
      "atenção primária",
      "saúde mental",
      "prática colaborativa",
      "papel do enfermeiro"
    ],
    "tip": "Depressão leve a moderada é cuidado da APS, em equipe."
  },
  {
    "id": "amrigs2026-88",
    "module": "Saúde Coletiva",
    "text": "Durante a primeira consulta de pré-natal, no primeiro trimestre da gestação, uma gestante de 35 anos apresenta sua caderneta vacinal desatualizada. Verifica-se que ela nunca recebeu vacina dTpa (difteria, tétano e coqueluche acelular) nem contra hepatite B.\n\nConsiderando as recomendações e protocolos atuais, qual das condutas a seguir é a mais apropriada?",
    "options": [
      "A dTpa deve ser aplicada imediatamente, para garantir proteção precoce contra coqueluche neonatal.",
      "A hepatite B deve ser iniciada no segundo trimestre, pois não é segura no primeiro trimestre.",
      "A dTpa deve ser aplicada a partir da 20ª semana de gestação, mesmo que seja a primeira dose da série.",
      "Nenhuma vacina deve ser administrada no primeiro trimestre da gestação, por risco teratogênico ao feto."
    ],
    "correctAnswer": 2,
    "explanation": "A dTpa é indicada em toda gestação a partir da 20ª semana (idealmente até 20 dias antes do parto), para transferir anticorpos e proteger o recém-nascido contra coqueluche. Na gestante sem vacinação prévia, completa-se o esquema com dT, sendo a dose de dTpa feita a partir de 20 semanas. A hepatite B pode ser iniciada em qualquer trimestre.",
    "commentary": "dTpa imediatamente (A): no primeiro trimestre a dTpa não é indicada; a passagem de anticorpos é maior após 20 semanas.\n\nHepatite B só no segundo trimestre (B): a vacina de hepatite B é inativada e segura em qualquer fase.\n\nNenhuma vacina no primeiro trimestre (D): vacinas inativadas (hepatite B, influenza, dT) podem ser feitas no primeiro trimestre.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Gestante (PNI) / Manual dos CRIE",
    "tags": [
      "vacinação na gestação",
      "dTpa",
      "hepatite B",
      "coqueluche"
    ],
    "tip": "dTpa: a partir de 20 semanas, em toda gestação."
  },
  {
    "id": "amrigs2026-89",
    "module": "Saúde Coletiva",
    "text": "Em relação às doenças e agravos de notificação compulsória imediata no território brasileiro, conforme a Portaria de Consolidação nº 4/2017 e suas atualizações mais recentes pelo Ministério da Saúde, assinale a alternativa que apresenta situações que obrigatoriamente exigem comunicação às autoridades de saúde em até 24 horas, por meio rápido (telefone, e-mail ou outro), independentemente de confirmação laboratorial.",
    "options": [
      "Malária adquirida em áreas endêmicas; febre amarela silvestre.",
      "Óbito por arboviroses; detecção de infecção por zika vírus em gestante.",
      "Hanseníase multibacilar; leptospirose em zona rural.",
      "Hanseníase virchowiana; infecção pelo vírus influenza A."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Lista Nacional de Notificação Compulsória, são de notificação imediata (até 24 h): óbito por arboviroses (dengue, chikungunya, zika) e infecção pelo vírus zika em gestante.",
    "commentary": "Malária em área endêmica e febre amarela silvestre (A): a malária na região amazônica é de notificação semanal (é imediata fora da Amazônia); febre amarela é imediata, mas o par não é todo imediato.\n\nHanseníase e leptospirose (C): notificação semanal.\n\nHanseníase virchowiana e influenza A (D): hanseníase é semanal; influenza só é imediata quando por novo subtipo pandêmico.",
    "reference": "Ministério da Saúde — Portaria de Consolidação nº 4/2017, Anexo 1 do Anexo V (atualizada pela Portaria GM/MS nº 217/2023)",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "arboviroses",
      "zika"
    ],
    "tip": "Arboviroses: caso é semanal; óbito, zika na gestante e chikungunya/dengue em área sem transmissão são imediatos."
  },
  {
    "id": "amrigs2026-90",
    "module": "Saúde Coletiva",
    "text": "Analise as assertivas a seguir, relativas aos indicadores de desempenho do Programa Previne Brasil:\nI. São avaliadas apenas as vacinas da pentavalente e da poliomielite inativada, aplicadas até os 12 meses de idade, no indicador de cobertura vacinal.\nII. Mulheres entre 25 e 64 anos são elegíveis para o indicador de exame citopatológico do colo do útero.\nIII. O indicador de saúde bucal da gestante considera a proporção de gestantes com pelo menos dois atendimentos odontológicos completos durante o pré-natal.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II, III e IV."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: o indicador de cobertura vacinal do Previne Brasil considerava pentavalente e poliomielite inativada em crianças de 1 ano.\nII correta: o indicador de citopatológico considera mulheres de 25 a 64 anos.\nIII incorreta: o indicador de saúde bucal era a proporção de gestantes com pelo menos UM atendimento odontológico no pré-natal.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada.\n\n\"I, II, III e IV\" (D): a III está errada (e não existe assertiva IV).",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 102/2022 (indicadores do Previne Brasil)",
    "tags": [
      "programa previne brasil",
      "indicadores de saúde",
      "atenção primária",
      "financiamento da APS"
    ],
    "tip": "Previne Brasil: gestante com ≥1 consulta odontológica; citopatológico 25–64 anos.",
    "alert": "Atenção: o Previne Brasil foi substituído em 2024 pelo novo modelo de cofinanciamento da APS. A questão cobra os indicadores da Portaria nº 102/2022."
  },
  {
    "id": "amrigs2026-91",
    "module": "Saúde Coletiva",
    "text": "Durante a primeira consulta, um cirurgião plástico atende uma paciente interessada em realizar uma abdominoplastia. Após exame físico, ele afirma à paciente: “Com a técnica que eu uso, garanto que você ficará com o abdome completamente liso, sem nenhuma cicatriz visível”. Com base na afirmação do profissional, a paciente assina o termo de consentimento informado e realiza a cirurgia. Contudo, no resultado final, a paciente apresenta cicatrizes evidentes e discreta flacidez residual. Sentindo-se enganada, a paciente aciona o Conselho Regional de Medicina. Sobre a conduta do médico, assinale a alternativa correta.",
    "options": [
      "O médico cometeu infração ética, pois é vedado prometer resultados, mesmo com boa técnica e assinatura do consentimento.",
      "A assinatura do consentimento informado descaracteriza infração ética, desde que a técnica tenha sido realizada adequadamente.",
      "A infração ética decorre da frustração da paciente com o resultado obtido, e não da promessa verbal feita pelo médico.",
      "A promessa de resultado pode ser considerada infração apenas se for comprovado que o médico omitiu os riscos e limitações do procedimento."
    ],
    "correctAnswer": 0,
    "explanation": "O Código de Ética Médica (art. 37 e normas de publicidade médica) veda ao médico garantir ou prometer resultados de tratamento. A promessa de resultado é infração em si, independentemente da técnica correta e da assinatura do termo de consentimento — que, aliás, fica viciado por ter sido obtido com base em informação enganosa.",
    "commentary": "Consentimento descaracteriza a infração (B): o termo não legitima uma promessa vedada; o consentimento exige informação verdadeira sobre riscos e limitações.\n\nInfração pela frustração da paciente (C): a infração está na promessa, não no sentimento da paciente.\n\nInfração só se omitiu riscos (D): prometer resultado já é vedado, mesmo que outros riscos tenham sido informados.",
    "reference": "Código de Ética Médica (Resolução CFM nº 2.217/2018) / Resolução CFM nº 2.336/2023 (publicidade médica)",
    "tags": [
      "ética médica",
      "consentimento informado",
      "cirurgia plástica",
      "código de ética médica"
    ],
    "tip": "Médico não pode prometer resultado."
  },
  {
    "id": "amrigs2026-92",
    "module": "Saúde Coletiva",
    "text": "Um estudo observacional transversal conduzido com 2.000 homens adultos avaliou os níveis séricos de vitamina D e testosterona. Os pesquisadores encontraram uma correlação positiva estatisticamente significativa entre os dois hormônios (p <0,01). Indivíduos com maiores níveis de vitamina D tendiam a apresentar níveis mais altos de testosterona total. Com base nesses achados, um médico afirmou em congresso: “Está claro que a reposição de vitamina D aumenta os níveis de testosterona nos homens”. Sobre a afirmação feita pelo profissional, é correto afirmar que:",
    "options": [
      "A correlação identificada sugere causalidade, pois é estatisticamente significativa.",
      "O delineamento transversal do estudo não permite afirmar relação causal entre as variáveis.",
      "O p-valor <0,01 confirma que a vitamina D regula a produção testicular de testosterona.",
      "A associação entre as variáveis confirma que a reposição de vitamina D é indicada para todos os homens com baixa testosterona."
    ],
    "correctAnswer": 1,
    "explanation": "Estudo transversal mede exposição e desfecho no mesmo momento: mostra associação, mas não permite estabelecer temporalidade nem causalidade (pode haver confundimento — como obesidade, atividade física e exposição solar — ou causalidade reversa). A afirmação de que a reposição aumenta a testosterona exigiria um ensaio clínico.",
    "commentary": "Correlação significativa sugere causalidade (A): significância estatística não prova causa.\n\np <0,01 confirma regulação testicular (C): o valor-p não informa sobre mecanismo nem causalidade.\n\nAssociação justifica reposição para todos (D): uma associação observacional não fundamenta indicação terapêutica.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "estudo transversal",
      "causalidade",
      "associação",
      "desenhos de estudo"
    ],
    "tip": "Transversal: fotografia — mostra associação, não causa."
  },
  {
    "id": "amrigs2026-93",
    "module": "Saúde Coletiva",
    "text": "Um pronto-socorro de referência recebe um adolescente febril, com cefaleia intensa, rigidez de nuca e vômitos. Diante da suspeita de meningite bacteriana, é realizado um teste laboratorial rápido, cuja razão de verossimilhança negativa (LR-) é de 0,01. O resultado do teste foi negativo. Sabendo-se que a probabilidade pré-teste estimada pelo médico era de 40%, e considerando a gravidade do quadro clínico, qual das seguintes condutas e interpretações é mais adequada?",
    "options": [
      "Iniciar antibioticoterapia empírica imediatamente, pois a gravidade da doença exige tratamento mesmo com baixa probabilidade.",
      "Confiar no teste e descartar meningite bacteriana, pois o resultado negativo reduz fortemente a probabilidade pós-teste.",
      "Repetir o teste para confirmar o resultado, já que a sensibilidade foi baixa.",
      "Concluir que o teste é pouco útil, pois seu valor preditivo negativo é baixo em contextos de alta suspeita."
    ],
    "correctAnswer": 1,
    "explanation": "Cálculo: probabilidade pré-teste 40% → chance pré-teste = 0,4 ÷ 0,6 ≈ 0,67. Chance pós-teste = 0,67 × 0,01 ≈ 0,0067 → probabilidade pós-teste ≈ 0,7%. Uma RV− de 0,01 é extremamente forte: o resultado negativo praticamente exclui a doença, mesmo com alta suspeita inicial.",
    "commentary": "Tratar de qualquer forma (A): a probabilidade pós-teste cai para menos de 1%; o raciocínio do enunciado aponta para descartar o diagnóstico.\n\nRepetir por baixa sensibilidade (C): RV− de 0,01 indica sensibilidade muito alta.\n\nTeste pouco útil por VPN baixo (D): com RV− de 0,01, o VPN é alto mesmo com probabilidade pré-teste de 40%.\n\nObservação: na prática, diante de quadro clínico tão sugestivo e grave, muitos manteriam a investigação (líquor completo); a questão cobra a interpretação da razão de verossimilhança.",
    "reference": "Fletcher — Epidemiologia Clínica / McGee — Evidence-Based Physical Diagnosis",
    "tags": [
      "razão de verossimilhança",
      "probabilidade pós-teste",
      "testes diagnósticos",
      "teorema de Bayes"
    ],
    "tip": "RV− ≤0,1 exclui bem; RV− 0,01 praticamente zera a probabilidade."
  },
  {
    "id": "amrigs2026-94",
    "module": "Saúde Coletiva",
    "text": "Durante um estudo multicêntrico sobre os efeitos adversos gastrointestinais de um novo AINE, foram acompanhados pacientes com osteoartrite que utilizavam regularmente a medicação. Após 12 meses de seguimento, observou-se que 10% dos usuários do novo AINE desenvolveram úlcera gástrica, documentada por endoscopia, enquanto 5% dos pacientes no grupo controle (que usavam um AINE clássico) apresentaram o mesmo desfecho. Com base nesses dados, o número necessário para causar dano (NNH), isto é, o número de pacientes que precisam ser tratados com o novo AINE para que um caso adicional de úlcera gástrica ocorra é, aproximadamente:",
    "options": [
      "05.",
      "10.",
      "20.",
      "50."
    ],
    "correctAnswer": 2,
    "explanation": "NNH = 1 ÷ aumento absoluto do risco. Aumento absoluto: 10% − 5% = 5% = 0,05. NNH = 1 ÷ 0,05 = 20: a cada 20 pacientes tratados com o novo AINE, ocorre uma úlcera a mais que com o AINE clássico.",
    "commentary": "05 (A): confunde a diferença percentual (5) com o NNH.\n\n10 (B): usaria o risco de 10% no lugar da diferença.\n\n50 (D): corresponderia a uma diferença de 2%.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "número necessário para causar dano",
      "NNH",
      "aumento absoluto do risco",
      "medicina baseada em evidências"
    ],
    "tip": "NNT/NNH = 1 ÷ diferença absoluta de risco."
  },
  {
    "id": "amrigs2026-95",
    "module": "Saúde Coletiva",
    "text": "Durante a avaliação de um teste sorológico para hepatite B, pesquisadores observaram que seu Valor Preditivo Positivo (VPP) foi de 40% quando aplicado em campanhas populacionais abertas. No entanto, quando aplicado exclusivamente em grupos de risco, como profissionais de saúde expostos a material biológico e usuários de drogas injetáveis, o VPP aumentou para 85%, mantendo-se inalteradas a sensibilidade e a especificidade do teste.\n\nConsiderando as informações apresentadas, assinale a alternativa correta sobre o comportamento do VPP.",
    "options": [
      "O aumento do VPP nos grupos de risco decorre da modificação da acurácia do teste em subgrupos com maior carga viral média e maior expressão antigênica.",
      "A variação do VPP resulta da interação entre sensibilidade e prevalência, já que populações de maior risco apresentam também maior proporção de falsos-negativos.",
      "O comportamento do VPP reflete a dependência direta do valor preditivo em relação à prevalência da doença nos grupos avaliados, apesar de a sensibilidade e a especificidade serem constantes.",
      "A diferença entre os VPPs é consequência da influência do viés de verificação, já que casos positivos nos grupos de risco são mais frequentemente confirmados por exames moleculares."
    ],
    "correctAnswer": 2,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e não mudam com a população. Os valores preditivos dependem da prevalência: quanto maior a prevalência (grupos de risco), maior o valor preditivo positivo e menor o negativo. Foi exatamente o que se observou.",
    "commentary": "Mudança de acurácia em subgrupos (A): o enunciado diz que sensibilidade e especificidade se mantiveram.\n\nInteração com sensibilidade e mais falsos-negativos (B): o VPP depende da prevalência e da especificidade (falsos-positivos), não dos falsos-negativos.\n\nViés de verificação (D): não há dado sobre verificação diferencial; a explicação é a prevalência.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "valor preditivo positivo",
      "prevalência",
      "testes diagnósticos"
    ],
    "tip": "Prevalência ↑ → VPP ↑ e VPN ↓."
  },
  {
    "id": "amrigs2026-96",
    "module": "Saúde Coletiva",
    "text": "Um teste rápido para triagem de infecção pelo HIV foi avaliado em uma população com suspeita clínica moderada, em contexto ambulatorial. O exame apresenta sensibilidade de 100% e especificidade de 98%. Considerando esses parâmetros e o papel do teste no raciocínio clínico e epidemiológico, assinale a alternativa correta.",
    "options": [
      "Todos os positivos têm HIV.",
      "Nenhum paciente com HIV terá resultado negativo.",
      "2% dos doentes terão falso-negativo.",
      "Todos os negativos estão livres da doença."
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade de 100% significa que todos os doentes têm teste positivo — nenhum falso-negativo. Logo, nenhum paciente com HIV terá resultado negativo.",
    "commentary": "Todos os positivos têm HIV (A): com especificidade de 98%, 2% dos não doentes terão falso-positivo.\n\n2% dos doentes com falso-negativo (C): 2% se refere aos não doentes (falso-positivos), não aos doentes.\n\nTodos os negativos livres da doença (D): com sensibilidade de 100%, é verdade no plano teórico — mas a alternativa B é a que traduz diretamente a sensibilidade, e o resultado negativo também depende da fase da infecção (janela imunológica).",
    "reference": "Fletcher — Epidemiologia Clínica / Ministério da Saúde — Manual técnico para o diagnóstico da infecção pelo HIV",
    "tags": [
      "sensibilidade",
      "especificidade",
      "testes diagnósticos",
      "HIV"
    ],
    "tip": "Sensibilidade = positivo nos doentes. Especificidade = negativo nos sadios.",
    "alsoAccepted": [
      3
    ],
    "alert": "Gabarito discutível: com sensibilidade de 100% não há falsos-negativos, então todo negativo está livre da doença (VPN = 100%) — a alternativa D também é verdadeira. A banca manteve B. Neste simulado, a alternativa D também é aceita como correta."
  },
  {
    "id": "amrigs2026-97",
    "module": "Saúde Coletiva",
    "text": "Em um ensaio clínico randomizado sobre uso de estatinas em prevenção primária, 15% dos pacientes do grupo controle passaram a tomar estatina por conta própria. Os autores mantiveram esses pacientes no grupo original da randomização. É correto afirmar que essa decisão:",
    "options": [
      "Introduz viés de aferição.",
      "Distorce os resultados, tornando-os estatisticamente nulos.",
      "É compatível com a análise por intenção de tratar.",
      "Exige reclassificação dos pacientes por grupo de exposição real."
    ],
    "correctAnswer": 2,
    "explanation": "Manter cada participante no grupo para o qual foi randomizado, independentemente da adesão (inclusive quem trocou de tratamento por conta própria), é a análise por intenção de tratar. Ela preserva os benefícios da randomização e reflete a efetividade no mundo real, embora tenda a subestimar o efeito.",
    "commentary": "Viés de aferição (A): refere-se a erro na medida do desfecho, não à análise por grupo.\n\nTorna os resultados nulos (B): a contaminação dilui o efeito, mas não anula o resultado.\n\nReclassificação pela exposição real (D): isso seria análise por protocolo/as-treated, que quebra a randomização.",
    "reference": "CONSORT Statement (2010) / Fletcher — Epidemiologia Clínica",
    "tags": [
      "intenção de tratar",
      "ensaio clínico randomizado",
      "análise por protocolo"
    ],
    "tip": "Intenção de tratar: analisa como randomizou."
  },
  {
    "id": "amrigs2026-98",
    "module": "Saúde Coletiva",
    "text": "Pesquisadores de um hospital universitário desenharam um estudo para avaliar a associação entre o tabagismo e o risco de parto prematuro. Gestantes no primeiro trimestre foram incluídas e, após avaliação clínica e preenchimento de um formulário padronizado sobre hábitos de vida, foram classificadas como fumantes ou não fumantes. Durante o acompanhamento pré-natal, todas as participantes foram atendidas conforme seus protocolos clínicos, com visitas regulares e coleta de dados sistemática, até o desfecho da gestação. Ao final, os pesquisadores compararam a taxa de partos prematuros (<37 semanas) entre os dois grupos. Com base nessa descrição e considerando o delineamento do estudo, é correto afirmar que se trata de um:",
    "options": [
      "Estudo de caso-controle.",
      "Estudo transversal.",
      "Ensaio clínico controlado.",
      "Estudo de coorte."
    ],
    "correctAnswer": 3,
    "explanation": "Gestantes classificadas pela exposição (fumantes e não fumantes) no início e acompanhadas até o desfecho (parto prematuro), comparando a incidência entre os grupos: estudo de coorte prospectivo. Os pesquisadores não interferiram na exposição.",
    "commentary": "Caso-controle (A): partiria do desfecho (prematuros e não prematuros) para buscar a exposição.\n\nTransversal (B): mediria exposição e desfecho no mesmo momento, sem seguimento.\n\nEnsaio clínico (C): exigiria que os pesquisadores alocassem a exposição.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "estudo de coorte",
      "desenhos de estudo",
      "tabagismo na gestação",
      "prematuridade"
    ],
    "tip": "Coorte: parte da exposição e segue até o desfecho."
  },
  {
    "id": "amrigs2026-99",
    "module": "Clínica Médica",
    "text": "Mulher, 55 anos, viúva, procurou a unidade de saúde com queixas persistentes de tristeza, perda de interesse por atividades antes prazerosas, fadiga, distúrbios do sono, hiporexia e sentimentos de inutilidade há cerca de 2 meses. Foi diagnosticada com episódio depressivo maior, de gravidade moderada, sem ideação suicida ativa. Diante de histórico de boa resposta prévia e dificuldade de acesso a medicações mais recentes, foi iniciada amitriptilina, com ajuste gradual da dose até 75 mg/dia, administrada à noite. Após 3 semanas de uso regular da medicação, a paciente retorna à consulta relatando alguns efeitos colaterais. Considerando o caso apresentado, relacione a Coluna 1 à Coluna 2, associando cada mecanismo farmacológico da amitriptilina aos respectivos efeitos colaterais relatados pela paciente.\n\nColuna 1:\n1. Efeito anti-histamínico.\n2. Antagonismo α1-adrenérgico.\n3. Efeito anticolinérgico.\n\nColuna 2:\n( ) Boca seca intensa e visão turva para leitura.\n( ) Tontura ao se levantar rapidamente da cama e, ao exame físico, PA de 110/70 mmHg em pé e de 130/85 mmHg em repouso.\n( ) Episódios de constipação intestinal, com intervalos de até 4 dias sem evacuar.\n( ) Sensação de sonolência diurna, dificuldade para manter-se acordada após o almoço e aumento do apetite.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "options": [
      "3 – 2 – 3 – 1.",
      "3 – 1 – 1 – 2.",
      "1 – 2 – 3 – 1.",
      "2 – 1 – 3 – 2."
    ],
    "correctAnswer": 0,
    "explanation": "A amitriptilina (tricíclico) bloqueia vários receptores:\n\n• Boca seca e visão turva — anticolinérgico (3).\n• Hipotensão postural com tontura ao levantar — antagonismo α1-adrenérgico (2).\n• Constipação — anticolinérgico (3).\n• Sonolência e aumento do apetite — anti-histamínico H1 (1).\n\nSequência: 3 – 2 – 3 – 1.",
    "commentary": "3 – 1 – 1 – 2 (B): hipotensão postural é α1, e constipação é anticolinérgica.\n\n1 – 2 – 3 – 1 (C): boca seca é anticolinérgica, não anti-histamínica.\n\n2 – 1 – 3 – 2 (D): troca α1 e H1.",
    "reference": "Kaplan & Sadock — Compêndio de Psiquiatria / Stahl — Psicofarmacologia",
    "tags": [
      "amitriptilina",
      "antidepressivos tricíclicos",
      "efeitos adversos",
      "farmacologia"
    ],
    "tip": "Tricíclico: anticolinérgico (boca seca, constipação), α1 (hipotensão postural), H1 (sono, fome)."
  },
  {
    "id": "amrigs2026-100",
    "module": "Clínica Médica",
    "text": "Homem, 42 anos, durante consulta na atenção primária, relatou fumar cerca de 20 cigarros ou mais por dia, há mais de 15 anos. Diz sentir forte necessidade de fumar logo ao acordar e que já tentou parar 2 vezes, mas recaiu por irritabilidade e ansiedade. Atualmente, afirma estar decidido a parar de fumar nas próximas semanas, e está em busca de auxílio para planejar a cessação. Ainda não definiu uma data exata, mas deseja iniciar o processo o quanto antes. Ao teste de Fagerström, apresenta escore 7. Com base nas diretrizes terapêuticas para tabagismo, analise as assertivas a seguir:\nI. Na data escolhida para parar de fumar, deve-se iniciar imediatamente o uso de adesivo de nicotina de 21 mg/dia, associando bupropiona 150 mg 1 vez ao dia, por 3 dias, e depois aumentar para 2 vezes ao dia.\nII. A combinação da oferta de abordagens comportamentais (que ajudam a lidar com os sintomas de abstinência à nicotina) com a farmacoterapia é o formato mais útil para os pacientes que estão tentando parar de fumar.\nIII. Como segunda linha, clonidina e nortriptilina são opções terapêuticas para cessação do tabagismo, embora com maior perfil de efeitos adversos.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: a bupropiona deve ser iniciada 1 a 2 semanas ANTES da data de parada (150 mg/dia por 3 dias, depois 150 mg 2x/dia); o adesivo de nicotina começa na data de parada. Iniciar os dois no mesmo dia está errado.\nII correta: a associação de abordagem cognitivo-comportamental com farmacoterapia é a estratégia mais eficaz.\nIII correta: nortriptilina e clonidina são medicamentos de segunda linha, com mais efeitos adversos.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Ministério da Saúde — PCDT do Tabagismo (2020) / INCA",
    "tags": [
      "tabagismo",
      "cessação do tabagismo",
      "bupropiona",
      "terapia de reposição de nicotina",
      "teste de Fagerström"
    ],
    "tip": "Bupropiona: começar 1–2 semanas antes do Dia D; adesivo no Dia D."
  }
];
